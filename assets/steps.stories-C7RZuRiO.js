import{d as le,c as se,r as o,m as oe,h as te,ar as ae,a as M,e as de,f as ue,z as me,F as xe,j as e,s as D,A as Se,a7 as ge,C as he,V as je}from"./iframe-CDvKCJeY.js";import{P as re}from"./props-table-B5jd3eOh.js";import{B as v}from"./button-group-BvVa_2u1.js";import{B as a}from"./button-CJHWYlLB.js";import{B as ee}from"./box-xTzNsHnl.js";import{u as ie}from"./index-BEq5E85R.js";import{u as Ce}from"./index-BdN8tNZC.js";import{u as Pe}from"./index-BSRN_-gy.js";import{c as ve}from"./index-Dxg_VkFp.js";import{C as Be}from"./check-icon-DWuhtck_.js";import"./grid-7ltxq6Fa.js";import"./grid-item-DNu_2ZLx.js";import"./for-Dx7nH0k1.js";import"./flex-CO0xfN_q.js";import"./heading-CF4T3G26.js";import"./icon-button-BY5_vXRW.js";import"./group-BG3zBTUu.js";import"./use-ripple-BOWtBklS.js";import"./rings-CTwWZ55N.js";import"./use-breakpoint-DJL3dOjD.js";import"./use-breakpoint-value-DnHVYPvO.js";import"./use-color-mode-value-et3DRqaV.js";import"./createLucideIcon-DLwdYwoU.js";const fe=le({base:{description:{color:"fg.muted"},indicator:{alignItems:"center",boxSize:"{size}",display:"flex",flexShrink:"0",fontWeight:"medium",justifyContent:"center",rounded:"full",transitionDuration:"moderate",transitionProperty:"common"},item:{display:"flex",flex:"1 0 0",position:"relative",_last:{"& [role=separator]":{display:"none"},flex:"initial"}},list:{display:"flex",gap:"3",justifyContent:"space-between"},root:{display:"flex",gap:"4",w:"full"},separator:{bg:"border",flex:"1",transitionDuration:"moderate",transitionProperty:"common"},title:{fontWeight:"medium"}},props:{orientation:{horizontal:{item:{alignItems:"center",flexDirection:"row"},list:{alignItems:"center",flexDirection:"row",w:"full"},root:{flexDirection:"column"},separator:{h:"{thickness}",w:"full"}},vertical:{content:{flex:"1"},item:{alignItems:"flex-start"},list:{alignItems:"flex-start",flexDirection:"column"},root:{flexDirection:"row"},separator:{h:"full",insetBlockStart:"calc({size} + {gap})",insetInlineStart:"calc(({size} / 2) - ({thickness} / 2))",maxH:"calc(full - {size} - {gap})",position:"absolute",w:"{thickness}"}}}},variants:{solid:{indicator:{_complete:{layerStyle:"solid"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.solid"}}},subtle:{indicator:{_complete:{bg:"colorScheme.emphasized",color:"colorScheme.fg"},_current:{bg:"colorScheme.muted",color:"colorScheme.fg"},_incomplete:{bg:"bg.subtle",color:"fg.emphasized"}},separator:{_complete:{bg:"colorScheme.emphasized"}}}},sizes:{sm:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.8","--thickness":"sizes.0.5",fontSize:"xs",gap:"3"}},md:{indicator:{fontSize:"md"},item:{"--gap":"sizes.3","--size":"sizes.10","--thickness":"sizes.0.5",fontSize:"sm",gap:"3"}},lg:{indicator:{fontSize:"lg"},item:{"--gap":"sizes.3","--size":"sizes.12","--thickness":"sizes.0.5",gap:"3"}}},defaultProps:{size:"md",variant:"solid",orientation:"horizontal"}}),{DescendantsContext:Te,useDescendant:ze,useDescendants:be}=ve(),[Ne,y]=se({name:"StepsContext"}),[ke,L]=se({name:"StepsItemContext"}),Ie=({count:t=0,defaultIndex:n=0,index:s,orientation:i="horizontal",onChange:p,...l}={})=>{const S=be(),[c,u]=Pe({defaultValue:n,value:s,onChange:p}),x=o.useId(),P=o.useCallback(r=>r<c?"complete":r>c?"incomplete":"current",[c]),g=o.useCallback(()=>u(r=>Math.max(0,r-1)),[u]),d=o.useCallback(()=>{u(r=>Math.min(t,r+1))},[t,u]),T=o.useCallback(({ref:r,...m}={})=>({...l,...m,ref:oe(r,l.ref)}),[l]),z=o.useCallback(r=>({"data-orientation":i,...r}),[i]),b=o.useCallback(({index:r=t,...m}={})=>({id:`${x}-${r}`,hidden:r!==c,tabIndex:0,...m}),[t,x,c]),N=o.useCallback((r={})=>({disabled:c===0,...r,onClick:te(r.onClick,g)}),[g,c]),k=o.useCallback((r={})=>({disabled:t<=c,...r,onClick:te(r.onClick,d)}),[t,c,d]);return{id:x,count:t,descendants:S,getStatus:P,index:c,orientation:i,setIndex:u,getContentProps:b,getListProps:z,getNextTriggerProps:k,getPrevTriggerProps:N,getRootProps:T,onNext:d,onPrev:g}},Re=({"aria-labelledby":t,index:n,...s})=>{const{descendants:i,register:p}=ze(),{id:l,getStatus:S,orientation:c}=y(),u=S(n),x=u==="current",P=n===0,g=n===i.lastValue()?.index,d=`data-${u}`,{getDocument:T}=ae(),z=o.useCallback(({ref:m,"aria-labelledby":Z,...G}={})=>{const w=!!T()?.getElementById(`${l}-${n}`);return{"aria-current":x?"step":void 0,"aria-labelledby":de(t,Z,w?`${l}-${n}`:void 0),"data-orientation":c,[d]:M(!0),...s,...G,ref:oe(m,p)}},[t,T,l,n,x,c,d,s,p]),b=o.useCallback(m=>({[d]:M(!0),...m}),[d]),N=o.useCallback(m=>({[d]:M(!0),...m}),[d]),k=o.useCallback(m=>({[d]:M(!0),...m}),[d]),r=o.useCallback(m=>({"data-orientation":c,role:"separator",[d]:M(!0),...m}),[c,d]);return{first:P,index:n,last:g,status:u,getDescriptionProps:N,getIndicatorProps:k,getRootProps:z,getSeparatorProps:r,getTitleProps:b}},{ComponentContext:ye,useComponentContext:Y,withContext:C,withProvider:Me}=ue("steps",fe),h=Me(({children:t,items:n=[],lazy:s,lazyBehavior:i,orientation:p,...l})=>{const S=Ce(p),c=me(t),u=xe(c,j),{id:x,count:P,descendants:g,getStatus:d,index:T,orientation:z,setIndex:b,getContentProps:N,getListProps:k,getNextTriggerProps:r,getPrevTriggerProps:m,getRootProps:Z,onNext:G,onPrev:w}=Ie({count:n.length||o.Children.count(u?.props.children),...l,orientation:S}),ce=o.useMemo(()=>({items:n,lazy:s,lazyBehavior:i}),[n,s,i]),pe=o.useMemo(()=>({id:x,count:P,getStatus:d,index:T,orientation:z,setIndex:b,getContentProps:N,getListProps:k,getNextTriggerProps:r,getPrevTriggerProps:m,onNext:G,onPrev:w}),[x,P,T,z,b,d,G,w,k,r,m,N]);return e.jsx(Te,{value:g,children:e.jsx(Ne,{value:pe,children:e.jsx(ye,{value:ce,children:e.jsx(D.div,{...Z(),children:t})})})})},"root",{transferProps:["orientation"]})(),j=C(({children:t,...n})=>{const{items:s}=Y(),{getListProps:i}=y(),p=o.useMemo(()=>t||s?.map(({complete:l,content:S,current:c,description:u,hasSeparator:x=!0,incomplete:P,title:g,contentProps:d,descriptionProps:T,indicatorProps:z,separatorProps:b,titleProps:N,...k},r)=>e.jsxs(U,{index:r,title:g,...k,children:[e.jsx(q,{complete:l,current:c,incomplete:P,...z}),e.jsxs(D.div,{children:[g?e.jsx(J,{...N,children:g}):null,u?e.jsx(K,{...T,children:u}):null]}),x?e.jsx(Q,{...b}):null]},r)),[t,s]);return e.jsx(D.ol,{...i(n),children:p})},"list")(),U=C(t=>{const{first:n,index:s,last:i,status:p,getDescriptionProps:l,getIndicatorProps:S,getRootProps:c,getSeparatorProps:u,getTitleProps:x}=Re(t),P=o.useMemo(()=>({first:n,index:s,last:i,status:p,getDescriptionProps:l,getIndicatorProps:S,getSeparatorProps:u,getTitleProps:x}),[n,s,i,p,x,l,u,S]);return e.jsx(ke,{value:P,children:e.jsx(D.li,{...c()})})},"item")(),q=C(({complete:t=e.jsx(Be,{}),current:n=e.jsx(ne,{}),incomplete:s=e.jsx(ne,{}),...i})=>{const{status:p,getIndicatorProps:l}=L(),S=o.useMemo(()=>({complete:t,current:n,incomplete:s}),[t,n,s]);return e.jsx(D.div,{...l(i),children:S[p]})},"indicator")(),ne=C("span","number")(void 0,({children:t,...n})=>{const{index:s}=L();return{...n,children:t??s+1}}),J=C("h3","title")(void 0,t=>{const{getTitleProps:n}=L();return n(t)}),K=C("p","description")(void 0,t=>{const{getDescriptionProps:n}=L();return n(t)}),Q=C("div","separator")(void 0,t=>{const{getSeparatorProps:n}=L();return n(t)}),I=({children:t})=>{const{items:n}=Y();return o.useMemo(()=>t||n?.map(({content:s,contentProps:i},p)=>Se(s)||ge(s)?null:e.jsx(X,{index:p,...i,children:s},p)),[t,n])},X=C("div","content")(void 0,({index:t,...n})=>{const{lazy:s,lazyBehavior:i}=Y(),{index:p,getContentProps:l}=y(),c=ie({lazy:s,lazyBehavior:i,mounted:t===p,...n});return{...l({index:t,...n}),children:c}}),R=C("div",{name:"CompletedContent",slot:["content","completed"]})(void 0,t=>{const{lazy:n,lazyBehavior:s}=Y(),{count:i,index:p,getContentProps:l}=y(),c=ie({lazy:n,lazyBehavior:s,mounted:i!==0&&i===p,...t});return{...l(t),children:c}}),B=C("button",{name:"PrevTrigger",slot:["trigger","prev"]})(t=>{const{getPrevTriggerProps:n}=y();return{asChild:!0,...n(t)}}),f=C("button",{name:"NextTrigger",slot:["trigger","next"]})(t=>{const{getNextTriggerProps:n}=y();return{asChild:!0,...n(t)}}),nt={component:h,title:"Components / Steps"},_=()=>{const t=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsxs(h,{items:t,children:[e.jsx(j,{}),e.jsx(I,{}),e.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]})},V=()=>{const t=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsx(re,{variant:"stack",columns:["solid","subtle"],rows:he,children:(n,s,i)=>e.jsxs(h,{colorScheme:s,variant:n,defaultIndex:1,items:t,children:[e.jsx(j,{}),e.jsx(I,{}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]},i)})},E=()=>{const t=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsx(re,{variant:"stack",rows:["sm","md","lg"],children:(n,s,i)=>e.jsxs(h,{size:s,defaultIndex:1,items:t,children:[e.jsx(j,{}),e.jsx(I,{}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]},i)})},O=()=>{const t=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{items:t,orientation:"horizontal",children:[e.jsx(j,{}),e.jsx(I,{}),e.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]}),e.jsxs(h,{h:"lg",items:t,orientation:"vertical",children:[e.jsx(j,{}),e.jsxs(je,{flex:"1",children:[e.jsx(I,{}),e.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]})]})]})},$=()=>{const t=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsxs(h,{items:t,lazy:!0,children:[e.jsx(j,{}),e.jsx(I,{}),e.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]})},A=()=>{const t=o.useMemo(()=>[{content:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。",description:"レッドリボン軍",title:"孫悟空少年編"},{content:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。",description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{content:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。",description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsxs(h,{items:t,lazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(j,{}),e.jsx(I,{}),e.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]})},F=()=>{const t=o.useMemo(()=>[{complete:"😇",current:"😎",description:"レッドリボン軍",incomplete:"😑",title:"孫悟空少年編"},{complete:"😇",current:"😎",description:"ピッコロ大魔王",incomplete:"😑",title:"ピッコロ大魔王編"},{complete:"😇",current:"😎",description:"ベジータ・ナッパ",incomplete:"😑",title:"サイヤ人編"}],[]);return e.jsxs(h,{items:t,children:[e.jsx(j,{}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]})},H=()=>e.jsxs(h,{children:[e.jsxs(j,{children:[e.jsxs(U,{index:0,children:[e.jsx(q,{}),e.jsxs(ee,{children:[e.jsx(J,{children:"孫悟空少年編"}),e.jsx(K,{children:"レッドリボン軍"})]}),e.jsx(Q,{})]}),e.jsxs(U,{index:1,children:[e.jsx(q,{}),e.jsxs(ee,{children:[e.jsx(J,{children:"ピッコロ大魔王編"}),e.jsx(K,{children:"ピッコロ大魔王"})]}),e.jsx(Q,{})]}),e.jsxs(U,{index:2,children:[e.jsx(q,{}),e.jsxs(ee,{children:[e.jsx(J,{children:"サイヤ人編"}),e.jsx(K,{children:"ベジータ・ナッパ"})]}),e.jsx(Q,{})]})]}),e.jsxs(I,{children:[e.jsx(X,{index:0,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),e.jsx(X,{index:1,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),e.jsx(X,{index:2,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),e.jsx(R,{children:"地球の神と殺された仲間たちを甦らせるため、重傷で入院中の悟空に代わり、悟飯、クリリン、ブルマの3人が神とピッコロの故郷であるナメック星へ向かう。だが、そこには地球で闘ったベジータや、界王すら畏怖する宇宙の帝王・フリーザとその一味が不老不死を求めて来襲し、ナメック星人を虐殺しながらドラゴンボールを略奪していた。悟飯たちはベジータ、フリーザ一味とのドラゴンボールをめぐる三つ巴の攻防の末、後から到着した悟空とナメック星人たちの協力を得てナメック星の神龍・ポルンガを呼び出し、ピッコロと地球のドラゴンボールを復活させる。"}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]}),W=()=>{const[t,n]=o.useState(0),s=o.useMemo(()=>[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],[]);return e.jsxs(h,{index:t,items:s,onChange:n,children:[e.jsx(j,{}),e.jsxs(v,{children:[e.jsx(B,{children:e.jsx(a,{children:"Prev"})}),e.jsx(f,{children:e.jsx(a,{children:"Next"})})]})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}};const st=["Basic","Variant","Size","Orientation","Lazy","LazyBehavior","CustomIndicator","CustomComponent","CustomControl"];export{_ as Basic,H as CustomComponent,W as CustomControl,F as CustomIndicator,$ as Lazy,A as LazyBehavior,O as Orientation,E as Size,V as Variant,st as __namedExportsOrder,nt as default};
