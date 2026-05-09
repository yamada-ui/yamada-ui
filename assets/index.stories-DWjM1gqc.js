import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./text-GlyVhNHQ.js";import{t as r}from"./text-DcGeDOqy.js";import{l as i,t as a}from"./button-DVpvdSsT.js";import{n as o,t as s}from"./use-boolean-Qtox2XRK.js";import{n as c,r as l}from"./iframe-0y96wZ5W.js";var u,d,f,p;e((()=>{c(),a(),r(),s(),u=t(),d={title:`Hooks / useResizeObserver`},f=()=>{let[e,{toggle:t}]=o(),[r,a]=l();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{children:JSON.stringify(a)}),(0,u.jsx)(i,{ref:r,h:e?`xl`:`sm`,w:e?`xl`:`sm`,onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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