(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[40],{643:function(e,t,n){"use strict";n(2);var a=n(332),r=n(50),i=n(331),c=n(334),o=n(205),s=n(25),l=n(1),d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #fff",boxShadow:24,p:4};Object(r.a)(a.a)((function(){return{display:"block",color:"#fff",marginTop:"20px",width:"86px",backgroundColor:"#e15260","&:hover":{backgroundColor:"#cc2333",color:"#fff"}}}));t.a=function(e){var t=e.open,n=e.onConfirmDialogClose,r=e.text,u=(e.onYesClick,Object(s.f)()),b=function(){n(),localStorage.removeItem("accessToken"),u("/session/signin")};return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{keepMounted:!0,open:t,onClose:function(){return b()},"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:Object(l.jsxs)(o.a,{sx:d,children:[Object(l.jsx)(c.a,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",sx:{color:"#333"},children:r}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"1rem"},children:Object(l.jsx)(o.a,{position:"relative",sx:{display:"block",marginTop:"20px"},children:Object(l.jsx)(a.a,{color:"primary",variant:"contained",onClick:function(){return b()},children:"Ok"})})})]})})})}},644:function(e,t,n){"use strict";n(2);var a=n(42),r=n(1);t.a=Object(a.a)(Object(r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},660:function(e,t,n){"use strict";var a=n(8),r=n(7),i=n(3),c=n(2),o=n(9),s=n(92),l=n(536),d=n(5),u=n(12),b=n(15),j=n(208),p=n(57),f=n(60);function v(e){return Object(p.a)("MuiAlert",e)}var h,m=Object(f.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),O=n(557),g=n(42),x=n(1),y=Object(g.a)(Object(x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),S=Object(g.a)(Object(x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=Object(g.a)(Object(x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),A=Object(g.a)(Object(x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),k=n(644),T=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],M=Object(d.a)(j.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(b.a)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?l.b:l.e,c="light"===t.palette.mode?l.e:l.b,o=n.color||n.severity;return Object(i.a)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&"standard"===n.variant&&Object(a.a)({color:r(t.palette[o].light,.6),backgroundColor:c(t.palette[o].light,.9)},"& .".concat(m.icon),{color:"dark"===t.palette.mode?t.palette[o].main:t.palette[o].light}),o&&"outlined"===n.variant&&Object(a.a)({color:r(t.palette[o].light,.6),border:"1px solid ".concat(t.palette[o].light)},"& .".concat(m.icon),{color:"dark"===t.palette.mode?t.palette[o].main:t.palette[o].light}),o&&"filled"===n.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[o].dark:t.palette[o].main})})),R=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),E=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),w=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),I={success:Object(x.jsx)(y,{fontSize:"inherit"}),warning:Object(x.jsx)(S,{fontSize:"inherit"}),error:Object(x.jsx)(C,{fontSize:"inherit"}),info:Object(x.jsx)(A,{fontSize:"inherit"})},_=c.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiAlert"}),a=n.action,c=n.children,l=n.className,d=n.closeText,j=void 0===d?"Close":d,p=n.color,f=n.icon,m=n.iconMapping,g=void 0===m?I:m,y=n.onClose,S=n.role,C=void 0===S?"alert":S,A=n.severity,_=void 0===A?"success":A,z=n.variant,D=void 0===z?"standard":z,L=Object(r.a)(n,T),N=Object(i.a)({},n,{color:p,severity:_,variant:D}),P=function(e){var t=e.variant,n=e.color,a=e.severity,r=e.classes,i={root:["root","".concat(t).concat(Object(b.a)(n||a)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(s.a)(i,v,r)}(N);return Object(x.jsxs)(M,Object(i.a)({role:C,elevation:0,ownerState:N,className:Object(o.a)(P.root,l),ref:t},L,{children:[!1!==f?Object(x.jsx)(R,{ownerState:N,className:P.icon,children:f||g[_]||I[_]}):null,Object(x.jsx)(E,{ownerState:N,className:P.message,children:c}),null!=a?Object(x.jsx)(w,{className:P.action,children:a}):null,null==a&&y?Object(x.jsx)(w,{ownerState:N,className:P.action,children:Object(x.jsx)(O.a,{size:"small","aria-label":j,title:j,color:"inherit",onClick:y,children:h||(h=Object(x.jsx)(k.a,{fontSize:"small"}))})}):null]}))}));t.a=_},675:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"h",(function(){return b}));var a=n(13),r=n(26),i=function(e,t){var n="/api/devices?pagination[page]=".concat(e,"&tab=").concat(t);return Object(r.b)("GET",n).then((function(e){return e})).then((function(e){return e}))},c=function(e){var t="/api/devices/"+e;return Object(r.b)("GET",t).then((function(e){return e})).then((function(e){return e}))},o=function(e){return Object(r.b)("POST","/api/devices",e).then((function(e){return e})).then((function(e){return e}))},s=function(e,t){var n="/api/devices/"+t;return Object(r.b)("PUT",n,e).then((function(e){return e})).then((function(e){return e}))},l=function(e){var t=e&&e.search||"",n=e&&e.type||null,i=e&&e.page||1,c=e&&e.activeTab||1,o=e&&e.centerName,s="/api/devices?search=".concat(t,"&tab=").concat(c,"&pagination[page]=").concat(i);if(n)for(var l=0,d=Object.entries(n);l<d.length;l++){var u=Object(a.a)(d[l],2),b=u[0],j=u[1];s+="&filter[".concat(b,"]=").concat(j)}return o&&(s+="&centerName=".concat(o)),Object(r.b)("GET",s).then((function(e){return e})).catch((function(e){return e}))},d=function(e,t){var n="/api/device-usages?pagination[page]=".concat(e);return t&&(n+="&deviceId=".concat(t)),Object(r.b)("GET",n).then((function(e){return e})).catch((function(e){return e}))},u=function(e){var t=(null===e||void 0===e?void 0:e.page)||1,n=(null===e||void 0===e?void 0:e.search)||"",a=(null===e||void 0===e?void 0:e.type)||"All",i=null===e||void 0===e?void 0:e.deviceId,c="/api/device-usages?pagination[page]=".concat(t);return n&&(c+="&search=".concat(n)),a&&"All"!==a&&(c+="&filter=".concat(a)),i&&(c+="&deviceId=".concat(i)),Object(r.b)("GET",c).then((function(e){return e})).catch((function(e){return e}))},b=function(e){var t="/api/passphrases/"+e;return Object(r.b)("PUT",t).then((function(e){return e})).catch((function(e){return e}))}},764:function(e,t,n){},950:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(8),i=n(6),c=n(13),o=n(558),s=n(207),l=n(636),d=n(330),u=n(633),b=n(660),j=n(560),p=n(332),f=n(50),v=n(25),h=n(112),m=n(51),O=n.n(m),g=n(675),x=(n(653),n(95)),y=(n(655),n(764),n(643)),S=n(1),C=Object(f.a)(h.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),A=Object(f.a)(h.SelectValidator)((function(){return{width:"100%",marginBottom:"16px",marginTop:"8px"}})),k=Object(f.a)(p.a)((function(){return{display:"block",color:"#fff",marginTop:"20px",width:"86px",backgroundColor:"#e15260","&:hover":{backgroundColor:"#cc2333",color:"#fff"}}})),T=Object(f.a)(o.a)((function(){return{position:"absolute",top:"6px",left:"25px"}})),M=[{name:"Available",value:"Available"},{name:"Repair",value:"Repair"}],R=[].concat(M,[{name:"Assigned",value:"Assigned"},{name:"Inventory",value:"Inventory"}]),E=function(e){var t=Object(v.f)(),n=Object(x.a)().user,o=Object(a.useState)({device_type:"",device_serial:"",mac_address:"",status:""}),f=Object(c.a)(o,2),m=f[0],E=f[1],w=Object(a.useState)(!1),I=Object(c.a)(w,2),_=I[0],z=I[1],D=Object(a.useState)(!1),L=Object(c.a)(D,2),N=L[0],P=L[1],V=Object(a.useState)({status:"",messages:[]}),U=Object(c.a)(V,2),W=U[0],H=U[1],Q=Object(a.useState)(!1),G=Object(c.a)(Q,2),q=G[0],B=G[1],Y=Object(a.useState)(""),F=Object(c.a)(Y,2),J=F[0],Z=F[1],K=Object(a.useRef)();function X(e){e.persist(),E(Object(i.a)(Object(i.a)({},m),{},Object(r.a)({},e.target.name,e.target.value)))}Object(a.useEffect)((function(){return h.ValidatorForm.addValidationRule("REQUIRED",(function(e){return 0!==e.length})),function(){h.ValidatorForm.removeValidationRule("REQUIRED")}}),[]);var $=m.device_type,ee=m.device_serial,te=m.mac_address,ne=m.status;return Object(S.jsxs)("div",{className:"device-card",children:[Object(S.jsxs)(h.ValidatorForm,{ref:K,onSubmit:function(e){z(!0);var t={data:{device_type:m.device_type,device_serial:m.device_serial,mac_address:m.mac_address,status:m.status,is_assigned:!1,publishedAt:O()().format().split("T")[0]+" "+O()().format().split("T")[1].slice(0,8)}};n&&n.role&&"admin"===n.role.type&&(t.data.owned_by="bmc"),Object(g.a)(t).then((function(e){var t;if("UnauthorizedError"===(null===e||void 0===e||null===(t=e.error)||void 0===t?void 0:t.name))B(!0),Z("Your session has expired. You will be logged out.");else if(e&&"success"===e.status)P(!0),H(Object(i.a)(Object(i.a)({},W),{},{status:"success",messages:[e.message]}));else if(e&&"fail"===e.status){var n=[];e.errors.forEach((function(e){n.push(e.message)})),P(!0),H(Object(i.a)(Object(i.a)({},W),{},{status:"error",messages:n}))}else z(!1),P(!0),H(Object(i.a)(Object(i.a)({},W),{},{status:"error",messages:["Something went wrong"]}))}))},onError:function(){return null},children:[Object(S.jsxs)(s.a,{container:!0,rowSpacing:2,columnSpacing:6,children:[Object(S.jsx)(s.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(S.jsx)(j.a,{fullWidth:!0,children:Object(S.jsxs)(A,{id:"demo-simple-select",value:$,label:"Select Device Type*",onChange:function(e){return E(Object(i.a)(Object(i.a)({},m),{},{device_type:e.target.value}))},name:"device_type",validators:["REQUIRED"],errorMessages:["This field is required"],children:[Object(S.jsx)(l.a,{value:"",children:"Select Device Type"}),Object(S.jsx)(l.a,{value:"iPad",children:"iPad"}),Object(S.jsx)(l.a,{value:"iPhone",children:"iPhone"}),Object(S.jsx)(l.a,{value:"Android Phone",children:"Android Phone"}),Object(S.jsx)(l.a,{value:"Android Tablet",children:"Android Tablet"})]})})}),Object(S.jsx)(s.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(S.jsx)(C,{margin:"dense",id:"device_serial",name:"device_serial",label:"Device Serial*",type:"text",value:ee,onChange:X,fullWidth:!0,validators:["REQUIRED"],errorMessages:["This field is required"]})})]}),Object(S.jsxs)(s.a,{container:!0,rowSpacing:2,columnSpacing:6,children:[Object(S.jsx)(s.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(S.jsx)(C,{margin:"dense",id:"mac_address",name:"mac_address",label:"Mac Address*",type:"text",value:te,onChange:X,fullWidth:!0,validators:["REQUIRED"],errorMessages:["This field is required"]})}),Object(S.jsx)(s.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(S.jsx)(j.a,{fullWidth:!0,children:Object(S.jsxs)(A,{id:"demo-simple-select",value:ne,label:"Select Status*",onChange:function(e){return E(Object(i.a)(Object(i.a)({},m),{},{status:e.target.value}))},name:"status",validators:["REQUIRED"],errorMessages:["This field is required"],children:[Object(S.jsx)(l.a,{value:"",children:"Select Status"}),n&&n.role&&"admin"===n.role.type&&M&&M.map((function(e,t){return Object(S.jsx)(l.a,{value:e.value,children:e.name},t)})),n&&n.role&&"center"===n.role.type&&R&&R.map((function(e,t){return Object(S.jsx)(l.a,{value:e.value,children:e.name},t)}))]})})})]}),Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[Object(S.jsxs)(d.a,{position:"relative",sx:{display:"block",marginTop:"20px"},children:[Object(S.jsx)(p.a,{disabled:_,color:"primary",variant:"contained",type:"submit",children:"Submit"}),_&&Object(S.jsx)(T,{size:24,className:"buttonProgress"})]}),Object(S.jsx)(k,{onClick:function(){return t(-1)},children:"Cancel"})]})]}),Object(S.jsx)(u.a,{open:N,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:function(){z(!1),P(!1),W&&"success"===W.status&&t("/devices")},children:Object(S.jsx)("div",{children:W&&W.messages.map((function(e){return Object(S.jsx)(b.a,{onClose:function(){z(!1),P(!1),W&&"success"===W.status&&t("/devices")},variant:"filled",severity:W.status,sx:{width:"100%",marginBottom:"10px"},children:e})}))})}),Object(S.jsx)(y.a,{open:q,text:J,onConfirmDialogClose:function(){Z(""),B(!1)},onYesClick:function(){Z(""),B(!1)}})]})};t.default=function(){return Object(S.jsxs)("div",{style:{margin:"0px",padding:"20px"},children:[Object(S.jsx)("h1",{style:{marginTop:"0px",marginBottom:"10px",padding:"0px"},children:"Add Device"}),Object(S.jsx)(E,{})]})}}}]);
//# sourceMappingURL=40.210a52c0.chunk.js.map