import{j as x}from"./extends-CwFRzn3r.js";import{r as c}from"./index-BwDkhjyp.js";import{m as w}from"./forward-ref-scR1bmHx.js";import{M as m,a as A,t as H}from"./utils-BIUxPJ-K.js";import{A as I,m as M}from"./factory-DrzA6EUf.js";import{u as T}from"./use-component-style-EAJDzyrD.js";import{o as R}from"./theme-provider-BxuddooS.js";import{c as v,P as B}from"./factory-BFmlPmGv.js";const E=s=>s!=null&&parseFloat(s.toString())>0,F={enter:({animationOpacity:s,endingHeight:i,transition:e,transitionEnd:t,delay:a,duration:o,enter:n}={})=>({...s?{opacity:1}:{},height:i,transition:A(e==null?void 0:e.enter)(a,o),transitionEnd:t==null?void 0:t.enter,...n}),exit:({animationOpacity:s,startingHeight:i,transition:e,transitionEnd:t,delay:a,duration:o,exit:n}={})=>({...s?{opacity:E(i)?1:0}:{},height:i,transition:H(e==null?void 0:e.exit)(a,o),transitionEnd:t==null?void 0:t.exit,...n})},D={initial:"exit",animate:"enter",exit:"exit",variants:F},d=w((s,i)=>{const[e,t]=T("Collapse",s);let{unmountOnExit:a,isOpen:o,animationOpacity:n,startingHeight:g,endingHeight:y,transition:l,transitionEnd:_,delay:h,duration:r,className:N,__css:C,...p}=R(t);const[u,O]=c.useState(!1);c.useEffect(()=>{B()&&O(!0)},[]);const P=o||a?"enter":"exit";o=a?o:!0;const S=c.useMemo(()=>u?l||{enter:{height:{duration:r??.3,ease:m.ease},opacity:{duration:r??.4,ease:m.ease}},exit:{height:{duration:r??.3,ease:m.ease},opacity:{duration:r??.4,ease:m.ease}}}:{enter:{duration:0}},[u,r,l]),f={animationOpacity:n,startingHeight:g,endingHeight:y,transition:S,transitionEnd:_,delay:h,duration:r},j={...e,...C};return x.jsx(I,{initial:!1,custom:f,children:o?x.jsx(M.div,{ref:i,className:v("ui-collapse",N),...p,...D,custom:f,animate:P,initial:a?"exit":!1,__css:j,style:{overflow:"hidden",...p.style}}):null})});d.displayName="Collapse";d.__ui__="Collapse";export{d as C};