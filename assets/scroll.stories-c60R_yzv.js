import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{u as N}from"./use-scroll-BkTpmwAN.js";import{a as X,u as Z}from"./use-transform-D4IZzCRI.js";import{M as _,i as j,f as U,a as G,b as K,c as ee}from"./motion-Bd6WkMzw.js";import{M as n}from"./motion-pO-YJ4mG.js";import{T as i}from"./text-D1mCFSxx.js";import{B as w}from"./box-BMuUZYWP.js";import{H as b}from"./heading-DcMADrCH.js";import{V as oe}from"./stack-wqY1Rk5c.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./factory-CEsHZeW8.js";import"./extends-CF3RwP-h.js";import"./use-component-style-BVTnHHBW.js";import"./theme-provider-woLZZCt0.js";function z(o){return typeof o=="number"?o:parseFloat(o)}function ie(o,t={}){const{isStatic:u}=l.useContext(_),a=l.useRef(null),r=X(j(o)?z(o.get()):o),c=l.useRef(r.get()),d=l.useRef(()=>{}),$=()=>{const s=a.current;s&&s.time===0&&s.sample(K.delta),k(),a.current=ee({keyframes:[r.get(),c.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:d.current})},k=()=>{a.current&&a.current.stop()};return l.useInsertionEffect(()=>r.attach((s,v)=>u?v(s):(c.current=s,d.current=v,U.update($),r.get()),k),[JSON.stringify(t)]),G(()=>{if(j(o))return o.on("change",s=>r.set(z(s)))},[r]),r}const we={title:"Components / Motion / Scroll",component:n},p=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(n,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(n,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},onViewportEnter:o=>console.log("Element entries",o),bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(n,{mt:"100vh",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})]}),h=()=>{const o=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(w,{ref:o,overflow:"scroll",w:"full",h:"xs",p:"md",borderWidth:"1px",rounded:"md",children:e.jsx(n,{mt:"96",initial:{opacity:0},whileInView:{opacity:1},viewport:{root:o,margin:"50px 0px 0px 0px"},transition:{duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})]})},g=()=>{const{scrollYProgress:o}=N(),t=Z(o,[0,1],[.2,2]);return e.jsx(w,{w:"full",h:"300vh",children:e.jsx(w,{w:"2xs",h:"2xs",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",children:e.jsx(n,{style:{scale:t},w:"full",h:"full",overflow:"hidden",bg:["blackAlpha.200","whiteAlpha.200"],rounded:"3xl",children:e.jsx(n,{style:{scaleY:o},w:"inherit",h:"inherit",bg:"primary",transformOrigin:"50% 100%"})})})})},f=()=>{const{scrollYProgress:o}=N(),t=ie(o,{stiffness:100,damping:30,restDelta:.001});return e.jsxs(e.Fragment,{children:[e.jsx(n,{style:{scaleX:t},position:"fixed",top:"0",left:"0",right:"0",h:"3",bg:"primary",transformOrigin:"0%"}),e.jsx(i,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(i,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(b,{children:"Sub-header"}),e.jsx(i,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(i,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(i,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(i,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."}),e.jsx(b,{children:"Sub-header"}),e.jsx(i,{children:"Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim."}),e.jsx(i,{children:'Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.'}),e.jsx(i,{children:"A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump."}),e.jsx(i,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(i,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(i,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(b,{children:"Sub-header"}),e.jsx(i,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(i,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(i,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."})]})},y=()=>{const o=l.useMemo(()=>({offscreen:{y:300},onscreen:{y:50,rotate:-10,transition:{type:"spring",bounce:.4,duration:.8}}}),[]),t=l.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),u=a=>`hsl(${a}, 100%, 50%)`;return e.jsx(oe,{maxW:"500px",mx:"auto",pb:"200px",children:t.map(([a,r,c],d)=>e.jsxs(n,{initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.8},overflow:"hidden",display:"flex",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",mb:"-120px",children:[e.jsx(w,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',bg:`linear-gradient(306deg, ${u(r)}, ${u(c)})`}),e.jsx(n,{className:"card",variants:o,fontSize:"164px",w:"300px",h:"430px",display:"flex",placeContent:"center",placeItems:"center",bg:"white",rounded:"20px",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",transformOrigin:"10% 60%",children:a})]},d))})};var q,T,M;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(M=(T=p.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var S,V,J;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(J=(V=m.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var B,A,P;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(P=(A=x.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var H,C,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(F=(C=h.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,W,E;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(E=(W=g.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var Q,O,R;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,Y,L;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(L=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};const be=["basic","withTransition","withOnce","useViewport","useHook","customScrollBar","withVariants"];export{be as __namedExportsOrder,p as basic,f as customScrollBar,we as default,g as useHook,h as useViewport,x as withOnce,m as withTransition,y as withVariants};
