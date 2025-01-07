import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-BcwMNprj.js";import{a as I}from"./use-component-style-B--WxH8d.js";import{o as T}from"./theme-provider-r-UN7Xzc.js";import{r as P}from"./index-ClcD9ViR.js";import{P as y}from"./popover-anchor-DL4P_n5F.js";import{a as S}from"./popover-trigger-kCg_5LKg.js";import{f as v}from"./forward-ref-D13m8o2p.js";import{b as c,c as R,h as w}from"./factory-D0ba2aB7.js";import{M as E}from"./menu-separator-BsJO86uc.js";import{C as L}from"./center-B5IQJJLi.js";import{T as N}from"./text-BB5_0k3k.js";import"./index-rZyt8EED.js";import"./index-D0l_ls7Z.js";import"./index-I8sPqzTA.js";import"./index-BWwQf8_A.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";import"./slide-fade-B_qqM4fM.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";import"./index-D8fKLhx4.js";const a=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};a.__ui__="ContextMenu";const p=v(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(c.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(S,{children:e.jsx(c.div,{ref:i,className:R("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:w(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:a,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(a,{children:[e.jsx(p,{as:L,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(N,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(E,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var d,x,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} borderStyle="dashed" borderWidth="1px" h="xs" p="md" rounded="md" w="full">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuSeparator />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(l=(x=o.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};const Me=["basic"];export{Me as __namedExportsOrder,o as basic,le as default};
