import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{u as ye,C as De}from"./index.esm-CEdvtQ_U.js";import{C as r}from"./color-selector-MHsjGpwB.js";import{B as t}from"./button-vnBqyEiG.js";import{F as P}from"./fieldset-CzV2J22W.js";import{W as Ee}from"./flex-BKtl9XZl.js";import{T as F}from"./text-CIX2g0cs.js";import{V as Be}from"./stack-oDGa6EY5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B2Nxc2b_.js";import"./factory-Cp1Ju9mN.js";import"./form-control-C2QLAsqZ.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-BGLOU3Ga.js";import"./theme-provider-DMHFYkuw.js";import"./icon-button-B-Qwqn1T.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";import"./alpha-slider-0jMq6SYf.js";import"./use-color-slider-BAV2LKio.js";import"./index-CGWRA56r.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-CF5UCByx.js";import"./color-swatch-CHYnhMw9.js";import"./input-DKr0Cry8.js";import"./saturation-slider-JnbNtQZZ.js";import"./use-ripple-SSdhQaN8.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./loading-DkRHwhPr.js";import"./visually-hidden-CO8Y1oU8.js";const mr={component:r,title:"Components / Forms / ColorSelector"},l=()=>e.jsx(r,{}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"full"})]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsx(t,{children:"Submit"})}),e.jsx(r,{children:({value:o})=>e.jsxs(t,{children:["Submit ",o]})})]}),d=()=>e.jsx(r,{defaultValue:"#ff0000ff"}),m=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),f=()=>e.jsx(r,{alphaSliderProps:{step:.1},hueSliderProps:{step:10},saturationSliderProps:{step:.1}}),p=()=>e.jsx(r,{swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),h=()=>e.jsx(r,{swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),S=()=>e.jsx(r,{withChannel:!1}),b=()=>e.jsx(r,{withEyeDropper:!1}),C=()=>e.jsx(r,{withResult:!1}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),e.jsx(P,{helperMessage:"Please select your favorite color",isDisabled:!0,legend:"Pick color",children:e.jsx(r,{})})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),e.jsx(P,{helperMessage:"Please select your favorite color",isReadOnly:!0,legend:"Pick color",children:e.jsx(r,{})})]}),j=()=>{const[o,a]=c.useState("#4387f4ff");return e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{gap:"md",children:[e.jsx(t,{colorScheme:"primary",onClick:()=>a("#4387f4ff"),children:'Change "#4387f4ff"'}),e.jsx(t,{colorScheme:"secondary",onClick:()=>a("#895af6ff"),children:'Change "#895af6ff"'}),e.jsx(t,{colorScheme:"success",onClick:()=>a("#3cc360ff"),children:'Change "#3cc360ff"'})]}),e.jsxs(F,{children:["Value: ",o]}),e.jsx(r,{value:o,onChange:a})]})},w=()=>{const[o,a]=c.useState("#ff0000ff"),[s,n]=c.useState("#ff0000ff");return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",o,", Start Value: ",s]}),e.jsx(r,{value:o,onChange:a,onChangeStart:n})]})},v=()=>{const[o,a]=c.useState("#ff0000ff"),[s,n]=c.useState("#ff0000ff");return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",o,", End Value: ",s]}),e.jsx(r,{value:o,onChange:a,onChangeEnd:n})]})},V=()=>{var y;const o={colorPicker:"#4387f4ff"},{control:a,formState:{errors:s},handleSubmit:n,watch:Pe}=ye({defaultValues:o}),Fe=k=>console.log("submit:",k);return console.log("watch:",Pe()),e.jsxs(Be,{as:"form",onSubmit:n(Fe),children:[e.jsx(P,{errorMessage:(y=s.colorPicker)==null?void 0:y.message,isInvalid:!!s.colorPicker,legend:"Pick color",children:e.jsx(De,{name:"colorPicker",control:a,render:({field:k})=>e.jsx(r,{...k})})}),e.jsx(t,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,E,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <ColorSelector />;
}`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var R,z,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector size="sm" />
      <ColorSelector size="md" />
      <ColorSelector size="lg" />
      <ColorSelector size="full" />
    </>;
}`,...(L=(z=i.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var T,M,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,H,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="#ff0000ff" />;
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var _,q,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <ColorSelector defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <ColorSelector alphaSliderProps={{
    step: 0.1
  }} hueSliderProps={{
    step: 10
  }} saturationSliderProps={{
    step: 0.1
  }} />;
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <ColorSelector swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <ColorSelector swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <ColorSelector withChannel={false} />;
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,ae,se;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <ColorSelector withEyeDropper={false} />;
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,ce;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <ColorSelector withResult={false} />;
}`,...(ce=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,ie,ue;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isDisabled swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />

      <Fieldset helperMessage="Please select your favorite color" isDisabled legend="Pick color">
        <ColorSelector />
      </Fieldset>
    </>;
}`,...(ue=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,me,fe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <ColorSelector isReadOnly swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />

      <Fieldset helperMessage="Please select your favorite color" isReadOnly legend="Pick color">
        <ColorSelector />
      </Fieldset>
    </>;
}`,...(fe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var pe,he,Se;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(Se=(he=j.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var be,Ce,ge;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [startValue, onChangeStart] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ge=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var xe,je,we;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#ff0000ff");
  const [endValue, onChangeEnd] = useState<string>("#ff0000ff");
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <ColorSelector value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(we=(je=v.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var ve,Ve,ke;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  interface Data {
    colorPicker: string;
  }
  const defaultValues: Data = {
    colorPicker: "#4387f4ff"
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
      <Fieldset errorMessage={errors.colorPicker?.message} isInvalid={!!errors.colorPicker} legend="Pick color">
        <Controller name="colorPicker" control={control} render={({
        field
      }) => <ColorSelector {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ke=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};const fr=["basic","withSize","withChildren","withDefaultValue","withFormat","withStep","withSwatches","withSwatchesColumns","disabledChannel","disabledEyeDropper","disabledResult","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{fr as __namedExportsOrder,l as basic,j as customControl,mr as default,S as disabledChannel,b as disabledEyeDropper,C as disabledResult,g as isDisabled,x as isReadonly,v as onChangeEnd,w as onChangeStart,V as reactHookForm,u as withChildren,d as withDefaultValue,m as withFormat,i as withSize,f as withStep,p as withSwatches,h as withSwatchesColumns};