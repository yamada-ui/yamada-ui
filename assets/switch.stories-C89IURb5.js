import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as oe}from"./index-Du0-7Fls.js";import{r as se}from"./index-BwDkhjyp.js";import{u as Z,C as $}from"./index.esm-CnEPCCvu.js";import{h as r,c as ne}from"./components-A0Htpunp.js";import{H as ie,V as ee}from"./stack-wqY1Rk5c.js";import{L as ae}from"./form-control-C8wk9nRT.js";import{W as ce}from"./flex-Chb4wwx3.js";import{B as re}from"./button-DfQHZeQx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B0VytHna.js";import"./factory-CEsHZeW8.js";import"./extends-CF3RwP-h.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-CTlNtpH8.js";import"./index-kzR617ey.js";import"./theme-provider-woLZZCt0.js";import"./motion-CcTWI5_V.js";import"./loading-provider-DdrknJQn.js";import"./index-B9PLoIDO.js";import"./Combination-CONbhR2A.js";import"./loading-BHrGiIMj.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";import"./use-component-style-BVTnHHBW.js";import"./forward-ref-BmTAT9U5.js";import"./motion-Cp3z4NrY.js";import"./index-UcjmprJc.js";import"./container-portal-Df4525l3.js";import"./index-DxjWwZXO.js";import"./notice-DAgLfydM.js";import"./alert-B63btnMF.js";import"./close-button-ERbTtWXY.js";import"./use-ripple-bahltC27.js";import"./container-DnslSSdx.js";import"./box-BMuUZYWP.js";import"./text-D1mCFSxx.js";import"./checkbox-CkhrFoGt.js";import"./index-Cd_6Vxlk.js";import"./index-AEOZ2ZJT.js";import"./index-CAFI9pe4.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CMpatZvi.js";import"./index-BiU9JfDX.js";import"./index-BC2fJpjq.js";import"./index-BRxq38iM.js";import"./index-58rlMJFI.js";import"./index-DvmWYllV.js";import"./slide-fade-DXt_l2ly.js";import"./utils-CjZAsgMN.js";import"./scale-fade-DytBqAu_.js";import"./index-eSD88g-m.js";import"./index-PMfx84N2.js";import"./select-DptZcDqi.js";import"./option-BUMRkRMy.js";import"./index-mMbOwMyI.js";import"./popover-content-CYV3XEV7.js";import"./index-Bs-lF4nn.js";import"./index-CJoenRMx.js";const wr={title:"Components / Forms / Switch",component:r},i=()=>e.jsx(r,{children:"basic"}),a=()=>e.jsx(r,{isReverse:!0,children:"basic"}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=se.useId();return e.jsxs(ie,{gap:"sm",children:[e.jsx(ae,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultIsChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,children:"disabled"}),e.jsx(r,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,children:"read only"}),e.jsx(r,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=oe(!1);return e.jsx(r,{isChecked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=s=>console.log("submit:",s);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:s,...n}})=>e.jsx(r,{isChecked:s,...n,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),s=n=>console.log("submit:",n);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(s),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:n,...te}})=>e.jsx(r,{isChecked:n,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,x,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
