import{j as r,r as Y,a9 as $}from"./iframe-RwpT3twT.js";import{P as Z}from"./props-table-BNK0RAGt.js";import{I as rr}from"./input-DMniWH09.js";import{C as e,a as er,b as or,c as ar,d as tr}from"./color-selector-Dpx_ed4r.js";import{F as sr}from"./use-field-props-D7QsMOnQ.js";import{I as lr,a as cr}from"./input-group-jkvktWJU.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DsXNw2RL.js";import"./grid-item-DkJIHxUo.js";import"./for-COlq6J5C.js";import"./flex-ChLlQpDo.js";import"./heading-Dl45hhIm.js";import"./use-input-border-gleGpx1s.js";import"./native-select.style-BUAk-T1h.js";import"./index-BZshabKt.js";import"./color-swatch-DevwChHm.js";import"./saturation-slider-z0Tw2i4i.js";import"./hue-slider.style-CtXPurfi.js";import"./index-CrY5IJF9.js";import"./event-CbQhjL3H.js";import"./number-CcP_arM8.js";import"./hue-slider-DM2o8Xo1.js";import"./index-Crg3soj8.js";import"./use-breakpoint-DmU4g_r-.js";import"./use-breakpoint-value-Bg78wyMW.js";import"./use-color-mode-value-BwXLsy3S.js";import"./slider-B7DhsxIa.js";import"./alpha-slider-B2eCxvLH.js";import"./group-DSvGYd0s.js";const _r={component:e,title:"Components / ColorSelector"},s=()=>r.jsx(e,{maxW:"md"}),l=()=>r.jsx(Z,{variant:"stack",rows:["sm","md","lg"],children:(a,o,t)=>r.jsx(e,{size:o,maxW:"md"},t)}),c=()=>r.jsx(e,{defaultValue:"#775999",maxW:"md"}),n=()=>r.jsx(e,{defaultValue:"#775999A0",maxW:"md"}),m=()=>r.jsx(Z,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>r.jsx(e,{format:"hexa",maxW:"md",shape:o},t)}),u=()=>r.jsx(e,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",maxW:"md"}),p=()=>r.jsx(e,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",maxW:"md"}),d=()=>r.jsx(e,{disabled:!0,maxW:"md"}),i=()=>r.jsx(e,{maxW:"md",readOnly:!0}),h=()=>{const a="#FF0000FF",o="hexa",[t,x]=Y.useState(a);return r.jsxs(e,{format:o,maxW:"md",value:t,onChange:x,children:[r.jsx(er,{}),r.jsx(or,{}),r.jsx(ar,{}),r.jsx(sr,{label:"Hex",children:r.jsxs(lr,{children:[r.jsx(rr,{value:t.toLocaleUpperCase(),onBlur:C=>x($(C.target.value,a)(o)),onChange:C=>x(C.target.value)}),r.jsx(cr,{clickable:!0,children:r.jsx(tr,{})})]})})]})},S=()=>{const[a,o]=Y.useState("#FF0000A0");return r.jsx(e,{maxW:"md",value:a,onChange:o})};var v,f,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <ColorSelector.Root maxW="md" />;
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var j,b,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <ColorSelector.Root key={key} size={row} maxW="md" />;
    }}
    </PropsTable>;
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var R,W,k;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <ColorSelector.Root defaultValue="#775999" maxW="md" />;
}`,...(k=(W=c.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var V,F,G;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <ColorSelector.Root defaultValue="#775999A0" maxW="md" />;
}`,...(G=(F=n.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var y,I,P;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <ColorSelector.Root key={key} format="hexa" maxW="md" shape={row} />;
    }}
    </PropsTable>;
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,E,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <ColorSelector.Root colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" maxW="md" />;
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var L,_,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <ColorSelector.Root colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" maxW="md" />;
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var T,z,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <ColorSelector.Root disabled maxW="md" />;
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,q,U;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <ColorSelector.Root maxW="md" readOnly />;
}`,...(U=(q=i.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var J,K,M;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,X;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#FF0000A0");
  return <ColorSelector.Root maxW="md" value={value} onChange={setValue} />;
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Or=["Basic","Size","DefaultValue","Alpha","Shape","ColorSwatches","ColorSwatchGroupColumns","Disabled","ReadOnly","CustomComponent","CustomControl"];export{n as Alpha,s as Basic,p as ColorSwatchGroupColumns,u as ColorSwatches,h as CustomComponent,S as CustomControl,c as DefaultValue,d as Disabled,i as ReadOnly,m as Shape,l as Size,Or as __namedExportsOrder,_r as default};
