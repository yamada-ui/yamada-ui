import{i as e}from"./preload-helper-usAeo7Bx.js";import{$n as t,Gn as n,dt as r}from"./core-DkLkzQLq.js";import{t as i}from"./jsx-runtime-O9QVJvLM.js";import{At as a,on as o,t as s,ut as c}from"./icon-BJ0kjvJ7.js";import{d as l,i as u,t as d}from"./button-Dd3r5aCq.js";import{Dn as f,Ii as p,Ma as m,Mi as h,Na as g,Ni as _,Sn as v,Tn as y,bu as b,gu as x,mu as S,pu as C,rd as w,sd as T,vu as E}from"./iframe-wumx2IEZ.js";import{n as D,t as O}from"./storybook-9SwDZ2vo.js";import{n as k,r as A,t as j}from"./index.esm-BhkiNt96.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{k(),O(),r(),d(),w(),m(),s(),C(),v(),h(),M=i(),N={component:_,title:`Components / NumberInput`},P=()=>(0,M.jsx)(_,{placeholder:`Basic`}),F=()=>(0,M.jsx)(D,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,M.jsx)(_,{size:e,variant:t,placeholder:`Size (${e})`},n)}),I=()=>(0,M.jsx)(D,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:t,children:(e,t,r)=>(0,M.jsx)(_,{colorScheme:t,variant:e,placeholder:n(e)},r)}),L=()=>(0,M.jsx)(_,{defaultValue:18,placeholder:`Order quantity`}),R=()=>(0,M.jsx)(_,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),z=()=>(0,M.jsx)(_,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),B=()=>(0,M.jsx)(_,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),V=()=>(0,M.jsx)(_,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),H=()=>(0,M.jsx)(_,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),U=()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsx)(_,{variant:e,disabled:!0,placeholder:n(e)},t)}),(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsxs)(S,{variant:e,disabled:!0,children:[(0,M.jsx)(E,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:n(e)})]},t)}),(0,M.jsx)(T,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,M.jsx)(_,{})})]}),W=()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsx)(_,{variant:e,placeholder:n(e),readOnly:!0},t)}),(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsxs)(S,{variant:e,readOnly:!0,children:[(0,M.jsx)(E,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:n(e)})]},t)}),(0,M.jsx)(T,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,M.jsx)(_,{})})]}),G=()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsx)(_,{variant:e,invalid:!0,placeholder:n(e)},t)}),(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsxs)(S,{variant:e,invalid:!0,children:[(0,M.jsx)(E,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:n(e)})]},t)}),(0,M.jsx)(T,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,M.jsx)(_,{})})]}),K=()=>(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsxs)(S,{variant:e,children:[(0,M.jsx)(E,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:`Order quantity`})]},t)}),q=()=>(0,M.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,M.jsxs)(S,{variant:e,children:[(0,M.jsx)(x,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:`Order quantity`})]},t)}),J=()=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(_,{disabled:!0,placeholder:`Default border color`}),(0,M.jsx)(_,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,M.jsxs)(S,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,M.jsx)(x,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:`Custom border color`})]}),(0,M.jsx)(_,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,M.jsxs)(S,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,M.jsx)(x,{children:(0,M.jsx)(o,{})}),(0,M.jsx)(_,{placeholder:`Custom border color`})]})]}),Y=()=>(0,M.jsx)(_,{placeholder:`Order quantity`,decrementProps:{children:(0,M.jsx)(a,{})},incrementProps:{children:(0,M.jsx)(c,{})}}),X=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=p({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,M.jsxs)(f,{gap:`sm`,maxW:`xs`,children:[(0,M.jsx)(u,{icon:(0,M.jsx)(c,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,M.jsx)(b,{...n(),"aria-label":`Number input`}),(0,M.jsx)(u,{icon:(0,M.jsx)(a,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Z=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=A();return(0,M.jsxs)(y,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,M.jsx)(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,M.jsx)(j,{name:`numberInput`,control:e,render:({field:e})=>(0,M.jsx)(_,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,M.jsx)(l,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=A({defaultValues:{numberInput:`5`}});return(0,M.jsxs)(y,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,M.jsx)(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,M.jsx)(j,{name:`numberInput`,control:e,render:({field:e})=>(0,M.jsx)(_,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,M.jsx)(l,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Basic" />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <NumberInput key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled helperMessage="Please enter the quantity you wish to order." label="Order quantity">
        <NumberInput />
      </Field.Root>
    </>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <NumberInput key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root helperMessage="Please enter the quantity you wish to order." label="Order quantity" readOnly>
        <NumberInput />
      </Field.Root>
    </>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <NumberInput key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="Order quantity is required." invalid label="Order quantity">
        <NumberInput />
      </Field.Root>
    </>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="Default border color" />

      <NumberInput focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <GaugeIcon />
        </InputGroup.Element>
        <NumberInput placeholder="Custom border color" />
      </InputGroup.Root>

      <NumberInput errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Element>
          <GaugeIcon />
        </InputGroup.Element>
        <NumberInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
      <IconButton icon={<PlusIcon fontSize="2xl" />} {...getIncrementProps()} aria-label="Increment" />
      <Input {...getInputProps()} aria-label="Number input" />
      <IconButton icon={<MinusIcon fontSize="2xl" />} {...getDecrementProps()} aria-label="Decrement" />
    </HStack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    numberInput: string;
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
      <Field.Root errorMessage={errors.numberInput?.message} invalid={!!errors.numberInput} label="Age">
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
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.numberInput?.message} invalid={!!errors.numberInput} label="Age">
        <Controller name="numberInput" control={control} render={({
        field
      }) => <NumberInput {...field} />} rules={{
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
}`,...Q.parameters?.docs?.source}}},$=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`]}))();export{K as Addon,P as Basic,J as BorderColor,X as CustomComponent,Y as CustomStepper,L as DefaultValue,U as Disabled,V as DisabledClampValueOnBlur,H as DisabledKeepWithinRange,q as Element,G as Invalid,R as MinMax,B as Precision,Z as ReactHookForm,Q as ReactHookFormWithDefaultValue,W as ReadOnly,F as Size,z as Step,I as Variant,$ as __namedExportsOrder,N as default};