import{a as r,F as a,j as p}from"./jsx-runtime-2xDJh5tt.js";import{u as l}from"./index-rYLD436_.js";import{u as g}from"./index-wawZIfVM.js";import{T as c}from"./text-D-2-8y30.js";import{B as u}from"./button-DQ4BMoEA.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-D9HuanlY.js";import"./factory-DLpD49Xl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-DXhTM26K.js";import"./use-ripple-Df_aFKka.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CIylrsRE.js";import"./loading-De1VEe6t.js";import"./index-CpntKjHS.js";import"./index-DiSCNHbg.js";import"./index-5JVG-Iiz.js";import"./icon-D30_Pagv.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
