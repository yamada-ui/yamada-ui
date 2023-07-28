import{a as n,j as e,F as b}from"./jsx-runtime-276775ef.js";import{r as re}from"./index-1cdf6ce0.js";import{u as te,C as ne}from"./index.esm-070aff36.js";import{b as ge}from"./checkbox-2748afb7.js";import{m as Ce}from"./motion-1ef152f4.js";import{f as be}from"./forward-ref-86842115.js";import{a as ye}from"./use-component-style-645da9e2.js";import{o as De,d as ve}from"./theme-ead977c1.js";import{d as l,e as xe,y as ze}from"./factory-54465b8b.js";import{L as Fe}from"./form-control-2b7a4da4.js";import{H as Pe,V as ce}from"./stack-952495ca.js";import{W as Re}from"./flex-7a5fc36c.js";import{u as Ve}from"./index-7733ff91.js";import{B as oe}from"./button-ffa0d6e0.js";import"./index-82a0e31a.js";import"./index-c0c82167.js";import"./index-f3237c2b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";const r=be((t,c)=>{const[o,s]=ye("Switch",t),{className:a,gap:i="0.5rem",children:d,icon:y,inputProps:ae,labelProps:ie,isReverse:se,flexDirection:le,transition:de={type:"spring",stiffness:700,damping:40},...D}=De(s),{isChecked:v,isFocused:he,isHovered:ue,isActive:me,getContainerProps:Se,getIconProps:pe,getInputProps:we,getLabelProps:fe}=ge(D),ke=y?re.cloneElement(y,{isChecked:v,isFocused:he,isHovered:ue,isActive:me}):null;return n(l.label,{ref:c,className:xe("ui-switch",a),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:le??(se?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:i,...o.container},...Se(),...ze(D,["id","name","value","defaultValue","checked","defaultChecked","isChecked","onChange","onBlur","onFocus"]),children:[e(l.input,{className:"ui-switch-input",...we(ae,c)}),ke??e(l.span,{className:"ui-switch-track",__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...o.track},...pe(),children:e(l.span,{as:Ce.span,className:"ui-switch-thumb","data-checked":ve(v),layout:!0,transition:de,__css:{...o.thumb}})}),d?e(l.span,{className:"ui-switch-label",__css:{...o.label},...fe(ie),children:d}):null]})}),er={title:"Components / Forms / Switch",component:r},h=()=>e(r,{isReverse:!0,children:"basic"}),u=()=>n(b,{children:[e(r,{size:"sm",children:"small size"}),e(r,{size:"md",children:"medium size"}),e(r,{size:"lg",children:"large size"})]}),m=()=>n(b,{children:[e(r,{variant:"thick",children:"thick"}),e(r,{variant:"thin",children:"thin"})]}),S=()=>{const t=re.useId();return n(Pe,{gap:"sm",children:[e(Fe,{htmlFor:t,userSelect:"none",children:"Please Click"}),e(r,{id:t})]})},p=()=>n(Re,{gap:"md",children:[e(r,{colorScheme:"primary",defaultChecked:!0,children:"Primary"}),e(r,{colorScheme:"secondary",defaultChecked:!0,children:"Secondary"}),e(r,{colorScheme:"warning",defaultChecked:!0,children:"Warning"}),e(r,{colorScheme:"danger",defaultChecked:!0,children:"Danger"}),e(r,{colorScheme:"link",defaultChecked:!0,children:"Link"}),e(r,{colorScheme:"gray",defaultChecked:!0,children:"Gray"}),e(r,{colorScheme:"red",defaultChecked:!0,children:"Red"}),e(r,{colorScheme:"orange",defaultChecked:!0,children:"Orange"}),e(r,{colorScheme:"yellow",defaultChecked:!0,children:"Yellow"}),e(r,{colorScheme:"green",defaultChecked:!0,children:"Green"}),e(r,{colorScheme:"teal",defaultChecked:!0,children:"Teal"}),e(r,{colorScheme:"blue",defaultChecked:!0,children:"Blue"}),e(r,{colorScheme:"cyan",defaultChecked:!0,children:"Cyan"}),e(r,{colorScheme:"purple",defaultChecked:!0,children:"Purple"}),e(r,{colorScheme:"pink",defaultChecked:!0,children:"pink"})]}),w=()=>n(b,{children:[e(r,{isDisabled:!0,children:"disabled"}),e(r,{isDisabled:!0,defaultChecked:!0,children:"disabled"})]}),f=()=>n(b,{children:[e(r,{isReadOnly:!0,children:"read only"}),e(r,{isReadOnly:!0,defaultChecked:!0,children:"read only"})]}),k=()=>{const[t,{toggle:c}]=Ve(!1);return e(r,{isChecked:t,onChange:c,children:"custom control"})},g=()=>{const{control:t,handleSubmit:c,watch:o}=te(),s=a=>console.log("submit:",a);return console.log("watch:",o()),n(ce,{as:"form",onSubmit:c(s),children:[e(ne,{name:"switch",control:t,render:({field:{value:a,...i}})=>e(r,{isChecked:a,...i,children:"Dark mode"})}),e(oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},C=()=>{const t={switch:!0},{control:c,handleSubmit:o,watch:s}=te({defaultValues:t}),a=i=>console.log("submit:",i);return console.log("watch:",s()),n(ce,{as:"form",onSubmit:o(a),children:[e(ne,{name:"switch",control:c,render:({field:{value:i,...d}})=>e(r,{isChecked:i,...d,children:"Dark mode"})}),e(oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var x,z,F;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,R,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Switch size='sm'>small size</Switch>
      <Switch size='md'>medium size</Switch>
      <Switch size='lg'>large size</Switch>
    </>;
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,H,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Switch variant='thick'>thick</Switch>
      <Switch variant='thin'>thin</Switch>
    </>;
}`,...(_=(H=m.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var L,O,W;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap='sm'>
      <Label htmlFor={id} userSelect='none'>
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(W=(O=S.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var I,N,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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

      <Switch colorScheme='red' defaultChecked>
        Red
      </Switch>

      <Switch colorScheme='orange' defaultChecked>
        Orange
      </Switch>

      <Switch colorScheme='yellow' defaultChecked>
        Yellow
      </Switch>

      <Switch colorScheme='green' defaultChecked>
        Green
      </Switch>

      <Switch colorScheme='teal' defaultChecked>
        Teal
      </Switch>

      <Switch colorScheme='blue' defaultChecked>
        Blue
      </Switch>

      <Switch colorScheme='cyan' defaultChecked>
        Cyan
      </Switch>

      <Switch colorScheme='purple' defaultChecked>
        Purple
      </Switch>

      <Switch colorScheme='pink' defaultChecked>
        pink
      </Switch>
    </Wrap>;
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var G,A,E;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultChecked>
        disabled
      </Switch>
    </>;
}`,...(E=(A=w.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var T,Y,M;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultChecked>
        read only
      </Switch>
    </>;
}`,...(M=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var q,J,K;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ee=($=C.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const rr=["withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{rr as __namedExportsOrder,k as customControl,er as default,w as isDisabled,f as isReadonly,g as reactHookForm,C as reactHookFormWithDefaultValue,p as withColorScheme,S as withLabel,h as withReverse,u as withSize,m as withVariant};
//# sourceMappingURL=switch.stories-f9c3eaeb.js.map
