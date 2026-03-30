import{bb as Zl,bc as Jl,bd as ea,E as la,c6 as aa,r as a,b9 as O,m as hl,i as b,w as nl,l as Fl,bW as na,ah as gl,bm as Dl,bA as Gl,O as oa,a1 as k,v as dl,a4 as ta,Z as ua,bq as ra,q as sa,j as e,X as ca,F as fl,G as ia,t as q,T as ma,V as wl,B as El,C as pa}from"./iframe-D2MBOeiZ.js";import{u as Tl,C as ql}from"./index.esm-CwYccs0M.js";import{F}from"./for-BMu6NIsT.js";import{B as Hl}from"./box-C_1IkXcX.js";import{C as va}from"./chevrons-down-icon-CqimuKT5.js";import{T as ba}from"./tag-DSlREQrB.js";import{H as da}from"./heart-icon-B3NtbdOX.js";import{u as ha,a as ga,c as fa,b as xa,C as Aa,d as Sa,e as Ca,f as ja,g as Oa}from"./index-MfSQvLUt.js";import{a as Ia}from"./autocomplete.style-DDe9TywK.js";import{u as Bl}from"./index-DdJ0lR_o.js";import{u as Ma,F as oe}from"./use-field-props-CDkQJ3A1.js";import{u as Ra}from"./input-v8k7HcZt.js";import{M as ya}from"./minus-icon-CrPvyF9k.js";import{u as Pa}from"./group-CM8hydif.js";import{u as ka}from"./use-input-border-C8mSRu5b.js";import{P as Fa,b as Da,c as Ga}from"./popover-DnuqRp8x.js";import{I as D,a as xl,b as te}from"./input-group-DF9u2Y9O.js";import{C as Ba}from"./check-icon-BP2VwZf5.js";import{C as Va}from"./chevron-down-icon-BQvBcDQl.js";import{P as Wl}from"./props-table-CqRM7x8_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH_MgbFI.js";import"./index-D_ssy3gd.js";import"./menu.style-CFRopK9g.js";import"./native-select.style-BiJuhwYh.js";import"./index-Cvsxs-2l.js";import"./use-disclosure-C4aXW_Yx.js";import"./index-D48gJAaj.js";import"./use-breakpoint-CPqwUnQH.js";import"./use-breakpoint-value-BWNqLeUt.js";import"./use-color-mode-value-DV0TalSl.js";import"./flex-Canu1oCt.js";import"./index-C9IOJt41.js";import"./index-CsJpF3HU.js";import"./index-CuepF1Ll.js";import"./event-CajAW1BV.js";import"./slide-fade-Cm9k6fYR.js";import"./transition-BhnhYFiw.js";import"./fade-scale-CV9jmZwG.js";import"./grid-BcGr_5fj.js";import"./grid-item-C5Hw1QTd.js";import"./heading-KDpvoEIe.js";const wa=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],Ea=Zl("bug",wa),G=Jl(ea)({as:Ea}),Ta=({count:l,focused:n,index:u,label:s,max:p,separator:m})=>{const v=l-1===u;return e.jsxs("span",{style:{marginInlineEnd:"var(--gap)"},children:[s,(!nl(p)||l<p)&&n||!v?m:null]})},de=l=>O(l?.label)?l.label:l?.query??"",qa=(l,n,u)=>l.length?n.map(s=>{if("items"in s){const p=s.items.filter(m=>{if("query"in m)return O(m.query)&&u(m.query,l);if(O(m.label))return O(m.label)&&u(m.label,l)});if(p.length)return{...s,items:p}}else if("query"in s){if(O(s.query)&&u(s.query,l))return s}else if(O(s.label)&&O(s.label)&&u(s.label,l))return s}).filter(Boolean):n,[Ha,Wa]=sa({name:"AutocompleteContext"}),za=(l={})=>{const{t:n}=la("autocomplete"),{props:{id:u,ref:s,name:p,allowCustomValue:m=!1,closeOnChange:v=!1,multiple:f=!1,closeOnSelect:H=!f,defaultInputValue:W,defaultValue:z=f?[]:"",disabled:S,emptyMessage:L=n("No results found"),filter:K=qa,focusOnClear:_=!0,inputValue:tl,items:B=[],matcher:Y=aa,max:h,openOnChange:$=!0,openOnClick:Z=!0,openOnFocus:V=!0,placeholder:ue,readOnly:J,render:re=Ta,required:se,separator:ce=",",value:R,onChange:ie,onInputChange:w,...ul},ariaProps:rl,dataProps:I,eventProps:sl}=Ma(l),ee=a.useRef(null),me=a.useRef(null),E=a.useRef(null),N=a.useRef(!1),A=a.useMemo(()=>{const o={};return B.forEach(c=>{"items"in c?c.items.forEach(d=>{d.value??=O(d.label)?d.label:void 0,hl(d.value)||(o[d.value]=d)}):(c.value??=O(c.label)?c.label:void 0,hl(c.value)||(o[c.value]=c))}),o},[B]),[T,le]=a.useState(!1),[i,x]=Bl({defaultValue:z,value:R,onChange:ie}),[C,g]=Bl({defaultValue:W??de(b(i)?void 0:A[i]),value:tl,onChange:w}),Q=a.useCallback(o=>{if(x(c=>b(c)?c.includes(o)?c.filter(d=>d!==o):!nl(h)||c.length<h?[...c,o]:c:o),b(i))g("");else{const c=A[o];g(de(c))}},[h,g,x,i,A]),{activeDescendant:U,descendants:y,interactive:P,open:cl,getContentProps:Sl,getSeparatorProps:Ll,getTriggerProps:Cl,popoverProps:Kl,onActiveDescendant:_l,onClose:il,onOpen:ml,onOpenWithActiveDescendant:pe,onSelect:ae}=ha({closeOnSelect:H,disabled:S,initialFocusValue:b(i)?i[0]:i,openOnClick:!1,openOnEnter:!1,openOnSpace:!1,readOnly:J,selectFocusRef:E,selectOnSpace:!1,onChange:Q,...rl,...I,...sl,...ul}),ne=a.useMemo(()=>B.length?K(C,B,Y):[],[K,C,B,Y]),pl=a.useMemo(()=>ne.length?ne:[{"data-empty":"",label:L}],[ne,L]),jl=a.useMemo(()=>!pl.filter(({hidden:o})=>!o).length,[pl]),Nl=a.useMemo(()=>{if(!b(i))return null;const o=i.length;return i.map((c,d)=>{const j=A[c]??{label:c,value:c},be=re({count:o,focused:T,index:d,max:h,separator:ce,onClear:kl=>{kl?.preventDefault(),kl?.stopPropagation(),j.value&&Q(j.value)},...j});return a.isValidElement(be)?a.cloneElement(be,{...be.props,key:d}):be})},[T,h,Q,re,ce,i,A]),Ol=b(i)&&!!i.length,vl=a.useCallback(o=>{if(b(i)&&i.length===h)return;Fl(v,o)?il():Fl($,o)&&ml(),U.current=null;const c=o.target.value;g(c),!(c.length||b(i))&&x("")},[U,v,h,il,ml,$,g,x,i]),Il=a.useCallback(o=>{if(S||na(o))return;const c=gl(o.target).value;Dl(o,{Backspace:d=>{b(i)&&(c.length||(d.preventDefault(),x(j=>j.slice(0,-1))))},Enter:d=>{if(!cl||!c.length||U.current)return;const j=ne[0];if(j)d.preventDefault(),"items"in j?ae(j.items[0]?.value):ae(j.value);else{if(!m||!b(i))return;d.preventDefault(),ae(c)}}},{preventDefault:!1})},[U,m,S,ne,ae,cl,x,i]),Ml=a.useCallback(()=>{P&&(N.current=!0,E.current?.focus(),Z&&pe(y.enabledFirstValue))},[y,P,pe,Z]),Rl=a.useCallback(o=>{V&&(o.preventDefault(),o.stopPropagation())},[V]),yl=a.useCallback(o=>{o.preventDefault(),o.stopPropagation(),le(!0),V&&!N.current&&pe(y.enabledFirstValue),N.current=!1},[V,pe,y.enabledFirstValue]),Pl=a.useCallback(o=>{if(Gl(ee.current,o.relatedTarget)||Gl(me.current,o.relatedTarget))o.preventDefault();else if(le(!1),b(i))g("");else if(m)C&&x(C);else{const c=A[i];g(de(c))}},[m,C,g,x,i,A]),ve=a.useCallback(()=>{P&&(x(o=>b(o)?[]:""),g(""),_&&E.current?.focus())},[_,P,g,x]);oa(()=>{b(R)||g(de(R?A[R]:void 0))},[R]);const Ql=a.useCallback(o=>({...I,...o}),[I]),Ul=a.useCallback(({ref:o,...c}={})=>Cl({ref:dl(o,ee),tabIndex:-1,...c,onClick:k(c.onClick,Ml)}),[Cl,Ml]),Xl=a.useCallback((o={})=>({id:u,ref:dl(o.ref,s,E),name:p,style:{...!T&&b(i)&&i.length?ta.style:{},...o.style},"data-max":ua(b(i)&&nl(h)&&i.length>=h),autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",disabled:S,placeholder:Ol?void 0:ue,readOnly:J,required:se,spellCheck:!1,value:C,...I,...o,onBlur:k(o.onBlur,Pl),onChange:k(o.onChange,vl),onFocus:k(o.onFocus,yl),onKeyDown:k(o.onKeyDown,Il),onMouseDown:k(o.onMouseDown,Rl)}),[I,S,T,Ol,u,C,h,p,Pl,yl,vl,Il,Rl,ue,J,s,se,i]),Yl=a.useCallback(({ref:o,...c}={})=>Sl({ref:dl(o,me),hidden:jl,...c}),[jl,Sl]),bl=a.useCallback(o=>({...I,...o}),[I]),$l=a.useCallback((o={})=>bl({"aria-disabled":ra(!P),"aria-label":n("Clear value"),role:"button",tabIndex:P?0:-1,...o,onClick:k(o.onClick,ve),onKeyDown:k(o.onKeyDown,c=>Dl(c,{Enter:ve,Space:ve}))}),[bl,P,ve,n]);return{children:Nl,descendants:y,inputValue:C,interactive:P,items:pl,max:h,open:cl,setInputValue:g,setValue:x,value:i,valueMap:A,getClearIconProps:$l,getContentProps:Yl,getFieldProps:Ul,getIconProps:bl,getInputProps:Xl,getRootProps:Ql,getSeparatorProps:Ll,popoverProps:Kl,onActiveDescendant:_l,onChange:Q,onClose:il,onInputChange:vl,onOpen:ml,onSelect:ae}},La=({children:l,closeOnSelect:n,disabled:u,hidden:s,value:p,...m}={})=>{const{max:v,value:f}=Wa();p??=O(l)?l:void 0;const H=b(f)?!hl(p)&&f.includes(p):f===p,W=nl(v)&&b(f)&&f.length>=v,{getIndicatorProps:z,getItemProps:S}=ga({children:l,closeOnSelect:n,disabled:u||s||W&&!H,hidden:s,selected:H,value:p,...m}),L=a.useCallback((K={})=>S(K),[S]);return{getIndicatorProps:z,getOptionProps:L}},{ComponentContext:Ka,useComponentContext:ol,withContext:M,withProvider:_a}=ia("autocomplete",Ia),t=_a(l=>{const[n,{className:u,css:s,colorScheme:p,animationScheme:m="block-start",children:v,clearable:f=!0,clearIcon:H=e.jsx(ca,{}),duration:W,emptyIcon:z,errorBorderColor:S,focusBorderColor:L,icon:K,items:_,contentProps:tl,elementProps:B,emptyProps:Y,groupProps:h,iconProps:$,inputProps:Z,optionProps:V,rootProps:ue,...J}]=Pa(l),re=a.useMemo(()=>_||fa(v,{Group:X,Label:Al,Option:r}),[_,v]),{children:se,descendants:ce,items:R,max:ie,value:w,getClearIconProps:ul,getContentProps:rl,getFieldProps:I,getIconProps:sl,getInputProps:ee,getRootProps:me,getSeparatorProps:E,popoverProps:N,onActiveDescendant:A,onClose:T,onSelect:le}=za({items:re,...J}),i=a.useMemo(()=>({animationScheme:m,duration:W,...N}),[m,W,N]),x=a.useMemo(()=>xa(R,{Empty:Xa,Group:X,Option:r}),[R]),C=ka({errorBorderColor:S,focusBorderColor:L}),g=a.useMemo(()=>({onActiveDescendant:A,onClose:T,onSelect:le}),[A,T,le]),Q=a.useMemo(()=>({max:ie,value:w}),[w,ie]),U=a.useMemo(()=>({emptyIcon:z,emptyProps:Y,getInputProps:ee,getSeparatorProps:E,groupProps:h,inputProps:Z,optionProps:V}),[z,Y,ee,E,h,Z,V]),y=b(w)?!!w.length:!!w;return e.jsx(Aa,{value:ce,children:e.jsx(Sa,{value:g,children:e.jsx(Ha,{value:Q,children:e.jsx(Ka,{value:U,children:e.jsxs(Fa,{...i,children:[e.jsxs(D,{className:u,css:s,colorScheme:p,...me({...n,...ue}),children:[e.jsx(Da,{children:e.jsx(Na,{...I(C),children:se})}),e.jsx(xl,{clickable:f&&y,...B,children:f&&y?e.jsx(Vl,{icon:H,...ul($)}):e.jsx(Vl,{icon:K,...sl($)})})]}),e.jsx(Ua,{...gl(rl(gl(tl))),children:x})]})})})})})},"root")(l=>({...Ra(),...l})),Na=M("div","field")({"data-group-propagate":""},({children:l,...n})=>{const{getInputProps:u,inputProps:s}=ol();return{...n,children:e.jsxs(e.Fragment,{children:[l,e.jsx(Qa,{...u(s)})]})}}),Qa=M("input","input")(),Vl=M("div","icon")(void 0,({children:l,icon:n,...u})=>({children:n||l||e.jsx(Va,{}),...u})),Ua=M(Ga,"content")(),Al=M("span","label")(void 0,l=>{const{getLabelProps:n}=Oa();return n(l)}),X=M(({children:l,label:n,labelProps:u,...s})=>{const{groupProps:p}=ol(),{getGroupProps:m,getLabelProps:v}=Ca({...p,...s}),f=a.useMemo(()=>({getLabelProps:v}),[v]);return e.jsx(ja,{value:f,children:e.jsxs(fl.div,{...m(),children:[n?e.jsx(Al,{...u,children:n}):null,l]})})},"group")(),r=M(({children:l,icon:n,...u})=>{const{optionProps:{icon:s,...p}={}}=ol(),{getIndicatorProps:m,getOptionProps:v}=La({...p,...u});return e.jsxs(fl.div,{...v(),children:[e.jsx(zl,{...m(),children:n??s??e.jsx(Ba,{})}),l]})},"option")(),Xa=M(({children:l,icon:n,...u})=>{const{emptyIcon:s,emptyProps:p}=ol();return e.jsxs(fl.div,{...p,...u,children:[e.jsx(zl,{children:n??s??e.jsx(ya,{})}),l]})},"empty")(),zl=M("div","indicator")(),Hn={component:t,title:"Components / Autocomplete"},he=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsx(r,{value:"アグモン",children:"アグモン"}),e.jsx(r,{value:"ガブモン",children:"ガブモン"}),e.jsx(r,{value:"テントモン",children:"テントモン"}),e.jsx(r,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(r,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(r,{value:"パルモン",children:"パルモン"}),e.jsx(r,{value:"パタモン",children:"パタモン"}),e.jsx(r,{value:"テイルモン",children:"テイルモン"})]}),ge=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsxs(X,{children:[e.jsx(Al,{children:"成長期"}),e.jsx(r,{value:"アグモン",children:"アグモン"}),e.jsx(r,{value:"ガブモン",children:"ガブモン"}),e.jsx(r,{value:"テントモン",children:"テントモン"}),e.jsx(r,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(r,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(r,{value:"パルモン",children:"パルモン"}),e.jsx(r,{value:"パタモン",children:"パタモン"}),e.jsx(r,{value:"テイルモン",children:"テイルモン"})]}),e.jsxs(X,{label:"成熟期",children:[e.jsx(r,{value:"グレイモン",children:"グレイモン"}),e.jsx(r,{value:"ガルルモン",children:"ガルルモン"}),e.jsx(r,{value:"カブテリモン",children:"カブテリモン"}),e.jsx(r,{value:"バードラモン",children:"バードラモン"}),e.jsx(r,{value:"イッカクモン",children:"イッカクモン"}),e.jsx(r,{value:"トグモン",children:"トグモン"}),e.jsx(r,{value:"エンジェモン",children:"エンジェモン"})]}),e.jsxs(X,{label:"完全体",children:[e.jsx(r,{value:"メタルグレイモン",children:"メタルグレイモン"}),e.jsx(r,{value:"ワーガルルモン",children:"ワーガルルモン"}),e.jsx(r,{value:"アトラーカブテリモン",children:"アトラーカブテリモン"}),e.jsx(r,{value:"ガルダモン",children:"ガルダモン"}),e.jsx(r,{value:"ズドモン",children:"ズドモン"}),e.jsx(r,{value:"リリモン",children:"リリモン"}),e.jsx(r,{value:"ホーリーエンジェモン",children:"ホーリーエンジェモン"}),e.jsx(r,{value:"エンジェウーモン",children:"エンジェウーモン"})]}),e.jsxs(X,{label:"究極体",children:[e.jsx(r,{value:"ウォーグレイモン",children:"ウォーグレイモン"}),e.jsx(r,{value:"メタルガルルモン",children:"メタルガルルモン"}),e.jsx(r,{value:"ヘラクルカブテリモン",children:"ヘラクルカブテリモン"}),e.jsx(r,{value:"ホウオウモン",children:"ホウオウモン"}),e.jsx(r,{value:"ヴァイクモン",children:"ヴァイクモン"}),e.jsx(r,{value:"ロゼモン",children:"ロゼモン"}),e.jsx(r,{value:"ゴッドドラモン",children:"ゴッドドラモン"}),e.jsx(r,{value:"ホーリードラモン",children:"ホーリードラモン"})]})]}),fe=()=>{const l=a.useMemo(()=>[{label:"オメガモン",value:"オメガモン"},{label:"ディアボロモン",value:"ディアボロモン"},{items:[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],label:"成長期"},{items:[{label:"グレイモン",value:"グレイモン"},{label:"ガルルモン",value:"ガルルモン"},{label:"カブテリモン",value:"カブテリモン"},{label:"バードラモン",value:"バードラモン"},{label:"イッカクモン",value:"イッカクモン"},{label:"トグモン",value:"トグモン"},{label:"エンジェモン",value:"エンジェモン"}],label:"成熟期"},{items:[{label:"メタルグレイモン",value:"メタルグレイモン"},{label:"ワーガルルモン",value:"ワーガルルモン"},{label:"アトラーカブテリモン",value:"アトラーカブテリモン"},{label:"ガルダモン",value:"ガルダモン"},{label:"ズドモン",value:"ズドモン"},{label:"リリモン",value:"リリモン"},{label:"ホーリーエンジェモン",value:"ホーリーエンジェモン"},{label:"エンジェウーモン",value:"エンジェウーモン"}],label:"完全体"},{items:[{label:"ウォーグレイモン",value:"ウォーグレイモン"},{label:"メタルガルルモン",value:"メタルガルルモン"},{label:"ヘラクルカブテリモン",value:"ヘラクルカブテリモン"},{label:"ホウオウモン",value:"ホウオウモン"},{label:"ヴァイクモン",value:"ヴァイクモン"},{label:"ロゼモン",value:"ロゼモン"},{label:"ゴッドドラモン",value:"ゴッドドラモン"},{label:"ホーリードラモン",value:"ホーリードラモン"}],label:"究極体"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},xe=()=>{const l=a.useMemo(()=>[{label:e.jsxs(e.Fragment,{children:[e.jsx(ma,{as:"span",flex:"1",children:"アグモン"}),e.jsx(da,{fontSize:"lg"})]}),query:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ae=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Wl,{variant:"stack",columns:["outline","filled","flushed"],rows:pa,children:(n,u,s)=>e.jsx(t,{colorScheme:u,variant:n,items:l,placeholder:q(n)},s)})},Se=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Wl,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,u,s)=>e.jsx(t,{size:n,variant:u,items:l,placeholder:`Size (${n})`},s)})},Ce=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",items:l,placeholder:"Select a digimon"})},je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultInputValue:"モン",items:l,openOnFocus:!0,placeholder:"Select a digimon"})},Oe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon"})},Ie=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,max:3,multiple:!0,placeholder:"Select a digimon"})},Me=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon",separator:";"})},Re=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,offset:[16,16],placeholder:"Select a digimon"})},ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{gutter:32,items:l,placeholder:"Select a digimon"})},Pe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon"})},ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon",placement:"center-end",rootProps:{w:"xs"}})},Fe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Hl,{minH:"200dvh",w:"full",children:e.jsx(t,{blockScrollOnMount:!0,items:l,placeholder:"Select a digimon"})})},De=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{allowCustomValue:!0,items:l,placeholder:"Select a digimon",onChange:n=>console.log("value:",n)})},Ge=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnChange:n=>n.target.value.length>1,openOnFocus:!1,placeholder:"Select a digimon"})},Be=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnChange:n=>!n.target.value.length,items:l,openOnFocus:!1,placeholder:"Select a digimon"})},Ve=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Hl,{minH:"200dvh",w:"full",children:e.jsx(t,{closeOnScroll:!0,items:l,placeholder:"Select a digimon"})})},we=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnFocus:!1,placeholder:"Select a digimon"})},Ee=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnClick:!1,placeholder:"Select a digimon"})},Te=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",focusOnClear:!1,items:l,placeholder:"Select a digimon"})},qe=()=>{const l=a.useMemo(()=>[{closeOnSelect:!0,label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnSelect:!1,items:l,placeholder:"Select a digimon"})},He=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnBlur:!1,items:l,placeholder:"Select a digimon"})},We=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnEsc:!1,items:l,placeholder:"Select a digimon"})},ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{clearable:!1,items:l,placeholder:"Select a digimon"})},Le=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{disabled:!0,label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,disabled:!0,items:l,placeholder:q(n)},u)}),e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(D,{variant:n,disabled:!0,children:[e.jsx(te,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:q(n)})]},u)}),e.jsx(oe,{disabled:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},_e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,items:l,placeholder:q(n),readOnly:!0},u)}),e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(D,{variant:n,readOnly:!0,children:[e.jsx(te,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:q(n)})]},u)}),e.jsx(oe,{label:"Who is your favorite digimon?",readOnly:!0,children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Ne=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,invalid:!0,items:l,placeholder:q(n)},u)}),e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(D,{variant:n,invalid:!0,children:[e.jsx(te,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:q(n)})]},u)}),e.jsx(oe,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Qe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(D,{variant:n,children:[e.jsx(te,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Ue=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(F,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(D,{variant:n,children:[e.jsx(xl,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Xe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(D,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(xl,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(D,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(te,{children:e.jsx(G,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]})]})},Ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{emptyMessage:"You just hit a route that doesn't exist... the sadness.😢",items:l,placeholder:"Select a digimon"})},$e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Select a digimon",iconProps:{color:"orange"}}),e.jsx(t,{icon:e.jsx(va,{}),items:l,placeholder:"Select a digimon"})]})},Ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon",optionProps:{icon:e.jsx(G,{})}})},Je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",render:({label:n,onClear:u})=>e.jsx(ba,{size:"sm",me:"{gap}",onClose:u,children:n})})},el=()=>{const[l,n]=a.useState("アグモン"),u=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:u,placeholder:"Select a digimon",value:l,onChange:n})},ll=()=>{const{control:l,formState:{errors:n},handleSubmit:u}=Tl(),s=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),p=m=>console.log("submit:",m);return e.jsxs(wl,{as:"form",onSubmit:u(p),children:[e.jsx(oe,{errorMessage:n.autocomplete?.message,invalid:!!n.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(ql,{name:"autocomplete",control:l,render:({field:m})=>e.jsx(t,{items:s,placeholder:"Select a digimon",...m}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(El,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},al=()=>{const l={autocomplete:"アグモン"},{control:n,formState:{errors:u},handleSubmit:s}=Tl({defaultValues:l}),p=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),m=v=>console.log("submit:",v);return e.jsxs(wl,{as:"form",onSubmit:s(m),children:[e.jsx(oe,{errorMessage:u.autocomplete?.message,invalid:!!u.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(ql,{name:"autocomplete",control:n,render:({field:v})=>e.jsx(t,{items:p,placeholder:"Select a digimon",...v}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(El,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
  return <Autocomplete.Root placeholder="Select a digimon">
      <Autocomplete.Option value="アグモン">アグモン</Autocomplete.Option>
      <Autocomplete.Option value="ガブモン">ガブモン</Autocomplete.Option>
      <Autocomplete.Option value="テントモン">テントモン</Autocomplete.Option>
      <Autocomplete.Option value="ピヨモン">ピヨモン</Autocomplete.Option>
      <Autocomplete.Option value="ゴマモン">ゴマモン</Autocomplete.Option>
      <Autocomplete.Option value="パルモン">パルモン</Autocomplete.Option>
      <Autocomplete.Option value="パタモン">パタモン</Autocomplete.Option>
      <Autocomplete.Option value="テイルモン">テイルモン</Autocomplete.Option>
    </Autocomplete.Root>;
}`,...he.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
  return <Autocomplete.Root placeholder="Select a digimon">
      <Autocomplete.Group>
        <Autocomplete.Label>成長期</Autocomplete.Label>
        <Autocomplete.Option value="アグモン">アグモン</Autocomplete.Option>
        <Autocomplete.Option value="ガブモン">ガブモン</Autocomplete.Option>
        <Autocomplete.Option value="テントモン">テントモン</Autocomplete.Option>
        <Autocomplete.Option value="ピヨモン">ピヨモン</Autocomplete.Option>
        <Autocomplete.Option value="ゴマモン">ゴマモン</Autocomplete.Option>
        <Autocomplete.Option value="パルモン">パルモン</Autocomplete.Option>
        <Autocomplete.Option value="パタモン">パタモン</Autocomplete.Option>
        <Autocomplete.Option value="テイルモン">テイルモン</Autocomplete.Option>
      </Autocomplete.Group>

      <Autocomplete.Group label="成熟期">
        <Autocomplete.Option value="グレイモン">グレイモン</Autocomplete.Option>
        <Autocomplete.Option value="ガルルモン">ガルルモン</Autocomplete.Option>
        <Autocomplete.Option value="カブテリモン">
          カブテリモン
        </Autocomplete.Option>
        <Autocomplete.Option value="バードラモン">
          バードラモン
        </Autocomplete.Option>
        <Autocomplete.Option value="イッカクモン">
          イッカクモン
        </Autocomplete.Option>
        <Autocomplete.Option value="トグモン">トグモン</Autocomplete.Option>
        <Autocomplete.Option value="エンジェモン">
          エンジェモン
        </Autocomplete.Option>
      </Autocomplete.Group>

      <Autocomplete.Group label="完全体">
        <Autocomplete.Option value="メタルグレイモン">
          メタルグレイモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ワーガルルモン">
          ワーガルルモン
        </Autocomplete.Option>
        <Autocomplete.Option value="アトラーカブテリモン">
          アトラーカブテリモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ガルダモン">ガルダモン</Autocomplete.Option>
        <Autocomplete.Option value="ズドモン">ズドモン</Autocomplete.Option>
        <Autocomplete.Option value="リリモン">リリモン</Autocomplete.Option>
        <Autocomplete.Option value="ホーリーエンジェモン">
          ホーリーエンジェモン
        </Autocomplete.Option>
        <Autocomplete.Option value="エンジェウーモン">
          エンジェウーモン
        </Autocomplete.Option>
      </Autocomplete.Group>

      <Autocomplete.Group label="究極体">
        <Autocomplete.Option value="ウォーグレイモン">
          ウォーグレイモン
        </Autocomplete.Option>
        <Autocomplete.Option value="メタルガルルモン">
          メタルガルルモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ヘラクルカブテリモン">
          ヘラクルカブテリモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ホウオウモン">
          ホウオウモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ヴァイクモン">
          ヴァイクモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ロゼモン">ロゼモン</Autocomplete.Option>
        <Autocomplete.Option value="ゴッドドラモン">
          ゴッドドラモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ホーリードラモン">
          ホーリードラモン
        </Autocomplete.Option>
      </Autocomplete.Group>
    </Autocomplete.Root>;
}`,...ge.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "オメガモン",
    value: "オメガモン"
  }, {
    label: "ディアボロモン",
    value: "ディアボロモン"
  }, {
    items: [{
      label: "アグモン",
      value: "アグモン"
    }, {
      label: "ガブモン",
      value: "ガブモン"
    }, {
      label: "テントモン",
      value: "テントモン"
    }, {
      label: "ピヨモン",
      value: "ピヨモン"
    }, {
      label: "ゴマモン",
      value: "ゴマモン"
    }, {
      label: "パルモン",
      value: "パルモン"
    }, {
      label: "パタモン",
      value: "パタモン"
    }, {
      label: "テイルモン",
      value: "テイルモン"
    }],
    label: "成長期"
  }, {
    items: [{
      label: "グレイモン",
      value: "グレイモン"
    }, {
      label: "ガルルモン",
      value: "ガルルモン"
    }, {
      label: "カブテリモン",
      value: "カブテリモン"
    }, {
      label: "バードラモン",
      value: "バードラモン"
    }, {
      label: "イッカクモン",
      value: "イッカクモン"
    }, {
      label: "トグモン",
      value: "トグモン"
    }, {
      label: "エンジェモン",
      value: "エンジェモン"
    }],
    label: "成熟期"
  }, {
    items: [{
      label: "メタルグレイモン",
      value: "メタルグレイモン"
    }, {
      label: "ワーガルルモン",
      value: "ワーガルルモン"
    }, {
      label: "アトラーカブテリモン",
      value: "アトラーカブテリモン"
    }, {
      label: "ガルダモン",
      value: "ガルダモン"
    }, {
      label: "ズドモン",
      value: "ズドモン"
    }, {
      label: "リリモン",
      value: "リリモン"
    }, {
      label: "ホーリーエンジェモン",
      value: "ホーリーエンジェモン"
    }, {
      label: "エンジェウーモン",
      value: "エンジェウーモン"
    }],
    label: "完全体"
  }, {
    items: [{
      label: "ウォーグレイモン",
      value: "ウォーグレイモン"
    }, {
      label: "メタルガルルモン",
      value: "メタルガルルモン"
    }, {
      label: "ヘラクルカブテリモン",
      value: "ヘラクルカブテリモン"
    }, {
      label: "ホウオウモン",
      value: "ホウオウモン"
    }, {
      label: "ヴァイクモン",
      value: "ヴァイクモン"
    }, {
      label: "ロゼモン",
      value: "ロゼモン"
    }, {
      label: "ゴッドドラモン",
      value: "ゴッドドラモン"
    }, {
      label: "ホーリードラモン",
      value: "ホーリードラモン"
    }],
    label: "究極体"
  }], []);
  return <Autocomplete.Root items={items} placeholder="Select a digimon" />;
}`,...fe.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: <>
            <Text as="span" flex="1">
              アグモン
            </Text>
            <HeartIcon fontSize="lg" />
          </>,
    query: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} placeholder="Select a digimon" />;
}`,...xe.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Autocomplete.Root key={key} colorScheme={row} variant={column} items={items} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...Ae.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Autocomplete.Root key={key} size={column} variant={row} items={items} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...Se.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root defaultValue="アグモン" items={items} placeholder="Select a digimon" />;
}`,...Ce.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root defaultInputValue="モン" items={items} openOnFocus placeholder="Select a digimon" />;
}`,...je.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} multiple placeholder="Select a digimon" />;
}`,...Oe.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} max={3} multiple placeholder="Select a digimon" />;
}`,...Ie.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} multiple placeholder="Select a digimon" separator=";" />;
}`,...Me.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} offset={[16, 16]} placeholder="Select a digimon" />;
}`,...Re.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root gutter={32} items={items} placeholder="Select a digimon" />;
}`,...ye.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root animationScheme="inline-start" items={items} placeholder="Select a digimon" />;
}`,...Pe.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root animationScheme="inline-start" items={items} placeholder="Select a digimon" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...ke.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Box minH="200dvh" w="full">
      <Autocomplete.Root blockScrollOnMount items={items} placeholder="Select a digimon" />
    </Box>;
}`,...Fe.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root allowCustomValue items={items} placeholder="Select a digimon" onChange={value => console.log("value:", value)} />;
}`,...De.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="Select a digimon" />;
}`,...Ge.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root closeOnChange={ev => !ev.target.value.length} items={items} openOnFocus={false} placeholder="Select a digimon" />;
}`,...Be.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Box minH="200dvh" w="full">
      <Autocomplete.Root closeOnScroll items={items} placeholder="Select a digimon" />
    </Box>;
}`,...Ve.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} openOnFocus={false} placeholder="Select a digimon" />;
}`,...we.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} openOnClick={false} placeholder="Select a digimon" />;
}`,...Ee.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root defaultValue="アグモン" focusOnClear={false} items={items} placeholder="Select a digimon" />;
}`,...Te.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    closeOnSelect: true,
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root closeOnSelect={false} items={items} placeholder="Select a digimon" />;
}`,...qe.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root closeOnBlur={false} items={items} placeholder="Select a digimon" />;
}`,...He.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root closeOnEsc={false} items={items} placeholder="Select a digimon" />;
}`,...We.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root clearable={false} items={items} placeholder="Select a digimon" />;
}`,...ze.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    disabled: true,
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} placeholder="Select a digimon" />;
}`,...Le.parameters?.docs?.source}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Autocomplete.Root key={index} variant={variant} disabled items={items} placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <BugIcon />
            </InputGroup.Addon>
            <Autocomplete.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="Who is your favorite digimon?">
        <Autocomplete.Root items={items} placeholder="Select a digimon" />
      </Field.Root>
    </>;
}`,...Ke.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Autocomplete.Root key={index} variant={variant} items={items} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <BugIcon />
            </InputGroup.Addon>
            <Autocomplete.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="Who is your favorite digimon?" readOnly>
        <Autocomplete.Root items={items} placeholder="Select a digimon" />
      </Field.Root>
    </>;
}`,..._e.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Autocomplete.Root key={index} variant={variant} invalid items={items} placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <BugIcon />
            </InputGroup.Addon>
            <Autocomplete.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="This is required." invalid label="Who is your favorite digimon?">
        <Autocomplete.Root items={items} placeholder="Select a digimon" />
      </Field.Root>
    </>;
}`,...Ne.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <BugIcon />
          </InputGroup.Addon>
          <Autocomplete.Root items={items} placeholder="Select a digimon" />
        </InputGroup.Root>}
    </For>;
}`,...Qe.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <BugIcon />
          </InputGroup.Element>
          <Autocomplete.Root items={items} placeholder="Select a digimon" />
        </InputGroup.Root>}
    </For>;
}`,...Ue.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <>
      <Autocomplete.Root items={items} placeholder="Default border color" />

      <Autocomplete.Root focusBorderColor="green.500" items={items} placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <BugIcon />
        </InputGroup.Element>
        <Autocomplete.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>

      <Autocomplete.Root errorBorderColor="orange.500" invalid items={items} placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <BugIcon />
        </InputGroup.Addon>
        <Autocomplete.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...Xe.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root emptyMessage="You just hit a route that doesn't exist... the sadness.😢" items={items} placeholder="Select a digimon" />;
}`,...Ye.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <>
      <Autocomplete.Root items={items} placeholder="Select a digimon" iconProps={{
      color: "orange"
    }} />

      <Autocomplete.Root icon={<ChevronsDownIcon />} items={items} placeholder="Select a digimon" />
    </>;
}`,...$e.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.ItemWithValue[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} placeholder="Select a digimon" optionProps={{
    icon: <BugIcon />
  }} />;
}`,...Ze.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.ItemWithValue[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} multiple placeholder="Select a character" render={({
    label,
    onClear
  }) => <Tag size="sm" me="{gap}" onClose={onClear}>
          {label}
        </Tag>} />;
}`,...Je.parameters?.docs?.source}}};el.parameters={...el.parameters,docs:{...el.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("アグモン");
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  return <Autocomplete.Root items={items} placeholder="Select a digimon" value={value} onChange={setValue} />;
}`,...el.parameters?.docs?.source}}};ll.parameters={...ll.parameters,docs:{...ll.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.autocomplete?.message} invalid={!!errors.autocomplete} label="Who is your favorite digimon?">
        <Controller name="autocomplete" control={control} render={({
        field
      }) => <Autocomplete.Root items={items} placeholder="Select a digimon" {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...ll.parameters?.docs?.source}}};al.parameters={...al.parameters,docs:{...al.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete: string;
  }
  const defaultValues: Data = {
    autocomplete: "アグモン"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: "アグモン",
    value: "アグモン"
  }, {
    label: "ガブモン",
    value: "ガブモン"
  }, {
    label: "テントモン",
    value: "テントモン"
  }, {
    label: "ピヨモン",
    value: "ピヨモン"
  }, {
    label: "ゴマモン",
    value: "ゴマモン"
  }, {
    label: "パルモン",
    value: "パルモン"
  }, {
    label: "パタモン",
    value: "パタモン"
  }, {
    label: "テイルモン",
    value: "テイルモン"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.autocomplete?.message} invalid={!!errors.autocomplete} label="Who is your favorite digimon?">
        <Controller name="autocomplete" control={control} render={({
        field
      }) => <Autocomplete.Root items={items} placeholder="Select a digimon" {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...al.parameters?.docs?.source}}};const Wn=["Basic","Group","Items","ItemsWithQuery","Variant","Size","DefaultValue","DefaultInputValue","Multiple","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","AllowCustomValue","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledFocusOnClear","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledClearable","DisabledOption","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomEmptyMessage","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Qe as Addon,De as AllowCustomValue,Pe as AnimationScheme,he as Basic,Fe as BlockScrollOnMount,Xe as BorderColor,Be as CloseOnChange,Ve as CloseOnScroll,el as CustomControl,Ye as CustomEmptyMessage,$e as CustomIcon,Ze as CustomOptionIcon,Je as CustomRender,je as DefaultInputValue,Ce as DefaultValue,Ke as Disabled,ze as DisabledClearable,He as DisabledCloseOnBlur,We as DisabledCloseOnEsc,qe as DisabledCloseOnSelect,Te as DisabledFocusOnClear,Ee as DisabledOpenOnClick,we as DisabledOpenOnFocus,Le as DisabledOption,Ue as Element,ge as Group,ye as Gutter,Ne as Invalid,fe as Items,xe as ItemsWithQuery,Ie as Max,Oe as Multiple,Re as Offset,Ge as OpenOnChange,ke as Placement,ll as ReactHookForm,al as ReactHookFormDefaultValue,_e as ReadOnly,Me as Separator,Se as Size,Ae as Variant,Wn as __namedExportsOrder,Hn as default};
