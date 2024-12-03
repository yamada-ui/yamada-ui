import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as oe}from"./index-gGKStiao.js";import{r as se}from"./index-ClcD9ViR.js";import{u as Z,C as $}from"./index.esm-CEdvtQ_U.js";import{h as r,c as ne}from"./components-CNqZhJFx.js";import{H as ie,V as ee}from"./stack-CJbkc0zr.js";import{L as ae}from"./form-control-C7lyVmHF.js";import{W as ce}from"./flex-DjgpQWnX.js";import{B as re}from"./button-3gvEA_m9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DykZTIMV.js";import"./factory-Dfrbb1EY.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./theme-provider-DSx3k1bh.js";import"./ui-provider-DE3H2F6F.js";import"./index-B_wzWJ8A.js";import"./i18n-provider-BEOsEj1w.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-Bs7NbL3P.js";import"./index-D7KS8MXr.js";import"./Combination-CkmEMpJG.js";import"./loading-C7VoLX3j.js";import"./icon-DDeGQYl6.js";import"./use-component-style-fOirb5M1.js";import"./use-var-BQS3JFPa.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-BMWh88P0.js";import"./index-ZuzByk-F.js";import"./factory-DeSWW4o7.js";import"./notice-BiV1MNuO.js";import"./alert-DWFIkvOW.js";import"./close-button-DENBYMYY.js";import"./use-ripple-59xURXHY.js";import"./container-Co5ig03C.js";import"./box-JOSxMso6.js";import"./text-ACfjY0cR.js";import"./use-checkbox-sRu08KlT.js";import"./index-DImDLiuZ.js";import"./index-De_nPH_B.js";import"./index-BLjMRlHy.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-B2Vmh8XG.js";import"./index-DqeO0dAp.js";import"./index-Y4TAv5_r.js";import"./index-CFtnIMNb.js";import"./index-D_3Ilmao.js";import"./index-CKnINgQh.js";import"./slide-fade-CQuVyWIS.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Crg7yCn-.js";import"./scale-fade-D-TPukYR.js";import"./index-O1jdRUiZ.js";import"./index-B5Z2HpMN.js";import"./select-dnrj-5i-.js";import"./select-list-B-KbPFAb.js";import"./index-CgNA1xsw.js";import"./popover-trigger-DAQ55ib6.js";import"./index-BN23OaLZ.js";import"./index-BVP762bF.js";const gr={component:r,title:"Components / Forms / Switch"},i=()=>e.jsx(r,{children:"basic"}),a=()=>e.jsx(r,{isReverse:!0,children:"basic"}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=se.useId();return e.jsxs(ie,{gap:"sm",children:[e.jsx(ae,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultIsChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,children:"disabled"}),e.jsx(r,{defaultIsChecked:!0,isDisabled:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,children:"read only"}),e.jsx(r,{defaultIsChecked:!0,isReadOnly:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=oe(!1);return e.jsx(r,{isChecked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=s=>console.log("submit:",s);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:s,...n}})=>e.jsx(r,{isChecked:s,...n,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),s=n=>console.log("submit:",n);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(s),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:n,...te}})=>e.jsx(r,{isChecked:n,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,x,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
      <Switch defaultIsChecked isDisabled>
        disabled
      </Switch>
    </>;
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,A,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch defaultIsChecked isReadOnly>
        read only
      </Switch>
    </>;
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,M;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,T;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  interface Data {
    switch: boolean;
  }
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
  interface Data {
    switch: boolean;
  }
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const fr=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{fr as __namedExportsOrder,i as basic,p as customControl,gr as default,u as isDisabled,h as isReadonly,S as reactHookForm,w as reactHookFormWithDefaultValue,d as withColorScheme,l as withLabel,a as withReverse,c as withSize,m as withVariant};
