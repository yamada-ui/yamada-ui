import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,G as n,K as r,Kd as i,Nd as a,at as o,it as s}from"./iframe-4z85howq.js";var c,l,u,d;e((()=>{n(),a(),s(),c=t(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,t,n]=r({key:`value`,defaultValue:1});return(0,c.jsxs)(o,{gap:`md`,children:[(0,c.jsxs)(i,{onClick:()=>t(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(i,{colorScheme:`danger`,onClick:n,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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