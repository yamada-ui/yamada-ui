import{a as n,j as c,F as On}from"./jsx-runtime-4d953e71.js";import{I as S,f as J,a as nn,e as en}from"./fontawesome-icon-982dd7b4.js";import{r as f}from"./index-de62f0e0.js";import{u as Jn}from"./index-6000b458.js";import{c as Qn}from"./index-c9cb8387.js";import{c as jn,k as W,u as M,a as L,q as Wn,h as Q,t as Xn,B as on,O as Yn,P as Zn}from"./factory-07cc9cf0.js";import{f as U}from"./forward-ref-396247d7.js";import{u as $n}from"./use-component-style-a395c77f.js";import{o as ne,f as cn}from"./theme-326cd56d.js";import{c as ee}from"./icon-5ed183e8.js";import{C as oe}from"./collapse-9302b831.js";import{T as e}from"./text-afdead5d.js";import"./index-e19e1475.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./index-ac0f8f33.js";import"./index-9f37637c.js";import"./motion-d07cf02b.js";import"./utils-e0f638b3.js";const{DescendantsContextProvider:ce,useDescendants:re,useDescendant:te}=Qn(),[ie,z]=jn({name:"AccordionContext",errorMessage:`useAccordionContext returned is 'undefined'. Seems you forgot to wrap the components in "<Accordion />"`}),a=U((l,t)=>{const[h,T]=$n("Accordion",l),{className:m,index:u,defaultIndex:s,isMultiple:i,isToggle:x,iconHidden:p,icon:w,onChange:P,...v}=ne(T);(u||s)!=null&&!W(u||s)&&i&&console.warn("Accordion: If 'isMultiple' is passed, then 'index' or 'defaultIndex' must be an array."),i&&x&&console.warn("Accordion: If 'isMultiple' is passed, 'isToggle' will be ignored. Either remove 'isToggle' or 'isMultiple' depending on whether you want isMultiple accordions visible or not");const r=re(),[y,I]=f.useState(-1),[b,k]=Jn({value:u,defaultValue:()=>i?s??[]:s??-1,onChange:P});f.useEffect(()=>()=>I(-1),[]);const E={w:"full",...h.container};return n(ce,{value:r,children:n(ie,{value:{index:b,setIndex:k,focusedIndex:y,setFocusedIndex:I,isMultiple:i,isToggle:x,iconHidden:p,icon:w,styles:h},children:n(M.div,{ref:t,className:L("ui-accordion",m),__css:E,...v})})})}),g=U(({className:l,icon:t,children:h,...T},m)=>{const{isOpen:u,isDisabled:s=!1,icon:i,getLabelProps:x}=X(),{icon:p,iconHidden:w,styles:P}=z(),v={display:"inline-flex",alignItems:"center",width:"100%",outline:0,...P.button},r=typeof t=="function"?t({isExpanded:u,isDisabled:s}):t,y=typeof i=="function"?i({isExpanded:u,isDisabled:s}):i,I=typeof p=="function"?p({isExpanded:u,isDisabled:s}):p;return c(M.button,{...x(T,m),className:L("ui-accordion-label",l),__css:v,children:[h,w?null:n(le,{children:r??y??I})]})}),le=({className:l,children:t,...h})=>{const{isOpen:T,isDisabled:m}=X(),{styles:u}=z(),s={opacity:m?.4:1,transform:T?"rotate(-180deg)":void 0,transition:"transform 0.2s",transformOrigin:"center",...u.icon};return t?n(M.span,{className:L("ui-accordion-icon",l),__css:{display:"inline-flex",justifyContent:"center",alignItems:"center",ml:"auto"},children:t}):n(ee,{className:L("ui-accordion-icon",l),__css:s,...h})},C=U(({className:l,unmountOnExit:t,animationOpacity:h,startingHeight:T,endingHeight:m,transition:u,transitionEnd:s,delay:i,duration:x,...p},w)=>{const{isOpen:P,getPanelProps:v}=X(),{styles:r}=z(),y={...r.panel};return n(oe,{isOpen:P,unmountOnExit:t,animationOpacity:h,startingHeight:T,endingHeight:m,transition:u,transitionEnd:s,delay:i,duration:x,children:n(M.div,{...v(p,w),className:L("ui-accordion-panel",l),__css:y})})}),[de,X]=jn({name:"AccordionItemContext",errorMessage:`useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`}),o=U(({className:l,isDisabled:t=!1,label:h,icon:T,children:m,...u},s)=>{const{index:i,setIndex:x,setFocusedIndex:p,isMultiple:w,isToggle:P,styles:v}=z(),{index:r,register:y,descendants:I}=te({disabled:t}),b=r!==-1?W(i)?i.includes(r):i===r:!1;b&&t&&console.warn("Accordion: Cannot open a disabled accordion item");const k=f.useCallback(A=>{r!==-1&&(w&&W(i)?x(A?i.concat(r):i.filter(_=>_!==r)):A?x(r):P&&x(-1))},[w,P,r,i,x]),E=f.useCallback(()=>{p(r)},[p,r]),Y=f.useCallback(()=>{k(!b),p(r)},[r,p,b,k]),Z=f.useCallback(A=>{const $={ArrowDown:()=>{const d=I.enabledNextValue(r);d==null||d.node.focus()},ArrowUp:()=>{const d=I.enabledPrevValue(r);d==null||d.node.focus()},Home:()=>{const d=I.enabledfirstValue();d==null||d.node.focus()},End:()=>{const d=I.enabledlastValue();d==null||d.node.focus()}}[A.key];$&&(A.preventDefault(),$(A))},[I,r]),Kn=f.useCallback((A={},_=null)=>({...A,ref:Wn(y,_),type:"button",disabled:t,"aria-expanded":cn(b),onClick:Q(A.onClick,Y),onFocus:Q(A.onFocus,E),onKeyDown:Q(A.onKeyDown,Z)}),[t,b,Y,E,Z,y]),Rn=f.useCallback((A={},_=null)=>({...A,ref:_}),[]),qn={...v.item,overflowAnchor:"none"},Bn=typeof h=="function"?h({isExpanded:b,isDisabled:t}):h;typeof m=="function"&&(m=m({isExpanded:b,isDisabled:t}));const D=Xn(m),[Gn]=on(D,g),[Un]=on(D,C),zn=Yn(D)?m:Zn(D,g,C);return n(de,{value:{isOpen:b,isDisabled:t,icon:T,getLabelProps:Kn,getPanelProps:Rn},children:c(M.div,{ref:s,className:L("ui-accordion-item",l),"aria-expanded":cn(b),__css:qn,...u,children:[Gn??n(g,{children:Bn}),Un??n(C,{children:zn})]})})}),_e={title:"Components / Disclosure / Accordion",component:a},V=()=>c(a,{children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),F=()=>c(On,{children:[c(a,{variant:"basic",children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),c(a,{variant:"card",children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]})]}),H=()=>c(a,{defaultIndex:1,children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),N=()=>c(a,{isToggle:!0,children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),O=()=>c(a,{defaultIndex:[1,2],isMultiple:!0,children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),j=()=>c(a,{iconHidden:!0,children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),K=()=>c(a,{children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",isDisabled:!0,children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),R=()=>c(a,{children:[c(o,{children:[n(g,{_expanded:{bg:"orange.500",color:"white"},children:"孫悟空少年編"}),n(C,{pt:3,children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})})]}),c(o,{children:[n(g,{_expanded:{bg:"orange.500",color:"white"},children:"ピッコロ大魔王編"}),n(C,{pt:3,children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})})]}),c(o,{children:[n(g,{_expanded:{bg:"orange.500",color:"white"},children:"サイヤ人編"}),n(C,{pt:3,children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]})]}),q=()=>c(a,{children:[n(o,{label:"孫悟空少年編",children:n(C,{pt:3,bg:["orange.50","orange.400"],children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})})}),n(o,{label:"ピッコロ大魔王編",children:n(C,{pt:3,bg:["orange.50","orange.400"],children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})})}),n(o,{label:"サイヤ人編",children:n(C,{pt:3,bg:["orange.50","orange.400"],children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})})]}),B=()=>c(On,{children:[c(a,{icon:n(S,{icon:J,color:"orange.700"}),children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),c(a,{icon:({isExpanded:l})=>n(S,{icon:l?en:nn,color:["blackAlpha.800","whiteAlpha.700"]}),children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),c(a,{children:[c(o,{children:[n(g,{icon:n(S,{icon:J,color:"orange.700"}),children:"孫悟空少年編"}),n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})]}),c(o,{children:[n(g,{icon:({isExpanded:l})=>n(S,{icon:l?en:nn,color:["blackAlpha.800","whiteAlpha.700"]}),children:"ピッコロ大魔王編"}),n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})]}),c(o,{children:[n(g,{icon:n(S,{icon:J,color:"orange.700"}),children:"サイヤ人編"}),n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]})]}),G=()=>{const[l,t]=f.useState(void 0);return c(a,{index:l,onChange:t,children:[n(o,{label:"孫悟空少年編",children:n(e,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n(o,{label:"ピッコロ大魔王編",children:n(e,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n(o,{label:"サイヤ人編",children:n(e,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]})};var rn,tn,ln;V.parameters={...V.parameters,docs:{...(rn=V.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(ln=(tn=V.parameters)==null?void 0:tn.docs)==null?void 0:ln.source}}};var dn,an,sn;F.parameters={...F.parameters,docs:{...(dn=F.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <>
      <Accordion variant='basic'>
        <AccordionItem label='孫悟空少年編'>
          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionItem>

        <AccordionItem label='ピッコロ大魔王編'>
          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionItem>

        <AccordionItem label='サイヤ人編'>
          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionItem>
      </Accordion>

      <Accordion variant='card'>
        <AccordionItem label='孫悟空少年編'>
          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionItem>

        <AccordionItem label='ピッコロ大魔王編'>
          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionItem>

        <AccordionItem label='サイヤ人編'>
          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionItem>
      </Accordion>
    </>;
}`,...(sn=(an=F.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var mn,un,An;H.parameters={...H.parameters,docs:{...(mn=H.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  return <Accordion defaultIndex={1}>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(An=(un=H.parameters)==null?void 0:un.docs)==null?void 0:An.source}}};var hn,pn,xn;N.parameters={...N.parameters,docs:{...(hn=N.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <Accordion isToggle>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(xn=(pn=N.parameters)==null?void 0:pn.docs)==null?void 0:xn.source}}};var bn,In,Tn;O.parameters={...O.parameters,docs:{...(bn=O.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <Accordion defaultIndex={[1, 2]} isMultiple>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(Tn=(In=O.parameters)==null?void 0:In.docs)==null?void 0:Tn.source}}};var fn,gn,Cn;j.parameters={...j.parameters,docs:{...(fn=j.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <Accordion iconHidden>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(Cn=(gn=j.parameters)==null?void 0:gn.docs)==null?void 0:Cn.source}}};var wn,Pn,yn;K.parameters={...K.parameters,docs:{...(wn=K.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編' isDisabled>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(yn=(Pn=K.parameters)==null?void 0:Pn.docs)==null?void 0:yn.source}}};var vn,_n,Ln;R.parameters={...R.parameters,docs:{...(vn=R.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: 'orange.500',
        color: 'white'
      }}>
          孫悟空少年編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: 'orange.500',
        color: 'white'
      }}>
          ピッコロ大魔王編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: 'orange.500',
        color: 'white'
      }}>
          サイヤ人編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>;
}`,...(Ln=(_n=R.parameters)==null?void 0:_n.docs)==null?void 0:Ln.source}}};var Sn,Mn,kn;q.parameters={...q.parameters,docs:{...(Sn=q.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label='孫悟空少年編'>
        <AccordionPanel pt={3} bg={['orange.50', 'orange.400']}>
          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <AccordionPanel pt={3} bg={['orange.50', 'orange.400']}>
          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <AccordionPanel pt={3} bg={['orange.50', 'orange.400']}>
          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>;
}`,...(kn=(Mn=q.parameters)==null?void 0:Mn.docs)==null?void 0:kn.source}}};var En,Dn,Vn;B.parameters={...B.parameters,docs:{...(En=B.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  return <>
      <Accordion icon={<Icon icon={faPoo} color='orange.700' />}>
        <AccordionItem label='孫悟空少年編'>
          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionItem>

        <AccordionItem label='ピッコロ大魔王編'>
          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionItem>

        <AccordionItem label='サイヤ人編'>
          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionItem>
      </Accordion>

      <Accordion icon={({
      isExpanded
    }) => <Icon icon={!isExpanded ? faPlus : faMinus} color={['blackAlpha.800', 'whiteAlpha.700']} />}>
        <AccordionItem label='孫悟空少年編'>
          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionItem>

        <AccordionItem label='ピッコロ大魔王編'>
          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionItem>

        <AccordionItem label='サイヤ人編'>
          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem>
          <AccordionLabel icon={<Icon icon={faPoo} color='orange.700' />}>
            孫悟空少年編
          </AccordionLabel>

          <Text>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </Text>
        </AccordionItem>

        <AccordionItem>
          <AccordionLabel icon={({
          isExpanded
        }) => <Icon icon={!isExpanded ? faPlus : faMinus} color={['blackAlpha.800', 'whiteAlpha.700']} />}>
            ピッコロ大魔王編
          </AccordionLabel>

          <Text>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </Text>
        </AccordionItem>

        <AccordionItem>
          <AccordionLabel icon={<Icon icon={faPoo} color='orange.700' />}>
            サイヤ人編
          </AccordionLabel>

          <Text>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </Text>
        </AccordionItem>
      </Accordion>
    </>;
}`,...(Vn=(Dn=B.parameters)==null?void 0:Dn.docs)==null?void 0:Vn.source}}};var Fn,Hn,Nn;G.parameters={...G.parameters,docs:{...(Fn=G.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<AccordionProps['index'] | undefined>(undefined);
  return <Accordion index={index} onChange={onChange}>
      <AccordionItem label='孫悟空少年編'>
        <Text>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Text>
      </AccordionItem>

      <AccordionItem label='ピッコロ大魔王編'>
        <Text>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Text>
      </AccordionItem>

      <AccordionItem label='サイヤ人編'>
        <Text>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Text>
      </AccordionItem>
    </Accordion>;
}`,...(Nn=(Hn=G.parameters)==null?void 0:Hn.docs)==null?void 0:Nn.source}}};const Le=["basic","withVariant","withDefaultIndex","withIsToggle","withIsMultiple","withIconHidden","isDisabled","customLabel","customPanel","customIcon","customControl"];export{Le as __namedExportsOrder,V as basic,G as customControl,B as customIcon,R as customLabel,q as customPanel,_e as default,K as isDisabled,H as withDefaultIndex,j as withIconHidden,O as withIsMultiple,N as withIsToggle,F as withVariant};
//# sourceMappingURL=accordion.stories-628f0d30.js.map
