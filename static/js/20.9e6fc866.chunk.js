(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[20],{571:function(e,t,n){"use strict";var a=n(209);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(210)),r=n(1),o=(0,i.default)((0,r.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V7h14v12zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Preview");t.default=o},572:function(e,t,n){"use strict";var a=n(209);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(210)),r=n(1),o=(0,i.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},573:function(e,t,n){"use strict";var a=n(209);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(210)),r=n(1),o=(0,i.default)((0,r.jsx)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"}),"Videocam");t.default=o},643:function(e,t,n){"use strict";n(2);var a=n(332),i=n(50),r=n(331),o=n(334),c=n(205),l=n(25),s=n(1),d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #fff",boxShadow:24,p:4};Object(i.a)(a.a)((function(){return{display:"block",color:"#fff",marginTop:"20px",width:"86px",backgroundColor:"#e15260","&:hover":{backgroundColor:"#cc2333",color:"#fff"}}}));t.a=function(e){var t=e.open,n=e.onConfirmDialogClose,i=e.text,u=(e.onYesClick,Object(l.f)()),b=function(){n(),localStorage.removeItem("accessToken"),u("/session/signin")};return Object(s.jsx)("div",{children:Object(s.jsx)(r.a,{keepMounted:!0,open:t,onClose:function(){return b()},"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:Object(s.jsxs)(c.a,{sx:d,children:[Object(s.jsx)(o.a,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",sx:{color:"#333"},children:i}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"1rem"},children:Object(s.jsx)(c.a,{position:"relative",sx:{display:"block",marginTop:"20px"},children:Object(s.jsx)(a.a,{color:"primary",variant:"contained",onClick:function(){return b()},children:"Ok"})})})]})})})}},645:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"n",(function(){return d})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"i",(function(){return h})),n.d(t,"f",(function(){return p})),n.d(t,"k",(function(){return f}));var a=n(26),i=function(e,t){var n="/api/clients?pagination[page]=".concat(e,"&counsellor=").concat(t);return Object(a.b)("GET",n).then((function(e){return e})).then((function(e){return e}))},r=function(e,t){var n="/api/centers?pagination[page]=".concat(e,"&counsellor=").concat(t);return Object(a.b)("GET",n).then((function(e){return e})).then((function(e){return e}))},o=function(e){var t="/api/counsellors?pagination[page]=".concat(e);return Object(a.b)("GET",t).then((function(e){return e})).catch((function(e){return e}))},c=function(e,t){var n="/api/sessions?pagination[page]=".concat(e,"&counsellor=").concat(t);return Object(a.b)("GET",n).then((function(e){return e})).then((function(e){return e}))},l=function(e,t,n,i){console.log(i);var r="/api/sessions?filter=".concat(e,"&counsellor=").concat(n,"&filterType=").concat(i);return console.log(e),Object(a.b)("GET",r).then((function(e){return e})).catch((function(e){return e}))},s=function(e,t){var n="/api/sessions?find=".concat(e);return Object(a.b)("GET",n).then((function(e){return e})).catch((function(e){return e}))},d=function(e,t){var n="/api/sessions/".concat(e);return Object(a.b)("PUT",n,t).then((function(e){return e})).then((function(e){return e}))},u=function(e,t){var n="/api/clients?find=".concat(e);return Object(a.b)("GET",n).then((function(e){return e})).catch((function(e){return e}))},b=function(e,t){var n="/api/counsellors?pagination[page]=".concat(t,"&search=").concat(e);return Object(a.b)("GET",n).then((function(e){return e})).catch((function(e){return e}))},v=function(e){var t="/api/counsellors/".concat(e);return Object(a.b)("GET",t).then((function(e){return e})).catch((function(e){return e}))},m=function(e,t,n,i){console.log(i);var r="/api/clients?filter=".concat(e,"&counsellor=").concat(n,"&filterType=").concat(i);return console.log(e),Object(a.b)("GET",r).then((function(e){return e})).catch((function(e){return e}))},h=function(e,t,n){var i="/api/centers?search=".concat(e,"&counsellor=").concat(n);return console.log(e),Object(a.b)("GET",i).then((function(e){return e})).catch((function(e){return e}))},p=function(e,t,n){var i="/api/centers?filter=".concat(e,"&counsellor=").concat(n);return console.log(e),Object(a.b)("GET",i).then((function(e){return e})).catch((function(e){return e}))},f=function(e){var t=e&&e.search||"",n=e&&e.page||1,i=e&&e.centerName,r="/api/counsellors?search=".concat(t,"&pagination[page]=").concat(n);return i&&(r+="&centerName=".concat(i)),Object(a.b)("GET",r).then((function(e){return e})).catch((function(e){return e}))}},646:function(e,t,n){"use strict";var a=n(13),i=(n(2),n(566)),r=n(568),o=n(640),c=n(565),l=n(567),s=n(336),d=n(208),u=n(25),b=(n(650),n(557)),v=n(692),m=n(552),h=n(571),p=n.n(h),f=n(572),g=n.n(f),j=n(573),O=n.n(j),x=n(95),C=n(332),y=n(1),P={new:"New",inProcess:"In Process",successful:"Successful",unsuccessful:"Unsuccessful",pending:"Pending",scheduled:"Scheduled",rescheduled:"Rescheduled",cancelled:"Cancelled",completed:"Completed"};t.a=function(e){var t=Object(u.f)(),n=Object(x.a)().user,h=function(e){var t=e.meta,n=[];if(t)for(var i=Object.entries(t),r=0,c=Object.entries(i);r<c.length;r++){var l=Object(a.a)(c[r],2),s=l[0],d=Object(a.a)(l[1],2),u=d[0],b=d[1];"deviceId"!==u&&"counsellor_user_id"!==u&&n.push(Object(y.jsx)(o.a,{width:"scheduledAt"===u?140:60,variant:"head",align:"center",className:"text-style",children:b},s))}return n},f=function(t,n){return Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(a){a.stopPropagation(),t.disabled?e.handleEnable("center"===n?t.center_id:t.provider_id):e.handleDisable("center"===n?t.center_id:t.provider_id)},children:t.disabled?"Enable":"Disable"})},j=function(a,i,r){var o=null;switch(a){case"edit_action":o=Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return t(i)},children:"Edit"});break;case"return":o=Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),e.handleReturn(r)},disabled:!i,children:"Return"});break;case"expire":o=Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),e.handleExpire(r)},disabled:!i,children:"Expire"});break;case"device_action":o=function(t){return t.isAssigned?Object(y.jsx)("div",{style:{marginLeft:"1rem"},children:t.center_name}):n&&n.role&&"admin"===n.role.type&&"bmc"===t.owned_by?Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){return e.handleOpen(t.deviceID,!0)},children:"Assign"}):null}(i);break;case"view_notes":o=function(t){return Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(y.jsx)(b.a,{"aria-label":"view",color:"primary",onClick:function(){return e.handleOpen(t,!0)},children:Object(y.jsx)(v.a,{badgeContent:t.notes?t.notes.length:0,color:"secondary",children:Object(y.jsx)(p.a,{})})}),Object(y.jsx)(b.a,{"aria-label":"view",color:"primary",onClick:function(){return e.handleOpenNewNotes(t,!0)},children:Object(y.jsx)(g.a,{})})]})}(i);break;case"clinician_status":o=function(t,a){return"Not Assigned"!==t?Object(y.jsx)("div",{children:t}):n&&n.role&&"admin"===n.role.type?Object(y.jsx)("div",{children:"Not Assigned"}):n&&n.role&&"center"===n.role.type?Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),e.assignClinician(a)},children:"Assign"}):void 0}(i,r);break;case"device_status":o=function(t,a){return"Not Assigned"!==t?Object(y.jsx)("div",{children:t}):n&&n.role&&"admin"===n.role.type?Object(y.jsx)("div",{children:"Not Assigned"}):n&&n.role&&"center"===n.role.type?Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),e.issueDevices(a)},disabled:"Not Issued"===a.license,children:"Assign"}):void 0}(i,r);break;case"license":o=function(t,a){return"Issued"===t?Object(y.jsx)("div",{children:"Issued"}):n&&n.role&&"admin"===n.role.type?Object(y.jsx)("div",{children:"Not Issued"}):n&&n.role&&"center"===n.role.type?Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),e.issueLisence(a)},children:"Issue"}):void 0}(i,r);break;case"scheduledAt":o=function(t){return"scheduled"==t.status?Object(y.jsxs)("div",{style:{marginLeft:"1rem"},children:[t.scheduledAt,Object(y.jsx)(b.a,{"aria-label":"view",color:"primary",children:"counsellor"===n.role.type&&Object(y.jsx)(O.a,{})})]}):"pending"==t.status?Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(y.jsx)(C.a,{variant:"contained",color:"success",style:{marginRight:5},onClick:function(){return e.handleAcceptModal(t,!0)},children:Object(y.jsx)("div",{style:{fontSize:".8rem"},children:"Accept"})}),Object(y.jsx)(C.a,{variant:"contained",color:"error",onClick:function(){return e.handleRejectModal(t,!0)},children:Object(y.jsx)("div",{style:{fontSize:".8rem"},children:"Reject"})})]}):"cancelled"==t.status?Object(y.jsx)("div",{style:{marginLeft:"1rem"},children:"".concat(t.scheduledAt," - Cancelled")}):Object(y.jsxs)("div",{style:{marginLeft:"1rem"},children:[t,Object(y.jsx)(b.a,{"aria-label":"view",color:"primary",children:"counsellor"===n.role.type&&Object(y.jsx)(O.a,{})})]})}(i);break;case"appointment":o=function(t,a){return"Scheduled"===t?Object(y.jsx)("div",{children:"Scheduled"}):n&&n.role&&"admin"===n.role.type?Object(y.jsx)("div",{children:"Not Scheduled"}):n&&n.role&&"center"===n.role.type?Object(y.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),e.scheduleSession(a)},children:"Schedule"}):void 0}(i,r);break;case"status":o=P[i]||i;break;case"disable_center":o=f(i,"center");break;case"disable_provider":o=f(i,"provider");break;default:o=i}return o},A=function(e){for(var t=e.row,n=[],i=Object.entries(t),r=0,c=Object.entries(i);r<c.length;r++){var l=Object(a.a)(c[r],2),s=l[0],d=Object(a.a)(l[1],2),u=d[0],b=d[1];"centerId"!==u&&"clientID"!==u&&"clinicId"!==u&&"deviceId"!==u&&"counsellor_user_id"!==u&&n.push(Object(y.jsx)(o.a,{className:"text-style",component:"th",scope:"row",align:"center",children:j(u,b,t)},s))}return n};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(d.a,{sx:{width:"100%",overflow:"hidden"},children:[Object(y.jsx)(c.a,{className:"main-table",children:Object(y.jsxs)(i.a,{sx:{minWidth:650},size:"small","aria-label":"simple table",className:"user-table",children:[Object(y.jsx)(l.a,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(h,{meta:e.rows.meta})})}),e.rows&&e.rows.length>0?Object(y.jsx)(r.a,{children:(e.rowsPerPage>0?e.rows.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage):e.rows).map((function(t,n){return Object(y.jsx)(s.a,{sx:{"&:last-child td, &:last-child th":{border:0}},onClick:function(){e.onClick&&e.onClick("device"===e.view?t.deviceId:"center"===e.view?t.centerId:"client"===e.view||"counselor"===e.view?t.clientID:"counsellor"===e.view?t.counsellor_user_id:"clinician"===e.view?t.clinicId:t.id)},children:Object(y.jsx)(A,{row:t})},n)}))}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("caption",{children:"No records found"})})]})}),!e.view||"center"!==e.view&&"device"!==e.view&&"client"!==e.view&&"counsellor"!==e.view&&"clinician"!==e.view?Object(y.jsx)(m.a,{rowsPerPageOptions:[],component:"div",count:e.rows.length,rowsPerPage:e.rowsPerPage||10,page:e.page||0,onPageChange:e.handleChangePage,onRowsPerPageChange:e.handleChangeRowsPerPage,className:"table-page"}):Object(y.jsx)(m.a,{rowsPerPageOptions:[],component:"div",count:e.pageDetails.total||0,rowsPerPage:10,page:e.pageDetails.page-1||0,onPageChange:e.handlePageChange,onRowsPerPageChange:e.handleChangeRowsPerPage,className:"table-page"})]})})}},647:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a={admin:[{id:1,name:"Details"},{id:2,name:"Centers"},{id:3,name:"Providers"},{id:4,name:"Clients"}],center:[{id:1,name:"Details"},{id:3,name:"Providers"},{id:4,name:"Clients"}],counsellor:[{id:1,name:"Details"},{id:2,name:"Centers"},{id:4,name:"Clients"}],clinician:[{id:1,name:"Details"},{id:2,name:"Clients"},{id:3,name:"Appointments"}],client:[{id:1,name:"Details"},{id:2,name:"Providers"},{id:3,name:"Appointments"}],device:{admin:[{id:1,name:"Managed"},{id:2,name:"Unmanaged"}],center:[{id:1,name:"Managed"},{id:2,name:"Unmanaged"}]},deviceDetail:[{id:1,name:"Details"},{id:2,name:"Usage"}],deviceUsageFilters:[{id:1,type:"search",label:"Search Device Usage",placeholder:"Search Device Usage"},{id:2,type:"filter",label:"Status",name:"status",items:[{id:1,name:"All",value:"All"},{id:2,name:"Active",value:"Active"},{id:3,name:"Inactive",value:"Inactive"}]}],usersListing:[{id:1,type:"search",label:"Search User",placeholder:"Search User"},{id:2,type:"filter",label:"Role",name:"role",items:[{id:1,name:"All",value:"All"},{id:2,name:"Center",value:"Center"},{id:3,name:"Counsellor",value:"Counsellor"},{id:4,name:"Client",value:"Client"}]}],counsellorListing:[{id:1,type:"search",label:"Search Provider",placeholder:"Search Provider"},{id:2,type:"searchAutoComplete",label:"Search Center",name:"Search Center"}],deviceListing:{admin:{managed:[{id:1,type:"search",label:"Search Device",placeholder:"Search Device"},{id:2,type:"filter",label:"Status",name:"status",items:[{id:1,name:"All",value:"All"},{id:2,name:"Available",value:"Available"},{id:3,name:"Assigned",value:"Assigned"},{id:4,name:"Repair",value:"Repair"}]},{id:3,type:"filter",label:"Device Type",name:"device_type",items:[{id:1,name:"All",value:"All"},{id:2,name:"iPad",value:"iPad"},{id:3,name:"iPhone",value:"iPhone"},{id:4,name:"Android Phone",value:"Android Phone"},{id:5,name:"Android Tablet",value:"Android Tablet"},{id:6,name:"Other",value:"Other"}]},{id:4,type:"searchAutoComplete",label:"Search Center",name:"Search Center"}],unmanaged:[{id:1,type:"search",label:"Search Device",placeholder:"Search Device"},{id:2,type:"filter",label:"Status",name:"status",items:[{id:1,name:"All",value:"All"},{id:2,name:"Active",value:"active"},{id:3,name:"Inactive",value:"inactive"}]}]},center:{bmc:[{id:1,type:"search",label:"Search Device",placeholder:"Search Device"},{id:2,type:"filter",label:"Status",name:"status",items:[{id:1,name:"All",value:"All"},{id:2,name:"Available",value:"Available"},{id:3,name:"Assigned",value:"Assigned"},{id:4,name:"Repair",value:"Repair"}]},{id:3,type:"filter",label:"Device Type",name:"device_type",items:[{id:1,name:"All",value:"All"},{id:2,name:"iPad",value:"iPad"},{id:3,name:"iPhone",value:"iPhone"},{id:4,name:"Android Phone",value:"Android Phone"},{id:5,name:"Android Tablet",value:"Android Tablet"},{id:6,name:"Other",value:"Other"}]}],centerOrClient:[{id:1,type:"search",label:"Search Device",placeholder:"Search Device"},{id:2,type:"filter",label:"Status",name:"status",items:[{id:1,name:"All",value:"All"},{id:2,name:"Active",value:"active"},{id:3,name:"Inactive",value:"inactive"}]}]}},adminProfile:{profileInfo:{username:"",email:"",created_at:"",logo:null,logo_image:"",domain:""},fields:[]},centerProfile:{profileInfo:{center_id:"",name:"",email:"",phone_number:"",address:"",logo:null,logo_image:"",domain:""},fields:[{id:"center_id",type:"text",name:"center_id",label:"Center ID",disabled:!0},{id:"name",type:"text",name:"name",label:"Name",disabled:!1,validators:["REQUIRED"],errorMessages:["This field is required!"]},{id:"email",type:"email",name:"email",label:"Email",disabled:!1,validators:["REQUIRED","isEmail"],errorMessages:["This field is required!","email is not valid"]},{id:"phone_number",type:"text",name:"phone_number",label:"Phone Number",disabled:!1,validators:["REQUIRED","MAX_PHONE_LENGTH"],errorMessages:["This field is required!","Phone number must be of 7 digits"]},{id:"address",type:"text",name:"address",label:"Address",disabled:!1,validators:["REQUIRED"],errorMessages:["This field is required!"]}],validationRules:{REQUIRED:function(e){return 0!==e.length},MAX_PHONE_LENGTH:function(e){return!e||7===e.length}}},counsellorProfile:{profileInfo:{first_name:"",last_name:"",email:"",phone:{area_code:"",phone_number:""},logo:null,logo_image:"",domain:""},fields:[{id:"first_name",type:"text",name:"first_name",label:"First Name",disabled:!1,validators:["REQUIRED"],errorMessages:["This field is required!"]},{id:"last_name",type:"text",name:"last_name",label:"Last Name",disabled:!1,validators:["REQUIRED"],errorMessages:["This field is required!"]},{id:"email",type:"email",name:"email",label:"Email",disabled:!1,validators:["REQUIRED","isEmail"],errorMessages:["This field is required!","email is not valid"]},{type:"phone",area_code:{id:"area_code",type:"text",name:"area_code",label:"Area Code",disabled:!1,validators:["REQUIRED","VALID_INPUT","MAX_CODE_LENGTH"],errorMessages:["This field is required","Invalid area code","Area code should have 3 digits"]},phone_number:{id:"phone_number",type:"text",name:"phone_number",label:"Phone Number",disabled:!1,validators:["REQUIRED","MAX_PHONE_LENGTH"],errorMessages:["This field is required!","Phone number must be of 7 digits"]}}],validationRules:{REQUIRED:function(e){return 0!==e.length},MAX_CODE_LENGTH:function(e){return!e||3===e.length},VALID_INPUT:function(e){return!e||!isNaN(e)},MAX_PHONE_LENGTH:function(e){return!e||7===e.length}}},centerSearchFilters:[{id:1,type:"search",name:"search",label:"Search Center",placeholder:"Search Center"},{id:2,type:"filter",label:"Center Type",name:"center_type",items:[{id:1,name:"All",value:"All"},{id:2,name:"CAC",value:"CAC"},{id:3,name:"Clinic",value:"Clinic"},{id:4,name:"Hospital",value:"Hospital"},{id:5,name:"Private",value:"Private"}]}],appointmentsListing:[{id:1,type:"search",name:"search",label:"Search Appointment",placeholder:"Search Appointment"},{id:2,type:"filter",label:"Status",name:"status",items:[{id:1,name:"All",value:"All"},{id:2,name:"Pending",value:"pending"},{id:3,name:"Scheduled",value:"scheduled"},{id:4,name:"Rescheduled",value:"rescheduled"},{id:5,name:"Cancelled",value:"cancelled"},{id:6,name:"Completed",value:"completed"}]}]},i={client:[{id:1,name:"Details"},{id:5,name:"Appointments"}],center:[{id:1,name:"Details"},{id:4,name:"Clients"},{id:5,name:"Appointments"}]}},650:function(e,t,n){},652:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),i=n(216);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return Object(i.a)(e)?t:Object(a.a)({},t,{ownerState:Object(a.a)({},t.ownerState,n)})}},654:function(e,t,n){"use strict";var a=n(216);t.a=function(e){return!e||!Object(a.a)(e)}},664:function(e,t,n){"use strict";n(2);var a=n(560),i=n(330),r=n(561),o=n(551),c=n(636),l=n(207),s=n(332),d=n(309),u=n(213),b=n.n(u),v=n(6),m=n(930),h=(n(671),n(1)),p=function(e){var t=e.name,n=e.label,a=e.value,i=e.onChange,r=e.options,o=e.selectValue,c=e.handleSelect;return Object(h.jsx)(m.a,{disablePortal:!0,id:"combo-box-demo",options:r,name:t,value:o,onChange:function(e,t){c(t)},inputValue:a,onInputChange:function(e,t){i(t)},renderInput:function(e){return Object(h.jsx)(d.a,Object(v.a)(Object(v.a)({},e),{},{fullWidth:!0,label:n}))}})};t.a=function(e){var t=e.data,n=e.searchValue,u=e.handleSearch,v=e.multipleFilters,m=e.filterValue,f=e.handleFilter,g=e.autoCompleteValue,j=e.handleAutoComplete,O=e.options,x=e.selectValue,C=e.handleSelect,y=e.handleReset,P=function(e){var t=null;return"search"===e.type?t=Object(h.jsx)(a.a,{fullWidth:!0,children:Object(h.jsx)(d.a,{autoFocus:!0,label:e.label,variant:"outlined",onChange:u,value:n,name:e.name,placeholder:e.placeholder,type:"text",fullWidth:!0,InputProps:{startAdornment:Object(h.jsx)(b.a,{})}})}):"filter"===e.type?t=Object(h.jsx)(i.a,{children:Object(h.jsxs)(a.a,{fullWidth:!0,children:[Object(h.jsx)(r.a,{sx:{backgroundColor:"#fafafa",padding:"0.25rem"},children:e.label}),Object(h.jsx)(o.a,{id:"demo-simple-select",value:v?m[e.name]:m,label:e.label,name:e.name,onChange:f,children:e.items.map((function(e,t){return Object(h.jsx)(c.a,{value:e.value,children:e.name},t)}))})]})}):"searchAutoComplete"===e.type&&(t=Object(h.jsx)(p,{name:e.name,label:e.label,value:g,onChange:function(e){return j(e)},options:O,selectValue:x,handleSelect:function(e){return C(e)}})),t};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l.a,{sx:{marginBottom:"20px"},container:!0,rowSpacing:3,columnSpacing:6,children:t.map((function(e,t){return Object(h.jsx)(l.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:P(e)},t)}))}),Object(h.jsx)(a.a,{sx:{marginBottom:"20px",display:"flex",width:"100%"},children:Object(h.jsx)(s.a,{color:"primary",variant:"contained",onClick:y,sx:{alignSelf:"flex-end"},children:"Reset"})})]})}},671:function(e,t,n){},692:function(e,t,n){"use strict";var a=n(8),i=n(7),r=n(3),o=n(2),c=n(9),l=function(e){var t=o.useRef({});return o.useEffect((function(){t.current=e})),t.current},s=n(92),d=n(652);var u=n(60),b=n(57);function v(e){return Object(b.a)("BaseBadge",e)}Object(u.a)("BaseBadge",["root","badge","invisible"]);var m=n(1),h=["badgeContent","component","children","className","components","componentsProps","invisible","max","showZero"],p=o.forwardRef((function(e,t){var n=e.component,a=e.children,o=e.className,u=e.components,b=void 0===u?{}:u,p=e.componentsProps,f=void 0===p?{}:p,g=e.max,j=void 0===g?99:g,O=e.showZero,x=void 0!==O&&O,C=Object(i.a)(e,h),y=function(e){var t=e.badgeContent,n=e.invisible,a=void 0!==n&&n,i=e.max,r=void 0===i?99:i,o=e.showZero,c=void 0!==o&&o,s=l({badgeContent:t,max:r}),d=a;!1!==a||0!==t||c||(d=!0);var u=d?s:e,b=u.badgeContent,v=u.max,m=void 0===v?r:v;return{badgeContent:b,invisible:d,max:m,displayValue:b&&Number(b)>m?"".concat(m,"+"):b}}(Object(r.a)({},e,{max:j})),P=y.badgeContent,A=y.max,w=y.displayValue,S=y.invisible,_=Object(r.a)({},e,{badgeContent:P,invisible:S,max:A,showZero:x}),N=function(e){var t={root:["root"],badge:["badge",e.invisible&&"invisible"]};return Object(s.a)(t,v,void 0)}(_),R=n||b.Root||"span",E=Object(d.a)(R,Object(r.a)({},C,f.root),_),I=b.Badge||"span",k=Object(d.a)(I,f.badge,_);return Object(m.jsxs)(R,Object(r.a)({},E,{ref:t},C,{className:Object(c.a)(N.root,E.className,o),children:[a,Object(m.jsx)(I,Object(r.a)({},k,{className:Object(c.a)(N.badge,k.className),children:w}))]}))})),f=n(5),g=n(12),j=n(654),O=n(15);function x(e){return Object(b.a)("MuiBadge",e)}var C=Object(u.a)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),y=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","showZero","variant"],P=Object(f.a)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(e,t){return t.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),A=Object(f.a)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(e,t){var n=e.ownerState;return[t.badge,t[n.variant],t["anchorOrigin".concat(Object(O.a)(n.anchorOrigin.vertical)).concat(Object(O.a)(n.anchorOrigin.horizontal)).concat(Object(O.a)(n.overlap))],"default"!==n.color&&t["color".concat(Object(O.a)(n.color))],n.invisible&&t.invisible]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},"default"!==n.color&&{backgroundColor:(t.vars||t).palette[n.color].main,color:(t.vars||t).palette[n.color].contrastText},"dot"===n.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&Object(a.a)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&Object(a.a)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&Object(a.a)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&Object(a.a)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&Object(a.a)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&Object(a.a)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&Object(a.a)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&Object(a.a)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(C.invisible),{transform:"scale(0) translate(-50%, 50%)"}),n.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})})),w=o.forwardRef((function(e,t){var n,a,o,d,u=Object(g.a)({props:e,name:"MuiBadge"}),b=u.anchorOrigin,v=void 0===b?{vertical:"top",horizontal:"right"}:b,h=u.className,f=u.component,C=void 0===f?"span":f,w=u.components,S=void 0===w?{}:w,_=u.componentsProps,N=void 0===_?{}:_,R=u.overlap,E=void 0===R?"rectangular":R,I=u.color,k=void 0===I?"default":I,D=u.invisible,T=void 0!==D&&D,M=u.max,z=u.badgeContent,L=u.showZero,U=void 0!==L&&L,B=u.variant,H=void 0===B?"standard":B,G=Object(i.a)(u,y),V=l({anchorOrigin:v,color:k,overlap:E,variant:H}),F=T;!1===T&&(0===z&&!U||null==z&&"dot"!==H)&&(F=!0);var Q,W=F?V:u,q=W.color,Y=void 0===q?k:q,Z=W.overlap,X=void 0===Z?E:Z,J=W.anchorOrigin,K=void 0===J?v:J,$=W.variant,ee=void 0===$?H:$,te=function(e){var t=e.color,n=e.anchorOrigin,a=e.invisible,i=e.overlap,r=e.variant,o=e.classes,c=void 0===o?{}:o,l={root:["root"],badge:["badge",r,a&&"invisible","anchorOrigin".concat(Object(O.a)(n.vertical)).concat(Object(O.a)(n.horizontal)),"anchorOrigin".concat(Object(O.a)(n.vertical)).concat(Object(O.a)(n.horizontal)).concat(Object(O.a)(i)),"overlap".concat(Object(O.a)(i)),"default"!==t&&"color".concat(Object(O.a)(t))]};return Object(s.a)(l,x,c)}(Object(r.a)({},u,{anchorOrigin:K,invisible:F,color:Y,overlap:X,variant:ee}));return"dot"!==ee&&(Q=z&&Number(z)>M?"".concat(M,"+"):z),Object(m.jsx)(p,Object(r.a)({invisible:T,badgeContent:Q,showZero:U,max:M},G,{components:Object(r.a)({Root:P,Badge:A},S),className:Object(c.a)(h,te.root,null==(n=N.root)?void 0:n.className),componentsProps:{root:Object(r.a)({},N.root,Object(j.a)(S.Root)&&{as:C,ownerState:Object(r.a)({},null==(a=N.root)?void 0:a.ownerState,{anchorOrigin:K,color:Y,overlap:X,variant:ee})}),badge:Object(r.a)({},N.badge,{className:Object(c.a)(te.badge,null==(o=N.badge)?void 0:o.className)},Object(j.a)(S.Badge)&&{ownerState:Object(r.a)({},null==(d=N.badge)?void 0:d.ownerState,{anchorOrigin:K,color:Y,overlap:X,variant:ee})})},ref:t}))}));t.a=w},833:function(e,t,n){},901:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n(2),r=n(646),o=n(207),c=n(25),l=n(332),s=n(212),d=n(645),u=n(647),b=n(664),v=n(94),m=(n(833),n(73)),h=n(643),p=n(1);t.default=function(){var e=Object(c.f)(),t=Object(i.useState)(!1),n=Object(a.a)(t,2),f=n[0],g=n[1],j=Object(i.useState)([]),O=Object(a.a)(j,2),x=O[0],C=O[1],y=Object(i.useState)(""),P=Object(a.a)(y,2),A=P[0],w=P[1],S=Object(i.useState)(!1),_=Object(a.a)(S,2),N=_[0],R=_[1],E=Object(i.useState)(""),I=Object(a.a)(E,2),k=I[0],D=I[1],T=Object(i.useState)([]),M=Object(a.a)(T,2),z=M[0],L=M[1],U=Object(i.useState)(null),B=Object(a.a)(U,2),H=B[0],G=B[1],V=Object(i.useState)({}),F=Object(a.a)(V,2),Q=F[0],W=F[1],q=Object(i.useState)((function(){return u.b.counsellorListing})),Y=Object(a.a)(q,2),Z=Y[0],X=(Y[1],Object(i.useState)(!1)),J=Object(a.a)(X,2),K=J[0],$=J[1],ee=Object(i.useState)(""),te=Object(a.a)(ee,2),ne=te[0],ae=te[1];function ie(e){return e.pagination}function re(e){g(!0),Object(s.t)(e).then((function(e){var t;e&&("UnauthorizedError"===(null===e||void 0===e||null===(t=e.error)||void 0===t?void 0:t.name)?($(!0),ae("Your session has expired. You will be logged out.")):(C(ue(e.data)),ce(""),W(ie(e.meta))),g(!1))})).catch((function(e){g(!1)}))}function oe(e,t,n){g(!0);var a={search:e,page:t,centerName:n||null};Object(d.k)(a).then((function(e){var t;e&&("UnauthorizedError"===(null===e||void 0===e||null===(t=e.error)||void 0===t?void 0:t.name)?($(!0),ae("Your session has expired. You will be logged out.")):(C(ue(e.data)),ce(""),W(ie(e.meta))),g(!1))})).catch((function(e){g(!1)}))}Object(i.useEffect)((function(){re(1),le()}),[]);var ce=function(e){Object(s.j)(e).then((function(e){var t;if("UnauthorizedError"===(null===e||void 0===e||null===(t=e.error)||void 0===t?void 0:t.name))$(!0),ae("Your session has expired. You will be logged out.");else if(e.data){var n=[];e.data.map((function(e){var t,a={id:e.id,label:null===(t=e.attributes)||void 0===t?void 0:t.name};n.push(a)})),L(n)}})).catch((function(e){return console.log(e)}))};function le(){Object(s.i)().then((function(e){if(e.data){var t=[];e.data.map((function(e){var n,a={id:e.id,label:null===(n=e.attributes)||void 0===n?void 0:n.name};t.push(a)})),L(t.slice(0,5))}})).catch((function(e){return console.log(e)}))}function se(e){return e.map((function(e){return e.attributes&&e.attributes.trauma_code})).join(", ")}function de(e,t){var n=0;return 1==e?n=t[0].attributes.duration+" mins":(n=t.reduce((function(e,t){return e+t.attributes&&t.attributes.duration}),0),Object(m.e)(n))}function ue(e){var t=[];return console.log(e),e.forEach((function(e){var n,a,i,r,o,c,l,s,d,u,b,v,m,h,p,f,g={counsellor_user_id:null===e||void 0===e?void 0:e.id,counsellorId:(null===e||void 0===e?void 0:e.attributes)&&(null===(n=e.attributes)||void 0===n?void 0:n.user)&&(null===(a=e.attributes.user)||void 0===a?void 0:a.data)&&(null===(i=e.attributes.user.data)||void 0===i?void 0:i.attributes)&&e.attributes.user.data.attributes.username||"-",name:(null===e||void 0===e?void 0:e.attributes)&&e.attributes.name||"-",firstName:(null===e||void 0===e?void 0:e.attributes)&&e.attributes.first_name||"",lastName:(null===e||void 0===e?void 0:e.attributes)&&e.attributes.last_name||"",traumaCodes:(null===e||void 0===e?void 0:e.attributes)&&(null===(r=e.attributes)||void 0===r?void 0:r.traumas)&&(null===(o=e.attributes.traumas)||void 0===o?void 0:o.data)&&se(e.attributes.traumas.data)||"",centerCount:(null===e||void 0===e?void 0:e.attributes)&&(null===(c=e.attributes)||void 0===c?void 0:c.centers)&&(null===(l=e.attributes.centers)||void 0===l?void 0:l.data)&&(null===(s=e.attributes.centers.data)||void 0===s?void 0:s.attributes)&&e.attributes.centers.data.attributes.count||0,clients:(null===e||void 0===e?void 0:e.attributes)&&(null===(d=e.attributes)||void 0===d?void 0:d.clients)&&(null===(u=e.attributes.clients)||void 0===u?void 0:u.data)&&(null===(b=e.attributes.clients.data)||void 0===b?void 0:b.attributes)&&e.attributes.clients.data.attributes.count||0,sessions:(null===e||void 0===e?void 0:e.attributes)&&(null===(v=e.attributes)||void 0===v?void 0:v.sessions)&&(null===(m=e.attributes.sessions)||void 0===m?void 0:m.data)&&e.attributes.sessions.data.length||0,sessionHours:(null===e||void 0===e?void 0:e.attributes)&&(null===(h=e.attributes)||void 0===h?void 0:h.sessions)&&(null===(p=e.attributes.sessions)||void 0===p?void 0:p.data.length)>0&&de(null===(f=e.attributes.sessions)||void 0===f?void 0:f.data.length,e.attributes.sessions.data)||"-"};t.push(g)})),t.meta={counsellor_user_id:"ID",counsellorId:" Provider ID",name:"Full Name",firstName:"First Name",lastName:"Last Name",traumaCodes:"Trauma Codes",centers:"Centers",clients:"Clients",sessions:"Sessions",sessionsHours:"Sessions Hours"},t}var be=function(e,t){oe(e,t,H&&H.label)};return Object(p.jsxs)(o.a,{container:!0,className:"user-container",children:[Object(p.jsx)(o.a,{className:"user-breadcrumb",children:Object(p.jsx)(v.b,{routeSegments:[{name:"All Providers"}]})}),Object(p.jsx)(l.a,{variant:"contained",className:"add-button",size:"small",onClick:function(){return e("/counsellors/add")},children:"Add Provider"}),Object(p.jsx)(b.a,{data:Z,searchValue:A,handleSearch:function(e){var t=e.target.value;w(t),t&&t.length>=1?(R(!0),be(t,1)):""===t&&(H&&H.label?be("",1):re(1),R(!1))},multipleFilters:!1,autoCompleteValue:k,handleAutoComplete:function(e){return D(t=e),void(""===t?(L([]),G(null),le()):ce(t));var t},options:z,selectValue:H,handleSelect:function(e){return function(e){G(e),e?oe(A,1,e.label):oe(A,1)}(e)},handleReset:function(){w(""),D(""),G(null),R(!1),re(1),le()}}),Object(p.jsx)(o.a,{className:"user-list",children:!f&&x.meta&&Object(p.jsx)(r.a,{page:1,pageDetails:Q,handlePageChange:function(e,t){console.log("newPage",t),N?Object(s.z)(A,Number(t)+1):H?oe(A,Number(t)+1,H.label):re(Number(t)+1)},rows:x,view:"counsellor",onClick:function(t){e("/counsellors/details/".concat(t),{id:t})}})}),Object(p.jsx)(h.a,{open:K,text:ne,onConfirmDialogClose:function(){ae(""),$(!1)},onYesClick:function(){ae(""),$(!1)}})]})}}}]);
//# sourceMappingURL=20.9e6fc866.chunk.js.map