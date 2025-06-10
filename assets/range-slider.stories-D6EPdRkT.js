import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as u}from"./index-Bv9Y92EF.js";import{u as Hr,C as Or}from"./index.esm-DdgAP9ly.js";import{j as Lr,c as Ur}from"./components-BAAl2FdL.js";import{u as Kr}from"./index-D3uVnNfI.js";import{u as Xr,c as Yr,b as qr}from"./index-DCkI3YJn.js";import{u as Qr,f as Wr}from"./form-control-C8eO6U25.js";import{f as D}from"./forward-ref-DH6f5tnY.js";import{a as Gr}from"./use-component-style-DHLtMqa5.js";import{o as Jr}from"./theme-provider-DsbwOWxu.js";import{g as Zr,C as qe,af as dn,a6 as ea,a7 as na,B as ra,b as X,c as ne,a3 as aa,s as Qe,o as ta,a as mn,Q as sa,d as We,h as Ge}from"./factory-7Z88KRtK.js";import{c as gn,v as hn,p as la,r as oa}from"./number-CcP_arM8.js";import{m as ia}from"./use-var-Bz9rJ8_M.js";import{A as Je}from"./activity-BtBZwSiv.js";import{T as E}from"./text-KN7rBBtq.js";import{C as Ze}from"./center-D6SfTFGO.js";import{F as pn}from"./flex-B0SWTXUi.js";import{B as ee}from"./button-nZ2ZqBRb.js";import{V as Pr}from"./stack-DL8tKm2J.js";import{u as ua}from"./index-YFprnXPi.js";import{T as Sn}from"./tooltip-Bqvs1x-w.js";import{F as Ve}from"./fieldset-BqeGYmPS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-Ds8SIjx6.js";import"./index-CQqf5rDh.js";import"./use-checkbox-Dj2PfqIK.js";import"./index-DNaxzNVT.js";import"./factory-UaNlpug7.js";import"./proxy-r-x5KraU.js";import"./index-CHX88LJr.js";import"./index-DrADDttQ.js";import"./select-Bx_8s32I.js";import"./select-list-DgjlmZ5-.js";import"./index-BdmKGyZV.js";import"./index-BhIdR6KT.js";import"./icon-DKuqv-9Z.js";import"./index-vKAUfVXn.js";import"./popover-trigger-T6UAq76Q.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./slide-fade-CwK7Wr_w.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./scale-fade-D309oxZP.js";import"./index-M_HQDTPf.js";import"./index-BimsXrcc.js";import"./index-B_yC7JIW.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./event-C_48urmU.js";import"./createLucideIcon-Bq8XVWwL.js";import"./loading-DVofVDF_.js";import"./visually-hidden-D8yDyhNx.js";const ca=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);const t=u.useId(),{id:c=t,name:g=c,"aria-label":R,"aria-labelledby":f,"aria-valuetext":S,betweenThumbs:_=0,max:d=100,min:m=0,defaultValue:P=[m+(d-m)/4,d-(d-m)/4],getAriaValueText:Y,isReversed:q,orientation:N="horizontal",reversed:b=q,step:Q=1,thumbSize:re,value:Ee,onChange:$e,onChangeEnd:Be,onChangeStart:Ae,...H}=Qr(s);if(d<m)throw new Error("Do not assign a number less than 'min' to 'max'");const{"aria-readonly":O,disabled:j,readOnly:W,required:ae,onBlur:te,onFocus:se,...M}=aa(H,Wr),[Ie,le]=Kr({defaultValue:P,value:Ee,onChange:$e}),[De,en]=u.useState(!1),[Vr,nn]=u.useState(!1),Ne=!(j||W),He=(d-m)/10,L=Q||(d-m)/100,rn=_*Q,T=Ie.map(r=>gn(r,m,d)),[an,tn]=T,Fr=T.map(r=>d-r+m),$=(b?Fr:T).map(r=>hn(r,m,d)),_r=[{max:tn-rn,min:m},{max:d,min:an+rn}],x=N==="vertical",k=Xr({betweenThumbs:_,disabled:j,focusThumbOnChange:n,interactive:Ne,max:d,min:m,orientation:N,reversed:b,step:Q,valueBounds:_r,values:T,vertical:x}),U=u.useRef(-1),Oe=u.useRef(null),oe=u.useRef(null),Le=u.useRef(null),B=Yr({getNodes:()=>{var a;const r=(a=oe.current)==null?void 0:a.querySelectorAll("[role=slider]");return r?Array.from(r):[]}}),zr=Qe(Ae),Ue=Qe(Be),sn=Qe(Y),G=u.useCallback(r=>`slider-thumb-${c}-${r}`,[c]),Ke=u.useCallback(r=>`slider-input-${c}-${r}`,[c]),Xe=u.useCallback(r=>`slider-marker-${c}-${r}`,[c]);qr(oe,{onMove:r=>{const a=U.current,{interactive:l}=k.current;if(!l||a==-1)return;const i=ln(r)||0;z(a,i),on(a)},onSessionEnd:()=>{const{interactive:r,values:a}=k.current;r&&(en(!1),Ue(a))},onSessionStart:r=>{const{interactive:a,values:l}=k.current;if(!a)return;en(!0);const i=ln(r)||0,v=l.map(y=>Math.abs(y-i)),w=Math.min(...v);let h=v.indexOf(w);const C=v.filter(y=>y===w);C.length>1&&i>l[h]&&(h=h+C.length-1),U.current=h,z(h,i),on(h),zr(l)}});const ln=u.useCallback(r=>{var cn;if(!Le.current)return;const{max:a,min:l}=k.current;Oe.current="pointer";const{bottom:i,height:v,left:w,width:h}=Le.current.getBoundingClientRect(),{clientX:C,clientY:A}=((cn=r.touches)==null?void 0:cn[0])??r;let K=(x?i-A:C-w)/(x?v:h);return b&&(K=1-K),la(K,l,a)},[k,x,b]),on=u.useCallback(r=>{var i;if(r===-1||!n)return;const a=G(r),l=(i=oe.current)==null?void 0:i.ownerDocument.getElementById(a);l&&setTimeout(()=>l.focus())},[n,G]),z=u.useCallback((r,a)=>{const{interactive:l,valueBounds:i,values:v}=k.current;if(!l)return;const{max:w=100,min:h=0}=i[r]??{};a=parseFloat(oa(a,h,L)),a=gn(a,h,w);const C=[...v];C[r]=a,le(C)},[k,L,le]),J=u.useCallback((r,a=L)=>{const{values:l}=k.current,i=l[r];z(r,b?i-a:i+a)},[z,b,k,L]),Z=u.useCallback((r,a=L)=>{const{values:l}=k.current,i=l[r];z(r,b?i+a:i-a)},[z,b,k,L]),Er=u.useCallback(()=>le(P),[P,le]),un=u.useCallback(r=>{const a=U.current,{valueBounds:l}=k.current,{max:i=100,min:v=0}=l[a]??{},h={ArrowDown:()=>Z(a),ArrowLeft:()=>Z(a),ArrowRight:()=>J(a),ArrowUp:()=>J(a),End:()=>z(a,i),Home:()=>z(a,v),PageDown:()=>Z(a,He),PageUp:()=>J(a,He)}[r.key];h&&(r.preventDefault(),r.stopPropagation(),h(r),Oe.current="keyboard")},[z,k,Z,J,He]);ta(()=>{const{values:r}=k.current;Oe.current==="keyboard"&&Ue(r)},[an,tn,Ue]);const $r=u.useCallback((r={},a=null)=>{let l="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if(B.length){const h=x?"height":"width",C={height:0,width:0},{height:A,width:y}=B.reduce((Ye=C,K=C)=>Ye[h]>K[h]?Ye:K,C)??{};y&&(l=`${y}px`),A&&(i=`${A}px`)}const v=x?{paddingLeft:`calc(${l} / 2)`,paddingRight:`calc(${l} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},w={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...v};return{...H,...r,id:`slider-container-${c}`,ref:mn(a,oe),style:w,tabIndex:-1,vars:ia(H.vars,[{name:"thumb-size",token:"sizes",value:re,__prefix:"ui"}])}},[c,x,H,re,B]),Br=u.useCallback(({index:r,...a},l=null)=>({"aria-readonly":O,...M,...a,id:Ke(r),ref:l,type:"hidden",name:sa(g)?g[r]:`${g}-${r}`,disabled:j,readOnly:W,required:ae,value:T[r]}),[O,j,Ke,g,W,ae,M,T]),Ar=u.useCallback((r={},a=null)=>{const l={...r.style,position:"absolute",...x?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${c}`,ref:mn(a,Le),style:l}},[c,x,M]),Ir=u.useCallback((r={},a=null)=>{const l=Math.abs($[1]-$[0]),i=b?100-$[0]:$[0],v={...r.style,position:"absolute",...x?{height:`${l}%`,left:"50%",transform:"translateX(-50%)",...b?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${l}%`,...b?{right:`${i}%`}:{left:`${i}%`}}};return{...M,...r,id:`slider-filled-track-${c}`,ref:a,style:v}},[c,b,x,M,$]),Dr=u.useCallback((r,a=null)=>{let l=hn(r.value,m,d);l=b?100-l:l;const i={...r.style,pointerEvents:"none",position:"absolute",...x?{bottom:`${l}%`}:{left:`${l}%`}};return{...M,...r,id:Xe(r.value),ref:a,style:i,"aria-hidden":!0,"data-highlighted":We(T[0]<=r.value&&r.value<=T[1]),"data-invalid":We(r.value<m||d<r.value)}},[Xe,b,x,d,m,M,T]),Nr=u.useCallback(({index:r,...a},l=null)=>{const i=$[r];let v="var(--ui-thumb-size)",w="var(--ui-thumb-size)";B[r]&&(v=`${B[r].width}px`,w=`${B[r].height}px`);const h=`calc(${i}% - (${w} / 2))`,C=`calc(${i}% - (${v} / 2))`,A={...a.style,position:"absolute",touchAction:"none",userSelect:"none",...x?{bottom:h}:{left:C}},y=T[r];if(y==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":R??"Slider thumb","aria-labelledby":f,"aria-readonly":O,...M,...a,id:G(r),ref:l,style:A,"aria-orientation":N,"aria-valuemax":d,"aria-valuemin":m,"aria-valuenow":y,"aria-valuetext":S??sn(y)??y.toString(),"data-active":We(De&&n&&U.current===r),role:"slider",tabIndex:Ne&&n?0:void 0,onBlur:Ge(a.onBlur,te,()=>{U.current=-1,nn(!1)}),onFocus:Ge(a.onFocus,se,()=>{U.current=r,nn(!0)}),onKeyDown:Ge(a.onKeyDown,un)}},[$,B,x,T,R,f,O,M,G,N,d,m,S,sn,De,n,Ne,te,se,un]);return{dragging:De,focused:Vr,getInputId:Ke,getMarkerId:Xe,getThumbId:G,reset:Er,stepDown:Z,stepUp:J,values:T,vertical:x,getContainerProps:$r,getFilledTrackProps:Ir,getInputProps:Br,getMarkProps:Dr,getThumbProps:Nr,getTrackProps:Ar}},[da,Fe]=ra({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),o=D((n,s)=>{const[t,c]=Gr("RangeSlider",n),{className:g,children:R,filledTrackColor:f,thumbColor:S,thumbSize:_,trackColor:d,trackSize:m,filledTrackProps:P,inputProps:Y,thumbProps:q,trackProps:N,...b}=Jr(c),{vertical:Q,getContainerProps:re,getFilledTrackProps:Ee,getInputProps:$e,getMarkProps:Be,getThumbProps:Ae,getTrackProps:H}=ca({...b,thumbSize:Lr(_,t)}),O={...t.container},j=Zr(R),W=qe(j,I),ae=qe(j,V),te=qe(j,F),se=dn(j,V),M=dn(j,F),Ie=ea(j)?R:na(j,I,V,F);return e.jsx(da,{value:{filledTrackColor:f,styles:t,thumbColor:S,thumbSize:_,trackColor:d,trackSize:m,vertical:Q,filledTrackProps:P,getFilledTrackProps:Ee,getInputProps:$e,getMarkProps:Be,getThumbProps:Ae,getTrackProps:H,inputProps:Y,thumbProps:q,trackProps:N},children:e.jsxs(X.div,{className:ne("ui-slider",g),__css:O,...re({},s),children:[W??e.jsx(I,{}),Ie,ae??(se?null:e.jsx(V,{})),te??(M?null:e.jsx(F,{}))]})})});o.displayName="RangeSlider";o.__ui__="RangeSlider";const I=D(({className:n,children:s,filledTrackProps:t,...c},g)=>{const{styles:R,trackColor:f,trackSize:S,vertical:_,getTrackProps:d,trackProps:m}=Fe(),P={...R.track};return e.jsx(X.div,{className:ne("ui-slider__track",n),__css:P,...d({...f?{bg:f}:{},...S?_?{w:S}:{h:S}:{},...m,...c},g),children:s??e.jsx(_e,{...t})})});I.displayName="RangeSliderTrack";I.__ui__="RangeSliderTrack";const _e=D(({className:n,...s},t)=>{const{filledTrackColor:c,styles:g,filledTrackProps:R,getFilledTrackProps:f}=Fe(),S={...g.filledTrack};return e.jsx(X.div,{className:ne("ui-slider__track-filled",n),__css:S,...f({...c?{bg:c}:{},...R,...s},t)})});_e.displayName="RangeSliderFilledTrack";_e.__ui__="RangeSliderFilledTrack";const p=D(({className:n,...s},t)=>{const{styles:c,getMarkProps:g}=Fe(),R={alignItems:"center",display:"inline-flex",justifyContent:"center",...c.mark};return e.jsx(X.div,{className:ne("ui-slider__mark",n),__css:R,...g(s,t)})});p.displayName="RangeSliderMark";p.__ui__="RangeSliderMark";const ze=D(({className:n,children:s,index:t,...c},g)=>{const{styles:R,thumbColor:f,thumbSize:S,getInputProps:_,getThumbProps:d,inputProps:m,thumbProps:P}=Fe(),Y={...R.thumb},{children:q}=P??{};return e.jsxs(X.div,{className:ne("ui-slider__thumb",n),__css:Y,...d({index:t,...f?{bg:f}:{},...S?{boxSize:S}:{},...P,...c},g),children:[e.jsx(X.input,{..._({...m,index:t},g)}),s??q]})});ze.displayName="RangeSliderThumb";ze.__ui__="RangeSliderThumb";const V=D((n,s)=>e.jsx(ze,{ref:s,index:0,...n}));V.displayName="RangeSliderStartThumb";V.__ui__="RangeSliderStartThumb";const F=D((n,s)=>e.jsx(ze,{ref:s,index:1,...n}));F.displayName="RangeSliderEndThumb";F.__ui__="RangeSliderEndThumb";const bt={component:o,title:"Components / Forms / RangeSlider"},ie=()=>e.jsx(o,{}),ue=()=>e.jsx(o,{defaultValue:[10,90]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",defaultValue:[0,25]}),e.jsx(o,{size:"md",defaultValue:[25,50]}),e.jsx(o,{size:"lg",defaultValue:[50,75]})]}),de=()=>e.jsx(e.Fragment,{children:Ur.map(n=>e.jsx(o,{colorScheme:n},n))}),me=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{reversed:!0}),e.jsx(o,{h:"calc(100vh - 16px * 3 - 14px)",orientation:"vertical",reversed:!0})]}),he=()=>{const[n,s]=u.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{max:200,min:0,value:n,onChange:s})]})},pe=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{step:5,value:n,onChange:s})]})},Se=()=>e.jsx(o,{betweenThumbs:10}),be=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(Ze,{gap:"xl",w:"full",children:[e.jsxs(pn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(E,{children:"Min"}),e.jsxs(Ze,{gap:"md",children:[e.jsx(ee,{disabled:n[0]===0,onClick:()=>s(t=>t[0]!==0?[t[0]-5,t[1]]:t),children:"-5"}),e.jsx(ee,{colorScheme:"blue",disabled:n[0]===100||n[0]===n[1],onClick:()=>s(t=>t[0]!==100&&n[0]!==n[1]?[t[0]+5,t[1]]:t),children:"+5"})]})]}),e.jsxs(pn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(E,{children:"Max"}),e.jsxs(Ze,{gap:"md",children:[e.jsx(ee,{disabled:n[1]===0||n[0]===n[1],onClick:()=>s(t=>t[1]!==0&&n[0]!==n[1]?[t[0],t[1]-5]:t),children:"-5"}),e.jsx(ee,{colorScheme:"blue",disabled:n[1]===100,onClick:()=>s(t=>t[1]!==100?[t[0],t[1]+5]:t),children:"+10"})]})]})]})]})},xe=()=>e.jsxs(Pr,{gap:"lg",children:[e.jsxs(o,{size:"sm",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"md",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(o,{size:"lg",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),ve=()=>{const[n,s]=u.useState([25,75]),[t,{off:c,on:g}]=ua(!1);return e.jsxs(o,{mt:"10",value:n,onChange:s,onMouseEnter:g,onMouseLeave:c,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(Sn,{label:`${n[0]}%`,open:t,placement:"top",children:e.jsx(V,{})}),e.jsx(Sn,{label:`${n[1]}%`,open:t,placement:"top",children:e.jsx(F,{})})]})},Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{disabled:!0}),e.jsx(Ve,{disabled:!0,helperMessage:"Please select your preferred price range.",legend:"Hotel Price Range",children:e.jsx(o,{})})]}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{readOnly:!0}),e.jsx(Ve,{helperMessage:"Please select your preferred price range.",legend:"Hotel Price Range",readOnly:!0,children:e.jsx(o,{})})]}),ke=()=>{const[n,s]=u.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{invalid:n[0]<20,value:n,onChange:s}),e.jsx(Ve,{errorMessage:"Minimum price should be set to 20 or higher.",invalid:n[0]<20,legend:"Hotel Price Range",children:e.jsx(o,{value:n,onChange:s})})]})},Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(o,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(o,{children:[e.jsx(I,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(V,{bg:"blue.700"}),e.jsx(F,{bg:"blue.700"})]}),e.jsxs(o,{children:[e.jsx(I,{bg:"red.200",children:e.jsx(_e,{bg:"red.500"})}),e.jsx(V,{bg:"red.700"}),e.jsx(F,{bg:"red.700"})]})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{thumbProps:{boxSize:"6",children:e.jsx(Je,{}),color:"blue.500"}}),e.jsxs(o,{children:[e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Je,{})}),e.jsx(F,{boxSize:"6",color:"blue.500",children:e.jsx(Je,{})})]})]}),Me=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(o,{mt:"10",value:n,onChange:s,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},Te=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(o,{value:n,onChange:s})]})},we=()=>{const[n,s]=u.useState([25,75]),[t,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",t[0],", Start Max:"," ",t[0]]}),e.jsx(o,{value:n,onChange:s,onChangeStart:c})]})},ye=()=>{const[n,s]=u.useState([25,75]),[t,c]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",t[0],", End Max:"," ",t[0]]}),e.jsx(o,{value:n,onChange:s,onChangeEnd:c})]})},Pe=()=>{var f;const n={rangeSlider:[25,75]},{control:s,formState:{errors:t},handleSubmit:c,watch:g}=Hr({defaultValues:n}),R=S=>console.log("submit:",S);return console.log("watch:",g()),e.jsxs(Pr,{as:"form",onSubmit:c(R),children:[e.jsx(Ve,{errorMessage:(f=t.rangeSlider)==null?void 0:f.message,invalid:!!t.rangeSlider,legend:"Hotel Price Range",children:e.jsx(Or,{name:"rangeSlider",control:s,render:({field:S})=>e.jsx(o,{...S})})}),e.jsx(ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var bn,xn,vn;ie.parameters={...ie.parameters,docs:{...(bn=ie.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(vn=(xn=ie.parameters)==null?void 0:xn.docs)==null?void 0:vn.source}}};var Rn,fn,kn;ue.parameters={...ue.parameters,docs:{...(Rn=ue.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(kn=(fn=ue.parameters)==null?void 0:fn.docs)==null?void 0:kn.source}}};var Cn,jn,Mn;ce.parameters={...ce.parameters,docs:{...(Cn=ce.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(Mn=(jn=ce.parameters)==null?void 0:jn.docs)==null?void 0:Mn.source}}};var Tn,wn,yn;de.parameters={...de.parameters,docs:{...(Tn=de.parameters)==null?void 0:Tn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(yn=(wn=de.parameters)==null?void 0:wn.docs)==null?void 0:yn.source}}};var Pn,Vn,Fn;me.parameters={...me.parameters,docs:{...(Pn=me.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Fn=(Vn=me.parameters)==null?void 0:Vn.docs)==null?void 0:Fn.source}}};var _n,zn,En;ge.parameters={...ge.parameters,docs:{...(_n=ge.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider reversed />
      <RangeSlider h="calc(100vh - 16px * 3 - 14px)" orientation="vertical" reversed />
    </>;
}`,...(En=(zn=ge.parameters)==null?void 0:zn.docs)==null?void 0:En.source}}};var $n,Bn,An;he.parameters={...he.parameters,docs:{...($n=he.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(An=(Bn=he.parameters)==null?void 0:Bn.docs)==null?void 0:An.source}}};var In,Dn,Nn;pe.parameters={...pe.parameters,docs:{...(In=pe.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...(Nn=(Dn=pe.parameters)==null?void 0:Dn.docs)==null?void 0:Nn.source}}};var Hn,On,Ln;Se.parameters={...Se.parameters,docs:{...(Hn=Se.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Ln=(On=Se.parameters)==null?void 0:On.docs)==null?void 0:Ln.source}}};var Un,Kn,Xn;be.parameters={...be.parameters,docs:{...(Un=be.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
            <Button disabled={value[0] === 0} onClick={() => setValue(prev => prev[0] !== 0 ? [prev[0] - 5, prev[1]] : prev)}>
              -5
            </Button>

            <Button colorScheme="blue" disabled={value[0] === 100 || value[0] === value[1]} onClick={() => setValue(prev => prev[0] !== 100 && value[0] !== value[1] ? [prev[0] + 5, prev[1]] : prev)}>
              +5
            </Button>
          </Center>
        </Flex>

        <Flex align="center" direction="column" gap="sm">
          <Text>Max</Text>

          <Center gap="md">
            <Button disabled={value[1] === 0 || value[0] === value[1]} onClick={() => setValue(prev => prev[1] !== 0 && value[0] !== value[1] ? [prev[0], prev[1] - 5] : prev)}>
              -5
            </Button>

            <Button colorScheme="blue" disabled={value[1] === 100} onClick={() => setValue(prev => prev[1] !== 100 ? [prev[0], prev[1] + 5] : prev)}>
              +10
            </Button>
          </Center>
        </Flex>
      </Center>
    </>;
}`,...(Xn=(Kn=be.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,qn,Qn;xe.parameters={...xe.parameters,docs:{...(Yn=xe.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(qn=xe.parameters)==null?void 0:qn.docs)==null?void 0:Qn.source}}};var Wn,Gn,Jn;ve.parameters={...ve.parameters,docs:{...(Wn=ve.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [open, {
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

      <Tooltip label={\`\${value[0]}%\`} open={open} placement="top">
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip label={\`\${value[1]}%\`} open={open} placement="top">
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>;
}`,...(Jn=(Gn=ve.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Zn,er,nr;Re.parameters={...Re.parameters,docs:{...(Zn=Re.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider disabled />

      <Fieldset disabled helperMessage="Please select your preferred price range." legend="Hotel Price Range">
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(nr=(er=Re.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,ar,tr;fe.parameters={...fe.parameters,docs:{...(rr=fe.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider readOnly />

      <Fieldset helperMessage="Please select your preferred price range." legend="Hotel Price Range" readOnly>
        <RangeSlider />
      </Fieldset>
    </>;
}`,...(tr=(ar=fe.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,lr,or;ke.parameters={...ke.parameters,docs:{...(sr=ke.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider invalid={value[0] < 20} value={value} onChange={onChange} />

      <Fieldset errorMessage="Minimum price should be set to 20 or higher." invalid={value[0] < 20} legend="Hotel Price Range">
        <RangeSlider value={value} onChange={onChange} />
      </Fieldset>
    </>;
}`,...(or=(lr=ke.parameters)==null?void 0:lr.docs)==null?void 0:or.source}}};var ir,ur,cr;Ce.parameters={...Ce.parameters,docs:{...(ir=Ce.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(cr=(ur=Ce.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,gr;je.parameters={...je.parameters,docs:{...(dr=je.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
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
}`,...(gr=(mr=je.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var hr,pr,Sr;Me.parameters={...Me.parameters,docs:{...(hr=Me.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(pr=Me.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var br,xr,vr;Te.parameters={...Te.parameters,docs:{...(br=Te.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(vr=(xr=Te.parameters)==null?void 0:xr.docs)==null?void 0:vr.source}}};var Rr,fr,kr;we.parameters={...we.parameters,docs:{...(Rr=we.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(kr=(fr=we.parameters)==null?void 0:fr.docs)==null?void 0:kr.source}}};var Cr,jr,Mr;ye.parameters={...ye.parameters,docs:{...(Cr=ye.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Mr=(jr=ye.parameters)==null?void 0:jr.docs)==null?void 0:Mr.source}}};var Tr,wr,yr;Pe.parameters={...Pe.parameters,docs:{...(Tr=Pe.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.rangeSlider?.message} invalid={!!errors.rangeSlider} legend="Hotel Price Range">
        <Controller name="rangeSlider" control={control} render={({
        field
      }) => <RangeSlider {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(yr=(wr=Pe.parameters)==null?void 0:wr.docs)==null?void 0:yr.source}}};const xt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","disabled","readOnly","invalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{xt as __namedExportsOrder,ie as basic,Ce as customColor,Te as customControl,Me as customMark,je as customThumb,bt as default,Re as disabled,ke as invalid,ye as onChangeEnd,we as onChangeStart,Pe as reactHookForm,fe as readOnly,Se as withBetweenThumbs,de as withColorScheme,ue as withDefaultValue,be as withFocusThumbOnChange,xe as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ce as withSize,pe as withStep,ve as withTooltip};
