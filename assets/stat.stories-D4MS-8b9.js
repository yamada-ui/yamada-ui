import{j as e}from"./extends-CwFRzn3r.js";import{c as U}from"./components-CyZ2ecjg.js";import{o as W,b as c,c as u,p as X,q as f,a8 as Y,a9 as Z}from"./factory-CYpx3TMG.js";import{f as d}from"./forward-ref-BWI-Phbn.js";import{b as ee}from"./icon-FPUxZQsz.js";import{a as te}from"./use-component-style-CfUS8Ki1.js";import{o as se}from"./theme-provider-BZKkW4ID.js";import{G as re}from"./grid-HRszMdSX.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-CFjuI6Rx.js";import"./ui-provider-Bt-rsEu4.js";import"./index-BivS8_08.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-C5VPyroP.js";import"./index-ueIvHVr5.js";import"./Combination-IUp2vs9T.js";import"./loading-DndL1UZp.js";import"./use-var-B0r_2U-t.js";import"./factory-CY7vhjKt.js";import"./portal-DfxMOg4r.js";import"./index-B8XB3FuZ.js";import"./notice-D4GyB-ww.js";import"./alert-DIva5QhF.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./container-OoL9K_ni.js";import"./stack-C8qilfIS.js";import"./box-CJbYVqkD.js";import"./text-DR0EVEsm.js";import"./checkbox-CXigM3pe.js";import"./index-BUuviwyS.js";import"./form-control-DTumWR9y.js";import"./index-tU9OGY6h.js";import"./index-_SJuZBu6.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-CsU3YgdC.js";import"./index-DEy_TXYI.js";import"./index-DHvgXC6C.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";import"./index-C1nnoSu4.js";import"./index-BAaRSIWS.js";import"./select-DJAkWUA7.js";import"./select-list-Dl92l1Le.js";import"./index-CIt0OHe7.js";import"./popover-content-C9K0DE-R.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";const[ae,_]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=d(({className:t,...s},r)=>{const o={..._().helperMessage};return e.jsx(c.dd,{ref:r,className:u("ui-stat__helper-message",t),__css:o,...s})});n.displayName="StatHelperMessage";n.__ui__="StatHelperMessage";const h=d(({className:t,type:s="increase",...r},l)=>{const j={..._().icon};return e.jsx(ee,{ref:l,className:u("ui-stat__icon",t),"aria-label":s==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:j,...r,children:s==="increase"?e.jsx(c.path,{fill:"$increase",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e.jsx(c.path,{fill:"$decrease",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})});h.displayName="StatIcon";h.__ui__="StatIcon";const m=d(({className:t,...s},r)=>{const o={..._().label};return e.jsx(c.dt,{ref:r,className:u("ui-stat__label",t),__css:o,...s})});m.displayName="StatLabel";m.__ui__="StatLabel";const i=d(({className:t,...s},r)=>{const o={..._().number};return e.jsx(c.dd,{ref:r,className:u("ui-stat__number",t),__css:o,...s})});i.displayName="StatNumber";i.__ui__="StatNumber";const a=d((t,s)=>{const[r,l]=te("Stat",t),{className:o,label:j,labelProps:A,number:G,numberProps:K,icon:y,iconProps:k,helperMessage:E,helperMessageProps:z,centerContent:R=!1,children:C,...$}=se(l),q={display:"flex",flexDirection:"column",alignItems:R?"center":"flex-start",...r.container},p=X(C),B=f(p,m),O=f(p,i),J=f(p,n),Q=Y(p)?C:Z(p,m,i,n);return e.jsx(ae,{value:r,children:e.jsxs(c.dl,{ref:s,className:u("ui-stat",o),__css:q,...$,children:[B??e.jsx(m,{...A,children:j}),O??e.jsx(i,{...K,children:G}),J??e.jsxs(n,{...z,children:[y?e.jsx(h,{type:y,...k}):null,E]}),Q]})})});a.displayName="Stat";a.__ui__="Stat";const lt={title:"Components / Data Display / Stat",component:a},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"increase"}),"21% more than last month"]})]})]}),b=()=>e.jsx(re,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:U.map(t=>e.jsx(a,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),g=()=>e.jsx(e.Fragment,{children:e.jsx(a,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"decrease"}),"21% more than last month"]})]})]});var M,w,N;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(N=(w=S.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var P,L,T;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns={{
    base: "repeat(4, 1fr)",
    lg: "repeat(3, 1fr)",
    md: "repeat(2, 1fr)",
    sm: "repeat(1, 1fr)"
  }} gap="md">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} label="Total Likes" number="818K" helperMessage="21% more than last month" />)}
    </Grid>;
}`,...(T=(L=b.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var H,V,D;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Downloads" number="18K" icon="increase" helperMessage="From August 1 to August 18" centerContent />
    </>;
}`,...(D=(V=g.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var I,F,v;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(v=(F=x.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};const ct=["basic","withColorScheme","withCenterContent","withDecrease"];export{ct as __namedExportsOrder,S as basic,lt as default,g as withCenterContent,b as withColorScheme,x as withDecrease};
