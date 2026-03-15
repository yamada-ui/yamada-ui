import{j as e,r as s,T as j}from"./iframe-BYxWTAfU.js";import{P as g}from"./props-table-Bo4bQ_jN.js";import{T as v}from"./tooltip-D9kKkivx.js";import{A as r,a as T,b as R,c as b}from"./alpha-slider-BrKMtMgR.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./for-CEjldjdR.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./tooltip.style-BdUKuCry.js";import"./index-YpudMcFq.js";import"./index-DYOvjMtg.js";import"./index-Dy2r_i0E.js";import"./use-disclosure-C0vorEpB.js";import"./popover-Cubfr-96.js";import"./index-BpTwJ2WF.js";import"./event-B-4KAdct.js";import"./slide-fade-DC4ET5n-.js";import"./transition-C-yjts3n.js";import"./fade-scale-B-5sB1L1.js";import"./index-sjTZ4rnq.js";import"./use-breakpoint-Co1erXvx.js";import"./use-breakpoint-value-DJioUp1E.js";import"./use-color-mode-value-DaTIAf89.js";import"./color-swatch-XIMzg4Un.js";import"./hue-slider-TANBI1u8.js";import"./hue-slider.style-CGhBO2dt.js";import"./index-BbwJJFrk.js";import"./slider-w6LWKo0h.js";import"./index-ChSCjdDN.js";import"./use-field-props-DU62N9XW.js";import"./number-CcP_arM8.js";const ne={component:r,title:"Components / AlphaSlider"},n=()=>e.jsx(r,{color:"#775999",defaultValue:.5}),l=()=>e.jsx(g,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>e.jsx(r,{size:o,color:"#775999",defaultValue:.5},t)}),u=()=>e.jsx(r,{color:"#775999",defaultValue:.7}),c=()=>e.jsx(r,{color:"#775999",defaultValue:.5,max:.75,min:.25}),p=()=>e.jsx(r,{color:"#775999",defaultValue:.5,h:"xs",orientation:"vertical"}),i=()=>e.jsx(g,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>e.jsx(r,{color:"#775999",defaultValue:.5,shape:o},t)}),d=()=>e.jsx(r,{color:"#775999",defaultValue:.5,step:.1}),m=()=>e.jsx(r,{color:"#775999",defaultValue:.5,disabled:!0}),h=()=>e.jsx(r,{color:"#775999",defaultValue:.5,readOnly:!0}),S=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o,children:e.jsxs(T,{children:[e.jsx(v,{content:a,children:e.jsx(R,{})}),e.jsx(b,{})]})})},V=()=>{const[a,o]=s.useState(.5),[t,f]=s.useState(.5),[A,C]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["Value: ",a,", Start Value: ",t,", End Value: ",A]}),e.jsx(r,{color:"#775999",value:a,onChange:o,onChangeEnd:C,onChangeStart:f})]})},x=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} />;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} size={row} color="#775999" defaultValue={0.5} />;
    }}
    </PropsTable>;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.7} />;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} max={0.75} min={0.25} />;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} h="xs" orientation="vertical" />;
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} color="#775999" defaultValue={0.5} shape={row} />;
    }}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} step={0.1} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} disabled />;
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} readOnly />;
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue}>
      <AlphaSlider.Track>
        <Tooltip content={value}>
          <AlphaSlider.Thumb />
        </Tooltip>

        <AlphaSlider.Overlay />
      </AlphaSlider.Track>
    </AlphaSlider.Root>;
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(0.5);
  const [startValue, onChangeStart] = useState(0.5);
  const [endValue, onChangeEnd] = useState(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <AlphaSlider.Root color="#775999" value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue} />;
}`,...x.parameters?.docs?.source}}};const le=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,x as CustomControl,u as DefaultValue,m as Disabled,c as MinMax,V as OnChange,h as ReadOnly,i as Shape,l as Size,d as Step,S as ThumbWithTooltip,p as Vertical,le as __namedExportsOrder,ne as default};
