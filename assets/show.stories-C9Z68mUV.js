import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Du as n,Eu as r,Fa as i,Ia as a,Xp as o,jl as s,pp as c,xl as l}from"./iframe-DfzTHUcv.js";var u,d,f,p,m;e((()=>{u=t(o(),1),l(),r(),a(),d=c(),f={component:i,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(i,{fallback:(0,d.jsx)(n,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(n,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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