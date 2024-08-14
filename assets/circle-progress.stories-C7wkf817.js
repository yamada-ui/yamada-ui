import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{u as H}from"./index-D68hVCYc.js";import{u as v}from"./index-CCkg_WlC.js";import{f as or}from"./forward-ref-BmTAT9U5.js";import{b as g,r as P,c as tr,n as S}from"./factory-CZghEhwx.js";import{u as nr}from"./use-component-style-CVJyvgnb.js";import{o as ar}from"./theme-provider-DVx9I-yC.js";import{v as ir}from"./number-49BHn0Cl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-B8LKFMKH.js";import"./extends-CF3RwP-h.js";const s=or((o,h)=>{const[t,{size:x="6em",...f}]=nr("CircleProgress",o);let{className:k,children:I,boxSize:j,thickness:n="0.625rem",color:J="primary",trackColor:K="border",value:b=0,min:M=0,max:Q=100,isAnimation:a=!1,isRounded:V,speed:i=["1.4s","2s"],...X}=ar(f);j??(j=P(x,e=>S(e)?e:v("sizes",e))),n=P(n,e=>S(e)?e:v("sizes",e));const Y=b===0&&!a,Z=ir(b,M,Q),C=a?void 0:Z*2.64,rr=H({keyframes:{"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}},duration:typeof i[0]=="string"?i[0]:`${i[0]}s`,iterationCount:"infinite",timingFunction:"linear"}),er={...t,fontSize:j},sr=a?{animation:rr}:{strokeDashoffset:66,strokeDasharray:C==null?void 0:`${C} ${264-C}`,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return r.jsxs(g.div,{ref:h,className:tr("ui-circle-progress",k),__css:er,...X,children:[r.jsxs(cr,{boxSize:j,isAnimation:a,speed:i,children:[r.jsx(y,{stroke:K,strokeWidth:n}),r.jsx(y,{stroke:J,strokeWidth:n,strokeLinecap:V?"round":void 0,opacity:Y?0:void 0,...sr})]}),I]})}),y=({...o})=>r.jsx(g.circle,{cx:50,cy:50,r:42,fill:"transparent",...o}),cr=({boxSize:o,isAnimation:h,speed:t,...x})=>{const f=H({keyframes:{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},duration:typeof t[1]=="string"?t[1]:`${t[1]}s`,iterationCount:"infinite",timingFunction:"linear"}),k={display:"block",boxSize:o,...h?{animation:f}:{}};return r.jsx(g.svg,{viewBox:"0 0 100 100",__css:k,...x})},mr=g("span",{baseStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",fontSize:"0.25em",textAlign:"center"}}),Pr={title:"Components / Feedback / CircleProgress",component:s},c=()=>r.jsx(r.Fragment,{children:r.jsx(s,{value:19})}),m=()=>r.jsx(r.Fragment,{children:r.jsx(s,{value:18,boxSize:32})}),l=()=>r.jsx(r.Fragment,{children:r.jsx(s,{value:31,thickness:1})}),u=()=>r.jsx(r.Fragment,{children:r.jsx(s,{boxSize:"120px",min:0,max:1e3,value:444,color:"purple.500",trackColor:"green.300",children:r.jsx(mr,{color:"purple.500",children:"444%"})})}),p=()=>r.jsx(r.Fragment,{children:r.jsx(s,{value:18,isRounded:!0})}),d=()=>r.jsx(r.Fragment,{children:r.jsx(s,{value:18,isAnimation:!0})});var z,w,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={19} />
    </>;
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var D,A,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} boxSize={32} />
    </>;
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var T,L,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={31} thickness={1} />
    </>;
}`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var $,E,N;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress boxSize="120px" min={0} max={1000} value={444} color="purple.500" trackColor="green.300">
        <CircleProgressLabel color="purple.500">444%</CircleProgressLabel>
      </CircleProgress>
    </>;
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var O,W,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isRounded />
    </>;
}`,...(B=(W=p.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var U,q,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isAnimation />
    </>;
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Sr=["basic","withSize","withThickness","withLabel","withRounded","useAnimation"];export{Sr as __namedExportsOrder,c as basic,Pr as default,d as useAnimation,u as withLabel,p as withRounded,m as withSize,l as withThickness};
