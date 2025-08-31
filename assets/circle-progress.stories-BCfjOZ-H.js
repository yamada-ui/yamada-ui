import{d as T,g as _,j as e,s as L,Y as E,J as C,N as F,C as O}from"./iframe-COpE3uSe.js";import{P as x}from"./props-table-XBnOiVZc.js";import{F as I}from"./for-DdiNkdzb.js";import{u as q}from"./use-progress-ARgOvJQw.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-C-W568Cz.js";import"./grid-item-Bvrr_-qm.js";import"./flex-v97S7pBb.js";import"./heading-B0z9i4jI.js";import"./number-CcP_arM8.js";const H=T({base:{circle:{"--c":"calc(2 * 3.14159 * {r})","--cx":"calc({size} / 2)","--cy":"calc({size} / 2)","--r":"calc({size} / 2 - {thickness} / 2)",boxSize:"{size}",_indeterminate:{animationDuration:"2s",animationIterationCount:"infinite",animationName:"spin",animationTimingFunction:"linear"}},label:{fontWeight:"medium",left:"50%",letterSpacing:"tight",lineHeight:"1",position:"absolute",textAlign:"center",top:"50%",transform:"translate(-50%, -50%)"},range:{cx:"{cx}",cy:"{cy}",fill:"transparent",r:"{r}",strokeDasharray:"{c}",strokeDashoffset:"calc({c} * ((100 - {percent}) / 100))",strokeWidth:"{thickness}",transform:"rotate(-90deg)",transformOrigin:"center center",transitionDuration:"slow",transitionProperty:"stroke-dashoffset, stroke-dasharray",_indeterminate:{animationDuration:"{duration, 1.5s}",animationIterationCount:"infinite",animationTimingFunction:"linear",_keyframes:{"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100%"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260%"}}}},root:{display:"inline-flex",position:"relative"},track:{cx:"{cx}",cy:"{cy}",fill:"transparent",r:"{r}",strokeWidth:"{thickness}"}},props:{shape:{rounded:{range:{strokeLinecap:"round",_indeterminate:{strokeLinecap:"butt"}}},square:{range:{strokeLinecap:"butt"}}}},variants:{outline:{range:{stroke:"colorScheme.solid"},track:{stroke:"bg.subtle"}},subtle:{range:{stroke:"colorScheme.solid/80"},track:{stroke:["colorScheme.muted","colorScheme.subtle"]}}},sizes:{xs:{label:{fontSize:"2xs"},root:{"--size":"{sizes.6}","--thickness":"{sizes.1}"}},sm:{label:{fontSize:"2xs"},root:{"--size":"{sizes.8}","--thickness":"{sizes.1.5}"}},md:{label:{fontSize:"2xs"},root:{"--size":"{sizes.10}","--thickness":"{sizes.1.5}"}},lg:{label:{fontSize:"xs"},root:{"--size":"{sizes.12}","--thickness":"{sizes.2}"}},xl:{label:{fontSize:"sm"},root:{"--size":"{sizes.14}","--thickness":"{sizes.2}"}}},defaultProps:{size:"md",variant:"outline",shape:"rounded"}}),{withContext:k,withProvider:N}=_("circle-progress",H),s=N(({css:o,children:r,max:t,min:h,rangeColor:z,trackColor:S,value:b,circleProps:P,rangeProps:f,trackProps:v,...y})=>{const{percent:j,getRangeProps:R,getRootProps:w,getTrackProps:D}=q({max:t,min:h,value:b});return e.jsxs(L.div,{css:E(o,{"--percent":j}),...y,children:[e.jsxs(W,{...w(P),children:[e.jsx(A,{stroke:S,...D(v)}),e.jsx(B,{stroke:z,...R(f)})]}),r]})},"root")(({boxSize:o,duration:r,thickness:t,...h})=>({"--duration":F(r)?`${r}s`:r,"--size":C(o,"sizes"),"--thickness":C(t,"sizes"),...h})),W=k("svg","circle")(),A=k("circle","track")(),B=k("circle","range")(),M=k("span","label")(),ee={component:s,title:"Components / CircleProgress"},a=()=>e.jsx(s,{value:75}),n=()=>e.jsx(x,{columns:["outline","subtle"],rows:O,children:(o,r,t)=>e.jsx(s,{colorScheme:r,variant:o,value:75},t)}),i=()=>e.jsx(x,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(o,r,t)=>e.jsx(s,{size:r,value:75},t)}),c=()=>e.jsx(x,{variant:"stack",rows:["rounded","square"],children:(o,r,t)=>e.jsx(s,{shape:r,value:50},t)}),l=()=>e.jsx(s,{value:null}),u=()=>e.jsx(s,{duration:2,value:null}),m=()=>e.jsx(s,{thickness:1,value:31}),p=()=>e.jsx(I,{each:["md","lg","xl"],children:(o,r)=>e.jsx(s,{size:o,value:75,children:e.jsx(M,{children:"75%"})},r)}),d=()=>e.jsx(s,{rangeColor:"red.500",trackColor:"blue.500",value:31}),g=()=>e.jsx(s,{boxSize:"100px",value:31});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root value={75} />;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["outline", "subtle"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CircleProgress.Root key={key} colorScheme={row} variant={column} value={75} />;
    }}
    </PropsTable>;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <CircleProgress.Root key={key} size={row} value={75} />;
    }}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => <CircleProgress.Root key={key} shape={row} value={50} />}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root value={null} />;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root duration={2} value={null} />;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root thickness={1} value={31} />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <For each={["md", "lg", "xl"] as const}>
      {(size, index) => <CircleProgress.Root key={index} size={size} value={75}>
          <CircleProgress.Label>75%</CircleProgress.Label>
        </CircleProgress.Root>}
    </For>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root rangeColor="red.500" trackColor="blue.500" value={31} />;
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root boxSize="100px" value={31} />;
}`,...g.parameters?.docs?.source}}};const re=["Basic","Variant","Size","Shape","Indeterminate","Duration","Thickness","Label","CustomColor","CustomSize"];export{a as Basic,d as CustomColor,g as CustomSize,u as Duration,l as Indeterminate,p as Label,c as Shape,i as Size,m as Thickness,n as Variant,re as __namedExportsOrder,ee as default};
