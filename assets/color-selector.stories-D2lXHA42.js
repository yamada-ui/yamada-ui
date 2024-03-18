import{j as e,a as o,F as n}from"./jsx-runtime-2xDJh5tt.js";import{r as i}from"./index-CBqU2yxZ.js";import{u as Be,C as ze}from"./index.esm-CiJ9mLzm.js";import{C as r}from"./color-selector-DuZ9dKSY.js";import{B as s}from"./button-B04h-bnh.js";import{F as E}from"./form-control-D1mB1xBr.js";import{W as Re}from"./flex-BqXLc-Xk.js";import{T as x}from"./text-BC__m9gv.js";import{V as Le}from"./stack-DHO7_TeU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DffFcysT.js";import"./factory-DpmudyXM.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-BSSgazaQ.js";import"./icon-button-DPaWCjwB.js";import"./forward-ref-DuAegr0M.js";import"./icon-BPDO9FjE.js";import"./index-CjPoKz7c.js";import"./alpha-slider-DdpZ4y2q.js";import"./use-color-slider-daf8ql1u.js";import"./index-zihLiaAf.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./use-component-style-C8HPJoXa.js";import"./hue-slider-CC07mOsN.js";import"./color-swatch-DfSFRSvr.js";import"./input-Diqz4--A.js";import"./saturation-slider-BXfVQ7UL.js";import"./use-ripple-CYLHRNNs.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BNANSLgb.js";import"./loading-PB7xGStd.js";import"./index-DTWJYyBb.js";import"./index-Dft46qqu.js";const hr={title:"Components / Forms / ColorSelector",component:r},u=()=>e(r,{}),m=()=>o(n,{children:[e(r,{size:"sm"}),e(r,{size:"md"}),e(r,{size:"lg"}),e(r,{size:"full"})]}),f=()=>o(n,{children:[e(r,{children:e(s,{children:"Submit"})}),e(r,{children:({value:a})=>o(s,{children:["Submit ",a]})})]}),d=()=>e(r,{defaultValue:"#ff0000ff"}),p=()=>e(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),h=()=>e(r,{saturationSliderProps:{step:.1},hueSliderProps:{step:10},alphaSliderProps:{step:.1}}),S=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),b=()=>e(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),C=()=>e(r,{withChannel:!1}),g=()=>e(r,{withEyeDropper:!1}),w=()=>e(r,{withResult:!1}),v=()=>o(n,{children:[e(r,{isDisabled:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e(E,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{})})]}),V=()=>o(n,{children:[e(r,{isReadOnly:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e(E,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{})})]}),k=()=>{const[a,t]=i.useState("#4387f4ff");return o(n,{children:[o(Re,{gap:"md",children:[e(s,{colorScheme:"primary",onClick:()=>t("#4387f4ff"),children:'Change "#4387f4ff"'}),e(s,{colorScheme:"secondary",onClick:()=>t("#895af6ff"),children:'Change "#895af6ff"'}),e(s,{colorScheme:"success",onClick:()=>t("#3cc360ff"),children:'Change "#3cc360ff"'})]}),o(x,{children:["Value: ",a]}),e(r,{value:a,onChange:t})]})},P=()=>{const[a,t]=i.useState("#ff0000ff"),[c,l]=i.useState("#ff0000ff");return o(n,{children:[o(x,{children:["Value: ",a,", Start Value: ",c]}),e(r,{value:a,onChange:t,onChangeStart:l})]})},y=()=>{const[a,t]=i.useState("#ff0000ff"),[c,l]=i.useState("#ff0000ff");return o(n,{children:[o(x,{children:["Value: ",a,", End Value: ",c]}),e(r,{value:a,onChange:t,onChangeEnd:l})]})},F=()=>{var z;const a={colorPicker:"#4387f4ff"},{control:t,handleSubmit:c,watch:l,formState:{errors:B}}=Be({defaultValues:a}),xe=D=>console.log("submit:",D);return console.log("watch:",l()),o(Le,{as:"form",onSubmit:c(xe),children:[e(E,{isInvalid:!!B.colorPicker,label:"Pick color",errorMessage:(z=B.colorPicker)==null?void 0:z.message,children:e(ze,{name:"colorPicker",control:t,render:({field:D})=>e(r,{...D})})}),e(s,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var R,L,T;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <ColorSelector />;
}`,...(T=(L=u.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var M,O,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector size="sm" />
      <ColorSelector size="md" />
      <ColorSelector size="lg" />
      <ColorSelector size="full" />
    </>;
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,H,I;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector>
        <Button>Submit</Button>
      </ColorSelector>

      <ColorSelector>
        {({
        value
      }) => <Button>Submit {value}</Button>}
      </ColorSelector>
    </>;
}`,...(I=(H=f.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var _,q,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="#ff0000ff" />;
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <ColorSelector saturationSliderProps={{
    step: 0.1
  }} hueSliderProps={{
    step: 10
  }} alphaSliderProps={{
    step: 0.1
  }} />;
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <ColorSelector swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <ColorSelector swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,ae,te;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <ColorSelector withChannel={false} />;
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,ce;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <ColorSelector withEyeDropper={false} />;
}`,...(ce=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,ie,ue;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <ColorSelector withResult={false} />;
}`,...(ue=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var me,fe,de;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isDisabled swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorSelector />
      </FormControl>
    </>;
}`,...(de=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:de.source}}};var pe,he,Se;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isReadOnly swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorSelector />
      </FormControl>
    </>;
}`,...(Se=(he=V.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var be,Ce,ge;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={() => onChange("#4387f4ff")}>
          Change "#4387f4ff"
        </Button>

        <Button colorScheme="secondary" onClick={() => onChange("#895af6ff")}>
          Change "#895af6ff"
        </Button>

        <Button colorScheme="success" onClick={() => onChange("#3cc360ff")}>
          Change "#3cc360ff"
        </Button>
      </Wrap>

      <Text>Value: {value}</Text>
      <ColorSelector value={value} onChange={onChange} />
    </>;
}`,...(ge=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var we,ve,Ve;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [startValue, onChangeStart] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Ve=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};var ke,Pe,ye;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [endValue, onChangeEnd] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ye=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:ye.source}}};var Fe,De,Ee;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  type Data = {
    colorPicker: string;
  };
  const defaultValues: Data = {
    colorPicker: "#4387f4ff"
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
      <FormControl isInvalid={!!errors.colorPicker} label="Pick color" errorMessage={errors.colorPicker?.message}>
        <Controller name="colorPicker" control={control} render={({
        field
      }) => <ColorSelector {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ee=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};const Sr=["basic","withSize","withChildren","withDefaultValue","withFormat","withStep","withSwatches","withSwatchesColumns","disabledChannel","disabledEyeDropper","disabledResult","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Sr as __namedExportsOrder,u as basic,k as customControl,hr as default,C as disabledChannel,g as disabledEyeDropper,w as disabledResult,v as isDisabled,V as isReadonly,y as onChangeEnd,P as onChangeStart,F as reactHookForm,f as withChildren,d as withDefaultValue,p as withFormat,m as withSize,h as withStep,S as withSwatches,b as withSwatchesColumns};
