import{n as e}from"./chunk-zsgVPwQN.js";import{im as t,is as n,iu as r,ml as i,rs as a,ru as o,wl as s}from"./iframe-zMOrAcxo.js";var c,l,u,d,f;e((()=>{a(),i(),o(),c=t(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:t}]=n();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[`state: `,String(e)]}),(0,c.jsx)(s,{onClick:t,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:t,on:i}]=n();return(0,c.jsx)(r,{w:`full`,onMouseEnter:i,onMouseLeave:t,children:e?`I am hovered`:`Put mouse over me please`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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