import{ba as f,j as n,bb as h,bc as S,r as i,Q as t}from"./iframe-BIJNUwA0.js";import{W as C}from"./wrap-MJNmnQxq.js";import"./preload-helper-C1FmrZbK.js";import"./flex-KEdsfNWm.js";const y={parameters:{layout:"centered"},title:"Theme / Loading"},j=async e=>new Promise(a=>{setTimeout(a,e)}),x=()=>{const{background:e,page:a,screen:s}=S(),c=i.useCallback(async()=>{await j(5e3),s.finish()},[s]);return i.useEffect(()=>{c()},[c]),n.jsxs(C,{gap:"md",children:[n.jsx(t,{onClick:()=>s.start(),children:"Start screen loading"}),n.jsx(t,{onClick:()=>a.start(),children:"Start page loading"}),n.jsx(t,{onClick:()=>e.start(),children:"Start background loading"})]})},o=()=>{const e=f({loading:{screen:{loadingCount:1}}});return n.jsx(h,{config:e,children:n.jsx(x,{})})},r=()=>{const e=f({loading:{background:{loadingScheme:"puff"},page:{loadingScheme:"dots"},screen:{loadingScheme:"grid"}}});return n.jsx(h,{config:e,children:n.jsx(x,{})})};var d,g,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        loadingCount: 1
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      background: {
        loadingScheme: "puff"
      },
      page: {
        loadingScheme: "dots"
      },
      screen: {
        loadingScheme: "grid"
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["LoadingCount","LoadingScheme"];export{o as LoadingCount,r as LoadingScheme,A as __namedExportsOrder,y as default};
