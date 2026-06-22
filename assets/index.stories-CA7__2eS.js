import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-D-jnAopL.js";import{t as r}from"./text-DV5bCi2n.js";import{d as i,t as a}from"./button-CFUi4jSx.js";import{n as o,t as s}from"./use-boolean-ptBD8emB.js";import{L as c,R as l}from"./iframe-CgnmJX3j.js";var u,d,f,p;e((()=>{c(),a(),r(),s(),u=t(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:t}]=o(),r=l(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n,{children:[`state: `,String(e),`, prev: `,String(r??`none`)]}),(0,u.jsx)(i,{onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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