import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-CSqUq80c.js";import{a as I}from"./use-component-style-DQLsgxr3.js";import{o as P}from"./theme-provider-BQjm75QN.js";import{r as T}from"./index-BwDkhjyp.js";import{P as v}from"./popover-anchor-CC86r8Lm.js";import{a as y}from"./popover-trigger-BG4L6yxJ.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as a,c as _,h as S}from"./factory-DkiAY2ad.js";import{M as D}from"./menu-divider-Yajqz370.js";import{C as w}from"./center-DPjSmKkM.js";import{T as E}from"./text-DbAxj1fm.js";import"./index-j2RJanVS.js";import"./index-Dxg_d1YV.js";import"./index-D5PbvzVk.js";import"./index-DqrMJzUo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-button-S9JnJiPG.js";import"./use-ripple-VNo1fv7Z.js";import"./factory-DmXgzuxm.js";import"./motion-I-9Hg3gW.js";import"./icon-A2vzomTu.js";import"./use-var-D2w0wtCZ.js";import"./slide-fade-CnsnDKIz.js";import"./index-BNB2iawI.js";import"./index-CBVM-6nn.js";import"./forward-ref-scR1bmHx.js";import"./utils-D_IeXbRL.js";import"./scale-fade-Z3XgoJqG.js";import"./index-ENHdSey1.js";import"./index-CoJrGj-T.js";import"./index-5kaz-yy1.js";import"./index-DOm9KXBB.js";const x=n=>{const[s,r]=I("ContextMenu",n),{...i}=P(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({className:n,children:s,...r},i)=>{const{styles:m}=g()??{},[l,M]=T.useState({left:0,top:0}),h={...m==null?void 0:m.container},C=p=>{M({left:p.pageX,top:p.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(a.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(y,{children:e.jsx(a.div,{ref:i,className:_("ui-context-menu",n),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:s})})]})}),xe={component:x,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(x,{children:[e.jsx(L,{as:w,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
