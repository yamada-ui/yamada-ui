import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./use-outside-click-Bq7rq1u_.js";import{r as a,t as o}from"./button-CFBNyQlD.js";import{n as s,t as c}from"./center-C6NHygeb.js";var l,u,d,f,p;function m(){return(m=e((()=>{l=t(),i(),a(),s(),u=n(),d={title:`Hooks / useOutsideClick`},f=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1);return r({ref:e,handler:()=>n(!1)}),t?(0,u.jsx)(c,{ref:e,bg:`danger`,color:`white`,h:`10`,px:`4`,rounded:`l2`,children:`Hey, Click anywhere outside of me to close.`}):(0,u.jsx)(o,{onClick:()=>n(!0),children:`Please Click`})},p=[`Basic`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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