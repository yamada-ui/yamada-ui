import{j as n}from"./jsx-runtime-BpbtHYHY.js";import{u,a as C}from"./index-kCrJIFe4.js";import{B as t}from"./box-B5b1ezDi.js";import{B as M}from"./button-Dm54j0EP.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-qZwaV1-B.js";import"./index-HHw4H1QN.js";import"./factory-B_KMcXyW.js";import"./theme-provider-DGyR61Aa.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./use-var-Tj-aA0qb.js";const T={title:"Hooks / useAnimation"},i=()=>{const e=u({duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"});return n.jsx(t,{animation:e,h:"xs",w:"full"})},o=()=>{const e=u({duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"});return n.jsx(t,{bg:"primary",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"lg",_after:{animation:e,bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"})},r=()=>{const e=u([{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"},{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},timingFunction:"linear"},{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},timingFunction:"linear"}]);return n.jsx(t,{animation:e,h:"xs",w:"full"})},a=()=>{const[e,m]=C({moveLeft:{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},timingFunction:"ease-in-out"},moveRight:{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},timingFunction:"ease-in-out"}});return n.jsxs(n.Fragment,{children:[n.jsx(M,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),n.jsx(t,{animation:e,bg:"primary",color:"white",p:"md",rounded:"md",children:"Box"})]})},s=()=>{const[e,m]=C({moveLeft:[{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},timingFunction:"ease-in-out"},{duration:"slower",fillMode:"forwards",keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},timingFunction:"ease-in-out"}],moveRight:[{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},timingFunction:"ease-in-out"},{duration:"slower",fillMode:"forwards",keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},timingFunction:"ease-in-out"}]});return n.jsxs(n.Fragment,{children:[n.jsx(M,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),n.jsx(t,{animation:e,bg:"primary",color:"white",p:"md",rounded:"md",children:"Box"})]})};var d,g,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const animation = useAnimation({
    duration: "10s",
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        bg: "red.500"
      },
      "20%": {
        bg: "green.500"
      },
      "40%": {
        bg: "purple.500"
      },
      "60%": {
        bg: "yellow.500"
      },
      "80%": {
        bg: "blue.500"
      },
      "100%": {
        bg: "red.500"
      }
    },
    timingFunction: "linear"
  });
  return <Box animation={animation} h="xs" w="full" />;
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,p,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const animation = useAnimation({
    duration: "10s",
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        bg: "red.500"
      },
      "20%": {
        bg: "green.500"
      },
      "40%": {
        bg: "purple.500"
      },
      "60%": {
        bg: "yellow.500"
      },
      "80%": {
        bg: "blue.500"
      },
      "100%": {
        bg: "red.500"
      }
    },
    timingFunction: "linear"
  });
  return <Box bg="primary" color="white" m="lg" p="lg" pos="relative" rounded="lg" _after={{
    animation,
    bg: "secondary",
    color: "white",
    content: "'after'",
    left: "lg",
    p: "lg",
    pos: "absolute",
    rounded: "lg",
    top: "lg"
  }}>
      Box
    </Box>;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,w,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const animation = useAnimation([{
    duration: "10s",
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        bg: "red.500"
      },
      "20%": {
        bg: "green.500"
      },
      "40%": {
        bg: "purple.500"
      },
      "60%": {
        bg: "yellow.500"
      },
      "80%": {
        bg: "blue.500"
      },
      "100%": {
        bg: "red.500"
      }
    },
    timingFunction: "linear"
  }, {
    duration: "10s",
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        h: "xs"
      },
      "50%": {
        h: "md"
      },
      "100%": {
        h: "xs"
      }
    },
    timingFunction: "linear"
  }, {
    duration: "10s",
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        w: "full"
      },
      "50%": {
        w: "50%"
      },
      "100%": {
        w: "full"
      }
    },
    timingFunction: "linear"
  }]);
  return <Box animation={animation} h="xs" w="full" />;
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,x,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<{ [key in "moveLeft" | "moveRight"]: AnimationStyle }>({
    moveLeft: {
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          transform: "translateX(400%)"
        },
        "100%": {
          transform: "translateX(0%)"
        }
      },
      timingFunction: "ease-in-out"
    },
    moveRight: {
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      },
      timingFunction: "ease-in-out"
    }
  });
  return <>
      <Button onClick={() => setAnimation(key => key === "moveRight" ? "moveLeft" : "moveRight")}>
        Please Click
      </Button>

      <Box animation={animation} bg="primary" color="white" p="md" rounded="md">
        Box
      </Box>
    </>;
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,B,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<{ [key in "moveLeft" | "moveRight"]: AnimationStyle[] }>({
    moveLeft: [{
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          transform: "translateX(400%)"
        },
        "100%": {
          transform: "translateX(0%)"
        }
      },
      timingFunction: "ease-in-out"
    }, {
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          bg: "secondary"
        },
        "100%": {
          bg: "primary"
        }
      },
      timingFunction: "ease-in-out"
    }],
    moveRight: [{
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      },
      timingFunction: "ease-in-out"
    }, {
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          bg: "primary"
        },
        "100%": {
          bg: "secondary"
        }
      },
      timingFunction: "ease-in-out"
    }]
  });
  return <>
      <Button onClick={() => setAnimation(key => key === "moveRight" ? "moveLeft" : "moveRight")}>
        Please Click
      </Button>

      <Box animation={animation} bg="primary" color="white" p="md" rounded="md">
        Box
      </Box>
    </>;
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const U=["basic","pseudo","withMulti","withDynamic","withDynamicAndMulti"];export{U as __namedExportsOrder,i as basic,T as default,o as pseudo,a as withDynamic,s as withDynamicAndMulti,r as withMulti};
