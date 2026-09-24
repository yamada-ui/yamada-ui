import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Nn as r,St as i,Tn as a,Tt as o,Xn as s,Yt as c,_t as l,bn as u,dn as d,i as f,it as p,nr as m,o as h,on as g,ot as _,un as v,xn as y}from"./props-Bz1FL_va.js";import{t as b}from"./jsx-runtime-BdxMnOeJ.js";import{C as ee,E as te,T as ne,d as re,f as x,w as ie}from"./utils-DG4lHdyV.js";import{n as ae,t as oe}from"./effect-CjnfyxRk.js";import{d as se,i as ce,n as le,r as ue}from"./create-component-DtmnY_ce.js";import{n as de,t as fe}from"./check-icon-B4K3BaPN.js";import{r as pe,t as me}from"./use-controllable-state-tJaJeRqU.js";import{n as he,t as ge}from"./use-descendants-CXp1GoPL.js";import{n as _e,t as ve}from"./use-value-DpgqT3Bp.js";import{r as ye,t as S}from"./button-CFBNyQlD.js";import{n as be,t as C}from"./button-group-xlX-FInQ.js";import{n as xe,t as Se}from"./box-C47iDJeO.js";import{n as Ce,t as we}from"./v-stack-DgxvBjIl.js";import{n as Te,t as Ee}from"./use-lazy-mount-CUKZ9VNv.js";import{n as De,t as Oe}from"./props-table-CLkISL0o.js";var ke;function Ae(){return(Ae=e((()=>{se(),ke=ce({base:{description:{color:`fg.muted`},indicator:{alignItems:`center`,boxSize:`{size}`,display:`flex`,flexShrink:`0`,fontWeight:`medium`,justifyContent:`center`,rounded:`full`,transitionDuration:`moderate`,transitionProperty:`common`},item:{display:`flex`,flex:`1 0 0`,position:`relative`,_last:{"& [role=separator]":{display:`none`},flex:`initial`}},list:{display:`flex`,gap:`3`,justifyContent:`space-between`},root:{display:`flex`,gap:`4`,w:`full`},separator:{bg:`border`,flex:`1`,transitionDuration:`moderate`,transitionProperty:`common`},title:{fontWeight:`medium`}},props:{orientation:{horizontal:{item:{alignItems:`center`,flexDirection:`row`},list:{alignItems:`center`,flexDirection:`row`,w:`full`},root:{flexDirection:`column`},separator:{h:`{thickness}`,w:`full`}},vertical:{content:{flex:`1`},item:{alignItems:`flex-start`},list:{alignItems:`flex-start`,flexDirection:`column`},root:{flexDirection:`row`},separator:{h:`full`,insetBlockStart:`calc({size} + {gap})`,insetInlineStart:`calc(({size} / 2) - ({thickness} / 2))`,maxH:`calc(full - {size} - {gap})`,position:`absolute`,w:`{thickness}`}}}},variants:{solid:{indicator:{_complete:{layerStyle:`solid`},_current:{bg:`colorScheme.muted`,color:`colorScheme.fg`},_incomplete:{bg:`bg.subtle`,color:`fg.emphasized`}},separator:{_complete:{bg:`colorScheme.solid`}}},subtle:{indicator:{_complete:{bg:`colorScheme.emphasized`,color:`colorScheme.fg`},_current:{bg:`colorScheme.muted`,color:`colorScheme.fg`},_incomplete:{bg:`bg.subtle`,color:`fg.emphasized`}},separator:{_complete:{bg:`colorScheme.emphasized`}}}},sizes:{sm:{indicator:{fontSize:`md`},item:{"--gap":`sizes.3`,"--size":`sizes.8`,"--thickness":`sizes.0.5`,fontSize:`xs`,gap:`3`}},md:{indicator:{fontSize:`md`},item:{"--gap":`sizes.3`,"--size":`sizes.10`,"--thickness":`sizes.0.5`,fontSize:`sm`,gap:`3`}},lg:{indicator:{fontSize:`lg`},item:{"--gap":`sizes.3`,"--size":`sizes.12`,"--thickness":`sizes.0.5`,gap:`3`}}},defaultProps:{size:`md`,variant:`solid`,orientation:`horizontal`}})})))()}var w,je,Me,Ne,Pe,T,Fe,E,Ie,Le;function Re(){return(Re=e((()=>{w=t(),f(),ee(),me(),he(),te(),d(),c(),y(),p(),oe(),{DescendantsContext:je,useDescendant:Me,useDescendants:Ne}=ge(),[Pe,T]=ne({name:`StepsContext`}),[Fe,E]=ne({name:`StepsItemContext`}),Ie=({count:e=0,defaultIndex:t=0,index:n,orientation:r=`horizontal`,onChange:i,...a}={})=>{let o=Ne(),[s,c]=pe({defaultValue:t,value:n,onChange:i}),l=(0,w.useId)(),d=(0,w.useCallback)(e=>e<s?`complete`:e>s?`incomplete`:`current`,[s]),f=(0,w.useCallback)(()=>c(e=>Math.max(0,e-1)),[c]),p=(0,w.useCallback)(()=>{c(t=>Math.min(e,t+1))},[e,c]),m=(0,w.useCallback)((e={})=>h(a,e)(),[a]),g=(0,w.useCallback)(e=>({"data-orientation":r,...e}),[r]),_=(0,w.useCallback)(({index:t=e,...n}={})=>({id:`${l}-${t}`,hidden:t!==s,tabIndex:0,...n}),[e,l,s]),v=(0,w.useCallback)((e={})=>({disabled:s===0,...e,onClick:u(e.onClick,f)}),[f,s]);return{id:l,count:e,descendants:o,getStatus:d,index:s,orientation:r,setIndex:c,getContentProps:_,getListProps:g,getNextTriggerProps:(0,w.useCallback)((t={})=>({disabled:e<=s,...t,onClick:u(t.onClick,p)}),[e,s,p]),getPrevTriggerProps:v,getRootProps:m,onNext:p,onPrev:f}},Le=({"aria-labelledby":e,index:t,...r})=>{let{descendants:i,register:a}=Me(),{id:o,getStatus:s,orientation:c}=T(),l=s(t),u=l===`current`,d=t===0,f=t===i.lastValue()?.index,p=`data-${l}`,{getDocument:m}=ie();ae(()=>{let e=i.value(t)?.node,n=!!m()?.getElementById(`${o}-${t}`);e&&n&&g(e,`aria-labelledby`,`${o}-${t}`)},[i,m,o,t]);let y=(0,w.useCallback)(({ref:t,"aria-labelledby":i,...o}={})=>h({"aria-current":u?`step`:void 0,"aria-labelledby":v(e,i),"data-orientation":c,[p]:n(!0)},r,o,{ref:_(t,a)})(),[e,u,c,p,r,a]),b=(0,w.useCallback)(e=>({[p]:n(!0),...e}),[p]);return{first:d,index:t,last:f,status:l,getDescriptionProps:(0,w.useCallback)(e=>({[p]:n(!0),...e}),[p]),getIndicatorProps:(0,w.useCallback)(e=>({[p]:n(!0),...e}),[p]),getRootProps:y,getSeparatorProps:(0,w.useCallback)(e=>({"data-orientation":c,role:`separator`,[p]:n(!0),...e}),[c,p]),getTitleProps:b}}})))()}var D,O,ze,Be,k,Ve,A,He,j,M,N,P,Ue,F,I,L,R,z,B,V,H;function We(){return(We=e((()=>{D=t(),ue(),re(),Ee(),ve(),l(),de(),Ae(),Re(),O=b(),{ComponentContext:ze,PropsContext:Be,useComponentContext:k,usePropsContext:Ve,withContext:A,withProvider:He}=le(`steps`,ke),j=He(({children:e,items:t=[],lazy:n,lazyBehavior:r,orientation:a,...s})=>{let c=_e(a),l=o(e),u=i(l,M),{id:d,count:f,descendants:p,getStatus:m,index:h,orientation:g,setIndex:_,getContentProps:v,getListProps:y,getNextTriggerProps:b,getPrevTriggerProps:ee,getRootProps:te,onNext:ne,onPrev:re}=Ie({count:t.length||D.Children.count(u?.props.children),orientation:c,...s}),ie=(0,D.useMemo)(()=>({items:t,lazy:n,lazyBehavior:r}),[t,n,r]),ae=(0,D.useMemo)(()=>({id:d,count:f,getStatus:m,index:h,orientation:g,setIndex:_,getContentProps:v,getListProps:y,getNextTriggerProps:b,getPrevTriggerProps:ee,onNext:ne,onPrev:re}),[d,f,h,g,_,m,ne,re,y,b,ee,v]);return(0,O.jsx)(je,{value:p,children:(0,O.jsx)(Pe,{value:ae,children:(0,O.jsx)(ze,{value:ie,children:(0,O.jsx)(x.div,{...te(),children:e})})})})},`root`,{transferProps:[`orientation`]})(),M=A(({children:e,...t})=>{let{items:n}=k(),{getListProps:r}=T(),i=(0,D.useMemo)(()=>e||n?.map(({complete:e,content:t,current:n,description:r,hasSeparator:i=!0,incomplete:a,title:o,contentProps:s,descriptionProps:c,indicatorProps:l,separatorProps:u,titleProps:d,...f},p)=>(0,O.jsxs)(N,{index:p,title:o,...f,children:[(0,O.jsx)(P,{complete:e,current:n,incomplete:a,...l}),(0,O.jsxs)(x.div,{children:[o?(0,O.jsx)(F,{...d,children:o}):null,r?(0,O.jsx)(I,{...c,children:r}):null]}),i?(0,O.jsx)(L,{...u}):null]},p)),[e,n]);return(0,O.jsx)(x.ol,{...r(t),children:i})},`list`)(),N=A(e=>{let{first:t,index:n,last:r,status:i,getDescriptionProps:a,getIndicatorProps:o,getRootProps:s,getSeparatorProps:c,getTitleProps:l}=Le(e),u=(0,D.useMemo)(()=>({first:t,index:n,last:r,status:i,getDescriptionProps:a,getIndicatorProps:o,getSeparatorProps:c,getTitleProps:l}),[t,n,r,i,l,a,c,o]);return(0,O.jsx)(Fe,{value:u,children:(0,O.jsx)(x.li,{...s()})})},`item`)(),P=A(({complete:e=(0,O.jsx)(fe,{}),current:t=(0,O.jsx)(Ue,{}),incomplete:n=(0,O.jsx)(Ue,{}),...r})=>{let{status:i,getIndicatorProps:a}=E(),o=(0,D.useMemo)(()=>({complete:e,current:t,incomplete:n}),[e,t,n]);return(0,O.jsx)(x.div,{...a(r),children:o[i]})},`indicator`)(),Ue=A(`span`,`number`)(void 0,({children:e,...t})=>{let{index:n}=E();return{...t,children:e??n+1}}),F=A(`h3`,`title`)(void 0,e=>{let{getTitleProps:t}=E();return t(e)}),I=A(`p`,`description`)(void 0,e=>{let{getDescriptionProps:t}=E();return t(e)}),L=A(`div`,`separator`)(void 0,e=>{let{getSeparatorProps:t}=E();return t(e)}),R=({children:e})=>{let{items:t}=k();return(0,D.useMemo)(()=>e||t?.map(({content:e,contentProps:t},n)=>m(e)||s(e)?null:(0,O.jsx)(z,{index:n,...t,children:e},n)),[e,t])},z=A(`div`,`content`)(void 0,({index:e,...t})=>{let{lazy:n,lazyBehavior:r}=k(),{index:i,getContentProps:a}=T(),o=Te({lazy:n,lazyBehavior:r,mounted:e===i,...t});return{...a({index:e,...t}),children:o}}),B=A(`div`,{name:`CompletedContent`,slot:[`content`,`completed`]})(void 0,e=>{let{lazy:t,lazyBehavior:n}=k(),{count:r,index:i,getContentProps:a}=T(),o=Te({lazy:t,lazyBehavior:n,mounted:r!==0&&r===i,...e});return{...a(e),children:o}}),V=A(`button`,{name:`PrevTrigger`,slot:[`trigger`,`prev`]})(e=>{let{getPrevTriggerProps:t}=T();return{asChild:!0,...t(e)}}),H=A(`button`,{name:`NextTrigger`,slot:[`trigger`,`next`]})(e=>{let{getNextTriggerProps:t}=T();return{asChild:!0,...t(e)}})})))()}var U,W,Ge,G,K,q,J,Y,X,Z,Q,$,Ke;function qe(){return(qe=e((()=>{U=t(),De(),We(),r(),xe(),be(),ye(),Ce(),W=b(),Ge={component:j,title:`Components / Steps`},G=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]})},K=()=>{let e=(0,U.useMemo)(()=>[{description:`レッドリボン軍`,title:`孫悟空少年編`},{description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsx)(Oe,{variant:`stack`,columns:[`solid`,`subtle`],rows:a,children:(t,n,r)=>(0,W.jsxs)(j,{colorScheme:n,variant:t,defaultIndex:1,items:e,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]},r)})},q=()=>{let e=(0,U.useMemo)(()=>[{description:`レッドリボン軍`,title:`孫悟空少年編`},{description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsx)(Oe,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,W.jsxs)(j,{size:n,defaultIndex:1,items:e,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]},r)})},J=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(j,{items:e,orientation:`horizontal`,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]}),(0,W.jsxs)(j,{h:`lg`,items:e,orientation:`vertical`,children:[(0,W.jsx)(M,{}),(0,W.jsxs)(we,{flex:`1`,children:[(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]})]})]})},Y=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,lazy:!0,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]})},X=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,lazy:!0,lazyBehavior:`keepMounted`,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]})},Z=()=>{let e=(0,U.useMemo)(()=>[{complete:`😇`,current:`😎`,description:`レッドリボン軍`,incomplete:`😑`,title:`孫悟空少年編`},{complete:`😇`,current:`😎`,description:`ピッコロ大魔王`,incomplete:`😑`,title:`ピッコロ大魔王編`},{complete:`😇`,current:`😎`,description:`ベジータ・ナッパ`,incomplete:`😑`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,children:[(0,W.jsx)(M,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]})},Q=()=>(0,W.jsxs)(j,{children:[(0,W.jsxs)(M,{children:[(0,W.jsxs)(N,{index:0,children:[(0,W.jsx)(P,{}),(0,W.jsxs)(Se,{children:[(0,W.jsx)(F,{children:`孫悟空少年編`}),(0,W.jsx)(I,{children:`レッドリボン軍`})]}),(0,W.jsx)(L,{})]}),(0,W.jsxs)(N,{index:1,children:[(0,W.jsx)(P,{}),(0,W.jsxs)(Se,{children:[(0,W.jsx)(F,{children:`ピッコロ大魔王編`}),(0,W.jsx)(I,{children:`ピッコロ大魔王`})]}),(0,W.jsx)(L,{})]}),(0,W.jsxs)(N,{index:2,children:[(0,W.jsx)(P,{}),(0,W.jsxs)(Se,{children:[(0,W.jsx)(F,{children:`サイヤ人編`}),(0,W.jsx)(I,{children:`ベジータ・ナッパ`})]}),(0,W.jsx)(L,{})]})]}),(0,W.jsxs)(R,{children:[(0,W.jsx)(z,{index:0,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`}),(0,W.jsx)(z,{index:1,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`}),(0,W.jsx)(z,{index:2,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`})]}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]}),$=()=>{let[e,t]=(0,U.useState)(0),n=(0,U.useMemo)(()=>[{description:`レッドリボン軍`,title:`孫悟空少年編`},{description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{index:e,items:n,onChange:t,children:[(0,W.jsx)(M,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(S,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(S,{children:`Next`})})]})]})},Ke=[`Basic`,`Variant`,`Size`,`Orientation`,`Lazy`,`LazyBehavior`,`CustomIndicator`,`CustomComponent`,`CustomControl`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    content: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    content: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    content: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <Steps.Root items={items}>
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <PropsTable variant="stack" columns={["solid", "subtle"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Steps.Root key={key} colorScheme={row} variant={column} defaultIndex={1} items={items}>
            <Steps.List />
            <Steps.Contents />

            <ButtonGroup.Root>
              <Steps.PrevTrigger>
                <ButtonGroup.Item>Prev</ButtonGroup.Item>
              </Steps.PrevTrigger>
              <Steps.NextTrigger>
                <ButtonGroup.Item>Next</ButtonGroup.Item>
              </Steps.NextTrigger>
            </ButtonGroup.Root>
          </Steps.Root>;
    }}
    </PropsTable>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
      return <Steps.Root key={key} size={row} defaultIndex={1} items={items}>
            <Steps.List />
            <Steps.Contents />

            <ButtonGroup.Root>
              <Steps.PrevTrigger>
                <ButtonGroup.Item>Prev</ButtonGroup.Item>
              </Steps.PrevTrigger>
              <Steps.NextTrigger>
                <ButtonGroup.Item>Next</ButtonGroup.Item>
              </Steps.NextTrigger>
            </ButtonGroup.Root>
          </Steps.Root>;
    }}
    </PropsTable>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    content: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    content: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    content: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <>
      <Steps.Root items={items} orientation="horizontal">
        <Steps.List />
        <Steps.Contents />
        <Steps.CompletedContent>
          地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
        </Steps.CompletedContent>

        <ButtonGroup.Root>
          <Steps.PrevTrigger>
            <ButtonGroup.Item>Prev</ButtonGroup.Item>
          </Steps.PrevTrigger>
          <Steps.NextTrigger>
            <ButtonGroup.Item>Next</ButtonGroup.Item>
          </Steps.NextTrigger>
        </ButtonGroup.Root>
      </Steps.Root>

      <Steps.Root h="lg" items={items} orientation="vertical">
        <Steps.List />

        <VStack flex="1">
          <Steps.Contents />
          <Steps.CompletedContent>
            地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
          </Steps.CompletedContent>

          <ButtonGroup.Root>
            <Steps.PrevTrigger>
              <ButtonGroup.Item>Prev</ButtonGroup.Item>
            </Steps.PrevTrigger>
            <Steps.NextTrigger>
              <ButtonGroup.Item>Next</ButtonGroup.Item>
            </Steps.NextTrigger>
          </ButtonGroup.Root>
        </VStack>
      </Steps.Root>
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    content: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    content: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    content: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <Steps.Root items={items} lazy>
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    content: "地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    content: "天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    content: "ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <Steps.Root items={items} lazy lazyBehavior="keepMounted">
      <Steps.List />
      <Steps.Contents />
      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.Item[] = useMemo(() => [{
    complete: \`😇\`,
    current: \`😎\`,
    description: "レッドリボン軍",
    incomplete: \`😑\`,
    title: "孫悟空少年編"
  }, {
    complete: \`😇\`,
    current: \`😎\`,
    description: "ピッコロ大魔王",
    incomplete: \`😑\`,
    title: "ピッコロ大魔王編"
  }, {
    complete: \`😇\`,
    current: \`😎\`,
    description: "ベジータ・ナッパ",
    incomplete: \`😑\`,
    title: "サイヤ人編"
  }], []);
  return <Steps.Root items={items}>
      <Steps.List />

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <Steps.Root>
      <Steps.List>
        <Steps.Item index={0}>
          <Steps.Indicator />
          <Box>
            <Steps.Title>孫悟空少年編</Steps.Title>
            <Steps.Description>レッドリボン軍</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={1}>
          <Steps.Indicator />
          <Box>
            <Steps.Title>ピッコロ大魔王編</Steps.Title>
            <Steps.Description>ピッコロ大魔王</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={2}>
          <Steps.Indicator />
          <Box>
            <Steps.Title>サイヤ人編</Steps.Title>
            <Steps.Description>ベジータ・ナッパ</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
      </Steps.List>

      <Steps.Contents>
        <Steps.Content index={0}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </Steps.Content>
        <Steps.Content index={1}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </Steps.Content>
        <Steps.Content index={2}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </Steps.Content>
      </Steps.Contents>

      <Steps.CompletedContent>
        地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
      </Steps.CompletedContent>

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const items: Steps.Item[] = useMemo(() => [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }], []);
  return <Steps.Root index={index} items={items} onChange={setIndex}>
      <Steps.List />

      <ButtonGroup.Root>
        <Steps.PrevTrigger>
          <ButtonGroup.Item>Prev</ButtonGroup.Item>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <ButtonGroup.Item>Next</ButtonGroup.Item>
        </Steps.NextTrigger>
      </ButtonGroup.Root>
    </Steps.Root>;
}`,...$.parameters?.docs?.source}}}})))()}qe();export{G as Basic,Q as CustomComponent,$ as CustomControl,Z as CustomIndicator,Y as Lazy,X as LazyBehavior,J as Orientation,q as Size,K as Variant,Ke as __namedExportsOrder,Ge as default};