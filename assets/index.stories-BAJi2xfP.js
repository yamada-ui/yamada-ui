import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{n as i,t as a}from"./use-outside-click-Crx27Oqf.js";import{t as o}from"./center-CXtQvNiW.js";import{t as s}from"./center-t5sr6STJ.js";import{d as c,t as l}from"./button-8Wr1cScD.js";var u,d,f,p,m;t((()=>{u=e(n(),1),a(),l(),s(),d=r(),f={title:`Hooks / useOutsideClick`},p=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(!1);return i({ref:e,handler:()=>n(!1)}),t?(0,d.jsx)(o,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,d.jsx)(c,{onClick:()=>n(!0),children:`Please Click`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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