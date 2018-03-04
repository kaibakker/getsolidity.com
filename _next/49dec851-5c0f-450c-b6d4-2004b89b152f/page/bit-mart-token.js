module.exports=__NEXT_REGISTER_PAGE("/bit-mart-token",function(){var e=webpackJsonp([29],{19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(21);var a=n.n(r);var i=n(2);var o=n.n(i);var s=n(17);var l=n.n(s);var c=n(11);var u=n.n(c);var p=n(0);var f=n.n(p);var h=n(16);var d=n.n(h);var m=n(30);var y=n(35);var v=n(31);var b=n(36);var x=n(38);var g=n(39);var E=n(40);var w=n(41);var j=n(32);var _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r))e[r]=n[r]}return e};function k(e,t){var n={};for(var r in e){if(t.indexOf(r)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,r))continue;n[r]=e[r]}return n}var O=n(16),I=O.parse;var T=function(e,t){var n=[];n.push({id:"payable",name:"payable functions",posts:e.filter(function(e){var t=e.type,n=e.payable;return"function"===t&&n}).map(function(e){return{abi:e,description:{},type:"ABIDescription"}})});n.push({id:"non-payable",name:"Non-payable functions",posts:e.filter(function(e){var t=e.type,n=e.constant,r=e.payable;return"function"===t&&!r&&!n}).map(function(e){return{abi:e,description:{},type:"ABIDescription"}})});n.push({id:"constant",name:"constant functions",posts:e.filter(function(e){var t=e.type,n=e.constant;return"function"===t&&n}).map(function(e){return{abi:e,description:{},type:"ABIDescription"}})});n.push({id:"constructor",name:"constructor",posts:e.filter(function(e){var t=e.type;return"constructor"===t}).map(function(e){return{abi:e,description:{},type:"ABIDescription"}})});n.push({id:"fallback",name:"fallback",posts:e.filter(function(e){var t=e.type;return"fallback"===t}).map(function(e){return{abi:e,description:{},type:"ABIDescription"}})});return n.map(function(e){var n=e.posts,r=k(e,["posts"]);return _({},r,{posts:n.map(function(e){if(e.abi){var n=e.abi.name||e.abi.type;var a=t+"#"+r.id+"/"+n;var i=n.charAt(0).toUpperCase()+n.slice(1).replace(/([A-Z])/g,function(e){return" "+e});var o=I(a),s=o.hash;var l={};return _({},e,{id:n,name:i,href:a,hash:s,url:"/",description:l})}else{var c=I(e.href),u=c.hash;return _({},e,{hash:u})}})})})};function C(e){return e}var N=n(3);var R=n.n(N);var P=n(42);var M=n(5);var S=n(43);var L=n(15);var A=n(1);var B=n(8);var H=function(){function e(e,t){var n=[];var r=true;var a=false;var i=void 0;try{for(var o=e[Symbol.iterator](),s;!(r=(s=o.next()).done);r=true){n.push(s.value);if(t&&n.length===t)break}}catch(e){a=true;i=e}finally{try{if(!r&&o["return"])o["return"]()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;else if(Symbol.iterator in Object(t))return e(t,n);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function D(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var W=function(e){D(t,e);function t(){z(this,t);return q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}F(t,[{key:"getChildContext",value:function e(){return{id:this.getId()}}},{key:"getId",value:function e(){var t=this.props.hash||this.context.hash;return t?t.slice(1):null}},{key:"render",value:function e(){var t=this.props,n=t.hideTitle,r=t.hideBottom,a=t.title;var i=["section"];if(!a)a=this.context.name;if(n)i.push("hide-title");if(r)i.push("hide-bottom");return f.a.createElement("div",{className:"jsx-3717813259"+" "+(i.join(" ")||"")},f.a.createElement("div",{className:"jsx-3717813259"+" "+"block title"},f.a.createElement("div",{className:"jsx-3717813259"+" "+"copy"},f.a.createElement(P["a"],{lean:true,offsetTop:95,id:this.getId()},f.a.createElement("h1",{className:"jsx-3717813259"},a))),f.a.createElement("div",{className:"jsx-3717813259"+" "+"example empty"})),this.props.contents.map(function(e,t){var n=H(e,2),r=n[0],a=n[1];return f.a.createElement("div",{key:t,className:"jsx-3717813259"+" "+"block"},f.a.createElement("div",{className:"jsx-3717813259"+" "+"copy"},r),f.a.createElement("div",{className:"jsx-3717813259"+" "+("example"+(a?"":" empty")||"")},f.a.createElement(V,null,a)))}),f.a.createElement(o.a,{styleId:"3717813259",css:[".section.jsx-3717813259{-webkit-flex:1;-ms-flex:1;flex:1;position:relative;}","h1.jsx-3717813259{color:#000;font-size:26px;line-height:1.1;font-weight:400;margin:0 0 30px 0;padding:0;}",".block.jsx-3717813259{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;}",".copy.jsx-3717813259{background:#fafafa;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".example.jsx-3717813259{background:#000;color:#999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".example.jsx-3717813259 *::selection{background-color:#f81ce5;color:#fff;}",".copy.jsx-3717813259,.example.jsx-3717813259{padding:0 50px;width:50%;}",".block.jsx-3717813259:first-child .copy.jsx-3717813259,.block.jsx-3717813259:first-child .example.jsx-3717813259{padding-top:35px;}",".block.jsx-3717813259:last-child .copy.jsx-3717813259,.block.jsx-3717813259:last-child .example.jsx-3717813259{padding-bottom:15px;}",".section.hide-bottom.jsx-3717813259 .block.jsx-3717813259:last-child .copy.jsx-3717813259,.section.hide-bottom.jsx-3717813259 .block.jsx-3717813259:last-child .example.jsx-3717813259{padding-bottom:0;}",".section.hide-title.jsx-3717813259 .title.jsx-3717813259{display:none;}","@media screen and (max-width:950px){.section.jsx-3717813259{width:100%;margin-left:0;}}","@media screen and (min-width:700px){.section.jsx-3717813259::after{height:1px;display:block;content:'';width:100%;background-image:linear-gradient(90deg,#eaeaea 50%,#333 50%);}.section.hide-bottom.jsx-3717813259::after{display:none;}.example.jsx-3717813259 div:first-child>pre{margin-top:0 !important;}}","@media screen and (max-width:700px){.block.jsx-3717813259{display:block;}.copy.jsx-3717813259,.example.jsx-3717813259{padding:0 20px;width:auto;}.copy.jsx-3717813259{background:#fff;}.example.jsx-3717813259{padding-top:20px;padding-bottom:20px;}.example.empty.jsx-3717813259{display:none;}}"]}))}}]);return t}(f.a.PureComponent);var U=W;W.childContextTypes={id:u.a.string};W.contextTypes={hash:u.a.string,name:u.a.string};var V=function(e){D(t,e);function t(){z(this,t);return q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}F(t,[{key:"getChildContext",value:function e(){return{darkBg:true}}},{key:"render",value:function e(){return this.props.children||null}}]);return t}(f.a.PureComponent);V.childContextTypes={darkBg:u.a.bool};var $=function(e){D(t,e);function t(){z(this,t);return q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}F(t,[{key:"render",value:function e(){var t=this.props,n=t.children,r=t.id;return f.a.createElement(P["a"],{lean:true,offsetTop:175,id:Y(this.context.id,{children:n,id:r})},f.a.createElement(L["a"],null,n))}}]);return t}(f.a.PureComponent);$.contextTypes={id:u.a.string};var G=function(e){D(t,e);function t(){z(this,t);return q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}F(t,[{key:"render",value:function e(){var t=this.props,n=t.children,r=t.id;return f.a.createElement(P["a"],{lean:true,offsetTop:175,id:Y(this.context.id,{children:n,id:r})},f.a.createElement(L["b"],null,n))}}]);return t}(f.a.PureComponent);G.contextTypes={id:u.a.string};var J=function(e){D(t,e);function t(){z(this,t);return q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}F(t,[{key:"render",value:function e(){return f.a.createElement("h4",{className:"jsx-948301033"},this.props.children,f.a.createElement(o.a,{styleId:"948301033",css:["h4.jsx-948301033{margin-top:50px;}"]}))}}]);return t}(f.a.PureComponent);var K=function e(t){var n=t.children;var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.darkBg;return f.a.createElement("blockquote",{className:"jsx-2660523106"+" "+((a?"dark":"")||"")},n,f.a.createElement(o.a,{styleId:"2660523106",css:["blockquote.jsx-2660523106{padding:10px 20px;border-left:5px solid #000;margin:50px 0;color:#000;}","blockquote.dark.jsx-2660523106{border-left-color:#fff;color:#888;}","blockquote.jsx-2660523106 div{margin:0;}"]}))};K.contextTypes={darkBg:u.a.bool};var X={p:M["c"],strong:M["b"].B,ul:S["b"],li:S["a"],h2:$,h3:G,h4:J,code:A["b"],a:B["b"],blockquote:K};function Y(e,t){var n=t.id,r=t.children;if(!n){var a="string"===typeof r?r:r.join("");n=a.toLowerCase().replace(/[\s]/g,"-").replace(/[?!]/g,"")}return e+"/"+n}var Z=n(4);var Q=n.n(Z);var ee=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function te(e,t){var n={};for(var r in e){if(t.indexOf(r)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,r))continue;n[r]=e[r]}return n}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function ae(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var ie=function(e){ae(t,e);function t(){var e;var n,r,a;ne(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=(n=(r=re(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r),r.state={hasMoreScroll:false},r.scrollerNode=null,r.onScroll=function(){r.updateScrollState()},r.onWindowResize=Q()(function(){r.updateScrollState()},250),n),re(r,a)}ee(t,[{key:"updateScrollState",value:function e(){var t=this.scrollerNode.scrollWidth-this.scrollerNode.clientWidth-this.scrollerNode.scrollLeft>10;if(this.state.hasMoreScroll!==t)this.setState({hasMoreScroll:t})}},{key:"componentDidMount",value:function e(){window.addEventListener("resize",this.onWindowResize);this.updateScrollState()}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function e(){var t=this;var n=this.state.hasMoreScroll;return f.a.createElement("main",{className:"jsx-966730057"+" "+((n?"has-more-scroll":null)||"")},f.a.createElement("div",{ref:function e(n){return t.scrollerNode=n},onScroll:this.onScroll,className:"jsx-966730057"+" "+"scroller"},this.props.children),f.a.createElement("div",{className:"jsx-966730057"+" "+"gradient"}),f.a.createElement(o.a,{styleId:"966730057",css:["main.jsx-966730057{position:relative;}",".scroller.jsx-966730057{overflow-x:auto;}",".gradient.jsx-966730057{background:linear-gradient( to right, rgba(255,255,255,0), rgba(255,255,255,1) );opacity:0;pointer-events:none;position:absolute;-webkit-transition:opacity ease-in 300ms;transition:opacity ease-in 300ms;top:0;right:0;bottom:0;width:100px;}",".has-more-scroll.jsx-966730057 .gradient.jsx-966730057{opacity:1;}"]}))}}]);return t}(f.a.PureComponent);function oe(e){var t=e.children,n=e.head;return f.a.createElement(ie,null,f.a.createElement("table",null,n&&f.a.createElement("thead",null,n),f.a.createElement("tbody",null,t)))}function se(e){var t=e.children;return f.a.createElement(oe,{head:f.a.createElement(ue,null,f.a.createElement(pe,{isHead:true},"Key"),f.a.createElement(fe,{isHead:true},"Type"),f.a.createElement(pe,{isHead:true},"Required"),f.a.createElement(me,{isHead:true},"Description"))},t)}function le(e){var t=e.children;return f.a.createElement(oe,{head:f.a.createElement(ue,null,f.a.createElement(pe,{isHead:true},"Key"),f.a.createElement(fe,{isHead:true},"Type"),f.a.createElement(me,{isHead:true},"Description"))},t)}function ce(e){var t=e.children;return f.a.createElement(oe,{head:f.a.createElement(ue,null,f.a.createElement(pe,{isHead:true},"Header"),f.a.createElement(pe,{isHead:true},"Description"))},t)}function ue(e){var t=e.children;return f.a.createElement("tr",null,t)}function pe(e){var t=e.children,n=e.isHead,r=e.center;var a=r?"center":null;if(n)return f.a.createElement("th",{className:"jsx-2865217026"+" "+(a||"")},t,f.a.createElement(o.a,{styleId:"2865217026",css:["th.jsx-2865217026{padding:12px 20px 12px 0;color:#999;font-size:12px;font-weight:normal;line-height:24px;text-align:left;text-transform:uppercase;vertical-align:top;}","th.jsx-2865217026:last-child{padding-right:0;}",".center.jsx-2865217026{text-align:center;}"]}));else return f.a.createElement("td",{className:"jsx-1079690370"+" "+(a||"")},t,f.a.createElement(o.a,{styleId:"1079690370",css:["td.jsx-1079690370{border-bottom:1px solid #eaeaea;font-size:14px;line-height:24px;padding:12px 20px 12px 0;vertical-align:top;}","td.jsx-1079690370:last-child{padding-right:0;}",".center.jsx-1079690370{text-align:center;}"]}))}function fe(e){var t=e.children,n=te(e,["children"]);return f.a.createElement(pe,n,f.a.createElement("a",{href:"/api#api-basics/types",className:"jsx-3299994989"+" "+((n.isHead?"head":null)||"")},f.a.createElement("span",{className:"jsx-3299994989"},t),n.isHead?f.a.createElement(ye,null):null,f.a.createElement(o.a,{styleId:"3299994989",css:["a.jsx-3299994989{text-decoration:none;color:#666;font-size:inherit;}","a.head.jsx-3299994989{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","a.jsx-3299994989:hover,a.head.jsx-3299994989:hover{color:#000;text-decoration:underline dashed;}","a.head.jsx-3299994989 span.jsx-3299994989{margin-right:5px;}","a.head.jsx-3299994989:hover svg circle{stroke:#000;}","a.head.jsx-3299994989:hover svg text{fill:#000;}"]})))}function he(e){var t=e.children,n=te(e,["children"]);return f.a.createElement(pe,n,f.a.createElement("b",null,t))}function de(e){var t=e.status,n=void 0===t?false:t,r=te(e,["status"]);return f.a.createElement(pe,r,n?"Yes":"No")}function me(e){var t=e.children,n=te(e,["children"]);return f.a.createElement(pe,n,f.a.createElement("div",{className:"jsx-1611459936"},t),f.a.createElement(o.a,{styleId:"1611459936",css:["@media screen and (max-width:700px){div.jsx-1611459936{width:calc(100vw - 42px);}}"]}))}var ye=function(e){ae(t,e);function t(){ne(this,t);return re(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}ee(t,[{key:"shouldComponentUpdate",value:function e(){return false}},{key:"render",value:function e(){return f.a.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},f.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},f.a.createElement("g",{transform:"translate(-254.000000, -132.000000)"},f.a.createElement("g",{transform:"translate(255.000000, 133.000000)"},f.a.createElement("circle",{stroke:"#EAEAEA",cx:"7",cy:"7",r:"7"}),f.a.createElement("text",{fontFamily:"SFUIText-Bold, SF UI Text",fontSize:"10",fontWeight:"bold",fill:"#999999"},f.a.createElement("tspan",{x:"4.25",y:"10.5"},"?"))))))}}]);return t}(f.a.Component);var ve=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function ge(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var Ee=function e(t){return function(e){ge(n,e);function n(){be(this,n);return xe(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}ve(n,[{key:"shouldComponentUpdate",value:function e(){return false}},{key:"render",value:function e(){return t(this.props)}}]);return n}(f.a.Component)};var we=Ee;function je(e){var t=e.params,n=e.maxLengthForName,r=e.whiteSpace;return t.map(function(e){if(n<t.length||!e.name)return""+e.type;else return e.type+" "+e.name}).join(false==r?",":", ")}function _e(e,t){var n={};for(var r in e){if(t.indexOf(r)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,r))continue;n[r]=e[r]}return n}function ke(e){var t=e.children,n=e.abi,r=e.description,a=_e(e,["children","abi","description"]);if(!n.inputs)n.inputs=[];if(!n.outputs)n.outputs=[];var i=[f.a.createElement(A["a"],null,n.type," ",n.name,"(",f.a.createElement(je,{params:n.inputs,maxLengthForName:10}),") ",n.constant&&"constant ",n.payable&&"payable ","returns (",f.a.createElement(je,{params:n.outputs,maxLengthForName:10}),")")];if(n.inputs.length>0){i.push(f.a.createElement(L["c"],null,"Inputs ",f.a.createElement(A["b"],{floatRight:true},f.a.createElement(je,{params:n.inputs,maxLengthForName:2}))));if(r.inputs)i.push(f.a.createElement(oe,null,n.inputs.map(function(e){return f.a.createElement(ue,null,f.a.createElement(pe,null,f.a.createElement("i",null,e.type),f.a.createElement("br",null),f.a.createElement("b",null,e.name)),f.a.createElement(pe,null,r.inputs&&r.inputs[0]))})))}i.push(f.a.createElement(L["c"],null,"Returns ",f.a.createElement(A["b"],{floatRight:true},f.a.createElement(je,{params:n.outputs,maxLengthForName:2}))));if(r.returns)i.push(f.a.createElement(M["b"],null,r.returns));i.push(f.a.createElement(L["c"],null,"Properties ",f.a.createElement(A["b"],{floatRight:true},n.constant&&"constant ",n.payable&&"payable ",!n.payable&&!n.constant&&"non-payable ",n.type)));if(r.properties)i.push(f.a.createElement(M["b"],null,r.properties));return i}function Oe(e,t){var n={};for(var r in e){if(t.indexOf(r)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,r))continue;n[r]=e[r]}return n}function Ie(e){if(e.name)return e.name.toUpperCase();else return"ITEM"}function Te(e){var t=e.children,n=e.abi,r=Oe(e,["children","abi"]);return f.a.createElement(A["a"],null,n.inputs.map(function(e){return"$ "+Ie(e)+"=...\n"}).join("")+"$ CONTRACT=..."+'\n$ seth send $CONTRACT "'+n.name+"(",f.a.createElement(je,{params:n.inputs,maxLengthForName:0,whiteSpace:false}),')"'+n.inputs.map(function(e){return" $"+Ie(e)}).join(""))}function Ce(e,t){var n={};for(var r in e){if(t.indexOf(r)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,r))continue;n[r]=e[r]}return n}function Ne(e){var t=e.children,n=e.abi,r=Ce(e,["children","abi"]);return f.a.createElement(A["a"],null,JSON.stringify(n,null,2))}function Re(e,t){var n={};for(var r in e){if(t.indexOf(r)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,r))continue;n[r]=e[r]}return n}function Pe(e){var t=e.children,n=e.abi,r=Re(e,["children","abi"]);return[f.a.createElement(Ne,{abi:n})]}function Me(e){var t=e.abi,n=e.description;return f.a.createElement(U,{contents:[[f.a.createElement("div",null,n.body,f.a.createElement(ke,{abi:t,description:n})),f.a.createElement(Pe,{abi:t})]]})}var Se=we(Me);var Le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function Ae(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i);var s=o.value}catch(e){n(e);return}if(o.done)e(s);else return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function Be(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}function He(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fe(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function ze(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}if("undefined"!==typeof window)n(20);var qe=t["default"]=function(e,t){var n=function(n){ze(r,n);function r(n){He(this,r);var a=Fe(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));a.state={hash:null};a.contentNode=null;a.observer=null;a.data=T(e,"/"+t.replace(/\s+/g,"-").toLowerCase());a.onHashChange=a.onHashChange.bind(a);return a}Le(r,[{key:"componentDidMount",value:function e(){var t=this;window.addEventListener("hashchange",this.onHashChange);var n=[].concat(Be(this.contentNode.querySelectorAll("[id]")));var r=new Set;this.observer=new IntersectionObserver(function(e){var a=true;var i=false;var o=void 0;try{for(var s=e[Symbol.iterator](),l;!(a=(l=s.next()).done);a=true){var c=l.value;var u=c.isIntersecting,p=c.target;if(u)r.add(p);else r.delete(p)}}catch(e){i=true;o=e}finally{try{if(!a&&s.return)s.return()}finally{if(i)throw o}}if(!r.size)return;var f=[].concat(Be(r)).sort(function(e,t){return n.indexOf(e)-n.indexOf(t)});var h="#"+(f[0].id||"");if(location.hash!==h){Ue(h);t.onHashChange()}});var a=true;var i=false;var o=void 0;try{for(var s=n[Symbol.iterator](),l;!(a=(l=s.next()).done);a=true){var c=l.value;this.observer.observe(c)}}catch(e){i=true;o=e}finally{try{if(!a&&s.return)s.return()}finally{if(i)throw o}}var u=window.location.hash;this.setState({hash:u})}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("hashchange",this.onHashChange);this.observer.disconnect();this.observer=null}},{key:"onHashChange",value:function e(){this.setState({hash:window.location.hash})}},{key:"render",value:function e(){var n=this;var r=this.props;var a=this.state.hash;return f.a.createElement(E["a"],{dayBanner:false},f.a.createElement(b["a"],{titlePrefix:"",title:t}),f.a.createElement("div",{className:"jsx-3042148040"+" "+"header-wrapper"},f.a.createElement("div",{className:"jsx-3042148040"+" "+"header"},f.a.createElement(We,{darkBg:true},f.a.createElement(x["a"],{clean:true,logo:f.a.createElement(We,{darkBg:false},f.a.createElement(g["a"],null)),user:r.user,pathname:r.url.pathname,title:t,onLogout:function e(){l.a.push("/login")},onLogoRightClick:function e(){return r.url.push("/logos")}})))),f.a.createElement(w["a"],null,f.a.createElement("div",{className:"jsx-3042148040"+" "+"sidebar"},f.a.createElement(m["a"],{data:this.data,url:r.url,hash:a,scrollSelectedIntoView:true}))),f.a.createElement("div",{className:"jsx-3042148040"},f.a.createElement("div",{className:"jsx-3042148040"+" "+"doc-layout"},f.a.createElement("div",{className:"jsx-3042148040"+" "+"topbar"},f.a.createElement(y["a"],{data:this.data,url:r.url,hash:a,sticky:true})),f.a.createElement("div",{ref:function e(t){return n.contentNode=t},className:"jsx-3042148040"+" "+"content"},this.data.map(function(e){var t=e.id,n=e.posts;return f.a.createElement("div",{key:t,className:"jsx-3042148040"+" "+"category"},n.map(function(e){if("ABIDescription"===e.type)return f.a.createElement(De,{key:e.id||"sadfds",hash:e.hash||"sadfds",name:e.name||"sadfasd"},f.a.createElement(Se,{abi:e.abi,description:e.description||{}}));else{var n=(sections[t]||{})[e.id];return n?f.a.createElement(De,{key:e.id,hash:e.hash,name:e.name},f.a.createElement(n,{user:r.user,testingToken:r.testingToken})):null}}))})),f.a.createElement("div",{className:"jsx-3042148040"}))),f.a.createElement(o.a,{styleId:"3042148040",css:["body{padding-bottom:0;}","a.jsx-3042148040{text-decoration:none;color:#999;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}","a.jsx-3042148040:hover{color:#000;}",".doc-layout.jsx-3042148040{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 0 0 240px;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-font-smoothing:antialiased;}",".header.jsx-3042148040{position:fixed;top:0;left:0;right:0;z-index:101;}",".sidebar.jsx-3042148040{position:fixed;width:240px;margin-top:0;bottom:0;left:0;top:100px;overflow:auto;-webkit-font-smoothing:antialiased;}",".topbar.jsx-3042148040{display:none;padding:0 20px;}",".content.jsx-3042148040{width:100%;}","@media screen and (min-width:700px){.category.jsx-3042148040:first-child .section:first-child .block:first-child .copy,.category.jsx-3042148040:first-child .section:first-child .block:first-child .example{padding-top:95px;}.category.jsx-3042148040:last-child .section:last-child .block:last-child .copy,.category.jsx-3042148040:last-child .section:last-child .block:last-child .example{padding-bottom:95px;}}","@media screen and (max-width:950px){.header-wrapper.jsx-3042148040{height:95px;}.header.jsx-3042148040{background:#fff;}.doc-layout.jsx-3042148040{display:block;margin:0;}.content.jsx-3042148040{width:100%;margin-left:0;}.sidebar.jsx-3042148040{display:none;}.topbar.jsx-3042148040{display:block;}}"]}))}}],[{key:"getInitialProps",value:function(){var e=Ae(a.a.mark(function e(t){var n=t.req;var r,i,o;return a.a.wrap(function e(t){while(1)switch(t.prev=t.next){case 0:r="undefined"===typeof window;if(!(r&&!n.headers)){t.next=3;break}return t.abrupt("return",{});case 3:t.next=5;return Object(j["a"])({req:n});case 5:i=t.sent;o=i.user;return t.abrupt("return",{user:o});case 8:case"end":return t.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]);return r}(f.a.PureComponent);return C(n)};var De=function(e){ze(t,e);function t(){He(this,t);return Fe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}Le(t,[{key:"getChildContext",value:function e(){return{hash:this.props.hash,name:this.props.name}}},{key:"render",value:function e(){return this.props.children}}]);return t}(f.a.PureComponent);De.childContextTypes={hash:u.a.string,name:u.a.string};var We=function(e){ze(t,e);function t(){He(this,t);return Fe(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}Le(t,[{key:"getChildContext",value:function e(){return{darkBg:this.props.darkBg}}},{key:"render",value:function e(){return this.props.children}}]);return t}(f.a.PureComponent);We.childContextTypes={darkBg:u.a.bool};function Ue(e){var t=l.a.pathname,n=l.a.query;var r=Object(h["parse"])(location.href);r.hash=e;l.a.router.changeState("replaceState",Object(h["format"])({pathname:t,query:n}),Object(h["format"])(r))}},20:function(e,t){(function(e,t){"use strict";if("IntersectionObserver"in e&&"IntersectionObserverEntry"in e&&"intersectionRatio"in e.IntersectionObserverEntry.prototype){if(!("isIntersecting"in e.IntersectionObserverEntry.prototype))Object.defineProperty(e.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}var n=[];function r(e){this.time=e.time;this.target=e.target;this.rootBounds=e.rootBounds;this.boundingClientRect=e.boundingClientRect;this.intersectionRect=e.intersectionRect||p();this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect;var n=t.width*t.height;var r=this.intersectionRect;var a=r.width*r.height;if(n)this.intersectionRatio=a/n;else this.intersectionRatio=this.isIntersecting?1:0}function a(e,t){var n=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=o(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=e;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(n.rootMargin);this.thresholds=this._initThresholds(n.threshold);this.root=n.root||null;this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(" ")}a.prototype.THROTTLE_TIMEOUT=100;a.prototype.POLL_INTERVAL=null;a.prototype.observe=function(e){if(this._observationTargets.some(function(t){return t.element==e}))return;if(!(e&&1==e.nodeType))throw new Error("target must be an Element");this._registerInstance();this._observationTargets.push({element:e,entry:null});this._monitorIntersections();this._checkForIntersections()};a.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e});if(!this._observationTargets.length){this._unmonitorIntersections();this._unregisterInstance()}};a.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};a.prototype.takeRecords=function(){var e=this._queuedEntries.slice();this._queuedEntries=[];return e};a.prototype._initThresholds=function(e){var t=e||[0];if(!Array.isArray(t))t=[t];return t.sort().filter(function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]})};a.prototype._parseRootMargin=function(e){var t=e||"0px";var n=t.split(/\s+/).map(function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});n[1]=n[1]||n[0];n[2]=n[2]||n[0];n[3]=n[3]||n[1];return n};a.prototype._monitorIntersections=function(){if(!this._monitoringIntersections){this._monitoringIntersections=true;if(this.POLL_INTERVAL)this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL);else{s(e,"resize",this._checkForIntersections,true);s(t,"scroll",this._checkForIntersections,true);if("MutationObserver"in e){this._domObserver=new MutationObserver(this._checkForIntersections);this._domObserver.observe(t,{attributes:true,childList:true,characterData:true,subtree:true})}}}};a.prototype._unmonitorIntersections=function(){if(this._monitoringIntersections){this._monitoringIntersections=false;clearInterval(this._monitoringInterval);this._monitoringInterval=null;l(e,"resize",this._checkForIntersections,true);l(t,"scroll",this._checkForIntersections,true);if(this._domObserver){this._domObserver.disconnect();this._domObserver=null}}};a.prototype._checkForIntersections=function(){var e=this._rootIsInDom();var t=e?this._getRootRect():p();this._observationTargets.forEach(function(n){var a=n.element;var o=u(a);var s=this._rootContainsTarget(a);var l=n.entry;var c=e&&s&&this._computeTargetAndRootIntersection(a,t);var p=n.entry=new r({time:i(),target:a,boundingClientRect:o,rootBounds:t,intersectionRect:c});if(!l)this._queuedEntries.push(p);else if(e&&s){if(this._hasCrossedThreshold(l,p))this._queuedEntries.push(p)}else if(l&&l.isIntersecting)this._queuedEntries.push(p)},this);if(this._queuedEntries.length)this._callback(this.takeRecords(),this)};a.prototype._computeTargetAndRootIntersection=function(n,r){if("none"==e.getComputedStyle(n).display)return;var a=u(n);var i=a;var o=h(n);var s=false;while(!s){var l=null;var p=1==o.nodeType?e.getComputedStyle(o):{};if("none"==p.display)return;if(o==this.root||o==t){s=true;l=r}else if(o!=t.body&&o!=t.documentElement&&"visible"!=p.overflow)l=u(o);if(l){i=c(l,i);if(!i)break}o=h(o)}return i};a.prototype._getRootRect=function(){var e;if(this.root)e=u(this.root);else{var n=t.documentElement;var r=t.body;e={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)};a.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map(function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100});var n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};n.width=n.right-n.left;n.height=n.bottom-n.top;return n};a.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1;var r=t.isIntersecting?t.intersectionRatio||0:-1;if(n===r)return;for(var a=0;a<this.thresholds.length;a++){var i=this.thresholds[a];if(i==n||i==r||i<n!==i<r)return true}};a.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)};a.prototype._rootContainsTarget=function(e){return f(this.root||t,e)};a.prototype._registerInstance=function(){if(n.indexOf(this)<0)n.push(this)};a.prototype._unregisterInstance=function(){var e=n.indexOf(this);if(-1!=e)n.splice(e,1)};function i(){return e.performance&&performance.now&&performance.now()}function o(e,t){var n=null;return function(){if(!n)n=setTimeout(function(){e();n=null},t)}}function s(e,t,n,r){if("function"==typeof e.addEventListener)e.addEventListener(t,n,r||false);else if("function"==typeof e.attachEvent)e.attachEvent("on"+t,n)}function l(e,t,n,r){if("function"==typeof e.removeEventListener)e.removeEventListener(t,n,r||false);else if("function"==typeof e.detatchEvent)e.detatchEvent("on"+t,n)}function c(e,t){var n=Math.max(e.top,t.top);var r=Math.min(e.bottom,t.bottom);var a=Math.max(e.left,t.left);var i=Math.min(e.right,t.right);var o=i-a;var s=r-n;return o>=0&&s>=0&&{top:n,bottom:r,left:a,right:i,width:o,height:s}}function u(e){var t;try{t=e.getBoundingClientRect()}catch(e){}if(!t)return p();if(!(t.width&&t.height))t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top};return t}function p(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(e,t){var n=t;while(n){if(n==e)return true;n=h(n)}return false}function h(e){var t=e.parentNode;if(t&&11==t.nodeType&&t.host)return t.host;return t}e.IntersectionObserver=a;e.IntersectionObserverEntry=r})(window,document)},332:function(e,t,n){e.exports=n(333)},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(3);var a=n.n(r);var i=n(10);var o=n(5);var s=n(1);var l=n(6);var c=n(7);var u=n(19);var p=[{constant:true,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"amount",type:"uint256"}],name:"withdrawEther",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"_value",type:"uint256"}],name:"burn",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:false,inputs:[{name:"_value",type:"uint256"}],name:"unfreeze",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"",type:"address"}],name:"freezeOf",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_value",type:"uint256"}],name:"freeze",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:false,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"initialSupply",type:"uint256"},{name:"decimalUnits",type:"uint8"}],payable:false,stateMutability:"nonpayable",type:"constructor"},{payable:true,stateMutability:"payable",type:"fallback"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:true,name:"to",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Burn",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Freeze",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Unfreeze",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"previousOwner",type:"address"},{indexed:true,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}];t["default"]=Object(u["default"])(p,"BitMartToken")}},[332]);return{page:e.default}});