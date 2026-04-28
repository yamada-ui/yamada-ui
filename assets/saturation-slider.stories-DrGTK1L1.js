import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{aa as o,eo as s,ia as c,na as l,ra as u,to as d}from"./iframe-Dy6xR5AA.js";import{n as f,t as p}from"./storybook-BH_GIBd_.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{m=t(n(),1),p(),l(),a(),s(),h=r(),g={component:u,title:`Components / SaturationSlider`},_=()=>(0,h.jsx)(u,{maxW:`sm`}),v=()=>(0,h.jsx)(f,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,h.jsx)(u,{size:t,maxW:`sm`},n)}),y=()=>(0,h.jsx)(u,{defaultValue:[120,.33,.33],maxW:`sm`}),b=()=>(0,h.jsx)(f,{variant:`stack`,rows:[`circle`,`rounded`,`square`],children:(e,t,n)=>(0,h.jsx)(u,{defaultValue:[120,.33,.33],maxW:`sm`,shape:t},n)}),x=()=>(0,h.jsx)(u,{maxW:`sm`,step:.1}),S=()=>(0,h.jsx)(u,{disabled:!0,maxW:`sm`}),C=()=>(0,h.jsx)(u,{maxW:`sm`,readOnly:!0}),w=()=>{let[e,t]=(0,m.useState)([120,.33,.33]),n=`${e[0]}°`,r=`${Math.round(e[1]*100)}%`,i=`${Math.round(e[2]*100)}%`;return(0,h.jsx)(u,{maxW:`sm`,value:e,onChange:t,children:(0,h.jsx)(o,{children:(0,h.jsx)(d,{content:`${n}, ${r}, ${i}`,children:(0,h.jsx)(c,{})})})})},T=()=>{let e=[120,.33,.33],[t,n]=(0,m.useState)(e),[r,a]=(0,m.useState)(e),[o,s]=(0,m.useState)(e);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i,{children:[`Value: `,JSON.stringify(t),`, Start Value:`,` `,JSON.stringify(r),`, End Value: `,JSON.stringify(o)]}),(0,h.jsx)(u,{maxW:`sm`,value:t,onChange:n,onChangeEnd:s,onChangeStart:a})]})},E=()=>{let[e,t]=(0,m.useState)([120,.33,.33]);return(0,h.jsx)(u,{maxW:`sm`,value:e,onChange:t})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} size={row} maxW="sm" />;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root defaultValue={[120, 0.33, 0.33]} maxW="sm" />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} defaultValue={[120, 0.33, 0.33]} maxW="sm" shape={row} />;
    }}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" step={0.1} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root disabled maxW="sm" />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" readOnly />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);\n  const hue = `${value[0]}°`;\n  const saturation = `${Math.round(value[1] * 100)}%`;\n  const brightness = `${Math.round(value[2] * 100)}%`;\n  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue}>\n      <SaturationSlider.Track>\n        <Tooltip content={`${hue}, ${saturation}, ${brightness}`}>\n          <SaturationSlider.Thumb />\n        </Tooltip>\n      </SaturationSlider.Track>\n    </SaturationSlider.Root>;\n}',...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);
  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue} />;
}`,...E.parameters?.docs?.source}}},D=[`Basic`,`Size`,`DefaultValue`,`Shape`,`Step`,`Disabled`,`ReadOnly`,`ThumbWithTooltip`,`OnChange`,`CustomControl`]}))();export{_ as Basic,E as CustomControl,y as DefaultValue,S as Disabled,T as OnChange,C as ReadOnly,b as Shape,v as Size,x as Step,w as ThumbWithTooltip,D as __namedExportsOrder,g as default};