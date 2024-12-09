import{j as n}from"./jsx-runtime-CfatFE5O.js";import{o as Pe,S as rt,C as at}from"./theme-provider-B08WIPTu.js";import{H as lt,V as Le}from"./stack-C-NTCosl.js";import{B as it}from"./box-C9iD9jp7.js";import{T as $e}from"./text-Q2VnSl4h.js";import{u as ct}from"./index-CReU6qRk.js";import{r as u}from"./index-ClcD9ViR.js";import{u as ut}from"./use-checkbox-U_dzeJq7.js";import{f as X}from"./forward-ref-D13m8o2p.js";import{a as je}from"./use-component-style-Bj6hwx_Q.js";import{A as He,q as me,C as _e,d as z,a as ie,h as te,g as Ue,b as P,c as N,ao as dt,B as Me,ag as mt,a5 as ht,a6 as pt,a2 as ft,n as bt,o as Ae,O as gt,P as xt}from"./factory-ZSnRp-09.js";import{m as ye}from"./factory-g1ZPYqox.js";import{u as Ct,f as St,d as ve}from"./form-control-CsCePsX1.js";import{u as We}from"./index-_1kmLYlG.js";import{u as _t,a as vt,b as kt}from"./index-BLmAVBUH.js";import{r as Be,v as Oe,c as ke,p as yt}from"./number-CcP_arM8.js";import{m as Pt}from"./use-var-BqMKFNOM.js";import{T as jt}from"./tooltip-rXJtZ5n9.js";import{c as wt}from"./index-BaE0cyT7.js";import{t as Tt}from"./index-C676fJGf.js";import{L as It}from"./index-1Z3RJR9I.js";import{S as Nt}from"./select-DPhgsqyB.js";const{DescendantsContextProvider:Vt,useDescendant:Rt,useDescendants:Ft}=wt(),[zt,Ke]=He({name:"SegmentedControlContext",errorMessage:`useSegmentedControl returned is 'undefined'. Seems you forgot to wrap the components in "<SegmentedControl />"`}),we=X((r,s)=>{const[t,a]=je("SegmentedControl",r);let{id:o,name:d,className:f,children:b,defaultValue:g,isDisabled:l,isReadOnly:i,items:h=[],value:D,onChange:A,...E}=Pe(a);const V=u.useId();o??(o=V),d??(d=`segmented-control-${V}`);const H=me(A),$=Ft(),[j,v]=u.useState(-1),[w,U]=u.useState(!1),W=u.useRef(null),[T,R]=We({defaultValue:g,value:D,onChange:H}),Y=u.useCallback(x=>{if(l||i){x.preventDefault();return}R(x.target.value)},[l,i,R]),_=u.useCallback((x,k)=>{if(!l)if(k){const F=$.enabledNextValue(x);F&&v(F.index)}else v(x)},[$,l]),Q=u.useCallback(()=>v(-1),[]),q=u.useCallback((x={},k=null)=>({"aria-disabled":_e(l),"data-readonly":z(i),role:"radiogroup",...E,...x,id:o,ref:ie(W,k),onBlur:te(x.onBlur,Q)}),[o,l,i,Q,E]),de=u.useCallback(({index:x,isDisabled:k,isReadOnly:F,...S},B=null)=>{const p=S.disabled??k??l,O=S.readOnly??F??i,ne=S.value===T;return{...S,id:`${o}-${x}`,ref:B,type:"radio",name:d,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-disabled":_e(p),"data-checked":z(ne),"data-focus":z(x===j),"data-readonly":z(O),checked:ne,disabled:p||O,readOnly:O,onChange:te(S.onChange,L=>!p&&!O?Y(L):{})}},[l,i,T,o,d,j,Y]),pe=u.useCallback(({index:x,isDisabled:k,isReadOnly:F,...S},B=null)=>{const p=S.disabled??k??l,O=S.readOnly??F??i,ne=S.value===T,L=x===j;return{...S,ref:B,"aria-disabled":_e(p),"data-checked":z(ne),"data-focus":z(L),"data-focus-visible":z(L&&w),"data-readonly":z(O),onFocus:te(S.onFocus,()=>_(x,p||O||!1)),...p||O?{_active:{},_focus:{},_focusVisible:{},_hover:{},_invalid:{}}:{}}},[j,l,w,i,_,T]);u.useEffect(()=>Tt(U),[]);const se={alignItems:"center",display:"inline-flex",...t.container},Z=Ue(b);let G=[];if(!Z.length&&h.length?G=h.map(({label:x,value:k,...F},S)=>n.jsx(ce,{value:k,...F,children:x},S)):G=Z,T==null&&g==null)for(const x of G){if(x.type!==ce&&x.type.displayName!==ce.displayName)continue;const k=x.props.value;R(k);break}return n.jsx(Vt,{value:$,children:n.jsx(zt,{value:{styles:t,value:T,getInputProps:de,getLabelProps:pe},children:n.jsx(It,{id:o,children:n.jsx(P.div,{...q({},s),className:N("ui-segmented-control",f),__css:se,children:G})})})})});we.displayName="SegmentedControl";we.__ui__="SegmentedControl";const ce=X(({className:r,children:s,disabled:t,isDisabled:a,isReadOnly:o,readOnly:d,value:f,motionProps:b,onChange:g,...l},i)=>{const[,h]=dt({rerender:!0}),{styles:D,value:A,getInputProps:E,getLabelProps:V}=Ke(),{index:H,register:$}=Rt({disabled:a||o}),j={disabled:t,index:H,isDisabled:a,isReadOnly:o,readOnly:d,value:f},v={alignItems:"center",cursor:"pointer",display:"inline-flex",flex:"1 1 0%",justifyContent:"center",position:"relative",...D.button},w=f===A;return n.jsxs(P.label,{...V(j),className:N("ui-segmented-control__button",r),__css:v,...l,children:[n.jsx(P.input,{...E({onChange:g,...j},ie($,i))}),w&&h?n.jsx(Te,{...b}):null,n.jsx(P.span,{zIndex:"1",children:s})]})});ce.displayName="SegmentedControlButton";ce.__ui__="SegmentedControlButton";const Te=({className:r,transition:s,...t})=>{const{styles:a}=Ke(),o={h:"100%",position:"absolute",w:"100%",...a.cursor};return n.jsx(ye.div,{className:N("ui-segmented-control__cursor",r),layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.4,...s},__css:o,...t})};Te.displayName="SegmentedControlCursor";Te.__ui__="SegmentedControlCursor";const Dt=(r,s)=>{var t,a,o,d,f,b,g,l,i,h;return r??((t=s.thumb)==null?void 0:t.boxSize)??((a=s.thumb)==null?void 0:a.minBoxSize)??((o=s.thumb)==null?void 0:o.width)??((d=s.thumb)==null?void 0:d.w)??((f=s.thumb)==null?void 0:f.minWidth)??((b=s.thumb)==null?void 0:b.minW)??((g=s.thumb)==null?void 0:g.height)??((l=s.thumb)==null?void 0:l.h)??((i=s.thumb)==null?void 0:i.minHeight)??((h=s.thumb)==null?void 0:h.minH)??"3.5"},Et=({focusThumbOnChange:r=!0,...s})=>{r||(s.isReadOnly=!0);let{id:t,name:a,"aria-label":o,"aria-labelledby":d,"aria-valuetext":f,defaultValue:b,getAriaValueText:g,isReversed:l,max:i=100,min:h=0,orientation:D="horizontal",step:A=1,thumbSize:E,value:V,onChange:H,onChangeEnd:$,onChangeStart:j,...v}=Ct(s);const{"aria-readonly":w,disabled:U,readOnly:W,required:T,onBlur:R,onFocus:Y,..._}=ft(v,St);if(i<h)throw new Error("Do not assign a number less than 'min' to 'max'");const Q=me(j),q=me($),de=me(g),[pe,se]=We({defaultValue:b??h+(i-h)/2,value:V,onChange:H}),[Z,G]=u.useState(!1),[x,k]=u.useState(!1),F=!(U||W),S=(i-h)/10,B=A||(i-h)/100,p=ke(pe,h,i),O=i-p+h,L=Oe(l?O:p,h,i),y=D==="vertical",I=_t({focusThumbOnChange:r,isInteractive:F,max:i,min:h,step:A,value:p}),fe=u.useRef(null),Re=u.useRef(null),be=u.useRef(null),ge=u.useRef(null),ee=vt(ge);kt(Re,{onMove:e=>{const{isInteractive:m}=I.current;m&&Fe(e)},onSessionEnd:()=>{const{isInteractive:e,value:m}=I.current;e&&(G(!1),q(m))},onSessionStart:e=>{const{isInteractive:m,value:c}=I.current;m&&(G(!0),ze(),Fe(e),Q(c))}});const Ye=u.useCallback(e=>{var Ee;if(!be.current)return;const{max:m,min:c,step:C}=I.current;fe.current="pointer";const{bottom:K,height:ae,left:xe,width:Ce}=be.current.getBoundingClientRect(),{clientX:nt,clientY:ot}=((Ee=e.touches)==null?void 0:Ee[0])??e;let Se=(y?K-ot:nt-xe)/(y?ae:Ce);l&&(Se=1-Se);let le=yt(Se,c,m);return C&&(le=parseFloat(Be(le,c,C))),le=ke(le,c,m),le},[y,l,I]),Fe=e=>{const{value:m}=I.current,c=Ye(e);c!=null&&c!==m&&se(c)},ze=u.useCallback(()=>{const{focusThumbOnChange:e}=I.current;e&&setTimeout(()=>{var m;return(m=ge.current)==null?void 0:m.focus()})},[I]),M=u.useCallback(e=>{const{isInteractive:m,max:c,min:C}=I.current;m&&(e=parseFloat(Be(e,C,B)),e=ke(e,C,c),se(e))},[B,se,I]),oe=u.useCallback((e=B)=>M(l?p-e:p+e),[M,l,B,p]),re=u.useCallback((e=B)=>M(l?p+e:p-e),[M,l,B,p]),qe=u.useCallback(()=>M(b||0),[M,b]),Ge=u.useCallback(e=>M(e),[M]),De=u.useCallback(e=>{const{max:m,min:c}=I.current,K={ArrowDown:()=>re(),ArrowLeft:()=>re(),ArrowRight:()=>oe(),ArrowUp:()=>oe(),End:()=>M(m),Home:()=>M(c),PageDown:()=>re(S),PageUp:()=>oe(S)}[e.key];K&&(e.preventDefault(),e.stopPropagation(),K(e),fe.current="keyboard")},[M,I,re,oe,S]);bt(()=>{const{value:e}=I.current;ze(),fe.current==="keyboard"&&q(e)},[p,q]);const Je=u.useCallback((e={},m=null)=>{let{height:c,width:C}=ee??{height:"var(--ui-thumb-size)",width:"var(--ui-thumb-size)"};Ae(C)&&(C=`${C}px`),Ae(c)&&(c=`${c}px`);const K=y?{paddingLeft:`calc(${C} / 2)`,paddingRight:`calc(${C} / 2)`}:{paddingBottom:`calc(${c} / 2)`,paddingTop:`calc(${c} / 2)`},ae={...e.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...K};return{...v,...e,ref:ie(m,Re),style:ae,tabIndex:-1,vars:Pt(v.vars,[{name:"thumb-size",token:"sizes",value:E,__prefix:"ui"}])}},[y,v,ee,E]),Qe=u.useCallback((e={},m=null)=>({"aria-readonly":w,..._,...e,id:t,ref:m,type:"hidden",name:a,disabled:U,readOnly:W,required:T,value:p}),[w,U,_,t,a,W,T,p]),Ze=u.useCallback((e={},m=null)=>{const c={...e.style,position:"absolute",...y?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{..._,...e,ref:ie(m,be),style:c}},[y,_]),et=u.useCallback((e={},m=null)=>{const c=Math.abs(l?100-L:L),C={...e.style,position:"absolute",...y?{height:`${c}%`,left:"50%",transform:"translateX(-50%)",...l?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${c}%`,...l?{right:"0%"}:{left:"0%"}}};return{..._,...e,ref:m,style:C}},[l,y,_,L]),tt=u.useCallback((e,m=null)=>{let c=Oe(e.value,h,i);c=l?100-c:c;const C={...e.style,pointerEvents:"none",position:"absolute",...y?{bottom:`${c}%`}:{left:`${c}%`}};return{..._,...e,ref:m,style:C,"aria-hidden":!0,"data-highlighted":z(e.value<=p),"data-invalid":z(e.value<h||i<e.value)}},[l,y,i,h,_,p]),st=u.useCallback((e={},m=null)=>{const c=L;let C="var(--ui-thumb-size)",K="var(--ui-thumb-size)";ee&&(C=`${ee.width}px`,K=`${ee.height}px`);const ae=`calc(${c}% - (${K} / 2))`,xe=`calc(${c}% - (${C} / 2))`,Ce={...e.style,position:"absolute",touchAction:"none",userSelect:"none",...y?{bottom:ae}:{left:xe}};return{"aria-label":o??"Slider thumb","aria-labelledby":d,"aria-readonly":w,..._,...e,ref:ie(m,ge),style:Ce,"aria-orientation":D,"aria-valuemax":i,"aria-valuemin":h,"aria-valuenow":p,"aria-valuetext":f??de(p)??p.toString(),"data-active":z(Z&&r),role:"slider",tabIndex:F&&r?0:void 0,onBlur:te(e.onBlur,R,()=>k(!1)),onFocus:te(e.onFocus,Y,()=>k(!0)),onKeyDown:te(e.onKeyDown,De)}},[L,ee,y,o,d,w,_,D,i,h,p,f,de,Z,r,F,R,Y,De]);return{isDragging:Z,isFocused:x,isVertical:y,reset:qe,stepDown:re,stepTo:Ge,stepUp:oe,value:p,getContainerProps:Je,getFilledTrackProps:et,getInputProps:Qe,getMarkProps:tt,getThumbProps:st,getTrackProps:Ze}},[$t,he]=He({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),Ie=X((r,s)=>{const[t,a]=je("Slider",r),{className:o,children:d,filledTrackColor:f,thumbColor:b,thumbSize:g,trackColor:l,trackSize:i,filledTrackProps:h,inputProps:D,thumbProps:A,trackProps:E,...V}=Pe(a),{isVertical:H,getContainerProps:$,getFilledTrackProps:j,getInputProps:v,getMarkProps:w,getThumbProps:U,getTrackProps:W}=Et({...V,thumbSize:Dt(g,t)}),T={...t.container},R=Ue(d),Y=Me(R,ue),_=Me(R,J),Q=mt(R,J),q=ht(R)?d:pt(R,ue,J);return n.jsx($t,{value:{filledTrackColor:f,isVertical:H,styles:t,thumbColor:b,thumbSize:g,trackColor:l,trackSize:i,filledTrackProps:h,getFilledTrackProps:j,getMarkProps:w,getThumbProps:U,getTrackProps:W,thumbProps:A,trackProps:E},children:n.jsxs(P.div,{className:N("ui-slider",o),__css:T,...$(),children:[n.jsx(P.input,{...v(D,s)}),Y??n.jsx(ue,{}),q,_??(Q?null:n.jsx(J,{}))]})})});Ie.displayName="Slider";Ie.__ui__="Slider";const ue=X(({className:r,children:s,filledTrackProps:t,...a},o)=>{const{isVertical:d,styles:f,trackColor:b,trackSize:g,getTrackProps:l,trackProps:i}=he(),h={...f.track};return n.jsx(P.div,{className:N("ui-slider__track",r),__css:h,...l({...b?{bg:b}:{},...g?d?{w:g}:{h:g}:{},...i,...a},o),children:s??n.jsx(Ne,{...t})})});ue.displayName="SliderTrack";ue.__ui__="SliderTrack";const Ne=X(({className:r,...s},t)=>{const{filledTrackColor:a,styles:o,filledTrackProps:d,getFilledTrackProps:f}=he(),b={...o.filledTrack};return n.jsx(P.div,{className:N("ui-slider__track-filled",r),__css:b,...f({...a?{bg:a}:{},...d,...s},t)})});Ne.displayName="SliderFilledTrack";Ne.__ui__="SliderFilledTrack";const Xe=X(({className:r,...s},t)=>{const{styles:a,getMarkProps:o}=he(),d={alignItems:"center",display:"inline-flex",justifyContent:"center",...a.mark};return n.jsx(P.div,{className:N("ui-slider__mark",r),__css:d,...o(s,t)})});Xe.displayName="SliderMark";Xe.__ui__="SliderMark";const J=X(({className:r,...s},t)=>{const{styles:a,thumbColor:o,thumbSize:d,getThumbProps:f,thumbProps:b}=he(),g={...a.thumb};return n.jsx(P.div,{className:N("ui-slider__thumb",r),__css:g,...f({...o?{bg:o}:{},...d?{boxSize:d}:{},...b,...s},t)})});J.displayName="SliderThumb";J.__ui__="SliderThumb";const Ve=X((r,s)=>{const[t,a]=je("Switch",r),{className:o,children:d,flexDirection:f,gap:b="0.5rem",icon:g,isReverse:l,transition:i={type:"spring",damping:40,stiffness:700},inputProps:h,labelProps:D,...A}=Pe(a),{isActive:E,isChecked:V,isFocused:H,isHovered:$,props:j,getContainerProps:v,getIconProps:w,getInputProps:U,getLabelProps:W}=ut({selectOnEnter:!0,...A}),T=g?u.cloneElement(g,{isActive:E,isChecked:V,isFocused:H,isHovered:$}):null;return n.jsxs(P.label,{ref:s,className:N("ui-switch",o),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",flexDirection:f??(l?"row-reverse":"row"),gap:b,position:"relative",verticalAlign:"top",...t.container},...v(),...j,children:[n.jsx(P.input,{className:N("ui-switch__input",o),"aria-checked":V,role:"switch",...U(h,s)}),T??n.jsx(ye.div,{layout:!0,layoutRoot:!0,children:n.jsx(P.div,{className:N("ui-switch__track",o),__css:{alignItems:"center",boxSizing:"content-box",display:"inline-flex",flexShrink:0,justifyContent:"flex-start",...t.track},...w(),children:n.jsx(ye.div,{className:N("ui-switch__thumb",o),"data-checked":z(V),layout:!0,transition:i,__css:{...t.thumb}})})}),d?n.jsx(P.span,{className:N("ui-switch__label",o),__css:{...t.label},...W(D),children:d}):null]})});Ve.displayName="Switch";Ve.__ui__="Switch";const us=[...rt,...at],ds=({name:r,colors:s})=>Object.entries(s[r]??{}).map(([t,a])=>n.jsx(Mt,{name:r,tone:t,value:a},t)),Mt=({name:r,tone:s,value:t})=>{const{colorMode:a}=gt();return n.jsxs(lt,{children:[n.jsx(it,{bg:s?`${r}.${s}`:r,boxShadow:"inner",minH:"12",minW:"12",rounded:"md"}),n.jsxs(Le,{gap:"1",children:[n.jsxs($e,{fontWeight:"semibold",lineClamp:1,m:"0",children:[r.charAt(0).toUpperCase()+r.slice(1)," ",s]}),n.jsx($e,{lineClamp:1,m:"0",children:xt(t)?a==="light"?t[0]:t[1]:t})]})]},s)},ms=({colorScheme:r,size:s,variant:t,component:a,items:o,...d})=>{const f={colorScheme:r,size:s,variant:t};return n.jsx(Le,{w:"auto",...d,children:o.map((b,g)=>n.jsx(At,{component:a,item:{...f,...b}},g))})},At=({component:r,item:s})=>{const{label:t,...a}=s,{isOpen:o,onClose:d,onOpen:f}=ct();switch(r){case"Select":return n.jsx(ve,{label:t,children:n.jsx(Nt,{...a})});case"SegmentedControl":return n.jsx(ve,{label:t,children:n.jsx(we,{...a})});case"Slider":return n.jsx(ve,{label:t,children:n.jsx(Ie,{onMouseEnter:f,onMouseLeave:d,...a,children:n.jsx(jt,{label:a.value,open:o,placement:"top",children:n.jsx(J,{})})})});default:return n.jsx(Ve,{...a,children:t})}};export{Mt as C,ms as P,we as S,ce as a,Ie as b,us as c,Xe as d,J as e,ue as f,Ne as g,Ve as h,ds as i,Dt as j};