import{n as K,o as Q,I as W,r as T,j as e,C as H}from"./iframe-DaVT7dxo.js";import{P as D}from"./props-table-c8iwS7A1.js";import{c as X,u as Y,a as Z,T as ee,b as oe,d as o,I as i}from"./toggle-Dawp3SHi.js";import{F as N}from"./for-CMUOzp-w.js";import{G as le}from"./group-C9yD-cpG.js";import{B as t}from"./bold-icon-gVPZ-Rp2.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Cjbr-zPO.js";import"./grid-item-BPeiKHRL.js";import"./flex-XAtIsEC9.js";import"./heading-DKCzfUaM.js";import"./index-3228ODx_.js";import"./use-field-props-BTZiGdm1.js";import"./use-input-border-DrntMMng.js";import"./index-CUCGStop.js";import"./use-breakpoint-Da_vq4mi.js";import"./use-breakpoint-value-DTMKKZtH.js";import"./use-color-mode-value-KEDQyVks.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],ne=K("underline",ae),s=Q(W)({as:ne}),r=X(a=>{const[,{colorScheme:l,size:n,variant:c,attached:x,...$}]=Y(a,"group",{transferProps:["size","variant","colorScheme"]}),{disabled:v,readOnly:j,value:I,getGroupProps:q,onChange:h,onChangeMapRef:G}=Z($),A=T.useMemo(()=>({colorScheme:l,size:n,variant:c,focusVisibleRing:x?"inside":void 0}),[c,n,l,x]),J=T.useMemo(()=>({disabled:v,readOnly:j,value:I,onChange:h,onChangeMapRef:G}),[I,v,j,h,G]);return e.jsx(ee,{value:A,children:e.jsx(oe,{value:J,children:e.jsx(le,{attached:x,...q()})})})},"group")(),Se={component:r,title:"Components / ToggleGroup"},u=()=>e.jsxs(r,{children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),g=()=>e.jsx(D,{columns:["ghost","subtle","surface","outline","solid"],rows:H,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,variant:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),d=()=>e.jsx(D,{columns:["xs","sm","md","lg","xl"],rows:H,children:(a,l,n)=>e.jsxs(r,{colorScheme:l,size:a,attached:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},n)}),p=()=>e.jsx(N,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,disabled:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),m=()=>e.jsx(N,{each:["ghost","subtle","surface","outline","solid"],children:(a,l)=>e.jsxs(r,{variant:a,attached:!0,readOnly:!0,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]},l)}),b=()=>{const[a,l]=T.useState(void 0),[n,c]=T.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{value:a,onChange:l,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]}),e.jsxs(r,{value:n,onChange:c,children:[e.jsx(o,{"aria-label":"Toggle bold",icon:e.jsx(t,{}),value:"bold"}),e.jsx(o,{"aria-label":"Toggle italic",icon:e.jsx(i,{}),value:"italic"}),e.jsx(o,{"aria-label":"Toggle underline",icon:e.jsx(s,{}),value:"underline"})]})]})};var S,R,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <ToggleGroup.Root>
      <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
      <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
      <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
    </ToggleGroup.Root>;
}`,...(C=(R=u.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var f,y,V;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <PropsTable columns={["ghost", "subtle", "surface", "outline", "solid"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup.Root key={key} colorScheme={row} variant={column} attached>
            <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup.Root>;
    }}
    </PropsTable>;
}`,...(V=(y=g.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var O,k,B;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ToggleGroup.Root key={key} colorScheme={row} size={column} attached>
            <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
            <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
          </ToggleGroup.Root>;
    }}
    </PropsTable>;
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var M,P,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup.Root key={index} variant={variant} attached disabled>
          <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup.Root>}
    </For>;
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var U,w,F;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => <ToggleGroup.Root key={index} variant={variant} attached readOnly>
          <ToggleGroup.Item aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <ToggleGroup.Item aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
          <ToggleGroup.Item aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
        </ToggleGroup.Root>}
    </For>;
}`,...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var _,z,L;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(L=(z=b.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const Re=["Basic","Variant","Size","Disabled","ReadOnly","CustomControl"];export{u as Basic,b as CustomControl,p as Disabled,m as ReadOnly,d as Size,g as Variant,Re as __namedExportsOrder,Se as default};
