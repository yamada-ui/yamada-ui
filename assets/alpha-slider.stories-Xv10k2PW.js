import{j as e,r as s,T as j}from"./iframe-Gd2wA5UH.js";import{P as g}from"./props-table-hQP5Z1dz.js";import{T as v}from"./tooltip-BzsQJ_lB.js";import{A as r,a as T,b as R,c as b}from"./alpha-slider-B-0zv1t0.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CakiebxH.js";import"./grid-item-Dj5TeVSg.js";import"./for-C62laByO.js";import"./flex-mFnSfPNF.js";import"./heading-CalVy3eO.js";import"./tooltip.style-Dxn7OBwj.js";import"./index-FPzRM6JW.js";import"./index-BAVD1pKw.js";import"./index-CP3PE3DO.js";import"./use-disclosure-JBHrDYTC.js";import"./popover-CkMXClLp.js";import"./index-BIztub15.js";import"./event-DnNdx6hE.js";import"./slide-fade-BMNR-h3_.js";import"./transition-_cZ26p0R.js";import"./fade-scale-dldhs_Gb.js";import"./index-B69f71zK.js";import"./use-breakpoint-_TvgYbTn.js";import"./use-breakpoint-value-M3SNOELf.js";import"./use-color-mode-value-BkyTpO3Y.js";import"./color-swatch-YiS4o6yS.js";import"./hue-slider-CUWgtEU-.js";import"./hue-slider.style-MqinTFhW.js";import"./index-DSbVSDB7.js";import"./slider-DfTDN2jD.js";import"./index-BLsJQ0sw.js";import"./use-field-props-D4qWu9wV.js";import"./number-CcP_arM8.js";const ne={component:r,title:"Components / AlphaSlider"},n=()=>e.jsx(r,{color:"#775999",defaultValue:.5}),l=()=>e.jsx(g,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>e.jsx(r,{size:o,color:"#775999",defaultValue:.5},t)}),u=()=>e.jsx(r,{color:"#775999",defaultValue:.7}),c=()=>e.jsx(r,{color:"#775999",defaultValue:.5,max:.75,min:.25}),p=()=>e.jsx(r,{color:"#775999",defaultValue:.5,h:"xs",orientation:"vertical"}),i=()=>e.jsx(g,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>e.jsx(r,{color:"#775999",defaultValue:.5,shape:o},t)}),d=()=>e.jsx(r,{color:"#775999",defaultValue:.5,step:.1}),m=()=>e.jsx(r,{color:"#775999",defaultValue:.5,disabled:!0}),h=()=>e.jsx(r,{color:"#775999",defaultValue:.5,readOnly:!0}),S=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o,children:e.jsxs(T,{children:[e.jsx(v,{content:a,children:e.jsx(R,{})}),e.jsx(b,{})]})})},V=()=>{const[a,o]=s.useState(.5),[t,f]=s.useState(.5),[A,C]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["Value: ",a,", Start Value: ",t,", End Value: ",A]}),e.jsx(r,{color:"#775999",value:a,onChange:o,onChangeEnd:C,onChangeStart:f})]})},x=()=>{const[a,o]=s.useState(.5);return e.jsx(r,{color:"#775999",value:a,onChange:o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} />;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} size={row} color="#775999" defaultValue={0.5} />;
    }}
    </PropsTable>;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.7} />;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} max={0.75} min={0.25} />;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} h="xs" orientation="vertical" />;
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <AlphaSlider.Root key={key} color="#775999" defaultValue={0.5} shape={row} />;
    }}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} step={0.1} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} disabled />;
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} readOnly />;
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue}>
      <AlphaSlider.Track>
        <Tooltip content={value}>
          <AlphaSlider.Thumb />
        </Tooltip>

        <AlphaSlider.Overlay />
      </AlphaSlider.Track>
    </AlphaSlider.Root>;
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(0.5);
  const [startValue, onChangeStart] = useState(0.5);
  const [endValue, onChangeEnd] = useState(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <AlphaSlider.Root color="#775999" value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0.5);
  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue} />;
}`,...x.parameters?.docs?.source}}};const le=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,x as CustomControl,u as DefaultValue,m as Disabled,c as MinMax,V as OnChange,h as ReadOnly,i as Shape,l as Size,d as Step,S as ThumbWithTooltip,p as Vertical,le as __namedExportsOrder,ne as default};
