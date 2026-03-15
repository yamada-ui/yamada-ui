import{bQ as i,j as n,bR as d,bT as p,r as c,bj as u,Q as s}from"./iframe-BYxWTAfU.js";import{W as m}from"./wrap-EDT7itfC.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-njHzf6oI.js";const j={parameters:{layout:"centered"},title:"Theme / Loading"},g=()=>{const{background:e,page:l,screen:a}=p(),t=c.useCallback(async()=>{await u(5e3),a.finish()},[a]);return c.useEffect(()=>{t()},[t]),n.jsxs(m,{gap:"md",children:[n.jsx(s,{onClick:()=>a.start(),children:"Start screen loading"}),n.jsx(s,{onClick:()=>l.start(),children:"Start page loading"}),n.jsx(s,{onClick:()=>e.start(),children:"Start background loading"})]})},o=()=>{const e=i({loading:{screen:{loadingCount:1}}});return n.jsx(d,{config:e,children:n.jsx(g,{})})},r=()=>{const e=i({loading:{background:{loadingScheme:"puff"},page:{loadingScheme:"dots"},screen:{loadingScheme:"grid"}}});return n.jsx(d,{config:e,children:n.jsx(g,{})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const C=["LoadingCount","LoadingScheme"];export{o as LoadingCount,r as LoadingScheme,C as __namedExportsOrder,j as default};
