import{d as K,f as Q,r as i,j as n,s as U,m as Z,T as d,ah as p,v as W,V as $}from"./iframe-BVYXOt_x.js";import{u as nn}from"./index-D8jR06a4.js";import{u as en}from"./use-infinite-scroll-Btmwj025.js";import{H as l}from"./heading-BUA-B32m.js";import{B as N}from"./button-DhYNg7P2.js";import{C as c,a as x,b as u}from"./card-D8aTvb7I.js";import"./preload-helper-D9Z9MdNV.js";import"./use-breakpoint-CAqBpJlJ.js";import"./use-breakpoint-value-Bh-BKcFh.js";import"./use-color-mode-value-Bkhxg2Cu.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";const rn=K({base:{root:{display:"flex",flexDirection:"row",w:"full"},trigger:{alignItems:"center",display:"flex",flex:1,justifyContent:"center",w:"full"}},props:{orientation:{horizontal:{root:{flexDirection:"row",gap:"md"}},vertical:{root:{flexDirection:"column",gap:"lg"}}}},defaultProps:{orientation:"vertical"}}),{withContext:on,withProvider:tn}=Q("infinite-scroll-area",rn),s=tn(({ref:t,children:a,disabled:r,finish:e,indexRef:o,initialLoad:f,loading:A,orientation:F,resetRef:Y,reverse:z,rootMargin:E,rootRef:M,startIndex:V,threshold:P,triggerProps:I,onLoad:X,...q})=>{const T=i.useRef(null),J=nn(F),{ref:w,finish:G}=en({disabled:r,indexRef:o,initialLoad:f,orientation:J,resetRef:Y,reverse:z,rootMargin:E,rootRef:M??T,startIndex:V,threshold:P,onLoad:X}),_=!r&&(!!e||!G);return n.jsxs(U.div,{ref:Z(T,t),"aria-busy":"false",role:"feed",...q,children:[z&&_?n.jsx(k,{ref:w,...I,children:G?e:A}):null,a,!z&&_?n.jsx(k,{ref:w,...I,children:G?e:A}):null]})},"root",{transferProps:["orientation"]})(),k=on("div","trigger")(),gn={component:s,title:"Components / InfiniteScrollArea"},b=async t=>new Promise(a=>{setTimeout(a,t)}),L=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},h=()=>{const t=i.useRef(null),[a,r]=i.useState(50),e=i.useRef(W);return n.jsxs(n.Fragment,{children:[n.jsx($,{ref:t,borderWidth:"1px",maxH:"xl",overflowY:"auto",p:"lg",rounded:"l3",children:n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),resetRef:e,rootRef:t,onLoad:({finish:o,index:f})=>{console.log("load",f),r(A=>A+50),f>=5&&o()},children:Array(a).fill(0).map((o,f)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},f))})}),n.jsx(N,{onClick:()=>{r(50),e.current()},children:"Reset"})]})},m=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),rootMargin:"300px 0px 0px 0px",onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},g=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),threshold:1,onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},C=()=>{const[t,a]=i.useState(0);return n.jsx(s,{initialLoad:!0,loading:n.jsx(p,{fontSize:"2xl"}),onLoad:async({finish:r,index:e})=>{console.log("load",e),await b(1e3),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},R=()=>{const[t,a]=i.useState(50);return n.jsx(s,{borderWidth:"1px",loading:n.jsx(p,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"lg",rounded:"l3",onLoad:({finish:r,index:e})=>{a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},S=()=>{const[t,a]=i.useState(50);return n.jsx(s,{borderWidth:"1px",loading:n.jsx(p,{fontSize:"2xl"}),orientation:"horizontal",overflowX:"auto",p:"lg",rounded:"l3",onLoad:({finish:r,index:e})=>{a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{minW:"lg",children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},j=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),startIndex:3,onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},B=()=>{const[t,a]=i.useState(50);return n.jsx(s,{finish:n.jsx(n.Fragment,{children:"Finished"}),loading:n.jsx(p,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},y=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),reverse:!0,onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},O=()=>{const[t,a]=i.useState(!1),[r,e]=i.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(s,{borderWidth:"1px",disabled:t,loading:n.jsx(p,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"lg",rounded:"l3",onLoad:({finish:o,index:f})=>{console.log("load",f),e(A=>A+50),f>=5&&o()},children:Array(r).fill(0).map((o,f)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},f))}),n.jsx(N,{colorScheme:t?"success":"danger",onClick:()=>a(o=>!o),children:t?"Enable":"Disabled"})]})},H=()=>{const t=i.useRef(W),[a,r]=i.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(s,{borderWidth:"1px",loading:n.jsx(p,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"lg",resetRef:t,rounded:"l3",onLoad:({finish:e,index:o})=>{console.log("load",o),r(f=>f+50),o>=5&&e()},children:Array(a).fill(0).map((e,o)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),n.jsx(N,{onClick:()=>{r(50),t.current()},children:"Reset"})]})},v=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(p,{fontSize:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},onLoad:async({finish:r,index:e})=>{console.log("load",e),await b(5e3),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},D=()=>{const[t,a]=i.useState(50);return n.jsx(s,{loading:n.jsx(n.Fragment,{children:"Loading…"}),onLoad:async({finish:r,index:e})=>{console.log("load",e),await b(5e3),a(o=>o+50),e>=5&&r()},children:Array(t).fill(0).map((r,e)=>n.jsxs(c,{children:[n.jsx(x,{children:n.jsx(l,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(u,{children:n.jsx(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...L.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(50);
  const resetRef = useRef<() => void>(noop);
  return <>
      <VStack ref={rootRef} borderWidth="1px" maxH="xl" overflowY="auto" p="lg" rounded="l3">
        <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} resetRef={resetRef} rootRef={rootRef} onLoad={({
        finish,
        index
      }) => {
        console.log("load", index);
        setCount(prev => prev + 50);
        if (index >= 5) finish();
      }}>
          {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
                <Card.Header>
                  <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
                </Card.Header>

                <Card.Body>
                  <Text>
                    『ドラゴンボール』（DRAGON
                    BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                  </Text>
                </Card.Body>
              </Card.Root>)}
        </InfiniteScrollArea>
      </VStack>

      <Button onClick={() => {
      setCount(50);
      resetRef.current();
    }}>
        Reset
      </Button>
    </>;
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} rootMargin="300px 0px 0px 0px" onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} threshold={1} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(0);
  return <InfiniteScrollArea initialLoad loading={<Loading.Oval fontSize="2xl" />} onLoad={async ({
    finish,
    index
  }) => {
    console.log("load", index);
    await wait(1000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea borderWidth="1px" loading={<Loading.Oval fontSize="2xl" />} maxH="xl" overflowY="auto" p="lg" rounded="l3" onLoad={({
    finish,
    index
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea borderWidth="1px" loading={<Loading.Oval fontSize="2xl" />} orientation="horizontal" overflowX="auto" p="lg" rounded="l3" onLoad={({
    finish,
    index
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index} minW="lg">
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} startIndex={3} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea finish={<>Finished</>} loading={<Loading.Oval fontSize="2xl" />} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...B.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} reverse onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea borderWidth="1px" disabled={disabled} loading={<Loading.Oval fontSize="2xl" />} maxH="xl" overflowY="auto" p="lg" rounded="l3" onLoad={({
      finish,
      index
    }) => {
      console.log("load", index);
      setCount(prev => prev + 50);
      if (index >= 5) finish();
    }}>
        {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
              <Card.Header>
                <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
              </Card.Header>

              <Card.Body>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </Card.Body>
            </Card.Root>)}
      </InfiniteScrollArea>

      <Button colorScheme={disabled ? "success" : "danger"} onClick={() => setDisabled(prev => !prev)}>
        {disabled ? "Enable" : "Disabled"}
      </Button>
    </>;
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const resetRef = useRef<() => void>(noop);
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea borderWidth="1px" loading={<Loading.Oval fontSize="2xl" />} maxH="xl" overflowY="auto" p="lg" resetRef={resetRef} rounded="l3" onLoad={({
      finish,
      index
    }) => {
      console.log("load", index);
      setCount(prev => prev + 50);
      if (index >= 5) finish();
    }}>
        {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
              <Card.Header>
                <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
              </Card.Header>

              <Card.Body>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </Card.Body>
            </Card.Root>)}
      </InfiniteScrollArea>

      <Button onClick={() => {
      setCount(50);
      resetRef.current();
    }}>
        Reset
      </Button>
    </>;
}`,...H.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading.Oval fontSize="2xl" />} triggerProps={{
    bg: "primary.50",
    p: "md",
    rounded: "md"
  }} onLoad={async ({
    finish,
    index
  }) => {
    console.log("load", index);
    await wait(5000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<>Loading…</>} onLoad={async ({
    finish,
    index
  }) => {
    console.log("load", index);
    await wait(5000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card.Root key={index}>
            <Card.Header>
              <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
            </Card.Header>

            <Card.Body>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </Card.Body>
          </Card.Root>)}
    </InfiniteScrollArea>;
}`,...D.parameters?.docs?.source}}};const Cn=["Basic","Root","RootMargin","Threshold","InitialLoad","Overflow","Orientation","StartIndex","Finish","Reverse","Disabled","Reset","CustomTrigger","CustomLoading"];export{L as Basic,D as CustomLoading,v as CustomTrigger,O as Disabled,B as Finish,C as InitialLoad,S as Orientation,R as Overflow,H as Reset,y as Reverse,h as Root,m as RootMargin,j as StartIndex,g as Threshold,Cn as __namedExportsOrder,gn as default};
