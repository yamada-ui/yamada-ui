import{j as c}from"./jsx-runtime-CfatFE5O.js";import{A as y}from"./index-r0TXmcNt.js";import{m as R}from"./factory-CYGsRDnQ.js";import{c as C,h as f,a8 as k}from"./factory-Cp1Ju9mN.js";import{r as x}from"./index-ClcD9ViR.js";const _=(r,i,a)=>Math.min(Math.max(r,i),a),h=({className:r,style:i,color:a="currentColor",isDisabled:p,ripples:s,onAnimationComplete:m,onClear:u,...n})=>{if(p)return null;const e={rounded:"fallback(full, 9999px)",zIndex:"fallback(kurillin, 9)"};return c.jsx(c.Fragment,{children:s.map(({key:t,size:o,x:l,y:g})=>{const d=_(.01*o,.2,o>100?.75:.5);return c.jsx(y,{mode:"popLayout",children:c.jsx(R.span,{className:C("ui-ripple",r),style:{height:`${o}px`,left:l,pointerEvents:"none",position:"absolute",top:g,transformOrigin:"center",width:`${o}px`,...i},animate:{opacity:0,transform:"scale(2)"},bgColor:a,exit:{opacity:0},initial:{opacity:.35,transform:"scale(0)"},transition:{duration:d},__css:e,...n,onAnimationComplete:f(m,()=>u(t))})},t)})})};h.displayName="Ripple";h.__ui__="Ripple";const E=({disabled:r,isDisabled:i,...a}={})=>{const[p,s]=x.useState([]),m=x.useCallback(n=>{if(r||i)return s([]);const e=n.currentTarget,t=Math.max(e.clientWidth,e.clientHeight),o=e.getBoundingClientRect();s(l=>[...l,{key:k(l.length.toString()),size:t,x:n.clientX-o.x-t/2,y:n.clientY-o.y-t/2}])},[r,i]),u=x.useCallback(n=>{s(e=>e.filter(t=>t.key!==n))},[]);return{ripples:p,onClear:u,onPointerDown:f(m,a.onPointerDown)}};export{h as R,E as u};