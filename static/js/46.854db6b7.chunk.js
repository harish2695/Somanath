(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[46],{643:function(e,t,a){"use strict";a(2);var o=a(332),r=a(50),n=a(331),s=a(334),i=a(205),c=a(25),l=a(1),d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #fff",boxShadow:24,p:4};Object(r.a)(o.a)((function(){return{display:"block",color:"#fff",marginTop:"20px",width:"86px",backgroundColor:"#e15260","&:hover":{backgroundColor:"#cc2333",color:"#fff"}}}));t.a=function(e){var t=e.open,a=e.onConfirmDialogClose,r=e.text,u=(e.onYesClick,Object(c.f)()),j=function(){a(),localStorage.removeItem("accessToken"),u("/session/signin")};return Object(l.jsx)("div",{children:Object(l.jsx)(n.a,{keepMounted:!0,open:t,onClose:function(){return j()},"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:Object(l.jsxs)(i.a,{sx:d,children:[Object(l.jsx)(s.a,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",sx:{color:"#333"},children:r}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"1rem"},children:Object(l.jsx)(i.a,{position:"relative",sx:{display:"block",marginTop:"20px"},children:Object(l.jsx)(o.a,{color:"primary",variant:"contained",onClick:function(){return j()},children:"Ok"})})})]})})})}},644:function(e,t,a){"use strict";a(2);var o=a(42),r=a(1);t.a=Object(o.a)(Object(r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},660:function(e,t,a){"use strict";var o=a(8),r=a(7),n=a(3),s=a(2),i=a(9),c=a(92),l=a(536),d=a(5),u=a(12),j=a(15),b=a(208),m=a(57),f=a(60);function p(e){return Object(m.a)("MuiAlert",e)}var h,O=Object(f.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),g=a(557),v=a(42),x=a(1),w=Object(v.a)(Object(x.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=Object(v.a)(Object(x.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=Object(v.a)(Object(x.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(v.a)(Object(x.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),M=a(644),k=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],P=Object(d.a)(b.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(j.a)(a.color||a.severity))]]}})((function(e){var t=e.theme,a=e.ownerState,r="light"===t.palette.mode?l.b:l.e,s="light"===t.palette.mode?l.e:l.b,i=a.color||a.severity;return Object(n.a)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===a.variant&&Object(o.a)({color:r(t.palette[i].light,.6),backgroundColor:s(t.palette[i].light,.9)},"& .".concat(O.icon),{color:"dark"===t.palette.mode?t.palette[i].main:t.palette[i].light}),i&&"outlined"===a.variant&&Object(o.a)({color:r(t.palette[i].light,.6),border:"1px solid ".concat(t.palette[i].light)},"& .".concat(O.icon),{color:"dark"===t.palette.mode?t.palette[i].main:t.palette[i].light}),i&&"filled"===a.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[i].dark:t.palette[i].main})})),z=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),A=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),N=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),V={success:Object(x.jsx)(w,{fontSize:"inherit"}),warning:Object(x.jsx)(C,{fontSize:"inherit"}),error:Object(x.jsx)(y,{fontSize:"inherit"}),info:Object(x.jsx)(S,{fontSize:"inherit"})},L=s.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiAlert"}),o=a.action,s=a.children,l=a.className,d=a.closeText,b=void 0===d?"Close":d,m=a.color,f=a.icon,O=a.iconMapping,v=void 0===O?V:O,w=a.onClose,C=a.role,y=void 0===C?"alert":C,S=a.severity,L=void 0===S?"success":S,R=a.variant,T=void 0===R?"standard":R,I=Object(r.a)(a,k),E=Object(n.a)({},a,{color:m,severity:L,variant:T}),W=function(e){var t=e.variant,a=e.color,o=e.severity,r=e.classes,n={root:["root","".concat(t).concat(Object(j.a)(a||o)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(c.a)(n,p,r)}(E);return Object(x.jsxs)(P,Object(n.a)({role:y,elevation:0,ownerState:E,className:Object(i.a)(W.root,l),ref:t},I,{children:[!1!==f?Object(x.jsx)(z,{ownerState:E,className:W.icon,children:f||v[L]||V[L]}):null,Object(x.jsx)(A,{ownerState:E,className:W.message,children:s}),null!=o?Object(x.jsx)(N,{className:W.action,children:o}):null,null==o&&w?Object(x.jsx)(N,{ownerState:E,className:W.action,children:Object(x.jsx)(g.a,{size:"small","aria-label":b,title:b,color:"inherit",onClick:w,children:h||(h=Object(x.jsx)(M.a,{fontSize:"small"}))})}):null]}))}));t.a=L},726:function(e,t,a){},893:function(e,t,a){"use strict";a.r(t);var o=a(6),r=a(13),n=a(2),s=a(332),i=a(558),c=a(207),l=a(330),d=a(633),u=a(660),j=a(95),b=a(50),m=a(25),f=a(212),p=a(112),h=(a(653),a(643)),O=(a(655),a(726),a(1)),g=Object(b.a)(p.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),v=(Object(b.a)(p.SelectValidator)((function(){return{width:"100%",marginBottom:"16px",marginTop:"8px"}})),Object(b.a)(s.a)((function(){return{display:"block",color:"#fff",marginTop:"20px",width:"86px",backgroundColor:"#e15260","&:hover":{backgroundColor:"#cc2333",color:"#fff"}}}))),x=Object(b.a)(i.a)((function(){return{position:"absolute",top:"6px",left:"25px"}}));t.default=function(){var e=Object(m.f)(),t=(Object(j.a)().user,Object(n.useState)(!1)),a=Object(r.a)(t,2),i=a[0],b=a[1],w=Object(n.useState)({oldPassword:"",newPassword:"",confirmPassword:""}),C=Object(r.a)(w,2),y=C[0],S=C[1],M=Object(n.useState)(!1),k=Object(r.a)(M,2),P=k[0],z=k[1],A=Object(n.useState)({status:"success",message:""}),N=Object(r.a)(A,2),V=N[0],L=N[1],R=Object(n.useState)(!1),T=Object(r.a)(R,2),I=T[0],E=T[1],W=Object(n.useState)(""),q=Object(r.a)(W,2),H=q[0],F=q[1];Object(n.useEffect)((function(){return p.ValidatorForm.addValidationRule("valid_length",(function(e){return!(e&&e.length<6)})),p.ValidatorForm.addValidationRule("isMatch",(function(e){return!e||e===y.newPassword})),function(){p.ValidatorForm.removeValidationRule("valid_length"),p.ValidatorForm.removeValidationRule("isMatch")}}),[y]);var D=function(e){var t=e.target,a=t.name,r=t.value,n=Object(o.a)({},y);n[a]=r,S(n)},Y=y.oldPassword,_=y.newPassword,B=y.confirmPassword;return Object(O.jsxs)("div",{className:"EditProfile-container",children:[Object(O.jsx)("div",{className:"Profile-header",children:Object(O.jsx)("h1",{className:"Profile-heading",children:"Change Password"})}),Object(O.jsx)("div",{className:"Profile-card",children:Object(O.jsxs)(p.ValidatorForm,{onSubmit:function(){b(!0);var t={oldPassword:y.oldPassword,newPassword:y.newPassword};Object(f.a)(t).then((function(t){var a;"UnauthorizedError"===(null===t||void 0===t||null===(a=t.error)||void 0===a?void 0:a.name)&&(E(!0),F("Your session has expired. You will be logged out.")),t&&"success"===t.status?(b(!1),z(!0),L(Object(o.a)(Object(o.a)({},V),{},{status:t&&"success"===t.status?"success":"error",message:null===t||void 0===t?void 0:t.message})),e(-1)):t&&"fail"===t.status?(b(!1),z(!0),L(Object(o.a)(Object(o.a)({},V),{},{status:t&&"success"===t.status?"success":"error",message:null===t||void 0===t?void 0:t.message}))):(b(!1),z(!0),L(Object(o.a)(Object(o.a)({},V),{},{status:"error",message:"Something went wrong"})))})).catch((function(e){b(!1),z(!0),L(Object(o.a)(Object(o.a)({},V),{},{status:"error",message:"Something went wrong"}))}))},onError:function(){return null},children:[Object(O.jsxs)(c.a,{container:!0,rowSpacing:2,columnSpacing:6,children:[Object(O.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(O.jsx)(g,{margin:"dense",id:"oldPassword",name:"oldPassword",label:"Old Password*",type:"password",value:Y,onChange:D,fullWidth:!0,validators:["required"],errorMessages:["This field is required"]})}),Object(O.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(O.jsx)(g,{margin:"dense",id:"newPassword",name:"newPassword",label:"New Password*",type:"password",value:_,onChange:D,fullWidth:!0,validators:["required","valid_length"],errorMessages:["This field is required","Password must be atleast 6 characters"]})}),Object(O.jsx)(c.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(O.jsx)(g,{margin:"dense",id:"confirmPassword",name:"confirmPassword",label:"Confirm Password*",type:"password",value:B,onChange:D,fullWidth:!0,validators:["required","isMatch"],errorMessages:["This field is required","Password Do Not Match!"]})})]}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[Object(O.jsxs)(l.a,{position:"relative",sx:{display:"block",marginTop:"20px"},children:[Object(O.jsx)(s.a,{disabled:i,color:"primary",variant:"contained",type:"submit",children:"Save"}),i&&Object(O.jsx)(x,{size:24,className:"buttonProgress"})]}),Object(O.jsx)(v,{onClick:function(){return e(-1)},children:"Cancel"})]})]})}),Object(O.jsx)(d.a,{open:P,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:function(){z(!1),"success"===V.status&&e(-1)},children:Object(O.jsx)(u.a,{onClose:function(){z(!1),"success"===V.status&&e(-1)},variant:"filled",severity:V.status,sx:{width:"100%"},children:V.message})}),Object(O.jsx)(h.a,{open:I,text:H,onConfirmDialogClose:function(){F(""),E(!1)},onYesClick:function(){F(""),E(!1)}})]})}}}]);
//# sourceMappingURL=46.854db6b7.chunk.js.map