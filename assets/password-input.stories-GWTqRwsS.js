import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{pt as r,qn as i,tr as a}from"./core-RNiP33lW.js";import{t as o}from"./jsx-runtime-BBQGix-2.js";import{J as s,Wt as c,t as l,un as u}from"./icon-BpUhZ1s0.js";import{t as d}from"./text-BU_JgSy6.js";import{t as f}from"./text-CIXXiNdJ.js";import{d as p,t as m}from"./button-CqpQ8yWo.js";import{Cn as h,Cu as g,Fa as _,Ia as v,_i as y,dd as b,hd as x,hi as S,mi as C,vu as w,wn as T,xu as E,yu as D}from"./iframe-1VXrorm8.js";import{n as O,t as k}from"./storybook-B3JVMOJV.js";import{n as A,r as j}from"./index.esm-BGVpNNgE.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;t((()=>{M=e(n(),1),A(),k(),r(),m(),b(),_(),l(),w(),h(),f(),C(),N=o(),P={component:y,title:`Components / PasswordInput`},F=()=>(0,N.jsx)(y,{placeholder:`Your password`}),I=()=>(0,N.jsx)(O,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:a,children:(e,t,n)=>(0,N.jsx)(y,{colorScheme:t,variant:e,placeholder:i(e)},n)}),L=()=>(0,N.jsx)(O,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,N.jsx)(y,{size:e,variant:t,placeholder:`Size (${e})`},n)}),R=()=>(0,N.jsx)(y,{defaultValue:`password`,defaultVisible:!0,placeholder:`Your password`}),z=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(y,{variant:e,disabled:!0,placeholder:i(e)},t)}),(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,disabled:!0,children:[(0,N.jsx)(g,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:i(e)})]},t)}),(0,N.jsx)(x,{disabled:!0,helperMessage:`We'll never share your password.`,label:`Password`,children:(0,N.jsx)(y,{placeholder:`Your password`})})]}),B=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(y,{variant:e,placeholder:i(e),readOnly:!0},t)}),(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,readOnly:!0,children:[(0,N.jsx)(g,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:i(e)})]},t)}),(0,N.jsx)(x,{helperMessage:`We'll never share your password.`,label:`Password`,readOnly:!0,children:(0,N.jsx)(y,{placeholder:`Your password`})})]}),V=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(y,{variant:e,invalid:!0,placeholder:i(e)},t)}),(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,invalid:!0,children:[(0,N.jsx)(g,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:i(e)})]},t)}),(0,N.jsx)(x,{errorMessage:`Email is required.`,invalid:!0,label:`Password`,children:(0,N.jsx)(y,{placeholder:`Your password`})})]}),H=()=>(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,children:[(0,N.jsx)(g,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:`Your password`})]},t)}),U=()=>(0,N.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,children:[(0,N.jsx)(E,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:`Your password`})]},t)}),W=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{placeholder:`Default border color`}),(0,N.jsx)(y,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,N.jsxs)(D,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,N.jsx)(E,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:`Custom border color`})]}),(0,N.jsx)(y,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,N.jsxs)(D,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,N.jsx)(g,{children:(0,N.jsx)(c,{})}),(0,N.jsx)(y,{placeholder:`Custom border color`})]})]}),G=()=>{let[e,t]=(0,M.useState)(`Password`);return(0,N.jsxs)(T,{children:[(0,N.jsx)(y,{placeholder:`Your password`,value:e,onChange:e=>t(e.target.value)}),(0,N.jsx)(S,{value:(e=>{let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t})(e)})]})},K=()=>(0,N.jsx)(y,{placeholder:`Your password`,visibilityIcon:{off:(0,N.jsx)(s,{}),on:(0,N.jsx)(u,{})}}),q=()=>{let[e,t]=(0,M.useState)(!0);return(0,N.jsxs)(T,{children:[(0,N.jsxs)(d,{children:[`Password visibility: `,e?`show`:`hide`]}),(0,N.jsx)(y,{placeholder:`Your password`,visible:e,onVisibleChange:t})]})},J=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=j();return(0,N.jsxs)(T,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,N.jsx)(x,{errorMessage:e.password?.message,invalid:!!e.password,label:`Password`,children:(0,N.jsx)(y,{...n(`password`,{required:{message:`Password is required.`,value:!0}})})}),(0,N.jsx)(p,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Y=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=j({defaultValues:{password:`password`}});return(0,N.jsxs)(T,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,N.jsx)(x,{errorMessage:e.password?.message,invalid:!!e.password,label:`Password`,children:(0,N.jsx)(y,{...n(`password`,{required:{message:`Password is required.`,value:!0}})})}),(0,N.jsx)(p,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PasswordInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PasswordInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="Your password" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PasswordInput key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <KeyIcon />
            </InputGroup.Addon>
            <PasswordInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled helperMessage="We'll never share your password." label="Password">
        <PasswordInput placeholder="Your password" />
      </Field.Root>
    </>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PasswordInput key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <KeyIcon />
            </InputGroup.Addon>
            <PasswordInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root helperMessage="We'll never share your password." label="Password" readOnly>
        <PasswordInput placeholder="Your password" />
      </Field.Root>
    </>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PasswordInput key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <KeyIcon />
            </InputGroup.Addon>
            <PasswordInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="Email is required." invalid label="Password">
        <PasswordInput placeholder="Your password" />
      </Field.Root>
    </>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <KeyIcon />
          </InputGroup.Addon>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <KeyIcon />
          </InputGroup.Element>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput placeholder="Default border color" />

      <PasswordInput focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <KeyIcon />
        </InputGroup.Element>
        <PasswordInput placeholder="Custom border color" />
      </InputGroup.Root>

      <PasswordInput errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <KeyIcon />
        </InputGroup.Addon>
        <PasswordInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("Password");
  const getStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };
  return <VStack>
      <PasswordInput placeholder="Your password" value={value} onChange={e => setValue(e.target.value)} />

      <StrengthMeter value={getStrength(value)} />
    </VStack>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <VStack>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="Your password" visible={visible} onVisibleChange={setVisible} />
    </VStack>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.password?.message} invalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    password: string;
  }
  const defaultValues: Data = {
    password: "password"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.password?.message} invalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...Y.parameters?.docs?.source}}},X=[`Basic`,`Variant`,`Size`,`DefaultVisible`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Meter`,`CustomIcon`,`CustomControl`,`ReactHookForm`,`ReactHookFormWithDefaultValue`]}))();export{H as Addon,F as Basic,W as BorderColor,q as CustomControl,K as CustomIcon,R as DefaultVisible,z as Disabled,U as Element,V as Invalid,G as Meter,J as ReactHookForm,Y as ReactHookFormWithDefaultValue,B as ReadOnly,L as Size,I as Variant,X as __namedExportsOrder,P as default};