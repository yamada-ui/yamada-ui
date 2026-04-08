import{n as e}from"./chunk-zsgVPwQN.js";import{B as t,b as n,jl as r,pp as i,x as a,xl as o,z as s}from"./iframe-xN-XyuUR.js";var c,l,u,d;e((()=>{n(),o(),s(),c=i(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,n,i]=a({key:`value`,defaultValue:1});return(0,c.jsxs)(t,{gap:`md`,children:[(0,c.jsxs)(r,{onClick:()=>n(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(r,{colorScheme:`danger`,onClick:i,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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