import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-B9Z3H_dn.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-BBTCnmyq.js";import{a as b}from"./popover-content-ClRYcrsN.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-CJEIqePD.js";import{M as P}from"./menu-divider-BbixlXiE.js";import{C as R}from"./center-BDZR8xcV.js";import{T as _}from"./text-CYMgUvo8.js";import"./index-Djgm-JrL.js";import"./index-6iPGEe4i.js";import"./use-component-style-p12qS94K.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-BmJ-9UWz.js";import"./index-bDxk9gk2.js";import"./index-CwsNPHBe.js";import"./index-8NJL_rSX.js";import"./index-Du0-7Fls.js";import"./index-CSwBjuih.js";import"./index-Dg-m_leh.js";import"./index-DAi4bgxS.js";import"./index-mdpvRLjT.js";import"./motion-C535EKyX.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-BMCVwM0D.js";import"./index-Ms_xn5rh.js";import"./utils-C0ha9mnk.js";import"./scale-fade-BIJ1WRrF.js";import"./close-button-1ErNEcA0.js";import"./use-ripple-CiehlBDG.js";import"./icon-D5_Yzct7.js";import"./index-f0vfX_rP.js";import"./extends-CF3RwP-h.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
