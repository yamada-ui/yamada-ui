import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{u as Oe,C as qe}from"./index.esm-TLwx9zN6.js";import{N as r,u as Pe}from"./number-input-CNyLPttB.js";import{F as l}from"./form-control-CXekA9Vm.js";import{H as ze,V as Be}from"./stack-DeQ5YYY4.js";import{B as C}from"./button-C5HSAH_Q.js";import{I as Re}from"./input-D1y3qOBd.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./number-49BHn0Cl.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-DnMy6eVY.js";import"./index-CPe7OlF1.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./theme-provider-CfMKAtcZ.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-C1oydc60.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";const lr={title:"Components / Forms / NumberInput",component:r},d=()=>e.jsx(r,{placeholder:"basic"}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),h=()=>e.jsx(r,{defaultValue:18,"aria-label":"Number input"}),b=()=>e.jsx(r,{defaultValue:18,min:8,max:31,"aria-label":"Number input"}),x=()=>e.jsx(r,{defaultValue:15,step:5,min:5,max:30,"aria-label":"Number input"}),f=()=>e.jsx(r,{defaultValue:15,precision:2,step:.2,"aria-label":"Number input"}),g=()=>e.jsx(r,{defaultValue:15,max:30,clampValueOnBlur:!1,"aria-label":"Number input"}),I=()=>e.jsx(r,{defaultValue:15,max:30,keepWithinRange:!1,clampValueOnBlur:!1,"aria-label":"Number input"}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(l,{isDisabled:!0,label:"Order quantity",helperMessage:"Please enter the quantity you wish to order.",children:e.jsx(r,{})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(l,{isReadOnly:!0,label:"Order quantity",helperMessage:"Please enter the quantity you wish to order.",children:e.jsx(r,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(l,{isInvalid:!0,label:"Order quantity",errorMessage:"Order quantity is required.",children:e.jsx(r,{})})]}),v=()=>e.jsx(r,{"aria-label":"Number input",incrementProps:{px:"xs",children:"+"},decrementProps:{px:"xs",children:"-"}}),y=()=>{const{getInputProps:n,getIncrementProps:t,getDecrementProps:s}=Pe({step:.01,defaultValue:3.14,min:3,max:4,precision:2});return e.jsxs(ze,{maxW:"xs",gap:"sm",children:[e.jsx(C,{...t(),children:"+"}),e.jsx(Re,{...n(),"aria-label":"Number input"}),e.jsx(C,{...s(),children:"-"})]})},V=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),w=()=>{var i;const{control:n,handleSubmit:t,watch:s,formState:{errors:o}}=Oe(),u=a=>console.log("submit:",a);return console.log("watch:",s()),e.jsxs(Be,{as:"form",onSubmit:t(u),children:[e.jsx(l,{isInvalid:!!o.numberInput,label:"Age",errorMessage:(i=o.numberInput)==null?void 0:i.message,children:e.jsx(qe,{name:"numberInput",control:n,rules:{required:{value:!0,message:"This is required."},max:{value:5,message:"The maximum value is 5."}},render:({field:a})=>e.jsx(r,{...a})})}),e.jsx(C,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},F=()=>{var a;const n={numberInput:"5"},{control:t,handleSubmit:s,watch:o,formState:{errors:u}}=Oe({defaultValues:n}),i=D=>console.log("submit:",D);return console.log("watch:",o()),e.jsxs(Be,{as:"form",onSubmit:s(i),children:[e.jsx(l,{isInvalid:!!u.numberInput,label:"Age",errorMessage:(a=u.numberInput)==null?void 0:a.message,children:e.jsx(qe,{name:"numberInput",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(r,{...D})})}),e.jsx(C,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,q,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="basic" />;
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var P,z,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <NumberInput placeholder="extra small size" size="xs" />
      <NumberInput placeholder="small size" size="sm" />
      <NumberInput placeholder="medium size" size="md" />
      <NumberInput placeholder="large size" size="lg" />
    </>;
}`,...(R=(z=m.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var k,M,H;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" placeholder="outline" />
      <NumberInput variant="filled" placeholder="filled" />
      <NumberInput variant="flushed" placeholder="flushed" />
      <NumberInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(H=(M=c.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,T,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput focusBorderColor="green.500" placeholder="custom border color" />
      <NumberInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,E,K;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} aria-label="Number input" />;
}`,...(K=(E=h.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var G,J,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} min={8} max={31} aria-label="Number input" />;
}`,...(L=(J=b.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} step={5} min={5} max={30} aria-label="Number input" />;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} precision={2} step={0.2} aria-label="Number input" />;
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} clampValueOnBlur={false} aria-label="Number input" />;
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} keepWithinRange={false} clampValueOnBlur={false} aria-label="Number input" />;
}`,...(se=(te=I.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <NumberInput isDisabled variant="outline" placeholder="outline" />
      <NumberInput isDisabled variant="filled" placeholder="filled" />
      <NumberInput isDisabled variant="flushed" placeholder="flushed" />
      <NumberInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Order quantity" helperMessage="Please enter the quantity you wish to order.">
        <NumberInput />
      </FormControl>
    </>;
}`,...(ue=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,de,me;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NumberInput isReadOnly variant="outline" placeholder="outline" />
      <NumberInput isReadOnly variant="filled" placeholder="filled" />
      <NumberInput isReadOnly variant="flushed" placeholder="flushed" />
      <NumberInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Order quantity" helperMessage="Please enter the quantity you wish to order.">
        <NumberInput />
      </FormControl>
    </>;
}`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,pe,he;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <NumberInput isInvalid variant="outline" placeholder="outline" />
      <NumberInput isInvalid variant="filled" placeholder="filled" />
      <NumberInput isInvalid variant="flushed" placeholder="flushed" />
      <NumberInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Order quantity" errorMessage="Order quantity is required.">
        <NumberInput />
      </FormControl>
    </>;
}`,...(he=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,xe,fe;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" incrementProps={{
    px: "xs",
    children: "+"
  }} decrementProps={{
    px: "xs",
    children: "-"
  }} />;
}`,...(fe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,Ie,je;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const {
    getInputProps,
    getIncrementProps,
    getDecrementProps
  } = useNumberInput({
    step: 0.01,
    defaultValue: 3.14,
    min: 3,
    max: 4,
    precision: 2
  });
  return <HStack maxW="xs" gap="sm">
      <Button {...getIncrementProps()}>+</Button>
      <Input {...getInputProps()} aria-label="Number input" />
      <Button {...getDecrementProps()}>-</Button>
    </HStack>;
}`,...(je=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Se,Ne,ve;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <NumberInput placeholder="default placeholder" />
      <NumberInput placeholder="custom placeholder" _placeholder={{
      opacity: 1,
      color: "gray.500"
    }} />
      <NumberInput color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...(ve=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:ve.source}}};var ye,Ve,we;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  type Data = {
    numberInput: string;
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.numberInput} label="Age" errorMessage={errors.numberInput?.message}>
        <Controller name="numberInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        },
        max: {
          value: 5,
          message: "The maximum value is 5."
        }
      }} render={({
        field
      }) => <NumberInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(we=(Ve=w.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Fe,Ce,De;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  type Data = {
    numberInput: string;
  };
  const defaultValues: Data = {
    numberInput: "5"
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
      <FormControl isInvalid={!!errors.numberInput} label="Age" errorMessage={errors.numberInput?.message}>
        <Controller name="numberInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <NumberInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(De=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};const or=["basic","withSize","withVariant","withBorderColor","withDefaultValue","withMinMax","withStep","withPrecision","disabledClampValueOnBlur","disabledKeepWithinRange","isDisabled","isReadonly","isInvalid","customStepper","customComponent","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{or as __namedExportsOrder,d as basic,y as customComponent,v as customStepper,lr as default,g as disabledClampValueOnBlur,I as disabledKeepWithinRange,j as isDisabled,N as isInvalid,S as isReadonly,w as reactHookForm,F as reactHookFormWithDefaultValue,V as stylingPlaceholder,p as withBorderColor,h as withDefaultValue,b as withMinMax,f as withPrecision,m as withSize,x as withStep,c as withVariant};
