import{j as i}from"./jsx-runtime-CfatFE5O.js";import{u as H}from"./index-CnMPHF3L.js";import{r as y}from"./index-ClcD9ViR.js";import{u as M}from"./loading-provider-DwZ6aWGm.js";import{u as R}from"./theme-provider-Dit74geM.js";import{U as q}from"./ui-provider-xzfBwVsg.js";import{B as d}from"./button-B8Q1YJpe.js";import{e as z}from"./extend-config-DF1dxLcm.js";import"./index-gGKStiao.js";import"./factory-Bqmz9C5P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FkUjIXEe.js";import"./Combination-CkmEMpJG.js";import"./loading-CmllsJT7.js";import"./icon-DeZ7GCXS.js";import"./use-component-style-D7fUVUlo.js";import"./use-var-DKkLsRXg.js";import"./forward-ref-D13m8o2p.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-Cbq3E2qU.js";import"./index-C1v1tYaZ.js";import"./i18n-provider-D80ymFzi.js";import"./notice-BUUybEK3.js";import"./alert-BhrbxAIR.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:r,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&r(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,r]),S=y.useMemo(()=>({finish:r,start:a}),[r,a]);return[E,P,S]},wo={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),s=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},e=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return i.jsx(q,{config:o,children:i.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})};var L,x,h;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const yo=["basic","withLoading","withConfig"];export{yo as __namedExportsOrder,s as basic,wo as default,c as withConfig,e as withLoading};
