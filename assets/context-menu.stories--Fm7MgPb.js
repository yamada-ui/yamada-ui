import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as f,b as j,e as _,c as I,d as t}from"./menu-list-D7bWpcDq.js";import{a as T}from"./use-component-style-DigxQCYK.js";import{o as b}from"./theme-provider-BzJf26st.js";import{r as P}from"./index-ClcD9ViR.js";import{P as v}from"./popover-anchor-DHNydIcH.js";import{a as y}from"./popover-trigger-D5Ix9XTE.js";import{f as R}from"./forward-ref-D13m8o2p.js";import{a as d,h as S,c as D}from"./factory-CsPvKZdD.js";import{M as w}from"./menu-divider-CQ5aO49Y.js";import{T as E}from"./text-CM9qqEsI.js";import{C as L}from"./center-DQ9g3-7I.js";import"./index-B5j6RQ3N.js";import"./index-Ao7Zu0I0.js";import"./index-F33a9ApW.js";import"./index-Bkx9JLGf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-DsBKj5el.js";import"./use-ripple-D3QnPsMa.js";import"./index-2WvfircW.js";import"./proxy-DwHv-pG9.js";import"./factory-CGSCAS8e.js";import"./icon-DQQopEtL.js";import"./use-var-U7aWLCqe.js";import"./slide-fade-yXDA2CMz.js";import"./index-CA44hmXO.js";import"./index-XEGGZinu.js";import"./utils-BNH5haTV.js";import"./forward-ref-2BKBy0Yi.js";import"./scale-fade-DFHqnXn5.js";import"./index-ojuFZliC.js";import"./index-gGKStiao.js";import"./index-MfhOSOV0.js";import"./index-Di2qk_cd.js";const a=n=>{const[s,r]=T("ContextMenu",n),{...i}=b(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};a.__ui__="ContextMenu";const p=R(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(d.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(y,{children:e.jsx(d.div,{ref:i,className:D("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:S(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:a,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(a,{children:[e.jsx(p,{as:L,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(I,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(w,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var c,x,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
