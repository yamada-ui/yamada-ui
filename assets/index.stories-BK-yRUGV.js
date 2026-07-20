import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{d as n,t as r}from"./button-DWoK_lmA.js";import{G as i,W as a,at as o,ot as s}from"./iframe-BI2Pxu8D.js";var c,l,u,d;e((()=>{a(),r(),o(),c=t(),l={title:`Hooks / useLocalStorage`},u=()=>{let[e,t,r]=i({key:`value`,defaultValue:1});return(0,c.jsxs)(s,{gap:`md`,children:[(0,c.jsxs)(n,{onClick:()=>t(e=>e+1),children:[`Current Local Storage value: `,e]}),(0,c.jsx)(n,{colorScheme:`danger`,onClick:r,children:`Reset Local Storage value`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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