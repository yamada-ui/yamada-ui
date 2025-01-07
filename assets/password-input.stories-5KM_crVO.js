import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as g}from"./index-ClcD9ViR.js";import{u as Me}from"./index.esm-C-rOWAyx.js";import{B as Re,g as Ne,b,c as B,a3 as Ee,M as qe,ag as He,h as We,d as Ae}from"./factory-D0ba2aB7.js";import{b as De}from"./icon-47ftZrjE.js";import{f as R}from"./forward-ref-D13m8o2p.js";import{u as Le}from"./index-CUCM51Cx.js";import{u as Te,f as Ze,d as x}from"./form-control-BjOXh3qv.js";import{a as ke}from"./use-component-style-B--WxH8d.js";import{o as Ge}from"./theme-provider-r-UN7Xzc.js";import{S as Je,F as Ke}from"./smile-CM23_BHq.js";import{T as Qe}from"./text-BB5_0k3k.js";import{V as ze}from"./stack-CcCHu966.js";import{B as Oe}from"./button-CtWzhuL8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-CTLjK8Sl.js";import"./createLucideIcon-C_T9K6g-.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./loading-1q-H-TJ4.js";const[Ue,Be]=Re({name:"PasswordInputContext",errorMessage:`usePasswordInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PasswordInput />"`}),H=R(({className:r,children:t,...n},o)=>{const{styles:a}=Be(),u=Ne(t).map(l=>g.cloneElement(l,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),c={...a.icon};return e.jsx(b.button,{ref:o,type:"button",className:B("ui-password-input__icon",r),__css:c,...n,children:u})});H.displayName="PasswordInputIcon";H.__ui__="PasswordInputIcon";const W=({...r})=>e.jsxs(De,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...r,children:[e.jsx("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]});W.displayName="EyeIcon";W.__ui__="EyeIcon";const A=({...r})=>e.jsxs(De,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...r,children:[e.jsx("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),e.jsx("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),e.jsx("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),e.jsx("path",{d:"m2 2 20 20"})]});A.displayName="EyeOffIcon";A.__ui__="EyeOffIcon";const Xe=r=>{const{defaultIsVisible:t,defaultVisible:n=t,isVisible:o,visible:a=o,onVisibleChange:i,...u}=Te(r),{"aria-readonly":c,...l}=Ee(u,Ze),[m,h]=qe(u,He),{disabled:f}=l,[I,p]=Le({defaultValue:n,value:a,onChange:i}),P=g.useCallback(d=>{f||d.button!==0||(d.preventDefault(),p(w=>!w))},[f,p]),N=g.useCallback((d={},w=null)=>({ref:w,...m,...l,...d}),[m,l]),E=g.useCallback((d={},w=null)=>({ref:w,type:I?"text":"password",...h,"aria-readonly":c,...l,...d}),[I,h,c,l]),q=g.useCallback((d={},w=null)=>({ref:w,"aria-label":"Toggle password visibility",tabIndex:-1,...l,...d,onPointerDown:We(d.onPointerDown,P)}),[l,P]);return{setVisible:p,visible:I,getContainerProps:N,getIconProps:q,getInputProps:E}},s=R((r,t)=>{const[n,o]=ke("PasswordInput",r),{className:a,h:i,height:u=i,minH:c,minHeight:l=c,visibilityIcon:m={off:e.jsx(A,{}),on:e.jsx(W,{})},containerProps:h,iconProps:f,inputProps:I,...p}=Ge(o),{visible:P,getContainerProps:N,getIconProps:E,getInputProps:q}=Xe(p),d={...n.container};return e.jsx(Ue,{value:{styles:n},children:e.jsxs(b.div,{className:B("ui-password-input",a),__css:d,...N(h),children:[e.jsx(L,{height:u,minHeight:l,...q(I,t)}),e.jsx(H,{...E(f),children:P?m.off:m.on})]})})});s.displayName="PasswordInput";s.__ui__="PasswordInput";const L=R(({className:r,...t},n)=>{const{styles:o}=Be(),a={...o.field};return e.jsx(b.input,{ref:n,className:B("ui-password-input__field",r),__css:a,...t})});L.displayName="PasswordInputField";L.__ui__="PasswordInputField";const Ye=r=>{switch(!0){case r<33:return{label:"Low",_selected:{bg:"red.500"}};case r<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}},T=R((r,t)=>{const[n,{className:o,max:a=4,value:i,withLabel:u=!0,getStrengthMeterIndicatorProps:c=Ye,...l}]=ke("PasswordInput",r),m=i/a*100,{label:h,...f}=c(m);return e.jsxs(b.div,{ref:t,className:B("ui-password-input__strength-meter",o),"aria-label":"Password strength meter","aria-valuemax":a,"aria-valuemin":0,"aria-valuenow":i,role:"meter",__css:{...n.strengthMeter},...l,children:[e.jsx(b.div,{ref:t,className:"ui-password-input__strength-meter-indicators",__css:{...n.strengthMeterIndicators},...l,children:Array.from({length:a}).map((I,p)=>e.jsx(b.div,{"data-selected":Ae(p<i),__css:{...n.strengthMeterIndicator},...f},p))}),u&&h?e.jsx(b.span,{__css:{...n.strengthMeterLabel},children:h}):null]})});T.displayName="PasswordInputStrengthMeter";T.__ui__="PasswordInputStrengthMeter";const Ps={component:s,title:"Components / Forms / PasswordInput"},v=()=>e.jsx(s,{placeholder:"your password"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",placeholder:"extra small size"}),e.jsx(s,{size:"sm",placeholder:"small size"}),e.jsx(s,{size:"md",placeholder:"medium size"}),e.jsx(s,{size:"lg",placeholder:"large size"})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",placeholder:"outline"}),e.jsx(s,{variant:"filled",placeholder:"filled"}),e.jsx(s,{variant:"flushed",placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",placeholder:"unstyled"})]}),S=()=>e.jsx(s,{defaultValue:"password",defaultVisible:!0,placeholder:"your password"}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"default border color"}),e.jsx(s,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(s,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),C=()=>{const[r,t]=g.useState("Password"),n=o=>{let a=0;return o.length>=8&&a++,/[A-Z]/.test(o)&&a++,/[0-9]/.test(o)&&a++,/[^A-Za-z0-9]/.test(o)&&a++,a};return e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"your password",value:r,onChange:o=>t(o.target.value)}),e.jsx(T,{value:n(r)})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(s,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(s,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(x,{helperMessage:"We'll never share your password.",isDisabled:!0,label:"Password",children:e.jsx(s,{placeholder:"your password"})})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(s,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(s,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(x,{helperMessage:"We'll never share your password.",isReadOnly:!0,label:"Password",children:e.jsx(s,{placeholder:"your password"})})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(s,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(s,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(s,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(x,{errorMessage:"Email is required.",isInvalid:!0,label:"Password",children:e.jsx(s,{placeholder:"your password"})})]}),D=()=>e.jsx(s,{placeholder:"your password",visibilityIcon:{off:e.jsx(Je,{}),on:e.jsx(Ke,{})}}),k=()=>{const[r,t]=g.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(Qe,{children:["Password visibility: ",r?"show":"hide"]}),e.jsx(s,{placeholder:"your password",visible:r,onVisibleChange:t})]})},z=()=>{var a;const{formState:{errors:r},handleSubmit:t,register:n}=Me(),o=i=>console.log("submit:",i);return e.jsxs(ze,{as:"form",onSubmit:t(o),children:[e.jsx(x,{errorMessage:(a=r.password)==null?void 0:a.message,isInvalid:!!r.password,label:"Password",children:e.jsx(s,{...n("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Oe,{type:"submit",children:"Submit"})]})},O=()=>{var i;const r={password:"password"},{formState:{errors:t},handleSubmit:n,register:o}=Me({defaultValues:r}),a=u=>console.log("submit:",u);return e.jsxs(ze,{as:"form",onSubmit:n(a),children:[e.jsx(x,{errorMessage:(i=t.password)==null?void 0:i.message,isInvalid:!!t.password,label:"Password",children:e.jsx(s,{...o("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(Oe,{type:"submit",children:"Submit"})]})};var Z,G,J;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="your password" />;
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput size="xs" placeholder="extra small size" />
      <PasswordInput size="sm" placeholder="small size" />
      <PasswordInput size="md" placeholder="medium size" />
      <PasswordInput size="lg" placeholder="large size" />
    </>;
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" placeholder="outline" />
      <PasswordInput variant="filled" placeholder="filled" />
      <PasswordInput variant="flushed" placeholder="flushed" />
      <PasswordInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...($=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,se,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="your password" />;
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,oe,te;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput placeholder="default border color" />
      <PasswordInput focusBorderColor="green.500" placeholder="custom border color" />
      <PasswordInput errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(te=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,ie;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("Password");
  const getStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };
  return <>
      <PasswordInput placeholder="your password" value={value} onChange={e => setValue(e.target.value)} />

      <PasswordInputStrengthMeter value={getStrength(value)} />
    </>;
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ue,ce;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" isDisabled placeholder="outline" />
      <PasswordInput variant="filled" isDisabled placeholder="filled" />
      <PasswordInput variant="flushed" isDisabled placeholder="flushed" />
      <PasswordInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="We'll never share your password." isDisabled label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(ce=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,he;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" isReadOnly placeholder="outline" />
      <PasswordInput variant="filled" isReadOnly placeholder="filled" />
      <PasswordInput variant="flushed" isReadOnly placeholder="flushed" />
      <PasswordInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="We'll never share your password." isReadOnly label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(he=(me=V.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var we,ge,be;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" isInvalid placeholder="outline" />
      <PasswordInput variant="filled" isInvalid placeholder="filled" />
      <PasswordInput variant="flushed" isInvalid placeholder="flushed" />
      <PasswordInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." isInvalid label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(be=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,Ie,xe;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...(xe=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Pe,ve,ye;k.parameters={...k.parameters,docs:{...(Pe=k.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="your password" visible={visible} onVisibleChange={setVisible} />
    </>;
}`,...(ye=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var je,Se,_e;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  interface Data {
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.password?.message} isInvalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>;
}`,...(_e=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var Ce,Fe,Ve;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  interface Data {
    password: string;
  }
  const defaultValues: Data = {
    password: "password"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.password?.message} isInvalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>;
}`,...(Ve=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};const vs=["basic","withSize","withVariants","withDefaultVisible","withBorderColor","withStrengthMeter","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{vs as __namedExportsOrder,v as basic,k as customControl,D as customIcon,Ps as default,F as isDisabled,M as isInvalid,V as isReadonly,z as reactHookForm,O as reactHookFormWithDefaultValue,_ as withBorderColor,S as withDefaultVisible,y as withSize,C as withStrengthMeter,j as withVariants};
