import{j as i}from"./jsx-runtime-CfatFE5O.js";import{u as H}from"./index-D1PiMshp.js";import{r as y}from"./index-ClcD9ViR.js";import{u as M}from"./loading-provider-DGY5eB4R.js";import{u as R}from"./theme-provider-BOnS9RWG.js";import{U as q}from"./ui-provider-Bcq5bwHk.js";import{B as d}from"./button-CN2eQqjg.js";import{e as z}from"./extend-config-Cw0P8bDm.js";import"./index-gGKStiao.js";import"./factory-CehSyZ2b.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CK1piYRH.js";import"./Combination-CkmEMpJG.js";import"./loading-J7FyZR17.js";import"./icon-Tcjn8UpA.js";import"./use-component-style-PhZ538dD.js";import"./use-var-C7Dt5UAR.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./portal-7IW3o8hZ.js";import"./index-ZuzByk-F.js";import"./factory-C8sDf1Q7.js";import"./index-C3qiwkGN.js";import"./notice-o_InvGJo.js";import"./alert-CfFbj67v.js";import"./close-button-Cb_x0Aeq.js";import"./use-ripple-lPfPkpPL.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:r,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&r(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,r]),S=y.useMemo(()=>({finish:r,start:a}),[r,a]);return[E,P,S]},ko={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),s=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},e=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return i.jsx(q,{config:o,children:i.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})};var L,x,h;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [isLoading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button isLoading={isLoading} onClick={onClick}>
      Click me
    </Button>;
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,j,A;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isLoading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button isLoading={isLoading} onClick={onClick}>
      Click me
    </Button>;
}`,...(A=(j=e.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var B,U,_;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      defaultComponent: "page"
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const wo=["basic","withLoading","withConfig"];export{wo as __namedExportsOrder,s as basic,ko as default,c as withConfig,e as withLoading};
