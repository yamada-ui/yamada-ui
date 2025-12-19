import{j as e,Q as o,P as s,r as rn}from"./iframe-D_HYglKf.js";import{u as r}from"./use-notice-VZvC4i_t.js";import{W as c}from"./wrap-J2MLo2sY.js";import{F as i}from"./for-B7ME2eWM.js";import"./preload-helper-C1FmrZbK.js";import"./flex-DmJewv6f.js";const mn={parameters:{layout:"centered"},title:"Hooks / useNotice"},a=()=>{const t=r();return e.jsx(o,{onClick:()=>t({description:"私の歌を聴けー！",title:"シェリル・ノーム"}),children:"Show Notice"})},l=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["plain","solid","subtle","surface","island"],children:n=>e.jsxs(o,{onClick:()=>{t({variant:n,description:"こんなサービス、滅多にしないんだからね！",title:"シェリル・ノーム",withIcon:n!=="island"})},children:['Add "',s(n),'" Snack']},n)})})},d=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["info","success","warning","error"],children:n=>e.jsxs(o,{onClick:()=>{t({description:"皆抱きしめて！銀河の果てまで！",status:n,title:"ランカ・リー"})},children:['Add "',s(n),'" Snack']},n)})})},u=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["info","success","warning","error"],children:n=>e.jsxs(o,{onClick:()=>{t({colorScheme:n,description:"人は１人じゃ飛べない。飛んじゃいけない。それが分かったから…",title:"早乙女アルト"})},children:['Add "',s(n),'" Snack']},n)})})},p=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["oval","grid","puff","dots"],children:n=>e.jsxs(o,{onClick:()=>{t({description:"人を本気で好きになるのは命がけなんだな。",loadingScheme:n,title:"ミハエル・ブラン"})},children:['Add "',s(n),'" Snack']},n)})})},m=()=>{const t=r({limit:10});return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:()=>t({description:"お前の恋は何処にある！",title:"クラン・クラン"}),children:"Show Notice"}),e.jsx(o,{onClick:()=>t({description:"お前の恋は何処にある！",limit:2,title:"クラン・クラン"}),children:"Show Notice with Option"})]})},h=()=>{const t=r({duration:1e4});return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:()=>t({description:"お前も、お前の夢も、俺が守る！",title:"オズマ・リー"}),children:"Show Notice"}),e.jsx(o,{onClick:()=>t({description:"お前も、お前の夢も、俺が守る！",duration:5e3,title:"オズマ・リー"}),children:"Show Notice with Option"})]})},C=()=>{const t=r({duration:null});return e.jsx(o,{onClick:()=>t({description:"覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",title:"シェリル・ノーム"}),children:"Show Notice"})},g=()=>{const t=r();return e.jsx(c,{gap:"md",children:e.jsx(i,{each:["start-start","start-center","start-end","end-start","end-center","end-end"],children:n=>e.jsxs(o,{onClick:()=>t({description:"お前が、お前たちが俺の翼だ！",placement:n,title:"早乙女アルト"}),children:['Open "',n,'" Notice']},n)})})},S=()=>{const t=r();return e.jsxs(c,{gap:"md",children:[e.jsx(i,{each:["click","drag","button"],children:n=>e.jsxs(o,{onClick:()=>t({closeStrategy:n,description:"お前が、お前たちが俺の翼だ！",title:"早乙女アルト"}),children:[s(n)," Only"]},n)}),e.jsx(i,{each:[["click","drag"],["button","drag"]],children:n=>e.jsxs(o,{onClick:()=>t({closeStrategy:n,description:"お前が、お前たちが俺の翼だ！",title:"早乙女アルト"}),children:[s(n[0])," & ",s(n[1])]},n.join("-"))})]})},k=()=>{const t=r(),n=rn.useRef(void 0),f=()=>{n.current=t({closable:!0,description:"お前が好きだ。",duration:3e4,title:"クラン・クラン"})},j=()=>{n.current&&t.close(n.current)},cn=()=>{t.closeAll()};return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:f,children:"Show Notice"}),e.jsx(o,{onClick:j,children:"Close last Notice"}),e.jsx(o,{onClick:cn,children:"Close all Notice"})]})},x=()=>{const t=r(),n=rn.useRef(void 0),f=()=>{n.current=t({colorScheme:"orange",description:"チャンスは目の前にあるものよ。",duration:5e3,title:"シェリル・ノーム"})},j=()=>{n.current&&t.update(n.current,{colorScheme:"blue",description:"人生はワン･ツー･デカルチャー！！頑張れ、私。",duration:5e3,title:"ランカ・リー"})};return e.jsxs(c,{gap:"md",children:[e.jsx(o,{onClick:f,children:"Show Notice"}),e.jsx(o,{onClick:j,children:"Update last Notice"})]})};var B,N,w;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const notice = useNotice();
  return <Button onClick={() => notice({
    description: "私の歌を聴けー！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...(w=(N=a.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var W,y,F;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(F=(y=l.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var O,A,b;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(b=(A=d.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var U,T,v;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(v=(T=u.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var R,L,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var P,D,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var K,V,_;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(_=(V=h.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,Q,q;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const notice = useNotice({
    duration: null
  });
  return <Button onClick={() => notice({
    description: "覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",
    title: "シェリル・ノーム"
  })}>
      Show Notice
    </Button>;
}`,...(q=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};var z,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var M,X,Y;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,nn;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(nn=($=k.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};var en,tn,on;x.parameters={...x.parameters,docs:{...(en=x.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(on=(tn=x.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};const hn=["Basic","Variant","Status","ColorScheme","Loading","Limit","Duration","KeepStay","Placement","CloseStrategy","UseClose","UseUpdate"];export{a as Basic,S as CloseStrategy,u as ColorScheme,h as Duration,C as KeepStay,m as Limit,p as Loading,g as Placement,d as Status,k as UseClose,x as UseUpdate,l as Variant,hn as __namedExportsOrder,mn as default};
