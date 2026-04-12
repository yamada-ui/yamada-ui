import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$u as n,Ms as r,Ns as i,Wm as a,ad as o,c as s,im as c,iu as l,ld as u,o as d,ru as f,s as p}from"./iframe-ny1HWA6_.js";var m,h,g,_,v,y,b,x;e((()=>{m=t(a(),1),r(),f(),n(),d(),h=c(),g={title:`Styled System / Responsive`},_=()=>{let e=u();return(0,h.jsxs)(i,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},v=()=>{let e=s({breakpoint:{direction:`up`}}),t=()=>{let e=u();return(0,h.jsxs)(i,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{}),(0,h.jsx)(p,{config:e,children:(0,h.jsx)(t,{})})]})},y=()=>{let e=u();return(0,h.jsxs)(i,{bg:o({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`}),color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},b=()=>{let e=(0,m.useRef)(null),t=u(),n=s({breakpoint:{containerRef:e,identifier:`@container`}}),r=()=>{let e=u();return(0,h.jsxs)(l,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The container breakpoint is "`,e,`"`]})};return(0,h.jsxs)(i,{ref:e,borderWidth:`1px`,containerType:`inline-size`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,w:`full`,children:[(0,h.jsxs)(l,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The root breakpoint is "`,t,`"`]}),(0,h.jsx)(p,{config:n,children:(0,h.jsx)(r,{})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`Direction`,`Hook`,`Container`]}))();export{_ as Basic,b as Container,v as Direction,y as Hook,x as __namedExportsOrder,g as default};