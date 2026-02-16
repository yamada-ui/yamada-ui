import{bh as K,bj as $,bk as ee,r as l,bl as oe,j as e,T as i,V as ie}from"./iframe-Bh9OJiMa.js";import{M as a}from"./motion-BqA24xYQ.js";import{u as U}from"./use-scroll-C_FuUwjx.js";import{u as X,a as ne}from"./use-transform-DlKSKyYm.js";import{H as k}from"./heading-D9jKM5Is.js";import{B as y}from"./box-Bg2AiZ11.js";import"./preload-helper-C1FmrZbK.js";function te(o,n,s){const t=o.get();let r=null,c=t,u;const j=typeof t=="string"?t.replace(/[\d.-]/g,""):void 0,z=()=>{r&&(r.stop(),r=null)},Z=()=>{z(),r=new ee({keyframes:[q(o.get()),q(c)],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:u})};o.attach((b,_)=>(c=b,u=G=>_(v(G,j)),K.postRender(Z),o.get()),z);let w;return $(n)&&(w=n.on("change",b=>o.set(v(b,j))),o.on("destroy",w)),w}function v(o,n){return n?o+n:o}function q(o){return typeof o=="number"?o:parseFloat(o)}function re(o,n={}){const{isStatic:s}=l.useContext(oe),t=()=>$(o)?o.get():o;if(s)return X(t);const r=ne(t());return l.useInsertionEffect(()=>te(r,o,n),[r,JSON.stringify(n)]),r}const xe={component:a,title:"Components / Motion / Scroll"},d=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",transition:{duration:1},whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1},children:"Motion"})]}),m=()=>{const o=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Please scroll"}),e.jsx(y,{ref:o,borderWidth:"1px",h:"xs",overflow:"scroll",p:"md",rounded:"l2",w:"full",children:e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"96",p:"md",rounded:"l2",transition:{duration:2},viewport:{margin:"50px 0px 0px 0px",root:o},whileInView:{opacity:1},children:"Motion"})})]})},h=()=>{const{scrollYProgress:o}=U(),n=X(o,[0,1],[.2,2]);return e.jsx(y,{h:"300vh",w:"full",children:e.jsx(y,{h:"2xs",left:"50%",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",w:"2xs",children:e.jsx(a,{style:{scale:n},bg:"mono.subtle",h:"full",overflow:"hidden",rounded:"l3",w:"full",children:e.jsx(a,{style:{scaleY:o},bg:"mono",h:"inherit",transformOrigin:"50% 100%",w:"inherit"})})})})},g=()=>{const{scrollYProgress:o}=U(),n=re(o,{damping:30,restDelta:.001,stiffness:100});return e.jsxs(e.Fragment,{children:[e.jsx(a,{style:{scaleX:n},bg:"mono",h:"3",left:"0",position:"fixed",right:"0",top:"0",transformOrigin:"0%"}),e.jsx(i,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(i,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(k,{children:"Sub-header"}),e.jsx(i,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(i,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(i,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(i,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."}),e.jsx(k,{children:"Sub-header"}),e.jsx(i,{children:"Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim."}),e.jsx(i,{children:'Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.'}),e.jsx(i,{children:"A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump."}),e.jsx(i,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(i,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(i,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(k,{children:"Sub-header"}),e.jsx(i,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(i,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(i,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."})]})},f=()=>{const o=l.useMemo(()=>({offscreen:{y:300},onscreen:{rotate:-10,transition:{type:"spring",bounce:.4,duration:.8},y:50}}),[]),n=l.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),s=t=>`hsl(${t}, 100%, 50%)`;return e.jsx(ie,{maxW:"500px",mx:"auto",pb:"200px",children:n.map(([t,r,c],u)=>e.jsxs(a,{display:"flex",initial:"offscreen",mb:"-120px",overflow:"hidden",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",viewport:{amount:.8,once:!0},whileInView:"onscreen",children:[e.jsx(y,{bg:`linear-gradient(306deg, ${s(r)}, ${s(c)})`,bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',left:"0",position:"absolute",right:"0",top:"0"}),e.jsx(a,{className:"card",bg:"white",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",display:"flex",fontSize:"164px",h:"430px",placeContent:"center",placeItems:"center",rounded:"3xl",transformOrigin:"10% 60%",variants:o,w:"300px",children:t})]},u))})};var T,M,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion bg="mono" color="mono.contrast" initial={{
      opacity: 0
    }} mt="100vh" p="md" rounded="l2" whileInView={{
      opacity: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)}>
        Motion
      </Motion>
    </>;
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var V,J,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion bg="mono" color="mono.contrast" initial={{
      opacity: 0
    }} mt="100vh" p="md" rounded="l2" transition={{
      duration: 1
    }} whileInView={{
      opacity: 1
    }} onViewportEnter={entry => console.log("Element entries", entry)}>
        Motion
      </Motion>
    </>;
}`,...(B=(J=p.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var A,P,C;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Text>Please scroll</Text>

      <Motion bg="mono" color="mono.contrast" initial={{
      opacity: 0
    }} mt="100vh" p="md" rounded="l2" transition={{
      duration: 1
    }} viewport={{
      once: true
    }} whileInView={{
      opacity: 1
    }}>
        Motion
      </Motion>
    </>;
}`,...(C=(P=x.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var F,H,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return <>
      <Text>Please scroll</Text>

      <Box ref={scrollRef} borderWidth="1px" h="xs" overflow="scroll" p="md" rounded="l2" w="full">
        <Motion bg="mono" color="mono.contrast" initial={{
        opacity: 0
      }} mt="96" p="md" rounded="l2" transition={{
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
}`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var W,E,Q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return <Box h="300vh" w="full">
      <Box h="2xs" left="50%" position="fixed" top="50%" transform="translate(-50%, -50%)" w="2xs">
        <Motion style={{
        scale
      }} bg="mono.subtle" h="full" overflow="hidden" rounded="l3" w="full">
          <Motion style={{
          scaleY: scrollYProgress
        }} bg="mono" h="inherit" transformOrigin="50% 100%" w="inherit" />
        </Motion>
      </Box>
    </Box>;
}`,...(Q=(E=h.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};var O,Y,D;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
    }} bg="mono" h="3" left="0" position="fixed" right="0" top="0" transformOrigin="0%" />

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
}`,...(D=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};var R,L,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
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

          <Motion className="card" bg="white" boxShadow="0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)" display="flex" fontSize="164px" h="430px" placeContent="center" placeItems="center" rounded="3xl" transformOrigin="10% 60%" variants={variants} w="300px">
            {emoji}
          </Motion>
        </Motion>)}
    </VStack>;
}`,...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const me=["Basic","Transition","Once","Viewport","UseScroll","CustomScrollBar","Variant"];export{d as Basic,g as CustomScrollBar,x as Once,p as Transition,h as UseScroll,f as Variant,m as Viewport,me as __namedExportsOrder,xe as default};
