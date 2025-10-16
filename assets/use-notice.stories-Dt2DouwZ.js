import{j as e,S as o,R as s,r as B}from"./iframe-B0P9Y6nu.js";import{u as r}from"./use-notice-rJ6RUU4M.js";import{W as c}from"./wrap-BscgfT5S.js";import{F as i}from"./for-ClzBHWNn.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DYi500Yr.js";const b={parameters:{layout:"centered"},title:"Hooks / useNotice"},a=()=>{const t=r();return e.jsx(o,{onClick:()=>t({description:"私の歌を聴けー！",title:"シェリル・ノーム"}),children:"Show Notice"})},l=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["plain","solid","subtle","surface","island"],children:n=>e.jsxs(o,{onClick:()=>{t({variant:n,description:"こんなサービス、滅多にしないんだからね！",title:"シェリル・ノーム",withIcon:n!=="island"})},children:['Add "',s(n),'" Snack']},n)})})},d=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["info","success","warning","error"],children:n=>e.jsxs(o,{onClick:()=>{t({description:"皆抱きしめて！銀河の果てまで！",status:n,title:"ランカ・リー"})},children:['Add "',s(n),'" Snack']},n)})})},u=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["info","success","warning","error"],children:n=>e.jsxs(o,{onClick:()=>{t({colorScheme:n,description:"人は１人じゃ飛べない。飛んじゃいけない。それが分かったから…",title:"早乙女アルト"})},children:['Add "',s(n),'" Snack']},n)})})},p=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["oval","grid","puff","dots"],children:n=>e.jsxs(o,{onClick:()=>{t({description:"人を本気で好きになるのは命がけなんだな。",loadingScheme:n,title:"ミハエル・ブラン"})},children:['Add "',s(n),'" Snack']},n)})})},m=()=>{const t=r({limit:10});return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:()=>t({description:"お前の恋は何処にある！",title:"クラン・クラン"}),children:"Show Notice"}),e.jsx(o,{onClick:()=>t({description:"お前の恋は何処にある！",limit:2,title:"クラン・クラン"}),children:"Show Notice with Option"})]})},h=()=>{const t=r({duration:1e4});return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:()=>t({description:"お前も、お前の夢も、俺が守る！",title:"オズマ・リー"}),children:"Show Notice"}),e.jsx(o,{onClick:()=>t({description:"お前も、お前の夢も、俺が守る！",duration:5e3,title:"オズマ・リー"}),children:"Show Notice with Option"})]})},C=()=>{const t=r({duration:null});return e.jsx(o,{onClick:()=>t({description:"覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",title:"シェリル・ノーム"}),children:"Show Notice"})},g=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["start-start","start-center","start-end","end-start","end-center","end-end"],children:n=>e.jsxs(o,{onClick:()=>t({description:"お前が、お前たちが俺の翼だ！",placement:n,title:"早乙女アルト"}),children:['Open "',n,'" Notice']},n)})})},S=()=>{const t=r();return e.jsxs(c,{gap:"md",children:[e.jsx(i,{each:["click","drag","button"],children:n=>e.jsxs(o,{onClick:()=>t({closeStrategy:n,description:"お前が、お前たちが俺の翼だ！",title:"早乙女アルト"}),children:[s(n)," Only"]},n)}),e.jsx(i,{each:[["click","drag"],["button","drag"]],children:n=>e.jsxs(o,{onClick:()=>t({closeStrategy:n,description:"お前が、お前たちが俺の翼だ！",title:"早乙女アルト"}),children:[s(n[0])," & ",s(n[1])]},n.join("-"))})]})},k=()=>{const t=r(),n=B.useRef(void 0),f=()=>{n.current=t({closable:!0,description:"お前が好きだ。",duration:3e4,title:"クラン・クラン"})},j=()=>{n.current&&t.close(n.current)},N=()=>{t.closeAll()};return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:f,children:"Show Notice"}),e.jsx(o,{onClick:j,children:"Close last Notice"}),e.jsx(o,{onClick:N,children:"Close all Notice"})]})},x=()=>{const t=r(),n=B.useRef(void 0),f=()=>{n.current=t({colorScheme:"orange",description:"チャンスは目の前にあるものよ。",duration:5e3,title:"シェリル・ノーム"})},j=()=>{n.current&&t.update(n.current,{colorScheme:"blue",description:"人生はワン･ツー･デカルチャー！！頑張れ、私。",duration:5e3,title:"ランカ・リー"})};return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:f,children:"Show Notice"}),e.jsx(o,{onClick:j,children:"Update last Notice"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Button onClick={() => notice({
    description: "私の歌を聴けー！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice({
    duration: null
  });
  return <Button onClick={() => notice({
    description: "覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};const U=["Basic","Variant","Status","ColorScheme","Loading","Limit","Duration","KeepStay","Placement","CloseStrategy","UseClose","UseUpdate"];export{a as Basic,S as CloseStrategy,u as ColorScheme,h as Duration,C as KeepStay,m as Limit,p as Loading,g as Placement,d as Status,k as UseClose,x as UseUpdate,l as Variant,U as __namedExportsOrder,b as default};
