import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Lt as r,Yt as i,bn as a,i as o,it as s,lt as c,m as l,mt as u,o as d,ot as f,p,xn as m}from"./props-Bz1FL_va.js";import{t as h}from"./jsx-runtime-BdxMnOeJ.js";import{E as g,T as _,d as v,f as y}from"./utils-DG4lHdyV.js";import{d as b,i as x,n as S,r as ee}from"./create-component-DtmnY_ce.js";import{t as te}from"./LayoutGroup-nMSi9d6b.js";import{t as ne}from"./react-DhJdH1Jr.js";import{n as re,t as ie}from"./factory-6ld30uuo.js";import{r as ae,t as oe}from"./use-controllable-state-tJaJeRqU.js";import{n as se,t as ce}from"./use-descendants-CXp1GoPL.js";import{n as le,t as ue}from"./use-value-DpgqT3Bp.js";import{n as de,t as C}from"./props-table-CLkISL0o.js";var w;function fe(){return(fe=e((()=>{b(),l(),w=x({base:{indicator:{bg:`bg`,boxShadow:`xs`,boxSize:`full`,pointerEvents:`none`,position:`absolute`,rounded:`md`,top:`0`,userSelect:`none`},item:{"&:has(input:focus-visible)":p.outline,"& > span":{zIndex:`1`},color:`fg`,cursor:`pointer`,display:`inline-center`,flex:`1 1 0%`,fontWeight:`medium`,position:`relative`,whiteSpace:`nowrap`,_readOnly:{layerStyle:`readOnly`,pointerEvents:`none`},_disabled:{layerStyle:`disabled`,"&[data-root-disabled]":{opacity:1}}},root:{alignItems:`center`,bg:`bg.subtle`,display:`inline-flex`,p:`1`,rounded:`lg`,_readOnly:{layerStyle:`readOnly`},_disabled:{layerStyle:`disabled`}}},props:{fullRounded:{true:{indicator:{rounded:`full`},item:{rounded:`full`},root:{rounded:`full`,_before:{rounded:`full`}}}},orientation:{horizontal:{item:{h:`full`},root:{flexDirection:`row`,_before:{transitionProperty:`left, width`}}},vertical:{item:{w:`full`},root:{flexDirection:`column`,_before:{transitionProperty:`top, height`}}}}},sizes:{sm:{item:{fontSize:`sm`,px:`3`,_vertical:{minH:`7`}},root:{_horizontal:{h:`9`,minW:`64`}}},md:{item:{fontSize:`md`,px:`3`,_vertical:{minH:`8`}},root:{_horizontal:{h:`10`,minW:`80`}}},lg:{item:{fontSize:`lg`,px:`4`,_vertical:{minH:`9`}},root:{_horizontal:{h:`11`,minW:`96`}}},xl:{item:{fontSize:`xl`,px:`5`,_vertical:{minH:`10`}},root:{_horizontal:{h:`12`,minW:`96`}}}},defaultProps:{size:`md`,orientation:`horizontal`}})})))()}var T,pe,E,D,O,k,A,j;function M(){return(M=e((()=>{T=t(),o(),oe(),se(),i(),g(),m(),s(),c(),[pe,E]=_({name:`SegmentedControlContext`}),{DescendantsContext:D,useDescendant:O,useDescendants:k}=ce(),A=({id:e,name:t,defaultValue:i,disabled:a,orientation:o=`horizontal`,readOnly:s,value:c,onChange:l,...u}={})=>{let f=(0,T.useId)(),[p,m]=ae({defaultValue:i,value:c,onChange:l}),h=k();e??=f,t??=f;let g=(0,T.useCallback)(t=>d({id:e,"aria-disabled":r(a),"aria-orientation":o,"data-disabled":n(a),"data-orientation":o,"data-readonly":n(s),role:`radiogroup`},u,t)(),[a,e,o,s,u]);return{id:e,name:t,descendants:h,disabled:a,orientation:o,readOnly:s,setValue:m,value:p,getRootProps:g}},j=({disabled:e,readOnly:t,value:i,inputProps:o,...s})=>{let{name:c,disabled:l,orientation:p,readOnly:m,setValue:h,value:g}=E(),{register:_}=O({disabled:e||t}),v=i===g,y=e??l,b=t??m,x=!(b||y),S=(0,T.useCallback)(e=>{h(e.target.value)},[h]),ee=(0,T.useCallback)(e=>d({"aria-disabled":r(y),"data-checked":n(v),"data-disabled":n(y),"data-orientation":p,"data-readonly":n(b),"data-root-disabled":n(l),"data-root-readonly":n(m)},s,e)(),[p,y,b,v,l,m,s]);return{checked:v,getInputProps:(0,T.useCallback)(({ref:e,...t}={})=>({type:`radio`,name:c,style:u.style,"aria-disabled":r(y),"data-checked":n(v),"data-disabled":n(y),"data-orientation":p,"data-readonly":n(b),checked:v,disabled:y||b,readOnly:b,tabIndex:x?void 0:-1,value:i,...o,...t,ref:f(_,e),onChange:a(t.onChange,o?.onChange,S)}),[p,c,y,b,v,x,i,o,_,S]),getLabelProps:ee}}})))()}var N,P,F,me,I,he,L,R,z,B,V;function H(){return(H=e((()=>{ne(),N=t(),ee(),v(),ue(),ie(),fe(),M(),P=h(),{ComponentContext:F,PropsContext:me,useComponentContext:I,usePropsContext:he,withContext:L,withProvider:R}=S(`segmented-control`,w),z=R(({children:e,items:t=[],orientation:n,indicatorProps:r,itemProps:i,...a})=>{let o=le(n),{id:s,name:c,descendants:l,disabled:u,orientation:d,readOnly:f,setValue:p,value:m,getRootProps:h}=A({orientation:o,...a}),g=(0,N.useMemo)(()=>e||t.map(({label:e,...t},n)=>(0,P.jsx)(B,{...t,children:e},n)),[e,t]),_=(0,N.useMemo)(()=>({id:s,name:c,disabled:u,orientation:d,readOnly:f,setValue:p,value:m}),[s,c,u,f,d,p,m]),v=(0,N.useMemo)(()=>({indicatorProps:r,itemProps:i}),[i,r]);return(0,P.jsx)(pe,{value:_,children:(0,P.jsx)(F,{value:v,children:(0,P.jsx)(D,{value:l,children:(0,P.jsx)(te,{id:s,children:(0,P.jsx)(y.div,{...h(),children:g})})})})})},`root`,{transferProps:[`orientation`]})(),B=L(({children:e,indicatorProps:t,...n})=>{let{checked:r,getInputProps:i,getLabelProps:a}=j(n);return(0,P.jsxs)(y.label,{...a(),children:[(0,P.jsx)(y.input,{...i()}),(0,P.jsx)(y.span,{children:e}),r?(0,P.jsx)(V,{...t}):null]})},`item`)(e=>{let{indicatorProps:t,itemProps:n}=I();return{...n,...e,indicatorProps:{...t,...n?.indicatorProps,...e.indicatorProps}}}),V=L(({transition:e,...t})=>(0,P.jsx)(re.div,{layoutDependency:!1,layoutId:`indicator`,transition:{duration:.2,...e},...t}),`indicator`)()})))()}var U,W,G,K,q,J,Y,X,Z,Q,$,ge;function _e(){return(_e=e((()=>{U=t(),de(),H(),W=h(),G={component:z,title:`Components / SegmentedControl`},K=()=>(0,W.jsxs)(z,{defaultValue:`ハチワレ`,children:[(0,W.jsx)(B,{value:`ハチワレ`,children:`ハチワレ`}),(0,W.jsx)(B,{value:`うさぎ`,children:`うさぎ`}),(0,W.jsx)(B,{value:`モモンガ`,children:`モモンガ`})]}),q=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(z,{defaultValue:`ハチワレ`,items:e})},J=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(C,{variant:`stack`,rows:[`sm`,`md`,`lg`,`xl`],children:(t,n,r)=>(0,W.jsx)(z,{size:n,defaultValue:`ハチワレ`,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(C,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,W.jsx)(z,{defaultValue:`ハチワレ`,items:e,orientation:n},r)})},X=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(z,{defaultValue:`ハチワレ`,fullRounded:!0,items:e})},Z=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(z,{defaultValue:`ハチワレ`,disabled:!0,items:e}),(0,W.jsxs)(z,{defaultValue:`ハチワレ`,children:[(0,W.jsx)(B,{value:`ハチワレ`,children:`ハチワレ`}),(0,W.jsx)(B,{disabled:!0,value:`うさぎ`,children:`うさぎ`}),(0,W.jsx)(B,{value:`モモンガ`,children:`モモンガ`})]})]})},Q=()=>{let e=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(z,{defaultValue:`ハチワレ`,items:e,readOnly:!0}),(0,W.jsxs)(z,{defaultValue:`ハチワレ`,children:[(0,W.jsx)(B,{value:`ハチワレ`,children:`ハチワレ`}),(0,W.jsx)(B,{readOnly:!0,value:`うさぎ`,children:`うさぎ`}),(0,W.jsx)(B,{value:`モモンガ`,children:`モモンガ`})]})]})},$=()=>{let[e,t]=(0,U.useState)(`ハチワレ`),n=(0,U.useMemo)(()=>[{label:`ハチワレ`,value:`ハチワレ`},{label:`うさぎ`,value:`うさぎ`},{label:`モモンガ`,value:`モモンガ`}],[]);return(0,W.jsx)(z,{items:n,value:e,onChange:t})},ge=[`Basic`,`Items`,`Size`,`Orientation`,`FullRounded`,`Disabled`,`ReadOnly`,`CustomControl`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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