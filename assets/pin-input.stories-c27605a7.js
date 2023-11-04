import{a as e,j as a,F as I}from"./jsx-runtime-b08f8875.js";import{r as f}from"./index-8ee6c85d.js";import{u as bn,C as Sn}from"./index.esm-3dbb7ee1.js";import{u as Tn}from"./index-7c833fdd.js";import{c as En}from"./index-30db043d.js";import{u as Cn,f as An,F as v}from"./form-control-9bc84439.js";import{k as _n,D as zn,o as Ln,t as q,p as Nn,d as Fn,e as yn,x as Hn}from"./factory-ab7c3580.js";import{f as wn}from"./forward-ref-cf7188bd.js";import{a as jn}from"./use-component-style-07e84389.js";import{o as Jn}from"./theme-provider-1097130b.js";import{u as vn}from"./loading-provider-2a04822d.js";import{V as Dn}from"./stack-f811b10a.js";import{B as Vn}from"./button-3d1799ed.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-76f20168.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./icon-1c0bf186.js";import"./motion-2d0d8241.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-d647f37d.js";import"./index-8bf7f4ad.js";const me=s=>s==null?void 0:s.split(""),fe=(s,i)=>(i==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(s),[Un,Gn]=_n({strict:!1,name:"PinInputContext"}),{DescendantsContextProvider:Xn,useDescendants:$n,useDescendant:Kn}=En(),n=wn(({focusBorderColor:s,errorBorderColor:i,...c},d)=>{const[p,g]=jn("PinInput",{focusBorderColor:s,errorBorderColor:i,...c});let{id:u,className:b,type:y="number",placeholder:re="○",value:kn,defaultValue:Mn,autoFocus:te,manageFocus:D=!0,otp:se=!1,mask:oe,onChange:Q,onComplete:h,fileds:Rn=4,children:xn,...V}=Cn(Jn(g));u=u??f.useId();const l=$n(),[ae,Y]=f.useState(!0),[ie,ue]=f.useState(-1);f.useEffect(()=>{if(!te)return;const r=l.firstValue();r&&requestAnimationFrame(()=>r.node.focus())},[te,l]);const[w,k]=Tn({value:me(kn),defaultValue:me(Mn)||[],onChange:r=>Q==null?void 0:Q(r.join(""))}),le=f.useCallback(r=>{if(!ae||!D)return;const t=l.nextValue(r,void 0,!1);t&&requestAnimationFrame(()=>t.node.focus())},[l,ae,D]),M=f.useCallback((r,t,P=!0)=>{var R;let m=[...w];m[t]=r,k(m),m=m.filter(Boolean),r!==""&&m.length===l.count()&&m.every(S=>S!=null&&S!=="")?(h==null||h(m.join("")),(R=l.value(t))==null||R.node.blur()):P&&le(t)},[w,k,l,h,le]),ce=f.useCallback((r,t)=>{let P=t;return r!=null&&r.length&&(r[0]===t.charAt(0)?P=t.charAt(1):r[0]===t.charAt(1)&&(P=t.charAt(0))),P},[]),qn=f.useCallback(({index:r,...t})=>{const P=({target:S})=>{var pe;const C=S.value,x=w[r],F=ce(x,C);if(F===""){M("",r);return}if(C.length>2){if(!fe(C,y))return;const ne=C.split("").filter((Wn,Bn)=>Bn<l.count());k(ne),ne.length===l.count()&&(h==null||h(ne.join("")),(pe=l.value(r))==null||pe.node.blur())}else fe(F,y)&&M(F,r),Y(!0)},m=({key:S,target:C})=>{var x;if(!(S!=="Backspace"||!D))if(C.value===""){const F=l.prevValue(r,void 0,!1);if(!F)return;M("",r-1,!1),(x=F.node)==null||x.focus(),Y(!0)}else Y(!1)},de=()=>ue(r),R=()=>ue(-1);return{inputMode:y==="number"?"numeric":"text",type:oe?"password":y==="number"?"tel":"text",...zn(V,An),...Ln(t),id:`${u}-${r}`,value:w[r]||"",onChange:q(t.onChange,P),onKeyDown:q(t.onKeyDown,m),onFocus:q(t.onFocus,de),onBlur:q(t.onBlur,R),autoComplete:se?"one-time-code":"off",placeholder:ie===r&&!V.readOnly&&!t.readOnly?"":re}},[l,ie,ce,u,D,oe,h,se,re,V,M,k,y,w]),On={display:"flex",alignItems:"center",...p.container};let ee=Nn(xn);if(!ee.length)for(let r=0;r<Rn;r++)ee.push(e(o,{},r));return e(Xn,{value:l,children:e(Un,{value:{getInputProps:qn,styles:p},children:e(Fn.div,{ref:d,className:yn("ui-pin-input",b),...V,__css:On,children:ee})})})}),o=wn(({className:s,...i},c)=>{const{getInputProps:d,styles:p}=Gn(),{index:g,register:u}=Kn();i=Cn(i);const b={...p.field};return e(Fn.input,{className:yn("ui-pin-input-field",s),...d({...i,ref:Hn(u,c),index:g}),__css:b})}),yr={title:"Components / Forms / PinInput",component:n},O=()=>e(n,{}),B=()=>a(I,{children:[e(n,{size:"xs"}),e(n,{size:"sm"}),e(n,{size:"md"}),e(n,{size:"lg"})]}),T=()=>a(I,{children:[e(n,{variant:"outline"}),e(n,{variant:"filled"}),e(n,{variant:"flushed"}),e(n,{variant:"unstyled"})]}),E=()=>a(I,{children:[e(n,{fileds:3}),e(n,{fileds:4}),e(n,{fileds:5}),e(n,{fileds:6})]}),A=()=>a(I,{children:[e(n,{}),e(n,{type:"alphanumeric"})]}),_=()=>a(I,{children:[e(n,{defaultValue:"1234"}),e(n,{defaultValue:"123"})]}),z=()=>a(I,{children:[e(n,{}),e(n,{focusBorderColor:"green.500"}),e(n,{isInvalid:!0,errorBorderColor:"orange.500"})]}),L=()=>{const{page:s}=vn();return e(n,{onComplete:()=>s.start({duration:5e3})})},N=()=>e(n,{otp:!0}),H=()=>e(n,{mask:!0}),j=()=>a(n,{children:[e(o,{}),e(o,{}),e(o,{}),e(o,{})]}),J=()=>e(n,{placeholder:"💩"}),U=()=>{const{page:s}=vn(),[i,c]=f.useState("");return e(n,{value:i,onChange:c,onComplete:()=>s.start({duration:5e3})})},G=()=>e(n,{manageFocus:!1}),X=()=>a(I,{children:[e(n,{isDisabled:!0}),a(n,{children:[e(o,{isDisabled:!0}),e(o,{isDisabled:!0}),e(o,{isDisabled:!0}),e(o,{isDisabled:!0})]}),e(v,{isDisabled:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),$=()=>a(I,{children:[e(n,{isReadOnly:!0}),a(n,{children:[e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0}),e(o,{isReadOnly:!0})]}),e(v,{isReadOnly:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),K=()=>a(I,{children:[e(n,{isInvalid:!0}),a(n,{children:[e(o,{isInvalid:!0}),e(o,{isInvalid:!0}),e(o,{isInvalid:!0}),e(o,{isInvalid:!0})]}),e(v,{isInvalid:!0,label:"Please one-time password",helperMessage:"Just sent you a one-time password to your e-mail address.",errorMessage:"one-time password is required.",children:e(n,{})})]}),W=()=>{var g;const{control:s,handleSubmit:i,watch:c,formState:{errors:d}}=bn(),p=u=>console.log("submit:",u);return console.log("watch:",c()),a(Dn,{as:"form",onSubmit:i(p),children:[e(v,{isInvalid:!!d.pinInput,label:"Token",errorMessage:(g=d.pinInput)==null?void 0:g.message,children:e(Sn,{name:"pinInput",control:s,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:u})=>e(n,{...u})})}),e(Vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Z=()=>{var u;const s={pinInput:"5"},{control:i,handleSubmit:c,watch:d,formState:{errors:p}}=bn({defaultValues:s}),g=b=>console.log("submit:",b);return console.log("watch:",d()),a(Dn,{as:"form",onSubmit:c(g),children:[e(v,{isInvalid:!!p.pinInput,label:"Token",errorMessage:(u=p.pinInput)==null?void 0:u.message,children:e(Sn,{name:"pinInput",control:i,rules:{required:{value:!0,message:"This is required."},minLength:{value:4,message:"This is required."}},render:({field:b})=>e(n,{...b})})}),e(Vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ie,ge,he;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(he=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Pe,be,Se;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <PinInput size='xs' />

      <PinInput size='sm' />

      <PinInput size='md' />

      <PinInput size='lg' />
    </>;
}`,...(Se=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ce,Fe,ye;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant='outline' />

      <PinInput variant='filled' />

      <PinInput variant='flushed' />

      <PinInput variant='unstyled' />
    </>;
}`,...(ye=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var we,ve,De;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PinInput fileds={3} />

      <PinInput fileds={4} />

      <PinInput fileds={5} />

      <PinInput fileds={6} />
    </>;
}`,...(De=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var Ve,ke,Me;A.parameters={...A.parameters,docs:{...(Ve=A.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type='alphanumeric' />
    </>;
}`,...(Me=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Re,xe,qe;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue='1234' />

      <PinInput defaultValue='123' />
    </>;
}`,...(qe=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var Oe,Be,Te;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor='green.500' />

      <PinInput isInvalid errorBorderColor='orange.500' />
    </>;
}`,...(Te=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,Ae,_e;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(_e=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var ze,Le,Ne;N.parameters={...N.parameters,docs:{...(ze=N.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
  return <PinInput placeholder='💩' />;
}`,...(We=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Ze,Qe,Ye;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState('');
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

      <FormControl isDisabled label='Please one-time password' helperMessage='Just sent you a one-time password to your e-mail address.' errorMessage='one-time password is required.'>
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

      <FormControl isReadOnly label='Please one-time password' helperMessage='Just sent you a one-time password to your e-mail address.' errorMessage='one-time password is required.'>
        <PinInput />
      </FormControl>
    </>;
}`,...(ln=(un=$.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var cn,dn,pn;K.parameters={...K.parameters,docs:{...(cn=K.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <FormControl isInvalid label='Please one-time password' helperMessage='Just sent you a one-time password to your e-mail address.' errorMessage='one-time password is required.'>
        <PinInput />
      </FormControl>
    </>;
}`,...(pn=(dn=K.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var mn,fn,In;W.parameters={...W.parameters,docs:{...(mn=W.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.pinInput} label='Token' errorMessage={errors.pinInput?.message}>
        <Controller name='pinInput' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        },
        minLength: {
          value: 4,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <PinInput {...field} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(In=(fn=W.parameters)==null?void 0:fn.docs)==null?void 0:In.source}}};var gn,hn,Pn;Z.parameters={...Z.parameters,docs:{...(gn=Z.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  type Data = {
    pinInput: string;
  };
  const defaultValues: Data = {
    pinInput: '5'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.pinInput} label='Token' errorMessage={errors.pinInput?.message}>
        <Controller name='pinInput' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        },
        minLength: {
          value: 4,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <PinInput {...field} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Pn=(hn=Z.parameters)==null?void 0:hn.docs)==null?void 0:Pn.source}}};const wr=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","costomPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{wr as __namedExportsOrder,O as basic,J as costomPlaceholder,U as customControl,j as customFields,yr as default,G as disabledFocusManagement,X as isDisabled,K as isInvalid,$ as isReadonly,H as maskingValue,W as reactHookForm,Z as reactHookFormWithDefaultValue,N as useOneTimePassword,z as withBorderColor,_ as withDefaultValue,E as withFields,L as withOnComplete,B as withSize,A as withType,T as withVariant};
//# sourceMappingURL=pin-input.stories-c27605a7.js.map
