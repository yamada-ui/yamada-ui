import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{An as n,Dn as r}from"./props-DZ_NCL29.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{r as a,t as o}from"./button-BfYhzfkR.js";import{n as s,r as c}from"./loading-provider-GVmA0e__.js";import{n as l,t as u}from"./wrap-ad9kvM3c.js";import{i as d,n as f,o as p,r as m}from"./iframe--XLkK5ME.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=t(),p(),m(),r(),a(),l(),s(),g=i(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:r}=c(),i=(0,h.useCallback)(async()=>{await n(5e3),r.finish()},[r]);return(0,h.useEffect)(()=>{i()},[i]),(0,g.jsxs)(u,{gap:`md`,children:[(0,g.jsx)(o,{onClick:()=>r.start(),children:`Start screen loading`}),(0,g.jsx)(o,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(o,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>{let e=d({loading:{screen:{loadingCount:1}}});return(0,g.jsx)(f,{config:e,children:(0,g.jsx)(v,{})})},b=()=>{let e=d({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}});return(0,g.jsx)(f,{config:e,children:(0,g.jsx)(v,{})})},x=[`LoadingCount`,`LoadingScheme`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as LoadingCount,b as LoadingScheme,x as __namedExportsOrder,_ as default};