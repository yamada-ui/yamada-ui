import{r as c,j as t,T as n}from"./iframe-zUpmkGgl.js";import{S as r}from"./show-oJeAO0qn.js";import{B as i}from"./button-BSJyaaef.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";const C={component:r,title:"Components / Show"},e=()=>{const[o,s]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsxs(i,{onClick:()=>s(a=>a+1),children:["Value: ",o]}),t.jsx(r,{fallback:t.jsx(n,{children:"Not there yet. Keep clicking..."}),when:o>3,children:t.jsx(n,{children:"Congrats! I am here"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Value: {count}
      </Button>

      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <Text>Congrats! I am here</Text>
      </Show>
    </>;
}`,...e.parameters?.docs?.source}}};const S=["Basic"];export{e as Basic,S as __namedExportsOrder,C as default};
