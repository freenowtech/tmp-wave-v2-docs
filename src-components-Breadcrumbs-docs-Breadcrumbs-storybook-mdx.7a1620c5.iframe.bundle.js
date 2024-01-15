"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[3228,6557],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Breadcrumbs/docs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ChevronRightIcon=__webpack_require__("./src/icons/arrows/ChevronRightIcon.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),Box=__webpack_require__("./src/components/Box/Box.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BreadcrumbsList=styled_components_browser_esm.ZP.ul`
    padding: 0;
    list-style: none;
    display: flex;
`,BreadcrumbsListItem=styled_components_browser_esm.ZP.li`
    display: flex;
`,Breadcrumbs=({children})=>{const arrayChildren=react.Children.toArray(children);return(0,jsx_runtime.jsx)(BreadcrumbsList,{children:react.Children.map(arrayChildren,((child,index)=>(0,jsx_runtime.jsxs)(BreadcrumbsListItem,{children:[(0,jsx_runtime.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,react.cloneElement)(child)}),index<arrayChildren.length-1?(0,jsx_runtime.jsx)(Box.x,{height:16,mt:"0.125rem",children:(0,jsx_runtime.jsx)(ChevronRightIcon.Z,{size:16,color:(0,cssVariables.wp)("foreground-neutral-default")})}):null]})))})};Breadcrumbs.displayName="Breadcrumbs";const Link=styled_components_browser_esm.ZP.a.attrs({theme:theme.r})`
    display: inline-block;
    color: ${(0,cssVariables.wp)("foreground-accent-default")};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${(0,themeGet.U)("fonts.normal")};
    font-size: ${(0,themeGet.U)("fontSizes.1")};
    text-decoration: none;
    padding: 0 0.25rem 0 0.25rem;

    &:hover,
    &:active {
        color: ${(0,cssVariables.wp)("foreground-accent-emphasized")};
        text-decoration: underline;
    }
`,Item=(0,styled_components_browser_esm.ZP)(Text.x).attrs((()=>({fontSize:"small",padding:"0 0.25rem 0 0.25rem"})))``;Breadcrumbs.Item=Item,Breadcrumbs.Link=Link;try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Content of the Breadcrumbs\n@required",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const DefaultBreadcrumbs=({...props})=>(0,jsx_runtime.jsxs)(Breadcrumbs,{...props,children:[(0,jsx_runtime.jsx)(Breadcrumbs.Link,{href:"/path",children:"Path"}),(0,jsx_runtime.jsx)(Breadcrumbs.Link,{href:"/path/to",children:"to"}),(0,jsx_runtime.jsx)(Breadcrumbs.Item,{children:"Glory"})]});DefaultBreadcrumbs.displayName="DefaultBreadcrumbs";try{DefaultBreadcrumbs.displayName="DefaultBreadcrumbs",DefaultBreadcrumbs.__docgenInfo={description:"",displayName:"DefaultBreadcrumbs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/docs/DefaultBreadcrumbs.tsx#DefaultBreadcrumbs"]={docgenInfo:DefaultBreadcrumbs.__docgenInfo,name:"DefaultBreadcrumbs",path:"src/components/Breadcrumbs/docs/DefaultBreadcrumbs.tsx#DefaultBreadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const Breadcrumbs_stories={title:"Components/Breadcrumbs",component:Breadcrumbs,argTypes:{children:{table:{type:{summary:"ReactNode"}}},inverted:{options:[!0,!1],control:"select",table:{type:{summary:"boolean"}}}}},Default={render:DefaultBreadcrumbs};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: DefaultBreadcrumbs\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const Box=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.FK,styled_system__WEBPACK_IMPORTED_MODULE_0__.$_,styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.eC,styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.r})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Spaces_Spaces__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_1__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/icons/arrows/ChevronRightIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChevronRightIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M13.675 12L7.5 5h2.676l6.222 7-6.222 7H7.5l6.175-7z",fill:"currentColor"})})};ChevronRightIcon.displayName="ChevronRightIcon";const __WEBPACK_DEFAULT_EXPORT__=ChevronRightIcon;try{ChevronRightIcon.displayName="ChevronRightIcon",ChevronRightIcon.__docgenInfo={description:"",displayName:"ChevronRightIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/arrows/ChevronRightIcon.tsx#ChevronRightIcon"]={docgenInfo:ChevronRightIcon.__docgenInfo,name:"ChevronRightIcon",path:"src/icons/arrows/ChevronRightIcon.tsx#ChevronRightIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./src/components/Breadcrumbs/docs/Breadcrumbs.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_nlopin_workspace_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Breadcrumbs/docs/Breadcrumbs.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre"},(0,_Users_nlopin_workspace_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"compound-components-approach",children:"Compound components approach"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'You can create your Breadcrumbs with active links and text using the following components"'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Breadcrumbs"})," (Wrapper)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Breadcrumbs.Link"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Breadcrumbs.Text"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The wrapper component (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Breadcrumbs"}),") expects a list of children and will render them with the separator. If Inverted variant is passed it will afftect the children."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We can pass to the Link our favourite router passing the RouterLink in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"as"})," prop, avoiding the reload of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"a"})," tags."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'<Breadcrumbs>\n    <Breadcrumbs.Link href="/path">Path</Breadcrumbs.Link>\n    <Breadcrumbs.Link as={RouterLink} to="/path/to">\n        to\n    </Breadcrumbs.Link>\n    <Breadcrumbs.Item>Glory</Breadcrumbs.Item>\n</Breadcrumbs>\n'})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_nlopin_workspace_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=src-components-Breadcrumbs-docs-Breadcrumbs-storybook-mdx.7a1620c5.iframe.bundle.js.map