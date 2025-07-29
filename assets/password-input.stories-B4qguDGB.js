import{l as q,I as K,d as Z,G as N,r as w,h as O,m as oe,f as J,j as e,a as te,s as ne,C as ae,H as S,V as _,T as le}from"./iframe-B58gGoPv.js";import{P as Q}from"./props-table-DoDUM-tj.js";import{u as U}from"./index.esm-BI4iVaTD.js";import{b as v,i as n,g as ie,u as de,I as ue}from"./input-tFhTblFs.js";import{b as ce,B as X}from"./button-ByKXnJ56.js";import{u as pe}from"./index-Dp97PSmK.js";import{u as me,F as y}from"./use-field-props-DAwmxNtQ.js";import{c as L}from"./createLucideIcon-BaHwRC9x.js";import{u as he}from"./group-CPxhzQ_v.js";import{I as p,b as W,a as P}from"./input-group-CsN7n8iS.js";import{F as m}from"./for-Bky_3Tl1.js";import{F as fe,S as ge}from"./smile-icon-Dqp0oLuG.js";import"./grid-BkobzWyq.js";import"./grid-item-Cy-ugCgy.js";import"./flex-Col0vMQb.js";import"./heading-Cefe2Dmh.js";import"./use-input-border-CR9ScwU8.js";import"./use-ripple-mP-I-Ewm.js";import"./rings-Dx-JdLv3.js";import"./index-BAwTtQKG.js";import"./use-breakpoint-DJTFZdnw.js";import"./use-breakpoint-value-Dy8CsQBU.js";import"./use-color-mode-value-B677w30q.js";/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],be=L("eye-off",xe);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Se=L("eye",we);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],ve=L("key",Ie),je=q(K)({as:Se}),ye=q(K)({as:be}),I=q(K)({as:ve}),Pe=Z({base:{button:{...ce.base,rounded:"l1",_readOnly:{cursor:"pointer"}},field:n.base,root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:n.variants?.filled},flushed:{field:n.variants?.flushed,root:ie("& > input")},outline:{field:n.variants?.outline},plain:{field:n.variants?.plain}},sizes:{xs:{button:{boxSize:"calc({--input-height} - {spaces.2})",fontSize:n.sizes?.xs.fontSize},field:n.sizes?.xs,root:v(n.sizes?.xs.minH,"& > input")},sm:{button:{boxSize:"calc({--input-height} - {spaces.2})",fontSize:n.sizes?.sm.fontSize},field:n.sizes?.sm,root:v(n.sizes?.sm.minH,"& > input")},md:{button:{boxSize:"calc({--input-height} - {spaces.2})",fontSize:n.sizes?.md.fontSize},field:n.sizes?.md,root:v(n.sizes?.md.minH,"& > input")},lg:{button:{boxSize:"calc({--input-height} - {spaces.2.5})",fontSize:n.sizes?.lg.fontSize},field:n.sizes?.lg,root:v(n.sizes?.lg.minH,"& > input")},xl:{button:{boxSize:"calc({--input-height} - {spaces.3})",fontSize:n.sizes?.xl.fontSize},field:n.sizes?.xl,root:v(n.sizes?.xl.minH,"& > input")},"2xl":{button:{boxSize:"calc({--input-height} - {spaces.3})",fontSize:n.sizes?.["2xl"].fontSize},field:n.sizes?.["2xl"],root:v(n.sizes?.["2xl"]?.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),Ce=Z({base:{indicator:{bg:"bg.subtle",flex:"1",h:"1",rounded:"l1"},indicators:{display:"flex",gap:"sm",transitionDuration:"moderate",transitionProperty:"common",w:"full"},label:{color:"fg.muted",fontSize:"xs"},root:{alignItems:"end",display:"flex",flexDirection:"column",gap:"xs",w:"full"}}}),ke=(r={})=>{const{props:{defaultVisible:s,disabled:t,visible:a,onVisibleChange:l,...d},ariaProps:u,dataProps:i,eventProps:h}=me(r),[f,g]=pe({defaultValue:s,value:a,onChange:l}),{t:c}=N("passwordInput"),x=w.useCallback(b=>{t||b.button!==0||(b.preventDefault(),g(j=>!j))},[t,g]),re=w.useCallback(({ref:b,...j}={})=>({type:f?"text":"password",disabled:t,...u,...i,...d,...j,ref:oe(b,d.ref),onBlur:O(h.onBlur,j.onBlur),onFocus:O(h.onFocus,j.onFocus)}),[f,d,t,i,h,u]),se=w.useCallback((b={})=>({type:"button","aria-label":c("Toggle password visibility"),disabled:t,...i,...b,onClick:O(b.onClick,x)}),[x,i,t,c]);return{setVisible:g,visible:f,getButtonProps:se,getInputProps:re}},{withContext:ee,withProvider:Fe}=J("password-input",Pe),o=Fe(({className:r,css:s,colorScheme:t,visibilityIcon:a={off:e.jsx(ye,{}),on:e.jsx(je,{})},buttonProps:l,elementProps:d,rootProps:u,...i})=>{const[h,f]=he(i),{visible:g,getButtonProps:c,getInputProps:x}=ke(f);return e.jsxs(p,{className:r,css:s,colorScheme:t,...h,...u,children:[e.jsx(ze,{...x()}),e.jsx(W,{clickable:!0,...d,children:e.jsx(Re,{...c(l),children:g?a.off:a.on})})]})},"root")(r=>({...de(),...r})),ze=ee(ue,"field")({"data-group-propagate":""}),Re=ee("button","button")(),Ve=({max:r=4,value:s,...t})=>{const{t:a}=N("passwordInput"),l=w.useCallback(u=>({"aria-label":a("Password strength meter"),"aria-valuemax":r,"aria-valuemin":0,"aria-valuenow":s,role:"meter",...t,...u}),[r,t,s,a]);return{getIndicatorProps:w.useCallback(({index:u,...i})=>({"data-selected":te(u<s),...i}),[s]),getRootProps:l}},{withContext:$,withProvider:Ge}=J("strength-meter",Ce),Me=Ge(({max:r=4,value:s,withLabel:t=!0,getIndicatorProps:a,...l})=>{const d=s/r*100;a??=c=>{switch(!0){case c<33:return{label:"Low",_selected:{bg:"red.500"}};case c<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}};const{label:i,...h}=a(d),{getIndicatorProps:f,getRootProps:g}=Ve({max:r,value:s,...l});return e.jsxs(ne.div,{...g(),children:[e.jsx(Be,{children:Array.from({length:r}).map((c,x)=>e.jsx(Ae,{...f({index:x,...h})},x))}),t&&i?e.jsx(De,{children:i}):null]})},"root")(),Be=$("div","indicators")(),Ae=$("div","indicator")(),De=$("span","label")(),ar={component:o,title:"Components / PasswordInput"},C=()=>e.jsx(o,{placeholder:"Your password"}),k=()=>e.jsx(Q,{variant:"stack",columns:["outline","filled","flushed"],rows:ae,children:(r,s,t)=>e.jsx(o,{colorScheme:s,variant:r,placeholder:S(r)},t)}),F=()=>e.jsx(Q,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,s,t)=>e.jsx(o,{size:r,variant:s,placeholder:`Size (${r})`},t)}),z=()=>e.jsx(o,{defaultValue:"password",defaultVisible:!0,placeholder:"Your password"}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsx(o,{variant:r,disabled:!0,placeholder:S(r)},s)}),e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,disabled:!0,children:[e.jsx(P,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:S(r)})]},s)}),e.jsx(y,{disabled:!0,helperMessage:"We'll never share your password.",label:"Password",children:e.jsx(o,{placeholder:"Your password"})})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsx(o,{variant:r,placeholder:S(r),readOnly:!0},s)}),e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,readOnly:!0,children:[e.jsx(P,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:S(r)})]},s)}),e.jsx(y,{helperMessage:"We'll never share your password.",label:"Password",readOnly:!0,children:e.jsx(o,{placeholder:"Your password"})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsx(o,{variant:r,invalid:!0,placeholder:S(r)},s)}),e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,invalid:!0,children:[e.jsx(P,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:S(r)})]},s)}),e.jsx(y,{errorMessage:"Email is required.",invalid:!0,label:"Password",children:e.jsx(o,{placeholder:"Your password"})})]}),M=()=>e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,children:[e.jsx(P,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Your password"})]},s)}),B=()=>e.jsx(m,{each:["outline","filled","flushed"],children:(r,s)=>e.jsxs(p,{variant:r,children:[e.jsx(W,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Your password"})]},s)}),A=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(p,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(W,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Custom border color"})]}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(p,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(P,{children:e.jsx(I,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),D=()=>{const[r,s]=w.useState("Password"),t=a=>{let l=0;return a.length>=8&&l++,/[A-Z]/.test(a)&&l++,/[0-9]/.test(a)&&l++,/[^A-Za-z0-9]/.test(a)&&l++,l};return e.jsxs(_,{gap:"md",children:[e.jsx(o,{placeholder:"Your password",value:r,onChange:a=>s(a.target.value)}),e.jsx(Me,{value:t(r)})]})},E=()=>e.jsx(o,{placeholder:"Your password",visibilityIcon:{off:e.jsx(ge,{}),on:e.jsx(fe,{})}}),Y=()=>{const[r,s]=w.useState(!0);return e.jsxs(_,{gap:"md",children:[e.jsxs(le,{children:["Password visibility: ",r?"show":"hide"]}),e.jsx(o,{placeholder:"Your password",visible:r,onVisibleChange:s})]})},T=()=>{const{formState:{errors:r},handleSubmit:s,register:t}=U(),a=l=>console.log("submit:",l);return e.jsxs(_,{as:"form",onSubmit:s(a),children:[e.jsx(y,{errorMessage:r.password?.message,invalid:!!r.password,label:"Password",children:e.jsx(o,{...t("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(X,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},H=()=>{const r={password:"password"},{formState:{errors:s},handleSubmit:t,register:a}=U({defaultValues:r}),l=d=>console.log("submit:",d);return e.jsxs(_,{as:"form",onSubmit:t(l),children:[e.jsx(y,{errorMessage:s.password?.message,invalid:!!s.password,label:"Password",children:e.jsx(o,{...a("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(X,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="Your password" />;
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PasswordInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PasswordInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="Your password" />;
}`,...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
  return <VStack gap="md">
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
  return <VStack gap="md">
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
}`,...H.parameters?.docs?.source}}};const lr=["Basic","Variant","Size","DefaultVisible","Disabled","Readonly","Invalid","Addon","Element","BorderColor","Meter","CustomIcon","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{M as Addon,C as Basic,A as BorderColor,Y as CustomControl,E as CustomIcon,z as DefaultVisible,R as Disabled,B as Element,G as Invalid,D as Meter,T as ReactHookForm,H as ReactHookFormWithDefaultValue,V as Readonly,F as Size,k as Variant,lr as __namedExportsOrder,ar as default};
