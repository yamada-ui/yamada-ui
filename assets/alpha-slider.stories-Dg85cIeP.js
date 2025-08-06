import{d as M,f as _,r as n,j as e,w as b,x as k,T as P}from"./iframe-BVYXOt_x.js";import{P as R}from"./props-table-CIRWgUZF.js";import{T as D}from"./tooltip-CgPPCa_p.js";import{u as q}from"./index-D8jR06a4.js";import{c as B}from"./color-swatch-BQEXL8KU.js";import{H as W,a as $,b as F,c as G}from"./hue-slider-BTtGYpvJ.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-9LY9Mmql.js";import"./grid-item-CdNZxFgP.js";import"./for-Cq1AI6gw.js";import"./flex-DrgWVwNM.js";import"./heading-BUA-B32m.js";import"./index-3IyU_3IU.js";import"./index-C-UgCYOb.js";import"./popover-Ds5KodhE.js";import"./index--MW3SftU.js";import"./use-disclosure-D_7SB-7u.js";import"./event-DyjLztTn.js";import"./slide-fade-CMARcYba.js";import"./transition-BHsmQMz4.js";import"./fade-scale-DoL0lHvI.js";import"./use-breakpoint-CAqBpJlJ.js";import"./use-breakpoint-value-Bh-BKcFh.js";import"./use-color-mode-value-Bkhxg2Cu.js";import"./slider-ZjcsOo0H.js";import"./index-DtmV-tx0.js";import"./use-field-props-9_1XvYE_.js";import"./number-CcP_arM8.js";const I=M({base:{root:{"--checkers-bg":["colors.whiteAlpha.500","colors.blackAlpha.500"],"--checkers-fg":["colors.blackAlpha.300","colors.whiteAlpha.300"]}}}),J=r=>`${r*100}%`,{ComponentContext:K,useComponentContext:L,withContext:v,withProvider:N}=_("alpha-slider",I),a=N(({children:r,color:o,max:t=1,min:s=0,orientation:c="horizontal",overlayProps:l,thumbProps:A,trackProps:T,...O})=>{const j=q(c),z=n.useMemo(()=>r||e.jsxs(y,{...T,children:[e.jsx(E,{...A}),e.jsx(w,{...l})]}),[r,l,A,T]),H=n.useMemo(()=>({color:o,max:t,min:s,orientation:j}),[o,s,t,j]);return e.jsx(K,{value:H,children:e.jsx(W,{max:t,min:s,orientation:j,...O,children:z})})},"root")({getAriaValueText:J,step:.01}),w=v(G,"overlay")(void 0,({layers:r,...o})=>{const{color:t,max:s,min:c,orientation:l}=L();return r??=[B,{bgGradient:`linear(${[l==="horizontal"?"to-r":"to-t",b(t)("hex")+k(c),b(t)("hex")+k(s)].join(", ")})`,boxShadow:"inner"}],{layers:r,...o}}),y=v($,"track")(),E=v(F,"thumb")(),Ae={component:a,title:"Components / AlphaSlider"},u=()=>e.jsx(a,{color:"#775999",defaultValue:.5}),i=()=>e.jsx(R,{variant:"stack",rows:["sm","md","lg"],children:(r,o,t)=>e.jsx(a,{size:o,color:"#775999",defaultValue:.5},t)}),p=()=>e.jsx(a,{color:"#775999",defaultValue:.7}),d=()=>e.jsx(a,{color:"#775999",defaultValue:.5,max:.75,min:.25}),m=()=>e.jsx(a,{color:"#775999",defaultValue:.5,h:"xs",orientation:"vertical"}),h=()=>e.jsx(R,{variant:"stack",rows:["circle","rounded","square"],children:(r,o,t)=>e.jsx(a,{color:"#775999",defaultValue:.5,shape:o},t)}),S=()=>e.jsx(a,{color:"#775999",defaultValue:.5,step:.1}),x=()=>e.jsx(a,{color:"#775999",defaultValue:.5,disabled:!0}),V=()=>e.jsx(a,{color:"#775999",defaultValue:.5,readOnly:!0}),g=()=>{const[r,o]=n.useState(.5);return e.jsx(a,{color:"#775999",value:r,onChange:o,children:e.jsxs(y,{children:[e.jsx(D,{content:r,children:e.jsx(E,{})}),e.jsx(w,{})]})})},C=()=>{const[r,o]=n.useState(.5),[t,s]=n.useState(.5),[c,l]=n.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{children:["Value: ",r,", Start Value: ",t,", End Value: ",c]}),e.jsx(a,{color:"#775999",value:r,onChange:o,onChangeEnd:l,onChangeStart:s})]})},f=()=>{const[r,o]=n.useState(.5);return e.jsx(a,{color:"#775999",value:r,onChange:o})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};const Te=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","Readonly","ThumbWithTooltip","OnChange","CustomControl"];export{u as Basic,f as CustomControl,p as DefaultValue,x as Disabled,d as MinMax,C as OnChange,V as Readonly,h as Shape,i as Size,S as Step,g as ThumbWithTooltip,m as Vertical,Te as __namedExportsOrder,Ae as default};
