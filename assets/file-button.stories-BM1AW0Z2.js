import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{En as r,Z as i,yn as a}from"./core-C7NnSGLR.js";import{t as o}from"./jsx-runtime-D_578c1K.js";import{N as s,t as c}from"./icon-BMXCkoCb.js";import{t as l}from"./text-DSMMc5B6.js";import{t as u}from"./text-BM4F8FHS.js";import{f as d,v as f}from"./input-9Ni-qBwb.js";import{l as p,r as m,t as h}from"./button-C66K-mOB.js";import{a as g,r as _}from"./z-stack-D_lbkXhr.js";import{t as v}from"./wrap-DVXQ7Jc8.js";import{Dt as y,T as b,Ur as x,Wr as S,Xr as C,Yr as w}from"./iframe-CL-k_-ao.js";import{n as T,t as E}from"./storybook-ChTqU-79.js";import{n as D,r as O,t as k}from"./index.esm-COyjMJRW.js";var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{A=t(n(),1),D(),E(),i(),h(),d(),x(),c(),y(),u(),b(),C(),j=o(),M={component:w,title:`Components / FileButton`},N=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{children:`Upload`}),(0,j.jsx)(w,{as:m,"aria-label":`Upload file`,icon:(0,j.jsx)(s,{fontSize:`2xl`})})]}),P=()=>(0,j.jsx)(T,{columns:[`solid`,`subtle`,`surface`,`outline`,`ghost`],rows:r,children:(e,t,n)=>(0,j.jsx)(w,{colorScheme:t,variant:e,children:`FileButton`},n)}),F=()=>(0,j.jsx)(T,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:r,children:(e,t,n)=>(0,j.jsx)(w,{colorScheme:t,size:e,children:`FileButton`},n)}),I=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{multiple:!0,children:`Upload`}),(0,j.jsx)(w,{as:m,"aria-label":`Upload file`,icon:(0,j.jsx)(s,{fontSize:`2xl`}),multiple:!0})]}),L=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{accept:`image/png,image/jpeg`,children:`Upload`}),(0,j.jsx)(w,{as:m,"aria-label":`Upload file`,accept:`image/png,image/jpeg`,icon:(0,j.jsx)(s,{fontSize:`2xl`})})]}),R=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{gap:`md`,children:(0,j.jsx)(S,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,j.jsx)(w,{variant:e,disabled:!0,children:a(e)},t)})}),(0,j.jsx)(v,{gap:`md`,children:(0,j.jsx)(S,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,j.jsx)(w,{as:m,variant:e,"aria-label":`Upload file`,disabled:!0,icon:(0,j.jsx)(s,{fontSize:`2xl`})},t)})}),(0,j.jsx)(f,{disabled:!0,helperMessage:`Please select a file to upload.`,label:`Upload file`,children:(0,j.jsx)(w,{justifySelf:`flex-start`,children:`Upload`})})]}),z=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{gap:`md`,children:(0,j.jsx)(S,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,j.jsx)(w,{variant:e,readOnly:!0,children:a(e)},t)})}),(0,j.jsx)(v,{gap:`md`,children:(0,j.jsx)(S,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,j.jsx)(w,{as:m,variant:e,"aria-label":`Upload file`,icon:(0,j.jsx)(s,{fontSize:`2xl`}),readOnly:!0},t)})}),(0,j.jsx)(f,{helperMessage:`Please select a file to upload.`,label:`Upload file`,readOnly:!0,children:(0,j.jsx)(w,{justifySelf:`flex-start`,children:`Upload`})})]}),B=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{gap:`md`,children:(0,j.jsx)(S,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,j.jsx)(w,{variant:e,invalid:!0,children:a(e)},t)})}),(0,j.jsx)(v,{gap:`md`,children:(0,j.jsx)(S,{each:[`solid`,`subtle`,`surface`,`outline`,`ghost`],children:(e,t)=>(0,j.jsx)(w,{as:m,variant:e,"aria-label":`Upload file`,icon:(0,j.jsx)(s,{fontSize:`2xl`}),invalid:!0},t)})}),(0,j.jsx)(f,{errorMessage:`File is required.`,invalid:!0,label:`Upload file`,children:(0,j.jsx)(w,{justifySelf:`flex-start`,children:`Upload`})})]}),V=()=>(0,j.jsx)(w,{errorBorderColor:`orange.500`,invalid:!0,children:`Upload`}),H=()=>{let[e,t]=(0,A.useState)(void 0),n=(0,A.useRef)(null);return(0,j.jsxs)(_,{children:[(0,j.jsxs)(l,{children:[`files: `,e?.length??0]}),(0,j.jsxs)(g,{children:[(0,j.jsx)(w,{multiple:!0,resetRef:n,onChange:t,children:`Upload`}),(0,j.jsx)(p,{onClick:()=>{t(void 0),n.current?.()},children:`Reset`})]})]})},U=()=>{let e=(0,A.useRef)(null),{control:t,formState:{errors:n},handleSubmit:r,setValue:i}=O(),a=()=>{i(`fileButton`,null),e.current?.()};return(0,j.jsxs)(_,{as:`form`,onSubmit:r(e=>console.log(`submit:`,e)),children:[(0,j.jsx)(f,{errorMessage:n.fileButton?.message,invalid:!!n.fileButton,label:`Files`,children:(0,j.jsx)(k,{name:`fileButton`,control:t,render:({field:{ref:t,name:n,onBlur:r,onChange:i}})=>(0,j.jsxs)(g,{children:[(0,j.jsx)(w,{ref:t,name:n,onBlur:r,onChange:i,resetRef:e,children:`Upload`}),(0,j.jsx)(p,{onClick:a,children:`Reset`})]}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,j.jsx)(p,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} variant={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} size={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />
    </>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => <FileButton key={index} variant={variant} disabled>
              {toTitleCase(variant)}
            </FileButton>}
        </For>
      </Wrap>

      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => <FileButton key={index} as={IconButton} variant={variant} aria-label="Upload file" disabled icon={<PlusIcon fontSize="2xl" />} />}
        </For>
      </Wrap>

      <Field.Root disabled helperMessage="Please select a file to upload." label="Upload file">
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => <FileButton key={index} variant={variant} readOnly>
              {toTitleCase(variant)}
            </FileButton>}
        </For>
      </Wrap>

      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => <FileButton key={index} as={IconButton} variant={variant} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} readOnly />}
        </For>
      </Wrap>

      <Field.Root helperMessage="Please select a file to upload." label="Upload file" readOnly>
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => <FileButton key={index} variant={variant} invalid>
              {toTitleCase(variant)}
            </FileButton>}
        </For>
      </Wrap>

      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => <FileButton key={index} as={IconButton} variant={variant} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} invalid />}
        </For>
      </Wrap>

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <VStack>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton multiple resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </VStack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    fileButton: File[] | null;
  }
  const resetRef = useRef<() => void>(null);
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    setValue
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.fileButton?.message} invalid={!!errors.fileButton} label="Files">
        <Controller name="fileButton" control={control} render={({
        field: {
          ref,
          name,
          onBlur,
          onChange
        }
      }) => <HStack>
              <FileButton {...{
          ref,
          name,
          onBlur,
          onChange
        }} resetRef={resetRef}>
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>} rules={{
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
}`,...U.parameters?.docs?.source}}},W=[`Basic`,`Variant`,`Size`,`Multiple`,`Accept`,`Disabled`,`ReadOnly`,`Invalid`,`BorderColor`,`Reset`,`ReactHookForm`]}))();export{L as Accept,N as Basic,V as BorderColor,R as Disabled,B as Invalid,I as Multiple,U as ReactHookForm,z as ReadOnly,H as Reset,F as Size,P as Variant,W as __namedExportsOrder,M as default};