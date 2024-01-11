"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[77523],{"./src/components/Box/docs/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Inline:()=>Inline,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Box",component:__webpack_require__("./src/components/Box/Box.tsx").x},Default={args:{children:"By default it is a block `div` element"}},Inline={args:{as:"span",children:"I can be inline when `as` prop is used"}},Responsive={args:{children:"I can be responsive",bg:"#FF9CFC",width:[1,1,.5]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'By default it is a block `div` element'\n  }\n}",...Default.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:"{\n  args: {\n    as: 'span',\n    children: 'I can be inline when `as` prop is used'\n  }\n}",...Inline.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'I can be responsive',\n    bg: '#FF9CFC',\n    width: [1, 1, 1 / 2]\n  }\n}",...Responsive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Inline","Responsive"]},"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const Box=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.FK,styled_system__WEBPACK_IMPORTED_MODULE_0__.$_,styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.eC,styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Spaces_Spaces__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_1__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"}}]);
//# sourceMappingURL=components-Box-docs-Box-stories.994da619.iframe.bundle.js.map