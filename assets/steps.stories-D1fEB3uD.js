import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{An as n,At as r,En as i,Gt as a,Rn as o,Tn as s,Tt as c,bt as l,dn as u,en as d,i as f,o as p,sr as m,tr as h}from"./props-BGlEPbcT.js";import{t as g}from"./jsx-runtime-BdxMnOeJ.js";import{C as _,E as v,T as y,d as ee,f as b,w as te}from"./utils-AU-L7yot.js";import{n as ne,t as re}from"./effect-DSHKlzEK.js";import{d as ie,i as ae,n as oe,r as se}from"./create-component-bU8PsV5C.js";import{n as ce,t as le}from"./check-icon-BQwcGYJ7.js";import{r as ue,t as de}from"./use-controllable-state-DMHLeVyZ.js";import{n as fe,t as pe}from"./use-descendants-D1jwBp2w.js";import{n as me,t as he}from"./use-value-CdRR9QhC.js";import{r as ge,t as x}from"./button-QjBLhmmI.js";import{n as _e,t as S}from"./button-group-CC3GypbN.js";import{n as ve,t as C}from"./box-B2f0z7II.js";import{n as ye,t as be}from"./v-stack-BfqYc92C.js";import{n as xe,t as Se}from"./use-lazy-mount-B7G9Nic_.js";import{n as Ce,t as we}from"./props-table-f1Xpb6Bc.js";var Te;function Ee(){return(Ee=e((()=>{ie(),Te=ae({base:{description:{color:`fg.muted`},indicator:{alignItems:`center`,boxSize:`{size}`,display:`flex`,flexShrink:`0`,fontWeight:`medium`,justifyContent:`center`,rounded:`full`,transitionDuration:`moderate`,transitionProperty:`common`},item:{display:`flex`,flex:`1 0 0`,position:`relative`,_last:{"& [role=separator]":{display:`none`},flex:`initial`}},list:{display:`flex`,gap:`3`,justifyContent:`space-between`},root:{display:`flex`,gap:`4`,w:`full`},separator:{bg:`border`,flex:`1`,transitionDuration:`moderate`,transitionProperty:`common`},title:{fontWeight:`medium`}},props:{orientation:{horizontal:{item:{alignItems:`center`,flexDirection:`row`},list:{alignItems:`center`,flexDirection:`row`,w:`full`},root:{flexDirection:`column`},separator:{h:`{thickness}`,w:`full`}},vertical:{content:{flex:`1`},item:{alignItems:`flex-start`},list:{alignItems:`flex-start`,flexDirection:`column`},root:{flexDirection:`row`},separator:{h:`full`,insetBlockStart:`calc({size} + {gap})`,insetInlineStart:`calc(({size} / 2) - ({thickness} / 2))`,maxH:`calc(full - {size} - {gap})`,position:`absolute`,w:`{thickness}`}}}},variants:{solid:{indicator:{_complete:{layerStyle:`solid`},_current:{bg:`colorScheme.muted`,color:`colorScheme.fg`},_incomplete:{bg:`bg.subtle`,color:`fg.emphasized`}},separator:{_complete:{bg:`colorScheme.solid`}}},subtle:{indicator:{_complete:{bg:`colorScheme.emphasized`,color:`colorScheme.fg`},_current:{bg:`colorScheme.muted`,color:`colorScheme.fg`},_incomplete:{bg:`bg.subtle`,color:`fg.emphasized`}},separator:{_complete:{bg:`colorScheme.emphasized`}}}},sizes:{sm:{indicator:{fontSize:`md`},item:{"--gap":`sizes.3`,"--size":`sizes.8`,"--thickness":`sizes.0.5`,fontSize:`xs`,gap:`3`}},md:{indicator:{fontSize:`md`},item:{"--gap":`sizes.3`,"--size":`sizes.10`,"--thickness":`sizes.0.5`,fontSize:`sm`,gap:`3`}},lg:{indicator:{fontSize:`lg`},item:{"--gap":`sizes.3`,"--size":`sizes.12`,"--thickness":`sizes.0.5`,gap:`3`}}},defaultProps:{size:`md`,variant:`solid`,orientation:`horizontal`}})})))()}var w,De,Oe,ke,Ae,T,je,E,Me,Ne;function Pe(){return(Pe=e((()=>{w=t(),f(),_(),de(),fe(),v(),d(),i(),re(),{DescendantsContext:De,useDescendant:Oe,useDescendants:ke}=pe(),[Ae,T]=y({name:`StepsContext`}),[je,E]=y({name:`StepsItemContext`}),Me=({count:e=0,defaultIndex:t=0,index:n,orientation:r=`horizontal`,onChange:i,...a}={})=>{let o=ke(),[c,l]=ue({defaultValue:t,value:n,onChange:i}),u=(0,w.useId)(),d=(0,w.useCallback)(e=>e<c?`complete`:e>c?`incomplete`:`current`,[c]),f=(0,w.useCallback)(()=>l(e=>Math.max(0,e-1)),[l]),m=(0,w.useCallback)(()=>{l(t=>Math.min(e,t+1))},[e,l]),h=(0,w.useCallback)((e={})=>p(a,e)(),[a]),g=(0,w.useCallback)(e=>({"data-orientation":r,...e}),[r]),_=(0,w.useCallback)(({index:t=e,...n}={})=>({id:`${u}-${t}`,hidden:t!==c,tabIndex:0,...n}),[e,u,c]),v=(0,w.useCallback)((e={})=>({disabled:c===0,...e,onClick:s(e.onClick,f)}),[f,c]);return{id:u,count:e,descendants:o,getStatus:d,index:c,orientation:r,setIndex:l,getContentProps:_,getListProps:g,getNextTriggerProps:(0,w.useCallback)((t={})=>({disabled:e<=c,...t,onClick:s(t.onClick,m)}),[e,c,m]),getPrevTriggerProps:v,getRootProps:h,onNext:m,onPrev:f}},Ne=({index:e,...t})=>{let{descendants:n,register:r}=Oe(),{id:i,getStatus:o,orientation:s}=T(),c=o(e),l=c===`current`,d=e===0,f=e===n.lastValue()?.index,m=`data-${c}`,{getDocument:h}=te();ne(()=>{let t=n.value(e)?.node,r=!!h()?.getElementById(`${i}-${e}`);t&&r&&u(t,`aria-labelledby`,`${i}-${e}`)},[n,h,i,e]);let g=(0,w.useCallback)((e={})=>p({ref:r,"aria-current":l?`step`:void 0,"data-orientation":s,[m]:a(!0)},t,e)(),[l,s,m,t,r]),_=(0,w.useCallback)(e=>({[m]:a(!0),...e}),[m]);return{first:d,index:e,last:f,status:c,getDescriptionProps:(0,w.useCallback)(e=>({[m]:a(!0),...e}),[m]),getIndicatorProps:(0,w.useCallback)(e=>({[m]:a(!0),...e}),[m]),getRootProps:g,getSeparatorProps:(0,w.useCallback)(e=>({"data-orientation":s,role:`separator`,[m]:a(!0),...e}),[s,m]),getTitleProps:_}}})))()}var D,O,Fe,Ie,k,Le,A,Re,j,M,N,P,ze,F,I,L,R,z,B,V,H;function Be(){return(Be=e((()=>{D=t(),se(),ee(),Se(),he(),l(),ce(),Ee(),Pe(),O=g(),{ComponentContext:Fe,PropsContext:Ie,useComponentContext:k,usePropsContext:Le,withContext:A,withProvider:Re}=oe(`steps`,Te),j=Re(({children:e,items:t=[],lazy:n,lazyBehavior:i,orientation:a,...o})=>{let s=me(a),l=r(e),u=c(l,M),{id:d,count:f,descendants:p,getStatus:m,index:h,orientation:g,setIndex:_,getContentProps:v,getListProps:y,getNextTriggerProps:ee,getPrevTriggerProps:te,getRootProps:ne,onNext:re,onPrev:ie}=Me({count:t.length||D.Children.count(u?.props.children),orientation:s,...o}),ae=(0,D.useMemo)(()=>({items:t,lazy:n,lazyBehavior:i}),[t,n,i]),oe=(0,D.useMemo)(()=>({id:d,count:f,getStatus:m,index:h,orientation:g,setIndex:_,getContentProps:v,getListProps:y,getNextTriggerProps:ee,getPrevTriggerProps:te,onNext:re,onPrev:ie}),[d,f,h,g,_,m,re,ie,y,ee,te,v]);return(0,O.jsx)(De,{value:p,children:(0,O.jsx)(Ae,{value:oe,children:(0,O.jsx)(Fe,{value:ae,children:(0,O.jsx)(b.div,{...ne(),children:e})})})})},`root`,{transferProps:[`orientation`]})(),M=A(({children:e,...t})=>{let{items:n}=k(),{getListProps:r}=T(),i=(0,D.useMemo)(()=>e||n?.map(({complete:e,content:t,current:n,description:r,hasSeparator:i=!0,incomplete:a,title:o,contentProps:s,descriptionProps:c,indicatorProps:l,separatorProps:u,titleProps:d,...f},p)=>(0,O.jsxs)(N,{index:p,title:o,...f,children:[(0,O.jsx)(P,{complete:e,current:n,incomplete:a,...l}),(0,O.jsxs)(b.div,{children:[o?(0,O.jsx)(F,{...d,children:o}):null,r?(0,O.jsx)(I,{...c,children:r}):null]}),i?(0,O.jsx)(L,{...u}):null]},p)),[e,n]);return(0,O.jsx)(b.ol,{...r(t),children:i})},`list`)(),N=A(e=>{let{first:t,index:n,last:r,status:i,getDescriptionProps:a,getIndicatorProps:o,getRootProps:s,getSeparatorProps:c,getTitleProps:l}=Ne(e),u=(0,D.useMemo)(()=>({first:t,index:n,last:r,status:i,getDescriptionProps:a,getIndicatorProps:o,getSeparatorProps:c,getTitleProps:l}),[t,n,r,i,l,a,c,o]);return(0,O.jsx)(je,{value:u,children:(0,O.jsx)(b.li,{...s()})})},`item`)(),P=A(({complete:e=(0,O.jsx)(le,{}),current:t=(0,O.jsx)(ze,{}),incomplete:n=(0,O.jsx)(ze,{}),...r})=>{let{status:i,getIndicatorProps:a}=E(),o=(0,D.useMemo)(()=>({complete:e,current:t,incomplete:n}),[e,t,n]);return(0,O.jsx)(b.div,{...a(r),children:o[i]})},`indicator`)(),ze=A(`span`,`number`)(void 0,({children:e,...t})=>{let{index:n}=E();return{...t,children:e??n+1}}),F=A(`h3`,`title`)(void 0,e=>{let{getTitleProps:t}=E();return t(e)}),I=A(`p`,`description`)(void 0,e=>{let{getDescriptionProps:t}=E();return t(e)}),L=A(`div`,`separator`)(void 0,e=>{let{getSeparatorProps:t}=E();return t(e)}),R=({children:e})=>{let{items:t}=k();return(0,D.useMemo)(()=>e||t?.map(({content:e,contentProps:t},n)=>m(e)||h(e)?null:(0,O.jsx)(z,{index:n,...t,children:e},n)),[e,t])},z=A(`div`,`content`)(void 0,({index:e,...t})=>{let{lazy:n,lazyBehavior:r}=k(),{index:i,getContentProps:a}=T(),o=xe({lazy:n,lazyBehavior:r,mounted:e===i,...t});return{...a({index:e,...t}),children:o}}),B=A(`div`,{name:`CompletedContent`,slot:[`content`,`completed`]})(void 0,e=>{let{lazy:t,lazyBehavior:n}=k(),{count:r,index:i,getContentProps:a}=T(),o=xe({lazy:t,lazyBehavior:n,mounted:r!==0&&r===i,...e});return{...a(e),children:o}}),V=A(`button`,{name:`PrevTrigger`,slot:[`trigger`,`prev`]})(e=>{let{getPrevTriggerProps:t}=T();return{asChild:!0,...t(e)}}),H=A(`button`,{name:`NextTrigger`,slot:[`trigger`,`next`]})(e=>{let{getNextTriggerProps:t}=T();return{asChild:!0,...t(e)}})})))()}var U,W,Ve,G,K,q,J,Y,X,Z,Q,$,He;function Ue(){return(Ue=e((()=>{U=t(),Ce(),Be(),o(),ve(),_e(),ge(),ye(),W=g(),Ve={component:j,title:`Components / Steps`},G=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]})},K=()=>{let e=(0,U.useMemo)(()=>[{description:`レッドリボン軍`,title:`孫悟空少年編`},{description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsx)(we,{variant:`stack`,columns:[`solid`,`subtle`],rows:n,children:(t,n,r)=>(0,W.jsxs)(j,{colorScheme:n,variant:t,defaultIndex:1,items:e,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]},r)})},q=()=>{let e=(0,U.useMemo)(()=>[{description:`レッドリボン軍`,title:`孫悟空少年編`},{description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsx)(we,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,W.jsxs)(j,{size:n,defaultIndex:1,items:e,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]},r)})},J=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(j,{items:e,orientation:`horizontal`,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]}),(0,W.jsxs)(j,{h:`lg`,items:e,orientation:`vertical`,children:[(0,W.jsx)(M,{}),(0,W.jsxs)(be,{flex:`1`,children:[(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]})]})]})},Y=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,lazy:!0,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]})},X=()=>{let e=(0,U.useMemo)(()=>[{content:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`,description:`レッドリボン軍`,title:`孫悟空少年編`},{content:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`,description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{content:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`,description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,lazy:!0,lazyBehavior:`keepMounted`,children:[(0,W.jsx)(M,{}),(0,W.jsx)(R,{}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]})},Z=()=>{let e=(0,U.useMemo)(()=>[{complete:`😇`,current:`😎`,description:`レッドリボン軍`,incomplete:`😑`,title:`孫悟空少年編`},{complete:`😇`,current:`😎`,description:`ピッコロ大魔王`,incomplete:`😑`,title:`ピッコロ大魔王編`},{complete:`😇`,current:`😎`,description:`ベジータ・ナッパ`,incomplete:`😑`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{items:e,children:[(0,W.jsx)(M,{}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]})},Q=()=>(0,W.jsxs)(j,{children:[(0,W.jsxs)(M,{children:[(0,W.jsxs)(N,{index:0,children:[(0,W.jsx)(P,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(F,{children:`孫悟空少年編`}),(0,W.jsx)(I,{children:`レッドリボン軍`})]}),(0,W.jsx)(L,{})]}),(0,W.jsxs)(N,{index:1,children:[(0,W.jsx)(P,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(F,{children:`ピッコロ大魔王編`}),(0,W.jsx)(I,{children:`ピッコロ大魔王`})]}),(0,W.jsx)(L,{})]}),(0,W.jsxs)(N,{index:2,children:[(0,W.jsx)(P,{}),(0,W.jsxs)(C,{children:[(0,W.jsx)(F,{children:`サイヤ人編`}),(0,W.jsx)(I,{children:`ベジータ・ナッパ`})]}),(0,W.jsx)(L,{})]})]}),(0,W.jsxs)(R,{children:[(0,W.jsx)(z,{index:0,children:`地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。`}),(0,W.jsx)(z,{index:1,children:`天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。`}),(0,W.jsx)(z,{index:2,children:`ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。`})]}),(0,W.jsx)(B,{children:`地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。`}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]}),$=()=>{let[e,t]=(0,U.useState)(0),n=(0,U.useMemo)(()=>[{description:`レッドリボン軍`,title:`孫悟空少年編`},{description:`ピッコロ大魔王`,title:`ピッコロ大魔王編`},{description:`ベジータ・ナッパ`,title:`サイヤ人編`}],[]);return(0,W.jsxs)(j,{index:e,items:n,onChange:t,children:[(0,W.jsx)(M,{}),(0,W.jsxs)(S,{children:[(0,W.jsx)(V,{children:(0,W.jsx)(x,{children:`Prev`})}),(0,W.jsx)(H,{children:(0,W.jsx)(x,{children:`Next`})})]})]})},He=[`Basic`,`Variant`,`Size`,`Orientation`,`Lazy`,`LazyBehavior`,`CustomIndicator`,`CustomComponent`,`CustomControl`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Ue();export{G as Basic,Q as CustomComponent,$ as CustomControl,Z as CustomIndicator,Y as Lazy,X as LazyBehavior,J as Orientation,q as Size,K as Variant,He as __namedExportsOrder,Ve as default};