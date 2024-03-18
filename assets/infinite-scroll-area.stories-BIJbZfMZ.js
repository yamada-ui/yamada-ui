import{a,j as u,F as A}from"./jsx-runtime-2xDJh5tt.js";import{r as F}from"./index-CBqU2yxZ.js";import{u as ju}from"./index-LXy9_zKW.js";import{f as Gu}from"./forward-ref-DuAegr0M.js";import{u as vu,w as Pu,c as bu}from"./factory-DLpD49Xl.js";import{L as c}from"./loading-De1VEe6t.js";import{C,a as t,b as s}from"./card-CjosUz9l.js";import{H as B}from"./heading-BPwDr0ni.js";import{T as l}from"./text-D-2-8y30.js";import{C as Xu}from"./container-p_JhnM9J.js";import{B as w}from"./button-DQ4BMoEA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CpntKjHS.js";import"./theme-provider-DXhTM26K.js";import"./index-DiSCNHbg.js";import"./index-5JVG-Iiz.js";import"./icon-D30_Pagv.js";import"./use-component-style-D9HuanlY.js";import"./use-ripple-Df_aFKka.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CIylrsRE.js";const d=Gu(({rootRef:r,orientation:i="vertical",rootMargin:e,threshold:n,startIndex:o,onLoad:E,resetRef:D,indexRef:Iu,className:Tu,children:_u,triggerProps:I,loading:T,finish:G,isDisabled:_,isReverse:v,initialLoad:ku,...Wu},Yu)=>{const k=i==="vertical",W=F.useRef(null),{ref:Y,isFinish:b}=ju({orientation:i,rootRef:r??W,rootMargin:e,threshold:n,startIndex:o,onLoad:E,resetRef:D,indexRef:Iu,isDisabled:_,isReverse:v,initialLoad:ku}),Mu=F.useMemo(()=>({w:"100%",display:"flex",flexDirection:k?"column":"row",gap:"1rem"}),[k]),M=!_&&(!!G||!b);return a(vu.div,{ref:Pu(W,Yu),className:bu("ui-infinite-scroll-area",Tu),__css:Mu,...Wu,children:[v&&M?u(j,{ref:Y,...I,children:b?G:T}):null,_u,!v&&M?u(j,{ref:Y,...I,children:b?G:T}):null]})}),j=Gu(({className:r,...i},e)=>{const n=F.useMemo(()=>({w:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center"}),[]);return u(vu.div,{ref:e,className:bu("ui-infinite-scroll-area__trigger",r),__css:n,...i})}),D0={title:"Components / Data Display / InfiniteScrollArea",component:d},wu=r=>new Promise(i=>{setTimeout(i,r)}),m=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},f=()=>{const r=F.useRef(null),[i,e]=F.useState(50),n=F.useRef(()=>{});return a(A,{children:[u(Xu,{ref:r,maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",children:u(d,{rootRef:r,resetRef:n,onLoad:async({index:o,finish:E})=>{console.log("load",o),e(D=>D+50),o>=5&&E()},loading:u(c,{size:"2xl"}),children:Array(i).fill(0).map((o,E)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},E))})}),u(w,{onClick:()=>n.current(),children:"Reset"})]})},p=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),rootMargin:"300px 0px 0px 0px",children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},h=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),threshold:1,children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},L=()=>{const[r,i]=F.useState(0);return u(d,{initialLoad:!0,onLoad:async({index:e,finish:n})=>{console.log("load",e),await wu(1e3),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},x=()=>{const[r,i]=F.useState(50);return u(d,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:e,finish:n})=>{i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>a(C,{minW:"lg",children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},g=()=>{const[r,i]=F.useState(50);return u(d,{orientation:"horizontal",borderWidth:"1px",rounded:"md",p:"md",overflowX:"auto",onLoad:async({index:e,finish:n})=>{i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),children:Array(r).fill(0).map((e,n)=>a(C,{minW:"lg",children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},y=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),startIndex:3,children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},R=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),finish:u(A,{children:"Finished"}),children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},S=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),isReverse:!0,children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},H=()=>{const[r,i]=F.useState(!1),[e,n]=F.useState(50);return a(A,{children:[u(d,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:o,finish:E})=>{console.log("load",o),n(D=>D+50),o>=5&&E()},loading:u(c,{size:"2xl"}),isDisabled:r,children:Array(e).fill(0).map((o,E)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},E))}),u(w,{colorScheme:r?"success":"danger",onClick:()=>i(o=>!o),children:r?"Enable":"Disabled"})]})},O=()=>{const r=F.useRef(()=>{}),[i,e]=F.useState(50);return a(A,{children:[u(d,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:n,finish:o})=>{console.log("load",n),e(E=>E+50),n>=5&&o()},loading:u(c,{size:"2xl"}),resetRef:r,children:Array(i).fill(0).map((n,o)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},o))}),u(w,{onClick:()=>r.current(),children:"Reset"})]})},N=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),await wu(5e3),i(o=>o+50),e>=5&&n()},loading:u(c,{size:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},z=()=>{const[r,i]=F.useState(50);return u(d,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(o=>o+50),e>=5&&n()},loading:u(A,{children:"Loading…"}),children:Array(r).fill(0).map((e,n)=>a(C,{children:[u(t,{children:u(B,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u(s,{children:u(l,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})};var P,X,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(V=(X=m.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var q,J,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(Z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var $,uu,nu;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(nu=(uu=h.parameters)==null?void 0:uu.docs)==null?void 0:nu.source}}};var eu,ru,ou;L.parameters={...L.parameters,docs:{...(eu=L.parameters)==null?void 0:eu.docs,source:{originalSource:`() => {
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
}`,...(ou=(ru=L.parameters)==null?void 0:ru.docs)==null?void 0:ou.source}}};var iu,Fu,au;x.parameters={...x.parameters,docs:{...(iu=x.parameters)==null?void 0:iu.docs,source:{originalSource:`() => {
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
}`,...(au=(Fu=x.parameters)==null?void 0:Fu.docs)==null?void 0:au.source}}};var du,Cu,tu;g.parameters={...g.parameters,docs:{...(du=g.parameters)==null?void 0:du.docs,source:{originalSource:`() => {
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
}`,...(tu=(Cu=g.parameters)==null?void 0:Cu.docs)==null?void 0:tu.source}}};var su,Bu,lu;y.parameters={...y.parameters,docs:{...(su=y.parameters)==null?void 0:su.docs,source:{originalSource:`() => {
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
}`,...(lu=(Bu=y.parameters)==null?void 0:Bu.docs)==null?void 0:lu.source}}};var cu,Eu,Du;R.parameters={...R.parameters,docs:{...(cu=R.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
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
}`,...(Du=(Eu=R.parameters)==null?void 0:Eu.docs)==null?void 0:Du.source}}};var Au,mu,fu;S.parameters={...S.parameters,docs:{...(Au=S.parameters)==null?void 0:Au.docs,source:{originalSource:`() => {
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
}`,...(fu=(mu=S.parameters)==null?void 0:mu.docs)==null?void 0:fu.source}}};var pu,hu,Lu;H.parameters={...H.parameters,docs:{...(pu=H.parameters)==null?void 0:pu.docs,source:{originalSource:`() => {
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
}`,...(Lu=(hu=H.parameters)==null?void 0:hu.docs)==null?void 0:Lu.source}}};var xu,gu,yu;O.parameters={...O.parameters,docs:{...(xu=O.parameters)==null?void 0:xu.docs,source:{originalSource:`() => {
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
}`,...(yu=(gu=O.parameters)==null?void 0:gu.docs)==null?void 0:yu.source}}};var Ru,Su,Hu;N.parameters={...N.parameters,docs:{...(Ru=N.parameters)==null?void 0:Ru.docs,source:{originalSource:`() => {
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
}`,...(Hu=(Su=N.parameters)==null?void 0:Su.docs)==null?void 0:Hu.source}}};var Ou,Nu,zu;z.parameters={...z.parameters,docs:{...(Ou=z.parameters)==null?void 0:Ou.docs,source:{originalSource:`() => {
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
}`,...(zu=(Nu=z.parameters)==null?void 0:Nu.docs)==null?void 0:zu.source}}};const A0=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","isReverse","isDisabled","useReset","customTrigger","customLoading"];export{A0 as __namedExportsOrder,m as basic,z as customLoading,N as customTrigger,D0 as default,H as isDisabled,S as isReverse,O as useReset,R as withFinish,L as withInitialLoad,g as withOrientation,x as withOverflow,f as withRoot,p as withRootMargin,y as withStartIndex,h as withThreshold};
