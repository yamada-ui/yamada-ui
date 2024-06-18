import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{u as xe,C as S}from"./index.esm-TLwx9zN6.js";import{E as r,a,b as t,c as be,u as he}from"./editable-upcc5svq.js";import{P as je}from"./pencil-pwuqNKhd.js";import{F as n}from"./form-control-CXekA9Vm.js";import{V as Fe}from"./stack-DeQ5YYY4.js";import{B as fe,a as P}from"./button-C5HSAH_Q.js";import{I as w}from"./icon-button-De9wLvxW.js";import{C as ge}from"./check-B3YxMGdM.js";import{X as Ae}from"./x-Cy2R_2jw.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dc2KQwVC.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-BPmMvQRx.js";import"./index-DnMy6eVY.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-C1oydc60.js";import"./theme-provider-CfMKAtcZ.js";import"./lucide-icon-DchBQEch.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";const Ye={title:"Components / Forms / Editable",component:r},i=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),o=()=>e.jsxs(r,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e.jsx(a,{}),e.jsx(be,{h:"4lh"})]}),d=()=>e.jsxs(r,{startWithEditView:!0,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{"aria-label":"Input character serif"})]}),c=()=>e.jsxs(r,{isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),m=()=>e.jsxs(r,{submitOnBlur:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),p=()=>e.jsxs(r,{selectAllOnFocus:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),b=()=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"default border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{focusBorderColor:"green.500",defaultValue:"custom border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{isInvalid:!0,errorBorderColor:"orange.500",defaultValue:"custom border color",children:[e.jsx(a,{}),e.jsx(t,{})]})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isDisabled:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isReadOnly:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{isInvalid:!0,defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),F=()=>{const g=()=>{const{isEditing:u,getSubmitProps:A,getCancelProps:C,getEditProps:s}=he();return u?e.jsxs(P,{size:"sm",gap:"sm",children:[e.jsx(w,{icon:e.jsx(ge,{}),...A(),"aria-label":"Submit"}),e.jsx(w,{icon:e.jsx(Ae,{}),...C(),"aria-label":"Cancel"})]}):e.jsx(P,{size:"sm",gap:"sm",children:e.jsx(w,{icon:e.jsx(je,{}),...s(),"aria-label":"Edit"})})};return e.jsxs(r,{display:"flex",gap:"sm",isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{w:"full"}),e.jsx(t,{}),e.jsx(g,{})]})},f=()=>{var v,V;const g={input:"",textarea:""},{control:u,handleSubmit:A,watch:C,formState:{errors:s}}=xe({defaultValues:g}),Ee=l=>console.log("submit:",l);return console.log("watch:",C()),e.jsxs(Fe,{as:"form",onSubmit:A(Ee),children:[e.jsx(n,{isInvalid:!!s.input,label:"Name",errorMessage:(v=s.input)==null?void 0:v.message,children:e.jsx(S,{name:"input",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>e.jsxs(r,{placeholder:"孫悟空",...l,children:[e.jsx(a,{}),e.jsx(t,{})]})})}),e.jsx(n,{isInvalid:!!s.textarea,label:"Feedback",errorMessage:(V=s.textarea)==null?void 0:V.message,children:e.jsx(S,{name:"textarea",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",...l,children:[e.jsx(a,{}),e.jsx(be,{})]})})}),e.jsx(fe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var I,B,y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var D,O,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Editable defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`} h="4lh">
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>;
}`,...(q=(O=o.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var M,k,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Editable startWithEditView defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>;
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var W,R,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Editable isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(G=(R=c.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var z,H,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Editable submitOnBlur={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,_,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Editable selectAllOnFocus={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(J=(_=p.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,L,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Editable placeholder="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,Y,Z;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ne,ue;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ue=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var ie,oe,de;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getSubmitProps,
      getCancelProps,
      getEditProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Check />} {...getSubmitProps()} aria-label="Submit" />
        <IconButton icon={<X />} {...getCancelProps()} aria-label="Cancel" />
      </ButtonGroup> : <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Pencil />} {...getEditProps()} aria-label="Edit" />
      </ButtonGroup>;
  };
  return <Editable display="flex" gap="sm" isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(de=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,me,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(pe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ze=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{Ze as __namedExportsOrder,i as basic,F as customControl,Ye as default,x as isDisabled,j as isInvalid,h as isReadonly,f as reactHookForm,E as withBorderColor,c as withIsPreviewFocusable,b as withPlaceholder,p as withSelectAllOnFocus,d as withStartWithEditView,m as withSubmitOnBlur,o as withTextarea};
