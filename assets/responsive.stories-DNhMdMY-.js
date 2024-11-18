import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as n,d as z}from"./index-W-WXU9X0.js";import{r as v}from"./index-ClcD9ViR.js";import{U as C}from"./ui-provider-DT4ZJWc8.js";import{C as R}from"./calendar-dsPQKtJi.js";import{B as l}from"./box-b6fbDiUh.js";import{e as P}from"./extend-config-DGv21Tk6.js";import{T as p}from"./text-Y1d9IDh4.js";import{B as S}from"./button-BN1WQcNU.js";import{T as D}from"./tag-CtjR03rB.js";import"./factory-BPYpkDor.js";import"./theme-provider-Bsm-0rKu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CCPRJsEV.js";import"./proxy-DwHv-pG9.js";import"./loading-provider-BNFf8qfE.js";import"./index-C5Gv9kmK.js";import"./Combination-__ZWiWyr.js";import"./loading-Bd8HLEYZ.js";import"./icon-DT11Nal8.js";import"./use-component-style-CYL4T5vM.js";import"./use-var-DoLXLJEg.js";import"./forward-ref-D13m8o2p.js";import"./index-2WvfircW.js";import"./portal-Bwu6AgAB.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-BiXCYStP.js";import"./notice-06IzLkX9.js";import"./alert-DuAaTs7C.js";import"./close-button-BMgTv_5f.js";import"./use-ripple-EznoQwCc.js";import"./index-5_K1p_ZM.js";import"./icon-button-BlHpILTv.js";import"./index-B-CNuTHF.js";import"./index-CUasfp9R.js";const be={title:"System / Styles / Responsive"},o=()=>{const r=n();return e.jsxs(l,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},color:"white",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=n(),a=z({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return e.jsxs(l,{bg:a,color:"white",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})},i=()=>{const r=v.useRef(null),a=n(),B=P({breakpoint:{containerRef:r,identifier:"@container"}}),y=()=>{const j=n();return e.jsxs(p,{color:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},children:['The container breakpoint is "',j,'"']})};return e.jsxs(l,{ref:r,borderWidth:"1px",containerType:"inline-size",overflow:"auto",p:"md",resize:"inline",rounded:"md",w:"full",children:[e.jsxs(p,{color:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},children:['The root breakpoint is "',a,'"']}),e.jsx(C,{config:B,children:e.jsx(y,{})})]})},s=()=>{const r=n();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:['The current breakpoint is "',r,'"']}),e.jsx(S,{size:{base:"lg",md:"md"},children:"Button"}),e.jsx(D,{size:{base:"lg",md:"md"},children:"Tag"}),e.jsx(R,{size:{base:"lg",md:"md"}})]})};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  return <Box bg={{
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  }} color="white" p="md" rounded="md" transitionDuration="slower" transitionProperty="all">
      The current breakpoint is "{breakpoint}"
    </Box>;
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,b,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const breakpoint = useBreakpoint();
  const bg = useBreakpointValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500"
  });
  return <Box bg={bg} color="white" p="md" rounded="md" transitionDuration="slower" transitionProperty="all">
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
      sm: "purple.500",
      md: "yellow.500",
      lg: "green.500",
      xl: "blue.500",
      "2xl": "pink.500"
    }}>
        The container breakpoint is "{breakpoint}"
      </Text>;
  };
  return <Box ref={containerRef} borderWidth="1px" containerType="inline-size" overflow="auto" p="md" resize="inline" rounded="md" w="full">
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const xe=["basic","useHook","withContainer","components"];export{xe as __namedExportsOrder,o as basic,s as components,be as default,t as useHook,i as withContainer};
