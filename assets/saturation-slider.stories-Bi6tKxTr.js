import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as u}from"./index-BwPxMuoB.js";import{u as de,C as me}from"./index.esm-C038jXrr.js";import{S as r}from"./saturation-slider-KU0gfs6W.js";import{T as l}from"./text-DKjBQKmK.js";import{W as k}from"./flex-BYE4mzTi.js";import{V as w}from"./stack-BP8LKMVN.js";import{B as d}from"./button-CqSjNDtY.js";import{F}from"./fieldset-Co85odFD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DCT-NtcY.js";import"./factory-DbNU74ts.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./form-control-DgcE1-oN.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./number-CcP_arM8.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./visually-hidden-C2KN4GNP.js";const _e={component:r,title:"Components / Forms / SaturationSlider"},S=()=>e.jsx(r,{}),p=()=>e.jsx(r,{defaultValue:[320,1,1]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",defaultValue:[120,.33,.33]}),e.jsx(r,{size:"md",defaultValue:[180,.66,.66]}),e.jsx(r,{size:"lg",defaultValue:[240,1,1]})]}),g=()=>{const[n,t]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{step:.1,value:n,onChange:t})]})},x=()=>{const[n,t]=u.useState([180,1,1]),[,s,o]=n,c=(O,m)=>{const a=O==="s"?1:2;t(i=>(m==="increment"?i[a]!==1&&(i[a]=Math.round((i[a]+.1)*10)/10):i[a]!==0&&(i[a]=Math.round((i[a]-.1)*10)/10),[...i]))};return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{focusThumbOnChange:!1,step:10,value:n}),e.jsxs(k,{gap:"md",children:[e.jsxs(w,{gap:"sm",w:"auto",children:[e.jsx(l,{children:"Saturation"}),e.jsxs(k,{gap:"md",children:[e.jsx(d,{disabled:s===0,onClick:()=>c("s","decrement"),children:"-0.1"}),e.jsx(d,{colorScheme:"blue",disabled:s===1,onClick:()=>c("s","increment"),children:"+0.1"})]})]}),e.jsxs(w,{gap:"sm",w:"auto",children:[e.jsx(l,{children:"Brightness"}),e.jsxs(k,{gap:"md",children:[e.jsx(d,{disabled:o===0,onClick:()=>c("v","decrement"),children:"-0.1"}),e.jsx(d,{colorScheme:"blue",disabled:o===1,onClick:()=>c("v","increment"),children:"+0.1"})]})]})]})]})},f=()=>e.jsx(r,{withShadow:!1}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0}),e.jsx(F,{disabled:!0,helperMessage:"Please select your favorite color",legend:"Pick color",children:e.jsx(r,{})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{readOnly:!0}),e.jsx(F,{helperMessage:"Please select your favorite color",legend:"Pick color",readOnly:!0,children:e.jsx(r,{})})]}),j=()=>{const[n,t]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{value:n,onChange:t})]})},V=()=>{const[n,t]=u.useState([180,1,1]),[s,o]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n),", Start Value:"," ",JSON.stringify(s)]}),e.jsx(r,{value:n,onChange:t,onChangeStart:o})]})},b=()=>{const[n,t]=u.useState([180,1,1]),[s,o]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n),", End Value: ",JSON.stringify(s)]}),e.jsx(r,{value:n,onChange:t,onChangeEnd:o})]})},y=()=>{var m;const n={saturationSlider:[180,1,1]},{control:t,formState:{errors:s},handleSubmit:o,watch:c}=de({defaultValues:n}),O=a=>console.log("submit:",a);return console.log("watch:",c()),e.jsxs(w,{as:"form",onSubmit:o(O),children:[e.jsx(F,{errorMessage:(m=s.saturationSlider)==null?void 0:m.message,invalid:!!s.saturationSlider,legend:"Pick color",children:e.jsx(me,{name:"saturationSlider",control:t,render:({field:a})=>e.jsx(r,{...a})})}),e.jsx(d,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var T,B,J;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <SaturationSlider />;
}`,...(J=(B=S.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var N,E,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <SaturationSlider defaultValue={[320, 1, 1]} />;
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,P,z;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider size="sm" defaultValue={[120, 0.33, 0.33]} />
      <SaturationSlider size="md" defaultValue={[180, 0.66, 0.66]} />
      <SaturationSlider size="lg" defaultValue={[240, 1, 1]} />
    </>;
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var W,D,_;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider step={0.1} value={value} onChange={onChange} />
    </>;
}`,...(_=(D=g.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var R,q,A;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Hsv>([180, 1, 1]);
  const [, s, v] = value;
  const onChange = (space: "s" | "v", type: "decrement" | "increment") => {
    const i = space === "s" ? 1 : 2;
    setValue(prev => {
      if (type === "increment") {
        if (prev[i] !== 1) prev[i] = Math.round((prev[i] + 0.1) * 10) / 10;
      } else {
        if (prev[i] !== 0) prev[i] = Math.round((prev[i] - 0.1) * 10) / 10;
      }
      return [...prev];
    });
  };
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider focusThumbOnChange={false} step={10} value={value} />

      <Wrap gap="md">
        <VStack gap="sm" w="auto">
          <Text>Saturation</Text>

          <Wrap gap="md">
            <Button disabled={s === 0} onClick={() => onChange("s", "decrement")}>
              -0.1
            </Button>

            <Button colorScheme="blue" disabled={s === 1} onClick={() => onChange("s", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>

        <VStack gap="sm" w="auto">
          <Text>Brightness</Text>

          <Wrap gap="md">
            <Button disabled={v === 0} onClick={() => onChange("v", "decrement")}>
              -0.1
            </Button>

            <Button colorScheme="blue" disabled={v === 1} onClick={() => onChange("v", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>
      </Wrap>
    </>;
}`,...(A=(q=x.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,I,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <SaturationSlider withShadow={false} />;
}`,...(K=(I=f.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var L,Q,U;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider disabled />

      <Fieldset disabled helperMessage="Please select your favorite color" legend="Pick color">
        <SaturationSlider />
      </Fieldset>
    </>;
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider readOnly />

      <Fieldset helperMessage="Please select your favorite color" legend="Pick color" readOnly>
        <SaturationSlider />
      </Fieldset>
    </>;
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} onChange={onChange} />
    </>;
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ae;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  const [startValue, onChangeStart] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, Start Value:{" "}
        {JSON.stringify(startValue)}
      </Text>
      <SaturationSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ae=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,ie;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  const [endValue, onChangeEnd] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, End Value: {JSON.stringify(endValue)}
      </Text>
      <SaturationSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ue,ce;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  interface Data {
    saturationSlider: Hsv;
  }
  const defaultValues: Data = {
    saturationSlider: [180, 1, 1]
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.saturationSlider?.message} invalid={!!errors.saturationSlider} legend="Pick color">
        <Controller name="saturationSlider" control={control} render={({
        field
      }) => <SaturationSlider {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Re=["basic","withDefaultValue","withSize","withStep","withFocusThumbOnChange","disabledShadow","disabled","readOnly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Re as __namedExportsOrder,S as basic,j as customControl,_e as default,C as disabled,f as disabledShadow,b as onChangeEnd,V as onChangeStart,y as reactHookForm,v as readOnly,p as withDefaultValue,x as withFocusThumbOnChange,h as withSize,g as withStep};
