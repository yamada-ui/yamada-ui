import{r as c,j as t,T as o}from"./iframe-6cyGxZR1.js";import{S as r}from"./show-cIr3K9K-.js";import{B as i}from"./button-G4XTmEMi.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";const x={component:r,title:"Components / Show"},e=()=>{const[n,s]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsxs(i,{onClick:()=>s(a=>a+1),children:["Value: ",n]}),t.jsx(r,{fallback:t.jsx(o,{children:"Not there yet. Keep clicking..."}),when:n>3,children:t.jsx(o,{children:"Congrats! I am here"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Value: {count}
      </Button>

      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <Text>Congrats! I am here</Text>
      </Show>
    </>;
}`,...e.parameters?.docs?.source}}};const d=["Basic"];export{e as Basic,d as __namedExportsOrder,x as default};
