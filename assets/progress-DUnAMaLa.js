import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as x}from"./index-CilJ2bIs.js";import{p as C,b as h,c as T}from"./factory-Cp1Ju9mN.js";import{f as j}from"./forward-ref-D13m8o2p.js";import{a as R}from"./use-component-style-BGLOU3Ga.js";import{o as F}from"./theme-provider-DMHFYkuw.js";import{v as N}from"./number-CcP_arM8.js";const[S,$]=C({name:"ProgressStylesContext",errorMessage:`useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),y=j((a,e)=>{var v;const[s,m]=R("Progress",a),{className:l,borderRadius:r,children:c,hasStripe:u,isAnimation:o,isStripeAnimation:d,max:i=100,min:t=0,rounded:f,speed:g,value:P,...k}=F(m,["filledTrackColor"]),_=r??f??((v=s.track)==null?void 0:v.borderRadius),b={overflow:"hidden",pos:"relative",w:"100%",...s.track},w=o?{}:{"aria-valuemax":i,"aria-valuemin":t,"aria-valuenow":P,role:"meter"};return n.jsx(S,{value:s,children:n.jsxs(h.div,{ref:e,className:T("ui-progress",l),borderRadius:_,__css:b,...w,...k,children:[n.jsx(p,{borderRadius:_,hasStripe:u,isAnimation:o,isStripeAnimation:d,max:i,min:t,speed:g,value:P}),c]})})});y.displayName="Progress";y.__ui__="Progress";const p=({hasStripe:a,isAnimation:e,isStripeAnimation:s,max:m=100,min:l=0,speed:r="1.4s",value:c=0,...u})=>{const o=N(c,l,m),d=$(),i=x({duration:typeof r=="string"?r:`${r}s`,iterationCount:"infinite",keyframes:{"0%":{bgPosition:"1rem 0"},"100%":{bgPosition:"0 0"}},timingFunction:"linear"}),t=x({duration:typeof r=="string"?r:`${r}s`,iterationCount:"infinite",keyframes:{"0%":{left:"-40%"},"100%":{left:"100%"}},timingFunction:"ease"});s=!e&&a&&s;const f={...s?{animation:i}:{},...e?{animation:t,minWidth:"50%",position:"absolute",willChange:"left"}:{}},g={h:"100%",w:`${o}%`,...d.filledTrack};return n.jsx(h.div,{css:f,"aria-hidden":!0,__css:g,...u})};p.displayName="ProgressFilledTrack";p.__ui__="ProgressFilledTrack";export{y as P};