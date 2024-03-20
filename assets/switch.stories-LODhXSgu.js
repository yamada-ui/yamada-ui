import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as je}from"./index-rYLD436_.js";import{r as oe}from"./index-CBqU2yxZ.js";import{u as ne,C as ae}from"./index.esm-Dtxxx2aT.js";import{c as Ce}from"./components-mT6GtZ59.js";import{b as ye}from"./checkbox-CGaJLda6.js";import{m as De}from"./motion-JgkBPv6g.js";import{f as ve}from"./forward-ref-DuAegr0M.js";import{a as _e}from"./use-component-style-hxhKhc0Q.js";import{o as Fe}from"./theme-provider-Bm2ANCLL.js";import{u as c,c as l,o as ze,M as Ie}from"./factory-Dr9dj2_3.js";import{H as Re,V as ie}from"./stack-WdGSMB3c.js";import{L as Ve}from"./form-control-Dowezunr.js";import{W as He}from"./flex-MVd7F0CM.js";import{B as ce}from"./button-DzbywrjQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-PS1QX0e2.js";import"./_basePickBy-Bn2nXVkU.js";import"./iframe-fZrpZBZ5.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-BIZneCWx.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-C1V7BBGR.js";import"./index-CcbIdHD-.js";import"./environment-provider-CVb8wJdv.js";import"./loading-provider-DqWGXHwm.js";import"./index-CafETBy0.js";import"./Combination-D2LZdSm3.js";import"./loading-93aTLmy8.js";import"./index-Cd5bWo2e.js";import"./index-BH_-S3fu.js";import"./index-C5SpnNA3.js";import"./icon-BEP1qdzi.js";import"./motion-CQQhr11g.js";import"./index-_tcQm2Fk.js";import"./container-portal-ERwjpvWO.js";import"./notice-D3g8s_48.js";import"./alert-NX1pOus8.js";import"./close-button-hzIfFZD-.js";import"./use-ripple-D-hcQ8Cu.js";import"./container-B08OpQW3.js";import"./box-BH0_Yzug.js";import"./text-DB123ecx.js";import"./index-BnkQTI_d.js";import"./index-BrWt32zn.js";const t=ve((r,o)=>{const[n,i]=_e("Switch",r),{className:s,gap:a="0.5rem",children:m,icon:j,inputProps:le,labelProps:me,isReverse:de,flexDirection:ue,transition:he={type:"spring",stiffness:700,damping:40},...C}=Fe(i),{isChecked:y,isFocused:pe,isHovered:Se,isActive:we,getContainerProps:be,getIconProps:fe,getInputProps:ge,getLabelProps:xe}=ye(C),ke=j?oe.cloneElement(j,{isChecked:y,isFocused:pe,isHovered:Se,isActive:we}):null;return e.jsxs(c.label,{ref:o,className:l("ui-switch",s),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:ue??(de?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:a,...n.container},...be(),...ze(C,["id","name","value","defaultValue","checked","defaultIsChecked","isChecked","isDisabled","isReadOnly","onChange","onBlur","onFocus"]),children:[e.jsx(c.input,{className:l("ui-switch__input",s),...ge(le,o)}),ke??e.jsx(c.span,{className:l("ui-switch__track",s),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...n.track},...fe(),children:e.jsx(c.span,{as:De.span,className:l("ui-switch__thumb",s),"data-checked":Ie(y),layout:!0,transition:he,__css:{...n.thumb}})}),m?e.jsx(c.span,{className:l("ui-switch__label",s),__css:{...n.label},...xe(me),children:m}):null]})}),Ft={title:"Components / Forms / Switch",component:t},d=()=>e.jsx(t,{children:"basic"}),u=()=>e.jsx(t,{isReverse:!0,children:"basic"}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",children:"small size"}),e.jsx(t,{size:"md",children:"medium size"}),e.jsx(t,{size:"lg",children:"large size"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"thick",children:"thick"}),e.jsx(t,{variant:"thin",children:"thin"})]}),S=()=>{const r=oe.useId();return e.jsxs(Re,{gap:"sm",children:[e.jsx(Ve,{htmlFor:r,userSelect:"none",children:"Please Click"}),e.jsx(t,{id:r})]})},w=()=>e.jsx(He,{gap:"md",children:Ce.map(r=>e.jsx(t,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{isDisabled:!0,children:"disabled"}),e.jsx(t,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{isReadOnly:!0,children:"read only"}),e.jsx(t,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),g=()=>{const[r,{toggle:o}]=je(!1);return e.jsx(t,{isChecked:r,onChange:o,children:"custom control"})},x=()=>{const{control:r,handleSubmit:o,watch:n}=ne(),i=s=>console.log("submit:",s);return console.log("watch:",n()),e.jsxs(ie,{as:"form",onSubmit:o(i),children:[e.jsx(ae,{name:"switch",control:r,render:({field:{value:s,...a}})=>e.jsx(t,{isChecked:s,...a,children:"Dark mode"})}),e.jsx(ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},k=()=>{const r={switch:!0},{control:o,handleSubmit:n,watch:i}=ne({defaultValues:r}),s=a=>console.log("submit:",a);return console.log("watch:",i()),e.jsxs(ie,{as:"form",onSubmit:n(s),children:[e.jsx(ae,{name:"switch",control:o,render:({field:{value:a,...m}})=>e.jsx(t,{isChecked:a,...m,children:"Dark mode"})}),e.jsx(ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,v,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Switch>basic</Switch>;
}`,...(_=(v=d.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var F,z,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var R,V,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(H=(V=h.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var P,B,L;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,N,W;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(W=(N=S.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var E,A,M;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Switch key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Switch>)}
    </Wrap>;
}`,...(M=(A=w.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var T,q,G;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultIsChecked>
        disabled
      </Switch>
    </>;
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
        read only
      </Switch>
    </>;
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  type Data = {
    switch: boolean;
  };
  const {
    control,
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="switch" control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  type Data = {
    switch: boolean;
  };
  const defaultValues: Data = {
    switch: true
  };
  const {
    control,
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="switch" control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const zt=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{zt as __namedExportsOrder,d as basic,g as customControl,Ft as default,b as isDisabled,f as isReadonly,x as reactHookForm,k as reactHookFormWithDefaultValue,w as withColorScheme,S as withLabel,u as withReverse,h as withSize,p as withVariant};
