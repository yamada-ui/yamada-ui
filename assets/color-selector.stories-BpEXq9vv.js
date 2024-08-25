import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{u as ye,C as De}from"./index.esm-CMZNHfZV.js";import{C as r}from"./color-selector-B76GC2cx.js";import{B as s}from"./button-BdpTc5Vf.js";import{F as P}from"./form-control-DFW2rk8c.js";import{W as Ee}from"./flex-CA-i6_9p.js";import{T as F}from"./text-COyfleYz.js";import{V as Be}from"./stack-D91i49_J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DhlHQJq_.js";import"./factory-EKX9DfWO.js";import"./extends-CF3RwP-h.js";import"./theme-provider-CuwCkym_.js";import"./icon-button-DxSXLS6n.js";import"./forward-ref-BmTAT9U5.js";import"./icon-Bu5zyKtF.js";import"./index-UQAO-kLr.js";import"./use-component-style-3J6UAnbr.js";import"./alpha-slider-B57zp14Z.js";import"./use-color-slider-Cq5RqYa8.js";import"./index-CqJAT4P8.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-CWzcMwlJ.js";import"./color-swatch-BfJSkioA.js";import"./input-265i_vAp.js";import"./saturation-slider-CDEBKV2p.js";import"./use-ripple-B2dghNjE.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-B_4DOUn5.js";import"./loading-CRwdCDw3.js";const mr={title:"Components / Forms / ColorSelector",component:r},l=()=>e.jsx(r,{}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"full"})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsx(s,{children:"Submit"})}),e.jsx(r,{children:({value:o})=>e.jsxs(s,{children:["Submit ",o]})})]}),m=()=>e.jsx(r,{defaultValue:"#ff0000ff"}),f=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),d=()=>e.jsx(r,{saturationSliderProps:{step:.1},hueSliderProps:{step:10},alphaSliderProps:{step:.1}}),p=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),h=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),S=()=>e.jsx(r,{withChannel:!1}),b=()=>e.jsx(r,{withEyeDropper:!1}),C=()=>e.jsx(r,{withResult:!1}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e.jsx(P,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{})})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),e.jsx(P,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{})})]}),j=()=>{const[o,a]=c.useState("#4387f4ff");return e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{gap:"md",children:[e.jsx(s,{colorScheme:"primary",onClick:()=>a("#4387f4ff"),children:'Change "#4387f4ff"'}),e.jsx(s,{colorScheme:"secondary",onClick:()=>a("#895af6ff"),children:'Change "#895af6ff"'}),e.jsx(s,{colorScheme:"success",onClick:()=>a("#3cc360ff"),children:'Change "#3cc360ff"'})]}),e.jsxs(F,{children:["Value: ",o]}),e.jsx(r,{value:o,onChange:a})]})},w=()=>{const[o,a]=c.useState("#ff0000ff"),[t,n]=c.useState("#ff0000ff");return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",o,", Start Value: ",t]}),e.jsx(r,{value:o,onChange:a,onChangeStart:n})]})},v=()=>{const[o,a]=c.useState("#ff0000ff"),[t,n]=c.useState("#ff0000ff");return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",o,", End Value: ",t]}),e.jsx(r,{value:o,onChange:a,onChangeEnd:n})]})},V=()=>{var D;const o={colorPicker:"#4387f4ff"},{control:a,handleSubmit:t,watch:n,formState:{errors:y}}=ye({defaultValues:o}),Fe=k=>console.log("submit:",k);return console.log("watch:",n()),e.jsxs(Be,{as:"form",onSubmit:t(Fe),children:[e.jsx(P,{isInvalid:!!y.colorPicker,label:"Pick color",errorMessage:(D=y.colorPicker)==null?void 0:D.message,children:e.jsx(De,{name:"colorPicker",control:a,render:({field:k})=>e.jsx(r,{...k})})}),e.jsx(s,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,B,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <ColorSelector />;
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var z,L,T;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector size="sm" />
      <ColorSelector size="md" />
      <ColorSelector size="lg" />
      <ColorSelector size="full" />
    </>;
}`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var M,O,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var H,I,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="#ff0000ff" />;
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,A,G;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(G=(A=f.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,N;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <ColorSelector saturationSliderProps={{
    step: 0.1
  }} hueSliderProps={{
    step: 10
  }} alphaSliderProps={{
    step: 0.1
  }} />;
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <ColorSelector swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <ColorSelector swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,oe;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <ColorSelector withChannel={false} />;
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,se,te;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <ColorSelector withEyeDropper={false} />;
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,ce,le;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <ColorSelector withResult={false} />;
}`,...(le=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ie,ue,me;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isDisabled swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorSelector />
      </FormControl>
    </>;
}`,...(me=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var fe,de,pe;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isReadOnly swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorSelector />
      </FormControl>
    </>;
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,Se,be;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(be=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var Ce,ge,xe;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [startValue, onChangeStart] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(xe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var je,we,ve;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [endValue, onChangeEnd] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ve=(we=v.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Ve,ke,Pe;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Pe=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};const fr=["basic","withSize","withChildren","withDefaultValue","withFormat","withStep","withSwatches","withSwatchesColumns","disabledChannel","disabledEyeDropper","disabledResult","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{fr as __namedExportsOrder,l as basic,j as customControl,mr as default,S as disabledChannel,b as disabledEyeDropper,C as disabledResult,g as isDisabled,x as isReadonly,v as onChangeEnd,w as onChangeStart,V as reactHookForm,u as withChildren,m as withDefaultValue,f as withFormat,i as withSize,d as withStep,p as withSwatches,h as withSwatchesColumns};
