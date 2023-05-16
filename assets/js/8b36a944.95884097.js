"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44219,40458],{44893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var i=n(87462),r=(n(67294),n(3905)),o=n(9612),d=n(40458),s=n(48570),a=n.n(s);const l={description:"schema conditionally with dependentRequired (bidirectional) showcase",title:"\ud83d\udd01 dependentRequired (bidirectional)"},c="dependentRequired (bidirectional)",m={unversionedId:"demo-viewer/schema_conditionally/dependentRequired_bidirectional",id:"demo-viewer/schema_conditionally/dependentRequired_bidirectional",title:"\ud83d\udd01 dependentRequired (bidirectional)",description:"schema conditionally with dependentRequired (bidirectional) showcase",source:"@site/jsonschema/demo-viewer/schema_conditionally/dependentRequired_bidirectional.mdx",sourceDirName:"demo-viewer/schema_conditionally",slug:"/demo-viewer/schema_conditionally/dependentRequired_bidirectional",permalink:"/jsonschema/demo-viewer/schema_conditionally/dependentRequired_bidirectional",draft:!1,tags:[],version:"current",frontMatter:{description:"schema conditionally with dependentRequired (bidirectional) showcase",title:"\ud83d\udd01 dependentRequired (bidirectional)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd11 dependentRequired",permalink:"/jsonschema/demo-viewer/schema_conditionally/dependentRequired"},next:{title:"\ud83c\udfd7\ufe0f dependentSchemas",permalink:"/jsonschema/demo-viewer/schema_conditionally/dependentSchemas"}},u={},p=[],h={toc:p},w="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(w,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependentrequired-bidirectional"},"dependentRequired (bidirectional)"),(0,r.kt)("p",null,"JSON Schema :"),(0,r.kt)(o.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(d,null,2)),(0,r.kt)("p",null,"Viewer :"),(0,r.kt)(a(),{schema:d,mdxType:"JSONSchemaViewer"}))}b.isMDXComponent=!0},83375:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(86010),r=n(67294);const o={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function d(e){let{children:t,minHeight:n,url:d="http://localhost:3000",right:s}=e;return r.createElement("div",{className:o.browserWindow,style:{minHeight:n}},r.createElement("div",{className:o.browserWindowHeader},r.createElement("div",{className:o.buttons},r.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,i.Z)(o.browserWindowAddressBar,"text--truncate")},r.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),d),s||r.createElement("div",{className:o.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:o.bar}),r.createElement("span",{className:o.bar}),r.createElement("span",{className:o.bar})))),r.createElement("div",{className:o.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,n)=>{n.d(t,{Z:()=>x});var i=n(90814),r=n(67294),o=n(48764),d=n(74477),s=n(52263),a=n(45772),l=n.n(a),c=n(86010),m=n(83375);const u=e=>{let{if:t,maxWait:n,children:i}=e;const[o,d]=r.useState(t),[s]=r.useState(n);r.useEffect((()=>{!o&&t&&d(!0)}),[t]),r.useEffect((()=>{if(s){const e=setTimeout((()=>{d(!0)}),s);return()=>clearTimeout(e)}}),[s]);const a=r.useMemo((()=>o&&"function"==typeof i?i():null),[o]);if(void 0!==i&&"function"!=typeof i)throw new Error("Conditional component requires a function as a child");return a};var p=n(57482);const h="playgroundContainer_ppBt",w="playgroundHeader_DsVj",b="headerButton_QPem",g="playgroundPreview_jwe9",f="playgroundEditorWrapper_AfoV";n.g.Buffer=n.g.Buffer||o.lW;const v=e=>{let{query:t,code:n,css:i}=e;const{siteConfig:{customFields:o}}=(0,s.Z)(),[d,a]=r.useState(void 0),c=r.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const n=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);n.onmessage=function(e){let{data:r}=e;r.compressed&&a(`${o.LIVE_PREVIEW_URL}?code=${r.compressed}${i?`&css=${l().encode(i)}`:""}${t?`${t}`:""}`),n.terminate()},n.postMessage({code:e})}}),[t]);return r.useEffect((()=>{c(n)}),[n,c]),d?r.createElement("iframe",{loading:"lazy",src:d,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},y=r.memo(v,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function E(e){let{hidden:t,code:n}=e;const[i,o]=r.useState(!t);return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,c.Z)(w)},r.createElement("button",{className:(0,c.Z)(b),onClick:()=>o((e=>!e))},i?"Hide":"Show"," Code")),r.createElement("div",{className:(0,c.Z)(f,"playground-code",i&&"playground-code-visible"),style:{maxHeight:i?"4500px":"0px",padding:i?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},r.createElement(x,{language:"tsx",style:{borderRadius:0}},n)))}const _=e=>{let{children:t,disableScroll:n,previewHeight:i,hideCode:o=!1,url:a="http://localhost:3000",previewOnly:l=!1,tailwind:w=!1}=e;const b=String(t),{shared:f,sharedCss:v}=(0,p.dD)(),{visible:_}=(e=>{const t="// visible-block-start";let n=e.indexOf(t);n=n>0?n+t.length:0;let i=e.indexOf("// visible-block-end");i=i>0?i:e.length;const r=e.slice(0,n),o=e.slice(n,i).trimEnd().trimStart(),d=e.slice(i);return{visible:o,join:e=>`${r}\n${e}\n${d}`}})(`\n    ${f??""}\n    ${b}\n    `.replace(/\n$/,"")),S=r.useRef(null),k=function(e,t){void 0===t&&(t="0px");const[n,i]=r.useState(!1);return r.useEffect((()=>{const n=e?.current,r=new IntersectionObserver((e=>{let[t]=e;i(t.isIntersecting)}),{rootMargin:t});return n&&r.observe(n),()=>{n&&r.unobserve(n)}}),[]),n}(S),{siteConfig:{customFields:q}}=(0,s.Z)(),{isLast:N}=(0,d.E)();return r.createElement("div",{className:h},r.createElement(r.Fragment,null,r.createElement(m.Z,{url:a},r.createElement("div",{className:(0,c.Z)(g,"live-editor-wrapper"),style:{maxHeight:i,minHeight:i,overflow:n?"hidden":void 0,position:"relative"},ref:S},N?r.createElement(u,{if:k,maxWait:3e3},(()=>r.createElement(y,{code:`\n${f??""}\n${b}\n                                        `,css:v,query:`${n?"&disableScroll=true":""}${w?"&tailwind=true":""}`}))):r.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},r.createElement("span",null,"Live previews only work with the latest documentation.")))),!l&&r.createElement(E,{hidden:o,code:_})))},S=r.memo(_,((e,t)=>String(e.children)===String(t.children))),k=e=>{let{children:t}=e;const{setShared:n}=(0,p.dD)();return r.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},q=r.memo(k,((e,t)=>String(e.children)===String(t.children))),N=e=>{let{children:t}=e;const{setSharedCss:n}=(0,p.dD)();return r.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},W=r.memo(N,((e,t)=>String(e.children)===String(t.children)));function x(e){return e.live&&e.live&&e.className?.includes("language-css")?r.createElement(W,e):e.shared&&e.live?r.createElement(q,e):e.live?r.createElement(S,e):r.createElement(i.default,e)}},40458:e=>{e.exports=JSON.parse('{"type":"object","properties":{"name":{"type":"string"},"credit_card":{"type":"number"},"billing_address":{"type":"string"}},"required":["name"],"dependentRequired":{"credit_card":["billing_address"],"billing_address":["credit_card"]}}')}}]);