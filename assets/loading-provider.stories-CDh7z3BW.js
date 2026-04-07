import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{B as n,Sp as r,Su as i,Xp as a,c as o,dp as s,jl as c,o as l,pp as u,s as d,xl as f,xu as p,z as m}from"./iframe-ocB1-JHi.js";var h,g,_,v,y,b,x;e((()=>{h=t(a(),1),l(),s(),f(),m(),p(),g=u(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:a}=i(),o=(0,h.useCallback)(async()=>{await r(5e3),a.finish()},[a]);return(0,h.useEffect)(()=>{o()},[o]),(0,g.jsxs)(n,{gap:`md`,children:[(0,g.jsx)(c,{onClick:()=>a.start(),children:`Start screen loading`}),(0,g.jsx)(c,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(c,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(d,{config:o({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(d,{config:o({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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