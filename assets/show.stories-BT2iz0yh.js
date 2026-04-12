import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Wm as n,im as r,io as i,iu as a,ml as o,ro as s,ru as c,wl as l}from"./iframe-BdSFgLyo.js";var u,d,f,p,m;e((()=>{u=t(n(),1),o(),c(),i(),d=r(),f={component:s,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(s,{fallback:(0,d.jsx)(a,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(a,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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