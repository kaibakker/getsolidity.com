module.exports=__NEXT_REGISTER_PAGE("/docs/examples/graphql",function(){var e=webpackJsonp([24],{347:function(e,t,a){e.exports=a(348)},348:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var l=a(0);var n=a.n(l);var r=a(3);var o=a.n(r);var c=a(7);var i=a.n(c);var s=a(4);var h=a(5);var p=a(10);var m=a(8);var u=a(1);var d=a(11);var E=a(9);var g=a(13);t["default"]=Object(s["b"])({title:"Building a Basic GraphQL Application",date:"01 March 2017",authors:[h["e"]],editUrl:"pages/docs/examples/graphql.js"})(o()(s["a"],function(e){return n.a.createElement("div",{className:"_markdown_"},n.a.createElement(e.p,null,"Since Facebook released their ",n.a.createElement(e.a,{href:"http://graphql.org/"},"GraphQL")," technology back in 2015, it has evolved into a wonderful query language perfectly suited for all kinds of today's API endpoints. Why?"),n.a.createElement(e.ul,null,n.a.createElement(e.li,null,"Comes with a much more definite way of describing the data passed through your API."),n.a.createElement(e.li,null,"Allows the client to fetch many resources in a single request, rather than forcing it to send multiple ones to different endpoints."),n.a.createElement(e.li,null,"Built from the ground up so that only data requested by the client is sent back. This makes ",n.a.createElement(e.a,{href:"http://graphql.org/"},"GraphQL")," apps react quickly even on slow mobile network connections.")),n.a.createElement(e.p,null,"Because of these advantages, it's a great alternative to ",n.a.createElement(e.a,{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST"),"."),n.a.createElement(e.p,null,"Convinced? Then let's create a application that fetches data from a ",n.a.createElement(e.a,{href:"http://graphql.org/"},"GraphQL")," endpoint!"),n.a.createElement(e.h2,null,"Requirements"),n.a.createElement(e.p,null,'Before we get started, please make sure that your instance of Node is up-to-date. You should have the latest "Current" release (compare it with ',n.a.createElement(e.a,{href:"https://nodejs.org/"},"this"),"). If it's not, click on the download button on the site and get yourself the newest version."),n.a.createElement(e.p,null,"You can use this command to check the version tag of your local instance:"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"node -v")),n.a.createElement(e.p,null,"Once the output of the command matches the latest version on the site, go on to the next section."),n.a.createElement(e.h2,null,"Building the API"),n.a.createElement(e.p,null,"Let's start with creating a new empty directory and moving into it:"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"mkdir graphql-api\ncd graphql-api")),n.a.createElement(e.p,null,"Now let's create the project's ",n.a.createElement(e.code,null,"package.json")," file inside that directory:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,'{\n  "name": "graphql-api",\n  "scripts": {\n    "start": "micro index.js"\n  }\n}')),n.a.createElement(e.p,null,"The code above tells ",n.a.createElement(p["a"],{color:"#000"}),' the name of the project ("graphql-api") and also to execute the ',n.a.createElement(e.code,null,"index.js")," file (using ",n.a.createElement(e.a,{href:"https://github.com/zeit/micro"},"micro"),", which we'll install in the next paragraph) when the ",n.a.createElement(e.code,null,"npm start")," command is run in your terminal or on the server."),n.a.createElement(e.p,null,"Next, we need to install a few packages:"),n.a.createElement(e.ul,null,n.a.createElement(e.li,null,n.a.createElement(e.a,{href:"https://github.com/zeit/micro"},"micro")," (a library of ours - makes building a ",n.a.createElement(e.a,{href:"https://zeit.co/docs/examples/json-api"},"microservice")," a breeze)"),n.a.createElement(e.li,null,n.a.createElement(e.a,{href:"https://github.com/graphql/express-graphql"},"express-graphql")," and ",n.a.createElement(e.a,{href:"https://www.npmjs.com/package/graphql"},"graphql")," (add support for the query language)"),n.a.createElement(e.li,null,n.a.createElement(e.a,{href:"https://www.npmjs.com/package/micro-cors"},"micro-cors")," (responsible for setting the correct CORS headers for every response)")),n.a.createElement(e.p,null,"Run this command in your terminal to install them using ",n.a.createElement(e.a,{href:"https://www.npmjs.com/"},"npm"),":"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"npm install --save graphql micro micro-cors express-graphql")),n.a.createElement(e.p,null,"Now we need to create the ",n.a.createElement(e.code,null,"index.js")," file and populate it with content. As the first step, load the packages:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"const {buildSchema} = require('graphql')\nconst server = require('express-graphql')\nconst CORS = require('micro-cors')()")),n.a.createElement(e.p,null,"Then define the type of data provided by the API. In our case, we'll only respond with a single key named ",n.a.createElement(e.code,null,"hello"),', holding a "Hello world" message. In turn, it will be of type ',n.a.createElement(e.code,null,"String"),":"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"const schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`)")),n.a.createElement(e.p,null,"And now the value for each key of the response:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"const rootValue = {\n  hello: () => 'Hello world'\n}")),n.a.createElement(e.p,null,"As the last line of code in the file, you need to call ",n.a.createElement(e.code,null,"express-graphql"),", wrap it with ",n.a.createElement(e.code,null,"micro-cors")," and export it:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"module.exports = CORS(server({ schema, rootValue }))")),n.a.createElement(e.p,null,"Now you should be able to run ",n.a.createElement(e.code,null,"npm start")," inside the directory containing the API and you should be handed a URL which will show the following when opened in a browser window:"),n.a.createElement(e.p,null,n.a.createElement(m["a"],{src:i()("/docs/graphql/api.png"),width:"550",height:"307"})),n.a.createElement(e.p,null,"On the first glance, it looks like an error. Well... It actually is one."),n.a.createElement(e.p,null,"But in our case, it's a sign that you've managed to set up the code for the GraphQL API properly. Why? Because it indicates that the endpoint is able to accept data (the error comes directly from ",n.a.createElement(e.code,null,"express-graphql"),")."),n.a.createElement(e.h2,null,"Deploying the API"),n.a.createElement(e.p,null,"After we've finished building the API endpoint, we need to deploy it. Simply run this command in your terminal:"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"now")),n.a.createElement(e.p,null,"Once ",n.a.createElement(p["a"],{color:"#000"})," has finished uploading the files, you'll see a URL that points to your freshly created API. We'll use this address later in the application and load some data from it."),n.a.createElement(e.p,null,"But in the case of a real API (not used for testing purposes), you would now have to ",n.a.createElement(E["d"],{href:"/docs/features/aliases"},"assign an alias")," to it."),n.a.createElement(e.h2,null,"Building the Client"),n.a.createElement(e.p,null,"Now that we have the deployment for the API endpoint in place, we need to build an application that loads the data from there and shows it to the visitor. As a framework, we'll use ",n.a.createElement(e.a,{href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"),", a neat way of building ",n.a.createElement(e.a,{href:"http://reactjs.com/"},"React")," apps."),n.a.createElement(e.p,null,'Creating the project\'s file structure is as easy as running this command (the directory will be called "graphql-client"):'),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"create-react-app graphql-client")),n.a.createElement(e.p,null,"Then you can start the development server by running this command:"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"npm start")),n.a.createElement(e.p,null,"This works because inside the ",n.a.createElement(e.code,null,"package.json")," file, there's a script property named ",n.a.createElement(e.code,null,"start")," defined that executes the ",n.a.createElement(e.code,null,"react-scripts")," start command when run in the terminal or on the server."),n.a.createElement(e.h3,null,'Installing "react-apollo"'),n.a.createElement(e.p,null,"In order to make the application capable of loading data using ",n.a.createElement(e.a,{href:"http://graphql.org/"},"GraphQL"),", we need to firstly install ",n.a.createElement(e.a,{href:"https://www.npmjs.com/package/react-apollo"},"react-apollo"),", a package that provides all of the tools necessary for interacting with a ",n.a.createElement(e.a,{href:"http://graphql.org/"},"GraphQL")," API using ",n.a.createElement(e.a,{href:"http://reactjs.com/"},"React"),"."),n.a.createElement(e.p,null,"To install it, run this ",n.a.createElement(e.a,{href:"https://docs.npmjs.com/cli/install"},"command"),' in a separate terminal tab (please ensure that you\'re inside the "graphq-client" directory):'),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"npm install --save react-apollo")),n.a.createElement(e.h3,null,"Adding the Communicating Interface"),n.a.createElement(e.p,null,"Once all of them have finished installing, open the ",n.a.createElement(e.code,null,"index.js")," file inside the ",n.a.createElement(e.code,null,"src")," directory. Now remove all the code and start fresh with loading all packages (including React) and the built-in ",n.a.createElement(e.code,null,"<App/>")," component:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"import React from 'react'\nimport ReactDOM from 'react-dom'\n\nimport { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'\n\nimport App from './App'")),n.a.createElement(e.p,null,"Continue with creating an instance of ",n.a.createElement(e.code,null,"ApolloClient")," and pointing it to your GraphQL server created earlier:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"const client = new ApolloClient({\n  networkInterface: createNetworkInterface({ uri: ",n.a.createElement(g["b"].B,null,"'REPLACE_THIS_WITH_YOUR_API_URL'")," })\n})")),n.a.createElement(e.p,null,"As the next step, we need to connect your client instance to the component tree. This can be done using the ",n.a.createElement(e.code,null,"ApolloProvider")," component. Generally, it should be placed somewhere high in your view hierarchy, above all places where you need to access data."),n.a.createElement(e.p,null,"In our case, we only have one existing component (",n.a.createElement(e.code,null,"<App/>"),", which was already there when we generated the application). In turn, we only need to wrap this one with the ",n.a.createElement(e.code,null,"ApolloProvider")," component:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"ReactDOM.render(\n  <ApolloProvider client={client}>\n    <App />\n  </ApolloProvider>\n  ,\n  document.getElementById('root')\n)")),n.a.createElement(e.h3,null,"Loading Data from the GraphQL Server"),n.a.createElement(e.p,null,'Now that the interface for communicating with the API endpoint is in place, the only thing left for displaying the "Hello World" example is telling the client exactly which data to request.'),n.a.createElement(e.p,null,"Open the ",n.a.createElement(e.code,null,"App.js")," file inside the ",n.a.createElement(e.code,null,"src")," directory, remove its content and start with loading all packages required:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"import React from 'react'\nimport { gql, graphql } from 'react-apollo'\n")),n.a.createElement(e.p,null,"Next, use ",n.a.createElement(e.code,null,"gql")," to create the data query and assign it to a constant. This will tell ",n.a.createElement(e.code,null,"react-apollo")," to only load the ",n.a.createElement(e.code,null,"hello")," property (which we've defined earlier while ",n.a.createElement(e.a,{href:"https://zeit.co/docs/examples/graphql#building-the-api"},"writing the GraphQL API"),"):"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"const myQuery = gql`{ hello }`")),n.a.createElement(e.p,null,"Now we only need to create the ",n.a.createElement(e.code,null,"<App/>")," component. Let's just render a heading with the data from the API inside it:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"class App extends React.Component {\n  render() {\n    return <h1>{this.props.data.hello}</h1>\n  }\n}")),n.a.createElement(e.p,null,"Because we want to use it inside the ",n.a.createElement(e.code,null,"index.js")," file (we already loaded it there), we need to export it now. But to receive the data using the ",n.a.createElement(e.code,null,"react-apollo")," package, we also need to wrap the component into the ",n.a.createElement(e.code,null,"graphql()")," helper and pass the query to it:"),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,"export default graphql(myQuery)(App)")),n.a.createElement(e.p,null,"That's all for building the client!"),n.a.createElement(e.p,null,"You should now be able to access the app on the address you saw in the terminal while running the ",n.a.createElement(e.code,null,"npm start")," command ",n.a.createElement(E["a"],{href:"#building-the-client"},"earlier"),". By default, it should be the following one: ",n.a.createElement(e.a,{href:"http://localhost:3000"},"http://localhost:3000"),"."),n.a.createElement(e.p,null,"In the browser, the client should look like this:"),n.a.createElement(e.p,null,n.a.createElement(m["a"],{src:i()("/docs/graphql/client.png"),width:"550",height:"307"})),n.a.createElement(e.h2,null,"Deploying the Client"),n.a.createElement(e.p,null,"Pat yourself on the shoulder! You've managed to build your first GraphQL API, deploy it and even create a client that pulls data from it. Isn't that cool? Absolutely!"),n.a.createElement(e.p,null,"So guess what's next! Now we'll make the client accessible from all over the world as well."),n.a.createElement(e.p,null,"But before we can do that, we need to prepare it by installing a tiny tool of ours (named ",n.a.createElement(e.a,{href:"https://github.com/zeit/serve"},"serve"),"). Because ",n.a.createElement(e.code,null,"create-react-app")," doesn't come with a built-in webserver that can be used in production, you need to provide your own. So let's install ",n.a.createElement(e.a,{href:"https://github.com/zeit/serve"},"serve"),' by running this command in the terminal (inside the "graphql-client" directory):'),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"npm install --save serve")),n.a.createElement(e.p,null,"Then you need to add the ",n.a.createElement(e.code,null,"now-start")," property to your ",n.a.createElement(e.code,null,"package.json")," file. The command specified inside it will be run on now when the deployment is about to start."),n.a.createElement(e.p,null,n.a.createElement(u["a"],null,'"scripts": {\n  ...\n  "now-start": "serve -s ./build"\n}')),n.a.createElement(e.p,null,"Now you can do the same you did for the API. Deploy the client by running this command:"),n.a.createElement(e.p,null,n.a.createElement(d["a"],null,"now")),n.a.createElement(e.p,null,"Open the URL provided by ",n.a.createElement(p["a"],{color:"#000"}),' and you should see the "Hello world!" example again. This means that you did everything right and your first GraphQL application is online. Well done!'))}))},6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=n;t.setAssetPrefix=r;var l=void 0;function n(e){if(/^https?:\/\//.test(e))return e;var t=e.replace(/^\//,"");return(l||"")+"/static/"+t}function r(e){l=e}},7:function(e,t,a){e.exports=a(6)},8:function(e,t,a){"use strict";var l=a(2);var n=a.n(l);var r=a(0);var o=a.n(r);var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)if(Object.prototype.hasOwnProperty.call(a,l))e[l]=a[l]}return e};var i=function e(t){var a=t.src,l=t.width,r=t.height,c=t.margin,i=void 0===c?40:c,s=t.caption,h=t.video,p=void 0===h?false:h,m=t.muted,u=void 0===m?true:m,d=t.autoPlay,E=void 0===d?false:d;if(!l)throw new Error("Please define the width of the image!");if(!r)throw new Error("Please define the height of the image!");var g=String(r/l*100)+"%";return o.a.createElement("figure",{style:{margin:i+"px 0"},className:"jsx-2503757143"},o.a.createElement("main",{style:{width:l},className:"jsx-2503757143"},o.a.createElement("div",{style:{paddingBottom:g},className:"jsx-2503757143"},p?o.a.createElement("video",{src:a,muted:u,autoPlay:E,className:"jsx-2503757143"}):o.a.createElement("img",{src:a,className:"jsx-2503757143"})),s&&o.a.createElement("p",{className:"jsx-2503757143"},s)),o.a.createElement(n.a,{styleId:"2503757143",css:["figure.jsx-2503757143{text-align:center;display:block;}","main.jsx-2503757143{margin:0 auto;max-width:100%;}","div.jsx-2503757143{position:relative;}","img.jsx-2503757143,video.jsx-2503757143{position:absolute;top:0;left:0;height:100%;width:100%;}","p.jsx-2503757143{font-size:11px;text-align:center;color:#999;}"]}))};var s=function e(t){return o.a.createElement(i,c({},t,{video:true}))};t["a"]=i}},[347]);return{page:e.default}});