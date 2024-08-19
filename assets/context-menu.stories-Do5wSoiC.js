import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-BUbWydtW.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-DkvPWCv4.js";import{a as b}from"./popover-content-BbJHS-2P.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-BfeSrOMR.js";import{M as P}from"./menu-divider-rrs7NbtF.js";import{C as R}from"./center-DMD5Vy7Z.js";import{T as _}from"./text-kxnfO7oo.js";import"./index-2mAcA_nR.js";import"./index-DDqdCI4L.js";import"./use-component-style-DcixVaSS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-Dn5H8djQ.js";import"./index-BivH-LY6.js";import"./index-DUtQEatp.js";import"./index-DUDDT8pq.js";import"./index-Du0-7Fls.js";import"./index-De8xoJ_A.js";import"./index-Bk2cbsS7.js";import"./index-BdzFmMCz.js";import"./index-dtMAA0GD.js";import"./motion-DC3xxboT.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-UiZb05wN.js";import"./index-Ms_xn5rh.js";import"./utils-BNkjGfg5.js";import"./scale-fade-DMK_7zEH.js";import"./close-button-BHfJDSTC.js";import"./use-ripple-DDagHHie.js";import"./icon-XC0we3t2.js";import"./index-CeW_W80V.js";import"./extends-CF3RwP-h.js";const D=T(({children:u,className:d,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",d),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:u})})]})}),ue={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
