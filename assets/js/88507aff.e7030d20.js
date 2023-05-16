"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),s=n(85162);const i={title:"\u26a1 Quick Start",description:"Getting started with docusaurus-json-schema-plugin"},u=void 0,l={unversionedId:"quick-start",id:"quick-start",title:"\u26a1 Quick Start",description:"Getting started with docusaurus-json-schema-plugin",source:"@site/jsonschema/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/jsonschema/quick-start",draft:!1,tags:[],version:"current",frontMatter:{title:"\u26a1 Quick Start",description:"Getting started with docusaurus-json-schema-plugin"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuring <code>docusaurus.config.js</code>",id:"configuring-docusaurusconfigjs",level:3},{value:"Configuring website <code>tsconfig.json</code>",id:"configuring-website-tsconfigjson",level:3},{value:"Usage",id:"usage",level:2},{value:"Output examples",id:"output-examples",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Getting started with ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus-json-schema-plugin"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus-json-schema-plugin")," using your desired package manager :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install docusaurus-json-schema-plugin\n")),(0,r.kt)("admonition",{title:"NPM only",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When installing with npm, add this to the previous command : ",(0,r.kt)("inlineCode",{parentName:"p"},"--prefer-dedupe")),(0,r.kt)("p",{parentName:"admonition"},"Why ",(0,r.kt)("inlineCode",{parentName:"p"},"--prefer-dedupe")," ? Because of ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/warnings/invalid-hook-call-warning.html"},"Invalid Hook Call Warning")," common issue in projets")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"configuring-docusaurusconfigjs"},"Configuring ",(0,r.kt)("inlineCode",{parentName:"h3"},"docusaurus.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'{\n   // Allows use of @theme/JSONSchemaEditor or @theme/JSONSchemaViewer\n   themes: ["docusaurus-json-schema-plugin"],\n}\n')),(0,r.kt)("h3",{id:"configuring-website-tsconfigjson"},"Configuring website ",(0,r.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "extends": "@tsconfig/docusaurus/tsconfig.json",\n  "compilerOptions": {\n    "baseUrl": ".",\n    "resolveJsonModule": true,\n    // Extending "@tsconfig/docusaurus/tsconfig.json".types with "docusaurus-json-schema-plugin"\n    "types": ["node", "@docusaurus/module-type-aliases", "@docusaurus/theme-classic", "docusaurus-json-schema-plugin"]\n  }\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You are free to fetch your JSON Schema ",(0,r.kt)("strong",{parentName:"p"},"the way you want")),(0,r.kt)(o.default,{mdxType:"Tabs"},(0,r.kt)(s.default,{value:"staticAsset",label:"From a static asset",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Suppose you have the following asset defined :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/static/schemas/mySuperSchema.json"',title:'"/static/schemas/mySuperSchema.json"'},'{\n   "type":"array",\n   "description":"Represent a street address such as [\'1600\',\'Pennsylvania\',\'Avenue\',\'NW\']",\n   "items":false,\n   "prefixItems":[\n      {\n         "type":"number",\n         "description":"The address number"\n      },\n      {\n         "type":"string",\n         "description":"The name of the street"\n      },\n      {\n         "enum":[\n            "Street",\n            "Avenue",\n            "Boulevard"\n         ],\n         "description":"The type of street"\n      },\n      {\n         "enum":[\n            "NW",\n            "NE",\n            "SW",\n            "SE"\n         ],\n         "description":"The city quadrant of the address"\n      }\n   ]\n}\n')),(0,r.kt)("p",null,"Which you can use in your MDX pages as :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/docs/example.mdx"',title:'"/docs/example.mdx"'},'import CodeBlock from \'@theme/CodeBlock\';\nimport Schema from "@site/static/schemas/mySuperSchema.json";\nimport JSONSchemaViewer from "@theme/JSONSchemaViewer";\n\n# My super Schema \n\n<JSONSchemaViewer schema={ Schema } />\n\n# Source :\n\n<CodeBlock language="json">{JSON.stringify(Schema, null, 2)}</CodeBlock>\n'))),(0,r.kt)(s.default,{value:"fetch",label:"From the web",mdxType:"TabItem"},(0,r.kt)("p",null,"Suppose your specifications are available somewhere ( ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/"},"Github Gists")," / ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/snippets/new"},"Bitbucket Snippets")," / ... )  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/API.tsx"',title:'"/src/pages/API.tsx"'},'import React from "react"\nimport Layout from "@theme/Layout"\nimport JSONSchemaViewer from "@theme/JSONSchemaViewer"\n\nexport default function ExamplePage(): JSX.Element {\n    const [schema, setSchema] = React.useState(undefined as undefined | Error | unknown);\n\n    React.useEffect( () => {\n        fetch(\n            // TODO Your link here\n            "https://gist.githubusercontent.com/jy95/...",\n            {\n                headers: {\n                    \'Accept\': \'application/json\',\n                }\n            }\n        )\n            .then((response) => response.json())\n            .then((data) => setSchema(data))\n            .catch( (err) => setSchema(err) )\n    }, [schema])\n\n    return (\n        <Layout\n            title={`My super JSON Schema`}\n            description="Description will go into a meta tag in <head />"\n        >\n            {schema === undefined && <div>Loading ...</div>}\n            {schema !== undefined && schema instanceof Error && <div>Houston we have a problem : {schema.message}</div>}\n            {schema !== undefined && !(schema instanceof Error) && <JSONSchemaViewer schema={schema} />}\n        </Layout>\n    )\n}\n')),(0,r.kt)("p",null,"Which you can see by access related page (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/API")," in that case )")),(0,r.kt)(s.default,{value:"other",label:"From ...",mdxType:"TabItem"},(0,r.kt)("p",null,"With the two previous ",(0,r.kt)("inlineCode",{parentName:"p"},"From")," sections, you get the point that there are unlimited possibilities :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON Schema directly defined in the code"),(0,r.kt)("li",{parentName:"ul"},"NPM packages that exports ",(0,r.kt)("a",{parentName:"li",href:"https://www.schemastore.org/json/"},"JSON Schema")," directly"),(0,r.kt)("li",{parentName:"ul"},"...")))),(0,r.kt)("h2",{id:"output-examples"},"Output examples"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We have many examples available on ",(0,r.kt)("a",{parentName:"p",href:"demo/viewer"},"documentation")," . Check them to see lib in action \ud83d\ude09")))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(87462),r=n(67294),o=n(86010),s=n(12466),i=n(16550),u=n(91980),l=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,l]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==i&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},s,{className:(0,o.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}}}]);