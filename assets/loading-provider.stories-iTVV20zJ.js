import{b9 as d,j as n,ba as g,bb as p,r as i,Q as t}from"./iframe-D0k82VKj.js";import{W as m}from"./wrap-CSHnAtYr.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DfSuxPUO.js";const C={parameters:{layout:"centered"},title:"Theme / Loading"},u=async e=>new Promise(a=>{setTimeout(a,e)}),l=()=>{const{background:e,page:a,screen:s}=p(),c=i.useCallback(async()=>{await u(5e3),s.finish()},[s]);return i.useEffect(()=>{c()},[c]),n.jsxs(m,{gap:"md",children:[n.jsx(t,{onClick:()=>s.start(),children:"Start screen loading"}),n.jsx(t,{onClick:()=>a.start(),children:"Start page loading"}),n.jsx(t,{onClick:()=>e.start(),children:"Start background loading"})]})},o=()=>{const e=d({loading:{screen:{loadingCount:1}}});return n.jsx(g,{config:e,children:n.jsx(l,{})})},r=()=>{const e=d({loading:{background:{loadingScheme:"puff"},page:{loadingScheme:"dots"},screen:{loadingScheme:"grid"}}});return n.jsx(g,{config:e,children:n.jsx(l,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const j=["LoadingCount","LoadingScheme"];export{o as LoadingCount,r as LoadingScheme,j as __namedExportsOrder,C as default};
