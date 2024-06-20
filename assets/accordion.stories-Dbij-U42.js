import{j as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as m}from"./index-BwDkhjyp.js";import{u as Ku}from"./index-Cyz1ja4J.js";import{c as Ru}from"./index-BQSFCjm-.js";import{l as ku,s as z,b as P,c as w,a as Uu,d as qu,h as U,t as zu,x as Z,a3 as Ju,a4 as Qu,y as Wu}from"./factory-DqlmaKnk.js";import{f as K}from"./forward-ref-BmTAT9U5.js";import{a as Xu}from"./use-component-style-C3e1SZSW.js";import{o as Yu}from"./theme-provider-DKpED47L.js";import{c as Zu}from"./icon-BWDJazoz.js";import{C as $u}from"./collapse-DnpXErm5.js";import{M as $}from"./minus-DhyYctmi.js";import{G as q}from"./ghost-EqHLy8mh.js";import{P as uu}from"./plus-DrMW-ix6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CvHBrwTd.js";import"./index-CSNxn7VS.js";import"./motion-Ceh1Zhyk.js";import"./motion-CVEUpyyH.js";import"./utils-8zXyhOQf.js";import"./lucide-icon-CSlrzH8E.js";const{DescendantsContextProvider:u0,useDescendants:B0,useDescendant:F0}=Ru(),[E0,R]=ku({name:"AccordionContext",errorMessage:`useAccordionContext returned is 'undefined'. Seems you forgot to wrap the components in "<Accordion />"`}),D=K((A,E)=>{const[t,p]=Xu("Accordion",A),{className:r,index:s,defaultIndex:e,isMultiple:C,isToggle:o,iconHidden:c,icon:d,onChange:I,...j}=Yu(p);(s||e)!=null&&!z(s||e)&&C&&console.warn("Accordion: If 'isMultiple' is passed, then 'index' or 'defaultIndex' must be an array."),C&&o&&console.warn("Accordion: If 'isMultiple' is passed, 'isToggle' will be ignored. Either remove 'isToggle' or 'isMultiple' depending on whether you want isMultiple accordions visible or not");const g=B0(),[F,x]=m.useState(-1),[h,a]=Ku({value:s,defaultValue:()=>C?e??[]:e??-1,onChange:I});m.useEffect(()=>()=>x(-1),[]);const _={w:"100%",...t.container};return u.jsx(u0,{value:g,children:u.jsx(E0,{value:{index:h,setIndex:a,focusedIndex:F,setFocusedIndex:x,isMultiple:C,isToggle:o,iconHidden:c,icon:d,styles:t},children:u.jsx(P.ul,{ref:E,className:w("ui-accordion",r),__css:_,...j})})})}),b=K(({className:A,icon:E,children:t,...p},r)=>{const{isOpen:s,isDisabled:e=!1,icon:C,getLabelProps:o}=J(),{icon:c,iconHidden:d,styles:I}=R(),j={display:"inline-flex",alignItems:"center",width:"100%",outline:0,...I.button},g=typeof E=="function"?E({isExpanded:s,isDisabled:e}):E,F=typeof C=="function"?C({isExpanded:s,isDisabled:e}):C,x=typeof c=="function"?c({isExpanded:s,isDisabled:e}):c;return u.jsxs(P.button,{...o(p,r),className:w("ui-accordion__label",A),__css:j,children:[t,d?null:u.jsx(A0,{children:g??F??x})]})}),A0=({className:A,children:E,...t})=>{const{isOpen:p,isDisabled:r}=J(),{styles:s}=R(),e={opacity:r?.4:1,transform:p?"rotate(-180deg)":void 0,transition:"transform 0.2s",transformOrigin:"center",...s.icon};return E?u.jsx(P.span,{className:w("ui-accordion__icon",A),__css:{display:"inline-flex",justifyContent:"center",alignItems:"center",ml:"auto"},children:E}):u.jsx(Zu,{className:w("ui-accordion__icon",A),__css:e,...t})},l=K(({className:A,unmountOnExit:E,animationOpacity:t,startingHeight:p,endingHeight:r,transition:s,transitionEnd:e,delay:C,duration:o,children:c,...d},I)=>{const{isOpen:j,getPanelProps:g}=J(),{styles:F}=R(),x=typeof c=="string"?u.jsx("p",{children:c}):c,h={...F.panel};return u.jsx($u,{isOpen:j,unmountOnExit:E,animationOpacity:t,startingHeight:p,endingHeight:r,transition:s,transitionEnd:e,delay:C,duration:o,children:u.jsx(P.div,{...g(d,I),className:w("ui-accordion__panel",A),__css:h,children:x})})}),[C0,J]=ku({name:"AccordionItemContext",errorMessage:`useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`}),B=K(({className:A,isDisabled:E=!1,label:t,icon:p,children:r,...s},e)=>{const C=m.useId(),{index:o,setIndex:c,setFocusedIndex:d,isMultiple:I,isToggle:j,styles:g}=R(),{index:F,register:x,descendants:h}=F0({disabled:E}),a=F!==-1?z(o)?o.includes(F):o===F:!1;a&&E&&console.warn("Accordion: Cannot open a disabled accordion item");const _=m.useCallback(i=>{F!==-1&&(I&&z(o)?c(i?o.concat(F):o.filter(f=>f!==F)):i?c(F):j&&c(-1))},[I,j,F,o,c]),Q=m.useCallback(()=>{d(F)},[d,F]),W=m.useCallback(()=>{_(!a),d(F)},[F,d,a,_]),X=m.useCallback(i=>{const Y={ArrowDown:()=>{const n=h.enabledNextValue(F);n==null||n.node.focus()},ArrowUp:()=>{const n=h.enabledPrevValue(F);n==null||n.node.focus()},Home:()=>{const n=h.enabledFirstValue();n==null||n.node.focus()},End:()=>{const n=h.enabledLastValue();n==null||n.node.focus()}}[i.key];Y&&(i.preventDefault(),Y(i))},[h,F]),Mu=m.useCallback((i={},f=null)=>({...i,ref:Uu(x,f),type:"button",disabled:E,"data-expanded":qu(a),"aria-controls":C,onClick:U(i.onClick,W),onFocus:U(i.onFocus,Q),onKeyDown:U(i.onKeyDown,X)}),[E,a,W,Q,X,x,C]),Tu=m.useCallback((i={},f=null)=>({...i,ref:f,id:C}),[C]),Vu={...g.item,overflowAnchor:"none"},Hu=typeof t=="function"?t({isExpanded:a,isDisabled:E}):t;typeof r=="function"&&(r=r({isExpanded:a,isDisabled:E}));const y=zu(r),[Nu]=Z(y,b),[Gu]=Z(y,l),Ou=Ju(y)?r:Qu(y,b,l);return u.jsx(C0,{value:{isOpen:a,isDisabled:E,icon:p,getLabelProps:Mu,getPanelProps:Tu},children:u.jsxs(P.li,{ref:e,className:w("ui-accordion__item",A),"aria-expanded":Wu(a),__css:Vu,...s,children:[Nu??u.jsx(b,{children:Hu}),Gu??u.jsx(l,{children:Ou})]})})}),f0={title:"Components / Disclosure / Accordion",component:D},L=()=>u.jsxs(D,{children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),v=()=>u.jsxs(u.Fragment,{children:[u.jsxs(D,{variant:"basic",children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),u.jsxs(D,{variant:"card",children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]}),S=()=>u.jsxs(D,{defaultIndex:1,children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),k=()=>u.jsxs(D,{isToggle:!0,children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),M=()=>u.jsxs(D,{defaultIndex:[1,2],isMultiple:!0,children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),T=()=>u.jsxs(D,{iconHidden:!0,children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),V=()=>u.jsxs(D,{children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",isDisabled:!0,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),H=()=>u.jsxs(D,{children:[u.jsxs(B,{children:[u.jsx(b,{_expanded:{bg:"orange.500",color:"white"},children:"孫悟空少年編"}),u.jsx(l,{pt:3,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})]}),u.jsxs(B,{children:[u.jsx(b,{_expanded:{bg:"orange.500",color:"white"},children:"ピッコロ大魔王編"}),u.jsx(l,{pt:3,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})]}),u.jsxs(B,{children:[u.jsx(b,{_expanded:{bg:"orange.500",color:"white"},children:"サイヤ人編"}),u.jsx(l,{pt:3,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]}),N=()=>u.jsxs(D,{children:[u.jsx(B,{label:"孫悟空少年編",children:u.jsx(l,{pt:3,bg:["orange.50","orange.400"],children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),u.jsx(B,{label:"ピッコロ大魔王編",children:u.jsx(l,{pt:3,bg:["orange.50","orange.400"],children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),u.jsx(B,{label:"サイヤ人編",children:u.jsx(l,{pt:3,bg:["orange.50","orange.400"],children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),G=()=>u.jsxs(u.Fragment,{children:[u.jsxs(D,{icon:u.jsx(q,{color:"orange.700"}),children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),u.jsxs(D,{icon:({isExpanded:A})=>A?u.jsx(uu,{color:["blackAlpha.800","whiteAlpha.700"]}):u.jsx($,{color:["blackAlpha.800","whiteAlpha.700"]}),children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),u.jsxs(D,{children:[u.jsxs(B,{children:[u.jsx(b,{icon:u.jsx(q,{color:"orange.700"}),children:"孫悟空少年編"}),u.jsx(l,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})]}),u.jsxs(B,{children:[u.jsx(b,{icon:({isExpanded:A})=>A?u.jsx(uu,{color:["blackAlpha.800","whiteAlpha.700"]}):u.jsx($,{color:["blackAlpha.800","whiteAlpha.700"]}),children:"ピッコロ大魔王編"}),u.jsx(l,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})]}),u.jsxs(B,{children:[u.jsx(b,{icon:u.jsx(q,{color:"orange.700"}),children:"サイヤ人編"}),u.jsx(l,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]})]}),O=()=>{const[A,E]=m.useState(void 0);return u.jsxs(D,{index:A,onChange:E,children:[u.jsx(B,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),u.jsx(B,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),u.jsx(B,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})};var Bu,Fu,Eu;L.parameters={...L.parameters,docs:{...(Bu=L.parameters)==null?void 0:Bu.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(Eu=(Fu=L.parameters)==null?void 0:Fu.docs)==null?void 0:Eu.source}}};var Au,Cu,nu;v.parameters={...v.parameters,docs:{...(Au=v.parameters)==null?void 0:Au.docs,source:{originalSource:`() => {
  return <>
      <Accordion variant="basic">
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>

      <Accordion variant="card">
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>
    </>;
}`,...(nu=(Cu=v.parameters)==null?void 0:Cu.docs)==null?void 0:nu.source}}};var Du,eu,ou;S.parameters={...S.parameters,docs:{...(Du=S.parameters)==null?void 0:Du.docs,source:{originalSource:`() => {
  return <Accordion defaultIndex={1}>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(ou=(eu=S.parameters)==null?void 0:eu.docs)==null?void 0:ou.source}}};var cu,ru,su;k.parameters={...k.parameters,docs:{...(cu=k.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
  return <Accordion isToggle>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(su=(ru=k.parameters)==null?void 0:ru.docs)==null?void 0:su.source}}};var iu,tu,lu;M.parameters={...M.parameters,docs:{...(iu=M.parameters)==null?void 0:iu.docs,source:{originalSource:`() => {
  return <Accordion defaultIndex={[1, 2]} isMultiple>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(lu=(tu=M.parameters)==null?void 0:tu.docs)==null?void 0:lu.source}}};var au,du,mu;T.parameters={...T.parameters,docs:{...(au=T.parameters)==null?void 0:au.docs,source:{originalSource:`() => {
  return <Accordion iconHidden>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(mu=(du=T.parameters)==null?void 0:du.docs)==null?void 0:mu.source}}};var pu,xu,hu;V.parameters={...V.parameters,docs:{...(pu=V.parameters)==null?void 0:pu.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編" isDisabled>
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(hu=(xu=V.parameters)==null?void 0:xu.docs)==null?void 0:hu.source}}};var bu,Iu,ju;H.parameters={...H.parameters,docs:{...(bu=H.parameters)==null?void 0:bu.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: "orange.500",
        color: "white"
      }}>
          孫悟空少年編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: "orange.500",
        color: "white"
      }}>
          ピッコロ大魔王編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: "orange.500",
        color: "white"
      }}>
          サイヤ人編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionPanel>
      </AccordionItem>
    </Accordion>;
}`,...(ju=(Iu=H.parameters)==null?void 0:Iu.docs)==null?void 0:ju.source}}};var gu,fu,wu;N.parameters={...N.parameters,docs:{...(gu=N.parameters)==null?void 0:gu.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label="孫悟空少年編">
        <AccordionPanel pt={3} bg={["orange.50", "orange.400"]}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        <AccordionPanel pt={3} bg={["orange.50", "orange.400"]}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        <AccordionPanel pt={3} bg={["orange.50", "orange.400"]}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionPanel>
      </AccordionItem>
    </Accordion>;
}`,...(wu=(fu=N.parameters)==null?void 0:fu.docs)==null?void 0:wu.source}}};var Pu,_u,yu;G.parameters={...G.parameters,docs:{...(Pu=G.parameters)==null?void 0:Pu.docs,source:{originalSource:`() => {
  return <>
      <Accordion icon={<Ghost color="orange.700" />}>
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>

      <Accordion icon={({
      isExpanded
    }) => isExpanded ? <Plus color={["blackAlpha.800", "whiteAlpha.700"]} /> : <Minus color={["blackAlpha.800", "whiteAlpha.700"]} />}>
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem>
          <AccordionLabel icon={<Ghost color="orange.700" />}>
            孫悟空少年編
          </AccordionLabel>

          <AccordionPanel>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionLabel icon={({
          isExpanded
        }) => isExpanded ? <Plus color={["blackAlpha.800", "whiteAlpha.700"]} /> : <Minus color={["blackAlpha.800", "whiteAlpha.700"]} />}>
            ピッコロ大魔王編
          </AccordionLabel>

          <AccordionPanel>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionLabel icon={<Ghost color="orange.700" />}>
            サイヤ人編
          </AccordionLabel>

          <AccordionPanel>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>;
}`,...(yu=(_u=G.parameters)==null?void 0:_u.docs)==null?void 0:yu.source}}};var Lu,vu,Su;O.parameters={...O.parameters,docs:{...(Lu=O.parameters)==null?void 0:Lu.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<AccordionProps["index"] | undefined>(undefined);
  return <Accordion index={index} onChange={onChange}>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(Su=(vu=O.parameters)==null?void 0:vu.docs)==null?void 0:Su.source}}};const w0=["basic","withVariant","withDefaultIndex","withIsToggle","withIsMultiple","withIconHidden","isDisabled","customLabel","customPanel","customIcon","customControl"];export{w0 as __namedExportsOrder,L as basic,O as customControl,G as customIcon,H as customLabel,N as customPanel,f0 as default,V as isDisabled,S as withDefaultIndex,T as withIconHidden,M as withIsMultiple,k as withIsToggle,v as withVariant};
