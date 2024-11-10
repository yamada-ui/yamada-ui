import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-DTSiS2Z2.js";import{a as I}from"./use-component-style-CLSKeq_H.js";import{o as T}from"./theme-provider-CNI9L2WW.js";import{r as P}from"./index-ClcD9ViR.js";import{P as v}from"./popover-anchor-Gf6YB8UT.js";import{a as y}from"./popover-trigger-D8n20qZW.js";import{f as R}from"./forward-ref-D13m8o2p.js";import{b as d,c as S,h as D}from"./factory-COau3w21.js";import{M as w}from"./menu-divider-Cl7DeoUo.js";import{C as E}from"./center-CSG2P-cD.js";import{T as L}from"./text-BnztNdZ-.js";import"./index-BcE809qD.js";import"./index-C58se0b8.js";import"./index-qyuJ8aiN.js";import"./index-Btt-sfjQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-EOT3XTCt.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./slide-fade-CGUrMJaL.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./scale-fade-CFljfXl2.js";import"./index-a5RVC8cz.js";import"./index-gGKStiao.js";import"./index-Bt_V34Vb.js";import"./index-CYDuQAfY.js";const u=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};u.__ui__="ContextMenu";const p=R(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=a=>{h({left:a.pageX,top:a.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(d.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(y,{children:e.jsx(d.div,{ref:i,className:S("ui-context-menu",n),__css:C,...r,onContextMenu:D(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:u,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(u,{children:[e.jsx(p,{as:E,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(L,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(w,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var c,x,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
