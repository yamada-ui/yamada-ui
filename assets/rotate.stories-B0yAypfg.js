import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{r as U}from"./index-BwPxMuoB.js";import{u as io}from"./index-DLOQPSsO.js";import{u as xo}from"./use-animation-_HTLhYwu.js";import{m as po}from"./forward-ref-Cy2nAbAn.js";import{u as mo}from"./use-component-style-65RA3nVD.js";import{o as fo}from"./theme-provider-DGyR61Aa.js";import{u as uo}from"./use-var-Tj-aA0qb.js";import{m as So}from"./factory-CplEbptb.js";import{d as b,c as ho}from"./factory-B_KMcXyW.js";import{H as zo,G as jo}from"./hand-metal-DQNPNCtk.js";import{C as t}from"./center-BgoPILRQ.js";import{M as a,S as r}from"./sun-CjXee5Fw.js";import{C as f,A as d}from"./cherry-DxqbUBTx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-qc5arozF.js";import"./icon-DIzRaLo1.js";import"./forward-ref-Ukjd1cIW.js";import"./createLucideIcon-D0BTS2fX.js";const e=po((u,S)=>{const[w,W]=mo("Rotate",u),{className:X,defaultValue:Y="from",delay:C=0,isDisabled:Z,disabled:g=Z,duration:h=.4,from:oo,isReadOnly:eo,readOnly:z=eo,rotate:j=45,to,value:ao,onChange:ro,...I}=fo(W),[no,{opacity:y}]=uo({opacity:1,...w,...I},["opacity"],{transform:!0}),n=xo(),[v,R]=io({defaultValue:Y,value:ao,onChange:ro}),so={vars:no,...w},lo=U.useCallback(async()=>{z||(await n.start({opacity:0,rotate:`${j}deg`,transition:{delay:C,duration:h}}),R(co=>co==="from"?"to":"from"),await n.start({opacity:y,rotate:"0deg",transition:{duration:h}}))},[z,n,j,h,C,R,y]);return o.jsx(So.button,{ref:S,type:"button",className:ho("ui-rotate",`ui-rotate--${v}`,X),"data-disabled":b(g),"data-readonly":b(z),"data-value":v,animate:n,custom:j,disabled:g,initial:{opacity:y,rotate:"0deg"},onClick:lo,__css:so,...I,children:v==="from"?oo:to})});e.displayName="Rotate";e.__ui__="Rotate";const ko={component:e,title:"Components / Transitions / Rotate"},s=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})}),o.jsx(e,{from:o.jsx(d,{fontSize:"2xl"}),to:o.jsx(f,{fontSize:"2xl"})})]}),l=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{from:o.jsx(jo,{fontSize:"2xl"}),rotate:360,to:o.jsx(zo,{fontSize:"2xl"})}),o.jsx(e,{from:o.jsx(d,{fontSize:"2xl"}),rotate:-360,to:o.jsx(f,{fontSize:"2xl"})})]}),c=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{duration:.6,from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})}),o.jsx(e,{duration:.6,from:o.jsx(d,{fontSize:"2xl"}),to:o.jsx(f,{fontSize:"2xl"})})]}),i=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{delay:1,from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})}),o.jsx(e,{delay:1,from:o.jsx(d,{fontSize:"2xl"}),to:o.jsx(f,{fontSize:"2xl"})})]}),x=()=>o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{disabled:!0,from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"})})}),p=()=>o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(r,{fontSize:"2xl"}),readOnly:!0,to:o.jsx(a,{fontSize:"2xl"})})}),m=()=>{const[u,S]=U.useState("to");return o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(r,{fontSize:"2xl"}),to:o.jsx(a,{fontSize:"2xl"}),value:u,onChange:S})})};var M,A,_;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var O,D,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<GrabIcon fontSize="2xl" />} rotate={360} to={<HandMetalIcon fontSize="2xl" />} />

      <Rotate from={<AppleIcon fontSize="2xl" />} rotate={-360} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(P=(D=l.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var E,G,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate duration={0.6} from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate duration={0.6} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,V,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate delay={1} from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate delay={1} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var T,$,F;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate disabled from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />
    </Center>;
}`,...(F=($=x.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var q,B,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} readOnly to={<MoonIcon fontSize="2xl" />} />
    </Center>;
}`,...(J=(B=p.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,L,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<RotateIdent>("to");
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} value={value} onChange={onChange} />
    </Center>;
}`,...(Q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const To=["basic","withRotate","withDuration","withDelay","disabled","readOnly","customControl"];export{To as __namedExportsOrder,s as basic,m as customControl,ko as default,x as disabled,p as readOnly,i as withDelay,c as withDuration,l as withRotate};
