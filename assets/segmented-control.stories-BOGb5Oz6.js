import{d as W,a3 as A,c as F,r as l,b as c,e as f,h as L,m as B,O as G,g as q,j as e,s as M,t as J}from"./iframe-D0k82VKj.js";import{P as H}from"./props-table-CTaVRFRo.js";import{u as K}from"./index-BbBQJmyS.js";import{u as N}from"./index-Bb9gnTOn.js";import{c as Q}from"./index-CHt3lkje.js";import{L as U}from"./index-BRg0U5ih.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-W2jtEO_S.js";import"./grid-item-BEXtmAs-.js";import"./for-VxQ1P6BR.js";import"./flex-DfSuxPUO.js";import"./heading-Z6IrjMgv.js";import"./use-breakpoint-CrBfJ-6O.js";import"./use-breakpoint-value-pZKkBl49.js";import"./use-color-mode-value-bOkTOA4p.js";const X=W({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":A.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[Y,Z]=F({name:"SegmentedControlContext"}),{DescendantsContext:$,useDescendant:ee,useDescendants:te}=Q(),ne=({id:t,name:n,defaultValue:a,disabled:o,orientation:d="horizontal",readOnly:m,value:b,onChange:v,...p}={})=>{const S=l.useId(),[x,C]=N({defaultValue:a,value:b,onChange:v}),u=te();t??=S,n??=S;const s=l.useCallback(r=>({id:t,"aria-disabled":f(o),"aria-orientation":d,"data-disabled":c(o),"data-orientation":d,"data-readonly":c(m),role:"radiogroup",...p,...r}),[o,t,d,m,p]);return{id:t,name:n,descendants:u,disabled:o,orientation:d,readOnly:m,setValue:C,value:x,getRootProps:s}},oe=({disabled:t,readOnly:n,value:a,inputProps:o,...d})=>{const{name:m,disabled:b,orientation:v,readOnly:p,setValue:S,value:x}=Z(),{register:C}=ee({disabled:t||n}),u=a===x,s=t??b,r=n??p,y=!(r||s),I=l.useCallback(h=>{S(h.target.value)},[S]),P=l.useCallback(h=>({"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":c(u),"data-disabled":c(s),"data-orientation":v,"data-readonly":c(r),"data-root-disabled":c(b),"data-root-readonly":c(p),...h,...d}),[v,s,r,u,b,p,d]),D=l.useCallback(({ref:h,...E}={})=>({type:"radio",name:m,style:G.style,"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":c(u),"data-disabled":c(s),"data-orientation":v,"data-readonly":c(r),checked:u,disabled:s||r,readOnly:r,tabIndex:y?void 0:-1,value:a,...o,...E,ref:B(C,h),onChange:L(E.onChange,o?.onChange,I)}),[v,m,s,r,u,y,a,o,C,I]);return{checked:u,getInputProps:D,getLabelProps:P}},{withContext:T,withProvider:ae}=q("segmented-control",X),i=ae(({children:t,items:n=[],orientation:a,...o})=>{const d=K(a),{id:m,name:b,descendants:v,disabled:p,orientation:S,readOnly:x,setValue:C,value:u,getRootProps:s}=ne({orientation:d,...o}),r=l.useMemo(()=>t||n.map(({label:I,...P},D)=>e.jsx(g,{...P,children:I},D)),[t,n]),y=l.useMemo(()=>({id:m,name:b,disabled:p,orientation:S,readOnly:x,setValue:C,value:u}),[m,b,p,x,S,C,u]);return e.jsx(Y,{value:y,children:e.jsx($,{value:v,children:e.jsx(U,{id:m,children:e.jsx(M.div,{...s(),children:r})})})})},"root",{transferProps:["orientation"]})(),g=T(({children:t,...n})=>{const{checked:a,getInputProps:o,getLabelProps:d}=oe(n);return e.jsxs(M.label,{...d(),children:[e.jsx(M.input,{...o()}),e.jsx(M.span,{children:t}),a?e.jsx(le,{}):null]})},"item")(),le=T(({transition:t,...n})=>e.jsx(J.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...n}),"indicator")(),fe={component:i,title:"Components / SegmentedControl"},j=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]}),R=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["sm","md","lg","xl"],children:(n,a,o)=>e.jsx(i,{size:a,defaultValue:"ハチワレ",items:t},o)})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["horizontal","vertical"],children:(n,a,o)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:a},o)})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},O=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},w=()=>{const[t,n]=l.useState("ハチワレ"),a=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:a,value:t,onChange:n})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("ハチワレ");
  const items = useMemo<SegmentedControl.Item[]>(() => [{
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
}`,...w.parameters?.docs?.source}}};const ye=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{j as Basic,w as CustomControl,k as Disabled,_ as FullRounded,R as Items,z as Orientation,O as ReadOnly,V as Size,ye as __namedExportsOrder,fe as default};
