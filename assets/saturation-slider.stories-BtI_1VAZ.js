import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as u}from"./index-BwPxMuoB.js";import{u as de,C as me}from"./index.esm-C038jXrr.js";import{S as r}from"./saturation-slider-KU0gfs6W.js";import{T as l}from"./text-DKjBQKmK.js";import{W as w}from"./flex-BYE4mzTi.js";import{V as F}from"./stack-BP8LKMVN.js";import{B as d}from"./button-CqSjNDtY.js";import{F as O}from"./fieldset-pEQ_2-oV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DCT-NtcY.js";import"./factory-DbNU74ts.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./form-control-DgcE1-oN.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./number-CcP_arM8.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./visually-hidden-Bx6QUwua.js";const Re={component:r,title:"Components / Forms / SaturationSlider"},S=()=>e.jsx(r,{}),p=()=>e.jsx(r,{defaultValue:[320,1,1]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",defaultValue:[120,.33,.33]}),e.jsx(r,{size:"md",defaultValue:[180,.66,.66]}),e.jsx(r,{size:"lg",defaultValue:[240,1,1]})]}),g=()=>{const[n,t]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{step:.1,value:n,onChange:t})]})},x=()=>{const[n,t]=u.useState([180,1,1]),[,s,o]=n,c=(k,m)=>{const a=k==="s"?1:2;t(i=>(m==="increment"?i[a]!==1&&(i[a]=Math.round((i[a]+.1)*10)/10):i[a]!==0&&(i[a]=Math.round((i[a]-.1)*10)/10),[...i]))};return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{focusThumbOnChange:!1,step:10,value:n}),e.jsxs(w,{gap:"md",children:[e.jsxs(F,{gap:"sm",w:"auto",children:[e.jsx(l,{children:"Saturation"}),e.jsxs(w,{gap:"md",children:[e.jsx(d,{isDisabled:s===0,onClick:()=>c("s","decrement"),children:"-0.1"}),e.jsx(d,{colorScheme:"blue",isDisabled:s===1,onClick:()=>c("s","increment"),children:"+0.1"})]})]}),e.jsxs(F,{gap:"sm",w:"auto",children:[e.jsx(l,{children:"Brightness"}),e.jsxs(w,{gap:"md",children:[e.jsx(d,{isDisabled:o===0,onClick:()=>c("v","decrement"),children:"-0.1"}),e.jsx(d,{colorScheme:"blue",isDisabled:o===1,onClick:()=>c("v","increment"),children:"+0.1"})]})]})]})]})},f=()=>e.jsx(r,{withShadow:!1}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0}),e.jsx(O,{helperMessage:"Please select your favorite color",isDisabled:!0,legend:"Pick color",children:e.jsx(r,{})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0}),e.jsx(O,{helperMessage:"Please select your favorite color",isReadOnly:!0,legend:"Pick color",children:e.jsx(r,{})})]}),j=()=>{const[n,t]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{value:n,onChange:t})]})},V=()=>{const[n,t]=u.useState([180,1,1]),[s,o]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n),", Start Value:"," ",JSON.stringify(s)]}),e.jsx(r,{value:n,onChange:t,onChangeStart:o})]})},b=()=>{const[n,t]=u.useState([180,1,1]),[s,o]=u.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["Value: ",JSON.stringify(n),", End Value: ",JSON.stringify(s)]}),e.jsx(r,{value:n,onChange:t,onChangeEnd:o})]})},y=()=>{var m;const n={saturationSlider:[180,1,1]},{control:t,formState:{errors:s},handleSubmit:o,watch:c}=de({defaultValues:n}),k=a=>console.log("submit:",a);return console.log("watch:",c()),e.jsxs(F,{as:"form",onSubmit:o(k),children:[e.jsx(O,{errorMessage:(m=s.saturationSlider)==null?void 0:m.message,isInvalid:!!s.saturationSlider,legend:"Pick color",children:e.jsx(me,{name:"saturationSlider",control:t,render:({field:a})=>e.jsx(r,{...a})})}),e.jsx(d,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,T,B;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <SaturationSlider />;
}`,...(B=(T=S.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var J,N,E;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SaturationSlider defaultValue={[320, 1, 1]} />;
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,M,P;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider size="sm" defaultValue={[120, 0.33, 0.33]} />
      <SaturationSlider size="md" defaultValue={[180, 0.66, 0.66]} />
      <SaturationSlider size="lg" defaultValue={[240, 1, 1]} />
    </>;
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,W,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider step={0.1} value={value} onChange={onChange} />
    </>;
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,_,q;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
            <Button isDisabled={s === 0} onClick={() => onChange("s", "decrement")}>
              -0.1
            </Button>

            <Button colorScheme="blue" isDisabled={s === 1} onClick={() => onChange("s", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>

        <VStack gap="sm" w="auto">
          <Text>Brightness</Text>

          <Wrap gap="md">
            <Button isDisabled={v === 0} onClick={() => onChange("v", "decrement")}>
              -0.1
            </Button>

            <Button colorScheme="blue" isDisabled={v === 1} onClick={() => onChange("v", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>
      </Wrap>
    </>;
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,G,K;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <SaturationSlider withShadow={false} />;
}`,...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var L,Q,U;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider isDisabled />

      <Fieldset helperMessage="Please select your favorite color" isDisabled legend="Pick color">
        <SaturationSlider />
      </Fieldset>
    </>;
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider isReadOnly />

      <Fieldset helperMessage="Please select your favorite color" isReadOnly legend="Pick color">
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
      <Fieldset errorMessage={errors.saturationSlider?.message} isInvalid={!!errors.saturationSlider} legend="Pick color">
        <Controller name="saturationSlider" control={control} render={({
        field
      }) => <SaturationSlider {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Ie=["basic","withDefaultValue","withSize","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ie as __namedExportsOrder,S as basic,j as customControl,Re as default,f as disabledShadow,C as isDisabled,v as isReadonly,b as onChangeEnd,V as onChangeStart,y as reactHookForm,p as withDefaultValue,x as withFocusThumbOnChange,h as withSize,g as withStep};
