import{j as e}from"./jsx-runtime-DztICxWZ.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-DUj5J_J4.js";import{a as I}from"./use-component-style-DHLtMqa5.js";import{o as T}from"./theme-provider-DsbwOWxu.js";import{r as P}from"./index-Bv9Y92EF.js";import{P as y}from"./popover-anchor-Bv5btA1S.js";import{a as S}from"./popover-trigger-T6UAq76Q.js";import{f as v}from"./forward-ref-DH6f5tnY.js";import{b as d,h as R,c as w}from"./factory-7Z88KRtK.js";import{M as E}from"./menu-separator-AKY__xG5.js";import{C as L}from"./center-D6SfTFGO.js";import{T as N}from"./text-KN7rBBtq.js";import"./index-CQqf5rDh.js";import"./index-BdmKGyZV.js";import"./index-BhIdR6KT.js";import"./index-CHX88LJr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";import"./slide-fade-CwK7Wr_w.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./scale-fade-D309oxZP.js";import"./index-M_HQDTPf.js";import"./index-YFprnXPi.js";import"./index-BimsXrcc.js";import"./index-B_yC7JIW.js";const a=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};a.__ui__="ContextMenu";const p=v(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(d.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(S,{children:e.jsx(d.div,{ref:i,className:w("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:R(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:a,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(a,{children:[e.jsx(p,{as:L,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(N,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(E,{}),e.jsx(t,{disabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var c,x,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} borderStyle="dashed" borderWidth="1px" h="xs" p="md" rounded="md" w="full">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuSeparator />
        <MenuItem disabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(l=(x=o.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};const Me=["basic"];export{Me as __namedExportsOrder,o as basic,le as default};
