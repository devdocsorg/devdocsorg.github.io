"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59580],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),h=n,v=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return t?o.createElement(v,a(a({ref:r},u),{},{components:t})):o.createElement(v,a({ref:r},u))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},10009:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const i={id:"usePublish",title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},a=void 0,s={unversionedId:"api-reference/core/hooks/live/usePublish",id:"api-reference/core/hooks/live/usePublish",title:"usePublish",description:"usePublish returns the publish method from liveProvider. It is useful when you want to publish a custom event.",source:"@site/docs/api-reference/core/hooks/live/usePublish.md",sourceDirName:"api-reference/core/hooks/live",slug:"/api-reference/core/hooks/live/usePublish",permalink:"/docs/api-reference/core/hooks/live/usePublish",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/docs/api-reference/core/hooks/live/usePublish.md",tags:[],version:"current",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"usePublish",title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},sidebar:"someSidebar",previous:{title:"useInvalidate",permalink:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},next:{title:"useSubscription",permalink:"/docs/api-reference/core/hooks/live/useSubscription"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Publish Properties",id:"publish-properties",level:2},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"type <PropTag required/>",id:"type-",level:3},{value:"payload <PropTag required/>",id:"payload-",level:3},{value:"date <PropTag required/>",id:"date-",level:3}],u=(c="PropTag",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const d={toc:l},h="wrapper";function v(e){let{components:r,...t}=e;return(0,n.kt)(h,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usePublish")," returns the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish"},(0,n.kt)("inlineCode",{parentName:"a"},"publish"))," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),". It is useful when you want to publish a custom event."),(0,n.kt)("admonition",{type:"info-tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"refine")," use this hook internally in mutation hooks to ",(0,n.kt)("inlineCode",{parentName:"p"},"publish")," events after successful mutation. You can refer liveProvider's ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish-events-from-hooks"},"Publish Events from Hooks")," section for more information.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n\npublish({\n    channel: "custom-channel-name",\n    type: "custom-event-name",\n    payload: {\n        ids: [1, 2, 3],\n        "custom-property": "custom-property-value",\n    },\n    date: new Date(),\n});\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This method is used to publish an event on the client side. Beware that publishing events on the client side is not recommended and the best practice is to publish events from the server side. You can refer ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish-events-from-api"},"Publish Events from API")," to see which events must be published from the server.")),(0,n.kt)("h2",{id:"publish-properties"},"Publish Properties"),(0,n.kt)("p",null,"Will be passed to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish"},"publish")," method from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"liveProvider")," as a parameter. You can use these properties from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#publish"},(0,n.kt)("inlineCode",{parentName:"a"},"publish"))," method and use them to publish an event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#liveevent"},"LiveEvent")," interface for type of properties.")),(0,n.kt)("h3",{id:"channel-"},"channel ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The channel name to publish the event."),(0,n.kt)("h3",{id:"type-"},"type ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The event name to publish."),(0,n.kt)("h3",{id:"payload-"},"payload ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The payload to publish."),(0,n.kt)("h3",{id:"date-"},"date ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"The date of the event."))}v.isMDXComponent=!0}}]);