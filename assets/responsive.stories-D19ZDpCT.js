import{j as e}from"./extends-CwFRzn3r.js";import{r as z}from"./index-BwDkhjyp.js";import{u as n,d as v}from"./index-CzplldKp.js";import{U as C}from"./ui-provider-DY2oYN-S.js";import{C as R}from"./calendar-x-YxfJNl.js";import{B as l}from"./box-Bx0dCD5X.js";import{e as P}from"./extend-config-BPt4UYaP.js";import{T as p}from"./text-CxEGNgXo.js";import{B as S}from"./button-knJHP-Ba.js";import{T as D}from"./tag-CiTmQa5I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./theme-provider-Bpmh2ODM.js";import"./factory-BgMvz7NM.js";import"./index-AqDG4z1T.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-TBFbx4D4.js";import"./index-CjGDoYdX.js";import"./Combination-IUp2vs9T.js";import"./loading-B_aB2PJP.js";import"./icon-CvhI1IwG.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D3MffxdG.js";import"./use-var-Dgk44aKJ.js";import"./factory-yZQlYpPU.js";import"./portal-C14XFhbI.js";import"./index-B8XB3FuZ.js";import"./notice-DVwxRQgn.js";import"./alert-B0TkXEfE.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./index-Dz6agydm.js";import"./icon-button-D5CPV5HA.js";import"./index-Br7ZWcgB.js";import"./index-i7wmI0W_.js";const de={title:"System / Styles / Responsive"},o=()=>{const r=n();return e.jsxs(l,{bg:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},t=()=>{const r=n(),a=v({base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"});return e.jsxs(l,{bg:a,p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:['The current breakpoint is "',r,'"']})},i=()=>{const r=z.useRef(null),a=n(),B=P({breakpoint:{containerRef:r,identifier:"@container"}}),y=()=>{const j=n();return e.jsxs(p,{color:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The container breakpoint is "',j,'"']})};return e.jsxs(l,{ref:r,containerType:"inline-size",resize:"inline",overflow:"auto",w:"full",p:"md",borderWidth:"1px",rounded:"md",children:[e.jsxs(p,{color:{base:"red.500","2xl":"pink.500",xl:"blue.500",lg:"green.500",md:"yellow.500",sm:"purple.500"},children:['The root breakpoint is "',a,'"']}),e.jsx(C,{config:B,children:e.jsx(y,{})})]})},s=()=>{const r=n();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:['The current breakpoint is "',r,'"']}),e.jsx(S,{size:{base:"lg",md:"md"},children:"Button"}),e.jsx(D,{size:{base:"lg",md:"md"},children:"Tag"}),e.jsx(R,{size:{base:"lg",md:"md"}})]})};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
