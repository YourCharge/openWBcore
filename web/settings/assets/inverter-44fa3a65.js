import{C as l}from"./HardwareInstallation-2c646227.js";import{_ as u,u as n,k as d,l as c,G as o,E as r,y as i}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./index-0eaa3ed7.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceSmahmInverter",mixins:[l]},f={class:"device-smahm-inverter"};function b(t,e,v,g,h,w){const s=n("openwb-base-heading"),a=n("openwb-base-alert"),m=n("openwb-base-number-input");return d(),c("div",f,[o(s,null,{default:r(()=>e[1]||(e[1]=[i(" Einstellungen für SMA-HM/EM Wechselrichter ")])),_:1}),o(a,{subtype:"info"},{default:r(()=>e[2]||(e[2]=[i(' Dies ist nur die richtige Komponente, wenn ein extra EnergyMeter ausschließlich für die PV-Messung vorhanden ist. Wenn nur ein HomeManager vorhanden ist, muss ein Gerät "SMA Sunny Boy" mit der entsprechenden Wechselrichter-Komponente angelegt werden. ')])),_:1}),o(m,{title:"Seriennummer",required:"","model-value":t.component.configuration.serials,"onUpdate:modelValue":e[0]||(e[0]=p=>t.updateConfiguration(p,"configuration.serials"))},null,8,["model-value"])])}const $=u(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma/sma_shm/inverter.vue"]]);export{$ as default};