"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80930],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),u=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(d.Provider,{value:r},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),f=a,m=l["".concat(d,".").concat(f)]||l[f]||c[f]||n;return t?o.createElement(m,s(s({ref:r},p),{},{components:t})):o.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<n;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77426:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const n={id:"useForgotPassword",title:"useForgotPassword",siderbar_label:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration."},s=void 0,i={unversionedId:"api-reference/core/hooks/auth/useForgotPassword",id:"version-3.xx.xx/api-reference/core/hooks/auth/useForgotPassword",title:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useForgotPassword.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useForgotPassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useForgotPassword.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"useForgotPassword",title:"useForgotPassword",siderbar_label:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"useRegister",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister"},next:{title:"useUpdatePassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Redirection after forgotPassword",id:"redirection-after-forgotpassword",level:2}],p={toc:u},l="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It forgot passwords the user if ",(0,a.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,a.kt)("p",null,"Data that is resolved from ",(0,a.kt)("inlineCode",{parentName:"p"},"forgotPassword")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Normally refine provides a default forgot password page. If you prefer to use this default forgot password page, there is no need to handle forgot password flow manually.",(0,a.kt)("br",{parentName:"p"}),"\n","If we want to build a custom forgotPassword page instead of default one that comes with refine, ",(0,a.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," can be used like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customForgotPasswordPage"',title:'"pages/customForgotPasswordPage"'},'import { useForgotPassword } from \'@pankod/refine-core\'\n\ntype forgotPasswordVariables = {\n  email: string\n}\n\nexport const forgotPasswordPage = () => {\n  const { mutate: forgotPassword } =\n    useForgotPassword<forgotPasswordVariables>()\n\n  const onSubmit = (values: forgotPasswordVariables) => {\n    forgotPassword(values)\n  }\n\n  return (\n    <form onSubmit={onSubmit}>\n      <label>Email</label>\n      <input name="email" value="test@refine.com" />\n      <button type="submit">Submit</button>\n    </form>\n  )\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," can accept any kind of object for values since ",(0,a.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,a.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"useForgotPassword"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: forgotPassword } = useForgotPassword<{ email: string }>()\n"))),(0,a.kt)("h2",{id:"redirection-after-forgotpassword"},"Redirection after forgotPassword"),(0,a.kt)("p",null,"We have 2 options for redirecting the app after forgotPassword successfully ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"forgotPassword")," method of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    forgotPassword: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,a.kt)("p",null,"A custom url can be given to mutate function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," hook if you want to redirect yourself to a certain url."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useForgotPassword } from '@pankod/refine-core'\n\nconst { mutate: forgotPassword } = useForgotPassword()\n\nforgotPassword({ redirectPath: '/custom-url' })\n")),(0,a.kt)("p",null,"Then, you can handle this url in your ",(0,a.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    forgotPassword: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the promise returned from the ",(0,a.kt)("inlineCode",{parentName:"li"},"forgotPassword")," method of the ",(0,a.kt)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    forgotPassword: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the promise returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"forgotPassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}c.isMDXComponent=!0}}]);