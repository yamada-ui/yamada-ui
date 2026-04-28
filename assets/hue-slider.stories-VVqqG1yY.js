import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{Fs as o,Is as s,Ms as c,Ns as l,Ps as u,eo as d,to as f}from"./iframe-DADqdCkf.js";import{n as p,t as m}from"./storybook-DYydNQII.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{h=t(n(),1),m(),c(),a(),d(),g=r(),_={component:u,title:`Components / HueSlider`},v=()=>(0,g.jsx)(u,{defaultValue:180}),y=()=>(0,g.jsx)(p,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,g.jsx)(u,{size:t,defaultValue:180},n)}),b=()=>(0,g.jsx)(u,{defaultValue:270}),x=()=>(0,g.jsx)(u,{defaultValue:300,max:360,min:270}),S=()=>(0,g.jsx)(u,{defaultValue:180,h:`xs`,orientation:`vertical`}),C=()=>(0,g.jsx)(p,{variant:`stack`,rows:[`circle`,`rounded`,`square`],children:(e,t,n)=>(0,g.jsx)(u,{defaultValue:180,shape:t},n)}),w=()=>(0,g.jsx)(u,{defaultValue:180,step:10}),T=()=>(0,g.jsx)(u,{defaultValue:180,disabled:!0}),E=()=>(0,g.jsx)(u,{defaultValue:180,readOnly:!0}),D=()=>{let[e,t]=(0,h.useState)(50);return(0,g.jsx)(u,{value:e,onChange:t,children:(0,g.jsxs)(s,{children:[(0,g.jsx)(f,{content:e,children:(0,g.jsx)(o,{})}),(0,g.jsx)(l,{})]})})},O=()=>{let[e,t]=(0,h.useState)(180),[n,r]=(0,h.useState)(180),[a,o]=(0,h.useState)(180);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i,{children:[`Value: `,e,`, Start Value: `,n,`, End Value: `,a]}),(0,g.jsx)(u,{value:e,onChange:t,onChangeEnd:o,onChangeStart:r})]})},k=()=>{let[e,t]=(0,h.useState)(180);return(0,g.jsx)(u,{value:e,onChange:t})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} size={row} defaultValue={180} />;
    }}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={270} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={300} max={360} min={270} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} h="xs" orientation="vertical" />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} defaultValue={180} shape={row} />;
    }}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} step={10} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} disabled />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} readOnly />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <HueSlider.Root value={value} onChange={setValue}>
      <HueSlider.Track>
        <Tooltip content={value}>
          <HueSlider.Thumb />
        </Tooltip>

        <HueSlider.Overlay />
      </HueSlider.Track>
    </HueSlider.Root>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(180);
  const [startValue, onChangeStart] = useState(180);
  const [endValue, onChangeEnd] = useState(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <HueSlider.Root value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(180);
  return <HueSlider.Root value={value} onChange={setValue} />;
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`Size`,`DefaultValue`,`MinMax`,`Vertical`,`Shape`,`Step`,`Disabled`,`ReadOnly`,`ThumbWithTooltip`,`OnChange`,`CustomControl`]}))();export{v as Basic,k as CustomControl,b as DefaultValue,T as Disabled,x as MinMax,O as OnChange,E as ReadOnly,C as Shape,y as Size,w as Step,D as ThumbWithTooltip,S as Vertical,A as __namedExportsOrder,_ as default};