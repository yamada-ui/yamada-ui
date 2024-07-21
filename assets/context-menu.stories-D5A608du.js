import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-CED7mniG.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-CeHNX0cl.js";import{a as b}from"./popover-content-CMxl5HlT.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-BXeT7qA-.js";import{M as P}from"./menu-divider-Bny6XeeQ.js";import{C as R}from"./center-CBh6L0xH.js";import{T as _}from"./text-BwL1Rj_o.js";import"./index-DBCDrfEK.js";import"./index-xf8c1cao.js";import"./use-component-style-DuIjxI-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-CgekAyNK.js";import"./index-CP_iHTUG.js";import"./index-XSAGmtry.js";import"./index-BzaPwyBI.js";import"./index-Du0-7Fls.js";import"./index-XokATsxS.js";import"./index-BlhoFCHi.js";import"./index-DAakVdNs.js";import"./index-NwhEIk3k.js";import"./motion-B3m9R3Ab.js";import"./slide-fade-CFnUMHWC.js";import"./index-DFuW1CVx.js";import"./motion-DnMpPmZx.js";import"./utils-DYgquvih.js";import"./scale-fade-BUQ8hiDZ.js";import"./close-button-Dts3z-TI.js";import"./use-ripple-CX-fFskN.js";import"./icon-BjkWeIz-.js";import"./index-jt6EZpVS.js";import"./extends-CF3RwP-h.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
