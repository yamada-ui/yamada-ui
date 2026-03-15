import{d as K,G as _,r as G,b as W,j as e,s as L,l as Z,V as M,T as $,P as d,Q as B,C as Q}from"./iframe-BYxWTAfU.js";import{P as T}from"./props-table-Bo4bQ_jN.js";import{u as E}from"./index.esm-BGvJ6BUb.js";import{P as s}from"./password-input-pe-5NICU.js";import{F as l}from"./for-CEjldjdR.js";import{F as J,S as N}from"./smile-icon-BH0UgFM-.js";import{I as i,b as c,a as O}from"./input-group-D8FcFMh6.js";import{K as u}from"./key-icon-BUkVvkun.js";import{F as p}from"./use-field-props-DU62N9XW.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./input-C1j0W-rS.js";import"./use-input-border-DlsVUduD.js";import"./index-ChSCjdDN.js";import"./group-Dyq4koHR.js";import"./index-sjTZ4rnq.js";import"./use-breakpoint-Co1erXvx.js";import"./use-breakpoint-value-DJioUp1E.js";import"./use-color-mode-value-DaTIAf89.js";const U=K({base:{indicator:{bg:"bg.subtle",flex:"1",h:"1",rounded:"l1"},indicators:{display:"flex",gap:"sm",transitionDuration:"moderate",transitionProperty:"common",w:"full"},label:{color:"fg.muted",fontSize:"xs"},root:{alignItems:"end",display:"flex",flexDirection:"column",gap:"xs",w:"full"}}}),X=({max:r=4,value:o,...a})=>{const{t}=_("passwordInput"),n=G.useCallback(h=>({"aria-label":t("Password strength meter"),"aria-valuemax":r,"aria-valuemin":0,"aria-valuenow":o,role:"meter",...a,...h}),[r,a,o,t]);return{getIndicatorProps:G.useCallback(({index:h,...x})=>({"data-selected":W(h<o),...x}),[o]),getRootProps:n}},{withContext:A,withProvider:ee}=Z("strength-meter",U),re=ee(({max:r=4,value:o,withLabel:a=!0,getIndicatorProps:t,...n})=>{const m=o/r*100;t??=Y=>{switch(!0){case Y<33:return{label:"Low",_selected:{bg:"red.500"}};case Y<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}};const{label:x,...q}=t(m),{getIndicatorProps:z,getRootProps:H}=X({max:r,value:o,...n});return e.jsxs(L.div,{...H(),children:[e.jsx(oe,{children:Array.from({length:r}).map((Y,D)=>e.jsx(se,{...z({index:D,...q})},D))}),a&&x?e.jsx(te,{children:x}):null]})},"root")(),oe=A("div","indicators")(),se=A("div","indicator")(),te=A("span","label")(),Fe={component:s,title:"Components / PasswordInput"},g=()=>e.jsx(s,{placeholder:"Your password"}),f=()=>e.jsx(T,{variant:"stack",columns:["outline","filled","flushed"],rows:Q,children:(r,o,a)=>e.jsx(s,{colorScheme:o,variant:r,placeholder:d(r)},a)}),w=()=>e.jsx(T,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,o,a)=>e.jsx(s,{size:r,variant:o,placeholder:`Size (${r})`},a)}),b=()=>e.jsx(s,{defaultValue:"password",defaultVisible:!0,placeholder:"Your password"}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(s,{variant:r,disabled:!0,placeholder:d(r)},o)}),e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(i,{variant:r,disabled:!0,children:[e.jsx(c,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:d(r)})]},o)}),e.jsx(p,{disabled:!0,helperMessage:"We'll never share your password.",label:"Password",children:e.jsx(s,{placeholder:"Your password"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(s,{variant:r,placeholder:d(r),readOnly:!0},o)}),e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(i,{variant:r,readOnly:!0,children:[e.jsx(c,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:d(r)})]},o)}),e.jsx(p,{helperMessage:"We'll never share your password.",label:"Password",readOnly:!0,children:e.jsx(s,{placeholder:"Your password"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(s,{variant:r,invalid:!0,placeholder:d(r)},o)}),e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(i,{variant:r,invalid:!0,children:[e.jsx(c,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:d(r)})]},o)}),e.jsx(p,{errorMessage:"Email is required.",invalid:!0,label:"Password",children:e.jsx(s,{placeholder:"Your password"})})]}),v=()=>e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(i,{variant:r,children:[e.jsx(c,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:"Your password"})]},o)}),P=()=>e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(i,{variant:r,children:[e.jsx(O,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:"Your password"})]},o)}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"Default border color"}),e.jsx(s,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(i,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(O,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:"Custom border color"})]}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(i,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(c,{children:e.jsx(u,{})}),e.jsx(s,{placeholder:"Custom border color"})]})]}),C=()=>{const[r,o]=G.useState("Password"),a=t=>{let n=0;return t.length>=8&&n++,/[A-Z]/.test(t)&&n++,/[0-9]/.test(t)&&n++,/[^A-Za-z0-9]/.test(t)&&n++,n};return e.jsxs(M,{children:[e.jsx(s,{placeholder:"Your password",value:r,onChange:t=>o(t.target.value)}),e.jsx(re,{value:a(r)})]})},F=()=>e.jsx(s,{placeholder:"Your password",visibilityIcon:{off:e.jsx(N,{}),on:e.jsx(J,{})}}),R=()=>{const[r,o]=G.useState(!0);return e.jsxs(M,{children:[e.jsxs($,{children:["Password visibility: ",r?"show":"hide"]}),e.jsx(s,{placeholder:"Your password",visible:r,onVisibleChange:o})]})},k=()=>{const{formState:{errors:r},handleSubmit:o,register:a}=E(),t=n=>console.log("submit:",n);return e.jsxs(M,{as:"form",onSubmit:o(t),children:[e.jsx(p,{errorMessage:r.password?.message,invalid:!!r.password,label:"Password",children:e.jsx(s,{...a("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(B,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},V=()=>{const r={password:"password"},{formState:{errors:o},handleSubmit:a,register:t}=E({defaultValues:r}),n=m=>console.log("submit:",m);return e.jsxs(M,{as:"form",onSubmit:a(n),children:[e.jsx(p,{errorMessage:o.password?.message,invalid:!!o.password,label:"Password",children:e.jsx(s,{...t("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(B,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" />;
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PasswordInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PasswordInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="Your password" />;
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <KeyIcon />
          </InputGroup.Addon>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <KeyIcon />
          </InputGroup.Element>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...P.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <VStack>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="Your password" visible={visible} onVisibleChange={setVisible} />
    </VStack>;
}`,...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};const Re=["Basic","Variant","Size","DefaultVisible","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Meter","CustomIcon","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{v as Addon,g as Basic,y as BorderColor,R as CustomControl,F as CustomIcon,b as DefaultVisible,I as Disabled,P as Element,j as Invalid,C as Meter,k as ReactHookForm,V as ReactHookFormWithDefaultValue,S as ReadOnly,w as Size,f as Variant,Re as __namedExportsOrder,Fe as default};
