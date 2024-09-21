import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-A5VJ3bdQ.js";import{a as I}from"./use-component-style-D0DGb12b.js";import{o as y}from"./theme-provider-Bw55Thfs.js";import{r as P}from"./index-BwDkhjyp.js";import{P as T}from"./popover-anchor-b7-KCCmW.js";import{a as v}from"./popover-content-CO9sBZWa.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as p,c as _,h as S}from"./factory-DfCPDZht.js";import{M as D}from"./menu-divider-DiHhPB75.js";import{C as w}from"./center-B5cF8U0h.js";import{T as E}from"./text-C4kk1pFE.js";import"./index-B235ufy_.js";import"./index-Bq6qUkKi.js";import"./index-DX1ItL2L.js";import"./index-DOxJEiv6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CDD3fqZH.js";import"./index-Du0-7Fls.js";import"./index-Csem3--1.js";import"./index-D5XgxADb.js";import"./index-CSr6K2qe.js";import"./index-uXUPlb6Y.js";import"./close-button-nW1Gs_LT.js";import"./use-ripple-C-c72TCS.js";import"./factory-B9-LT_yD.js";import"./motion-I-9Hg3gW.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./slide-fade-BgUViYAp.js";import"./forward-ref-scR1bmHx.js";import"./utils-bRj90FBN.js";import"./scale-fade-DE9-Gd5d.js";const c=n=>{const[s,r]=I("ContextMenu",n),{...i}=y(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({children:n,className:s,...r},i)=>{const{styles:x}=g(),[l,M]=P.useState({top:0,left:0}),h={...x.container},C=m=>{M({top:m.pageY,left:m.pageX})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(p.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(v,{children:e.jsx(p.div,{ref:i,className:_("ui-context-menu",s),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:n})})]})}),xe={title:"Components / Overlay / ContextMenu",component:c},o=()=>e.jsxs(c,{children:[e.jsx(L,{as:w,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const le=["basic"];export{le as __namedExportsOrder,o as basic,xe as default};
