import{d as $n,r as d,a as Xn,h as w,bH as Wn,f as Qn,aK as Zn,j as e,m as Yn,l as er,bI as En,V as An,Q as Bn,C as nr}from"./iframe-Bh9OJiMa.js";import{P as Hn}from"./props-table-Clbdh-et.js";import{u as Ln,C as _n}from"./index.esm-kNUr14AM.js";import{F as S}from"./for-Drx2NpVa.js";import{i as u,I as rr}from"./input-_rmp-yT3.js";import{u as tr}from"./index-43yi5QUG.js";import{c as sr}from"./index-BDXUJR5o.js";import{u as Gn,F as y}from"./use-field-props-B2_L45Q1.js";import{G as or}from"./group-BL2xRsYz.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DEBT4jh_.js";import"./grid-item-DglFRIPa.js";import"./flex-Cq9fG4Y2.js";import"./heading-D9jKM5Is.js";import"./use-input-border-DIvm5bmb.js";import"./index-IKP2hWx8.js";import"./use-breakpoint-Ccmb_yNp.js";import"./use-breakpoint-value-DH9gKxXR.js";import"./use-color-mode-value-1gZklRVD.js";var ge,be,Ie,Se,Pe,je,Fe,ve,Re,Ce,ye,ke,ze,we,Ve,Me;const ar=$n({base:{field:{...u.base,textAlign:"center"},root:{}},variants:{filled:{field:(ge=u.variants)==null?void 0:ge.filled},flushed:{field:(be=u.variants)==null?void 0:be.flushed},outline:{field:(Ie=u.variants)==null?void 0:Ie.outline},plain:{field:(Se=u.variants)==null?void 0:Se.plain}},sizes:{xs:{field:{boxSize:(Pe=u.sizes)==null?void 0:Pe.xs.minH,fontSize:(je=u.sizes)==null?void 0:je.xs.fontSize}},sm:{field:{boxSize:(Fe=u.sizes)==null?void 0:Fe.sm.minH,fontSize:(ve=u.sizes)==null?void 0:ve.sm.fontSize}},md:{field:{boxSize:(Re=u.sizes)==null?void 0:Re.md.minH,fontSize:(Ce=u.sizes)==null?void 0:Ce.md.fontSize}},lg:{field:{boxSize:(ye=u.sizes)==null?void 0:ye.lg.minH,fontSize:(ke=u.sizes)==null?void 0:ke.lg.fontSize}},xl:{field:{boxSize:(ze=u.sizes)==null?void 0:ze.xl.minH,fontSize:(we=u.sizes)==null?void 0:we.xl.fontSize}},"2xl":{field:{boxSize:(Ve=u.sizes)==null?void 0:Ve["2xl"].minH,fontSize:(Me=u.sizes)==null?void 0:Me["2xl"].fontSize}}},defaultProps:{size:"md",variant:"outline"}}),{DescendantsContext:ir,useDescendant:lr,useDescendants:ur}=sr(),xe=n=>n==null?void 0:n.split(""),he=(n,r)=>(r==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(n),dr=(n={})=>{const r=d.useId(),{context:{labelId:i}={},props:{id:f=r,type:p="number",autoFocus:m,defaultValue:h,disabled:P,items:F=4,manageFocus:g=!0,mask:I,otp:W=!1,placeholder:v="◯",readOnly:Q,value:Jn,onChange:Z,onComplete:b,...te},ariaProps:se,dataProps:oe,eventProps:Y}=Gn(n),l=ur(),[ae,ee]=d.useState(!0),[ie,le]=d.useState(-1),[j,k]=tr({defaultValue:xe(h)||[],value:xe(Jn),onChange:t=>Z==null?void 0:Z(t.join(""))}),ue=d.useCallback(t=>{if(!ae||!g)return;const a=l.nextValue(t,!1);a&&requestAnimationFrame(()=>a.node.focus())},[l,ae,g]),ne=d.useCallback((t,a)=>{const o=t==="next"?l.nextValue(a,!1):l.prevValue(a,!1);if(!o)return;const x=o.node.value.length;requestAnimationFrame(()=>{o.node.focus(),o.node.setSelectionRange(0,x)})},[l]),R=d.useCallback((t,a,o=!0)=>{var C;let x=[...j];x[a]=t,k(x),x=x.filter(Boolean),t!==""&&x.length===l.count()?(b==null||b(x.join("")),(C=l.value(a))==null||C.node.blur()):o&&ue(a)},[j,k,l,b,ue]),de=d.useCallback((t,a)=>{let o=a;return t!=null&&t.length&&(t.startsWith(a.charAt(0))?o=a.charAt(1):t.startsWith(a.charAt(1))&&(o=a.charAt(0))),o},[]),ce=d.useCallback(t=>({target:a})=>{var C;const o=a.value,x=j[t],z=de(x,o);if(z===""){R("",t);return}if(o.length>2){if(!he(o,p))return;const re=o.split("").filter((xr,Un)=>Un<l.count());k(re),re.length===l.count()&&(b==null||b(re.join("")),(C=l.value(t))==null||C.node.blur())}else he(z,p)&&R(z,t),ee(!0)},[l,de,b,R,k,p,j]),pe=d.useCallback(t=>a=>{g&&Xn(a,{ArrowLeft:o=>{o.preventDefault(),ne("prev",t)},ArrowRight:o=>{o.preventDefault(),ne("next",t)},Backspace:o=>{if(o.target.value===""){const x=l.prevValue(t,!1);if(!x)return;R("",t-1,!1),x.node.focus(),ee(!0)}else ee(!1)}},{preventDefault:!1})},[l,ne,g,R]),me=d.useCallback(t=>()=>le(t),[]),fe=d.useCallback(()=>le(-1),[]);d.useEffect(()=>{if(!m)return;const t=l.firstValue();t&&requestAnimationFrame(()=>t.node.focus())},[m,l]);const Nn=d.useCallback(t=>({role:"group",...te,...t}),[te]),Kn=d.useCallback(({"aria-labelledby":t,index:a,...o})=>({...se,...oe,type:I?"password":p==="number"?"tel":"text","aria-labelledby":Qn(t,i),autoComplete:W?"one-time-code":"off",disabled:P,inputMode:p==="number"?"numeric":"text",placeholder:ie===a&&!Q&&!o.readOnly?"":v,readOnly:Q,value:j[a]||"",...Wn(o),id:`${f}${a?`-${a}`:""}`,onBlur:w(Y.onBlur,o.onBlur,fe),onChange:w(o.onChange,ce(a)),onFocus:w(Y.onFocus,o.onFocus,me(a)),onKeyDown:w(o.onKeyDown,pe(a))}),[se,oe,Y,I,p,i,W,P,ie,Q,v,j,f,fe,ce,me,pe]);return{descendants:l,items:F,getInputProps:Kn,getRootProps:Nn}},{ComponentContext:cr,useComponentContext:pr,withContext:mr,withProvider:fr}=er("pin-input",ar),s=fr(({children:n,errorBorderColor:r,focusBorderColor:i,...f})=>{const{descendants:p,items:m,getInputProps:h,getRootProps:P}=dr(f),F=d.useMemo(()=>{const I=Zn(n);return I.length?I:Array.from({length:m},(W,v)=>e.jsx(c,{index:v},v))},[n,m]),g=d.useMemo(()=>({errorBorderColor:r,focusBorderColor:i,getInputProps:h}),[h,r,i]);return e.jsx(ir,{value:p,children:e.jsx(cr,{value:g,children:e.jsx(or,{...P(),children:F})})})},"root")(),c=mr(rr,"field")(void 0,({ref:n,index:r,...i})=>{const{errorBorderColor:f,focusBorderColor:p,getInputProps:m}=pr(),{register:h}=lr(),{props:P,ariaProps:F,dataProps:g,eventProps:I}=Gn(i);return{...m({errorBorderColor:f,focusBorderColor:p,...F,...g,...I,...P,ref:Yn(h,n),index:r})}}),qr={component:s,title:"Components / PinInput"},V=()=>e.jsx(s,{}),M=()=>e.jsx(S,{each:[3,4,5,6],children:(n,r)=>e.jsx(s,{items:n},r)}),D=()=>e.jsx(Hn,{variant:"stack",columns:["outline","filled","flushed"],rows:nr,children:(n,r,i)=>e.jsx(s,{colorScheme:r,variant:n},i)}),O=()=>e.jsx(Hn,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,r,i)=>e.jsx(s,{size:n,variant:r},i)}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{type:"alphanumeric"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:"1234"}),e.jsx(s,{defaultValue:"123"})]}),E=()=>{const{page:n}=En();return e.jsx(s,{onComplete:()=>n.start({duration:5e3})})},A=()=>e.jsx(s,{otp:!0}),B=()=>e.jsx(s,{mask:!0}),H=()=>e.jsx(s,{manageFocus:!1}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(s,{variant:n,disabled:!0},r)}),e.jsx(S,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(s,{variant:n,children:[e.jsx(c,{disabled:!0,index:0}),e.jsx(c,{disabled:!0,index:1}),e.jsx(c,{disabled:!0,index:2}),e.jsx(c,{disabled:!0,index:3})]},r)}),e.jsx(y,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",children:e.jsx(s,{})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(s,{variant:n,readOnly:!0},r)}),e.jsx(S,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(s,{variant:n,children:[e.jsx(c,{index:0,readOnly:!0}),e.jsx(c,{index:1,readOnly:!0}),e.jsx(c,{index:2,readOnly:!0}),e.jsx(c,{index:3,readOnly:!0})]},r)}),e.jsx(y,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",label:"Please one-time password",readOnly:!0,children:e.jsx(s,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(s,{variant:n,invalid:!0},r)}),e.jsx(S,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(s,{variant:n,children:[e.jsx(c,{index:0,invalid:!0}),e.jsx(c,{index:1,invalid:!0}),e.jsx(c,{index:2,invalid:!0}),e.jsx(c,{index:3,invalid:!0})]},r)}),e.jsx(y,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,label:"Please one-time password",children:e.jsx(s,{})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{}),e.jsx(s,{focusBorderColor:"green.500"}),e.jsx(s,{errorBorderColor:"orange.500",invalid:!0})]}),N=()=>e.jsxs(s,{children:[e.jsx(c,{index:0}),e.jsx(c,{index:1}),e.jsx(c,{index:2}),e.jsx(c,{index:3})]}),K=()=>e.jsx(s,{placeholder:"💩"}),U=()=>{const{page:n}=En(),[r,i]=d.useState(""),f=()=>n.start({duration:5e3});return e.jsx(s,{value:r,onChange:i,onComplete:f})},$=()=>{var p;const{control:n,formState:{errors:r},handleSubmit:i}=Ln(),f=m=>console.log("submit:",m);return e.jsxs(An,{as:"form",onSubmit:i(f),children:[e.jsx(y,{errorMessage:(p=r.pinInput)==null?void 0:p.message,invalid:!!r.pinInput,label:"Token",children:e.jsx(_n,{name:"pinInput",control:n,render:({field:m})=>e.jsx(s,{...m}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(Bn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var m;const n={pinInput:"5"},{control:r,formState:{errors:i},handleSubmit:f}=Ln({defaultValues:n}),p=h=>console.log("submit:",h);return e.jsxs(An,{as:"form",onSubmit:f(p),children:[e.jsx(y,{errorMessage:(m=i.pinInput)==null?void 0:m.message,invalid:!!i.pinInput,label:"Token",children:e.jsx(_n,{name:"pinInput",control:r,render:({field:h})=>e.jsx(s,{...h}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(Bn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var De,Oe,qe;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <PinInput.Root />;
}`,...(qe=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Te,Ee,Ae;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>;
}`,...(Ae=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Be,He,Le;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <PinInput.Root key={key} colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...(Le=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var _e,Ge,Je;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <PinInput.Root key={key} size={column} variant={row} />;
    }}
    </PropsTable>;
}`,...(Je=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ne,Ke,Ue;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>;
}`,...(Ue=(Ke=q.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var $e,Xe,We;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>;
}`,...(We=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:We.source}}};var Qe,Ze,Ye;E.parameters={...E.parameters,docs:{...(Qe=E.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput.Root onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Ye=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:Ye.source}}};var en,nn,rn;A.parameters={...A.parameters,docs:{...(en=A.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  return <PinInput.Root otp />;
}`,...(rn=(nn=A.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var tn,sn,on;B.parameters={...B.parameters,docs:{...(tn=B.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  return <PinInput.Root mask />;
}`,...(on=(sn=B.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var an,ln,un;H.parameters={...H.parameters,docs:{...(an=H.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <PinInput.Root manageFocus={false} />;
}`,...(un=(ln=H.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var dn,cn,pn;L.parameters={...L.parameters,docs:{...(dn=L.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(pn=(cn=L.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var mn,fn,xn;_.parameters={..._.parameters,docs:{...(mn=_.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(xn=(fn=_.parameters)==null?void 0:fn.docs)==null?void 0:xn.source}}};var hn,gn,bn;G.parameters={...G.parameters,docs:{...(hn=G.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
}`,...(bn=(gn=G.parameters)==null?void 0:gn.docs)==null?void 0:bn.source}}};var In,Sn,Pn;J.parameters={...J.parameters,docs:{...(In=J.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  return <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>;
}`,...(Pn=(Sn=J.parameters)==null?void 0:Sn.docs)==null?void 0:Pn.source}}};var jn,Fn,vn;N.parameters={...N.parameters,docs:{...(jn=N.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <PinInput.Root>
      <PinInput.Field index={0} />
      <PinInput.Field index={1} />
      <PinInput.Field index={2} />
      <PinInput.Field index={3} />
    </PinInput.Root>;
}`,...(vn=(Fn=N.parameters)==null?void 0:Fn.docs)==null?void 0:vn.source}}};var Rn,Cn,yn;K.parameters={...K.parameters,docs:{...(Rn=K.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <PinInput.Root placeholder="💩" />;
}`,...(yn=(Cn=K.parameters)==null?void 0:Cn.docs)==null?void 0:yn.source}}};var kn,zn,wn;U.parameters={...U.parameters,docs:{...(kn=U.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(wn=(zn=U.parameters)==null?void 0:zn.docs)==null?void 0:wn.source}}};var Vn,Mn,Dn;$.parameters={...$.parameters,docs:{...(Vn=$.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Mn=$.parameters)==null?void 0:Mn.docs)==null?void 0:Dn.source}}};var On,qn,Tn;X.parameters={...X.parameters,docs:{...(On=X.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Tn=(qn=X.parameters)==null?void 0:qn.docs)==null?void 0:Tn.source}}};const Tr=["Basic","Items","Variant","Size","Type","DefaultValue","HandleComplete","OneTimePassword","MaskingValue","DisabledFocusManagement","Disabled","ReadOnly","Invalid","BorderColor","CustomFields","CustomPlaceholder","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{V as Basic,J as BorderColor,U as CustomControl,N as CustomFields,K as CustomPlaceholder,T as DefaultValue,L as Disabled,H as DisabledFocusManagement,E as HandleComplete,G as Invalid,M as Items,B as MaskingValue,A as OneTimePassword,$ as ReactHookForm,X as ReactHookFormDefaultValue,_ as ReadOnly,O as Size,q as Type,D as Variant,Tr as __namedExportsOrder,qr as default};
