import{a as c,F as r,j as n}from"./jsx-runtime-e6a661ac.js";import{r as T}from"./index-61bf1805.js";import{D as i,l as Sn,m as bn,n as fn,o as xn,p as vn}from"./dialog-5adbd7f8.js";import{u as a}from"./index-7659a96f.js";import{B as s}from"./button-b34f397c.js";import{T as u}from"./text-90618d09.js";import{W as y}from"./flex-69bc912b.js";import{C as An}from"./container-81e9b390.js";import{I as Tn}from"./image-3297791d.js";import{H as yn}from"./heading-19bfca25.js";import"./_commonjsHelpers-de833af9.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./theme-19663a53.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./slide-05a99f93.js";import"./index-6bcd17ac.js";import"./motion-fb190baf.js";import"./utils-e3ba2ad2.js";import"./forward-ref-c496b87d.js";import"./fade-9bdcd24f.js";import"./close-button-b1ad4075.js";import"./use-component-style-195b7054.js";import"./icon-c22f2933.js";import"./index-b1b61640.js";import"./container-portal-cbbe0bc5.js";import"./index-2801d3c9.js";import"./defineProperty-823cf908.js";import"./slide-fade-63967dfc.js";import"./scale-fade-74b1f4df.js";import"./loading-e9b5f4eb.js";import"./use-image-72f885bd.js";const ue={title:"Components / Overlay / Dialog",component:i},d=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},m=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,duration:.4,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},O=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),c(i,{isOpen:t,onClose:e,children:[n(Sn,{children:"孫悟空"}),n(bn,{children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),c(fn,{children:[n(s,{variant:"ghost",onClick:e,children:"わけない"}),n(s,{colorScheme:"primary",onClick:e,children:"わける"})]})]})]})},C=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,header:n(u,{color:"orange.500",children:"孫悟空"}),cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},g=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,header:"孫悟空",footer:c(r,{children:[n(s,{variant:"ghost",colorScheme:"red",onClick:e,children:"わけない"}),n(s,{variant:"ghost",colorScheme:"orange",onClick:e,children:"どちらでもよい"}),n(s,{variant:"ghost",colorScheme:"blue",onClick:e,children:"わける"})]}),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},h=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:{variant:"outline",colorScheme:"red",children:"わけない"},onCancel:e,other:{variant:"outline",colorScheme:"orange",children:"どちらでもよい"},onOther:e,success:{variant:"outline",colorScheme:"blue",children:"わける"},onSuccess:e,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},D=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:"わけない",onCancel:e,other:"どちらでもよい",onOther:e,success:"わける",onSuccess:e,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},B=()=>{const[t,o]=T.useState("md"),{isOpen:e,onOpen:l,onClose:p}=a();return c(r,{children:[c(y,{gap:"md",children:[n(s,{onClick:()=>{o("sm"),l()},children:"Open sm Dialog"}),n(s,{onClick:()=>{o("md"),l()},children:"Open md Dialog"}),n(s,{onClick:()=>{o("lg"),l()},children:"Open lg Dialog"}),n(s,{onClick:()=>{o("xl"),l()},children:"Open xl Dialog"}),n(s,{onClick:()=>{o("full"),l()},children:"Open full Dialog"})]}),n(i,{isOpen:e,onClose:p,size:t,header:"孫悟空",cancel:"わけない",onCancel:p,success:"わける",onSuccess:p,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},k=()=>{const[t,o]=T.useState("center"),{isOpen:e,onOpen:l,onClose:p}=a();return c(r,{children:[c(y,{gap:"md",children:[n(s,{onClick:()=>{o("center"),l()},children:"Open center Dialog"}),n(s,{onClick:()=>{o("top"),l()},children:"Open top Dialog"}),n(s,{onClick:()=>{o("top-left"),l()},children:"Open top & left Dialog"}),n(s,{onClick:()=>{o("left"),l()},children:"Open left Dialog"}),n(s,{onClick:()=>{o("bottom-left"),l()},children:"Open bottom & left Dialog"}),n(s,{onClick:()=>{o("bottom"),l()},children:"Open bottom Dialog"}),n(s,{onClick:()=>{o("bottom-right"),l()},children:"Open bottom & right Dialog"}),n(s,{onClick:()=>{o("right"),l()},children:"Open right Dialog"}),n(s,{onClick:()=>{o("top-right"),l()},children:"Open top & right Dialog"})]}),n(i,{isOpen:e,onClose:p,placement:t,header:"孫悟空",cancel:"わけない",onCancel:p,success:"わける",onSuccess:p,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},S=()=>{const[t,o]=T.useState("scale"),{isOpen:e,onOpen:l,onClose:p}=a();return c(r,{children:[c(y,{gap:"md",children:[n(s,{onClick:()=>{o("scale"),l()},children:"Open scale Dialog"}),n(s,{onClick:()=>{o("top"),l()},children:"Open top Dialog"}),n(s,{onClick:()=>{o("left"),l()},children:"Open left Dialog"}),n(s,{onClick:()=>{o("bottom"),l()},children:"Open bottom Dialog"}),n(s,{onClick:()=>{o("right"),l()},children:"Open right Dialog"})]}),n(i,{isOpen:e,onClose:p,animation:t,header:"孫悟空",cancel:"わけない",onCancel:p,success:"わける",onSuccess:p,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},b=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},f=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),c(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,children:[n(xn,{color:"gray.400"}),n(u,{children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})]})},x=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),n(i,{isOpen:t,onClose:e,withOverlay:!1,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},v=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),c(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,children:[n(vn,{bg:"blackAlpha.300",backdropFilter:"blur(10px)"}),n(u,{children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})]})},A=()=>{const{isOpen:t,onOpen:o,onClose:e}=a();return c(r,{children:[n(s,{onClick:o,children:"Open Dialog"}),c(An,{p:"md",gap:"md",rounded:"md",alignItems:"center",textAlign:"center",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[n(Tn,{src:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:"sm"}),n(yn,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"}),n(u,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),n(u,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),n(u,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),n(u,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),n(u,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),n(u,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]}),n(i,{isOpen:t,onClose:e,header:"孫悟空",cancel:"わけない",onCancel:e,success:"わける",onSuccess:e,blockScrollOnMount:!1,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var z,P,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(w=(P=d.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var W,F,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose} duration={0.4}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var L,N,I;O.parameters={...O.parameters,docs:{...(L=O.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose}>
        <DialogHeader>孫悟空</DialogHeader>

        <DialogBody>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </DialogBody>

        <DialogFooter>
          <Button variant='ghost' onClick={onClose}>
            わけない
          </Button>
          <Button colorScheme='primary' onClick={onClose}>
            わける
          </Button>
        </DialogFooter>
      </Dialog>
    </>;
}`,...(I=(N=O.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var G,M,R;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header={<Text color='orange.500'>孫悟空</Text>} cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(R=(M=C.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var _,j,E;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' footer={<>
            <Button variant='ghost' colorScheme='red' onClick={onClose}>
              わけない
            </Button>
            <Button variant='ghost' colorScheme='orange' onClick={onClose}>
              どちらでもよい
            </Button>
            <Button variant='ghost' colorScheme='blue' onClick={onClose}>
              わける
            </Button>
          </>}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(E=(j=g.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var Z,q,J;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel={{
      variant: 'outline',
      colorScheme: 'red',
      children: 'わけない'
    }} onCancel={onClose} other={{
      variant: 'outline',
      colorScheme: 'orange',
      children: 'どちらでもよい'
    }} onOther={onClose} success={{
      variant: 'outline',
      colorScheme: 'blue',
      children: 'わける'
    }} onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} other='どちらでもよい' onOther={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(U=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [size, setSize] = useState<DialogProps['size']>('md');
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap='md'>
        <Button onClick={() => {
        setSize('sm');
        onOpen();
      }}>
          Open sm Dialog
        </Button>

        <Button onClick={() => {
        setSize('md');
        onOpen();
      }}>
          Open md Dialog
        </Button>

        <Button onClick={() => {
        setSize('lg');
        onOpen();
      }}>
          Open lg Dialog
        </Button>

        <Button onClick={() => {
        setSize('xl');
        onOpen();
      }}>
          Open xl Dialog
        </Button>

        <Button onClick={() => {
        setSize('full');
        onOpen();
      }}>
          Open full Dialog
        </Button>
      </Wrap>

      <Dialog isOpen={isOpen} onClose={onClose} size={size} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,nn,en;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [placement, setPlacement] = useState<DialogProps['placement']>('center');
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap='md'>
        <Button onClick={() => {
        setPlacement('center');
        onOpen();
      }}>
          Open center Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('top');
        onOpen();
      }}>
          Open top Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('top-left');
        onOpen();
      }}>
          Open top & left Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('left');
        onOpen();
      }}>
          Open left Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('bottom-left');
        onOpen();
      }}>
          Open bottom & left Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('bottom');
        onOpen();
      }}>
          Open bottom Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('bottom-right');
        onOpen();
      }}>
          Open bottom & right Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('right');
        onOpen();
      }}>
          Open right Dialog
        </Button>

        <Button onClick={() => {
        setPlacement('top-right');
        onOpen();
      }}>
          Open top & right Dialog
        </Button>
      </Wrap>

      <Dialog isOpen={isOpen} onClose={onClose} placement={placement} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(en=(nn=k.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var on,sn,tn;S.parameters={...S.parameters,docs:{...(on=S.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useState<DialogProps['animation']>('scale');
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap='md'>
        <Button onClick={() => {
        setAnimation('scale');
        onOpen();
      }}>
          Open scale Dialog
        </Button>

        <Button onClick={() => {
        setAnimation('top');
        onOpen();
      }}>
          Open top Dialog
        </Button>

        <Button onClick={() => {
        setAnimation('left');
        onOpen();
      }}>
          Open left Dialog
        </Button>

        <Button onClick={() => {
        setAnimation('bottom');
        onOpen();
      }}>
          Open bottom Dialog
        </Button>

        <Button onClick={() => {
        setAnimation('right');
        onOpen();
      }}>
          Open right Dialog
        </Button>
      </Wrap>

      <Dialog isOpen={isOpen} onClose={onClose} animation={animation} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(tn=(sn=S.parameters)==null?void 0:sn.docs)==null?void 0:tn.source}}};var cn,ln,rn;b.parameters={...b.parameters,docs:{...(cn=b.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(rn=(ln=b.parameters)==null?void 0:ln.docs)==null?void 0:rn.source}}};var an,pn,un;f.parameters={...f.parameters,docs:{...(an=f.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        <DialogCloseButton color='gray.400' />

        <Text>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </Text>
      </Dialog>
    </>;
}`,...(un=(pn=f.parameters)==null?void 0:pn.docs)==null?void 0:un.source}}};var dn,mn,On;x.parameters={...x.parameters,docs:{...(dn=x.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} withOverlay={false} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(On=(mn=x.parameters)==null?void 0:mn.docs)==null?void 0:On.source}}};var Cn,gn,hn;v.parameters={...v.parameters,docs:{...(Cn=v.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        <DialogOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />

        <Text>
          だ…大地よ海よ　そして生きているすべての　みんな…
          このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
        </Text>
      </Dialog>
    </>;
}`,...(hn=(gn=v.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var Dn,Bn,kn;A.parameters={...A.parameters,docs:{...(Dn=A.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Container p='md' gap='md' rounded='md' alignItems='center' textAlign='center' border='1px solid' borderColor='inherit' boxShadow='md'>
        <Image src='https://dragon-ball-official.com/assets/img/intro/intro_2.png' maxW='sm' />

        <Heading size='xl'>『ドラゴンボール』（DRAGON BALL）</Heading>

        <Text>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Text>

        <Text>
          1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。
          連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超
          ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。
        </Text>

        <Text>
          1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。
        </Text>

        <Text>
          単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。
        </Text>

        <Text>
          ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。
        </Text>

        <Text>
          2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。
        </Text>
      </Container>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose} blockScrollOnMount={false}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(kn=(Bn=A.parameters)==null?void 0:Bn.docs)==null?void 0:kn.source}}};const de=["basic","withDuration","customDialog","customHeader","customFooter","customButton","useOtherButton","withSize","withPlacement","withAnimation","disabledCloseButton","customCloseButton","disabledOverlay","customOverlay","scrollOnMount"];export{de as __namedExportsOrder,d as basic,h as customButton,f as customCloseButton,O as customDialog,g as customFooter,C as customHeader,v as customOverlay,ue as default,b as disabledCloseButton,x as disabledOverlay,A as scrollOnMount,D as useOtherButton,S as withAnimation,m as withDuration,k as withPlacement,B as withSize};
//# sourceMappingURL=dialog.stories-03c8988c.js.map
