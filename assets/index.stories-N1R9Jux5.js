import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Ff as r,Kd as i,Nd as a,Pf as o,fp as s,pp as c,yy as l}from"./iframe-4z85howq.js";var u,d,f,p,m;t((()=>{u=e(l(),1),s(),a(),o(),d=n(),f={title:`Hooks / useOutsideClick`},p=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(!1);return c({ref:e,handler:()=>n(!1)}),t?(0,d.jsx)(r,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,d.jsx)(i,{onClick:()=>n(!0),children:`Please Click`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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