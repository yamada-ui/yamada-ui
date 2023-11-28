import{a as e,j as a,F as g}from"./jsx-runtime-b08f8875.js";import{r as I}from"./index-8ee6c85d.js";import{u as bn,C as Sn}from"./index.esm-b68ff52f.js";import{u as Tn}from"./index-fb6972ca.js";import{c as En}from"./index-a49dfc79.js";import{u as Cn,f as _n,F as v}from"./form-control-8e97ab42.js";import{k as An,D as zn,o as Ln,t as q,p as Nn,d as Fn,e as yn,x as Hn}from"./factory-7bddb6ec.js";import{f as wn}from"./forward-ref-cf7188bd.js";import{a as jn}from"./use-component-style-873f0974.js";import{o as Jn}from"./theme-provider-9d5cd644.js";import{u as vn}from"./loading-provider-62245a6f.js";import{V as Dn}from"./stack-6e2bfede.js";import{B as Vn}from"./button-1f60b64e.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-c5ef9a9d.js";import"./component-911fdb88.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";import"./motion-37a66323.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-cbcbc808.js";import"./index-8bf7f4ad.js";const pe=s=>s==null?void 0:s.split(""),Ie=(s,i)=>(i==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(s),[Un,Gn]=An({strict:!1,name:"PinInputContext"}),{DescendantsContextProvider:Xn,useDescendants:$n,useDescendant:Kn}=En(),n=wn(({focusBorderColor:s,errorBorderColor:i,...c},d)=>{const[m,h]=jn("PinInput",{focusBorderColor:s,errorBorderColor:i,...c});let{id:l,className:b,type:y="number",placeholder:re="○",value:kn,defaultValue:Mn,autoFocus:te,manageFocus:D=!0,otp:se=!1,mask:oe,onChange:Q,onComplete:f,items:Rn=4,children:xn,...V}=Cn(Jn(h));l??(l=I.useId());const u=$n(),[ae,Y]=I.useState(!0),[ie,ue]=I.useState(-1);I.useEffect(()=>{if(!te)return;const r=u.firstValue();r&&requestAnimationFrame(()=>r.node.focus())},[te,u]);const[w,k]=Tn({value:pe(kn),defaultValue:pe(Mn)||[],onChange:r=>Q==null?void 0:Q(r.join(""))}),le=I.useCallback(r=>{if(!ae||!D)return;const t=u.nextValue(r,void 0,!1);t&&requestAnimationFrame(()=>t.node.focus())},[u,ae,D]),M=I.useCallback((r,t,P=!0)=>{var R;let p=[...w];p[t]=r,k(p),p=p.filter(Boolean),r!==""&&p.length===u.count()&&p.every(S=>S!=null&&S!=="")?(f==null||f(p.join("")),(R=u.value(t))==null||R.node.blur()):P&&le(t)},[w,k,u,f,le]),ce=I.useCallback((r,t)=>{let P=t;return r!=null&&r.length&&(r[0]===t.charAt(0)?P=t.charAt(1):r[0]===t.charAt(1)&&(P=t.charAt(0))),P},[]),qn=I.useCallback(({index:r,...t})=>{const P=({target:S})=>{var me;const C=S.value,x=w[r],F=ce(x,C);if(F===""){M("",r);return}if(C.length>2){if(!Ie(C,y))return;const ne=C.split("").filter((Wn,Bn)=>Bn<u.count());k(ne),ne.length===u.count()&&(f==null||f(ne.join("")),(me=u.value(r))==null||me.node.blur())}else Ie(F,y)&&M(F,r),Y(!0)},p=({key:S,target:C})=>{var x;if(!(S!=="Backspace"||!D))if(C.value===""){const F=u.prevValue(r,void 0,!1);if(!F)return;M("",r-1,!1),(x=F.node)==null||x.focus(),Y(!0)}else Y(!1)},de=()=>ue(r),R=()=>ue(-1);return{inputMode:y==="number"?"numeric":"text",type:oe?"password":y==="number"?"tel":"text",...zn(V,_n),...Ln(t),id:`${l}-${r}`,value:w[r]||"",onChange:q(t.onChange,P),onKeyDown:q(t.onKeyDown,p),onFocus:q(t.onFocus,de),onBlur:q(t.onBlur,R),autoComplete:se?"one-time-code":"off",placeholder:ie===r&&!V.readOnly&&!t.readOnly?"":re}},[u,ie,ce,l,D,oe,f,se,re,V,M,k,y,w]),On={display:"flex",alignItems:"center",...m.container};let ee=Nn(xn);if(!ee.length)for(let r=0;r<Rn;r++)ee.push(e(o,{},r));return e(Xn,{value:u,children:e(Un,{value:{getInputProps:qn,styles:m},children:e(Fn.div,{ref:d,className:yn("ui-pin-input",b),...V,__css:On,children:ee})})})}),o=wn(({className:s,...i},c)=>{const{getInputProps:d,styles:m}=Gn(),{index:h,register:l}=Kn();i=Cn(i);const b={...m.field};return e(Fn.input,{className:yn("ui-pin-input__field",s),...d({...i,ref:Hn(l,c),index:h}),__css:b})}),wr={title:"Components / Forms / PinInput",component:n},O=()=>e(n,{}),B=()=>a(g,{children:[e(n,{size:"xs"}),e(n,{size:"sm"}),e(n,{size:"md"}),e(n,{size:"lg"})]}),T=()=>a(g,{children:[e(n,{variant:"outline"}),e(n,{variant:"filled"}),e(n,{variant:"flushed"}),e(n,{variant:"unstyled"})]}),E=()=>a(g,{children:[e(n,{items:3}),e(n,{items:4}),e(n,{items:5}),e(n,{items:6})]}),_=()=>a(g,{children:[e(n,{}),e(n,{type:"alphanumeric"})]}),A=()=>a(g,{children:[e(n,{defaultValue:"1234"}),e(n,{defaultValue:"123"})]}),z=()=>a(g,{children:[e(n,{}),e(n,{focusBorderColor:"green.500"}),e(n,{isInvalid:!0,errorBorderColor:"orange.500"})]}),L=()=>{const{page:s}=vn();return e(n,{onComplete:()=>s.start({duration:5e3})})},N=()=>e(n,{otp:!0}),H=()=>e(n,{mask:!0}),j=()=>a(n,{children:[e(o,{}),e(o,{}),e(o,{}),e(o,{})]}),J=()=>e(n,{placeholder:"💩"}),U=()=>{const{page:s}=vn(),[i,c]=I.useState("");return e(n,{value:i,onChange:c,onComplete:()=>s.start({duration:5e3})})},G=()=>e(n,{manageFocus:!1}),X=()=>a(g,{children:[e(n,{isDisabled:!0}),a(n,{children:[e(o,{isDisabled:!0}),e(o,{isDisabled:!0}),e(o,{isDisabled:!0}),e(o,{isDisabled:!0})]}),e(v,{isDisabled:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),$=()=>a(g,{children:[e(n,{isReadOnly:!0}),a(n,{children:[e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0})]}),e(v,{isReadOnly:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),K=()=>a(g,{children:[e(n,{isInvalid:!0}),a(n,{children:[e(o,{isInvalid:!0}),e(o,{isInvalid:!0}),e(o,{isInvalid:!0}),e(o,{isInvalid:!0})]}),e(v,{isInvalid:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),W=()=>{var h;const{control:s,handleSubmit:i,watch:c,formState:{errors:d}}=bn(),m=l=>console.log("submit:",l);return console.log("watch:",c()),a(Dn,{as:"form",onSubmit:i(m),children:[e(v,{isInvalid:!!d.pinInput,label:"Token",errorMessage:(h=d.pinInput)==null?void 0:h.message,children:e(Sn,{name:"pinInput",control:s,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:l})=>e(n,{...l})})}),e(Vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Z=()=>{var l;const s={pinInput:"5"},{control:i,handleSubmit:c,watch:d,formState:{errors:m}}=bn({defaultValues:s}),h=b=>console.log("submit:",b);return console.log("watch:",d()),a(Dn,{as:"form",onSubmit:c(h),children:[e(v,{isInvalid:!!m.pinInput,label:"Token",errorMessage:(l=m.pinInput)==null?void 0:l.message,children:e(Sn,{name:"pinInput",control:i,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:b})=>e(n,{...b})})}),e(Vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ge,he,fe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(fe=(he=O.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Pe,be,Se;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(Se=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ce,Fe,ye;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(ye=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var we,ve,De;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(De=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var Ve,ke,Me;_.parameters={..._.parameters,docs:{...(Ve=_.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(Me=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Re,xe,qe;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(qe=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var Oe,Be,Te;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput isInvalid errorBorderColor="orange.500" />
    </>;
}`,...(Te=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,_e,Ae;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Ae=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var ze,Le,Ne;N.parameters={...N.parameters,docs:{...(ze=N.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(Ne=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var He,je,Je;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Je=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Je.source}}};var Ue,Ge,Xe;j.parameters={...j.parameters,docs:{...(Ue=j.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(Xe=(Ge=j.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source}}};var $e,Ke,We;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(We=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Ze,Qe,Ye;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ye=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var en,nn,rn;G.parameters={...G.parameters,docs:{...(en=G.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(rn=(nn=G.parameters)==null?void 0:nn.docs)==null?void 0:rn.source}}};var tn,sn,on;X.parameters={...X.parameters,docs:{...(tn=X.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(sn=X.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var an,un,ln;$.parameters={...$.parameters,docs:{...(an=$.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
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
}`,...(ln=(un=$.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var cn,dn,mn;K.parameters={...K.parameters,docs:{...(cn=K.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(mn=(dn=K.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var pn,In,gn;W.parameters={...W.parameters,docs:{...(pn=W.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(gn=(In=W.parameters)==null?void 0:In.docs)==null?void 0:gn.source}}};var hn,fn,Pn;Z.parameters={...Z.parameters,docs:{...(hn=Z.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
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
}`,...(Pn=(fn=Z.parameters)==null?void 0:fn.docs)==null?void 0:Pn.source}}};const vr=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","costomPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{vr as __namedExportsOrder,O as basic,J as costomPlaceholder,U as customControl,j as customFields,wr as default,G as disabledFocusManagement,X as isDisabled,K as isInvalid,$ as isReadonly,H as maskingValue,W as reactHookForm,Z as reactHookFormWithDefaultValue,N as useOneTimePassword,z as withBorderColor,A as withDefaultValue,E as withFields,L as withOnComplete,B as withSize,_ as withType,T as withVariant};
//# sourceMappingURL=pin-input.stories-a3419a6d.js.map
