import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{e as f,C as a,c as j,d as t}from"./menu-list-Cc4QRkeG.js";import{r as g}from"./index-BwDkhjyp.js";import{P as I}from"./popover-anchor-BOQCi2Nj.js";import{a as b}from"./popover-content-Du830PX8.js";import{f as T}from"./forward-ref-BmTAT9U5.js";import{b as s,c as y,h as v}from"./factory-DqlmaKnk.js";import{M as P}from"./menu-divider-DQrO5v-v.js";import{C as R}from"./center-4LpPij4p.js";import{T as _}from"./text-D-WKVNTg.js";import"./index-BQSFCjm-.js";import"./index-Bk4iHozM.js";import"./use-component-style-C3e1SZSW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-DKpED47L.js";import"./index-DRSk0S3C.js";import"./index-C2A1EDXj.js";import"./index-lDLsA8St.js";import"./index-Du0-7Fls.js";import"./index-CpNyzkHk.js";import"./index-CzMJJlyi.js";import"./index-D7vWbavc.js";import"./index-DvF7MMPh.js";import"./motion-Ceh1Zhyk.js";import"./slide-fade-CanhXW_J.js";import"./index-CSNxn7VS.js";import"./motion-CVEUpyyH.js";import"./utils-8zXyhOQf.js";import"./scale-fade-DukJCf2b.js";import"./close-button-Dy2121HX.js";import"./use-ripple-ePVrvqFu.js";import"./icon-BWDJazoz.js";import"./index-CvHBrwTd.js";const D=T(({children:d,className:u,...o},c)=>{const{styles:x}=f(),[l,M]=g.useState({top:0,left:0}),h={...x.container},C=n=>{M({top:n.clientY,left:n.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(s.div,{className:"ui-context-menu__anchor",style:{position:"fixed",...l}})}),e.jsx(b,{children:e.jsx(s.div,{ref:c,className:y("ui-context-menu",u),__css:h,...o,onContextMenu:v(o.onContextMenu,C),children:d})})]})}),ae={title:"Components / Overlay / ContextMenu",component:a},r=()=>e.jsxs(a,{children:[e.jsx(D,{as:R,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(_,{children:"Right click here"})}),e.jsxs(j,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(P,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
