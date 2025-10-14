import{r as c,j as e,C as X,a2 as de,V as b,R as O,T as Q,S as Z}from"./iframe-DlW9lece.js";import{P as D}from"./props-table-BqBBQBc5.js";import{u as ee,C as q}from"./index.esm-w0VKeH5t.js";import{c as me,u as he,C as l,a as be}from"./checkbox-DQigb-Zg.js";import{F as h}from"./for-Bbje7Nyp.js";import{H as oe}from"./h-stack-0ZpIDtxl.js";import{K as pe}from"./key-icon-D9QTHrHf.js";import{B as U}from"./box-6lZ3szAV.js";import{a as re,C as xe}from"./use-checkbox-1hys7GZS.js";import{G as ke}from"./group-Ser6DQqV.js";import{F as m}from"./use-field-props-DPxwIYVf.js";import{H as ve}from"./heart-icon-D0jq8agj.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DraM9h-y.js";import"./grid-item-p-P7O8q5.js";import"./flex-CqzE-1_6.js";import"./heading-BVtzxnUn.js";import"./use-input-border-DWoJYHtW.js";import"./minus-icon-jMKf-flK.js";import"./check-icon-BV14iK3c.js";import"./index-BA6hlmtc.js";import"./index-TFlPkFy0.js";import"./use-breakpoint-C-kJZ4_t.js";import"./use-breakpoint-value-BspeiRIn.js";import"./use-color-mode-value-Cm3a1PiS.js";const s=me(r=>{const[,{colorScheme:o,size:n,variant:a,checkedIcon:u,children:i,disabled:d,errorBorderColor:t,focusBorderColor:p,invalid:E,items:z=[],readOnly:L,shape:_,...ne}]=he(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{max:$,value:N,getInputProps:K,getLabelProps:Y,getRootProps:ae,onChange:A}=re(ne),se=c.useMemo(()=>i||z.map(({label:ce,value:J,...ue},ie)=>e.jsx(l,{value:J,...ue,children:ce},J??ie)),[z,i]),te=c.useMemo(()=>({colorScheme:o,size:n,variant:a,checkedIcon:u,disabled:d,errorBorderColor:t,focusBorderColor:p,invalid:E,readOnly:L,shape:_}),[a,n,o,_,d,E,L,t,p,u]),le=c.useMemo(()=>({max:$,value:N,getInputProps:K,getLabelProps:Y,onChange:A}),[$,N,K,Y,A]);return e.jsx(be,{value:te,children:e.jsx(xe,{value:le,children:e.jsx(ke,{orientation:"vertical",...ae(),children:se})})})},"group")(),$e={component:l,title:"Components / Checkbox"},x=()=>e.jsx(l,{children:"ソラ"}),k=()=>e.jsxs(s,{children:[e.jsx(l,{value:"1",children:"ソラ"}),e.jsx(l,{value:"2",children:"リク"}),e.jsx(l,{value:"3",children:"カイリ"})]}),v=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r})},C=()=>{const r=c.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(D,{columns:["solid","subtle","surface","outline"],rows:X,children:(o,n,a)=>e.jsx(s,{colorScheme:n,variant:o,defaultValue:["1"],items:r},a)})},g=()=>{const r=c.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(D,{columns:["sm","md","lg"],rows:X,children:(o,n,a)=>e.jsx(s,{colorScheme:n,size:o,defaultValue:["1"],items:r},a)})},f=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{defaultValue:["1"],items:r})},S=()=>e.jsx(l,{defaultChecked:!0,children:"ソラ"}),j=()=>{const[r,o,n]=de(),[a,u]=c.useState([!0,!1,!1]),i=a.every(Boolean),d=a.some(Boolean)&&!i;return e.jsxs(b,{gap:"sm",children:[e.jsx(l,{checked:i,indeterminate:d,inputProps:{"aria-controls":`${r} ${o} ${n}`},onChange:t=>u([t.target.checked,t.target.checked,t.target.checked]),children:"デスティニーアイランド"}),e.jsxs(b,{gap:"sm",ms:"md",children:[e.jsx(l,{id:r,checked:a[0],onChange:t=>u([t.target.checked,a[1],a[2]]),children:"ソラ"}),e.jsx(l,{id:o,checked:a[1],onChange:t=>u([a[0],t.target.checked,a[2]]),children:"リク"}),e.jsx(l,{id:n,checked:a[2],onChange:t=>u([a[0],a[1],t.target.checked]),children:"カイリ"})]})]})},G=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r,max:2})},R=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r,orientation:"horizontal"})},y=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(D,{variant:"stack",rows:["rounded","square"],children:(o,n,a)=>e.jsx(s,{items:r,shape:n},a)})},I=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,disabled:!0,value:o,children:O(o)},n)})}),e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,disabled:!0,items:r},n)}),e.jsx(m,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(s,{items:r})})]})},M=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,readOnly:!0,value:o,children:O(o)},n)})}),e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,items:r,readOnly:!0},n)}),e.jsx(m,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(s,{items:r})})]})},F=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,invalid:!0,value:o,children:O(o)},n)})}),e.jsx(h,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,invalid:!0,items:r},n)}),e.jsx(m,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(s,{items:r})})]})},P=()=>e.jsxs(s,{children:[e.jsx(l,{value:"1",children:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),V=()=>{const[r,o]=c.useState(["1"]),n=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:n,value:r,onChange:o})},T=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:n}=re({defaultValue:["1"],max:2}),a=({children:u,...i})=>e.jsxs(U,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},"&:has(input:disabled)":{layerStyle:"disabled"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(U,{as:"input",...r(i)}),u]});return e.jsxs(oe,{...n(),children:[e.jsx(a,{value:"1",children:"ソラ"}),e.jsx(a,{value:"2",children:"リク"}),e.jsx(a,{value:"3",children:"カイリ"})]})},B=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{checkedIcon:e.jsx(ve,{}),label:"カイリ",value:"3"}],[]);return e.jsx(s,{checkedIcon:e.jsx(pe,{}),items:r})},w=()=>e.jsxs(oe,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(l,{as:"div",h:"6"}),e.jsxs(b,{gap:"xs",userSelect:"none",children:[e.jsx(Q,{children:"Enable notifications"}),e.jsx(Q,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),H=()=>{const{control:r,formState:{errors:o},handleSubmit:n,watch:a}=ee(),u=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),i=d=>console.log("submit:",d);return console.log("watch:",a()),e.jsxs(b,{as:"form",onSubmit:n(i),children:[e.jsx(m,{errorMessage:o.checkbox?.message,invalid:!!o.checkbox,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkbox",control:r,render:({field:{value:d,...t}})=>e.jsx(l,{checked:d,...t,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:o.checkboxGroup?.message,invalid:!!o.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkboxGroup",control:r,render:({field:d})=>e.jsx(s,{items:u,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},W=()=>{const r={checkbox:!0,checkboxGroup:["1"]},{control:o,formState:{errors:n},handleSubmit:a,watch:u}=ee({defaultValues:r}),i=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),d=t=>console.log("submit:",t);return console.log("watch:",u()),e.jsxs(b,{as:"form",onSubmit:a(d),children:[e.jsx(m,{errorMessage:n.checkbox?.message,invalid:!!n.checkbox,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkbox",control:o,render:({field:{value:t,...p}})=>e.jsx(l,{checked:t,...p,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:n.checkboxGroup?.message,invalid:!!n.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(q,{name:"checkboxGroup",control:o,render:({field:t})=>e.jsx(s,{items:i,...t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Checkbox>ソラ</Checkbox>;
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">ソラ</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">リク</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">カイリ</CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Checkbox defaultChecked>ソラ</Checkbox>;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...G.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">Default border color</CheckboxGroup.Item>
      <CheckboxGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </CheckboxGroup.Item>
      <CheckboxGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(["1"]);
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
  console.log("watch:", watch());
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
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<CheckboxGroup.RootProps["items"]>(() => [{
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
  console.log("watch:", watch());
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
}`,...W.parameters?.docs?.source}}};const Ne=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Indeterminate","Max","Orientation","Shape","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomHook","CustomIcon","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{x as Basic,P as BorderColor,w as CustomComponent,V as CustomControl,T as CustomHook,B as CustomIcon,S as DefaultChecked,f as DefaultValue,I as Disabled,k as Group,j as Indeterminate,F as Invalid,v as Items,G as Max,R as Orientation,H as ReactHookForm,W as ReactHookFormWithDefaultValue,M as ReadOnly,y as Shape,g as Size,C as Variant,Ne as __namedExportsOrder,$e as default};
