import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{D as i,I as a,O as o,R as s,_ as c,o as l,s as u,v as d}from"./proxy-BbkvH48K.js";import{n as f}from"./use-scroll-dldUqt9r.js";import{i as p,n as m,r as h,t as g}from"./use-transform-Decm3Pgf.js";import{t as _}from"./react-DhJdH1Jr.js";import{n as v,t as y}from"./motion-B3D3Rpm_.js";import{n as b,t as x}from"./text-b2W5euYI.js";import{n as S,t as C}from"./box-C47iDJeO.js";import{n as w,t as T}from"./heading-mQlbK6e0.js";import{n as E,t as D}from"./v-stack-DgxvBjIl.js";function O(e,t,n={}){let r=e.get(),o=null,s=r,c,l=typeof r==`string`?r.replace(/[\d.-]/g,``):void 0,u=()=>{o&&=(o.stop(),null),e.animation=void 0},f=()=>{let t=A(e.get()),r=A(s);if(t===r){u();return}let a=o?o.getGeneratorVelocity():e.getVelocity();u(),o=new i({keyframes:[t,r],velocity:a,type:`spring`,restDelta:.001,restSpeed:.01,...n,onUpdate:c})},p=()=>{f(),e.animation=o??void 0,e.events.animationStart?.notify(),o?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((e,t)=>{s=e,c=e=>t(k(e,l)),a.postRender(p)},u),d(t)){let r=n.skipInitialAnimation===!0,i=t.on(`change`,t=>{r?(r=!1,e.jump(k(t,l),!1)):e.set(k(t,l))}),a=e.on(`destroy`,i);return()=>{i(),a()}}return u}function k(e,t){return t?e+t:e}function A(e){return typeof e==`number`?e:parseFloat(e)}function j(){return(j=e((()=>{o(),c(),s()})))()}function M(e,t={}){let{isStatic:n}=(0,N.useContext)(l),r=()=>d(e)?e.get():e;if(n)return m(r);let i=p(r());return(0,N.useInsertionEffect)(()=>O(i,e,t),[i,JSON.stringify(t)]),i}var N;function P(){return(P=e((()=>{j(),c(),N=n(),u(),h(),g()})))()}function F(e,t={}){return M(e,{type:`spring`,...t})}function I(){return(I=e((()=>{P()})))()}var L=t({Basic:()=>V,CustomScrollBar:()=>K,Once:()=>U,Transition:()=>H,UseScroll:()=>G,Variant:()=>q,Viewport:()=>W,__namedExportsOrder:()=>J,default:()=>B}),R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{_(),R=n(),S(),w(),E(),b(),v(),z=r(),B={component:y,title:`Components / Motion / Scroll`},V=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(x,{children:`Please scroll`}),(0,z.jsx)(y,{bg:`mono`,color:`mono.contrast`,initial:{opacity:0},mt:`100vh`,p:`md`,rounded:`l2`,whileInView:{opacity:1},onViewportEnter:e=>console.log(`Element entries`,e),children:`Motion`})]}),H=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(x,{children:`Please scroll`}),(0,z.jsx)(y,{bg:`mono`,color:`mono.contrast`,initial:{opacity:0},mt:`100vh`,p:`md`,rounded:`l2`,transition:{duration:1},whileInView:{opacity:1},onViewportEnter:e=>console.log(`Element entries`,e),children:`Motion`})]}),U=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(x,{children:`Please scroll`}),(0,z.jsx)(y,{bg:`mono`,color:`mono.contrast`,initial:{opacity:0},mt:`100vh`,p:`md`,rounded:`l2`,transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1},children:`Motion`})]}),W=()=>{let e=(0,R.useRef)(null);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(x,{children:`Please scroll`}),(0,z.jsx)(C,{ref:e,borderWidth:`1px`,h:`xs`,overflow:`scroll`,p:`md`,rounded:`l2`,tabIndex:0,w:`full`,children:(0,z.jsx)(y,{bg:`mono`,color:`mono.contrast`,initial:{opacity:0},mt:`96`,p:`md`,rounded:`l2`,transition:{duration:2},viewport:{margin:`50px 0px 0px 0px`,root:e},whileInView:{opacity:1},children:`Motion`})})]})},G=()=>{let{scrollYProgress:e}=f(),t=m(e,[0,1],[.2,2]);return(0,z.jsx)(C,{h:`300vh`,w:`full`,children:(0,z.jsx)(C,{h:`2xs`,left:`50%`,position:`fixed`,top:`50%`,transform:`translate(-50%, -50%)`,w:`2xs`,children:(0,z.jsx)(y,{style:{scale:t},bg:`mono.subtle`,h:`full`,overflow:`hidden`,rounded:`l3`,w:`full`,children:(0,z.jsx)(y,{style:{scaleY:e},bg:`mono`,h:`inherit`,transformOrigin:`50% 100%`,w:`inherit`})})})})},K=()=>{let{scrollYProgress:e}=f(),t=F(e,{damping:30,restDelta:.001,stiffness:100});return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(y,{style:{scaleX:t},bg:`mono`,h:`3`,left:`0`,position:`fixed`,right:`0`,top:`0`,transformOrigin:`0%`}),(0,z.jsx)(x,{children:`The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz.`}),(0,z.jsx)(x,{children:`Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz.`}),(0,z.jsx)(T,{children:`Sub-header`}),(0,z.jsx)(x,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),(0,z.jsx)(x,{children:`Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl.`}),(0,z.jsx)(x,{children:`Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats.`}),(0,z.jsx)(x,{children:`All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.`}),(0,z.jsx)(T,{children:`Sub-header`}),(0,z.jsx)(x,{children:`Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.`}),(0,z.jsx)(x,{children:`Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`}),(0,z.jsx)(x,{children:`A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.`}),(0,z.jsx)(x,{children:`The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz.`}),(0,z.jsx)(x,{children:`Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz.`}),(0,z.jsx)(x,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),(0,z.jsx)(T,{children:`Sub-header`}),(0,z.jsx)(x,{children:`Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl.`}),(0,z.jsx)(x,{children:`Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats.`}),(0,z.jsx)(x,{children:`All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.`})]})},q=()=>{let e=(0,R.useMemo)(()=>({offscreen:{y:300},onscreen:{rotate:-10,transition:{type:`spring`,bounce:.4,duration:.8},y:50}}),[]),t=(0,R.useMemo)(()=>[[`🍅`,340,10],[`🍊`,20,40],[`🍋`,60,90],[`🍐`,80,120],[`🍏`,100,140],[`🫐`,205,245],[`🍆`,260,290],[`🍇`,290,320]],[]),n=e=>`hsl(${e}, 100%, 50%)`;return(0,z.jsx)(D,{maxW:`500px`,mx:`auto`,pb:`200px`,children:t.map(([t,r,i],a)=>(0,z.jsxs)(y,{display:`flex`,initial:`offscreen`,mb:`-120px`,overflow:`hidden`,placeContent:`center`,placeItems:`center`,position:`relative`,pt:`20px`,viewport:{amount:.8,once:!0},whileInView:`onscreen`,children:[(0,z.jsx)(C,{bg:`linear-gradient(306deg, ${n(r)}, ${n(i)})`,bottom:`0`,clipPath:`path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,left:`0`,position:`absolute`,right:`0`,top:`0`}),(0,z.jsx)(y,{className:`card`,bg:`white`,boxShadow:`0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)`,display:`flex`,fontSize:`164px`,h:`430px`,placeContent:`center`,placeItems:`center`,rounded:`3xl`,transformOrigin:`10% 60%`,variants:e,w:`300px`,children:t})]},a))})},J=[`Basic`,`Transition`,`Once`,`Viewport`,`UseScroll`,`CustomScrollBar`,`Variant`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}}})))()}export{L as n,I as r,Y as t};