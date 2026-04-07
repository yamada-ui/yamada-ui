import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Cu as n,Xp as r,_c as i,gc as a,jl as o,pp as s,wu as c,xl as l}from"./iframe-a-xI_IFE.js";var u,d,f,p,m;e((()=>{u=t(r(),1),a(),l(),n(),d=s(),f={title:`Hooks / useOutsideClick`},p=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(!1);return i({ref:e,handler:()=>n(!1)}),t?(0,d.jsx)(c,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,d.jsx)(o,{onClick:()=>n(!0),children:`Please Click`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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