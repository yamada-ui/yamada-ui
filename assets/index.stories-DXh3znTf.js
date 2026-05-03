import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./text-CdQ6A3ld.js";import{t as r}from"./text-SrSsDo5C.js";import{l as i,t as a}from"./button-cUo5BdzA.js";import{n as o,t as s}from"./use-boolean-DYW0OEzi.js";var c,l,u,d,f;e((()=>{s(),a(),r(),c=t(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:t}]=o();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n,{children:[`state: `,String(e)]}),(0,c.jsx)(i,{onClick:t,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:t,on:r}]=o();return(0,c.jsx)(n,{w:`full`,onMouseEnter:r,onMouseLeave:t,children:e?`I am hovered`:`Put mouse over me please`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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