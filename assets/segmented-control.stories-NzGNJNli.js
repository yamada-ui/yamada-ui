import{d as W,a3 as A,c as F,r as l,b as c,e as f,h as L,m as B,O as G,g as q,j as e,s as w,t as J}from"./iframe-5QspZtQ-.js";import{P as H}from"./props-table-DAC1ISVp.js";import{u as K}from"./index-BYvBzSg1.js";import{u as N}from"./index-xocwRrSJ.js";import{c as Q}from"./index-CVctQ1CM.js";import{L as U}from"./index-KlSfPXfw.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./for-DDltKb5N.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";import"./use-breakpoint-chaUVSrh.js";import"./use-breakpoint-value-zlcrtcvs.js";import"./use-color-mode-value-BafFs7oa.js";const X=W({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":A.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[Y,Z]=F({name:"SegmentedControlContext"}),{DescendantsContext:$,useDescendant:ee,useDescendants:te}=Q(),ne=({id:t,name:n,defaultValue:a,disabled:o,orientation:d="horizontal",readOnly:m,value:b,onChange:v,...g}={})=>{const S=l.useId(),[x,C]=N({defaultValue:a,value:b,onChange:v}),u=te();t??=S,n??=S;const s=l.useCallback(r=>({id:t,"aria-disabled":f(o),"aria-orientation":d,"data-disabled":c(o),"data-orientation":d,"data-readonly":c(m),role:"radiogroup",...g,...r}),[o,t,d,m,g]);return{id:t,name:n,descendants:u,disabled:o,orientation:d,readOnly:m,setValue:C,value:x,getRootProps:s}},oe=({disabled:t,readOnly:n,value:a,inputProps:o,...d})=>{const{name:m,disabled:b,orientation:v,readOnly:g,setValue:S,value:x}=Z(),{register:C}=ee({disabled:t||n}),u=a===x,s=t??b,r=n??g,y=!(r||s),j=l.useCallback(h=>{S(h.target.value)},[S]),M=l.useCallback(h=>({"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":c(u),"data-disabled":c(s),"data-orientation":v,"data-readonly":c(r),"data-root-disabled":c(b),"data-root-readonly":c(g),...h,...d}),[v,s,r,u,b,g,d]),D=l.useCallback(({ref:h,...E}={})=>({type:"radio",name:m,style:G.style,"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":c(u),"data-disabled":c(s),"data-orientation":v,"data-readonly":c(r),checked:u,disabled:s||r,readOnly:r,tabIndex:y?void 0:-1,value:a,...o,...E,ref:B(C,h),onChange:L(E.onChange,o?.onChange,j)}),[v,m,s,r,u,y,a,o,C,j]);return{checked:u,getInputProps:D,getLabelProps:M}},{withContext:T,withProvider:ae}=q("segmented-control",X),i=ae(({children:t,items:n=[],orientation:a,...o})=>{const d=K(a),{id:m,name:b,descendants:v,disabled:g,orientation:S,readOnly:x,setValue:C,value:u,getRootProps:s}=ne({orientation:d,...o}),r=l.useMemo(()=>t||n.map(({label:j,...M},D)=>e.jsx(p,{...M,children:j},D)),[t,n]),y=l.useMemo(()=>({id:m,name:b,disabled:g,orientation:S,readOnly:x,setValue:C,value:u}),[m,b,g,x,S,C,u]);return e.jsx(Y,{value:y,children:e.jsx($,{value:v,children:e.jsx(U,{id:m,children:e.jsx(w.div,{...s(),children:r})})})})},"root",{transferProps:["orientation"]})(),p=T(({children:t,...n})=>{const{checked:a,getInputProps:o,getLabelProps:d}=oe(n);return e.jsxs(w.label,{...d(),children:[e.jsx(w.input,{...o()}),e.jsx(w.span,{children:t}),a?e.jsx(le,{}):null]})},"item")(),le=T(({transition:t,...n})=>e.jsx(J.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...n}),"indicator")(),fe={component:i,title:"Components / SegmentedControl"},R=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(p,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(p,{value:"うさぎ",children:"うさぎ"}),e.jsx(p,{value:"モモンガ",children:"モモンガ"})]}),I=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["sm","md","lg","xl"],children:(n,a,o)=>e.jsx(i,{size:a,defaultValue:"ハチワレ",items:t},o)})},P=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["horizontal","vertical"],children:(n,a,o)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:a},o)})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(p,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(p,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(p,{value:"モモンガ",children:"モモンガ"})]})]})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(p,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(p,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(p,{value:"モモンガ",children:"モモンガ"})]})]})},O=()=>{const[t,n]=l.useState("ハチワレ"),a=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:a,value:t,onChange:n})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <SegmentedControl.Root key={key} size={row} defaultValue="ハチワレ" items={items} />}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
  return <SegmentedControl.Root defaultValue="ハチワレ" fullRounded items={items} />;
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};const ye=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{R as Basic,O as CustomControl,_ as Disabled,z as FullRounded,I as Items,P as Orientation,k as ReadOnly,V as Size,ye as __namedExportsOrder,fe as default};
