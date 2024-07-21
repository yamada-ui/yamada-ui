import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{u as U}from"./use-scroll-HUnK8U07.js";import{a as X,u as z}from"./use-transform-SGIUKroP.js";import{M as Z,i as M,f as _,a as J,b as G,c as K}from"./motion-B3m9R3Ab.js";import{M as r}from"./motion-DnMpPmZx.js";import{T as i}from"./text-BwL1Rj_o.js";import{B as v}from"./box-B1h8yYhg.js";import{H as q}from"./heading-CoV6rBX7.js";import{V as ee}from"./stack-Bq97WU2M.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./factory-BXeT7qA-.js";import"./extends-CF3RwP-h.js";import"./use-component-style-DuIjxI-P.js";import"./theme-provider-CgekAyNK.js";function ne(n,s={}){const{isStatic:l}=u.useContext(Z),a=u.useRef(null),t=X(M(n)?n.get():n),c=u.useRef(t.get()),m=u.useRef(()=>{}),W=()=>{const o=a.current;o&&o.time===0&&o.sample(G.delta),w(),a.current=K({keyframes:[t.get(),c.current],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:m.current})},w=()=>{a.current&&a.current.stop()};return u.useInsertionEffect(()=>t.attach((o,y)=>l?y(o):(c.current=o,m.current=y,_.update(W),t.get()),w),[JSON.stringify(s)]),J(()=>{if(M(n))return n.on("change",o=>t.set(parseFloat(o)))},[t]),t}const be={title:"Components / Motion / Scroll",component:r},d=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(r,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},onViewportEnter:n=>console.log("Element entries",n),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(r,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},onViewportEnter:n=>console.log("Element entries",n),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(r,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),x=()=>{const n=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(v,{ref:n,overflow:"scroll",w:"full",h:"xs",p:"md",borderWidth:"1px",rounded:"md",children:e.jsx(r,{mt:"96",initial:{opacity:0},whileInView:{opacity:1},viewport:{root:n,margin:"50px 0px 0px 0px"},transition:{duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})]})},f=()=>{const{scrollYProgress:n}=U(),s=z(n,[0,1],[.2,2]);return e.jsx(v,{w:"full",h:"300vh",children:e.jsx(v,{w:"2xs",h:"2xs",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",children:e.jsx(r,{style:{scale:s},w:"full",h:"full",overflow:"hidden",bg:["blackAlpha.200","whiteAlpha.200"],rounded:"3xl",children:e.jsx(r,{style:{scaleY:n},w:"inherit",h:"inherit",bg:"primary",transformOrigin:"50% 100%"})})})})},g=()=>{const{scrollYProgress:n}=U(),s=ne(n,{stiffness:100,damping:30,restDelta:.001});return e.jsxs(e.Fragment,{children:[e.jsx(r,{style:{scaleX:s},position:"fixed",top:"0",left:"0",right:"0",h:"3",bg:"primary",transformOrigin:"0%"}),e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam."}),e.jsx(i,{children:"Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a."}),e.jsx(q,{children:"Sub-header"}),e.jsx(i,{children:"In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu."}),e.jsx(i,{children:"Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi."}),e.jsx(i,{children:"Sed sem nisi, luctus consequat ligula in, congue sodales nisl."}),e.jsx(i,{children:"Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo."}),e.jsx(q,{children:"Sub-header"}),e.jsx(i,{children:"Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium."}),e.jsx(i,{children:"Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor."}),e.jsx(i,{children:"Quisque convallis ligula non magna efficitur tincidunt."}),e.jsx(i,{children:"Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi."}),e.jsx(i,{children:"Sed sem nisi, luctus consequat ligula in, congue sodales nisl."}),e.jsx(i,{children:"Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo."}),e.jsx(q,{children:"Sub-header"}),e.jsx(i,{children:"Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium."}),e.jsx(i,{children:"Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor."}),e.jsx(i,{children:"Quisque convallis ligula non magna efficitur tincidunt."})]})},b=()=>{const n=u.useMemo(()=>({offscreen:{y:300},onscreen:{y:50,rotate:-10,transition:{type:"spring",bounce:.4,duration:.8}}}),[]),s=u.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),l=a=>`hsl(${a}, 100%, 50%)`;return e.jsx(ee,{maxW:"500px",mx:"auto",pb:"200px",children:s.map(([a,t,c],m)=>e.jsxs(r,{initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.8},overflow:"hidden",display:"flex",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",mb:"-120px",children:[e.jsx(v,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',bg:`linear-gradient(306deg, ${l(t)}, ${l(c)})`}),e.jsx(r,{className:"card",variants:n,fontSize:"164px",w:"300px",h:"430px",display:"flex",placeContent:"center",placeItems:"center",bg:"white",rounded:"20px",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",transformOrigin:"10% 60%",children:a})]},m))})};var j,T,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var S,I,V;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var C,A,E;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(E=(A=h.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var B,D,H;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(H=(D=x.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var L,O,R;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var k,Y,F;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(F=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var Q,$,N;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(N=($=b.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};const ve=["basic","withTransition","withOnce","useViewport","useHook","customScrollBar","withVariants"];export{ve as __namedExportsOrder,d as basic,g as customScrollBar,be as default,f as useHook,x as useViewport,h as withOnce,p as withTransition,b as withVariants};
