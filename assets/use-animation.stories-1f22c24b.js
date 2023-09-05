import{j as e,a as C,F as M}from"./jsx-runtime-e6a661ac.js";import{u,a as R}from"./index-54397edb.js";import{B as t}from"./box-2d44dc53.js";import{B as X}from"./button-b34f397c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-11e13d28.js";import"./index-1979c968.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./theme-19663a53.js";import"./forward-ref-c496b87d.js";import"./loading-e9b5f4eb.js";import"./index-b1b61640.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./icon-c22f2933.js";import"./use-component-style-195b7054.js";const U={title:"Hooks / useAnimation"},o=()=>{const n=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return e(t,{w:"full",h:"xs",animation:n})},i=()=>{const n=u({keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"});return e(t,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white",animation:n},children:"Box"})},r=()=>{const n=u([{keyframes:{"0%":{bg:"red.500"},"20%":{bg:"green.500"},"40%":{bg:"purple.500"},"60%":{bg:"yellow.500"},"80%":{bg:"blue.500"},"100%":{bg:"red.500"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{h:"xs"},"50%":{h:"md"},"100%":{h:"xs"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"},{keyframes:{"0%":{w:"full"},"50%":{w:"50%"},"100%":{w:"full"}},duration:"10s",iterationCount:"infinite",timingFunction:"linear"}]);return e(t,{w:"full",h:"xs",animation:n})},a=()=>{const[n,m]=R({moveLeft:{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},moveRight:{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}});return C(M,{children:[e(X,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),e(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:n,children:"Box"})]})},s=()=>{const[n,m]=R({moveLeft:[{keyframes:{"0%":{transform:"translateX(400%)"},"100%":{transform:"translateX(0%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"secondary"},"100%":{bg:"primary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}],moveRight:[{keyframes:{"0%":{transform:"translateX(0%)"},"100%":{transform:"translateX(400%)"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"},{keyframes:{"0%":{bg:"primary"},"100%":{bg:"secondary"}},duration:"slower",fillMode:"forwards",timingFunction:"ease-in-out"}]});return C(M,{children:[e(X,{onClick:()=>m(l=>l==="moveRight"?"moveLeft":"moveRight"),children:"Please Click"}),e(t,{bg:"primary",p:"md",rounded:"md",color:"white",animation:n,children:"Box"})]})};var d,g,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(A=(F=s.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const V=["basic","pseudo","withMulti","withDynamic","withDynamicAndMulti"];export{V as __namedExportsOrder,o as basic,U as default,i as pseudo,a as withDynamic,s as withDynamicAndMulti,r as withMulti};
//# sourceMappingURL=use-animation.stories-1f22c24b.js.map
