import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-CfbitsdA.js";import{a as I}from"./use-component-style-DXYrx7jC.js";import{o as T}from"./theme-provider-BsBO7Bt7.js";import{r as P}from"./index-ClcD9ViR.js";import{P as y}from"./popover-anchor-DWxIN_Ci.js";import{a as S}from"./popover-trigger-VZ6-C5a8.js";import{f as v}from"./forward-ref-D13m8o2p.js";import{b as c,c as R,h as w}from"./factory-Nur_zO5a.js";import{M as E}from"./menu-separator-D_3fZjov.js";import{C as L}from"./center-DbI1M6cv.js";import{T as N}from"./text-62Futka0.js";import"./index-B1nZG4Mb.js";import"./index-Ci6jtn_l.js";import"./index-DdZUI5bP.js";import"./index-hBuKIhm7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-C7oui4wX.js";import"./icon-M07mMfJs.js";import"./use-var-BmU0CMcq.js";import"./slide-fade-Cmuj6chS.js";import"./index-CpbJQdhj.js";import"./index-0izHGgc0.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Le3SFznY.js";import"./scale-fade-DZMuid-q.js";import"./index-X5oM7jx7.js";import"./index-gGKStiao.js";import"./index-DmyN1gVE.js";import"./index-CBbxfOTw.js";const a=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};a.__ui__="ContextMenu";const p=v(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(c.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(S,{children:e.jsx(c.div,{ref:i,className:R("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:w(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:a,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(a,{children:[e.jsx(p,{as:L,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(N,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(E,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var d,x,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
