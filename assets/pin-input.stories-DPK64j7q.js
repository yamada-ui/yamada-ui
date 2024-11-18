import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as xn,C as Pn}from"./index.esm-CEdvtQ_U.js";import{u as Tn}from"./index-5_K1p_ZM.js";import{c as En}from"./index-LBOEXu_2.js";import{c as jn,f as zn,d as F}from"./form-control-BcwAaE7G.js";import{f as bn}from"./forward-ref-D13m8o2p.js";import{a as Ln}from"./use-component-style-CYL4T5vM.js";import{o as Nn}from"./theme-provider-Bsm-0rKu.js";import{Y as Hn,h as y,A as Jn,q as Un,p as Gn,a as Fn,b as Wn,c as Cn}from"./factory-BPYpkDor.js";import{u as Sn}from"./loading-provider-BNFf8qfE.js";import{V as yn}from"./stack-D7aiW26x.js";import{B as wn}from"./button-BN1WQcNU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C5Gv9kmK.js";import"./Combination-__ZWiWyr.js";import"./loading-Bd8HLEYZ.js";import"./icon-DT11Nal8.js";import"./use-var-DoLXLJEg.js";import"./index-2WvfircW.js";import"./proxy-DwHv-pG9.js";import"./portal-Bwu6AgAB.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-BiXCYStP.js";import"./use-ripple-EznoQwCc.js";const me=o=>o==null?void 0:o.split(""),pe=(o,u)=>(u==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(o),[Xn,$n]=Gn({name:"PinInputContext",errorMessage:`PinInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PinInput />"`}),{DescendantsContextProvider:Kn,useDescendant:Yn,useDescendants:Zn}=En(),n=bn(({errorBorderColor:o,focusBorderColor:u,...p},g)=>{const[I,f]=Ln("PinInput",{errorBorderColor:o,focusBorderColor:u,...p});let{id:d,type:m="number",className:vn,autoFocus:Z,children:Vn,defaultValue:Dn,items:kn=4,manageFocus:C=!0,mask:Q,otp:ee=!1,placeholder:ne="○",value:Rn,onChange:U,onComplete:h,...Mn}=jn(Nn(f));const[{"aria-readonly":Qn,disabled:se,readOnly:G,...W},_n]=Hn(Mn,zn),qn=l.useId();d??(d=qn);const a=Zn(),[re,X]=l.useState(!0),[te,oe]=l.useState(-1);l.useEffect(()=>{if(!Z)return;const s=a.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[Z,a]);const[P,S]=Tn({defaultValue:me(Dn)||[],value:me(Rn),onChange:s=>U==null?void 0:U(s.join(""))}),ae=l.useCallback(s=>{if(!re||!C)return;const r=a.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[a,re,C]),$=l.useCallback((s,r)=>{const i=s==="next"?a.nextValue(r,void 0,!1):a.prevValue(r,void 0,!1);if(!i)return;const c=i.node.value.length;requestAnimationFrame(()=>{i.node.focus(),i.node.setSelectionRange(0,c)})},[a]),j=l.useCallback((s,r,i=!0)=>{var b;let c=[...P];c[r]=s,S(c),c=c.filter(Boolean),s!==""&&c.length===a.count()?(h==null||h(c.join("")),(b=a.value(r))==null||b.node.blur()):i&&ae(r)},[P,S,a,h,ae]),ie=l.useCallback((s,r)=>{let i=r;return s!=null&&s.length&&(s.startsWith(r.charAt(0))?i=r.charAt(1):s.startsWith(r.charAt(1))&&(i=r.charAt(0))),i},[]),ue=l.useCallback(s=>({target:r})=>{var b;const i=r.value,c=P[s],x=ie(c,i);if(x===""){j("",s);return}if(i.length>2){if(!pe(i,m))return;const Y=i.split("").filter((es,Bn)=>Bn<a.count());S(Y),Y.length===a.count()&&(h==null||h(Y.join("")),(b=a.value(s))==null||b.node.blur())}else pe(x,m)&&j(x,s),X(!0)},[a,ie,h,j,S,m,P]),le=l.useCallback(s=>r=>{if(!C)return;const c={ArrowLeft:()=>{r.preventDefault(),$("prev",s)},ArrowRight:()=>{r.preventDefault(),$("next",s)},Backspace:()=>{if(r.target.value===""){const x=a.prevValue(s,void 0,!1);if(!x)return;j("",s-1,!1),x.node.focus(),X(!0)}else X(!1)}}[r.key];c&&c()},[a,$,C,j]),ce=l.useCallback(s=>()=>oe(s),[]),de=l.useCallback(()=>oe(-1),[]),On=l.useCallback(({index:s,...r})=>({type:Q?"password":m==="number"?"tel":"text",disabled:se,inputMode:m==="number"?"numeric":"text",readOnly:G,...W,...Jn(r),id:`${d}-${s}`,autoComplete:ee?"one-time-code":"off",placeholder:te===s&&!G&&!r.readOnly?"":ne,value:P[s]||"",onBlur:y(r.onBlur,de),onChange:y(r.onChange,ue(s)),onFocus:y(r.onFocus,ce(s)),onKeyDown:y(r.onKeyDown,le(s))}),[m,Q,W,d,P,ue,le,ce,de,ee,te,se,G,ne]),An={alignItems:"center",display:"flex",...I.container};let K=Un(Vn);if(!K.length)for(let s=0;s<kn;s++)K.push(e.jsx(t,{},s));return e.jsx(Kn,{value:a,children:e.jsx(Xn,{value:{styles:I,getInputProps:On},children:e.jsx(Fn.div,{ref:g,className:Cn("ui-pin-input",vn),role:"group",__css:An,...W,..._n,children:K})})})});n.displayName="PinInput";n.__ui__="PinInput";const t=bn(({className:o,...u},p)=>{const{styles:g,getInputProps:I}=$n(),{index:f,register:d}=Yn();u=jn(u);const m={...g.field};return e.jsx(Fn.input,{className:Cn("ui-pin-input__field",o),...I({...u,ref:Wn(d,p),index:f}),__css:m})});t.displayName="PinInputField";t.__ui__="PinInputField";const vs={component:n,title:"Components / Forms / PinInput"},w=()=>e.jsx(n,{}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0})]}),_=()=>{const{page:o}=Sn();return e.jsx(n,{onComplete:()=>o.start({duration:5e3})})},q=()=>e.jsx(n,{otp:!0}),O=()=>e.jsx(n,{mask:!0}),A=()=>e.jsxs(n,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]}),B=()=>e.jsx(n,{placeholder:"💩"}),T=()=>{const{page:o}=Sn(),[u,p]=l.useState(""),g=()=>o.start({duration:5e3});return e.jsx(n,{value:u,onChange:p,onComplete:g})},E=()=>e.jsx(n,{manageFocus:!1}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0})]}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isDisabled:!0,label:"Please one-time password",children:e.jsx(n,{})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0})]}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isReadOnly:!0,label:"Please one-time password",children:e.jsx(n,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0})]}),e.jsx(F,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isInvalid:!0,label:"Please one-time password",children:e.jsx(n,{})})]}),H=()=>{var f;const{control:o,formState:{errors:u},handleSubmit:p,watch:g}=xn(),I=d=>console.log("submit:",d);return console.log("watch:",g()),e.jsxs(yn,{as:"form",onSubmit:p(I),children:[e.jsx(F,{errorMessage:(f=u.pinInput)==null?void 0:f.message,isInvalid:!!u.pinInput,label:"Token",children:e.jsx(Pn,{name:"pinInput",control:o,render:({field:d})=>e.jsx(n,{...d}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(wn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},J=()=>{var d;const o={pinInput:"5"},{control:u,formState:{errors:p},handleSubmit:g,watch:I}=xn({defaultValues:o}),f=m=>console.log("submit:",m);return console.log("watch:",I()),e.jsxs(yn,{as:"form",onSubmit:g(f),children:[e.jsx(F,{errorMessage:(d=p.pinInput)==null?void 0:d.message,isInvalid:!!p.pinInput,label:"Token",children:e.jsx(Pn,{name:"pinInput",control:u,render:({field:m})=>e.jsx(n,{...m}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(wn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ge,Ie,fe;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(fe=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:fe.source}}};var he,xe,Pe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(Pe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var je,be,Fe;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(Fe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:Fe.source}}};var Ce,Se,ye;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(ye=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var we,ve,Ve;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(Ve=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:Ve.source}}};var De,ke,Re;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(Re=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Me,_e,qe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput errorBorderColor="orange.500" isInvalid />
    </>;
}`,...(qe=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Oe,Ae,Be;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Be=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var Te,Ee,ze;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(ze=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:ze.source}}};var Le,Ne,He;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(He=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Je,Ue,Ge;A.parameters={...A.parameters,docs:{...(Je=A.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Ge=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var We,Xe,$e;B.parameters={...B.parameters,docs:{...(We=B.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...($e=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var Ke,Ye,Ze;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ze=(Ye=T.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Qe,en,nn;E.parameters={...E.parameters,docs:{...(Qe=E.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(nn=(en=E.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,rn,tn;z.parameters={...z.parameters,docs:{...(sn=z.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <FormControl errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isDisabled label="Please one-time password">
        <PinInput />
      </FormControl>
    </>;
}`,...(tn=(rn=z.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var on,an,un;L.parameters={...L.parameters,docs:{...(on=L.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <FormControl errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isReadOnly label="Please one-time password">
        <PinInput />
      </FormControl>
    </>;
}`,...(un=(an=L.parameters)==null?void 0:an.docs)==null?void 0:un.source}}};var ln,cn,dn;N.parameters={...N.parameters,docs:{...(ln=N.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <FormControl errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isInvalid label="Please one-time password">
        <PinInput />
      </FormControl>
    </>;
}`,...(dn=(cn=N.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var mn,pn,gn;H.parameters={...H.parameters,docs:{...(mn=H.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.pinInput?.message} isInvalid={!!errors.pinInput} label="Token">
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
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(gn=(pn=H.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var In,fn,hn;J.parameters={...J.parameters,docs:{...(In=J.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.pinInput?.message} isInvalid={!!errors.pinInput} label="Token">
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
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(hn=(fn=J.parameters)==null?void 0:fn.docs)==null?void 0:hn.source}}};const Vs=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{Vs as __namedExportsOrder,w as basic,T as customControl,A as customFields,B as customPlaceholder,vs as default,E as disabledFocusManagement,z as isDisabled,N as isInvalid,L as isReadonly,O as maskingValue,H as reactHookForm,J as reactHookFormWithDefaultValue,q as useOneTimePassword,M as withBorderColor,R as withDefaultValue,D as withFields,_ as withOnComplete,v as withSize,k as withType,V as withVariant};
