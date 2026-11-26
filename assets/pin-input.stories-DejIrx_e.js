import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{It as n,Nt as r,bt as i,ft as a,i as o,jn as s,lt as c,o as l,pt as ee,st as u,yt as d,zn as te}from"./props-DZ_NCL29.js";import{a as ne,o as re}from"./event-Dwtkrk6m.js";import{t as f}from"./jsx-runtime-BB9-612F.js";import{d as p,i as ie,n as ae,r as m}from"./create-component-Ct2AiAAx.js";import{r as oe,t as h}from"./use-controllable-state-ChQCKZfr.js";import{n as g,t as se}from"./use-descendants-DZFifY0_.js";import{r as ce,t as _}from"./button-BfYhzfkR.js";import{n as le,r as v}from"./loading-provider-GVmA0e__.js";import{c as ue,r as de,s as y,t as b}from"./use-field-props-CRSAqPOE.js";import{n as x,t as S}from"./group-Ct7LVpMl.js";import{c as C,l as w,r as fe,t as pe}from"./input-BecwRudO.js";import{n as me,t as T}from"./for-COoaBOxp.js";import{n as E,t as he}from"./v-stack-zknlTZhK.js";import{n as ge,t as _e}from"./props-table-CU-k6wL6.js";import{n as ve,r as ye,t as be}from"./index.esm-xmO_zH4i.js";var xe;function Se(){return(Se=e((()=>{p(),C(),xe=ie({base:{field:{...w.base,textAlign:`center`},root:{}},variants:{filled:{field:w.variants?.filled},flushed:{field:w.variants?.flushed},outline:{field:w.variants?.outline},plain:{field:w.variants?.plain}},sizes:{xs:{field:{boxSize:w.sizes?.xs.minH,fontSize:w.sizes?.xs.fontSize}},sm:{field:{boxSize:w.sizes?.sm.minH,fontSize:w.sizes?.sm.fontSize}},md:{field:{boxSize:w.sizes?.md.minH,fontSize:w.sizes?.md.fontSize}},lg:{field:{boxSize:w.sizes?.lg.minH,fontSize:w.sizes?.lg.fontSize}},xl:{field:{boxSize:w.sizes?.xl.minH,fontSize:w.sizes?.xl.fontSize}},"2xl":{field:{boxSize:w.sizes?.[`2xl`].minH,fontSize:w.sizes?.[`2xl`].fontSize}}},defaultProps:{size:`md`,variant:`outline`}})})))()}var D,Ce,we,Te,O,k,Ee;function De(){return(De=e((()=>{D=t(),o(),h(),g(),n(),ne(),a(),b(),{DescendantsContext:Ce,useDescendant:we,useDescendants:Te}=se(),O=e=>e?.split(``),k=(e,t)=>(t===`alphanumeric`?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(e),Ee=(e={})=>{let t=(0,D.useId)(),{context:{labelId:n}={},props:{id:i=t,type:a=`number`,autoFocus:o,defaultValue:s,disabled:c,items:u=4,manageFocus:d=!0,mask:te,otp:ne=!1,placeholder:f=`◯`,readOnly:p,value:ie,onChange:ae,onComplete:m,...h},ariaProps:g,dataProps:se,eventProps:ce}=de(e),_=Te(),[le,v]=(0,D.useState)(!0),[ue,y]=(0,D.useState)(-1),[b,x]=oe({defaultValue:O(s)||[],value:O(ie),onChange:e=>ae?.(e.join(``))}),S=(0,D.useCallback)(e=>{if(!le||!d)return;let t=_.nextValue(e,!1);t&&requestAnimationFrame(()=>t.node.focus())},[_,le,d]),C=(0,D.useCallback)((e,t)=>{let n=e===`next`?_.nextValue(t,!1):_.prevValue(t,!1);if(!n)return;let r=n.node.value.length;requestAnimationFrame(()=>{n.node.focus(),n.node.setSelectionRange(0,r)})},[_]),w=(0,D.useCallback)((e,t,n=!0)=>{let r=[...b];r[t]=e,x(r),r=r.filter(Boolean),e!==``&&r.length===_.count()?(m?.(r.join(``)),_.value(t)?.node.blur()):n&&S(t)},[b,x,_,m,S]),fe=(0,D.useCallback)((e,t)=>{let n=t;return e?.length&&(e.startsWith(t.charAt(0))?n=t.charAt(1):e.startsWith(t.charAt(1))&&(n=t.charAt(0))),n},[]),pe=(0,D.useCallback)(e=>({target:t})=>{let n=t.value,r=b[e],i=fe(r,n);if(i===``)w(``,e);else if(n.length>2){if(!k(n,a))return;let t=n.split(``).filter((e,t)=>t<_.count());x(t),t.length===_.count()&&(m?.(t.join(``)),_.value(e)?.node.blur())}else k(i,a)&&w(i,e),v(!0)},[_,fe,m,w,x,a,b]),me=(0,D.useCallback)(e=>t=>{d&&!re(t.nativeEvent)&&ee(t,{ArrowLeft:t=>{t.preventDefault(),C(`prev`,e)},ArrowRight:t=>{t.preventDefault(),C(`next`,e)},Backspace:t=>{if(t.target.value===``){let t=_.prevValue(e,!1);if(!t)return;w(``,e-1,!1),t.node.focus(),v(!0)}else v(!1)}},{preventDefault:!1})},[_,C,d,w]),T=(0,D.useCallback)(e=>()=>y(e),[]),E=(0,D.useCallback)(()=>y(-1),[]);(0,D.useEffect)(()=>{if(!o)return;let e=_.firstValue();e&&requestAnimationFrame(()=>e.node.focus())},[o,_]);let he=(0,D.useCallback)(e=>l({role:`group`},h,e)(),[h]);return{descendants:_,items:u,getInputProps:(0,D.useCallback)(({index:e,...t})=>l(g,se,ce,{type:te?`password`:a===`number`?`tel`:`text`,"aria-labelledby":n,autoComplete:ne?`one-time-code`:`off`,disabled:c,inputMode:a===`number`?`numeric`:`text`,placeholder:ue===e&&!p&&!t.readOnly?``:f,readOnly:p,value:b[e]||``},r(t),{id:`${i}${e?`-${e}`:``}`,onBlur:E,onChange:pe(e),onFocus:T(e),onKeyDown:me(e)})(),[g,se,ce,te,a,n,ne,c,ue,p,f,b,i,E,pe,T,me]),getRootProps:he}}})))()}var A,j,Oe,ke,Ae,je,Me,Ne,M,N;function Pe(){return(Pe=e((()=>{A=t(),m(),i(),u(),b(),x(),fe(),Se(),De(),j=f(),{ComponentContext:Oe,PropsContext:ke,useComponentContext:Ae,usePropsContext:je,withContext:Me,withProvider:Ne}=ae(`pin-input`,xe),M=Ne(({children:e,errorBorderColor:t,focusBorderColor:n,...r})=>{let{descendants:i,items:a,getInputProps:o,getRootProps:s}=Ee(r),c=(0,A.useMemo)(()=>{let t=d(e);return t.length?t:Array.from({length:a},(e,t)=>(0,j.jsx)(N,{index:t},t))},[e,a]),l=(0,A.useMemo)(()=>({errorBorderColor:t,focusBorderColor:n,getInputProps:o}),[o,t,n]);return(0,j.jsx)(Ce,{value:i,children:(0,j.jsx)(Oe,{value:l,children:(0,j.jsx)(S,{...s(),children:c})})})},`root`)(),N=Me(pe,`field`)(void 0,({ref:e,index:t,...n})=>{let{errorBorderColor:r,focusBorderColor:i,getInputProps:a}=Ae(),{register:o}=we(),{props:s,ariaProps:l,dataProps:ee,eventProps:u}=de(n);return{...a({errorBorderColor:r,focusBorderColor:i,...l,...ee,...u,...s,ref:c(o,e),index:t})}})})))()}var Fe,P,Ie,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Le;function Re(){return(Re=e((()=>{Fe=t(),ve(),ge(),te(),ce(),ue(),me(),le(),E(),Pe(),P=f(),Ie={component:M,title:`Components / PinInput`},F=()=>(0,P.jsx)(M,{}),I=()=>(0,P.jsx)(T,{each:[3,4,5,6],children:(e,t)=>(0,P.jsx)(M,{items:e},t)}),L=()=>(0,P.jsx)(_e,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:s,children:(e,t,n)=>(0,P.jsx)(M,{colorScheme:t,variant:e},n)}),R=()=>(0,P.jsx)(_e,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,P.jsx)(M,{size:e,variant:t},n)}),z=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{type:`alphanumeric`})]}),B=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{defaultValue:`1234`}),(0,P.jsx)(M,{defaultValue:`123`})]}),V=()=>{let{page:e}=v();return(0,P.jsx)(M,{onComplete:()=>e.start({duration:5e3})})},H=()=>(0,P.jsx)(M,{otp:!0}),U=()=>(0,P.jsx)(M,{mask:!0}),W=()=>(0,P.jsx)(M,{manageFocus:!1}),G=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,disabled:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{disabled:!0,index:0}),(0,P.jsx)(N,{disabled:!0,index:1}),(0,P.jsx)(N,{disabled:!0,index:2}),(0,P.jsx)(N,{disabled:!0,index:3})]},t)}),(0,P.jsx)(y,{disabled:!0,errorMessage:`One-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),K=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,readOnly:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,readOnly:!0}),(0,P.jsx)(N,{index:1,readOnly:!0}),(0,P.jsx)(N,{index:2,readOnly:!0}),(0,P.jsx)(N,{index:3,readOnly:!0})]},t)}),(0,P.jsx)(y,{errorMessage:`One-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,readOnly:!0,children:(0,P.jsx)(M,{})})]}),q=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,invalid:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,invalid:!0}),(0,P.jsx)(N,{index:1,invalid:!0}),(0,P.jsx)(N,{index:2,invalid:!0}),(0,P.jsx)(N,{index:3,invalid:!0})]},t)}),(0,P.jsx)(y,{errorMessage:`One-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,invalid:!0,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),J=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{focusBorderColor:`green.500`}),(0,P.jsx)(M,{errorBorderColor:`orange.500`,invalid:!0})]}),Y=()=>(0,P.jsxs)(M,{children:[(0,P.jsx)(N,{index:0}),(0,P.jsx)(N,{index:1}),(0,P.jsx)(N,{index:2}),(0,P.jsx)(N,{index:3})]}),X=()=>(0,P.jsx)(M,{placeholder:`💩`}),Z=()=>{let{page:e}=v(),[t,n]=(0,Fe.useState)(``);return(0,P.jsx)(M,{value:t,onChange:n,onComplete:()=>e.start({duration:5e3})})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=ye();return(0,P.jsxs)(he,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(y,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(be,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(_,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=ye({defaultValues:{pinInput:`5`}});return(0,P.jsxs)(he,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(y,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(be,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(_,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Le=[`Basic`,`Items`,`Variant`,`Size`,`Type`,`DefaultValue`,`HandleComplete`,`OneTimePassword`,`MaskingValue`,`DisabledFocusManagement`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomFields`,`CustomPlaceholder`,`CustomControl`,`ReactHookForm`,`ReactHookFormDefaultValue`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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

      <Field.Root disabled errorMessage="One-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." label="Please one-time password">
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

      <Field.Root errorMessage="One-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." label="Please one-time password" readOnly>
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

      <Field.Root errorMessage="One-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." invalid label="Please one-time password">
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
}`,...$.parameters?.docs?.source}}}})))()}Re();export{F as Basic,J as BorderColor,Z as CustomControl,Y as CustomFields,X as CustomPlaceholder,B as DefaultValue,G as Disabled,W as DisabledFocusManagement,V as HandleComplete,q as Invalid,I as Items,U as MaskingValue,H as OneTimePassword,Q as ReactHookForm,$ as ReactHookFormDefaultValue,K as ReadOnly,R as Size,z as Type,L as Variant,Le as __namedExportsOrder,Ie as default};