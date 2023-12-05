import{j as n,a as e,F as y}from"./jsx-runtime-yA-pgArV.js";import{u as De}from"./index-gWY0u-sb.js";import{r as ae}from"./index-IybTgENJ.js";import{u as ie,C as se}from"./index.esm-PVkfQNar.js";import{b as ve}from"./checkbox-WzhbvuNy.js";import{m as xe}from"./motion-XoqD_6Np.js";import{f as _e}from"./forward-ref-6T0UNPU-.js";import{u as ze}from"./use-component-style-KGYGTazl.js";import{o as Fe}from"./theme-provider-JJMfppNb.js";import{u as l,a as h,o as Pe,I as Re}from"./factory-LMyrE5lk.js";import{H as Ve,V as le}from"./stack-Mcw13KPE.js";import{L as Be}from"./form-control-t3274UO5.js";import{W as He}from"./flex-IlL83qBW.js";import{B as he}from"./button-9VUarSO2.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-n7nxCetX.js";import"./index-xewpD759.js";import"./index-xpiohnTl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./loading-d5fto5LV.js";import"./index-Fmh4I4_s.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./icon-U1tgplMe.js";const r=_e((t,o)=>{const[a,s]=ze("Switch",t),{className:c,gap:i="0.5rem",children:d,icon:D,inputProps:de,labelProps:ue,isReverse:me,flexDirection:Se,transition:we={type:"spring",stiffness:700,damping:40},...v}=Fe(s),{isChecked:x,isFocused:pe,isHovered:fe,isActive:ke,getContainerProps:Ce,getIconProps:ge,getInputProps:be,getLabelProps:Ie}=ve(v),ye=D?ae.cloneElement(D,{isChecked:x,isFocused:pe,isHovered:fe,isActive:ke}):null;return n(l.label,{ref:o,className:h("ui-switch",c),__css:{cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:Se??(me?"row-reverse":"row"),alignItems:"center",verticalAlign:"top",gap:i,...a.container},...Ce(),...Pe(v,["id","name","value","defaultValue","checked","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),children:[e(l.input,{className:h("ui-switch__input",c),...be(de,o)}),ye??e(l.span,{className:h("ui-switch__track",c),__css:{boxSizing:"content-box",display:"inline-flex",justifyContent:"flex-start",alignItems:"center",flexShrink:0,...a.track},...ge(),children:e(l.span,{as:xe.span,className:h("ui-switch__thumb",c),"data-checked":Re(x),layout:!0,transition:we,__css:{...a.thumb}})}),d?e(l.span,{className:h("ui-switch__label",c),__css:{...a.label},...Ie(ue),children:d}):null]})}),or={title:"Components / Forms / Switch",component:r},u=()=>e(r,{children:"basic"}),m=()=>e(r,{isReverse:!0,children:"basic"}),S=()=>n(y,{children:[e(r,{size:"sm",children:"small size"}),e(r,{size:"md",children:"medium size"}),e(r,{size:"lg",children:"large size"})]}),w=()=>n(y,{children:[e(r,{variant:"thick",children:"thick"}),e(r,{variant:"thin",children:"thin"})]}),p=()=>{const t=ae.useId();return n(Ve,{gap:"sm",children:[e(Be,{htmlFor:t,userSelect:"none",children:"Please Click"}),e(r,{id:t})]})},f=()=>n(He,{gap:"md",children:[e(r,{colorScheme:"primary",defaultIsChecked:!0,children:"Primary"}),e(r,{colorScheme:"secondary",defaultIsChecked:!0,children:"Secondary"}),e(r,{colorScheme:"warning",defaultIsChecked:!0,children:"Warning"}),e(r,{colorScheme:"danger",defaultIsChecked:!0,children:"Danger"}),e(r,{colorScheme:"link",defaultIsChecked:!0,children:"Link"}),e(r,{colorScheme:"gray",defaultIsChecked:!0,children:"Gray"}),e(r,{colorScheme:"zinc",defaultIsChecked:!0,children:"Zinc"}),e(r,{colorScheme:"neutral",defaultIsChecked:!0,children:"Neutral"}),e(r,{colorScheme:"stone",defaultIsChecked:!0,children:"Stone"}),e(r,{colorScheme:"red",defaultIsChecked:!0,children:"Red"}),e(r,{colorScheme:"rose",defaultIsChecked:!0,children:"Rose"}),e(r,{colorScheme:"pink",defaultIsChecked:!0,children:"Pink"}),e(r,{colorScheme:"orange",defaultIsChecked:!0,children:"Orange"}),e(r,{colorScheme:"amber",defaultIsChecked:!0,children:"Amber"}),e(r,{colorScheme:"yellow",defaultIsChecked:!0,children:"Yellow"}),e(r,{colorScheme:"lime",defaultIsChecked:!0,children:"Lime"}),e(r,{colorScheme:"green",defaultIsChecked:!0,children:"Green"}),e(r,{colorScheme:"emerald",defaultIsChecked:!0,children:"Emerald"}),e(r,{colorScheme:"teal",defaultIsChecked:!0,children:"Teal"}),e(r,{colorScheme:"cyan",defaultIsChecked:!0,children:"Cyan"}),e(r,{colorScheme:"sky",defaultIsChecked:!0,children:"Sky"}),e(r,{colorScheme:"blue",defaultIsChecked:!0,children:"Blue"}),e(r,{colorScheme:"indigo",defaultIsChecked:!0,children:"Indigo"}),e(r,{colorScheme:"violet",defaultIsChecked:!0,children:"Violet"}),e(r,{colorScheme:"purple",defaultIsChecked:!0,children:"Purple"}),e(r,{colorScheme:"fuchsia",defaultIsChecked:!0,children:"Fuchsia"})]}),k=()=>n(y,{children:[e(r,{isDisabled:!0,children:"disabled"}),e(r,{isDisabled:!0,defaultIsChecked:!0,children:"disabled"})]}),C=()=>n(y,{children:[e(r,{isReadOnly:!0,children:"read only"}),e(r,{isReadOnly:!0,defaultIsChecked:!0,children:"read only"})]}),g=()=>{const[t,{toggle:o}]=De(!1);return e(r,{isChecked:t,onChange:o,children:"custom control"})},b=()=>{const{control:t,handleSubmit:o,watch:a}=ie(),s=c=>console.log("submit:",c);return console.log("watch:",a()),n(le,{as:"form",onSubmit:o(s),children:[e(se,{name:"switch",control:t,render:({field:{value:c,...i}})=>e(r,{isChecked:c,...i,children:"Dark mode"})}),e(he,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},I=()=>{const t={switch:!0},{control:o,handleSubmit:a,watch:s}=ie({defaultValues:t}),c=i=>console.log("submit:",i);return console.log("watch:",s()),n(le,{as:"form",onSubmit:a(c),children:[e(se,{name:"switch",control:o,render:({field:{value:i,...d}})=>e(r,{isChecked:i,...d,children:"Dark mode"})}),e(he,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var _,z,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Switch>basic</Switch>;
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,R,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Switch isReverse>basic</Switch>;
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var B,H,L;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>;
}`,...(L=(H=S.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var N,O,W;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>;
}`,...(W=(O=w.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,A,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>;
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,T,Y;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(Y=(T=f.parameters)==null?void 0:T.docs)==null?void 0:Y.source}}};var Z,M,q;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Switch isDisabled>disabled</Switch>
      <Switch isDisabled defaultIsChecked>
        disabled
      </Switch>
    </>;
}`,...(q=(M=k.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Switch isReadOnly>read only</Switch>
      <Switch isReadOnly defaultIsChecked>
        read only
      </Switch>
    </>;
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>;
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,re,ce;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ce=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var te,ne,oe;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(oe=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const ar=["basic","withReverse","withSize","withVariant","withLabel","withColorScheme","isDisabled","isReadonly","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ar as __namedExportsOrder,u as basic,g as customControl,or as default,k as isDisabled,C as isReadonly,b as reactHookForm,I as reactHookFormWithDefaultValue,f as withColorScheme,p as withLabel,m as withReverse,S as withSize,w as withVariant};
