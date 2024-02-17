import{j as e,a as o,F as s}from"./jsx-runtime-5BUNAZ9W.js";import{r as l}from"./index-4g5l5LRQ.js";import{u as Fe,C as De}from"./index.esm-brxB4zTZ.js";import{C as r}from"./color-selector-371HpKer.js";import{F as D}from"./form-control-TaOpd4jQ.js";import{W as Ee}from"./flex-GUkVfn2c.js";import{B as y}from"./button-_x0xF1BK.js";import{T as E}from"./text-KdXH1h6O.js";import{V as xe}from"./stack-OsCTXQnl.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-olxlcIew.js";import"./factory-RXTd6Ype.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-sgFj2JQg.js";import"./icon-button-C5Suz2TK.js";import"./forward-ref-A-8Arhkk.js";import"./icon-2cwE6nV2.js";import"./index-CBfWCvKJ.js";import"./alpha-slider-jkaGaaic.js";import"./use-color-slider-2G7gn7NZ.js";import"./index-Dj06gBG4.js";import"./event-ccAYLpd0.js";import"./number-RReIgE2V.js";import"./use-component-style-ur23iJdL.js";import"./hue-slider-EWY76zjk.js";import"./color-swatch-UyEHG3tQ.js";import"./input-4oJQvspv.js";import"./saturation-slider-GeB7ge8i.js";import"./use-ripple-u7crcLVz.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-1HlxJrnU.js";import"./loading-wg4TUUCb.js";import"./index-e7LtySSC.js";import"./index-DkyhaWsF.js";const fr={title:"Components / Forms / ColorSelector",component:r},i=()=>e(r,{}),u=()=>o(s,{children:[e(r,{size:"sm"}),e(r,{size:"md"}),e(r,{size:"lg"}),e(r,{size:"full"})]}),f=()=>e(r,{defaultValue:"#ff0000ff"}),m=()=>e(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),d=()=>e(r,{saturationSliderProps:{step:.1},hueSliderProps:{step:10},alphaSliderProps:{step:.1}}),p=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),h=()=>e(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),S=()=>e(r,{withChannel:!1}),b=()=>e(r,{withEyeDropper:!1}),C=()=>e(r,{withResult:!1}),g=()=>o(s,{children:[e(r,{isDisabled:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e(D,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{})})]}),w=()=>o(s,{children:[e(r,{isReadOnly:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e(D,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{})})]}),v=()=>{const[a,t]=l.useState("#4387f4ff");return o(s,{children:[o(Ee,{gap:"md",children:[e(y,{colorScheme:"primary",onClick:()=>t("#4387f4ff"),children:'Change "#4387f4ff"'}),e(y,{colorScheme:"secondary",onClick:()=>t("#895af6ff"),children:'Change "#895af6ff"'}),e(y,{colorScheme:"success",onClick:()=>t("#3cc360ff"),children:'Change "#3cc360ff"'})]}),o(E,{children:["Value: ",a]}),e(r,{value:a,onChange:t})]})},V=()=>{const[a,t]=l.useState("#ff0000ff"),[n,c]=l.useState("#ff0000ff");return o(s,{children:[o(E,{children:["Value: ",a,", Start Value: ",n]}),e(r,{value:a,onChange:t,onChangeStart:c})]})},k=()=>{const[a,t]=l.useState("#ff0000ff"),[n,c]=l.useState("#ff0000ff");return o(s,{children:[o(E,{children:["Value: ",a,", End Value: ",n]}),e(r,{value:a,onChange:t,onChangeEnd:c})]})},P=()=>{var z;const a={colorPicker:"#4387f4ff"},{control:t,handleSubmit:n,watch:c,formState:{errors:x}}=Fe({defaultValues:a}),ye=F=>console.log("submit:",F);return console.log("watch:",c()),o(xe,{as:"form",onSubmit:n(ye),children:[e(D,{isInvalid:!!x.colorPicker,label:"Pick color",errorMessage:(z=x.colorPicker)==null?void 0:z.message,children:e(De,{name:"colorPicker",control:t,render:({field:F})=>e(r,{...F})})}),e(y,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var B,R,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <ColorSelector />;
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var T,M,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector size="sm" />
      <ColorSelector size="md" />
      <ColorSelector size="lg" />
      <ColorSelector size="full" />
    </>;
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,j,H;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="#ff0000ff" />;
}`,...(H=(j=f.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var I,_,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,G,J;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <ColorSelector saturationSliderProps={{
    step: 0.1
  }} hueSliderProps={{
    step: 10
  }} alphaSliderProps={{
    step: 0.1
  }} />;
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <ColorSelector swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <ColorSelector swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <ColorSelector withChannel={false} />;
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,oe,ae;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <ColorSelector withEyeDropper={false} />;
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,se,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <ColorSelector withResult={false} />;
}`,...(ne=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ce,le,ie;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isDisabled swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorSelector />
      </FormControl>
    </>;
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,fe,me;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isReadOnly swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorSelector />
      </FormControl>
    </>;
}`,...(me=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var de,pe,he;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(he=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var Se,be,Ce;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [startValue, onChangeStart] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Ce=(be=V.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ge,we,ve;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [endValue, onChangeEnd] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ve=(we=k.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Ve,ke,Pe;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Pe=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};const mr=["basic","withSize","withDefaultValue","withFormat","withStep","withSwatches","withSwatchesColumns","disabledChannel","disabledEyeDropper","disabledResult","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{mr as __namedExportsOrder,i as basic,v as customControl,fr as default,S as disabledChannel,b as disabledEyeDropper,C as disabledResult,g as isDisabled,w as isReadonly,k as onChangeEnd,V as onChangeStart,P as reactHookForm,f as withDefaultValue,m as withFormat,u as withSize,d as withStep,p as withSwatches,h as withSwatchesColumns};
