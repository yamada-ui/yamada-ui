import{d as wt,c as yt,r as o,m as Mt,h as st,au as _t,b as M,f as Vt,g as Et,R as Ot,Y as $t,j as t,s as D,H as Ht,ah as At,Q as a,C as Ft,V as Wt}from"./iframe-BIJNUwA0.js";import{P as Dt}from"./props-table-lmXFHSBz.js";import{B as nt}from"./box-C2FMWqo9.js";import{u as Lt}from"./index-BTXYm2Iq.js";import{u as Qt}from"./index-0kQpDINk.js";import{u as Ut}from"./index-CH90kZaX.js";import{c as Yt}from"./index-B0lf85jd.js";import{C as qt}from"./check-icon-CgU1WtFM.js";import{B as v}from"./button-group-ggAKX6X5.js";import"./preload-helper-C1FmrZbK.js";import"./grid-ZAyucFZG.js";import"./grid-item-DOf84ZDr.js";import"./for-Cpsr9B86.js";import"./flex-KEdsfNWm.js";import"./heading-Bz9uY6e0.js";import"./use-breakpoint-Des1U5dl.js";import"./use-breakpoint-value-Ci56feJn.js";import"./use-color-mode-value-DllOdTyO.js";import"./group-VmPLRg4N.js";const Jt=wt({base:{description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{size}",display:"flex",flexShrink:"0",fontWeight:"medium",justifyContent:"center",rounded:"full",transitionDuration:"moderate",transitionProperty:"common"},item:{display:"flex",flex:"1 0 0",position:"relative",_last:{"& [role=separator]":{display:"none"},flex:"initial"}},list:{display:"flex",gap:"3",justifyContent:"space-between"},root:{display:"flex",gap:"4",w:"full"},separator:{bg:"border",flex:"1",transitionDuration:"moderate",transitionProperty:"common"},title:{fontWeight:"medium"}},props:{orientation:{horizontal:{item:{alignItems:"center",flexDirection:"row"},list:{alignItems:"center",flexDirection:"row",w:"full"},root:{flexDirection:"column"},separator:{h:"{thickness}",w:"full"}},vertical:{content:{flex:"1"},item:{alignItems:"flex-start"},list:{alignItems:"flex-start",flexDirection:"column"},root:{flexDirection:"row"},separator:{h:"full",insetBlockStart:"calc({size} + {gap})",insetInlineStart:"calc(({size} / 2) - ({thickness} / 2))",maxH:"calc(full - {size} - {gap})",position:"absolute",w:"{thickness}"}}}},variants:{solid:{indicator:{_complete:{layerStyle:"solid"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.solid"}}},subtle:{indicator:{_complete:{bg:"colorScheme.emphasized",color:"colorScheme.fg"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.emphasized"}}}},sizes:{sm:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.8","--thickness":"sizes.0.5",fontSize:"xs",gap:"3"}},md:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.10","--thickness":"sizes.0.5",fontSize:"sm",gap:"3"}},lg:{indicator:{fontSize:"lg"},item:{"--gap":"sizes.3","--size":"sizes.12","--thickness":"sizes.0.5",gap:"3"}}},defaultProps:{size:"md",variant:"solid",orientation:"horizontal"}}),{DescendantsContext:Kt,useDescendant:Xt,useDescendants:Zt}=Yt(),[te,y]=yt({name:"StepsContext"}),[ee,L]=yt({name:"StepsItemContext"}),ne=({count:e=0,defaultIndex:n=0,index:s,orientation:i="horizontal",onChange:p,...l}={})=>{const x=Zt(),[c,u]=Ut({defaultValue:n,value:s,onChange:p}),m=o.useId(),I=o.useCallback(r=>r<c?"complete":r>c?"incomplete":"current",[c]),S=o.useCallback(()=>u(r=>Math.max(0,r-1)),[u]),d=o.useCallback(()=>{u(r=>Math.min(e,r+1))},[e,u]),f=o.useCallback(({ref:r,...T}={})=>({...l,...T,ref:Mt(r,l.ref)}),[l]),G=o.useCallback(r=>({"data-orientation":i,...r}),[i]),b=o.useCallback(({index:r=e,...T}={})=>({id:`${m}-${r}`,hidden:r!==c,tabIndex:0,...T}),[e,m,c]),R=o.useCallback((r={})=>({disabled:c===0,...r,onClick:st(r.onClick,S)}),[S,c]),z=o.useCallback((r={})=>({disabled:e<=c,...r,onClick:st(r.onClick,d)}),[e,c,d]);return{id:m,count:e,descendants:x,getStatus:I,index:c,orientation:i,setIndex:u,getContentProps:b,getListProps:G,getNextTriggerProps:z,getPrevTriggerProps:R,getRootProps:f,onNext:d,onPrev:S}},se=({"aria-labelledby":e,index:n,...s})=>{var T;const{descendants:i,register:p}=Xt(),{id:l,getStatus:x,orientation:c}=y(),u=x(n),m=u==="current",I=n===0,S=n===((T=i.lastValue())==null?void 0:T.index),d=`data-${u}`,{getDocument:f}=_t(),G=o.useCallback(({ref:g,"aria-labelledby":w,..._}={})=>{var V;const et=!!((V=f())!=null&&V.getElementById(`${l}-${n}`));return{"aria-current":m?"step":void 0,"aria-labelledby":Vt(e,w,et?`${l}-${n}`:void 0),"data-orientation":c,[d]:M(!0),...s,..._,ref:Mt(g,p)}},[e,f,l,n,m,c,d,s,p]),b=o.useCallback(g=>({[d]:M(!0),...g}),[d]),R=o.useCallback(g=>({[d]:M(!0),...g}),[d]),z=o.useCallback(g=>({[d]:M(!0),...g}),[d]),r=o.useCallback(g=>({"data-orientation":c,role:"separator",[d]:M(!0),...g}),[c,d]);return{first:I,index:n,last:S,status:u,getDescriptionProps:R,getIndicatorProps:z,getRootProps:G,getSeparatorProps:r,getTitleProps:b}},{ComponentContext:oe,useComponentContext:tt,withContext:C,withProvider:re}=Et("steps",Jt),h=re(({children:e,items:n=[],lazy:s,lazyBehavior:i,orientation:p,...l})=>{const x=Qt(p),c=Ot(e),u=$t(c,j),{id:m,count:I,descendants:S,getStatus:d,index:f,orientation:G,setIndex:b,getContentProps:R,getListProps:z,getNextTriggerProps:r,getPrevTriggerProps:T,getRootProps:g,onNext:w,onPrev:_}=ne({count:n.length||o.Children.count(u==null?void 0:u.props.children),orientation:x,...l}),et=o.useMemo(()=>({items:n,lazy:s,lazyBehavior:i}),[n,s,i]),V=o.useMemo(()=>({id:m,count:I,getStatus:d,index:f,orientation:G,setIndex:b,getContentProps:R,getListProps:z,getNextTriggerProps:r,getPrevTriggerProps:T,onNext:w,onPrev:_}),[m,I,f,G,b,d,w,_,z,r,T,R]);return t.jsx(Kt,{value:S,children:t.jsx(te,{value:V,children:t.jsx(oe,{value:et,children:t.jsx(D.div,{...g(),children:e})})})})},"root",{transferProps:["orientation"]})(),j=C(({children:e,...n})=>{const{items:s}=tt(),{getListProps:i}=y(),p=o.useMemo(()=>e||(s==null?void 0:s.map(({complete:l,content:x,current:c,description:u,hasSeparator:m=!0,incomplete:I,title:S,contentProps:d,descriptionProps:f,indicatorProps:G,separatorProps:b,titleProps:R,...z},r)=>t.jsxs(Y,{index:r,title:S,...z,children:[t.jsx(q,{complete:l,current:c,incomplete:I,...G}),t.jsxs(D.div,{children:[S?t.jsx(J,{...R,children:S}):null,u?t.jsx(K,{...f,children:u}):null]}),m?t.jsx(X,{...b}):null]},r))),[e,s]);return t.jsx(D.ol,{...i(n),children:p})},"list")(),Y=C(e=>{const{first:n,index:s,last:i,status:p,getDescriptionProps:l,getIndicatorProps:x,getRootProps:c,getSeparatorProps:u,getTitleProps:m}=se(e),I=o.useMemo(()=>({first:n,index:s,last:i,status:p,getDescriptionProps:l,getIndicatorProps:x,getSeparatorProps:u,getTitleProps:m}),[n,s,i,p,m,l,u,x]);return t.jsx(ee,{value:I,children:t.jsx(D.li,{...c()})})},"item")(),q=C(({complete:e=t.jsx(qt,{}),current:n=t.jsx(ot,{}),incomplete:s=t.jsx(ot,{}),...i})=>{const{status:p,getIndicatorProps:l}=L(),x=o.useMemo(()=>({complete:e,current:n,incomplete:s}),[e,n,s]);return t.jsx(D.div,{...l(i),children:x[p]})},"indicator")(),ot=C("span","number")(void 0,({children:e,...n})=>{const{index:s}=L();return{...n,children:e??s+1}}),J=C("h3","title")(void 0,e=>{const{getTitleProps:n}=L();return n(e)}),K=C("p","description")(void 0,e=>{const{getDescriptionProps:n}=L();return n(e)}),X=C("div","separator")(void 0,e=>{const{getSeparatorProps:n}=L();return n(e)}),N=({children:e})=>{const{items:n}=tt();return o.useMemo(()=>e||(n==null?void 0:n.map(({content:s,contentProps:i},p)=>Ht(s)||At(s)?null:t.jsx(Z,{index:p,...i,children:s},p))),[e,n])},Z=C("div","content")(void 0,({index:e,...n})=>{const{lazy:s,lazyBehavior:i}=tt(),{index:p,getContentProps:l}=y(),c=Lt({lazy:s,lazyBehavior:i,mounted:e===p,...n});return{...l({index:e,...n}),children:c}}),k=C("div",{name:"CompletedContent",slot:["content","completed"]})(void 0,e=>{const{lazy:n,lazyBehavior:s}=tt(),{count:i,index:p,getContentProps:l}=y(),c=Lt({lazy:n,lazyBehavior:s,mounted:i!==0&&i===p,...e});return{...l(e),children:c}}),P=C("button",{name:"PrevTrigger",slot:["trigger","prev"]})(e=>{const{getPrevTriggerProps:n}=y();return{asChild:!0,...n(e)}}),B=C("button",{name:"NextTrigger",slot:["trigger","next"]})(e=>{const{getNextTriggerProps:n}=y();return{asChild:!0,...n(e)}}),Te={component:h,title:"Components / Steps"},E=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(j,{}),t.jsx(N,{}),t.jsx(k,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]})},O=()=>{const e=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(Dt,{variant:"stack",columns:["solid","subtle"],rows:Ft,children:(n,s,i)=>t.jsxs(h,{colorScheme:s,variant:n,defaultIndex:1,items:e,children:[t.jsx(j,{}),t.jsx(N,{}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]},i)})},$=()=>{const e=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(Dt,{variant:"stack",rows:["sm","md","lg"],children:(n,s,i)=>t.jsxs(h,{size:s,defaultIndex:1,items:e,children:[t.jsx(j,{}),t.jsx(N,{}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]},i)})},H=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(t.Fragment,{children:[t.jsxs(h,{items:e,orientation:"horizontal",children:[t.jsx(j,{}),t.jsx(N,{}),t.jsx(k,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]}),t.jsxs(h,{h:"lg",items:e,orientation:"vertical",children:[t.jsx(j,{}),t.jsxs(Wt,{flex:"1",children:[t.jsx(N,{}),t.jsx(k,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]})]})]})},A=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,children:[t.jsx(j,{}),t.jsx(N,{}),t.jsx(k,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]})},F=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,lazyBehavior:"keepMounted",children:[t.jsx(j,{}),t.jsx(N,{}),t.jsx(k,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]})},W=()=>{const e=o.useMemo(()=>[{complete:"😇",current:"😎",description:"レッドリボン軍",incomplete:"😑",title:"孫悟空少年編"},{complete:"😇",current:"😎",description:"ピッコロ大魔王",incomplete:"😑",title:"ピッコロ大魔王編"},{complete:"😇",current:"😎",description:"ベジータ・ナッパ",incomplete:"😑",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(j,{}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]})},Q=()=>t.jsxs(h,{children:[t.jsxs(j,{children:[t.jsxs(Y,{index:0,children:[t.jsx(q,{}),t.jsxs(nt,{children:[t.jsx(J,{children:"孫悟空少年編"}),t.jsx(K,{children:"レッドリボン軍"})]}),t.jsx(X,{})]}),t.jsxs(Y,{index:1,children:[t.jsx(q,{}),t.jsxs(nt,{children:[t.jsx(J,{children:"ピッコロ大魔王編"}),t.jsx(K,{children:"ピッコロ大魔王"})]}),t.jsx(X,{})]}),t.jsxs(Y,{index:2,children:[t.jsx(q,{}),t.jsxs(nt,{children:[t.jsx(J,{children:"サイヤ人編"}),t.jsx(K,{children:"ベジータ・ナッパ"})]}),t.jsx(X,{})]})]}),t.jsxs(N,{children:[t.jsx(Z,{index:0,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),t.jsx(Z,{index:1,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),t.jsx(Z,{index:2,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),t.jsx(k,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]}),U=()=>{const[e,n]=o.useState(0),s=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{index:e,items:s,onChange:n,children:[t.jsx(j,{}),t.jsxs(v,{children:[t.jsx(P,{children:t.jsx(a,{children:"Prev"})}),t.jsx(B,{children:t.jsx(a,{children:"Next"})})]})]})};var rt,it,ct;E.parameters={...E.parameters,docs:{...(rt=E.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
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
}`,...(ct=(it=E.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var pt,lt,at;O.parameters={...O.parameters,docs:{...(pt=O.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
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
}`,...(at=(lt=O.parameters)==null?void 0:lt.docs)==null?void 0:at.source}}};var ut,dt,mt;$.parameters={...$.parameters,docs:{...(ut=$.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(mt=(dt=$.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};var xt,St,gt;H.parameters={...H.parameters,docs:{...(xt=H.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
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
}`,...(gt=(St=H.parameters)==null?void 0:St.docs)==null?void 0:gt.source}}};var ht,jt,Ct;A.parameters={...A.parameters,docs:{...(ht=A.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
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
}`,...(Ct=(jt=A.parameters)==null?void 0:jt.docs)==null?void 0:Ct.source}}};var It,vt,Pt;F.parameters={...F.parameters,docs:{...(It=F.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
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
}`,...(Pt=(vt=F.parameters)==null?void 0:vt.docs)==null?void 0:Pt.source}}};var Bt,ft,Tt;W.parameters={...W.parameters,docs:{...(Bt=W.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => {
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
}`,...(Tt=(ft=W.parameters)==null?void 0:ft.docs)==null?void 0:Tt.source}}};var Gt,bt,Rt;Q.parameters={...Q.parameters,docs:{...(Gt=Q.parameters)==null?void 0:Gt.docs,source:{originalSource:`() => {
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
}`,...(Rt=(bt=Q.parameters)==null?void 0:bt.docs)==null?void 0:Rt.source}}};var zt,Nt,kt;U.parameters={...U.parameters,docs:{...(zt=U.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
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
}`,...(kt=(Nt=U.parameters)==null?void 0:Nt.docs)==null?void 0:kt.source}}};const Ge=["Basic","Variant","Size","Orientation","Lazy","LazyBehavior","CustomIndicator","CustomComponent","CustomControl"];export{E as Basic,Q as CustomComponent,U as CustomControl,W as CustomIndicator,A as Lazy,F as LazyBehavior,H as Orientation,$ as Size,O as Variant,Ge as __namedExportsOrder,Te as default};
