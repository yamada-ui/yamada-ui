import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$c as n,Bt as r,El as i,Kl as a,Lt as o,Yc as s,am as c,cr as l,gl as u,lr as d,qm as f,sm as p,tu as m,ur as h,vi as g,yi as _,ym as v}from"./iframe-CXDvaz-K.js";import{n as y,t as b}from"./storybook-dZuXfK4h.js";import{n as x,r as S,t as C}from"./index.esm-BGuYkfDC.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{b(),w=t(f(),1),x(),c(),u(),s(),g(),a(),o(),l(),T=p(),E={component:h,title:`Components / PinInput`},D=()=>(0,T.jsx)(h,{}),O=()=>(0,T.jsx)(_,{each:[3,4,5,6],children:(e,t)=>(0,T.jsx)(h,{items:e},t)}),k=()=>(0,T.jsx)(y,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:v,children:(e,t,n)=>(0,T.jsx)(h,{colorScheme:t,variant:e},n)}),A=()=>(0,T.jsx)(y,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,T.jsx)(h,{size:e,variant:t},n)}),j=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{}),(0,T.jsx)(h,{type:`alphanumeric`})]}),M=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{defaultValue:`1234`}),(0,T.jsx)(h,{defaultValue:`123`})]}),N=()=>{let{page:e}=m();return(0,T.jsx)(h,{onComplete:()=>e.start({duration:5e3})})},P=()=>(0,T.jsx)(h,{otp:!0}),F=()=>(0,T.jsx)(h,{mask:!0}),I=()=>(0,T.jsx)(h,{manageFocus:!1}),L=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,T.jsx)(h,{variant:e,disabled:!0},t)}),(0,T.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,T.jsxs)(h,{variant:e,children:[(0,T.jsx)(d,{disabled:!0,index:0}),(0,T.jsx)(d,{disabled:!0,index:1}),(0,T.jsx)(d,{disabled:!0,index:2}),(0,T.jsx)(d,{disabled:!0,index:3})]},t)}),(0,T.jsx)(n,{disabled:!0,errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,children:(0,T.jsx)(h,{})})]}),R=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,T.jsx)(h,{variant:e,readOnly:!0},t)}),(0,T.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,T.jsxs)(h,{variant:e,children:[(0,T.jsx)(d,{index:0,readOnly:!0}),(0,T.jsx)(d,{index:1,readOnly:!0}),(0,T.jsx)(d,{index:2,readOnly:!0}),(0,T.jsx)(d,{index:3,readOnly:!0})]},t)}),(0,T.jsx)(n,{errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,readOnly:!0,children:(0,T.jsx)(h,{})})]}),z=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,T.jsx)(h,{variant:e,invalid:!0},t)}),(0,T.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,T.jsxs)(h,{variant:e,children:[(0,T.jsx)(d,{index:0,invalid:!0}),(0,T.jsx)(d,{index:1,invalid:!0}),(0,T.jsx)(d,{index:2,invalid:!0}),(0,T.jsx)(d,{index:3,invalid:!0})]},t)}),(0,T.jsx)(n,{errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,invalid:!0,label:`Please one-time password`,children:(0,T.jsx)(h,{})})]}),B=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{}),(0,T.jsx)(h,{focusBorderColor:`green.500`}),(0,T.jsx)(h,{errorBorderColor:`orange.500`,invalid:!0})]}),V=()=>(0,T.jsxs)(h,{children:[(0,T.jsx)(d,{index:0}),(0,T.jsx)(d,{index:1}),(0,T.jsx)(d,{index:2}),(0,T.jsx)(d,{index:3})]}),H=()=>(0,T.jsx)(h,{placeholder:`💩`}),U=()=>{let{page:e}=m(),[t,n]=(0,w.useState)(``);return(0,T.jsx)(h,{value:t,onChange:n,onComplete:()=>e.start({duration:5e3})})},W=()=>{let{control:e,formState:{errors:t},handleSubmit:a}=S();return(0,T.jsxs)(r,{as:`form`,onSubmit:a(e=>console.log(`submit:`,e)),children:[(0,T.jsx)(n,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,T.jsx)(C,{name:`pinInput`,control:e,render:({field:e})=>(0,T.jsx)(h,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,T.jsx)(i,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},G=()=>{let{control:e,formState:{errors:t},handleSubmit:a}=S({defaultValues:{pinInput:`5`}});return(0,T.jsxs)(r,{as:`form`,onSubmit:a(e=>console.log(`submit:`,e)),children:[(0,T.jsx)(n,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,T.jsx)(C,{name:`pinInput`,control:e,render:({field:e})=>(0,T.jsx)(h,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,T.jsx)(i,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PinInput.Root key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant} disabled />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant}>
            <PinInput.Field disabled index={0} />
            <PinInput.Field disabled index={1} />
            <PinInput.Field disabled index={2} />
            <PinInput.Field disabled index={3} />
          </PinInput.Root>}
      </For>

      <Field.Root disabled errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." label="Please one-time password">
        <PinInput.Root />
      </Field.Root>
    </>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant}>
            <PinInput.Field index={0} readOnly />
            <PinInput.Field index={1} readOnly />
            <PinInput.Field index={2} readOnly />
            <PinInput.Field index={3} readOnly />
          </PinInput.Root>}
      </For>

      <Field.Root errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." label="Please one-time password" readOnly>
        <PinInput.Root />
      </Field.Root>
    </>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant} invalid />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant}>
            <PinInput.Field index={0} invalid />
            <PinInput.Field index={1} invalid />
            <PinInput.Field index={2} invalid />
            <PinInput.Field index={3} invalid />
          </PinInput.Root>}
      </For>

      <Field.Root errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." invalid label="Please one-time password">
        <PinInput.Root />
      </Field.Root>
    </>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    pinInput: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.pinInput?.message} invalid={!!errors.pinInput} label="Token">
        <Controller name="pinInput" control={control} render={({
        field
      }) => <PinInput.Root {...field} />} rules={{
        minLength: {
          message: "This is required.",
          value: 4
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    pinInput: string;
  }
  const defaultValues: Data = {
    pinInput: "5"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.pinInput?.message} invalid={!!errors.pinInput} label="Token">
        <Controller name="pinInput" control={control} render={({
        field
      }) => <PinInput.Root {...field} />} rules={{
        minLength: {
          message: "This is required.",
          value: 4
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...G.parameters?.docs?.source}}},K=[`Basic`,`Items`,`Variant`,`Size`,`Type`,`DefaultValue`,`HandleComplete`,`OneTimePassword`,`MaskingValue`,`DisabledFocusManagement`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomFields`,`CustomPlaceholder`,`CustomControl`,`ReactHookForm`,`ReactHookFormDefaultValue`]}))();export{D as Basic,B as BorderColor,U as CustomControl,V as CustomFields,H as CustomPlaceholder,M as DefaultValue,L as Disabled,I as DisabledFocusManagement,N as HandleComplete,z as Invalid,O as Items,F as MaskingValue,P as OneTimePassword,W as ReactHookForm,G as ReactHookFormDefaultValue,R as ReadOnly,A as Size,j as Type,k as Variant,K as __namedExportsOrder,E as default};