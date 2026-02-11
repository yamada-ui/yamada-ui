import{ay as H,i,c9 as y,r as c,H as h,k as z,c7 as w,j as r,Q as N}from"./iframe-FV6Pf4zG.js";import{B as l}from"./box-lmNTjs2t.js";import"./preload-helper-C1FmrZbK.js";const k=n=>{const t=H();return i(n)?n.map(o=>y(o,{css:w,system:t})).join(", "):y(n,{css:w,system:t})},I=(n,t)=>{const o=H(),e=c.useRef(h(t)?void 0:i(t)?t.map(String):String(t)),a=c.useRef(new Map),[Q,x]=c.useState(()=>{for(const[s,m]of Object.entries(n)){if(a.current.has(s))return;i(m)?a.current.set(s,m.map(u=>y(u,{css:w,system:o})).join(", ")):a.current.set(s,y(m,{css:w,system:o}))}return i(e.current)?e.current.map(s=>a.current.get(s)).join(", "):a.current.get(e.current??"")}),U=c.useCallback(s=>{const m=!h(e.current)&&i(n)?i(e.current)?e.current.map(Number):Number(e.current):e.current,u=z(s,m);e.current=i(u)?u.map(String):String(u),i(e.current)?x(e.current.map(q=>a.current.get(q)).join(", ")):x(a.current.get(e.current))},[n]);return[Q,U]},T={title:"Hooks / useAnimation"},g=()=>{const n=k({duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"});return r.jsx(l,{animation:n,h:"xs",w:"full"})},d=()=>{const n=k({duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"});return r.jsx(l,{bg:"primary",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"l3",_after:{animation:n,bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"})},f=()=>{const n=k([{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},timingFunction:"linear"},{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},timingFunction:"linear"},{duration:"10s",iterationCount:"infinite",keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},timingFunction:"linear"}]);return r.jsx(l,{animation:n,h:"xs",w:"full"})},p=()=>{const[n,t]=I({moveLeft:{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},timingFunction:"ease-in-out"},moveRight:{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},timingFunction:"ease-in-out"}});return r.jsxs(r.Fragment,{children:[r.jsx(N,{onClick:()=>t(o=>o==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),r.jsx(l,{animation:n,bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Box"})]})},b=()=>{const[n,t]=I({moveLeft:[{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},timingFunction:"ease-in-out"},{duration:"slower",fillMode:"forwards",keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},timingFunction:"ease-in-out"}],moveRight:[{duration:"slower",fillMode:"forwards",keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},timingFunction:"ease-in-out"},{duration:"slower",fillMode:"forwards",keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},timingFunction:"ease-in-out"}]});return r.jsxs(r.Fragment,{children:[r.jsx(N,{onClick:()=>t(o=>o==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),r.jsx(l,{animation:n,bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Box"})]})};var F,v,B;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(B=(v=g.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var A,C,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var X,R,j;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var S,L,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var P,_,E;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(E=(_=b.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const V=["Basic","Pseudo","Multiple","Dynamic","DynamicAndMultiple"];export{g as Basic,p as Dynamic,b as DynamicAndMultiple,f as Multiple,d as Pseudo,V as __namedExportsOrder,T as default};
