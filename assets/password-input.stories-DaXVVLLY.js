import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Nn as r,Tn as i,Yt as a,_n as o,dn as s,i as c,o as l}from"./props-Bz1FL_va.js";import{i as ee,r as te}from"./i18n-provider-Cc12Ys91.js";import{t as u}from"./jsx-runtime-BdxMnOeJ.js";import{d as ne,f as re}from"./utils-DG4lHdyV.js";import{d as ie,i as ae,n as oe,r as se}from"./create-component-DtmnY_ce.js";import{n as ce,t as d}from"./password-input-B-fOOpbJ.js";import{i as le,n as ue,r as de,t as fe}from"./face-slightly-smiling-icon-BqE5n7HX.js";import{n as pe,t as f}from"./key-icon-C3JTbeD-.js";import{n as me,t as he}from"./text-b2W5euYI.js";import{r as ge,t as p}from"./button-CFBNyQlD.js";import{c as _e,s as m}from"./use-field-props-DklfXwrD.js";import{a as h,i as ve,n as ye,o as be,r as g,t as _}from"./input-group-U0aj6U1q.js";import{n as xe,t as v}from"./for-BIl9Q3L3.js";import{n as Se,t as y}from"./v-stack-DgxvBjIl.js";import{n as Ce,t as b}from"./props-table-CLkISL0o.js";import{n as we,r as x}from"./index.esm-CWrUCFh-.js";var S;function C(){return(C=e((()=>{ie(),S=ae({base:{indicator:{bg:`bg.subtle`,flex:`1`,h:`1`,rounded:`l1`},indicators:{display:`flex`,gap:`sm`,transitionDuration:`moderate`,transitionProperty:`common`,w:`full`},label:{color:`fg.muted`,fontSize:`xs`},root:{alignItems:`end`,display:`flex`,flexDirection:`column`,gap:`xs`,w:`full`}}})})))()}var w,T;function E(){return(E=e((()=>{w=t(),c(),te(),a(),T=({max:e=4,value:t,...r})=>{let{t:i}=ee(`passwordInput`),a=(0,w.useCallback)(n=>l({"aria-label":i(`Password strength meter`),"aria-valuemax":e,"aria-valuemin":0,"aria-valuenow":t,role:`meter`},r,n)(),[e,r,t,i]);return{getIndicatorProps:(0,w.useCallback)(({index:e,...r})=>({"data-selected":n(e<t),...r}),[t]),getRootProps:a}}})))()}var D,Te,Ee,O,k,A,j,M,N;function P(){return(P=e((()=>{se(),ne(),C(),E(),D=u(),{PropsContext:Te,usePropsContext:Ee,withContext:O,withProvider:k}=oe(`strength-meter`,S),A=k(({max:e=4,value:t,withLabel:n=!0,getIndicatorProps:r,...i})=>{let a=t/e*100;r??=e=>{switch(!0){case e<33:return{label:`Low`,_selected:{bg:`red.500`}};case e<66:return{label:`Medium`,_selected:{bg:`orange.500`}};default:return{label:`High`,_selected:{bg:`green.500`}}}};let{label:o,...s}=r(a),{getIndicatorProps:c,getRootProps:l}=T({max:e,value:t,...i});return(0,D.jsxs)(re.div,{...l(),children:[(0,D.jsx)(j,{children:Array.from({length:e}).map((e,t)=>(0,D.jsx)(M,{...c({index:t,...s})},t))}),n&&o?(0,D.jsx)(N,{children:o}):null]})},`root`)(),j=O(`div`,`indicators`)(),M=O(`div`,`indicator`)(),N=O(`span`,`label`)()})))()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;function De(){return(De=e((()=>{F=t(),we(),Ce(),r(),s(),ge(),_e(),xe(),le(),ue(),pe(),ye(),be(),ve(),Se(),me(),ce(),P(),I=u(),L={component:d,title:`Components / PasswordInput`},R=()=>(0,I.jsx)(d,{placeholder:`Your password`}),z=()=>(0,I.jsx)(b,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:i,children:(e,t,n)=>(0,I.jsx)(d,{colorScheme:t,variant:e,placeholder:o(e)},n)}),B=()=>(0,I.jsx)(b,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,I.jsx)(d,{size:e,variant:t,placeholder:`Size (${e})`},n)}),V=()=>(0,I.jsx)(d,{defaultValue:`password`,defaultVisible:!0,placeholder:`Your password`}),H=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsx)(d,{variant:e,disabled:!0,placeholder:o(e)},t)}),(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(_,{variant:e,disabled:!0,children:[(0,I.jsx)(h,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:o(e)})]},t)}),(0,I.jsx)(m,{disabled:!0,helperMessage:`We'll never share your password.`,label:`Password`,children:(0,I.jsx)(d,{placeholder:`Your password`})})]}),U=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsx)(d,{variant:e,placeholder:o(e),readOnly:!0},t)}),(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(_,{variant:e,readOnly:!0,children:[(0,I.jsx)(h,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:o(e)})]},t)}),(0,I.jsx)(m,{helperMessage:`We'll never share your password.`,label:`Password`,readOnly:!0,children:(0,I.jsx)(d,{placeholder:`Your password`})})]}),W=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsx)(d,{variant:e,invalid:!0,placeholder:o(e)},t)}),(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(_,{variant:e,invalid:!0,children:[(0,I.jsx)(h,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:o(e)})]},t)}),(0,I.jsx)(m,{errorMessage:`Email is required.`,invalid:!0,label:`Password`,children:(0,I.jsx)(d,{placeholder:`Your password`})})]}),G=()=>(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(_,{variant:e,children:[(0,I.jsx)(h,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:`Your password`})]},t)}),K=()=>(0,I.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(_,{variant:e,children:[(0,I.jsx)(g,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:`Your password`})]},t)}),q=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d,{placeholder:`Default border color`}),(0,I.jsx)(d,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,I.jsxs)(_,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,I.jsx)(g,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:`Custom border color`})]}),(0,I.jsx)(d,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,I.jsxs)(_,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,I.jsx)(h,{children:(0,I.jsx)(f,{})}),(0,I.jsx)(d,{placeholder:`Custom border color`})]})]}),J=()=>{let[e,t]=(0,F.useState)(`Password`);return(0,I.jsxs)(y,{children:[(0,I.jsx)(d,{placeholder:`Your password`,value:e,onChange:e=>t(e.target.value)}),(0,I.jsx)(A,{value:(e=>{let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t})(e)})]})},Y=()=>(0,I.jsx)(d,{placeholder:`Your password`,visibilityIcon:{off:(0,I.jsx)(fe,{}),on:(0,I.jsx)(de,{})}}),X=()=>{let[e,t]=(0,F.useState)(!0);return(0,I.jsxs)(y,{children:[(0,I.jsxs)(he,{children:[`Password visibility: `,e?`show`:`hide`]}),(0,I.jsx)(d,{placeholder:`Your password`,visible:e,onVisibleChange:t})]})},Z=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=x();return(0,I.jsxs)(y,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,I.jsx)(m,{errorMessage:e.password?.message,invalid:!!e.password,label:`Password`,children:(0,I.jsx)(d,{...n(`password`,{required:{message:`Password is required.`,value:!0}})})}),(0,I.jsx)(p,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Q=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=x({defaultValues:{password:`password`}});return(0,I.jsxs)(y,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,I.jsx)(m,{errorMessage:e.password?.message,invalid:!!e.password,label:`Password`,children:(0,I.jsx)(d,{...n(`password`,{required:{message:`Password is required.`,value:!0}})})}),(0,I.jsx)(p,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=[`Basic`,`Variant`,`Size`,`DefaultVisible`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Meter`,`CustomIcon`,`CustomControl`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PasswordInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PasswordInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="Your password" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <KeyIcon />
          </InputGroup.Addon>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <KeyIcon />
          </InputGroup.Element>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" visibilityIcon={{
    off: <FaceSlightlySmilingIcon />,
    on: <FaceSlightlyFrowningIcon />
  }} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <VStack>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="Your password" visible={visible} onVisibleChange={setVisible} />
    </VStack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}}})))()}De();export{G as Addon,R as Basic,q as BorderColor,X as CustomControl,Y as CustomIcon,V as DefaultVisible,H as Disabled,K as Element,W as Invalid,J as Meter,Z as ReactHookForm,Q as ReactHookFormWithDefaultValue,U as ReadOnly,B as Size,z as Variant,$ as __namedExportsOrder,L as default};