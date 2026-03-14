import{a4 as F,i,cf as y,r as c,H as h,g as X,aX as w,j as r,Q as v}from"./iframe-DyywAl9M.js";import{B as u}from"./box-CmodVoex.js";import"./preload-helper-PPVm8Dsz.js";const k=n=>{const t=F();return i(n)?n.map(o=>y(o,{css:w,system:t})).join(", "):y(n,{css:w,system:t})},B=(n,t)=>{const o=F(),e=c.useRef(h(t)?void 0:i(t)?t.map(String):String(t)),a=c.useRef(new Map),[A,x]=c.useState(()=>{for(const[s,m]of Object.entries(n))i(m)?a.current.set(s,m.map(l=>y(l,{css:w,system:o})).join(", ")):a.current.set(s,y(m,{css:w,system:o}));return i(e.current)?e.current.map(s=>a.current.get(s)).join(", "):a.current.get(e.current??"")}),C=c.useCallback(s=>{const m=!h(e.current)&&i(n)?i(e.current)?e.current.map(Number):Number(e.current):e.current,l=X(s,m);e.current=i(l)?l.map(String):String(l),i(e.current)?x(e.current.map(M=>a.current.get(M)).join(", ")):x(a.current.get(e.current))},[n]);return[A,C]},L={title:"Hooks / useAnimation"},g=()=>{const n=k({duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"});return r.jsx(u,{animation:n,h:"xs",w:"full"})},d=()=>{const n=k({duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"});return r.jsx(u,{bg:"primary",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"l3",_after:{animation:n,bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"})},f=()=>{const n=k([{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"},{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},timingFunction:"linear"},{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},timingFunction:"linear"}]);return r.jsx(u,{animation:n,h:"xs",w:"full"})},p=()=>{const[n,t]=B({moveLeft:{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},timingFunction:"ease-in-out"},moveRight:{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},timingFunction:"ease-in-out"}});return r.jsxs(r.Fragment,{children:[r.jsx(v,{onClick:()=>t(o=>o==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),r.jsx(u,{animation:n,bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Box"})]})},b=()=>{const[n,t]=B({moveLeft:[{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},timingFunction:"ease-in-out"},{duration:"slower",fillMode:"forwards",keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},timingFunction:"ease-in-out"}],moveRight:[{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},timingFunction:"ease-in-out"},{duration:"slower",fillMode:"forwards",keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},timingFunction:"ease-in-out"}]});return r.jsxs(r.Fragment,{children:[r.jsx(v,{onClick:()=>t(o=>o==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),r.jsx(u,{animation:n,bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Box"})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
  return <Box bg="primary" color="white" m="lg" p="lg" pos="relative" rounded="l3" _after={{
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
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation({
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

      <Box animation={animation} bg="mono" color="mono.contrast" p="md" rounded="l2">
        Box
      </Box>
    </>;
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation({
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

      <Box animation={animation} bg="mono" color="mono.contrast" p="md" rounded="l2">
        Box
      </Box>
    </>;
}`,...b.parameters?.docs?.source}}};const D=["Basic","Pseudo","Multiple","Dynamic","DynamicAndMultiple"];export{g as Basic,p as Dynamic,b as DynamicAndMultiple,f as Multiple,d as Pseudo,D as __namedExportsOrder,L as default};
