import{j as e,a as l,F as w}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ae,p as Ne}from"./fontawesome-icon-m2vMAbNY.js";import{u as Vr}from"./index-YuXFfT5-.js";import{r as u}from"./index-4g5l5LRQ.js";import{u as Fr,C as Ir}from"./index.esm-rcUR5vC1.js";import{c as Er}from"./components-ooOqoILH.js";import{u as Dr}from"./index-lIz39_v8.js";import{u as zr,a as $r,b as Br}from"./index-8m1Y0EU9.js";import{u as _r,f as Ge,g as je,F as Ve}from"./form-control-VMdzStvk.js";import{c as Or,v as Ar,M as qe,a0 as Je,a1 as Nr,a2 as jr,u as j,a as ee,g as Qe,e as qr,o as Hr,w as Ze,R as J,n as Lr,K as He,h as Le}from"./factory-S7NpTOPD.js";import{f as A}from"./forward-ref-A-8Arhkk.js";import{u as Wr}from"./use-component-style-RZgwdKSo.js";import{o as Kr}from"./theme-provider-gPsMpKLC.js";import{a as en,v as nn,r as Ur,p as Xr}from"./number-T9-jc1Pg.js";import{F as rn}from"./flex-nM_j58Az.js";import{T as B}from"./text-ZZ-rJ1wf.js";import{C as We}from"./center-oo6jguoz.js";import{B as Q}from"./button-BOuQJR-0.js";import{V as br}from"./stack-hSz9mWhW.js";import{T as an}from"./tooltip-o9afWnfV.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-BK6khpDY.js";import"./index--9owDyfg.js";import"./index-UGPyZe_z.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-Ru1NF1PL.js";import"./environment-provider-StHaV0Js.js";import"./motion-ukEXpwwk.js";import"./loading-provider-_atVP6dC.js";import"./index-qUJCk-PD.js";import"./Combination-8oCz4vin.js";import"./loading-wo-qYTRZ.js";import"./index-9nF0LIhT.js";import"./index-dLbkUGAz.js";import"./motion-Uato0l8n.js";import"./index-EargzzxG.js";import"./container-portal-BQwnZChX.js";import"./index-jmm5gWkb.js";import"./notice-6GkOM2bZ.js";import"./alert-DWXnxKiF.js";import"./close-button-BZ4irXP7.js";import"./use-ripple--PYcbSnX.js";import"./container-WtDyclYB.js";import"./box-fbrrRwZD.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-aOLk0tgj.js";import"./index-EWrItH9O.js";import"./index-pkHheqyW.js";import"./slide-fade-683mLSXO.js";import"./utils-0YOMqa2Q.js";import"./scale-fade-4K9WiHn2.js";const Yr=({focusThumbOnChange:n=!0,...o})=>{o.isReadOnly??(o.isReadOnly=!n);let{id:a,name:h,min:c=0,max:m=100,step:x=1,defaultValue:S,orientation:y="horizontal",isReversed:p,betweenThumbs:F=0,required:I,disabled:E,readOnly:q,onChange:Ie,...b}=_r(o);if(S=S??[c+(m-c)/4,m-(m-c)/4],m<c)throw new Error("Do not assign a number less than 'min' to 'max'");const Ee=Qe(b.onChangeStart),H=Qe(b.onChangeEnd),[De,N]=Dr({value:b.value,defaultValue:S,onChange:Ie}),[L,ne]=u.useState(!1),[ze,re]=u.useState(!1),[g,_]=u.useState(-1),W=!(E||q),K=(m-c)/10,D=x||(m-c)/100,ae=F*x,C=De.map(r=>en(r,c,m)),Rr=C.map(r=>m-r+c),O=(p?Rr:C).map(r=>nn(r,c,m)),fr=[{min:c,max:C[1]-ae},{min:C[0]+ae,max:m}],R=y==="vertical",f=zr({min:c,max:m,step:x,disabled:E,values:C,valueBounds:fr,isInteractive:W,isReversed:p,isVertical:R,eventSource:null,focusThumbOnChange:n,betweenThumbs:F,orientation:y}),te=u.useRef(null),$e=u.useRef(null),oe=$r({getNodes:()=>{var t;const r=(t=te.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=u.useId()),h??(h=a);const U=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Be=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),_e=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Br(te,{onSessionStart:r=>{const{isInteractive:t,values:s}=f.current;if(!t)return;ne(!0);const d=Ke(r)||0,k=s.map(le=>Math.abs(le-d)),M=Math.min(...k);let T=k.indexOf(M);const P=k.filter(le=>le===M);P.length>1&&d>s[T]&&(T=T+P.length-1),_(T),V(T,d),Ue(T),Ee(s)},onSessionEnd:()=>{const{isInteractive:r,values:t}=f.current;r&&(ne(!1),H(t))},onMove:r=>{const{isInteractive:t}=f.current;if(!t||g==-1)return;const s=Ke(r)||0;_(g),V(g,s),Ue(g)}});const Ke=u.useCallback(r=>{var Ye;if(!$e.current)return;const{min:t,max:s}=f.current;f.current.eventSource="pointer";const{bottom:d,left:k,height:M,width:T}=$e.current.getBoundingClientRect(),{clientX:P,clientY:G}=((Ye=r.touches)==null?void 0:Ye[0])??r;let Oe=(R?d-G:P-k)/(R?M:T);return p&&(Oe=1-Oe),Xr(Oe,t,s)},[f,R,p]),Ue=u.useCallback(r=>{var d;if(r??(r=g),r===-1||!n)return;const t=U(r),s=(d=te.current)==null?void 0:d.ownerDocument.getElementById(t);s&&setTimeout(()=>s.focus())},[g,n,U]),V=u.useCallback((r,t)=>{const{isInteractive:s,valueBounds:d,values:k}=f.current;if(!s)return;const{min:M,max:T}=d[r];t=parseFloat(Ur(t,M,D)),t=en(t,M,T);const P=[...k];P[r]=t,N(P)},[f,D,N]),X=u.useCallback((r,t=D)=>{const{values:s}=f.current,d=s[r];V(r,p?d-t:d+t)},[V,p,f,D]),Y=u.useCallback((r,t=D)=>{const{values:s}=f.current,d=s[r];V(r,p?d+t:d-t)},[V,p,f,D]),kr=u.useCallback(()=>N(S),[S,N]),Xe=u.useCallback(r=>{const{valueBounds:t}=f.current,{min:s,max:d}=t[g],M={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,K),PageDown:()=>Y(g,K),Home:()=>V(g,s),End:()=>V(g,d)}[r.key];M&&(r.preventDefault(),r.stopPropagation(),M(r),f.current.eventSource="keyboard")},[g,V,f,Y,X,K]);qr(()=>{const{eventSource:r,values:t}=f.current;r==="keyboard"&&H(t)},[C,H]);const Mr=u.useCallback((r={},t=null)=>{const s={width:0,height:0},d=R?"height":"width",{width:k,height:M}=oe.reduce((P=s,G=s)=>P[d]>G[d]?P:G,s)??{},T={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...R?k?{paddingLeft:k/2,paddingRight:k/2}:{}:M?{paddingTop:M/2,paddingBottom:M/2}:{}};return{...Hr(b,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,id:`slider-container-${a}`,ref:Ze(t,te),tabIndex:-1,style:T}},[a,R,b,oe]),wr=u.useCallback(({index:r,...t},s=null)=>({...J(b,Ge),...t,ref:s,id:Be(r),type:"hidden",name:Lr(h)?h[r]:`${h}-${r}`,value:C[r],required:I,disabled:E,readOnly:q}),[E,Be,h,q,I,b,C]),xr=u.useCallback((r={},t=null)=>{const s={...r.style,position:"absolute",...R?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...J(b,je({omit:["aria-readonly"]})),...r,id:`slider-track-${a}`,ref:Ze(t,$e),style:s}},[a,R,b]),Tr=u.useCallback((r={},t=null)=>{const s=Math.abs(O[1]-O[0]),d=p?100-O[0]:O[0],k={...r.style,position:"absolute",...R?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...p?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...p?{right:`${d}%`}:{left:`${d}%`}}};return{...J(b,je({omit:["aria-readonly"]})),...r,id:`slider-filled-track-${a}`,ref:t,style:k}},[a,p,R,b,O]),yr=u.useCallback((r,t=null)=>{let s=nn(r.value,c,m);s=p?100-s:s;const d={...r.style,position:"absolute",pointerEvents:"none",...R?{bottom:`${s}%`}:{left:`${s}%`}};return{...J(b,je({omit:["aria-readonly"]})),...r,ref:t,id:_e(r.value),"aria-hidden":!0,"data-invalid":He(r.value<c||m<r.value),"data-highlighted":He(C[0]<=r.value&&r.value<=C[1]),style:d}},[_e,p,R,m,c,b,C]),Pr=u.useCallback(({index:r,...t},s=null)=>{const d=O[r],{width:k,height:M}=oe[r]??{width:0,height:0},T={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...R?{bottom:`calc(${d}% - ${M/2}px)`}:{left:`calc(${d}% - ${k/2}px)`}},P=C[r];if(P==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb",...J(b,Ge),...t,ref:s,id:U(r),tabIndex:W&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":m,"aria-valuenow":P,"data-active":He(L&&n&&g===r),"aria-orientation":y,onKeyDown:Le(t.onKeyDown,Xe),onFocus:Le(t.onFocus,b.onFocus,()=>{re(!0),_(r)}),onBlur:Le(t.onBlur,b.onBlur,()=>{re(!1),_(-1)}),style:T}},[c,m,n,g,U,L,W,R,Xe,y,b,O,oe,C]);return{values:C,isFocused:ze,isDragging:L,isVertical:R,stepUp:X,stepDown:Y,reset:kr,setActiveIndex:_,getThumbId:U,getInputId:Be,getMarkerId:_e,getContainerProps:Mr,getInputProps:wr,getTrackProps:xr,getFilledTrackProps:Tr,getMarkProps:yr,getThumbProps:Pr}},[Gr,Fe]=Or({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),i=A((n,o)=>{const[a,h]=Wr("RangeSlider",n),{className:c,children:m,inputProps:x,trackProps:S,filledTrackProps:y,thumbProps:p,trackColor:F,filledTrackColor:I,trackSize:E,thumbColor:q,thumbSize:Ie,...b}=Kr(h),{isVertical:Ee,getContainerProps:H,getInputProps:De,getTrackProps:N,getFilledTrackProps:L,getMarkProps:ne,getThumbProps:ze}=Yr(b),re={...a.container},g=Ar(m),[_]=qe(g,Z),[W]=qe(g,z),[K]=qe(g,$),D=Je(g,z),ae=Je(g,$),C=Nr(g)?m:jr(g,Z,z,$);return e(Gr,{value:{isVertical:Ee,getTrackProps:N,getFilledTrackProps:L,getMarkProps:ne,getThumbProps:ze,getInputProps:De,trackProps:S,trackColor:F,trackSize:E,filledTrackProps:y,filledTrackColor:I,thumbProps:p,thumbColor:q,thumbSize:Ie,inputProps:x,styles:a},children:l(j.div,{className:ee("ui-slider",c),__css:re,...H({},o),children:[_??e(Z,{}),C,W??(D?null:e(z,{})),K??(ae?null:e($,{}))]})})}),Z=A(({className:n,children:o,filledTrackProps:a,...h},c)=>{const{styles:m,trackProps:x,trackColor:S,trackSize:y,isVertical:p,getTrackProps:F}=Fe(),I={...m.track};return e(j.div,{className:ee("ui-slider__track",n),__css:I,...F({...S?{bg:S}:{},...y?p?{w:y}:{h:y}:{},...x,...h},c),children:o??e(vr,{...a})})}),vr=A(({className:n,...o},a)=>{const{styles:h,filledTrackProps:c,filledTrackColor:m,getFilledTrackProps:x}=Fe(),S={...h.filledTrack};return e(j.div,{className:ee("ui-slider__track-filled",n),__css:S,...x({...m?{bg:m}:{},...c,...o},a)})}),v=A(({className:n,...o},a)=>{const{styles:h,getMarkProps:c}=Fe(),m={display:"inline-flex",justifyContent:"center",alignItems:"center",...h.mark};return e(j.div,{className:ee("ui-slider__mark",n),__css:m,...c(o,a)})}),Cr=A(({className:n,index:o,children:a,...h},c)=>{const{styles:m,thumbProps:x,thumbColor:S,thumbSize:y,inputProps:p,getThumbProps:F,getInputProps:I}=Fe(),E={...m.thumb};return l(j.div,{className:ee("ui-slider__thumb",n),__css:E,...F({index:o,...S?{bg:S}:{},...y?{boxSize:y}:{},...x,...h},c),children:[e(j.input,{...I({...p,index:o},c)}),a]})}),z=A((n,o)=>e(Cr,{ref:o,index:0,...n})),$=A((n,o)=>e(Cr,{ref:o,index:1,...n})),nt={title:"Components / Forms / RangeSlider",component:i},se=()=>e(i,{}),ie=()=>e(i,{defaultValue:[10,90]}),ue=()=>l(w,{children:[e(i,{size:"sm",defaultValue:[0,25]}),e(i,{size:"md",defaultValue:[25,50]}),e(i,{size:"lg",defaultValue:[50,75]})]}),ce=()=>e(w,{children:Er.map(n=>e(i,{colorScheme:n},n))}),de=()=>e(i,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),me=()=>l(w,{children:[e(i,{isReversed:!0}),e(i,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ge=()=>{const[n,o]=u.useState([50,150]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,min:0,max:200,onChange:o})]})},he=()=>{const[n,o]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,onChange:o})]})},pe=()=>e(i,{betweenThumbs:10}),Se=()=>{const[n,o]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,focusThumbOnChange:!1}),l(We,{w:"full",gap:"xl",children:[l(rn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),l(We,{gap:"md",children:[e(Q,{isDisabled:n[0]===0,onClick:()=>o(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e(Q,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>o(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),l(rn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),l(We,{gap:"md",children:[e(Q,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>o(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e(Q,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>o(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},be=()=>l(br,{gap:"lg",children:[l(i,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),ve=()=>{const[n,o]=u.useState([25,75]),[a,{on:h,off:c}]=Vr(!1);return l(i,{value:n,onChange:o,mt:"10",onMouseEnter:h,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(an,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e(z,{})}),e(an,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e($,{})})]})},Ce=()=>l(w,{children:[e(i,{isDisabled:!0}),e(Ve,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Re=()=>l(w,{children:[e(i,{isReadOnly:!0}),e(Ve,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),fe=()=>{const[n,o]=u.useState([15,45]);return l(w,{children:[e(i,{isInvalid:n[0]<20,value:n,onChange:o}),e(Ve,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(i,{value:n,onChange:o})})]})},ke=()=>l(w,{children:[e(i,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(i,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(i,{children:[e(Z,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(z,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),l(i,{children:[e(Z,{bg:"red.200",children:e(vr,{bg:"red.500"})}),e(z,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),Me=()=>l(w,{children:[e(i,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),l(i,{children:[e(z,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}),e($,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})]})]}),we=()=>{const[n,o]=u.useState([25,75]);return e(w,{children:l(i,{value:n,onChange:o,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),l(v,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},xe=()=>{const[n,o]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,onChange:o})]})},Te=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeStart:h})]})},ye=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeEnd:h})]})},Pe=()=>{var x;const n={rangeSlider:[25,75]},{control:o,handleSubmit:a,watch:h,formState:{errors:c}}=Fr({defaultValues:n}),m=S=>console.log("submit:",S);return console.log("watch:",h()),l(br,{as:"form",onSubmit:a(m),children:[e(Ve,{isInvalid:!!c.rangeSlider,label:"Volume",errorMessage:(x=c.rangeSlider)==null?void 0:x.message,children:e(Ir,{name:"rangeSlider",control:o,render:({field:S})=>e(i,{...S})})}),e(Q,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var tn,on,ln;se.parameters={...se.parameters,docs:{...(tn=se.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(ln=(on=se.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var sn,un,cn;ie.parameters={...ie.parameters,docs:{...(sn=ie.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(cn=(un=ie.parameters)==null?void 0:un.docs)==null?void 0:cn.source}}};var dn,mn,gn;ue.parameters={...ue.parameters,docs:{...(dn=ue.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(gn=(mn=ue.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,pn,Sn;ce.parameters={...ce.parameters,docs:{...(hn=ce.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(Sn=(pn=ce.parameters)==null?void 0:pn.docs)==null?void 0:Sn.source}}};var bn,vn,Cn;de.parameters={...de.parameters,docs:{...(bn=de.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Cn=(vn=de.parameters)==null?void 0:vn.docs)==null?void 0:Cn.source}}};var Rn,fn,kn;me.parameters={...me.parameters,docs:{...(Rn=me.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(kn=(fn=me.parameters)==null?void 0:fn.docs)==null?void 0:kn.source}}};var Mn,wn,xn;ge.parameters={...ge.parameters,docs:{...(Mn=ge.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(xn=(wn=ge.parameters)==null?void 0:wn.docs)==null?void 0:xn.source}}};var Tn,yn,Pn;he.parameters={...he.parameters,docs:{...(Tn=he.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(Pn=(yn=he.parameters)==null?void 0:yn.docs)==null?void 0:Pn.source}}};var Vn,Fn,In;pe.parameters={...pe.parameters,docs:{...(Vn=pe.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(In=(Fn=pe.parameters)==null?void 0:Fn.docs)==null?void 0:In.source}}};var En,Dn,zn;Se.parameters={...Se.parameters,docs:{...(En=Se.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
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
}`,...(zn=(Dn=Se.parameters)==null?void 0:Dn.docs)==null?void 0:zn.source}}};var $n,Bn,_n;be.parameters={...be.parameters,docs:{...($n=be.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(_n=(Bn=be.parameters)==null?void 0:Bn.docs)==null?void 0:_n.source}}};var On,An,Nn;ve.parameters={...ve.parameters,docs:{...(On=ve.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Nn=(An=ve.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var jn,qn,Hn;Ce.parameters={...Ce.parameters,docs:{...(jn=Ce.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Hn=(qn=Ce.parameters)==null?void 0:qn.docs)==null?void 0:Hn.source}}};var Ln,Wn,Kn;Re.parameters={...Re.parameters,docs:{...(Ln=Re.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Kn=(Wn=Re.parameters)==null?void 0:Wn.docs)==null?void 0:Kn.source}}};var Un,Xn,Yn;fe.parameters={...fe.parameters,docs:{...(Un=fe.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Yn=(Xn=fe.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Gn,Jn,Qn;ke.parameters={...ke.parameters,docs:{...(Gn=ke.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Jn=ke.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,er,nr;Me.parameters={...Me.parameters,docs:{...(Zn=Me.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(nr=(er=Me.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;we.parameters={...we.parameters,docs:{...(rr=we.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(tr=(ar=we.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var or,lr,sr;xe.parameters={...xe.parameters,docs:{...(or=xe.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(sr=(lr=xe.parameters)==null?void 0:lr.docs)==null?void 0:sr.source}}};var ir,ur,cr;Te.parameters={...Te.parameters,docs:{...(ir=Te.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(cr=(ur=Te.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,gr;ye.parameters={...ye.parameters,docs:{...(dr=ye.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(gr=(mr=ye.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,pr,Sr;Pe.parameters={...Pe.parameters,docs:{...(hr=Pe.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(pr=Pe.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};const rt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{rt as __namedExportsOrder,se as basic,ke as customColor,xe as customControl,we as customMark,Me as customThumb,nt as default,Ce as isDisabled,fe as isInvalid,Re as isReadonly,ye as onChangeEnd,Te as onChangeStart,Pe as reactHookForm,pe as withBetweenThumbs,ce as withColorScheme,ie as withDefaultValue,Se as withFocusThumbOnChange,be as withMark,ge as withMinMax,de as withOrientation,me as withReversed,ue as withSize,he as withStep,ve as withTooltip};
