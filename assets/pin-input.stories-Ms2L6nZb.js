import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as xn,C as Pn}from"./index.esm-Dl1kyd6X.js";import{u as Tn}from"./index-DKQLNlvR.js";import{c as En}from"./index-hBuKIhm7.js";import{u as jn,f as Ln}from"./form-control-zj-lY-eQ.js";import{A as zn,L as Nn,G as Hn,h as C,g as Jn,b as Fn,c as bn,a as Gn}from"./factory-Nur_zO5a.js";import{f as Sn}from"./forward-ref-D13m8o2p.js";import{a as Un}from"./use-component-style-DXYrx7jC.js";import{o as Wn}from"./theme-provider-BsBO7Bt7.js";import{u as yn}from"./loading-provider-Cgn_kgsf.js";import{F as b}from"./fieldset-BjUByqVp.js";import{V as Cn}from"./stack-C0yA_Fgo.js";import{B as wn}from"./button-CCbGPPx6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BNtkqexU.js";import"./Combination-CkmEMpJG.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-var-BmU0CMcq.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./portal-BYArVHbV.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-C7oui4wX.js";import"./visually-hidden-Dg9vUrmA.js";import"./use-ripple-D3zgM-CO.js";const pe=a=>a==null?void 0:a.split(""),me=(a,u)=>(u==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(a),[Xn,$n]=zn({name:"PinInputContext",errorMessage:`PinInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PinInput />"`}),{DescendantsContextProvider:Kn,useDescendant:Zn,useDescendants:Qn}=En(),n=Sn(({errorBorderColor:a,focusBorderColor:u,...m},g)=>{const[f,I]=Un("PinInput",{errorBorderColor:a,focusBorderColor:u,...m});let{id:d,type:p="number",className:vn,autoFocus:Q,children:Vn,defaultValue:Dn,items:kn=4,manageFocus:S=!0,mask:Y,otp:ee=!1,placeholder:ne="○",value:Rn,onChange:G,onComplete:h,...Mn}=jn(Wn(I));const[{"aria-readonly":Yn,disabled:se,readOnly:U,...W},_n]=Nn(Mn,Ln),qn=l.useId();d??(d=qn);const o=Qn(),[re,X]=l.useState(!0),[te,ae]=l.useState(-1);l.useEffect(()=>{if(!Q)return;const s=o.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[Q,o]);const[P,y]=Tn({defaultValue:pe(Dn)||[],value:pe(Rn),onChange:s=>G==null?void 0:G(s.join(""))}),oe=l.useCallback(s=>{if(!re||!S)return;const r=o.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[o,re,S]),$=l.useCallback((s,r)=>{const i=s==="next"?o.nextValue(r,void 0,!1):o.prevValue(r,void 0,!1);if(!i)return;const c=i.node.value.length;requestAnimationFrame(()=>{i.node.focus(),i.node.setSelectionRange(0,c)})},[o]),j=l.useCallback((s,r,i=!0)=>{var F;let c=[...P];c[r]=s,y(c),c=c.filter(Boolean),s!==""&&c.length===o.count()?(h==null||h(c.join("")),(F=o.value(r))==null||F.node.blur()):i&&oe(r)},[P,y,o,h,oe]),ie=l.useCallback((s,r)=>{let i=r;return s!=null&&s.length&&(s.startsWith(r.charAt(0))?i=r.charAt(1):s.startsWith(r.charAt(1))&&(i=r.charAt(0))),i},[]),ue=l.useCallback(s=>({target:r})=>{var F;const i=r.value,c=P[s],x=ie(c,i);if(x===""){j("",s);return}if(i.length>2){if(!me(i,p))return;const Z=i.split("").filter((es,Bn)=>Bn<o.count());y(Z),Z.length===o.count()&&(h==null||h(Z.join("")),(F=o.value(s))==null||F.node.blur())}else me(x,p)&&j(x,s),X(!0)},[o,ie,h,j,y,p,P]),le=l.useCallback(s=>r=>{if(!S)return;const c={ArrowLeft:()=>{r.preventDefault(),$("prev",s)},ArrowRight:()=>{r.preventDefault(),$("next",s)},Backspace:()=>{if(r.target.value===""){const x=o.prevValue(s,void 0,!1);if(!x)return;j("",s-1,!1),x.node.focus(),X(!0)}else X(!1)}}[r.key];c&&c()},[o,$,S,j]),ce=l.useCallback(s=>()=>ae(s),[]),de=l.useCallback(()=>ae(-1),[]),On=l.useCallback(({index:s,...r})=>({type:Y?"password":p==="number"?"tel":"text",disabled:se,inputMode:p==="number"?"numeric":"text",readOnly:U,...W,...Hn(r),id:`${d}-${s}`,autoComplete:ee?"one-time-code":"off",placeholder:te===s&&!U&&!r.readOnly?"":ne,value:P[s]||"",onBlur:C(r.onBlur,de),onChange:C(r.onChange,ue(s)),onFocus:C(r.onFocus,ce(s)),onKeyDown:C(r.onKeyDown,le(s))}),[p,Y,W,d,P,ue,le,ce,de,ee,te,se,U,ne]),An={alignItems:"center",display:"flex",...f.container};let K=Jn(Vn);if(!K.length)for(let s=0;s<kn;s++)K.push(e.jsx(t,{},s));return e.jsx(Kn,{value:o,children:e.jsx(Xn,{value:{styles:f,getInputProps:On},children:e.jsx(Fn.div,{ref:g,className:bn("ui-pin-input",vn),role:"group",__css:An,...W,..._n,children:K})})})});n.displayName="PinInput";n.__ui__="PinInput";const t=Sn(({className:a,...u},m)=>{const{styles:g,getInputProps:f}=$n(),{index:I,register:d}=Zn();u=jn(u);const p={...g.field};return e.jsx(Fn.input,{className:bn("ui-pin-input__field",a),...f({...u,ref:Gn(d,m),index:I}),__css:p})});t.displayName="PinInputField";t.__ui__="PinInputField";const Ds={component:n,title:"Components / Forms / PinInput"},w=()=>e.jsx(n,{}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0})]}),_=()=>{const{page:a}=yn();return e.jsx(n,{onComplete:()=>a.start({duration:5e3})})},q=()=>e.jsx(n,{otp:!0}),O=()=>e.jsx(n,{mask:!0}),A=()=>e.jsxs(n,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]}),B=()=>e.jsx(n,{placeholder:"💩"}),T=()=>{const{page:a}=yn(),[u,m]=l.useState(""),g=()=>a.start({duration:5e3});return e.jsx(n,{value:u,onChange:m,onComplete:g})},E=()=>e.jsx(n,{manageFocus:!1}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0})]}),e.jsx(b,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isDisabled:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0})]}),e.jsx(b,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isReadOnly:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0})]}),e.jsx(b,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isInvalid:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),H=()=>{var I;const{control:a,formState:{errors:u},handleSubmit:m,watch:g}=xn(),f=d=>console.log("submit:",d);return console.log("watch:",g()),e.jsxs(Cn,{as:"form",onSubmit:m(f),children:[e.jsx(b,{errorMessage:(I=u.pinInput)==null?void 0:I.message,isInvalid:!!u.pinInput,legend:"Token",children:e.jsx(Pn,{name:"pinInput",control:a,render:({field:d})=>e.jsx(n,{...d}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(wn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},J=()=>{var d;const a={pinInput:"5"},{control:u,formState:{errors:m},handleSubmit:g,watch:f}=xn({defaultValues:a}),I=p=>console.log("submit:",p);return console.log("watch:",f()),e.jsxs(Cn,{as:"form",onSubmit:g(I),children:[e.jsx(b,{errorMessage:(d=m.pinInput)==null?void 0:d.message,isInvalid:!!m.pinInput,legend:"Token",children:e.jsx(Pn,{name:"pinInput",control:u,render:({field:p})=>e.jsx(n,{...p}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(wn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ge,fe,Ie;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(Ie=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var he,xe,Pe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(Pe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var je,Fe,be;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(be=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:be.source}}};var Se,ye,Ce;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(Ce=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var we,ve,Ve;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Be=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var Te,Ee,Le;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Le=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var ze,Ne,He;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(He=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};var Je,Ge,Ue;A.parameters={...A.parameters,docs:{...(Je=A.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Ue=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var We,Xe,$e;B.parameters={...B.parameters,docs:{...(We=B.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...($e=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var Ke,Ze,Qe;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Qe=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Ye,en,nn;E.parameters={...E.parameters,docs:{...(Ye=E.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(nn=(en=E.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,rn,tn;L.parameters={...L.parameters,docs:{...(sn=L.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isDisabled legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(tn=(rn=L.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var an,on,un;z.parameters={...z.parameters,docs:{...(an=z.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isReadOnly legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(un=(on=z.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var ln,cn,dn;N.parameters={...N.parameters,docs:{...(ln=N.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isInvalid legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(dn=(cn=N.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var pn,mn,gn;H.parameters={...H.parameters,docs:{...(pn=H.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.pinInput?.message} isInvalid={!!errors.pinInput} legend="Token">
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
}`,...(gn=(mn=H.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var fn,In,hn;J.parameters={...J.parameters,docs:{...(fn=J.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.pinInput?.message} isInvalid={!!errors.pinInput} legend="Token">
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
}`,...(hn=(In=J.parameters)==null?void 0:In.docs)==null?void 0:hn.source}}};const ks=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{ks as __namedExportsOrder,w as basic,T as customControl,A as customFields,B as customPlaceholder,Ds as default,E as disabledFocusManagement,L as isDisabled,N as isInvalid,z as isReadonly,O as maskingValue,H as reactHookForm,J as reactHookFormWithDefaultValue,q as useOneTimePassword,M as withBorderColor,R as withDefaultValue,D as withFields,_ as withOnComplete,v as withSize,k as withType,V as withVariant};
