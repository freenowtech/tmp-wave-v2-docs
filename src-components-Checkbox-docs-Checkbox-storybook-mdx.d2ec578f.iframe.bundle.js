"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[79329,33005],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Checkbox/docs/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Indeterminate:()=>Indeterminate,Selected:()=>Selected,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Form Elements/Checkbox",component:__webpack_require__("./src/components/Checkbox/Checkbox.tsx").X,argTypes:{size:{control:"radio",options:["small","medium","large"]},textVerticalAlign:{control:"radio",options:["center","top"]}},args:{label:"Accept T&C"}},Default={},Selected={args:{defaultChecked:!0}},Error={args:{label:"With Error",error:!0}},Disabled={args:{disabled:!0}},Indeterminate={args:{indeterminate:!0}},Size={args:{size:"large"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultChecked: true\n  }\n}",...Selected.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'With Error',\n    error: true\n  }\n}",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    indeterminate: true\n  }\n}",...Indeterminate.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Size.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Selected","Error","Disabled","Indeterminate","Size"]},"./src/components/Checkbox/Checkbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts");const Checkmark=styled_components_browser_esm.ZP.input`
    appearance: none;
    outline-offset: 0.25rem;
    border: none;

    position: relative;

    width: 1rem;
    height: 1rem;
    padding: 0;
    margin: 0;

    background-color: ${(0,cssVariables.wp)("background-page-default")};

    box-shadow: inset 0 0 0 0.125rem
        ${props=>(0,cssVariables.wp)(props.error?"border-danger-default":"border-neutral-default")};
    border-radius: ${(0,themeGet.U)("radii.2")};
    transition: background-color 100ms, box-shadow 100ms;
    cursor: pointer;

    vertical-align: text-bottom;

    &::after {
        content: ' ';

        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath d='M3.711 8.037a1.051 1.051 0 0 1 1.485-.063l1.411 1.297 4.113-4.806a1.051 1.051 0 1 1 1.597 1.367l-4.63 5.41a1.333 1.333 0 0 1-1.916.116L3.774 9.522a1.051 1.051 0 0 1-.063-1.485z' id='a'/%3E%3C/defs%3E%3Cuse fill='%23FFF' fill-rule='nonzero' xlink:href='%23a'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: cover;
        width: 1rem;
        height: 1rem;

        position: absolute;
        top: 50%;
        left: 45%;

        opacity: 0;
        visibility: hidden;
        transform: translate(-45%, -40%) scale(0.2);
        transition: visibility 175ms, opacity 150ms, scale 175ms, transform 175ms;
    }

    &:checked {
        background-color: ${props=>(0,cssVariables.wp)(props.error?"background-element-danger-default":"background-element-info-emphasized")};
        box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.wp)("transparent")};

        &::after {
            opacity: 1;
            visibility: visible;
            transform: translate(-45%, -50%) scale(1);
        }
    }

    &:indeterminate {
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='10' height='2' x='3' y='7' rx='1' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E%0A");
        background-color: ${props=>(0,cssVariables.wp)(props.error?"background-element-danger-emphasized":"background-element-info-emphasized")};
        box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.wp)("transparent")};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${(0,cssVariables.wp)("background-element-disabled-faded")};
        box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.wp)("transparent")};

        &:hover {
            box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.wp)("transparent")};
        }

        &:active {
            background-color: ${(0,cssVariables.wp)("background-element-disabled-faded")};
        }
    }
`;try{Checkmark.displayName="Checkmark",Checkmark.__docgenInfo={description:"",displayName:"Checkmark",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/components/Checkmark.tsx#Checkmark"]={docgenInfo:Checkmark.__docgenInfo,name:"Checkmark",path:"src/components/Checkbox/components/Checkmark.tsx#Checkmark"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const TapArea=styled_components_browser_esm.ZP.div`
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: ${(0,themeGet.U)("radii.3")};
    background-color: transparent;
    top: -0.375rem;
    left: -0.375rem;
    transition: background-color 125ms;

    &:active {
        background-color: ${(0,cssVariables.wp)("background-element-neutral-emphasized")};
    }
`;try{TapArea.displayName="TapArea",TapArea.__docgenInfo={description:"",displayName:"TapArea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/components/TapArea.tsx#TapArea"]={docgenInfo:TapArea.__docgenInfo,name:"TapArea",path:"src/components/Checkbox/components/TapArea.tsx#TapArea"})}catch(__react_docgen_typescript_loader_error){}var theme=__webpack_require__("./src/essentials/theme.ts");const textVerticalAlignVariant=(0,index_esm.bU)({prop:"textVerticalAlign",variants:{top:{alignItems:"flex-start"},center:{alignItems:"center"}}}),LabelWrapper=styled_components_browser_esm.ZP.label.attrs({theme:theme.r})`
    display: inline-flex;
    position: relative;
    user-select: none;

    color: ${props=>(0,cssVariables.wp)(props.disabled?"foreground-disabled":"foreground-primary")};

    font-family: ${(0,themeGet.U)("fonts.normal")};
    line-height: 1;

    &:hover {
        ${({disabled,error,indeterminate})=>disabled?styled_components_browser_esm.iv`
            cursor: not-allowed;

            & > ${TapArea}:active {
                background-color: transparent;
            }
        `:indeterminate?styled_components_browser_esm.iv`
            cursor: pointer;

            & ${TapArea}:not(:active) {
                background-color: ${(0,cssVariables.wp)(error?"background-element-danger-faded":"background-element-info-default")};
            }

            & ${Checkmark}:not(:checked) {
                box-shadow: inset 0 0 0 0.125rem
                    ${(0,cssVariables.wp)(error?"border-danger-default":"border-info-default")};
            }
        `:styled_components_browser_esm.iv`
        cursor: pointer;

        & ${TapArea}:not(:active) {
            background-color: ${(0,cssVariables.wp)(error?"background-element-danger-faded":"background-element-info-default")};
        }

        & ${Checkmark}:not(:checked) {
            box-shadow: inset 0 0 0 0.125rem
                ${(0,cssVariables.wp)(error?"border-danger-default":"border-info-default")};
            background-color: ${(0,cssVariables.wp)("background-page-default")};
        }
    `}
    }

    ${(0,index_esm.qC)(index_esm.e6,textVerticalAlignVariant)}
`;try{LabelWrapper.displayName="LabelWrapper",LabelWrapper.__docgenInfo={description:"",displayName:"LabelWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},textVerticalAlign:{defaultValue:null,description:"",name:"textVerticalAlign",required:!1,type:{name:'ResponsiveValue<"center" | "top", Required<Theme<TLengthStyledSystem>>>'}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/components/LabelWrapper.tsx#LabelWrapper"]={docgenInfo:LabelWrapper.__docgenInfo,name:"LabelWrapper",path:"src/components/Checkbox/components/LabelWrapper.tsx#LabelWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const WithTapAreaWrapper=styled_components_browser_esm.ZP.div`
    position: relative;
    display: inline-flex;
    align-items: center;

    height: 1rem;
    margin: 0 0.5rem 0 0;
    ${({textVerticalAlign})=>"top"===textVerticalAlign?"margin-top: 0.1875rem":void 0}
`,Checkbox=props=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps}=(0,extractProps.c2)(withoutClassName),{disabled,error,label,textVerticalAlign,size,indeterminate,...rest}=restProps;let dynamicLabel=label;"string"==typeof label&&(dynamicLabel=(0,jsx_runtime.jsx)(Text.x,{onClick:e=>e.stopPropagation(),disabled,fontSize:size,children:label}));const checkboxRef=react.createRef();return(0,react.useEffect)((()=>{checkboxRef.current.indeterminate=!!indeterminate}),[indeterminate]),(0,jsx_runtime.jsxs)(LabelWrapper,{indeterminate,disabled,error,textVerticalAlign,...marginProps,...classNameProps,children:[(0,jsx_runtime.jsxs)(WithTapAreaWrapper,{textVerticalAlign,children:[(0,jsx_runtime.jsx)(TapArea,{}),(0,jsx_runtime.jsx)(Checkmark,{ref:checkboxRef,type:"checkbox",disabled,error,...rest})]}),dynamicLabel]})};Checkbox.displayName="Checkbox",Checkbox.defaultProps={textVerticalAlign:"center",size:"medium"};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Provide a label for the input which will be shown next to the checkbox",name:"label",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Add styles to show the checkbox has errors",name:"error",required:!1,type:{name:"boolean"}},textVerticalAlign:{defaultValue:{value:"center"},description:"Align label text relatively to the checkbox",name:"textVerticalAlign",required:!1,type:{name:'ResponsiveValue<"center" | "top", Required<Theme<TLengthStyledSystem>>>'}},size:{defaultValue:{value:"medium"},description:"Define size of the checkbox component, defaults to large",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium" | "large", Required<Theme<TLengthStyledSystem>>>'}},indeterminate:{defaultValue:null,description:'Decides whether the checkbox is in an "indeterminate"(partially selected) state',name:"indeterminate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.r})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./src/components/Checkbox/docs/Checkbox.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_nlopin_workspace_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Checkbox_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Checkbox/docs/Checkbox.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2"},(0,_Users_nlopin_workspace_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Checkboxes are used for a list of options where the user may select multiple options, including all or none. A\nstand-alone checkbox is used for a single option that the user can turn on or off."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can provide the label as either a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"})," or as a React component. If a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"})," is provided as the label, it\nwill be wrapped with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/components/Text",children:"Text"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Checkbox_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_nlopin_workspace_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=src-components-Checkbox-docs-Checkbox-storybook-mdx.d2ec578f.iframe.bundle.js.map