import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as W}from"./components-B2TwbHzz.js";import{f as p}from"./forward-ref-DuAegr0M.js";import{u as b,c as u,r as X,x as Y,z as f,a0 as Z,a1 as $}from"./factory-D_l0e62Z.js";import{b as ee}from"./icon-CzIo1teI.js";import{a as te}from"./use-component-style-CmIXnChI.js";import{o as re}from"./theme-provider-CEHzOwEc.js";import{G as se}from"./grid-D4AvWfNS.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-aVY4qAxo.js";import"./index-85_ynwwb.js";import"./_basePickBy-Cv_LZ4Zu.js";import"./iframe-DmaFw64E.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-JdRuaFY6.js";import"./isPlainObject-80CfKZvR.js";import"./index-DrFu-skq.js";import"./ui-provider-CbSqUcK-.js";import"./index-NGUqcXYl.js";import"./environment-provider-DgrwWQpg.js";import"./motion-JgkBPv6g.js";import"./loading-provider-DGgsgM8-.js";import"./index-fhOb3cnJ.js";import"./Combination-DlzjZhkT.js";import"./loading-BzPX_QB-.js";import"./index-BdoGeE0l.js";import"./index-DK4v3cZe.js";import"./index-pz7Fi0wz.js";import"./motion-eKAdj8-Q.js";import"./index-_tcQm2Fk.js";import"./container-portal-BFJOZyMO.js";import"./notice-VkAh4uWH.js";import"./alert-DCwykpJg.js";import"./close-button-DMTzCrK-.js";import"./use-ripple-DPcF1UKG.js";import"./container-DAr65yR4.js";import"./stack-DqP0WwGY.js";import"./box-D2VNNIhF.js";import"./text-BchYLgs8.js";import"./index-DK3NDBHy.js";import"./index-91_SsFHv.js";import"./form-control-ga4KLgoH.js";import"./flex-BW8zGhIX.js";import"./index-DkCb8Ldc.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-Dled9UE-.js";import"./index-CMBKrRO_.js";import"./index-dA4sLecN.js";import"./slide-fade-HjBRpCry.js";import"./utils-BzQmQ0PB.js";import"./scale-fade-SQA4dP2W.js";import"./index-D8t0nf1f.js";import"./index-CpvBRLJe.js";import"./select-CfYAEoV_.js";import"./option-CpIbnXDQ.js";import"./index-BIr0wHvY.js";import"./popover-content-2WVu-rPU.js";import"./index-BD2nhDml.js";import"./index-rYLD436_.js";import"./index-CUPGcwDs.js";import"./index-Cve3gl79.js";const i=p(({className:t,...r},s)=>{const a={...x().helperMessage};return e.jsx(b.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:a,...r})}),C=p(({className:t,type:r="increase",...s},n)=>{const j={...x().icon};return e.jsx(ee,{ref:n,className:u("ui-stat__icon",t),"aria-label":r==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:j,...s,children:r==="increase"?e.jsx("path",{fill:"var(--ui-increase)",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e.jsx("path",{fill:"var(--ui-decrease)",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})}),l=p(({className:t,...r},s)=>{const a={...x().label};return e.jsx(b.dt,{ref:s,className:u("ui-stat__label",t),__css:a,...r})}),c=p(({className:t,...r},s)=>{const a={...x().number};return e.jsx(b.dd,{ref:s,className:u("ui-stat__number",t),__css:a,...r})}),[ae,x]=X({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),o=p((t,r)=>{const[s,n]=te("Stat",t),{className:a,label:j,labelProps:A,number:G,numberProps:K,icon:w,iconProps:k,helperMessage:z,helperMessageProps:E,centerContent:R=!1,children:y,...B}=re(n),O={display:"flex",flexDirection:"column",alignItems:R?"center":"flex-start",...s.container},m=Y(y),[q]=f(m,l),[J]=f(m,c),[Q]=f(m,i),U=Z(m)?y:$(m,l,c,i);return e.jsx(ae,{value:s,children:e.jsxs(b.dl,{ref:r,className:u("ui-stat",a),__css:O,...B,children:[q??e.jsx(l,{...A,children:j}),J??e.jsx(c,{...K,children:G}),Q??e.jsxs(i,{...E,children:[w?e.jsx(C,{type:w,...k}):null,z]}),U]})})}),gt={title:"Components / Data Display / Stat",component:o},h=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(l,{children:"Total Page Views"}),e.jsx(c,{children:"1,993,818"}),e.jsxs(i,{children:[e.jsx(C,{type:"increase"}),"21% more than last month"]})]})]}),d=()=>e.jsx(se,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:W.map(t=>e.jsx(o,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),S=()=>e.jsx(e.Fragment,{children:e.jsx(o,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(l,{children:"Total Page Views"}),e.jsx(c,{children:"1,993,818"}),e.jsxs(i,{children:[e.jsx(C,{type:"decrease"}),"21% more than last month"]})]})]});var M,_,P;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Total Page Views" number="1,993,818" icon="increase" helperMessage="21% more than last month" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="increase" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,T,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns={{
    base: "repeat(4, 1fr)",
    lg: "repeat(3, 1fr)",
    md: "repeat(2, 1fr)",
    sm: "repeat(1, 1fr)"
  }} gap="md">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} label="Total Likes" number="818K" helperMessage="21% more than last month" />)}
    </Grid>;
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var V,D,H;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Downloads" number="18K" icon="increase" helperMessage="From August 1 to August 18" centerContent />
    </>;
}`,...(H=(D=S.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var v,I,F;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Total Page Views" number="1,993,818" icon="decrease" helperMessage="21% more than last month" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="decrease" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(F=(I=g.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const bt=["basic","withColorScheme","withCenterContent","withDecrease"];export{bt as __namedExportsOrder,h as basic,gt as default,S as withCenterContent,d as withColorScheme,g as withDecrease};
