import{n as e}from"./chunk-zsgVPwQN.js";import{N as t,P as n,b as r,im as i,ml as a,wl as o,x as s}from"./iframe-C1VNLErl.js";var c,l,u,d;e((()=>{r(),a(),t(),c=i(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,t,r]=s({key:`value`,defaultValue:1});return(0,c.jsxs)(n,{gap:`md`,children:[(0,c.jsxs)(o,{onClick:()=>t(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(o,{colorScheme:`danger`,onClick:r,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: "value",
    defaultValue: 1
  });
  return <Wrap gap="md">
      <Button onClick={() => setValue(prev => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme="danger" onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>;
}`,...u.parameters?.docs?.source}}},d=[`Basic`]}))();export{u as Basic,d as __namedExportsOrder,l as default};