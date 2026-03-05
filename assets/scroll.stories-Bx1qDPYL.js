import{br as K,bt as X,bu as ee,r as d,bv as oe,j as e,T as n,V as ne}from"./iframe-Boi2xgLT.js";import{M as a}from"./motion-DqBREQAA.js";import{u as Z}from"./use-scroll-BmyRjmpW.js";import{u as _,a as ie}from"./use-transform-Dl3NTpEI.js";import{H as v}from"./heading-6Ijh5MXQ.js";import{B as k}from"./box-Bqlb_GZ8.js";import"./preload-helper-C1FmrZbK.js";function te(o,i,l={}){const r=o.get();let t=null,p=r,x;const z=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,j=()=>{t&&(t.stop(),t=null)},G=()=>{j();const s=S(o.get()),c=S(p);s!==c&&(t=new ee({keyframes:[s,c],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...l,onUpdate:x}))};if(o.attach((s,c)=>{p=s,x=u=>c(T(u,z)),K.postRender(()=>{var u;G(),(u=o.events.animationStart)==null||u.notify(),t==null||t.then(()=>{var q;(q=o.events.animationComplete)==null||q.notify()})})},j),X(i)){const s=i.on("change",u=>o.set(T(u,z))),c=o.on("destroy",s);return()=>{s(),c()}}return j}function T(o,i){return i?o+i:o}function S(o){return typeof o=="number"?o:parseFloat(o)}function re(o,i={}){const{isStatic:l}=d.useContext(oe),r=()=>X(o)?o.get():o;if(l)return _(r);const t=ie(r());return d.useInsertionEffect(()=>te(t,o,i),[t,JSON.stringify(i)]),t}function ae(o,i={}){return re(o,{type:"spring",...i})}const me={component:a,title:"Components / Motion / Scroll"},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",transition:{duration:1},whileInView:{opacity:1},onViewportEnter:o=>console.log("Element entries",o),children:"Motion"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"100vh",p:"md",rounded:"l2",transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1},children:"Motion"})]}),f=()=>{const o=d.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Please scroll"}),e.jsx(k,{ref:o,borderWidth:"1px",h:"xs",overflow:"scroll",p:"md",rounded:"l2",tabIndex:0,w:"full",children:e.jsx(a,{bg:"mono",color:"mono.contrast",initial:{opacity:0},mt:"96",p:"md",rounded:"l2",transition:{duration:2},viewport:{margin:"50px 0px 0px 0px",root:o},whileInView:{opacity:1},children:"Motion"})})]})},y=()=>{const{scrollYProgress:o}=Z(),i=_(o,[0,1],[.2,2]);return e.jsx(k,{h:"300vh",w:"full",children:e.jsx(k,{h:"2xs",left:"50%",position:"fixed",top:"50%",transform:"translate(-50%, -50%)",w:"2xs",children:e.jsx(a,{style:{scale:i},bg:"mono.subtle",h:"full",overflow:"hidden",rounded:"l3",w:"full",children:e.jsx(a,{style:{scaleY:o},bg:"mono",h:"inherit",transformOrigin:"50% 100%",w:"inherit"})})})})},w=()=>{const{scrollYProgress:o}=Z(),i=ae(o,{damping:30,restDelta:.001,stiffness:100});return e.jsxs(e.Fragment,{children:[e.jsx(a,{style:{scaleX:i},bg:"mono",h:"3",left:"0",position:"fixed",right:"0",top:"0",transformOrigin:"0%"}),e.jsx(n,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(n,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(v,{children:"Sub-header"}),e.jsx(n,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(n,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(n,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(n,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."}),e.jsx(v,{children:"Sub-header"}),e.jsx(n,{children:"Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim."}),e.jsx(n,{children:'Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.'}),e.jsx(n,{children:"A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump."}),e.jsx(n,{children:"The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump; dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks help fax my big quiz."}),e.jsx(n,{children:"Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz."}),e.jsx(n,{children:`The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun TV quiz game.`}),e.jsx(v,{children:"Sub-header"}),e.jsx(n,{children:"Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl."}),e.jsx(n,{children:"Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats."}),e.jsx(n,{children:"All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax. The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps."})]})},b=()=>{const o=d.useMemo(()=>({offscreen:{y:300},onscreen:{rotate:-10,transition:{type:"spring",bounce:.4,duration:.8},y:50}}),[]),i=d.useMemo(()=>[["🍅",340,10],["🍊",20,40],["🍋",60,90],["🍐",80,120],["🍏",100,140],["🫐",205,245],["🍆",260,290],["🍇",290,320]],[]),l=r=>`hsl(${r}, 100%, 50%)`;return e.jsx(ne,{maxW:"500px",mx:"auto",pb:"200px",children:i.map(([r,t,p],x)=>e.jsxs(a,{display:"flex",initial:"offscreen",mb:"-120px",overflow:"hidden",placeContent:"center",placeItems:"center",position:"relative",pt:"20px",viewport:{amount:.8,once:!0},whileInView:"onscreen",children:[e.jsx(k,{bg:`linear-gradient(306deg, ${l(t)}, ${l(p)})`,bottom:"0",clipPath:'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',left:"0",position:"absolute",right:"0",top:"0"}),e.jsx(a,{className:"card",bg:"white",boxShadow:"0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",display:"flex",fontSize:"164px",h:"430px",placeContent:"center",placeItems:"center",rounded:"3xl",transformOrigin:"10% 60%",variants:o,w:"300px",children:r})]},x))})};var M,V,J;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(J=(V=m.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var B,A,C;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(C=(A=h.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var F,P,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(H=(P=g.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var I,W,E;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(E=(W=f.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var O,Q,D;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(D=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:D.source}}};var Y,R,L;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(L=(R=w.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var N,$,U;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(U=($=b.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const he=["Basic","Transition","Once","Viewport","UseScroll","CustomScrollBar","Variant"];export{m as Basic,w as CustomScrollBar,g as Once,h as Transition,y as UseScroll,b as Variant,f as Viewport,he as __namedExportsOrder,me as default};
