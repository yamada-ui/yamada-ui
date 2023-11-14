import{j as r,a as e,F as y}from"./jsx-runtime-b08f8875.js";import{r as ne}from"./index-8ee6c85d.js";import{u as ce,C as re}from"./index.esm-b68ff52f.js";import{b as ge}from"./checkbox-972cce9a.js";import{m as be}from"./motion-5447b2d8.js";import{f as ye}from"./forward-ref-cf7188bd.js";import{a as De}from"./use-component-style-b6002d28.js";import{o as ve}from"./theme-provider-78d359c6.js";import{d as s,e as h,A as xe,v as _e}from"./factory-2d442159.js";import{L as ze}from"./form-control-cf335ace.js";import{H as Fe,V as oe}from"./stack-57e4b232.js";import{W as Pe}from"./flex-b4dc1d01.js";import{u as Re}from"./index-c3db8104.js";import{B as ae}from"./button-a09a9cfc.js";import"./_commonjsHelpers-de833af9.js";import"./index-86a0317b.js";import"./index-432541ee.js";import"./index-709acde9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-9c6ba408.js";import"./index-7636bab8.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./icon-a76117e5.js";const t=ye((c,o)=>{const[a,l]=De("Switch",c),{className:n,gap:i="0.5rem",children:d,icon:D,inputProps:ie,labelProps:le,isReverse:se,flexDirection:he,transition:de={type:"spring",stiffness:700,damping:40},...v}=ve(l),{isChecked:x,isFocused:ue,isHovered:me,isActive:Se,getContainerProps:we,getIconProps:pe,getInputProps:fe,getLabelProps:ke}=ge(v),Ce=D?ne.cloneElement(D,{isChecked:x,isFocused:ue,isHovered:me,isActive:Se}):null;return r(s.label,{ref:o,className:h("ui-switch",n),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:he??(se?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:i,...a.container},...we(),...xe(v,["id","name","value","defaultValue","checked","defaultChecked","isChecked","onChange","onBlur","onFocus"]),children:[e(s.input,{className:h("ui-switch__input",n),...fe(ie,o)}),Ce??e(s.span,{className:h("ui-switch__track",n),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...a.track},...pe(),children:e(s.span,{as:be.span,className:h("ui-switch__thumb",n),"data-checked":_e(x),layout:!0,transition:de,__css:{...a.thumb}})}),d?e(s.span,{className:h("ui-switch__label",n),__css:{...a.label},...ke(le),children:d}):null]})}),tt={title:"Components / Forms / Switch",component:t},u=()=>e(t,{isReverse:!0,children:"basic"}),m=()=>r(y,{children:[e(t,{size:"sm",children:"small size"}),e(t,{size:"md",children:"medium size"}),e(t,{size:"lg",children:"large size"})]}),S=()=>r(y,{children:[e(t,{variant:"thick",children:"thick"}),e(t,{variant:"thin",children:"thin"})]}),w=()=>{const c=ne.useId();return r(Fe,{gap:"sm",children:[e(ze,{htmlFor:c,userSelect:"none",children:"Please Click"}),e(t,{id:c})]})},p=()=>r(Pe,{gap:"md",children:[e(t,{colorScheme:"primary",defaultChecked:!0,children:"Primary"}),e(t,{colorScheme:"secondary",defaultChecked:!0,children:"Secondary"}),e(t,{colorScheme:"warning",defaultChecked:!0,children:"Warning"}),e(t,{colorScheme:"danger",defaultChecked:!0,children:"Danger"}),e(t,{colorScheme:"link",defaultChecked:!0,children:"Link"}),e(t,{colorScheme:"gray",defaultChecked:!0,children:"Gray"}),e(t,{colorScheme:"zinc",defaultChecked:!0,children:"Zinc"}),e(t,{colorScheme:"neutral",defaultChecked:!0,children:"Neutral"}),e(t,{colorScheme:"stone",defaultChecked:!0,children:"Stone"}),e(t,{colorScheme:"red",defaultChecked:!0,children:"Red"}),e(t,{colorScheme:"rose",defaultChecked:!0,children:"Rose"}),e(t,{colorScheme:"pink",defaultChecked:!0,children:"Pink"}),e(t,{colorScheme:"orange",defaultChecked:!0,children:"Orange"}),e(t,{colorScheme:"amber",defaultChecked:!0,children:"Amber"}),e(t,{colorScheme:"yellow",defaultChecked:!0,children:"Yellow"}),e(t,{colorScheme:"lime",defaultChecked:!0,children:"Lime"}),e(t,{colorScheme:"green",defaultChecked:!0,children:"Green"}),e(t,{colorScheme:"emerald",defaultChecked:!0,children:"Emerald"}),e(t,{colorScheme:"teal",defaultChecked:!0,children:"Teal"}),e(t,{colorScheme:"cyan",defaultChecked:!0,children:"Cyan"}),e(t,{colorScheme:"sky",defaultChecked:!0,children:"Sky"}),e(t,{colorScheme:"blue",defaultChecked:!0,children:"Blue"}),e(t,{colorScheme:"indigo",defaultChecked:!0,children:"Indigo"}),e(t,{colorScheme:"violet",defaultChecked:!0,children:"Violet"}),e(t,{colorScheme:"purple",defaultChecked:!0,children:"Purple"}),e(t,{colorScheme:"fuchsia",defaultChecked:!0,children:"Fuchsia"})]}),f=()=>r(y,{children:[e(t,{isDisabled:!0,children:"disabled"}),e(t,{isDisabled:!0,defaultChecked:!0,children:"disabled"})]}),k=()=>r(y,{children:[e(t,{isReadOnly:!0,children:"read only"}),e(t,{isReadOnly:!0,defaultChecked:!0,children:"read only"})]}),C=()=>{const[c,{toggle:o}]=Re(!1);return e(t,{isChecked:c,onChange:o,children:"custom control"})},g=()=>{const{control:c,handleSubmit:o,watch:a}=ce(),l=n=>console.log("submit:",n);return console.log("watch:",a()),r(oe,{as:"form",onSubmit:o(l),children:[e(re,{name:"switch",control:c,render:({field:{value:n,...i}})=>e(t,{isChecked:n,...i,children:"Dark mode"})}),e(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},b=()=>{const c={switch:!0},{control:o,handleSubmit:a,watch:l}=ce({defaultValues:c}),n=i=>console.log("submit:",i);return console.log("watch:",l()),r(oe,{as:"form",onSubmit:a(n),children:[e(re,{name:"switch",control:o,render:({field:{value:i,...d}})=>e(t,{isChecked:i,...d,children:"Dark mode"})}),e(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var _,z,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,R,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,H,L;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(L=(H=S.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var I,N,O;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(O=(N=w.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var W,A,j;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Switch colorScheme="primary" defaultChecked>
        Primary
      </Switch>

      <Switch colorScheme="secondary" defaultChecked>
        Secondary
      </Switch>

      <Switch colorScheme="warning" defaultChecked>
        Warning
      </Switch>

      <Switch colorScheme="danger" defaultChecked>
        Danger
      </Switch>

      <Switch colorScheme="link" defaultChecked>
        Link
      </Switch>

      <Switch colorScheme="gray" defaultChecked>
        Gray
      </Switch>

      <Switch colorScheme="zinc" defaultChecked>
        Zinc
      </Switch>

      <Switch colorScheme="neutral" defaultChecked>
        Neutral
      </Switch>

      <Switch colorScheme="stone" defaultChecked>
        Stone
      </Switch>

      <Switch colorScheme="red" defaultChecked>
        Red
      </Switch>

      <Switch colorScheme="rose" defaultChecked>
        Rose
      </Switch>

      <Switch colorScheme="pink" defaultChecked>
        Pink
      </Switch>

      <Switch colorScheme="orange" defaultChecked>
        Orange
      </Switch>

      <Switch colorScheme="amber" defaultChecked>
        Amber
      </Switch>

      <Switch colorScheme="yellow" defaultChecked>
        Yellow
      </Switch>

      <Switch colorScheme="lime" defaultChecked>
        Lime
      </Switch>

      <Switch colorScheme="green" defaultChecked>
        Green
      </Switch>

      <Switch colorScheme="emerald" defaultChecked>
        Emerald
      </Switch>

      <Switch colorScheme="teal" defaultChecked>
        Teal
      </Switch>

      <Switch colorScheme="cyan" defaultChecked>
        Cyan
      </Switch>

      <Switch colorScheme="sky" defaultChecked>
        Sky
      </Switch>

      <Switch colorScheme="blue" defaultChecked>
        Blue
      </Switch>

      <Switch colorScheme="indigo" defaultChecked>
        Indigo
      </Switch>

      <Switch colorScheme="violet" defaultChecked>
        Violet
      </Switch>

      <Switch colorScheme="purple" defaultChecked>
        Purple
      </Switch>

      <Switch colorScheme="fuchsia" defaultChecked>
        Fuchsia
      </Switch>
    </Wrap>;
}`,...(j=(A=p.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var E,G,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultChecked>
        disabled
      </Switch>
    </>;
}`,...(T=(G=f.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var Y,Z,M;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultChecked>
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
//# sourceMappingURL=switch.stories-d28e8d95.js.map
