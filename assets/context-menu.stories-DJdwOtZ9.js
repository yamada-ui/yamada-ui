import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-DjIR53X5.js";import{a as I}from"./use-component-style-DhRiPQIp.js";import{o as P}from"./theme-provider-Cr3m0r8P.js";import{r as T}from"./index-BwDkhjyp.js";import{P as v}from"./popover-anchor-DM9PaPnk.js";import{a as y}from"./popover-trigger-C4B9Wa4t.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as a,c as _,h as S}from"./factory-DBrfn43w.js";import{M as D}from"./menu-divider-BtdlqABs.js";import{C as w}from"./center-DkfaJL4L.js";import{T as E}from"./text-LaTineB_.js";import"./index-Dbjktjet.js";import"./index-BD-dMYlD.js";import"./index-C9q_kkfb.js";import"./index-ByFQ-olM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-button-BDLDbh2v.js";import"./use-ripple-C_jFl7Io.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-CWrzRNZL.js";import"./icon-CVPWgGuL.js";import"./use-var-DcJHaFAf.js";import"./slide-fade-DV-SS8EA.js";import"./index-BukEwq1c.js";import"./index-C_z-NEqe.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bot02Mqw.js";import"./scale-fade-CARss9Lv.js";import"./index-DX5CNJFl.js";import"./index-CoJrGj-T.js";import"./index-Ds_xHjLF.js";import"./index-pFyedNCb.js";const x=n=>{const[s,r]=I("ContextMenu",n),{...i}=P(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({className:n,children:s,...r},i)=>{const{styles:m}=g()??{},[l,M]=T.useState({left:0,top:0}),h={...m==null?void 0:m.container},C=p=>{M({left:p.pageX,top:p.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(a.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(y,{children:e.jsx(a.div,{ref:i,className:_("ui-context-menu",n),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:s})})]})}),le={component:x,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(x,{children:[e.jsx(L,{as:w,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Me=["basic"];export{Me as __namedExportsOrder,o as basic,le as default};
