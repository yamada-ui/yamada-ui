import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as B}from"./index-ClcD9ViR.js";import{u as ne}from"./index-De_nPH_B.js";import{m as ae}from"./forward-ref-2BKBy0Yi.js";import{u as se}from"./use-var-BQS3JFPa.js";import{u as ie}from"./use-animation-BPpk81pk.js";import{m as ce}from"./factory-DeSWW4o7.js";import{c as le,d as O}from"./factory-Dfrbb1EY.js";import{u as xe}from"./use-component-style-fOirb5M1.js";import{o as me}from"./theme-provider-DSx3k1bh.js";import{C as o}from"./center-CU3SeQQI.js";import{T as r}from"./text-ACfjY0cR.js";import{M as y}from"./menu-B1N9qsLD.js";import{X as j}from"./x-BB4kmuqy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-Bq47Fk52.js";import"./forward-ref-D13m8o2p.js";import"./icon-DDeGQYl6.js";import"./createLucideIcon-DHJHrKis.js";const t=ae((p,d)=>{const[z,G]=xe("Airy",p);let{className:H,defaultValue:J="from",delay:v=0,disabled:f,duration:u=.2,from:K,isDisabled:L,isReadOnly:Q,readOnly:n,to:U,value:W,onChange:Y,...w}=me(G);f??(f=L),n??(n=Q);const[Z,{opacity:h}]=se({opacity:1,...z,...w},["opacity"],{transform:!0}),a=ie(),[S,C]=ne({defaultValue:J,value:W,onChange:Y}),ee=S==="from",re=B.useCallback(async()=>{n||(await a.start({opacity:0,transition:{delay:v,duration:u}}),C(oe=>oe==="from"?"to":"from"),await a.start({opacity:h,transition:{duration:u}}))},[a,C,n,h,u,v]),te={vars:Z,...z};return e.jsx(ce.button,{ref:d,type:"button",className:le("ui-airy",`ui-airy--${S}`,H),"data-disabled":O(f),"data-readonly":O(n),"data-value":S,animate:a,disabled:f,initial:{opacity:h},onClick:re,__css:te,...w,children:ee?K:U})});t.displayName="Airy";t.__ui__="Airy";const De={component:t,title:"Components / Transitions / Airy"},s=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})}),e.jsx(t,{from:e.jsx(y,{fontSize:"2xl"}),to:e.jsx(j,{fontSize:"2xl"})})]}),i=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{duration:.6,from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})}),e.jsx(t,{duration:.6,from:e.jsx(y,{fontSize:"2xl"}),to:e.jsx(j,{fontSize:"2xl"})})]}),c=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{delay:1,from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})}),e.jsx(t,{delay:1,from:e.jsx(y,{fontSize:"2xl"}),to:e.jsx(j,{fontSize:"2xl"})})]}),l=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{disabled:!0,from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})})}),x=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(r,{fontSize:"2xl",children:"ON"}),readOnly:!0,to:e.jsx(r,{fontSize:"2xl",children:"OFF"})})}),m=()=>{const[p,d]=B.useState("to");return e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"}),value:p,onChange:d})})};var T,F,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(g=(F=s.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var A,N,b;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy duration={0.6} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy duration={0.6} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(b=(N=i.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var D,I,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy delay={1} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy delay={1} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var M,R,X;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy disabled from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(X=(R=l.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var P,E,V;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} readOnly to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(V=(E=x.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,$,q;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<AiryIdent>("to");
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} value={value} onChange={onChange} />
    </Center>;
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Ie=["basic","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{Ie as __namedExportsOrder,s as basic,m as customControl,De as default,l as isDisabled,x as isReadonly,c as withDelay,i as withDuration};
