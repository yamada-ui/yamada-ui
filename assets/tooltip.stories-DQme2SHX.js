import{d as ue,r as s,aK as Z,aB as pe,h as x,e as de,m as me,a as q,at as J,f as xe,j as e,R as he,Z as Te,X as M,v as Pe,G as fe}from"./iframe-Dqv37jui.js";import{u as N}from"./index-Dglq9CnQ.js";import{u as ge}from"./index-BeFVXBdh.js";import{u as Ce,g as je}from"./popover-CWOd5ZuN.js";import{u as Q}from"./use-disclosure-LBMw-9EN.js";import{B as r}from"./button-C8c51KbT.js";import{F as V}from"./for-vxGyZb1G.js";import"./index-DV2BNl-B.js";import"./event-Dj3rLfFf.js";import"./slide-fade-CigPds8E.js";import"./index-DPuk35MY.js";import"./use-breakpoint-BI3OQxi_.js";import"./use-breakpoint-value-BmkGzUn3.js";import"./use-color-mode-value-D_U_yHOc.js";import"./transition-BO6mxl9Z.js";import"./fade-scale-DBiRiJFe.js";import"./use-ripple-Cg_GpsVR.js";import"./rings-B8RJlSoE.js";const ve=ue({base:{content:{bg:"bg.panel",borderWidth:"1px",boxShadow:"sm",fontSize:"sm",maxW:"xs",position:"relative",px:"sm",py:"xs",rounded:"l2",zIndex:"dodoria"}}}),Be=({autoUpdate:t,closeDelay:l=0,closeOnClick:u=!0,closeOnEsc:T=!0,closeOnScroll:P,defaultOpen:F,disabled:f,elements:R,flip:A,gutter:E,matchWidth:W,middleware:w,offset:L,open:Y,openDelay:_=0,placement:$,platform:ee,preventOverflow:te,strategy:oe,transform:ne,whileElementsMounted:re,onClose:se,onOpen:ae}={})=>{const g=s.useId(),p=s.useRef(null),d=s.useRef(void 0),h=s.useRef(void 0),{open:n,onClose:K,onOpen:G}=Q({defaultOpen:F,open:Y,onClose:se,onOpen:ae}),{getPopperProps:U,getReferenceProps:X}=Ce({autoUpdate:t,elements:R,flip:A,gutter:E,matchWidth:W,middleware:w,offset:L,open:n,placement:$,platform:ee,preventOverflow:te,strategy:oe,transform:ne,whileElementsMounted:re}),m=s.useCallback(()=>{h.current&&(clearTimeout(h.current),h.current=void 0),K()},[K]),C=s.useCallback(()=>{!f&&!d.current&&(n&&m(),d.current=Z(p.current).setTimeout(G,_))},[f,n,m,G,_]),a=s.useCallback(()=>{d.current&&(clearTimeout(d.current),d.current=void 0),h.current=Z(p.current).setTimeout(()=>{m()},l)},[l,m]);N(()=>J(p.current),"keydown",({key:c})=>{T&&c==="Escape"&&a()}),N(()=>J(p.current),"scroll",()=>{n&&P&&m()}),ge({ref:p,enabled:n,handler:()=>{a()}}),pe(()=>{clearTimeout(d.current),clearTimeout(h.current)});const ce=s.useCallback(({"aria-describedby":c,...i}={})=>X({...i,ref:me(i.ref,p),"aria-describedby":de(c,n?g:void 0),onBlur:x(i.onBlur,a),onClick:x(i.onClick,u?a:void 0),onFocus:x(i.onFocus,C),onPointerEnter:x(i.onPointerEnter,I=>{I.pointerType!=="touch"&&C()}),onPointerLeave:x(i.onPointerLeave,I=>{I.pointerType!=="touch"&&a()})}),[X,g,C,n,u,a]),ie=s.useCallback(c=>U(c),[U]),le=s.useCallback((c={})=>({id:g,"data-close":q(!n),"data-open":q(n),role:"tooltip",onPointerLeave:x(c.onPointerLeave,a),...c}),[g,a,n]);return{open:n,getContentProps:le,getPositionerProps:ie,getTriggerProps:ce,onClose:m,onDelayClose:a,onDelayOpen:C,onOpen:G}},{StyleContext:be,withContext:z,useRootComponentProps:ye}=xe("tooltip",ve),o=t=>{const[l,{animationScheme:u="scale",children:T,content:P,duration:F=.1,contentProps:f,portalProps:R,...A}]=ye(t),{open:E,getContentProps:W,getPositionerProps:w,getTriggerProps:L}=Be(A);return P?e.jsxs(be,{value:l,children:[e.jsx(Oe,{asChild:!0,...L(),children:T}),e.jsx(he,{children:E?e.jsx(Te,{...R,children:e.jsx(Se,{...w(),children:e.jsx(De,{...je(u,F),...M(W(M(f))),children:P})})}):null})]}):T},Se=z("div","positioner")(),Oe=z("button","trigger")(),De=z(Pe.div,"content")(),Je={component:o,parameters:{layout:"centered"},title:"Components / Tooltip"},j=()=>e.jsx(o,{content:"へっ！きたねぇ花火だ",children:e.jsx(r,{children:"Please Hover"})}),v=()=>e.jsx(o,{content:"へっ！きたねぇ花火だ",duration:.7,children:e.jsx(r,{children:"Please Hover"})}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{content:"へっ！きたねぇ花火だ",openDelay:1e3,placement:"start",children:e.jsx(r,{children:"Delay Open 1000ms"})}),e.jsx(o,{closeDelay:1e3,content:"へっ！きたねぇ花火だ",placement:"end",children:e.jsx(r,{children:"Delay Close 1000ms"})})]}),b=()=>e.jsx(o,{content:"へっ！きたねぇ花火だ",offset:[16,16],children:e.jsx(r,{children:"Please Hover"})}),y=()=>e.jsx(o,{content:"へっ！きたねぇ花火だ",gutter:32,children:e.jsx(r,{children:"Please Hover"})}),S=()=>e.jsx(V,{each:["scale","block-end","inline-start","inline-end","block-start"],children:t=>e.jsx(o,{animationScheme:t,content:"へっ！きたねぇ花火だ",children:e.jsxs(r,{minW:"xs",children:['Open "',t,'" Tooltip']})},t)}),O=()=>e.jsx(V,{each:["start","start-start","start-end","start-center","end","end-start","end-end","end-center","center-start","center-end"],children:t=>e.jsx(o,{content:"へっ！きたねぇ花火だ",placement:t,children:e.jsxs(r,{minW:"xs",children:['Open "',fe(t),'" Tooltip']})},t)}),D=()=>e.jsx(o,{content:"へっ！きたねぇ花火だ",disabled:!0,children:e.jsx(r,{children:"Please Hover"})}),k=()=>e.jsx(o,{content:"へっ！きたねぇ花火だ",open:!0,children:e.jsx(r,{children:"Please Hover"})}),H=()=>{const{open:t,onClose:l,onOpen:u}=Q();return e.jsx(o,{content:"へっ！きたねぇ花火だ",open:t,onClose:l,onOpen:u,children:e.jsx(r,{children:"Please Hover"})})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ">
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Tooltip content="へっ！きたねぇ花火だ" openDelay={1000} placement="start">
        <Button>Delay Open 1000ms</Button>
      </Tooltip>

      <Tooltip closeDelay={1000} content="へっ！きたねぇ花火だ" placement="end">
        <Button>Delay Close 1000ms</Button>
      </Tooltip>
    </>;
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <For each={["scale", "block-end", "inline-start", "inline-end", "block-start"] as const}>
      {animationScheme => <Tooltip key={animationScheme} animationScheme={animationScheme} content="へっ！きたねぇ花火だ">
          <Button minW="xs">Open "{animationScheme}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <For each={["start", "start-start", "start-end", "start-center", "end", "end-start", "end-end", "end-center", "center-start", "center-end"] as const}>
      {placement => <Tooltip key={placement} content="へっ！きたねぇ花火だ" placement={placement}>
          <Button minW="xs">Open "{toTitleCase(placement)}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...O.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" disabled>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" open>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...k.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <Tooltip content="へっ！きたねぇ花火だ" open={open} onClose={onClose} onOpen={onOpen}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...H.parameters?.docs?.source}}};const Me=["Basic","Duration","Delay","Offset","Gutter","AnimationScheme","Placement","Disabled","AlwaysOpen","CustomControl"];export{k as AlwaysOpen,S as AnimationScheme,j as Basic,H as CustomControl,B as Delay,D as Disabled,v as Duration,y as Gutter,b as Offset,O as Placement,Me as __namedExportsOrder,Je as default};
