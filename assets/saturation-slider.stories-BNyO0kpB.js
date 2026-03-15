import{j as e,r as o,T as f}from"./iframe-BYxWTAfU.js";import{P as V}from"./props-table-Bo4bQ_jN.js";import{T}from"./tooltip-D9kKkivx.js";import{S as a,a as W,b as v}from"./saturation-slider-DMnm2UHi.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./for-CEjldjdR.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./tooltip.style-BdUKuCry.js";import"./index-YpudMcFq.js";import"./index-DYOvjMtg.js";import"./index-Dy2r_i0E.js";import"./use-disclosure-C0vorEpB.js";import"./popover-Cubfr-96.js";import"./index-BpTwJ2WF.js";import"./event-B-4KAdct.js";import"./slide-fade-DC4ET5n-.js";import"./transition-C-yjts3n.js";import"./fade-scale-B-5sB1L1.js";import"./hue-slider.style-CGhBO2dt.js";import"./index-BbwJJFrk.js";import"./index-ChSCjdDN.js";import"./use-field-props-DU62N9XW.js";import"./number-CcP_arM8.js";const X={component:a,title:"Components / SaturationSlider"},n=()=>e.jsx(a,{maxW:"sm"}),u=()=>e.jsx(V,{variant:"stack",rows:["sm","md","lg"],children:(r,t,s)=>e.jsx(a,{size:t,maxW:"sm"},s)}),m=()=>e.jsx(a,{defaultValue:[120,.33,.33],maxW:"sm"}),i=()=>e.jsx(V,{variant:"stack",rows:["circle","rounded","square"],children:(r,t,s)=>e.jsx(a,{defaultValue:[120,.33,.33],maxW:"sm",shape:t},s)}),l=()=>e.jsx(a,{maxW:"sm",step:.1}),c=()=>e.jsx(a,{disabled:!0,maxW:"sm"}),d=()=>e.jsx(a,{maxW:"sm",readOnly:!0}),p=()=>{const[r,t]=o.useState([120,.33,.33]),s=`${r[0]}°`,x=`${Math.round(r[1]*100)}%`,g=`${Math.round(r[2]*100)}%`;return e.jsx(a,{maxW:"sm",value:r,onChange:t,children:e.jsx(W,{children:e.jsx(T,{content:`${s}, ${x}, ${g}`,children:e.jsx(v,{})})})})},S=()=>{const r=[120,.33,.33],[t,s]=o.useState(r),[x,g]=o.useState(r),[b,C]=o.useState(r);return e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:["Value: ",JSON.stringify(t),", Start Value:"," ",JSON.stringify(x),", End Value: ",JSON.stringify(b)]}),e.jsx(a,{maxW:"sm",value:t,onChange:s,onChangeEnd:C,onChangeStart:g})]})},h=()=>{const[r,t]=o.useState([120,.33,.33]);return e.jsx(a,{maxW:"sm",value:r,onChange:t})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" />;
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} size={row} maxW="sm" />;
    }}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root defaultValue={[120, 0.33, 0.33]} maxW="sm" />;
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} defaultValue={[120, 0.33, 0.33]} maxW="sm" shape={row} />;
    }}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" step={0.1} />;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root disabled maxW="sm" />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" readOnly />;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);\n  const hue = `${value[0]}°`;\n  const saturation = `${Math.round(value[1] * 100)}%`;\n  const brightness = `${Math.round(value[2] * 100)}%`;\n  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue}>\n      <SaturationSlider.Track>\n        <Tooltip content={`${hue}, ${saturation}, ${brightness}`}>\n          <SaturationSlider.Thumb />\n        </Tooltip>\n      </SaturationSlider.Track>\n    </SaturationSlider.Root>;\n}',...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const defaultValue: [number, number, number] = [120, 0.33, 0.33];
  const [value, onChange] = useState(defaultValue);
  const [startValue, onChangeStart] = useState(defaultValue);
  const [endValue, onChangeEnd] = useState(defaultValue);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, Start Value:{" "}
        {JSON.stringify(startValue)}, End Value: {JSON.stringify(endValue)}
      </Text>

      <SaturationSlider.Root maxW="sm" value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);
  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue} />;
}`,...h.parameters?.docs?.source}}};const Y=["Basic","Size","DefaultValue","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,h as CustomControl,m as DefaultValue,c as Disabled,S as OnChange,d as ReadOnly,i as Shape,u as Size,l as Step,p as ThumbWithTooltip,Y as __namedExportsOrder,X as default};
