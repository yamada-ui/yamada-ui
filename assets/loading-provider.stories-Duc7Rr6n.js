import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{El as n,N as r,P as i,am as a,c as o,eu as s,gl as c,o as l,qm as u,s as d,sm as f,tu as p,vm as m}from"./iframe-CXDvaz-K.js";var h,g,_,v,y,b,x;e((()=>{h=t(u(),1),l(),a(),c(),r(),s(),g=f(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:r}=p(),a=(0,h.useCallback)(async()=>{await m(5e3),r.finish()},[r]);return(0,h.useEffect)(()=>{a()},[a]),(0,g.jsxs)(i,{gap:`md`,children:[(0,g.jsx)(n,{onClick:()=>r.start(),children:`Start screen loading`}),(0,g.jsx)(n,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(n,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(d,{config:o({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(d,{config:o({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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