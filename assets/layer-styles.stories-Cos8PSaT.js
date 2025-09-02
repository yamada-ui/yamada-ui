import{aW as n,j as t,aX as o,K as s,a0 as a}from"./iframe-zUpmkGgl.js";import"./preload-helper-D9Z9MdNV.js";const m={title:"Theme / Layer Style"},e=()=>{const r=n(a,{styles:{layerStyles:{masterRoshi:{bg:"#FFF",border:"6px solid #000",boxSize:"4xs",color:"#000",fontFamily:"serif",fontSize:"8xl",fontWeight:"bold",m:"md",position:"relative",rounded:"full",_after:{bg:"#FF7F0B",boxSize:"3xs",left:"50%",position:"absolute",rounded:"md",top:"50%",transform:"translate(-50%, -50%)",zIndex:-1}}}}});return t.jsx(o,{theme:r,children:t.jsx(s,{layerStyle:"masterRoshi",children:"亀"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const layerStyles: CSSModifierObject = {
    masterRoshi: {
      bg: "#FFF",
      border: "6px solid #000",
      boxSize: "4xs",
      color: "#000",
      fontFamily: "serif",
      fontSize: "8xl",
      fontWeight: "bold",
      m: "md",
      position: "relative",
      rounded: "full",
      _after: {
        bg: "#FF7F0B",
        boxSize: "3xs",
        left: "50%",
        position: "absolute",
        rounded: "md",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1
      }
    }
  };
  const theme = merge(defaultTheme, {
    styles: {
      layerStyles
    }
  });
  return <UIProvider theme={theme}>
      <Center layerStyle="masterRoshi">亀</Center>
    </UIProvider>;
}`,...e.parameters?.docs?.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,m as default};
