import{a as r,F as a,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-YuXFfT5-.js";import{u as g}from"./index-6kAfjqEG.js";import{T as c}from"./text-ZZ-rJ1wf.js";import{B as u}from"./button-BOuQJR-0.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-RZgwdKSo.js";import"./factory-S7NpTOPD.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-gPsMpKLC.js";import"./use-ripple--PYcbSnX.js";import"./index-EargzzxG.js";import"./motion-ukEXpwwk.js";import"./motion-Uato0l8n.js";import"./loading-wo-qYTRZ.js";import"./index--9owDyfg.js";import"./index-9nF0LIhT.js";import"./index-dLbkUGAz.js";import"./icon-BK6khpDY.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
