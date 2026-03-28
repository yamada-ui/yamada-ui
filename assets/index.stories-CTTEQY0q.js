import{j as a,R as r}from"./iframe-dfTRu6Tw.js";import{u as l}from"./index-D2JWMB3y.js";import{W as u}from"./wrap-DsNvBVvI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da__Abkn.js";import"./flex-AejvSx1f.js";const v={title:"Hooks / useLocalStorage"},e=()=>{const[t,o,n]=l({key:"value",defaultValue:1});return a.jsxs(u,{gap:"md",children:[a.jsxs(r,{onClick:()=>o(s=>s+1),children:["Current Local Storage value: ",t]}),a.jsx(r,{colorScheme:"danger",onClick:n,children:"Reset Local Storage value"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
