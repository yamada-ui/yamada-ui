import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as t}from"./index-BwDkhjyp.js";import{u as de,C as he}from"./index.esm-CMZNHfZV.js";import{H as a}from"./hue-slider-COyj-133.js";import{T as o}from"./text-CYMgUvo8.js";import{C as pe}from"./center-BDZR8xcV.js";import{B as j}from"./button-BDKzZ-bK.js";import{F as V}from"./form-control-3r7D-N3m.js";import{V as Se}from"./stack-ByAleKXq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-color-slider-Coz6BFNj.js";import"./index-B5K7Amiu.js";import"./factory-CJEIqePD.js";import"./extends-CF3RwP-h.js";import"./index-Bm3tH3yA.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-p12qS94K.js";import"./theme-provider-BmJ-9UWz.js";import"./use-ripple-CiehlBDG.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-C535EKyX.js";import"./loading-CbCkpXHC.js";import"./icon-D5_Yzct7.js";import"./index-f0vfX_rP.js";const Je={title:"Components / Forms / HueSlider",component:a},u=()=>e.jsx(a,{}),i=()=>e.jsx(a,{defaultValue:320}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",defaultValue:120}),e.jsx(a,{size:"md",defaultValue:180}),e.jsx(a,{size:"lg",defaultValue:240})]}),m=()=>{const[r,n]=t.useState(140);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{value:r,min:120,max:180,onChange:n})]})},d=()=>{const[r,n]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{value:r,step:10,onChange:n})]})},h=()=>{const[r,n]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{value:r,step:10,focusThumbOnChange:!1}),e.jsxs(pe,{w:"full",gap:"md",children:[e.jsx(j,{isDisabled:r===0,onClick:()=>n(s=>s!==0?s-10:s),children:"-10"}),e.jsx(j,{isDisabled:r===100,colorScheme:"blue",onClick:()=>n(s=>s!==100?s+10:s),children:"+10"})]})]})},p=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0}),e.jsx(V,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(a,{})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0}),e.jsx(V,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(a,{})})]}),x=()=>{const[r,n]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{value:r,onChange:n})]})},C=()=>{const[r,n]=t.useState(180),[s,l]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r,", Start Value: ",s]}),e.jsx(a,{value:r,onChange:n,onChangeStart:l})]})},b=()=>{const[r,n]=t.useState(180),[s,l]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r,", End Value: ",s]}),e.jsx(a,{value:r,onChange:n,onChangeEnd:l})]})},v=()=>{var w;const r={hueSlider:180},{control:n,handleSubmit:s,watch:l,formState:{errors:F}}=de({defaultValues:r}),me=f=>console.log("submit:",f);return console.log("watch:",l()),e.jsxs(Se,{as:"form",onSubmit:s(me),children:[e.jsx(V,{isInvalid:!!F.hueSlider,label:"Pick color",errorMessage:(w=F.hueSlider)==null?void 0:w.message,children:e.jsx(he,{name:"hueSlider",control:n,rules:{max:{value:180,message:"The maximum value is 180."}},render:({field:f})=>e.jsx(a,{...f})})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var H,T,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <HueSlider />;
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var k,y,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <HueSlider defaultValue={320} />;
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,P,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <HueSlider size="sm" defaultValue={120} />
      <HueSlider size="md" defaultValue={180} />
      <HueSlider size="lg" defaultValue={240} />
    </>;
}`,...(O=(P=c.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var z,B,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(140);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} min={120} max={180} onChange={onChange} />
    </>;
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var I,_,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} step={10} onChange={onChange} />
    </>;
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,G,J;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>

        <Button isDisabled={value === 100} colorScheme="blue" onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,N;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <HueSlider withShadow={false} />;
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Q,U,W;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <HueSlider isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <HueSlider />
      </FormControl>
    </>;
}`,...(W=(U=S.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <HueSlider isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <HueSlider />
      </FormControl>
    </>;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>;
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,se;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [startValue, onChangeStart] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(se=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,oe,le;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [endValue, onChangeEnd] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(le=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ue,ie,ce;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  type Data = {
    hueSlider: number;
  };
  const defaultValues: Data = {
    hueSlider: 180
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
      <FormControl isInvalid={!!errors.hueSlider} label="Pick color" errorMessage={errors.hueSlider?.message}>
        <Controller name="hueSlider" control={control} rules={{
        max: {
          value: 180,
          message: "The maximum value is 180."
        }
      }} render={({
        field
      }) => <HueSlider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Ke=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ke as __namedExportsOrder,u as basic,x as customControl,Je as default,p as disabledShadow,S as isDisabled,g as isReadonly,b as onChangeEnd,C as onChangeStart,v as reactHookForm,i as withDefaultValue,h as withFocusThumbOnChange,m as withMinMax,c as withSize,d as withStep};
