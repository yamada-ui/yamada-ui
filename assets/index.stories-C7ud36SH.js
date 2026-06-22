import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,F as n,I as r,Pd as i,Rf as a,el as o,qd as s,tl as c,zf as l}from"./iframe-B_JZPEyf.js";var u,d,f,p;e((()=>{n(),i(),a(),o(),u=t(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:t}]=c(),[n,i]=r();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{children:JSON.stringify(i)}),(0,u.jsx)(s,{ref:n,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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