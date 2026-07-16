import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{n as i}from"./use-breakpoint-Bvshk7i8.js";import{r as a}from"./use-breakpoint-value-BJzc0KI1.js";import{r as o}from"./use-value-DYIVtk6a.js";import{t as s}from"./text-ljAYVXXn.js";import{t as c}from"./text-DGi1MGSU.js";import{A as l,Fl as u,M as d,Pl as f,j as p}from"./iframe-D5Y3ROF5.js";var m,h,g,_,v,y,b,x;t((()=>{m=e(n(),1),f(),c(),o(),l(),h=r(),g={title:`Styled System / Responsive`},_=()=>(0,h.jsxs)(u,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,i(),`"`]}),v=()=>{let e=d({breakpoint:{direction:`up`}}),t=()=>(0,h.jsxs)(u,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,i(),`"`]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{}),(0,h.jsx)(p,{config:e,children:(0,h.jsx)(t,{})})]})},y=()=>{let e=i();return(0,h.jsxs)(u,{bg:a({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`}),color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},b=()=>{let e=(0,m.useRef)(null),t=i(),n=d({breakpoint:{containerRef:e,identifier:`@container`}});return(0,h.jsxs)(u,{ref:e,borderWidth:`1px`,containerType:`inline-size`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,w:`full`,children:[(0,h.jsxs)(s,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The root breakpoint is "`,t,`"`]}),(0,h.jsx)(p,{config:n,children:(0,h.jsx)(()=>(0,h.jsxs)(s,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The container breakpoint is "`,i(),`"`]}),{})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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