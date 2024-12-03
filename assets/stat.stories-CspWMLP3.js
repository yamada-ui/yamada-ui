import{j as e}from"./jsx-runtime-CfatFE5O.js";import{c as U}from"./components-CNqZhJFx.js";import{y as W,b as c,c as u,A as X,B as j,a5 as Y,a6 as Z}from"./factory-Dfrbb1EY.js";import{f as d}from"./forward-ref-D13m8o2p.js";import{b as ee}from"./icon-DDeGQYl6.js";import{a as te}from"./use-component-style-fOirb5M1.js";import{o as re}from"./theme-provider-DSx3k1bh.js";import{G as se}from"./grid-CyG17mlt.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DykZTIMV.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-DE3H2F6F.js";import"./index-B_wzWJ8A.js";import"./i18n-provider-BEOsEj1w.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-Bs7NbL3P.js";import"./index-D7KS8MXr.js";import"./Combination-CkmEMpJG.js";import"./loading-C7VoLX3j.js";import"./use-var-BQS3JFPa.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-BMWh88P0.js";import"./index-ZuzByk-F.js";import"./factory-DeSWW4o7.js";import"./notice-BiV1MNuO.js";import"./alert-DWFIkvOW.js";import"./close-button-DENBYMYY.js";import"./use-ripple-59xURXHY.js";import"./container-Co5ig03C.js";import"./stack-CJbkc0zr.js";import"./box-JOSxMso6.js";import"./text-ACfjY0cR.js";import"./use-checkbox-sRu08KlT.js";import"./index-DImDLiuZ.js";import"./form-control-C7lyVmHF.js";import"./index-De_nPH_B.js";import"./index-BLjMRlHy.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-B2Vmh8XG.js";import"./index-DqeO0dAp.js";import"./index-Y4TAv5_r.js";import"./index-CFtnIMNb.js";import"./index-D_3Ilmao.js";import"./index-CKnINgQh.js";import"./slide-fade-CQuVyWIS.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Crg7yCn-.js";import"./scale-fade-D-TPukYR.js";import"./index-O1jdRUiZ.js";import"./index-B5Z2HpMN.js";import"./select-dnrj-5i-.js";import"./select-list-B-KbPFAb.js";import"./index-CgNA1xsw.js";import"./popover-trigger-DAQ55ib6.js";import"./index-BN23OaLZ.js";import"./index-gGKStiao.js";import"./index-BVP762bF.js";const[ae,_]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=d(({className:t,...s},r)=>{const o={..._().helperMessage};return e.jsx(c.dd,{ref:r,className:u("ui-stat__helper-message",t),__css:o,...s})});n.displayName="StatHelperMessage";n.__ui__="StatHelperMessage";const h=d(({type:t="increase",className:s,...r},l)=>{const f={..._().icon};return e.jsx(ee,{ref:l,className:u("ui-stat__icon",s),"aria-label":t==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:f,...r,children:t==="increase"?e.jsx(c.path,{d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",fill:"$increase"}):e.jsx(c.path,{d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",fill:"$decrease"})})});h.displayName="StatIcon";h.__ui__="StatIcon";const m=d(({className:t,...s},r)=>{const o={..._().label};return e.jsx(c.dt,{ref:r,className:u("ui-stat__label",t),__css:o,...s})});m.displayName="StatLabel";m.__ui__="StatLabel";const i=d(({className:t,...s},r)=>{const o={..._().number};return e.jsx(c.dd,{ref:r,className:u("ui-stat__number",t),__css:o,...s})});i.displayName="StatNumber";i.__ui__="StatNumber";const a=d((t,s)=>{const[r,l]=te("Stat",t),{className:o,centerContent:f=!1,children:y,helperMessage:F,icon:C,label:G,number:K,helperMessageProps:k,iconProps:E,labelProps:z,numberProps:B,...R}=re(l),$={alignItems:f?"center":"flex-start",display:"flex",flexDirection:"column",...r.container},p=X(y),O=j(p,m),q=j(p,i),J=j(p,n),Q=Y(p)?y:Z(p,m,i,n);return e.jsx(ae,{value:r,children:e.jsxs(c.dl,{ref:s,className:u("ui-stat",o),__css:$,...R,children:[O??e.jsx(m,{...z,children:G}),q??e.jsx(i,{...B,children:K}),J??e.jsxs(n,{...k,children:[C?e.jsx(h,{type:C,...E}):null,F]}),Q]})})});a.displayName="Stat";a.__ui__="Stat";const ut={component:a,title:"Components / Data Display / Stat"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"increase"}),"21% more than last month"]})]})]}),b=()=>e.jsx(se,{gap:"md",templateColumns:{base:"repeat(4, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},w:"full",children:U.map(t=>e.jsx(a,{colorScheme:t,helperMessage:"21% more than last month",label:"Total Likes",number:"818K"},t))}),g=()=>e.jsx(a,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",number:"18K"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"decrease"}),"21% more than last month"]})]})]});var M,w,N;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(v=(A=x.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};const dt=["basic","withColorScheme","withCenterContent","withDecrease"];export{dt as __namedExportsOrder,S as basic,ut as default,g as withCenterContent,b as withColorScheme,x as withDecrease};
