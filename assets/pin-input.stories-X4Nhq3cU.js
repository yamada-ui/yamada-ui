import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Bn as n,Lt as r,Mn as i,Pt as a,bt as o,ct as s,i as c,mt as l,o as u,pt as ee,ut as d,xt as te}from"./props-CAjJr30V.js";import{a as f,o as ne}from"./event-CY0u9mIA.js";import{t as p}from"./jsx-runtime-BB9-612F.js";import{d as m,i as re,n as ie,r as h}from"./create-component-CWlcnyjJ.js";import{r as ae,t as oe}from"./use-controllable-state-qZrN-Kym.js";import{n as g,t as _}from"./use-descendants-CeHA7QUQ.js";import{r as se,t as v}from"./button-D3ZIiqLF.js";import{n as ce,r as y}from"./loading-provider-D3uR6f4W.js";import{c as le,r as ue,s as b,t as x}from"./use-field-props-P69Vc83_.js";import{n as S,t as de}from"./group-Blc9_qOv.js";import{c as C,l as w,r as fe,t as pe}from"./input-KGaRy17C.js";import{n as me,t as T}from"./for-DfOiK7qe.js";import{n as he,t as E}from"./v-stack-Dz4FWdBK.js";import{n as ge,t as _e}from"./props-table-8kvX-RWx.js";import{n as ve,r as ye,t as be}from"./index.esm-xmO_zH4i.js";var xe;function Se(){return(Se=e((()=>{m(),C(),xe=re({base:{field:{...w.base,textAlign:`center`},root:{}},variants:{filled:{field:w.variants?.filled},flushed:{field:w.variants?.flushed},outline:{field:w.variants?.outline},plain:{field:w.variants?.plain}},sizes:{xs:{field:{boxSize:w.sizes?.xs.minH,fontSize:w.sizes?.xs.fontSize}},sm:{field:{boxSize:w.sizes?.sm.minH,fontSize:w.sizes?.sm.fontSize}},md:{field:{boxSize:w.sizes?.md.minH,fontSize:w.sizes?.md.fontSize}},lg:{field:{boxSize:w.sizes?.lg.minH,fontSize:w.sizes?.lg.fontSize}},xl:{field:{boxSize:w.sizes?.xl.minH,fontSize:w.sizes?.xl.fontSize}},"2xl":{field:{boxSize:w.sizes?.[`2xl`].minH,fontSize:w.sizes?.[`2xl`].fontSize}}},defaultProps:{size:`md`,variant:`outline`}})})))()}var D,Ce,we,Te,O,k,Ee;function De(){return(De=e((()=>{D=t(),c(),oe(),g(),r(),f(),ee(),x(),{DescendantsContext:Ce,useDescendant:we,useDescendants:Te}=_(),O=e=>e?.split(``),k=(e,t)=>(t===`alphanumeric`?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(e),Ee=(e={})=>{let t=(0,D.useId)(),{context:{labelId:n}={},props:{id:r=t,type:i=`number`,autoFocus:o,defaultValue:s,disabled:c,items:ee=4,manageFocus:d=!0,mask:te,otp:f=!1,placeholder:p=`◯`,readOnly:m,value:re,onChange:ie,onComplete:h,...oe},ariaProps:g,dataProps:_,eventProps:se}=ue(e),v=Te(),[ce,y]=(0,D.useState)(!0),[le,b]=(0,D.useState)(-1),[x,S]=ae({defaultValue:O(s)||[],value:O(re),onChange:e=>ie?.(e.join(``))}),de=(0,D.useCallback)(e=>{if(!ce||!d)return;let t=v.nextValue(e,!1);t&&requestAnimationFrame(()=>t.node.focus())},[v,ce,d]),C=(0,D.useCallback)((e,t)=>{let n=e===`next`?v.nextValue(t,!1):v.prevValue(t,!1);if(!n)return;let r=n.node.value.length;requestAnimationFrame(()=>{n.node.focus(),n.node.setSelectionRange(0,r)})},[v]),w=(0,D.useCallback)((e,t,n=!0)=>{let r=[...x];r[t]=e,S(r),r=r.filter(Boolean),e!==``&&r.length===v.count()?(h?.(r.join(``)),v.value(t)?.node.blur()):n&&de(t)},[x,S,v,h,de]),fe=(0,D.useCallback)((e,t)=>{let n=t;return e?.length&&(e.startsWith(t.charAt(0))?n=t.charAt(1):e.startsWith(t.charAt(1))&&(n=t.charAt(0))),n},[]),pe=(0,D.useCallback)(e=>({target:t})=>{let n=t.value,r=x[e],a=fe(r,n);if(a===``)w(``,e);else if(n.length>2){if(!k(n,i))return;let t=n.split(``).filter((e,t)=>t<v.count());S(t),t.length===v.count()&&(h?.(t.join(``)),v.value(e)?.node.blur())}else k(a,i)&&w(a,e),y(!0)},[v,fe,h,w,S,i,x]),me=(0,D.useCallback)(e=>t=>{d&&!ne(t.nativeEvent)&&l(t,{ArrowLeft:t=>{t.preventDefault(),C(`prev`,e)},ArrowRight:t=>{t.preventDefault(),C(`next`,e)},Backspace:t=>{if(t.target.value===``){let t=v.prevValue(e,!1);if(!t)return;w(``,e-1,!1),t.node.focus(),y(!0)}else y(!1)}},{preventDefault:!1})},[v,C,d,w]),T=(0,D.useCallback)(e=>()=>b(e),[]),he=(0,D.useCallback)(()=>b(-1),[]);(0,D.useEffect)(()=>{if(!o)return;let e=v.firstValue();e&&requestAnimationFrame(()=>e.node.focus())},[o,v]);let E=(0,D.useCallback)(e=>u({role:`group`},oe,e)(),[oe]);return{descendants:v,items:ee,getInputProps:(0,D.useCallback)(({index:e,...t})=>u(g,_,se,{type:te?`password`:i===`number`?`tel`:`text`,"aria-labelledby":n,autoComplete:f?`one-time-code`:`off`,disabled:c,inputMode:i===`number`?`numeric`:`text`,placeholder:le===e&&!m&&!t.readOnly?``:p,readOnly:m,value:x[e]||``},a(t),{id:`${r}${e?`-${e}`:``}`,onBlur:he,onChange:pe(e),onFocus:T(e),onKeyDown:me(e)})(),[g,_,se,te,i,n,f,c,le,m,p,x,r,he,pe,T,me]),getRootProps:E}}})))()}var A,j,Oe,ke,Ae,je,Me,Ne,M,N;function Pe(){return(Pe=e((()=>{A=t(),h(),te(),s(),x(),S(),fe(),Se(),De(),j=p(),{ComponentContext:Oe,PropsContext:ke,useComponentContext:Ae,usePropsContext:je,withContext:Me,withProvider:Ne}=ie(`pin-input`,xe),M=Ne(({children:e,errorBorderColor:t,focusBorderColor:n,...r})=>{let{descendants:i,items:a,getInputProps:s,getRootProps:c}=Ee(r),l=(0,A.useMemo)(()=>{let t=o(e);return t.length?t:Array.from({length:a},(e,t)=>(0,j.jsx)(N,{index:t},t))},[e,a]),u=(0,A.useMemo)(()=>({errorBorderColor:t,focusBorderColor:n,getInputProps:s}),[s,t,n]);return(0,j.jsx)(Ce,{value:i,children:(0,j.jsx)(Oe,{value:u,children:(0,j.jsx)(de,{...c(),children:l})})})},`root`)(),N=Me(pe,`field`)(void 0,({ref:e,index:t,...n})=>{let{errorBorderColor:r,focusBorderColor:i,getInputProps:a}=Ae(),{register:o}=we(),{props:s,ariaProps:c,dataProps:l,eventProps:u}=ue(n);return{...a({errorBorderColor:r,focusBorderColor:i,...c,...l,...u,...s,ref:d(o,e),index:t})}})})))()}var Fe,P,Ie,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Le;function Re(){return(Re=e((()=>{Fe=t(),ve(),ge(),n(),se(),le(),me(),ce(),he(),Pe(),P=p(),Ie={component:M,title:`Components / PinInput`},F=()=>(0,P.jsx)(M,{}),I=()=>(0,P.jsx)(T,{each:[3,4,5,6],children:(e,t)=>(0,P.jsx)(M,{items:e},t)}),L=()=>(0,P.jsx)(_e,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:i,children:(e,t,n)=>(0,P.jsx)(M,{colorScheme:t,variant:e},n)}),R=()=>(0,P.jsx)(_e,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,P.jsx)(M,{size:e,variant:t},n)}),z=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{type:`alphanumeric`})]}),B=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{defaultValue:`1234`}),(0,P.jsx)(M,{defaultValue:`123`})]}),V=()=>{let{page:e}=y();return(0,P.jsx)(M,{onComplete:()=>e.start({duration:5e3})})},H=()=>(0,P.jsx)(M,{otp:!0}),U=()=>(0,P.jsx)(M,{mask:!0}),W=()=>(0,P.jsx)(M,{manageFocus:!1}),G=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,disabled:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{disabled:!0,index:0}),(0,P.jsx)(N,{disabled:!0,index:1}),(0,P.jsx)(N,{disabled:!0,index:2}),(0,P.jsx)(N,{disabled:!0,index:3})]},t)}),(0,P.jsx)(b,{disabled:!0,errorMessage:`One-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),K=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,readOnly:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,readOnly:!0}),(0,P.jsx)(N,{index:1,readOnly:!0}),(0,P.jsx)(N,{index:2,readOnly:!0}),(0,P.jsx)(N,{index:3,readOnly:!0})]},t)}),(0,P.jsx)(b,{errorMessage:`One-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,label:`Please one-time password`,readOnly:!0,children:(0,P.jsx)(M,{})})]}),q=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsx)(M,{variant:e,invalid:!0},t)}),(0,P.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,P.jsxs)(M,{variant:e,children:[(0,P.jsx)(N,{index:0,invalid:!0}),(0,P.jsx)(N,{index:1,invalid:!0}),(0,P.jsx)(N,{index:2,invalid:!0}),(0,P.jsx)(N,{index:3,invalid:!0})]},t)}),(0,P.jsx)(b,{errorMessage:`One-time password is required.`,helperMessage:`Just sent you a one-time password to your e-mail address.`,invalid:!0,label:`Please one-time password`,children:(0,P.jsx)(M,{})})]}),J=()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(M,{}),(0,P.jsx)(M,{focusBorderColor:`green.500`}),(0,P.jsx)(M,{errorBorderColor:`orange.500`,invalid:!0})]}),Y=()=>(0,P.jsxs)(M,{children:[(0,P.jsx)(N,{index:0}),(0,P.jsx)(N,{index:1}),(0,P.jsx)(N,{index:2}),(0,P.jsx)(N,{index:3})]}),X=()=>(0,P.jsx)(M,{placeholder:`💩`}),Z=()=>{let{page:e}=y(),[t,n]=(0,Fe.useState)(``);return(0,P.jsx)(M,{value:t,onChange:n,onComplete:()=>e.start({duration:5e3})})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=ye();return(0,P.jsxs)(E,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(b,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(be,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(v,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=ye({defaultValues:{pinInput:`5`}});return(0,P.jsxs)(E,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,P.jsx)(b,{errorMessage:t.pinInput?.message,invalid:!!t.pinInput,label:`Token`,children:(0,P.jsx)(be,{name:`pinInput`,control:e,render:({field:e})=>(0,P.jsx)(M,{...e}),rules:{minLength:{message:`This is required.`,value:4},required:{message:`This is required.`,value:!0}}})}),(0,P.jsx)(v,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Le=[`Basic`,`Items`,`Variant`,`Size`,`Type`,`DefaultValue`,`HandleComplete`,`OneTimePassword`,`MaskingValue`,`DisabledFocusManagement`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`CustomFields`,`CustomPlaceholder`,`CustomControl`,`ReactHookForm`,`ReactHookFormDefaultValue`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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