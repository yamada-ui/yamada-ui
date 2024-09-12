import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as n,d as z}from"./index-DkkKXtPY.js";import{r as v}from"./index-BwDkhjyp.js";import{U as C}from"./ui-provider-Cu1AqUuF.js";import{C as R}from"./calendar-DefqZolT.js";import{B as l}from"./box-Bfrem8P5.js";import{e as P}from"./extend-config-BMlsS_ed.js";import{T as p}from"./text-BJvDpKxV.js";import{B as S}from"./button-Bi9n-vY3.js";import{T as D}from"./tag-DeB5X3hv.js";import"./theme-provider-jP6jS-pg.js";import"./factory-C2Uq3ahE.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CnSrmUBS.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-B7yikQzP.js";import"./index-BTZYfykl.js";import"./Combination-CONbhR2A.js";import"./loading-BNVTi1QG.js";import"./icon-sIHrqgYT.js";import"./index-UM7KnhWq.js";import"./use-component-style-Bx1vUO5y.js";import"./forward-ref-DKTvpK5d.js";import"./factory-uWFUvYzf.js";import"./container-portal-C3bX__47.js";import"./index-DxjWwZXO.js";import"./notice-B_nwBXae.js";import"./alert-Bdbz62Ge.js";import"./close-button-BxbDD0Pp.js";import"./use-ripple-Cy0wrTvg.js";import"./index-JO6qx1eo.js";import"./icon-button-BYhYpu9p.js";import"./index-DIig5QpT.js";import"./index-Cphrmm8n.js";const ue={title:"System / Styles / Responsive"},o=()=>{const r=n();return e.jsxs(l,{bg:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=n(),a=z({base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return e.jsxs(l,{bg:a,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},i=()=>{const r=v.useRef(null),a=n(),B=P({breakpoint:{containerRef:r,identifier:"@container"}}),y=()=>{const j=n();return e.jsxs(p,{color:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The container breakpoint is "',j,'"']})};return e.jsxs(l,{ref:r,containerType:"inline-size",resize:"inline",overflow:"auto",w:"full",p:"md",borderWidth:"1px",rounded:"md",children:[e.jsxs(p,{color:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The root breakpoint is "',a,'"']}),e.jsx(C,{config:B,children:e.jsx(y,{})})]})},s=()=>{const r=n();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:['The current breakpoint is "',r,'"']}),e.jsx(S,{size:{base:"lg",md:"md"},children:"Button"}),e.jsx(D,{size:{base:"lg",md:"md"},children:"Tag"}),e.jsx(R,{size:{base:"lg",md:"md"}})]})};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: "red.500",
    "2xl": "pink.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  }} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,b,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    "2xl": "pink.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  return <Box bg={bg} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,g,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
      "2xl": "pink.500",
      xl: "blue.500",
      lg: "green.500",
      md: "yellow.500",
      sm: "purple.500"
    }}>
        The container breakpoint is "{breakpoint}"
      </Text>;
  };
  return <Box ref={containerRef} containerType="inline-size" resize="inline" overflow="auto" w="full" p="md" borderWidth="1px" rounded="md">
      <Text color={{
      base: "red.500",
      "2xl": "pink.500",
      xl: "blue.500",
      lg: "green.500",
      md: "yellow.500",
      sm: "purple.500"
    }}>
        The root breakpoint is "{breakpoint}"
      </Text>

      <UIProvider config={config}>
        <App />
      </UIProvider>
    </Box>;
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,T,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <>
      <Text>The current breakpoint is "{breakpoint}"</Text>

      <Button size={{
      base: "lg",
      md: "md"
    }}>Button</Button>

      <Tag size={{
      base: "lg",
      md: "md"
    }}>Tag</Tag>

      <Calendar size={{
      base: "lg",
      md: "md"
    }} />
    </>;
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const be=["basic","useHook","withContainer","components"];export{be as __namedExportsOrder,o as basic,s as components,ue as default,t as useHook,i as withContainer};
