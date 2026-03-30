import{az as o,j as n,aA as r,B as s}from"./iframe-Bly_QBCH.js";import{u as i}from"./use-notice-DetUfHbu.js";import"./preload-helper-PPVm8Dsz.js";const d={parameters:{layout:"centered"},title:"Theme / Notice"},e=()=>{const t=o({notice:{limit:10,placement:"end-start"}});return n.jsx(r,{config:t,children:n.jsx(c,{})})},c=()=>{const t=i();return n.jsx(s,{onClick:()=>t({description:"オッス！オラ悟空！",title:"孫悟空"}),children:"Show Notice"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const config = extendConfig({
    notice: {
      limit: 10,
      placement: "end-start"
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...e.parameters?.docs?.source}}};const l=["Basic"];export{e as Basic,l as __namedExportsOrder,d as default};
