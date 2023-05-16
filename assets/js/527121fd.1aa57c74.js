"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36383],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={id:"clone-button",title:"Clone",swizzle:!0},i=void 0,l={unversionedId:"api-reference/mantine/components/buttons/clone-button",id:"api-reference/mantine/components/buttons/clone-button",title:"Clone",description:"` uses Mantine's  component. It uses the clone` method from useNavigation under the hood.",source:"@site/docs/api-reference/mantine/components/buttons/clone.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/clone-button",permalink:"/docs/api-reference/mantine/components/buttons/clone-button",draft:!1,editUrl:"https://github.com/devdocsorg/devdocs/tree/master/docs/api-reference/mantine/components/buttons/clone.md",tags:[],version:"current",lastUpdatedBy:"ashishdevdocs",lastUpdatedAt:1684241945,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"clone-button",title:"Clone",swizzle:!0},sidebar:"someSidebar",previous:{title:"Breadcrumb",permalink:"/docs/api-reference/mantine/components/breadcrumb"},next:{title:"Create",permalink:"/docs/api-reference/mantine/components/buttons/create-button"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=c("PropTag"),u=c("PropsTable"),m={toc:p},h="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    legacyRouterProvider: routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n    catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <MantineCore.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <MantineCore.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <MantineNotifications.NotificationsProvider position="top-right">\n                {children}\n            </MantineNotifications.NotificationsProvider>\n        </MantineCore.MantineProvider>\n    );\n};\n\nconst ClonePage = () => {\n    const { list } = RefineCore.useNavigation();\n    const params = RefineCore.useRouterContext().useParams();\n\n    return (\n        <div>\n            <MantineCore.Text italic color="dimmed" size="sm">\n                URL Parameters:\n            </MantineCore.Text>\n            <MantineCore.Code>{JSON.stringify(params)}</MantineCore.Code>\n            <MantineCore.Space h="md" />\n            <MantineCore.Button\n                size="xs"\n                variant="outline"\n                onClick={() => list("posts")}\n            >\n                Go back\n            </MantineCore.Button>\n        </div>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CloneButton>")," uses Mantine's ",(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},"useNavigation")," under the hood.\nIt can be useful when redirecting the app to the create page with the record id route of resource."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { List, CloneButton } from "@refinedev/mantine";\nimport { Table, Pagination } from "@mantine/core";\n\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        // highlight-start\n                        <CloneButton\n                            size="xs"\n                            recordItemId={getValue() as number}\n                        />\n                        // highlight-end\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    //hide-start\n    List.defaultProps = {\n        headerButtons: <></>,\n    };\n    //hide-end\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: ClonePage,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CloneButton } from "@refinedev/mantine";\n\nconst MyCloneComponent = () => {\n    return <CloneButton recordItemId="123" />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            resources={[\n                {\n                    name: "posts",\n                    create: ClonePage,\n                    list: MyCloneComponent,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," action path of the resource, filling the necessary parameters in the route."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<CloneButton>"))," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"It is used to redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," action of the given resource name. By default, the app redirects to the inferred resource's ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," action path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CloneButton } from "@refinedev/mantine";\n\nconst MyCloneComponent = () => {\n    return (\n        <CloneButton resource="categories" recordItemId="2" />\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            resources={[\n                {\n                    name: "posts",\n                    list: MyCloneComponent,\n                },\n                {\n                    name: "categories",\n                    create: ClonePage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," action path of the resource, filling the necessary parameters in the route."),(0,r.kt)("h3",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h3"},"meta")),(0,r.kt)("p",null,"It is used to pass additional parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method. You can pass additional parameters or override the existing ones using the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," action route is defined by the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/clone/:id"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n    return (\n        <CloneButton meta={{ authorId: "10" }} />\n    );\n};\n')),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CloneButton } from "@refinedev/mantine";\n\nconst MyCloneComponent = () => {\n    return <CloneButton hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            resources={[\n                {\n                    name: "posts",\n                    list: MyCloneComponent,\n                    create: ClonePage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@refinedev/mantine";\n\nexport const MyListComponent = () => {\n    return (\n        <CloneButton\n            accessControl={{ enabled: true, hideIfUnauthorized: true }}\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,r.kt)(d,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.kt)("p",null,"It is used to redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/clone")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,r.kt)("inlineCode",{parentName:"p"},"/clone")," defined by the name property of the resource object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CloneButton } from "@refinedev/mantine";\n\nconst MyCloneComponent = () => {\n    return (\n        <CloneButton resourceNameOrRouteName="categories" recordItemId="2" />\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            resources={[\n                {\n                    name: "posts",\n                    list: MyCloneComponent,\n                },\n                {\n                    name: "categories",\n                    create: ClonePage,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories/clone/2"),"."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(u,{module:"@refinedev/mantine/CloneButton",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);