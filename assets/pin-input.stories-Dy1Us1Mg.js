import{d as Ce,r as c,L as Re,h as w,bc as ye,f as ke,k as we,j as e,m as ze,C as Ve,aI as fe,V as he}from"./iframe-Cn-KGvUL.js";import{P as ge}from"./props-table-BntjFkZU.js";import{u as xe,C as Ie}from"./index.esm-QfGEJPCt.js";import{F as S}from"./for-BdBeBw1j.js";import{B as Se}from"./button-C4DORSB8.js";import{i as d,I as Me}from"./input-CNKEUy7X.js";import{u as De}from"./index-Dn2O0yPo.js";import{c as qe}from"./index-DbQ7z9qa.js";import{u as ve,F}from"./use-field-props-tKiP16Oy.js";import{G as Oe}from"./group-Xtkrkh0q.js";import"./grid-C4dll-_z.js";import"./grid-item-Dzq5Guzl.js";import"./flex-Bl4NfkFH.js";import"./heading-lDMaWbiz.js";import"./use-ripple-we29PBC5.js";import"./rings-Bgjjtt2b.js";import"./use-input-border-CjmQkTMJ.js";import"./index-Dzj2ZL1b.js";import"./use-breakpoint-GfC1FdYw.js";import"./use-breakpoint-value-CSnHtgSh.js";import"./use-color-mode-value-Rtca59em.js";const Te=Ce({base:{field:{...d.base,textAlign:"center"},root:{}},variants:{filled:{field:d.variants?.filled},flushed:{field:d.variants?.flushed},outline:{field:d.variants?.outline},plain:{field:d.variants?.plain}},sizes:{xs:{field:{boxSize:d.sizes?.xs.minH,fontSize:d.sizes?.xs.fontSize}},sm:{field:{boxSize:d.sizes?.sm.minH,fontSize:d.sizes?.sm.fontSize}},md:{field:{boxSize:d.sizes?.md.minH,fontSize:d.sizes?.md.fontSize}},lg:{field:{boxSize:d.sizes?.lg.minH,fontSize:d.sizes?.lg.fontSize}},xl:{field:{boxSize:d.sizes?.xl.minH,fontSize:d.sizes?.xl.fontSize}},"2xl":{field:{boxSize:d.sizes?.["2xl"].minH,fontSize:d.sizes?.["2xl"].fontSize}}},defaultProps:{size:"md",variant:"outline"}}),{DescendantsContext:Be,useDescendant:Ee,useDescendants:Ae}=qe(),pe=r=>r?.split(""),me=(r,t)=>(t==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(r),He=(r={})=>{const t=c.useId(),{props:{id:i=t,type:l="number",autoFocus:f,defaultValue:h,disabled:g,manageFocus:x=!0,mask:v,otp:P=!1,placeholder:I="○",readOnly:C,value:X,onChange:Pe,onComplete:R,...ee},ariaProps:ne,dataProps:re,eventProps:W}=ve(r),u=Ae(),[te,Z]=c.useState(!0),[se,oe]=c.useState(-1),[b,y]=De({defaultValue:pe(h)||[],value:pe(X),onChange:n=>Pe?.(n.join(""))}),ae=c.useCallback(n=>{if(!te||!x)return;const o=u.nextValue(n,void 0,!1);o&&requestAnimationFrame(()=>o.node.focus())},[u,te,x]),Q=c.useCallback((n,o)=>{const a=n==="next"?u.nextValue(o,void 0,!1):u.prevValue(o,void 0,!1);if(!a)return;const m=a.node.value.length;requestAnimationFrame(()=>{a.node.focus(),a.node.setSelectionRange(0,m)})},[u]),j=c.useCallback((n,o,a=!0)=>{let m=[...b];m[o]=n,y(m),m=m.filter(Boolean),n!==""&&m.length===u.count()?(R?.(m.join("")),u.value(o)?.node.blur()):a&&ae(o)},[b,y,u,R,ae]),ie=c.useCallback((n,o)=>{let a=o;return n?.length&&(n.startsWith(o.charAt(0))?a=o.charAt(1):n.startsWith(o.charAt(1))&&(a=o.charAt(0))),a},[]),le=c.useCallback(n=>({target:o})=>{const a=o.value,m=b[n],k=ie(m,a);if(k===""){j("",n);return}if(a.length>2){if(!me(a,l))return;const Y=a.split("").filter((Ne,Fe)=>Fe<u.count());y(Y),Y.length===u.count()&&(R?.(Y.join("")),u.value(n)?.node.blur())}else me(k,l)&&j(k,n),Z(!0)},[u,ie,R,j,y,l,b]),ue=c.useCallback(n=>o=>{x&&Re(o,{ArrowLeft:a=>{a.preventDefault(),Q("prev",n)},ArrowRight:a=>{a.preventDefault(),Q("next",n)},Backspace:a=>{if(a.target.value===""){const m=u.prevValue(n,void 0,!1);if(!m)return;j("",n-1,!1),m.node.focus(),Z(!0)}else Z(!1)}},{preventDefault:!1})},[u,Q,x,j]),de=c.useCallback(n=>()=>oe(n),[]),ce=c.useCallback(()=>oe(-1),[]);c.useEffect(()=>{if(!f)return;const n=u.firstValue();n&&requestAnimationFrame(()=>n.node.focus())},[f,u]);const be=c.useCallback(n=>({role:"group",...ee,...n}),[ee]),je=c.useCallback(({index:n,...o})=>({...ne,...re,type:v?"password":l==="number"?"tel":"text",autoComplete:P?"one-time-code":"off",disabled:g,inputMode:l==="number"?"numeric":"text",placeholder:se===n&&!C&&!o.readOnly?"":I,readOnly:C,value:b[n]||"",...ye(o),id:`${i}${n?`-${n}`:""}`,onBlur:w(W.onBlur,o.onBlur,ce),onChange:w(o.onChange,le(n)),onFocus:w(W.onFocus,o.onFocus,de(n)),onKeyDown:w(o.onKeyDown,ue(n))}),[ne,re,W,v,l,g,C,i,P,se,I,b,ce,le,de,ue]);return{descendants:u,getInputProps:je,getRootProps:be}},{ComponentContext:Le,useComponentContext:_e,withContext:Ge,withProvider:Je}=ke("pin-input",Te),s=Je(({children:r,errorBorderColor:t,focusBorderColor:i,items:l=4,...f})=>{const{descendants:h,getInputProps:g,getRootProps:x}=He(f),v=c.useMemo(()=>{const I=we(r);return I.length?I:Array.from({length:l},(C,X)=>e.jsx(p,{},X))},[r,l]),P=c.useMemo(()=>({errorBorderColor:t,focusBorderColor:i,getInputProps:g}),[g,t,i]);return e.jsx(Be,{value:h,children:e.jsx(Le,{value:P,children:e.jsx(Oe,{...x(),children:v})})})},"root")(),p=Ge(Me,"field")(void 0,({ref:r,...t})=>{const{errorBorderColor:i,focusBorderColor:l,getInputProps:f}=_e(),{index:h,register:g}=Ee(),{props:x,ariaProps:v,dataProps:P,eventProps:I}=ve(t);return{...f({errorBorderColor:i,focusBorderColor:l,...v,...P,...I,...x,ref:ze(g,r),index:h})}}),fn={component:s,title:"Components / PinInput"},z=()=>e.jsx(s,{}),V=()=>e.jsx(S,{each:[3,4,5,6],children:(r,t)=>e.jsx(s,{items:r},t)}),M=()=>e.jsx(ge,{variant:"stack",columns:["outline","filled","flushed"],rows:Ve,children:(r,t,i)=>e.jsx(s,{colorScheme:t,variant:r},i)}),D=()=>e.jsx(ge,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,t,i)=>e.jsx(s,{size:r,variant:t},i)}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{type:"alphanumeric"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:"1234"}),e.jsx(s,{defaultValue:"123"})]}),T=()=>{const{page:r}=fe();return e.jsx(s,{onComplete:()=>r.start({duration:5e3})})},B=()=>e.jsx(s,{otp:!0}),E=()=>e.jsx(s,{mask:!0}),A=()=>e.jsx(s,{manageFocus:!1}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,disabled:!0},t)}),e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{disabled:!0}),e.jsx(p,{disabled:!0}),e.jsx(p,{disabled:!0}),e.jsx(p,{disabled:!0})]},t)}),e.jsx(F,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",children:e.jsx(s,{})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,readOnly:!0},t)}),e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{readOnly:!0}),e.jsx(p,{readOnly:!0}),e.jsx(p,{readOnly:!0}),e.jsx(p,{readOnly:!0})]},t)}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",readOnly:!0,children:e.jsx(s,{})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,invalid:!0},t)}),e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{invalid:!0}),e.jsx(p,{invalid:!0}),e.jsx(p,{invalid:!0}),e.jsx(p,{invalid:!0})]},t)}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,label:"Please one-time password",children:e.jsx(s,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{focusBorderColor:"green.500"}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0})]}),J=()=>e.jsxs(s,{children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{})]}),N=()=>e.jsx(s,{placeholder:"💩"}),U=()=>{const{page:r}=fe(),[t,i]=c.useState(""),l=()=>r.start({duration:5e3});return e.jsx(s,{value:t,onChange:i,onComplete:l})},$=()=>{const{control:r,formState:{errors:t},handleSubmit:i,watch:l}=xe(),f=h=>console.log("submit:",h);return console.log("watch:",l()),e.jsxs(he,{as:"form",onSubmit:i(f),children:[e.jsx(F,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:"Token",children:e.jsx(Ie,{name:"pinInput",control:r,render:({field:h})=>e.jsx(s,{...h}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(Se,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},K=()=>{const r={pinInput:"5"},{control:t,formState:{errors:i},handleSubmit:l,watch:f}=xe({defaultValues:r}),h=g=>console.log("submit:",g);return console.log("watch:",f()),e.jsxs(he,{as:"form",onSubmit:l(h),children:[e.jsx(F,{errorMessage:i.pinInput?.message,invalid:!!i.pinInput,label:"Token",children:e.jsx(Ie,{name:"pinInput",control:t,render:({field:g})=>e.jsx(s,{...g}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(Se,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant} disabled />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <PinInput.Root key={index} variant={variant}>
            <PinInput.Field disabled />
            <PinInput.Field disabled />
            <PinInput.Field disabled />
            <PinInput.Field disabled />
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
            <PinInput.Field readOnly />
            <PinInput.Field readOnly />
            <PinInput.Field readOnly />
            <PinInput.Field readOnly />
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
            <PinInput.Field invalid />
            <PinInput.Field invalid />
            <PinInput.Field invalid />
            <PinInput.Field invalid />
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
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
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
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...K.parameters?.docs?.source}}};const hn=["Basic","Items","Variant","Size","Type","DefaultValue","HandleComplete","OneTimePassword","MaskingValue","DisabledFocusManagement","Disabled","Readonly","Invalid","BorderColor","CustomFields","CustomPlaceholder","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{z as Basic,G as BorderColor,U as CustomControl,J as CustomFields,N as CustomPlaceholder,O as DefaultValue,H as Disabled,A as DisabledFocusManagement,T as HandleComplete,_ as Invalid,V as Items,E as MaskingValue,B as OneTimePassword,$ as ReactHookForm,K as ReactHookFormDefaultValue,L as Readonly,D as Size,q as Type,M as Variant,hn as __namedExportsOrder,fn as default};
