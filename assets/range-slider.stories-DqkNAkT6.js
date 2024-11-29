import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as Nr}from"./index-gGKStiao.js";import{r as u}from"./index-ClcD9ViR.js";import{u as Hr,C as Or}from"./index.esm-CEdvtQ_U.js";import{j as Lr,c as Ur}from"./components-CWQ3D1cI.js";import{u as Kr}from"./index-De_nPH_B.js";import{u as Xr,c as Yr,b as qr}from"./index-BLjMRlHy.js";import{u as Wr,f as Gr}from"./form-control-C7lyVmHF.js";import{y as Jr,A as Qr,B as Ye,ag as un,a5 as Zr,a6 as ea,b as q,c as re,a2 as na,p as qe,l as ra,a as cn,P as aa,d as We,h as Ge}from"./factory-Dfrbb1EY.js";import{f as H}from"./forward-ref-D13m8o2p.js";import{a as ta}from"./use-component-style-fOirb5M1.js";import{o as sa}from"./theme-provider-DSx3k1bh.js";import{c as dn,v as mn,r as la,p as oa}from"./number-CcP_arM8.js";import{m as ia}from"./use-var-BQS3JFPa.js";import{A as Je}from"./activity-r-k-Ltpl.js";import{T as I}from"./text-ACfjY0cR.js";import{C as Qe}from"./center-CU3SeQQI.js";import{F as gn}from"./flex-DjgpQWnX.js";import{B as ne}from"./button-3gvEA_m9.js";import{V as wr}from"./stack-CJbkc0zr.js";import{T as pn}from"./tooltip-3XDSqhYB.js";import{F as Fe}from"./fieldset-XmGjM8yj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4SEQqYY.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-DkNUKS4r.js";import"./index-BAa14J_p.js";import"./i18n-provider-BEOsEj1w.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-Bs7NbL3P.js";import"./index-D7KS8MXr.js";import"./Combination-CkmEMpJG.js";import"./loading-C7VoLX3j.js";import"./icon-DDeGQYl6.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-BMWh88P0.js";import"./index-ZuzByk-F.js";import"./factory-DeSWW4o7.js";import"./notice-BiV1MNuO.js";import"./alert-DWFIkvOW.js";import"./close-button-DENBYMYY.js";import"./use-ripple-59xURXHY.js";import"./container-Co5ig03C.js";import"./box-JOSxMso6.js";import"./use-checkbox-DuFV5g_J.js";import"./index-DImDLiuZ.js";import"./index-O1jdRUiZ.js";import"./index-B5Z2HpMN.js";import"./select-Debne6no.js";import"./select-list-BdP6n_qA.js";import"./index-CgNA1xsw.js";import"./index-DqeO0dAp.js";import"./index-Y4TAv5_r.js";import"./popover-trigger-BPJZ9KgK.js";import"./slide-fade-CQuVyWIS.js";import"./index-D_3Ilmao.js";import"./index-CKnINgQh.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Crg7yCn-.js";import"./scale-fade-DtFg8nlV.js";import"./index-DYgLfGUQ.js";import"./index-BVP762bF.js";import"./index-CFtnIMNb.js";import"./event-C_48urmU.js";import"./createLucideIcon-DHJHrKis.js";import"./visually-hidden-7f6lnkhb.js";const ua=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:c,"aria-label":S,"aria-labelledby":R,"aria-valuetext":f,betweenThumbs:b=0,defaultValue:k,getAriaValueText:$,isReversed:m,max:d=100,min:g=0,orientation:E="horizontal",step:W=1,thumbSize:ae,value:Ie,onChange:$e,onChangeEnd:De,onChangeStart:Be,...O}=Wr(s);const{"aria-readonly":L,disabled:U,readOnly:G,required:P,onBlur:te,onFocus:se,...M}=na(O,Gr);if(k=k??[g+(d-g)/4,d-(d-g)/4],d<g)throw new Error("Do not assign a number less than 'min' to 'max'");const Ae=qe(Be),J=qe(De),le=qe($),[yr,oe]=Kr({defaultValue:k,value:Ie,onChange:$e}),Pr=u.useId(),[Ne,Ze]=u.useState(!1),[Vr,en]=u.useState(!1),He=!(U||G),Oe=(d-g)/10,K=W||(d-g)/100,nn=b*W,T=yr.map(r=>dn(r,g,d)),[rn,an]=T,Fr=T.map(r=>d-r+g),D=(m?Fr:T).map(r=>mn(r,g,d)),_r=[{max:an-nn,min:g},{max:d,min:rn+nn}],x=E==="vertical",C=Xr({betweenThumbs:b,disabled:U,focusThumbOnChange:n,isInteractive:He,isReversed:m,isVertical:x,max:d,min:g,orientation:E,step:W,valueBounds:_r,values:T}),X=u.useRef(-1),Le=u.useRef(null),ie=u.useRef(null),Ue=u.useRef(null),B=Yr({getNodes:()=>{var t;const r=(t=ie.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=Pr),c??(c=a);const Q=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Ke=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Xe=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);qr(ie,{onMove:r=>{const t=X.current,{isInteractive:l}=C.current;if(!l||t==-1)return;const i=tn(r)||0;_(t,i),sn(t)},onSessionEnd:()=>{const{isInteractive:r,values:t}=C.current;r&&(Ze(!1),J(t))},onSessionStart:r=>{const{isInteractive:t,values:l}=C.current;if(!t)return;Ze(!0);const i=tn(r)||0,v=l.map(y=>Math.abs(y-i)),w=Math.min(...v);let p=v.indexOf(w);const j=v.filter(y=>y===w);j.length>1&&i>l[p]&&(p=p+j.length-1),X.current=p,_(p,i),sn(p),Ae(l)}});const tn=u.useCallback(r=>{var on;if(!Ue.current)return;const{max:t,min:l}=C.current;Le.current="pointer";const{bottom:i,height:v,left:w,width:p}=Ue.current.getBoundingClientRect(),{clientX:j,clientY:A}=((on=r.touches)==null?void 0:on[0])??r;let z=(x?i-A:j-w)/(x?v:p);return m&&(z=1-z),oa(z,l,t)},[C,x,m]),sn=u.useCallback(r=>{var i;if(r===-1||!n)return;const t=Q(r),l=(i=ie.current)==null?void 0:i.ownerDocument.getElementById(t);l&&setTimeout(()=>l.focus())},[n,Q]),_=u.useCallback((r,t)=>{const{isInteractive:l,valueBounds:i,values:v}=C.current;if(!l)return;const{max:w=100,min:p=0}=i[r]??{};t=parseFloat(la(t,p,K)),t=dn(t,p,w);const j=[...v];j[r]=t,oe(j)},[C,K,oe]),Z=u.useCallback((r,t=K)=>{const{values:l}=C.current,i=l[r];_(r,m?i-t:i+t)},[_,m,C,K]),ee=u.useCallback((r,t=K)=>{const{values:l}=C.current,i=l[r];_(r,m?i+t:i-t)},[_,m,C,K]),zr=u.useCallback(()=>oe(k),[k,oe]),ln=u.useCallback(r=>{const t=X.current,{valueBounds:l}=C.current,{max:i=100,min:v=0}=l[t]??{},p={ArrowDown:()=>ee(t),ArrowLeft:()=>ee(t),ArrowRight:()=>Z(t),ArrowUp:()=>Z(t),End:()=>_(t,i),Home:()=>_(t,v),PageDown:()=>ee(t,Oe),PageUp:()=>Z(t,Oe)}[r.key];p&&(r.preventDefault(),r.stopPropagation(),p(r),Le.current="keyboard")},[_,C,ee,Z,Oe]);ra(()=>{const{values:r}=C.current;Le.current==="keyboard"&&J(r)},[rn,an,J]);const Er=u.useCallback((r={},t=null)=>{let l="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if(B.length){const p=x?"height":"width",j={height:0,width:0},{height:A,width:y}=B.reduce((Y=j,z=j)=>Y[p]>z[p]?Y:z,j)??{};y&&(l=`${y}px`),A&&(i=`${A}px`)}const v=x?{paddingLeft:`calc(${l} / 2)`,paddingRight:`calc(${l} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},w={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...v};return{...O,...r,id:`slider-container-${a}`,ref:cn(t,ie),style:w,tabIndex:-1,vars:ia(O.vars,[{name:"thumb-size",token:"sizes",value:ae,__prefix:"ui"}])}},[a,x,O,ae,B]),Ir=u.useCallback(({index:r,...t},l=null)=>({"aria-readonly":L,...M,...t,id:Ke(r),ref:l,type:"hidden",name:aa(c)?c[r]:`${c}-${r}`,disabled:U,readOnly:G,required:P,value:T[r]}),[L,U,Ke,c,G,P,M,T]),$r=u.useCallback((r={},t=null)=>{const l={...r.style,position:"absolute",...x?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${a}`,ref:cn(t,Ue),style:l}},[a,x,M]),Dr=u.useCallback((r={},t=null)=>{const l=Math.abs(D[1]-D[0]),i=m?100-D[0]:D[0],v={...r.style,position:"absolute",...x?{height:`${l}%`,left:"50%",transform:"translateX(-50%)",...m?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${l}%`,...m?{right:`${i}%`}:{left:`${i}%`}}};return{...M,...r,id:`slider-filled-track-${a}`,ref:t,style:v}},[a,m,x,M,D]),Br=u.useCallback((r,t=null)=>{let l=mn(r.value,g,d);l=m?100-l:l;const i={...r.style,pointerEvents:"none",position:"absolute",...x?{bottom:`${l}%`}:{left:`${l}%`}};return{...M,...r,id:Xe(r.value),ref:t,style:i,"aria-hidden":!0,"data-highlighted":We(T[0]<=r.value&&r.value<=T[1]),"data-invalid":We(r.value<g||d<r.value)}},[Xe,m,x,d,g,M,T]),Ar=u.useCallback(({index:r,...t},l=null)=>{var Y,z;const i=D[r];let v="var(--ui-thumb-size)",w="var(--ui-thumb-size)";B[r]&&(v=`${(Y=B[r])==null?void 0:Y.width}px`,w=`${(z=B[r])==null?void 0:z.height}px`);const p=`calc(${i}% - (${w} / 2))`,j=`calc(${i}% - (${v} / 2))`,A={...t.style,position:"absolute",touchAction:"none",userSelect:"none",...x?{bottom:p}:{left:j}},y=T[r];if(y==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":S??"Slider thumb","aria-labelledby":R,"aria-readonly":L,...M,...t,id:Q(r),ref:l,style:A,"aria-orientation":E,"aria-valuemax":d,"aria-valuemin":g,"aria-valuenow":y,"aria-valuetext":f??le(y)??y.toString(),"data-active":We(Ne&&n&&X.current===r),role:"slider",tabIndex:He&&n?0:void 0,onBlur:Ge(t.onBlur,te,()=>{X.current=-1,en(!1)}),onFocus:Ge(t.onFocus,se,()=>{X.current=r,en(!0)}),onKeyDown:Ge(t.onKeyDown,ln)}},[D,B,x,T,S,R,L,M,Q,E,d,g,f,le,Ne,n,He,te,se,ln]);return{getInputId:Ke,getMarkerId:Xe,getThumbId:Q,isDragging:Ne,isFocused:Vr,isVertical:x,reset:zr,stepDown:ee,stepUp:Z,values:T,getContainerProps:Er,getFilledTrackProps:Dr,getInputProps:Ir,getMarkProps:Br,getThumbProps:Ar,getTrackProps:$r}},[ca,_e]=Jr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),o=H((n,s)=>{const[a,c]=ta("RangeSlider",n),{className:S,children:R,filledTrackColor:f,thumbColor:b,thumbSize:k,trackColor:$,trackSize:m,filledTrackProps:d,inputProps:g,thumbProps:E,trackProps:W,...ae}=sa(c),{isVertical:Ie,getContainerProps:$e,getFilledTrackProps:De,getInputProps:Be,getMarkProps:O,getThumbProps:L,getTrackProps:U}=ua({...ae,thumbSize:Lr(k,a)}),G={...a.container},P=Qr(R),te=Ye(P,N),se=Ye(P,V),M=Ye(P,F),Ae=un(P,V),J=un(P,F),le=Zr(P)?R:ea(P,N,V,F);return e.jsx(ca,{value:{filledTrackColor:f,isVertical:Ie,styles:a,thumbColor:b,thumbSize:k,trackColor:$,trackSize:m,filledTrackProps:d,getFilledTrackProps:De,getInputProps:Be,getMarkProps:O,getThumbProps:L,getTrackProps:U,inputProps:g,thumbProps:E,trackProps:W},children:e.jsxs(q.div,{className:re("ui-slider",S),__css:G,...$e({},s),children:[te??e.jsx(N,{}),le,se??(Ae?null:e.jsx(V,{})),M??(J?null:e.jsx(F,{}))]})})});o.displayName="RangeSlider";o.__ui__="RangeSlider";const N=H(({className:n,children:s,filledTrackProps:a,...c},S)=>{const{isVertical:R,styles:f,trackColor:b,trackSize:k,getTrackProps:$,trackProps:m}=_e(),d={...f.track};return e.jsx(q.div,{className:re("ui-slider__track",n),__css:d,...$({...b?{bg:b}:{},...k?R?{w:k}:{h:k}:{},...m,...c},S),children:s??e.jsx(ze,{...a})})});N.displayName="RangeSliderTrack";N.__ui__="RangeSliderTrack";const ze=H(({className:n,...s},a)=>{const{filledTrackColor:c,styles:S,filledTrackProps:R,getFilledTrackProps:f}=_e(),b={...S.filledTrack};return e.jsx(q.div,{className:re("ui-slider__track-filled",n),__css:b,...f({...c?{bg:c}:{},...R,...s},a)})});ze.displayName="RangeSliderFilledTrack";ze.__ui__="RangeSliderFilledTrack";const h=H(({className:n,...s},a)=>{const{styles:c,getMarkProps:S}=_e(),R={alignItems:"center",display:"inline-flex",justifyContent:"center",...c.mark};return e.jsx(q.div,{className:re("ui-slider__mark",n),__css:R,...S(s,a)})});h.displayName="RangeSliderMark";h.__ui__="RangeSliderMark";const Ee=H(({className:n,children:s,index:a,...c},S)=>{const{styles:R,thumbColor:f,thumbSize:b,getInputProps:k,getThumbProps:$,inputProps:m,thumbProps:d}=_e(),g={...R.thumb},{children:E}=d??{};return e.jsxs(q.div,{className:re("ui-slider__thumb",n),__css:g,...$({index:a,...f?{bg:f}:{},...b?{boxSize:b}:{},...d,...c},S),children:[e.jsx(q.input,{...k({...m,index:a},S)}),s??E]})});Ee.displayName="RangeSliderThumb";Ee.__ui__="RangeSliderThumb";const V=H((n,s)=>e.jsx(Ee,{ref:s,index:0,...n}));V.displayName="RangeSliderStartThumb";V.__ui__="RangeSliderStartThumb";const F=H((n,s)=>e.jsx(Ee,{ref:s,index:1,...n}));F.displayName="RangeSliderEndThumb";F.__ui__="RangeSliderEndThumb";const wt={component:o,title:"Components / Forms / RangeSlider"},ue=()=>e.jsx(o,{}),ce=()=>e.jsx(o,{defaultValue:[10,90]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",defaultValue:[0,25]}),e.jsx(o,{size:"md",defaultValue:[25,50]}),e.jsx(o,{size:"lg",defaultValue:[50,75]})]}),me=()=>e.jsx(e.Fragment,{children:Ur.map(n=>e.jsx(o,{colorScheme:n},n))}),ge=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReversed:!0}),e.jsx(o,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),he=()=>{const[n,s]=u.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{max:200,min:0,value:n,onChange:s})]})},Se=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{step:5,value:n,onChange:s})]})},be=()=>e.jsx(o,{betweenThumbs:10}),xe=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Qe,{gap:"xl",w:"full",children:[e.jsxs(gn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(I,{children:"Min"}),e.jsxs(Qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(gn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(I,{children:"Max"}),e.jsxs(Qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},ve=()=>e.jsxs(wr,{gap:"lg",children:[e.jsxs(o,{size:"sm",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"md",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"lg",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),Re=()=>{const[n,s]=u.useState([25,75]),[a,{off:c,on:S}]=Nr(!1);return e.jsxs(o,{mt:"10",value:n,onChange:s,onMouseEnter:S,onMouseLeave:c,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(pn,{label:`${n[0]}%`,open:a,placement:"top",children:e.jsx(V,{})}),e.jsx(pn,{label:`${n[1]}%`,open:a,placement:"top",children:e.jsx(F,{})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred price range.",isDisabled:!0,legend:"Hotel Price Range",children:e.jsx(o,{})})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred price range.",isReadOnly:!0,legend:"Hotel Price Range",children:e.jsx(o,{})})]}),Ce=()=>{const[n,s]=u.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Fe,{errorMessage:"Minimum price should be set to 20 or higher.",isInvalid:n[0]<20,legend:"Hotel Price Range",children:e.jsx(o,{value:n,onChange:s})})]})},je=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(o,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(o,{children:[e.jsx(N,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(V,{bg:"blue.700"}),e.jsx(F,{bg:"blue.700"})]}),e.jsxs(o,{children:[e.jsx(N,{bg:"red.200",children:e.jsx(ze,{bg:"red.500"})}),e.jsx(V,{bg:"red.700"}),e.jsx(F,{bg:"red.700"})]})]}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{thumbProps:{boxSize:"6",children:e.jsx(Je,{}),color:"blue.500"}}),e.jsxs(o,{children:[e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Je,{})}),e.jsx(F,{boxSize:"6",color:"blue.500",children:e.jsx(Je,{})})]})]}),Te=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(o,{mt:"10",value:n,onChange:s,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},we=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{value:n,onChange:s})]})},ye=()=>{const[n,s]=u.useState([25,75]),[a,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(o,{value:n,onChange:s,onChangeStart:c})]})},Pe=()=>{const[n,s]=u.useState([25,75]),[a,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(o,{value:n,onChange:s,onChangeEnd:c})]})},Ve=()=>{var f;const n={rangeSlider:[25,75]},{control:s,formState:{errors:a},handleSubmit:c,watch:S}=Hr({defaultValues:n}),R=b=>console.log("submit:",b);return console.log("watch:",S()),e.jsxs(wr,{as:"form",onSubmit:c(R),children:[e.jsx(Fe,{errorMessage:(f=a.rangeSlider)==null?void 0:f.message,isInvalid:!!a.rangeSlider,legend:"Hotel Price Range",children:e.jsx(Or,{name:"rangeSlider",control:s,render:({field:b})=>e.jsx(o,{...b})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var hn,Sn,bn;ue.parameters={...ue.parameters,docs:{...(hn=ue.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(bn=(Sn=ue.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};var xn,vn,Rn;ce.parameters={...ce.parameters,docs:{...(xn=ce.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(Rn=(vn=ce.parameters)==null?void 0:vn.docs)==null?void 0:Rn.source}}};var fn,kn,Cn;de.parameters={...de.parameters,docs:{...(fn=de.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(Cn=(kn=de.parameters)==null?void 0:kn.docs)==null?void 0:Cn.source}}};var jn,Mn,Tn;me.parameters={...me.parameters,docs:{...(jn=me.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(Tn=(Mn=me.parameters)==null?void 0:Mn.docs)==null?void 0:Tn.source}}};var wn,yn,Pn;ge.parameters={...ge.parameters,docs:{...(wn=ge.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Pn=(yn=ge.parameters)==null?void 0:yn.docs)==null?void 0:Pn.source}}};var Vn,Fn,_n;pe.parameters={...pe.parameters,docs:{...(Vn=pe.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider h="calc(100vh - 16px * 3 - 14px)" isReversed orientation="vertical" />
    </>;
}`,...(_n=(Fn=pe.parameters)==null?void 0:Fn.docs)==null?void 0:_n.source}}};var zn,En,In;he.parameters={...he.parameters,docs:{...(zn=he.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(In=(En=he.parameters)==null?void 0:En.docs)==null?void 0:In.source}}};var $n,Dn,Bn;Se.parameters={...Se.parameters,docs:{...($n=Se.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...(Bn=(Dn=Se.parameters)==null?void 0:Dn.docs)==null?void 0:Bn.source}}};var An,Nn,Hn;be.parameters={...be.parameters,docs:{...(An=be.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Hn=(Nn=be.parameters)==null?void 0:Nn.docs)==null?void 0:Hn.source}}};var On,Ln,Un;xe.parameters={...xe.parameters,docs:{...(On=xe.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider focusThumbOnChange={false} step={5} value={value} />

      <Center gap="xl" w="full">
        <Flex align="center" direction="column" gap="sm">
          <Text>Min</Text>

          <Center gap="md">
            <Button isDisabled={value[0] === 0} onClick={() => setValue(prev => prev[0] !== 0 ? [prev[0] - 5, prev[1]] : prev)}>
              -5
            </Button>

            <Button colorScheme="blue" isDisabled={value[0] === 100 || value[0] === value[1]} onClick={() => setValue(prev => prev[0] !== 100 && value[0] !== value[1] ? [prev[0] + 5, prev[1]] : prev)}>
              +5
            </Button>
          </Center>
        </Flex>

        <Flex align="center" direction="column" gap="sm">
          <Text>Max</Text>

          <Center gap="md">
            <Button isDisabled={value[1] === 0 || value[0] === value[1]} onClick={() => setValue(prev => prev[1] !== 0 && value[0] !== value[1] ? [prev[0], prev[1] - 5] : prev)}>
              -5
            </Button>

            <Button colorScheme="blue" isDisabled={value[1] === 100} onClick={() => setValue(prev => prev[1] !== 100 ? [prev[0], prev[1] + 5] : prev)}>
              +10
            </Button>
          </Center>
        </Flex>
      </Center>
    </>;
}`,...(Un=(Ln=xe.parameters)==null?void 0:Ln.docs)==null?void 0:Un.source}}};var Kn,Xn,Yn;ve.parameters={...ve.parameters,docs:{...(Kn=ve.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <RangeSlider size="sm">
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={50} w="10">
          50%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={75} w="10">
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size="md">
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={50} w="10">
          50%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={75} w="10">
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size="lg">
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={50} w="10">
          50%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={75} w="10">
          75%
        </RangeSliderMark>
      </RangeSlider>
    </VStack>;
}`,...(Yn=(Xn=ve.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var qn,Wn,Gn;Re.parameters={...Re.parameters,docs:{...(qn=Re.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [isOpen, {
    off,
    on
  }] = useBoolean(false);
  return <RangeSlider mt="10" value={value} onChange={onChange} onMouseEnter={on} onMouseLeave={off}>
      <RangeSliderMark ml="-5" value={25} w="10">
        25%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={50} w="10">
        50%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={75} w="10">
        75%
      </RangeSliderMark>

      <Tooltip label={\`\${value[0]}%\`} open={isOpen} placement="top">
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip label={\`\${value[1]}%\`} open={isOpen} placement="top">
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>;
}`,...(Gn=(Wn=Re.parameters)==null?void 0:Wn.docs)==null?void 0:Gn.source}}};var Jn,Qn,Zn;fe.parameters={...fe.parameters,docs:{...(Jn=fe.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <Fieldset helperMessage="Please select your preferred price range." isDisabled legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(Zn=(Qn=fe.parameters)==null?void 0:Qn.docs)==null?void 0:Zn.source}}};var er,nr,rr;ke.parameters={...ke.parameters,docs:{...(er=ke.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <Fieldset helperMessage="Please select your preferred price range." isReadOnly legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(rr=(nr=ke.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var ar,tr,sr;Ce.parameters={...Ce.parameters,docs:{...(ar=Ce.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <Fieldset errorMessage="Minimum price should be set to 20 or higher." isInvalid={value[0] < 20} legend="Hotel Price Range">
        <RangeSlider value={value} onChange={onChange} />
      </Fieldset>
    </>;
}`,...(sr=(tr=Ce.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var lr,or,ir;je.parameters={...je.parameters,docs:{...(lr=je.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider filledTrackColor="orange.500" thumbColor="orange.700" trackColor="orange.200" />

      <RangeSlider filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
    }} trackProps={{
      bg: "green.200"
    }} />

      <RangeSlider>
        <RangeSliderTrack bg="blue.200" filledTrackProps={{
        bg: "blue.500"
      }} />
        <RangeSliderStartThumb bg="blue.700" />
        <RangeSliderEndThumb bg="blue.700" />
      </RangeSlider>

      <RangeSlider>
        <RangeSliderTrack bg="red.200">
          <RangeSliderFilledTrack bg="red.500" />
        </RangeSliderTrack>

        <RangeSliderStartThumb bg="red.700" />
        <RangeSliderEndThumb bg="red.700" />
      </RangeSlider>
    </>;
}`,...(ir=(or=je.parameters)==null?void 0:or.docs)==null?void 0:ir.source}}};var ur,cr,dr;Me.parameters={...Me.parameters,docs:{...(ur=Me.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumbProps={{
      boxSize: "6",
      children: <ActivityIcon />,
      color: "blue.500"
    }} />

      <RangeSlider>
        <RangeSliderStartThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(dr=(cr=Me.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,gr,pr;Te.parameters={...Te.parameters,docs:{...(mr=Te.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <RangeSlider mt="10" value={value} onChange={onChange}>
      <RangeSliderMark ml="-5" value={25} w="10">
        25%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={50} w="10">
        50%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={75} w="10">
        75%
      </RangeSliderMark>
      <RangeSliderMark bg="blue.500" color="white" ml="-5" mt="-10" py="0.5" rounded="md" value={value[0]} w="10">
        {value[0]}%
      </RangeSliderMark>
      <RangeSliderMark bg="blue.500" color="white" ml="-5" mt="-10" py="0.5" rounded="md" value={value[1]} w="10">
        {value[1]}%
      </RangeSliderMark>
    </RangeSlider>;
}`,...(pr=(gr=Te.parameters)==null?void 0:gr.docs)==null?void 0:pr.source}}};var hr,Sr,br;we.parameters={...we.parameters,docs:{...(hr=we.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(br=(Sr=we.parameters)==null?void 0:Sr.docs)==null?void 0:br.source}}};var xr,vr,Rr;ye.parameters={...ye.parameters,docs:{...(xr=ye.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Rr=(vr=ye.parameters)==null?void 0:vr.docs)==null?void 0:Rr.source}}};var fr,kr,Cr;Pe.parameters={...Pe.parameters,docs:{...(fr=Pe.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Cr=(kr=Pe.parameters)==null?void 0:kr.docs)==null?void 0:Cr.source}}};var jr,Mr,Tr;Ve.parameters={...Ve.parameters,docs:{...(jr=Ve.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  interface Data {
    rangeSlider: [number, number];
  }
  const defaultValues: Data = {
    rangeSlider: [25, 75]
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
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.rangeSlider?.message} isInvalid={!!errors.rangeSlider} legend="Hotel Price Range">
        <Controller name="rangeSlider" control={control} render={({
        field
      }) => <RangeSlider {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Tr=(Mr=Ve.parameters)==null?void 0:Mr.docs)==null?void 0:Tr.source}}};const yt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{yt as __namedExportsOrder,ue as basic,je as customColor,we as customControl,Te as customMark,Me as customThumb,wt as default,fe as isDisabled,Ce as isInvalid,ke as isReadonly,Pe as onChangeEnd,ye as onChangeStart,Ve as reactHookForm,be as withBetweenThumbs,me as withColorScheme,ce as withDefaultValue,xe as withFocusThumbOnChange,ve as withMark,he as withMinMax,ge as withOrientation,pe as withReversed,de as withSize,Se as withStep,Re as withTooltip};
