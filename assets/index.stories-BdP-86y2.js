import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,G as n,K as r,Pd as i,at as a,it as o,qd as s}from"./iframe-B6Ybn7OE.js";var c,l,u,d;e((()=>{n(),i(),o(),c=t(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,t,n]=r({key:`value`,defaultValue:1});return(0,c.jsxs)(a,{gap:`md`,children:[(0,c.jsxs)(s,{onClick:()=>t(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(s,{colorScheme:`danger`,onClick:n,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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