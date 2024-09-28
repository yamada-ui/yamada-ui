import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-DbHx3BPD.js";import{a as I}from"./use-component-style-CfUS8Ki1.js";import{o as y}from"./theme-provider-BZKkW4ID.js";import{r as P}from"./index-BwDkhjyp.js";import{P as T}from"./popover-anchor-ALujF1lv.js";import{a as v}from"./popover-content-C9K0DE-R.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as p,c as _,h as S}from"./factory-CYpx3TMG.js";import{M as D}from"./menu-divider-BOZHiTTm.js";import{C as w}from"./center-pYBjMgrp.js";import{T as E}from"./text-DR0EVEsm.js";import"./index-CFjuI6Rx.js";import"./index-CIt0OHe7.js";import"./index-DEy_TXYI.js";import"./index-C1nnoSu4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";const c=n=>{const[s,r]=I("ContextMenu",n),{...i}=y(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({children:n,className:s,...r},i)=>{const{styles:x}=g(),[l,M]=P.useState({top:0,left:0}),h={...x.container},C=m=>{M({top:m.pageY,left:m.pageX})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(p.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(v,{children:e.jsx(p.div,{ref:i,className:_("ui-context-menu",s),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:n})})]})}),xe={title:"Components / Overlay / ContextMenu",component:c},o=()=>e.jsxs(c,{children:[e.jsx(L,{as:w,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const le=["basic"];export{le as __namedExportsOrder,o as basic,xe as default};
