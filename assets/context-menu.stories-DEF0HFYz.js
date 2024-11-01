import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-Dhzj9tck.js";import{a as I}from"./use-component-style-Givb0biW.js";import{o as T}from"./theme-provider-B8NHi_rL.js";import{r as P}from"./index-BwDkhjyp.js";import{P as v}from"./popover-anchor-BTFe9oTq.js";import{a as y}from"./popover-trigger-DqVaQlWy.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as d,c as S,h as D}from"./factory-CBW6YcbY.js";import{M as w}from"./menu-divider-DZh-NFOH.js";import{C as E}from"./center-CfmrFwEl.js";import{T as L}from"./text-DSnzXlBX.js";import"./index-D7MGIgCi.js";import"./index-BEwlKK2P.js";import"./index-qHjnnOt4.js";import"./index-BOsfR7XW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-button-C6-nxxOU.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./icon-CQ7oKYSm.js";import"./use-var-BcRMoVLh.js";import"./slide-fade-BtzrfF3F.js";import"./index-ZFP3ngUa.js";import"./index-DP81e-8u.js";import"./forward-ref-scR1bmHx.js";import"./utils-CC31eNL0.js";import"./scale-fade-ChN5nit0.js";import"./index-Du-PXOJx.js";import"./index-CoJrGj-T.js";import"./index-Cyo00D5l.js";import"./index-B1KvLq6v.js";const u=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};u.__ui__="ContextMenu";const p=R(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=a=>{h({left:a.pageX,top:a.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(d.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(y,{children:e.jsx(d.div,{ref:i,className:S("ui-context-menu",n),__css:C,...r,onContextMenu:D(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:u,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(u,{children:[e.jsx(p,{as:E,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(L,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(w,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var c,x,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
