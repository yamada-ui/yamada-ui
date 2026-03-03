import{p as Se,a9 as p,r as C,q as ve,j as e,au as Ce,s as Re,Q as R,Z as c,C as xe,P,V as he,T as Ue}from"./iframe-B_LcDk8j.js";import{P as ge}from"./props-table-qgGdocBx.js";import{u as ye,C as ke}from"./index.esm-D7zi9RsZ.js";import{u as Pe}from"./use-file-input-BaFBs57o.js";import{u as Ie}from"./use-input-border-Cs_6al7k.js";import{W as i}from"./wrap-XeS6v3K8.js";import{F as u}from"./for-B4Q7qiCG.js";import{H as be}from"./h-stack-DNUfUmfF.js";import{P as d}from"./plus-icon-Cz4kHX4G.js";import{F as U}from"./use-field-props-BQReCeSO.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BlZthnbl.js";import"./grid-item-D8ZfrR7E.js";import"./flex-BReIzsmR.js";import"./heading-CKLDXwzq.js";import"./index-wC7is5Hm.js";import"./index-kz7yfflT.js";import"./index-5BTB5ezZ.js";var W,z,O,T,M;const We=Se({base:{"--error-border-color":"colors.border.error"},variants:{ghost:{...(W=p.variants)==null?void 0:W.ghost,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},outline:{...(z=p.variants)==null?void 0:z.outline,_invalid:{borderColor:"{error-border-color}"}},solid:{...(O=p.variants)==null?void 0:O.solid,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},subtle:{...(T=p.variants)==null?void 0:T.subtle,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},surface:{...(M=p.variants)==null?void 0:M.surface,_invalid:{borderColor:"{error-border-color}"}}},defaultProps:{variant:"solid"}}),ze=(n={})=>{const{clickableProps:r,getInputProps:t}=Pe(n),s=C.useCallback(a=>({...r,...a}),[r]);return{clickableProps:r,getButtonProps:s,getInputProps:t}},{withContext:Oe}=ve("file-button",We),o=Oe(({as:n=R,children:r,errorBorderColor:t,...s})=>{const{getButtonProps:a,getInputProps:y}=ze(s),k=Ie({errorBorderColor:t});return e.jsxs(e.Fragment,{children:[e.jsx(Ce,{children:e.jsx(Re.input,{...y()})}),e.jsx(n,{...k,...a(),children:r})]})})(),Ye={component:o,title:"Components / FileButton"},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Upload"}),e.jsx(o,{as:c,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"})})]}),f=()=>e.jsx(ge,{columns:["solid","subtle","surface","outline","ghost"],rows:xe,children:(n,r,t)=>e.jsx(o,{colorScheme:r,variant:n,children:"FileButton"},t)}),x=()=>e.jsx(ge,{columns:["xs","sm","md","lg","xl"],rows:xe,children:(n,r,t)=>e.jsx(o,{colorScheme:r,size:n,children:"FileButton"},t)}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{multiple:!0,children:"Upload"}),e.jsx(o,{as:c,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(o,{as:c,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(d,{fontSize:"2xl"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,disabled:!0,children:P(n)},r)})}),e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:c,variant:n,"aria-label":"Upload file",disabled:!0,icon:e.jsx(d,{fontSize:"2xl"})},r)})}),e.jsx(U,{disabled:!0,helperMessage:"Please select a file to upload.",label:"Upload file",children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,readOnly:!0,children:P(n)},r)})}),e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:c,variant:n,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),readOnly:!0},r)})}),e.jsx(U,{helperMessage:"Please select a file to upload.",label:"Upload file",readOnly:!0,children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,invalid:!0,children:P(n)},r)})}),e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:c,variant:n,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),invalid:!0},r)})}),e.jsx(U,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),j=()=>e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,children:"Upload"}),S=()=>{const[n,r]=C.useState(void 0),t=C.useRef(null),s=()=>{var a;r(void 0),(a=t.current)==null||a.call(t)};return e.jsxs(he,{children:[e.jsxs(Ue,{children:["files: ",(n==null?void 0:n.length)??0]}),e.jsxs(be,{children:[e.jsx(o,{multiple:!0,resetRef:t,onChange:r,children:"Upload"}),e.jsx(R,{onClick:s,children:"Reset"})]})]})},v=()=>{var I;const n=C.useRef(null),{control:r,formState:{errors:t},handleSubmit:s,setValue:a}=ye(),y=()=>{var l;a("fileButton",null),(l=n.current)==null||l.call(n)},k=l=>console.log("submit:",l);return e.jsxs(he,{as:"form",onSubmit:s(k),children:[e.jsx(U,{errorMessage:(I=t.fileButton)==null?void 0:I.message,invalid:!!t.fileButton,label:"Files",children:e.jsx(ke,{name:"fileButton",control:r,render:({field:{ref:l,name:Fe,onBlur:Be,onChange:je}})=>e.jsxs(be,{children:[e.jsx(o,{ref:l,name:Fe,onBlur:Be,onChange:je,resetRef:n,children:"Upload"}),e.jsx(R,{onClick:y,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(R,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var H,V,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var w,E,q;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} variant={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...(q=(E=f.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,L,A;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} size={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...(A=(L=x.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var Q,Z,G;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />
    </>;
}`,...(G=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,K,N;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...(N=(K=g.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var X,Y,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ne,re;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(re=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,te,ae;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,le,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...(ie=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,ce,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,fe;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const $e=["Basic","Variant","Size","Multiple","Accept","Disabled","ReadOnly","Invalid","BorderColor","Reset","ReactHookForm"];export{g as Accept,m as Basic,j as BorderColor,b as Disabled,B as Invalid,h as Multiple,v as ReactHookForm,F as ReadOnly,S as Reset,x as Size,f as Variant,$e as __namedExportsOrder,Ye as default};
