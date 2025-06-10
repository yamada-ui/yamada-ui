import{j as r}from"./jsx-runtime-DztICxWZ.js";import{u as H}from"./index-DJNQ1H65.js";import{r as y}from"./index-Bv9Y92EF.js";import{u as M}from"./loading-provider-DbAaOp8i.js";import{u as R}from"./theme-provider-DsbwOWxu.js";import{U as q}from"./ui-provider-BhqK2kQi.js";import{B as d}from"./button-nZ2ZqBRb.js";import{e as z}from"./extend-config-PHBcbboa.js";import"./index-YFprnXPi.js";import"./factory-7Z88KRtK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CIBO3FO4.js";import"./Combination--fBz1e3g.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./use-var-Bz9rJ8_M.js";import"./forward-ref-DH6f5tnY.js";import"./memo-BZ69bafo.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./factory-UaNlpug7.js";import"./index-BylWRU36.js";import"./i18n-provider-CmpcPFo-.js";import"./notice-BMy32cRJ.js";import"./alert-kLbVPxqu.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:i,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&i(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,i]),S=y.useMemo(()=>({finish:i,start:a}),[i,a]);return[E,P,S]},yo={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),e=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return r.jsx(d,{loading:o,onClick:n,children:"Click me"})},s=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return r.jsx(d,{loading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return r.jsx(q,{config:o,children:r.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return r.jsx(d,{loading:o,onClick:n,children:"Click me"})};var x,h,b;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, []);
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...(b=(h=e.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var j,A,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [loading, onClick] = useAsyncCallback(async () => {
    await wait(3000);
  }, [], {
    loading: "page"
  });
  return <Button loading={loading} onClick={onClick}>
      Click me
    </Button>;
}`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var L,U,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      defaultComponent: "page"
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const xo=["basic","withLoading","withConfig"];export{xo as __namedExportsOrder,e as basic,yo as default,c as withConfig,s as withLoading};
