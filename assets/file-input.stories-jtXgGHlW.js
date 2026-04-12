import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,Di as r,Ei as i,Lt as a,Nd as o,Wm as s,Zc as c,dc as l,dm as u,eu as d,fc as f,gm as p,im as m,iu as h,jd as g,jf as _,mc as v,ml as y,nm as b,nt as x,pc as S,qc as C,rt as w,ru as T,tu as E,vi as D,wl as O,yi as k}from"./iframe-qqhVEcPq.js";import{n as A,t as ee}from"./storybook-3s6WvMyJ.js";import{n as te,r as ne,t as j}from"./index.esm-CxHoP2A_.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ee(),M=t(s(),1),te(),b(),y(),d(),C(),D(),g(),l(),a(),x(),T(),r(),N=m(),P={component:i,title:`Components / FileInput`},F=()=>(0,N.jsx)(i,{placeholder:`placeholder`}),I=()=>(0,N.jsx)(A,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:p,children:(e,t,n)=>(0,N.jsx)(i,{colorScheme:t,variant:e,placeholder:u(e)},n)}),L=()=>(0,N.jsx)(A,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,N.jsx)(i,{size:e,variant:t,placeholder:`Size (${e})`},n)}),R=()=>(0,N.jsx)(i,{multiple:!0,placeholder:`multiple`}),z=()=>(0,N.jsx)(i,{accept:`image/png,image/jpeg`,placeholder:`only png, jpeg`}),B=()=>(0,N.jsx)(i,{multiple:!0,placeholder:`multiple`,separator:`;`}),V=()=>(0,N.jsx)(i,{component:({value:{name:e}})=>(0,N.jsx)(w,{children:e}),gapY:`xs`,multiple:!0,placeholder:`multiple`}),H=()=>(0,N.jsx)(i,{format:({name:e})=>e.substring(0,e.indexOf(`.`)),multiple:!0,placeholder:`multiple`}),U=()=>(0,N.jsx)(i,{"aria-label":`Files`,multiple:!0,children:e=>(0,N.jsxs)(h,{children:[`Selected: `,e?.length??0]})}),W=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(i,{variant:e,disabled:!0,placeholder:u(e)},t)}),(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(f,{variant:e,disabled:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:u(e)})]},t)}),(0,N.jsx)(c,{disabled:!0,label:`Upload file`,children:(0,N.jsx)(i,{placeholder:`your file`})})]}),G=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(i,{variant:e,placeholder:u(e),readOnly:!0},t)}),(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(f,{variant:e,readOnly:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:u(e)})]},t)}),(0,N.jsx)(c,{label:`Upload file`,readOnly:!0,children:(0,N.jsx)(i,{placeholder:`your file`})})]}),K=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(i,{variant:e,invalid:!0,placeholder:u(e)},t)}),(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(f,{variant:e,invalid:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:u(e)})]},t)}),(0,N.jsx)(c,{errorMessage:`File is required.`,invalid:!0,label:`Upload file`,children:(0,N.jsx)(i,{placeholder:`your file`})})]}),q=()=>(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(f,{variant:e,children:[(0,N.jsx)(v,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:`Please upload file`})]},t)}),J=()=>(0,N.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(f,{variant:e,children:[(0,N.jsx)(S,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:`Please upload file`})]},t)}),Y=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{placeholder:`Default border color`}),(0,N.jsx)(i,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,N.jsxs)(f,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,N.jsx)(S,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:`Custom border color`})]}),(0,N.jsx)(i,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,N.jsxs)(f,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,N.jsx)(v,{children:(0,N.jsx)(_,{})}),(0,N.jsx)(i,{placeholder:`Custom border color`})]})]}),X=()=>{let[e,t]=(0,M.useState)(void 0),r=(0,M.useRef)(null);return(0,N.jsxs)(n,{children:[(0,N.jsxs)(h,{children:[`files: `,e?.length??0]}),(0,N.jsxs)(f,{children:[(0,N.jsx)(i,{multiple:!0,placeholder:`placeholder`,resetRef:r,value:e,onChange:t}),e?.length?(0,N.jsx)(S,{clickable:!0,onClick:()=>{t(void 0),r.current?.()},children:(0,N.jsx)(E,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(o,{fontSize:`xl`})})}):null]})]})},Z=()=>{let[e,t]=(0,M.useState)([]);return(0,N.jsxs)(n,{children:[(0,N.jsxs)(h,{children:[`files: `,e?.length]}),(0,N.jsx)(i,{placeholder:`placeholder`,value:e,onChange:t})]})},Q=()=>{let e=(0,M.useRef)(null),{control:t,formState:{errors:r},handleSubmit:a,setValue:s}=ne(),l=()=>{s(`fileInput`,void 0),e.current?.()};return(0,N.jsxs)(n,{as:`form`,onSubmit:a(e=>console.log(`submit:`,e)),children:[(0,N.jsx)(c,{errorMessage:r.fileInput?.message,invalid:!!r.fileInput,label:`Files`,children:(0,N.jsx)(j,{name:`fileInput`,control:t,render:({field:t})=>(0,N.jsxs)(f,{children:[(0,N.jsx)(i,{multiple:!0,...t,resetRef:e}),t.value?.length?(0,N.jsx)(S,{clickable:!0,onClick:l,children:(0,N.jsx)(E,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(o,{fontSize:`xl`})})}):null]}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,N.jsx)(O,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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