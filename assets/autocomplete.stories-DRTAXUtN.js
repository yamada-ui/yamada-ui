import{n as Cl,I as jl,d as Ol,c as Il,A as Ml,r as a,l as W,B as ul,i as Rl,k as sl,a as rl,D as Ye,h as S,m as yl,E as Pl,g as kl,j as e,s as $e,T as Fl,C as Gl,F as B,V as ml}from"./iframe-zUpmkGgl.js";import{P as pl}from"./props-table-AHThgKBg.js";import{u as vl,C as bl}from"./index.esm-DEu9Ceiu.js";import{H as wl}from"./heart-icon-DyemmTKm.js";import{B as dl}from"./box-B0C5PNF2.js";import{F as C}from"./for-yYl1Ggvn.js";import{c as Bl}from"./createLucideIcon-D8b2f8gg.js";import{C as Dl}from"./chevrons-down-icon-DwBx42tJ.js";import{B as hl}from"./button-BSJyaaef.js";import{s as v,u as Vl,a as El,c as Tl,b as zl,C as ql,d as Hl,e as Wl,f as Ll,g as Kl}from"./select.style-DBqU2RD8.js";import{u as cl}from"./index-Dal1_S4H.js";import{u as _l,F as Q}from"./use-field-props-DY5RPiKr.js";import{u as Nl}from"./input-BKPLuSIk.js";import{M as Ql}from"./minus-icon-WsL6CU2G.js";import{u as Ul}from"./group-Cupld_54.js";import{u as Xl,P as Yl,a as $l,b as Jl}from"./popover-CbHmS7oa.js";import{X as Zl}from"./x-icon-CLxBNWiF.js";import{u as en}from"./use-input-border-DszEfdnS.js";import{I as j,a as Je,b as U}from"./input-group-nmSJmLaw.js";import{C as ln}from"./chevron-down-icon-YbCaQFLO.js";import{C as nn}from"./check-icon-XJOXhgUI.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BedIdkoN.js";import"./grid-item-3R5iQPLC.js";import"./flex-IclJcorr.js";import"./heading-D-hfGBzv.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";import"./index-D1pcvMr3.js";import"./use-disclosure-3nrGeSn1.js";import"./menu.style-BdgUxdwS.js";import"./native-select.style-DX0TbDoP.js";import"./index-Dh0dtizH.js";import"./use-breakpoint-rlMFjuDB.js";import"./use-breakpoint-value-CBhdCsru.js";import"./use-color-mode-value-DvQIHb0C.js";import"./index-BkfO7WzD.js";import"./index-B5DbfJPc.js";import"./index-CEYmrBXe.js";import"./event-CX1pcGw3.js";import"./slide-fade-Bu6fwAcF.js";import"./transition-BWA4KZ39.js";import"./fade-scale-BL1fbRuK.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],on=Bl("bug",an),O=Cl(jl)({as:on}),tn=Ol({base:{...v.base,empty:v.base?.option},variants:{filled:v.variants?.filled,flushed:v.variants?.flushed,outline:v.variants?.outline,plain:v.variants?.plain},sizes:{xs:{...v.sizes?.xs,empty:v.sizes?.xs.option},sm:{...v.sizes?.sm,empty:v.sizes?.sm.option},md:{...v.sizes?.md,empty:v.sizes?.md.option},lg:{...v.sizes?.lg,empty:v.sizes?.lg.option},xl:{...v.sizes?.xl,empty:v.sizes?.xl.option}},defaultProps:{size:"md",variant:"outline"}}),te=l=>W(l?.label)?l.label:l?.query??"",un=(l,n,t)=>l.length?n.map(r=>{if("items"in r){const i=r.items.filter(m=>{if("query"in m)return t(l,m.query);if(W(m.label))return t(l,m.label)});if(i.length)return{...r,items:i}}else if("query"in r){if(t(l,r.query))return r}else if(W(r.label)&&t(l,r.label))return r}).filter(Boolean):n,sn=(l,n)=>n?.toLowerCase().includes(l.toLowerCase())??!1,[rn,cn]=Il({name:"AutocompleteContext"}),mn=(l={})=>{const{t:n}=Ml("autocomplete"),{props:{allowCustomValue:t=!1,closeOnChange:r=!1,closeOnSelect:i=!0,defaultInputValue:m,defaultValue:p,disabled:b,emptyMessage:M=n("No results found"),filter:R=un,focusOnClear:y=!0,inputValue:L,items:P=[],matcher:X=sn,openOnChange:D=!0,openOnFocus:A=!1,placeholder:Y,readOnly:$,value:K,onChange:J,onInputChange:Z,...Le},ariaProps:Ke,dataProps:k,eventProps:_e}=_l(l),V=a.useRef(null),f=a.useMemo(()=>{const s={};return P.forEach(c=>{"items"in c?c.items.forEach(q=>{q.value??=W(q.label)?q.label:void 0,ul(q.value)||(s[q.value]=q)}):(c.value??=W(c.label)?c.label:void 0,ul(c.value)||(s[c.value]=c))}),s},[P]),[x,d]=cl({defaultValue:p,value:K,onChange:J}),[h,g]=cl({defaultValue:m??te(f[x]),value:L,onChange:Z}),ee=a.useCallback(s=>{d(s);const c=f[s];g(te(c))},[g,d,f]),{activeDescendant:E,descendants:Ne,interactive:le,open:T,getContentProps:F,getSeparatorProps:ne,getTriggerProps:_,onActiveDescendant:Qe,onClose:N,onOpen:G,onSelect:z}=Vl({closeOnSelect:i,disabled:b,initialFocusValue:Rl(x)?x[0]:x,readOnly:$,onChange:ee,...Ke,...k,..._e,...Le}),w=a.useMemo(()=>{if(!P.length)return[];const s=R(h,P,X);return s.length?s:[{"data-empty":"",label:M}]},[M,R,h,P,X]),ae=a.useMemo(()=>!w.filter(({hidden:s})=>!s).length,[w]),Ue=a.useCallback(s=>{sl(r,s)?N():sl(D,s)&&G(),E.current=null;const c=s.target.value;g(c),c.length||d("")},[E,r,N,G,D,g,d]),ll=a.useCallback(s=>{if(!T||b||s.nativeEvent.isComposing||!h.length||E.current)return;const c=w[0];c&&rl(s,{Enter:()=>{"items"in c?z(c.items[0]?.value):z(c.value)}})},[E,b,w,h,z,T]),nl=a.useCallback(()=>{A&&V.current?.focus()},[A]),al=a.useCallback(s=>{A&&(s.preventDefault(),s.stopPropagation())},[A]),ol=a.useCallback(()=>{A&&G()},[A,G]),tl=a.useCallback(()=>{if(t)h&&d(h);else{const s=f[x];g(te(s))}},[t,h,g,d,x,f]),oe=a.useCallback(()=>{d(""),g(""),y&&V.current?.focus()},[y,g,d]),xl=a.useCallback(s=>({...k,...s}),[k]),fl=a.useCallback(({ref:s,...c}={})=>Ye(_({ref:yl(s,V),autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",placeholder:Y,spellCheck:!1,value:h,...c,onBlur:S(c.onBlur,tl),onChange:S(c.onChange,Ue),onClick:S(c.onClick,nl),onFocus:S(c.onFocus,ol),onKeyDown:S(c.onKeyDown,ll),onMouseDown:S(c.onMouseDown,al)})),[_,h,tl,nl,ol,Ue,ll,al,Y]),Al=a.useCallback(s=>F({hidden:ae,...s}),[ae,F]),Xe=a.useCallback(s=>({...k,...s}),[k]),Sl=a.useCallback((s={})=>Xe({"aria-label":n("Clear value"),role:"button",tabIndex:0,...s,onClick:S(s.onClick,oe),onKeyDown:S(s.onKeyDown,c=>rl(c,{Enter:oe,Space:oe}))}),[Xe,oe,n]);return Pl(()=>{const s=f[x];g(te(s))},[K]),{descendants:Ne,inputValue:h,interactive:le,items:w,open:T,setInputValue:g,setValue:d,value:x,valueMap:f,getClearIconProps:Sl,getContentProps:Al,getFieldProps:fl,getIconProps:Xe,getRootProps:xl,getSeparatorProps:ne,onActiveDescendant:Qe,onChange:ee,onClose:N,onInputChange:Ue,onOpen:G,onSelect:z}},pn=({children:l,closeOnSelect:n,disabled:t,hidden:r,value:i,...m}={})=>{const{value:p}=cn();i??=W(l)?l:void 0;const b=p===i,{getIndicatorProps:M,getItemProps:R}=El({children:l,closeOnSelect:n,disabled:t||r,hidden:r,selected:b,value:i,...m}),y=a.useCallback((L={})=>R(L),[R]);return{getIndicatorProps:M,getOptionProps:y}},{ComponentContext:vn,useComponentContext:Ze,withContext:I,withProvider:bn}=kl("autocomplete",tn),o=bn(l=>{const[n,t]=Ul(l),[r,{className:i,css:m,colorScheme:p,children:b,clearable:M=!0,clearIcon:R=e.jsx(Zl,{}),emptyIcon:y,errorBorderColor:L,focusBorderColor:P,icon:X,items:D,contentProps:A,elementProps:Y,emptyProps:$,groupProps:K,iconProps:J,optionProps:Z,rootProps:Le,...Ke}]=Xl(t,["disabled","open","defaultOpen","onOpen","onClose","openOnClick"]),k=a.useMemo(()=>D||Tl(b,{Group:H,Label:el,Option:u}),[D,b]),{descendants:_e,interactive:V,items:f,open:x,value:d,getClearIconProps:h,getContentProps:g,getFieldProps:ee,getIconProps:E,getRootProps:Ne,getSeparatorProps:le,onActiveDescendant:T,onClose:F,onOpen:ne,onSelect:_}=mn({items:k,...Ke}),Qe=a.useMemo(()=>({animationScheme:"block-start",autoFocus:!1,matchWidth:!0,openOnClick:!1,...r,disabled:!V,open:x,onClose:F,onOpen:ne}),[V,F,ne,x,r]),N=a.useMemo(()=>zl(f,{Empty:gn,Group:H,Option:u}),[f]),G=en({errorBorderColor:L,focusBorderColor:P}),z=a.useMemo(()=>({onActiveDescendant:T,onClose:F,onSelect:_}),[T,F,_]),w=a.useMemo(()=>({value:d}),[d]),ae=a.useMemo(()=>({emptyIcon:y,emptyProps:$,getSeparatorProps:le,groupProps:K,optionProps:Z}),[le,K,Z,$,y]);return e.jsx(ql,{value:_e,children:e.jsx(Hl,{value:z,children:e.jsx(rn,{value:w,children:e.jsx(vn,{value:ae,children:e.jsxs(Yl,{...Qe,children:[e.jsxs(j,{className:i,css:m,colorScheme:p,...Ne({...n,...Le}),children:[e.jsx($l,{children:e.jsx(dn,{...ee(G)})}),e.jsx(Je,{clickable:M&&!!d,...Y,children:M&&d?e.jsx(il,{icon:R,...h(J)}):e.jsx(il,{icon:X,...E(J)})})]}),e.jsx(hn,{...Ye(g(Ye(A))),children:N})]})})})})})},"root")(l=>({...Nl(),...l})),dn=I("input","field")({"data-group-propagate":""}),il=I("div","icon")(void 0,({children:l,icon:n,...t})=>({children:n||l||e.jsx(ln,{}),...t})),hn=I(Jl,"content")(),el=I("span","label")(void 0,l=>{const{getLabelProps:n}=Kl();return n(l)}),H=I(({children:l,label:n,labelProps:t,...r})=>{const{groupProps:i}=Ze(),{getGroupProps:m,getLabelProps:p}=Wl({...i,...r}),b=a.useMemo(()=>({getLabelProps:p}),[p]);return e.jsx(Ll,{value:b,children:e.jsxs($e.div,{...m(),children:[n?e.jsx(el,{...t,children:n}):null,l]})})},"group")(),u=I(({children:l,icon:n,...t})=>{const{optionProps:{icon:r,...i}={}}=Ze(),{getIndicatorProps:m,getOptionProps:p}=pn({...i,...t});return e.jsxs($e.div,{...p(),children:[e.jsx(gl,{...m(),children:n??r??e.jsx(nn,{})}),l]})},"option")(),gn=I(({children:l,icon:n,...t})=>{const{emptyIcon:r,emptyProps:i}=Ze();return e.jsxs($e.div,{...i,...t,children:[e.jsx(gl,{children:n??r??e.jsx(Ql,{})}),l]})},"empty")(),gl=I("div","indicator")(),ra={component:o,title:"Components / Autocomplete"},ue=()=>e.jsxs(o,{placeholder:"Select a digimon",children:[e.jsx(u,{value:"アグモン",children:"アグモン"}),e.jsx(u,{value:"ガブモン",children:"ガブモン"}),e.jsx(u,{value:"テントモン",children:"テントモン"}),e.jsx(u,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(u,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(u,{value:"パルモン",children:"パルモン"}),e.jsx(u,{value:"パタモン",children:"パタモン"}),e.jsx(u,{value:"テイルモン",children:"テイルモン"})]}),se=()=>e.jsxs(o,{placeholder:"Select a digimon",children:[e.jsxs(H,{children:[e.jsx(el,{children:"成長期"}),e.jsx(u,{value:"アグモン",children:"アグモン"}),e.jsx(u,{value:"ガブモン",children:"ガブモン"}),e.jsx(u,{value:"テントモン",children:"テントモン"}),e.jsx(u,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(u,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(u,{value:"パルモン",children:"パルモン"}),e.jsx(u,{value:"パタモン",children:"パタモン"}),e.jsx(u,{value:"テイルモン",children:"テイルモン"})]}),e.jsxs(H,{label:"成熟期",children:[e.jsx(u,{value:"グレイモン",children:"グレイモン"}),e.jsx(u,{value:"ガルルモン",children:"ガルルモン"}),e.jsx(u,{value:"カブテリモン",children:"カブテリモン"}),e.jsx(u,{value:"バードラモン",children:"バードラモン"}),e.jsx(u,{value:"イッカクモン",children:"イッカクモン"}),e.jsx(u,{value:"トグモン",children:"トグモン"}),e.jsx(u,{value:"エンジェモン",children:"エンジェモン"})]}),e.jsxs(H,{label:"完全体",children:[e.jsx(u,{value:"メタルグレイモン",children:"メタルグレイモン"}),e.jsx(u,{value:"ワーガルルモン",children:"ワーガルルモン"}),e.jsx(u,{value:"アトラーカブテリモン",children:"アトラーカブテリモン"}),e.jsx(u,{value:"ガルダモン",children:"ガルダモン"}),e.jsx(u,{value:"ズドモン",children:"ズドモン"}),e.jsx(u,{value:"リリモン",children:"リリモン"}),e.jsx(u,{value:"ホーリーエンジェモン",children:"ホーリーエンジェモン"}),e.jsx(u,{value:"エンジェウーモン",children:"エンジェウーモン"})]}),e.jsxs(H,{label:"究極体",children:[e.jsx(u,{value:"ウォーグレイモン",children:"ウォーグレイモン"}),e.jsx(u,{value:"メタルガルルモン",children:"メタルガルルモン"}),e.jsx(u,{value:"ヘラクルカブテリモン",children:"ヘラクルカブテリモン"}),e.jsx(u,{value:"ホウオウモン",children:"ホウオウモン"}),e.jsx(u,{value:"ヴァイクモン",children:"ヴァイクモン"}),e.jsx(u,{value:"ロゼモン",children:"ロゼモン"}),e.jsx(u,{value:"ゴッドドラモン",children:"ゴッドドラモン"}),e.jsx(u,{value:"ホーリードラモン",children:"ホーリードラモン"})]})]}),re=()=>{const l=a.useMemo(()=>[{label:"オメガモン",value:"オメガモン"},{label:"ディアボロモン",value:"ディアボロモン"},{items:[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],label:"成長期"},{items:[{label:"グレイモン",value:"グレイモン"},{label:"ガルルモン",value:"ガルルモン"},{label:"カブテリモン",value:"カブテリモン"},{label:"バードラモン",value:"バードラモン"},{label:"イッカクモン",value:"イッカクモン"},{label:"トグモン",value:"トグモン"},{label:"エンジェモン",value:"エンジェモン"}],label:"成熟期"},{items:[{label:"メタルグレイモン",value:"メタルグレイモン"},{label:"ワーガルルモン",value:"ワーガルルモン"},{label:"アトラーカブテリモン",value:"アトラーカブテリモン"},{label:"ガルダモン",value:"ガルダモン"},{label:"ズドモン",value:"ズドモン"},{label:"リリモン",value:"リリモン"},{label:"ホーリーエンジェモン",value:"ホーリーエンジェモン"},{label:"エンジェウーモン",value:"エンジェウーモン"}],label:"完全体"},{items:[{label:"ウォーグレイモン",value:"ウォーグレイモン"},{label:"メタルガルルモン",value:"メタルガルルモン"},{label:"ヘラクルカブテリモン",value:"ヘラクルカブテリモン"},{label:"ホウオウモン",value:"ホウオウモン"},{label:"ヴァイクモン",value:"ヴァイクモン"},{label:"ロゼモン",value:"ロゼモン"},{label:"ゴッドドラモン",value:"ゴッドドラモン"},{label:"ホーリードラモン",value:"ホーリードラモン"}],label:"究極体"}],[]);return e.jsx(o,{items:l,placeholder:"Select a digimon"})},ce=()=>{const l=a.useMemo(()=>[{label:e.jsxs(e.Fragment,{children:[e.jsx(Fl,{as:"span",flex:"1",children:"アグモン"}),e.jsx(wl,{fontSize:"lg"})]}),query:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,placeholder:"Select a digimon"})},ie=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(pl,{variant:"stack",columns:["outline","filled","flushed"],rows:Gl,children:(n,t,r)=>e.jsx(o,{colorScheme:t,variant:n,items:l,placeholder:B(n)},r)})},me=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(pl,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,t,r)=>e.jsx(o,{size:n,variant:t,items:l,placeholder:`Size (${n})`},r)})},pe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{defaultValue:"アグモン",items:l,placeholder:"Select a digimon"})},ve=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{defaultInputValue:"モン",items:l,openOnFocus:!0,placeholder:"Select a digimon"})},be=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,offset:[16,16],placeholder:"Select a digimon"})},de=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{gutter:32,items:l,placeholder:"Select a digimon"})},he=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon"})},ge=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon",placement:"center-end",rootProps:{w:"xs"}})},xe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(dl,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,items:l,placeholder:"Select a digimon"})})},fe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,openOnFocus:!0,placeholder:"Select a digimon"})},Ae=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{allowCustomValue:!0,items:l,placeholder:"Select a digimon",onChange:n=>console.log("value:",n)})},Se=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,openOnChange:n=>n.target.value.length>1,placeholder:"Select a digimon"})},Ce=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{closeOnChange:n=>!n.target.value.length,items:l,placeholder:"Select a digimon"})},je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(dl,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,items:l,placeholder:"Select a digimon"})})},Oe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,openOnClick:!1,placeholder:"Select a digimon"})},Ie=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{defaultValue:"アグモン",focusOnClear:!1,items:l,placeholder:"Select a digimon"})},Me=()=>{const l=a.useMemo(()=>[{closeOnSelect:!0,label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{closeOnSelect:!1,items:l,placeholder:"Select a digimon"})},Re=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{closeOnBlur:!1,items:l,placeholder:"Select a digimon"})},ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{closeOnEsc:!1,items:l,placeholder:"Select a digimon"})},Pe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{clearable:!1,items:l,placeholder:"Select a digimon"})},ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{disabled:!0,label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,placeholder:"Select a digimon"})},Fe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsx(o,{variant:n,disabled:!0,items:l,placeholder:B(n)},t)}),e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsxs(j,{variant:n,disabled:!0,children:[e.jsx(U,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:B(n)})]},t)}),e.jsx(Q,{disabled:!0,label:"Who is your favorite digimon?",children:e.jsx(o,{items:l,placeholder:"Select a digimon"})})]})},Ge=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsx(o,{variant:n,items:l,placeholder:B(n),readOnly:!0},t)}),e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsxs(j,{variant:n,readOnly:!0,children:[e.jsx(U,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:B(n)})]},t)}),e.jsx(Q,{label:"Who is your favorite digimon?",readOnly:!0,children:e.jsx(o,{items:l,placeholder:"Select a digimon"})})]})},we=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsx(o,{variant:n,invalid:!0,items:l,placeholder:B(n)},t)}),e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsxs(j,{variant:n,invalid:!0,children:[e.jsx(U,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:B(n)})]},t)}),e.jsx(Q,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite digimon?",children:e.jsx(o,{items:l,placeholder:"Select a digimon"})})]})},Be=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsxs(j,{variant:n,children:[e.jsx(U,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:"Select a digimon"})]},t)})},De=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(C,{each:["outline","filled","flushed"],children:(n,t)=>e.jsxs(j,{variant:n,children:[e.jsx(Je,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:"Select a digimon"})]},t)})},Ve=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{items:l,placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(j,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(Je,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:"Custom border color"})]}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(j,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(U,{children:e.jsx(O,{})}),e.jsx(o,{items:l,placeholder:"Custom border color"})]})]})},Ee=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{emptyMessage:"You just hit a route that doesn't exist... the sadness.😢",items:l,placeholder:"Select a digimon"})},Te=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{items:l,placeholder:"Select a digimon",iconProps:{color:"orange"}}),e.jsx(o,{items:l,placeholder:"Select a digimon",iconProps:{children:e.jsx(Dl,{})}})]})},ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:l,placeholder:"Select a digimon",optionProps:{icon:e.jsx(O,{})}})},qe=()=>{const[l,n]=a.useState("アグモン"),t=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(o,{items:t,placeholder:"Select a digimon",value:l,onChange:n})},He=()=>{const{control:l,formState:{errors:n},handleSubmit:t,watch:r}=vl(),i=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),m=p=>console.log("submit:",p);return console.log("watch:",r()),e.jsxs(ml,{as:"form",onSubmit:t(m),children:[e.jsx(Q,{errorMessage:n.select?.message,invalid:!!n.select,label:"Who is your favorite digimon?",children:e.jsx(bl,{name:"select",control:l,render:({field:p})=>e.jsx(o,{items:i,placeholder:"Select a digimon",...p}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(hl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},We=()=>{const l={select:"アグモン"},{control:n,formState:{errors:t},handleSubmit:r,watch:i}=vl({defaultValues:l}),m=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),p=b=>console.log("submit:",b);return console.log("watch:",i()),e.jsxs(ml,{as:"form",onSubmit:r(p),children:[e.jsx(Q,{errorMessage:t.select?.message,invalid:!!t.select,label:"Who is your favorite digimon?",children:e.jsx(bl,{name:"select",control:n,render:({field:b})=>e.jsx(o,{items:m,placeholder:"Select a digimon",...b}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(hl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`() => {
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
}`,...ue.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`() => {
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
}`,...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
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
}`,...re.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`() => {
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
}`,...ce.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`() => {
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
}`,...ie.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
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
}`,...me.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`() => {
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
}`,...pe.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`() => {
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
}`,...ve.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`() => {
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
}`,...be.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`() => {
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
}`,...de.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
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
}`,...he.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...ge.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...xe.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
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
  return <Autocomplete.Root items={items} openOnFocus placeholder="Select a digimon" />;
}`,...fe.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
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
  return <Autocomplete.Root items={items} openOnChange={ev => ev.target.value.length > 1} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root closeOnChange={ev => !ev.target.value.length} items={items} placeholder="Select a digimon" />;
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
  return <Box minH="200dvh" w="full">
      <Autocomplete.Root closeOnScroll items={items} placeholder="Select a digimon" />
    </Box>;
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
  return <Autocomplete.Root items={items} openOnClick={false} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root defaultValue="アグモン" focusOnClear={false} items={items} placeholder="Select a digimon" />;
}`,...Ie.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`() => {
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
  return <Autocomplete.Root closeOnBlur={false} items={items} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root closeOnEsc={false} items={items} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root clearable={false} items={items} placeholder="Select a digimon" />;
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
}`,...Fe.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ge.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
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
}`,...we.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
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
}`,...Be.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
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
}`,...De.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ve.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
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
  return <>
      <Autocomplete.Root items={items} placeholder="Select a digimon" iconProps={{
      color: "orange"
    }} />

      <Autocomplete.Root items={items} placeholder="Select a digimon" iconProps={{
      children: <ChevronsDownIcon />
    }} />
    </>;
}`,...Te.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`() => {
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
}`,...ze.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...qe.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
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
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite digimon?">
        <Controller name="select" control={control} render={({
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
}`,...He.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const defaultValues: Data = {
    select: "アグモン"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
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
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite digimon?">
        <Controller name="select" control={control} render={({
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
}`,...We.parameters?.docs?.source}}};const ca=["Basic","Group","Items","ItemsWithQuery","Variant","Size","DefaultValue","DefaultInputValue","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnFocus","AllowCustomValue","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnClick","DisabledFocusOnClear","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledClearable","DisabledOption","Disabled","Readonly","Invalid","Addon","Element","BorderColor","CustomEmptyMessage","CustomIcon","CustomOptionIcon","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Be as Addon,Ae as AllowCustomValue,he as AnimationScheme,ue as Basic,xe as BlockScrollOnMount,Ve as BorderColor,Ce as CloseOnChange,je as CloseOnScroll,qe as CustomControl,Ee as CustomEmptyMessage,Te as CustomIcon,ze as CustomOptionIcon,ve as DefaultInputValue,pe as DefaultValue,Fe as Disabled,Pe as DisabledClearable,Re as DisabledCloseOnBlur,ye as DisabledCloseOnEsc,Me as DisabledCloseOnSelect,Ie as DisabledFocusOnClear,Oe as DisabledOpenOnClick,ke as DisabledOption,De as Element,se as Group,de as Gutter,we as Invalid,re as Items,ce as ItemsWithQuery,be as Offset,Se as OpenOnChange,fe as OpenOnFocus,ge as Placement,He as ReactHookForm,We as ReactHookFormDefaultValue,Ge as Readonly,me as Size,ie as Variant,ca as __namedExportsOrder,ra as default};
