import{l as B,I as M,r as T,j as e,C as S}from"./iframe-BHZTlJ0V.js";import{P as R}from"./props-table-C4SE-e-6.js";import{c as O,u as P,a as E,T as U,b as w,d as o,I as i}from"./toggle-BSH2AF0o.js";import{c as F}from"./createLucideIcon-D8IHT0xS.js";import{F as C}from"./for-VorXHFQH.js";import{G as _}from"./group-DVyg0qWk.js";import{B as t}from"./bold-icon-DiV1o4J4.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-ftZgIPsh.js";import"./grid-item-DzHPtOXT.js";import"./flex-DAlkda-X.js";import"./heading-CZleZHQ4.js";import"./icon-button-DctN4AEW.js";import"./button-BB2ssYQZ.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";import"./index-hNShLvyX.js";import"./use-field-props-CVbuf8Se.js";import"./use-input-border-Bnt3lK9m.js";import"./index-DBNyBkxR.js";import"./use-breakpoint-BHTgFfav.js";import"./use-breakpoint-value-DTZaut4a.js";import"./use-color-mode-value-ZthzxX7p.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],L=F("underline",z),s=B(M)({as:L}),r=O(a=>{const[,{colorScheme:l,size:n,variant:c,attached:x,...f}]=P(a,"group",{transferProps:["size","variant","colorScheme"]}),{disabled:v,readOnly:j,value:I,getGroupProps:y,onChange:h,onChangeMapRef:G}=E(f),V=T.useMemo(()=>({colorScheme:l,size:n,variant:c,focusVisibleRing:x?"inside":void 0}),[c,n,l,x]),k=T.useMemo(()=>({disabled:v,readOnly:j,value:I,onChange:h,onChangeMapRef:G}),[I,v,j,h,G]);return e.jsx(U,{value:V,children:e.jsx(w,{value:k,children:e.jsx(_,{attached:x,...y()})})})},"group")(),ue={component:r,title:"Components / ToggleGroup"},u=()=>e.jsxs(r,{children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),g=()=>e.jsx(R,{columns:["ghost","subtle","surface","outline","solid"],rows:S,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,variant:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),d=()=>e.jsx(R,{columns:["xs","sm","md","lg","xl"],rows:S,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,size:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),p=()=>e.jsx(C,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,disabled:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),m=()=>e.jsx(C,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,readOnly:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),b=()=>{const[a,l]=T.useState(void 0),[n,c]=T.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{value:a,onChange:l,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),e.jsxs(r,{value:n,onChange:c,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const ge=["Basic","Variant","Size","Disabled","Readonly","CustomControl"];export{u as Basic,b as CustomControl,p as Disabled,m as Readonly,d as Size,g as Variant,ge as __namedExportsOrder,ue as default};
