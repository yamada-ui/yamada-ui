import{j as e}from"./jsx-runtime-DztICxWZ.js";import{c as U}from"./components-BAAl2FdL.js";import{B as W,b as c,c as u,g as X,C as j,a6 as Y,a7 as Z}from"./factory-7Z88KRtK.js";import{f as d}from"./forward-ref-DH6f5tnY.js";import{b as ee}from"./icon-DKuqv-9Z.js";import{a as te}from"./use-component-style-DHLtMqa5.js";import{o as se}from"./theme-provider-DsbwOWxu.js";import{G as re}from"./grid-4Nt5rXDY.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./stack-DL8tKm2J.js";import"./box-Ds8SIjx6.js";import"./text-KN7rBBtq.js";import"./index-CQqf5rDh.js";import"./use-checkbox-Dj2PfqIK.js";import"./index-DNaxzNVT.js";import"./form-control-C8eO6U25.js";import"./factory-UaNlpug7.js";import"./proxy-r-x5KraU.js";import"./index-D3uVnNfI.js";import"./index-DCkI3YJn.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-Bz9rJ8_M.js";import"./tooltip-Bqvs1x-w.js";import"./index-BhIdR6KT.js";import"./index-vKAUfVXn.js";import"./index-B_yC7JIW.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./index-B2HRqSdn.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./slide-fade-CwK7Wr_w.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./scale-fade-D309oxZP.js";import"./index-CHX88LJr.js";import"./index-DrADDttQ.js";import"./select-Bx_8s32I.js";import"./select-list-DgjlmZ5-.js";import"./index-BdmKGyZV.js";import"./popover-trigger-T6UAq76Q.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-M_HQDTPf.js";import"./index-YFprnXPi.js";import"./index-BimsXrcc.js";const[ae,_]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=d(({className:t,...r},s)=>{const o={..._().helperMessage};return e.jsx(c.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:o,...r})});n.displayName="StatHelperMessage";n.__ui__="StatHelperMessage";const h=d(({type:t="increase",className:r,...s},i)=>{const f={..._().icon};return e.jsx(ee,{ref:i,className:u("ui-stat__icon",r),"aria-label":t==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:f,...s,children:t==="increase"?e.jsx(c.path,{d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",fill:"$increase"}):e.jsx(c.path,{d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",fill:"$decrease"})})});h.displayName="StatIcon";h.__ui__="StatIcon";const m=d(({className:t,...r},s)=>{const o={..._().label};return e.jsx(c.dt,{ref:s,className:u("ui-stat__label",t),__css:o,...r})});m.displayName="StatLabel";m.__ui__="StatLabel";const l=d(({className:t,...r},s)=>{const o={..._().number};return e.jsx(c.dd,{ref:s,className:u("ui-stat__number",t),__css:o,...r})});l.displayName="StatNumber";l.__ui__="StatNumber";const a=d((t,r)=>{const[s,i]=te("Stat",t),{className:o,centerContent:f=!1,children:y,helperMessage:F,icon:C,label:G,number:K,helperMessageProps:k,iconProps:E,labelProps:z,numberProps:B,...R}=se(i),$={alignItems:f?"center":"flex-start",display:"flex",flexDirection:"column",...s.container},p=X(y),O=j(p,m),q=j(p,l),J=j(p,n),Q=Y(p)?y:Z(p,m,l,n);return e.jsx(ae,{value:s,children:e.jsxs(c.dl,{ref:r,className:u("ui-stat",o),__css:$,...R,children:[O??e.jsx(m,{...z,children:G}),q??e.jsx(l,{...B,children:K}),J??e.jsxs(n,{...k,children:[C?e.jsx(h,{type:C,...E}):null,F]}),Q]})})});a.displayName="Stat";a.__ui__="Stat";const et={component:a,title:"Components / Data Display / Stat"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"increase"}),"21% more than last month"]})]})]}),b=()=>e.jsx(re,{gap:"md",templateColumns:{base:"repeat(4, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},w:"full",children:U.map(t=>e.jsx(a,{colorScheme:t,helperMessage:"21% more than last month",label:"Total Likes",number:"818K"},t))}),g=()=>e.jsx(a,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",number:"18K"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"decrease"}),"21% more than last month"]})]})]});var M,w,N;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Stat helperMessage="21% more than last month" icon="increase" label="Total Page Views" number="1,993,818" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="increase" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(N=(w=S.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var P,L,T;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Grid gap="md" templateColumns={{
    base: "repeat(4, 1fr)",
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)"
  }} w="full">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} helperMessage="21% more than last month" label="Total Likes" number="818K" />)}
    </Grid>;
}`,...(T=(L=b.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var H,V,D;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Stat centerContent helperMessage="From August 1 to August 18" icon="increase" label="Downloads" number="18K" />;
}`,...(D=(V=g.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,v,A;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <>
      <Stat helperMessage="21% more than last month" icon="decrease" label="Total Page Views" number="1,993,818" />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="decrease" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>;
}`,...(A=(v=x.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const tt=["basic","withColorScheme","withCenterContent","withDecrease"];export{tt as __namedExportsOrder,S as basic,et as default,g as withCenterContent,b as withColorScheme,x as withDecrease};
