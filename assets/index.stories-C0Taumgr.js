import{j as a,Q as r}from"./iframe-79mlTu-5.js";import{u as m}from"./index-B0GVOJ1R.js";import{W as p}from"./wrap-BqFPSgeL.js";import"./preload-helper-C1FmrZbK.js";import"./index-LKv7tQTq.js";import"./flex-DRXm6-HO.js";const k={title:"Hooks / useLocalStorage"},e=()=>{const[s,l,u]=m({key:"value",defaultValue:1});return a.jsxs(p,{gap:"md",children:[a.jsxs(r,{onClick:()=>l(c=>c+1),children:["Current Local Storage value: ",s]}),a.jsx(r,{colorScheme:"danger",onClick:u,children:"Reset Local Storage value"})]})};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const x=["Basic"];export{e as Basic,x as __namedExportsOrder,k as default};
