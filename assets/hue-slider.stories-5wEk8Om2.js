import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as s}from"./index-BwPxMuoB.js";import{u as me,C as he}from"./index.esm-C038jXrr.js";import{H as a}from"./hue-slider-usDqtSE5.js";import{T as o}from"./text-DKjBQKmK.js";import{C as pe}from"./center-B3pLLn64.js";import{B as j}from"./button-CqSjNDtY.js";import{F as V}from"./fieldset-Co85odFD.js";import{V as Se}from"./stack-BP8LKMVN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-color-slider-D1tp4wKo.js";import"./index-DCT-NtcY.js";import"./factory-DbNU74ts.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./form-control-DgcE1-oN.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./number-CcP_arM8.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./visually-hidden-C2KN4GNP.js";const Ke={component:a,title:"Components / Forms / HueSlider"},u=()=>e.jsx(a,{}),c=()=>e.jsx(a,{defaultValue:320}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",defaultValue:120}),e.jsx(a,{size:"md",defaultValue:180}),e.jsx(a,{size:"lg",defaultValue:240})]}),d=()=>{const[r,n]=s.useState(140);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{max:180,min:120,value:r,onChange:n})]})},m=()=>{const[r,n]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{step:10,value:r,onChange:n})]})},h=()=>{const[r,n]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{focusThumbOnChange:!1,step:10,value:r}),e.jsxs(pe,{gap:"md",w:"full",children:[e.jsx(j,{disabled:r===0,onClick:()=>n(t=>t!==0?t-10:t),children:"-10"}),e.jsx(j,{colorScheme:"blue",disabled:r===100,onClick:()=>n(t=>t!==100?t+10:t),children:"+10"})]})]})},p=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{disabled:!0}),e.jsx(V,{disabled:!0,helperMessage:"Please select your favorite color",legend:"Pick color",children:e.jsx(a,{})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{readOnly:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",legend:"Pick color",readOnly:!0,children:e.jsx(a,{})})]}),x=()=>{const[r,n]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{value:r,onChange:n})]})},C=()=>{const[r,n]=s.useState(180),[t,l]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r,", Start Value: ",t]}),e.jsx(a,{value:r,onChange:n,onChangeStart:l})]})},f=()=>{const[r,n]=s.useState(180),[t,l]=s.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r,", End Value: ",t]}),e.jsx(a,{value:r,onChange:n,onChangeEnd:l})]})},v=()=>{var F;const r={hueSlider:180},{control:n,formState:{errors:t},handleSubmit:l,watch:ie}=me({defaultValues:r}),de=b=>console.log("submit:",b);return console.log("watch:",ie()),e.jsxs(Se,{as:"form",onSubmit:l(de),children:[e.jsx(V,{errorMessage:(F=t.hueSlider)==null?void 0:F.message,invalid:!!t.hueSlider,legend:"Pick color",children:e.jsx(he,{name:"hueSlider",control:n,render:({field:b})=>e.jsx(a,{...b}),rules:{max:{message:"The maximum value is 180.",value:180}}})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var w,H,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <HueSlider />;
}`,...(T=(H=u.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var k,y,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <HueSlider defaultValue={320} />;
}`,...(E=(y=c.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var O,M,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <HueSlider size="sm" defaultValue={120} />
      <HueSlider size="md" defaultValue={180} />
      <HueSlider size="lg" defaultValue={240} />
    </>;
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,B,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(140);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider max={180} min={120} value={value} onChange={onChange} />
    </>;
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var _,R,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider step={10} value={value} onChange={onChange} />
    </>;
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,G,I;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider focusThumbOnChange={false} step={10} value={value} />

      <Center gap="md" w="full">
        <Button disabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>

        <Button colorScheme="blue" disabled={value === 100} onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(I=(G=h.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,K,L;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <HueSlider withShadow={false} />;
}`,...(L=(K=p.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <HueSlider disabled />

      <Fieldset disabled helperMessage="Please select your favorite color" legend="Pick color">
        <HueSlider />
      </Fieldset>
    </>;
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <HueSlider readOnly />

      <Fieldset helperMessage="Please select your favorite color" legend="Pick color" readOnly>
        <HueSlider />
      </Fieldset>
    </>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [startValue, onChangeStart] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,oe;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [endValue, onChangeEnd] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ue,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  interface Data {
    hueSlider: number;
  }
  const defaultValues: Data = {
    hueSlider: 180
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
      <Fieldset errorMessage={errors.hueSlider?.message} invalid={!!errors.hueSlider} legend="Pick color">
        <Controller name="hueSlider" control={control} render={({
        field
      }) => <HueSlider {...field} />} rules={{
        max: {
          message: "The maximum value is 180.",
          value: 180
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Le=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","disabled","readOnly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Le as __namedExportsOrder,u as basic,x as customControl,Ke as default,S as disabled,p as disabledShadow,f as onChangeEnd,C as onChangeStart,v as reactHookForm,g as readOnly,c as withDefaultValue,h as withFocusThumbOnChange,d as withMinMax,i as withSize,m as withStep};
