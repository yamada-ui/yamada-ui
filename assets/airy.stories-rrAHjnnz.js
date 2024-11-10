import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as B}from"./index-ClcD9ViR.js";import{u as re}from"./index-DPt_fcIQ.js";import{m as oe}from"./forward-ref-2BKBy0Yi.js";import{u as ne}from"./use-var-YCfkKbSC.js";import{u as ae}from"./use-animation-BPpk81pk.js";import{m as se}from"./factory-ep9rrzy9.js";import{c as ie,d as O}from"./factory-COau3w21.js";import{u as ce}from"./use-component-style-CLSKeq_H.js";import{o as le}from"./theme-provider-CNI9L2WW.js";import{X as S}from"./x-BXzhPqNp.js";import{C as o}from"./center-CSG2P-cD.js";import{T as t}from"./text-BnztNdZ-.js";import{M as y}from"./menu-C1uH8lI4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-Bq47Fk52.js";import"./lucide-icon-pIguMOGe.js";import"./icon-BodRPJCf.js";import"./forward-ref-D13m8o2p.js";const r=oe((m,p)=>{const[j,G]=ce("Airy",m),{className:H,defaultValue:J="from",delay:z=0,duration:f=.2,from:K,isDisabled:v,isReadOnly:u,to:L,value:Q,onChange:U,...w}=le(G),[W,{opacity:d}]=ne({opacity:1,...j,...w},["opacity"],{transform:!0}),n=ae(),[h,C]=re({defaultValue:J,value:Q,onChange:U}),Y=h==="from",Z=B.useCallback(async()=>{u||(await n.start({opacity:0,transition:{delay:z,duration:f}}),C(te=>te==="from"?"to":"from"),await n.start({opacity:d,transition:{duration:f}}))},[n,C,u,d,f,z]),ee={vars:W,...j};return e.jsx(se.button,{ref:p,type:"button",className:ie("ui-airy",`ui-airy--${h}`,H),"data-disabled":O(v),"data-readonly":O(u),"data-value":h,animate:n,disabled:v,initial:{opacity:d},onClick:Z,__css:ee,...w,children:Y?K:L})});r.displayName="Airy";r.__ui__="Airy";const De={component:r,title:"Components / Transitions / Airy"},a=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"})}),e.jsx(r,{from:e.jsx(y,{fontSize:"2xl"}),to:e.jsx(S,{fontSize:"2xl"})})]}),s=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{duration:.6,from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"})}),e.jsx(r,{duration:.6,from:e.jsx(y,{fontSize:"2xl"}),to:e.jsx(S,{fontSize:"2xl"})})]}),i=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{delay:1,from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"})}),e.jsx(r,{delay:1,from:e.jsx(y,{fontSize:"2xl"}),to:e.jsx(S,{fontSize:"2xl"})})]}),c=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),isDisabled:!0,to:e.jsx(t,{fontSize:"2xl",children:"OFF"})})}),l=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),isReadOnly:!0,to:e.jsx(t,{fontSize:"2xl",children:"OFF"})})}),x=()=>{const[m,p]=B.useState("to");return e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(t,{fontSize:"2xl",children:"ON"}),to:e.jsx(t,{fontSize:"2xl",children:"OFF"}),value:m,onChange:p})})};var T,F,g;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(g=(F=a.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var A,D,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy duration={0.6} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy duration={0.6} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var b,_,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy delay={1} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy delay={1} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,M,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} isDisabled to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var X,E,V;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} isReadOnly to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,$,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<AiryIdent>("to");
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} value={value} onChange={onChange} />
    </Center>;
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Ne=["basic","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{Ne as __namedExportsOrder,a as basic,x as customControl,De as default,c as isDisabled,l as isReadonly,i as withDelay,s as withDuration};
