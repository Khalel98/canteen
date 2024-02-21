import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,c as u,a as o,n as v,r as p,b as m,t as d,d as n,w as a,e as g,m as w,F as S}from"./index-665f42ae.js";import{V as k,a as C}from"./forwardRefs-5446d883.js";import{V,a as L}from"./VCard-162e7754.js";import{c as $,V as x,a as P}from"./VMenu-ab341207.js";const b={data(){return{lang:localStorage.getItem("currentLanguage")||"ru"}},methods:{setLanguagePreference(e,t=!0){localStorage.setItem("currentLanguage",e),this.$i18n.locale=e,this.lang=e,t&&location.reload()},config(){(localStorage.getItem("currentLanguage")||"ru")==="kk"?this.$i18n.locale="kk":this.$i18n.locale="ru"}},created(){this.config()},mounted(){const e=localStorage.getItem("currentLanguage");e&&(this.setLanguagePreference(e,!1),this.config())}};function z(e,t,_,f,s,r){return c(),u("div",null,[o("button",{class:v(["language__btn",{active:s.lang==="ru"}]),onClick:t[0]||(t[0]=l=>r.setLanguagePreference("ru"))}," Рус ",2),o("button",{class:v(["language__btn",{active:s.lang==="kk"}]),onClick:t[1]||(t[1]=l=>r.setLanguagePreference("kk"))}," Қаз ",2)])}const T=h(b,[["render",z]]);const y=$("v-spacer","div","VSpacer"),I={components:{LanguageComponent:T},data(){return{currentTime:"",menu:!1,drawer:null,screenWidth:window.innerWidth,isScreenSizeLessThan1100px:window.innerWidth<=1100,isPermanent:null}},methods:{logout(){this.$store.dispatch("logout")},updateClock(){const e=new Date,t=e.getHours().toString().padStart(2,"0"),_=e.getMinutes().toString().padStart(2,"0");this.currentTime=`${t}:${_}`},handleResize(){this.screenWidth=window.innerWidth,this.isScreenSizeLessThan1100px=this.screenWidth<=1100,this.isScreenSizeLessThan1100px?this.isPermanent=!1:this.isPermanent=!0}},watch:{isScreenSizeLessThan1100px(e){this.isPermanent=!e}},mounted(){setInterval(this.updateClock,6e4),this.updateClock(),window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)}},M={class:"section__menu"},W={class:"section__menu__content _container"},B={key:0,class:"section__menu__profile"},D={class:"section__menu__clock"},N={key:1,class:"section__menu__controls"},R={key:2,class:"text-center"},E={class:"section__menu__controls"};function F(e,t,_,f,s,r){const l=p("LanguageComponent");return c(),u("div",M,[o("div",W,[s.isPermanent?(c(),u("div",B)):m("",!0),o("div",D,d(s.currentTime),1),s.isPermanent?(c(),u("div",N,[n(l),o("button",{class:"section__menu__logout",onClick:t[0]||(t[0]=i=>this.$router.push("/login"))},[n(k,null,{default:a(()=>[g("mdi mdi-exit-to-app")]),_:1}),o("span",null,d(e.$t("global__exit")),1)])])):m("",!0),s.isPermanent?m("",!0):(c(),u("div",R,[n(P,{modelValue:s.menu,"onUpdate:modelValue":t[3]||(t[3]=i=>s.menu=i),"close-on-content-click":!1,location:"end"},{activator:a(({props:i})=>[n(C,w({variant:"text"},i,{icon:"mdi-dots-vertical"}),null,16)]),default:a(()=>[n(V,{"max-width":"300"},{default:a(()=>[n(x),o("div",E,[n(l),o("button",{class:"section__menu__logout",onClick:t[1]||(t[1]=(...i)=>r.logout&&r.logout(...i))},[n(k,null,{default:a(()=>[g("mdi mdi-exit-to-app")]),_:1}),o("span",null,d(e.$t("global__exit")),1)])]),n(L,null,{default:a(()=>[n(y),n(C,{variant:"text",onClick:t[2]||(t[2]=i=>s.menu=!1)},{default:a(()=>[g(d(e.$t("global__close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))])])}const U=h(I,[["render",F]]),A={components:{MenuComponent:U}},G={class:"_container"};function H(e,t,_,f,s,r){const l=p("MenuComponent"),i=p("router-view");return c(),u(S,null,[n(l),o("div",G,[n(i)])],64)}const Q=h(A,[["render",H]]);export{Q as default};