import{j as n}from"./extends-CwFRzn3r.js";import{r as t}from"./index-BwDkhjyp.js";import{u as Vn}from"./index-ClJ-WpD3.js";import{o as qn,b as Gn,a as Jn,c as bn,U as In}from"./factory-BPGpAF5Z.js";import{f as wn}from"./forward-ref-BWI-Phbn.js";import{a as Kn}from"./use-component-style-vGTU0kmU.js";import{o as Qn}from"./theme-provider-HQUvgn6k.js";import{L as f}from"./loading-BJMWU62O.js";import{C as d,a as l,b as c}from"./card-Dson2cEI.js";import{H as u}from"./heading-DLmWecw7.js";import{T as x}from"./text-Cf22NS09.js";import{C as Zn}from"./container-DaevyRvq.js";import{B as b}from"./button-9256ovQJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BYVaiKtb.js";import"./use-var-CHlP19MT.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";const[$n,ne]=qn({name:"InfiniteScrollAreaContext",errorMessage:`useInfiniteScrollAreaContext returned is 'undefined'. Seems you forgot to wrap the components in "<InfiniteScrollArea />"`}),a=wn(({orientation:i="vertical",...s},r)=>{const[e,o]=Kn("InfiniteScrollArea",{orientation:i,...s}),{className:m,children:p,finish:v,indexRef:_n,initialLoad:kn,isDisabled:I,isReverse:z,loading:w,orientation:T,resetRef:Wn,rootMargin:Fn,rootRef:Mn,startIndex:Pn,threshold:Yn,triggerProps:_,onLoad:En,...Xn}=Qn(o),k=T==="vertical",W=t.useRef(null),{ref:F,isFinish:G}=Vn({indexRef:_n,initialLoad:kn,isDisabled:I,isReverse:z,orientation:T,resetRef:Wn,rootMargin:Fn,rootRef:Mn??W,startIndex:Pn,threshold:Yn,onLoad:En}),Un=t.useMemo(()=>({display:"flex",flexDirection:k?"column":"row",gap:"1rem",w:"100%",...e.container}),[k,e]),M=!I&&(!!v||!G);return n.jsx($n,{value:e,children:n.jsxs(Gn.div,{ref:Jn(W,r),className:bn("ui-infinite-scroll-area",m),"aria-busy":"false",role:"feed",__css:Un,...Xn,children:[z&&M?n.jsx(P,{ref:F,..._,children:G?v:w}):null,p,!z&&M?n.jsx(P,{ref:F,..._,children:G?v:w}):null]})})}),P=wn(({className:i,...s},r)=>{const e=ne(),o=t.useMemo(()=>({alignItems:"center",display:"flex",flex:1,justifyContent:"center",w:"100%",...e.trigger}),[e]);return n.jsx(Gn.div,{ref:r,className:bn("ui-infinite-scroll-area__trigger",i),__css:o,...s})}),je={component:a,title:"Components / Data Display / InfiniteScrollArea"},Tn=async i=>new Promise(s=>{setTimeout(s,i)}),h=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},A=()=>{const i=t.useRef(null),[s,r]=t.useState(50),e=t.useRef(In);return n.jsxs(n.Fragment,{children:[n.jsx(Zn,{ref:i,borderWidth:"1px",maxH:"xl",overflowY:"auto",p:"md",rounded:"md",children:n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),resetRef:e,rootRef:i,onLoad:({finish:o,index:m})=>{console.log("load",m),r(p=>p+50),m>=5&&o()},children:Array(s).fill(0).map((o,m)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},m))})}),n.jsx(b,{onClick:()=>e.current(),children:"Reset"})]})},L=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),rootMargin:"300px 0px 0px 0px",onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},g=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),threshold:1,onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},C=()=>{const[i,s]=t.useState(0);return n.jsx(a,{initialLoad:!0,loading:n.jsx(f,{fontSize:"2xl"}),onLoad:async({finish:r,index:e})=>{console.log("load",e),await Tn(1e3),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},j=()=>{const[i,s]=t.useState(50);return n.jsx(a,{borderWidth:"1px",loading:n.jsx(f,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",rounded:"md",onLoad:({finish:r,index:e})=>{s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},S=()=>{const[i,s]=t.useState(50);return n.jsx(a,{borderWidth:"1px",loading:n.jsx(f,{fontSize:"2xl"}),orientation:"horizontal",overflowX:"auto",p:"md",rounded:"md",onLoad:({finish:r,index:e})=>{s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},R=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),startIndex:3,onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},B=()=>{const[i,s]=t.useState(50);return n.jsx(a,{finish:n.jsx(n.Fragment,{children:"Finished"}),loading:n.jsx(f,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},y=()=>{const[i,s]=t.useState(50);return n.jsx(a,{isReverse:!0,loading:n.jsx(f,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},D=()=>{const[i,s]=t.useState(!1),[r,e]=t.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(a,{borderWidth:"1px",isDisabled:i,loading:n.jsx(f,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",rounded:"md",onLoad:({finish:o,index:m})=>{console.log("load",m),e(p=>p+50),m>=5&&o()},children:Array(r).fill(0).map((o,m)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},m))}),n.jsx(b,{colorScheme:i?"success":"danger",onClick:()=>s(o=>!o),children:i?"Enable":"Disabled"})]})},H=()=>{const i=t.useRef(In),[s,r]=t.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(a,{borderWidth:"1px",loading:n.jsx(f,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",resetRef:i,rounded:"md",onLoad:({finish:e,index:o})=>{console.log("load",o),r(m=>m+50),o>=5&&e()},children:Array(s).fill(0).map((e,o)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),n.jsx(b,{onClick:()=>i.current(),children:"Reset"})]})},O=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},onLoad:async({finish:r,index:e})=>{console.log("load",e),await Tn(5e3),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},N=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(n.Fragment,{children:"Loading…"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})};var Y,E,X;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(X=(E=h.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var U,V,q;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(q=(V=A.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,K,Q;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(Q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,nn;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(nn=($=g.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};var en,rn,on;C.parameters={...C.parameters,docs:{...(en=C.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(on=(rn=C.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var sn,tn,an;j.parameters={...j.parameters,docs:{...(sn=j.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(an=(tn=j.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var dn,ln,cn;S.parameters={...S.parameters,docs:{...(dn=S.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(cn=(ln=S.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var un,xn,mn;R.parameters={...R.parameters,docs:{...(un=R.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(mn=(xn=R.parameters)==null?void 0:xn.docs)==null?void 0:mn.source}}};var fn,pn,hn;B.parameters={...B.parameters,docs:{...(fn=B.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(hn=(pn=B.parameters)==null?void 0:pn.docs)==null?void 0:hn.source}}};var An,Ln,gn;y.parameters={...y.parameters,docs:{...(An=y.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea isReverse loading={<Loading fontSize="2xl" />} onLoad={({
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
}`,...(gn=(Ln=y.parameters)==null?void 0:Ln.docs)==null?void 0:gn.source}}};var Cn,jn,Sn;D.parameters={...D.parameters,docs:{...(Cn=D.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea borderWidth="1px" isDisabled={isDisabled} loading={<Loading fontSize="2xl" />} maxH="xl" overflowY="auto" p="md" rounded="md" onLoad={({
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

      <Button colorScheme={isDisabled ? "success" : "danger"} onClick={() => setIsDisabled(prev => !prev)}>
        {isDisabled ? "Enable" : "Disabled"}
      </Button>
    </>;
}`,...(Sn=(jn=D.parameters)==null?void 0:jn.docs)==null?void 0:Sn.source}}};var Rn,Bn,yn;H.parameters={...H.parameters,docs:{...(Rn=H.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(yn=(Bn=H.parameters)==null?void 0:Bn.docs)==null?void 0:yn.source}}};var Dn,Hn,On;O.parameters={...O.parameters,docs:{...(Dn=O.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(On=(Hn=O.parameters)==null?void 0:Hn.docs)==null?void 0:On.source}}};var Nn,vn,zn;N.parameters={...N.parameters,docs:{...(Nn=N.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(zn=(vn=N.parameters)==null?void 0:vn.docs)==null?void 0:zn.source}}};const Se=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","isReverse","isDisabled","useReset","customTrigger","customLoading"];export{Se as __namedExportsOrder,h as basic,N as customLoading,O as customTrigger,je as default,D as isDisabled,y as isReverse,H as useReset,B as withFinish,C as withInitialLoad,S as withOrientation,j as withOverflow,A as withRoot,L as withRootMargin,R as withStartIndex,g as withThreshold};
