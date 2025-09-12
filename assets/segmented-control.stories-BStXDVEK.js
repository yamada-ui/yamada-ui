import{d as T,U as W,c as A,r as a,b as u,e as x,h as F,m as B,H as L,g as N,j as e,s as M}from"./iframe-Bn8cMbTR.js";import{P as E}from"./props-table-BxRkBYtX.js";import{u as U}from"./index-BcSg2jSG.js";import{u as q}from"./index-DxOQ1YS9.js";import{c as G}from"./index-O_M9yVN3.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DGlXmtIK.js";import"./grid-item-UPArcUwJ.js";import"./for-DbXOaV0m.js";import"./flex-MN_M9PAs.js";import"./heading-Dcpj3_ac.js";import"./use-breakpoint-eUizr5Li.js";import"./use-breakpoint-value-ItGV-DAn.js";import"./use-color-mode-value-bM_ELEgZ.js";const J=T({base:{item:{"&:has(input:focus-visible)":{...W.outline},alignItems:"center",color:"fg",cursor:"pointer",display:"inline-flex",flex:"1 1 0%",fontWeight:"medium",justifyContent:"center",position:"relative",rounded:"md",transitionDuration:"moderate",transitionProperty:"color, opacity",whiteSpace:"nowrap",_checked:{anchorName:"--checked"},_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",anchorScope:"--checked",bg:["bg.ghost","bg.subtle"],display:"inline-flex",p:"1",rounded:"lg",_before:{bg:"bg.panel",boxShadow:"xs",h:"anchor-size(--checked height)",left:"anchor(--checked left)",pointerEvents:"none",position:"absolute",rounded:"md",top:"anchor(--checked top)",transitionDuration:"moderate",w:"anchor-size(--checked width)"},_dark:{_before:{bg:"bg.muted"}},_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"},_vertical:{}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"},_vertical:{}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"},_vertical:{}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[K,Q]=A({name:"SegmentedControlContext"}),{DescendantsContext:X,useDescendant:Y,useDescendants:Z}=G(),$=({id:t,name:l,defaultValue:o,disabled:n,orientation:c="horizontal",readOnly:p,value:b,onChange:v,...g}={})=>{const C=a.useId(),[h,S]=q({defaultValue:o,value:b,onChange:v}),i=Z();t??=C,l??=C;const s=a.useCallback(r=>({id:t,"aria-disabled":x(n),"aria-orientation":c,"data-disabled":u(n),"data-orientation":c,"data-readonly":u(p),role:"radiogroup",...g,...r}),[n,t,c,p,g]);return{id:t,name:l,descendants:i,disabled:n,orientation:c,readOnly:p,setValue:S,value:h,getRootProps:s}},ee=({disabled:t,readOnly:l,value:o,inputProps:n,...c})=>{const{name:p,disabled:b,orientation:v,readOnly:g,setValue:C,value:h}=Q(),{register:S}=Y({disabled:t||l}),i=o===h,s=t??b,r=l??g,y=!(r||s),R=a.useCallback(f=>{C(f.target.value)},[C]),O=a.useCallback(f=>({"aria-disabled":x(s),"aria-readonly":x(r),"data-checked":u(i),"data-disabled":u(s),"data-orientation":v,"data-readonly":u(r),"data-root-disabled":u(b),"data-root-readonly":u(g),...f,...c}),[v,s,r,i,b,g,c]);return{getInputProps:a.useCallback(({ref:f,...H}={})=>({type:"radio",name:p,style:L.style,"aria-disabled":x(s),"aria-readonly":x(r),"data-checked":u(i),"data-disabled":u(s),"data-orientation":v,"data-readonly":u(r),checked:i,disabled:s||r,readOnly:r,tabIndex:y?void 0:-1,value:o,...n,...H,ref:B(S,f),onChange:F(H.onChange,n?.onChange,R)}),[v,p,s,r,i,y,o,n,S,R]),getLabelProps:O}},{withContext:te,withProvider:ne}=N("segmented-control",J),d=ne(({children:t,items:l=[],orientation:o,...n})=>{const c=U(o),{id:p,name:b,descendants:v,disabled:g,orientation:C,readOnly:h,setValue:S,value:i,getRootProps:s}=$({orientation:c,...n}),r=a.useMemo(()=>t||l.map(({label:R,...O},D)=>e.jsx(m,{...O,children:R},D)),[t,l]),y=a.useMemo(()=>({id:p,name:b,disabled:g,orientation:C,readOnly:h,setValue:S,value:i}),[p,b,g,h,C,S,i]);return e.jsx(K,{value:y,children:e.jsx(X,{value:v,children:e.jsx(M.div,{...s(),children:r})})})},"root",{transferProps:["orientation"]})(),m=te(({children:t,...l})=>{const{getInputProps:o,getLabelProps:n}=ee(l);return e.jsxs(M.label,{...n(),children:[e.jsx(M.input,{...o()}),e.jsx(M.span,{children:t})]})},"item")(),Ce={component:d,title:"Components / SegmentedControl"},j=()=>e.jsxs(d,{defaultValue:"ハチワレ",children:[e.jsx(m,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(m,{value:"うさぎ",children:"うさぎ"}),e.jsx(m,{value:"モモンガ",children:"モモンガ"})]}),I=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(d,{defaultValue:"ハチワレ",items:t})},_=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(E,{variant:"stack",rows:["sm","md","lg","xl"],children:(l,o,n)=>e.jsx(d,{size:o,defaultValue:"ハチワレ",items:t},n)})},V=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(E,{variant:"stack",rows:["horizontal","vertical"],children:(l,o,n)=>e.jsx(d,{defaultValue:"ハチワレ",items:t,orientation:o},n)})},k=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(d,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},P=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(d,{defaultValue:"ハチワレ",children:[e.jsx(m,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(m,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(m,{value:"モモンガ",children:"モモンガ"})]})]})},z=()=>{const t=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(d,{defaultValue:"ハチワレ",children:[e.jsx(m,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(m,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(m,{value:"モモンガ",children:"モモンガ"})]})]})},w=()=>{const[t,l]=a.useState("ハチワレ"),o=a.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(d,{items:o,value:t,onChange:l})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
      <SegmentedControl.Root defaultValue="ハチワレ" items={items} readOnly />

      <SegmentedControl.Root defaultValue="ハチワレ">
        <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
        <SegmentedControl.Item readOnly value="うさぎ">
          うさぎ
        </SegmentedControl.Item>
        <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>;
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};const Se=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{j as Basic,w as CustomControl,P as Disabled,k as FullRounded,I as Items,V as Orientation,z as ReadOnly,_ as Size,Se as __namedExportsOrder,Ce as default};
