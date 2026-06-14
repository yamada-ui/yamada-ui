import{i as e}from"./preload-helper-usAeo7Bx.js";import{$c as t,Ev as n,Kd as r,L as i,Lf as a,Nd as o,R as s,Rf as c,el as l}from"./iframe-4z85howq.js";var u,d,f,p;e((()=>{i(),o(),a(),t(),u=n(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:t}]=l(),n=s(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c,{children:[`state: `,String(e),`, prev: `,String(n??`none`)]}),(0,u.jsx)(r,{onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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