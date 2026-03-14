import{j as r,r as v,aw as b}from"./iframe-DyywAl9M.js";import{P as f}from"./props-table-DObtv924.js";import{b as g}from"./input-CpCMfK8c.js";import{C as e,a as j,b as w,c as R,d as W}from"./color-selector-DDxpbb34.js";import{F as k}from"./use-field-props-DETYYYkF.js";import{I as V,a as F}from"./input-group--MiLhzfn.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./use-input-border-DrHY1lED.js";import"./native-select.style-DTrTTfW3.js";import"./index-BGyahw92.js";import"./color-swatch-DnlueOgu.js";import"./saturation-slider-CA2apTQh.js";import"./hue-slider.style-BFC8KELG.js";import"./index-CJqBy04F.js";import"./event-CBin4f3O.js";import"./number-CcP_arM8.js";import"./hue-slider-DP1kH8jp.js";import"./index-DtSGvXw0.js";import"./use-breakpoint-_p73q9DO.js";import"./use-breakpoint-value-DSjm9V8o.js";import"./use-color-mode-value-DqCHpsqA.js";import"./slider-BA3zO8NL.js";import"./alpha-slider-B0fJ6g_E.js";import"./group-KklkA9DN.js";const tr={component:e,title:"Components / ColorSelector"},s=()=>r.jsx(e,{maxW:"md"}),l=()=>r.jsx(f,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>r.jsx(e,{size:o,maxW:"md"},t)}),c=()=>r.jsx(e,{defaultValue:"#775999",maxW:"md"}),n=()=>r.jsx(e,{defaultValue:"#775999A0",maxW:"md"}),m=()=>r.jsx(f,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>r.jsx(e,{format:"hexa",maxW:"md",shape:o},t)}),u=()=>r.jsx(e,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",maxW:"md"}),p=()=>r.jsx(e,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",maxW:"md"}),d=()=>r.jsx(e,{disabled:!0,maxW:"md"}),i=()=>r.jsx(e,{maxW:"md",readOnly:!0}),h=()=>{const a="#FF0000FF",o="hexa",[t,x]=v.useState(a);return r.jsxs(e,{format:o,maxW:"md",value:t,onChange:x,children:[r.jsx(j,{}),r.jsx(w,{}),r.jsx(R,{}),r.jsx(k,{label:"Hex",children:r.jsxs(V,{children:[r.jsx(g,{value:t.toLocaleUpperCase(),onBlur:C=>x(b(C.target.value,a)(o)),onChange:C=>x(C.target.value)}),r.jsx(F,{clickable:!0,children:r.jsx(W,{})})]})})]})},S=()=>{const[a,o]=v.useState("#FF0000A0");return r.jsx(e,{maxW:"md",value:a,onChange:o})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root maxW="md" />;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <ColorSelector.Root key={key} size={row} maxW="md" />;
    }}
    </PropsTable>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root defaultValue="#775999" maxW="md" />;
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root defaultValue="#775999A0" maxW="md" />;
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <ColorSelector.Root key={key} format="hexa" maxW="md" shape={row} />;
    }}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" maxW="md" />;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" maxW="md" />;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root disabled maxW="md" />;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <ColorSelector.Root maxW="md" readOnly />;
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#FF0000A0");
  return <ColorSelector.Root maxW="md" value={value} onChange={setValue} />;
}`,...S.parameters?.docs?.source}}};const sr=["Basic","Size","DefaultValue","Alpha","Shape","ColorSwatches","ColorSwatchGroupColumns","Disabled","ReadOnly","CustomComponent","CustomControl"];export{n as Alpha,s as Basic,p as ColorSwatchGroupColumns,u as ColorSwatches,h as CustomComponent,S as CustomControl,c as DefaultValue,d as Disabled,i as ReadOnly,m as Shape,l as Size,sr as __namedExportsOrder,tr as default};
