"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69342,78811],{46191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>w});var r=t(87462),i=(t(67294),t(3905)),a=t(9612),s=t(78811),o=t(48570),l=t.n(o);const c={description:"array with contains / minContains / maxContains showcase",title:"\ud83d\udcca minContains & maxContains"},d="minContains & maxContains",m={unversionedId:"demo-viewer/array/minContainsAndMaxContains",id:"demo-viewer/array/minContainsAndMaxContains",title:"\ud83d\udcca minContains & maxContains",description:"array with contains / minContains / maxContains showcase",source:"@site/jsonschema/demo-viewer/array/minContainsAndMaxContains.mdx",sourceDirName:"demo-viewer/array",slug:"/demo-viewer/array/minContainsAndMaxContains",permalink:"/jsonschema/demo-viewer/array/minContainsAndMaxContains",draft:!1,tags:[],version:"current",frontMatter:{description:"array with contains / minContains / maxContains showcase",title:"\ud83d\udcca minContains & maxContains"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd0 Length",permalink:"/jsonschema/demo-viewer/array/length"},next:{title:"\ud83d\udfe6 Simple",permalink:"/jsonschema/demo-viewer/array/simple"}},u={},w=[],h={toc:w},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mincontains--maxcontains"},"minContains & maxContains"),(0,i.kt)("p",null,"JSON Schema :"),(0,i.kt)(a.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(s,null,2)),(0,i.kt)("p",null,"Viewer :"),(0,i.kt)(l(),{schema:s,mdxType:"JSONSchemaViewer"}))}f.isMDXComponent=!0},83375:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(86010),i=t(67294);const a={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function s(e){let{children:n,minHeight:t,url:s="http://localhost:3000",right:o}=e;return i.createElement("div",{className:a.browserWindow,style:{minHeight:t}},i.createElement("div",{className:a.browserWindowHeader},i.createElement("div",{className:a.buttons},i.createElement("span",{className:a.dot,style:{background:"#f25f58"}}),i.createElement("span",{className:a.dot,style:{background:"#fbbe3c"}}),i.createElement("span",{className:a.dot,style:{background:"#58cb42"}})),i.createElement("div",{className:(0,r.Z)(a.browserWindowAddressBar,"text--truncate")},i.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),s),o||i.createElement("div",{className:a.browserWindowMenuIcon},i.createElement("div",null,i.createElement("span",{className:a.bar}),i.createElement("span",{className:a.bar}),i.createElement("span",{className:a.bar})))),i.createElement("div",{className:a.browserWindowBody,style:{overflow:"hidden"}},n))}},9612:(e,n,t)=>{t.d(n,{Z:()=>$});var r=t(90814),i=t(67294),a=t(48764),s=t(74477),o=t(52263),l=t(45772),c=t.n(l),d=t(86010),m=t(83375);const u=e=>{let{if:n,maxWait:t,children:r}=e;const[a,s]=i.useState(n),[o]=i.useState(t);i.useEffect((()=>{!a&&n&&s(!0)}),[n]),i.useEffect((()=>{if(o){const e=setTimeout((()=>{s(!0)}),o);return()=>clearTimeout(e)}}),[o]);const l=i.useMemo((()=>a&&"function"==typeof r?r():null),[a]);if(void 0!==r&&"function"!=typeof r)throw new Error("Conditional component requires a function as a child");return l};var w=t(57482);const h="playgroundContainer_ppBt",p="playgroundHeader_DsVj",f="headerButton_QPem",g="playgroundPreview_jwe9",v="playgroundEditorWrapper_AfoV";t.g.Buffer=t.g.Buffer||a.lW;const b=e=>{let{query:n,code:t,css:r}=e;const{siteConfig:{customFields:a}}=(0,o.Z)(),[s,l]=i.useState(void 0),d=i.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const t=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);t.onmessage=function(e){let{data:i}=e;i.compressed&&l(`${a.LIVE_PREVIEW_URL}?code=${i.compressed}${r?`&css=${c().encode(r)}`:""}${n?`${n}`:""}`),t.terminate()},t.postMessage({code:e})}}),[n]);return i.useEffect((()=>{d(t)}),[t,d]),s?i.createElement("iframe",{loading:"lazy",src:s,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},y=i.memo(b,((e,n)=>e.code===n.code&&e.query===n.query&&e.css===n.css));function E(e){let{hidden:n,code:t}=e;const[r,a]=i.useState(!n);return i.createElement(i.Fragment,null,i.createElement("div",{className:(0,d.Z)(p)},i.createElement("button",{className:(0,d.Z)(f),onClick:()=>a((e=>!e))},r?"Hide":"Show"," Code")),i.createElement("div",{className:(0,d.Z)(v,"playground-code",r&&"playground-code-visible"),style:{maxHeight:r?"4500px":"0px",padding:r?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},i.createElement($,{language:"tsx",style:{borderRadius:0}},t)))}const C=e=>{let{children:n,disableScroll:t,previewHeight:r,hideCode:a=!1,url:l="http://localhost:3000",previewOnly:c=!1,tailwind:p=!1}=e;const f=String(n),{shared:v,sharedCss:b}=(0,w.dD)(),{visible:C}=(e=>{const n="// visible-block-start";let t=e.indexOf(n);t=t>0?t+n.length:0;let r=e.indexOf("// visible-block-end");r=r>0?r:e.length;const i=e.slice(0,t),a=e.slice(t,r).trimEnd().trimStart(),s=e.slice(r);return{visible:a,join:e=>`${i}\n${e}\n${s}`}})(`\n    ${v??""}\n    ${f}\n    `.replace(/\n$/,"")),x=i.useRef(null),S=function(e,n){void 0===n&&(n="0px");const[t,r]=i.useState(!1);return i.useEffect((()=>{const t=e?.current,i=new IntersectionObserver((e=>{let[n]=e;r(n.isIntersecting)}),{rootMargin:n});return t&&i.observe(t),()=>{t&&i.unobserve(t)}}),[]),t}(x),{siteConfig:{customFields:k}}=(0,o.Z)(),{isLast:N}=(0,s.E)();return i.createElement("div",{className:h},i.createElement(i.Fragment,null,i.createElement(m.Z,{url:l},i.createElement("div",{className:(0,d.Z)(g,"live-editor-wrapper"),style:{maxHeight:r,minHeight:r,overflow:t?"hidden":void 0,position:"relative"},ref:x},N?i.createElement(u,{if:S,maxWait:3e3},(()=>i.createElement(y,{code:`\n${v??""}\n${f}\n                                        `,css:b,query:`${t?"&disableScroll=true":""}${p?"&tailwind=true":""}`}))):i.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},i.createElement("span",null,"Live previews only work with the latest documentation.")))),!c&&i.createElement(E,{hidden:a,code:C})))},x=i.memo(C,((e,n)=>String(e.children)===String(n.children))),S=e=>{let{children:n}=e;const{setShared:t}=(0,w.dD)();return i.useEffect((()=>(t(String(n)),()=>{t(void 0)})),[n]),null},k=i.memo(S,((e,n)=>String(e.children)===String(n.children))),N=e=>{let{children:n}=e;const{setSharedCss:t}=(0,w.dD)();return i.useEffect((()=>(t(String(n)),()=>{t(void 0)})),[n]),null},W=i.memo(N,((e,n)=>String(e.children)===String(n.children)));function $(e){return e.live&&e.live&&e.className?.includes("language-css")?i.createElement(W,e):e.shared&&e.live?i.createElement(k,e):e.live?i.createElement(x,e):i.createElement(r.default,e)}},78811:e=>{e.exports=JSON.parse('{"type":"array","contains":{"type":"number"},"minContains":2,"maxContains":3}')}}]);