import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-DzEEYjka.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-P3k0vOp-.js";import{a as b}from"./popover-content-C1IOqW15.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-DijdQyQR.js";import{M as P}from"./menu-divider-BxmwxH4s.js";import{C as R}from"./center-De1GofLT.js";import{T as _}from"./text-CfdUdekK.js";import"./index-DeoZDXV1.js";import"./index-B23F1OXS.js";import"./use-component-style-Bw-pmo7H.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-Bovkq8wz.js";import"./index-CdDwrvH_.js";import"./index-X_aUob-6.js";import"./index-CTeq9mcv.js";import"./index-Du0-7Fls.js";import"./index-BV6k24Yv.js";import"./index-C59CIZzU.js";import"./index-Mcu5Re2E.js";import"./index-9ArwFQOE.js";import"./motion-CN2SKHl7.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-BjOSbOh_.js";import"./index-Ms_xn5rh.js";import"./utils-C-zg61Ho.js";import"./scale-fade-qVjAu9AG.js";import"./close-button-B2BQ0zaH.js";import"./use-ripple-BJsxvLIA.js";import"./icon-BK_bL1Yg.js";import"./index-CBA1NDKY.js";import"./extends-CF3RwP-h.js";const D=T(({children:u,className:d,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",d),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:u})})]})}),ue={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
