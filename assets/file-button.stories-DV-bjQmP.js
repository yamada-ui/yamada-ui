import{t as V,r as R,b as _,u as E,j as e,Z as q,s as D,C as I,G as P,V as W,T as A}from"./iframe-CzCJWi2Q.js";import{u as L,C as G}from"./index.esm-DaDCkLbd.js";import{b as p,B as C}from"./button-DehxczKB.js";import{u as Z}from"./use-file-input-DMpj9KiJ.js";import{u as J}from"./use-input-border-DTHMWbY1.js";import{I as i}from"./icon-button-DXfsOg5d.js";import{W as l}from"./wrap-S0g3aWr_.js";import{F as s}from"./for-B9vVJZhr.js";import{H as z}from"./h-stack-kAIWxfdY.js";import{P as c}from"./plus-icon-Duh5G46q.js";import{P as T}from"./props-table-DBQkC1jw.js";import{F as U}from"./use-field-props-DhdxQdXh.js";import"./use-ripple-Cto3JHtM.js";import"./rings-DZYkvdi_.js";import"./index-YTKw9hAq.js";import"./index-q8QwgtUT.js";import"./index-Donn17eJ.js";import"./flex-CTfg42JT.js";import"./createLucideIcon-NwzbYI2T.js";import"./grid-BgXiws5k.js";import"./grid-item-BRSvi5nv.js";import"./heading-Db76muhr.js";const K=V({base:{"--error-border-color":"colors.border.error"},variants:{ghost:{...p.variants?.ghost,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},outline:{...p.variants?.outline,_invalid:{borderColor:"{error-border-color}"}},solid:{...p.variants?.solid,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},subtle:{...p.variants?.subtle,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},surface:{...p.variants?.surface,_invalid:{borderColor:"{error-border-color}"}}},defaultProps:{variant:"solid"}}),N=(n={})=>{const{interactive:r,clickableProps:t,getInputProps:a}=Z(n),u=R.useCallback(d=>({...t,"aria-disabled":_(!r),tabIndex:r?t.tabIndex:-1,...d}),[t,r]);return{clickableProps:t,getButtonProps:u,getInputProps:a}},{withContext:Q}=E("file-button",K),o=Q(({as:n=C,children:r,errorBorderColor:t,...a})=>{const{getButtonProps:u,getInputProps:d}=N(a),k=J({errorBorderColor:t});return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx(D.input,{...d()})}),e.jsx(n,{...k,...u(),children:r})]})})(),Fe={component:o,title:"Components / FileButton"},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Upload"}),e.jsx(o,{as:i,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"})})]}),f=()=>e.jsx(T,{columns:["solid","subtle","surface","outline","ghost"],rows:I,children:(n,r,t)=>e.jsx(o,{colorScheme:r,variant:n,children:"FileButton"},t)}),x=()=>e.jsx(T,{columns:["xs","sm","md","lg","xl"],rows:I,children:(n,r,t)=>e.jsx(o,{colorScheme:r,size:n,children:"FileButton"},t)}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{multiple:!0,children:"Upload"}),e.jsx(o,{as:i,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),multiple:!0})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(o,{as:i,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(c,{fontSize:"2xl"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{gap:"md",children:e.jsx(s,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,disabled:!0,children:P(n)},r)})}),e.jsx(l,{gap:"md",children:e.jsx(s,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:i,variant:n,"aria-label":"Upload file",disabled:!0,icon:e.jsx(c,{fontSize:"2xl"})},r)})}),e.jsx(U,{disabled:!0,helperMessage:"Please select a file to upload.",label:"Upload file",children:e.jsx(o,{alignSelf:"flex-start",children:"Upload"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{gap:"md",children:e.jsx(s,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,readOnly:!0,children:P(n)},r)})}),e.jsx(l,{gap:"md",children:e.jsx(s,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:i,variant:n,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),readOnly:!0},r)})}),e.jsx(U,{helperMessage:"Please select a file to upload.",label:"Upload file",readOnly:!0,children:e.jsx(o,{alignSelf:"flex-start",children:"Upload"})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{gap:"md",children:e.jsx(s,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,invalid:!0,children:P(n)},r)})}),e.jsx(l,{gap:"md",children:e.jsx(s,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:i,variant:n,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),invalid:!0},r)})}),e.jsx(U,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{alignSelf:"flex-start",children:"Upload"})})]}),S=()=>e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,children:"Upload"}),j=()=>{const[n,r]=R.useState(void 0),t=R.useRef(null),a=()=>{r(void 0),t.current?.()};return e.jsxs(W,{gap:"md",children:[e.jsxs(A,{children:["files: ",n?.length??0]}),e.jsxs(z,{children:[e.jsx(o,{multiple:!0,resetRef:t,onChange:r,children:"Upload"}),e.jsx(C,{onClick:a,children:"Reset"})]})]})},v=()=>{const n=R.useRef(null),{control:r,formState:{errors:t},handleSubmit:a,setValue:u,watch:d}=L(),k=()=>{u("fileButton",null),n.current?.()},w=y=>console.log("submit:",y);return console.log("watch:",d()),e.jsxs(W,{as:"form",onSubmit:a(w),children:[e.jsx(U,{errorMessage:t.fileButton?.message,invalid:!!t.fileButton,label:"Files",children:e.jsx(G,{name:"fileButton",control:r,render:({field:{ref:y,name:M,onBlur:O,onChange:H}})=>e.jsxs(z,{children:[e.jsx(o,{ref:y,name:M,onBlur:O,onChange:H,resetRef:n,children:"Upload"}),e.jsx(C,{onClick:k,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(C,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} variant={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} size={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />
    </>;
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
        <FileButton alignSelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
        <FileButton alignSelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
        <FileButton alignSelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <VStack gap="md">
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton multiple resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </VStack>;
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
    setValue,
    watch
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...v.parameters?.docs?.source}}};const Be=["Basic","Variant","Size","Multiple","Accept","Disabled","Readonly","Invalid","BorderColor","Reset","ReactHookForm"];export{g as Accept,m as Basic,S as BorderColor,b as Disabled,B as Invalid,h as Multiple,v as ReactHookForm,F as Readonly,j as Reset,x as Size,f as Variant,Be as __namedExportsOrder,Fe as default};
