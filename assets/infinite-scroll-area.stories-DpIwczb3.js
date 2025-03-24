import{j as n}from"./jsx-runtime-BpbtHYHY.js";import{r as t}from"./index-BwPxMuoB.js";import{u as Qn}from"./index-C1_3V0dH.js";import{f as bn}from"./forward-ref-Ukjd1cIW.js";import{a as Un}from"./use-component-style-65RA3nVD.js";import{o as Vn}from"./theme-provider-DGyR61Aa.js";import{B as Zn,b as _n,c as wn,a as $n,I as Tn}from"./factory-B_KMcXyW.js";import{L as m}from"./loading-C3oE1vJx.js";import{C as ne}from"./container-Bm1mMSgp.js";import{C as d,a as l,b as c}from"./card-CTcOJUYg.js";import{H as u}from"./heading-CwZHFVcE.js";import{T as x}from"./text-clsxocLN.js";import{B as b}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";const[ee,re]=Zn({name:"InfiniteScrollAreaContext",errorMessage:`useInfiniteScrollAreaContext returned is 'undefined'. Seems you forgot to wrap the components in "<InfiniteScrollArea />"`}),s=bn(({orientation:i="vertical",...a},r)=>{const[e,o]=Un("InfiniteScrollArea",{orientation:i,...a}),{className:f,children:p,isDisabled:_,disabled:w=_,finish:z,indexRef:Wn,initialLoad:Fn,isReverse:T,loading:k,orientation:W,resetRef:Mn,reverse:G=T,rootMargin:Pn,rootRef:Yn,startIndex:En,threshold:Xn,triggerProps:F,onLoad:qn,...Jn}=Vn(o),M=W==="vertical",P=t.useRef(null),{ref:Y,finish:I}=Qn({disabled:w,indexRef:Wn,initialLoad:Fn,isDisabled:_,isReverse:T,orientation:W,resetRef:Mn,reverse:G,rootMargin:Pn,rootRef:Yn??P,startIndex:En,threshold:Xn,onLoad:qn}),Kn=t.useMemo(()=>({display:"flex",flexDirection:M?"column":"row",gap:"1rem",w:"100%",...e.container}),[M,e]),E=!w&&(!!z||!I);return n.jsx(ee,{value:e,children:n.jsxs(_n.div,{ref:$n(P,r),className:wn("ui-infinite-scroll-area",f),"aria-busy":"false",role:"feed",__css:Kn,...Jn,children:[G&&E?n.jsx(v,{ref:Y,...F,children:I?z:k}):null,p,!G&&E?n.jsx(v,{ref:Y,...F,children:I?z:k}):null]})})});s.displayName="InfiniteScrollArea";s.__ui__="InfiniteScrollArea";const v=bn(({className:i,...a},r)=>{const e=re(),o=t.useMemo(()=>({alignItems:"center",display:"flex",flex:1,justifyContent:"center",w:"100%",...e.trigger}),[e]);return n.jsx(_n.div,{ref:r,className:wn("ui-infinite-scroll-area__trigger",i),__css:o,...a})});v.displayName="InfiniteScrollTrigger";v.__ui__="InfiniteScrollTrigger";const Be={component:s,title:"Components / Data Display / InfiniteScrollArea"},kn=async i=>new Promise(a=>{setTimeout(a,i)}),h=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},A=()=>{const i=t.useRef(null),[a,r]=t.useState(50),e=t.useRef(Tn);return n.jsxs(n.Fragment,{children:[n.jsx(ne,{ref:i,borderWidth:"1px",maxH:"xl",overflowY:"auto",p:"md",rounded:"md",children:n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),resetRef:e,rootRef:i,onLoad:({finish:o,index:f})=>{console.log("load",f),r(p=>p+50),f>=5&&o()},children:Array(a).fill(0).map((o,f)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},f))})}),n.jsx(b,{onClick:()=>e.current(),children:"Reset"})]})},L=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),rootMargin:"300px 0px 0px 0px",onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},g=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),threshold:1,onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},C=()=>{const[i,a]=t.useState(0);return n.jsx(s,{initialLoad:!0,loading:n.jsx(m,{fontSize:"2xl"}),onLoad:async({finish:r,index:e})=>{console.log("load",e),await kn(1e3),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},S=()=>{const[i,a]=t.useState(50);return n.jsx(s,{borderWidth:"1px",loading:n.jsx(m,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",rounded:"md",onLoad:({finish:r,index:e})=>{a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},j=()=>{const[i,a]=t.useState(50);return n.jsx(s,{borderWidth:"1px",loading:n.jsx(m,{fontSize:"2xl"}),orientation:"horizontal",overflowX:"auto",p:"md",rounded:"md",onLoad:({finish:r,index:e})=>{a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},R=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),startIndex:3,onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},B=()=>{const[i,a]=t.useState(50);return n.jsx(s,{finish:n.jsx(n.Fragment,{children:"Finished"}),loading:n.jsx(m,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},y=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),reverse:!0,onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},H=()=>{const[i,a]=t.useState(!1),[r,e]=t.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(s,{borderWidth:"1px",disabled:i,loading:n.jsx(m,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",rounded:"md",onLoad:({finish:o,index:f})=>{console.log("load",f),e(p=>p+50),f>=5&&o()},children:Array(r).fill(0).map((o,f)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},f))}),n.jsx(b,{colorScheme:i?"success":"danger",onClick:()=>a(o=>!o),children:i?"Enable":"Disabled"})]})},D=()=>{const i=t.useRef(Tn),[a,r]=t.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(s,{borderWidth:"1px",loading:n.jsx(m,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",resetRef:i,rounded:"md",onLoad:({finish:e,index:o})=>{console.log("load",o),r(f=>f+50),o>=5&&e()},children:Array(a).fill(0).map((e,o)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),n.jsx(b,{onClick:()=>i.current(),children:"Reset"})]})},N=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(m,{fontSize:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},onLoad:async({finish:r,index:e})=>{console.log("load",e),await kn(5e3),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},O=()=>{const[i,a]=t.useState(50);return n.jsx(s,{loading:n.jsx(n.Fragment,{children:"Loading…"}),onLoad:({finish:r,index:e})=>{console.log("load",e),a(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})};var X,q,J;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading fontSize="2xl" />} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(50);
  const resetRef = useRef<() => void>(noop);
  return <>
      <Container ref={rootRef} borderWidth="1px" maxH="xl" overflowY="auto" p="md" rounded="md">
        <InfiniteScrollArea loading={<Loading fontSize="2xl" />} resetRef={resetRef} rootRef={rootRef} onLoad={({
        finish,
        index
      }) => {
        console.log("load", index);
        setCount(prev => prev + 50);
        if (index >= 5) finish();
      }}>
          {Array(count).fill(0).map((_, index) => <Card key={index}>
                <CardHeader>
                  <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
                </CardHeader>

                <CardBody>
                  <Text>
                    『ドラゴンボール』（DRAGON
                    BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                  </Text>
                </CardBody>
              </Card>)}
        </InfiniteScrollArea>
      </Container>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>;
}`,...(U=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,Z,$;L.parameters={...L.parameters,docs:{...(V=L.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading fontSize="2xl" />} rootMargin="300px 0px 0px 0px" onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...($=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,rn;g.parameters={...g.parameters,docs:{...(nn=g.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading fontSize="2xl" />} threshold={1} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(rn=(en=g.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var on,an,tn;C.parameters={...C.parameters,docs:{...(on=C.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(0);
  return <InfiniteScrollArea initialLoad loading={<Loading fontSize="2xl" />} onLoad={async ({
    finish,
    index
  }) => {
    console.log("load", index);
    await wait(1000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(tn=(an=C.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var sn,dn,ln;S.parameters={...S.parameters,docs:{...(sn=S.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea borderWidth="1px" loading={<Loading fontSize="2xl" />} maxH="xl" overflowY="auto" p="md" rounded="md" onLoad={({
    finish,
    index
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index} minW="lg">
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(ln=(dn=S.parameters)==null?void 0:dn.docs)==null?void 0:ln.source}}};var cn,un,xn;j.parameters={...j.parameters,docs:{...(cn=j.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea borderWidth="1px" loading={<Loading fontSize="2xl" />} orientation="horizontal" overflowX="auto" p="md" rounded="md" onLoad={({
    finish,
    index
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index} minW="lg">
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(xn=(un=j.parameters)==null?void 0:un.docs)==null?void 0:xn.source}}};var fn,mn,pn;R.parameters={...R.parameters,docs:{...(fn=R.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading fontSize="2xl" />} startIndex={3} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(pn=(mn=R.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var hn,An,Ln;B.parameters={...B.parameters,docs:{...(hn=B.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea finish={<>Finished</>} loading={<Loading fontSize="2xl" />} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(Ln=(An=B.parameters)==null?void 0:An.docs)==null?void 0:Ln.source}}};var gn,Cn,Sn;y.parameters={...y.parameters,docs:{...(gn=y.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading fontSize="2xl" />} reverse onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(Sn=(Cn=y.parameters)==null?void 0:Cn.docs)==null?void 0:Sn.source}}};var jn,Rn,Bn;H.parameters={...H.parameters,docs:{...(jn=H.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea borderWidth="1px" disabled={disabled} loading={<Loading fontSize="2xl" />} maxH="xl" overflowY="auto" p="md" rounded="md" onLoad={({
      finish,
      index
    }) => {
      console.log("load", index);
      setCount(prev => prev + 50);
      if (index >= 5) finish();
    }}>
        {Array(count).fill(0).map((_, index) => <Card key={index}>
              <CardHeader>
                <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
              </CardHeader>

              <CardBody>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </CardBody>
            </Card>)}
      </InfiniteScrollArea>

      <Button colorScheme={disabled ? "success" : "danger"} onClick={() => setDisabled(prev => !prev)}>
        {disabled ? "Enable" : "Disabled"}
      </Button>
    </>;
}`,...(Bn=(Rn=H.parameters)==null?void 0:Rn.docs)==null?void 0:Bn.source}}};var yn,Hn,Dn;D.parameters={...D.parameters,docs:{...(yn=D.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  const resetRef = useRef<() => void>(noop);
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea borderWidth="1px" loading={<Loading fontSize="2xl" />} maxH="xl" overflowY="auto" p="md" resetRef={resetRef} rounded="md" onLoad={({
      finish,
      index
    }) => {
      console.log("load", index);
      setCount(prev => prev + 50);
      if (index >= 5) finish();
    }}>
        {Array(count).fill(0).map((_, index) => <Card key={index}>
              <CardHeader>
                <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
              </CardHeader>

              <CardBody>
                <Text>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </CardBody>
            </Card>)}
      </InfiniteScrollArea>

      <Button onClick={() => resetRef.current()}>Reset</Button>
    </>;
}`,...(Dn=(Hn=D.parameters)==null?void 0:Hn.docs)==null?void 0:Dn.source}}};var Nn,On,vn;N.parameters={...N.parameters,docs:{...(Nn=N.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<Loading fontSize="2xl" />} triggerProps={{
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
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(vn=(On=N.parameters)==null?void 0:On.docs)==null?void 0:vn.source}}};var zn,Gn,In;O.parameters={...O.parameters,docs:{...(zn=O.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea loading={<>Loading…</>} onLoad={({
    finish,
    index
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }}>
      {Array(count).fill(0).map((_, index) => <Card key={index}>
            <CardHeader>
              <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>
            </CardHeader>

            <CardBody>
              <Text>
                『ドラゴンボール』（DRAGON
                BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
              </Text>
            </CardBody>
          </Card>)}
    </InfiniteScrollArea>;
}`,...(In=(Gn=O.parameters)==null?void 0:Gn.docs)==null?void 0:In.source}}};const ye=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","reverse","disabled","useReset","customTrigger","customLoading"];export{ye as __namedExportsOrder,h as basic,O as customLoading,N as customTrigger,Be as default,H as disabled,y as reverse,D as useReset,B as withFinish,C as withInitialLoad,j as withOrientation,S as withOverflow,A as withRoot,L as withRootMargin,R as withStartIndex,g as withThreshold};
