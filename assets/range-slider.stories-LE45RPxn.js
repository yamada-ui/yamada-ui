import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as Ir}from"./index-Du0-7Fls.js";import{r as i}from"./index-BwDkhjyp.js";import{u as Br,C as _r}from"./index.esm-CMZNHfZV.js";import{j as Ar,c as Or}from"./components-BNnKaeK5.js";import{u as Nr}from"./index-DhlHQJq_.js";import{u as Hr,c as Lr,b as Ur}from"./index-CqJAT4P8.js";import{u as Kr,f as Xr,F as Ve}from"./form-control-DFW2rk8c.js";import{l as Yr,t as qr,w as Ue,a3 as an,a4 as Wr,a5 as Gr,b as X,c as re,T as Jr,k as tn,f as Qr,a as sn,s as Zr,d as Ke,h as Xe}from"./factory-EKX9DfWO.js";import{f as A}from"./forward-ref-BmTAT9U5.js";import{a as ea}from"./use-component-style-3J6UAnbr.js";import{o as na}from"./theme-provider-CuwCkym_.js";import{c as on,v as ln,r as ra,p as aa}from"./number-49BHn0Cl.js";import{A as Ye}from"./activity-Ces6JVS6.js";import{T as D}from"./text-COyfleYz.js";import{C as qe}from"./center-B5v8_KuH.js";import{F as un}from"./flex-CA-i6_9p.js";import{B as ee}from"./button-BdpTc5Vf.js";import{V as kr}from"./stack-D91i49_J.js";import{T as cn}from"./tooltip-B_ceceuy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BicLiV9m.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-k6nYHPLq.js";import"./index-CypbnVPG.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-HL8gAXwY.js";import"./index-BSWiOGL_.js";import"./Combination-CONbhR2A.js";import"./loading-CRwdCDw3.js";import"./icon-Bu5zyKtF.js";import"./index-UQAO-kLr.js";import"./motion-B_4DOUn5.js";import"./index-Ms_xn5rh.js";import"./container-portal-CECpxDWy.js";import"./index-DxjWwZXO.js";import"./notice-ClGFv-vs.js";import"./alert-BtG-t92n.js";import"./close-button-HuZkQ3Ew.js";import"./use-ripple-B2dghNjE.js";import"./container-VdeNhP8k.js";import"./box-n5Fo5JA2.js";import"./checkbox-Bbou0Mbc.js";import"./index-BpRvIbo0.js";import"./index-DzGRWxgB.js";import"./index-Bqz3rL1X.js";import"./select-Dg6wY2Nd.js";import"./option-Con4M0tj.js";import"./index-CG4JKEVD.js";import"./index-ByUNUozh.js";import"./popover-content-BOclz9bm.js";import"./index-BLx-LETd.js";import"./index-CMAEynL2.js";import"./index-XLuwk0SB.js";import"./index-4Gt8jg-E.js";import"./index-Dj6MDi8M.js";import"./slide-fade-BMyyzG7L.js";import"./utils-Bqd04Qt3.js";import"./scale-fade-C2yiJ92K.js";import"./index-DRG4LbkO.js";import"./event-imqIgfLG.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-BLOz-h_1.js";const ta=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,min:u=0,max:d=100,step:v=1,defaultValue:h,orientation:j="horizontal",thumbSize:V,isReversed:g,betweenThumbs:F=0,required:O,disabled:z,readOnly:N,value:ze,onChange:$e,onChangeStart:Ee,onChangeEnd:De,onFocus:ae,onBlur:te,"aria-readonly":H,"aria-valuetext":se,...Y}=Kr(s);const p=Jr(Y,Xr);if(h=h??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const Ie=tn(Ee),q=tn(De),[Be,L]=Nr({value:ze,defaultValue:h,onChange:$e}),[W,oe]=i.useState(!1),[wr,We]=i.useState(!1),[S,G]=i.useState(-1),_e=!(z||N),Ae=(d-u)/10,U=v||(d-u)/100,Ge=F*v,w=Be.map(r=>on(r,u,d)),[Je,Qe]=w,Tr=w.map(r=>d-r+u),I=(g?Tr:w).map(r=>ln(r,u,d)),yr=[{min:u,max:Qe-Ge},{min:Je+Ge,max:d}],x=j==="vertical",k=Hr({min:u,max:d,step:v,disabled:z,values:w,valueBounds:yr,isInteractive:_e,isReversed:g,isVertical:x,focusThumbOnChange:n,betweenThumbs:F,orientation:j}),Oe=i.useRef(null),le=i.useRef(null),Ne=i.useRef(null),B=Lr({getNodes:()=>{var t;const r=(t=le.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),m??(m=a);const J=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),He=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),Le=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ur(le,{onSessionStart:r=>{const{isInteractive:t,values:o}=k.current;if(!t)return;oe(!0);const c=Ze(r)||0,f=o.map(T=>Math.abs(T-c)),R=Math.min(...f);let C=f.indexOf(R);const M=f.filter(T=>T===R);M.length>1&&c>o[C]&&(C=C+M.length-1),G(C),y(C,c),en(C),Ie(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=k.current;r&&(oe(!1),q(t))},onMove:r=>{const{isInteractive:t}=k.current;if(!t||S==-1)return;const o=Ze(r)||0;G(S),y(S,o),en(S)}});const Ze=i.useCallback(r=>{var rn;if(!Ne.current)return;const{min:t,max:o}=k.current;Oe.current="pointer";const{bottom:c,left:f,height:R,width:C}=Ne.current.getBoundingClientRect(),{clientX:M,clientY:_}=((rn=r.touches)==null?void 0:rn[0])??r;let P=(x?c-_:M-f)/(x?R:C);return g&&(P=1-P),aa(P,t,o)},[k,x,g]),en=i.useCallback(r=>{var c;if(r??(r=S),r===-1||!n)return;const t=J(r),o=(c=le.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[S,n,J]),y=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:f}=k.current;if(!o)return;const{min:R,max:C}=c[r];t=parseFloat(ra(t,R,U)),t=on(t,R,C);const M=[...f];M[r]=t,L(M)},[k,U,L]),Q=i.useCallback((r,t=U)=>{const{values:o}=k.current,c=o[r];y(r,g?c-t:c+t)},[y,g,k,U]),Z=i.useCallback((r,t=U)=>{const{values:o}=k.current,c=o[r];y(r,g?c+t:c-t)},[y,g,k,U]),Pr=i.useCallback(()=>L(h),[h,L]),nn=i.useCallback(r=>{const{valueBounds:t}=k.current,{min:o,max:c}=t[S],R={ArrowRight:()=>Q(S),ArrowUp:()=>Q(S),ArrowLeft:()=>Z(S),ArrowDown:()=>Z(S),PageUp:()=>Q(S,Ae),PageDown:()=>Z(S,Ae),Home:()=>y(S,o),End:()=>y(S,c)}[r.key];R&&(r.preventDefault(),r.stopPropagation(),R(r),Oe.current="keyboard")},[S,y,k,Z,Q,Ae]);Qr(()=>{const{values:r}=k.current;Oe.current==="keyboard"&&q(r)},[Je,Qe,q]);const Vr=i.useCallback((r={},t=null)=>{let o="$thumbSize",c="$thumbSize";if(B.length){const C=x?"height":"width",M={width:0,height:0},{width:_,height:T}=B.reduce((K=M,P=M)=>K[C]>P[C]?K:P,M)??{};_&&(o=_),T&&(c=T)}const f=x?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingTop:`calc(${c} / 2)`,paddingBottom:`calc(${c} / 2)`},R={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...f};return{...Y,...r,id:`slider-container-${a}`,ref:sn(t,le),tabIndex:-1,style:R,var:[{name:"thumbSize",token:"sizes",value:V}]}},[a,x,Y,V,B]),Fr=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":H,...p,...t,ref:o,id:He(r),type:"hidden",name:Zr(m)?m[r]:`${m}-${r}`,value:w[r],required:O,disabled:z,readOnly:N}),[H,z,He,m,N,O,p,w]),zr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...p,...r,id:`slider-track-${a}`,ref:sn(t,Ne),style:o}},[a,x,p]),$r=i.useCallback((r={},t=null)=>{const o=Math.abs(I[1]-I[0]),c=g?100-I[0]:I[0],f={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...g?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...g?{right:`${c}%`}:{left:`${c}%`}}};return{...p,...r,id:`slider-filled-track-${a}`,ref:t,style:f}},[a,g,x,p,I]),Er=i.useCallback((r,t=null)=>{let o=ln(r.value,u,d);o=g?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...x?{bottom:`${o}%`}:{left:`${o}%`}};return{...p,...r,ref:t,id:Le(r.value),"aria-hidden":!0,"data-invalid":Ke(r.value<u||d<r.value),"data-highlighted":Ke(w[0]<=r.value&&r.value<=w[1]),style:c}},[Le,g,x,d,u,p,w]),Dr=i.useCallback(({index:r,...t},o=null)=>{var K,P;const c=I[r];let f="$thumbSize",R="$thumbSize";B[r]&&(f=`${(K=B[r])==null?void 0:K.width}px`,R=`${(P=B[r])==null?void 0:P.height}px`);const C=`calc(${c}% - (${R} / 2))`,M=`calc(${c}% - (${f} / 2))`,_={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...x?{bottom:C}:{left:M}},T=w[r];if(T==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":H,...p,...t,ref:o,id:J(r),tabIndex:_e&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":T,"data-active":Ke(W&&n&&S===r),"aria-orientation":j,"aria-valuetext":se??T.toString(),onKeyDown:Xe(t.onKeyDown,nn),onFocus:Xe(t.onFocus,ae,()=>{We(!0),G(r)}),onBlur:Xe(t.onBlur,te,()=>{We(!1),G(-1)}),style:_}},[I,B,x,w,H,p,J,_e,n,u,d,W,S,j,se,nn,ae,te]);return{values:w,isFocused:wr,isDragging:W,isVertical:x,stepUp:Q,stepDown:Z,reset:Pr,setActiveIndex:G,getThumbId:J,getInputId:He,getMarkerId:Le,getContainerProps:Vr,getInputProps:Fr,getTrackProps:zr,getFilledTrackProps:$r,getMarkProps:Er,getThumbProps:Dr}},[sa,Fe]=Yr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=A((n,s)=>{const[a,m]=ea("RangeSlider",n),{className:u,children:d,inputProps:v,trackProps:h,filledTrackProps:j,thumbProps:V,trackColor:g,filledTrackColor:F,trackSize:O,thumbColor:z,thumbSize:N,...ze}=na(m),{isVertical:$e,getContainerProps:Ee,getInputProps:De,getTrackProps:ae,getFilledTrackProps:te,getMarkProps:H,getThumbProps:se}=ta({...ze,thumbSize:Ar(N,a)}),Y={...a.container},p=qr(d),[Ie]=Ue(p,ne),[q]=Ue(p,$),[Be]=Ue(p,E),L=an(p,$),W=an(p,E),oe=Wr(p)?d:Gr(p,ne,$,E);return e.jsx(sa,{value:{isVertical:$e,getTrackProps:ae,getFilledTrackProps:te,getMarkProps:H,getThumbProps:se,getInputProps:De,trackProps:h,trackColor:g,trackSize:O,filledTrackProps:j,filledTrackColor:F,thumbProps:V,thumbColor:z,thumbSize:N,inputProps:v,styles:a},children:e.jsxs(X.div,{className:re("ui-slider",u),__css:Y,...Ee({},s),children:[Ie??e.jsx(ne,{}),oe,q??(L?null:e.jsx($,{})),Be??(W?null:e.jsx(E,{}))]})})}),ne=A(({className:n,children:s,filledTrackProps:a,...m},u)=>{const{styles:d,trackProps:v,trackColor:h,trackSize:j,isVertical:V,getTrackProps:g}=Fe(),F={...d.track};return e.jsx(X.div,{className:re("ui-slider__track",n),__css:F,...g({...h?{bg:h}:{},...j?V?{w:j}:{h:j}:{},...v,...m},u),children:s??e.jsx(jr,{...a})})}),jr=A(({className:n,...s},a)=>{const{styles:m,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:v}=Fe(),h={...m.filledTrack};return e.jsx(X.div,{className:re("ui-slider__track-filled",n),__css:h,...v({...d?{bg:d}:{},...u,...s},a)})}),b=A(({className:n,...s},a)=>{const{styles:m,getMarkProps:u}=Fe(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e.jsx(X.div,{className:re("ui-slider__mark",n),__css:d,...u(s,a)})}),Mr=A(({className:n,index:s,children:a,...m},u)=>{const{styles:d,thumbProps:v,thumbColor:h,thumbSize:j,inputProps:V,getThumbProps:g,getInputProps:F}=Fe(),O={...d.thumb},{children:z}=v??{};return e.jsxs(X.div,{className:re("ui-slider__thumb",n),__css:O,...g({index:s,...h?{bg:h}:{},...j?{boxSize:j}:{},...v,...m},u),children:[e.jsx(X.input,{...F({...V,index:s},u)}),a??z]})}),$=A((n,s)=>e.jsx(Mr,{ref:s,index:0,...n})),E=A((n,s)=>e.jsx(Mr,{ref:s,index:1,...n})),xt={title:"Components / Forms / RangeSlider",component:l},ie=()=>e.jsx(l,{}),ue=()=>e.jsx(l,{defaultValue:[10,90]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),de=()=>e.jsx(e.Fragment,{children:Or.map(n=>e.jsx(l,{colorScheme:n},n))}),me=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),he=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},pe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},Se=()=>e.jsx(l,{betweenThumbs:10}),be=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(qe,{w:"full",gap:"xl",children:[e.jsxs(un,{direction:"column",align:"center",gap:"sm",children:[e.jsx(D,{children:"Min"}),e.jsxs(qe,{gap:"md",children:[e.jsx(ee,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ee,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(un,{direction:"column",align:"center",gap:"sm",children:[e.jsx(D,{children:"Max"}),e.jsxs(qe,{gap:"md",children:[e.jsx(ee,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ee,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},xe=()=>e.jsxs(kr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),ve=()=>{const[n,s]=i.useState([25,75]),[a,{on:m,off:u}]=Ir(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:m,onMouseLeave:u,children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(cn,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx($,{})}),e.jsx(cn,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx(E,{})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Ve,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Ve,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),Ce=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Ve,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(ne,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx($,{bg:"blue.700"}),e.jsx(E,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(ne,{bg:"red.200",children:e.jsx(jr,{bg:"red.500"})}),e.jsx($,{bg:"red.700"}),e.jsx(E,{bg:"red.700"})]})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})}}),e.jsxs(l,{children:[e.jsx($,{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})}),e.jsx(E,{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})})]})]}),Me=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(b,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(b,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},we=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},Te=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},ye=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},Pe=()=>{var v;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:m,formState:{errors:u}}=Br({defaultValues:n}),d=h=>console.log("submit:",h);return console.log("watch:",m()),e.jsxs(kr,{as:"form",onSubmit:a(d),children:[e.jsx(Ve,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(v=u.rangeSlider)==null?void 0:v.message,children:e.jsx(_r,{name:"rangeSlider",control:s,render:({field:h})=>e.jsx(l,{...h})})}),e.jsx(ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var dn,mn,gn;ie.parameters={...ie.parameters,docs:{...(dn=ie.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(gn=(mn=ie.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,pn,Sn;ue.parameters={...ue.parameters,docs:{...(hn=ue.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(Sn=(pn=ue.parameters)==null?void 0:pn.docs)==null?void 0:Sn.source}}};var bn,xn,vn;ce.parameters={...ce.parameters,docs:{...(bn=ce.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(vn=(xn=ce.parameters)==null?void 0:xn.docs)==null?void 0:vn.source}}};var fn,Rn,Cn;de.parameters={...de.parameters,docs:{...(fn=de.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(Cn=(Rn=de.parameters)==null?void 0:Rn.docs)==null?void 0:Cn.source}}};var kn,jn,Mn;me.parameters={...me.parameters,docs:{...(kn=me.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Mn=(jn=me.parameters)==null?void 0:jn.docs)==null?void 0:Mn.source}}};var wn,Tn,yn;ge.parameters={...ge.parameters,docs:{...(wn=ge.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(yn=(Tn=ge.parameters)==null?void 0:Tn.docs)==null?void 0:yn.source}}};var Pn,Vn,Fn;he.parameters={...he.parameters,docs:{...(Pn=he.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(Fn=(Vn=he.parameters)==null?void 0:Vn.docs)==null?void 0:Fn.source}}};var zn,$n,En;pe.parameters={...pe.parameters,docs:{...(zn=pe.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(En=($n=pe.parameters)==null?void 0:$n.docs)==null?void 0:En.source}}};var Dn,In,Bn;Se.parameters={...Se.parameters,docs:{...(Dn=Se.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Bn=(In=Se.parameters)==null?void 0:In.docs)==null?void 0:Bn.source}}};var _n,An,On;be.parameters={...be.parameters,docs:{...(_n=be.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(On=(An=be.parameters)==null?void 0:An.docs)==null?void 0:On.source}}};var Nn,Hn,Ln;xe.parameters={...xe.parameters,docs:{...(Nn=xe.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(Hn=xe.parameters)==null?void 0:Hn.docs)==null?void 0:Ln.source}}};var Un,Kn,Xn;ve.parameters={...ve.parameters,docs:{...(Un=ve.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Kn=ve.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,qn,Wn;fe.parameters={...fe.parameters,docs:{...(Yn=fe.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Wn=(qn=fe.parameters)==null?void 0:qn.docs)==null?void 0:Wn.source}}};var Gn,Jn,Qn;Re.parameters={...Re.parameters,docs:{...(Gn=Re.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Qn=(Jn=Re.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,er,nr;Ce.parameters={...Ce.parameters,docs:{...(Zn=Ce.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(nr=(er=Ce.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;ke.parameters={...ke.parameters,docs:{...(rr=ke.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(tr=(ar=ke.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,or,lr;je.parameters={...je.parameters,docs:{...(sr=je.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
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
}`,...(lr=(or=je.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var ir,ur,cr;Me.parameters={...Me.parameters,docs:{...(ir=Me.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(cr=(ur=Me.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,gr;we.parameters={...we.parameters,docs:{...(dr=we.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(gr=(mr=we.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,pr,Sr;Te.parameters={...Te.parameters,docs:{...(hr=Te.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Sr=(pr=Te.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var br,xr,vr;ye.parameters={...ye.parameters,docs:{...(br=ye.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(vr=(xr=ye.parameters)==null?void 0:xr.docs)==null?void 0:vr.source}}};var fr,Rr,Cr;Pe.parameters={...Pe.parameters,docs:{...(fr=Pe.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(Rr=Pe.parameters)==null?void 0:Rr.docs)==null?void 0:Cr.source}}};const vt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{vt as __namedExportsOrder,ie as basic,ke as customColor,we as customControl,Me as customMark,je as customThumb,xt as default,fe as isDisabled,Ce as isInvalid,Re as isReadonly,ye as onChangeEnd,Te as onChangeStart,Pe as reactHookForm,Se as withBetweenThumbs,de as withColorScheme,ue as withDefaultValue,be as withFocusThumbOnChange,xe as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ce as withSize,pe as withStep,ve as withTooltip};
