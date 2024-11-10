import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{u as de,C as pe}from"./index.esm-CEdvtQ_U.js";import{A as a}from"./alpha-slider-DUHLtoMK.js";import{T as t}from"./text-BnztNdZ-.js";import{C as he}from"./center-CSG2P-cD.js";import{B as j}from"./button-Dh7D4tOu.js";import{F as V}from"./form-control-Co-DCdKP.js";import{V as Se}from"./stack-DfTvLKXJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-color-slider-Dmo1gNTt.js";import"./index-DPt_fcIQ.js";import"./factory-COau3w21.js";import"./index-BCBmayc8.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./theme-provider-CNI9L2WW.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-CLSKeq_H.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./loading-DYtJ9fc2.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";const Ge={component:a,title:"Components / Forms / AlphaSlider"},u=()=>e.jsx(a,{}),c=()=>e.jsx(a,{color:"#4387f4",defaultValue:.3}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",color:"#4387f4",defaultValue:.3}),e.jsx(a,{size:"md",color:"#895af6",defaultValue:.6}),e.jsx(a,{size:"lg",color:"#3cc360",defaultValue:.9})]}),m=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",max:.8,min:.3,value:r,onChange:o})]})},d=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",step:.1,value:r,onChange:o})]})},p=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",focusThumbOnChange:!1,step:.1,value:r}),e.jsxs(he,{gap:"md",w:"full",children:[e.jsx(j,{isDisabled:r===0,onClick:()=>o(n=>n!==0?Math.round((n-.1)*10)/10:n),children:"-0.1"}),e.jsx(j,{colorScheme:"blue",isDisabled:r===1,onClick:()=>o(n=>n!==1?Math.round((n+.1)*10)/10:n),children:"+0.1"})]})]})},h=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",isDisabled:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(a,{color:"#4387f4"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",isReadOnly:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(a,{color:"#4387f4"})})]}),f=()=>{const[r,o]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,onChange:o})]})},x=()=>{const[r,o]=s.useState(.5),[n,l]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r,", Start Value: ",n]}),e.jsx(a,{color:"#4387f4",value:r,onChange:o,onChangeStart:l})]})},C=()=>{const[r,o]=s.useState(.5),[n,l]=s.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:["Value: ",r,", End Value: ",n]}),e.jsx(a,{color:"#4387f4",value:r,onChange:o,onChangeEnd:l})]})},b=()=>{var F;const r={alphaSlider:.5},{control:o,formState:{errors:n},handleSubmit:l,watch:ie}=de({defaultValues:r}),me=v=>console.log("submit:",v);return console.log("watch:",ie()),e.jsxs(Se,{as:"form",onSubmit:l(me),children:[e.jsx(V,{errorMessage:(F=n.alphaSlider)==null?void 0:F.message,isInvalid:!!n.alphaSlider,label:"Pick color",children:e.jsx(pe,{name:"alphaSlider",control:o,render:({field:v})=>e.jsx(a,{color:"#4387f4",...v}),rules:{max:{message:"The maximum value is 0.5.",value:.5}}})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var w,A,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <AlphaSlider />;
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var D,k,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <AlphaSlider color="#4387f4" defaultValue={0.3} />;
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var y,E,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider size="sm" color="#4387f4" defaultValue={0.3} />
      <AlphaSlider size="md" color="#895af6" defaultValue={0.6} />
      <AlphaSlider size="lg" color="#3cc360" defaultValue={0.9} />
    </>;
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var O,z,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" max={0.8} min={0.3} value={value} onChange={onChange} />
    </>;
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var R,H,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" step={0.1} value={value} onChange={onChange} />
    </>;
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var _,q,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>;
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" isReadOnly />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} />
    </>;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [startValue, onChangeStart] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,te;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [endValue, onChangeEnd] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ue,ce;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.alphaSlider?.message} isInvalid={!!errors.alphaSlider} label="Pick color">
        <Controller name="alphaSlider" control={control} render={({
        field
      }) => <AlphaSlider color="#4387f4" {...field} />} rules={{
        max: {
          message: "The maximum value is 0.5.",
          value: 0.5
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Je=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Je as __namedExportsOrder,u as basic,f as customControl,Ge as default,h as disabledShadow,S as isDisabled,g as isReadonly,C as onChangeEnd,x as onChangeStart,b as reactHookForm,c as withDefaultValue,p as withFocusThumbOnChange,m as withMinMax,i as withSize,d as withStep};
