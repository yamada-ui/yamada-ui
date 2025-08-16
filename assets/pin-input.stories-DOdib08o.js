import{d as Ce,r as c,B as Re,h as z,bn as ye,f as ke,$ as we,j as e,m as ze,C as Ve,aZ as fe,V as xe}from"./iframe-DkaXVr_9.js";import{P as he}from"./props-table-ByaJ1liL.js";import{u as ge,C as Se}from"./index.esm-DDaL27Ye.js";import{F as I}from"./for-DxIEhtdT.js";import{B as Ie}from"./button-RXS8KHkm.js";import{i as d,b as Me}from"./input-CtpCn4RP.js";import{u as De}from"./index-BAHhqMeb.js";import{c as qe}from"./index-B3ezF8lC.js";import{u as Pe,F}from"./use-field-props-BZmj12NB.js";import{G as Be}from"./group-QrAqTYqx.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-EMuntHHW.js";import"./grid-item-RkuPzjjc.js";import"./flex-DcE13gV0.js";import"./heading-CmJx7P9m.js";import"./use-ripple-Conhq2CH.js";import"./rings-Dawgqh-Z.js";import"./use-input-border-NRtK0GoI.js";import"./index-3YgWOY-Y.js";import"./use-breakpoint-BTniZXuw.js";import"./use-breakpoint-value-CouZTxc7.js";import"./use-color-mode-value-x7SRIQlN.js";const Oe=Ce({base:{field:{...d.base,textAlign:"center"},root:{}},variants:{filled:{field:d.variants?.filled},flushed:{field:d.variants?.flushed},outline:{field:d.variants?.outline},plain:{field:d.variants?.plain}},sizes:{xs:{field:{boxSize:d.sizes?.xs.minH,fontSize:d.sizes?.xs.fontSize}},sm:{field:{boxSize:d.sizes?.sm.minH,fontSize:d.sizes?.sm.fontSize}},md:{field:{boxSize:d.sizes?.md.minH,fontSize:d.sizes?.md.fontSize}},lg:{field:{boxSize:d.sizes?.lg.minH,fontSize:d.sizes?.lg.fontSize}},xl:{field:{boxSize:d.sizes?.xl.minH,fontSize:d.sizes?.xl.fontSize}},"2xl":{field:{boxSize:d.sizes?.["2xl"].minH,fontSize:d.sizes?.["2xl"].fontSize}}},defaultProps:{size:"md",variant:"outline"}}),{DescendantsContext:Te,useDescendant:Ee,useDescendants:Ae}=qe(),pe=r=>r?.split(""),me=(r,t)=>(t==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(r),He=(r={})=>{const t=c.useId(),{props:{id:i=t,type:l="number",autoFocus:f,defaultValue:x,disabled:h,manageFocus:g=!0,mask:P,otp:b=!1,placeholder:S="○",readOnly:C,value:R,onChange:be,onComplete:y,...ee},ariaProps:ne,dataProps:re,eventProps:W}=Pe(r),u=Ae(),[te,Z]=c.useState(!0),[se,oe]=c.useState(-1),[v,k]=De({defaultValue:pe(x)||[],value:pe(R),onChange:n=>be?.(n.join(""))}),ae=c.useCallback(n=>{if(!te||!g)return;const o=u.nextValue(n,!1);o&&requestAnimationFrame(()=>o.node.focus())},[u,te,g]),Q=c.useCallback((n,o)=>{const a=n==="next"?u.nextValue(o,!1):u.prevValue(o,!1);if(!a)return;const m=a.node.value.length;requestAnimationFrame(()=>{a.node.focus(),a.node.setSelectionRange(0,m)})},[u]),j=c.useCallback((n,o,a=!0)=>{let m=[...v];m[o]=n,k(m),m=m.filter(Boolean),n!==""&&m.length===u.count()?(y?.(m.join("")),u.value(o)?.node.blur()):a&&ae(o)},[v,k,u,y,ae]),ie=c.useCallback((n,o)=>{let a=o;return n?.length&&(n.startsWith(o.charAt(0))?a=o.charAt(1):n.startsWith(o.charAt(1))&&(a=o.charAt(0))),a},[]),le=c.useCallback(n=>({target:o})=>{const a=o.value,m=v[n],w=ie(m,a);if(w===""){j("",n);return}if(a.length>2){if(!me(a,l))return;const Y=a.split("").filter((Ne,Fe)=>Fe<u.count());k(Y),Y.length===u.count()&&(y?.(Y.join("")),u.value(n)?.node.blur())}else me(w,l)&&j(w,n),Z(!0)},[u,ie,y,j,k,l,v]),ue=c.useCallback(n=>o=>{g&&Re(o,{ArrowLeft:a=>{a.preventDefault(),Q("prev",n)},ArrowRight:a=>{a.preventDefault(),Q("next",n)},Backspace:a=>{if(a.target.value===""){const m=u.prevValue(n,!1);if(!m)return;j("",n-1,!1),m.node.focus(),Z(!0)}else Z(!1)}},{preventDefault:!1})},[u,Q,g,j]),de=c.useCallback(n=>()=>oe(n),[]),ce=c.useCallback(()=>oe(-1),[]);c.useEffect(()=>{if(!f)return;const n=u.firstValue();n&&requestAnimationFrame(()=>n.node.focus())},[f,u]);const ve=c.useCallback(n=>({role:"group",...ee,...n}),[ee]),je=c.useCallback(({index:n,...o})=>({...ne,...re,type:P?"password":l==="number"?"tel":"text",autoComplete:b?"one-time-code":"off",disabled:h,inputMode:l==="number"?"numeric":"text",placeholder:se===n&&!C&&!o.readOnly?"":S,readOnly:C,value:v[n]||"",...ye(o),id:`${i}${n?`-${n}`:""}`,onBlur:z(W.onBlur,o.onBlur,ce),onChange:z(o.onChange,le(n)),onFocus:z(W.onFocus,o.onFocus,de(n)),onKeyDown:z(o.onKeyDown,ue(n))}),[ne,re,W,P,l,h,C,i,b,se,S,v,ce,le,de,ue]);return{descendants:u,getInputProps:je,getRootProps:ve}},{ComponentContext:Le,useComponentContext:_e,withContext:Ge,withProvider:Je}=ke("pin-input",Oe),s=Je(({children:r,errorBorderColor:t,focusBorderColor:i,items:l=4,...f})=>{const{descendants:x,getInputProps:h,getRootProps:g}=He(f),P=c.useMemo(()=>{const S=we(r);return S.length?S:Array.from({length:l},(C,R)=>e.jsx(p,{index:R},R))},[r,l]),b=c.useMemo(()=>({errorBorderColor:t,focusBorderColor:i,getInputProps:h}),[h,t,i]);return e.jsx(Te,{value:x,children:e.jsx(Le,{value:b,children:e.jsx(Be,{...g(),children:P})})})},"root")(),p=Ge(Me,"field")(void 0,({ref:r,index:t,...i})=>{const{errorBorderColor:l,focusBorderColor:f,getInputProps:x}=_e(),{register:h}=Ee(),{props:g,ariaProps:P,dataProps:b,eventProps:S}=Pe(i);return{...x({errorBorderColor:l,focusBorderColor:f,...P,...b,...S,...g,ref:ze(h,r),index:t})}}),xn={component:s,title:"Components / PinInput"},V=()=>e.jsx(s,{}),M=()=>e.jsx(I,{each:[3,4,5,6],children:(r,t)=>e.jsx(s,{items:r},t)}),D=()=>e.jsx(he,{variant:"stack",columns:["outline","filled","flushed"],rows:Ve,children:(r,t,i)=>e.jsx(s,{colorScheme:t,variant:r},i)}),q=()=>e.jsx(he,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,t,i)=>e.jsx(s,{size:r,variant:t},i)}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{type:"alphanumeric"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:"1234"}),e.jsx(s,{defaultValue:"123"})]}),T=()=>{const{page:r}=fe();return e.jsx(s,{onComplete:()=>r.start({duration:5e3})})},E=()=>e.jsx(s,{otp:!0}),A=()=>e.jsx(s,{mask:!0}),H=()=>e.jsx(s,{manageFocus:!1}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,disabled:!0},t)}),e.jsx(I,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{disabled:!0,index:0}),e.jsx(p,{disabled:!0,index:1}),e.jsx(p,{disabled:!0,index:2}),e.jsx(p,{disabled:!0,index:3})]},t)}),e.jsx(F,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",children:e.jsx(s,{})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,readOnly:!0},t)}),e.jsx(I,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{index:0,readOnly:!0}),e.jsx(p,{index:1,readOnly:!0}),e.jsx(p,{index:2,readOnly:!0}),e.jsx(p,{index:3,readOnly:!0})]},t)}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",readOnly:!0,children:e.jsx(s,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,invalid:!0},t)}),e.jsx(I,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{index:0,invalid:!0}),e.jsx(p,{index:1,invalid:!0}),e.jsx(p,{index:2,invalid:!0}),e.jsx(p,{index:3,invalid:!0})]},t)}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,label:"Please one-time password",children:e.jsx(s,{})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{focusBorderColor:"green.500"}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0})]}),N=()=>e.jsxs(s,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1}),e.jsx(p,{index:2}),e.jsx(p,{index:3})]}),$=()=>e.jsx(s,{placeholder:"💩"}),U=()=>{const{page:r}=fe(),[t,i]=c.useState(""),l=()=>r.start({duration:5e3});return e.jsx(s,{value:t,onChange:i,onComplete:l})},K=()=>{const{control:r,formState:{errors:t},handleSubmit:i,watch:l}=ge(),f=x=>console.log("submit:",x);return console.log("watch:",l()),e.jsxs(xe,{as:"form",onSubmit:i(f),children:[e.jsx(F,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:"Token",children:e.jsx(Se,{name:"pinInput",control:r,render:({field:x})=>e.jsx(s,{...x}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{const r={pinInput:"5"},{control:t,formState:{errors:i},handleSubmit:l,watch:f}=ge({defaultValues:r}),x=h=>console.log("submit:",h);return console.log("watch:",f()),e.jsxs(xe,{as:"form",onSubmit:l(x),children:[e.jsx(F,{errorMessage:i.pinInput?.message,invalid:!!i.pinInput,label:"Token",children:e.jsx(Se,{name:"pinInput",control:t,render:({field:h})=>e.jsx(s,{...h}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...J.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...$.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />;
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}};const hn=["Basic","Items","Variant","Size","Type","DefaultValue","HandleComplete","OneTimePassword","MaskingValue","DisabledFocusManagement","Disabled","Readonly","Invalid","BorderColor","CustomFields","CustomPlaceholder","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{V as Basic,J as BorderColor,U as CustomControl,N as CustomFields,$ as CustomPlaceholder,O as DefaultValue,L as Disabled,H as DisabledFocusManagement,T as HandleComplete,G as Invalid,M as Items,A as MaskingValue,E as OneTimePassword,K as ReactHookForm,X as ReactHookFormDefaultValue,_ as Readonly,q as Size,B as Type,D as Variant,hn as __namedExportsOrder,xn as default};
