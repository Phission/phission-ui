(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{70739:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/redeem",function(){return n(77021)}])},29916:function(e,t,n){"use strict";var s=n(85893),a=n(67294),o=n(58957),i=n.n(o),r=n(62881);t.Z=function(e){var t=e.text,n=e.endDate,o=function(e){var t=Date.parse(e)/1e3-Math.floor(Date.now()/1e3),n=Math.floor(t/86400),s=Math.floor((t-86400*n)/3600),a=Math.floor((t-86400*n-3600*s)/60),o=Math.floor(t-86400*n-3600*s-60*a);m({days:n,hours:s,minutes:a,seconds:o,secondsRemaining:t,set:!0})},u=(0,a.useState)(!1),c=u[0],d=u[1],l=(0,a.useState)({days:0,hours:0,minutes:0,seconds:0,secondsRemaining:0,set:!1}),f=l[0],m=l[1];return(0,a.useEffect)((function(){var e=setInterval((function(){o(n)}),1e3);return function(){return clearInterval(e)}}),[]),c||(o(n),d(!0)),(0,s.jsx)(s.Fragment,{children:f.set?(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:t}),(0,s.jsxs)("div",{className:i().clock,children:[(0,s.jsx)(r.Z,{label:"Days",value:f.days,token:void 0,updater:void 0}),(0,s.jsx)(r.Z,{label:"Hours",value:f.hours,token:void 0,updater:void 0}),(0,s.jsx)(r.Z,{label:"Min",value:f.minutes,token:void 0,updater:void 0}),(0,s.jsx)(r.Z,{label:"Sec",value:f.seconds,token:void 0,updater:void 0})]})]}):""})}},86502:function(e,t,n){"use strict";var s=n(85893),a=n(67294),o=n(35005),i=n(71514),r=n.n(i);t.Z=function(e){var t=e.text,n=e.action,i=e.disabled,u=e.width,c=(0,a.useState)(!1),d=c[0],l=c[1];return(0,a.useEffect)((function(){d&&n().then((function(){l(!1)})).catch((function(e){console.error(e),l(!1)}))}),[d]),(0,s.jsx)(o.Z,{variant:"primary",disabled:d||i,onClick:d?null:function(){return l(!0)},className:r().button,width:u||"200px",children:d?"Loading\u2026":t})}},21957:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s=n(85893),a=n(85933),o=n(8102),i=n(5963),r=n.n(i),u=n(67294),c=n(61744),d=n(99974),l=n(35714),f=n(85827);function m(e){e.label;var t=e.values,n=e.token,i=e.onChangeInput,m=e.onChangeAsset,v=e.onChangeBalance,b=(0,u.useState)(""),x=b[0],p=b[1],h=(0,f.mA)(),_=h.address,j=(h.isConnecting,h.isDisconnected,(0,f.KQ)({addressOrName:_,token:"ETH"!==n.symbol?n.address:"",watch:!0})),w=j.data;j.isError,j.isLoading;return(0,u.useEffect)((function(){if(i){var e=setTimeout((function(){return i(x&&x>=0?x:"0")}),500);return function(){return clearTimeout(e)}}}),[x]),(0,u.useEffect)((function(){v&&v(null===w||void 0===w?void 0:w.value)}),[w]),(0,s.jsxs)("div",{className:r().container,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{min:0,value:x,className:r().swapInput,type:"number",onChange:function(e){return p(e.target.value)}}),(0,s.jsxs)("h4",{className:r().balance,children:["Bal: ",(0,d.RV)(null===w||void 0===w?void 0:w.formatted)]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Z,{className:r().dropdownButton,id:"dropdown-basic-button",title:n.symbol,onSelect:function(e){m(l.s_[e])},children:t.map((function(e,t){return(0,s.jsx)(a.Z.Item,{eventKey:e,children:e},t)}))}),(0,s.jsx)("button",{onClick:function(){if(n.symbol===l.BF.symbol){if((null===w||void 0===w?void 0:w.value)>5e16){var e=w.value-5e16;p(c.formatUnits(e.toString(),n.decimals))}}else p(w.formatted)},children:"Set Max"})]})]})}},62881:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(85893),a=n(39325),o=n.n(a),i=n(99974),r=n(61744),u=n(67294);function c(e){var t=e.label,n=e.value,a=e.token,c=e.symbol,d=e.updater,l=(0,u.useState)(!0),f=l[0],m=l[1];return(0,u.useEffect)((function(){m("$"===c)}),[c]),(0,u.useEffect)((function(){if(d){var e=setInterval((function(){d()}),2e3);return function(){clearInterval(e)}}})),(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)("h4",{children:[f&&c?c+"":"",a&&n?(0,i.RV)(r.formatUnits(n,a.decimals)):n,!f&&c?""+c:""]}),(0,s.jsx)("label",{className:o().label,children:t})]})}},77021:function(e,t,n){"use strict";n.r(t);var s=n(47568),a=n(34051),o=n.n(a),i=n(85893),r=n(19598),u=n.n(r),c=n(29916),d=n(21957),l=n(35714),f=n(67294),m=n(85827),v=n(61744),b=n(2593),x=n(86502);t.default=function(){var e=(0,m.mA)(),t=(e.address,e.isConnecting,e.isDisconnected,(0,f.useState)(l.rp)),n=t[0],a=t[1],r=(0,f.useState)(l.MC[l.rp.symbol]),p=r[0],h=r[1],_=(0,f.useState)(b.O$.from(0)),j=_[0],w=_[1],g=(0,f.useState)(b.O$.from(0)),k=g[0],N=g[1],y=(0,f.useState)({text:"Redeem for WETH",disabled:!0}),E=y[0],S=y[1],C=(0,f.useState)(b.O$.from(0)),I=C[0],Z=(C[1],(0,f.useState)({text:"Redeem",disabled:!0})),M=Z[0],T=Z[1],O=(0,f.useState)(!1),R=O[0];O[1];(0,f.useEffect)((function(){R?M.disabled||T({text:M.text,disabled:!0}):M.disabled&&T({text:M.text,disabled:!1})}),[R]),(0,f.useEffect)((function(){I.gt(0)&&(R||T({text:M.text,disabled:!1}))}),[I]),(0,f.useEffect)((function(){S({text:"Redeem for ".concat(l.MC[n.symbol].redeemToken.symbol),disabled:E.disabled})}),[n]),(0,f.useEffect)((function(){h(l.MC[n.symbol])}),[n]),(0,f.useEffect)((function(){k.gt(0)&&k.lte(j)?E.disabled&&S({text:E.text,disabled:!1}):E.disabled||S({text:E.text,disabled:!0})}),[k]);var B=(0,m.PJ)({addressOrName:p.redeemContract.address,contractInterface:p.redeemContract.abi,functionName:"redeem",args:k}).config,D=(0,m.GG)(B),G=(D.data,D.isLoading,D.isSuccess,D.write),A=(0,m.PJ)({addressOrName:l.vb.address,contractInterface:l.vb.abi,functionName:"redeem",args:I}).config,L=(0,m.GG)(A);L.data,L.isLoading,L.isSuccess,L.write;return(0,i.jsxs)("div",{className:u().container,children:[(0,i.jsxs)("div",{className:u().main,children:[(0,i.jsx)("h4",{children:"Redeem Tokens"}),(0,i.jsx)(d.Z,{label:"Redeem Asset",values:Object.keys(l.MC),token:n,onChangeAsset:a,onChangeInput:function(e){N(v.parseUnits(e,n.decimals))},onChangeBalance:w}),(0,i.jsx)(x.Z,{text:E.text,action:(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===G||void 0===G?void 0:G();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),disabled:E.disabled||!G,width:void 0})]}),(0,i.jsx)("div",{className:u().main,children:(0,i.jsx)(c.Z,{text:"Treasury Redemption",endDate:"2022-09-20T00:00:00Z"})})]})}},58957:function(e){e.exports={clock:"countdown_clock__bfk5V"}},71514:function(e){e.exports={button:"loadingButton_button__f0GQ_"}},5963:function(e){e.exports={container:"swapInput_container__y2UWD",swapInput:"swapInput_swapInput__cssZy",balance:"swapInput_balance__S3DUq",dropdownButton:"swapInput_dropdownButton__ZWzTk",value:"swapInput_value__zQtjN"}},39325:function(e){e.exports={container:"value_container__awOM2",label:"value_label__BIgGE"}},19598:function(e){e.exports={main:"redeem_main__jLYT6",buttonGroup:"redeem_buttonGroup__Y1yoI"}}},function(e){e.O(0,[357,102,0,774,888,179],(function(){return t=70739,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=redeem-e920ce1f630407f0.js.map