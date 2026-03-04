import{d as Ae,G as De,r as G,b as Be,j as e,s as Te,l as Ee,V as M,T as Oe,P as i,Q as Fe,C as qe}from"./iframe-DUA3oqMy.js";import{P as Re}from"./props-table-Cj5B83mD.js";import{u as ke}from"./index.esm-KJJZBBZw.js";import{P as s}from"./password-input-j3SQ22oJ.js";import{F as l}from"./for-B0PAANOF.js";import{F as ze,S as He}from"./smile-icon-B7OCMTVb.js";import{I as u,b as m,a as Ve}from"./input-group-D0D22mD-.js";import{K as c}from"./key-icon-2QheRLcb.js";import{F as h}from"./use-field-props-B47Uou4a.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BjdtNp2g.js";import"./grid-item-BYxt1f2b.js";import"./flex-BtD-iYsF.js";import"./heading-Bp7J583J.js";import"./input-vy16QIMf.js";import"./use-input-border-B-tte44Q.js";import"./index-CLZSTQBU.js";import"./group-DVcvy7p_.js";import"./index-CcecY9Cs.js";import"./use-breakpoint-DYVsIoty.js";import"./use-breakpoint-value-cOf6H18k.js";import"./use-color-mode-value-BpZPuStl.js";const Ke=Ae({base:{indicator:{bg:"bg.subtle",flex:"1",h:"1",rounded:"l1"},indicators:{display:"flex",gap:"sm",transitionDuration:"moderate",transitionProperty:"common",w:"full"},label:{color:"fg.muted",fontSize:"xs"},root:{alignItems:"end",display:"flex",flexDirection:"column",gap:"xs",w:"full"}}}),_e=({max:r=4,value:o,...a})=>{const{t}=De("passwordInput"),n=G.useCallback(p=>({"aria-label":t("Password strength meter"),"aria-valuemax":r,"aria-valuemin":0,"aria-valuenow":o,role:"meter",...a,...p}),[r,a,o,t]);return{getIndicatorProps:G.useCallback(({index:p,...x})=>({"data-selected":Be(p<o),...x}),[o]),getRootProps:n}},{withContext:A,withProvider:We}=Ee("strength-meter",Ke),Le=We(({max:r=4,value:o,withLabel:a=!0,getIndicatorProps:t,...n})=>{const d=o/r*100;t??(t=Y=>{switch(!0){case Y<33:return{label:"Low",_selected:{bg:"red.500"}};case Y<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}});const{label:x,...Ge}=t(d),{getIndicatorProps:Me,getRootProps:Ye}=_e({max:r,value:o,...n});return e.jsxs(Te.div,{...Ye(),children:[e.jsx(Ze,{children:Array.from({length:r}).map((Y,D)=>e.jsx($e,{...Me({index:D,...Ge})},D))}),a&&x?e.jsx(Qe,{children:x}):null]})},"root")(),Ze=A("div","indicators")(),$e=A("div","indicator")(),Qe=A("span","label")(),wr={component:s,title:"Components / PasswordInput"},g=()=>e.jsx(s,{placeholder:"Your password"}),f=()=>e.jsx(Re,{variant:"stack",columns:["outline","filled","flushed"],rows:qe,children:(r,o,a)=>e.jsx(s,{colorScheme:o,variant:r,placeholder:i(r)},a)}),w=()=>e.jsx(Re,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,o,a)=>e.jsx(s,{size:r,variant:o,placeholder:`Size (${r})`},a)}),b=()=>e.jsx(s,{defaultValue:"password",defaultVisible:!0,placeholder:"Your password"}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(s,{variant:r,disabled:!0,placeholder:i(r)},o)}),e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(u,{variant:r,disabled:!0,children:[e.jsx(m,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:i(r)})]},o)}),e.jsx(h,{disabled:!0,helperMessage:"We'll never share your password.",label:"Password",children:e.jsx(s,{placeholder:"Your password"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(s,{variant:r,placeholder:i(r),readOnly:!0},o)}),e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(u,{variant:r,readOnly:!0,children:[e.jsx(m,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:i(r)})]},o)}),e.jsx(h,{helperMessage:"We'll never share your password.",label:"Password",readOnly:!0,children:e.jsx(s,{placeholder:"Your password"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(s,{variant:r,invalid:!0,placeholder:i(r)},o)}),e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(u,{variant:r,invalid:!0,children:[e.jsx(m,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:i(r)})]},o)}),e.jsx(h,{errorMessage:"Email is required.",invalid:!0,label:"Password",children:e.jsx(s,{placeholder:"Your password"})})]}),v=()=>e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(u,{variant:r,children:[e.jsx(m,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:"Your password"})]},o)}),P=()=>e.jsx(l,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(u,{variant:r,children:[e.jsx(Ve,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:"Your password"})]},o)}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"Default border color"}),e.jsx(s,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(u,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(Ve,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:"Custom border color"})]}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(u,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(m,{children:e.jsx(c,{})}),e.jsx(s,{placeholder:"Custom border color"})]})]}),C=()=>{const[r,o]=G.useState("Password"),a=t=>{let n=0;return t.length>=8&&n++,/[A-Z]/.test(t)&&n++,/[0-9]/.test(t)&&n++,/[^A-Za-z0-9]/.test(t)&&n++,n};return e.jsxs(M,{children:[e.jsx(s,{placeholder:"Your password",value:r,onChange:t=>o(t.target.value)}),e.jsx(Le,{value:a(r)})]})},F=()=>e.jsx(s,{placeholder:"Your password",visibilityIcon:{off:e.jsx(He,{}),on:e.jsx(ze,{})}}),R=()=>{const[r,o]=G.useState(!0);return e.jsxs(M,{children:[e.jsxs(Oe,{children:["Password visibility: ",r?"show":"hide"]}),e.jsx(s,{placeholder:"Your password",visible:r,onVisibleChange:o})]})},k=()=>{var n;const{formState:{errors:r},handleSubmit:o,register:a}=ke(),t=d=>console.log("submit:",d);return e.jsxs(M,{as:"form",onSubmit:o(t),children:[e.jsx(h,{errorMessage:(n=r.password)==null?void 0:n.message,invalid:!!r.password,label:"Password",children:e.jsx(s,{...a("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Fe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},V=()=>{var d;const r={password:"password"},{formState:{errors:o},handleSubmit:a,register:t}=ke({defaultValues:r}),n=p=>console.log("submit:",p);return e.jsxs(M,{as:"form",onSubmit:a(n),children:[e.jsx(h,{errorMessage:(d=o.password)==null?void 0:d.message,invalid:!!o.password,label:"Password",children:e.jsx(s,{...t("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Fe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var B,T,E;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" />;
}`,...(E=(T=g.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,q,z;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PasswordInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...(z=(q=f.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var H,K,_;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PasswordInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...(_=(K=w.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var W,L,Z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="Your password" />;
}`,...(Z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var $,Q,J;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(J=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var N,U,X;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(X=(U=S.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var ee,re,oe;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(oe=(re=j.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,te,ae;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <KeyIcon />
          </InputGroup.Addon>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,le,de;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <KeyIcon />
          </InputGroup.Element>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ie,ue,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,he;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(he=(me=C.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,ge,fe;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...(fe=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var we,be,Ie;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <VStack>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="Your password" visible={visible} onVisibleChange={setVisible} />
    </VStack>;
}`,...(Ie=(be=R.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Se,je,ve;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(ve=(je=k.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var Pe,ye,Ce;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Ce=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};const br=["Basic","Variant","Size","DefaultVisible","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Meter","CustomIcon","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{v as Addon,g as Basic,y as BorderColor,R as CustomControl,F as CustomIcon,b as DefaultVisible,I as Disabled,P as Element,j as Invalid,C as Meter,k as ReactHookForm,V as ReactHookFormWithDefaultValue,S as ReadOnly,w as Size,f as Variant,br as __namedExportsOrder,wr as default};
