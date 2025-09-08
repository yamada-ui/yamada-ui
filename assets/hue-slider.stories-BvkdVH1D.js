import{j as e,r as s,T as j}from"./iframe-6Bjnmk15.js";import{P as g}from"./props-table-ols_EFU2.js";import{T as v}from"./tooltip-HKNRtgkB.js";import{H as r,a as T,b as R,c as b}from"./hue-slider-BVMSog0x.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BOPRDfru.js";import"./grid-item-b6_EoPjA.js";import"./for-DmT075i_.js";import"./flex-DoVac8e8.js";import"./heading-OelD6mpu.js";import"./index-CX0CAc80.js";import"./index-BSp_bLS_.js";import"./popover-D9A3-tl8.js";import"./index-DUawkkKk.js";import"./use-disclosure-2VLKsv7H.js";import"./event-XJrGbvyU.js";import"./slide-fade-Du8ZD4Kp.js";import"./index-DRWHxUSc.js";import"./use-breakpoint-Dh_Zsenw.js";import"./use-breakpoint-value-DpYoCjbb.js";import"./use-color-mode-value-CCXFyZ78.js";import"./transition-DHxJDoY-.js";import"./fade-scale-Dp_7G10W.js";import"./slider-B2Rbw4Yx.js";import"./index-BYjVelZx.js";import"./use-field-props-CJllY30F.js";import"./number-CcP_arM8.js";const ee={component:r,title:"Components / HueSlider"},n=()=>e.jsx(r,{defaultValue:180}),u=()=>e.jsx(g,{variant:"stack",rows:["sm","md","lg"],children:(a,t,o)=>e.jsx(r,{size:t,defaultValue:180},o)}),l=()=>e.jsx(r,{defaultValue:270}),c=()=>e.jsx(r,{defaultValue:300,max:360,min:270}),i=()=>e.jsx(r,{defaultValue:180,h:"xs",orientation:"vertical"}),d=()=>e.jsx(g,{variant:"stack",rows:["circle","rounded","square"],children:(a,t,o)=>e.jsx(r,{defaultValue:180,shape:t},o)}),m=()=>e.jsx(r,{defaultValue:180,step:10}),p=()=>e.jsx(r,{defaultValue:180,disabled:!0}),S=()=>e.jsx(r,{defaultValue:180,readOnly:!0}),V=()=>{const[a,t]=s.useState(50);return e.jsx(r,{value:a,onChange:t,children:e.jsxs(T,{children:[e.jsx(v,{content:a,children:e.jsx(R,{})}),e.jsx(b,{})]})})},h=()=>{const[a,t]=s.useState(180),[o,f]=s.useState(180),[C,H]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["Value: ",a,", Start Value: ",o,", End Value: ",C]}),e.jsx(r,{value:a,onChange:t,onChangeEnd:H,onChangeStart:f})]})},x=()=>{const[a,t]=s.useState(180);return e.jsx(r,{value:a,onChange:t})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} />;
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} size={row} defaultValue={180} />;
    }}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={270} />;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={300} max={360} min={270} />;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} h="xs" orientation="vertical" />;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} defaultValue={180} shape={row} />;
    }}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} step={10} />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} disabled />;
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} readOnly />;
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <HueSlider.Root value={value} onChange={setValue}>
      <HueSlider.Track>
        <Tooltip content={value}>
          <HueSlider.Thumb />
        </Tooltip>

        <HueSlider.Overlay />
      </HueSlider.Track>
    </HueSlider.Root>;
}`,...V.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(180);
  const [startValue, onChangeStart] = useState(180);
  const [endValue, onChangeEnd] = useState(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <HueSlider.Root value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(180);
  return <HueSlider.Root value={value} onChange={setValue} />;
}`,...x.parameters?.docs?.source}}};const re=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,x as CustomControl,l as DefaultValue,p as Disabled,c as MinMax,h as OnChange,S as ReadOnly,d as Shape,u as Size,m as Step,V as ThumbWithTooltip,i as Vertical,re as __namedExportsOrder,ee as default};
