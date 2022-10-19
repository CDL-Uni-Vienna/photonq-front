"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[870],{4722:function(n,e,t){var r=t(67294),o=t(54374),i=t(78798),a=t(90515),c=t(85893);function u(n){return n.substring(2).toLowerCase()}e.Z=function(n){var e=n.children,t=n.disableReactTree,s=void 0!==t&&t,l=n.mouseEvent,f=void 0===l?"onClick":l,d=n.onClickAway,v=n.touchEvent,m=void 0===v?"onTouchEnd":v,h=r.useRef(!1),g=r.useRef(null),p=r.useRef(!1),Z=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){p.current=!0}),0),function(){p.current=!1}}),[]);var E=(0,o.Z)(e.ref,g),b=(0,i.Z)((function(n){var e=Z.current;Z.current=!1;var t=(0,a.Z)(g.current);!p.current||!g.current||"clientX"in n&&function(n,e){return e.documentElement.clientWidth<n.clientX||e.documentElement.clientHeight<n.clientY}(n,t)||(h.current?h.current=!1:(n.composedPath?n.composedPath().indexOf(g.current)>-1:!t.documentElement.contains(n.target)||g.current.contains(n.target))||!s&&e||d(n))})),w=function(n){return function(t){Z.current=!0;var r=e.props[n];r&&r(t)}},k={ref:E};return!1!==m&&(k[m]=w(m)),r.useEffect((function(){if(!1!==m){var n=u(m),e=(0,a.Z)(g.current),t=function(){h.current=!0};return e.addEventListener(n,b),e.addEventListener("touchmove",t),function(){e.removeEventListener(n,b),e.removeEventListener("touchmove",t)}}}),[b,m]),!1!==f&&(k[f]=w(f)),r.useEffect((function(){if(!1!==f){var n=u(f),e=(0,a.Z)(g.current);return e.addEventListener(n,b),function(){e.removeEventListener(n,b)}}}),[b,f]),(0,c.jsx)(r.Fragment,{children:r.cloneElement(e,k)})}},35717:function(n,e,t){t.d(e,{Z:function(){return z}});var r=t(29439),o=t(4942),i=t(63366),a=t(87462),c=t(67294),u=t(2585),s=t(50565),l=t(4722),f=t(69114),d=t(26247),v=t(25309),m=t(78603),h=t(21672),g=t(53954),p=t(62915),Z=t(85934),E=t(18362),b=t(57893);function w(n){return(0,E.Z)("MuiSnackbarContent",n)}(0,b.Z)("MuiSnackbarContent",["root","message","action"]);var k=t(85893),C=["action","className","message","role"],x=(0,f.ZP)(Z.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(n){var e=n.theme,t="light"===e.palette.mode?.8:.98,r=(0,p._4)(e.palette.background.default,t);return(0,a.Z)({},e.typography.body2,(0,o.Z)({color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),y=(0,f.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(n,e){return e.message}})({padding:"8px 0"}),L=(0,f.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(n,e){return e.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),O=c.forwardRef((function(n,e){var t=(0,v.Z)({props:n,name:"MuiSnackbarContent"}),r=t.action,o=t.className,c=t.message,l=t.role,f=void 0===l?"alert":l,d=(0,i.Z)(t,C),m=t,h=function(n){var e=n.classes;return(0,s.Z)({root:["root"],action:["action"],message:["message"]},w,e)}(m);return(0,k.jsxs)(x,(0,a.Z)({role:f,square:!0,elevation:6,className:(0,u.Z)(h.root,o),ownerState:m,ref:e},d,{children:[(0,k.jsx)(y,{className:h.message,ownerState:m,children:c}),r?(0,k.jsx)(L,{className:h.action,ownerState:m,children:r}):null]}))}));function S(n){return(0,E.Z)("MuiSnackbar",n)}(0,b.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var R=["onEnter","onExited"],M=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],T=(0,f.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["anchorOrigin".concat((0,h.Z)(t.anchorOrigin.vertical)).concat((0,h.Z)(t.anchorOrigin.horizontal))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,a.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,o.Z)({},e.breakpoints.up("sm"),(0,a.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),P=c.forwardRef((function(n,e){var t=(0,v.Z)({props:n,name:"MuiSnackbar"}),o=(0,d.Z)(),f={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},p=t.action,Z=t.anchorOrigin,E=(Z=void 0===Z?{vertical:"bottom",horizontal:"left"}:Z).vertical,b=Z.horizontal,w=t.autoHideDuration,C=void 0===w?null:w,x=t.children,y=t.className,L=t.ClickAwayListenerProps,P=t.ContentProps,z=t.disableWindowBlurListener,j=void 0!==z&&z,B=t.message,N=t.onBlur,D=t.onClose,A=t.onFocus,H=t.onMouseEnter,I=t.onMouseLeave,W=t.open,_=t.resumeHideDuration,F=t.TransitionComponent,X=void 0===F?g.Z:F,G=t.transitionDuration,q=void 0===G?f:G,K=t.TransitionProps,Y=(K=void 0===K?{}:K).onEnter,J=K.onExited,Q=(0,i.Z)(t.TransitionProps,R),U=(0,i.Z)(t,M),V=(0,a.Z)({},t,{anchorOrigin:{vertical:E,horizontal:b}}),$=function(n){var e=n.classes,t=n.anchorOrigin,r={root:["root","anchorOrigin".concat((0,h.Z)(t.vertical)).concat((0,h.Z)(t.horizontal))]};return(0,s.Z)(r,S,e)}(V),nn=c.useRef(),en=c.useState(!0),tn=(0,r.Z)(en,2),rn=tn[0],on=tn[1],an=(0,m.Z)((function(){D&&D.apply(void 0,arguments)})),cn=(0,m.Z)((function(n){D&&null!=n&&(clearTimeout(nn.current),nn.current=setTimeout((function(){an(null,"timeout")}),n))}));c.useEffect((function(){return W&&cn(C),function(){clearTimeout(nn.current)}}),[W,C,cn]);var un=function(){clearTimeout(nn.current)},sn=c.useCallback((function(){null!=C&&cn(null!=_?_:.5*C)}),[C,_,cn]);return c.useEffect((function(){if(!j&&W)return window.addEventListener("focus",sn),window.addEventListener("blur",un),function(){window.removeEventListener("focus",sn),window.removeEventListener("blur",un)}}),[j,sn,W]),c.useEffect((function(){if(W)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)};function n(n){n.defaultPrevented||"Escape"!==n.key&&"Esc"!==n.key||D&&D(n,"escapeKeyDown")}}),[rn,W,D]),!W&&rn?null:(0,k.jsx)(l.Z,(0,a.Z)({onClickAway:function(n){D&&D(n,"clickaway")}},L,{children:(0,k.jsx)(T,(0,a.Z)({className:(0,u.Z)($.root,y),onBlur:function(n){N&&N(n),sn()},onFocus:function(n){A&&A(n),un()},onMouseEnter:function(n){H&&H(n),un()},onMouseLeave:function(n){I&&I(n),sn()},ownerState:V,ref:e,role:"presentation"},U,{children:(0,k.jsx)(X,(0,a.Z)({appear:!0,in:W,timeout:q,direction:"top"===E?"down":"up",onEnter:function(n,e){on(!1),Y&&Y(n,e)},onExited:function(n){on(!0),J&&J(n)}},Q,{children:x||(0,k.jsx)(O,(0,a.Z)({message:B,action:p},P))}))}))}))})),z=P}}]);
//# sourceMappingURL=8039151490c9f0cee65e28eca337a3014fb72be9-ddb9a6ae9ff7390ca456.js.map