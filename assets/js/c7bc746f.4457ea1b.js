"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70408,90264],{8949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>u,toc:()=>w});var r=n(87462),a=(n(67294),n(3905)),s=n(9612),i=n(90264),o=n(48570),l=n.n(o);const d={description:"array with unevaluatedItems showcase",title:"\ud83d\udccb UnevaluatedItems (2)"},c="UnevaluatedItems (2)",u={unversionedId:"demo-viewer/array/unevaluatedItems2",id:"demo-viewer/array/unevaluatedItems2",title:"\ud83d\udccb UnevaluatedItems (2)",description:"array with unevaluatedItems showcase",source:"@site/jsonschema/demo-viewer/array/unevaluatedItems2.mdx",sourceDirName:"demo-viewer/array",slug:"/demo-viewer/array/unevaluatedItems2",permalink:"/jsonschema/demo-viewer/array/unevaluatedItems2",draft:!1,tags:[],version:"current",frontMatter:{description:"array with unevaluatedItems showcase",title:"\ud83d\udccb UnevaluatedItems (2)"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd14 UnevaluatedItems (1)",permalink:"/jsonschema/demo-viewer/array/unevaluatedItems1"},next:{title:"\ud83e\udd84 Unique items",permalink:"/jsonschema/demo-viewer/array/uniqueItems"}},m={},w=[],v={toc:w},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unevaluateditems-2"},"UnevaluatedItems (2)"),(0,a.kt)("p",null,"JSON Schema :"),(0,a.kt)(s.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(i,null,2)),(0,a.kt)("p",null,"Viewer :"),(0,a.kt)(l(),{schema:i,mdxType:"JSONSchemaViewer"}))}p.isMDXComponent=!0},83375:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(86010),a=n(67294);const s={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",right:o}=e;return a.createElement("div",{className:s.browserWindow,style:{minHeight:n}},a.createElement("div",{className:s.browserWindowHeader},a.createElement("div",{className:s.buttons},a.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate")},a.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),i),o||a.createElement("div",{className:s.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar})))),a.createElement("div",{className:s.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(90814),a=n(67294),s=n(48764),i=n(74477),o=n(52263),l=n(45772),d=n.n(l),c=n(86010),u=n(83375);const m=e=>{let{if:t,maxWait:n,children:r}=e;const[s,i]=a.useState(t),[o]=a.useState(n);a.useEffect((()=>{!s&&t&&i(!0)}),[t]),a.useEffect((()=>{if(o){const e=setTimeout((()=>{i(!0)}),o);return()=>clearTimeout(e)}}),[o]);const l=a.useMemo((()=>s&&"function"==typeof r?r():null),[s]);if(void 0!==r&&"function"!=typeof r)throw new Error("Conditional component requires a function as a child");return l};var w=n(57482);const v="playgroundContainer_ppBt",h="playgroundHeader_DsVj",p="headerButton_QPem",f="playgroundPreview_jwe9",g="playgroundEditorWrapper_AfoV";n.g.Buffer=n.g.Buffer||s.lW;const y=e=>{let{query:t,code:n,css:r}=e;const{siteConfig:{customFields:s}}=(0,o.Z)(),[i,l]=a.useState(void 0),c=a.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const n=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);n.onmessage=function(e){let{data:a}=e;a.compressed&&l(`${s.LIVE_PREVIEW_URL}?code=${a.compressed}${r?`&css=${d().encode(r)}`:""}${t?`${t}`:""}`),n.terminate()},n.postMessage({code:e})}}),[t]);return a.useEffect((()=>{c(n)}),[n,c]),i?a.createElement("iframe",{loading:"lazy",src:i,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},b=a.memo(y,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function E(e){let{hidden:t,code:n}=e;const[r,s]=a.useState(!t);return a.createElement(a.Fragment,null,a.createElement("div",{className:(0,c.Z)(h)},a.createElement("button",{className:(0,c.Z)(p),onClick:()=>s((e=>!e))},r?"Hide":"Show"," Code")),a.createElement("div",{className:(0,c.Z)(g,"playground-code",r&&"playground-code-visible"),style:{maxHeight:r?"4500px":"0px",padding:r?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},a.createElement($,{language:"tsx",style:{borderRadius:0}},n)))}const I=e=>{let{children:t,disableScroll:n,previewHeight:r,hideCode:s=!1,url:l="http://localhost:3000",previewOnly:d=!1,tailwind:h=!1}=e;const p=String(t),{shared:g,sharedCss:y}=(0,w.dD)(),{visible:I}=(e=>{const t="// visible-block-start";let n=e.indexOf(t);n=n>0?n+t.length:0;let r=e.indexOf("// visible-block-end");r=r>0?r:e.length;const a=e.slice(0,n),s=e.slice(n,r).trimEnd().trimStart(),i=e.slice(r);return{visible:s,join:e=>`${a}\n${e}\n${i}`}})(`\n    ${g??""}\n    ${p}\n    `.replace(/\n$/,"")),S=a.useRef(null),k=function(e,t){void 0===t&&(t="0px");const[n,r]=a.useState(!1);return a.useEffect((()=>{const n=e?.current,a=new IntersectionObserver((e=>{let[t]=e;r(t.isIntersecting)}),{rootMargin:t});return n&&a.observe(n),()=>{n&&a.unobserve(n)}}),[]),n}(S),{siteConfig:{customFields:N}}=(0,o.Z)(),{isLast:x}=(0,i.E)();return a.createElement("div",{className:v},a.createElement(a.Fragment,null,a.createElement(u.Z,{url:l},a.createElement("div",{className:(0,c.Z)(f,"live-editor-wrapper"),style:{maxHeight:r,minHeight:r,overflow:n?"hidden":void 0,position:"relative"},ref:S},x?a.createElement(m,{if:k,maxWait:3e3},(()=>a.createElement(b,{code:`\n${g??""}\n${p}\n                                        `,css:y,query:`${n?"&disableScroll=true":""}${h?"&tailwind=true":""}`}))):a.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},a.createElement("span",null,"Live previews only work with the latest documentation.")))),!d&&a.createElement(E,{hidden:s,code:I})))},S=a.memo(I,((e,t)=>String(e.children)===String(t.children))),k=e=>{let{children:t}=e;const{setShared:n}=(0,w.dD)();return a.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},N=a.memo(k,((e,t)=>String(e.children)===String(t.children))),x=e=>{let{children:t}=e;const{setSharedCss:n}=(0,w.dD)();return a.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},W=a.memo(x,((e,t)=>String(e.children)===String(t.children)));function $(e){return e.live&&e.live&&e.className?.includes("language-css")?a.createElement(W,e):e.shared&&e.live?a.createElement(N,e):e.live?a.createElement(S,e):a.createElement(r.default,e)}},90264:e=>{e.exports=JSON.parse('{"type":"array","prefixItems":[{"type":"integer"},{"type":"string"}],"unevaluatedItems":{"type":"boolean"}}')}}]);