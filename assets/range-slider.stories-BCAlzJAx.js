import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as He,n as Le}from"./icon-BQcQed63.js";import{u as Dr}from"./index-CBqzus2r.js";import{r as i}from"./index-uCp2LrAq.js";import{u as zr,C as $r}from"./index.esm-TLwx9zN6.js";import{c as Br}from"./components-CaA2IFLO.js";import{u as _r}from"./index-Dc2KQwVC.js";import{u as Or,c as Ar,b as Nr}from"./index-GzwDZ30x.js";import{u as qr,f as Hr,F as Te}from"./form-control-CXekA9Vm.js";import{l as Lr,t as Wr,x as We,a2 as rn,a3 as Ur,a4 as Kr,b as N,c as J,T as Xr,k as an,f as Yr,a as tn,s as Gr,d as Ue,h as Ke}from"./factory-Bf0a1C4O.js";import{f as B}from"./forward-ref-Dr5Hqd9a.js";import{a as Jr}from"./use-component-style-C1oydc60.js";import{o as Qr}from"./theme-provider-CfMKAtcZ.js";import{c as sn,v as on,r as Zr,p as ea}from"./number-49BHn0Cl.js";import{T as D}from"./text-BOhk0htq.js";import{C as Xe}from"./center-CSFPO4u1.js";import{F as ln}from"./flex-BWicnFVx.js";import{B as Y}from"./button-C5HSAH_Q.js";import{V as Cr}from"./stack-DeQ5YYY4.js";import{T as un}from"./tooltip-DUFiaKRG.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./index-CYZlXLuv.js";import"./index-DDmzt4a4.js";import"./_basePickBy-Bio_TAWW.js";import"./iframe-DVwPDITX.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-BWp85wBy.js";import"./index-kuq29Idc.js";import"./environment-provider-BhdF2tQ4.js";import"./motion-BNFRb361.js";import"./loading-provider-CtAcKjCW.js";import"./index-CAzj2Fxr.js";import"./Combination-nrDmEbEK.js";import"./loading-CD9zg-8p.js";import"./motion-Bi86PhT5.js";import"./index-DSHhgXSs.js";import"./container-portal--tud7o6s.js";import"./notice-CYOUCK2V.js";import"./alert-EQ9Vq4UV.js";import"./close-button-B2_55Hm9.js";import"./use-ripple-BZmEDmbU.js";import"./container-BHdAVcDB.js";import"./box-ANpItPfh.js";import"./index-BkEwqnoP.js";import"./index-Bh6_N6k1.js";import"./index-3VUv5hbS.js";import"./select-d9n7a2wp.js";import"./option-C98FFlvU.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./popover-content-DdSqGHqW.js";import"./index-DpNfAtp1.js";import"./index-BPmMvQRx.js";import"./index-DpYz45Vm.js";import"./index-CEbtGM79.js";import"./index-Bz6F23rc.js";import"./slide-fade-DX8q9FlF.js";import"./utils-BQuDdpot.js";import"./scale-fade-C4h3A9D_.js";import"./index-3uUm-2Os.js";import"./event-imqIgfLG.js";const na=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,min:u=0,max:d=100,step:f=1,defaultValue:h,orientation:k="horizontal",isReversed:g,betweenThumbs:y=0,required:V,disabled:F,readOnly:z,value:ye,onChange:Ve,onChangeStart:Fe,onChangeEnd:Ee,onFocus:Q,onBlur:Z,"aria-readonly":_,...q}=qr(s);const M=Xr(q,Hr);if(h=h??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const Ie=an(Fe),T=an(Ee),[De,O]=_r({value:ye,defaultValue:h,onChange:Ve}),[H,ee]=i.useState(!1),[ze,ne]=i.useState(!1),[p,L]=i.useState(-1),$e=!(F||z),Be=(d-u)/10,A=f||(d-u)/100,Ye=y*f,w=De.map(r=>sn(r,u,d)),[Ge,Je]=w,Mr=w.map(r=>d-r+u),$=(g?Mr:w).map(r=>on(r,u,d)),wr=[{min:u,max:Je-Ye},{min:Ge+Ye,max:d}],b=k==="vertical",R=Or({min:u,max:d,step:f,disabled:F,values:w,valueBounds:wr,isInteractive:$e,isReversed:g,isVertical:b,focusThumbOnChange:n,betweenThumbs:y,orientation:k}),_e=i.useRef(null),re=i.useRef(null),Oe=i.useRef(null),ae=Ar({getNodes:()=>{var t;const r=(t=re.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),m??(m=a);const W=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Ae=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),Ne=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Nr(re,{onSessionStart:r=>{const{isInteractive:t,values:o}=R.current;if(!t)return;ee(!0);const c=Qe(r)||0,x=o.map(te=>Math.abs(te-c)),v=Math.min(...x);let C=x.indexOf(v);const j=x.filter(te=>te===v);j.length>1&&c>o[C]&&(C=C+j.length-1),L(C),P(C,c),Ze(C),Ie(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=R.current;r&&(ee(!1),T(t))},onMove:r=>{const{isInteractive:t}=R.current;if(!t||p==-1)return;const o=Qe(r)||0;L(p),P(p,o),Ze(p)}});const Qe=i.useCallback(r=>{var nn;if(!Oe.current)return;const{min:t,max:o}=R.current;_e.current="pointer";const{bottom:c,left:x,height:v,width:C}=Oe.current.getBoundingClientRect(),{clientX:j,clientY:X}=((nn=r.touches)==null?void 0:nn[0])??r;let qe=(b?c-X:j-x)/(b?v:C);return g&&(qe=1-qe),ea(qe,t,o)},[R,b,g]),Ze=i.useCallback(r=>{var c;if(r??(r=p),r===-1||!n)return;const t=W(r),o=(c=re.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[p,n,W]),P=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:x}=R.current;if(!o)return;const{min:v,max:C}=c[r];t=parseFloat(Zr(t,v,A)),t=sn(t,v,C);const j=[...x];j[r]=t,O(j)},[R,A,O]),U=i.useCallback((r,t=A)=>{const{values:o}=R.current,c=o[r];P(r,g?c-t:c+t)},[P,g,R,A]),K=i.useCallback((r,t=A)=>{const{values:o}=R.current,c=o[r];P(r,g?c+t:c-t)},[P,g,R,A]),Tr=i.useCallback(()=>O(h),[h,O]),en=i.useCallback(r=>{const{valueBounds:t}=R.current,{min:o,max:c}=t[p],v={ArrowRight:()=>U(p),ArrowUp:()=>U(p),ArrowLeft:()=>K(p),ArrowDown:()=>K(p),PageUp:()=>U(p,Be),PageDown:()=>K(p,Be),Home:()=>P(p,o),End:()=>P(p,c)}[r.key];v&&(r.preventDefault(),r.stopPropagation(),v(r),_e.current="keyboard")},[p,P,R,K,U,Be]);Yr(()=>{const{values:r}=R.current;_e.current==="keyboard"&&T(r)},[Ge,Je,T]);const Pr=i.useCallback((r={},t=null)=>{const o={width:0,height:0},c=b?"height":"width",{width:x,height:v}=ae.reduce((j=o,X=o)=>j[c]>X[c]?j:X,o)??{},C={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...b?x?{paddingLeft:x/2,paddingRight:x/2}:{}:v?{paddingTop:v/2,paddingBottom:v/2}:{}};return{...q,...r,id:`slider-container-${a}`,ref:tn(t,re),tabIndex:-1,style:C}},[a,b,q,ae]),yr=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":_,...M,...t,ref:o,id:Ae(r),type:"hidden",name:Gr(m)?m[r]:`${m}-${r}`,value:w[r],required:V,disabled:F,readOnly:z}),[_,F,Ae,m,z,V,M,w]),Vr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${a}`,ref:tn(t,Oe),style:o}},[a,b,M]),Fr=i.useCallback((r={},t=null)=>{const o=Math.abs($[1]-$[0]),c=g?100-$[0]:$[0],x={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...g?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...g?{right:`${c}%`}:{left:`${c}%`}}};return{...M,...r,id:`slider-filled-track-${a}`,ref:t,style:x}},[a,g,b,M,$]),Er=i.useCallback((r,t=null)=>{let o=on(r.value,u,d);o=g?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...b?{bottom:`${o}%`}:{left:`${o}%`}};return{...M,...r,ref:t,id:Ne(r.value),"aria-hidden":!0,"data-invalid":Ue(r.value<u||d<r.value),"data-highlighted":Ue(w[0]<=r.value&&r.value<=w[1]),style:c}},[Ne,g,b,d,u,M,w]),Ir=i.useCallback(({index:r,...t},o=null)=>{const c=$[r],{width:x,height:v}=ae[r]??{width:0,height:0},C={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...b?{bottom:`calc(${c}% - ${v/2}px)`}:{left:`calc(${c}% - ${x/2}px)`}},j=w[r];if(j==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":_,...M,...t,ref:o,id:W(r),tabIndex:$e&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":j,"data-active":Ue(H&&n&&p===r),"aria-orientation":k,onKeyDown:Ke(t.onKeyDown,en),onFocus:Ke(t.onFocus,Q,()=>{ne(!0),L(r)}),onBlur:Ke(t.onBlur,Z,()=>{ne(!1),L(-1)}),style:C}},[$,ae,b,w,_,M,W,$e,n,u,d,H,p,k,en,Q,Z]);return{values:w,isFocused:ze,isDragging:H,isVertical:b,stepUp:U,stepDown:K,reset:Tr,setActiveIndex:L,getThumbId:W,getInputId:Ae,getMarkerId:Ne,getContainerProps:Pr,getInputProps:yr,getTrackProps:Vr,getFilledTrackProps:Fr,getMarkProps:Er,getThumbProps:Ir}},[ra,Pe]=Lr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=B((n,s)=>{const[a,m]=Jr("RangeSlider",n),{className:u,children:d,inputProps:f,trackProps:h,filledTrackProps:k,thumbProps:g,trackColor:y,filledTrackColor:V,trackSize:F,thumbColor:z,thumbSize:ye,...Ve}=Qr(m),{isVertical:Fe,getContainerProps:Ee,getInputProps:Q,getTrackProps:Z,getFilledTrackProps:_,getMarkProps:q,getThumbProps:M}=na(Ve),Ie={...a.container},T=Wr(d),[De]=We(T,G),[O]=We(T,E),[H]=We(T,I),ee=rn(T,E),ze=rn(T,I),ne=Ur(T)?d:Kr(T,G,E,I);return e.jsx(ra,{value:{isVertical:Fe,getTrackProps:Z,getFilledTrackProps:_,getMarkProps:q,getThumbProps:M,getInputProps:Q,trackProps:h,trackColor:y,trackSize:F,filledTrackProps:k,filledTrackColor:V,thumbProps:g,thumbColor:z,thumbSize:ye,inputProps:f,styles:a},children:e.jsxs(N.div,{className:J("ui-slider",u),__css:Ie,...Ee({},s),children:[De??e.jsx(G,{}),ne,O??(ee?null:e.jsx(E,{})),H??(ze?null:e.jsx(I,{}))]})})}),G=B(({className:n,children:s,filledTrackProps:a,...m},u)=>{const{styles:d,trackProps:f,trackColor:h,trackSize:k,isVertical:g,getTrackProps:y}=Pe(),V={...d.track};return e.jsx(N.div,{className:J("ui-slider__track",n),__css:V,...y({...h?{bg:h}:{},...k?g?{w:k}:{h:k}:{},...f,...m},u),children:s??e.jsx(kr,{...a})})}),kr=B(({className:n,...s},a)=>{const{styles:m,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:f}=Pe(),h={...m.filledTrack};return e.jsx(N.div,{className:J("ui-slider__track-filled",n),__css:h,...f({...d?{bg:d}:{},...u,...s},a)})}),S=B(({className:n,...s},a)=>{const{styles:m,getMarkProps:u}=Pe(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e.jsx(N.div,{className:J("ui-slider__mark",n),__css:d,...u(s,a)})}),jr=B(({className:n,index:s,children:a,...m},u)=>{const{styles:d,thumbProps:f,thumbColor:h,thumbSize:k,inputProps:g,getThumbProps:y,getInputProps:V}=Pe(),F={...d.thumb},{children:z}=f??{};return e.jsxs(N.div,{className:J("ui-slider__thumb",n),__css:F,...y({index:s,...h?{bg:h}:{},...k?{boxSize:k}:{},...f,...m},u),children:[e.jsx(N.input,{...V({...g,index:s},u)}),a??z]})}),E=B((n,s)=>e.jsx(jr,{ref:s,index:0,...n})),I=B((n,s)=>e.jsx(jr,{ref:s,index:1,...n})),Ct={title:"Components / Forms / RangeSlider",component:l},se=()=>e.jsx(l,{}),oe=()=>e.jsx(l,{defaultValue:[10,90]}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),ie=()=>e.jsx(e.Fragment,{children:Br.map(n=>e.jsx(l,{colorScheme:n},n))}),ue=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),de=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},me=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},ge=()=>e.jsx(l,{betweenThumbs:10}),he=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(Xe,{w:"full",gap:"xl",children:[e.jsxs(ln,{direction:"column",align:"center",gap:"sm",children:[e.jsx(D,{children:"Min"}),e.jsxs(Xe,{gap:"md",children:[e.jsx(Y,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(Y,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(ln,{direction:"column",align:"center",gap:"sm",children:[e.jsx(D,{children:"Max"}),e.jsxs(Xe,{gap:"md",children:[e.jsx(Y,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(Y,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},pe=()=>e.jsxs(Cr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Se=()=>{const[n,s]=i.useState([25,75]),[a,{on:m,off:u}]=Dr(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:m,onMouseLeave:u,children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(un,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx(E,{})}),e.jsx(un,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx(I,{})})]})},be=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Te,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Te,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),ve=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Te,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(G,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(E,{bg:"blue.700"}),e.jsx(I,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(G,{bg:"red.200",children:e.jsx(kr,{bg:"red.500"})}),e.jsx(E,{bg:"red.700"}),e.jsx(I,{bg:"red.700"})]})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(He,{icon:Le})}}),e.jsxs(l,{children:[e.jsx(E,{color:"blue.500",boxSize:"6",children:e.jsx(He,{icon:Le})}),e.jsx(I,{color:"blue.500",boxSize:"6",children:e.jsx(He,{icon:Le})})]})]}),Ce=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(S,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(S,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},ke=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},je=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Me=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},we=()=>{var f;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:m,formState:{errors:u}}=zr({defaultValues:n}),d=h=>console.log("submit:",h);return console.log("watch:",m()),e.jsxs(Cr,{as:"form",onSubmit:a(d),children:[e.jsx(Te,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(f=u.rangeSlider)==null?void 0:f.message,children:e.jsx($r,{name:"rangeSlider",control:s,render:({field:h})=>e.jsx(l,{...h})})}),e.jsx(Y,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var cn,dn,mn;se.parameters={...se.parameters,docs:{...(cn=se.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(mn=(dn=se.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var gn,hn,pn;oe.parameters={...oe.parameters,docs:{...(gn=oe.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(pn=(hn=oe.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var Sn,bn,xn;le.parameters={...le.parameters,docs:{...(Sn=le.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(xn=(bn=le.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var vn,fn,Rn;ie.parameters={...ie.parameters,docs:{...(vn=ie.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(Rn=(fn=ie.parameters)==null?void 0:fn.docs)==null?void 0:Rn.source}}};var Cn,kn,jn;ue.parameters={...ue.parameters,docs:{...(Cn=ue.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(jn=(kn=ue.parameters)==null?void 0:kn.docs)==null?void 0:jn.source}}};var Mn,wn,Tn;ce.parameters={...ce.parameters,docs:{...(Mn=ce.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(Tn=(wn=ce.parameters)==null?void 0:wn.docs)==null?void 0:Tn.source}}};var Pn,yn,Vn;de.parameters={...de.parameters,docs:{...(Pn=de.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(Vn=(yn=de.parameters)==null?void 0:yn.docs)==null?void 0:Vn.source}}};var Fn,En,In;me.parameters={...me.parameters,docs:{...(Fn=me.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(In=(En=me.parameters)==null?void 0:En.docs)==null?void 0:In.source}}};var Dn,zn,$n;ge.parameters={...ge.parameters,docs:{...(Dn=ge.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...($n=(zn=ge.parameters)==null?void 0:zn.docs)==null?void 0:$n.source}}};var Bn,_n,On;he.parameters={...he.parameters,docs:{...(Bn=he.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(On=(_n=he.parameters)==null?void 0:_n.docs)==null?void 0:On.source}}};var An,Nn,qn;pe.parameters={...pe.parameters,docs:{...(An=pe.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(qn=(Nn=pe.parameters)==null?void 0:Nn.docs)==null?void 0:qn.source}}};var Hn,Ln,Wn;Se.parameters={...Se.parameters,docs:{...(Hn=Se.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Ln=Se.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var Un,Kn,Xn;be.parameters={...be.parameters,docs:{...(Un=be.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Xn=(Kn=be.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,Gn,Jn;xe.parameters={...xe.parameters,docs:{...(Yn=xe.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Jn=(Gn=xe.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Zn,er;ve.parameters={...ve.parameters,docs:{...(Qn=ve.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(er=(Zn=ve.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;fe.parameters={...fe.parameters,docs:{...(nr=fe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(ar=(rr=fe.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,sr,or;Re.parameters={...Re.parameters,docs:{...(tr=Re.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(or=(sr=Re.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var lr,ir,ur;Ce.parameters={...Ce.parameters,docs:{...(lr=Ce.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
}`,...(ur=(ir=Ce.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;ke.parameters={...ke.parameters,docs:{...(cr=ke.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(mr=(dr=ke.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;je.parameters={...je.parameters,docs:{...(gr=je.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(pr=(hr=je.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,br,xr;Me.parameters={...Me.parameters,docs:{...(Sr=Me.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(xr=(br=Me.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var vr,fr,Rr;we.parameters={...we.parameters,docs:{...(vr=we.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(fr=we.parameters)==null?void 0:fr.docs)==null?void 0:Rr.source}}};const kt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{kt as __namedExportsOrder,se as basic,fe as customColor,ke as customControl,Ce as customMark,Re as customThumb,Ct as default,be as isDisabled,ve as isInvalid,xe as isReadonly,Me as onChangeEnd,je as onChangeStart,we as reactHookForm,ge as withBetweenThumbs,ie as withColorScheme,oe as withDefaultValue,he as withFocusThumbOnChange,pe as withMark,de as withMinMax,ue as withOrientation,ce as withReversed,le as withSize,me as withStep,Se as withTooltip};
