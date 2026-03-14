import{d as A,ae as F,r as l,b as p,e as E,c as L,O as B,h as q,m as G,j as e,s as O,l as J,q as K}from"./iframe-BkSt7vyM.js";import{P as H}from"./props-table-DN3lVgaW.js";import{u as N}from"./index-CQxoNWT4.js";import{u as Q}from"./index-DPd3oLzm.js";import{c as U}from"./index-DkM6VrkO.js";import{L as X}from"./index-HQoGHlfe.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DmgtKOBh.js";import"./grid-item-DSqTnqMu.js";import"./for-B9rKCkzX.js";import"./flex-BpaptubY.js";import"./heading-CMTXcFtE.js";import"./use-breakpoint-40vW7z1m.js";import"./use-breakpoint-value-wrLKYw6K.js";import"./use-color-mode-value-ChW2w8QO.js";const Y=A({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":F.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{indicator:{rounded:"full"},item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[Z,$]=L({name:"SegmentedControlContext"}),{DescendantsContext:ee,useDescendant:te,useDescendants:ne}=U(),oe=({id:t,name:n,defaultValue:o,disabled:a,orientation:s="horizontal",readOnly:m,value:b,onChange:c,...v}={})=>{const C=l.useId(),[h,S]=Q({defaultValue:o,value:b,onChange:c}),u=ne();t??=C,n??=C;const r=l.useCallback(d=>({id:t,"aria-disabled":E(a),"aria-orientation":s,"data-disabled":p(a),"data-orientation":s,"data-readonly":p(m),role:"radiogroup",...v,...d}),[a,t,s,m,v]);return{id:t,name:n,descendants:u,disabled:a,orientation:s,readOnly:m,setValue:S,value:h,getRootProps:r}},ae=({disabled:t,readOnly:n,value:o,inputProps:a,...s})=>{const{name:m,disabled:b,orientation:c,readOnly:v,setValue:C,value:h}=$(),{register:S}=te({disabled:t||n}),u=o===h,r=t??b,d=n??v,f=!(d||r),y=l.useCallback(x=>{C(x.target.value)},[C]),w=l.useCallback(x=>({"aria-disabled":E(r),"data-checked":p(u),"data-disabled":p(r),"data-orientation":c,"data-readonly":p(d),"data-root-disabled":p(b),"data-root-readonly":p(v),...x,...s}),[c,r,d,u,b,v,s]),D=l.useCallback(({ref:x,...I}={})=>({type:"radio",name:m,style:B.style,"aria-disabled":E(r),"data-checked":p(u),"data-disabled":p(r),"data-orientation":c,"data-readonly":p(d),checked:u,disabled:r||d,readOnly:d,tabIndex:f?void 0:-1,value:o,...a,...I,ref:G(S,x),onChange:q(I.onChange,a?.onChange,y)}),[c,m,r,d,u,f,o,a,S,y]);return{checked:u,getInputProps:D,getLabelProps:w}},{ComponentContext:le,useComponentContext:re,withContext:T,withProvider:se}=J("segmented-control",Y),i=se(({children:t,items:n=[],orientation:o,indicatorProps:a,itemProps:s,...m})=>{const b=N(o),{id:c,name:v,descendants:C,disabled:h,orientation:S,readOnly:u,setValue:r,value:d,getRootProps:f}=oe({orientation:b,...m}),y=l.useMemo(()=>t||n.map(({label:x,...I},W)=>e.jsx(g,{...I,children:x},W)),[t,n]),w=l.useMemo(()=>({id:c,name:v,disabled:h,orientation:S,readOnly:u,setValue:r,value:d}),[c,v,h,u,S,r,d]),D=l.useMemo(()=>({indicatorProps:a,itemProps:s}),[s,a]);return e.jsx(Z,{value:w,children:e.jsx(le,{value:D,children:e.jsx(ee,{value:C,children:e.jsx(X,{id:c,children:e.jsx(O.div,{...f(),children:y})})})})})},"root",{transferProps:["orientation"]})(),g=T(({children:t,indicatorProps:n,...o})=>{const{checked:a,getInputProps:s,getLabelProps:m}=ae(o);return e.jsxs(O.label,{...m(),children:[e.jsx(O.input,{...s()}),e.jsx(O.span,{children:t}),a?e.jsx(de,{...n}):null]})},"item")(t=>{const{indicatorProps:n,itemProps:o}=re();return{...o,...t,indicatorProps:{...n,...o?.indicatorProps,...t.indicatorProps}}}),de=T(({transition:t,...n})=>e.jsx(K.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...n}),"indicator")(),je={component:i,title:"Components / SegmentedControl"},j=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]}),R=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["sm","md","lg","xl"],children:(n,o,a)=>e.jsx(i,{size:o,defaultValue:"ハチワレ",items:t},a)})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(H,{variant:"stack",rows:["horizontal","vertical"],children:(n,o,a)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:o},a)})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},P=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},M=()=>{const[t,n]=l.useState("ハチワレ"),o=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:o,value:t,onChange:n})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};const Re=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{j as Basic,M as CustomControl,k as Disabled,_ as FullRounded,R as Items,z as Orientation,P as ReadOnly,V as Size,Re as __namedExportsOrder,je as default};
