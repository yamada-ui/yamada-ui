import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-BU_JgSy6.js";import{t as a}from"./text-CIXXiNdJ.js";import{d as o,t as s}from"./button-CqpQ8yWo.js";import{hr as c,mr as l}from"./iframe-Clx83w1K.js";var u,d,f,p,m;t((()=>{u=e(n(),1),s(),a(),c(),d=r(),f={component:l,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(l,{fallback:(0,d.jsx)(i,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(i,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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