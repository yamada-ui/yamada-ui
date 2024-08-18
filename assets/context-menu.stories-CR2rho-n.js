import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-BCC2Zdzh.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-BJyFli9E.js";import{a as b}from"./popover-content-DnjTjEbT.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-CgjGrZPJ.js";import{M as P}from"./menu-divider-DZe7MiNh.js";import{C as R}from"./center-77kfJSFL.js";import{T as _}from"./text-B8eCKR2G.js";import"./index-D-VyqXer.js";import"./index-DySjo8am.js";import"./use-component-style-_zlIvW0d.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-BCPNks98.js";import"./index-WxX-pqhE.js";import"./index-Cd6IX_K_.js";import"./index-BzpsSdLt.js";import"./index-Du0-7Fls.js";import"./index-B6uYSxSt.js";import"./index-BpBDnTPK.js";import"./index-C1TC9Ce0.js";import"./index-aHHabS-k.js";import"./motion-5o-n52Bf.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-Ze9NuX_I.js";import"./index-Ms_xn5rh.js";import"./utils-DoSSdQP8.js";import"./scale-fade-7u22erxJ.js";import"./close-button-9kZanKUK.js";import"./use-ripple-CEYIQdEf.js";import"./icon-Cj3j20La.js";import"./index-DT07_8RJ.js";import"./extends-CF3RwP-h.js";const D=T(({children:u,className:d,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",d),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:u})})]})}),ue={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const de=["basic"];export{de as __namedExportsOrder,r as basic,ue as default};
