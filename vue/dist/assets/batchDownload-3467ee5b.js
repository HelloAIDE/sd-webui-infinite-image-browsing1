import{d as v,cW as C,c6 as I,S as l,T as _,U as f,c,a1 as r,V as h,W as d,a2 as e,a0 as F,ad as z,co as B,cX as x,ai as S,Z as $}from"./index-ee40c384.js";import{u as R,a as V,k as E,F as T,d as A}from"./FileItem-a74cdf88.js";import"./functionalCallableComp-cec4e075.js";/* empty css              */import"./_isIterateeCall-ae159f74.js";import"./index-920e6a91.js";const U={class:"actions-panel actions"},L={key:0,class:"file-list"},N={class:"hint"},W=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(H){const{stackViewEl:w}=R().toRefs(),{itemSize:p,gridItems:k,cellWidth:y}=V(),n=E(),{selectdFiles:i}=C(n),m=I(),D=async t=>{const s=B(t);s&&n.addFiles(s.nodes)},b=async()=>{m.pushAction(async()=>{const t=await x.value.post("/zip",{paths:i.value.map(o=>o.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=s,a.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(a),a.click()})},g=t=>{i.value.splice(t,1)};return(t,s)=>{const a=S;return l(),_("div",{class:"container",ref_key:"stackViewEl",ref:w,onDrop:D},[f("div",U,[c(a,{onClick:s[0]||(s[0]=o=>e(n).selectdFiles=[])},{default:r(()=>[h(d(t.$t("clear")),1)]),_:1}),c(a,{onClick:b,type:"primary",loading:!e(m).isIdle},{default:r(()=>[h(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(i).length?(l(),F(e(A),{key:1,ref:"scroller",class:"file-list",items:e(i).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(k)},{default:r(({item:o,index:u})=>[c(T,{idx:u,file:o,"cell-width":e(y),"enable-close-icon":"",onCloseIconClick:j=>g(u),"full-screen-preview-image-url":e(z)(o),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(l(),_("div",L,[f("p",N,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const J=$(W,[["__scopeId","data-v-aab31da2"]]);export{J as default};
