import{j as e}from"./extends-CwFRzn3r.js";import{c as U}from"./components-rVgCpb4m.js";import{o as W,b as m,c as u,p as X,q as f,a9 as Y,aa as Z}from"./factory-BFmlPmGv.js";import{f as h}from"./forward-ref-BWI-Phbn.js";import{b as ee}from"./icon-C9JvswpF.js";import{a as te}from"./use-component-style-EAJDzyrD.js";import{o as re}from"./theme-provider-BxuddooS.js";import{G as se}from"./grid-Czp1wILg.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-LwUC2h1G.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-C66Ee4rB.js";import"./index-VCLV_JO6.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-CvWZUKPQ.js";import"./index-DPQEUEIP.js";import"./Combination-IUp2vs9T.js";import"./loading-DQUUkNfv.js";import"./use-var-5W_PKLe2.js";import"./factory-DrzA6EUf.js";import"./portal-DgOtrSNE.js";import"./index-Drt3gf4w.js";import"./notice-Bi1CaIgm.js";import"./alert-B6ipP5Qe.js";import"./close-button-C2kve5KL.js";import"./use-ripple-BKCJ_73z.js";import"./container-DtodEIEt.js";import"./stack-Ci4lM0q5.js";import"./box-CWaHD-h7.js";import"./text-Cd4dmvuW.js";import"./checkbox-C3Sgwj7g.js";import"./index-3awEsMXW.js";import"./form-control-aTmtpG9F.js";import"./index-BJROMb8v.js";import"./index-P_C2szIQ.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-BWtrjvrK.js";import"./index-C3wYSRXL.js";import"./index-DBauCgbQ.js";import"./index-ry0nKyvs.js";import"./index-DKKPGyTW.js";import"./index-Bxk_4mh7.js";import"./slide-fade-fVtXuNem.js";import"./forward-ref-scR1bmHx.js";import"./utils-BIUxPJ-K.js";import"./scale-fade-DU3hSrG9.js";import"./index-BpW-axNd.js";import"./index-BAaRSIWS.js";import"./select-BTgvr1GY.js";import"./select-list-DeDlZ0Wp.js";import"./index-CQq5lcce.js";import"./popover-content-C6GkyTo6.js";import"./index-Dd5uuyt0.js";import"./index-Du0-7Fls.js";import"./index-DP8J_kCj.js";const[ae,x]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),l=h(({className:t,...r},s)=>{const a={...x().helperMessage};return e.jsx(m.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:a,...r})}),C=h(({className:t,type:r="increase",...s},n)=>{const j={...x().icon};return e.jsx(ee,{ref:n,className:u("ui-stat__icon",t),"aria-label":r==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:j,...s,children:r==="increase"?e.jsx(m.path,{fill:"$increase",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e.jsx(m.path,{fill:"$decrease",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})}),c=h(({className:t,...r},s)=>{const a={...x().label};return e.jsx(m.dt,{ref:s,className:u("ui-stat__label",t),__css:a,...r})}),p=h(({className:t,...r},s)=>{const a={...x().number};return e.jsx(m.dd,{ref:s,className:u("ui-stat__number",t),__css:a,...r})}),o=h((t,r)=>{const[s,n]=te("Stat",t),{className:a,label:j,labelProps:A,number:G,numberProps:K,icon:w,iconProps:k,helperMessage:E,helperMessageProps:z,centerContent:R=!1,children:y,...$}=re(n),q={display:"flex",flexDirection:"column",alignItems:R?"center":"flex-start",...s.container},i=X(y),B=f(i,c),O=f(i,p),J=f(i,l),Q=Y(i)?y:Z(i,c,p,l);return e.jsx(ae,{value:s,children:e.jsxs(m.dl,{ref:r,className:u("ui-stat",a),__css:q,...$,children:[B??e.jsx(c,{...A,children:j}),O??e.jsx(p,{...K,children:G}),J??e.jsxs(l,{...z,children:[w?e.jsx(C,{type:w,...k}):null,E]}),Q]})})}),lt={title:"Components / Data Display / Stat",component:o},d=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(c,{children:"Total Page Views"}),e.jsx(p,{children:"1,993,818"}),e.jsxs(l,{children:[e.jsx(C,{type:"increase"}),"21% more than last month"]})]})]}),S=()=>e.jsx(se,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:U.map(t=>e.jsx(o,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),g=()=>e.jsx(e.Fragment,{children:e.jsx(o,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(c,{children:"Total Page Views"}),e.jsx(p,{children:"1,993,818"}),e.jsxs(l,{children:[e.jsx(C,{type:"decrease"}),"21% more than last month"]})]})]});var M,_,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,T,L;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns={{
    base: "repeat(4, 1fr)",
    lg: "repeat(3, 1fr)",
    md: "repeat(2, 1fr)",
    sm: "repeat(1, 1fr)"
  }} gap="md">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} label="Total Likes" number="818K" helperMessage="21% more than last month" />)}
    </Grid>;
}`,...(L=(T=S.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var V,D,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Downloads" number="18K" icon="increase" helperMessage="From August 1 to August 18" centerContent />
    </>;
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,F,v;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(v=(F=b.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};const ct=["basic","withColorScheme","withCenterContent","withDecrease"];export{ct as __namedExportsOrder,d as basic,lt as default,g as withCenterContent,S as withColorScheme,b as withDecrease};
