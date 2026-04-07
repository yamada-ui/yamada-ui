import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,Fo as r,Io as i,jl as a,pp as o,xl as s}from"./iframe-DZGIdQv0.js";var c,l,u,d,f;e((()=>{r(),s(),n(),c=o(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:n}]=i();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t,{children:[`state: `,String(e)]}),(0,c.jsx)(a,{onClick:n,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:n,on:r}]=i();return(0,c.jsx)(t,{w:`full`,onMouseEnter:r,onMouseLeave:n,children:e?`I am hovered`:`Put mouse over me please`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    off,
    on
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`OnAndOff`]}))();export{u as Basic,d as OnAndOff,f as __namedExportsOrder,l as default};