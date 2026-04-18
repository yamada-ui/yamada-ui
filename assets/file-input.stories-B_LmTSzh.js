import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$c as n,Bt as r,Di as i,Ei as a,El as o,Id as s,Lt as c,Pd as l,Pf as u,Yc as d,am as f,au as p,gc as m,gl as h,hc as g,mc as _,mm as v,nt as y,nu as b,ou as x,pc as S,qm as C,rt as w,ru as T,sm as E,vi as D,yi as O,ym as k}from"./iframe-CHoZGzMw.js";import{n as A,t as j}from"./storybook-D7iTf7Rb.js";import{n as ee,r as te,t as ne}from"./index.esm-44TicO4k.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{j(),M=t(C(),1),ee(),f(),h(),b(),d(),D(),l(),S(),c(),y(),p(),i(),N=E(),P={component:a,title:`Components / FileInput`},F=()=>(0,N.jsx)(a,{placeholder:`placeholder`}),I=()=>(0,N.jsx)(A,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:k,children:(e,t,n)=>(0,N.jsx)(a,{colorScheme:t,variant:e,placeholder:v(e)},n)}),L=()=>(0,N.jsx)(A,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,N.jsx)(a,{size:e,variant:t,placeholder:`Size (${e})`},n)}),R=()=>(0,N.jsx)(a,{multiple:!0,placeholder:`multiple`}),z=()=>(0,N.jsx)(a,{accept:`image/png,image/jpeg`,placeholder:`only png, jpeg`}),B=()=>(0,N.jsx)(a,{multiple:!0,placeholder:`multiple`,separator:`;`}),V=()=>(0,N.jsx)(a,{component:({value:{name:e}})=>(0,N.jsx)(w,{children:e}),gapY:`xs`,multiple:!0,placeholder:`multiple`}),H=()=>(0,N.jsx)(a,{format:({name:e})=>e.substring(0,e.indexOf(`.`)),multiple:!0,placeholder:`multiple`}),U=()=>(0,N.jsx)(a,{"aria-label":`Files`,multiple:!0,children:e=>(0,N.jsxs)(x,{children:[`Selected: `,e?.length??0]})}),W=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(a,{variant:e,disabled:!0,placeholder:v(e)},t)}),(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(_,{variant:e,disabled:!0,children:[(0,N.jsx)(m,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:v(e)})]},t)}),(0,N.jsx)(n,{disabled:!0,label:`Upload file`,children:(0,N.jsx)(a,{placeholder:`your file`})})]}),G=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(a,{variant:e,placeholder:v(e),readOnly:!0},t)}),(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(_,{variant:e,readOnly:!0,children:[(0,N.jsx)(m,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:v(e)})]},t)}),(0,N.jsx)(n,{label:`Upload file`,readOnly:!0,children:(0,N.jsx)(a,{placeholder:`your file`})})]}),K=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(a,{variant:e,invalid:!0,placeholder:v(e)},t)}),(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(_,{variant:e,invalid:!0,children:[(0,N.jsx)(m,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:v(e)})]},t)}),(0,N.jsx)(n,{errorMessage:`File is required.`,invalid:!0,label:`Upload file`,children:(0,N.jsx)(a,{placeholder:`your file`})})]}),q=()=>(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(_,{variant:e,children:[(0,N.jsx)(m,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:`Please upload file`})]},t)}),J=()=>(0,N.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(_,{variant:e,children:[(0,N.jsx)(g,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:`Please upload file`})]},t)}),Y=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a,{placeholder:`Default border color`}),(0,N.jsx)(a,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,N.jsxs)(_,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,N.jsx)(g,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:`Custom border color`})]}),(0,N.jsx)(a,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,N.jsxs)(_,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,N.jsx)(m,{children:(0,N.jsx)(u,{})}),(0,N.jsx)(a,{placeholder:`Custom border color`})]})]}),X=()=>{let[e,t]=(0,M.useState)(void 0),n=(0,M.useRef)(null);return(0,N.jsxs)(r,{children:[(0,N.jsxs)(x,{children:[`files: `,e?.length??0]}),(0,N.jsxs)(_,{children:[(0,N.jsx)(a,{multiple:!0,placeholder:`placeholder`,resetRef:n,value:e,onChange:t}),e?.length?(0,N.jsx)(g,{clickable:!0,onClick:()=>{t(void 0),n.current?.()},children:(0,N.jsx)(T,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(s,{fontSize:`xl`})})}):null]})]})},Z=()=>{let[e,t]=(0,M.useState)([]);return(0,N.jsxs)(r,{children:[(0,N.jsxs)(x,{children:[`files: `,e?.length]}),(0,N.jsx)(a,{placeholder:`placeholder`,value:e,onChange:t})]})},Q=()=>{let e=(0,M.useRef)(null),{control:t,formState:{errors:i},handleSubmit:c,setValue:l}=te(),u=()=>{l(`fileInput`,void 0),e.current?.()};return(0,N.jsxs)(r,{as:`form`,onSubmit:c(e=>console.log(`submit:`,e)),children:[(0,N.jsx)(n,{errorMessage:i.fileInput?.message,invalid:!!i.fileInput,label:`Files`,children:(0,N.jsx)(ne,{name:`fileInput`,control:t,render:({field:t})=>(0,N.jsxs)(_,{children:[(0,N.jsx)(a,{multiple:!0,...t,resetRef:e}),t.value?.length?(0,N.jsx)(g,{clickable:!0,onClick:u,children:(0,N.jsx)(T,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(s,{fontSize:`xl`})})}):null]}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,N.jsx)(o,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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