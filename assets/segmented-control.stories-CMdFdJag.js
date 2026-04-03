import{k as W,bK as A,r as l,Z as p,bq as E,q as L,a4 as q,a1 as B,v as G,j as e,F as w,G as K,ag as Z}from"./iframe-Gd2wA5UH.js";import{P as F}from"./props-table-hQP5Z1dz.js";import{u as J}from"./index-B69f71zK.js";import{u as N}from"./index-BLsJQ0sw.js";import{c as Q}from"./index-CFdyC3JI.js";import{L as U}from"./index-yrl3zZu_.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CakiebxH.js";import"./grid-item-Dj5TeVSg.js";import"./for-C62laByO.js";import"./flex-mFnSfPNF.js";import"./heading-CalVy3eO.js";import"./use-breakpoint-_TvgYbTn.js";import"./use-breakpoint-value-M3SNOELf.js";import"./use-color-mode-value-BkyTpO3Y.js";const X=W({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":A.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{indicator:{rounded:"full"},item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[Y,$]=L({name:"SegmentedControlContext"}),{DescendantsContext:ee,useDescendant:te,useDescendants:ne}=Q(),oe=({id:t,name:n,defaultValue:o,disabled:a,orientation:s="horizontal",readOnly:m,value:b,onChange:c,...v}={})=>{const C=l.useId(),[f,S]=N({defaultValue:o,value:b,onChange:c}),u=ne();t??=C,n??=C;const r=l.useCallback(d=>({id:t,"aria-disabled":E(a),"aria-orientation":s,"data-disabled":p(a),"data-orientation":s,"data-readonly":p(m),role:"radiogroup",...v,...d}),[a,t,s,m,v]);return{id:t,name:n,descendants:u,disabled:a,orientation:s,readOnly:m,setValue:S,value:f,getRootProps:r}},ae=({disabled:t,readOnly:n,value:o,inputProps:a,...s})=>{const{name:m,disabled:b,orientation:c,readOnly:v,setValue:C,value:f}=$(),{register:S}=te({disabled:t||n}),u=o===f,r=t??b,d=n??v,h=!(d||r),y=l.useCallback(x=>{C(x.target.value)},[C]),O=l.useCallback(x=>({"aria-disabled":E(r),"data-checked":p(u),"data-disabled":p(r),"data-orientation":c,"data-readonly":p(d),"data-root-disabled":p(b),"data-root-readonly":p(v),...x,...s}),[c,r,d,u,b,v,s]),D=l.useCallback(({ref:x,...I}={})=>({type:"radio",name:m,style:q.style,"aria-disabled":E(r),"data-checked":p(u),"data-disabled":p(r),"data-orientation":c,"data-readonly":p(d),checked:u,disabled:r||d,readOnly:d,tabIndex:h?void 0:-1,value:o,...a,...I,ref:G(S,x),onChange:B(I.onChange,a?.onChange,y)}),[c,m,r,d,u,h,o,a,S,y]);return{checked:u,getInputProps:D,getLabelProps:O}},{ComponentContext:le,useComponentContext:re,withContext:H,withProvider:se}=K("segmented-control",X),i=se(({children:t,items:n=[],orientation:o,indicatorProps:a,itemProps:s,...m})=>{const b=J(o),{id:c,name:v,descendants:C,disabled:f,orientation:S,readOnly:u,setValue:r,value:d,getRootProps:h}=oe({orientation:b,...m}),y=l.useMemo(()=>t||n.map(({label:x,...I},T)=>e.jsx(g,{...I,children:x},T)),[t,n]),O=l.useMemo(()=>({id:c,name:v,disabled:f,orientation:S,readOnly:u,setValue:r,value:d}),[c,v,f,u,S,r,d]),D=l.useMemo(()=>({indicatorProps:a,itemProps:s}),[s,a]);return e.jsx(Y,{value:O,children:e.jsx(le,{value:D,children:e.jsx(ee,{value:C,children:e.jsx(U,{id:c,children:e.jsx(w.div,{...h(),children:y})})})})})},"root",{transferProps:["orientation"]})(),g=H(({children:t,indicatorProps:n,...o})=>{const{checked:a,getInputProps:s,getLabelProps:m}=ae(o);return e.jsxs(w.label,{...m(),children:[e.jsx(w.input,{...s()}),e.jsx(w.span,{children:t}),a?e.jsx(de,{...n}):null]})},"item")(t=>{const{indicatorProps:n,itemProps:o}=re();return{...o,...t,indicatorProps:{...n,...o?.indicatorProps,...t.indicatorProps}}}),de=H(({transition:t,...n})=>e.jsx(Z.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...n}),"indicator")(),je={component:i,title:"Components / SegmentedControl"},j=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]}),R=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(F,{variant:"stack",rows:["sm","md","lg","xl"],children:(n,o,a)=>e.jsx(i,{size:o,defaultValue:"ハチワレ",items:t},a)})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(F,{variant:"stack",rows:["horizontal","vertical"],children:(n,o,a)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:o},a)})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},P=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},M=()=>{const[t,n]=l.useState("ハチワレ"),o=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:o,value:t,onChange:n})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
