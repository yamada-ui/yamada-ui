import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as o}from"./index-uCp2LrAq.js";import{u as $}from"./use-scroll-ZL9dVPrd.js";import{a as N,u as U}from"./use-transform-ugCDQuL_.js";import{M as W,i as w,a as X,b as z}from"./motion-BNFRb361.js";import{M as t}from"./motion-Bi86PhT5.js";import{T as i}from"./text-MYjKvx39.js";import{B as b}from"./box-ANpItPfh.js";import{H as v}from"./heading-CjLQyS11.js";import{V as Z}from"./stack-DeQ5YYY4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-Dr5Hqd9a.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./use-component-style-C0MoE1pt.js";import"./theme-provider-zwL-D6eR.js";function _(n,s={}){const{isStatic:l}=o.useContext(W),a=o.useRef(null),r=N(w(n)?n.get():n),c=()=>{a.current&&a.current.stop()};return o.useInsertionEffect(()=>r.attach((u,q)=>l?q(u):(c(),a.current=X({keyframes:[r.get(),u],velocity:r.getVelocity(),type:"spring",...s,onUpdate:q}),r.get()),c),[JSON.stringify(s)]),z(()=>{if(w(n))return n.on("change",u=>r.set(parseFloat(u)))},[r]),r}const pe={title:"Components / Motion / Scroll",component:t},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(t,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},onViewportEnter:n=>console.log("Element entries",n),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(t,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},onViewportEnter:n=>console.log("Element entries",n),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(t,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),h=()=>{const n=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(b,{ref:n,overflow:"scroll",w:"full",h:"xs",p:"md",borderWidth:"1px",rounded:"md",children:e.jsx(t,{mt:"96",initial:{opacity:0},whileInView:{opacity:1},viewport:{root:n,margin:"50px 0px 0px 0px"},transition:{duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})]})},x=()=>{const{scrollYProgress:n}=$(),s=U(n,[0,1],[.2,2]);return e.jsx(b,{w:"full",h:"300vh",children:e.jsx(b,{w:"2xs",h:"2xs",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",children:e.jsx(t,{style:{scale:s},w:"full",h:"full",overflow:"hidden",bg:["blackAlpha.200","whiteAlpha.200"],rounded:"3xl",children:e.jsx(t,{style:{scaleY:n},w:"inherit",h:"inherit",bg:"primary",transformOrigin:"50% 100%"})})})})},f=()=>{const{scrollYProgress:n}=$(),s=_(n,{stiffness:100,damping:30,restDelta:.001});return e.jsxs(e.Fragment,{children:[e.jsx(t,{style:{scaleX:s},position:"fixed",top:"0",left:"0",right:"0",h:"3",bg:"primary",transformOrigin:"0%"}),e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam."}),e.jsx(i,{children:"Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a."}),e.jsx(v,{children:"Sub-header"}),e.jsx(i,{children:"In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu."}),e.jsx(i,{children:"Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi."}),e.jsx(i,{children:"Sed sem nisi, luctus consequat ligula in, congue sodales nisl."}),e.jsx(i,{children:"Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo."}),e.jsx(v,{children:"Sub-header"}),e.jsx(i,{children:"Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium."}),e.jsx(i,{children:"Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor."}),e.jsx(i,{children:"Quisque convallis ligula non magna efficitur tincidunt."}),e.jsx(i,{children:"Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi."}),e.jsx(i,{children:"Sed sem nisi, luctus consequat ligula in, congue sodales nisl."}),e.jsx(i,{children:"Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo."}),e.jsx(v,{children:"Sub-header"}),e.jsx(i,{children:"Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium."}),e.jsx(i,{children:"Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor."}),e.jsx(i,{children:"Quisque convallis ligula non magna efficitur tincidunt."})]})},g=()=>{const n=o.useMemo(()=>({offscreen:{y:300},onscreen:{y:50,rotate:-10,transition:{type:"spring",bounce:.4,duration:.8}}}),[]),s=o.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),l=a=>`hsl(${a}, 100%, 50%)`;return e.jsx(Z,{maxW:"500px",mx:"auto",pb:"200px",children:s.map(([a,r,c],u)=>e.jsxs(t,{initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.8},overflow:"hidden",display:"flex",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",mb:"-120px",children:[e.jsx(b,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',bg:`linear-gradient(306deg, ${l(r)}, ${l(c)})`}),e.jsx(t,{className:"card",variants:n,fontSize:"164px",w:"300px",h:"430px",display:"flex",placeContent:"center",placeItems:"center",bg:"white",rounded:"20px",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",transformOrigin:"10% 60%",children:a})]},u))})};var y,M,j;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion mt="100vh" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </>;
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var T,P,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion mt="100vh" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </>;
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var S,V,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion mt="100vh" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 1
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </>;
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var D,A,E;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return <>
      <Text>Please scroll</Text>

      <Box ref={scrollRef} overflow="scroll" w="full" h="xs" p="md" borderWidth="1px" rounded="md">
        <Motion mt="96" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        root: scrollRef,
        margin: "50px 0px 0px 0px"
      }} transition={{
        duration: 2
      }} bg="primary" color="white" p="md" rounded="md">
          Motion
        </Motion>
      </Box>
    </>;
}`,...(E=(A=h.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,B,H;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return <Box w="full" h="300vh">
      <Box w="2xs" h="2xs" position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Motion style={{
        scale
      }} w="full" h="full" overflow="hidden" bg={["blackAlpha.200", "whiteAlpha.200"]} rounded="3xl">
          <Motion style={{
          scaleY: scrollYProgress
        }} w="inherit" h="inherit" bg="primary" transformOrigin="50% 100%" />
        </Motion>
      </Box>
    </Box>;
}`,...(H=(B=x.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,O,k;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return <>
      <Motion style={{
      scaleX
    }} position="fixed" top="0" left="0" right="0" h="3" bg="primary" transformOrigin="0%" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </Text>

      <Text>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam
        eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at
        iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
        eu tincidunt neque tincidunt a.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </Text>

      <Text>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </Text>

      <Text>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
      </Text>

      <Text>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </Text>

      <Text>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </Text>

      <Text>Quisque convallis ligula non magna efficitur tincidunt.</Text>

      <Text>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </Text>

      <Text>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
      </Text>

      <Text>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </Text>

      <Text>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </Text>

      <Text>Quisque convallis ligula non magna efficitur tincidunt.</Text>
    </>;
}`,...(k=(O=f.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var Y,Q,R;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const card: MotionVariants = useMemo(() => ({
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }), []);
  const foods: [string, number, number][] = useMemo(() => [["🍅", 340, 10], ["🍊", 20, 40], ["🍋", 60, 90], ["🍐", 80, 120], ["🍏", 100, 140], ["🫐", 205, 245], ["🍆", 260, 290], ["🍇", 290, 320]], []);
  const hue = (h: number) => \`hsl(\${h}, 100%, 50%)\`;
  return <VStack maxW="500px" mx="auto" pb="200px">
      {foods.map(([emoji, hueA, hueB], index) => <Motion key={index} initial="offscreen" whileInView="onscreen" viewport={{
      once: true,
      amount: 0.8
    }} overflow="hidden" display="flex" placeContent="center" placeItems="center" position="relative" pt="20px" mb="-120px">
          <Box position="absolute" top="0" left="0" right="0" bottom="0" clipPath='path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")' bg={\`linear-gradient(306deg, \${hue(hueA)}, \${hue(hueB)})\`} />

          <Motion className="card" variants={card} fontSize="164px" w="300px" h="430px" display="flex" placeContent="center" placeItems="center" bg="white" rounded="20px" boxShadow="0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)" transformOrigin="10% 60%">
            {emoji}
          </Motion>
        </Motion>)}
    </VStack>;
}`,...(R=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};const he=["basic","withTransition","withOnce","useViewport","useHook","customScrollBar","withVariants"];export{he as __namedExportsOrder,m as basic,f as customScrollBar,pe as default,x as useHook,h as useViewport,p as withOnce,d as withTransition,g as withVariants};
