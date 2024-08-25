import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-Dgbsekxv.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-DGK5AVwC.js";import{a as b}from"./popover-content-BOclz9bm.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-EKX9DfWO.js";import{M as P}from"./menu-divider-q1byi4a1.js";import{C as R}from"./center-B5v8_KuH.js";import{T as _}from"./text-COyfleYz.js";import"./index-DzGRWxgB.js";import"./index-BicLiV9m.js";import"./use-component-style-3J6UAnbr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-CuwCkym_.js";import"./index-CG4JKEVD.js";import"./index-ByUNUozh.js";import"./index-BLx-LETd.js";import"./index-Du0-7Fls.js";import"./index-CMAEynL2.js";import"./index-XLuwk0SB.js";import"./index-4Gt8jg-E.js";import"./index-Dj6MDi8M.js";import"./motion-B_4DOUn5.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-BMyyzG7L.js";import"./index-Ms_xn5rh.js";import"./utils-Bqd04Qt3.js";import"./scale-fade-C2yiJ92K.js";import"./close-button-HuZkQ3Ew.js";import"./use-ripple-B2dghNjE.js";import"./icon-Bu5zyKtF.js";import"./index-UQAO-kLr.js";import"./extends-CF3RwP-h.js";const D=T(({children:u,className:d,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",d),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:u})})]})}),ue={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const de=["basic"];export{de as __namedExportsOrder,r as basic,ue as default};
