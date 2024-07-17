import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-CzsLn-GE.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-DU3o-9hY.js";import{a as b}from"./popover-content-C4uPGN-A.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-CtEVzbYf.js";import{M as P}from"./menu-divider-dJl2LMEk.js";import{C as R}from"./center-Dj7-DfXn.js";import{T as _}from"./text-Qrm_BZjp.js";import"./index-DsEil29M.js";import"./index-CFefAklC.js";import"./use-component-style-D3qgkwVB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DwNsBv-g.js";import"./index-CXXWvYyT.js";import"./index-DvH-Nylt.js";import"./index-B5DGAwAw.js";import"./index-Du0-7Fls.js";import"./index-CcUROoY5.js";import"./index-DgakmGlb.js";import"./index-DMsqADb0.js";import"./index-TPq6y0l-.js";import"./motion-rfajLyyA.js";import"./slide-fade-Dcqnl061.js";import"./index-Bv1g3FT6.js";import"./motion-CBb6JxAi.js";import"./utils-CaOb0Y6o.js";import"./scale-fade-DxAuCaG3.js";import"./close-button-DYxOQGvW.js";import"./use-ripple-TwsMOega.js";import"./icon-DBsGF4uC.js";import"./index-DXbYvzpO.js";import"./extends-CF3RwP-h.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
