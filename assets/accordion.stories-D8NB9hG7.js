import{j as n}from"./extends-CwFRzn3r.js";import{r as g}from"./index-BwDkhjyp.js";import{u as Un}from"./index-DAOPkzwd.js";import{c as zn}from"./index-BOsfR7XW.js";import{p as Fn,J as z,b as v,c as L,x as Bn,a as Qn,h as J,q as Wn,w as nn,ab as Xn,ac as Yn,d as Zn}from"./factory-CBW6YcbY.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{a as $n}from"./use-component-style-Givb0biW.js";import{o as ne}from"./theme-provider-B8NHi_rL.js";import{a as ee}from"./icon-C1fg-h9m.js";import{C as oe}from"./collapse-Cx_lRdpz.js";import{M as en}from"./minus-CPuq6dAp.js";import{G as U}from"./ghost-fbkTqaPW.js";import{P as on}from"./plus-DiSi0d_x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-BcRMoVLh.js";import"./utils-CC31eNL0.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./forward-ref-scR1bmHx.js";import"./factory-B6ZnNkK9.js";import"./lucide-icon-BYLO5a3r.js";const{DescendantsContextProvider:ce,useDescendant:re,useDescendants:ie}=zn(),[se,q]=Fn({name:"AccordionContext",errorMessage:`useAccordionContext returned is 'undefined'. Seems you forgot to wrap the components in "<Accordion />"`}),[ae,B]=Fn({name:"AccordionItemContext",errorMessage:`useAccordionItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<AccordionItem />"`}),c=R((r,i)=>{const[t,s]=$n("Accordion",r),{className:I,defaultIndex:p,icon:j,iconHidden:x,index:d,isMultiple:a,isToggle:A,onChange:_,...w}=ne(s);(d||p)!=null&&!z(d||p)&&a&&console.warn("Accordion: If 'isMultiple' is passed, then 'index' or 'defaultIndex' must be an array."),a&&A&&console.warn("Accordion: If 'isMultiple' is passed, 'isToggle' will be ignored. Either remove 'isToggle' or 'isMultiple' depending on whether you want isMultiple accordions visible or not");const P=ie(),[C,h]=g.useState(-1),[o,S]=Un({defaultValue:()=>a?p??[]:p??-1,value:d,onChange:_});g.useEffect(()=>()=>h(-1),[]);const b={w:"100%",...t.container};return n.jsx(ce,{value:P,children:n.jsx(se,{value:{focusedIndex:C,icon:j,iconHidden:x,index:o,isMultiple:a,isToggle:A,setFocusedIndex:h,setIndex:S,styles:t},children:n.jsx(v.div,{ref:i,className:L("ui-accordion",I),__css:b,...w})})})});c.displayName="Accordion";c.__ui__="Accordion";const f=R(({className:r,children:i,icon:t,containerProps:s,...I},p)=>{const{icon:j,isDisabled:x=!1,isOpen:d,getLabelProps:a}=B(),{icon:A,iconHidden:_,styles:w}=q(),P={alignItems:"center",display:"inline-flex",outline:0,width:"100%",...w.button},C=typeof t=="function"?t({isDisabled:x,isExpanded:d}):t,h=typeof j=="function"?j({isDisabled:x,isExpanded:d}):j,o=typeof A=="function"?A({isDisabled:x,isExpanded:d}):A;return n.jsx(v.div,{"aria-level":3,role:"heading",...s,children:n.jsxs(v.button,{...a(I,p),className:L("ui-accordion__label",r),__css:P,children:[i,_?null:n.jsx(Q,{children:C??h??o})]})})});f.displayName="AccordionLabel";f.__ui__="AccordionLabel";const Q=({className:r,children:i,...t})=>{const{isDisabled:s,isOpen:I}=B(),{styles:p}=q(),j={opacity:s?.4:1,transform:I?"rotate(-180deg)":void 0,transformOrigin:"center",transition:"transform 0.2s",...p.icon};return i?n.jsx(v.span,{className:L("ui-accordion__icon",r),"aria-hidden":!0,__css:{alignItems:"center",display:"inline-flex",justifyContent:"center",ml:"auto"},children:i}):n.jsx(ee,{className:L("ui-accordion__icon",r),"aria-hidden":!0,__css:j,...t})};Q.displayName="AccordionIcon";Q.__ui__="AccordionIcon";const m=R(({className:r,animationOpacity:i,children:t,delay:s,duration:I,endingHeight:p,startingHeight:j,transition:x,transitionEnd:d,unmountOnExit:a,...A},_)=>{const{isOpen:w,getPanelProps:P}=B(),{styles:C}=q(),h=typeof t=="string"?n.jsx("p",{children:t}):t,o={...C.panel};return n.jsx(oe,{animationOpacity:i,delay:s,duration:I,endingHeight:p,isOpen:w,startingHeight:j,transition:x,transitionEnd:d,unmountOnExit:a,children:n.jsx(v.div,{...P(A,_),className:L("ui-accordion__panel",r),__css:o,children:h})})});m.displayName="AccordionPanel";m.__ui__="AccordionPanel";const e=R(({className:r,children:i,icon:t,isDisabled:s=!1,label:I,...p},j)=>{const x=g.useId(),d=g.useId(),{index:a,isMultiple:A,isToggle:_,setFocusedIndex:w,setIndex:P,styles:C}=q(),{descendants:h,index:o,register:S}=re({disabled:s}),b=o!==-1?z(a)?a.includes(o):a===o:!1;b&&s&&console.warn("Accordion: Cannot open a disabled accordion item");const W=g.useCallback(u=>{o!==-1&&(A&&z(a)?P(u?a.concat(o):a.filter(y=>y!==o)):u?P(o):_&&P(-1))},[A,_,o,a,P]),X=g.useCallback(()=>{w(o)},[w,o]),Y=g.useCallback(()=>{W(!b),w(o)},[o,w,b,W]),Z=g.useCallback(u=>{const $={ArrowDown:()=>{const l=h.enabledNextValue(o);l==null||l.node.focus()},ArrowUp:()=>{const l=h.enabledPrevValue(o);l==null||l.node.focus()},End:()=>{const l=h.enabledLastValue();l==null||l.node.focus()},Home:()=>{const l=h.enabledFirstValue();l==null||l.node.focus()}}[u.key];$&&(u.preventDefault(),$(u))},[h,o]),Hn=g.useCallback((u={},y=null)=>({id:x,type:"button","aria-controls":d,"aria-disabled":Bn(!A&&!_&&b||s),"aria-expanded":b,...u,ref:Qn(S,y),disabled:s,onClick:J(u.onClick,Y),onFocus:J(u.onFocus,X),onKeyDown:J(u.onKeyDown,Z)}),[x,b,d,A,_,s,S,Y,X,Z]),Gn=g.useCallback((u={},y=null)=>({id:d,"aria-labelledby":x,role:"region",...u,ref:y}),[x,d]),On={...C.item,overflowAnchor:"none"},Kn=typeof I=="function"?I({isDisabled:s,isExpanded:b}):I;typeof i=="function"&&(i=i({isDisabled:s,isExpanded:b}));const k=Wn(i),Rn=nn(k,f),qn=nn(k,m),Jn=Xn(k)?i:Yn(k,f,m);return n.jsx(ae,{value:{icon:t,isDisabled:s,isOpen:b,getLabelProps:Hn,getPanelProps:Gn},children:n.jsxs(v.div,{ref:j,className:L("ui-accordion__item",r),"data-expanded":Zn(b),__css:On,...p,children:[Rn??n.jsx(f,{children:Kn}),qn??n.jsx(m,{children:Jn})]})})});e.displayName="AccordionItem";e.__ui__="AccordionItem";const Se={component:c,title:"Components / Disclosure / Accordion"},M=()=>n.jsxs(c,{children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),E=()=>n.jsxs(n.Fragment,{children:[n.jsxs(c,{variant:"basic",children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),n.jsxs(c,{variant:"card",children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]}),D=()=>n.jsxs(c,{defaultIndex:1,children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),N=()=>n.jsxs(c,{isToggle:!0,children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),T=()=>n.jsxs(c,{defaultIndex:[1,2],isMultiple:!0,children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),V=()=>n.jsxs(c,{iconHidden:!0,children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),F=()=>n.jsxs(c,{children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{isDisabled:!0,label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),H=()=>n.jsxs(c,{children:[n.jsxs(e,{children:[n.jsx(f,{_expanded:{bg:"orange.500",color:"white"},children:"孫悟空少年編"}),n.jsx(m,{pt:3,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})]}),n.jsxs(e,{children:[n.jsx(f,{_expanded:{bg:"orange.500",color:"white"},children:"ピッコロ大魔王編"}),n.jsx(m,{pt:3,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})]}),n.jsxs(e,{children:[n.jsx(f,{_expanded:{bg:"orange.500",color:"white"},children:"サイヤ人編"}),n.jsx(m,{pt:3,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]}),G=()=>n.jsxs(c,{children:[n.jsx(e,{label:"孫悟空少年編",children:n.jsx(m,{bg:["orange.50","orange.400"],pt:3,children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})}),n.jsx(e,{label:"ピッコロ大魔王編",children:n.jsx(m,{bg:["orange.50","orange.400"],pt:3,children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})}),n.jsx(e,{label:"サイヤ人編",children:n.jsx(m,{bg:["orange.50","orange.400"],pt:3,children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})})]}),O=()=>n.jsxs(n.Fragment,{children:[n.jsxs(c,{icon:n.jsx(U,{color:"orange.700"}),children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),n.jsxs(c,{icon:({isExpanded:r})=>r?n.jsx(on,{color:["blackAlpha.800","whiteAlpha.700"]}):n.jsx(en,{color:["blackAlpha.800","whiteAlpha.700"]}),children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]}),n.jsxs(c,{children:[n.jsxs(e,{children:[n.jsx(f,{icon:n.jsx(U,{color:"orange.700"}),children:"孫悟空少年編"}),n.jsx(m,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"})]}),n.jsxs(e,{children:[n.jsx(f,{icon:({isExpanded:r})=>r?n.jsx(on,{color:["blackAlpha.800","whiteAlpha.700"]}):n.jsx(en,{color:["blackAlpha.800","whiteAlpha.700"]}),children:"ピッコロ大魔王編"}),n.jsx(m,{children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"})]}),n.jsxs(e,{children:[n.jsx(f,{icon:n.jsx(U,{color:"orange.700"}),children:"サイヤ人編"}),n.jsx(m,{children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})]})]}),K=()=>{const[r,i]=g.useState(void 0);return n.jsxs(c,{index:r,onChange:i,children:[n.jsx(e,{label:"孫悟空少年編",children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。"}),n.jsx(e,{label:"ピッコロ大魔王編",children:"天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。"}),n.jsx(e,{label:"サイヤ人編",children:"ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。"})]})};var cn,rn,sn;M.parameters={...M.parameters,docs:{...(cn=M.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(sn=(rn=M.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var an,ln,tn;E.parameters={...E.parameters,docs:{...(an=E.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <>
      <Accordion variant="basic">
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>

      <Accordion variant="card">
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>
    </>;
}`,...(tn=(ln=E.parameters)==null?void 0:ln.docs)==null?void 0:tn.source}}};var dn,mn,An;D.parameters={...D.parameters,docs:{...(dn=D.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <Accordion defaultIndex={1}>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(An=(mn=D.parameters)==null?void 0:mn.docs)==null?void 0:An.source}}};var un,pn,xn;N.parameters={...N.parameters,docs:{...(un=N.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  return <Accordion isToggle>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(xn=(pn=N.parameters)==null?void 0:pn.docs)==null?void 0:xn.source}}};var hn,bn,In;T.parameters={...T.parameters,docs:{...(hn=T.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <Accordion defaultIndex={[1, 2]} isMultiple>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(In=(bn=T.parameters)==null?void 0:bn.docs)==null?void 0:In.source}}};var jn,gn,fn;V.parameters={...V.parameters,docs:{...(jn=V.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <Accordion iconHidden>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(fn=(gn=V.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var _n,wn,Pn;F.parameters={...F.parameters,docs:{...(_n=F.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem isDisabled label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(Pn=(wn=F.parameters)==null?void 0:wn.docs)==null?void 0:Pn.source}}};var Cn,yn,vn;H.parameters={...H.parameters,docs:{...(Cn=H.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: "orange.500",
        color: "white"
      }}>
          孫悟空少年編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: "orange.500",
        color: "white"
      }}>
          ピッコロ大魔王編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionLabel _expanded={{
        bg: "orange.500",
        color: "white"
      }}>
          サイヤ人編
        </AccordionLabel>

        <AccordionPanel pt={3}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionPanel>
      </AccordionItem>
    </Accordion>;
}`,...(vn=(yn=H.parameters)==null?void 0:yn.docs)==null?void 0:vn.source}}};var Ln,Sn,kn;G.parameters={...G.parameters,docs:{...(Ln=G.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <Accordion>
      <AccordionItem label="孫悟空少年編">
        <AccordionPanel bg={["orange.50", "orange.400"]} pt={3}>
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        <AccordionPanel bg={["orange.50", "orange.400"]} pt={3}>
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        <AccordionPanel bg={["orange.50", "orange.400"]} pt={3}>
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionPanel>
      </AccordionItem>
    </Accordion>;
}`,...(kn=(Sn=G.parameters)==null?void 0:Sn.docs)==null?void 0:kn.source}}};var Mn,En,Dn;O.parameters={...O.parameters,docs:{...(Mn=O.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <>
      <Accordion icon={<Ghost color="orange.700" />}>
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>

      <Accordion icon={({
      isExpanded
    }) => isExpanded ? <Plus color={["blackAlpha.800", "whiteAlpha.700"]} /> : <Minus color={["blackAlpha.800", "whiteAlpha.700"]} />}>
        <AccordionItem label="孫悟空少年編">
          地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
        </AccordionItem>

        <AccordionItem label="ピッコロ大魔王編">
          天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
        </AccordionItem>

        <AccordionItem label="サイヤ人編">
          ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem>
          <AccordionLabel icon={<Ghost color="orange.700" />}>
            孫悟空少年編
          </AccordionLabel>

          <AccordionPanel>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionLabel icon={({
          isExpanded
        }) => isExpanded ? <Plus color={["blackAlpha.800", "whiteAlpha.700"]} /> : <Minus color={["blackAlpha.800", "whiteAlpha.700"]} />}>
            ピッコロ大魔王編
          </AccordionLabel>

          <AccordionPanel>
            天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionLabel icon={<Ghost color="orange.700" />}>
            サイヤ人編
          </AccordionLabel>

          <AccordionPanel>
            ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>;
}`,...(Dn=(En=O.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var Nn,Tn,Vn;K.parameters={...K.parameters,docs:{...(Nn=K.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<AccordionProps["index"] | undefined>(undefined);
  return <Accordion index={index} onChange={onChange}>
      <AccordionItem label="孫悟空少年編">
        地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。そこで、7つ集めると神龍（シェンロン）が現れ、どんな願いでも一つだけ叶えてくれるというドラゴンボールの存在を、さらに育ての親である孫悟飯の形見として大切に持っていた球がその1つ「四星球（スーシンチュウ）」であることを知り、ブルマと共に残りのドラゴンボールを探す旅に出る。
      </AccordionItem>

      <AccordionItem label="ピッコロ大魔王編">
        天下一武道会終了後、ピラフ一味によって復活したピッコロ大魔王によって、クリリンや亀仙人など悟空の仲間たちや多くの武道家たちが殺される。悟空は仇を討つため、道中に出会ったヤジロベーや仙猫カリンの協力を得て命を賭して潜在する力を引き出し、ピッコロ大魔王に闘いを挑み勝利する。闘いの後、悟空はピッコロ大魔王に殺された神龍や仲間たちの復活のため天界へ向かい、ドラゴンボールの創造者である神に会う。そこで神龍復活の条件として、神の下で天界で修行することとなった。
      </AccordionItem>

      <AccordionItem label="サイヤ人編">
        ピッコロ（マジュニア）との闘いから約5年後、息子の孫悟飯を儲けて平和な日々を過ごしていた悟空のもとに、実兄・ラディッツが宇宙より来襲し、自分が惑星ベジータの戦闘民族・サイヤ人であることを知らされる。さらわれた孫悟飯を助けるため悟空は宿敵ピッコロと手を組み、自らの命と引き換えにラディッツを倒すが、約1年後にはさらに強力なサイヤ人たちがドラゴンボールを求めて地球に来襲することを知る。
      </AccordionItem>
    </Accordion>;
}`,...(Vn=(Tn=K.parameters)==null?void 0:Tn.docs)==null?void 0:Vn.source}}};const ke=["basic","withVariant","withDefaultIndex","withIsToggle","withIsMultiple","withIconHidden","isDisabled","customLabel","customPanel","customIcon","customControl"];export{ke as __namedExportsOrder,M as basic,K as customControl,O as customIcon,H as customLabel,G as customPanel,Se as default,F as isDisabled,D as withDefaultIndex,V as withIconHidden,T as withIsMultiple,N as withIsToggle,E as withVariant};
