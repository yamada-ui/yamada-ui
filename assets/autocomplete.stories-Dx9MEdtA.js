import{n as Jl,o as Zl,I as ea,c as la,G as aa,r as a,l as X,H as hl,i as b,J as nl,k as Fl,K as na,L as gl,a as Dl,M as Gl,N as oa,h as P,m as dl,b as ta,O as ua,e as ra,j as e,g as sa,X as ca,s as fl,T as ia,C as ma,P as T,V as wl,Q as El}from"./iframe-Cq3rcaMI.js";import{P as Tl}from"./props-table-C-lxxN5V.js";import{u as ql,C as Hl}from"./index.esm-UFFg0WXH.js";import{H as pa}from"./heart-icon-MWbZLsTE.js";import{B as Wl}from"./box-CJbmBmxj.js";import{F as k}from"./for-CHPKWv_w.js";import{C as va}from"./chevrons-down-icon-ut0n7dDt.js";import{T as ba}from"./tag-BBE08PBI.js";import{u as da,a as ha,c as ga,b as fa,C as xa,d as Aa,e as Sa,f as Ca,g as ja}from"./index-_A02Clkb.js";import{a as Oa}from"./autocomplete.style-BRAhNvKG.js";import{u as Bl}from"./index-CGtAgyPS.js";import{u as Ia,F as oe}from"./use-field-props-B0aPqHXg.js";import{u as Ma}from"./input-2nMF8ce0.js";import{M as Ra}from"./minus-icon-B4Xf345D.js";import{u as ya}from"./group-Cc45Vgon.js";import{u as Pa}from"./use-input-border-DYKyVkkb.js";import{P as ka,a as Fa,b as Da}from"./popover-DwPnYmim.js";import{I as F,a as xl,b as te}from"./input-group-eVzfkzon.js";import{C as Ga}from"./chevron-down-icon-DJptooAS.js";import{C as Ba}from"./check-icon-DtRQgm0e.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./flex-hG4eu5He.js";import"./heading-vD3e3jk6.js";import"./index--qi090hu.js";import"./index-C6-Q4i0p.js";import"./menu.style-pJQyDyEB.js";import"./native-select.style-D8xpuwmQ.js";import"./index-Dz_UFi2x.js";import"./use-disclosure-BVix9kaN.js";import"./index-hNMbzMH0.js";import"./use-breakpoint-B2hNbTgT.js";import"./use-breakpoint-value-4bNhmqEp.js";import"./use-color-mode-value-D8ycUMtp.js";import"./index-Dhl5BoKs.js";import"./index-ghEjYUpW.js";import"./event-CteZMeEm.js";import"./slide-fade-B0p8oRwP.js";import"./transition-BbGUlZ9Y.js";import"./fade-scale-BPDy1Ukw.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],wa=Jl("bug",Va),D=Zl(ea)({as:wa}),Ea=({count:l,focused:n,index:u,label:c,max:m,separator:p})=>{const v=l-1===u;return e.jsxs("span",{style:{marginInlineEnd:"var(--gap)"},children:[c,(!nl(m)||l<m)&&n||!v?p:null]})},de=l=>X(l?.label)?l.label:l?.query??"",Ta=(l,n,u)=>l.length?n.map(c=>{if("items"in c){const m=c.items.filter(p=>{if("query"in p)return u(l,p.query);if(X(p.label))return u(l,p.label)});if(m.length)return{...c,items:m}}else if("query"in c){if(u(l,c.query))return c}else if(X(c.label)&&u(l,c.label))return c}).filter(Boolean):n,qa=(l,n)=>n?.toLowerCase().includes(l.toLowerCase())??!1,[Ha,Wa]=la({name:"AutocompleteContext"}),za=(l={})=>{const{t:n}=aa("autocomplete"),{props:{id:u,ref:c,name:m,allowCustomValue:p=!1,closeOnChange:v=!1,multiple:f=!1,closeOnSelect:q=!f,defaultInputValue:H,defaultValue:W=f?[]:"",disabled:S,emptyMessage:z=n("No results found"),filter:L=Ta,focusOnClear:K=!0,inputValue:tl,items:G=[],matcher:Y=qa,max:h,openOnChange:$=!0,openOnClick:J=!0,openOnFocus:B=!0,placeholder:ue,readOnly:Z,render:re=Ea,required:se,separator:ce=",",value:M,onChange:ie,onInputChange:V,...ul},ariaProps:rl,dataProps:O,eventProps:sl}=Ia(l),ee=a.useRef(null),me=a.useRef(null),w=a.useRef(null),_=a.useRef(!1),A=a.useMemo(()=>{const o={};return G.forEach(s=>{"items"in s?s.items.forEach(d=>{d.value??=X(d.label)?d.label:void 0,hl(d.value)||(o[d.value]=d)}):(s.value??=X(s.label)?s.label:void 0,hl(s.value)||(o[s.value]=s))}),o},[G]),[E,le]=a.useState(!1),[i,x]=Bl({defaultValue:W,value:M,onChange:ie}),[C,g]=Bl({defaultValue:H??de(b(i)?void 0:A[i]),value:tl,onChange:V}),N=a.useCallback(o=>{if(x(s=>b(s)?s.includes(o)?s.filter(d=>d!==o):!nl(h)||s.length<h?[...s,o]:s:o),b(i))g("");else{const s=A[o];g(de(s))}},[h,g,x,i,A]),{activeDescendant:Q,descendants:R,interactive:y,open:cl,getContentProps:Sl,getSeparatorProps:Ll,getTriggerProps:Cl,popoverProps:Kl,onActiveDescendant:_l,onClose:il,onOpen:ml,onOpenWithActiveDescendant:pe,onSelect:ae}=da({closeOnSelect:q,disabled:S,initialFocusValue:b(i)?i[0]:i,openOnClick:!1,openOnEnter:!1,openOnSpace:!1,readOnly:Z,selectFocusRef:w,selectOnSpace:!1,onChange:N,...rl,...O,...sl,...ul}),ne=a.useMemo(()=>G.length?L(C,G,Y):[],[L,C,G,Y]),pl=a.useMemo(()=>ne.length?ne:[{"data-empty":"",label:z}],[ne,z]),jl=a.useMemo(()=>!pl.filter(({hidden:o})=>!o).length,[pl]),Nl=a.useMemo(()=>{if(!b(i))return null;const o=i.length;return i.map((s,d)=>{const j=A[s]??{label:s,value:s},be=re({count:o,focused:E,index:d,max:h,separator:ce,onClear:kl=>{kl?.preventDefault(),kl?.stopPropagation(),j.value&&N(j.value)},...j});return a.isValidElement(be)?a.cloneElement(be,{...be.props,key:d}):be})},[E,h,N,re,ce,i,A]),Ol=b(i)&&!!i.length,vl=a.useCallback(o=>{if(b(i)&&i.length===h)return;Fl(v,o)?il():Fl($,o)&&ml(),Q.current=null;const s=o.target.value;g(s),!(s.length||b(i))&&x("")},[Q,v,h,il,ml,$,g,x,i]),Il=a.useCallback(o=>{if(S||na(o))return;const s=gl(o.target).value;Dl(o,{Backspace:d=>{b(i)&&(s.length||(d.preventDefault(),x(j=>j.slice(0,-1))))},Enter:d=>{if(!cl||!s.length||Q.current)return;const j=ne[0];if(j)d.preventDefault(),"items"in j?ae(j.items[0]?.value):ae(j.value);else{if(!p||!b(i))return;d.preventDefault(),ae(s)}}},{preventDefault:!1})},[Q,p,S,ne,ae,cl,x,i]),Ml=a.useCallback(()=>{y&&(_.current=!0,w.current?.focus(),J&&pe(R.enabledFirstValue))},[R,y,pe,J]),Rl=a.useCallback(o=>{B&&(o.preventDefault(),o.stopPropagation())},[B]),yl=a.useCallback(o=>{o.preventDefault(),o.stopPropagation(),le(!0),B&&!_.current&&pe(R.enabledFirstValue),_.current=!1},[B,pe,R.enabledFirstValue]),Pl=a.useCallback(o=>{if(le(!1),Gl(ee.current,o.relatedTarget)||Gl(me.current,o.relatedTarget))o.preventDefault();else if(b(i))g("");else if(p)C&&x(C);else{const s=A[i];g(de(s))}},[p,C,g,x,i,A]),ve=a.useCallback(()=>{y&&(x(o=>b(o)?[]:""),g(""),K&&w.current?.focus())},[K,y,g,x]);oa(()=>{b(M)||g(de(M?A[M]:void 0))},[M]);const Ql=a.useCallback(o=>({...O,...o}),[O]),Ul=a.useCallback(({ref:o,...s}={})=>Cl({ref:dl(o,ee),tabIndex:-1,...s,onClick:P(s.onClick,Ml)}),[Cl,Ml]),Xl=a.useCallback((o={})=>({id:u,ref:dl(o.ref,c,w),name:m,style:{...!E&&b(i)&&i.length?ua.style:{},...o.style},"data-max":ta(b(i)&&nl(h)&&i.length>=h),autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",disabled:S,placeholder:Ol?void 0:ue,readOnly:Z,required:se,spellCheck:!1,value:C,...O,...o,onBlur:P(o.onBlur,Pl),onChange:P(o.onChange,vl),onFocus:P(o.onFocus,yl),onKeyDown:P(o.onKeyDown,Il),onMouseDown:P(o.onMouseDown,Rl)}),[O,S,E,Ol,u,C,h,m,Pl,yl,vl,Il,Rl,ue,Z,c,se,i]),Yl=a.useCallback(({ref:o,...s}={})=>Sl({ref:dl(o,me),hidden:jl,...s}),[jl,Sl]),bl=a.useCallback(o=>({...O,...o}),[O]),$l=a.useCallback((o={})=>bl({"aria-disabled":ra(!y),"aria-label":n("Clear value"),role:"button",tabIndex:y?0:-1,...o,onClick:P(o.onClick,ve),onKeyDown:P(o.onKeyDown,s=>Dl(s,{Enter:ve,Space:ve}))}),[bl,y,ve,n]);return{children:Nl,descendants:R,inputValue:C,interactive:y,items:pl,max:h,open:cl,setInputValue:g,setValue:x,value:i,valueMap:A,getClearIconProps:$l,getContentProps:Yl,getFieldProps:Ul,getIconProps:bl,getInputProps:Xl,getRootProps:Ql,getSeparatorProps:Ll,popoverProps:Kl,onActiveDescendant:_l,onChange:N,onClose:il,onInputChange:vl,onOpen:ml,onSelect:ae}},La=({children:l,closeOnSelect:n,disabled:u,hidden:c,value:m,...p}={})=>{const{max:v,value:f}=Wa();m??=X(l)?l:void 0;const q=b(f)?!hl(m)&&f.includes(m):f===m,H=nl(v)&&b(f)&&f.length>=v,{getIndicatorProps:W,getItemProps:S}=ha({children:l,closeOnSelect:n,disabled:u||c||H&&!q,hidden:c,selected:q,value:m,...p}),z=a.useCallback((L={})=>S(L),[S]);return{getIndicatorProps:W,getOptionProps:z}},{ComponentContext:Ka,useComponentContext:ol,withContext:I,withProvider:_a}=sa("autocomplete",Oa),t=_a(l=>{const[n,{className:u,css:c,colorScheme:m,animationScheme:p="block-start",children:v,clearable:f=!0,clearIcon:q=e.jsx(ca,{}),duration:H,emptyIcon:W,errorBorderColor:S,focusBorderColor:z,icon:L,items:K,contentProps:tl,elementProps:G,emptyProps:Y,groupProps:h,iconProps:$,inputProps:J,optionProps:B,rootProps:ue,...Z}]=ya(l),re=a.useMemo(()=>K||ga(v,{Group:U,Label:Al,Option:r}),[K,v]),{children:se,descendants:ce,items:M,max:ie,value:V,getClearIconProps:ul,getContentProps:rl,getFieldProps:O,getIconProps:sl,getInputProps:ee,getRootProps:me,getSeparatorProps:w,popoverProps:_,onActiveDescendant:A,onClose:E,onSelect:le}=za({items:re,...Z}),i=a.useMemo(()=>({animationScheme:p,duration:H,..._}),[p,H,_]),x=a.useMemo(()=>fa(M,{Empty:Xa,Group:U,Option:r}),[M]),C=Pa({errorBorderColor:S,focusBorderColor:z}),g=a.useMemo(()=>({onActiveDescendant:A,onClose:E,onSelect:le}),[A,E,le]),N=a.useMemo(()=>({max:ie,value:V}),[V,ie]),Q=a.useMemo(()=>({emptyIcon:W,emptyProps:Y,getInputProps:ee,getSeparatorProps:w,groupProps:h,inputProps:J,optionProps:B}),[W,Y,ee,w,h,J,B]),R=b(V)?!!V.length:!!V;return e.jsx(xa,{value:ce,children:e.jsx(Aa,{value:g,children:e.jsx(Ha,{value:N,children:e.jsx(Ka,{value:Q,children:e.jsxs(ka,{...i,children:[e.jsxs(F,{className:u,css:c,colorScheme:m,...me({...n,...ue}),children:[e.jsx(Fa,{children:e.jsx(Na,{...O(C),children:se})}),e.jsx(xl,{clickable:f&&R,...G,children:f&&R?e.jsx(Vl,{icon:q,...ul($)}):e.jsx(Vl,{icon:L,...sl($)})})]}),e.jsx(Ua,{...gl(rl(gl(tl))),children:x})]})})})})})},"root")(l=>({...Ma(),...l})),Na=I("div","field")({"data-group-propagate":""},({children:l,...n})=>{const{getInputProps:u,inputProps:c}=ol();return{...n,children:e.jsxs(e.Fragment,{children:[l,e.jsx(Qa,{...u(c)})]})}}),Qa=I("input","input")(),Vl=I("div","icon")(void 0,({children:l,icon:n,...u})=>({children:n||l||e.jsx(Ga,{}),...u})),Ua=I(Da,"content")(),Al=I("span","label")(void 0,l=>{const{getLabelProps:n}=ja();return n(l)}),U=I(({children:l,label:n,labelProps:u,...c})=>{const{groupProps:m}=ol(),{getGroupProps:p,getLabelProps:v}=Sa({...m,...c}),f=a.useMemo(()=>({getLabelProps:v}),[v]);return e.jsx(Ca,{value:f,children:e.jsxs(fl.div,{...p(),children:[n?e.jsx(Al,{...u,children:n}):null,l]})})},"group")(),r=I(({children:l,icon:n,...u})=>{const{optionProps:{icon:c,...m}={}}=ol(),{getIndicatorProps:p,getOptionProps:v}=La({...m,...u});return e.jsxs(fl.div,{...v(),children:[e.jsx(zl,{...p(),children:n??c??e.jsx(Ba,{})}),l]})},"option")(),Xa=I(({children:l,icon:n,...u})=>{const{emptyIcon:c,emptyProps:m}=ol();return e.jsxs(fl.div,{...m,...u,children:[e.jsx(zl,{children:n??c??e.jsx(Ra,{})}),l]})},"empty")(),zl=I("div","indicator")(),qn={component:t,title:"Components / Autocomplete"},he=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsx(r,{value:"アグモン",children:"アグモン"}),e.jsx(r,{value:"ガブモン",children:"ガブモン"}),e.jsx(r,{value:"テントモン",children:"テントモン"}),e.jsx(r,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(r,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(r,{value:"パルモン",children:"パルモン"}),e.jsx(r,{value:"パタモン",children:"パタモン"}),e.jsx(r,{value:"テイルモン",children:"テイルモン"})]}),ge=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsxs(U,{children:[e.jsx(Al,{children:"成長期"}),e.jsx(r,{value:"アグモン",children:"アグモン"}),e.jsx(r,{value:"ガブモン",children:"ガブモン"}),e.jsx(r,{value:"テントモン",children:"テントモン"}),e.jsx(r,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(r,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(r,{value:"パルモン",children:"パルモン"}),e.jsx(r,{value:"パタモン",children:"パタモン"}),e.jsx(r,{value:"テイルモン",children:"テイルモン"})]}),e.jsxs(U,{label:"成熟期",children:[e.jsx(r,{value:"グレイモン",children:"グレイモン"}),e.jsx(r,{value:"ガルルモン",children:"ガルルモン"}),e.jsx(r,{value:"カブテリモン",children:"カブテリモン"}),e.jsx(r,{value:"バードラモン",children:"バードラモン"}),e.jsx(r,{value:"イッカクモン",children:"イッカクモン"}),e.jsx(r,{value:"トグモン",children:"トグモン"}),e.jsx(r,{value:"エンジェモン",children:"エンジェモン"})]}),e.jsxs(U,{label:"完全体",children:[e.jsx(r,{value:"メタルグレイモン",children:"メタルグレイモン"}),e.jsx(r,{value:"ワーガルルモン",children:"ワーガルルモン"}),e.jsx(r,{value:"アトラーカブテリモン",children:"アトラーカブテリモン"}),e.jsx(r,{value:"ガルダモン",children:"ガルダモン"}),e.jsx(r,{value:"ズドモン",children:"ズドモン"}),e.jsx(r,{value:"リリモン",children:"リリモン"}),e.jsx(r,{value:"ホーリーエンジェモン",children:"ホーリーエンジェモン"}),e.jsx(r,{value:"エンジェウーモン",children:"エンジェウーモン"})]}),e.jsxs(U,{label:"究極体",children:[e.jsx(r,{value:"ウォーグレイモン",children:"ウォーグレイモン"}),e.jsx(r,{value:"メタルガルルモン",children:"メタルガルルモン"}),e.jsx(r,{value:"ヘラクルカブテリモン",children:"ヘラクルカブテリモン"}),e.jsx(r,{value:"ホウオウモン",children:"ホウオウモン"}),e.jsx(r,{value:"ヴァイクモン",children:"ヴァイクモン"}),e.jsx(r,{value:"ロゼモン",children:"ロゼモン"}),e.jsx(r,{value:"ゴッドドラモン",children:"ゴッドドラモン"}),e.jsx(r,{value:"ホーリードラモン",children:"ホーリードラモン"})]})]}),fe=()=>{const l=a.useMemo(()=>[{label:"オメガモン",value:"オメガモン"},{label:"ディアボロモン",value:"ディアボロモン"},{items:[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],label:"成長期"},{items:[{label:"グレイモン",value:"グレイモン"},{label:"ガルルモン",value:"ガルルモン"},{label:"カブテリモン",value:"カブテリモン"},{label:"バードラモン",value:"バードラモン"},{label:"イッカクモン",value:"イッカクモン"},{label:"トグモン",value:"トグモン"},{label:"エンジェモン",value:"エンジェモン"}],label:"成熟期"},{items:[{label:"メタルグレイモン",value:"メタルグレイモン"},{label:"ワーガルルモン",value:"ワーガルルモン"},{label:"アトラーカブテリモン",value:"アトラーカブテリモン"},{label:"ガルダモン",value:"ガルダモン"},{label:"ズドモン",value:"ズドモン"},{label:"リリモン",value:"リリモン"},{label:"ホーリーエンジェモン",value:"ホーリーエンジェモン"},{label:"エンジェウーモン",value:"エンジェウーモン"}],label:"完全体"},{items:[{label:"ウォーグレイモン",value:"ウォーグレイモン"},{label:"メタルガルルモン",value:"メタルガルルモン"},{label:"ヘラクルカブテリモン",value:"ヘラクルカブテリモン"},{label:"ホウオウモン",value:"ホウオウモン"},{label:"ヴァイクモン",value:"ヴァイクモン"},{label:"ロゼモン",value:"ロゼモン"},{label:"ゴッドドラモン",value:"ゴッドドラモン"},{label:"ホーリードラモン",value:"ホーリードラモン"}],label:"究極体"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},xe=()=>{const l=a.useMemo(()=>[{label:e.jsxs(e.Fragment,{children:[e.jsx(ia,{as:"span",flex:"1",children:"アグモン"}),e.jsx(pa,{fontSize:"lg"})]}),query:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ae=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Tl,{variant:"stack",columns:["outline","filled","flushed"],rows:ma,children:(n,u,c)=>e.jsx(t,{colorScheme:u,variant:n,items:l,placeholder:T(n)},c)})},Se=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Tl,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,u,c)=>e.jsx(t,{size:n,variant:u,items:l,placeholder:`Size (${n})`},c)})},Ce=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",items:l,placeholder:"Select a digimon"})},je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultInputValue:"モン",items:l,openOnFocus:!0,placeholder:"Select a digimon"})},Oe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon"})},Ie=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,max:3,multiple:!0,placeholder:"Select a digimon"})},Me=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon",separator:";"})},Re=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,offset:[16,16],placeholder:"Select a digimon"})},ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{gutter:32,items:l,placeholder:"Select a digimon"})},Pe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon"})},ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon",placement:"center-end",rootProps:{w:"xs"}})},Fe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Wl,{minH:"200dvh",w:"full",children:e.jsx(t,{blockScrollOnMount:!0,items:l,placeholder:"Select a digimon"})})},De=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{allowCustomValue:!0,items:l,placeholder:"Select a digimon",onChange:n=>console.log("value:",n)})},Ge=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnChange:n=>n.target.value.length>1,openOnFocus:!1,placeholder:"Select a digimon"})},Be=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnChange:n=>!n.target.value.length,items:l,openOnFocus:!1,placeholder:"Select a digimon"})},Ve=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Wl,{minH:"200dvh",w:"full",children:e.jsx(t,{closeOnScroll:!0,items:l,placeholder:"Select a digimon"})})},we=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnFocus:!1,placeholder:"Select a digimon"})},Ee=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnClick:!1,placeholder:"Select a digimon"})},Te=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",focusOnClear:!1,items:l,placeholder:"Select a digimon"})},qe=()=>{const l=a.useMemo(()=>[{closeOnSelect:!0,label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnSelect:!1,items:l,placeholder:"Select a digimon"})},He=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnBlur:!1,items:l,placeholder:"Select a digimon"})},We=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnEsc:!1,items:l,placeholder:"Select a digimon"})},ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{clearable:!1,items:l,placeholder:"Select a digimon"})},Le=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{disabled:!0,label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,disabled:!0,items:l,placeholder:T(n)},u)}),e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,disabled:!0,children:[e.jsx(te,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:T(n)})]},u)}),e.jsx(oe,{disabled:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},_e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,items:l,placeholder:T(n),readOnly:!0},u)}),e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,readOnly:!0,children:[e.jsx(te,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:T(n)})]},u)}),e.jsx(oe,{label:"Who is your favorite digimon?",readOnly:!0,children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Ne=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,invalid:!0,items:l,placeholder:T(n)},u)}),e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,invalid:!0,children:[e.jsx(te,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:T(n)})]},u)}),e.jsx(oe,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Qe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,children:[e.jsx(te,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Ue=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,children:[e.jsx(xl,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Xe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(F,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(xl,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(F,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(te,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]})]})},Ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{emptyMessage:"You just hit a route that doesn't exist... the sadness.😢",items:l,placeholder:"Select a digimon"})},$e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Select a digimon",iconProps:{color:"orange"}}),e.jsx(t,{icon:e.jsx(va,{}),items:l,placeholder:"Select a digimon"})]})},Je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon",optionProps:{icon:e.jsx(D,{})}})},Ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",render:({label:n,onClear:u})=>e.jsx(ba,{size:"sm",me:"{gap}",onClose:u,children:n})})},el=()=>{const[l,n]=a.useState("アグモン"),u=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:u,placeholder:"Select a digimon",value:l,onChange:n})},ll=()=>{const{control:l,formState:{errors:n},handleSubmit:u}=ql(),c=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),m=p=>console.log("submit:",p);return e.jsxs(wl,{as:"form",onSubmit:u(m),children:[e.jsx(oe,{errorMessage:n.autocomplete?.message,invalid:!!n.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(Hl,{name:"autocomplete",control:l,render:({field:p})=>e.jsx(t,{items:c,placeholder:"Select a digimon",...p}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(El,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},al=()=>{const l={autocomplete:"アグモン"},{control:n,formState:{errors:u},handleSubmit:c}=ql({defaultValues:l}),m=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),p=v=>console.log("submit:",v);return e.jsxs(wl,{as:"form",onSubmit:c(p),children:[e.jsx(oe,{errorMessage:u.autocomplete?.message,invalid:!!u.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(Hl,{name:"autocomplete",control:n,render:({field:v})=>e.jsx(t,{items:m,placeholder:"Select a digimon",...v}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(El,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
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
}`,...$e.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`() => {
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
}`,...Je.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ze.parameters?.docs?.source}}};el.parameters={...el.parameters,docs:{...el.parameters?.docs,source:{originalSource:`() => {
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
}`,...al.parameters?.docs?.source}}};const Hn=["Basic","Group","Items","ItemsWithQuery","Variant","Size","DefaultValue","DefaultInputValue","Multiple","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","AllowCustomValue","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledFocusOnClear","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledClearable","DisabledOption","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomEmptyMessage","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Qe as Addon,De as AllowCustomValue,Pe as AnimationScheme,he as Basic,Fe as BlockScrollOnMount,Xe as BorderColor,Be as CloseOnChange,Ve as CloseOnScroll,el as CustomControl,Ye as CustomEmptyMessage,$e as CustomIcon,Je as CustomOptionIcon,Ze as CustomRender,je as DefaultInputValue,Ce as DefaultValue,Ke as Disabled,ze as DisabledClearable,He as DisabledCloseOnBlur,We as DisabledCloseOnEsc,qe as DisabledCloseOnSelect,Te as DisabledFocusOnClear,Ee as DisabledOpenOnClick,we as DisabledOpenOnFocus,Le as DisabledOption,Ue as Element,ge as Group,ye as Gutter,Ne as Invalid,fe as Items,xe as ItemsWithQuery,Ie as Max,Oe as Multiple,Re as Offset,Ge as OpenOnChange,ke as Placement,ll as ReactHookForm,al as ReactHookFormDefaultValue,_e as ReadOnly,Me as Separator,Se as Size,Ae as Variant,Hn as __namedExportsOrder,qn as default};
