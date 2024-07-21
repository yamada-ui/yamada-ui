import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{d as i,u as y}from"./index-NwhEIk3k.js";import{r as T}from"./index-BwDkhjyp.js";import{U as B}from"./ui-provider-Vof9crOD.js";import{B as a}from"./box-B1h8yYhg.js";import{e as j}from"./extend-config-DagLWchA.js";import{T as p}from"./text-BwL1Rj_o.js";import"./theme-provider-CgekAyNK.js";import"./factory-BXeT7qA-.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CGALM1Qs.js";import"./motion-B3m9R3Ab.js";import"./loading-provider-C9TF5Irm.js";import"./index-Dxynqg56.js";import"./Combination-CONbhR2A.js";import"./loading-DCdc0AhN.js";import"./icon-BjkWeIz-.js";import"./index-jt6EZpVS.js";import"./use-component-style-DuIjxI-P.js";import"./forward-ref-BmTAT9U5.js";import"./motion-DnMpPmZx.js";import"./index-DFuW1CVx.js";import"./container-portal-D_8J7oaj.js";import"./index-DxjWwZXO.js";import"./notice-DL9W0g_R.js";import"./alert-cR9s7tKB.js";import"./close-button-Dts3z-TI.js";import"./use-ripple-CX-fFskN.js";const ee={title:"System / Styles / Breakpoint"},n=()=>{const r=i();return e.jsxs(a,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},o=()=>{const r=i(),s=y({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return e.jsxs(a,{bg:s,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=T.useRef(null),s=i(),f=j({breakpoint:{containerRef:r,identifier:"@container"}}),h=()=>{const w=i();return e.jsxs(p,{color:{base:"red.500","2xl":"cyan.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The container breakpoint is "',w,'"']})};return e.jsxs(a,{ref:r,containerType:"inline-size",resize:"inline",overflow:"auto",w:"full",p:"md",borderWidth:"1px",rounded:"md",children:[e.jsxs(p,{color:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The root breakpoint is "',s,'"']}),e.jsx(B,{config:f,children:e.jsx(h,{})})]})};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  }} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500"
  });
  return <Box bg={bg} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,k,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
      "2xl": "cyan.500",
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
}`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const re=["basic","useHook","withContainer"];export{re as __namedExportsOrder,n as basic,ee as default,o as useHook,t as withContainer};
