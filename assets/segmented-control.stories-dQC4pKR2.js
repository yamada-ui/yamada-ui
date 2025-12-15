import{d as de,a3 as ue,c as ie,r as l,b as c,e as f,h as me,m as ce,O as ge,g as be,j as e,s as M,t as ve}from"./iframe-C1QqsVA9.js";import{P as re}from"./props-table-CLqbYtSs.js";import{u as pe}from"./index-BSgcRBWk.js";import{u as Se}from"./index-CuD_K0yg.js";import{c as Ce}from"./index-7fSqCk3c.js";import{L as xe}from"./index-D7SCetxb.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DHpvRiol.js";import"./grid-item-Cxe7QMy1.js";import"./for-Be_orN7T.js";import"./flex-Bs-NHhmm.js";import"./heading-V-V_Ybpq.js";import"./use-breakpoint-CoNcer5t.js";import"./use-breakpoint-value-D2WNVgM0.js";import"./use-color-mode-value-CLV_hip_.js";const he=de({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":ue.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[fe,ye]=ie({name:"SegmentedControlContext"}),{DescendantsContext:Ie,useDescendant:je,useDescendants:Re}=Ce(),Ve=({id:t,name:o,defaultValue:a,disabled:n,orientation:d="horizontal",readOnly:m,value:v,onChange:p,...b}={})=>{const S=l.useId(),[x,C]=Se({defaultValue:a,value:v,onChange:p}),u=Re();t??(t=S),o??(o=S);const s=l.useCallback(r=>({id:t,"aria-disabled":f(n),"aria-orientation":d,"data-disabled":c(n),"data-orientation":d,"data-readonly":c(m),role:"radiogroup",...b,...r}),[n,t,d,m,b]);return{id:t,name:o,descendants:u,disabled:n,orientation:d,readOnly:m,setValue:C,value:x,getRootProps:s}},ze=({disabled:t,readOnly:o,value:a,inputProps:n,...d})=>{const{name:m,disabled:v,orientation:p,readOnly:b,setValue:S,value:x}=ye(),{register:C}=je({disabled:t||o}),u=a===x,s=t??v,r=o??b,y=!(r||s),I=l.useCallback(h=>{S(h.target.value)},[S]),D=l.useCallback(h=>({"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":c(u),"data-disabled":c(s),"data-orientation":p,"data-readonly":c(r),"data-root-disabled":c(v),"data-root-readonly":c(b),...h,...d}),[p,s,r,u,v,b,d]),P=l.useCallback(({ref:h,...E}={})=>({type:"radio",name:m,style:ge.style,"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":c(u),"data-disabled":c(s),"data-orientation":p,"data-readonly":c(r),checked:u,disabled:s||r,readOnly:r,tabIndex:y?void 0:-1,value:a,...n,...E,ref:ce(C,h),onChange:me(E.onChange,n==null?void 0:n.onChange,I)}),[p,m,s,r,u,y,a,n,C,I]);return{checked:u,getInputProps:P,getLabelProps:D}},{withContext:se,withProvider:_e}=be("segmented-control",he),i=_e(({children:t,items:o=[],orientation:a,...n})=>{const d=pe(a),{id:m,name:v,descendants:p,disabled:b,orientation:S,readOnly:x,setValue:C,value:u,getRootProps:s}=Ve({orientation:d,...n}),r=l.useMemo(()=>t||o.map(({label:I,...D},P)=>e.jsx(g,{...D,children:I},P)),[t,o]),y=l.useMemo(()=>({id:m,name:v,disabled:b,orientation:S,readOnly:x,setValue:C,value:u}),[m,v,b,x,S,C,u]);return e.jsx(fe,{value:y,children:e.jsx(Ie,{value:p,children:e.jsx(xe,{id:m,children:e.jsx(M.div,{...s(),children:r})})})})},"root",{transferProps:["orientation"]})(),g=se(({children:t,...o})=>{const{checked:a,getInputProps:n,getLabelProps:d}=ze(o);return e.jsxs(M.label,{...d(),children:[e.jsx(M.input,{...n()}),e.jsx(M.span,{children:t}),a?e.jsx(ke,{}):null]})},"item")(),ke=se(({transition:t,...o})=>e.jsx(ve.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...o}),"indicator")(),Je={component:i,title:"Components / SegmentedControl"},j=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]}),R=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(re,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,a,n)=>e.jsx(i,{size:a,defaultValue:"ハチワレ",items:t},n)})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(re,{variant:"stack",rows:["horizontal","vertical"],children:(o,a,n)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:a},n)})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},O=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(g,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(g,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(g,{value:"モモンガ",children:"モモンガ"})]})]})},w=()=>{const[t,o]=l.useState("ハチワレ"),a=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:a,value:t,onChange:o})};var H,T,W;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...(W=(T=j.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var A,F,L;R.parameters={...R.parameters,docs:{...(A=R.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(L=(F=R.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var B,G,q;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(q=(G=V.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,N;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(N=(K=z.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(X=(U=_.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ne=(te=O.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ke=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{j as Basic,w as CustomControl,k as Disabled,_ as FullRounded,R as Items,z as Orientation,O as ReadOnly,V as Size,Ke as __namedExportsOrder,Je as default};
