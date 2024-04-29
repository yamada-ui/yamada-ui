import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-rYLD436_.js";import{u as a}from"./index-wawZIfVM.js";import{T as l}from"./text-BhMssTMP.js";import{B as g}from"./button-Bx4P0CJP.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-CZ1o4dYw.js";import"./factory-C06z1xU-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-CvYGGDsf.js";import"./use-ripple-CjJeY8ag.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CogyOzDV.js";import"./loading-lRr_nN3q.js";import"./icon-CyBNnypl.js";import"./index-wE-5yW0t.js";const O={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const R=["basic"];export{R as __namedExportsOrder,t as basic,O as default};
