"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return r?a.createElement(h,o(o({ref:t},l),{},{components:r})):a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:n,o[1]=d;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},39839:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={toc:[]},o="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," supports many data providers. To include them in your project, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"npm install [packageName]")," or you can select the preferred data provider with the ",(0,n.kt)("inlineCode",{parentName:"p"},"npm create refine-app@latest projectName")," during the project creation phase with CLI. This will allow you to easily use these data providers in your project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/simple-rest"},"Simple REST API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/graphql"},"GraphQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJS CRUD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/airtable"},"Airtable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi")," - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/appwrite"},"Appwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/medusa"},"Medusa"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Community \u2764\ufe0f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/resulturan/refine-firebase"},"Firebase")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/resulturan"},"rturan29")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tspvivek/refine-directus"},"Directus")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tspvivek"},"tspvivek")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/chirdeeptomar/refine-elide-rest"},"Elide")," by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/chirdeeptomar"},"chirdeeptomar"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If you have created a custom data provider and would like to share it with the community, please don't hesitate to get in touch with us. We would be happy to include it on this page for others to use.")))}d.isMDXComponent=!0},6604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905)),i=r(39839);const o={id:"index",title:"1. Data Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-dataprovider/swizzle"}},d=void 0,s={unversionedId:"tutorial/understanding-dataprovider/index",id:"tutorial/understanding-dataprovider/index",title:"1. Data Provider",description:"The data provider unit is optional for the tutorial and can be skipped to next unit - Adding CRUD PagesAdding CRUD PagesAdding CRUD PagesAdding CRUD PagesAdding CRUD Pages",source:"@site/docs/tutorial/2-understanding-dataprovider/0-intro.md",sourceDirName:"tutorial/2-understanding-dataprovider",slug:"/tutorial/understanding-dataprovider/index",permalink:"/docs/tutorial/understanding-dataprovider/index",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/docs/tutorial/2-understanding-dataprovider/0-intro.md",tags:[],version:"current",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Data Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-dataprovider/swizzle"}}},p={},l=[{value:"What is data provider?",id:"what-is-data-provider",level:2},{value:"Using Data Providers in refine",id:"using-data-providers-in-refine",level:2},{value:"How are data provider methods used in the app?",id:"how-are-data-provider-methods-used-in-the-app",level:2},{value:"Supported Data Providers",id:"supported-data-providers",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=u("UIConditional"),c=u("Checklist"),h=u("ChecklistItem"),f={toc:l},k="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The data provider unit is optional for the tutorial and can be skipped to next unit - ",(0,n.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/index"},"Adding CRUD Pages")),(0,n.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/antd/index"},"Adding CRUD Pages")),(0,n.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/mantine/index"},"Adding CRUD Pages")),(0,n.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/chakra-ui/index"},"Adding CRUD Pages")),(0,n.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/mui/index"},"Adding CRUD Pages")),"\nif desired.")),(0,n.kt)("h2",{id:"what-is-data-provider"},"What is data provider?"),(0,n.kt)("p",null,"The\xa0data provider\xa0acts as a data layer for your app that makes the HTTP requests and encapsulates how the data is retrieved. ",(0,n.kt)("strong",{parentName:"p"},"refine")," consumes these methods via data hooks."),(0,n.kt)("p",null,"You don't need worry about creating data providers from scratch. ",(0,n.kt)("strong",{parentName:"p"},"refine")," offers built-in data provider support for the most popular ",(0,n.kt)("a",{parentName:"p",href:"#supported-data-providers"},"API providers"),". So you can use one of them or you can create your own data provider according to your needs."),(0,n.kt)("p",null,"We'll see how to create data provider in the next sections."),(0,n.kt)("p",null,"Data providers can communicate with ",(0,n.kt)("inlineCode",{parentName:"p"},"REST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"RPC"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"SOAP")," based API's. You can imagine the data provider is an adapter between refine and the API."),(0,n.kt)("div",null,(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/providers/data-provider/tutorial_dataprovider_flog.png"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"The typical data provider has following methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { DataProvider } from "@refinedev/core";\n\nconst dataProvider: DataProvider = {\n    create: ({ resource, variables, meta }) => Promise,\n    deleteOne: ({ resource, id, variables, meta }) => Promise,\n    getList: ({\n        resource,\n        pagination,\n        sorters,\n        filters,\n        meta,\n    }) => Promise,\n    getOne: ({ resource, id, meta }) => Promise,\n    update: ({ resource, id, variables, meta }) => Promise,\n    getApiUrl: () => "",\n    ...\n}\n')),(0,n.kt)("p",null,"These methods are used to perform data operations by ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," comes with different data providers out of the box, but the one we\u2019re interested in and will be using in this tutorial is the\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"refine-simple-rest"),"\xa0data provider, a data provider for communicating with RESTful APIs."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/simple-rest"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"refine-simple-rest")," source code ","\u2192")),(0,n.kt)("h2",{id:"using-data-providers-in-refine"},"Using Data Providers in refine"),(0,n.kt)("p",null,"In the previous units, we consumed the API and show the data in the auto-generated Inferencer pages. To allow refine to communicate with the API, we registered a data provider using ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," property of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'...\nimport dataProvider from "@refinedev/simple-rest";\n\n<Refine\n    ...\n    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n/>;\n')),(0,n.kt)("p",null,"You can refer to the ",(0,n.kt)("strong",{parentName:"p"},"refine")," component ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#dataprovider"},"dataProvider")," prop documentation for more detailed information."),(0,n.kt)("h2",{id:"how-are-data-provider-methods-used-in-the-app"},"How are data provider methods used in the app?"),(0,n.kt)("p",null,"We use ",(0,n.kt)("strong",{parentName:"p"},"refine's")," data hooks whenever we need to fetch data from the API. These data hooks are connected to data provider methods internally. The required parameters are passed to the data provider methods, and the response from the API is returned."),(0,n.kt)("p",null,"To illustrate this internal connection, imagine we want to get all records from the ",(0,n.kt)("inlineCode",{parentName:"p"},"post")," resource using refine's ",(0,n.kt)("inlineCode",{parentName:"p"},"useList")," data hook."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/pages/posts/index.tsx"',title:'"src/pages/posts/index.tsx"'},"import { useList } from '@refinedev/core'\n\nconst postUseListResult = useList({\n  resource: 'posts',\n  sorters: [\n    {\n      field: 'id',\n      order: 'desc',\n    },\n  ],\n  filters: [\n    {\n      field: 'title',\n      operator: 'contains',\n      value: 'hello',\n    },\n  ],\n})\n")),(0,n.kt)("p",null,"As we can see, the parameters passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useList")," hook are forwarded to the data provider's ",(0,n.kt)("inlineCode",{parentName:"p"},"getList")," method internally. In the background, ",(0,n.kt)("strong",{parentName:"p"},"refine")," connects all data provider methods to appropriate data hooks."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="dataProvider.ts"',title:'"dataProvider.ts"'},'const dataProvider = {\n    getList: (params) => {\n        console.log(params);\n        /*\n        {\n          "resource": "posts",\n          "sorters": [\n            {\n              "field": "id",\n              "order": "desc"\n            }\n          ],\n          "filters": [\n            {\n              "field": "title",\n              "operator": "contains",\n              "value": "hello"\n            }\n          ],\n        }\n        */\n    }\n    ...\n}\n')),(0,n.kt)("h2",{id:"supported-data-providers"},"Supported Data Providers"),(0,n.kt)(i.ZP,{mdxType:"SupportedDataProviders"}),(0,n.kt)(c,{mdxType:"Checklist"},(0,n.kt)(h,{id:"data-provider-intro",mdxType:"ChecklistItem"},"I understood what is data provider and how it works."),(0,n.kt)(h,{id:"data-provider-intro-2",mdxType:"ChecklistItem"},"I learned that refine offers built-in data providers for the most popular systems.")))}g.isMDXComponent=!0}}]);