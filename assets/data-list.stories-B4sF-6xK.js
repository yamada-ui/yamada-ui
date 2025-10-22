import{d as F,g as O,r as m,ab as w,ac as k,i as f,j as t,s as H,ad as V,ae as B,V as x}from"./iframe-CzLob2S8.js";import{P as W}from"./props-table-hh2sl1VL.js";import{S as j}from"./separator-DjzQzv29.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DcggJ69I.js";import"./grid-item-D2K3UNbQ.js";import"./for-CeSllMh9.js";import"./flex-C6MzWLZ8.js";import"./heading-Dcz9XRZZ.js";const A=F({base:{description:{},item:{},root:{display:"grid",w:"fit-content"},term:{}},props:{orientation:{horizontal:{item:{display:"contents"},root:{gridTemplateColumns:"repeat({--col}, auto)"}},vertical:{item:{display:"flex",flexDirection:"column",gap:"xs"},root:{gridTemplateColumns:"auto"}}}},variants:{bold:{description:{color:"fg.muted"},term:{fontWeight:"semibold"}},grid:{root:{borderWidth:"1px",gap:"0",rounded:"l2"},term:{color:"fg.muted"}},subtle:{term:{color:"fg.muted"}}},sizes:{sm:{root:{fontSize:"xs",gap:"2"}},md:{root:{fontSize:"sm",gap:"4"}},lg:{root:{fontSize:"md",gap:"6"}}},compounds:[{css:{item:{_notFirst:{_child:{borderTopWidth:"1px"}},_notFirstChild:{borderLeftWidth:"1px"}}},variant:"grid",orientation:"horizontal"},{css:{item:{gap:"0",_notFirst:{borderTopWidth:"1px"},_notFirstChild:{borderTopWidth:"1px"}}},variant:"grid",orientation:"vertical"},{css:{description:{lineHeight:"shorter",px:"2",py:"1"},term:{lineHeight:"shorter",px:"2",py:"1"}},size:"sm",variant:"grid"},{css:{description:{lineHeight:"shorter",px:"3",py:"2"},term:{lineHeight:"shorter",px:"3",py:"2"}},size:"md",variant:"grid"},{css:{description:{lineHeight:"moderate",px:"4",py:"3"},term:{lineHeight:"moderate",px:"4",py:"3"}},size:"lg",variant:"grid"}],defaultProps:{size:"md",variant:"subtle",orientation:"horizontal"}}),{ComponentContext:q,useComponentContext:G,withContext:_,withProvider:J}=O("data-list",A),r=J(({style:n,children:o,items:c=[],descriptionProps:p,termProps:L,...y})=>{const u=m.useMemo(()=>{let d=0;if(o){const D=w(o);k(D,s).forEach(({props:l})=>{const h=w(l.children),E=k(h,i,e);d=Math.max(d,E.length)})}else c.forEach(({description:D,term:a})=>{const l=a?f(a)?a.length:1:0,h=D?f(D)?D.length:1:0;d=Math.max(d,l+h)});return d},[o,c]),T=m.useMemo(()=>c.map((d,D)=>t.jsx(s,{...d},D)),[c]),z=m.useMemo(()=>({descriptionProps:p,termProps:L}),[p,L]);return t.jsx(q,{value:z,children:t.jsx(H.dl,{style:{"--col":u,...n},...y,children:o??T})})},"root")(),s=_(({children:n,description:o,term:c,descriptionProps:p,termProps:L,...y})=>{const{descriptionProps:u,termProps:T}=G(),[z,d,D]=m.useMemo(()=>{const a=w(n);if(V(a))return[n];const l=k(a,i),h=k(a,e);return[B(a,i,e),l,h]},[n]);return t.jsxs(H.div,{...y,children:[V(d)?f(c)?c.map((a,l)=>t.jsx(i,{...T,...L,children:a},l)):t.jsx(i,{...T,...L,children:c}):d,V(D)?f(o)?o.map((a,l)=>t.jsx(e,{...u,...p,children:a},l)):t.jsx(e,{...u,...p,children:o}):D,z]})},"item")(),i=_("dt","term")(),e=_("dd","description")(),it={component:r,title:"Components / DataList"},I=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsx(r,{items:n})},g=()=>t.jsxs(r,{children:[t.jsxs(s,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(e,{children:"入れ替わりの魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(e,{children:"虜の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(e,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(e,{children:"未来視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(e,{children:"過去視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(e,{children:"透明の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(e,{children:"記憶操作の魔女"})]})]}),S=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsx(W,{variant:"stack",columns:["subtle","bold","grid"],rows:["horizontal","vertical"],children:(o,c,p)=>t.jsx(r,{variant:o,items:n,orientation:c},p)})},v=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsx(W,{variant:"stack",columns:["sm","md","lg"],rows:["horizontal","vertical"],children:(o,c,p)=>t.jsx(r,{size:o,items:n,orientation:c},p)})},C=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(x,{separator:t.jsx(j,{}),children:[t.jsx(r,{items:n,orientation:"horizontal"}),t.jsx(r,{items:n,orientation:"vertical"})]})},R=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:["白石うらら","清集院桃子"]},{description:"虜の魔女",term:["小田切寧々","紺野つばさ"]},{description:"思念（テレパシー）の魔女",term:["大塚芽子","萌黄ことり"]},{description:"未来視の魔女",term:["猿島マリア","筑紫愛子"]},{description:"過去視の魔女",term:["滝川ノア","姫川そら"]},{description:"透明の魔女",term:["飛鳥美琴","菊池アカネ"]},{description:"記憶操作の魔女",term:["西園寺リカ","虹野晴子"]}],[]);return t.jsxs(x,{separator:t.jsx(j,{}),children:[t.jsx(r,{items:n}),t.jsxs(r,{orientation:"vertical",children:[t.jsxs(s,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(i,{children:"清集院桃子"}),t.jsx(e,{children:"入れ替わりの魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(i,{children:"紺野つばさ"}),t.jsx(e,{children:"虜の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(i,{children:"萌黄ことり"}),t.jsx(e,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(i,{children:"筑紫愛子"}),t.jsx(e,{children:"未来視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(i,{children:"姫川そら"}),t.jsx(e,{children:"過去視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(i,{children:"菊池アカネ"}),t.jsx(e,{children:"透明の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(i,{children:"虹野晴子"}),t.jsx(e,{children:"記憶操作の魔女"})]})]})]})},b=()=>{const n=m.useMemo(()=>[{description:["入れ替わりの魔女","絶望的味覚音痴"],term:"白石うらら"},{description:["虜の魔女","得意教科は自称全教科"],term:"小田切寧々"},{description:["思念（テレパシー）の魔女","若干腐女子の気がある"],term:"大塚芽子"},{description:["未来視の魔女","服のセンスが独特な弟がいる"],term:"猿島マリア"},{description:["過去視の魔女","数々の問題を起こしている"],term:"滝川ノア"},{description:["透明の魔女","サディストの気がある"],term:"飛鳥美琴"},{description:["記憶操作の魔女","学校でもノーパンで過ごしている"],term:"西園寺リカ"}],[]);return t.jsxs(x,{separator:t.jsx(j,{}),children:[t.jsx(r,{items:n}),t.jsxs(r,{orientation:"vertical",children:[t.jsxs(s,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(e,{children:"入れ替わりの魔女"}),t.jsx(e,{children:"絶望的味覚音痴"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(e,{children:"虜の魔女"}),t.jsx(e,{children:"得意教科は自称全教科"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(e,{children:"思念（テレパシー）の魔女"}),t.jsx(e,{children:"若干腐女子の気がある"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(e,{children:"未来視の魔女"}),t.jsx(e,{children:"服のセンスが独特な弟がいる"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(e,{children:"過去視の魔女"}),t.jsx(e,{children:"数々の問題を起こしている"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(e,{children:"透明の魔女"}),t.jsx(e,{children:"サディストの気がある"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(e,{children:"記憶操作の魔女"}),t.jsx(e,{children:"学校でもノーパンで過ごしている"})]})]})]})},M=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら",termProps:{color:"blue"}},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(x,{separator:t.jsx(j,{}),children:[t.jsx(r,{items:n,termProps:{textDecoration:"line-through"}}),t.jsxs(r,{children:[t.jsxs(s,{children:[t.jsx(i,{color:"blue",children:"白石うらら"}),t.jsx(e,{children:"入れ替わりの魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(e,{children:"虜の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(e,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(e,{children:"未来視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(e,{children:"過去視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(e,{children:"透明の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(e,{children:"記憶操作の魔女"})]})]})]})},P=()=>{const n=m.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら",descriptionProps:{color:"blue"}},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(x,{separator:t.jsx(j,{}),children:[t.jsx(r,{items:n,descriptionProps:{textDecoration:"line-through"}}),t.jsxs(r,{children:[t.jsxs(s,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(e,{color:"blue",children:"入れ替わりの魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(e,{children:"虜の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(e,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(e,{children:"未来視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(e,{children:"過去視の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(e,{children:"透明の魔女"})]}),t.jsxs(s,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(e,{children:"記憶操作の魔女"})]})]})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら"
  }, {
    description: "虜の魔女",
    term: "小田切寧々"
  }, {
    description: "思念（テレパシー）の魔女",
    term: "大塚芽子"
  }, {
    description: "未来視の魔女",
    term: "猿島マリア"
  }, {
    description: "過去視の魔女",
    term: "滝川ノア"
  }, {
    description: "透明の魔女",
    term: "飛鳥美琴"
  }, {
    description: "記憶操作の魔女",
    term: "西園寺リカ"
  }], []);
  return <DataList.Root items={items} />;
}`,...I.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <DataList.Root>
      <DataList.Item>
        <DataList.Term>白石うらら</DataList.Term>
        <DataList.Description>入れ替わりの魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>小田切寧々</DataList.Term>
        <DataList.Description>虜の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>大塚芽子</DataList.Term>
        <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>猿島マリア</DataList.Term>
        <DataList.Description>未来視の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>滝川ノア</DataList.Term>
        <DataList.Description>過去視の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>飛鳥美琴</DataList.Term>
        <DataList.Description>透明の魔女</DataList.Description>
      </DataList.Item>

      <DataList.Item>
        <DataList.Term>西園寺リカ</DataList.Term>
        <DataList.Description>記憶操作の魔女</DataList.Description>
      </DataList.Item>
    </DataList.Root>;
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら"
  }, {
    description: "虜の魔女",
    term: "小田切寧々"
  }, {
    description: "思念（テレパシー）の魔女",
    term: "大塚芽子"
  }, {
    description: "未来視の魔女",
    term: "猿島マリア"
  }, {
    description: "過去視の魔女",
    term: "滝川ノア"
  }, {
    description: "透明の魔女",
    term: "飛鳥美琴"
  }, {
    description: "記憶操作の魔女",
    term: "西園寺リカ"
  }], []);
  return <PropsTable variant="stack" columns={["subtle", "bold", "grid"]} rows={["horizontal", "vertical"]}>
      {(column, row, key) => {
      return <DataList.Root key={key} variant={column} items={items} orientation={row} />;
    }}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら"
  }, {
    description: "虜の魔女",
    term: "小田切寧々"
  }, {
    description: "思念（テレパシー）の魔女",
    term: "大塚芽子"
  }, {
    description: "未来視の魔女",
    term: "猿島マリア"
  }, {
    description: "過去視の魔女",
    term: "滝川ノア"
  }, {
    description: "透明の魔女",
    term: "飛鳥美琴"
  }, {
    description: "記憶操作の魔女",
    term: "西園寺リカ"
  }], []);
  return <PropsTable variant="stack" columns={["sm", "md", "lg"]} rows={["horizontal", "vertical"]}>
      {(column, row, key) => {
      return <DataList.Root key={key} size={column} items={items} orientation={row} />;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら"
  }, {
    description: "虜の魔女",
    term: "小田切寧々"
  }, {
    description: "思念（テレパシー）の魔女",
    term: "大塚芽子"
  }, {
    description: "未来視の魔女",
    term: "猿島マリア"
  }, {
    description: "過去視の魔女",
    term: "滝川ノア"
  }, {
    description: "透明の魔女",
    term: "飛鳥美琴"
  }, {
    description: "記憶操作の魔女",
    term: "西園寺リカ"
  }], []);
  return <VStack separator={<Separator />}>
      <DataList.Root items={items} orientation="horizontal" />
      <DataList.Root items={items} orientation="vertical" />
    </VStack>;
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: ["白石うらら", "清集院桃子"]
  }, {
    description: "虜の魔女",
    term: ["小田切寧々", "紺野つばさ"]
  }, {
    description: "思念（テレパシー）の魔女",
    term: ["大塚芽子", "萌黄ことり"]
  }, {
    description: "未来視の魔女",
    term: ["猿島マリア", "筑紫愛子"]
  }, {
    description: "過去視の魔女",
    term: ["滝川ノア", "姫川そら"]
  }, {
    description: "透明の魔女",
    term: ["飛鳥美琴", "菊池アカネ"]
  }, {
    description: "記憶操作の魔女",
    term: ["西園寺リカ", "虹野晴子"]
  }], []);
  return <VStack separator={<Separator />}>
      <DataList.Root items={items} />

      <DataList.Root orientation="vertical">
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Term>清集院桃子</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Term>紺野つばさ</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Term>萌黄ことり</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Term>筑紫愛子</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Term>姫川そら</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Term>菊池アカネ</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Term>虹野晴子</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>;
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: ["入れ替わりの魔女", "絶望的味覚音痴"],
    term: "白石うらら"
  }, {
    description: ["虜の魔女", "得意教科は自称全教科"],
    term: "小田切寧々"
  }, {
    description: ["思念（テレパシー）の魔女", "若干腐女子の気がある"],
    term: "大塚芽子"
  }, {
    description: ["未来視の魔女", "服のセンスが独特な弟がいる"],
    term: "猿島マリア"
  }, {
    description: ["過去視の魔女", "数々の問題を起こしている"],
    term: "滝川ノア"
  }, {
    description: ["透明の魔女", "サディストの気がある"],
    term: "飛鳥美琴"
  }, {
    description: ["記憶操作の魔女", "学校でもノーパンで過ごしている"],
    term: "西園寺リカ"
  }], []);
  return <VStack separator={<Separator />}>
      <DataList.Root items={items} />

      <DataList.Root orientation="vertical">
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
          <DataList.Description>絶望的味覚音痴</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
          <DataList.Description>得意教科は自称全教科</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
          <DataList.Description>若干腐女子の気がある</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
          <DataList.Description>
            服のセンスが独特な弟がいる
          </DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
          <DataList.Description>数々の問題を起こしている</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
          <DataList.Description>サディストの気がある</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
          <DataList.Description>
            学校でもノーパンで過ごしている
          </DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>;
}`,...b.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら",
    termProps: {
      color: "blue"
    }
  }, {
    description: "虜の魔女",
    term: "小田切寧々"
  }, {
    description: "思念（テレパシー）の魔女",
    term: "大塚芽子"
  }, {
    description: "未来視の魔女",
    term: "猿島マリア"
  }, {
    description: "過去視の魔女",
    term: "滝川ノア"
  }, {
    description: "透明の魔女",
    term: "飛鳥美琴"
  }, {
    description: "記憶操作の魔女",
    term: "西園寺リカ"
  }], []);
  return <VStack separator={<Separator />}>
      <DataList.Root items={items} termProps={{
      textDecoration: "line-through"
    }} />

      <DataList.Root>
        <DataList.Item>
          <DataList.Term color="blue">白石うらら</DataList.Term>
          <DataList.Description>入れ替わりの魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>;
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<DataList.RootProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら",
    descriptionProps: {
      color: "blue"
    }
  }, {
    description: "虜の魔女",
    term: "小田切寧々"
  }, {
    description: "思念（テレパシー）の魔女",
    term: "大塚芽子"
  }, {
    description: "未来視の魔女",
    term: "猿島マリア"
  }, {
    description: "過去視の魔女",
    term: "滝川ノア"
  }, {
    description: "透明の魔女",
    term: "飛鳥美琴"
  }, {
    description: "記憶操作の魔女",
    term: "西園寺リカ"
  }], []);
  return <VStack separator={<Separator />}>
      <DataList.Root items={items} descriptionProps={{
      textDecoration: "line-through"
    }} />

      <DataList.Root>
        <DataList.Item>
          <DataList.Term>白石うらら</DataList.Term>
          <DataList.Description color="blue">
            入れ替わりの魔女
          </DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>小田切寧々</DataList.Term>
          <DataList.Description>虜の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>大塚芽子</DataList.Term>
          <DataList.Description>思念（テレパシー）の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>猿島マリア</DataList.Term>
          <DataList.Description>未来視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>滝川ノア</DataList.Term>
          <DataList.Description>過去視の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>飛鳥美琴</DataList.Term>
          <DataList.Description>透明の魔女</DataList.Description>
        </DataList.Item>

        <DataList.Item>
          <DataList.Term>西園寺リカ</DataList.Term>
          <DataList.Description>記憶操作の魔女</DataList.Description>
        </DataList.Item>
      </DataList.Root>
    </VStack>;
}`,...P.parameters?.docs?.source}}};const et=["Basic","Children","Variant","Size","Orientation","MultipleTerms","MultipleDescriptions","CustomTerm","CustomDescription"];export{I as Basic,g as Children,P as CustomDescription,M as CustomTerm,b as MultipleDescriptions,R as MultipleTerms,C as Orientation,v as Size,S as Variant,et as __namedExportsOrder,it as default};
