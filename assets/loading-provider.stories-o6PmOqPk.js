import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{er as r,pt as i}from"./core-RNiP33lW.js";import{t as a}from"./jsx-runtime-BBQGix-2.js";import{_ as o,v as s}from"./loading-CkDfhjuh.js";import{d as c,t as l}from"./button-CqpQ8yWo.js";import{A as u,at as d,j as f,k as p,ot as m}from"./iframe-1VXrorm8.js";var h,g,_,v,y,b,x;t((()=>{h=e(n(),1),p(),i(),l(),d(),o(),g=a(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:n}=s(),i=(0,h.useCallback)(async()=>{await r(5e3),n.finish()},[n]);return(0,h.useEffect)(()=>{i()},[i]),(0,g.jsxs)(m,{gap:`md`,children:[(0,g.jsx)(c,{onClick:()=>n.start(),children:`Start screen loading`}),(0,g.jsx)(c,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(c,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(u,{config:f({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(u,{config:f({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`LoadingCount`,`LoadingScheme`]}))();export{y as LoadingCount,b as LoadingScheme,x as __namedExportsOrder,_ as default};