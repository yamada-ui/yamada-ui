import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{At as n,Dn as r,En as i,Kt as a,Ut as o,Yn as s,ft as c,i as l,kn as u,lt as d,mt as f,o as p,sr as m,st as h,tn as g,xt as _,yt as v}from"./props-B6HR9zbn.js";import{t as y}from"./jsx-runtime-BdxMnOeJ.js";import{E as b,T as x,d as S,f as C}from"./utils-MTwiMGfu.js";import{d as ee,i as te,n as ne,r as re}from"./create-component-DfdklnlB.js";import{n as w,t as ie}from"./native-accordion.style-O-cv1YmQ.js";import{n as ae,t as oe}from"./chevron-down-icon-DsCF5WC2.js";import{n as se,t as ce}from"./minus-icon-CLEtcl5l.js";import{n as le,t as ue}from"./plus-icon-Dpzl0Nxh.js";import{n as de,t as fe}from"./collapse-B1_rJZK_.js";import{r as pe,t as me}from"./use-controllable-state-DYCe0Jc3.js";import{n as he,t as ge}from"./use-descendants-uDGOS83V.js";import{n as _e,t as ve}from"./props-table-QJnv2pkU.js";var ye;function be(){return(be=e((()=>{ee(),ie(),ye=te({base:{...w.base,button:{...w.base?.button,"&[aria-disabled=true]":{cursor:`default`}},icon:{...w.base?.icon,_expanded:{transform:`rotate(180deg)`}},panel:{...w.base?.panel,pb:`3`}},variants:w.variants,defaultProps:{variant:`plain`}})})))()}var T,xe,Se,Ce,we,E,D,O,k,A;function j(){return(j=e((()=>{T=t(),l(),me(),he(),g(),b(),r(),h(),c(),{DescendantsContext:xe,useDescendant:Se,useDescendants:Ce}=ge(),[we,E]=x({name:`AccordionContext`}),[D,O]=x({name:`AccordionItemContext`}),k=({defaultIndex:e,index:t,multiple:n,toggle:r,onChange:i,...a}={})=>{(t||e)!=null&&!s(t||e)&&n&&console.warn(`Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.`),n&&r&&console.warn(`Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not`);let o=Ce(),[c,l]=(0,T.useState)(-1),[u,d]=pe({defaultValue:()=>n?e??[]:e??-1,value:t,onChange:i}),f=(0,T.useCallback)((e={})=>p(a,e)(),[a]);return(0,T.useEffect)(()=>()=>l(-1),[]),{descendants:o,focusedIndex:c,index:u,multiple:n,setFocusedIndex:l,setIndex:d,toggle:r,getRootProps:f}},A=({disabled:e,index:t,...n})=>{let r=(0,T.useId)(),c=(0,T.useId)(),{index:l,multiple:u,setFocusedIndex:m,setIndex:h,toggle:g}=E(),{descendants:_,register:v}=Se({disabled:e}),y=t===-1?!1:s(l)?l.includes(t):l===t;y&&e&&console.warn(`Accordion: Cannot open a disabled accordion item`);let b=(0,T.useCallback)(e=>{t!==-1&&(u&&s(l)?h(e?l.concat(t):l.filter(e=>e!==t)):e?h(t):g&&h(-1))},[u,g,t,l,h]),x=(0,T.useCallback)(()=>{m(t)},[m,t]),S=(0,T.useCallback)(()=>{b(!y),m(t),_.value(t)?.node.focus()},[t,m,y,b,_]),C=(0,T.useCallback)(e=>{f(e,{ArrowDown:()=>{_.enabledNextValue(t)?.node.focus()},ArrowUp:()=>{_.enabledPrevValue(t)?.node.focus()},End:()=>{_.enabledLastValue()?.node.focus()},Home:()=>{_.enabledFirstValue()?.node.focus()}})},[_,t]),ee=(0,T.useCallback)((e={})=>p({"data-expanded":a(y)},n,e)(),[y,n]),te=(0,T.useCallback)(({ref:t,...n}={})=>({id:r,type:`button`,"aria-controls":c,"aria-disabled":o(!u&&!g&&y||e),"aria-expanded":y,tabIndex:0,...n,ref:d(v,t),disabled:e,onClick:i(n.onClick,S),onFocus:i(n.onFocus,x),onKeyDown:i(n.onKeyDown,C)}),[r,y,c,u,g,e,v,S,x,C]),ne=(0,T.useCallback)((e={})=>p({id:c,"aria-labelledby":r,role:`region`},e)(),[r,c]);return{disabled:e,open:y,getButtonProps:te,getIconProps:(0,T.useCallback)(t=>({"aria-disabled":o(!u&&!g&&y||e),"aria-expanded":y,"aria-hidden":!0,role:`presentation`,...t}),[u,g,y,e]),getItemProps:ee,getPanelProps:ne}}})))()}var M,N,Te,Ee,De,Oe,P,ke,F,Ae,I,L,R,je,z;function Me(){return(Me=e((()=>{M=t(),re(),S(),b(),_(),r(),de(),ae(),be(),j(),N=y(),[Te,Ee]=x({name:`ItemComponentContext`}),{ComponentContext:De,PropsContext:Oe,useComponentContext:P,usePropsContext:ke,withContext:F,withProvider:Ae}=ne(`accordion`,ye),I=Ae(({children:e,icon:t,iconHidden:n,items:r,...i})=>{let{descendants:a,focusedIndex:o,index:s,multiple:c,setFocusedIndex:l,setIndex:u,toggle:d,getRootProps:f}=k(i),p=(0,M.useMemo)(()=>e||r?.map((e,t)=>(0,N.jsx)(L,{index:t,...e},t)),[e,r]),m=(0,M.useMemo)(()=>({focusedIndex:o,index:s,multiple:c,setFocusedIndex:l,setIndex:u,toggle:d}),[o,s,c,l,u,d]),h=(0,M.useMemo)(()=>({icon:t,iconHidden:n}),[t,n]);return(0,N.jsx)(xe,{value:a,children:(0,N.jsx)(we,{value:m,children:(0,N.jsx)(De,{value:h,children:(0,N.jsx)(C.div,{...f(),children:p})})})})},`root`)(),L=F(({button:e,children:t,icon:r,...i})=>{let{disabled:a,open:o,getButtonProps:s,getIconProps:c,getItemProps:l,getPanelProps:d}=A(i),f=(0,M.useMemo)(()=>u(t,{disabled:a,expanded:o}),[t,a,o]),[p,m,h]=n(f,R,z),g=(0,M.useMemo)(()=>({disabled:a,icon:r,open:o,getButtonProps:s,getIconProps:c,getPanelProps:d}),[a,s,d,c,r,o]),_=(0,M.useMemo)(()=>({icon:r}),[r]);return(0,N.jsx)(D,{value:g,children:(0,N.jsx)(Te,{value:_,children:(0,N.jsxs)(C.div,{...l(),children:[m??(0,N.jsx)(R,{children:u(e,{disabled:a,expanded:o})}),h??(0,N.jsx)(z,{children:p})]})})})},`item`)(),R=F(({children:e,icon:t,containerProps:n,...r})=>{let{icon:i}=P(),{icon:a}=Ee(),{disabled:o,open:s,getButtonProps:c}=O(),l={disabled:o,expanded:s};return(0,N.jsx)(C.h3,{...n,children:(0,N.jsxs)(C.button,{...c(r),children:[e,(0,N.jsx)(je,{children:u(t,l)??u(a,l)??u(i,l)})]})})},`button`)(),je=F(({children:e=(0,N.jsx)(oe,{}),...t})=>{let{iconHidden:n}=P(),{getIconProps:r}=O();if(n)return null;let i=v(e);return(0,M.isValidElement)(i)?(0,M.cloneElement)(i,r({...t,...i.props})):M.Children.count(i)>1?M.Children.only(null):null},`icon`)(),z=F(({animationOpacity:e,children:t,delay:n,duration:r,endingHeight:i,startingHeight:a,transition:o,transitionEnd:s,unmountOnExit:c,...l})=>{let{open:u,getPanelProps:d}=O();return(0,N.jsx)(fe,{animationOpacity:e,delay:n,duration:r,endingHeight:i,open:u,startingHeight:a,transition:o,transitionEnd:s,unmountOnExit:c,children:(0,N.jsx)(C.div,{...d(l),children:m(t)?(0,N.jsx)(C.p,{children:t}):t})})},`panel`)()})))()}var B,V,Ne,H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;function Fe(){return(Fe=e((()=>{B=t(),_e(),se(),le(),Me(),V=y(),Ne={component:I,title:`Components / Accordion`},H=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{items:e,children:e.map(({button:e,content:t},n)=>(0,V.jsx)(L,{button:e,index:n,children:t},n))})},U=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{items:e})},W=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(ve,{variant:`stack`,rows:[`plain`,`panel`],children:(t,n,r)=>{let i=e.map(e=>({...e,button:`${e.button} (${n})`}));return(0,V.jsx)(I,{variant:n,items:i},r)}})},G=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{defaultIndex:1,items:e})},K=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{items:e,toggle:!0})},q=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{defaultIndex:[1,2],items:e,multiple:!0})},J=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{iconHidden:!0,items:e})},Y=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,disabled:!0},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{items:e})},X=()=>(0,V.jsxs)(I,{children:[(0,V.jsxs)(L,{index:0,children:[(0,V.jsx)(R,{_expanded:{bg:`bg.panel`},children:`孫悟空少年編`}),(0,V.jsx)(z,{pt:3,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`})]}),(0,V.jsxs)(L,{index:1,children:[(0,V.jsx)(R,{_expanded:{bg:`bg.panel`},children:`ピッコロ大魔王編`}),(0,V.jsx)(z,{pt:3,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`})]}),(0,V.jsxs)(L,{index:2,children:[(0,V.jsx)(R,{_expanded:{bg:`bg.panel`},children:`サイヤ人編`}),(0,V.jsx)(z,{pt:3,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`})]})]}),Z=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{children:e.map(({button:e,content:t},n)=>(0,V.jsx)(L,{button:e,index:n,children:(0,V.jsx)(z,{bg:`bg.panel`,pt:3,children:t})},n))})},Q=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]);return(0,V.jsx)(I,{icon:({expanded:e})=>e?(0,V.jsx)(ce,{}):(0,V.jsx)(ue,{}),items:e})},$=()=>{let e=(0,B.useMemo)(()=>[{button:`孫悟空少年編`,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`},{button:`ピッコロ大魔王編`,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`},{button:`サイヤ人編`,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`}],[]),[t,n]=(0,B.useState)(void 0);return(0,V.jsx)(I,{index:t,items:e,onChange:n})},Pe=[`Basic`,`Items`,`Variant`,`DefaultIndex`,`Toggle`,`Multiple`,`IconHidden`,`Disabled`,`CustomLabel`,`CustomPanel`,`CustomIcon`,`CustomControl`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
  return <Accordion.Root items={items} />;
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
  return <PropsTable variant="stack" rows={["plain", "panel"]}>
      {(_, row, key) => {
      const variantItems = items.map(item => ({
        ...item,
        button: \`\${item.button as string} (\${row})\`
      }));
      return <Accordion.Root key={key} variant={row} items={variantItems} />;
    }}
    </PropsTable>;
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
  return <Accordion.Root defaultIndex={1} items={items} />;
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
  return <Accordion.Root items={items} toggle />;
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
  return <Accordion.Root defaultIndex={[1, 2]} items={items} multiple />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
  return <Accordion.Root icon={({
    expanded
  }) => !expanded ? <PlusIcon /> : <MinusIcon />} items={items} />;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Fe();export{H as Basic,$ as CustomControl,Q as CustomIcon,X as CustomLabel,Z as CustomPanel,G as DefaultIndex,Y as Disabled,J as IconHidden,U as Items,q as Multiple,K as Toggle,W as Variant,Pe as __namedExportsOrder,Ne as default};