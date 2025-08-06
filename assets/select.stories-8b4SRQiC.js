import{c as al,ar as Ml,r as n,A as Ze,M as bl,O as Rl,h as ue,m as ll,a as de,e as nl,b as pl,d as Ol,aR as el,G as yl,i as ce,Q as vl,k as Je,aO as rl,j as e,f as kl,X as sl,aN as ve,bs as Pl,$ as cl,s as hl,C as wl,H as ie,T as Fl,V as Sl}from"./iframe-BVYXOt_x.js";import{P as fl}from"./props-table-CIRWgUZF.js";import{u as xl,C as gl}from"./index.esm-CiQjqd_w.js";import{B as Cl}from"./box-Bkdbk87i.js";import{F as oe}from"./for-Cq1AI6gw.js";import{T as Dl}from"./tag-CJaX6GuU.js";import{B as jl}from"./button-DhYNg7P2.js";import{c as Gl}from"./index-CMTHprn5.js";import{u as Vl}from"./use-disclosure-D_7SB-7u.js";import{m as x}from"./menu.style-CrzpLXb3.js";import{n as z}from"./native-select.style-DKA-J_nP.js";import{u as Tl}from"./index-DtmV-tx0.js";import{u as Bl,F as me}from"./use-field-props-9_1XvYE_.js";import{u as El}from"./input-BDahtq7a.js";import{u as zl}from"./group-D2DrIxet.js";import{b as Wl,P as Al,c as Hl,d as Ll}from"./popover-Ds5KodhE.js";import{X as Ul}from"./x-icon-DaA4WkJU.js";import{u as _l}from"./use-input-border-CQeG5WXX.js";import{I as re,b as tl,a as be}from"./input-group-DexSpA2e.js";import{C as ql}from"./check-icon-CvkdTB2Q.js";import{C as Nl}from"./chevron-down-icon-CsCQ646I.js";import{U as ee,C as Kl}from"./user-icon-CqanY_VM.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-9LY9Mmql.js";import"./grid-item-CdNZxFgP.js";import"./flex-DrgWVwNM.js";import"./heading-BUA-B32m.js";import"./index-GuuvsuSI.js";import"./index-3IyU_3IU.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";import"./index-D8jR06a4.js";import"./use-breakpoint-CAqBpJlJ.js";import"./use-breakpoint-value-Bh-BKcFh.js";import"./use-color-mode-value-Bkhxg2Cu.js";import"./index--MW3SftU.js";import"./index-C-UgCYOb.js";import"./event-DyjLztTn.js";import"./slide-fade-CMARcYba.js";import"./transition-BHsmQMz4.js";import"./fade-scale-DoL0lHvI.js";import"./createLucideIcon-CyY8KHfN.js";const ul=l=>typeof l=="object"&&l!=null&&l.nodeType===1,il=(l,a)=>(!a||l!=="hidden")&&l!=="visible"&&l!=="clip",he=(l,a)=>{if(l.clientHeight<l.scrollHeight||l.clientWidth<l.scrollWidth){const t=getComputedStyle(l,null);return il(t.overflowY,a)||il(t.overflowX,a)||(s=>{const r=(o=>{if(!o.ownerDocument||!o.ownerDocument.defaultView)return null;try{return o.ownerDocument.defaultView.frameElement}catch{return null}})(s);return!!r&&(r.clientHeight<s.scrollHeight||r.clientWidth<s.scrollWidth)})(l)}return!1},Se=(l,a,t,s,r,o,m,i)=>o<l&&m>a||o>l&&m<a?0:o<=l&&i<=t||m>=a&&i>=t?o-l-s:m>a&&i<t||o<l&&i>t?m-a+r:0,Xl=l=>{const a=l.parentElement;return a??(l.getRootNode().host||null)},dl=(l,a)=>{var t,s,r,o;if(typeof document>"u")return[];const{scrollMode:m,block:i,inline:g,boundary:M,skipOverflowHiddenElements:w}=a,L=typeof M=="function"?M:j=>j!==M;if(!ul(l))throw new TypeError("Invalid target");const k=document.scrollingElement||document.documentElement,R=[];let C=l;for(;ul(C)&&L(C);){if(C=Xl(C),C===k){R.push(C);break}C!=null&&C===document.body&&he(C)&&!he(document.documentElement)||C!=null&&he(C,w)&&R.push(C)}const D=(s=(t=window.visualViewport)==null?void 0:t.width)!=null?s:innerWidth,h=(o=(r=window.visualViewport)==null?void 0:r.height)!=null?o:innerHeight,{scrollX:S,scrollY:O}=window,{height:y,width:b,top:G,right:P,bottom:V,left:T}=l.getBoundingClientRect(),{top:Y,right:X,bottom:Z,left:U}=(j=>{const p=window.getComputedStyle(j);return{top:parseFloat(p.scrollMarginTop)||0,right:parseFloat(p.scrollMarginRight)||0,bottom:parseFloat(p.scrollMarginBottom)||0,left:parseFloat(p.scrollMarginLeft)||0}})(l);let B=i==="start"||i==="nearest"?G-Y:i==="end"?V+Z:G+y/2-Y+Z,d=g==="center"?T+b/2-U+X:g==="end"?P+X:T-U;const c=[];for(let j=0;j<R.length;j++){const p=R[j],{height:W,width:_,top:A,right:H,bottom:ae,left:ne}=p.getBoundingClientRect();if(m==="if-needed"&&G>=0&&T>=0&&V<=h&&P<=D&&(p===k&&!he(p)||G>=A&&V<=ae&&T>=ne&&P<=H))return c;const Q=getComputedStyle(p),te=parseInt(Q.borderLeftWidth,10),v=parseInt(Q.borderTopWidth,10),f=parseInt(Q.borderRightWidth,10),F=parseInt(Q.borderBottomWidth,10);let E=0,q=0;const K="offsetWidth"in p?p.offsetWidth-p.clientWidth-te-f:0,N="offsetHeight"in p?p.offsetHeight-p.clientHeight-v-F:0,J="offsetWidth"in p?p.offsetWidth===0?0:_/p.offsetWidth:0,se="offsetHeight"in p?p.offsetHeight===0?0:W/p.offsetHeight:0;if(k===p)E=i==="start"?B:i==="end"?B-h:i==="nearest"?Se(O,O+h,h,v,F,O+B,O+B+y,y):B-h/2,q=g==="start"?d:g==="center"?d-D/2:g==="end"?d-D:Se(S,S+D,D,te,f,S+d,S+d+b,b),E=Math.max(0,E+O),q=Math.max(0,q+S);else{E=i==="start"?B-A-v:i==="end"?B-ae+F+N:i==="nearest"?Se(A,ae,W,v,F+N,B,B+y,y):B-(A+W/2)+N/2,q=g==="start"?d-ne-te:g==="center"?d-(ne+_/2)+K/2:g==="end"?d-H+f+K:Se(ne,H,_,te,f+K,d,d+b,b);const{scrollLeft:$,scrollTop:pe}=p;E=se===0?0:Math.max(0,Math.min(pe+E/se,p.scrollHeight-W/se+N)),q=J===0?0:Math.max(0,Math.min($+q/J,p.scrollWidth-_/J+K)),B+=pe-E,d+=$-q}c.push({el:p,top:E,left:q})}return c},Yl=l=>l===!1?{block:"end",inline:"nearest"}:(a=>a===Object(a)&&Object.keys(a).length!==0)(l)?l:{block:"start",inline:"nearest"};function Ql(l,a){if(!l.isConnected||!(r=>{let o=r;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(l))return;const t=(r=>{const o=window.getComputedStyle(r);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(l);if((r=>typeof r=="object"&&typeof r.behavior=="function")(a))return a.behavior(dl(l,a));const s=typeof a=="boolean"||a==null?void 0:a.behavior;for(const{el:r,top:o,left:m}of dl(l,Yl(a))){const i=o-t.top+t.bottom,g=m-t.left+t.right;r.scroll({top:i,left:g,behavior:s})}}const{DescendantsContext:Jl,useDescendant:Zl,useDescendants:$l}=Gl(),[ea,la]=al({name:"ComboboxContext"}),[aa,na]=al({name:"ComboboxGroupContext"}),ta=({"aria-labelledby":l,closeOnSelect:a=!0,defaultOpen:t,disabled:s,initialFocusValue:r,open:o,readOnly:m,onChange:i,onClose:g,onOpen:M,...w}={})=>{const{getWindow:L}=Ml(),k=!(m||s),R=n.useRef(null),C=n.useRef(null),D=n.useId(),h=$l(),{open:S,onClose:O,onOpen:y}=Vl({defaultOpen:t,open:o,onClose:g,onOpen:M}),b=n.useRef(null),G=n.useCallback((d,c=a)=>{R.current?.focus(),!(!k||Ze(d))&&(i?.(d),c&&O())},[a,k,i,O]),P=n.useCallback((d,c="start")=>{if(!C.current||!d)return;const j=L()?.getComputedStyle(C.current),p=c==="start"?j?.paddingBlockStart:j?.paddingBlockEnd,W=parseInt(p??"0px");Ql(d.node,{behavior:_=>_.forEach(({el:A,top:H})=>{A.scrollTop=c==="start"?H-W:H+W}),block:c,boundary:C.current,inline:"nearest",scrollMode:"if-needed"})},[L]),V=n.useCallback(d=>{!R.current||!d||s||(R.current.setAttribute("aria-activedescendant",d.id),b.current=d,h.active(d))},[h,s]),T=n.useCallback(d=>{y(),setTimeout(()=>{const j=h.values().find(({value:p})=>r===p);V(j??d())})},[h,r,V,y]),Y=n.useCallback(d=>{s||(d.preventDefault(),S?O():T(()=>h.enabledFirstValue()))},[h,s,O,T,S]),X=n.useCallback(d=>{s||bl(d,{ArrowDown:()=>{if(!S)T(()=>{const c=h.enabledFirstValue();return P(c),c});else if(b.current){const c=h.enabledNextValue(b.current);V(c),P(c,c?.recurred?"start":"end")}},ArrowUp:()=>{if(!S)T(()=>{const c=h.enabledLastValue();return P(c,"end"),c});else if(b.current){const c=h.enabledPrevValue(b.current);V(c),P(c,c?.recurred?"end":"start")}},End:()=>{if(!S)return;const c=h.enabledLastValue();V(c),P(c,"end")},Enter:()=>{if(!S)T(()=>{const c=h.enabledFirstValue();return P(c),c});else{if(!b.current)return;const{closeOnSelect:c,value:j}=b.current;G(j,c)}},Home:()=>{if(!S)return;const c=h.enabledFirstValue();V(c),P(c)},Space:()=>{if(!S)T(()=>{const c=h.enabledFirstValue();return P(c),c});else{if(!b.current)return;const{closeOnSelect:c,value:j}=b.current;G(j,c)}}})},[s,S,T,h,P,V,G]);Rl(()=>{S||(b.current=null)},[S]);const Z=n.useCallback(({ref:d,"aria-labelledby":c,...j}={})=>({"aria-controls":S?D:void 0,"aria-disabled":pl(!k),"aria-expanded":S,"aria-haspopup":"listbox","aria-labelledby":nl(c,l),"data-disabled":de(s),"data-readonly":de(m),role:"combobox",tabIndex:k?0:-1,...w,...j,ref:ll(d,w.ref,R),onClick:ue(j.onClick,w.onClick,Y),onKeyDown:ue(j.onKeyDown,w.onKeyDown,X)}),[D,k,S,l,s,m,w,Y,X]),U=n.useCallback(({ref:d,...c}={})=>({id:D,role:"listbox",...c,ref:ll(d,C),onKeyDown:ue(c.onKeyDown)}),[D]),B=n.useCallback(d=>({role:"separator",...d}),[]);return{activeDescendant:b,descendants:h,interactive:k,open:S,getContentProps:U,getSeparatorProps:B,getTriggerProps:Z,onActiveDescendant:V,onClose:O,onOpen:y,onScrollIntoView:P,onSelect:G}},oa=({"aria-labelledby":l,...a}={})=>{const t=n.useId(),s=n.useCallback(({"aria-labelledby":o,...m}={})=>({"aria-labelledby":nl(l,o,t),role:"group",...a,...m}),[l,t,a]),r=n.useCallback(o=>({id:t,role:"presentation",...o}),[t]);return{getGroupProps:s,getLabelProps:r}},ra=({id:l,"aria-disabled":a,"data-disabled":t,closeOnSelect:s,disabled:r=!1,selected:o=!1,value:m,...i}={})=>{const g=n.useId(),M=n.useRef(null),{onActiveDescendant:w,onClose:L,onSelect:k}=la();l??=g;const{descendants:R,register:C}=Zl({id:l,closeOnSelect:s,disabled:r,value:m}),D=n.useCallback(()=>{if(r)return;const y=R.value(M.current);w(y)},[R,r,w]),h=n.useCallback(y=>{y.preventDefault(),!r&&k(m,s)},[s,r,k,m]),S=n.useCallback(({ref:y,...b}={})=>({id:l,"aria-disabled":a??pl(r),"aria-selected":o,"data-disabled":t??de(r),"data-selected":de(o),"data-value":m,role:"option",tabIndex:-1,...i,...b,ref:ll(y,i.ref,M,C),onClick:ue(b.onClick,i.onClick,h),onMouseMove:ue(b.onMouseMove,i.onMouseMove,D)}),[l,a,r,o,t,m,i,C,h,D]),O=n.useCallback(({style:y,...b}={})=>({style:{opacity:o?1:0,...y},...b}),[o]);return{descendants:R,disabled:r,selected:o,getIndicatorProps:O,getItemProps:S,onActiveDescendant:w,onClose:L}},sa=Ol({base:{...z.base,content:{...x.base?.content,maxH:"xs"},field:{...z.base?.field,alignItems:"center",display:"flex"},group:x.base?.group,indicator:x.base?.indicator,label:x.base?.label,option:x.base?.item,separator:x.base?.separator,valueText:{truncated:!0,userSelect:"none"}},variants:{filled:{...z.variants?.filled,field:{...z.variants?.filled.field,_expanded:el.inside}},flushed:{...z.variants?.flushed,field:{...z.variants?.flushed.field,_expanded:z.variants?.flushed.field?._focusVisible}},outline:{...z.variants?.outline,field:{...z.variants?.outline.field,_expanded:el.inside}},plain:{...z.variants?.plain,field:{...z.variants?.plain.field,_expanded:el.inside}}},sizes:{xs:{...z.sizes?.xs,content:x.sizes?.sm.content,indicator:x.sizes?.sm.indicator,label:x.sizes?.sm.label,option:x.sizes?.sm.item},sm:{...z.sizes?.sm,content:x.sizes?.md.content,indicator:x.sizes?.md.indicator,label:x.sizes?.md.label,option:x.sizes?.md.item},md:{...z.sizes?.md,content:x.sizes?.md.content,indicator:x.sizes?.md.indicator,label:x.sizes?.md.label,option:x.sizes?.md.item},lg:{...z.sizes?.lg,content:x.sizes?.lg.content,indicator:x.sizes?.lg.indicator,label:x.sizes?.lg.label,option:x.sizes?.lg.item},xl:{...z.sizes?.xl,content:x.sizes?.lg.content,indicator:x.sizes?.lg.indicator,label:x.sizes?.lg.label,option:x.sizes?.lg.item}},defaultProps:{size:"md",variant:"outline"}}),ca=({count:l,index:a,label:t,separator:s,value:r})=>{const o=l-1===a;return e.jsxs("span",{"data-placeholder":de(r===""),children:[t,o?null:`${s} `]})},[ua,ia]=al({name:"SelectContext"}),da=(l={})=>{const{t:a}=yl("select"),{context:{labelId:t}={},props:{multiple:s=!1,closeOnSelect:r=!s,defaultValue:o=s?[]:"",disabled:m,items:i=[],max:g,placeholder:M,placeholderInOptions:w=!s,readOnly:L,render:k=ca,separator:R=",",value:C,onChange:D,...h},ariaProps:S,dataProps:O,eventProps:y}=Bl(l),[b,G]=Tl({defaultValue:o,value:C,onChange:D}),P=n.useCallback(v=>{G(f=>ce(f)?f.includes(v)?f.filter(F=>F!==v):!vl(g)||f.length<g?[...f,v]:f:v)},[g,G]),{descendants:V,interactive:T,open:Y,getContentProps:X,getSeparatorProps:Z,getTriggerProps:U,onActiveDescendant:B,onClose:d,onOpen:c,onSelect:j}=ta({closeOnSelect:r,disabled:m,initialFocusValue:ce(b)?b[0]:b,readOnly:L,onChange:P,...S,...O,...y,...h}),p=n.useMemo(()=>{const v=[...i];return M&&v.unshift({hidden:!w,label:M,value:""}),v},[i,M,w]),W=n.useMemo(()=>{const v={};return p.forEach(f=>{"items"in f?f.items.forEach(F=>{F.value??=Je(F.label)?F.label:void 0,Ze(F.value)||(v[F.value]=F)}):(f.value??=Je(f.label)?f.label:void 0,Ze(f.value)||(v[f.value]=f))}),v},[p]),_=n.useMemo(()=>ce(b)?b.length?rl(b.map(v=>W[v])):M?[{label:M,value:""}]:[]:Je(b)?rl(W[b]):[],[M,b,W]),A=n.useMemo(()=>{const v=_.length;return _.map((f,F)=>{const E=k({count:v,index:F,separator:R,...f});return n.isValidElement(E)?n.cloneElement(E,{...E.props,key:F}):E})},[k,_,R]),H=n.useCallback(()=>{G(v=>ce(v)?[]:"")},[G]),ae=n.useCallback(v=>({...O,...v}),[O]),ne=n.useCallback(({"aria-labelledby":v,...f}={})=>U({"aria-label":M,"aria-labelledby":nl(v,t),...f,children:A}),[A,U,t,M]),Q=n.useCallback(v=>({...O,...v}),[O]),te=n.useCallback((v={})=>Q({"aria-label":a("Clear value"),role:"button",tabIndex:0,...v,onClick:ue(v.onClick,H),onKeyDown:ue(v.onKeyDown,f=>bl(f,{Enter:H,Escape:H}))}),[Q,H,a]);return{descendants:V,interactive:T,items:p,max:g,open:Y,placeholder:M,placeholderInOptions:w,setValue:G,value:b,valueMap:W,getClearIconProps:te,getContentProps:X,getFieldProps:ne,getIconProps:Q,getRootProps:ae,getSeparatorProps:Z,onActiveDescendant:B,onChange:P,onClose:d,onOpen:c,onSelect:j}},ma=({children:l,closeOnSelect:a,disabled:t,hidden:s,value:r,...o}={})=>{const{max:m,value:i}=ia();r??=Je(l)?l:void 0;const g=ce(i)?!Ze(r)&&i.includes(r):i===r,M=vl(m)&&ce(i)&&i.length>=m,{getIndicatorProps:w,getItemProps:L}=ra({children:l,closeOnSelect:a,disabled:t||s||M&&!g,hidden:s,selected:g,value:r,...o}),k=n.useCallback((R={})=>L(R),[L]);return{getIndicatorProps:w,getOptionProps:k}},{ComponentContext:ba,useComponentContext:pa,withContext:le,withProvider:va}=kl("select",sa),u=va(l=>{const[a,t]=zl(l),[s,{className:r,css:o,colorScheme:m,children:i,clearable:g,clearIcon:M=e.jsx(Ul,{}),errorBorderColor:w,focusBorderColor:L,icon:k,items:R,contentProps:C,elementProps:D,iconProps:h,placeholderProps:S,rootProps:O,...y}]=Wl(t,["disabled","open","defaultOpen","onOpen","onClose"]),b=n.useMemo(()=>R||sl(i).filter(({type:K})=>ve(K,I)||ve(K,$e)).map(({type:K,props:N})=>{if(ve(K,I))return{label:N.children,value:N.value};{const J=sl(N.children),se=Pl(J,ol);return{items:J.filter(({type:$})=>ve($,I)).map(({props:$})=>({label:$.children,value:$.value})),label:se?.props.children??N.label}}}),[R,i]),{descendants:G,interactive:P,items:V,max:T,open:Y,placeholder:X,placeholderInOptions:Z,value:U,getClearIconProps:B,getContentProps:d,getFieldProps:c,getIconProps:j,getRootProps:p,getSeparatorProps:W,onActiveDescendant:_,onClose:A,onOpen:H,onSelect:ae}=da({items:b,...y}),ne=n.useMemo(()=>({animationScheme:"block-start",autoFocus:!1,matchWidth:!0,...s,disabled:!P,open:Y,onClose:A,onOpen:H}),[P,A,H,Y,s]),Q=n.useMemo(()=>i?e.jsxs(e.Fragment,{children:[X?e.jsx(I,{...S,hidden:!Z,value:"",children:X}):null,i]}):V.map((q,K)=>{if("items"in q){const{items:N=[],label:J,...se}=q;return e.jsx($e,{label:J,...se,children:N.map(({label:$,...pe},Il)=>e.jsx(I,{...pe,children:$},Il))},K)}else{const{label:N,...J}=q;return e.jsx(I,{...J,children:N},K)}}),[i,V,X,Z,S]),te=_l({errorBorderColor:w,focusBorderColor:L}),v=n.useMemo(()=>({onActiveDescendant:_,onClose:A,onSelect:ae}),[_,A,ae]),f=n.useMemo(()=>({max:T,value:U}),[T,U]),F=n.useMemo(()=>({getSeparatorProps:W}),[W]),E=ce(U)?!!U.length:!!U;return e.jsx(Jl,{value:G,children:e.jsx(ea,{value:v,children:e.jsx(ua,{value:f,children:e.jsx(ba,{value:F,children:e.jsxs(Al,{...ne,children:[e.jsxs(re,{className:r,css:o,colorScheme:m,...p({...a,...O}),children:[e.jsx(Hl,{children:e.jsx(ha,{...c(te)})}),e.jsx(tl,{clickable:g&&E,...D,children:g&&E?e.jsx(ml,{icon:M,...B(h)}):e.jsx(ml,{icon:k,...j(h)})})]}),e.jsx(fa,{...cl(d(cl(C))),children:Q})]})})})})})},"root")(l=>({...El(),...l})),ha=le("div","field")({"data-group-propagate":""},({children:l,...a})=>({...a,children:e.jsx(Sa,{children:l})})),ml=le("div","icon")(void 0,({children:l,icon:a,...t})=>({children:a||l||e.jsx(Nl,{}),...t})),Sa=le("span","valueText")(),fa=le(Ll,"content")(),ol=le("span","label")(void 0,l=>{const{getLabelProps:a}=na();return a(l)}),$e=le(({children:l,label:a,labelProps:t,...s})=>{const{getGroupProps:r,getLabelProps:o}=oa(s),m=n.useMemo(()=>({getLabelProps:o}),[o]);return e.jsx(aa,{value:m,children:e.jsxs(hl.div,{...r(),children:[a?e.jsx(ol,{...t,children:a}):null,l]})})},"group")(),I=le(({children:l,icon:a=e.jsx(ql,{}),...t})=>{const{getIndicatorProps:s,getOptionProps:r}=ma(t);return e.jsxs(hl.div,{...r(),children:[e.jsx(xa,{...s(),children:a}),l]})},"option")(),xa=le("div","indicator")(),ga=le("hr","separator")(void 0,l=>{const{getSeparatorProps:a}=pa();return a(l)}),un={component:u,title:"Components / Select"},fe=()=>e.jsxs(u,{placeholder:"Select a character",children:[e.jsx(I,{value:"木ノ下和也",children:"木ノ下和也"}),e.jsx(I,{value:"一ノ瀬ちづる",children:"一ノ瀬ちづる"}),e.jsx(I,{value:"七海麻美",children:"七海麻美"}),e.jsx(I,{value:"更科瑠夏",children:"更科瑠夏"}),e.jsx(I,{value:"桜沢墨",children:"桜沢墨"}),e.jsx(I,{value:"八重森みに",children:"八重森みに"})]}),xe=()=>e.jsxs(u,{placeholder:"Select a character",children:[e.jsxs($e,{children:[e.jsx(ol,{children:"主要人物"}),e.jsx(I,{value:"木ノ下和也",children:"木ノ下和也"}),e.jsx(I,{value:"一ノ瀬ちづる",children:"一ノ瀬ちづる"}),e.jsx(I,{value:"七海麻美",children:"七海麻美"}),e.jsx(I,{value:"更科瑠夏",children:"更科瑠夏"}),e.jsx(I,{value:"桜沢墨",children:"桜沢墨"}),e.jsx(I,{value:"八重森みに",children:"八重森みに"})]}),e.jsx(ga,{}),e.jsxs($e,{label:"主要人物の関係者",children:[e.jsx(I,{value:"木ノ下和",children:"木ノ下和"}),e.jsx(I,{value:"一ノ瀬小百合",children:"一ノ瀬小百合"}),e.jsx(I,{value:"木部芳秋",children:"木部芳秋"}),e.jsx(I,{value:"栗林駿",children:"栗林駿"})]})]}),ge=()=>{const l=n.useMemo(()=>[{label:"水原千鶴",value:"水原千鶴"},{items:[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],label:"主要人物"},{items:[{label:"木ノ下和",value:"木ノ下和"},{label:"一ノ瀬小百合",value:"一ノ瀬小百合"},{label:"木部芳秋",value:"木部芳秋"},{label:"栗林駿",value:"栗林駿"}],label:"主要人物の関係者"}],[]);return e.jsx(u,{items:l,placeholder:"Select a character"})},Ce=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(fl,{variant:"stack",columns:["outline","filled","flushed"],rows:wl,children:(a,t,s)=>e.jsx(u,{colorScheme:t,variant:a,items:l,placeholder:ie(a)},s)})},je=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(fl,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(a,t,s)=>e.jsx(u,{size:a,variant:t,items:l,placeholder:`Size (${a})`},s)})},Ie=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{defaultValue:"木ノ下和也",items:l,placeholder:"Select a character"})},Me=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,multiple:!0,placeholder:"Select a character"})},Re=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{clearable:!0,items:l,multiple:!0,placeholder:"Select a character"})},Oe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,max:2,multiple:!0,placeholder:"Select a character"})},ye=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,multiple:!0,placeholder:"Select a character",separator:";"})},ke=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,offset:[16,16],placeholder:"Select a character"})},Pe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{gutter:32,items:l,placeholder:"Select a character"})},we=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{animationScheme:"inline-start",items:l,placeholder:"Select a character"})},Fe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{animationScheme:"inline-start",items:l,placeholder:"Select a character",placement:"center-end",rootProps:{w:"xs"}})},De=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(Cl,{minH:"200dvh",w:"full",children:e.jsx(u,{blockScrollOnMount:!0,items:l,placeholder:"Select a character"})})},Ge=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(Cl,{minH:"200dvh",w:"full",children:e.jsx(u,{closeOnScroll:!0,items:l,placeholder:"Select a character"})})},Ve=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,placeholder:"Select a character",placeholderInOptions:!1})},Te=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{closeOnSelect:!0,label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{closeOnSelect:!1,items:l,placeholder:"Select a character"})},Be=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{closeOnBlur:!1,items:l,placeholder:"Select a character"})},Ee=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{closeOnEsc:!1,items:l,placeholder:"Select a character"})},ze=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{disabled:!0,label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,placeholder:"Select a character"})},We=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsx(u,{variant:a,disabled:!0,items:l,placeholder:ie(a)},t)}),e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsxs(re,{variant:a,disabled:!0,children:[e.jsx(be,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:ie(a)})]},t)}),e.jsx(me,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(u,{items:l,placeholder:"Select a character"})})]})},Ae=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsx(u,{variant:a,items:l,placeholder:ie(a),readOnly:!0},t)}),e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsxs(re,{variant:a,readOnly:!0,children:[e.jsx(be,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:ie(a)})]},t)}),e.jsx(me,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(u,{items:l,placeholder:"Select a character"})})]})},He=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsx(u,{variant:a,invalid:!0,items:l,placeholder:ie(a)},t)}),e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsxs(re,{variant:a,invalid:!0,children:[e.jsx(be,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:ie(a)})]},t)}),e.jsx(me,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite character?",children:e.jsx(u,{items:l,placeholder:"Select a character"})})]})},Le=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsxs(re,{variant:a,children:[e.jsx(be,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:"Select a character"})]},t)})},Ue=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(oe,{each:["outline","filled","flushed"],children:(a,t)=>e.jsxs(re,{variant:a,children:[e.jsx(tl,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:"Select a character"})]},t)})},_e=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{items:l,placeholder:"Default border color"}),e.jsx(u,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(re,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(tl,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:"Custom border color"})]}),e.jsx(u,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(re,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(be,{children:e.jsx(ee,{})}),e.jsx(u,{items:l,placeholder:"Custom border color"})]})]})},qe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{items:l,placeholder:"Select a character",iconProps:{color:"orange"}}),e.jsx(u,{items:l,placeholder:"Select a character",iconProps:{children:e.jsx(Kl,{})}})]})},Ne=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{placeholder:"Select a character",placeholderProps:{icon:e.jsx(ee,{})},children:l.map(({label:a,value:t})=>e.jsx(I,{icon:e.jsx(ee,{}),value:t,children:a},t))})},Ke=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:l,multiple:!0,placeholder:"Select a character",render:({label:a,value:t})=>t===""?e.jsx(Fl,{"data-placeholder":!0,children:a}):e.jsx(Dl,{size:"sm",_notLast:{me:"1"},children:a})})},Xe=()=>{const[l,a]=n.useState("木ノ下和也"),t=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(u,{items:t,placeholder:"Select a character",value:l,onChange:a})},Ye=()=>{const{control:l,formState:{errors:a},handleSubmit:t,watch:s}=xl(),r=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]),o=m=>console.log("submit:",m);return console.log("watch:",s()),e.jsxs(Sl,{as:"form",onSubmit:t(o),children:[e.jsx(me,{errorMessage:a.select?.message,invalid:!!a.select,label:"Who is your favorite character?",children:e.jsx(gl,{name:"select",control:l,render:({field:m})=>e.jsx(u,{items:r,placeholder:"Select a character",...m}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(jl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Qe=()=>{const l={select:"木ノ下和也"},{control:a,formState:{errors:t},handleSubmit:s,watch:r}=xl({defaultValues:l}),o=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]),m=i=>console.log("submit:",i);return console.log("watch:",r()),e.jsxs(Sl,{as:"form",onSubmit:s(m),children:[e.jsx(me,{errorMessage:t.select?.message,invalid:!!t.select,label:"Who is your favorite character?",children:e.jsx(gl,{name:"select",control:a,render:({field:i})=>e.jsx(u,{items:o,placeholder:"Select a character",...i}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(jl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
  return <Select.Root placeholder="Select a character">
      <Select.Option value="木ノ下和也">木ノ下和也</Select.Option>
      <Select.Option value="一ノ瀬ちづる">一ノ瀬ちづる</Select.Option>
      <Select.Option value="七海麻美">七海麻美</Select.Option>
      <Select.Option value="更科瑠夏">更科瑠夏</Select.Option>
      <Select.Option value="桜沢墨">桜沢墨</Select.Option>
      <Select.Option value="八重森みに">八重森みに</Select.Option>
    </Select.Root>;
}`,...fe.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
  return <Select.Root placeholder="Select a character">
      <Select.Group>
        <Select.Label>主要人物</Select.Label>
        <Select.Option value="木ノ下和也">木ノ下和也</Select.Option>
        <Select.Option value="一ノ瀬ちづる">一ノ瀬ちづる</Select.Option>
        <Select.Option value="七海麻美">七海麻美</Select.Option>
        <Select.Option value="更科瑠夏">更科瑠夏</Select.Option>
        <Select.Option value="桜沢墨">桜沢墨</Select.Option>
        <Select.Option value="八重森みに">八重森みに</Select.Option>
      </Select.Group>

      <Select.Separator />

      <Select.Group label="主要人物の関係者">
        <Select.Option value="木ノ下和">木ノ下和</Select.Option>
        <Select.Option value="一ノ瀬小百合">一ノ瀬小百合</Select.Option>
        <Select.Option value="木部芳秋">木部芳秋</Select.Option>
        <Select.Option value="栗林駿">栗林駿</Select.Option>
      </Select.Group>
    </Select.Root>;
}`,...xe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "水原千鶴",
    value: "水原千鶴"
  }, {
    items: [{
      label: "木ノ下和也",
      value: "木ノ下和也"
    }, {
      label: "一ノ瀬ちづる",
      value: "一ノ瀬ちづる"
    }, {
      label: "七海麻美",
      value: "七海麻美"
    }, {
      label: "更科瑠夏",
      value: "更科瑠夏"
    }, {
      label: "桜沢墨",
      value: "桜沢墨"
    }, {
      label: "八重森みに",
      value: "八重森みに"
    }],
    label: "主要人物"
  }, {
    items: [{
      label: "木ノ下和",
      value: "木ノ下和"
    }, {
      label: "一ノ瀬小百合",
      value: "一ノ瀬小百合"
    }, {
      label: "木部芳秋",
      value: "木部芳秋"
    }, {
      label: "栗林駿",
      value: "栗林駿"
    }],
    label: "主要人物の関係者"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" />;
}`,...ge.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Select.Root key={key} colorScheme={row} variant={column} items={items} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...Ce.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Select.Root key={key} size={column} variant={row} items={items} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...je.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root defaultValue="木ノ下和也" items={items} placeholder="Select a character" />;
}`,...Ie.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} multiple placeholder="Select a character" />;
}`,...Me.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root clearable items={items} multiple placeholder="Select a character" />;
}`,...Re.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} max={2} multiple placeholder="Select a character" />;
}`,...Oe.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} multiple placeholder="Select a character" separator=";" />;
}`,...ye.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} offset={[16, 16]} placeholder="Select a character" />;
}`,...ke.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root gutter={32} items={items} placeholder="Select a character" />;
}`,...Pe.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root animationScheme="inline-start" items={items} placeholder="Select a character" />;
}`,...we.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root animationScheme="inline-start" items={items} placeholder="Select a character" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...Fe.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Box minH="200dvh" w="full">
      <Select.Root blockScrollOnMount items={items} placeholder="Select a character" />
    </Box>;
}`,...De.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Box minH="200dvh" w="full">
      <Select.Root closeOnScroll items={items} placeholder="Select a character" />
    </Box>;
}`,...Ge.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" placeholderInOptions={false} />;
}`,...Ve.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    closeOnSelect: true,
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root closeOnSelect={false} items={items} placeholder="Select a character" />;
}`,...Te.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root closeOnBlur={false} items={items} placeholder="Select a character" />;
}`,...Be.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root closeOnEsc={false} items={items} placeholder="Select a character" />;
}`,...Ee.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    disabled: true,
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" />;
}`,...ze.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Select.Root key={index} variant={variant} disabled items={items} placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>;
}`,...We.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Select.Root key={index} variant={variant} items={items} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>;
}`,...Ae.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Select.Root key={index} variant={variant} invalid items={items} placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="This is required." invalid label="Who is your favorite character?">
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>;
}`,...He.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <UserIcon />
          </InputGroup.Addon>
          <Select.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>}
    </For>;
}`,...Le.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <UserIcon />
          </InputGroup.Element>
          <Select.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>}
    </For>;
}`,...Ue.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <Select.Root items={items} placeholder="Default border color" />

      <Select.Root focusBorderColor="green.500" items={items} placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <UserIcon />
        </InputGroup.Element>
        <Select.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>

      <Select.Root errorBorderColor="orange.500" invalid items={items} placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <UserIcon />
        </InputGroup.Addon>
        <Select.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,..._e.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <Select.Root items={items} placeholder="Select a character" iconProps={{
      color: "orange"
    }} />

      <Select.Root items={items} placeholder="Select a character" iconProps={{
      children: <ChevronsDownIcon />
    }} />
    </>;
}`,...qe.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.ItemWithValue[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root placeholder="Select a character" placeholderProps={{
    icon: <UserIcon />
  }}>
      {items.map(({
      label,
      value
    }) => <Select.Option key={value} icon={<UserIcon />} value={value}>
          {label}
        </Select.Option>)}
    </Select.Root>;
}`,...Ne.parameters?.docs?.source}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} multiple placeholder="Select a character" render={({
    label,
    value
  }) => value === "" ? <Text data-placeholder>{label}</Text> : <Tag size="sm" _notLast={{
    me: "1"
  }}>
            {label}
          </Tag>} />;
}`,...Ke.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("木ノ下和也");
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" value={value} onChange={setValue} />;
}`,...Xe.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`() => {
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
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite character?">
        <Controller name="select" control={control} render={({
        field
      }) => <Select.Root items={items} placeholder="Select a character" {...field} />} rules={{
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
}`,...Ye.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const defaultValues: Data = {
    select: "木ノ下和也"
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
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite character?">
        <Controller name="select" control={control} render={({
        field
      }) => <Select.Root items={items} placeholder="Select a character" {...field} />} rules={{
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
}`,...Qe.parameters?.docs?.source}}};const dn=["Basic","Group","Items","Variant","Size","DefaultValue","Multiple","Clearable","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","CloseOnScroll","DisabledPlaceholderInOptions","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledOption","Disabled","Readonly","Invalid","Addon","Element","BorderColor","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Le as Addon,we as AnimationScheme,fe as Basic,De as BlockScrollOnMount,_e as BorderColor,Re as Clearable,Ge as CloseOnScroll,Xe as CustomControl,qe as CustomIcon,Ne as CustomOptionIcon,Ke as CustomRender,Ie as DefaultValue,We as Disabled,Be as DisabledCloseOnBlur,Ee as DisabledCloseOnEsc,Te as DisabledCloseOnSelect,ze as DisabledOption,Ve as DisabledPlaceholderInOptions,Ue as Element,xe as Group,Pe as Gutter,He as Invalid,ge as Items,Oe as Max,Me as Multiple,ke as Offset,Fe as Placement,Ye as ReactHookForm,Qe as ReactHookFormDefaultValue,Ae as Readonly,ye as Separator,je as Size,Ce as Variant,dn as __namedExportsOrder,un as default};
