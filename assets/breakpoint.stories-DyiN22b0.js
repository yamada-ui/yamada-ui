import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{d as i,u as y}from"./index-TPq6y0l-.js";import{r as T}from"./index-BwDkhjyp.js";import{U as B}from"./ui-provider-CVrXeRvs.js";import{B as a}from"./box-Dp44rSxf.js";import{e as j}from"./extend-config-BXdI9NKA.js";import{T as p}from"./text-Qrm_BZjp.js";import"./theme-provider-DwNsBv-g.js";import"./factory-CtEVzbYf.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BH89NuV_.js";import"./motion-Y1F55cL9.js";import"./loading-provider-VhzgdbKu.js";import"./index-D5xNZpPq.js";import"./Combination-CONbhR2A.js";import"./loading-k_S2O4S_.js";import"./icon-DBsGF4uC.js";import"./index-DXbYvzpO.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-D3qgkwVB.js";import"./motion-BkrKHA2r.js";import"./index-DGf9HWvz.js";import"./container-portal-L5A7yTqF.js";import"./index-B8XB3FuZ.js";import"./notice-xTxcRRx6.js";import"./alert-Bseh01mv.js";import"./close-button-J6wxUJLK.js";import"./use-ripple-CSL3XTH4.js";const ee={title:"System / Styles / Breakpoint"},n=()=>{const r=i();return e.jsxs(a,{bg:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},o=()=>{const r=i(),s=y({base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return e.jsxs(a,{bg:s,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=T.useRef(null),s=i(),f=j({breakpoint:{containerRef:r,identifier:"@container"}}),h=()=>{const w=i();return e.jsxs(p,{color:{base:"red.500","2xl":"cyan.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The container breakpoint is "',w,'"']})};return e.jsxs(a,{ref:r,containerType:"inline-size",resize:"inline",overflow:"auto",w:"full",p:"md",borderWidth:"1px",rounded:"md",children:[e.jsxs(p,{color:{base:"red.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The root breakpoint is "',s,'"']}),e.jsx(B,{config:f,children:e.jsx(h,{})})]})};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
