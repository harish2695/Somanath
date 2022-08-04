(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[74],{937:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var i=a(8),r=a(2),n=a(50),c=a(205),o=a(94),l=a(332),s=a(557),d=a(333),b=a(7),j=a(3),u=a(9),h=a(92),p=a(630),m=a(15),x=a(12),O=a(57),v=a(60);function f(e){return Object(O.a)("MuiFab",e)}var g=Object(v.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),y=a(5),w=a(1),N=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],z=Object(y.a)(p.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(m.a)(a.size))],"inherit"===a.color&&t.colorInherit,t[Object(m.a)(a.size)],t[a.color]]}})((function(e){var t,a,r,n=e.theme,c=e.ownerState;return Object(j.a)({},n.typography.button,(t={minHeight:36,transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(n.vars||n).zIndex.fab,boxShadow:(n.vars||n).shadows[6],"&:active":{boxShadow:(n.vars||n).shadows[12]},color:n.vars?n.vars.palette.text.primary:null==(a=(r=n.palette).getContrastText)?void 0:a.call(r,n.palette.grey[300]),backgroundColor:(n.vars||n).palette.grey[300],"&:hover":{backgroundColor:(n.vars||n).palette.grey.A100,"@media (hover: none)":{backgroundColor:(n.vars||n).palette.grey[300]},textDecoration:"none"}},Object(i.a)(t,"&.".concat(g.focusVisible),{boxShadow:(n.vars||n).shadows[6]}),Object(i.a)(t,"&.".concat(g.disabled),{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}),t),"small"===c.size&&{width:40,height:40},"medium"===c.size&&{width:48,height:48},"extended"===c.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===c.variant&&"small"===c.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===c.variant&&"medium"===c.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===c.color&&{color:"inherit"})}),(function(e){var t=e.theme,a=e.ownerState;return Object(j.a)({},"inherit"!==a.color&&"default"!==a.color&&null!=(t.vars||t).palette[a.color]&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}})})),k=r.forwardRef((function(e,t){var a=Object(x.a)({props:e,name:"MuiFab"}),i=a.children,r=a.className,n=a.color,c=void 0===n?"default":n,o=a.component,l=void 0===o?"button":o,s=a.disabled,d=void 0!==s&&s,p=a.disableFocusRipple,O=void 0!==p&&p,v=a.focusVisibleClassName,g=a.size,y=void 0===g?"large":g,k=a.variant,S=void 0===k?"circular":k,C=Object(b.a)(a,N),D=Object(j.a)({},a,{color:c,component:l,disabled:d,disableFocusRipple:O,size:y,variant:S}),F=function(e){var t=e.color,a=e.variant,i=e.classes,r=e.size,n={root:["root",a,"size".concat(Object(m.a)(r)),"inherit"===t?"colorInherit":t]};return Object(h.a)(n,f,i)}(D);return Object(w.jsx)(z,Object(j.a)({className:Object(u.a)(F.root,r),component:l,disabled:d,focusRipple:!O,focusVisibleClassName:Object(u.a)(F.focusVisible,v),ownerState:D,ref:t},C,{children:i}))})),S=Object(n.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(i.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(i.a)(t,"& .breadcrumb",Object(i.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),Object(i.a)(t,"& .button",{margin:a.spacing(1)}),Object(i.a)(t,"& .input",{display:"none"}),t})),C=Object(n.a)(l.a)((function(e){return{margin:e.theme.spacing(1)}}));function D(){return Object(w.jsxs)(S,{children:[Object(w.jsx)("div",{className:"breadcrumb",children:Object(w.jsx)(o.b,{routeSegments:[{name:"Material",path:"/material"},{name:"Buttons"}]})}),Object(w.jsxs)(o.n,{title:"contained buttons",children:[Object(w.jsx)(C,{variant:"contained",color:"inherit",children:"Default"}),Object(w.jsx)(C,{variant:"contained",color:"primary",children:"Primary"}),Object(w.jsx)(C,{variant:"contained",color:"secondary",children:"Secondary"}),Object(w.jsx)(C,{variant:"contained",color:"secondary",disabled:!0,children:"Disabled"}),Object(w.jsx)(C,{variant:"contained",href:"#contained-buttons",children:"Link"}),Object(w.jsx)("input",{accept:"image/*",className:"input",id:"contained-button-file",multiple:!0,type:"file"}),Object(w.jsx)("label",{htmlFor:"contained-button-file",children:Object(w.jsx)(C,{variant:"contained",component:"span",children:"Upload"})})]}),Object(w.jsx)(c.a,{py:"12px"}),Object(w.jsxs)(o.n,{title:"text buttons",children:[Object(w.jsx)(C,{children:"Default"}),Object(w.jsx)(C,{color:"primary",children:"Primary"}),Object(w.jsx)(C,{color:"secondary",children:"Secondary"}),Object(w.jsx)(C,{disabled:!0,children:"Disabled"}),Object(w.jsx)(C,{href:"#text-buttons",children:"Link"}),Object(w.jsx)("input",{accept:"image/*",className:"input",id:"text-button-file",multiple:!0,type:"file"}),Object(w.jsx)("label",{htmlFor:"text-button-file",children:Object(w.jsx)(C,{component:"span",children:"Upload"})})]}),Object(w.jsx)(c.a,{py:"12px"}),Object(w.jsxs)(o.n,{title:"outlined buttons",children:[Object(w.jsx)(C,{variant:"outlined",children:"Default"}),Object(w.jsx)(C,{variant:"outlined",color:"primary",children:"Primary"}),Object(w.jsx)(C,{variant:"outlined",color:"secondary",children:"Secondary"}),Object(w.jsx)(C,{variant:"outlined",disabled:!0,children:"Disabled"}),Object(w.jsx)(C,{variant:"outlined",href:"#outlined-buttons",children:"Link"}),Object(w.jsx)("input",{accept:"image/*",className:"input",id:"outlined-button-file",multiple:!0,type:"file"}),Object(w.jsx)("label",{htmlFor:"outlined-button-file",children:Object(w.jsx)(C,{variant:"outlined",component:"span",children:"Upload"})}),Object(w.jsx)(C,{variant:"outlined",color:"inherit",children:"Inherit"})]}),Object(w.jsx)(c.a,{py:"12px"}),Object(w.jsxs)(o.n,{title:"icon buttons",children:[Object(w.jsx)(s.a,{className:"button","aria-label":"Delete",children:Object(w.jsx)(d.a,{children:"delete"})}),Object(w.jsx)(s.a,{className:"button","aria-label":"Delete",disabled:!0,color:"primary",children:Object(w.jsx)(d.a,{children:"delete"})}),Object(w.jsx)(s.a,{color:"secondary",className:"button","aria-label":"Add an alarm",children:Object(w.jsx)(d.a,{children:"alarm"})}),Object(w.jsx)(s.a,{color:"primary",className:"button","aria-label":"Add to shopping cart",children:Object(w.jsx)(d.a,{children:"add_shopping_cart"})}),Object(w.jsx)("input",{accept:"image/*",className:"input",id:"icon-button-file",type:"file"}),Object(w.jsx)("label",{htmlFor:"icon-button-file",children:Object(w.jsx)(s.a,{color:"primary",className:"button","aria-label":"Upload picture",component:"span",children:Object(w.jsx)(d.a,{children:"photo_camera"})})})]}),Object(w.jsx)(c.a,{py:"12px"}),Object(w.jsxs)(o.n,{title:"different size buttons",children:[Object(w.jsx)(k,{size:"small",color:"secondary","aria-label":"Add",className:"button",children:Object(w.jsx)(d.a,{children:"add"})}),Object(w.jsx)(k,{size:"medium",color:"secondary","aria-label":"Add",className:"button",children:Object(w.jsx)(d.a,{children:"add"})}),Object(w.jsx)(k,{color:"secondary","aria-label":"Add",className:"button",children:Object(w.jsx)(d.a,{children:"add"})})]}),Object(w.jsx)(c.a,{py:"12px"}),Object(w.jsxs)(o.n,{title:"outlined buttons",children:[Object(w.jsx)(k,{color:"primary","aria-label":"Add",className:"button",children:Object(w.jsx)(d.a,{children:"add"})}),Object(w.jsx)(k,{color:"secondary","aria-label":"Edit",className:"button",children:Object(w.jsx)(d.a,{children:"edit_icon"})}),Object(w.jsxs)(k,{variant:"extended","aria-label":"Delete",className:"button",children:[Object(w.jsx)(d.a,{sx:{mr:4},children:"navigation"}),"Extended"]}),Object(w.jsx)(k,{disabled:!0,"aria-label":"Delete",className:"button",children:Object(w.jsx)(d.a,{children:"delete"})})]})]})}}}]);
//# sourceMappingURL=74.5000e30a.chunk.js.map