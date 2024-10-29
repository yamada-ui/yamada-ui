import{j as e}from"./extends-CwFRzn3r.js";import{u as xe,C as I}from"./index.esm-BPKd4vtG.js";import{E as r,a,b as t,c as pe,u as he}from"./editable-BkAY7x17.js";import{P as je}from"./pencil-C0HS6JlT.js";import{F as n}from"./form-control-Cr_hm2rR.js";import{V as fe}from"./stack-BVZkmmtU.js";import{B as ge,a as F}from"./button-CJFsrc4z.js";import{I as S}from"./icon-button-DCMSylan.js";import{C as we}from"./check-DA4fGqu7.js";import{X as ve}from"./x-Ixq0SIWA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DAOPkzwd.js";import"./factory-CBW6YcbY.js";import"./index-Cyo00D5l.js";import"./index-qHjnnOt4.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-Givb0biW.js";import"./theme-provider-B8NHi_rL.js";import"./lucide-icon-BYLO5a3r.js";import"./icon-C1fg-h9m.js";import"./use-var-BcRMoVLh.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./loading-CKKxrtqP.js";const Ue={component:r,title:"Components / Forms / Editable"},o=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),d=()=>e.jsxs(r,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e.jsx(a,{}),e.jsx(pe,{h:"4lh"})]}),u=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",startWithEditView:!0,children:[e.jsx(a,{}),e.jsx(t,{"aria-label":"Input character serif"})]}),c=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",isPreviewFocusable:!1,children:[e.jsx(a,{}),e.jsx(t,{})]}),m=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",submitOnBlur:!1,children:[e.jsx(a,{}),e.jsx(t,{})]}),b=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",selectAllOnFocus:!1,children:[e.jsx(a,{}),e.jsx(t,{})]}),p=()=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"default border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{defaultValue:"custom border color",focusBorderColor:"green.500",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{defaultValue:"custom border color",errorBorderColor:"orange.500",isInvalid:!0,children:[e.jsx(a,{}),e.jsx(t,{})]})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"your email address",isDisabled:!0,children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{helperMessage:"We'll never share your email.",isDisabled:!0,label:"Email address",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"your email address",isReadOnly:!0,children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{helperMessage:"We'll never share your email.",isReadOnly:!0,label:"Email address",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"your email address",isInvalid:!0,children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{errorMessage:"Email is required.",isInvalid:!0,label:"Email address",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),f=()=>{const w=()=>{const{isEditing:i,getCancelProps:s,getEditProps:v,getSubmitProps:V}=he();return i?e.jsxs(F,{size:"sm",gap:"sm",children:[e.jsx(S,{icon:e.jsx(we,{}),...V(),"aria-label":"Submit"}),e.jsx(S,{icon:e.jsx(ve,{}),...s(),"aria-label":"Cancel"})]}):e.jsx(F,{size:"sm",gap:"sm",children:e.jsx(S,{icon:e.jsx(je,{}),...v(),"aria-label":"Edit"})})};return e.jsxs(r,{defaultValue:"オッス！オラ悟空！",display:"flex",gap:"sm",isPreviewFocusable:!1,children:[e.jsx(a,{w:"full"}),e.jsx(t,{}),e.jsx(w,{})]})},g=()=>{var C,P;const w={input:"",textarea:""},{control:i,formState:{errors:s},handleSubmit:v,watch:V}=xe({defaultValues:w}),Ee=l=>console.log("submit:",l);return console.log("watch:",V()),e.jsxs(fe,{as:"form",onSubmit:v(Ee),children:[e.jsx(n,{errorMessage:(C=s.input)==null?void 0:C.message,isInvalid:!!s.input,label:"Name",children:e.jsx(I,{name:"input",control:i,render:({field:l})=>e.jsxs(r,{placeholder:"孫悟空",...l,children:[e.jsx(a,{}),e.jsx(t,{})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(n,{errorMessage:(P=s.textarea)==null?void 0:P.message,isInvalid:!!s.textarea,label:"Feedback",children:e.jsx(I,{name:"textarea",control:i,render:({field:l})=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",...l,children:[e.jsx(a,{}),e.jsx(pe,{})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var y,B,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(O=(B=o.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var q,D,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Editable defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`} h="4lh">
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>;
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var k,T,W;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" startWithEditView>
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>;
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var R,G,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" isPreviewFocusable={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(z=(G=c.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var A,H,N;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" submitOnBlur={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,_,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" selectAllOnFocus={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(J=(_=b.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,L,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Editable placeholder="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,Y,Z;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="default border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable defaultValue="custom border color" focusBorderColor="green.500">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable defaultValue="custom border color" errorBorderColor="orange.500" isInvalid>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>;
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="your email address" isDisabled>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl helperMessage="We'll never share your email." isDisabled label="Email address">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="your email address" isReadOnly>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl helperMessage="We'll never share your email." isReadOnly label="Email address">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ne,ie;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="your email address" isInvalid>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl errorMessage="Email is required." isInvalid label="Email address">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(ie=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,de,ue;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getCancelProps,
      getEditProps,
      getSubmitProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Check />} {...getSubmitProps()} aria-label="Submit" />
        <IconButton icon={<X />} {...getCancelProps()} aria-label="Cancel" />
      </ButtonGroup> : <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<Pencil />} {...getEditProps()} aria-label="Edit" />
      </ButtonGroup>;
  };
  return <Editable defaultValue="オッス！オラ悟空！" display="flex" gap="sm" isPreviewFocusable={false}>
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(ue=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,be;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  interface Data {
    input: string;
    textarea: string;
  }
  const defaultValues: Data = {
    input: "",
    textarea: ""
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.input?.message} isInvalid={!!errors.input} label="Name">
        <Controller name="input" control={control} render={({
        field
      }) => <Editable placeholder="孫悟空" {...field}>
              <EditablePreview />
              <EditableInput />
            </Editable>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.textarea?.message} isInvalid={!!errors.textarea} label="Feedback">
        <Controller name="textarea" control={control} render={({
        field
      }) => <Editable placeholder="オッス！オラ悟空！" {...field}>
              <EditablePreview />
              <EditableTextarea />
            </Editable>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(be=(me=g.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const Ye=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{Ye as __namedExportsOrder,o as basic,f as customControl,Ue as default,x as isDisabled,j as isInvalid,h as isReadonly,g as reactHookForm,E as withBorderColor,c as withIsPreviewFocusable,p as withPlaceholder,b as withSelectAllOnFocus,u as withStartWithEditView,m as withSubmitOnBlur,d as withTextarea};
