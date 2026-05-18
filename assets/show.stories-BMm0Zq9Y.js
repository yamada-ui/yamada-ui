import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-CMXXrKHu.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{t as i}from"./text-5N-WN0Vk.js";import{t as a}from"./text-CpWEo__4.js";import{l as o,t as s}from"./button-BAB7Fua7.js";import{n as c,t as l}from"./show-BNIjR9ny.js";var u,d,f,p,m;e((()=>{u=t(n(),1),s(),a(),c(),d=r(),f={component:l,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(l,{fallback:(0,d.jsx)(i,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(i,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  return <>
      <Button onClick={() => setCount(prev => prev + 1)}>
        Value: {count}
      </Button>

      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <Text>Congrats! I am here</Text>
      </Show>
    </>;
}`,...p.parameters?.docs?.source}}},m=[`Basic`]}))();export{p as Basic,m as __namedExportsOrder,f as default};