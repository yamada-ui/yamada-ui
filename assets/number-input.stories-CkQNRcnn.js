import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{u as Oe,C as Pe}from"./index.esm-C038jXrr.js";import{N as r,u as Be}from"./number-input-DVeICWwv.js";import{d as l}from"./form-control-DgcE1-oN.js";import{H as Me,V as qe}from"./stack-BP8LKMVN.js";import{I as F}from"./icon-button-DA6sAAAm.js";import{P as Re}from"./plus-CM6BpbA3.js";import{I as ke}from"./input-D8w53ljh.js";import{M as He}from"./minus-C1gtAbBA.js";import{B as ze}from"./button-CqSjNDtY.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./number-CcP_arM8.js";import"./factory-DbNU74ts.js";import"./index-ZCRYeFYt.js";import"./index-CdMku7bZ.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./use-var-DlbRU9j0.js";import"./forward-ref-Ukjd1cIW.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";const cr={component:r,title:"Components / Forms / NumberInput"},u=()=>e.jsx(r,{placeholder:"basic"}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),c=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:18}),p=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:18,max:31,min:8}),b=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:15,max:30,min:5,step:5}),h=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:15,precision:2,step:.2}),x=()=>e.jsx(r,{"aria-label":"Number input",clampValueOnBlur:!1,defaultValue:15,max:30}),f=()=>e.jsx(r,{"aria-label":"Number input",clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(l,{helperMessage:"Please enter the quantity you wish to order.",isDisabled:!0,label:"Order quantity",children:e.jsx(r,{})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(l,{helperMessage:"Please enter the quantity you wish to order.",isReadOnly:!0,label:"Order quantity",children:e.jsx(r,{})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(l,{errorMessage:"Order quantity is required.",isInvalid:!0,label:"Order quantity",children:e.jsx(r,{})})]}),j=()=>e.jsx(r,{"aria-label":"Number input",decrementProps:{children:"-",px:"xs"},incrementProps:{children:"+",px:"xs"}}),N=()=>{const{getDecrementProps:s,getIncrementProps:n,getInputProps:a}=Be({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(Me,{gap:"sm",maxW:"xs",children:[e.jsx(F,{icon:e.jsx(Re,{fontSize:"2xl"}),...n()}),e.jsx(ke,{...a(),"aria-label":"Number input"}),e.jsx(F,{icon:e.jsx(He,{fontSize:"2xl"}),...s()})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),y=()=>{var o;const{control:s,formState:{errors:n},handleSubmit:a,watch:w}=Oe(),C=t=>console.log("submit:",t);return console.log("watch:",w()),e.jsxs(qe,{as:"form",onSubmit:a(C),children:[e.jsx(l,{errorMessage:(o=n.numberInput)==null?void 0:o.message,isInvalid:!!n.numberInput,label:"Age",children:e.jsx(Pe,{name:"numberInput",control:s,render:({field:t})=>e.jsx(r,{...t}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},V=()=>{var t;const s={numberInput:"5"},{control:n,formState:{errors:a},handleSubmit:w,watch:C}=Oe({defaultValues:s}),o=D=>console.log("submit:",D);return console.log("watch:",C()),e.jsxs(qe,{as:"form",onSubmit:w(o),children:[e.jsx(l,{errorMessage:(t=a.numberInput)==null?void 0:t.message,isInvalid:!!a.numberInput,label:"Age",children:e.jsx(Pe,{name:"numberInput",control:n,render:({field:D})=>e.jsx(r,{...D}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,P,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="basic" />;
}`,...(q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var z,B,M;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <NumberInput size="xs" placeholder="extra small size" />
      <NumberInput size="sm" placeholder="small size" />
      <NumberInput size="md" placeholder="medium size" />
      <NumberInput size="lg" placeholder="large size" />
    </>;
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,k,H;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" placeholder="outline" />
      <NumberInput variant="filled" placeholder="filled" />
      <NumberInput variant="flushed" placeholder="flushed" />
      <NumberInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var W,T,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput focusBorderColor="green.500" placeholder="custom border color" />
      <NumberInput errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,E,K;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={18} />;
}`,...(K=(E=c.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var G,J,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={18} max={31} min={8} />;
}`,...(L=(J=p.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={15} max={30} min={5} step={5} />;
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={15} precision={2} step={0.2} />;
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" clampValueOnBlur={false} defaultValue={15} max={30} />;
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,te,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} />;
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,ue;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" isDisabled placeholder="outline" />
      <NumberInput variant="filled" isDisabled placeholder="filled" />
      <NumberInput variant="flushed" isDisabled placeholder="flushed" />
      <NumberInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="Please enter the quantity you wish to order." isDisabled label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(ue=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,me,de;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" isReadOnly placeholder="outline" />
      <NumberInput variant="filled" isReadOnly placeholder="filled" />
      <NumberInput variant="flushed" isReadOnly placeholder="flushed" />
      <NumberInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="Please enter the quantity you wish to order." isReadOnly label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(de=(me=g.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,pe,be;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" isInvalid placeholder="outline" />
      <NumberInput variant="filled" isInvalid placeholder="filled" />
      <NumberInput variant="flushed" isInvalid placeholder="flushed" />
      <NumberInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Order quantity is required." isInvalid label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(be=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,xe,fe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" decrementProps={{
    children: "-",
    px: "xs"
  }} incrementProps={{
    children: "+",
    px: "xs"
  }} />;
}`,...(fe=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Ie,ge,Se;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const {
    getDecrementProps,
    getIncrementProps,
    getInputProps
  } = useNumberInput({
    defaultValue: 3.14,
    max: 4,
    min: 3,
    precision: 2,
    step: 0.01
  });
  return <HStack gap="sm" maxW="xs">
      <IconButton icon={<PlusIcon fontSize="2xl" />} {...getIncrementProps()} />
      <Input {...getInputProps()} aria-label="Number input" />
      <IconButton icon={<MinusIcon fontSize="2xl" />} {...getDecrementProps()} />
    </HStack>;
}`,...(Se=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var je,Ne,ve;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <NumberInput placeholder="default placeholder" />
      <NumberInput placeholder="custom placeholder" _placeholder={{
      color: "gray.500",
      opacity: 1
    }} />
      <NumberInput color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...(ve=(Ne=v.parameters)==null?void 0:Ne.docs)==null?void 0:ve.source}}};var ye,Ve,we;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  interface Data {
    numberInput: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.numberInput?.message} isInvalid={!!errors.numberInput} label="Age">
        <Controller name="numberInput" control={control} render={({
        field
      }) => <NumberInput {...field} />} rules={{
        max: {
          message: "The maximum value is 5.",
          value: 5
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(we=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Ce,De,Fe;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  interface Data {
    numberInput: string;
  }
  const defaultValues: Data = {
    numberInput: "5"
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
      <FormControl errorMessage={errors.numberInput?.message} isInvalid={!!errors.numberInput} label="Age">
        <Controller name="numberInput" control={control} render={({
        field
      }) => <NumberInput {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Fe=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};const pr=["basic","withSize","withVariant","withBorderColor","withDefaultValue","withMinMax","withStep","withPrecision","disabledClampValueOnBlur","disabledKeepWithinRange","isDisabled","isReadonly","isInvalid","customStepper","customComponent","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{pr as __namedExportsOrder,u as basic,N as customComponent,j as customStepper,cr as default,x as disabledClampValueOnBlur,f as disabledKeepWithinRange,I as isDisabled,S as isInvalid,g as isReadonly,y as reactHookForm,V as reactHookFormWithDefaultValue,v as stylingPlaceholder,d as withBorderColor,c as withDefaultValue,p as withMinMax,h as withPrecision,i as withSize,b as withStep,m as withVariant};
