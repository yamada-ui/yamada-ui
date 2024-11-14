import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as xe,C as F}from"./index.esm-CEdvtQ_U.js";import{E as r,a,b as s,c as be,u as he}from"./editable-Dmkl5Nj2.js";import{P as je}from"./pencil-C6wVC9q-.js";import{F as n}from"./fieldset-fD6gM2Jx.js";import{V as ge}from"./stack-DfTvLKXJ.js";import{B as fe,a as C}from"./button-C2qeh-k-.js";import{I as V}from"./icon-button-x1xCff5h.js";import{C as we}from"./check-2LH0dBvs.js";import{X as ve}from"./x-DYQwEE1_.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DPt_fcIQ.js";import"./factory-COau3w21.js";import"./index-Bt_V34Vb.js";import"./index-qyuJ8aiN.js";import"./form-control-Y8qD5MxJ.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-CLSKeq_H.js";import"./theme-provider-CNI9L2WW.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./createLucideIcon-Czt4prMK.js";import"./visually-hidden-CyKzG3XZ.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./loading-DYtJ9fc2.js";const Ze={component:r,title:"Components / Forms / Editable"},o=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(s,{})]}),d=()=>e.jsxs(r,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,h:"4lh",children:[e.jsx(a,{}),e.jsx(be,{h:"4lh"})]}),u=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",startWithEditView:!0,children:[e.jsx(a,{}),e.jsx(s,{"aria-legend":"Input character serif"})]}),c=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",isPreviewFocusable:!1,children:[e.jsx(a,{}),e.jsx(s,{})]}),m=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",submitOnBlur:!1,children:[e.jsx(a,{}),e.jsx(s,{})]}),p=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",selectAllOnFocus:!1,children:[e.jsx(a,{}),e.jsx(s,{})]}),b=()=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(s,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"default border color",children:[e.jsx(a,{}),e.jsx(s,{})]}),e.jsxs(r,{defaultValue:"custom border color",focusBorderColor:"green.500",children:[e.jsx(a,{}),e.jsx(s,{})]}),e.jsxs(r,{defaultValue:"custom border color",errorBorderColor:"orange.500",isInvalid:!0,children:[e.jsx(a,{}),e.jsx(s,{})]})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"your email address",isDisabled:!0,children:[e.jsx(a,{}),e.jsx(s,{})]}),e.jsx(n,{helperMessage:"We'll never share your email.",isDisabled:!0,legend:"Email address",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(s,{})]})})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"your email address",isReadOnly:!0,children:[e.jsx(a,{}),e.jsx(s,{})]}),e.jsx(n,{helperMessage:"We'll never share your email.",isReadOnly:!0,legend:"Email address",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(s,{})]})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"your email address",isInvalid:!0,children:[e.jsx(a,{}),e.jsx(s,{})]}),e.jsx(n,{errorMessage:"Email is required.",isInvalid:!0,legend:"Email address",children:e.jsxs(r,{defaultValue:"your email address",children:[e.jsx(a,{}),e.jsx(s,{})]})})]}),g=()=>{const w=()=>{const{isEditing:i,getCancelProps:t,getEditProps:v,getSubmitProps:I}=he();return i?e.jsxs(C,{size:"sm",gap:"sm",children:[e.jsx(V,{icon:e.jsx(we,{}),...I(),"aria-legend":"Submit"}),e.jsx(V,{icon:e.jsx(ve,{}),...t(),"aria-label":"Cancel"})]}):e.jsx(C,{size:"sm",gap:"sm",children:e.jsx(V,{icon:e.jsx(je,{}),...v(),"aria-label":"Edit"})})};return e.jsxs(r,{defaultValue:"オッス！オラ悟空！",display:"flex",gap:"sm",isPreviewFocusable:!1,children:[e.jsx(a,{w:"full"}),e.jsx(s,{}),e.jsx(w,{})]})},f=()=>{var S,P;const w={input:"",textarea:""},{control:i,formState:{errors:t},handleSubmit:v,watch:I}=xe({defaultValues:w}),Ee=l=>console.log("submit:",l);return console.log("watch:",I()),e.jsxs(ge,{as:"form",onSubmit:v(Ee),children:[e.jsx(n,{errorMessage:(S=t.input)==null?void 0:S.message,isInvalid:!!t.input,legend:"Name",children:e.jsx(F,{name:"input",control:i,render:({field:l})=>e.jsxs(r,{placeholder:"孫悟空",...l,children:[e.jsx(a,{}),e.jsx(s,{})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(n,{errorMessage:(P=t.textarea)==null?void 0:P.message,isInvalid:!!t.textarea,legend:"Feedback",children:e.jsx(F,{name:"textarea",control:i,render:({field:l})=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",...l,children:[e.jsx(a,{}),e.jsx(be,{})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(fe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var y,B,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
      <EditableInput aria-legend="Input character serif" />
    </Editable>;
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var R,G,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" isPreviewFocusable={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(z=(G=c.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var A,H,X;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" submitOnBlur={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(X=(H=m.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var N,_,J;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Editable defaultValue="オッス！オラ悟空！" selectAllOnFocus={false}>
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

      <Fieldset helperMessage="We'll never share your email." isDisabled legend="Email address">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Fieldset>
    </>;
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="your email address" isReadOnly>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Fieldset helperMessage="We'll never share your email." isReadOnly legend="Email address">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Fieldset>
    </>;
}`,...(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ne,ie;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue="your email address" isInvalid>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Fieldset errorMessage="Email is required." isInvalid legend="Email address">
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Fieldset>
    </>;
}`,...(ie=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,de,ue;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getCancelProps,
      getEditProps,
      getSubmitProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitProps()} aria-legend="Submit" />

        <IconButton icon={<XIcon />} {...getCancelProps()} aria-label="Cancel" />
      </ButtonGroup> : <ButtonGroup size="sm" gap="sm">
        <IconButton icon={<PencilIcon />} {...getEditProps()} aria-label="Edit" />
      </ButtonGroup>;
  };
  return <Editable defaultValue="オッス！オラ悟空！" display="flex" gap="sm" isPreviewFocusable={false}>
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(ue=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.input?.message} isInvalid={!!errors.input} legend="Name">
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
      </Fieldset>

      <Fieldset errorMessage={errors.textarea?.message} isInvalid={!!errors.textarea} legend="Feedback">
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
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(pe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const $e=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{$e as __namedExportsOrder,o as basic,g as customControl,Ze as default,x as isDisabled,j as isInvalid,h as isReadonly,f as reactHookForm,E as withBorderColor,c as withIsPreviewFocusable,b as withPlaceholder,p as withSelectAllOnFocus,u as withStartWithEditView,m as withSubmitOnBlur,d as withTextarea};
