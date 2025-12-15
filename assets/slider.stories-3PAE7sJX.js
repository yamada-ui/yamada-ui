import{n as Le,o as Be,I as De,j as e,C as Ae,r as s,T as qe}from"./iframe-C1QqsVA9.js";import{P as T}from"./props-table-CLqbYtSs.js";import{F as y}from"./for-Be_orN7T.js";import{T as He}from"./tooltip-kISzBs02.js";import{S as r,a as Oe,c as Pe,b as _e,d as We}from"./slider-BA0yrMV5.js";import{F}from"./use-field-props-B6L2FiW2.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DHpvRiol.js";import"./grid-item-Cxe7QMy1.js";import"./flex-Bs-NHhmm.js";import"./heading-V-V_Ybpq.js";import"./index-B7LYMO55.js";import"./index-DOoFD4Ha.js";import"./popover-DhD92pCE.js";import"./index-BWHmAA5-.js";import"./use-disclosure-6PKa0G7n.js";import"./event-Cy7jkmKm.js";import"./slide-fade-DXhHZ6Pm.js";import"./transition-CAjTtIHs.js";import"./fade-scale--Ag4Rwlg.js";import"./index-BSgcRBWk.js";import"./use-breakpoint-CoNcer5t.js";import"./use-breakpoint-value-D2WNVgM0.js";import"./use-color-mode-value-CLV_hip_.js";import"./index-COln0Ryr.js";import"./index-CuD_K0yg.js";import"./number-CcP_arM8.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],Ge=Le("audio-lines",Ne),Je=Be(De)({as:Ge}),fr={component:r,title:"Components / Slider"},n=()=>e.jsx(r,{defaultValue:50}),l=()=>e.jsx(T,{variant:"stack",columns:["outline","solid"],rows:Ae,children:(a,o,t)=>e.jsx(r,{colorScheme:o,variant:a,defaultValue:50},t)}),u=()=>e.jsx(T,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(a,o,t)=>e.jsx(r,{size:o,defaultValue:50},t)}),d=()=>e.jsx(r,{defaultValue:50}),i=()=>e.jsx(r,{defaultValue:50,max:200,min:0}),c=()=>e.jsx(r,{defaultValue:[25,75]}),m=()=>e.jsx(r,{betweenThumbs:25,defaultValue:[25,75]}),p=()=>e.jsx(r,{defaultValue:50,h:"xs",orientation:"vertical"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{defaultValue:50,marks:[25,50,75]}),e.jsx(r,{defaultValue:50,marks:[{label:"25",value:25},{label:"50",value:50},{label:"75",value:75}]})]}),h=()=>e.jsx(T,{variant:"stack",rows:["circle","rounded","square"],children:(a,o,t)=>e.jsx(r,{defaultValue:50,shape:o},t)}),x=()=>e.jsx(r,{defaultValue:50,step:10}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","solid"],children:(a,o)=>e.jsx(r,{variant:a,defaultValue:50,disabled:!0},o)}),e.jsx(F,{disabled:!0,helperMessage:"Please select your preferred volume.",label:"Sound volume",children:e.jsx(r,{defaultValue:50})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","solid"],children:(a,o)=>e.jsx(r,{variant:a,defaultValue:50,readOnly:!0},o)}),e.jsx(F,{helperMessage:"Please select your preferred volume.",label:"Sound volume",readOnly:!0,children:e.jsx(r,{defaultValue:50})})]}),V=()=>{const[a,o]=s.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","solid"],children:(t,C)=>e.jsx(r,{variant:t,invalid:a<20,value:a,onChange:o},C)}),e.jsx(F,{errorMessage:"Volume should be set to 20 or higher.",invalid:a<20,label:"Sound volume",children:e.jsx(r,{value:a,onChange:o})})]})},f=()=>{const[a,o]=s.useState(50);return e.jsxs(r,{value:a,onChange:o,children:[e.jsxs(Oe,{children:[e.jsx(Pe,{}),e.jsx(He,{content:a,children:e.jsx(_e,{})})]}),e.jsx(We,{marks:[25,50,75]})]})},j=()=>{const[a,o]=s.useState(50),[t,C]=s.useState(50),[ze,Ie]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(qe,{children:["Value: ",a,", Start Value: ",t,", End Value: ",ze]}),e.jsx(r,{value:a,onChange:o,onChangeEnd:Ie,onChangeStart:C})]})},b=()=>e.jsx(r,{defaultValue:50,rangeFill:"red.bg",thumbFill:"red",trackFill:"red.bg",trackSize:"5"}),k=()=>e.jsx(r,{defaultValue:50,children:e.jsxs(Oe,{children:[e.jsx(Pe,{}),e.jsx(_e,{children:e.jsx(Je,{fontSize:"sm"})})]})}),R=()=>{const[a,o]=s.useState(50);return e.jsx(r,{value:a,onChange:o})};var M,w,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} />;
}`,...(E=(w=n.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var O,P,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Slider.Root key={key} colorScheme={row} variant={column} defaultValue={50} />;
    }}
    </PropsTable>;
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var z,I,L;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <Slider.Root key={key} size={row} defaultValue={50} />;
    }}
    </PropsTable>;
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var B,D,A;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} />;
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var q,H,W;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} max={200} min={0} />;
}`,...(W=(H=i.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var N,G,J;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={[25, 75]} />;
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Slider.Root betweenThumbs={25} defaultValue={[25, 75]} />;
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} h="xs" orientation="vertical" />;
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
      return <Slider.Root key={key} defaultValue={50} shape={row} />;
    }}
    </PropsTable>;
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var se,ne,le;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} step={10} />;
}`,...(le=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ue,de,ie;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => <Slider.Root key={index} variant={variant} defaultValue={50} disabled />}
      </For>

      <Field.Root disabled helperMessage="Please select your preferred volume." label="Sound volume">
        <Slider.Root defaultValue={50} />
      </Field.Root>
    </>;
}`,...(ie=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,me,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => <Slider.Root key={index} variant={variant} defaultValue={50} readOnly />}
      </For>

      <Field.Root helperMessage="Please select your preferred volume." label="Sound volume" readOnly>
        <Slider.Root defaultValue={50} />
      </Field.Root>
    </>;
}`,...(pe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var Se,he,xe;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(15);
  return <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => <Slider.Root key={index} variant={variant} invalid={value < 20} value={value} onChange={onChange} />}
      </For>

      <Field.Root errorMessage="Volume should be set to 20 or higher." invalid={value < 20} label="Sound volume">
        <Slider.Root value={value} onChange={onChange} />
      </Field.Root>
    </>;
}`,...(xe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,ve,Ve;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Ve=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};var fe,je,be;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState(50);
  const [startValue, onChangeStart] = useState(50);
  const [endValue, onChangeEnd] = useState(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <Slider.Root value={value} onChange={onChange} onChangeEnd={onChangeEnd} onChangeStart={onChangeStart} />
    </>;
}`,...(be=(je=j.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var ke,Re,Ce;b.parameters={...b.parameters,docs:{...(ke=b.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50} rangeFill="red.bg" thumbFill="red" trackFill="red.bg" trackSize="5" />;
}`,...(Ce=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var Te,ye,Fe;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <Slider.Root defaultValue={50}>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb>
          <AudioLinesIcon fontSize="sm" />
        </Slider.Thumb>
      </Slider.Track>
    </Slider.Root>;
}`,...(Fe=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Me,we,Ee;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(50);
  return <Slider.Root value={value} onChange={setValue} />;
}`,...(Ee=(we=R.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};const jr=["Basic","Variant","Size","DefaultValue","MinMax","Range","BetweenThumbs","Vertical","Mark","Shape","Step","Disabled","ReadOnly","Invalid","ThumbWithTooltip","OnChange","CustomColor","CustomThumb","CustomControl"];export{n as Basic,m as BetweenThumbs,b as CustomColor,R as CustomControl,k as CustomThumb,d as DefaultValue,g as Disabled,V as Invalid,S as Mark,i as MinMax,j as OnChange,c as Range,v as ReadOnly,h as Shape,u as Size,x as Step,f as ThumbWithTooltip,l as Variant,p as Vertical,jr as __namedExportsOrder,fr as default};
