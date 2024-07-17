import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{e as f,C as a,c as j,d as t}from"./menu-list-Y8U1ggh-.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-C-KQUN2T.js";import{a as b}from"./popover-content-ClZmgLXr.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-C350H5ew.js";import{M as P}from"./menu-divider-h5sRZ3Dl.js";import{C as R}from"./center-BBcBgq3f.js";import{T as _}from"./text-Bvuw3AK1.js";import"./index-C9F83HR8.js";import"./index-CHFb4Jhb.js";import"./use-component-style-Deru9ana.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-Dk_cT8DX.js";import"./index-rjSTK-zs.js";import"./index-BREjiUHm.js";import"./index-DZzfrAcX.js";import"./index-Du0-7Fls.js";import"./index-Cod11mn8.js";import"./index-Cpv9R6F3.js";import"./index-CxRVbt0J.js";import"./index-3wegYoUk.js";import"./motion-KSTl0G6b.js";import"./slide-fade-Bf7jHMOe.js";import"./index-C9ZzZzxO.js";import"./motion-CsCega8z.js";import"./utils-7gRvAdQz.js";import"./scale-fade-DHiLHvXz.js";import"./close-button-BbFY_ZWE.js";import"./use-ripple-7ZdFmUrk.js";import"./icon-DNjxCNYA.js";import"./index-CE9KK7vS.js";import"./extends-CF3RwP-h.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),de={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ue=["basic"];export{ue as __namedExportsOrder,r as basic,de as default};
