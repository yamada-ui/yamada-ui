import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fc as n,Jo as r,Mc as i,Nc as a,Pc as o,Wm as s,im as c,iu as l,jc as u,qo as d,ru as f}from"./iframe-B8XBG3U5.js";import{n as p,t as m}from"./storybook-D5x18Ewr.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{m(),h=t(s(),1),u(),f(),d(),g=c(),_={component:a,title:`Components / AlphaSlider`},v=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5}),y=()=>(0,g.jsx)(p,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,g.jsx)(a,{size:t,color:`#775999`,defaultValue:.5},n)}),b=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.7}),x=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5,max:.75,min:.25}),S=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5,h:`xs`,orientation:`vertical`}),C=()=>(0,g.jsx)(p,{variant:`stack`,rows:[`circle`,`rounded`,`square`],children:(e,t,n)=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5,shape:t},n)}),w=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5,step:.1}),T=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5,disabled:!0}),E=()=>(0,g.jsx)(a,{color:`#775999`,defaultValue:.5,readOnly:!0}),D=()=>{let[e,t]=(0,h.useState)(.5);return(0,g.jsx)(a,{color:`#775999`,value:e,onChange:t,children:(0,g.jsxs)(n,{children:[(0,g.jsx)(r,{content:e,children:(0,g.jsx)(o,{})}),(0,g.jsx)(i,{})]})})},O=()=>{let[e,t]=(0,h.useState)(.5),[n,r]=(0,h.useState)(.5),[i,o]=(0,h.useState)(.5);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(l,{children:[`Value: `,e,`, Start Value: `,n,`, End Value: `,i]}),(0,g.jsx)(a,{color:`#775999`,value:e,onChange:t,onChangeEnd:o,onChangeStart:r})]})},k=()=>{let[e,t]=(0,h.useState)(.5);return(0,g.jsx)(a,{color:`#775999`,value:e,onChange:t})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} size={row} color="#775999" defaultValue={0.5} />;
    }}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.7} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} max={0.75} min={0.25} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} h="xs" orientation="vertical" />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} color="#775999" defaultValue={0.5} shape={row} />;
    }}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} step={0.1} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} disabled />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} readOnly />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue}>
      <AlphaSlider.Track>
        <Tooltip content={value}>
          <AlphaSlider.Thumb />
        </Tooltip>

        <AlphaSlider.Overlay />
      </AlphaSlider.Track>
    </AlphaSlider.Root>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(0.5);
  const [startValue, onChangeStart] = useState(0.5);
  const [endValue, onChangeEnd] = useState(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <AlphaSlider.Root color="#775999" value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue} />;
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`Size`,`DefaultValue`,`MinMax`,`Vertical`,`Shape`,`Step`,`Disabled`,`ReadOnly`,`ThumbWithTooltip`,`OnChange`,`CustomControl`]}))();export{v as Basic,k as CustomControl,b as DefaultValue,T as Disabled,x as MinMax,O as OnChange,E as ReadOnly,C as Shape,y as Size,w as Step,D as ThumbWithTooltip,S as Vertical,A as __namedExportsOrder,_ as default};