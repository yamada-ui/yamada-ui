import{g as ue,r as s,j as e,s as D,M as ie,C as J,Q as W,V as E,T as Q,R as K}from"./iframe-BToZTpox.js";import{P as q}from"./props-table-Cwu3xVD6.js";import{u as U,C as X}from"./index.esm-DkzZiBaN.js";import{u as ce,r as de,a as Z,R as me}from"./use-radio-D-PRHPp8.js";import{u as pe}from"./use-input-border-DrgszVel.js";import{F as m}from"./for-uUJ5eupy.js";import{H as $}from"./h-stack-B0RuZYZf.js";import{B as A}from"./box-C1VmAI8V.js";import{G as be}from"./group-DNMOlJvQ.js";import{F as x}from"./use-field-props-BdW9O_rE.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DdBbvjDG.js";import"./grid-item-DRUP5dOl.js";import"./flex-BLADGVni.js";import"./heading-D64Y19KZ.js";import"./index-OFdnihQg.js";import"./index-B_V8uJL1.js";import"./use-breakpoint-DScWtC6l.js";import"./use-breakpoint-value-DsRsbSt7.js";import"./use-color-mode-value-Cf047RNM.js";const{component:he,PropsContext:ve,withContext:ee,withProvider:Re,useRootComponentProps:xe}=ue("radio",de),u=Re(({children:r,errorBorderColor:o,focusBorderColor:a,indicatorProps:t,inputProps:l,labelProps:c,rootProps:i,...d})=>{const{getIndicatorProps:p,getInputProps:b,getRootProps:h}=ce(d),v=pe({errorBorderColor:o,focusBorderColor:a}),f=s.useMemo(()=>e.jsx(D.input,{...b(l)}),[b,l]),R=s.useMemo(()=>e.jsx(fe,{...p(t)}),[p,t]);return r?e.jsxs(D.label,{...h({...v,...i}),children:[f,R,e.jsx(Se,{...c,children:r})]}):e.jsxs(D.div,{...ie(h({...v,...i})),children:[f,R]})},"root")(),fe=ee("div","indicator")(),Se=ee("span","label")(),n=he(r=>{const[,{colorScheme:o,size:a,variant:t,children:l,disabled:c,errorBorderColor:i,focusBorderColor:d,invalid:p,items:b=[],readOnly:h,shape:v,...f}]=xe(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{name:R,value:z,getInputProps:L,getLabelProps:_,getRootProps:oe,onChange:N}=Z(f),re=s.useMemo(()=>l||b.map(({label:te,value:Y,...se},le)=>e.jsx(u,{value:Y,...se,children:te},Y??le)),[b,l]),ae=s.useMemo(()=>({colorScheme:o,size:a,variant:t,disabled:c,errorBorderColor:i,focusBorderColor:d,invalid:p,readOnly:h,shape:v}),[t,a,o,v,c,p,h,i,d]),ne=s.useMemo(()=>({name:R,value:z,getInputProps:L,getLabelProps:_,onChange:N}),[R,z,L,_,N]);return e.jsx(ve,{value:ae,children:e.jsx(me,{value:ne,children:e.jsx(be,{orientation:"vertical",...oe(),children:re})})})},"group")(),ze={component:u,title:"Components / Radio"},S=()=>e.jsxs(n,{children:[e.jsx(u,{value:"1",children:"織田信長"}),e.jsx(u,{value:"2",children:"豊臣秀吉"}),e.jsx(u,{value:"3",children:"徳川家康"})]}),g=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},C=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(q,{columns:["solid","subtle","surface","outline"],rows:J,children:(o,a,t)=>e.jsx(n,{colorScheme:a,variant:o,defaultValue:"1",items:r},t)})},j=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(q,{columns:["sm","md","lg"],rows:J,children:(o,a,t)=>e.jsx(n,{colorScheme:a,size:o,defaultValue:"1",items:r},t)})},G=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{defaultValue:"1",items:r})},k=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},y=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r,orientation:"horizontal"})},M=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(q,{variant:"stack",rows:["circle","square","rounded"],children:(o,a,t)=>e.jsx(n,{defaultValue:"1",items:r,shape:a},t)})},P=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,disabled:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,disabled:!0,items:r},a)}),e.jsx(x,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},F=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,readOnly:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,items:r,readOnly:!0},a)}),e.jsx(x,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(n,{items:r})})]})},I=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,invalid:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,invalid:!0,items:r},a)}),e.jsx(x,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},V=()=>e.jsxs(n,{children:[e.jsx(u,{value:"1",children:"Default border color"}),e.jsx(u,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(u,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),w=()=>{const[r,o]=s.useState("1"),a=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:a,value:r,onChange:o})},T=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:a}=Z({defaultValue:"1"}),t=({children:l,...c})=>e.jsxs(A,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(A,{as:"input",...r(c)}),l]});return e.jsxs($,{...a(),children:[e.jsx(t,{value:"1",children:"織田信長"}),e.jsx(t,{value:"2",children:"豊臣秀吉"}),e.jsx(t,{value:"3",children:"徳川家康"})]})},B=()=>e.jsxs($,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(u,{h:"6"}),e.jsxs(E,{gap:"xs",userSelect:"none",children:[e.jsx(Q,{children:"Enable notifications"}),e.jsx(Q,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),H=()=>{const{control:r,formState:{errors:o},handleSubmit:a,watch:t}=U(),l=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),c=i=>console.log("submit:",i);return console.log("watch:",t()),e.jsxs(E,{as:"form",onSubmit:a(c),children:[e.jsx(x,{errorMessage:o.radio?.message,invalid:!!o.radio,label:"Who is your favorite character?",children:e.jsx(X,{name:"radio",control:r,render:({field:i})=>e.jsx(n,{items:l,...i}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(K,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},O=()=>{const r={radio:"1"},{control:o,formState:{errors:a},handleSubmit:t,watch:l}=U({defaultValues:r}),c=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),i=d=>console.log("submit:",d);return console.log("watch:",l()),e.jsxs(E,{as:"form",onSubmit:t(i),children:[e.jsx(x,{errorMessage:a.radio?.message,invalid:!!a.radio,label:"Who is your favorite character?",children:e.jsx(X,{name:"radio",control:o,render:({field:d})=>e.jsx(n,{items:c,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(K,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup.Root>
      <RadioGroup.Item value="1">織田信長</RadioGroup.Item>
      <RadioGroup.Item value="2">豊臣秀吉</RadioGroup.Item>
      <RadioGroup.Item value="3">徳川家康</RadioGroup.Item>
    </RadioGroup.Root>;
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
  return <RadioGroup.Root items={items} orientation="horizontal" />;
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup.Root>
      <RadioGroup.Item value="1">Default border color</RadioGroup.Item>
      <RadioGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </RadioGroup.Item>
      <RadioGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </RadioGroup.Item>
    </RadioGroup.Root>;
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <HStack as="label" css={{
    "&:has(input:checked)": {
      bg: "colorScheme.subtle",
      borderColor: "colorScheme.muted"
    }
  }} colorScheme="green" alignItems="flex-start" borderWidth="1px" px="md" py="3" rounded="l2">
      <Radio h="6" />

      <VStack gap="xs" userSelect="none">
        <Text>Enable notifications</Text>
        <Text color="fg.muted" fontSize="sm">
          You can enable or disable notifications at any time.
        </Text>
      </VStack>
    </HStack>;
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};const Le=["Basic","Items","Variant","Size","DefaultValue","DefaultChecked","Orientation","Shape","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomHook","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{S as Basic,V as BorderColor,B as CustomComponent,w as CustomControl,T as CustomHook,k as DefaultChecked,G as DefaultValue,P as Disabled,I as Invalid,g as Items,y as Orientation,H as ReactHookForm,O as ReactHookFormWithDefaultValue,F as ReadOnly,M as Shape,j as Size,C as Variant,Le as __namedExportsOrder,ze as default};
