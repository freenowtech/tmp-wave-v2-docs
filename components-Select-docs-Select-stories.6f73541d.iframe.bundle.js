"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[65458],{"./src/components/Select/docs/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomLined:()=>BottomLined,Default:()=>Default,Disabled:()=>Disabled,Small:()=>Small,WithError:()=>WithError,WithLabel:()=>WithLabel,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),ChevronDownIcon=__webpack_require__("./src/icons/arrows/ChevronDownIcon.tsx"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const SelectLabel=styled_components_browser_esm.ZP.label`
    position: absolute;
    pointer-events: none;
    line-height: 1;
    font-weight: ${(0,themeGet.U)("fontWeights.semibold")};
    color: ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
    background: ${(0,cssVariables.wp)("background-page-default")};
    transition: color ${100}ms ease-out, background ${100}ms ease-out;
`,bottomLinedSizeVariants=(0,index_esm.bU)({prop:"size",variants:{small:{fontSize:(0,themeGet.U)("fontSizes.1"),height:"2.5rem",padding:"0.625rem 1.25rem 0.125rem 0.125rem",[`& ~ ${SelectLabel}`]:{top:"0.125rem",left:"0",padding:"0 0.125rem",fontSize:"0.625rem"},"& ~ .svg-icon":{top:"0.625rem"}},medium:{fontSize:(0,themeGet.U)("fontSizes.2"),height:"3.5rem",padding:"1.25rem 1.75rem 0.25rem 0.25rem",[`& ~ ${SelectLabel}`]:{top:"0.375rem",left:"0",padding:"0 0.25rem",fontSize:(0,themeGet.U)("fontSizes.0")},"& ~ .svg-icon":{top:"1rem"}}}}),boxedSizeVariants=(0,index_esm.bU)({prop:"size",variants:{small:{fontSize:(0,themeGet.U)("fontSizes.1"),height:"2rem",padding:"0 1.5rem 0 0.5rem",[`& ~ ${SelectLabel}`]:{top:"-0.3125rem",left:"0.4375rem",padding:"0 0.125rem",fontSize:"0.625rem"}},medium:{fontSize:(0,themeGet.U)("fontSizes.2"),height:"3rem",padding:"0 2.25rem 0 0.75rem",[`& ~ ${SelectLabel}`]:{top:"-0.3125rem",left:"0.5625rem",padding:"0 0.25rem",fontSize:(0,themeGet.U)("fontSizes.0")}}}}),inputVariants=(0,index_esm.bU)({variants:{boxed:{borderRadius:(0,themeGet.U)("radii.2"),border:`0.0625rem solid ${(0,cssVariables.wp)("border-neutral-default")}`,"&:active:not(:disabled), &:focus:not(:disabled)":{borderColor:(0,cssVariables.wp)("border-focus"),boxShadow:`inset 0 0 0 0.0625rem ${(0,cssVariables.wp)("border-focus")}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,themeGet.U)("radii.1"),borderTopRightRadius:(0,themeGet.U)("radii.1"),borderBottom:`0.0625rem solid ${(0,cssVariables.wp)("border-neutral-default")}`,"&:active:not(:disabled), &:focus:not(:disabled)":{borderColor:(0,cssVariables.wp)("border-focus"),boxShadow:`inset 0 -0.0625rem 0 0 ${(0,cssVariables.wp)("border-focus")}`}}}}),disabledStyles=styled_components_browser_esm.iv`
    color: ${(0,cssVariables.wp)("foreground-disabled")};
    cursor: not-allowed;
    border-color: ${(0,cssVariables.wp)("border-disabled")};

    & ~ ${SelectLabel} {
        color: ${(0,cssVariables.wp)("foreground-disabled")};
    }

    & ~ .svg-icon svg > * {
        fill: ${(0,cssVariables.wp)("foreground-disabled")};
    }
`,SelectInput=styled_components_browser_esm.ZP.select.attrs({theme:theme.r})`
    margin: 0;
    box-sizing: border-box;
    background: ${(0,cssVariables.wp)("background-page-default")};
    border-radius: 0;
    color: ${(0,cssVariables.wp)("foreground-primary")};
    font-size: ${(0,themeGet.U)("fontSizes.2")};
    font-family: ${(0,themeGet.U)("fonts.normal")};
    transition: box-shadow ${100}ms, border ${100}ms;
    outline: none;
    appearance: none;
    width: 100%;
    padding-right: 2rem;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;

    & ~ .svg-icon svg > * {
        fill: ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
    }

    ${p=>{switch(p.variant){case"boxed":return(0,index_esm.qC)(boxedSizeVariants,inputVariants)(p);case"bottom-lined":return(0,index_esm.qC)(bottomLinedSizeVariants,inputVariants)(p);default:return}}}
    ${({error,variant:variantProp})=>{if(error)return styled_components_browser_esm.iv`
            border-color: ${(0,cssVariables.wp)("border-danger-default")};
            box-shadow: ${"boxed"===variantProp?`inset 0 0 0 0.0625rem ${(0,cssVariables.wp)("border-danger-default")}`:`inset 0 -0.0625rem 0 0 ${(0,cssVariables.wp)("border-danger-default")}`};

            & ~ ${SelectLabel} {
                color: ${(0,cssVariables.wp)("foreground-danger-emphasized")};
            }
        `}}
    ${p=>p.disabled?disabledStyles:void 0}
    &:-moz-focusring {
        outline: none;
        text-shadow: 0 0 0 ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
        transition: background-color 99999999ms ease 99999999ms;
    }

    &:active:not(:disabled),
    &:focus:not(:disabled) {
        & ~ ${SelectLabel} {
            color: ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
        }

        & ~ .svg-icon svg > * {
            fill: ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
        }
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectWrapper=styled_components_browser_esm.ZP.div.attrs({theme:theme.r})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.qC)(index_esm.e6,index_esm.bf)}
`,IconNode=styled_components_browser_esm.ZP.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    pointer-events: none;
    right: 0.5rem;
    top: 0;
`,Select=({variant="boxed",size="medium",...props})=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.c2)(withoutClassName),{widthProps,restProps}=(0,extractProps.Jy)(withoutMargin),{label,children,placeholder,...rest}=restProps,id=(0,useGeneratedId.I)(props.id);return(0,jsx_runtime.jsxs)(SelectWrapper,{...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsxs)(SelectInput,{variant,size,...rest,id,children:[placeholder?(0,jsx_runtime.jsx)("option",{value:"",children:placeholder}):void 0,children]}),(0,jsx_runtime.jsx)(IconNode,{className:"svg-icon",children:(0,jsx_runtime.jsx)(ChevronDownIcon.Z,{})}),label&&(0,jsx_runtime.jsx)(SelectLabel,{htmlFor:id,children:label})]})};Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"Set the label for the select input",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Set a placeholder for the select component, allowing users to remove their selection",name:"placeholder",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"boxed"},description:"Define the display variant with boxed as the default",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}},error:{defaultValue:null,description:"Indicate that the input contains an error",name:"error",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Set the size of the input with medium as the default",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}const Select_stories={title:"Form Elements/Select",component:Select,argTypes:{children:{description:"The options to be displayed in the select",control:!1},size:{options:["medium","small"],control:"radio"},variant:{options:["boxed","bottom-lined"],control:"radio"}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("option",{children:"Scooter"}),(0,jsx_runtime.jsx)("option",{children:"Ride (PHV)"}),(0,jsx_runtime.jsx)("option",{children:"Taxi"})]})}},Default={},WithLabel={args:{label:"Transportation"}},WithPlaceholder={args:{placeholder:"Select a transportation",label:"Transportation"}},BottomLined={args:{variant:"bottom-lined"}},WithError={args:{error:!0}},Small={args:{size:"small"}},Disabled={args:{disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Transportation'\n  }\n}",...WithLabel.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Select a transportation',\n    label: 'Transportation'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},BottomLined.parameters={...BottomLined.parameters,docs:{...BottomLined.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'bottom-lined'\n  }\n}",...BottomLined.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","WithPlaceholder","BottomLined","WithError","Small","Disabled"]},"./src/essentials/Breakpoints/Breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Breakpoints,z:()=>MediaQueries});const Breakpoints=["30rem","48rem","62rem","75rem"];Breakpoints.small=Breakpoints[0],Breakpoints.medium=Breakpoints[1],Breakpoints.large=Breakpoints[2],Breakpoints.xlarge=Breakpoints[3];const MediaQueries={small:`@media screen and (min-width: ${Breakpoints[0]})`,medium:`@media screen and (min-width: ${Breakpoints[1]})`,large:`@media screen and (min-width: ${Breakpoints[2]})`,xlarge:`@media screen and (min-width: ${Breakpoints[3]})`}},"./src/essentials/Spaces/Spaces.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c0:()=>Spaces});const Spaces=(size=11,Array.from({length:size},((_,i)=>.5*i+"rem")));var size},"./src/essentials/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>theme});var _Spaces_Spaces__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.u,fontSizes:["0.75rem","0.875rem","1rem","1.25rem","1.5rem","2rem","2.5rem","3rem"],fontWeights:{normal:400,semibold:600,bold:700},fonts:{normal:fontStack(["Open Sans","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_Breakpoints_Breakpoints__WEBPACK_IMPORTED_MODULE_0__.z,space:_Spaces_Spaces__WEBPACK_IMPORTED_MODULE_1__.c0,radii:["0rem","0.125rem","0.25rem","0.5rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"}};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/icons/arrows/ChevronDownIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChevronDownIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 13.726l7-6.175v2.676l-7 6.222-7-6.222V7.55z",fill:"currentColor",fillRule:"nonzero"})})};ChevronDownIcon.displayName="ChevronDownIcon";const __WEBPACK_DEFAULT_EXPORT__=ChevronDownIcon;try{ChevronDownIcon.displayName="ChevronDownIcon",ChevronDownIcon.__docgenInfo={description:"",displayName:"ChevronDownIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/arrows/ChevronDownIcon.tsx#ChevronDownIcon"]={docgenInfo:ChevronDownIcon.__docgenInfo,name:"ChevronDownIcon",path:"src/icons/arrows/ChevronDownIcon.tsx#ChevronDownIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useGeneratedId=id=>{const generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return id||generatedId}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-Select-docs-Select-stories.6f73541d.iframe.bundle.js.map