"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7502,86310],{75851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(9612),s=r(86310),a=r(48570),l=r.n(a);const c={description:"object with patternProperties showcase",title:"\ud83c\udfa8 PatternProperties"},d="PatternProperties",m={unversionedId:"demo-viewer/object/patternProperties",id:"demo-viewer/object/patternProperties",title:"\ud83c\udfa8 PatternProperties",description:"object with patternProperties showcase",source:"@site/jsonschema/demo-viewer/object/patternProperties.mdx",sourceDirName:"demo-viewer/object",slug:"/demo-viewer/object/patternProperties",permalink:"/jsonschema/demo-viewer/object/patternProperties",draft:!1,tags:[],version:"current",frontMatter:{description:"object with patternProperties showcase",title:"\ud83c\udfa8 PatternProperties"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf08 AdditionalProperties with patternProperties",permalink:"/jsonschema/demo-viewer/object/additionalPropertiesWithPatternProperties"},next:{title:"\ud83d\udcdd Properties",permalink:"/jsonschema/demo-viewer/object/properties"}},u={},p=[],w={toc:p},h="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patternproperties"},"PatternProperties"),(0,o.kt)("p",null,"JSON Schema :"),(0,o.kt)(i.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(s,null,2)),(0,o.kt)("p",null,"Viewer :"),(0,o.kt)(l(),{schema:s,mdxType:"JSONSchemaViewer"}))}b.isMDXComponent=!0},83375:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(86010),o=r(67294);const i={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function s(e){let{children:t,minHeight:r,url:s="http://localhost:3000",right:a}=e;return o.createElement("div",{className:i.browserWindow,style:{minHeight:r}},o.createElement("div",{className:i.browserWindowHeader},o.createElement("div",{className:i.buttons},o.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),o.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),o.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,n.Z)(i.browserWindowAddressBar,"text--truncate")},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),s),a||o.createElement("div",{className:i.browserWindowMenuIcon},o.createElement("div",null,o.createElement("span",{className:i.bar}),o.createElement("span",{className:i.bar}),o.createElement("span",{className:i.bar})))),o.createElement("div",{className:i.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(90814),o=r(67294),i=r(48764),s=r(74477),a=r(52263),l=r(45772),c=r.n(l),d=r(86010),m=r(83375);const u=e=>{let{if:t,maxWait:r,children:n}=e;const[i,s]=o.useState(t),[a]=o.useState(r);o.useEffect((()=>{!i&&t&&s(!0)}),[t]),o.useEffect((()=>{if(a){const e=setTimeout((()=>{s(!0)}),a);return()=>clearTimeout(e)}}),[a]);const l=o.useMemo((()=>i&&"function"==typeof n?n():null),[i]);if(void 0!==n&&"function"!=typeof n)throw new Error("Conditional component requires a function as a child");return l};var p=r(57482);const w="playgroundContainer_ppBt",h="playgroundHeader_DsVj",b="headerButton_QPem",f="playgroundPreview_jwe9",g="playgroundEditorWrapper_AfoV";r.g.Buffer=r.g.Buffer||i.lW;const v=e=>{let{query:t,code:r,css:n}=e;const{siteConfig:{customFields:i}}=(0,a.Z)(),[s,l]=o.useState(void 0),d=o.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const r=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);r.onmessage=function(e){let{data:o}=e;o.compressed&&l(`${i.LIVE_PREVIEW_URL}?code=${o.compressed}${n?`&css=${c().encode(n)}`:""}${t?`${t}`:""}`),r.terminate()},r.postMessage({code:e})}}),[t]);return o.useEffect((()=>{d(r)}),[r,d]),s?o.createElement("iframe",{loading:"lazy",src:s,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},E=o.memo(v,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function y(e){let{hidden:t,code:r}=e;const[n,i]=o.useState(!t);return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,d.Z)(h)},o.createElement("button",{className:(0,d.Z)(b),onClick:()=>i((e=>!e))},n?"Hide":"Show"," Code")),o.createElement("div",{className:(0,d.Z)(g,"playground-code",n&&"playground-code-visible"),style:{maxHeight:n?"4500px":"0px",padding:n?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},o.createElement(x,{language:"tsx",style:{borderRadius:0}},r)))}const P=e=>{let{children:t,disableScroll:r,previewHeight:n,hideCode:i=!1,url:l="http://localhost:3000",previewOnly:c=!1,tailwind:h=!1}=e;const b=String(t),{shared:g,sharedCss:v}=(0,p.dD)(),{visible:P}=(e=>{const t="// visible-block-start";let r=e.indexOf(t);r=r>0?r+t.length:0;let n=e.indexOf("// visible-block-end");n=n>0?n:e.length;const o=e.slice(0,r),i=e.slice(r,n).trimEnd().trimStart(),s=e.slice(n);return{visible:i,join:e=>`${o}\n${e}\n${s}`}})(`\n    ${g??""}\n    ${b}\n    `.replace(/\n$/,"")),S=o.useRef(null),k=function(e,t){void 0===t&&(t="0px");const[r,n]=o.useState(!1);return o.useEffect((()=>{const r=e?.current,o=new IntersectionObserver((e=>{let[t]=e;n(t.isIntersecting)}),{rootMargin:t});return r&&o.observe(r),()=>{r&&o.unobserve(r)}}),[]),r}(S),{siteConfig:{customFields:N}}=(0,a.Z)(),{isLast:W}=(0,s.E)();return o.createElement("div",{className:w},o.createElement(o.Fragment,null,o.createElement(m.Z,{url:l},o.createElement("div",{className:(0,d.Z)(f,"live-editor-wrapper"),style:{maxHeight:n,minHeight:n,overflow:r?"hidden":void 0,position:"relative"},ref:S},W?o.createElement(u,{if:k,maxWait:3e3},(()=>o.createElement(E,{code:`\n${g??""}\n${b}\n                                        `,css:v,query:`${r?"&disableScroll=true":""}${h?"&tailwind=true":""}`}))):o.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},o.createElement("span",null,"Live previews only work with the latest documentation.")))),!c&&o.createElement(y,{hidden:i,code:P})))},S=o.memo(P,((e,t)=>String(e.children)===String(t.children))),k=e=>{let{children:t}=e;const{setShared:r}=(0,p.dD)();return o.useEffect((()=>(r(String(t)),()=>{r(void 0)})),[t]),null},N=o.memo(k,((e,t)=>String(e.children)===String(t.children))),W=e=>{let{children:t}=e;const{setSharedCss:r}=(0,p.dD)();return o.useEffect((()=>(r(String(t)),()=>{r(void 0)})),[t]),null},j=o.memo(W,((e,t)=>String(e.children)===String(t.children)));function x(e){return e.live&&e.live&&e.className?.includes("language-css")?o.createElement(j,e):e.shared&&e.live?o.createElement(N,e):e.live?o.createElement(S,e):o.createElement(n.default,e)}},86310:e=>{e.exports=JSON.parse('{"type":"object","patternProperties":{"^S_":{"type":"string"},"^I_":{"type":"integer"}}}')}}]);