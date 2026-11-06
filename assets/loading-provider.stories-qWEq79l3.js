import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{An as n,Dn as r}from"./props-BMk_kdQM.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{r as a,t as o}from"./button-CmOvQp3A.js";import{n as s,r as c}from"./loading-provider-D40tfwIm.js";import{n as l,t as u}from"./wrap-DnActldc.js";import{a as d,n as f,r as p}from"./iframe-DUIqx_t6.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=t(),d(),r(),a(),l(),s(),h=i(),g={parameters:{layout:`centered`},title:`Theme / Loading`},_=()=>{let{background:e,page:t,screen:r}=c(),i=(0,m.useCallback)(async()=>{await n(5e3),r.finish()},[r]);return(0,m.useEffect)(()=>{i()},[i]),(0,h.jsxs)(u,{gap:`md`,children:[(0,h.jsx)(o,{onClick:()=>r.start(),children:`Start screen loading`}),(0,h.jsx)(o,{onClick:()=>t.start(),children:`Start page loading`}),(0,h.jsx)(o,{onClick:()=>e.start(),children:`Start background loading`})]})},v=()=>{let e=p({loading:{screen:{loadingCount:1}}});return(0,h.jsx)(f,{config:e,children:(0,h.jsx)(_,{})})},y=()=>{let e=p({loading:{background:{loadingScheme:`puff`},page:{loadingScheme:`dots`},screen:{loadingScheme:`grid`}}});return(0,h.jsx)(f,{config:e,children:(0,h.jsx)(_,{})})},b=[`LoadingCount`,`LoadingScheme`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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