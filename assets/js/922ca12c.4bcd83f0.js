"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},60104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,s={unversionedId:"api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",title:"sorting-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useInfiniteList",slug:"/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/sorting-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  padding: 4px;\n  background: white;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},"setInitialRoutes(['/products'])\n\n// visible-block-start\nimport { useState } from 'react'\nimport { useInfiniteList, HttpError } from '@pankod/refine-core'\n\ninterface IProduct {\n  id: number\n  name: string\n  material: string\n}\n\nconst ProductList: React.FC = () => {\n  //highlight-next-line\n  const [order, setOrder] = useState<'asc' | 'desc'>('asc')\n\n  const {\n    data,\n    isLoading,\n    isError,\n    hasNextPage,\n    fetchNextPage,\n    isFetchingNextPage,\n  } = useInfiniteList<IProduct, HttpError>({\n    resource: 'products',\n    //highlight-start\n    config: {\n      sort: [\n        {\n          field: 'name',\n          order,\n        },\n      ],\n    },\n    //highlight-end\n  })\n\n  if (isLoading) {\n    return <p>Loading</p>\n  }\n  if (isError) {\n    return <p>Something went wrong</p>\n  }\n\n  const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data))\n\n  return (\n    <div>\n      {/* highlight-start */}\n      <button\n        onClick={() => setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}\n      >\n        toggle sort\n      </button>\n      {/* highlight-end */}\n\n      <ul>\n        {allPages.map((product) => (\n          <li key={product.id}>\n            {product.name} - ({product.material})\n          </li>\n        ))}\n      </ul>\n\n      {hasNextPage && (\n        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>\n          {isFetchingNextPage ? 'Loading more...' : 'Load More'}\n        </button>\n      )}\n    </div>\n  )\n}\n\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: 'products',\n      list: ProductList,\n    },\n  ],\n})\n\nrender(<RefineHeadlessDemo />)\n")))}u.isMDXComponent=!0}}]);