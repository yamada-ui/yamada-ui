import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{u as Vn}from"./index-DK-jqgGn.js";import{l as qn,b as zn,a as Jn,c as Gn}from"./factory-R2Y4PRbz.js";import{f as bn}from"./forward-ref-BmTAT9U5.js";import{a as Kn}from"./use-component-style-DhC_P_n8.js";import{o as Qn}from"./theme-provider-DgHPuWDh.js";import{L as m}from"./loading-CS9bmOQf.js";import{C as d,a as l,b as c}from"./card-CsCFasvm.js";import{H as x}from"./heading-DaFF3ZKG.js";import{T as u}from"./text-B1bw_vjj.js";import{C as Un}from"./container-Sid-IIgR.js";import{B as b}from"./button-DkZfvcgr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./icon-Cag4izmS.js";import"./index-8JqQBj0s.js";import"./use-ripple-07NCTLKG.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-Dpi5adfX.js";const[Zn,$n]=qn({name:"InfiniteScrollAreaContext",errorMessage:`useInfiniteScrollAreaContext returned is 'undefined'. Seems you forgot to wrap the components in "<InfiniteScrollArea />"`}),t=bn(({orientation:i="vertical",...s},r)=>{const[e,o]=Kn("InfiniteScrollArea",{orientation:i,...s}),{rootRef:f,orientation:p,rootMargin:wn,threshold:Tn,startIndex:_n,onLoad:kn,resetRef:Wn,indexRef:Fn,className:Mn,children:Pn,triggerProps:I,loading:w,finish:v,isDisabled:T,isReverse:z,initialLoad:Yn,...En}=Qn(o),_=p==="vertical",k=a.useRef(null),{ref:W,isFinish:G}=Vn({orientation:p,rootRef:f??k,rootMargin:wn,threshold:Tn,startIndex:_n,onLoad:kn,resetRef:Wn,indexRef:Fn,isDisabled:T,isReverse:z,initialLoad:Yn}),Xn=a.useMemo(()=>({w:"100%",display:"flex",flexDirection:_?"column":"row",gap:"1rem",...e.container}),[_,e]),F=!T&&(!!v||!G);return n.jsx(Zn,{value:e,children:n.jsxs(zn.div,{ref:Jn(k,r),tabIndex:0,className:Gn("ui-infinite-scroll-area",Mn),role:"feed","aria-busy":"false",__css:Xn,...En,children:[z&&F?n.jsx(M,{ref:W,...I,children:G?v:w}):null,Pn,!z&&F?n.jsx(M,{ref:W,...I,children:G?v:w}):null]})})}),M=bn(({className:i,...s},r)=>{const e=$n(),o=a.useMemo(()=>({w:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center",...e.trigger}),[e]);return n.jsx(zn.div,{ref:r,className:Gn("ui-infinite-scroll-area__trigger",i),__css:o,...s})}),Se={title:"Components / Data Display / InfiniteScrollArea",component:t},In=i=>new Promise(s=>{setTimeout(s,i)}),h=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},A=()=>{const i=a.useRef(null),[s,r]=a.useState(50),e=a.useRef(()=>{});return n.jsxs(n.Fragment,{children:[n.jsx(Un,{ref:i,maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",children:n.jsx(t,{rootRef:i,resetRef:e,onLoad:async({index:o,finish:f})=>{console.log("load",o),r(p=>p+50),o>=5&&f()},loading:n.jsx(m,{fontSize:"2xl"}),children:Array(s).fill(0).map((o,f)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},f))})}),n.jsx(b,{onClick:()=>e.current(),children:"Reset"})]})},L=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),rootMargin:"300px 0px 0px 0px",children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},g=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),threshold:1,children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},C=()=>{const[i,s]=a.useState(0);return n.jsx(t,{initialLoad:!0,onLoad:async({index:r,finish:e})=>{console.log("load",r),await In(1e3),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},j=()=>{const[i,s]=a.useState(50);return n.jsx(t,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:r,finish:e})=>{s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},S=()=>{const[i,s]=a.useState(50);return n.jsx(t,{orientation:"horizontal",borderWidth:"1px",rounded:"md",p:"md",overflowX:"auto",onLoad:async({index:r,finish:e})=>{s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},y=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),startIndex:3,children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},R=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),finish:n.jsx(n.Fragment,{children:"Finished"}),children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},B=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),isReverse:!0,children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},D=()=>{const[i,s]=a.useState(!1),[r,e]=a.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(t,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:o,finish:f})=>{console.log("load",o),e(p=>p+50),o>=5&&f()},loading:n.jsx(m,{fontSize:"2xl"}),isDisabled:i,children:Array(r).fill(0).map((o,f)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},f))}),n.jsx(b,{colorScheme:i?"success":"danger",onClick:()=>s(o=>!o),children:i?"Enable":"Disabled"})]})},H=()=>{const i=a.useRef(()=>{}),[s,r]=a.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(t,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:e,finish:o})=>{console.log("load",e),r(f=>f+50),e>=5&&o()},loading:n.jsx(m,{fontSize:"2xl"}),resetRef:i,children:Array(s).fill(0).map((e,o)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),n.jsx(b,{onClick:()=>i.current(),children:"Reset"})]})},O=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),await In(5e3),s(o=>o+50),r>=5&&e()},loading:n.jsx(m,{fontSize:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},N=()=>{const[i,s]=a.useState(50);return n.jsx(t,{onLoad:async({index:r,finish:e})=>{console.log("load",r),s(o=>o+50),r>=5&&e()},loading:n.jsx(n.Fragment,{children:"Loading…"}),children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(x,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})};var P,Y,E;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />}>
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
}`,...(E=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var X,V,q;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(50);
  const resetRef = useRef<() => void>(() => {});
  return <>
      <Container ref={rootRef} maxH="xl" borderWidth="1px" rounded="md" p="md" overflowY="auto">
        <InfiniteScrollArea rootRef={rootRef} resetRef={resetRef} onLoad={async ({
        index,
        finish
      }) => {
        console.log("load", index);
        setCount(prev => prev + 50);
        if (index >= 5) finish();
      }} loading={<Loading fontSize="2xl" />}>
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
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />} rootMargin="300px 0px 0px 0px">
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
}`,...(Q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Z,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />} threshold={1}>
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
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,rn;C.parameters={...C.parameters,docs:{...(nn=C.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(0);
  return <InfiniteScrollArea initialLoad onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    await wait(1000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />}>
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
}`,...(rn=(en=C.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var on,sn,an;j.parameters={...j.parameters,docs:{...(on=j.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea maxH="xl" borderWidth="1px" rounded="md" p="md" overflowY="auto" onLoad={async ({
    index,
    finish
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />}>
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
}`,...(an=(sn=j.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var tn,dn,ln;S.parameters={...S.parameters,docs:{...(tn=S.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea orientation="horizontal" borderWidth="1px" rounded="md" p="md" overflowX="auto" onLoad={async ({
    index,
    finish
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />}>
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
}`,...(ln=(dn=S.parameters)==null?void 0:dn.docs)==null?void 0:ln.source}}};var cn,xn,un;y.parameters={...y.parameters,docs:{...(cn=y.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />} startIndex={3}>
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
}`,...(un=(xn=y.parameters)==null?void 0:xn.docs)==null?void 0:un.source}}};var mn,fn,pn;R.parameters={...R.parameters,docs:{...(mn=R.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />} finish={<>Finished</>}>
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
}`,...(pn=(fn=R.parameters)==null?void 0:fn.docs)==null?void 0:pn.source}}};var hn,An,Ln;B.parameters={...B.parameters,docs:{...(hn=B.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />} isReverse>
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
}`,...(Ln=(An=B.parameters)==null?void 0:An.docs)==null?void 0:Ln.source}}};var gn,Cn,jn;D.parameters={...D.parameters,docs:{...(gn=D.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea maxH="xl" borderWidth="1px" rounded="md" p="md" overflowY="auto" onLoad={async ({
      index,
      finish
    }) => {
      console.log("load", index);
      setCount(prev => prev + 50);
      if (index >= 5) finish();
    }} loading={<Loading fontSize="2xl" />} isDisabled={isDisabled}>
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
}`,...(jn=(Cn=D.parameters)==null?void 0:Cn.docs)==null?void 0:jn.source}}};var Sn,yn,Rn;H.parameters={...H.parameters,docs:{...(Sn=H.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  const resetRef = useRef<() => void>(() => {});
  const [count, setCount] = useState<number>(50);
  return <>
      <InfiniteScrollArea maxH="xl" borderWidth="1px" rounded="md" p="md" overflowY="auto" onLoad={async ({
      index,
      finish
    }) => {
      console.log("load", index);
      setCount(prev => prev + 50);
      if (index >= 5) finish();
    }} loading={<Loading fontSize="2xl" />} resetRef={resetRef}>
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
}`,...(Rn=(yn=H.parameters)==null?void 0:yn.docs)==null?void 0:Rn.source}}};var Bn,Dn,Hn;O.parameters={...O.parameters,docs:{...(Bn=O.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    await wait(5000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading fontSize="2xl" />} triggerProps={{
    bg: "primary.50",
    p: "md",
    rounded: "md"
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
}`,...(Hn=(Dn=O.parameters)==null?void 0:Dn.docs)==null?void 0:Hn.source}}};var On,Nn,vn;N.parameters={...N.parameters,docs:{...(On=N.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<>Loading…</>}>
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
}`,...(vn=(Nn=N.parameters)==null?void 0:Nn.docs)==null?void 0:vn.source}}};const ye=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","isReverse","isDisabled","useReset","customTrigger","customLoading"];export{ye as __namedExportsOrder,h as basic,N as customLoading,O as customTrigger,Se as default,D as isDisabled,B as isReverse,H as useReset,R as withFinish,C as withInitialLoad,S as withOrientation,j as withOverflow,A as withRoot,L as withRootMargin,y as withStartIndex,g as withThreshold};
