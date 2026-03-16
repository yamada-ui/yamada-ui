import{p as V,a9 as d,r as v,j as e,av as w,s as _,Q as R,w as E,Z as i,P,V as I,T as q,C as W}from"./iframe-1jXkjttE.js";import{P as z}from"./props-table-6bEoLrKl.js";import{u as D,C as L}from"./index.esm-BprPa2Cz.js";import{u as A}from"./use-file-input-DQPwv0n_.js";import{u as Q}from"./use-input-border-B-lYC9qG.js";import{W as s}from"./wrap-CiIIn8a0.js";import{F as l}from"./for-97YvSO2o.js";import{H as O}from"./h-stack-DJG4lz9Q.js";import{P as u}from"./plus-icon-CifrEas3.js";import{F as C}from"./use-field-props-BJdtSFy6.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BFeokbW8.js";import"./grid-item-B4aqBGwd.js";import"./flex-DQXuIXai.js";import"./heading-4hOOjByT.js";import"./index-CHzU9vRd.js";import"./index-BrR0O40G.js";import"./index-BXuRQEcq.js";const Z=V({base:{"--error-border-color":"colors.border.error"},variants:{ghost:{...d.variants?.ghost,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},outline:{...d.variants?.outline,_invalid:{borderColor:"{error-border-color}"}},solid:{...d.variants?.solid,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},subtle:{...d.variants?.subtle,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},surface:{...d.variants?.surface,_invalid:{borderColor:"{error-border-color}"}}},defaultProps:{variant:"solid"}}),G=(n={})=>{const{clickableProps:r,getInputProps:t}=A(n),a=v.useCallback(c=>({...r,...c}),[r]);return{clickableProps:r,getButtonProps:a,getInputProps:t}},{withContext:J}=E("file-button",Z),o=J(({as:n=R,children:r,errorBorderColor:t,...a})=>{const{getButtonProps:c,getInputProps:U}=G(a),y=Q({errorBorderColor:t});return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(_.input,{...U()})}),e.jsx(n,{...y,...c(),children:r})]})})(),me={component:o,title:"Components / FileButton"},p=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Upload"}),e.jsx(o,{as:i,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"})})]}),m=()=>e.jsx(z,{columns:["solid","subtle","surface","outline","ghost"],rows:W,children:(n,r,t)=>e.jsx(o,{colorScheme:r,variant:n,children:"FileButton"},t)}),f=()=>e.jsx(z,{columns:["xs","sm","md","lg","xl"],rows:W,children:(n,r,t)=>e.jsx(o,{colorScheme:r,size:n,children:"FileButton"},t)}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{multiple:!0,children:"Upload"}),e.jsx(o,{as:i,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"}),multiple:!0})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(o,{as:i,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(u,{fontSize:"2xl"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,disabled:!0,children:P(n)},r)})}),e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:i,variant:n,"aria-label":"Upload file",disabled:!0,icon:e.jsx(u,{fontSize:"2xl"})},r)})}),e.jsx(C,{disabled:!0,helperMessage:"Please select a file to upload.",label:"Upload file",children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,readOnly:!0,children:P(n)},r)})}),e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:i,variant:n,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"}),readOnly:!0},r)})}),e.jsx(C,{helperMessage:"Please select a file to upload.",label:"Upload file",readOnly:!0,children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,invalid:!0,children:P(n)},r)})}),e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:i,variant:n,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"}),invalid:!0},r)})}),e.jsx(C,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),B=()=>e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,children:"Upload"}),j=()=>{const[n,r]=v.useState(void 0),t=v.useRef(null),a=()=>{r(void 0),t.current?.()};return e.jsxs(I,{children:[e.jsxs(q,{children:["files: ",n?.length??0]}),e.jsxs(O,{children:[e.jsx(o,{multiple:!0,resetRef:t,onChange:r,children:"Upload"}),e.jsx(R,{onClick:a,children:"Reset"})]})]})},S=()=>{const n=v.useRef(null),{control:r,formState:{errors:t},handleSubmit:a,setValue:c}=D(),U=()=>{c("fileButton",null),n.current?.()},y=k=>console.log("submit:",k);return e.jsxs(I,{as:"form",onSubmit:a(y),children:[e.jsx(C,{errorMessage:t.fileButton?.message,invalid:!!t.fileButton,label:"Files",children:e.jsx(L,{name:"fileButton",control:r,render:({field:{ref:k,name:T,onBlur:M,onChange:H}})=>e.jsxs(O,{children:[e.jsx(o,{ref:k,name:T,onBlur:M,onChange:H,resetRef:n,children:"Upload"}),e.jsx(R,{onClick:U,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(R,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} variant={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} size={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />
    </>;
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};const fe=["Basic","Variant","Size","Multiple","Accept","Disabled","ReadOnly","Invalid","BorderColor","Reset","ReactHookForm"];export{h as Accept,p as Basic,B as BorderColor,g as Disabled,F as Invalid,x as Multiple,S as ReactHookForm,b as ReadOnly,j as Reset,f as Size,m as Variant,fe as __namedExportsOrder,me as default};
