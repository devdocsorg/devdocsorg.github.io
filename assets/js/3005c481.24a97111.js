"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67823,14773],{6460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>w});var r=n(87462),s=(n(67294),n(3905)),o=n(9612),i=n(14773),l=n(48570),a=n.n(l);const c={description:"null type showcase",title:"\ud83d\udd73\ufe0f Null"},d="Null",u={unversionedId:"demo-viewer/null",id:"demo-viewer/null",title:"\ud83d\udd73\ufe0f Null",description:"null type showcase",source:"@site/jsonschema/demo-viewer/null.mdx",sourceDirName:"demo-viewer",slug:"/demo-viewer/null",permalink:"/jsonschema/demo-viewer/null",draft:!1,tags:[],version:"current",frontMatter:{description:"null type showcase",title:"\ud83d\udd73\ufe0f Null"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd12 Enum",permalink:"/jsonschema/demo-viewer/generic_keywords/enum"},next:{title:"\ud83d\udd22 Numeric",permalink:"/jsonschema/category/-numeric"}},m={},w=[],p={toc:w},h="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"null"},"Null"),(0,s.kt)("p",null,"JSON Schema :"),(0,s.kt)(o.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(i,null,2)),(0,s.kt)("p",null,"Viewer :"),(0,s.kt)(a(),{schema:i,mdxType:"JSONSchemaViewer"}))}f.isMDXComponent=!0},83375:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(86010),s=n(67294);const o={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",right:l}=e;return s.createElement("div",{className:o.browserWindow,style:{minHeight:n}},s.createElement("div",{className:o.browserWindowHeader},s.createElement("div",{className:o.buttons},s.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),s.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),s.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),s.createElement("div",{className:(0,r.Z)(o.browserWindowAddressBar,"text--truncate")},s.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),i),l||s.createElement("div",{className:o.browserWindowMenuIcon},s.createElement("div",null,s.createElement("span",{className:o.bar}),s.createElement("span",{className:o.bar}),s.createElement("span",{className:o.bar})))),s.createElement("div",{className:o.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(90814),s=n(67294),o=n(48764),i=n(74477),l=n(52263),a=n(45772),c=n.n(a),d=n(86010),u=n(83375);const m=e=>{let{if:t,maxWait:n,children:r}=e;const[o,i]=s.useState(t),[l]=s.useState(n);s.useEffect((()=>{!o&&t&&i(!0)}),[t]),s.useEffect((()=>{if(l){const e=setTimeout((()=>{i(!0)}),l);return()=>clearTimeout(e)}}),[l]);const a=s.useMemo((()=>o&&"function"==typeof r?r():null),[o]);if(void 0!==r&&"function"!=typeof r)throw new Error("Conditional component requires a function as a child");return a};var w=n(57482);const p="playgroundContainer_ppBt",h="playgroundHeader_DsVj",f="headerButton_QPem",g="playgroundPreview_jwe9",v="playgroundEditorWrapper_AfoV";n.g.Buffer=n.g.Buffer||o.lW;const b=e=>{let{query:t,code:n,css:r}=e;const{siteConfig:{customFields:o}}=(0,l.Z)(),[i,a]=s.useState(void 0),d=s.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const n=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);n.onmessage=function(e){let{data:s}=e;s.compressed&&a(`${o.LIVE_PREVIEW_URL}?code=${s.compressed}${r?`&css=${c().encode(r)}`:""}${t?`${t}`:""}`),n.terminate()},n.postMessage({code:e})}}),[t]);return s.useEffect((()=>{d(n)}),[n,d]),i?s.createElement("iframe",{loading:"lazy",src:i,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},E=s.memo(b,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function y(e){let{hidden:t,code:n}=e;const[r,o]=s.useState(!t);return s.createElement(s.Fragment,null,s.createElement("div",{className:(0,d.Z)(h)},s.createElement("button",{className:(0,d.Z)(f),onClick:()=>o((e=>!e))},r?"Hide":"Show"," Code")),s.createElement("div",{className:(0,d.Z)(v,"playground-code",r&&"playground-code-visible"),style:{maxHeight:r?"4500px":"0px",padding:r?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},s.createElement(_,{language:"tsx",style:{borderRadius:0}},n)))}const N=e=>{let{children:t,disableScroll:n,previewHeight:r,hideCode:o=!1,url:a="http://localhost:3000",previewOnly:c=!1,tailwind:h=!1}=e;const f=String(t),{shared:v,sharedCss:b}=(0,w.dD)(),{visible:N}=(e=>{const t="// visible-block-start";let n=e.indexOf(t);n=n>0?n+t.length:0;let r=e.indexOf("// visible-block-end");r=r>0?r:e.length;const s=e.slice(0,n),o=e.slice(n,r).trimEnd().trimStart(),i=e.slice(r);return{visible:o,join:e=>`${s}\n${e}\n${i}`}})(`\n    ${v??""}\n    ${f}\n    `.replace(/\n$/,"")),k=s.useRef(null),S=function(e,t){void 0===t&&(t="0px");const[n,r]=s.useState(!1);return s.useEffect((()=>{const n=e?.current,s=new IntersectionObserver((e=>{let[t]=e;r(t.isIntersecting)}),{rootMargin:t});return n&&s.observe(n),()=>{n&&s.unobserve(n)}}),[]),n}(k),{siteConfig:{customFields:W}}=(0,l.Z)(),{isLast:x}=(0,i.E)();return s.createElement("div",{className:p},s.createElement(s.Fragment,null,s.createElement(u.Z,{url:a},s.createElement("div",{className:(0,d.Z)(g,"live-editor-wrapper"),style:{maxHeight:r,minHeight:r,overflow:n?"hidden":void 0,position:"relative"},ref:k},x?s.createElement(m,{if:S,maxWait:3e3},(()=>s.createElement(E,{code:`\n${v??""}\n${f}\n                                        `,css:b,query:`${n?"&disableScroll=true":""}${h?"&tailwind=true":""}`}))):s.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},s.createElement("span",null,"Live previews only work with the latest documentation.")))),!c&&s.createElement(y,{hidden:o,code:N})))},k=s.memo(N,((e,t)=>String(e.children)===String(t.children))),S=e=>{let{children:t}=e;const{setShared:n}=(0,w.dD)();return s.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},W=s.memo(S,((e,t)=>String(e.children)===String(t.children))),x=e=>{let{children:t}=e;const{setSharedCss:n}=(0,w.dD)();return s.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},$=s.memo(x,((e,t)=>String(e.children)===String(t.children)));function _(e){return e.live&&e.live&&e.className?.includes("language-css")?s.createElement($,e):e.shared&&e.live?s.createElement(W,e):e.live?s.createElement(k,e):s.createElement(r.default,e)}},14773:e=>{e.exports={type:"null"}}}]);