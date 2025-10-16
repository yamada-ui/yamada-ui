import{p as V,ah as p,r as R,e as _,q as E,j as e,aw as q,s as D,S as C,$ as i,C as I,R as P,V as W,T as A}from"./iframe-B0P9Y6nu.js";import{P as z}from"./props-table-BBOOdbBE.js";import{u as L,C as $}from"./index.esm-C3t_tuXF.js";import{u as G}from"./use-file-input-sNfxzVRY.js";import{u as J}from"./use-input-border-BNPs4Mo9.js";import{W as s}from"./wrap-BscgfT5S.js";import{F as l}from"./for-ClzBHWNn.js";import{H as w}from"./h-stack-CdiUxd5d.js";import{P as u}from"./plus-icon-B0lzVpJU.js";import{F as U}from"./use-field-props-DDmJ1gDh.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-d_ej_Zt5.js";import"./grid-item-DpCtVAhf.js";import"./flex-DYi500Yr.js";import"./heading-91H7fwws.js";import"./index-ap5EAetT.js";import"./index-Dto3Pijj.js";import"./index-ISt4vA3k.js";const K=V({base:{"--error-border-color":"colors.border.error"},variants:{ghost:{...p.variants?.ghost,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},outline:{...p.variants?.outline,_invalid:{borderColor:"{error-border-color}"}},solid:{...p.variants?.solid,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},subtle:{...p.variants?.subtle,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},surface:{...p.variants?.surface,_invalid:{borderColor:"{error-border-color}"}}},defaultProps:{variant:"solid"}}),N=(n={})=>{const{interactive:r,clickableProps:o,getInputProps:a}=G(n),c=R.useCallback(d=>({...o,"aria-disabled":_(!r),tabIndex:r?o.tabIndex:-1,...d}),[o,r]);return{clickableProps:o,getButtonProps:c,getInputProps:a}},{withContext:Q}=E("file-button",K),t=Q(({as:n=C,children:r,errorBorderColor:o,...a})=>{const{getButtonProps:c,getInputProps:d}=N(a),y=J({errorBorderColor:o});return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx(D.input,{...d()})}),e.jsx(n,{...y,...c(),children:r})]})})(),xe={component:t,title:"Components / FileButton"},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Upload"}),e.jsx(t,{as:i,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"})})]}),f=()=>e.jsx(z,{columns:["solid","subtle","surface","outline","ghost"],rows:I,children:(n,r,o)=>e.jsx(t,{colorScheme:r,variant:n,children:"FileButton"},o)}),x=()=>e.jsx(z,{columns:["xs","sm","md","lg","xl"],rows:I,children:(n,r,o)=>e.jsx(t,{colorScheme:r,size:n,children:"FileButton"},o)}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{multiple:!0,children:"Upload"}),e.jsx(t,{as:i,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"}),multiple:!0})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(t,{as:i,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(u,{fontSize:"2xl"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(t,{variant:n,disabled:!0,children:P(n)},r)})}),e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(t,{as:i,variant:n,"aria-label":"Upload file",disabled:!0,icon:e.jsx(u,{fontSize:"2xl"})},r)})}),e.jsx(U,{disabled:!0,helperMessage:"Please select a file to upload.",label:"Upload file",children:e.jsx(t,{justifySelf:"flex-start",children:"Upload"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(t,{variant:n,readOnly:!0,children:P(n)},r)})}),e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(t,{as:i,variant:n,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"}),readOnly:!0},r)})}),e.jsx(U,{helperMessage:"Please select a file to upload.",label:"Upload file",readOnly:!0,children:e.jsx(t,{justifySelf:"flex-start",children:"Upload"})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(t,{variant:n,invalid:!0,children:P(n)},r)})}),e.jsx(s,{gap:"md",children:e.jsx(l,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(t,{as:i,variant:n,"aria-label":"Upload file",icon:e.jsx(u,{fontSize:"2xl"}),invalid:!0},r)})}),e.jsx(U,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(t,{justifySelf:"flex-start",children:"Upload"})})]}),j=()=>e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,children:"Upload"}),S=()=>{const[n,r]=R.useState(void 0),o=R.useRef(null),a=()=>{r(void 0),o.current?.()};return e.jsxs(W,{children:[e.jsxs(A,{children:["files: ",n?.length??0]}),e.jsxs(w,{children:[e.jsx(t,{multiple:!0,resetRef:o,onChange:r,children:"Upload"}),e.jsx(C,{onClick:a,children:"Reset"})]})]})},v=()=>{const n=R.useRef(null),{control:r,formState:{errors:o},handleSubmit:a,setValue:c,watch:d}=L(),y=()=>{c("fileButton",null),n.current?.()},O=k=>console.log("submit:",k);return console.log("watch:",d()),e.jsxs(W,{as:"form",onSubmit:a(O),children:[e.jsx(U,{errorMessage:o.fileButton?.message,invalid:!!o.fileButton,label:"Files",children:e.jsx($,{name:"fileButton",control:r,render:({field:{ref:k,name:T,onBlur:M,onChange:H}})=>e.jsxs(w,{children:[e.jsx(t,{ref:k,name:T,onBlur:M,onChange:H,resetRef:n,children:"Upload"}),e.jsx(C,{onClick:y,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(C,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
        <FileButton justifySelf="flex-start">Upload</FileButton>
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
        <FileButton justifySelf="flex-start">Upload</FileButton>
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
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>;
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const he=["Basic","Variant","Size","Multiple","Accept","Disabled","ReadOnly","Invalid","BorderColor","Reset","ReactHookForm"];export{g as Accept,m as Basic,j as BorderColor,b as Disabled,B as Invalid,h as Multiple,v as ReactHookForm,F as ReadOnly,S as Reset,x as Size,f as Variant,he as __namedExportsOrder,xe as default};
