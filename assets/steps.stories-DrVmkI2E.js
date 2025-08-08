import{d as lt,c as st,r as o,m as ot,h as et,ar as at,a as M,e as dt,f as ut,G as mt,L as xt,j as t,s as D,A as St,a7 as gt,C as ht,V as jt}from"./iframe-Cz9Hkuf2.js";import{P as rt}from"./props-table-D15QSt8u.js";import{B as v}from"./button-group-Fk7odh33.js";import{B as a}from"./button-D91gE1vK.js";import{B as tt}from"./box-B8YRHNqv.js";import{u as it}from"./index-DP3HHgJk.js";import{u as Ct}from"./index-CkPYMTpu.js";import{u as Pt}from"./index-5HMctc93.js";import{c as vt}from"./index-Dgv_VZ-y.js";import{C as Bt}from"./check-icon-BoPX1_sv.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-6SbEfbHe.js";import"./grid-item-BacxQ6r_.js";import"./for-DDi6xP15.js";import"./flex-Br6_rt7q.js";import"./heading-JI2tTkQW.js";import"./icon-button-D-ZVEkgW.js";import"./group-D8EEVkyT.js";import"./use-ripple-BqwrQuB9.js";import"./rings-DpK90kMJ.js";import"./use-breakpoint-DOO0N3ER.js";import"./use-breakpoint-value-CUr9mfl-.js";import"./use-color-mode-value-BvcvNE7L.js";import"./createLucideIcon-CBK9Ft_T.js";const ft=lt({base:{description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{size}",display:"flex",flexShrink:"0",fontWeight:"medium",justifyContent:"center",rounded:"full",transitionDuration:"moderate",transitionProperty:"common"},item:{display:"flex",flex:"1 0 0",position:"relative",_last:{"& [role=separator]":{display:"none"},flex:"initial"}},list:{display:"flex",gap:"3",justifyContent:"space-between"},root:{display:"flex",gap:"4",w:"full"},separator:{bg:"border",flex:"1",transitionDuration:"moderate",transitionProperty:"common"},title:{fontWeight:"medium"}},props:{orientation:{horizontal:{item:{alignItems:"center",flexDirection:"row"},list:{alignItems:"center",flexDirection:"row",w:"full"},root:{flexDirection:"column"},separator:{h:"{thickness}",w:"full"}},vertical:{content:{flex:"1"},item:{alignItems:"flex-start"},list:{alignItems:"flex-start",flexDirection:"column"},root:{flexDirection:"row"},separator:{h:"full",insetBlockStart:"calc({size} + {gap})",insetInlineStart:"calc(({size} / 2) - ({thickness} / 2))",maxH:"calc(full - {size} - {gap})",position:"absolute",w:"{thickness}"}}}},variants:{solid:{indicator:{_complete:{layerStyle:"solid"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.solid"}}},subtle:{indicator:{_complete:{bg:"colorScheme.emphasized",color:"colorScheme.fg"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.emphasized"}}}},sizes:{sm:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.8","--thickness":"sizes.0.5",fontSize:"xs",gap:"3"}},md:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.10","--thickness":"sizes.0.5",fontSize:"sm",gap:"3"}},lg:{indicator:{fontSize:"lg"},item:{"--gap":"sizes.3","--size":"sizes.12","--thickness":"sizes.0.5",gap:"3"}}},defaultProps:{size:"md",variant:"solid",orientation:"horizontal"}}),{DescendantsContext:Tt,useDescendant:bt,useDescendants:zt}=vt(),[Nt,y]=st({name:"StepsContext"}),[kt,L]=st({name:"StepsItemContext"}),It=({count:e=0,defaultIndex:n=0,index:s,orientation:i="horizontal",onChange:p,...l}={})=>{const S=zt(),[c,u]=Pt({defaultValue:n,value:s,onChange:p}),x=o.useId(),P=o.useCallback(r=>r<c?"complete":r>c?"incomplete":"current",[c]),g=o.useCallback(()=>u(r=>Math.max(0,r-1)),[u]),d=o.useCallback(()=>{u(r=>Math.min(e,r+1))},[e,u]),T=o.useCallback(({ref:r,...m}={})=>({...l,...m,ref:ot(r,l.ref)}),[l]),b=o.useCallback(r=>({"data-orientation":i,...r}),[i]),z=o.useCallback(({index:r=e,...m}={})=>({id:`${x}-${r}`,hidden:r!==c,tabIndex:0,...m}),[e,x,c]),N=o.useCallback((r={})=>({disabled:c===0,...r,onClick:et(r.onClick,g)}),[g,c]),k=o.useCallback((r={})=>({disabled:e<=c,...r,onClick:et(r.onClick,d)}),[e,c,d]);return{id:x,count:e,descendants:S,getStatus:P,index:c,orientation:i,setIndex:u,getContentProps:z,getListProps:b,getNextTriggerProps:k,getPrevTriggerProps:N,getRootProps:T,onNext:d,onPrev:g}},Rt=({"aria-labelledby":e,index:n,...s})=>{const{descendants:i,register:p}=bt(),{id:l,getStatus:S,orientation:c}=y(),u=S(n),x=u==="current",P=n===0,g=n===i.lastValue()?.index,d=`data-${u}`,{getDocument:T}=at(),b=o.useCallback(({ref:m,"aria-labelledby":Z,...G}={})=>{const w=!!T()?.getElementById(`${l}-${n}`);return{"aria-current":x?"step":void 0,"aria-labelledby":dt(e,Z,w?`${l}-${n}`:void 0),"data-orientation":c,[d]:M(!0),...s,...G,ref:ot(m,p)}},[e,T,l,n,x,c,d,s,p]),z=o.useCallback(m=>({[d]:M(!0),...m}),[d]),N=o.useCallback(m=>({[d]:M(!0),...m}),[d]),k=o.useCallback(m=>({[d]:M(!0),...m}),[d]),r=o.useCallback(m=>({"data-orientation":c,role:"separator",[d]:M(!0),...m}),[c,d]);return{first:P,index:n,last:g,status:u,getDescriptionProps:N,getIndicatorProps:k,getRootProps:b,getSeparatorProps:r,getTitleProps:z}},{ComponentContext:yt,useComponentContext:Y,withContext:C,withProvider:Mt}=ut("steps",ft),h=Mt(({children:e,items:n=[],lazy:s,lazyBehavior:i,orientation:p,...l})=>{const S=Ct(p),c=mt(e),u=xt(c,j),{id:x,count:P,descendants:g,getStatus:d,index:T,orientation:b,setIndex:z,getContentProps:N,getListProps:k,getNextTriggerProps:r,getPrevTriggerProps:m,getRootProps:Z,onNext:G,onPrev:w}=It({count:n.length||o.Children.count(u?.props.children),...l,orientation:S}),ct=o.useMemo(()=>({items:n,lazy:s,lazyBehavior:i}),[n,s,i]),pt=o.useMemo(()=>({id:x,count:P,getStatus:d,index:T,orientation:b,setIndex:z,getContentProps:N,getListProps:k,getNextTriggerProps:r,getPrevTriggerProps:m,onNext:G,onPrev:w}),[x,P,T,b,z,d,G,w,k,r,m,N]);return t.jsx(Tt,{value:g,children:t.jsx(Nt,{value:pt,children:t.jsx(yt,{value:ct,children:t.jsx(D.div,{...Z(),children:e})})})})},"root",{transferProps:["orientation"]})(),j=C(({children:e,...n})=>{const{items:s}=Y(),{getListProps:i}=y(),p=o.useMemo(()=>e||s?.map(({complete:l,content:S,current:c,description:u,hasSeparator:x=!0,incomplete:P,title:g,contentProps:d,descriptionProps:T,indicatorProps:b,separatorProps:z,titleProps:N,...k},r)=>t.jsxs(U,{index:r,title:g,...k,children:[t.jsx(q,{complete:l,current:c,incomplete:P,...b}),t.jsxs(D.div,{children:[g?t.jsx(J,{...N,children:g}):null,u?t.jsx(K,{...T,children:u}):null]}),x?t.jsx(Q,{...z}):null]},r)),[e,s]);return t.jsx(D.ol,{...i(n),children:p})},"list")(),U=C(e=>{const{first:n,index:s,last:i,status:p,getDescriptionProps:l,getIndicatorProps:S,getRootProps:c,getSeparatorProps:u,getTitleProps:x}=Rt(e),P=o.useMemo(()=>({first:n,index:s,last:i,status:p,getDescriptionProps:l,getIndicatorProps:S,getSeparatorProps:u,getTitleProps:x}),[n,s,i,p,x,l,u,S]);return t.jsx(kt,{value:P,children:t.jsx(D.li,{...c()})})},"item")(),q=C(({complete:e=t.jsx(Bt,{}),current:n=t.jsx(nt,{}),incomplete:s=t.jsx(nt,{}),...i})=>{const{status:p,getIndicatorProps:l}=L(),S=o.useMemo(()=>({complete:e,current:n,incomplete:s}),[e,n,s]);return t.jsx(D.div,{...l(i),children:S[p]})},"indicator")(),nt=C("span","number")(void 0,({children:e,...n})=>{const{index:s}=L();return{...n,children:e??s+1}}),J=C("h3","title")(void 0,e=>{const{getTitleProps:n}=L();return n(e)}),K=C("p","description")(void 0,e=>{const{getDescriptionProps:n}=L();return n(e)}),Q=C("div","separator")(void 0,e=>{const{getSeparatorProps:n}=L();return n(e)}),I=({children:e})=>{const{items:n}=Y();return o.useMemo(()=>e||n?.map(({content:s,contentProps:i},p)=>St(s)||gt(s)?null:t.jsx(X,{index:p,...i,children:s},p)),[e,n])},X=C("div","content")(void 0,({index:e,...n})=>{const{lazy:s,lazyBehavior:i}=Y(),{index:p,getContentProps:l}=y(),c=it({lazy:s,lazyBehavior:i,mounted:e===p,...n});return{...l({index:e,...n}),children:c}}),R=C("div",{name:"CompletedContent",slot:["content","completed"]})(void 0,e=>{const{lazy:n,lazyBehavior:s}=Y(),{count:i,index:p,getContentProps:l}=y(),c=it({lazy:n,lazyBehavior:s,mounted:i!==0&&i===p,...e});return{...l(e),children:c}}),B=C("button",{name:"PrevTrigger",slot:["trigger","prev"]})(e=>{const{getPrevTriggerProps:n}=y();return{asChild:!0,...n(e)}}),f=C("button",{name:"NextTrigger",slot:["trigger","next"]})(e=>{const{getNextTriggerProps:n}=y();return{asChild:!0,...n(e)}}),se={component:h,title:"Components / Steps"},_=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(j,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},V=()=>{const e=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(rt,{variant:"stack",columns:["solid","subtle"],rows:ht,children:(n,s,i)=>t.jsxs(h,{colorScheme:s,variant:n,defaultIndex:1,items:e,children:[t.jsx(j,{}),t.jsx(I,{}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]},i)})},E=()=>{const e=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(rt,{variant:"stack",rows:["sm","md","lg"],children:(n,s,i)=>t.jsxs(h,{size:s,defaultIndex:1,items:e,children:[t.jsx(j,{}),t.jsx(I,{}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]},i)})},O=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(t.Fragment,{children:[t.jsxs(h,{items:e,orientation:"horizontal",children:[t.jsx(j,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]}),t.jsxs(h,{h:"lg",items:e,orientation:"vertical",children:[t.jsx(j,{}),t.jsxs(jt,{flex:"1",children:[t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})]})]})},$=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,children:[t.jsx(j,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},A=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,lazyBehavior:"keepMounted",children:[t.jsx(j,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},H=()=>{const e=o.useMemo(()=>[{complete:"😇",current:"😎",description:"レッドリボン軍",incomplete:"😑",title:"孫悟空少年編"},{complete:"😇",current:"😎",description:"ピッコロ大魔王",incomplete:"😑",title:"ピッコロ大魔王編"},{complete:"😇",current:"😎",description:"ベジータ・ナッパ",incomplete:"😑",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(j,{}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},F=()=>t.jsxs(h,{children:[t.jsxs(j,{children:[t.jsxs(U,{index:0,children:[t.jsx(q,{}),t.jsxs(tt,{children:[t.jsx(J,{children:"孫悟空少年編"}),t.jsx(K,{children:"レッドリボン軍"})]}),t.jsx(Q,{})]}),t.jsxs(U,{index:1,children:[t.jsx(q,{}),t.jsxs(tt,{children:[t.jsx(J,{children:"ピッコロ大魔王編"}),t.jsx(K,{children:"ピッコロ大魔王"})]}),t.jsx(Q,{})]}),t.jsxs(U,{index:2,children:[t.jsx(q,{}),t.jsxs(tt,{children:[t.jsx(J,{children:"サイヤ人編"}),t.jsx(K,{children:"ベジータ・ナッパ"})]}),t.jsx(Q,{})]})]}),t.jsxs(I,{children:[t.jsx(X,{index:0,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),t.jsx(X,{index:1,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),t.jsx(X,{index:2,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]}),W=()=>{const[e,n]=o.useState(0),s=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{index:e,items:s,onChange:n,children:[t.jsx(j,{}),t.jsxs(v,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>;
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

            <ButtonGroup>
              <Steps.PrevTrigger>
                <Button>Prev</Button>
              </Steps.PrevTrigger>

              <Steps.NextTrigger>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>;
    }}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

            <ButtonGroup>
              <Steps.PrevTrigger>
                <Button>Prev</Button>
              </Steps.PrevTrigger>

              <Steps.NextTrigger>
                <Button>Next</Button>
              </Steps.NextTrigger>
            </ButtonGroup>
          </Steps.Root>;
    }}
    </PropsTable>;
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

        <ButtonGroup>
          <Steps.PrevTrigger>
            <Button>Prev</Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger>
            <Button>Next</Button>
          </Steps.NextTrigger>
        </ButtonGroup>
      </Steps.Root>

      <Steps.Root h="lg" items={items} orientation="vertical">
        <Steps.List />

        <VStack flex="1">
          <Steps.Contents />
          <Steps.CompletedContent>
            地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。
          </Steps.CompletedContent>

          <ButtonGroup>
            <Steps.PrevTrigger>
              <Button>Prev</Button>
            </Steps.PrevTrigger>
            <Steps.NextTrigger>
              <Button>Next</Button>
            </Steps.NextTrigger>
          </ButtonGroup>
        </VStack>
      </Steps.Root>
    </>;
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>;
}`,...$.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>;
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>;
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>;
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const items: Steps.RootProps["items"] = useMemo(() => [{
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

      <ButtonGroup>
        <Steps.PrevTrigger>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>;
}`,...W.parameters?.docs?.source}}};const oe=["Basic","Variant","Size","Orientation","Lazy","LazyBehavior","CustomIndicator","CustomComponent","CustomControl"];export{_ as Basic,F as CustomComponent,W as CustomControl,H as CustomIndicator,$ as Lazy,A as LazyBehavior,O as Orientation,E as Size,V as Variant,oe as __namedExportsOrder,se as default};
