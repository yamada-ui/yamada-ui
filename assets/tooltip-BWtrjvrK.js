import{j as s}from"./extends-CwFRzn3r.js";import{u as pe}from"./index-LwUC2h1G.js";import{u as m}from"./index-C3wYSRXL.js";import{u as me}from"./index-DBauCgbQ.js";import{u as de}from"./index-ry0nKyvs.js";import{r as o}from"./index-BwDkhjyp.js";import{A as fe,m as xe}from"./factory-DrzA6EUf.js";import{P as he}from"./portal-DgOtrSNE.js";import{s as d}from"./slide-fade-fVtXuNem.js";import{s as Pe}from"./scale-fade-DU3hSrG9.js";import{m as be}from"./forward-ref-scR1bmHx.js";import{u as ge}from"./use-component-style-EAJDzyrD.js";import{o as ve}from"./theme-provider-BxuddooS.js";import{w as R,a as we,h as u,x as F,b as _,c as Oe}from"./factory-BFmlPmGv.js";const Ce=(f="scale",x)=>{const i={reverse:!0,duration:x,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(f){case"scale":return{...Pe,custom:{...i,scale:.95}};case"top":return{...d,custom:{...i,offsetY:-16}};case"right":return{...d,custom:{...i,offsetX:16}};case"left":return{...d,custom:{...i,offsetX:-16}};case"bottom":return{...d,custom:{...i,offsetY:16}}}},z=be(({z:f,zIndex:x,portalProps:i,withPortal:N=!0,...A},S)=>{let[{z:W,zIndex:B,...X},Y]=ge("Tooltip",A);const{className:K,children:b,label:h,placement:L,modifiers:M,gutter:Z,offset:q,openDelay:g=0,closeDelay:v=0,isDisabled:w,closeOnClick:O,closeOnScroll:G,closeOnMouseDown:H=!1,closeOnPointerDown:J=!1,closeOnEsc:Q=!0,animation:C,duration:U,isOpen:V,defaultIsOpen:$,onOpen:ee,onClose:oe,...te}=ve(Y),y=J||H,T=o.useId(),{isOpen:t,onOpen:D,onClose:k}=pe({isOpen:V,defaultIsOpen:$,onOpen:ee,onClose:oe}),r=o.useRef(null),c=o.useRef(),l=o.useRef(),{referenceRef:E,getPopperProps:ne,transformOrigin:se}=de({enabled:t,placement:L,modifiers:M,gutter:Z,offset:q}),a=o.useCallback(()=>{l.current&&(clearTimeout(l.current),l.current=void 0),k()},[k]),p=o.useCallback(()=>{if(!w&&!c.current){t&&a();const e=R(r.current);c.current=e.setTimeout(D,g)}},[w,t,g,a,D]),n=o.useCallback(()=>{c.current&&(clearTimeout(c.current),c.current=void 0);const e=R(r.current);l.current=e.setTimeout(a,v)},[v,a]),j=o.useCallback(()=>t&&O?n():void 0,[t,O,n]),I=o.useCallback(()=>t&&y?n():void 0,[t,y,n]),re=o.useCallback(e=>t&&e.key==="Escape"?n():void 0,[t,n]),ie=o.useCallback((e={},ue=null)=>({...e,ref:we(r,ue,E),onPointerEnter:u(e.onPointerEnter,p),onClick:u(e.onClick,j),onPointerDown:u(e.onPointerDown,I),onFocus:u(e.onFocus,p),onBlur:u(e.onBlur,n)}),[E,j,I,p,n]);if(m(()=>F(r.current),"keydown",e=>Q?re(e):void 0),m(()=>F(r.current),"scroll",()=>t&&G?a():void 0),m(()=>r.current,"pointerleave",e=>{e.pointerType!=="touch"&&n()}),m(()=>r.current,"touchstart",()=>{t?n():p()},{passive:!0}),me({ref:r,handler:()=>{n()}}),o.useEffect(()=>()=>{clearTimeout(c.current),clearTimeout(l.current)},[]),!h)return s.jsx(s.Fragment,{children:b});const P=o.Children.only(b),ce=o.cloneElement(P,ie({...P.props,"aria-describedby":T},P.ref)),le={position:"relative",...X},ae=x??f??B??W;return s.jsxs(s.Fragment,{children:[ce,s.jsx(_.span,{id:T,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},children:h}),s.jsx(fe,{children:t?s.jsx(he,{isDisabled:!N,...i,children:s.jsx(_.div,{...ne(),zIndex:ae,pointerEvents:"none",children:s.jsx(xe.div,{ref:S,className:Oe("ui-tooltip",K),role:"tooltip",style:{transformOrigin:se},...C!=="none"?Ce(C,U):{},initial:"exit",animate:t?"enter":"exit",exit:"exit",__css:le,...te,children:h})})}):null})]})});z.displayName="Tooltip";z.__ui__="Tooltip";export{z as T};