import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./text-b2W5euYI.js";import{n as a,t as o}from"./tooltip-TF3imq7A.js";import{i as s,n as c,r as l,t as u}from"./saturation-slider-CdVFIvT5.js";import{n as d,t as f}from"./props-table-CLkISL0o.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p=t(),d(),s(),r(),a(),m=n(),h={component:u,title:`Components / SaturationSlider`},g=()=>(0,m.jsx)(u,{maxW:`sm`}),_=()=>(0,m.jsx)(f,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,m.jsx)(u,{size:t,maxW:`sm`},n)}),v=()=>(0,m.jsx)(u,{defaultValue:[120,.33,.33],maxW:`sm`}),y=()=>(0,m.jsx)(f,{variant:`stack`,rows:[`circle`,`rounded`,`square`],children:(e,t,n)=>(0,m.jsx)(u,{defaultValue:[120,.33,.33],maxW:`sm`,shape:t},n)}),b=()=>(0,m.jsx)(u,{maxW:`sm`,step:.1}),x=()=>(0,m.jsx)(u,{disabled:!0,maxW:`sm`}),S=()=>(0,m.jsx)(u,{maxW:`sm`,readOnly:!0}),C=()=>{let[e,t]=(0,p.useState)([120,.33,.33]),n=`${e[0]}°`,r=`${Math.round(e[1]*100)}%`,i=`${Math.round(e[2]*100)}%`;return(0,m.jsx)(u,{maxW:`sm`,value:e,onChange:t,children:(0,m.jsx)(l,{children:(0,m.jsx)(o,{content:`${n}, ${r}, ${i}`,children:(0,m.jsx)(c,{})})})})},w=()=>{let e=[120,.33,.33],[t,n]=(0,p.useState)(e),[r,a]=(0,p.useState)(e),[o,s]=(0,p.useState)(e);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i,{children:[`Value: `,JSON.stringify(t),`, Start Value:`,` `,JSON.stringify(r),`, End Value: `,JSON.stringify(o)]}),(0,m.jsx)(u,{maxW:`sm`,value:t,onChange:n,onChangeEnd:s,onChangeStart:a})]})},T=()=>{let[e,t]=(0,p.useState)([120,.33,.33]);return(0,m.jsx)(u,{maxW:`sm`,value:e,onChange:t})},E=[`Basic`,`Size`,`DefaultValue`,`Shape`,`Step`,`Disabled`,`ReadOnly`,`ThumbWithTooltip`,`OnChange`,`CustomControl`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} size={row} maxW="sm" />;
    }}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root defaultValue={[120, 0.33, 0.33]} maxW="sm" />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} defaultValue={[120, 0.33, 0.33]} maxW="sm" shape={row} />;
    }}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" step={0.1} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root disabled maxW="sm" />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" readOnly />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);\n  const hue = `${value[0]}°`;\n  const saturation = `${Math.round(value[1] * 100)}%`;\n  const brightness = `${Math.round(value[2] * 100)}%`;\n  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue}>\n      <SaturationSlider.Track>\n        <Tooltip content={`${hue}, ${saturation}, ${brightness}`}>\n          <SaturationSlider.Thumb />\n        </Tooltip>\n      </SaturationSlider.Track>\n    </SaturationSlider.Root>;\n}',...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);
  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue} />;
}`,...T.parameters?.docs?.source}}}})))()}D();export{g as Basic,T as CustomControl,v as DefaultValue,x as Disabled,w as OnChange,S as ReadOnly,y as Shape,_ as Size,b as Step,C as ThumbWithTooltip,E as __namedExportsOrder,h as default};