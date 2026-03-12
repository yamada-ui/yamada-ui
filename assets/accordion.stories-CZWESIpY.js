import{d as Tn,i as O,r as t,m as U,c as q,a as Kn,b as $n,h as N,e as G,f as Ln,j as e,s as P,g as v,u as Nn,k as On,l as Un}from"./iframe-qjGiUz6b.js";import{P as qn}from"./props-table-695isBmC.js";import{P as zn}from"./plus-icon-Dp0le1C4.js";import{n as M}from"./native-accordion.style-DJQJYJnD.js";import{u as Gn}from"./index-DNVbeBBD.js";import{c as Jn}from"./index-BN3AvlhS.js";import{C as Qn}from"./collapse-DR5CXDWO.js";import{C as Wn}from"./chevron-down-icon-CA_Pig7Y.js";import{M as Xn}from"./minus-icon-Df82RxD0.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CZYREmgE.js";import"./grid-item-DMIxSy19.js";import"./for-BvpQiPtL.js";import"./flex-BMAQi8a8.js";import"./heading-CexfIZlJ.js";import"./transition-BHZisWF-.js";var J,Q,W;const Yn=Tn({base:{...M.base,button:{...(J=M.base)==null?void 0:J.button,"&[aria-disabled=true]":{cursor:"default"}},icon:{...(Q=M.base)==null?void 0:Q.icon,_expanded:{transform:"rotate(180deg)"}},panel:{...(W=M.base)==null?void 0:W.panel,pb:"3"}},variants:M.variants,defaultProps:{variant:"plain"}}),{DescendantsContext:Zn,useDescendant:ne,useDescendants:ee}=Jn(),[oe,te]=q({name:"AccordionContext"}),[re,z]=q({name:"AccordionItemContext"}),ce=({defaultIndex:n,index:o,multiple:r,toggle:c,onChange:i,...s}={})=>{(o||n)!=null&&!O(o||n)&&r&&console.warn("Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array."),r&&c&&console.warn("Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not");const u=ee(),[m,p]=t.useState(-1),[d,b]=Gn({defaultValue:()=>r?n??[]:n??-1,value:o,onChange:i}),A=t.useCallback(({ref:l,...I}={})=>({...I,...s,ref:U(l,s.ref)}),[s]);return t.useEffect(()=>()=>p(-1),[]),{descendants:u,focusedIndex:m,index:d,multiple:r,setFocusedIndex:p,setIndex:b,toggle:c,getRootProps:A}},se=({disabled:n,index:o,...r})=>{const c=t.useId(),i=t.useId(),{index:s,multiple:u,setFocusedIndex:m,setIndex:p,toggle:d}=te(),{descendants:b,register:A}=ne({disabled:n}),l=o!==-1?O(s)?s.includes(o):s===o:!1;l&&n&&console.warn("Accordion: Cannot open a disabled accordion item");const I=t.useCallback(h=>{o!==-1&&(u&&O(s)?p(h?s.concat(o):s.filter(a=>a!==o)):h?p(o):d&&p(-1))},[u,d,o,s,p]),g=t.useCallback(()=>{m(o)},[m,o]),C=t.useCallback(()=>{I(!l),m(o)},[o,m,l,I]),R=t.useCallback(h=>{Kn(h,{ArrowDown:()=>{const a=b.enabledNextValue(o);a==null||a.node.focus()},ArrowUp:()=>{const a=b.enabledPrevValue(o);a==null||a.node.focus()},End:()=>{const a=b.enabledLastValue();a==null||a.node.focus()},Home:()=>{const a=b.enabledFirstValue();a==null||a.node.focus()}})},[b,o]),k=t.useCallback(({ref:h,...a}={})=>({"data-expanded":$n(l),...a,...r,ref:U(h,r.ref)}),[l,r]),Fn=t.useCallback(({ref:h,...a}={})=>({id:c,type:"button","aria-controls":i,"aria-disabled":G(!u&&!d&&l||n),"aria-expanded":l,...a,ref:U(A,h),disabled:n,onClick:N(a.onClick,C),onFocus:N(a.onFocus,g),onKeyDown:N(a.onKeyDown,R)}),[c,l,i,u,d,n,A,C,g,R]),Vn=t.useCallback(({"aria-labelledby":h,...a}={})=>({id:i,"aria-labelledby":Ln(h,c),role:"region",...a}),[c,i]),Hn=t.useCallback(h=>({"aria-disabled":G(!u&&!d&&l||n),"aria-expanded":l,"aria-hidden":!0,role:"presentation",...h}),[u,d,l,n]);return{disabled:n,open:l,getButtonProps:Fn,getIconProps:Hn,getItemProps:k,getPanelProps:Vn}},[ae,ie]=q({name:"ItemComponentContext"}),{ComponentContext:de,useComponentContext:En,withContext:L,withProvider:ue}=Un("accordion",Yn),x=ue(({children:n,icon:o,iconHidden:r,items:c,...i})=>{const{descendants:s,focusedIndex:u,index:m,multiple:p,setFocusedIndex:d,setIndex:b,toggle:A,getRootProps:l}=ce(i),I=t.useMemo(()=>n||(c==null?void 0:c.map((R,k)=>e.jsx(f,{index:k,...R},k))),[n,c]),g=t.useMemo(()=>({focusedIndex:u,index:m,multiple:p,setFocusedIndex:d,setIndex:b,toggle:A}),[u,m,p,d,b,A]),C=t.useMemo(()=>({icon:o,iconHidden:r}),[o,r]);return e.jsx(Zn,{value:s,children:e.jsx(oe,{value:g,children:e.jsx(de,{value:C,children:e.jsx(P.div,{...l(),children:I})})})})},"root")(),f=L(({button:n,children:o,icon:r,...c})=>{const{disabled:i,open:s,getButtonProps:u,getIconProps:m,getItemProps:p,getPanelProps:d}=se(c),b=t.useMemo(()=>v(o,{disabled:i,expanded:s}),[o,i,s]),[A,l,I]=Nn(b,S,j),g=t.useMemo(()=>({disabled:i,icon:r,open:s,getButtonProps:u,getIconProps:m,getPanelProps:d}),[i,u,d,m,r,s]),C=t.useMemo(()=>({icon:r}),[r]);return e.jsx(re,{value:g,children:e.jsx(ae,{value:C,children:e.jsxs(P.div,{...p(),children:[l??e.jsx(S,{children:v(n,{disabled:i,expanded:s})}),I??e.jsx(j,{children:A})]})})})},"item")(),S=L(({children:n,icon:o,containerProps:r,...c})=>{const{icon:i}=En(),{icon:s}=ie(),{disabled:u,open:m,getButtonProps:p}=z(),d={disabled:u,expanded:m};return e.jsx(P.h3,{...r,children:e.jsxs(P.button,{...p(c),children:[n,e.jsx(le,{children:v(o,d)??v(s,d)??v(i,d)})]})})},"button")(),le=L(({children:n=e.jsx(Wn,{}),...o})=>{const{iconHidden:r}=En(),{getIconProps:c}=z();return r?null:t.isValidElement(n)?t.cloneElement(n,c({...o,...n.props})):t.Children.count(n)>1?t.Children.only(null):null},"icon")(),j=L(({animationOpacity:n,children:o,delay:r,duration:c,endingHeight:i,startingHeight:s,transition:u,transitionEnd:m,unmountOnExit:p,...d})=>{const{open:b,getPanelProps:A}=z();return e.jsx(Qn,{animationOpacity:n,delay:r,duration:c,endingHeight:i,open:b,startingHeight:s,transition:u,transitionEnd:m,unmountOnExit:p,children:e.jsx(P.div,{...A(d),children:On(o)?e.jsx(P.p,{children:o}):o})})},"panel")(),ke={component:x,title:"Components / Accordion"},y=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{items:n,children:n.map(({button:o,content:r},c)=>e.jsx(f,{button:o,index:c,children:r},c))})},w=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{items:n})},D=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(qn,{variant:"stack",rows:["plain","panel"],children:(o,r,c)=>{const i=n.map(s=>({...s,button:`${s.button} (${r})`}));return e.jsx(x,{variant:r,items:i},c)}})},B=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{defaultIndex:1,items:n})},_=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{items:n,toggle:!0})},E=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{defaultIndex:[1,2],items:n,multiple:!0})},F=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{iconHidden:!0,items:n})},V=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",disabled:!0},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{items:n})},H=()=>e.jsxs(x,{children:[e.jsxs(f,{index:0,children:[e.jsx(S,{_expanded:{bg:"bg.panel"},children:"孫悟空少年編"}),e.jsx(j,{pt:3,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})]}),e.jsxs(f,{index:1,children:[e.jsx(S,{_expanded:{bg:"bg.panel"},children:"ピッコロ大魔王編"}),e.jsx(j,{pt:3,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})]}),e.jsxs(f,{index:2,children:[e.jsx(S,{_expanded:{bg:"bg.panel"},children:"サイヤ人編"}),e.jsx(j,{pt:3,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]}),T=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{children:n.map(({button:o,content:r},c)=>e.jsx(f,{button:o,index:c,children:e.jsx(j,{bg:"bg.panel",pt:3,children:r})},c))})},K=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]);return e.jsx(x,{icon:({expanded:o})=>o?e.jsx(Xn,{}):e.jsx(zn,{}),items:n})},$=()=>{const n=t.useMemo(()=>[{button:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"},{button:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"},{button:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"}],[]),[o,r]=t.useState(void 0);return e.jsx(x,{index:o,items:n,onChange:r})};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    button: "孫悟空少年編",
    content: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    content: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    content: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root items={items}>
      {items.map(({
      button,
      content
    }, index) => <Accordion.Item key={index} button={button} index={index}>
          {content}
        </Accordion.Item>)}
    </Accordion.Root>;
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,en,on;w.parameters={...w.parameters,docs:{...(nn=w.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root items={items} />;
}`,...(on=(en=w.parameters)==null?void 0:en.docs)==null?void 0:on.source}}};var tn,rn,cn;D.parameters={...D.parameters,docs:{...(tn=D.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <PropsTable variant="stack" rows={["plain", "panel"]}>
      {(_, row, key) => {
      const variantItems = items.map(item => ({
        ...item,
        button: \`\${item.button} (\${row})\`
      }));
      return <Accordion.Root key={key} variant={row} items={variantItems} />;
    }}
    </PropsTable>;
}`,...(cn=(rn=D.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var sn,an,dn;B.parameters={...B.parameters,docs:{...(sn=B.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root defaultIndex={1} items={items} />;
}`,...(dn=(an=B.parameters)==null?void 0:an.docs)==null?void 0:dn.source}}};var un,ln,mn;_.parameters={..._.parameters,docs:{...(un=_.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root items={items} toggle />;
}`,...(mn=(ln=_.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};var pn,bn,xn;E.parameters={...E.parameters,docs:{...(pn=E.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root defaultIndex={[1, 2]} items={items} multiple />;
}`,...(xn=(bn=E.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var hn,An,In;F.parameters={...F.parameters,docs:{...(hn=F.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root iconHidden items={items} />;
}`,...(In=(An=F.parameters)==null?void 0:An.docs)==null?void 0:In.source}}};var gn,Cn,fn;V.parameters={...V.parameters,docs:{...(gn=V.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
    disabled: true
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root items={items} />;
}`,...(fn=(Cn=V.parameters)==null?void 0:Cn.docs)==null?void 0:fn.source}}};var jn,Pn,Mn;H.parameters={...H.parameters,docs:{...(jn=H.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <Accordion.Root>
      <Accordion.Item index={0}>
        <Accordion.Button _expanded={{
        bg: "bg.panel"
      }}>
          孫悟空少年編
        </Accordion.Button>

        <Accordion.Panel pt={3}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={1}>
        <Accordion.Button _expanded={{
        bg: "bg.panel"
      }}>
          ピッコロ大魔王編
        </Accordion.Button>

        <Accordion.Panel pt={3}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={2}>
        <Accordion.Button _expanded={{
        bg: "bg.panel"
      }}>
          サイヤ人編
        </Accordion.Button>

        <Accordion.Panel pt={3}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>;
}`,...(Mn=(Pn=H.parameters)==null?void 0:Pn.docs)==null?void 0:Mn.source}}};var vn,Sn,Rn;T.parameters={...T.parameters,docs:{...(vn=T.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    button: "孫悟空少年編",
    content: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    content: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    content: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root>
      {items.map(({
      button,
      content
    }, index) => <Accordion.Item key={index} button={button} index={index}>
          <Accordion.Panel bg="bg.panel" pt={3}>
            {content}
          </Accordion.Panel>
        </Accordion.Item>)}
    </Accordion.Root>;
}`,...(Rn=(Sn=T.parameters)==null?void 0:Sn.docs)==null?void 0:Rn.source}}};var kn,yn,wn;K.parameters={...K.parameters,docs:{...(kn=K.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  return <Accordion.Root icon={({
    expanded
  }) => !expanded ? <PlusIcon /> : <MinusIcon />} items={items} />;
}`,...(wn=(yn=K.parameters)==null?void 0:yn.docs)==null?void 0:wn.source}}};var Dn,Bn,_n;$.parameters={...$.parameters,docs:{...(Dn=$.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  const items = useMemo<Accordion.Item[]>(() => [{
    button: "孫悟空少年編",
    children: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"
  }, {
    button: "ピッコロ大魔王編",
    children: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"
  }, {
    button: "サイヤ人編",
    children: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"
  }], []);
  const [index, onChange] = useState<Accordion.RootProps["index"] | undefined>(undefined);
  return <Accordion.Root index={index} items={items} onChange={onChange} />;
}`,...(_n=(Bn=$.parameters)==null?void 0:Bn.docs)==null?void 0:_n.source}}};const ye=["Basic","Items","Variant","DefaultIndex","Toggle","Multiple","IconHidden","Disabled","CustomLabel","CustomPanel","CustomIcon","CustomControl"];export{y as Basic,$ as CustomControl,K as CustomIcon,H as CustomLabel,T as CustomPanel,B as DefaultIndex,V as Disabled,F as IconHidden,w as Items,E as Multiple,_ as Toggle,D as Variant,ye as __namedExportsOrder,ke as default};
