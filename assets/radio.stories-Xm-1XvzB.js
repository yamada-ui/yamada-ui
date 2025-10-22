import{g as ue,r as s,j as e,s as Y,C as K,R as D,V as W,T as A,S as Q}from"./iframe-CzLob2S8.js";import{P as E}from"./props-table-hh2sl1VL.js";import{u as U,C as X}from"./index.esm-DYfURYUu.js";import{u as ie,r as ce,a as Z,R as de}from"./use-radio-C3wiHti0.js";import{u as me}from"./use-input-border-DQk3PDB4.js";import{F as m}from"./for-CeSllMh9.js";import{H as $}from"./h-stack-D6WYhcqF.js";import{B as J}from"./box-C1XXn3dT.js";import{G as pe}from"./group-sVI5qVIY.js";import{F as h}from"./use-field-props-D5Jl8v1-.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DcggJ69I.js";import"./grid-item-D2K3UNbQ.js";import"./flex-C6MzWLZ8.js";import"./heading-Dcz9XRZZ.js";import"./index-CcC-ZdNF.js";import"./index-YkRlbAIy.js";import"./use-breakpoint-DpqxU__I.js";import"./use-breakpoint-value-CeOZu0WS.js";import"./use-color-mode-value-PSjvqN0L.js";const{component:be,PropsContext:he,withContext:ee,withProvider:ve,useRootComponentProps:Re}=ue("radio",ce),u=ve(({children:r,errorBorderColor:o,focusBorderColor:a,indicatorProps:t,inputProps:l,labelProps:i,rootProps:c,...d})=>{const{getIndicatorProps:p,getInputProps:b,getRootProps:v}=ie(d),R=me({errorBorderColor:o,focusBorderColor:a}),O=s.useMemo(()=>e.jsx(Y.input,{...b(l)}),[b,l]),x=s.useMemo(()=>e.jsx(xe,{...p(t)}),[p,t]);return e.jsxs(Y.label,{...v({...R,...c}),children:[O,x,r?e.jsx(fe,{...i,children:r}):null]})},"root")(),xe=ee("div","indicator")(),fe=ee("span","label")(),n=be(r=>{const[,{colorScheme:o,size:a,variant:t,children:l,disabled:i,errorBorderColor:c,focusBorderColor:d,invalid:p,items:b=[],readOnly:v,shape:R,...O}]=Re(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{name:x,value:q,getInputProps:z,getLabelProps:L,getRootProps:oe,onChange:_}=Z(O),re=s.useMemo(()=>l||b.map(({label:te,value:N,...se},le)=>e.jsx(u,{value:N,...se,children:te},N??le)),[b,l]),ae=s.useMemo(()=>({colorScheme:o,size:a,variant:t,disabled:i,errorBorderColor:c,focusBorderColor:d,invalid:p,readOnly:v,shape:R}),[t,a,o,R,i,p,v,c,d]),ne=s.useMemo(()=>({name:x,value:q,getInputProps:z,getLabelProps:L,onChange:_}),[x,q,z,L,_]);return e.jsx(he,{value:ae,children:e.jsx(de,{value:ne,children:e.jsx(pe,{orientation:"vertical",...oe(),children:re})})})},"group")(),qe={component:u,title:"Components / Radio"},f=()=>e.jsxs(n,{children:[e.jsx(u,{value:"1",children:"織田信長"}),e.jsx(u,{value:"2",children:"豊臣秀吉"}),e.jsx(u,{value:"3",children:"徳川家康"})]}),S=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},g=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(E,{columns:["solid","subtle","surface","outline"],rows:K,children:(o,a,t)=>e.jsx(n,{colorScheme:a,variant:o,defaultValue:"1",items:r},t)})},C=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(E,{columns:["sm","md","lg"],rows:K,children:(o,a,t)=>e.jsx(n,{colorScheme:a,size:o,defaultValue:"1",items:r},t)})},j=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{defaultValue:"1",items:r})},G=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},k=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r,orientation:"horizontal"})},y=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(E,{variant:"stack",rows:["circle","square","rounded"],children:(o,a,t)=>e.jsx(n,{defaultValue:"1",items:r,shape:a},t)})},P=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,disabled:!0,value:o,children:D(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,disabled:!0,items:r},a)}),e.jsx(h,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},M=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,readOnly:!0,value:o,children:D(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,items:r,readOnly:!0},a)}),e.jsx(h,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(n,{items:r})})]})},F=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,invalid:!0,value:o,children:D(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,invalid:!0,items:r},a)}),e.jsx(h,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},I=()=>e.jsxs(n,{children:[e.jsx(u,{value:"1",children:"Default border color"}),e.jsx(u,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(u,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),V=()=>{const[r,o]=s.useState("1"),a=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:a,value:r,onChange:o})},w=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:a}=Z({defaultValue:"1"}),t=({children:l,...i})=>e.jsxs(J,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(J,{as:"input",...r(i)}),l]});return e.jsxs($,{...a(),children:[e.jsx(t,{value:"1",children:"織田信長"}),e.jsx(t,{value:"2",children:"豊臣秀吉"}),e.jsx(t,{value:"3",children:"徳川家康"})]})},T=()=>e.jsxs($,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(u,{as:"div",h:"6"}),e.jsxs(W,{gap:"xs",userSelect:"none",children:[e.jsx(A,{children:"Enable notifications"}),e.jsx(A,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),B=()=>{const{control:r,formState:{errors:o},handleSubmit:a,watch:t}=U(),l=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),i=c=>console.log("submit:",c);return console.log("watch:",t()),e.jsxs(W,{as:"form",onSubmit:a(i),children:[e.jsx(h,{errorMessage:o.radio?.message,invalid:!!o.radio,label:"Who is your favorite character?",children:e.jsx(X,{name:"radio",control:r,render:({field:c})=>e.jsx(n,{items:l,...c}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Q,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},H=()=>{const r={radio:"1"},{control:o,formState:{errors:a},handleSubmit:t,watch:l}=U({defaultValues:r}),i=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),c=d=>console.log("submit:",d);return console.log("watch:",l()),e.jsxs(W,{as:"form",onSubmit:t(c),children:[e.jsx(h,{errorMessage:a.radio?.message,invalid:!!a.radio,label:"Who is your favorite character?",children:e.jsx(X,{name:"radio",control:o,render:({field:d})=>e.jsx(n,{items:i,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Q,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup.Root>
      <RadioGroup.Item value="1">織田信長</RadioGroup.Item>
      <RadioGroup.Item value="2">豊臣秀吉</RadioGroup.Item>
      <RadioGroup.Item value="3">徳川家康</RadioGroup.Item>
    </RadioGroup.Root>;
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <RadioGroup.Root items={items} />;
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <RadioGroup.Root key={key} colorScheme={row} variant={column} defaultValue="1" items={items} />;
    }}
    </PropsTable>;
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <RadioGroup.Root key={key} colorScheme={row} size={column} defaultValue="1" items={items} />;
    }}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <RadioGroup.Root defaultValue="1" items={items} />;
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    defaultChecked: true,
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <RadioGroup.Root items={items} />;
}`,...G.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <RadioGroup.Root items={items} orientation="horizontal" />;
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => <RadioGroup.Root key={key} defaultValue="1" items={items} shape={row} />}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    defaultChecked: true,
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <>
      <RadioGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => <RadioGroup.Item key={index} variant={variant} disabled value={variant}>
              {toTitleCase(variant)}
            </RadioGroup.Item>}
        </For>
      </RadioGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <RadioGroup.Root key={index} variant={variant} disabled items={items} />}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <RadioGroup.Root items={items} />
      </Field.Root>
    </>;
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    defaultChecked: true,
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <>
      <RadioGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => <RadioGroup.Item key={index} variant={variant} readOnly value={variant}>
              {toTitleCase(variant)}
            </RadioGroup.Item>}
        </For>
      </RadioGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <RadioGroup.Root key={index} variant={variant} items={items} readOnly />}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <RadioGroup.Root items={items} />
      </Field.Root>
    </>;
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    defaultChecked: true,
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <>
      <RadioGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => <RadioGroup.Item key={index} variant={variant} invalid value={variant}>
              {toTitleCase(variant)}
            </RadioGroup.Item>}
        </For>
      </RadioGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <RadioGroup.Root key={index} variant={variant} invalid items={items} />}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <RadioGroup.Root items={items} />
      </Field.Root>
    </>;
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup.Root>
      <RadioGroup.Item value="1">Default border color</RadioGroup.Item>
      <RadioGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </RadioGroup.Item>
      <RadioGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </RadioGroup.Item>
    </RadioGroup.Root>;
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("1");
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  return <RadioGroup.Root items={items} value={value} onChange={setValue} />;
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const {
    getInputProps,
    getLabelProps,
    getRootProps
  } = useRadioGroup({
    defaultValue: "1"
  });
  const CustomRadio: FC<HTMLProps<"input">> = ({
    children,
    ...rest
  }) => {
    return <Box as="label" css={{
      "&:has(input:checked)": {
        bg: "colorScheme.solid",
        borderColor: "colorScheme.solid",
        color: "colorScheme.contrast"
      },
      alignItems: "center",
      borderWidth: "1px",
      display: "flex",
      h: "10",
      px: "3",
      rounded: "l2"
    }} {...getLabelProps()}>
        <Box as="input" {...getInputProps(rest)} />

        {children}
      </Box>;
  };
  return <HStack {...getRootProps()}>
      <CustomRadio value="1">織田信長</CustomRadio>
      <CustomRadio value="2">豊臣秀吉</CustomRadio>
      <CustomRadio value="3">徳川家康</CustomRadio>
    </HStack>;
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <HStack as="label" css={{
    "&:has(input:checked)": {
      bg: "colorScheme.subtle",
      borderColor: "colorScheme.muted"
    }
  }} colorScheme="green" alignItems="flex-start" borderWidth="1px" px="md" py="3" rounded="l2">
      <Radio as="div" h="6" />

      <VStack gap="xs" userSelect="none">
        <Text>Enable notifications</Text>
        <Text color="fg.muted" fontSize="sm">
          You can enable or disable notifications at any time.
        </Text>
      </VStack>
    </HStack>;
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.radio?.message} invalid={!!errors.radio} label="Who is your favorite character?">
        <Controller name="radio" control={control} render={({
        field
      }) => <RadioGroup.Root items={items} {...field} />} rules={{
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
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
  const defaultValues: Data = {
    radio: "1"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<RadioGroup.RootProps["items"]>(() => [{
    label: "織田信長",
    value: "1"
  }, {
    label: "豊臣秀吉",
    value: "2"
  }, {
    label: "徳川家康",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.radio?.message} invalid={!!errors.radio} label="Who is your favorite character?">
        <Controller name="radio" control={control} render={({
        field
      }) => <RadioGroup.Root items={items} {...field} />} rules={{
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
}`,...H.parameters?.docs?.source}}};const ze=["Basic","Items","Variant","Size","DefaultValue","DefaultChecked","Orientation","Shape","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomHook","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{f as Basic,I as BorderColor,T as CustomComponent,V as CustomControl,w as CustomHook,G as DefaultChecked,j as DefaultValue,P as Disabled,F as Invalid,S as Items,k as Orientation,B as ReactHookForm,H as ReactHookFormWithDefaultValue,M as ReadOnly,y as Shape,C as Size,g as Variant,ze as __namedExportsOrder,qe as default};
