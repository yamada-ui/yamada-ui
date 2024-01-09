import{a as r,F as a,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-YuXFfT5-.js";import{u as g}from"./index-6kAfjqEG.js";import{T as c}from"./text-3hpqDbhU.js";import{B as u}from"./button-F5n5_bzK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-zqeBCG90.js";import"./factory-Ddmu4EkR.js";import"./theme-provider-ePNg-PER.js";import"./use-ripple-X0fM5X0u.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-z0k3I5F3.js";import"./loading-WkkQcnq4.js";import"./index-qNazZ1dd.js";import"./index-4KtNWCXs.js";import"./index-Jxs9usl9.js";import"./icon-R3NodgbI.js";const y={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const z=["basic"];export{z as __namedExportsOrder,o as basic,y as default};
