import{r as c,j as e,C as lo,a0 as fo,V as p,P as w,T as J,Q as co}from"./iframe-DaVT7dxo.js";import{P as E}from"./props-table-c8iwS7A1.js";import{u as uo,C as D}from"./index.esm-QJAmEVmh.js";import{c as So,u as jo,C as l,a as Go}from"./checkbox-C2pbP9pU.js";import{F as b}from"./for-CMUOzp-w.js";import{H as io}from"./h-stack-2svcz8hZ.js";import{K as Io}from"./key-icon-CdjUAqxs.js";import{B as U}from"./box-BD07YNoR.js";import{a as mo,C as Ro}from"./use-checkbox-5lLgE9E_.js";import{G as yo}from"./group-C9yD-cpG.js";import{F as h}from"./use-field-props-BTZiGdm1.js";import{H as Mo}from"./heart-icon-aVXTPGo4.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Cjbr-zPO.js";import"./grid-item-BPeiKHRL.js";import"./flex-XAtIsEC9.js";import"./heading-DKCzfUaM.js";import"./use-input-border-DrntMMng.js";import"./minus-icon-BeWX0_go.js";import"./check-icon-4ziwEdHX.js";import"./index-3228ODx_.js";import"./index-CUCGStop.js";import"./use-breakpoint-Da_vq4mi.js";import"./use-breakpoint-value-DTMKKZtH.js";import"./use-color-mode-value-KEDQyVks.js";const s=So(r=>{const[,{colorScheme:o,size:n,variant:a,checkedIcon:u,children:i,disabled:d,errorBorderColor:t,focusBorderColor:m,invalid:x,items:z=[],readOnly:L,shape:_,...ho}]=jo(r,"group",{transferProps:["variant","colorScheme","size","shape"]}),{max:$,value:N,getInputProps:K,getLabelProps:Y,getRootProps:bo,onChange:Q}=mo(ho),po=c.useMemo(()=>i||z.map(({label:vo,value:A,...Co},go)=>e.jsx(l,{value:A,...Co,children:vo},A??go)),[z,i]),xo=c.useMemo(()=>({colorScheme:o,size:n,variant:a,checkedIcon:u,disabled:d,errorBorderColor:t,focusBorderColor:m,invalid:x,readOnly:L,shape:_}),[a,n,o,_,d,x,L,t,m,u]),ko=c.useMemo(()=>({max:$,value:N,getInputProps:K,getLabelProps:Y,onChange:Q}),[$,N,K,Y,Q]);return e.jsx(Go,{value:xo,children:e.jsx(Ro,{value:ko,children:e.jsx(yo,{orientation:"vertical",...bo(),children:po})})})},"group")(),er={component:l,title:"Components / Checkbox"},k=()=>e.jsx(l,{children:"ソラ"}),v=()=>e.jsxs(s,{children:[e.jsx(l,{value:"1",children:"ソラ"}),e.jsx(l,{value:"2",children:"リク"}),e.jsx(l,{value:"3",children:"カイリ"})]}),C=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r})},g=()=>{const r=c.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(E,{columns:["solid","subtle","surface","outline"],rows:lo,children:(o,n,a)=>e.jsx(s,{colorScheme:n,variant:o,defaultValue:["1"],items:r},a)})},f=()=>{const r=c.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(E,{columns:["sm","md","lg"],rows:lo,children:(o,n,a)=>e.jsx(s,{colorScheme:n,size:o,defaultValue:["1"],items:r},a)})},S=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{defaultValue:["1"],items:r})},j=()=>e.jsx(l,{defaultChecked:!0,children:"ソラ"}),G=()=>{const[r,o,n]=fo(),[a,u]=c.useState([!0,!1,!1]),i=a.every(Boolean),d=a.some(Boolean)&&!i;return e.jsxs(p,{gap:"sm",children:[e.jsx(l,{checked:i,indeterminate:d,inputProps:{"aria-controls":`${r} ${o} ${n}`},onChange:t=>u([t.target.checked,t.target.checked,t.target.checked]),children:"デスティニーアイランド"}),e.jsxs(p,{gap:"sm",ms:"md",children:[e.jsx(l,{id:r,checked:a[0],onChange:t=>u([t.target.checked,a[1],a[2]]),children:"ソラ"}),e.jsx(l,{id:o,checked:a[1],onChange:t=>u([a[0],t.target.checked,a[2]]),children:"リク"}),e.jsx(l,{id:n,checked:a[2],onChange:t=>u([a[0],a[1],t.target.checked]),children:"カイリ"})]})]})},I=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r,max:2})},R=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:r,orientation:"horizontal"})},y=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(E,{variant:"stack",rows:["rounded","square"],children:(o,n,a)=>e.jsx(s,{items:r,shape:n},a)})},M=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,disabled:!0,value:o,children:w(o)},n)})}),e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,disabled:!0,items:r},n)}),e.jsx(h,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(s,{items:r})})]})},F=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,readOnly:!0,value:o,children:w(o)},n)})}),e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,items:r,readOnly:!0},n)}),e.jsx(h,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(s,{items:r})})]})},V=()=>{const r=c.useMemo(()=>[{defaultChecked:!0,label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(l,{variant:o,invalid:!0,value:o,children:w(o)},n)})}),e.jsx(b,{each:["solid","subtle","surface","outline"],children:(o,n)=>e.jsx(s,{variant:o,invalid:!0,items:r},n)}),e.jsx(h,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(s,{items:r})})]})},P=()=>e.jsxs(s,{children:[e.jsx(l,{value:"1",children:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",value:"2",children:"Custom border color"}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,value:"3",children:"Custom border color"})]}),T=()=>{const[r,o]=c.useState(["1"]),n=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]);return e.jsx(s,{items:n,value:r,onChange:o})},B=()=>{const{getInputProps:r,getLabelProps:o,getRootProps:n}=mo({defaultValue:["1"],max:2}),a=({children:u,...i})=>e.jsxs(U,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.solid",borderColor:"colorScheme.solid",color:"colorScheme.contrast"},"&:has(input:disabled)":{layerStyle:"disabled"},alignItems:"center",borderWidth:"1px",display:"flex",h:"10",px:"3",rounded:"l2"},...o(),children:[e.jsx(U,{as:"input",...r(i)}),u]});return e.jsxs(io,{...n(),children:[e.jsx(a,{value:"1",children:"ソラ"}),e.jsx(a,{value:"2",children:"リク"}),e.jsx(a,{value:"3",children:"カイリ"})]})},H=()=>{const r=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{checkedIcon:e.jsx(Mo,{}),label:"カイリ",value:"3"}],[]);return e.jsx(s,{checkedIcon:e.jsx(Io,{}),items:r})},W=()=>e.jsxs(io,{as:"label",css:{"&:has(input:checked)":{bg:"colorScheme.subtle",borderColor:"colorScheme.muted"}},colorScheme:"green",alignItems:"flex-start",borderWidth:"1px",px:"md",py:"3",rounded:"l2",children:[e.jsx(l,{as:"div",h:"6"}),e.jsxs(p,{gap:"xs",userSelect:"none",children:[e.jsx(J,{children:"Enable notifications"}),e.jsx(J,{color:"fg.muted",fontSize:"sm",children:"You can enable or disable notifications at any time."})]})]}),q=()=>{var i,d;const{control:r,formState:{errors:o},handleSubmit:n}=uo(),a=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),u=t=>console.log("submit:",t);return e.jsxs(p,{as:"form",onSubmit:n(u),children:[e.jsx(h,{errorMessage:(i=o.checkbox)==null?void 0:i.message,invalid:!!o.checkbox,label:"Who is your favorite character?",children:e.jsx(D,{name:"checkbox",control:r,render:({field:{value:t,...m}})=>e.jsx(l,{checked:t,...m,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(h,{errorMessage:(d=o.checkboxGroup)==null?void 0:d.message,invalid:!!o.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(D,{name:"checkboxGroup",control:r,render:({field:t})=>e.jsx(s,{items:a,...t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(co,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},O=()=>{var d,t;const r={checkbox:!0,checkboxGroup:["1"]},{control:o,formState:{errors:n},handleSubmit:a}=uo({defaultValues:r}),u=c.useMemo(()=>[{label:"ソラ",value:"1"},{label:"リク",value:"2"},{label:"カイリ",value:"3"}],[]),i=m=>console.log("submit:",m);return e.jsxs(p,{as:"form",onSubmit:a(i),children:[e.jsx(h,{errorMessage:(d=n.checkbox)==null?void 0:d.message,invalid:!!n.checkbox,label:"Who is your favorite character?",children:e.jsx(D,{name:"checkbox",control:o,render:({field:{value:m,...x}})=>e.jsx(l,{checked:m,...x,children:"ソラ"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(h,{errorMessage:(t=n.checkboxGroup)==null?void 0:t.message,invalid:!!n.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(D,{name:"checkboxGroup",control:o,render:({field:m})=>e.jsx(s,{items:u,...m}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(co,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var X,Z,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Checkbox>ソラ</Checkbox>;
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,ne;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">ソラ</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">リク</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">カイリ</CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...(ne=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,te;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var le,ce,ue;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ue=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ie,de,me;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,be,pe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(pe=(be=S.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var xe,ke,ve;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Checkbox defaultChecked>ソラ</Checkbox>;
}`,...(ve=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var Ce,ge,fe;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(fe=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Se,je,Ge;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ge=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var Ie,Re,ye;R.parameters={...R.parameters,docs:{...(Ie=R.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(ye=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:ye.source}}};var Me,Fe,Ve;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var Pe,Te,Be;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Be=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var He,We,qe;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(qe=(We=F.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Oe,De,we;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(we=(De=V.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var Ee,ze,Le;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">Default border color</CheckboxGroup.Item>
      <CheckboxGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </CheckboxGroup.Item>
      <CheckboxGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </CheckboxGroup.Item>
    </CheckboxGroup.Root>;
}`,...(Le=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var _e,$e,Ne;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=($e=T.parameters)==null?void 0:$e.docs)==null?void 0:Ne.source}}};var Ke,Ye,Qe;B.parameters={...B.parameters,docs:{...(Ke=B.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Ye=B.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Ae,Je,Ue;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Je=H.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Xe,Ze,eo;W.parameters={...W.parameters,docs:{...(Xe=W.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(eo=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:eo.source}}};var oo,ro,no;q.parameters={...q.parameters,docs:{...(oo=q.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
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
}`,...(no=(ro=q.parameters)==null?void 0:ro.docs)==null?void 0:no.source}}};var ao,so,to;O.parameters={...O.parameters,docs:{...(ao=O.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
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
}`,...(to=(so=O.parameters)==null?void 0:so.docs)==null?void 0:to.source}}};const or=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Indeterminate","Max","Orientation","Shape","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomHook","CustomIcon","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{k as Basic,P as BorderColor,W as CustomComponent,T as CustomControl,B as CustomHook,H as CustomIcon,j as DefaultChecked,S as DefaultValue,M as Disabled,v as Group,G as Indeterminate,V as Invalid,C as Items,I as Max,R as Orientation,q as ReactHookForm,O as ReactHookFormWithDefaultValue,F as ReadOnly,y as Shape,f as Size,g as Variant,or as __namedExportsOrder,er as default};
