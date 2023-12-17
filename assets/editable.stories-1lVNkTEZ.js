import{a as r,j as e,F as w}from"./jsx-runtime-TtYKBvr-.js";import{I as V,d as ge,i as Ae,j as Ce}from"./fontawesome-icon-ZfuIL68e.js";import{u as we,C as x}from"./index.esm-PVkfQNar.js";import{E as a,a as t,b as l,c as fe,u as ve}from"./editable-hUg8RvqE.js";import{F as o}from"./form-control-FwzeaZdC.js";import{V as Ie}from"./stack-XX7xMkh4.js";import{B as Ve,a as D}from"./button-vw3_AT4f.js";import{I as S}from"./icon-button-kA4amgzM.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-tvtfaFq4.js";import"./icon-h0N_MwdT.js";import"./index-dINoAjpC.js";import"./theme-provider-Wsw433nP.js";import"./factory-yYnGGCem.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./index-yP8_fdVn.js";import"./index-Is9g8YY1.js";import"./index-JdnEfjmQ.js";import"./use-component-style-5-ma296Y.js";import"./use-ripple-oUvMmrsO.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-ONtTX0Ck.js";import"./loading-JdMW4dxy.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";const er={title:"Components / Forms / Editable",component:a},s=()=>r(a,{defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),d=()=>r(a,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e(t,{}),e(fe,{h:"4lh"})]}),c=()=>r(a,{startWithEditView:!0,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{"aria-label":"Input character serif"})]}),m=()=>r(a,{isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),b=()=>r(a,{submitOnBlur:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),p=()=>r(a,{selectAllOnFocus:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),E=()=>r(a,{placeholder:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),h=()=>r(w,{children:[r(a,{defaultValue:"default border color",children:[e(t,{}),e(l,{})]}),r(a,{focusBorderColor:"green.500",defaultValue:"custom border color",children:[e(t,{}),e(l,{})]}),r(a,{isInvalid:!0,errorBorderColor:"orange.500",defaultValue:"custom border color",children:[e(t,{}),e(l,{})]})]}),f=()=>r(w,{children:[r(a,{isDisabled:!0,defaultValue:"your email address",children:[e(t,{}),e(l,{})]}),e(o,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(l,{})]})})]}),F=()=>r(w,{children:[r(a,{isReadOnly:!0,defaultValue:"your email address",children:[e(t,{}),e(l,{})]}),e(o,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(l,{})]})})]}),g=()=>r(w,{children:[r(a,{isInvalid:!0,defaultValue:"your email address",children:[e(t,{}),e(l,{})]}),e(o,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(l,{})]})})]}),A=()=>r(a,{display:"flex",gap:"sm",isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{w:"full"}),e(l,{}),e(()=>{const{isEditing:i,getSubmitProps:v,getCancelProps:I,getEditProps:n}=ve();return i?r(D,{size:"sm",gap:"sm",children:[e(S,{icon:e(V,{icon:ge}),...v(),"aria-label":"Submit"}),e(S,{icon:e(V,{icon:Ae}),...I(),"aria-label":"Cancel"})]}):e(D,{size:"sm",gap:"sm",children:e(S,{icon:e(V,{icon:Ce}),...n(),"aria-label":"Edit"})})},{})]}),C=()=>{var B,y;const P={input:"",textarea:""},{control:i,handleSubmit:v,watch:I,formState:{errors:n}}=we({defaultValues:P}),Fe=u=>console.log("submit:",u);return console.log("watch:",I()),r(Ie,{as:"form",onSubmit:v(Fe),children:[e(o,{isInvalid:!!n.input,label:"Name",errorMessage:(B=n.input)==null?void 0:B.message,children:e(x,{name:"input",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>r(a,{placeholder:"孫悟空",...u,children:[e(t,{}),e(l,{})]})})}),e(o,{isInvalid:!!n.textarea,label:"Feedback",errorMessage:(y=n.textarea)==null?void 0:y.message,children:e(x,{name:"textarea",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>r(a,{placeholder:"オッス！オラ悟空！",...u,children:[e(t,{}),e(fe,{})]})})}),e(Ve,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,k,q;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(q=(k=s.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var M,T,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Editable defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`} h="4lh">
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>;
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var R,G,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Editable startWithEditView defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>;
}`,...(j=(G=c.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var z,H,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Editable isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,_,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Editable submitOnBlur={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(J=(_=b.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,L,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Editable selectAllOnFocus={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,Y,Z;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,le;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(le=(te=f.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,ue,oe;F.parameters={...F.parameters,docs:{...(ne=F.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(oe=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,se,de;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(de=(se=g.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,me,be;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getSubmitProps,
      getCancelProps,
      getEditProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Icon icon={faCheck} />} {...getSubmitProps()} aria-label="Submit" />
        <IconButton icon={<Icon icon={faXmark} />} {...getCancelProps()} aria-label="Cancel" />
      </ButtonGroup> : <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Icon icon={faPen} />} {...getEditProps()} aria-label="Edit" />
      </ButtonGroup>;
  };
  return <Editable display="flex" gap="sm" isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(be=(me=A.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var pe,Ee,he;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(he=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:he.source}}};const rr=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{rr as __namedExportsOrder,s as basic,A as customControl,er as default,f as isDisabled,g as isInvalid,F as isReadonly,C as reactHookForm,h as withBorderColor,m as withIsPreviewFocusable,E as withPlaceholder,p as withSelectAllOnFocus,c as withStartWithEditView,b as withSubmitOnBlur,d as withTextarea};
