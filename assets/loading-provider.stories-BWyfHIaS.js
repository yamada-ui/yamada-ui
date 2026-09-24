import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{wn as n,xn as r}from"./props-Bz1FL_va.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{i as a,n as o,t as s}from"./ui-provider-CBf3K5m0.js";import{r as c,t as l}from"./button-CFBNyQlD.js";import{n as u,r as d}from"./loading-provider-iuAjRPF4.js";import{n as f,t as p}from"./wrap-Dg19SbjB.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=t(),a(),r(),c(),f(),u(),h=i(),g={parameters:{layout:`centered`},title:`Theme / Loading`},_=()=>{let{background:e,page:t,screen:r}=d(),i=(0,m.useCallback)(async()=>{await n(5e3),r.finish()},[r]);return(0,m.useEffect)(()=>{i()},[i]),(0,h.jsxs)(p,{gap:`md`,children:[(0,h.jsx)(l,{onClick:()=>r.start(),children:`Start screen loading`}),(0,h.jsx)(l,{onClick:()=>t.start(),children:`Start page loading`}),(0,h.jsx)(l,{onClick:()=>e.start(),children:`Start background loading`})]})},v=()=>{let e=o({loading:{screen:{loadingCount:1}}});return(0,h.jsx)(s,{config:e,children:(0,h.jsx)(_,{})})},y=()=>{let e=o({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}});return(0,h.jsx)(s,{config:e,children:(0,h.jsx)(_,{})})},b=[`LoadingCount`,`LoadingScheme`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as LoadingCount,y as LoadingScheme,b as __namedExportsOrder,g as default};