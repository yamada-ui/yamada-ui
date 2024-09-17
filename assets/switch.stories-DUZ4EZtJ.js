import{j as e}from"./extends-CwFRzn3r.js";import{u as oe}from"./index-Du0-7Fls.js";import{r as se}from"./index-BwDkhjyp.js";import{u as Z,C as $}from"./index.esm-DXPXqkjk.js";import{h as r,c as ne}from"./components-DSMJx3k5.js";import{H as ie,V as ee}from"./stack-D4S-2JYT.js";import{L as ae}from"./form-control-wNB_sh9j.js";import{W as ce}from"./flex-uUFGZwrf.js";import{B as re}from"./button-y-1VIkvD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BM_Ccg1d.js";import"./factory-BjF4_dRw.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./theme-provider-CpaSpGZh.js";import"./ui-provider-Bsa2Wmgf.js";import"./index-MCBmKyEn.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./use-component-style-DVO-iEPi.js";import"./forward-ref-BWI-Phbn.js";import"./factory-COh1-7fC.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./container-B3-Ah45D.js";import"./box-B5FcoOR4.js";import"./text-CpJ_XsDk.js";import"./checkbox-vlO53CvA.js";import"./index-WsJcG9Vu.js";import"./index-BaNhddRa.js";import"./index-B4Eu0jvp.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-BqI1L0G9.js";import"./index-DA9-26wc.js";import"./index-CWXuA_sE.js";import"./index-DroqNDDt.js";import"./index-D-jN3opM.js";import"./index-BxBWkPyk.js";import"./slide-fade-Deo3lGhM.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";import"./index-Dy1RW4Oq.js";import"./index-BAaRSIWS.js";import"./select-CmFZa2F9.js";import"./select-list-ClKoitK3.js";import"./index-BjUO4q1E.js";import"./popover-content-qljWb4pK.js";import"./index-is6smmpS.js";import"./index-C53kKj3W.js";const Sr={title:"Components / Forms / Switch",component:r},i=()=>e.jsx(r,{children:"basic"}),a=()=>e.jsx(r,{isReverse:!0,children:"basic"}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=se.useId();return e.jsxs(ie,{gap:"sm",children:[e.jsx(ae,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultIsChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,children:"disabled"}),e.jsx(r,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,children:"read only"}),e.jsx(r,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=oe(!1);return e.jsx(r,{isChecked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=s=>console.log("submit:",s);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:s,...n}})=>e.jsx(r,{isChecked:s,...n,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),s=n=>console.log("submit:",n);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(s),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:n,...te}})=>e.jsx(r,{isChecked:n,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,x,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const wr=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{wr as __namedExportsOrder,i as basic,p as customControl,Sr as default,u as isDisabled,h as isReadonly,S as reactHookForm,w as reactHookFormWithDefaultValue,d as withColorScheme,l as withLabel,a as withReverse,c as withSize,m as withVariant};
