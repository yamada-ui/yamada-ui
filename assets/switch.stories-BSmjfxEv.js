import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{u as oe}from"./index-CBqzus2r.js";import{r as se}from"./index-uCp2LrAq.js";import{u as Z,C as $}from"./index.esm-TLwx9zN6.js";import{j as r,c as ne}from"./components-CBA57vA9.js";import{H as ie,V as ee}from"./stack-hhk-VzsX.js";import{L as ae}from"./form-control-BtOL3irc.js";import{W as ce}from"./flex-DIqIlCFh.js";import{B as re}from"./button-D4Wm1JBG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BBt5KR5O.js";import"./factory-DcjttzXA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./index-CMUyB3_7.js";import"./_basePickBy-BarplhU5.js";import"./iframe-CXMMJmKd.js";import"../sb-preview/runtime.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-BZpNq46F.js";import"./index-5hxhpjTX.js";import"./theme-provider-blvefFsb.js";import"./environment-provider-99yZV1sY.js";import"./motion-BNFRb361.js";import"./loading-provider-Cota65l7.js";import"./index-D-LSkzaE.js";import"./Combination-nrDmEbEK.js";import"./loading-D2RTdWov.js";import"./icon-i9DNsLAz.js";import"./index-ZcQ9dmS1.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-Bt4oJcRH.js";import"./motion-CGV1aZSj.js";import"./index-DSHhgXSs.js";import"./container-portal-CZlBTm5D.js";import"./notice-DPHnfhmo.js";import"./alert-BLe23aCX.js";import"./close-button--PP8EEnm.js";import"./use-ripple-DGdpgE18.js";import"./container-C43KVyGu.js";import"./box-DseOx6RT.js";import"./text-B7cjXMz4.js";import"./index-BguKd_Cb.js";import"./index-CutY5rpZ.js";import"./index-C93wcPdP.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DVJ9CG7S.js";import"./index-BEz7kc7x.js";import"./index-BynWHtcw.js";import"./index-CfyBxFcd.js";import"./index-DsuEdmfO.js";import"./index-gtcoX668.js";import"./slide-fade-BCrKcD4j.js";import"./utils-qy47cExs.js";import"./scale-fade-DdhoTvDk.js";import"./index-BqfSQEBY.js";import"./index-3VUv5hbS.js";import"./select-DShv-Prl.js";import"./option-Gl-FshK3.js";import"./index-Chh_-GY8.js";import"./popover-content-BuqQEBR6.js";import"./index-CnGadzrd.js";import"./index-kKcgrWTG.js";const jr={title:"Components / Forms / Switch",component:r},i=()=>e.jsx(r,{children:"basic"}),a=()=>e.jsx(r,{isReverse:!0,children:"basic"}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=se.useId();return e.jsxs(ie,{gap:"sm",children:[e.jsx(ae,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultIsChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,children:"disabled"}),e.jsx(r,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,children:"read only"}),e.jsx(r,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),h=()=>{const[t,{toggle:o}]=oe(!1);return e.jsx(r,{isChecked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=s=>console.log("submit:",s);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:s,...n}})=>e.jsx(r,{isChecked:s,...n,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),s=n=>console.log("submit:",n);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(s),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:n,...te}})=>e.jsx(r,{isChecked:n,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,x,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Switch>basic</Switch>;
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,C,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,z,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var V,v,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(R=(v=m.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var H,B,I;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var L,W,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Switch key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Switch>)}
    </Wrap>;
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var E,P,_;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultIsChecked>
        disabled
      </Switch>
    </>;
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,A,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
        read only
      </Switch>
    </>;
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,M;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...(M=(K=h.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,T;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(T=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Cr=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Cr as __namedExportsOrder,i as basic,h as customControl,jr as default,u as isDisabled,p as isReadonly,S as reactHookForm,w as reactHookFormWithDefaultValue,d as withColorScheme,l as withLabel,a as withReverse,c as withSize,m as withVariant};
