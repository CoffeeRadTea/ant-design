webpackJsonp([30,135],{221:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}Object.defineProperty(a,"__esModule",{value:!0});var p=s(1),e=t(p),c=s(3),u=t(c),i=e["default"].createClass({displayName:"Notice",propTypes:{duration:p.PropTypes.number,onClose:p.PropTypes.func,children:p.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var n,a=this.props,s=a.prefixCls+"-notice",t=(n={},o(n,""+s,1),o(n,s+"-closable",a.closable),o(n,a.className,!!a.className),n);return e["default"].createElement("div",{className:(0,u["default"])(t),style:a.style},e["default"].createElement("div",{className:s+"-content"},a.children),a.closable?e["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:s+"-close"},e["default"].createElement("span",{className:s+"-close-x"})):null)}});a["default"]=i,n.exports=a["default"]},222:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function p(){return"rcNotification_"+w+"_"+h++}Object.defineProperty(a,"__esModule",{value:!0});var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},c=s(1),u=t(c),i=s(2),l=t(i),r=s(37),k=t(r),f=s(184),d=t(f),m=s(3),g=t(m),y=s(221),v=t(y),h=0,w=Date.now(),b=u["default"].createClass({displayName:"Notification",propTypes:{prefixCls:c.PropTypes.string,transitionName:c.PropTypes.string,animation:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.object]),style:c.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a},add:function(n){var a=n.key=n.key||p();this.setState(function(s){var t=s.notices;if(!t.filter(function(n){return n.key===a}).length)return{notices:t.concat(n)}})},remove:function(n){this.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},render:function(){var n,a=this,s=this.props,t=this.state.notices.map(function(n){var t=(0,d["default"])(a.remove.bind(a,n.key),n.onClose);return u["default"].createElement(v["default"],e({prefixCls:s.prefixCls},n,{onClose:t}),n.content)}),p=(n={},o(n,s.prefixCls,1),o(n,s.className,!!s.className),n);return u["default"].createElement("div",{className:(0,g["default"])(p),style:s.style},u["default"].createElement(k["default"],{transitionName:this.getTransitionName()},t))}});b.newInstance=function(n){var a=n||{},s=document.createElement("div");document.body.appendChild(s);var t=l["default"].render(u["default"].createElement(b,a),s);return{notice:function(n){t.add(n)},removeNotice:function(n){t.remove(n)},component:t,destroy:function(){l["default"].unmountComponentAtNode(s),document.body.removeChild(s)}}},a["default"]=b,n.exports=a["default"]},223:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var o=s(222),p=t(o);a["default"]=p["default"],n.exports=a["default"]},329:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function o(){return d?d:d=l["default"].newInstance({prefixCls:"ant-notification",style:{top:f,right:0}})}function p(n){var a=n.prefixCls||"ant-notification-notice",s=void 0;s=void 0===n.duration?m:n.duration;var t="";switch(n.icon){case"success":t="check-circle-o";break;case"info":t="info-circle-o";break;case"error":t="cross-circle-o";break;case"warning":t="exclamation-circle-o";break;default:t="info-circle"}o().notice({content:u["default"].createElement("div",{className:a+"-content "+(n.icon?a+"-with-icon":"")},n.icon?u["default"].createElement(k["default"],{className:a+"-icon "+a+"-icon-"+n.icon,type:t}):null,u["default"].createElement("div",{className:a+"-message"},n.message),u["default"].createElement("div",{className:a+"-description"},n.description),n.btn?u["default"].createElement("span",{className:a+"-btn"},n.btn):null),duration:s,closable:!0,onClose:n.onClose,key:n.key,style:{}})}Object.defineProperty(a,"__esModule",{value:!0});var e=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},c=s(1),u=t(c),i=s(223),l=t(i),r=s(8),k=t(r),f=24,d=void 0,m=4.5,g={open:function(n){p(n)},close:function(n){d&&d.removeNotice(n)},config:function(n){"top"in n&&(f=n.top),"duration"in n&&(m=n.duration)},destroy:function(){d&&(d.destroy(),d=null)}};["success","info","warning","error"].forEach(function(n){g[n]=function(a){return g.open(e({},a,{icon:n}))}}),g.warn=g.warning,a["default"]=g,n.exports=a["default"]},330:function(n,a,s){"use strict";s(5),s(1379)},840:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(7),s(6)),p=t(o),e=(s(330),s(329)),c=t(e),u=s(1),i=t(u),l=s(2);t(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/notification/demo/basic.md",id:"components-notification-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){c["default"].open({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848"})};return i["default"].createElement(p["default"],{type:"primary",onClick:n},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846")}}},841:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(7),s(6)),p=t(o),e=(s(330),s(329)),c=t(e),u=s(1),i=t(u),l=s(2);t(l);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4",["code","4.5s"],"\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a ",["code","0"]," \u5373\u53ef\u3002"]],meta:{order:1,title:"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6",filename:"components/notification/demo/duration.md",id:"components-notification-demo-duration"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> args <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\'</span><span class="token punctuation" >,</span>\n    duration<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span>args<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){var n={message:"\u8fd9\u662f\u6807\u9898",description:"\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed",duration:0};c["default"].open(n)};return i["default"].createElement(p["default"],{type:"primary",onClick:n},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846")}}},842:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(7),s(6)),p=t(o),e=(s(330),s(329)),c=t(e),u=s(1),i=t(u),l=s(2);t(l);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u6837\u5f0f\u548c\u6587\u5b57\u3002"]],meta:{order:4,title:"\u81ea\u5b9a\u4e49",filename:"components/notification/demo/with-btn.md",id:"components-notification-demo-with-btn"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> close <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u6211\u88ab\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u5173\u95ed\u4e86\uff01\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> key <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`open</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>Date<span class="token punctuation" >.</span><span class="token function" >now</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btnClick <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// \u9690\u85cf\u63d0\u9192\u6846</span>\n    notification<span class="token punctuation" >.</span><span class="token function" >close</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btn <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>btnClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      \u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u5e76\u89e6\u53d1\u56de\u8c03\u51fd\u6570\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n    btn<span class="token punctuation" >,</span>\n    key<span class="token punctuation" >,</span>\n    onClose<span class="token punctuation" >:</span> close<span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\nmountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){console.log("\u6211\u88ab\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u5173\u95ed\u4e86\uff01")},a=function(){var a="open"+Date.now(),s=function(){c["default"].close(a)},t=i["default"].createElement(p["default"],{type:"primary",size:"small",onClick:s},"\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u5e76\u89e6\u53d1\u56de\u8c03\u51fd\u6570");c["default"].open({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848",btn:t,key:a,onClose:n})};return i["default"].createElement("div",null,i["default"].createElement(p["default"],{type:"primary",onClick:a},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846"))}}},843:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(7),s(6)),p=t(o),e=(s(330),s(329)),c=t(e),u=s(1),i=t(u),l=s(2);t(l);n.exports={content:[["p","\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"]],meta:{order:2,title:"\u5e26\u6709Icon\u7684\u901a\u77e5\u63d0\u9192\u6846",filename:"components/notification/demo/with-icon.md",id:"components-notification-demo-with-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotificationWithIcon <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>type<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    notification<span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n      description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'success\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'info\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6d88\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'warning\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8b66\u544a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'error\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u9519\u8bef<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){return function(){c["default"][n]({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848"})}};return i["default"].createElement("div",null,i["default"].createElement(p["default"],{onClick:n("success")},"\u6210\u529f"),i["default"].createElement(p["default"],{onClick:n("info")},"\u6d88\u606f"),i["default"].createElement(p["default"],{onClick:n("warning")},"\u8b66\u544a"),i["default"].createElement(p["default"],{onClick:n("error")},"\u9519\u8bef"))},style:"\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"}},1115:function(n,a,s){n.exports={basic:s(840),duration:s(841),"with-btn":s(842),"with-icon":s(843)}},1379:function(n,a){}});