import{j as e,a as l,F as M}from"./jsx-runtime-2xDJh5tt.js";import{I as Ne,p as je}from"./fontawesome-icon-BGqdqTuI.js";import{u as Er}from"./index-rYLD436_.js";import{r as u}from"./index-CBqU2yxZ.js";import{u as Dr,C as zr}from"./index.esm-CiJ9mLzm.js";import{c as $r}from"./components-BT-E9HFA.js";import{u as Br}from"./index-DffFcysT.js";import{u as _r,c as Or,b as Ar}from"./index-zihLiaAf.js";import{u as Nr,f as Ze,g as qe,F as Pe}from"./form-control-D1mB1xBr.js";import{c as jr,v as qr,M as He,$ as en,a0 as Hr,a1 as Lr,u as q,a as ee,g as nn,e as Wr,o as Kr,w as rn,Q as G,n as Ur,K as Le,h as We}from"./factory-DpmudyXM.js";import{f as N}from"./forward-ref-DuAegr0M.js";import{u as Xr}from"./use-component-style-C8HPJoXa.js";import{o as Yr}from"./theme-provider-BSSgazaQ.js";import{c as an,v as tn,r as Qr,p as Gr}from"./number-49BHn0Cl.js";import{T as B}from"./text-BC__m9gv.js";import{C as Ke}from"./center-B2ejGzAv.js";import{F as on}from"./flex-BqXLc-Xk.js";import{B as J}from"./button-B04h-bnh.js";import{V as Cr}from"./stack-DHO7_TeU.js";import{T as ln}from"./tooltip-5weGQoFh.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BPDO9FjE.js";import"./index-CjPoKz7c.js";import"./index-81ytNefq.js";import"./mapValues-BIZneCWx.js";import"./_basePickBy-Dt7h7ShX.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-CzyCmMz7.js";import"./index-CTTjo0Bc.js";import"./environment-provider-C-XnTVVw.js";import"./motion-JgkBPv6g.js";import"./loading-provider-D9beeGPi.js";import"./index-C2FBlCZS.js";import"./Combination-D2LZdSm3.js";import"./loading-PB7xGStd.js";import"./index-DTWJYyBb.js";import"./index-Dft46qqu.js";import"./motion-BNANSLgb.js";import"./index-_tcQm2Fk.js";import"./container-portal-DybmBGje.js";import"./index-BtM5VmRH.js";import"./notice-RhQHNXk5.js";import"./alert-BPhwvPrk.js";import"./close-button-CAEXRYsX.js";import"./use-ripple-CYLHRNNs.js";import"./container-0bRqhnBJ.js";import"./box-DcQdF8Jm.js";import"./event-imqIgfLG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DLflEqxP.js";import"./index-kMjdInsO.js";import"./index-ChXvatWt.js";import"./slide-fade-5g7YTpZi.js";import"./utils-7fAhJj1f.js";import"./scale-fade-W6cuttVr.js";const Jr=({focusThumbOnChange:n=!0,...o})=>{n||(o.isReadOnly=!0);let{id:a,name:h,min:c=0,max:m=100,step:k=1,defaultValue:S,orientation:y="horizontal",isReversed:p,betweenThumbs:F=0,required:I,disabled:E,readOnly:_,onChange:Ie,...b}=Nr(o);if(S=S??[c+(m-c)/4,m-(m-c)/4],m<c)throw new Error("Do not assign a number less than 'min' to 'max'");const Ee=nn(b.onChangeStart),H=nn(b.onChangeEnd),[De,j]=Br({value:b.value,defaultValue:S,onChange:Ie}),[L,ne]=u.useState(!1),[ze,re]=u.useState(!1),[g,O]=u.useState(-1),W=!(E||_),K=(m-c)/10,D=k||(m-c)/100,ae=F*k,w=De.map(r=>an(r,c,m)),[Ue,Xe]=w,Mr=w.map(r=>m-r+c),A=(p?Mr:w).map(r=>tn(r,c,m)),wr=[{min:c,max:Xe-ae},{min:Ue+ae,max:m}],f=y==="vertical",x=_r({min:c,max:m,step:k,disabled:E,values:w,valueBounds:wr,isInteractive:W,isReversed:p,isVertical:f,focusThumbOnChange:n,betweenThumbs:F,orientation:y}),$e=u.useRef(null),te=u.useRef(null),Be=u.useRef(null),oe=Or({getNodes:()=>{var t;const r=(t=te.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=u.useId()),h??(h=a);const U=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),_e=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Oe=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ar(te,{onSessionStart:r=>{const{isInteractive:t,values:s}=x.current;if(!t)return;ne(!0);const d=Ye(r)||0,C=s.map(le=>Math.abs(le-d)),R=Math.min(...C);let T=C.indexOf(R);const V=C.filter(le=>le===R);V.length>1&&d>s[T]&&(T=T+V.length-1),O(T),P(T,d),Qe(T),Ee(s)},onSessionEnd:()=>{const{isInteractive:r,values:t}=x.current;r&&(ne(!1),H(t))},onMove:r=>{const{isInteractive:t}=x.current;if(!t||g==-1)return;const s=Ye(r)||0;O(g),P(g,s),Qe(g)}});const Ye=u.useCallback(r=>{var Je;if(!Be.current)return;const{min:t,max:s}=x.current;$e.current="pointer";const{bottom:d,left:C,height:R,width:T}=Be.current.getBoundingClientRect(),{clientX:V,clientY:Q}=((Je=r.touches)==null?void 0:Je[0])??r;let Ae=(f?d-Q:V-C)/(f?R:T);return p&&(Ae=1-Ae),Gr(Ae,t,s)},[x,f,p]),Qe=u.useCallback(r=>{var d;if(r??(r=g),r===-1||!n)return;const t=U(r),s=(d=te.current)==null?void 0:d.ownerDocument.getElementById(t);s&&setTimeout(()=>s.focus())},[g,n,U]),P=u.useCallback((r,t)=>{const{isInteractive:s,valueBounds:d,values:C}=x.current;if(!s)return;const{min:R,max:T}=d[r];t=parseFloat(Qr(t,R,D)),t=an(t,R,T);const V=[...C];V[r]=t,j(V)},[x,D,j]),X=u.useCallback((r,t=D)=>{const{values:s}=x.current,d=s[r];P(r,p?d-t:d+t)},[P,p,x,D]),Y=u.useCallback((r,t=D)=>{const{values:s}=x.current,d=s[r];P(r,p?d+t:d-t)},[P,p,x,D]),xr=u.useCallback(()=>j(S),[S,j]),Ge=u.useCallback(r=>{const{valueBounds:t}=x.current,{min:s,max:d}=t[g],R={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,K),PageDown:()=>Y(g,K),Home:()=>P(g,s),End:()=>P(g,d)}[r.key];R&&(r.preventDefault(),r.stopPropagation(),R(r),$e.current="keyboard")},[g,P,x,Y,X,K]);Wr(()=>{const{values:r}=x.current;$e.current==="keyboard"&&H(r)},[Ue,Xe,H]);const Tr=u.useCallback((r={},t=null)=>{const s={width:0,height:0},d=f?"height":"width",{width:C,height:R}=oe.reduce((V=s,Q=s)=>V[d]>Q[d]?V:Q,s)??{},T={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...f?C?{paddingLeft:C/2,paddingRight:C/2}:{}:R?{paddingTop:R/2,paddingBottom:R/2}:{}};return{...Kr(b,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,id:`slider-container-${a}`,ref:rn(t,te),tabIndex:-1,style:T}},[a,f,b,oe]),yr=u.useCallback(({index:r,...t},s=null)=>({...G(b,Ze),...t,ref:s,id:_e(r),type:"hidden",name:Ur(h)?h[r]:`${h}-${r}`,value:w[r],required:I,disabled:E,readOnly:_}),[E,_e,h,_,I,b,w]),Vr=u.useCallback((r={},t=null)=>{const s={...r.style,position:"absolute",...f?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...G(b,qe({omit:["aria-readonly"]})),...r,id:`slider-track-${a}`,ref:rn(t,Be),style:s}},[a,f,b]),Pr=u.useCallback((r={},t=null)=>{const s=Math.abs(A[1]-A[0]),d=p?100-A[0]:A[0],C={...r.style,position:"absolute",...f?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...p?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...p?{right:`${d}%`}:{left:`${d}%`}}};return{...G(b,qe({omit:["aria-readonly"]})),...r,id:`slider-filled-track-${a}`,ref:t,style:C}},[a,p,f,b,A]),Fr=u.useCallback((r,t=null)=>{let s=tn(r.value,c,m);s=p?100-s:s;const d={...r.style,position:"absolute",pointerEvents:"none",...f?{bottom:`${s}%`}:{left:`${s}%`}};return{...G(b,qe({omit:["aria-readonly"]})),...r,ref:t,id:Oe(r.value),"aria-hidden":!0,"data-invalid":Le(r.value<c||m<r.value),"data-highlighted":Le(w[0]<=r.value&&r.value<=w[1]),style:d}},[Oe,p,f,m,c,b,w]),Ir=u.useCallback(({index:r,...t},s=null)=>{const d=A[r],{width:C,height:R}=oe[r]??{width:0,height:0},T={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...f?{bottom:`calc(${d}% - ${R/2}px)`}:{left:`calc(${d}% - ${C/2}px)`}},V=w[r];if(V==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb",...G(b,Ze),...t,ref:s,id:U(r),tabIndex:W&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":m,"aria-valuenow":V,"data-active":Le(L&&n&&g===r),"aria-orientation":y,onKeyDown:We(t.onKeyDown,Ge),onFocus:We(t.onFocus,b.onFocus,()=>{re(!0),O(r)}),onBlur:We(t.onBlur,b.onBlur,()=>{re(!1),O(-1)}),style:T}},[c,m,n,g,U,L,W,f,Ge,y,b,A,oe,w]);return{values:w,isFocused:ze,isDragging:L,isVertical:f,stepUp:X,stepDown:Y,reset:xr,setActiveIndex:O,getThumbId:U,getInputId:_e,getMarkerId:Oe,getContainerProps:Tr,getInputProps:yr,getTrackProps:Vr,getFilledTrackProps:Pr,getMarkProps:Fr,getThumbProps:Ir}},[Zr,Fe]=jr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),i=N((n,o)=>{const[a,h]=Xr("RangeSlider",n),{className:c,children:m,inputProps:k,trackProps:S,filledTrackProps:y,thumbProps:p,trackColor:F,filledTrackColor:I,trackSize:E,thumbColor:_,thumbSize:Ie,...b}=Yr(h),{isVertical:Ee,getContainerProps:H,getInputProps:De,getTrackProps:j,getFilledTrackProps:L,getMarkProps:ne,getThumbProps:ze}=Jr(b),re={...a.container},g=qr(m),[O]=He(g,Z),[W]=He(g,z),[K]=He(g,$),D=en(g,z),ae=en(g,$),w=Hr(g)?m:Lr(g,Z,z,$);return e(Zr,{value:{isVertical:Ee,getTrackProps:j,getFilledTrackProps:L,getMarkProps:ne,getThumbProps:ze,getInputProps:De,trackProps:S,trackColor:F,trackSize:E,filledTrackProps:y,filledTrackColor:I,thumbProps:p,thumbColor:_,thumbSize:Ie,inputProps:k,styles:a},children:l(q.div,{className:ee("ui-slider",c),__css:re,...H({},o),children:[O??e(Z,{}),w,W??(D?null:e(z,{})),K??(ae?null:e($,{}))]})})}),Z=N(({className:n,children:o,filledTrackProps:a,...h},c)=>{const{styles:m,trackProps:k,trackColor:S,trackSize:y,isVertical:p,getTrackProps:F}=Fe(),I={...m.track};return e(q.div,{className:ee("ui-slider__track",n),__css:I,...F({...S?{bg:S}:{},...y?p?{w:y}:{h:y}:{},...k,...h},c),children:o??e(Rr,{...a})})}),Rr=N(({className:n,...o},a)=>{const{styles:h,filledTrackProps:c,filledTrackColor:m,getFilledTrackProps:k}=Fe(),S={...h.filledTrack};return e(q.div,{className:ee("ui-slider__track-filled",n),__css:S,...k({...m?{bg:m}:{},...c,...o},a)})}),v=N(({className:n,...o},a)=>{const{styles:h,getMarkProps:c}=Fe(),m={display:"inline-flex",justifyContent:"center",alignItems:"center",...h.mark};return e(q.div,{className:ee("ui-slider__mark",n),__css:m,...c(o,a)})}),kr=N(({className:n,index:o,children:a,...h},c)=>{const{styles:m,thumbProps:k,thumbColor:S,thumbSize:y,inputProps:p,getThumbProps:F,getInputProps:I}=Fe(),E={...m.thumb},{children:_}=k??{};return l(q.div,{className:ee("ui-slider__thumb",n),__css:E,...F({index:o,...S?{bg:S}:{},...y?{boxSize:y}:{},...k,...h},c),children:[e(q.input,{...I({...p,index:o},c)}),a??_]})}),z=N((n,o)=>e(kr,{ref:o,index:0,...n})),$=N((n,o)=>e(kr,{ref:o,index:1,...n})),lt={title:"Components / Forms / RangeSlider",component:i},se=()=>e(i,{}),ie=()=>e(i,{defaultValue:[10,90]}),ue=()=>l(M,{children:[e(i,{size:"sm",defaultValue:[0,25]}),e(i,{size:"md",defaultValue:[25,50]}),e(i,{size:"lg",defaultValue:[50,75]})]}),ce=()=>e(M,{children:$r.map(n=>e(i,{colorScheme:n},n))}),de=()=>e(i,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),me=()=>l(M,{children:[e(i,{isReversed:!0}),e(i,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ge=()=>{const[n,o]=u.useState([50,150]);return l(M,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,min:0,max:200,onChange:o})]})},he=()=>{const[n,o]=u.useState([25,75]);return l(M,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,onChange:o})]})},pe=()=>e(i,{betweenThumbs:10}),Se=()=>{const[n,o]=u.useState([25,75]);return l(M,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,focusThumbOnChange:!1}),l(Ke,{w:"full",gap:"xl",children:[l(on,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),l(Ke,{gap:"md",children:[e(J,{isDisabled:n[0]===0,onClick:()=>o(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e(J,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>o(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),l(on,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),l(Ke,{gap:"md",children:[e(J,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>o(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e(J,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>o(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},be=()=>l(Cr,{gap:"lg",children:[l(i,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),ve=()=>{const[n,o]=u.useState([25,75]),[a,{on:h,off:c}]=Er(!1);return l(i,{value:n,onChange:o,mt:"10",onMouseEnter:h,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(ln,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e(z,{})}),e(ln,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e($,{})})]})},fe=()=>l(M,{children:[e(i,{isDisabled:!0}),e(Pe,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Ce=()=>l(M,{children:[e(i,{isReadOnly:!0}),e(Pe,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Re=()=>{const[n,o]=u.useState([15,45]);return l(M,{children:[e(i,{isInvalid:n[0]<20,value:n,onChange:o}),e(Pe,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(i,{value:n,onChange:o})})]})},ke=()=>l(M,{children:[e(i,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(i,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(i,{children:[e(Z,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(z,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),l(i,{children:[e(Z,{bg:"red.200",children:e(Rr,{bg:"red.500"})}),e(z,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),Me=()=>l(M,{children:[e(i,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),l(i,{children:[e(z,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}),e($,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})]})]}),we=()=>{const[n,o]=u.useState([25,75]);return e(M,{children:l(i,{value:n,onChange:o,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),l(v,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},xe=()=>{const[n,o]=u.useState([25,75]);return l(M,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,onChange:o})]})},Te=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(M,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeStart:h})]})},ye=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(M,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeEnd:h})]})},Ve=()=>{var k;const n={rangeSlider:[25,75]},{control:o,handleSubmit:a,watch:h,formState:{errors:c}}=Dr({defaultValues:n}),m=S=>console.log("submit:",S);return console.log("watch:",h()),l(Cr,{as:"form",onSubmit:a(m),children:[e(Pe,{isInvalid:!!c.rangeSlider,label:"Volume",errorMessage:(k=c.rangeSlider)==null?void 0:k.message,children:e(zr,{name:"rangeSlider",control:o,render:({field:S})=>e(i,{...S})})}),e(J,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var sn,un,cn;se.parameters={...se.parameters,docs:{...(sn=se.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(cn=(un=se.parameters)==null?void 0:un.docs)==null?void 0:cn.source}}};var dn,mn,gn;ie.parameters={...ie.parameters,docs:{...(dn=ie.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(gn=(mn=ie.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,pn,Sn;ue.parameters={...ue.parameters,docs:{...(hn=ue.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(Sn=(pn=ue.parameters)==null?void 0:pn.docs)==null?void 0:Sn.source}}};var bn,vn,fn;ce.parameters={...ce.parameters,docs:{...(bn=ce.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(fn=(vn=ce.parameters)==null?void 0:vn.docs)==null?void 0:fn.source}}};var Cn,Rn,kn;de.parameters={...de.parameters,docs:{...(Cn=de.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(kn=(Rn=de.parameters)==null?void 0:Rn.docs)==null?void 0:kn.source}}};var Mn,wn,xn;me.parameters={...me.parameters,docs:{...(Mn=me.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(xn=(wn=me.parameters)==null?void 0:wn.docs)==null?void 0:xn.source}}};var Tn,yn,Vn;ge.parameters={...ge.parameters,docs:{...(Tn=ge.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(Vn=(yn=ge.parameters)==null?void 0:yn.docs)==null?void 0:Vn.source}}};var Pn,Fn,In;he.parameters={...he.parameters,docs:{...(Pn=he.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(In=(Fn=he.parameters)==null?void 0:Fn.docs)==null?void 0:In.source}}};var En,Dn,zn;pe.parameters={...pe.parameters,docs:{...(En=pe.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(zn=(Dn=pe.parameters)==null?void 0:Dn.docs)==null?void 0:zn.source}}};var $n,Bn,_n;Se.parameters={...Se.parameters,docs:{...($n=Se.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} focusThumbOnChange={false} />

      <Center w="full" gap="xl">
        <Flex direction="column" align="center" gap="sm">
          <Text>Min</Text>

          <Center gap="md">
            <Button isDisabled={value[0] === 0} onClick={() => setValue(prev => prev[0] !== 0 ? [prev[0] - 5, prev[1]] : prev)}>
              -5
            </Button>

            <Button isDisabled={value[0] === 100 || value[0] === value[1]} colorScheme="blue" onClick={() => setValue(prev => prev[0] !== 100 && value[0] !== value[1] ? [prev[0] + 5, prev[1]] : prev)}>
              +5
            </Button>
          </Center>
        </Flex>

        <Flex direction="column" align="center" gap="sm">
          <Text>Max</Text>

          <Center gap="md">
            <Button isDisabled={value[1] === 0 || value[0] === value[1]} onClick={() => setValue(prev => prev[1] !== 0 && value[0] !== value[1] ? [prev[0], prev[1] - 5] : prev)}>
              -5
            </Button>

            <Button isDisabled={value[1] === 100} colorScheme="blue" onClick={() => setValue(prev => prev[1] !== 100 ? [prev[0], prev[1] + 5] : prev)}>
              +10
            </Button>
          </Center>
        </Flex>
      </Center>
    </>;
}`,...(_n=(Bn=Se.parameters)==null?void 0:Bn.docs)==null?void 0:_n.source}}};var On,An,Nn;be.parameters={...be.parameters,docs:{...(On=be.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <RangeSlider size="sm">
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w="10" ml="-5">
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w="10" ml="-5">
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size="md">
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w="10" ml="-5">
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w="10" ml="-5">
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size="lg">
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w="10" ml="-5">
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w="10" ml="-5">
          75%
        </RangeSliderMark>
      </RangeSlider>
    </VStack>;
}`,...(Nn=(An=be.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var jn,qn,Hn;ve.parameters={...ve.parameters,docs:{...(jn=ve.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <RangeSlider value={value} onChange={onChange} mt="10" onMouseEnter={on} onMouseLeave={off}>
      <RangeSliderMark value={25} w="10" ml="-5">
        25%
      </RangeSliderMark>
      <RangeSliderMark value={50} w="10" ml="-5">
        50%
      </RangeSliderMark>
      <RangeSliderMark value={75} w="10" ml="-5">
        75%
      </RangeSliderMark>

      <Tooltip placement="top" label={\`\${value[0]}%\`} isOpen={isOpen}>
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip placement="top" label={\`\${value[1]}%\`} isOpen={isOpen}>
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>;
}`,...(Hn=(qn=ve.parameters)==null?void 0:qn.docs)==null?void 0:Hn.source}}};var Ln,Wn,Kn;fe.parameters={...fe.parameters,docs:{...(Ln=fe.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Kn=(Wn=fe.parameters)==null?void 0:Wn.docs)==null?void 0:Kn.source}}};var Un,Xn,Yn;Ce.parameters={...Ce.parameters,docs:{...(Un=Ce.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Yn=(Xn=Ce.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Qn,Gn,Jn;Re.parameters={...Re.parameters,docs:{...(Qn=Re.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Jn=(Gn=Re.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Zn,er,nr;ke.parameters={...ke.parameters,docs:{...(Zn=ke.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider trackColor="orange.200" filledTrackColor="orange.500" thumbColor="orange.700" />

      <RangeSlider trackProps={{
      bg: "green.200"
    }} filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
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
}`,...(nr=(er=ke.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;Me.parameters={...Me.parameters,docs:{...(rr=Me.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Icon icon={faWaveSquare} />
    }} />

      <RangeSlider>
        <RangeSliderStartThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(tr=(ar=Me.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var or,lr,sr;we.parameters={...we.parameters,docs:{...(or=we.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <RangeSlider value={value} onChange={onChange} mt="10">
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w="10" ml="-5">
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w="10" ml="-5">
          75%
        </RangeSliderMark>
        <RangeSliderMark value={value[0]} bg="blue.500" color="white" py="0.5" rounded="md" w="10" mt="-10" ml="-5">
          {value[0]}%
        </RangeSliderMark>
        <RangeSliderMark value={value[1]} bg="blue.500" color="white" py="0.5" rounded="md" w="10" mt="-10" ml="-5">
          {value[1]}%
        </RangeSliderMark>
      </RangeSlider>
    </>;
}`,...(sr=(lr=we.parameters)==null?void 0:lr.docs)==null?void 0:sr.source}}};var ir,ur,cr;xe.parameters={...xe.parameters,docs:{...(ir=xe.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(cr=(ur=xe.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,gr;Te.parameters={...Te.parameters,docs:{...(dr=Te.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(gr=(mr=Te.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,pr,Sr;ye.parameters={...ye.parameters,docs:{...(hr=ye.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Sr=(pr=ye.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var br,vr,fr;Ve.parameters={...Ve.parameters,docs:{...(br=Ve.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  type Data = {
    rangeSlider: [number, number];
  };
  const defaultValues: Data = {
    rangeSlider: [25, 75]
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.rangeSlider} label="Volume" errorMessage={errors.rangeSlider?.message}>
        <Controller name="rangeSlider" control={control} render={({
        field
      }) => <RangeSlider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fr=(vr=Ve.parameters)==null?void 0:vr.docs)==null?void 0:fr.source}}};const st=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{st as __namedExportsOrder,se as basic,ke as customColor,xe as customControl,we as customMark,Me as customThumb,lt as default,fe as isDisabled,Re as isInvalid,Ce as isReadonly,ye as onChangeEnd,Te as onChangeStart,Ve as reactHookForm,pe as withBetweenThumbs,ce as withColorScheme,ie as withDefaultValue,Se as withFocusThumbOnChange,be as withMark,ge as withMinMax,de as withOrientation,me as withReversed,ue as withSize,he as withStep,ve as withTooltip};
