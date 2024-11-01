import{j as e}from"./extends-CwFRzn3r.js";import{r as U}from"./index-BwDkhjyp.js";import{u as ie}from"./index-DAOPkzwd.js";import{u as xe}from"./use-animation-CzpUzcOt.js";import{m as ce}from"./forward-ref-scR1bmHx.js";import{u as pe}from"./use-component-style-Givb0biW.js";import{o as me}from"./theme-provider-B8NHi_rL.js";import{u as fe}from"./use-var-BcRMoVLh.js";import{m as ue}from"./factory-B6ZnNkK9.js";import{c as de,d as M}from"./factory-CBW6YcbY.js";import{G as Se,H as he}from"./hand-metal-B7B_3Sq0.js";import{C as o}from"./center-CfmrFwEl.js";import{S as a,M as r}from"./sun-DjkkjlCS.js";import{A as f,C as u}from"./cherry-D-Ywsj_q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-B7t0mTYZ.js";import"./lucide-icon-4Wt4_XDL.js";import"./icon-CQ7oKYSm.js";import"./forward-ref-BWI-Phbn.js";const t=ce((d,S)=>{const[w,W]=pe("Rotate",d),{className:X,defaultValue:Y="from",delay:C=0,duration:h=.4,from:Z,isDisabled:g,isReadOnly:z,rotate:j=45,to:ee,value:te,onChange:oe,...R}=me(W),[ae,{opacity:y}]=fe({opacity:1,...w,...R},["opacity"],{transform:!0}),s=xe(),[v,b]=ie({defaultValue:Y,value:te,onChange:oe}),re=v==="from",se=U.useCallback(async()=>{z||(await s.start({opacity:0,rotate:`${j}deg`,transition:{delay:C,duration:h}}),b(le=>le==="from"?"to":"from"),await s.start({opacity:y,rotate:"0deg",transition:{duration:h}}))},[z,s,j,h,C,b,y]),ne={vars:ae,...w};return e.jsx(ue.button,{ref:S,type:"button",className:de("ui-rotate",`ui-rotate--${v}`,X),"data-disabled":M(g),"data-readonly":M(z),"data-value":v,animate:s,custom:j,disabled:g,initial:{opacity:y,rotate:"0deg"},onClick:se,__css:ne,...R,children:re?Z:ee})});t.displayName="Rotate";t.__ui__="Rotate";const Ve={component:t,title:"Components / Transitions / Rotate"},n=()=>e.jsxs(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(r,{fontSize:"2xl"})}),e.jsx(t,{from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(u,{fontSize:"2xl"})})]}),l=()=>e.jsxs(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{from:e.jsx(Se,{fontSize:"2xl"}),rotate:360,to:e.jsx(he,{fontSize:"2xl"})}),e.jsx(t,{from:e.jsx(f,{fontSize:"2xl"}),rotate:-360,to:e.jsx(u,{fontSize:"2xl"})})]}),i=()=>e.jsxs(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{duration:.6,from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(r,{fontSize:"2xl"})}),e.jsx(t,{duration:.6,from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(u,{fontSize:"2xl"})})]}),x=()=>e.jsxs(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{delay:1,from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(r,{fontSize:"2xl"})}),e.jsx(t,{delay:1,from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(u,{fontSize:"2xl"})})]}),c=()=>e.jsx(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(a,{fontSize:"2xl"}),isDisabled:!0,to:e.jsx(r,{fontSize:"2xl"})})}),p=()=>e.jsx(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(a,{fontSize:"2xl"}),isReadOnly:!0,to:e.jsx(r,{fontSize:"2xl"})})}),m=()=>{const[d,S]=U.useState("to");return e.jsx(o,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(r,{fontSize:"2xl"}),value:d,onChange:S})})};var D,A,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<Sun fontSize="2xl" />} to={<Moon fontSize="2xl" />} />

      <Rotate from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(_=(A=n.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var O,P,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<Grab fontSize="2xl" />} rotate={360} to={<HandMetal fontSize="2xl" />} />

      <Rotate from={<Apple fontSize="2xl" />} rotate={-360} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var G,H,N;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate duration={0.6} from={<Sun fontSize="2xl" />} to={<Moon fontSize="2xl" />} />

      <Rotate duration={0.6} from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var V,k,F;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate delay={1} from={<Sun fontSize="2xl" />} to={<Moon fontSize="2xl" />} />

      <Rotate delay={1} from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(F=(k=x.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var T,$,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<Sun fontSize="2xl" />} isDisabled to={<Moon fontSize="2xl" />} />
    </Center>;
}`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var q,B,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<Sun fontSize="2xl" />} isReadOnly to={<Moon fontSize="2xl" />} />
    </Center>;
}`,...(J=(B=p.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,L,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<RotateIdent>("to");
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Rotate from={<Sun fontSize="2xl" />} to={<Moon fontSize="2xl" />} value={value} onChange={onChange} />
    </Center>;
}`,...(Q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const ke=["basic","withRotate","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{ke as __namedExportsOrder,n as basic,m as customControl,Ve as default,c as isDisabled,p as isReadonly,x as withDelay,i as withDuration,l as withRotate};
