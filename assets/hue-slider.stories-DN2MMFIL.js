import{j as e}from"./extends-CwFRzn3r.js";import{r as t}from"./index-BwDkhjyp.js";import{u as de,C as he}from"./index.esm-DXPXqkjk.js";import{H as a}from"./hue-slider-DfOkCMmE.js";import{T as o}from"./text-BDycaLk7.js";import{C as pe}from"./center-Be-BS5k4.js";import{B as j}from"./button-DejEDEJ2.js";import{F as V}from"./form-control-CExpHBXs.js";import{V as Se}from"./stack-l5SyeKEk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-color-slider-_tZDQJcd.js";import"./index-DK-MzzHQ.js";import"./factory-CTJ-ITwV.js";import"./index-C365_6Ad.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-_O1yHJxH.js";import"./theme-provider-gLqcKpHk.js";import"./use-ripple-MSZSdTJh.js";import"./factory-CmtZP4aZ.js";import"./motion-I-9Hg3gW.js";import"./loading-BNHDbHrX.js";import"./icon-DlOX_f12.js";import"./use-var-Cgd0M5xr.js";const Ae={component:a,title:"Components / Forms / HueSlider"},u=()=>e.jsx(a,{}),i=()=>e.jsx(a,{defaultValue:320}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",defaultValue:120}),e.jsx(a,{size:"md",defaultValue:180}),e.jsx(a,{size:"lg",defaultValue:240})]}),m=()=>{const[r,n]=t.useState(140);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{max:180,min:120,value:r,onChange:n})]})},d=()=>{const[r,n]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{step:10,value:r,onChange:n})]})},h=()=>{const[r,n]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{focusThumbOnChange:!1,step:10,value:r}),e.jsxs(pe,{gap:"md",w:"full",children:[e.jsx(j,{isDisabled:r===0,onClick:()=>n(s=>s!==0?s-10:s),children:"-10"}),e.jsx(j,{colorScheme:"blue",isDisabled:r===100,onClick:()=>n(s=>s!==100?s+10:s),children:"+10"})]})]})},p=()=>e.jsx(a,{withShadow:!1}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(a,{})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0}),e.jsx(V,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(a,{})})]}),x=()=>{const[r,n]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r]}),e.jsx(a,{value:r,onChange:n})]})},C=()=>{const[r,n]=t.useState(180),[s,l]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r,", Start Value: ",s]}),e.jsx(a,{value:r,onChange:n,onChangeStart:l})]})},b=()=>{const[r,n]=t.useState(180),[s,l]=t.useState(180);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Value: ",r,", End Value: ",s]}),e.jsx(a,{value:r,onChange:n,onChangeEnd:l})]})},f=()=>{var F;const r={hueSlider:180},{control:n,formState:{errors:s},handleSubmit:l,watch:ce}=de({defaultValues:r}),me=v=>console.log("submit:",v);return console.log("watch:",ce()),e.jsxs(Se,{as:"form",onSubmit:l(me),children:[e.jsx(V,{errorMessage:(F=s.hueSlider)==null?void 0:F.message,isInvalid:!!s.hueSlider,label:"Pick color",children:e.jsx(he,{name:"hueSlider",control:n,render:({field:v})=>e.jsx(a,{...v}),rules:{max:{message:"The maximum value is 180.",value:180}}})}),e.jsx(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var w,H,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <HueSlider />;
}`,...(T=(H=u.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var D,k,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <HueSlider defaultValue={320} />;
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,M,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <HueSlider size="sm" defaultValue={120} />
      <HueSlider size="md" defaultValue={180} />
      <HueSlider size="lg" defaultValue={240} />
    </>;
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var O,z,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(140);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider max={180} min={120} value={value} onChange={onChange} />
    </>;
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var R,I,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider step={10} value={value} onChange={onChange} />
    </>;
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,A,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider focusThumbOnChange={false} step={10} value={value} />

      <Center gap="md" w="full">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>

        <Button colorScheme="blue" isDisabled={value === 100} onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,L;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <HueSlider withShadow={false} />;
}`,...(L=(K=p.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <HueSlider isDisabled />

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <HueSlider />
      </FormControl>
    </>;
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <HueSlider isReadOnly />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <HueSlider />
      </FormControl>
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
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,te,oe;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [endValue, onChangeEnd] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(oe=(te=b.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ue,ie;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.hueSlider?.message} isInvalid={!!errors.hueSlider} label="Pick color">
        <Controller name="hueSlider" control={control} render={({
        field
      }) => <HueSlider {...field} />} rules={{
        max: {
          message: "The maximum value is 180.",
          value: 180
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ie=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};const Ge=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ge as __namedExportsOrder,u as basic,x as customControl,Ae as default,p as disabledShadow,S as isDisabled,g as isReadonly,b as onChangeEnd,C as onChangeStart,f as reactHookForm,i as withDefaultValue,h as withFocusThumbOnChange,m as withMinMax,c as withSize,d as withStep};
