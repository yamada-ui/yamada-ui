import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{e as f,C as a,c as j,d as t}from"./menu-list-Cfn_Mfu4.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-B151JQP6.js";import{a as b}from"./popover-content-BDOAG20m.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-BrsV2ztw.js";import{M as P}from"./menu-divider-DUXNmDqY.js";import{C as R}from"./center-to5s3gGQ.js";import{T as _}from"./text-C4dJ5VQY.js";import"./index-UjJCRxfq.js";import"./index-Dl3F70TH.js";import"./use-component-style-C-MS2_vZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-CVIzrPws.js";import"./index-CrebD9Bq.js";import"./index-B2vO1LbL.js";import"./index--S0_9aMB.js";import"./index-Du0-7Fls.js";import"./index-Cn7Z-Ezf.js";import"./index-CqubQ1zG.js";import"./index-E9zP2zCA.js";import"./index-DoAPKQED.js";import"./motion-Bf7Eu1FP.js";import"./slide-fade-CLd55t_3.js";import"./index-OrIPcL7r.js";import"./motion-DxSQdyy8.js";import"./utils-BHii_Be-.js";import"./scale-fade-DAC_jzkb.js";import"./close-button-B9eraFvh.js";import"./use-ripple-D3kHZFSu.js";import"./icon-bEgKfv7t.js";import"./index-CxO4lLi3.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),ae={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const de=["basic"];export{de as __namedExportsOrder,r as basic,ae as default};
