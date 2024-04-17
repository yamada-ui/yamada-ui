import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-rYLD436_.js";import{u as a}from"./index-wawZIfVM.js";import{T as l}from"./text-DgMTSqav.js";import{B as g}from"./button-C7YCSYWM.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-Dz5qfWpi.js";import"./factory-CWQinKm3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-WJWtIdo1.js";import"./use-ripple-D14yWROS.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-jMqq_iHq.js";import"./loading-pfo0_GA9.js";import"./index-BoiZ5iFY.js";import"./index-BWlRhMr5.js";import"./index-DnELqC5J.js";import"./icon-1uUZCQDj.js";const q={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
