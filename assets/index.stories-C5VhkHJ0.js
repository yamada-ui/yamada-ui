import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{r as n,t as r}from"./button-CFBNyQlD.js";import{n as i,t as a}from"./wrap-Dg19SbjB.js";import{n as o,t as s}from"./use-local-storage-Ca8IVCcH.js";var c,l,u,d;function f(){return(f=e((()=>{s(),n(),i(),c=t(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,t,n]=o({key:`value`,defaultValue:1});return(0,c.jsxs)(a,{gap:`md`,children:[(0,c.jsxs)(r,{onClick:()=>t(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(r,{colorScheme:`danger`,onClick:n,children:`Reset Local Storage value`})]})},d=[`Basic`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Basic,d as __namedExportsOrder,l as default};