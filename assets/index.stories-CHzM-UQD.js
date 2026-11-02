import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./use-outside-click-rDYver-t.js";import{r as a,t as o}from"./button-CliLQZ-3.js";import{n as s,t as c}from"./center-C8RTzy3z.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=t(),i(),a(),s(),u=n(),d={title:`Hooks / useOutsideClick`},f=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1);return r({ref:e,handler:()=>n(!1)}),t?(0,u.jsx)(c,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,u.jsx)(o,{onClick:()=>n(!0),children:`Please Click`})},p=[`Basic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick({
    ref,
    handler: () => setOpen(false)
  });
  return open ? <Center ref={ref} bg="danger" color="white" h="10" px="4" rounded="l2">
      Hey, Click anywhere outside of me to close.
    </Center> : <Button onClick={() => setOpen(true)}>Please Click</Button>;
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Basic,p as __namedExportsOrder,d as default};