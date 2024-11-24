import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-ylGxVygp.js";import{a as I}from"./use-component-style-BGLOU3Ga.js";import{o as T}from"./theme-provider-DMHFYkuw.js";import{r as P}from"./index-ClcD9ViR.js";import{P as v}from"./popover-anchor-D2mOiM_4.js";import{a as y}from"./popover-trigger-CbTrSW4y.js";import{f as R}from"./forward-ref-D13m8o2p.js";import{b as d,c as S,h as D}from"./factory-Cp1Ju9mN.js";import{M as w}from"./menu-divider-C7TibB2f.js";import{C as E}from"./center-DltdbFpm.js";import{T as L}from"./text-CIX2g0cs.js";import"./index-DeQ1wXyQ.js";import"./index-Zd4KnGXX.js";import"./index-C2FBWOq2.js";import"./index-5lzM9kKl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-KaaR9e9n.js";import"./use-ripple-SSdhQaN8.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";import"./slide-fade-Sj6o3YZF.js";import"./index-BoHnpcSs.js";import"./index-DM7U-nMi.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CehLRonx.js";import"./scale-fade-BQQzZXA1.js";import"./index-CilJ2bIs.js";import"./index-gGKStiao.js";import"./index-BDaUJiBA.js";import"./index-BMJcaCPC.js";const p=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};p.__ui__="ContextMenu";const a=R(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(d.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(y,{children:e.jsx(d.div,{ref:i,className:S("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:D(r.onContextMenu,g),children:s})})]})});a.displayName="ContextMenuTrigger";a.__ui__="ContextMenuTrigger";const le={component:p,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(p,{children:[e.jsx(a,{as:E,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(L,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(w,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var c,x,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} borderStyle="dashed" borderWidth="1px" h="xs" p="md" rounded="md" w="full">
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
}`,...(l=(x=o.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};const Me=["basic"];export{Me as __namedExportsOrder,o as basic,le as default};
