"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49309],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={id:"layout",title:"Layout",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mantine/customization/layout",id:"version-3.xx.xx/api-reference/mantine/customization/layout",title:"Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/customization/layout.md",sourceDirName:"api-reference/mantine/customization",slug:"/api-reference/mantine/customization/layout",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/layout",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/versioned_docs/version-3.xx.xx/api-reference/mantine/customization/layout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"layout",title:"Layout",swizzle:!0},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/theme"},next:{title:"Sider",permalink:"/docs/3.xx.xx/api-reference/mantine/customization/sider"}},c={},l=[{value:"Creating a Custom Layout",id:"creating-a-custom-layout",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create custom layouts using ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#footer"},(0,r.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#header"},(0,r.kt)("inlineCode",{parentName:"a"},"Header"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#offlayoutarea"},(0,r.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"Title")))),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"creating-a-custom-layout"},"Creating a Custom Layout"),(0,r.kt)("p",null,"Let's start with creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomLayout/>")," component using ",(0,r.kt)("inlineCode",{parentName:"p"},"LayoutProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes([\'/posts\'])\nimport { useNavigation } from \'@pankod/refine-core\'\nimport { List, Text, Code, Table, Pagination } from \'@pankod/refine-mantine\'\nimport { useTable, ColumnDef, flexRender } from \'@pankod/refine-react-table\'\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef[]>(\n    () => [\n      {\n        id: \'id\',\n        header: \'ID\',\n        accessorKey: \'id\',\n      },\n      {\n        id: \'title\',\n        header: \'Title\',\n        accessorKey: \'title\',\n      },\n    ],\n    [],\n  )\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    refineCore: { setCurrent, pageCount, current },\n  } = useTable({\n    columns,\n    refineCoreProps: {\n      initialPageSize: 5,\n    },\n  })\n\n  return (\n    <List>\n      <Table>\n        <thead>\n          {getHeaderGroups().map((headerGroup) => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => (\n                <th key={header.id}>\n                  {header.isPlaceholder\n                    ? null\n                    : flexRender(\n                        header.column.columnDef.header,\n                        header.getContext(),\n                      )}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {getRowModel().rows.map((row) => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => (\n                <td key={cell.id}>\n                  {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                </td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </Table>\n      <br />\n      <Pagination\n        position="right"\n        total={pageCount}\n        page={current}\n        onChange={setCurrent}\n      />\n    </List>\n  )\n}\n\nconst DummyListPage = () => {\n  const { list } = useNavigation()\n  const params = RefineCore.useRouterContext().useParams()\n\n  return (\n    <List>\n      <Text italic color="dimmed" size="sm">\n        URL Parameters:\n      </Text>\n      <Code>{JSON.stringify(params)}</Code>\n    </List>\n  )\n}\n\nconst IconList = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n)\n\nconst IconCategory = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-category"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M4 4h6v6h-6z"></path>\n    <path d="M14 4h6v6h-6z"></path>\n    <path d="M4 14h6v6h-6z"></path>\n    <circle cx={17} cy={17} r={3}></circle>\n  </svg>\n)\n\nconst IconUsers = () => (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-users"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    stroke-width={2}\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <circle cx={9} cy={7} r={4}></circle>\n    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\n    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\n  </svg>\n)\n\n// visible-block-start\n// highlight-start\nimport {\n  Refine,\n  LayoutProps,\n  useMenu,\n  useRouterContext,\n} from \'@pankod/refine-core\'\n// highlight-end\nimport routerProvider from \'@pankod/refine-react-router-v6\'\nimport dataProvider from \'@pankod/refine-simple-rest\'\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  notificationProvider,\n  LightTheme,\n  // highlight-start\n  Box,\n  MantineHeader,\n  Group,\n  NavLink,\n  // highlight-end\n} from \'@pankod/refine-mantine\'\nimport { IconList, IconCategory, IconUsers } from \'@tabler/icons\'\n\nimport { PostList } from \'./pages/posts\'\n\n// highlight-start\nconst CustomLayout: React.FC<LayoutProps> = ({ children }) => {\n  const { menuItems, selectedKey } = useMenu()\n  const { Link } = useRouterContext()\n\n  return (\n    <Box sx={{ display: \'flex\', flexDirection: \'column\' }}>\n      <MantineHeader height={50} p="xs">\n        <Group>\n          {menuItems.map(({ route, label, icon }) => (\n            <Box key={route}>\n              <NavLink\n                component={Link}\n                to={route}\n                label={label}\n                icon={icon ?? <IconList />}\n                active={route === selectedKey}\n              />\n            </Box>\n          ))}\n        </Group>\n      </MantineHeader>\n      <Box>{children}</Box>\n    </Box>\n  )\n}\n// highlight-end\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: \'auto\' } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(\'https://api.fake-rest.refine.dev\')}\n          notificationProvider={notificationProvider}\n          // highlight-next-line\n          Layout={CustomLayout}\n          resources={[\n            {\n              name: \'posts\',\n              list: PostList,\n            },\n            {\n              name: \'categories\',\n              list: DummyListPage,\n              icon: <IconCategory />,\n            },\n            {\n              name: \'users\',\n              list: DummyListPage,\n              icon: <IconUsers />,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  )\n}\n// visible-block-end\nrender(<App />)\n')),(0,r.kt)("p",null,"We used ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it. We also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," hook to get the router context and use it to create a link."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},"refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))))}d.isMDXComponent=!0}}]);