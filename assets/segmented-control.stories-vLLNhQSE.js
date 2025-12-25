import{d as ue,a3 as ie,c as me,r as l,b as g,e as f,h as ce,m as ge,O as ve,g as be,j as e,s as D,t as pe}from"./iframe-3lFlqlPN.js";import{P as re}from"./props-table-CuU8BGsb.js";import{u as Ce}from"./index-BWnvC5lz.js";import{u as Se}from"./index-DSTy9S8Z.js";import{c as xe}from"./index-Bv18usNi.js";import{L as he}from"./index-C_H-T7Nv.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CdpynwT9.js";import"./grid-item-L-ZB7s7_.js";import"./for-kQoYqs5h.js";import"./flex-Bmyv4kyF.js";import"./heading-DSztmhpV.js";import"./use-breakpoint-BTDUTMyA.js";import"./use-breakpoint-value-DDLVcMYm.js";import"./use-color-mode-value-rSpeXkrQ.js";const fe=ue({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":ie.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{indicator:{rounded:"full"},item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[ye,Ie]=me({name:"SegmentedControlContext"}),{DescendantsContext:je,useDescendant:Re,useDescendants:Ve}=xe(),ze=({id:t,name:a,defaultValue:n,disabled:o,orientation:d="horizontal",readOnly:m,value:p,onChange:c,...b}={})=>{const C=l.useId(),[h,S]=Se({defaultValue:n,value:p,onChange:c}),u=Ve();t??(t=C),a??(a=C);const s=l.useCallback(r=>({id:t,"aria-disabled":f(o),"aria-orientation":d,"data-disabled":g(o),"data-orientation":d,"data-readonly":g(m),role:"radiogroup",...b,...r}),[o,t,d,m,b]);return{id:t,name:a,descendants:u,disabled:o,orientation:d,readOnly:m,setValue:S,value:h,getRootProps:s}},_e=({disabled:t,readOnly:a,value:n,inputProps:o,...d})=>{const{name:m,disabled:p,orientation:c,readOnly:b,setValue:C,value:h}=Ie(),{register:S}=Re({disabled:t||a}),u=n===h,s=t??p,r=a??b,y=!(r||s),I=l.useCallback(x=>{C(x.target.value)},[C]),P=l.useCallback(x=>({"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":g(u),"data-disabled":g(s),"data-orientation":c,"data-readonly":g(r),"data-root-disabled":g(p),"data-root-readonly":g(b),...x,...d}),[c,s,r,u,p,b,d]),E=l.useCallback(({ref:x,...j}={})=>({type:"radio",name:m,style:ve.style,"aria-disabled":f(s),"aria-readonly":f(r),"data-checked":g(u),"data-disabled":g(s),"data-orientation":c,"data-readonly":g(r),checked:u,disabled:s||r,readOnly:r,tabIndex:y?void 0:-1,value:n,...o,...j,ref:ge(S,x),onChange:ce(j.onChange,o==null?void 0:o.onChange,I)}),[c,m,s,r,u,y,n,o,S,I]);return{checked:u,getInputProps:E,getLabelProps:P}},{ComponentContext:ke,useComponentContext:Me,withContext:se,withProvider:Oe}=be("segmented-control",fe),i=Oe(({children:t,items:a=[],orientation:n,indicatorProps:o,itemProps:d,...m})=>{const p=Ce(n),{id:c,name:b,descendants:C,disabled:h,orientation:S,readOnly:u,setValue:s,value:r,getRootProps:y}=ze({orientation:p,...m}),I=l.useMemo(()=>t||a.map(({label:x,...j},de)=>e.jsx(v,{...j,children:x},de)),[t,a]),P=l.useMemo(()=>({id:c,name:b,disabled:h,orientation:S,readOnly:u,setValue:s,value:r}),[c,b,h,u,S,s,r]),E=l.useMemo(()=>({indicatorProps:o,itemProps:d}),[d,o]);return e.jsx(ye,{value:P,children:e.jsx(ke,{value:E,children:e.jsx(je,{value:C,children:e.jsx(he,{id:c,children:e.jsx(D.div,{...y(),children:I})})})})})},"root",{transferProps:["orientation"]})(),v=se(({children:t,indicatorProps:a,...n})=>{const{checked:o,getInputProps:d,getLabelProps:m}=_e(n);return e.jsxs(D.label,{...m(),children:[e.jsx(D.input,{...d()}),e.jsx(D.span,{children:t}),o?e.jsx(we,{...a}):null]})},"item")(t=>{const{indicatorProps:a,itemProps:n}=Me();return{...n,...t,indicatorProps:{...a,...n==null?void 0:n.indicatorProps,...t.indicatorProps}}}),we=se(({transition:t,...a})=>e.jsx(pe.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...a}),"indicator")(),Qe={component:i,title:"Components / SegmentedControl"},R=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(v,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(v,{value:"うさぎ",children:"うさぎ"}),e.jsx(v,{value:"モモンガ",children:"モモンガ"})]}),V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(re,{variant:"stack",rows:["sm","md","lg","xl"],children:(a,n,o)=>e.jsx(i,{size:n,defaultValue:"ハチワレ",items:t},o)})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(re,{variant:"stack",rows:["horizontal","vertical"],children:(a,n,o)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:n},o)})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},M=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(v,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(v,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(v,{value:"モモンガ",children:"モモンガ"})]})]})},O=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(v,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(v,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(v,{value:"モモンガ",children:"モモンガ"})]})]})},w=()=>{const[t,a]=l.useState("ハチワレ"),n=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:n,value:t,onChange:a})};var H,T,W;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...(W=(T=R.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var A,F,L;V.parameters={...V.parameters,docs:{...(A=V.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(L=(F=V.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var B,G,q;z.parameters={...z.parameters,docs:{...(B=z.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(q=(G=z.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,N;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(N=(K=_.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(X=(U=k.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ue=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{R as Basic,w as CustomControl,M as Disabled,k as FullRounded,V as Items,_ as Orientation,O as ReadOnly,z as Size,Ue as __namedExportsOrder,Qe as default};
