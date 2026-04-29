import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./text-DSMMc5B6.js";import{t as r}from"./text-BM4F8FHS.js";import{l as i,t as a}from"./button-C66K-mOB.js";import{n as o,t as s}from"./use-boolean-DYW0OEzi.js";import{a as c,i as l}from"./iframe-BgKbVVkz.js";var u,d,f,p;e((()=>{l(),a(),r(),s(),u=t(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:t}]=o(),r=c(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n,{children:[`state: `,String(e),`, prev: `,String(r??`none`)]}),(0,u.jsx)(i,{onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`]}))();export{f as Basic,p as __namedExportsOrder,d as default};