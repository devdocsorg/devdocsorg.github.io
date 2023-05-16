"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"index",title:"1. Intro",tutorial:{prev:"tutorial/introduction/select-framework",next:"tutorial/getting-started/prepare-env"}},i=void 0,l={unversionedId:"tutorial/getting-started/index",id:"tutorial/getting-started/index",title:"1. Intro",description:"Now that you have selected the Ant Design option as your UI preference, let's get started!",source:"@site/docs/tutorial/1-getting-started/0-intro.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/index",permalink:"/docs/tutorial/getting-started/index",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/docs/tutorial/1-getting-started/0-intro.md",tags:[],version:"current",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Intro",tutorial:{prev:"tutorial/introduction/select-framework",next:"tutorial/getting-started/prepare-env"}}},p={},s=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("UIConditional"),c=d("Checklist"),u=d("ChecklistItem"),h={toc:s},k="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,r.kt)("p",null,"Now that you have selected the ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," option as your UI preference, let's get started!")),(0,r.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,r.kt)("p",null,"Now that you have selected the ",(0,r.kt)("strong",{parentName:"p"},"Chakra UI")," option as your UI preference, let's get started!")),(0,r.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,r.kt)("p",null,"Now that you have selected the ",(0,r.kt)("strong",{parentName:"p"},"headless")," option as your UI preference, let's get started!")),(0,r.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,r.kt)("p",null,"Now that you have selected the ",(0,r.kt)("strong",{parentName:"p"},"Mantine")," option as your UI preference, let's get started!")),(0,r.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,r.kt)("p",null,"Now that you have selected the ",(0,r.kt)("strong",{parentName:"p"},"Material UI")," option as your UI preference, let's get started!")),(0,r.kt)("admonition",{title:"Using CodeSandbox?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Prefer to go through this tutorial in an online code editor? That's possible!"),(0,r.kt)("details",null,(0,r.kt)("summary",null,'Follow these instructions, then go directly to "Generate CRUD pages automatically with Inferencer" section!'),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Set up StackBlitz")),(0,r.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/template-antd?file=src%2FApp.tsx"},"here")," to open the Ant Design template."))),(0,r.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/template-chakra-ui?file=src%2FApp.tsx"},"here")," to open the Chakra UI template."))),(0,r.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/template-headless?file=src%2FApp.tsx"},"here")," to open the headless template."))),(0,r.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/template-mantine?file=src%2FApp.tsx"},"here")," to open the Mantine template."))),(0,r.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/template-mui?file=src%2FApp.tsx"},"here")," to open the Material UI template."))),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click \u201cSign in\u201d on the top right to log in using your GitHub credentials.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the upper left of the StackBlitz editor window, click the "fork" button to fork the template (save to your own account dashboard).'))),(0,r.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition",start:4},(0,r.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-antd-boilerplate\u201d starter."))),(0,r.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition",start:4},(0,r.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-chakra-ui-boilerplate\u201d starter."))),(0,r.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition",start:4},(0,r.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-headless-boilerplate\u201d starter."))),(0,r.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition",start:4},(0,r.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-mantine-boilerplate\u201d starter."))),(0,r.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,r.kt)("ol",{parentName:"admonition",start:4},(0,r.kt)("li",{parentName:"ol"},"After the project loads, you will see a live preview of the \u201crefine-mui-boilerplate\u201d starter."))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Make Changes")),(0,r.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,r.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,r.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,r.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,r.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"In the files panel, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.tsx")," to open it. Afterwards, go to this part of the tutorial to learn how to make changes to this file: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer"))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Create a GitHub Repository")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Press the "Connect Repository" button at the top of your list of files, enter a new name for your repository, and click "Create repo & push".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you have changes to be commit to GitHub, a \u201cCommit\u201d button will appear at the top left of your workspace. Clicking on this will allow you to enter a commit message, and update your repository."))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"What's next?")),(0,r.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"!")),(0,r.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"!")),(0,r.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"!")),(0,r.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"!")),(0,r.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,r.kt)("p",{parentName:"admonition"},"Now you can navigate to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages"},"Generate CRUD pages automatically with Inferencer")," to start building with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"!")))),(0,r.kt)("h3",null,"Where are we going?"),(0,r.kt)("p",null,"In this unit, we will be covering the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up your development environment."),(0,r.kt)("li",{parentName:"ul"},"Creating a new project."),(0,r.kt)("li",{parentName:"ul"},"Generating CRUD pages for your data model."),(0,r.kt)("li",{parentName:"ul"},"Storing your project in a git repository."),(0,r.kt)("li",{parentName:"ul"},"Deploying your project to the cloud.")),(0,r.kt)("p",null,"As you make changes to your project, you can commit them to your GitHub repository. Netlify listens for changes to your GitHub repository to automatically rebuilds and deploys your application on every commit. This allows anyone to access and view the latest version of your app."),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(u,{id:"getting-started",mdxType:"ChecklistItem"},"Let's prepare to build a refine project!")))}g.isMDXComponent=!0}}]);