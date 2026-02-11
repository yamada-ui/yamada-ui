import{j as e,r as s,T as oe}from"./iframe-FV6Pf4zG.js";import{P as ee}from"./props-table-DZUGPlYC.js";import{T as se}from"./tooltip-DXAUvCWR.js";import{H as r,a as ne,b as ue,c as le}from"./hue-slider-CPFOtlNk.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CSiCDg7_.js";import"./grid-item-bFCU3E8M.js";import"./for-v94cQqt1.js";import"./flex-DLFcrCK5.js";import"./heading-CT3LVYzH.js";import"./index-CYv8EMHQ.js";import"./index-0O9ehHUq.js";import"./popover-CEd0f55T.js";import"./index-xWIyqUQQ.js";import"./use-disclosure-CCLUxZAh.js";import"./event-C18RZX1K.js";import"./slide-fade-Bds_5Qg7.js";import"./transition-CHWnHPwq.js";import"./fade-scale-DkOFhGOg.js";import"./index-gzKnGVq3.js";import"./use-breakpoint-DsgKrnZJ.js";import"./use-breakpoint-value-EeorSnRx.js";import"./use-color-mode-value-CR8x27_R.js";import"./hue-slider.style-B857EfT1.js";import"./index-DG53gCnm.js";import"./slider-cI561Oc0.js";import"./index-tPvqYGR1.js";import"./use-field-props-D1lUJOGS.js";import"./number-CcP_arM8.js";const Be={component:r,title:"Components / HueSlider"},n=()=>e.jsx(r,{defaultValue:180}),u=()=>e.jsx(ee,{variant:"stack",rows:["sm","md","lg"],children:(a,t,o)=>e.jsx(r,{size:t,defaultValue:180},o)}),l=()=>e.jsx(r,{defaultValue:270}),c=()=>e.jsx(r,{defaultValue:300,max:360,min:270}),i=()=>e.jsx(r,{defaultValue:180,h:"xs",orientation:"vertical"}),d=()=>e.jsx(ee,{variant:"stack",rows:["circle","rounded","square"],children:(a,t,o)=>e.jsx(r,{defaultValue:180,shape:t},o)}),m=()=>e.jsx(r,{defaultValue:180,step:10}),p=()=>e.jsx(r,{defaultValue:180,disabled:!0}),S=()=>e.jsx(r,{defaultValue:180,readOnly:!0}),V=()=>{const[a,t]=s.useState(50);return e.jsx(r,{value:a,onChange:t,children:e.jsxs(ne,{children:[e.jsx(se,{content:a,children:e.jsx(ue,{})}),e.jsx(le,{})]})})},h=()=>{const[a,t]=s.useState(180),[o,re]=s.useState(180),[ae,te]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(oe,{children:["Value: ",a,", Start Value: ",o,", End Value: ",ae]}),e.jsx(r,{value:a,onChange:t,onChangeEnd:te,onChangeStart:re})]})},x=()=>{const[a,t]=s.useState(180);return e.jsx(r,{value:a,onChange:t})};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} />;
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var H,j,v;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} size={row} defaultValue={180} />;
    }}
    </PropsTable>;
}`,...(v=(j=u.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var T,R,b;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={270} />;
}`,...(b=(R=l.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var k,y,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={300} max={360} min={270} />;
}`,...(E=(y=c.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var O,w,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} h="xs" orientation="vertical" />;
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var _,z,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <HueSlider.Root key={key} defaultValue={180} shape={row} />;
    }}
    </PropsTable>;
}`,...(D=(z=d.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var M,q,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} step={10} />;
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var W,F,A;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} disabled />;
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var G,I,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <HueSlider.Root defaultValue={180} readOnly />;
}`,...(J=(I=S.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,L,N;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <HueSlider.Root value={value} onChange={setValue}>
      <HueSlider.Track>
        <Tooltip content={value}>
          <HueSlider.Thumb />
        </Tooltip>

        <HueSlider.Overlay />
      </HueSlider.Track>
    </HueSlider.Root>;
}`,...(N=(L=V.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(180);
  const [startValue, onChangeStart] = useState(180);
  const [endValue, onChangeEnd] = useState(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <HueSlider.Root value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(180);
  return <HueSlider.Root value={value} onChange={setValue} />;
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const We=["Basic","Size","DefaultValue","MinMax","Vertical","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,x as CustomControl,l as DefaultValue,p as Disabled,c as MinMax,h as OnChange,S as ReadOnly,d as Shape,u as Size,m as Step,V as ThumbWithTooltip,i as Vertical,We as __namedExportsOrder,Be as default};
