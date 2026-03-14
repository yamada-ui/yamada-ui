import{j as e,r as s,T as j}from"./iframe-BkSt7vyM.js";import{P as g}from"./props-table-DN3lVgaW.js";import{T as v}from"./tooltip-UhrPCmiX.js";import{A as r,a as T,b as R,c as b}from"./alpha-slider-BMwnF16M.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DmgtKOBh.js";import"./grid-item-DSqTnqMu.js";import"./for-B9rKCkzX.js";import"./flex-BpaptubY.js";import"./heading-CMTXcFtE.js";import"./tooltip.style-BRkwoWGL.js";import"./index-CB9iRcwt.js";import"./index-Dk4t8ny3.js";import"./index-G3pGnApJ.js";import"./use-disclosure-DqZ_Y564.js";import"./popover-aiBLjII_.js";import"./index-BE8qqd8C.js";import"./event-DbnRz7I2.js";import"./slide-fade-CO5jRw2H.js";import"./transition-ueJPs_PT.js";import"./fade-scale-k7Xft6J6.js";import"./index-CQxoNWT4.js";import"./use-breakpoint-40vW7z1m.js";import"./use-breakpoint-value-wrLKYw6K.js";import"./use-color-mode-value-ChW2w8QO.js";import"./color-swatch-CHsEEL_W.js";import"./hue-slider-BXiw1bFe.js";import"./hue-slider.style-wgCL7kgP.js";import"./index-DkKAZhFC.js";import"./slider-w7UO35n6.js";import"./index-DPd3oLzm.js";import"./use-field-props-BWH9WIm0.js";import"./number-CcP_arM8.js";const ne={component:r,title:"Components / AlphaSlider"},n=()=>e.jsx(r,{color:"#775999",defaultValue:.5}),l=()=>e.jsx(g,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>e.jsx(r,{size:o,color:"#775999",defaultValue:.5},t)}),u=()=>e.jsx(r,{color:"#775999",defaultValue:.7}),c=()=>e.jsx(r,{color:"#775999",defaultValue:.5,max:.75,min:.25}),p=()=>e.jsx(r,{color:"#775999",defaultValue:.5,h:"xs",orientation:"vertical"}),i=()=>e.jsx(g,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>e.jsx(r,{color:"#775999",defaultValue:.5,shape:o},t)}),d=()=>e.jsx(r,{color:"#775999",defaultValue:.5,step:.1}),m=()=>e.jsx(r,{color:"#775999",defaultValue:.5,disabled:!0}),h=()=>e.jsx(r,{color:"#775999",defaultValue:.5,readOnly:!0}),S=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o,children:e.jsxs(T,{children:[e.jsx(v,{content:a,children:e.jsx(R,{})}),e.jsx(b,{})]})})},V=()=>{const[a,o]=s.useState(.5),[t,f]=s.useState(.5),[A,C]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["Value: ",a,", Start Value: ",t,", End Value: ",A]}),e.jsx(r,{color:"#775999",value:a,onChange:o,onChangeEnd:C,onChangeStart:f})]})},x=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
