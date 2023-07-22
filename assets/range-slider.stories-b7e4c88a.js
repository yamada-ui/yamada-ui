import{j as e,a as s,F as x}from"./jsx-runtime-276775ef.js";import{I as Ne,p as je}from"./fontawesome-icon-fa719382.js";import{r as c}from"./index-1cdf6ce0.js";import{u as Vr,C as Fr}from"./index.esm-070aff36.js";import{u as Ir}from"./index-a2ab5035.js";import{u as Er,c as Pr,b as Dr}from"./index-ce8d8b42.js";import{u as zr,f as G,F as Ie}from"./form-control-942fbad2.js";import{o as $r,s as Br,t as qe,J as Je,K as Or,L as Ar,d as j,e as ne,c as Ge,h as _r,y as Nr,w as Qe,z as Q,l as jr,v as Le}from"./factory-75cc801c.js";import{f as _}from"./forward-ref-86842115.js";import{a as qr}from"./use-component-style-9ee8741d.js";import{o as Lr,d as He}from"./theme-8f32df8a.js";import{c as Ze,v as en,r as Hr,p as Wr}from"./number-cdadea8f.js";import{T as B}from"./text-914562f0.js";import{C as We}from"./center-f24092aa.js";import{F as nn}from"./flex-d10357f1.js";import{B as Z}from"./button-aae638aa.js";import{V as pr}from"./stack-960c90c9.js";import{u as Kr}from"./index-7733ff91.js";import{T as rn}from"./tooltip-9fa77775.js";import"./index-53e63a74.js";import"./icon-e7971e5d.js";import"./index-71f4e961.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./loading-b1bbd31e.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./index-2d13ca51.js";import"./index-2c974345.js";import"./index-9727ca61.js";import"./index-f3237c2b.js";import"./motion-1ef152f4.js";import"./container-portal-1f9dc5e6.js";import"./index-a01a9712.js";import"./slide-fade-0916f87e.js";import"./utils-f527cf5c.js";import"./scale-fade-5db4595d.js";const Ur=r=>{let{id:a,name:o,min:u=0,max:m=100,step:b=1,defaultValue:R,orientation:p="horizontal",isReversed:h,focusThumbOnChange:V=!0,betweenThumbs:I=0,required:E,disabled:P,readOnly:q,onChange:Pe,...S}=zr(r);if(R=R??[u+(m-u)/4,m-(m-u)/4],m<u)throw new Error("Do not assign a number less than 'min' to 'max'");const De=Ge(S.onChangeStart),L=Ge(S.onChangeEnd),[ze,N]=Ir({value:S.value,defaultValue:R,onChange:Pe}),[H,re]=c.useState(!1),[$e,ae]=c.useState(!1),[g,O]=c.useState(-1),W=!(P||q),K=(m-u)/10,D=b||(m-u)/100,te=I*b,C=ze.map(n=>Ze(n,u,m)),Rr=C.map(n=>m-n+u),A=(h?Rr:C).map(n=>en(n,u,m)),Cr=[{min:u,max:C[1]-te},{min:C[0]+te,max:m}],f=p==="vertical",k=Er({min:u,max:m,step:b,disabled:P,values:C,valueBounds:Cr,isInteractive:W,isReversed:h,isVertical:f,eventSource:null,focusThumbOnChange:V,betweenThumbs:I,orientation:p}),oe=c.useRef(null),Be=c.useRef(null),le=Pr({getNodes:()=>{var l;const n=(l=oe.current)==null?void 0:l.querySelectorAll("[role=slider]");return n?Array.from(n):[]}});a=a??c.useId(),o=o??a;const U=c.useCallback(n=>`slider-thumb-${a}-${n}`,[a]),Oe=c.useCallback(n=>`slider-input-${a}-${n}`,[a]),Ae=c.useCallback(n=>`slider-marker-${a}-${n}`,[a]);Dr(oe,{onSessionStart:n=>{const{isInteractive:l,values:i}=k.current;if(!l)return;re(!0);const d=Ke(n)||0,w=i.map(se=>Math.abs(se-d)),M=Math.min(...w);let T=w.indexOf(M);const y=w.filter(se=>se===M);y.length>1&&d>i[T]&&(T=T+y.length-1),O(T),F(T,d),Ue(T),De(i)},onSessionEnd:()=>{const{isInteractive:n,values:l}=k.current;n&&(re(!1),L(l))},onMove:n=>{const{isInteractive:l}=k.current;if(!l||g==-1)return;const i=Ke(n)||0;O(g),F(g,i),Ue(g)}});const Ke=c.useCallback(n=>{var Ye;if(!Be.current)return;const{min:l,max:i}=k.current;k.current.eventSource="pointer";const{bottom:d,left:w,height:M,width:T}=Be.current.getBoundingClientRect(),{clientX:y,clientY:J}=((Ye=n.touches)==null?void 0:Ye[0])??n;let _e=(f?d-J:y-w)/(f?M:T);return h&&(_e=1-_e),Wr(_e,l,i)},[k,f,h]),Ue=c.useCallback(n=>{var d;if(n=n??g,n===-1||!V)return;const l=U(n),i=(d=oe.current)==null?void 0:d.ownerDocument.getElementById(l);i&&setTimeout(()=>i.focus())},[g,V,U]),F=c.useCallback((n,l)=>{const{isInteractive:i,valueBounds:d,values:w}=k.current;if(!i)return;const{min:M,max:T}=d[n];l=parseFloat(Hr(l,M,D)),l=Ze(l,M,T);const y=[...w];y[n]=l,N(y)},[k,D,N]),X=c.useCallback((n,l=D)=>{const{values:i}=k.current,d=i[n];F(n,h?d-l:d+l)},[F,h,k,D]),Y=c.useCallback((n,l=D)=>{const{values:i}=k.current,d=i[n];F(n,h?d+l:d-l)},[F,h,k,D]),fr=c.useCallback(()=>N(R),[R,N]),Xe=c.useCallback(n=>{const{valueBounds:l}=k.current,{min:i,max:d}=l[g],M={ArrowRight:()=>X(g),ArrowUp:()=>X(g),ArrowLeft:()=>Y(g),ArrowDown:()=>Y(g),PageUp:()=>X(g,K),PageDown:()=>Y(g,K),Home:()=>F(g,i),End:()=>F(g,d)}[n.key];M&&(n.preventDefault(),n.stopPropagation(),M(n),k.current.eventSource="keyboard")},[g,F,k,Y,X,K]);_r(()=>{const{eventSource:n,values:l}=k.current;n==="keyboard"&&L(l)},[C,L]);const kr=c.useCallback((n={},l=null)=>{const i={width:0,height:0},d=f?"height":"width",{width:w,height:M}=le.reduce((y=i,J=i)=>y[d]>J[d]?y:J,i)??{},T={...n.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...f?w?{paddingLeft:w/2,paddingRight:w/2}:{}:M?{paddingTop:M/2,paddingBottom:M/2}:{}};return{...Nr(S,["value","onChangeStart","onChangeEnd"]),...n,id:`slider-container-${a}`,ref:Qe(l,oe),tabIndex:-1,style:T}},[a,f,S,le]),wr=c.useCallback(({index:n,...l}={},i=null)=>({...Q(S,G),...l,ref:i,id:Oe(n),type:"hidden",name:jr(o)?o[n]:`${o}-${n}`,value:C[n],required:E,disabled:P,readOnly:q}),[P,Oe,o,q,E,S,C]),Mr=c.useCallback((n={},l=null)=>{const i={...n.style,position:"absolute",...f?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...Q(S,G),...n,id:`slider-track-${a}`,ref:Qe(l,Be),style:i}},[a,f,S]),xr=c.useCallback((n={},l=null)=>{const i=Math.abs(A[1]-A[0]),d=h?100-A[0]:A[0],w={...n.style,position:"absolute",...f?{left:"50%",transform:"translateX(-50%)",height:`${i}%`,...h?{top:`${d}%`}:{bottom:`${d}%`}}:{top:"50%",transform:"translateY(-50%)",width:`${i}%`,...h?{right:`${d}%`}:{left:`${d}%`}}};return{...Q(S,G),...n,id:`slider-filled-track-${a}`,ref:l,style:w}},[a,h,f,S,A]),Tr=c.useCallback((n={},l=null)=>{let i=en(n.value,u,m);i=h?100-i:i;const d={...n.style,position:"absolute",pointerEvents:"none",...f?{bottom:`${i}%`}:{left:`${i}%`}};return{...Q(S,G),...n,ref:l,id:Ae(n.value),"aria-hidden":!0,"data-invalid":He(n.value<u||m<n.value),"data-highlighted":He(C[0]<=n.value&&n.value<=C[1]),style:d}},[Ae,h,f,m,u,S,C]),yr=c.useCallback(({index:n,...l}={},i=null)=>{const d=A[n],{width:w,height:M}=le[n]??{width:0,height:0},T={...l.style,position:"absolute",userSelect:"none",touchAction:"none",...f?{bottom:`calc(${d}% - ${M/2}px)`}:{left:`calc(${d}% - ${w/2}px)`}};if(C[n]==null)throw new Error(`Cannot find value at index '${n}'. The 'value' or 'defaultValue'`);return{...Q(S,G),...l,ref:i,id:U(n),tabIndex:W?0:void 0,role:"slider","data-active":He(H&&g===n),"aria-orientation":p,onKeyDown:Le(l.onKeyDown,Xe),onFocus:Le(l.onFocus,S.onFocus,()=>{ae(!0),O(n)}),onBlur:Le(l.onBlur,S.onBlur,()=>{ae(!1),O(-1)}),style:T}},[g,U,H,W,f,Xe,p,S,A,le,C]);return{values:C,isFocused:$e,isDragging:H,isVertical:f,stepUp:X,stepDown:Y,reset:fr,setActiveIndex:O,getThumbId:U,getInputId:Oe,getMarkerId:Ae,getContainerProps:kr,getInputProps:wr,getTrackProps:Mr,getFilledTrackProps:xr,getMarkProps:Tr,getThumbProps:yr}},[Xr,Ee]=$r({name:"RangeSliderContext",errorMessage:`useRangeSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `}),t=_((r,a)=>{const[o,u]=qr("Slider",r),{className:m,children:b,input:R,track:p,filledTrack:h,thumb:V,trackColor:I,filledTrackColor:E,trackSize:P,thumbColor:q,thumbSize:Pe,...S}=Lr(u),{isVertical:De,getContainerProps:L,getInputProps:ze,getTrackProps:N,getFilledTrackProps:H,getMarkProps:re,getThumbProps:$e}=Ur(S),ae={...o.container},g=Br(b),[O]=qe(g,ee),[W]=qe(g,z),[K]=qe(g,$),D=Je(g,z),te=Je(g,$),C=Or(g)?b:Ar(g,ee,z,$);return e(Xr,{value:{isVertical:De,getTrackProps:N,getFilledTrackProps:H,getMarkProps:re,getThumbProps:$e,getInputProps:ze,track:p,trackColor:I,trackSize:P,filledTrack:h,filledTrackColor:E,thumb:V,thumbColor:q,thumbSize:Pe,input:R,styles:o},children:s(j.div,{className:ne("ui-slider",m),__css:ae,...L({},a),children:[O??e(ee,{}),C,W??(D?null:e(z,{})),K??(te?null:e($,{}))]})})}),ee=_(({className:r,children:a,filledTrack:o,...u},m)=>{const{styles:b,track:R,trackColor:p,trackSize:h,isVertical:V,getTrackProps:I}=Ee(),E={...b.track};return e(j.div,{className:ne("ui-slider-track",r),__css:E,...I({...p?{bg:p}:{},...h?V?{w:h}:{h}:{},...R,...u},m),children:a??e(br,{...o})})}),br=_(({className:r,...a},o)=>{const{styles:u,filledTrack:m,filledTrackColor:b,getFilledTrackProps:R}=Ee(),p={...u.filledTrack};return e(j.div,{className:ne("ui-slider-filledTrack",r),__css:p,...R({...b?{bg:b}:{},...m,...a},o)})}),v=_(({className:r,...a},o)=>{const{styles:u,getMarkProps:m}=Ee(),b={display:"inline-flex",justifyContent:"center",alignItems:"center",...u.mark};return e(j.div,{className:ne("ui-slider-mark",r),__css:b,...m(a,o)})}),vr=_(({className:r,index:a,children:o,...u},m)=>{const{styles:b,thumb:R,thumbColor:p,thumbSize:h,input:V,getThumbProps:I,getInputProps:E}=Ee(),P={...b.thumb};return s(j.div,{className:ne("ui-slider-thumb",r),__css:P,...I({index:a,...p?{bg:p}:{},...h?{boxSize:h}:{},...R,...u},m),children:[e(j.input,{...E({...V,index:a},m)}),o]})}),z=_((r,a)=>e(vr,{ref:a,index:0,...r})),$=_((r,a)=>e(vr,{ref:a,index:1,...r})),za={title:"Components / Forms / RangeSlider",component:t},ie=()=>e(t,{}),ce=()=>e(t,{defaultValue:[10,90]}),ue=()=>s(x,{children:[e(t,{size:"sm",defaultValue:[0,25]}),e(t,{size:"md",defaultValue:[25,50]}),e(t,{size:"lg",defaultValue:[50,75]})]}),de=()=>s(x,{children:[e(t,{colorScheme:"primary"}),e(t,{colorScheme:"secondary"}),e(t,{colorScheme:"warning"}),e(t,{colorScheme:"danger"}),e(t,{colorScheme:"link"}),e(t,{colorScheme:"gray"}),e(t,{colorScheme:"red"}),e(t,{colorScheme:"orange"}),e(t,{colorScheme:"yellow"}),e(t,{colorScheme:"green"}),e(t,{colorScheme:"teal"}),e(t,{colorScheme:"blue"}),e(t,{colorScheme:"cyan"}),e(t,{colorScheme:"purple"}),e(t,{colorScheme:"pink"})]}),me=()=>e(t,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ge=()=>s(x,{children:[e(t,{isReversed:!0}),e(t,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),he=()=>{const[r,a]=c.useState([50,150]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(t,{value:r,min:0,max:200,onChange:a})]})},Se=()=>{const[r,a]=c.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(t,{value:r,step:5,onChange:a})]})},pe=()=>e(t,{betweenThumbs:10}),be=()=>{const[r,a]=c.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(t,{value:r,step:5,focusThumbOnChange:!1}),s(We,{w:"full",gap:"xl",children:[s(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Min"}),s(We,{gap:"md",children:[e(Z,{isDisabled:r[0]===0,onClick:()=>a(o=>o[0]!==0?[o[0]-5,o[1]]:o),children:"-5"}),e(Z,{isDisabled:r[0]===100||r[0]===r[1],colorScheme:"blue",onClick:()=>a(o=>o[0]!==100&&r[0]!==r[1]?[o[0]+5,o[1]]:o),children:"+5"})]})]}),s(nn,{direction:"column",align:"center",gap:"sm",children:[e(B,{children:"Max"}),s(We,{gap:"md",children:[e(Z,{isDisabled:r[1]===0||r[0]===r[1],onClick:()=>a(o=>o[1]!==0&&r[0]!==r[1]?[o[0],o[1]-5]:o),children:"-5"}),e(Z,{isDisabled:r[1]===100,colorScheme:"blue",onClick:()=>a(o=>o[1]!==100?[o[0],o[1]+5]:o),children:"+10"})]})]})]})]})},ve=()=>s(pr,{gap:"lg",children:[s(t,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),s(t,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),s(t,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),Re=()=>{const[r,a]=c.useState([25,75]),[o,{on:u,off:m}]=Kr(!1);return s(t,{value:r,onChange:a,mt:"10",onMouseEnter:u,onMouseLeave:m,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(rn,{placement:"top",label:`${r[0]}%`,isOpen:o,children:e(z,{})}),e(rn,{placement:"top",label:`${r[1]}%`,isOpen:o,children:e($,{})})]})},Ce=()=>s(x,{children:[e(t,{isDisabled:!0}),e(Ie,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(t,{})})]}),fe=()=>s(x,{children:[e(t,{isReadOnly:!0}),e(Ie,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(t,{})})]}),ke=()=>{const[r,a]=c.useState([15,45]);return s(x,{children:[e(t,{isInvalid:r[0]<20,value:r,onChange:a}),e(Ie,{isInvalid:r[0]<20,label:"volume (sound)",errorMessage:"Min volume should be set to 20 or higher.",children:e(t,{value:r,onChange:a})})]})},we=()=>s(x,{children:[e(t,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(t,{track:{bg:"green.200"},filledTrack:{bg:"green.500"},thumb:{bg:"green.700"}}),s(t,{children:[e(ee,{bg:"blue.200",filledTrack:{bg:"blue.500"}}),e(z,{bg:"blue.700"}),e($,{bg:"blue.700"})]}),s(t,{children:[e(ee,{bg:"red.200",children:e(br,{bg:"red.500"})}),e(z,{bg:"red.700"}),e($,{bg:"red.700"})]})]}),Me=()=>s(x,{children:[e(t,{thumb:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),s(t,{children:[e(z,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}),e($,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})]})]}),xe=()=>{const[r,a]=c.useState([25,75]);return e(x,{children:s(t,{value:r,onChange:a,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),s(v,{value:r[0],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r[0],"%"]}),s(v,{value:r[1],bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r[1],"%"]})]})})},Te=()=>{const[r,a]=c.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1]]}),e(t,{value:r,onChange:a})]})},ye=()=>{const[r,a]=c.useState([25,75]),[o,u]=c.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1],", Start Min: ",o[0],", Start Max:"," ",o[0]]}),e(t,{value:r,onChange:a,onChangeStart:u})]})},Ve=()=>{const[r,a]=c.useState([25,75]),[o,u]=c.useState([25,75]);return s(x,{children:[s(B,{children:["Min: ",r[0],", Max: ",r[1],", End Min: ",o[0],", End Max:"," ",o[0]]}),e(t,{value:r,onChange:a,onChangeEnd:u})]})},Fe=()=>{var R;const r={rangeSlider:[25,75]},{control:a,handleSubmit:o,watch:u,formState:{errors:m}}=Vr({defaultValues:r}),b=p=>console.log("submit:",p);return console.log("watch:",u()),s(pr,{as:"form",onSubmit:o(b),children:[e(Ie,{isInvalid:!!m.rangeSlider,label:"Volume",errorMessage:(R=m.rangeSlider)==null?void 0:R.message,children:e(Fr,{name:"rangeSlider",control:a,render:({field:p})=>e(t,{...p})})}),e(Z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var an,tn,on;ie.parameters={...ie.parameters,docs:{...(an=ie.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <RangeSlider />;
}`,...(on=(tn=ie.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var ln,sn,cn;ce.parameters={...ce.parameters,docs:{...(ln=ce.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <RangeSlider defaultValue={[10, 90]} />;
}`,...(cn=(sn=ce.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var un,dn,mn;ue.parameters={...ue.parameters,docs:{...(un=ue.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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

      <RangeSlider colorScheme='red' />

      <RangeSlider colorScheme='orange' />

      <RangeSlider colorScheme='yellow' />

      <RangeSlider colorScheme='green' />

      <RangeSlider colorScheme='teal' />

      <RangeSlider colorScheme='blue' />

      <RangeSlider colorScheme='cyan' />

      <RangeSlider colorScheme='purple' />

      <RangeSlider colorScheme='pink' />
    </>;
}`,...(Sn=(hn=de.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};var pn,bn,vn;me.parameters={...me.parameters,docs:{...(pn=me.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <RangeSlider orientation='vertical' h='calc(100vh - 16px * 2)' />;
}`,...(vn=(bn=me.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var Rn,Cn,fn;ge.parameters={...ge.parameters,docs:{...(Rn=ge.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation='vertical' h='calc(100vh - 16px * 3 - 14px)' />
    </>;
}`,...(fn=(Cn=ge.parameters)==null?void 0:Cn.docs)==null?void 0:fn.source}}};var kn,wn,Mn;he.parameters={...he.parameters,docs:{...(kn=he.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
}`,...(In=(Fn=pe.parameters)==null?void 0:Fn.docs)==null?void 0:In.source}}};var En,Pn,Dn;be.parameters={...be.parameters,docs:{...(En=be.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Pn=be.parameters)==null?void 0:Pn.docs)==null?void 0:Dn.source}}};var zn,$n,Bn;ve.parameters={...ve.parameters,docs:{...(zn=ve.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(_n=(An=Re.parameters)==null?void 0:An.docs)==null?void 0:_n.source}}};var Nn,jn,qn;Ce.parameters={...Ce.parameters,docs:{...(Nn=Ce.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isDisabled />

      <FormControl isDisabled label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <RangeSlider />
      </FormControl>
    </>;
}`,...(qn=(jn=Ce.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var Ln,Hn,Wn;fe.parameters={...fe.parameters,docs:{...(Ln=fe.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <>
      <RangeSlider isReadOnly />

      <FormControl isReadOnly label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <RangeSlider />
      </FormControl>
    </>;
}`,...(Wn=(Hn=fe.parameters)==null?void 0:Hn.docs)==null?void 0:Wn.source}}};var Kn,Un,Xn;ke.parameters={...ke.parameters,docs:{...(Kn=ke.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([15, 45]);
  return <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value[0] < 20} label='volume (sound)' errorMessage='Min volume should be set to 20 or higher.'>
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Xn=(Un=ke.parameters)==null?void 0:Un.docs)==null?void 0:Xn.source}}};var Yn,Jn,Gn;we.parameters={...we.parameters,docs:{...(Yn=we.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(Jn=we.parameters)==null?void 0:Jn.docs)==null?void 0:Gn.source}}};var Qn,Zn,er;Me.parameters={...Me.parameters,docs:{...(Qn=Me.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(lr=(or=Te.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var sr,ir,cr;ye.parameters={...ye.parameters,docs:{...(sr=ye.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[number, number]>([25, 75]);
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75]);
  return <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{' '}
        {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(cr=(ir=ye.parameters)==null?void 0:ir.docs)==null?void 0:cr.source}}};var ur,dr,mr;Ve.parameters={...Ve.parameters,docs:{...(ur=Ve.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
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
}`,...(Sr=(hr=Fe.parameters)==null?void 0:hr.docs)==null?void 0:Sr.source}}};const $a=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withBetweenThumbs","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{$a as __namedExportsOrder,ie as basic,we as customColor,Te as customControl,xe as customMark,Me as customThumb,za as default,Ce as isDisabled,ke as isInvalid,fe as isReadonly,Ve as onChangeEnd,ye as onChangeStart,Fe as reactHookForm,pe as withBetweenThumbs,de as withColorScheme,ce as withDefaultValue,be as withFocusThumbOnChange,ve as withMark,he as withMinMax,me as withOrientation,ge as withReversed,ue as withSize,Se as withStep,Re as withTooltip};
//# sourceMappingURL=range-slider.stories-b7e4c88a.js.map
