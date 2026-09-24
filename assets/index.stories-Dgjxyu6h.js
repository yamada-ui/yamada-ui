import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-BEzF8HZR.js";import{t as r}from"./text-D8nbdgH0.js";import{d as i,t as a}from"./button-iNTRPcIY.js";import{n as o,t as s}from"./use-boolean-DxgC93_m.js";import{I as c,L as l}from"./iframe-JqStoggy.js";var u,d,f,p;e((()=>{c(),a(),r(),s(),u=t(),d={title:`Hooks / usePrevious`},f=()=>{let[e,{toggle:t}]=o(),r=l(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(n,{children:[`state: `,String(e),`, prev: `,String(r??`none`)]}),(0,u.jsx)(i,{onClick:t,children:`Click me to toggle the boolean value`})]})},p=[`Basic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}}}))();export{f as Basic,p as __namedExportsOrder,d as default};