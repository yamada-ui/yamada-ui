import{j as c,a as e,F as b}from"./jsx-runtime-b08f8875.js";import{r as te}from"./index-8ee6c85d.js";import{u as ne,C as ce}from"./index.esm-3dbb7ee1.js";import{b as Ce}from"./checkbox-371911cc.js";import{m as ge}from"./motion-5447b2d8.js";import{f as be}from"./forward-ref-cf7188bd.js";import{a as ye}from"./use-component-style-07e84389.js";import{o as De}from"./theme-provider-1097130b.js";import{d as s,e as ve,A as xe,v as ze}from"./factory-ab7c3580.js";import{L as Fe}from"./form-control-0c70b557.js";import{H as Pe,V as re}from"./stack-f811b10a.js";import{W as Re}from"./flex-eedf9e68.js";import{u as Ve}from"./index-c3db8104.js";import{B as oe}from"./button-401f14b3.js";import"./_commonjsHelpers-de833af9.js";import"./index-e3531a5c.js";import"./index-7c833fdd.js";import"./index-709acde9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./icon-1c0bf186.js";const t=be((n,r)=>{const[o,l]=ye("Switch",n),{className:a,gap:i="0.5rem",children:h,icon:y,inputProps:ae,labelProps:ie,isReverse:le,flexDirection:se,transition:he={type:"spring",stiffness:700,damping:40},...D}=De(l),{isChecked:v,isFocused:de,isHovered:ue,isActive:me,getContainerProps:Se,getIconProps:we,getInputProps:pe,getLabelProps:fe}=Ce(D),ke=y?te.cloneElement(y,{isChecked:v,isFocused:de,isHovered:ue,isActive:me}):null;return c(s.label,{ref:r,className:ve("ui-switch",a),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:se??(le?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:i,...o.container},...Se(),...xe(D,["id","name","value","defaultValue","checked","defaultChecked","isChecked","onChange","onBlur","onFocus"]),children:[e(s.input,{className:"ui-switch-input",...pe(ae,r)}),ke??e(s.span,{className:"ui-switch-track",__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...o.track},...we(),children:e(s.span,{as:ge.span,className:"ui-switch-thumb","data-checked":ze(v),layout:!0,transition:he,__css:{...o.thumb}})}),h?e(s.span,{className:"ui-switch-label",__css:{...o.label},...fe(ie),children:h}):null]})}),tt={title:"Components / Forms / Switch",component:t},d=()=>e(t,{isReverse:!0,children:"basic"}),u=()=>c(b,{children:[e(t,{size:"sm",children:"small size"}),e(t,{size:"md",children:"medium size"}),e(t,{size:"lg",children:"large size"})]}),m=()=>c(b,{children:[e(t,{variant:"thick",children:"thick"}),e(t,{variant:"thin",children:"thin"})]}),S=()=>{const n=te.useId();return c(Pe,{gap:"sm",children:[e(Fe,{htmlFor:n,userSelect:"none",children:"Please Click"}),e(t,{id:n})]})},w=()=>c(Re,{gap:"md",children:[e(t,{colorScheme:"primary",defaultChecked:!0,children:"Primary"}),e(t,{colorScheme:"secondary",defaultChecked:!0,children:"Secondary"}),e(t,{colorScheme:"warning",defaultChecked:!0,children:"Warning"}),e(t,{colorScheme:"danger",defaultChecked:!0,children:"Danger"}),e(t,{colorScheme:"link",defaultChecked:!0,children:"Link"}),e(t,{colorScheme:"gray",defaultChecked:!0,children:"Gray"}),e(t,{colorScheme:"zinc",defaultChecked:!0,children:"Zinc"}),e(t,{colorScheme:"neutral",defaultChecked:!0,children:"Neutral"}),e(t,{colorScheme:"stone",defaultChecked:!0,children:"Stone"}),e(t,{colorScheme:"red",defaultChecked:!0,children:"Red"}),e(t,{colorScheme:"rose",defaultChecked:!0,children:"Rose"}),e(t,{colorScheme:"pink",defaultChecked:!0,children:"Pink"}),e(t,{colorScheme:"orange",defaultChecked:!0,children:"Orange"}),e(t,{colorScheme:"amber",defaultChecked:!0,children:"Amber"}),e(t,{colorScheme:"yellow",defaultChecked:!0,children:"Yellow"}),e(t,{colorScheme:"lime",defaultChecked:!0,children:"Lime"}),e(t,{colorScheme:"green",defaultChecked:!0,children:"Green"}),e(t,{colorScheme:"emerald",defaultChecked:!0,children:"Emerald"}),e(t,{colorScheme:"teal",defaultChecked:!0,children:"Teal"}),e(t,{colorScheme:"cyan",defaultChecked:!0,children:"Cyan"}),e(t,{colorScheme:"sky",defaultChecked:!0,children:"Sky"}),e(t,{colorScheme:"blue",defaultChecked:!0,children:"Blue"}),e(t,{colorScheme:"indigo",defaultChecked:!0,children:"Indigo"}),e(t,{colorScheme:"violet",defaultChecked:!0,children:"Violet"}),e(t,{colorScheme:"purple",defaultChecked:!0,children:"Purple"}),e(t,{colorScheme:"fuchsia",defaultChecked:!0,children:"Fuchsia"})]}),p=()=>c(b,{children:[e(t,{isDisabled:!0,children:"disabled"}),e(t,{isDisabled:!0,defaultChecked:!0,children:"disabled"})]}),f=()=>c(b,{children:[e(t,{isReadOnly:!0,children:"read only"}),e(t,{isReadOnly:!0,defaultChecked:!0,children:"read only"})]}),k=()=>{const[n,{toggle:r}]=Ve(!1);return e(t,{isChecked:n,onChange:r,children:"custom control"})},C=()=>{const{control:n,handleSubmit:r,watch:o}=ne(),l=a=>console.log("submit:",a);return console.log("watch:",o()),c(re,{as:"form",onSubmit:r(l),children:[e(ce,{name:"switch",control:n,render:({field:{value:a,...i}})=>e(t,{isChecked:a,...i,children:"Dark mode"})}),e(oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},g=()=>{const n={switch:!0},{control:r,handleSubmit:o,watch:l}=ne({defaultValues:n}),a=i=>console.log("submit:",i);return console.log("watch:",l()),c(re,{as:"form",onSubmit:o(a),children:[e(ce,{name:"switch",control:r,render:({field:{value:i,...h}})=>e(t,{isChecked:i,...h,children:"Dark mode"})}),e(oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var x,z,F;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,R,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Switch size='sm'>small size</Switch>
      <Switch size='md'>medium size</Switch>
      <Switch size='lg'>large size</Switch>
    </>;
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,H,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Switch variant='thick'>thick</Switch>
      <Switch variant='thin'>thin</Switch>
    </>;
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var _,I,N;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap='sm'>
      <Label htmlFor={id} userSelect='none'>
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(N=(I=S.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var O,W,A;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Switch colorScheme='primary' defaultChecked>
        Primary
      </Switch>

      <Switch colorScheme='secondary' defaultChecked>
        Secondary
      </Switch>

      <Switch colorScheme='warning' defaultChecked>
        Warning
      </Switch>

      <Switch colorScheme='danger' defaultChecked>
        Danger
      </Switch>

      <Switch colorScheme='link' defaultChecked>
        Link
      </Switch>

      <Switch colorScheme='gray' defaultChecked>
        Gray
      </Switch>

      <Switch colorScheme='zinc' defaultChecked>
        Zinc
      </Switch>

      <Switch colorScheme='neutral' defaultChecked>
        Neutral
      </Switch>

      <Switch colorScheme='stone' defaultChecked>
        Stone
      </Switch>

      <Switch colorScheme='red' defaultChecked>
        Red
      </Switch>

      <Switch colorScheme='rose' defaultChecked>
        Rose
      </Switch>

      <Switch colorScheme='pink' defaultChecked>
        Pink
      </Switch>

      <Switch colorScheme='orange' defaultChecked>
        Orange
      </Switch>

      <Switch colorScheme='amber' defaultChecked>
        Amber
      </Switch>

      <Switch colorScheme='yellow' defaultChecked>
        Yellow
      </Switch>

      <Switch colorScheme='lime' defaultChecked>
        Lime
      </Switch>

      <Switch colorScheme='green' defaultChecked>
        Green
      </Switch>

      <Switch colorScheme='emerald' defaultChecked>
        Emerald
      </Switch>

      <Switch colorScheme='teal' defaultChecked>
        Teal
      </Switch>

      <Switch colorScheme='cyan' defaultChecked>
        Cyan
      </Switch>

      <Switch colorScheme='sky' defaultChecked>
        Sky
      </Switch>

      <Switch colorScheme='blue' defaultChecked>
        Blue
      </Switch>

      <Switch colorScheme='indigo' defaultChecked>
        Indigo
      </Switch>

      <Switch colorScheme='violet' defaultChecked>
        Violet
      </Switch>

      <Switch colorScheme='purple' defaultChecked>
        Purple
      </Switch>

      <Switch colorScheme='fuchsia' defaultChecked>
        Fuchsia
      </Switch>
    </Wrap>;
}`,...(A=(W=w.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var j,E,G;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultChecked>
        disabled
      </Switch>
    </>;
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var T,Y,Z;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultChecked>
        read only
      </Switch>
    </>;
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var M,q,J;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...(J=(q=k.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  type Data = {
    switch: boolean;
  };
  const {
    control,
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <Controller name='switch' control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,$,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <Controller name='switch' control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const nt=["withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{nt as __namedExportsOrder,k as customControl,tt as default,p as isDisabled,f as isReadonly,C as reactHookForm,g as reactHookFormWithDefaultValue,w as withColorScheme,S as withLabel,d as withReverse,u as withSize,m as withVariant};
//# sourceMappingURL=switch.stories-b50891d4.js.map
