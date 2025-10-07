import{c4 as r,j as t,b7 as o,Z as s}from"./iframe-Dp_HdYH_.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Theme / Layer Style"},e=()=>{const n=r({styles:{layerStyles:{masterRoshi:{bg:"#FFF",border:"6px solid #000",boxSize:"4xs",color:"#000",fontFamily:"serif",fontSize:"8xl",fontWeight:"bold",m:"md",position:"relative",rounded:"full",_after:{bg:"#FF7F0B",boxSize:"3xs",left:"50%",position:"absolute",rounded:"md",top:"50%",transform:"translate(-50%, -50%)",zIndex:-1}}}}});return t.jsx(o,{theme:n,children:t.jsx(s,{layerStyle:"masterRoshi",children:"亀"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
  const theme = extendTheme({
    styles: {
      layerStyles
    }
  });
  return <UIProvider theme={theme}>
      <Center layerStyle="masterRoshi">亀</Center>
    </UIProvider>;
}`,...e.parameters?.docs?.source}}};const m=["Basic"];export{e as Basic,m as __namedExportsOrder,d as default};
