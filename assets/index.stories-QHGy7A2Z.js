import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{l as n,t as r}from"./button-C66K-mOB.js";import{t as i}from"./wrap-DVXQ7Jc8.js";import{T as a,f as o,p as s}from"./iframe-D8byj_kx.js";var c,l,u,d;e((()=>{o(),r(),a(),c=t(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,t,r]=s({key:`value`,defaultValue:1});return(0,c.jsxs)(i,{gap:`md`,children:[(0,c.jsxs)(n,{onClick:()=>t(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(n,{colorScheme:`danger`,onClick:r,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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