import{j as e,a,F as t}from"./jsx-runtime-5BUNAZ9W.js";import{r as l}from"./index-4g5l5LRQ.js";import{u as Fe,C as De}from"./index.esm-rcUR5vC1.js";import{C as r}from"./color-picker-9UiMyJ9W.js";import{F as D}from"./form-control-9XpnQ7XD.js";import{W as Ee}from"./flex-_Q70eOee.js";import{B as y}from"./button-cMSAhBpk.js";import{T as E}from"./text-iDDnHZIy.js";import{V as xe}from"./stack-_c9sAZKA.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jXL2Te6W.js";import"./factory-_mTQY6PK.js";import"./theme-provider-XorC6D0y.js";import"./icon-button-QRGURj5a.js";import"./forward-ref-A-8Arhkk.js";import"./icon-_12WOtQg.js";import"./index-z6pzycMb.js";import"./alpha-slider-AQA74t5W.js";import"./use-color-slider-Zzsuykhq.js";import"./index-L9hw7aoW.js";import"./number-RReIgE2V.js";import"./use-component-style-lJBCD4Hi.js";import"./hue-slider-942FYzt4.js";import"./color-swatch-jtS3z5tL.js";import"./input-Qbzi4aBI.js";import"./saturation-slider-nB5j5OsN.js";import"./use-ripple-NMzR3tTC.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-V5SSOO6i.js";import"./loading-MtZqCvSr.js";import"./index-Qpz5-nu_.js";import"./index-nv1zPk__.js";const ir={title:"Components / Forms / ColorPicker",component:r},i=()=>e(r,{}),u=()=>a(t,{children:[e(r,{size:"sm"}),e(r,{size:"md"}),e(r,{size:"lg"}),e(r,{size:"full"})]}),f=()=>e(r,{defaultValue:"#ff0000ff"}),m=()=>e(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),d=()=>e(r,{saturationSliderProps:{step:.1},hueSliderProps:{step:10},alphaSliderProps:{step:.1}}),p=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),h=()=>e(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),b=()=>e(r,{withChannel:!1}),C=()=>e(r,{withEyeDropper:!1}),S=()=>e(r,{withResult:!1}),g=()=>a(t,{children:[e(r,{isDisabled:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e(D,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{})})]}),k=()=>a(t,{children:[e(r,{isReadOnly:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e(D,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{})})]}),P=()=>{const[o,s]=l.useState("#4387f4ff");return a(t,{children:[a(Ee,{gap:"md",children:[e(y,{colorScheme:"primary",onClick:()=>s("#4387f4ff"),children:'Change "#4387f4ff"'}),e(y,{colorScheme:"secondary",onClick:()=>s("#895af6ff"),children:'Change "#895af6ff"'}),e(y,{colorScheme:"success",onClick:()=>s("#3cc360ff"),children:'Change "#3cc360ff"'})]}),a(E,{children:["Value: ",o]}),e(r,{value:o,onChange:s})]})},w=()=>{const[o,s]=l.useState("#ff0000ff"),[n,c]=l.useState("#ff0000ff");return a(t,{children:[a(E,{children:["Value: ",o,", Start Value: ",n]}),e(r,{value:o,onChange:s,onChangeStart:c})]})},v=()=>{const[o,s]=l.useState("#ff0000ff"),[n,c]=l.useState("#ff0000ff");return a(t,{children:[a(E,{children:["Value: ",o,", End Value: ",n]}),e(r,{value:o,onChange:s,onChangeEnd:c})]})},V=()=>{var z;const o={colorPicker:"#4387f4ff"},{control:s,handleSubmit:n,watch:c,formState:{errors:x}}=Fe({defaultValues:o}),ye=F=>console.log("submit:",F);return console.log("watch:",c()),a(xe,{as:"form",onSubmit:n(ye),children:[e(D,{isInvalid:!!x.colorPicker,label:"Pick color",errorMessage:(z=x.colorPicker)==null?void 0:z.message,children:e(De,{name:"colorPicker",control:s,render:({field:F})=>e(r,{...F})})}),e(y,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var B,R,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <ColorPicker />;
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var T,M,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="sm" />
      <ColorPicker size="md" />
      <ColorPicker size="lg" />
      <ColorPicker size="full" />
    </>;
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,j,H;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#ff0000ff" />;
}`,...(H=(j=f.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var I,_,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,G,J;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <ColorPicker saturationSliderProps={{
    step: 0.1
  }} hueSliderProps={{
    step: 10
  }} alphaSliderProps={{
    step: 0.1
  }} />;
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,te,ne;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <ColorPicker withResult={false} />;
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ce,le,ie;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isDisabled swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker />
      </FormControl>
    </>;
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,fe,me;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isReadOnly swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker />
      </FormControl>
    </>;
}`,...(me=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var de,pe,he;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
      <ColorPicker value={value} onChange={onChange} />
    </>;
}`,...(he=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,Ce,Se;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [startValue, onChangeStart] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <ColorPicker value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Se=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ge,ke,Pe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [endValue, onChangeEnd] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <ColorPicker value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Pe=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var we,ve,Ve;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
      }) => <ColorPicker {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ve=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};const ur=["basic","withSize","withDefaultValue","withFormat","withStep","withSwatches","withSwatchesColumns","disabledChannel","disabledEyeDropper","disabledResult","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{ur as __namedExportsOrder,i as basic,P as customControl,ir as default,b as disabledChannel,C as disabledEyeDropper,S as disabledResult,g as isDisabled,k as isReadonly,v as onChangeEnd,w as onChangeStart,V as reactHookForm,f as withDefaultValue,m as withFormat,u as withSize,d as withStep,p as withSwatches,h as withSwatchesColumns};
