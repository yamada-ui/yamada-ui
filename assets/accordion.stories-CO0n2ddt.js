import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Cn as r,Lt as i,Un as a,Yt as o,_t as s,bn as c,dn as l,dt as u,i as d,it as f,lt as p,o as m,ot as h,tr as g,un as ee,wt as _,xn as v}from"./props-Bz1FL_va.js";import{t as y}from"./jsx-runtime-BdxMnOeJ.js";import{E as b,T as x,d as S,f as C}from"./utils-DG4lHdyV.js";import{d as te,i as ne,n as re,r as ie}from"./create-component-DtmnY_ce.js";import{n as w,t as ae}from"./native-accordion.style-BW1KWHqD.js";import{n as oe,t as se}from"./chevron-down-icon-BoO9S_Pl.js";import{n as ce,t as le}from"./minus-icon-CUXRdnUa.js";import{n as ue,t as de}from"./plus-icon-rBaNJSiU.js";import{n as fe,t as pe}from"./collapse-C5CXVe8j.js";import{r as me,t as he}from"./use-controllable-state-tJaJeRqU.js";import{n as ge,t as _e}from"./use-descendants-CXp1GoPL.js";import{n as ve,t as ye}from"./props-table-CLkISL0o.js";var T;function E(){return(E=e((()=>{te(),ae(),T=ne({base:{...w.base,button:{...w.base?.button,"&[aria-disabled=true]":{cursor:`default`}},icon:{...w.base?.icon,_expanded:{transform:`rotate(180deg)`}},panel:{...w.base?.panel,pb:`3`}},variants:w.variants,defaultProps:{variant:`plain`}})})))()}var D,O,k,be,xe,Se,Ce,A,we,Te;function Ee(){return(Ee=e((()=>{D=t(),d(),he(),ge(),o(),b(),l(),v(),f(),p(),{DescendantsContext:O,useDescendant:k,useDescendants:be}=_e(),[xe,Se]=x({name:`AccordionContext`}),[Ce,A]=x({name:`AccordionItemContext`}),we=({defaultIndex:e,index:t,multiple:n,toggle:r,onChange:i,...o}={})=>{(t||e)!=null&&!a(t||e)&&n&&console.warn(`Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.`),n&&r&&console.warn(`Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not`);let s=be(),[c,l]=(0,D.useState)(-1),[u,d]=me({defaultValue:()=>n?e??[]:e??-1,value:t,onChange:i}),f=(0,D.useCallback)((e={})=>m(o,e)(),[o]);return(0,D.useEffect)(()=>()=>l(-1),[]),{descendants:s,focusedIndex:c,index:u,multiple:n,setFocusedIndex:l,setIndex:d,toggle:r,getRootProps:f}},Te=({disabled:e,index:t,...r})=>{let o=(0,D.useId)(),s=(0,D.useId)(),{index:l,multiple:d,setFocusedIndex:f,setIndex:p,toggle:g}=Se(),{descendants:_,register:v}=k({disabled:e}),y=t===-1?!1:a(l)?l.includes(t):l===t;y&&e&&console.warn(`Accordion: Cannot open a disabled accordion item`);let b=(0,D.useCallback)(e=>{t!==-1&&(d&&a(l)?p(e?l.concat(t):l.filter(e=>e!==t)):e?p(t):g&&p(-1))},[d,g,t,l,p]),x=(0,D.useCallback)(()=>{f(t)},[f,t]),S=(0,D.useCallback)(()=>{b(!y),f(t),_.value(t)?.node.focus()},[t,f,y,b,_]),C=(0,D.useCallback)(e=>{u(e,{ArrowDown:()=>{_.enabledNextValue(t)?.node.focus()},ArrowUp:()=>{_.enabledPrevValue(t)?.node.focus()},End:()=>{_.enabledLastValue()?.node.focus()},Home:()=>{_.enabledFirstValue()?.node.focus()}})},[_,t]),te=(0,D.useCallback)((e={})=>m({"data-expanded":n(y)},r,e)(),[y,r]),ne=(0,D.useCallback)(({ref:t,...n}={})=>({id:o,type:`button`,"aria-controls":s,"aria-disabled":i(!d&&!g&&y||e),"aria-expanded":y,tabIndex:0,...n,ref:h(v,t),disabled:e,onClick:c(n.onClick,S),onFocus:c(n.onFocus,x),onKeyDown:c(n.onKeyDown,C)}),[o,y,s,d,g,e,v,S,x,C]),re=(0,D.useCallback)(({"aria-labelledby":e,...t}={})=>({id:s,"aria-labelledby":ee(e,o),role:`region`,...t}),[o,s]);return{disabled:e,open:y,getButtonProps:ne,getIconProps:(0,D.useCallback)(t=>({"aria-disabled":i(!d&&!g&&y||e),"aria-expanded":y,"aria-hidden":!0,role:`presentation`,...t}),[d,g,y,e]),getItemProps:te,getPanelProps:re}}})))()}var j,M,De,Oe,ke,Ae,N,je,P,Me,F,I,L,Ne,R;function Pe(){return(Pe=e((()=>{j=t(),ie(),S(),b(),v(),s(),fe(),oe(),E(),Ee(),M=y(),[De,Oe]=x({name:`ItemComponentContext`}),{ComponentContext:ke,PropsContext:Ae,useComponentContext:N,usePropsContext:je,withContext:P,withProvider:Me}=re(`accordion`,T),F=Me(({children:e,icon:t,iconHidden:n,items:r,...i})=>{let{descendants:a,focusedIndex:o,index:s,multiple:c,setFocusedIndex:l,setIndex:u,toggle:d,getRootProps:f}=we(i),p=(0,j.useMemo)(()=>e||r?.map((e,t)=>(0,M.jsx)(I,{index:t,...e},t)),[e,r]),m=(0,j.useMemo)(()=>({focusedIndex:o,index:s,multiple:c,setFocusedIndex:l,setIndex:u,toggle:d}),[o,s,c,l,u,d]),h=(0,j.useMemo)(()=>({icon:t,iconHidden:n}),[t,n]);return(0,M.jsx)(O,{value:a,children:(0,M.jsx)(xe,{value:m,children:(0,M.jsx)(ke,{value:h,children:(0,M.jsx)(C.div,{...f(),children:p})})})})},`root`)(),I=P(({button:e,children:t,icon:n,...i})=>{let{disabled:a,open:o,getButtonProps:s,getIconProps:c,getItemProps:l,getPanelProps:u}=Te(i),d=(0,j.useMemo)(()=>r(t,{disabled:a,expanded:o}),[t,a,o]),[f,p,m]=_(d,L,R),h=(0,j.useMemo)(()=>({disabled:a,icon:n,open:o,getButtonProps:s,getIconProps:c,getPanelProps:u}),[a,s,u,c,n,o]),g=(0,j.useMemo)(()=>({icon:n}),[n]);return(0,M.jsx)(Ce,{value:h,children:(0,M.jsx)(De,{value:g,children:(0,M.jsxs)(C.div,{...l(),children:[p??(0,M.jsx)(L,{children:r(e,{disabled:a,expanded:o})}),m??(0,M.jsx)(R,{children:f})]})})})},`item`)(),L=P(({children:e,icon:t,containerProps:n,...i})=>{let{icon:a}=N(),{icon:o}=Oe(),{disabled:s,open:c,getButtonProps:l}=A(),u={disabled:s,expanded:c};return(0,M.jsx)(C.h3,{...n,children:(0,M.jsxs)(C.button,{...l(i),children:[e,(0,M.jsx)(Ne,{children:r(t,u)??r(o,u)??r(a,u)})]})})},`button`)(),Ne=P(({children:e=(0,M.jsx)(se,{}),...t})=>{let{iconHidden:n}=N(),{getIconProps:r}=A();return n?null:(0,j.isValidElement)(e)?(0,j.cloneElement)(e,r({...t,...e.props})):j.Children.count(e)>1?j.Children.only(null):null},`icon`)(),R=P(({animationOpacity:e,children:t,delay:n,duration:r,endingHeight:i,startingHeight:a,transition:o,transitionEnd:s,unmountOnExit:c,...l})=>{let{open:u,getPanelProps:d}=A();return(0,M.jsx)(pe,{animationOpacity:e,delay:n,duration:r,endingHeight:i,open:u,startingHeight:a,transition:o,transitionEnd:s,unmountOnExit:c,children:(0,M.jsx)(C.div,{...d(l),children:g(t)?(0,M.jsx)(C.p,{children:t}):t})})},`panel`)()})))()}var z,B,Fe,V,H,U,W,G,K,q,J,Y,X,Z,Q,Ie;function $(){return($=e((()=>{z=t(),ve(),ce(),ue(),Pe(),B=y(),Fe={component:F,title:`Components / Accordion`},V=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{items:e,children:e.map(({button:e,content:t},n)=>(0,B.jsx)(I,{button:e,index:n,children:t},n))})},H=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{items:e})},U=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(ye,{variant:`stack`,rows:[`plain`,`panel`],children:(t,n,r)=>{let i=e.map(e=>({...e,button:`${e.button} (${n})`}));return(0,B.jsx)(F,{variant:n,items:i},r)}})},W=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{defaultIndex:1,items:e})},G=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{items:e,toggle:!0})},K=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{defaultIndex:[1,2],items:e,multiple:!0})},q=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{iconHidden:!0,items:e})},J=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,disabled:!0},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{items:e})},Y=()=>(0,B.jsxs)(F,{children:[(0,B.jsxs)(I,{index:0,children:[(0,B.jsx)(L,{_expanded:{bg:`bg.panel`},children:`孫悟空少年編`}),(0,B.jsx)(R,{pt:3,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`})]}),(0,B.jsxs)(I,{index:1,children:[(0,B.jsx)(L,{_expanded:{bg:`bg.panel`},children:`ピッコロ大魔王編`}),(0,B.jsx)(R,{pt:3,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`})]}),(0,B.jsxs)(I,{index:2,children:[(0,B.jsx)(L,{_expanded:{bg:`bg.panel`},children:`サイヤ人編`}),(0,B.jsx)(R,{pt:3,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`})]})]}),X=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{children:e.map(({button:e,content:t},n)=>(0,B.jsx)(I,{button:e,index:n,children:(0,B.jsx)(R,{bg:`bg.panel`,pt:3,children:t})},n))})},Z=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,B.jsx)(F,{icon:({expanded:e})=>e?(0,B.jsx)(le,{}):(0,B.jsx)(de,{}),items:e})},Q=()=>{let e=(0,z.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]),[t,n]=(0,z.useState)(void 0);return(0,B.jsx)(F,{index:t,items:e,onChange:n})},Ie=[`Basic`,`Items`,`Variant`,`DefaultIndex`,`Toggle`,`Multiple`,`IconHidden`,`Disabled`,`CustomLabel`,`CustomPanel`,`CustomIcon`,`CustomControl`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
        button: \`\${item.button as string} (\${row})\`
      }));
      return <Accordion.Root key={key} variant={row} items={variantItems} />;
    }}
    </PropsTable>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{V as Basic,Q as CustomControl,Z as CustomIcon,Y as CustomLabel,X as CustomPanel,W as DefaultIndex,J as Disabled,q as IconHidden,H as Items,K as Multiple,G as Toggle,U as Variant,Ie as __namedExportsOrder,Fe as default};