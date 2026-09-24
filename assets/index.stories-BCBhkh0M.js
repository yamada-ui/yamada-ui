import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./text-b2W5euYI.js";import{r as a,t as o}from"./button-CFBNyQlD.js";import{n as s,t as c}from"./use-boolean-DS6wYhWQ.js";var l,u;function d(){return(d=e((()=>{l=t(),u=e=>{let t=(0,l.useRef)(void 0);return(0,l.useEffect)(()=>{t.current=e},[e]),t.current}})))()}var f,p,m,h;function g(){return(g=e((()=>{d(),a(),r(),c(),f=n(),p={title:`Hooks / usePrevious`},m=()=>{let[e,{toggle:t}]=s(),n=u(e);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i,{children:[`state: `,String(e),`, prev: `,String(n??`none`)]}),(0,f.jsx)(o,{onClick:t,children:`Click me to toggle the boolean value`})]})},h=[`Basic`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Basic,h as __namedExportsOrder,p as default};