import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./use-breakpoint-BRHCF_7y.js";import{n as a,r as o}from"./use-breakpoint-value-BFvbSiMp.js";import{n as s,t as c}from"./text-DasPpCU0.js";import{n as l,t as u}from"./box-Dnd1KywF.js";import{i as d,n as f,o as p,r as m}from"./iframe-Kpp_3rXj.js";var h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{h=t(),l(),s(),i(),a(),p(),m(),g=n(),_={title:`Styled System / Responsive`},v=()=>{let e=r();return(0,g.jsxs)(u,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},y=()=>{let e=d({breakpoint:{direction:`up`}}),t=()=>{let e=r();return(0,g.jsxs)(u,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t,{}),(0,g.jsx)(f,{config:e,children:(0,g.jsx)(t,{})})]})},b=()=>{let e=r(),t=o({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`});return(0,g.jsxs)(u,{bg:t,color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},x=()=>{let e=(0,h.useRef)(null),t=r(),n=d({breakpoint:{containerRef:e,identifier:`@container`}});return(0,g.jsxs)(u,{ref:e,borderWidth:`1px`,containerType:`inline-size`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,w:`full`,children:[(0,g.jsxs)(c,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The root breakpoint is "`,t,`"`]}),(0,g.jsx)(f,{config:n,children:(0,g.jsx)(()=>{let e=r();return(0,g.jsxs)(c,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The container breakpoint is "`,e,`"`]})},{})})]})},S=[`Basic`,`Direction`,`Hook`,`Container`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  }} color="white" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const config = extendConfig({
    breakpoint: {
      direction: "up"
    }
  });
  const App: FC = () => {
    const breakpoint = useBreakpoint();
    return <Box bg={{
      base: "red.500",
      sm: "purple.500",
      md: "yellow.500",
      lg: "green.500",
      xl: "blue.500",
      "2xl": "pink.500"
    }} color="white" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
        The current breakpoint is "{breakpoint}"
      </Box>;
  };
  return <>
      <App />

      <UIProvider config={config}>
        <App />
      </UIProvider>
    </>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  });
  return <Box bg={bg} color="white" p="md" rounded="l2" transitionDuration="moderate" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpoint();
  const config = extendConfig({
    breakpoint: {
      containerRef,
      identifier: "@container"
    }
  });
  const App: FC = () => {
    const breakpoint = useBreakpoint();
    return <Text color={{
      base: "red.500",
      sm: "purple.500",
      md: "yellow.500",
      lg: "green.500",
      xl: "blue.500",
      "2xl": "pink.500"
    }}>
        The container breakpoint is "{breakpoint}"
      </Text>;
  };
  return <Box ref={containerRef} borderWidth="1px" containerType="inline-size" overflow="auto" p="md" resize="inline" rounded="l2" w="full">
      <Text color={{
      base: "red.500",
      sm: "purple.500",
      md: "yellow.500",
      lg: "green.500",
      xl: "blue.500",
      "2xl": "pink.500"
    }}>
        The root breakpoint is "{breakpoint}"
      </Text>

      <UIProvider config={config}>
        <App />
      </UIProvider>
    </Box>;
}`,...x.parameters?.docs?.source}}}})))()}C();export{v as Basic,x as Container,y as Direction,b as Hook,S as __namedExportsOrder,_ as default};