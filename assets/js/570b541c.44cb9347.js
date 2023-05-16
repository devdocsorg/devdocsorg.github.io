"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83141,5124],{60775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),s=r(9612),i=r(5124),a=r(48570),l=r.n(a);const c={description:"string with format showcase",title:"\ud83d\udcc5 Format"},m="Format",d={unversionedId:"demo-viewer/string/format",id:"demo-viewer/string/format",title:"\ud83d\udcc5 Format",description:"string with format showcase",source:"@site/jsonschema/demo-viewer/string/format.mdx",sourceDirName:"demo-viewer/string",slug:"/demo-viewer/string/format",permalink:"/jsonschema/demo-viewer/string/format",draft:!1,tags:[],version:"current",frontMatter:{description:"string with format showcase",title:"\ud83d\udcc5 Format"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd1 ContentSchema",permalink:"/jsonschema/demo-viewer/string/contentSchema"},next:{title:"\ud83d\udccf Length",permalink:"/jsonschema/demo-viewer/string/length"}},p={},u=[],f={toc:u},g="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"format"},"Format"),(0,o.kt)("p",null,"JSON Schema :"),(0,o.kt)(s.Z,{language:"json",mdxType:"CodeBlock"},JSON.stringify(i,null,2)),(0,o.kt)("p",null,"Viewer :"),(0,o.kt)(l(),{schema:i,mdxType:"JSONSchemaViewer"}))}h.isMDXComponent=!0},83375:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(86010),o=r(67294);const s={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function i(e){let{children:t,minHeight:r,url:i="http://localhost:3000",right:a}=e;return o.createElement("div",{className:s.browserWindow,style:{minHeight:r}},o.createElement("div",{className:s.browserWindowHeader},o.createElement("div",{className:s.buttons},o.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),o.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),o.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,n.Z)(s.browserWindowAddressBar,"text--truncate")},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),i),a||o.createElement("div",{className:s.browserWindowMenuIcon},o.createElement("div",null,o.createElement("span",{className:s.bar}),o.createElement("span",{className:s.bar}),o.createElement("span",{className:s.bar})))),o.createElement("div",{className:s.browserWindowBody,style:{overflow:"hidden"}},t))}},9612:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(90814),o=r(67294),s=r(48764),i=r(74477),a=r(52263),l=r(45772),c=r.n(l),m=r(86010),d=r(83375);const p=e=>{let{if:t,maxWait:r,children:n}=e;const[s,i]=o.useState(t),[a]=o.useState(r);o.useEffect((()=>{!s&&t&&i(!0)}),[t]),o.useEffect((()=>{if(a){const e=setTimeout((()=>{i(!0)}),a);return()=>clearTimeout(e)}}),[a]);const l=o.useMemo((()=>s&&"function"==typeof n?n():null),[s]);if(void 0!==n&&"function"!=typeof n)throw new Error("Conditional component requires a function as a child");return l};var u=r(57482);const f="playgroundContainer_ppBt",g="playgroundHeader_DsVj",h="headerButton_QPem",w="playgroundPreview_jwe9",v="playgroundEditorWrapper_AfoV";r.g.Buffer=r.g.Buffer||s.lW;const y=e=>{let{query:t,code:r,css:n}=e;const{siteConfig:{customFields:s}}=(0,a.Z)(),[i,l]=o.useState(void 0),m=o.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const r=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);r.onmessage=function(e){let{data:o}=e;o.compressed&&l(`${s.LIVE_PREVIEW_URL}?code=${o.compressed}${n?`&css=${c().encode(n)}`:""}${t?`${t}`:""}`),r.terminate()},r.postMessage({code:e})}}),[t]);return o.useEffect((()=>{m(r)}),[r,m]),i?o.createElement("iframe",{loading:"lazy",src:i,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},b=o.memo(y,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function E(e){let{hidden:t,code:r}=e;const[n,s]=o.useState(!t);return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,m.Z)(g)},o.createElement("button",{className:(0,m.Z)(h),onClick:()=>s((e=>!e))},n?"Hide":"Show"," Code")),o.createElement("div",{className:(0,m.Z)(v,"playground-code",n&&"playground-code-visible"),style:{maxHeight:n?"4500px":"0px",padding:n?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},o.createElement(C,{language:"tsx",style:{borderRadius:0}},r)))}const x=e=>{let{children:t,disableScroll:r,previewHeight:n,hideCode:s=!1,url:l="http://localhost:3000",previewOnly:c=!1,tailwind:g=!1}=e;const h=String(t),{shared:v,sharedCss:y}=(0,u.dD)(),{visible:x}=(e=>{const t="// visible-block-start";let r=e.indexOf(t);r=r>0?r+t.length:0;let n=e.indexOf("// visible-block-end");n=n>0?n:e.length;const o=e.slice(0,r),s=e.slice(r,n).trimEnd().trimStart(),i=e.slice(n);return{visible:s,join:e=>`${o}\n${e}\n${i}`}})(`\n    ${v??""}\n    ${h}\n    `.replace(/\n$/,"")),S=o.useRef(null),k=function(e,t){void 0===t&&(t="0px");const[r,n]=o.useState(!1);return o.useEffect((()=>{const r=e?.current,o=new IntersectionObserver((e=>{let[t]=e;n(t.isIntersecting)}),{rootMargin:t});return r&&o.observe(r),()=>{r&&o.unobserve(r)}}),[]),r}(S),{siteConfig:{customFields:N}}=(0,a.Z)(),{isLast:W}=(0,i.E)();return o.createElement("div",{className:f},o.createElement(o.Fragment,null,o.createElement(d.Z,{url:l},o.createElement("div",{className:(0,m.Z)(w,"live-editor-wrapper"),style:{maxHeight:n,minHeight:n,overflow:r?"hidden":void 0,position:"relative"},ref:S},W?o.createElement(p,{if:k,maxWait:3e3},(()=>o.createElement(b,{code:`\n${v??""}\n${h}\n                                        `,css:y,query:`${r?"&disableScroll=true":""}${g?"&tailwind=true":""}`}))):o.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},o.createElement("span",null,"Live previews only work with the latest documentation.")))),!c&&o.createElement(E,{hidden:s,code:x})))},S=o.memo(x,((e,t)=>String(e.children)===String(t.children))),k=e=>{let{children:t}=e;const{setShared:r}=(0,u.dD)();return o.useEffect((()=>(r(String(t)),()=>{r(void 0)})),[t]),null},N=o.memo(k,((e,t)=>String(e.children)===String(t.children))),W=e=>{let{children:t}=e;const{setSharedCss:r}=(0,u.dD)();return o.useEffect((()=>(r(String(t)),()=>{r(void 0)})),[t]),null},$=o.memo(W,((e,t)=>String(e.children)===String(t.children)));function C(e){return e.live&&e.live&&e.className?.includes("language-css")?o.createElement($,e):e.shared&&e.live?o.createElement(N,e):e.live?o.createElement(S,e):o.createElement(n.default,e)}},5124:e=>{e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","properties":{"prop1":{"type":"string","format":"date-time","examples":["2018-11-13T20:20:39+00:00"]},"prop2":{"type":"string","format":"time","examples":["20:20:39+00:00"]},"prop3":{"type":"string","format":"date","examples":["2018-11-13"]},"prop4":{"type":"string","format":"duration","examples":["P3D"]},"prop5":{"type":"string","format":"email","examples":["test@gmail.com"]},"prop6":{"type":"string","format":"idn-email","examples":["test@gmail.com"]},"prop7":{"type":"string","format":"hostname","examples":["example"]},"prop8":{"type":"string","format":"idn-hostname","examples":["example"]},"prop9":{"type":"string","format":"ipv4","examples":["192.168.1.1"]},"prop10":{"type":"string","format":"ipv6","examples":["2001:db8:3333:4444:5555:6666:7777:8888"]},"prop11":{"type":"string","format":"uuid","examples":["3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a"]},"prop12":{"type":"string","format":"uri","examples":["https://www.perdu.com/"]},"prop12B":{"type":"string","format":"uri-reference"},"prop13":{"type":"string","format":"iri","examples":["https://www.perdu.com/"]},"prop13B":{"type":"string","format":"iri-reference"},"prop14":{"type":"string","format":"uri-template"},"prop15":{"type":"string","format":"json-pointer"},"prop16":{"type":"string","format":"relative-json-pointer"},"prop17":{"type":"string","format":"regex","examples":["^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"]}}}')}}]);