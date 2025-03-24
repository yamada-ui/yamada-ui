import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{u as H}from"./index-bFM6bsx5.js";import{r as y}from"./index-BwPxMuoB.js";import{u as M}from"./loading-provider-DTTuAu7E.js";import{u as R}from"./theme-provider-DGyR61Aa.js";import{U as q}from"./ui-provider-CfomT70t.js";import{B as d}from"./button-Dm54j0EP.js";import{e as z}from"./extend-config-B0-JQXbq.js";import"./index-qZwaV1-B.js";import"./factory-B_KMcXyW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DSCI00mi.js";import"./Combination-4Rar1Jsv.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./use-var-Tj-aA0qb.js";import"./forward-ref-Ukjd1cIW.js";import"./memo-CPHdbx3K.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./portal-DnDmgWrA.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./factory-CplEbptb.js";import"./index-BY-sriDS.js";import"./i18n-provider-D_kv1vSA.js";import"./notice-BteKmIuu.js";import"./alert-CFbf-Wsq.js";import"./close-button-DYk-GqDy.js";import"./use-ripple-DqSHYmP8.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:i,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&i(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,i]),S=y.useMemo(()=>({finish:i,start:a}),[i,a]);return[E,P,S]},yo={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),e=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return r.jsx(d,{loading:o,onClick:n,children:"Click me"})},s=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return r.jsx(d,{loading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return r.jsx(q,{config:o,children:r.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return r.jsx(d,{loading:o,onClick:n,children:"Click me"})};var x,h,b;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
