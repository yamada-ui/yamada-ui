import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Au as n,El as r,gl as i,ju as a,nu as o,qm as s,ru as c,sm as l}from"./iframe-CXDvaz-K.js";var u,d,f,p,m;e((()=>{u=t(s(),1),n(),i(),o(),d=l(),f={title:`Hooks / useOutsideClick`},p=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(!1);return a({ref:e,handler:()=>n(!1)}),t?(0,d.jsx)(c,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,d.jsx)(r,{onClick:()=>n(!0),children:`Please Click`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="l2">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...p.parameters?.docs?.source}}},m=[`Basic`]}))();export{p as Basic,m as __namedExportsOrder,f as default};