import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as oe}from"./index-BwPxMuoB.js";import{u as Z,C as $}from"./index.esm-C038jXrr.js";import{h as r,c as ne}from"./components-UqfDC4B9.js";import{H as ae,V as ee}from"./stack-D_e4Awei.js";import{L as se}from"./form-control-4O_IQfgA.js";import{W as ce}from"./flex-DvtQc3o-.js";import{u as ie}from"./index-qZwaV1-B.js";import{B as re}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-DGyR61Aa.js";import"./factory-B_KMcXyW.js";import"./box-B5b1ezDi.js";import"./text-clsxocLN.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./index-CmygkWjO.js";import"./use-checkbox-D04DuIcU.js";import"./index-CuS4wVb_.js";import"./factory-CplEbptb.js";import"./proxy-qc5arozF.js";import"./index-DLOQPSsO.js";import"./index-CpILZzml.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-Tj-aA0qb.js";import"./tooltip-BjQKmVlx.js";import"./index-HHw4H1QN.js";import"./index-2pdm5d7T.js";import"./index-8mCCCrtj.js";import"./index-swnplGbx.js";import"./index-AoowuF6j.js";import"./index-2ihZSkad.js";import"./portal-DnDmgWrA.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-B3WI7AqC.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-DODAe1Af.js";import"./scale-fade-B70jfWAg.js";import"./index-Bbp3WuCW.js";import"./index-iqP3Qh_g.js";import"./select-D8Sm63Mk.js";import"./select-list-C94BFRlV.js";import"./index-tjcNNcsH.js";import"./icon-DIzRaLo1.js";import"./popover-trigger-lFjT6k2t.js";import"./close-button-DYk-GqDy.js";import"./use-ripple-DqSHYmP8.js";import"./index-kCrJIFe4.js";import"./index-rMDCi0HR.js";import"./loading-C3oE1vJx.js";const cr={component:r,title:"Components / Forms / Switch"},s=()=>e.jsx(r,{children:"basic"}),c=()=>e.jsx(r,{reverse:!0,children:"basic"}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",children:"small size"}),e.jsx(r,{size:"md",children:"medium size"}),e.jsx(r,{size:"lg",children:"large size"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"thick",children:"thick"}),e.jsx(r,{variant:"thin",children:"thin"})]}),l=()=>{const t=oe.useId();return e.jsxs(ae,{gap:"sm",children:[e.jsx(se,{htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(r,{id:t})]})},d=()=>e.jsx(ce,{gap:"md",children:ne.map(t=>e.jsx(r,{colorScheme:t,defaultChecked:!0,children:t},t))}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,children:"disabled"}),e.jsx(r,{defaultChecked:!0,disabled:!0,children:"disabled"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{readOnly:!0,children:"read only"}),e.jsx(r,{defaultChecked:!0,readOnly:!0,children:"read only"})]}),p=()=>{const[t,{toggle:o}]=ie(!1);return e.jsx(r,{checked:t,onChange:o,children:"custom control"})},S=()=>{const{control:t,handleSubmit:o,watch:b}=Z(),g=n=>console.log("submit:",n);return console.log("watch:",b()),e.jsxs(ee,{as:"form",onSubmit:o(g),children:[e.jsx($,{name:"switch",control:t,render:({field:{value:n,...a}})=>e.jsx(r,{checked:n,...a,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{const t={switch:!0},{control:o,handleSubmit:b,watch:g}=Z({defaultValues:t}),n=a=>console.log("submit:",a);return console.log("watch:",g()),e.jsxs(ee,{as:"form",onSubmit:b(n),children:[e.jsx($,{name:"switch",control:o,render:({field:{value:a,...te}})=>e.jsx(r,{checked:a,...te,children:"Dark mode"})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var f,k,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
