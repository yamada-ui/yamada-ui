import{j as e,a as l,F as x}from"./jsx-runtime-TtYKBvr-.js";import{I as Ne,p as je}from"./fontawesome-icon-ZF81hbra.js";import{u as Pr}from"./index-gWY0u-sb.js";import{r as u}from"./index-IybTgENJ.js";import{u as yr,C as Fr}from"./index.esm-PVkfQNar.js";import{c as Ir}from"./components-S9czpUR6.js";import{u as Er}from"./index-IsKhnU0y.js";import{u as Dr,a as zr,b as $r}from"./index-R81ACYHP.js";import{u as Br,f as G,F as Fe}from"./form-control-BdUo61J_.js";import{c as Or,p as _r,J as qe,$ as Je,a0 as Ar,a1 as Nr,u as j,a as ne,d as Ge,y as jr,o as qr,v as Qe,O as Q,f as Hr,I as He,h as Le}from"./factory-BpP3TutA.js";import{f as A}from"./forward-ref-6T0UNPU-.js";import{u as Lr}from"./use-component-style-cxLt7Ns7.js";import{o as Wr}from"./theme-provider-RZopMVJP.js";import{a as Ze,v as en,r as Ur,p as Kr}from"./number-T9-jc1Pg.js";import{F as nn}from"./flex-568aTMsS.js";import{T as B}from"./text-HhFMRBG-.js";import{C as We}from"./center-01QmfiLT.js";import{B as Z}from"./button-Qh4ZXxa_.js";import{V as Sr}from"./stack-U7fyOJfq.js";import{T as rn}from"./tooltip-KPTWLj3l.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-C1O_Nmpw.js";import"./index-3Y8obiWq.js";import"./index-v-tIW51c.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-_MLJtGzH.js";import"./environment-provider-L2wn23Xn.js";import"./loading-provider-H6tysiaC.js";import"./index-j-OI4-0-.js";import"./component-G3mliOEp.js";import"./loading-An8bmO0F.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./motion-SXgmxp4L.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-rn_JBcyJ.js";import"./index-xIHD0DlW.js";import"./notice-zcc-loJZ.js";import"./alert-3DyQFsnV.js";import"./close-button-hib_kAYl.js";import"./use-ripple-XZ8Hx3Ay.js";import"./container-5ft8ddZN.js";import"./box-ACqpXpFo.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-czoUJTU6.js";import"./index-hj-GFWeP.js";import"./index-EfP4_iuN.js";import"./slide-fade-890EqpEs.js";import"./utils-g9VGj7JG.js";import"./scale-fade-lfXQbwaG.js";const Xr=r=>{let{id:a,name:t,min:c=0,max:m=100,step:b=1,defaultValue:f,orientation:S="horizontal",isReversed:h,focusThumbOnChange:P=!0,betweenThumbs:F=0,required:I,disabled:E,readOnly:q,onChange:Ee,...p}=Br(r);if(f=f??[c+(m-c)/4,m-(m-c)/4],m<c)throw new Error("Do not assign a number less than 'min' to 'max'");const De=Ge(p.onChangeStart),H=Ge(p.onChangeEnd),[ze,N]=Er({value:p.value,defaultValue:f,onChange:Ee}),[L,re]=u.useState(!1),[$e,ae]=u.useState(!1),[g,O]=u.useState(-1),W=!(E||q),U=(m-c)/10,D=b||(m-c)/100,te=F*b,C=ze.map(n=>Ze(n,c,m)),fr=C.map(n=>m-n+c),_=(h?fr:C).map(n=>en(n,c,m)),Cr=[{min:c,max:C[1]-te},{min:C[0]+te,max:m}],R=S==="vertical",k=Dr({min:c,max:m,step:b,disabled:E,values:C,valueBounds:Cr,isInteractive:W,isReversed:h,isVertical:R,eventSource:null,focusThumbOnChange:P,betweenThumbs:F,orientation:S}),oe=u.useRef(null),Be=u.useRef(null),le=zr({getNodes:()=>{var o;const n=(o=oe.current)==null?void 0:o.querySelectorAll("[role=slider]");return n?Array.from(n):[]}});a??(a=u.useId()),t??(t=a);const K=u.useCallback(n=>`slider-thumb-${a}-${n}`,[a]),Oe=u.useCallback(n=>`slider-input-${a}-${n}`,[a]),_e=u.useCallback(n=>`slider-marker-${a}-${n}`,[a]);$r(oe,{onSessionStart:n=>{const{isInteractive:o,values:s}=k.current;if(!o)return;re(!0);const d=Ue(n)||0,M=s.map(se=>Math.abs(se-d)),w=Math.min(...M);let T=M.indexOf(w);const V=M.filter(se=>se===w);V.length>1&&d>s[T]&&(T=T+V.length-1),O(T),y(T,d),Ke(T),De(s)},onSessionEnd:()=>{const{isInteractive:n,values:o}=k.current;n&&(re(!1),H(o))},onMove:n=>{const{isInteractive:o}=k.current;if(!o||g==-1)return;const s=Ue(n)||0;O(g),y(g,s),Ke(g)}});const Ue=u.useCallback(n=>{var Ye;if(!Be.current)return;const{min:o,max:s}=k.current;k.current.eventSource="pointer";const{bottom:d,left:M,height:w,width:T}=Be.current.getBoundingClientRect(),{clientX:V,clientY:J}=((Ye=n.touches)==null?void 0:Ye[0])??n;let Ae=(R?d-J:V-M)/(R?w:T);return h&&(Ae=1-Ae),Kr(Ae,o,s)},[k,R,h]),Ke=u.useCallback(n=>{var d;if(n??(n=g),n===-1||!P)return;const o=K(n),s=(d=oe.current)==null?void 0:d.ownerDocument.getElementById(o);s&&setTimeout(()=>s.focus())},[g,P,K]),y=u.useCallback((n,o)=>{const{isInteractive:s,valueBounds:d,values:M}=k.current;if(!s)return;const{min:w,max:T}=d[n];o=parseFloat(Ur(o,w,D)),o=Ze(o,w,T);const V=[...M];V[n]=o,N(V)},[k,D,N]),X=u.useCallback((n,o=D)=>{const{values:s}=k.current,d=s[n];y(n,h?d-o:d+o)},[y,h,k,D]),Y=u.useCallback((n,o=D)=>{const{values:s}=k.current,d=s[n];y(n,h?d+o:d-o)},[y,h,k,D]),Rr=u.useCallback(()=>N(f),[f,N]),Xe=u.useCallback(n=>{const{valueBounds:o}=k.current,{min:s,max:d}=o[g],w={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,U),PageDown:()=>Y(g,U),Home:()=>y(g,s),End:()=>y(g,d)}[n.key];w&&(n.preventDefault(),n.stopPropagation(),w(n),k.current.eventSource="keyboard")},[g,y,k,Y,X,U]);jr(()=>{const{eventSource:n,values:o}=k.current;n==="keyboard"&&H(o)},[C,H]);const kr=u.useCallback((n={},o=null)=>{const s={width:0,height:0},d=R?"height":"width",{width:M,height:w}=le.reduce((V=s,J=s)=>V[d]>J[d]?V:J,s)??{},T={...n.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...R?M?{paddingLeft:M/2,paddingRight:M/2}:{}:w?{paddingTop:w/2,paddingBottom:w/2}:{}};return{...qr(p,["value","onChangeStart","onChangeEnd"]),...n,id:`slider-container-${a}`,ref:Qe(o,oe),tabIndex:-1,style:T}},[a,R,p,le]),Mr=u.useCallback(({index:n,...o}={},s=null)=>({...Q(p,G),...o,ref:s,id:Oe(n),type:"hidden",name:Hr(t)?t[n]:`${t}-${n}`,value:C[n],required:I,disabled:E,readOnly:q}),[E,Oe,t,q,I,p,C]),wr=u.useCallback((n={},o=null)=>{const s={...n.style,position:"absolute",...R?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...Q(p,G),...n,id:`slider-track-${a}`,ref:Qe(o,Be),style:s}},[a,R,p]),xr=u.useCallback((n={},o=null)=>{const s=Math.abs(_[1]-_[0]),d=h?100-_[0]:_[0],M={...n.style,position:"absolute",...R?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...h?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...h?{right:`${d}%`}:{left:`${d}%`}}};return{...Q(p,G),...n,id:`slider-filled-track-${a}`,ref:o,style:M}},[a,h,R,p,_]),Tr=u.useCallback((n={},o=null)=>{let s=en(n.value,c,m);s=h?100-s:s;const d={...n.style,position:"absolute",pointerEvents:"none",...R?{bottom:`${s}%`}:{left:`${s}%`}};return{...Q(p,G),...n,ref:o,id:_e(n.value),"aria-hidden":!0,"data-invalid":He(n.value<c||m<n.value),"data-highlighted":He(C[0]<=n.value&&n.value<=C[1]),style:d}},[_e,h,R,m,c,p,C]),Vr=u.useCallback(({index:n,...o}={},s=null)=>{const d=_[n],{width:M,height:w}=le[n]??{width:0,height:0},T={...o.style,position:"absolute",userSelect:"none",touchAction:"none",...R?{bottom:`calc(${d}% - ${w/2}px)`}:{left:`calc(${d}% - ${M/2}px)`}};if(C[n]==null)throw new Error(`Cannot find value at index '${n}'. The 'value' or 'defaultValue'`);return{...Q(p,G),...o,ref:s,id:K(n),tabIndex:W?0:void 0,role:"slider","data-active":He(L&&g===n),"aria-orientation":S,onKeyDown:Le(o.onKeyDown,Xe),onFocus:Le(o.onFocus,p.onFocus,()=>{ae(!0),O(n)}),onBlur:Le(o.onBlur,p.onBlur,()=>{ae(!1),O(-1)}),style:T}},[g,K,L,W,R,Xe,S,p,_,le,C]);return{values:C,isFocused:$e,isDragging:L,isVertical:R,stepUp:X,stepDown:Y,reset:Rr,setActiveIndex:O,getThumbId:K,getInputId:Oe,getMarkerId:_e,getContainerProps:kr,getInputProps:Mr,getTrackProps:wr,getFilledTrackProps:xr,getMarkProps:Tr,getThumbProps:Vr}},[Yr,Ie]=Or({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),i=A((r,a)=>{const[t,c]=Lr("RangeSlider",r),{className:m,children:b,inputProps:f,trackProps:S,filledTrackProps:h,thumbProps:P,trackColor:F,filledTrackColor:I,trackSize:E,thumbColor:q,thumbSize:Ee,...p}=Wr(c),{isVertical:De,getContainerProps:H,getInputProps:ze,getTrackProps:N,getFilledTrackProps:L,getMarkProps:re,getThumbProps:$e}=Xr(p),ae={...t.container},g=_r(b),[O]=qe(g,ee),[W]=qe(g,z),[U]=qe(g,$),D=Je(g,z),te=Je(g,$),C=Ar(g)?b:Nr(g,ee,z,$);return e(Yr,{value:{isVertical:De,getTrackProps:N,getFilledTrackProps:L,getMarkProps:re,getThumbProps:$e,getInputProps:ze,trackProps:S,trackColor:F,trackSize:E,filledTrackProps:h,filledTrackColor:I,thumbProps:P,thumbColor:q,thumbSize:Ee,inputProps:f,styles:t},children:l(j.div,{className:ne("ui-slider",m),__css:ae,...H({},a),children:[O??e(ee,{}),C,W??(D?null:e(z,{})),U??(te?null:e($,{}))]})})}),ee=A(({className:r,children:a,filledTrackProps:t,...c},m)=>{const{styles:b,trackProps:f,trackColor:S,trackSize:h,isVertical:P,getTrackProps:F}=Ie(),I={...b.track};return e(j.div,{className:ne("ui-slider__track",r),__css:I,...F({...S?{bg:S}:{},...h?P?{w:h}:{h}:{},...f,...c},m),children:a??e(br,{...t})})}),br=A(({className:r,...a},t)=>{const{styles:c,filledTrackProps:m,filledTrackColor:b,getFilledTrackProps:f}=Ie(),S={...c.filledTrack};return e(j.div,{className:ne("ui-slider__track-filled",r),__css:S,...f({...b?{bg:b}:{},...m,...a},t)})}),v=A(({className:r,...a},t)=>{const{styles:c,getMarkProps:m}=Ie(),b={display:"inline-flex",justifyContent:"center",alignItems:"center",...c.mark};return e(j.div,{className:ne("ui-slider__mark",r),__css:b,...m(a,t)})}),vr=A(({className:r,index:a,children:t,...c},m)=>{const{styles:b,thumbProps:f,thumbColor:S,thumbSize:h,inputProps:P,getThumbProps:F,getInputProps:I}=Ie(),E={...b.thumb};return l(j.div,{className:ne("ui-slider__thumb",r),__css:E,...F({index:a,...S?{bg:S}:{},...h?{boxSize:h}:{},...f,...c},m),children:[e(j.input,{...I({...P,index:a},m)}),t]})}),z=A((r,a)=>e(vr,{ref:a,index:0,...r})),$=A((r,a)=>e(vr,{ref:a,index:1,...r})),et={title:"Components / Forms / RangeSlider",component:i},ie=()=>e(i,{}),ue=()=>e(i,{defaultValue:[10,90]}),ce=()=>l(x,{children:[e(i,{size:"sm",defaultValue:[0,25]}),e(i,{size:"md",defaultValue:[25,50]}),e(i,{size:"lg",defaultValue:[50,75]})]}),de=()=>e(x,{children:Ir.map(r=>e(i,{colorScheme:r},r))}),me=()=>e(i,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ge=()=>l(x,{children:[e(i,{isReversed:!0}),e(i,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),he=()=>{const[r,a]=u.useState([50,150]);return l(x,{children:[l(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(i,{value:r,min:0,max:200,onChange:a})]})},pe=()=>{const[r,a]=u.useState([25,75]);return l(x,{children:[l(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(i,{value:r,step:5,onChange:a})]})},Se=()=>e(i,{betweenThumbs:10}),be=()=>{const[r,a]=u.useState([25,75]);return l(x,{children:[l(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(i,{value:r,step:5,focusThumbOnChange:!1}),l(We,{w:"full",gap:"xl",children:[l(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),l(We,{gap:"md",children:[e(Z,{isDisabled:r[0]===0,onClick:()=>a(t=>t[0]!==0?[t[0]-5,t[1]]:t),children:"-5"}),e(Z,{isDisabled:r[0]===100||r[0]===r[1],colorScheme:"blue",onClick:()=>a(t=>t[0]!==100&&r[0]!==r[1]?[t[0]+5,t[1]]:t),children:"+5"})]})]}),l(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),l(We,{gap:"md",children:[e(Z,{isDisabled:r[1]===0||r[0]===r[1],onClick:()=>a(t=>t[1]!==0&&r[0]!==r[1]?[t[0],t[1]-5]:t),children:"-5"}),e(Z,{isDisabled:r[1]===100,colorScheme:"blue",onClick:()=>a(t=>t[1]!==100?[t[0],t[1]+5]:t),children:"+10"})]})]})]})]})},ve=()=>l(Sr,{gap:"lg",children:[l(i,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),fe=()=>{const[r,a]=u.useState([25,75]),[t,{on:c,off:m}]=Pr(!1);return l(i,{value:r,onChange:a,mt:"10",onMouseEnter:c,onMouseLeave:m,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(rn,{placement:"top",label:`${r[0]}%`,isOpen:t,children:e(z,{})}),e(rn,{placement:"top",label:`${r[1]}%`,isOpen:t,children:e($,{})})]})},Ce=()=>l(x,{children:[e(i,{isDisabled:!0}),e(Fe,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Re=()=>l(x,{children:[e(i,{isReadOnly:!0}),e(Fe,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),ke=()=>{const[r,a]=u.useState([15,45]);return l(x,{children:[e(i,{isInvalid:r[0]<20,value:r,onChange:a}),e(Fe,{isInvalid:r[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(i,{value:r,onChange:a})})]})},Me=()=>l(x,{children:[e(i,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(i,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(i,{children:[e(ee,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(z,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),l(i,{children:[e(ee,{bg:"red.200",children:e(br,{bg:"red.500"})}),e(z,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),we=()=>l(x,{children:[e(i,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),l(i,{children:[e(z,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}),e($,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})]})]}),xe=()=>{const[r,a]=u.useState([25,75]);return e(x,{children:l(i,{value:r,onChange:a,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:r[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r[0],"%"]}),l(v,{value:r[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r[1],"%"]})]})})},Te=()=>{const[r,a]=u.useState([25,75]);return l(x,{children:[l(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(i,{value:r,onChange:a})]})},Ve=()=>{const[r,a]=u.useState([25,75]),[t,c]=u.useState([25,75]);return l(x,{children:[l(B,{children:["Min: ",r[0],", Max: ",r[1],", Start Min: ",t[0],", Start Max:"," ",t[0]]}),e(i,{value:r,onChange:a,onChangeStart:c})]})},Pe=()=>{const[r,a]=u.useState([25,75]),[t,c]=u.useState([25,75]);return l(x,{children:[l(B,{children:["Min: ",r[0],", Max: ",r[1],", End Min: ",t[0],", End Max:"," ",t[0]]}),e(i,{value:r,onChange:a,onChangeEnd:c})]})},ye=()=>{var f;const r={rangeSlider:[25,75]},{control:a,handleSubmit:t,watch:c,formState:{errors:m}}=yr({defaultValues:r}),b=S=>console.log("submit:",S);return console.log("watch:",c()),l(Sr,{as:"form",onSubmit:t(b),children:[e(Fe,{isInvalid:!!m.rangeSlider,label:"Volume",errorMessage:(f=m.rangeSlider)==null?void 0:f.message,children:e(Fr,{name:"rangeSlider",control:a,render:({field:S})=>e(i,{...S})})}),e(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var an,tn,on;ie.parameters={...ie.parameters,docs:{...(an=ie.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(on=(tn=ie.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var ln,sn,un;ue.parameters={...ue.parameters,docs:{...(ln=ue.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(un=(sn=ue.parameters)==null?void 0:sn.docs)==null?void 0:un.source}}};var cn,dn,mn;ce.parameters={...ce.parameters,docs:{...(cn=ce.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(mn=(dn=ce.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var gn,hn,pn;de.parameters={...de.parameters,docs:{...(gn=de.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(pn=(hn=de.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var Sn,bn,vn;me.parameters={...me.parameters,docs:{...(Sn=me.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(vn=(bn=me.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var fn,Cn,Rn;ge.parameters={...ge.parameters,docs:{...(fn=ge.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(Rn=(Cn=ge.parameters)==null?void 0:Cn.docs)==null?void 0:Rn.source}}};var kn,Mn,wn;he.parameters={...he.parameters,docs:{...(kn=he.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(wn=(Mn=he.parameters)==null?void 0:Mn.docs)==null?void 0:wn.source}}};var xn,Tn,Vn;pe.parameters={...pe.parameters,docs:{...(xn=pe.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(Vn=(Tn=pe.parameters)==null?void 0:Tn.docs)==null?void 0:Vn.source}}};var Pn,yn,Fn;Se.parameters={...Se.parameters,docs:{...(Pn=Se.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Fn=(yn=Se.parameters)==null?void 0:yn.docs)==null?void 0:Fn.source}}};var In,En,Dn;be.parameters={...be.parameters,docs:{...(In=be.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(Dn=(En=be.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var zn,$n,Bn;ve.parameters={...ve.parameters,docs:{...(zn=ve.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(Bn=($n=ve.parameters)==null?void 0:$n.docs)==null?void 0:Bn.source}}};var On,_n,An;fe.parameters={...fe.parameters,docs:{...(On=fe.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(An=(_n=fe.parameters)==null?void 0:_n.docs)==null?void 0:An.source}}};var Nn,jn,qn;Ce.parameters={...Ce.parameters,docs:{...(Nn=Ce.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(qn=(jn=Ce.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Hn,Ln,Wn;Re.parameters={...Re.parameters,docs:{...(Hn=Re.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Wn=(Ln=Re.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var Un,Kn,Xn;ke.parameters={...ke.parameters,docs:{...(Un=ke.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Xn=(Kn=ke.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,Jn,Gn;Me.parameters={...Me.parameters,docs:{...(Yn=Me.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(Jn=Me.parameters)==null?void 0:Jn.docs)==null?void 0:Gn.source}}};var Qn,Zn,er;we.parameters={...we.parameters,docs:{...(Qn=we.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(er=(Zn=we.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;xe.parameters={...xe.parameters,docs:{...(nr=xe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(ar=(rr=xe.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,or,lr;Te.parameters={...Te.parameters,docs:{...(tr=Te.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(lr=(or=Te.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var sr,ir,ur;Ve.parameters={...Ve.parameters,docs:{...(sr=Ve.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ur=(ir=Ve.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;Pe.parameters={...Pe.parameters,docs:{...(cr=Pe.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(mr=(dr=Pe.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;ye.parameters={...ye.parameters,docs:{...(gr=ye.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(pr=(hr=ye.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};const nt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{nt as __namedExportsOrder,ie as basic,Me as customColor,Te as customControl,xe as customMark,we as customThumb,et as default,Ce as isDisabled,ke as isInvalid,Re as isReadonly,Pe as onChangeEnd,Ve as onChangeStart,ye as reactHookForm,Se as withBetweenThumbs,de as withColorScheme,ue as withDefaultValue,be as withFocusThumbOnChange,ve as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ce as withSize,pe as withStep,fe as withTooltip};
