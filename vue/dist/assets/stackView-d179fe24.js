import{d as X,u as le,g as L,_ as Ie,c as a,a as ae,P as J,D as Se,f as xe,w as Qe,b as We,e as He,h as Ce,M as re,i as Je,j as Xe,F as oe,k as Ye,l as Ze,o as c,m as E,n as i,p,q as g,r as e,s as z,t as et,v as f,x as T,y as P,z as te,A as ne,B as tt,C as nt,E as at,S as ye,G as rt,H,I as ot,J as st,K as lt,L as we,N as it,O as ut,Q as dt,R as ct,T as pt,U as mt,V as vt,W as ft}from"./index-a7ec865b.js";import{D as Pe,S as U,s as kt,a as bt,f as gt,L as _t,R as Ct,b as yt}from"./fullScreenContextMenu-bca9a5c4.js";import{F,_ as wt}from"./index-7944e768.js";import{u as ht,a as It,b as St,c as xt,d as Pt,e as Mt,f as $t,s as Rt,v as At}from"./hook-3d730cf2.js";/* empty css              *//* empty css              */import"./db-f2c5a08d.js";var Bt=["class","style"],Dt=function(){return{prefixCls:String,href:String,separator:J.any,overlay:J.any,onClick:Function}};const q=X({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Dt(),slots:["separator","overlay"],setup:function(r,C){var m=C.slots,k=C.attrs,w=le("breadcrumb",r),y=w.prefixCls,S=function(h,u){var s=L(m,r,"overlay");return s?a(Pe,{overlay:s,placement:"bottom"},{default:function(){return[a("span",{class:"".concat(u,"-overlay-link")},[h,a(Se,null,null)])]}}):h};return function(){var x,h=(x=L(m,r,"separator"))!==null&&x!==void 0?x:"/",u=L(m,r),s=k.class,b=k.style,v=Ie(k,Bt),d;return r.href!==void 0?d=a("a",ae({class:"".concat(y.value,"-link"),onClick:r.onClick},v),[u]):d=a("span",ae({class:"".concat(y.value,"-link"),onClick:r.onClick},v),[u]),d=S(d,y.value),u?a("span",{class:s,style:b},[d,h&&a("span",{class:"".concat(y.value,"-separator")},[h])]):null}}});var Nt=function(){return{prefixCls:String,routes:{type:Array},params:J.any,separator:J.any,itemRender:{type:Function}}};function Et(o,r){if(!o.breadcrumbName)return null;var C=Object.keys(r).join("|"),m=o.breadcrumbName.replace(new RegExp(":(".concat(C,")"),"g"),function(k,w){return r[w]||k});return m}function he(o){var r=o.route,C=o.params,m=o.routes,k=o.paths,w=m.indexOf(r)===m.length-1,y=Et(r,C);return w?a("span",null,[y]):a("a",{href:"#/".concat(k.join("/"))},[y])}const O=X({compatConfig:{MODE:3},name:"ABreadcrumb",props:Nt(),slots:["separator","itemRender"],setup:function(r,C){var m=C.slots,k=le("breadcrumb",r),w=k.prefixCls,y=k.direction,S=function(s,b){return s=(s||"").replace(/^\//,""),Object.keys(b).forEach(function(v){s=s.replace(":".concat(v),b[v])}),s},x=function(s,b,v){var d=Je(s),I=S(b||"",v);return I&&d.push(I),d},h=function(s){var b=s.routes,v=b===void 0?[]:b,d=s.params,I=d===void 0?{}:d,M=s.separator,$=s.itemRender,R=$===void 0?he:$,A=[];return v.map(function(_){var B=S(_.path,I);B&&A.push(B);var V=[].concat(A),G=null;return _.children&&_.children.length&&(G=a(re,null,{default:function(){return[_.children.map(function(D){return a(re.Item,{key:D.path||D.breadcrumbName},{default:function(){return[R({route:D,params:I,routes:v,paths:x(V,D.path,I)})]}})})]}})),a(q,{overlay:G,separator:M,key:B||_.breadcrumbName},{default:function(){return[R({route:_,params:I,routes:v,paths:V})]}})})};return function(){var u,s,b,v=r.routes,d=r.params,I=d===void 0?{}:d,M=xe(L(m,r)),$=(u=L(m,r,"separator"))!==null&&u!==void 0?u:"/",R=r.itemRender||m.itemRender||he;v&&v.length>0?b=h({routes:v,params:I,separator:$,itemRender:R}):M.length&&(b=M.map(function(_,B){return Qe(We(_.type)==="object"&&(_.type.__ANT_BREADCRUMB_ITEM||_.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),He(_,{separator:$,key:B})}));var A=(s={},Ce(s,w.value,!0),Ce(s,"".concat(w.value,"-rtl"),y.value==="rtl"),s);return a("div",{class:A},[b])}}});var Ft=["separator","class"],zt=function(){return{prefixCls:String}};const se=X({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:zt(),setup:function(r,C){var m=C.slots,k=C.attrs,w=le("breadcrumb",r),y=w.prefixCls;return function(){var S;k.separator;var x=k.class,h=Ie(k,Ft),u=xe((S=m.default)===null||S===void 0?void 0:S.call(m));return a("span",ae({class:["".concat(y.value,"-separator"),x]},h),[u.length>0?u:"/"])}}});O.Item=q;O.Separator=se;O.install=function(o){return o.component(O.name,O),o.component(q.name,q),o.component(se.name,se),o};F.useInjectFormItemContext=Xe;F.ItemRest=oe;F.install=function(o){return o.component(F.name,F),o.component(F.Item.name,F.Item),o.component(oe.name,oe),o};U.setDefaultIndicator=kt;U.install=function(o){return o.component(U.name,U),o};const Tt={class:"hint"},Ot={class:"location-bar"},Vt={key:0},jt=["onClick"],Lt={key:3,style:{"margin-left":"8px"}},Ut={class:"actions"},qt=["onClick"],Gt={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},Kt={style:{padding:"4px"}},Qt={style:{padding:"4px"}},Wt={key:0,class:"view"},Ht={key:0,class:"preview-switch"},Jt=X({__name:"stackView",props:{tabIdx:{},paneIdx:{},path:{},walkModePath:{},stackKey:{}},setup(o){const r=o,C=Ye(),{scroller:m,stackViewEl:k,props:w,multiSelectedIdxs:y,spinning:S}=ht().toRefs(),{currLocation:x,currPage:h,refresh:u,copyLocation:s,back:b,openNext:v,stack:d,quickMoveTo:I,addToSearchScanPathAndQuickMove:M,searchPathInfo:$,locInputValue:R,isLocationEditing:A,onLocEditEnter:_,onEditBtnClick:B,share:V}=It(r),{gridItems:G,sortMethodConv:Y,moreActionsDropdownShow:D,sortedFiles:j,sortMethod:Z,viewMode:K,itemSize:ie,loadNextDir:Me,loadNextDirLoading:$e,canLoadNext:Re,onScroll:Ae}=St(r),{onDrop:Be,onFileDragStart:De,onFileDragEnd:Ne}=xt(),{onFileItemClick:Ee,onContextMenuClick:ue,showGenInfo:Q,imageGenInfo:de,q:Fe}=Pt(r,{openNext:v}),{previewIdx:W,onPreviewVisibleChange:ze,previewing:ce,previewImgMove:pe,canPreview:me}=Mt(r),{showMenuIdx:ee}=$t();return Ze(()=>r,()=>{w.value=r;const l=Rt.get(r.stackKey??"");l&&(d.value=l.slice())},{immediate:!0}),(l,t)=>{const Te=it,Oe=ut,Ve=dt,ve=q,fe=O,je=ct,Le=pt,ke=mt,Ue=vt,qe=re,be=Pe,ge=wt,Ge=F,Ke=U;return c(),E(Ke,{spinning:e(S),size:"large"},{default:i(()=>[a(Te,{style:{display:"none"}}),p("div",{ref_key:"stackViewEl",ref:k,onDragover:t[22]||(t[22]=g(()=>{},["prevent"])),onDrop:t[23]||(t[23]=g(n=>e(Be)(n),["prevent"])),class:"container"},[a(Ve,{visible:e(Q),"onUpdate:visible":t[1]||(t[1]=n=>z(Q)?Q.value=n:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=n=>Q.value=!1)},{cancelText:i(()=>[]),default:i(()=>[a(Oe,{active:"",loading:!e(Fe).isIdle},{default:i(()=>[p("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:t[0]||(t[0]=n=>e(et)(e(de)))},[p("div",Tt,f(l.$t("doubleClickToCopy")),1),T(" "+f(e(de)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),p("div",Ot,[r.walkModePath?(c(),P("div",Vt,[a(je,null,{title:i(()=>[T(f(l.$t("walk-mode-move-message")),1)]),default:i(()=>[a(fe,{style:{flex:"1"}},{default:i(()=>[(c(!0),P(te,null,ne(e(d),(n,N)=>(c(),E(ve,{key:N},{default:i(()=>[p("span",null,f(n.curr==="/"?l.$t("root"):n.curr.replace(/:\/$/,l.$t("drive"))),1)]),_:2},1024))),128))]),_:1})]),_:1})])):(c(),P("div",{key:1,class:"breadcrumb",style:tt({flex:e(A)?1:""})},[e(A)?(c(),E(Le,{key:0,style:{flex:"1"},value:e(R),"onUpdate:value":t[3]||(t[3]=n=>z(R)?R.value=n:null),onClick:t[4]||(t[4]=g(()=>{},["stop"])),onPressEnter:e(_)},null,8,["value","onPressEnter"])):(c(),E(fe,{key:1,style:{flex:"1"}},{default:i(()=>[(c(!0),P(te,null,ne(e(d),(n,N)=>(c(),E(ve,{key:N},{default:i(()=>[p("a",{onClick:g(_e=>e(b)(N),["prevent"])},f(n.curr==="/"?l.$t("root"):n.curr.replace(/:\/$/,l.$t("drive"))),9,jt)]),_:2},1024))),128))]),_:1})),e(A)?(c(),E(ke,{key:2,size:"small",onClick:e(_),type:"primary"},{default:i(()=>[T(f(l.$t("go")),1)]),_:1},8,["onClick"])):(c(),P("div",Lt,[p("a",{onClick:t[5]||(t[5]=g((...n)=>e(s)&&e(s)(...n),["prevent"])),style:{"margin-right":"4px"}},f(l.$t("copy")),1),T(),p("a",{onClick:t[6]||(t[6]=g((...n)=>e(B)&&e(B)(...n),["prevent","stop"]))},f(l.$t("edit")),1)]))],4)),p("div",Ut,[p("a",{class:"opt",onClick:t[7]||(t[7]=g((...n)=>e(u)&&e(u)(...n),["prevent"]))},f(l.$t("refresh")),1),p("a",{class:"opt",onClick:t[8]||(t[8]=g((...n)=>e(V)&&e(V)(...n),["prevent"]))},f(l.$t("share")),1),a(be,null,{overlay:i(()=>[a(qe,null,{default:i(()=>[(c(!0),P(te,null,ne(e(C).quickMovePaths,n=>(c(),E(Ue,{key:n.dir},{default:i(()=>[p("a",{onClick:g(N=>e(I)(n.dir),["prevent"])},f(n.zh),9,qt)]),_:2},1024))),128))]),_:1})]),default:i(()=>[p("a",{class:"opt",onClick:t[9]||(t[9]=g(()=>{},["prevent"]))},[T(f(l.$t("quickMove"))+" ",1),a(e(Se))])]),_:1}),a(be,{trigger:["click"],visible:e(D),"onUpdate:visible":t[18]||(t[18]=n=>z(D)?D.value=n:null),placement:"bottomLeft",getPopupContainer:n=>n.parentNode},{overlay:i(()=>[p("div",Gt,[a(Ge,nt(at({labelCol:{span:6},wrapperCol:{span:18}})),{default:i(()=>[a(ge,{label:l.$t("viewMode")},{default:i(()=>[a(e(ye),{value:e(K),"onUpdate:value":t[11]||(t[11]=n=>z(K)?K.value=n:null),onClick:t[12]||(t[12]=g(()=>{},["stop"])),conv:{value:n=>n,text:n=>l.$t(n)},options:e(At)},null,8,["value","conv","options"])]),_:1},8,["label"]),a(ge,{label:l.$t("sortingMethod")},{default:i(()=>[a(e(ye),{value:e(Z),"onUpdate:value":t[13]||(t[13]=n=>z(Z)?Z.value=n:null),onClick:t[14]||(t[14]=g(()=>{},["stop"])),conv:e(Y),options:e(rt)},null,8,["value","conv","options"])]),_:1},8,["label"]),p("div",Kt,[e($)?e($).can_delete?(c(),P("a",{key:1,onClick:t[16]||(t[16]=g((...n)=>e(M)&&e(M)(...n),["prevent"]))},f(l.$t("removeFromSearchScanPathAndQuickMove")),1)):H("",!0):(c(),P("a",{key:0,onClick:t[15]||(t[15]=g((...n)=>e(M)&&e(M)(...n),["prevent"]))},f(l.$t("addToSearchScanPathAndQuickMove")),1))]),p("div",Qt,[p("a",{onClick:t[17]||(t[17]=g(n=>e(ot)(e(x)+"/"),["prevent"]))},f(l.$t("openWithLocalFileBrowser")),1)])]),_:1},16)])]),default:i(()=>[p("a",{class:"opt",onClick:t[10]||(t[10]=g(()=>{},["prevent"]))},f(l.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),e(h)?(c(),P("div",Wt,[a(e(bt),{class:"file-list",items:e(j),ref_key:"scroller",ref:m,onScroll:e(Ae),"item-size":e(ie).first,"key-field":"fullpath","item-secondary-size":e(ie).second,gridItems:e(G)},st({default:i(({item:n,index:N})=>[a(gt,{idx:N,file:n,"full-screen-preview-image-url":e(j)[e(W)]?e(lt)(e(j)[e(W)]):"","show-menu-idx":e(ee),"onUpdate:showMenuIdx":t[19]||(t[19]=_e=>z(ee)?ee.value=_e:null),selected:e(y).includes(N),"view-mode":e(K),onFileItemClick:e(Ee),onDragstart:e(De),onDragend:e(Ne),onPreviewVisibleChange:e(ze),onContextMenuClick:e(ue)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","view-mode","onFileItemClick","onDragstart","onDragend","onPreviewVisibleChange","onContextMenuClick"])]),_:2},[r.walkModePath?{name:"after",fn:i(()=>[a(ke,{onClick:e(Me),loading:e($e),block:"",type:"primary",disabled:!e(Re),ghost:""},{default:i(()=>[T(f(l.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])]),key:"0"}:void 0]),1032,["items","onScroll","item-size","item-secondary-size","gridItems"]),e(ce)?(c(),P("div",Ht,[a(e(_t),{onClick:t[20]||(t[20]=n=>e(pe)("prev")),class:we({disable:!e(me)("prev")})},null,8,["class"]),a(e(Ct),{onClick:t[21]||(t[21]=n=>e(pe)("next")),class:we({disable:!e(me)("next")})},null,8,["class"])])):H("",!0)])):H("",!0)],544),e(ce)?(c(),E(yt,{key:0,file:e(j)[e(W)],idx:e(W),onContextMenuClick:e(ue)},null,8,["file","idx","onContextMenuClick"])):H("",!0)]),_:1},8,["spinning"])}}});const rn=ft(Jt,[["__scopeId","data-v-e4015e72"]]);export{rn as default};