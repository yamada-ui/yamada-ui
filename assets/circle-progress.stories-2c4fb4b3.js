import{a as y,j as r,F as t}from"./jsx-runtime-276775ef.js";import{u as q}from"./index-f9b9ec21.js";import{u as b}from"./index-553b807d.js";import{u as P}from"./index-e7dbc2a5.js";import{f as Z}from"./forward-ref-86842115.js";import{d as f,e as rr}from"./factory-54465b8b.js";import{v as er}from"./number-cdadea8f.js";import"./index-1cdf6ce0.js";import"./index-7733ff91.js";import"./index-9326d079.js";import"./theme-ead977c1.js";import"./index-4cdec95f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";const o=Z(({className:a,children:g,size:e="6rem",thickness:s="0.625rem",color:h="primary",trackColor:k="border",value:C=0,min:G=0,max:H=100,isAnimation:n=!1,isRounded:I,speed:i=["1.4s","2s"],...J},K)=>{e=b("sizes",P(e))??e,s=b("sizes",P(s))??s;const M=C===0&&!n,Q=er(C,G,H),v=n?void 0:Q*2.64,U=q({keyframes:{"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}},duration:typeof i[0]=="string"?i[0]:`${i[0]}s`,iterationCount:"infinite",timingFunction:"linear"}),X={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:e},Y=n?{animation:U}:{strokeDashoffset:66,strokeDasharray:v==null?void 0:`${v} ${264-v}`,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"};return y(f.div,{ref:K,className:rr("ui-circle-progress",a),__css:X,...J,children:[y(sr,{size:e,isAnimation:n,speed:i,children:[r(x,{stroke:k,strokeWidth:s}),r(x,{stroke:h,strokeWidth:s,strokeLinecap:I?"round":void 0,opacity:M?0:void 0,...Y})]}),g]})}),x=a=>r(f.circle,{cx:50,cy:50,r:42,fill:"transparent",...a}),sr=({size:a,isAnimation:g,speed:e,...s})=>{const h=q({keyframes:{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},duration:typeof e[1]=="string"?e[1]:`${e[1]}s`,iterationCount:"infinite",timingFunction:"linear"}),k={display:"block",boxSize:a,...g?{animation:h}:{}};return r(f.svg,{viewBox:"0 0 100 100",__css:k,...s})},or=f("span",{baseStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",fontSize:"0.25em",textAlign:"center"}}),kr={title:"Components / Feedback / CircleProgress",component:o},c=()=>r(t,{children:r(o,{value:19})}),l=()=>r(t,{children:r(o,{value:18,size:32})}),u=()=>r(t,{children:r(o,{value:31,thickness:1})}),m=()=>r(t,{children:r(o,{size:"120px",min:0,max:1e3,value:444,color:"purple.500",trackColor:"green.300",children:r(or,{color:"purple.500",children:"444%"})})}),p=()=>r(t,{children:r(o,{value:18,isRounded:!0})}),d=()=>r(t,{children:r(o,{value:18,isAnimation:!0})});var S,w,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={19} />
    </>;
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,F,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} size={32} />
    </>;
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,_,R;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={31} thickness={1} />
    </>;
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var $,A,j;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress size='120px' min={0} max={1000} value={444} color='purple.500' trackColor='green.300'>
        <CircleProgressLabel color='purple.500'>444%</CircleProgressLabel>
      </CircleProgress>
    </>;
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var W,B,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isRounded />
    </>;
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,O,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <CircleProgress value={18} isAnimation />
    </>;
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const vr=["basic","withSize","withThickness","withLabel","withRounded","useAnimation"];export{vr as __namedExportsOrder,c as basic,kr as default,d as useAnimation,m as withLabel,p as withRounded,l as withSize,u as withThickness};
//# sourceMappingURL=circle-progress.stories-2c4fb4b3.js.map
