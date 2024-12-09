import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as oe}from"./index-ClcD9ViR.js";import{u as Z,C as $}from"./index.esm-CEdvtQ_U.js";import{h as r,c as se}from"./components-DwxTyLM4.js";import{H as ne,V as ee}from"./stack-C-NTCosl.js";import{L as ae}from"./form-control-CsCePsX1.js";import{W as ie}from"./flex-ZeDiVseB.js";import{u as ce}from"./index-gGKStiao.js";import{B as re}from"./button-CP_V-DFs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-B08WIPTu.js";import"./factory-ZSnRp-09.js";import"./box-C9iD9jp7.js";import"./text-Q2VnSl4h.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-Bj6hwx_Q.js";import"./index-CReU6qRk.js";import"./use-checkbox-U_dzeJq7.js";import"./index-C676fJGf.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-BaE0cyT7.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./icon-D-mdHq7J.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-Bnw1OyhA.js";import"./loading-YSmVr9V5.js";const ar={component:r,title:"Components / Forms / Switch"},a=()=>e.jsx(r,{children:"basic"}),i=()=>e.jsx(r,{isReverse:!0,children:"basic"}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=oe.useId();return e.jsxs(ne,{gap:"sm",children:[e.jsx(ae,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ie,{gap:"md",children:se.map(t=>e.jsx(r,{colorScheme:t,defaultIsChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,children:"disabled"}),e.jsx(r,{defaultIsChecked:!0,isDisabled:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,children:"read only"}),e.jsx(r,{defaultIsChecked:!0,isReadOnly:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=ce(!1);return e.jsx(r,{isChecked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=s=>console.log("submit:",s);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:s,...n}})=>e.jsx(r,{isChecked:s,...n,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),s=n=>console.log("submit:",n);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(s),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:n,...te}})=>e.jsx(r,{isChecked:n,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,x,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Switch>basic</Switch>;
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,C,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,z,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ir=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ir as __namedExportsOrder,a as basic,p as customControl,ar as default,u as isDisabled,h as isReadonly,S as reactHookForm,w as reactHookFormWithDefaultValue,d as withColorScheme,l as withLabel,i as withReverse,c as withSize,m as withVariant};
