import{n as e}from"./chunk-zsgVPwQN.js";import{El as t,N as n,P as r,b as i,gl as a,sm as o,x as s}from"./iframe-CXDvaz-K.js";var c,l,u,d;e((()=>{i(),a(),n(),c=o(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,n,i]=s({key:`value`,defaultValue:1});return(0,c.jsxs)(r,{gap:`md`,children:[(0,c.jsxs)(t,{onClick:()=>n(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(t,{colorScheme:`danger`,onClick:i,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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