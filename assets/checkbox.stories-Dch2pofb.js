import{g as he,r as t,j as e,s as A,D as be,C as oe,R as pe,V as S,F as J,T as Z}from"./iframe-XeUDGc9-.js";import{P as Q}from"./props-table-8pgvWA5r.js";import{u as re,C as Y}from"./index.esm-D-eD8dcB.js";import{u as xe,c as ke,a as ne,C as ve}from"./use-checkbox-Cnb6f4mC.js";import{u as Ce}from"./use-input-border-CG4ik_Zh.js";import{M as ge}from"./minus-icon-DxqMY0I0.js";import{C as fe}from"./check-icon-XDogIqU6.js";import{F as b}from"./for-DJHVjIWJ.js";import{H as ae}from"./h-stack-CmV2-cIr.js";import{K as Se}from"./key-icon-Byt1fvxF.js";import{B as se}from"./button-BMwb3xqF.js";import{B as ee}from"./box-DOzMzH66.js";import{G as je}from"./group-DnVKF550.js";import{F as h}from"./use-field-props-BArorzui.js";import{H as Ge}from"./heart-icon--W8-Hsr6.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BDdrDugI.js";import"./grid-item-DGiAOBhH.js";import"./flex-C58mYSsb.js";import"./heading-C-Rlsbfa.js";import"./index-D_DEFYRd.js";import"./createLucideIcon-BIZS7xSf.js";import"./button.style-CgX_lvjC.js";import"./use-ripple-CRLgxef_.js";import"./rings-DhKaXPYE.js";import"./index-DEnd7V5M.js";import"./use-breakpoint-yc9KJhMy.js";import"./use-breakpoint-value-DixKx_R9.js";import"./use-color-mode-value-BtM7ZDp0.js";const{component:Re,PropsContext:ye,withContext:te,withProvider:Me,useRootComponentProps:Ie}=he("checkbox",ke),c=Me(({checkedIcon:r,children:o,errorBorderColor:n,focusBorderColor:a,indeterminateIcon:u,indicatorProps:i,inputProps:d,labelProps:s,rootProps:m,...j})=>{const{checked:p,indeterminate:x,getIndicatorProps:k,getInputProps:G,getRootProps:v}=xe(j),C=Ce({errorBorderColor:n,focusBorderColor:a}),g=t.useMemo(()=>x?u||e.jsx(ge,{}):p?r||e.jsx(fe,{}):null,[x,u,p,r]),f=t.useMemo(()=>e.jsx(A.input,{...G(d)}),[G,d]),R=t.useMemo(()=>e.jsx(Pe,{...k(i),children:g}),[k,i,g]);return o?e.jsxs(A.label,{...v({...C,...m}),children:[f,R,e.jsx(Fe,{...s,children:o})]}):e.jsxs(A.div,{...be(v({...C,...m})),children:[f,R]})},"root")(),Pe=te("div","indicator")(),Fe=te("span","label")(),l=Re(r=>{const[,{colorScheme:o,size:n,variant:a,checkedIcon:u,children:i,disabled:d,errorBorderColor:s,focusBorderColor:m,invalid:j,items:p=[],readOnly:x,shape:k,...G}]=Ie(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{max:v,value:C,getInputProps:g,getLabelProps:f,getRootProps:R,onChange:U}=ne(G),le=t.useMemo(()=>i||p.map(({label:ie,value:X,...de},me)=>e.jsx(c,{value:X,...de,children:ie},X??me)),[p,i]),ce=t.useMemo(()=>({colorScheme:o,size:n,variant:a,checkedIcon:u,disabled:d,errorBorderColor:s,focusBorderColor:m,invalid:j,readOnly:x,shape:k}),[a,n,o,k,d,j,x,s,m,u]),ue=t.useMemo(()=>({max:v,value:C,getInputProps:g,getLabelProps:f,onChange:U}),[v,C,g,f,U]);return e.jsx(ye,{value:ce,children:e.jsx(ve,{value:ue,children:e.jsx(je,{orientation:"vertical",...R(),children:le})})})},"group")(),to={component:c,title:"Components / Checkbox"},y=()=>e.jsx(c,{children:"ソラ"}),M=()=>e.jsxs(l,{children:[e.jsx(c,{value:"1",children:"ソラ"}),e.jsx(c,{value:"2",children:"リク"}),e.jsx(c,{value:"3",children:"カイリ"})]}),I=()=>{const r=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(l,{items:r})},P=()=>{const r=t.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(Q,{columns:["solid","subtle","surface","outline"],rows:oe,children:(o,n,a)=>e.jsx(l,{colorScheme:n,variant:o,defaultValue:["1"],items:r},a)})},F=()=>{const r=t.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(Q,{columns:["sm","md","lg"],rows:oe,children:(o,n,a)=>e.jsx(l,{colorScheme:n,size:o,defaultValue:["1"],items:r},a)})},V=()=>{const r=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(l,{defaultValue:["1"],items:r})},B=()=>e.jsx(c,{defaultChecked:!0,children:"ソラ"}),T=()=>{const[r,o,n]=pe(),[a,u]=t.useState([!0,!1,!1]),i=a.every(Boolean),d=a.some(Boolean)&&!i;return e.jsxs(S,{gap:"sm",children:[e.jsx(c,{checked:i,indeterminate:d,inputProps:{"aria-controls":`${r} ${o} ${n}`},onChange:s=>u([s.target.checked,s.target.checked,s.target.checked]),children:"デスティニーアイランド"}),e.jsxs(S,{gap:"sm",ms:"md",children:[e.jsx(c,{id:r,checked:a[0],onChange:s=>u([s.target.checked,a[1],a[2]]),children:"ソラ"}),e.jsx(c,{id:o,checked:a[1],onChange:s=>u([a[0],s.target.checked,a[2]]),children:"リク"}),e.jsx(c,{id:n,checked:a[2],onChange:s=>u([a[0],a[1],s.target.checked]),children:"カイリ"})]})]})},w=()=>{const r=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(l,{items:r,max:2})},H=()=>{const r=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(l,{items:r,orientation:"horizontal"})},W=()=>{const r=t.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(Q,{variant:"stack",rows:["rounded","square"],children:(o,n,a)=>e.jsx(l,{items:r,shape:n},a)})},q=()=>{const r=t.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(c,{variant:o,disabled:!0,value:o,children:J(o)},n)})}),e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,disabled:!0,items:r},n)}),e.jsx(h,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(l,{items:r})})]})},D=()=>{const r=t.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(c,{variant:o,readOnly:!0,value:o,children:J(o)},n)})}),e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,items:r,readOnly:!0},n)}),e.jsx(h,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(l,{items:r})})]})},O=()=>{const r=t.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(c,{variant:o,invalid:!0,value:o,children:J(o)},n)})}),e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,invalid:!0,items:r},n)}),e.jsx(h,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(l,{items:r})})]})},E=()=>e.jsxs(l,{children:[e.jsx(c,{value:"1",children:"Default border color"}),e.jsx(c,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(c,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),z=()=>{const[r,o]=t.useState(["1"]),n=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(l,{items:n,value:r,onChange:o})},L=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:n}=ne({defaultValue:["1"],max:2}),a=({children:u,...i})=>e.jsxs(ee,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},"&:has(input:disabled)":{layerStyle:"disabled"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(ee,{as:"input",...r(i)}),u]});return e.jsxs(ae,{...n(),children:[e.jsx(a,{value:"1",children:"ソラ"}),e.jsx(a,{value:"2",children:"リク"}),e.jsx(a,{value:"3",children:"カイリ"})]})},_=()=>{const r=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{checkedIcon:e.jsx(Ge,{}),label:"カイリ",value:"3"}],[]);return e.jsx(l,{checkedIcon:e.jsx(Se,{}),items:r})},$=()=>e.jsxs(ae,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(c,{h:"6"}),e.jsxs(S,{gap:"xs",userSelect:"none",children:[e.jsx(Z,{children:"Enable notifications"}),e.jsx(Z,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),N=()=>{const{control:r,formState:{errors:o},handleSubmit:n,watch:a}=re(),u=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),i=d=>console.log("submit:",d);return console.log("watch:",a()),e.jsxs(S,{as:"form",onSubmit:n(i),children:[e.jsx(h,{errorMessage:o.checkbox?.message,invalid:!!o.checkbox,label:"Who is your favorite character?",children:e.jsx(Y,{name:"checkbox",control:r,render:({field:{value:d,...s}})=>e.jsx(c,{checked:d,...s,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(h,{errorMessage:o.checkboxGroup?.message,invalid:!!o.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(Y,{name:"checkboxGroup",control:r,render:({field:d})=>e.jsx(l,{items:u,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(se,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},K=()=>{const r={checkbox:!0,checkboxGroup:["1"]},{control:o,formState:{errors:n},handleSubmit:a,watch:u}=re({defaultValues:r}),i=t.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),d=s=>console.log("submit:",s);return console.log("watch:",u()),e.jsxs(S,{as:"form",onSubmit:a(d),children:[e.jsx(h,{errorMessage:n.checkbox?.message,invalid:!!n.checkbox,label:"Who is your favorite character?",children:e.jsx(Y,{name:"checkbox",control:o,render:({field:{value:s,...m}})=>e.jsx(c,{checked:s,...m,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(h,{errorMessage:n.checkboxGroup?.message,invalid:!!n.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(Y,{name:"checkboxGroup",control:o,render:({field:s})=>e.jsx(l,{items:i,...s}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(se,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Checkbox>ソラ</Checkbox>;
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">ソラ</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">リク</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">カイリ</CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Checkbox defaultChecked>ソラ</Checkbox>;
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">Default border color</CheckboxGroup.Item>
      <CheckboxGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </CheckboxGroup.Item>
      <CheckboxGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <HStack as="label" css={{
    "&:has(input:checked)": {
      bg: "colorScheme.subtle",
      borderColor: "colorScheme.muted"
    }
  }} colorScheme="green" alignItems="flex-start" borderWidth="1px" px="md" py="3" rounded="l2">
      <Checkbox h="6" />

      <VStack gap="xs" userSelect="none">
        <Text>Enable notifications</Text>
        <Text color="fg.muted" fontSize="sm">
          You can enable or disable notifications at any time.
        </Text>
      </VStack>
    </HStack>;
}`,...$.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}};const lo=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Indeterminate","Max","Orientation","Shape","Disabled","Readonly","Invalid","BorderColor","CustomControl","CustomHook","CustomIcon","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{y as Basic,E as BorderColor,$ as CustomComponent,z as CustomControl,L as CustomHook,_ as CustomIcon,B as DefaultChecked,V as DefaultValue,q as Disabled,M as Group,T as Indeterminate,O as Invalid,I as Items,w as Max,H as Orientation,N as ReactHookForm,K as ReactHookFormWithDefaultValue,D as Readonly,W as Shape,F as Size,P as Variant,lo as __namedExportsOrder,to as default};
