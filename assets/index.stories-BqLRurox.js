import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ou as n,Wm as r,eu as i,im as a,ku as o,ml as s,tu as c,wl as l}from"./iframe-BNaKCSd5.js";var u,d,f,p,m;e((()=>{u=t(r(),1),n(),s(),i(),d=a(),f={title:`Hooks / useOutsideClick`},p=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(!1);return o({ref:e,handler:()=>n(!1)}),t?(0,d.jsx)(c,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,d.jsx)(l,{onClick:()=>n(!0),children:`Please Click`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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