import{n as K,o as Z,I as ee,d as re,r as i,j as e,s as _,av as ne,l as oe,T as q,V as H,P as u,W as X,X as L,Q as le,C as te}from"./iframe-BYxWTAfU.js";import{P as W}from"./props-table-Bo4bQ_jN.js";import{u as se,C as ae}from"./index.esm-BGvJ6BUb.js";import{i as t,a as ie,u as ue}from"./input-C1j0W-rS.js";import{u as de}from"./use-file-input-DGZrckDN.js";import{u as ce}from"./use-input-border-DlsVUduD.js";import{F as a}from"./for-CEjldjdR.js";import{T as pe}from"./tag-CGpNTmlj.js";import{I as s,b as f,a as B}from"./input-group-D8FcFMh6.js";import{F as M}from"./use-field-props-DU62N9XW.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./index-zzj0BvLY.js";import"./index-YpudMcFq.js";import"./index-ChSCjdDN.js";import"./group-Dyq4koHR.js";import"./index-sjTZ4rnq.js";import"./use-breakpoint-Co1erXvx.js";import"./use-breakpoint-value-DJioUp1E.js";import"./use-color-mode-value-DaTIAf89.js";const me=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],he=K("file",me),d=Z(ee)({as:he}),fe=re({base:{root:{...t.base,alignItems:"center",cursor:"pointer",display:"flex",flexWrap:"wrap",gapX:"1",lineHeight:"1",_readOnly:{layerStyle:"readOnly"}},tag:{display:"inline-block",overflow:"hidden",whiteSpace:"nowrap"}},variants:{filled:{root:t.variants?.filled},flushed:{root:{...t.variants?.flushed,...ie()}},outline:{root:t.variants?.outline},plain:{root:t.variants?.plain}},sizes:{xs:{root:{py:"{--space-y}",...t.sizes?.xs}},sm:{root:{py:"{--space-y}",...t.sizes?.sm}},md:{root:{py:"{--space-y}",...t.sizes?.md}},lg:{root:{py:"{--space-y}",...t.sizes?.lg}},xl:{root:{py:"{--space-y}",...t.sizes?.xl}},"2xl":{root:{py:"{--space-y}",...t.sizes?.["2xl"]}}},defaultProps:{size:"md",variant:"outline"}}),xe=({name:r})=>r,{withContext:Ie,withProvider:ge}=oe("file-input",fe),o=ge(({children:r,component:n,errorBorderColor:l,focusBorderColor:p,format:x=xe,placeholder:I,separator:g=",",...c})=>{const Y=ce({errorBorderColor:l,focusBorderColor:p}),{values:m,getFieldProps:$,getInputProps:N}=de(c),Q=i.useMemo(()=>m?.length?r?r(m):m.map((U,h)=>{const J=m.length===h+1;if(n){const D=n({index:h,value:U});return i.isValidElement(D)?i.cloneElement(D,{key:h}):D}else return e.jsxs(je,{children:[x(U,h),J?null:g]},h)}):e.jsx(_.span,{overflow:"hidden",whiteSpace:"nowrap",children:I}),[r,x,I,g,n,m]);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:e.jsx(_.input,{...N()})}),e.jsx(_.div,{...Y,...$(),children:Q})]})},"root")(r=>({...ue(),...r})),je=Ie("span","tag")(),Ue={component:o,title:"Components / FileInput"},j=()=>e.jsx(o,{placeholder:"placeholder"}),F=()=>e.jsx(W,{variant:"stack",columns:["outline","filled","flushed"],rows:te,children:(r,n,l)=>e.jsx(o,{colorScheme:n,variant:r,placeholder:u(r)},l)}),v=()=>e.jsx(W,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,l)=>e.jsx(o,{size:r,variant:n,placeholder:`Size (${r})`},l)}),S=()=>e.jsx(o,{multiple:!0,placeholder:"multiple"}),b=()=>e.jsx(o,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),C=()=>e.jsx(o,{multiple:!0,placeholder:"multiple",separator:";"}),R=()=>e.jsx(o,{component:({value:{name:r}})=>e.jsx(pe,{children:r}),gapY:"xs",multiple:!0,placeholder:"multiple"}),y=()=>e.jsx(o,{format:({name:r})=>r.substring(0,r.indexOf(".")),multiple:!0,placeholder:"multiple"}),k=()=>e.jsx(o,{"aria-label":"Files",multiple:!0,children:r=>e.jsxs(q,{children:["Selected: ",r?.length??0]})}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,disabled:!0,placeholder:u(r)},n)}),e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,disabled:!0,children:[e.jsx(f,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:u(r)})]},n)}),e.jsx(M,{disabled:!0,label:"Upload file",children:e.jsx(o,{placeholder:"your file"})})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,placeholder:u(r),readOnly:!0},n)}),e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,readOnly:!0,children:[e.jsx(f,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:u(r)})]},n)}),e.jsx(M,{label:"Upload file",readOnly:!0,children:e.jsx(o,{placeholder:"your file"})})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,invalid:!0,placeholder:u(r)},n)}),e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,invalid:!0,children:[e.jsx(f,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:u(r)})]},n)}),e.jsx(M,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{placeholder:"your file"})})]}),E=()=>e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,children:[e.jsx(f,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:"Please upload file"})]},n)}),P=()=>e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,children:[e.jsx(B,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:"Please upload file"})]},n)}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(s,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(B,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:"Custom border color"})]}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(s,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(f,{children:e.jsx(d,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),w=()=>{const[r,n]=i.useState(void 0),l=i.useRef(null),p=()=>{n(void 0),l.current?.()};return e.jsxs(H,{children:[e.jsxs(q,{children:["files: ",r?.length??0]}),e.jsxs(s,{children:[e.jsx(o,{multiple:!0,placeholder:"placeholder",resetRef:l,value:r,onChange:n}),r?.length?e.jsx(B,{clickable:!0,onClick:p,children:e.jsx(X,{as:"button",focusVisibleRing:"outside",p:"0.5",rounded:"xs",children:e.jsx(L,{fontSize:"xl"})})}):null]})]})},O=()=>{const[r,n]=i.useState([]);return e.jsxs(H,{children:[e.jsxs(q,{children:["files: ",r?.length]}),e.jsx(o,{placeholder:"placeholder",value:r,onChange:n})]})},A=()=>{const r=i.useRef(null),{control:n,formState:{errors:l},handleSubmit:p,setValue:x}=se(),I=()=>{x("fileInput",void 0),r.current?.()},g=c=>console.log("submit:",c);return e.jsxs(H,{as:"form",onSubmit:p(g),children:[e.jsx(M,{errorMessage:l.fileInput?.message,invalid:!!l.fileInput,label:"Files",children:e.jsx(ae,{name:"fileInput",control:n,render:({field:c})=>e.jsxs(s,{children:[e.jsx(o,{multiple:!0,...c,resetRef:r}),c.value?.length?e.jsx(B,{clickable:!0,onClick:I,children:e.jsx(X,{as:"button",focusVisibleRing:"outside",p:"0.5",rounded:"xs",children:e.jsx(L,{fontSize:"xl"})})}):null]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(le,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <FileInput placeholder="placeholder" />;
}`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <FileInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <FileInput component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} gapY="xs" multiple placeholder="multiple" />;
}`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <FileInput format={({
    name
  }) => name.substring(0, name.indexOf("."))} multiple placeholder="multiple" />;
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <FileInput aria-label="Files" multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...k.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <FileInput key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <FileIcon />
            </InputGroup.Addon>
            <FileInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>;
}`,...G.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <FileInput key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <FileIcon />
            </InputGroup.Addon>
            <FileInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="Upload file" readOnly>
        <FileInput placeholder="your file" />
      </Field.Root>
    </>;
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <FileInput key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <FileIcon />
            </InputGroup.Addon>
            <FileInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>;
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <FileIcon />
          </InputGroup.Addon>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <FileIcon />
          </InputGroup.Element>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="Default border color" />

      <FileInput focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <FileIcon />
        </InputGroup.Element>
        <FileInput placeholder="Custom border color" />
      </InputGroup.Root>

      <FileInput errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <FileIcon />
        </InputGroup.Addon>
        <FileInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <VStack>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup.Root>
        <FileInput multiple placeholder="placeholder" resetRef={resetRef} value={value} onChange={onChange} />

        {value?.length ? <InputGroup.Element clickable onClick={onReset}>
            <Center as="button" focusVisibleRing="outside" p="0.5" rounded="xs">
              <XIcon fontSize="xl" />
            </Center>
          </InputGroup.Element> : null}
      </InputGroup.Root>
    </VStack>;
}`,...w.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>([]);
  return <VStack>
      <Text>files: {value?.length}</Text>

      <FileInput placeholder="placeholder" value={value} onChange={onChange} />
    </VStack>;
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    fileInput: File[] | undefined;
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
    setValue("fileInput", undefined);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.fileInput?.message} invalid={!!errors.fileInput} label="Files">
        <Controller name="fileInput" control={control} render={({
        field
      }) => <InputGroup.Root>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? <InputGroup.Element clickable onClick={onReset}>
                  <Center as="button" focusVisibleRing="outside" p="0.5" rounded="xs">
                    <XIcon fontSize="xl" />
                  </Center>
                </InputGroup.Element> : null}
            </InputGroup.Root>} rules={{
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
}`,...A.parameters?.docs?.source}}};const Xe=["Basic","Variant","Size","Multiple","Accept","Separator","Component","Format","Children","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Reset","CustomControl","ReactHookForm"];export{b as Accept,E as Addon,j as Basic,V as BorderColor,k as Children,R as Component,O as CustomControl,G as Disabled,P as Element,y as Format,z as Invalid,S as Multiple,A as ReactHookForm,T as ReadOnly,w as Reset,C as Separator,v as Size,F as Variant,Xe as __namedExportsOrder,Ue as default};
