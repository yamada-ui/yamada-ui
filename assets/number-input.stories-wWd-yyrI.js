import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as Oe,C as qe}from"./index.esm-CEdvtQ_U.js";import{N as r,u as Pe}from"./number-input-E5U45TSH.js";import{d as l}from"./form-control-C7lyVmHF.js";import{H as ze,V as Be}from"./stack-DgGWIYtK.js";import{B as w}from"./button-3gvEA_m9.js";import{I as Re}from"./input-DEi_H76n.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./number-CcP_arM8.js";import"./factory-Dfrbb1EY.js";import"./index-DqeO0dAp.js";import"./index-BkQL7q4y.js";import"./icon-DDeGQYl6.js";import"./use-component-style-fOirb5M1.js";import"./theme-provider-DSx3k1bh.js";import"./use-var-BQS3JFPa.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-59xURXHY.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-DeSWW4o7.js";import"./loading-C7VoLX3j.js";const sr={component:r,title:"Components / Forms / NumberInput"},u=()=>e.jsx(r,{placeholder:"basic"}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),c=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:18}),p=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:18,max:31,min:8}),h=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:15,max:30,min:5,step:5}),b=()=>e.jsx(r,{"aria-label":"Number input",defaultValue:15,precision:2,step:.2}),x=()=>e.jsx(r,{"aria-label":"Number input",clampValueOnBlur:!1,defaultValue:15,max:30}),f=()=>e.jsx(r,{"aria-label":"Number input",clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(l,{helperMessage:"Please enter the quantity you wish to order.",isDisabled:!0,label:"Order quantity",children:e.jsx(r,{})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(l,{helperMessage:"Please enter the quantity you wish to order.",isReadOnly:!0,label:"Order quantity",children:e.jsx(r,{})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(l,{errorMessage:"Order quantity is required.",isInvalid:!0,label:"Order quantity",children:e.jsx(r,{})})]}),S=()=>e.jsx(r,{"aria-label":"Number input",decrementProps:{children:"-",px:"xs"},incrementProps:{children:"+",px:"xs"}}),N=()=>{const{getDecrementProps:s,getIncrementProps:a,getInputProps:n}=Pe({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(ze,{gap:"sm",maxW:"xs",children:[e.jsx(w,{...a(),children:"+"}),e.jsx(Re,{...n(),"aria-label":"Number input"}),e.jsx(w,{...s(),children:"-"})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),y=()=>{var o;const{control:s,formState:{errors:a},handleSubmit:n,watch:C}=Oe(),D=t=>console.log("submit:",t);return console.log("watch:",C()),e.jsxs(Be,{as:"form",onSubmit:n(D),children:[e.jsx(l,{errorMessage:(o=a.numberInput)==null?void 0:o.message,isInvalid:!!a.numberInput,label:"Age",children:e.jsx(qe,{name:"numberInput",control:s,render:({field:t})=>e.jsx(r,{...t}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(w,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},V=()=>{var t;const s={numberInput:"5"},{control:a,formState:{errors:n},handleSubmit:C,watch:D}=Oe({defaultValues:s}),o=F=>console.log("submit:",F);return console.log("watch:",D()),e.jsxs(Be,{as:"form",onSubmit:C(o),children:[e.jsx(l,{errorMessage:(t=n.numberInput)==null?void 0:t.message,isInvalid:!!n.numberInput,label:"Age",children:e.jsx(qe,{name:"numberInput",control:a,render:({field:F})=>e.jsx(r,{...F}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(w,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,q,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="basic" />;
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var P,z,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <NumberInput size="xs" placeholder="extra small size" />
      <NumberInput size="sm" placeholder="small size" />
      <NumberInput size="md" placeholder="medium size" />
      <NumberInput size="lg" placeholder="large size" />
    </>;
}`,...(R=(z=i.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var k,M,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" placeholder="outline" />
      <NumberInput variant="filled" placeholder="filled" />
      <NumberInput variant="flushed" placeholder="flushed" />
      <NumberInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,T,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput focusBorderColor="green.500" placeholder="custom border color" />
      <NumberInput errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,E,K;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={18} />;
}`,...(K=(E=c.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var G,J,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={18} max={31} min={8} />;
}`,...(L=(J=p.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={15} max={30} min={5} step={5} />;
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" defaultValue={15} precision={2} step={0.2} />;
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" clampValueOnBlur={false} defaultValue={15} max={30} />;
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} />;
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,ue;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" isDisabled placeholder="outline" />
      <NumberInput variant="filled" isDisabled placeholder="filled" />
      <NumberInput variant="flushed" isDisabled placeholder="flushed" />
      <NumberInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="Please enter the quantity you wish to order." isDisabled label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(ue=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,de,me;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" isReadOnly placeholder="outline" />
      <NumberInput variant="filled" isReadOnly placeholder="filled" />
      <NumberInput variant="flushed" isReadOnly placeholder="flushed" />
      <NumberInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="Please enter the quantity you wish to order." isReadOnly label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(me=(de=I.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,pe,he;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" isInvalid placeholder="outline" />
      <NumberInput variant="filled" isInvalid placeholder="filled" />
      <NumberInput variant="flushed" isInvalid placeholder="flushed" />
      <NumberInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Order quantity is required." isInvalid label="Order quantity">
        <NumberInput />
      </FormControl>
    </>;
}`,...(he=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,xe,fe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" decrementProps={{
    children: "-",
    px: "xs"
  }} incrementProps={{
    children: "+",
    px: "xs"
  }} />;
}`,...(fe=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,Ie,je;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
      <Button {...getIncrementProps()}>+</Button>
      <Input {...getInputProps()} aria-label="Number input" />
      <Button {...getDecrementProps()}>-</Button>
    </HStack>;
}`,...(je=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Se,Ne,ve;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Fe=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};const lr=["basic","withSize","withVariant","withBorderColor","withDefaultValue","withMinMax","withStep","withPrecision","disabledClampValueOnBlur","disabledKeepWithinRange","isDisabled","isReadonly","isInvalid","customStepper","customComponent","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{lr as __namedExportsOrder,u as basic,N as customComponent,S as customStepper,sr as default,x as disabledClampValueOnBlur,f as disabledKeepWithinRange,g as isDisabled,j as isInvalid,I as isReadonly,y as reactHookForm,V as reactHookFormWithDefaultValue,v as stylingPlaceholder,m as withBorderColor,c as withDefaultValue,p as withMinMax,b as withPrecision,i as withSize,h as withStep,d as withVariant};
