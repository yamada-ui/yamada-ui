import{a as r,F as a,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-YuXFfT5-.js";import{u as g}from"./index-6kAfjqEG.js";import{T as c}from"./text-KdXH1h6O.js";import{B as u}from"./button-_x0xF1BK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-ur23iJdL.js";import"./factory-RXTd6Ype.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-sgFj2JQg.js";import"./use-ripple-u7crcLVz.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-1HlxJrnU.js";import"./loading-wg4TUUCb.js";import"./index-CBfWCvKJ.js";import"./index-e7LtySSC.js";import"./index-DkyhaWsF.js";import"./icon-2cwE6nV2.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
