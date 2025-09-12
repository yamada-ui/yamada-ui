import{n as K,I as Q,d as ee,g as re,r as i,j as e,s as H,ar as ne,C as oe,J as u,T as _,V as U,N as L}from"./iframe-Bn8cMbTR.js";import{P as N}from"./props-table-BxRkBYtX.js";import{u as te,C as le}from"./index.esm-RKjsK1dL.js";import{i as l,a as se,u as ae}from"./input-B_qih2xR.js";import{u as ie}from"./use-file-input-CUgd_god.js";import{u as ue}from"./use-input-border-Ce8BP_Cj.js";import{T as ce}from"./tag-uNNJf31p.js";import{F as a}from"./for-DbXOaV0m.js";import{c as de}from"./createLucideIcon-C--YS6xs.js";import{B as pe}from"./button-BuVkzRhm.js";import{I as s,b as f,a as A}from"./input-group-5VswQsqo.js";import{F as M}from"./use-field-props-DWTQjhl6.js";import{X as Y}from"./x-icon-CUNqek_Z.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DGlXmtIK.js";import"./grid-item-UPArcUwJ.js";import"./flex-MN_M9PAs.js";import"./heading-Dcpj3_ac.js";import"./index-C5LqjgOW.js";import"./index-D0aT385A.js";import"./index-DxOQ1YS9.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";import"./group-B5LsnOu4.js";import"./index-BcSg2jSG.js";import"./use-breakpoint-eUizr5Li.js";import"./use-breakpoint-value-ItGV-DAn.js";import"./use-color-mode-value-bM_ELEgZ.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],he=de("file",me),c=K(Q)({as:he}),fe=ee({base:{root:{...l.base,alignItems:"center",cursor:"pointer",display:"flex",flexWrap:"wrap",gapX:"1",lineHeight:"1",_readOnly:{layerStyle:"readOnly"}},tag:{display:"inline-block",overflow:"hidden",whiteSpace:"nowrap"}},variants:{filled:{root:l.variants?.filled},flushed:{root:{...l.variants?.flushed,...se()}},outline:{root:l.variants?.outline},plain:{root:l.variants?.plain}},sizes:{xs:{root:{py:"{--space-y}",...l.sizes?.xs}},sm:{root:{py:"{--space-y}",...l.sizes?.sm}},md:{root:{py:"{--space-y}",...l.sizes?.md}},lg:{root:{py:"{--space-y}",...l.sizes?.lg}},xl:{root:{py:"{--space-y}",...l.sizes?.xl}},"2xl":{root:{py:"{--space-y}",...l.sizes?.["2xl"]}}},defaultProps:{size:"md",variant:"outline"}}),xe=({name:r})=>r,{withContext:ge,withProvider:Ie}=re("file-input",fe),o=Ie(({children:r,component:n,errorBorderColor:t,focusBorderColor:p,format:x=xe,placeholder:g,separator:I=",",...q})=>{const d=ue({errorBorderColor:t,focusBorderColor:p}),{values:m,getFieldProps:$,getInputProps:J}=ie(q),W=i.useMemo(()=>m?.length?r?r(m):m.map((X,h)=>{const Z=m.length===h+1;if(n){const D=n({index:h,value:X});return i.isValidElement(D)?i.cloneElement(D,{key:h}):D}else return e.jsxs(je,{children:[x(X,h),Z?null:I]},h)}):e.jsx(H.span,{overflow:"hidden",whiteSpace:"nowrap",children:g}),[r,x,g,I,n,m]);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:e.jsx(H.input,{...J()})}),e.jsx(H.div,{...d,...$(),children:W})]})},"root")(r=>({...ae(),...r})),je=ge("span","tag")(),Je={component:o,title:"Components / FileInput"},j=()=>e.jsx(o,{placeholder:"placeholder"}),F=()=>e.jsx(N,{variant:"stack",columns:["outline","filled","flushed"],rows:oe,children:(r,n,t)=>e.jsx(o,{colorScheme:n,variant:r,placeholder:u(r)},t)}),v=()=>e.jsx(N,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,t)=>e.jsx(o,{size:r,variant:n,placeholder:`Size (${r})`},t)}),S=()=>e.jsx(o,{multiple:!0,placeholder:"multiple"}),C=()=>e.jsx(o,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),b=()=>e.jsx(o,{multiple:!0,placeholder:"multiple",separator:";"}),R=()=>e.jsx(o,{component:({value:{name:r}})=>e.jsx(ce,{children:r}),gapY:"xs",multiple:!0,placeholder:"multiple"}),y=()=>e.jsx(o,{format:({name:r})=>r.substring(0,r.indexOf(".")),multiple:!0,placeholder:"multiple"}),k=()=>e.jsx(o,{multiple:!0,children:r=>e.jsxs(_,{children:["Selected: ",r?.length??0]})}),G=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,disabled:!0,placeholder:u(r)},n)}),e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,disabled:!0,children:[e.jsx(f,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:u(r)})]},n)}),e.jsx(M,{disabled:!0,label:"Upload file",children:e.jsx(o,{placeholder:"your file"})})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,placeholder:u(r),readOnly:!0},n)}),e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,readOnly:!0,children:[e.jsx(f,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:u(r)})]},n)}),e.jsx(M,{label:"Upload file",readOnly:!0,children:e.jsx(o,{placeholder:"your file"})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,invalid:!0,placeholder:u(r)},n)}),e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,invalid:!0,children:[e.jsx(f,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:u(r)})]},n)}),e.jsx(M,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{placeholder:"your file"})})]}),E=()=>e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,children:[e.jsx(f,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:"Please upload file"})]},n)}),z=()=>e.jsx(a,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(s,{variant:r,children:[e.jsx(A,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:"Please upload file"})]},n)}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(s,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(A,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:"Custom border color"})]}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(s,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(f,{children:e.jsx(c,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),P=()=>{const[r,n]=i.useState(void 0),t=i.useRef(null),p=()=>{n(void 0),t.current?.()};return e.jsxs(U,{children:[e.jsxs(_,{children:["files: ",r?.length??0]}),e.jsxs(s,{children:[e.jsx(o,{multiple:!0,placeholder:"placeholder",resetRef:t,value:r,onChange:n}),r?.length?e.jsx(A,{clickable:!0,onClick:p,children:e.jsx(L,{as:"button",focusVisibleRing:"outside",p:"0.5",rounded:"xs",children:e.jsx(Y,{fontSize:"xl"})})}):null]})]})},B=()=>{const[r,n]=i.useState([]);return e.jsxs(U,{children:[e.jsxs(_,{children:["files: ",r?.length]}),e.jsx(o,{placeholder:"placeholder",value:r,onChange:n})]})},O=()=>{const r=i.useRef(null),{control:n,formState:{errors:t},handleSubmit:p,setValue:x,watch:g}=te(),I=()=>{x("fileInput",void 0),r.current?.()},q=d=>console.log("submit:",d);return console.log("watch:",g()),e.jsxs(U,{as:"form",onSubmit:p(q),children:[e.jsx(M,{errorMessage:t.fileInput?.message,invalid:!!t.fileInput,label:"Files",children:e.jsx(le,{name:"fileInput",control:n,render:({field:d})=>e.jsxs(s,{children:[e.jsx(o,{multiple:!0,...d,resetRef:r}),d.value?.length?e.jsx(A,{clickable:!0,onClick:I,children:e.jsx(L,{as:"button",focusVisibleRing:"outside",p:"0.5",rounded:"xs",children:e.jsx(Y,{fontSize:"xl"})})}):null]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...b.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
  return <FileInput multiple>
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <FileIcon />
          </InputGroup.Addon>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <FileIcon />
          </InputGroup.Element>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>([]);
  return <VStack>
      <Text>files: {value?.length}</Text>

      <FileInput placeholder="placeholder" value={value} onChange={onChange} />
    </VStack>;
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
    setValue,
    watch
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileInput", undefined);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...O.parameters?.docs?.source}}};const We=["Basic","Variant","Size","Multiple","Accept","Separator","Component","Format","Children","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Reset","CustomControl","ReactHookForm"];export{C as Accept,E as Addon,j as Basic,V as BorderColor,k as Children,R as Component,B as CustomControl,G as Disabled,z as Element,y as Format,w as Invalid,S as Multiple,O as ReactHookForm,T as ReadOnly,P as Reset,b as Separator,v as Size,F as Variant,We as __namedExportsOrder,Je as default};
