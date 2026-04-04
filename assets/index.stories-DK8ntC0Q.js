import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,Fo as r,Io as i,d as a,jl as o,pp as s,u as c,xl as l}from"./iframe-BNI00s7o.js";var u,d,f,p;e((()=>{c(),l(),n(),r(),u=s(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:n}]=i(),[r,s]=a();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t,{children:JSON.stringify(s)}),(0,u.jsx)(o,{ref:r,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:n,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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