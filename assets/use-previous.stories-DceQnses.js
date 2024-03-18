import{a as r,F as a,j as p}from"./jsx-runtime-2xDJh5tt.js";import{u as l}from"./index-rYLD436_.js";import{u as g}from"./index-wawZIfVM.js";import{T as c}from"./text-BC__m9gv.js";import{B as u}from"./button-B04h-bnh.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-C8HPJoXa.js";import"./factory-DpmudyXM.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-BSSgazaQ.js";import"./use-ripple-CYLHRNNs.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BNANSLgb.js";import"./loading-PB7xGStd.js";import"./index-CjPoKz7c.js";import"./index-DTWJYyBb.js";import"./index-Dft46qqu.js";import"./icon-BPDO9FjE.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const A=["basic"];export{A as __namedExportsOrder,o as basic,z as default};
