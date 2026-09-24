import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i,t as a}from"./ui-provider-CBf3K5m0.js";import{n as o,t as s}from"./use-breakpoint-CiDR4MUo.js";import{n as c,r as l}from"./use-breakpoint-value-BoYJS0v4.js";import{n as u,t as d}from"./text-b2W5euYI.js";import{n as f,t as p}from"./box-C47iDJeO.js";var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{m=t(),f(),u(),s(),c(),r(),h=n(),g={title:`Styled System / Responsive`},_=()=>{let e=o();return(0,h.jsxs)(p,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},v=()=>{let e=i({breakpoint:{direction:`up`}}),t=()=>{let e=o();return(0,h.jsxs)(p,{bg:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t,{}),(0,h.jsx)(a,{config:e,children:(0,h.jsx)(t,{})})]})},y=()=>{let e=o(),t=l({base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`});return(0,h.jsxs)(p,{bg:t,color:`white`,p:`md`,rounded:`l2`,transitionDuration:`moderate`,transitionProperty:`all`,children:[`The current breakpoint is "`,e,`"`]})},b=()=>{let e=(0,m.useRef)(null),t=o(),n=i({breakpoint:{containerRef:e,identifier:`@container`}});return(0,h.jsxs)(p,{ref:e,borderWidth:`1px`,containerType:`inline-size`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,w:`full`,children:[(0,h.jsxs)(d,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The root breakpoint is "`,t,`"`]}),(0,h.jsx)(a,{config:n,children:(0,h.jsx)(()=>{let e=o();return(0,h.jsxs)(d,{color:{base:`red.500`,sm:`purple.500`,md:`yellow.500`,lg:`green.500`,xl:`blue.500`,"2xl":`pink.500`},children:[`The container breakpoint is "`,e,`"`]})},{})})]})},x=[`Basic`,`Direction`,`Hook`,`Container`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as Basic,b as Container,v as Direction,y as Hook,x as __namedExportsOrder,g as default};