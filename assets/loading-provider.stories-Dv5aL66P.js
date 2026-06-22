import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{Qn as r,dt as i}from"./core-DkLkzQLq.js";import{t as a}from"./jsx-runtime-O9QVJvLM.js";import{_ as o,v as s}from"./loading-D0Ujax3G.js";import{d as c,t as l}from"./button-Dd3r5aCq.js";import{A as u,M as d,at as f,it as p,j as m}from"./iframe-wumx2IEZ.js";var h,g,_,v,y,b,x;t((()=>{h=e(n(),1),u(),i(),l(),p(),o(),g=a(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:n}=s(),i=(0,h.useCallback)(async()=>{await r(5e3),n.finish()},[n]);return(0,h.useEffect)(()=>{i()},[i]),(0,g.jsxs)(f,{gap:`md`,children:[(0,g.jsx)(c,{onClick:()=>n.start(),children:`Start screen loading`}),(0,g.jsx)(c,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(c,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(m,{config:d({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(m,{config:d({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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