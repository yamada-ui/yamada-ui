import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./text-b2W5euYI.js";import{a,i as o,n as s,r as c,t as l}from"./hue-slider-idjko4Lz.js";import{n as u,t as d}from"./tooltip-TF3imq7A.js";import{n as f,t as p}from"./props-table-CLkISL0o.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{m=t(),f(),a(),r(),u(),h=n(),g={component:s,title:`Components / HueSlider`},_=()=>(0,h.jsx)(s,{defaultValue:180}),v=()=>(0,h.jsx)(p,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,h.jsx)(s,{size:t,defaultValue:180},n)}),y=()=>(0,h.jsx)(s,{defaultValue:270}),b=()=>(0,h.jsx)(s,{defaultValue:300,max:360,min:270}),x=()=>(0,h.jsx)(s,{defaultValue:180,h:`xs`,orientation:`vertical`}),S=()=>(0,h.jsx)(p,{variant:`stack`,rows:[`circle`,`rounded`,`square`],children:(e,t,n)=>(0,h.jsx)(s,{defaultValue:180,shape:t},n)}),C=()=>(0,h.jsx)(s,{defaultValue:180,step:10}),w=()=>(0,h.jsx)(s,{defaultValue:180,disabled:!0}),T=()=>(0,h.jsx)(s,{defaultValue:180,readOnly:!0}),E=()=>{let[e,t]=(0,m.useState)(50);return(0,h.jsx)(s,{value:e,onChange:t,children:(0,h.jsxs)(o,{children:[(0,h.jsx)(d,{content:e,children:(0,h.jsx)(c,{})}),(0,h.jsx)(l,{})]})})},D=()=>{let[e,t]=(0,m.useState)(180),[n,r]=(0,m.useState)(180),[a,o]=(0,m.useState)(180);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Value: `,e,`, Start Value: `,n,`, End Value: `,a]}),(0,h.jsx)(s,{value:e,onChange:t,onChangeEnd:o,onChangeStart:r})]})},O=()=>{let[e,t]=(0,m.useState)(180);return(0,h.jsx)(s,{value:e,onChange:t})},k=[`Basic`,`Size`,`DefaultValue`,`MinMax`,`Vertical`,`Shape`,`Step`,`Disabled`,`ReadOnly`,`ThumbWithTooltip`,`OnChange`,`CustomControl`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} size={row} defaultValue={180} />;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={270} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={300} max={360} min={270} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} h="xs" orientation="vertical" />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} defaultValue={180} shape={row} />;
    }}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} step={10} />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} disabled />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} readOnly />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <HueSlider.Root value={value} onChange={setValue}>
      <HueSlider.Track>
        <Tooltip content={value}>
          <HueSlider.Thumb />
        </Tooltip>

        <HueSlider.Overlay />
      </HueSlider.Track>
    </HueSlider.Root>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(180);
  const [startValue, onChangeStart] = useState(180);
  const [endValue, onChangeEnd] = useState(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <HueSlider.Root value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(180);
  return <HueSlider.Root value={value} onChange={setValue} />;
}`,...O.parameters?.docs?.source}}}})))()}A();export{_ as Basic,O as CustomControl,y as DefaultValue,w as Disabled,b as MinMax,D as OnChange,T as ReadOnly,S as Shape,v as Size,C as Step,E as ThumbWithTooltip,x as Vertical,k as __namedExportsOrder,g as default};