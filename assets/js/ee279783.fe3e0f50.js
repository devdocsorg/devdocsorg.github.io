"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"useModal",title:"useModal"},l=void 0,i={unversionedId:"api-reference/antd/hooks/ui/useModal",id:"api-reference/antd/hooks/ui/useModal",title:"useModal",description:"The useModal hook helps you manage the Ant Desing Modal component.",source:"@site/docs/api-reference/antd/hooks/ui/useModal.md",sourceDirName:"api-reference/antd/hooks/ui",slug:"/api-reference/antd/hooks/ui/useModal",permalink:"/docs/api-reference/antd/hooks/ui/useModal",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/docs/api-reference/antd/hooks/ui/useModal.md",tags:[],version:"current",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"useModal",title:"useModal"},sidebar:"someSidebar",previous:{title:"useTable",permalink:"/docs/api-reference/antd/hooks/table/useTable"},next:{title:"<AuthPage>",permalink:"/docs/api-reference/antd/components/antd-auth-page"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return Value",id:"return-value",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:s},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useModal")," hook helps you manage the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/modal"},"Ant Desing Modal")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { show, close, modalProps } = useModal();\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," props to control the ",(0,r.kt)("inlineCode",{parentName:"p"},"modal")," visibility. You have to descturt ",(0,r.kt)("inlineCode",{parentName:"p"},"modalProps")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal/>")," component."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'// highlight-start\nimport { useModal } from "@refinedev/antd";\nimport { Modal, Button } from "antd";\n// highlight-end\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { show, modalProps } = useModal();\n\n    return (\n        <>\n            // highlight-start\n            <Button onClick={show}>Show Modal</Button>\n            <Modal {...modalProps}>\n                <p>Modal Content</p>\n            </Modal>\n            // highlight-end\n        </>\n    );\n};\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Here, we show a button somewhere on the page and use ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," on it's onClick callback to trigger opening of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>"),". When the user clicks on the button, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>")," appears."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(d,{module:"@refinedev/antd/useModal",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the visibility state of the Modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that can open the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))))}h.isMDXComponent=!0}}]);