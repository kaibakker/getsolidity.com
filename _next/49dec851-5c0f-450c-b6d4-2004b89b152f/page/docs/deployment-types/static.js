module.exports=__NEXT_REGISTER_PAGE("/docs/deployment-types/static",function(){var e=webpackJsonp([56],{351:function(e,t,a){e.exports=a(352)},352:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var n=a.n(l);var r=a(3);var o=a.n(r);var c=a(6);var s=a(7);var i=a(10);var u=a(1);var d=a(14);t["default"]=Object(c["b"])({title:"Deploying Static Apps",date:"09 March 2017",authors:[s["e"],s["d"],s["g"]],editUrl:"pages/docs/deployment-types/static.js"})(o()(c["a"],function(e){return n.a.createElement("div",{className:"_markdown_"},n.a.createElement(e.p,null,n.a.createElement(i["a"],{color:"#000"})," comes with a native support for static deployments. It considers all projects that don't have a ",n.a.createElement(e.code,null,"Dockerfile"),", nor a ",n.a.createElement(e.code,null,"package.json")," as a static deployment."),n.a.createElement(e.p,null,"Deploying such a static project is still as easy as running a single command:"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"now")),n.a.createElement(e.h2,null,"Under the Hood"),n.a.createElement(e.p,null,"The technology behind our servers is a Node.js module called ",n.a.createElement(e.a,{href:"https://github.com/zeit/serve"},"serve"),", which you can download, fork, extend and even operate locally during development."),n.a.createElement(e.p,null,"What does this mean for your team and your business? Great user experience with zero lock-in."),n.a.createElement(e.p,null,"If you can’t wait for us to add a certain capability to our static deployments support, you can just create a ",n.a.createElement(e.code,null,"package.json")," like this:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,'{\n  "name": "extensible",\n  "scripts": {\n    "start": "serve ."\n  },\n  "dependencies": {\n    "serve": "latest"\n  }\n}')),n.a.createElement(e.p,null,"Then run ",n.a.createElement(e.code,null,"now"),", and we will detect the presence of ",n.a.createElement(e.code,null,"package.json")," and deploy it as a ",n.a.createElement(e.code,null,"npm")," deployment."),n.a.createElement(e.h2,null,"Behavior"),n.a.createElement(e.ul,null,n.a.createElement(e.li,null,"If a ",n.a.createElement(u["b"],null,"index.html")," file exists, it will be rendered"),n.a.createElement(e.li,null,"If only a single file was uploaded, the deployment URL will respond with it directly (you can still access it under its original path  - e.g.: ",n.a.createElement(u["b"],null,"/image.png"),")"),n.a.createElement(e.li,null,"When uploading multiple files, a directory listing will be displayed")),n.a.createElement(e.h3,null,"Deployment Inactivity"),n.a.createElement(e.p,null,"Old deployments always stay around forever if you don't remove them using ",n.a.createElement(e.code,null,"now remove"),"."),n.a.createElement(e.p,null,"However, the new static deployments, without the ",n.a.createElement(e.code,null,"package.json")," are ",n.a.createElement(e.strong,null,"never")," put to sleep but are always quickly accessible."))}))}},[351]);return{page:e.default}});