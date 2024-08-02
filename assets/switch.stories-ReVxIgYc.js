import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as oe}from"./index-Du0-7Fls.js";import{r as se}from"./index-BwDkhjyp.js";import{u as Z,C as $}from"./index.esm-CnEPCCvu.js";import{h as r,c as ne}from"./components-MNMsi6MI.js";import{H as ie,V as ee}from"./stack-By0izq3K.js";import{L as ae}from"./form-control-CqHILFcM.js";import{W as ce}from"./flex-28tKwT7e.js";import{B as re}from"./button-B4naN1bU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-xf8c1cao.js";import"./factory-BXeT7qA-.js";import"./extends-CF3RwP-h.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-vn_aFqYR.js";import"./index-Dzn7FVja.js";import"./theme-provider-CgekAyNK.js";import"./motion-CcTWI5_V.js";import"./loading-provider-BlDKCDBl.js";import"./index-Dxynqg56.js";import"./Combination-CONbhR2A.js";import"./loading-mQT9J7oF.js";import"./icon-DIrcXz1L.js";import"./index-jt6EZpVS.js";import"./use-component-style-DRlwxZhB.js";import"./forward-ref-BmTAT9U5.js";import"./motion-DhpH0FRI.js";import"./index-UcjmprJc.js";import"./container-portal-D_8J7oaj.js";import"./index-DxjWwZXO.js";import"./notice-C0m_B0AJ.js";import"./alert-Bg8_w__7.js";import"./close-button-DV2TJvIJ.js";import"./use-ripple-2cGyX1K8.js";import"./container-2ltlYRD5.js";import"./box-B1h8yYhg.js";import"./text-CkzTM_kh.js";import"./checkbox-Dncp1lmg.js";import"./index-CEihWUfX.js";import"./index-Irie4EHF.js";import"./index-CXLSpR74.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-AYHfqsqL.js";import"./index-XSAGmtry.js";import"./index-D5OdYTIO.js";import"./index-B0klFHMr.js";import"./index-D5u8eIG7.js";import"./index-BEzKMtfG.js";import"./slide-fade-CTxSPoDC.js";import"./utils-DYgquvih.js";import"./scale-fade-hIdHgWHj.js";import"./index-DBCDrfEK.js";import"./index-PMfx84N2.js";import"./select-DmB-yekh.js";import"./option-CCIYLpqk.js";import"./index-CP_iHTUG.js";import"./popover-content-CR4_9T1h.js";import"./index-BzaPwyBI.js";import"./index-XokATsxS.js";const wr={title:"Components / Forms / Switch",component:r},i=()=>e.jsx(r,{children:"basic"}),a=()=>e.jsx(r,{isReverse:!0,children:"basic"}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=se.useId();return e.jsxs(ie,{gap:"sm",children:[e.jsx(ae,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultIsChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,children:"disabled"}),e.jsx(r,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,children:"read only"}),e.jsx(r,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=oe(!1);return e.jsx(r,{isChecked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=s=>console.log("submit:",s);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:s,...n}})=>e.jsx(r,{isChecked:s,...n,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),s=n=>console.log("submit:",n);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(s),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:n,...te}})=>e.jsx(r,{isChecked:n,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,x,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,A,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const br=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{br as __namedExportsOrder,i as basic,p as customControl,wr as default,u as isDisabled,h as isReadonly,S as reactHookForm,w as reactHookFormWithDefaultValue,d as withColorScheme,l as withLabel,a as withReverse,c as withSize,m as withVariant};
