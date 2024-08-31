import{d as B,$ as K,r as D,m as X,n as Y,S as f,T as y,c as t,a1 as o,a2 as e,z as i,a0 as k,Y as v,U as p,X as M,aI as Z,E as j,W as h,V as _,aa as P,aP as q,ab as J,a6 as x,a3 as T,a7 as ee,aQ as te,aR as le,aS as ae,aT as ne,aM as oe,ai as F,ah as se,Z as de}from"./index-e0ccda42.js";import{_ as R,a as N,F as ue}from"./numInput-8c47ffbc.js";import"./index-8ec28541.js";/* empty css              *//* empty css              */import{_ as O}from"./index-acc0f8a0.js";/* empty css              */import{g as ie,C as re}from"./shortcut-65bf6cf3.js";import{a as ce}from"./functionalCallableComp-b00f52ee.js";const A="/infinite_image_browsing/fe-static/assets/sample-55dcafc6.webp",me=["width","height","src"],pe=B({__name:"ImageSetting",setup(G){function a($,r){return new Promise(m=>{const g=new Image;g.onload=()=>{const u=document.createElement("canvas");u.width=g.width*r,u.height=g.height*r,u.getContext("2d").drawImage(g,0,0,u.width,u.height),m(u.toDataURL())},g.src=$})}const d=K(),w=D("");return X(()=>[d.enableThumbnail,d.gridThumbnailResolution],Y(async()=>{d.enableThumbnail&&(w.value=await a(A,d.gridThumbnailResolution/1024))},300),{immediate:!0,deep:!0}),($,r)=>{const m=N,g=O;return f(),y(M,null,[t(m,{label:e(i)("defaultGridCellWidth")},{default:o(()=>[t(R,{min:64,max:1024,step:16,modelValue:e(d).defaultGridCellWidth,"onUpdate:modelValue":r[0]||(r[0]=u=>e(d).defaultGridCellWidth=u)},null,8,["modelValue"])]),_:1},8,["label"]),t(m,{label:e(i)("useThumbnailPreview")},{default:o(()=>[t(g,{checked:e(d).enableThumbnail,"onUpdate:checked":r[1]||(r[1]=u=>e(d).enableThumbnail=u)},null,8,["checked"])]),_:1},8,["label"]),e(d).enableThumbnail?(f(),k(m,{key:0,label:e(i)("thumbnailResolution")},{default:o(()=>[t(R,{modelValue:e(d).gridThumbnailResolution,"onUpdate:modelValue":r[2]||(r[2]=u=>e(d).gridThumbnailResolution=u),min:256,max:1024,step:64},null,8,["modelValue"])]),_:1},8,["label"])):v("",!0),t(m,{label:e(i)("livePreview")},{default:o(()=>[p("div",null,[p("img",{width:e(d).defaultGridCellWidth,height:e(d).defaultGridCellWidth,src:e(d).enableThumbnail?w.value:e(A)},null,8,me)])]),_:1},8,["label"]),t(m,{label:e(i)("defaultShowChangeIndicators")},{default:o(()=>[t(g,{checked:e(d).defaultChangeIndchecked,"onUpdate:checked":r[3]||(r[3]=u=>e(d).defaultChangeIndchecked=u)},null,8,["checked"])]),_:1},8,["label"]),e(d).defaultChangeIndchecked?(f(),k(m,{key:1,label:e(i)("defaultSeedAsChange")},{default:o(()=>[t(g,{checked:e(d).defaultSeedChangeChecked,"onUpdate:checked":r[4]||(r[4]=u=>e(d).defaultSeedChangeChecked=u)},null,8,["checked"])]),_:1},8,["label"])):v("",!0),t(m,{label:e(i)("previewMaskBackgroundOpacity")},{default:o(()=>[t(R,{min:0,max:1,step:.05,modelValue:e(d).previewBgOpacity,"onUpdate:modelValue":r[5]||(r[5]=u=>e(d).previewBgOpacity=u)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}}),he={class:"panel"},ge={style:{"margin-top":"0"}},fe={class:"lang-select-wrap"},be={class:"col"},_e={class:"col"},ke={class:"col"},ve={class:"col"},we=B({__name:"globalSetting",setup(G){const a=K(),d=Z(),w=D(!1),$=async()=>{window.location.reload()},r=[{value:"en",text:"English"},{value:"zhHans",text:"简体中文"},{value:"zhHant",text:"繁體中文"},{value:"de",text:"Deutsch"}],m=(s,l)=>{const I=ie(s);I&&(a.shortcut[l]=I)},g=async()=>{await te("shutdown_api_server_command"),await le.removeFile(ae),await ne()},u=j(()=>[{value:"empty",text:i("emptyStartPage")},{value:"last-workspace-state",text:i("restoreLastWorkspaceState")},...d.snapshots.map(l=>({value:`workspace_snapshot_${l.id}`,text:i("restoreWorkspaceSnapshot",[l.name])}))]);return(s,l)=>{var V;const I=oe,L=F,c=N,C=O,E=R,S=F,z=re,U=se,H=ue;return f(),y("div",he,[(V=e(a).conf)!=null&&V.is_readonly?(f(),k(I,{key:0,message:s.$t("readonlyModeSettingPageDesc"),type:"warning"},null,8,["message"])):v("",!0),v("",!0),t(H,null,{default:o(()=>{var W;return[p("h2",ge,h(e(i)("ImageBrowsingSettings")),1),t(pe),p("h2",null,h(e(i)("imgSearch")),1),t(c,{label:s.$t("rebuildImageIndex")},{default:o(()=>[t(L,{onClick:e(ce)},{default:o(()=>[_(h(s.$t("start")),1)]),_:1},8,["onClick"])]),_:1},8,["label"]),p("h2",null,h(e(i)("autoRefresh")),1),t(c,{label:s.$t("autoRefreshWalkMode")},{default:o(()=>[t(C,{checked:e(a).autoRefreshWalkMode,"onUpdate:checked":l[0]||(l[0]=n=>e(a).autoRefreshWalkMode=n)},null,8,["checked"])]),_:1},8,["label"]),t(c,{label:s.$t("autoRefreshNormalFixedMode")},{default:o(()=>[t(C,{checked:e(a).autoRefreshNormalFixedMode,"onUpdate:checked":l[1]||(l[1]=n=>e(a).autoRefreshNormalFixedMode=n)},null,8,["checked"])]),_:1},8,["label"]),t(c,{label:e(i)("autoRefreshWalkModePosLimit")},{default:o(()=>[t(E,{min:0,max:1024,step:16,modelValue:e(a).autoRefreshWalkModePosLimit,"onUpdate:modelValue":l[2]||(l[2]=n=>e(a).autoRefreshWalkModePosLimit=n)},null,8,["modelValue"])]),_:1},8,["label"]),p("h2",null,h(e(i)("other")),1),t(c,{label:s.$t("lang")},{default:o(()=>[p("div",fe,[t(e(P),{options:r,value:e(a).lang,"onUpdate:value":l[3]||(l[3]=n=>e(a).lang=n),onChange:l[4]||(l[4]=n=>w.value=!0)},null,8,["value"])]),w.value?(f(),k(S,{key:0,type:"primary",onClick:$,ghost:""},{default:o(()=>[_(h(e(i)("langChangeReload")),1)]),_:1})):v("",!0)]),_:1},8,["label"]),t(c,{label:s.$t("onlyFoldersAndImages")},{default:o(()=>[t(C,{checked:e(a).onlyFoldersAndImages,"onUpdate:checked":l[5]||(l[5]=n=>e(a).onlyFoldersAndImages=n)},null,8,["checked"])]),_:1},8,["label"]),t(c,{label:s.$t("showCommaInGenInfoPanel")},{default:o(()=>[t(C,{checked:e(a).showCommaInInfoPanel,"onUpdate:checked":l[6]||(l[6]=n=>e(a).showCommaInInfoPanel=n)},null,8,["checked"])]),_:1},8,["label"]),t(c,{label:s.$t("defaultSortingMethod")},{default:o(()=>[t(e(P),{value:e(a).defaultSortingMethod,"onUpdate:value":l[7]||(l[7]=n=>e(a).defaultSortingMethod=n),conv:e(q),options:e(J)},null,8,["value","conv","options"])]),_:1},8,["label"]),t(c,{label:s.$t("longPressOpenContextMenu")},{default:o(()=>[t(C,{checked:e(a).longPressOpenContextMenu,"onUpdate:checked":l[8]||(l[8]=n=>e(a).longPressOpenContextMenu=n)},null,8,["checked"])]),_:1},8,["label"]),t(c,{label:s.$t("openOnAppStart")},{default:o(()=>[t(e(P),{value:e(a).defaultInitinalPage,"onUpdate:value":l[9]||(l[9]=n=>e(a).defaultInitinalPage=n),options:u.value},null,8,["value","options"])]),_:1},8,["label"]),(f(!0),y(M,null,x(e(a).ignoredConfirmActions,(n,b)=>(f(),k(c,{label:s.$t(b+"SkipConfirm"),key:b},{default:o(()=>[t(z,{checked:e(a).ignoredConfirmActions[b],"onUpdate:checked":Q=>e(a).ignoredConfirmActions[b]=Q},null,8,["checked","onUpdate:checked"])]),_:2},1032,["label"]))),128)),p("h2",null,h(e(i)("shortcutKey")),1),t(c,{label:s.$t("download")},{default:o(()=>[p("div",be,[t(U,{value:e(a).shortcut.download,onKeydown:l[10]||(l[10]=T(n=>m(n,"download"),["stop","prevent"])),placeholder:s.$t("shortcutKeyDescription")},null,8,["value","placeholder"]),t(S,{onClick:l[11]||(l[11]=n=>e(a).shortcut.download=""),class:"clear-btn"},{default:o(()=>[_(h(s.$t("clear")),1)]),_:1})])]),_:1},8,["label"]),t(c,{label:s.$t("deleteSelected")},{default:o(()=>[p("div",_e,[t(U,{value:e(a).shortcut.delete,onKeydown:l[12]||(l[12]=T(n=>m(n,"delete"),["stop","prevent"])),placeholder:s.$t("shortcutKeyDescription")},null,8,["value","placeholder"]),t(S,{onClick:l[13]||(l[13]=n=>e(a).shortcut.delete=""),class:"clear-btn"},{default:o(()=>[_(h(s.$t("clear")),1)]),_:1})])]),_:1},8,["label"]),(f(!0),y(M,null,x(((W=e(a).conf)==null?void 0:W.all_custom_tags)??[],n=>(f(),k(c,{label:s.$t("toggleTagSelection",{tag:n.name}),key:n.id},{default:o(()=>[p("div",ke,[t(U,{value:e(a).shortcut[`toggle_tag_${n.name}`],onKeydown:T(b=>m(b,`toggle_tag_${n.name}`),["stop","prevent"]),placeholder:s.$t("shortcutKeyDescription")},null,8,["value","onKeydown","placeholder"]),t(S,{onClick:b=>e(a).shortcut[`toggle_tag_${n.name}`]="",class:"clear-btn"},{default:o(()=>[_(h(s.$t("clear")),1)]),_:2},1032,["onClick"])])]),_:2},1032,["label"]))),128)),e(ee)?(f(),y(M,{key:0},[p("h2",null,h(e(i)("clientSpecificSettings")),1),t(c,null,{default:o(()=>[p("div",ve,[t(S,{onClick:g,class:"clear-btn"},{default:o(()=>[_(h(s.$t("initiateSoftwareStartupConfig")),1)]),_:1})])]),_:1})],64)):v("",!0)]}),_:1})])}}});const Te=de(we,[["__scopeId","data-v-8a6b0808"]]);export{Te as default};