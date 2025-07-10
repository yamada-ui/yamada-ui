import{aF as d,j as n,aG as g,aH as l,aI as u,r as c}from"./iframe-CzCJWi2Q.js";import{W as p}from"./wrap-S0g3aWr_.js";import{B as a}from"./button-DehxczKB.js";import"./flex-CTfg42JT.js";import"./use-ripple-Cto3JHtM.js";import"./rings-DZYkvdi_.js";const S={title:"Theme / Loading"},m=async r=>new Promise(o=>{setTimeout(o,r)}),i=()=>{const r=d(l,{loading:{background:{duration:5e3,icon:{variant:"grid"}},page:{duration:5e3,icon:{variant:"grid"}},screen:{duration:5e3,icon:{variant:"grid"}}}});return n.jsx(g,{config:r,children:n.jsx(f,{})})},e=()=>{const r=d(l,{loading:{background:{icon:{variant:"dots"}},page:{icon:{variant:"dots"}},screen:{icon:{variant:"dots"},loadingCount:1}}});return n.jsx(g,{config:r,children:n.jsx(v,{})})},f=()=>{const{background:r,page:o,screen:t}=u();return n.jsxs(p,{gap:"md",children:[n.jsx(a,{onClick:()=>t.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>o.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>r.start(),children:"Start background loading"})]})},v=()=>{const{background:r,page:o,screen:t}=u(),s=c.useCallback(async()=>{await m(5e3),t.finish()},[t]);return c.useEffect(()=>{s()},[s]),n.jsxs(p,{gap:"md",children:[n.jsx(a,{onClick:()=>t.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>o.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>r.start(),children:"Start background loading"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const config = merge(defaultConfig, {
    loading: {
      background: {
        duration: 5000,
        icon: {
          variant: "grid"
        }
      },
      page: {
        duration: 5000,
        icon: {
          variant: "grid"
        }
      },
      screen: {
        duration: 5000,
        icon: {
          variant: "grid"
        }
      }
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const config = merge(defaultConfig, {
    loading: {
      background: {
        icon: {
          variant: "dots"
        }
      },
      page: {
        icon: {
          variant: "dots"
        }
      },
      screen: {
        icon: {
          variant: "dots"
        },
        loadingCount: 1
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...e.parameters?.docs?.source}}};const P=["Basic","DefaultLoading"];export{i as Basic,e as DefaultLoading,P as __namedExportsOrder,S as default};
