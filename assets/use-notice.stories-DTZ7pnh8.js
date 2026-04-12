import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Mr as n,N as r,P as i,Wm as a,dm as o,im as s,jr as c,ml as l,nm as u,vi as d,wl as f,yi as p}from"./iframe-Opp2JRxh.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{m=t(a(),1),u(),l(),d(),r(),c(),h=s(),g={parameters:{layout:`centered`},title:`Hooks / useNotice`},_=()=>{let e=n();return(0,h.jsx)(f,{onClick:()=>e({description:`私の歌を聴けー！`,title:`シェリル・ノーム`}),children:`Show Notice`})},v=()=>{let e=n();return(0,h.jsx)(i,{gap:`md`,children:(0,h.jsx)(p,{each:[`plain`,`solid`,`subtle`,`surface`,`island`],children:t=>(0,h.jsxs)(f,{onClick:()=>{e({variant:t,description:`こんなサービス、滅多にしないんだからね！`,title:`シェリル・ノーム`,withIcon:t!==`island`})},children:[`Add "`,o(t),`" Snack`]},t)})})},y=()=>{let e=n();return(0,h.jsx)(i,{gap:`md`,children:(0,h.jsx)(p,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,h.jsxs)(f,{onClick:()=>{e({description:`皆抱きしめて！銀河の果てまで！`,status:t,title:`ランカ・リー`})},children:[`Add "`,o(t),`" Snack`]},t)})})},b=()=>{let e=n();return(0,h.jsx)(i,{gap:`md`,children:(0,h.jsx)(p,{each:[`info`,`success`,`warning`,`error`],children:t=>(0,h.jsxs)(f,{onClick:()=>{e({colorScheme:t,description:`人は１人じゃ飛べない。飛んじゃいけない。それが分かったから…`,title:`早乙女アルト`})},children:[`Add "`,o(t),`" Snack`]},t)})})},x=()=>{let e=n();return(0,h.jsx)(i,{gap:`md`,children:(0,h.jsx)(p,{each:[`oval`,`grid`,`puff`,`dots`],children:t=>(0,h.jsxs)(f,{onClick:()=>{e({description:`人を本気で好きになるのは命がけなんだな。`,loadingScheme:t,title:`ミハエル・ブラン`})},children:[`Add "`,o(t),`" Snack`]},t)})})},S=()=>{let e=n({limit:10});return(0,h.jsxs)(i,{gap:`md`,children:[(0,h.jsx)(f,{onClick:()=>e({description:`お前の恋は何処にある！`,title:`クラン・クラン`}),children:`Show Notice`}),(0,h.jsx)(f,{onClick:()=>e({description:`お前の恋は何処にある！`,limit:2,title:`クラン・クラン`}),children:`Show Notice with Option`})]})},C=()=>{let e=n({duration:1e4});return(0,h.jsxs)(i,{gap:`md`,children:[(0,h.jsx)(f,{onClick:()=>e({description:`お前も、お前の夢も、俺が守る！`,title:`オズマ・リー`}),children:`Show Notice`}),(0,h.jsx)(f,{onClick:()=>e({description:`お前も、お前の夢も、俺が守る！`,duration:5e3,title:`オズマ・リー`}),children:`Show Notice with Option`})]})},w=()=>{let e=n({duration:null});return(0,h.jsx)(f,{onClick:()=>e({description:`覚えておきなさい、こんなにいい女滅多にいないんだからねっ！`,title:`シェリル・ノーム`}),children:`Show Notice`})},T=()=>{let e=n();return(0,h.jsx)(i,{gap:`md`,children:(0,h.jsx)(p,{each:[`start-start`,`start-center`,`start-end`,`end-start`,`end-center`,`end-end`],children:t=>(0,h.jsxs)(f,{onClick:()=>e({description:`お前が、お前たちが俺の翼だ！`,placement:t,title:`早乙女アルト`}),children:[`Open "`,t,`" Notice`]},t)})})},E=()=>{let e=n();return(0,h.jsxs)(i,{gap:`md`,children:[(0,h.jsx)(p,{each:[`click`,`drag`,`button`],children:t=>(0,h.jsxs)(f,{onClick:()=>e({closeStrategy:t,description:`お前が、お前たちが俺の翼だ！`,title:`早乙女アルト`}),children:[o(t),` Only`]},t)}),(0,h.jsx)(p,{each:[[`click`,`drag`],[`button`,`drag`]],children:t=>(0,h.jsxs)(f,{onClick:()=>e({closeStrategy:t,description:`お前が、お前たちが俺の翼だ！`,title:`早乙女アルト`}),children:[o(t[0]),` & `,o(t[1])]},t.join(`-`))})]})},D=()=>{let e=n(),t=(0,m.useRef)(void 0);return(0,h.jsxs)(i,{gap:`md`,children:[(0,h.jsx)(f,{onClick:()=>{t.current=e({closable:!0,description:`お前が好きだ。`,duration:3e4,title:`クラン・クラン`})},children:`Show Notice`}),(0,h.jsx)(f,{onClick:()=>{t.current&&e.close(t.current)},children:`Close last Notice`}),(0,h.jsx)(f,{onClick:()=>{e.closeAll()},children:`Close all Notice`})]})},O=()=>{let e=n(),t=(0,m.useRef)(void 0);return(0,h.jsxs)(i,{gap:`md`,children:[(0,h.jsx)(f,{onClick:()=>{t.current=e({colorScheme:`orange`,description:`チャンスは目の前にあるものよ。`,duration:5e3,title:`シェリル・ノーム`})},children:`Show Notice`}),(0,h.jsx)(f,{onClick:()=>{t.current&&e.update(t.current,{colorScheme:`blue`,description:`人生はワン･ツー･デカルチャー！！頑張れ、私。`,duration:5e3,title:`ランカ・リー`})},children:`Update last Notice`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Button onClick={() => notice({
    description: "私の歌を聴けー！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const notice = useNotice({
    duration: null
  });
  return <Button onClick={() => notice({
    description: "覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k=[`Basic`,`Variant`,`Status`,`ColorScheme`,`Loading`,`Limit`,`Duration`,`KeepStay`,`Placement`,`CloseStrategy`,`UseClose`,`UseUpdate`]}))();export{_ as Basic,E as CloseStrategy,b as ColorScheme,C as Duration,w as KeepStay,S as Limit,x as Loading,T as Placement,y as Status,D as UseClose,O as UseUpdate,v as Variant,k as __namedExportsOrder,g as default};