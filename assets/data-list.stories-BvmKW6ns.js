import{j as t}from"./jsx-runtime-BpbtHYHY.js";import{r as c}from"./index-BwPxMuoB.js";import{p as J,Q as g,o as Tt,B as It,b as O,d as A,c as R,g as gt,ac as K,a6 as G,a7 as _t}from"./factory-B_KMcXyW.js";import{f as k}from"./forward-ref-Ukjd1cIW.js";import{a as vt}from"./use-component-style-65RA3nVD.js";import{o as St}from"./theme-provider-DGyR61Aa.js";import{m as Mt}from"./use-var-Tj-aA0qb.js";import{S as a}from"./separator-ste5c8CF.js";import"./_commonjsHelpers-Cpj98o6Y.js";const[Pt,H]=It({name:"DataListContext",errorMessage:`useDataListContext returned is 'undefined'. Seems you forgot to wrap the components in "<DataList />"`}),r=k((n,p)=>{var I;const[o,{variant:m,...L}]=vt("DataList",n),{className:l,children:x,col:u,items:j=[],orientation:v="horizontal",vars:B,descriptionProps:S,termProps:M,...T}=St(L),[P,y]=c.useState(()=>{if(J(u))return u;let D=0;return j.forEach(({description:d,term:h})=>{const U=h?g(h)?h.length:1:0,q=d?g(d)?d.length:1:0;D=Math.max(D,U+q)}),D}),f=m==="grid",Q=c.useMemo(()=>j.map((D,d)=>t.jsx(e,{...D},d)),[j]),_={...o.container,vars:Mt(B,(I=o.container)==null?void 0:I.vars,[{name:"col",value:P}])};return Tt(()=>{if(J(u))return;let D=0;j.forEach(({description:d,term:h})=>{const U=h?g(h)?h.length:1:0,q=d?g(d)?d.length:1:0;D=Math.max(D,U+q)}),y(D)},[j,u]),t.jsx(Pt,{value:{grid:f,orientation:v,styles:o,descriptionProps:S,termProps:M},children:t.jsx(O.dl,{ref:p,className:R("ui-data-list",l),"data-grid":A(f),"data-orientation":v,__css:_,...T,children:x??Q})})});r.displayName="DataList";r.__ui__="DataList";const e=k(({className:n,children:p,description:o,term:m,descriptionProps:L,termProps:l,...x},u)=>{const{grid:j,orientation:v,styles:B,descriptionProps:S,termProps:M}=H(),T=gt(p),P=K(T,i),y=K(T,s),f=G(T)?p:_t(T,i,s),Q={...B.item};return t.jsxs(O.div,{ref:u,className:R("ui-data-list__item",n),"data-grid":A(j),"data-orientation":v,__css:Q,...x,children:[G(P)?g(m)?m.map((_,I)=>t.jsx(i,{...M,...l,children:_},I)):t.jsx(i,{...M,...l,children:m}):P,G(y)?g(o)?o.map((_,I)=>t.jsx(s,{...S,...L,children:_},I)):t.jsx(s,{...S,...L,children:o}):y,f]})});e.displayName="DataListItem";e.__ui__="DataListItem";const i=k(({className:n,...p},o)=>{const{grid:m,orientation:L,styles:l}=H(),x={...l.term};return t.jsx(O.dt,{ref:o,className:R("ui-data-list__term",n),"data-grid":A(m),"data-orientation":L,__css:x,...p})});i.displayName="DataListTerm";i.__ui__="DataListTerm";const s=k(({className:n,...p},o)=>{const{grid:m,orientation:L,styles:l}=H(),x={...l.description};return t.jsx(O.dd,{ref:o,className:R("ui-data-list__description",n),"data-grid":A(m),"data-orientation":L,__css:x,...p})});s.displayName="DataListDescription";s.__ui__="DataListDescription";const Vt={component:r,title:"Components / Data Display / DataList"},z=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{items:n}),t.jsx(a,{}),t.jsxs(r,{col:2,children:[t.jsxs(e,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(s,{children:"入れ替わりの魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(s,{children:"虜の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(s,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(s,{children:"未来視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(s,{children:"過去視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(s,{children:"透明の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(s,{children:"記憶操作の魔女"})]})]})]})},C=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{size:"sm",items:n}),t.jsx(a,{}),t.jsx(r,{size:"md",items:n}),t.jsx(a,{}),t.jsx(r,{size:"lg",items:n}),t.jsx(a,{}),t.jsx(r,{size:"sm",items:n,orientation:"vertical"}),t.jsx(a,{}),t.jsx(r,{size:"md",items:n,orientation:"vertical"}),t.jsx(a,{}),t.jsx(r,{size:"lg",items:n,orientation:"vertical"})]})},N=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{variant:"subtle",items:n}),t.jsx(a,{}),t.jsx(r,{variant:"bold",items:n}),t.jsx(a,{}),t.jsx(r,{variant:"grid",items:n})]})},b=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら"},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{items:n,orientation:"horizontal"}),t.jsx(a,{}),t.jsx(r,{items:n,orientation:"vertical"})]})},w=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:["白石うらら","清集院桃子"]},{description:"虜の魔女",term:["小田切寧々","紺野つばさ"]},{description:"思念（テレパシー）の魔女",term:["大塚芽子","萌黄ことり"]},{description:"未来視の魔女",term:["猿島マリア","筑紫愛子"]},{description:"過去視の魔女",term:["滝川ノア","姫川そら"]},{description:"透明の魔女",term:["飛鳥美琴","菊池アカネ"]},{description:"記憶操作の魔女",term:["西園寺リカ","虹野晴子"]}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{items:n}),t.jsx(a,{}),t.jsxs(r,{orientation:"vertical",children:[t.jsxs(e,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(i,{children:"清集院桃子"}),t.jsx(s,{children:"入れ替わりの魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(i,{children:"紺野つばさ"}),t.jsx(s,{children:"虜の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(i,{children:"萌黄ことり"}),t.jsx(s,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(i,{children:"筑紫愛子"}),t.jsx(s,{children:"未来視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(i,{children:"姫川そら"}),t.jsx(s,{children:"過去視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(i,{children:"菊池アカネ"}),t.jsx(s,{children:"透明の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(i,{children:"虹野晴子"}),t.jsx(s,{children:"記憶操作の魔女"})]})]})]})},F=()=>{const n=c.useMemo(()=>[{description:["入れ替わりの魔女","絶望的味覚音痴"],term:"白石うらら"},{description:["虜の魔女","得意教科は自称全教科"],term:"小田切寧々"},{description:["思念（テレパシー）の魔女","若干腐女子の気がある"],term:"大塚芽子"},{description:["未来視の魔女","服のセンスが独特な弟がいる"],term:"猿島マリア"},{description:["過去視の魔女","数々の問題を起こしている"],term:"滝川ノア"},{description:["透明の魔女","サディストの気がある"],term:"飛鳥美琴"},{description:["記憶操作の魔女","学校でもノーパンで過ごしている"],term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{items:n}),t.jsx(a,{}),t.jsxs(r,{orientation:"vertical",children:[t.jsxs(e,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(s,{children:"入れ替わりの魔女"}),t.jsx(s,{children:"絶望的味覚音痴"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(s,{children:"虜の魔女"}),t.jsx(s,{children:"得意教科は自称全教科"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(s,{children:"思念（テレパシー）の魔女"}),t.jsx(s,{children:"若干腐女子の気がある"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(s,{children:"未来視の魔女"}),t.jsx(s,{children:"服のセンスが独特な弟がいる"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(s,{children:"過去視の魔女"}),t.jsx(s,{children:"数々の問題を起こしている"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(s,{children:"透明の魔女"}),t.jsx(s,{children:"サディストの気がある"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(s,{children:"記憶操作の魔女"}),t.jsx(s,{children:"学校でもノーパンで過ごしている"})]})]})]})},E=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら",termProps:{color:"primary"}},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{items:n,termProps:{textDecoration:"line-through"}}),t.jsx(a,{}),t.jsxs(r,{col:2,children:[t.jsxs(e,{children:[t.jsx(i,{color:"primary",children:"白石うらら"}),t.jsx(s,{children:"入れ替わりの魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(s,{children:"虜の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(s,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(s,{children:"未来視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(s,{children:"過去視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(s,{children:"透明の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(s,{children:"記憶操作の魔女"})]})]})]})},V=()=>{const n=c.useMemo(()=>[{description:"入れ替わりの魔女",term:"白石うらら",descriptionProps:{color:"primary"}},{description:"虜の魔女",term:"小田切寧々"},{description:"思念（テレパシー）の魔女",term:"大塚芽子"},{description:"未来視の魔女",term:"猿島マリア"},{description:"過去視の魔女",term:"滝川ノア"},{description:"透明の魔女",term:"飛鳥美琴"},{description:"記憶操作の魔女",term:"西園寺リカ"}],[]);return t.jsxs(t.Fragment,{children:[t.jsx(r,{items:n,descriptionProps:{textDecoration:"line-through"}}),t.jsx(a,{}),t.jsxs(r,{col:2,children:[t.jsxs(e,{children:[t.jsx(i,{children:"白石うらら"}),t.jsx(s,{color:"primary",children:"入れ替わりの魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"小田切寧々"}),t.jsx(s,{children:"虜の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"大塚芽子"}),t.jsx(s,{children:"思念（テレパシー）の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"猿島マリア"}),t.jsx(s,{children:"未来視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"滝川ノア"}),t.jsx(s,{children:"過去視の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"飛鳥美琴"}),t.jsx(s,{children:"透明の魔女"})]}),t.jsxs(e,{children:[t.jsx(i,{children:"西園寺リカ"}),t.jsx(s,{children:"記憶操作の魔女"})]})]})]})};var W,X,Y;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
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
  return <>
      <DataList items={items} />

      <Separator />

      <DataList col={2}>
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>;
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
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
  return <>
      <DataList size="sm" items={items} />

      <Separator />

      <DataList size="md" items={items} />

      <Separator />

      <DataList size="lg" items={items} />

      <Separator />

      <DataList size="sm" items={items} orientation="vertical" />

      <Separator />

      <DataList size="md" items={items} orientation="vertical" />

      <Separator />

      <DataList size="lg" items={items} orientation="vertical" />
    </>;
}`,...(tt=($=C.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var it,st,et;N.parameters={...N.parameters,docs:{...(it=N.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
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
  return <>
      <DataList variant="subtle" items={items} />

      <Separator />

      <DataList variant="bold" items={items} />

      <Separator />

      <DataList variant="grid" items={items} />
    </>;
}`,...(et=(st=N.parameters)==null?void 0:st.docs)==null?void 0:et.source}}};var nt,rt,at;b.parameters={...b.parameters,docs:{...(nt=b.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
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
  return <>
      <DataList items={items} orientation="horizontal" />

      <Separator />

      <DataList items={items} orientation="vertical" />
    </>;
}`,...(at=(rt=b.parameters)==null?void 0:rt.docs)==null?void 0:at.source}}};var ot,ct,mt;w.parameters={...w.parameters,docs:{...(ot=w.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
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
  return <>
      <DataList items={items} />

      <Separator />

      <DataList orientation="vertical">
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListTerm>清集院桃子</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListTerm>紺野つばさ</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListTerm>萌黄ことり</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListTerm>筑紫愛子</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListTerm>姫川そら</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListTerm>菊池アカネ</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListTerm>虹野晴子</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>;
}`,...(mt=(ct=w.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var Dt,dt,pt;F.parameters={...F.parameters,docs:{...(Dt=F.parameters)==null?void 0:Dt.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
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
  return <>
      <DataList items={items} />

      <Separator />

      <DataList orientation="vertical">
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
          <DataListDescription>絶望的味覚音痴</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
          <DataListDescription>得意教科は自称全教科</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
          <DataListDescription>若干腐女子の気がある</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
          <DataListDescription>服のセンスが独特な弟がいる</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
          <DataListDescription>数々の問題を起こしている</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
          <DataListDescription>サディストの気がある</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
          <DataListDescription>
            学校でもノーパンで過ごしている
          </DataListDescription>
        </DataListItem>
      </DataList>
    </>;
}`,...(pt=(dt=F.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var Lt,lt,xt;E.parameters={...E.parameters,docs:{...(Lt=E.parameters)==null?void 0:Lt.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら",
    termProps: {
      color: "primary"
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
  return <>
      <DataList items={items} termProps={{
      textDecoration: "line-through"
    }} />

      <Separator />

      <DataList col={2}>
        <DataListItem>
          <DataListTerm color="primary">白石うらら</DataListTerm>
          <DataListDescription>入れ替わりの魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>;
}`,...(xt=(lt=E.parameters)==null?void 0:lt.docs)==null?void 0:xt.source}}};var jt,ht,ut;V.parameters={...V.parameters,docs:{...(jt=V.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  const items = useMemo<DataListProps["items"]>(() => [{
    description: "入れ替わりの魔女",
    term: "白石うらら",
    descriptionProps: {
      color: "primary"
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
  return <>
      <DataList items={items} descriptionProps={{
      textDecoration: "line-through"
    }} />

      <Separator />

      <DataList col={2}>
        <DataListItem>
          <DataListTerm>白石うらら</DataListTerm>
          <DataListDescription color="primary">
            入れ替わりの魔女
          </DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>小田切寧々</DataListTerm>
          <DataListDescription>虜の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>大塚芽子</DataListTerm>
          <DataListDescription>思念（テレパシー）の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>猿島マリア</DataListTerm>
          <DataListDescription>未来視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>滝川ノア</DataListTerm>
          <DataListDescription>過去視の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>飛鳥美琴</DataListTerm>
          <DataListDescription>透明の魔女</DataListDescription>
        </DataListItem>

        <DataListItem>
          <DataListTerm>西園寺リカ</DataListTerm>
          <DataListDescription>記憶操作の魔女</DataListDescription>
        </DataListItem>
      </DataList>
    </>;
}`,...(ut=(ht=V.parameters)==null?void 0:ht.docs)==null?void 0:ut.source}}};const Ot=["basic","withSize","withVariant","withOrientation","useMultipleTerms","useMultipleDescriptions","customTerm","customDescription"];export{Ot as __namedExportsOrder,z as basic,V as customDescription,E as customTerm,Vt as default,F as useMultipleDescriptions,w as useMultipleTerms,b as withOrientation,C as withSize,N as withVariant};
