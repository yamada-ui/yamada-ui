import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as $r}from"./index-gGKStiao.js";import{r as u}from"./index-ClcD9ViR.js";import{u as Dr,C as Br}from"./index.esm-CEdvtQ_U.js";import{j as Ar,c as Nr}from"./components-_imAxZxe.js";import{u as Or}from"./index-DPt_fcIQ.js";import{u as Hr,c as Lr,b as Ur}from"./index-BCBmayc8.js";import{c as qr,f as Kr,d as Pe}from"./form-control-Y8qD5MxJ.js";import{p as Xr,q as Yr,w as qe,aa as sn,ab as Jr,ac as Wr,b as X,c as re,Z as Zr,k as on,f as Gr,a as ln,J as Qr,d as Ke,h as Xe}from"./factory-COau3w21.js";import{f as B}from"./forward-ref-D13m8o2p.js";import{a as ea}from"./use-component-style-CLSKeq_H.js";import{o as na}from"./theme-provider-CNI9L2WW.js";import{c as un,v as cn,r as ra,p as aa}from"./number-CcP_arM8.js";import{m as ta}from"./use-var-YCfkKbSC.js";import{A as Ye}from"./activity-C33ILIYv.js";import{T as z}from"./text-BnztNdZ-.js";import{C as Je}from"./center-CSG2P-cD.js";import{F as dn}from"./flex-BgJeD3no.js";import{B as ne}from"./button-z5WWKIDm.js";import{V as Mr}from"./stack-DfTvLKXJ.js";import{T as mn}from"./tooltip-DqnSdWX7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BcE809qD.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-eJsiD_iL.js";import"./index-B5Fb0Sgv.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-CW1g4LYM.js";import"./index-CA_fCdqy.js";import"./Combination-CkmEMpJG.js";import"./loading-DYtJ9fc2.js";import"./icon-BodRPJCf.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-CgvdJ0pj.js";import"./index-ZuzByk-F.js";import"./factory-ep9rrzy9.js";import"./notice-0nBeSUXU.js";import"./alert-Br92M73P.js";import"./triangle-alert-D-rdrXiJ.js";import"./createLucideIcon-Czt4prMK.js";import"./close-button-EOT3XTCt.js";import"./use-ripple-D0covPjN.js";import"./container-9UL7bQcu.js";import"./box-Co1KKng-.js";import"./checkbox-Dlwy-uIR.js";import"./index-CRS5qAAq.js";import"./index-Btt-sfjQ.js";import"./index-B5Z2HpMN.js";import"./select-DiVSeaVw.js";import"./select-list-CJRoYFPx.js";import"./index-C58se0b8.js";import"./index-qyuJ8aiN.js";import"./index-Blij8Q7p.js";import"./popover-trigger-C0a8uwwS.js";import"./slide-fade-DzakJmAy.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./scale-fade-DAfdo16Z.js";import"./index-a5RVC8cz.js";import"./index-Bt_V34Vb.js";import"./index-CYDuQAfY.js";import"./event-C_48urmU.js";const sa=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,"aria-valuetext":b,betweenThumbs:f=0,defaultValue:v,isReversed:c,max:d=100,min:g=0,orientation:T="horizontal",step:y=1,thumbSize:A,value:Y,onChange:ze,onChangeEnd:Ee,onChangeStart:Ie,...N}=qr(s);const{"aria-readonly":O,disabled:H,readOnly:J,required:ae,onBlur:te,onFocus:se,...S}=Zr(N,Kr);if(v=v??[g+(d-g)/4,d-(d-g)/4],d<g)throw new Error("Do not assign a number less than 'min' to 'max'");const $e=on(Ie),W=on(Ee),[De,L]=Or({defaultValue:v,value:Y,onChange:ze}),Be=u.useId(),[Z,We]=u.useState(!1),[wr,Ze]=u.useState(!1),Ae=!(H||J),Ne=(d-g)/10,U=y||(d-g)/100,Ge=f*y,j=De.map(r=>un(r,g,d)),[Qe,en]=j,Tr=j.map(r=>d-r+g),E=(c?Tr:j).map(r=>cn(r,g,d)),yr=[{max:en-Ge,min:g},{max:d,min:Qe+Ge}],x=T==="vertical",C=Hr({betweenThumbs:f,disabled:H,focusThumbOnChange:n,isInteractive:Ae,isReversed:c,isVertical:x,max:d,min:g,orientation:T,step:y,valueBounds:yr,values:j}),q=u.useRef(-1),Oe=u.useRef(null),oe=u.useRef(null),He=u.useRef(null),I=Lr({getNodes:()=>{var t;const r=(t=oe.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=Be),m??(m=a);const G=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Le=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Ue=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ur(oe,{onMove:r=>{const t=q.current,{isInteractive:o}=C.current;if(!o||t==-1)return;const i=nn(r)||0;F(t,i),rn(t)},onSessionEnd:()=>{const{isInteractive:r,values:t}=C.current;r&&(We(!1),W(t))},onSessionStart:r=>{const{isInteractive:t,values:o}=C.current;if(!t)return;We(!0);const i=nn(r)||0,R=o.map(w=>Math.abs(w-i)),M=Math.min(...R);let h=R.indexOf(M);const k=R.filter(w=>w===M);k.length>1&&i>o[h]&&(h=h+k.length-1),q.current=h,F(h,i),rn(h),$e(o)}});const nn=u.useCallback(r=>{var tn;if(!He.current)return;const{max:t,min:o}=C.current;Oe.current="pointer";const{bottom:i,height:R,left:M,width:h}=He.current.getBoundingClientRect(),{clientX:k,clientY:$}=((tn=r.touches)==null?void 0:tn[0])??r;let _=(x?i-$:k-M)/(x?R:h);return c&&(_=1-_),aa(_,o,t)},[C,x,c]),rn=u.useCallback(r=>{var i;if(r===-1||!n)return;const t=G(r),o=(i=oe.current)==null?void 0:i.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[n,G]),F=u.useCallback((r,t)=>{const{isInteractive:o,valueBounds:i,values:R}=C.current;if(!o)return;const{max:M=100,min:h=0}=i[r]??{};t=parseFloat(ra(t,h,U)),t=un(t,h,M);const k=[...R];k[r]=t,L(k)},[C,U,L]),Q=u.useCallback((r,t=U)=>{const{values:o}=C.current,i=o[r];F(r,c?i-t:i+t)},[F,c,C,U]),ee=u.useCallback((r,t=U)=>{const{values:o}=C.current,i=o[r];F(r,c?i+t:i-t)},[F,c,C,U]),Pr=u.useCallback(()=>L(v),[v,L]),an=u.useCallback(r=>{const t=q.current,{valueBounds:o}=C.current,{max:i=100,min:R=0}=o[t]??{},h={ArrowDown:()=>ee(t),ArrowLeft:()=>ee(t),ArrowRight:()=>Q(t),ArrowUp:()=>Q(t),End:()=>F(t,i),Home:()=>F(t,R),PageDown:()=>ee(t,Ne),PageUp:()=>Q(t,Ne)}[r.key];h&&(r.preventDefault(),r.stopPropagation(),h(r),Oe.current="keyboard")},[F,C,ee,Q,Ne]);Gr(()=>{const{values:r}=C.current;Oe.current==="keyboard"&&W(r)},[Qe,en,W]);const Vr=u.useCallback((r={},t=null)=>{let o="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if(I.length){const h=x?"height":"width",k={height:0,width:0},{height:$,width:w}=I.reduce((K=k,_=k)=>K[h]>_[h]?K:_,k)??{};w&&(o=`${w}px`),$&&(i=`${$}px`)}const R=x?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},M={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...R};return{...N,...r,id:`slider-container-${a}`,ref:ln(t,oe),style:M,tabIndex:-1,vars:ta(N.vars,[{name:"thumb-size",token:"sizes",value:A,__prefix:"ui"}])}},[a,x,N,A,I]),Fr=u.useCallback(({index:r,...t},o=null)=>({"aria-readonly":O,...S,...t,id:Le(r),ref:o,type:"hidden",name:Qr(m)?m[r]:`${m}-${r}`,disabled:H,readOnly:J,required:ae,value:j[r]}),[O,H,Le,m,J,ae,S,j]),_r=u.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...x?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...S,...r,id:`slider-track-${a}`,ref:ln(t,He),style:o}},[a,x,S]),zr=u.useCallback((r={},t=null)=>{const o=Math.abs(E[1]-E[0]),i=c?100-E[0]:E[0],R={...r.style,position:"absolute",...x?{height:`${o}%`,left:"50%",transform:"translateX(-50%)",...c?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...c?{right:`${i}%`}:{left:`${i}%`}}};return{...S,...r,id:`slider-filled-track-${a}`,ref:t,style:R}},[a,c,x,S,E]),Er=u.useCallback((r,t=null)=>{let o=cn(r.value,g,d);o=c?100-o:o;const i={...r.style,pointerEvents:"none",position:"absolute",...x?{bottom:`${o}%`}:{left:`${o}%`}};return{...S,...r,id:Ue(r.value),ref:t,style:i,"aria-hidden":!0,"data-highlighted":Ke(j[0]<=r.value&&r.value<=j[1]),"data-invalid":Ke(r.value<g||d<r.value)}},[Ue,c,x,d,g,S,j]),Ir=u.useCallback(({index:r,...t},o=null)=>{var K,_;const i=E[r];let R="var(--ui-thumb-size)",M="var(--ui-thumb-size)";I[r]&&(R=`${(K=I[r])==null?void 0:K.width}px`,M=`${(_=I[r])==null?void 0:_.height}px`);const h=`calc(${i}% - (${M} / 2))`,k=`calc(${i}% - (${R} / 2))`,$={...t.style,position:"absolute",touchAction:"none",userSelect:"none",...x?{bottom:h}:{left:k}},w=j[r];if(w==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":O,...S,...t,id:G(r),ref:o,style:$,"aria-orientation":T,"aria-valuemax":d,"aria-valuemin":g,"aria-valuenow":w,"aria-valuetext":b??w.toString(),"data-active":Ke(Z&&n&&q.current===r),role:"slider",tabIndex:Ae&&n?0:void 0,onBlur:Xe(t.onBlur,te,()=>{q.current=-1,Ze(!1)}),onFocus:Xe(t.onFocus,se,()=>{q.current=r,Ze(!0)}),onKeyDown:Xe(t.onKeyDown,an)}},[E,I,x,j,O,S,G,Ae,n,g,d,Z,T,b,an,se,te]);return{getInputId:Le,getMarkerId:Ue,getThumbId:G,isDragging:Z,isFocused:wr,isVertical:x,reset:Pr,stepDown:ee,stepUp:Q,values:j,getContainerProps:Vr,getFilledTrackProps:zr,getInputProps:Fr,getMarkProps:Er,getThumbProps:Ir,getTrackProps:_r}},[oa,Ve]=Xr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=B((n,s)=>{const[a,m]=ea("RangeSlider",n),{className:b,children:f,filledTrackColor:v,thumbColor:c,thumbSize:d,trackColor:g,trackSize:T,filledTrackProps:y,inputProps:A,thumbProps:Y,trackProps:ze,...Ee}=na(m),{isVertical:Ie,getContainerProps:N,getFilledTrackProps:O,getInputProps:H,getMarkProps:J,getThumbProps:ae,getTrackProps:te}=sa({...Ee,thumbSize:Ar(d,a)}),se={...a.container},S=Yr(f),$e=qe(S,D),W=qe(S,P),De=qe(S,V),L=sn(S,P),Be=sn(S,V),Z=Jr(S)?f:Wr(S,D,P,V);return e.jsx(oa,{value:{filledTrackColor:v,isVertical:Ie,styles:a,thumbColor:c,thumbSize:d,trackColor:g,trackSize:T,filledTrackProps:y,getFilledTrackProps:O,getInputProps:H,getMarkProps:J,getThumbProps:ae,getTrackProps:te,inputProps:A,thumbProps:Y,trackProps:ze},children:e.jsxs(X.div,{className:re("ui-slider",b),__css:se,...N({},s),children:[$e??e.jsx(D,{}),Z,W??(L?null:e.jsx(P,{})),De??(Be?null:e.jsx(V,{}))]})})});l.displayName="RangeSlider";l.__ui__="RangeSlider";const D=B(({className:n,children:s,filledTrackProps:a,...m},b)=>{const{isVertical:f,styles:v,trackColor:c,trackSize:d,getTrackProps:g,trackProps:T}=Ve(),y={...v.track};return e.jsx(X.div,{className:re("ui-slider__track",n),__css:y,...g({...c?{bg:c}:{},...d?f?{w:d}:{h:d}:{},...T,...m},b),children:s??e.jsx(Fe,{...a})})});D.displayName="RangeSliderTrack";D.__ui__="RangeSliderTrack";const Fe=B(({className:n,...s},a)=>{const{filledTrackColor:m,styles:b,filledTrackProps:f,getFilledTrackProps:v}=Ve(),c={...b.filledTrack};return e.jsx(X.div,{className:re("ui-slider__track-filled",n),__css:c,...v({...m?{bg:m}:{},...f,...s},a)})});Fe.displayName="RangeSliderFilledTrack";Fe.__ui__="RangeSliderFilledTrack";const p=B(({className:n,...s},a)=>{const{styles:m,getMarkProps:b}=Ve(),f={alignItems:"center",display:"inline-flex",justifyContent:"center",...m.mark};return e.jsx(X.div,{className:re("ui-slider__mark",n),__css:f,...b(s,a)})});p.displayName="RangeSliderMark";p.__ui__="RangeSliderMark";const _e=B(({className:n,children:s,index:a,...m},b)=>{const{styles:f,thumbColor:v,thumbSize:c,getInputProps:d,getThumbProps:g,inputProps:T,thumbProps:y}=Ve(),A={...f.thumb},{children:Y}=y??{};return e.jsxs(X.div,{className:re("ui-slider__thumb",n),__css:A,...g({index:a,...v?{bg:v}:{},...c?{boxSize:c}:{},...y,...m},b),children:[e.jsx(X.input,{...d({...T,index:a},b)}),s??Y]})});_e.displayName="RangeSliderThumb";_e.__ui__="RangeSliderThumb";const P=B((n,s)=>e.jsx(_e,{ref:s,index:0,...n}));P.displayName="RangeSliderStartThumb";P.__ui__="RangeSliderStartThumb";const V=B((n,s)=>e.jsx(_e,{ref:s,index:1,...n}));V.displayName="RangeSliderEndThumb";V.__ui__="RangeSliderEndThumb";const ft={component:l,title:"Components / Forms / RangeSlider"},le=()=>e.jsx(l,{}),ie=()=>e.jsx(l,{defaultValue:[10,90]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),ce=()=>e.jsx(e.Fragment,{children:Nr.map(n=>e.jsx(l,{colorScheme:n},n))}),de=()=>e.jsx(l,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),ge=()=>{const[n,s]=u.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{max:200,min:0,value:n,onChange:s})]})},he=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{step:5,value:n,onChange:s})]})},pe=()=>e.jsx(l,{betweenThumbs:10}),Se=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Je,{gap:"xl",w:"full",children:[e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(z,{children:"Min"}),e.jsxs(Je,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(z,{children:"Max"}),e.jsxs(Je,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},be=()=>e.jsxs(Mr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),ve=()=>{const[n,s]=u.useState([25,75]),[a,{off:m,on:b}]=$r(!1);return e.jsxs(l,{mt:"10",value:n,onChange:s,onMouseEnter:b,onMouseLeave:m,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(mn,{label:`${n[0]}%`,open:a,placement:"top",children:e.jsx(P,{})}),e.jsx(mn,{label:`${n[1]}%`,open:a,placement:"top",children:e.jsx(V,{})})]})},xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Pe,{helperMessage:"Please select your preferred volume.",isDisabled:!0,label:"volume (sound)",children:e.jsx(l,{})})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Pe,{helperMessage:"Please select your preferred volume.",isReadOnly:!0,label:"volume (sound)",children:e.jsx(l,{})})]}),fe=()=>{const[n,s]=u.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Pe,{errorMessage:"Min volume should be set to 20 or higher.",isInvalid:n[0]<20,label:"volume (sound)",children:e.jsx(l,{value:n,onChange:s})})]})},Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(l,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(l,{children:[e.jsx(D,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(P,{bg:"blue.700"}),e.jsx(V,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(D,{bg:"red.200",children:e.jsx(Fe,{bg:"red.500"})}),e.jsx(P,{bg:"red.700"}),e.jsx(V,{bg:"red.700"})]})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{boxSize:"6",children:e.jsx(Ye,{}),color:"blue.500"}}),e.jsxs(l,{children:[e.jsx(P,{boxSize:"6",color:"blue.500",children:e.jsx(Ye,{})}),e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Ye,{})})]})]}),je=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(l,{mt:"10",value:n,onChange:s,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},Me=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},we=()=>{const[n,s]=u.useState([25,75]),[a,m]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Te=()=>{const[n,s]=u.useState([25,75]),[a,m]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},ye=()=>{var v;const n={rangeSlider:[25,75]},{control:s,formState:{errors:a},handleSubmit:m,watch:b}=Dr({defaultValues:n}),f=c=>console.log("submit:",c);return console.log("watch:",b()),e.jsxs(Mr,{as:"form",onSubmit:m(f),children:[e.jsx(Pe,{errorMessage:(v=a.rangeSlider)==null?void 0:v.message,isInvalid:!!a.rangeSlider,label:"Volume",children:e.jsx(Br,{name:"rangeSlider",control:s,render:({field:c})=>e.jsx(l,{...c})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var gn,hn,pn;le.parameters={...le.parameters,docs:{...(gn=le.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(pn=(hn=le.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var Sn,bn,vn;ie.parameters={...ie.parameters,docs:{...(Sn=ie.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(vn=(bn=ie.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var xn,Rn,fn;ue.parameters={...ue.parameters,docs:{...(xn=ue.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(fn=(Rn=ue.parameters)==null?void 0:Rn.docs)==null?void 0:fn.source}}};var Cn,kn,jn;ce.parameters={...ce.parameters,docs:{...(Cn=ce.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(jn=(kn=ce.parameters)==null?void 0:kn.docs)==null?void 0:jn.source}}};var Mn,wn,Tn;de.parameters={...de.parameters,docs:{...(Mn=de.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Tn=(wn=de.parameters)==null?void 0:wn.docs)==null?void 0:Tn.source}}};var yn,Pn,Vn;me.parameters={...me.parameters,docs:{...(yn=me.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider h="calc(100vh - 16px * 3 - 14px)" isReversed orientation="vertical" />
    </>;
}`,...(Vn=(Pn=me.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Fn,_n,zn;ge.parameters={...ge.parameters,docs:{...(Fn=ge.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(zn=(_n=ge.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var En,In,$n;he.parameters={...he.parameters,docs:{...(En=he.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...($n=(In=he.parameters)==null?void 0:In.docs)==null?void 0:$n.source}}};var Dn,Bn,An;pe.parameters={...pe.parameters,docs:{...(Dn=pe.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(An=(Bn=pe.parameters)==null?void 0:Bn.docs)==null?void 0:An.source}}};var Nn,On,Hn;Se.parameters={...Se.parameters,docs:{...(Nn=Se.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(On=Se.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Ln,Un,qn;be.parameters={...be.parameters,docs:{...(Ln=be.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(qn=(Un=be.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Kn,Xn,Yn;ve.parameters={...ve.parameters,docs:{...(Kn=ve.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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

      <Tooltip label={\`\${value[0]}%\`} open={isOpen} placement="top">
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip label={\`\${value[1]}%\`} open={isOpen} placement="top">
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>;
}`,...(Yn=(Xn=ve.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Jn,Wn,Zn;xe.parameters={...xe.parameters,docs:{...(Jn=xe.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl helperMessage="Please select your preferred volume." isDisabled label="volume (sound)">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Zn=(Wn=xe.parameters)==null?void 0:Wn.docs)==null?void 0:Zn.source}}};var Gn,Qn,er;Re.parameters={...Re.parameters,docs:{...(Gn=Re.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl helperMessage="Please select your preferred volume." isReadOnly label="volume (sound)">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(er=(Qn=Re.parameters)==null?void 0:Qn.docs)==null?void 0:er.source}}};var nr,rr,ar;fe.parameters={...fe.parameters,docs:{...(nr=fe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl errorMessage="Min volume should be set to 20 or higher." isInvalid={value[0] < 20} label="volume (sound)">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(ar=(rr=fe.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,sr,or;Ce.parameters={...Ce.parameters,docs:{...(tr=Ce.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(or=(sr=Ce.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var lr,ir,ur;ke.parameters={...ke.parameters,docs:{...(lr=ke.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumbProps={{
      boxSize: "6",
      children: <ActivityIcon />,
      color: "blue.500"
    }} />

      <RangeSlider>
        <RangeSliderStartThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(ur=(ir=ke.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;je.parameters={...je.parameters,docs:{...(cr=je.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=je.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;Me.parameters={...Me.parameters,docs:{...(gr=Me.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(pr=(hr=Me.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,br,vr;we.parameters={...we.parameters,docs:{...(Sr=we.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(vr=(br=we.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var xr,Rr,fr;Te.parameters={...Te.parameters,docs:{...(xr=Te.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(fr=(Rr=Te.parameters)==null?void 0:Rr.docs)==null?void 0:fr.source}}};var Cr,kr,jr;ye.parameters={...ye.parameters,docs:{...(Cr=ye.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(jr=(kr=ye.parameters)==null?void 0:kr.docs)==null?void 0:jr.source}}};const Ct=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ct as __namedExportsOrder,le as basic,Ce as customColor,Me as customControl,je as customMark,ke as customThumb,ft as default,xe as isDisabled,fe as isInvalid,Re as isReadonly,Te as onChangeEnd,we as onChangeStart,ye as reactHookForm,pe as withBetweenThumbs,ce as withColorScheme,ie as withDefaultValue,Se as withFocusThumbOnChange,be as withMark,ge as withMinMax,de as withOrientation,me as withReversed,ue as withSize,he as withStep,ve as withTooltip};
