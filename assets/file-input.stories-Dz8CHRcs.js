import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Am as n,Cu as r,Dm as i,Dv as a,Eg as o,Fa as s,Ff as c,Ga as l,If as u,Lv as d,Nt as ee,Pa as f,Pd as p,Pt as m,Rf as h,Sn as g,Tn as _,Tu as v,Uv as y,Wa as b,bu as x,by as S,md as C,qd as w,ud as T,wv as E,xu as D,zf as O}from"./iframe-B_JZPEyf.js";import{n as k,t as te}from"./storybook-DyX9vPgK.js";import{n as ne,r as A,t as j}from"./index.esm-DfZDzIpk.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{M=e(S(),1),ne(),te(),E(),p(),c(),T(),f(),i(),x(),g(),ee(),h(),l(),N=a(),P={component:b,title:`Components / FileInput`},F=()=>(0,N.jsx)(b,{placeholder:`placeholder`}),I=()=>(0,N.jsx)(k,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:y,children:(e,t,n)=>(0,N.jsx)(b,{colorScheme:t,variant:e,placeholder:d(e)},n)}),L=()=>(0,N.jsx)(k,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,N.jsx)(b,{size:e,variant:t,placeholder:`Size (${e})`},n)}),R=()=>(0,N.jsx)(b,{multiple:!0,placeholder:`multiple`}),z=()=>(0,N.jsx)(b,{accept:`image/png,image/jpeg`,placeholder:`only png, jpeg`}),B=()=>(0,N.jsx)(b,{multiple:!0,placeholder:`multiple`,separator:`;`}),V=()=>(0,N.jsx)(b,{component:({value:{name:e}})=>(0,N.jsx)(m,{children:e}),gapY:`xs`,multiple:!0,placeholder:`multiple`}),H=()=>(0,N.jsx)(b,{format:({name:e})=>e.substring(0,e.indexOf(`.`)),multiple:!0,placeholder:`multiple`}),U=()=>(0,N.jsx)(b,{"aria-label":`Files`,multiple:!0,children:e=>(0,N.jsxs)(O,{children:[`Selected: `,e?.length??0]})}),W=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(b,{variant:e,disabled:!0,placeholder:d(e)},t)}),(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,disabled:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:d(e)})]},t)}),(0,N.jsx)(C,{disabled:!0,label:`Upload file`,children:(0,N.jsx)(b,{placeholder:`your file`})})]}),G=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(b,{variant:e,placeholder:d(e),readOnly:!0},t)}),(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,readOnly:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:d(e)})]},t)}),(0,N.jsx)(C,{label:`Upload file`,readOnly:!0,children:(0,N.jsx)(b,{placeholder:`your file`})})]}),K=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(b,{variant:e,invalid:!0,placeholder:d(e)},t)}),(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,invalid:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:d(e)})]},t)}),(0,N.jsx)(C,{errorMessage:`File is required.`,invalid:!0,label:`Upload file`,children:(0,N.jsx)(b,{placeholder:`your file`})})]}),q=()=>(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,children:[(0,N.jsx)(v,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:`Please upload file`})]},t)}),J=()=>(0,N.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(D,{variant:e,children:[(0,N.jsx)(r,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:`Please upload file`})]},t)}),Y=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(b,{placeholder:`Default border color`}),(0,N.jsx)(b,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,N.jsxs)(D,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,N.jsx)(r,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:`Custom border color`})]}),(0,N.jsx)(b,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,N.jsxs)(D,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(o,{})}),(0,N.jsx)(b,{placeholder:`Custom border color`})]})]}),X=()=>{let[e,t]=(0,M.useState)(void 0),i=(0,M.useRef)(null);return(0,N.jsxs)(_,{children:[(0,N.jsxs)(O,{children:[`files: `,e?.length??0]}),(0,N.jsxs)(D,{children:[(0,N.jsx)(b,{multiple:!0,placeholder:`placeholder`,resetRef:i,value:e,onChange:t}),e?.length?(0,N.jsx)(r,{clickable:!0,onClick:()=>{t(void 0),i.current?.()},children:(0,N.jsx)(u,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(n,{fontSize:`xl`})})}):null]})]})},Z=()=>{let[e,t]=(0,M.useState)([]);return(0,N.jsxs)(_,{children:[(0,N.jsxs)(O,{children:[`files: `,e?.length]}),(0,N.jsx)(b,{placeholder:`placeholder`,value:e,onChange:t})]})},Q=()=>{let e=(0,M.useRef)(null),{control:t,formState:{errors:i},handleSubmit:a,setValue:o}=A(),s=()=>{o(`fileInput`,void 0),e.current?.()};return(0,N.jsxs)(_,{as:`form`,onSubmit:a(e=>console.log(`submit:`,e)),children:[(0,N.jsx)(C,{errorMessage:i.fileInput?.message,invalid:!!i.fileInput,label:`Files`,children:(0,N.jsx)(j,{name:`fileInput`,control:t,render:({field:t})=>(0,N.jsxs)(D,{children:[(0,N.jsx)(b,{multiple:!0,...t,resetRef:e}),t.value?.length?(0,N.jsx)(r,{clickable:!0,onClick:s,children:(0,N.jsx)(u,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(n,{fontSize:`xl`})})}):null]}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,N.jsx)(w,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <FileInput placeholder="placeholder" />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <FileInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <FileInput component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} gapY="xs" multiple placeholder="multiple" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <FileInput format={({
    name
  }) => name.substring(0, name.indexOf("."))} multiple placeholder="multiple" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <FileInput aria-label="Files" multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <FileIcon />
          </InputGroup.Addon>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <FileIcon />
          </InputGroup.Element>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>([]);
  return <VStack>
      <Text>files: {value?.length}</Text>

      <FileInput placeholder="placeholder" value={value} onChange={onChange} />
    </VStack>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$=[`Basic`,`Variant`,`Size`,`Multiple`,`Accept`,`Separator`,`Component`,`Format`,`Children`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Reset`,`CustomControl`,`ReactHookForm`]}))();export{z as Accept,q as Addon,F as Basic,Y as BorderColor,U as Children,V as Component,Z as CustomControl,W as Disabled,J as Element,H as Format,K as Invalid,R as Multiple,Q as ReactHookForm,G as ReadOnly,X as Reset,B as Separator,L as Size,I as Variant,$ as __namedExportsOrder,P as default};