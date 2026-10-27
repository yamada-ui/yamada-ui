import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{It as n,Pt as r,bt as i,ft as a,i as o,jn as s,lt as c,mt as ee,o as l,st as u,xt as d,zn as te}from"./props-sAZv67b_.js";import{t as f}from"./jsx-runtime-BdxMnOeJ.js";import{d as ne,i as p,n as re,r as ie}from"./create-component-DQMvd0DD.js";import{r as ae,t as m}from"./use-controllable-state-CXBwLLzy.js";import{n as oe,t as se}from"./use-descendants-wZ058pMO.js";import{r as ce,t as h}from"./button-Cv19gcjc.js";import{n as g,r as _}from"./loading-provider-Dr3bvFMK.js";import{c as v,r as le,s as y,t as b}from"./use-field-props-z5XETqFY.js";import{n as x,t as S}from"./group-Cv72QhbO.js";import{c as ue,l as C,r as w,t as de}from"./input-ats-LDD2.js";import{n as fe,t as T}from"./for-qrDiH4Lk.js";import{n as pe,t as E}from"./v-stack-C4vQZUGD.js";import{n as me,t as he}from"./props-table-4oG1zn7C.js";import{n as ge,r as _e,t as ve}from"./index.esm-BFTTYzQs.js";var ye;function be(){return(be=e((()=>{ne(),ue(),ye=p({base:{field:{...C.base,textAlign:`center`},root:{}},variants:{filled:{field:C.variants?.filled},flushed:{field:C.variants?.flushed},outline:{field:C.variants?.outline},plain:{field:C.variants?.plain}},sizes:{xs:{field:{boxSize:C.sizes?.xs.minH,fontSize:C.sizes?.xs.fontSize}},sm:{field:{boxSize:C.sizes?.sm.minH,fontSize:C.sizes?.sm.fontSize}},md:{field:{boxSize:C.sizes?.md.minH,fontSize:C.sizes?.md.fontSize}},lg:{field:{boxSize:C.sizes?.lg.minH,fontSize:C.sizes?.lg.fontSize}},xl:{field:{boxSize:C.sizes?.xl.minH,fontSize:C.sizes?.xl.fontSize}},"2xl":{field:{boxSize:C.sizes?.[`2xl`].minH,fontSize:C.sizes?.[`2xl`].fontSize}}},defaultProps:{size:`md`,variant:`outline`}})})))()}var D,xe,Se,Ce,O,k,we;function Te(){return(Te=e((()=>{D=t(),o(),m(),oe(),n(),a(),b(),{DescendantsContext:xe,useDescendant:Se,useDescendants:Ce}=se(),O=e=>e?.split(``),k=(e,t)=>(t===`alphanumeric`?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(e),we=(e={})=>{let t=(0,D.useId)(),{context:{labelId:n}={},props:{id:i=t,type:a=`number`,autoFocus:o,defaultValue:s,disabled:c,items:u=4,manageFocus:d=!0,mask:te,otp:f=!1,placeholder:ne=`◯`,readOnly:p,value:re,onChange:ie,onComplete:m,...oe},ariaProps:se,dataProps:ce,eventProps:h}=le(e),g=Ce(),[_,v]=(0,D.useState)(!0),[y,b]=(0,D.useState)(-1),[x,S]=ae({defaultValue:O(s)||[],value:O(re),onChange:e=>ie?.(e.join(``))}),ue=(0,D.useCallback)(e=>{if(!_||!d)return;let t=g.nextValue(e,!1);t&&requestAnimationFrame(()=>t.node.focus())},[g,_,d]),C=(0,D.useCallback)((e,t)=>{let n=e===`next`?g.nextValue(t,!1):g.prevValue(t,!1);if(!n)return;let r=n.node.value.length;requestAnimationFrame(()=>{n.node.focus(),n.node.setSelectionRange(0,r)})},[g]),w=(0,D.useCallback)((e,t,n=!0)=>{let r=[...x];r[t]=e,S(r),r=r.filter(Boolean),e!==``&&r.length===g.count()?(m?.(r.join(``)),g.value(t)?.node.blur()):n&&ue(t)},[x,S,g,m,ue]),de=(0,D.useCallback)((e,t)=>{let n=t;return e?.length&&(e.startsWith(t.charAt(0))?n=t.charAt(1):e.startsWith(t.charAt(1))&&(n=t.charAt(0))),n},[]),fe=(0,D.useCallback)(e=>({target:t})=>{let n=t.value,r=x[e],i=de(r,n);if(i===``)w(``,e);else if(n.length>2){if(!k(n,a))return;let t=n.split(``).filter((e,t)=>t<g.count());S(t),t.length===g.count()&&(m?.(t.join(``)),g.value(e)?.node.blur())}else k(i,a)&&w(i,e),v(!0)},[g,de,m,w,S,a,x]),T=(0,D.useCallback)(e=>t=>{d&&ee(t,{ArrowLeft:t=>{t.preventDefault(),C(`prev`,e)},ArrowRight:t=>{t.preventDefault(),C(`next`,e)},Backspace:t=>{if(t.target.value===``){let t=g.prevValue(e,!1);if(!t)return;w(``,e-1,!1),t.node.focus(),v(!0)}else v(!1)}},{preventDefault:!1})},[g,C,d,w]),pe=(0,D.useCallback)(e=>()=>b(e),[]),E=(0,D.useCallback)(()=>b(-1),[]);(0,D.useEffect)(()=>{if(!o)return;let e=g.firstValue();e&&requestAnimationFrame(()=>e.node.focus())},[o,g]);let me=(0,D.useCallback)(e=>l({role:`group`},oe,e)(),[oe]);return{descendants:g,items:u,getInputProps:(0,D.useCallback)(({index:e,...t})=>l({...se,...ce,...h,type:te?`password`:a===`number`?`tel`:`text`,"aria-labelledby":n,autoComplete:f?`one-time-code`:`off`,disabled:c,inputMode:a===`number`?`numeric`:`text`,placeholder:y===e&&!p&&!t.readOnly?``:ne,readOnly:p,value:x[e]||``},r(t),{id:`${i}${e?`-${e}`:``}`,onBlur:E,onChange:fe(e),onFocus:pe(e),onKeyDown:T(e)})(),[se,ce,h,te,a,n,f,c,y,p,ne,x,i,E,fe,pe,T]),getRootProps:me}}})))()}var A,j,Ee,De,Oe,ke,Ae,je,M,N;function Me(){return(Me=e((()=>{A=t(),ie(),d(),u(),b(),x(),w(),be(),Te(),j=f(),{ComponentContext:Ee,PropsContext:De,useComponentContext:Oe,usePropsContext:ke,withContext:Ae,withProvider:je}=re(`pin-input`,ye),M=je(({children:e,errorBorderColor:t,focusBorderColor:n,...r})=>{let{descendants:a,items:o,getInputProps:s,getRootProps:c}=we(r),ee=(0,A.useMemo)(()=>{let t=i(e);return t.length?t:Array.from({length:o},(e,t)=>(0,j.jsx)(N,{index:t},t))},[e,o]),l=(0,A.useMemo)(()=>({errorBorderColor:t,focusBorderColor:n,getInputProps:s}),[s,t,n]);return(0,j.jsx)(xe,{value:a,children:(0,j.jsx)(Ee,{value:l,children:(0,j.jsx)(S,{...c(),children:ee})})})},`root`)(),N=Ae(de,`field`)(void 0,({ref:e,index:t,...n})=>{let{errorBorderColor:r,focusBorderColor:i,getInputProps:a}=Oe(),{register:o}=Se(),{props:s,ariaProps:ee,dataProps:l,eventProps:u}=le(n);return{...a({errorBorderColor:r,focusBorderColor:i,...ee,...l,...u,...s,ref:c(o,e),index:t})}})})))()}var Ne,P,Pe,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Fe;function Ie(){return(Ie=e((()=>{Ne=t(),ge(),me(),te(),ce(),v(),fe(),g(),pe(),Me(),P=f(),Pe={component:M,title:`Components / PinInput`},F=()=>(0,P.jsx)(M,{}),I=()=>(0,P.jsx)(T,{each:[3,4,5,6],children:(e,t)=>(0,P.jsx)(M,{items:e},t)}),L=()=>(0,P.jsx)(he,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:s,children:(e,t,n)=>(0,P.jsx)(M,{colorScheme:t,variant:e},n)}),R=()=>(0,P.jsx)(he,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,P.jsx)(M,{size:e,variant:t},n)}),z=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{type:`alphanumeric`})]}),B=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{defaultValue:`1234`}),(0,P.jsx)(M,{defaultValue:`123`})]}),V=()=>{let{page:e}=_();return(0,P.jsx)(M,{onComplete:()=>e.start({duration:5e3})})},H=()=>(0,P.jsx)(M,{otp:!0}),U=()=>(0,P.jsx)(M,{mask:!0}),W=()=>(0,P.jsx)(M,{manageFocus:!1}),G=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,disabled:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{disabled:!0,index:0}),(0,P.jsx)(N,{disabled:!0,index:1}),(0,P.jsx)(N,{disabled:!0,index:2}),(0,P.jsx)(N,{disabled:!0,index:3})]},t)}),(0,P.jsx)(y,{disabled:!0,errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),K=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,readOnly:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,readOnly:!0}),(0,P.jsx)(N,{index:1,readOnly:!0}),(0,P.jsx)(N,{index:2,readOnly:!0}),(0,P.jsx)(N,{index:3,readOnly:!0})]},t)}),(0,P.jsx)(y,{errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,readOnly:!0,children:(0,P.jsx)(M,{})})]}),q=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,invalid:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,invalid:!0}),(0,P.jsx)(N,{index:1,invalid:!0}),(0,P.jsx)(N,{index:2,invalid:!0}),(0,P.jsx)(N,{index:3,invalid:!0})]},t)}),(0,P.jsx)(y,{errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,invalid:!0,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),J=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{focusBorderColor:`green.500`}),(0,P.jsx)(M,{errorBorderColor:`orange.500`,invalid:!0})]}),Y=()=>(0,P.jsxs)(M,{children:[(0,P.jsx)(N,{index:0}),(0,P.jsx)(N,{index:1}),(0,P.jsx)(N,{index:2}),(0,P.jsx)(N,{index:3})]}),X=()=>(0,P.jsx)(M,{placeholder:`💩`}),Z=()=>{let{page:e}=_(),[t,n]=(0,Ne.useState)(``);return(0,P.jsx)(M,{value:t,onChange:n,onComplete:()=>e.start({duration:5e3})})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=_e();return(0,P.jsxs)(E,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(y,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(ve,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(h,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=_e({defaultValues:{pinInput:`5`}});return(0,P.jsxs)(E,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(y,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(ve,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(h,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Fe=[`Basic`,`Items`,`Variant`,`Size`,`Type`,`DefaultValue`,`HandleComplete`,`OneTimePassword`,`MaskingValue`,`DisabledFocusManagement`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomFields`,`CustomPlaceholder`,`CustomControl`,`ReactHookForm`,`ReactHookFormDefaultValue`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PinInput.Root key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Ie();export{F as Basic,J as BorderColor,Z as CustomControl,Y as CustomFields,X as CustomPlaceholder,B as DefaultValue,G as Disabled,W as DisabledFocusManagement,V as HandleComplete,q as Invalid,I as Items,U as MaskingValue,H as OneTimePassword,Q as ReactHookForm,$ as ReactHookFormDefaultValue,K as ReadOnly,R as Size,z as Type,L as Variant,Fe as __namedExportsOrder,Pe as default};