import{n as B,I as M,r as T,j as e,C as S}from"./iframe-COpE3uSe.js";import{P as R}from"./props-table-XBnOiVZc.js";import{c as O,u as P,a as E,T as U,b as w,d as o,I as i}from"./toggle-B9i7Z4Ut.js";import{c as F}from"./createLucideIcon-B04U3mbS.js";import{F as C}from"./for-DdiNkdzb.js";import{G as _}from"./group-BcN9SPfp.js";import{B as t}from"./bold-icon-Both_8tf.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-C-W568Cz.js";import"./grid-item-Bvrr_-qm.js";import"./flex-v97S7pBb.js";import"./heading-B0z9i4jI.js";import"./icon-button-BjF-Bm1-.js";import"./button-C1iRx7Aw.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";import"./index-CmrZ2qa-.js";import"./use-field-props-qOu5Tg87.js";import"./use-input-border-C5BYnfYe.js";import"./index-rIgF0o0K.js";import"./use-breakpoint-Dw6HOVd7.js";import"./use-breakpoint-value-CoBUj51o.js";import"./use-color-mode-value-DQ4glCV3.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],L=F("underline",z),s=B(M)({as:L}),r=O(a=>{const[,{colorScheme:l,size:n,variant:c,attached:x,...f}]=P(a,"group",{transferProps:["size","variant","colorScheme"]}),{disabled:v,readOnly:j,value:I,getGroupProps:y,onChange:h,onChangeMapRef:G}=E(f),V=T.useMemo(()=>({colorScheme:l,size:n,variant:c,focusVisibleRing:x?"inside":void 0}),[c,n,l,x]),k=T.useMemo(()=>({disabled:v,readOnly:j,value:I,onChange:h,onChangeMapRef:G}),[I,v,j,h,G]);return e.jsx(U,{value:V,children:e.jsx(w,{value:k,children:e.jsx(_,{attached:x,...y()})})})},"group")(),ge={component:r,title:"Components / ToggleGroup"},u=()=>e.jsxs(r,{children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),g=()=>e.jsx(R,{columns:["ghost","subtle","surface","outline","solid"],rows:S,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,variant:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),d=()=>e.jsx(R,{columns:["xs","sm","md","lg","xl"],rows:S,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,size:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),p=()=>e.jsx(C,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,disabled:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),m=()=>e.jsx(C,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,readOnly:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),b=()=>{const[a,l]=T.useState(void 0),[n,c]=T.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{value:a,onChange:l,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),e.jsxs(r,{value:n,onChange:c,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const de=["Basic","Variant","Size","Disabled","Readonly","CustomControl"];export{u as Basic,b as CustomControl,p as Disabled,m as Readonly,d as Size,g as Variant,de as __namedExportsOrder,ge as default};
