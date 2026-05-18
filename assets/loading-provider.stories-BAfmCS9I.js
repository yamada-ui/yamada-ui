import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-CMXXrKHu.js";import{En as r,Z as i}from"./core-D0ebHbTd.js";import{t as a}from"./jsx-runtime-D_578c1K.js";import{n as o,r as s,t as c}from"./ui-provider-CdylTemx.js";import{d as l,u}from"./loading-w3wb14Gy.js";import{l as d,t as f}from"./button-BAB7Fua7.js";import{t as p}from"./wrap-B7oi1pNn.js";import{T as m}from"./iframe-yFPvjW-A.js";var h,g,_,v,y,b,x;e((()=>{h=t(n(),1),c(),i(),f(),m(),u(),g=a(),_={parameters:{layout:`centered`},title:`Theme / Loading`},v=()=>{let{background:e,page:t,screen:n}=l(),i=(0,h.useCallback)(async()=>{await r(5e3),n.finish()},[n]);return(0,h.useEffect)(()=>{i()},[i]),(0,g.jsxs)(p,{gap:`md`,children:[(0,g.jsx)(d,{onClick:()=>n.start(),children:`Start screen loading`}),(0,g.jsx)(d,{onClick:()=>t.start(),children:`Start page loading`}),(0,g.jsx)(d,{onClick:()=>e.start(),children:`Start background loading`})]})},y=()=>(0,g.jsx)(o,{config:s({loading:{screen:{loadingCount:1}}}),children:(0,g.jsx)(v,{})}),b=()=>(0,g.jsx)(o,{config:s({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}}),children:(0,g.jsx)(v,{})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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