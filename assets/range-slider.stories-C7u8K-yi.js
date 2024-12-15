import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{u as Hr,C as Or}from"./index.esm-Dl1kyd6X.js";import{j as Lr,c as Ur}from"./components-BHpPRnZt.js";import{u as qr}from"./index-D-iNr3rb.js";import{u as Kr,c as Xr,b as Yr}from"./index-B_9DrOMl.js";import{u as Wr,f as Gr}from"./form-control-DNngTyAT.js";import{A as Jr,g as Qr,B as Ye,ag as dn,a5 as Zr,a6 as ea,b as X,c as re,a2 as na,q as We,n as ra,a as mn,P as aa,d as Ge,h as Je}from"./factory-Bqmz9C5P.js";import{f as N}from"./forward-ref-D13m8o2p.js";import{a as ta}from"./use-component-style-D7fUVUlo.js";import{o as sa}from"./theme-provider-Dit74geM.js";import{c as gn,v as hn,r as la,p as oa}from"./number-CcP_arM8.js";import{m as ia}from"./use-var-DKkLsRXg.js";import{A as Qe}from"./activity-m39CGkFO.js";import{T as $}from"./text-Cr1YzEG3.js";import{C as Ze}from"./center-DxI5r7X_.js";import{F as pn}from"./flex-CcbyqeIa.js";import{B as ne}from"./button-B8Q1YJpe.js";import{V as Pr}from"./stack-DEpjuaqO.js";import{u as ua}from"./index-gGKStiao.js";import{T as Sn}from"./tooltip-BRhMOSGw.js";import{F as Fe}from"./fieldset-2iPkQaSi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-CS_Q_mBe.js";import"./index-DcJSUYRC.js";import"./use-checkbox-Bmr8WAWN.js";import"./index-5c62fTH4.js";import"./factory-Cbq3E2qU.js";import"./proxy-BYKFXsWv.js";import"./index-CieLuCnG.js";import"./index-S7lgn1rl.js";import"./select-BAi0Gejg.js";import"./select-list-B1sjvTim.js";import"./index-DxQD85Cv.js";import"./index-B4UZJbBZ.js";import"./icon-DeZ7GCXS.js";import"./index-D0QjGqiR.js";import"./popover-trigger-CaVm9NYE.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./index-BkD6i14w.js";import"./slide-fade-BhjlDBiO.js";import"./index-CZSIMnfE.js";import"./index-Pbv_ILj1.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BkYmOMuc.js";import"./scale-fade-13h1cMen.js";import"./index-CjWtGFYg.js";import"./index-Bqglt4Z4.js";import"./index-C6P-3PHl.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./event-C_48urmU.js";import"./createLucideIcon-C_T9K6g-.js";import"./loading-CmllsJT7.js";import"./visually-hidden-CuTTkjW9.js";const ca=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);const t=u.useId(),{id:c=t,name:g=c,"aria-label":R,"aria-labelledby":f,"aria-valuetext":S,betweenThumbs:_=0,max:d=100,min:m=0,defaultValue:P=[m+(d-m)/4,d-(d-m)/4],getAriaValueText:Y,isReversed:W,orientation:H="horizontal",reversed:b=W,step:G=1,thumbSize:ae,value:$e,onChange:De,onChangeEnd:Be,onChangeStart:Ie,...O}=Wr(s);if(d<m)throw new Error("Do not assign a number less than 'min' to 'max'");const{"aria-readonly":L,disabled:j,readOnly:J,required:te,onBlur:se,onFocus:le,...M}=na(O,Gr),[Ae,oe]=qr({defaultValue:P,value:$e,onChange:De}),[Ne,en]=u.useState(!1),[Vr,nn]=u.useState(!1),He=!(j||J),Oe=(d-m)/10,U=G||(d-m)/100,rn=_*G,T=Ae.map(r=>gn(r,m,d)),[an,tn]=T,Fr=T.map(r=>d-r+m),D=(b?Fr:T).map(r=>hn(r,m,d)),_r=[{max:tn-rn,min:m},{max:d,min:an+rn}],x=H==="vertical",k=Kr({betweenThumbs:_,disabled:j,focusThumbOnChange:n,interactive:He,max:d,min:m,orientation:H,reversed:b,step:G,valueBounds:_r,values:T,vertical:x}),q=u.useRef(-1),Le=u.useRef(null),ie=u.useRef(null),Ue=u.useRef(null),B=Xr({getNodes:()=>{var a;const r=(a=ie.current)==null?void 0:a.querySelectorAll("[role=slider]");return r?Array.from(r):[]}}),zr=We(Ie),qe=We(Be),sn=We(Y),Q=u.useCallback(r=>`slider-thumb-${c}-${r}`,[c]),Ke=u.useCallback(r=>`slider-input-${c}-${r}`,[c]),Xe=u.useCallback(r=>`slider-marker-${c}-${r}`,[c]);Yr(ie,{onMove:r=>{const a=q.current,{interactive:l}=k.current;if(!l||a==-1)return;const i=ln(r)||0;z(a,i),on(a)},onSessionEnd:()=>{const{interactive:r,values:a}=k.current;r&&(en(!1),qe(a))},onSessionStart:r=>{const{interactive:a,values:l}=k.current;if(!a)return;en(!0);const i=ln(r)||0,v=l.map(y=>Math.abs(y-i)),w=Math.min(...v);let h=v.indexOf(w);const C=v.filter(y=>y===w);C.length>1&&i>l[h]&&(h=h+C.length-1),q.current=h,z(h,i),on(h),zr(l)}});const ln=u.useCallback(r=>{var cn;if(!Ue.current)return;const{max:a,min:l}=k.current;Le.current="pointer";const{bottom:i,height:v,left:w,width:h}=Ue.current.getBoundingClientRect(),{clientX:C,clientY:I}=((cn=r.touches)==null?void 0:cn[0])??r;let E=(x?i-I:C-w)/(x?v:h);return b&&(E=1-E),oa(E,l,a)},[k,x,b]),on=u.useCallback(r=>{var i;if(r===-1||!n)return;const a=Q(r),l=(i=ie.current)==null?void 0:i.ownerDocument.getElementById(a);l&&setTimeout(()=>l.focus())},[n,Q]),z=u.useCallback((r,a)=>{const{interactive:l,valueBounds:i,values:v}=k.current;if(!l)return;const{max:w=100,min:h=0}=i[r]??{};a=parseFloat(la(a,h,U)),a=gn(a,h,w);const C=[...v];C[r]=a,oe(C)},[k,U,oe]),Z=u.useCallback((r,a=U)=>{const{values:l}=k.current,i=l[r];z(r,b?i-a:i+a)},[z,b,k,U]),ee=u.useCallback((r,a=U)=>{const{values:l}=k.current,i=l[r];z(r,b?i+a:i-a)},[z,b,k,U]),Er=u.useCallback(()=>oe(P),[P,oe]),un=u.useCallback(r=>{const a=q.current,{valueBounds:l}=k.current,{max:i=100,min:v=0}=l[a]??{},h={ArrowDown:()=>ee(a),ArrowLeft:()=>ee(a),ArrowRight:()=>Z(a),ArrowUp:()=>Z(a),End:()=>z(a,i),Home:()=>z(a,v),PageDown:()=>ee(a,Oe),PageUp:()=>Z(a,Oe)}[r.key];h&&(r.preventDefault(),r.stopPropagation(),h(r),Le.current="keyboard")},[z,k,ee,Z,Oe]);ra(()=>{const{values:r}=k.current;Le.current==="keyboard"&&qe(r)},[an,tn,qe]);const $r=u.useCallback((r={},a=null)=>{let l="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if(B.length){const h=x?"height":"width",C={height:0,width:0},{height:I,width:y}=B.reduce((K=C,E=C)=>K[h]>E[h]?K:E,C)??{};y&&(l=`${y}px`),I&&(i=`${I}px`)}const v=x?{paddingLeft:`calc(${l} / 2)`,paddingRight:`calc(${l} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},w={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...v};return{...O,...r,id:`slider-container-${c}`,ref:mn(a,ie),style:w,tabIndex:-1,vars:ia(O.vars,[{name:"thumb-size",token:"sizes",value:ae,__prefix:"ui"}])}},[c,x,O,ae,B]),Dr=u.useCallback(({index:r,...a},l=null)=>({"aria-readonly":L,...M,...a,id:Ke(r),ref:l,type:"hidden",name:aa(g)?g[r]:`${g}-${r}`,disabled:j,readOnly:J,required:te,value:T[r]}),[L,j,Ke,g,J,te,M,T]),Br=u.useCallback((r={},a=null)=>{const l={...r.style,position:"absolute",...x?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${c}`,ref:mn(a,Ue),style:l}},[c,x,M]),Ir=u.useCallback((r={},a=null)=>{const l=Math.abs(D[1]-D[0]),i=b?100-D[0]:D[0],v={...r.style,position:"absolute",...x?{height:`${l}%`,left:"50%",transform:"translateX(-50%)",...b?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${l}%`,...b?{right:`${i}%`}:{left:`${i}%`}}};return{...M,...r,id:`slider-filled-track-${c}`,ref:a,style:v}},[c,b,x,M,D]),Ar=u.useCallback((r,a=null)=>{let l=hn(r.value,m,d);l=b?100-l:l;const i={...r.style,pointerEvents:"none",position:"absolute",...x?{bottom:`${l}%`}:{left:`${l}%`}};return{...M,...r,id:Xe(r.value),ref:a,style:i,"aria-hidden":!0,"data-highlighted":Ge(T[0]<=r.value&&r.value<=T[1]),"data-invalid":Ge(r.value<m||d<r.value)}},[Xe,b,x,d,m,M,T]),Nr=u.useCallback(({index:r,...a},l=null)=>{var K,E;const i=D[r];let v="var(--ui-thumb-size)",w="var(--ui-thumb-size)";B[r]&&(v=`${(K=B[r])==null?void 0:K.width}px`,w=`${(E=B[r])==null?void 0:E.height}px`);const h=`calc(${i}% - (${w} / 2))`,C=`calc(${i}% - (${v} / 2))`,I={...a.style,position:"absolute",touchAction:"none",userSelect:"none",...x?{bottom:h}:{left:C}},y=T[r];if(y==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":R??"Slider thumb","aria-labelledby":f,"aria-readonly":L,...M,...a,id:Q(r),ref:l,style:I,"aria-orientation":H,"aria-valuemax":d,"aria-valuemin":m,"aria-valuenow":y,"aria-valuetext":S??sn(y)??y.toString(),"data-active":Ge(Ne&&n&&q.current===r),role:"slider",tabIndex:He&&n?0:void 0,onBlur:Je(a.onBlur,se,()=>{q.current=-1,nn(!1)}),onFocus:Je(a.onFocus,le,()=>{q.current=r,nn(!0)}),onKeyDown:Je(a.onKeyDown,un)}},[D,B,x,T,R,f,L,M,Q,H,d,m,S,sn,Ne,n,He,se,le,un]);return{dragging:Ne,focused:Vr,getInputId:Ke,getMarkerId:Xe,getThumbId:Q,reset:Er,stepDown:ee,stepUp:Z,values:T,vertical:x,getContainerProps:$r,getFilledTrackProps:Ir,getInputProps:Dr,getMarkProps:Ar,getThumbProps:Nr,getTrackProps:Br}},[da,_e]=Jr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),o=N((n,s)=>{const[t,c]=ta("RangeSlider",n),{className:g,children:R,filledTrackColor:f,thumbColor:S,thumbSize:_,trackColor:d,trackSize:m,filledTrackProps:P,inputProps:Y,thumbProps:W,trackProps:H,...b}=sa(c),{vertical:G,getContainerProps:ae,getFilledTrackProps:$e,getInputProps:De,getMarkProps:Be,getThumbProps:Ie,getTrackProps:O}=ca({...b,thumbSize:Lr(_,t)}),L={...t.container},j=Qr(R),J=Ye(j,A),te=Ye(j,V),se=Ye(j,F),le=dn(j,V),M=dn(j,F),Ae=Zr(j)?R:ea(j,A,V,F);return e.jsx(da,{value:{filledTrackColor:f,styles:t,thumbColor:S,thumbSize:_,trackColor:d,trackSize:m,vertical:G,filledTrackProps:P,getFilledTrackProps:$e,getInputProps:De,getMarkProps:Be,getThumbProps:Ie,getTrackProps:O,inputProps:Y,thumbProps:W,trackProps:H},children:e.jsxs(X.div,{className:re("ui-slider",g),__css:L,...ae({},s),children:[J??e.jsx(A,{}),Ae,te??(le?null:e.jsx(V,{})),se??(M?null:e.jsx(F,{}))]})})});o.displayName="RangeSlider";o.__ui__="RangeSlider";const A=N(({className:n,children:s,filledTrackProps:t,...c},g)=>{const{styles:R,trackColor:f,trackSize:S,vertical:_,getTrackProps:d,trackProps:m}=_e(),P={...R.track};return e.jsx(X.div,{className:re("ui-slider__track",n),__css:P,...d({...f?{bg:f}:{},...S?_?{w:S}:{h:S}:{},...m,...c},g),children:s??e.jsx(ze,{...t})})});A.displayName="RangeSliderTrack";A.__ui__="RangeSliderTrack";const ze=N(({className:n,...s},t)=>{const{filledTrackColor:c,styles:g,filledTrackProps:R,getFilledTrackProps:f}=_e(),S={...g.filledTrack};return e.jsx(X.div,{className:re("ui-slider__track-filled",n),__css:S,...f({...c?{bg:c}:{},...R,...s},t)})});ze.displayName="RangeSliderFilledTrack";ze.__ui__="RangeSliderFilledTrack";const p=N(({className:n,...s},t)=>{const{styles:c,getMarkProps:g}=_e(),R={alignItems:"center",display:"inline-flex",justifyContent:"center",...c.mark};return e.jsx(X.div,{className:re("ui-slider__mark",n),__css:R,...g(s,t)})});p.displayName="RangeSliderMark";p.__ui__="RangeSliderMark";const Ee=N(({className:n,children:s,index:t,...c},g)=>{const{styles:R,thumbColor:f,thumbSize:S,getInputProps:_,getThumbProps:d,inputProps:m,thumbProps:P}=_e(),Y={...R.thumb},{children:W}=P??{};return e.jsxs(X.div,{className:re("ui-slider__thumb",n),__css:Y,...d({index:t,...f?{bg:f}:{},...S?{boxSize:S}:{},...P,...c},g),children:[e.jsx(X.input,{..._({...m,index:t},g)}),s??W]})});Ee.displayName="RangeSliderThumb";Ee.__ui__="RangeSliderThumb";const V=N((n,s)=>e.jsx(Ee,{ref:s,index:0,...n}));V.displayName="RangeSliderStartThumb";V.__ui__="RangeSliderStartThumb";const F=N((n,s)=>e.jsx(Ee,{ref:s,index:1,...n}));F.displayName="RangeSliderEndThumb";F.__ui__="RangeSliderEndThumb";const St={component:o,title:"Components / Forms / RangeSlider"},ue=()=>e.jsx(o,{}),ce=()=>e.jsx(o,{defaultValue:[10,90]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",defaultValue:[0,25]}),e.jsx(o,{size:"md",defaultValue:[25,50]}),e.jsx(o,{size:"lg",defaultValue:[50,75]})]}),me=()=>e.jsx(e.Fragment,{children:Ur.map(n=>e.jsx(o,{colorScheme:n},n))}),ge=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReversed:!0}),e.jsx(o,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),pe=()=>{const[n,s]=u.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{max:200,min:0,value:n,onChange:s})]})},Se=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{step:5,value:n,onChange:s})]})},be=()=>e.jsx(o,{betweenThumbs:10}),xe=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Ze,{gap:"xl",w:"full",children:[e.jsxs(pn,{align:"center",direction:"column",gap:"sm",children:[e.jsx($,{children:"Min"}),e.jsxs(Ze,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(t=>t[0]!==0?[t[0]-5,t[1]]:t),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(t=>t[0]!==100&&n[0]!==n[1]?[t[0]+5,t[1]]:t),children:"+5"})]})]}),e.jsxs(pn,{align:"center",direction:"column",gap:"sm",children:[e.jsx($,{children:"Max"}),e.jsxs(Ze,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(t=>t[1]!==0&&n[0]!==n[1]?[t[0],t[1]-5]:t),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(t=>t[1]!==100?[t[0],t[1]+5]:t),children:"+10"})]})]})]})]})},ve=()=>e.jsxs(Pr,{gap:"lg",children:[e.jsxs(o,{size:"sm",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"md",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"lg",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),Re=()=>{const[n,s]=u.useState([25,75]),[t,{off:c,on:g}]=ua(!1);return e.jsxs(o,{mt:"10",value:n,onChange:s,onMouseEnter:g,onMouseLeave:c,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(Sn,{label:`${n[0]}%`,open:t,placement:"top",children:e.jsx(V,{})}),e.jsx(Sn,{label:`${n[1]}%`,open:t,placement:"top",children:e.jsx(F,{})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred price range.",isDisabled:!0,legend:"Hotel Price Range",children:e.jsx(o,{})})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred price range.",isReadOnly:!0,legend:"Hotel Price Range",children:e.jsx(o,{})})]}),Ce=()=>{const[n,s]=u.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Fe,{errorMessage:"Minimum price should be set to 20 or higher.",isInvalid:n[0]<20,legend:"Hotel Price Range",children:e.jsx(o,{value:n,onChange:s})})]})},je=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(o,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(o,{children:[e.jsx(A,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(V,{bg:"blue.700"}),e.jsx(F,{bg:"blue.700"})]}),e.jsxs(o,{children:[e.jsx(A,{bg:"red.200",children:e.jsx(ze,{bg:"red.500"})}),e.jsx(V,{bg:"red.700"}),e.jsx(F,{bg:"red.700"})]})]}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{thumbProps:{boxSize:"6",children:e.jsx(Qe,{}),color:"blue.500"}}),e.jsxs(o,{children:[e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Qe,{})}),e.jsx(F,{boxSize:"6",color:"blue.500",children:e.jsx(Qe,{})})]})]}),Te=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(o,{mt:"10",value:n,onChange:s,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},we=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{value:n,onChange:s})]})},ye=()=>{const[n,s]=u.useState([25,75]),[t,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",t[0],", Start Max:"," ",t[0]]}),e.jsx(o,{value:n,onChange:s,onChangeStart:c})]})},Pe=()=>{const[n,s]=u.useState([25,75]),[t,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",t[0],", End Max:"," ",t[0]]}),e.jsx(o,{value:n,onChange:s,onChangeEnd:c})]})},Ve=()=>{var f;const n={rangeSlider:[25,75]},{control:s,formState:{errors:t},handleSubmit:c,watch:g}=Hr({defaultValues:n}),R=S=>console.log("submit:",S);return console.log("watch:",g()),e.jsxs(Pr,{as:"form",onSubmit:c(R),children:[e.jsx(Fe,{errorMessage:(f=t.rangeSlider)==null?void 0:f.message,isInvalid:!!t.rangeSlider,legend:"Hotel Price Range",children:e.jsx(Or,{name:"rangeSlider",control:s,render:({field:S})=>e.jsx(o,{...S})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var bn,xn,vn;ue.parameters={...ue.parameters,docs:{...(bn=ue.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(vn=(xn=ue.parameters)==null?void 0:xn.docs)==null?void 0:vn.source}}};var Rn,fn,kn;ce.parameters={...ce.parameters,docs:{...(Rn=ce.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(kn=(fn=ce.parameters)==null?void 0:fn.docs)==null?void 0:kn.source}}};var Cn,jn,Mn;de.parameters={...de.parameters,docs:{...(Cn=de.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(Mn=(jn=de.parameters)==null?void 0:jn.docs)==null?void 0:Mn.source}}};var Tn,wn,yn;me.parameters={...me.parameters,docs:{...(Tn=me.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(yn=(wn=me.parameters)==null?void 0:wn.docs)==null?void 0:yn.source}}};var Pn,Vn,Fn;ge.parameters={...ge.parameters,docs:{...(Pn=ge.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Fn=(Vn=ge.parameters)==null?void 0:Vn.docs)==null?void 0:Fn.source}}};var _n,zn,En;he.parameters={...he.parameters,docs:{...(_n=he.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider h="calc(100vh - 16px * 3 - 14px)" isReversed orientation="vertical" />
    </>;
}`,...(En=(zn=he.parameters)==null?void 0:zn.docs)==null?void 0:En.source}}};var $n,Dn,Bn;pe.parameters={...pe.parameters,docs:{...($n=pe.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(Bn=(Dn=pe.parameters)==null?void 0:Dn.docs)==null?void 0:Bn.source}}};var In,An,Nn;Se.parameters={...Se.parameters,docs:{...(In=Se.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...(Nn=(An=Se.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var Hn,On,Ln;be.parameters={...be.parameters,docs:{...(Hn=be.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Ln=(On=be.parameters)==null?void 0:On.docs)==null?void 0:Ln.source}}};var Un,qn,Kn;xe.parameters={...xe.parameters,docs:{...(Un=xe.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Kn=(qn=xe.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Xn,Yn,Wn;ve.parameters={...ve.parameters,docs:{...(Xn=ve.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Yn=ve.parameters)==null?void 0:Yn.docs)==null?void 0:Wn.source}}};var Gn,Jn,Qn;Re.parameters={...Re.parameters,docs:{...(Gn=Re.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Jn=Re.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,er,nr;fe.parameters={...fe.parameters,docs:{...(Zn=fe.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <Fieldset helperMessage="Please select your preferred price range." isDisabled legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(nr=(er=fe.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;ke.parameters={...ke.parameters,docs:{...(rr=ke.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <Fieldset helperMessage="Please select your preferred price range." isReadOnly legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(tr=(ar=ke.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,lr,or;Ce.parameters={...Ce.parameters,docs:{...(sr=Ce.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <Fieldset errorMessage="Minimum price should be set to 20 or higher." isInvalid={value[0] < 20} legend="Hotel Price Range">
        <RangeSlider value={value} onChange={onChange} />
      </Fieldset>
    </>;
}`,...(or=(lr=Ce.parameters)==null?void 0:lr.docs)==null?void 0:or.source}}};var ir,ur,cr;je.parameters={...je.parameters,docs:{...(ir=je.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(cr=(ur=je.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,gr;Me.parameters={...Me.parameters,docs:{...(dr=Me.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
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
}`,...(gr=(mr=Me.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,pr,Sr;Te.parameters={...Te.parameters,docs:{...(hr=Te.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(pr=Te.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var br,xr,vr;we.parameters={...we.parameters,docs:{...(br=we.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(vr=(xr=we.parameters)==null?void 0:xr.docs)==null?void 0:vr.source}}};var Rr,fr,kr;ye.parameters={...ye.parameters,docs:{...(Rr=ye.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(kr=(fr=ye.parameters)==null?void 0:fr.docs)==null?void 0:kr.source}}};var Cr,jr,Mr;Pe.parameters={...Pe.parameters,docs:{...(Cr=Pe.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Mr=(jr=Pe.parameters)==null?void 0:jr.docs)==null?void 0:Mr.source}}};var Tr,wr,yr;Ve.parameters={...Ve.parameters,docs:{...(Tr=Ve.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(yr=(wr=Ve.parameters)==null?void 0:wr.docs)==null?void 0:yr.source}}};const bt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{bt as __namedExportsOrder,ue as basic,je as customColor,we as customControl,Te as customMark,Me as customThumb,St as default,fe as isDisabled,Ce as isInvalid,ke as isReadonly,Pe as onChangeEnd,ye as onChangeStart,Ve as reactHookForm,be as withBetweenThumbs,me as withColorScheme,ce as withDefaultValue,xe as withFocusThumbOnChange,ve as withMark,pe as withMinMax,ge as withOrientation,he as withReversed,de as withSize,Se as withStep,Re as withTooltip};
