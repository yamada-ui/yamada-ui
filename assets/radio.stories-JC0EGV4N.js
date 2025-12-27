import{g as to,r as s,j as e,s as Y,C as Ye,P as W,V as w,T as Q,Q as Qe}from"./iframe-DaVT7dxo.js";import{P as E}from"./props-table-c8iwS7A1.js";import{u as Ae,C as Je}from"./index.esm-QJAmEVmh.js";import{u as so,r as lo,a as Ke,R as uo}from"./use-radio-DPFtsDX3.js";import{u as io}from"./use-input-border-DrntMMng.js";import{F as m}from"./for-CMUOzp-w.js";import{H as Ue}from"./h-stack-2svcz8hZ.js";import{B as A}from"./box-BD07YNoR.js";import{G as co}from"./group-C9yD-cpG.js";import{F as v}from"./use-field-props-BTZiGdm1.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Cjbr-zPO.js";import"./grid-item-BPeiKHRL.js";import"./flex-XAtIsEC9.js";import"./heading-DKCzfUaM.js";import"./index-3228ODx_.js";import"./index-CUCGStop.js";import"./use-breakpoint-Da_vq4mi.js";import"./use-breakpoint-value-DTMKKZtH.js";import"./use-color-mode-value-KEDQyVks.js";const{component:mo,PropsContext:po,withContext:Xe,withProvider:bo,useRootComponentProps:vo}=to("radio",lo),u=bo(({children:r,errorBorderColor:o,focusBorderColor:a,indicatorProps:t,inputProps:l,labelProps:i,rootProps:c,...d})=>{const{getIndicatorProps:p,getInputProps:b,getRootProps:h}=so(d),R=io({errorBorderColor:o,focusBorderColor:a}),D=s.useMemo(()=>e.jsx(Y.input,{...b(l)}),[b,l]),x=s.useMemo(()=>e.jsx(ho,{...p(t)}),[p,t]);return e.jsxs(Y.label,{...h({...R,...c}),children:[D,x,r?e.jsx(Ro,{...i,children:r}):null]})},"root")(),ho=Xe("div","indicator")(),Ro=Xe("span","label")(),n=mo(r=>{const[,{colorScheme:o,size:a,variant:t,children:l,disabled:i,errorBorderColor:c,focusBorderColor:d,invalid:p,items:b=[],readOnly:h,shape:R,...D}]=vo(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{name:x,value:q,getInputProps:z,getLabelProps:L,getRootProps:Ze,onChange:_}=Ke(D),$e=s.useMemo(()=>l||b.map(({label:ro,value:N,...ao},no)=>e.jsx(u,{value:N,...ao,children:ro},N??no)),[b,l]),eo=s.useMemo(()=>({colorScheme:o,size:a,variant:t,disabled:i,errorBorderColor:c,focusBorderColor:d,invalid:p,readOnly:h,shape:R}),[t,a,o,R,i,p,h,c,d]),oo=s.useMemo(()=>({name:x,value:q,getInputProps:z,getLabelProps:L,onChange:_}),[x,q,z,L,_]);return e.jsx(po,{value:eo,children:e.jsx(uo,{value:oo,children:e.jsx(co,{orientation:"vertical",...Ze(),children:$e})})})},"group")(),wo={component:u,title:"Components / Radio"},f=()=>e.jsxs(n,{children:[e.jsx(u,{value:"1",children:"織田信長"}),e.jsx(u,{value:"2",children:"豊臣秀吉"}),e.jsx(u,{value:"3",children:"徳川家康"})]}),S=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},g=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(E,{columns:["solid","subtle","surface","outline"],rows:Ye,children:(o,a,t)=>e.jsx(n,{colorScheme:a,variant:o,defaultValue:"1",items:r},t)})},C=()=>{const r=s.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(E,{columns:["sm","md","lg"],rows:Ye,children:(o,a,t)=>e.jsx(n,{colorScheme:a,size:o,defaultValue:"1",items:r},t)})},j=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{defaultValue:"1",items:r})},G=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r})},k=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:r,orientation:"horizontal"})},I=()=>{const r=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(E,{variant:"stack",rows:["circle","square","rounded"],children:(o,a,t)=>e.jsx(n,{defaultValue:"1",items:r,shape:a},t)})},y=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,disabled:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,disabled:!0,items:r},a)}),e.jsx(v,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},M=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,readOnly:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,items:r,readOnly:!0},a)}),e.jsx(v,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(n,{items:r})})]})},F=()=>{const r=s.useMemo(()=>[{defaultChecked:!0,label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(u,{variant:o,invalid:!0,value:o,children:W(o)},a)})}),e.jsx(m,{each:["solid","subtle","surface","outline"],children:(o,a)=>e.jsx(n,{variant:o,invalid:!0,items:r},a)}),e.jsx(v,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(n,{items:r})})]})},V=()=>e.jsxs(n,{children:[e.jsx(u,{value:"1",children:"Default border color"}),e.jsx(u,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(u,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),P=()=>{const[r,o]=s.useState("1"),a=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]);return e.jsx(n,{items:a,value:r,onChange:o})},T=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:a}=Ke({defaultValue:"1"}),t=({children:l,...i})=>e.jsxs(A,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(A,{as:"input",...r(i)}),l]});return e.jsxs(Ue,{...a(),children:[e.jsx(t,{value:"1",children:"織田信長"}),e.jsx(t,{value:"2",children:"豊臣秀吉"}),e.jsx(t,{value:"3",children:"徳川家康"})]})},B=()=>e.jsxs(Ue,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(u,{as:"div",h:"6"}),e.jsxs(w,{gap:"xs",userSelect:"none",children:[e.jsx(Q,{children:"Enable notifications"}),e.jsx(Q,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),H=()=>{var i;const{control:r,formState:{errors:o},handleSubmit:a}=Ae(),t=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),l=c=>console.log("submit:",c);return e.jsxs(w,{as:"form",onSubmit:a(l),children:[e.jsx(v,{errorMessage:(i=o.radio)==null?void 0:i.message,invalid:!!o.radio,label:"Who is your favorite character?",children:e.jsx(Je,{name:"radio",control:r,render:({field:c})=>e.jsx(n,{items:t,...c}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Qe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},O=()=>{var c;const r={radio:"1"},{control:o,formState:{errors:a},handleSubmit:t}=Ae({defaultValues:r}),l=s.useMemo(()=>[{label:"織田信長",value:"1"},{label:"豊臣秀吉",value:"2"},{label:"徳川家康",value:"3"}],[]),i=d=>console.log("submit:",d);return e.jsxs(w,{as:"form",onSubmit:t(i),children:[e.jsx(v,{errorMessage:(c=a.radio)==null?void 0:c.message,invalid:!!a.radio,label:"Who is your favorite character?",children:e.jsx(Je,{name:"radio",control:o,render:({field:d})=>e.jsx(n,{items:l,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Qe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var J,K,U;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <RadioGroup.Root>
      <RadioGroup.Item value="1">織田信長</RadioGroup.Item>
      <RadioGroup.Item value="2">豊臣秀吉</RadioGroup.Item>
      <RadioGroup.Item value="3">徳川家康</RadioGroup.Item>
    </RadioGroup.Root>;
}`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Z,$;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,oe,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(re=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,ne,te;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,le,ue;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(ue=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ie,ce,de;G.parameters={...G.parameters,docs:{...(ie=G.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(de=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,be;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(be=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ve,he,Re;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(Re=(he=I.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}};var xe,fe,Se;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(Se=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ge,Ce,je;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(je=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Ge,ke,Ie;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(Ie=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var ye,Me,Fe;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <RadioGroup.Root>
      <RadioGroup.Item value="1">Default border color</RadioGroup.Item>
      <RadioGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </RadioGroup.Item>
      <RadioGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </RadioGroup.Item>
    </RadioGroup.Root>;
}`,...(Fe=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ve,Pe,Te;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("1");
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(Te=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Be,He,Oe;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(Oe=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};var De,We,we;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(we=(We=B.parameters)==null?void 0:We.docs)==null?void 0:we.source}}};var Ee,qe,ze;H.parameters={...H.parameters,docs:{...(Ee=H.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(ze=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var Le,_e,Ne;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<RadioGroup.Item[]>(() => [{
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
}`,...(Ne=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};const Eo=["Basic","Items","Variant","Size","DefaultValue","DefaultChecked","Orientation","Shape","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomHook","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{f as Basic,V as BorderColor,B as CustomComponent,P as CustomControl,T as CustomHook,G as DefaultChecked,j as DefaultValue,y as Disabled,F as Invalid,S as Items,k as Orientation,H as ReactHookForm,O as ReactHookFormWithDefaultValue,M as ReadOnly,I as Shape,C as Size,g as Variant,Eo as __namedExportsOrder,wo as default};
