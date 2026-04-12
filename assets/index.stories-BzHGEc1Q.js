import{n as e}from"./chunk-zsgVPwQN.js";import{d as t,im as n,is as r,iu as i,ml as a,rs as o,ru as s,u as c,wl as l}from"./iframe-BNaKCSd5.js";var u,d,f,p;e((()=>{c(),a(),s(),o(),u=n(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:n}]=r(),[a,o]=t();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:JSON.stringify(o)}),(0,u.jsx)(l,{ref:a,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:n,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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