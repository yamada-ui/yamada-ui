import{n as e}from"./chunk-zsgVPwQN.js";import{El as t,as as n,au as r,d as i,gl as a,os as o,ou as s,sm as c,u as l}from"./iframe-CXDvaz-K.js";var u,d,f,p;e((()=>{l(),a(),r(),n(),u=c(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:n}]=o(),[r,a]=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{children:JSON.stringify(a)}),(0,u.jsx)(t,{ref:r,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:n,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} h={flg ? "xl" : "sm"} w={flg ? "xl" : "sm"} onClick={toggle}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`]}))();export{f as Basic,p as __namedExportsOrder,d as default};