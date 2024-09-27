import{j as e}from"./extends-CwFRzn3r.js";import{r as i}from"./index-BwDkhjyp.js";import{u as Dr,C as Ir}from"./index.esm-DXPXqkjk.js";import{j as Br,c as Ar}from"./components-BP8xC0Zk.js";import{u as Nr}from"./index-Du0-7Fls.js";import{u as Or}from"./index-Dz6agydm.js";import{u as Hr,c as Lr,b as Ur}from"./index-B4mTSuWb.js";import{u as qr,f as Kr,F as ze}from"./form-control-DAXawruh.js";import{o as Xr,p as Yr,q as Ke,a8 as sn,a9 as Wr,aa as Gr,b as q,c as ae,V as Jr,k as on,f as Qr,a as ln,F as Zr,d as Xe,h as Ye}from"./factory-BgMvz7NM.js";import{f as A}from"./forward-ref-BWI-Phbn.js";import{a as ea}from"./use-component-style-D3MffxdG.js";import{o as na}from"./theme-provider-Bpmh2ODM.js";import{c as un,v as cn,r as ra,p as aa}from"./number-CcP_arM8.js";import{A as We}from"./activity-Cjq2WSgV.js";import{T as E}from"./text-CxEGNgXo.js";import{C as Ge}from"./center-DS2plk9R.js";import{F as dn}from"./flex-Cl1zHQNi.js";import{B as re}from"./button-knJHP-Ba.js";import{V as Mr}from"./stack-c0WUIOCC.js";import{T as mn}from"./tooltip-rjHfP52r.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-B6ycpjcM.js";import"./ui-provider-DY2oYN-S.js";import"./index-AqDG4z1T.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-TBFbx4D4.js";import"./index-CjGDoYdX.js";import"./Combination-IUp2vs9T.js";import"./loading-B_aB2PJP.js";import"./icon-CvhI1IwG.js";import"./use-var-Dgk44aKJ.js";import"./factory-yZQlYpPU.js";import"./portal-C14XFhbI.js";import"./index-B8XB3FuZ.js";import"./notice-DVwxRQgn.js";import"./alert-B0TkXEfE.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./container-CS7gHKs5.js";import"./box-Bx0dCD5X.js";import"./checkbox-CHh1Q5wt.js";import"./index-zVjQQjxl.js";import"./index-DkfW55MP.js";import"./index-BAaRSIWS.js";import"./select-CkRuMJ8t.js";import"./select-list-CoK2isOp.js";import"./index-Br7ZWcgB.js";import"./index-i7wmI0W_.js";import"./index-BzBNm7Tp.js";import"./popover-content-CkkufdAv.js";import"./index-DX38EdL3.js";import"./index-UbUyUaFk.js";import"./index-eVjHUBC4.js";import"./index-B9IsUjMJ.js";import"./index-CzplldKp.js";import"./slide-fade-oCi7TKjr.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bm7s5BqF.js";import"./scale-fade-BQTws92u.js";import"./event-wx3HPSqP.js";import"./lucide-icon-2cUstn0F.js";const ta=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,min:u=0,max:d=100,step:v=1,defaultValue:h,orientation:j="horizontal",thumbSize:_,isReversed:g,betweenThumbs:z=0,value:K,onChange:X,onChangeStart:te,onChangeEnd:Ie,"aria-valuetext":se,...Y}=qr(s);const{required:oe,disabled:N,readOnly:W,onFocus:le,onBlur:ie,"aria-readonly":O,...S}=Jr(Y,Kr);if(h=h??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const Be=on(te),G=on(Ie),[Ae,H]=Or({value:K,defaultValue:h,onChange:X}),[J,ue]=i.useState(!1),[wr,Je]=i.useState(!1),[b,Q]=i.useState(-1),Ne=!(N||W),Oe=(d-u)/10,L=v||(d-u)/100,Qe=z*v,w=Ae.map(r=>un(r,u,d)),[Ze,en]=w,Tr=w.map(r=>d-r+u),$=(g?Tr:w).map(r=>cn(r,u,d)),yr=[{min:u,max:en-Qe},{min:Ze+Qe,max:d}],x=j==="vertical",k=Hr({min:u,max:d,step:v,disabled:N,values:w,valueBounds:yr,isInteractive:Ne,isReversed:g,isVertical:x,focusThumbOnChange:n,betweenThumbs:z,orientation:j}),He=i.useRef(null),ce=i.useRef(null),Le=i.useRef(null),D=Lr({getNodes:()=>{var t;const r=(t=ce.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),m??(m=a);const Z=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Ue=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),qe=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ur(ce,{onSessionStart:r=>{const{isInteractive:t,values:o}=k.current;if(!t)return;ue(!0);const c=nn(r)||0,R=o.map(T=>Math.abs(T-c)),f=Math.min(...R);let C=R.indexOf(f);const M=R.filter(T=>T===f);M.length>1&&c>o[C]&&(C=C+M.length-1),Q(C),V(C,c),rn(C),Be(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=k.current;r&&(ue(!1),G(t))},onMove:r=>{const{isInteractive:t}=k.current;if(!t||b==-1)return;const o=nn(r)||0;Q(b),V(b,o),rn(b)}});const nn=i.useCallback(r=>{var tn;if(!Le.current)return;const{min:t,max:o}=k.current;He.current="pointer";const{bottom:c,left:R,height:f,width:C}=Le.current.getBoundingClientRect(),{clientX:M,clientY:I}=((tn=r.touches)==null?void 0:tn[0])??r;let F=(x?c-I:M-R)/(x?f:C);return g&&(F=1-F),aa(F,t,o)},[k,x,g]),rn=i.useCallback(r=>{var c;if(r??(r=b),r===-1||!n)return;const t=Z(r),o=(c=ce.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[b,n,Z]),V=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:R}=k.current;if(!o)return;const{min:f,max:C}=c[r];t=parseFloat(ra(t,f,L)),t=un(t,f,C);const M=[...R];M[r]=t,H(M)},[k,L,H]),ee=i.useCallback((r,t=L)=>{const{values:o}=k.current,c=o[r];V(r,g?c-t:c+t)},[V,g,k,L]),ne=i.useCallback((r,t=L)=>{const{values:o}=k.current,c=o[r];V(r,g?c+t:c-t)},[V,g,k,L]),Pr=i.useCallback(()=>H(h),[h,H]),an=i.useCallback(r=>{const{valueBounds:t}=k.current,{min:o,max:c}=t[b],f={ArrowRight:()=>ee(b),ArrowUp:()=>ee(b),ArrowLeft:()=>ne(b),ArrowDown:()=>ne(b),PageUp:()=>ee(b,Oe),PageDown:()=>ne(b,Oe),Home:()=>V(b,o),End:()=>V(b,c)}[r.key];f&&(r.preventDefault(),r.stopPropagation(),f(r),He.current="keyboard")},[b,V,k,ne,ee,Oe]);Qr(()=>{const{values:r}=k.current;He.current==="keyboard"&&G(r)},[Ze,en,G]);const Vr=i.useCallback((r={},t=null)=>{let o="$thumbSize",c="$thumbSize";if(D.length){const C=x?"height":"width",M={width:0,height:0},{width:I,height:T}=D.reduce((U=M,F=M)=>U[C]>F[C]?U:F,M)??{};I&&(o=I),T&&(c=T)}const R=x?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingTop:`calc(${c} / 2)`,paddingBottom:`calc(${c} / 2)`},f={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...R};return{...Y,...r,id:`slider-container-${a}`,ref:ln(t,ce),tabIndex:-1,style:f,vars:[{name:"thumbSize",token:"sizes",value:_}]}},[a,x,Y,_,D]),Fr=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":O,...S,...t,ref:o,id:Ue(r),type:"hidden",name:Zr(m)?m[r]:`${m}-${r}`,value:w[r],required:oe,disabled:N,readOnly:W}),[O,N,Ue,m,W,oe,S,w]),_r=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...S,...r,id:`slider-track-${a}`,ref:ln(t,Le),style:o}},[a,x,S]),zr=i.useCallback((r={},t=null)=>{const o=Math.abs($[1]-$[0]),c=g?100-$[0]:$[0],R={...r.style,position:"absolute",...x?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...g?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...g?{right:`${c}%`}:{left:`${c}%`}}};return{...S,...r,id:`slider-filled-track-${a}`,ref:t,style:R}},[a,g,x,S,$]),Er=i.useCallback((r,t=null)=>{let o=cn(r.value,u,d);o=g?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...x?{bottom:`${o}%`}:{left:`${o}%`}};return{...S,...r,ref:t,id:qe(r.value),"aria-hidden":!0,"data-invalid":Xe(r.value<u||d<r.value),"data-highlighted":Xe(w[0]<=r.value&&r.value<=w[1]),style:c}},[qe,g,x,d,u,S,w]),$r=i.useCallback(({index:r,...t},o=null)=>{var U,F;const c=$[r];let R="$thumbSize",f="$thumbSize";D[r]&&(R=`${(U=D[r])==null?void 0:U.width}px`,f=`${(F=D[r])==null?void 0:F.height}px`);const C=`calc(${c}% - (${f} / 2))`,M=`calc(${c}% - (${R} / 2))`,I={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...x?{bottom:C}:{left:M}},T=w[r];if(T==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":O,...S,...t,ref:o,id:Z(r),tabIndex:Ne&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":T,"data-active":Xe(J&&n&&b===r),"aria-orientation":j,"aria-valuetext":se??T.toString(),onKeyDown:Ye(t.onKeyDown,an),onFocus:Ye(t.onFocus,le,()=>{Je(!0),Q(r)}),onBlur:Ye(t.onBlur,ie,()=>{Je(!1),Q(-1)}),style:I}},[$,D,x,w,O,S,Z,Ne,n,u,d,J,b,j,se,an,le,ie]);return{values:w,isFocused:wr,isDragging:J,isVertical:x,stepUp:ee,stepDown:ne,reset:Pr,setActiveIndex:Q,getThumbId:Z,getInputId:Ue,getMarkerId:qe,getContainerProps:Vr,getInputProps:Fr,getTrackProps:_r,getFilledTrackProps:zr,getMarkProps:Er,getThumbProps:$r}},[sa,Ee]=Xr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=A((n,s)=>{const[a,m]=ea("RangeSlider",n),{className:u,children:d,inputProps:v,trackProps:h,filledTrackProps:j,thumbProps:_,trackColor:g,filledTrackColor:z,trackSize:K,thumbColor:X,thumbSize:te,...Ie}=na(m),{isVertical:se,getContainerProps:Y,getInputProps:oe,getTrackProps:N,getFilledTrackProps:W,getMarkProps:le,getThumbProps:ie}=ta({...Ie,thumbSize:Br(te,a)}),O={...a.container},S=Yr(d),Be=Ke(S,B),G=Ke(S,y),Ae=Ke(S,P),H=sn(S,y),J=sn(S,P),ue=Wr(S)?d:Gr(S,B,y,P);return e.jsx(sa,{value:{isVertical:se,getTrackProps:N,getFilledTrackProps:W,getMarkProps:le,getThumbProps:ie,getInputProps:oe,trackProps:h,trackColor:g,trackSize:K,filledTrackProps:j,filledTrackColor:z,thumbProps:_,thumbColor:X,thumbSize:te,inputProps:v,styles:a},children:e.jsxs(q.div,{className:ae("ui-slider",u),__css:O,...Y({},s),children:[Be??e.jsx(B,{}),ue,G??(H?null:e.jsx(y,{})),Ae??(J?null:e.jsx(P,{}))]})})});l.displayName="RangeSlider";l.__ui__="RangeSlider";const B=A(({className:n,children:s,filledTrackProps:a,...m},u)=>{const{styles:d,trackProps:v,trackColor:h,trackSize:j,isVertical:_,getTrackProps:g}=Ee(),z={...d.track};return e.jsx(q.div,{className:ae("ui-slider__track",n),__css:z,...g({...h?{bg:h}:{},...j?_?{w:j}:{h:j}:{},...v,...m},u),children:s??e.jsx($e,{...a})})});B.displayName="RangeSliderTrack";B.__ui__="RangeSliderTrack";const $e=A(({className:n,...s},a)=>{const{styles:m,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:v}=Ee(),h={...m.filledTrack};return e.jsx(q.div,{className:ae("ui-slider__track-filled",n),__css:h,...v({...d?{bg:d}:{},...u,...s},a)})});$e.displayName="RangeSliderFilledTrack";$e.__ui__="RangeSliderFilledTrack";const p=A(({className:n,...s},a)=>{const{styles:m,getMarkProps:u}=Ee(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e.jsx(q.div,{className:ae("ui-slider__mark",n),__css:d,...u(s,a)})});p.displayName="RangeSliderMark";p.__ui__="RangeSliderMark";const De=A(({className:n,index:s,children:a,...m},u)=>{const{styles:d,thumbProps:v,thumbColor:h,thumbSize:j,inputProps:_,getThumbProps:g,getInputProps:z}=Ee(),K={...d.thumb},{children:X}=v??{};return e.jsxs(q.div,{className:ae("ui-slider__thumb",n),__css:K,...g({index:s,...h?{bg:h}:{},...j?{boxSize:j}:{},...v,...m},u),children:[e.jsx(q.input,{...z({..._,index:s},u)}),a??X]})});De.displayName="RangeSliderThumb";De.__ui__="RangeSliderThumb";const y=A((n,s)=>e.jsx(De,{ref:s,index:0,...n}));y.displayName="RangeSliderStartThumb";y.__ui__="RangeSliderStartThumb";const P=A((n,s)=>e.jsx(De,{ref:s,index:1,...n}));P.displayName="RangeSliderEndThumb";P.__ui__="RangeSliderEndThumb";const bt={title:"Components / Forms / RangeSlider",component:l},de=()=>e.jsx(l,{}),me=()=>e.jsx(l,{defaultValue:[10,90]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),he=()=>e.jsx(e.Fragment,{children:Ar.map(n=>e.jsx(l,{colorScheme:n},n))}),pe=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),Se=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),be=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},xe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},ve=()=>e.jsx(l,{betweenThumbs:10}),Re=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(Ge,{w:"full",gap:"xl",children:[e.jsxs(dn,{direction:"column",align:"center",gap:"sm",children:[e.jsx(E,{children:"Min"}),e.jsxs(Ge,{gap:"md",children:[e.jsx(re,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(re,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(dn,{direction:"column",align:"center",gap:"sm",children:[e.jsx(E,{children:"Max"}),e.jsxs(Ge,{gap:"md",children:[e.jsx(re,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(re,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},fe=()=>e.jsxs(Mr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(p,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(p,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(p,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(p,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(p,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(p,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(p,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(p,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(p,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Ce=()=>{const[n,s]=i.useState([25,75]),[a,{on:m,off:u}]=Nr(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:m,onMouseLeave:u,children:[e.jsx(p,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(p,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(p,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(mn,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx(y,{})}),e.jsx(mn,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx(P,{})})]})},ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(ze,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(ze,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),Me=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(ze,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},we=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(B,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(y,{bg:"blue.700"}),e.jsx(P,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(B,{bg:"red.200",children:e.jsx($e,{bg:"red.500"})}),e.jsx(y,{bg:"red.700"}),e.jsx(P,{bg:"red.700"})]})]}),Te=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(We,{})}}),e.jsxs(l,{children:[e.jsx(y,{color:"blue.500",boxSize:"6",children:e.jsx(We,{})}),e.jsx(P,{color:"blue.500",boxSize:"6",children:e.jsx(We,{})})]})]}),ye=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(p,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(p,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(p,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(p,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(p,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},Pe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},Ve=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Fe=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},_e=()=>{var v;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:m,formState:{errors:u}}=Dr({defaultValues:n}),d=h=>console.log("submit:",h);return console.log("watch:",m()),e.jsxs(Mr,{as:"form",onSubmit:a(d),children:[e.jsx(ze,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(v=u.rangeSlider)==null?void 0:v.message,children:e.jsx(Ir,{name:"rangeSlider",control:s,render:({field:h})=>e.jsx(l,{...h})})}),e.jsx(re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var gn,hn,pn;de.parameters={...de.parameters,docs:{...(gn=de.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(pn=(hn=de.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var Sn,bn,xn;me.parameters={...me.parameters,docs:{...(Sn=me.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(xn=(bn=me.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var vn,Rn,fn;ge.parameters={...ge.parameters,docs:{...(vn=ge.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(fn=(Rn=ge.parameters)==null?void 0:Rn.docs)==null?void 0:fn.source}}};var Cn,kn,jn;he.parameters={...he.parameters,docs:{...(Cn=he.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(jn=(kn=he.parameters)==null?void 0:kn.docs)==null?void 0:jn.source}}};var Mn,wn,Tn;pe.parameters={...pe.parameters,docs:{...(Mn=pe.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Tn=(wn=pe.parameters)==null?void 0:wn.docs)==null?void 0:Tn.source}}};var yn,Pn,Vn;Se.parameters={...Se.parameters,docs:{...(yn=Se.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(Vn=(Pn=Se.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Fn,_n,zn;be.parameters={...be.parameters,docs:{...(Fn=be.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(zn=(_n=be.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var En,$n,Dn;xe.parameters={...xe.parameters,docs:{...(En=xe.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(Dn=($n=xe.parameters)==null?void 0:$n.docs)==null?void 0:Dn.source}}};var In,Bn,An;ve.parameters={...ve.parameters,docs:{...(In=ve.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(An=(Bn=ve.parameters)==null?void 0:Bn.docs)==null?void 0:An.source}}};var Nn,On,Hn;Re.parameters={...Re.parameters,docs:{...(Nn=Re.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(On=Re.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Ln,Un,qn;fe.parameters={...fe.parameters,docs:{...(Ln=fe.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(qn=(Un=fe.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Kn,Xn,Yn;Ce.parameters={...Ce.parameters,docs:{...(Kn=Ce.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Xn=Ce.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Wn,Gn,Jn;ke.parameters={...ke.parameters,docs:{...(Wn=ke.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Jn=(Gn=ke.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Zn,er;je.parameters={...je.parameters,docs:{...(Qn=je.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(er=(Zn=je.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;Me.parameters={...Me.parameters,docs:{...(nr=Me.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(ar=(rr=Me.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,sr,or;we.parameters={...we.parameters,docs:{...(tr=we.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(or=(sr=we.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var lr,ir,ur;Te.parameters={...Te.parameters,docs:{...(lr=Te.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
}`,...(ur=(ir=Te.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;ye.parameters={...ye.parameters,docs:{...(cr=ye.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=ye.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;Pe.parameters={...Pe.parameters,docs:{...(gr=Pe.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(pr=(hr=Pe.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,br,xr;Ve.parameters={...Ve.parameters,docs:{...(Sr=Ve.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(xr=(br=Ve.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var vr,Rr,fr;Fe.parameters={...Fe.parameters,docs:{...(vr=Fe.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(fr=(Rr=Fe.parameters)==null?void 0:Rr.docs)==null?void 0:fr.source}}};var Cr,kr,jr;_e.parameters={..._e.parameters,docs:{...(Cr=_e.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(jr=(kr=_e.parameters)==null?void 0:kr.docs)==null?void 0:jr.source}}};const xt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{xt as __namedExportsOrder,de as basic,we as customColor,Pe as customControl,ye as customMark,Te as customThumb,bt as default,ke as isDisabled,Me as isInvalid,je as isReadonly,Fe as onChangeEnd,Ve as onChangeStart,_e as reactHookForm,ve as withBetweenThumbs,he as withColorScheme,me as withDefaultValue,Re as withFocusThumbOnChange,fe as withMark,be as withMinMax,pe as withOrientation,Se as withReversed,ge as withSize,xe as withStep,Ce as withTooltip};
