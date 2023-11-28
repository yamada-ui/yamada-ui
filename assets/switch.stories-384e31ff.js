import{j as r,a as e,F as I}from"./jsx-runtime-b08f8875.js";import{r as ne}from"./index-8ee6c85d.js";import{u as ce,C as re}from"./index.esm-b68ff52f.js";import{b as ge}from"./checkbox-46ff8bad.js";import{m as be}from"./motion-5447b2d8.js";import{f as Ie}from"./forward-ref-cf7188bd.js";import{a as ye}from"./use-component-style-873f0974.js";import{o as De}from"./theme-provider-9d5cd644.js";import{d as l,e as h,A as ve,v as xe}from"./factory-7bddb6ec.js";import{L as _e}from"./form-control-8e97ab42.js";import{H as ze,V as oe}from"./stack-6e2bfede.js";import{W as Fe}from"./flex-e769fe53.js";import{u as Pe}from"./index-c3db8104.js";import{B as ae}from"./button-1f60b64e.js";import"./_commonjsHelpers-de833af9.js";import"./index-0a4d4100.js";import"./index-fb6972ca.js";import"./index-709acde9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";const t=Ie((c,o)=>{const[a,s]=ye("Switch",c),{className:n,gap:i="0.5rem",children:d,icon:y,inputProps:ie,labelProps:se,isReverse:le,flexDirection:he,transition:de={type:"spring",stiffness:700,damping:40},...D}=De(s),{isChecked:v,isFocused:ue,isHovered:me,isActive:Se,getContainerProps:we,getIconProps:pe,getInputProps:fe,getLabelProps:ke}=ge(D),Ce=y?ne.cloneElement(y,{isChecked:v,isFocused:ue,isHovered:me,isActive:Se}):null;return r(l.label,{ref:o,className:h("ui-switch",n),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:he??(le?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:i,...a.container},...we(),...ve(D,["id","name","value","defaultValue","checked","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),children:[e(l.input,{className:h("ui-switch__input",n),...fe(ie,o)}),Ce??e(l.span,{className:h("ui-switch__track",n),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...a.track},...pe(),children:e(l.span,{as:be.span,className:h("ui-switch__thumb",n),"data-checked":xe(v),layout:!0,transition:de,__css:{...a.thumb}})}),d?e(l.span,{className:h("ui-switch__label",n),__css:{...a.label},...ke(se),children:d}):null]})}),tt={title:"Components / Forms / Switch",component:t},u=()=>e(t,{isReverse:!0,children:"basic"}),m=()=>r(I,{children:[e(t,{size:"sm",children:"small size"}),e(t,{size:"md",children:"medium size"}),e(t,{size:"lg",children:"large size"})]}),S=()=>r(I,{children:[e(t,{variant:"thick",children:"thick"}),e(t,{variant:"thin",children:"thin"})]}),w=()=>{const c=ne.useId();return r(ze,{gap:"sm",children:[e(_e,{htmlFor:c,userSelect:"none",children:"Please Click"}),e(t,{id:c})]})},p=()=>r(Fe,{gap:"md",children:[e(t,{colorScheme:"primary",defaultIsChecked:!0,children:"Primary"}),e(t,{colorScheme:"secondary",defaultIsChecked:!0,children:"Secondary"}),e(t,{colorScheme:"warning",defaultIsChecked:!0,children:"Warning"}),e(t,{colorScheme:"danger",defaultIsChecked:!0,children:"Danger"}),e(t,{colorScheme:"link",defaultIsChecked:!0,children:"Link"}),e(t,{colorScheme:"gray",defaultIsChecked:!0,children:"Gray"}),e(t,{colorScheme:"zinc",defaultIsChecked:!0,children:"Zinc"}),e(t,{colorScheme:"neutral",defaultIsChecked:!0,children:"Neutral"}),e(t,{colorScheme:"stone",defaultIsChecked:!0,children:"Stone"}),e(t,{colorScheme:"red",defaultIsChecked:!0,children:"Red"}),e(t,{colorScheme:"rose",defaultIsChecked:!0,children:"Rose"}),e(t,{colorScheme:"pink",defaultIsChecked:!0,children:"Pink"}),e(t,{colorScheme:"orange",defaultIsChecked:!0,children:"Orange"}),e(t,{colorScheme:"amber",defaultIsChecked:!0,children:"Amber"}),e(t,{colorScheme:"yellow",defaultIsChecked:!0,children:"Yellow"}),e(t,{colorScheme:"lime",defaultIsChecked:!0,children:"Lime"}),e(t,{colorScheme:"green",defaultIsChecked:!0,children:"Green"}),e(t,{colorScheme:"emerald",defaultIsChecked:!0,children:"Emerald"}),e(t,{colorScheme:"teal",defaultIsChecked:!0,children:"Teal"}),e(t,{colorScheme:"cyan",defaultIsChecked:!0,children:"Cyan"}),e(t,{colorScheme:"sky",defaultIsChecked:!0,children:"Sky"}),e(t,{colorScheme:"blue",defaultIsChecked:!0,children:"Blue"}),e(t,{colorScheme:"indigo",defaultIsChecked:!0,children:"Indigo"}),e(t,{colorScheme:"violet",defaultIsChecked:!0,children:"Violet"}),e(t,{colorScheme:"purple",defaultIsChecked:!0,children:"Purple"}),e(t,{colorScheme:"fuchsia",defaultIsChecked:!0,children:"Fuchsia"})]}),f=()=>r(I,{children:[e(t,{isDisabled:!0,children:"disabled"}),e(t,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),k=()=>r(I,{children:[e(t,{isReadOnly:!0,children:"read only"}),e(t,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),C=()=>{const[c,{toggle:o}]=Pe(!1);return e(t,{isChecked:c,onChange:o,children:"custom control"})},g=()=>{const{control:c,handleSubmit:o,watch:a}=ce(),s=n=>console.log("submit:",n);return console.log("watch:",a()),r(oe,{as:"form",onSubmit:o(s),children:[e(re,{name:"switch",control:c,render:({field:{value:n,...i}})=>e(t,{isChecked:n,...i,children:"Dark mode"})}),e(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},b=()=>{const c={switch:!0},{control:o,handleSubmit:a,watch:s}=ce({defaultValues:c}),n=i=>console.log("submit:",i);return console.log("watch:",s()),r(oe,{as:"form",onSubmit:a(n),children:[e(re,{name:"switch",control:o,render:({field:{value:i,...d}})=>e(t,{isChecked:i,...d,children:"Dark mode"})}),e(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var x,_,z;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(z=(_=u.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,P,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,B,H;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(H=(B=S.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,N,O;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(O=(N=w.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var W,A,j;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Switch colorScheme="primary" defaultIsChecked>
        Primary
      </Switch>

      <Switch colorScheme="secondary" defaultIsChecked>
        Secondary
      </Switch>

      <Switch colorScheme="warning" defaultIsChecked>
        Warning
      </Switch>

      <Switch colorScheme="danger" defaultIsChecked>
        Danger
      </Switch>

      <Switch colorScheme="link" defaultIsChecked>
        Link
      </Switch>

      <Switch colorScheme="gray" defaultIsChecked>
        Gray
      </Switch>

      <Switch colorScheme="zinc" defaultIsChecked>
        Zinc
      </Switch>

      <Switch colorScheme="neutral" defaultIsChecked>
        Neutral
      </Switch>

      <Switch colorScheme="stone" defaultIsChecked>
        Stone
      </Switch>

      <Switch colorScheme="red" defaultIsChecked>
        Red
      </Switch>

      <Switch colorScheme="rose" defaultIsChecked>
        Rose
      </Switch>

      <Switch colorScheme="pink" defaultIsChecked>
        Pink
      </Switch>

      <Switch colorScheme="orange" defaultIsChecked>
        Orange
      </Switch>

      <Switch colorScheme="amber" defaultIsChecked>
        Amber
      </Switch>

      <Switch colorScheme="yellow" defaultIsChecked>
        Yellow
      </Switch>

      <Switch colorScheme="lime" defaultIsChecked>
        Lime
      </Switch>

      <Switch colorScheme="green" defaultIsChecked>
        Green
      </Switch>

      <Switch colorScheme="emerald" defaultIsChecked>
        Emerald
      </Switch>

      <Switch colorScheme="teal" defaultIsChecked>
        Teal
      </Switch>

      <Switch colorScheme="cyan" defaultIsChecked>
        Cyan
      </Switch>

      <Switch colorScheme="sky" defaultIsChecked>
        Sky
      </Switch>

      <Switch colorScheme="blue" defaultIsChecked>
        Blue
      </Switch>

      <Switch colorScheme="indigo" defaultIsChecked>
        Indigo
      </Switch>

      <Switch colorScheme="violet" defaultIsChecked>
        Violet
      </Switch>

      <Switch colorScheme="purple" defaultIsChecked>
        Purple
      </Switch>

      <Switch colorScheme="fuchsia" defaultIsChecked>
        Fuchsia
      </Switch>
    </Wrap>;
}`,...(j=(A=p.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var E,G,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultIsChecked>
        disabled
      </Switch>
    </>;
}`,...(T=(G=f.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var Y,Z,M;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
        read only
      </Switch>
    </>;
}`,...(M=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:M.source}}};var q,J,K;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,ee,te;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const nt=["withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{nt as __namedExportsOrder,C as customControl,tt as default,f as isDisabled,k as isReadonly,g as reactHookForm,b as reactHookFormWithDefaultValue,p as withColorScheme,w as withLabel,u as withReverse,m as withSize,S as withVariant};
//# sourceMappingURL=switch.stories-384e31ff.js.map
