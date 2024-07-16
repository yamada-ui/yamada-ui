import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as Dr}from"./index-Du0-7Fls.js";import{r as i}from"./index-BwDkhjyp.js";import{u as Ir,C as Br}from"./index.esm-CnEPCCvu.js";import{j as _r,c as Ar}from"./components-FNe2OWsV.js";import{u as Or}from"./index-fvg_gLDB.js";import{u as Nr,c as Hr,b as Lr}from"./index-NOySenzF.js";import{u as Ur,f as Kr,F as Ve}from"./form-control-v7wnzt3v.js";import{l as Xr,t as Yr,x as Ue,a2 as an,a3 as qr,a4 as Wr,b as Y,c as ae,T as Gr,k as tn,f as Jr,a as sn,s as Qr,d as Ke,h as Xe}from"./factory-CtEVzbYf.js";import{f as O}from"./forward-ref-BmTAT9U5.js";import{a as Zr}from"./use-component-style-D3qgkwVB.js";import{o as ea}from"./theme-provider-DwNsBv-g.js";import{c as on,v as ln,r as na,p as ra}from"./number-49BHn0Cl.js";import{A as Ye}from"./activity-BtzBzrUh.js";import{T as I}from"./text-Qrm_BZjp.js";import{C as qe}from"./center-Dj7-DfXn.js";import{F as un}from"./flex--8sdKDgM.js";import{B as ne}from"./button-ixSdWECI.js";import{V as kr}from"./stack-C7XG3IUB.js";import{T as cn}from"./tooltip-DgKavlYQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CFefAklC.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-CVrXeRvs.js";import"./index-BH89NuV_.js";import"./motion-Y1F55cL9.js";import"./loading-provider-VhzgdbKu.js";import"./index-D5xNZpPq.js";import"./Combination-CONbhR2A.js";import"./loading-k_S2O4S_.js";import"./icon-DBsGF4uC.js";import"./index-DXbYvzpO.js";import"./motion-BkrKHA2r.js";import"./index-DGf9HWvz.js";import"./container-portal-L5A7yTqF.js";import"./index-B8XB3FuZ.js";import"./notice-xTxcRRx6.js";import"./alert-Bseh01mv.js";import"./close-button-J6wxUJLK.js";import"./use-ripple-CSL3XTH4.js";import"./container-CWrAVThj.js";import"./box-Dp44rSxf.js";import"./checkbox-f3K8qtAd.js";import"./index-BIU3i3r0.js";import"./index-DsEil29M.js";import"./index-ByJgBht4.js";import"./select-BY8MjBoB.js";import"./option-SEY6h2C2.js";import"./index-CXXWvYyT.js";import"./index-DvH-Nylt.js";import"./popover-content-UjB2tYau.js";import"./index-B5DGAwAw.js";import"./index-CcUROoY5.js";import"./index-DgakmGlb.js";import"./index-DMsqADb0.js";import"./index-TPq6y0l-.js";import"./slide-fade-DfDhQgVJ.js";import"./utils-CaOb0Y6o.js";import"./scale-fade-CTXvONpm.js";import"./index-ChJj91-k.js";import"./event-imqIgfLG.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-DT4tbm16.js";const aa=({focusThumbOnChange:n=!0,...s})=>{n||(s.isReadOnly=!0);let{id:a,name:m,min:u=0,max:d=100,step:v=1,defaultValue:h,orientation:k="horizontal",thumbSize:F,isReversed:g,betweenThumbs:z=0,required:N,disabled:E,readOnly:H,value:ze,onChange:Ee,onChangeStart:$e,onChangeEnd:De,onFocus:te,onBlur:se,"aria-readonly":L,...q}=Ur(s);const M=Gr(q,Kr);if(h=h??[u+(d-u)/4,d-(d-u)/4],d<u)throw new Error("Do not assign a number less than 'min' to 'max'");const y=tn($e),W=tn(De),[Ie,U]=Or({value:ze,defaultValue:h,onChange:Ee}),[G,oe]=i.useState(!1),[Be,We]=i.useState(!1),[p,J]=i.useState(-1),_e=!(E||H),Ae=(d-u)/10,K=v||(d-u)/100,Ge=z*v,w=Ie.map(r=>on(r,u,d)),[Je,Qe]=w,wr=w.map(r=>d-r+u),B=(g?wr:w).map(r=>ln(r,u,d)),Tr=[{min:u,max:Qe-Ge},{min:Je+Ge,max:d}],b=k==="vertical",C=Nr({min:u,max:d,step:v,disabled:E,values:w,valueBounds:Tr,isInteractive:_e,isReversed:g,isVertical:b,focusThumbOnChange:n,betweenThumbs:z,orientation:k}),Oe=i.useRef(null),le=i.useRef(null),Ne=i.useRef(null),_=Hr({getNodes:()=>{var t;const r=(t=le.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=i.useId()),m??(m=a);const Q=i.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),He=i.useCallback(r=>`slider-input-${a}-${r}`,[a]),Le=i.useCallback(r=>`slider-marker-${a}-${r}`,[a]);Lr(le,{onSessionStart:r=>{const{isInteractive:t,values:o}=C.current;if(!t)return;oe(!0);const c=Ze(r)||0,x=o.map(T=>Math.abs(T-c)),f=Math.min(...x);let R=x.indexOf(f);const j=x.filter(T=>T===f);j.length>1&&c>o[R]&&(R=R+j.length-1),J(R),P(R,c),en(R),y(o)},onSessionEnd:()=>{const{isInteractive:r,values:t}=C.current;r&&(oe(!1),W(t))},onMove:r=>{const{isInteractive:t}=C.current;if(!t||p==-1)return;const o=Ze(r)||0;J(p),P(p,o),en(p)}});const Ze=i.useCallback(r=>{var rn;if(!Ne.current)return;const{min:t,max:o}=C.current;Oe.current="pointer";const{bottom:c,left:x,height:f,width:R}=Ne.current.getBoundingClientRect(),{clientX:j,clientY:A}=((rn=r.touches)==null?void 0:rn[0])??r;let V=(b?c-A:j-x)/(b?f:R);return g&&(V=1-V),ra(V,t,o)},[C,b,g]),en=i.useCallback(r=>{var c;if(r??(r=p),r===-1||!n)return;const t=Q(r),o=(c=le.current)==null?void 0:c.ownerDocument.getElementById(t);o&&setTimeout(()=>o.focus())},[p,n,Q]),P=i.useCallback((r,t)=>{const{isInteractive:o,valueBounds:c,values:x}=C.current;if(!o)return;const{min:f,max:R}=c[r];t=parseFloat(na(t,f,K)),t=on(t,f,R);const j=[...x];j[r]=t,U(j)},[C,K,U]),Z=i.useCallback((r,t=K)=>{const{values:o}=C.current,c=o[r];P(r,g?c-t:c+t)},[P,g,C,K]),ee=i.useCallback((r,t=K)=>{const{values:o}=C.current,c=o[r];P(r,g?c+t:c-t)},[P,g,C,K]),yr=i.useCallback(()=>U(h),[h,U]),nn=i.useCallback(r=>{const{valueBounds:t}=C.current,{min:o,max:c}=t[p],f={ArrowRight:()=>Z(p),ArrowUp:()=>Z(p),ArrowLeft:()=>ee(p),ArrowDown:()=>ee(p),PageUp:()=>Z(p,Ae),PageDown:()=>ee(p,Ae),Home:()=>P(p,o),End:()=>P(p,c)}[r.key];f&&(r.preventDefault(),r.stopPropagation(),f(r),Oe.current="keyboard")},[p,P,C,ee,Z,Ae]);Jr(()=>{const{values:r}=C.current;Oe.current==="keyboard"&&W(r)},[Je,Qe,W]);const Pr=i.useCallback((r={},t=null)=>{let o="var(--ui-thumbSize)",c="var(--ui-thumbSize)";if(_.length){const R=b?"height":"width",j={width:0,height:0},{width:A,height:T}=_.reduce((X=j,V=j)=>X[R]>V[R]?X:V,j)??{};A&&(o=A),T&&(c=T)}const x=b?{paddingLeft:`calc(${o} / 2)`,paddingRight:`calc(${o} / 2)`}:{paddingTop:`calc(${c} / 2)`,paddingBottom:`calc(${c} / 2)`},f={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...x};return{...q,...r,id:`slider-container-${a}`,ref:sn(t,le),tabIndex:-1,style:f,var:[{__prefix:"ui",name:"thumbSize",token:"sizes",value:F}]}},[a,b,q,F,_]),Vr=i.useCallback(({index:r,...t},o=null)=>({"aria-readonly":L,...M,...t,ref:o,id:He(r),type:"hidden",name:Qr(m)?m[r]:`${m}-${r}`,value:w[r],required:N,disabled:E,readOnly:H}),[L,E,He,m,H,N,M,w]),Fr=i.useCallback((r={},t=null)=>{const o={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...M,...r,id:`slider-track-${a}`,ref:sn(t,Ne),style:o}},[a,b,M]),zr=i.useCallback((r={},t=null)=>{const o=Math.abs(B[1]-B[0]),c=g?100-B[0]:B[0],x={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:`${o}%`,...g?{top:`${c}%`}:{bottom:`${c}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${o}%`,...g?{right:`${c}%`}:{left:`${c}%`}}};return{...M,...r,id:`slider-filled-track-${a}`,ref:t,style:x}},[a,g,b,M,B]),Er=i.useCallback((r,t=null)=>{let o=ln(r.value,u,d);o=g?100-o:o;const c={...r.style,position:"absolute",pointerEvents:"none",...b?{bottom:`${o}%`}:{left:`${o}%`}};return{...M,...r,ref:t,id:Le(r.value),"aria-hidden":!0,"data-invalid":Ke(r.value<u||d<r.value),"data-highlighted":Ke(w[0]<=r.value&&r.value<=w[1]),style:c}},[Le,g,b,d,u,M,w]),$r=i.useCallback(({index:r,...t},o=null)=>{var X,V;const c=B[r];let x="var(--ui-thumbSize)",f="var(--ui-thumbSize)";_[r]&&(x=`${(X=_[r])==null?void 0:X.width}px`,f=`${(V=_[r])==null?void 0:V.height}px`);const R=`calc(${c}% - (${f} / 2))`,j=`calc(${c}% - (${x} / 2))`,A={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...b?{bottom:R}:{left:j}},T=w[r];if(T==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb","aria-readonly":L,...M,...t,ref:o,id:Q(r),tabIndex:_e&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":T,"data-active":Ke(G&&n&&p===r),"aria-orientation":k,onKeyDown:Xe(t.onKeyDown,nn),onFocus:Xe(t.onFocus,te,()=>{We(!0),J(r)}),onBlur:Xe(t.onBlur,se,()=>{We(!1),J(-1)}),style:A}},[B,_,b,w,L,M,Q,_e,n,u,d,G,p,k,nn,te,se]);return{values:w,isFocused:Be,isDragging:G,isVertical:b,stepUp:Z,stepDown:ee,reset:yr,setActiveIndex:J,getThumbId:Q,getInputId:He,getMarkerId:Le,getContainerProps:Pr,getInputProps:Vr,getTrackProps:Fr,getFilledTrackProps:zr,getMarkProps:Er,getThumbProps:$r}},[ta,Fe]=Xr({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),l=O((n,s)=>{const[a,m]=Zr("RangeSlider",n),{className:u,children:d,inputProps:v,trackProps:h,filledTrackProps:k,thumbProps:F,trackColor:g,filledTrackColor:z,trackSize:N,thumbColor:E,thumbSize:H,...ze}=ea(m),{isVertical:Ee,getContainerProps:$e,getInputProps:De,getTrackProps:te,getFilledTrackProps:se,getMarkProps:L,getThumbProps:q}=aa({...ze,thumbSize:_r(H,a)}),M={...a.container},y=Yr(d),[W]=Ue(y,re),[Ie]=Ue(y,$),[U]=Ue(y,D),G=an(y,$),oe=an(y,D),Be=qr(y)?d:Wr(y,re,$,D);return e.jsx(ta,{value:{isVertical:Ee,getTrackProps:te,getFilledTrackProps:se,getMarkProps:L,getThumbProps:q,getInputProps:De,trackProps:h,trackColor:g,trackSize:N,filledTrackProps:k,filledTrackColor:z,thumbProps:F,thumbColor:E,thumbSize:H,inputProps:v,styles:a},children:e.jsxs(Y.div,{className:ae("ui-slider",u),__css:M,...$e({},s),children:[W??e.jsx(re,{}),Be,Ie??(G?null:e.jsx($,{})),U??(oe?null:e.jsx(D,{}))]})})}),re=O(({className:n,children:s,filledTrackProps:a,...m},u)=>{const{styles:d,trackProps:v,trackColor:h,trackSize:k,isVertical:F,getTrackProps:g}=Fe(),z={...d.track};return e.jsx(Y.div,{className:ae("ui-slider__track",n),__css:z,...g({...h?{bg:h}:{},...k?F?{w:k}:{h:k}:{},...v,...m},u),children:s??e.jsx(jr,{...a})})}),jr=O(({className:n,...s},a)=>{const{styles:m,filledTrackProps:u,filledTrackColor:d,getFilledTrackProps:v}=Fe(),h={...m.filledTrack};return e.jsx(Y.div,{className:ae("ui-slider__track-filled",n),__css:h,...v({...d?{bg:d}:{},...u,...s},a)})}),S=O(({className:n,...s},a)=>{const{styles:m,getMarkProps:u}=Fe(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e.jsx(Y.div,{className:ae("ui-slider__mark",n),__css:d,...u(s,a)})}),Mr=O(({className:n,index:s,children:a,...m},u)=>{const{styles:d,thumbProps:v,thumbColor:h,thumbSize:k,inputProps:F,getThumbProps:g,getInputProps:z}=Fe(),N={...d.thumb},{children:E}=v??{};return e.jsxs(Y.div,{className:ae("ui-slider__thumb",n),__css:N,...g({index:s,...h?{bg:h}:{},...k?{boxSize:k}:{},...v,...m},u),children:[e.jsx(Y.input,{...z({...F,index:s},u)}),a??E]})}),$=O((n,s)=>e.jsx(Mr,{ref:s,index:0,...n})),D=O((n,s)=>e.jsx(Mr,{ref:s,index:1,...n})),bt={title:"Components / Forms / RangeSlider",component:l},ie=()=>e.jsx(l,{}),ue=()=>e.jsx(l,{defaultValue:[10,90]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{size:"sm",defaultValue:[0,25]}),e.jsx(l,{size:"md",defaultValue:[25,50]}),e.jsx(l,{size:"lg",defaultValue:[50,75]})]}),de=()=>e.jsx(e.Fragment,{children:Ar.map(n=>e.jsx(l,{colorScheme:n},n))}),me=()=>e.jsx(l,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReversed:!0}),e.jsx(l,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),he=()=>{const[n,s]=i.useState([50,150]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,min:0,max:200,onChange:s})]})},pe=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,onChange:s})]})},Se=()=>e.jsx(l,{betweenThumbs:10}),be=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,step:5,focusThumbOnChange:!1}),e.jsxs(qe,{w:"full",gap:"xl",children:[e.jsxs(un,{direction:"column",align:"center",gap:"sm",children:[e.jsx(I,{children:"Min"}),e.jsxs(qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[0]===0,onClick:()=>s(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e.jsx(ne,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>s(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),e.jsxs(un,{direction:"column",align:"center",gap:"sm",children:[e.jsx(I,{children:"Max"}),e.jsxs(qe,{gap:"md",children:[e.jsx(ne,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>s(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e.jsx(ne,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>s(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},ve=()=>e.jsxs(kr,{gap:"lg",children:[e.jsxs(l,{size:"sm",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"md",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(l,{size:"lg",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),xe=()=>{const[n,s]=i.useState([25,75]),[a,{on:m,off:u}]=Dr(!1);return e.jsxs(l,{value:n,onChange:s,mt:"10",onMouseEnter:m,onMouseLeave:u,children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(cn,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e.jsx($,{})}),e.jsx(cn,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e.jsx(D,{})})]})},fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0}),e.jsx(Ve,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0}),e.jsx(Ve,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(l,{})})]}),Ce=()=>{const[n,s]=i.useState([15,45]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:n[0]<20,value:n,onChange:s}),e.jsx(Ve,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e.jsx(l,{value:n,onChange:s})})]})},ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(l,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(l,{children:[e.jsx(re,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx($,{bg:"blue.700"}),e.jsx(D,{bg:"blue.700"})]}),e.jsxs(l,{children:[e.jsx(re,{bg:"red.200",children:e.jsx(jr,{bg:"red.500"})}),e.jsx($,{bg:"red.700"}),e.jsx(D,{bg:"red.700"})]})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})}}),e.jsxs(l,{children:[e.jsx($,{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})}),e.jsx(D,{color:"blue.500",boxSize:"6",children:e.jsx(Ye,{})})]})]}),Me=()=>{const[n,s]=i.useState([25,75]);return e.jsx(e.Fragment,{children:e.jsxs(l,{value:n,onChange:s,mt:"10",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(S,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),e.jsxs(S,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},we=()=>{const[n,s]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1]]}),e.jsx(l,{value:n,onChange:s})]})},Te=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeStart:m})]})},ye=()=>{const[n,s]=i.useState([25,75]),[a,m]=i.useState([25,75]);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e.jsx(l,{value:n,onChange:s,onChangeEnd:m})]})},Pe=()=>{var v;const n={rangeSlider:[25,75]},{control:s,handleSubmit:a,watch:m,formState:{errors:u}}=Ir({defaultValues:n}),d=h=>console.log("submit:",h);return console.log("watch:",m()),e.jsxs(kr,{as:"form",onSubmit:a(d),children:[e.jsx(Ve,{isInvalid:!!u.rangeSlider,label:"Volume",errorMessage:(v=u.rangeSlider)==null?void 0:v.message,children:e.jsx(Br,{name:"rangeSlider",control:s,render:({field:h})=>e.jsx(l,{...h})})}),e.jsx(ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var dn,mn,gn;ie.parameters={...ie.parameters,docs:{...(dn=ie.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(gn=(mn=ie.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,pn,Sn;ue.parameters={...ue.parameters,docs:{...(hn=ue.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(Sn=(pn=ue.parameters)==null?void 0:pn.docs)==null?void 0:Sn.source}}};var bn,vn,xn;ce.parameters={...ce.parameters,docs:{...(bn=ce.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(xn=(vn=ce.parameters)==null?void 0:vn.docs)==null?void 0:xn.source}}};var fn,Rn,Cn;de.parameters={...de.parameters,docs:{...(fn=de.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(Fn=(Vn=he.parameters)==null?void 0:Vn.docs)==null?void 0:Fn.source}}};var zn,En,$n;pe.parameters={...pe.parameters,docs:{...(zn=pe.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...($n=(En=pe.parameters)==null?void 0:En.docs)==null?void 0:$n.source}}};var Dn,In,Bn;Se.parameters={...Se.parameters,docs:{...(Dn=Se.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
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
}`,...(On=(An=be.parameters)==null?void 0:An.docs)==null?void 0:On.source}}};var Nn,Hn,Ln;ve.parameters={...ve.parameters,docs:{...(Nn=ve.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(Hn=ve.parameters)==null?void 0:Hn.docs)==null?void 0:Ln.source}}};var Un,Kn,Xn;xe.parameters={...xe.parameters,docs:{...(Un=xe.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Kn=xe.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,qn,Wn;fe.parameters={...fe.parameters,docs:{...(Yn=fe.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Sr=(pr=Te.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var br,vr,xr;ye.parameters={...ye.parameters,docs:{...(br=ye.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(xr=(vr=ye.parameters)==null?void 0:vr.docs)==null?void 0:xr.source}}};var fr,Rr,Cr;Pe.parameters={...Pe.parameters,docs:{...(fr=Pe.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(Rr=Pe.parameters)==null?void 0:Rr.docs)==null?void 0:Cr.source}}};const vt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{vt as __namedExportsOrder,ie as basic,ke as customColor,we as customControl,Me as customMark,je as customThumb,bt as default,fe as isDisabled,Ce as isInvalid,Re as isReadonly,ye as onChangeEnd,Te as onChangeStart,Pe as reactHookForm,Se as withBetweenThumbs,de as withColorScheme,ue as withDefaultValue,be as withFocusThumbOnChange,ve as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ce as withSize,pe as withStep,xe as withTooltip};
