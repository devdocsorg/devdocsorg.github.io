"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,v=l["".concat(c,".").concat(f)]||l[f]||u[f]||i;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"api-reference/core/hooks/data/useList/sorting-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview",title:"sorting-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/sorting-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{}},c={},d=[],p={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},"setInitialRoutes(['/products'])\n\n// visible-block-start\nimport { useState } from 'react'\nimport { useList, HttpError } from '@pankod/refine-core'\n\ninterface IProduct {\n  id: number\n  name: string\n  material: string\n}\n\nconst ProductList: React.FC = () => {\n  //highlight-next-line\n  const [order, setOrder] = useState<'asc' | 'desc'>('asc')\n\n  const { data, isLoading, isError } = useList<IProduct, HttpError>({\n    resource: 'products',\n    //highlight-start\n    config: {\n      sort: [\n        {\n          field: 'name',\n          order,\n        },\n      ],\n    },\n    //highlight-end\n  })\n\n  const products = data?.data ?? []\n\n  if (isLoading) {\n    return <div>Loading...</div>\n  }\n\n  if (isError) {\n    return <div>Something went wrong!</div>\n  }\n\n  return (\n    <div>\n      {/* highlight-start */}\n      <button\n        onClick={() => setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}\n      >\n        toggle sort\n      </button>\n      {/* highlight-end */}\n\n      <ul>\n        {products.map((product) => (\n          <li key={product.id}>\n            <h4>\n              {product.name} - ({product.material})\n            </h4>\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: 'products',\n      list: ProductList,\n    },\n  ],\n})\n\nrender(<RefineHeadlessDemo />)\n")))}u.isMDXComponent=!0}}]);