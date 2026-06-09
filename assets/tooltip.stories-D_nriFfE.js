import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Fa as n,Gc as r,Lv as i,Pa as a,Pd as o,Wc as s,hp as c,qd as l,wv as u,yp as d}from"./iframe-CM6ym36p.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{c(),u(),o(),a(),r(),f=t(),p={component:s,parameters:{layout:`centered`},title:`Components / Tooltip`},m=()=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,children:(0,f.jsx)(l,{children:`Please Hover`})}),h=()=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,duration:.7,children:(0,f.jsx)(l,{children:`Please Hover`})}),g=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,openDelay:1e3,placement:`start`,children:(0,f.jsx)(l,{children:`Delay Open 1000ms`})}),(0,f.jsx)(s,{closeDelay:1e3,content:`へっ！きたねぇ花火だ`,placement:`end`,children:(0,f.jsx)(l,{children:`Delay Close 1000ms`})})]}),_=()=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,offset:[16,16],children:(0,f.jsx)(l,{children:`Please Hover`})}),v=()=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,gutter:32,children:(0,f.jsx)(l,{children:`Please Hover`})}),y=()=>(0,f.jsx)(n,{each:[`scale`,`block-end`,`inline-start`,`inline-end`,`block-start`],children:e=>(0,f.jsx)(s,{animationScheme:e,content:`へっ！きたねぇ花火だ`,children:(0,f.jsxs)(l,{minW:`xs`,children:[`Open "`,e,`" Tooltip`]})},e)}),b=()=>(0,f.jsx)(n,{each:[`start`,`start-start`,`start-end`,`start-center`,`end`,`end-start`,`end-end`,`end-center`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`],children:e=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,placement:e,children:(0,f.jsxs)(l,{minW:`xs`,children:[`Open "`,i(e),`" Tooltip`]})},e)}),x=()=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,disabled:!0,children:(0,f.jsx)(l,{children:`Please Hover`})}),S=()=>(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,open:!0,children:(0,f.jsx)(l,{children:`Please Hover`})}),C=()=>{let{open:e,onClose:t,onOpen:n}=d();return(0,f.jsx)(s,{content:`へっ！きたねぇ花火だ`,open:e,onClose:t,onOpen:n,children:(0,f.jsx)(l,{children:`Please Hover`})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ">
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Tooltip content="へっ！きたねぇ花火だ" openDelay={1000} placement="start">
        <Button>Delay Open 1000ms</Button>
      </Tooltip>

      <Tooltip closeDelay={1000} content="へっ！きたねぇ花火だ" placement="end">
        <Button>Delay Close 1000ms</Button>
      </Tooltip>
    </>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <For each={["scale", "block-end", "inline-start", "inline-end", "block-start"] as const}>
      {animationScheme => <Tooltip key={animationScheme} animationScheme={animationScheme} content="へっ！きたねぇ花火だ">
          <Button minW="xs">Open "{animationScheme}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <For each={["start", "start-start", "start-end", "start-center", "end", "end-start", "end-end", "end-center", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end"] as const}>
      {placement => <Tooltip key={placement} content="へっ！きたねぇ花火だ" placement={placement}>
          <Button minW="xs">Open "{toTitleCase(placement)}" Tooltip</Button>
        </Tooltip>}
    </For>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" disabled>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Tooltip content="へっ！きたねぇ花火だ" open>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <Tooltip content="へっ！きたねぇ花火だ" open={open} onClose={onClose} onOpen={onOpen}>
      <Button>Please Hover</Button>
    </Tooltip>;
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`Duration`,`Delay`,`Offset`,`Gutter`,`AnimationScheme`,`Placement`,`Disabled`,`AlwaysOpen`,`CustomControl`]}))();export{S as AlwaysOpen,y as AnimationScheme,m as Basic,C as CustomControl,g as Delay,x as Disabled,h as Duration,v as Gutter,_ as Offset,b as Placement,w as __namedExportsOrder,p as default};