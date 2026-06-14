import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Fs as r,Is as i,Kd as a,Lf as o,Nd as s,Rf as c,yy as l}from"./iframe-4z85howq.js";var u,d,f,p,m;t((()=>{u=e(l(),1),s(),o(),i(),d=n(),f={component:r,title:`Components / Show`},p=()=>{let[e,t]=(0,u.useState)(0);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a,{onClick:()=>t(e=>e+1),children:[`Value: `,e]}),(0,d.jsx)(r,{fallback:(0,d.jsx)(c,{children:`Not there yet. Keep clicking...`}),when:e>3,children:(0,d.jsx)(c,{children:`Congrats! I am here`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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