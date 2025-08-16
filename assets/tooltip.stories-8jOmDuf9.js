import{j as e,F as j}from"./iframe-DkaXVr_9.js";import{T as t}from"./tooltip-CfRp56is.js";import{B as n}from"./button-RXS8KHkm.js";import{F as h}from"./for-DxIEhtdT.js";import{u as B}from"./use-disclosure-CJrHhbAy.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CR4pI5Z8.js";import"./index-DTV67aQM.js";import"./popover-CTESSn84.js";import"./index-Cu9ztsMm.js";import"./event-EnOIk5Pv.js";import"./slide-fade-DZ4Yx26B.js";import"./index-3YgWOY-Y.js";import"./use-breakpoint-BTniZXuw.js";import"./use-breakpoint-value-CouZTxc7.js";import"./use-color-mode-value-x7SRIQlN.js";import"./transition-zrqlHNeF.js";import"./fade-scale-BTOYKWwc.js";import"./use-ripple-Conhq2CH.js";import"./rings-Dawgqh-Z.js";const q={component:t,parameters:{layout:"centered"},title:"Components / Tooltip"},r=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",children:e.jsx(n,{children:"Please Hover"})}),s=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",duration:.7,children:e.jsx(n,{children:"Please Hover"})}),a=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{content:"へっ！きたねぇ花火だ",openDelay:1e3,placement:"start",children:e.jsx(n,{children:"Delay Open 1000ms"})}),e.jsx(t,{closeDelay:1e3,content:"へっ！きたねぇ花火だ",placement:"end",children:e.jsx(n,{children:"Delay Close 1000ms"})})]}),c=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",offset:[16,16],children:e.jsx(n,{children:"Please Hover"})}),i=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",gutter:32,children:e.jsx(n,{children:"Please Hover"})}),l=()=>e.jsx(h,{each:["scale","block-end","inline-start","inline-end","block-start"],children:o=>e.jsx(t,{animationScheme:o,content:"へっ！きたねぇ花火だ",children:e.jsxs(n,{minW:"xs",children:['Open "',o,'" Tooltip']})},o)}),p=()=>e.jsx(h,{each:["start","start-start","start-end","start-center","end","end-start","end-end","end-center","center-start","center-end"],children:o=>e.jsx(t,{content:"へっ！きたねぇ花火だ",placement:o,children:e.jsxs(n,{minW:"xs",children:['Open "',j(o),'" Tooltip']})},o)}),m=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",disabled:!0,children:e.jsx(n,{children:"Please Hover"})}),u=()=>e.jsx(t,{content:"へっ！きたねぇ花火だ",open:!0,children:e.jsx(n,{children:"Please Hover"})}),d=()=>{const{open:o,onClose:x,onOpen:T}=B();return e.jsx(t,{content:"へっ！きたねぇ花火だ",open:o,onClose:x,onOpen:T,children:e.jsx(n,{children:"Please Hover"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ">
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Tooltip content="へっ！きたねぇ花火だ" openDelay={1000} placement="start">
        <Button>Delay Open 1000ms</Button>
      </Tooltip>

      <Tooltip closeDelay={1000} content="へっ！きたねぇ花火だ" placement="end">
        <Button>Delay Close 1000ms</Button>
      </Tooltip>
    </>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <For each={["scale", "block-end", "inline-start", "inline-end", "block-start"] as const}>
      {animationScheme => <Tooltip key={animationScheme} animationScheme={animationScheme} content="へっ！きたねぇ花火だ">
          <Button minW="xs">Open "{animationScheme}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <For each={["start", "start-start", "start-end", "start-center", "end", "end-start", "end-end", "end-center", "center-start", "center-end"] as const}>
      {placement => <Tooltip key={placement} content="へっ！きたねぇ花火だ" placement={placement}>
          <Button minW="xs">Open "{toTitleCase(placement)}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" disabled>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" open>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <Tooltip content="へっ！きたねぇ花火だ" open={open} onClose={onClose} onOpen={onOpen}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...d.parameters?.docs?.source}}};const z=["Basic","Duration","Delay","Offset","Gutter","AnimationScheme","Placement","Disabled","AlwaysOpen","CustomControl"];export{u as AlwaysOpen,l as AnimationScheme,r as Basic,d as CustomControl,a as Delay,m as Disabled,s as Duration,i as Gutter,c as Offset,p as Placement,z as __namedExportsOrder,q as default};
