import{j as e}from"./extends-CwFRzn3r.js";import{u as n,d as z}from"./index-DP81e-8u.js";import{r as v}from"./index-BwDkhjyp.js";import{U as C}from"./ui-provider-BxBnoAgx.js";import{C as R}from"./calendar-DfEEpiWW.js";import{B as l}from"./box-BtRRJWAU.js";import{e as P}from"./extend-config-C-nv14_6.js";import{T as p}from"./text-DSnzXlBX.js";import{B as S}from"./button-BEXyR-Sf.js";import{T as D}from"./tag-0pp8p8bG.js";import"./factory-CBW6YcbY.js";import"./theme-provider-B8NHi_rL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CuwBS6-L.js";import"./motion-B7t0mTYZ.js";import"./loading-provider-DkzdpH5x.js";import"./index-BhJ-TW00.js";import"./Combination-IUp2vs9T.js";import"./loading-DEEkIiUz.js";import"./icon-CQ7oKYSm.js";import"./use-component-style-Givb0biW.js";import"./use-var-BcRMoVLh.js";import"./forward-ref-BWI-Phbn.js";import"./memo-B6TlvQ0B.js";import"./index-CGy0U2a3.js";import"./portal-DCEThVLn.js";import"./index-CS4BWtGh.js";import"./factory-B6ZnNkK9.js";import"./notice-C-sox9-H.js";import"./alert-DgIzU9p9.js";import"./triangle-alert-C2tUJAbO.js";import"./lucide-icon-4Wt4_XDL.js";import"./close-button-C6-nxxOU.js";import"./use-ripple-BqSD0U-m.js";import"./index-DAOPkzwd.js";import"./icon-button-B3kfMKCD.js";import"./index-BEwlKK2P.js";import"./index-qHjnnOt4.js";const ke={title:"System / Styles / Responsive"},o=()=>{const r=n();return e.jsxs(l,{bg:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},color:"white",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=n(),a=z({base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"});return e.jsxs(l,{bg:a,color:"white",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",children:['The current breakpoint is "',r,'"']})},i=()=>{const r=v.useRef(null),a=n(),B=P({breakpoint:{containerRef:r,identifier:"@container"}}),y=()=>{const j=n();return e.jsxs(p,{color:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},children:['The container breakpoint is "',j,'"']})};return e.jsxs(l,{ref:r,borderWidth:"1px",containerType:"inline-size",overflow:"auto",p:"md",resize:"inline",rounded:"md",w:"full",children:[e.jsxs(p,{color:{base:"red.500",sm:"purple.500",md:"yellow.500",lg:"green.500",xl:"blue.500","2xl":"pink.500"},children:['The root breakpoint is "',a,'"']}),e.jsx(C,{config:B,children:e.jsx(y,{})})]})},s=()=>{const r=n();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:['The current breakpoint is "',r,'"']}),e.jsx(S,{size:{base:"lg",md:"md"},children:"Button"}),e.jsx(D,{size:{base:"lg",md:"md"},children:"Tag"}),e.jsx(R,{size:{base:"lg",md:"md"}})]})};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const ge=["basic","useHook","withContainer","components"];export{ge as __namedExportsOrder,o as basic,s as components,ke as default,t as useHook,i as withContainer};
