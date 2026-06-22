import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Pd as n,Rf as r,el as i,qd as a,tl as o,zf as s}from"./iframe-B_JZPEyf.js";var c,l,u,d,f;e((()=>{i(),n(),r(),c=t(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:t}]=o();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s,{children:[`state: `,String(e)]}),(0,c.jsx)(a,{onClick:t,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:t,on:n}]=o();return(0,c.jsx)(s,{w:`full`,onMouseEnter:n,onMouseLeave:t,children:e?`I am hovered`:`Put mouse over me please`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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