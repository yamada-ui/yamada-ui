import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{u as Dr}from"./index-CBqzus2r.js";import{r as i}from"./index-uCp2LrAq.js";import{u as Ir,C as zr}from"./index.esm-TLwx9zN6.js";import{c as $r}from"./components-DemvROjX.js";import{u as Br}from"./index-Dc2KQwVC.js";import{u as _r,c as Ar,b as Or}from"./index-fRq0EYJS.js";import{u as Nr,f as Hr,F as Te}from"./form-control-WczVVmWv.js";import{l as Lr,t as Ur,x as Le,a2 as nn,a3 as Kr,a4 as Xr,b as N,c as J,T as Yr,k as rn,f as qr,a as an,s as Wr,d as Ue,h as Ke}from"./factory-Bf0a1C4O.js";import{f as B}from"./forward-ref-Dr5Hqd9a.js";import{a as Gr}from"./use-component-style-C0MoE1pt.js";import{o as Jr}from"./theme-provider-zwL-D6eR.js";import{c as tn,v as sn,r as Qr,p as Zr}from"./number-49BHn0Cl.js";import{A as Xe}from"./activity-Dr1xEzcR.js";import{T as I}from"./text-MYjKvx39.js";import{C as Ye}from"./center-CSFPO4u1.js";import{F as on}from"./flex-BWicnFVx.js";import{B as W}from"./button-DOTfyR12.js";import{V as Cr}from"./stack-DeQ5YYY4.js";import{T as ln}from"./tooltip-BaddgUAF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CYZlXLuv.js";import"./index-DMXcxA-U.js";import"./_basePickBy-BiMq99G-.js";import"./iframe-DCW8IwlL.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-B0qSiYNs.js";import"./index-DnMxUhsW.js";import"./environment-provider-BhdF2tQ4.js";import"./motion-B-hZ6xRg.js";import"./loading-provider-FTnuYIgn.js";import"./index-CAzj2Fxr.js";import"./Combination-nrDmEbEK.js";import"./loading-BMMGc-Ko.js";import"./icon-CVBZDjqd.js";import"./index-BJ39ysE2.js";import"./motion-BPPCNfSa.js";import"./index-B5H6KlGO.js";import"./container-portal--tud7o6s.js";import"./notice-r5iOQzsg.js";import"./alert-DkZClwrL.js";import"./close-button-qBeYcal4.js";import"./use-ripple-op6oFSyJ.js";import"./container-BvbqXqT5.js";import"./box-ANpItPfh.js";import"./index-BkEwqnoP.js";import"./index-Bh6_N6k1.js";import"./index-n0cfV_bg.js";import"./select-inP6-iK1.js";import"./option-BHnkcZZl.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./popover-content-T-x7oVfE.js";import"./index-C2NYhR29.js";import"./index-BPmMvQRx.js";import"./index-jdyvIJfp.js";import"./index-BaBVWS6a.js";import"./index-FZO-VaWv.js";import"./slide-fade-vi8PuXWc.js";import"./utils-BQuDdpot.js";import"./scale-fade-BYznkx0n.js";import"./index-3uUm-2Os.js";import"./event-imqIgfLG.js";import"./lucide-icon-BNUZiTU8.js";const ea=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,min:u=0,max:d=100,step:R=1,defaultValue:h,orientation:k="horizontal",isReversed:g,betweenThumbs:P=0,required:V,disabled:F,readOnly:z,value:Pe,onChange:Ve,onChangeStart:Fe,onChangeEnd:Ee,onFocus:Q,onBlur:Z,"aria-readonly":_,...H}=Nr(s);const M=Yr(H,Hr);if(h=h??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const De=rn(Fe),T=rn(Ee),[Ie,A]=Br({value:Pe,defaultValue:h,onChange:Ve}),[L,ee]=i.useState(!1),[ze,ne]=i.useState(!1),[p,U]=i.useState(-1),$e=!(F||z),Be=(d-u)/10,O=R||(d-u)/100,qe=P*R,w=Ie.map(r=>tn(r,u,d)),[We,Ge]=w,jr=w.map(r=>d-r+u),$=(g?jr:w).map(r=>sn(r,u,d)),Mr=[{min:u,max:Ge-qe},{min:We+qe,max:d}],b=k==="vertical",C=_r({min:u,max:d,step:R,disabled:F,values:w,valueBounds:Mr,isInteractive:$e,isReversed:g,isVertical:b,focusThumbOnChange:n,betweenThumbs:P,orientation:k}),_e=i.useRef(null),re=i.useRef(null),Ae=i.useRef(null),ae=Ar({getNodes:()=>{var t;const r=(t=re.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),m??(m=a);const K=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Oe=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),Ne=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Or(re,{onSessionStart:r=>{const{isInteractive:t,values:o}=C.current;if(!t)return;ee(!0);const c=Je(r)||0,x=o.map(te=>Math.abs(te-c)),v=Math.min(...x);let f=x.indexOf(v);const j=x.filter(te=>te===v);j.length>1&&c>o[f]&&(f=f+j.length-1),U(f),y(f,c),Qe(f),De(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=C.current;r&&(ee(!1),T(t))},onMove:r=>{const{isInteractive:t}=C.current;if(!t||p==-1)return;const o=Je(r)||0;U(p),y(p,o),Qe(p)}});const Je=i.useCallback(r=>{var en;if(!Ae.current)return;const{min:t,max:o}=C.current;_e.current="pointer";const{bottom:c,left:x,height:v,width:f}=Ae.current.getBoundingClientRect(),{clientX:j,clientY:q}=((en=r.touches)==null?void 0:en[0])??r;let He=(b?c-q:j-x)/(b?v:f);return g&&(He=1-He),Zr(He,t,o)},[C,b,g]),Qe=i.useCallback(r=>{var c;if(r??(r=p),r===-1||!n)return;const t=K(r),o=(c=re.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[p,n,K]),y=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:x}=C.current;if(!o)return;const{min:v,max:f}=c[r];t=parseFloat(Qr(t,v,O)),t=tn(t,v,f);const j=[...x];j[r]=t,A(j)},[C,O,A]),X=i.useCallback((r,t=O)=>{const{values:o}=C.current,c=o[r];y(r,g?c-t:c+t)},[y,g,C,O]),Y=i.useCallback((r,t=O)=>{const{values:o}=C.current,c=o[r];y(r,g?c+t:c-t)},[y,g,C,O]),wr=i.useCallback(()=>A(h),[h,A]),Ze=i.useCallback(r=>{const{valueBounds:t}=C.current,{min:o,max:c}=t[p],v={ArrowRight:()=>X(p),ArrowUp:()=>X(p),ArrowLeft:()=>Y(p),ArrowDown:()=>Y(p),PageUp:()=>X(p,Be),PageDown:()=>Y(p,Be),Home:()=>y(p,o),End:()=>y(p,c)}[r.key];v&&(r.preventDefault(),r.stopPropagation(),v(r),_e.current="keyboard")},[p,y,C,Y,X,Be]);qr(()=>{const{values:r}=C.current;_e.current==="keyboard"&&T(r)},[We,Ge,T]);const Tr=i.useCallback((r={},t=null)=>{const o={width:0,height:0},c=b?"height":"width",{width:x,height:v}=ae.reduce((j=o,q=o)=>j[c]>q[c]?j:q,o)??{},f={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...b?x?{paddingLeft:x/2,paddingRight:x/2}:{}:v?{paddingTop:v/2,paddingBottom:v/2}:{}};return{...H,...r,id:`slider-container-${a}`,ref:an(t,re),tabIndex:-1,style:f}},[a,b,H,ae]),yr=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":_,...M,...t,ref:o,id:Oe(r),type:"hidden",name:Wr(m)?m[r]:`${m}-${r}`,value:w[r],required:V,disabled:F,readOnly:z}),[_,F,Oe,m,z,V,M,w]),Pr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${a}`,ref:an(t,Ae),style:o}},[a,b,M]),Vr=i.useCallback((r={},t=null)=>{const o=Math.abs($[1]-$[0]),c=g?100-$[0]:$[0],x={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...g?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...g?{right:`${c}%`}:{left:`${c}%`}}};return{...M,...r,id:`slider-filled-track-${a}`,ref:t,style:x}},[a,g,b,M,$]),Fr=i.useCallback((r,t=null)=>{let o=sn(r.value,u,d);o=g?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...b?{bottom:`${o}%`}:{left:`${o}%`}};return{...M,...r,ref:t,id:Ne(r.value),"aria-hidden":!0,"data-invalid":Ue(r.value<u||d<r.value),"data-highlighted":Ue(w[0]<=r.value&&r.value<=w[1]),style:c}},[Ne,g,b,d,u,M,w]),Er=i.useCallback(({index:r,...t},o=null)=>{const c=$[r],{width:x,height:v}=ae[r]??{width:0,height:0},f={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...b?{bottom:`calc(${c}% - ${v/2}px)`}:{left:`calc(${c}% - ${x/2}px)`}},j=w[r];if(j==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":_,...M,...t,ref:o,id:K(r),tabIndex:$e&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":j,"data-active":Ue(L&&n&&p===r),"aria-orientation":k,onKeyDown:Ke(t.onKeyDown,Ze),onFocus:Ke(t.onFocus,Q,()=>{ne(!0),U(r)}),onBlur:Ke(t.onBlur,Z,()=>{ne(!1),U(-1)}),style:f}},[$,ae,b,w,_,M,K,$e,n,u,d,L,p,k,Ze,Q,Z]);return{values:w,isFocused:ze,isDragging:L,isVertical:b,stepUp:X,stepDown:Y,reset:wr,setActiveIndex:U,getThumbId:K,getInputId:Oe,getMarkerId:Ne,getContainerProps:Tr,getInputProps:yr,getTrackProps:Pr,getFilledTrackProps:Vr,getMarkProps:Fr,getThumbProps:Er}},[na,ye]=Lr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=B((n,s)=>{const[a,m]=Gr("RangeSlider",n),{className:u,children:d,inputProps:R,trackProps:h,filledTrackProps:k,thumbProps:g,trackColor:P,filledTrackColor:V,trackSize:F,thumbColor:z,thumbSize:Pe,...Ve}=Jr(m),{isVertical:Fe,getContainerProps:Ee,getInputProps:Q,getTrackProps:Z,getFilledTrackProps:_,getMarkProps:H,getThumbProps:M}=ea(Ve),De={...a.container},T=Ur(d),[Ie]=Le(T,G),[A]=Le(T,E),[L]=Le(T,D),ee=nn(T,E),ze=nn(T,D),ne=Kr(T)?d:Xr(T,G,E,D);return e.jsx(na,{value:{isVertical:Fe,getTrackProps:Z,getFilledTrackProps:_,getMarkProps:H,getThumbProps:M,getInputProps:Q,trackProps:h,trackColor:P,trackSize:F,filledTrackProps:k,filledTrackColor:V,thumbProps:g,thumbColor:z,thumbSize:Pe,inputProps:R,styles:a},children:e.jsxs(N.div,{className:J("ui-slider",u),__css:De,...Ee({},s),children:[Ie??e.jsx(G,{}),ne,A??(ee?null:e.jsx(E,{})),L??(ze?null:e.jsx(D,{}))]})})}),G=B(({className:n,children:s,filledTrackProps:a,...m},u)=>{const{styles:d,trackProps:R,trackColor:h,trackSize:k,isVertical:g,getTrackProps:P}=ye(),V={...d.track};return e.jsx(N.div,{className:J("ui-slider__track",n),__css:V,...P({...h?{bg:h}:{},...k?g?{w:k}:{h:k}:{},...R,...m},u),children:s??e.jsx(fr,{...a})})}),fr=B(({className:n,...s},a)=>{const{styles:m,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:R}=ye(),h={...m.filledTrack};return e.jsx(N.div,{className:J("ui-slider__track-filled",n),__css:h,...R({...d?{bg:d}:{},...u,...s},a)})}),S=B(({className:n,...s},a)=>{const{styles:m,getMarkProps:u}=ye(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e.jsx(N.div,{className:J("ui-slider__mark",n),__css:d,...u(s,a)})}),kr=B(({className:n,index:s,children:a,...m},u)=>{const{styles:d,thumbProps:R,thumbColor:h,thumbSize:k,inputProps:g,getThumbProps:P,getInputProps:V}=ye(),F={...d.thumb},{children:z}=R??{};return e.jsxs(N.div,{className:J("ui-slider__thumb",n),__css:F,...P({index:s,...h?{bg:h}:{},...k?{boxSize:k}:{},...R,...m},u),children:[e.jsx(N.input,{...V({...g,index:s},u)}),a??z]})}),E=B((n,s)=>e.jsx(kr,{ref:s,index:0,...n})),D=B((n,s)=>e.jsx(kr,{ref:s,index:1,...n})),Ct={title:"Components / Forms / RangeSlider",component:l},se=()=>e.jsx(l,{}),oe=()=>e.jsx(l,{defaultValue:[10,90]}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),ie=()=>e.jsx(e.Fragment,{children:$r.map(n=>e.jsx(l,{colorScheme:n},n))}),ue=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),de=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},me=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},ge=()=>e.jsx(l,{betweenThumbs:10}),he=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(Ye,{w:"full",gap:"xl",children:[e.jsxs(on,{direction:"column",align:"center",gap:"sm",children:[e.jsx(I,{children:"Min"}),e.jsxs(Ye,{gap:"md",children:[e.jsx(W,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(W,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(on,{direction:"column",align:"center",gap:"sm",children:[e.jsx(I,{children:"Max"}),e.jsxs(Ye,{gap:"md",children:[e.jsx(W,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(W,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},pe=()=>e.jsxs(Cr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Se=()=>{const[n,s]=i.useState([25,75]),[a,{on:m,off:u}]=Dr(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:m,onMouseLeave:u,children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(ln,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx(E,{})}),e.jsx(ln,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx(D,{})})]})},be=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Te,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Te,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),ve=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Te,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(G,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(E,{bg:"blue.700"}),e.jsx(D,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(G,{bg:"red.200",children:e.jsx(fr,{bg:"red.500"})}),e.jsx(E,{bg:"red.700"}),e.jsx(D,{bg:"red.700"})]})]}),Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(Xe,{})}}),e.jsxs(l,{children:[e.jsx(E,{color:"blue.500",boxSize:"6",children:e.jsx(Xe,{})}),e.jsx(D,{color:"blue.500",boxSize:"6",children:e.jsx(Xe,{})})]})]}),fe=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(S,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(S,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},ke=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},je=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Me=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},we=()=>{var R;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:m,formState:{errors:u}}=Ir({defaultValues:n}),d=h=>console.log("submit:",h);return console.log("watch:",m()),e.jsxs(Cr,{as:"form",onSubmit:a(d),children:[e.jsx(Te,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(R=u.rangeSlider)==null?void 0:R.message,children:e.jsx(zr,{name:"rangeSlider",control:s,render:({field:h})=>e.jsx(l,{...h})})}),e.jsx(W,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var un,cn,dn;se.parameters={...se.parameters,docs:{...(un=se.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(dn=(cn=se.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var mn,gn,hn;oe.parameters={...oe.parameters,docs:{...(mn=oe.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(hn=(gn=oe.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var pn,Sn,bn;le.parameters={...le.parameters,docs:{...(pn=le.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(bn=(Sn=le.parameters)==null?void 0:Sn.docs)==null?void 0:bn.source}}};var xn,vn,Rn;ie.parameters={...ie.parameters,docs:{...(xn=ie.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(Rn=(vn=ie.parameters)==null?void 0:vn.docs)==null?void 0:Rn.source}}};var Cn,fn,kn;ue.parameters={...ue.parameters,docs:{...(Cn=ue.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(kn=(fn=ue.parameters)==null?void 0:fn.docs)==null?void 0:kn.source}}};var jn,Mn,wn;ce.parameters={...ce.parameters,docs:{...(jn=ce.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(wn=(Mn=ce.parameters)==null?void 0:Mn.docs)==null?void 0:wn.source}}};var Tn,yn,Pn;de.parameters={...de.parameters,docs:{...(Tn=de.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(Pn=(yn=de.parameters)==null?void 0:yn.docs)==null?void 0:Pn.source}}};var Vn,Fn,En;me.parameters={...me.parameters,docs:{...(Vn=me.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(En=(Fn=me.parameters)==null?void 0:Fn.docs)==null?void 0:En.source}}};var Dn,In,zn;ge.parameters={...ge.parameters,docs:{...(Dn=ge.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(zn=(In=ge.parameters)==null?void 0:In.docs)==null?void 0:zn.source}}};var $n,Bn,_n;he.parameters={...he.parameters,docs:{...($n=he.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(_n=(Bn=he.parameters)==null?void 0:Bn.docs)==null?void 0:_n.source}}};var An,On,Nn;pe.parameters={...pe.parameters,docs:{...(An=pe.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(Nn=(On=pe.parameters)==null?void 0:On.docs)==null?void 0:Nn.source}}};var Hn,Ln,Un;Se.parameters={...Se.parameters,docs:{...(Hn=Se.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
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
}`,...(Un=(Ln=Se.parameters)==null?void 0:Ln.docs)==null?void 0:Un.source}}};var Kn,Xn,Yn;be.parameters={...be.parameters,docs:{...(Kn=be.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Yn=(Xn=be.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var qn,Wn,Gn;xe.parameters={...xe.parameters,docs:{...(qn=xe.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Gn=(Wn=xe.parameters)==null?void 0:Wn.docs)==null?void 0:Gn.source}}};var Jn,Qn,Zn;ve.parameters={...ve.parameters,docs:{...(Jn=ve.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Zn=(Qn=ve.parameters)==null?void 0:Qn.docs)==null?void 0:Zn.source}}};var er,nr,rr;Re.parameters={...Re.parameters,docs:{...(er=Re.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
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
}`,...(rr=(nr=Re.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var ar,tr,sr;Ce.parameters={...Ce.parameters,docs:{...(ar=Ce.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Activity />
    }} />

      <RangeSlider>
        <RangeSliderStartThumb color="blue.500" boxSize="6">
          <Activity />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb color="blue.500" boxSize="6">
          <Activity />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(sr=(tr=Ce.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var or,lr,ir;fe.parameters={...fe.parameters,docs:{...(or=fe.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
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
}`,...(ir=(lr=fe.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};var ur,cr,dr;ke.parameters={...ke.parameters,docs:{...(ur=ke.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(dr=(cr=ke.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,gr,hr;je.parameters={...je.parameters,docs:{...(mr=je.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(hr=(gr=je.parameters)==null?void 0:gr.docs)==null?void 0:hr.source}}};var pr,Sr,br;Me.parameters={...Me.parameters,docs:{...(pr=Me.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(br=(Sr=Me.parameters)==null?void 0:Sr.docs)==null?void 0:br.source}}};var xr,vr,Rr;we.parameters={...we.parameters,docs:{...(xr=we.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(vr=we.parameters)==null?void 0:vr.docs)==null?void 0:Rr.source}}};const ft=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{ft as __namedExportsOrder,se as basic,Re as customColor,ke as customControl,fe as customMark,Ce as customThumb,Ct as default,be as isDisabled,ve as isInvalid,xe as isReadonly,Me as onChangeEnd,je as onChangeStart,we as reactHookForm,ge as withBetweenThumbs,ie as withColorScheme,oe as withDefaultValue,he as withFocusThumbOnChange,pe as withMark,de as withMinMax,ue as withOrientation,ce as withReversed,le as withSize,me as withStep,Se as withTooltip};
