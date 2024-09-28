import{j as r}from"./extends-CwFRzn3r.js";import{u as B}from"./index-B8YQiu_Q.js";import{f as Z}from"./forward-ref-BWI-Phbn.js";import{b as p,c as rr}from"./factory-CYpx3TMG.js";import{u as er}from"./use-component-style-CfUS8Ki1.js";import{o as sr}from"./theme-provider-BZKkW4ID.js";import{v as or}from"./number-CcP_arM8.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-DEy_TXYI.js";const e=Z((s,d)=>{const[o,{size:h="6rem",...x}]=er("CircleProgress",s);let{className:g,children:O,boxSize:k=h,thickness:q="0.625rem",color:G="primary",trackColor:H="border",value:v=0,min:I=0,max:J=100,isAnimation:t=!1,isRounded:K,speed:n=["1.4s","2s"],...M}=sr(x);const Q=v===0&&!t,U=or(v,I,J),f=t?void 0:U*2.64,V=B({keyframes:{"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}},duration:typeof n[0]=="string"?n[0]:`${n[0]}s`,iterationCount:"infinite",timingFunction:"linear"}),X={...o,vars:[{name:"boxSize",token:"sizes",value:k},{name:"thickness",token:"sizes",value:q}],fontSize:"$boxSize"},Y=t?{animation:V}:{strokeDashoffset:66,strokeDasharray:f==null?void 0:`${f} ${264-f}`,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return r.jsxs(p.div,{ref:d,className:rr("ui-circle-progress",g),__css:X,...M,children:[r.jsxs(tr,{boxSize:k,isAnimation:t,speed:n,children:[r.jsx(j,{stroke:H,strokeWidth:"$thickness"}),r.jsx(j,{stroke:G,strokeWidth:"$thickness",strokeLinecap:K?"round":void 0,opacity:Q?0:void 0,...Y})]}),O]})}),j=({...s})=>r.jsx(p.circle,{cx:50,cy:50,r:42,fill:"transparent",...s}),tr=({boxSize:s,isAnimation:d,speed:o,...h})=>{const x=B({keyframes:{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},duration:typeof o[1]=="string"?o[1]:`${o[1]}s`,iterationCount:"infinite",timingFunction:"linear"}),g={display:"block",boxSize:s,...d?{animation:x}:{}};return r.jsx(p.svg,{viewBox:"0 0 100 100",__css:g,...h})},nr=p("span",{baseStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",fontSize:"0.25em",textAlign:"center"}}),fr={title:"Components / Feedback / CircleProgress",component:e},a=()=>r.jsx(r.Fragment,{children:r.jsx(e,{value:19})}),i=()=>r.jsx(r.Fragment,{children:r.jsx(e,{value:18,boxSize:32})}),c=()=>r.jsx(r.Fragment,{children:r.jsx(e,{value:31,thickness:1})}),l=()=>r.jsx(r.Fragment,{children:r.jsx(e,{boxSize:"120px",min:0,max:1e3,value:444,color:"purple.500",trackColor:"green.300",children:r.jsx(nr,{color:"purple.500",children:"444%"})})}),m=()=>r.jsx(r.Fragment,{children:r.jsx(e,{value:18,isRounded:!0})}),u=()=>r.jsx(r.Fragment,{children:r.jsx(e,{value:18,isAnimation:!0})});var C,b,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={19} />
    </>;
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,y,z;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} boxSize={32} />
    </>;
}`,...(z=(y=i.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var w,F,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={31} thickness={1} />
    </>;
}`,...(D=(F=c.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var $,A,R;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress boxSize="120px" min={0} max={1000} value={444} color="purple.500" trackColor="green.300">
        <CircleProgressLabel color="purple.500">444%</CircleProgressLabel>
      </CircleProgress>
    </>;
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,T,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isRounded />
    </>;
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,N,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isAnimation />
    </>;
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const kr=["basic","withSize","withThickness","withLabel","withRounded","useAnimation"];export{kr as __namedExportsOrder,a as basic,fr as default,u as useAnimation,l as withLabel,m as withRounded,i as withSize,c as withThickness};
