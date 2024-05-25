import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{e as f,C as a,c as j,d as t}from"./menu-list-CeRjY23L.js";import{r as g}from"./index-uCp2LrAq.js";import{P as I}from"./popover-anchor-CQ8h2mK7.js";import{a as b}from"./popover-content-CxdXwkrK.js";import{f as T}from"./forward-ref-Dr5Hqd9a.js";import{u as s,c as y,h as v}from"./factory-0Lglu3Ih.js";import{M as P}from"./menu-divider-BNfEMyn4.js";import{C as R}from"./center-dMhW4i5v.js";import{T as _}from"./text-DFpeH8FJ.js";import"./index-B_e3ZNQl.js";import"./index-DvQD6E4W.js";import"./use-component-style-lFSlOadu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DZ-B-vNc.js";import"./index-BTG9Qi9Q.js";import"./index-DMX1SCQT.js";import"./index-Dplw5BOg.js";import"./index-CBqzus2r.js";import"./index-DGNsn1S3.js";import"./index-DTvybkDN.js";import"./index-CeDKSSAc.js";import"./index-PZqzr0LW.js";import"./motion-BNFRb361.js";import"./slide-fade-BBnHMo2k.js";import"./index-DSHhgXSs.js";import"./motion-Bb3QB0ep.js";import"./utils-CXnJVEQ6.js";import"./scale-fade-1yGhIX4w.js";import"./close-button-DtbIf0VU.js";import"./use-ripple-P2ONJKnm.js";import"./icon-1BAWhYZ8.js";import"./index-Cf61Aa9S.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right Click Here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} w="full" h="xs" borderWidth="1px" borderStyle="dashed" p="md" rounded="md">
        <Text>Right Click Here</Text>
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
