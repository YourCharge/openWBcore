import{C as l}from"./index-d1717957.js";import{_,q as o,l as a,m as i,u as b,A as s,K as r,v as p}from"./vendor-6ce277ad.js";import"./vendor-fortawesome-b3888957.js";import"./vendor-bootstrap-d19731a7.js";import"./vendor-jquery-44ace3c0.js";import"./vendor-axios-03377982.js";import"./vendor-sortablejs-bb80b62c.js";const f={name:"OpenwbInstantChargeConfig",mixins:[l],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/instant_charging/phases_to_use"]}}},h={class:"instantChargeConfig"},c={name:"instantChargeConfigForm"},v={key:0},C={key:1};function w(t,e,$,B,k,x){const m=o("openwb-base-alert"),u=o("openwb-base-button-group-input"),d=o("openwb-base-card"),g=o("openwb-base-submit-buttons");return a(),i("div",h,[b("form",c,[s(d,{title:"Phasenumschaltung"},{default:r(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),i("div",v,[s(m,{subtype:"info"},{default:r(()=>[p(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(a(),i("div",C,[s(u,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/instant_charging/phases_to_use"],"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateState("openWB/general/chargemode_config/instant_charging/phases_to_use",n))},{help:r(()=>[p(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "Sofortladen" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit vom Ladepunkt und Fahrzeug durchgeführt werden. ')]),_:1},8,["model-value"])]))]),_:1}),s(g,{formName:"instantChargeConfigForm",onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})])])}const A=_(f,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstantChargeConfig.vue"]]);export{A as default};