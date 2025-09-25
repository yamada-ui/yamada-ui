import{bw as M,aA as P,r as p,bx as g,j as e,by as V,i as _,R as o,Q as a}from"./iframe-BToZTpox.js";import{W as c}from"./wrap-BjBqFdh4.js";import{F as l}from"./for-uUJ5eupy.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-BLADGVni.js";const r=(t={})=>{const{getLimit:n,updateLimit:d}=M(),{config:u}=P(),m=p.useMemo(()=>u.notice??{},[u]),U=p.useMemo(()=>({...m,...t}),[t,m]),T=p.useCallback(s=>({...U,...s}),[U]);return p.useMemo(()=>{const s=(i={})=>{i=T(i);const{closable:h=!0,closeStrategy:b=["click","drag"],duration:v,limit:F=3,placement:A="start",...R}=i;F&&n(A)!==F&&d({limit:F,placement:A});const I=_(b)?b:[b],E={dismissible:I.includes("drag")&&h,duration:v??Number.POSITIVE_INFINITY,toasterId:A};return g.custom(L=>e.jsx(V,{...R,id:L,closable:h,closeStrategies:I}),E)};return s.close=i=>g.dismiss(i),s.closeAll=()=>g.dismiss(),s.update=(i,h)=>(g.dismiss(i),s(h)),s},[n,T,d])},q={parameters:{layout:"centered"},title:"Hooks / useNotice"},C=()=>{const t=r();return e.jsx(o,{onClick:()=>t({description:"私の歌を聴けー！",title:"シェリル・ノーム"}),children:"Show Notice"})},S=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(l,{each:["plain","solid","subtle","surface","island"],children:n=>e.jsxs(o,{onClick:()=>{t({variant:n,description:"こんなサービス、滅多にしないんだからね！",title:"シェリル・ノーム",withIcon:n!=="island"})},children:['Add "',a(n),'" Snack']},n)})})},k=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(l,{each:["info","success","warning","error"],children:n=>e.jsxs(o,{onClick:()=>{t({description:"皆抱きしめて！銀河の果てまで！",status:n,title:"ランカ・リー"})},children:['Add "',a(n),'" Snack']},n)})})},N=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(l,{each:["info","success","warning","error"],children:n=>e.jsxs(o,{onClick:()=>{t({colorScheme:n,description:"人は１人じゃ飛べない。飛んじゃいけない。それが分かったから…",title:"早乙女アルト"})},children:['Add "',a(n),'" Snack']},n)})})},x=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(l,{each:["oval","grid","puff","dots"],children:n=>e.jsxs(o,{onClick:()=>{t({description:"人を本気で好きになるのは命がけなんだな。",loadingScheme:n,title:"ミハエル・ブラン"})},children:['Add "',a(n),'" Snack']},n)})})},f=()=>{const t=r({limit:10});return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:()=>t({description:"お前の恋は何処にある！",title:"クラン・クラン"}),children:"Show Notice"}),e.jsx(o,{onClick:()=>t({description:"お前の恋は何処にある！",limit:2,title:"クラン・クラン"}),children:"Show Notice with Option"})]})},j=()=>{const t=r({duration:1e4});return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:()=>t({description:"お前も、お前の夢も、俺が守る！",title:"オズマ・リー"}),children:"Show Notice"}),e.jsx(o,{onClick:()=>t({description:"お前も、お前の夢も、俺が守る！",duration:5e3,title:"オズマ・リー"}),children:"Show Notice with Option"})]})},B=()=>{const t=r({duration:null});return e.jsx(o,{onClick:()=>t({description:"覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",title:"シェリル・ノーム"}),children:"Show Notice"})},w=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(l,{each:["start-start","start-center","start-end","end-start","end-center","end-end"],children:n=>e.jsxs(o,{onClick:()=>t({description:"お前が、お前たちが俺の翼だ！",placement:n,title:"早乙女アルト"}),children:['Open "',n,'" Notice']},n)})})},y=()=>{const t=r();return e.jsxs(c,{gap:"md",children:[e.jsx(l,{each:["click","drag","button"],children:n=>e.jsxs(o,{onClick:()=>t({closeStrategy:n,description:"お前が、お前たちが俺の翼だ！",title:"早乙女アルト"}),children:[a(n)," Only"]},n)}),e.jsx(l,{each:[["click","drag"],["button","drag"]],children:n=>e.jsxs(o,{onClick:()=>t({closeStrategy:n,description:"お前が、お前たちが俺の翼だ！",title:"早乙女アルト"}),children:[a(n[0])," & ",a(n[1])]},n.join("-"))})]})},W=()=>{const t=r(),n=p.useRef(void 0),d=()=>{n.current=t({closable:!0,description:"お前が好きだ。",duration:3e4,title:"クラン・クラン"})},u=()=>{n.current&&t.close(n.current)},m=()=>{t.closeAll()};return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:d,children:"Show Notice"}),e.jsx(o,{onClick:u,children:"Close last Notice"}),e.jsx(o,{onClick:m,children:"Close all Notice"})]})},O=()=>{const t=r(),n=p.useRef(void 0),d=()=>{n.current=t({colorScheme:"orange",description:"チャンスは目の前にあるものよ。",duration:5e3,title:"シェリル・ノーム"})},u=()=>{n.current&&t.update(n.current,{colorScheme:"blue",description:"人生はワン･ツー･デカルチャー！！頑張れ、私。",duration:5e3,title:"ランカ・リー"})};return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:d,children:"Show Notice"}),e.jsx(o,{onClick:u,children:"Update last Notice"})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Button onClick={() => notice({
    description: "私の歌を聴けー！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Wrap gap="md">
      <For each={["plain", "solid", "subtle", "surface", "island"] as const}>
        {variant => <Button key={variant} onClick={() => {
        notice({
          variant,
          description: "こんなサービス、滅多にしないんだからね！",
          title: "シェリル・ノーム",
          withIcon: variant !== "island" ? true : false
        });
      }}>
            Add "{toTitleCase(variant)}" Snack
          </Button>}
      </For>
    </Wrap>;
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Wrap gap="md">
      <For each={["info", "success", "warning", "error"] as const}>
        {status => <Button key={status} onClick={() => {
        notice({
          description: "皆抱きしめて！銀河の果てまで！",
          status,
          title: "ランカ・リー"
        });
      }}>
            Add "{toTitleCase(status)}" Snack
          </Button>}
      </For>
    </Wrap>;
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Wrap gap="md">
      <For each={["info", "success", "warning", "error"] as const}>
        {colorScheme => <Button key={colorScheme} onClick={() => {
        notice({
          colorScheme,
          description: "人は１人じゃ飛べない。飛んじゃいけない。それが分かったから…",
          title: "早乙女アルト"
        });
      }}>
            Add "{toTitleCase(colorScheme)}" Snack
          </Button>}
      </For>
    </Wrap>;
}`,...N.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Wrap gap="md">
      <For each={["oval", "grid", "puff", "dots"] as const}>
        {loadingScheme => <Button key={loadingScheme} onClick={() => {
        notice({
          description: "人を本気で好きになるのは命がけなんだな。",
          loadingScheme,
          title: "ミハエル・ブラン"
        });
      }}>
            Add "{toTitleCase(loadingScheme)}" Snack
          </Button>}
      </For>
    </Wrap>;
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice({
    limit: 10
  });
  return <Wrap gap="md">
      <Button onClick={() => notice({
      description: "お前の恋は何処にある！",
      title: "クラン・クラン"
    })}>
        Show Notice
      </Button>

      <Button onClick={() => notice({
      description: "お前の恋は何処にある！",
      limit: 2,
      title: "クラン・クラン"
    })}>
        Show Notice with Option
      </Button>
    </Wrap>;
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice({
    duration: 10000
  });
  return <Wrap gap="md">
      <Button onClick={() => notice({
      description: "お前も、お前の夢も、俺が守る！",
      title: "オズマ・リー"
    })}>
        Show Notice
      </Button>

      <Button onClick={() => notice({
      description: "お前も、お前の夢も、俺が守る！",
      duration: 5000,
      title: "オズマ・リー"
    })}>
        Show Notice with Option
      </Button>
    </Wrap>;
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice({
    duration: null
  });
  return <Button onClick={() => notice({
    description: "覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Wrap gap="md">
      <For each={["start-start", "start-center", "start-end", "end-start", "end-center", "end-end"] as const}>
        {placement => <Button key={placement} onClick={() => notice({
        description: "お前が、お前たちが俺の翼だ！",
        placement,
        title: "早乙女アルト"
      })}>
            Open "{placement}" Notice
          </Button>}
      </For>
    </Wrap>;
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Wrap gap="md">
      <For each={["click", "drag", "button"] as const}>
        {closeStrategy => <Button key={closeStrategy} onClick={() => notice({
        closeStrategy,
        description: "お前が、お前たちが俺の翼だ！",
        title: "早乙女アルト"
      })}>
            {toTitleCase(closeStrategy)} Only
          </Button>}
      </For>

      <For each={[["click", "drag"], ["button", "drag"]] as NoticeCloseStrategy[][]}>
        {closeStrategy => <Button key={closeStrategy.join("-")} onClick={() => notice({
        closeStrategy,
        description: "お前が、お前たちが俺の翼だ！",
        title: "早乙女アルト"
      })}>
            {toTitleCase(closeStrategy[0]!)} & {toTitleCase(closeStrategy[1]!)}
          </Button>}
      </For>
    </Wrap>;
}`,...y.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  const ref = useRef<number | string | undefined>(undefined);
  const onOpen = () => {
    ref.current = notice({
      closable: true,
      description: "お前が好きだ。",
      duration: 30000,
      title: "クラン・クラン"
    });
  };
  const onClose = () => {
    if (ref.current) {
      notice.close(ref.current);
    }
  };
  const onCloseAll = () => {
    notice.closeAll();
  };
  return <Wrap gap="md">
      <Button onClick={onOpen}>Show Notice</Button>
      <Button onClick={onClose}>Close last Notice</Button>
      <Button onClick={onCloseAll}>Close all Notice</Button>
    </Wrap>;
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  const ref = useRef<number | string | undefined>(undefined);
  const onOpen = () => {
    ref.current = notice({
      colorScheme: "orange",
      description: "チャンスは目の前にあるものよ。",
      duration: 5000,
      title: "シェリル・ノーム"
    });
  };
  const onUpdate = () => {
    if (ref.current) {
      notice.update(ref.current, {
        colorScheme: "blue",
        description: "人生はワン･ツー･デカルチャー！！頑張れ、私。",
        duration: 5000,
        title: "ランカ・リー"
      });
    }
  };
  return <Wrap gap="md">
      <Button onClick={onOpen}>Show Notice</Button>
      <Button onClick={onUpdate}>Update last Notice</Button>
    </Wrap>;
}`,...O.parameters?.docs?.source}}};const z=["Basic","Variant","Status","ColorScheme","Loading","Limit","Duration","KeepStay","Placement","CloseStrategy","UseClose","UseUpdate"];export{C as Basic,y as CloseStrategy,N as ColorScheme,j as Duration,B as KeepStay,f as Limit,x as Loading,w as Placement,k as Status,W as UseClose,O as UseUpdate,S as Variant,z as __namedExportsOrder,q as default};
