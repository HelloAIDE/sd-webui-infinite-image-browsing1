import{P as D,Z as _e,d as ae,bq as ge,aY as be,$ as F,bH as Ce,l as xe,u as he,aj as J,a0 as Z,h as x,c as v,a as W,bI as Ie,b as Ae,f as we,bJ as ke,a3 as se,bK as Pe,a2 as $e,i as Oe,b0 as Se,bL as Be,a5 as Ke,a6 as Te,a7 as Ee,ag as Ne,aT as Re,aR as Me,bM as je,aS as De,bN as Fe,k as Ue,bO as Ve,al as Le,aw as qe,bP as oe,bQ as ze,o as C,y as S,C as q,z as Y,p as M,v as B,r as K,S as te,m as Q,n as V,x as z,A as ie,N as re,bR as Ge,q as ce,a1 as He,ak as Qe,ar as de,ai as ne,R as Je,V as ue,U as We,bS as Xe,X as Ye}from"./index-a94d1da1.js";/* empty css              *//* empty css              */import{b as ve,c as Ze,d as ea,e as aa,u as ta}from"./db-544b9d97.js";var na=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:D.object,expandIconPosition:D.oneOf(_e("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},me=function(){return{openAnimation:D.object,prefixCls:String,header:D.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:D.any,panelKey:D.oneOfType([D.string,D.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function fe(l){var e=l;if(!Array.isArray(e)){var t=Ae(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(s){return String(s)})}const X=ae({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:ge(na(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:be("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,t){var s=t.attrs,c=t.slots,n=t.emit,o=F(fe(Ce([e.activeKey,e.defaultActiveKey])));xe(function(){return e.activeKey},function(){o.value=fe(e.activeKey)},{deep:!0});var f=he("collapse",e),g=f.prefixCls,P=f.direction,T=J(function(){var d=e.expandIconPosition;return d!==void 0?d:P.value==="rtl"?"right":"left"}),h=function(r){var u=e.expandIcon,y=u===void 0?c.expandIcon:u,_=y?y(r):v(Pe,{rotate:r.isActive?90:void 0},null);return v("div",null,[$e(Array.isArray(y)?_[0]:_)?se(_,{class:"".concat(g.value,"-arrow")},!1):_])},E=function(r){e.activeKey===void 0&&(o.value=r);var u=e.accordion?r[0]:r;n("update:activeKey",u),n("change",u)},$=function(r){var u=o.value;if(e.accordion)u=u[0]===r?[]:[r];else{u=Oe(u);var y=u.indexOf(r),_=y>-1;_?u.splice(y,1):u.push(r)}E(u)},j=function(r,u){var y,_,R;if(!ke(r)){var a=o.value,i=e.accordion,b=e.destroyInactivePanel,k=e.collapsible,O=e.openAnimation,I=String((y=r.key)!==null&&y!==void 0?y:u),w=r.props||{},A=w.header,p=A===void 0?(_=r.children)===null||_===void 0||(R=_.header)===null||R===void 0?void 0:R.call(_):A,G=w.headerClass,m=w.collapsible,L=w.disabled,U=!1;i?U=a[0]===I:U=a.indexOf(I)>-1;var H=m??k;(L||L==="")&&(H="disabled");var ye={key:I,panelKey:I,header:p,headerClass:G,isActive:U,prefixCls:g.value,destroyInactivePanel:b,openAnimation:O,accordion:i,onItemClick:H==="disabled"?null:$,expandIcon:h,collapsible:H};return se(r,ye)}},N=function(){var r;return we((r=c.default)===null||r===void 0?void 0:r.call(c)).map(j)};return function(){var d,r=e.accordion,u=e.bordered,y=e.ghost,_=Z((d={},x(d,g.value,!0),x(d,"".concat(g.value,"-borderless"),!u),x(d,"".concat(g.value,"-icon-position-").concat(T.value),!0),x(d,"".concat(g.value,"-rtl"),P.value==="rtl"),x(d,"".concat(g.value,"-ghost"),!!y),x(d,s.class,!!s.class),d));return v("div",W(W({class:_},Ie(s)),{},{style:s.style,role:r?"tablist":null}),[N()])}}}),la=ae({compatConfig:{MODE:3},name:"PanelContent",props:me(),setup:function(e,t){var s=t.slots,c=F(!1);return Se(function(){(e.isActive||e.forceRender)&&(c.value=!0)}),function(){var n,o;if(!c.value)return null;var f=e.prefixCls,g=e.isActive,P=e.role;return v("div",{ref:F,class:Z("".concat(f,"-content"),(n={},x(n,"".concat(f,"-content-active"),g),x(n,"".concat(f,"-content-inactive"),!g),n)),role:P},[v("div",{class:"".concat(f,"-content-box")},[(o=s.default)===null||o===void 0?void 0:o.call(s)])])}}}),ee=ae({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:ge(me(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,t){var s=t.slots,c=t.emit,n=t.attrs;Be(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var o=he("collapse",e),f=o.prefixCls,g=function(){c("itemClick",e.panelKey)},P=function(h){(h.key==="Enter"||h.keyCode===13||h.which===13)&&g()};return function(){var T,h,E,$,j=e.header,N=j===void 0?(T=s.header)===null||T===void 0?void 0:T.call(s):j,d=e.headerClass,r=e.isActive,u=e.showArrow,y=e.destroyInactivePanel,_=e.accordion,R=e.forceRender,a=e.openAnimation,i=e.expandIcon,b=i===void 0?s.expandIcon:i,k=e.extra,O=k===void 0?(h=s.extra)===null||h===void 0?void 0:h.call(s):k,I=e.collapsible,w=I==="disabled",A=f.value,p=Z("".concat(A,"-header"),(E={},x(E,d,d),x(E,"".concat(A,"-header-collapsible-only"),I==="header"),E)),G=Z(($={},x($,"".concat(A,"-item"),!0),x($,"".concat(A,"-item-active"),r),x($,"".concat(A,"-item-disabled"),w),x($,"".concat(A,"-no-arrow"),!u),x($,"".concat(n.class),!!n.class),$)),m=v("i",{class:"arrow"},null);u&&typeof b=="function"&&(m=b(e));var L=Ke(v(la,{prefixCls:A,isActive:r,forceRender:R,role:_?"tabpanel":null},{default:s.default}),[[Te,r]]),U=W({appear:!1,css:!1},a);return v("div",W(W({},n),{},{class:G}),[v("div",{class:p,onClick:function(){return I!=="header"&&g()},role:_?"tab":"button",tabindex:w?-1:0,"aria-expanded":r,onKeypress:P},[u&&m,I==="header"?v("span",{onClick:g,class:"".concat(A,"-header-text")},[N]):N,O&&v("div",{class:"".concat(A,"-extra")},[O])]),v(Ee,U,{default:function(){return[!y||r?L:null]}})])}}});X.Panel=ee;X.install=function(l){return l.component(X.name,X),l.component(ee.name,ee),l};var sa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const oa=sa;function pe(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),s.forEach(function(c){ia(l,c,t[c])})}return l}function ia(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var le=function(e,t){var s=pe({},e,t.attrs);return v(Ne,pe({},s,{icon:oa}),null)};le.displayName="ArrowRightOutlined";le.inheritAttrs=!1;const ra=le;function ca(l,e,t,s){for(var c=-1,n=l==null?0:l.length;++c<n;){var o=l[c];e(s,o,t(o),l)}return s}function da(l){return function(e,t,s){for(var c=-1,n=Object(e),o=s(e),f=o.length;f--;){var g=o[l?f:++c];if(t(n[g],g,n)===!1)break}return e}}var ua=da();const va=ua;function fa(l,e){return l&&va(l,e,Re)}function pa(l,e){return function(t,s){if(t==null)return t;if(!Me(t))return l(t,s);for(var c=t.length,n=e?c:-1,o=Object(t);(e?n--:++n<c)&&s(o[n],n,o)!==!1;);return t}}var ga=pa(fa);const ha=ga;function ma(l,e,t,s){return ha(l,function(c,n,o){e(s,c,t(c),o)}),s}function ya(l,e){return function(t,s){var c=je(t)?ca:ma,n=e?e():{};return c(t,l,De(s),n)}}var _a=Object.prototype,ba=_a.hasOwnProperty,Ca=ya(function(l,e,t){ba.call(l,t)?l[t].push(e):Fe(l,t,[e])});const xa=Ca;const Ia={class:"container"},Aa={class:"search-bar"},wa={class:"form-name"},ka={class:"search-bar"},Pa={class:"form-name"},$a={class:"search-bar"},Oa={class:"form-name"},Sa={key:0,class:"generate-idx-hint"},Ba={class:"list-container"},Ka=["onClick"],Ta=["onClick"],Ea=["onClickCapture"],Na=ae({__name:"TagSearch",props:{tabIdx:{},paneIdx:{}},setup(l){const e=l,t=Ue(),s=Ve(),c=J(()=>!s.isIdle),n=F(),o=F({and_tags:[],or_tags:[],not_tags:[]}),f=J(()=>n.value?n.value.tags.slice().sort((a,i)=>i.count-a.count):[]),g=["custom","Model","lora","lyco","pos","size","Postprocess upscaler","Postprocess upscale by","Sampler"].reduce((a,i,b)=>(a[i]=b,a),{}),P=J(()=>Object.entries(xa(f.value,a=>a.type)).sort((a,i)=>g[a[0]]-g[i[0]])),T=Le(),h=F(P.value.map(a=>a[0]));qe(async()=>{n.value=await ve(),h.value=P.value.map(a=>a[0]),n.value.img_count&&n.value.expired&&E()}),oe("searchIndexExpired",()=>n.value&&(n.value.expired=!0));const E=ze(()=>s.pushAction(async()=>(await ta(),n.value=await ve(),h.value=P.value.map(a=>a[0]),n.value)).res),$=()=>{t.openTagSearchMatchedImageGridInRight(e.tabIdx,T,o.value)};oe("returnToIIB",async()=>{const a=await s.pushAction(Ze).res;n.value.expired=a.expired});const j=(a,i=!1)=>(i?`[${a.type}] `:"")+(a.display_name?`${a.display_name} : ${a.name}`:a.name),N=F(!1),d=F(""),r=async()=>{var i,b,k;if(!d.value){N.value=!1;return}const a=await s.pushAction(()=>ea({tag_name:d.value})).res;a.type!=="custom"&&de.error(ne("existInOtherType")),(i=n.value)!=null&&i.tags.find(O=>O.id===a.id)?de.error(ne("alreadyExists")):((b=n.value)==null||b.tags.push(a),(k=t.conf)==null||k.all_custom_tags.push(a)),d.value="",N.value=!1},u=a=>{Je.confirm({title:ne("confirmDelete"),async onOk(){var b,k,O,I;await aa({tag_id:a});const i=((b=n.value)==null?void 0:b.tags.findIndex(w=>w.id===a))??-1;(k=n.value)==null||k.tags.splice(i,1),(I=t.conf)==null||I.all_custom_tags.splice((O=t.conf)==null?void 0:O.all_custom_tags.findIndex(w=>w.id===a),1)}})},y=J(()=>new Set([o.value.and_tags,o.value.or_tags,o.value.not_tags].flat())),_=a=>{y.value.has(a.id)?(o.value.and_tags=o.value.and_tags.filter(i=>i!==a.id),o.value.or_tags=o.value.or_tags.filter(i=>i!==a.id),o.value.not_tags=o.value.not_tags.filter(i=>i!==a.id)):o.value.and_tags.push(a.id)},R={value:a=>a.id,text:j,optionText:a=>j(a,!0)};return(a,i)=>{const b=ue,k=We,O=ue,I=Xe,w=ee,A=X;return C(),S("div",Ia,[q("",!0),n.value?(C(),S(Y,{key:1},[M("div",null,[M("div",Aa,[M("div",wa,B(a.$t("exactMatch")),1),v(K(te),{conv:R,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.and_tags,"onUpdate:value":i[0]||(i[0]=p=>o.value.and_tags=p),disabled:!f.value.length,placeholder:a.$t("selectExactMatchTag")},null,8,["options","value","disabled","placeholder"]),n.value.expired||!n.value.img_count?(C(),Q(b,{key:0,onClick:K(E),loading:!K(s).isIdle,type:"primary"},{default:V(()=>[z(B(n.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(C(),Q(b,{key:1,type:"primary",onClick:$,loading:!K(s).isIdle,disabled:!o.value.and_tags.length},{default:V(()=>[z(B(a.$t("search")),1)]),_:1},8,["loading","disabled"]))]),M("div",ka,[M("div",Pa,B(a.$t("anyMatch")),1),v(K(te),{conv:R,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.or_tags,"onUpdate:value":i[1]||(i[1]=p=>o.value.or_tags=p),disabled:!f.value.length,placeholder:a.$t("selectAnyMatchTag")},null,8,["options","value","disabled","placeholder"])]),M("div",$a,[M("div",Oa,B(a.$t("exclude")),1),v(K(te),{conv:R,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.not_tags,"onUpdate:value":i[2]||(i[2]=p=>o.value.not_tags=p),disabled:!f.value.length,placeholder:a.$t("selectExcludeTag")},null,8,["options","value","disabled","placeholder"])])]),f.value.filter(p=>p.type!=="custom").length?q("",!0):(C(),S("p",Sa,B(a.$t("needGenerateIdx")),1)),M("div",Ba,[(C(!0),S(Y,null,ie(P.value,([p,G])=>(C(),S("ul",{class:"tag-list",key:p},[M("h3",{class:"cat-name",onClick:m=>h.value.includes(p)?h.value.splice(h.value.indexOf(p),1):h.value.push(p)},[v(K(ra),{class:re(["arrow",{down:h.value.includes(p)}])},null,8,["class"]),z(" "+B(a.$t(p)),1)],8,Ka),v(A,{ghost:"",activeKey:h.value,"onUpdate:activeKey":i[5]||(i[5]=m=>h.value=m)},{expandIcon:V(()=>[]),default:V(()=>[(C(),Q(w,{key:p},{default:V(()=>[(C(!0),S(Y,null,ie(G,(m,L)=>(C(),S("li",{key:m.id,class:re(["tag",{selected:y.value.has(m.id)}]),onClick:U=>_(m)},[y.value.has(m.id)?(C(),Q(K(Ge),{key:0})):q("",!0),z(" "+B(j(m))+" ",1),p==="custom"&&L!==0?(C(),S("span",{key:1,class:"remove",onClickCapture:ce(U=>u(m.id),["stop"])},[v(K(He))],40,Ea)):q("",!0)],10,Ta))),128)),p==="custom"?(C(),S("li",{key:0,class:"tag",onClick:i[4]||(i[4]=m=>N.value=!0)},[N.value?(C(),Q(I,{key:0,compact:""},{default:V(()=>[v(k,{value:d.value,"onUpdate:value":i[3]||(i[3]=m=>d.value=m),style:{width:"128px"},loading:c.value,"allow-clear":"",size:"small"},null,8,["value","loading"]),v(O,{size:"small",type:"primary",onClickCapture:ce(r,["stop"]),loading:c.value},{default:V(()=>[z(B(d.value?a.$t("submit"):a.$t("cancel")),1)]),_:1},8,["onClickCapture","loading"])]),_:1})):(C(),S(Y,{key:1},[v(K(Qe)),z(" "+B(a.$t("add")),1)],64))])):q("",!0)]),_:2},1024))]),_:2},1032,["activeKey"])]))),128))])],64)):q("",!0)])}}});const Fa=Ye(Na,[["__scopeId","data-v-d3d0aa40"]]);export{Fa as default};