import{i as e}from"./preload-helper-usAeo7Bx.js";import{$c as t,Ev as n,Kd as r,Lf as i,Nd as a,Rf as o,el as s}from"./iframe-4z85howq.js";var c,l,u,d,f;e((()=>{t(),a(),i(),c=n(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:t}]=s();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o,{children:[`state: `,String(e)]}),(0,c.jsx)(r,{onClick:t,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:t,on:n}]=s();return(0,c.jsx)(o,{w:`full`,onMouseEnter:n,onMouseLeave:t,children:e?`I am hovered`:`Put mouse over me please`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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