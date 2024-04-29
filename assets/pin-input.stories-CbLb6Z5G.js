import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as p}from"./index-CBqU2yxZ.js";import{u as fn,C as xn}from"./index.esm-BkhIekwp.js";import{u as qn}from"./index-DEC9cry9.js";import{c as On}from"./index-B4gSFzwB.js";import{u as jn,g as Bn,F as S}from"./form-control-1mH_ZNvi.js";import{k as Tn,R as En,t as _n,h as R,s as An,u as Pn,c as bn,a as zn}from"./factory-C06z1xU-.js";import{f as Fn}from"./forward-ref-DuAegr0M.js";import{a as Ln}from"./use-component-style-CZ1o4dYw.js";import{o as Nn}from"./theme-provider-CvYGGDsf.js";import{u as Sn}from"./loading-provider-Be7iT3ZK.js";import{V as Cn}from"./stack-PKnyx2CQ.js";import{B as yn}from"./button-Bx4P0CJP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CvMCbKV5.js";import"./Combination-DlzjZhkT.js";import"./loading-lRr_nN3q.js";import"./icon-CyBNnypl.js";import"./index-wE-5yW0t.js";import"./motion-CogyOzDV.js";import"./motion-JgkBPv6g.js";import"./index-_tcQm2Fk.js";import"./container-portal-BBLTjt9V.js";import"./index-BtM5VmRH.js";import"./use-ripple-CjJeY8ag.js";const de=t=>t==null?void 0:t.split(""),me=(t,a)=>(a==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(t),[Hn,Jn]=Tn({strict:!1,name:"PinInputContext"}),{DescendantsContextProvider:Un,useDescendants:Gn,useDescendant:Xn}=On(),n=Fn(({focusBorderColor:t,errorBorderColor:a,...c},l)=>{const[d,g]=Ln("PinInput",{focusBorderColor:t,errorBorderColor:a,...c});let{id:u,className:f,type:b="number",placeholder:ee="○",value:wn,defaultValue:vn,autoFocus:ne,manageFocus:C=!0,otp:se=!1,mask:re,onChange:W,onComplete:I,items:Dn=4,children:Vn,...y}=jn(Nn(g));u??(u=p.useId());const i=Gn(),[te,Z]=p.useState(!0),[oe,ae]=p.useState(-1);p.useEffect(()=>{if(!ne)return;const s=i.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[ne,i]);const[F,w]=qn({value:de(wn),defaultValue:de(vn)||[],onChange:s=>W==null?void 0:W(s.join(""))}),ie=p.useCallback(s=>{if(!te||!C)return;const r=i.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[i,te,C]),v=p.useCallback((s,r,h=!0)=>{var D;let m=[...F];m[r]=s,w(m),m=m.filter(Boolean),s!==""&&m.length===i.count()&&m.every(x=>x!=null&&x!=="")?(I==null||I(m.join("")),(D=i.value(r))==null||D.node.blur()):h&&ie(r)},[F,w,i,I,ie]),ue=p.useCallback((s,r)=>{let h=r;return s!=null&&s.length&&(s[0]===r.charAt(0)?h=r.charAt(1):s[0]===r.charAt(1)&&(h=r.charAt(0))),h},[]),Rn=p.useCallback(({index:s,...r})=>{const h=({target:x})=>{var ce;const j=x.value,V=F[s],P=ue(V,j);if(P===""){v("",s);return}if(j.length>2){if(!me(j,b))return;const Y=j.split("").filter(($n,Mn)=>Mn<i.count());w(Y),Y.length===i.count()&&(I==null||I(Y.join("")),(ce=i.value(s))==null||ce.node.blur())}else me(P,b)&&v(P,s),Z(!0)},m=({key:x,target:j})=>{var V;if(!(x!=="Backspace"||!C))if(j.value===""){const P=i.prevValue(s,void 0,!1);if(!P)return;v("",s-1,!1),(V=P.node)==null||V.focus(),Z(!0)}else Z(!1)},le=()=>ae(s),D=()=>ae(-1);return{inputMode:b==="number"?"numeric":"text",type:re?"password":b==="number"?"tel":"text",...En(y,Bn({omit:["aria-readonly"]})),..._n(r),id:`${u}-${s}`,value:F[s]||"",onChange:R(r.onChange,h),onKeyDown:R(r.onKeyDown,m),onFocus:R(r.onFocus,le),onBlur:R(r.onBlur,D),autoComplete:se?"one-time-code":"off",placeholder:oe===s&&!y.readOnly&&!r.readOnly?"":ee}},[i,oe,ue,u,C,re,I,se,ee,y,v,w,b,F]),kn={display:"flex",alignItems:"center",...d.container};let Q=An(Vn);if(!Q.length)for(let s=0;s<Dn;s++)Q.push(e.jsx(o,{},s));return e.jsx(Un,{value:i,children:e.jsx(Hn,{value:{getInputProps:Rn,styles:d},children:e.jsx(Pn.div,{ref:l,className:bn("ui-pin-input",f),...y,__css:kn,children:Q})})})}),o=Fn(({className:t,...a},c)=>{const{getInputProps:l,styles:d}=Jn(),{index:g,register:u}=Xn();a=jn(a);const f={...d.field};return e.jsx(Pn.input,{className:bn("ui-pin-input__field",t),...l({...a,ref:zn(u,c),index:g}),__css:f})}),bs={title:"Components / Forms / PinInput",component:n},k=()=>e.jsx(n,{}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500"})]}),_=()=>{const{page:t}=Sn();return e.jsx(n,{onComplete:()=>t.start({duration:5e3})})},A=()=>e.jsx(n,{otp:!0}),z=()=>e.jsx(n,{mask:!0}),L=()=>e.jsxs(n,{children:[e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{}),e.jsx(o,{})]}),N=()=>e.jsx(n,{placeholder:"💩"}),H=()=>{const{page:t}=Sn(),[a,c]=p.useState(""),l=()=>t.start({duration:5e3});return e.jsx(n,{value:a,onChange:c,onComplete:l})},J=()=>e.jsx(n,{manageFocus:!1}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(o,{isDisabled:!0}),e.jsx(o,{isDisabled:!0}),e.jsx(o,{isDisabled:!0}),e.jsx(o,{isDisabled:!0})]}),e.jsx(S,{isDisabled:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(o,{isReadOnly:!0}),e.jsx(o,{isReadOnly:!0}),e.jsx(o,{isReadOnly:!0}),e.jsx(o,{isReadOnly:!0})]}),e.jsx(S,{isReadOnly:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(o,{isInvalid:!0}),e.jsx(o,{isInvalid:!0}),e.jsx(o,{isInvalid:!0}),e.jsx(o,{isInvalid:!0})]}),e.jsx(S,{isInvalid:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e.jsx(n,{})})]}),$=()=>{var g;const{control:t,handleSubmit:a,watch:c,formState:{errors:l}}=fn(),d=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Cn,{as:"form",onSubmit:a(d),children:[e.jsx(S,{isInvalid:!!l.pinInput,label:"Token",errorMessage:(g=l.pinInput)==null?void 0:g.message,children:e.jsx(xn,{name:"pinInput",control:t,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:u})=>e.jsx(n,{...u})})}),e.jsx(yn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},K=()=>{var u;const t={pinInput:"5"},{control:a,handleSubmit:c,watch:l,formState:{errors:d}}=fn({defaultValues:t}),g=f=>console.log("submit:",f);return console.log("watch:",l()),e.jsxs(Cn,{as:"form",onSubmit:c(g),children:[e.jsx(S,{isInvalid:!!d.pinInput,label:"Token",errorMessage:(u=d.pinInput)==null?void 0:u.message,children:e.jsx(xn,{name:"pinInput",control:a,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:f})=>e.jsx(n,{...f})})}),e.jsx(yn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pe,ge,Ie;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(Ie=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};var he,fe,xe;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(xe=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var je,Pe,be;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(be=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var Fe,Se,Ce;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(Ce=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var ye,we,ve;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(ve=(we=B.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var De,Ve,Re;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(Re=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var ke,Me,qe;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput isInvalid errorBorderColor="orange.500" />
    </>;
}`,...(qe=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Oe,Be,Te;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Te=(Be=_.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,_e,Ae;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Ae=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var ze,Le,Ne;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Ne=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var He,Je,Ue;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Ue=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Ge,Xe,$e;N.parameters={...N.parameters,docs:{...(Ge=N.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...($e=(Xe=N.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var Ke,We,Ze;H.parameters={...H.parameters,docs:{...(Ke=H.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ze=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Ze.source}}};var Qe,Ye,en;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(en=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:en.source}}};var nn,sn,rn;U.parameters={...U.parameters,docs:{...(nn=U.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <FormControl isDisabled label="Please one-time password" helperMessage="Just sent you a one-time password to your e-mail address." errorMessage="one-time password is required.">
        <PinInput />
      </FormControl>
    </>;
}`,...(rn=(sn=U.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var tn,on,an;G.parameters={...G.parameters,docs:{...(tn=G.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <FormControl isReadOnly label="Please one-time password" helperMessage="Just sent you a one-time password to your e-mail address." errorMessage="one-time password is required.">
        <PinInput />
      </FormControl>
    </>;
}`,...(an=(on=G.parameters)==null?void 0:on.docs)==null?void 0:an.source}}};var un,ln,cn;X.parameters={...X.parameters,docs:{...(un=X.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  return <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <FormControl isInvalid label="Please one-time password" helperMessage="Just sent you a one-time password to your e-mail address." errorMessage="one-time password is required.">
        <PinInput />
      </FormControl>
    </>;
}`,...(cn=(ln=X.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var dn,mn,pn;$.parameters={...$.parameters,docs:{...(dn=$.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  type Data = {
    pinInput: string;
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.pinInput} label="Token" errorMessage={errors.pinInput?.message}>
        <Controller name="pinInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        },
        minLength: {
          value: 4,
          message: "This is required."
        }
      }} render={({
        field
      }) => <PinInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(pn=(mn=$.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var gn,In,hn;K.parameters={...K.parameters,docs:{...(gn=K.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  type Data = {
    pinInput: string;
  };
  const defaultValues: Data = {
    pinInput: "5"
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.pinInput} label="Token" errorMessage={errors.pinInput?.message}>
        <Controller name="pinInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        },
        minLength: {
          value: 4,
          message: "This is required."
        }
      }} render={({
        field
      }) => <PinInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(hn=(In=K.parameters)==null?void 0:In.docs)==null?void 0:hn.source}}};const Fs=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{Fs as __namedExportsOrder,k as basic,H as customControl,L as customFields,N as customPlaceholder,bs as default,J as disabledFocusManagement,U as isDisabled,X as isInvalid,G as isReadonly,z as maskingValue,$ as reactHookForm,K as reactHookFormWithDefaultValue,A as useOneTimePassword,E as withBorderColor,T as withDefaultValue,O as withFields,_ as withOnComplete,M as withSize,B as withType,q as withVariant};
