import{j as c}from"./extends-CwFRzn3r.js";import{u as $}from"./index-LwUC2h1G.js";import{r as e}from"./index-BwDkhjyp.js";import{o as q,f as G,S as ee,X as J,h as S,a as Q,ak as ne,b as L,c as N,t as se,an as te}from"./factory-BFmlPmGv.js";import{P as oe,b as re}from"./popover-content-C6GkyTo6.js";import{a as ce}from"./use-component-style-EAJDzyrD.js";import{o as ae}from"./theme-provider-BxuddooS.js";import{u as ue}from"./index-CQq5lcce.js";import{f as T}from"./forward-ref-BWI-Phbn.js";import{c as le}from"./index-BpW-axNd.js";const{DescendantsContextProvider:ie,useDescendantsContext:fe,useDescendants:me,useDescendant:de}=le(),[xe,B]=q({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),[Ae,Ce]=q({strict:!1,name:"ContextMenuContext"}),[pe,Me]=q({strict:!1,name:"UpstreamMenuContext"}),[ve,Y]=q({strict:!1,name:"UpstreamMenuItemContext"}),Ee=a=>{const{styles:n}=Ce()??{},[i,m]=ce("Menu",a,{isProcessSkip:!!n,styles:n});let{initialFocusRef:u,closeOnSelect:v=!0,closeOnBlur:l,placement:o,duration:j=.2,offset:w,onOpen:t,onClose:C,...k}=ae(m);const{relatedRef:d,onUpstreamClose:b,onDownstreamCloseMapRef:x}=Me()??{},{setDownstreamOpen:s,hasDownstreamRef:I}=Y()??{},p=!!d;p?(o??(o="right-start"),w??(w=[-8,8]),l??(l=!1)):o??(o="bottom-start");const M=me(),[g,h]=e.useState(-1),O=e.useRef(null),R=e.useRef(new Set([])),y=e.useRef(null),K=e.useRef(new Map),P=e.useCallback(()=>{requestAnimationFrame(()=>{var r;return(r=O.current)==null?void 0:r.focus({preventScroll:!1})})},[]),H=e.useCallback(()=>{const r=setTimeout(()=>{if(u)return;const D=M.enabledFirstValue();D&&h(D.index)});R.current.add(r)},[M,u]),A=e.useCallback(()=>{const r=setTimeout(()=>{if(u)return;const D=M.enabledLastValue();D&&h(D.index)});R.current.add(r)},[M,u]),z=e.useCallback(()=>{t==null||t(),p||P()},[t,p,P]),W=e.useCallback(()=>{C==null||C();for(const r of K.current.values())r()},[C]),E=e.useId(),{isOpen:_,onOpen:V,onClose:F}=$({...a,onOpen:z,onClose:W});return e.useEffect(()=>{const r=x==null?void 0:x.current;return r==null||r.set(E,F),()=>{r==null||r.delete(E)}},[E,F,x]),e.useEffect(()=>{s&&s(_)},[s,_]),e.useEffect(()=>(I&&(I.current=!0),()=>{I&&(I.current=!1)})),G(()=>{_||h(-1)},[_]),ee(()=>{R.current.forEach(r=>clearTimeout(r)),R.current.clear()}),c.jsx(ie,{value:M,children:c.jsx(pe,{value:{relatedRef:O,onDownstreamCloseMapRef:K,onUpstreamClose:J(b,F)},children:c.jsx(xe,{value:{isOpen:_,onOpen:V,onClose:F,onUpstreamClose:b,onFocusFirstItem:H,onFocusLastItem:A,closeOnSelect:v,focusedIndex:g,setFocusedIndex:h,menuRef:O,requestAnimationFrameId:y,isNested:p,styles:i},children:c.jsx(oe,{trigger:p?"hover":"click",...k,isOpen:_,onOpen:V,onClose:F,placement:o,offset:w,duration:j,initialFocusRef:u,relatedRef:d,closeOnButton:!1,closeOnBlur:l})})})})},ke=a=>{var n;return te(a)&&!!((n=a==null?void 0:a.getAttribute("role"))!=null&&n.startsWith("menuitem"))},be=T(({className:a,isDisabled:n,isFocusable:i,closeOnSelect:m,icon:u,command:v,children:l,...o},j)=>{const{focusedIndex:w,setFocusedIndex:t,isOpen:C,onClose:k,onUpstreamClose:d,closeOnSelect:b,menuRef:x,requestAnimationFrameId:s,isNested:I,styles:p}=B(),{onUpstreamRestoreFocus:M}=Y()??{},g=n&&!i,h=e.useRef(null),O=e.useRef(!1),R=e.useRef(()=>{}),{index:y,register:K}=de({disabled:g}),[P,H]=e.useState(!1),A=y===w,z=e.useCallback(()=>{n||t(y)},[y,n,t]),W=e.useCallback(()=>{n||t(-1)},[t,n]),E=e.useCallback(f=>{if(!ke(f.currentTarget))return;const U=O.current;(m??(!U&&b))&&(k(),d==null||d())},[m,b,k,d]),_=e.useCallback(()=>{t(y)},[t,y]),V=e.useCallback(()=>{var f;(f=h.current)==null||f.focus(),t(y)},[t,y]),F=e.useCallback(f=>{const X={ArrowLeft:I?J(M,k):void 0}[f.key];X&&(f.preventDefault(),f.stopPropagation(),X())},[M,k,I]),r=ue({focusOnClick:!1,...o,onClick:S(o.onClick,E),onFocus:S(o.onFocus,_),onMouseOver:S(o.onMouseOver,z),onMouseLeave:S(o.onMouseLeave,W),onKeyDown:S(o.onKeyDown,F,R.current),ref:Q(K,h,j),isDisabled:n,isFocusable:i});G(()=>{if(!C)return;const f=s.current;return A&&!g&&h.current?(f&&cancelAnimationFrame(f),s.current=requestAnimationFrame(()=>{var U;(U=h.current)==null||U.focus({preventScroll:!0}),s.current=null})):x.current&&!ne(x.current)&&x.current.focus({preventScroll:!0}),()=>{f&&cancelAnimationFrame(f)}},[A,g,x,C]),l=u||v?c.jsx(L.span,{style:{flex:1},children:l}):l;const D={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...p.item};return c.jsx(ve,{value:{onKeyDownRef:R,onUpstreamRestoreFocus:V,setDownstreamOpen:H,hasDownstreamRef:O},children:c.jsxs(L.li,{...r,...P?{"data-active":""}:{},role:"menuitem",tabIndex:A?0:-1,className:N("ui-menu__item",a),__css:D,children:[u?c.jsx(Z,{children:u}):null,l,v?c.jsx(he,{children:v}):null]})})}),Ue=T(({className:a,icon:n,isChecked:i,closeOnSelect:m=!1,children:u,...v},l)=>c.jsxs(be,{ref:l,className:N("ui-menu__item--option",a),"aria-checked":se(i),closeOnSelect:m,...v,children:[n!==null?c.jsx(Z,{opacity:i?1:0,children:n||c.jsx(ye,{})}):null,u]})),Z=T(({className:a,...n},i)=>{const{styles:m}=B(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...m.icon};return c.jsx(L.span,{ref:i,className:N("ui-menu__item__icon",a),__css:u,...n})}),he=T(({className:a,...n},i)=>{const{styles:m}=B(),u={...m.command};return c.jsx(L.span,{ref:i,className:N("ui-menu__item__command",a),__css:u,...n})}),ye=()=>c.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:c.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),Le=T(({className:a,contentProps:n,children:i,...m},u)=>{const{menuRef:v,focusedIndex:l,setFocusedIndex:o,onClose:j,styles:w}=B(),t=fe(),C=e.useCallback(()=>{const s=t.enabledNextValue(l);s&&o(s.index)},[t,l,o]),k=e.useCallback(()=>{const s=t.enabledPrevValue(l);s&&o(s.index)},[t,l,o]),d=e.useCallback(()=>{const s=t.enabledFirstValue();s&&o(s.index)},[t,o]),b=e.useCallback(()=>{const s=t.enabledLastValue();s&&o(s.index)},[t,o]),x=e.useCallback(s=>{const p={Tab:M=>M.preventDefault(),Escape:j,ArrowDown:l===-1?d:C,ArrowUp:l===-1?b:k,Home:d,End:b}[s.key];p&&(s.preventDefault(),p(s))},[l,j,d,b,C,k]);return c.jsx(re,{as:"div",className:"ui-menu__content",__css:{...w.content},...n,onKeyDown:S(n==null?void 0:n.onKeyDown,x),children:c.jsx(L.ul,{ref:Q(v,u),role:"menu",className:N("ui-menu__list",a),tabIndex:-1,__css:{...w.list},...m,children:i})})});export{Ae as C,Z as M,B as a,Ee as b,Le as c,be as d,Ce as e,Ue as f,Y as u};