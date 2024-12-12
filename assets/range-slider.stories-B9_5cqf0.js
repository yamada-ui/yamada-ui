import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{u as Hr,C as Or}from"./index.esm-Dl1kyd6X.js";import{j as Lr,c as Ur}from"./components-m5tNVdqK.js";import{u as qr}from"./index-DKQLNlvR.js";import{u as Kr,c as Xr,b as Yr}from"./index-B_YN6e7D.js";import{u as Wr,f as Gr}from"./form-control-zj-lY-eQ.js";import{A as Jr,g as Qr,B as Xe,ag as cn,a5 as Zr,a6 as ea,b as W,c as re,a2 as na,q as Ye,n as ra,a as dn,P as aa,d as We,h as Ge}from"./factory-Nur_zO5a.js";import{f as O}from"./forward-ref-D13m8o2p.js";import{a as ta}from"./use-component-style-DXYrx7jC.js";import{o as sa}from"./theme-provider-BsBO7Bt7.js";import{c as mn,v as gn,r as la,p as oa}from"./number-CcP_arM8.js";import{m as ia}from"./use-var-BmU0CMcq.js";import{A as Je}from"./activity-D6sMMdcX.js";import{T as $}from"./text-62Futka0.js";import{C as Qe}from"./center-DbI1M6cv.js";import{F as hn}from"./flex-D0g4BNvT.js";import{B as ne}from"./button-CCbGPPx6.js";import{V as yr}from"./stack-C0yA_Fgo.js";import{u as ua}from"./index-gGKStiao.js";import{T as pn}from"./tooltip-8cg3dupo.js";import{F as Fe}from"./fieldset-BjUByqVp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-D-QJtIN2.js";import"./index-B1nZG4Mb.js";import"./use-checkbox-CGCpte5c.js";import"./index-BEKWAhRA.js";import"./factory-C7oui4wX.js";import"./proxy-BYKFXsWv.js";import"./index-hBuKIhm7.js";import"./index-S7lgn1rl.js";import"./select-T1HpgUPI.js";import"./select-list-CuZRFrrL.js";import"./index-Ci6jtn_l.js";import"./index-DdZUI5bP.js";import"./icon-M07mMfJs.js";import"./index-BMKmWsig.js";import"./popover-trigger-VZ6-C5a8.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./slide-fade-Cmuj6chS.js";import"./index-CpbJQdhj.js";import"./index-0izHGgc0.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Le3SFznY.js";import"./scale-fade-DZMuid-q.js";import"./index-X5oM7jx7.js";import"./index-DmyN1gVE.js";import"./index-CBbxfOTw.js";import"./portal-BYArVHbV.js";import"./index-ZuzByk-F.js";import"./event-C_48urmU.js";import"./createLucideIcon-C_T9K6g-.js";import"./loading-Bz0vGPrC.js";import"./visually-hidden-Dg9vUrmA.js";const ca=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:c,"aria-label":p,"aria-labelledby":R,"aria-valuetext":f,betweenThumbs:S=0,defaultValue:j,getAriaValueText:D,isReversed:B,max:d=100,min:m=0,orientation:E="horizontal",reversed:b,step:G=1,thumbSize:ae,value:$e,onChange:De,onChangeEnd:Be,onChangeStart:Ie,...L}=Wr(s);const{"aria-readonly":U,disabled:q,readOnly:P,required:te,onBlur:se,onFocus:le,...M}=na(L,Gr);if(j=j??[m+(d-m)/4,d-(d-m)/4],b??(b=B),d<m)throw new Error("Do not assign a number less than 'min' to 'max'");const Ae=Ye(Ie),J=Ye(Be),Ze=Ye(D),[Pr,oe]=qr({defaultValue:j,value:$e,onChange:De}),Vr=u.useId(),[Ne,en]=u.useState(!1),[Fr,nn]=u.useState(!1),He=!(q||P),Oe=(d-m)/10,K=G||(d-m)/100,rn=S*G,T=Pr.map(r=>mn(r,m,d)),[an,tn]=T,_r=T.map(r=>d-r+m),I=(b?_r:T).map(r=>gn(r,m,d)),zr=[{max:tn-rn,min:m},{max:d,min:an+rn}],x=E==="vertical",k=Kr({betweenThumbs:S,disabled:q,focusThumbOnChange:n,interactive:He,max:d,min:m,orientation:E,reversed:b,step:G,valueBounds:zr,values:T,vertical:x}),X=u.useRef(-1),Le=u.useRef(null),ie=u.useRef(null),Ue=u.useRef(null),A=Xr({getNodes:()=>{var t;const r=(t=ie.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=Vr),c??(c=a);const Q=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),qe=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Ke=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Yr(ie,{onMove:r=>{const t=X.current,{interactive:l}=k.current;if(!l||t==-1)return;const i=sn(r)||0;_(t,i),ln(t)},onSessionEnd:()=>{const{interactive:r,values:t}=k.current;r&&(en(!1),J(t))},onSessionStart:r=>{const{interactive:t,values:l}=k.current;if(!t)return;en(!0);const i=sn(r)||0,v=l.map(y=>Math.abs(y-i)),w=Math.min(...v);let g=v.indexOf(w);const C=v.filter(y=>y===w);C.length>1&&i>l[g]&&(g=g+C.length-1),X.current=g,_(g,i),ln(g),Ae(l)}});const sn=u.useCallback(r=>{var un;if(!Ue.current)return;const{max:t,min:l}=k.current;Le.current="pointer";const{bottom:i,height:v,left:w,width:g}=Ue.current.getBoundingClientRect(),{clientX:C,clientY:N}=((un=r.touches)==null?void 0:un[0])??r;let z=(x?i-N:C-w)/(x?v:g);return b&&(z=1-z),oa(z,l,t)},[k,x,b]),ln=u.useCallback(r=>{var i;if(r===-1||!n)return;const t=Q(r),l=(i=ie.current)==null?void 0:i.ownerDocument.getElementById(t);l&&setTimeout(()=>l.focus())},[n,Q]),_=u.useCallback((r,t)=>{const{interactive:l,valueBounds:i,values:v}=k.current;if(!l)return;const{max:w=100,min:g=0}=i[r]??{};t=parseFloat(la(t,g,K)),t=mn(t,g,w);const C=[...v];C[r]=t,oe(C)},[k,K,oe]),Z=u.useCallback((r,t=K)=>{const{values:l}=k.current,i=l[r];_(r,b?i-t:i+t)},[_,b,k,K]),ee=u.useCallback((r,t=K)=>{const{values:l}=k.current,i=l[r];_(r,b?i+t:i-t)},[_,b,k,K]),Er=u.useCallback(()=>oe(j),[j,oe]),on=u.useCallback(r=>{const t=X.current,{valueBounds:l}=k.current,{max:i=100,min:v=0}=l[t]??{},g={ArrowDown:()=>ee(t),ArrowLeft:()=>ee(t),ArrowRight:()=>Z(t),ArrowUp:()=>Z(t),End:()=>_(t,i),Home:()=>_(t,v),PageDown:()=>ee(t,Oe),PageUp:()=>Z(t,Oe)}[r.key];g&&(r.preventDefault(),r.stopPropagation(),g(r),Le.current="keyboard")},[_,k,ee,Z,Oe]);ra(()=>{const{values:r}=k.current;Le.current==="keyboard"&&J(r)},[an,tn,J]);const $r=u.useCallback((r={},t=null)=>{let l="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if(A.length){const g=x?"height":"width",C={height:0,width:0},{height:N,width:y}=A.reduce((Y=C,z=C)=>Y[g]>z[g]?Y:z,C)??{};y&&(l=`${y}px`),N&&(i=`${N}px`)}const v=x?{paddingLeft:`calc(${l} / 2)`,paddingRight:`calc(${l} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},w={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...v};return{...L,...r,id:`slider-container-${a}`,ref:dn(t,ie),style:w,tabIndex:-1,vars:ia(L.vars,[{name:"thumb-size",token:"sizes",value:ae,__prefix:"ui"}])}},[a,x,L,ae,A]),Dr=u.useCallback(({index:r,...t},l=null)=>({"aria-readonly":U,...M,...t,id:qe(r),ref:l,type:"hidden",name:aa(c)?c[r]:`${c}-${r}`,disabled:q,readOnly:P,required:te,value:T[r]}),[U,q,qe,c,P,te,M,T]),Br=u.useCallback((r={},t=null)=>{const l={...r.style,position:"absolute",...x?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${a}`,ref:dn(t,Ue),style:l}},[a,x,M]),Ir=u.useCallback((r={},t=null)=>{const l=Math.abs(I[1]-I[0]),i=b?100-I[0]:I[0],v={...r.style,position:"absolute",...x?{height:`${l}%`,left:"50%",transform:"translateX(-50%)",...b?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${l}%`,...b?{right:`${i}%`}:{left:`${i}%`}}};return{...M,...r,id:`slider-filled-track-${a}`,ref:t,style:v}},[a,b,x,M,I]),Ar=u.useCallback((r,t=null)=>{let l=gn(r.value,m,d);l=b?100-l:l;const i={...r.style,pointerEvents:"none",position:"absolute",...x?{bottom:`${l}%`}:{left:`${l}%`}};return{...M,...r,id:Ke(r.value),ref:t,style:i,"aria-hidden":!0,"data-highlighted":We(T[0]<=r.value&&r.value<=T[1]),"data-invalid":We(r.value<m||d<r.value)}},[Ke,b,x,d,m,M,T]),Nr=u.useCallback(({index:r,...t},l=null)=>{var Y,z;const i=I[r];let v="var(--ui-thumb-size)",w="var(--ui-thumb-size)";A[r]&&(v=`${(Y=A[r])==null?void 0:Y.width}px`,w=`${(z=A[r])==null?void 0:z.height}px`);const g=`calc(${i}% - (${w} / 2))`,C=`calc(${i}% - (${v} / 2))`,N={...t.style,position:"absolute",touchAction:"none",userSelect:"none",...x?{bottom:g}:{left:C}},y=T[r];if(y==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":p??"Slider thumb","aria-labelledby":R,"aria-readonly":U,...M,...t,id:Q(r),ref:l,style:N,"aria-orientation":E,"aria-valuemax":d,"aria-valuemin":m,"aria-valuenow":y,"aria-valuetext":f??Ze(y)??y.toString(),"data-active":We(Ne&&n&&X.current===r),role:"slider",tabIndex:He&&n?0:void 0,onBlur:Ge(t.onBlur,se,()=>{X.current=-1,nn(!1)}),onFocus:Ge(t.onFocus,le,()=>{X.current=r,nn(!0)}),onKeyDown:Ge(t.onKeyDown,on)}},[I,A,x,T,p,R,U,M,Q,E,d,m,f,Ze,Ne,n,He,se,le,on]);return{dragging:Ne,focused:Fr,getInputId:qe,getMarkerId:Ke,getThumbId:Q,reset:Er,stepDown:ee,stepUp:Z,values:T,vertical:x,getContainerProps:$r,getFilledTrackProps:Ir,getInputProps:Dr,getMarkProps:Ar,getThumbProps:Nr,getTrackProps:Br}},[da,_e]=Jr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),o=O((n,s)=>{const[a,c]=ta("RangeSlider",n),{className:p,children:R,filledTrackColor:f,thumbColor:S,thumbSize:j,trackColor:D,trackSize:B,filledTrackProps:d,inputProps:m,thumbProps:E,trackProps:b,...G}=sa(c),{vertical:ae,getContainerProps:$e,getFilledTrackProps:De,getInputProps:Be,getMarkProps:Ie,getThumbProps:L,getTrackProps:U}=ca({...G,thumbSize:Lr(j,a)}),q={...a.container},P=Qr(R),te=Xe(P,H),se=Xe(P,V),le=Xe(P,F),M=cn(P,V),Ae=cn(P,F),J=Zr(P)?R:ea(P,H,V,F);return e.jsx(da,{value:{filledTrackColor:f,styles:a,thumbColor:S,thumbSize:j,trackColor:D,trackSize:B,vertical:ae,filledTrackProps:d,getFilledTrackProps:De,getInputProps:Be,getMarkProps:Ie,getThumbProps:L,getTrackProps:U,inputProps:m,thumbProps:E,trackProps:b},children:e.jsxs(W.div,{className:re("ui-slider",p),__css:q,...$e({},s),children:[te??e.jsx(H,{}),J,se??(M?null:e.jsx(V,{})),le??(Ae?null:e.jsx(F,{}))]})})});o.displayName="RangeSlider";o.__ui__="RangeSlider";const H=O(({className:n,children:s,filledTrackProps:a,...c},p)=>{const{styles:R,trackColor:f,trackSize:S,vertical:j,getTrackProps:D,trackProps:B}=_e(),d={...R.track};return e.jsx(W.div,{className:re("ui-slider__track",n),__css:d,...D({...f?{bg:f}:{},...S?j?{w:S}:{h:S}:{},...B,...c},p),children:s??e.jsx(ze,{...a})})});H.displayName="RangeSliderTrack";H.__ui__="RangeSliderTrack";const ze=O(({className:n,...s},a)=>{const{filledTrackColor:c,styles:p,filledTrackProps:R,getFilledTrackProps:f}=_e(),S={...p.filledTrack};return e.jsx(W.div,{className:re("ui-slider__track-filled",n),__css:S,...f({...c?{bg:c}:{},...R,...s},a)})});ze.displayName="RangeSliderFilledTrack";ze.__ui__="RangeSliderFilledTrack";const h=O(({className:n,...s},a)=>{const{styles:c,getMarkProps:p}=_e(),R={alignItems:"center",display:"inline-flex",justifyContent:"center",...c.mark};return e.jsx(W.div,{className:re("ui-slider__mark",n),__css:R,...p(s,a)})});h.displayName="RangeSliderMark";h.__ui__="RangeSliderMark";const Ee=O(({className:n,children:s,index:a,...c},p)=>{const{styles:R,thumbColor:f,thumbSize:S,getInputProps:j,getThumbProps:D,inputProps:B,thumbProps:d}=_e(),m={...R.thumb},{children:E}=d??{};return e.jsxs(W.div,{className:re("ui-slider__thumb",n),__css:m,...D({index:a,...f?{bg:f}:{},...S?{boxSize:S}:{},...d,...c},p),children:[e.jsx(W.input,{...j({...B,index:a},p)}),s??E]})});Ee.displayName="RangeSliderThumb";Ee.__ui__="RangeSliderThumb";const V=O((n,s)=>e.jsx(Ee,{ref:s,index:0,...n}));V.displayName="RangeSliderStartThumb";V.__ui__="RangeSliderStartThumb";const F=O((n,s)=>e.jsx(Ee,{ref:s,index:1,...n}));F.displayName="RangeSliderEndThumb";F.__ui__="RangeSliderEndThumb";const St={component:o,title:"Components / Forms / RangeSlider"},ue=()=>e.jsx(o,{}),ce=()=>e.jsx(o,{defaultValue:[10,90]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",defaultValue:[0,25]}),e.jsx(o,{size:"md",defaultValue:[25,50]}),e.jsx(o,{size:"lg",defaultValue:[50,75]})]}),me=()=>e.jsx(e.Fragment,{children:Ur.map(n=>e.jsx(o,{colorScheme:n},n))}),ge=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReversed:!0}),e.jsx(o,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),pe=()=>{const[n,s]=u.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{max:200,min:0,value:n,onChange:s})]})},Se=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{step:5,value:n,onChange:s})]})},be=()=>e.jsx(o,{betweenThumbs:10}),xe=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Qe,{gap:"xl",w:"full",children:[e.jsxs(hn,{align:"center",direction:"column",gap:"sm",children:[e.jsx($,{children:"Min"}),e.jsxs(Qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(hn,{align:"center",direction:"column",gap:"sm",children:[e.jsx($,{children:"Max"}),e.jsxs(Qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},ve=()=>e.jsxs(yr,{gap:"lg",children:[e.jsxs(o,{size:"sm",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"md",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"lg",children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),Re=()=>{const[n,s]=u.useState([25,75]),[a,{off:c,on:p}]=ua(!1);return e.jsxs(o,{mt:"10",value:n,onChange:s,onMouseEnter:p,onMouseLeave:c,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(pn,{label:`${n[0]}%`,open:a,placement:"top",children:e.jsx(V,{})}),e.jsx(pn,{label:`${n[1]}%`,open:a,placement:"top",children:e.jsx(F,{})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred price range.",isDisabled:!0,legend:"Hotel Price Range",children:e.jsx(o,{})})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0}),e.jsx(Fe,{helperMessage:"Please select your preferred price range.",isReadOnly:!0,legend:"Hotel Price Range",children:e.jsx(o,{})})]}),Ce=()=>{const[n,s]=u.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Fe,{errorMessage:"Minimum price should be set to 20 or higher.",isInvalid:n[0]<20,legend:"Hotel Price Range",children:e.jsx(o,{value:n,onChange:s})})]})},je=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(o,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(o,{children:[e.jsx(H,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(V,{bg:"blue.700"}),e.jsx(F,{bg:"blue.700"})]}),e.jsxs(o,{children:[e.jsx(H,{bg:"red.200",children:e.jsx(ze,{bg:"red.500"})}),e.jsx(V,{bg:"red.700"}),e.jsx(F,{bg:"red.700"})]})]}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{thumbProps:{boxSize:"6",children:e.jsx(Je,{}),color:"blue.500"}}),e.jsxs(o,{children:[e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Je,{})}),e.jsx(F,{boxSize:"6",color:"blue.500",children:e.jsx(Je,{})})]})]}),Te=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(o,{mt:"10",value:n,onChange:s,children:[e.jsx(h,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(h,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(h,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(h,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},we=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{value:n,onChange:s})]})},ye=()=>{const[n,s]=u.useState([25,75]),[a,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(o,{value:n,onChange:s,onChangeStart:c})]})},Pe=()=>{const[n,s]=u.useState([25,75]),[a,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(o,{value:n,onChange:s,onChangeEnd:c})]})},Ve=()=>{var f;const n={rangeSlider:[25,75]},{control:s,formState:{errors:a},handleSubmit:c,watch:p}=Hr({defaultValues:n}),R=S=>console.log("submit:",S);return console.log("watch:",p()),e.jsxs(yr,{as:"form",onSubmit:c(R),children:[e.jsx(Fe,{errorMessage:(f=a.rangeSlider)==null?void 0:f.message,isInvalid:!!a.rangeSlider,legend:"Hotel Price Range",children:e.jsx(Or,{name:"rangeSlider",control:s,render:({field:S})=>e.jsx(o,{...S})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Sn,bn,xn;ue.parameters={...ue.parameters,docs:{...(Sn=ue.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(xn=(bn=ue.parameters)==null?void 0:bn.docs)==null?void 0:xn.source}}};var vn,Rn,fn;ce.parameters={...ce.parameters,docs:{...(vn=ce.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(fn=(Rn=ce.parameters)==null?void 0:Rn.docs)==null?void 0:fn.source}}};var kn,Cn,jn;de.parameters={...de.parameters,docs:{...(kn=de.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(jn=(Cn=de.parameters)==null?void 0:Cn.docs)==null?void 0:jn.source}}};var Mn,Tn,wn;me.parameters={...me.parameters,docs:{...(Mn=me.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(wn=(Tn=me.parameters)==null?void 0:Tn.docs)==null?void 0:wn.source}}};var yn,Pn,Vn;ge.parameters={...ge.parameters,docs:{...(yn=ge.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Vn=(Pn=ge.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Fn,_n,zn;he.parameters={...he.parameters,docs:{...(Fn=he.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider h="calc(100vh - 16px * 3 - 14px)" isReversed orientation="vertical" />
    </>;
}`,...(zn=(_n=he.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var En,$n,Dn;pe.parameters={...pe.parameters,docs:{...(En=pe.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(Dn=($n=pe.parameters)==null?void 0:$n.docs)==null?void 0:Dn.source}}};var Bn,In,An;Se.parameters={...Se.parameters,docs:{...(Bn=Se.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...(An=(In=Se.parameters)==null?void 0:In.docs)==null?void 0:An.source}}};var Nn,Hn,On;be.parameters={...be.parameters,docs:{...(Nn=be.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(On=(Hn=be.parameters)==null?void 0:Hn.docs)==null?void 0:On.source}}};var Ln,Un,qn;xe.parameters={...xe.parameters,docs:{...(Ln=xe.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(qn=(Un=xe.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Kn,Xn,Yn;ve.parameters={...ve.parameters,docs:{...(Kn=ve.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Xn=ve.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};var Wn,Gn,Jn;Re.parameters={...Re.parameters,docs:{...(Wn=Re.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Jn=(Gn=Re.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Zn,er;fe.parameters={...fe.parameters,docs:{...(Qn=fe.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <Fieldset helperMessage="Please select your preferred price range." isDisabled legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(er=(Zn=fe.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;ke.parameters={...ke.parameters,docs:{...(nr=ke.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <Fieldset helperMessage="Please select your preferred price range." isReadOnly legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(ar=(rr=ke.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,sr,lr;Ce.parameters={...Ce.parameters,docs:{...(tr=Ce.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <Fieldset errorMessage="Minimum price should be set to 20 or higher." isInvalid={value[0] < 20} legend="Hotel Price Range">
        <RangeSlider value={value} onChange={onChange} />
      </Fieldset>
    </>;
}`,...(lr=(sr=Ce.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var or,ir,ur;je.parameters={...je.parameters,docs:{...(or=je.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
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
}`,...(ur=(ir=je.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;Me.parameters={...Me.parameters,docs:{...(cr=Me.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=Me.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;Te.parameters={...Te.parameters,docs:{...(gr=Te.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(pr=(hr=Te.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,br,xr;we.parameters={...we.parameters,docs:{...(Sr=we.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(xr=(br=we.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var vr,Rr,fr;ye.parameters={...ye.parameters,docs:{...(vr=ye.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(fr=(Rr=ye.parameters)==null?void 0:Rr.docs)==null?void 0:fr.source}}};var kr,Cr,jr;Pe.parameters={...Pe.parameters,docs:{...(kr=Pe.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(jr=(Cr=Pe.parameters)==null?void 0:Cr.docs)==null?void 0:jr.source}}};var Mr,Tr,wr;Ve.parameters={...Ve.parameters,docs:{...(Mr=Ve.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
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
}`,...(wr=(Tr=Ve.parameters)==null?void 0:Tr.docs)==null?void 0:wr.source}}};const bt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{bt as __namedExportsOrder,ue as basic,je as customColor,we as customControl,Te as customMark,Me as customThumb,St as default,fe as isDisabled,Ce as isInvalid,ke as isReadonly,Pe as onChangeEnd,ye as onChangeStart,Ve as reactHookForm,be as withBetweenThumbs,me as withColorScheme,ce as withDefaultValue,xe as withFocusThumbOnChange,ve as withMark,pe as withMinMax,ge as withOrientation,he as withReversed,de as withSize,Se as withStep,Re as withTooltip};
