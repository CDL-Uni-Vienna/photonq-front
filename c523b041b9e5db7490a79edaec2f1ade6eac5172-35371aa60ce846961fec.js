"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[8818],{23773:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(29439),r=a(63366),o=a(87462),i=a(67294),l=a(2585),c=a(50565),d=a(21672),s=a(69114),u=a(76173),m=a(21208),p=a(41590),h=a(18362);function f(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,a(57893).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=a(85893),Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,s.ZP)(p.Z)((function(e){var t=e.ownerState;return(0,o.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),g=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=i.forwardRef((function(e,t){var a=e.autoFocus,i=e.checked,s=e.checkedIcon,p=e.className,h=e.defaultChecked,x=e.disabled,k=e.disableFocusRipple,y=void 0!==k&&k,w=e.edge,P=void 0!==w&&w,C=e.icon,N=e.id,S=e.inputProps,R=e.inputRef,F=e.name,B=e.onBlur,L=e.onChange,j=e.onFocus,z=e.readOnly,I=e.required,q=e.tabIndex,M=e.type,O=e.value,E=(0,r.Z)(e,Z),H=(0,u.Z)({controlled:i,default:Boolean(h),name:"SwitchBase",state:"checked"}),T=(0,n.Z)(H,2),V=T[0],X=T[1],W=(0,m.Z)(),D=x;W&&void 0===D&&(D=W.disabled);var A="checkbox"===M||"radio"===M,_=(0,o.Z)({},e,{checked:V,disabled:D,disableFocusRipple:y,edge:P}),$=function(e){var t=e.classes,a=e.checked,n=e.disabled,r=e.edge,o={root:["root",a&&"checked",n&&"disabled",r&&"edge".concat((0,d.Z)(r))],input:["input"]};return(0,c.Z)(o,f,t)}(_);return(0,v.jsxs)(b,(0,o.Z)({component:"span",className:(0,l.Z)($.root,p),centerRipple:!0,focusRipple:!y,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){B&&B(e),W&&W.onBlur&&W.onBlur(e)},ownerState:_,ref:t},E,{children:[(0,v.jsx)(g,(0,o.Z)({autoFocus:a,checked:i,defaultChecked:h,className:$.input,disabled:D,id:A&&N,name:F,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;X(t),L&&L(e,t)}},readOnly:z,ref:R,required:I,ownerState:_,tabIndex:q,type:M},"checkbox"===M&&void 0===O?{}:{value:O},S)),V?s:C]}))}))},54162:function(e,t,a){a.r(t),a.d(t,{RegisterPage:function(){return ce},default:function(){return de}});var n=a(2436),r=a(61991),o=a(8352),i=a(15861),l=a(64687),c=a.n(l),d=a(99911),s=a(4942),u=a(63366),m=a(87462),p=a(67294),h=a(2585),f=a(50565),v=a(21208),Z=a(64090),b=a(21672),g=a(69114),x=a(25309),k=a(18362),y=a(57893);function w(e){return(0,k.Z)("MuiFormControlLabel",e)}var P=(0,y.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),C=a(84579),N=a(85893),S=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],R=(0,g.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,s.Z)({},"& .".concat(P.label),t.label),t.root,t["labelPlacement".concat((0,b.Z)(a.labelPlacement))]]}})((function(e){var t=e.theme,a=e.ownerState;return(0,m.Z)((0,s.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(P.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,s.Z)({},"& .".concat(P.label),(0,s.Z)({},"&.".concat(P.disabled),{color:(t.vars||t).palette.text.disabled})))})),F=p.forwardRef((function(e,t){var a=(0,x.Z)({props:e,name:"MuiFormControlLabel"}),n=a.className,r=a.componentsProps,o=void 0===r?{}:r,i=a.control,l=a.disabled,c=a.disableTypography,d=a.label,s=a.labelPlacement,g=void 0===s?"end":s,k=(0,u.Z)(a,S),y=(0,v.Z)(),P=l;void 0===P&&void 0!==i.props.disabled&&(P=i.props.disabled),void 0===P&&y&&(P=y.disabled);var F={disabled:P};["checked","name","onChange","value","inputRef"].forEach((function(e){void 0===i.props[e]&&void 0!==a[e]&&(F[e]=a[e])}));var B=(0,C.Z)({props:a,muiFormControl:y,states:["error"]}),L=(0,m.Z)({},a,{disabled:P,labelPlacement:g,error:B.error}),j=function(e){var t=e.classes,a=e.disabled,n=e.labelPlacement,r=e.error,o={root:["root",a&&"disabled","labelPlacement".concat((0,b.Z)(n)),r&&"error"],label:["label",a&&"disabled"]};return(0,f.Z)(o,w,t)}(L),z=d;return null==z||z.type===Z.Z||c||(z=(0,N.jsx)(Z.Z,(0,m.Z)({component:"span",className:j.label},o.typography,{children:z}))),(0,N.jsxs)(R,(0,m.Z)({className:(0,h.Z)(j.root,n),ownerState:L,ref:t},k,{children:[p.cloneElement(i,F),z]}))})),B=a(62915),L=a(23773),j=a(43327),z=(0,j.Z)((0,N.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),I=(0,j.Z)((0,N.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),q=(0,j.Z)((0,N.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function M(e){return(0,k.Z)("MuiCheckbox",e)}var O=(0,y.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),E=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],H=(0,g.ZP)(L.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat((0,b.Z)(a.color))]]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,m.Z)({color:(a.vars||a).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===n.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,B.Fq)("default"===n.color?a.palette.action.active:a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,s.Z)(t,"&.".concat(O.checked,", &.").concat(O.indeterminate),{color:(a.vars||a).palette[n.color].main}),(0,s.Z)(t,"&.".concat(O.disabled),{color:(a.vars||a).palette.action.disabled}),t))})),T=(0,N.jsx)(I,{}),V=(0,N.jsx)(z,{}),X=(0,N.jsx)(q,{}),W=p.forwardRef((function(e,t){var a,n,r=(0,x.Z)({props:e,name:"MuiCheckbox"}),o=r.checkedIcon,i=void 0===o?T:o,l=r.color,c=void 0===l?"primary":l,d=r.icon,s=void 0===d?V:d,v=r.indeterminate,Z=void 0!==v&&v,g=r.indeterminateIcon,k=void 0===g?X:g,y=r.inputProps,w=r.size,P=void 0===w?"medium":w,C=r.className,S=(0,u.Z)(r,E),R=Z?k:s,F=Z?k:i,B=(0,m.Z)({},r,{color:c,indeterminate:Z,size:P}),L=function(e){var t=e.classes,a=e.indeterminate,n=e.color,r={root:["root",a&&"indeterminate","color".concat((0,b.Z)(n))]},o=(0,f.Z)(r,M,t);return(0,m.Z)({},t,o)}(B);return(0,N.jsx)(H,(0,m.Z)({type:"checkbox",inputProps:(0,m.Z)({"data-indeterminate":Z},y),icon:p.cloneElement(R,{fontSize:null!=(a=R.props.fontSize)?a:P}),checkedIcon:p.cloneElement(F,{fontSize:null!=(n=F.props.fontSize)?n:P}),ownerState:B,ref:t,className:(0,h.Z)(L.root,C)},S,{classes:L}))})),D=a(35717),A=a(99133),_=a(7575),$=a(59694),Y=a(26085),G=a(84664),J=a(80),K=a(86533),Q=a(99341),U=a(19701),ee=a(96290),te=a(32739),ae=a(46857),ne=a(88837);function re(){var e=(0,G.$)().t,t=(0,p.useState)(!1),a=t[0],r=t[1],o=(0,p.useState)(""),l=o[0],s=o[1],u=p.useState(!1),m=u[0],h=u[1],f=(0,p.useState)({firstName:"",secondName:"",email:"",password:""}),v=f[0],Z=f[1],b=p.useState(!1),g=b[0],x=b[1],k=(0,K.R)({value:v.password}),y="undefined"!=typeof window?(0,$.useLocation)():null;p.useEffect((function(){1==g&&0===l.length&&(h(!0),setTimeout((function(){(0,Y.navigate)((0,J.N)(null==y?void 0:y.pathname,U.y$.Login))}),1500))}),[g]);var w=function(){var e=(0,i.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!C(k)){e.next=18;break}return r(!0),a={firstName:v.firstName,lastName:v.secondName,email:v.email,password:v.password},e.prev=4,e.next=7,(0,Q.z2)(a);case 7:s(""),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0),s(e.t0.message);case 14:return e.prev=14,x(!0),r(!1),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[4,10,14,18]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e,t){Z((function(a){var n;return Object.assign({},a,((n={})[t]=e.target.value,n))}))},C=function(e){return!e.length&&!e.strength};return(0,ne.BX)(ne.HY,{children:[(0,ne.BX)(te.Z,{header:(0,ne.tZ)(n.Field.Text,{name:"register",defaultValue:"Registration"}),onSubmit:function(e){w(e)},children:[(0,ne.tZ)(d.Z,{value:v.firstName,onChange:function(e){return P(e,"firstName")},fullWidth:!0,required:!0,variant:"outlined",label:e("First Name")}),(0,ne.tZ)(d.Z,{value:v.secondName,onChange:function(e){return P(e,"secondName")},fullWidth:!0,required:!0,variant:"outlined",label:e("Last Name")}),(0,ne.tZ)(d.Z,{value:v.email,onChange:function(e){return P(e,"email")},fullWidth:!0,required:!0,variant:"outlined",type:"email",label:e("Email Address")}),(0,ne.tZ)(ae.Z,{value:v.password,handleOnChange:function(e){return P(e,"password")},required:!0,fullWidth:!0,errorObject:k,label:"Password *"}),(0,ne.tZ)(F,{control:(0,ne.tZ)(W,{required:!0,defaultChecked:!0}),label:e("I accept the terms of service.")}),(0,ne.tZ)(ee.Z,{isLoading:a,fullWidth:!0,variant:"contained",type:"submit",text:e("Register Now")}),l.length?(0,ne.BX)("div",{style:{color:_.Z.A700},className:"flex justify-center",children:["*",e(l)]}):null,(0,ne.tZ)("div",{className:"flex justify-center",children:(0,ne.BX)("div",{className:"flex space-x-5",children:[(0,ne.tZ)("p",{children:e("Already have an account?")}),(0,ne.tZ)(Y.Link,{to:U.y$.Login,children:(0,ne.tZ)("p",{className:"cursor-pointer text-primary font-bold",children:e("Log in")})})]})})]}),(0,ne.tZ)(D.Z,{open:m,autoHideDuration:2e3,children:(0,ne.BX)(A.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:["Sucessfully registered with ",v.email]})})]})}var oe=a(21052),ie=a(82385),le=a(17458);function ce(e){return(0,ne.tZ)(le.Z,{pathname:e.path,children:(0,ne.BX)(oe.Z,{children:[(0,ne.tZ)("div",{className:"2xl:hidden",children:(0,ne.tZ)(ie.Z,{})}),(0,ne.BX)(r.ZP,{container:!0,columnSpacing:12,children:[(0,ne.tZ)(r.ZP,{item:!0,md:7,children:(0,ne.tZ)("div",{className:"pt-8 md:pt-0 md:h-screen flex flex-col justify-center",children:(0,ne.tZ)(re,{})})}),(0,ne.tZ)(r.ZP,{item:!0,md:5,children:(0,ne.tZ)(o.Z,{header:(0,ne.tZ)(n.Field.Text,{name:"header",defaultValue:"Start quantum computing with us!"}),content:(0,ne.tZ)(n.Field.Text,{name:"content",defaultValue:"Our intuitive approach makes it easy for beginners to start with quantum computing and allows experts and educators to run complex photonic experiments on real quantum hardware."})})})]})]})})}var de=(0,n.connectPage)(ce,{displayName:"RegisterPage"})}}]);
//# sourceMappingURL=c523b041b9e5db7490a79edaec2f1ade6eac5172-35371aa60ce846961fec.js.map