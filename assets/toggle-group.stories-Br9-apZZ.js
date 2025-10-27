import{n as k,o as B,I as M,r as T,j as e,C as S}from"./iframe-Cq3rcaMI.js";import{P as R}from"./props-table-C-lxxN5V.js";import{c as P,u as E,a as U,T as w,b as F,d as o,I as i}from"./toggle-CRNusPgA.js";import{F as C}from"./for-CHPKWv_w.js";import{G as _}from"./group-Cc45Vgon.js";import{B as t}from"./bold-icon-CxI8up6E.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./flex-hG4eu5He.js";import"./heading-vD3e3jk6.js";import"./index-CGtAgyPS.js";import"./use-field-props-B0aPqHXg.js";import"./use-input-border-DYKyVkkb.js";import"./index-hNMbzMH0.js";import"./use-breakpoint-B2hNbTgT.js";import"./use-breakpoint-value-4bNhmqEp.js";import"./use-color-mode-value-D8ycUMtp.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],L=k("underline",z),s=B(M)({as:L}),r=P(a=>{const[,{colorScheme:l,size:n,variant:c,attached:x,...f}]=E(a,"group",{transferProps:["size","variant","colorScheme"]}),{disabled:v,readOnly:j,value:I,getGroupProps:y,onChange:h,onChangeMapRef:G}=U(f),V=T.useMemo(()=>({colorScheme:l,size:n,variant:c,focusVisibleRing:x?"inside":void 0}),[c,n,l,x]),O=T.useMemo(()=>({disabled:v,readOnly:j,value:I,onChange:h,onChangeMapRef:G}),[I,v,j,h,G]);return e.jsx(w,{value:V,children:e.jsx(F,{value:O,children:e.jsx(_,{attached:x,...y()})})})},"group")(),re={component:r,title:"Components / ToggleGroup"},u=()=>e.jsxs(r,{children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),g=()=>e.jsx(R,{columns:["ghost","subtle","surface","outline","solid"],rows:S,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,variant:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),d=()=>e.jsx(R,{columns:["xs","sm","md","lg","xl"],rows:S,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,size:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),p=()=>e.jsx(C,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,disabled:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),m=()=>e.jsx(C,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,readOnly:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),b=()=>{const[a,l]=T.useState(void 0),[n,c]=T.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{value:a,onChange:l,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),e.jsxs(r,{value:n,onChange:c,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ToggleGroup.Root>
      <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
      <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
      <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
    </ToggleGroup.Root>;
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup.Root key={key} colorScheme={row} variant={column} attached>
            <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup.Root>;
    }}
    </PropsTable>;
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup.Root key={key} colorScheme={row} size={column} attached>
            <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup.Root>;
    }}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup.Root key={index} variant={variant} attached disabled>
          <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup.Root>}
    </For>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup.Root key={index} variant={variant} attached readOnly>
          <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup.Root>}
    </For>;
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const ie=["Basic","Variant","Size","Disabled","ReadOnly","CustomControl"];export{u as Basic,b as CustomControl,p as Disabled,m as ReadOnly,d as Size,g as Variant,ie as __namedExportsOrder,re as default};
