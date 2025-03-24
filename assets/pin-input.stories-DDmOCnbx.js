import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as l}from"./index-BwPxMuoB.js";import{u as Pn,C as jn}from"./index.esm-C038jXrr.js";import{u as En}from"./index-DLOQPSsO.js";import{c as Rn}from"./index-Bbp3WuCW.js";import{u as Fn,f as zn}from"./form-control-4O_IQfgA.js";import{f as bn}from"./forward-ref-Ukjd1cIW.js";import{a as Ln}from"./use-component-style-65RA3nVD.js";import{o as Nn}from"./theme-provider-DGyR61Aa.js";import{M as Hn,h as w,H as Jn,g as Un,B as Gn,b as Sn,c as yn,a as Wn}from"./factory-B_KMcXyW.js";import{u as Cn}from"./loading-provider-DTTuAu7E.js";import{F as S}from"./fieldset-CSrezQyl.js";import{V as wn}from"./stack-D_e4Awei.js";import{B as vn}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DSCI00mi.js";import"./Combination-4Rar1Jsv.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";import"./memo-CPHdbx3K.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./portal-DnDmgWrA.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./factory-CplEbptb.js";import"./visually-hidden-BYT-PWA-.js";import"./use-ripple-DqSHYmP8.js";const me=a=>a==null?void 0:a.split(""),ge=(a,u)=>(u==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(a),[Xn,$n]=Gn({name:"PinInputContext",errorMessage:`PinInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PinInput />"`}),{DescendantsContextProvider:Kn,useDescendant:Zn,useDescendants:Qn}=Rn(),n=bn(({errorBorderColor:a,focusBorderColor:u,...c},p)=>{const[g,f]=Ln("PinInput",{errorBorderColor:a,focusBorderColor:u,...c}),m=l.useId(),{id:h=m,type:P="number",className:Vn,autoFocus:Y,children:kn,defaultValue:Mn,items:_n=4,manageFocus:y=!0,mask:ee,otp:ne=!1,placeholder:re="○",value:On,onChange:G,onComplete:x,...qn}=Fn(Nn(f)),[{"aria-readonly":Yn,disabled:se,readOnly:W,...X},Dn]=Hn(qn,zn),o=Qn(),[te,$]=l.useState(!0),[ae,oe]=l.useState(-1),[j,C]=En({defaultValue:me(Mn)||[],value:me(On),onChange:r=>G==null?void 0:G(r.join(""))}),Bn={alignItems:"center",display:"flex",...g.container},ie=l.useCallback(r=>{if(!te||!y)return;const s=o.nextValue(r,void 0,!1);s&&requestAnimationFrame(()=>s.node.focus())},[o,te,y]),K=l.useCallback((r,s)=>{const i=r==="next"?o.nextValue(s,void 0,!1):o.prevValue(s,void 0,!1);if(!i)return;const d=i.node.value.length;requestAnimationFrame(()=>{i.node.focus(),i.node.setSelectionRange(0,d)})},[o]),F=l.useCallback((r,s,i=!0)=>{var b;let d=[...j];d[s]=r,C(d),d=d.filter(Boolean),r!==""&&d.length===o.count()?(x==null||x(d.join("")),(b=o.value(s))==null||b.node.blur()):i&&ie(s)},[j,C,o,x,ie]),ue=l.useCallback((r,s)=>{let i=s;return r!=null&&r.length&&(r.startsWith(s.charAt(0))?i=s.charAt(1):r.startsWith(s.charAt(1))&&(i=s.charAt(0))),i},[]),le=l.useCallback(r=>({target:s})=>{var b;const i=s.value,d=j[r],I=ue(d,i);if(I===""){F("",r);return}if(i.length>2){if(!ge(i,P))return;const Q=i.split("").filter((er,An)=>An<o.count());C(Q),Q.length===o.count()&&(x==null||x(Q.join("")),(b=o.value(r))==null||b.node.blur())}else ge(I,P)&&F(I,r),$(!0)},[o,ue,x,F,C,P,j]),de=l.useCallback(r=>s=>{if(!y)return;const d={ArrowLeft:()=>{s.preventDefault(),K("prev",r)},ArrowRight:()=>{s.preventDefault(),K("next",r)},Backspace:()=>{if(s.target.value===""){const I=o.prevValue(r,void 0,!1);if(!I)return;F("",r-1,!1),I.node.focus(),$(!0)}else $(!1)}}[s.key];d&&d()},[o,K,y,F]),ce=l.useCallback(r=>()=>oe(r),[]),pe=l.useCallback(()=>oe(-1),[]);l.useEffect(()=>{if(!Y)return;const r=o.firstValue();r&&requestAnimationFrame(()=>r.node.focus())},[Y,o]);const Tn=l.useCallback(({index:r,...s})=>({type:ee?"password":P==="number"?"tel":"text",disabled:se,inputMode:P==="number"?"numeric":"text",readOnly:W,...X,...Jn(s),id:`${h}-${r}`,autoComplete:ne?"one-time-code":"off",placeholder:ae===r&&!W&&!s.readOnly?"":re,value:j[r]||"",onBlur:w(s.onBlur,pe),onChange:w(s.onChange,le(r)),onFocus:w(s.onFocus,ce(r)),onKeyDown:w(s.onKeyDown,de(r))}),[P,ee,X,h,j,le,de,ce,pe,ne,ae,se,W,re]);let Z=Un(kn);if(!Z.length)for(let r=0;r<_n;r++)Z.push(e.jsx(t,{},r));return e.jsx(Kn,{value:o,children:e.jsx(Xn,{value:{styles:g,getInputProps:Tn},children:e.jsx(Sn.div,{ref:p,className:yn("ui-pin-input",Vn),role:"group",__css:Bn,...X,...Dn,children:Z})})})});n.displayName="PinInput";n.__ui__="PinInput";const t=bn(({className:a,...u},c)=>{const{styles:p,getInputProps:g}=$n(),{index:f,register:m}=Zn(),h={...p.field};return u=Fn(u),e.jsx(Sn.input,{className:yn("ui-pin-input__field",a),...g({...u,ref:Wn(m,c),index:f}),__css:h})});t.displayName="PinInputField";t.__ui__="PinInputField";const Mr={component:n,title:"Components / Forms / PinInput"},v=()=>e.jsx(n,{}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{errorBorderColor:"orange.500",invalid:!0})]}),D=()=>{const{page:a}=Cn();return e.jsx(n,{onComplete:()=>a.start({duration:5e3})})},B=()=>e.jsx(n,{otp:!0}),T=()=>e.jsx(n,{mask:!0}),A=()=>e.jsxs(n,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]}),E=()=>e.jsx(n,{placeholder:"💩"}),R=()=>{const{page:a}=Cn(),[u,c]=l.useState(""),p=()=>a.start({duration:5e3});return e.jsx(n,{value:u,onChange:c,onComplete:p})},z=()=>e.jsx(n,{manageFocus:!1}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{disabled:!0}),e.jsxs(n,{children:[e.jsx(t,{disabled:!0}),e.jsx(t,{disabled:!0}),e.jsx(t,{disabled:!0}),e.jsx(t,{disabled:!0})]}),e.jsx(S,{disabled:!0,errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",legend:"Please one-time password",children:e.jsx(n,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{readOnly:!0}),e.jsxs(n,{children:[e.jsx(t,{readOnly:!0}),e.jsx(t,{readOnly:!0}),e.jsx(t,{readOnly:!0}),e.jsx(t,{readOnly:!0})]}),e.jsx(S,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",legend:"Please one-time password",readOnly:!0,children:e.jsx(n,{})})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{invalid:!0}),e.jsxs(n,{children:[e.jsx(t,{invalid:!0}),e.jsx(t,{invalid:!0}),e.jsx(t,{invalid:!0}),e.jsx(t,{invalid:!0})]}),e.jsx(S,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",invalid:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),J=()=>{var f;const{control:a,formState:{errors:u},handleSubmit:c,watch:p}=Pn(),g=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(wn,{as:"form",onSubmit:c(g),children:[e.jsx(S,{errorMessage:(f=u.pinInput)==null?void 0:f.message,invalid:!!u.pinInput,legend:"Token",children:e.jsx(jn,{name:"pinInput",control:a,render:({field:m})=>e.jsx(n,{...m}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},U=()=>{var m;const a={pinInput:"5"},{control:u,formState:{errors:c},handleSubmit:p,watch:g}=Pn({defaultValues:a}),f=h=>console.log("submit:",h);return console.log("watch:",g()),e.jsxs(wn,{as:"form",onSubmit:p(f),children:[e.jsx(S,{errorMessage:(m=c.pinInput)==null?void 0:m.message,invalid:!!c.pinInput,legend:"Token",children:e.jsx(jn,{name:"pinInput",control:u,render:({field:h})=>e.jsx(n,{...h}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,he,xe;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(xe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Ie,Pe,je;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(je=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var Fe,be,Se;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(Se=(be=k.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ye,Ce,we;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(we=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var ve,Ve,ke;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(ke=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Me,_e,Oe;O.parameters={...O.parameters,docs:{...(Me=O.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(Oe=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source}}};var qe,De,Be;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput errorBorderColor="orange.500" invalid />
    </>;
}`,...(Be=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var Te,Ae,Ee;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Ee=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Re,ze,Le;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Le=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Ne,He,Je;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Je=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ue,Ge,We;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(We=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var Xe,$e,Ke;E.parameters={...E.parameters,docs:{...(Xe=E.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(Ke=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ze,Qe,Ye;R.parameters={...R.parameters,docs:{...(Ze=R.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ye=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var en,nn,rn;z.parameters={...z.parameters,docs:{...(en=z.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(rn=(nn=z.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var sn,tn,an;L.parameters={...L.parameters,docs:{...(sn=L.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <>
      <PinInput disabled />

      <PinInput>
        <PinInputField disabled />
        <PinInputField disabled />
        <PinInputField disabled />
        <PinInputField disabled />
      </PinInput>

      <Fieldset disabled errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(an=(tn=L.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var on,un,ln;N.parameters={...N.parameters,docs:{...(on=N.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <>
      <PinInput readOnly />

      <PinInput>
        <PinInputField readOnly />
        <PinInputField readOnly />
        <PinInputField readOnly />
        <PinInputField readOnly />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." legend="Please one-time password" readOnly>
        <PinInput />
      </Fieldset>
    </>;
}`,...(ln=(un=N.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var dn,cn,pn;H.parameters={...H.parameters,docs:{...(dn=H.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <>
      <PinInput invalid />

      <PinInput>
        <PinInputField invalid />
        <PinInputField invalid />
        <PinInputField invalid />
        <PinInputField invalid />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." invalid legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(pn=(cn=H.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var mn,gn,fn;J.parameters={...J.parameters,docs:{...(mn=J.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.pinInput?.message} invalid={!!errors.pinInput} legend="Token">
        <Controller name="pinInput" control={control} render={({
        field
      }) => <PinInput {...field} />} rules={{
        minLength: {
          message: "This is required.",
          value: 4
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fn=(gn=J.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var hn,xn,In;U.parameters={...U.parameters,docs:{...(hn=U.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.pinInput?.message} invalid={!!errors.pinInput} legend="Token">
        <Controller name="pinInput" control={control} render={({
        field
      }) => <PinInput {...field} />} rules={{
        minLength: {
          message: "This is required.",
          value: 4
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(In=(xn=U.parameters)==null?void 0:xn.docs)==null?void 0:In.source}}};const _r=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","disabled","readOnly","invalid","reactHookForm","reactHookFormWithDefaultValue"];export{_r as __namedExportsOrder,v as basic,R as customControl,A as customFields,E as customPlaceholder,Mr as default,L as disabled,z as disabledFocusManagement,H as invalid,T as maskingValue,J as reactHookForm,U as reactHookFormWithDefaultValue,N as readOnly,B as useOneTimePassword,q as withBorderColor,O as withDefaultValue,M as withFields,D as withOnComplete,V as withSize,_ as withType,k as withVariant};
