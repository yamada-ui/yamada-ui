import{n as Xl,o as Yl,I as $l,c as Jl,G as Zl,r as a,l as _,H as dl,i as b,J as tl,k as kl,K as ea,L as hl,a as Fl,M as Dl,N as la,m as bl,h as R,b as aa,O as na,e as oa,j as e,g as ta,X as ua,s as gl,T as ra,C as sa,P as V,V as Vl,Q as wl}from"./iframe-5QspZtQ-.js";import{P as El}from"./props-table-DAC1ISVp.js";import{u as Tl,C as ql}from"./index.esm-Cz3u5K4m.js";import{H as ca}from"./heart-icon-BnooxRzm.js";import{B as Hl}from"./box--AjZ-gTJ.js";import{F as y}from"./for-DDltKb5N.js";import{C as ia}from"./chevrons-down-icon-24te2IVD.js";import{T as ma}from"./tag-RdlQtCa2.js";import{u as pa,a as va,c as ba,b as da,C as ha,d as ga,e as fa,f as xa,g as Aa}from"./index-C3Uagu8x.js";import{a as Sa}from"./autocomplete.style-XjAwo22y.js";import{u as Gl}from"./index-xocwRrSJ.js";import{u as Ca,F as ae}from"./use-field-props-BSPmBEwJ.js";import{u as ja}from"./input-ClZ3yx_T.js";import{M as Oa}from"./minus-icon-PjXaoNbh.js";import{u as Ia}from"./group-OikBWKOl.js";import{u as Ma,P as Ra,a as ya,b as Pa}from"./popover-D5GdWkkL.js";import{u as ka}from"./use-input-border-DCrAv45g.js";import{I as P,a as fl,b as ne}from"./input-group-uzNQrJkv.js";import{C as Fa}from"./chevron-down-icon-qiahlFRr.js";import{C as Da}from"./check-icon-cbLoYFR9.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";import"./index-CMB5qptC.js";import"./index-Dfw32jWo.js";import"./menu.style-D3es7ApM.js";import"./native-select.style-Dcwb3p_X.js";import"./index-CVctQ1CM.js";import"./use-disclosure-CLRLHuYp.js";import"./index-BYvBzSg1.js";import"./use-breakpoint-chaUVSrh.js";import"./use-breakpoint-value-zlcrtcvs.js";import"./use-color-mode-value-BafFs7oa.js";import"./index-CcMovKZO.js";import"./index-BspX3WcN.js";import"./event-DtO76Igx.js";import"./slide-fade-BN9Loi7b.js";import"./transition-kYsA6Bti.js";import"./fade-scale-BMcVdBGu.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],Ba=Xl("bug",Ga),k=Yl($l)({as:Ba}),Va=({count:l,focused:n,index:u,label:s,max:m,separator:p})=>{const v=l-1===u;return e.jsxs("span",{style:{marginInlineEnd:"var(--gap)"},children:[s,(!tl(m)||l<m)&&n||!v?p:null]})},ge=l=>_(l?.label)?l.label:l?.query??"",wa=(l,n,u)=>l.length?n.map(s=>{if("items"in s){const m=s.items.filter(p=>{if("query"in p)return u(l,p.query);if(_(p.label))return u(l,p.label)});if(m.length)return{...s,items:m}}else if("query"in s){if(u(l,s.query))return s}else if(_(s.label)&&u(l,s.label))return s}).filter(Boolean):n,Ea=(l,n)=>n?.toLowerCase().includes(l.toLowerCase())??!1,[Ta,qa]=Jl({name:"AutocompleteContext"}),Ha=(l={})=>{const{t:n}=Zl("autocomplete"),{props:{id:u,ref:s,name:m,allowCustomValue:p=!1,closeOnChange:v=!1,multiple:x=!1,closeOnSelect:F=!x,defaultInputValue:N,defaultValue:w=x?[]:"",disabled:j,emptyMessage:E=n("No results found"),filter:T=wa,focusOnClear:q=!0,inputValue:rl,items:D=[],matcher:Q=Ea,max:f,openOnChange:U=!0,openOnFocus:G=!0,placeholder:X,readOnly:Y,render:oe=Va,required:te,separator:ue=",",value:B,onChange:re,onInputChange:se,...ce},ariaProps:ie,dataProps:A,eventProps:sl}=Ca(l),me=a.useRef(null),pe=a.useRef(null),H=a.useRef(null),S=a.useMemo(()=>{const o={};return D.forEach(c=>{"items"in c?c.items.forEach(h=>{h.value??=_(h.label)?h.label:void 0,dl(h.value)||(o[h.value]=h)}):(c.value??=_(c.label)?c.label:void 0,dl(c.value)||(o[c.value]=c))}),o},[D]),[W,$]=a.useState(!1),[i,d]=Gl({defaultValue:w,value:B,onChange:re}),[C,g]=Gl({defaultValue:N??ge(b(i)?void 0:S[i]),value:rl,onChange:se}),z=a.useCallback(o=>{if(d(c=>b(c)?c.includes(o)?c.filter(h=>h!==o):!tl(f)||c.length<f?[...c,o]:c:o),b(i))g("");else{const c=S[o];g(ge(c))}},[f,g,d,i,S]),{activeDescendant:L,descendants:J,interactive:O,open:Z,getContentProps:ve,getSeparatorProps:be,getTriggerProps:Al,onActiveDescendant:zl,onClose:cl,onOpen:il,onOpenWithActiveDescendant:Sl,onSelect:ee}=pa({closeOnSelect:F,disabled:j,initialFocusValue:b(i)?i[0]:i,openOnEnter:!1,openOnSpace:!1,readOnly:Y,selectFocusRef:H,selectOnSpace:!1,onChange:z,...ie,...A,...sl,...ce}),le=a.useMemo(()=>D.length?T(C,D,Q):[],[T,C,D,Q]),ml=a.useMemo(()=>le.length?le:[{"data-empty":"",label:E}],[le,E]),Cl=a.useMemo(()=>!ml.filter(({hidden:o})=>!o).length,[ml]),Ll=a.useMemo(()=>{if(!b(i))return null;const o=i.length;return i.map((c,h)=>{const I=S[c]??{label:c,value:c},he=oe({count:o,focused:W,index:h,max:f,separator:ue,onClear:Pl=>{Pl?.preventDefault(),Pl?.stopPropagation(),I.value&&z(I.value)},...I});return a.isValidElement(he)?a.cloneElement(he,{...he.props,key:h}):he})},[W,f,z,oe,ue,i,S]),jl=b(i)&&!!i.length,pl=a.useCallback(o=>{if(b(i)&&i.length===f)return;kl(v,o)?cl():kl(U,o)&&il(),L.current=null;const c=o.target.value;g(c),!(c.length||b(i))&&d("")},[L,v,f,cl,il,U,g,d,i]),Ol=a.useCallback(o=>{if(j||ea(o))return;const c=hl(o.target).value;Fl(o,{Backspace:h=>{b(i)&&(c.length||(h.preventDefault(),d(I=>I.slice(0,-1))))},Enter:h=>{if(!Z||!c.length||L.current)return;const I=le[0];if(I)h.preventDefault(),"items"in I?ee(I.items[0]?.value):ee(I.value);else{if(!p||!b(i))return;h.preventDefault(),ee(c)}}},{preventDefault:!1})},[L,p,j,le,ee,Z,d,i]),Il=a.useCallback(()=>{O&&H.current?.focus()},[O]),Ml=a.useCallback(o=>{G&&(o.preventDefault(),o.stopPropagation())},[G]),Rl=a.useCallback(o=>{o.preventDefault(),o.stopPropagation(),$(!0),G&&Sl(J.enabledFirstValue)},[G,Sl,J]),yl=a.useCallback(o=>{if($(!1),Dl(me.current,o.relatedTarget)||Dl(pe.current,o.relatedTarget))o.preventDefault();else if(b(i))g("");else if(p)C&&d(C);else{const c=S[i];g(ge(c))}},[p,C,g,d,i,S]),de=a.useCallback(()=>{O&&(d(o=>b(o)?[]:""),g(""),q&&H.current?.focus())},[q,O,g,d]);la(()=>{b(B)||g(ge(B?S[B]:void 0))},[B]);const Kl=a.useCallback(({ref:o,...c}={})=>({ref:bl(o,me),...A,...c}),[A]),_l=a.useCallback((o={})=>Al({tabIndex:-1,...o,onClick:R(o.onClick,Il)}),[Al,Il]),Nl=a.useCallback((o={})=>({id:u,ref:bl(o.ref,s,H),name:m,style:{...!W&&b(i)&&i.length?na.style:{},...o.style},"data-max":aa(b(i)&&tl(f)&&i.length>=f),autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",disabled:j,placeholder:jl?void 0:X,readOnly:Y,required:te,spellCheck:!1,value:C,...A,...o,onBlur:R(o.onBlur,yl),onChange:R(o.onChange,pl),onFocus:R(o.onFocus,Rl),onKeyDown:R(o.onKeyDown,Ol),onMouseDown:R(o.onMouseDown,Ml)}),[A,j,W,jl,u,C,f,m,yl,Rl,pl,Ol,Ml,X,Y,s,te,i]),Ql=a.useCallback(({ref:o,...c}={})=>ve({ref:bl(o,pe),hidden:Cl,...c}),[Cl,ve]),vl=a.useCallback(o=>({...A,...o}),[A]),Ul=a.useCallback((o={})=>vl({"aria-disabled":oa(!O),"aria-label":n("Clear value"),role:"button",tabIndex:O?0:-1,...o,onClick:R(o.onClick,de),onKeyDown:R(o.onKeyDown,c=>Fl(c,{Enter:de,Space:de}))}),[vl,O,de,n]);return{children:Ll,descendants:J,inputValue:C,interactive:O,items:ml,max:f,open:Z,setInputValue:g,setValue:d,value:i,valueMap:S,getClearIconProps:Ul,getContentProps:Ql,getFieldProps:_l,getIconProps:vl,getInputProps:Nl,getRootProps:Kl,getSeparatorProps:be,onActiveDescendant:zl,onChange:z,onClose:cl,onInputChange:pl,onOpen:il,onSelect:ee}},Wa=({children:l,closeOnSelect:n,disabled:u,hidden:s,value:m,...p}={})=>{const{max:v,value:x}=qa();m??=_(l)?l:void 0;const F=b(x)?!dl(m)&&x.includes(m):x===m,N=tl(v)&&b(x)&&x.length>=v,{getIndicatorProps:w,getItemProps:j}=va({children:l,closeOnSelect:n,disabled:u||s||N&&!F,hidden:s,selected:F,value:m,...p}),E=a.useCallback((T={})=>j(T),[j]);return{getIndicatorProps:w,getOptionProps:E}},{ComponentContext:za,useComponentContext:ul,withContext:M,withProvider:La}=ta("autocomplete",Sa),t=La(l=>{const[n,u]=Ia(l),[s,{className:m,css:p,colorScheme:v,children:x,clearable:F=!0,clearIcon:N=e.jsx(ua,{}),emptyIcon:w,errorBorderColor:j,focusBorderColor:E,icon:T,items:q,contentProps:rl,elementProps:D,emptyProps:Q,groupProps:f,iconProps:U,inputProps:G,optionProps:X,rootProps:Y,...oe}]=Ma(u,["disabled","open","defaultOpen","onOpen","onClose","openOnClick"]),te=a.useMemo(()=>q||ba(x,{Group:K,Label:xl,Option:r}),[q,x]),{children:ue,descendants:B,interactive:re,items:se,max:ce,open:ie,value:A,getClearIconProps:sl,getContentProps:me,getFieldProps:pe,getIconProps:H,getInputProps:S,getRootProps:W,getSeparatorProps:$,onActiveDescendant:i,onClose:d,onOpen:C,onSelect:g}=Ha({items:te,...oe}),z=a.useMemo(()=>({animationScheme:"block-start",autoFocus:!1,matchWidth:!0,...s,disabled:!re,open:ie,onClose:d,onOpen:C}),[re,d,C,ie,s]),L=a.useMemo(()=>da(se,{Empty:Qa,Group:K,Option:r}),[se]),J=ka({errorBorderColor:j,focusBorderColor:E}),O=a.useMemo(()=>({onActiveDescendant:i,onClose:d,onSelect:g}),[i,d,g]),Z=a.useMemo(()=>({max:ce,value:A}),[A,ce]),ve=a.useMemo(()=>({emptyIcon:w,emptyProps:Q,getInputProps:S,getSeparatorProps:$,groupProps:f,inputProps:G,optionProps:X}),[w,Q,S,$,f,G,X]),be=b(A)?!!A.length:!!A;return e.jsx(ha,{value:B,children:e.jsx(ga,{value:O,children:e.jsx(Ta,{value:Z,children:e.jsx(za,{value:ve,children:e.jsxs(Ra,{...z,children:[e.jsxs(P,{className:m,css:p,colorScheme:v,...W({...n,...Y}),children:[e.jsx(ya,{children:e.jsx(Ka,{...pe(J),children:ue})}),e.jsx(fl,{clickable:F&&be,...D,children:F&&be?e.jsx(Bl,{icon:N,...sl(U)}):e.jsx(Bl,{icon:T,...H(U)})})]}),e.jsx(Na,{...hl(me(hl(rl))),children:L})]})})})})})},"root")(l=>({...ja(),...l})),Ka=M("div","field")({"data-group-propagate":""},({children:l,...n})=>{const{getInputProps:u,inputProps:s}=ul();return{...n,children:e.jsxs(e.Fragment,{children:[l,e.jsx(_a,{...u(s)})]})}}),_a=M("input","input")(),Bl=M("div","icon")(void 0,({children:l,icon:n,...u})=>({children:n||l||e.jsx(Fa,{}),...u})),Na=M(Pa,"content")(),xl=M("span","label")(void 0,l=>{const{getLabelProps:n}=Aa();return n(l)}),K=M(({children:l,label:n,labelProps:u,...s})=>{const{groupProps:m}=ul(),{getGroupProps:p,getLabelProps:v}=fa({...m,...s}),x=a.useMemo(()=>({getLabelProps:v}),[v]);return e.jsx(xa,{value:x,children:e.jsxs(gl.div,{...p(),children:[n?e.jsx(xl,{...u,children:n}):null,l]})})},"group")(),r=M(({children:l,icon:n,...u})=>{const{optionProps:{icon:s,...m}={}}=ul(),{getIndicatorProps:p,getOptionProps:v}=Wa({...m,...u});return e.jsxs(gl.div,{...v(),children:[e.jsx(Wl,{...p(),children:n??s??e.jsx(Da,{})}),l]})},"option")(),Qa=M(({children:l,icon:n,...u})=>{const{emptyIcon:s,emptyProps:m}=ul();return e.jsxs(gl.div,{...m,...u,children:[e.jsx(Wl,{children:n??s??e.jsx(Oa,{})}),l]})},"empty")(),Wl=M("div","indicator")(),En={component:t,title:"Components / Autocomplete"},fe=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsx(r,{value:"アグモン",children:"アグモン"}),e.jsx(r,{value:"ガブモン",children:"ガブモン"}),e.jsx(r,{value:"テントモン",children:"テントモン"}),e.jsx(r,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(r,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(r,{value:"パルモン",children:"パルモン"}),e.jsx(r,{value:"パタモン",children:"パタモン"}),e.jsx(r,{value:"テイルモン",children:"テイルモン"})]}),xe=()=>e.jsxs(t,{placeholder:"Select a digimon",children:[e.jsxs(K,{children:[e.jsx(xl,{children:"成長期"}),e.jsx(r,{value:"アグモン",children:"アグモン"}),e.jsx(r,{value:"ガブモン",children:"ガブモン"}),e.jsx(r,{value:"テントモン",children:"テントモン"}),e.jsx(r,{value:"ピヨモン",children:"ピヨモン"}),e.jsx(r,{value:"ゴマモン",children:"ゴマモン"}),e.jsx(r,{value:"パルモン",children:"パルモン"}),e.jsx(r,{value:"パタモン",children:"パタモン"}),e.jsx(r,{value:"テイルモン",children:"テイルモン"})]}),e.jsxs(K,{label:"成熟期",children:[e.jsx(r,{value:"グレイモン",children:"グレイモン"}),e.jsx(r,{value:"ガルルモン",children:"ガルルモン"}),e.jsx(r,{value:"カブテリモン",children:"カブテリモン"}),e.jsx(r,{value:"バードラモン",children:"バードラモン"}),e.jsx(r,{value:"イッカクモン",children:"イッカクモン"}),e.jsx(r,{value:"トグモン",children:"トグモン"}),e.jsx(r,{value:"エンジェモン",children:"エンジェモン"})]}),e.jsxs(K,{label:"完全体",children:[e.jsx(r,{value:"メタルグレイモン",children:"メタルグレイモン"}),e.jsx(r,{value:"ワーガルルモン",children:"ワーガルルモン"}),e.jsx(r,{value:"アトラーカブテリモン",children:"アトラーカブテリモン"}),e.jsx(r,{value:"ガルダモン",children:"ガルダモン"}),e.jsx(r,{value:"ズドモン",children:"ズドモン"}),e.jsx(r,{value:"リリモン",children:"リリモン"}),e.jsx(r,{value:"ホーリーエンジェモン",children:"ホーリーエンジェモン"}),e.jsx(r,{value:"エンジェウーモン",children:"エンジェウーモン"})]}),e.jsxs(K,{label:"究極体",children:[e.jsx(r,{value:"ウォーグレイモン",children:"ウォーグレイモン"}),e.jsx(r,{value:"メタルガルルモン",children:"メタルガルルモン"}),e.jsx(r,{value:"ヘラクルカブテリモン",children:"ヘラクルカブテリモン"}),e.jsx(r,{value:"ホウオウモン",children:"ホウオウモン"}),e.jsx(r,{value:"ヴァイクモン",children:"ヴァイクモン"}),e.jsx(r,{value:"ロゼモン",children:"ロゼモン"}),e.jsx(r,{value:"ゴッドドラモン",children:"ゴッドドラモン"}),e.jsx(r,{value:"ホーリードラモン",children:"ホーリードラモン"})]})]}),Ae=()=>{const l=a.useMemo(()=>[{label:"オメガモン",value:"オメガモン"},{label:"ディアボロモン",value:"ディアボロモン"},{items:[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],label:"成長期"},{items:[{label:"グレイモン",value:"グレイモン"},{label:"ガルルモン",value:"ガルルモン"},{label:"カブテリモン",value:"カブテリモン"},{label:"バードラモン",value:"バードラモン"},{label:"イッカクモン",value:"イッカクモン"},{label:"トグモン",value:"トグモン"},{label:"エンジェモン",value:"エンジェモン"}],label:"成熟期"},{items:[{label:"メタルグレイモン",value:"メタルグレイモン"},{label:"ワーガルルモン",value:"ワーガルルモン"},{label:"アトラーカブテリモン",value:"アトラーカブテリモン"},{label:"ガルダモン",value:"ガルダモン"},{label:"ズドモン",value:"ズドモン"},{label:"リリモン",value:"リリモン"},{label:"ホーリーエンジェモン",value:"ホーリーエンジェモン"},{label:"エンジェウーモン",value:"エンジェウーモン"}],label:"完全体"},{items:[{label:"ウォーグレイモン",value:"ウォーグレイモン"},{label:"メタルガルルモン",value:"メタルガルルモン"},{label:"ヘラクルカブテリモン",value:"ヘラクルカブテリモン"},{label:"ホウオウモン",value:"ホウオウモン"},{label:"ヴァイクモン",value:"ヴァイクモン"},{label:"ロゼモン",value:"ロゼモン"},{label:"ゴッドドラモン",value:"ゴッドドラモン"},{label:"ホーリードラモン",value:"ホーリードラモン"}],label:"究極体"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Se=()=>{const l=a.useMemo(()=>[{label:e.jsxs(e.Fragment,{children:[e.jsx(ra,{as:"span",flex:"1",children:"アグモン"}),e.jsx(ca,{fontSize:"lg"})]}),query:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ce=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(El,{variant:"stack",columns:["outline","filled","flushed"],rows:sa,children:(n,u,s)=>e.jsx(t,{colorScheme:u,variant:n,items:l,placeholder:V(n)},s)})},je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(El,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,u,s)=>e.jsx(t,{size:n,variant:u,items:l,placeholder:`Size (${n})`},s)})},Oe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",items:l,placeholder:"Select a digimon"})},Ie=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultInputValue:"モン",items:l,openOnFocus:!0,placeholder:"Select a digimon"})},Me=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon"})},Re=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,max:3,multiple:!0,placeholder:"Select a digimon"})},ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a digimon",separator:";"})},Pe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,offset:[16,16],placeholder:"Select a digimon"})},ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{gutter:32,items:l,placeholder:"Select a digimon"})},Fe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon"})},De=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a digimon",placement:"center-end",rootProps:{w:"xs"}})},Ge=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Hl,{minH:"200dvh",w:"full",children:e.jsx(t,{blockScrollOnMount:!0,items:l,placeholder:"Select a digimon"})})},Be=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{allowCustomValue:!0,items:l,placeholder:"Select a digimon",onChange:n=>console.log("value:",n)})},Ve=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnChange:n=>n.target.value.length>1,openOnFocus:!1,placeholder:"Select a digimon"})},we=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnChange:n=>!n.target.value.length,items:l,openOnFocus:!1,placeholder:"Select a digimon"})},Ee=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(Hl,{minH:"200dvh",w:"full",children:e.jsx(t,{closeOnScroll:!0,items:l,placeholder:"Select a digimon"})})},Te=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnFocus:!1,placeholder:"Select a digimon"})},qe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,openOnClick:!1,placeholder:"Select a digimon"})},He=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{defaultValue:"アグモン",focusOnClear:!1,items:l,placeholder:"Select a digimon"})},We=()=>{const l=a.useMemo(()=>[{closeOnSelect:!0,label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnSelect:!1,items:l,placeholder:"Select a digimon"})},ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnBlur:!1,items:l,placeholder:"Select a digimon"})},Le=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{closeOnEsc:!1,items:l,placeholder:"Select a digimon"})},Ke=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{clearable:!1,items:l,placeholder:"Select a digimon"})},_e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{disabled:!0,label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon"})},Ne=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,disabled:!0,items:l,placeholder:V(n)},u)}),e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(P,{variant:n,disabled:!0,children:[e.jsx(ne,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:V(n)})]},u)}),e.jsx(ae,{disabled:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Qe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,items:l,placeholder:V(n),readOnly:!0},u)}),e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(P,{variant:n,readOnly:!0,children:[e.jsx(ne,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:V(n)})]},u)}),e.jsx(ae,{label:"Who is your favorite digimon?",readOnly:!0,children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Ue=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsx(t,{variant:n,invalid:!0,items:l,placeholder:V(n)},u)}),e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(P,{variant:n,invalid:!0,children:[e.jsx(ne,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:V(n)})]},u)}),e.jsx(ae,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite digimon?",children:e.jsx(t,{items:l,placeholder:"Select a digimon"})})]})},Xe=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(P,{variant:n,children:[e.jsx(ne,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},Ye=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(y,{each:["outline","filled","flushed"],children:(n,u)=>e.jsxs(P,{variant:n,children:[e.jsx(fl,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:"Select a digimon"})]},u)})},$e=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(P,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(fl,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(P,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(ne,{children:e.jsx(k,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]})]})},Je=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{emptyMessage:"You just hit a route that doesn't exist... the sadness.😢",items:l,placeholder:"Select a digimon"})},Ze=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Select a digimon",iconProps:{color:"orange"}}),e.jsx(t,{icon:e.jsx(ia,{}),items:l,placeholder:"Select a digimon"})]})},el=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,placeholder:"Select a digimon",optionProps:{icon:e.jsx(k,{})}})},ll=()=>{const l=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",render:({label:n,onClear:u})=>e.jsx(ma,{size:"sm",me:"{gap}",onClose:u,children:n})})},al=()=>{const[l,n]=a.useState("アグモン"),u=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]);return e.jsx(t,{items:u,placeholder:"Select a digimon",value:l,onChange:n})},nl=()=>{const{control:l,formState:{errors:n},handleSubmit:u}=Tl(),s=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),m=p=>console.log("submit:",p);return e.jsxs(Vl,{as:"form",onSubmit:u(m),children:[e.jsx(ae,{errorMessage:n.autocomplete?.message,invalid:!!n.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(ql,{name:"autocomplete",control:l,render:({field:p})=>e.jsx(t,{items:s,placeholder:"Select a digimon",...p}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(wl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ol=()=>{const l={autocomplete:"アグモン"},{control:n,formState:{errors:u},handleSubmit:s}=Tl({defaultValues:l}),m=a.useMemo(()=>[{label:"アグモン",value:"アグモン"},{label:"ガブモン",value:"ガブモン"},{label:"テントモン",value:"テントモン"},{label:"ピヨモン",value:"ピヨモン"},{label:"ゴマモン",value:"ゴマモン"},{label:"パルモン",value:"パルモン"},{label:"パタモン",value:"パタモン"},{label:"テイルモン",value:"テイルモン"}],[]),p=v=>console.log("submit:",v);return e.jsxs(Vl,{as:"form",onSubmit:s(p),children:[e.jsx(ae,{errorMessage:u.autocomplete?.message,invalid:!!u.autocomplete,label:"Who is your favorite digimon?",children:e.jsx(ql,{name:"autocomplete",control:n,render:({field:v})=>e.jsx(t,{items:m,placeholder:"Select a digimon",...v}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(wl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
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
}`,...fe.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...xe.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ae.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Autocomplete.Root key={key} colorScheme={row} variant={column} items={items} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
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
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Autocomplete.Root key={key} size={column} variant={row} items={items} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
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
  return <Autocomplete.Root defaultValue="アグモン" items={items} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root defaultInputValue="モン" items={items} openOnFocus placeholder="Select a digimon" />;
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
  return <Autocomplete.Root items={items} multiple placeholder="Select a digimon" />;
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
  return <Autocomplete.Root items={items} max={3} multiple placeholder="Select a digimon" />;
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
  return <Autocomplete.Root items={items} multiple placeholder="Select a digimon" separator=";" />;
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
  return <Autocomplete.Root items={items} offset={[16, 16]} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root gutter={32} items={items} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root animationScheme="inline-start" items={items} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root animationScheme="inline-start" items={items} placeholder="Select a digimon" placement="center-end" rootProps={{
    w: "xs"
  }} />;
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
  return <Box minH="200dvh" w="full">
      <Autocomplete.Root blockScrollOnMount items={items} placeholder="Select a digimon" />
    </Box>;
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
  return <Autocomplete.Root allowCustomValue items={items} placeholder="Select a digimon" onChange={value => console.log("value:", value)} />;
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
  return <Autocomplete.Root items={items} openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root closeOnChange={ev => !ev.target.value.length} items={items} openOnFocus={false} placeholder="Select a digimon" />;
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
  return <Box minH="200dvh" w="full">
      <Autocomplete.Root closeOnScroll items={items} placeholder="Select a digimon" />
    </Box>;
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
  return <Autocomplete.Root items={items} openOnFocus={false} placeholder="Select a digimon" />;
}`,...Te.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
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
  return <Autocomplete.Root defaultValue="アグモン" focusOnClear={false} items={items} placeholder="Select a digimon" />;
}`,...He.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
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
  return <Autocomplete.Root closeOnBlur={false} items={items} placeholder="Select a digimon" />;
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
  return <Autocomplete.Root clearable={false} items={items} placeholder="Select a digimon" />;
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
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <BugIcon />
          </InputGroup.Addon>
          <Autocomplete.Root items={items} placeholder="Select a digimon" />
        </InputGroup.Root>}
    </For>;
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
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <BugIcon />
          </InputGroup.Element>
          <Autocomplete.Root items={items} placeholder="Select a digimon" />
        </InputGroup.Root>}
    </For>;
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
}`,...$e.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`() => {
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
}`,...Je.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ze.parameters?.docs?.source}}};el.parameters={...el.parameters,docs:{...el.parameters?.docs,source:{originalSource:`() => {
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
}`,...el.parameters?.docs?.source}}};ll.parameters={...ll.parameters,docs:{...ll.parameters?.docs,source:{originalSource:`() => {
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
}`,...ll.parameters?.docs?.source}}};al.parameters={...al.parameters,docs:{...al.parameters?.docs,source:{originalSource:`() => {
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
}`,...al.parameters?.docs?.source}}};nl.parameters={...nl.parameters,docs:{...nl.parameters?.docs,source:{originalSource:`() => {
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
}`,...nl.parameters?.docs?.source}}};ol.parameters={...ol.parameters,docs:{...ol.parameters?.docs,source:{originalSource:`() => {
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
}`,...ol.parameters?.docs?.source}}};const Tn=["Basic","Group","Items","ItemsWithQuery","Variant","Size","DefaultValue","DefaultInputValue","Multiple","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","AllowCustomValue","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledFocusOnClear","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledClearable","DisabledOption","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomEmptyMessage","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Xe as Addon,Be as AllowCustomValue,Fe as AnimationScheme,fe as Basic,Ge as BlockScrollOnMount,$e as BorderColor,we as CloseOnChange,Ee as CloseOnScroll,al as CustomControl,Je as CustomEmptyMessage,Ze as CustomIcon,el as CustomOptionIcon,ll as CustomRender,Ie as DefaultInputValue,Oe as DefaultValue,Ne as Disabled,Ke as DisabledClearable,ze as DisabledCloseOnBlur,Le as DisabledCloseOnEsc,We as DisabledCloseOnSelect,He as DisabledFocusOnClear,qe as DisabledOpenOnClick,Te as DisabledOpenOnFocus,_e as DisabledOption,Ye as Element,xe as Group,ke as Gutter,Ue as Invalid,Ae as Items,Se as ItemsWithQuery,Re as Max,Me as Multiple,Pe as Offset,Ve as OpenOnChange,De as Placement,nl as ReactHookForm,ol as ReactHookFormDefaultValue,Qe as ReadOnly,ye as Separator,je as Size,Ce as Variant,Tn as __namedExportsOrder,En as default};
