"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[51942],{"./src/components/Skeleton/docs/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAnimation:()=>WithAnimation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Skeleton",component:__webpack_require__("./src/components/Skeleton/Skeleton.tsx").O,argTypes:{animated:{options:[!0,!1],defaultValue:!1,control:"radio"},ref:{table:{disable:!0}},as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},theme:{table:{disable:!0}}}},Default={},WithAnimation={args:{animated:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithAnimation.parameters={...WithAnimation.parameters,docs:{...WithAnimation.parameters?.docs,source:{originalSource:"{\n  args: {\n    animated: true\n  }\n}",...WithAnimation.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithAnimation"]},"./src/components/Skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Skeleton});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts");const shimmerAnimation=styled_components__WEBPACK_IMPORTED_MODULE_1__.F4`
    100% {
        transform: translateX(100%);
    }
`,animationStyles=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-75%);
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0.5) 37%,
            rgba(255, 255, 255, 0) 63%
        );
        background-repeat: no-repeat;
        content: '';

        animation: ${shimmerAnimation} 1600ms ease infinite;
        animation-delay: 200ms;
    }
`,Skeleton=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
    display: inline-block;
    height: 1rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("radii.2")};
    background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.wp)("background-surface-neutral-faded")};

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.E0)};

    ${p=>p.animated?animationStyles:void 0}
`;try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},animated:{defaultValue:{value:"false"},description:"Show skeleton animation",name:"animated",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-Skeleton-docs-Skeleton-stories.de4833b0.iframe.bundle.js.map