import{C as l}from"./index-f9fda857.js";import u from"./InstallAssistantStepTemplate-3c026c08.js";import{a as m}from"./VehicleConfig-e8ea05c9.js";import{_ as g,u as a,k as h,A as p,N as r,x as n,D as f}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"InstallAssistantStep8",components:{InstallAssistantStepTemplate:u,VehicleConfigView:m},mixins:[l],emits:["save","reset","defaults","sendCommand","switchPage","endAssistant"],data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){this.$emit("switchPage",9)},previousPage(){this.$emit("switchPage",7)},endAssistant(){this.$emit("endAssistant")}}};function z(t,e,P,w,v,i){const o=a("VehicleConfigView"),d=a("InstallAssistantStepTemplate");return h(),p(d,{title:"7. Einrichten der Fahrzeuge",onNextPage:i.nextPage,onPreviousPage:i.previousPage,onEndAssistant:i.endAssistant},{help:r(()=>e[4]||(e[4]=[n("p",null," Vor dem eigentlichen Fahrzeug werden zuerst die Fahrzeug- und Lade-Profile konfiguriert. ",-1),n("p",null," Bei nur einem Fahrzeug reicht das Standard-Fahrzeug-Profil aus. Bei mehreren Fahrzeugtypen werden weitere Fahrzeug-Profile hinzugefügt. Im Anschluss werden die Fahrzeug-Profile mit den passenden Einstellungen des Fahrzeugtyps versehen (Mindeststromstärke, Maximalstromstärke bei einer/mehreren Phase/n sowie Angaben zur Batterie und Handhabung der Phasen entsprechend den Daten des Automobilherstellers. Im Zweifelsfall den Hersteller des Autos oder im openWB-Forum nachfragen). ",-1),n("p",{class:"font-weight-bold"},' Wichtig: Die "Angaben zur Handhabung von Phasen" des Fahrzeugs ist richtig einzutragen! ',-1),n("p",null," Bei nur einem Fahrzeug reicht das Standard-Lade-Profil aus. Bei mehreren Fahrzeugen können weitere Lade-Profile hinzugefügt werden. Dies erlaubt die Nutzung unterschiedlicher Lademodi je Fahrzeug (z.B. EV1 = Sofortladen, EV2 = PV-Laden). Im Anschluss werden die Voreinstellungen zu den verschiedenen Lademodi konfiguriert. ",-1),n("p",null," Nun wird das eigentliche Fahrzeug angelegt und mit dem gewünschten Fahrzeug-Profil / Lade-Profil versehen. Ist nur ein Fahrzeug vorhanden, reicht das Standard-Fahrzeug aus. ",-1),n("p",{class:"font-weight-bold"}," Änderungen werden nur bei klicken auf Speichern wirksam! ",-1)])),content:r(()=>[f(o,{"install-assistant-active":!0,onSendCommand:e[0]||(e[0]=s=>t.$emit("sendCommand",s)),onSave:e[1]||(e[1]=s=>t.$emit("save")),onReset:e[2]||(e[2]=s=>t.$emit("reset")),onDefaults:e[3]||(e[3]=s=>t.$emit("defaults"))})]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const x=g(c,[["render",z],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep8.vue"]]);export{x as default};