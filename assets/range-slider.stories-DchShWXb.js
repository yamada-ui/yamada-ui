import{j as e}from"./extends-CwFRzn3r.js";import{u as Ir}from"./index-CoJrGj-T.js";import{r as i}from"./index-BwDkhjyp.js";import{u as Br,C as Ar}from"./index.esm-DXPXqkjk.js";import{j as Nr,c as Or}from"./components-BiyJEhgw.js";import{u as Hr}from"./index-DK-MzzHQ.js";import{u as Lr,c as Ur,b as qr}from"./index-C365_6Ad.js";import{u as Kr,f as Xr,F as Fe}from"./form-control-CExpHBXs.js";import{o as Yr,p as Wr,q as Ke,a7 as sn,a8 as Gr,a9 as Jr,b as K,c as ae,W as Qr,k as on,f as Zr,a as ln,F as ea,d as Xe,h as Ye}from"./factory-CTJ-ITwV.js";import{f as A}from"./forward-ref-BWI-Phbn.js";import{a as na}from"./use-component-style-_O1yHJxH.js";import{o as ra}from"./theme-provider-gLqcKpHk.js";import{c as un,v as cn,r as aa,p as ta}from"./number-CcP_arM8.js";import{A as We}from"./activity-D9W0ru6p.js";import{T as E}from"./text-BDycaLk7.js";import{C as Ge}from"./center-Be-BS5k4.js";import{F as dn}from"./flex-bsZaxQ-D.js";import{B as re}from"./button-DejEDEJ2.js";import{V as Mr}from"./stack-l5SyeKEk.js";import{T as mn}from"./tooltip-yq5-CPkf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-NtBqJrwW.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-DA9XzaWW.js";import"./index-D1qVlYM2.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-B2gpaJ8H.js";import"./index-Cs40PXXW.js";import"./Combination-IUp2vs9T.js";import"./loading-BNHDbHrX.js";import"./icon-DlOX_f12.js";import"./use-var-Cgd0M5xr.js";import"./factory-CmtZP4aZ.js";import"./portal-C-ggyOLy.js";import"./index-Drt3gf4w.js";import"./notice-0psAcPcU.js";import"./alert-ojwZhqaY.js";import"./close-button-IT3vRp6I.js";import"./use-ripple-MSZSdTJh.js";import"./container-Cbmp5Bbm.js";import"./box-n4vRcf5j.js";import"./checkbox-zxFoXBJ5.js";import"./index-CmRh8_hi.js";import"./index-W7lu5wp_.js";import"./index-BAaRSIWS.js";import"./select-Cne2P-W4.js";import"./select-list-CGiiHoiU.js";import"./index-Cu2YeAMN.js";import"./index-BzKTRvGl.js";import"./index-CL25N26u.js";import"./popover-trigger-B7hqUX_i.js";import"./slide-fade-BE8CIutX.js";import"./index-cjYO0JtJ.js";import"./index-DHWdzpiJ.js";import"./forward-ref-scR1bmHx.js";import"./utils-CgaDd4SB.js";import"./scale-fade-B7KN2sk_.js";import"./index-Dl4-Ephs.js";import"./index-BD59kUnL.js";import"./index-C0-OrHt9.js";import"./event-C_48urmU.js";import"./lucide-icon-C1V1MxGy.js";const sa=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,"aria-valuetext":b,betweenThumbs:f=0,defaultValue:x,isReversed:c,max:d=100,min:g=0,orientation:y="horizontal",step:P=1,thumbSize:N,value:X,onChange:$e,onChangeEnd:De,onChangeStart:Ie,...Y}=Kr(s);const{"aria-readonly":O,disabled:H,readOnly:W,required:te,onBlur:se,onFocus:oe,...p}=Qr(Y,Xr);if(x=x??[g+(d-g)/4,d-(d-g)/4],d<g)throw new Error("Do not assign a number less than 'min' to 'max'");const Be=on(Ie),G=on(De),[Ae,L]=Hr({defaultValue:x,value:X,onChange:$e}),[J,le]=i.useState(!1),[wr,Je]=i.useState(!1),[S,Q]=i.useState(-1),Ne=!(H||W),Oe=(d-g)/10,U=P||(d-g)/100,Qe=f*P,w=Ae.map(r=>un(r,g,d)),[Ze,en]=w,Tr=w.map(r=>d-r+g),$=(c?Tr:w).map(r=>cn(r,g,d)),yr=[{max:en-Qe,min:g},{max:d,min:Ze+Qe}],v=y==="vertical",k=Lr({betweenThumbs:f,disabled:H,focusThumbOnChange:n,isInteractive:Ne,isReversed:c,isVertical:v,max:d,min:g,orientation:y,step:P,valueBounds:yr,values:w}),He=i.useRef(null),ie=i.useRef(null),Le=i.useRef(null),D=Ur({getNodes:()=>{var t;const r=(t=ie.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}}),Pr=i.useId();a??(a=Pr),m??(m=a);const Z=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Ue=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),qe=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);qr(ie,{onMove:r=>{const{isInteractive:t}=k.current;if(!t||S==-1)return;const o=nn(r)||0;Q(S),_(S,o),rn(S)},onSessionEnd:()=>{const{isInteractive:r,values:t}=k.current;r&&(le(!1),G(t))},onSessionStart:r=>{const{isInteractive:t,values:o}=k.current;if(!t)return;le(!0);const u=nn(r)||0,C=o.map(T=>Math.abs(T-u)),j=Math.min(...C);let R=C.indexOf(j);const M=C.filter(T=>T===j);M.length>1&&u>o[R]&&(R=R+M.length-1),Q(R),_(R,u),rn(R),Be(o)}});const nn=i.useCallback(r=>{var tn;if(!Le.current)return;const{max:t,min:o}=k.current;He.current="pointer";const{bottom:u,height:C,left:j,width:R}=Le.current.getBoundingClientRect(),{clientX:M,clientY:I}=((tn=r.touches)==null?void 0:tn[0])??r;let z=(v?u-I:M-j)/(v?C:R);return c&&(z=1-z),ta(z,o,t)},[k,v,c]),rn=i.useCallback(r=>{var u;if(r??(r=S),r===-1||!n)return;const t=Z(r),o=(u=ie.current)==null?void 0:u.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[S,n,Z]),_=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:u,values:C}=k.current;if(!o)return;const{max:j=100,min:R=0}=u[r]??{};t=parseFloat(aa(t,R,U)),t=un(t,R,j);const M=[...C];M[r]=t,L(M)},[k,U,L]),ee=i.useCallback((r,t=U)=>{const{values:o}=k.current,u=o[r];_(r,c?u-t:u+t)},[_,c,k,U]),ne=i.useCallback((r,t=U)=>{const{values:o}=k.current,u=o[r];_(r,c?u+t:u-t)},[_,c,k,U]),Vr=i.useCallback(()=>L(x),[x,L]),an=i.useCallback(r=>{const{valueBounds:t}=k.current,{max:o=100,min:u=0}=t[S]??{},j={ArrowDown:()=>ne(S),ArrowLeft:()=>ne(S),ArrowRight:()=>ee(S),ArrowUp:()=>ee(S),End:()=>_(S,o),Home:()=>_(S,u),PageDown:()=>ne(S,Oe),PageUp:()=>ee(S,Oe)}[r.key];j&&(r.preventDefault(),r.stopPropagation(),j(r),He.current="keyboard")},[S,_,k,ne,ee,Oe]);Zr(()=>{const{values:r}=k.current;He.current==="keyboard"&&G(r)},[Ze,en,G]);const Fr=i.useCallback((r={},t=null)=>{let o="$thumbSize",u="$thumbSize";if(D.length){const R=v?"height":"width",M={height:0,width:0},{height:I,width:T}=D.reduce((q=M,z=M)=>q[R]>z[R]?q:z,M)??{};T&&(o=T),I&&(u=I)}const C=v?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingBottom:`calc(${u} / 2)`,paddingTop:`calc(${u} / 2)`},j={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...C};return{...Y,...r,id:`slider-container-${a}`,ref:ln(t,ie),style:j,tabIndex:-1,vars:[{name:"thumbSize",token:"sizes",value:N}]}},[a,v,Y,N,D]),_r=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":O,...p,...t,id:Ue(r),ref:o,type:"hidden",name:ea(m)?m[r]:`${m}-${r}`,disabled:H,readOnly:W,required:te,value:w[r]}),[O,H,Ue,m,W,te,p,w]),zr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...v?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...p,...r,id:`slider-track-${a}`,ref:ln(t,Le),style:o}},[a,v,p]),Er=i.useCallback((r={},t=null)=>{const o=Math.abs($[1]-$[0]),u=c?100-$[0]:$[0],C={...r.style,position:"absolute",...v?{height:`${o}%`,left:"50%",transform:"translateX(-50%)",...c?{top:`${u}%`}:{bottom:`${u}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...c?{right:`${u}%`}:{left:`${u}%`}}};return{...p,...r,id:`slider-filled-track-${a}`,ref:t,style:C}},[a,c,v,p,$]),$r=i.useCallback((r,t=null)=>{let o=cn(r.value,g,d);o=c?100-o:o;const u={...r.style,pointerEvents:"none",position:"absolute",...v?{bottom:`${o}%`}:{left:`${o}%`}};return{...p,...r,id:qe(r.value),ref:t,style:u,"aria-hidden":!0,"data-highlighted":Xe(w[0]<=r.value&&r.value<=w[1]),"data-invalid":Xe(r.value<g||d<r.value)}},[qe,c,v,d,g,p,w]),Dr=i.useCallback(({index:r,...t},o=null)=>{var q,z;const u=$[r];let C="$thumbSize",j="$thumbSize";D[r]&&(C=`${(q=D[r])==null?void 0:q.width}px`,j=`${(z=D[r])==null?void 0:z.height}px`);const R=`calc(${u}% - (${j} / 2))`,M=`calc(${u}% - (${C} / 2))`,I={...t.style,position:"absolute",touchAction:"none",userSelect:"none",...v?{bottom:R}:{left:M}},T=w[r];if(T==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":O,...p,...t,id:Z(r),ref:o,style:I,"aria-orientation":y,"aria-valuemax":d,"aria-valuemin":g,"aria-valuenow":T,"aria-valuetext":b??T.toString(),"data-active":Xe(J&&n&&S===r),role:"slider",tabIndex:Ne&&n?0:void 0,onBlur:Ye(t.onBlur,se,()=>{Je(!1),Q(-1)}),onFocus:Ye(t.onFocus,oe,()=>{Je(!0),Q(r)}),onKeyDown:Ye(t.onKeyDown,an)}},[$,D,v,w,O,p,Z,Ne,n,g,d,J,S,y,b,an,oe,se]);return{getInputId:Ue,getMarkerId:qe,getThumbId:Z,isDragging:J,isFocused:wr,isVertical:v,reset:Vr,setActiveIndex:Q,stepDown:ne,stepUp:ee,values:w,getContainerProps:Fr,getFilledTrackProps:Er,getInputProps:_r,getMarkProps:$r,getThumbProps:Dr,getTrackProps:zr}},[oa,_e]=Yr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=A((n,s)=>{const[a,m]=na("RangeSlider",n),{className:b,children:f,filledTrackColor:x,thumbColor:c,thumbSize:d,trackColor:g,trackSize:y,filledTrackProps:P,inputProps:N,thumbProps:X,trackProps:$e,...De}=ra(m),{isVertical:Ie,getContainerProps:Y,getFilledTrackProps:O,getInputProps:H,getMarkProps:W,getThumbProps:te,getTrackProps:se}=sa({...De,thumbSize:Nr(d,a)}),oe={...a.container},p=Wr(f),Be=Ke(p,B),G=Ke(p,V),Ae=Ke(p,F),L=sn(p,V),J=sn(p,F),le=Gr(p)?f:Jr(p,B,V,F);return e.jsx(oa,{value:{filledTrackColor:x,isVertical:Ie,styles:a,thumbColor:c,thumbSize:d,trackColor:g,trackSize:y,filledTrackProps:P,getFilledTrackProps:O,getInputProps:H,getMarkProps:W,getThumbProps:te,getTrackProps:se,inputProps:N,thumbProps:X,trackProps:$e},children:e.jsxs(K.div,{className:ae("ui-slider",b),__css:oe,...Y({},s),children:[Be??e.jsx(B,{}),le,G??(L?null:e.jsx(V,{})),Ae??(J?null:e.jsx(F,{}))]})})});l.displayName="RangeSlider";l.__ui__="RangeSlider";const B=A(({className:n,children:s,filledTrackProps:a,...m},b)=>{const{isVertical:f,styles:x,trackColor:c,trackSize:d,getTrackProps:g,trackProps:y}=_e(),P={...x.track};return e.jsx(K.div,{className:ae("ui-slider__track",n),__css:P,...g({...c?{bg:c}:{},...d?f?{w:d}:{h:d}:{},...y,...m},b),children:s??e.jsx(ze,{...a})})});B.displayName="RangeSliderTrack";B.__ui__="RangeSliderTrack";const ze=A(({className:n,...s},a)=>{const{filledTrackColor:m,styles:b,filledTrackProps:f,getFilledTrackProps:x}=_e(),c={...b.filledTrack};return e.jsx(K.div,{className:ae("ui-slider__track-filled",n),__css:c,...x({...m?{bg:m}:{},...f,...s},a)})});ze.displayName="RangeSliderFilledTrack";ze.__ui__="RangeSliderFilledTrack";const h=A(({className:n,...s},a)=>{const{styles:m,getMarkProps:b}=_e(),f={alignItems:"center",display:"inline-flex",justifyContent:"center",...m.mark};return e.jsx(K.div,{className:ae("ui-slider__mark",n),__css:f,...b(s,a)})});h.displayName="RangeSliderMark";h.__ui__="RangeSliderMark";const Ee=A(({className:n,children:s,index:a,...m},b)=>{const{styles:f,thumbColor:x,thumbSize:c,getInputProps:d,getThumbProps:g,inputProps:y,thumbProps:P}=_e(),N={...f.thumb},{children:X}=P??{};return e.jsxs(K.div,{className:ae("ui-slider__thumb",n),__css:N,...g({index:a,...x?{bg:x}:{},...c?{boxSize:c}:{},...P,...m},b),children:[e.jsx(K.input,{...d({...y,index:a},b)}),s??X]})});Ee.displayName="RangeSliderThumb";Ee.__ui__="RangeSliderThumb";const V=A((n,s)=>e.jsx(Ee,{ref:s,index:0,...n}));V.displayName="RangeSliderStartThumb";V.__ui__="RangeSliderStartThumb";const F=A((n,s)=>e.jsx(Ee,{ref:s,index:1,...n}));F.displayName="RangeSliderEndThumb";F.__ui__="RangeSliderEndThumb";const xt={component:l,title:"Components / Forms / RangeSlider"},ue=()=>e.jsx(l,{}),ce=()=>e.jsx(l,{defaultValue:[10,90]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),me=()=>e.jsx(e.Fragment,{children:Or.map(n=>e.jsx(l,{colorScheme:n},n))}),ge=()=>e.jsx(l,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),pe=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{max:200,min:0,value:n,onChange:s})]})},Se=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{step:5,value:n,onChange:s})]})},be=()=>e.jsx(l,{betweenThumbs:10}),xe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Ge,{gap:"xl",w:"full",children:[e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(E,{children:"Min"}),e.jsxs(Ge,{gap:"md",children:[e.jsx(re,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(re,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(E,{children:"Max"}),e.jsxs(Ge,{gap:"md",children:[e.jsx(re,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(re,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},ve=()=>e.jsxs(Mr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),Re=()=>{const[n,s]=i.useState([25,75]),[a,{off:m,on:b}]=Ir(!1);return e.jsxs(l,{mt:"10",value:n,onChange:s,onMouseEnter:b,onMouseLeave:m,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(mn,{isOpen:a,label:`${n[0]}%`,placement:"top",children:e.jsx(V,{})}),e.jsx(mn,{isOpen:a,label:`${n[1]}%`,placement:"top",children:e.jsx(F,{})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred volume.",isDisabled:!0,label:"volume (sound)",children:e.jsx(l,{})})]}),Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred volume.",isReadOnly:!0,label:"volume (sound)",children:e.jsx(l,{})})]}),ke=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Fe,{errorMessage:"Min volume should be set to 20 or higher.",isInvalid:n[0]<20,label:"volume (sound)",children:e.jsx(l,{value:n,onChange:s})})]})},je=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(l,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(l,{children:[e.jsx(B,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(V,{bg:"blue.700"}),e.jsx(F,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(B,{bg:"red.200",children:e.jsx(ze,{bg:"red.500"})}),e.jsx(V,{bg:"red.700"}),e.jsx(F,{bg:"red.700"})]})]}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{boxSize:"6",children:e.jsx(We,{}),color:"blue.500"}}),e.jsxs(l,{children:[e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(We,{})}),e.jsx(F,{boxSize:"6",color:"blue.500",children:e.jsx(We,{})})]})]}),we=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(l,{mt:"10",value:n,onChange:s,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},Te=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},ye=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Pe=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},Ve=()=>{var x;const n={rangeSlider:[25,75]},{control:s,formState:{errors:a},handleSubmit:m,watch:b}=Br({defaultValues:n}),f=c=>console.log("submit:",c);return console.log("watch:",b()),e.jsxs(Mr,{as:"form",onSubmit:m(f),children:[e.jsx(Fe,{errorMessage:(x=a.rangeSlider)==null?void 0:x.message,isInvalid:!!a.rangeSlider,label:"Volume",children:e.jsx(Ar,{name:"rangeSlider",control:s,render:({field:c})=>e.jsx(l,{...c})})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var gn,hn,pn;ue.parameters={...ue.parameters,docs:{...(gn=ue.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(pn=(hn=ue.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var Sn,bn,xn;ce.parameters={...ce.parameters,docs:{...(Sn=ce.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(xn=(bn=ce.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var vn,Rn,fn;de.parameters={...de.parameters,docs:{...(vn=de.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(fn=(Rn=de.parameters)==null?void 0:Rn.docs)==null?void 0:fn.source}}};var Cn,kn,jn;me.parameters={...me.parameters,docs:{...(Cn=me.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(jn=(kn=me.parameters)==null?void 0:kn.docs)==null?void 0:jn.source}}};var Mn,wn,Tn;ge.parameters={...ge.parameters,docs:{...(Mn=ge.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Tn=(wn=ge.parameters)==null?void 0:wn.docs)==null?void 0:Tn.source}}};var yn,Pn,Vn;he.parameters={...he.parameters,docs:{...(yn=he.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider h="calc(100vh - 16px * 3 - 14px)" isReversed orientation="vertical" />
    </>;
}`,...(Vn=(Pn=he.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Fn,_n,zn;pe.parameters={...pe.parameters,docs:{...(Fn=pe.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(zn=(_n=pe.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var En,$n,Dn;Se.parameters={...Se.parameters,docs:{...(En=Se.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...(Dn=($n=Se.parameters)==null?void 0:$n.docs)==null?void 0:Dn.source}}};var In,Bn,An;be.parameters={...be.parameters,docs:{...(In=be.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(An=(Bn=be.parameters)==null?void 0:Bn.docs)==null?void 0:An.source}}};var Nn,On,Hn;xe.parameters={...xe.parameters,docs:{...(Nn=xe.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(On=xe.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Ln,Un,qn;ve.parameters={...ve.parameters,docs:{...(Ln=ve.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(qn=(Un=ve.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Kn,Xn,Yn;Re.parameters={...Re.parameters,docs:{...(Kn=Re.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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

      <Tooltip isOpen={isOpen} label={\`\${value[0]}%\`} placement="top">
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip isOpen={isOpen} label={\`\${value[1]}%\`} placement="top">
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>;
}`,...(Yn=(Xn=Re.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Wn,Gn,Jn;fe.parameters={...fe.parameters,docs:{...(Wn=fe.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl helperMessage="Please select your preferred volume." isDisabled label="volume (sound)">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Jn=(Gn=fe.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Zn,er;Ce.parameters={...Ce.parameters,docs:{...(Qn=Ce.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl helperMessage="Please select your preferred volume." isReadOnly label="volume (sound)">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(er=(Zn=Ce.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;ke.parameters={...ke.parameters,docs:{...(nr=ke.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl errorMessage="Min volume should be set to 20 or higher." isInvalid={value[0] < 20} label="volume (sound)">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(ar=(rr=ke.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,sr,or;je.parameters={...je.parameters,docs:{...(tr=je.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(or=(sr=je.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var lr,ir,ur;Me.parameters={...Me.parameters,docs:{...(lr=Me.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumbProps={{
      boxSize: "6",
      children: <Activity />,
      color: "blue.500"
    }} />

      <RangeSlider>
        <RangeSliderStartThumb boxSize="6" color="blue.500">
          <Activity />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb boxSize="6" color="blue.500">
          <Activity />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(ur=(ir=Me.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;we.parameters={...we.parameters,docs:{...(cr=we.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=we.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;Te.parameters={...Te.parameters,docs:{...(gr=Te.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(pr=(hr=Te.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,br,xr;ye.parameters={...ye.parameters,docs:{...(Sr=ye.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(xr=(br=ye.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var vr,Rr,fr;Pe.parameters={...Pe.parameters,docs:{...(vr=Pe.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(fr=(Rr=Pe.parameters)==null?void 0:Rr.docs)==null?void 0:fr.source}}};var Cr,kr,jr;Ve.parameters={...Ve.parameters,docs:{...(Cr=Ve.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.rangeSlider?.message} isInvalid={!!errors.rangeSlider} label="Volume">
        <Controller name="rangeSlider" control={control} render={({
        field
      }) => <RangeSlider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(jr=(kr=Ve.parameters)==null?void 0:kr.docs)==null?void 0:jr.source}}};const vt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{vt as __namedExportsOrder,ue as basic,je as customColor,Te as customControl,we as customMark,Me as customThumb,xt as default,fe as isDisabled,ke as isInvalid,Ce as isReadonly,Pe as onChangeEnd,ye as onChangeStart,Ve as reactHookForm,be as withBetweenThumbs,me as withColorScheme,ce as withDefaultValue,xe as withFocusThumbOnChange,ve as withMark,pe as withMinMax,ge as withOrientation,he as withReversed,de as withSize,Se as withStep,Re as withTooltip};
