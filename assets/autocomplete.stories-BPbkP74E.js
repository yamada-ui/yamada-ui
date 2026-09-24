import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Cn as r,Lt as i,Nn as a,Rt as o,Tn as s,Un as c,Vn as ee,Yt as te,Zn as l,_n as u,bn as d,dn as ne,dt as re,i as ie,it as ae,lt as oe,mt as se,nr as ce,o as f,ot as le,pn as ue,tr as p,ut as de,xn as m}from"./props-Bz1FL_va.js";import{i as fe,r as pe}from"./i18n-provider-Cc12Ys91.js";import{t as h}from"./jsx-runtime-BdxMnOeJ.js";import{E as me,T as he,d as g,f as _}from"./utils-DG4lHdyV.js";import{i as ge,t as v}from"./effect-CjnfyxRk.js";import{n as _e,r as ve}from"./create-component-DtmnY_ce.js";import{n as y,r as ye,t as b}from"./icon-vei_-6m2.js";import{n as be,t as xe}from"./createLucideIcon-CKl6Xqme.js";import{n as Se,t as x}from"./check-icon-B4K3BaPN.js";import{n as Ce,t as we}from"./chevron-down-icon-BoO9S_Pl.js";import{n as Te,t as Ee}from"./chevrons-down-icon-DEYzs0Qy.js";import{n as S,t as De}from"./heart-icon-CglEH7Ga.js";import{n as Oe,t as ke}from"./minus-icon-CUXRdnUa.js";import{n as Ae,t as je}from"./x-icon-Bm8h1VjH.js";import{r as Me,t as C}from"./use-controllable-state-tJaJeRqU.js";import{c as Ne,i as Pe,l as w,s as T,u as E}from"./popover-eS6gsMdO.js";import{n as D,t as Fe}from"./text-b2W5euYI.js";import{r as Ie,t as O}from"./button-CFBNyQlD.js";import{c as k,r as Le,s as A,t as Re}from"./use-field-props-DklfXwrD.js";import{i as ze,r as Be}from"./group-DDgp5sVV.js";import{i as Ve,r as He}from"./input-Dl7woXLW.js";import{a as j,i as Ue,n as M,o as N,r as P,t as F}from"./input-group-U0aj6U1q.js";import{n as We,t as Ge}from"./use-input-border-BBhXSV-4.js";import{a as Ke,c as qe,i as Je,l as Ye,n as Xe,o as Ze,r as Qe,s as $e,t as et,u as tt}from"./use-combobox-YAeEpsQG.js";import{n as nt,t as rt}from"./autocomplete.style-BPf1lVra.js";import{n as it,t as at}from"./box-C47iDJeO.js";import{n as ot,t as I}from"./for-BIl9Q3L3.js";import{n as st,t as ct}from"./v-stack-DgxvBjIl.js";import{n as lt,t as ut}from"./tag-BZNURefF.js";import{n as dt,t as ft}from"./props-table-CLkISL0o.js";import{n as pt,r as mt,t as ht}from"./index.esm-CWrUCFh-.js";var gt,_t;function vt(){return(vt=e((()=>{be(),gt={name:`bug`,size:24,node:[[`path`,{d:`M12 20v-9`,key:`1qisl0`}],[`path`,{d:`M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z`,key:`uouzyp`}],[`path`,{d:`M14.12 3.88 16 2`,key:`qol33r`}],[`path`,{d:`M21 21a4 4 0 0 0-3.81-4`,key:`1b0z45`}],[`path`,{d:`M21 5a4 4 0 0 1-3.55 3.97`,key:`5cxbf6`}],[`path`,{d:`M22 13h-4`,key:`1jl80f`}],[`path`,{d:`M3 21a4 4 0 0 1 3.81-4`,key:`1fjd4g`}],[`path`,{d:`M3 5a4 4 0 0 0 3.55 3.97`,key:`1d7oge`}],[`path`,{d:`M6 13H2`,key:`82j7cp`}],[`path`,{d:`m8 2 1.88 1.88`,key:`fmnt4t`}],[`path`,{d:`M9 7.13V6a3 3 0 1 1 6 0v1.13`,key:`1vgav8`}]]},gt.node,_t=xe(gt)})))()}var L;function yt(){return(yt=e((()=>{vt(),ye(),L=y(b)({as:_t})})))()}var R,bt,xt,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=e((()=>{R=t(),Ze(),C(),pe(),te(),me(),m(),oe(),ne(),ae(),v(),Re(),bt=h(),xt=({count:e,focused:t,index:n,label:r,max:i,separator:a})=>{let o=e-1===n;return(0,bt.jsxs)(`span`,{style:{marginInlineEnd:`var(--gap)`},children:[r,(!l(i)||e<i)&&t||!o?a:null]})},St=e=>p(e?.label)?e.label:e?.query??``,Ct=(e,t,n)=>e.length?t.map(t=>{if(`items`in t){let r=t.items.filter(t=>{if(`query`in t)return p(t.query)&&n(t.query,e);if(p(t.label))return p(t.label)&&n(t.label,e)});if(r.length)return{...t,items:r}}else if(`query`in t){if(p(t.query)&&n(t.query,e))return t}else if(p(t.label)&&p(t.label)&&n(t.label,e))return t}).filter(Boolean):t,[wt,Tt]=he({name:`AutocompleteContext`}),Et=(e={})=>{let{t}=fe(`autocomplete`),{props:{id:a,ref:s,name:te,allowCustomValue:u=!1,closeOnChange:ne=!1,multiple:ie=!1,closeOnSelect:ae=!ie,defaultInputValue:oe,defaultValue:f=ie?[]:``,disabled:m,emptyMessage:pe=t(`No results found`),filter:h=Ct,focusOnClear:me=!0,inputValue:he,items:g=[],matcher:_=ue,max:v,openOnChange:_e=!0,openOnClick:ve=!0,openOnFocus:y=!0,placeholder:ye,readOnly:b,render:be=xt,required:xe,separator:Se=`,`,value:x,onChange:Ce,onInputChange:we,...Te},ariaProps:Ee,dataProps:S,eventProps:De}=Le(e),Oe=(0,R.useRef)(null),ke=(0,R.useRef)(null),Ae=(0,R.useRef)(null),je=(0,R.useRef)(!1),C=(0,R.useMemo)(()=>{let e={};return g.forEach(t=>{`items`in t?t.items.forEach(t=>{t.value??=p(t.label)?t.label:void 0,ce(t.value)||(e[t.value]=t)}):(t.value??=p(t.label)?t.label:void 0,ce(t.value)||(e[t.value]=t))}),e},[g]),[Ne,Pe]=(0,R.useState)(!1),[w,T]=Me({defaultValue:f,value:x,onChange:Ce}),[E,D]=Me({defaultValue:oe??St(p(w)?C[w]:void 0),value:he,onChange:we}),Fe=(0,R.useCallback)(e=>{if(T(t=>c(t)?t.includes(e)?t.filter(t=>t!==e):!l(v)||t.length<v?[...t,e]:t:e),c(w))D(``);else{let t=C[e];D(St(t))}},[v,D,T,w,C]),{activeDescendant:Ie,descendants:O,interactive:k,open:A,getContentProps:Re,getSeparatorProps:ze,getTriggerProps:Be,popoverProps:Ve,onActiveDescendant:He,onClose:j,onOpen:Ue,onOpenWithActiveDescendant:M,onSelect:N}=$e({closeOnSelect:ae,disabled:m,initialFocusValue:c(w)?w[0]:w,openOnClick:!1,openOnEnter:!1,openOnSpace:!1,readOnly:b,selectFocusRef:Ae,selectOnSpace:!1,onChange:Fe,...Ee,...S,...De,...Te}),P=(0,R.useMemo)(()=>g.length?h(E,g,_):[],[h,E,g,_]),F=(0,R.useMemo)(()=>P.length?P:[{"data-empty":``,label:pe}],[P,pe]),We=(0,R.useMemo)(()=>!F.filter(({hidden:e})=>!e).length,[F]),Ge=(0,R.useMemo)(()=>{if(!c(w))return null;let e=w.length;return w.map((t,n)=>{let r=C[t]??{label:t,value:t},i=be({count:e,focused:Ne,index:n,max:v,separator:Se,onClear:e=>{e?.preventDefault(),e?.stopPropagation(),r.value&&Fe(r.value)},...r});return(0,R.isValidElement)(i)?(0,R.cloneElement)(i,{...i.props,key:n}):i})},[Ne,v,Fe,be,Se,w,C]),Ke=c(w)&&!!w.length,qe=(0,R.useCallback)(e=>{if(c(w)&&w.length===v)return;r(ne,e)?j():r(_e,e)&&Ue(),Ie.current=null;let t=e.target.value;D(t),!(t.length||c(w))&&T(``)},[Ie,ne,v,j,Ue,_e,D,T,w]),Je=(0,R.useCallback)(e=>{if(m||de(e))return;let t=ee(e.target).value;re(e,{Backspace:e=>{c(w)&&(t.length||(e.preventDefault(),T(e=>e.slice(0,-1))))},Enter:e=>{if(!A||!t.length||Ie.current)return;let n=P[0];if(n)e.preventDefault(),`items`in n?N(n.items[0]?.value):N(n.value);else{if(!u||!c(w))return;e.preventDefault(),N(t)}}},{preventDefault:!1})},[Ie,u,m,P,N,A,T,w]),Ye=(0,R.useCallback)(()=>{k&&(je.current=!0,Ae.current?.focus(),ve&&M(O.enabledFirstValue))},[O,k,M,ve]),Xe=(0,R.useCallback)(e=>{y&&(e.preventDefault(),e.stopPropagation())},[y]),Ze=(0,R.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),Pe(!0),y&&!je.current&&M(O.enabledFirstValue),je.current=!1},[y,M,O.enabledFirstValue]),Qe=(0,R.useCallback)(e=>{if(o(Oe.current,e.relatedTarget)||o(ke.current,e.relatedTarget))e.preventDefault();else if(Pe(!1),c(w))D(``);else if(u)E&&T(E);else{let e=p(w)?C[w]:void 0;D(St(e))}},[u,E,D,T,w,C]),et=(0,R.useCallback)(()=>{k&&(T(e=>c(e)?[]:``),D(``),me&&Ae.current?.focus())},[me,k,D,T]);ge(()=>{c(x)||D(St(p(x)?C[x]:void 0))},[x]);let tt=(0,R.useCallback)(e=>({...S,...e}),[S]),nt=(0,R.useCallback)(({ref:e,...t}={})=>Be({ref:le(e,Oe),tabIndex:-1,...t,onClick:d(t.onClick,Ye)}),[Be,Ye]),rt=(0,R.useCallback)((e={})=>({id:a,ref:le(e.ref,s,Ae),name:te,style:{...!Ne&&c(w)&&w.length?se.style:{},...e.style},"data-max":n(c(w)&&l(v)&&w.length>=v),autoCapitalize:`off`,autoComplete:`off`,autoCorrect:`off`,disabled:m,placeholder:Ke?void 0:ye,readOnly:b,required:xe,spellCheck:!1,value:E,...S,...e,onBlur:d(e.onBlur,Qe),onChange:d(e.onChange,qe),onFocus:d(e.onFocus,Ze),onKeyDown:d(e.onKeyDown,Je),onMouseDown:d(e.onMouseDown,Xe)}),[S,m,Ne,Ke,a,E,v,te,Qe,Ze,qe,Je,Xe,ye,b,s,xe,w]),it=(0,R.useCallback)(({ref:e,...t}={})=>Re({ref:le(e,ke),hidden:We,...t}),[We,Re]),at=(0,R.useCallback)(e=>({...S,...e}),[S]);return{children:Ge,descendants:O,inputValue:E,interactive:k,items:F,max:v,open:A,setInputValue:D,setValue:T,value:w,valueMap:C,getClearIconProps:(0,R.useCallback)((e={})=>at({"aria-disabled":i(!k),"aria-label":t(`Clear value`),role:`button`,tabIndex:k?0:-1,...e,onClick:d(e.onClick,et),onKeyDown:d(e.onKeyDown,e=>re(e,{Enter:et,Space:et}))}),[at,k,et,t]),getContentProps:it,getFieldProps:nt,getIconProps:at,getInputProps:rt,getRootProps:tt,getSeparatorProps:ze,popoverProps:Ve,onActiveDescendant:He,onChange:Fe,onClose:j,onInputChange:qe,onOpen:Ue,onSelect:N}},Dt=({children:e,closeOnSelect:t,disabled:n,hidden:r,value:i,...a}={})=>{let{max:o,value:s}=Tt();i??=p(e)?e:void 0;let ee=c(s)?!ce(i)&&s.includes(i):s===i,te=l(o)&&c(s)&&s.length>=o,{getIndicatorProps:u,getItemProps:d}=tt({children:e,closeOnSelect:t,disabled:n||r||te&&!ee,hidden:r,selected:ee,value:i,...a});return{getIndicatorProps:u,getOptionProps:(0,R.useCallback)((e={})=>d(e),[d])}}})))()}var z,B,kt,At,jt,Mt,V,Nt,H,Pt,Ft,It,Lt,Rt,U,W,zt,Bt;function Vt(){return(Vt=e((()=>{z=t(),ve(),ie(),g(),Ze(),Be(),Se(),Ce(),Oe(),Ae(),M(),Ue(),Ge(),He(),w(),nt(),Ot(),B=h(),{ComponentContext:kt,PropsContext:At,useComponentContext:jt,usePropsContext:Mt,withContext:V,withProvider:Nt}=_e(`autocomplete`,rt),H=Nt(e=>{let[t,{className:n,css:r,colorScheme:i,animationScheme:a=`block-start`,children:o,clearable:s=!0,clearIcon:te=(0,B.jsx)(je,{}),duration:l,emptyIcon:u,errorBorderColor:d,focusBorderColor:ne,icon:re,items:ie,contentProps:ae,elementProps:oe,emptyProps:se,groupProps:ce,iconProps:le,inputProps:ue,optionProps:p,rootProps:de,...m}]=ze(e),fe=E(m),pe=(0,z.useMemo)(()=>ie||Ke(o,{Group:U,Label:Rt,Option:W}),[ie,o]),{children:h,descendants:me,items:he,max:g,value:_,getClearIconProps:ge,getContentProps:v,getFieldProps:_e,getIconProps:ve,getInputProps:y,getRootProps:ye,getSeparatorProps:b,popoverProps:be,onActiveDescendant:xe,onClose:Se,onSelect:x}=Et({items:pe,...m,...fe}),Ce=(0,z.useMemo)(()=>({animationScheme:a,duration:l,...be}),[a,l,be]),we=(0,z.useMemo)(()=>Je(he,{Empty:zt,Group:U,Option:W}),[he]),Te=We({errorBorderColor:d,focusBorderColor:ne}),Ee=(0,z.useMemo)(()=>({onActiveDescendant:xe,onClose:Se,onSelect:x}),[xe,Se,x]),S=(0,z.useMemo)(()=>({max:g,value:_}),[_,g]),De=(0,z.useMemo)(()=>({emptyIcon:u,emptyProps:se,getInputProps:y,getSeparatorProps:b,groupProps:ce,inputProps:ue,optionProps:p}),[u,se,y,b,ce,ue,p]),Oe=c(_)?!!_.length:!!_;return(0,B.jsx)(Xe,{value:me,children:(0,B.jsx)(et,{value:Ee,children:(0,B.jsx)(wt,{value:S,children:(0,B.jsx)(kt,{value:De,children:(0,B.jsxs)(T,{...Ce,children:[(0,B.jsxs)(F,{colorScheme:i,...f({className:n,css:r},ye(t),de)(),children:[(0,B.jsx)(Ne,{children:(0,B.jsx)(Pt,{..._e({...Te}),children:h})}),(0,B.jsx)(P,{clickable:s&&Oe,...oe,children:s&&Oe?(0,B.jsx)(It,{icon:te,...ge(le)}):(0,B.jsx)(It,{icon:re,...ve(le)})})]}),(0,B.jsx)(Lt,{...ee(v(ee(ae))),children:we})]})})})})})},`root`)(e=>{let t=Ve();return f(t,e)()}),Pt=V(`div`,`field`)({"data-group-propagate":``},({children:e,...t})=>{let{getInputProps:n,inputProps:r}=jt();return{...t,children:(0,B.jsxs)(B.Fragment,{children:[e,(0,B.jsx)(Ft,{...n(r)})]})}}),Ft=V(`input`,`input`)(),It=V(`div`,`icon`)(void 0,({children:e,icon:t,...n})=>({children:t||e||(0,B.jsx)(we,{}),...n})),Lt=V(Pe,`content`)(),Rt=V(`span`,`label`)(void 0,e=>{let{getLabelProps:t}=Ye();return t(e)}),U=V(({children:e,label:t,labelProps:n,...r})=>{let{groupProps:i}=jt(),{getGroupProps:a,getLabelProps:o}=qe(f(i,r)()),s=(0,z.useMemo)(()=>({getLabelProps:o}),[o]);return(0,B.jsx)(Qe,{value:s,children:(0,B.jsxs)(_.div,{...a(),children:[t?(0,B.jsx)(Rt,{...n,children:t}):null,e]})})},`group`)(),W=V(({children:e,icon:t,...n})=>{let{optionProps:{icon:r,...i}={}}=jt(),{getIndicatorProps:a,getOptionProps:o}=Dt(f(i,n)());return(0,B.jsxs)(_.div,{...o(),children:[(0,B.jsx)(Bt,{...a(),children:t??r??(0,B.jsx)(x,{})}),e]})},`option`)(),zt=V(({children:e,icon:t,...n})=>{let{emptyIcon:r,emptyProps:i}=jt();return(0,B.jsxs)(_.div,{...f(i,n)(),children:[(0,B.jsx)(Bt,{children:t??r??(0,B.jsx)(ke,{})}),e]})},`empty`)(),Bt=V(`div`,`indicator`)()})))()}var G,K,Ht,q,J,Y,X,Z,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,Q,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,$,wn;function Tn(){return(Tn=e((()=>{G=t(),pt(),dt(),Vt(),a(),ne(),it(),Ie(),k(),ot(),yt(),Te(),S(),M(),N(),Ue(),st(),lt(),D(),K=h(),Ht={component:H,title:`Components / Autocomplete`},q=()=>(0,K.jsxs)(H,{placeholder:`Select a digimon`,children:[(0,K.jsx)(W,{value:`アグモン`,children:`アグモン`}),(0,K.jsx)(W,{value:`ガブモン`,children:`ガブモン`}),(0,K.jsx)(W,{value:`テントモン`,children:`テントモン`}),(0,K.jsx)(W,{value:`ピヨモン`,children:`ピヨモン`}),(0,K.jsx)(W,{value:`ゴマモン`,children:`ゴマモン`}),(0,K.jsx)(W,{value:`パルモン`,children:`パルモン`}),(0,K.jsx)(W,{value:`パタモン`,children:`パタモン`}),(0,K.jsx)(W,{value:`テイルモン`,children:`テイルモン`})]}),J=()=>(0,K.jsxs)(H,{placeholder:`Select a digimon`,children:[(0,K.jsxs)(U,{children:[(0,K.jsx)(Rt,{children:`成長期`}),(0,K.jsx)(W,{value:`アグモン`,children:`アグモン`}),(0,K.jsx)(W,{value:`ガブモン`,children:`ガブモン`}),(0,K.jsx)(W,{value:`テントモン`,children:`テントモン`}),(0,K.jsx)(W,{value:`ピヨモン`,children:`ピヨモン`}),(0,K.jsx)(W,{value:`ゴマモン`,children:`ゴマモン`}),(0,K.jsx)(W,{value:`パルモン`,children:`パルモン`}),(0,K.jsx)(W,{value:`パタモン`,children:`パタモン`}),(0,K.jsx)(W,{value:`テイルモン`,children:`テイルモン`})]}),(0,K.jsxs)(U,{label:`成熟期`,children:[(0,K.jsx)(W,{value:`グレイモン`,children:`グレイモン`}),(0,K.jsx)(W,{value:`ガルルモン`,children:`ガルルモン`}),(0,K.jsx)(W,{value:`カブテリモン`,children:`カブテリモン`}),(0,K.jsx)(W,{value:`バードラモン`,children:`バードラモン`}),(0,K.jsx)(W,{value:`イッカクモン`,children:`イッカクモン`}),(0,K.jsx)(W,{value:`トグモン`,children:`トグモン`}),(0,K.jsx)(W,{value:`エンジェモン`,children:`エンジェモン`})]}),(0,K.jsxs)(U,{label:`完全体`,children:[(0,K.jsx)(W,{value:`メタルグレイモン`,children:`メタルグレイモン`}),(0,K.jsx)(W,{value:`ワーガルルモン`,children:`ワーガルルモン`}),(0,K.jsx)(W,{value:`アトラーカブテリモン`,children:`アトラーカブテリモン`}),(0,K.jsx)(W,{value:`ガルダモン`,children:`ガルダモン`}),(0,K.jsx)(W,{value:`ズドモン`,children:`ズドモン`}),(0,K.jsx)(W,{value:`リリモン`,children:`リリモン`}),(0,K.jsx)(W,{value:`ホーリーエンジェモン`,children:`ホーリーエンジェモン`}),(0,K.jsx)(W,{value:`エンジェウーモン`,children:`エンジェウーモン`})]}),(0,K.jsxs)(U,{label:`究極体`,children:[(0,K.jsx)(W,{value:`ウォーグレイモン`,children:`ウォーグレイモン`}),(0,K.jsx)(W,{value:`メタルガルルモン`,children:`メタルガルルモン`}),(0,K.jsx)(W,{value:`ヘラクルカブテリモン`,children:`ヘラクルカブテリモン`}),(0,K.jsx)(W,{value:`ホウオウモン`,children:`ホウオウモン`}),(0,K.jsx)(W,{value:`ヴァイクモン`,children:`ヴァイクモン`}),(0,K.jsx)(W,{value:`ロゼモン`,children:`ロゼモン`}),(0,K.jsx)(W,{value:`ゴッドドラモン`,children:`ゴッドドラモン`}),(0,K.jsx)(W,{value:`ホーリードラモン`,children:`ホーリードラモン`})]})]}),Y=()=>{let e=(0,G.useMemo)(()=>[{label:`オメガモン`,value:`オメガモン`},{label:`ディアボロモン`,value:`ディアボロモン`},{items:[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],label:`成長期`},{items:[{label:`グレイモン`,value:`グレイモン`},{label:`ガルルモン`,value:`ガルルモン`},{label:`カブテリモン`,value:`カブテリモン`},{label:`バードラモン`,value:`バードラモン`},{label:`イッカクモン`,value:`イッカクモン`},{label:`トグモン`,value:`トグモン`},{label:`エンジェモン`,value:`エンジェモン`}],label:`成熟期`},{items:[{label:`メタルグレイモン`,value:`メタルグレイモン`},{label:`ワーガルルモン`,value:`ワーガルルモン`},{label:`アトラーカブテリモン`,value:`アトラーカブテリモン`},{label:`ガルダモン`,value:`ガルダモン`},{label:`ズドモン`,value:`ズドモン`},{label:`リリモン`,value:`リリモン`},{label:`ホーリーエンジェモン`,value:`ホーリーエンジェモン`},{label:`エンジェウーモン`,value:`エンジェウーモン`}],label:`完全体`},{items:[{label:`ウォーグレイモン`,value:`ウォーグレイモン`},{label:`メタルガルルモン`,value:`メタルガルルモン`},{label:`ヘラクルカブテリモン`,value:`ヘラクルカブテリモン`},{label:`ホウオウモン`,value:`ホウオウモン`},{label:`ヴァイクモン`,value:`ヴァイクモン`},{label:`ロゼモン`,value:`ロゼモン`},{label:`ゴッドドラモン`,value:`ゴッドドラモン`},{label:`ホーリードラモン`,value:`ホーリードラモン`}],label:`究極体`}],[]);return(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})},X=()=>{let e=(0,G.useMemo)(()=>[{label:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Fe,{as:`span`,flex:`1`,children:`アグモン`}),(0,K.jsx)(De,{fontSize:`lg`})]}),query:`agumon アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})},Z=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(ft,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:s,children:(t,n,r)=>(0,K.jsx)(H,{colorScheme:n,variant:t,items:e,placeholder:u(t)},r)})},Ut=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(ft,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(t,n,r)=>(0,K.jsx)(H,{size:t,variant:n,items:e,placeholder:`Size (${t})`},r)})},Wt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{defaultValue:`アグモン`,items:e,placeholder:`Select a digimon`})},Gt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{defaultInputValue:`モン`,items:e,openOnFocus:!0,placeholder:`Select a digimon`})},Kt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,multiple:!0,placeholder:`Select a digimon`})},qt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,max:3,multiple:!0,placeholder:`Select a digimon`})},Jt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,multiple:!0,placeholder:`Select a digimon`,separator:`;`})},Yt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,offset:[16,16],placeholder:`Select a digimon`})},Xt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{gutter:32,items:e,placeholder:`Select a digimon`})},Zt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{animationScheme:`inline-start`,items:e,placeholder:`Select a digimon`})},Qt=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{animationScheme:`inline-start`,items:e,placeholder:`Select a digimon`,placement:`center-end`,rootProps:{w:`xs`}})},$t=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(at,{minH:`200dvh`,w:`full`,children:(0,K.jsx)(H,{blockScrollOnMount:!0,items:e,placeholder:`Select a digimon`})})},en=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{allowCustomValue:!0,items:e,placeholder:`Select a digimon`,onChange:e=>console.log(`value:`,e)})},tn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`Select a digimon`})},nn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{closeOnChange:e=>!e.target.value.length,items:e,openOnFocus:!1,placeholder:`Select a digimon`})},rn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(at,{minH:`200dvh`,w:`full`,children:(0,K.jsx)(H,{closeOnScroll:!0,items:e,placeholder:`Select a digimon`})})},an=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,openOnFocus:!1,placeholder:`Select a digimon`})},on=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,openOnClick:!1,placeholder:`Select a digimon`})},sn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{defaultValue:`アグモン`,focusOnClear:!1,items:e,placeholder:`Select a digimon`})},cn=()=>{let e=(0,G.useMemo)(()=>[{closeOnSelect:!0,label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{closeOnSelect:!1,items:e,placeholder:`Select a digimon`})},ln=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{closeOnBlur:!1,items:e,placeholder:`Select a digimon`})},Q=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{closeOnEsc:!1,items:e,placeholder:`Select a digimon`})},un=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{clearable:!1,items:e,placeholder:`Select a digimon`})},dn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{disabled:!0,label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})},fn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsx)(H,{variant:t,disabled:!0,items:e,placeholder:u(t)},n)}),(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsxs)(F,{variant:t,disabled:!0,children:[(0,K.jsx)(j,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:u(t)})]},n)}),(0,K.jsx)(A,{disabled:!0,label:`Who is your favorite digimon?`,children:(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})})]})},pn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsx)(H,{variant:t,items:e,placeholder:u(t),readOnly:!0},n)}),(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsxs)(F,{variant:t,readOnly:!0,children:[(0,K.jsx)(j,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:u(t)})]},n)}),(0,K.jsx)(A,{label:`Who is your favorite digimon?`,readOnly:!0,children:(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})})]})},mn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsx)(H,{variant:t,invalid:!0,items:e,placeholder:u(t)},n)}),(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsxs)(F,{variant:t,invalid:!0,children:[(0,K.jsx)(j,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:u(t)})]},n)}),(0,K.jsx)(A,{errorMessage:`This is required.`,invalid:!0,label:`Who is your favorite digimon?`,children:(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})})]})},hn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsxs)(F,{variant:t,children:[(0,K.jsx)(j,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})]},n)})},gn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(I,{each:[`outline`,`filled`,`flushed`],children:(t,n)=>(0,K.jsxs)(F,{variant:t,children:[(0,K.jsx)(P,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`})]},n)})},_n=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(H,{items:e,placeholder:`Default border color`}),(0,K.jsx)(H,{focusBorderColor:`green.500`,items:e,placeholder:`Custom border color`}),(0,K.jsxs)(F,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,K.jsx)(P,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:`Custom border color`})]}),(0,K.jsx)(H,{errorBorderColor:`orange.500`,invalid:!0,items:e,placeholder:`Custom border color`}),(0,K.jsxs)(F,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,K.jsx)(j,{children:(0,K.jsx)(L,{})}),(0,K.jsx)(H,{items:e,placeholder:`Custom border color`})]})]})},vn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{emptyMessage:`You just hit a route that doesn't exist... the sadness.😢`,items:e,placeholder:`Select a digimon`})},yn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`,iconProps:{color:`orange`}}),(0,K.jsx)(H,{icon:(0,K.jsx)(Ee,{}),items:e,placeholder:`Select a digimon`})]})},bn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,placeholder:`Select a digimon`,optionProps:{icon:(0,K.jsx)(L,{})}})},xn=()=>{let e=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:e,multiple:!0,placeholder:`Select a character`,render:({label:e,onClear:t})=>(0,K.jsx)(ut,{size:`sm`,me:`{gap}`,onClose:t,children:e})})},Sn=()=>{let[e,t]=(0,G.useState)(`アグモン`),n=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsx)(H,{items:n,placeholder:`Select a digimon`,value:e,onChange:t})},Cn=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=mt(),r=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(ct,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,K.jsx)(A,{errorMessage:t.autocomplete?.message,invalid:!!t.autocomplete,label:`Who is your favorite digimon?`,children:(0,K.jsx)(ht,{name:`autocomplete`,control:e,render:({field:e})=>(0,K.jsx)(H,{items:r,placeholder:`Select a digimon`,...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,K.jsx)(O,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=mt({defaultValues:{autocomplete:`アグモン`}}),r=(0,G.useMemo)(()=>[{label:`アグモン`,value:`アグモン`},{label:`ガブモン`,value:`ガブモン`},{label:`テントモン`,value:`テントモン`},{label:`ピヨモン`,value:`ピヨモン`},{label:`ゴマモン`,value:`ゴマモン`},{label:`パルモン`,value:`パルモン`},{label:`パタモン`,value:`パタモン`},{label:`テイルモン`,value:`テイルモン`}],[]);return(0,K.jsxs)(ct,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,K.jsx)(A,{errorMessage:t.autocomplete?.message,invalid:!!t.autocomplete,label:`Who is your favorite digimon?`,children:(0,K.jsx)(ht,{name:`autocomplete`,control:e,render:({field:e})=>(0,K.jsx)(H,{items:r,placeholder:`Select a digimon`,...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,K.jsx)(O,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},wn=`Basic.Group.Items.ItemsWithQuery.Variant.Size.DefaultValue.DefaultInputValue.Multiple.Max.Separator.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.AllowCustomValue.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledFocusOnClear.DisabledCloseOnSelect.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledClearable.DisabledOption.Disabled.ReadOnly.Invalid.Addon.Element.BorderColor.CustomEmptyMessage.CustomIcon.CustomOptionIcon.CustomRender.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Autocomplete.Item[]>(() => [{
    label: <>
            <Text as="span" flex="1">
              アグモン
            </Text>
            <HeartIcon fontSize="lg" />
          </>,
    query: "agumon アグモン",
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ut.parameters?.docs?.source}}},Wt.parameters={...Wt.parameters,docs:{...Wt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Wt.parameters?.docs?.source}}},Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Gt.parameters?.docs?.source}}},Kt.parameters={...Kt.parameters,docs:{...Kt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Kt.parameters?.docs?.source}}},qt.parameters={...qt.parameters,docs:{...qt.parameters?.docs,source:{originalSource:`() => {
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
}`,...qt.parameters?.docs?.source}}},Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Jt.parameters?.docs?.source}}},Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Yt.parameters?.docs?.source}}},Xt.parameters={...Xt.parameters,docs:{...Xt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Xt.parameters?.docs?.source}}},Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Zt.parameters?.docs?.source}}},Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qt.parameters?.docs?.source}}},$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`() => {
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
}`,...$t.parameters?.docs?.source}}},en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`() => {
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
}`,...en.parameters?.docs?.source}}},tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`() => {
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
}`,...tn.parameters?.docs?.source}}},nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`() => {
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
}`,...nn.parameters?.docs?.source}}},rn.parameters={...rn.parameters,docs:{...rn.parameters?.docs,source:{originalSource:`() => {
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
}`,...rn.parameters?.docs?.source}}},an.parameters={...an.parameters,docs:{...an.parameters?.docs,source:{originalSource:`() => {
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
}`,...an.parameters?.docs?.source}}},on.parameters={...on.parameters,docs:{...on.parameters?.docs,source:{originalSource:`() => {
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
}`,...on.parameters?.docs?.source}}},sn.parameters={...sn.parameters,docs:{...sn.parameters?.docs,source:{originalSource:`() => {
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
}`,...sn.parameters?.docs?.source}}},cn.parameters={...cn.parameters,docs:{...cn.parameters?.docs,source:{originalSource:`() => {
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
}`,...cn.parameters?.docs?.source}}},ln.parameters={...ln.parameters,docs:{...ln.parameters?.docs,source:{originalSource:`() => {
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
}`,...ln.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},un.parameters={...un.parameters,docs:{...un.parameters?.docs,source:{originalSource:`() => {
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
}`,...un.parameters?.docs?.source}}},dn.parameters={...dn.parameters,docs:{...dn.parameters?.docs,source:{originalSource:`() => {
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
}`,...dn.parameters?.docs?.source}}},fn.parameters={...fn.parameters,docs:{...fn.parameters?.docs,source:{originalSource:`() => {
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
}`,...fn.parameters?.docs?.source}}},pn.parameters={...pn.parameters,docs:{...pn.parameters?.docs,source:{originalSource:`() => {
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
}`,...pn.parameters?.docs?.source}}},mn.parameters={...mn.parameters,docs:{...mn.parameters?.docs,source:{originalSource:`() => {
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
}`,...mn.parameters?.docs?.source}}},hn.parameters={...hn.parameters,docs:{...hn.parameters?.docs,source:{originalSource:`() => {
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
}`,...hn.parameters?.docs?.source}}},gn.parameters={...gn.parameters,docs:{...gn.parameters?.docs,source:{originalSource:`() => {
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
}`,...gn.parameters?.docs?.source}}},_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`() => {
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
}`,..._n.parameters?.docs?.source}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`() => {
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
}`,...vn.parameters?.docs?.source}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`() => {
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
}`,...yn.parameters?.docs?.source}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`() => {
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
}`,...bn.parameters?.docs?.source}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`() => {
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
}`,...xn.parameters?.docs?.source}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Sn.parameters?.docs?.source}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`() => {
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
}`,...Cn.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Tn();export{hn as Addon,en as AllowCustomValue,Zt as AnimationScheme,q as Basic,$t as BlockScrollOnMount,_n as BorderColor,nn as CloseOnChange,rn as CloseOnScroll,Sn as CustomControl,vn as CustomEmptyMessage,yn as CustomIcon,bn as CustomOptionIcon,xn as CustomRender,Gt as DefaultInputValue,Wt as DefaultValue,fn as Disabled,un as DisabledClearable,ln as DisabledCloseOnBlur,Q as DisabledCloseOnEsc,cn as DisabledCloseOnSelect,sn as DisabledFocusOnClear,on as DisabledOpenOnClick,an as DisabledOpenOnFocus,dn as DisabledOption,gn as Element,J as Group,Xt as Gutter,mn as Invalid,Y as Items,X as ItemsWithQuery,qt as Max,Kt as Multiple,Yt as Offset,tn as OpenOnChange,Qt as Placement,Cn as ReactHookForm,$ as ReactHookFormDefaultValue,pn as ReadOnly,Jt as Separator,Ut as Size,Z as Variant,wn as __namedExportsOrder,Ht as default};