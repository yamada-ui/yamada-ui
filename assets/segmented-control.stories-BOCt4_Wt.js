import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{En as n,Gt as r,Ht as i,Tn as a,ct as o,dt as s,en as c,g as l,gt as u,h as d,i as f,o as p,ot as m}from"./props-BGlEPbcT.js";import{t as h}from"./jsx-runtime-BdxMnOeJ.js";import{E as g,T as _,d as v,f as y}from"./utils-AU-L7yot.js";import{d as b,i as x,n as S,r as C}from"./create-component-bU8PsV5C.js";import{t as ee}from"./LayoutGroup-koJsZt2n.js";import{t as te}from"./react-CGDJCwt1.js";import{n as ne,t as re}from"./factory-DMY3ypFH.js";import{r as ie,t as ae}from"./use-controllable-state-DMHLeVyZ.js";import{n as oe,t as se}from"./use-descendants-D1jwBp2w.js";import{n as ce,t as le}from"./use-value-CdRR9QhC.js";import{n as ue,t as w}from"./props-table-f1Xpb6Bc.js";var T;function E(){return(E=e((()=>{b(),l(),T=x({base:{indicator:{bg:`bg`,boxShadow:`xs`,boxSize:`full`,pointerEvents:`none`,position:`absolute`,rounded:`md`,top:`0`,userSelect:`none`},item:{"&:has(input:focus-visible)":d.outline,"& > span":{zIndex:`1`},color:`fg`,cursor:`pointer`,display:`inline-center`,flex:`1 1 0%`,fontWeight:`medium`,position:`relative`,whiteSpace:`nowrap`,_readOnly:{layerStyle:`readOnly`,pointerEvents:`none`},_disabled:{layerStyle:`disabled`,"&[data-root-disabled]":{opacity:1}}},root:{alignItems:`center`,bg:`bg.subtle`,display:`inline-flex`,p:`1`,rounded:`lg`,_readOnly:{layerStyle:`readOnly`},_disabled:{layerStyle:`disabled`}}},props:{fullRounded:{true:{indicator:{rounded:`full`},item:{rounded:`full`},root:{rounded:`full`,_before:{rounded:`full`}}}},orientation:{horizontal:{item:{h:`full`},root:{flexDirection:`row`,_before:{transitionProperty:`left, width`}}},vertical:{item:{w:`full`},root:{flexDirection:`column`,_before:{transitionProperty:`top, height`}}}}},sizes:{sm:{item:{fontSize:`sm`,px:`3`,_vertical:{minH:`7`}},root:{_horizontal:{h:`9`,minW:`64`}}},md:{item:{fontSize:`md`,px:`3`,_vertical:{minH:`8`}},root:{_horizontal:{h:`10`,minW:`80`}}},lg:{item:{fontSize:`lg`,px:`4`,_vertical:{minH:`9`}},root:{_horizontal:{h:`11`,minW:`96`}}},xl:{item:{fontSize:`xl`,px:`5`,_vertical:{minH:`10`}},root:{_horizontal:{h:`12`,minW:`96`}}}},defaultProps:{size:`md`,orientation:`horizontal`}})})))()}var D,O,de,k,A,j,M,N;function P(){return(P=e((()=>{D=t(),f(),ae(),oe(),c(),g(),n(),m(),s(),[O,de]=_({name:`SegmentedControlContext`}),{DescendantsContext:k,useDescendant:A,useDescendants:j}=se(),M=({id:e,name:t,defaultValue:n,disabled:a,orientation:o=`horizontal`,readOnly:s,value:c,onChange:l,...u}={})=>{let d=(0,D.useId)(),[f,m]=ie({defaultValue:n,value:c,onChange:l}),h=j();e??=d,t??=d;let g=(0,D.useCallback)(t=>p({id:e,"aria-disabled":i(a),"aria-orientation":o,"data-disabled":r(a),"data-orientation":o,"data-readonly":r(s),role:`radiogroup`},u,t)(),[a,e,o,s,u]);return{id:e,name:t,descendants:h,disabled:a,orientation:o,readOnly:s,setValue:m,value:f,getRootProps:g}},N=({disabled:e,readOnly:t,value:n,inputProps:s,...c})=>{let{name:l,disabled:d,orientation:f,readOnly:m,setValue:h,value:g}=de(),{register:_}=A({disabled:e||t}),v=n===g,y=e??d,b=t??m,x=!(b||y),S=(0,D.useCallback)(e=>{h(e.target.value)},[h]),C=(0,D.useCallback)(e=>p({"aria-disabled":i(y),"data-checked":r(v),"data-disabled":r(y),"data-orientation":f,"data-readonly":r(b),"data-root-disabled":r(d),"data-root-readonly":r(m)},c,e)(),[f,y,b,v,d,m,c]);return{checked:v,getInputProps:(0,D.useCallback)(({ref:e,...t}={})=>({type:`radio`,name:l,style:u.style,"aria-disabled":i(y),"data-checked":r(v),"data-disabled":r(y),"data-orientation":f,"data-readonly":r(b),checked:v,disabled:y||b,readOnly:b,tabIndex:x?void 0:-1,value:n,...s,...t,ref:o(_,e),onChange:a(t.onChange,s?.onChange,S)}),[f,l,y,b,v,x,n,s,_,S]),getLabelProps:C}}})))()}var F,I,L,fe,R,pe,z,B,V,H,U;function me(){return(me=e((()=>{te(),F=t(),C(),v(),le(),re(),E(),P(),I=h(),{ComponentContext:L,PropsContext:fe,useComponentContext:R,usePropsContext:pe,withContext:z,withProvider:B}=S(`segmented-control`,T),V=B(({children:e,items:t=[],orientation:n,indicatorProps:r,itemProps:i,...a})=>{let o=ce(n),{id:s,name:c,descendants:l,disabled:u,orientation:d,readOnly:f,setValue:p,value:m,getRootProps:h}=M({orientation:o,...a}),g=(0,F.useMemo)(()=>e||t.map(({label:e,...t},n)=>(0,I.jsx)(H,{...t,children:e},n)),[e,t]),_=(0,F.useMemo)(()=>({id:s,name:c,disabled:u,orientation:d,readOnly:f,setValue:p,value:m}),[s,c,u,f,d,p,m]),v=(0,F.useMemo)(()=>({indicatorProps:r,itemProps:i}),[i,r]);return(0,I.jsx)(O,{value:_,children:(0,I.jsx)(L,{value:v,children:(0,I.jsx)(k,{value:l,children:(0,I.jsx)(ee,{id:s,children:(0,I.jsx)(y.div,{...h(),children:g})})})})})},`root`,{transferProps:[`orientation`]})(),H=z(({children:e,indicatorProps:t,...n})=>{let{checked:r,getInputProps:i,getLabelProps:a}=N(n);return(0,I.jsxs)(y.label,{...a(),children:[(0,I.jsx)(y.input,{...i()}),(0,I.jsx)(y.span,{children:e}),r?(0,I.jsx)(U,{...t}):null]})},`item`)(e=>{let{indicatorProps:t,itemProps:n}=R();return{...n,...e,indicatorProps:{...t,...n?.indicatorProps,...e.indicatorProps}}}),U=z(({transition:e,...t})=>(0,I.jsx)(ne.div,{layoutDependency:!1,layoutId:`indicator`,transition:{duration:.2,...e},...t}),`indicator`)()})))()}var W,G,he,K,q,J,Y,X,Z,Q,$,ge;function _e(){return(_e=e((()=>{W=t(),ue(),me(),G=h(),he={component:V,title:`Components / SegmentedControl`},K=()=>(0,G.jsxs)(V,{defaultValue:`ハチワレ`,children:[(0,G.jsx)(H,{value:`ハチワレ`,children:`ハチワレ`}),(0,G.jsx)(H,{value:`うさぎ`,children:`うさぎ`}),(0,G.jsx)(H,{value:`モモンガ`,children:`モモンガ`})]}),q=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(V,{defaultValue:`ハチワレ`,items:e})},J=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,G.jsx)(V,{size:n,defaultValue:`ハチワレ`,items:e},r)})},Y=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(w,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,G.jsx)(V,{defaultValue:`ハチワレ`,items:e,orientation:n},r)})},X=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(V,{defaultValue:`ハチワレ`,fullRounded:!0,items:e})},Z=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(V,{defaultValue:`ハチワレ`,disabled:!0,items:e}),(0,G.jsxs)(V,{defaultValue:`ハチワレ`,children:[(0,G.jsx)(H,{value:`ハチワレ`,children:`ハチワレ`}),(0,G.jsx)(H,{disabled:!0,value:`うさぎ`,children:`うさぎ`}),(0,G.jsx)(H,{value:`モモンガ`,children:`モモンガ`})]})]})},Q=()=>{let e=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(V,{defaultValue:`ハチワレ`,items:e,readOnly:!0}),(0,G.jsxs)(V,{defaultValue:`ハチワレ`,children:[(0,G.jsx)(H,{value:`ハチワレ`,children:`ハチワレ`}),(0,G.jsx)(H,{readOnly:!0,value:`うさぎ`,children:`うさぎ`}),(0,G.jsx)(H,{value:`モモンガ`,children:`モモンガ`})]})]})},$=()=>{let[e,t]=(0,W.useState)(`ハチワレ`),n=(0,W.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,G.jsx)(V,{items:n,value:e,onChange:t})},ge=[`Basic`,`Items`,`Size`,`Orientation`,`FullRounded`,`Disabled`,`ReadOnly`,`CustomControl`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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