import{n as e}from"./chunk-zsgVPwQN.js";import{El as t,as as n,au as r,f as i,gl as a,os as o,ou as s,p as c,sm as l}from"./iframe-CHoZGzMw.js";var u,d,f,p;e((()=>{i(),a(),r(),n(),u=l(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:n}]=o(),r=c(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s,{children:[`state: `,String(e),`, prev: `,String(r??`none`)]}),(0,u.jsx)(t,{onClick:n,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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