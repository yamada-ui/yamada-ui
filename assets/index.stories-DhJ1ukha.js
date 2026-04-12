import{n as e}from"./chunk-zsgVPwQN.js";import{f as t,im as n,is as r,iu as i,ml as a,p as o,rs as s,ru as c,wl as l}from"./iframe-CJaU6s20.js";var u,d,f,p;e((()=>{t(),a(),c(),s(),u=n(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:t}]=r(),n=o(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i,{children:[`state: `,String(e),`, prev: `,String(n??`none`)]}),(0,u.jsx)(l,{onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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