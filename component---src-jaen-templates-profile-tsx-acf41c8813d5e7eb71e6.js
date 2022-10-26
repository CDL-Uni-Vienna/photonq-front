"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[4929,3610],{96290:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(63366),a=n(21770),i=n(8304),c=n(84664),s=n(88837),u=["isLoading","text"];function o(e){var t=e.isLoading,n=e.text,o=(0,r.Z)(e,u),l=(0,c.$)().t;return(0,s.tZ)(a.Z,Object.assign({},o,{variant:"contained",children:t?(0,s.tZ)(i.Z,{size:20,style:{color:"white"}}):l(n)}))}},49487:function(e,t,n){n.r(t);var r=n(2436),a=n(15919);t.default=(0,r.connectTemplate)(a.ProfilePage,{displayName:"Profile",children:[]})},15919:function(e,t,n){n.r(t),n.d(t,{ProfilePage:function(){return H},default:function(){return A}});var r=n(2436),a=n(53420),i=n(91169),c=n(82385),s=n(17458),u=n(54482),o=n(15861),l=n(64687),d=n.n(l),f=n(15744),h=n(88568),Z=n(10819),p=n(75437),m=n(99911),v=n(35717),x=n(99133),y=n(7575),g=n(72780),w=n(67294),k=n(84664),b=n(94341),S=n(96290),P=n(2585),N=n(88837);function C(e){var t=e.children,n=e.withSpaceBetween;return(0,N.tZ)("div",{className:(0,P.Z)("border p-6",{"space-y-5":n}),children:t})}function B(e){var t=e.children,n=e.withBottomSpace;return(0,N.tZ)("div",{className:(0,P.Z)("pt-16 px-8 space-y-3",{"pb-16":n}),children:t})}var D=n(64090),L=n(21770);function X(e){var t=e.header,n=e.withEditButton,r=e.onClick,a=(0,k.$)().t;return(0,N.BX)("div",{className:"flex justify-between",children:[(0,N.tZ)(D.Z,{variant:"h5",component:"h2",fontWeight:"bold",children:a(t)}),n&&(0,N.tZ)(L.Z,{onClick:r,children:a("Edit")})]})}var j=["firstName","lastName","email"];function z(){var e=(0,k.$)().t,t=(0,w.useState)(""),n=t[0],r=t[1],a=(0,w.useContext)(b.V),i=a.value,c=a.setValue,s=(0,w.useState)(!1),u=s[0],l=s[1],P=(0,w.useState)(!1),D=P[0],L=P[1],z=(0,w.useState)(!1),H=z[0],A=z[1],O=(0,w.useState)(!1),R=O[0],V=O[1],$=(0,w.useState)(!1),_=$[0],E=$[1],G=(0,w.useState)(!1),U=G[0],W=G[1],I=(0,w.useState)(!1),M=I[0],T=I[1],q=(0,w.useState)(!1),F=q[0],J=q[1],K=(0,w.useState)(!1),Q=K[0],Y=K[1],ee=function(){J(!1),Y(!1),W(!1)},te=function(){var e=(0,o.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.prev=1,r(""),e.next=5,(0,g.$2)({additional:JSON.stringify({dataRequested:!0})});case 5:ee(),T(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(e.t0.message);case 12:return e.prev=12,V((function(){return!1})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=(0,o.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),l(!1),e.prev=2,r(""),e.next=6,(0,g.sG)({firstName:i.firstName||"",lastName:i.lastName||""});case 6:ee(),T(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r(e.t0.message);case 13:return e.prev=13,L((function(){return!1})),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=(0,o.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,r(""),e.next=5,(0,g.tm)({email:i.email});case 5:ee(),Y(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(e.t0.message);case 12:return e.prev=12,E((function(){return!1})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=(0,o.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.prev=1,r(""),e.next=5,(0,g.c0)({email:i.email});case 5:ee(),J(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(e.t0.message);case 12:return e.prev=12,A((function(){return!1})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();if(!i)return null;return(0,N.BX)(B,{withBottomSpace:!0,children:[(0,N.tZ)(X,{header:e("Details")}),(0,N.BX)(C,{children:[(0,N.tZ)(f.Z,{children:(0,N.tZ)(h.Z,{children:Object.keys(i).filter((function(e){return j.includes(e)})).map((function(t,n){return(0,N.BX)(Z.Z,{children:[(0,N.tZ)(p.Z,{children:"email"===t?"E-MAIL":e(t).toUpperCase()}),(0,N.tZ)(p.Z,{children:"email"!==t&&u?(0,N.tZ)(m.Z,{onChange:function(e){return function(e,t){c((function(n){var r;return Object.assign({},n,((r={})[t]=e.target.value,r))}))}(e,t)},value:i[t],variant:"standard",fullWidth:!0}):i[t]})]},n)}))})}),(0,N.tZ)(S.Z,{sx:{mt:3,mr:2},onClick:function(){return u?ne():l(!u)},text:e("Update Informations"),isLoading:D,size:"medium",variant:"contained"}),(0,N.tZ)(S.Z,{sx:{mt:3,mr:2},onClick:function(){return ae()},disabled:F,text:e("Update password"),isLoading:H,size:"medium",variant:"contained"}),(0,N.tZ)(S.Z,{sx:{mt:3,mr:2},onClick:function(){return te()},disabled:U,text:e("Send GDPR Data"),isLoading:R,size:"medium",variant:"contained"}),(0,N.tZ)(S.Z,{sx:{mt:3,mr:2},onClick:function(){return re()},disabled:Q,text:e("Delete account"),isLoading:_,size:"medium",style:Q?void 0:{backgroundColor:y.Z.A700},variant:"contained"}),n.length?(0,N.BX)("div",{style:{color:y.Z.A700},className:"flex justify-center",children:["*",e(n)]}):null]}),(0,N.tZ)(v.Z,{open:F,autoHideDuration:2e3,children:(0,N.tZ)(x.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:"Reset password email sent! Please check your inbox."})}),(0,N.tZ)(v.Z,{open:U,autoHideDuration:2e3,children:(0,N.tZ)(x.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:"GDPR data email sent! Please check your inbox."})}),(0,N.tZ)(v.Z,{open:M,autoHideDuration:2e3,children:(0,N.tZ)(x.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:"Saved to Account."})}),(0,N.tZ)(v.Z,{open:Q,autoHideDuration:2e3,children:(0,N.tZ)(x.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:"Delete account email sent! Please check your inbox."})})]})}function H(e){return(0,N.tZ)(s.Z,{pathname:e.path,children:(0,N.BX)(a.Z,{maxWidth:"xl",children:[(0,N.tZ)(c.Z,{}),(0,N.tZ)(u.Z,{header:(0,N.tZ)(r.Field.Text,{name:"sectionHeader",defaultValue:"My Profile"}),withVerticalSpacing:!0}),(0,N.tZ)(i.Z,{children:(0,N.tZ)(z,{})}),(0,N.tZ)(c.Z,{})]})})}var A=(0,r.connectPage)(H,{displayName:"ProfilePage"})}}]);
//# sourceMappingURL=component---src-jaen-templates-profile-tsx-acf41c8813d5e7eb71e6.js.map