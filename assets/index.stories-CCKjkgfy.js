import{n as e}from"./chunk-zsgVPwQN.js";import{El as t,as as n,au as r,gl as i,os as a,ou as o,sm as s}from"./iframe-CXDvaz-K.js";var c,l,u,d,f;e((()=>{n(),i(),r(),c=s(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:n}]=a();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o,{children:[`state: `,String(e)]}),(0,c.jsx)(t,{onClick:n,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:t,on:n}]=a();return(0,c.jsx)(o,{w:`full`,onMouseEnter:n,onMouseLeave:t,children:e?`I am hovered`:`Put mouse over me please`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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