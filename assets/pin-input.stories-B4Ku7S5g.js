import{d as Un,r as c,a as $n,h as V,bL as Kn,g as Xn,aJ as Wn,j as e,m as Qn,C as Zn,bc as Tn,V as En,Q as An}from"./iframe-BIJNUwA0.js";import{P as Bn}from"./props-table-lmXFHSBz.js";import{u as Hn,C as Ln}from"./index.esm-D7liiRN2.js";import{F as b}from"./for-Cpsr9B86.js";import{i as d,I as Yn}from"./input-DV8HDa7P.js";import{u as er}from"./index-CH90kZaX.js";import{c as nr}from"./index-B0lf85jd.js";import{u as _n,F as C}from"./use-field-props-DKzDJnFJ.js";import{G as rr}from"./group-VmPLRg4N.js";import"./preload-helper-C1FmrZbK.js";import"./grid-ZAyucFZG.js";import"./grid-item-DOf84ZDr.js";import"./flex-KEdsfNWm.js";import"./heading-Bz9uY6e0.js";import"./use-input-border-DSgVNCGu.js";import"./index-0kQpDINk.js";import"./use-breakpoint-Des1U5dl.js";import"./use-breakpoint-value-Ci56feJn.js";import"./use-color-mode-value-DllOdTyO.js";var he,ge,Ie,Se,be,Pe,je,Fe,ve,Re,Ce,ye,ke,ze,we,Ve;const tr=Un({base:{field:{...d.base,textAlign:"center"},root:{}},variants:{filled:{field:(he=d.variants)==null?void 0:he.filled},flushed:{field:(ge=d.variants)==null?void 0:ge.flushed},outline:{field:(Ie=d.variants)==null?void 0:Ie.outline},plain:{field:(Se=d.variants)==null?void 0:Se.plain}},sizes:{xs:{field:{boxSize:(be=d.sizes)==null?void 0:be.xs.minH,fontSize:(Pe=d.sizes)==null?void 0:Pe.xs.fontSize}},sm:{field:{boxSize:(je=d.sizes)==null?void 0:je.sm.minH,fontSize:(Fe=d.sizes)==null?void 0:Fe.sm.fontSize}},md:{field:{boxSize:(ve=d.sizes)==null?void 0:ve.md.minH,fontSize:(Re=d.sizes)==null?void 0:Re.md.fontSize}},lg:{field:{boxSize:(Ce=d.sizes)==null?void 0:Ce.lg.minH,fontSize:(ye=d.sizes)==null?void 0:ye.lg.fontSize}},xl:{field:{boxSize:(ke=d.sizes)==null?void 0:ke.xl.minH,fontSize:(ze=d.sizes)==null?void 0:ze.xl.fontSize}},"2xl":{field:{boxSize:(we=d.sizes)==null?void 0:we["2xl"].minH,fontSize:(Ve=d.sizes)==null?void 0:Ve["2xl"].fontSize}}},defaultProps:{size:"md",variant:"outline"}}),{DescendantsContext:sr,useDescendant:or,useDescendants:ar}=nr(),fe=r=>r==null?void 0:r.split(""),xe=(r,t)=>(t==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(r),ir=(r={})=>{const t=c.useId(),{props:{id:i=t,type:l="number",autoFocus:f,defaultValue:x,disabled:h,manageFocus:g=!0,mask:P,otp:j=!1,placeholder:S="◯",readOnly:y,value:k,onChange:Q,onComplete:I,...re},ariaProps:te,dataProps:se,eventProps:Z}=_n(r),u=ar(),[oe,Y]=c.useState(!0),[ae,ie]=c.useState(-1),[F,z]=er({defaultValue:fe(x)||[],value:fe(k),onChange:n=>Q==null?void 0:Q(n.join(""))}),le=c.useCallback(n=>{if(!oe||!g)return;const o=u.nextValue(n,!1);o&&requestAnimationFrame(()=>o.node.focus())},[u,oe,g]),ee=c.useCallback((n,o)=>{const a=n==="next"?u.nextValue(o,!1):u.prevValue(o,!1);if(!a)return;const m=a.node.value.length;requestAnimationFrame(()=>{a.node.focus(),a.node.setSelectionRange(0,m)})},[u]),v=c.useCallback((n,o,a=!0)=>{var R;let m=[...F];m[o]=n,z(m),m=m.filter(Boolean),n!==""&&m.length===u.count()?(I==null||I(m.join("")),(R=u.value(o))==null||R.node.blur()):a&&le(o)},[F,z,u,I,le]),ue=c.useCallback((n,o)=>{let a=o;return n!=null&&n.length&&(n.startsWith(o.charAt(0))?a=o.charAt(1):n.startsWith(o.charAt(1))&&(a=o.charAt(0))),a},[]),de=c.useCallback(n=>({target:o})=>{var R;const a=o.value,m=F[n],w=ue(m,a);if(w===""){v("",n);return}if(a.length>2){if(!xe(a,l))return;const ne=a.split("").filter((pr,Nn)=>Nn<u.count());z(ne),ne.length===u.count()&&(I==null||I(ne.join("")),(R=u.value(n))==null||R.node.blur())}else xe(w,l)&&v(w,n),Y(!0)},[u,ue,I,v,z,l,F]),ce=c.useCallback(n=>o=>{g&&$n(o,{ArrowLeft:a=>{a.preventDefault(),ee("prev",n)},ArrowRight:a=>{a.preventDefault(),ee("next",n)},Backspace:a=>{if(a.target.value===""){const m=u.prevValue(n,!1);if(!m)return;v("",n-1,!1),m.node.focus(),Y(!0)}else Y(!1)}},{preventDefault:!1})},[u,ee,g,v]),pe=c.useCallback(n=>()=>ie(n),[]),me=c.useCallback(()=>ie(-1),[]);c.useEffect(()=>{if(!f)return;const n=u.firstValue();n&&requestAnimationFrame(()=>n.node.focus())},[f,u]);const Jn=c.useCallback(n=>({role:"group",...re,...n}),[re]),Gn=c.useCallback(({index:n,...o})=>({...te,...se,type:P?"password":l==="number"?"tel":"text",autoComplete:j?"one-time-code":"off",disabled:h,inputMode:l==="number"?"numeric":"text",placeholder:ae===n&&!y&&!o.readOnly?"":S,readOnly:y,value:F[n]||"",...Kn(o),id:`${i}${n?`-${n}`:""}`,onBlur:V(Z.onBlur,o.onBlur,me),onChange:V(o.onChange,de(n)),onFocus:V(Z.onFocus,o.onFocus,pe(n)),onKeyDown:V(o.onKeyDown,ce(n))}),[te,se,Z,P,l,h,y,i,j,ae,S,F,me,de,pe,ce]);return{descendants:u,getInputProps:Gn,getRootProps:Jn}},{ComponentContext:lr,useComponentContext:ur,withContext:dr,withProvider:cr}=Xn("pin-input",tr),s=cr(({children:r,errorBorderColor:t,focusBorderColor:i,items:l=4,...f})=>{const{descendants:x,getInputProps:h,getRootProps:g}=ir(f),P=c.useMemo(()=>{const S=Wn(r);return S.length?S:Array.from({length:l},(y,k)=>e.jsx(p,{index:k},k))},[r,l]),j=c.useMemo(()=>({errorBorderColor:t,focusBorderColor:i,getInputProps:h}),[h,t,i]);return e.jsx(sr,{value:x,children:e.jsx(lr,{value:j,children:e.jsx(rr,{...g(),children:P})})})},"root")(),p=dr(Yn,"field")(void 0,({ref:r,index:t,...i})=>{const{errorBorderColor:l,focusBorderColor:f,getInputProps:x}=ur(),{register:h}=or(),{props:g,ariaProps:P,dataProps:j,eventProps:S}=_n(i);return{...x({errorBorderColor:l,focusBorderColor:f,...P,...j,...S,...g,ref:Qn(h,r),index:t})}}),Mr={component:s,title:"Components / PinInput"},M=()=>e.jsx(s,{}),D=()=>e.jsx(b,{each:[3,4,5,6],children:(r,t)=>e.jsx(s,{items:r},t)}),O=()=>e.jsx(Bn,{variant:"stack",columns:["outline","filled","flushed"],rows:Zn,children:(r,t,i)=>e.jsx(s,{colorScheme:t,variant:r},i)}),q=()=>e.jsx(Bn,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,t,i)=>e.jsx(s,{size:r,variant:t},i)}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{type:"alphanumeric"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:"1234"}),e.jsx(s,{defaultValue:"123"})]}),A=()=>{const{page:r}=Tn();return e.jsx(s,{onComplete:()=>r.start({duration:5e3})})},B=()=>e.jsx(s,{otp:!0}),H=()=>e.jsx(s,{mask:!0}),L=()=>e.jsx(s,{manageFocus:!1}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,disabled:!0},t)}),e.jsx(b,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{disabled:!0,index:0}),e.jsx(p,{disabled:!0,index:1}),e.jsx(p,{disabled:!0,index:2}),e.jsx(p,{disabled:!0,index:3})]},t)}),e.jsx(C,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",children:e.jsx(s,{})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,readOnly:!0},t)}),e.jsx(b,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{index:0,readOnly:!0}),e.jsx(p,{index:1,readOnly:!0}),e.jsx(p,{index:2,readOnly:!0}),e.jsx(p,{index:3,readOnly:!0})]},t)}),e.jsx(C,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",readOnly:!0,children:e.jsx(s,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{each:["outline","filled","flushed"],children:(r,t)=>e.jsx(s,{variant:r,invalid:!0},t)}),e.jsx(b,{each:["outline","filled","flushed"],children:(r,t)=>e.jsxs(s,{variant:r,children:[e.jsx(p,{index:0,invalid:!0}),e.jsx(p,{index:1,invalid:!0}),e.jsx(p,{index:2,invalid:!0}),e.jsx(p,{index:3,invalid:!0})]},t)}),e.jsx(C,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,label:"Please one-time password",children:e.jsx(s,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{focusBorderColor:"green.500"}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0})]}),U=()=>e.jsxs(s,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1}),e.jsx(p,{index:2}),e.jsx(p,{index:3})]}),$=()=>e.jsx(s,{placeholder:"💩"}),K=()=>{const{page:r}=Tn(),[t,i]=c.useState(""),l=()=>r.start({duration:5e3});return e.jsx(s,{value:t,onChange:i,onComplete:l})},X=()=>{var f;const{control:r,formState:{errors:t},handleSubmit:i}=Hn(),l=x=>console.log("submit:",x);return e.jsxs(En,{as:"form",onSubmit:i(l),children:[e.jsx(C,{errorMessage:(f=t.pinInput)==null?void 0:f.message,invalid:!!t.pinInput,label:"Token",children:e.jsx(Ln,{name:"pinInput",control:r,render:({field:x})=>e.jsx(s,{...x}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(An,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},W=()=>{var x;const r={pinInput:"5"},{control:t,formState:{errors:i},handleSubmit:l}=Hn({defaultValues:r}),f=h=>console.log("submit:",h);return e.jsxs(En,{as:"form",onSubmit:l(f),children:[e.jsx(C,{errorMessage:(x=i.pinInput)==null?void 0:x.message,invalid:!!i.pinInput,label:"Token",children:e.jsx(Ln,{name:"pinInput",control:t,render:({field:h})=>e.jsx(s,{...h}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(An,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Me,De,Oe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...(Oe=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var qe,Te,Ee;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>;
}`,...(Ee=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ae,Be,He;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PinInput.Root key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...(He=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Le,_e,Je;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...(Je=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Je.source}}};var Ge,Ne,Ue;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...(Ue=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var $e,Ke,Xe;E.parameters={...E.parameters,docs:{...($e=E.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...(Xe=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var We,Qe,Ze;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Ze=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var Ye,en,nn;B.parameters={...B.parameters,docs:{...(Ye=B.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...(nn=(en=B.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var rn,tn,sn;H.parameters={...H.parameters,docs:{...(rn=H.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...(sn=(tn=H.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var on,an,ln;L.parameters={...L.parameters,docs:{...(on=L.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...(ln=(an=L.parameters)==null?void 0:an.docs)==null?void 0:ln.source}}};var un,dn,cn;_.parameters={..._.parameters,docs:{...(un=_.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(cn=(dn=_.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var pn,mn,fn;J.parameters={...J.parameters,docs:{...(pn=J.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(fn=(mn=J.parameters)==null?void 0:mn.docs)==null?void 0:fn.source}}};var xn,hn,gn;G.parameters={...G.parameters,docs:{...(xn=G.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(gn=(hn=G.parameters)==null?void 0:hn.docs)==null?void 0:gn.source}}};var In,Sn,bn;N.parameters={...N.parameters,docs:{...(In=N.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...(bn=(Sn=N.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};var Pn,jn,Fn;U.parameters={...U.parameters,docs:{...(Pn=U.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...(Fn=(jn=U.parameters)==null?void 0:jn.docs)==null?void 0:Fn.source}}};var vn,Rn,Cn;$.parameters={...$.parameters,docs:{...(vn=$.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...(Cn=(Rn=$.parameters)==null?void 0:Rn.docs)==null?void 0:Cn.source}}};var yn,kn,zn;K.parameters={...K.parameters,docs:{...(yn=K.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(zn=(kn=K.parameters)==null?void 0:kn.docs)==null?void 0:zn.source}}};var wn,Vn,Mn;X.parameters={...X.parameters,docs:{...(wn=X.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(Vn=X.parameters)==null?void 0:Vn.docs)==null?void 0:Mn.source}}};var Dn,On,qn;W.parameters={...W.parameters,docs:{...(Dn=W.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(qn=(On=W.parameters)==null?void 0:On.docs)==null?void 0:qn.source}}};const Dr=["Basic","Items","Variant","Size","Type","DefaultValue","HandleComplete","OneTimePassword","MaskingValue","DisabledFocusManagement","Disabled","ReadOnly","Invalid","BorderColor","CustomFields","CustomPlaceholder","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{M as Basic,N as BorderColor,K as CustomControl,U as CustomFields,$ as CustomPlaceholder,E as DefaultValue,_ as Disabled,L as DisabledFocusManagement,A as HandleComplete,G as Invalid,D as Items,H as MaskingValue,B as OneTimePassword,X as ReactHookForm,W as ReactHookFormDefaultValue,J as ReadOnly,q as Size,T as Type,O as Variant,Dr as __namedExportsOrder,Mr as default};
