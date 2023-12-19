import{j as e,a,F as n}from"./jsx-runtime-TtYKBvr-.js";import{u as Pe,C as ze}from"./index.esm-PVkfQNar.js";import{N as r,u as ke}from"./number-input-j_N-k8QN.js";import{F as u}from"./form-control-XK8tZY5Y.js";import{H as Me,V as Re}from"./stack-eN2E0mK0.js";import{B}from"./button-FPtidzDX.js";import{I as He}from"./input-ftYR-ILN.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./number-T9-jc1Pg.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-55Zbf_Rl.js";import"./index-pWuJ6bYP.js";import"./icon-lGxzm-PJ.js";import"./index-S2htefC9.js";import"./theme-provider-AD5gKQ6i.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-eqg6O7Tm.js";import"./use-ripple-cz0_rK7P.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-HWUA2jNq.js";import"./loading-t4SoIc4G.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";const dr={title:"Components / Forms / NumberInput",component:r},c=()=>e(r,{placeholder:"basic"}),p=()=>a(n,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),h=()=>a(n,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),b=()=>a(n,{children:[e(r,{disabled:!0,placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),f=()=>e(r,{defaultValue:18,"aria-label":"Number input"}),g=()=>e(r,{defaultValue:18,min:8,max:31,"aria-label":"Number input"}),I=()=>e(r,{defaultValue:15,step:5,min:5,max:30,"aria-label":"Number input"}),S=()=>e(r,{defaultValue:15,precision:2,step:.2,"aria-label":"Number input"}),N=()=>e(r,{defaultValue:15,max:30,clampValueOnBlur:!1,"aria-label":"Number input"}),v=()=>e(r,{defaultValue:15,max:30,keepWithinRange:!1,clampValueOnBlur:!1,"aria-label":"Number input"}),y=()=>a(n,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(u,{isDisabled:!0,label:"Order quantity",helperMessage:"Please enter the quantity you wish to order.",children:e(r,{})})]}),x=()=>a(n,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(u,{isReadOnly:!0,label:"Order quantity",helperMessage:"Please enter the quantity you wish to order.",children:e(r,{})})]}),V=()=>a(n,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(u,{isInvalid:!0,label:"Order quantity",errorMessage:"Order quantity is required.",children:e(r,{})})]}),w=()=>e(r,{"aria-label":"Number input",incrementProps:{px:"xs",children:"+"},decrementProps:{px:"xs",children:"-"}}),C=()=>{const{getInputProps:l,getIncrementProps:o,getDecrementProps:s}=ke({step:.01,defaultValue:3.14,min:3,max:4,precision:2});return a(Me,{maxW:"xs",gap:"sm",children:[e(B,{...o(),children:"+"}),e(He,{...l(),"aria-label":"Number input"}),e(B,{...s(),children:"-"})]})},D=()=>a(n,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),O=()=>{var m;const{control:l,handleSubmit:o,watch:s,formState:{errors:i}}=Pe(),d=t=>console.log("submit:",t);return console.log("watch:",s()),a(Re,{as:"form",onSubmit:o(d),children:[e(u,{isInvalid:!!i.numberInput,label:"Age",errorMessage:(m=i.numberInput)==null?void 0:m.message,children:e(ze,{name:"numberInput",control:l,rules:{required:{value:!0,message:"This is required."},max:{value:5,message:"The maximum value is 5."}},render:({field:t})=>e(r,{...t})})}),e(B,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},q=()=>{var t;const l={numberInput:"5"},{control:o,handleSubmit:s,watch:i,formState:{errors:d}}=Pe({defaultValues:l}),m=F=>console.log("submit:",F);return console.log("watch:",i()),a(Re,{as:"form",onSubmit:s(m),children:[e(u,{isInvalid:!!d.numberInput,label:"Age",errorMessage:(t=d.numberInput)==null?void 0:t.message,children:e(ze,{name:"numberInput",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:F})=>e(r,{...F})})}),e(B,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var P,z,R;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="basic" />;
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var k,M,H;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <>
      <NumberInput placeholder="extra small size" size="xs" />
      <NumberInput placeholder="small size" size="sm" />
      <NumberInput placeholder="medium size" size="md" />
      <NumberInput placeholder="large size" size="lg" />
    </>;
}`,...(H=(M=p.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,T,_;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <NumberInput variant="outline" placeholder="outline" />
      <NumberInput variant="filled" placeholder="filled" />
      <NumberInput variant="flushed" placeholder="flushed" />
      <NumberInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(_=(T=h.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,j,K;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput focusBorderColor="green.500" placeholder="custom border color" />
      <NumberInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(K=(j=b.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var E,G,J;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} aria-label="Number input" />;
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var L,Q,U;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} min={8} max={31} aria-label="Number input" />;
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} step={5} min={5} max={30} aria-label="Number input" />;
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} precision={2} step={0.2} aria-label="Number input" />;
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,te;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} clampValueOnBlur={false} aria-label="Number input" />;
}`,...(te=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,oe,se;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} keepWithinRange={false} clampValueOnBlur={false} aria-label="Number input" />;
}`,...(se=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ue,ie,de;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <NumberInput isDisabled variant="outline" placeholder="outline" />
      <NumberInput isDisabled variant="filled" placeholder="filled" />
      <NumberInput isDisabled variant="flushed" placeholder="flushed" />
      <NumberInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Order quantity" helperMessage="Please enter the quantity you wish to order.">
        <NumberInput />
      </FormControl>
    </>;
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ce,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <NumberInput isReadOnly variant="outline" placeholder="outline" />
      <NumberInput isReadOnly variant="filled" placeholder="filled" />
      <NumberInput isReadOnly variant="flushed" placeholder="flushed" />
      <NumberInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Order quantity" helperMessage="Please enter the quantity you wish to order.">
        <NumberInput />
      </FormControl>
    </>;
}`,...(pe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var he,be,fe;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <NumberInput isInvalid variant="outline" placeholder="outline" />
      <NumberInput isInvalid variant="filled" placeholder="filled" />
      <NumberInput isInvalid variant="flushed" placeholder="flushed" />
      <NumberInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Order quantity" errorMessage="Order quantity is required.">
        <NumberInput />
      </FormControl>
    </>;
}`,...(fe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,Ie,Se;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <NumberInput aria-label="Number input" incrementProps={{
    px: "xs",
    children: "+"
  }} decrementProps={{
    px: "xs",
    children: "-"
  }} />;
}`,...(Se=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var Ne,ve,ye;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(ye=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var xe,Ve,we;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(we=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Ce,De,Oe;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(Oe=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var qe,Be,Fe;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Fe=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};const mr=["basic","withSize","withVariant","withBorderColor","withDefaultValue","withMinMax","withStep","withPrecision","disabledClampValueOnBlur","disabledKeepWithinRange","isDisabled","isReadonly","isInvalid","customStepper","customComponent","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{mr as __namedExportsOrder,c as basic,C as customComponent,w as customStepper,dr as default,N as disabledClampValueOnBlur,v as disabledKeepWithinRange,y as isDisabled,V as isInvalid,x as isReadonly,O as reactHookForm,q as reactHookFormWithDefaultValue,D as stylingPlaceholder,b as withBorderColor,f as withDefaultValue,g as withMinMax,S as withPrecision,p as withSize,I as withStep,h as withVariant};
