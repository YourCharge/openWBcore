import{C as m}from"./index-b0e5e618.js";import p from"./InstallAssistantStepTemplate-b7a8caa2.js";import{D as l}from"./DataManagement-eb2fc5d7.js";import{_ as d,u as a,k as u,A as g,N as i,D as f,x as c}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";import"./dynamic-import-helper-be004503.js";const A={name:"InstallAssistantStep1",mixins:[m],emits:["save","reset","defaults","sendCommand","switchPage","endAssistant"],components:{InstallAssistantStepTemplate:p,DataManagement:l},data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){this.$emit("switchPage",2)},previousPage(){this.$emit("switchPage",0)},endAssistant(){this.$emit("endAssistant")}}},v=c("p",null," Wir empfehlen an dieser Stelle eine Sicherung der openWB zu erzeugen, auf welche später zurückgegriffen werden kann, insbesondere, wenn die openWB schon konfiguriert war und der Assistent nun erneut ausgeführt wird. ",-1);function S(t,e,P,h,w,n){const o=a("DataManagement"),r=a("InstallAssistantStepTemplate");return u(),g(r,{title:"1. Datensicherung - Eine Sicherung erstellen",onNextPage:n.nextPage,onPreviousPage:n.previousPage,onEndAssistant:n.endAssistant},{help:i(()=>[v]),content:i(()=>[f(o,{installAssistantActive:!0,showBackupCloudSection:!1,onSendCommand:e[0]||(e[0]=s=>t.$emit("sendCommand",s)),onSave:e[1]||(e[1]=s=>t.$emit("save")),onReset:e[2]||(e[2]=s=>t.$emit("reset")),onDefaults:e[3]||(e[3]=s=>t.$emit("defaults"))})]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const b=d(A,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep1.vue"]]);export{b as default};