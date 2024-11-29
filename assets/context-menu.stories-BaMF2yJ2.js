import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-BC2qzOgO.js";import{a as I}from"./use-component-style-fOirb5M1.js";import{o as T}from"./theme-provider-DSx3k1bh.js";import{r as P}from"./index-ClcD9ViR.js";import{P as y}from"./popover-anchor-CZOiFNRG.js";import{a as S}from"./popover-trigger-BPJZ9KgK.js";import{f as v}from"./forward-ref-D13m8o2p.js";import{b as c,c as R,h as w}from"./factory-Dfrbb1EY.js";import{M as E}from"./menu-separator-CSq8MGbi.js";import{C as L}from"./center-CU3SeQQI.js";import{T as N}from"./text-ACfjY0cR.js";import"./index-D4SEQqYY.js";import"./index-CgNA1xsw.js";import"./index-DqeO0dAp.js";import"./index-O1jdRUiZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-DENBYMYY.js";import"./use-ripple-59xURXHY.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-DeSWW4o7.js";import"./icon-DDeGQYl6.js";import"./use-var-BQS3JFPa.js";import"./slide-fade-CQuVyWIS.js";import"./index-D_3Ilmao.js";import"./index-CKnINgQh.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Crg7yCn-.js";import"./scale-fade-DtFg8nlV.js";import"./index-DYgLfGUQ.js";import"./index-gGKStiao.js";import"./index-BVP762bF.js";import"./index-CFtnIMNb.js";const a=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};a.__ui__="ContextMenu";const p=v(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(c.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(S,{children:e.jsx(c.div,{ref:i,className:R("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:w(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:a,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(a,{children:[e.jsx(p,{as:L,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(N,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(E,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var d,x,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
