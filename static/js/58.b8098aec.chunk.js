(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[58],{679:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var a=n(51),i=n.n(a);function r(e){return e.map((function(e){return e.trauma_code})).join(", ")}var s=function(e,t,n,a){var r=e||null;return a&&"upcoming"===a?{id:e.id,status:"scheduled"===r.status&&i()(i()(r.scheduled_at).format("x"),"x").isBefore(i()().startOf("second"))?"missed":r.status,scheduledAt:"".concat(i()(r.scheduled_at).format("DD MMMM, YYYY hh:mm A")),sessionId:r.session_id,clientId:t,center:n,disabled:e.disabled}:{id:e.id,status:"scheduled"===r.status||"pending"===r.status?"missed":r.status,scheduledAt:"".concat(i()(r.scheduled_at).format("DD MMMM, YYYY hh:mm A")),sessionId:r.session_id,clientId:t,center:n,disabled:e.disabled}};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],a={clientId:"Client ID",name:"Record Name",center:"Center",gender:"Birth Gender",traumas:"Trauma Codes",ethnicity:"Ethnicity",scheduledAt:"Scheduled",view_notes:"Notes"};return e.forEach((function(e){var a,i,c,u,l,o,d,v,b,f,m,h,j,p={clientId:null===e||void 0===e||null===(a=e.client)||void 0===a?void 0:a.client_id,name:null===e||void 0===e||null===(i=e.client)||void 0===i?void 0:i.name,center:null===e||void 0===e||null===(c=e.center)||void 0===c?void 0:c.name,gender:null===e||void 0===e||null===(u=e.client)||void 0===u?void 0:u.gender_bio,traumas:null!==e&&void 0!==e&&null!==(l=e.client)&&void 0!==l&&l.traumas?r(null===e||void 0===e||null===(o=e.client)||void 0===o?void 0:o.traumas):"",ethnicity:null!==e&&void 0!==e&&null!==(d=e.client)&&void 0!==d&&d.ethnicity?null===e||void 0===e||null===(v=e.client)||void 0===v?void 0:v.ethnicity:"",scheduledAt:s(e,null===e||void 0===e||null===(b=e.client)||void 0===b?void 0:b.client_id,null===e||void 0===e||null===(f=e.center)||void 0===f?void 0:f.name,t),view_notes:{clientId:null===e||void 0===e||null===(m=e.client)||void 0===m?void 0:m.client_id,clientName:null===e||void 0===e||null===(h=e.client)||void 0===h?void 0:h.name,sessionId:null===e||void 0===e?void 0:e.id,center_id:null===e||void 0===e||null===(j=e.center)||void 0===j?void 0:j.id,notes:null===e||void 0===e?void 0:e.notes}};n.push(p)})),n.meta=a,n}var u={clininicain_id:"Provider ID",profesional_name:"Professional Name",first_name:"First Name",last_name:"Last Name",traumas:"Trauma Codes",status:"Status",clients:"Clients",sessions:"Sessions",disable_provider:"Disable Provider"};function l(e){var t=[];return Array.isArray(e)?(e.forEach((function(e){t.push(o(e))})),t.meta=u):t.push(o(e)),t}function o(e){var t,n,a,i,r,s,c,u,l,o,d,v,b,f;return{clinicId:(null===e||void 0===e?void 0:e.id)||"-",clininicain_id:e&&(null===(t=e.attributes)||void 0===t||null===(n=t.user)||void 0===n||null===(a=n.data)||void 0===a||null===(i=a.attributes)||void 0===i?void 0:i.username)||"-",profesional_name:e&&e.attributes&&e.attributes.name||"-",first_name:e&&e.attributes&&e.attributes.first_name||"-",last_name:e&&e.attributes&&e.attributes.last_name||"-",traumas:e&&e.attributes&&e.attributes.traumas&&(f=null===(r=e.attributes.traumas)||void 0===r?void 0:r.data,f.map((function(e){return e.attributes.trauma_code})).join(", "))||"-",status:(null===e||void 0===e||null===(s=e.attributes)||void 0===s?void 0:s.status)||"-",clients:e&&e.attributes&&e.attributes.clients&&e.attributes.clients.data&&(null===(c=e.attributes.clients.data)||void 0===c?void 0:c.length)||"-",sessions:e&&e.attributes&&e.attributes.sessions&&e.attributes.sessions.data&&(null===(u=e.attributes.sessions)||void 0===u||null===(l=u.data)||void 0===l?void 0:l.length)||"-",disable_provider:{provider_id:null===e||void 0===e?void 0:e.id,disabled:(null===e||void 0===e||null===(o=e.attributes)||void 0===o||null===(d=o.user)||void 0===d||null===(v=d.data)||void 0===v||null===(b=v.attributes)||void 0===b?void 0:b.blocked)||!1}}}function d(e){var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(v(e))})):t.push(v(e)),t}function v(e){var t,n;return{title:(null===e||void 0===e||null===(t=e.client)||void 0===t?void 0:t.name)+"-"+(null===e||void 0===e||null===(n=e.client)||void 0===n?void 0:n.client_id)||"Anonymous",start:i()(null===e||void 0===e?void 0:e.scheduled_at).toDate(),end:i()(null===e||void 0===e?void 0:e.scheduled_at).add(50,"minutes").toDate(),session:e}}},729:function(e,t,n){},903:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(45),r=n(13),s=n(33),c=n.n(s),u=n(207),l=n(332),o=n(309),d=n(633),v=n(660),b=n(94),f=n(2),m=n.n(f),h=(n(729),n(645)),j=n(646),p=n(672),O=n(679),x=n(135),g=n(25),k=n(213),_=n.n(k),w=n(215),y=n(35),D=n(796),S=n(795),C=n(95),A=n(1);t.default=function(){var e=Object(C.a)().user,t=Object(g.f)(),n=Object(w.b)(),s=Object(f.useState)([]),k=Object(r.a)(s,2),P=k[0],N=k[1],I=Object(f.useState)(!1),E=Object(r.a)(I,2),Y=E[0],M=E[1],F=m.a.useState({}),z=Object(r.a)(F,2),B=z[0],J=z[1],T=Object(f.useState)(""),G=Object(r.a)(T,2),H=G[0],L=G[1],R=m.a.useState(!1),U=Object(r.a)(R,2),q=U[0],K=U[1],Q=Object(f.useState)(null),V=Object(r.a)(Q,2),W=V[0],X=V[1],Z=Object(f.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(f.useState)(null),ae=Object(r.a)(ne,2),ie=ae[0],re=ae[1],se=Object(f.useState)(!1),ce=Object(r.a)(se,2),ue=ce[0],le=ce[1],oe=Object(f.useState)({status:"success",message:""}),de=Object(r.a)(oe,2),ve=de[0],be=de[1],fe=Object(f.useState)("Disable"),me=Object(r.a)(fe,2),he=me[0],je=me[1],pe=function(e){M(!0),Object(h.b)(e).then((function(e){M(!1);var t=Object(O.a)(e.data);N(t),J(Object(p.c)(e.meta))})).catch((function(e){console.log("error",e)}))};Object(f.useEffect)((function(){n(Object(y.l)()),pe(1)}),[n]);var Oe=function(e,t){M(!0),Object(h.m)(e,t).then((function(e){M(!1);var t=Object(O.a)(e.data);N(t),J(Object(p.c)(e.meta))})).catch((function(e){console.log("error",e)}))},xe=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,a,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,e.prev=1,!(n=null===ie||void 0===ie?void 0:ie.clients).length){e.next=16;break}a=0;case 5:if(!(a<n.length)){e.next=13;break}return i=n[a],r={data:{counsellor:null}},e.next=10,Object(S.f)(i.id,r);case 10:a++,e.next=5;break;case 13:t=!0,e.next=17;break;case 16:t=!0;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),t=!1;case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,n=null===ie||void 0===ie?void 0:ie.sessions,e.prev=2,e.next=5,Object(S.b)(n);case 5:t=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t=!1;case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var t=Object(i.a)(c.a.mark((function t(){var n,a,i,r,s,u,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,1!==(a=null===ie||void 0===ie?void 0:ie.centers).length){t.next=11;break}if(a[0].id!==(null===e||void 0===e||null===(i=e.center)||void 0===i?void 0:i.id)){t.next=9;break}return s={user:{data:{id:null===ie||void 0===ie||null===(r=ie.user)||void 0===r?void 0:r.id,blocked:!0}}},t.next=8,Object(S.c)(null===ie||void 0===ie?void 0:ie.id,s);case 8:n=!0;case 9:t.next=16;break;case 11:return u=a.map((function(t){var n;if(t.id!==(null===e||void 0===e||null===(n=e.center)||void 0===n?void 0:n.id))return t.id})),l={counsellor:{data:{id:null===ie||void 0===ie?void 0:ie.id,centers:u}}},t.next=15,Object(S.c)(null===ie||void 0===ie?void 0:ie.id,l);case 15:n=!0;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(1),n=!1;case 21:return t.abrupt("return",n);case 22:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(){return t.apply(this,arguments)}}(),_e=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je("Disable"),X(t),e.next=4,Object(h.d)(t);case 4:n=e.sent,re(n),te(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te(!1),!W){e.next=29;break}return M(!0),e.next=5,xe();case 5:if(!(t=e.sent)){e.next=26;break}return e.next=9,ge();case 9:if(!(t=e.sent)){e.next=21;break}return e.next=13,ke();case 13:t=e.sent,M(!1),le(!0),be(Object(a.a)(Object(a.a)({},ve),{},{status:"success",message:"Provider Disabled Successfully"})),console.log("res",t),pe(1),e.next=24;break;case 21:M(!1),le(!0),be(Object(a.a)(Object(a.a)({},ve),{},{status:"error",message:"Cancelling Appointments Failed"}));case 24:e.next=29;break;case 26:M(!1),le(!0),be(Object(a.a)(Object(a.a)({},ve),{},{status:"error",message:"Unlinking Clients from Provider Failed"}));case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je("Enable"),X(t),e.next=4,Object(h.d)(t);case 4:n=e.sent,re(n),te(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var t=Object(i.a)(c.a.mark((function t(){var n,a,i,r,s,u,l,o,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,1!==(a=null===ie||void 0===ie?void 0:ie.centers).length){t.next=11;break}if(a[0].id!==(null===e||void 0===e||null===(i=e.center)||void 0===i?void 0:i.id)){t.next=9;break}return s={user:{data:{id:null===ie||void 0===ie||null===(r=ie.user)||void 0===r?void 0:r.id,blocked:!1}}},t.next=8,Object(S.c)(null===ie||void 0===ie?void 0:ie.id,s);case 8:n=!0;case 9:t.next=17;break;case 11:return(l=a.map((function(e){return e.id}))).includes(null===e||void 0===e||null===(u=e.center)||void 0===u?void 0:u.id)||l.push(null===e||void 0===e||null===(o=e.center)||void 0===o?void 0:o.id),d={counsellor:{data:{id:null===ie||void 0===ie?void 0:ie.id,centers:l}}},t.next=16,Object(S.c)(null===ie||void 0===ie?void 0:ie.id,d);case 16:n=!0;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),n=!1;case 22:return t.abrupt("return",n);case 23:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(){return t.apply(this,arguments)}}(),Se=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te(!1),!W){e.next=7;break}return M(!0),e.next=5,De();case 5:(t=e.sent)?(M(!1),le(!0),be(Object(a.a)(Object(a.a)({},ve),{},{status:"success",message:"Provider Enabled Successfully"})),console.log("res",t),pe(1)):(M(!1),le(!0),be(Object(a.a)(Object(a.a)({},ve),{},{status:"error",message:"Enabling Provider Failed"})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(u.a,{container:!0,className:"client-container",children:[Object(A.jsx)(u.a,{className:"client-breadcrumb",children:Object(A.jsx)(b.b,{routeSegments:[{name:"All Providers"}]})}),Object(A.jsx)(l.a,{variant:"contained",className:"add-button",size:"small",onClick:function(){return t("/clinicians/add")},children:"Add Provider"}),Object(A.jsx)(u.a,{className:"user-box",children:Object(A.jsx)(o.a,{label:"Search Provider",variant:"outlined",className:"user-search",onChange:function(e){var t=e.target.value;L(t),t&&t.length>2?(K(!0),Oe(t,1)):""===t&&(pe(1),K(!1))},placeholder:"Search Providers",type:"text",value:H,InputProps:{startAdornment:Object(A.jsx)(_.a,{})}})}),Y&&Object(A.jsx)(x.a,{}),!Y&&(null===P||void 0===P?void 0:P.meta)&&Object(A.jsx)(j.a,{onClick:function(e){t("/clinicians/details/".concat(e))},page:1,pageDetails:B,handlePageChange:function(e,t){q?Oe(H,Number(t)+1):pe(Number(t)+1)},rows:P,view:"clinician",handleDisable:function(e){return _e(e)},handleEnable:function(e){return ye(e)}})]}),Object(A.jsx)(D.a,{open:ee,onConfirmDialogClose:function(){X(null),re(null),te(!1)},text:"Do you want to ".concat("Disable"===he?"disable":"enable"," Provider?"),onYesClick:function(){return"Disable"===he?we():Se()}}),Object(A.jsx)(d.a,{open:ue,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:function(){le(!1)},children:Object(A.jsx)(v.a,{onClose:function(){le(!1)},variant:"filled",severity:ve.status,sx:{width:"100%"},children:ve.message})})]})}}}]);
//# sourceMappingURL=58.b8098aec.chunk.js.map