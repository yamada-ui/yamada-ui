import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{$n as r,dt as i}from"./core-DkLkzQLq.js";import{t as a}from"./jsx-runtime-O9QVJvLM.js";import{Kt as o,m as s,t as c,ur as l}from"./icon-BJ0kjvJ7.js";import{Ma as u,Na as d,gt as f,mt as p,pt as m}from"./iframe-QFtltEr1.js";import{n as h,t as g}from"./storybook-DaILEofl.js";var _,v,y,b,x,S,C,w,T,E;t((()=>{_=e(n(),1),g(),m(),i(),u(),c(),v=a(),y={component:p,title:`Components / ToggleGroup`},b=()=>(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]}),x=()=>(0,v.jsx)(h,{columns:[`ghost`,`subtle`,`surface`,`outline`,`solid`],rows:r,children:(e,t,n)=>(0,v.jsxs)(p,{colorScheme:t,variant:e,attached:!0,children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},n)}),S=()=>(0,v.jsx)(h,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:r,children:(e,t,n)=>(0,v.jsxs)(p,{colorScheme:t,size:e,attached:!0,children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},n)}),C=()=>(0,v.jsx)(d,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,v.jsxs)(p,{variant:e,attached:!0,disabled:!0,children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},t)}),w=()=>(0,v.jsx)(d,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,v.jsxs)(p,{variant:e,attached:!0,readOnly:!0,children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},t)}),T=()=>{let[e,t]=(0,_.useState)(void 0),[n,r]=(0,_.useState)([]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p,{value:e,onChange:t,children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]}),(0,v.jsxs)(p,{value:n,onChange:r,children:[(0,v.jsx)(f,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(l,{}),value:`bold`}),(0,v.jsx)(f,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(o,{}),value:`italic`}),(0,v.jsx)(f,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <ToggleGroup.Root>
      <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
      <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
      <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
    </ToggleGroup.Root>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup.Root key={key} colorScheme={row} variant={column} attached>
            <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup.Root>;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup.Root key={key} colorScheme={row} size={column} attached>
            <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup.Root>;
    }}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup.Root key={index} variant={variant} attached disabled>
          <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup.Root>}
    </For>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup.Root key={index} variant={variant} attached readOnly>
          <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup.Root>}
    </For>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup.Root value={singleValue} onChange={setSingleValue}>
        <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup.Root>

      <ToggleGroup.Root value={multiValue} onChange={setMultiValue}>
        <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup.Root>
    </>;
}`,...T.parameters?.docs?.source}}},E=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`CustomControl`]}))();export{b as Basic,T as CustomControl,C as Disabled,w as ReadOnly,S as Size,x as Variant,E as __namedExportsOrder,y as default};