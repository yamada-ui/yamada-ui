import{j as e}from"./extends-CwFRzn3r.js";import{c as U}from"./components-qNC4DJBG.js";import{l as W,b as m,c as u,t as X,w as f,a6 as Y,a7 as Z}from"./factory-CPqzzHTm.js";import{f as h}from"./forward-ref-BWI-Phbn.js";import{b as ee}from"./icon-DRhEyT4F.js";import{a as te}from"./use-component-style-CMyamFpN.js";import{o as re}from"./theme-provider-DVkG1YcR.js";import{G as se}from"./grid-CPwP6E1L.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C_k6bTeh.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-CXzKbksM.js";import"./index-DQZm7vWy.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-CHHVBJ-V.js";import"./index-CdraW1dq.js";import"./Combination-IUp2vs9T.js";import"./loading-ChaHMfSx.js";import"./factory-BfCzQy-p.js";import"./portal-B84gyEPp.js";import"./index-Drt3gf4w.js";import"./notice-DgiMRFoI.js";import"./alert-Qk5MskAX.js";import"./close-button-JWZgMj1j.js";import"./use-ripple-CtulSDJk.js";import"./container-sWj6zgYn.js";import"./stack-C0eMt2TH.js";import"./box-BQleBwGc.js";import"./text-DDc7b8zK.js";import"./checkbox-DPAy9iEh.js";import"./index-7IszJd0q.js";import"./form-control-Jh-MfcNu.js";import"./index-DWlkt5Zz.js";import"./index-BgVcOSYc.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-BLWY2diD.js";import"./index-DE5DHf0O.js";import"./index-Bo59xzDQ.js";import"./index-BnjqPAsg.js";import"./index-CKYwj09A.js";import"./index-mY403y5C.js";import"./slide-fade-Dq1TAfNq.js";import"./forward-ref-scR1bmHx.js";import"./utils-CBG5DmzQ.js";import"./scale-fade-ZTztv-t6.js";import"./index-BqvrmGIG.js";import"./index-BAaRSIWS.js";import"./select-COoDNLXT.js";import"./select-list-CHU1FN_y.js";import"./index-BEfMoi0_.js";import"./popover-content-DU7dP830.js";import"./index-lsZIJgTB.js";import"./index-Du0-7Fls.js";import"./index-JbipPWcI.js";import"./index-Cj00RqbZ.js";const[ae,x]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),l=h(({className:t,...r},s)=>{const a={...x().helperMessage};return e.jsx(m.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:a,...r})}),C=h(({className:t,type:r="increase",...s},n)=>{const j={...x().icon};return e.jsx(ee,{ref:n,className:u("ui-stat__icon",t),"aria-label":r==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:j,...s,children:r==="increase"?e.jsx(m.path,{fill:"$increase",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e.jsx(m.path,{fill:"$decrease",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})}),c=h(({className:t,...r},s)=>{const a={...x().label};return e.jsx(m.dt,{ref:s,className:u("ui-stat__label",t),__css:a,...r})}),p=h(({className:t,...r},s)=>{const a={...x().number};return e.jsx(m.dd,{ref:s,className:u("ui-stat__number",t),__css:a,...r})}),o=h((t,r)=>{const[s,n]=te("Stat",t),{className:a,label:j,labelProps:A,number:G,numberProps:K,icon:w,iconProps:k,helperMessage:E,helperMessageProps:z,centerContent:R=!1,children:y,...$}=re(n),B={display:"flex",flexDirection:"column",alignItems:R?"center":"flex-start",...s.container},i=X(y),[O]=f(i,c),[q]=f(i,p),[J]=f(i,l),Q=Y(i)?y:Z(i,c,p,l);return e.jsx(ae,{value:s,children:e.jsxs(m.dl,{ref:r,className:u("ui-stat",a),__css:B,...$,children:[O??e.jsx(c,{...A,children:j}),q??e.jsx(p,{...K,children:G}),J??e.jsxs(l,{...z,children:[w?e.jsx(C,{type:w,...k}):null,E]}),Q]})})}),lt={title:"Components / Data Display / Stat",component:o},d=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(c,{children:"Total Page Views"}),e.jsx(p,{children:"1,993,818"}),e.jsxs(l,{children:[e.jsx(C,{type:"increase"}),"21% more than last month"]})]})]}),S=()=>e.jsx(se,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:U.map(t=>e.jsx(o,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),g=()=>e.jsx(e.Fragment,{children:e.jsx(o,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),e.jsxs(o,{children:[e.jsx(c,{children:"Total Page Views"}),e.jsx(p,{children:"1,993,818"}),e.jsxs(l,{children:[e.jsx(C,{type:"decrease"}),"21% more than last month"]})]})]});var M,_,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
