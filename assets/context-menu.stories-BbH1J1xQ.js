import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{e as f,C as a,c as j,d as t}from"./menu-list-88gm3TbR.js";import{r as g}from"./index-uCp2LrAq.js";import{P as I}from"./popover-anchor-qfWDE5Im.js";import{a as b}from"./popover-content-BM7mCRUg.js";import{f as T}from"./forward-ref-Dr5Hqd9a.js";import{b as s,c as y,h as v}from"./factory-C0k1XOS4.js";import{M as P}from"./menu-divider-B10ZP8M0.js";import{C as R}from"./center-C0juVNGk.js";import{T as _}from"./text-BU5Lb7tM.js";import"./index-R6DR2XL8.js";import"./index-CFNUJ1Et.js";import"./use-component-style-BxdeC6kK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DuMcMORV.js";import"./index-Bjd5vJC-.js";import"./index-Bsst9ig-.js";import"./index-WSOojlyi.js";import"./index-CBqzus2r.js";import"./index-8ZwJ0hEn.js";import"./index-CVYP-ED1.js";import"./index-BAgP8BZD.js";import"./index-Dn2ukjFM.js";import"./motion-BNFRb361.js";import"./slide-fade-PDzsJBcQ.js";import"./index-DSHhgXSs.js";import"./motion-Q3KpEpwi.js";import"./utils-DiGCXze0.js";import"./scale-fade-DXq3KkLV.js";import"./close-button-DBSBi6pM.js";import"./use-ripple-Bqtteuio.js";import"./icon-DcmOu1fx.js";import"./index-CdvFIPz6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} w="full" h="xs" borderWidth="1px" borderStyle="dashed" p="md" rounded="md">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuDivider />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ue=["basic"];export{ue as __namedExportsOrder,r as basic,de as default};
