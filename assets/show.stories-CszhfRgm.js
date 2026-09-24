import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./text-b2W5euYI.js";import{r as a,t as o}from"./button-CFBNyQlD.js";import{n as s,t as c}from"./show-ByqawjtF.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=t(),a(),r(),s(),u=n(),d={component:c,title:`Components / Show`},f=()=>{let[e,t]=(0,l.useState)(0);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,u.jsx)(c,{fallback:(0,u.jsx)(i,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,u.jsx)(i,{children:`Congrats! I am here`})})]})},p=[`Basic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Value: {count}
      </Button>

      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <Text>Congrats! I am here</Text>
      </Show>
    </>;
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};