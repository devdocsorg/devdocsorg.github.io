"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21659],{23612:(e,a,t)=>{var n=t(67294),r=t(95999);r.default,r.default,r.default,r.default,r.default},83375:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(86010),r=t(67294);const l={browserWindow:"browserWindow_NI4q",browserWindowHeader:"browserWindowHeader_nZEk",row:"row_dPvi",buttons:"buttons_iIn6",right:"right_pmC6",browserWindowAddressBar:"browserWindowAddressBar_K9wW",dot:"dot_VUxd",browserWindowMenuIcon:"browserWindowMenuIcon_TbEo",bar:"bar_Ghqi",browserWindowBody:"browserWindowBody_x6m3"};function i(e){let{children:a,minHeight:t,url:i="http://localhost:3000",right:c}=e;return r.createElement("div",{className:l.browserWindow,style:{minHeight:t}},r.createElement("div",{className:l.browserWindowHeader},r.createElement("div",{className:l.buttons},r.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,n.Z)(l.browserWindowAddressBar,"text--truncate")},r.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),i),c||r.createElement("div",{className:l.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:l.bar}),r.createElement("span",{className:l.bar}),r.createElement("span",{className:l.bar})))),r.createElement("div",{className:l.browserWindowBody,style:{overflow:"hidden"}},a))}},37975:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(47083),r=t(67294),l=t(4309);const i=()=>r.createElement("div",null,r.createElement(n.Z,{type:"tip"},r.createElement(l.D,null,"\nAll the data related hooks(useTable, useForm, useList etc.) of refine can be given some common properties like `resource`, `meta` etc.\n> Please refer to [General Concepts](/docs/api-reference/general-concepts) for more information.\n")))},75845:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(67294),r=t(28414),l=t(54160);const i="container_rf7J",c="card_FhoK",o="imageWrapper_MtnI",m="image_cVau",s="content_k4ls",d="title_xHPP",u="description_SCHD",p=e=>{let{title:a,description:t,linkUrl:p,contributer:g,status:E,icon:v}=e;return n.createElement("div",{className:i},n.createElement("a",{target:"_blank",href:p,className:c,rel:"noreferrer"},n.createElement("div",{className:"flex flex-1 flex-row justify-start gap-5 px-3.5 py-6"},n.createElement("div",{className:o},n.createElement(v,{className:m})),n.createElement("div",{className:s},n.createElement("div",{className:d},a),"soon"===E?n.createElement(r.Z,null):n.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:t}}))),g&&n.createElement(l.Z,{url:g.url,name:g.name})))}},28414:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=()=>n.createElement("div",{className:"shadow-startTiles mt-0 flex  rotate-[-2.45deg]  items-center justify-center px-2.5  text-center md:mt-2"},n.createElement("p",{className:"font-montserrat  mb-0 text-3xl font-extrabold text-[#6714CC]"},"coming soon"))},54160:(e,a,t)=>{t.d(a,{Z:()=>d});var n,r=t(67294),l=t(72076);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}const c=e=>{let{title:a,titleId:t,...l}=e;return r.createElement("svg",i({width:20,height:18,viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},l),a?r.createElement("title",{id:t},a):null,n||(n=r.createElement("path",{d:"M18.435 1.464a5 5 0 0 0-7.07 0L9.95 2.88 8.536 1.465a5 5 0 1 0-7.072 7.07l8.486 8.486 8.485-8.485a5 5 0 0 0 0-7.072Z",fill:"#FF1818"})))},o="container_hXW_",m="text_ZlQj",s="bold_Mgip",d=e=>{let{name:a,url:t}=e;const{reward:n,isAnimating:i}=(0,l.w5)("leftReward","emoji",{emoji:["\ud83d\udd25","\u2b50","\u2764\ufe0f"],angle:45,elementCount:80,startVelocity:45,decay:.95,lifetime:150}),{reward:d,isAnimating:u}=(0,l.w5)("rightReward","emoji",{emoji:["\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc96"],angle:135,elementCount:80,startVelocity:45,decay:.95,lifetime:150});return r.createElement("button",{disabled:i||u,onClick:e=>{e.preventDefault(),n(),d()},className:o},r.createElement(c,null),r.createElement("div",{className:m},r.createElement("span",{className:s},"by"),r.createElement("a",{target:"_blank",href:t,rel:"noreferrer"},a)))}},75774:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(28414);const l={cardWrapper:"cardWrapper_avWL",card:"card_RZg8",header:"header_gBr8",imageWrapper:"imageWrapper_AXZt",image:"image_ZN1o",content:"content_sRT1",coming:"coming_kktE",description:"description_OmWa"},i=e=>{let{title:a,description:t,icon:i,linkUrl:c,status:o}=e;return n.createElement("a",{target:"_blank",href:c,className:l.cardWrapper,rel:"noreferrer"},n.createElement("div",{className:l.card},n.createElement("div",{className:l.header},n.createElement("div",{className:l.imageWrapper},n.createElement(i,{className:l.image})),n.createElement("div",{className:l.title},a)),n.createElement("div",{className:l.content},"soon"===o?n.createElement("div",{className:l.coming},n.createElement(r.Z,null)):n.createElement("p",{className:l.description,dangerouslySetInnerHTML:{__html:t}}))))}},65612:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var n=t(35742),r=t(67294),l=t(87462);const i=e=>r.createElement("svg",(0,l.Z)({width:21,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M20.25.857H.75a.75.75 0 0 0-.75.75v15c0 .415.335.75.75.75h19.5a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75Zm-.938 2.597V15.67H1.688V3.454l-.646-.504.92-1.183 1.004.78h15.073l1.003-.78.92 1.183-.648.504Zm-1.274-.91L10.5 8.405l-7.537-5.86-1.004-.78-.92 1.184.646.504 8.006 6.225a1.312 1.312 0 0 0 1.61 0l8.011-6.223.647-.504-.92-1.183-1.002.778Z",fill:"#9696B4"})),c=e=>r.createElement("svg",(0,l.Z)({width:18,height:21,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M16.748 5.205a8.495 8.495 0 0 0-1.872-2.711A8.692 8.692 0 0 0 12.106.67 8.791 8.791 0 0 0 8.718 0a8.832 8.832 0 0 0-3.387.668 8.73 8.73 0 0 0-2.77 1.823A8.522 8.522 0 0 0 .689 5.203 8.324 8.324 0 0 0 0 8.531c0 1.655.396 3.303 1.174 4.892.626 1.277 1.5 2.521 2.602 3.705 1.882 2.02 3.855 3.256 4.415 3.586a1.028 1.028 0 0 0 1.05 0c.56-.33 2.534-1.566 4.416-3.586 1.102-1.181 1.976-2.428 2.602-3.705.782-1.587 1.178-3.232 1.178-4.89a8.323 8.323 0 0 0-.689-3.328ZM8.718 19.06c-1.544-.982-7.03-4.87-7.03-10.525 0-1.826.728-3.542 2.053-4.836a7.084 7.084 0 0 1 4.978-2.01c1.882 0 3.649.714 4.978 2.013a6.705 6.705 0 0 1 2.053 4.833c0 5.655-5.487 9.543-7.031 10.525Zm0-14.465a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25Zm1.857 5.981a2.615 2.615 0 0 1-1.856.769c-.701 0-1.36-.274-1.856-.769a2.616 2.616 0 0 1-.77-1.856c0-.701.275-1.36.77-1.856a2.606 2.606 0 0 1 1.856-.77c.7 0 1.36.273 1.856.77.497.496.769 1.155.769 1.856 0 .7-.272 1.36-.769 1.856Z",fill:"#9696B4"})),o=[{title:"VISIT OUR",subtitle:"GITHUB REPO",icon:e=>r.createElement("svg",(0,l.Z)({width:18,height:18,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.053 0A10.904 10.904 0 0 0 3.89 2.685 11.34 11.34 0 0 0 .142 9.472a11.48 11.48 0 0 0 1.456 7.65 11.087 11.087 0 0 0 5.964 4.86c.556.103.752-.25.752-.547v-1.918C5.23 20.202 4.58 18 4.58 18a3.012 3.012 0 0 0-1.227-1.655c-.997-.692.081-.692.081-.692.35.05.683.18.975.382.293.202.536.469.713.78.15.278.352.523.595.721a2.312 2.312 0 0 0 2.618.221c.042-.57.283-1.105.678-1.509-2.454-.284-5.03-1.253-5.03-5.539a4.415 4.415 0 0 1 1.132-3.025A4.194 4.194 0 0 1 5.224 4.7s.928-.305 3.036 1.156c1.81-.508 3.72-.508 5.531 0 2.108-1.46 3.03-1.156 3.03-1.156.406.936.455 1.993.135 2.963a4.415 4.415 0 0 1 1.132 3.026c0 4.334-2.582 5.282-5.043 5.538.264.271.468.597.598.955.13.358.182.741.155 1.122V21.4c0 .367.196.65.759.54a11.093 11.093 0 0 0 5.88-4.878 11.481 11.481 0 0 0 1.419-7.6 11.34 11.34 0 0 0-3.71-6.746A10.907 10.907 0 0 0 11.053 0Z",fill:"#2A2A42"})),url:"https://github.com/refinedev/refine"},{title:"JOIN OUR",subtitle:"DISCORD SERVER",icon:e=>r.createElement("svg",(0,l.Z)({width:18,height:18,viewBox:"0 0 24 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M17.712 19s-.74-.973-1.356-1.832c2.692-.837 3.72-2.692 3.72-2.692a11.39 11.39 0 0 1-2.364 1.335 12.61 12.61 0 0 1-2.98.972c-1.972.407-3.78.294-5.321-.022a16.074 16.074 0 0 1-3.02-.973 11.563 11.563 0 0 1-1.5-.769c-.062-.045-.124-.068-.186-.113a.287.287 0 0 1-.082-.068c-.37-.226-.575-.384-.575-.384s.986 1.81 3.596 2.669C7.027 17.983 6.267 19 6.267 19 1.726 18.842 0 15.562 0 15.562 0 8.279 2.959 2.375 2.959 2.375 5.918-.068 8.733 0 8.733 0l.205.272C5.24 1.448 3.534 3.235 3.534 3.235s.452-.272 1.213-.656C6.945 1.516 8.692 1.222 9.41 1.154c.123-.023.226-.045.35-.045a15.807 15.807 0 0 1 4.15-.046c1.952.25 4.048.882 6.185 2.172 0 0-1.623-1.697-5.117-2.873L15.268 0s2.815-.068 5.774 2.375c0 0 2.959 5.904 2.959 13.187 0 0-1.747 3.28-6.288 3.438ZM8.158 8.437c-1.172 0-2.096 1.131-2.096 2.51 0 1.38.945 2.511 2.096 2.511 1.17 0 2.095-1.13 2.095-2.51.021-1.38-.924-2.511-2.095-2.511Zm7.5 0c-1.172 0-2.096 1.131-2.096 2.51 0 1.38.945 2.511 2.096 2.511 1.17 0 2.095-1.13 2.095-2.51s-.924-2.511-2.095-2.511Z",fill:"#5865F2"})),url:"https://discord.gg/refine"},{title:"FOLLOW US",subtitle:"ON REDDIT",icon:e=>r.createElement("svg",(0,l.Z)({width:36,height:33,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M36 16.305a3.937 3.937 0 0 0-6.667-2.832 19.279 19.279 0 0 0-10.529-3.34l1.793-8.436 5.86 1.246a2.812 2.812 0 1 0 .288-1.377L20.197.174a.703.703 0 0 0-.834.54l-2.002 9.416a19.335 19.335 0 0 0-10.686 3.336 3.937 3.937 0 1 0-4.333 6.429c-.06.394-.09.792-.088 1.191 0 6.057 7.046 10.967 15.748 10.967 8.702 0 15.748-4.91 15.748-10.967a7.8 7.8 0 0 0-.092-1.183A3.937 3.937 0 0 0 36 16.305ZM9.003 19.118a2.812 2.812 0 1 1 5.624 0 2.812 2.812 0 0 1-5.624 0Zm15.68 7.43c-1.918 1.913-5.596 2.067-6.677 2.067-1.081 0-4.76-.15-6.678-2.067a.73.73 0 0 1 .517-1.244.73.73 0 0 1 .515.214c1.21 1.21 3.797 1.639 5.646 1.639 1.848 0 4.436-.43 5.649-1.64a.729.729 0 1 1 1.029 1.031Zm-.494-4.618a2.812 2.812 0 1 1 0-5.625 2.812 2.812 0 0 1 0 5.625Z",fill:"#FF4500"})),url:"https://www.reddit.com/r/refine/"},{title:"FOLLOW US",subtitle:"ON TWITTER",icon:e=>r.createElement("svg",(0,l.Z)({width:18,height:18,viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 2.368a9.618 9.618 0 0 1-2.827.794A5.038 5.038 0 0 0 23.338.37a9.698 9.698 0 0 1-3.129 1.223A4.856 4.856 0 0 0 16.616 0c-2.718 0-4.922 2.26-4.922 5.049 0 .396.042.78.126 1.15C7.728 5.988 4.1 3.979 1.67.922a5.14 5.14 0 0 0-.666 2.54c0 1.751.87 3.297 2.19 4.203a4.834 4.834 0 0 1-2.23-.63v.062c0 2.447 1.697 4.488 3.951 4.95a4.693 4.693 0 0 1-1.297.178c-.317 0-.627-.03-.927-.09.626 2.006 2.444 3.466 4.599 3.505A9.722 9.722 0 0 1 0 17.733 13.708 13.708 0 0 0 7.548 20c9.058 0 14.01-7.692 14.01-14.365 0-.22-.005-.439-.013-.654.962-.712 1.797-1.6 2.455-2.613Z",fill:"#00AAEC"})),url:"https://twitter.com/refine_dev"}],m=[{name:"\xd6mer Aplak",avatar:"/about/images/team-avatars/omer.png",avatar2x:"/about/images/team-avatars/omer2x.png",role1:"Co-Founder",role2:"CTO",url:"https://www.linkedin.com/in/%C3%B6mer-faruk-aplak-14b87099/"},{name:"Civan \xd6zseyhan",avatar:"/about/images/team-avatars/civan.png",avatar2x:"/about/images/team-avatars/civan2x.png",role1:"Co-Founder",role2:"CEO",url:"https://www.linkedin.com/in/civan-%C3%B6zseyhan-1ab48814/"},{name:"Eren Erkalkan",avatar:"/about/images/team-avatars/eren.png",avatar2x:"/about/images/team-avatars/eren2x.png",role1:"Co-Founder",role2:"Head of Product",url:"https://www.linkedin.com/in/eren-erkalkan-1b31a89a/"},{name:"Ali Emir \u015een",avatar:"/about/images/team-avatars/ali.png",avatar2x:"/about/images/team-avatars/ali2x.png",role1:"Frontend Team Lead",url:"https://www.linkedin.com/in/aliemir/"},{name:"Y\u0131ld\u0131ray \xdcnl\xfc",avatar:"/about/images/team-avatars/yildiray.png",avatar2x:"/about/images/team-avatars/yildiray2x.png",role1:"Backend Team Lead",url:"https://www.linkedin.com/in/yildirayunlu/"},{name:"Necati Ozmen",avatar:"/about/images/team-avatars/necati.png",avatar2x:"/about/images/team-avatars/necati2x.png",role1:"Software Developer",role2:"Head of Content",url:"https://www.linkedin.com/in/necatiozmen/"},{name:"Alican Erdurmaz",avatar:"/about/images/team-avatars/alican.png",avatar2x:"/about/images/team-avatars/alican2x.png",role1:"Software Developer",url:"https://www.linkedin.com/in/alicanerdurmaz/"},{name:"Salih \xd6zdemir",avatar:"/about/images/team-avatars/salih.png",avatar2x:"/about/images/team-avatars/salih2x.png",role1:"Software Developer",url:"https://www.linkedin.com/in/salihozdemr/"},{name:"\u015eerif Ali \xdcnal",avatar:"/about/images/team-avatars/serif.png",avatar2x:"/about/images/team-avatars/serif2x.png",role1:"UI/UX Designer",url:"https://www.linkedin.com/in/serifaliunal/"}];t(39960),t(44996);'\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n'.trim();t(83375),t(75845),t(75774),t(54160),t(28414);var s=t(86010);const d="container_ldYW",u="card_oCJH",p="imageContainer_CTon",g="image_MCbB",E="textContainer_wmLz",v="fullName_YrhI",h="role_QVlW",f=e=>{let{fullName:a,role1:t,role2:n,image:l,href:i,srcSet:c}=e;return r.createElement("a",{href:i,target:"_blank",className:d,rel:"noreferrer"},r.createElement("div",{className:(0,s.Z)(u,"example-card")},r.createElement("div",{className:p},r.createElement("img",{srcSet:c,src:l,alt:a,className:g})),r.createElement("div",{className:E},r.createElement("h3",{className:v},a),r.createElement("p",{className:h},t),n&&r.createElement("p",{className:h},n))))},b="container_cqYx",w="card_WVfb",N="cardTitle_tAnm",_="cardIconWrapper_HcrE",x="cardIcon_PFBE",y=e=>{let{title:a,subtitle:t,icon:n,href:l}=e;return r.createElement("a",{href:l,target:"_blank",className:b,rel:"noreferrer"},r.createElement("div",{className:(0,s.Z)(w,"example-card")},r.createElement("div",{className:N},a,r.createElement("br",null),r.createElement("strong",null,t)),r.createElement("div",{className:_},r.createElement(n,{className:x}))))},C={container:"container_U99T",card:"card_Tt1o",title:"title_f1Lt",ampersant:"ampersant_bJJZ",boldTitle:"boldTitle_V7Uj"},k=()=>r.createElement("a",{href:"https://www.linkedin.com/company/refine-dev/mycompany/",className:C.container,target:"_blank",rel:"noreferrer"},r.createElement("div",{className:(0,s.Z)(C.card,"example-card")},r.createElement("div",{className:C.title},"SEE OPEN",r.createElement("br",null),"POSITIONS"),r.createElement("div",{className:C.ampersant},"&"),r.createElement("div",{className:C.boldTitle},"JOIN",r.createElement("br",null),"THE TEAM"),r.createElement("img",{className:C.icon,src:"/icons/linkedin.svg"}))),Z={container:"container_TP6v",card:"card_zmSE",title:"title_bZIp",ampersant:"ampersant_t6Vf",boldTitle:"boldTitle_LZuu",text:"text_k65T",emerging:"emerging_sM7Z",imageWrapper:"imageWrapper_m80F",group:"group_wD60"},T=()=>r.createElement("a",{href:"https://ee.500.co/",className:(0,s.Z)(Z.container,"group")},r.createElement("div",{className:(0,s.Z)(Z.card,"example-card")},r.createElement("div",{className:(0,s.Z)(Z.imageWrapper,"group-hover:bg-[#2A2A42]")},r.createElement("img",{className:(0,s.Z)(Z.icon,"group-hover:hidden"),src:"/icons/500.svg"}),r.createElement("img",{className:(0,s.Z)(Z.icon,"hidden","group-hover:block"),src:"/icons/500hover.svg"})),r.createElement("p",{className:Z.text},"500",r.createElement("br",null),r.createElement("div",{className:Z.emerging},"Emerging Europe"))));t(37975);var W=t(9193);const I={root:"root_kZ_n",header:"header_y7ce",semiBold:"semiBold_Bm5O",title:"title_KbHJ",hat:"hat_DIhc",about:"about_Uo86",aboutParagraph:"aboutParagraph_W2oX",openSourceCommunity:"openSourceCommunity_Sjtp",container:"container_EIll",imageWrapper:"imageWrapper_DxNU",image:"image_LysF",openSourceParagraphs:"openSourceParagraphs_ib3d",mainParagraph:"mainParagraph_tLWJ",subParagraph:"subParagraph_mOsM",joinOurCommunity:"joinOurCommunity_kZpA",communityContainer:"communityContainer_LyaY",teamContainer:"teamContainer_FIRn",backedBy:"backedBy_z0Ee",backedByContainer:"backedByContainer_cwXR",backedMember:"backedMember_Yxjn",weAreHere:"weAreHere_w9Pr",locationContainer:"locationContainer_Akhy",locationText:"locationText_Hwhj",iconWrapper:"iconWrapper_NFNp",text:"text_TqYe",locationInfo:"locationInfo_SzTG",locationImageWrapper:"locationImageWrapper_NHTe",locationImage:"locationImage_M1qJ"},A=()=>r.createElement(W.Z,null,r.createElement(n.Z,{title:"About | DevDocs"},r.createElement("html",{"data-page":"about","data-customized":"true"})),r.createElement("div",{className:I.root},r.createElement("div",{className:I.header},r.createElement("div",null,"AT ",r.createElement("strong",{className:I.semiBold},"DevDocs"),","),r.createElement("div",null," WE ARE HELPING ORGANIZATIONS"),r.createElement("div",null," TO BUILD BETTER WEB APPLICATION"),r.createElement("div",null,r.createElement("strong",{className:I.semiBold},"IN LESS TIME")," &"," ",r.createElement("strong",{className:I.semiBold},"FEWER RESOURCES"))),r.createElement("div",{className:I.about},r.createElement("div",{className:I.title},r.createElement("div",{className:I.hat}),r.createElement("h2",{className:I.subtitle},"About")),r.createElement("p",{className:I.aboutParagraph},"Shortly after its initial release on ",r.createElement("strong",null,"September 2021"),", ",r.createElement("strong",null,"refine")," project has gained attraction of open-source community and has become increasingly popular among web application frameworks."),r.createElement("p",{className:I.aboutParagraph},"With the aim of sustaining the growth and expanding the user base, the project was"," ",r.createElement("strong",null,"backed by prominent VC's and angel investors on May 2022"),"."),r.createElement("p",{className:I.aboutParagraph},"Today, the US-based company has an international team of"," ",r.createElement("strong",null,"10+ members")," leading the development of the open-core and building new products for the ecosystem.")),r.createElement("div",{className:I.openSourceCommunity},r.createElement("div",{className:I.title},r.createElement("div",{className:I.hat}),r.createElement("h2",{className:I.subtitle},"Open Source Community")),r.createElement("div",{className:I.container},r.createElement("div",{className:I.imageWrapper},r.createElement("img",{className:I.image,src:"/about/images/community.png",srcSet:"/about/images/community2x.png 1500w"})),r.createElement("div",{className:I.openSourceParagraphs},r.createElement("p",{className:I.mainParagraph},r.createElement("strong",null,"Open source")," contributions have always been a major part of ",r.createElement("strong",{className:"lowercase"},"refine"),"'s success."),r.createElement("p",{className:I.subParagraph},"We are greateful for all contributers who are developing core features, making bug-fixes, building community extensions, writing documentation, reporting issues and giving their constructive feedback.")))),r.createElement("div",{className:I.joinOurCommunity},r.createElement("div",{className:I.title},r.createElement("div",{className:I.hat}),r.createElement("h2",{className:I.subtitle},"Join our community")),r.createElement("div",{className:I.communityContainer},o.map((e=>r.createElement(y,{key:e.url,title:e.title,subtitle:e.subtitle,icon:e.icon,href:e.url}))))),r.createElement("div",{className:I.team},r.createElement("div",{className:I.title},r.createElement("div",{className:I.hat}),r.createElement("h2",{className:I.subtitle},"Team")),r.createElement("div",{className:I.teamContainer},m.map((e=>r.createElement(f,{key:e.name,fullName:e.name,image:e.avatar,role1:e.role1,role2:e?.role2,href:e.url,srcSet:e.avatar2x}))),r.createElement(k,null))),r.createElement("div",{className:I.backedBy},r.createElement("div",{className:I.title},r.createElement("div",{className:I.hat}),r.createElement("h2",{className:I.subtitle},"Backed by")),r.createElement("div",{className:I.backedByContainer},r.createElement(T,null),r.createElement("div",{className:I.backedMember},r.createElement(f,{fullName:"Emre Baran",role1:"CEO & Co-founder at Cerbos",role2:"Expert-in-Residence at Seedcamp",image:"/about/images/team-avatars/emre.png",href:"https://www.linkedin.com/in/emrebaran/",srcSet:"/about/images/team-avatars/emre2x.png"}),r.createElement(f,{fullName:"Burak Emre Kabak\xe7\u0131",role1:"Staff SWE @ LiveRamp Maker",image:"/about/images/team-avatars/burak.png",href:"https://www.linkedin.com/in/burak-emre-kabakc%C4%B1-15b2bb33/",srcSet:"/about/images/team-avatars/burak2x.png"})))),r.createElement("div",{className:I.weAreHere},r.createElement("div",{className:I.title},r.createElement("div",{className:I.hat}),r.createElement("h2",{className:I.subtitle},"We are here")),r.createElement("div",{className:I.locationContainer},r.createElement("div",{className:I.locationText},r.createElement("div",{className:I.locationInfo},r.createElement("div",{className:I.iconWrapper},r.createElement(c,{className:I.icon})),r.createElement("p",{className:I.text},"256 Chapman Road STE 105-4 Newark, DE 19702")),r.createElement("div",{className:I.locationInfo},r.createElement("div",{className:I.iconWrapper},r.createElement(i,{className:I.icon})),r.createElement("p",{className:I.text},"sales@devdocs.work"))),r.createElement("div",{className:I.locationImageWrapper},r.createElement("img",{className:I.locationImage,src:"/about/images/map.png",srcSet:"/about/images/map2x.png 1500w"}))))))},47083:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(87462),r=t(95999),l=t(35281),i=(t(23612),t(86010)),c=t(67294);const o="admonition_WoCw",m="admonitionHeading_TMsN",s="admonitionIcon_Ibzs",d="admonitionContent_vXIg";function u(){return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},c.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))}function p(){return c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c.createElement("polyline",{points:"4 17 10 11 4 5"}),c.createElement("line",{x1:"12",y1:"19",x2:"20",y2:"19"}))}function g(){return c.createElement("svg",{viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))}function E(){return c.createElement("svg",{viewBox:"0 0 12 16"},c.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))}const v={note:{infimaClassName:"secondary",iconComponent:g,label:c.createElement(r.default,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:E,label:c.createElement(r.default,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return c.createElement("svg",{viewBox:"0 0 12 16"},c.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:c.createElement(r.default,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return c.createElement("svg",{viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:c.createElement(r.default,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return c.createElement("svg",{viewBox:"0 0 16 16"},c.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:c.createElement(r.default,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},h={secondary:"note",important:"info",success:"tip",warning:"danger"};function f(e){const{mdxAdmonitionTitle:a,rest:t}=function(e){const a=c.Children.toArray(e),t=a.find((e=>c.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=c.createElement(c.Fragment,null,a.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:n}}(e.children);return{...e,title:e.title??a,children:t}}const b=e=>{const{children:a,type:t,title:r,icon:u}=f(e),p=function(e){const a=h[e]??e,t=v[a];return t||(console.warn(`No admonition config found for admonition type "${a}". Using Info as fallback.`),v.info)}(t),g=r??p.label,{iconComponent:E}=p,b=u??c.createElement(E,null);return c.createElement("div",{className:(0,i.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert",`alert--${p.infimaClassName}`,o)},c.createElement("div",(0,n.Z)({className:m},e.titleProps),c.createElement("span",{className:s},b),g),c.createElement("div",{className:d},a))};function w(e){return"info-tip"===e.type?c.createElement(b,(0,n.Z)({},e,{icon:c.createElement(E,null)})):"additional"===e.type?c.createElement(b,(0,n.Z)({},e,{type:"note",icon:c.createElement(g,null),title:"ADDITIONAL INFO"})):"sourcecode"===e.type?c.createElement(b,(0,n.Z)({},e,{icon:c.createElement(u,null),title:c.createElement("a",{href:e.path,target:"_blank",rel:"noreferrer",style:{marginLeft:"4px"}},"VIEW SOURCE CODE \u2192"),titleProps:{style:{marginBottom:"-4px"}}}),e.children):"create-example"===e.type?c.createElement(b,(0,n.Z)({},e,{type:"caution",icon:c.createElement(p,null),title:c.createElement("span",{style:{marginLeft:"4px"}},"RUN IN YOUR LOCAL")}),e.children):c.createElement(c.Fragment,null,c.createElement(b,e))}}}]);