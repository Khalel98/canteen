import{l as D,g as re,j as ie,b as I,G as oe,M as z,n as le,s as ue,I as ce,v as de,w as ve,y as me,z as ge,D as fe,P as ye,V as he,F as Se,H as be,T as $,U as Ve,W as j,X as we,Y as Pe,Z as _e,m as xe,u as Ce,_ as N,c as W,d as Te,f as ke}from"./forwardRefs-5446d883.js";import{g as x,ah as Ee,am as De,an as Ie,p as E,d as u,j as _,ao as G,a5 as ze,L as k,f as Z,h as A,N as $e,i as J,O as Ae,D as q,E as Re,F as Be,m as R,ae as B,H as Oe,C as Me,q as Q,v as ee,s as Fe,ap as L,a3 as Ue,u as je,K as Ne,a1 as We,$ as qe,k as H,aq as Le,aa as K}from"./index-665f42ae.js";function st(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return x()({name:t??Ee(De(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...D()},setup(a,s){let{slots:v}=s;return()=>{var r;return Ie(a.tag,{class:[e,a.class],style:a.style},(r=v.default)==null?void 0:r.call(v))}}})}function He(e){return{aspectStyles:_(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const te=E({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...D(),...re()},"VResponsive"),X=x()({name:"VResponsive",props:te(),setup(e,i){let{slots:t}=i;const{aspectStyles:a}=He(e),{dimensionStyles:s}=ie(e);return I(()=>{var v;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(v=t.additional)==null?void 0:v.call(t),t.default&&u("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function Ke(e,i){if(!G)return;const t=i.modifiers||{},a=i.value,{handler:s,options:v}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var f;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const d=(f=e._observe)==null?void 0:f[i.instance.$.uid];if(!d)return;const l=n.some(S=>S.isIntersecting);s&&(!t.quiet||d.init)&&(!t.once||l||d.init)&&s(l,n,o),l&&t.once?ae(e,i):d.init=!0},v);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:r},r.observe(e)}function ae(e,i){var a;const t=(a=e._observe)==null?void 0:a[i.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const Xe={mounted:Ke,unmounted:ae},Ye=Xe,pe=E({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...te(),...D(),...oe()},"VImg"),Ge=x()({name:"VImg",directives:{intersect:Ye},props:pe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:t,slots:a}=i;const s=ze("VImg"),v=k(""),r=Z(),n=k(e.eager?"loading":"idle"),o=k(),d=k(),l=_(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=_(()=>l.value.aspect||o.value/d.value||0);A(()=>e.src,()=>{S(n.value!=="idle")}),A(f,(c,b)=>{!c&&b&&r.value&&g(r.value)}),$e(()=>S());function S(c){if(!(e.eager&&c)&&!(G&&!c&&!e.eager)){if(n.value="loading",l.value.lazySrc){const b=new Image;b.src=l.value.lazySrc,g(b,null)}l.value.src&&J(()=>{var b;t("loadstart",((b=r.value)==null?void 0:b.currentSrc)||l.value.src),setTimeout(()=>{var P;if(!s.isUnmounted)if((P=r.value)!=null&&P.complete){if(r.value.naturalWidth||C(),n.value==="error")return;f.value||g(r.value,null),n.value==="loading"&&h()}else f.value||g(r.value),m()})})}}function h(){var c;s.isUnmounted||(m(),g(r.value),n.value="loaded",t("load",((c=r.value)==null?void 0:c.currentSrc)||l.value.src))}function C(){var c;s.isUnmounted||(n.value="error",t("error",((c=r.value)==null?void 0:c.currentSrc)||l.value.src))}function m(){const c=r.value;c&&(v.value=c.currentSrc||c.src)}let y=-1;Ae(()=>{clearTimeout(y)});function g(c){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const P=()=>{if(clearTimeout(y),s.isUnmounted)return;const{naturalHeight:F,naturalWidth:U}=c;F||U?(o.value=U,d.value=F):!c.complete&&n.value==="loading"&&b!=null?y=window.setTimeout(P,b):(c.currentSrc.endsWith(".svg")||c.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,d.value=1)};P()}const V=_(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),w=()=>{var P;if(!l.value.src||n.value==="idle")return null;const c=u("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:l.value.src,srcset:l.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:h,onError:C},null),b=(P=a.sources)==null?void 0:P.call(a);return u(z,{transition:e.transition,appear:!0},{default:()=>[q(b?u("picture",{class:"v-img__picture"},[b,c]):c,[[Oe,n.value==="loaded"]])]})},T=()=>u(z,{transition:e.transition},{default:()=>[l.value.lazySrc&&n.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:l.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),O=()=>a.placeholder?u(z,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,ne=()=>a.error?u(z,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,se=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,M=k(!1);{const c=A(f,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{M.value=!0})}),c())})}return I(()=>{const c=X.filterProps(e);return q(u(X,R({class:["v-img",{"v-img--booting":!M.value},e.class],style:[{width:B(e.width==="auto"?o.value:e.width)},e.style]},c,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(Be,null,[u(w,null,null),u(T,null,null),u(se,null,null),u(O,null,null),u(ne,null,null)]),default:a.default}),[[Re("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:r,state:n,naturalWidth:o,naturalHeight:d}}}),Ze=E({start:Boolean,end:Boolean,icon:Me,image:String,text:String,...D(),...le(),...ue(),...ce(),...de(),...Q(),...ve({variant:"flat"})},"VAvatar"),rt=x()({name:"VAvatar",props:Ze(),setup(e,i){let{slots:t}=i;const{themeClasses:a}=ee(e),{colorClasses:s,colorStyles:v,variantClasses:r}=me(e),{densityClasses:n}=ge(e),{roundedClasses:o}=fe(e),{sizeClasses:d,sizeStyles:l}=ye(e);return I(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,n.value,o.value,d.value,r.value,e.class],style:[v.value,l.value,e.style]},{default:()=>{var f;return[e.image?u(Ge,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(he,{key:"icon",icon:e.icon},null):((f=t.default)==null?void 0:f.call(t))??e.text,Se(!1,"v-avatar")]}})),{}}});const Je=E({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...D(),...Q()},"VDivider"),it=x()({name:"VDivider",props:Je(),setup(e,i){let{attrs:t}=i;const{themeClasses:a}=ee(e),{textColorClasses:s,textColorStyles:v}=be(Fe(e,"color")),r=_(()=>{const n={};return e.length&&(n[e.vertical?"maxHeight":"maxWidth"]=B(e.length)),e.thickness&&(n[e.vertical?"borderRightWidth":"borderTopWidth"]=B(e.thickness)),n});return I(()=>u("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,s.value,e.class],style:[r.value,v.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const Qe=E({target:[Object,Array]},"v-dialog-transition"),et=x()({name:"VDialogTransition",props:Qe(),setup(e,i){let{slots:t}=i;const a={onBeforeEnter(s){s.style.pointerEvents="none",s.style.visibility="hidden"},async onEnter(s,v){var S;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),s.style.visibility="";const{x:r,y:n,sx:o,sy:d,speed:l}=p(e.target,s),f=$(s,[{transform:`translate(${r}px, ${n}px) scale(${o}, ${d})`,opacity:0},{}],{duration:225*l,easing:Ve});(S=Y(s))==null||S.forEach(h=>{$(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*l,easing:j})}),f.finished.then(()=>v())},onAfterEnter(s){s.style.removeProperty("pointer-events")},onBeforeLeave(s){s.style.pointerEvents="none"},async onLeave(s,v){var S;await new Promise(h=>requestAnimationFrame(h));const{x:r,y:n,sx:o,sy:d,speed:l}=p(e.target,s);$(s,[{},{transform:`translate(${r}px, ${n}px) scale(${o}, ${d})`,opacity:0}],{duration:125*l,easing:we}).finished.then(()=>v()),(S=Y(s))==null||S.forEach(h=>{$(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*l,easing:j})})},onAfterLeave(s){s.style.removeProperty("pointer-events")}};return()=>e.target?u(L,R({name:"dialog-transition"},a,{css:!1}),t):u(L,{name:"dialog-transition"},t)}});function Y(e){var t;const i=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return i&&[...i]}function p(e,i){const t=Pe(e),a=_e(i),[s,v]=getComputedStyle(i).transformOrigin.split(" ").map(g=>parseFloat(g)),[r,n]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let o=t.left+t.width/2;r==="left"||n==="left"?o-=t.width/2:(r==="right"||n==="right")&&(o+=t.width/2);let d=t.top+t.height/2;r==="top"||n==="top"?d-=t.height/2:(r==="bottom"||n==="bottom")&&(d+=t.height/2);const l=t.width/a.width,f=t.height/a.height,S=Math.max(1,l,f),h=l/S||0,C=f/S||0,m=a.width*a.height/(window.innerWidth*window.innerHeight),y=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:o-(s+a.left),y:d-(v+a.top),sx:h,sy:C,speed:y}}const tt=E({id:String,...Ue(xe({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:et}}),["absolute"])},"VMenu"),ot=x()({name:"VMenu",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const a=je(e,"modelValue"),{scopeId:s}=Ce(),v=Ne(),r=_(()=>e.id||`v-menu-${v}`),n=Z(),o=We(N,null),d=k(0);qe(N,{register(){++d.value},unregister(){--d.value},closeParents(){setTimeout(()=>{d.value||(a.value=!1,o==null||o.closeParents())},40)}});async function l(m){var V,w,T;const y=m.relatedTarget,g=m.target;await J(),a.value&&y!==g&&((V=n.value)!=null&&V.contentEl)&&((w=n.value)!=null&&w.globalTop)&&![document,n.value.contentEl].includes(g)&&!n.value.contentEl.contains(g)&&((T=H(n.value.contentEl)[0])==null||T.focus())}A(a,m=>{m?(o==null||o.register(),document.addEventListener("focusin",l,{once:!0})):(o==null||o.unregister(),document.removeEventListener("focusin",l))});function f(){o==null||o.closeParents()}function S(m){var y,g,V;e.disabled||m.key==="Tab"&&(Le(H((y=n.value)==null?void 0:y.contentEl,!1),m.shiftKey?"prev":"next",T=>T.tabIndex>=0)||(a.value=!1,(V=(g=n.value)==null?void 0:g.activatorEl)==null||V.focus()))}function h(m){var g;if(e.disabled)return;const y=(g=n.value)==null?void 0:g.contentEl;y&&a.value?m.key==="ArrowDown"?(m.preventDefault(),K(y,"next")):m.key==="ArrowUp"&&(m.preventDefault(),K(y,"prev")):["ArrowDown","ArrowUp"].includes(m.key)&&(a.value=!0,m.preventDefault(),setTimeout(()=>setTimeout(()=>h(m))))}const C=_(()=>R({"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":r.value,onKeydown:h},e.activatorProps));return I(()=>{const m=W.filterProps(e);return u(W,R({ref:n,class:["v-menu",e.class],style:e.style},m,{modelValue:a.value,"onUpdate:modelValue":y=>a.value=y,absolute:!0,activatorProps:C.value,"onClick:outside":f,onKeydown:S},s),{activator:t.activator,default:function(){for(var y=arguments.length,g=new Array(y),V=0;V<y;V++)g[V]=arguments[V];return u(Te,{root:"VMenu"},{default:()=>{var w;return[(w=t.default)==null?void 0:w.call(t,...g)]}})}})}),ke({id:r,ΨopenChildren:d},n)}});export{Ye as I,it as V,ot as a,et as b,st as c,rt as d,Ge as e};