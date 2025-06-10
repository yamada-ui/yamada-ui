import{j as e}from"./jsx-runtime-DztICxWZ.js";import{u as Pe,C as qe}from"./index.esm-DdgAP9ly.js";import{N as r,u as Me}from"./number-input-Selk1pDV.js";import{d as o}from"./form-control-C8eO6U25.js";import{H as ke,V as ze}from"./stack-DL8tKm2J.js";import{I as F}from"./icon-button-2YXvAmDN.js";import{P as De}from"./plus-qbRiwEoT.js";import{I as He}from"./input-BdtNRY2X.js";import{M as We}from"./minus-CgAbytRM.js";import{B as Be}from"./button-nZ2ZqBRb.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./number-CcP_arM8.js";import"./factory-7Z88KRtK.js";import"./index-BhIdR6KT.js";import"./index-2WAHly5K.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-var-Bz9rJ8_M.js";import"./forward-ref-DH6f5tnY.js";import"./createLucideIcon-Bq8XVWwL.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";const cr={component:r,title:"Components / Forms / NumberInput"},u=()=>e.jsx(r,{placeholder:"basic"}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),c=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:18}),p=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:18,max:31,min:8}),b=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:15,max:30,min:5,step:5}),h=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:15,precision:2,step:.2}),x=()=>e.jsx(r,{"aria-label":"Number input",clampValueOnBlur:!1,defaultValue:15,max:30}),f=()=>e.jsx(r,{"aria-label":"Number input",clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(o,{disabled:!0,helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",children:e.jsx(r,{})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(r,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(r,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(o,{helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",readOnly:!0,children:e.jsx(r,{})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(o,{errorMessage:"Order quantity is required.",invalid:!0,label:"Order quantity",children:e.jsx(r,{})})]}),j=()=>e.jsx(r,{"aria-label":"Number input",decrementProps:{children:"-",px:"xs"},incrementProps:{children:"+",px:"xs"}}),N=()=>{const{getDecrementProps:l,getIncrementProps:n,getInputProps:a}=Me({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(ke,{gap:"sm",maxW:"xs",children:[e.jsx(F,{icon:e.jsx(De,{fontSize:"2xl"}),...n()}),e.jsx(He,{...a(),"aria-label":"Number input"}),e.jsx(F,{icon:e.jsx(We,{fontSize:"2xl"}),...l()})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),y=()=>{var s;const{control:l,formState:{errors:n},handleSubmit:a,watch:w}=Pe(),O=t=>console.log("submit:",t);return console.log("watch:",w()),e.jsxs(ze,{as:"form",onSubmit:a(O),children:[e.jsx(o,{errorMessage:(s=n.numberInput)==null?void 0:s.message,invalid:!!n.numberInput,label:"Age",children:e.jsx(qe,{name:"numberInput",control:l,render:({field:t})=>e.jsx(r,{...t}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(Be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},V=()=>{var t;const l={numberInput:"5"},{control:n,formState:{errors:a},handleSubmit:w,watch:O}=Pe({defaultValues:l}),s=C=>console.log("submit:",C);return console.log("watch:",O()),e.jsxs(ze,{as:"form",onSubmit:w(s),children:[e.jsx(o,{errorMessage:(t=a.numberInput)==null?void 0:t.message,invalid:!!a.numberInput,label:"Age",children:e.jsx(qe,{name:"numberInput",control:n,render:({field:C})=>e.jsx(r,{...C}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var P,q,z;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="basic" />;
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,M,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <NumberInput size="xs" placeholder="extra small size" />
      <NumberInput size="sm" placeholder="small size" />
      <NumberInput size="md" placeholder="medium size" />
      <NumberInput size="lg" placeholder="large size" />
    </>;
}`,...(k=(M=i.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var D,H,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" placeholder="outline" />
      <NumberInput variant="filled" placeholder="filled" />
      <NumberInput variant="flushed" placeholder="flushed" />
      <NumberInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var T,_,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput focusBorderColor="green.500" placeholder="custom border color" />
      <NumberInput errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var A,E,K;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={18} />;
}`,...(K=(E=c.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var G,J,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={18} max={31} min={8} />;
}`,...(L=(J=p.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={15} max={30} min={5} step={5} />;
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={15} precision={2} step={0.2} />;
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" clampValueOnBlur={false} defaultValue={15} max={30} />;
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,te,le;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} />;
}`,...(le=(te=f.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,se,ue;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" disabled placeholder="outline" />
      <NumberInput variant="filled" disabled placeholder="filled" />
      <NumberInput variant="flushed" disabled placeholder="flushed" />
      <NumberInput variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled helperMessage="Please enter the quantity you wish to order." label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(ue=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var ie,de,me;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" placeholder="outline" readOnly />
      <NumberInput variant="filled" placeholder="filled" readOnly />
      <NumberInput variant="flushed" placeholder="flushed" readOnly />
      <NumberInput variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl helperMessage="Please enter the quantity you wish to order." label="Order quantity" readOnly>
        <NumberInput />
      </FormControl>
    </>;
}`,...(me=(de=I.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,pe,be;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" invalid placeholder="outline" />
      <NumberInput variant="filled" invalid placeholder="filled" />
      <NumberInput variant="flushed" invalid placeholder="flushed" />
      <NumberInput variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="Order quantity is required." invalid label="Order quantity">
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
}`,...(fe=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,Ie,Se;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Se=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var je,Ne,ve;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.numberInput?.message} invalid={!!errors.numberInput} label="Age">
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
}`,...(we=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Oe,Ce,Fe;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.numberInput?.message} invalid={!!errors.numberInput} label="Age">
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
}`,...(Fe=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};const pr=["basic","withSize","withVariant","withBorderColor","withDefaultValue","withMinMax","withStep","withPrecision","disabledClampValueOnBlur","disabledKeepWithinRange","disabled","readOnly","invalid","customStepper","customComponent","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{pr as __namedExportsOrder,u as basic,N as customComponent,j as customStepper,cr as default,g as disabled,x as disabledClampValueOnBlur,f as disabledKeepWithinRange,S as invalid,y as reactHookForm,V as reactHookFormWithDefaultValue,I as readOnly,v as stylingPlaceholder,m as withBorderColor,c as withDefaultValue,p as withMinMax,h as withPrecision,i as withSize,b as withStep,d as withVariant};
