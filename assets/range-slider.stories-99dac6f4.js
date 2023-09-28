import{j as e,a as s,F as x}from"./jsx-runtime-29545a09.js";import{I as Ne,p as je}from"./fontawesome-icon-f04ed178.js";import{r as i}from"./index-76fb7be0.js";import{u as Vr,C as Fr}from"./index.esm-e2e4d158.js";import{u as Ir}from"./index-7847f267.js";import{u as Er,c as Pr,b as zr}from"./index-ac0ea1b0.js";import{u as Dr,f as J,F as Ie}from"./form-control-6d136b3e.js";import{o as $r,s as Br,t as qe,M as Ge,N as Or,O as Ar,d as j,e as ne,c as Je,h as _r,y as Nr,w as Qe,z as Q,l as jr,v as He}from"./factory-0893e977.js";import{f as _}from"./forward-ref-8b7d2a6f.js";import{a as qr}from"./use-component-style-aad79748.js";import{o as Hr,d as Le}from"./theme-53967a8a.js";import{c as Ze,v as en,r as Lr,p as Wr}from"./number-cdadea8f.js";import{T as B}from"./text-a84a994c.js";import{C as We}from"./center-5725cf92.js";import{F as nn}from"./flex-7243abe6.js";import{B as Z}from"./button-47cccc58.js";import{V as pr}from"./stack-e0824e8f.js";import{u as Ur}from"./index-d68d7549.js";import{T as rn}from"./tooltip-261393b2.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-1cfd45cb.js";import"./index-500c6d69.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-0658c608.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./index-059db363.js";import"./index-cee88dbe.js";import"./index-46b37d75.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./container-portal-9ee8ff0f.js";import"./index-d3ea75b5.js";import"./slide-fade-453635d0.js";import"./utils-008df4c7.js";import"./scale-fade-504b88ac.js";const Kr=r=>{let{id:t,name:o,min:u=0,max:m=100,step:b=1,defaultValue:R,orientation:p="horizontal",isReversed:h,focusThumbOnChange:V=!0,betweenThumbs:I=0,required:E,disabled:P,readOnly:q,onChange:Pe,...S}=Dr(r);if(R=R??[u+(m-u)/4,m-(m-u)/4],m<u)throw new Error("Do not assign a number less than 'min' to 'max'");const ze=Je(S.onChangeStart),H=Je(S.onChangeEnd),[De,N]=Ir({value:S.value,defaultValue:R,onChange:Pe}),[L,re]=i.useState(!1),[$e,ae]=i.useState(!1),[g,O]=i.useState(-1),W=!(P||q),U=(m-u)/10,z=b||(m-u)/100,te=I*b,f=De.map(n=>Ze(n,u,m)),Rr=f.map(n=>m-n+u),A=(h?Rr:f).map(n=>en(n,u,m)),fr=[{min:u,max:f[1]-te},{min:f[0]+te,max:m}],C=p==="vertical",k=Er({min:u,max:m,step:b,disabled:P,values:f,valueBounds:fr,isInteractive:W,isReversed:h,isVertical:C,eventSource:null,focusThumbOnChange:V,betweenThumbs:I,orientation:p}),oe=i.useRef(null),Be=i.useRef(null),le=Pr({getNodes:()=>{var l;const n=(l=oe.current)==null?void 0:l.querySelectorAll("[role=slider]");return n?Array.from(n):[]}});t=t??i.useId(),o=o??t;const K=i.useCallback(n=>`slider-thumb-${t}-${n}`,[t]),Oe=i.useCallback(n=>`slider-input-${t}-${n}`,[t]),Ae=i.useCallback(n=>`slider-marker-${t}-${n}`,[t]);zr(oe,{onSessionStart:n=>{const{isInteractive:l,values:c}=k.current;if(!l)return;re(!0);const d=Ue(n)||0,w=c.map(se=>Math.abs(se-d)),M=Math.min(...w);let T=w.indexOf(M);const y=w.filter(se=>se===M);y.length>1&&d>c[T]&&(T=T+y.length-1),O(T),F(T,d),Ke(T),ze(c)},onSessionEnd:()=>{const{isInteractive:n,values:l}=k.current;n&&(re(!1),H(l))},onMove:n=>{const{isInteractive:l}=k.current;if(!l||g==-1)return;const c=Ue(n)||0;O(g),F(g,c),Ke(g)}});const Ue=i.useCallback(n=>{var Ye;if(!Be.current)return;const{min:l,max:c}=k.current;k.current.eventSource="pointer";const{bottom:d,left:w,height:M,width:T}=Be.current.getBoundingClientRect(),{clientX:y,clientY:G}=((Ye=n.touches)==null?void 0:Ye[0])??n;let _e=(C?d-G:y-w)/(C?M:T);return h&&(_e=1-_e),Wr(_e,l,c)},[k,C,h]),Ke=i.useCallback(n=>{var d;if(n=n??g,n===-1||!V)return;const l=K(n),c=(d=oe.current)==null?void 0:d.ownerDocument.getElementById(l);c&&setTimeout(()=>c.focus())},[g,V,K]),F=i.useCallback((n,l)=>{const{isInteractive:c,valueBounds:d,values:w}=k.current;if(!c)return;const{min:M,max:T}=d[n];l=parseFloat(Lr(l,M,z)),l=Ze(l,M,T);const y=[...w];y[n]=l,N(y)},[k,z,N]),X=i.useCallback((n,l=z)=>{const{values:c}=k.current,d=c[n];F(n,h?d-l:d+l)},[F,h,k,z]),Y=i.useCallback((n,l=z)=>{const{values:c}=k.current,d=c[n];F(n,h?d+l:d-l)},[F,h,k,z]),Cr=i.useCallback(()=>N(R),[R,N]),Xe=i.useCallback(n=>{const{valueBounds:l}=k.current,{min:c,max:d}=l[g],M={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,U),PageDown:()=>Y(g,U),Home:()=>F(g,c),End:()=>F(g,d)}[n.key];M&&(n.preventDefault(),n.stopPropagation(),M(n),k.current.eventSource="keyboard")},[g,F,k,Y,X,U]);_r(()=>{const{eventSource:n,values:l}=k.current;n==="keyboard"&&H(l)},[f,H]);const kr=i.useCallback((n={},l=null)=>{const c={width:0,height:0},d=C?"height":"width",{width:w,height:M}=le.reduce((y=c,G=c)=>y[d]>G[d]?y:G,c)??{},T={...n.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...C?w?{paddingLeft:w/2,paddingRight:w/2}:{}:M?{paddingTop:M/2,paddingBottom:M/2}:{}};return{...Nr(S,["value","onChangeStart","onChangeEnd"]),...n,id:`slider-container-${t}`,ref:Qe(l,oe),tabIndex:-1,style:T}},[t,C,S,le]),wr=i.useCallback(({index:n,...l}={},c=null)=>({...Q(S,J),...l,ref:c,id:Oe(n),type:"hidden",name:jr(o)?o[n]:`${o}-${n}`,value:f[n],required:E,disabled:P,readOnly:q}),[P,Oe,o,q,E,S,f]),Mr=i.useCallback((n={},l=null)=>{const c={...n.style,position:"absolute",...C?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...Q(S,J),...n,id:`slider-track-${t}`,ref:Qe(l,Be),style:c}},[t,C,S]),xr=i.useCallback((n={},l=null)=>{const c=Math.abs(A[1]-A[0]),d=h?100-A[0]:A[0],w={...n.style,position:"absolute",...C?{left:"50%",transform:"translateX(-50%)",height:`${c}%`,...h?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${c}%`,...h?{right:`${d}%`}:{left:`${d}%`}}};return{...Q(S,J),...n,id:`slider-filled-track-${t}`,ref:l,style:w}},[t,h,C,S,A]),Tr=i.useCallback((n={},l=null)=>{let c=en(n.value,u,m);c=h?100-c:c;const d={...n.style,position:"absolute",pointerEvents:"none",...C?{bottom:`${c}%`}:{left:`${c}%`}};return{...Q(S,J),...n,ref:l,id:Ae(n.value),"aria-hidden":!0,"data-invalid":Le(n.value<u||m<n.value),"data-highlighted":Le(f[0]<=n.value&&n.value<=f[1]),style:d}},[Ae,h,C,m,u,S,f]),yr=i.useCallback(({index:n,...l}={},c=null)=>{const d=A[n],{width:w,height:M}=le[n]??{width:0,height:0},T={...l.style,position:"absolute",userSelect:"none",touchAction:"none",...C?{bottom:`calc(${d}% - ${M/2}px)`}:{left:`calc(${d}% - ${w/2}px)`}};if(f[n]==null)throw new Error(`Cannot find value at index '${n}'. The 'value' or 'defaultValue'`);return{...Q(S,J),...l,ref:c,id:K(n),tabIndex:W?0:void 0,role:"slider","data-active":Le(L&&g===n),"aria-orientation":p,onKeyDown:He(l.onKeyDown,Xe),onFocus:He(l.onFocus,S.onFocus,()=>{ae(!0),O(n)}),onBlur:He(l.onBlur,S.onBlur,()=>{ae(!1),O(-1)}),style:T}},[g,K,L,W,C,Xe,p,S,A,le,f]);return{values:f,isFocused:$e,isDragging:L,isVertical:C,stepUp:X,stepDown:Y,reset:Cr,setActiveIndex:O,getThumbId:K,getInputId:Oe,getMarkerId:Ae,getContainerProps:kr,getInputProps:wr,getTrackProps:Mr,getFilledTrackProps:xr,getMarkProps:Tr,getThumbProps:yr}},[Xr,Ee]=$r({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),a=_((r,t)=>{const[o,u]=qr("Slider",r),{className:m,children:b,input:R,track:p,filledTrack:h,thumb:V,trackColor:I,filledTrackColor:E,trackSize:P,thumbColor:q,thumbSize:Pe,...S}=Hr(u),{isVertical:ze,getContainerProps:H,getInputProps:De,getTrackProps:N,getFilledTrackProps:L,getMarkProps:re,getThumbProps:$e}=Kr(S),ae={...o.container},g=Br(b),[O]=qe(g,ee),[W]=qe(g,D),[U]=qe(g,$),z=Ge(g,D),te=Ge(g,$),f=Or(g)?b:Ar(g,ee,D,$);return e(Xr,{value:{isVertical:ze,getTrackProps:N,getFilledTrackProps:L,getMarkProps:re,getThumbProps:$e,getInputProps:De,track:p,trackColor:I,trackSize:P,filledTrack:h,filledTrackColor:E,thumb:V,thumbColor:q,thumbSize:Pe,input:R,styles:o},children:s(j.div,{className:ne("ui-slider",m),__css:ae,...H({},t),children:[O??e(ee,{}),f,W??(z?null:e(D,{})),U??(te?null:e($,{}))]})})}),ee=_(({className:r,children:t,filledTrack:o,...u},m)=>{const{styles:b,track:R,trackColor:p,trackSize:h,isVertical:V,getTrackProps:I}=Ee(),E={...b.track};return e(j.div,{className:ne("ui-slider-track",r),__css:E,...I({...p?{bg:p}:{},...h?V?{w:h}:{h}:{},...R,...u},m),children:t??e(br,{...o})})}),br=_(({className:r,...t},o)=>{const{styles:u,filledTrack:m,filledTrackColor:b,getFilledTrackProps:R}=Ee(),p={...u.filledTrack};return e(j.div,{className:ne("ui-slider-filledTrack",r),__css:p,...R({...b?{bg:b}:{},...m,...t},o)})}),v=_(({className:r,...t},o)=>{const{styles:u,getMarkProps:m}=Ee(),b={display:"inline-flex",justifyContent:"center",alignItems:"center",...u.mark};return e(j.div,{className:ne("ui-slider-mark",r),__css:b,...m(t,o)})}),vr=_(({className:r,index:t,children:o,...u},m)=>{const{styles:b,thumb:R,thumbColor:p,thumbSize:h,input:V,getThumbProps:I,getInputProps:E}=Ee(),P={...b.thumb};return s(j.div,{className:ne("ui-slider-thumb",r),__css:P,...I({index:t,...p?{bg:p}:{},...h?{boxSize:h}:{},...R,...u},m),children:[e(j.input,{...E({...V,index:t},m)}),o]})}),D=_((r,t)=>e(vr,{ref:t,index:0,...r})),$=_((r,t)=>e(vr,{ref:t,index:1,...r})),$a={title:"Components / Forms / RangeSlider",component:a},ce=()=>e(a,{}),ie=()=>e(a,{defaultValue:[10,90]}),ue=()=>s(x,{children:[e(a,{size:"sm",defaultValue:[0,25]}),e(a,{size:"md",defaultValue:[25,50]}),e(a,{size:"lg",defaultValue:[50,75]})]}),de=()=>s(x,{children:[e(a,{colorScheme:"primary"}),e(a,{colorScheme:"secondary"}),e(a,{colorScheme:"warning"}),e(a,{colorScheme:"danger"}),e(a,{colorScheme:"link"}),e(a,{colorScheme:"gray"}),e(a,{colorScheme:"zinc"}),e(a,{colorScheme:"neutral"}),e(a,{colorScheme:"stone"}),e(a,{colorScheme:"red"}),e(a,{colorScheme:"rose"}),e(a,{colorScheme:"pink"}),e(a,{colorScheme:"orange"}),e(a,{colorScheme:"amber"}),e(a,{colorScheme:"yellow"}),e(a,{colorScheme:"lime"}),e(a,{colorScheme:"green"}),e(a,{colorScheme:"emerald"}),e(a,{colorScheme:"teal"}),e(a,{colorScheme:"cyan"}),e(a,{colorScheme:"sky"}),e(a,{colorScheme:"blue"}),e(a,{colorScheme:"indigo"}),e(a,{colorScheme:"violet"}),e(a,{colorScheme:"purple"}),e(a,{colorScheme:"fuchsia"})]}),me=()=>e(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ge=()=>s(x,{children:[e(a,{isReversed:!0}),e(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),he=()=>{const[r,t]=i.useState([50,150]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(a,{value:r,min:0,max:200,onChange:t})]})},Se=()=>{const[r,t]=i.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(a,{value:r,step:5,onChange:t})]})},pe=()=>e(a,{betweenThumbs:10}),be=()=>{const[r,t]=i.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(a,{value:r,step:5,focusThumbOnChange:!1}),s(We,{w:"full",gap:"xl",children:[s(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),s(We,{gap:"md",children:[e(Z,{isDisabled:r[0]===0,onClick:()=>t(o=>o[0]!==0?[o[0]-5,o[1]]:o),children:"-5"}),e(Z,{isDisabled:r[0]===100||r[0]===r[1],colorScheme:"blue",onClick:()=>t(o=>o[0]!==100&&r[0]!==r[1]?[o[0]+5,o[1]]:o),children:"+5"})]})]}),s(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),s(We,{gap:"md",children:[e(Z,{isDisabled:r[1]===0||r[0]===r[1],onClick:()=>t(o=>o[1]!==0&&r[0]!==r[1]?[o[0],o[1]-5]:o),children:"-5"}),e(Z,{isDisabled:r[1]===100,colorScheme:"blue",onClick:()=>t(o=>o[1]!==100?[o[0],o[1]+5]:o),children:"+10"})]})]})]})]})},ve=()=>s(pr,{gap:"lg",children:[s(a,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),s(a,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),s(a,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Re=()=>{const[r,t]=i.useState([25,75]),[o,{on:u,off:m}]=Ur(!1);return s(a,{value:r,onChange:t,mt:"10",onMouseEnter:u,onMouseLeave:m,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(rn,{placement:"top",label:`${r[0]}%`,isOpen:o,children:e(D,{})}),e(rn,{placement:"top",label:`${r[1]}%`,isOpen:o,children:e($,{})})]})},fe=()=>s(x,{children:[e(a,{isDisabled:!0}),e(Ie,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),Ce=()=>s(x,{children:[e(a,{isReadOnly:!0}),e(Ie,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ke=()=>{const[r,t]=i.useState([15,45]);return s(x,{children:[e(a,{isInvalid:r[0]<20,value:r,onChange:t}),e(Ie,{isInvalid:r[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(a,{value:r,onChange:t})})]})},we=()=>s(x,{children:[e(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(a,{track:{bg:"green.200"},filledTrack:{bg:"green.500"},thumb:{bg:"green.700"}}),s(a,{children:[e(ee,{bg:"blue.200",filledTrack:{bg:"blue.500"}}),e(D,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),s(a,{children:[e(ee,{bg:"red.200",children:e(br,{bg:"red.500"})}),e(D,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),Me=()=>s(x,{children:[e(a,{thumb:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),s(a,{children:[e(D,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}),e($,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})]})]}),xe=()=>{const[r,t]=i.useState([25,75]);return e(x,{children:s(a,{value:r,onChange:t,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),s(v,{value:r[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r[0],"%"]}),s(v,{value:r[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r[1],"%"]})]})})},Te=()=>{const[r,t]=i.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(a,{value:r,onChange:t})]})},ye=()=>{const[r,t]=i.useState([25,75]),[o,u]=i.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1],", Start Min: ",o[0],", Start Max:"," ",o[0]]}),e(a,{value:r,onChange:t,onChangeStart:u})]})},Ve=()=>{const[r,t]=i.useState([25,75]),[o,u]=i.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1],", End Min: ",o[0],", End Max:"," ",o[0]]}),e(a,{value:r,onChange:t,onChangeEnd:u})]})},Fe=()=>{var R;const r={rangeSlider:[25,75]},{control:t,handleSubmit:o,watch:u,formState:{errors:m}}=Vr({defaultValues:r}),b=p=>console.log("submit:",p);return console.log("watch:",u()),s(pr,{as:"form",onSubmit:o(b),children:[e(Ie,{isInvalid:!!m.rangeSlider,label:"Volume",errorMessage:(R=m.rangeSlider)==null?void 0:R.message,children:e(Fr,{name:"rangeSlider",control:t,render:({field:p})=>e(a,{...p})})}),e(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var an,tn,on;ce.parameters={...ce.parameters,docs:{...(an=ce.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(on=(tn=ce.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var ln,sn,cn;ie.parameters={...ie.parameters,docs:{...(ln=ie.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(cn=(sn=ie.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var un,dn,mn;ue.parameters={...ue.parameters,docs:{...(un=ue.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size='sm' defaultValue={[0, 25]} />
      <RangeSlider size='md' defaultValue={[25, 50]} />
      <RangeSlider size='lg' defaultValue={[50, 75]} />
    </>;
}`,...(mn=(dn=ue.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var gn,hn,Sn;de.parameters={...de.parameters,docs:{...(gn=de.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider colorScheme='primary' />

      <RangeSlider colorScheme='secondary' />

      <RangeSlider colorScheme='warning' />

      <RangeSlider colorScheme='danger' />

      <RangeSlider colorScheme='link' />

      <RangeSlider colorScheme='gray' />

      <RangeSlider colorScheme='zinc' />

      <RangeSlider colorScheme='neutral' />

      <RangeSlider colorScheme='stone' />

      <RangeSlider colorScheme='red' />

      <RangeSlider colorScheme='rose' />

      <RangeSlider colorScheme='pink' />

      <RangeSlider colorScheme='orange' />

      <RangeSlider colorScheme='amber' />

      <RangeSlider colorScheme='yellow' />

      <RangeSlider colorScheme='lime' />

      <RangeSlider colorScheme='green' />

      <RangeSlider colorScheme='emerald' />

      <RangeSlider colorScheme='teal' />

      <RangeSlider colorScheme='cyan' />

      <RangeSlider colorScheme='sky' />

      <RangeSlider colorScheme='blue' />

      <RangeSlider colorScheme='indigo' />

      <RangeSlider colorScheme='violet' />

      <RangeSlider colorScheme='purple' />

      <RangeSlider colorScheme='fuchsia' />
    </>;
}`,...(Sn=(hn=de.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var pn,bn,vn;me.parameters={...me.parameters,docs:{...(pn=me.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation='vertical' h='calc(100vh - 16px * 2)' />;
}`,...(vn=(bn=me.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var Rn,fn,Cn;ge.parameters={...ge.parameters,docs:{...(Rn=ge.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation='vertical' h='calc(100vh - 16px * 3 - 14px)' />
    </>;
}`,...(Cn=(fn=ge.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var kn,wn,Mn;he.parameters={...he.parameters,docs:{...(kn=he.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(Mn=(wn=he.parameters)==null?void 0:wn.docs)==null?void 0:Mn.source}}};var xn,Tn,yn;Se.parameters={...Se.parameters,docs:{...(xn=Se.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(yn=(Tn=Se.parameters)==null?void 0:Tn.docs)==null?void 0:yn.source}}};var Vn,Fn,In;pe.parameters={...pe.parameters,docs:{...(Vn=pe.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(In=(Fn=pe.parameters)==null?void 0:Fn.docs)==null?void 0:In.source}}};var En,Pn,zn;be.parameters={...be.parameters,docs:{...(En=be.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} focusThumbOnChange={false} />

      <Center w='full' gap='xl'>
        <Flex direction='column' align='center' gap='sm'>
          <Text>Min</Text>

          <Center gap='md'>
            <Button isDisabled={value[0] === 0} onClick={() => setValue(prev => prev[0] !== 0 ? [prev[0] - 5, prev[1]] : prev)}>
              -5
            </Button>

            <Button isDisabled={value[0] === 100 || value[0] === value[1]} colorScheme='blue' onClick={() => setValue(prev => prev[0] !== 100 && value[0] !== value[1] ? [prev[0] + 5, prev[1]] : prev)}>
              +5
            </Button>
          </Center>
        </Flex>

        <Flex direction='column' align='center' gap='sm'>
          <Text>Max</Text>

          <Center gap='md'>
            <Button isDisabled={value[1] === 0 || value[0] === value[1]} onClick={() => setValue(prev => prev[1] !== 0 && value[0] !== value[1] ? [prev[0], prev[1] - 5] : prev)}>
              -5
            </Button>

            <Button isDisabled={value[1] === 100} colorScheme='blue' onClick={() => setValue(prev => prev[1] !== 100 ? [prev[0], prev[1] + 5] : prev)}>
              +10
            </Button>
          </Center>
        </Flex>
      </Center>
    </>;
}`,...(zn=(Pn=be.parameters)==null?void 0:Pn.docs)==null?void 0:zn.source}}};var Dn,$n,Bn;ve.parameters={...ve.parameters,docs:{...(Dn=ve.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <VStack gap='lg'>
      <RangeSlider size='sm'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size='md'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size='lg'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
      </RangeSlider>
    </VStack>;
}`,...(Bn=($n=ve.parameters)==null?void 0:$n.docs)==null?void 0:Bn.source}}};var On,An,_n;Re.parameters={...Re.parameters,docs:{...(On=Re.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <RangeSlider value={value} onChange={onChange} mt='10' onMouseEnter={on} onMouseLeave={off}>
      <RangeSliderMark value={25} w='10' ml='-5'>
        25%
      </RangeSliderMark>
      <RangeSliderMark value={50} w='10' ml='-5'>
        50%
      </RangeSliderMark>
      <RangeSliderMark value={75} w='10' ml='-5'>
        75%
      </RangeSliderMark>

      <Tooltip placement='top' label={\`\${value[0]}%\`} isOpen={isOpen}>
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip placement='top' label={\`\${value[1]}%\`} isOpen={isOpen}>
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>;
}`,...(_n=(An=Re.parameters)==null?void 0:An.docs)==null?void 0:_n.source}}};var Nn,jn,qn;fe.parameters={...fe.parameters,docs:{...(Nn=fe.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <RangeSlider />
      </FormControl>
    </>;
}`,...(qn=(jn=fe.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Hn,Ln,Wn;Ce.parameters={...Ce.parameters,docs:{...(Hn=Ce.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Wn=(Ln=Ce.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var Un,Kn,Xn;ke.parameters={...ke.parameters,docs:{...(Un=ke.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label='volume (sound)' errorMessage='Min volume should be set to 20 or higher.'>
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Xn=(Kn=ke.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,Gn,Jn;we.parameters={...we.parameters,docs:{...(Yn=we.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider trackColor='orange.200' filledTrackColor='orange.500' thumbColor='orange.700' />

      <RangeSlider track={{
      bg: 'green.200'
    }} filledTrack={{
      bg: 'green.500'
    }} thumb={{
      bg: 'green.700'
    }} />

      <RangeSlider>
        <RangeSliderTrack bg='blue.200' filledTrack={{
        bg: 'blue.500'
      }} />
        <RangeSliderStartThumb bg='blue.700' />
        <RangeSliderEndThumb bg='blue.700' />
      </RangeSlider>

      <RangeSlider>
        <RangeSliderTrack bg='red.200'>
          <RangeSliderFilledTrack bg='red.500' />
        </RangeSliderTrack>

        <RangeSliderStartThumb bg='red.700' />
        <RangeSliderEndThumb bg='red.700' />
      </RangeSlider>
    </>;
}`,...(Jn=(Gn=we.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Zn,er;Me.parameters={...Me.parameters,docs:{...(Qn=Me.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumb={{
      color: 'blue.500',
      boxSize: '6',
      children: <Icon icon={faWaveSquare} />
    }} />

      <RangeSlider>
        <RangeSliderStartThumb color='blue.500' boxSize='6'>
          <Icon icon={faWaveSquare} />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb color='blue.500' boxSize='6'>
          <Icon icon={faWaveSquare} />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(er=(Zn=Me.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;xe.parameters={...xe.parameters,docs:{...(nr=xe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <RangeSlider value={value} onChange={onChange} mt='10'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
        <RangeSliderMark value={value[0]} bg='blue.500' color='white' py='0.5' rounded='md' w='10' mt='-10' ml='-5'>
          {value[0]}%
        </RangeSliderMark>
        <RangeSliderMark value={value[1]} bg='blue.500' color='white' py='0.5' rounded='md' w='10' mt='-10' ml='-5'>
          {value[1]}%
        </RangeSliderMark>
      </RangeSlider>
    </>;
}`,...(ar=(rr=xe.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,or,lr;Te.parameters={...Te.parameters,docs:{...(tr=Te.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(lr=(or=Te.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var sr,cr,ir;ye.parameters={...ye.parameters,docs:{...(sr=ye.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{' '}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ir=(cr=ye.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var ur,dr,mr;Ve.parameters={...Ve.parameters,docs:{...(ur=Ve.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{' '}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(mr=(dr=Ve.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,Sr;Fe.parameters={...Fe.parameters,docs:{...(gr=Fe.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.rangeSlider} label='Volume' errorMessage={errors.rangeSlider?.message}>
        <Controller name='rangeSlider' control={control} render={({
        field
      }) => <RangeSlider {...field} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Sr=(hr=Fe.parameters)==null?void 0:hr.docs)==null?void 0:Sr.source}}};const Ba=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ba as __namedExportsOrder,ce as basic,we as customColor,Te as customControl,xe as customMark,Me as customThumb,$a as default,fe as isDisabled,ke as isInvalid,Ce as isReadonly,Ve as onChangeEnd,ye as onChangeStart,Fe as reactHookForm,pe as withBetweenThumbs,de as withColorScheme,ie as withDefaultValue,be as withFocusThumbOnChange,ve as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ue as withSize,Se as withStep,Re as withTooltip};
//# sourceMappingURL=range-slider.stories-99dac6f4.js.map
