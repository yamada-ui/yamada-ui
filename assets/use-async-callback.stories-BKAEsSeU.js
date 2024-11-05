import{j as i}from"./extends-CwFRzn3r.js";import{u as H}from"./index-z6ECgnn3.js";import{r as y}from"./index-BwDkhjyp.js";import{u as M}from"./loading-provider-DkzdpH5x.js";import{u as R}from"./theme-provider-B8NHi_rL.js";import{U as q}from"./ui-provider-BxBnoAgx.js";import{B as d}from"./button-BEXyR-Sf.js";import{e as z}from"./extend-config-C-nv14_6.js";import"./index-CoJrGj-T.js";import"./factory-CBW6YcbY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BhJ-TW00.js";import"./Combination-IUp2vs9T.js";import"./loading-DEEkIiUz.js";import"./icon-CQ7oKYSm.js";import"./use-component-style-Givb0biW.js";import"./use-var-BcRMoVLh.js";import"./forward-ref-BWI-Phbn.js";import"./memo-B6TlvQ0B.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./portal-DCEThVLn.js";import"./index-CS4BWtGh.js";import"./factory-B6ZnNkK9.js";import"./index-CuwBS6-L.js";import"./notice-C-sox9-H.js";import"./alert-DgIzU9p9.js";import"./triangle-alert-C2tUJAbO.js";import"./lucide-icon-4Wt4_XDL.js";import"./close-button-C6-nxxOU.js";import"./use-ripple-BqSD0U-m.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:r,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&r(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,r]),S=y.useMemo(()=>({finish:r,start:a}),[r,a]);return[E,P,S]},yo={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),s=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},e=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return i.jsx(q,{config:o,children:i.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return i.jsx(d,{isLoading:o,onClick:n,children:"Click me"})};var L,x,h;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const Lo=["basic","withLoading","withConfig"];export{Lo as __namedExportsOrder,s as basic,yo as default,c as withConfig,e as withLoading};
