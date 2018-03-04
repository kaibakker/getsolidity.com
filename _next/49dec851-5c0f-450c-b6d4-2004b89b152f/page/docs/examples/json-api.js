module.exports=__NEXT_REGISTER_PAGE("/docs/examples/json-api",function(){var e=webpackJsonp([19],{12:function(e,t,a){e.exports=a(9)},13:function(e,t,a){"use strict";var n=a(2);var l=a.n(n);var r=a(0);var o=a.n(r);var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n))e[n]=a[n]}return e};var s=function e(t){var a=t.src,n=t.width,r=t.height,i=t.margin,s=void 0===i?40:i,c=t.caption,u=t.video,m=void 0===u?false:u,d=t.muted,h=void 0===d?true:d,p=t.autoPlay,E=void 0===p?false:p;if(!n)throw new Error("Please define the width of the image!");if(!r)throw new Error("Please define the height of the image!");var f=String(r/n*100)+"%";return o.a.createElement("figure",{style:{margin:s+"px 0"},className:"jsx-2503757143"},o.a.createElement("main",{style:{width:n},className:"jsx-2503757143"},o.a.createElement("div",{style:{paddingBottom:f},className:"jsx-2503757143"},m?o.a.createElement("video",{src:a,muted:h,autoPlay:E,className:"jsx-2503757143"}):o.a.createElement("img",{src:a,className:"jsx-2503757143"})),c&&o.a.createElement("p",{className:"jsx-2503757143"},c)),o.a.createElement(l.a,{styleId:"2503757143",css:["figure.jsx-2503757143{text-align:center;display:block;}","main.jsx-2503757143{margin:0 auto;max-width:100%;}","div.jsx-2503757143{position:relative;}","img.jsx-2503757143,video.jsx-2503757143{position:absolute;top:0;left:0;height:100%;width:100%;}","p.jsx-2503757143{font-size:11px;text-align:center;color:#999;}"]}))};var c=function e(t){return o.a.createElement(s,i({},t,{video:true}))};t["a"]=s},361:function(e,t,a){e.exports=a(362)},362:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(0);var l=a.n(n);var r=a(3);var o=a.n(r);var i=a(12);var s=a.n(i);var c=a(6);var u=a(7);var m=a(10);var d=a(8);var h=a(5);var p=a(13);var E=a(1);var f=a(14);t["default"]=Object(c["b"])({title:"Building a Basic JSON API",date:"20 Feb 2017",authors:[u["e"]],editUrl:"pages/docs/examples/json-api.js"})(o()(c["a"],function(e){return l.a.createElement("div",{className:"_markdown_"},l.a.createElement(e.p,null,"Nowadays, every properly built application requires at least one API endpoint where it can load data from."),l.a.createElement(e.p,null,"There are various ways to build one of these APIs. But for this example, I'm going to show you the most effective one using a tiny tool named ",l.a.createElement(e.a,{href:"https://github.com/zeit/micro"},"micro"),", which we built specifically for this purpose."),l.a.createElement(e.h2,null,"Setup"),l.a.createElement(e.p,null,"Before diving into building the microservice, please make sure that your instance of ",l.a.createElement(e.a,{href:"https://nodejs.org/"},"Node")," is up-to-date (at least version 6). Assuming that it's the case, continue with creating a directory and switch to it. Run this in your terminal:"),l.a.createElement(e.p,null,l.a.createElement(f["a"],null,"mkdir json-api\ncd json-api")),l.a.createElement(e.p,null,"Now let's create the project's files inside that directory. Start over with creating a ",l.a.createElement(e.code,null,"package.json"),":"),l.a.createElement(e.p,null,l.a.createElement(E["a"],null,'{\n  "name": "json-api",\n  "scripts": {\n    "start": "micro"\n  },\n  "dependencies": {\n    "micro": "latest"\n  }\n}')),l.a.createElement(e.p,null,"As you can see, this file now contains three properties:"),l.a.createElement(e.ul,null,l.a.createElement(e.li,null,l.a.createElement(e.code,null,"name")," tells ",l.a.createElement(m["a"],{color:"#000"})," the name of the deployment"),l.a.createElement(e.li,null,l.a.createElement(e.code,null,"scripts")," will make the micro command run when starting the deployment"),l.a.createElement(e.li,null,l.a.createElement(e.code,null,"dependencies")," tells Node.js to download the latest version micro")),l.a.createElement(e.p,null,"Next, install micro (the only dependency) by running npm's ",l.a.createElement(e.a,{href:"https://docs.npmjs.com/cli/install"},"install command"),":"),l.a.createElement(e.p,null,l.a.createElement(f["a"],null,"npm install")),l.a.createElement(e.h2,null,"Creating the Service"),l.a.createElement(e.p,null,"Once the command has finished running, you'll see a directory named ",l.a.createElement(e.code,null,"node_modules")," containing your dependencies. Now that you've installed everything required, you can populate the source files with code."),l.a.createElement(e.p,null,"By default, ",l.a.createElement(e.code,null,"micro")," will expect a ",l.a.createElement(e.code,null,"index.js")," file to exist in your project's directory. However, if you want to run a different file, that's ",l.a.createElement(e.a,{href:"https://github.com/zeit/micro#example"},"also possible"),". But for this example, we'll go with the default behaviour:"),l.a.createElement(e.p,null,l.a.createElement(E["a"],null,"module.exports = () => ({\n  date: new Date\n})")),l.a.createElement(e.p,null,"The exported arrow function shown above simply returns an object with the current date. And thanks to ",l.a.createElement(e.code,null,"micro")," providing the functionality of a web server, you only need to run the ",l.a.createElement(e.code,null,"start")," script contained within your ",l.a.createElement(e.code,null,"package.json")," file:"),l.a.createElement(e.p,null,l.a.createElement(f["a"],null,"npm start")),l.a.createElement(e.p,null,"BOOM! The service will start running and you'll see a message like this one showing that ",l.a.createElement(e.code,null,"micro")," started exposing the code you wrote on the default port ",l.a.createElement(e.strong,null,"3000"),":"),l.a.createElement(e.p,null,l.a.createElement(f["c"],null,"> Ready! Listening on ",l.a.createElement(h["b"].B,null,"http://0.0.0.0:3000"))),l.a.createElement(e.p,null,"Go to the URL returned (",l.a.createElement(e.code,null,"http://0.0.0.0:3000"),") and you should see something like this:"),l.a.createElement(e.p,null,l.a.createElement(p["a"],{src:s()("/docs/json-api/date.png"),width:"550",height:"279"})),l.a.createElement(e.h2,null,"Retrieving and Sending Data"),l.a.createElement(e.p,null,"That's great, isn't it? But we're not quite there yet! The next step is to take advantage of ",l.a.createElement(e.strong,null,"async")," and ",l.a.createElement(e.strong,null,"await")," by loading real data once the request comes in (then we'll send it back as the response)."),l.a.createElement(e.p,null,"As example, we're going to retrieve the list of public members inside our ",l.a.createElement(e.a,{href:"https://github.com/zeit"},"GitHub organization")," using their ",l.a.createElement(e.a,{href:"https://developer.github.com/v3/orgs/members/"},"API"),"."),l.a.createElement(e.p,null,"In order to get there, the first thing we need to do is install ",l.a.createElement(e.a,{href:"https://github.com/bitinn/node-fetch"},"node-fetch"),", a package that allows us to easily load data from an API endpoint and now that we already have a ",l.a.createElement(e.code,null,"package.json")," in place, this only requires a command:"),l.a.createElement(e.p,null,l.a.createElement(f["a"],null,"npm install --save node-fetch")),l.a.createElement(e.p,null,"You'll notice that the package got added to your ",l.a.createElement(e.code,null,"dependencies")," list. We achieved this by taking advantage of the ",l.a.createElement(e.code,null,"--save")," option. Now the property should look ",l.a.createElement(e.strong,null,"similar")," to this:"),l.a.createElement(e.p,null,l.a.createElement(E["a"],null,'"dependencies": {\n  "micro": "latest",\n  "node-fetch": "^1.6.3"\n}')),l.a.createElement(e.p,null,"Done? Perfect! Then let's get over to updating ",l.a.createElement(e.code,null,"index.js"),". First, we need to load ",l.a.createElement(e.a,{href:"https://github.com/bitinn/node-fetch"},"node-fetch"),":"),l.a.createElement(e.p,null,l.a.createElement(E["a"],null,"const fetch = require('node-fetch')")),l.a.createElement(e.p,null,"Next, prepend the new ",l.a.createElement(e.code,null,"async")," keyword (which allows us run asynchronous code inside it) to the exported function, use ",l.a.createElement(e.code,null,"fetch()")," with GitHub's ",l.a.createElement(e.a,{href:"https://api.github.com/orgs/zeit/members"},"endpoint URL"),", assign it to a constant and then parse the JSON in the response using the ",l.a.createElement(e.code,null,".json()")," method."),l.a.createElement(e.p,null,"Once that's done, you only need to return the parsed JSON data. All in all, it should look like this:"),l.a.createElement(e.p,null,l.a.createElement(E["a"],null,"module.exports = async () => {\n  const request = await fetch('https://api.github.com/orgs/zeit/members')\n  const data = await request.json()\n\n  return data\n}")),l.a.createElement(e.p,null,"Now save the file and run it the service again (if it's still running, stop it using ",l.a.createElement(e.code,null,"ctrl + c")," before starting it again):"),l.a.createElement(e.p,null,l.a.createElement(f["a"],null,"npm start")),l.a.createElement(e.p,null,"Assuming that you've followed this post to this point, you should now see able to open ",l.a.createElement(e.code,null,"http://0.0.0.0:3000")," in your browser and see a list of all public members of the ",l.a.createElement(e.a,{href:"https://github.com/zeit"},"ZEIT organization")," on GitHub:"),l.a.createElement(e.p,null,l.a.createElement(p["a"],{src:s()("/docs/json-api/members.png"),width:"600",height:"373"})),l.a.createElement(e.h2,null,"Deploying the Service"),l.a.createElement(e.p,null,"Now that the JSON API works locally, we can deploy it by running this command:"),l.a.createElement(e.p,null,l.a.createElement(f["a"],null,"now")),l.a.createElement(e.p,null,"Once ",l.a.createElement(m["a"],{color:"#000"})," has finished uploading the files, you'll see a URL that points to your API microservice. This means that you can already use this URL in a testing application and load the data into it."),l.a.createElement(e.p,null,"But in the case of a real microservice, you would now have to ",l.a.createElement(d["d"],{href:"/docs/features/aliases"},"assign an alias")," to it."))}))},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=l;t.setAssetPrefix=r;var n=void 0;function l(e){if(/^https?:\/\//.test(e))return e;var t=e.replace(/^\//,"");return(n||"")+"/static/"+t}function r(e){n=e}}},[361]);return{page:e.default}});