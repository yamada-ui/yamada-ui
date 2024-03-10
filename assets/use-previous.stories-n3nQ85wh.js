import{a as r,F as a,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-YuXFfT5-.js";import{u as g}from"./index-6kAfjqEG.js";import{T as c}from"./text-BWcbruAC.js";import{B as u}from"./button-Uf5TRNrD.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-WCoXUinJ.js";import"./factory-PArTdL2L.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-GeG-940j.js";import"./use-ripple-7QvyeNp2.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-5fUAUGeG.js";import"./loading-yz72m8Iy.js";import"./index-ekn2fQi1.js";import"./index-zDL136ZB.js";import"./index-tnmL674y.js";import"./icon-39Pfil-I.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
