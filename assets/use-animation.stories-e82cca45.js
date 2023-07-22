import{j as e,a as C,F as M}from"./jsx-runtime-276775ef.js";import{u,a as R}from"./index-5f528f7c.js";import{B as t}from"./box-34b29ebb.js";import{B as X}from"./button-aae638aa.js";import"./index-1cdf6ce0.js";import"./index-7733ff91.js";import"./index-2c974345.js";import"./factory-75cc801c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./theme-8f32df8a.js";import"./forward-ref-86842115.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./use-component-style-9ee8741d.js";const T={title:"Hooks / useAnimation"},o=()=>{const n=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return e(t,{w:"full",h:"xs",animation:n})},i=()=>{const n=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return e(t,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white",animation:n},children:"Box"})},r=()=>{const n=u([{keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"}]);return e(t,{w:"full",h:"xs",animation:n})},a=()=>{const[n,m]=R({moveLeft:{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},moveRight:{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}});return C(M,{children:[e(X,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),e(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:n,children:"Box"})]})},s=()=>{const[n,m]=R({moveLeft:[{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}],moveRight:[{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}]});return C(M,{children:[e(X,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),e(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:n,children:"Box"})]})};var d,g,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const animation = useAnimation({
    keyframes: {
      '0%': {
        bg: 'red.500'
      },
      '20%': {
        bg: 'green.500'
      },
      '40%': {
        bg: 'purple.500'
      },
      '60%': {
        bg: 'yellow.500'
      },
      '80%': {
        bg: 'blue.500'
      },
      '100%': {
        bg: 'red.500'
      }
    },
    duration: '10s',
    iterationCount: 'infinite',
    timingFunction: 'linear'
  });
  return <Box w='full' h='xs' animation={animation}></Box>;
}`,...(c=(g=o.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,p,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const animation = useAnimation({
    keyframes: {
      '0%': {
        bg: 'red.500'
      },
      '20%': {
        bg: 'green.500'
      },
      '40%': {
        bg: 'purple.500'
      },
      '60%': {
        bg: 'yellow.500'
      },
      '80%': {
        bg: 'blue.500'
      },
      '100%': {
        bg: 'red.500'
      }
    },
    duration: '10s',
    iterationCount: 'infinite',
    timingFunction: 'linear'
  });
  return <Box pos='relative' bg='primary' m='lg' p='lg' rounded='lg' color='white' _after={{
    content: "'after'",
    pos: 'absolute',
    top: 'lg',
    left: 'lg',
    bg: 'secondary',
    p: 'lg',
    rounded: 'lg',
    color: 'white',
    animation
  }}>
      Box
    </Box>;
}`,...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,w,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const animation = useAnimation([{
    keyframes: {
      '0%': {
        bg: 'red.500'
      },
      '20%': {
        bg: 'green.500'
      },
      '40%': {
        bg: 'purple.500'
      },
      '60%': {
        bg: 'yellow.500'
      },
      '80%': {
        bg: 'blue.500'
      },
      '100%': {
        bg: 'red.500'
      }
    },
    duration: '10s',
    iterationCount: 'infinite',
    timingFunction: 'linear'
  }, {
    keyframes: {
      '0%': {
        h: 'xs'
      },
      '50%': {
        h: 'md'
      },
      '100%': {
        h: 'xs'
      }
    },
    duration: '10s',
    iterationCount: 'infinite',
    timingFunction: 'linear'
  }, {
    keyframes: {
      '0%': {
        w: 'full'
      },
      '50%': {
        w: '50%'
      },
      '100%': {
        w: 'full'
      }
    },
    duration: '10s',
    iterationCount: 'infinite',
    timingFunction: 'linear'
  }]);
  return <Box w='full' h='xs' animation={animation}></Box>;
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,x,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<Record<'moveLeft' | 'moveRight', AnimationStyle>>({
    moveLeft: {
      keyframes: {
        '0%': {
          transform: 'translateX(400%)'
        },
        '100%': {
          transform: 'translateX(0%)'
        }
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out'
    },
    moveRight: {
      keyframes: {
        '0%': {
          transform: 'translateX(0%)'
        },
        '100%': {
          transform: 'translateX(400%)'
        }
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out'
    }
  });
  return <>
      <Button onClick={() => setAnimation(key => key === 'moveRight' ? 'moveLeft' : 'moveRight')}>
        Please Click
      </Button>

      <Box bg='primary' p='md' rounded='md' color='white' animation={animation}>
        Box
      </Box>
    </>;
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var B,F,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useDynamicAnimation<Record<'moveLeft' | 'moveRight', AnimationStyle[]>>({
    moveLeft: [{
      keyframes: {
        '0%': {
          transform: 'translateX(400%)'
        },
        '100%': {
          transform: 'translateX(0%)'
        }
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out'
    }, {
      keyframes: {
        '0%': {
          bg: 'secondary'
        },
        '100%': {
          bg: 'primary'
        }
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out'
    }],
    moveRight: [{
      keyframes: {
        '0%': {
          transform: 'translateX(0%)'
        },
        '100%': {
          transform: 'translateX(400%)'
        }
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out'
    }, {
      keyframes: {
        '0%': {
          bg: 'primary'
        },
        '100%': {
          bg: 'secondary'
        }
      },
      duration: 'slower',
      fillMode: 'forwards',
      timingFunction: 'ease-in-out'
    }]
  });
  return <>
      <Button onClick={() => setAnimation(key => key === 'moveRight' ? 'moveLeft' : 'moveRight')}>
        Please Click
      </Button>

      <Box bg='primary' p='md' rounded='md' color='white' animation={animation}>
        Box
      </Box>
    </>;
}`,...(A=(F=s.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const U=["basic","pseudo","withMulti","withDynamic","withDynamicAndMulti"];export{U as __namedExportsOrder,o as basic,T as default,i as pseudo,a as withDynamic,s as withDynamicAndMulti,r as withMulti};
//# sourceMappingURL=use-animation.stories-e82cca45.js.map
