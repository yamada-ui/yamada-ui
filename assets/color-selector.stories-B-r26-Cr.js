import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{pt as r,sr as i}from"./core-CwFz10Qm.js";import{t as a}from"./jsx-runtime-BBQGix-2.js";import{Tu as o,_s as s,bs as c,dd as l,gs as u,hd as d,vs as f,vu as p,xs as m,xu as h,ys as g,yu as _}from"./iframe-DVygIfsS.js";import{n as v,t as y}from"./storybook-B4Nq5bXR.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{b=e(n(),1),y(),r(),l(),p(),u(),x=a(),S={component:c,title:`Components / ColorSelector`},C=()=>(0,x.jsx)(c,{maxW:`md`}),w=()=>(0,x.jsx)(v,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,x.jsx)(c,{size:t,maxW:`md`},n)}),T=()=>(0,x.jsx)(c,{defaultValue:`#775999`,maxW:`md`}),E=()=>(0,x.jsx)(c,{defaultValue:`#775999A0`,maxW:`md`}),D=()=>(0,x.jsx)(v,{variant:`stack`,rows:[`circle`,`rounded`,`square`],children:(e,t,n)=>(0,x.jsx)(c,{format:`hexa`,maxW:`md`,shape:t},n)}),O=()=>(0,x.jsx)(c,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,maxW:`md`}),k=()=>(0,x.jsx)(c,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,maxW:`md`}),A=()=>(0,x.jsx)(c,{disabled:!0,maxW:`md`}),j=()=>(0,x.jsx)(c,{maxW:`md`,readOnly:!0}),M=()=>{let e=`#FF0000FF`,t=`hexa`,[n,r]=(0,b.useState)(e);return(0,x.jsxs)(c,{format:t,maxW:`md`,value:n,onChange:r,children:[(0,x.jsx)(m,{}),(0,x.jsx)(g,{}),(0,x.jsx)(s,{}),(0,x.jsx)(d,{label:`Hex`,children:(0,x.jsxs)(_,{children:[(0,x.jsx)(o,{value:n.toLocaleUpperCase(),onBlur:n=>r(i(n.target.value,e)(t)),onChange:e=>r(e.target.value)}),(0,x.jsx)(h,{clickable:!0,children:(0,x.jsx)(f,{})})]})})]})},N=()=>{let[e,t]=(0,b.useState)(`#FF0000A0`);return(0,x.jsx)(c,{maxW:`md`,value:e,onChange:t})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root maxW="md" />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <ColorSelector.Root key={key} size={row} maxW="md" />;
    }}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root defaultValue="#775999" maxW="md" />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root defaultValue="#775999A0" maxW="md" />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <ColorSelector.Root key={key} format="hexa" maxW="md" shape={row} />;
    }}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" maxW="md" />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" maxW="md" />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root disabled maxW="md" />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root maxW="md" readOnly />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const fallbackValue = "#FF0000FF";
  const format = "hexa";
  const [value, setValue] = useState(fallbackValue);
  return <ColorSelector.Root format={format} maxW="md" value={value} onChange={setValue}>
      <ColorSelector.SaturationSlider />
      <ColorSelector.HueSlider />
      <ColorSelector.AlphaSlider />

      <Field.Root label="Hex">
        <InputGroup.Root>
          <Input value={value.toLocaleUpperCase()} onBlur={ev => setValue(convertColor(ev.target.value, fallbackValue)(format))} onChange={ev => setValue(ev.target.value)} />

          <InputGroup.Element clickable>
            <ColorSelector.EyeDropper />
          </InputGroup.Element>
        </InputGroup.Root>
      </Field.Root>
    </ColorSelector.Root>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#FF0000A0");
  return <ColorSelector.Root maxW="md" value={value} onChange={setValue} />;
}`,...N.parameters?.docs?.source}}},P=[`Basic`,`Size`,`DefaultValue`,`Alpha`,`Shape`,`ColorSwatches`,`ColorSwatchGroupColumns`,`Disabled`,`ReadOnly`,`CustomComponent`,`CustomControl`]}))();export{E as Alpha,C as Basic,k as ColorSwatchGroupColumns,O as ColorSwatches,M as CustomComponent,N as CustomControl,T as DefaultValue,A as Disabled,j as ReadOnly,D as Shape,w as Size,P as __namedExportsOrder,S as default};