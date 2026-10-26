import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Bt as n,Cn as r,Qt as i,Ut as a,ct as o,dt as s,g as c,gt as l,h as u,i as d,o as f,ot as p,wn as m}from"./props-BYiltGva.js";import{t as h}from"./jsx-runtime-BdxMnOeJ.js";import{E as g,T as _,d as v,f as y}from"./utils-BHXGjhoF.js";import{d as b,i as x,n as S,r as C}from"./create-component-DGaOtb0M.js";import{t as ee}from"./LayoutGroup-e0Qur9iV.js";import{t as te}from"./react-BM_UpBu7.js";import{n as ne,t as re}from"./factory-B2uG3Th-.js";import{r as ie,t as ae}from"./use-controllable-state-DPI-0lLO.js";import{n as oe,t as se}from"./use-descendants-DfWur1bl.js";import{n as ce,t as le}from"./use-value-Bf-9AY8z.js";import{n as ue,t as de}from"./props-table-RsYSNOeG.js";var fe;function w(){return(w=e((()=>{b(),c(),fe=x({base:{indicator:{bg:`bg`,boxShadow:`xs`,boxSize:`full`,pointerEvents:`none`,position:`absolute`,rounded:`md`,top:`0`,userSelect:`none`},item:{"&:has(input:focus-visible)":u.outline,"& > span":{zIndex:`1`},color:`fg`,cursor:`pointer`,display:`inline-center`,flex:`1 1 0%`,fontWeight:`medium`,position:`relative`,whiteSpace:`nowrap`,_readOnly:{layerStyle:`readOnly`,pointerEvents:`none`},_disabled:{layerStyle:`disabled`,"&[data-root-disabled]":{opacity:1}}},root:{alignItems:`center`,bg:`bg.subtle`,display:`inline-flex`,p:`1`,rounded:`lg`,_readOnly:{layerStyle:`readOnly`},_disabled:{layerStyle:`disabled`}}},props:{fullRounded:{true:{indicator:{rounded:`full`},item:{rounded:`full`},root:{rounded:`full`,_before:{rounded:`full`}}}},orientation:{horizontal:{item:{h:`full`},root:{flexDirection:`row`,_before:{transitionProperty:`left, width`}}},vertical:{item:{w:`full`},root:{flexDirection:`column`,_before:{transitionProperty:`top, height`}}}}},sizes:{sm:{item:{fontSize:`sm`,px:`3`,_vertical:{minH:`7`}},root:{_horizontal:{h:`9`,minW:`64`}}},md:{item:{fontSize:`md`,px:`3`,_vertical:{minH:`8`}},root:{_horizontal:{h:`10`,minW:`80`}}},lg:{item:{fontSize:`lg`,px:`4`,_vertical:{minH:`9`}},root:{_horizontal:{h:`11`,minW:`96`}}},xl:{item:{fontSize:`xl`,px:`5`,_vertical:{minH:`10`}},root:{_horizontal:{h:`12`,minW:`96`}}}},defaultProps:{size:`md`,orientation:`horizontal`}})})))()}var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{T=t(),d(),ae(),oe(),i(),g(),m(),p(),s(),[E,D]=_({name:`SegmentedControlContext`}),{DescendantsContext:O,useDescendant:k,useDescendants:A}=se(),j=({id:e,name:t,defaultValue:r,disabled:i,orientation:o=`horizontal`,readOnly:s,value:c,onChange:l,...u}={})=>{let d=(0,T.useId)(),[p,m]=ie({defaultValue:r,value:c,onChange:l}),h=A();e??=d,t??=d;let g=(0,T.useCallback)(t=>f({id:e,"aria-disabled":n(i),"aria-orientation":o,"data-disabled":a(i),"data-orientation":o,"data-readonly":a(s),role:`radiogroup`},u,t)(),[i,e,o,s,u]);return{id:e,name:t,descendants:h,disabled:i,orientation:o,readOnly:s,setValue:m,value:p,getRootProps:g}},M=({disabled:e,readOnly:t,value:i,inputProps:s,...c})=>{let{name:u,disabled:d,orientation:p,readOnly:m,setValue:h,value:g}=D(),{register:_}=k({disabled:e||t}),v=i===g,y=e??d,b=t??m,x=!(b||y),S=(0,T.useCallback)(e=>{h(e.target.value)},[h]),C=(0,T.useCallback)(e=>f({"aria-disabled":n(y),"data-checked":a(v),"data-disabled":a(y),"data-orientation":p,"data-readonly":a(b),"data-root-disabled":a(d),"data-root-readonly":a(m)},c,e)(),[p,y,b,v,d,m,c]);return{checked:v,getInputProps:(0,T.useCallback)(({ref:e,...t}={})=>({type:`radio`,name:u,style:l.style,"aria-disabled":n(y),"data-checked":a(v),"data-disabled":a(y),"data-orientation":p,"data-readonly":a(b),checked:v,disabled:y||b,readOnly:b,tabIndex:x?void 0:-1,value:i,...s,...t,ref:o(_,e),onChange:r(t.onChange,s?.onChange,S)}),[p,u,y,b,v,x,i,s,_,S]),getLabelProps:C}}})))()}var P,F,I,pe,L,me,R,z,B,V,H;function U(){return(U=e((()=>{te(),P=t(),C(),v(),le(),re(),w(),N(),F=h(),{ComponentContext:I,PropsContext:pe,useComponentContext:L,usePropsContext:me,withContext:R,withProvider:z}=S(`segmented-control`,fe),B=z(({children:e,items:t=[],orientation:n,indicatorProps:r,itemProps:i,...a})=>{let o=ce(n),{id:s,name:c,descendants:l,disabled:u,orientation:d,readOnly:f,setValue:p,value:m,getRootProps:h}=j({orientation:o,...a}),g=(0,P.useMemo)(()=>e||t.map(({label:e,...t},n)=>(0,F.jsx)(V,{...t,children:e},n)),[e,t]),_=(0,P.useMemo)(()=>({id:s,name:c,disabled:u,orientation:d,readOnly:f,setValue:p,value:m}),[s,c,u,f,d,p,m]),v=(0,P.useMemo)(()=>({indicatorProps:r,itemProps:i}),[i,r]);return(0,F.jsx)(E,{value:_,children:(0,F.jsx)(I,{value:v,children:(0,F.jsx)(O,{value:l,children:(0,F.jsx)(ee,{id:s,children:(0,F.jsx)(y.div,{...h(),children:g})})})})})},`root`,{transferProps:[`orientation`]})(),V=R(({children:e,indicatorProps:t,...n})=>{let{checked:r,getInputProps:i,getLabelProps:a}=M(n);return(0,F.jsxs)(y.label,{...a(),children:[(0,F.jsx)(y.input,{...i()}),(0,F.jsx)(y.span,{children:e}),r?(0,F.jsx)(H,{...t}):null]})},`item`)(e=>{let{indicatorProps:t,itemProps:n}=L();return{...n,...e,indicatorProps:{...t,...n?.indicatorProps,...e.indicatorProps}}}),H=R(({transition:e,...t})=>(0,F.jsx)(ne.div,{layoutDependency:!1,layoutId:`indicator`,transition:{duration:.2,...e},...t}),`indicator`)()})))()}var W,G,he,K,q,J,Y,X,Z,Q,$,ge;function _e(){return(_e=e((()=>{W=t(),ue(),U(),G=h(),he={component:B,title:`Components / SegmentedControl`},K=()=>(0,G.jsxs)(B,{defaultValue:`ハチワレ`,children:[(0,G.jsx)(V,{value:`ハチワレ`,children:`ハチワレ`}),(0,G.jsx)(V,{value:`うさぎ`,children:`うさぎ`}),(0,G.jsx)(V,{value:`モモンガ`,children:`モモンガ`})]}),q=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(B,{defaultValue:`ハチワレ`,items:e})},J=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(de,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,G.jsx)(B,{size:n,defaultValue:`ハチワレ`,items:e},r)})},Y=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(de,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,G.jsx)(B,{defaultValue:`ハチワレ`,items:e,orientation:n},r)})},X=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(B,{defaultValue:`ハチワレ`,fullRounded:!0,items:e})},Z=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(B,{defaultValue:`ハチワレ`,disabled:!0,items:e}),(0,G.jsxs)(B,{defaultValue:`ハチワレ`,children:[(0,G.jsx)(V,{value:`ハチワレ`,children:`ハチワレ`}),(0,G.jsx)(V,{disabled:!0,value:`うさぎ`,children:`うさぎ`}),(0,G.jsx)(V,{value:`モモンガ`,children:`モモンガ`})]})]})},Q=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(B,{defaultValue:`ハチワレ`,items:e,readOnly:!0}),(0,G.jsxs)(B,{defaultValue:`ハチワレ`,children:[(0,G.jsx)(V,{value:`ハチワレ`,children:`ハチワレ`}),(0,G.jsx)(V,{readOnly:!0,value:`うさぎ`,children:`うさぎ`}),(0,G.jsx)(V,{value:`モモンガ`,children:`モモンガ`})]})]})},$=()=>{let[e,t]=(0,W.useState)(`ハチワレ`),n=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(B,{items:n,value:e,onChange:t})},ge=[`Basic`,`Items`,`Size`,`Orientation`,`FullRounded`,`Disabled`,`ReadOnly`,`CustomControl`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <SegmentedControl.Root defaultValue="ハチワレ">
      <SegmentedControl.Item value="ハチワレ">ハチワレ</SegmentedControl.Item>
      <SegmentedControl.Item value="うさぎ">うさぎ</SegmentedControl.Item>
      <SegmentedControl.Item value="モモンガ">モモンガ</SegmentedControl.Item>
    </SegmentedControl.Root>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}_e();export{K as Basic,$ as CustomControl,Z as Disabled,X as FullRounded,q as Items,Y as Orientation,Q as ReadOnly,J as Size,ge as __namedExportsOrder,he as default};