import{j as e,a as o,F as l}from"./jsx-runtime-2xDJh5tt.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as he,C as Se}from"./index.esm-Dtxxx2aT.js";import{A as a}from"./alpha-slider-CcuIhQQ8.js";import{F as T}from"./form-control-CgWRta5g.js";import{T as u}from"./text-GqzQ-8tM.js";import{C as fe}from"./center-8K7PHZ-H.js";import{B as A}from"./button-DbN7DdZz.js";import{V as ge}from"./stack-BnJQESm1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-color-slider-CsoZz9pv.js";import"./index-DqoZ2kNM.js";import"./factory-kXR3An-G.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CstTPrfM.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./theme-provider-Bd5T4K5M.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-BnPBcn2P.js";import"./use-ripple-Q0byik3_.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-Ca3VN97B.js";import"./loading-B8AyfAAt.js";import"./index-C-d4WQS4.js";import"./index-DqoR4ST1.js";import"./index-B3rKjj8b.js";import"./icon-CXZIg4wR.js";const Qe={title:"Components / Forms / AlphaSlider",component:a},i=()=>e(a,{}),m=()=>e(a,{color:"#4387f4",defaultValue:.3}),d=()=>o(l,{children:[e(a,{color:"#4387f4",size:"sm",defaultValue:.3}),e(a,{color:"#895af6",size:"md",defaultValue:.6}),e(a,{color:"#3cc360",size:"lg",defaultValue:.9})]}),p=()=>{const[r,n]=s.useState(.5);return o(l,{children:[o(u,{children:["Value: ",r]}),e(a,{color:"#4387f4",value:r,min:.3,max:.8,onChange:n})]})},h=()=>{const[r,n]=s.useState(.5);return o(l,{children:[o(u,{children:["Value: ",r]}),e(a,{color:"#4387f4",value:r,step:.1,onChange:n})]})},S=()=>{const[r,n]=s.useState(.5);return o(l,{children:[o(u,{children:["Value: ",r]}),e(a,{color:"#4387f4",value:r,step:.1,focusThumbOnChange:!1}),o(fe,{w:"full",gap:"md",children:[e(A,{isDisabled:r===0,onClick:()=>n(t=>t!==0?Math.round((t-.1)*10)/10:t),children:"-0.1"}),e(A,{isDisabled:r===1,colorScheme:"blue",onClick:()=>n(t=>t!==1?Math.round((t+.1)*10)/10:t),children:"+0.1"})]})]})},f=()=>e(a,{withShadow:!1}),g=()=>o(l,{children:[e(a,{color:"#4387f4",isDisabled:!0}),e(T,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(a,{color:"#4387f4"})})]}),C=()=>o(l,{children:[e(a,{color:"#4387f4",isReadOnly:!0}),e(T,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(a,{color:"#4387f4"})})]}),b=()=>{const[r,n]=s.useState(.5);return o(l,{children:[o(u,{children:["Value: ",r]}),e(a,{color:"#4387f4",value:r,onChange:n})]})},v=()=>{const[r,n]=s.useState(.5),[t,c]=s.useState(.5);return o(l,{children:[o(u,{children:["Value: ",r,", Start Value: ",t]}),e(a,{color:"#4387f4",value:r,onChange:n,onChangeStart:c})]})},V=()=>{const[r,n]=s.useState(.5),[t,c]=s.useState(.5);return o(l,{children:[o(u,{children:["Value: ",r,", End Value: ",t]}),e(a,{color:"#4387f4",value:r,onChange:n,onChangeEnd:c})]})},x=()=>{var D;const r={alphaSlider:.5},{control:n,handleSubmit:t,watch:c,formState:{errors:F}}=he({defaultValues:r}),pe=w=>console.log("submit:",w);return console.log("watch:",c()),o(ge,{as:"form",onSubmit:t(pe),children:[e(T,{isInvalid:!!F.alphaSlider,label:"Pick color",errorMessage:(D=F.alphaSlider)==null?void 0:D.message,children:e(Se,{name:"alphaSlider",control:n,rules:{max:{value:.5,message:"The maximum value is 0.5."}},render:({field:w})=>e(a,{color:"#4387f4",...w})})}),e(A,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var k,M,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <AlphaSlider />;
}`,...(y=(M=i.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var E,P,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <AlphaSlider color="#4387f4" defaultValue={0.3} />;
}`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var z,B,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" size="sm" defaultValue={0.3} />
      <AlphaSlider color="#895af6" size="md" defaultValue={0.6} />
      <AlphaSlider color="#3cc360" size="lg" defaultValue={0.9} />
    </>;
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var j,H,I;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} min={0.3} max={0.8} onChange={onChange} />
    </>;
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var _,q,G;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} step={0.1} onChange={onChange} />
    </>;
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,L;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} step={0.1} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? Math.round((prev - 0.1) * 10) / 10 : prev)}>
          -0.1
        </Button>

        <Button isDisabled={value === 1} colorScheme="blue" onClick={() => setValue(prev => prev !== 1 ? Math.round((prev + 0.1) * 10) / 10 : prev)}>
          +0.1
        </Button>
      </Center>
    </>;
}`,...(L=(K=S.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <AlphaSlider withShadow={false} />;
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>;
}`,...(ee=($=C.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} />
    </>;
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,te,le;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [startValue, onChangeStart] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var se,ue,ce;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [endValue, onChangeEnd] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ie,me,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  type Data = {
    alphaSlider: number;
  };
  const defaultValues: Data = {
    alphaSlider: 0.5
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.alphaSlider} label="Pick color" errorMessage={errors.alphaSlider?.message}>
        <Controller name="alphaSlider" control={control} rules={{
        max: {
          value: 0.5,
          message: "The maximum value is 0.5."
        }
      }} render={({
        field
      }) => <AlphaSlider color="#4387f4" {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(de=(me=x.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const Ue=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ue as __namedExportsOrder,i as basic,b as customControl,Qe as default,f as disabledShadow,g as isDisabled,C as isReadonly,V as onChangeEnd,v as onChangeStart,x as reactHookForm,m as withDefaultValue,S as withFocusThumbOnChange,p as withMinMax,d as withSize,h as withStep};
