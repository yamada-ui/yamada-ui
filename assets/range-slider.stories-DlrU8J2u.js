import{j as e}from"./extends-CwFRzn3r.js";import{u as Ir}from"./index-CoJrGj-T.js";import{r as u}from"./index-BwDkhjyp.js";import{u as Dr,C as Br}from"./index.esm-DXPXqkjk.js";import{j as Ar,c as Nr}from"./components-d1Y862wv.js";import{u as Or}from"./index-CsH8woeS.js";import{u as Hr,c as Lr,b as Ur}from"./index-Dr7bHdxr.js";import{u as Yr,f as qr,F as Pe}from"./form-control-DALmJTHd.js";import{p as Kr,q as Xr,t as Ye,a9 as sn,aa as Wr,ab as Gr,b as K,c as re,Y as Jr,k as on,f as Qr,a as ln,I as Zr,d as qe,h as Ke}from"./factory-DBrfn43w.js";import{f as B}from"./forward-ref-BWI-Phbn.js";import{a as ea}from"./use-component-style-DhRiPQIp.js";import{o as na}from"./theme-provider-Cr3m0r8P.js";import{c as un,v as cn,r as ra,p as aa}from"./number-CcP_arM8.js";import{m as ta}from"./use-var-DcJHaFAf.js";import{A as Xe}from"./activity-CJCDGSBj.js";import{T as z}from"./text-LaTineB_.js";import{C as We}from"./center-DkfaJL4L.js";import{F as dn}from"./flex-BzPFVsXq.js";import{B as ne}from"./button-HzRyJIss.js";import{V as Mr}from"./stack-BJEIbY7f.js";import{T as mn}from"./tooltip-Cgi1lXP2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dbjktjet.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-CYOyIFfw.js";import"./index-DxsK7mIy.js";import"./motion-B7t0mTYZ.js";import"./loading-provider-CMJK-0oJ.js";import"./index-BM4h2_aq.js";import"./Combination-IUp2vs9T.js";import"./loading-iPLDeGho.js";import"./icon-CVPWgGuL.js";import"./index-CGy0U2a3.js";import"./portal-Dkok86ly.js";import"./index-Drt3gf4w.js";import"./factory-CWrzRNZL.js";import"./notice-BONg-AsM.js";import"./alert-CKZoYc4g.js";import"./close-button-BDLDbh2v.js";import"./use-ripple-C_jFl7Io.js";import"./container-DWR0Xl7t.js";import"./box-jj-NoeXW.js";import"./checkbox-CTS6Zk-z.js";import"./index-DPmjC07T.js";import"./index-ByFQ-olM.js";import"./index-L-hgD5dt.js";import"./select-Dwn9co5K.js";import"./select-list-CYzdV0uf.js";import"./index-BD-dMYlD.js";import"./index-C9q_kkfb.js";import"./index-VpCG-oEN.js";import"./popover-trigger-C4B9Wa4t.js";import"./slide-fade-DV-SS8EA.js";import"./index-BukEwq1c.js";import"./index-C_z-NEqe.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bot02Mqw.js";import"./scale-fade-CARss9Lv.js";import"./index-DX5CNJFl.js";import"./index-Ds_xHjLF.js";import"./index-pFyedNCb.js";import"./event-C_48urmU.js";import"./lucide-icon-CsDBQyHf.js";const sa=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,"aria-valuetext":b,betweenThumbs:f=0,defaultValue:v,isReversed:c,max:d=100,min:g=0,orientation:T="horizontal",step:y=1,thumbSize:A,value:X,onChange:ze,onChangeEnd:Ee,onChangeStart:$e,...N}=Yr(s);const{"aria-readonly":O,disabled:H,readOnly:W,required:ae,onBlur:te,onFocus:se,...S}=Jr(N,qr);if(v=v??[g+(d-g)/4,d-(d-g)/4],d<g)throw new Error("Do not assign a number less than 'min' to 'max'");const Ie=on($e),G=on(Ee),[De,L]=Or({defaultValue:v,value:X,onChange:ze}),Be=u.useId(),[J,Ge]=u.useState(!1),[wr,Je]=u.useState(!1),Ae=!(H||W),Ne=(d-g)/10,U=y||(d-g)/100,Qe=f*y,j=De.map(r=>un(r,g,d)),[Ze,en]=j,Tr=j.map(r=>d-r+g),E=(c?Tr:j).map(r=>cn(r,g,d)),yr=[{max:en-Qe,min:g},{max:d,min:Ze+Qe}],x=T==="vertical",C=Hr({betweenThumbs:f,disabled:H,focusThumbOnChange:n,isInteractive:Ae,isReversed:c,isVertical:x,max:d,min:g,orientation:T,step:y,valueBounds:yr,values:j}),Y=u.useRef(-1),Oe=u.useRef(null),oe=u.useRef(null),He=u.useRef(null),$=Lr({getNodes:()=>{var t;const r=(t=oe.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=Be),m??(m=a);const Q=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),Le=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Ue=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Ur(oe,{onMove:r=>{const t=Y.current,{isInteractive:o}=C.current;if(!o||t==-1)return;const i=nn(r)||0;F(t,i),rn(t)},onSessionEnd:()=>{const{isInteractive:r,values:t}=C.current;r&&(Ge(!1),G(t))},onSessionStart:r=>{const{isInteractive:t,values:o}=C.current;if(!t)return;Ge(!0);const i=nn(r)||0,R=o.map(w=>Math.abs(w-i)),M=Math.min(...R);let h=R.indexOf(M);const k=R.filter(w=>w===M);k.length>1&&i>o[h]&&(h=h+k.length-1),Y.current=h,F(h,i),rn(h),Ie(o)}});const nn=u.useCallback(r=>{var tn;if(!He.current)return;const{max:t,min:o}=C.current;Oe.current="pointer";const{bottom:i,height:R,left:M,width:h}=He.current.getBoundingClientRect(),{clientX:k,clientY:I}=((tn=r.touches)==null?void 0:tn[0])??r;let _=(x?i-I:k-M)/(x?R:h);return c&&(_=1-_),aa(_,o,t)},[C,x,c]),rn=u.useCallback(r=>{var i;if(r===-1||!n)return;const t=Q(r),o=(i=oe.current)==null?void 0:i.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[n,Q]),F=u.useCallback((r,t)=>{const{isInteractive:o,valueBounds:i,values:R}=C.current;if(!o)return;const{max:M=100,min:h=0}=i[r]??{};t=parseFloat(ra(t,h,U)),t=un(t,h,M);const k=[...R];k[r]=t,L(k)},[C,U,L]),Z=u.useCallback((r,t=U)=>{const{values:o}=C.current,i=o[r];F(r,c?i-t:i+t)},[F,c,C,U]),ee=u.useCallback((r,t=U)=>{const{values:o}=C.current,i=o[r];F(r,c?i+t:i-t)},[F,c,C,U]),Pr=u.useCallback(()=>L(v),[v,L]),an=u.useCallback(r=>{const t=Y.current,{valueBounds:o}=C.current,{max:i=100,min:R=0}=o[t]??{},h={ArrowDown:()=>ee(t),ArrowLeft:()=>ee(t),ArrowRight:()=>Z(t),ArrowUp:()=>Z(t),End:()=>F(t,i),Home:()=>F(t,R),PageDown:()=>ee(t,Ne),PageUp:()=>Z(t,Ne)}[r.key];h&&(r.preventDefault(),r.stopPropagation(),h(r),Oe.current="keyboard")},[F,C,ee,Z,Ne]);Qr(()=>{const{values:r}=C.current;Oe.current==="keyboard"&&G(r)},[Ze,en,G]);const Vr=u.useCallback((r={},t=null)=>{let o="var(--ui-thumb-size)",i="var(--ui-thumb-size)";if($.length){const h=x?"height":"width",k={height:0,width:0},{height:I,width:w}=$.reduce((q=k,_=k)=>q[h]>_[h]?q:_,k)??{};w&&(o=`${w}px`),I&&(i=`${I}px`)}const R=x?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingBottom:`calc(${i} / 2)`,paddingTop:`calc(${i} / 2)`},M={...r.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...R};return{...N,...r,id:`slider-container-${a}`,ref:ln(t,oe),style:M,tabIndex:-1,vars:ta(N.vars,[{name:"thumb-size",token:"sizes",value:A,__prefix:"ui"}])}},[a,x,N,A,$]),Fr=u.useCallback(({index:r,...t},o=null)=>({"aria-readonly":O,...S,...t,id:Le(r),ref:o,type:"hidden",name:Zr(m)?m[r]:`${m}-${r}`,disabled:H,readOnly:W,required:ae,value:j[r]}),[O,H,Le,m,W,ae,S,j]),_r=u.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...x?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...S,...r,id:`slider-track-${a}`,ref:ln(t,He),style:o}},[a,x,S]),zr=u.useCallback((r={},t=null)=>{const o=Math.abs(E[1]-E[0]),i=c?100-E[0]:E[0],R={...r.style,position:"absolute",...x?{height:`${o}%`,left:"50%",transform:"translateX(-50%)",...c?{top:`${i}%`}:{bottom:`${i}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...c?{right:`${i}%`}:{left:`${i}%`}}};return{...S,...r,id:`slider-filled-track-${a}`,ref:t,style:R}},[a,c,x,S,E]),Er=u.useCallback((r,t=null)=>{let o=cn(r.value,g,d);o=c?100-o:o;const i={...r.style,pointerEvents:"none",position:"absolute",...x?{bottom:`${o}%`}:{left:`${o}%`}};return{...S,...r,id:Ue(r.value),ref:t,style:i,"aria-hidden":!0,"data-highlighted":qe(j[0]<=r.value&&r.value<=j[1]),"data-invalid":qe(r.value<g||d<r.value)}},[Ue,c,x,d,g,S,j]),$r=u.useCallback(({index:r,...t},o=null)=>{var q,_;const i=E[r];let R="var(--ui-thumb-size)",M="var(--ui-thumb-size)";$[r]&&(R=`${(q=$[r])==null?void 0:q.width}px`,M=`${(_=$[r])==null?void 0:_.height}px`);const h=`calc(${i}% - (${M} / 2))`,k=`calc(${i}% - (${R} / 2))`,I={...t.style,position:"absolute",touchAction:"none",userSelect:"none",...x?{bottom:h}:{left:k}},w=j[r];if(w==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":O,...S,...t,id:Q(r),ref:o,style:I,"aria-orientation":T,"aria-valuemax":d,"aria-valuemin":g,"aria-valuenow":w,"aria-valuetext":b??w.toString(),"data-active":qe(J&&n&&Y.current===r),role:"slider",tabIndex:Ae&&n?0:void 0,onBlur:Ke(t.onBlur,te,()=>{Y.current=-1,Je(!1)}),onFocus:Ke(t.onFocus,se,()=>{Y.current=r,Je(!0)}),onKeyDown:Ke(t.onKeyDown,an)}},[E,$,x,j,O,S,Q,Ae,n,g,d,J,T,b,an,se,te]);return{getInputId:Le,getMarkerId:Ue,getThumbId:Q,isDragging:J,isFocused:wr,isVertical:x,reset:Pr,stepDown:ee,stepUp:Z,values:j,getContainerProps:Vr,getFilledTrackProps:zr,getInputProps:Fr,getMarkProps:Er,getThumbProps:$r,getTrackProps:_r}},[oa,Ve]=Kr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=B((n,s)=>{const[a,m]=ea("RangeSlider",n),{className:b,children:f,filledTrackColor:v,thumbColor:c,thumbSize:d,trackColor:g,trackSize:T,filledTrackProps:y,inputProps:A,thumbProps:X,trackProps:ze,...Ee}=na(m),{isVertical:$e,getContainerProps:N,getFilledTrackProps:O,getInputProps:H,getMarkProps:W,getThumbProps:ae,getTrackProps:te}=sa({...Ee,thumbSize:Ar(d,a)}),se={...a.container},S=Xr(f),Ie=Ye(S,D),G=Ye(S,P),De=Ye(S,V),L=sn(S,P),Be=sn(S,V),J=Wr(S)?f:Gr(S,D,P,V);return e.jsx(oa,{value:{filledTrackColor:v,isVertical:$e,styles:a,thumbColor:c,thumbSize:d,trackColor:g,trackSize:T,filledTrackProps:y,getFilledTrackProps:O,getInputProps:H,getMarkProps:W,getThumbProps:ae,getTrackProps:te,inputProps:A,thumbProps:X,trackProps:ze},children:e.jsxs(K.div,{className:re("ui-slider",b),__css:se,...N({},s),children:[Ie??e.jsx(D,{}),J,G??(L?null:e.jsx(P,{})),De??(Be?null:e.jsx(V,{}))]})})});l.displayName="RangeSlider";l.__ui__="RangeSlider";const D=B(({className:n,children:s,filledTrackProps:a,...m},b)=>{const{isVertical:f,styles:v,trackColor:c,trackSize:d,getTrackProps:g,trackProps:T}=Ve(),y={...v.track};return e.jsx(K.div,{className:re("ui-slider__track",n),__css:y,...g({...c?{bg:c}:{},...d?f?{w:d}:{h:d}:{},...T,...m},b),children:s??e.jsx(Fe,{...a})})});D.displayName="RangeSliderTrack";D.__ui__="RangeSliderTrack";const Fe=B(({className:n,...s},a)=>{const{filledTrackColor:m,styles:b,filledTrackProps:f,getFilledTrackProps:v}=Ve(),c={...b.filledTrack};return e.jsx(K.div,{className:re("ui-slider__track-filled",n),__css:c,...v({...m?{bg:m}:{},...f,...s},a)})});Fe.displayName="RangeSliderFilledTrack";Fe.__ui__="RangeSliderFilledTrack";const p=B(({className:n,...s},a)=>{const{styles:m,getMarkProps:b}=Ve(),f={alignItems:"center",display:"inline-flex",justifyContent:"center",...m.mark};return e.jsx(K.div,{className:re("ui-slider__mark",n),__css:f,...b(s,a)})});p.displayName="RangeSliderMark";p.__ui__="RangeSliderMark";const _e=B(({className:n,children:s,index:a,...m},b)=>{const{styles:f,thumbColor:v,thumbSize:c,getInputProps:d,getThumbProps:g,inputProps:T,thumbProps:y}=Ve(),A={...f.thumb},{children:X}=y??{};return e.jsxs(K.div,{className:re("ui-slider__thumb",n),__css:A,...g({index:a,...v?{bg:v}:{},...c?{boxSize:c}:{},...y,...m},b),children:[e.jsx(K.input,{...d({...T,index:a},b)}),s??X]})});_e.displayName="RangeSliderThumb";_e.__ui__="RangeSliderThumb";const P=B((n,s)=>e.jsx(_e,{ref:s,index:0,...n}));P.displayName="RangeSliderStartThumb";P.__ui__="RangeSliderStartThumb";const V=B((n,s)=>e.jsx(_e,{ref:s,index:1,...n}));V.displayName="RangeSliderEndThumb";V.__ui__="RangeSliderEndThumb";const xt={component:l,title:"Components / Forms / RangeSlider"},le=()=>e.jsx(l,{}),ie=()=>e.jsx(l,{defaultValue:[10,90]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),ce=()=>e.jsx(e.Fragment,{children:Nr.map(n=>e.jsx(l,{colorScheme:n},n))}),de=()=>e.jsx(l,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),ge=()=>{const[n,s]=u.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{max:200,min:0,value:n,onChange:s})]})},he=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{step:5,value:n,onChange:s})]})},pe=()=>e.jsx(l,{betweenThumbs:10}),Se=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{focusThumbOnChange:!1,step:5,value:n}),e.jsxs(We,{gap:"xl",w:"full",children:[e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(z,{children:"Min"}),e.jsxs(We,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[0]===100||n[0]===n[1],onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(dn,{align:"center",direction:"column",gap:"sm",children:[e.jsx(z,{children:"Max"}),e.jsxs(We,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{colorScheme:"blue",isDisabled:n[1]===100,onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},be=()=>e.jsxs(Mr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),ve=()=>{const[n,s]=u.useState([25,75]),[a,{off:m,on:b}]=Ir(!1);return e.jsxs(l,{mt:"10",value:n,onChange:s,onMouseEnter:b,onMouseLeave:m,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(mn,{isOpen:a,label:`${n[0]}%`,placement:"top",children:e.jsx(P,{})}),e.jsx(mn,{isOpen:a,label:`${n[1]}%`,placement:"top",children:e.jsx(V,{})})]})},xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Pe,{helperMessage:"Please select your preferred volume.",isDisabled:!0,label:"volume (sound)",children:e.jsx(l,{})})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Pe,{helperMessage:"Please select your preferred volume.",isReadOnly:!0,label:"volume (sound)",children:e.jsx(l,{})})]}),fe=()=>{const[n,s]=u.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Pe,{errorMessage:"Min volume should be set to 20 or higher.",isInvalid:n[0]<20,label:"volume (sound)",children:e.jsx(l,{value:n,onChange:s})})]})},Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(l,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(l,{children:[e.jsx(D,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(P,{bg:"blue.700"}),e.jsx(V,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(D,{bg:"red.200",children:e.jsx(Fe,{bg:"red.500"})}),e.jsx(P,{bg:"red.700"}),e.jsx(V,{bg:"red.700"})]})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{boxSize:"6",children:e.jsx(Xe,{}),color:"blue.500"}}),e.jsxs(l,{children:[e.jsx(P,{boxSize:"6",color:"blue.500",children:e.jsx(Xe,{})}),e.jsx(V,{boxSize:"6",color:"blue.500",children:e.jsx(Xe,{})})]})]}),je=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(l,{mt:"10",value:n,onChange:s,children:[e.jsx(p,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(p,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(p,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[0],w:"10",children:[n[0],"%"]}),e.jsxs(p,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:n[1],w:"10",children:[n[1],"%"]})]})},Me=()=>{const[n,s]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},we=()=>{const[n,s]=u.useState([25,75]),[a,m]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},Te=()=>{const[n,s]=u.useState([25,75]),[a,m]=u.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},ye=()=>{var v;const n={rangeSlider:[25,75]},{control:s,formState:{errors:a},handleSubmit:m,watch:b}=Dr({defaultValues:n}),f=c=>console.log("submit:",c);return console.log("watch:",b()),e.jsxs(Mr,{as:"form",onSubmit:m(f),children:[e.jsx(Pe,{errorMessage:(v=a.rangeSlider)==null?void 0:v.message,isInvalid:!!a.rangeSlider,label:"Volume",children:e.jsx(Br,{name:"rangeSlider",control:s,render:({field:c})=>e.jsx(l,{...c})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var gn,hn,pn;le.parameters={...le.parameters,docs:{...(gn=le.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(zn=(_n=ge.parameters)==null?void 0:_n.docs)==null?void 0:zn.source}}};var En,$n,In;he.parameters={...he.parameters,docs:{...(En=he.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>;
}`,...(In=($n=he.parameters)==null?void 0:$n.docs)==null?void 0:In.source}}};var Dn,Bn,An;pe.parameters={...pe.parameters,docs:{...(Dn=pe.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(Hn=(On=Se.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};var Ln,Un,Yn;be.parameters={...be.parameters,docs:{...(Ln=be.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Un=be.parameters)==null?void 0:Un.docs)==null?void 0:Yn.source}}};var qn,Kn,Xn;ve.parameters={...ve.parameters,docs:{...(qn=ve.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Kn=ve.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Wn,Gn,Jn;xe.parameters={...xe.parameters,docs:{...(Wn=xe.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl helperMessage="Please select your preferred volume." isDisabled label="volume (sound)">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Jn=(Gn=xe.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Zn,er;Re.parameters={...Re.parameters,docs:{...(Qn=Re.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl helperMessage="Please select your preferred volume." isReadOnly label="volume (sound)">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(er=(Zn=Re.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;fe.parameters={...fe.parameters,docs:{...(nr=fe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(jr=(kr=ye.parameters)==null?void 0:kr.docs)==null?void 0:jr.source}}};const Rt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Rt as __namedExportsOrder,le as basic,Ce as customColor,Me as customControl,je as customMark,ke as customThumb,xt as default,xe as isDisabled,fe as isInvalid,Re as isReadonly,Te as onChangeEnd,we as onChangeStart,ye as reactHookForm,pe as withBetweenThumbs,ce as withColorScheme,ie as withDefaultValue,Se as withFocusThumbOnChange,be as withMark,ge as withMinMax,de as withOrientation,me as withReversed,ue as withSize,he as withStep,ve as withTooltip};
