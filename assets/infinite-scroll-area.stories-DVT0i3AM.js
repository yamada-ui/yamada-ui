import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{u as qn}from"./index-BNfp6L9C.js";import{p as Jn,b as Gn,a as Kn,c as In,B as bn}from"./factory-CehSyZ2b.js";import{f as _n}from"./forward-ref-D13m8o2p.js";import{a as Qn}from"./use-component-style-PhZ538dD.js";import{o as Un}from"./theme-provider-BOnS9RWG.js";import{L as f}from"./loading-J7FyZR17.js";import{C as d,a as l,b as c}from"./card-D9Y_Bh_Y.js";import{H as u}from"./heading-IeSrr5lO.js";import{T as x}from"./text-DxpipBZv.js";import{C as Zn}from"./container-DGdSg1TX.js";import{B as b}from"./button-CN2eQqjg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-Tcjn8UpA.js";import"./use-var-C7Dt5UAR.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";const[$n,ne]=Jn({name:"InfiniteScrollAreaContext",errorMessage:`useInfiniteScrollAreaContext returned is 'undefined'. Seems you forgot to wrap the components in "<InfiniteScrollArea />"`}),a=_n(({orientation:i="vertical",...s},r)=>{const[e,o]=Qn("InfiniteScrollArea",{orientation:i,...s}),{className:m,children:p,finish:z,indexRef:Tn,initialLoad:kn,isDisabled:_,isReverse:G,loading:w,orientation:T,resetRef:Wn,rootMargin:Fn,rootRef:Mn,startIndex:Pn,threshold:Yn,triggerProps:k,onLoad:En,...Xn}=Un(o),W=T==="vertical",F=t.useRef(null),{ref:M,isFinish:I}=qn({indexRef:Tn,initialLoad:kn,isDisabled:_,isReverse:G,orientation:T,resetRef:Wn,rootMargin:Fn,rootRef:Mn??F,startIndex:Pn,threshold:Yn,onLoad:En}),Vn=t.useMemo(()=>({display:"flex",flexDirection:W?"column":"row",gap:"1rem",w:"100%",...e.container}),[W,e]),P=!_&&(!!z||!I);return n.jsx($n,{value:e,children:n.jsxs(Gn.div,{ref:Kn(F,r),className:In("ui-infinite-scroll-area",m),"aria-busy":"false",role:"feed",__css:Vn,...Xn,children:[G&&P?n.jsx(v,{ref:M,...k,children:I?z:w}):null,p,!G&&P?n.jsx(v,{ref:M,...k,children:I?z:w}):null]})})});a.displayName="InfiniteScrollArea";a.__ui__="InfiniteScrollArea";const v=_n(({className:i,...s},r)=>{const e=ne(),o=t.useMemo(()=>({alignItems:"center",display:"flex",flex:1,justifyContent:"center",w:"100%",...e.trigger}),[e]);return n.jsx(Gn.div,{ref:r,className:In("ui-infinite-scroll-area__trigger",i),__css:o,...s})});v.displayName="InfiniteScrollTrigger";v.__ui__="InfiniteScrollTrigger";const je={component:a,title:"Components / Data Display / InfiniteScrollArea"},wn=async i=>new Promise(s=>{setTimeout(s,i)}),h=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},A=()=>{const i=t.useRef(null),[s,r]=t.useState(50),e=t.useRef(bn);return n.jsxs(n.Fragment,{children:[n.jsx(Zn,{ref:i,borderWidth:"1px",maxH:"xl",overflowY:"auto",p:"md",rounded:"md",children:n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),resetRef:e,rootRef:i,onLoad:({finish:o,index:m})=>{console.log("load",m),r(p=>p+50),m>=5&&o()},children:Array(s).fill(0).map((o,m)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},m))})}),n.jsx(b,{onClick:()=>e.current(),children:"Reset"})]})},L=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),rootMargin:"300px 0px 0px 0px",onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},g=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),threshold:1,onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},C=()=>{const[i,s]=t.useState(0);return n.jsx(a,{initialLoad:!0,loading:n.jsx(f,{fontSize:"2xl"}),onLoad:async({finish:r,index:e})=>{console.log("load",e),await wn(1e3),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},S=()=>{const[i,s]=t.useState(50);return n.jsx(a,{borderWidth:"1px",loading:n.jsx(f,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",rounded:"md",onLoad:({finish:r,index:e})=>{s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},j=()=>{const[i,s]=t.useState(50);return n.jsx(a,{borderWidth:"1px",loading:n.jsx(f,{fontSize:"2xl"}),orientation:"horizontal",overflowX:"auto",p:"md",rounded:"md",onLoad:({finish:r,index:e})=>{s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{minW:"lg",children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},R=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),startIndex:3,onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},B=()=>{const[i,s]=t.useState(50);return n.jsx(a,{finish:n.jsx(n.Fragment,{children:"Finished"}),loading:n.jsx(f,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},y=()=>{const[i,s]=t.useState(50);return n.jsx(a,{isReverse:!0,loading:n.jsx(f,{fontSize:"2xl"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},D=()=>{const[i,s]=t.useState(!1),[r,e]=t.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(a,{borderWidth:"1px",isDisabled:i,loading:n.jsx(f,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",rounded:"md",onLoad:({finish:o,index:m})=>{console.log("load",m),e(p=>p+50),m>=5&&o()},children:Array(r).fill(0).map((o,m)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},m))}),n.jsx(b,{colorScheme:i?"success":"danger",onClick:()=>s(o=>!o),children:i?"Enable":"Disabled"})]})},H=()=>{const i=t.useRef(bn),[s,r]=t.useState(50);return n.jsxs(n.Fragment,{children:[n.jsx(a,{borderWidth:"1px",loading:n.jsx(f,{fontSize:"2xl"}),maxH:"xl",overflowY:"auto",p:"md",resetRef:i,rounded:"md",onLoad:({finish:e,index:o})=>{console.log("load",o),r(m=>m+50),o>=5&&e()},children:Array(s).fill(0).map((e,o)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),n.jsx(b,{onClick:()=>i.current(),children:"Reset"})]})},N=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(f,{fontSize:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},onLoad:async({finish:r,index:e})=>{console.log("load",e),await wn(5e3),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})},O=()=>{const[i,s]=t.useState(50);return n.jsx(a,{loading:n.jsx(n.Fragment,{children:"Loading…"}),onLoad:({finish:r,index:e})=>{console.log("load",e),s(o=>o+50),e>=5&&r()},children:Array(i).fill(0).map((r,e)=>n.jsxs(d,{children:[n.jsx(l,{children:n.jsx(u,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),n.jsx(c,{children:n.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},e))})};var Y,E,X;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(X=(E=h.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var V,q,J;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(J=(q=A.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(U=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,$,nn;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(on=(rn=C.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var sn,tn,an;S.parameters={...S.parameters,docs:{...(sn=S.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(an=(tn=S.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var dn,ln,cn;j.parameters={...j.parameters,docs:{...(dn=j.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(cn=(ln=j.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var un,xn,mn;R.parameters={...R.parameters,docs:{...(un=R.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(gn=(Ln=y.parameters)==null?void 0:Ln.docs)==null?void 0:gn.source}}};var Cn,Sn,jn;D.parameters={...D.parameters,docs:{...(Cn=D.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(jn=(Sn=D.parameters)==null?void 0:Sn.docs)==null?void 0:jn.source}}};var Rn,Bn,yn;H.parameters={...H.parameters,docs:{...(Rn=H.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(yn=(Bn=H.parameters)==null?void 0:Bn.docs)==null?void 0:yn.source}}};var Dn,Hn,Nn;N.parameters={...N.parameters,docs:{...(Dn=N.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(Hn=N.parameters)==null?void 0:Hn.docs)==null?void 0:Nn.source}}};var On,vn,zn;O.parameters={...O.parameters,docs:{...(On=O.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(zn=(vn=O.parameters)==null?void 0:vn.docs)==null?void 0:zn.source}}};const Re=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","isReverse","isDisabled","useReset","customTrigger","customLoading"];export{Re as __namedExportsOrder,h as basic,O as customLoading,N as customTrigger,je as default,D as isDisabled,y as isReverse,H as useReset,B as withFinish,C as withInitialLoad,j as withOrientation,S as withOverflow,A as withRoot,L as withRootMargin,R as withStartIndex,g as withThreshold};
