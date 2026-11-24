import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Gt as n,Jt as r,On as i,_ as a,ct as o,g as s,i as c,kn as l,o as u,pt as d,rn as f,ut as p,vt as m}from"./props-D9Bstnnu.js";import{t as h}from"./jsx-runtime-BB9-612F.js";import{E as g,T as _,d as v,f as y}from"./utils-nFbCj9A5.js";import{d as b,i as x,n as S,r as ee}from"./create-component-eO5xvpJx.js";import{t as te,y as ne}from"./react-D83olUjZ.js";import{n as re,t as ie}from"./factory-B6-DRLF2.js";import{r as ae,t as oe}from"./use-controllable-state-xi4QP-h_.js";import{n as se,t as ce}from"./use-descendants-DpJvs7Pd.js";import{n as le,t as ue}from"./use-value-CF4Sz3kE.js";import{n as de,t as C}from"./props-table-DdfTAg_e.js";var w;function fe(){return(fe=e((()=>{b(),a(),w=x({base:{indicator:{bg:`bg`,boxShadow:`xs`,boxSize:`full`,pointerEvents:`none`,position:`absolute`,rounded:`md`,top:`0`,userSelect:`none`},item:{"&:has(input:focus-visible)":s.outline,"& > span":{zIndex:`1`},color:`fg`,cursor:`pointer`,display:`inline-center`,flex:`1 1 0%`,fontWeight:`medium`,position:`relative`,whiteSpace:`nowrap`,_readOnly:{layerStyle:`readOnly`,pointerEvents:`none`},_disabled:{layerStyle:`disabled`,"&[data-root-disabled]":{opacity:1}}},root:{alignItems:`center`,bg:`bg.subtle`,display:`inline-flex`,p:`1`,rounded:`lg`,_readOnly:{layerStyle:`readOnly`},_disabled:{layerStyle:`disabled`}}},props:{fullRounded:{true:{indicator:{rounded:`full`},item:{rounded:`full`},root:{rounded:`full`,_before:{rounded:`full`}}}},orientation:{horizontal:{item:{h:`full`},root:{flexDirection:`row`,_before:{transitionProperty:`left, width`}}},vertical:{item:{w:`full`},root:{flexDirection:`column`,_before:{transitionProperty:`top, height`}}}}},sizes:{sm:{item:{fontSize:`sm`,px:`3`,_vertical:{minH:`7`}},root:{_horizontal:{h:`9`,minW:`64`}}},md:{item:{fontSize:`md`,px:`3`,_vertical:{minH:`8`}},root:{_horizontal:{h:`10`,minW:`80`}}},lg:{item:{fontSize:`lg`,px:`4`,_vertical:{minH:`9`}},root:{_horizontal:{h:`11`,minW:`96`}}},xl:{item:{fontSize:`xl`,px:`5`,_vertical:{minH:`10`}},root:{_horizontal:{h:`12`,minW:`96`}}}},defaultProps:{size:`md`,orientation:`horizontal`}})})))()}var T,pe,E,D,O,k,A,j;function M(){return(M=e((()=>{T=t(),c(),oe(),se(),f(),g(),l(),o(),d(),[pe,E]=_({name:`SegmentedControlContext`}),{DescendantsContext:D,useDescendant:O,useDescendants:k}=ce(),A=({id:e,name:t,defaultValue:i,disabled:a,orientation:o=`horizontal`,readOnly:s,value:c,onChange:l,...d}={})=>{let f=(0,T.useId)(),[p,m]=ae({defaultValue:i,value:c,onChange:l}),h=k();e??=f,t??=f;let g=(0,T.useCallback)(t=>u({id:e,"aria-disabled":n(a),"aria-orientation":o,"data-disabled":r(a),"data-orientation":o,"data-readonly":r(s),role:`radiogroup`},d,t)(),[a,e,o,s,d]);return{id:e,name:t,descendants:h,disabled:a,orientation:o,readOnly:s,setValue:m,value:p,getRootProps:g}},j=({disabled:e,readOnly:t,value:a,inputProps:o,...s})=>{let{name:c,disabled:l,orientation:d,readOnly:f,setValue:h,value:g}=E(),{register:_}=O({disabled:e||t}),v=a===g,y=e??l,b=t??f,x=!(b||y),S=(0,T.useCallback)(e=>{h(e.target.value)},[h]),ee=(0,T.useCallback)(e=>u({"aria-disabled":n(y),"data-checked":r(v),"data-disabled":r(y),"data-orientation":d,"data-readonly":r(b),"data-root-disabled":r(l),"data-root-readonly":r(f)},s,e)(),[d,y,b,v,l,f,s]);return{checked:v,getInputProps:(0,T.useCallback)(({ref:e,...t}={})=>({type:`radio`,name:c,style:m.style,"aria-disabled":n(y),"data-checked":r(v),"data-disabled":r(y),"data-orientation":d,"data-readonly":r(b),checked:v,disabled:y||b,readOnly:b,tabIndex:x?void 0:-1,value:a,...o,...t,ref:p(_,e),onChange:i(t.onChange,o?.onChange,S)}),[d,c,y,b,v,x,a,o,_,S]),getLabelProps:ee}}})))()}var N,P,F,me,I,he,L,R,z,B,V;function H(){return(H=e((()=>{te(),N=t(),ee(),c(),v(),ue(),ie(),fe(),M(),P=h(),{ComponentContext:F,PropsContext:me,useComponentContext:I,usePropsContext:he,withContext:L,withProvider:R}=S(`segmented-control`,w),z=R(({children:e,items:t=[],orientation:n,indicatorProps:r,itemProps:i,...a})=>{let o=le(n),{id:s,name:c,descendants:l,disabled:u,orientation:d,readOnly:f,setValue:p,value:m,getRootProps:h}=A({orientation:o,...a}),g=(0,N.useMemo)(()=>e||t.map(({label:e,...t},n)=>(0,P.jsx)(B,{...t,children:e},n)),[e,t]),_=(0,N.useMemo)(()=>({id:s,name:c,disabled:u,orientation:d,readOnly:f,setValue:p,value:m}),[s,c,u,f,d,p,m]),v=(0,N.useMemo)(()=>({indicatorProps:r,itemProps:i}),[i,r]);return(0,P.jsx)(pe,{value:_,children:(0,P.jsx)(F,{value:v,children:(0,P.jsx)(D,{value:l,children:(0,P.jsx)(ne,{id:s,children:(0,P.jsx)(y.div,{...h(),children:g})})})})})},`root`,{transferProps:[`orientation`]})(),B=L(({children:e,indicatorProps:t,...n})=>{let{checked:r,getInputProps:i,getLabelProps:a}=j(n);return(0,P.jsxs)(y.label,{...a(),children:[(0,P.jsx)(y.input,{...i()}),(0,P.jsx)(y.span,{children:e}),r?(0,P.jsx)(V,{...t}):null]})},`item`)(e=>{let{indicatorProps:t,itemProps:n}=I();return{...u(n,e)(),indicatorProps:u(t,n?.indicatorProps,e.indicatorProps)()}}),V=L(({transition:e,...t})=>(0,P.jsx)(re.div,{layoutDependency:!1,layoutId:`indicator`,transition:{duration:.2,...e},...t}),`indicator`)()})))()}var U,W,G,K,q,J,Y,X,Z,Q,$,ge;function _e(){return(_e=e((()=>{U=t(),de(),H(),W=h(),G={component:z,title:`Components / SegmentedControl`},K=()=>(0,W.jsxs)(z,{defaultValue:`ハチワレ`,children:[(0,W.jsx)(B,{value:`ハチワレ`,children:`ハチワレ`}),(0,W.jsx)(B,{value:`うさぎ`,children:`うさぎ`}),(0,W.jsx)(B,{value:`モモンガ`,children:`モモンガ`})]}),q=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(z,{defaultValue:`ハチワレ`,items:e})},J=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(C,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,W.jsx)(z,{size:n,defaultValue:`ハチワレ`,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(C,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,W.jsx)(z,{defaultValue:`ハチワレ`,items:e,orientation:n},r)})},X=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(z,{defaultValue:`ハチワレ`,fullRounded:!0,items:e})},Z=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(z,{defaultValue:`ハチワレ`,disabled:!0,items:e}),(0,W.jsxs)(z,{defaultValue:`ハチワレ`,children:[(0,W.jsx)(B,{value:`ハチワレ`,children:`ハチワレ`}),(0,W.jsx)(B,{disabled:!0,value:`うさぎ`,children:`うさぎ`}),(0,W.jsx)(B,{value:`モモンガ`,children:`モモンガ`})]})]})},Q=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(z,{defaultValue:`ハチワレ`,items:e,readOnly:!0}),(0,W.jsxs)(z,{defaultValue:`ハチワレ`,children:[(0,W.jsx)(B,{value:`ハチワレ`,children:`ハチワレ`}),(0,W.jsx)(B,{readOnly:!0,value:`うさぎ`,children:`うさぎ`}),(0,W.jsx)(B,{value:`モモンガ`,children:`モモンガ`})]})]})},$=()=>{let[e,t]=(0,U.useState)(`ハチワレ`),n=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(z,{items:n,value:e,onChange:t})},ge=[`Basic`,`Items`,`Size`,`Orientation`,`FullRounded`,`Disabled`,`ReadOnly`,`CustomControl`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}_e();export{K as Basic,$ as CustomControl,Z as Disabled,X as FullRounded,q as Items,Y as Orientation,Q as ReadOnly,J as Size,ge as __namedExportsOrder,G as default};