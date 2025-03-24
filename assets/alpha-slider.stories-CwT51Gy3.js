import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as t}from"./index-BwPxMuoB.js";import{u as me,C as pe}from"./index.esm-C038jXrr.js";import{A as a}from"./alpha-slider-DpgWne9y.js";import{F as V}from"./fieldset-CSrezQyl.js";import{T as s}from"./text-clsxocLN.js";import{C as he}from"./center-BgoPILRQ.js";import{B as j}from"./button-Dm54j0EP.js";import{V as Se}from"./stack-D_e4Awei.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-color-slider-Cjw31GEx.js";import"./index-DLOQPSsO.js";import"./factory-B_KMcXyW.js";import"./index-CpILZzml.js";import"./event-C_48urmU.js";import"./form-control-4O_IQfgA.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";import"./number-CcP_arM8.js";import"./visually-hidden-BYT-PWA-.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";const Ke={component:a,title:"Components / Forms / AlphaSlider"},u=()=>e.jsx(a,{}),c=()=>e.jsx(a,{color:"#4387f4",defaultValue:.3}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",color:"#4387f4",defaultValue:.3}),e.jsx(a,{size:"md",color:"#895af6",defaultValue:.6}),e.jsx(a,{size:"lg",color:"#3cc360",defaultValue:.9})]}),d=()=>{const[r,n]=t.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",max:.8,min:.3,value:r,onChange:n})]})},m=()=>{const[r,n]=t.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",step:.1,value:r,onChange:n})]})},p=()=>{const[r,n]=t.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",focusThumbOnChange:!1,step:.1,value:r}),e.jsxs(he,{gap:"md",w:"full",children:[e.jsx(j,{disabled:r===0,onClick:()=>n(o=>o!==0?Math.round((o-.1)*10)/10:o),children:"-0.1"}),e.jsx(j,{colorScheme:"blue",disabled:r===1,onClick:()=>n(o=>o!==1?Math.round((o+.1)*10)/10:o),children:"+0.1"})]})]})},h=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",disabled:!0}),e.jsx(V,{disabled:!0,helperMessage:"Please select your favorite color",legend:"Pick color",children:e.jsx(a,{color:"#4387f4"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"#4387f4",readOnly:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",legend:"Pick color",readOnly:!0,children:e.jsx(a,{color:"#4387f4"})})]}),f=()=>{const[r,n]=t.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["Value: ",r]}),e.jsx(a,{color:"#4387f4",value:r,onChange:n})]})},x=()=>{const[r,n]=t.useState(.5),[o,l]=t.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["Value: ",r,", Start Value: ",o]}),e.jsx(a,{color:"#4387f4",value:r,onChange:n,onChangeStart:l})]})},C=()=>{const[r,n]=t.useState(.5),[o,l]=t.useState(.5);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:["Value: ",r,", End Value: ",o]}),e.jsx(a,{color:"#4387f4",value:r,onChange:n,onChangeEnd:l})]})},v=()=>{var F;const r={alphaSlider:.5},{control:n,formState:{errors:o},handleSubmit:l,watch:ie}=me({defaultValues:r}),de=b=>console.log("submit:",b);return console.log("watch:",ie()),e.jsxs(Se,{as:"form",onSubmit:l(de),children:[e.jsx(V,{errorMessage:(F=o.alphaSlider)==null?void 0:F.message,invalid:!!o.alphaSlider,legend:"Pick color",children:e.jsx(pe,{name:"alphaSlider",control:n,render:({field:b})=>e.jsx(a,{color:"#4387f4",...b}),rules:{max:{message:"The maximum value is 0.5.",value:.5}}})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var w,A,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <AlphaSlider />;
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var k,M,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <AlphaSlider color="#4387f4" defaultValue={0.3} />;
}`,...(y=(M=c.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var E,O,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider size="sm" color="#4387f4" defaultValue={0.3} />
      <AlphaSlider size="md" color="#895af6" defaultValue={0.6} />
      <AlphaSlider size="lg" color="#3cc360" defaultValue={0.9} />
    </>;
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var z,B,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" max={0.8} min={0.3} value={value} onChange={onChange} />
    </>;
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,_,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" step={0.1} value={value} onChange={onChange} />
    </>;
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,G,I;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(0.5);
  return <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" focusThumbOnChange={false} step={0.1} value={value} />

      <Center gap="md" w="full">
        <Button disabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? Math.round((prev - 0.1) * 10) / 10 : prev)}>
          -0.1
        </Button>

        <Button colorScheme="blue" disabled={value === 1} onClick={() => setValue(prev => prev !== 1 ? Math.round((prev + 0.1) * 10) / 10 : prev)}>
          +0.1
        </Button>
      </Center>
    </>;
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,K,L;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <AlphaSlider withShadow={false} />;
}`,...(L=(K=h.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" disabled />

      <Fieldset disabled helperMessage="Please select your favorite color" legend="Pick color">
        <AlphaSlider color="#4387f4" />
      </Fieldset>
    </>;
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <AlphaSlider color="#4387f4" readOnly />

      <Fieldset helperMessage="Please select your favorite color" legend="Pick color" readOnly>
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
}`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,te,se;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(0.5);
  const [endValue, onChangeEnd] = useState<number>(0.5);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(se=(te=C.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ue,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.alphaSlider?.message} invalid={!!errors.alphaSlider} legend="Pick color">
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
}`,...(ce=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Le=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","disabled","readOnly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Le as __namedExportsOrder,u as basic,f as customControl,Ke as default,S as disabled,h as disabledShadow,C as onChangeEnd,x as onChangeStart,v as reactHookForm,g as readOnly,c as withDefaultValue,p as withFocusThumbOnChange,d as withMinMax,i as withSize,m as withStep};
