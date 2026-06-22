import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,L as n,Pd as r,R as i,Rf as a,el as o,qd as s,tl as c,zf as l}from"./iframe-B_JZPEyf.js";var u,d,f,p;e((()=>{n(),r(),a(),o(),u=t(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:t}]=c(),n=i(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(l,{children:[`state: `,String(e),`, prev: `,String(n??`none`)]}),(0,u.jsx)(s,{onClick:t,children:`Click me to toggle the boolean value`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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