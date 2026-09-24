import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Un as r,l as i,nr as a,u as o,v as s,xn as c,y as l}from"./props-Bz1FL_va.js";import{t as u}from"./jsx-runtime-BdxMnOeJ.js";import{v as d,y as f}from"./utils-DG4lHdyV.js";import{r as p,t as m}from"./button-CFBNyQlD.js";import{n as h,t as g}from"./box-C47iDJeO.js";var _,v,y;function b(){return(b=e((()=>{_=t(),l(),o(),d(),c(),v=e=>{let t=f();return r(e)?e.map(e=>s(e,{css:i,system:t})).join(`, `):s(e,{css:i,system:t})},y=(e,t)=>{let o=f(),c=(0,_.useRef)(a(t)?void 0:r(t)?t.map(String):String(t)),l=(0,_.useRef)(new Map),[u,d]=(0,_.useState)(()=>{for(let[t,n]of Object.entries(e))r(n)?l.current.set(t,n.map(e=>s(e,{css:i,system:o})).join(`, `)):l.current.set(t,s(n,{css:i,system:o}));return r(c.current)?c.current.map(e=>l.current.get(e)).join(`, `):l.current.get(c.current??``)});return[u,(0,_.useCallback)(t=>{let i=!a(c.current)&&r(e)?r(c.current)?c.current.map(Number):Number(c.current):c.current,o=n(t,i);c.current=r(o)?o.map(String):String(o),r(c.current)?d(c.current.map(e=>l.current.get(e)).join(`, `)):d(l.current.get(c.current))},[e])]}})))()}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{b(),h(),p(),x=u(),S={title:`Hooks / useAnimation`},C=()=>{let e=v({duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{bg:`red.500`},"20%":{bg:`green.500`},"40%":{bg:`purple.500`},"60%":{bg:`yellow.500`},"80%":{bg:`blue.500`},"100%":{bg:`red.500`}},timingFunction:`linear`});return(0,x.jsx)(g,{animation:e,h:`xs`,w:`full`})},w=()=>{let e=v({duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{bg:`red.500`},"20%":{bg:`green.500`},"40%":{bg:`purple.500`},"60%":{bg:`yellow.500`},"80%":{bg:`blue.500`},"100%":{bg:`red.500`}},timingFunction:`linear`});return(0,x.jsx)(g,{bg:`primary`,color:`white`,m:`lg`,p:`lg`,pos:`relative`,rounded:`l3`,_after:{animation:e,bg:`secondary`,color:`white`,content:`'after'`,left:`lg`,p:`lg`,pos:`absolute`,rounded:`lg`,top:`lg`},children:`Box`})},T=()=>{let e=v([{duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{bg:`red.500`},"20%":{bg:`green.500`},"40%":{bg:`purple.500`},"60%":{bg:`yellow.500`},"80%":{bg:`blue.500`},"100%":{bg:`red.500`}},timingFunction:`linear`},{duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{h:`xs`},"50%":{h:`md`},"100%":{h:`xs`}},timingFunction:`linear`},{duration:`10s`,iterationCount:`infinite`,keyframes:{"0%":{w:`full`},"50%":{w:`50%`},"100%":{w:`full`}},timingFunction:`linear`}]);return(0,x.jsx)(g,{animation:e,h:`xs`,w:`full`})},E=()=>{let[e,t]=y({moveLeft:{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(400%)`},"100%":{transform:`translateX(0%)`}},timingFunction:`ease-in-out`},moveRight:{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(0%)`},"100%":{transform:`translateX(400%)`}},timingFunction:`ease-in-out`}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{onClick:()=>t(e=>e===`moveRight`?`moveLeft`:`moveRight`),children:`Please Click`}),(0,x.jsx)(g,{animation:e,bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Box`})]})},D=()=>{let[e,t]=y({moveLeft:[{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(400%)`},"100%":{transform:`translateX(0%)`}},timingFunction:`ease-in-out`},{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{bg:`secondary`},"100%":{bg:`primary`}},timingFunction:`ease-in-out`}],moveRight:[{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{transform:`translateX(0%)`},"100%":{transform:`translateX(400%)`}},timingFunction:`ease-in-out`},{duration:`slower`,fillMode:`forwards`,keyframes:{"0%":{bg:`primary`},"100%":{bg:`secondary`}},timingFunction:`ease-in-out`}]});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{onClick:()=>t(e=>e===`moveRight`?`moveLeft`:`moveRight`),children:`Please Click`}),(0,x.jsx)(g,{animation:e,bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Box`})]})},O=[`Basic`,`Pseudo`,`Multiple`,`Dynamic`,`DynamicAndMultiple`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{C as Basic,E as Dynamic,D as DynamicAndMultiple,T as Multiple,w as Pseudo,O as __namedExportsOrder,S as default};