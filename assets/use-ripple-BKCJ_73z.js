import{j as p}from"./extends-CwFRzn3r.js";import{A as d,m as y}from"./factory-DrzA6EUf.js";import{c as C,h,a5 as k}from"./factory-BFmlPmGv.js";import{r as f}from"./index-BwDkhjyp.js";const R=(o,r,a)=>Math.min(Math.max(o,r),a),P=({className:o,ripples:r,onAnimationComplete:a,onClear:m,color:i="currentColor",style:u,isDisabled:x,...n})=>{if(x)return null;const e={rounded:"fallback(full, 9999px)",zIndex:"fallback(kurillin, 9)"};return p.jsx(p.Fragment,{children:r.map(({key:t,x:s,y:l,size:c})=>{const g=R(.01*c,.2,c>100?.75:.5);return p.jsx(d,{mode:"popLayout",children:p.jsx(y.span,{className:C("ui-ripple",o),initial:{transform:"scale(0)",opacity:.35},animate:{transform:"scale(2)",opacity:0},exit:{opacity:0},transition:{duration:g},bgColor:i,style:{position:"absolute",transformOrigin:"center",pointerEvents:"none",left:s,top:l,width:`${c}px`,height:`${c}px`,...u},__css:e,...n,onAnimationComplete:h(a,()=>m(t))})},t)})})},E=({disabled:o,isDisabled:r,...a}={})=>{const[m,i]=f.useState([]),u=f.useCallback(n=>{if(o||r)return i([]);const e=n.currentTarget,t=Math.max(e.clientWidth,e.clientHeight),s=e.getBoundingClientRect();i(l=>[...l,{key:k(l.length.toString()),size:t,x:n.clientX-s.x-t/2,y:n.clientY-s.y-t/2}])},[o,r]),x=f.useCallback(n=>{i(e=>e.filter(t=>t.key!==n))},[]);return{ripples:m,onPointerDown:h(u,a.onPointerDown),onClear:x}};export{P as R,E as u};