import{bs as C,bu as V,bv as F,r as d,bw as P,j as e,T as n,V as H}from"./iframe-DyywAl9M.js";import{M as a}from"./motion-Cby6YIV-.js";import{u as M}from"./use-scroll-DNbxlrYz.js";import{u as J,a as I}from"./use-transform-Byew6SxY.js";import{H as z}from"./heading-CRYotZbx.js";import{B as j}from"./box-CmodVoex.js";import"./preload-helper-PPVm8Dsz.js";function W(o,i,s={}){const r=o.get();let t=null,p=r,x;const v=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,m=()=>{t&&(t.stop(),t=null)},B=()=>{const l=S(o.get()),c=S(p);if(l===c){m();return}const u=t?t.getGeneratorVelocity():o.getVelocity();m(),t=new F({keyframes:[l,c],velocity:u,type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:x})},A=()=>{B(),o.events.animationStart?.notify(),t?.then(()=>{o.events.animationComplete?.notify()})};if(o.attach((l,c)=>{p=l,x=u=>c(q(u,v)),C.postRender(A)},m),V(i)){let l=s.skipInitialAnimation===!0;const c=i.on("change",T=>{l?(l=!1,o.jump(q(T,v),!1)):o.set(q(T,v))}),u=o.on("destroy",c);return()=>{c(),u()}}return m}function q(o,i){return i?o+i:o}function S(o){return typeof o=="number"?o:parseFloat(o)}function E(o,i={}){const{isStatic:s}=d.useContext(P),r=()=>V(o)?o.get():o;if(s)return J(r);const t=I(r());return d.useInsertionEffect(()=>W(t,o,i),[t,JSON.stringify(i)]),t}function O(o,i={}){return E(o,{type:"spring",...i})}const U={component:a,title:"Components / Motion / Scroll"},h=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",transition:{duration:1},whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1},children:"Motion"})]}),y=()=>{const o=d.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(j,{ref:o,borderWidth:"1px",h:"xs",overflow:"scroll",p:"md",rounded:"l2",tabIndex:0,w:"full",children:e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"96",p:"md",rounded:"l2",transition:{duration:2},viewport:{margin:"50px 0px 0px 0px",root:o},whileInView:{opacity:1},children:"Motion"})})]})},w=()=>{const{scrollYProgress:o}=M(),i=J(o,[0,1],[.2,2]);return e.jsx(j,{h:"300vh",w:"full",children:e.jsx(j,{h:"2xs",left:"50%",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",w:"2xs",children:e.jsx(a,{style:{scale:i},bg:"mono.subtle",h:"full",overflow:"hidden",rounded:"l3",w:"full",children:e.jsx(a,{style:{scaleY:o},bg:"mono",h:"inherit",transformOrigin:"50% 100%",w:"inherit"})})})})},b=()=>{const{scrollYProgress:o}=M(),i=O(o,{damping:30,restDelta:.001,stiffness:100});return e.jsxs(e.Fragment,{children:[e.jsx(a,{style:{scaleX:i},bg:"mono",h:"3",left:"0",position:"fixed",right:"0",top:"0",transformOrigin:"0%"}),e.jsx(n,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(n,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(z,{children:"Sub-header"}),e.jsx(n,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(n,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(n,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(n,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."}),e.jsx(z,{children:"Sub-header"}),e.jsx(n,{children:"Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim."}),e.jsx(n,{children:'Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.'}),e.jsx(n,{children:"A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump."}),e.jsx(n,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(n,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(n,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(z,{children:"Sub-header"}),e.jsx(n,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(n,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(n,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."})]})},k=()=>{const o=d.useMemo(()=>({offscreen:{y:300},onscreen:{rotate:-10,transition:{type:"spring",bounce:.4,duration:.8},y:50}}),[]),i=d.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),s=r=>`hsl(${r}, 100%, 50%)`;return e.jsx(H,{maxW:"500px",mx:"auto",pb:"200px",children:i.map(([r,t,p],x)=>e.jsxs(a,{display:"flex",initial:"offscreen",mb:"-120px",overflow:"hidden",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",viewport:{amount:.8,once:!0},whileInView:"onscreen",children:[e.jsx(j,{bg:`linear-gradient(306deg, ${s(t)}, ${s(p)})`,bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',left:"0",position:"absolute",right:"0",top:"0"}),e.jsx(a,{className:"card",bg:"white",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",display:"flex",fontSize:"164px",h:"430px",placeContent:"center",placeItems:"center",rounded:"3xl",transformOrigin:"10% 60%",variants:o,w:"300px",children:r})]},x))})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return <>
      <Text>Please scroll</Text>

      <Box ref={scrollRef} borderWidth="1px" h="xs" overflow="scroll" p="md" rounded="l2" tabIndex={0} w="full">
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};const X=["Basic","Transition","Once","Viewport","UseScroll","CustomScrollBar","Variant"];export{h as Basic,b as CustomScrollBar,f as Once,g as Transition,w as UseScroll,k as Variant,y as Viewport,X as __namedExportsOrder,U as default};
