import{d as T,aC as W,c as A,r as a,a as i,b as y,h as F,m as B,ax as L,f as N,j as e,s as O}from"./iframe-DqV1pF0Y.js";import{P as H}from"./props-table-D14vFRWA.js";import{u as q}from"./index-tKPH2zoG.js";import{u as G}from"./index-u2jbJpoe.js";import{c as J}from"./index-BDjDR5hR.js";import"./grid-DVIWBgtE.js";import"./grid-item-eH7jfJXq.js";import"./for-Jc9KR5-P.js";import"./flex-BBgO32zm.js";import"./heading-Bb3j_Ov5.js";import"./use-breakpoint-C0qheGjm.js";import"./use-breakpoint-value-DSoUfoVJ.js";import"./use-color-mode-value-CfexdzMu.js";const K=T({base:{item:{"&:has(input:focus-visible)":{...W.outline},alignItems:"center",color:"fg",cursor:"pointer",display:"inline-flex",flex:"1 1 0%",fontWeight:"medium",justifyContent:"center",position:"relative",rounded:"md",transitionDuration:"moderate",transitionProperty:"color, opacity",whiteSpace:"nowrap",_checked:{anchorName:"--checked"},_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",anchorScope:"--checked",bg:["bg.ghost","bg.subtle"],display:"inline-flex",p:"1",rounded:"lg",_before:{bg:"bg.panel",boxShadow:"xs",h:"anchor-size(--checked height)",left:"anchor(--checked left)",pointerEvents:"none",position:"absolute",rounded:"md",top:"anchor(--checked top)",transitionDuration:"moderate",transitionProperty:"top, left, width",w:"anchor-size(--checked width)"},_dark:{_before:{bg:"bg.muted"}},_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row"}},vertical:{item:{w:"full"},root:{flexDirection:"column"}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"},_vertical:{}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"},_vertical:{}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"},_vertical:{}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[Q,U]=A({name:"SegmentedControlContext"}),{DescendantsContext:X,useDescendant:Y,useDescendants:Z}=J(),$=({id:t,name:l,defaultValue:o,disabled:n,orientation:m="horizontal",readOnly:c,value:b,onChange:v,...p}={})=>{const C=a.useId(),[x,S]=G({defaultValue:o,value:b,onChange:v}),h=Z();t??=C,l??=C;const g=a.useCallback(r=>({id:t,"aria-disabled":y(n),"aria-orientation":m,"data-disabled":i(n),"data-orientation":m,"data-readonly":i(c),role:"radiogroup",...p,...r}),[n,t,m,c,p]);return{id:t,name:l,descendants:h,disabled:n,orientation:m,readOnly:c,setValue:S,value:x,getRootProps:g}},ee=({disabled:t,readOnly:l,value:o,inputProps:n,...m})=>{const{name:c,disabled:b,orientation:v,readOnly:p,setValue:C,value:x}=U(),{index:S,register:h}=Y({disabled:t||l}),g=o===x,r=t??b,s=l??p,R=!(s||r),j=a.useCallback(f=>{C(f.target.value)},[C]),D=a.useCallback(f=>({"aria-disabled":y(r),"aria-readonly":y(s),"data-checked":i(g),"data-disabled":i(r),"data-index":S.toString(),"data-orientation":v,"data-readonly":i(s),"data-root-disabled":i(b),"data-root-readonly":i(p),...f,...m}),[v,r,S,s,g,b,p,m]);return{getInputProps:a.useCallback(({ref:f,...E}={})=>({type:"radio",name:c,style:L.style,"aria-disabled":y(r),"aria-readonly":y(s),"data-checked":i(g),"data-disabled":i(r),"data-orientation":v,"data-readonly":i(s),checked:g,disabled:r||s,readOnly:s,tabIndex:R?void 0:-1,value:o,...n,...E,ref:B(h,f),onChange:F(E.onChange,n?.onChange,j)}),[v,c,r,s,g,R,o,n,h,j]),getLabelProps:D}},{withContext:te,withProvider:ne}=N("segmented-control",K),d=ne(({children:t,items:l=[],orientation:o,...n})=>{const m=q(o),{id:c,name:b,descendants:v,disabled:p,orientation:C,readOnly:x,setValue:S,value:h,getRootProps:g}=$({orientation:m,...n}),r=a.useMemo(()=>t||l.map(({label:R,...j},D)=>e.jsx(u,{...j,children:R},D)),[t,l]),s=a.useMemo(()=>({id:c,name:b,disabled:p,orientation:C,readOnly:x,setValue:S,value:h}),[c,b,p,x,C,S,h]);return e.jsx(Q,{value:s,children:e.jsx(X,{value:v,children:e.jsx(O.div,{...g(),children:r})})})},"root",{transferProps:["orientation"]})(),u=te(({children:t,...l})=>{const{getInputProps:o,getLabelProps:n}=ee(l);return e.jsxs(O.label,{...n(),children:[e.jsx(O.input,{...o()}),e.jsx(O.span,{children:t})]})},"item")(),Ce={component:d,title:"Components / SegmentedControl"},I=()=>e.jsxs(d,{defaultValue:"ハチワレ",children:[e.jsx(u,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(u,{value:"うさぎ",children:"うさぎ"}),e.jsx(u,{value:"モモンガ",children:"モモンガ"})]}),V=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(d,{defaultValue:"ハチワレ",items:t})},_=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["sm","md","lg","xl"],children:(l,o,n)=>e.jsx(d,{size:o,defaultValue:"ハチワレ",items:t},n)})},k=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["horizontal","vertical"],children:(l,o,n)=>e.jsx(d,{defaultValue:"ハチワレ",items:t,orientation:o},n)})},P=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(d,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},z=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(d,{defaultValue:"ハチワレ",children:[e.jsx(u,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(u,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(u,{value:"モモンガ",children:"モモンガ"})]})]})},w=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(d,{defaultValue:"ハチワレ",children:[e.jsx(u,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(u,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(u,{value:"モモンガ",children:"モモンガ"})]})]})},M=()=>{const[t,l]=a.useState("ハチワレ"),o=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(d,{items:o,value:t,onChange:l})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <SegmentedControl.Root defaultValue="ハチワレ" items={items} />;
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <SegmentedControl.Root key={key} size={row} defaultValue="ハチワレ" items={items} />}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => <SegmentedControl.Root key={key} defaultValue="ハチワレ" items={items} orientation={row} />}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <SegmentedControl.Root defaultValue="ハチワレ" fullRounded items={items} />;
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <>
      <SegmentedControl.Root defaultValue="ハチワレ" disabled items={items} />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item disabled value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>;
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <>
      <SegmentedControl.Root defaultValue="ハチワレ" items={items} readOnly />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item readOnly value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>;
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("ハチワレ");
  const items = useMemo<SegmentedControl.RootProps["items"]>(() => [{
    label: "ハチワレ",
    value: "ハチワレ"
  }, {
    label: "うさぎ",
    value: "うさぎ"
  }, {
    label: "モモンガ",
    value: "モモンガ"
  }], []);
  return <SegmentedControl.Root items={items} value={value} onChange={setValue} />;
}`,...M.parameters?.docs?.source}}};const Se=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{I as Basic,M as CustomControl,z as Disabled,P as FullRounded,V as Items,k as Orientation,w as ReadOnly,_ as Size,Se as __namedExportsOrder,Ce as default};
