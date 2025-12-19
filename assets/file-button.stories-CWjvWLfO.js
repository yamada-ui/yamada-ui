import{p as Se,aO as m,r as R,e as ve,q as Ce,j as e,ar as Re,s as Ue,Q as U,Z as c,C as xe,P,V as he,T as ye}from"./iframe-D_HYglKf.js";import{P as ge}from"./props-table-TlEH2bpt.js";import{u as ke,C as Pe}from"./index.esm-B43pSn5g.js";import{u as Ie}from"./use-file-input-gC39Xy34.js";import{u as We}from"./use-input-border-CNq4o9Wo.js";import{W as i}from"./wrap-J2MLo2sY.js";import{F as u}from"./for-B7ME2eWM.js";import{H as be}from"./h-stack-DUGJfnik.js";import{P as d}from"./plus-icon-C5UWcfh2.js";import{F as y}from"./use-field-props-DKtq6E-0.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CteH-i1E.js";import"./grid-item-B8xJCE0J.js";import"./flex-DmJewv6f.js";import"./heading-D4a_pOa-.js";import"./index-B0M5u45h.js";import"./index-L8BvBXnT.js";import"./index-DlPqCcPe.js";var W,z,O,T,M;const ze=Se({base:{"--error-border-color":"colors.border.error"},variants:{ghost:{...(W=m.variants)==null?void 0:W.ghost,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},outline:{...(z=m.variants)==null?void 0:z.outline,_invalid:{borderColor:"{error-border-color}"}},solid:{...(O=m.variants)==null?void 0:O.solid,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},subtle:{...(T=m.variants)==null?void 0:T.subtle,_invalid:{borderColor:"{error-border-color}",borderWidth:"1px"}},surface:{...(M=m.variants)==null?void 0:M.surface,_invalid:{borderColor:"{error-border-color}"}}},defaultProps:{variant:"solid"}}),Oe=(n={})=>{const{interactive:r,clickableProps:t,getInputProps:s}=Ie(n),a=R.useCallback(p=>({...t,"aria-disabled":ve(!r),tabIndex:r?t.tabIndex:-1,...p}),[t,r]);return{clickableProps:t,getButtonProps:a,getInputProps:s}},{withContext:Te}=Ce("file-button",ze),o=Te(({as:n=U,children:r,errorBorderColor:t,...s})=>{const{getButtonProps:a,getInputProps:p}=Oe(s),k=We({errorBorderColor:t});return e.jsxs(e.Fragment,{children:[e.jsx(Re,{children:e.jsx(Ue.input,{...p()})}),e.jsx(n,{...k,...a(),children:r})]})})(),$e={component:o,title:"Components / FileButton"},f=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Upload"}),e.jsx(o,{as:c,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"})})]}),x=()=>e.jsx(ge,{columns:["solid","subtle","surface","outline","ghost"],rows:xe,children:(n,r,t)=>e.jsx(o,{colorScheme:r,variant:n,children:"FileButton"},t)}),h=()=>e.jsx(ge,{columns:["xs","sm","md","lg","xl"],rows:xe,children:(n,r,t)=>e.jsx(o,{colorScheme:r,size:n,children:"FileButton"},t)}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{multiple:!0,children:"Upload"}),e.jsx(o,{as:c,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(o,{as:c,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(d,{fontSize:"2xl"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,disabled:!0,children:P(n)},r)})}),e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:c,variant:n,"aria-label":"Upload file",disabled:!0,icon:e.jsx(d,{fontSize:"2xl"})},r)})}),e.jsx(y,{disabled:!0,helperMessage:"Please select a file to upload.",label:"Upload file",children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,readOnly:!0,children:P(n)},r)})}),e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:c,variant:n,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),readOnly:!0},r)})}),e.jsx(y,{helperMessage:"Please select a file to upload.",label:"Upload file",readOnly:!0,children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{variant:n,invalid:!0,children:P(n)},r)})}),e.jsx(i,{gap:"md",children:e.jsx(u,{each:["solid","subtle","surface","outline","ghost"],children:(n,r)=>e.jsx(o,{as:c,variant:n,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),invalid:!0},r)})}),e.jsx(y,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{justifySelf:"flex-start",children:"Upload"})})]}),S=()=>e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,children:"Upload"}),v=()=>{const[n,r]=R.useState(void 0),t=R.useRef(null),s=()=>{var a;r(void 0),(a=t.current)==null||a.call(t)};return e.jsxs(he,{children:[e.jsxs(ye,{children:["files: ",(n==null?void 0:n.length)??0]}),e.jsxs(be,{children:[e.jsx(o,{multiple:!0,resetRef:t,onChange:r,children:"Upload"}),e.jsx(U,{onClick:s,children:"Reset"})]})]})},C=()=>{var I;const n=R.useRef(null),{control:r,formState:{errors:t},handleSubmit:s,setValue:a}=ke(),p=()=>{var l;a("fileButton",null),(l=n.current)==null||l.call(n)},k=l=>console.log("submit:",l);return e.jsxs(he,{as:"form",onSubmit:s(k),children:[e.jsx(y,{errorMessage:(I=t.fileButton)==null?void 0:I.message,invalid:!!t.fileButton,label:"Files",children:e.jsx(Pe,{name:"fileButton",control:r,render:({field:{ref:l,name:Fe,onBlur:Be,onChange:je}})=>e.jsxs(be,{children:[e.jsx(o,{ref:l,name:Fe,onBlur:Be,onChange:je,resetRef:n,children:"Upload"}),e.jsx(U,{onClick:p,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(U,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var H,V,_;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var w,E,q;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline", "ghost"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} variant={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...(q=(E=x.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,A,L;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileButton key={key} colorScheme={row} size={column}>
            FileButton
          </FileButton>;
    }}
    </PropsTable>;
}`,...(L=(A=h.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var Q,Z,G;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />
    </>;
}`,...(G=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,K,N;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />
    </>;
}`,...(N=(K=b.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var X,Y,$;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...($=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ne,re;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(re=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,te,ae;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,le,ie;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,ce,de;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,fe;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const en=["Basic","Variant","Size","Multiple","Accept","Disabled","ReadOnly","Invalid","BorderColor","Reset","ReactHookForm"];export{b as Accept,f as Basic,S as BorderColor,F as Disabled,j as Invalid,g as Multiple,C as ReactHookForm,B as ReadOnly,v as Reset,h as Size,x as Variant,en as __namedExportsOrder,$e as default};
