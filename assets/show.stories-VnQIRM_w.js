import{r as c,j as e,S as u,T as o}from"./iframe-B0P9Y6nu.js";import{S as r}from"./show-BSaZ_oqU.js";import"./preload-helper-PPVm8Dsz.js";const p={component:r,title:"Components / Show"},t=()=>{const[n,s]=c.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{onClick:()=>s(a=>a+1),children:["Value: ",n]}),e.jsx(r,{fallback:e.jsx(o,{children:"Not there yet. Keep clicking..."}),when:n>3,children:e.jsx(o,{children:"Congrats! I am here"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Value: {count}
      </Button>

      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <Text>Congrats! I am here</Text>
      </Show>
    </>;
}`,...t.parameters?.docs?.source}}};const h=["Basic"];export{t as Basic,h as __namedExportsOrder,p as default};
