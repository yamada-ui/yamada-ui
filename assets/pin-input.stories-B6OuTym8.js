import{d as ye,r as c,a as ke,h as z,bS as ze,f as we,aM as Ve,j as e,m as Me,l as De,bT as xe,V as he,Q as ge,C as Oe}from"./iframe-BYxWTAfU.js";import{P as be}from"./props-table-Bo4bQ_jN.js";import{u as Se,C as Ie}from"./index.esm-BGvJ6BUb.js";import{F as b}from"./for-CEjldjdR.js";import{i as d,b as Te}from"./input-C1j0W-rS.js";import{u as qe}from"./index-ChSCjdDN.js";import{c as Ee}from"./index-DNwFJME9.js";import{u as Pe,F as C}from"./use-field-props-DU62N9XW.js";import{G as Ae}from"./group-Dyq4koHR.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./use-input-border-DlsVUduD.js";import"./index-sjTZ4rnq.js";import"./use-breakpoint-Co1erXvx.js";import"./use-breakpoint-value-DJioUp1E.js";import"./use-color-mode-value-DaTIAf89.js";const Be=ye({base:{field:{...d.base,textAlign:"center"},root:{}},variants:{filled:{field:d.variants?.filled},flushed:{field:d.variants?.flushed},outline:{field:d.variants?.outline},plain:{field:d.variants?.plain}},sizes:{xs:{field:{boxSize:d.sizes?.xs.minH,fontSize:d.sizes?.xs.fontSize}},sm:{field:{boxSize:d.sizes?.sm.minH,fontSize:d.sizes?.sm.fontSize}},md:{field:{boxSize:d.sizes?.md.minH,fontSize:d.sizes?.md.fontSize}},lg:{field:{boxSize:d.sizes?.lg.minH,fontSize:d.sizes?.lg.fontSize}},xl:{field:{boxSize:d.sizes?.xl.minH,fontSize:d.sizes?.xl.fontSize}},"2xl":{field:{boxSize:d.sizes?.["2xl"].minH,fontSize:d.sizes?.["2xl"].fontSize}}},defaultProps:{size:"md",variant:"outline"}}),{DescendantsContext:He,useDescendant:Le,useDescendants:_e}=Ee(),me=n=>n?.split(""),fe=(n,r)=>(r==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(n),Ge=(n={})=>{const r=c.useId(),{context:{labelId:i}={},props:{id:m=r,type:l="number",autoFocus:x,defaultValue:S,disabled:I,items:v=4,manageFocus:h=!0,mask:g,otp:X=!1,placeholder:j="◯",readOnly:W,value:ve,onChange:je,onComplete:R,...ne},ariaProps:re,dataProps:te,eventProps:Q}=Pe(n),u=_e(),[se,Z]=c.useState(!0),[oe,ae]=c.useState(-1),[P,y]=qe({defaultValue:me(S)||[],value:me(ve),onChange:t=>je?.(t.join(""))}),ie=c.useCallback(t=>{if(!se||!h)return;const a=u.nextValue(t,!1);a&&requestAnimationFrame(()=>a.node.focus())},[u,se,h]),Y=c.useCallback((t,a)=>{const o=t==="next"?u.nextValue(a,!1):u.prevValue(a,!1);if(!o)return;const f=o.node.value.length;requestAnimationFrame(()=>{o.node.focus(),o.node.setSelectionRange(0,f)})},[u]),F=c.useCallback((t,a,o=!0)=>{let f=[...P];f[a]=t,y(f),f=f.filter(Boolean),t!==""&&f.length===u.count()?(R?.(f.join("")),u.value(a)?.node.blur()):o&&ie(a)},[P,y,u,R,ie]),le=c.useCallback((t,a)=>{let o=a;return t?.length&&(t.startsWith(a.charAt(0))?o=a.charAt(1):t.startsWith(a.charAt(1))&&(o=a.charAt(0))),o},[]),ue=c.useCallback(t=>({target:a})=>{const o=a.value,f=P[t],k=le(f,o);if(k===""){F("",t);return}if(o.length>2){if(!fe(o,l))return;const ee=o.split("").filter((Ke,Re)=>Re<u.count());y(ee),ee.length===u.count()&&(R?.(ee.join("")),u.value(t)?.node.blur())}else fe(k,l)&&F(k,t),Z(!0)},[u,le,R,F,y,l,P]),de=c.useCallback(t=>a=>{h&&ke(a,{ArrowLeft:o=>{o.preventDefault(),Y("prev",t)},ArrowRight:o=>{o.preventDefault(),Y("next",t)},Backspace:o=>{if(o.target.value===""){const f=u.prevValue(t,!1);if(!f)return;F("",t-1,!1),f.node.focus(),Z(!0)}else Z(!1)}},{preventDefault:!1})},[u,Y,h,F]),ce=c.useCallback(t=>()=>ae(t),[]),pe=c.useCallback(()=>ae(-1),[]);c.useEffect(()=>{if(!x)return;const t=u.firstValue();t&&requestAnimationFrame(()=>t.node.focus())},[x,u]);const Fe=c.useCallback(t=>({role:"group",...ne,...t}),[ne]),Ce=c.useCallback(({"aria-labelledby":t,index:a,...o})=>({...re,...te,type:g?"password":l==="number"?"tel":"text","aria-labelledby":we(t,i),autoComplete:X?"one-time-code":"off",disabled:I,inputMode:l==="number"?"numeric":"text",placeholder:oe===a&&!W&&!o.readOnly?"":j,readOnly:W,value:P[a]||"",...ze(o),id:`${m}${a?`-${a}`:""}`,onBlur:z(Q.onBlur,o.onBlur,pe),onChange:z(o.onChange,ue(a)),onFocus:z(Q.onFocus,o.onFocus,ce(a)),onKeyDown:z(o.onKeyDown,de(a))}),[re,te,Q,g,l,i,X,I,oe,W,j,P,m,pe,ue,ce,de]);return{descendants:u,items:v,getInputProps:Ce,getRootProps:Fe}},{ComponentContext:Je,useComponentContext:Ne,withContext:Ue,withProvider:$e}=De("pin-input",Be),s=$e(({children:n,errorBorderColor:r,focusBorderColor:i,...m})=>{const{descendants:l,items:x,getInputProps:S,getRootProps:I}=Ge(m),v=c.useMemo(()=>{const g=Ve(n);return g.length?g:Array.from({length:x},(X,j)=>e.jsx(p,{index:j},j))},[n,x]),h=c.useMemo(()=>({errorBorderColor:r,focusBorderColor:i,getInputProps:S}),[S,r,i]);return e.jsx(He,{value:l,children:e.jsx(Je,{value:h,children:e.jsx(Ae,{...I(),children:v})})})},"root")(),p=Ue(Te,"field")(void 0,({ref:n,index:r,...i})=>{const{errorBorderColor:m,focusBorderColor:l,getInputProps:x}=Ne(),{register:S}=Le(),{props:I,ariaProps:v,dataProps:h,eventProps:g}=Pe(i);return{...x({errorBorderColor:m,focusBorderColor:l,...v,...h,...g,...I,ref:Me(S,n),index:r})}}),xn={component:s,title:"Components / PinInput"},w=()=>e.jsx(s,{}),V=()=>e.jsx(b,{each:[3,4,5,6],children:(n,r)=>e.jsx(s,{items:n},r)}),M=()=>e.jsx(be,{variant:"stack",columns:["outline","filled","flushed"],rows:Oe,children:(n,r,i)=>e.jsx(s,{colorScheme:r,variant:n},i)}),D=()=>e.jsx(be,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,r,i)=>e.jsx(s,{size:n,variant:r},i)}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{type:"alphanumeric"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:"1234"}),e.jsx(s,{defaultValue:"123"})]}),q=()=>{const{page:n}=xe();return e.jsx(s,{onComplete:()=>n.start({duration:5e3})})},E=()=>e.jsx(s,{otp:!0}),A=()=>e.jsx(s,{mask:!0}),B=()=>e.jsx(s,{manageFocus:!1}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(s,{variant:n,disabled:!0},r)}),e.jsx(b,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(s,{variant:n,children:[e.jsx(p,{disabled:!0,index:0}),e.jsx(p,{disabled:!0,index:1}),e.jsx(p,{disabled:!0,index:2}),e.jsx(p,{disabled:!0,index:3})]},r)}),e.jsx(C,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",children:e.jsx(s,{})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(s,{variant:n,readOnly:!0},r)}),e.jsx(b,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(s,{variant:n,children:[e.jsx(p,{index:0,readOnly:!0}),e.jsx(p,{index:1,readOnly:!0}),e.jsx(p,{index:2,readOnly:!0}),e.jsx(p,{index:3,readOnly:!0})]},r)}),e.jsx(C,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",readOnly:!0,children:e.jsx(s,{})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(s,{variant:n,invalid:!0},r)}),e.jsx(b,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(s,{variant:n,children:[e.jsx(p,{index:0,invalid:!0}),e.jsx(p,{index:1,invalid:!0}),e.jsx(p,{index:2,invalid:!0}),e.jsx(p,{index:3,invalid:!0})]},r)}),e.jsx(C,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,label:"Please one-time password",children:e.jsx(s,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{focusBorderColor:"green.500"}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0})]}),J=()=>e.jsxs(s,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1}),e.jsx(p,{index:2}),e.jsx(p,{index:3})]}),N=()=>e.jsx(s,{placeholder:"💩"}),U=()=>{const{page:n}=xe(),[r,i]=c.useState(""),m=()=>n.start({duration:5e3});return e.jsx(s,{value:r,onChange:i,onComplete:m})},$=()=>{const{control:n,formState:{errors:r},handleSubmit:i}=Se(),m=l=>console.log("submit:",l);return e.jsxs(he,{as:"form",onSubmit:i(m),children:[e.jsx(C,{errorMessage:r.pinInput?.message,invalid:!!r.pinInput,label:"Token",children:e.jsx(Ie,{name:"pinInput",control:n,render:({field:l})=>e.jsx(s,{...l}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},K=()=>{const n={pinInput:"5"},{control:r,formState:{errors:i},handleSubmit:m}=Se({defaultValues:n}),l=x=>console.log("submit:",x);return e.jsxs(he,{as:"form",onSubmit:m(l),children:[e.jsx(C,{errorMessage:i.pinInput?.message,invalid:!!i.pinInput,label:"Token",children:e.jsx(Ie,{name:"pinInput",control:r,render:({field:x})=>e.jsx(s,{...x}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>;
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PinInput.Root key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...J.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...N.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />;
}`,...U.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}};const hn=["Basic","Items","Variant","Size","Type","DefaultValue","HandleComplete","OneTimePassword","MaskingValue","DisabledFocusManagement","Disabled","ReadOnly","Invalid","BorderColor","CustomFields","CustomPlaceholder","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{w as Basic,G as BorderColor,U as CustomControl,J as CustomFields,N as CustomPlaceholder,T as DefaultValue,H as Disabled,B as DisabledFocusManagement,q as HandleComplete,_ as Invalid,V as Items,A as MaskingValue,E as OneTimePassword,$ as ReactHookForm,K as ReactHookFormDefaultValue,L as ReadOnly,D as Size,O as Type,M as Variant,hn as __namedExportsOrder,xn as default};
