import{n as ho,o as go,I as fo,c as xo,G as Ao,r as a,l as Y,H as fl,i as d,J as ol,k as Dl,K as So,L as xl,a as Gl,M as Bl,N as Co,h as P,m as gl,b as jo,O as Oo,e as Io,j as e,g as Mo,X as Ro,s as Al,T as yo,C as Po,P as T,V as Zn,Q as eo}from"./iframe-FV6Pf4zG.js";import{P as lo}from"./props-table-DZUGPlYC.js";import{u as ao,C as no}from"./index.esm-S8mNye8L.js";import{H as ko}from"./heart-icon-BG3toBiG.js";import{B as oo}from"./box-lmNTjs2t.js";import{F as k}from"./for-v94cQqt1.js";import{C as Fo}from"./chevrons-down-icon-B3Ws6Tp-.js";import{T as Do}from"./tag-FlNu3HXr.js";import{u as Go,a as Bo,c as Vo,b as wo,C as Eo,d as To,e as qo,f as Ho,g as Wo}from"./index-CnScSsiV.js";import{a as zo}from"./autocomplete.style-mlFYvbHf.js";import{u as Vl}from"./index-tPvqYGR1.js";import{u as Lo,F as te}from"./use-field-props-D1lUJOGS.js";import{u as Ko}from"./input-Bqoh0qdu.js";import{M as _o}from"./minus-icon-DcmT1wup.js";import{u as No}from"./group-BusseHdC.js";import{u as Qo}from"./use-input-border-CGGYmoMv.js";import{P as Uo,a as Xo,b as Yo}from"./popover-CEd0f55T.js";import{I as F,a as Sl,b as ue}from"./input-group-BI_21f9S.js";import{C as $o}from"./chevron-down-icon-CJ4SW2Xl.js";import{C as Jo}from"./check-icon-jMXxHMjr.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CSiCDg7_.js";import"./grid-item-bFCU3E8M.js";import"./flex-DLFcrCK5.js";import"./heading-CT3LVYzH.js";import"./index-CrU9yiMk.js";import"./index-CYv8EMHQ.js";import"./menu.style-BNhRsYKl.js";import"./native-select.style-CVf-JwoA.js";import"./index-DFsGiOoX.js";import"./use-disclosure-CCLUxZAh.js";import"./index-gzKnGVq3.js";import"./use-breakpoint-DsgKrnZJ.js";import"./use-breakpoint-value-EeorSnRx.js";import"./use-color-mode-value-CR8x27_R.js";import"./index-xWIyqUQQ.js";import"./index-0O9ehHUq.js";import"./event-C18RZX1K.js";import"./slide-fade-Bds_5Qg7.js";import"./transition-CHWnHPwq.js";import"./fade-scale-DkOFhGOg.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],et=ho("bug",Zo),D=go(fo)({as:et}),lt=({count:l,focused:n,index:u,label:c,max:m,separator:p})=>{const v=l-1===u;return e.jsxs("span",{style:{marginInlineEnd:"var(--gap)"},children:[c,(!ol(m)||l<m)&&n||!v?p:null]})},he=l=>Y(l==null?void 0:l.label)?l.label:(l==null?void 0:l.query)??"",at=(l,n,u)=>l.length?n.map(c=>{if("items"in c){const m=c.items.filter(p=>{if("query"in p)return u(l,p.query);if(Y(p.label))return u(l,p.label)});if(m.length)return{...c,items:m}}else if("query"in c){if(u(l,c.query))return c}else if(Y(c.label)&&u(l,c.label))return c}).filter(Boolean):n,nt=(l,n)=>(n==null?void 0:n.toLowerCase().includes(l.toLowerCase()))??!1,[ot,tt]=xo({name:"AutocompleteContext"}),ut=(l={})=>{const{t:n}=Ao("autocomplete"),{props:{id:u,ref:c,name:m,allowCustomValue:p=!1,closeOnChange:v=!1,multiple:h=!1,closeOnSelect:q=!h,defaultInputValue:H,defaultValue:W=h?[]:"",disabled:S,emptyMessage:z=n("No results found"),filter:L=at,focusOnClear:K=!0,inputValue:ul,items:G=[],matcher:$=nt,max:g,openOnChange:J=!0,openOnClick:Z=!0,openOnFocus:B=!0,placeholder:re,readOnly:ee,render:se=lt,required:ce,separator:ie=",",value:M,onChange:me,onInputChange:V,...rl},ariaProps:sl,dataProps:O,eventProps:cl}=Lo(l),le=a.useRef(null),pe=a.useRef(null),w=a.useRef(null),_=a.useRef(!1),A=a.useMemo(()=>{const o={};return G.forEach(r=>{"items"in r?r.items.forEach(b=>{b.value??(b.value=Y(b.label)?b.label:void 0),fl(b.value)||(o[b.value]=b)}):(r.value??(r.value=Y(r.label)?r.label:void 0),fl(r.value)||(o[r.value]=r))}),o},[G]),[E,ae]=a.useState(!1),[i,x]=Vl({defaultValue:W,value:M,onChange:me}),[C,f]=Vl({defaultValue:H??he(d(i)?void 0:A[i]),value:ul,onChange:V}),N=a.useCallback(o=>{if(x(r=>d(r)?r.includes(o)?r.filter(b=>b!==o):!ol(g)||r.length<g?[...r,o]:r:o),d(i))f("");else{const r=A[o];f(he(r))}},[g,f,x,i,A]),{activeDescendant:Q,descendants:R,interactive:y,open:il,getContentProps:jl,getSeparatorProps:uo,getTriggerProps:Ol,popoverProps:ro,onActiveDescendant:so,onClose:ml,onOpen:pl,onOpenWithActiveDescendant:ve,onSelect:ne}=Go({closeOnSelect:q,disabled:S,initialFocusValue:d(i)?i[0]:i,openOnClick:!1,openOnEnter:!1,openOnSpace:!1,readOnly:ee,selectFocusRef:w,selectOnSpace:!1,onChange:N,...sl,...O,...cl,...rl}),oe=a.useMemo(()=>G.length?L(C,G,$):[],[L,C,G,$]),vl=a.useMemo(()=>oe.length?oe:[{"data-empty":"",label:z}],[oe,z]),Il=a.useMemo(()=>!vl.filter(({hidden:o})=>!o).length,[vl]),co=a.useMemo(()=>{if(!d(i))return null;const o=i.length;return i.map((r,b)=>{const j=A[r]??{label:r,value:r},de=se({count:o,focused:E,index:b,max:g,separator:ie,onClear:U=>{U==null||U.preventDefault(),U==null||U.stopPropagation(),j.value&&N(j.value)},...j});return a.isValidElement(de)?a.cloneElement(de,{...de.props,key:b}):de})},[E,g,N,se,ie,i,A]),Ml=d(i)&&!!i.length,bl=a.useCallback(o=>{if(d(i)&&i.length===g)return;Dl(v,o)?ml():Dl(J,o)&&pl(),Q.current=null;const r=o.target.value;f(r),!(r.length||d(i))&&x("")},[Q,v,g,ml,pl,J,f,x,i]),Rl=a.useCallback(o=>{if(S||So(o))return;const r=xl(o.target).value;Gl(o,{Backspace:b=>{d(i)&&(r.length||(b.preventDefault(),x(j=>j.slice(0,-1))))},Enter:b=>{var hl;if(!il||!r.length||Q.current)return;const j=oe[0];if(j)b.preventDefault(),"items"in j?ne((hl=j.items[0])==null?void 0:hl.value):ne(j.value);else{if(!p||!d(i))return;b.preventDefault(),ne(r)}}},{preventDefault:!1})},[Q,p,S,oe,ne,il,x,i]),yl=a.useCallback(()=>{var o;y&&(_.current=!0,(o=w.current)==null||o.focus(),Z&&ve(R.enabledFirstValue))},[R,y,ve,Z]),Pl=a.useCallback(o=>{B&&(o.preventDefault(),o.stopPropagation())},[B]),kl=a.useCallback(o=>{o.preventDefault(),o.stopPropagation(),ae(!0),B&&!_.current&&ve(R.enabledFirstValue),_.current=!1},[B,ve,R.enabledFirstValue]),Fl=a.useCallback(o=>{if(ae(!1),Bl(le.current,o.relatedTarget)||Bl(pe.current,o.relatedTarget))o.preventDefault();else if(d(i))f("");else if(p)C&&x(C);else{const r=A[i];f(he(r))}},[p,C,f,x,i,A]),be=a.useCallback(()=>{var o;y&&(x(r=>d(r)?[]:""),f(""),K&&((o=w.current)==null||o.focus()))},[K,y,f,x]);Co(()=>{d(M)||f(he(M?A[M]:void 0))},[M]);const io=a.useCallback(o=>({...O,...o}),[O]),mo=a.useCallback(({ref:o,...r}={})=>Ol({ref:gl(o,le),tabIndex:-1,...r,onClick:P(r.onClick,yl)}),[Ol,yl]),po=a.useCallback((o={})=>({id:u,ref:gl(o.ref,c,w),name:m,style:{...!E&&d(i)&&i.length?Oo.style:{},...o.style},"data-max":jo(d(i)&&ol(g)&&i.length>=g),autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",disabled:S,placeholder:Ml?void 0:re,readOnly:ee,required:ce,spellCheck:!1,value:C,...O,...o,onBlur:P(o.onBlur,Fl),onChange:P(o.onChange,bl),onFocus:P(o.onFocus,kl),onKeyDown:P(o.onKeyDown,Rl),onMouseDown:P(o.onMouseDown,Pl)}),[O,S,E,Ml,u,C,g,m,Fl,kl,bl,Rl,Pl,re,ee,c,ce,i]),vo=a.useCallback(({ref:o,...r}={})=>jl({ref:gl(o,pe),hidden:Il,...r}),[Il,jl]),dl=a.useCallback(o=>({...O,...o}),[O]),bo=a.useCallback((o={})=>dl({"aria-disabled":Io(!y),"aria-label":n("Clear value"),role:"button",tabIndex:y?0:-1,...o,onClick:P(o.onClick,be),onKeyDown:P(o.onKeyDown,r=>Gl(r,{Enter:be,Space:be}))}),[dl,y,be,n]);return{children:co,descendants:R,inputValue:C,interactive:y,items:vl,max:g,open:il,setInputValue:f,setValue:x,value:i,valueMap:A,getClearIconProps:bo,getContentProps:vo,getFieldProps:mo,getIconProps:dl,getInputProps:po,getRootProps:io,getSeparatorProps:uo,popoverProps:ro,onActiveDescendant:so,onChange:N,onClose:ml,onInputChange:bl,onOpen:pl,onSelect:ne}},rt=({children:l,closeOnSelect:n,disabled:u,hidden:c,value:m,...p}={})=>{const{max:v,value:h}=tt();m??(m=Y(l)?l:void 0);const q=d(h)?!fl(m)&&h.includes(m):h===m,H=ol(v)&&d(h)&&h.length>=v,{getIndicatorProps:W,getItemProps:S}=Bo({children:l,closeOnSelect:n,disabled:u||c||H&&!q,hidden:c,selected:q,value:m,...p}),z=a.useCallback((L={})=>S(L),[S]);return{getIndicatorProps:W,getOptionProps:z}},{ComponentContext:st,useComponentContext:tl,withContext:I,withProvider:ct}=Mo("autocomplete",zo),t=ct(l=>{const[n,{className:u,css:c,colorScheme:m,animationScheme:p="block-start",children:v,clearable:h=!0,clearIcon:q=e.jsx(Ro,{}),duration:H,emptyIcon:W,errorBorderColor:S,focusBorderColor:z,icon:L,items:K,contentProps:ul,elementProps:G,emptyProps:$,groupProps:g,iconProps:J,inputProps:Z,optionProps:B,rootProps:re,...ee}]=No(l),se=a.useMemo(()=>K||Vo(v,{Group:X,Label:Cl,Option:s}),[K,v]),{children:ce,descendants:ie,items:M,max:me,value:V,getClearIconProps:rl,getContentProps:sl,getFieldProps:O,getIconProps:cl,getInputProps:le,getRootProps:pe,getSeparatorProps:w,popoverProps:_,onActiveDescendant:A,onClose:E,onSelect:ae}=ut({items:se,...ee}),i=a.useMemo(()=>({animationScheme:p,duration:H,..._}),[p,H,_]),x=a.useMemo(()=>wo(M,{Empty:vt,Group:X,Option:s}),[M]),C=Qo({errorBorderColor:S,focusBorderColor:z}),f=a.useMemo(()=>({onActiveDescendant:A,onClose:E,onSelect:ae}),[A,E,ae]),N=a.useMemo(()=>({max:me,value:V}),[V,me]),Q=a.useMemo(()=>({emptyIcon:W,emptyProps:$,getInputProps:le,getSeparatorProps:w,groupProps:g,inputProps:Z,optionProps:B}),[W,$,le,w,g,Z,B]),R=d(V)?!!V.length:!!V;return e.jsx(Eo,{value:ie,children:e.jsx(To,{value:f,children:e.jsx(ot,{value:N,children:e.jsx(st,{value:Q,children:e.jsxs(Uo,{...i,children:[e.jsxs(F,{className:u,css:c,colorScheme:m,...pe({...n,...re}),children:[e.jsx(Xo,{children:e.jsx(it,{...O(C),children:ce})}),e.jsx(Sl,{clickable:h&&R,...G,children:h&&R?e.jsx(wl,{icon:q,...rl(J)}):e.jsx(wl,{icon:L,...cl(J)})})]}),e.jsx(pt,{...xl(sl(xl(ul))),children:x})]})})})})})},"root")(l=>({...Ko(),...l})),it=I("div","field")({"data-group-propagate":""},({children:l,...n})=>{const{getInputProps:u,inputProps:c}=tl();return{...n,children:e.jsxs(e.Fragment,{children:[l,e.jsx(mt,{...u(c)})]})}}),mt=I("input","input")(),wl=I("div","icon")(void 0,({children:l,icon:n,...u})=>({children:n||l||e.jsx($o,{}),...u})),pt=I(Yo,"content")(),Cl=I("span","label")(void 0,l=>{const{getLabelProps:n}=Wo();return n(l)}),X=I(({children:l,label:n,labelProps:u,...c})=>{const{groupProps:m}=tl(),{getGroupProps:p,getLabelProps:v}=qo({...m,...c}),h=a.useMemo(()=>({getLabelProps:v}),[v]);return e.jsx(Ho,{value:h,children:e.jsxs(Al.div,{...p(),children:[n?e.jsx(Cl,{...u,children:n}):null,l]})})},"group")(),s=I(({children:l,icon:n,...u})=>{const{optionProps:{icon:c,...m}={}}=tl(),{getIndicatorProps:p,getOptionProps:v}=rt({...m,...u});return e.jsxs(Al.div,{...v(),children:[e.jsx(to,{...p(),children:n??c??e.jsx(Jo,{})}),l]})},"option")(),vt=I(({children:l,icon:n,...u})=>{const{emptyIcon:c,emptyProps:m}=tl();return e.jsxs(Al.div,{...m,...u,children:[e.jsx(to,{children:n??c??e.jsx(_o,{})}),l]})},"empty")(),to=I("div","indicator")(),lu={component:t,title:"Components / Autocomplete"},ge=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsx(s,{value:"アグモン",children:"アグモン"}),e.jsx(s,{value:"ガブモン",children:"ガブモン"}),e.jsx(s,{value:"テントモン",children:"テントモン"}),e.jsx(s,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(s,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(s,{value:"パルモン",children:"パルモン"}),e.jsx(s,{value:"パタモン",children:"パタモン"}),e.jsx(s,{value:"テイルモン",children:"テイルモン"})]}),fe=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsxs(X,{children:[e.jsx(Cl,{children:"成長期"}),e.jsx(s,{value:"アグモン",children:"アグモン"}),e.jsx(s,{value:"ガブモン",children:"ガブモン"}),e.jsx(s,{value:"テントモン",children:"テントモン"}),e.jsx(s,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(s,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(s,{value:"パルモン",children:"パルモン"}),e.jsx(s,{value:"パタモン",children:"パタモン"}),e.jsx(s,{value:"テイルモン",children:"テイルモン"})]}),e.jsxs(X,{label:"成熟期",children:[e.jsx(s,{value:"グレイモン",children:"グレイモン"}),e.jsx(s,{value:"ガルルモン",children:"ガルルモン"}),e.jsx(s,{value:"カブテリモン",children:"カブテリモン"}),e.jsx(s,{value:"バードラモン",children:"バードラモン"}),e.jsx(s,{value:"イッカクモン",children:"イッカクモン"}),e.jsx(s,{value:"トグモン",children:"トグモン"}),e.jsx(s,{value:"エンジェモン",children:"エンジェモン"})]}),e.jsxs(X,{label:"完全体",children:[e.jsx(s,{value:"メタルグレイモン",children:"メタルグレイモン"}),e.jsx(s,{value:"ワーガルルモン",children:"ワーガルルモン"}),e.jsx(s,{value:"アトラーカブテリモン",children:"アトラーカブテリモン"}),e.jsx(s,{value:"ガルダモン",children:"ガルダモン"}),e.jsx(s,{value:"ズドモン",children:"ズドモン"}),e.jsx(s,{value:"リリモン",children:"リリモン"}),e.jsx(s,{value:"ホーリーエンジェモン",children:"ホーリーエンジェモン"}),e.jsx(s,{value:"エンジェウーモン",children:"エンジェウーモン"})]}),e.jsxs(X,{label:"究極体",children:[e.jsx(s,{value:"ウォーグレイモン",children:"ウォーグレイモン"}),e.jsx(s,{value:"メタルガルルモン",children:"メタルガルルモン"}),e.jsx(s,{value:"ヘラクルカブテリモン",children:"ヘラクルカブテリモン"}),e.jsx(s,{value:"ホウオウモン",children:"ホウオウモン"}),e.jsx(s,{value:"ヴァイクモン",children:"ヴァイクモン"}),e.jsx(s,{value:"ロゼモン",children:"ロゼモン"}),e.jsx(s,{value:"ゴッドドラモン",children:"ゴッドドラモン"}),e.jsx(s,{value:"ホーリードラモン",children:"ホーリードラモン"})]})]}),xe=()=>{const l=a.useMemo(()=>[{label:"オメガモン",value:"オメガモン"},{label:"ディアボロモン",value:"ディアボロモン"},{items:[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],label:"成長期"},{items:[{label:"グレイモン",value:"グレイモン"},{label:"ガルルモン",value:"ガルルモン"},{label:"カブテリモン",value:"カブテリモン"},{label:"バードラモン",value:"バードラモン"},{label:"イッカクモン",value:"イッカクモン"},{label:"トグモン",value:"トグモン"},{label:"エンジェモン",value:"エンジェモン"}],label:"成熟期"},{items:[{label:"メタルグレイモン",value:"メタルグレイモン"},{label:"ワーガルルモン",value:"ワーガルルモン"},{label:"アトラーカブテリモン",value:"アトラーカブテリモン"},{label:"ガルダモン",value:"ガルダモン"},{label:"ズドモン",value:"ズドモン"},{label:"リリモン",value:"リリモン"},{label:"ホーリーエンジェモン",value:"ホーリーエンジェモン"},{label:"エンジェウーモン",value:"エンジェウーモン"}],label:"完全体"},{items:[{label:"ウォーグレイモン",value:"ウォーグレイモン"},{label:"メタルガルルモン",value:"メタルガルルモン"},{label:"ヘラクルカブテリモン",value:"ヘラクルカブテリモン"},{label:"ホウオウモン",value:"ホウオウモン"},{label:"ヴァイクモン",value:"ヴァイクモン"},{label:"ロゼモン",value:"ロゼモン"},{label:"ゴッドドラモン",value:"ゴッドドラモン"},{label:"ホーリードラモン",value:"ホーリードラモン"}],label:"究極体"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ae=()=>{const l=a.useMemo(()=>[{label:e.jsxs(e.Fragment,{children:[e.jsx(yo,{as:"span",flex:"1",children:"アグモン"}),e.jsx(ko,{fontSize:"lg"})]}),query:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Se=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(lo,{variant:"stack",columns:["outline","filled","flushed"],rows:Po,children:(n,u,c)=>e.jsx(t,{colorScheme:u,variant:n,items:l,placeholder:T(n)},c)})},Ce=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(lo,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,u,c)=>e.jsx(t,{size:n,variant:u,items:l,placeholder:`Size (${n})`},c)})},je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",items:l,placeholder:"Select a digimon"})},Oe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultInputValue:"モン",items:l,openOnFocus:!0,placeholder:"Select a digimon"})},Ie=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon"})},Me=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,max:3,multiple:!0,placeholder:"Select a digimon"})},Re=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon",separator:";"})},ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,offset:[16,16],placeholder:"Select a digimon"})},Pe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{gutter:32,items:l,placeholder:"Select a digimon"})},ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon"})},Fe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon",placement:"center-end",rootProps:{w:"xs"}})},De=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(oo,{minH:"200dvh",w:"full",children:e.jsx(t,{blockScrollOnMount:!0,items:l,placeholder:"Select a digimon"})})},Ge=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{allowCustomValue:!0,items:l,placeholder:"Select a digimon",onChange:n=>console.log("value:",n)})},Be=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnChange:n=>n.target.value.length>1,openOnFocus:!1,placeholder:"Select a digimon"})},Ve=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnChange:n=>!n.target.value.length,items:l,openOnFocus:!1,placeholder:"Select a digimon"})},we=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(oo,{minH:"200dvh",w:"full",children:e.jsx(t,{closeOnScroll:!0,items:l,placeholder:"Select a digimon"})})},Ee=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnFocus:!1,placeholder:"Select a digimon"})},Te=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnClick:!1,placeholder:"Select a digimon"})},qe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",focusOnClear:!1,items:l,placeholder:"Select a digimon"})},He=()=>{const l=a.useMemo(()=>[{closeOnSelect:!0,label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnSelect:!1,items:l,placeholder:"Select a digimon"})},We=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnBlur:!1,items:l,placeholder:"Select a digimon"})},ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnEsc:!1,items:l,placeholder:"Select a digimon"})},Le=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{clearable:!1,items:l,placeholder:"Select a digimon"})},Ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{disabled:!0,label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},_e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,disabled:!0,items:l,placeholder:T(n)},u)}),e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,disabled:!0,children:[e.jsx(ue,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:T(n)})]},u)}),e.jsx(te,{disabled:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Ne=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,items:l,placeholder:T(n),readOnly:!0},u)}),e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,readOnly:!0,children:[e.jsx(ue,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:T(n)})]},u)}),e.jsx(te,{label:"Who is your favorite digimon?",readOnly:!0,children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Qe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,invalid:!0,items:l,placeholder:T(n)},u)}),e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,invalid:!0,children:[e.jsx(ue,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:T(n)})]},u)}),e.jsx(te,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Ue=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,children:[e.jsx(ue,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Xe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(k,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(F,{variant:n,children:[e.jsx(Sl,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(F,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(Sl,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(F,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(ue,{children:e.jsx(D,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]})]})},$e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{emptyMessage:"You just hit a route that doesn't exist... the sadness.😢",items:l,placeholder:"Select a digimon"})},Je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Select a digimon",iconProps:{color:"orange"}}),e.jsx(t,{icon:e.jsx(Fo,{}),items:l,placeholder:"Select a digimon"})]})},Ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon",optionProps:{icon:e.jsx(D,{})}})},el=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",render:({label:n,onClear:u})=>e.jsx(Do,{size:"sm",me:"{gap}",onClose:u,children:n})})},ll=()=>{const[l,n]=a.useState("アグモン"),u=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:u,placeholder:"Select a digimon",value:l,onChange:n})},al=()=>{var p;const{control:l,formState:{errors:n},handleSubmit:u}=ao(),c=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),m=v=>console.log("submit:",v);return e.jsxs(Zn,{as:"form",onSubmit:u(m),children:[e.jsx(te,{errorMessage:(p=n.autocomplete)==null?void 0:p.message,invalid:!!n.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(no,{name:"autocomplete",control:l,render:({field:v})=>e.jsx(t,{items:c,placeholder:"Select a digimon",...v}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(eo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},nl=()=>{var v;const l={autocomplete:"アグモン"},{control:n,formState:{errors:u},handleSubmit:c}=ao({defaultValues:l}),m=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),p=h=>console.log("submit:",h);return e.jsxs(Zn,{as:"form",onSubmit:c(p),children:[e.jsx(te,{errorMessage:(v=u.autocomplete)==null?void 0:v.message,invalid:!!u.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(no,{name:"autocomplete",control:n,render:({field:h})=>e.jsx(t,{items:m,placeholder:"Select a digimon",...h}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(eo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var El,Tl,ql;ge.parameters={...ge.parameters,docs:{...(El=ge.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
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
}`,...(ql=(Tl=ge.parameters)==null?void 0:Tl.docs)==null?void 0:ql.source}}};var Hl,Wl,zl;fe.parameters={...fe.parameters,docs:{...(Hl=fe.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
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
}`,...(zl=(Wl=fe.parameters)==null?void 0:Wl.docs)==null?void 0:zl.source}}};var Ll,Kl,_l;xe.parameters={...xe.parameters,docs:{...(Ll=xe.parameters)==null?void 0:Ll.docs,source:{originalSource:`() => {
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
}`,...(_l=(Kl=xe.parameters)==null?void 0:Kl.docs)==null?void 0:_l.source}}};var Nl,Ql,Ul;Ae.parameters={...Ae.parameters,docs:{...(Nl=Ae.parameters)==null?void 0:Nl.docs,source:{originalSource:`() => {
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
}`,...(Ul=(Ql=Ae.parameters)==null?void 0:Ql.docs)==null?void 0:Ul.source}}};var Xl,Yl,$l;Se.parameters={...Se.parameters,docs:{...(Xl=Se.parameters)==null?void 0:Xl.docs,source:{originalSource:`() => {
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
}`,...($l=(Yl=Se.parameters)==null?void 0:Yl.docs)==null?void 0:$l.source}}};var Jl,Zl,ea;Ce.parameters={...Ce.parameters,docs:{...(Jl=Ce.parameters)==null?void 0:Jl.docs,source:{originalSource:`() => {
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
}`,...(ea=(Zl=Ce.parameters)==null?void 0:Zl.docs)==null?void 0:ea.source}}};var la,aa,na;je.parameters={...je.parameters,docs:{...(la=je.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
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
}`,...(na=(aa=je.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var oa,ta,ua;Oe.parameters={...Oe.parameters,docs:{...(oa=Oe.parameters)==null?void 0:oa.docs,source:{originalSource:`() => {
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
}`,...(ua=(ta=Oe.parameters)==null?void 0:ta.docs)==null?void 0:ua.source}}};var ra,sa,ca;Ie.parameters={...Ie.parameters,docs:{...(ra=Ie.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
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
}`,...(ca=(sa=Ie.parameters)==null?void 0:sa.docs)==null?void 0:ca.source}}};var ia,ma,pa;Me.parameters={...Me.parameters,docs:{...(ia=Me.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
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
}`,...(pa=(ma=Me.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var va,ba,da;Re.parameters={...Re.parameters,docs:{...(va=Re.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
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
}`,...(da=(ba=Re.parameters)==null?void 0:ba.docs)==null?void 0:da.source}}};var ha,ga,fa;ye.parameters={...ye.parameters,docs:{...(ha=ye.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(fa=(ga=ye.parameters)==null?void 0:ga.docs)==null?void 0:fa.source}}};var xa,Aa,Sa;Pe.parameters={...Pe.parameters,docs:{...(xa=Pe.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
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
}`,...(Sa=(Aa=Pe.parameters)==null?void 0:Aa.docs)==null?void 0:Sa.source}}};var Ca,ja,Oa;ke.parameters={...ke.parameters,docs:{...(Ca=ke.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
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
}`,...(Oa=(ja=ke.parameters)==null?void 0:ja.docs)==null?void 0:Oa.source}}};var Ia,Ma,Ra;Fe.parameters={...Fe.parameters,docs:{...(Ia=Fe.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
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
}`,...(Ra=(Ma=Fe.parameters)==null?void 0:Ma.docs)==null?void 0:Ra.source}}};var ya,Pa,ka;De.parameters={...De.parameters,docs:{...(ya=De.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
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
}`,...(ka=(Pa=De.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var Fa,Da,Ga;Ge.parameters={...Ge.parameters,docs:{...(Fa=Ge.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
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
}`,...(Ga=(Da=Ge.parameters)==null?void 0:Da.docs)==null?void 0:Ga.source}}};var Ba,Va,wa;Be.parameters={...Be.parameters,docs:{...(Ba=Be.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
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
}`,...(wa=(Va=Be.parameters)==null?void 0:Va.docs)==null?void 0:wa.source}}};var Ea,Ta,qa;Ve.parameters={...Ve.parameters,docs:{...(Ea=Ve.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
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
}`,...(qa=(Ta=Ve.parameters)==null?void 0:Ta.docs)==null?void 0:qa.source}}};var Ha,Wa,za;we.parameters={...we.parameters,docs:{...(Ha=we.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
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
}`,...(za=(Wa=we.parameters)==null?void 0:Wa.docs)==null?void 0:za.source}}};var La,Ka,_a;Ee.parameters={...Ee.parameters,docs:{...(La=Ee.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
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
}`,...(_a=(Ka=Ee.parameters)==null?void 0:Ka.docs)==null?void 0:_a.source}}};var Na,Qa,Ua;Te.parameters={...Te.parameters,docs:{...(Na=Te.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
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
}`,...(Ua=(Qa=Te.parameters)==null?void 0:Qa.docs)==null?void 0:Ua.source}}};var Xa,Ya,$a;qe.parameters={...qe.parameters,docs:{...(Xa=qe.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
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
}`,...($a=(Ya=qe.parameters)==null?void 0:Ya.docs)==null?void 0:$a.source}}};var Ja,Za,en;He.parameters={...He.parameters,docs:{...(Ja=He.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
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
}`,...(en=(Za=He.parameters)==null?void 0:Za.docs)==null?void 0:en.source}}};var ln,an,nn;We.parameters={...We.parameters,docs:{...(ln=We.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(nn=(an=We.parameters)==null?void 0:an.docs)==null?void 0:nn.source}}};var on,tn,un;ze.parameters={...ze.parameters,docs:{...(on=ze.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(un=(tn=ze.parameters)==null?void 0:tn.docs)==null?void 0:un.source}}};var rn,sn,cn;Le.parameters={...Le.parameters,docs:{...(rn=Le.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(cn=(sn=Le.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var mn,pn,vn;Ke.parameters={...Ke.parameters,docs:{...(mn=Ke.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(vn=(pn=Ke.parameters)==null?void 0:pn.docs)==null?void 0:vn.source}}};var bn,dn,hn;_e.parameters={..._e.parameters,docs:{...(bn=_e.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(hn=(dn=_e.parameters)==null?void 0:dn.docs)==null?void 0:hn.source}}};var gn,fn,xn;Ne.parameters={...Ne.parameters,docs:{...(gn=Ne.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(xn=(fn=Ne.parameters)==null?void 0:fn.docs)==null?void 0:xn.source}}};var An,Sn,Cn;Qe.parameters={...Qe.parameters,docs:{...(An=Qe.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(Cn=(Sn=Qe.parameters)==null?void 0:Sn.docs)==null?void 0:Cn.source}}};var jn,On,In;Ue.parameters={...Ue.parameters,docs:{...(jn=Ue.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(In=(On=Ue.parameters)==null?void 0:On.docs)==null?void 0:In.source}}};var Mn,Rn,yn;Xe.parameters={...Xe.parameters,docs:{...(Mn=Xe.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
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
}`,...(yn=(Rn=Xe.parameters)==null?void 0:Rn.docs)==null?void 0:yn.source}}};var Pn,kn,Fn;Ye.parameters={...Ye.parameters,docs:{...(Pn=Ye.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
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
}`,...(Fn=(kn=Ye.parameters)==null?void 0:kn.docs)==null?void 0:Fn.source}}};var Dn,Gn,Bn;$e.parameters={...$e.parameters,docs:{...(Dn=$e.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(Bn=(Gn=$e.parameters)==null?void 0:Gn.docs)==null?void 0:Bn.source}}};var Vn,wn,En;Je.parameters={...Je.parameters,docs:{...(Vn=Je.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(En=(wn=Je.parameters)==null?void 0:wn.docs)==null?void 0:En.source}}};var Tn,qn,Hn;Ze.parameters={...Ze.parameters,docs:{...(Tn=Ze.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(qn=Ze.parameters)==null?void 0:qn.docs)==null?void 0:Hn.source}}};var Wn,zn,Ln;el.parameters={...el.parameters,docs:{...(Wn=el.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(zn=el.parameters)==null?void 0:zn.docs)==null?void 0:Ln.source}}};var Kn,_n,Nn;ll.parameters={...ll.parameters,docs:{...(Kn=ll.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(_n=ll.parameters)==null?void 0:_n.docs)==null?void 0:Nn.source}}};var Qn,Un,Xn;al.parameters={...al.parameters,docs:{...(Qn=al.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Un=al.parameters)==null?void 0:Un.docs)==null?void 0:Xn.source}}};var Yn,$n,Jn;nl.parameters={...nl.parameters,docs:{...(Yn=nl.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Jn=($n=nl.parameters)==null?void 0:$n.docs)==null?void 0:Jn.source}}};const au=["Basic","Group","Items","ItemsWithQuery","Variant","Size","DefaultValue","DefaultInputValue","Multiple","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","AllowCustomValue","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledFocusOnClear","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledClearable","DisabledOption","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomEmptyMessage","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Ue as Addon,Ge as AllowCustomValue,ke as AnimationScheme,ge as Basic,De as BlockScrollOnMount,Ye as BorderColor,Ve as CloseOnChange,we as CloseOnScroll,ll as CustomControl,$e as CustomEmptyMessage,Je as CustomIcon,Ze as CustomOptionIcon,el as CustomRender,Oe as DefaultInputValue,je as DefaultValue,_e as Disabled,Le as DisabledClearable,We as DisabledCloseOnBlur,ze as DisabledCloseOnEsc,He as DisabledCloseOnSelect,qe as DisabledFocusOnClear,Te as DisabledOpenOnClick,Ee as DisabledOpenOnFocus,Ke as DisabledOption,Xe as Element,fe as Group,Pe as Gutter,Qe as Invalid,xe as Items,Ae as ItemsWithQuery,Me as Max,Ie as Multiple,ye as Offset,Be as OpenOnChange,Fe as Placement,al as ReactHookForm,nl as ReactHookFormDefaultValue,Ne as ReadOnly,Re as Separator,Ce as Size,Se as Variant,au as __namedExportsOrder,lu as default};
