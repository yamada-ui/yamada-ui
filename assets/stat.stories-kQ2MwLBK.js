import{j as e,a as o,F as y}from"./jsx-runtime-TtYKBvr-.js";import{c as Y}from"./components-65ykailD.js";import{f as u}from"./forward-ref-6T0UNPU-.js";import{u as f,a as h,c as Z,v as $,M as w,a0 as ee,a1 as te}from"./factory-APG2CWDq.js";import{b as re}from"./icon-7S-xPcKO.js";import{u as se}from"./use-component-style-XlqdEMGL.js";import{o as ae}from"./theme-provider-rjxHA_Gz.js";import{G as oe}from"./grid-y1unxw7X.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-TmpB6G8N.js";import"./mapValues-fvZQFbEN.js";import"./_basePickBy-W3dyMIi7.js";import"./isPlainObject-mmZlXdLr.js";import"./index-PPLHz8o0.js";import"./ui-provider-8YiEj__p.js";import"./index-S0O2pEwE.js";import"./environment-provider-ebV35j6x.js";import"./motion-RGBG165B.js";import"./loading-provider-10RppTX9.js";import"./index-dH9witMp.js";import"./Combination-X6sFZeet.js";import"./loading-Z6ToCT2V.js";import"./index-1lNNAzjq.js";import"./index-yCED6MhK.js";import"./index-immFGolW.js";import"./motion-YDUrcbbR.js";import"./index-dKw0visz.js";import"./container-portal-o5r_vKh6.js";import"./index-xIHD0DlW.js";import"./notice-QrU3pMpd.js";import"./alert-t99HKK4L.js";import"./close-button-SGGVP-7K.js";import"./use-ripple-PKVw7PLF.js";import"./container-Q4P1AfUn.js";import"./stack-zD0uDDLM.js";import"./box-aVe7Qm1R.js";import"./text-pQ1s1BAG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const m=u(({className:t,...r},s)=>{const a={...C().helperMessage};return e(f.dd,{ref:s,className:h("ui-stat__helper-message",t),__css:a,...r})}),_=u(({className:t,type:r="increase",...s},l)=>{const M={...C().icon};return e(re,{ref:l,className:h("ui-stat__icon",t),"aria-label":r==="increase"?"Increased by":"Decreased by",viewBox:"0 0 24 24",__css:M,...s,children:r==="increase"?e("path",{fill:"var(--ui-increase)",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}):e("path",{fill:"var(--ui-decrease)",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})})}),i=u(({className:t,...r},s)=>{const a={...C().label};return e(f.dt,{ref:s,className:h("ui-stat__label",t),__css:a,...r})}),p=u(({className:t,...r},s)=>{const a={...C().number};return e(f.dd,{ref:s,className:h("ui-stat__number",t),__css:a,...r})}),[ne,C]=Z({name:"StatContext",errorMessage:`useStat returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />"`}),n=u((t,r)=>{const[s,l]=se("Stat",t),{className:a,label:M,labelProps:j,number:k,numberProps:z,icon:P,iconProps:E,helperMessage:B,helperMessageProps:O,centerContent:R=!1,children:N,...q}=ae(l),J={display:"flex",flexDirection:"column",alignItems:R?"center":"flex-start",...s.container},c=$(N),[Q]=w(c,i),[U]=w(c,p),[W]=w(c,m),X=ee(c)?N:te(c,i,p,m);return e(ne,{value:s,children:o(f.dl,{ref:r,className:h("ui-stat",a),__css:J,...q,children:[Q??e(i,{...j,children:M}),U??e(p,{...z,children:k}),W??o(m,{...O,children:[P?e(_,{type:P,...E}):null,B]}),X]})})}),Je={title:"Components / Data Display / Stat",component:n},d=()=>o(y,{children:[e(n,{label:"Total Page Views",number:"1,993,818",icon:"increase",helperMessage:"21% more than last month"}),o(n,{children:[e(i,{children:"Total Page Views"}),e(p,{children:"1,993,818"}),o(m,{children:[e(_,{type:"increase"}),"21% more than last month"]})]})]}),S=()=>e(oe,{w:"full",templateColumns:{base:"repeat(4, 1fr)",lg:"repeat(3, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"},gap:"md",children:Y.map(t=>e(n,{colorScheme:t,label:"Total Likes",number:"818K",helperMessage:"21% more than last month"},t))}),b=()=>e(y,{children:e(n,{label:"Downloads",number:"18K",icon:"increase",helperMessage:"From August 1 to August 18",centerContent:!0})}),g=()=>o(y,{children:[e(n,{label:"Total Page Views",number:"1,993,818",icon:"decrease",helperMessage:"21% more than last month"}),o(n,{children:[e(i,{children:"Total Page Views"}),e(p,{children:"1,993,818"}),o(m,{children:[e(_,{type:"decrease"}),"21% more than last month"]})]})]});var x,T,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var V,D,v;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns={{
    base: "repeat(4, 1fr)",
    lg: "repeat(3, 1fr)",
    md: "repeat(2, 1fr)",
    sm: "repeat(1, 1fr)"
  }} gap="md">
      {colorSchemes.map(colorScheme => <Stat key={colorScheme} colorScheme={colorScheme} label="Total Likes" number="818K" helperMessage="21% more than last month" />)}
    </Grid>;
}`,...(v=(D=S.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var H,I,A;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Stat label="Downloads" number="18K" icon="increase" helperMessage="From August 1 to August 18" centerContent />
    </>;
}`,...(A=(I=b.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var F,G,K;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const Qe=["basic","withColorScheme","withCenterContent","withDecrease"];export{Qe as __namedExportsOrder,d as basic,Je as default,b as withCenterContent,S as withColorScheme,g as withDecrease};
