import{l as M,I as O,r as m,j as e,C}from"./iframe-B58gGoPv.js";import{P as G}from"./props-table-DoDUM-tj.js";import{c as P,u as E,a as R,T as U,b as w,d as l,I as r}from"./toggle-DqUxba96.js";import{G as F}from"./group-CPxhzQ_v.js";import{c as _}from"./createLucideIcon-BaHwRC9x.js";import{F as f}from"./for-Bky_3Tl1.js";import{B as i}from"./bold-icon-ruLw95-q.js";import"./grid-BkobzWyq.js";import"./grid-item-Cy-ugCgy.js";import"./flex-Col0vMQb.js";import"./heading-Cefe2Dmh.js";import"./icon-button-CbIbPDbj.js";import"./button-ByKXnJ56.js";import"./use-ripple-mP-I-Ewm.js";import"./rings-Dx-JdLv3.js";import"./index-Dp97PSmK.js";import"./use-field-props-DAwmxNtQ.js";import"./use-input-border-CR9ScwU8.js";import"./index-BAwTtQKG.js";import"./use-breakpoint-DJTFZdnw.js";import"./use-breakpoint-value-Dy8CsQBU.js";import"./use-color-mode-value-B677w30q.js";/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],L=_("underline",z),s=M(O)({as:L}),t=P(a=>{const[,{colorScheme:o,size:n,variant:c,attached:x,...y}]=E(a,"group",{transferProps:["size","variant","colorScheme"]}),{disabled:v,readOnly:j,value:h,getGroupProps:V,onChange:I,onChangeMapRef:S}=R(y),k=m.useMemo(()=>({colorScheme:o,size:n,variant:c,focusVisibleRing:x?"inside":void 0}),[c,n,o,x]),B=m.useMemo(()=>({disabled:v,readOnly:j,value:h,onChange:I,onChangeMapRef:S}),[h,v,j,I,S]);return e.jsx(U,{value:k,children:e.jsx(w,{value:B,children:e.jsx(F,{attached:x,...V()})})})},"group")(),ce={component:l,title:"Components / ToggleGroup"},u=()=>e.jsxs(t,{children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),g=()=>e.jsx(G,{columns:["ghost","subtle","surface","outline","solid"],rows:C,children:(a,o,n)=>e.jsxs(t,{colorScheme:o,variant:a,attached:!0,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),d=()=>e.jsx(G,{columns:["xs","sm","md","lg","xl"],rows:C,children:(a,o,n)=>e.jsxs(t,{colorScheme:o,size:a,attached:!0,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),b=()=>e.jsx(f,{each:["ghost","subtle","surface","outline","solid"],children:(a,o)=>e.jsxs(t,{variant:a,attached:!0,disabled:!0,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},o)}),p=()=>e.jsx(f,{each:["ghost","subtle","surface","outline","solid"],children:(a,o)=>e.jsxs(t,{variant:a,attached:!0,readOnly:!0,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},o)}),T=()=>{const[a,o]=m.useState(void 0),[n,c]=m.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:a,onChange:o,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),e.jsxs(t,{value:n,onChange:c,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(i,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(r,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ToggleGroup>
      <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
      <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
      <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
    </ToggleGroup>;
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup key={key} colorScheme={row} variant={column} attached>
            <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup>;
    }}
    </PropsTable>;
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup key={key} colorScheme={row} size={column} attached>
            <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup>;
    }}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup key={index} variant={variant} attached disabled>
          <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup>}
    </For>;
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup key={index} variant={variant} attached readOnly>
          <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup>}
    </For>;
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup>
    </>;
}`,...T.parameters?.docs?.source}}};const ue=["Basic","Variant","Size","Disabled","Readonly","CustomControl"];export{u as Basic,T as CustomControl,b as Disabled,p as Readonly,d as Size,g as Variant,ue as __namedExportsOrder,ce as default};
