import{j as e,Q as n,P as N}from"./iframe-BIJNUwA0.js";import{T as t}from"./tooltip-FACDsEh0.js";import{F as K}from"./for-Cpsr9B86.js";import{u as U}from"./use-disclosure-KG3Tkn8D.js";import"./preload-helper-C1FmrZbK.js";import"./index-DuRkUgur.js";import"./index-DF1hckNC.js";import"./popover-jNju79ux.js";import"./index-DwGXzMKJ.js";import"./event-DxtLmc2X.js";import"./slide-fade-DFdWy2yx.js";import"./transition-eNdZvkov.js";import"./fade-scale-BNxSC7mp.js";const le={component:t,parameters:{layout:"centered"},title:"Components / Tooltip"},r=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",children:e.jsx(n,{children:"Please Hover"})}),s=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",duration:.7,children:e.jsx(n,{children:"Please Hover"})}),a=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{content:"へっ！きたねぇ花火だ",openDelay:1e3,placement:"start",children:e.jsx(n,{children:"Delay Open 1000ms"})}),e.jsx(t,{closeDelay:1e3,content:"へっ！きたねぇ花火だ",placement:"end",children:e.jsx(n,{children:"Delay Close 1000ms"})})]}),c=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",offset:[16,16],children:e.jsx(n,{children:"Please Hover"})}),l=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",gutter:32,children:e.jsx(n,{children:"Please Hover"})}),i=()=>e.jsx(K,{each:["scale","block-end","inline-start","inline-end","block-start"],children:o=>e.jsx(t,{animationScheme:o,content:"へっ！きたねぇ花火だ",children:e.jsxs(n,{minW:"xs",children:['Open "',o,'" Tooltip']})},o)}),p=()=>e.jsx(K,{each:["start","start-start","start-end","start-center","end","end-start","end-end","end-center","center-start","center-end"],children:o=>e.jsx(t,{content:"へっ！きたねぇ花火だ",placement:o,children:e.jsxs(n,{minW:"xs",children:['Open "',N(o),'" Tooltip']})},o)}),m=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",disabled:!0,children:e.jsx(n,{children:"Please Hover"})}),u=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",open:!0,children:e.jsx(n,{children:"Please Hover"})}),d=()=>{const{open:o,onClose:L,onOpen:M}=U();return e.jsx(t,{content:"へっ！きたねぇ花火だ",open:o,onClose:L,onOpen:M,children:e.jsx(n,{children:"Please Hover"})})};var h,x,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ">
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var j,B,P;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(P=(B=s.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var D,y,O;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <Tooltip content="へっ！きたねぇ花火だ" openDelay={1000} placement="start">
        <Button>Delay Open 1000ms</Button>
      </Tooltip>

      <Tooltip closeDelay={1000} content="へっ！きたねぇ花火だ" placement="end">
        <Button>Delay Close 1000ms</Button>
      </Tooltip>
    </>;
}`,...(O=(y=a.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var S,v,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(H=(v=c.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var f,g,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,F,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <For each={["scale", "block-end", "inline-start", "inline-end", "block-start"] as const}>
      {animationScheme => <Tooltip key={animationScheme} animationScheme={animationScheme} content="へっ！きたねぇ花火だ">
          <Button minW="xs">Open "{animationScheme}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var A,W,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <For each={["start", "start-start", "start-end", "start-center", "end", "end-start", "end-end", "end-center", "center-start", "center-end"] as const}>
      {placement => <Tooltip key={placement} content="へっ！きたねぇ花火だ" placement={placement}>
          <Button minW="xs">Open "{toTitleCase(placement)}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...(w=(W=p.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var E,G,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" disabled>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(_=(G=m.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var Q,R,q;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" open>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var z,I,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <Tooltip content="へっ！きたねぇ花火だ" open={open} onClose={onClose} onOpen={onOpen}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const ie=["Basic","Duration","Delay","Offset","Gutter","AnimationScheme","Placement","Disabled","AlwaysOpen","CustomControl"];export{u as AlwaysOpen,i as AnimationScheme,r as Basic,d as CustomControl,a as Delay,m as Disabled,s as Duration,l as Gutter,c as Offset,p as Placement,ie as __namedExportsOrder,le as default};
