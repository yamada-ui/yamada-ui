import{r as l,j as e,C as X,a0 as de,V as b,P as O,T as J,Q as Z}from"./iframe-D0k82VKj.js";import{P as D}from"./props-table-CTaVRFRo.js";import{u as ee,C as q}from"./index.esm-BWmHN2_N.js";import{c as me,u as he,C as t,a as be}from"./checkbox-Dvl4RMEc.js";import{F as h}from"./for-VxQ1P6BR.js";import{H as oe}from"./h-stack-2JM7Wrl-.js";import{K as pe}from"./key-icon-CZlZRJIe.js";import{B as U}from"./box-BYUm6qHd.js";import{a as re,C as xe}from"./use-checkbox-DPOfgfHz.js";import{G as ke}from"./group-wqTpA82u.js";import{F as m}from"./use-field-props-CqEx8ctB.js";import{H as ve}from"./heart-icon-BMBSkSHz.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-W2jtEO_S.js";import"./grid-item-BEXtmAs-.js";import"./flex-DfSuxPUO.js";import"./heading-Z6IrjMgv.js";import"./use-input-border-BupPeUaJ.js";import"./minus-icon-CSkIMB6w.js";import"./check-icon-B019Rgxq.js";import"./index-Bb9gnTOn.js";import"./index-BbBQJmyS.js";import"./use-breakpoint-CrBfJ-6O.js";import"./use-breakpoint-value-pZKkBl49.js";import"./use-color-mode-value-bOkTOA4p.js";const s=me(r=>{const[,{colorScheme:o,size:n,variant:a,checkedIcon:i,children:c,disabled:d,errorBorderColor:u,focusBorderColor:w,invalid:E,items:z=[],readOnly:L,shape:_,...ne}]=he(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{max:$,value:N,getInputProps:K,getLabelProps:Y,getRootProps:ae,onChange:Q}=re(ne),se=l.useMemo(()=>c||z.map(({label:ce,value:A,...ue},ie)=>e.jsx(t,{value:A,...ue,children:ce},A??ie)),[z,c]),te=l.useMemo(()=>({colorScheme:o,size:n,variant:a,checkedIcon:i,disabled:d,errorBorderColor:u,focusBorderColor:w,invalid:E,readOnly:L,shape:_}),[a,n,o,_,d,E,L,u,w,i]),le=l.useMemo(()=>({max:$,value:N,getInputProps:K,getLabelProps:Y,onChange:Q}),[$,N,K,Y,Q]);return e.jsx(be,{value:te,children:e.jsx(xe,{value:le,children:e.jsx(ke,{orientation:"vertical",...ae(),children:se})})})},"group")(),$e={component:t,title:"Components / Checkbox"},p=()=>e.jsx(t,{children:"ソラ"}),x=()=>e.jsxs(s,{children:[e.jsx(t,{value:"1",children:"ソラ"}),e.jsx(t,{value:"2",children:"リク"}),e.jsx(t,{value:"3",children:"カイリ"})]}),k=()=>{const r=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r})},v=()=>{const r=l.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(D,{columns:["solid","subtle","surface","outline"],rows:X,children:(o,n,a)=>e.jsx(s,{colorScheme:n,variant:o,defaultValue:["1"],items:r},a)})},C=()=>{const r=l.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(D,{columns:["sm","md","lg"],rows:X,children:(o,n,a)=>e.jsx(s,{colorScheme:n,size:o,defaultValue:["1"],items:r},a)})},g=()=>{const r=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{defaultValue:["1"],items:r})},f=()=>e.jsx(t,{defaultChecked:!0,children:"ソラ"}),S=()=>{const[r,o,n]=de(),[a,i]=l.useState([!0,!1,!1]),c=a.every(Boolean),d=a.some(Boolean)&&!c;return e.jsxs(b,{gap:"sm",children:[e.jsx(t,{checked:c,indeterminate:d,inputProps:{"aria-controls":`${r} ${o} ${n}`},onChange:u=>i([u.target.checked,u.target.checked,u.target.checked]),children:"デスティニーアイランド"}),e.jsxs(b,{gap:"sm",ms:"md",children:[e.jsx(t,{id:r,checked:a[0],onChange:u=>i([u.target.checked,a[1],a[2]]),children:"ソラ"}),e.jsx(t,{id:o,checked:a[1],onChange:u=>i([a[0],u.target.checked,a[2]]),children:"リク"}),e.jsx(t,{id:n,checked:a[2],onChange:u=>i([a[0],a[1],u.target.checked]),children:"カイリ"})]})]})},j=()=>{const r=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r,max:2})},G=()=>{const r=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r,orientation:"horizontal"})},I=()=>{const r=l.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(D,{variant:"stack",rows:["rounded","square"],children:(o,n,a)=>e.jsx(s,{items:r,shape:n},a)})},R=()=>{const r=l.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(t,{variant:o,disabled:!0,value:o,children:O(o)},n)})}),e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,disabled:!0,items:r},n)}),e.jsx(m,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(s,{items:r})})]})},y=()=>{const r=l.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(t,{variant:o,readOnly:!0,value:o,children:O(o)},n)})}),e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,items:r,readOnly:!0},n)}),e.jsx(m,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(s,{items:r})})]})},M=()=>{const r=l.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(t,{variant:o,invalid:!0,value:o,children:O(o)},n)})}),e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,invalid:!0,items:r},n)}),e.jsx(m,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(s,{items:r})})]})},F=()=>e.jsxs(s,{children:[e.jsx(t,{value:"1",children:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),V=()=>{const[r,o]=l.useState(["1"]),n=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:n,value:r,onChange:o})},P=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:n}=re({defaultValue:["1"],max:2}),a=({children:i,...c})=>e.jsxs(U,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},"&:has(input:disabled)":{layerStyle:"disabled"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(U,{as:"input",...r(c)}),i]});return e.jsxs(oe,{...n(),children:[e.jsx(a,{value:"1",children:"ソラ"}),e.jsx(a,{value:"2",children:"リク"}),e.jsx(a,{value:"3",children:"カイリ"})]})},T=()=>{const r=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{checkedIcon:e.jsx(ve,{}),label:"カイリ",value:"3"}],[]);return e.jsx(s,{checkedIcon:e.jsx(pe,{}),items:r})},B=()=>e.jsxs(oe,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(t,{as:"div",h:"6"}),e.jsxs(b,{gap:"xs",userSelect:"none",children:[e.jsx(J,{children:"Enable notifications"}),e.jsx(J,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),H=()=>{const{control:r,formState:{errors:o},handleSubmit:n}=ee(),a=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),i=c=>console.log("submit:",c);return e.jsxs(b,{as:"form",onSubmit:n(i),children:[e.jsx(m,{errorMessage:o.checkbox?.message,invalid:!!o.checkbox,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkbox",control:r,render:({field:{value:c,...d}})=>e.jsx(t,{checked:c,...d,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:o.checkboxGroup?.message,invalid:!!o.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkboxGroup",control:r,render:({field:c})=>e.jsx(s,{items:a,...c}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},W=()=>{const r={checkbox:!0,checkboxGroup:["1"]},{control:o,formState:{errors:n},handleSubmit:a}=ee({defaultValues:r}),i=l.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),c=d=>console.log("submit:",d);return e.jsxs(b,{as:"form",onSubmit:a(c),children:[e.jsx(m,{errorMessage:n.checkbox?.message,invalid:!!n.checkbox,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkbox",control:o,render:({field:{value:d,...u}})=>e.jsx(t,{checked:d,...u,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:n.checkboxGroup?.message,invalid:!!n.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkboxGroup",control:o,render:({field:d})=>e.jsx(s,{items:i,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Checkbox>ソラ</Checkbox>;
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">ソラ</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">リク</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">カイリ</CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <CheckboxGroup.Root items={items} />;
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CheckboxGroup.Root key={key} colorScheme={row} variant={column} defaultValue={["1"]} items={items} />;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CheckboxGroup.Root key={key} colorScheme={row} size={column} defaultValue={["1"]} items={items} />;
    }}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <CheckboxGroup.Root defaultValue={["1"]} items={items} />;
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <Checkbox defaultChecked>ソラ</Checkbox>;
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [id0, id1, id2] = useIds();
  const [values, setValues] = useState([true, false, false]);
  const allChecked = values.every(Boolean);
  const indeterminate = values.some(Boolean) && !allChecked;
  return <VStack gap="sm">
      <Checkbox checked={allChecked} indeterminate={indeterminate} inputProps={{
      "aria-controls": \`\${id0} \${id1} \${id2}\`
    }} onChange={ev => setValues([ev.target.checked, ev.target.checked, ev.target.checked])}>
        デスティニーアイランド
      </Checkbox>

      <VStack gap="sm" ms="md">
        <Checkbox id={id0} checked={values[0]} onChange={ev => setValues([ev.target.checked, values[1]!, values[2]!])}>
          ソラ
        </Checkbox>
        <Checkbox id={id1} checked={values[1]} onChange={ev => setValues([values[0]!, ev.target.checked, values[2]!])}>
          リク
        </Checkbox>
        <Checkbox id={id2} checked={values[2]} onChange={ev => setValues([values[0]!, values[1]!, ev.target.checked])}>
          カイリ
        </Checkbox>
      </VStack>
    </VStack>;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <CheckboxGroup.Root items={items} max={2} />;
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <CheckboxGroup.Root items={items} orientation="horizontal" />;
}`,...G.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    defaultChecked: true,
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => <CheckboxGroup.Root key={key} items={items} shape={row} />}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    defaultChecked: true,
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <>
      <CheckboxGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => <CheckboxGroup.Item key={index} variant={variant} disabled value={variant}>
              {toTitleCase(variant)}
            </CheckboxGroup.Item>}
        </For>
      </CheckboxGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <CheckboxGroup.Root key={index} variant={variant} disabled items={items} />}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <CheckboxGroup.Root items={items} />
      </Field.Root>
    </>;
}`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    defaultChecked: true,
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <>
      <CheckboxGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => <CheckboxGroup.Item key={index} variant={variant} readOnly value={variant}>
              {toTitleCase(variant)}
            </CheckboxGroup.Item>}
        </For>
      </CheckboxGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <CheckboxGroup.Root key={index} variant={variant} items={items} readOnly />}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <CheckboxGroup.Root items={items} />
      </Field.Root>
    </>;
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    defaultChecked: true,
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <>
      <CheckboxGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => <CheckboxGroup.Item key={index} variant={variant} invalid value={variant}>
              {toTitleCase(variant)}
            </CheckboxGroup.Item>}
        </For>
      </CheckboxGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <CheckboxGroup.Root key={index} variant={variant} invalid items={items} />}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <CheckboxGroup.Root items={items} />
      </Field.Root>
    </>;
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">Default border color</CheckboxGroup.Item>
      <CheckboxGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </CheckboxGroup.Item>
      <CheckboxGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(["1"]);
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  return <CheckboxGroup.Root items={items} value={value} onChange={setValue} />;
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const {
    getInputProps,
    getLabelProps,
    getRootProps
  } = useCheckboxGroup({
    defaultValue: ["1"],
    max: 2
  });
  const CustomCheckbox: FC<HTMLProps<"input">> = ({
    children,
    ...rest
  }) => {
    return <Box as="label" css={{
      "&:has(input:checked)": {
        bg: "colorScheme.solid",
        borderColor: "colorScheme.solid",
        color: "colorScheme.contrast"
      },
      "&:has(input:disabled)": {
        layerStyle: "disabled"
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
      <CustomCheckbox value="1">ソラ</CustomCheckbox>
      <CustomCheckbox value="2">リク</CustomCheckbox>
      <CustomCheckbox value="3">カイリ</CustomCheckbox>
    </HStack>;
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    checkedIcon: <HeartIcon />,
    label: "カイリ",
    value: "3"
  }], []);
  return <CheckboxGroup.Root checkedIcon={<KeyIcon />} items={items} />;
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <HStack as="label" css={{
    "&:has(input:checked)": {
      bg: "colorScheme.subtle",
      borderColor: "colorScheme.muted"
    }
  }} colorScheme="green" alignItems="flex-start" borderWidth="1px" px="md" py="3" rounded="l2">
      <Checkbox as="div" h="6" />

      <VStack gap="xs" userSelect="none">
        <Text>Enable notifications</Text>
        <Text color="fg.muted" fontSize="sm">
          You can enable or disable notifications at any time.
        </Text>
      </VStack>
    </HStack>;
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.checkbox?.message} invalid={!!errors.checkbox} label="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox checked={value} {...rest}>
              ソラ
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Field.Root errorMessage={errors.checkboxGroup?.message} invalid={!!errors.checkboxGroup} label="Who is your favorite character?">
        <Controller name="checkboxGroup" control={control} render={({
        field
      }) => <CheckboxGroup.Root items={items} {...field} />} rules={{
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
}`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
  }
  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["1"]
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
  const items = useMemo<CheckboxGroup.Item[]>(() => [{
    label: "ソラ",
    value: "1"
  }, {
    label: "リク",
    value: "2"
  }, {
    label: "カイリ",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.checkbox?.message} invalid={!!errors.checkbox} label="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox checked={value} {...rest}>
              ソラ
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Field.Root errorMessage={errors.checkboxGroup?.message} invalid={!!errors.checkboxGroup} label="Who is your favorite character?">
        <Controller name="checkboxGroup" control={control} render={({
        field
      }) => <CheckboxGroup.Root items={items} {...field} />} rules={{
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
}`,...W.parameters?.docs?.source}}};const Ne=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Indeterminate","Max","Orientation","Shape","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomHook","CustomIcon","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{p as Basic,F as BorderColor,B as CustomComponent,V as CustomControl,P as CustomHook,T as CustomIcon,f as DefaultChecked,g as DefaultValue,R as Disabled,x as Group,S as Indeterminate,M as Invalid,k as Items,j as Max,G as Orientation,H as ReactHookForm,W as ReactHookFormWithDefaultValue,y as ReadOnly,I as Shape,C as Size,v as Variant,Ne as __namedExportsOrder,$e as default};
