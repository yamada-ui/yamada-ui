import{j as o}from"./extends-CwFRzn3r.js";import{u as a}from"./index-Du0-7Fls.js";import{u as p}from"./index-myp615oj.js";import{T as l}from"./text-DR0EVEsm.js";import{B as g}from"./button-Bx26J9Y6.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CfUS8Ki1.js";import"./factory-CYpx3TMG.js";import"./theme-provider-BZKkW4ID.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./loading-DndL1UZp.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";const _={title:"Hooks / usePrevious"},t=()=>{const[e,{toggle:i}]=a(),m=p(e);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(e),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const H=["basic"];export{H as __namedExportsOrder,t as basic,_ as default};
