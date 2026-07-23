import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-BU_JgSy6.js";import{t as r}from"./text-CIXXiNdJ.js";import{d as i,t as a}from"./button-CqpQ8yWo.js";import{n as o,t as s}from"./use-boolean-BAa8oyUv.js";import{F as c,P as l}from"./iframe-1VXrorm8.js";var u,d,f,p;e((()=>{l(),a(),r(),s(),u=t(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:t}]=o(),[r,a]=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{children:JSON.stringify(a)}),(0,u.jsx)(i,{ref:r,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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