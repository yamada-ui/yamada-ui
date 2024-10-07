import{j as e}from"./extends-CwFRzn3r.js";import{c as U}from"./components-C9595ZAn.js";import{o as W,b as c,c as u,p as X,q as j,a8 as Y,a9 as Z}from"./factory-CB2imrkD.js";import{f as d}from"./forward-ref-BWI-Phbn.js";import{b as ee}from"./icon-GDJ6YhRU.js";import{a as te}from"./use-component-style-CLkw4iG2.js";import{o as se}from"./theme-provider-D1j4LEQ9.js";import{G as re}from"./grid-DLK0WqMd.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-EJODL346.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-n09sy5wb.js";import"./index-C7I_pN7l.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BppVNRPn.js";import"./index-CtiIN-rJ.js";import"./Combination-IUp2vs9T.js";import"./loading-6PAwx6O9.js";import"./use-var-D-eiJB8b.js";import"./factory-C3FBZMw9.js";import"./portal-DhKIhJFj.js";import"./index-Drt3gf4w.js";import"./notice-Dqn85RIz.js";import"./alert-CKoFoHX4.js";import"./close-button-DxeSp445.js";import"./use-ripple-D_F9Vz55.js";import"./container-CjODcgJW.js";import"./stack-DlPMk-Cq.js";import"./box-DZiPb3wb.js";import"./text-DzUFhekZ.js";import"./checkbox-B9VwNL8A.js";import"./index-DMJJ3cSc.js";import"./form-control-DEVK4waL.js";import"./index-DeXdSJTC.js";import"./index-D0acwzsx.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-BjYwaRc0.js";import"./index-C60CJblF.js";import"./index-BZtt5eCJ.js";import"./index-CF-WRANw.js";import"./index-BWWKr8fL.js";import"./index-wnA7eVNJ.js";import"./slide-fade-C-Ns1lqG.js";import"./forward-ref-scR1bmHx.js";import"./utils-Da0AOJfu.js";import"./scale-fade-WF4VFMO2.js";import"./index-D__Mkjvw.js";import"./index-BAaRSIWS.js";import"./select-DEfMB_vi.js";import"./select-list-LABsm-BI.js";import"./index-LwS2tk1a.js";import"./popover-trigger-EpYwdnAy.js";import"./index-DORD3SAs.js";import"./index-CoJrGj-T.js";import"./index-DzUochMe.js";const[ae,_]=W({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=d(({className:t,...r},s)=>{const o={..._().helperMessage};return e.jsx(c.dd,{ref:s,className:u("ui-stat__helper-message",t),__css:o,...r})});n.displayName="StatHelperMessage";n.__ui__="StatHelperMessage";const h=d(({type:t="increase",className:r,...s},l)=>{const f={..._().icon};return e.jsx(ee,{ref:l,className:u("ui-stat__icon",r),"aria-label":t==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:f,...s,children:t==="increase"?e.jsx(c.path,{d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z",fill:"$increase"}):e.jsx(c.path,{d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z",fill:"$decrease"})})});h.displayName="StatIcon";h.__ui__="StatIcon";const m=d(({className:t,...r},s)=>{const o={..._().label};return e.jsx(c.dt,{ref:s,className:u("ui-stat__label",t),__css:o,...r})});m.displayName="StatLabel";m.__ui__="StatLabel";const i=d(({className:t,...r},s)=>{const o={..._().number};return e.jsx(c.dd,{ref:s,className:u("ui-stat__number",t),__css:o,...r})});i.displayName="StatNumber";i.__ui__="StatNumber";const a=d((t,r)=>{const[s,l]=te("Stat",t),{className:o,centerContent:f=!1,children:y,helperMessage:F,icon:C,label:G,number:K,helperMessageProps:k,iconProps:E,labelProps:z,numberProps:R,...$}=se(l),q={alignItems:f?"center":"flex-start",display:"flex",flexDirection:"column",...s.container},p=X(y),B=j(p,m),O=j(p,i),J=j(p,n),Q=Y(p)?y:Z(p,m,i,n);return e.jsx(ae,{value:s,children:e.jsxs(c.dl,{ref:r,className:u("ui-stat",o),__css:q,...$,children:[B??e.jsx(m,{...z,children:G}),O??e.jsx(i,{...R,children:K}),J??e.jsxs(n,{...k,children:[C?e.jsx(h,{type:C,...E}):null,F]}),Q]})})});a.displayName="Stat";a.__ui__="Stat";const lt={component:a,title:"Components / Data Display / Stat"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"increase"}),"21% more than last month"]})]})]}),b=()=>e.jsx(re,{gap:"md",templateColumns:{base:"repeat(4, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},w:"full",children:U.map(t=>e.jsx(a,{colorScheme:t,helperMessage:"21% more than last month",label:"Total Likes",number:"818K"},t))}),g=()=>e.jsx(a,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",number:"18K"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",number:"1,993,818"}),e.jsxs(a,{children:[e.jsx(m,{children:"Total Page Views"}),e.jsx(i,{children:"1,993,818"}),e.jsxs(n,{children:[e.jsx(h,{type:"decrease"}),"21% more than last month"]})]})]});var M,w,N;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(A=(v=x.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const ct=["basic","withColorScheme","withCenterContent","withDecrease"];export{ct as __namedExportsOrder,S as basic,lt as default,g as withCenterContent,b as withColorScheme,x as withDecrease};
