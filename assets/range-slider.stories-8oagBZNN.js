import{j as e,a as l,F as k}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ne,p as je}from"./fontawesome-icon-_Wx_Ed8O.js";import{u as Er}from"./index-YuXFfT5-.js";import{r as u}from"./index-4g5l5LRQ.js";import{u as Dr,C as zr}from"./index.esm-CyGGJs5T.js";import{c as $r}from"./components-MJfUYLdI.js";import{u as Br}from"./index-f8Y8Tu7A.js";import{u as _r,c as Or,b as Ar}from"./index-m7lVYZ7Z.js";import{u as Nr,f as Ze,g as qe,F as Pe}from"./form-control-seAWPYJ7.js";import{c as jr,v as qr,M as He,a0 as en,a1 as Hr,a2 as Lr,u as j,a as ee,g as nn,e as Wr,o as Kr,w as rn,Q as G,n as Ur,K as Le,h as We}from"./factory-RgfxYELV.js";import{f as A}from"./forward-ref-A-8Arhkk.js";import{u as Xr}from"./use-component-style-w5CKuE2B.js";import{o as Yr}from"./theme-provider-3UPjg8SK.js";import{c as an,v as tn,r as Qr,p as Gr}from"./number-RReIgE2V.js";import{T as B}from"./text-op49pNyp.js";import{C as Ke}from"./center-s5LlUf31.js";import{F as on}from"./flex-jmkNAMLJ.js";import{B as J}from"./button-Alg8QOdJ.js";import{V as Cr}from"./stack-M2-zZJf2.js";import{T as ln}from"./tooltip-bFOzxhB8.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-_8-FzyzA.js";import"./index-C-jqR-WU.js";import"./index-OWwIehGH.js";import"./mapValues-fvZQFbEN.js";import"./_basePickBy-VIqm4fI2.js";import"./isPlainObject-mmZlXdLr.js";import"./index-PPLHz8o0.js";import"./ui-provider-gGtYhuBN.js";import"./index-ZuEHyfRb.js";import"./environment-provider-04hJfOUz.js";import"./motion-heeYkzTb.js";import"./loading-provider-p6JwBb_I.js";import"./index-fL4zC2Ts.js";import"./Combination-8oCz4vin.js";import"./loading-XllCM6KN.js";import"./index-l_LhqSw0.js";import"./index-DFTBuhAG.js";import"./motion-cwWH0vUb.js";import"./index-eMn_GZVX.js";import"./container-portal-tuyQ2qQu.js";import"./index-jmm5gWkb.js";import"./notice-kaWAOYbR.js";import"./alert-x96j3C30.js";import"./close-button-5sZ9VOrD.js";import"./use-ripple-GML7p_Ge.js";import"./container-jHkiijvt.js";import"./box-Z4BFrL4e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-9u2zOJ_h.js";import"./index-oGd_MAfO.js";import"./index-Odsq24mt.js";import"./slide-fade-V6a0ZUeg.js";import"./utils-PAOTXWXk.js";import"./scale-fade-VKyRPcQ5.js";const Jr=({focusThumbOnChange:n=!0,...o})=>{n||(o.isReadOnly=!0);let{id:a,name:h,min:c=0,max:m=100,step:M=1,defaultValue:S,orientation:y="horizontal",isReversed:p,betweenThumbs:F=0,required:I,disabled:E,readOnly:q,onChange:Ie,...b}=Nr(o);if(S=S??[c+(m-c)/4,m-(m-c)/4],m<c)throw new Error("Do not assign a number less than 'min' to 'max'");const Ee=nn(b.onChangeStart),H=nn(b.onChangeEnd),[De,N]=Br({value:b.value,defaultValue:S,onChange:Ie}),[L,ne]=u.useState(!1),[ze,re]=u.useState(!1),[g,_]=u.useState(-1),W=!(E||q),K=(m-c)/10,D=M||(m-c)/100,ae=F*M,w=De.map(r=>an(r,c,m)),[Ue,Xe]=w,Mr=w.map(r=>m-r+c),O=(p?Mr:w).map(r=>tn(r,c,m)),wr=[{min:c,max:Xe-ae},{min:Ue+ae,max:m}],f=y==="vertical",x=_r({min:c,max:m,step:M,disabled:E,values:w,valueBounds:wr,isInteractive:W,isReversed:p,isVertical:f,focusThumbOnChange:n,betweenThumbs:F,orientation:y}),$e=u.useRef(null),te=u.useRef(null),Be=u.useRef(null),oe=Or({getNodes:()=>{var t;const r=(t=te.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=u.useId()),h??(h=a);const U=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),_e=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Oe=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ar(te,{onSessionStart:r=>{const{isInteractive:t,values:s}=x.current;if(!t)return;ne(!0);const d=Ye(r)||0,C=s.map(le=>Math.abs(le-d)),R=Math.min(...C);let T=C.indexOf(R);const V=C.filter(le=>le===R);V.length>1&&d>s[T]&&(T=T+V.length-1),_(T),P(T,d),Qe(T),Ee(s)},onSessionEnd:()=>{const{isInteractive:r,values:t}=x.current;r&&(ne(!1),H(t))},onMove:r=>{const{isInteractive:t}=x.current;if(!t||g==-1)return;const s=Ye(r)||0;_(g),P(g,s),Qe(g)}});const Ye=u.useCallback(r=>{var Je;if(!Be.current)return;const{min:t,max:s}=x.current;$e.current="pointer";const{bottom:d,left:C,height:R,width:T}=Be.current.getBoundingClientRect(),{clientX:V,clientY:Q}=((Je=r.touches)==null?void 0:Je[0])??r;let Ae=(f?d-Q:V-C)/(f?R:T);return p&&(Ae=1-Ae),Gr(Ae,t,s)},[x,f,p]),Qe=u.useCallback(r=>{var d;if(r??(r=g),r===-1||!n)return;const t=U(r),s=(d=te.current)==null?void 0:d.ownerDocument.getElementById(t);s&&setTimeout(()=>s.focus())},[g,n,U]),P=u.useCallback((r,t)=>{const{isInteractive:s,valueBounds:d,values:C}=x.current;if(!s)return;const{min:R,max:T}=d[r];t=parseFloat(Qr(t,R,D)),t=an(t,R,T);const V=[...C];V[r]=t,N(V)},[x,D,N]),X=u.useCallback((r,t=D)=>{const{values:s}=x.current,d=s[r];P(r,p?d-t:d+t)},[P,p,x,D]),Y=u.useCallback((r,t=D)=>{const{values:s}=x.current,d=s[r];P(r,p?d+t:d-t)},[P,p,x,D]),xr=u.useCallback(()=>N(S),[S,N]),Ge=u.useCallback(r=>{const{valueBounds:t}=x.current,{min:s,max:d}=t[g],R={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,K),PageDown:()=>Y(g,K),Home:()=>P(g,s),End:()=>P(g,d)}[r.key];R&&(r.preventDefault(),r.stopPropagation(),R(r),$e.current="keyboard")},[g,P,x,Y,X,K]);Wr(()=>{const{values:r}=x.current;$e.current==="keyboard"&&H(r)},[Ue,Xe,H]);const Tr=u.useCallback((r={},t=null)=>{const s={width:0,height:0},d=f?"height":"width",{width:C,height:R}=oe.reduce((V=s,Q=s)=>V[d]>Q[d]?V:Q,s)??{},T={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...f?C?{paddingLeft:C/2,paddingRight:C/2}:{}:R?{paddingTop:R/2,paddingBottom:R/2}:{}};return{...Kr(b,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,id:`slider-container-${a}`,ref:rn(t,te),tabIndex:-1,style:T}},[a,f,b,oe]),yr=u.useCallback(({index:r,...t},s=null)=>({...G(b,Ze),...t,ref:s,id:_e(r),type:"hidden",name:Ur(h)?h[r]:`${h}-${r}`,value:w[r],required:I,disabled:E,readOnly:q}),[E,_e,h,q,I,b,w]),Vr=u.useCallback((r={},t=null)=>{const s={...r.style,position:"absolute",...f?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...G(b,qe({omit:["aria-readonly"]})),...r,id:`slider-track-${a}`,ref:rn(t,Be),style:s}},[a,f,b]),Pr=u.useCallback((r={},t=null)=>{const s=Math.abs(O[1]-O[0]),d=p?100-O[0]:O[0],C={...r.style,position:"absolute",...f?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...p?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...p?{right:`${d}%`}:{left:`${d}%`}}};return{...G(b,qe({omit:["aria-readonly"]})),...r,id:`slider-filled-track-${a}`,ref:t,style:C}},[a,p,f,b,O]),Fr=u.useCallback((r,t=null)=>{let s=tn(r.value,c,m);s=p?100-s:s;const d={...r.style,position:"absolute",pointerEvents:"none",...f?{bottom:`${s}%`}:{left:`${s}%`}};return{...G(b,qe({omit:["aria-readonly"]})),...r,ref:t,id:Oe(r.value),"aria-hidden":!0,"data-invalid":Le(r.value<c||m<r.value),"data-highlighted":Le(w[0]<=r.value&&r.value<=w[1]),style:d}},[Oe,p,f,m,c,b,w]),Ir=u.useCallback(({index:r,...t},s=null)=>{const d=O[r],{width:C,height:R}=oe[r]??{width:0,height:0},T={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...f?{bottom:`calc(${d}% - ${R/2}px)`}:{left:`calc(${d}% - ${C/2}px)`}},V=w[r];if(V==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb",...G(b,Ze),...t,ref:s,id:U(r),tabIndex:W&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":m,"aria-valuenow":V,"data-active":Le(L&&n&&g===r),"aria-orientation":y,onKeyDown:We(t.onKeyDown,Ge),onFocus:We(t.onFocus,b.onFocus,()=>{re(!0),_(r)}),onBlur:We(t.onBlur,b.onBlur,()=>{re(!1),_(-1)}),style:T}},[c,m,n,g,U,L,W,f,Ge,y,b,O,oe,w]);return{values:w,isFocused:ze,isDragging:L,isVertical:f,stepUp:X,stepDown:Y,reset:xr,setActiveIndex:_,getThumbId:U,getInputId:_e,getMarkerId:Oe,getContainerProps:Tr,getInputProps:yr,getTrackProps:Vr,getFilledTrackProps:Pr,getMarkProps:Fr,getThumbProps:Ir}},[Zr,Fe]=jr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),i=A((n,o)=>{const[a,h]=Xr("RangeSlider",n),{className:c,children:m,inputProps:M,trackProps:S,filledTrackProps:y,thumbProps:p,trackColor:F,filledTrackColor:I,trackSize:E,thumbColor:q,thumbSize:Ie,...b}=Yr(h),{isVertical:Ee,getContainerProps:H,getInputProps:De,getTrackProps:N,getFilledTrackProps:L,getMarkProps:ne,getThumbProps:ze}=Jr(b),re={...a.container},g=qr(m),[_]=He(g,Z),[W]=He(g,z),[K]=He(g,$),D=en(g,z),ae=en(g,$),w=Hr(g)?m:Lr(g,Z,z,$);return e(Zr,{value:{isVertical:Ee,getTrackProps:N,getFilledTrackProps:L,getMarkProps:ne,getThumbProps:ze,getInputProps:De,trackProps:S,trackColor:F,trackSize:E,filledTrackProps:y,filledTrackColor:I,thumbProps:p,thumbColor:q,thumbSize:Ie,inputProps:M,styles:a},children:l(j.div,{className:ee("ui-slider",c),__css:re,...H({},o),children:[_??e(Z,{}),w,W??(D?null:e(z,{})),K??(ae?null:e($,{}))]})})}),Z=A(({className:n,children:o,filledTrackProps:a,...h},c)=>{const{styles:m,trackProps:M,trackColor:S,trackSize:y,isVertical:p,getTrackProps:F}=Fe(),I={...m.track};return e(j.div,{className:ee("ui-slider__track",n),__css:I,...F({...S?{bg:S}:{},...y?p?{w:y}:{h:y}:{},...M,...h},c),children:o??e(Rr,{...a})})}),Rr=A(({className:n,...o},a)=>{const{styles:h,filledTrackProps:c,filledTrackColor:m,getFilledTrackProps:M}=Fe(),S={...h.filledTrack};return e(j.div,{className:ee("ui-slider__track-filled",n),__css:S,...M({...m?{bg:m}:{},...c,...o},a)})}),v=A(({className:n,...o},a)=>{const{styles:h,getMarkProps:c}=Fe(),m={display:"inline-flex",justifyContent:"center",alignItems:"center",...h.mark};return e(j.div,{className:ee("ui-slider__mark",n),__css:m,...c(o,a)})}),kr=A(({className:n,index:o,children:a,...h},c)=>{const{styles:m,thumbProps:M,thumbColor:S,thumbSize:y,inputProps:p,getThumbProps:F,getInputProps:I}=Fe(),E={...m.thumb};return l(j.div,{className:ee("ui-slider__thumb",n),__css:E,...F({index:o,...S?{bg:S}:{},...y?{boxSize:y}:{},...M,...h},c),children:[e(j.input,{...I({...p,index:o},c)}),a]})}),z=A((n,o)=>e(kr,{ref:o,index:0,...n})),$=A((n,o)=>e(kr,{ref:o,index:1,...n})),ot={title:"Components / Forms / RangeSlider",component:i},se=()=>e(i,{}),ie=()=>e(i,{defaultValue:[10,90]}),ue=()=>l(k,{children:[e(i,{size:"sm",defaultValue:[0,25]}),e(i,{size:"md",defaultValue:[25,50]}),e(i,{size:"lg",defaultValue:[50,75]})]}),ce=()=>e(k,{children:$r.map(n=>e(i,{colorScheme:n},n))}),de=()=>e(i,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),me=()=>l(k,{children:[e(i,{isReversed:!0}),e(i,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ge=()=>{const[n,o]=u.useState([50,150]);return l(k,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,min:0,max:200,onChange:o})]})},he=()=>{const[n,o]=u.useState([25,75]);return l(k,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,onChange:o})]})},pe=()=>e(i,{betweenThumbs:10}),Se=()=>{const[n,o]=u.useState([25,75]);return l(k,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,focusThumbOnChange:!1}),l(Ke,{w:"full",gap:"xl",children:[l(on,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),l(Ke,{gap:"md",children:[e(J,{isDisabled:n[0]===0,onClick:()=>o(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e(J,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>o(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),l(on,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),l(Ke,{gap:"md",children:[e(J,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>o(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e(J,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>o(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},be=()=>l(Cr,{gap:"lg",children:[l(i,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),ve=()=>{const[n,o]=u.useState([25,75]),[a,{on:h,off:c}]=Er(!1);return l(i,{value:n,onChange:o,mt:"10",onMouseEnter:h,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(ln,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e(z,{})}),e(ln,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e($,{})})]})},fe=()=>l(k,{children:[e(i,{isDisabled:!0}),e(Pe,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Ce=()=>l(k,{children:[e(i,{isReadOnly:!0}),e(Pe,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Re=()=>{const[n,o]=u.useState([15,45]);return l(k,{children:[e(i,{isInvalid:n[0]<20,value:n,onChange:o}),e(Pe,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(i,{value:n,onChange:o})})]})},ke=()=>l(k,{children:[e(i,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(i,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(i,{children:[e(Z,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(z,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),l(i,{children:[e(Z,{bg:"red.200",children:e(Rr,{bg:"red.500"})}),e(z,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),Me=()=>l(k,{children:[e(i,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),l(i,{children:[e(z,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}),e($,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})]})]}),we=()=>{const[n,o]=u.useState([25,75]);return e(k,{children:l(i,{value:n,onChange:o,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),l(v,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},xe=()=>{const[n,o]=u.useState([25,75]);return l(k,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,onChange:o})]})},Te=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(k,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeStart:h})]})},ye=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(k,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeEnd:h})]})},Ve=()=>{var M;const n={rangeSlider:[25,75]},{control:o,handleSubmit:a,watch:h,formState:{errors:c}}=Dr({defaultValues:n}),m=S=>console.log("submit:",S);return console.log("watch:",h()),l(Cr,{as:"form",onSubmit:a(m),children:[e(Pe,{isInvalid:!!c.rangeSlider,label:"Volume",errorMessage:(M=c.rangeSlider)==null?void 0:M.message,children:e(zr,{name:"rangeSlider",control:o,render:({field:S})=>e(i,{...S})})}),e(J,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var sn,un,cn;se.parameters={...se.parameters,docs:{...(sn=se.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(fr=(vr=Ve.parameters)==null?void 0:vr.docs)==null?void 0:fr.source}}};const lt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{lt as __namedExportsOrder,se as basic,ke as customColor,xe as customControl,we as customMark,Me as customThumb,ot as default,fe as isDisabled,Re as isInvalid,Ce as isReadonly,ye as onChangeEnd,Te as onChangeStart,Ve as reactHookForm,pe as withBetweenThumbs,ce as withColorScheme,ie as withDefaultValue,Se as withFocusThumbOnChange,be as withMark,ge as withMinMax,de as withOrientation,me as withReversed,ue as withSize,he as withStep,ve as withTooltip};
