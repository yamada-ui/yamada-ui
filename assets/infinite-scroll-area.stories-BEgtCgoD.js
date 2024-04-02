import{j as u}from"./jsx-runtime-CKrituN3.js";import{r as i}from"./index-CBqU2yxZ.js";import{u as Wu}from"./index-D7qWvZAR.js";import{f as Ou}from"./forward-ref-DuAegr0M.js";import{u as Nu,a as Yu,c as zu}from"./factory-BVMa8fXZ.js";import{L as l}from"./loading-CvwcjMtk.js";import{C as a,a as d,b as t}from"./card-BBTtGndz.js";import{H as C}from"./heading-BZVIkRR2.js";import{T as B}from"./text-CocBWv30.js";import{C as Mu}from"./container-DB4x0OTp.js";import{B as G}from"./button-CwsZCG7O.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtoBQEmV.js";import"./theme-provider-BXaPRWNI.js";import"./index-sakSwYJY.js";import"./index-CXM4NpVI.js";import"./icon-BlEaeaZb.js";import"./use-component-style-DFx-AFMQ.js";import"./use-ripple-qFQz7cO6.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CvgaHKJY.js";const F=Ou(({rootRef:r,orientation:s="vertical",rootMargin:e,threshold:n,startIndex:o,onLoad:E,resetRef:c,indexRef:vu,className:bu,children:Iu,triggerProps:v,loading:b,finish:O,isDisabled:I,isReverse:N,initialLoad:wu,...Tu},_u)=>{const w=s==="vertical",T=i.useRef(null),{ref:_,isFinish:z}=Wu({orientation:s,rootRef:r??T,rootMargin:e,threshold:n,startIndex:o,onLoad:E,resetRef:c,indexRef:vu,isDisabled:I,isReverse:N,initialLoad:wu}),ku=i.useMemo(()=>({w:"100%",display:"flex",flexDirection:w?"column":"row",gap:"1rem"}),[w]),k=!I&&(!!O||!z);return u.jsxs(Nu.div,{ref:Yu(T,_u),className:zu("ui-infinite-scroll-area",bu),__css:ku,...Tu,children:[N&&k?u.jsx(W,{ref:_,...v,children:z?O:b}):null,Iu,!N&&k?u.jsx(W,{ref:_,...v,children:z?O:b}):null]})}),W=Ou(({className:r,...s},e)=>{const n=i.useMemo(()=>({w:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center"}),[]);return u.jsx(Nu.div,{ref:e,className:zu("ui-infinite-scroll-area__trigger",r),__css:n,...s})}),E0={title:"Components / Data Display / InfiniteScrollArea",component:F},Gu=r=>new Promise(s=>{setTimeout(s,r)}),D=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},x=()=>{const r=i.useRef(null),[s,e]=i.useState(50),n=i.useRef(()=>{});return u.jsxs(u.Fragment,{children:[u.jsx(Mu,{ref:r,maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",children:u.jsx(F,{rootRef:r,resetRef:n,onLoad:async({index:o,finish:E})=>{console.log("load",o),e(c=>c+50),o>=5&&E()},loading:u.jsx(l,{size:"2xl"}),children:Array(s).fill(0).map((o,E)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},E))})}),u.jsx(G,{onClick:()=>n.current(),children:"Reset"})]})},A=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),rootMargin:"300px 0px 0px 0px",children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},m=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),threshold:1,children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},f=()=>{const[r,s]=i.useState(0);return u.jsx(F,{initialLoad:!0,onLoad:async({index:e,finish:n})=>{console.log("load",e),await Gu(1e3),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},p=()=>{const[r,s]=i.useState(50);return u.jsx(F,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:e,finish:n})=>{s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{minW:"lg",children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},h=()=>{const[r,s]=i.useState(50);return u.jsx(F,{orientation:"horizontal",borderWidth:"1px",rounded:"md",p:"md",overflowX:"auto",onLoad:async({index:e,finish:n})=>{s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{minW:"lg",children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},L=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),startIndex:3,children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},g=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),finish:u.jsx(u.Fragment,{children:"Finished"}),children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},j=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),isReverse:!0,children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},y=()=>{const[r,s]=i.useState(!1),[e,n]=i.useState(50);return u.jsxs(u.Fragment,{children:[u.jsx(F,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:o,finish:E})=>{console.log("load",o),n(c=>c+50),o>=5&&E()},loading:u.jsx(l,{size:"2xl"}),isDisabled:r,children:Array(e).fill(0).map((o,E)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},E))}),u.jsx(G,{colorScheme:r?"success":"danger",onClick:()=>s(o=>!o),children:r?"Enable":"Disabled"})]})},R=()=>{const r=i.useRef(()=>{}),[s,e]=i.useState(50);return u.jsxs(u.Fragment,{children:[u.jsx(F,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:n,finish:o})=>{console.log("load",n),e(E=>E+50),n>=5&&o()},loading:u.jsx(l,{size:"2xl"}),resetRef:r,children:Array(s).fill(0).map((n,o)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),u.jsx(G,{onClick:()=>r.current(),children:"Reset"})]})},S=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),await Gu(5e3),s(o=>o+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},H=()=>{const[r,s]=i.useState(50);return u.jsx(F,{onLoad:async({index:e,finish:n})=>{console.log("load",e),s(o=>o+50),e>=5&&n()},loading:u.jsx(u.Fragment,{children:"Loading…"}),children:Array(r).fill(0).map((e,n)=>u.jsxs(a,{children:[u.jsx(d,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(t,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})};var Y,M,P;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />}>
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
}`,...(P=(M=D.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var X,V,q;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
      }} loading={<Loading size="2xl" />}>
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
}`,...(q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,K,Q;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />} rootMargin="300px 0px 0px 0px">
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
}`,...(Q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Z,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />} threshold={1}>
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
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var uu,nu,eu;f.parameters={...f.parameters,docs:{...(uu=f.parameters)==null?void 0:uu.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(0);
  return <InfiniteScrollArea initialLoad onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    await wait(1000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />}>
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
}`,...(eu=(nu=f.parameters)==null?void 0:nu.docs)==null?void 0:eu.source}}};var ru,ou,su;p.parameters={...p.parameters,docs:{...(ru=p.parameters)==null?void 0:ru.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea maxH="xl" borderWidth="1px" rounded="md" p="md" overflowY="auto" onLoad={async ({
    index,
    finish
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />}>
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
}`,...(su=(ou=p.parameters)==null?void 0:ou.docs)==null?void 0:su.source}}};var iu,Fu,au;h.parameters={...h.parameters,docs:{...(iu=h.parameters)==null?void 0:iu.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea orientation="horizontal" borderWidth="1px" rounded="md" p="md" overflowX="auto" onLoad={async ({
    index,
    finish
  }) => {
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />}>
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
}`,...(au=(Fu=h.parameters)==null?void 0:Fu.docs)==null?void 0:au.source}}};var du,tu,Cu;L.parameters={...L.parameters,docs:{...(du=L.parameters)==null?void 0:du.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />} startIndex={3}>
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
}`,...(Cu=(tu=L.parameters)==null?void 0:tu.docs)==null?void 0:Cu.source}}};var Bu,lu,Eu;g.parameters={...g.parameters,docs:{...(Bu=g.parameters)==null?void 0:Bu.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />} finish={<>Finished</>}>
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
}`,...(Eu=(lu=g.parameters)==null?void 0:lu.docs)==null?void 0:Eu.source}}};var cu,Du,xu;j.parameters={...j.parameters,docs:{...(cu=j.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />} isReverse>
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
}`,...(xu=(Du=j.parameters)==null?void 0:Du.docs)==null?void 0:xu.source}}};var Au,mu,fu;y.parameters={...y.parameters,docs:{...(Au=y.parameters)==null?void 0:Au.docs,source:{originalSource:`() => {
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
    }} loading={<Loading size="2xl" />} isDisabled={isDisabled}>
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
}`,...(fu=(mu=y.parameters)==null?void 0:mu.docs)==null?void 0:fu.source}}};var pu,hu,Lu;R.parameters={...R.parameters,docs:{...(pu=R.parameters)==null?void 0:pu.docs,source:{originalSource:`() => {
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
    }} loading={<Loading size="2xl" />} resetRef={resetRef}>
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
}`,...(Lu=(hu=R.parameters)==null?void 0:hu.docs)==null?void 0:Lu.source}}};var gu,ju,yu;S.parameters={...S.parameters,docs:{...(gu=S.parameters)==null?void 0:gu.docs,source:{originalSource:`() => {
  const [count, setCount] = useState<number>(50);
  return <InfiniteScrollArea onLoad={async ({
    index,
    finish
  }) => {
    console.log("load", index);
    await wait(5000);
    setCount(prev => prev + 50);
    if (index >= 5) finish();
  }} loading={<Loading size="2xl" />} triggerProps={{
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
}`,...(yu=(ju=S.parameters)==null?void 0:ju.docs)==null?void 0:yu.source}}};var Ru,Su,Hu;H.parameters={...H.parameters,docs:{...(Ru=H.parameters)==null?void 0:Ru.docs,source:{originalSource:`() => {
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
}`,...(Hu=(Su=H.parameters)==null?void 0:Su.docs)==null?void 0:Hu.source}}};const c0=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","isReverse","isDisabled","useReset","customTrigger","customLoading"];export{c0 as __namedExportsOrder,D as basic,H as customLoading,S as customTrigger,E0 as default,y as isDisabled,j as isReverse,R as useReset,g as withFinish,f as withInitialLoad,h as withOrientation,p as withOverflow,x as withRoot,A as withRootMargin,L as withStartIndex,m as withThreshold};
