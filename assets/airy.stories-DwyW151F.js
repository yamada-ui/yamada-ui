import{j as e}from"./extends-CwFRzn3r.js";import{r as B}from"./index-BwDkhjyp.js";import{u as re}from"./index-CsH8woeS.js";import{m as oe}from"./forward-ref-scR1bmHx.js";import{u as ne}from"./use-var-DcJHaFAf.js";import{u as ae}from"./use-animation-CzpUzcOt.js";import{m as se}from"./factory-CWrzRNZL.js";import{c as ie,d as O}from"./factory-DBrfn43w.js";import{u as ce}from"./use-component-style-DhRiPQIp.js";import{o as le}from"./theme-provider-Cr3m0r8P.js";import{M as S}from"./menu-m6N51Xwy.js";import{C as o}from"./center-DkfaJL4L.js";import{T as t}from"./text-LaTineB_.js";import{X as y}from"./x-murJXkIA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-B7t0mTYZ.js";import"./lucide-icon-CsDBQyHf.js";import"./icon-CVPWgGuL.js";import"./forward-ref-BWI-Phbn.js";const r=oe((m,p)=>{const[j,G]=ce("Airy",m),{className:H,defaultValue:J="from",delay:z=0,duration:f=.2,from:K,isDisabled:v,isReadOnly:u,to:L,value:Q,onChange:U,...w}=le(G),[W,{opacity:d}]=ne({opacity:1,...j,...w},["opacity"],{transform:!0}),n=ae(),[h,C]=re({defaultValue:J,value:Q,onChange:U}),Y=h==="from",Z=B.useCallback(async()=>{u||(await n.start({opacity:0,transition:{delay:z,duration:f}}),C(te=>te==="from"?"to":"from"),await n.start({opacity:d,transition:{duration:f}}))},[n,C,u,d,f,z]),ee={vars:W,...j};return e.jsx(se.button,{ref:p,type:"button",className:ie("ui-airy",`ui-airy--${h}`,H),"data-disabled":O(v),"data-readonly":O(u),"data-value":h,animate:n,disabled:v,initial:{opacity:d},onClick:Z,__css:ee,...w,children:Y?K:L})});r.displayName="Airy";r.__ui__="Airy";const De={component:r,title:"Components / Transitions / Airy"},a=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"})}),e.jsx(r,{from:e.jsx(S,{fontSize:"2xl"}),to:e.jsx(y,{fontSize:"2xl"})})]}),s=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{duration:.6,from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"})}),e.jsx(r,{duration:.6,from:e.jsx(S,{fontSize:"2xl"}),to:e.jsx(y,{fontSize:"2xl"})})]}),i=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{delay:1,from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"})}),e.jsx(r,{delay:1,from:e.jsx(S,{fontSize:"2xl"}),to:e.jsx(y,{fontSize:"2xl"})})]}),c=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),isDisabled:!0,to:e.jsx(t,{fontSize:"2xl",children:"OFF"})})}),l=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),isReadOnly:!0,to:e.jsx(t,{fontSize:"2xl",children:"OFF"})})}),x=()=>{const[m,p]=B.useState("to");return e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"}),value:m,onChange:p})})};var T,F,g;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy from={<Menu fontSize="2xl" />} to={<X fontSize="2xl" />} />
    </Center>;
}`,...(g=(F=a.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var A,D,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy duration={0.6} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy duration={0.6} from={<Menu fontSize="2xl" />} to={<X fontSize="2xl" />} />
    </Center>;
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var b,_,R;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy delay={1} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy delay={1} from={<Menu fontSize="2xl" />} to={<X fontSize="2xl" />} />
    </Center>;
}`,...(R=(_=i.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var M,P,X;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} isDisabled to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(X=(P=c.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var E,V,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} isReadOnly to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(k=(V=l.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var I,$,q;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<AiryIdent>("to");
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} value={value} onChange={onChange} />
    </Center>;
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Ne=["basic","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{Ne as __namedExportsOrder,a as basic,x as customControl,De as default,c as isDisabled,l as isReadonly,i as withDelay,s as withDuration};
