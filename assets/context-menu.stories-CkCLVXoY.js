import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-B6LGY7LC.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-B6W9FpuQ.js";import{a as b}from"./popover-content-DFdHmdvF.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-CSM9sPSx.js";import{M as P}from"./menu-divider-4k6g08OL.js";import{C as R}from"./center-CrIvuMIb.js";import{T as _}from"./text-CBdZvdFv.js";import"./index-DCuOK1Fs.js";import"./index-CvfKnqoV.js";import"./use-component-style-j75HgCyZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DvoMT5nL.js";import"./index-DCjskD-V.js";import"./index-WMSiNdqI.js";import"./index-DCtBRtRG.js";import"./index-Du0-7Fls.js";import"./index-C8fXWcF1.js";import"./index-Cr2guPtB.js";import"./index-BKYuqN1t.js";import"./index-ByQ-4Nbs.js";import"./motion-D_mik6Sq.js";import"./slide-fade-DDxrfz9y.js";import"./index-CLw4Dysw.js";import"./motion-DbFL6ada.js";import"./utils-C1onMfPn.js";import"./scale-fade-B2zoeb24.js";import"./close-button-BVdHRSIP.js";import"./use-ripple-D-GIaEzw.js";import"./icon-BiToCgiA.js";import"./index-D_rx36I2.js";import"./extends-CF3RwP-h.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
