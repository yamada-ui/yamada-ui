import{j as e,V as T}from"./iframe-CDTQ5ROD.js";import{u as O,C}from"./index.esm-C4tYERGP.js";import{I as s}from"./icon-button-DjGAPh7m.js";import{B as y}from"./button-DJ5m59RZ.js";import{B as Y}from"./button-group-Djy659CQ.js";import{E as r,a,b as t,c as V,d as k,e as q,f as M,g as z,u as D}from"./editable-Da9bz-Nt.js";import{F as n}from"./use-field-props-DjiGD3ru.js";import{P as I}from"./pencil-icon-DrCDJfMh.js";import{C as w}from"./check-icon-f0aVY7ms.js";import{X as P}from"./x-icon-Br5DKOS7.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-CRajOxML.js";import"./rings-dYmcfrIU.js";import"./group-D3c91OA4.js";import"./index-DiHcGD1N.js";import"./use-breakpoint-CMnSSNhN.js";import"./use-breakpoint-value-D9ZXJUvj.js";import"./use-color-mode-value-CFswxupI.js";import"./flex-BrTFS1Ax.js";import"./index-enh5qnq3.js";import"./index-W8ugI876.js";import"./index-CwV9TfzL.js";import"./use-input-border-B-MKti-N.js";import"./createLucideIcon-D7lzYFmP.js";const ue={component:r,title:"Components / Editable"},d=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{})]}),u=()=>e.jsxs(r,{defaultValue:`私の戦闘力は530000です。
ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,children:[e.jsx(a,{}),e.jsx(V,{})]}),c=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",startWithEditView:!0,children:[e.jsx(a,{}),e.jsx(t,{"aria-label":"Input character serif"})]}),m=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",previewFocusable:!1,children:[e.jsx(a,{}),e.jsx(t,{})]}),b=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",submitOnBlur:!1,children:[e.jsx(a,{}),e.jsx(t,{})]}),p=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",selectAllOnFocus:!1,children:[e.jsx(a,{}),e.jsx(t,{})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"Your email address",disabled:!0,children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{disabled:!0,helperMessage:"We'll never share your email.",label:"Email address",children:e.jsxs(r,{defaultValue:"Your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"Your email address",readOnly:!0,children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{helperMessage:"We'll never share your email.",label:"Email address",readOnly:!0,children:e.jsxs(r,{defaultValue:"Your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"Your email address",invalid:!0,children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsx(n,{errorMessage:"Email is required.",invalid:!0,label:"Email address",children:e.jsxs(r,{defaultValue:"Your email address",children:[e.jsx(a,{}),e.jsx(t,{})]})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"Default border color",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{defaultValue:"Custom border color",focusBorderColor:"green.500",children:[e.jsx(a,{}),e.jsx(t,{})]}),e.jsxs(r,{defaultValue:"Custom border color",errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(a,{}),e.jsx(t,{})]})]}),f=()=>e.jsxs(r,{defaultValue:"オッス！オラ悟空！",children:[e.jsx(a,{}),e.jsx(t,{}),e.jsxs(k,{children:[e.jsx(q,{children:e.jsx(s,{size:"xs",variant:"ghost","aria-label":"Edit",icon:e.jsx(I,{})})}),e.jsx(M,{children:e.jsx(s,{size:"xs",variant:"outline","aria-label":"Submit",icon:e.jsx(w,{})})}),e.jsx(z,{children:e.jsx(s,{size:"xs",variant:"outline","aria-label":"Cancel",icon:e.jsx(P,{})})})]})]}),h=()=>{const R=()=>{const{getCancelProps:i,getEditProps:o,getSubmitProps:S}=D();return e.jsxs(Y,{size:"xs",children:[e.jsx(s,{icon:e.jsx(I,{}),...o(),variant:"ghost","aria-label":"Edit"}),e.jsx(s,{icon:e.jsx(w,{}),...S(),variant:"outline","aria-label":"Submit"}),e.jsx(s,{icon:e.jsx(P,{}),...i(),variant:"outline","aria-label":"Cancel"})]})};return e.jsxs(r,{defaultValue:"オッス！オラ悟空！",previewFocusable:!1,children:[e.jsx(a,{}),e.jsx(t,{}),e.jsx(R,{})]})},v=()=>{const R={input:"",textarea:""},{control:i,formState:{errors:o},handleSubmit:S,watch:F}=O({defaultValues:R}),B=l=>console.log("submit:",l);return console.log("watch:",F()),e.jsxs(T,{as:"form",onSubmit:S(B),children:[e.jsx(n,{errorMessage:o.input?.message,invalid:!!o.input,label:"Name",children:e.jsx(C,{name:"input",control:i,render:({field:l})=>e.jsxs(r,{placeholder:"孫悟空",...l,children:[e.jsx(a,{}),e.jsx(t,{})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(n,{errorMessage:o.textarea?.message,invalid:!!o.textarea,label:"Feedback",children:e.jsx(C,{name:"textarea",control:i,render:({field:l})=>e.jsxs(r,{placeholder:"オッス！オラ悟空！",...l,children:[e.jsx(a,{}),e.jsx(V,{})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(y,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue="オッス！オラ悟空！">
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue={\`私の戦闘力は530000です。\\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……\`}>
      <Editable.Preview />
      <Editable.Textarea />
    </Editable.Root>;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue="オッス！オラ悟空！" startWithEditView>
      <Editable.Preview />
      <Editable.Input aria-label="Input character serif" />
    </Editable.Root>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue="オッス！オラ悟空！" previewFocusable={false}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>;
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue="オッス！オラ悟空！" submitOnBlur={false}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>;
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue="オッス！オラ悟空！" selectAllOnFocus={false}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>;
}`,...p.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Editable.Root defaultValue="Your email address" disabled>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Field.Root disabled helperMessage="We'll never share your email." label="Email address">
        <Editable.Root defaultValue="Your email address">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
      </Field.Root>
    </>;
}`,...E.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Editable.Root defaultValue="Your email address" readOnly>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Field.Root helperMessage="We'll never share your email." label="Email address" readOnly>
        <Editable.Root defaultValue="Your email address">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
      </Field.Root>
    </>;
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Editable.Root defaultValue="Your email address" invalid>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Field.Root errorMessage="Email is required." invalid label="Email address">
        <Editable.Root defaultValue="Your email address">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
      </Field.Root>
    </>;
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Editable.Root defaultValue="Default border color">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Editable.Root defaultValue="Custom border color" focusBorderColor="green.500">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Editable.Root defaultValue="Custom border color" errorBorderColor="orange.500" invalid>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
    </>;
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <Editable.Root defaultValue="オッス！オラ悟空！">
      <Editable.Preview />
      <Editable.Input />

      <Editable.Control>
        <Editable.EditTrigger>
          <IconButton size="xs" variant="ghost" aria-label="Edit" icon={<PencilIcon />} />
        </Editable.EditTrigger>
        <Editable.SubmitTrigger>
          <IconButton size="xs" variant="outline" aria-label="Submit" icon={<CheckIcon />} />
        </Editable.SubmitTrigger>
        <Editable.CancelTrigger>
          <IconButton size="xs" variant="outline" aria-label="Cancel" icon={<XIcon />} />
        </Editable.CancelTrigger>
      </Editable.Control>
    </Editable.Root>;
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      getCancelProps,
      getEditProps,
      getSubmitProps
    } = Editable.useContext();
    return <ButtonGroup size="xs">
        <IconButton icon={<PencilIcon />} {...getEditProps()} variant="ghost" aria-label="Edit" />

        <IconButton icon={<CheckIcon />} {...getSubmitProps()} variant="outline" aria-label="Submit" />

        <IconButton icon={<XIcon />} {...getCancelProps()} variant="outline" aria-label="Cancel" />
      </ButtonGroup>;
  };
  return <Editable.Root defaultValue="オッス！オラ悟空！" previewFocusable={false}>
      <Editable.Preview />
      <Editable.Input />
      <CustomControls />
    </Editable.Root>;
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
      <Field.Root errorMessage={errors.input?.message} invalid={!!errors.input} label="Name">
        <Controller name="input" control={control} render={({
        field
      }) => <Editable.Root placeholder="孫悟空" {...field}>
              <Editable.Preview />
              <Editable.Input />
            </Editable.Root>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Field.Root errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
        <Controller name="textarea" control={control} render={({
        field
      }) => <Editable.Root placeholder="オッス！オラ悟空！" {...field}>
              <Editable.Preview />
              <Editable.Textarea />
            </Editable.Root>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...v.parameters?.docs?.source}}};const ce=["Basic","Textarea","StartWithEditView","PreviewFocusable","SubmitOnBlur","SelectAllOnFocus","Disabled","Readonly","Invalid","BorderColor","Control","CustomControl","ReactHookForm"];export{d as Basic,g as BorderColor,f as Control,h as CustomControl,E as Disabled,j as Invalid,m as PreviewFocusable,v as ReactHookForm,x as Readonly,p as SelectAllOnFocus,c as StartWithEditView,b as SubmitOnBlur,u as Textarea,ce as __namedExportsOrder,ue as default};
