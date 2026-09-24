import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{r as i,t as a}from"./button-CFBNyQlD.js";import{n as o,t as s}from"./use-boolean-DS6wYhWQ.js";var c,l,u,d,f;function p(){return(p=e((()=>{s(),i(),n(),c=t(),l={title:`Hooks / useBoolean`},u=()=>{let[e,{toggle:t}]=o();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[`state: `,String(e)]}),(0,c.jsx)(a,{onClick:t,children:`Click me to toggle the boolean value`})]})},d=()=>{let[e,{off:t,on:n}]=o();return(0,c.jsx)(r,{w:`full`,onMouseEnter:n,onMouseLeave:t,children:e?`I am hovered`:`Put mouse over me please`})},f=[`Basic`,`OnAndOff`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Basic,d as OnAndOff,f as __namedExportsOrder,l as default};