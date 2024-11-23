import{j as i}from"./jsx-runtime-CfatFE5O.js";import{u as H}from"./index-BV35nwEU.js";import{r as y}from"./index-ClcD9ViR.js";import{u as M}from"./loading-provider-CQ__EqHq.js";import{u as R}from"./theme-provider-C-TvIt_J.js";import{U as q}from"./ui-provider-j01dqFxO.js";import{B as d}from"./button-BDTEGqqa.js";import{e as z}from"./extend-config-eCeXGoxV.js";import"./index-gGKStiao.js";import"./factory-Db31n_eg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-olb3wru2.js";import"./Combination-CkmEMpJG.js";import"./loading-BptEEwSR.js";import"./icon-BfxegGWg.js";import"./use-component-style-5HWcAXul.js";import"./use-var-BbJRqi2C.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./portal-C11kezrD.js";import"./index-ZuzByk-F.js";import"./factory-BRZ9AYsk.js";import"./index-CpHdNd90.js";import"./notice-CLeDQ0y9.js";import"./alert-CowBiq15.js";import"./close-button-D9xdjoDk.js";import"./use-ripple-shOr3g-0.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:r,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&r(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,r]),S=y.useMemo(()=>({finish:r,start:a}),[r,a]);return[E,P,S]},ko={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),s=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},e=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return i.jsx(q,{config:o,children:i.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})};var L,x,h;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
