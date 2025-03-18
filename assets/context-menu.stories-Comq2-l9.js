import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{C as f,b as j,e as _,c as b,d as t}from"./menu-list-BWmTIbff.js";import{a as I}from"./use-component-style-CpB_lyT3.js";import{o as T}from"./theme-provider-ChqdwXGn.js";import{r as P}from"./index-BwPxMuoB.js";import{P as y}from"./popover-anchor-BLZILaI3.js";import{a as S}from"./popover-trigger-Ddfu3ZQC.js";import{f as v}from"./forward-ref-Ukjd1cIW.js";import{b as d,h as R,c as w}from"./factory-DbNU74ts.js";import{M as E}from"./menu-separator-MhL1zSUG.js";import{C as L}from"./center-B3pLLn64.js";import{T as N}from"./text-DKjBQKmK.js";import"./index-B2an25P7.js";import"./index-BEog8ndP.js";import"./index-ZCRYeFYt.js";import"./index-Blkmx9LM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./slide-fade-1DMcLXoE.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-MIa0NvBw.js";import"./index-qZwaV1-B.js";import"./index-tzU5ipaZ.js";import"./index-ZLyktLk6.js";const a=n=>{const[s,r]=I("ContextMenu",n),{...i}=T(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})};a.__ui__="ContextMenu";const p=v(({className:n,children:s,...r},i)=>{const{styles:m}=_()??{},[M,h]=P.useState({left:0,top:0}),C={...m==null?void 0:m.container},g=u=>{h({left:u.pageX,top:u.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(d.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...M}})}),e.jsx(S,{children:e.jsx(d.div,{ref:i,className:w("ui-context-menu",n),"aria-haspopup":"menu",role:"application",__css:C,...r,onContextMenu:R(r.onContextMenu,g),children:s})})]})});p.displayName="ContextMenuTrigger";p.__ui__="ContextMenuTrigger";const le={component:a,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(a,{children:[e.jsx(p,{as:L,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(N,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(E,{}),e.jsx(t,{disabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var c,x,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
