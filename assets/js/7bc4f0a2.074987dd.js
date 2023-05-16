"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17327,36943],{56670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>w});var r=n(87462),s=(n(67294),n(3905)),i=n(9612),o=n(36943),a=n(48570),l=n.n(a);const c={description:"array with contains showcase",title:"\ud83c\udf71 Contains"},d="Contains",m={unversionedId:"demo-viewer/array/contains",id:"demo-viewer/array/contains",title:"\ud83c\udf71 Contains",description:"array with contains showcase",source:"@site/jsonschema/demo-viewer/array/contains.mdx",sourceDirName:"demo-viewer/array",slug:"/demo-viewer/array/contains",permalink:"/jsonschema/demo-viewer/array/contains",draft:!1,tags:[],version:"current",frontMatter:{description:"array with contains showcase",title:"\ud83c\udf71 Contains"},sidebar:"tutorialSidebar",previous:{title:"\u2795 AdditionalItems (2)",permalink:"/jsonschema/demo-viewer/array/additionalItems2"},next:{title:"\ud83d\udecd\ufe0f Items",permalink:"/jsonschema/demo-viewer/array/items"}},u={},w=[],h={toc:w},p="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"contains"},"Contains"),(0,s.kt)("p",null,"JSON Schema :"),(0,s.kt)(i.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(o,null,2)),(0,s.kt)("p",null,"Viewer :"),(0,s.kt)(l(),{schema:o,mdxType:"JSONSchemaViewer"}))}f.isMDXComponent=!0},83375:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(86010),s=n(67294);const i={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function o(e){let{children:t,minHeight:n,url:o="http://localhost:3000",right:a}=e;return s.createElement("div",{className:i.browserWindow,style:{minHeight:n}},s.createElement("div",{className:i.browserWindowHeader},s.createElement("div",{className:i.buttons},s.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),s.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),s.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),s.createElement("div",{className:(0,r.Z)(i.browserWindowAddressBar,"text--truncate")},s.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),o),a||s.createElement("div",{className:i.browserWindowMenuIcon},s.createElement("div",null,s.createElement("span",{className:i.bar}),s.createElement("span",{className:i.bar}),s.createElement("span",{className:i.bar})))),s.createElement("div",{className:i.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(90814),s=n(67294),i=n(48764),o=n(74477),a=n(52263),l=n(45772),c=n.n(l),d=n(86010),m=n(83375);const u=e=>{let{if:t,maxWait:n,children:r}=e;const[i,o]=s.useState(t),[a]=s.useState(n);s.useEffect((()=>{!i&&t&&o(!0)}),[t]),s.useEffect((()=>{if(a){const e=setTimeout((()=>{o(!0)}),a);return()=>clearTimeout(e)}}),[a]);const l=s.useMemo((()=>i&&"function"==typeof r?r():null),[i]);if(void 0!==r&&"function"!=typeof r)throw new Error("Conditional component requires a function as a child");return l};var w=n(57482);const h="playgroundContainer_ppBt",p="playgroundHeader_DsVj",f="headerButton_QPem",g="playgroundPreview_jwe9",v="playgroundEditorWrapper_AfoV";n.g.Buffer=n.g.Buffer||i.lW;const b=e=>{let{query:t,code:n,css:r}=e;const{siteConfig:{customFields:i}}=(0,a.Z)(),[o,l]=s.useState(void 0),d=s.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const n=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);n.onmessage=function(e){let{data:s}=e;s.compressed&&l(`${i.LIVE_PREVIEW_URL}?code=${s.compressed}${r?`&css=${c().encode(r)}`:""}${t?`${t}`:""}`),n.terminate()},n.postMessage({code:e})}}),[t]);return s.useEffect((()=>{d(n)}),[n,d]),o?s.createElement("iframe",{loading:"lazy",src:o,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},y=s.memo(b,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function E(e){let{hidden:t,code:n}=e;const[r,i]=s.useState(!t);return s.createElement(s.Fragment,null,s.createElement("div",{className:(0,d.Z)(p)},s.createElement("button",{className:(0,d.Z)(f),onClick:()=>i((e=>!e))},r?"Hide":"Show"," Code")),s.createElement("div",{className:(0,d.Z)(v,"playground-code",r&&"playground-code-visible"),style:{maxHeight:r?"4500px":"0px",padding:r?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},s.createElement($,{language:"tsx",style:{borderRadius:0}},n)))}const S=e=>{let{children:t,disableScroll:n,previewHeight:r,hideCode:i=!1,url:l="http://localhost:3000",previewOnly:c=!1,tailwind:p=!1}=e;const f=String(t),{shared:v,sharedCss:b}=(0,w.dD)(),{visible:S}=(e=>{const t="// visible-block-start";let n=e.indexOf(t);n=n>0?n+t.length:0;let r=e.indexOf("// visible-block-end");r=r>0?r:e.length;const s=e.slice(0,n),i=e.slice(n,r).trimEnd().trimStart(),o=e.slice(r);return{visible:i,join:e=>`${s}\n${e}\n${o}`}})(`\n    ${v??""}\n    ${f}\n    `.replace(/\n$/,"")),k=s.useRef(null),N=function(e,t){void 0===t&&(t="0px");const[n,r]=s.useState(!1);return s.useEffect((()=>{const n=e?.current,s=new IntersectionObserver((e=>{let[t]=e;r(t.isIntersecting)}),{rootMargin:t});return n&&s.observe(n),()=>{n&&s.unobserve(n)}}),[]),n}(k),{siteConfig:{customFields:W}}=(0,a.Z)(),{isLast:x}=(0,o.E)();return s.createElement("div",{className:h},s.createElement(s.Fragment,null,s.createElement(m.Z,{url:l},s.createElement("div",{className:(0,d.Z)(g,"live-editor-wrapper"),style:{maxHeight:r,minHeight:r,overflow:n?"hidden":void 0,position:"relative"},ref:k},x?s.createElement(u,{if:N,maxWait:3e3},(()=>s.createElement(y,{code:`\n${v??""}\n${f}\n                                        `,css:b,query:`${n?"&disableScroll=true":""}${p?"&tailwind=true":""}`}))):s.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},s.createElement("span",null,"Live previews only work with the latest documentation.")))),!c&&s.createElement(E,{hidden:i,code:S})))},k=s.memo(S,((e,t)=>String(e.children)===String(t.children))),N=e=>{let{children:t}=e;const{setShared:n}=(0,w.dD)();return s.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},W=s.memo(N,((e,t)=>String(e.children)===String(t.children))),x=e=>{let{children:t}=e;const{setSharedCss:n}=(0,w.dD)();return s.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},C=s.memo(x,((e,t)=>String(e.children)===String(t.children)));function $(e){return e.live&&e.live&&e.className?.includes("language-css")?s.createElement(C,e):e.shared&&e.live?s.createElement(W,e):e.live?s.createElement(k,e):s.createElement(r.default,e)}},36943:e=>{e.exports=JSON.parse('{"type":"array","contains":{"type":"number"}}')}}]);