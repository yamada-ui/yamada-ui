import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Cv as n,Em as r,Ev as i,Fa as a,Hv as o,Lm as s,Pa as c,gt as l,mt as u,pt as d,r_ as f,rg as p,yy as m}from"./iframe-4z85howq.js";import{n as h,t as g}from"./storybook-DJV3OteS.js";var _,v,y,b,x,S,C,w,T,E;t((()=>{_=e(m(),1),g(),d(),n(),c(),r(),v=i(),y={component:u,title:`Components / ToggleGroup`},b=()=>(0,v.jsxs)(u,{children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]}),x=()=>(0,v.jsx)(h,{columns:[`ghost`,`subtle`,`surface`,`outline`,`solid`],rows:o,children:(e,t,n)=>(0,v.jsxs)(u,{colorScheme:t,variant:e,attached:!0,children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},n)}),S=()=>(0,v.jsx)(h,{columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:o,children:(e,t,n)=>(0,v.jsxs)(u,{colorScheme:t,size:e,attached:!0,children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},n)}),C=()=>(0,v.jsx)(a,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,v.jsxs)(u,{variant:e,attached:!0,disabled:!0,children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},t)}),w=()=>(0,v.jsx)(a,{each:[`ghost`,`subtle`,`surface`,`outline`,`solid`],children:(e,t)=>(0,v.jsxs)(u,{variant:e,attached:!0,readOnly:!0,children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]},t)}),T=()=>{let[e,t]=(0,_.useState)(void 0),[n,r]=(0,_.useState)([]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(u,{value:e,onChange:t,children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]}),(0,v.jsxs)(u,{value:n,onChange:r,children:[(0,v.jsx)(l,{"aria-label":`Toggle bold`,icon:(0,v.jsx)(f,{}),value:`bold`}),(0,v.jsx)(l,{"aria-label":`Toggle italic`,icon:(0,v.jsx)(p,{}),value:`italic`}),(0,v.jsx)(l,{"aria-label":`Toggle underline`,icon:(0,v.jsx)(s,{}),value:`underline`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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