"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56961,68367],{8977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>w,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var o=n(87462),i=(n(67294),n(3905)),r=n(9612),s=n(68367),a=n(48570),c=n.n(a);const d={description:"string with contentEncoding & contentMediaType showcase",title:"\ud83d\udcc4 ContentEncoding & ContentMediaType"},l="ContentEncoding & ContentMediaType",m={unversionedId:"demo-viewer/string/contentEncodingWithContentMediaType",id:"demo-viewer/string/contentEncodingWithContentMediaType",title:"\ud83d\udcc4 ContentEncoding & ContentMediaType",description:"string with contentEncoding & contentMediaType showcase",source:"@site/jsonschema/demo-viewer/string/contentEncodingWithContentMediaType.mdx",sourceDirName:"demo-viewer/string",slug:"/demo-viewer/string/contentEncodingWithContentMediaType",permalink:"/jsonschema/demo-viewer/string/contentEncodingWithContentMediaType",draft:!1,tags:[],version:"current",frontMatter:{description:"string with contentEncoding & contentMediaType showcase",title:"\ud83d\udcc4 ContentEncoding & ContentMediaType"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdc ContentEncoding",permalink:"/jsonschema/demo-viewer/string/contentEncoding"},next:{title:"\ud83d\udd16 ContentMediaType",permalink:"/jsonschema/demo-viewer/string/contentMediaType"}},u={},g=[],p={toc:g},h="wrapper";function w(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contentencoding--contentmediatype"},"ContentEncoding & ContentMediaType"),(0,i.kt)("p",null,"JSON Schema :"),(0,i.kt)(r.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(s,null,2)),(0,i.kt)("p",null,"Viewer :"),(0,i.kt)(c(),{schema:s,mdxType:"JSONSchemaViewer"}))}w.isMDXComponent=!0},83375:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(86010),i=n(67294);const r={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function s(e){let{children:t,minHeight:n,url:s="http://localhost:3000",right:a}=e;return i.createElement("div",{className:r.browserWindow,style:{minHeight:n}},i.createElement("div",{className:r.browserWindowHeader},i.createElement("div",{className:r.buttons},i.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),i.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),i.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),i.createElement("div",{className:(0,o.Z)(r.browserWindowAddressBar,"text--truncate")},i.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),s),a||i.createElement("div",{className:r.browserWindowMenuIcon},i.createElement("div",null,i.createElement("span",{className:r.bar}),i.createElement("span",{className:r.bar}),i.createElement("span",{className:r.bar})))),i.createElement("div",{className:r.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,n)=>{n.d(t,{Z:()=>T});var o=n(90814),i=n(67294),r=n(48764),s=n(74477),a=n(52263),c=n(45772),d=n.n(c),l=n(86010),m=n(83375);const u=e=>{let{if:t,maxWait:n,children:o}=e;const[r,s]=i.useState(t),[a]=i.useState(n);i.useEffect((()=>{!r&&t&&s(!0)}),[t]),i.useEffect((()=>{if(a){const e=setTimeout((()=>{s(!0)}),a);return()=>clearTimeout(e)}}),[a]);const c=i.useMemo((()=>r&&"function"==typeof o?o():null),[r]);if(void 0!==o&&"function"!=typeof o)throw new Error("Conditional component requires a function as a child");return c};var g=n(57482);const p="playgroundContainer_ppBt",h="playgroundHeader_DsVj",w="headerButton_QPem",E="playgroundPreview_jwe9",f="playgroundEditorWrapper_AfoV";n.g.Buffer=n.g.Buffer||r.lW;const v=e=>{let{query:t,code:n,css:o}=e;const{siteConfig:{customFields:r}}=(0,a.Z)(),[s,c]=i.useState(void 0),l=i.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const n=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);n.onmessage=function(e){let{data:i}=e;i.compressed&&c(`${r.LIVE_PREVIEW_URL}?code=${i.compressed}${o?`&css=${d().encode(o)}`:""}${t?`${t}`:""}`),n.terminate()},n.postMessage({code:e})}}),[t]);return i.useEffect((()=>{l(n)}),[n,l]),s?i.createElement("iframe",{loading:"lazy",src:s,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},y=i.memo(v,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function b(e){let{hidden:t,code:n}=e;const[o,r]=i.useState(!t);return i.createElement(i.Fragment,null,i.createElement("div",{className:(0,l.Z)(h)},i.createElement("button",{className:(0,l.Z)(w),onClick:()=>r((e=>!e))},o?"Hide":"Show"," Code")),i.createElement("div",{className:(0,l.Z)(f,"playground-code",o&&"playground-code-visible"),style:{maxHeight:o?"4500px":"0px",padding:o?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},i.createElement(T,{language:"tsx",style:{borderRadius:0}},n)))}const C=e=>{let{children:t,disableScroll:n,previewHeight:o,hideCode:r=!1,url:c="http://localhost:3000",previewOnly:d=!1,tailwind:h=!1}=e;const w=String(t),{shared:f,sharedCss:v}=(0,g.dD)(),{visible:C}=(e=>{const t="// visible-block-start";let n=e.indexOf(t);n=n>0?n+t.length:0;let o=e.indexOf("// visible-block-end");o=o>0?o:e.length;const i=e.slice(0,n),r=e.slice(n,o).trimEnd().trimStart(),s=e.slice(o);return{visible:r,join:e=>`${i}\n${e}\n${s}`}})(`\n    ${f??""}\n    ${w}\n    `.replace(/\n$/,"")),S=i.useRef(null),W=function(e,t){void 0===t&&(t="0px");const[n,o]=i.useState(!1);return i.useEffect((()=>{const n=e?.current,i=new IntersectionObserver((e=>{let[t]=e;o(t.isIntersecting)}),{rootMargin:t});return n&&i.observe(n),()=>{n&&i.unobserve(n)}}),[]),n}(S),{siteConfig:{customFields:k}}=(0,a.Z)(),{isLast:M}=(0,s.E)();return i.createElement("div",{className:p},i.createElement(i.Fragment,null,i.createElement(m.Z,{url:c},i.createElement("div",{className:(0,l.Z)(E,"live-editor-wrapper"),style:{maxHeight:o,minHeight:o,overflow:n?"hidden":void 0,position:"relative"},ref:S},M?i.createElement(u,{if:W,maxWait:3e3},(()=>i.createElement(y,{code:`\n${f??""}\n${w}\n                                        `,css:v,query:`${n?"&disableScroll=true":""}${h?"&tailwind=true":""}`}))):i.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},i.createElement("span",null,"Live previews only work with the latest documentation.")))),!d&&i.createElement(b,{hidden:r,code:C})))},S=i.memo(C,((e,t)=>String(e.children)===String(t.children))),W=e=>{let{children:t}=e;const{setShared:n}=(0,g.dD)();return i.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},k=i.memo(W,((e,t)=>String(e.children)===String(t.children))),M=e=>{let{children:t}=e;const{setSharedCss:n}=(0,g.dD)();return i.useEffect((()=>(n(String(t)),()=>{n(void 0)})),[t]),null},N=i.memo(M,((e,t)=>String(e.children)===String(t.children)));function T(e){return e.live&&e.live&&e.className?.includes("language-css")?i.createElement(N,e):e.shared&&e.live?i.createElement(k,e):e.live?i.createElement(S,e):i.createElement(o.default,e)}},68367:e=>{e.exports=JSON.parse('{"type":"string","contentEncoding":"base64","contentMediaType":"application/json"}')}}]);