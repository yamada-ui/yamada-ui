import{i as e}from"./preload-helper-usAeo7Bx.js";import{$c as t,Ev as n,F as r,I as i,Kd as a,Lf as o,Nd as s,Rf as c,el as l}from"./iframe-4z85howq.js";var u,d,f,p;e((()=>{r(),s(),o(),t(),u=n(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:t}]=l(),[n,r]=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{children:JSON.stringify(r)}),(0,u.jsx)(a,{ref:n,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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