import{j as e}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{u as fn,C as xn}from"./index.esm-DXPXqkjk.js";import{u as On}from"./index-DRj4BzjX.js";import{c as Bn}from"./index-DqrMJzUo.js";import{u as Pn,f as Tn,F as b}from"./form-control-DNyBYrpi.js";import{o as En,W as An,y as zn,h as y,p as Nn,b as jn,c as bn,a as Ln}from"./factory-DkiAY2ad.js";import{f as Fn}from"./forward-ref-BWI-Phbn.js";import{a as Hn}from"./use-component-style-DQLsgxr3.js";import{o as Jn}from"./theme-provider-BQjm75QN.js";import{u as Cn}from"./loading-provider-B0U5BhOJ.js";import{V as Sn}from"./stack-CwhPiWwF.js";import{B as yn}from"./button-BG6kekf_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBo_IS7H.js";import"./Combination-IUp2vs9T.js";import"./loading-BAPtC7K8.js";import"./icon-A2vzomTu.js";import"./use-var-D2w0wtCZ.js";import"./factory-DmXgzuxm.js";import"./motion-I-9Hg3gW.js";import"./portal-CXB947RO.js";import"./index-Drt3gf4w.js";import"./use-ripple-VNo1fv7Z.js";const de=a=>a==null?void 0:a.split(""),me=(a,o)=>(o==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(a),[Un,Wn]=En({name:"PinInputContext",errorMessage:`PinInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PinInput />"`}),{DescendantsContextProvider:Gn,useDescendant:Xn,useDescendants:$n}=Bn(),n=Fn(({errorBorderColor:a,focusBorderColor:o,...m},g)=>{const[I,h]=Hn("PinInput",{errorBorderColor:a,focusBorderColor:o,...m});let{id:c,type:d="number",className:wn,autoFocus:$,children:vn,defaultValue:Vn,items:Dn=4,manageFocus:F=!0,mask:K,otp:Z=!1,placeholder:Q="○",value:kn,onChange:U,onComplete:f,...Y}=Pn(Jn(h));const{"aria-readonly":Kn,readOnly:ee,...ne}=An(Y,Tn),Mn=l.useId();c??(c=Mn);const i=$n(),[se,W]=l.useState(!0),[re,te]=l.useState(-1);l.useEffect(()=>{if(!$)return;const s=i.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[$,i]);const[x,C]=On({defaultValue:de(Vn)||[],value:de(kn),onChange:s=>U==null?void 0:U(s.join(""))}),ae=l.useCallback(s=>{if(!se||!F)return;const r=i.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[i,se,F]),P=l.useCallback((s,r,u=!0)=>{var j;let p=[...x];p[r]=s,C(p),p=p.filter(Boolean),s!==""&&p.length===i.count()?(f==null||f(p.join("")),(j=i.value(r))==null||j.node.blur()):u&&ae(r)},[x,C,i,f,ae]),oe=l.useCallback((s,r)=>{let u=r;return s!=null&&s.length&&(s.startsWith(r.charAt(0))?u=r.charAt(1):s.startsWith(r.charAt(1))&&(u=r.charAt(0))),u},[]),ie=l.useCallback(s=>({target:r})=>{var j;const u=r.value,p=x[s],S=oe(p,u);if(S===""){P("",s);return}if(u.length>2){if(!me(u,d))return;const X=u.split("").filter((Zn,qn)=>qn<i.count());C(X),X.length===i.count()&&(f==null||f(X.join("")),(j=i.value(s))==null||j.node.blur())}else me(S,d)&&P(S,s),W(!0)},[i,oe,f,P,C,d,x]),ue=l.useCallback(s=>({key:r,target:u})=>{if(!(r!=="Backspace"||!F))if(u.value===""){const p=i.prevValue(s,void 0,!1);if(!p)return;P("",s-1,!1),p.node.focus(),W(!0)}else W(!1)},[i,F,P]),le=l.useCallback(s=>()=>te(s),[]),ce=l.useCallback(()=>te(-1),[]),Rn=l.useCallback(({index:s,...r})=>({type:K?"password":d==="number"?"tel":"text",inputMode:d==="number"?"numeric":"text",...ne,...zn(r),id:`${c}-${s}`,autoComplete:Z?"one-time-code":"off",placeholder:re===s&&!ee&&!r.readOnly?"":Q,value:x[s]||"",onBlur:y(r.onBlur,ce),onChange:y(r.onChange,ie(s)),onFocus:y(r.onFocus,le(s)),onKeyDown:y(r.onKeyDown,ue(s))}),[d,K,ne,c,x,ie,ue,le,ce,Z,re,ee,Q]),_n={alignItems:"center",display:"flex",...I.container};let G=Nn(vn);if(!G.length)for(let s=0;s<Dn;s++)G.push(e.jsx(t,{},s));return e.jsx(Gn,{value:i,children:e.jsx(Un,{value:{styles:I,getInputProps:Rn},children:e.jsx(jn.div,{ref:g,className:bn("ui-pin-input",wn),__css:_n,...Y,children:G})})})});n.displayName="PinInput";n.__ui__="PinInput";const t=Fn(({className:a,...o},m)=>{const{styles:g,getInputProps:I}=Wn(),{index:h,register:c}=Xn();o=Pn(o);const d={...g.field};return e.jsx(jn.input,{className:bn("ui-pin-input__field",a),...I({...o,ref:Ln(c,m),index:h}),__css:d})});t.displayName="PinInputField";t.__ui__="PinInputField";const Fs={component:n,title:"Components / Forms / PinInput"},w=()=>e.jsx(n,{}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0})]}),_=()=>{const{page:a}=Cn();return e.jsx(n,{onComplete:()=>a.start({duration:5e3})})},q=()=>e.jsx(n,{otp:!0}),O=()=>e.jsx(n,{mask:!0}),B=()=>e.jsxs(n,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]}),T=()=>e.jsx(n,{placeholder:"💩"}),E=()=>{const{page:a}=Cn(),[o,m]=l.useState(""),g=()=>a.start({duration:5e3});return e.jsx(n,{value:o,onChange:m,onComplete:g})},A=()=>e.jsx(n,{manageFocus:!1}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0})]}),e.jsx(b,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isDisabled:!0,label:"Please one-time password",children:e.jsx(n,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0})]}),e.jsx(b,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isReadOnly:!0,label:"Please one-time password",children:e.jsx(n,{})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0})]}),e.jsx(b,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isInvalid:!0,label:"Please one-time password",children:e.jsx(n,{})})]}),H=()=>{var h;const{control:a,formState:{errors:o},handleSubmit:m,watch:g}=fn(),I=c=>console.log("submit:",c);return console.log("watch:",g()),e.jsxs(Sn,{as:"form",onSubmit:m(I),children:[e.jsx(b,{errorMessage:(h=o.pinInput)==null?void 0:h.message,isInvalid:!!o.pinInput,label:"Token",children:e.jsx(xn,{name:"pinInput",control:a,render:({field:c})=>e.jsx(n,{...c}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(yn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},J=()=>{var c;const a={pinInput:"5"},{control:o,formState:{errors:m},handleSubmit:g,watch:I}=fn({defaultValues:a}),h=d=>console.log("submit:",d);return console.log("watch:",I()),e.jsxs(Sn,{as:"form",onSubmit:g(h),children:[e.jsx(b,{errorMessage:(c=m.pinInput)==null?void 0:c.message,isInvalid:!!m.pinInput,label:"Token",children:e.jsx(xn,{name:"pinInput",control:o,render:({field:d})=>e.jsx(n,{...d}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(yn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pe,ge,Ie;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(Ie=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};var he,fe,xe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(xe=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Pe,je,be;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(be=(je=V.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Fe,Ce,Se;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(Se=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ye,we,ve;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(ve=(we=k.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Ve,De,ke;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(ke=(De=M.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Me,Re,_e;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput errorBorderColor="orange.500" isInvalid />
    </>;
}`,...(_e=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var qe,Oe,Be;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Be=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Te,Ee,Ae;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Ae=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var ze,Ne,Le;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Le=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var He,Je,Ue;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Ue=(Je=B.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var We,Ge,Xe;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(Xe=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var $e,Ke,Ze;E.parameters={...E.parameters,docs:{...($e=E.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ze=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var Qe,Ye,en;A.parameters={...A.parameters,docs:{...(Qe=A.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(en=(Ye=A.parameters)==null?void 0:Ye.docs)==null?void 0:en.source}}};var nn,sn,rn;z.parameters={...z.parameters,docs:{...(nn=z.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(rn=(sn=z.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var tn,an,on;N.parameters={...N.parameters,docs:{...(tn=N.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(an=N.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var un,ln,cn;L.parameters={...L.parameters,docs:{...(un=L.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(cn=(ln=L.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var dn,mn,pn;H.parameters={...H.parameters,docs:{...(dn=H.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(pn=(mn=H.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var gn,In,hn;J.parameters={...J.parameters,docs:{...(gn=J.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(hn=(In=J.parameters)==null?void 0:In.docs)==null?void 0:hn.source}}};const Cs=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{Cs as __namedExportsOrder,w as basic,E as customControl,B as customFields,T as customPlaceholder,Fs as default,A as disabledFocusManagement,z as isDisabled,L as isInvalid,N as isReadonly,O as maskingValue,H as reactHookForm,J as reactHookFormWithDefaultValue,q as useOneTimePassword,R as withBorderColor,M as withDefaultValue,D as withFields,_ as withOnComplete,v as withSize,k as withType,V as withVariant};
