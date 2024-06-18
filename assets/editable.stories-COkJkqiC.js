import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as w,d as he,i as je,j as Fe}from"./icon-BQcQed63.js";import{u as fe,C as S}from"./index.esm-TLwx9zN6.js";import{E as r,a,b as t,c as Ee,u as ge}from"./editable-upcc5svq.js";import{F as l}from"./form-control-CXekA9Vm.js";import{V as Ae}from"./stack-DeQ5YYY4.js";import{B as Ce,a as P}from"./button-C5HSAH_Q.js";import{I as v}from"./icon-button-De9wLvxW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./theme-provider-CfMKAtcZ.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./forward-ref-Dr5Hqd9a.js";import"./index-Dc2KQwVC.js";import"./index-BPmMvQRx.js";import"./index-DnMy6eVY.js";import"./use-component-style-C1oydc60.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";const Ue={title:"Components / Forms / Editable",component:r},i=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),o=()=>e.jsxs(r,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e.jsx(a,{}),e.jsx(Ee,{h:"4lh"})]}),d=()=>e.jsxs(r,{startWithEditView:!0,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{"aria-label":"Input character serif"})]}),c=()=>e.jsxs(r,{isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),m=()=>e.jsxs(r,{submitOnBlur:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),b=()=>e.jsxs(r,{selectAllOnFocus:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),p=()=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"default border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{focusBorderColor:"green.500",defaultValue:"custom border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{isInvalid:!0,errorBorderColor:"orange.500",defaultValue:"custom border color",children:[e.jsx(a,{}),e.jsx(t,{})]})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isDisabled:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(l,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isReadOnly:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(l,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isInvalid:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(l,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),F=()=>{const g=()=>{const{isEditing:u,getSubmitProps:A,getCancelProps:C,getEditProps:s}=ge();return u?e.jsxs(P,{size:"sm",gap:"sm",children:[e.jsx(v,{icon:e.jsx(w,{icon:he}),...A(),"aria-label":"Submit"}),e.jsx(v,{icon:e.jsx(w,{icon:je}),...C(),"aria-label":"Cancel"})]}):e.jsx(P,{size:"sm",gap:"sm",children:e.jsx(v,{icon:e.jsx(w,{icon:Fe}),...s(),"aria-label":"Edit"})})};return e.jsxs(r,{display:"flex",gap:"sm",isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{w:"full"}),e.jsx(t,{}),e.jsx(g,{})]})},f=()=>{var I,V;const g={input:"",textarea:""},{control:u,handleSubmit:A,watch:C,formState:{errors:s}}=fe({defaultValues:g}),xe=n=>console.log("submit:",n);return console.log("watch:",C()),e.jsxs(Ae,{as:"form",onSubmit:A(xe),children:[e.jsx(l,{isInvalid:!!s.input,label:"Name",errorMessage:(I=s.input)==null?void 0:I.message,children:e.jsx(S,{name:"input",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:n})=>e.jsxs(r,{placeholder:"孫悟空",...n,children:[e.jsx(a,{}),e.jsx(t,{})]})})}),e.jsx(l,{isInvalid:!!s.textarea,label:"Feedback",errorMessage:(V=s.textarea)==null?void 0:V.message,children:e.jsx(S,{name:"textarea",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:n})=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",...n,children:[e.jsx(a,{}),e.jsx(Ee,{})]})})}),e.jsx(Ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var B,y,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var O,k,q;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Editable defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`} h="4lh">
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>;
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var M,T,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Editable startWithEditView defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>;
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var R,G,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Editable isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(z=(G=c.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var H,N,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Editable submitOnBlur={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(X=(N=m.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var _,J,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Editable selectAllOnFocus={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Editable placeholder="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(ne=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ue,ie;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ie=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var oe,de,ce;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,be,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(pe=(be=f.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};const Ye=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{Ye as __namedExportsOrder,i as basic,F as customControl,Ue as default,x as isDisabled,j as isInvalid,h as isReadonly,f as reactHookForm,E as withBorderColor,c as withIsPreviewFocusable,p as withPlaceholder,b as withSelectAllOnFocus,d as withStartWithEditView,m as withSubmitOnBlur,o as withTextarea};
