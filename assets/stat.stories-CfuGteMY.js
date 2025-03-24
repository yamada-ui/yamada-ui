import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{c as U}from"./components-UqfDC4B9.js";import{B as W,b as c,c as u,g as X,C as j,a6 as Y,a7 as Z}from"./factory-B_KMcXyW.js";import{f as d}from"./forward-ref-Ukjd1cIW.js";import{b as ee}from"./icon-DIzRaLo1.js";import{a as te}from"./use-component-style-65RA3nVD.js";import{o as se}from"./theme-provider-DGyR61Aa.js";import{G as re}from"./grid-CO07n_ck.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./stack-D_e4Awei.js";import"./box-B5b1ezDi.js";import"./text-clsxocLN.js";import"./index-CmygkWjO.js";import"./use-checkbox-D04DuIcU.js";import"./index-CuS4wVb_.js";import"./form-control-4O_IQfgA.js";import"./factory-CplEbptb.js";import"./proxy-qc5arozF.js";import"./index-DLOQPSsO.js";import"./index-CpILZzml.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-Tj-aA0qb.js";import"./tooltip-BjQKmVlx.js";import"./index-HHw4H1QN.js";import"./index-2pdm5d7T.js";import"./index-8mCCCrtj.js";import"./index-swnplGbx.js";import"./index-AoowuF6j.js";import"./index-2ihZSkad.js";import"./portal-DnDmgWrA.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-B3WI7AqC.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-DODAe1Af.js";import"./scale-fade-B70jfWAg.js";import"./index-Bbp3WuCW.js";import"./index-iqP3Qh_g.js";import"./select-D8Sm63Mk.js";import"./select-list-C94BFRlV.js";import"./index-tjcNNcsH.js";import"./popover-trigger-lFjT6k2t.js";import"./close-button-DYk-GqDy.js";import"./use-ripple-DqSHYmP8.js";import"./index-kCrJIFe4.js";import"./index-qZwaV1-B.js";import"./index-rMDCi0HR.js";const[ae,_]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=d(({className:t,...r},s)=>{const o={..._().helperMessage};return e.jsx(c.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:o,...r})});n.displayName="StatHelperMessage";n.__ui__="StatHelperMessage";const h=d(({type:t="increase",className:r,...s},i)=>{const f={..._().icon};return e.jsx(ee,{ref:i,className:u("ui-stat__icon",r),"aria-label":t==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:f,...s,children:t==="increase"?e.jsx(c.path,{d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",fill:"$increase"}):e.jsx(c.path,{d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",fill:"$decrease"})})});h.displayName="StatIcon";h.__ui__="StatIcon";const m=d(({className:t,...r},s)=>{const o={..._().label};return e.jsx(c.dt,{ref:s,className:u("ui-stat__label",t),__css:o,...r})});m.displayName="StatLabel";m.__ui__="StatLabel";const l=d(({className:t,...r},s)=>{const o={..._().number};return e.jsx(c.dd,{ref:s,className:u("ui-stat__number",t),__css:o,...r})});l.displayName="StatNumber";l.__ui__="StatNumber";const a=d((t,r)=>{const[s,i]=te("Stat",t),{className:o,centerContent:f=!1,children:y,helperMessage:F,icon:C,label:G,number:K,helperMessageProps:k,iconProps:E,labelProps:z,numberProps:B,...R}=se(i),$={alignItems:f?"center":"flex-start",display:"flex",flexDirection:"column",...s.container},p=X(y),O=j(p,m),q=j(p,l),J=j(p,n),Q=Y(p)?y:Z(p,m,l,n);return e.jsx(ae,{value:s,children:e.jsxs(c.dl,{ref:r,className:u("ui-stat",o),__css:$,...R,children:[O??e.jsx(m,{...z,children:G}),q??e.jsx(l,{...B,children:K}),J??e.jsxs(n,{...k,children:[C?e.jsx(h,{type:C,...E}):null,F]}),Q]})})});a.displayName="Stat";a.__ui__="Stat";const et={component:a,title:"Components / Data Display / Stat"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"increase"}),"21% more than last month"]})]})]}),b=()=>e.jsx(re,{gap:"md",templateColumns:{base:"repeat(4, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},w:"full",children:U.map(t=>e.jsx(a,{colorScheme:t,helperMessage:"21% more than last month",label:"Total Likes",number:"818K"},t))}),g=()=>e.jsx(a,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",number:"18K"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"decrease"}),"21% more than last month"]})]})]});var M,w,N;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
