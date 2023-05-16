"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59550,4813],{52180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var r=n(87462),o=(n(67294),n(3905)),s=n(9612),i=n(4813),a=n(48570),c=n.n(a);const l={description:"string with contentSchema showcase",title:"\ud83d\udcd1 ContentSchema"},d="ContentSchema",m={unversionedId:"demo-viewer/string/contentSchema",id:"demo-viewer/string/contentSchema",title:"\ud83d\udcd1 ContentSchema",description:"string with contentSchema showcase",source:"@site/jsonschema/demo-viewer/string/contentSchema.mdx",sourceDirName:"demo-viewer/string",slug:"/demo-viewer/string/contentSchema",permalink:"/jsonschema/demo-viewer/string/contentSchema",draft:!1,tags:[],version:"current",frontMatter:{description:"string with contentSchema showcase",title:"\ud83d\udcd1 ContentSchema"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd16 ContentMediaType",permalink:"/jsonschema/demo-viewer/string/contentMediaType"},next:{title:"\ud83d\udcc5 Format",permalink:"/jsonschema/demo-viewer/string/format"}},u={},h=[],w={toc:h},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contentschema"},"ContentSchema"),(0,o.kt)("p",null,"JSON Schema :"),(0,o.kt)(s.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(i,null,2)),(0,o.kt)("p",null,"Viewer :"),(0,o.kt)(c(),{schema:i,mdxType:"JSONSchemaViewer"}))}p.isMDXComponent=!0},83375:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(86010),o=n(67294);const s={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",right:a}=e;return o.createElement("div",{className:s.browserWindow,style:{minHeight:n}},o.createElement("div",{className:s.browserWindowHeader},o.createElement("div",{className:s.buttons},o.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),o.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),o.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate")},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),i),a||o.createElement("div",{className:s.browserWindowMenuIcon},o.createElement("div",null,o.createElement("span",{className:s.bar}),o.createElement("span",{className:s.bar}),o.createElement("span",{className:s.bar})))),o.createElement("div",{className:s.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(90814),o=n(67294),s=n(48764),i=n(74477),a=n(52263),c=n(45772),l=n.n(c),d=n(86010),m=n(83375);const u=e=>{let{if:t,maxWait:n,children:r}=e;const[s,i]=o.useState(t),[a]=o.useState(n);o.useEffect((()=>{!s&&t&&i(!0)}),[t]),o.useEffect((()=>{if(a){const e=setTimeout((()=>{i(!0)}),a);return()=>clearTimeout(e)}}),[a]);const c=o.useMemo((()=>s&&"function"==typeof r?r():null),[s]);if(void 0!==r&&"function"!=typeof r)throw new Error("Conditional component requires a function as a child");return c};var h=n(57482);const w="playgroundContainer_ppBt",g="playgroundHeader_DsVj",p="headerButton_QPem",f="playgroundPreview_jwe9",v="playgroundEditorWrapper_AfoV";n.g.Buffer=n.g.Buffer||s.lW;const b=e=>{let{query:t,code:n,css:r}=e;const{siteConfig:{customFields:s}}=(0,a.Z)(),[i,c]=o.useState(void 0),d=o.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const n=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);n.onmessage=function(e){let{data:o}=e;o.compressed&&c(`${s.LIVE_PREVIEW_URL}?code=${o.compressed}${r?`&css=${l().encode(r)}`:""}${t?`${t}`:""}`),n.terminate()},n.postMessage({code:e})}}),[t]);return o.useEffect((()=>{d(n)}),[n,d]),i?o.createElement("iframe",{loading:"lazy",src:i,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},E=o.memo(b,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function S(e){let{hidden:t,code:n}=e;const[r,s]=o.useState(!t);return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,d.Z)(g)},o.createElement("button",{className:(0,d.Z)(p),onClick:()=>s((e=>!e))},r?"Hide":"Show"," Code")),o.createElement("div",{className:(0,d.Z)(v,"playground-code",r&&"playground-code-visible"),style:{maxHeight:r?"4500px":"0px",padding:r?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},o.createElement($,{language:"tsx",style:{borderRadius:0}},n)))}const y=e=>{let{children:t,disableScroll:n,previewHeight:r,hideCode:s=!1,url:c="http://localhost:3000",previewOnly:l=!1,tailwind:g=!1}=e;const p=String(t),{shared:v,sharedCss:b}=(0,h.dD)(),{visible:y}=(e=>{const t="// visible-block-start";let n=e.indexOf(t);n=n>0?n+t.length:0;let r=e.indexOf("// visible-block-end");r=r>0?r:e.length;const o=e.slice(0,n),s=e.slice(n,r).trimEnd().trimStart(),i=e.slice(r);return{visible:s,join:e=>`${o}\n${e}\n${i}`}})(`\n    ${v??""}\n    ${p}\n    `.replace(/\n$/,"")),k=o.useRef(null),N=function(e,t){void 0===t&&(t="0px");const[n,r]=o.useState(!1);return o.useEffect((()=>{const n=e?.current,o=new IntersectionObserver((e=>{let[t]=e;r(t.isIntersecting)}),{rootMargin:t});return n&&o.observe(n),()=>{n&&o.unobserve(n)}}),[]),n}(k),{siteConfig:{customFields:W}}=(0,a.Z)(),{isLast:x}=(0,i.E)();return o.createElement("div",{className:w},o.createElement(o.Fragment,null,o.createElement(m.Z,{url:c},o.createElement("div",{className:(0,d.Z)(f,"live-editor-wrapper"),style:{maxHeight:r,minHeight:r,overflow:n?"hidden":void 0,position:"relative"},ref:k},x?o.createElement(u,{if:N,maxWait:3e3},(()=>o.createElement(E,{code:`\n${v??""}\n${p}\n                                        `,css:b,query:`${n?"&disableScroll=true":""}${g?"&tailwind=true":""}`}))):o.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},o.createElement("span",null,"Live previews only work with the latest documentation.")))),!l&&o.createElement(S,{hidden:s,code:y})))},k=o.memo(y,((e,t)=>String(e.children)===String(t.children))),N=e=>{let{children:t}=e;const{setShared:n}=(0,h.dD)();return o.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},W=o.memo(N,((e,t)=>String(e.children)===String(t.children))),x=e=>{let{children:t}=e;const{setSharedCss:n}=(0,h.dD)();return o.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},C=o.memo(x,((e,t)=>String(e.children)===String(t.children)));function $(e){return e.live&&e.live&&e.className?.includes("language-css")?o.createElement(C,e):e.shared&&e.live?o.createElement(W,e):e.live?o.createElement(k,e):o.createElement(r.default,e)}},4813:e=>{e.exports=JSON.parse('{"type":"string","contentSchema":{"type":"object","required":["name","age"]}}')}}]);