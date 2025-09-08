import{j as e,aX as d,aY as u,r as x,T as c}from"./iframe-6Bjnmk15.js";import{B as l}from"./box-CFI6uNm2.js";import{u as k}from"./use-breakpoint-value-DpYoCjbb.js";import{u as o}from"./use-breakpoint-Dh_Zsenw.js";import"./preload-helper-D9Z9MdNV.js";const B={title:"Styled System / Responsive"},t=()=>{const n=o();return e.jsxs(l,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',n,'"']})},i=()=>{const n=d({breakpoint:{direction:"up"}}),r=()=>{const p=o();return e.jsxs(l,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',p,'"']})};return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(u,{config:n,children:e.jsx(r,{})})]})},s=()=>{const n=o(),r=k({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return e.jsxs(l,{bg:r,color:"white",p:"md",rounded:"l2",transitionDuration:"moderate",transitionProperty:"all",children:['The current breakpoint is "',n,'"']})},a=()=>{const n=x.useRef(null),r=o(),p=d({breakpoint:{containerRef:n,identifier:"@container"}}),m=()=>{const b=o();return e.jsxs(c,{color:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},children:['The container breakpoint is "',b,'"']})};return e.jsxs(l,{ref:n,borderWidth:"1px",containerType:"inline-size",overflow:"auto",p:"md",resize:"inline",rounded:"l2",w:"full",children:[e.jsxs(c,{color:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},children:['The root breakpoint is "',r,'"']}),e.jsx(u,{config:p,children:e.jsx(m,{})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const T=["Basic","Direction","Hook","Container"];export{t as Basic,a as Container,i as Direction,s as Hook,T as __namedExportsOrder,B as default};
