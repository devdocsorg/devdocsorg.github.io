"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"api-reference/mantine/hooks/useSelect/crud-live-preview",id:"version-3.xx.xx/api-reference/mantine/hooks/useSelect/crud-live-preview",title:"crud-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/useSelect/crud-live-preview.md",sourceDirName:"api-reference/mantine/hooks/useSelect",slug:"/api-reference/mantine/hooks/useSelect/crud-live-preview",permalink:"/docs/3.xx.xx/api-reference/mantine/hooks/useSelect/crud-live-preview",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/mantine/hooks/useSelect/crud-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},"setInitialRoutes(['/posts/create'])\n// visible-block-start\nimport { Create, Select, useForm, useSelect } from '@pankod/refine-mantine'\n\ninterface ICategory {\n  id: number\n  title: string\n}\n\nconst ProductCreate: React.FC = () => {\n  const { saveButtonProps, getInputProps, errors } = useForm({\n    initialValues: {\n      category: {\n        id: '',\n      },\n    },\n  })\n\n  const { selectProps } = useSelect<ICategory>({\n    resource: 'categories',\n  })\n\n  return (\n    <Create saveButtonProps={saveButtonProps}>\n      <form>\n        <Select\n          mt={8}\n          label=\"Category\"\n          placeholder=\"Select a category\"\n          {...getInputProps('category.id')}\n          {...selectProps}\n        />\n      </form>\n    </Create>\n  )\n}\n// visible-block-end\nsetRefineProps({\n  resources: [\n    {\n      name: 'posts',\n      create: ProductCreate,\n    },\n  ],\n})\nrender(<RefineMantineDemo />)\n")))}d.isMDXComponent=!0}}]);