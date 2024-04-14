import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-rYLD436_.js";import{u as a}from"./index-wawZIfVM.js";import{T as l}from"./text-DdRzNs3B.js";import{B as g}from"./button-C1eBipHj.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-CYUzRNVu.js";import"./factory-J7SfSsVY.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-CHWpHxt7.js";import"./use-ripple-oOc30okt.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-DiDv5kbb.js";import"./loading-CSptKZ8e.js";import"./index-DY-6d2aL.js";import"./index-CBVutOXW.js";import"./index-BXTbHD1o.js";import"./icon-wpFEuhTi.js";const q={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const w=["basic"];export{w as __namedExportsOrder,t as basic,q as default};
