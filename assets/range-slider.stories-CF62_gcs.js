import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as $r}from"./index-gGKStiao.js";import{r as c}from"./index-ClcD9ViR.js";import{u as Dr,C as Br}from"./index.esm-CEdvtQ_U.js";import{j as Ar,c as Nr}from"./components-_imAxZxe.js";import{u as Hr}from"./index-DPt_fcIQ.js";import{u as Or,c as Lr,b as Ur}from"./index-BCBmayc8.js";import{c as qr,f as Kr}from"./form-control-Y8qD5MxJ.js";import{p as Xr,q as Yr,w as qe,aa as sn,ab as Jr,ac as Wr,b as X,c as re,Z as Zr,k as on,f as Gr,a as ln,J as Qr,d as Ke,h as Xe}from"./factory-COau3w21.js";import{f as B}from"./forward-ref-D13m8o2p.js";import{a as ea}from"./use-component-style-CLSKeq_H.js";import{o as na}from"./theme-provider-CNI9L2WW.js";import{c as cn,v as un,r as ra,p as aa}from"./number-CcP_arM8.js";import{m as ta}from"./use-var-YCfkKbSC.js";import{A as Ye}from"./activity-C33ILIYv.js";import{T as z}from"./text-BnztNdZ-.js";import{C as Je}from"./center-CSG2P-cD.js";import{F as dn}from"./flex-BgJeD3no.js";import{B as ne}from"./button-C2qeh-k-.js";import{V as Mr}from"./stack-DfTvLKXJ.js";import{T as mn}from"./tooltip-DqnSdWX7.js";import{F as Pe}from"./fieldset-fD6gM2Jx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BcE809qD.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-eJsiD_iL.js";import"./index-B5Fb0Sgv.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-CW1g4LYM.js";import"./index-CA_fCdqy.js";import"./Combination-CkmEMpJG.js";import"./loading-DYtJ9fc2.js";import"./icon-BodRPJCf.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-CgvdJ0pj.js";import"./index-ZuzByk-F.js";import"./factory-ep9rrzy9.js";import"./notice-0nBeSUXU.js";import"./alert-Br92M73P.js";import"./triangle-alert-D-rdrXiJ.js";import"./createLucideIcon-Czt4prMK.js";import"./close-button-EOT3XTCt.js";import"./use-ripple-D0covPjN.js";import"./container-9UL7bQcu.js";import"./box-Co1KKng-.js";import"./checkbox-Dlwy-uIR.js";import"./index-CRS5qAAq.js";import"./index-Btt-sfjQ.js";import"./index-B5Z2HpMN.js";import"./select-DiVSeaVw.js";import"./select-list-CJRoYFPx.js";import"./index-C58se0b8.js";import"./index-qyuJ8aiN.js";import"./index-Blij8Q7p.js";import"./popover-trigger-C0a8uwwS.js";import"./slide-fade-DzakJmAy.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./scale-fade-DAfdo16Z.js";import"./index-a5RVC8cz.js";import"./index-Bt_V34Vb.js";import"./index-CYDuQAfY.js";import"./event-C_48urmU.js";import"./visually-hidden-CyKzG3XZ.js";const sa=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,"aria-valuetext":b,betweenThumbs:f=0,defaultValue:x,isReversed:u,max:d=100,min:g=0,orientation:T="horizontal",step:y=1,thumbSize:A,value:Y,onChange:ze,onChangeEnd:Ee,onChangeStart:Ie,...N}=qr(s);const{"aria-readonly":H,disabled:O,readOnly:J,required:ae,onBlur:te,onFocus:se,...S}=Zr(N,Kr);if(x=x??[g+(d-g)/4,d-(d-g)/4],d<g)throw new Error("Do not assign a number less than 'min' to 'max'");const $e=on(Ie),W=on(Ee),[De,L]=Hr({defaultValue:x,value:Y,onChange:ze}),Be=c.useId(),[Z,We]=c.useState(!1),[wr,Ze]=c.useState(!1),Ae=!(O||J),Ne=(d-g)/10,U=y||(d-g)/100,Ge=f*y,j=De.map(r=>cn(r,g,d)),[Qe,en]=j,Tr=j.map(r=>d-r+g),E=(u?Tr:j).map(r=>un(r,g,d)),yr=[{max:en-Ge,min:g},{max:d,min:Qe+Ge}],v=T==="vertical",k=Or({betweenThumbs:f,disabled:O,focusThumbOnChange:n,isInteractive:Ae,isReversed:u,isVertical:v,max:d,min:g,orientation:T,step:y,valueBounds:yr,values:j}),q=c.useRef(-1),He=c.useRef(null),oe=c.useRef(null),Oe=c.useRef(null),I=Lr({getNodes:()=>{var t;const r=(t=oe.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=Be),m??(m=a);const G=c.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Le=c.useCallback(r=>`slider-input-${a}-${r}`,[a]),Ue=c.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ur(oe,{onMove:r=>{const t=q.current,{isInteractive:o}=k.current;if(!o||t==-1)return;const i=nn(r)||0;F(t,i),rn(t)},onSessionEnd:()=>{const{isInteractive:r,values:t}=k.current;r&&(We(!1),W(t))},onSessionStart:r=>{const{isInteractive:t,values:o}=k.current;if(!t)return;We(!0);const i=nn(r)||0,R=o.map(w=>Math.abs(w-i)),M=Math.min(...R);let p=R.indexOf(M);const C=R.filter(w=>w===M);C.length>1&&i>o[p]&&(p=p+C.length-1),q.current=p,F(p,i),rn(p),$e(o)}});const nn=c.useCallback(r=>{var tn;if(!Oe.current)return;const{max:t,min:o}=k.current;He.current="pointer";const{bottom:i,height:R,left:M,width:p}=Oe.current.getBoundingClientRect(),{clientX:C,clientY:$}=((tn=r.touches)==null?void 0:tn[0])??r;let _=(v?i-$:C-M)/(v?R:p);return u&&(_=1-_),aa(_,o,t)},[k,v,u]),rn=c.useCallback(r=>{var i;if(r===-1||!n)return;const t=G(r),o=(i=oe.current)==null?void 0:i.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[n,G]),F=c.useCallback((r,t)=>{const{isInteractive:o,valueBounds:i,values:R}=k.current;if(!o)return;const{max:M=100,min:p=0}=i[r]??{};t=parseFloat(ra(t,p,U)),t=cn(t,p,M);const C=[...R];C[r]=t,L(C)},[k,U,L]),Q=c.useCallback((r,t=U)=>{const{values:o}=k.current,i=o[r];F(r,u?i-t:i+t)},[F,u,k,U]),ee=c.useCallback((r,t=U)=>{const{values:o}=k.current,i=o[r];F(r,u?i+t:i-t)},[F,u,k,U]),Pr=c.useCallback(()=>L(x),[x,L]),an=c.useCallback(r=>{const t=q.current,{valueBounds:o}=k.current,{max:i=100,min:R=0}=o[t]??{},p={ArrowDown:()=>ee(t),ArrowLeft:()=>ee(t),ArrowRight:()=>Q(t),ArrowUp:()=>Q(t),End:()=>F(t,i),Home:()=>F(t,R),PageDown:()=>ee(t,Ne),PageUp:()=>Q(t,Ne)}[r.key];p&&(r.preventDefault(),r.stopPropagation(),p(r),He.current="keyboard")},[F,k,ee,Q,Ne]);Gr(()=>{const{values:r}=k.current;He.current==="keyboard"&&W(r)},[Qe,en,W]);const Vr=c.useCallback((r={},t=null)=>{let o="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if(I.length){const p=v?"height":"width",C={height:0,width:0},{height:$,width:w}=I.reduce((K=C,_=C)=>K[p]>_[p]?K:_,C)??{};w&&(o=`${w}px`),$&&(i=`${$}px`)}const R=v?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},M={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...R};return{...N,...r,id:`slider-container-${a}`,ref:ln(t,oe),style:M,tabIndex:-1,vars:ta(N.vars,[{name:"thumb-size",token:"sizes",value:A,__prefix:"ui"}])}},[a,v,N,A,I]),Fr=c.useCallback(({index:r,...t},o=null)=>({"aria-readonly":H,...S,...t,id:Le(r),ref:o,type:"hidden",name:Qr(m)?m[r]:`${m}-${r}`,disabled:O,readOnly:J,required:ae,value:j[r]}),[H,O,Le,m,J,ae,S,j]),_r=c.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...v?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...S,...r,id:`slider-track-${a}`,ref:ln(t,Oe),style:o}},[a,v,S]),zr=c.useCallback((r={},t=null)=>{const o=Math.abs(E[1]-E[0]),i=u?100-E[0]:E[0],R={...r.style,position:"absolute",...v?{height:`${o}%`,left:"50%",transform:"translateX(-50%)",...u?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...u?{right:`${i}%`}:{left:`${i}%`}}};return{...S,...r,id:`slider-filled-track-${a}`,ref:t,style:R}},[a,u,v,S,E]),Er=c.useCallback((r,t=null)=>{let o=un(r.value,g,d);o=u?100-o:o;const i={...r.style,pointerEvents:"none",position:"absolute",...v?{bottom:`${o}%`}:{left:`${o}%`}};return{...S,...r,id:Ue(r.value),ref:t,style:i,"aria-hidden":!0,"data-highlighted":Ke(j[0]<=r.value&&r.value<=j[1]),"data-invalid":Ke(r.value<g||d<r.value)}},[Ue,u,v,d,g,S,j]),Ir=c.useCallback(({index:r,...t},o=null)=>{var K,_;const i=E[r];let R="var(--ui-thumb-size)",M="var(--ui-thumb-size)";I[r]&&(R=`${(K=I[r])==null?void 0:K.width}px`,M=`${(_=I[r])==null?void 0:_.height}px`);const p=`calc(${i}% - (${M} / 2))`,C=`calc(${i}% - (${R} / 2))`,$={...t.style,position:"absolute",touchAction:"none",userSelect:"none",...v?{bottom:p}:{left:C}},w=j[r];if(w==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":H,...S,...t,id:G(r),ref:o,style:$,"aria-orientation":T,"aria-valuemax":d,"aria-valuemin":g,"aria-valuenow":w,"aria-valuetext":b??w.toString(),"data-active":Ke(Z&&n&&q.current===r),role:"slider",tabIndex:Ae&&n?0:void 0,onBlur:Xe(t.onBlur,te,()=>{q.current=-1,Ze(!1)}),onFocus:Xe(t.onFocus,se,()=>{q.current=r,Ze(!0)}),onKeyDown:Xe(t.onKeyDown,an)}},[E,I,v,j,H,S,G,Ae,n,g,d,Z,T,b,an,se,te]);return{getInputId:Le,getMarkerId:Ue,getThumbId:G,isDragging:Z,isFocused:wr,isVertical:v,reset:Pr,stepDown:ee,stepUp:Q,values:j,getContainerProps:Vr,getFilledTrackProps:zr,getInputProps:Fr,getMarkProps:Er,getThumbProps:Ir,getTrackProps:_r}},[oa,Ve]=Xr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=B((n,s)=>{const[a,m]=ea("RangeSlider",n),{className:b,children:f,filledTrackColor:x,thumbColor:u,thumbSize:d,trackColor:g,trackSize:T,filledTrackProps:y,inputProps:A,thumbProps:Y,trackProps:ze,...Ee}=na(m),{isVertical:Ie,getContainerProps:N,getFilledTrackProps:H,getInputProps:O,getMarkProps:J,getThumbProps:ae,getTrackProps:te}=sa({...Ee,thumbSize:Ar(d,a)}),se={...a.container},S=Yr(f),$e=qe(S,D),W=qe(S,P),De=qe(S,V),L=sn(S,P),Be=sn(S,V),Z=Jr(S)?f:Wr(S,D,P,V);return e.jsx(oa,{value:{filledTrackColor:x,isVertical:Ie,styles:a,thumbColor:u,thumbSize:d,trackColor:g,trackSize:T,filledTrackProps:y,getFilledTrackProps:H,getInputProps:O,getMarkProps:J,getThumbProps:ae,getTrackProps:te,inputProps:A,thumbProps:Y,trackProps:ze},children:e.jsxs(X.div,{className:re("ui-slider",b),__css:se,...N({},s),children:[$e??e.jsx(D,{}),Z,W??(L?null:e.jsx(P,{})),De??(Be?null:e.jsx(V,{}))]})})});l.displayName="RangeSlider";l.__ui__="RangeSlider";const D=B(({className:n,children:s,filledTrackProps:a,...m},b)=>{const{isVertical:f,styles:x,trackColor:u,trackSize:d,getTrackProps:g,trackProps:T}=Ve(),y={...x.track};return e.jsx(X.div,{className:re("ui-slider__track",n),__css:y,...g({...u?{bg:u}:{},...d?f?{w:d}:{h:d}:{},...T,...m},b),children:s??e.jsx(Fe,{...a})})});D.displayName="RangeSliderTrack";D.__ui__="RangeSliderTrack";const Fe=B(({className:n,...s},a)=>{const{filledTrackColor:m,styles:b,filledTrackProps:f,getFilledTrackProps:x}=Ve(),u={...b.filledTrack};return e.jsx(X.div,{className:re("ui-slider__track-filled",n),__css:u,...x({...m?{bg:m}:{},...f,...s},a)})});Fe.displayName="RangeSliderFilledTrack";Fe.__ui__="RangeSliderFilledTrack";const h=B(({className:n,...s},a)=>{const{styles:m,getMarkProps:b}=Ve(),f={alignItems:"center",display:"inline-flex",justifyContent:"center",...m.mark};return e.jsx(X.div,{className:re("ui-slider__mark",n),__css:f,...b(s,a)})});h.displayName="RangeSliderMark";h.__ui__="RangeSliderMark";const _e=B(({className:n,children:s,index:a,...m},b)=>{const{styles:f,thumbColor:x,thumbSize:u,getInputProps:d,getThumbProps:g,inputProps:T,thumbProps:y}=Ve(),A={...f.thumb},{children:Y}=y??{};return e.jsxs(X.div,{className:re("ui-slider__thumb",n),__css:A,...g({index:a,...x?{bg:x}:{},...u?{boxSize:u}:{},...y,...m},b),children:[e.jsx(X.input,{...d({...T,index:a},b)}),s??Y]})});_e.displayName="RangeSliderThumb";_e.__ui__="RangeSliderThumb";const P=B((n,s)=>e.jsx(_e,{ref:s,index:0,...n}));P.displayName="RangeSliderStartThumb";P.__ui__="RangeSliderStartThumb";const V=B((n,s)=>e.jsx(_e,{ref:s,index:1,...n}));V.displayName="RangeSliderEndThumb";V.__ui__="RangeSliderEndThumb";const Ct={component:l,title:"Components / Forms / RangeSlider"},le=()=>e.jsx(l,{}),ie=()=>e.jsx(l,{defaultValue:[10,90]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),ue=()=>e.jsx(e.Fragment,{children:Nr.map(n=>e.jsx(l,{colorScheme:n},n))}),de=()=>e.jsx(l,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),ge=()=>{const[n,s]=c.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{max:200,min:0,value:n,onChange:s})]})},pe=()=>{const[n,s]=c.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{step:5,value:n,onChange:s})]})},he=()=>e.jsx(l,{betweenThumbs:10}),Se=()=>{const[n,s]=c.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Je,{gap:"xl",w:"full",children:[e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(z,{children:"Min"}),e.jsxs(Je,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(z,{children:"Max"}),e.jsxs(Je,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},be=()=>e.jsxs(Mr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),xe=()=>{const[n,s]=c.useState([25,75]),[a,{off:m,on:b}]=$r(!1);return e.jsxs(l,{mt:"10",value:n,onChange:s,onMouseEnter:b,onMouseLeave:m,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(mn,{label:`${n[0]}%`,open:a,placement:"top",children:e.jsx(P,{})}),e.jsx(mn,{label:`${n[1]}%`,open:a,placement:"top",children:e.jsx(V,{})})]})},ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Pe,{helperMessage:"Please select your preferred price range.",isDisabled:!0,legend:"Hotel Price Range",children:e.jsx(l,{})})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Pe,{helperMessage:"Please select your preferred price range.",isReadOnly:!0,legend:"Hotel Price Range",children:e.jsx(l,{})})]}),fe=()=>{const[n,s]=c.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Pe,{errorMessage:"Minimum price should be set to 20 or higher.",isInvalid:n[0]<20,legend:"Hotel Price Range",children:e.jsx(l,{value:n,onChange:s})})]})},ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(l,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(l,{children:[e.jsx(D,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(P,{bg:"blue.700"}),e.jsx(V,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(D,{bg:"red.200",children:e.jsx(Fe,{bg:"red.500"})}),e.jsx(P,{bg:"red.700"}),e.jsx(V,{bg:"red.700"})]})]}),Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{boxSize:"6",children:e.jsx(Ye,{}),color:"blue.500"}}),e.jsxs(l,{children:[e.jsx(P,{boxSize:"6",color:"blue.500",children:e.jsx(Ye,{})}),e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Ye,{})})]})]}),je=()=>{const[n,s]=c.useState([25,75]);return e.jsxs(l,{mt:"10",value:n,onChange:s,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},Me=()=>{const[n,s]=c.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},we=()=>{const[n,s]=c.useState([25,75]),[a,m]=c.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Te=()=>{const[n,s]=c.useState([25,75]),[a,m]=c.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},ye=()=>{var x;const n={rangeSlider:[25,75]},{control:s,formState:{errors:a},handleSubmit:m,watch:b}=Dr({defaultValues:n}),f=u=>console.log("submit:",u);return console.log("watch:",b()),e.jsxs(Mr,{as:"form",onSubmit:m(f),children:[e.jsx(Pe,{errorMessage:(x=a.rangeSlider)==null?void 0:x.message,isInvalid:!!a.rangeSlider,legend:"Hotel Price Range",children:e.jsx(Br,{name:"rangeSlider",control:s,render:({field:u})=>e.jsx(l,{...u})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var gn,pn,hn;le.parameters={...le.parameters,docs:{...(gn=le.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(hn=(pn=le.parameters)==null?void 0:pn.docs)==null?void 0:hn.source}}};var Sn,bn,xn;ie.parameters={...ie.parameters,docs:{...(Sn=ie.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(xn=(bn=ie.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var vn,Rn,fn;ce.parameters={...ce.parameters,docs:{...(vn=ce.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(fn=(Rn=ce.parameters)==null?void 0:Rn.docs)==null?void 0:fn.source}}};var kn,Cn,jn;ue.parameters={...ue.parameters,docs:{...(kn=ue.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(jn=(Cn=ue.parameters)==null?void 0:Cn.docs)==null?void 0:jn.source}}};var Mn,wn,Tn;de.parameters={...de.parameters,docs:{...(Mn=de.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
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
}`,...(zn=(_n=ge.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var En,In,$n;pe.parameters={...pe.parameters,docs:{...(En=pe.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...($n=(In=pe.parameters)==null?void 0:In.docs)==null?void 0:$n.source}}};var Dn,Bn,An;he.parameters={...he.parameters,docs:{...(Dn=he.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(An=(Bn=he.parameters)==null?void 0:Bn.docs)==null?void 0:An.source}}};var Nn,Hn,On;Se.parameters={...Se.parameters,docs:{...(Nn=Se.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(On=(Hn=Se.parameters)==null?void 0:Hn.docs)==null?void 0:On.source}}};var Ln,Un,qn;be.parameters={...be.parameters,docs:{...(Ln=be.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(qn=(Un=be.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Kn,Xn,Yn;xe.parameters={...xe.parameters,docs:{...(Kn=xe.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Xn=xe.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Jn,Wn,Zn;ve.parameters={...ve.parameters,docs:{...(Jn=ve.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <Fieldset helperMessage="Please select your preferred price range." isDisabled legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(Zn=(Wn=ve.parameters)==null?void 0:Wn.docs)==null?void 0:Zn.source}}};var Gn,Qn,er;Re.parameters={...Re.parameters,docs:{...(Gn=Re.parameters)==null?void 0:Gn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <Fieldset helperMessage="Please select your preferred price range." isReadOnly legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(er=(Qn=Re.parameters)==null?void 0:Qn.docs)==null?void 0:er.source}}};var nr,rr,ar;fe.parameters={...fe.parameters,docs:{...(nr=fe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <Fieldset errorMessage="Minimum price should be set to 20 or higher." isInvalid={value[0] < 20} legend="Hotel Price Range">
        <RangeSlider value={value} onChange={onChange} />
      </Fieldset>
    </>;
}`,...(ar=(rr=fe.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,sr,or;ke.parameters={...ke.parameters,docs:{...(tr=ke.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(or=(sr=ke.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var lr,ir,cr;Ce.parameters={...Ce.parameters,docs:{...(lr=Ce.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
}`,...(cr=(ir=Ce.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var ur,dr,mr;je.parameters={...je.parameters,docs:{...(ur=je.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=je.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,pr,hr;Me.parameters={...Me.parameters,docs:{...(gr=Me.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(hr=(pr=Me.parameters)==null?void 0:pr.docs)==null?void 0:hr.source}}};var Sr,br,xr;we.parameters={...we.parameters,docs:{...(Sr=we.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(xr=(br=we.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var vr,Rr,fr;Te.parameters={...Te.parameters,docs:{...(vr=Te.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(fr=(Rr=Te.parameters)==null?void 0:Rr.docs)==null?void 0:fr.source}}};var kr,Cr,jr;ye.parameters={...ye.parameters,docs:{...(kr=ye.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.rangeSlider?.message} isInvalid={!!errors.rangeSlider} legend="Hotel Price Range">
        <Controller name="rangeSlider" control={control} render={({
        field
      }) => <RangeSlider {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(jr=(Cr=ye.parameters)==null?void 0:Cr.docs)==null?void 0:jr.source}}};const jt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{jt as __namedExportsOrder,le as basic,ke as customColor,Me as customControl,je as customMark,Ce as customThumb,Ct as default,ve as isDisabled,fe as isInvalid,Re as isReadonly,Te as onChangeEnd,we as onChangeStart,ye as reactHookForm,he as withBetweenThumbs,ue as withColorScheme,ie as withDefaultValue,Se as withFocusThumbOnChange,be as withMark,ge as withMinMax,de as withOrientation,me as withReversed,ce as withSize,pe as withStep,xe as withTooltip};
