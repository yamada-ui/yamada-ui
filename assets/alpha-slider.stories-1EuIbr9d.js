import{j as e,r as s,T as j}from"./iframe-5QspZtQ-.js";import{P as g}from"./props-table-DAC1ISVp.js";import{T as v}from"./tooltip-C0FnohSc.js";import{A as r,a as T,b as R,c as b}from"./alpha-slider-C8hV3qyo.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./for-DDltKb5N.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";import"./index-Dfw32jWo.js";import"./index-BspX3WcN.js";import"./popover-D5GdWkkL.js";import"./index-CcMovKZO.js";import"./use-disclosure-CLRLHuYp.js";import"./event-DtO76Igx.js";import"./slide-fade-BN9Loi7b.js";import"./transition-kYsA6Bti.js";import"./fade-scale-BMcVdBGu.js";import"./index-BYvBzSg1.js";import"./use-breakpoint-chaUVSrh.js";import"./use-breakpoint-value-zlcrtcvs.js";import"./use-color-mode-value-BafFs7oa.js";import"./color-swatch-DYs2Z_QB.js";import"./hue-slider-kuNYeN5Y.js";import"./hue-slider.style-CAC2EayW.js";import"./index-BJGMorFZ.js";import"./slider-_CG56C_u.js";import"./index-xocwRrSJ.js";import"./use-field-props-BSPmBEwJ.js";import"./number-CcP_arM8.js";const te={component:r,title:"Components / AlphaSlider"},n=()=>e.jsx(r,{color:"#775999",defaultValue:.5}),l=()=>e.jsx(g,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>e.jsx(r,{size:o,color:"#775999",defaultValue:.5},t)}),u=()=>e.jsx(r,{color:"#775999",defaultValue:.7}),c=()=>e.jsx(r,{color:"#775999",defaultValue:.5,max:.75,min:.25}),p=()=>e.jsx(r,{color:"#775999",defaultValue:.5,h:"xs",orientation:"vertical"}),i=()=>e.jsx(g,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>e.jsx(r,{color:"#775999",defaultValue:.5,shape:o},t)}),d=()=>e.jsx(r,{color:"#775999",defaultValue:.5,step:.1}),m=()=>e.jsx(r,{color:"#775999",defaultValue:.5,disabled:!0}),h=()=>e.jsx(r,{color:"#775999",defaultValue:.5,readOnly:!0}),S=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o,children:e.jsxs(T,{children:[e.jsx(v,{content:a,children:e.jsx(R,{})}),e.jsx(b,{})]})})},V=()=>{const[a,o]=s.useState(.5),[t,f]=s.useState(.5),[A,C]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["Value: ",a,", Start Value: ",t,", End Value: ",A]}),e.jsx(r,{color:"#775999",value:a,onChange:o,onChangeEnd:C,onChangeStart:f})]})},x=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};const se=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,x as CustomControl,u as DefaultValue,m as Disabled,c as MinMax,V as OnChange,h as ReadOnly,i as Shape,l as Size,d as Step,S as ThumbWithTooltip,p as Vertical,se as __namedExportsOrder,te as default};
