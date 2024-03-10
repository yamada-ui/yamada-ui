import{j as e,a as n,F as s}from"./jsx-runtime-5BUNAZ9W.js";import{r as l}from"./index-4g5l5LRQ.js";import{u as pe,C as Se}from"./index.esm-3DtIbTPy.js";import{H as a}from"./hue-slider-pxOokjh5.js";import{T as u}from"./text-IGmQoJ5n.js";import{C as ge}from"./center-N-_dQ35l.js";import{B as H}from"./button-ucuE55cc.js";import{F as T}from"./form-control-h2Bmpacr.js";import{V as Ce}from"./stack-9G9PghDz.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./use-color-slider-965p4Tu9.js";import"./index-RZADQAKp.js";import"./factory-mZ_iv4c5.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-Qjvtw-dV.js";import"./event-ccAYLpd0.js";import"./number-RReIgE2V.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-kbmWGovm.js";import"./theme-provider-GXaWE2yQ.js";import"./use-ripple-epR309bC.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-pT_7ipRu.js";import"./loading-yhnSUNiJ.js";import"./index-Gv6rFnuW.js";import"./index-TgqKzHHP.js";import"./index-xCDaEQws.js";import"./icon-_tO3S1Xv.js";const Qe={title:"Components / Forms / HueSlider",component:a},c=()=>e(a,{}),m=()=>e(a,{defaultValue:320}),d=()=>n(s,{children:[e(a,{size:"sm",defaultValue:120}),e(a,{size:"md",defaultValue:180}),e(a,{size:"lg",defaultValue:240})]}),h=()=>{const[r,t]=l.useState(140);return n(s,{children:[n(u,{children:["Value: ",r]}),e(a,{value:r,min:120,max:180,onChange:t})]})},p=()=>{const[r,t]=l.useState(180);return n(s,{children:[n(u,{children:["Value: ",r]}),e(a,{value:r,step:10,onChange:t})]})},S=()=>{const[r,t]=l.useState(180);return n(s,{children:[n(u,{children:["Value: ",r]}),e(a,{value:r,step:10,focusThumbOnChange:!1}),n(ge,{w:"full",gap:"md",children:[e(H,{isDisabled:r===0,onClick:()=>t(o=>o!==0?o-10:o),children:"-10"}),e(H,{isDisabled:r===100,colorScheme:"blue",onClick:()=>t(o=>o!==100?o+10:o),children:"+10"})]})]})},g=()=>e(a,{withShadow:!1}),C=()=>n(s,{children:[e(a,{isDisabled:!0}),e(T,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(a,{})})]}),b=()=>n(s,{children:[e(a,{isReadOnly:!0}),e(T,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(a,{})})]}),v=()=>{const[r,t]=l.useState(180);return n(s,{children:[n(u,{children:["Value: ",r]}),e(a,{value:r,onChange:t})]})},f=()=>{const[r,t]=l.useState(180),[o,i]=l.useState(180);return n(s,{children:[n(u,{children:["Value: ",r,", Start Value: ",o]}),e(a,{value:r,onChange:t,onChangeStart:i})]})},V=()=>{const[r,t]=l.useState(180),[o,i]=l.useState(180);return n(s,{children:[n(u,{children:["Value: ",r,", End Value: ",o]}),e(a,{value:r,onChange:t,onChangeEnd:i})]})},x=()=>{var D;const r={hueSlider:180},{control:t,handleSubmit:o,watch:i,formState:{errors:F}}=pe({defaultValues:r}),he=w=>console.log("submit:",w);return console.log("watch:",i()),n(Ce,{as:"form",onSubmit:o(he),children:[e(T,{isInvalid:!!F.hueSlider,label:"Pick color",errorMessage:(D=F.hueSlider)==null?void 0:D.message,children:e(Se,{name:"hueSlider",control:t,rules:{max:{value:180,message:"The maximum value is 180."}},render:({field:w})=>e(a,{...w})})}),e(H,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var k,y,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <HueSlider />;
}`,...(E=(y=c.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,P,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <HueSlider defaultValue={320} />;
}`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var z,B,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <HueSlider size="sm" defaultValue={120} />
      <HueSlider size="md" defaultValue={180} />
      <HueSlider size="lg" defaultValue={240} />
    </>;
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var j,I,_;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(140);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} min={120} max={180} onChange={onChange} />
    </>;
}`,...(_=(I=h.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,A,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} step={10} onChange={onChange} />
    </>;
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,L;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(L=(K=S.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <HueSlider withShadow={false} />;
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <HueSlider isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <HueSlider />
      </FormControl>
    </>;
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <HueSlider isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <HueSlider />
      </FormControl>
    </>;
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  return <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>;
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,oe,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [startValue, onChangeStart] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ue,ie;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(180);
  const [endValue, onChangeEnd] = useState<number>(180);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ie=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,me,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(de=(me=x.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const Ue=["basic","withDefaultValue","withSize","withMinMax","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ue as __namedExportsOrder,c as basic,v as customControl,Qe as default,g as disabledShadow,C as isDisabled,b as isReadonly,V as onChangeEnd,f as onChangeStart,x as reactHookForm,m as withDefaultValue,S as withFocusThumbOnChange,h as withMinMax,d as withSize,p as withStep};
