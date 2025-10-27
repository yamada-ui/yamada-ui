import{d as Ce,r as c,a as Re,h as w,bK as ye,g as ke,aJ as ze,j as e,m as we,C as Ve,bb as fe,V as xe,Q as he}from"./iframe-Cq3rcaMI.js";import{P as ge}from"./props-table-C-lxxN5V.js";import{u as Ie,C as Se}from"./index.esm-UFFg0WXH.js";import{F as S}from"./for-CHPKWv_w.js";import{i as d,I as Me}from"./input-2nMF8ce0.js";import{u as De}from"./index-CGtAgyPS.js";import{c as Oe}from"./index-Dz_UFi2x.js";import{u as be,F}from"./use-field-props-B0aPqHXg.js";import{G as qe}from"./group-Cc45Vgon.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./flex-hG4eu5He.js";import"./heading-vD3e3jk6.js";import"./use-input-border-DYKyVkkb.js";import"./index-hNMbzMH0.js";import"./use-breakpoint-B2hNbTgT.js";import"./use-breakpoint-value-4bNhmqEp.js";import"./use-color-mode-value-D8ycUMtp.js";const Te=Ce({base:{field:{...d.base,textAlign:"center"},root:{}},variants:{filled:{field:d.variants?.filled},flushed:{field:d.variants?.flushed},outline:{field:d.variants?.outline},plain:{field:d.variants?.plain}},sizes:{xs:{field:{boxSize:d.sizes?.xs.minH,fontSize:d.sizes?.xs.fontSize}},sm:{field:{boxSize:d.sizes?.sm.minH,fontSize:d.sizes?.sm.fontSize}},md:{field:{boxSize:d.sizes?.md.minH,fontSize:d.sizes?.md.fontSize}},lg:{field:{boxSize:d.sizes?.lg.minH,fontSize:d.sizes?.lg.fontSize}},xl:{field:{boxSize:d.sizes?.xl.minH,fontSize:d.sizes?.xl.fontSize}},"2xl":{field:{boxSize:d.sizes?.["2xl"].minH,fontSize:d.sizes?.["2xl"].fontSize}}},defaultProps:{size:"md",variant:"outline"}}),{DescendantsContext:Ee,useDescendant:Ae,useDescendants:Be}=Oe(),pe=r=>r?.split(""),me=(r,t)=>(t==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(r),He=(r={})=>{const t=c.useId(),{props:{id:i=t,type:l="number",autoFocus:m,defaultValue:x,disabled:g,manageFocus:h=!0,mask:b,otp:P=!1,placeholder:I="◯",readOnly:C,value:R,onChange:Pe,onComplete:y,...ee},ariaProps:ne,dataProps:re,eventProps:W}=be(r),u=Be(),[te,Q]=c.useState(!0),[se,oe]=c.useState(-1),[v,k]=De({defaultValue:pe(x)||[],value:pe(R),onChange:n=>Pe?.(n.join(""))}),ae=c.useCallback(n=>{if(!te||!h)return;const o=u.nextValue(n,!1);o&&requestAnimationFrame(()=>o.node.focus())},[u,te,h]),Z=c.useCallback((n,o)=>{const a=n==="next"?u.nextValue(o,!1):u.prevValue(o,!1);if(!a)return;const f=a.node.value.length;requestAnimationFrame(()=>{a.node.focus(),a.node.setSelectionRange(0,f)})},[u]),j=c.useCallback((n,o,a=!0)=>{let f=[...v];f[o]=n,k(f),f=f.filter(Boolean),n!==""&&f.length===u.count()?(y?.(f.join("")),u.value(o)?.node.blur()):a&&ae(o)},[v,k,u,y,ae]),ie=c.useCallback((n,o)=>{let a=o;return n?.length&&(n.startsWith(o.charAt(0))?a=o.charAt(1):n.startsWith(o.charAt(1))&&(a=o.charAt(0))),a},[]),le=c.useCallback(n=>({target:o})=>{const a=o.value,f=v[n],z=ie(f,a);if(z===""){j("",n);return}if(a.length>2){if(!me(a,l))return;const Y=a.split("").filter((Ne,Fe)=>Fe<u.count());k(Y),Y.length===u.count()&&(y?.(Y.join("")),u.value(n)?.node.blur())}else me(z,l)&&j(z,n),Q(!0)},[u,ie,y,j,k,l,v]),ue=c.useCallback(n=>o=>{h&&Re(o,{ArrowLeft:a=>{a.preventDefault(),Z("prev",n)},ArrowRight:a=>{a.preventDefault(),Z("next",n)},Backspace:a=>{if(a.target.value===""){const f=u.prevValue(n,!1);if(!f)return;j("",n-1,!1),f.node.focus(),Q(!0)}else Q(!1)}},{preventDefault:!1})},[u,Z,h,j]),de=c.useCallback(n=>()=>oe(n),[]),ce=c.useCallback(()=>oe(-1),[]);c.useEffect(()=>{if(!m)return;const n=u.firstValue();n&&requestAnimationFrame(()=>n.node.focus())},[m,u]);const ve=c.useCallback(n=>({role:"group",...ee,...n}),[ee]),je=c.useCallback(({index:n,...o})=>({...ne,...re,type:b?"password":l==="number"?"tel":"text",autoComplete:P?"one-time-code":"off",disabled:g,inputMode:l==="number"?"numeric":"text",placeholder:se===n&&!C&&!o.readOnly?"":I,readOnly:C,value:v[n]||"",...ye(o),id:`${i}${n?`-${n}`:""}`,onBlur:w(W.onBlur,o.onBlur,ce),onChange:w(o.onChange,le(n)),onFocus:w(W.onFocus,o.onFocus,de(n)),onKeyDown:w(o.onKeyDown,ue(n))}),[ne,re,W,b,l,g,C,i,P,se,I,v,ce,le,de,ue]);return{descendants:u,getInputProps:je,getRootProps:ve}},{ComponentContext:Le,useComponentContext:_e,withContext:Je,withProvider:Ge}=ke("pin-input",Te),s=Ge(({children:r,errorBorderColor:t,focusBorderColor:i,items:l=4,...m})=>{const{descendants:x,getInputProps:g,getRootProps:h}=He(m),b=c.useMemo(()=>{const I=ze(r);return I.length?I:Array.from({length:l},(C,R)=>e.jsx(p,{index:R},R))},[r,l]),P=c.useMemo(()=>({errorBorderColor:t,focusBorderColor:i,getInputProps:g}),[g,t,i]);return e.jsx(Ee,{value:x,children:e.jsx(Le,{value:P,children:e.jsx(qe,{...h(),children:b})})})},"root")(),p=Je(Me,"field")(void 0,({ref:r,index:t,...i})=>{const{errorBorderColor:l,focusBorderColor:m,getInputProps:x}=_e(),{register:g}=Ae(),{props:h,ariaProps:b,dataProps:P,eventProps:I}=be(i);return{...x({errorBorderColor:l,focusBorderColor:m,...b,...P,...I,...h,ref:we(g,r),index:t})}}),pn={component:s,title:"Components / PinInput"},V=()=>e.jsx(s,{}),M=()=>e.jsx(S,{each:[3,4,5,6],children:(r,t)=>e.jsx(s,{items:r},t)}),D=()=>e.jsx(ge,{variant:"stack",columns:["outline","filled","flushed"],rows:Ve,children:(r,t,i)=>e.jsx(s,{colorScheme:t,variant:r},i)}),O=()=>e.jsx(ge,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,t,i)=>e.jsx(s,{size:r,variant:t},i)}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{type:"alphanumeric"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:"1234"}),e.jsx(s,{defaultValue:"123"})]}),E=()=>{const{page:r}=fe();return e.jsx(s,{onComplete:()=>r.start({duration:5e3})})},A=()=>e.jsx(s,{otp:!0}),B=()=>e.jsx(s,{mask:!0}),H=()=>e.jsx(s,{manageFocus:!1}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,disabled:!0},t)}),e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{disabled:!0,index:0}),e.jsx(p,{disabled:!0,index:1}),e.jsx(p,{disabled:!0,index:2}),e.jsx(p,{disabled:!0,index:3})]},t)}),e.jsx(F,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",children:e.jsx(s,{})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,readOnly:!0},t)}),e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{index:0,readOnly:!0}),e.jsx(p,{index:1,readOnly:!0}),e.jsx(p,{index:2,readOnly:!0}),e.jsx(p,{index:3,readOnly:!0})]},t)}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",readOnly:!0,children:e.jsx(s,{})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,invalid:!0},t)}),e.jsx(S,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{index:0,invalid:!0}),e.jsx(p,{index:1,invalid:!0}),e.jsx(p,{index:2,invalid:!0}),e.jsx(p,{index:3,invalid:!0})]},t)}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,label:"Please one-time password",children:e.jsx(s,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{focusBorderColor:"green.500"}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0})]}),N=()=>e.jsxs(s,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1}),e.jsx(p,{index:2}),e.jsx(p,{index:3})]}),K=()=>e.jsx(s,{placeholder:"💩"}),U=()=>{const{page:r}=fe(),[t,i]=c.useState(""),l=()=>r.start({duration:5e3});return e.jsx(s,{value:t,onChange:i,onComplete:l})},$=()=>{const{control:r,formState:{errors:t},handleSubmit:i}=Ie(),l=m=>console.log("submit:",m);return e.jsxs(xe,{as:"form",onSubmit:i(l),children:[e.jsx(F,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:"Token",children:e.jsx(Se,{name:"pinInput",control:r,render:({field:m})=>e.jsx(s,{...m}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(he,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{const r={pinInput:"5"},{control:t,formState:{errors:i},handleSubmit:l}=Ie({defaultValues:r}),m=x=>console.log("submit:",x);return e.jsxs(xe,{as:"form",onSubmit:l(m),children:[e.jsx(F,{errorMessage:i.pinInput?.message,invalid:!!i.pinInput,label:"Token",children:e.jsx(Se,{name:"pinInput",control:t,render:({field:x})=>e.jsx(s,{...x}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(he,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>;
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PinInput.Root key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...G.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...N.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}};const mn=["Basic","Items","Variant","Size","Type","DefaultValue","HandleComplete","OneTimePassword","MaskingValue","DisabledFocusManagement","Disabled","ReadOnly","Invalid","BorderColor","CustomFields","CustomPlaceholder","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{V as Basic,G as BorderColor,U as CustomControl,N as CustomFields,K as CustomPlaceholder,T as DefaultValue,L as Disabled,H as DisabledFocusManagement,E as HandleComplete,J as Invalid,M as Items,B as MaskingValue,A as OneTimePassword,$ as ReactHookForm,X as ReactHookFormDefaultValue,_ as ReadOnly,O as Size,q as Type,D as Variant,mn as __namedExportsOrder,pn as default};
