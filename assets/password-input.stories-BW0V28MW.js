import{n as W,o as L,I as $,d as Z,ah as oe,J as N,r as w,h as _,m as te,g as J,j as e,b as ne,s as ae,C as le,R as S,V as O,T as ie,S as Q}from"./iframe-B0P9Y6nu.js";import{P as U}from"./props-table-BBOOdbBE.js";import{u as X}from"./index.esm-C3t_tuXF.js";import{g as v,i as n,a as de,u as ue,b as ce}from"./input-BqUpQ0eP.js";import{u as pe}from"./index-ISt4vA3k.js";import{u as me,F as P}from"./use-field-props-DDmJ1gDh.js";import{u as he}from"./group-BCvsLja2.js";import{I as p,a as q,b as y}from"./input-group-B4X35XkF.js";import{F as m}from"./for-ClzBHWNn.js";import{F as fe,S as ge}from"./smile-icon-BNy0k0T1.js";import{K as I}from"./key-icon-Yqzw-ydQ.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-d_ej_Zt5.js";import"./grid-item-DpCtVAhf.js";import"./flex-DYi500Yr.js";import"./heading-91H7fwws.js";import"./use-input-border-BNPs4Mo9.js";import"./index-Cy_ELgjD.js";import"./use-breakpoint-CQAuVy7J.js";import"./use-breakpoint-value-GRhcN3af.js";import"./use-color-mode-value-CWj24-n9.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],be=W("eye-off",xe);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Se=W("eye",we),Ie=L($)({as:Se}),ve=L($)({as:be}),je=Z({base:{button:{...oe.base,rounded:"l1",_readOnly:{cursor:"pointer"}},field:n.base,root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:n.variants?.filled},flushed:{field:n.variants?.flushed,root:de("& > input")},outline:{field:n.variants?.outline},plain:{field:n.variants?.plain}},sizes:{xs:{button:{boxSize:"calc({--height} - {spaces.2})",fontSize:n.sizes?.xs.fontSize},field:n.sizes?.xs,root:v(n.sizes?.xs.minH,"& > input")},sm:{button:{boxSize:"calc({--height} - {spaces.2})",fontSize:n.sizes?.sm.fontSize},field:n.sizes?.sm,root:v(n.sizes?.sm.minH,"& > input")},md:{button:{boxSize:"calc({--height} - {spaces.2})",fontSize:n.sizes?.md.fontSize},field:n.sizes?.md,root:v(n.sizes?.md.minH,"& > input")},lg:{button:{boxSize:"calc({--height} - {spaces.2.5})",fontSize:n.sizes?.lg.fontSize},field:n.sizes?.lg,root:v(n.sizes?.lg.minH,"& > input")},xl:{button:{boxSize:"calc({--height} - {spaces.3})",fontSize:n.sizes?.xl.fontSize},field:n.sizes?.xl,root:v(n.sizes?.xl.minH,"& > input")},"2xl":{button:{boxSize:"calc({--height} - {spaces.3})",fontSize:n.sizes?.["2xl"].fontSize},field:n.sizes?.["2xl"],root:v(n.sizes?.["2xl"]?.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),Pe=Z({base:{indicator:{bg:"bg.subtle",flex:"1",h:"1",rounded:"l1"},indicators:{display:"flex",gap:"sm",transitionDuration:"moderate",transitionProperty:"common",w:"full"},label:{color:"fg.muted",fontSize:"xs"},root:{alignItems:"end",display:"flex",flexDirection:"column",gap:"xs",w:"full"}}}),ye=(r={})=>{const{props:{defaultVisible:s,disabled:t,visible:a,onVisibleChange:l,...d},ariaProps:u,dataProps:i,eventProps:h}=me(r),[f,g]=pe({defaultValue:s,value:a,onChange:l}),{t:c}=N("passwordInput"),x=w.useCallback(b=>{t||b.button!==0||(b.preventDefault(),g(j=>!j))},[t,g]),re=w.useCallback(({ref:b,...j}={})=>({type:f?"text":"password",disabled:t,...u,...i,...d,...j,ref:te(b,d.ref),onBlur:_(h.onBlur,j.onBlur),onFocus:_(h.onFocus,j.onFocus)}),[f,d,t,i,h,u]),se=w.useCallback((b={})=>({type:"button","aria-label":c("Toggle password visibility"),disabled:t,...i,...b,onClick:_(b.onClick,x)}),[x,i,t,c]);return{setVisible:g,visible:f,getButtonProps:se,getInputProps:re}},{withContext:ee,withProvider:Ce}=J("password-input",je),o=Ce(({className:r,css:s,colorScheme:t,visibilityIcon:a={off:e.jsx(ve,{}),on:e.jsx(Ie,{})},buttonProps:l,elementProps:d,rootProps:u,...i})=>{const[h,f]=he(i),{visible:g,getButtonProps:c,getInputProps:x}=ye(f);return e.jsxs(p,{className:r,css:s,colorScheme:t,...h,...u,children:[e.jsx(Fe,{...x()}),e.jsx(q,{clickable:!0,...d,children:e.jsx(ze,{...c(l),children:g?a.off:a.on})})]})},"root")(r=>({...ue(),...r})),Fe=ee(ce,"field")({"data-group-propagate":""}),ze=ee("button","button")(),ke=({max:r=4,value:s,...t})=>{const{t:a}=N("passwordInput"),l=w.useCallback(u=>({"aria-label":a("Password strength meter"),"aria-valuemax":r,"aria-valuemin":0,"aria-valuenow":s,role:"meter",...t,...u}),[r,t,s,a]);return{getIndicatorProps:w.useCallback(({index:u,...i})=>({"data-selected":ne(u<s),...i}),[s]),getRootProps:l}},{withContext:K,withProvider:Re}=J("strength-meter",Pe),Ve=Re(({max:r=4,value:s,withLabel:t=!0,getIndicatorProps:a,...l})=>{const d=s/r*100;a??=c=>{switch(!0){case c<33:return{label:"Low",_selected:{bg:"red.500"}};case c<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}};const{label:i,...h}=a(d),{getIndicatorProps:f,getRootProps:g}=ke({max:r,value:s,...l});return e.jsxs(ae.div,{...g(),children:[e.jsx(Ge,{children:Array.from({length:r}).map((c,x)=>e.jsx(Me,{...f({index:x,...h})},x))}),t&&i?e.jsx(Be,{children:i}):null]})},"root")(),Ge=K("div","indicators")(),Me=K("div","indicator")(),Be=K("span","label")(),sr={component:o,title:"Components / PasswordInput"},C=()=>e.jsx(o,{placeholder:"Your password"}),F=()=>e.jsx(U,{variant:"stack",columns:["outline","filled","flushed"],rows:le,children:(r,s,t)=>e.jsx(o,{colorScheme:s,variant:r,placeholder:S(r)},t)}),z=()=>e.jsx(U,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,s,t)=>e.jsx(o,{size:r,variant:s,placeholder:`Size (${r})`},t)}),k=()=>e.jsx(o,{defaultValue:"password",defaultVisible:!0,placeholder:"Your password"}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsx(o,{variant:r,disabled:!0,placeholder:S(r)},s)}),e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,disabled:!0,children:[e.jsx(y,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:S(r)})]},s)}),e.jsx(P,{disabled:!0,helperMessage:"We'll never share your password.",label:"Password",children:e.jsx(o,{placeholder:"Your password"})})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsx(o,{variant:r,placeholder:S(r),readOnly:!0},s)}),e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,readOnly:!0,children:[e.jsx(y,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:S(r)})]},s)}),e.jsx(P,{helperMessage:"We'll never share your password.",label:"Password",readOnly:!0,children:e.jsx(o,{placeholder:"Your password"})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsx(o,{variant:r,invalid:!0,placeholder:S(r)},s)}),e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,invalid:!0,children:[e.jsx(y,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:S(r)})]},s)}),e.jsx(P,{errorMessage:"Email is required.",invalid:!0,label:"Password",children:e.jsx(o,{placeholder:"Your password"})})]}),M=()=>e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,children:[e.jsx(y,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Your password"})]},s)}),B=()=>e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,children:[e.jsx(q,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Your password"})]},s)}),A=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(p,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(q,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Custom border color"})]}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(p,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(y,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),D=()=>{const[r,s]=w.useState("Password"),t=a=>{let l=0;return a.length>=8&&l++,/[A-Z]/.test(a)&&l++,/[0-9]/.test(a)&&l++,/[^A-Za-z0-9]/.test(a)&&l++,l};return e.jsxs(O,{children:[e.jsx(o,{placeholder:"Your password",value:r,onChange:a=>s(a.target.value)}),e.jsx(Ve,{value:t(r)})]})},E=()=>e.jsx(o,{placeholder:"Your password",visibilityIcon:{off:e.jsx(ge,{}),on:e.jsx(fe,{})}}),Y=()=>{const[r,s]=w.useState(!0);return e.jsxs(O,{children:[e.jsxs(ie,{children:["Password visibility: ",r?"show":"hide"]}),e.jsx(o,{placeholder:"Your password",visible:r,onVisibleChange:s})]})},T=()=>{const{formState:{errors:r},handleSubmit:s,register:t}=X(),a=l=>console.log("submit:",l);return e.jsxs(O,{as:"form",onSubmit:s(a),children:[e.jsx(P,{errorMessage:r.password?.message,invalid:!!r.password,label:"Password",children:e.jsx(o,{...t("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Q,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},H=()=>{const r={password:"password"},{formState:{errors:s},handleSubmit:t,register:a}=X({defaultValues:r}),l=d=>console.log("submit:",d);return e.jsxs(O,{as:"form",onSubmit:t(l),children:[e.jsx(P,{errorMessage:s.password?.message,invalid:!!s.password,label:"Password",children:e.jsx(o,{...a("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Q,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" />;
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PasswordInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PasswordInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="Your password" />;
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <KeyIcon />
          </InputGroup.Addon>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <KeyIcon />
          </InputGroup.Element>
          <PasswordInput placeholder="Your password" />
        </InputGroup.Root>}
    </For>;
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...E.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <VStack>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="Your password" visible={visible} onVisibleChange={setVisible} />
    </VStack>;
}`,...Y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};const or=["Basic","Variant","Size","DefaultVisible","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Meter","CustomIcon","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{M as Addon,C as Basic,A as BorderColor,Y as CustomControl,E as CustomIcon,k as DefaultVisible,R as Disabled,B as Element,G as Invalid,D as Meter,T as ReactHookForm,H as ReactHookFormWithDefaultValue,V as ReadOnly,z as Size,F as Variant,or as __namedExportsOrder,sr as default};
