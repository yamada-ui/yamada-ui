import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{On as n,jn as r}from"./props-DIwllvnO.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{r as a,t as o}from"./button-B8YJTvd2.js";import{n as s,r as c}from"./loading-provider-DFLJ8SXu.js";import{n as l,t as u}from"./wrap-Cos8GgVe.js";import{a as d,n as f,r as p}from"./iframe-CdvLLiCx.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=t(),d(),n(),a(),l(),s(),h=i(),g={parameters:{layout:`centered`},title:`Theme / Loading`},_=()=>{let{background:e,page:t,screen:n}=c(),i=(0,m.useCallback)(async()=>{await r(5e3),n.finish()},[n]);return(0,m.useEffect)(()=>{i()},[i]),(0,h.jsxs)(u,{gap:`md`,children:[(0,h.jsx)(o,{onClick:()=>n.start(),children:`Start screen loading`}),(0,h.jsx)(o,{onClick:()=>t.start(),children:`Start page loading`}),(0,h.jsx)(o,{onClick:()=>e.start(),children:`Start background loading`})]})},v=()=>{let e=p({loading:{screen:{loadingCount:1}}});return(0,h.jsx)(f,{config:e,children:(0,h.jsx)(_,{})})},y=()=>{let e=p({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}});return(0,h.jsx)(f,{config:e,children:(0,h.jsx)(_,{})})},b=[`LoadingCount`,`LoadingScheme`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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