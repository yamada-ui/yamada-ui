import{r as l,j as e,Q as m,T as o}from"./iframe-3lFlqlPN.js";import{S as c}from"./show-Br-Z5f2d.js";import"./preload-helper-C1FmrZbK.js";const d={component:c,title:"Components / Show"},t=()=>{const[n,u]=l.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(m,{onClick:()=>u(i=>i+1),children:["Value: ",n]}),e.jsx(c,{fallback:e.jsx(o,{children:"Not there yet. Keep clicking..."}),when:n>3,children:e.jsx(o,{children:"Congrats! I am here"})})]})};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Value: {count}
      </Button>

      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <Text>Congrats! I am here</Text>
      </Show>
    </>;
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const C=["Basic"];export{t as Basic,C as __namedExportsOrder,d as default};
