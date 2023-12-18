import{j as e,a as l,F as w}from"./jsx-runtime-TtYKBvr-.js";import{I as Ne,p as je}from"./fontawesome-icon-XmXrmOUL.js";import{u as yr}from"./index-gWY0u-sb.js";import{r as u}from"./index-IybTgENJ.js";import{u as Pr,C as Fr}from"./index.esm-PVkfQNar.js";import{c as Ir}from"./components-FkT9jLjo.js";import{u as Er}from"./index-hCDbWo8R.js";import{u as Dr,a as zr,b as $r}from"./index-lR5gngKo.js";import{u as Br,f as G,F as Fe}from"./form-control-XK8tZY5Y.js";import{c as _r,p as Or,J as qe,$ as Je,a0 as Ar,a1 as Nr,u as j,a as ne,d as Ge,y as jr,o as qr,v as Qe,O as Q,f as Hr,I as He,h as Le}from"./factory-LHs-Bkmb.js";import{f as A}from"./forward-ref-6T0UNPU-.js";import{u as Lr}from"./use-component-style-eqg6O7Tm.js";import{o as Wr}from"./theme-provider-AD5gKQ6i.js";import{a as Ze,v as en,r as Ur,p as Kr}from"./number-T9-jc1Pg.js";import{F as nn}from"./flex-FqnJRexk.js";import{T as B}from"./text-dQvy8j4x.js";import{C as We}from"./center-5D7zPdPp.js";import{B as Z}from"./button-RN1MSmjb.js";import{V as Sr}from"./stack-eN2E0mK0.js";import{T as rn}from"./tooltip-sq6klQbP.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-lGxzm-PJ.js";import"./index-S2htefC9.js";import"./index-jxkA9W0j.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-Al2M3Eqo.js";import"./environment-provider-NYB_0qG3.js";import"./loading-provider-Ui44F5D8.js";import"./index-hatv1oHP.js";import"./component-G3mliOEp.js";import"./loading-t4SoIc4G.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./motion-HWUA2jNq.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-wvFwNyEy.js";import"./index-xIHD0DlW.js";import"./notice-NzltAP2e.js";import"./alert-7XsCQIkH.js";import"./close-button-jdyVI9qm.js";import"./use-ripple-SlL8kNnw.js";import"./container-8zZh0Bf0.js";import"./box-o_C1MUpU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-_8Bmwy7i.js";import"./index-55Zbf_Rl.js";import"./index-WWQ58WRJ.js";import"./slide-fade-RFNgJp4c.js";import"./utils-C-nC6PHZ.js";import"./scale-fade-sdcGcvy1.js";const Xr=({focusThumbOnChange:n=!0,...o})=>{o.isReadOnly??(o.isReadOnly=!n);let{id:a,name:h,min:c=0,max:m=100,step:x=1,defaultValue:S,orientation:V="horizontal",isReversed:p,betweenThumbs:F=0,required:I,disabled:E,readOnly:q,onChange:Ee,...b}=Br(o);if(S=S??[c+(m-c)/4,m-(m-c)/4],m<c)throw new Error("Do not assign a number less than 'min' to 'max'");const De=Ge(b.onChangeStart),H=Ge(b.onChangeEnd),[ze,N]=Er({value:b.value,defaultValue:S,onChange:Ee}),[L,re]=u.useState(!1),[$e,ae]=u.useState(!1),[g,_]=u.useState(-1),W=!(E||q),U=(m-c)/10,D=x||(m-c)/100,te=F*x,f=ze.map(r=>Ze(r,c,m)),fr=f.map(r=>m-r+c),O=(p?fr:f).map(r=>en(r,c,m)),Cr=[{min:c,max:f[1]-te},{min:f[0]+te,max:m}],C=V==="vertical",R=Dr({min:c,max:m,step:x,disabled:E,values:f,valueBounds:Cr,isInteractive:W,isReversed:p,isVertical:C,eventSource:null,focusThumbOnChange:n,betweenThumbs:F,orientation:V}),oe=u.useRef(null),Be=u.useRef(null),le=zr({getNodes:()=>{var t;const r=(t=oe.current)==null?void 0:t.querySelectorAll("[role=slider]");return r?Array.from(r):[]}});a??(a=u.useId()),h??(h=a);const K=u.useCallback(r=>`slider-thumb-${a}-${r}`,[a]),_e=u.useCallback(r=>`slider-input-${a}-${r}`,[a]),Oe=u.useCallback(r=>`slider-marker-${a}-${r}`,[a]);$r(oe,{onSessionStart:r=>{const{isInteractive:t,values:s}=R.current;if(!t)return;re(!0);const d=Ue(r)||0,k=s.map(se=>Math.abs(se-d)),M=Math.min(...k);let T=k.indexOf(M);const y=k.filter(se=>se===M);y.length>1&&d>s[T]&&(T=T+y.length-1),_(T),P(T,d),Ke(T),De(s)},onSessionEnd:()=>{const{isInteractive:r,values:t}=R.current;r&&(re(!1),H(t))},onMove:r=>{const{isInteractive:t}=R.current;if(!t||g==-1)return;const s=Ue(r)||0;_(g),P(g,s),Ke(g)}});const Ue=u.useCallback(r=>{var Ye;if(!Be.current)return;const{min:t,max:s}=R.current;R.current.eventSource="pointer";const{bottom:d,left:k,height:M,width:T}=Be.current.getBoundingClientRect(),{clientX:y,clientY:J}=((Ye=r.touches)==null?void 0:Ye[0])??r;let Ae=(C?d-J:y-k)/(C?M:T);return p&&(Ae=1-Ae),Kr(Ae,t,s)},[R,C,p]),Ke=u.useCallback(r=>{var d;if(r??(r=g),r===-1||!n)return;const t=K(r),s=(d=oe.current)==null?void 0:d.ownerDocument.getElementById(t);s&&setTimeout(()=>s.focus())},[g,n,K]),P=u.useCallback((r,t)=>{const{isInteractive:s,valueBounds:d,values:k}=R.current;if(!s)return;const{min:M,max:T}=d[r];t=parseFloat(Ur(t,M,D)),t=Ze(t,M,T);const y=[...k];y[r]=t,N(y)},[R,D,N]),X=u.useCallback((r,t=D)=>{const{values:s}=R.current,d=s[r];P(r,p?d-t:d+t)},[P,p,R,D]),Y=u.useCallback((r,t=D)=>{const{values:s}=R.current,d=s[r];P(r,p?d+t:d-t)},[P,p,R,D]),Rr=u.useCallback(()=>N(S),[S,N]),Xe=u.useCallback(r=>{const{valueBounds:t}=R.current,{min:s,max:d}=t[g],M={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,U),PageDown:()=>Y(g,U),Home:()=>P(g,s),End:()=>P(g,d)}[r.key];M&&(r.preventDefault(),r.stopPropagation(),M(r),R.current.eventSource="keyboard")},[g,P,R,Y,X,U]);jr(()=>{const{eventSource:r,values:t}=R.current;r==="keyboard"&&H(t)},[f,H]);const kr=u.useCallback((r={},t=null)=>{const s={width:0,height:0},d=C?"height":"width",{width:k,height:M}=le.reduce((y=s,J=s)=>y[d]>J[d]?y:J,s)??{},T={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...C?k?{paddingLeft:k/2,paddingRight:k/2}:{}:M?{paddingTop:M/2,paddingBottom:M/2}:{}};return{...qr(b,["value","onChangeStart","onChangeEnd"]),...r,id:`slider-container-${a}`,ref:Qe(t,oe),tabIndex:-1,style:T}},[a,C,b,le]),Mr=u.useCallback(({index:r,...t}={},s=null)=>({...Q(b,G),...t,ref:s,id:_e(r),type:"hidden",name:Hr(h)?h[r]:`${h}-${r}`,value:f[r],required:I,disabled:E,readOnly:q}),[E,_e,h,q,I,b,f]),wr=u.useCallback((r={},t=null)=>{const s={...r.style,position:"absolute",...C?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...Q(b,G),...r,id:`slider-track-${a}`,ref:Qe(t,Be),style:s}},[a,C,b]),xr=u.useCallback((r={},t=null)=>{const s=Math.abs(O[1]-O[0]),d=p?100-O[0]:O[0],k={...r.style,position:"absolute",...C?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...p?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...p?{right:`${d}%`}:{left:`${d}%`}}};return{...Q(b,G),...r,id:`slider-filled-track-${a}`,ref:t,style:k}},[a,p,C,b,O]),Tr=u.useCallback((r={},t=null)=>{let s=en(r.value,c,m);s=p?100-s:s;const d={...r.style,position:"absolute",pointerEvents:"none",...C?{bottom:`${s}%`}:{left:`${s}%`}};return{...Q(b,G),...r,ref:t,id:Oe(r.value),"aria-hidden":!0,"data-invalid":He(r.value<c||m<r.value),"data-highlighted":He(f[0]<=r.value&&r.value<=f[1]),style:d}},[Oe,p,C,m,c,b,f]),Vr=u.useCallback(({index:r,...t}={},s=null)=>{const d=O[r],{width:k,height:M}=le[r]??{width:0,height:0},T={...t.style,position:"absolute",userSelect:"none",touchAction:"none",...C?{bottom:`calc(${d}% - ${M/2}px)`}:{left:`calc(${d}% - ${k/2}px)`}},y=f[r];if(y==null)throw new Error(`Cannot find value at index '${r}'. The 'value' or 'defaultValue'`);return{"aria-label":"Slider thumb",...Q(b,G),...t,ref:s,id:K(r),tabIndex:W&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":m,"aria-valuenow":y,"data-active":He(L&&n&&g===r),"aria-orientation":V,onKeyDown:Le(t.onKeyDown,Xe),onFocus:Le(t.onFocus,b.onFocus,()=>{ae(!0),_(r)}),onBlur:Le(t.onBlur,b.onBlur,()=>{ae(!1),_(-1)}),style:T}},[c,m,n,g,K,L,W,C,Xe,V,b,O,le,f]);return{values:f,isFocused:$e,isDragging:L,isVertical:C,stepUp:X,stepDown:Y,reset:Rr,setActiveIndex:_,getThumbId:K,getInputId:_e,getMarkerId:Oe,getContainerProps:kr,getInputProps:Mr,getTrackProps:wr,getFilledTrackProps:xr,getMarkProps:Tr,getThumbProps:Vr}},[Yr,Ie]=_r({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),i=A((n,o)=>{const[a,h]=Lr("RangeSlider",n),{className:c,children:m,inputProps:x,trackProps:S,filledTrackProps:V,thumbProps:p,trackColor:F,filledTrackColor:I,trackSize:E,thumbColor:q,thumbSize:Ee,...b}=Wr(h),{isVertical:De,getContainerProps:H,getInputProps:ze,getTrackProps:N,getFilledTrackProps:L,getMarkProps:re,getThumbProps:$e}=Xr(b),ae={...a.container},g=Or(m),[_]=qe(g,ee),[W]=qe(g,z),[U]=qe(g,$),D=Je(g,z),te=Je(g,$),f=Ar(g)?m:Nr(g,ee,z,$);return e(Yr,{value:{isVertical:De,getTrackProps:N,getFilledTrackProps:L,getMarkProps:re,getThumbProps:$e,getInputProps:ze,trackProps:S,trackColor:F,trackSize:E,filledTrackProps:V,filledTrackColor:I,thumbProps:p,thumbColor:q,thumbSize:Ee,inputProps:x,styles:a},children:l(j.div,{className:ne("ui-slider",c),__css:ae,...H({},o),children:[_??e(ee,{}),f,W??(D?null:e(z,{})),U??(te?null:e($,{}))]})})}),ee=A(({className:n,children:o,filledTrackProps:a,...h},c)=>{const{styles:m,trackProps:x,trackColor:S,trackSize:V,isVertical:p,getTrackProps:F}=Ie(),I={...m.track};return e(j.div,{className:ne("ui-slider__track",n),__css:I,...F({...S?{bg:S}:{},...V?p?{w:V}:{h:V}:{},...x,...h},c),children:o??e(br,{...a})})}),br=A(({className:n,...o},a)=>{const{styles:h,filledTrackProps:c,filledTrackColor:m,getFilledTrackProps:x}=Ie(),S={...h.filledTrack};return e(j.div,{className:ne("ui-slider__track-filled",n),__css:S,...x({...m?{bg:m}:{},...c,...o},a)})}),v=A(({className:n,...o},a)=>{const{styles:h,getMarkProps:c}=Ie(),m={display:"inline-flex",justifyContent:"center",alignItems:"center",...h.mark};return e(j.div,{className:ne("ui-slider__mark",n),__css:m,...c(o,a)})}),vr=A(({className:n,index:o,children:a,...h},c)=>{const{styles:m,thumbProps:x,thumbColor:S,thumbSize:V,inputProps:p,getThumbProps:F,getInputProps:I}=Ie(),E={...m.thumb};return l(j.div,{className:ne("ui-slider__thumb",n),__css:E,...F({index:o,...S?{bg:S}:{},...V?{boxSize:V}:{},...x,...h},c),children:[e(j.input,{...I({...p,index:o},c)}),a]})}),z=A((n,o)=>e(vr,{ref:o,index:0,...n})),$=A((n,o)=>e(vr,{ref:o,index:1,...n})),et={title:"Components / Forms / RangeSlider",component:i},ie=()=>e(i,{}),ue=()=>e(i,{defaultValue:[10,90]}),ce=()=>l(w,{children:[e(i,{size:"sm",defaultValue:[0,25]}),e(i,{size:"md",defaultValue:[25,50]}),e(i,{size:"lg",defaultValue:[50,75]})]}),de=()=>e(w,{children:Ir.map(n=>e(i,{colorScheme:n},n))}),me=()=>e(i,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ge=()=>l(w,{children:[e(i,{isReversed:!0}),e(i,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),he=()=>{const[n,o]=u.useState([50,150]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,min:0,max:200,onChange:o})]})},pe=()=>{const[n,o]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,onChange:o})]})},Se=()=>e(i,{betweenThumbs:10}),be=()=>{const[n,o]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,step:5,focusThumbOnChange:!1}),l(We,{w:"full",gap:"xl",children:[l(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),l(We,{gap:"md",children:[e(Z,{isDisabled:n[0]===0,onClick:()=>o(a=>a[0]!==0?[a[0]-5,a[1]]:a),children:"-5"}),e(Z,{isDisabled:n[0]===100||n[0]===n[1],colorScheme:"blue",onClick:()=>o(a=>a[0]!==100&&n[0]!==n[1]?[a[0]+5,a[1]]:a),children:"+5"})]})]}),l(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),l(We,{gap:"md",children:[e(Z,{isDisabled:n[1]===0||n[0]===n[1],onClick:()=>o(a=>a[1]!==0&&n[0]!==n[1]?[a[0],a[1]-5]:a),children:"-5"}),e(Z,{isDisabled:n[1]===100,colorScheme:"blue",onClick:()=>o(a=>a[1]!==100?[a[0],a[1]+5]:a),children:"+10"})]})]})]})]})},ve=()=>l(Sr,{gap:"lg",children:[l(i,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(i,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),fe=()=>{const[n,o]=u.useState([25,75]),[a,{on:h,off:c}]=yr(!1);return l(i,{value:n,onChange:o,mt:"10",onMouseEnter:h,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(rn,{placement:"top",label:`${n[0]}%`,isOpen:a,children:e(z,{})}),e(rn,{placement:"top",label:`${n[1]}%`,isOpen:a,children:e($,{})})]})},Ce=()=>l(w,{children:[e(i,{isDisabled:!0}),e(Fe,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),Re=()=>l(w,{children:[e(i,{isReadOnly:!0}),e(Fe,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(i,{})})]}),ke=()=>{const[n,o]=u.useState([15,45]);return l(w,{children:[e(i,{isInvalid:n[0]<20,value:n,onChange:o}),e(Fe,{isInvalid:n[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(i,{value:n,onChange:o})})]})},Me=()=>l(w,{children:[e(i,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(i,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(i,{children:[e(ee,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(z,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),l(i,{children:[e(ee,{bg:"red.200",children:e(br,{bg:"red.500"})}),e(z,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),we=()=>l(w,{children:[e(i,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),l(i,{children:[e(z,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}),e($,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})]})]}),xe=()=>{const[n,o]=u.useState([25,75]);return e(w,{children:l(i,{value:n,onChange:o,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[0],"%"]}),l(v,{value:n[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n[1],"%"]})]})})},Te=()=>{const[n,o]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1]]}),e(i,{value:n,onChange:o})]})},Ve=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", Start Min: ",a[0],", Start Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeStart:h})]})},ye=()=>{const[n,o]=u.useState([25,75]),[a,h]=u.useState([25,75]);return l(w,{children:[l(B,{children:["Min: ",n[0],", Max: ",n[1],", End Min: ",a[0],", End Max:"," ",a[0]]}),e(i,{value:n,onChange:o,onChangeEnd:h})]})},Pe=()=>{var x;const n={rangeSlider:[25,75]},{control:o,handleSubmit:a,watch:h,formState:{errors:c}}=Pr({defaultValues:n}),m=S=>console.log("submit:",S);return console.log("watch:",h()),l(Sr,{as:"form",onSubmit:a(m),children:[e(Fe,{isInvalid:!!c.rangeSlider,label:"Volume",errorMessage:(x=c.rangeSlider)==null?void 0:x.message,children:e(Fr,{name:"rangeSlider",control:o,render:({field:S})=>e(i,{...S})})}),e(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var an,tn,on;ie.parameters={...ie.parameters,docs:{...(an=ie.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(on=(tn=ie.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var ln,sn,un;ue.parameters={...ue.parameters,docs:{...(ln=ue.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(un=(sn=ue.parameters)==null?void 0:sn.docs)==null?void 0:un.source}}};var cn,dn,mn;ce.parameters={...ce.parameters,docs:{...(cn=ce.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>;
}`,...(mn=(dn=ce.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var gn,hn,pn;de.parameters={...de.parameters,docs:{...(gn=de.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <RangeSlider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(pn=(hn=de.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var Sn,bn,vn;me.parameters={...me.parameters,docs:{...(Sn=me.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(vn=(bn=me.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var fn,Cn,Rn;ge.parameters={...ge.parameters,docs:{...(fn=ge.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(Rn=(Cn=ge.parameters)==null?void 0:Cn.docs)==null?void 0:Rn.source}}};var kn,Mn,wn;he.parameters={...he.parameters,docs:{...(kn=he.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([50, 150]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(wn=(Mn=he.parameters)==null?void 0:Mn.docs)==null?void 0:wn.source}}};var xn,Tn,Vn;pe.parameters={...pe.parameters,docs:{...(xn=pe.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>;
}`,...(Vn=(Tn=pe.parameters)==null?void 0:Tn.docs)==null?void 0:Vn.source}}};var yn,Pn,Fn;Se.parameters={...Se.parameters,docs:{...(yn=Se.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
  return <RangeSlider betweenThumbs={10} />;
}`,...(Fn=(Pn=Se.parameters)==null?void 0:Pn.docs)==null?void 0:Fn.source}}};var In,En,Dn;be.parameters={...be.parameters,docs:{...(In=be.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(Dn=(En=be.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var zn,$n,Bn;ve.parameters={...ve.parameters,docs:{...(zn=ve.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(Bn=($n=ve.parameters)==null?void 0:$n.docs)==null?void 0:Bn.source}}};var _n,On,An;fe.parameters={...fe.parameters,docs:{...(_n=fe.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(An=(On=fe.parameters)==null?void 0:On.docs)==null?void 0:An.source}}};var Nn,jn,qn;Ce.parameters={...Ce.parameters,docs:{...(Nn=Ce.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(qn=(jn=Ce.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Hn,Ln,Wn;Re.parameters={...Re.parameters,docs:{...(Hn=Re.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Wn=(Ln=Re.parameters)==null?void 0:Ln.docs)==null?void 0:Wn.source}}};var Un,Kn,Xn;ke.parameters={...ke.parameters,docs:{...(Un=ke.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label="volume (sound)" errorMessage="Min volume should be set to 20 or higher.">
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Xn=(Kn=ke.parameters)==null?void 0:Kn.docs)==null?void 0:Xn.source}}};var Yn,Jn,Gn;Me.parameters={...Me.parameters,docs:{...(Yn=Me.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(Jn=Me.parameters)==null?void 0:Jn.docs)==null?void 0:Gn.source}}};var Qn,Zn,er;we.parameters={...we.parameters,docs:{...(Qn=we.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Icon icon={faWaveSquare} />
    }} />

      <RangeSlider>
        <RangeSliderStartThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>;
}`,...(er=(Zn=we.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,ar;xe.parameters={...xe.parameters,docs:{...(nr=xe.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(ar=(rr=xe.parameters)==null?void 0:rr.docs)==null?void 0:ar.source}}};var tr,or,lr;Te.parameters={...Te.parameters,docs:{...(tr=Te.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>;
}`,...(lr=(or=Te.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var sr,ir,ur;Ve.parameters={...Ve.parameters,docs:{...(sr=Ve.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(ur=(ir=Ve.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;ye.parameters={...ye.parameters,docs:{...(cr=ye.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(mr=(dr=ye.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var gr,hr,pr;Pe.parameters={...Pe.parameters,docs:{...(gr=Pe.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(pr=(hr=Pe.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};const nt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{nt as __namedExportsOrder,ie as basic,Me as customColor,Te as customControl,xe as customMark,we as customThumb,et as default,Ce as isDisabled,ke as isInvalid,Re as isReadonly,ye as onChangeEnd,Ve as onChangeStart,Pe as reactHookForm,Se as withBetweenThumbs,de as withColorScheme,ue as withDefaultValue,be as withFocusThumbOnChange,ve as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ce as withSize,pe as withStep,fe as withTooltip};
