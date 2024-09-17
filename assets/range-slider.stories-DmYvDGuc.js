import{j as e}from"./extends-CwFRzn3r.js";import{u as Ir}from"./index-Du0-7Fls.js";import{r as i}from"./index-BwDkhjyp.js";import{u as Br,C as _r}from"./index.esm-DXPXqkjk.js";import{j as Ar,c as Or}from"./components-DSMJx3k5.js";import{u as Nr}from"./index-BaNhddRa.js";import{u as Hr,c as Lr,b as Ur}from"./index-B4Eu0jvp.js";import{u as Kr,f as Xr,F as $e}from"./form-control-wNB_sh9j.js";import{l as Yr,t as qr,w as Ue,a5 as an,a6 as Wr,a7 as Gr,b as U,c as ae,T as Jr,k as tn,f as Qr,a as sn,s as Zr,d as Ke,h as Xe}from"./factory-BjF4_dRw.js";import{f as _}from"./forward-ref-BWI-Phbn.js";import{a as ea}from"./use-component-style-DVO-iEPi.js";import{o as na}from"./theme-provider-CpaSpGZh.js";import{c as on,v as ln,r as ra,p as aa}from"./number-CcP_arM8.js";import{A as Ye}from"./activity-BrZCK6y4.js";import{T as E}from"./text-CpJ_XsDk.js";import{C as qe}from"./center-CgHKqMQH.js";import{F as un}from"./flex-uUFGZwrf.js";import{B as ne}from"./button-y-1VIkvD.js";import{V as kr}from"./stack-D4S-2JYT.js";import{T as cn}from"./tooltip-BqI1L0G9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BM_Ccg1d.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-Bsa2Wmgf.js";import"./index-MCBmKyEn.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./factory-COh1-7fC.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./container-B3-Ah45D.js";import"./box-B5FcoOR4.js";import"./checkbox-vlO53CvA.js";import"./index-WsJcG9Vu.js";import"./index-Dy1RW4Oq.js";import"./index-BAaRSIWS.js";import"./select-CmFZa2F9.js";import"./select-list-ClKoitK3.js";import"./index-BjUO4q1E.js";import"./index-DA9-26wc.js";import"./index-CWXuA_sE.js";import"./popover-content-qljWb4pK.js";import"./index-is6smmpS.js";import"./index-C53kKj3W.js";import"./index-DroqNDDt.js";import"./index-D-jN3opM.js";import"./index-BxBWkPyk.js";import"./slide-fade-Deo3lGhM.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";import"./event-wx3HPSqP.js";import"./lucide-icon-UlF0E1NS.js";const ta=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,min:u=0,max:d=100,step:v=1,defaultValue:h,orientation:j="horizontal",thumbSize:V,isReversed:g,betweenThumbs:F=0,value:K,onChange:X,onChangeStart:te,onChangeEnd:De,"aria-valuetext":se,...Y}=Kr(s);const{required:oe,disabled:A,readOnly:q,onFocus:le,onBlur:ie,"aria-readonly":O,...p}=Jr(Y,Xr);if(h=h??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const Ie=tn(te),W=tn(De),[Be,N]=Nr({value:K,defaultValue:h,onChange:X}),[G,ue]=i.useState(!1),[wr,We]=i.useState(!1),[S,J]=i.useState(-1),_e=!(A||q),Ae=(d-u)/10,H=v||(d-u)/100,Ge=F*v,w=Be.map(r=>on(r,u,d)),[Je,Qe]=w,Tr=w.map(r=>d-r+u),D=(g?Tr:w).map(r=>ln(r,u,d)),yr=[{min:u,max:Qe-Ge},{min:Je+Ge,max:d}],x=j==="vertical",k=Hr({min:u,max:d,step:v,disabled:A,values:w,valueBounds:yr,isInteractive:_e,isReversed:g,isVertical:x,focusThumbOnChange:n,betweenThumbs:F,orientation:j}),Oe=i.useRef(null),ce=i.useRef(null),Ne=i.useRef(null),I=Lr({getNodes:()=>{var t;const r=(t=ce.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),m??(m=a);const Q=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),He=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),Le=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ur(ce,{onSessionStart:r=>{const{isInteractive:t,values:o}=k.current;if(!t)return;ue(!0);const c=Ze(r)||0,f=o.map(T=>Math.abs(T-c)),R=Math.min(...f);let C=f.indexOf(R);const M=f.filter(T=>T===R);M.length>1&&c>o[C]&&(C=C+M.length-1),J(C),y(C,c),en(C),Ie(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=k.current;r&&(ue(!1),W(t))},onMove:r=>{const{isInteractive:t}=k.current;if(!t||S==-1)return;const o=Ze(r)||0;J(S),y(S,o),en(S)}});const Ze=i.useCallback(r=>{var rn;if(!Ne.current)return;const{min:t,max:o}=k.current;Oe.current="pointer";const{bottom:c,left:f,height:R,width:C}=Ne.current.getBoundingClientRect(),{clientX:M,clientY:B}=((rn=r.touches)==null?void 0:rn[0])??r;let P=(x?c-B:M-f)/(x?R:C);return g&&(P=1-P),aa(P,t,o)},[k,x,g]),en=i.useCallback(r=>{var c;if(r??(r=S),r===-1||!n)return;const t=Q(r),o=(c=ce.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[S,n,Q]),y=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:f}=k.current;if(!o)return;const{min:R,max:C}=c[r];t=parseFloat(ra(t,R,H)),t=on(t,R,C);const M=[...f];M[r]=t,N(M)},[k,H,N]),Z=i.useCallback((r,t=H)=>{const{values:o}=k.current,c=o[r];y(r,g?c-t:c+t)},[y,g,k,H]),ee=i.useCallback((r,t=H)=>{const{values:o}=k.current,c=o[r];y(r,g?c+t:c-t)},[y,g,k,H]),Pr=i.useCallback(()=>N(h),[h,N]),nn=i.useCallback(r=>{const{valueBounds:t}=k.current,{min:o,max:c}=t[S],R={ArrowRight:()=>Z(S),ArrowUp:()=>Z(S),ArrowLeft:()=>ee(S),ArrowDown:()=>ee(S),PageUp:()=>Z(S,Ae),PageDown:()=>ee(S,Ae),Home:()=>y(S,o),End:()=>y(S,c)}[r.key];R&&(r.preventDefault(),r.stopPropagation(),R(r),Oe.current="keyboard")},[S,y,k,ee,Z,Ae]);Qr(()=>{const{values:r}=k.current;Oe.current==="keyboard"&&W(r)},[Je,Qe,W]);const Vr=i.useCallback((r={},t=null)=>{let o="$thumbSize",c="$thumbSize";if(I.length){const C=x?"height":"width",M={width:0,height:0},{width:B,height:T}=I.reduce((L=M,P=M)=>L[C]>P[C]?L:P,M)??{};B&&(o=B),T&&(c=T)}const f=x?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingTop:`calc(${c} / 2)`,paddingBottom:`calc(${c} / 2)`},R={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...f};return{...Y,...r,id:`slider-container-${a}`,ref:sn(t,ce),tabIndex:-1,style:R,vars:[{name:"thumbSize",token:"sizes",value:V}]}},[a,x,Y,V,I]),Fr=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":O,...p,...t,ref:o,id:He(r),type:"hidden",name:Zr(m)?m[r]:`${m}-${r}`,value:w[r],required:oe,disabled:A,readOnly:q}),[O,A,He,m,q,oe,p,w]),zr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...p,...r,id:`slider-track-${a}`,ref:sn(t,Ne),style:o}},[a,x,p]),$r=i.useCallback((r={},t=null)=>{const o=Math.abs(D[1]-D[0]),c=g?100-D[0]:D[0],f={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...g?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...g?{right:`${c}%`}:{left:`${c}%`}}};return{...p,...r,id:`slider-filled-track-${a}`,ref:t,style:f}},[a,g,x,p,D]),Er=i.useCallback((r,t=null)=>{let o=ln(r.value,u,d);o=g?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...x?{bottom:`${o}%`}:{left:`${o}%`}};return{...p,...r,ref:t,id:Le(r.value),"aria-hidden":!0,"data-invalid":Ke(r.value<u||d<r.value),"data-highlighted":Ke(w[0]<=r.value&&r.value<=w[1]),style:c}},[Le,g,x,d,u,p,w]),Dr=i.useCallback(({index:r,...t},o=null)=>{var L,P;const c=D[r];let f="$thumbSize",R="$thumbSize";I[r]&&(f=`${(L=I[r])==null?void 0:L.width}px`,R=`${(P=I[r])==null?void 0:P.height}px`);const C=`calc(${c}% - (${R} / 2))`,M=`calc(${c}% - (${f} / 2))`,B={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...x?{bottom:C}:{left:M}},T=w[r];if(T==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":O,...p,...t,ref:o,id:Q(r),tabIndex:_e&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":T,"data-active":Ke(G&&n&&S===r),"aria-orientation":j,"aria-valuetext":se??T.toString(),onKeyDown:Xe(t.onKeyDown,nn),onFocus:Xe(t.onFocus,le,()=>{We(!0),J(r)}),onBlur:Xe(t.onBlur,ie,()=>{We(!1),J(-1)}),style:B}},[D,I,x,w,O,p,Q,_e,n,u,d,G,S,j,se,nn,le,ie]);return{values:w,isFocused:wr,isDragging:G,isVertical:x,stepUp:Z,stepDown:ee,reset:Pr,setActiveIndex:J,getThumbId:Q,getInputId:He,getMarkerId:Le,getContainerProps:Vr,getInputProps:Fr,getTrackProps:zr,getFilledTrackProps:$r,getMarkProps:Er,getThumbProps:Dr}},[sa,Ee]=Yr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=_((n,s)=>{const[a,m]=ea("RangeSlider",n),{className:u,children:d,inputProps:v,trackProps:h,filledTrackProps:j,thumbProps:V,trackColor:g,filledTrackColor:F,trackSize:K,thumbColor:X,thumbSize:te,...De}=na(m),{isVertical:se,getContainerProps:Y,getInputProps:oe,getTrackProps:A,getFilledTrackProps:q,getMarkProps:le,getThumbProps:ie}=ta({...De,thumbSize:Ar(te,a)}),O={...a.container},p=qr(d),[Ie]=Ue(p,re),[W]=Ue(p,z),[Be]=Ue(p,$),N=an(p,z),G=an(p,$),ue=Wr(p)?d:Gr(p,re,z,$);return e.jsx(sa,{value:{isVertical:se,getTrackProps:A,getFilledTrackProps:q,getMarkProps:le,getThumbProps:ie,getInputProps:oe,trackProps:h,trackColor:g,trackSize:K,filledTrackProps:j,filledTrackColor:F,thumbProps:V,thumbColor:X,thumbSize:te,inputProps:v,styles:a},children:e.jsxs(U.div,{className:ae("ui-slider",u),__css:O,...Y({},s),children:[Ie??e.jsx(re,{}),ue,W??(N?null:e.jsx(z,{})),Be??(G?null:e.jsx($,{}))]})})}),re=_(({className:n,children:s,filledTrackProps:a,...m},u)=>{const{styles:d,trackProps:v,trackColor:h,trackSize:j,isVertical:V,getTrackProps:g}=Ee(),F={...d.track};return e.jsx(U.div,{className:ae("ui-slider__track",n),__css:F,...g({...h?{bg:h}:{},...j?V?{w:j}:{h:j}:{},...v,...m},u),children:s??e.jsx(jr,{...a})})}),jr=_(({className:n,...s},a)=>{const{styles:m,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:v}=Ee(),h={...m.filledTrack};return e.jsx(U.div,{className:ae("ui-slider__track-filled",n),__css:h,...v({...d?{bg:d}:{},...u,...s},a)})}),b=_(({className:n,...s},a)=>{const{styles:m,getMarkProps:u}=Ee(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e.jsx(U.div,{className:ae("ui-slider__mark",n),__css:d,...u(s,a)})}),Mr=_(({className:n,index:s,children:a,...m},u)=>{const{styles:d,thumbProps:v,thumbColor:h,thumbSize:j,inputProps:V,getThumbProps:g,getInputProps:F}=Ee(),K={...d.thumb},{children:X}=v??{};return e.jsxs(U.div,{className:ae("ui-slider__thumb",n),__css:K,...g({index:s,...h?{bg:h}:{},...j?{boxSize:j}:{},...v,...m},u),children:[e.jsx(U.input,{...F({...V,index:s},u)}),a??X]})}),z=_((n,s)=>e.jsx(Mr,{ref:s,index:0,...n})),$=_((n,s)=>e.jsx(Mr,{ref:s,index:1,...n})),bt={title:"Components / Forms / RangeSlider",component:l},de=()=>e.jsx(l,{}),me=()=>e.jsx(l,{defaultValue:[10,90]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),he=()=>e.jsx(e.Fragment,{children:Or.map(n=>e.jsx(l,{colorScheme:n},n))}),pe=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),Se=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),be=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},xe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},ve=()=>e.jsx(l,{betweenThumbs:10}),fe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(qe,{w:"full",gap:"xl",children:[e.jsxs(un,{direction:"column",align:"center",gap:"sm",children:[e.jsx(E,{children:"Min"}),e.jsxs(qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(un,{direction:"column",align:"center",gap:"sm",children:[e.jsx(E,{children:"Max"}),e.jsxs(qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},Re=()=>e.jsxs(kr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Ce=()=>{const[n,s]=i.useState([25,75]),[a,{on:m,off:u}]=Ir(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:m,onMouseLeave:u,children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(cn,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx(z,{})}),e.jsx(cn,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx($,{})})]})},ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx($e,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx($e,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),Me=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx($e,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},we=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(re,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(z,{bg:"blue.700"}),e.jsx($,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(re,{bg:"red.200",children:e.jsx(jr,{bg:"red.500"})}),e.jsx(z,{bg:"red.700"}),e.jsx($,{bg:"red.700"})]})]}),Te=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})}}),e.jsxs(l,{children:[e.jsx(z,{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})}),e.jsx($,{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})})]})]}),ye=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(b,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(b,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(b,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(b,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(b,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},Pe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},Ve=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Fe=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},ze=()=>{var v;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:m,formState:{errors:u}}=Br({defaultValues:n}),d=h=>console.log("submit:",h);return console.log("watch:",m()),e.jsxs(kr,{as:"form",onSubmit:a(d),children:[e.jsx($e,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(v=u.rangeSlider)==null?void 0:v.message,children:e.jsx(_r,{name:"rangeSlider",control:s,render:({field:h})=>e.jsx(l,{...h})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var dn,mn,gn;de.parameters={...de.parameters,docs:{...(dn=de.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(gn=(mn=de.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,pn,Sn;me.parameters={...me.parameters,docs:{...(hn=me.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(Sn=(pn=me.parameters)==null?void 0:pn.docs)==null?void 0:Sn.source}}};var bn,xn,vn;ge.parameters={...ge.parameters,docs:{...(bn=ge.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(vn=(xn=ge.parameters)==null?void 0:xn.docs)==null?void 0:vn.source}}};var fn,Rn,Cn;he.parameters={...he.parameters,docs:{...(fn=he.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(Cn=(Rn=he.parameters)==null?void 0:Rn.docs)==null?void 0:Cn.source}}};var kn,jn,Mn;pe.parameters={...pe.parameters,docs:{...(kn=pe.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Mn=(jn=pe.parameters)==null?void 0:jn.docs)==null?void 0:Mn.source}}};var wn,Tn,yn;Se.parameters={...Se.parameters,docs:{...(wn=Se.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(yn=(Tn=Se.parameters)==null?void 0:Tn.docs)==null?void 0:yn.source}}};var Pn,Vn,Fn;be.parameters={...be.parameters,docs:{...(Pn=be.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(Fn=(Vn=be.parameters)==null?void 0:Vn.docs)==null?void 0:Fn.source}}};var zn,$n,En;xe.parameters={...xe.parameters,docs:{...(zn=xe.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(En=($n=xe.parameters)==null?void 0:$n.docs)==null?void 0:En.source}}};var Dn,In,Bn;ve.parameters={...ve.parameters,docs:{...(Dn=ve.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Bn=(In=ve.parameters)==null?void 0:In.docs)==null?void 0:Bn.source}}};var _n,An,On;fe.parameters={...fe.parameters,docs:{...(_n=fe.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(On=(An=fe.parameters)==null?void 0:An.docs)==null?void 0:On.source}}};var Nn,Hn,Ln;Re.parameters={...Re.parameters,docs:{...(Nn=Re.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(Hn=Re.parameters)==null?void 0:Hn.docs)==null?void 0:Ln.source}}};var Un,Kn,Xn;Ce.parameters={...Ce.parameters,docs:{...(Un=Ce.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Kn=Ce.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,qn,Wn;ke.parameters={...ke.parameters,docs:{...(Yn=ke.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Wn=(qn=ke.parameters)==null?void 0:qn.docs)==null?void 0:Wn.source}}};var Gn,Jn,Qn;je.parameters={...je.parameters,docs:{...(Gn=je.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Qn=(Jn=je.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Zn,er,nr;Me.parameters={...Me.parameters,docs:{...(Zn=Me.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(nr=(er=Me.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;we.parameters={...we.parameters,docs:{...(rr=we.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(tr=(ar=we.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,or,lr;Te.parameters={...Te.parameters,docs:{...(sr=Te.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
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
}`,...(lr=(or=Te.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var ir,ur,cr;ye.parameters={...ye.parameters,docs:{...(ir=ye.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(cr=(ur=ye.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,gr;Pe.parameters={...Pe.parameters,docs:{...(dr=Pe.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(gr=(mr=Pe.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,pr,Sr;Ve.parameters={...Ve.parameters,docs:{...(hr=Ve.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Sr=(pr=Ve.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var br,xr,vr;Fe.parameters={...Fe.parameters,docs:{...(br=Fe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(vr=(xr=Fe.parameters)==null?void 0:xr.docs)==null?void 0:vr.source}}};var fr,Rr,Cr;ze.parameters={...ze.parameters,docs:{...(fr=ze.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  interface Data {
    rangeSlider: [number, number];
  }
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
}`,...(Cr=(Rr=ze.parameters)==null?void 0:Rr.docs)==null?void 0:Cr.source}}};const xt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{xt as __namedExportsOrder,de as basic,we as customColor,Pe as customControl,ye as customMark,Te as customThumb,bt as default,ke as isDisabled,Me as isInvalid,je as isReadonly,Fe as onChangeEnd,Ve as onChangeStart,ze as reactHookForm,ve as withBetweenThumbs,he as withColorScheme,me as withDefaultValue,fe as withFocusThumbOnChange,Re as withMark,be as withMinMax,pe as withOrientation,Se as withReversed,ge as withSize,xe as withStep,Ce as withTooltip};
