import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./text-ClYKebxE.js";import{t as a}from"./text-B2Y0ht7H.js";import{d as o,t as s}from"./button-Dd3r5aCq.js";import{As as c,js as l}from"./iframe-wumx2IEZ.js";var u,d,f,p,m;t((()=>{u=e(n(),1),s(),a(),l(),d=r(),f={component:c,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(c,{fallback:(0,d.jsx)(i,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(i,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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