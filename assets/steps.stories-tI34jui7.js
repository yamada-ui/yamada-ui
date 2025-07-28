import{d as ct,c as st,r as o,m as ot,h as et,ap as pt,a as M,e as lt,f as at,j as t,s as D,D as dt,a6 as ut,C as mt,V as xt}from"./iframe-BHpF9Anv.js";import{P as rt}from"./props-table-BDseLMKU.js";import{B as P}from"./button-group-B4K7rofq.js";import{B as a}from"./button-D5SiRG3I.js";import{B as tt}from"./box-DG4urhgf.js";import{u as it}from"./index-BK_nKo0Z.js";import{u as St}from"./index-HzxE17GX.js";import{u as gt}from"./index-CCUIVoeU.js";import{c as ht}from"./index-bPZ4fhsG.js";import{C as jt}from"./check-icon-vSzE-s3s.js";import"./grid-ByedI7Nf.js";import"./grid-item-DEAolyKT.js";import"./for-ByLCT2H8.js";import"./flex-BfatBxpB.js";import"./heading-D9cNz4N2.js";import"./icon-button-Dh58kTcW.js";import"./group-B1PiohLH.js";import"./use-ripple-CxqsGXIn.js";import"./rings-BBe5N9Nh.js";import"./use-breakpoint-DjjBb8t0.js";import"./use-breakpoint-value-BjmteGR7.js";import"./use-color-mode-value-CuZcykHs.js";import"./createLucideIcon-Ch8LwIgJ.js";const Ct=ct({base:{description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{size}",display:"flex",flexShrink:"0",fontWeight:"medium",justifyContent:"center",rounded:"full",transitionDuration:"moderate",transitionProperty:"common"},item:{display:"flex",flex:"1 0 0",position:"relative",_last:{"& [role=separator]":{display:"none"},flex:"initial"}},list:{display:"flex",gap:"3",justifyContent:"space-between"},root:{display:"flex",gap:"4",w:"full"},separator:{bg:"border",flex:"1",transitionDuration:"moderate",transitionProperty:"common"},title:{fontWeight:"medium"}},props:{orientation:{horizontal:{item:{alignItems:"center",flexDirection:"row"},list:{alignItems:"center",flexDirection:"row",w:"full"},root:{flexDirection:"column"},separator:{h:"{thickness}",w:"full"}},vertical:{content:{flex:"1"},item:{alignItems:"flex-start"},list:{alignItems:"flex-start",flexDirection:"column"},root:{flexDirection:"row"},separator:{h:"full",insetBlockStart:"calc({size} + {gap})",insetInlineStart:"calc(({size} / 2) - ({thickness} / 2))",maxH:"calc(full - {size} - {gap})",position:"absolute",w:"{thickness}"}}}},variants:{solid:{indicator:{_complete:{layerStyle:"solid"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.solid"}}},subtle:{indicator:{_complete:{bg:"colorScheme.emphasized",color:"colorScheme.fg"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.emphasized"}}}},sizes:{sm:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.8","--thickness":"sizes.0.5",fontSize:"xs",gap:"3"}},md:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.10","--thickness":"sizes.0.5",fontSize:"sm",gap:"3"}},lg:{indicator:{fontSize:"lg"},item:{"--gap":"sizes.3","--size":"sizes.12","--thickness":"sizes.0.5",gap:"3"}}},defaultProps:{size:"md",variant:"solid",orientation:"horizontal"}}),{DescendantsContext:Pt,useDescendant:vt,useDescendants:Bt}=ht(),[ft,y]=st({name:"StepsContext"}),[Tt,G]=st({name:"StepsItemContext"}),bt=({count:e=0,defaultIndex:n=0,index:s,orientation:r="horizontal",onChange:p,...l}={})=>{const x=Bt(),[i,d]=gt({defaultValue:n,value:s,onChange:p}),S=o.useId(),C=o.useCallback(c=>c<i?"complete":c>i?"incomplete":"current",[i]),g=o.useCallback(()=>d(c=>Math.max(0,c-1)),[d]),u=o.useCallback(()=>{d(c=>Math.min(e,c+1))},[e,d]),T=o.useCallback(({ref:c,...m}={})=>({...l,...m,ref:ot(c,l.ref)}),[l]),b=o.useCallback(c=>({"data-orientation":r,...c}),[r]),z=o.useCallback(({index:c=e,...m}={})=>({id:`${S}-${c}`,hidden:c!==i,tabIndex:0,...m}),[e,S,i]),N=o.useCallback((c={})=>({disabled:i===0,...c,onClick:et(c.onClick,g)}),[g,i]),k=o.useCallback((c={})=>({disabled:e<=i,...c,onClick:et(c.onClick,u)}),[e,i,u]);return{id:S,count:e,descendants:x,getStatus:C,index:i,orientation:r,setIndex:d,getContentProps:z,getListProps:b,getNextTriggerProps:k,getPrevTriggerProps:N,getRootProps:T,onNext:u,onPrev:g}},zt=({"aria-labelledby":e,index:n,...s})=>{const{descendants:r,register:p}=vt(),{id:l,getStatus:x,orientation:i}=y(),d=x(n),S=d==="current",C=n===0,g=n===r.lastValue()?.index,u=`data-${d}`,{getDocument:T}=pt(),b=o.useCallback(({ref:m,"aria-labelledby":L,...Y}={})=>{const Z=!!T()?.getElementById(`${l}-${n}`);return{"aria-current":S?"step":void 0,"aria-labelledby":lt(e,L,Z?`${l}-${n}`:void 0),"data-orientation":i,[u]:M(!0),...s,...Y,ref:ot(m,p)}},[e,T,l,n,S,i,u,s,p]),z=o.useCallback(m=>({[u]:M(!0),...m}),[u]),N=o.useCallback(m=>({[u]:M(!0),...m}),[u]),k=o.useCallback(m=>({[u]:M(!0),...m}),[u]),c=o.useCallback(m=>({"data-orientation":i,role:"separator",[u]:M(!0),...m}),[i,u]);return{first:C,index:n,last:g,status:d,getDescriptionProps:N,getIndicatorProps:k,getRootProps:b,getSeparatorProps:c,getTitleProps:z}},{ComponentContext:Nt,useComponentContext:X,withContext:j,withProvider:kt}=at("steps",Ct),h=kt(({children:e,items:n=[],lazy:s,lazyBehavior:r,orientation:p,...l})=>{const x=St(p),{id:i,count:d,descendants:S,getStatus:C,index:g,orientation:u,setIndex:T,getContentProps:b,getListProps:z,getNextTriggerProps:N,getPrevTriggerProps:k,getRootProps:c,onNext:m,onPrev:L}=bt({count:n.length,...l,orientation:x}),Y=o.useMemo(()=>({items:n,lazy:s,lazyBehavior:r}),[n,s,r]),Z=o.useMemo(()=>({id:i,count:d,getStatus:C,index:g,orientation:u,setIndex:T,getContentProps:b,getListProps:z,getNextTriggerProps:N,getPrevTriggerProps:k,onNext:m,onPrev:L}),[i,d,g,u,T,C,m,L,z,N,k,b]);return t.jsx(Pt,{value:S,children:t.jsx(ft,{value:Z,children:t.jsx(Nt,{value:Y,children:t.jsx(D.div,{...c(),children:e})})})})},"root",{transferProps:["orientation"]})(),v=j(({children:e,...n})=>{const{items:s}=X(),{getListProps:r}=y(),p=o.useMemo(()=>e||s?.map(({complete:l,content:x,current:i,description:d,hasSeparator:S=!0,incomplete:C,title:g,contentProps:u,descriptionProps:T,indicatorProps:b,separatorProps:z,titleProps:N,...k},c)=>t.jsxs(F,{index:c,title:g,...k,children:[t.jsx(U,{complete:l,current:i,incomplete:C,...b}),t.jsxs(D.div,{children:[g?t.jsx(q,{...N,children:g}):null,d?t.jsx(J,{...T,children:d}):null]}),S?t.jsx(K,{...z}):null]},c)),[e,s]);return t.jsx(D.ol,{...r(n),children:p})},"list")(),F=j(e=>{const{first:n,index:s,last:r,status:p,getDescriptionProps:l,getIndicatorProps:x,getRootProps:i,getSeparatorProps:d,getTitleProps:S}=zt(e),C=o.useMemo(()=>({first:n,index:s,last:r,status:p,getDescriptionProps:l,getIndicatorProps:x,getSeparatorProps:d,getTitleProps:S}),[n,s,r,p,S,l,d,x]);return t.jsx(Tt,{value:C,children:t.jsx(D.li,{...i()})})},"item")(),U=j(({complete:e=t.jsx(jt,{}),current:n=t.jsx(nt,{}),incomplete:s=t.jsx(nt,{}),...r})=>{const{status:p,getIndicatorProps:l}=G(),x=o.useMemo(()=>({complete:e,current:n,incomplete:s}),[e,n,s]);return t.jsx(D.div,{...l(r),children:x[p]})},"indicator")(),nt=j("span","number")(void 0,({children:e,...n})=>{const{index:s}=G();return{...n,children:e??s+1}}),q=j("h3","title")(void 0,e=>{const{getTitleProps:n}=G();return n(e)}),J=j("p","description")(void 0,e=>{const{getDescriptionProps:n}=G();return n(e)}),K=j("div","separator")(void 0,e=>{const{getSeparatorProps:n}=G();return n(e)}),I=({children:e})=>{const{items:n}=X();return o.useMemo(()=>e||n?.map(({content:s,contentProps:r},p)=>dt(s)||ut(s)?null:t.jsx(Q,{index:p,...r,children:s},p)),[e,n])},Q=j("div","content")(void 0,({index:e,...n})=>{const{lazy:s,lazyBehavior:r}=X(),{index:p,getContentProps:l}=y(),i=it({lazy:s,lazyBehavior:r,mounted:e===p,...n});return{...l({index:e,...n}),children:i}}),R=j("div",{name:"CompletedContent",slot:["content","completed"]})(void 0,e=>{const{lazy:n,lazyBehavior:s}=X(),{count:r,index:p,getContentProps:l}=y(),i=it({lazy:n,lazyBehavior:s,mounted:r!==0&&r===p,...e});return{...l(e),children:i}}),B=j("button",{name:"PrevTrigger",slot:["trigger","prev"]})(e=>{const{getPrevTriggerProps:n}=y();return{asChild:!0,...n(e)}}),f=j("button",{name:"NextTrigger",slot:["trigger","next"]})(e=>{const{getNextTriggerProps:n}=y();return{asChild:!0,...n(e)}}),Yt={component:h,title:"Components / Steps"},w=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},_=()=>{const e=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(rt,{variant:"stack",columns:["solid","subtle"],rows:mt,children:(n,s,r)=>t.jsxs(h,{colorScheme:s,variant:n,defaultIndex:1,items:e,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]},r)})},E=()=>{const e=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsx(rt,{variant:"stack",rows:["sm","md","lg"],children:(n,s,r)=>t.jsxs(h,{size:s,defaultIndex:1,items:e,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]},r)})},V=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(t.Fragment,{children:[t.jsxs(h,{items:e,orientation:"horizontal",children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]}),t.jsxs(h,{h:"lg",items:e,orientation:"vertical",children:[t.jsx(v,{}),t.jsxs(xt,{flex:"1",children:[t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})]})]})},O=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},$=()=>{const e=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,lazy:!0,lazyBehavior:"keepMounted",children:[t.jsx(v,{}),t.jsx(I,{}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},A=()=>{const e=o.useMemo(()=>[{complete:"😇",current:"😎",description:"レッドリボン軍",incomplete:"😑",title:"孫悟空少年編"},{complete:"😇",current:"😎",description:"ピッコロ大魔王",incomplete:"😑",title:"ピッコロ大魔王編"},{complete:"😇",current:"😎",description:"ベジータ・ナッパ",incomplete:"😑",title:"サイヤ人編"}],[]);return t.jsxs(h,{items:e,children:[t.jsx(v,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})},H=()=>t.jsxs(h,{count:3,children:[t.jsxs(v,{children:[t.jsxs(F,{index:0,children:[t.jsx(U,{}),t.jsxs(tt,{children:[t.jsx(q,{children:"孫悟空少年編"}),t.jsx(J,{children:"レッドリボン軍"})]}),t.jsx(K,{})]}),t.jsxs(F,{index:1,children:[t.jsx(U,{}),t.jsxs(tt,{children:[t.jsx(q,{children:"ピッコロ大魔王編"}),t.jsx(J,{children:"ピッコロ大魔王"})]}),t.jsx(K,{})]}),t.jsxs(F,{index:2,children:[t.jsx(U,{}),t.jsxs(tt,{children:[t.jsx(q,{children:"サイヤ人編"}),t.jsx(J,{children:"ベジータ・ナッパ"})]}),t.jsx(K,{})]})]}),t.jsxs(I,{children:[t.jsx(Q,{index:0,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),t.jsx(Q,{index:1,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),t.jsx(Q,{index:2,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),t.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]}),W=()=>{const[e,n]=o.useState(0),s=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return t.jsxs(h,{index:e,items:s,onChange:n,children:[t.jsx(v,{}),t.jsxs(P,{children:[t.jsx(B,{children:t.jsx(a,{children:"Prev"})}),t.jsx(f,{children:t.jsx(a,{children:"Next"})})]})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
  return <Steps.Root count={3}>
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
