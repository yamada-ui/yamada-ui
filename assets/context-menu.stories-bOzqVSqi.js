import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-B8yTk-cX.js";import{a as I}from"./use-component-style-vGTU0kmU.js";import{o as P}from"./theme-provider-HQUvgn6k.js";import{r as T}from"./index-BwDkhjyp.js";import{P as v}from"./popover-anchor-CoXhdP75.js";import{a as y}from"./popover-trigger-BJsmlD02.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as a,c as _,h as S}from"./factory-BPGpAF5Z.js";import{M as D}from"./menu-divider-CU1ZsP2g.js";import{C as w}from"./center-pJ5Ag6zE.js";import{T as E}from"./text-Cf22NS09.js";import"./index-BSZzY47h.js";import"./index-DYLohKMc.js";import"./index-DMlaarLi.js";import"./index-oQ85FuiM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./close-button-TCaPA0pi.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";import"./icon-BYVaiKtb.js";import"./use-var-CHlP19MT.js";import"./slide-fade-BEHgxEuP.js";import"./index-BRqXaXJK.js";import"./index-B9JWsFAS.js";import"./forward-ref-scR1bmHx.js";import"./utils-wKEdAh9y.js";import"./scale-fade-Cv307av9.js";import"./index-CjlbPsry.js";import"./index-CoJrGj-T.js";import"./index-YIL2lgfe.js";import"./index-BN4Uieo8.js";const x=n=>{const[s,r]=I("ContextMenu",n),{...i}=P(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({className:n,children:s,...r},i)=>{const{styles:m}=g()??{},[l,M]=T.useState({left:0,top:0}),h={...m==null?void 0:m.container},C=p=>{M({left:p.pageX,top:p.pageY})};return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx(a.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(y,{children:e.jsx(a.div,{ref:i,className:_("ui-context-menu",n),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:s})})]})}),xe={component:x,title:"Components / Overlay / ContextMenu"},o=()=>e.jsxs(x,{children:[e.jsx(L,{as:w,borderStyle:"dashed",borderWidth:"1px",h:"xs",p:"md",rounded:"md",w:"full",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
