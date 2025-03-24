import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as g}from"./index-BwPxMuoB.js";import{u as Me}from"./index.esm-C038jXrr.js";import{B as Ne,g as Ee,b,c as B,a3 as qe,M as He,ae as We,h as Ae,d as Le}from"./factory-B_KMcXyW.js";import{b as ke}from"./icon-DIzRaLo1.js";import{f as N}from"./forward-ref-Ukjd1cIW.js";import{u as Te}from"./index-DLOQPSsO.js";import{u as Ze,f as Re,d as P}from"./form-control-4O_IQfgA.js";import{a as ze}from"./use-component-style-65RA3nVD.js";import{o as Ge}from"./theme-provider-DGyR61Aa.js";import{F as Je,S as Ke}from"./smile-CQ8TBnaD.js";import{T as Qe}from"./text-clsxocLN.js";import{V as Oe}from"./stack-D_e4Awei.js";import{B as De}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-Tj-aA0qb.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";const[Ue,Be]=Ne({name:"PasswordInputContext",errorMessage:`usePasswordInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PasswordInput />"`}),W=N(({className:s,children:t,...n},o)=>{const{styles:a}=Be(),u=Ee(t).map(l=>g.cloneElement(l,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),c={...a.icon};return e.jsx(b.button,{ref:o,type:"button",className:B("ui-password-input__icon",s),__css:c,...n,children:u})});W.displayName="PasswordInputIcon";W.__ui__="PasswordInputIcon";const A=({...s})=>e.jsxs(ke,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...s,children:[e.jsx("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]});A.displayName="EyeIcon";A.__ui__="EyeIcon";const L=({...s})=>e.jsxs(ke,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...s,children:[e.jsx("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),e.jsx("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),e.jsx("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),e.jsx("path",{d:"m2 2 20 20"})]});L.displayName="EyeOffIcon";L.__ui__="EyeOffIcon";const Xe=s=>{const{defaultIsVisible:t,defaultVisible:n=t,isVisible:o,visible:a=o,onVisibleChange:d,...u}=Ze(s),{"aria-readonly":c,...l}=qe(u,Re),[m,h]=He(u,We),{disabled:f}=l,[x,p]=Te({defaultValue:n,value:a,onChange:d}),v=g.useCallback(i=>{f||i.button!==0||(i.preventDefault(),p(w=>!w))},[f,p]),E=g.useCallback((i={},w=null)=>({ref:w,...m,...l,...i}),[m,l]),q=g.useCallback((i={},w=null)=>({ref:w,type:x?"text":"password",...h,"aria-readonly":c,...l,...i}),[x,h,c,l]),H=g.useCallback((i={},w=null)=>({ref:w,"aria-label":"Toggle password visibility",tabIndex:-1,...l,...i,onPointerDown:Ae(i.onPointerDown,v)}),[l,v]);return{setVisible:p,visible:x,getContainerProps:E,getIconProps:H,getInputProps:q}},r=N((s,t)=>{const[n,o]=ze("PasswordInput",s),{className:a,h:d,height:u=d,minH:c,minHeight:l=c,visibilityIcon:m={off:e.jsx(L,{}),on:e.jsx(A,{})},containerProps:h,iconProps:f,inputProps:x,...p}=Ge(o),{visible:v,getContainerProps:E,getIconProps:q,getInputProps:H}=Xe(p),i={...n.container};return e.jsx(Ue,{value:{styles:n},children:e.jsxs(b.div,{className:B("ui-password-input",a),__css:i,...E(h),children:[e.jsx(T,{height:u,minHeight:l,...H(x,t)}),e.jsx(W,{...q(f),children:v?m.off:m.on})]})})});r.displayName="PasswordInput";r.__ui__="PasswordInput";const T=N(({className:s,...t},n)=>{const{styles:o}=Be(),a={...o.field};return e.jsx(b.input,{ref:n,className:B("ui-password-input__field",s),__css:a,...t})});T.displayName="PasswordInputField";T.__ui__="PasswordInputField";const Ye=s=>{switch(!0){case s<33:return{label:"Low",_selected:{bg:"red.500"}};case s<66:return{label:"Medium",_selected:{bg:"orange.500"}};default:return{label:"High",_selected:{bg:"green.500"}}}},Z=N((s,t)=>{const[n,{className:o,max:a=4,value:d,withLabel:u=!0,getStrengthMeterIndicatorProps:c=Ye,...l}]=ze("PasswordInput",s),m=d/a*100,{label:h,...f}=c(m);return e.jsxs(b.div,{ref:t,className:B("ui-password-input__strength-meter",o),"aria-label":"Password strength meter","aria-valuemax":a,"aria-valuemin":0,"aria-valuenow":d,role:"meter",__css:{...n.strengthMeter},...l,children:[e.jsx(b.div,{ref:t,className:"ui-password-input__strength-meter-indicators",__css:{...n.strengthMeterIndicators},...l,children:Array.from({length:a}).map((x,p)=>e.jsx(b.div,{"data-selected":Le(p<d),__css:{...n.strengthMeterIndicator},...f},p))}),u&&h?e.jsx(b.span,{__css:{...n.strengthMeterLabel},children:h}):null]})});Z.displayName="PasswordInputStrengthMeter";Z.__ui__="PasswordInputStrengthMeter";const vr={component:r,title:"Components / Forms / PasswordInput"},y=()=>e.jsx(r,{placeholder:"your password"}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),S=()=>e.jsx(r,{defaultValue:"password",defaultVisible:!0,placeholder:"your password"}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),C=()=>{const[s,t]=g.useState("Password"),n=o=>{let a=0;return o.length>=8&&a++,/[A-Z]/.test(o)&&a++,/[0-9]/.test(o)&&a++,/[^A-Za-z0-9]/.test(o)&&a++,a};return e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"your password",value:s,onChange:o=>t(o.target.value)}),e.jsx(Z,{value:n(s)})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(P,{disabled:!0,helperMessage:"We'll never share your password.",label:"Password",children:e.jsx(r,{placeholder:"your password"})})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(r,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(r,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(P,{helperMessage:"We'll never share your password.",label:"Password",readOnly:!0,children:e.jsx(r,{placeholder:"your password"})})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(P,{errorMessage:"Email is required.",invalid:!0,label:"Password",children:e.jsx(r,{placeholder:"your password"})})]}),k=()=>e.jsx(r,{placeholder:"your password",visibilityIcon:{off:e.jsx(Ke,{}),on:e.jsx(Je,{})}}),z=()=>{const[s,t]=g.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs(Qe,{children:["Password visibility: ",s?"show":"hide"]}),e.jsx(r,{placeholder:"your password",visible:s,onVisibleChange:t})]})},O=()=>{var a;const{formState:{errors:s},handleSubmit:t,register:n}=Me(),o=d=>console.log("submit:",d);return e.jsxs(Oe,{as:"form",onSubmit:t(o),children:[e.jsx(P,{errorMessage:(a=s.password)==null?void 0:a.message,invalid:!!s.password,label:"Password",children:e.jsx(r,{...n("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(De,{type:"submit",children:"Submit"})]})},D=()=>{var d;const s={password:"password"},{formState:{errors:t},handleSubmit:n,register:o}=Me({defaultValues:s}),a=u=>console.log("submit:",u);return e.jsxs(Oe,{as:"form",onSubmit:n(a),children:[e.jsx(P,{errorMessage:(d=t.password)==null?void 0:d.message,invalid:!!t.password,label:"Password",children:e.jsx(r,{...o("password",{required:{message:"Password is required.",value:!0}})})}),e.jsx(De,{type:"submit",children:"Submit"})]})};var R,G,J;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="your password" />;
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput size="xs" placeholder="extra small size" />
      <PasswordInput size="sm" placeholder="small size" />
      <PasswordInput size="md" placeholder="medium size" />
      <PasswordInput size="lg" placeholder="large size" />
    </>;
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" placeholder="outline" />
      <PasswordInput variant="filled" placeholder="filled" />
      <PasswordInput variant="flushed" placeholder="flushed" />
      <PasswordInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...($=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,re,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <PasswordInput defaultValue="password" defaultVisible placeholder="your password" />;
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,te;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput placeholder="default border color" />
      <PasswordInput focusBorderColor="green.500" placeholder="custom border color" />
      <PasswordInput errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(te=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,de;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(de=(le=C.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ie,ue,ce;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" disabled placeholder="outline" />
      <PasswordInput variant="filled" disabled placeholder="filled" />
      <PasswordInput variant="flushed" disabled placeholder="flushed" />
      <PasswordInput variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled helperMessage="We'll never share your password." label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(ce=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,he;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" placeholder="outline" readOnly />
      <PasswordInput variant="filled" placeholder="filled" readOnly />
      <PasswordInput variant="flushed" placeholder="flushed" readOnly />
      <PasswordInput variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl helperMessage="We'll never share your password." label="Password" readOnly>
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(he=(me=V.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var we,ge,be;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <PasswordInput variant="outline" invalid placeholder="outline" />
      <PasswordInput variant="filled" invalid placeholder="filled" />
      <PasswordInput variant="flushed" invalid placeholder="flushed" />
      <PasswordInput variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." invalid label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>;
}`,...(be=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,xe,Pe;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <PasswordInput placeholder="your password" visibilityIcon={{
    off: <SmileIcon />,
    on: <FrownIcon />
  }} />;
}`,...(Pe=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var ve,ye,Ie;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput placeholder="your password" visible={visible} onVisibleChange={setVisible} />
    </>;
}`,...(Ie=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var je,Se,_e;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.password?.message} invalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>;
}`,...(_e=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var Ce,Fe,Ve;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.password?.message} invalid={!!errors.password} label="Password">
        <PasswordInput {...register("password", {
        required: {
          message: "Password is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>;
}`,...(Ve=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};const yr=["basic","withSize","withVariants","withDefaultVisible","withBorderColor","withStrengthMeter","disabled","readOnly","invalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{yr as __namedExportsOrder,y as basic,z as customControl,k as customIcon,vr as default,F as disabled,M as invalid,O as reactHookForm,D as reactHookFormWithDefaultValue,V as readOnly,_ as withBorderColor,S as withDefaultVisible,I as withSize,C as withStrengthMeter,j as withVariants};
