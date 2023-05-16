"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79193],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return o?r.createElement(g,i(i({ref:t},c),{},{components:o})):r.createElement(g,i({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4901:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={id:"google-auth",title:"Google Auth","example-tags":["antd","auth-provider","google-sign-in"]},i=void 0,p={unversionedId:"examples/auth-provider/google-auth",id:"examples/auth-provider/google-auth",title:"Google Auth",description:"You can use Google Login to control access and provide identity for your app. This example will guide you through how to connect Google Login into your project using refine.",source:"@site/docs/examples/auth-provider/google-auth.md",sourceDirName:"examples/auth-provider",slug:"/examples/auth-provider/google-auth",permalink:"/docs/examples/auth-provider/google-auth",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/docs/examples/auth-provider/google-auth.md",tags:[],version:"current",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"google-auth",title:"Google Auth","example-tags":["antd","auth-provider","google-sign-in"]},sidebar:"someSidebar",previous:{title:"Auth0",permalink:"/docs/examples/auth-provider/auth0"},next:{title:"Keycloak",permalink:"/docs/examples/auth-provider/keycloak"}},l={},u=[],c=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const s={toc:u},m="wrapper";function g(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use Google Login to control access and provide identity for your app. This example will guide you through how to connect Google Login into your project using ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are developing your own OAuth application, it's important to add the URLs of both your deployed application and your local development to the list of allowed origins in the OAuth app settings. Failure to do so can cause the app to fail."),(0,n.kt)("p",{parentName:"admonition"},"For more detailed guidance, you may find this helpful ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=HtJKUQXmtok"},"video tutorial"),".")),(0,n.kt)(c,{path:"auth-google-login",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);