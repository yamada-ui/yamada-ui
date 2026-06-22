import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{At as n,Cu as r,Dm as i,Dv as a,Fa as o,Jh as s,Lv as c,Pa as l,Pd as u,Sn as d,Tn as f,Tu as p,Uv as m,bu as h,by as g,jt as _,md as v,qd as y,ud as b,wv as x,xu as S}from"./iframe-B_RvmxW5.js";import{n as C,t as w}from"./storybook-Dd9zn6pu.js";import{n as T,r as E}from"./index.esm-BXT8MqYy.js";var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;t((()=>{D=e(g(),1),T(),w(),n(),x(),u(),b(),l(),i(),h(),d(),O=a(),k={component:_,title:`Components / Textarea`},A=()=>(0,O.jsx)(_,{placeholder:`basic`}),j=()=>(0,O.jsx)(C,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:m,children:(e,t,n)=>(0,O.jsx)(_,{colorScheme:t,variant:e,placeholder:c(e)},n)}),M=()=>(0,O.jsx)(C,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,O.jsx)(_,{size:e,variant:t,placeholder:`Size (${e})`},n)}),N=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsx)(_,{variant:e,disabled:!0,placeholder:e},t)}),(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(S,{variant:e,disabled:!0,children:[(0,O.jsx)(p,{children:`Email`}),(0,O.jsx)(_,{placeholder:c(e)})]},t)}),(0,O.jsx)(v,{disabled:!0,helperMessage:`We would like to get your feedback.`,label:`Feedback`,children:(0,O.jsx)(_,{variant:`outline`,placeholder:`your feedback`})})]}),P=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsx)(_,{variant:e,placeholder:e,readOnly:!0},t)}),(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(S,{variant:e,readOnly:!0,children:[(0,O.jsx)(p,{children:`Email`}),(0,O.jsx)(_,{placeholder:c(e)})]},t)}),(0,O.jsx)(v,{helperMessage:`We would like to get your feedback.`,label:`Feedback`,readOnly:!0,children:(0,O.jsx)(_,{variant:`outline`,placeholder:`your feedback`})})]}),F=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsx)(_,{variant:e,invalid:!0,placeholder:e},t)}),(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(S,{variant:e,invalid:!0,children:[(0,O.jsx)(p,{children:`Email`}),(0,O.jsx)(_,{placeholder:c(e)})]},t)}),(0,O.jsx)(v,{errorMessage:`Feedback is required.`,invalid:!0,label:`Feedback`,children:(0,O.jsx)(_,{variant:`outline`,placeholder:`your feedback`})})]}),I=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(S,{variant:e,children:[(0,O.jsx)(p,{children:`Email`}),(0,O.jsx)(_,{placeholder:`Your email address`})]},t)}),(0,O.jsxs)(S,{children:[(0,O.jsx)(p,{children:`https://`}),(0,O.jsx)(_,{placeholder:`Your site address`}),(0,O.jsx)(p,{children:`.com`})]})]}),L=()=>(0,O.jsx)(o,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(S,{variant:e,children:[(0,O.jsx)(r,{children:(0,O.jsx)(s,{fontSize:`xl`})}),(0,O.jsx)(_,{placeholder:`Your email address`})]},t)}),R=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(_,{placeholder:`Default border color`}),(0,O.jsx)(_,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,O.jsxs)(S,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,O.jsx)(r,{children:(0,O.jsx)(s,{fontSize:`xl`})}),(0,O.jsx)(_,{placeholder:`Custom border color`})]}),(0,O.jsx)(_,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,O.jsxs)(S,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,O.jsx)(p,{children:`Email`}),(0,O.jsx)(_,{placeholder:`Custom border color`})]})]}),z=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(_,{placeholder:`default placeholder`}),(0,O.jsx)(_,{placeholder:`custom placeholder`,_placeholder:{color:`gray.500`,opacity:1}}),(0,O.jsx)(_,{color:`green.500`,placeholder:`custom placeholder`,_placeholder:{color:`inherit`}})]}),B=()=>(0,O.jsx)(o,{each:[`block`,`horizontal`,`vertical`,`none`],children:(e,t)=>(0,O.jsx)(_,{placeholder:e,resize:e},t)}),V=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(_,{autosize:!0,placeholder:`autosize`}),(0,O.jsx)(_,{autosize:!0,minRows:4,placeholder:`autosize, min rows 4`}),(0,O.jsx)(_,{autosize:!0,maxRows:4,placeholder:`autosize, max rows 4`}),(0,O.jsx)(_,{placeholder:`rows 4`,rows:4})]}),H=()=>{let e=(0,D.useRef)(null);return(0,O.jsxs)(f,{children:[(0,O.jsx)(_,{placeholder:`use resize`,resizeRef:e}),(0,O.jsx)(y,{alignSelf:`flex-end`,onClick:()=>{e.current?.()},children:`Resize`})]})},U=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=E();return(0,O.jsxs)(f,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,O.jsx)(v,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,O.jsx)(_,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,O.jsx)(y,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},W=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=E({defaultValues:{textarea:`孫悟空`}});return(0,O.jsxs)(f,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,O.jsx)(v,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,O.jsx)(_,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,O.jsx)(y,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Textarea key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Textarea key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Textarea key={index} variant={variant} disabled placeholder={variant} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled helperMessage="We would like to get your feedback." label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Textarea key={index} variant={variant} placeholder={variant} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root helperMessage="We would like to get your feedback." label="Feedback" readOnly>
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Textarea key={index} variant={variant} invalid placeholder={variant} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="Feedback is required." invalid label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant}>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder="Your email address" />
          </InputGroup.Root>}
      </For>

      <InputGroup.Root>
        <InputGroup.Addon>https://</InputGroup.Addon>
        <Textarea placeholder="Your site address" />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>
    </>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <MailIcon fontSize="xl" />
          </InputGroup.Element>
          <Textarea placeholder="Your email address" />
        </InputGroup.Root>}
    </For>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="Default border color" />

      <Textarea focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <MailIcon fontSize="xl" />
        </InputGroup.Element>
        <Textarea placeholder="Custom border color" />
      </InputGroup.Root>

      <Textarea errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>Email</InputGroup.Addon>
        <Textarea placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default placeholder" />

      <Textarea placeholder="custom placeholder" _placeholder={{
      color: "gray.500",
      opacity: 1
    }} />

      <Textarea color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => <Textarea key={index} placeholder={resize} resize={resize} />}
    </For>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const resizeRef = useRef<() => void>(null);
  const onResize = () => {
    resizeRef.current?.();
  };
  return <VStack>
      <Textarea placeholder="use resize" resizeRef={resizeRef} />

      <Button alignSelf="flex-end" onClick={onResize}>
        Resize
      </Button>
    </VStack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
  }
  const defaultValues: Data = {
    textarea: "孫悟空"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...W.parameters?.docs?.source}}},G=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Placeholder`,`Resize`,`Autosize`,`ControlResize`,`ReactHookForm`,`ReactHookFormDefaultValue`]}))();export{I as Addon,V as Autosize,A as Basic,R as BorderColor,H as ControlResize,N as Disabled,L as Element,F as Invalid,z as Placeholder,U as ReactHookForm,W as ReactHookFormDefaultValue,P as ReadOnly,B as Resize,M as Size,j as Variant,G as __namedExportsOrder,k as default};