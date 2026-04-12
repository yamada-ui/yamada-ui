import{n as e}from"./chunk-zsgVPwQN.js";import{A as t,M as n,Ms as r,Ns as i,im as a,j as o,ml as s,wl as c}from"./iframe-zMOrAcxo.js";var l,u,d,f,p,m,h,g;e((()=>{t(),r(),s(),l=a(),u={title:`Hooks / useAnimation`},d=()=>(0,l.jsx)(i,{animation:o({duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{bg:`red.500`},"20%":{bg:`green.500`},"40%":{bg:`purple.500`},"60%":{bg:`yellow.500`},"80%":{bg:`blue.500`},"100%":{bg:`red.500`}},timingFunction:`linear`}),h:`xs`,w:`full`}),f=()=>(0,l.jsx)(i,{bg:`primary`,color:`white`,m:`lg`,p:`lg`,pos:`relative`,rounded:`l3`,_after:{animation:o({duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{bg:`red.500`},"20%":{bg:`green.500`},"40%":{bg:`purple.500`},"60%":{bg:`yellow.500`},"80%":{bg:`blue.500`},"100%":{bg:`red.500`}},timingFunction:`linear`}),bg:`secondary`,color:`white`,content:`'after'`,left:`lg`,p:`lg`,pos:`absolute`,rounded:`lg`,top:`lg`},children:`Box`}),p=()=>(0,l.jsx)(i,{animation:o([{duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{bg:`red.500`},"20%":{bg:`green.500`},"40%":{bg:`purple.500`},"60%":{bg:`yellow.500`},"80%":{bg:`blue.500`},"100%":{bg:`red.500`}},timingFunction:`linear`},{duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{h:`xs`},"50%":{h:`md`},"100%":{h:`xs`}},timingFunction:`linear`},{duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{w:`full`},"50%":{w:`50%`},"100%":{w:`full`}},timingFunction:`linear`}]),h:`xs`,w:`full`}),m=()=>{let[e,t]=n({moveLeft:{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(400%)`},"100%":{transform:`translateX(0%)`}},timingFunction:`ease-in-out`},moveRight:{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(0%)`},"100%":{transform:`translateX(400%)`}},timingFunction:`ease-in-out`}});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{onClick:()=>t(e=>e===`moveRight`?`moveLeft`:`moveRight`),children:`Please Click`}),(0,l.jsx)(i,{animation:e,bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Box`})]})},h=()=>{let[e,t]=n({moveLeft:[{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(400%)`},"100%":{transform:`translateX(0%)`}},timingFunction:`ease-in-out`},{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{bg:`secondary`},"100%":{bg:`primary`}},timingFunction:`ease-in-out`}],moveRight:[{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(0%)`},"100%":{transform:`translateX(400%)`}},timingFunction:`ease-in-out`},{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{bg:`primary`},"100%":{bg:`secondary`}},timingFunction:`ease-in-out`}]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{onClick:()=>t(e=>e===`moveRight`?`moveLeft`:`moveRight`),children:`Please Click`}),(0,l.jsx)(i,{animation:e,bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Box`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`Pseudo`,`Multiple`,`Dynamic`,`DynamicAndMultiple`]}))();export{d as Basic,m as Dynamic,h as DynamicAndMultiple,p as Multiple,f as Pseudo,g as __namedExportsOrder,u as default};