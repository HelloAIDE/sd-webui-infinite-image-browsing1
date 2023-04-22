import{bs as D,bA as K,r as G,y as F,b4 as V,G as v,bb as W,t as I,d as B,u as T,bB as P,a5 as j,A as k,bC as R,c as $,_ as s,a as E,h as _}from"./index-ea5c2aef.js";import{g as U,t as q,d as H}from"./styleChecker-64fe9b7f.js";var J="[object Object]",Q=Function.prototype,X=Object.prototype,L=Q.toString,Y=X.hasOwnProperty,Z=L.call(Object);function ie(n){if(!D(n)||K(n)!=J)return!1;var e=U(n);if(e===null)return!0;var a=Y.call(e,"constructor")&&e.constructor;return typeof a=="function"&&a instanceof a&&L.call(a)==Z}function se(n,e,a){var p=-1,i=n.length;e<0&&(e=-e>i?0:i+e),a=a>i?i:a,a<0&&(a+=i),i=e>a?0:a-e>>>0,e>>>=0;for(var f=Array(i);++p<i;)f[p]=n[p+e];return f}function le(n){var e=q(n),a=e%1;return e===e?a?e-a:e:0}const z=function(){var n=G(!1);return F(function(){n.value=H()}),n};var M=Symbol("rowContextKey"),ee=function(e){W(M,e)},te=function(){return V(M,{gutter:v(function(){}),wrap:v(function(){}),supportFlexGap:v(function(){})})};I("top","middle","bottom","stretch");I("start","end","center","space-around","space-between");var re=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},ne=B({compatConfig:{MODE:3},name:"ARow",props:re(),setup:function(e,a){var p=a.slots,i=T("row",e),f=i.prefixCls,O=i.direction,S,x=G({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=z();F(function(){S=P.subscribe(function(t){var r=e.gutter||0;(!Array.isArray(r)&&j(r)==="object"||Array.isArray(r)&&(j(r[0])==="object"||j(r[1])==="object"))&&(x.value=t)})}),k(function(){P.unsubscribe(S)});var h=v(function(){var t=[0,0],r=e.gutter,o=r===void 0?0:r,l=Array.isArray(o)?o:[o,0];return l.forEach(function(d,y){if(j(d)==="object")for(var u=0;u<R.length;u++){var g=R[u];if(x.value[g]&&d[g]!==void 0){t[y]=d[g];break}}else t[y]=d||0}),t});ee({gutter:h,supportFlexGap:w,wrap:v(function(){return e.wrap})});var N=v(function(){var t;return $(f.value,(t={},s(t,"".concat(f.value,"-no-wrap"),e.wrap===!1),s(t,"".concat(f.value,"-").concat(e.justify),e.justify),s(t,"".concat(f.value,"-").concat(e.align),e.align),s(t,"".concat(f.value,"-rtl"),O.value==="rtl"),t))}),A=v(function(){var t=h.value,r={},o=t[0]>0?"".concat(t[0]/-2,"px"):void 0,l=t[1]>0?"".concat(t[1]/-2,"px"):void 0;return o&&(r.marginLeft=o,r.marginRight=o),w.value?r.rowGap="".concat(t[1],"px"):l&&(r.marginTop=l,r.marginBottom=l),r});return function(){var t;return E("div",{class:N.value,style:A.value},[(t=p.default)===null||t===void 0?void 0:t.call(p)])}}});const fe=ne;function ae(n){return typeof n=="number"?"".concat(n," ").concat(n," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(n)?"0 0 ".concat(n):n}var oe=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const de=B({compatConfig:{MODE:3},name:"ACol",props:oe(),setup:function(e,a){var p=a.slots,i=te(),f=i.gutter,O=i.supportFlexGap,S=i.wrap,x=T("col",e),w=x.prefixCls,h=x.direction,N=v(function(){var t,r=e.span,o=e.order,l=e.offset,d=e.push,y=e.pull,u=w.value,g={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(m){var b,c={},C=e[m];typeof C=="number"?c.span=C:j(C)==="object"&&(c=C||{}),g=_(_({},g),{},(b={},s(b,"".concat(u,"-").concat(m,"-").concat(c.span),c.span!==void 0),s(b,"".concat(u,"-").concat(m,"-order-").concat(c.order),c.order||c.order===0),s(b,"".concat(u,"-").concat(m,"-offset-").concat(c.offset),c.offset||c.offset===0),s(b,"".concat(u,"-").concat(m,"-push-").concat(c.push),c.push||c.push===0),s(b,"".concat(u,"-").concat(m,"-pull-").concat(c.pull),c.pull||c.pull===0),s(b,"".concat(u,"-rtl"),h.value==="rtl"),b))}),$(u,(t={},s(t,"".concat(u,"-").concat(r),r!==void 0),s(t,"".concat(u,"-order-").concat(o),o),s(t,"".concat(u,"-offset-").concat(l),l),s(t,"".concat(u,"-push-").concat(d),d),s(t,"".concat(u,"-pull-").concat(y),y),t),g)}),A=v(function(){var t=e.flex,r=f.value,o={};if(r&&r[0]>0){var l="".concat(r[0]/2,"px");o.paddingLeft=l,o.paddingRight=l}if(r&&r[1]>0&&!O.value){var d="".concat(r[1]/2,"px");o.paddingTop=d,o.paddingBottom=d}return t&&(o.flex=ae(t),S.value===!1&&!o.minWidth&&(o.minWidth=0)),o});return function(){var t;return E("div",{class:N.value,style:A.value},[(t=p.default)===null||t===void 0?void 0:t.call(p)])}}});export{de as C,fe as R,se as b,ie as i,le as t};