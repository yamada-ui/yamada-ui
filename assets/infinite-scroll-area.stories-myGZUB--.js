import{j as u}from"./jsx-runtime-X2b_N9AH.js";import{r as s}from"./index-uCp2LrAq.js";import{u as Xu}from"./index-Bdlz8PJh.js";import{l as Vu,b as Ou,a as qu,c as Nu}from"./factory-Bf0a1C4O.js";import{f as vu}from"./forward-ref-Dr5Hqd9a.js";import{a as Ju}from"./use-component-style-C1oydc60.js";import{o as Ku}from"./theme-provider-CfMKAtcZ.js";import{L as l}from"./loading-CD9zg-8p.js";import{C as F,a as t,b as d}from"./card-Cm5xeGDt.js";import{H as C}from"./heading-DGjno4GO.js";import{T as B}from"./text-BOhk0htq.js";import{C as Qu}from"./container-BHdAVcDB.js";import{B as z}from"./button-C5HSAH_Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";const[Uu,Zu]=Vu({name:"InfiniteScrollAreaContext",errorMessage:`useInfiniteScrollAreaContext returned is 'undefined'. Seems you forgot to wrap the components in "<InfiniteScrollArea />"`}),a=vu(({orientation:o="vertical",...i},e)=>{const[n,r]=Ju("InfiniteScrollArea",{orientation:o,...i}),{rootRef:c,orientation:E,rootMargin:Gu,threshold:Iu,startIndex:bu,onLoad:wu,resetRef:Tu,indexRef:_u,className:ku,children:Wu,triggerProps:G,loading:I,finish:O,isDisabled:b,isReverse:N,initialLoad:Mu,...Pu}=Ku(r),w=E==="vertical",T=s.useRef(null),{ref:_,isFinish:v}=Xu({orientation:E,rootRef:c??T,rootMargin:Gu,threshold:Iu,startIndex:bu,onLoad:wu,resetRef:Tu,indexRef:_u,isDisabled:b,isReverse:N,initialLoad:Mu}),Yu=s.useMemo(()=>({w:"100%",display:"flex",flexDirection:w?"column":"row",gap:"1rem",...n.container}),[w,n]),k=!b&&(!!O||!v);return u.jsx(Uu,{value:n,children:u.jsxs(Ou.div,{ref:qu(T,e),tabIndex:0,className:Nu("ui-infinite-scroll-area",ku),__css:Yu,...Pu,children:[N&&k?u.jsx(W,{ref:_,...G,children:v?O:I}):null,Wu,!N&&k?u.jsx(W,{ref:_,...G,children:v?O:I}):null]})})}),W=vu(({className:o,...i},e)=>{const n=Zu(),r=s.useMemo(()=>({w:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center",...n.trigger}),[n]);return u.jsx(Ou.div,{ref:e,className:Nu("ui-infinite-scroll-area__trigger",o),__css:r,...i})}),p0={title:"Components / Data Display / InfiniteScrollArea",component:a},zu=o=>new Promise(i=>{setTimeout(i,o)}),D=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},x=()=>{const o=s.useRef(null),[i,e]=s.useState(50),n=s.useRef(()=>{});return u.jsxs(u.Fragment,{children:[u.jsx(Qu,{ref:o,maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",children:u.jsx(a,{rootRef:o,resetRef:n,onLoad:async({index:r,finish:c})=>{console.log("load",r),e(E=>E+50),r>=5&&c()},loading:u.jsx(l,{size:"2xl"}),children:Array(i).fill(0).map((r,c)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},c))})}),u.jsx(z,{onClick:()=>n.current(),children:"Reset"})]})},A=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),rootMargin:"300px 0px 0px 0px",children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},m=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),threshold:1,children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},f=()=>{const[o,i]=s.useState(0);return u.jsx(a,{initialLoad:!0,onLoad:async({index:e,finish:n})=>{console.log("load",e),await zu(1e3),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},p=()=>{const[o,i]=s.useState(50);return u.jsx(a,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:e,finish:n})=>{i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{minW:"lg",children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},h=()=>{const[o,i]=s.useState(50);return u.jsx(a,{orientation:"horizontal",borderWidth:"1px",rounded:"md",p:"md",overflowX:"auto",onLoad:async({index:e,finish:n})=>{i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{minW:"lg",children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},L=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),startIndex:3,children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},g=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),finish:u.jsx(u.Fragment,{children:"Finished"}),children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},j=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),isReverse:!0,children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},y=()=>{const[o,i]=s.useState(!1),[e,n]=s.useState(50);return u.jsxs(u.Fragment,{children:[u.jsx(a,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:r,finish:c})=>{console.log("load",r),n(E=>E+50),r>=5&&c()},loading:u.jsx(l,{size:"2xl"}),isDisabled:o,children:Array(e).fill(0).map((r,c)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},c))}),u.jsx(z,{colorScheme:o?"success":"danger",onClick:()=>i(r=>!r),children:o?"Enable":"Disabled"})]})},R=()=>{const o=s.useRef(()=>{}),[i,e]=s.useState(50);return u.jsxs(u.Fragment,{children:[u.jsx(a,{maxH:"xl",borderWidth:"1px",rounded:"md",p:"md",overflowY:"auto",onLoad:async({index:n,finish:r})=>{console.log("load",n),e(c=>c+50),n>=5&&r()},loading:u.jsx(l,{size:"2xl"}),resetRef:o,children:Array(i).fill(0).map((n,r)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},r))}),u.jsx(z,{onClick:()=>o.current(),children:"Reset"})]})},S=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),await zu(5e3),i(r=>r+50),e>=5&&n()},loading:u.jsx(l,{size:"2xl"}),triggerProps:{bg:"primary.50",p:"md",rounded:"md"},children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})},H=()=>{const[o,i]=s.useState(50);return u.jsx(a,{onLoad:async({index:e,finish:n})=>{console.log("load",e),i(r=>r+50),e>=5&&n()},loading:u.jsx(u.Fragment,{children:"Loading…"}),children:Array(o).fill(0).map((e,n)=>u.jsxs(F,{children:[u.jsx(t,{children:u.jsx(C,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"})}),u.jsx(d,{children:u.jsx(B,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})})]},n))})};var M,P,Y;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(Y=(P=D.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var X,V,q;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(eu=(nu=f.parameters)==null?void 0:nu.docs)==null?void 0:eu.source}}};var ru,ou,iu;p.parameters={...p.parameters,docs:{...(ru=p.parameters)==null?void 0:ru.docs,source:{originalSource:`() => {
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
}`,...(iu=(ou=p.parameters)==null?void 0:ou.docs)==null?void 0:iu.source}}};var su,au,Fu;h.parameters={...h.parameters,docs:{...(su=h.parameters)==null?void 0:su.docs,source:{originalSource:`() => {
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
}`,...(Fu=(au=h.parameters)==null?void 0:au.docs)==null?void 0:Fu.source}}};var tu,du,Cu;L.parameters={...L.parameters,docs:{...(tu=L.parameters)==null?void 0:tu.docs,source:{originalSource:`() => {
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
}`,...(Cu=(du=L.parameters)==null?void 0:du.docs)==null?void 0:Cu.source}}};var Bu,lu,cu;g.parameters={...g.parameters,docs:{...(Bu=g.parameters)==null?void 0:Bu.docs,source:{originalSource:`() => {
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
}`,...(cu=(lu=g.parameters)==null?void 0:lu.docs)==null?void 0:cu.source}}};var Eu,Du,xu;j.parameters={...j.parameters,docs:{...(Eu=j.parameters)==null?void 0:Eu.docs,source:{originalSource:`() => {
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
}`,...(Hu=(Su=H.parameters)==null?void 0:Su.docs)==null?void 0:Hu.source}}};const h0=["basic","withRoot","withRootMargin","withThreshold","withInitialLoad","withOverflow","withOrientation","withStartIndex","withFinish","isReverse","isDisabled","useReset","customTrigger","customLoading"];export{h0 as __namedExportsOrder,D as basic,H as customLoading,S as customTrigger,p0 as default,y as isDisabled,j as isReverse,R as useReset,g as withFinish,f as withInitialLoad,h as withOrientation,p as withOverflow,x as withRoot,A as withRootMargin,L as withStartIndex,m as withThreshold};
