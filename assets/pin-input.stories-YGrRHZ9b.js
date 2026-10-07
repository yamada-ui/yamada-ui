import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{At as n,Cn as r,Dn as i,Fn as a,Mt as o,Sn as s,ct as ee,dt as c,fn as te,i as l,o as ne,ot as u,pn as re,pt as ie,vt as d,yt as ae}from"./props-CCQavtXy.js";import{t as f}from"./jsx-runtime-BdxMnOeJ.js";import{d as oe,i as se,n as p,r as ce}from"./create-component-CNpeiJ0q.js";import{r as le,t as m}from"./use-controllable-state-mWduWyKf.js";import{n as ue,t as h}from"./use-descendants-CDQZwHfn.js";import{r as g,t as _}from"./button-BCcG2Qpy.js";import{n as v,r as y}from"./loading-provider-V9m-AQTo.js";import{c as de,r as fe,s as b,t as x}from"./use-field-props-BwIcoUP5.js";import{n as pe,t as S}from"./group-DV5WxYkI.js";import{c as C,l as w,r as me,t as he}from"./input-D740622u.js";import{n as T,t as E}from"./for-vlneEBu7.js";import{n as ge,t as _e}from"./v-stack-DFqT3QqZ.js";import{n as ve,t as ye}from"./props-table-CbpR6Bxo.js";import{n as be,r as xe,t as Se}from"./index.esm-DO-98hSD.js";var Ce;function we(){return(we=e((()=>{oe(),C(),Ce=se({base:{field:{...w.base,textAlign:`center`},root:{}},variants:{filled:{field:w.variants?.filled},flushed:{field:w.variants?.flushed},outline:{field:w.variants?.outline},plain:{field:w.variants?.plain}},sizes:{xs:{field:{boxSize:w.sizes?.xs.minH,fontSize:w.sizes?.xs.fontSize}},sm:{field:{boxSize:w.sizes?.sm.minH,fontSize:w.sizes?.sm.fontSize}},md:{field:{boxSize:w.sizes?.md.minH,fontSize:w.sizes?.md.fontSize}},lg:{field:{boxSize:w.sizes?.lg.minH,fontSize:w.sizes?.lg.fontSize}},xl:{field:{boxSize:w.sizes?.xl.minH,fontSize:w.sizes?.xl.fontSize}},"2xl":{field:{boxSize:w.sizes?.[`2xl`].minH,fontSize:w.sizes?.[`2xl`].fontSize}}},defaultProps:{size:`md`,variant:`outline`}})})))()}var D,Te,Ee,De,O,k,Oe;function ke(){return(ke=e((()=>{D=t(),l(),m(),ue(),re(),o(),r(),c(),x(),{DescendantsContext:Te,useDescendant:Ee,useDescendants:De}=h(),O=e=>e?.split(``),k=(e,t)=>(t===`alphanumeric`?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(e),Oe=(e={})=>{let t=(0,D.useId)(),{context:{labelId:r}={},props:{id:i=t,type:a=`number`,autoFocus:o,defaultValue:ee,disabled:c,items:l=4,manageFocus:u=!0,mask:re,otp:d=!1,placeholder:ae=`◯`,readOnly:f,value:oe,onChange:se,onComplete:p,...ce},ariaProps:m,dataProps:ue,eventProps:h}=fe(e),g=De(),[_,v]=(0,D.useState)(!0),[y,de]=(0,D.useState)(-1),[b,x]=le({defaultValue:O(ee)||[],value:O(oe),onChange:e=>se?.(e.join(``))}),pe=(0,D.useCallback)(e=>{if(!_||!u)return;let t=g.nextValue(e,!1);t&&requestAnimationFrame(()=>t.node.focus())},[g,_,u]),S=(0,D.useCallback)((e,t)=>{let n=e===`next`?g.nextValue(t,!1):g.prevValue(t,!1);if(!n)return;let r=n.node.value.length;requestAnimationFrame(()=>{n.node.focus(),n.node.setSelectionRange(0,r)})},[g]),C=(0,D.useCallback)((e,t,n=!0)=>{let r=[...b];r[t]=e,x(r),r=r.filter(Boolean),e!==``&&r.length===g.count()?(p?.(r.join(``)),g.value(t)?.node.blur()):n&&pe(t)},[b,x,g,p,pe]),w=(0,D.useCallback)((e,t)=>{let n=t;return e?.length&&(e.startsWith(t.charAt(0))?n=t.charAt(1):e.startsWith(t.charAt(1))&&(n=t.charAt(0))),n},[]),me=(0,D.useCallback)(e=>({target:t})=>{let n=t.value,r=b[e],i=w(r,n);if(i===``){C(``,e);return}if(n.length>2){if(!k(n,a))return;let t=n.split(``).filter((e,t)=>t<g.count());x(t),t.length===g.count()&&(p?.(t.join(``)),g.value(e)?.node.blur())}else k(i,a)&&C(i,e),v(!0)},[g,w,p,C,x,a,b]),he=(0,D.useCallback)(e=>t=>{u&&ie(t,{ArrowLeft:t=>{t.preventDefault(),S(`prev`,e)},ArrowRight:t=>{t.preventDefault(),S(`next`,e)},Backspace:t=>{if(t.target.value===``){let t=g.prevValue(e,!1);if(!t)return;C(``,e-1,!1),t.node.focus(),v(!0)}else v(!1)}},{preventDefault:!1})},[g,S,u,C]),T=(0,D.useCallback)(e=>()=>de(e),[]),E=(0,D.useCallback)(()=>de(-1),[]);(0,D.useEffect)(()=>{if(!o)return;let e=g.firstValue();e&&requestAnimationFrame(()=>e.node.focus())},[o,g]);let ge=(0,D.useCallback)(e=>ne({role:`group`},ce,e)(),[ce]);return{descendants:g,items:l,getInputProps:(0,D.useCallback)(({"aria-labelledby":e,index:t,...o})=>({...m,...ue,type:re?`password`:a===`number`?`tel`:`text`,"aria-labelledby":te(e,r),autoComplete:d?`one-time-code`:`off`,disabled:c,inputMode:a===`number`?`numeric`:`text`,placeholder:y===t&&!f&&!o.readOnly?``:ae,readOnly:f,value:b[t]||``,...n(o),id:`${i}${t?`-${t}`:``}`,onBlur:s(h.onBlur,o.onBlur,E),onChange:s(o.onChange,me(t)),onFocus:s(h.onFocus,o.onFocus,T(t)),onKeyDown:s(o.onKeyDown,he(t))}),[m,ue,h,re,a,r,d,c,y,f,ae,b,i,E,me,T,he]),getRootProps:ge}}})))()}var A,j,Ae,je,Me,Ne,Pe,Fe,M,N;function Ie(){return(Ie=e((()=>{A=t(),ce(),ae(),u(),x(),pe(),me(),we(),ke(),j=f(),{ComponentContext:Ae,PropsContext:je,useComponentContext:Me,usePropsContext:Ne,withContext:Pe,withProvider:Fe}=p(`pin-input`,Ce),M=Fe(({children:e,errorBorderColor:t,focusBorderColor:n,...r})=>{let{descendants:i,items:a,getInputProps:o,getRootProps:s}=Oe(r),ee=(0,A.useMemo)(()=>{let t=d(e);return t.length?t:Array.from({length:a},(e,t)=>(0,j.jsx)(N,{index:t},t))},[e,a]),c=(0,A.useMemo)(()=>({errorBorderColor:t,focusBorderColor:n,getInputProps:o}),[o,t,n]);return(0,j.jsx)(Te,{value:i,children:(0,j.jsx)(Ae,{value:c,children:(0,j.jsx)(S,{...s(),children:ee})})})},`root`)(),N=Pe(he,`field`)(void 0,({ref:e,index:t,...n})=>{let{errorBorderColor:r,focusBorderColor:i,getInputProps:a}=Me(),{register:o}=Ee(),{props:s,ariaProps:c,dataProps:te,eventProps:l}=fe(n);return{...a({errorBorderColor:r,focusBorderColor:i,...c,...te,...l,...s,ref:ee(o,e),index:t})}})})))()}var Le,P,Re,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ze;function Be(){return(Be=e((()=>{Le=t(),be(),ve(),a(),g(),de(),T(),v(),ge(),Ie(),P=f(),Re={component:M,title:`Components / PinInput`},F=()=>(0,P.jsx)(M,{}),I=()=>(0,P.jsx)(E,{each:[3,4,5,6],children:(e,t)=>(0,P.jsx)(M,{items:e},t)}),L=()=>(0,P.jsx)(ye,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:i,children:(e,t,n)=>(0,P.jsx)(M,{colorScheme:t,variant:e},n)}),R=()=>(0,P.jsx)(ye,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,P.jsx)(M,{size:e,variant:t},n)}),z=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{type:`alphanumeric`})]}),B=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{defaultValue:`1234`}),(0,P.jsx)(M,{defaultValue:`123`})]}),V=()=>{let{page:e}=y();return(0,P.jsx)(M,{onComplete:()=>e.start({duration:5e3})})},H=()=>(0,P.jsx)(M,{otp:!0}),U=()=>(0,P.jsx)(M,{mask:!0}),W=()=>(0,P.jsx)(M,{manageFocus:!1}),G=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,disabled:!0},t)}),(0,P.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{disabled:!0,index:0}),(0,P.jsx)(N,{disabled:!0,index:1}),(0,P.jsx)(N,{disabled:!0,index:2}),(0,P.jsx)(N,{disabled:!0,index:3})]},t)}),(0,P.jsx)(b,{disabled:!0,errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),K=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,readOnly:!0},t)}),(0,P.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,readOnly:!0}),(0,P.jsx)(N,{index:1,readOnly:!0}),(0,P.jsx)(N,{index:2,readOnly:!0}),(0,P.jsx)(N,{index:3,readOnly:!0})]},t)}),(0,P.jsx)(b,{errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,readOnly:!0,children:(0,P.jsx)(M,{})})]}),q=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,invalid:!0},t)}),(0,P.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,invalid:!0}),(0,P.jsx)(N,{index:1,invalid:!0}),(0,P.jsx)(N,{index:2,invalid:!0}),(0,P.jsx)(N,{index:3,invalid:!0})]},t)}),(0,P.jsx)(b,{errorMessage:`one-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,invalid:!0,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),J=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{focusBorderColor:`green.500`}),(0,P.jsx)(M,{errorBorderColor:`orange.500`,invalid:!0})]}),Y=()=>(0,P.jsxs)(M,{children:[(0,P.jsx)(N,{index:0}),(0,P.jsx)(N,{index:1}),(0,P.jsx)(N,{index:2}),(0,P.jsx)(N,{index:3})]}),X=()=>(0,P.jsx)(M,{placeholder:`💩`}),Z=()=>{let{page:e}=y(),[t,n]=(0,Le.useState)(``);return(0,P.jsx)(M,{value:t,onChange:n,onComplete:()=>e.start({duration:5e3})})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=xe();return(0,P.jsxs)(_e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(b,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(Se,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(_,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=xe({defaultValues:{pinInput:`5`}});return(0,P.jsxs)(_e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(b,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(Se,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(_,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},ze=[`Basic`,`Items`,`Variant`,`Size`,`Type`,`DefaultValue`,`HandleComplete`,`OneTimePassword`,`MaskingValue`,`DisabledFocusManagement`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomFields`,`CustomPlaceholder`,`CustomControl`,`ReactHookForm`,`ReactHookFormDefaultValue`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Be();export{F as Basic,J as BorderColor,Z as CustomControl,Y as CustomFields,X as CustomPlaceholder,B as DefaultValue,G as Disabled,W as DisabledFocusManagement,V as HandleComplete,q as Invalid,I as Items,U as MaskingValue,H as OneTimePassword,Q as ReactHookForm,$ as ReactHookFormDefaultValue,K as ReadOnly,R as Size,z as Type,L as Variant,ze as __namedExportsOrder,Re as default};