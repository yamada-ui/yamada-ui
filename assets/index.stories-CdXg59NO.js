import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,Fo as r,Io as i,f as a,jl as o,p as s,pp as c,xl as l}from"./iframe-BNI00s7o.js";var u,d,f,p;e((()=>{a(),l(),n(),r(),u=c(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:n}]=i(),r=s(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(t,{children:[`state: `,String(e),`, prev: `,String(r??`none`)]}),(0,u.jsx)(o,{onClick:n,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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