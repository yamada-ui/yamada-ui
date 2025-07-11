import{d as ct,c as st,r,m as ot,h as et,aj as pt,a as M,e as lt,f as at,j as t,s as D,A as dt,a1 as ut,C as mt,V as xt}from"./iframe-Dqv37jui.js";import{B as P}from"./button-group-D2Y_x_eq.js";import{B as a}from"./button-C8c51KbT.js";import{B as tt}from"./box-eZad9qV_.js";import{u as rt}from"./index-CvNr_ode.js";import{u as St}from"./index-DPuk35MY.js";import{u as gt}from"./index-CzvOT3ny.js";import{c as ht}from"./index-BstmyLRh.js";import{C as jt}from"./check-icon-DqQJYwJL.js";import{P as it}from"./props-table-heQ1Qlq0.js";import"./icon-button-B2blonpm.js";import"./group-BKI2qxFJ.js";import"./flex-GLUBJ1tJ.js";import"./use-ripple-Cg_GpsVR.js";import"./rings-B8RJlSoE.js";import"./use-breakpoint-BI3OQxi_.js";import"./use-breakpoint-value-BmkGzUn3.js";import"./use-color-mode-value-D_U_yHOc.js";import"./createLucideIcon-9w-Kw71s.js";import"./grid-B5ktx7rU.js";import"./grid-item-BRLvLdto.js";import"./for-vxGyZb1G.js";import"./heading-DZTUzuGZ.js";const Ct=ct({base:{description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{size}",display:"flex",flexShrink:"0",fontWeight:"medium",justifyContent:"center",rounded:"full",transitionDuration:"moderate",transitionProperty:"common"},item:{display:"flex",flex:"1 0 0",position:"relative",_last:{"& [role=separator]":{display:"none"},flex:"initial"}},list:{display:"flex",gap:"3",justifyContent:"space-between"},root:{display:"flex",gap:"4",w:"full"},separator:{bg:"border",flex:"1",transitionDuration:"moderate",transitionProperty:"common"},title:{fontWeight:"medium"}},props:{orientation:{horizontal:{item:{alignItems:"center",flexDirection:"row"},list:{alignItems:"center",flexDirection:"row",w:"full"},root:{flexDirection:"column"},separator:{h:"{thickness}",w:"full"}},vertical:{content:{flex:"1"},item:{alignItems:"flex-start"},list:{alignItems:"flex-start",flexDirection:"column"},root:{flexDirection:"row"},separator:{h:"full",insetBlockStart:"calc({size} + {gap})",insetInlineStart:"calc(({size} / 2) - ({thickness} / 2))",maxH:"calc(full - {size} - {gap})",position:"absolute",w:"{thickness}"}}}},variants:{solid:{indicator:{_complete:{layerStyle:"solid"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.solid"}}},subtle:{indicator:{_complete:{bg:"colorScheme.emphasized",color:"colorScheme.fg"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.emphasized"}}}},sizes:{sm:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.8","--thickness":"sizes.0.5",fontSize:"xs",gap:"3"}},md:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.10","--thickness":"sizes.0.5",fontSize:"sm",gap:"3"}},lg:{indicator:{fontSize:"lg"},item:{"--gap":"sizes.3","--size":"sizes.12","--thickness":"sizes.0.5",gap:"3"}}},defaultProps:{size:"md",variant:"solid",orientation:"horizontal"}}),{DescendantsContext:Pt,useDescendant:vt,useDescendants:Bt}=ht(),[ft,y]=st({name:"StepsContext"}),[Tt,G]=st({name:"StepsItemContext"}),bt=({defaultIndex:e=0,index:n,orientation:s="horizontal",onChange:o,...c}={})=>{const d=Bt(),[p,l]=gt({defaultValue:e,value:n,onChange:o}),x=r.useId(),m=d.count(),C=r.useCallback(i=>i<p?"complete":i>p?"incomplete":"current",[p]),g=r.useCallback(()=>l(i=>Math.max(0,i-1)),[l]),u=r.useCallback(()=>{l(i=>Math.min(m,i+1))},[m,l]),T=r.useCallback(({ref:i,...S}={})=>({...c,...S,ref:ot(i,c.ref)}),[c]),b=r.useCallback(i=>({"data-orientation":s,...i}),[s]),z=r.useCallback(({index:i=m,...S}={})=>({id:`${x}-${i}`,hidden:i!==p,tabIndex:0,...S}),[m,x,p]),N=r.useCallback((i={})=>({disabled:p===0,...i,onClick:et(i.onClick,g)}),[g,p]),k=r.useCallback((i={})=>({disabled:m<=p,...i,onClick:et(i.onClick,u)}),[m,p,u]);return{id:x,count:m,descendants:d,getStatus:C,index:p,orientation:s,setIndex:l,getContentProps:z,getListProps:b,getNextTriggerProps:k,getPrevTriggerProps:N,getRootProps:T,onNext:u,onPrev:g}},zt=({"aria-labelledby":e,...n}={})=>{const{descendants:s,index:o,register:c}=vt(),{id:d,getStatus:p,orientation:l}=y(),x=p(o),m=x==="current",C=o===0,g=o===s.lastValue()?.index,u=`data-${x}`,{getDocument:T}=pt(),b=r.useCallback(({ref:S,"aria-labelledby":L,...Y}={})=>{const Z=!!T()?.getElementById(`${d}-${o}`);return{"aria-current":m?"step":void 0,"aria-labelledby":lt(e,L,Z?`${d}-${o}`:void 0),"data-orientation":l,[u]:M(!0),...n,...Y,ref:ot(S,c)}},[e,T,d,o,m,l,u,n,c]),z=r.useCallback(S=>({[u]:M(!0),...S}),[u]),N=r.useCallback(S=>({[u]:M(!0),...S}),[u]),k=r.useCallback(S=>({[u]:M(!0),...S}),[u]),i=r.useCallback(S=>({"data-orientation":l,role:"separator",[u]:M(!0),...S}),[l,u]);return{first:C,index:o,last:g,status:x,getDescriptionProps:N,getIndicatorProps:k,getRootProps:b,getSeparatorProps:i,getTitleProps:z}},{ComponentContext:Nt,useComponentContext:X,withContext:j,withProvider:kt}=at("steps",Ct),h=kt(({children:e,items:n,lazy:s,lazyBehavior:o,orientation:c,...d})=>{const p=St(c),{id:l,count:x,descendants:m,getStatus:C,index:g,orientation:u,setIndex:T,getContentProps:b,getListProps:z,getNextTriggerProps:N,getPrevTriggerProps:k,getRootProps:i,onNext:S,onPrev:L}=bt({...d,orientation:p}),Y=r.useMemo(()=>({items:n,lazy:s,lazyBehavior:o}),[n,s,o]),Z=r.useMemo(()=>({id:l,count:x,getStatus:C,index:g,orientation:u,setIndex:T,getContentProps:b,getListProps:z,getNextTriggerProps:N,getPrevTriggerProps:k,onNext:S,onPrev:L}),[l,x,g,u,T,C,S,L,z,N,k,b]);return t.jsx(Pt,{value:m,children:t.jsx(ft,{value:Z,children:t.jsx(Nt,{value:Y,children:t.jsx(D.div,{...i(),children:e})})})})},"root",{transferProps:["orientation"]})(),v=j(({children:e,...n})=>{const{items:s}=X(),{getListProps:o}=y(),c=r.useMemo(()=>e||s?.map(({complete:d,content:p,current:l,description:x,hasSeparator:m=!0,incomplete:C,title:g,contentProps:u,descriptionProps:T,indicatorProps:b,separatorProps:z,titleProps:N,...k},i)=>t.jsxs(F,{title:g,...k,children:[t.jsx(U,{complete:d,current:l,incomplete:C,...b}),t.jsxs(D.div,{children:[g?t.jsx(q,{...N,children:g}):null,x?t.jsx(J,{...T,children:x}):null]}),m?t.jsx(K,{...z}):null]},i)),[e,s]);return t.jsx(D.ol,{...o(n),children:c})},"list")(),F=j(e=>{const{first:n,index:s,last:o,status:c,getDescriptionProps:d,getIndicatorProps:p,getRootProps:l,getSeparatorProps:x,getTitleProps:m}=zt(e),C=r.useMemo(()=>({first:n,index:s,last:o,status:c,getDescriptionProps:d,getIndicatorProps:p,getSeparatorProps:x,getTitleProps:m}),[n,s,o,c,m,d,x,p]);return t.jsx(Tt,{value:C,children:t.jsx(D.li,{...l()})})},"item")(),U=j(({complete:e=t.jsx(jt,{}),current:n=t.jsx(nt,{}),incomplete:s=t.jsx(nt,{}),...o})=>{const{status:c,getIndicatorProps:d}=G(),p=r.useMemo(()=>({complete:e,current:n,incomplete:s}),[e,n,s]);return t.jsx(D.div,{...d(o),children:p[c]})},"indicator")(),nt=j("span","number")(void 0,({children:e,...n})=>{const{index:s}=G();return{...n,children:e??s+1}}),q=j("h3","title")(void 0,e=>{const{getTitleProps:n}=G();return n(e)}),J=j("p","description")(void 0,e=>{const{getDescriptionProps:n}=G();return n(e)}),K=j("div","separator")(void 0,e=>{const{getSeparatorProps:n}=G();return n(e)}),I=({children:e})=>{const{items:n}=X();return r.useMemo(()=>e||n?.map(({content:s,contentProps:o},c)=>dt(s)||ut(s)?null:t.jsx(Q,{index:c,...o,children:s},c)),[e,n])},Q=j("div","content")(void 0,({index:e,...n})=>{const{lazy:s,lazyBehavior:o}=X(),{index:c,getContentProps:d}=y(),l=rt({lazy:s,lazyBehavior:o,mounted:e===c,...n});return{...d({index:e,...n}),children:l}}),R=j("div",{name:"CompletedContent",slot:["content","completed"]})(void 0,e=>{const{lazy:n,lazyBehavior:s}=X(),{count:o,index:c,getContentProps:d}=y(),l=rt({lazy:n,lazyBehavior:s,mounted:o!==0&&o===c,...e});return{...d(e),children:l}}),B=j("button",{name:"PrevTrigger",slot:["trigger","prev"]})(e=>{const{getPrevTriggerProps:n}=y();return{asChild:!0,...n(e)}}),f=j("button",{name:"NextTrigger",slot:["trigger","next"]})(e=>{const{getNextTriggerProps:n}=y();return{asChild:!0,...n(e)}}),Yt={component:h,title:"Components / Steps"},w=()=>{const e=r.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},_=()=>{const e=r.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(it,{variant:"stack",columns:["solid","subtle"],rows:mt,children:(n,s,o)=>t.jsxs(h,{colorScheme:s,variant:n,defaultIndex:1,items:e,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]},o)})},E=()=>{const e=r.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(it,{variant:"stack",rows:["sm","md","lg"],children:(n,s,o)=>t.jsxs(h,{size:s,defaultIndex:1,items:e,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]},o)})},V=()=>{const e=r.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(t.Fragment,{children:[t.jsxs(h,{items:e,orientation:"horizontal",children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]}),t.jsxs(h,{h:"lg",items:e,orientation:"vertical",children:[t.jsx(v,{}),t.jsxs(xt,{flex:"1",children:[t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})]})]})},O=()=>{const e=r.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},$=()=>{const e=r.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,lazyBehavior:"keepMounted",children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},A=()=>{const e=r.useMemo(()=>[{complete:"😇",current:"😎",description:"レッドリボン軍",incomplete:"😑",title:"孫悟空少年編"},{complete:"😇",current:"😎",description:"ピッコロ大魔王",incomplete:"😑",title:"ピッコロ大魔王編"},{complete:"😇",current:"😎",description:"ベジータ・ナッパ",incomplete:"😑",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(v,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},H=()=>t.jsxs(h,{children:[t.jsxs(v,{children:[t.jsxs(F,{children:[t.jsx(U,{}),t.jsxs(tt,{children:[t.jsx(q,{children:"孫悟空少年編"}),t.jsx(J,{children:"レッドリボン軍"})]}),t.jsx(K,{})]}),t.jsxs(F,{children:[t.jsx(U,{}),t.jsxs(tt,{children:[t.jsx(q,{children:"ピッコロ大魔王編"}),t.jsx(J,{children:"ピッコロ大魔王"})]}),t.jsx(K,{})]}),t.jsxs(F,{children:[t.jsx(U,{}),t.jsxs(tt,{children:[t.jsx(q,{children:"サイヤ人編"}),t.jsx(J,{children:"ベジータ・ナッパ"})]}),t.jsx(K,{})]})]}),t.jsxs(I,{children:[t.jsx(Q,{index:0,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),t.jsx(Q,{index:1,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),t.jsx(Q,{index:2,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]}),W=()=>{const[e,n]=r.useState(0),s=r.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{index:e,items:s,onChange:n,children:[t.jsx(v,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <Steps.Root>
      <Steps.List>
        <Steps.Item>
          <Steps.Indicator />
          <Box>
            <Steps.Title>孫悟空少年編</Steps.Title>
            <Steps.Description>レッドリボン軍</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item>
          <Steps.Indicator />
          <Box>
            <Steps.Title>ピッコロ大魔王編</Steps.Title>
            <Steps.Description>ピッコロ大魔王</Steps.Description>
          </Box>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item>
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
}`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}};const Zt=["Basic","Variant","Size","Orientation","Lazy","LazyBehavior","CustomIndicator","CustomComponent","CustomControl"];export{w as Basic,H as CustomComponent,W as CustomControl,A as CustomIndicator,O as Lazy,$ as LazyBehavior,V as Orientation,E as Size,_ as Variant,Zt as __namedExportsOrder,Yt as default};
