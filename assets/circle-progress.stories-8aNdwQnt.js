import{j as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as O}from"./index-pi5p6VHu.js";import{u as v}from"./index-DARK8rH5.js";import{u as j}from"./index-Br_odY0O.js";import{f as X}from"./forward-ref-BmTAT9U5.js";import{b as d,c as Y}from"./factory-CJjTzqIw.js";import{v as Z}from"./number-49BHn0Cl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-0B4xF-cu.js";import"./theme-provider-QhVoByOm.js";import"./index-DhPU70lj.js";const o=X(({className:t,children:g,size:e="6rem",thickness:s="0.625rem",color:f="primary",trackColor:x="border",value:k=0,min:V=0,max:q=100,isAnimation:a=!1,isRounded:G,speed:n=["1.4s","2s"],...H},I)=>{e=v("sizes",j(e))??e,s=v("sizes",j(s))??s;const J=k===0&&!a,K=Z(k,V,q),h=a?void 0:K*2.64,M=O({keyframes:{"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}},duration:typeof n[0]=="string"?n[0]:`${n[0]}s`,iterationCount:"infinite",timingFunction:"linear"}),Q={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:e},U=a?{animation:M}:{strokeDashoffset:66,strokeDasharray:h==null?void 0:`${h} ${264-h}`,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return r.jsxs(d.div,{ref:I,className:Y("ui-circle-progress",t),__css:Q,...H,children:[r.jsxs(rr,{size:e,isAnimation:a,speed:n,children:[r.jsx(C,{stroke:x,strokeWidth:s}),r.jsx(C,{stroke:f,strokeWidth:s,strokeLinecap:G?"round":void 0,opacity:J?0:void 0,...U})]}),g]})}),C=({...t})=>r.jsx(d.circle,{cx:50,cy:50,r:42,fill:"transparent",...t}),rr=({size:t,isAnimation:g,speed:e,...s})=>{const f=O({keyframes:{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},duration:typeof e[1]=="string"?e[1]:`${e[1]}s`,iterationCount:"infinite",timingFunction:"linear"}),x={display:"block",boxSize:t,...g?{animation:f}:{}};return r.jsx(d.svg,{viewBox:"0 0 100 100",__css:x,...s})},er=d("span",{baseStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",fontSize:"0.25em",textAlign:"center"}}),fr={title:"Components / Feedback / CircleProgress",component:o},i=()=>r.jsx(r.Fragment,{children:r.jsx(o,{value:19})}),c=()=>r.jsx(r.Fragment,{children:r.jsx(o,{value:18,size:32})}),l=()=>r.jsx(r.Fragment,{children:r.jsx(o,{value:31,thickness:1})}),u=()=>r.jsx(r.Fragment,{children:r.jsx(o,{size:"120px",min:0,max:1e3,value:444,color:"purple.500",trackColor:"green.300",children:r.jsx(er,{color:"purple.500",children:"444%"})})}),m=()=>r.jsx(r.Fragment,{children:r.jsx(o,{value:18,isRounded:!0})}),p=()=>r.jsx(r.Fragment,{children:r.jsx(o,{value:18,isAnimation:!0})});var y,b,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={19} />
    </>;
}`,...(P=(b=i.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var S,w,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} size={32} />
    </>;
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var D,z,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={31} thickness={1} />
    </>;
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var R,T,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress size="120px" min={0} max={1000} value={444} color="purple.500" trackColor="green.300">
        <CircleProgressLabel color="purple.500">444%</CircleProgressLabel>
      </CircleProgress>
    </>;
}`,...(_=(T=u.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,A,E;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isRounded />
    </>;
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,B,N;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isAnimation />
    </>;
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const xr=["basic","withSize","withThickness","withLabel","withRounded","useAnimation"];export{xr as __namedExportsOrder,i as basic,fr as default,p as useAnimation,u as withLabel,m as withRounded,c as withSize,l as withThickness};
