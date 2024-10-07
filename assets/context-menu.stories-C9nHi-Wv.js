import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-A8APzDVa.js";import{a as I}from"./use-component-style-_O1yHJxH.js";import{o as P}from"./theme-provider-gLqcKpHk.js";import{r as T}from"./index-BwDkhjyp.js";import{P as v}from"./popover-anchor-MXCB_VPe.js";import{a as y}from"./popover-trigger-B7hqUX_i.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as a,c as _,h as S}from"./factory-CTJ-ITwV.js";import{M as D}from"./menu-divider-DxnYv3Z3.js";import{C as w}from"./center-Be-BS5k4.js";import{T as E}from"./text-BDycaLk7.js";import"./index-NtBqJrwW.js";import"./index-Cu2YeAMN.js";import"./index-BzKTRvGl.js";import"./index-W7lu5wp_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-button-IT3vRp6I.js";import"./use-ripple-MSZSdTJh.js";import"./factory-CmtZP4aZ.js";import"./motion-I-9Hg3gW.js";import"./icon-DlOX_f12.js";import"./use-var-Cgd0M5xr.js";import"./slide-fade-BE8CIutX.js";import"./index-cjYO0JtJ.js";import"./index-DHWdzpiJ.js";import"./forward-ref-scR1bmHx.js";import"./utils-CgaDd4SB.js";import"./scale-fade-B7KN2sk_.js";import"./index-Dl4-Ephs.js";import"./index-CoJrGj-T.js";import"./index-BD59kUnL.js";import"./index-C0-OrHt9.js";const x=n=>{const[s,r]=I("ContextMenu",n),{...i}=P(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({className:n,children:s,...r},i)=>{const{styles:m}=g()??{},[l,M]=T.useState({left:0,top:0}),h={...m==null?void 0:m.container},C=p=>{M({left:p.pageX,top:p.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(a.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(y,{children:e.jsx(a.div,{ref:i,className:_("ui-context-menu",n),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:s})})]})}),xe={component:x,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(x,{children:[e.jsx(L,{as:w,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const le=["basic"];export{le as __namedExportsOrder,o as basic,xe as default};
