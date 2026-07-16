import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{P as r,l as i,pt as a,qn as o,r as s,t as c,tr as l}from"./core-CBrv4WaS.js";import{t as u}from"./jsx-runtime-BBQGix-2.js";import{gn as d,i as f,t as p}from"./icon-DoIn8h7E.js";import{n as ee,t as te}from"./portal-BYIJ-m3H.js";import{t as m}from"./text-ljAYVXXn.js";import{t as ne}from"./text-DGi1MGSU.js";import{t as h}from"./center-Dtf2N07o.js";import{t as re}from"./center-DQ9zZX4u.js";import{d as ie,t as ae}from"./button-DWoK_lmA.js";import{Au as oe,Ft as se,Ia as ce,It as le,Ja as ue,Ka as de,La as g,Ou as fe,Su as _,Tn as v,Ya as pe,bu as y,fd as me,gd as b,qa as he,wn as ge,wu as x,yu as S}from"./iframe-D5Y3ROF5.js";import{n as C,t as w}from"./storybook-DB922BIm.js";import{n as _e,r as ve,t as ye}from"./index.esm-BGVpNNgE.js";var T,E,D,be,xe,O,k,A,j,Se=t((()=>{T=e(n(),1),c(),S(),te(),pe(),de(),E=u(),D=({name:e})=>e,{PropsContext:be,usePropsContext:xe,withContext:O,withProvider:k}=s(`file-input`,ue),A=k(({children:e,component:t,errorBorderColor:n,focusBorderColor:i,format:a=D,placeholder:o,separator:s=`,`,...c})=>{let l=oe({errorBorderColor:n,focusBorderColor:i}),{values:u,getFieldProps:d,getInputProps:f}=he(c),p=(0,T.useMemo)(()=>u?.length?e?e(u):u.map((e,n)=>{let r=u.length===n+1;if(t){let r=t({index:n,value:e});return(0,T.isValidElement)(r)?(0,T.cloneElement)(r,{key:n}):r}else return(0,E.jsxs)(j,{children:[a(e,n),r?null:s]},n)}):(0,E.jsx)(r.span,{overflow:`hidden`,whiteSpace:`nowrap`,children:o}),[e,a,o,s,t,u]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(ee,{children:(0,E.jsx)(r.input,{...f()})}),(0,E.jsx)(r.div,{...l,...d(),children:p})]})},`root`)(e=>i(fe(),e)()),j=O(`span`,`tag`)()})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{M=e(n(),1),_e(),w(),a(),ae(),re(),me(),ce(),p(),S(),ge(),se(),ne(),Se(),N=u(),P={component:A,title:`Components / FileInput`},F=()=>(0,N.jsx)(A,{placeholder:`placeholder`}),I=()=>(0,N.jsx)(C,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:l,children:(e,t,n)=>(0,N.jsx)(A,{colorScheme:t,variant:e,placeholder:o(e)},n)}),L=()=>(0,N.jsx)(C,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,N.jsx)(A,{size:e,variant:t,placeholder:`Size (${e})`},n)}),R=()=>(0,N.jsx)(A,{multiple:!0,placeholder:`multiple`}),z=()=>(0,N.jsx)(A,{accept:`image/png,image/jpeg`,placeholder:`only png, jpeg`}),B=()=>(0,N.jsx)(A,{multiple:!0,placeholder:`multiple`,separator:`;`}),V=()=>(0,N.jsx)(A,{component:({value:{name:e}})=>(0,N.jsx)(le,{children:e}),gapY:`xs`,multiple:!0,placeholder:`multiple`}),H=()=>(0,N.jsx)(A,{format:({name:e})=>e.substring(0,e.indexOf(`.`)),multiple:!0,placeholder:`multiple`}),U=()=>(0,N.jsx)(A,{"aria-label":`Files`,multiple:!0,children:e=>(0,N.jsxs)(m,{children:[`Selected: `,e?.length??0]})}),W=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(A,{variant:e,disabled:!0,placeholder:o(e)},t)}),(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(y,{variant:e,disabled:!0,children:[(0,N.jsx)(x,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:o(e)})]},t)}),(0,N.jsx)(b,{disabled:!0,label:`Upload file`,children:(0,N.jsx)(A,{placeholder:`your file`})})]}),G=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(A,{variant:e,placeholder:o(e),readOnly:!0},t)}),(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(y,{variant:e,readOnly:!0,children:[(0,N.jsx)(x,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:o(e)})]},t)}),(0,N.jsx)(b,{label:`Upload file`,readOnly:!0,children:(0,N.jsx)(A,{placeholder:`your file`})})]}),K=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsx)(A,{variant:e,invalid:!0,placeholder:o(e)},t)}),(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(y,{variant:e,invalid:!0,children:[(0,N.jsx)(x,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:o(e)})]},t)}),(0,N.jsx)(b,{errorMessage:`File is required.`,invalid:!0,label:`Upload file`,children:(0,N.jsx)(A,{placeholder:`your file`})})]}),q=()=>(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(y,{variant:e,children:[(0,N.jsx)(x,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:`Please upload file`})]},t)}),J=()=>(0,N.jsx)(g,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,N.jsxs)(y,{variant:e,children:[(0,N.jsx)(_,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:`Please upload file`})]},t)}),Y=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(A,{placeholder:`Default border color`}),(0,N.jsx)(A,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,N.jsxs)(y,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,N.jsx)(_,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:`Custom border color`})]}),(0,N.jsx)(A,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,N.jsxs)(y,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,N.jsx)(x,{children:(0,N.jsx)(d,{})}),(0,N.jsx)(A,{placeholder:`Custom border color`})]})]}),X=()=>{let[e,t]=(0,M.useState)(void 0),n=(0,M.useRef)(null);return(0,N.jsxs)(v,{children:[(0,N.jsxs)(m,{children:[`files: `,e?.length??0]}),(0,N.jsxs)(y,{children:[(0,N.jsx)(A,{multiple:!0,placeholder:`placeholder`,resetRef:n,value:e,onChange:t}),e?.length?(0,N.jsx)(_,{clickable:!0,onClick:()=>{t(void 0),n.current?.()},children:(0,N.jsx)(h,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(f,{fontSize:`xl`})})}):null]})]})},Z=()=>{let[e,t]=(0,M.useState)([]);return(0,N.jsxs)(v,{children:[(0,N.jsxs)(m,{children:[`files: `,e?.length]}),(0,N.jsx)(A,{placeholder:`placeholder`,value:e,onChange:t})]})},Q=()=>{let e=(0,M.useRef)(null),{control:t,formState:{errors:n},handleSubmit:r,setValue:i}=ve(),a=()=>{i(`fileInput`,void 0),e.current?.()};return(0,N.jsxs)(v,{as:`form`,onSubmit:r(e=>console.log(`submit:`,e)),children:[(0,N.jsx)(b,{errorMessage:n.fileInput?.message,invalid:!!n.fileInput,label:`Files`,children:(0,N.jsx)(ye,{name:`fileInput`,control:t,render:({field:t})=>(0,N.jsxs)(y,{children:[(0,N.jsx)(A,{multiple:!0,...t,resetRef:e}),t.value?.length?(0,N.jsx)(_,{clickable:!0,onClick:a,children:(0,N.jsx)(h,{as:`button`,focusVisibleRing:`outside`,p:`0.5`,rounded:`xs`,children:(0,N.jsx)(f,{fontSize:`xl`})})}):null]}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,N.jsx)(ie,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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