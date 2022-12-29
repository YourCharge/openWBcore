#!/usr/bin/python3

import os, requests, json, time, sys, os
import logging
from datetime import datetime, timezone
from requests.exceptions import Timeout, RequestException
from json import JSONDecodeError
from typing import Tuple
from modules.vehicles.mercedeseq.config import MercedesEQSoc

ramdiskdir = '/var/www/html/openWB/ramdisk/'
moduledir = '/var/www/html/openWB/packages/modules/vehicles/mercedeseq/'

req_timeout=(30,30) #timeout for requests in seconds

vehicle       = None


Debug         = 2
#myPid         = "4711"

tok_url   = "https://ssoalpha.dvb.corpinter.net/v1/token"
soc_url_pre_vin   = "https://api.mercedes-benz.com/vehicledata/v2/vehicles/"
soc_url_post_vin  = "/containers/electricvehicle"

log = logging.getLogger("soc."+__name__)

soc = None
range = None
timestamp = None

def socDebugLog(message):
    pass
    #local_time = datetime.now(timezone.utc).astimezone()
    #print(local_time.strftime(format = "%Y-%m-%d %H:%M:%S") +": EV" +vehicle + ": PID:"+ myPid + ": " + message)
    log.debug(": EV" +str(vehicle) +  ": " + message)


def handleResponse(what, status_code, text):
    if status_code == 204:
        # this is not an error code. Nothing to fetch so nothing to update and no reason to exit(1)  
        socDebugLog(what + " Request Code: " + str(status_code) + " (no data is available for the resource)")
        socDebugLog(text)
    elif status_code == 400:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (Bad Request)")
        socDebugLog(text)
        exit(1)
    elif status_code == 401:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (Invalid or missing authorization in header)")
        socDebugLog(text)
        exit(1)
    elif status_code == 402:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (Payment required)")
        socDebugLog(text)
        exit(1)
    elif status_code == 403:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (Forbidden)")
        socDebugLog(text)
        exit(1)
    elif status_code == 404:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (The requested resource was not found, e.g.: the selected vehicle could not be found)")
        socDebugLog(text)
        exit(1)
    elif status_code == 429:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (The service received too many requests in a given amount of time)")
        socDebugLog(text)
        exit(1)
    elif status_code == 500:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (The service received too many requests in a given amount of time)")
        socDebugLog(text)
        exit(1)
    elif status_code == 503:
        socDebugLog(what + " Request fehlgeschlagen Code: " + str(status_code) + " (The server is unable to service the request due to a temporary unavailability condition)")
        socDebugLog(text)
        exit(1)
    else:
        socDebugLog(what + " Request fehlgeschlagen unbekannter Code: " + str(status_code))
        socDebugLog(text)
        exit(1)


def fetch_soc(config: MercedesEQSoc,
              vehicle_id: int) -> Tuple[float, float]:
    if Debug >= 1:
        socDebugLog("Debug Level: " + str(Debug))
    
    client_id=config.configuration.client_id
    client_secret=config.configuration.client_secret
    vin=config.configuration.vin
    soc_url   = soc_url_pre_vin + str(vin) + soc_url_post_vin
    vehicle = vehicle_id 
    if Debug >= 1:
        socDebugLog("client: " + client_id)
    

    if Debug >= 2:
        socDebugLog("SOC URL: " + soc_url)

    #Get Access token from file

    fd = open(moduledir + 'soc_eq_acc_ev' + str(vehicle),'r')
    try:
        tok = json.load(fd)
        access_token = tok['access_token']
    except ValueError:
        socDebugLog("ERROR: Access Token not found. Please use Link 'HIER bei Mercedes Me' anmelden in EV Configuration")
        exit(3)        
    refresh_token = tok['refresh_token']
    expires_in = tok['expires_in']
    fd.close()

    socDebugLog("Token expires in: " +str((int(expires_in)-int(time.time())))+"s")

    if int(expires_in) < int(time.time()):
        #Access Token is exired
        if Debug >= 1:
            socDebugLog("Acc Token Expired")
  
        #get new Access Token with referesh token
        data = {'grant_type': 'refresh_token', 'refresh_token': refresh_token }
        ref = requests.post(tok_url, data=data, verify=True, allow_redirects=False, auth=(client_id, client_secret), timeout=req_timeout)
        if Debug >= 1:
            socDebugLog("Refresh Token Call:" + str(ref.status_code))
            socDebugLog("Refresh Token Text:" + str(ref.text))


        #write HTTP reponse code to file
        try:
            fd = open(ramdiskdir + 'soc_eq_lastresp','w')
            fd.write(str(ref.status_code))
            fd.close()
        except:
            fd.close()


        if ref.status_code == 200:
            #valid response
            tok = json.loads(ref.text)

            access_token = tok['access_token']
            refresh_token = tok['refresh_token']
            expires_in = tok['expires_in'] - 60 + int(time.time())
            id_token = tok['id_token']
            token_type = tok['token_type']

            #write new tokens
  
            fd = open(moduledir + 'soc_eq_acc_ev' + str(vehicle),'w')
            json.dump({'expires_in' : expires_in, 'refresh_token' : refresh_token, 'access_token' : access_token, 'id_token' : id_token, 'token_type' : token_type}, fd)
            fd.close()
        else:
            handleResponse("Refresh",ref.status_code,ref.text)

    #call API for SoC
    header = {'authorization': 'Bearer ' + access_token}
    try:

        req_soc = requests.get(soc_url, headers=header, verify=True)
        #req_soc = requests.get(soc_url, headers=header, verify=True, timeout=req_timeout)

    except Timeout:
        socDebugLog("Soc Request Timed Out")
        exit(2)

    except RequestException:
        socDebugLog("Soc Request Request Exception occured " + soc_url)
        exit(2)

    if Debug >= 1:
        socDebugLog("SOC Request: " + str(req_soc.status_code))
        socDebugLog("SOC Response: " + req_soc.text)

    #write HTTP reponse code to file
    try:
        fd = open(ramdiskdir + 'soc_eq_lastresp','w')
        fd.write(str(req_soc.status_code))
        fd.close()
    except:
        fd.close()

    if req_soc.status_code == 200:
        #valid Response
        try:
            res = json.loads(req_soc.text)
        except JSONDecodeError:
            socDebugLog("Soc Response NO VALID JSON " + req_soc.text)
            exit(2)

        #Extract SoC value and write to file
        for entry in res:
            for values in entry:
                if values == "soc":
                    soc = entry[values]['value']
                    timestamp=entry[values]['timestamp']
                elif values == "rangeelectric":
                    range = entry[values]['value']
                else:
                    socDebugLog("unknown entry: " + entry)
        if not soc:
            socDebugLog("SoC Value not filled " + req_soc.text)
            soc = "0"
        if not range:
            socDebugLog("RangeElectric Value not filled " + req_soc.text)
            range = "0"
        socDebugLog("SOC: " + soc + " RANGE: " + range)

        # fd = open(soc_file,'w')
        # fd.write(str(soc))
        # fd.close()
        return float(soc),float(range)
    else:
        handleResponse("SoC",req_soc.status_code,req_soc.text)
        return 0,0
    