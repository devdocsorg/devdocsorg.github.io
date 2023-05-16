"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?i.createElement(f,n(n({ref:t},p),{},{components:r})):i.createElement(f,n({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<a;d++)n[d]=r[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(87462),o=(r(67294),r(3905));const a={id:"directus",title:"Directus","example-tags":["antd","community","data-provider","directus"]},n=void 0,l={unversionedId:"examples/data-provider/directus",id:"version-3.xx.xx/examples/data-provider/directus",title:"Directus",description:"refine full-featured Directus Data Provider it allows you to get to your data quickly without requiring any additional setup or code. This example will show how to utilize the refine Directus Provider in this project.",source:"@site/versioned_docs/version-3.xx.xx/examples/data-provider/directus.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/directus",permalink:"/docs/3.xx.xx/examples/data-provider/directus",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/examples/data-provider/directus.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"directus",title:"Directus","example-tags":["antd","community","data-provider","directus"]},sidebar:"someSidebar",previous:{title:"Appwrite",permalink:"/docs/3.xx.xx/examples/data-provider/appwrite"},next:{title:"Elide",permalink:"/docs/3.xx.xx/examples/data-provider/elide"}},s={},d=[],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," full-featured ",(0,o.kt)("a",{parentName:"p",href:"https://directus.io/"},"Directus")," Data Provider it allows you to get to your data quickly without requiring any additional setup or code. This example will show how to utilize the ",(0,o.kt)("strong",{parentName:"p"},"refine")," Directus Provider in this project."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tspvivek/refine-directus"},"View Directus Example Source")),(0,o.kt)("p",null,"Directus Data Provider is developed by the community. We would like to thank ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tspvivek"},"tspvivek")," for his interest and contribution."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Username"),": ",(0,o.kt)("a",{parentName:"li",href:"mailto:demo@demo.com"},"demo@demo.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Password"),": 123456")),(0,o.kt)("iframe",{loading:"lazy",src:"https://codesandbox.io/embed/github/tspvivek/refine-directus/tree/master/example?view=preview&theme=dark&codemirror=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-directus",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);