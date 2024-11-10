import{j as o}from"./jsx-runtime-CfatFE5O.js";import{r as U}from"./index-ClcD9ViR.js";import{u as co}from"./index-DPt_fcIQ.js";import{u as io}from"./use-animation-BPpk81pk.js";import{m as xo}from"./forward-ref-2BKBy0Yi.js";import{u as po}from"./use-component-style-CLSKeq_H.js";import{o as mo}from"./theme-provider-CNI9L2WW.js";import{u as fo}from"./use-var-YCfkKbSC.js";import{m as uo}from"./factory-ep9rrzy9.js";import{c as So,d as b}from"./factory-COau3w21.js";import{S as a,M as r}from"./sun-BMhyPiCv.js";import{G as ho,H as zo}from"./hand-metal-C-1JiVaJ.js";import{C as t}from"./center-CSG2P-cD.js";import{A as f,C as u}from"./cherry-B_74eUj7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-Bq47Fk52.js";import"./lucide-icon-pIguMOGe.js";import"./icon-BodRPJCf.js";import"./forward-ref-D13m8o2p.js";const e=xo((d,S)=>{const[w,W]=po("Rotate",d),{className:X,defaultValue:Y="from",delay:C=0,duration:h=.4,from:Z,isDisabled:g,isReadOnly:z,rotate:j=45,to:oo,value:eo,onChange:to,...R}=mo(W),[ao,{opacity:y}]=fo({opacity:1,...w,...R},["opacity"],{transform:!0}),n=io(),[v,I]=co({defaultValue:Y,value:eo,onChange:to}),ro=v==="from",no=U.useCallback(async()=>{z||(await n.start({opacity:0,rotate:`${j}deg`,transition:{delay:C,duration:h}}),I(lo=>lo==="from"?"to":"from"),await n.start({opacity:y,rotate:"0deg",transition:{duration:h}}))},[z,n,j,h,C,I,y]),so={vars:ao,...w};return o.jsx(uo.button,{ref:S,type:"button",className:So("ui-rotate",`ui-rotate--${v}`,X),"data-disabled":b(g),"data-readonly":b(z),"data-value":v,animate:n,custom:j,disabled:g,initial:{opacity:y,rotate:"0deg"},onClick:no,__css:so,...R,children:ro?Z:oo})});e.displayName="Rotate";e.__ui__="Rotate";const Vo={component:e,title:"Components / Transitions / Rotate"},s=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{from:o.jsx(a,{fontSize:"2xl"}),to:o.jsx(r,{fontSize:"2xl"})}),o.jsx(e,{from:o.jsx(f,{fontSize:"2xl"}),to:o.jsx(u,{fontSize:"2xl"})})]}),l=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{from:o.jsx(ho,{fontSize:"2xl"}),rotate:360,to:o.jsx(zo,{fontSize:"2xl"})}),o.jsx(e,{from:o.jsx(f,{fontSize:"2xl"}),rotate:-360,to:o.jsx(u,{fontSize:"2xl"})})]}),c=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{duration:.6,from:o.jsx(a,{fontSize:"2xl"}),to:o.jsx(r,{fontSize:"2xl"})}),o.jsx(e,{duration:.6,from:o.jsx(f,{fontSize:"2xl"}),to:o.jsx(u,{fontSize:"2xl"})})]}),i=()=>o.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[o.jsx(e,{delay:1,from:o.jsx(a,{fontSize:"2xl"}),to:o.jsx(r,{fontSize:"2xl"})}),o.jsx(e,{delay:1,from:o.jsx(f,{fontSize:"2xl"}),to:o.jsx(u,{fontSize:"2xl"})})]}),x=()=>o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(a,{fontSize:"2xl"}),isDisabled:!0,to:o.jsx(r,{fontSize:"2xl"})})}),p=()=>o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(a,{fontSize:"2xl"}),isReadOnly:!0,to:o.jsx(r,{fontSize:"2xl"})})}),m=()=>{const[d,S]=U.useState("to");return o.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(e,{from:o.jsx(a,{fontSize:"2xl"}),to:o.jsx(r,{fontSize:"2xl"}),value:d,onChange:S})})};var M,D,A;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var _,O,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<GrabIcon fontSize="2xl" />} rotate={360} to={<HandMetalIcon fontSize="2xl" />} />

      <Rotate from={<AppleIcon fontSize="2xl" />} rotate={-360} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,G,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate duration={0.6} from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate duration={0.6} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,V,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate delay={1} from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} />

      <Rotate delay={1} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var F,T,$;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} isDisabled to={<MoonIcon fontSize="2xl" />} />
    </Center>;
}`,...($=(T=x.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var q,B,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} isReadOnly to={<MoonIcon fontSize="2xl" />} />
    </Center>;
}`,...(J=(B=p.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,L,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<RotateIdent>("to");
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<SunIcon fontSize="2xl" />} to={<MoonIcon fontSize="2xl" />} value={value} onChange={onChange} />
    </Center>;
}`,...(Q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const ko=["basic","withRotate","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{ko as __namedExportsOrder,s as basic,m as customControl,Vo as default,x as isDisabled,p as isReadonly,i as withDelay,c as withDuration,l as withRotate};
