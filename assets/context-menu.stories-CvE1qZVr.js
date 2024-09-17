import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-DRBVU5lu.js";import{a as I}from"./use-component-style-DVO-iEPi.js";import{o as y}from"./theme-provider-CpaSpGZh.js";import{r as P}from"./index-BwDkhjyp.js";import{P as T}from"./popover-anchor-D6JqPFpu.js";import{a as v}from"./popover-content-qljWb4pK.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as p,c as _,h as S}from"./factory-BjF4_dRw.js";import{M as D}from"./menu-divider-CyBrH-dF.js";import{C as w}from"./center-CgHKqMQH.js";import{T as E}from"./text-CpJ_XsDk.js";import"./index-BM_Ccg1d.js";import"./index-BjUO4q1E.js";import"./index-DA9-26wc.js";import"./index-Dy1RW4Oq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-is6smmpS.js";import"./index-Du0-7Fls.js";import"./index-C53kKj3W.js";import"./index-DroqNDDt.js";import"./index-D-jN3opM.js";import"./index-BxBWkPyk.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./factory-COh1-7fC.js";import"./motion-I-9Hg3gW.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./slide-fade-Deo3lGhM.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";const d=n=>{const[s,r]=I("ContextMenu",n),{...i}=y(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({children:n,className:s,...r},i)=>{const{styles:x}=g(),[l,M]=P.useState({top:0,left:0}),h={...x.container},C=m=>{M({top:m.clientY,left:m.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(p.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(v,{children:e.jsx(p.div,{ref:i,className:_("ui-context-menu",s),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:n})})]})}),xe={title:"Components / Overlay / ContextMenu",component:d},o=()=>e.jsxs(d,{children:[e.jsx(L,{as:w,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var u,a,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const le=["basic"];export{le as __namedExportsOrder,o as basic,xe as default};
