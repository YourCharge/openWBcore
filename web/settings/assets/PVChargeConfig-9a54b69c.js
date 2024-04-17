import{C as w}from"./index-7047722a.js";import{_ as W,q as h,k as o,l as g,u as i,B as a,M as s,x as r,z as b,A as p}from"./vendor-f0f38b48.js";import"./vendor-fortawesome-9fdc06a9.js";import"./vendor-bootstrap-384bc385.js";import"./vendor-jquery-8576ed22.js";import"./vendor-axios-e59ef189.js";import"./vendor-sortablejs-cbf37f8f.js";const B={name:"OpenwbPVChargeConfig",mixins:[w],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/pv_charging/control_range","openWB/general/chargemode_config/pv_charging/feed_in_yield","openWB/general/chargemode_config/pv_charging/switch_on_threshold","openWB/general/chargemode_config/pv_charging/switch_on_delay","openWB/general/chargemode_config/pv_charging/switch_off_threshold","openWB/general/chargemode_config/pv_charging/switch_off_delay","openWB/general/chargemode_config/pv_charging/phases_to_use","openWB/general/chargemode_config/pv_charging/phase_switch_delay","openWB/general/chargemode_config/pv_charging/bat_mode","openWB/general/chargemode_config/pv_charging/bat_power_reserve","openWB/general/chargemode_config/pv_charging/bat_power_reserve_active","openWB/general/chargemode_config/pv_charging/bat_power_discharge","openWB/general/chargemode_config/pv_charging/bat_power_discharge_active","openWB/general/chargemode_config/pv_charging/min_bat_soc"],calculatedControlMode:void 0}},computed:{controlMode:{get(){if(this.calculatedControlMode!==void 0)return this.calculatedControlMode;const n="openWB/general/chargemode_config/pv_charging/control_range";let e=this.$store.state.mqtt[n];var u="individual";return typeof e<"u"&&(e[0]===-230&&e[1]===0?u="export":e[0]===0&&e[1]===230?u="import":e[0]===-115&&e[1]===115?u="balanced":u="individual"),u},set(n){const e="openWB/general/chargemode_config/pv_charging/control_range";switch(this.calculatedControlMode=n,n){case"export":this.updateState(e,[-230,0]);break;case"import":this.updateState(e,[0,230]);break;case"balanced":this.updateState(e,[-115,115]);break}}},batMode(){return this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_mode"]}},watch:{controlMode(n){this.calculatedControlMode=n}}},S={class:"pvChargeConfig"},V={name:"pvChargeConfigForm"},z={key:0},k={key:1},M=i("br",null,null,-1),y=i("br",null,null,-1),E=i("hr",null,null,-1),q=i("br",null,null,-1),L=i("br",null,null,-1),C=i("hr",null,null,-1),R=i("br",null,null,-1),A=i("br",null,null,-1),P=i("hr",null,null,-1),U=i("br",null,null,-1),$=i("br",null,null,-1),F=i("br",null,null,-1),D=i("br",null,null,-1),N={key:0},I={key:1},O={key:0},T={key:1},Z=i("br",null,null,-1),G=i("br",null,null,-1),H=i("br",null,null,-1),J=i("br",null,null,-1),j=i("br",null,null,-1),K=i("br",null,null,-1),Q={key:0},X=i("br",null,null,-1);function Y(n,e,u,x,ee,d){const m=h("openwb-base-alert"),c=h("openwb-base-button-group-input"),l=h("openwb-base-number-input"),_=h("openwb-base-card"),v=h("openwb-base-range-input"),f=h("openwb-base-submit-buttons");return o(),g("div",S,[i("form",V,[a(_,{title:"Regelparameter"},{default:s(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(o(),g("div",z,[a(m,{subtype:"info"},{default:s(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),g("div",k,[a(c,{title:"Regelmodus",buttons:[{buttonValue:"export",text:"Einspeisung"},{buttonValue:"import",text:"Bezug"},{buttonValue:"balanced",text:"Ausgewogen"},{buttonValue:"individual",text:"Individuell"}],modelValue:d.controlMode,"onUpdate:modelValue":e[0]||(e[0]=t=>d.controlMode=t)},{help:s(()=>[r(" Der Regelbereich wird auf den gesamten Überschuss angewendet, bevor die PV-Regelung durchgeführt wird. D.h. der Regelbereich wird auf alle Einstellungen für das PV-Laden angewendet und nur einmal unabhängig von der Anzahl der angesteckten Fahrzeuge. Liegt der Überschuss im vorgegebenen Regelbereich, wird nicht nachgeregelt. Liegt der Überschuss außerhalb des Regelbereichs, wird in die Mitte des Regelbereichs nachgeregelt."),M,r(' "Einspeisung" definiert einen Bereich mit minimaler Einspeisung (-230W, 0W), "Bezug" mit minimalem Netzbezug (0W, 230W), "Ausgewogen" mit ausgewogenem Netzbezug (-115W, 115W). Mit der Auswahl "individuell" kann ein eigener Regelbereich definiert werden.'),y,r(" Bei Speichervorrang erzeugt die Regelung bei Bedarf unabhängig vom eingestellten Regelmodus Einspeisung, damit der Speicher seine Ladeleistung erhöht. ")]),_:1},8,["modelValue"]),a(l,{disabled:d.controlMode!=="individual",readonly:d.controlMode!=="individual",title:"Minimum",step:.005,unit:"kW","model-value":Array.isArray(n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][0]/1e3:void 0,"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"0"))},{help:s(()=>[r(" Untere Grenze des Regelbereichs. ")]),_:1},8,["disabled","readonly","model-value"]),a(l,{disabled:d.controlMode!=="individual",readonly:d.controlMode!=="individual",title:"Maximum",step:.005,unit:"kW","model-value":Array.isArray(n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][1]/1e3:void 0,"onUpdate:modelValue":e[2]||(e[2]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"1"))},{help:s(()=>[r("Obere Grenze des Regelbereichs.")]),_:1},8,["disabled","readonly","model-value"]),E,a(l,{title:"Einschaltschwelle",min:0,step:.05,unit:"kW","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]/1e3,"onUpdate:modelValue":e[3]||(e[3]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_on_threshold",t*1e3))},{help:s(()=>[r(" Wird der Regelbereich in Richtung Einspeisung um diese Leistung überschritten, so wird der Ladevorgang gestartet."),q,r(" Dieser Wert wird pro Phase genutzt und ist daher immer für eine Phase anzugeben. ")]),_:1},8,["model-value"]),a(l,{title:"Einschaltverzögerung",min:0,step:1,unit:"s","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_delay"],"onUpdate:modelValue":e[4]||(e[4]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_on_delay",t))},{help:s(()=>[r(" Die Einschaltschwelle muss für die hier angegebene Zeit dauerhaft überschritten werden, bevor ein Ladevorgang gestartet wird."),L,r(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird weiter geladen, wenn die Abschaltschwelle nicht unterschritten wird. ")]),_:1},8,["model-value"]),C,a(l,{title:"Abschaltschwelle",step:.05,unit:"kW","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"]/1e3,"onUpdate:modelValue":e[5]||(e[5]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_off_threshold",t*1e3))},{help:s(()=>[r(" Wird der Regelbereich in Richtung Netzbezug um diese Leistung überschritten, so wird der Ladevorgang beendet."),R,r(" Dieser Wert ist unabhängig von der Anzahl genutzter Phasen. ")]),_:1},8,["model-value"]),a(l,{title:"Abschaltverzögerung",min:0,step:1,unit:"s","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_delay"],"onUpdate:modelValue":e[6]||(e[6]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_off_delay",t))},{help:s(()=>[r(" Die Abschaltschwelle muss für die hier angegebene Zeit dauerhaft unterschritten werden, bevor ein Ladevorgang beendet wird."),A,r(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird die Ladung sofort beendet, wenn die Abschaltschwelle unterschritten wird. ")]),_:1},8,["model-value"]),P,a(l,{title:"Regelpunkt Einspeisegrenze",min:0,step:.05,unit:"kW","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/feed_in_yield"]/1e3,"onUpdate:modelValue":e[7]||(e[7]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/feed_in_yield",t*1e3))},{help:s(()=>[r(" Ein Wert größer 0kW bewirkt, dass weniger PV-Leistung zum Laden benutzt wird."),U,r(" Die Nutzung dieser Option ergibt nur Sinn, wenn ein Wechselrichter mit separatem Smart-Meter am EVU-Punkt verbaut ist (nicht der originale Zähler des Versorgers!), welches eine dynamische Begrenzung der Einspeiseleistung am EVU-Punkt durch den PV-Wechselrichter bietet (bitte bei ev. Problemen immer vorab prüfen lassen)."),$,r(' Ist eine Einspeiseleistungsreduzierung verbaut (in vielen älteren, privaten Einspeiseverträgen z.B. als 70% Regelung bekannt), wird mit Eingabe des Wertes "Regelpunkt Einspeisegrenze" ein eigenverbrauchsoptimiertes Fahrzeugladen mit PV-Überschussenergie möglich, die sonst abgeregelt werden würde (Nutzung der PV-Peaks).'),F,r(' Wird in einem "Ladeprofil" die Option "Einspeisegrenze beachten" eingeschaltet, so wird der Regelpunkt auf diesen Wert verschoben und die Ladung startet erst, wenn der hinterlegte Wert "Regelpunkt Einspeisegrenze" überschritten wird.'),D,r(" Zur optimalen Eigenverbrauchssteuerung sollte der Wert einige hundert Watt UNTER der im Wechselrichter hinterlegten EVU-Einspeiseleistungsgrenze liegen, damit openWB die Ladung freigibt, BEVOR der Wechselrichter begrenzt wird. ")]),_:1},8,["model-value"])]))]),_:1}),a(_,{title:"Phasenumschaltung"},{default:s(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(o(),g("div",N,[a(m,{subtype:"info"},{default:s(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),g("div",I,[a(c,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"],"onUpdate:modelValue":e[8]||(e[8]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/phases_to_use",t))},{help:s(()=>[r(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "PV-Laden" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um den verfügbaren Überschuss in die Fahrzeuge zu laden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen einer und drei Phasen (s.g. 1p3p). ')]),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"]==0?(o(),b(v,{key:0,title:"Verzögerung automat. Phasenumschaltung",min:1,max:15,step:1,unit:"Min.","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phase_switch_delay"],"onUpdate:modelValue":e[9]||(e[9]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/phase_switch_delay",t))},{help:s(()=>[r(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung gewechselt. ")]),_:1},8,["model-value"])):p("",!0)]))]),_:1}),a(_,{title:"Speicher-Beachtung"},{default:s(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(o(),g("div",O,[a(m,{subtype:"info"},{default:s(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),g("div",T,[a(c,{title:"Laden mit Überschuss",buttons:[{buttonValue:"ev_mode",text:"Fahrzeuge"},{buttonValue:"bat_mode",text:"Speicher"},{buttonValue:"min_soc_bat_mode",text:"Mindest-SoC des Speichers"}],modelValue:d.batMode,"onUpdate:modelValue":[e[10]||(e[10]=t=>d.batMode=t),e[11]||(e[11]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_mode",t))],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_mode"]},{help:s(()=>[r(' Sofern ein Hausstromspeicher (im Folgenden "Speicher" genannt) im Energiesystem verbaut ist, kann dieser beim Fahrzeugladen mit berücksichtigt werden. Dies erfolgt passiv über die Berücksichtigung der Speicherleistungswerte und des Speicher-SoC. Eine aktive Speichersteuerung durch openWB ist aktuell mangels Speicherschnittstelle nicht möglich.'),Z,G,r(' Bei Auswahl "Fahrzeuge" wird der gesamte Überschuss in das EV geladen. Ist die maximale Ladeleistung der Fahrzeuge erreicht und es wird eingespeist, wird dieser Überschuss in den Speicher geladen.'),H,J,r(' Bei Auswahl "Speicher" wird der gesamte Überschuss in den Speicher geladen. Ist die maximale Ladeleistung des Speichers erreicht und es wird eingespeist, wird dieser Überschuss unter Beachtung der Einschaltschwelle in die Fahrzeuge geladen.'),j,K,r(' Bei Auswahl "Mindest-SoC des Speichers" wird der Überschuss bis zum Mindest-SoC in den Speicher geladen. Ist die maximale Ladeleistung des Speichers erreicht und es wird eingespeist, wird dieser Überschuss in die Fahrzeuge geladen. Wird der Mindest-SoC überschritten, wird der Überschuss ins Fahrzeug geladen. ')]),_:1},8,["modelValue","model-value"]),d.batMode==="min_soc_bat_mode"?(o(),g("div",Q,[a(c,{title:"Ladeleistung für Speicher unterhalb des Mindest-SoC des Speichers",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:n.batPowerReserveActive,"onUpdate:modelValue":[e[12]||(e[12]=t=>n.batPowerReserveActive=t),e[13]||(e[13]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_reserve_active",t))],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve_active"]},{help:s(()=>[r("ACHTUNG: Der hier eingestellte Wert darf die maximale Ladeleistung des Speichers nicht überschreiten."),X,r(" Wird der Mindest-SoC des Speichers nicht erreicht, wird der Speicher mit der hier eingestellte Leistung geladen. Mit dem verbleibenden Überschuss werden die Fahrzeuge geladen.")]),_:1},8,["modelValue","model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve_active"]?(o(),b(l,{key:0,min:.1,step:.1,unit:"kW",required:n.required,"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve"]/1e3,"onUpdate:modelValue":e[14]||(e[14]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_reserve",t*1e3))},null,8,["required","model-value"])):p("",!0),a(v,{title:"Mindest-SoC des Speichers",min:0,max:100,step:1,unit:"%",required:n.required,"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/min_bat_soc"],"onUpdate:modelValue":e[15]||(e[15]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/min_bat_soc",t))},null,8,["required","model-value"]),a(c,{title:"Entladeleistung des Speichers oberhalb des Mindest-SoC des Speichers",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:n.batPowerReserveActive,"onUpdate:modelValue":[e[16]||(e[16]=t=>n.batPowerReserveActive=t),e[17]||(e[17]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_discharge_active",t))],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge_active"]},{help:s(()=>[r("Wird der Mindest-SoC überschritten, wird der Überschuss ins Fahrzeug geladen und der Speicher mit der hier eingestellten Leistung in die Fahrzeuge entladen. Die Entladeleistung des Speichers wird dem Überschuss zum Erreichen der Einschaltschwelle hinzugerechnet.")]),_:1},8,["modelValue","model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge_active"]?(o(),b(l,{key:1,min:.1,step:.1,unit:"kW",required:n.required,"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge"]/1e3,"onUpdate:modelValue":e[18]||(e[18]=t=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_discharge",t*1e3))},null,8,["required","model-value"])):p("",!0)])):p("",!0)]))]),_:1}),a(f,{formName:"pvChargeConfigForm",onSave:e[19]||(e[19]=t=>n.$emit("save")),onReset:e[20]||(e[20]=t=>n.$emit("reset")),onDefaults:e[21]||(e[21]=t=>n.$emit("defaults"))})])])}const de=W(B,[["render",Y],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/PVChargeConfig.vue"]]);export{de as default};