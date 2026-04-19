import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{El as n,ao as r,au as i,gl as a,oo as o,ou as s,qm as c,sm as l}from"./iframe-CXDvaz-K.js";var u,d,f,p,m;e((()=>{u=t(c(),1),a(),i(),o(),d=l(),f={component:r,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(r,{fallback:(0,d.jsx)(s,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(s,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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