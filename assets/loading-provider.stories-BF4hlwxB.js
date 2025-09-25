import{b4 as c,j as n,b5 as d,b6 as g,r as i,R as a}from"./iframe-BToZTpox.js";import{W as l}from"./wrap-BjBqFdh4.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-BLADGVni.js";const j={parameters:{layout:"centered"},title:"Theme / Loading"},p=async e=>new Promise(o=>{setTimeout(o,e)}),r=()=>{const e=c({loading:{screen:{loadingCount:1}}});return n.jsx(d,{config:e,children:n.jsx(u,{})})},u=()=>{const{background:e,page:o,screen:t}=g(),s=i.useCallback(async()=>{await p(5e3),t.finish()},[t]);return i.useEffect(()=>{s()},[s]),n.jsxs(l,{gap:"md",children:[n.jsx(a,{onClick:()=>t.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>o.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>e.start(),children:"Start background loading"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const C=["DefaultLoading"];export{r as DefaultLoading,C as __namedExportsOrder,j as default};
