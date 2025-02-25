import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as a}from"./index-BwPxMuoB.js";import{u as _}from"./use-scroll-4Qxc4zJ7.js";import{a as K,u as ee}from"./use-transform-En4sOZr2.js";import{M as oe,u as q,n as ie,f as ne,a as re,i as T,b as te}from"./proxy-BdCiNrpl.js";import{M as r}from"./motion-B3T2Zn_y.js";import{T as i}from"./text-DKjBQKmK.js";import{B as w}from"./box-CKfluZfz.js";import{H as b}from"./heading-DsYXOt72.js";import{V as ae}from"./stack-BP8LKMVN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Cy2nAbAn.js";import"./factory-DbNU74ts.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";function se(o,n={}){const{isStatic:c}=a.useContext(oe),s=a.useRef(null),l=q(()=>T(o)?o.get():o),u=q(()=>typeof l=="string"?l.replace(/[\d.-]/g,""):void 0),t=K(l),k=a.useRef(l),v=a.useRef(ie),U=()=>{j(),s.current=te({keyframes:[V(t.get()),V(k.current)],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:v.current})},j=()=>{s.current&&s.current.stop()};return a.useInsertionEffect(()=>t.attach((d,z)=>c?z(d):(k.current=d,v.current=G=>z(M(G,u)),ne.postRender(U),t.get()),j),[JSON.stringify(n)]),re(()=>{if(T(o))return o.on("change",d=>t.set(M(d,u)))},[t,u]),t}function M(o,n){return n?o+n:o}function V(o){return typeof o=="number"?o:parseFloat(o)}const ze={component:r,title:"Components / Motion / Scroll"},p=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(r,{bg:"primary",color:"white",initial:{opacity:0},mt:"100vh",p:"md",rounded:"md",whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(r,{bg:"primary",color:"white",initial:{opacity:0},mt:"100vh",p:"md",rounded:"md",transition:{duration:1},whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(r,{bg:"primary",color:"white",initial:{opacity:0},mt:"100vh",p:"md",rounded:"md",transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1},children:"Motion"})]}),h=()=>{const o=a.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(w,{ref:o,borderWidth:"1px",h:"xs",overflow:"scroll",p:"md",rounded:"md",w:"full",children:e.jsx(r,{bg:"primary",color:"white",initial:{opacity:0},mt:"96",p:"md",rounded:"md",transition:{duration:2},viewport:{margin:"50px 0px 0px 0px",root:o},whileInView:{opacity:1},children:"Motion"})})]})},g=()=>{const{scrollYProgress:o}=_(),n=ee(o,[0,1],[.2,2]);return e.jsx(w,{h:"300vh",w:"full",children:e.jsx(w,{h:"2xs",left:"50%",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",w:"2xs",children:e.jsx(r,{style:{scale:n},bg:["blackAlpha.200","whiteAlpha.200"],h:"full",overflow:"hidden",rounded:"3xl",w:"full",children:e.jsx(r,{style:{scaleY:o},bg:"primary",h:"inherit",transformOrigin:"50% 100%",w:"inherit"})})})})},f=()=>{const{scrollYProgress:o}=_(),n=se(o,{damping:30,restDelta:.001,stiffness:100});return e.jsxs(e.Fragment,{children:[e.jsx(r,{style:{scaleX:n},bg:"primary",h:"3",left:"0",position:"fixed",right:"0",top:"0",transformOrigin:"0%"}),e.jsx(i,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(i,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(b,{children:"Sub-header"}),e.jsx(i,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(i,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(i,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(i,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."}),e.jsx(b,{children:"Sub-header"}),e.jsx(i,{children:"Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim."}),e.jsx(i,{children:'Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.'}),e.jsx(i,{children:"A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump."}),e.jsx(i,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(i,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(i,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(b,{children:"Sub-header"}),e.jsx(i,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(i,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(i,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."})]})},y=()=>{const o=a.useMemo(()=>({offscreen:{y:300},onscreen:{rotate:-10,transition:{type:"spring",bounce:.4,duration:.8},y:50}}),[]),n=a.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),c=s=>`hsl(${s}, 100%, 50%)`;return e.jsx(ae,{maxW:"500px",mx:"auto",pb:"200px",children:n.map(([s,l,u],t)=>e.jsxs(r,{display:"flex",initial:"offscreen",mb:"-120px",overflow:"hidden",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",viewport:{amount:.8,once:!0},whileInView:"onscreen",children:[e.jsx(w,{bg:`linear-gradient(306deg, ${c(l)}, ${c(u)})`,bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',left:"0",position:"absolute",right:"0",top:"0"}),e.jsx(r,{className:"card",bg:"white",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",display:"flex",fontSize:"164px",h:"430px",placeContent:"center",placeItems:"center",rounded:"20px",transformOrigin:"10% 60%",variants:o,w:"300px",children:s})]},t))})};var S,J,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion bg="primary" color="white" initial={{
      opacity: 0
    }} mt="100vh" p="md" rounded="md" whileInView={{
      opacity: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)}>
        Motion
      </Motion>
    </>;
}`,...(B=(J=p.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var A,P,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion bg="primary" color="white" initial={{
      opacity: 0
    }} mt="100vh" p="md" rounded="md" transition={{
      duration: 1
    }} whileInView={{
      opacity: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)}>
        Motion
      </Motion>
    </>;
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var H,F,I;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion bg="primary" color="white" initial={{
      opacity: 0
    }} mt="100vh" p="md" rounded="md" transition={{
      duration: 1
    }} viewport={{
      once: true
    }} whileInView={{
      opacity: 1
    }}>
        Motion
      </Motion>
    </>;
}`,...(I=(F=x.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var W,E,Q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return <>
      <Text>Please scroll</Text>

      <Box ref={scrollRef} borderWidth="1px" h="xs" overflow="scroll" p="md" rounded="md" w="full">
        <Motion bg="primary" color="white" initial={{
        opacity: 0
      }} mt="96" p="md" rounded="md" transition={{
        duration: 2
      }} viewport={{
        margin: "50px 0px 0px 0px",
        root: scrollRef
      }} whileInView={{
        opacity: 1
      }}>
          Motion
        </Motion>
      </Box>
    </>;
}`,...(Q=(E=h.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};var R,O,Y;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return <Box h="300vh" w="full">
      <Box h="2xs" left="50%" position="fixed" top="50%" transform="translate(-50%, -50%)" w="2xs">
        <Motion style={{
        scale
      }} bg={["blackAlpha.200", "whiteAlpha.200"]} h="full" overflow="hidden" rounded="3xl" w="full">
          <Motion style={{
          scaleY: scrollYProgress
        }} bg="primary" h="inherit" transformOrigin="50% 100%" w="inherit" />
        </Motion>
      </Box>
    </Box>;
}`,...(Y=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var D,L,N;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100
  });
  return <>
      <Motion style={{
      scaleX
    }} bg="primary" h="3" left="0" position="fixed" right="0" top="0" transformOrigin="0%" />

      <Text>
        The quick brown fox jumps over the lazy dog. Pack my box with five dozen
        liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump;
        dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks
        help fax my big quiz.
      </Text>

      <Text>
        Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft
        Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping
        zebras vex. The five boxing wizards jump quickly. Jackdaws love my big
        sphinx of quartz.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
        for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's
        job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun
        TV quiz game.
      </Text>

      <Text>
        Amazingly few discotheques provide jukeboxes. My girl wove six dozen
        plaid jackets before she quit. Six big devils from Japan quickly forgot
        how to waltz. Big July earthquakes confound zany experimental vow. Foxy
        parsons quiz and cajole the lovably dim wiki-girl.
      </Text>

      <Text>
        Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy
        Fredericka bought many very exquisite opal jewels. Sixty zippers were
        quickly picked from the woven jute bag. A quick movement of the enemy
        will jeopardize six gunboats.
      </Text>

      <Text>
        All questions asked by five watch experts amazed the judge. Jack quietly
        moved up front and seized the big ball of wax. The quick, brown fox
        jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
        graced by fox whelps.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs
        vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
        fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold
        Jim. Quick zephyrs blow, vexing daft Jim.
      </Text>

      <Text>
        Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax
        jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking
        zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy
        sphinx waves quart jug of bad milk.
      </Text>

      <Text>
        A very bad quack might jinx zippy fowls. Few quips galvanized the mock
        jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox,
        zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
      </Text>

      <Text>
        The quick brown fox jumps over the lazy dog. Pack my box with five dozen
        liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump;
        dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks
        help fax my big quiz.
      </Text>

      <Text>
        Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft
        Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping
        zebras vex. The five boxing wizards jump quickly. Jackdaws love my big
        sphinx of quartz.
      </Text>

      <Text>
        The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
        for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's
        job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun
        TV quiz game.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Amazingly few discotheques provide jukeboxes. My girl wove six dozen
        plaid jackets before she quit. Six big devils from Japan quickly forgot
        how to waltz. Big July earthquakes confound zany experimental vow. Foxy
        parsons quiz and cajole the lovably dim wiki-girl.
      </Text>

      <Text>
        Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy
        Fredericka bought many very exquisite opal jewels. Sixty zippers were
        quickly picked from the woven jute bag. A quick movement of the enemy
        will jeopardize six gunboats.
      </Text>

      <Text>
        All questions asked by five watch experts amazed the judge. Jack quietly
        moved up front and seized the big ball of wax. The quick, brown fox
        jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
        graced by fox whelps.
      </Text>
    </>;
}`,...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var $,X,Z;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const card: MotionVariants = useMemo(() => ({
    offscreen: {
      y: 300
    },
    onscreen: {
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      },
      y: 50
    }
  }), []);
  const foods: [string, number, number][] = useMemo(() => [["🍅", 340, 10], ["🍊", 20, 40], ["🍋", 60, 90], ["🍐", 80, 120], ["🍏", 100, 140], ["🫐", 205, 245], ["🍆", 260, 290], ["🍇", 290, 320]], []);
  const hue = (h: number) => \`hsl(\${h}, 100%, 50%)\`;
  return <VStack maxW="500px" mx="auto" pb="200px">
      {foods.map(([emoji, hueA, hueB], index) => <Motion key={index} display="flex" initial="offscreen" mb="-120px" overflow="hidden" placeContent="center" placeItems="center" position="relative" pt="20px" viewport={{
      amount: 0.8,
      once: true
    }} whileInView="onscreen">
          <Box bg={\`linear-gradient(306deg, \${hue(hueA)}, \${hue(hueB)})\`} bottom="0" clipPath='path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")' left="0" position="absolute" right="0" top="0" />

          <Motion className="card" bg="white" boxShadow="0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)" display="flex" fontSize="164px" h="430px" placeContent="center" placeItems="center" rounded="20px" transformOrigin="10% 60%" variants={card} w="300px">
            {emoji}
          </Motion>
        </Motion>)}
    </VStack>;
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const qe=["basic","withTransition","withOnce","useViewport","useHook","customScrollBar","withVariants"];export{qe as __namedExportsOrder,p as basic,f as customScrollBar,ze as default,g as useHook,h as useViewport,x as withOnce,m as withTransition,y as withVariants};
