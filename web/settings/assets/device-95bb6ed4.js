import{_ as d,p as u,k as l,l as p,A as n,L as c,u as m,q as f,x as _}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const g={name:"DeviceSmartMe",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-smart-me"},b={class:"small"};function w(t,e,a,x,B,s){const r=u("openwb-base-heading"),i=u("openwb-base-text-input");return l(),p("div",v,[n(r,null,{default:c(()=>[m(" Einstellungen für smart-me "),f("span",b,"(Modul: "+_(t.$options.name)+")",1)]),_:1}),n(i,{title:"Benutzername",subtype:"user",required:"","model-value":a.configuration.user,"onUpdate:modelValue":e[0]||(e[0]=o=>s.updateConfiguration(o,"configuration.user"))},null,8,["model-value"]),n(i,{title:"Passwort",subtype:"password",required:"","model-value":a.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=o=>s.updateConfiguration(o,"configuration.password"))},null,8,["model-value"])])}const h=d(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/smart_me/device.vue"]]);export{h as default};