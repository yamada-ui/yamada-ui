import{j as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u,a as C}from"./index-lDLsA8St.js";import{B as t}from"./box-BWBbGxVR.js";import{B as R}from"./button-8HjDCW-E.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Du0-7Fls.js";import"./index-C2A1EDXj.js";import"./factory-DqlmaKnk.js";import"./theme-provider-DKpED47L.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-ePVrvqFu.js";import"./index-CSNxn7VS.js";import"./motion-Ceh1Zhyk.js";import"./motion-CVEUpyyH.js";import"./loading-UvXiSr0C.js";import"./icon-BWDJazoz.js";import"./index-CvHBrwTd.js";import"./use-component-style-C3e1SZSW.js";const T={title:"Hooks / useAnimation"},i=()=>{const e=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return n.jsx(t,{w:"full",h:"xs",animation:e})},o=()=>{const e=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return n.jsx(t,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white",animation:e},children:"Box"})},r=()=>{const e=u([{keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"}]);return n.jsx(t,{w:"full",h:"xs",animation:e})},a=()=>{const[e,m]=C({moveLeft:{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},moveRight:{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}});return n.jsxs(n.Fragment,{children:[n.jsx(R,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),n.jsx(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:e,children:"Box"})]})},s=()=>{const[e,m]=C({moveLeft:[{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}],moveRight:[{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}]});return n.jsxs(n.Fragment,{children:[n.jsx(R,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),n.jsx(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:e,children:"Box"})]})};var d,g,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const animation = useAnimation({
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
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  });
  return <Box w="full" h="xs" animation={animation} />;
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,p,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const animation = useAnimation({
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
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  });
  return <Box pos="relative" bg="primary" m="lg" p="lg" rounded="lg" color="white" _after={{
    content: "'after'",
    pos: "absolute",
    top: "lg",
    left: "lg",
    bg: "secondary",
    p: "lg",
    rounded: "lg",
    color: "white",
    animation
  }}>
      Box
    </Box>;
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,w,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const animation = useAnimation([{
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
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  }, {
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
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  }, {
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
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear"
  }]);
  return <Box w="full" h="xs" animation={animation} />;
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,k,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<Record<"moveLeft" | "moveRight", AnimationStyle>>({
    moveLeft: {
      keyframes: {
        "0%": {
          transform: "translateX(400%)"
        },
        "100%": {
          transform: "translateX(0%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    },
    moveRight: {
      keyframes: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }
  });
  return <>
      <Button onClick={() => setAnimation(key => key === "moveRight" ? "moveLeft" : "moveRight")}>
        Please Click
      </Button>

      <Box bg="primary" p="md" rounded="md" color="white" animation={animation}>
        Box
      </Box>
    </>;
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var F,B,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<Record<"moveLeft" | "moveRight", AnimationStyle[]>>({
    moveLeft: [{
      keyframes: {
        "0%": {
          transform: "translateX(400%)"
        },
        "100%": {
          transform: "translateX(0%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }, {
      keyframes: {
        "0%": {
          bg: "secondary"
        },
        "100%": {
          bg: "primary"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }],
    moveRight: [{
      keyframes: {
        "0%": {
          transform: "translateX(0%)"
        },
        "100%": {
          transform: "translateX(400%)"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }, {
      keyframes: {
        "0%": {
          bg: "primary"
        },
        "100%": {
          bg: "secondary"
        }
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out"
    }]
  });
  return <>
      <Button onClick={() => setAnimation(key => key === "moveRight" ? "moveLeft" : "moveRight")}>
        Please Click
      </Button>

      <Box bg="primary" p="md" rounded="md" color="white" animation={animation}>
        Box
      </Box>
    </>;
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const U=["basic","pseudo","withMulti","withDynamic","withDynamicAndMulti"];export{U as __namedExportsOrder,i as basic,T as default,o as pseudo,a as withDynamic,s as withDynamicAndMulti,r as withMulti};
