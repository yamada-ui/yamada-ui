import{g as ie,r as s,j as e,s as O,D as ue,C as K,F as W,V as E,T as A}from"./iframe-zUpmkGgl.js";import{P as q}from"./props-table-AHThgKBg.js";import{u as Q,C as U}from"./index.esm-DEu9Ceiu.js";import{u as ce,r as de,a as X,R as me}from"./use-radio-L-nEAayb.js";import{u as pe}from"./use-input-border-DszEfdnS.js";import{F as m}from"./for-yYl1Ggvn.js";import{H as Z}from"./h-stack-Cb7mFrDT.js";import{B as $}from"./button-BSJyaaef.js";import{B as J}from"./box-B0C5PNF2.js";import{G as be}from"./group-Cupld_54.js";import{F as x}from"./use-field-props-DY5RPiKr.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BedIdkoN.js";import"./grid-item-3R5iQPLC.js";import"./flex-IclJcorr.js";import"./heading-D-hfGBzv.js";import"./index-Dal1_S4H.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";import"./index-Dh0dtizH.js";import"./use-breakpoint-rlMFjuDB.js";import"./use-breakpoint-value-CBhdCsru.js";import"./use-color-mode-value-DvQIHb0C.js";const{component:he,PropsContext:ve,withContext:ee,withProvider:Re,useRootComponentProps:xe}=ie("radio",de),i=Re(({children:r,errorBorderColor:o,focusBorderColor:a,indicatorProps:t,inputProps:l,labelProps:c,rootProps:u,...d})=>{const{getIndicatorProps:p,getInputProps:b,getRootProps:h}=ce(d),v=pe({errorBorderColor:o,focusBorderColor:a}),f=s.useMemo(()=>e.jsx(O.input,{...b(l)}),[b,l]),R=s.useMemo(()=>e.jsx(fe,{...p(t)}),[p,t]);return r?e.jsxs(O.label,{...h({...v,...u}),children:[f,R,e.jsx(Se,{...c,children:r})]}):e.jsxs(O.div,{...ue(h({...v,...u})),children:[f,R]})},"root")(),fe=ee("div","indicator")(),Se=ee("span","label")(),n=he(r=>{const[,{colorScheme:o,size:a,variant:t,children:l,disabled:c,errorBorderColor:u,focusBorderColor:d,invalid:p,items:b=[],readOnly:h,shape:v,...f}]=xe(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{name:R,value:z,getInputProps:L,getLabelProps:_,getRootProps:oe,onChange:N}=X(f),re=s.useMemo(()=>l||b.map(({label:te,value:Y,...se},le)=>e.jsx(i,{value:Y,...se,children:te},Y??le)),[b,l]),ae=s.useMemo(()=>({colorScheme:o,size:a,variant:t,disabled:c,errorBorderColor:u,focusBorderColor:d,invalid:p,readOnly:h,shape:v}),[t,a,o,v,c,p,h,u,d]),ne=s.useMemo(()=>({name:R,value:z,getInputProps:L,getLabelProps:_,onChange:N}),[R,z,L,_,N]);return e.jsx(ve,{value:ae,children:e.jsx(me,{value:ne,children:e.jsx(be,{orientation:"vertical",...oe(),children:re})})})},"group")(),Ye={component:i,title:"Components / Radio"},S=()=>e.jsxs(n,{children:[e.jsx(i,{value:"1",children:"織田信長"}),e.jsx(i,{value:"2",children:"豊臣秀吉"}),e.jsx(i,{value:"3",children:"徳川家康"})]}),g=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},C=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(q,{columns:["solid","subtle","surface","outline"],rows:K,children:(o,a,t)=>e.jsx(n,{colorScheme:a,variant:o,defaultValue:"1",items:r},t)})},j=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(q,{columns:["sm","md","lg"],rows:K,children:(o,a,t)=>e.jsx(n,{colorScheme:a,size:o,defaultValue:"1",items:r},t)})},G=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{defaultValue:"1",items:r})},k=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},y=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r,orientation:"horizontal"})},P=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(q,{variant:"stack",rows:["circle","square","rounded"],children:(o,a,t)=>e.jsx(n,{defaultValue:"1",items:r,shape:a},t)})},M=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(i,{variant:o,disabled:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,disabled:!0,items:r},a)}),e.jsx(x,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},F=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(i,{variant:o,readOnly:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,items:r,readOnly:!0},a)}),e.jsx(x,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(n,{items:r})})]})},I=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(i,{variant:o,invalid:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,invalid:!0,items:r},a)}),e.jsx(x,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},V=()=>e.jsxs(n,{children:[e.jsx(i,{value:"1",children:"Default border color"}),e.jsx(i,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(i,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),w=()=>{const[r,o]=s.useState("1"),a=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:a,value:r,onChange:o})},B=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:a}=X({defaultValue:"1"}),t=({children:l,...c})=>e.jsxs(J,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(J,{as:"input",...r(c)}),l]});return e.jsxs(Z,{...a(),children:[e.jsx(t,{value:"1",children:"織田信長"}),e.jsx(t,{value:"2",children:"豊臣秀吉"}),e.jsx(t,{value:"3",children:"徳川家康"})]})},T=()=>e.jsxs(Z,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(i,{h:"6"}),e.jsxs(E,{gap:"xs",userSelect:"none",children:[e.jsx(A,{children:"Enable notifications"}),e.jsx(A,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),D=()=>{const{control:r,formState:{errors:o},handleSubmit:a,watch:t}=Q(),l=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),c=u=>console.log("submit:",u);return console.log("watch:",t()),e.jsxs(E,{as:"form",onSubmit:a(c),children:[e.jsx(x,{errorMessage:o.radio?.message,invalid:!!o.radio,label:"Who is your favorite character?",children:e.jsx(U,{name:"radio",control:r,render:({field:u})=>e.jsx(n,{items:l,...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx($,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},H=()=>{const r={radio:"1"},{control:o,formState:{errors:a},handleSubmit:t,watch:l}=Q({defaultValues:r}),c=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),u=d=>console.log("submit:",d);return console.log("watch:",l()),e.jsxs(E,{as:"form",onSubmit:t(u),children:[e.jsx(x,{errorMessage:a.radio?.message,invalid:!!a.radio,label:"Who is your favorite character?",children:e.jsx(U,{name:"radio",control:o,render:({field:d})=>e.jsx(n,{items:c,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx($,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};const Ae=["Basic","Items","Variant","Size","DefaultValue","DefaultChecked","Orientation","Shape","Disabled","Readonly","Invalid","BorderColor","CustomControl","CustomHook","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{S as Basic,V as BorderColor,T as CustomComponent,w as CustomControl,B as CustomHook,k as DefaultChecked,G as DefaultValue,M as Disabled,I as Invalid,g as Items,y as Orientation,D as ReactHookForm,H as ReactHookFormWithDefaultValue,F as Readonly,P as Shape,j as Size,C as Variant,Ae as __namedExportsOrder,Ye as default};
