module.exports=__NEXT_REGISTER_PAGE("/docs/getting-started/assign-a-domain-name",function(){var e=webpackJsonp([16],{383:function(e,a,t){e.exports=t(384)},384:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(0);var l=t.n(n);var o=t(3);var r=t.n(o);var m=t(7);var i=t.n(m);var s=t(4);var c=t(5);var u=t(11);var p=t(8);var d=t(9);var h=t(13);var y=t(10);a["default"]=Object(s["b"])({title:"Assign a Domain Name",date:"2 August 2017",authors:[c["a"]],editUrl:"pages/docs/getting-started/assign-a-domain-name.js"})(r()(s["a"],function(e){return l.a.createElement("div",{className:"_markdown_"},l.a.createElement(e.p,null,"When you deploy an app with ",l.a.createElement(y["a"],{color:"#000"}),", you will have a unique deployment URL like this: ",l.a.createElement(e.a,{href:"https://my-web-app-avvuiuuwto.now.sh"},"https://my-web-app-avvuiuuwto.now.sh"),"."),l.a.createElement(e.p,null,"If you deploy your app multiple times, you will have multiple URLs. With these different deployment URLs, you can easily point users to a specific version of your app."),l.a.createElement(e.p,null,"However, you cannot ask your users to visit those addresses. This is because the addresses are not easy to remember and they change every time you deploy a new version."),l.a.createElement(e.p,null,"Hence, you need a fixed domain name."),l.a.createElement(e.p,null,l.a.createElement(p["a"],{src:i()("/docs/assign-a-domain-name/custom-domain.png"),width:600,height:325,caption:"Our sample static app with a fixed domain name."})),l.a.createElement(e.p,null,"In this guide, we are going to map a domain name into one of those deployment URLs of your app by using the ",l.a.createElement(e.code,null,"now alias")," command."),l.a.createElement(e.p,null,"The four different ways to use the ",l.a.createElement(e.code,null,"now alias")," command are:"),l.a.createElement(e.ol,null,l.a.createElement(e.li,null,l.a.createElement(d["d"],{href:"#1.-using-a-now.sh-domain"},"Using a now.sh domain")),l.a.createElement(e.li,null,l.a.createElement(d["d"],{href:"#2.-using-a-custom-domain,-managed-by-now"},"Using a custom domain, managed by now")),l.a.createElement(e.li,null,l.a.createElement(d["d"],{href:"#3.-using-a-custom-domain,-dns-managed-by-now"},"Using a custom domain, DNS managed by now")),l.a.createElement(e.li,null,l.a.createElement(d["d"],{href:"#4.-using-a-custom-domain-with-a-cname"},"Using a custom domain with a CNAME"))),l.a.createElement(e.p,null,"Let us explore each method in detail."),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"Custom domains are only available for ",l.a.createElement(e.a,{href:"https://zeit.co/pricing"},"paid plans"),". If you want to use a custom domain for your app, you need to ",l.a.createElement(e.a,{href:"https://zeit.co/account/plan"},"upgrade")," your account.")),l.a.createElement(e.p,null,l.a.createElement(h["a"],null)),l.a.createElement(e.h2,null,"1. Using a now.sh Domain"),l.a.createElement(e.p,null,"This method is the easiest way to use a domain name. To obtain a domain name with the ",l.a.createElement(e.code,null,"now.sh")," postfix instantly, simply run the following command:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],null,"now alias https://my-web-app-avvuiuuwto.now.sh my-web-app")),l.a.createElement(e.p,null,"Your users may now access the above deployment URL using ",l.a.createElement(e.a,{href:"https://my-web-app.now.sh"},"https://my-web-app.now.sh")),l.a.createElement(e.h2,null,"2. Using a custom domain, managed by now"),l.a.createElement(e.p,null,"If you want to use a custom domain for your app, the easiest method is to buy a domain name for your app using ",l.a.createElement(y["a"],{color:"#000"}),"."),l.a.createElement(e.p,null,"Simply run the following now alias command:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],null,"now alias https://my-web-app-avvuiuuwto.now.sh my-web-app.com")),l.a.createElement(e.p,null,"Here, we are attempting to assign the ",l.a.createElement(e.code,null,"my-web-app.com")," domain name to the above deployment URL. If the domain name is available, you may confirm and buy it without leaving the terminal."),l.a.createElement(e.p,null,"After the confirmation, ",l.a.createElement(y["a"],{color:"#000"})," will handle all the technical details for you and allow your users to access your app using ",l.a.createElement(e.a,{href:"https://my-web-app.com"},"https://my-web-app.com"),"."),l.a.createElement(e.p,null,l.a.createElement(p["a"],{src:i()("/docs/assign-a-domain-name/buy-domain.png"),width:650,height:412,caption:"Confirmation you'll get after assigning a custom domain."})),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"In this process, ",l.a.createElement(y["a"],{color:"#000"})," will set up a ",l.a.createElement(e.a,{href:"https://letsencrypt.org/"},"Let's Encrypt")," SSL certificate for your domain automatically.")),l.a.createElement(e.h2,null,"3. Using a custom domain, DNS managed by now"),l.a.createElement(e.p,null,"If you already have a domain name, this is the best option for you. With this method, ",l.a.createElement(y["a"],{color:"#000"})," will handle all the DNS management for your domain."),l.a.createElement(e.h3,null,"Setup"),l.a.createElement(e.p,null,"First of all, you need to point your domain's nameservers to our ",l.a.createElement(e.a,{href:"https://zeit.co/world"},"global DNS service"),". Here is how to do that:"),l.a.createElement(e.ul,null,l.a.createElement(e.li,null,"Visit your domain name provider and find a place where you can add custom nameservers."),l.a.createElement(e.li,null,"Select two or more nameservers from ",l.a.createElement(e.a,{href:"https://zeit.co/world#get-started"},"this list"),"."),l.a.createElement(e.li,null,"Set them as custom nameservers for your domain.")),l.a.createElement(e.p,null,"For example, assume that your domain name is ",l.a.createElement(e.code,null,"my-custom-domain.com"),"."),l.a.createElement(e.p,null,"After you have set up the nameservers, simply run the following ",l.a.createElement(e.code,null,"now alias")," command:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],null,"now alias https://my-web-app-avvuiuuwto.now.sh my-custom-domain.com")),l.a.createElement(e.p,null,"Then, you can access your app using ",l.a.createElement(e.a,{href:"https://my-custom-domain.com"},"https://my-custom-domain.com"),"."),l.a.createElement(e.p,null,"You can also use a subdomain of ",l.a.createElement(e.code,null,"my-custom-domain.com")," like this:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],null,"now alias https://my-web-app-avvuiuuwto.now.sh ui.my-custom-domain.com")),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"Even in this process, ",l.a.createElement(y["a"],{color:"#000"})," will set up a ",l.a.createElement(e.a,{href:"https://letsencrypt.org/"},"Let's Encrypt")," SSL certificate for your domain automatically.")),l.a.createElement(e.h2,null,"4. Using a custom domain with a CNAME"),l.a.createElement(e.p,null,"If you are managing a DNS setup for your domain, you can use this option."),l.a.createElement(e.p,null,"For example, assume you have a domain name called ",l.a.createElement(e.code,null,"my-app.work")," and you already have a DNS setup for that."),l.a.createElement(e.p,null,"To map the ",l.a.createElement(e.code,null,"ui.my-app.work")," domain for one of the deployment URLs of your app, visit your DNS provider and add a CNAME record for ",l.a.createElement(e.code,null,"ui.my-app.work")," pointing to ",l.a.createElement(e.code,null,"alias.zeit.co"),"."),l.a.createElement(e.p,null,"After that, run the following command:"),l.a.createElement(e.p,null,l.a.createElement(u["a"],null,"now alias https://my-web-app-avvuiuuwto.now.sh ui.my-app.work")),l.a.createElement(e.p,null,"You will then have an error like this:"),l.a.createElement(e.p,null,l.a.createElement(p["a"],{src:i()("/docs/assign-a-domain-name/alias-error.png"),width:650,height:412,caption:"Error message you'll get when trying to alias a domain for the first time."})),l.a.createElement(e.p,null,l.a.createElement(y["a"],{color:"#000"})," wants to verify the ownership of your domain. That's why it throws an error."),l.a.createElement(e.ul,null,l.a.createElement(e.li,null,"Next, add the TXT record as mentioned above error message."),l.a.createElement(e.li,null,"Run the ",l.a.createElement(e.code,null,"now alias")," command again:")),l.a.createElement(e.p,null,l.a.createElement(u["a"],null,"now alias https://my-web-app-avvuiuuwto.now.sh ui.my-app.work")),l.a.createElement(e.p,null,"Now you may access your app using ",l.a.createElement(e.a,{href:"https://ui.my-app.work"},"https://ui.my-app.work")),l.a.createElement(e.blockquote,null,l.a.createElement(e.p,null,"In this case, ",l.a.createElement(y["a"],{color:"#000"})," will setup a ",l.a.createElement(e.a,{href:"https://letsencrypt.org/"},"Let's Encrypt")," SSL certificate for your domain. However, before you do that, you need to verify the domain.")),l.a.createElement(e.h3,null,"Naked domains"),l.a.createElement(e.p,null,"You can also use a naked domain like ",l.a.createElement(e.code,null,"my-app.work")," with this method. In that case, you need to use a ",l.a.createElement(e.a,{href:"https://support.dnsimple.com/articles/alias-record/"},"ALIAS")," record instead of a CNAME record."),l.a.createElement(e.p,null,"Some DNS providers do not have ALIAS records. In that case, the functionality of ALIAS records is managed using CNAME records."))}))},6:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});a.default=l;a.setAssetPrefix=o;var n=void 0;function l(e){if(/^https?:\/\//.test(e))return e;var a=e.replace(/^\//,"");return(n||"")+"/static/"+a}function o(e){n=e}},7:function(e,a,t){e.exports=t(6)},8:function(e,a,t){"use strict";var n=t(2);var l=t.n(n);var o=t(0);var r=t.n(o);var m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]}return e};var i=function e(a){var t=a.src,n=a.width,o=a.height,m=a.margin,i=void 0===m?40:m,s=a.caption,c=a.video,u=void 0===c?false:c,p=a.muted,d=void 0===p?true:p,h=a.autoPlay,y=void 0===h?false:h;if(!n)throw new Error("Please define the width of the image!");if(!o)throw new Error("Please define the height of the image!");var E=String(o/n*100)+"%";return r.a.createElement("figure",{style:{margin:i+"px 0"},className:"jsx-2503757143"},r.a.createElement("main",{style:{width:n},className:"jsx-2503757143"},r.a.createElement("div",{style:{paddingBottom:E},className:"jsx-2503757143"},u?r.a.createElement("video",{src:t,muted:d,autoPlay:y,className:"jsx-2503757143"}):r.a.createElement("img",{src:t,className:"jsx-2503757143"})),s&&r.a.createElement("p",{className:"jsx-2503757143"},s)),r.a.createElement(l.a,{styleId:"2503757143",css:["figure.jsx-2503757143{text-align:center;display:block;}","main.jsx-2503757143{margin:0 auto;max-width:100%;}","div.jsx-2503757143{position:relative;}","img.jsx-2503757143,video.jsx-2503757143{position:absolute;top:0;left:0;height:100%;width:100%;}","p.jsx-2503757143{font-size:11px;text-align:center;color:#999;}"]}))};var s=function e(a){return r.a.createElement(i,m({},a,{video:true}))};a["a"]=i}},[383]);return{page:e.default}});