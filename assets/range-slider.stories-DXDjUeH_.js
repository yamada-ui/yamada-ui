import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as _e,p as Oe}from"./fontawesome-icon-DuU4vFj3.js";import{u as Pr}from"./index-rYLD436_.js";import{r as i}from"./index-CBqU2yxZ.js";import{u as Fr,C as Er}from"./index.esm-Dtxxx2aT.js";import{c as Ir}from"./components-mT6GtZ59.js";import{u as Dr}from"./index-BrWt32zn.js";import{u as zr,c as $r,b as Br}from"./index-B5s4Fp6m.js";import{u as _r,f as Je,g as Ae,F as Te}from"./form-control-Dowezunr.js";import{a as Or,v as Ar,O as Ne,a0 as Qe,a1 as Nr,a2 as qr,u as A,c as Q,g as Ze,e as Hr,o as Lr,w as en,R as Y,n as Wr,M as qe,h as He}from"./factory-Dr9dj2_3.js";import{f as _}from"./forward-ref-DuAegr0M.js";import{a as Ur}from"./use-component-style-hxhKhc0Q.js";import{o as Kr}from"./theme-provider-Bm2ANCLL.js";import{c as nn,v as rn,r as Xr,p as Yr}from"./number-49BHn0Cl.js";import{T as D}from"./text-DB123ecx.js";import{C as Le}from"./center-d6pbY6aS.js";import{F as an}from"./flex-MVd7F0CM.js";import{B as G}from"./button-DzbywrjQ.js";import{V as xr}from"./stack-WdGSMB3c.js";import{T as tn}from"./tooltip-Da4HIuzN.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BEP1qdzi.js";import"./index-Cd5bWo2e.js";import"./index-PS1QX0e2.js";import"./_basePickBy-Bn2nXVkU.js";import"./iframe-fZrpZBZ5.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-BIZneCWx.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-C1V7BBGR.js";import"./index-CcbIdHD-.js";import"./environment-provider-CVb8wJdv.js";import"./motion-JgkBPv6g.js";import"./loading-provider-DqWGXHwm.js";import"./index-CafETBy0.js";import"./Combination-D2LZdSm3.js";import"./loading-93aTLmy8.js";import"./index-BH_-S3fu.js";import"./index-C5SpnNA3.js";import"./motion-CQQhr11g.js";import"./index-_tcQm2Fk.js";import"./container-portal-ERwjpvWO.js";import"./notice-D3g8s_48.js";import"./alert-NX1pOus8.js";import"./close-button-hzIfFZD-.js";import"./use-ripple-D-hcQ8Cu.js";import"./container-B08OpQW3.js";import"./box-BH0_Yzug.js";import"./event-imqIgfLG.js";import"./index-BdAshQZ6.js";import"./index-MNVDWG0u.js";import"./index-CsSDal4E.js";import"./slide-fade-DIQDWhST.js";import"./utils-Dw1cHWxn.js";import"./scale-fade-2_TtIwyk.js";const Gr=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:g,min:u=0,max:d=100,step:f=1,defaultValue:p,orientation:M="horizontal",isReversed:h,betweenThumbs:y=0,required:V,disabled:P,readOnly:z,onChange:Ve,...S}=_r(s);if(p=p??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const Pe=Ze(S.onChangeStart),N=Ze(S.onChangeEnd),[Fe,O]=Dr({value:S.value,defaultValue:p,onChange:Ve}),[q,Z]=i.useState(!1),[Ee,ee]=i.useState(!1),[m,$]=i.useState(-1),H=!(P||z),L=(d-u)/10,F=f||(d-u)/100,ne=y*f,C=Fe.map(r=>nn(r,u,d)),[We,Ue]=C,fr=C.map(r=>d-r+u),B=(h?fr:C).map(r=>rn(r,u,d)),Cr=[{min:u,max:Ue-ne},{min:We+ne,max:d}],x=M==="vertical",k=zr({min:u,max:d,step:f,disabled:P,values:C,valueBounds:Cr,isInteractive:H,isReversed:h,isVertical:x,focusThumbOnChange:n,betweenThumbs:y,orientation:M}),Ie=i.useRef(null),re=i.useRef(null),De=i.useRef(null),ae=$r({getNodes:()=>{var t;const r=(t=re.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),g??(g=a);const W=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),ze=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),$e=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Br(re,{onSessionStart:r=>{const{isInteractive:t,values:o}=k.current;if(!t)return;Z(!0);const c=Ke(r)||0,v=o.map(te=>Math.abs(te-c)),R=Math.min(...v);let j=v.indexOf(R);const w=v.filter(te=>te===R);w.length>1&&c>o[j]&&(j=j+w.length-1),$(j),T(j,c),Xe(j),Pe(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=k.current;r&&(Z(!1),N(t))},onMove:r=>{const{isInteractive:t}=k.current;if(!t||m==-1)return;const o=Ke(r)||0;$(m),T(m,o),Xe(m)}});const Ke=i.useCallback(r=>{var Ge;if(!De.current)return;const{min:t,max:o}=k.current;Ie.current="pointer";const{bottom:c,left:v,height:R,width:j}=De.current.getBoundingClientRect(),{clientX:w,clientY:X}=((Ge=r.touches)==null?void 0:Ge[0])??r;let Be=(x?c-X:w-v)/(x?R:j);return h&&(Be=1-Be),Yr(Be,t,o)},[k,x,h]),Xe=i.useCallback(r=>{var c;if(r??(r=m),r===-1||!n)return;const t=W(r),o=(c=re.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[m,n,W]),T=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:v}=k.current;if(!o)return;const{min:R,max:j}=c[r];t=parseFloat(Xr(t,R,F)),t=nn(t,R,j);const w=[...v];w[r]=t,O(w)},[k,F,O]),U=i.useCallback((r,t=F)=>{const{values:o}=k.current,c=o[r];T(r,h?c-t:c+t)},[T,h,k,F]),K=i.useCallback((r,t=F)=>{const{values:o}=k.current,c=o[r];T(r,h?c+t:c-t)},[T,h,k,F]),kr=i.useCallback(()=>O(p),[p,O]),Ye=i.useCallback(r=>{const{valueBounds:t}=k.current,{min:o,max:c}=t[m],R={ArrowRight:()=>U(m),ArrowUp:()=>U(m),ArrowLeft:()=>K(m),ArrowDown:()=>K(m),PageUp:()=>U(m,L),PageDown:()=>K(m,L),Home:()=>T(m,o),End:()=>T(m,c)}[r.key];R&&(r.preventDefault(),r.stopPropagation(),R(r),Ie.current="keyboard")},[m,T,k,K,U,L]);Hr(()=>{const{values:r}=k.current;Ie.current==="keyboard"&&N(r)},[We,Ue,N]);const jr=i.useCallback((r={},t=null)=>{const o={width:0,height:0},c=x?"height":"width",{width:v,height:R}=ae.reduce((w=o,X=o)=>w[c]>X[c]?w:X,o)??{},j={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...x?v?{paddingLeft:v/2,paddingRight:v/2}:{}:R?{paddingTop:R/2,paddingBottom:R/2}:{}};return{...Lr(S,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,id:`slider-container-${a}`,ref:en(t,re),tabIndex:-1,style:j}},[a,x,S,ae]),Mr=i.useCallback(({index:r,...t},o=null)=>({...Y(S,Je),...t,ref:o,id:ze(r),type:"hidden",name:Wr(g)?g[r]:`${g}-${r}`,value:C[r],required:V,disabled:P,readOnly:z}),[P,ze,g,z,V,S,C]),wr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...Y(S,Ae({omit:["aria-readonly"]})),...r,id:`slider-track-${a}`,ref:en(t,De),style:o}},[a,x,S]),Tr=i.useCallback((r={},t=null)=>{const o=Math.abs(B[1]-B[0]),c=h?100-B[0]:B[0],v={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...h?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...h?{right:`${c}%`}:{left:`${c}%`}}};return{...Y(S,Ae({omit:["aria-readonly"]})),...r,id:`slider-filled-track-${a}`,ref:t,style:v}},[a,h,x,S,B]),yr=i.useCallback((r,t=null)=>{let o=rn(r.value,u,d);o=h?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...x?{bottom:`${o}%`}:{left:`${o}%`}};return{...Y(S,Ae({omit:["aria-readonly"]})),...r,ref:t,id:$e(r.value),"aria-hidden":!0,"data-invalid":qe(r.value<u||d<r.value),"data-highlighted":qe(C[0]<=r.value&&r.value<=C[1]),style:c}},[$e,h,x,d,u,S,C]),Vr=i.useCallback(({index:r,...t},o=null)=>{const c=B[r],{width:v,height:R}=ae[r]??{width:0,height:0},j={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...x?{bottom:`calc(${c}% - ${R/2}px)`}:{left:`calc(${c}% - ${v/2}px)`}},w=C[r];if(w==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb",...Y(S,Je),...t,ref:o,id:W(r),tabIndex:H&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":w,"data-active":qe(q&&n&&m===r),"aria-orientation":M,onKeyDown:He(t.onKeyDown,Ye),onFocus:He(t.onFocus,S.onFocus,()=>{ee(!0),$(r)}),onBlur:He(t.onBlur,S.onBlur,()=>{ee(!1),$(-1)}),style:j}},[u,d,n,m,W,q,H,x,Ye,M,S,B,ae,C]);return{values:C,isFocused:Ee,isDragging:q,isVertical:x,stepUp:U,stepDown:K,reset:kr,setActiveIndex:$,getThumbId:W,getInputId:ze,getMarkerId:$e,getContainerProps:jr,getInputProps:Mr,getTrackProps:wr,getFilledTrackProps:Tr,getMarkProps:yr,getThumbProps:Vr}},[Jr,ye]=Or({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=_((n,s)=>{const[a,g]=Ur("RangeSlider",n),{className:u,children:d,inputProps:f,trackProps:p,filledTrackProps:M,thumbProps:h,trackColor:y,filledTrackColor:V,trackSize:P,thumbColor:z,thumbSize:Ve,...S}=Kr(g),{isVertical:Pe,getContainerProps:N,getInputProps:Fe,getTrackProps:O,getFilledTrackProps:q,getMarkProps:Z,getThumbProps:Ee}=Gr(S),ee={...a.container},m=Ar(d),[$]=Ne(m,J),[H]=Ne(m,E),[L]=Ne(m,I),F=Qe(m,E),ne=Qe(m,I),C=Nr(m)?d:qr(m,J,E,I);return e.jsx(Jr,{value:{isVertical:Pe,getTrackProps:O,getFilledTrackProps:q,getMarkProps:Z,getThumbProps:Ee,getInputProps:Fe,trackProps:p,trackColor:y,trackSize:P,filledTrackProps:M,filledTrackColor:V,thumbProps:h,thumbColor:z,thumbSize:Ve,inputProps:f,styles:a},children:e.jsxs(A.div,{className:Q("ui-slider",u),__css:ee,...N({},s),children:[$??e.jsx(J,{}),C,H??(F?null:e.jsx(E,{})),L??(ne?null:e.jsx(I,{}))]})})}),J=_(({className:n,children:s,filledTrackProps:a,...g},u)=>{const{styles:d,trackProps:f,trackColor:p,trackSize:M,isVertical:h,getTrackProps:y}=ye(),V={...d.track};return e.jsx(A.div,{className:Q("ui-slider__track",n),__css:V,...y({...p?{bg:p}:{},...M?h?{w:M}:{h:M}:{},...f,...g},u),children:s??e.jsx(vr,{...a})})}),vr=_(({className:n,...s},a)=>{const{styles:g,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:f}=ye(),p={...g.filledTrack};return e.jsx(A.div,{className:Q("ui-slider__track-filled",n),__css:p,...f({...d?{bg:d}:{},...u,...s},a)})}),b=_(({className:n,...s},a)=>{const{styles:g,getMarkProps:u}=ye(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...g.mark};return e.jsx(A.div,{className:Q("ui-slider__mark",n),__css:d,...u(s,a)})}),Rr=_(({className:n,index:s,children:a,...g},u)=>{const{styles:d,thumbProps:f,thumbColor:p,thumbSize:M,inputProps:h,getThumbProps:y,getInputProps:V}=ye(),P={...d.thumb},{children:z}=f??{};return e.jsxs(A.div,{className:Q("ui-slider__thumb",n),__css:P,...y({index:s,...p?{bg:p}:{},...M?{boxSize:M}:{},...f,...g},u),children:[e.jsx(A.input,{...V({...h,index:s},u)}),a??z]})}),E=_((n,s)=>e.jsx(Rr,{ref:s,index:0,...n})),I=_((n,s)=>e.jsx(Rr,{ref:s,index:1,...n})),ot={title:"Components / Forms / RangeSlider",component:l},se=()=>e.jsx(l,{}),oe=()=>e.jsx(l,{defaultValue:[10,90]}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),ie=()=>e.jsx(e.Fragment,{children:Ir.map(n=>e.jsx(l,{colorScheme:n},n))}),ue=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),de=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},me=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},ge=()=>e.jsx(l,{betweenThumbs:10}),he=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(Le,{w:"full",gap:"xl",children:[e.jsxs(an,{direction:"column",align:"center",gap:"sm",children:[e.jsx(D,{children:"Min"}),e.jsxs(Le,{gap:"md",children:[e.jsx(G,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(G,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(an,{direction:"column",align:"center",gap:"sm",children:[e.jsx(D,{children:"Max"}),e.jsxs(Le,{gap:"md",children:[e.jsx(G,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(G,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},pe=()=>e.jsxs(xr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Se=()=>{const[n,s]=i.useState([25,75]),[a,{on:g,off:u}]=Pr(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:g,onMouseLeave:u,children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(tn,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx(E,{})}),e.jsx(tn,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx(I,{})})]})},be=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Te,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Te,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),ve=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Te,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(J,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(E,{bg:"blue.700"}),e.jsx(I,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(J,{bg:"red.200",children:e.jsx(vr,{bg:"red.500"})}),e.jsx(E,{bg:"red.700"}),e.jsx(I,{bg:"red.700"})]})]}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(_e,{icon:Oe})}}),e.jsxs(l,{children:[e.jsx(E,{color:"blue.500",boxSize:"6",children:e.jsx(_e,{icon:Oe})}),e.jsx(I,{color:"blue.500",boxSize:"6",children:e.jsx(_e,{icon:Oe})})]})]}),Ce=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(b,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(b,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},ke=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},je=()=>{const[n,s]=i.useState([25,75]),[a,g]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:g})]})},Me=()=>{const[n,s]=i.useState([25,75]),[a,g]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:g})]})},we=()=>{var f;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:g,formState:{errors:u}}=Fr({defaultValues:n}),d=p=>console.log("submit:",p);return console.log("watch:",g()),e.jsxs(xr,{as:"form",onSubmit:a(d),children:[e.jsx(Te,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(f=u.rangeSlider)==null?void 0:f.message,children:e.jsx(Er,{name:"rangeSlider",control:s,render:({field:p})=>e.jsx(l,{...p})})}),e.jsx(G,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var sn,on,ln;se.parameters={...se.parameters,docs:{...(sn=se.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(ln=(on=se.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var un,cn,dn;oe.parameters={...oe.parameters,docs:{...(un=oe.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(dn=(cn=oe.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var mn,gn,hn;le.parameters={...le.parameters,docs:{...(mn=le.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(hn=(gn=le.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var pn,Sn,bn;ie.parameters={...ie.parameters,docs:{...(pn=ie.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(bn=(Sn=ie.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};var xn,vn,Rn;ue.parameters={...ue.parameters,docs:{...(xn=ue.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Rn=(vn=ue.parameters)==null?void 0:vn.docs)==null?void 0:Rn.source}}};var fn,Cn,kn;ce.parameters={...ce.parameters,docs:{...(fn=ce.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(kn=(Cn=ce.parameters)==null?void 0:Cn.docs)==null?void 0:kn.source}}};var jn,Mn,wn;de.parameters={...de.parameters,docs:{...(jn=de.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(wn=(Mn=de.parameters)==null?void 0:Mn.docs)==null?void 0:wn.source}}};var Tn,yn,Vn;me.parameters={...me.parameters,docs:{...(Tn=me.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(Vn=(yn=me.parameters)==null?void 0:yn.docs)==null?void 0:Vn.source}}};var Pn,Fn,En;ge.parameters={...ge.parameters,docs:{...(Pn=ge.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(En=(Fn=ge.parameters)==null?void 0:Fn.docs)==null?void 0:En.source}}};var In,Dn,zn;he.parameters={...he.parameters,docs:{...(In=he.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(zn=(Dn=he.parameters)==null?void 0:Dn.docs)==null?void 0:zn.source}}};var $n,Bn,_n;pe.parameters={...pe.parameters,docs:{...($n=pe.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(_n=(Bn=pe.parameters)==null?void 0:Bn.docs)==null?void 0:_n.source}}};var On,An,Nn;Se.parameters={...Se.parameters,docs:{...(On=Se.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Nn=(An=Se.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var qn,Hn,Ln;be.parameters={...be.parameters,docs:{...(qn=be.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Ln=(Hn=be.parameters)==null?void 0:Hn.docs)==null?void 0:Ln.source}}};var Wn,Un,Kn;xe.parameters={...xe.parameters,docs:{...(Wn=xe.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Kn=(Un=xe.parameters)==null?void 0:Un.docs)==null?void 0:Kn.source}}};var Xn,Yn,Gn;ve.parameters={...ve.parameters,docs:{...(Xn=ve.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Gn=(Yn=ve.parameters)==null?void 0:Yn.docs)==null?void 0:Gn.source}}};var Jn,Qn,Zn;Re.parameters={...Re.parameters,docs:{...(Jn=Re.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Qn=Re.parameters)==null?void 0:Qn.docs)==null?void 0:Zn.source}}};var er,nr,rr;fe.parameters={...fe.parameters,docs:{...(er=fe.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
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
}`,...(rr=(nr=fe.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var ar,tr,sr;Ce.parameters={...Ce.parameters,docs:{...(ar=Ce.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
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
}`,...(sr=(tr=Ce.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var or,lr,ir;ke.parameters={...ke.parameters,docs:{...(or=ke.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(ir=(lr=ke.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};var ur,cr,dr;je.parameters={...je.parameters,docs:{...(ur=je.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(dr=(cr=je.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,gr,hr;Me.parameters={...Me.parameters,docs:{...(mr=Me.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(hr=(gr=Me.parameters)==null?void 0:gr.docs)==null?void 0:hr.source}}};var pr,Sr,br;we.parameters={...we.parameters,docs:{...(pr=we.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
}`,...(br=(Sr=we.parameters)==null?void 0:Sr.docs)==null?void 0:br.source}}};const lt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{lt as __namedExportsOrder,se as basic,Re as customColor,ke as customControl,Ce as customMark,fe as customThumb,ot as default,be as isDisabled,ve as isInvalid,xe as isReadonly,Me as onChangeEnd,je as onChangeStart,we as reactHookForm,ge as withBetweenThumbs,ie as withColorScheme,oe as withDefaultValue,he as withFocusThumbOnChange,pe as withMark,de as withMinMax,ue as withOrientation,ce as withReversed,le as withSize,me as withStep,Se as withTooltip};
