import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{e as f,C as a,c as j,d as t}from"./menu-list-CK2Qzf-J.js";import{r as g}from"./index-uCp2LrAq.js";import{P as I}from"./popover-anchor-DCxHDFx3.js";import{a as b}from"./popover-content-HNceUCzk.js";import{f as T}from"./forward-ref-Dr5Hqd9a.js";import{b as s,c as y,h as v}from"./factory-eGqOwxJN.js";import{M as P}from"./menu-divider-BW1PZGJF.js";import{C as R}from"./center-BSOfo3xR.js";import{T as _}from"./text-RJq6WCVA.js";import"./index-CyJdPjCP.js";import"./index-1abRQEVN.js";import"./use-component-style-DAcjH3Cb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DBZuijdl.js";import"./index-BPIwBPQe.js";import"./index-Bxd2-ejE.js";import"./index-BRfWrp5h.js";import"./index-CBqzus2r.js";import"./index-5gjePty1.js";import"./index-B72Mmnz4.js";import"./index-BOin0i7A.js";import"./index-7pS6GFaA.js";import"./motion-BNFRb361.js";import"./slide-fade-2zDTdsfJ.js";import"./index-DSHhgXSs.js";import"./motion-D9P5qI5Q.js";import"./utils-BvetsyWM.js";import"./scale-fade-D5z6P0Jx.js";import"./close-button-BMtw8-jq.js";import"./use-ripple-BL9M4SmM.js";import"./icon-C4f_KbJN.js";import"./index-BAZmNyaF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
