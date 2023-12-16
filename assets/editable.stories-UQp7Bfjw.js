import{a as r,j as e,F as w}from"./jsx-runtime-TtYKBvr-.js";import{I,d as ge,i as Ae,j as Ce}from"./fontawesome-icon-3Hr0WRMB.js";import{u as we,C as x}from"./index.esm-PVkfQNar.js";import{E as a,a as t,b as n,c as Fe,u as ve}from"./editable-T1ZLk-_Q.js";import{F as o}from"./form-control-Vx3ho_r4.js";import{V as Ve}from"./stack-Yui-hKQ-.js";import{B as Ie,a as D}from"./button-uXw5QfHK.js";import{I as S}from"./icon-button-8VW7K4Y8.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-tvtfaFq4.js";import"./icon-uEf7artW.js";import"./index-LBRkRkdp.js";import"./theme-provider-M6E7j4xw.js";import"./factory-GBKO6tqf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./index-uK6y4yBl.js";import"./index-kogmLsDK.js";import"./index-SFNal5L3.js";import"./use-component-style-GDmDNOF2.js";import"./use-ripple-Rwx17x6B.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion--NSyoWHf.js";import"./loading-S17wzBnk.js";import"./index-LoV1DwO_.js";import"./index-sZBzzfRi.js";const er={title:"Components / Forms / Editable",component:a},i=()=>r(a,{defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(n,{})]}),d=()=>r(a,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e(t,{}),e(Fe,{h:"4lh"})]}),c=()=>r(a,{startWithEditView:!0,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(n,{})]}),m=()=>r(a,{isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(n,{})]}),p=()=>r(a,{submitOnBlur:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(n,{})]}),b=()=>r(a,{selectAllOnFocus:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(n,{})]}),E=()=>r(a,{placeholder:"オッス！オラ悟空！",children:[e(t,{}),e(n,{})]}),h=()=>r(w,{children:[r(a,{defaultValue:"default border color",children:[e(t,{}),e(n,{})]}),r(a,{focusBorderColor:"green.500",defaultValue:"custom border color",children:[e(t,{}),e(n,{})]}),r(a,{isInvalid:!0,errorBorderColor:"orange.500",defaultValue:"custom border color",children:[e(t,{}),e(n,{})]})]}),F=()=>r(w,{children:[r(a,{isDisabled:!0,defaultValue:"your email address",children:[e(t,{}),e(n,{})]}),e(o,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(n,{})]})})]}),f=()=>r(w,{children:[r(a,{isReadOnly:!0,defaultValue:"your email address",children:[e(t,{}),e(n,{})]}),e(o,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(n,{})]})})]}),g=()=>r(w,{children:[r(a,{isInvalid:!0,defaultValue:"your email address",children:[e(t,{}),e(n,{})]}),e(o,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(n,{})]})})]}),A=()=>r(a,{display:"flex",gap:"sm",isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{w:"full"}),e(n,{}),e(()=>{const{isEditing:s,getSubmitProps:v,getCancelProps:V,getEditProps:l}=ve();return s?r(D,{size:"sm",gap:"sm",children:[e(S,{icon:e(I,{icon:ge}),...v()}),e(S,{icon:e(I,{icon:Ae}),...V()})]}):e(D,{size:"sm",gap:"sm",children:e(S,{icon:e(I,{icon:Ce}),...l()})})},{})]}),C=()=>{var B,y;const P={input:"",textarea:""},{control:s,handleSubmit:v,watch:V,formState:{errors:l}}=we({defaultValues:P}),fe=u=>console.log("submit:",u);return console.log("watch:",V()),r(Ve,{as:"form",onSubmit:v(fe),children:[e(o,{isInvalid:!!l.input,label:"Name",errorMessage:(B=l.input)==null?void 0:B.message,children:e(x,{name:"input",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>r(a,{placeholder:"孫悟空",...u,children:[e(t,{}),e(n,{})]})})}),e(o,{isInvalid:!!l.textarea,label:"Feedback",errorMessage:(y=l.textarea)==null?void 0:y.message,children:e(x,{name:"textarea",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>r(a,{placeholder:"オッス！オラ悟空！",...u,children:[e(t,{}),e(Fe,{})]})})}),e(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,k,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var M,T,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Editable defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`} h="4lh">
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>;
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var R,G,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Editable startWithEditView defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(j=(G=c.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var z,H,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Editable isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,_,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Editable submitOnBlur={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(J=(_=p.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,L,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Editable selectAllOnFocus={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,Y,Z;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Editable placeholder="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="default border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable focusBorderColor="green.500" defaultValue="custom border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable isInvalid errorBorderColor="orange.500" defaultValue="custom border color">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>;
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Editable isDisabled defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isDisabled label="Email address" helperMessage="We'll never share your email.">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(ne=(te=F.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ue,oe;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Editable isReadOnly defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isReadOnly label="Email address" helperMessage="We'll never share your email.">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(oe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var se,ie,de;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Editable isInvalid defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isInvalid label="Email address" errorMessage="Email is required.">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,me,pe;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getSubmitProps,
      getCancelProps,
      getEditProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Icon icon={faCheck} />} {...getSubmitProps()} />
        <IconButton icon={<Icon icon={faXmark} />} {...getCancelProps()} />
      </ButtonGroup> : <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Icon icon={faPen} />} {...getEditProps()} />
      </ButtonGroup>;
  };
  return <Editable display="flex" gap="sm" isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(pe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,Ee,he;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  type Data = {
    input: string;
    textarea: string;
  };
  const defaultValues: Data = {
    input: "",
    textarea: ""
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.input} label="Name" errorMessage={errors.input?.message}>
        <Controller name="input" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Editable placeholder="孫悟空" {...field}>
              <EditablePreview />
              <EditableInput />
            </Editable>} />
      </FormControl>

      <FormControl isInvalid={!!errors.textarea} label="Feedback" errorMessage={errors.textarea?.message}>
        <Controller name="textarea" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Editable placeholder="オッス！オラ悟空！" {...field}>
              <EditablePreview />
              <EditableTextarea />
            </Editable>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(he=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:he.source}}};const rr=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{rr as __namedExportsOrder,i as basic,A as customControl,er as default,F as isDisabled,g as isInvalid,f as isReadonly,C as reactHookForm,h as withBorderColor,m as withIsPreviewFocusable,E as withPlaceholder,b as withSelectAllOnFocus,c as withStartWithEditView,p as withSubmitOnBlur,d as withTextarea};
