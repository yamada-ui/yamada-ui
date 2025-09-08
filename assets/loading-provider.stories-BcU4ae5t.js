import{aX as c,j as n,aY as d,aZ as g,r as i}from"./iframe-6Bjnmk15.js";import{W as p}from"./wrap-fOOK-PMa.js";import{B as a}from"./button-CsD90Sgr.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-DoVac8e8.js";import"./button.style-BS6NiYW5.js";import"./use-ripple-DerRjSwg.js";import"./rings-B9NsMSz3.js";const v={title:"Theme / Loading"},l=async r=>new Promise(t=>{setTimeout(t,r)}),o=()=>{const r=c({loading:{screen:{loadingCount:1}}});return n.jsx(d,{config:r,children:n.jsx(m,{})})},m=()=>{const{background:r,page:t,screen:e}=g(),s=i.useCallback(async()=>{await l(5e3),e.finish()},[e]);return i.useEffect(()=>{s()},[s]),n.jsxs(p,{gap:"md",children:[n.jsx(a,{onClick:()=>e.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>t.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>r.start(),children:"Start background loading"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const y=["DefaultLoading"];export{o as DefaultLoading,y as __namedExportsOrder,v as default};
