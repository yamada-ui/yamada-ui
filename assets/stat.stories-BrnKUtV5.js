import{j as e}from"./jsx-runtime-CfatFE5O.js";import{c as U}from"./components-DwxTyLM4.js";import{A as W,b as c,c as u,g as X,B as j,a5 as Y,a6 as Z}from"./factory-ZSnRp-09.js";import{f as d}from"./forward-ref-D13m8o2p.js";import{b as ee}from"./icon-D-mdHq7J.js";import{a as te}from"./use-component-style-Bj6hwx_Q.js";import{o as se}from"./theme-provider-B08WIPTu.js";import{G as re}from"./grid-DicNDr0E.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./stack-C-NTCosl.js";import"./box-C9iD9jp7.js";import"./text-Q2VnSl4h.js";import"./index-CReU6qRk.js";import"./use-checkbox-U_dzeJq7.js";import"./index-C676fJGf.js";import"./form-control-CsCePsX1.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-BaE0cyT7.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-gGKStiao.js";import"./index-Bnw1OyhA.js";const[ae,_]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=d(({className:t,...r},s)=>{const o={..._().helperMessage};return e.jsx(c.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:o,...r})});n.displayName="StatHelperMessage";n.__ui__="StatHelperMessage";const h=d(({type:t="increase",className:r,...s},i)=>{const f={..._().icon};return e.jsx(ee,{ref:i,className:u("ui-stat__icon",r),"aria-label":t==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:f,...s,children:t==="increase"?e.jsx(c.path,{d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",fill:"$increase"}):e.jsx(c.path,{d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",fill:"$decrease"})})});h.displayName="StatIcon";h.__ui__="StatIcon";const l=d(({className:t,...r},s)=>{const o={..._().label};return e.jsx(c.dt,{ref:s,className:u("ui-stat__label",t),__css:o,...r})});l.displayName="StatLabel";l.__ui__="StatLabel";const m=d(({className:t,...r},s)=>{const o={..._().number};return e.jsx(c.dd,{ref:s,className:u("ui-stat__number",t),__css:o,...r})});m.displayName="StatNumber";m.__ui__="StatNumber";const a=d((t,r)=>{const[s,i]=te("Stat",t),{className:o,centerContent:f=!1,children:y,helperMessage:F,icon:C,label:G,number:K,helperMessageProps:k,iconProps:E,labelProps:z,numberProps:B,...R}=se(i),$={alignItems:f?"center":"flex-start",display:"flex",flexDirection:"column",...s.container},p=X(y),O=j(p,l),q=j(p,m),J=j(p,n),Q=Y(p)?y:Z(p,l,m,n);return e.jsx(ae,{value:s,children:e.jsxs(c.dl,{ref:r,className:u("ui-stat",o),__css:$,...R,children:[O??e.jsx(l,{...z,children:G}),q??e.jsx(m,{...B,children:K}),J??e.jsxs(n,{...k,children:[C?e.jsx(h,{type:C,...E}):null,F]}),Q]})})});a.displayName="Stat";a.__ui__="Stat";const Ze={component:a,title:"Components / Data Display / Stat"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(l,{children:"Total Page Views"}),e.jsx(m,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"increase"}),"21% more than last month"]})]})]}),b=()=>e.jsx(re,{gap:"md",templateColumns:{base:"repeat(4, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},w:"full",children:U.map(t=>e.jsx(a,{colorScheme:t,helperMessage:"21% more than last month",label:"Total Likes",number:"818K"},t))}),g=()=>e.jsx(a,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",number:"18K"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(l,{children:"Total Page Views"}),e.jsx(m,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"decrease"}),"21% more than last month"]})]})]});var M,w,N;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(D=(V=g.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,A,v;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(v=(A=x.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const et=["basic","withColorScheme","withCenterContent","withDecrease"];export{et as __namedExportsOrder,S as basic,Ze as default,g as withCenterContent,b as withColorScheme,x as withDecrease};