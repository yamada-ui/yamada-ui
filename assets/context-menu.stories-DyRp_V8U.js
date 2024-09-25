import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-DphhF_vE.js";import{a as I}from"./use-component-style-EAJDzyrD.js";import{o as y}from"./theme-provider-BxuddooS.js";import{r as P}from"./index-BwDkhjyp.js";import{P as T}from"./popover-anchor-JN-H_kSC.js";import{a as v}from"./popover-content-C6GkyTo6.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as p,c as _,h as S}from"./factory-BFmlPmGv.js";import{M as D}from"./menu-divider-7Ib2r_xJ.js";import{C as w}from"./center-CuL2e1c7.js";import{T as E}from"./text-Cd4dmvuW.js";import"./index-LwUC2h1G.js";import"./index-CQq5lcce.js";import"./index-C3wYSRXL.js";import"./index-BpW-axNd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dd5uuyt0.js";import"./index-Du0-7Fls.js";import"./index-DP8J_kCj.js";import"./index-ry0nKyvs.js";import"./index-DKKPGyTW.js";import"./index-Bxk_4mh7.js";import"./close-button-C2kve5KL.js";import"./use-ripple-BKCJ_73z.js";import"./factory-DrzA6EUf.js";import"./motion-I-9Hg3gW.js";import"./icon-C9JvswpF.js";import"./use-var-5W_PKLe2.js";import"./slide-fade-fVtXuNem.js";import"./forward-ref-scR1bmHx.js";import"./utils-BIUxPJ-K.js";import"./scale-fade-DU3hSrG9.js";const c=n=>{const[s,r]=I("ContextMenu",n),{...i}=y(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({children:n,className:s,...r},i)=>{const{styles:x}=g(),[l,M]=P.useState({top:0,left:0}),h={...x.container},C=m=>{M({top:m.pageY,left:m.pageX})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(p.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(v,{children:e.jsx(p.div,{ref:i,className:_("ui-context-menu",s),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:n})})]})}),xe={title:"Components / Overlay / ContextMenu",component:c},o=()=>e.jsxs(c,{children:[e.jsx(L,{as:w,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var a,u,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
