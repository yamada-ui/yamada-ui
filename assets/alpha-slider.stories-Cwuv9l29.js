import{d as M,f as _,r as n,j as e,z as b,A as k,T as P}from"./iframe-BHpF9Anv.js";import{P as R}from"./props-table-BDseLMKU.js";import{T as D}from"./tooltip-BDF9OZkq.js";import{u as q}from"./index-HzxE17GX.js";import{c as B}from"./color-swatch-L5nx925n.js";import{H as W,a as $,b as F,c as G}from"./hue-slider-C_xAYV5z.js";import"./grid-ByedI7Nf.js";import"./grid-item-DEAolyKT.js";import"./for-ByLCT2H8.js";import"./flex-BfatBxpB.js";import"./heading-D9cNz4N2.js";import"./index-9k2c-L2q.js";import"./index-uWs6-cL2.js";import"./popover-arPXO97v.js";import"./index-B355vHar.js";import"./use-disclosure-CHHpwuWM.js";import"./event-DJ7sWu4h.js";import"./slide-fade-CtDoTTje.js";import"./transition-DhOBOn2b.js";import"./fade-scale-BaLclLqQ.js";import"./use-breakpoint-DjjBb8t0.js";import"./use-breakpoint-value-BjmteGR7.js";import"./use-color-mode-value-CuZcykHs.js";import"./slider-CgrijtHl.js";import"./index-CCUIVoeU.js";import"./use-field-props-B3xRWuJL.js";import"./number-CcP_arM8.js";const I=M({base:{root:{"--checkers-bg":["colors.whiteAlpha.500","colors.blackAlpha.500"],"--checkers-fg":["colors.blackAlpha.300","colors.whiteAlpha.300"]}}}),J=r=>`${r*100}%`,{ComponentContext:K,useComponentContext:L,withContext:A,withProvider:N}=_("alpha-slider",I),a=N(({children:r,color:o,max:t=1,min:s=0,orientation:c="horizontal",overlayProps:l,thumbProps:v,trackProps:T,...O})=>{const j=q(c),z=n.useMemo(()=>r||e.jsxs(w,{...T,children:[e.jsx(E,{...v}),e.jsx(y,{...l})]}),[r,l,v,T]),H=n.useMemo(()=>({color:o,max:t,min:s,orientation:j}),[o,s,t,j]);return e.jsx(K,{value:H,children:e.jsx(W,{max:t,min:s,orientation:j,...O,children:z})})},"root")({getAriaValueText:J,step:.01}),y=A(G,"overlay")(void 0,({layers:r,...o})=>{const{color:t,max:s,min:c,orientation:l}=L();return r??=[B,{bgGradient:`linear(${[l==="horizontal"?"to-r":"to-t",b(t)("hex")+k(c),b(t)("hex")+k(s)].join(", ")})`,boxShadow:"inner"}],{layers:r,...o}}),w=A($,"track")(),E=A(F,"thumb")(),Ae={component:a,title:"Components / AlphaSlider"},u=()=>e.jsx(a,{color:"#775999",defaultValue:.5}),i=()=>e.jsx(R,{variant:"stack",rows:["sm","md","lg"],children:(r,o,t)=>e.jsx(a,{size:o,color:"#775999",defaultValue:.5},t)}),p=()=>e.jsx(a,{color:"#775999",defaultValue:.7}),d=()=>e.jsx(a,{color:"#775999",defaultValue:.5,max:.75,min:.25}),m=()=>e.jsx(a,{color:"#775999",defaultValue:.5,h:"xs",orientation:"vertical"}),h=()=>e.jsx(R,{variant:"stack",rows:["circle","rounded","square"],children:(r,o,t)=>e.jsx(a,{color:"#775999",defaultValue:.5,shape:o},t)}),S=()=>e.jsx(a,{color:"#775999",defaultValue:.5,step:.1}),x=()=>e.jsx(a,{color:"#775999",defaultValue:.5,disabled:!0}),V=()=>e.jsx(a,{color:"#775999",defaultValue:.5,readOnly:!0}),g=()=>{const[r,o]=n.useState(.5);return e.jsx(a,{color:"#775999",value:r,onChange:o,children:e.jsxs(w,{children:[e.jsx(D,{content:r,children:e.jsx(E,{})}),e.jsx(y,{})]})})},C=()=>{const[r,o]=n.useState(.5),[t,s]=n.useState(.5),[c,l]=n.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:["Value: ",r,", Start Value: ",t,", End Value: ",c]}),e.jsx(a,{color:"#775999",value:r,onChange:o,onChangeEnd:l,onChangeStart:s})]})},f=()=>{const[r,o]=n.useState(.5);return e.jsx(a,{color:"#775999",value:r,onChange:o})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} />;
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} size={row} color="#775999" defaultValue={0.5} />;
    }}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.7} />;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} max={0.75} min={0.25} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} h="xs" orientation="vertical" />;
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} color="#775999" defaultValue={0.5} shape={row} />;
    }}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} step={0.1} />;
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} disabled />;
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} readOnly />;
}`,...V.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue}>
      <AlphaSlider.Track>
        <Tooltip content={value}>
          <AlphaSlider.Thumb />
        </Tooltip>

        <AlphaSlider.Overlay />
      </AlphaSlider.Track>
    </AlphaSlider.Root>;
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(0.5);
  const [startValue, onChangeStart] = useState(0.5);
  const [endValue, onChangeEnd] = useState(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <AlphaSlider.Root color="#775999" value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue} />;
}`,...f.parameters?.docs?.source}}};const ve=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","Readonly","ThumbWithTooltip","OnChange","CustomControl"];export{u as Basic,f as CustomControl,p as DefaultValue,x as Disabled,d as MinMax,C as OnChange,V as Readonly,h as Shape,i as Size,S as Step,g as ThumbWithTooltip,m as Vertical,ve as __namedExportsOrder,Ae as default};
