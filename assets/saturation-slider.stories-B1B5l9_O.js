import{j as e,r as o,T as X}from"./iframe-LqombrNM.js";import{P as L}from"./props-table-P2PnH6mP.js";import{T as Y}from"./tooltip-C5QiJ6Jh.js";import{S as a,a as Z,b as ee}from"./saturation-slider-BghClI6y.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DFOS9khk.js";import"./grid-item-BVQQuAHt.js";import"./for-CkWl_ugB.js";import"./flex-ksADg7SB.js";import"./heading-Bq_Y6181.js";import"./index-D780x7qd.js";import"./index-B7EzJSmA.js";import"./popover-Bx00K3yI.js";import"./index-M5PhJsdN.js";import"./use-disclosure-CW_ifDRS.js";import"./event-D-3VQY0U.js";import"./slide-fade-ZcI84wwv.js";import"./transition-pNAeQrmt.js";import"./fade-scale-CZ8HZCaL.js";import"./hue-slider.style-CBf74bt9.js";import"./index-B-sBeiPC.js";import"./index-CQhAjkmY.js";import"./use-field-props-DcPw9IyF.js";import"./number-CcP_arM8.js";const je={component:a,title:"Components / SaturationSlider"},n=()=>e.jsx(a,{maxW:"sm"}),u=()=>e.jsx(L,{variant:"stack",rows:["sm","md","lg"],children:(r,t,s)=>e.jsx(a,{size:t,maxW:"sm"},s)}),m=()=>e.jsx(a,{defaultValue:[120,.33,.33],maxW:"sm"}),i=()=>e.jsx(L,{variant:"stack",rows:["circle","rounded","square"],children:(r,t,s)=>e.jsx(a,{defaultValue:[120,.33,.33],maxW:"sm",shape:t},s)}),l=()=>e.jsx(a,{maxW:"sm",step:.1}),c=()=>e.jsx(a,{disabled:!0,maxW:"sm"}),d=()=>e.jsx(a,{maxW:"sm",readOnly:!0}),p=()=>{const[r,t]=o.useState([120,.33,.33]),s=`${r[0]}°`,x=`${Math.round(r[1]*100)}%`,g=`${Math.round(r[2]*100)}%`;return e.jsx(a,{maxW:"sm",value:r,onChange:t,children:e.jsx(Z,{children:e.jsx(Y,{content:`${s}, ${x}, ${g}`,children:e.jsx(ee,{})})})})},S=()=>{const r=[120,.33,.33],[t,s]=o.useState(r),[x,g]=o.useState(r),[Q,U]=o.useState(r);return e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:["Value: ",JSON.stringify(t),", Start Value:"," ",JSON.stringify(x),", End Value: ",JSON.stringify(Q)]}),e.jsx(a,{maxW:"sm",value:t,onChange:s,onChangeEnd:U,onChangeStart:g})]})},h=()=>{const[r,t]=o.useState([120,.33,.33]);return e.jsx(a,{maxW:"sm",value:r,onChange:t})};var V,b,C;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" />;
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,T,W;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} size={row} maxW="sm" />;
    }}
    </PropsTable>;
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var v,j,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root defaultValue={[120, 0.33, 0.33]} maxW="sm" />;
}`,...(y=(j=m.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var R,k,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <SaturationSlider.Root key={key} defaultValue={[120, 0.33, 0.33]} maxW="sm" shape={row} />;
    }}
    </PropsTable>;
}`,...(O=(k=i.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var $,E,w;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" step={0.1} />;
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var J,N,P;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root disabled maxW="sm" />;
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,z,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <SaturationSlider.Root maxW="sm" readOnly />;
}`,...(D=(z=d.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var M,q,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);\n  const hue = `${value[0]}°`;\n  const saturation = `${Math.round(value[1] * 100)}%`;\n  const brightness = `${Math.round(value[2] * 100)}%`;\n  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue}>\n      <SaturationSlider.Track>\n        <Tooltip content={`${hue}, ${saturation}, ${brightness}`}>\n          <SaturationSlider.Thumb />\n        </Tooltip>\n      </SaturationSlider.Track>\n    </SaturationSlider.Root>;\n}',...(B=(q=p.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,A,G;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(G=(A=S.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,I,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number, number]>([120, 0.33, 0.33]);
  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue} />;
}`,...(K=(I=h.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};const ye=["Basic","Size","DefaultValue","Shape","Step","Disabled","ReadOnly","ThumbWithTooltip","OnChange","CustomControl"];export{n as Basic,h as CustomControl,m as DefaultValue,c as Disabled,S as OnChange,d as ReadOnly,i as Shape,u as Size,l as Step,p as ThumbWithTooltip,ye as __namedExportsOrder,je as default};
