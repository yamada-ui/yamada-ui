import{r,j as o}from"./iframe-zzHt-Ltj.js";import{B as t}from"./badge-Dha3FkyE.js";import"./preload-helper-PPVm8Dsz.js";function i(e){return window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}}function s(){return window.navigator.onLine}function a(e=()=>!0){return r.useSyncExternalStore(i,s,e)}const m={title:"Hooks / useOnline"},n=()=>{const e=a();return o.jsx(t,{colorScheme:e?"green":"red",children:e?"Online":"Offline"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const online = useOnline();
  return <Badge colorScheme={online ? "green" : "red"}>
      {online ? "Online" : "Offline"}
    </Badge>;
}`,...n.parameters?.docs?.source}}};const f=["Basic"];export{n as Basic,f as __namedExportsOrder,m as default};
