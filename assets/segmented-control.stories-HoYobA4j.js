import{d as ue,ad as ie,r as l,b as g,e as E,c as me,O as ce,h as ge,m as ve,j as e,s as w,l as be,q as pe}from"./iframe-BARHselC.js";import{P as re}from"./props-table-BkvYFuzx.js";import{u as Ce}from"./index-BOoja0Hd.js";import{u as Se}from"./index-BHS6rqiD.js";import{c as xe}from"./index-DnuBQ5pB.js";import{L as he}from"./index-DUFzodut.js";import"./preload-helper-C1FmrZbK.js";import"./grid-TYCxZ6Tw.js";import"./grid-item-Bza5qvEt.js";import"./for-CY_Ito8d.js";import"./flex-50IdHGUY.js";import"./heading-DrqV-doR.js";import"./use-breakpoint-AF_cuhiS.js";import"./use-breakpoint-value-y5DOh8mn.js";import"./use-color-mode-value-CJJfoZD9.js";const fe=ue({base:{indicator:{bg:"bg",boxShadow:"xs",boxSize:"full",pointerEvents:"none",position:"absolute",rounded:"md",top:"0",userSelect:"none"},item:{"&:has(input:focus-visible)":ie.outline,"& > span":{zIndex:"1"},color:"fg",cursor:"pointer",display:"inline-center",flex:"1 1 0%",fontWeight:"medium",position:"relative",whiteSpace:"nowrap",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled","&[data-root-disabled]":{opacity:1}}},root:{alignItems:"center",bg:"bg.subtle",display:"inline-flex",p:"1",rounded:"lg",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}},props:{fullRounded:{true:{indicator:{rounded:"full"},item:{rounded:"full"},root:{rounded:"full",_before:{rounded:"full"}}}},orientation:{horizontal:{item:{h:"full"},root:{flexDirection:"row",_before:{transitionProperty:"left, width"}}},vertical:{item:{w:"full"},root:{flexDirection:"column",_before:{transitionProperty:"top, height"}}}}},sizes:{sm:{item:{fontSize:"sm",px:"3",_vertical:{minH:"7"}},root:{_horizontal:{h:"9",minW:"64"}}},md:{item:{fontSize:"md",px:"3",_vertical:{minH:"8"}},root:{_horizontal:{h:"10",minW:"80"}}},lg:{item:{fontSize:"lg",px:"4",_vertical:{minH:"9"}},root:{_horizontal:{h:"11",minW:"96"}}},xl:{item:{fontSize:"xl",px:"5",_vertical:{minH:"10"}},root:{_horizontal:{h:"12",minW:"96"}}}},defaultProps:{size:"md",orientation:"horizontal"}}),[ye,Ie]=me({name:"SegmentedControlContext"}),{DescendantsContext:je,useDescendant:Re,useDescendants:Ve}=xe(),ze=({id:t,name:a,defaultValue:n,disabled:o,orientation:s="horizontal",readOnly:m,value:p,onChange:c,...b}={})=>{const C=l.useId(),[h,S]=Se({defaultValue:n,value:p,onChange:c}),u=Ve();t??(t=C),a??(a=C);const r=l.useCallback(d=>({id:t,"aria-disabled":E(o),"aria-orientation":s,"data-disabled":g(o),"data-orientation":s,"data-readonly":g(m),role:"radiogroup",...b,...d}),[o,t,s,m,b]);return{id:t,name:a,descendants:u,disabled:o,orientation:s,readOnly:m,setValue:S,value:h,getRootProps:r}},_e=({disabled:t,readOnly:a,value:n,inputProps:o,...s})=>{const{name:m,disabled:p,orientation:c,readOnly:b,setValue:C,value:h}=Ie(),{register:S}=Re({disabled:t||a}),u=n===h,r=t??p,d=a??b,f=!(d||r),y=l.useCallback(x=>{C(x.target.value)},[C]),D=l.useCallback(x=>({"aria-disabled":E(r),"data-checked":g(u),"data-disabled":g(r),"data-orientation":c,"data-readonly":g(d),"data-root-disabled":g(p),"data-root-readonly":g(b),...x,...s}),[c,r,d,u,p,b,s]),P=l.useCallback(({ref:x,...I}={})=>({type:"radio",name:m,style:ce.style,"aria-disabled":E(r),"data-checked":g(u),"data-disabled":g(r),"data-orientation":c,"data-readonly":g(d),checked:u,disabled:r||d,readOnly:d,tabIndex:f?void 0:-1,value:n,...o,...I,ref:ve(S,x),onChange:ge(I.onChange,o==null?void 0:o.onChange,y)}),[c,m,r,d,u,f,n,o,S,y]);return{checked:u,getInputProps:P,getLabelProps:D}},{ComponentContext:ke,useComponentContext:Me,withContext:se,withProvider:Oe}=be("segmented-control",fe),i=Oe(({children:t,items:a=[],orientation:n,indicatorProps:o,itemProps:s,...m})=>{const p=Ce(n),{id:c,name:b,descendants:C,disabled:h,orientation:S,readOnly:u,setValue:r,value:d,getRootProps:f}=ze({orientation:p,...m}),y=l.useMemo(()=>t||a.map(({label:x,...I},de)=>e.jsx(v,{...I,children:x},de)),[t,a]),D=l.useMemo(()=>({id:c,name:b,disabled:h,orientation:S,readOnly:u,setValue:r,value:d}),[c,b,h,u,S,r,d]),P=l.useMemo(()=>({indicatorProps:o,itemProps:s}),[s,o]);return e.jsx(ye,{value:D,children:e.jsx(ke,{value:P,children:e.jsx(je,{value:C,children:e.jsx(he,{id:c,children:e.jsx(w.div,{...f(),children:y})})})})})},"root",{transferProps:["orientation"]})(),v=se(({children:t,indicatorProps:a,...n})=>{const{checked:o,getInputProps:s,getLabelProps:m}=_e(n);return e.jsxs(w.label,{...m(),children:[e.jsx(w.input,{...s()}),e.jsx(w.span,{children:t}),o?e.jsx(we,{...a}):null]})},"item")(t=>{const{indicatorProps:a,itemProps:n}=Me();return{...n,...t,indicatorProps:{...a,...n==null?void 0:n.indicatorProps,...t.indicatorProps}}}),we=se(({transition:t,...a})=>e.jsx(pe.div,{layoutDependency:!1,layoutId:"indicator",transition:{duration:.2,...t},...a}),"indicator")(),Qe={component:i,title:"Components / SegmentedControl"},j=()=>e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(v,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(v,{value:"うさぎ",children:"うさぎ"}),e.jsx(v,{value:"モモンガ",children:"モモンガ"})]}),R=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",items:t})},V=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(re,{variant:"stack",rows:["sm","md","lg","xl"],children:(a,n,o)=>e.jsx(i,{size:n,defaultValue:"ハチワレ",items:t},o)})},z=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(re,{variant:"stack",rows:["horizontal","vertical"],children:(a,n,o)=>e.jsx(i,{defaultValue:"ハチワレ",items:t,orientation:n},o)})},_=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{defaultValue:"ハチワレ",fullRounded:!0,items:t})},k=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",disabled:!0,items:t}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(v,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(v,{disabled:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(v,{value:"モモンガ",children:"モモンガ"})]})]})},M=()=>{const t=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(i,{defaultValue:"ハチワレ",items:t,readOnly:!0}),e.jsxs(i,{defaultValue:"ハチワレ",children:[e.jsx(v,{value:"ハチワレ",children:"ハチワレ"}),e.jsx(v,{readOnly:!0,value:"うさぎ",children:"うさぎ"}),e.jsx(v,{value:"モモンガ",children:"モモンガ"})]})]})},O=()=>{const[t,a]=l.useState("ハチワレ"),n=l.useMemo(()=>[{label:"ハチワレ",value:"ハチワレ"},{label:"うさぎ",value:"うさぎ"},{label:"モモンガ",value:"モモンガ"}],[]);return e.jsx(i,{items:n,value:t,onChange:a})};var H,T,W;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(L=(F=R.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var B,q,G;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(G=(q=V.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,N;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ne=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,le;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ue=["Basic","Items","Size","Orientation","FullRounded","Disabled","ReadOnly","CustomControl"];export{j as Basic,O as CustomControl,k as Disabled,_ as FullRounded,R as Items,z as Orientation,M as ReadOnly,V as Size,Ue as __namedExportsOrder,Qe as default};
