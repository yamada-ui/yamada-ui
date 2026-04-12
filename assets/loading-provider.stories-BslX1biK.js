import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$l as n,N as r,P as i,Ql as a,Wm as o,c as s,hm as c,im as l,ml as u,nm as d,o as f,s as p,wl as m}from"./iframe-ny1HWA6_.js";var h,g,_,v,y,b,x;e((()=>{h=t(o(),1),f(),d(),u(),r(),a(),g=l(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:r}=n(),a=(0,h.useCallback)(async()=>{await c(5e3),r.finish()},[r]);return(0,h.useEffect)(()=>{a()},[a]),(0,g.jsxs)(i,{gap:`md`,children:[(0,g.jsx)(m,{onClick:()=>r.start(),children:`Start screen loading`}),(0,g.jsx)(m,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(m,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(p,{config:s({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(p,{config:s({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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