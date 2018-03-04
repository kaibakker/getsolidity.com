module.exports=__NEXT_REGISTER_PAGE("/docs/getting-started/secrets",function(){var e=webpackJsonp([7],{12:function(e,t,a){e.exports=a(9)},13:function(e,t,a){"use strict";var n=a(2);var r=a.n(n);var l=a(0);var o=a.n(l);var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n))e[n]=a[n]}return e};var c=function e(t){var a=t.src,n=t.width,l=t.height,s=t.margin,c=void 0===s?40:s,i=t.caption,u=t.video,m=void 0===u?false:u,d=t.muted,p=void 0===d?true:d,h=t.autoPlay,E=void 0===h?false:h;if(!n)throw new Error("Please define the width of the image!");if(!l)throw new Error("Please define the height of the image!");var v=String(l/n*100)+"%";return o.a.createElement("figure",{style:{margin:c+"px 0"},className:"jsx-2503757143"},o.a.createElement("main",{style:{width:n},className:"jsx-2503757143"},o.a.createElement("div",{style:{paddingBottom:v},className:"jsx-2503757143"},m?o.a.createElement("video",{src:a,muted:p,autoPlay:E,className:"jsx-2503757143"}):o.a.createElement("img",{src:a,className:"jsx-2503757143"})),i&&o.a.createElement("p",{className:"jsx-2503757143"},i)),o.a.createElement(r.a,{styleId:"2503757143",css:["figure.jsx-2503757143{text-align:center;display:block;}","main.jsx-2503757143{margin:0 auto;max-width:100%;}","div.jsx-2503757143{position:relative;}","img.jsx-2503757143,video.jsx-2503757143{position:absolute;top:0;left:0;height:100%;width:100%;}","p.jsx-2503757143{font-size:11px;text-align:center;color:#999;}"]}))};var i=function e(t){return o.a.createElement(c,s({},t,{video:true}))};t["a"]=c},404:function(e,t,a){e.exports=a(405)},405:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(0);var r=a.n(n);var l=a(3);var o=a.n(l);var s=a(12);var c=a.n(s);var i=a(6);var u=a(7);var m=a(14);var d=a(1);var p=a(8);var h=a(13);var E=a(10);t["default"]=Object(i["b"])({title:"Secrets",date:"6 August 2017",authors:[u["a"]],editUrl:"pages/docs/getting-started/secrets.js"})(o()(i["a"],function(e){return r.a.createElement("div",{className:"_markdown_"},r.a.createElement(e.p,null,"If multiple people deploy your app or utilize a CI service, it's a better idea to use ",r.a.createElement(p["d"],{href:"/docs/getting-started/environment-variables#via-“now.json”"},"now.json")," to expose environment variables."),r.a.createElement(e.p,null,"However, adding that file to ",r.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/Git"},"Git")," could cause potential issues. Secrets like API tokens and DB information are visible to anyone who has access to the source code. That's bad."),r.a.createElement(e.h2,null,"Now Secrets"),r.a.createElement(e.p,null,"That's where ",r.a.createElement(E["a"],{color:"#000"})," Secrets can help you. It's a configuration store that works across your account. Let's see how to use it:"),r.a.createElement(e.p,null,"First, add some secrets:"),r.a.createElement(e.p,null,r.a.createElement(m["a"],null,'now secrets add my-app-mongo-url "user:password@mydb.com"\nnow secrets add my-app-my-api-token "XXXXX"')),r.a.createElement(e.p,null,"Then, you can get these values inside environment variables.",r.a.createElement("br",null),"Here's how to do that with ",r.a.createElement(e.code,null,"now.json"),":"),r.a.createElement(e.p,null,r.a.createElement(d["a"],null,'{\n  "env": {\n    "MONGO_URL": "@my-app-mongo-url",\n    "MY_API_TOKEN": "@my-app-my-api-token"\n  }\n}')),r.a.createElement(e.p,null,"That's it."),r.a.createElement(e.p,null,"This ",r.a.createElement(e.code,null,"now.json")," file no longer contains secret information and it's safe to add that to Git and share with anyone. Only the people who can deploy the app has access to these secrets."),r.a.createElement(e.h2,null,"Operations"),r.a.createElement(e.p,null,"You can perform a few sets of operations with ",r.a.createElement(E["a"],{color:"#000"})," Secrets, including adding, renaming and removing secrets. But you can't read secrets from the terminal."),r.a.createElement(e.blockquote,null,r.a.createElement(e.p,null,r.a.createElement(e.strong,null,"WARNING"),":",r.a.createElement("br",null),"Anyone who can deploy to ",r.a.createElement(E["a"],{color:"#000"})," has access to these secrets. Disabling the ability to read secrets in the terminal is simply a barrier.",r.a.createElement("br",null),"A user can still deploy a simple app to dump these secrets.")),r.a.createElement(e.p,null,"You can get more information about ",r.a.createElement(E["a"],{color:"#000"})," Secrets by running the following Help command:"),r.a.createElement(e.p,null,r.a.createElement(m["a"],null,"now secrets --help")),r.a.createElement(e.p,null,r.a.createElement(h["a"],{src:c()("/docs/now-secrets/help.png"),width:650,height:509,caption:"Help output of `now secrets`"})),r.a.createElement(e.h2,null,"Secrets with New Lines"),r.a.createElement(e.p,null,"Sometimes, you need to add secrets which has new lines (or any other special characters) in them (eg: certificates). But you won't be able to add them by simply using ",r.a.createElement(e.code,null,"now secrets add"),"."),r.a.createElement(e.p,null,"Instead, you can encode the secret into ",r.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/Base64"},"Base64")," before adding it. Here's how you could do that on Mac/Linux with a single command:"),r.a.createElement(e.p,null,r.a.createElement(m["a"],null,"now secrets add my-cert $(cat /path/to/cert | base64)")),r.a.createElement(e.p,null,"Before you use the secret inside your app, you need to decode it. Here's how you could do it in a Node.js app."),r.a.createElement(e.p,null,r.a.createElement(d["a"],null,"const cert = Buffer.from(certFromtheSecret, 'base64').toString()")),r.a.createElement(e.blockquote,null,r.a.createElement(e.p,null,"Base64 is a simple encoding algorithm which is available everywhere.",r.a.createElement("br",null),"That's why we've used it. But it's okay to choose any text based encoding algorithm.")))}))},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=r;t.setAssetPrefix=l;var n=void 0;function r(e){if(/^https?:\/\//.test(e))return e;var t=e.replace(/^\//,"");return(n||"")+"/static/"+t}function l(e){n=e}}},[404]);return{page:e.default}});