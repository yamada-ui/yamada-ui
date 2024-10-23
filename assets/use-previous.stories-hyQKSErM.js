import{j as o}from"./extends-CwFRzn3r.js";import{u as a}from"./index-CoJrGj-T.js";import{u as p}from"./index-myp615oj.js";import{T as l}from"./text-BcL7IUWQ.js";import{B as g}from"./button-D-OQqBLL.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-BfdzvKeB.js";import"./factory-zMrA9M4D.js";import"./theme-provider-D6YJ9wXo.js";import"./use-ripple-C38FK3R5.js";import"./factory-ps7NpXEL.js";import"./motion-I-9Hg3gW.js";import"./loading-BAxQru_S.js";import"./icon-CZT7FJOE.js";import"./use-var-De9F6Sch.js";const _={title:"Hooks / usePrevious"},t=()=>{const[e,{toggle:i}]=a(),m=p(e);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(e),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
