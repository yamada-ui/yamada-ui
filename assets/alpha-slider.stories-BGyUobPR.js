import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{u as me,C as pe}from"./index.esm-C-rOWAyx.js";import{A as a}from"./alpha-slider-bf1hN7CT.js";import{F as V}from"./fieldset-D7vG6RZi.js";import{T as t}from"./text-BB5_0k3k.js";import{C as he}from"./center-B5IQJJLi.js";import{B as j}from"./button-CtWzhuL8.js";import{V as Se}from"./stack-CcCHu966.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-color-slider-CgOuvTwz.js";import"./index-CUCM51Cx.js";import"./factory-D0ba2aB7.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./form-control-BjOXh3qv.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-B--WxH8d.js";import"./theme-provider-r-UN7Xzc.js";import"./number-CcP_arM8.js";import"./visually-hidden-BE6IIooX.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./loading-1q-H-TJ4.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";const Ke={component:a,title:"Components / Forms / AlphaSlider"},u=()=>e.jsx(a,{}),c=()=>e.jsx(a,{color:"#4387f4",defaultValue:.3}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",color:"#4387f4",defaultValue:.3}),e.jsx(a,{size:"md",color:"#895af6",defaultValue:.6}),e.jsx(a,{size:"lg",color:"#3cc360",defaultValue:.9})]}),d=()=>{const[r,n]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",max:.8,min:.3,value:r,onChange:n})]})},m=()=>{const[r,n]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",step:.1,value:r,onChange:n})]})},p=()=>{const[r,n]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",focusThumbOnChange:!1,step:.1,value:r}),e.jsxs(he,{gap:"md",w:"full",children:[e.jsx(j,{isDisabled:r===0,onClick:()=>n(o=>o!==0?Math.round((o-.1)*10)/10:o),children:"-0.1"}),e.jsx(j,{colorScheme:"blue",isDisabled:r===1,onClick:()=>n(o=>o!==1?Math.round((o+.1)*10)/10:o),children:"+0.1"})]})]})},h=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",isDisabled:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",isDisabled:!0,legend:"Pick color",children:e.jsx(a,{color:"#4387f4"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",isReadOnly:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",isReadOnly:!0,legend:"Pick color",children:e.jsx(a,{color:"#4387f4"})})]}),f=()=>{const[r,n]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,onChange:n})]})},x=()=>{const[r,n]=s.useState(.5),[o,l]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r,", Start Value: ",o]}),e.jsx(a,{color:"#4387f4",value:r,onChange:n,onChangeStart:l})]})},C=()=>{const[r,n]=s.useState(.5),[o,l]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r,", End Value: ",o]}),e.jsx(a,{color:"#4387f4",value:r,onChange:n,onChangeEnd:l})]})},v=()=>{var F;const r={alphaSlider:.5},{control:n,formState:{errors:o},handleSubmit:l,watch:ie}=me({defaultValues:r}),de=b=>console.log("submit:",b);return console.log("watch:",ie()),e.jsxs(Se,{as:"form",onSubmit:l(de),children:[e.jsx(V,{errorMessage:(F=o.alphaSlider)==null?void 0:F.message,isInvalid:!!o.alphaSlider,legend:"Pick color",children:e.jsx(pe,{name:"alphaSlider",control:n,render:({field:b})=>e.jsx(a,{color:"#4387f4",...b}),rules:{max:{message:"The maximum value is 0.5.",value:.5}}})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var w,A,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <AlphaSlider />;
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var D,k,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <AlphaSlider color="#4387f4" defaultValue={0.3} />;
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var y,E,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider size="sm" color="#4387f4" defaultValue={0.3} />
      <AlphaSlider size="md" color="#895af6" defaultValue={0.6} />
      <AlphaSlider size="lg" color="#3cc360" defaultValue={0.9} />
    </>;
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var O,z,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" max={0.8} min={0.3} value={value} onChange={onChange} />
    </>;
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var R,H,I;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" step={0.1} value={value} onChange={onChange} />
    </>;
}`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var _,q,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" focusThumbOnChange={false} step={0.1} value={value} />

      <Center gap="md" w="full">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? Math.round((prev - 0.1) * 10) / 10 : prev)}>
          -0.1
        </Button>

        <Button colorScheme="blue" isDisabled={value === 1} onClick={() => setValue(prev => prev !== 1 ? Math.round((prev + 0.1) * 10) / 10 : prev)}>
          +0.1
        </Button>
      </Center>
    </>;
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,L;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <AlphaSlider withShadow={false} />;
}`,...(L=(K=h.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isDisabled />

      <Fieldset helperMessage="Please select your favorite color" isDisabled legend="Pick color">
        <AlphaSlider color="#4387f4" />
      </Fieldset>
    </>;
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isReadOnly />

      <Fieldset helperMessage="Please select your favorite color" isReadOnly legend="Pick color">
        <AlphaSlider color="#4387f4" />
      </Fieldset>
    </>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} />
    </>;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [startValue, onChangeStart] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,se,te;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [endValue, onChangeEnd] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ue,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  interface Data {
    alphaSlider: number;
  }
  const defaultValues: Data = {
    alphaSlider: 0.5
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
      <Fieldset errorMessage={errors.alphaSlider?.message} isInvalid={!!errors.alphaSlider} legend="Pick color">
        <Controller name="alphaSlider" control={control} render={({
        field
      }) => <AlphaSlider color="#4387f4" {...field} />} rules={{
        max: {
          message: "The maximum value is 0.5.",
          value: 0.5
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Le=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Le as __namedExportsOrder,u as basic,f as customControl,Ke as default,h as disabledShadow,S as isDisabled,g as isReadonly,C as onChangeEnd,x as onChangeStart,v as reactHookForm,c as withDefaultValue,p as withFocusThumbOnChange,d as withMinMax,i as withSize,m as withStep};
