import{j as e}from"./extends-CwFRzn3r.js";import{u as n,d as z}from"./index-uXUPlb6Y.js";import{r as v}from"./index-BwDkhjyp.js";import{U as C}from"./ui-provider-yMwBxUIm.js";import{C as R}from"./calendar-C2qn51A4.js";import{B as l}from"./box-BNUHdVqZ.js";import{e as P}from"./extend-config-BEVeWXMv.js";import{T as p}from"./text-C4kk1pFE.js";import{B as S}from"./button-CrM87X6c.js";import{T as D}from"./tag-DiuQgi_F.js";import"./theme-provider-Bw55Thfs.js";import"./factory-DfCPDZht.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_KRzJwV.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-CXnmHf9o.js";import"./index-BMx7qnvq.js";import"./Combination-IUp2vs9T.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./use-component-style-D0DGb12b.js";import"./forward-ref-BWI-Phbn.js";import"./factory-B9-LT_yD.js";import"./portal-CQMr5Yur.js";import"./index-Drt3gf4w.js";import"./notice-DTPWb24k.js";import"./alert-B68M2OPG.js";import"./close-button-nW1Gs_LT.js";import"./use-ripple-C-c72TCS.js";import"./index-423R83gY.js";import"./icon-button-Cxlm05Fi.js";import"./index-Bq6qUkKi.js";import"./index-DX1ItL2L.js";const de={title:"System / Styles / Responsive"},o=()=>{const r=n();return e.jsxs(l,{bg:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=n(),a=z({base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return e.jsxs(l,{bg:a,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},i=()=>{const r=v.useRef(null),a=n(),B=P({breakpoint:{containerRef:r,identifier:"@container"}}),y=()=>{const j=n();return e.jsxs(p,{color:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The container breakpoint is "',j,'"']})};return e.jsxs(l,{ref:r,containerType:"inline-size",resize:"inline",overflow:"auto",w:"full",p:"md",borderWidth:"1px",rounded:"md",children:[e.jsxs(p,{color:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The root breakpoint is "',a,'"']}),e.jsx(C,{config:B,children:e.jsx(y,{})})]})},s=()=>{const r=n();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:['The current breakpoint is "',r,'"']}),e.jsx(S,{size:{base:"lg",md:"md"},children:"Button"}),e.jsx(D,{size:{base:"lg",md:"md"},children:"Tag"}),e.jsx(R,{size:{base:"lg",md:"md"}})]})};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const ue=["basic","useHook","withContainer","components"];export{ue as __namedExportsOrder,o as basic,s as components,de as default,t as useHook,i as withContainer};
