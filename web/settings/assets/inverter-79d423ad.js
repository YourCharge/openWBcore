import{C as m}from"./HardwareInstallation-a0083e3a.js";import{_ as c,u as o,k as d,l as u,D as t,N as i,y as r}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./index-b0e5e618.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const l={name:"DeviceEnphaseInverter",mixins:[m]},_={class:"device-enphase-inverter"};function f(e,n,v,b,h,g){const s=o("openwb-base-heading"),p=o("openwb-base-number-input");return d(),u("div",_,[t(s,null,{default:i(()=>[r(" Einstellungen für Enphase Envoy / IQ Gateway Wechselrichter ")]),_:1}),t(p,{title:"EID",required:"","model-value":e.component.configuration.eid,"onUpdate:modelValue":n[0]||(n[0]=a=>e.updateConfiguration(a,"configuration.eid"))},{help:i(()=>[r(' EID für "production" ')]),_:1},8,["model-value"])])}const B=c(l,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/enphase/inverter.vue"]]);export{B as default};