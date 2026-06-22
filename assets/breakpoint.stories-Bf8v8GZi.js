import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{n as i}from"./use-breakpoint-DX4BfxQ2.js";import{r as a}from"./use-breakpoint-value-B61RdR90.js";import{r as o}from"./use-value-B5vGjWvw.js";import{t as s}from"./text-D-jnAopL.js";import{t as c}from"./text-DV5bCi2n.js";import{A as l,M as u,Ol as d,j as f,kl as p}from"./iframe-CgnmJX3j.js";var m,h,g,_,v,y,b,x;t((()=>{m=e(n(),1),d(),c(),o(),l(),h=r(),g={title:`Styled System / Responsive`},_=()=>(0,h.jsxs)(p,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,i(),`"`]}),v=()=>{let e=u({breakpoint:{direction:`up`}}),t=()=>(0,h.jsxs)(p,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,i(),`"`]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{}),(0,h.jsx)(f,{config:e,children:(0,h.jsx)(t,{})})]})},y=()=>{let e=i();return(0,h.jsxs)(p,{bg:a({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`}),color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},b=()=>{let e=(0,m.useRef)(null),t=i(),n=u({breakpoint:{containerRef:e,identifier:`@container`}});return(0,h.jsxs)(p,{ref:e,borderWidth:`1px`,containerType:`inline-size`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,w:`full`,children:[(0,h.jsxs)(s,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The root breakpoint is "`,t,`"`]}),(0,h.jsx)(f,{config:n,children:(0,h.jsx)(()=>(0,h.jsxs)(s,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The container breakpoint is "`,i(),`"`]}),{})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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