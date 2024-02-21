import{p as N,g as L,u as q,f as J,I as W,h as x,i as G,j as M,m as B,d as r,k as H,l as T,o as d,c as u,a as s,w as h,e as y,t as o,b as f,F as C,q as K,s as Q,v as X,x as Y,y as Z,r as P,z as $,A as ee,n as I}from"./index-665f42ae.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{m as te,u as ae,b as F,c as R,d as se,f as oe,a as V,e as le,g as ie,h as ne,i as re,j as de,k as ce,V as ue}from"./forwardRefs-5446d883.js";import{V as U}from"./VCard-162e7754.js";import{V as O,a as _e,b as he}from"./VDataTable-b67c9bd9.js";import{b as me}from"./VMenu-ab341207.js";import"./form-3dee535d.js";const fe=""+new URL("scan__card-7552d9bf.gif",import.meta.url).href,ge=""+new URL("finish-36af933c.gif",import.meta.url).href;const ve=N({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...te({origin:"center center",scrollStrategy:"block",transition:{component:me},zIndex:2400})},"VDialog"),j=L()({name:"VDialog",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:i}=t;const g=q(e,"modelValue"),{scopeId:a}=ae(),l=J();function m(n){var v,b;const c=n.relatedTarget,_=n.target;if(c!==_&&((v=l.value)!=null&&v.contentEl)&&((b=l.value)!=null&&b.globalTop)&&![document,l.value.contentEl].includes(_)&&!l.value.contentEl.contains(_)){const k=H(l.value.contentEl);if(!k.length)return;const S=k[0],z=k[k.length-1];c===S?z.focus():S.focus()}}W&&x(()=>g.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",m):document.removeEventListener("focusin",m)},{immediate:!0}),x(g,async n=>{var c,_;await G(),n?(c=l.value.contentEl)==null||c.focus({preventScroll:!0}):(_=l.value.activatorEl)==null||_.focus({preventScroll:!0})});const p=M(()=>B({"aria-haspopup":"dialog","aria-expanded":String(g.value)},e.activatorProps));return F(()=>{const n=R.filterProps(e);return r(R,B({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:g.value,"onUpdate:modelValue":c=>g.value=c,"aria-modal":"true",activatorProps:p.value,role:"dialog"},a),{activator:i.activator,default:function(){for(var c=arguments.length,_=new Array(c),v=0;v<c;v++)_[v]=arguments[v];return r(se,{root:"VDialog"},{default:()=>{var b;return[(b=i.default)==null?void 0:b.call(i,..._)]}})}})}),oe({},l)}}),pe={data(){return{status:null,dialog:!1,card_number:null,hasRunMethods:!1,timeoutId:null,message:null,studentsData:{full_name:"",iin:""}}},methods:{openDialog(){this.dialog=!0,this.handleBlur(),window.addEventListener("click",this.handleBlur)},handleBlur(){this.$nextTick(()=>{this.$refs.cardInput.focus()})},close(){window.removeEventListener("click",this.handleBlur),this.dialog=!1,this.card_number=null,this.hasRunMethods=!1,this.timeoutId=null},reset(){this.message="",this.card_number="",this.hasRunMethods=!1,this.studentsData.full_name="",this.studentsData.iin="",this.status=null,this.timeoutId!==null&&clearTimeout(this.timeoutId)},goTo(){this.$router.push("/free/success")},async acceptStudentNfc(){try{const e=await T.post("free-food/send-food-log",{full_hex:this.card_number});console.log(e.data.message),this.status=e.data.status_code,this.studentsData=e.data.data,this.card_number="",this.message=e.data.message,this.hasRunMethods=!1,this.timeoutId!==null&&clearTimeout(this.timeoutId)}catch(e){console.error(e)}finally{setTimeout(this.reset,3e3)}},reloadPage(){alert(this.$t("free__modal__alert")),location.reload()}},watch:{card_number(){/[а-яА-ЯЁё]/.test(this.card_number)&&this.reloadPage(),this.hasRunMethods||(this.timeoutId!==null&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.card_number.length>0&&(this.acceptStudentNfc(),this.hasRunMethods=!0)},500))}}},be={class:"section__free__header__action green"},ye={class:"section__modal"},ke={class:"section__modal__title"},Ve={key:0,class:"section__modal__inf"},De={class:"section__modal__gif"},$e={key:0,src:fe,alt:""},Te={key:1,src:ge,alt:""},Ce={key:1,class:"text-center mb-6"},we={key:2,class:"text-center mb-6"},Se={class:"section__modal__action"};function xe(e,t,i,g,a,l){return d(),u(C,null,[s("div",be,[r(V,{class:"regular__btn",variant:"outlined",onClick:l.openDialog},{default:h(()=>[y(o(e.$t("free__header__action")),1)]),_:1},8,["onClick"])]),r(j,{modelValue:a.dialog,"onUpdate:modelValue":t[1]||(t[1]=m=>a.dialog=m),persistent:"","max-width":"500px"},{default:h(()=>[r(U,null,{default:h(()=>[s("div",ye,[s("div",ke,o(e.$t("free__modal__title")),1),this.status===null?(d(),u("div",Ve,o(e.$t("free__modal__scan")),1)):f("",!0),s("div",De,[this.status===null?(d(),u("img",$e)):f("",!0),this.status==="001"?(d(),u("img",Te)):f("",!0)]),r(O,{modelValue:a.card_number,"onUpdate:modelValue":t[0]||(t[0]=m=>a.card_number=m),clearable:"",label:"NFC","prepend-icon":"mdi mdi-nfc-variant",variant:"outlined",ref:"cardInput"},null,8,["modelValue"]),this.message?(d(),u("h3",Ce,o(e.$t("free__modal__status"))+": "+o(this.message),1)):f("",!0),this.studentsData.full_name?(d(),u("h4",we,o(e.$t("free__modal__student"))+": "+o(this.studentsData.full_name),1)):f("",!0),s("div",Se,[r(V,{class:"section__modal__action__btn",onClick:l.close},{default:h(()=>[y(o(e.$t("global__close")),1)]),_:1},8,["onClick"])])])]),_:1})]),_:1},8,["modelValue"])],64)}const Be=w(pe,[["render",xe]]),Pe={data(){return{loading:!1,dialog:!1,message:null,studentsData:{full_name:"",iin:""}}},methods:{openDialog(){this.dialog=!0,this.runNfc()},goTo(){this.$router.push("/free/success")},async acceptStudentNfc(e){try{const t=await T.post("free-food/send-food-log",{full_hex:e});console.log(t.data.message),this.message=t.data.message,this.studentsData=t.data.data}catch(t){console.error(t)}finally{this.loading=!1,setTimeout(this.reset,3e3)}},reset(){this.message="",this.studentsData.full_name="",this.studentsData.iin="",this.runNfc()},close(){this.dialog=!1,cancelRequest()},runNfc(){this.loading=!0,readNFC(6e4,400,e=>{e.slice(9,19)==="01JSC00040"?this.runNfc():this.acceptStudentNfc(e.slice(9,19))})}}},Ie={class:"section__free__header__action green"},Re={class:"section__modal"},Ae={class:"section__modal__title"},Ee={key:0,class:"text-center mb-6"},Ne={class:"text-center mb-6 section__modal__inf"},Le={key:1,class:"text-center mb-6"},Me={key:2,class:"text-center mb-6"},Fe={class:"section__modal__action"};function Ue(e,t,i,g,a,l){return d(),u(C,null,[s("div",Ie,[r(V,{class:"regular__btn",variant:"outlined",onClick:l.openDialog},{default:h(()=>[y(o(e.$t("free__header__action")),1)]),_:1},8,["onClick"])]),r(j,{modelValue:a.dialog,"onUpdate:modelValue":t[0]||(t[0]=m=>a.dialog=m),persistent:"","max-width":"500px"},{default:h(()=>[r(U,null,{default:h(()=>[s("div",Re,[s("div",Ae,o(e.$t("free__modal__title")),1),this.loading?(d(),u("div",Ee,[r(le,{size:70,width:7,color:"#0066ff",indeterminate:""}),s("h3",Ne,o(e.$t("free__modal__scan")),1)])):f("",!0),this.message?(d(),u("h3",Le,o(e.$t("free__modal__status"))+": "+o(this.message),1)):f("",!0),this.studentsData.full_name?(d(),u("h4",Me,o(e.$t("free__modal__student"))+": "+o(this.studentsData.full_name),1)):f("",!0),s("div",Fe,[r(V,{class:"section__modal__action__btn",onClick:l.close},{default:h(()=>[y(o(e.$t("global__close")),1)]),_:1},8,["onClick"])])])]),_:1})]),_:1},8,["modelValue"])],64)}const Oe=w(Pe,[["render",Ue]]);const je={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return r("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function A(e){const[t,i]=e.split("@");return Array.from({length:i}).map(()=>D(t))}function D(e){let t=[];if(!e)return t;const i=je[e];if(e!==i){if(e.includes(","))return E(e);if(e.includes("@"))return A(e);i.includes(",")?t=E(i):i.includes("@")?t=A(i):i&&t.push(D(i))}return[ze(e,t)]}function E(e){return e.replace(/\s/g,"").split(",").map(D)}const qe=N({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...ie(),...ne(),...K()},"VSkeletonLoader"),Je=L()({name:"VSkeletonLoader",props:qe(),setup(e,t){let{slots:i}=t;const{backgroundColorClasses:g,backgroundColorStyles:a}=re(Q(e,"color")),{dimensionStyles:l}=de(e),{elevationClasses:m}=ce(e),{themeClasses:p}=X(e),{t:n}=Y(),c=M(()=>D(Z(e.type).join(",")));return F(()=>{var v;const _=!i.default||e.loading;return r("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},p.value,g.value,m.value],style:[a.value,_?l.value:{}],"aria-busy":e.boilerplate?void 0:_,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:n(e.loadingText),role:e.boilerplate?void 0:"alert"},[_?c.value:(v=i.default)==null?void 0:v.call(i)])}),{}}}),We={components:{OrangeTerminalAccept:Be,BlueTerminalAccept:Oe},data(){return{loading:!1,isActiveDate:"desc",typeofTerminal:"",search:"",hasRunMethods:!1,timeoutId:null,page:1,itemsPerPage:10,all_count:"",received_count:"",not_received_count:"",headers:[{align:"start",key:"order_num",title:"№",sortable:!1},{key:"iin",title:this.$t("free__table__iin"),sortable:!1},{key:"full_name",title:this.$t("free__table__fullname"),sortable:!1},{key:"card_number",title:this.$t("free__table__card__num"),sortable:!1},{key:"status",title:this.$t("free__table__status"),sortable:!1},{key:"datetime_reg",title:this.$t("free__table__date"),sortable:!1,removable:!0}],students:[]}},methods:{async getStudents(){this.loading=!0;try{const e=await T.post("free-food/find-students",{full_name:this.search,full_name_sort:null,date_sort:this.isActiveDate,page:this.page});console.log(e.data),this.students=e.data.students.data,this.all_count=e.data.students.total,this.received_count=e.data.today_stats.received_count,this.not_received_count=e.data.today_stats.not_received_count,this.hasRunMethods=!1}catch(e){console.error(e),this.hasRunMethods=!1}finally{this.loading=!1}},loadData(){this.getStudents()},goBack(){this.$router.go(-1)},test(){try{openSelectedPort(),this.typeofTerminal="siniy",console.log("siniy")}catch{this.typeofTerminal="orange",console.log("orange")}},toggleDate(){this.isActiveDate==="asc"?this.isActiveDate="desc":this.isActiveDate="asc",this.loadData()}},watch:{search(){this.hasRunMethods||(this.timeoutId!==null&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.loadData(),this.hasRunMethods=!0},500))}},computed:{pageCount(){return Math.ceil(this.all_count/this.itemsPerPage)}},mounted(){this.loadData(),this.test()}},Ge={class:"section__free"},He={class:"section__free__content"},Ke={class:"section__free__title section__title"},Qe={class:"section__free__header"},Xe={class:"section__free__header__count"},Ye={class:"section__free__header__count__text"},Ze={key:0,class:"section__free__header__count__number"},et={class:"section__free__table"},tt={class:"section__free__filters"},at={class:"section__free__filters__input"},st={style:{display:"flex"}},ot={class:"mr-2 cursor-pointer"};function lt(e,t,i,g,a,l){const m=P("OrangeTerminalAccept"),p=P("BlueTerminalAccept");return d(),u("div",Ge,[s("div",He,[s("div",{class:"profile__link",onClick:t[0]||(t[0]=(...n)=>l.goBack&&l.goBack(...n))}," ← "+o(e.$t("global__return")),1),s("div",Ke,o(e.$t("choose__free")),1),s("div",Qe,[s("div",Xe,[s("span",Ye,o(e.$t("free__header__count__true")),1),a.all_count?(d(),u("span",Ze,o(a.received_count)+" / "+o(a.all_count),1)):f("",!0)]),a.typeofTerminal==="orange"?(d(),$(m,{key:0})):f("",!0),a.typeofTerminal==="siniy"?(d(),$(p,{key:1})):f("",!0)]),s("div",et,[s("div",tt,[s("div",at,[r(O,{modelValue:a.search,"onUpdate:modelValue":t[1]||(t[1]=n=>a.search=n),label:this.$t("global__search"),"prepend-inner-icon":"mdi-magnify","single-line":"",variant:"outlined","hide-details":""},null,8,["modelValue","label"])])]),r(_e,{loading:a.loading,headers:a.headers,items:a.students,"return-object":"","item-value":"name"},{headers:h(({columns:n})=>[s("tr",null,[(d(!0),u(C,null,ee(n,c=>(d(),u("td",{key:c.key},[s("div",st,[s("span",ot,o(c.title),1),s("div",{class:I(["sorting__container",{active:a.isActiveDate==="asc"}]),onClick:t[2]||(t[2]=()=>l.toggleDate())},[c.removable?(d(),$(ue,{key:0,icon:"mdi mdi-arrow-down-thin"})):f("",!0)],2)])]))),128))])]),loading:h(()=>[r(Je,{type:"table-row@10"})]),"no-data":h(()=>[y(o(e.$t("global__nodata")),1)]),"item.status":h(({item:n})=>[s("span",{class:I(["section__free__status",{active:n.status}])},o(n.status?this.$t("free__filter__status__free__true"):this.$t("free__filter__status__free__false")),3)]),bottom:h(()=>[r(he,{modelValue:a.page,"onUpdate:modelValue":t[3]||(t[3]=n=>a.page=n),length:l.pageCount,"total-visible":4,onClick:l.loadData},null,8,["modelValue","length","onClick"])]),_:1},8,["loading","headers","items"])])])])}const ht=w(We,[["render",lt]]);export{ht as default};
