import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{u as H}from"./index-CxhrTr4O.js";import{r as y}from"./index-BwPxMuoB.js";import{u as M}from"./loading-provider-kitZsRjt.js";import{u as R}from"./theme-provider-ChqdwXGn.js";import{U as q}from"./ui-provider-BrTCx3ip.js";import{B as d}from"./button-CqSjNDtY.js";import{e as z}from"./extend-config-BT9SHMtk.js";import"./index-qZwaV1-B.js";import"./factory-DbNU74ts.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dog50vdO.js";import"./Combination-4Rar1Jsv.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-component-style-CpB_lyT3.js";import"./use-var-DlbRU9j0.js";import"./forward-ref-Ukjd1cIW.js";import"./memo-CPHdbx3K.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./factory-DGyI5Ya3.js";import"./index-j-_balfN.js";import"./i18n-provider-D58p8CY1.js";import"./notice-DQQ0jAKh.js";import"./alert-n1mY6WpW.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";const u=(o,n,{loading:f,loadingOptions:C,processing:m=!0}={})=>{var k,w;const{theme:v}=R(),p=M(),{finish:i,isLoading:E,start:a}=H(),l=f!==!1,I=(w=(k=v.__config)==null?void 0:k.loading)==null?void 0:w.defaultComponent,t=f||I,P=y.useCallback(async(...T)=>{try{return m&&a(),l&&t&&p[t].start(C),await o(...T)}finally{m&&i(),l&&t&&p[t].finish()}},[...n,m,l,p,t,C,o,a,i]),S=y.useMemo(()=>({finish:i,start:a}),[i,a]);return[E,P,S]},yo={title:"Hooks / useAsyncCallback"},g=async o=>new Promise(n=>{setTimeout(n,o)}),e=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return r.jsx(d,{loading:o,onClick:n,children:"Click me"})},s=()=>{const[o,n]=u(async()=>{await g(3e3)},[],{loading:"page"});return r.jsx(d,{loading:o,onClick:n,children:"Click me"})},c=()=>{const o=z({loading:{defaultComponent:"page"}});return r.jsx(q,{config:o,children:r.jsx(D,{})})},D=()=>{const[o,n]=u(async()=>{await g(3e3)},[]);return r.jsx(d,{loading:o,onClick:n,children:"Click me"})};var x,h,b;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
