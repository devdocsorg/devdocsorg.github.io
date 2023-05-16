"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31135,8851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(67294),a=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(87462),a=n(67294),r=n(86010),i=n(12466),s=n(16550),c=n(91980),l=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[c,l]=m({queryString:n,groupId:o}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),b=(()=>{const e=c??p;return f({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,r]),tabValues:r}}var b=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),o=l[n].value;o!==s&&(p(t),c(o))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function N(e){const t=h(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},a.createElement(v,(0,o.Z)({},e,t)),a.createElement(g,(0,o.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return a.createElement(N,(0,o.Z)({key:String(t)},e))}},87801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api-reference/core/hooks/useNotification/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},"setInitialRoutes(['/'])\n// visible-block-start\nimport { useNotification } from '@pankod/refine-core'\nimport { Button, Stack } from '@pankod/refine-mui'\n\nconst ExamplePage: React.FC = () => {\n  const { open, close } = useNotification()\n\n  return (\n    <Stack spacing={2} direction=\"row\">\n      <Button\n        color=\"success\"\n        variant=\"outlined\"\n        size=\"small\"\n        onClick={() =>\n          open?.({\n            type: 'success',\n            message: 'Success',\n            description: 'Success description',\n          })\n        }\n      >\n        Success\n      </Button>\n      <Button\n        color=\"error\"\n        variant=\"outlined\"\n        size=\"small\"\n        onClick={() =>\n          open?.({\n            type: 'error',\n            message: 'Error',\n            description: 'Error description',\n          })\n        }\n      >\n        Error\n      </Button>\n\n      <Button\n        color=\"secondary\"\n        variant=\"outlined\"\n        size=\"small\"\n        onClick={() =>\n          open?.({\n            type: 'progress',\n            message: 'Progress',\n            undoableTimeout: 5,\n            cancelMutation: () => {\n              alert('cancelMutation')\n            },\n          })\n        }\n      >\n        Progress\n      </Button>\n    </Stack>\n  )\n}\n// visible-block-end\nsetRefineProps({\n  DashboardPage: () => <ExamplePage />,\n  resources: [\n    {\n      name: 'post',\n      create: () => {},\n    },\n  ],\n})\nrender(<RefineMuiDemo />)\n")))}d.isMDXComponent=!0},82196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));n(74866),n(85162),n(87801);const r={title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/notification/useNotification/index.ts"},i=void 0,s={unversionedId:"api-reference/core/hooks/useNotification/index",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/index",title:"useNotification",description:"It can be used to open or close notification at any time. It returns the open and close method from notificationProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/notification/useNotification/index.ts"},sidebar:"someSidebar",previous:{title:"useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},next:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>open</code>",id:"open",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use a undoable notification?",id:"how-to-use-a-undoable-notification",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return Values",id:"return-values",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It can be used to ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," notification at any time. It returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"notificationProvider"))," under the hood."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Here is a basic example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { open, close } = useNotification()\n\n// open notification\nopen?.({\n  type: 'success',\n  message: 'Success',\n  description: 'This is a success message',\n})\n\n// close notification\nclose?.('notification-key')\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"open"},(0,a.kt)("inlineCode",{parentName:"h3"},"open")),(0,a.kt)("p",null,"You can call this method to open a new notification box."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { open } = useNotification()\n\nopen?.({\n  type: 'success',\n  message: 'Success',\n  description: 'This is a success message',\n})\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#open-notification-params"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Open Notification Params")," interface for more information \u2192"))),(0,a.kt)("h3",{id:"close"},(0,a.kt)("inlineCode",{parentName:"h3"},"close")),(0,a.kt)("p",null,"You can close a notification with a ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { close } = useNotification()\n\nclose?.('notification-key')\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#close-notification-params"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"Close Notification Params")," interface for more information \u2192"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You must pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," method. This key is used to close the notification.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-use-a-undoable-notification"},"How to use a undoable notification?"),(0,a.kt)("p",null,"It should be ",(0,a.kt)("inlineCode",{parentName:"p"},"type=progress")," to show undoable notifications. A function can then be triggered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { open } = useNotification()\n\nopen?.({\n  type: 'progress',\n  message: 'Progress',\n  undoableTimeout: 5,\n  cancelMutation: () => {\n    // when undo button is clicked run this callback\n  },\n})\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-values"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"open"),(0,a.kt)("td",{parentName:"tr",align:null},"Open Notification Params"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences/#open-notification-params"},(0,a.kt)("inlineCode",{parentName:"a"},"Open Notification Params")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close"),(0,a.kt)("td",{parentName:"tr",align:null},"Close Notification Params"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences/#close-notification-params"},(0,a.kt)("inlineCode",{parentName:"a"},"Close Notification Params")))))))}d.isMDXComponent=!0}}]);