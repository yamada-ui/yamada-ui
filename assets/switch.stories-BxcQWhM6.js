import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as oe}from"./index-Bv9Y92EF.js";import{u as Z,C as $}from"./index.esm-DdgAP9ly.js";import{h as r,c as ne}from"./components-BAAl2FdL.js";import{H as ae,V as ee}from"./stack-DL8tKm2J.js";import{L as se}from"./form-control-C8eO6U25.js";import{W as ce}from"./flex-B0SWTXUi.js";import{u as ie}from"./index-YFprnXPi.js";import{B as re}from"./button-nZ2ZqBRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-DsbwOWxu.js";import"./factory-7Z88KRtK.js";import"./box-Ds8SIjx6.js";import"./text-KN7rBBtq.js";import"./forward-ref-DH6f5tnY.js";import"./use-component-style-DHLtMqa5.js";import"./index-CQqf5rDh.js";import"./use-checkbox-Dj2PfqIK.js";import"./index-DNaxzNVT.js";import"./factory-UaNlpug7.js";import"./proxy-r-x5KraU.js";import"./index-D3uVnNfI.js";import"./index-DCkI3YJn.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-Bz9rJ8_M.js";import"./tooltip-Bqvs1x-w.js";import"./index-BhIdR6KT.js";import"./index-vKAUfVXn.js";import"./index-B_yC7JIW.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./index-B2HRqSdn.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./slide-fade-CwK7Wr_w.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./scale-fade-D309oxZP.js";import"./index-CHX88LJr.js";import"./index-DrADDttQ.js";import"./select-Bx_8s32I.js";import"./select-list-DgjlmZ5-.js";import"./index-BdmKGyZV.js";import"./icon-DKuqv-9Z.js";import"./popover-trigger-T6UAq76Q.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-M_HQDTPf.js";import"./index-BimsXrcc.js";import"./loading-DVofVDF_.js";const cr={component:r,title:"Components / Forms / Switch"},s=()=>e.jsx(r,{children:"basic"}),c=()=>e.jsx(r,{reverse:!0,children:"basic"}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=oe.useId();return e.jsxs(ae,{gap:"sm",children:[e.jsx(se,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,children:"disabled"}),e.jsx(r,{defaultChecked:!0,disabled:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{readOnly:!0,children:"read only"}),e.jsx(r,{defaultChecked:!0,readOnly:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=ie(!1);return e.jsx(r,{checked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=n=>console.log("submit:",n);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:n,...a}})=>e.jsx(r,{checked:n,...a,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),n=a=>console.log("submit:",a);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(n),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:a,...te}})=>e.jsx(r,{checked:a,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,k,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Switch>basic</Switch>;
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var j,C,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Switch reverse>basic</Switch>;
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var z,F,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var V,v,H;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(H=(v=m.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var B,O,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var W,E,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Switch key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Switch>)}
    </Wrap>;
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var I,P,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <>
      <Switch disabled>disabled</Switch>
      <Switch defaultChecked disabled>
        disabled
      </Switch>
    </>;
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,A,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Switch readOnly>read only</Switch>
      <Switch defaultChecked readOnly>
        read only
      </Switch>
    </>;
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,M;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch checked={isChecked} onChange={toggle}>
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
    }) => <Switch checked={value} {...rest}>
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
    }) => <Switch checked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ir=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","disabled","readOnly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ir as __namedExportsOrder,s as basic,p as customControl,cr as default,u as disabled,S as reactHookForm,w as reactHookFormWithDefaultValue,h as readOnly,d as withColorScheme,l as withLabel,c as withReverse,i as withSize,m as withVariant};
