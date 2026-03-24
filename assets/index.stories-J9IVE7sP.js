import{j as a,R as r}from"./iframe-AnrJ8TER.js";import{u as l}from"./index-iTFFy_71.js";import{W as u}from"./wrap-Mn1-Quki.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SHfh5eo2.js";import"./flex-nGVnp1uR.js";const v={title:"Hooks / useLocalStorage"},e=()=>{const[t,o,n]=l({key:"value",defaultValue:1});return a.jsxs(u,{gap:"md",children:[a.jsxs(r,{onClick:()=>o(s=>s+1),children:["Current Local Storage value: ",t]}),a.jsx(r,{colorScheme:"danger",onClick:n,children:"Reset Local Storage value"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const S=["Basic"];export{e as Basic,S as __namedExportsOrder,v as default};
