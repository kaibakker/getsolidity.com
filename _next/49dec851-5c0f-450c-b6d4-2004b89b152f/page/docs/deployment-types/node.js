module.exports=__NEXT_REGISTER_PAGE("/docs/deployment-types/node",function(){var e=webpackJsonp([57],{349:function(e,t,n){e.exports=n(350)},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=n(0);var a=n.n(l);var o=n(3);var r=n.n(o);var i=n(6);var s=n(7);var c=n(10);var u=n(1);var d=n(8);var m=n(14);t["default"]=Object(i["b"])({title:"Deploying Node.js Apps",date:"09 March 2017",authors:[s["e"]],editUrl:"pages/docs/deployment-types/node.js"})(r()(i["a"],function(e){return a.a.createElement("div",{className:"_markdown_"},a.a.createElement(e.p,null,"If your project contains a ",a.a.createElement(e.code,null,"package.json")," (and no ",a.a.createElement(e.code,null,"Dockerfile"),") file, it will always be treated as a ",a.a.createElement(e.a,{href:"https://nodejs.org/en/"},"Node.js")," deployment."),a.a.createElement(e.p,null,"This means that, when you run ",a.a.createElement(e.code,null,"now"),", your code will be launched into a 64-bit Node.js environment running on Alpine Linux (using ",a.a.createElement(e.a,{href:"https://www.musl-libc.org/"},"musl")," instead of ",a.a.createElement(e.a,{href:"https://www.gnu.org/software/libc/"},"glibc")," for the core libraries)."),a.a.createElement(e.p,null,"In this document, you'll learn the exact specifications and behaviour of Node.js deployments running on now."),a.a.createElement(e.h2,null,"File System Specifications"),a.a.createElement(e.p,null,"By default, it's not possible to write files to the file system when creating Node.js deployments."),a.a.createElement(e.p,null,"But there's an exception: The first time the build step (either using the ",a.a.createElement(e.code,null,"build")," or ",a.a.createElement(e.code,null,"now-build"),") runs, Node.js will be able to write to the file system. This is necessary for allowing applications to be bundled and/or transpiled on the server."),a.a.createElement(e.p,null,"After either the ",a.a.createElement(e.code,null,"start")," or ",a.a.createElement(e.code,null,"now-start")," scripts have started running, the only writable location will be ",a.a.createElement(e.code,null,"/tmp"),"."),a.a.createElement(e.p,null,"Inside this directory, temporary data can be saved. But please note that it will be ",a.a.createElement(e.strong,null,"removed each time each deployment goes to sleep")," and wakes up again. In turn, it is ",a.a.createElement(e.strong,null,"not")," safe to be used as a file-based database."),a.a.createElement(e.h2,null,"Package Installation"),a.a.createElement(e.p,null,"After ",a.a.createElement(c["a"],{color:"#000"})," has taken care of setting up the base of your deployment, the first real interaction with your code will be installing the dependencies you've defined inside ",a.a.createElement(e.code,null,"package.json"),"."),a.a.createElement(e.p,null,'For this process, we\'re using our so-called "ace" technology behind the curtains.'),a.a.createElement(e.p,null,"It not only comes with a global shared cache of public modules to avoid repetitive work in each deployment, but it also caches the artifacts of binary packages which requires packages like ",a.a.createElement(e.code,null,"node-canvas")," to only get compiled once. Afterwards, our build servers securely share it with all our customers (which saves a lot of time)."),a.a.createElement(e.p,null,"You can read more about it ",a.a.createElement(d["d"],{href:"/blog/faster-javascript-deployments"},"here"),"."),a.a.createElement(e.h2,null,"Ignoring devDependencies"),a.a.createElement(e.p,null,"If you only want to install ",a.a.createElement(e.code,null,"dependencies"),", not ",a.a.createElement(e.code,null,"devDependencies"),", you can set the environment variable ",a.a.createElement(e.code,null,"NODE_ENV"),' to "production" by either using the ',a.a.createElement(e.code,null,"-e")," option of the CLI like this:"),a.a.createElement(e.p,null,a.a.createElement(m["a"],null,'now -e NODE_ENV="production"')),a.a.createElement(e.p,null,"or using the ",a.a.createElement(d["d"],{href:"/docs/features/configuration#`env`-(object)"},"env")," configuration property:"),a.a.createElement(e.p,null,a.a.createElement(u["a"],null,'"env": {\n  "NODE_ENV": "production"\n}')),a.a.createElement(e.p,null,"In cases where you need to set the ",a.a.createElement(e.code,null,"NODE_ENV"),' variable to "production", but still need to have the ',a.a.createElement(e.code,null,"devDependencies")," installed, then you can use the environment variable on the ",a.a.createElement(e.code,null,"build")," script property as shown below:"),a.a.createElement(e.p,null,a.a.createElement(u["a"],null,'"scripts": {\n  "build": "NODE_ENV=production next build"\n}')),a.a.createElement(e.h2,null,"Port Selection"),a.a.createElement(e.p,null,a.a.createElement(c["a"],{color:"#000"})," deployment instances always listen on port ",a.a.createElement(e.code,null,"443")," (HTTPS) of their given url. Your server code can expose a HTTP service on ",a.a.createElement(e.strong,null,"any port")," of your choice (not multiple ones). ",a.a.createElement(c["a"],{color:"#000"})," will then route requests received on port ",a.a.createElement(e.code,null,"443")," to your HTTP service port and its response will be returned by the deployment instance."),a.a.createElement(e.p,null,"Aditionally visitors will be redirected from ",a.a.createElement(e.code,null,"http")," to ",a.a.createElement(e.code,null,"https")," automatically."),a.a.createElement(e.h2,null,"Custom Node.js Configuration"),a.a.createElement(e.p,null,"Other than selecting the version of Node.js using the engines property,"),a.a.createElement(e.p,null,a.a.createElement(u["a"],null,'"engines": {\n  "node": "7.4.0"\n}')),a.a.createElement(e.p,null,"there are no other ways to interfere with the image of your deployment. This means that if you want to use a custom runtime, a special version of Linux or some other form of low-level customization, you should consider a ",a.a.createElement(d["d"],{href:"/docs/deployment-types/docker"},"Docker deployment"),"."),a.a.createElement(e.p,null,"It will allow you to specify all of these things inside a ",a.a.createElement(e.code,null,"Dockerfile"),". This results in much wider customization options."),a.a.createElement(e.h2,null,"Deployment Inactivity"),a.a.createElement(e.p,null,"Old deployments always stay around forever if you don't remove them using ",a.a.createElement(e.code,null,"now remove"),"."),a.a.createElement(e.p,null,"However, if your deployment doesn't receive any HTTP(S) requests for a long time, it will most likely be added to the list of deployments that will fall into a light sleep if the platform experiences a lot of load."),a.a.createElement(e.p,null,"There's no definite answer to how long it will take until such a deployment goes to sleep, because the time will automatically be calculated based on the platform's load and the amount of deployments on it. But if your deployment is linked to an alias, it's less likely to ever fall into a sleep when not being accessed."),a.a.createElement(e.p,null,"All in all, sleeping deployments are here to reduce the effort the system has to push into keeping those running that aren't being accessed at all (which usually means they're inactive and not needed anymore)."),a.a.createElement(e.p,null,"Sleeping deployments will wake up in a matter of seconds once a request comes in. The visitor won't experience any errors, because the request will be kept alive until the deployment has woken up."),a.a.createElement(e.p,null,"Eventually, we'll be working on adding support for non-sleeping deployments!"))}))}},[349]);return{page:e.default}});