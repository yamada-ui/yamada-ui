import{n as _,o as z,I,j as e,C as L,r as s,T as B}from"./iframe-BynoZ0Oq.js";import{P as T}from"./props-table-fajrmhzO.js";import{F as y}from"./for-BimcTw3e.js";import{T as D}from"./tooltip-LUIyG3SM.js";import{S as r,a as M,c as w,b as E,d as A}from"./slider-BEzq-y1C.js";import{F}from"./use-field-props-DSGZpnoT.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-MdBZoBbZ.js";import"./grid-item-DEfTZrVK.js";import"./flex-zG46G6gY.js";import"./heading-Dpwm0c5v.js";import"./index-M-2irhNQ.js";import"./index-CQ_cIbM2.js";import"./popover-DCamWty9.js";import"./index-nTHQsPDC.js";import"./use-disclosure-B_O7lnUS.js";import"./event-CzNUjPv7.js";import"./slide-fade-B_Fdh-KL.js";import"./transition-ZjIwupCc.js";import"./fade-scale-wxiXOiS5.js";import"./index-CZ4fKwKe.js";import"./use-breakpoint-QKtk9N9n.js";import"./use-breakpoint-value-CHMWBrQj.js";import"./use-color-mode-value-Tay-h-eC.js";import"./index-DlLDHCgd.js";import"./index-DqVm0Cqq.js";import"./number-CcP_arM8.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],H=_("audio-lines",q),W=z(I)({as:H}),ve={component:r,title:"Components / Slider"},n=()=>e.jsx(r,{defaultValue:50}),l=()=>e.jsx(T,{variant:"stack",columns:["outline","solid"],rows:L,children:(a,o,t)=>e.jsx(r,{colorScheme:o,variant:a,defaultValue:50},t)}),u=()=>e.jsx(T,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>e.jsx(r,{size:o,defaultValue:50},t)}),d=()=>e.jsx(r,{defaultValue:50}),i=()=>e.jsx(r,{defaultValue:50,max:200,min:0}),c=()=>e.jsx(r,{defaultValue:[25,75]}),m=()=>e.jsx(r,{betweenThumbs:25,defaultValue:[25,75]}),p=()=>e.jsx(r,{defaultValue:50,h:"xs",orientation:"vertical"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{defaultValue:50,marks:[25,50,75]}),e.jsx(r,{defaultValue:50,marks:[{label:"25",value:25},{label:"50",value:50},{label:"75",value:75}]})]}),h=()=>e.jsx(T,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>e.jsx(r,{defaultValue:50,shape:o},t)}),g=()=>e.jsx(r,{defaultValue:50,step:10}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","solid"],children:(a,o)=>e.jsx(r,{variant:a,defaultValue:50,disabled:!0},o)}),e.jsx(F,{disabled:!0,helperMessage:"Please select your preferred volume.",label:"Sound volume",children:e.jsx(r,{defaultValue:50})})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","solid"],children:(a,o)=>e.jsx(r,{variant:a,defaultValue:50,readOnly:!0},o)}),e.jsx(F,{helperMessage:"Please select your preferred volume.",label:"Sound volume",readOnly:!0,children:e.jsx(r,{defaultValue:50})})]}),V=()=>{const[a,o]=s.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","solid"],children:(t,C)=>e.jsx(r,{variant:t,invalid:a<20,value:a,onChange:o},C)}),e.jsx(F,{errorMessage:"Volume should be set to 20 or higher.",invalid:a<20,label:"Sound volume",children:e.jsx(r,{value:a,onChange:o})})]})},f=()=>{const[a,o]=s.useState(50);return e.jsxs(r,{value:a,onChange:o,children:[e.jsxs(M,{children:[e.jsx(w,{}),e.jsx(D,{content:a,children:e.jsx(E,{})})]}),e.jsx(A,{marks:[25,50,75]})]})},j=()=>{const[a,o]=s.useState(50),[t,C]=s.useState(50),[O,P]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:["Value: ",a,", Start Value: ",t,", End Value: ",O]}),e.jsx(r,{value:a,onChange:o,onChangeEnd:P,onChangeStart:C})]})},b=()=>e.jsx(r,{defaultValue:50,rangeFill:"red.bg",thumbFill:"red",trackFill:"red.bg",trackSize:"5"}),k=()=>e.jsx(r,{defaultValue:50,children:e.jsxs(M,{children:[e.jsx(w,{}),e.jsx(E,{children:e.jsx(W,{fontSize:"sm"})})]})}),R=()=>{const[a,o]=s.useState(50);return e.jsx(r,{value:a,onChange:o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} />;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Slider.Root key={key} colorScheme={row} variant={column} defaultValue={50} />;
    }}
    </PropsTable>;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <Slider.Root key={key} size={row} defaultValue={50} />;
    }}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} />;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} max={200} min={0} />;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={[25, 75]} />;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root betweenThumbs={25} defaultValue={[25, 75]} />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} h="xs" orientation="vertical" />;
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Slider.Root defaultValue={50} marks={[25, 50, 75]} />

      <Slider.Root defaultValue={50} marks={[{
      label: "25",
      value: 25
    }, {
      label: "50",
      value: 50
    }, {
      label: "75",
      value: 75
    }]} />
    </>;
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <Slider.Root key={key} defaultValue={50} shape={row} />;
    }}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} step={10} />;
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => <Slider.Root key={index} variant={variant} defaultValue={50} disabled />}
      </For>

      <Field.Root disabled helperMessage="Please select your preferred volume." label="Sound volume">
        <Slider.Root defaultValue={50} />
      </Field.Root>
    </>;
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => <Slider.Root key={index} variant={variant} defaultValue={50} readOnly />}
      </For>

      <Field.Root helperMessage="Please select your preferred volume." label="Sound volume" readOnly>
        <Slider.Root defaultValue={50} />
      </Field.Root>
    </>;
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(15);
  return <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => <Slider.Root key={index} variant={variant} invalid={value < 20} value={value} onChange={onChange} />}
      </For>

      <Field.Root errorMessage="Volume should be set to 20 or higher." invalid={value < 20} label="Sound volume">
        <Slider.Root value={value} onChange={onChange} />
      </Field.Root>
    </>;
}`,...V.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <Slider.Root value={value} onChange={setValue}>
      <Slider.Track>
        <Slider.Range />
        <Tooltip content={value}>
          <Slider.Thumb />
        </Tooltip>
      </Slider.Track>

      <Slider.Marks marks={[25, 50, 75]} />
    </Slider.Root>;
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(50);
  const [startValue, onChangeStart] = useState(50);
  const [endValue, onChangeEnd] = useState(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <Slider.Root value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} rangeFill="red.bg" thumbFill="red" trackFill="red.bg" trackSize="5" />;
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50}>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb>
          <AudioLinesIcon fontSize="sm" />
        </Slider.Thumb>
      </Slider.Track>
    </Slider.Root>;
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <Slider.Root value={value} onChange={setValue} />;
}`,...R.parameters?.docs?.source}}};const xe=["Basic","Variant","Size","DefaultValue","MinMax","Range","BetweenThumbs","Vertical","Mark","Shape","Step","Disabled","ReadOnly","Invalid","ThumbWithTooltip","OnChange","CustomColor","CustomThumb","CustomControl"];export{n as Basic,m as BetweenThumbs,b as CustomColor,R as CustomControl,k as CustomThumb,d as DefaultValue,v as Disabled,V as Invalid,S as Mark,i as MinMax,j as OnChange,c as Range,x as ReadOnly,h as Shape,u as Size,g as Step,f as ThumbWithTooltip,l as Variant,p as Vertical,xe as __namedExportsOrder,ve as default};
