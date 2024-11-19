import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as U}from"./index-ClcD9ViR.js";import{u as xo}from"./index-BZgEUlQ7.js";import{u as po}from"./use-animation-DH4bdFd_.js";import{m as mo}from"./forward-ref-2BKBy0Yi.js";import{u as fo}from"./use-component-style-DigxQCYK.js";import{o as uo}from"./theme-provider-BzJf26st.js";import{u as So}from"./use-var-U7aWLCqe.js";import{m as ho}from"./factory-CGSCAS8e.js";import{d as b,c as zo}from"./factory-CsPvKZdD.js";import{H as jo,G as yo}from"./hand-metal-Csl4X_zQ.js";import{C as t}from"./center-DQ9g3-7I.js";import{M as a,S as r}from"./sun-DzCXe3zG.js";import{C as d,A as u}from"./cherry-CzfICQ3j.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-DwHv-pG9.js";import"./icon-DQQopEtL.js";import"./forward-ref-D13m8o2p.js";import"./createLucideIcon-Czt4prMK.js";const e=mo((S,h)=>{const[C,W]=fo("Rotate",S);let{className:X,defaultValue:Y="from",delay:g=0,disabled:z,duration:j=.4,from:Z,isDisabled:oo,isReadOnly:eo,readOnly:n,rotate:y=45,to,value:ao,onChange:ro,...I}=uo(W);z??(z=oo),n??(n=eo);const[no,{opacity:v}]=So({opacity:1,...C,...I},["opacity"],{transform:!0}),s=po(),[w,R]=xo({defaultValue:Y,value:ao,onChange:ro}),so=w==="from",lo=U.useCallback(async()=>{n||(await s.start({opacity:0,rotate:`${y}deg`,transition:{delay:g,duration:j}}),R(io=>io==="from"?"to":"from"),await s.start({opacity:v,rotate:"0deg",transition:{duration:j}}))},[n,s,y,j,g,R,v]),co={vars:no,...C};return o.jsx(ho.button,{ref:h,type:"button",className:zo("ui-rotate",`ui-rotate--${w}`,X),"data-disabled":b(z),"data-readonly":b(n),"data-value":w,animate:s,custom:y,disabled:z,initial:{opacity:v,rotate:"0deg"},onClick:lo,__css:co,...I,children:so?Z:to})});e.displayName="Rotate";e.__ui__="Rotate";const Fo={component:e,title:"Components / Transitions / Rotate"},l=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})}),o.jsx(e,{from:o.jsx(u,{fontSize:"2xl"}),to:o.jsx(d,{fontSize:"2xl"})})]}),c=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{from:o.jsx(yo,{fontSize:"2xl"}),rotate:360,to:o.jsx(jo,{fontSize:"2xl"})}),o.jsx(e,{from:o.jsx(u,{fontSize:"2xl"}),rotate:-360,to:o.jsx(d,{fontSize:"2xl"})})]}),i=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{duration:.6,from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})}),o.jsx(e,{duration:.6,from:o.jsx(u,{fontSize:"2xl"}),to:o.jsx(d,{fontSize:"2xl"})})]}),x=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{delay:1,from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})}),o.jsx(e,{delay:1,from:o.jsx(u,{fontSize:"2xl"}),to:o.jsx(d,{fontSize:"2xl"})})]}),p=()=>o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{disabled:!0,from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})})}),m=()=>o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(r,{fontSize:"2xl"}),readOnly:!0,to:o.jsx(a,{fontSize:"2xl"})})}),f=()=>{const[S,h]=U.useState("to");return o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"}),value:S,onChange:h})})};var M,A,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(_=(A=l.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var D,O,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<GrabIcon fontSize="2xl" />} rotate={360} to={<HandMetalIcon fontSize="2xl" />} />

      <Rotate from={<AppleIcon fontSize="2xl" />} rotate={-360} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,G,H;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate duration={0.6} from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate duration={0.6} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,V,k;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate delay={1} from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate delay={1} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(k=(V=x.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var F,T,$;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate disabled from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />
    </Center>;
}`,...($=(T=p.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var q,B,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} readOnly to={<MoonIcon fontSize="2xl" />} />
    </Center>;
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,L,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<RotateIdent>("to");
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} value={value} onChange={onChange} />
    </Center>;
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const To=["basic","withRotate","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{To as __namedExportsOrder,l as basic,f as customControl,Fo as default,p as isDisabled,m as isReadonly,x as withDelay,i as withDuration,c as withRotate};
