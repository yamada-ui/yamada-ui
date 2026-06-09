import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{A as n,Dv as r,Hv as i,M as a,Nf as o,Pd as s,Pf as c,at as l,by as u,it as d,j as f,qd as p,wv as m}from"./iframe-CM6ym36p.js";var h,g,_,v,y,b,x;t((()=>{h=e(u(),1),n(),m(),s(),d(),o(),g=r(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:n}=c(),r=(0,h.useCallback)(async()=>{await i(5e3),n.finish()},[n]);return(0,h.useEffect)(()=>{r()},[r]),(0,g.jsxs)(l,{gap:`md`,children:[(0,g.jsx)(p,{onClick:()=>n.start(),children:`Start screen loading`}),(0,g.jsx)(p,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(p,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(f,{config:a({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(f,{config:a({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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