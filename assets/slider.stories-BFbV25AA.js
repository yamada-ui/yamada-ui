import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as Be,p as $e}from"./fontawesome-icon-DuU4vFj3.js";import{u as Sn}from"./index-rYLD436_.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as vn,C as bn}from"./index.esm-Dtxxx2aT.js";import{c as xn}from"./components-B49bDsYR.js";import{u as fn}from"./index-BrWt32zn.js";import{u as Cn,a as kn,b as jn}from"./index-B5s4Fp6m.js";import{a as wn,v as Tn,O as Ae,a0 as Vn,a1 as Mn,a2 as Pn,u as y,c as H,g as Ne,e as yn,o as Fn,w as Ve,R as A,M as Me,h as Pe}from"./factory-Dr9dj2_3.js";import{u as Rn,f as He,g as ye,F as pe}from"./form-control-Dowezunr.js";import{r as Le,v as qe,c as Fe,p as zn}from"./number-49BHn0Cl.js";import{f as L}from"./forward-ref-DuAegr0M.js";import{a as Dn}from"./use-component-style-hxhKhc0Q.js";import{o as In}from"./theme-provider-Bm2ANCLL.js";import{T as F}from"./text-DB123ecx.js";import{C as En}from"./center-d6pbY6aS.js";import{B as Re}from"./button-DzbywrjQ.js";import{V as en}from"./stack-WdGSMB3c.js";import{T as _n}from"./tooltip-Da4HIuzN.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BEP1qdzi.js";import"./index-Cd5bWo2e.js";import"./index-aOeTaPRo.js";import"./_basePickBy-BJO1BQlk.js";import"./iframe-YkpUdt4I.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-BIZneCWx.js";import"./isPlainObject-COn-XCqr.js";import"./index-DrFu-skq.js";import"./ui-provider-Co26Wf_K.js";import"./index-CcbIdHD-.js";import"./environment-provider-CVb8wJdv.js";import"./motion-JgkBPv6g.js";import"./loading-provider-DV4AK6pQ.js";import"./index-CafETBy0.js";import"./Combination-DlzjZhkT.js";import"./loading-93aTLmy8.js";import"./index-BH_-S3fu.js";import"./index-C5SpnNA3.js";import"./motion-CQQhr11g.js";import"./index-_tcQm2Fk.js";import"./container-portal-ERwjpvWO.js";import"./notice-D3g8s_48.js";import"./alert-NX1pOus8.js";import"./close-button-hzIfFZD-.js";import"./use-ripple-D-hcQ8Cu.js";import"./container-B08OpQW3.js";import"./box-BH0_Yzug.js";import"./event-imqIgfLG.js";import"./index-BdAshQZ6.js";import"./index-MNVDWG0u.js";import"./index-CsSDal4E.js";import"./slide-fade-DIQDWhST.js";import"./utils-Dw1cHWxn.js";import"./scale-fade-2_TtIwyk.js";const On=({focusThumbOnChange:n=!0,...t})=>{n||(t.isReadOnly=!0);let{id:i,name:d,min:u=0,max:c=100,step:v=1,defaultValue:g,orientation:C="horizontal",isReversed:p,required:P,disabled:M,readOnly:R,onChange:Se,...m}=Rn(t);if(c<u)throw new Error("Do not assign a number less than 'min' to 'max'");const ve=Ne(m.onChangeStart),z=Ne(m.onChangeEnd),[be,D]=fn({value:m.value,defaultValue:g??u+(c-u)/2,onChange:Se}),[I,q]=s.useState(!1),[xe,U]=s.useState(!1),E=!(M||R),j=(c-u)/10,w=v||(c-u)/100,h=Fe(be,u,c),fe=c-h+u,_=qe(p?fe:h,u,c),b=C==="vertical",f=Cn({min:u,max:c,step:v,value:h,isInteractive:E,focusThumbOnChange:n}),Ce=s.useRef(null),De=s.useRef(null),ke=s.useRef(null),je=s.useRef(null),W=kn(je);jn(De,{onSessionStart:r=>{const{isInteractive:o,value:l}=f.current;o&&(q(!0),Ee(),Ie(r),ve(l))},onSessionEnd:()=>{const{isInteractive:r,value:o}=f.current;r&&(q(!1),z(o))},onMove:r=>{const{isInteractive:o}=f.current;o&&Ie(r)}});const nn=s.useCallback(r=>{var Oe;if(!ke.current)return;const{min:o,max:l,step:x}=f.current;Ce.current="pointer";const{bottom:T,left:we,height:mn,width:hn}=ke.current.getBoundingClientRect(),{clientX:pn,clientY:gn}=((Oe=r.touches)==null?void 0:Oe[0])??r;let Te=(b?T-gn:pn-we)/(b?mn:hn);p&&(Te=1-Te);let $=zn(Te,o,l);return x&&($=parseFloat(Le($,o,x))),$=Fe($,o,l),$},[b,p,f]),Ie=r=>{const{value:o}=f.current,l=nn(r);l!=null&&l!==o&&D(l)},Ee=s.useCallback(()=>{const{focusThumbOnChange:r}=f.current;r&&setTimeout(()=>{var o;return(o=je.current)==null?void 0:o.focus()})},[f]),k=s.useCallback(r=>{const{isInteractive:o,min:l,max:x}=f.current;o&&(r=parseFloat(Le(r,l,w)),r=Fe(r,l,x),D(r))},[w,D,f]),O=s.useCallback((r=w)=>k(p?h-r:h+r),[k,p,w,h]),B=s.useCallback((r=w)=>k(p?h+r:h-r),[k,p,w,h]),tn=s.useCallback(()=>k(g||0),[k,g]),an=s.useCallback(r=>k(r),[k]),_e=s.useCallback(r=>{const{min:o,max:l}=f.current,T={ArrowRight:()=>O(),ArrowUp:()=>O(),ArrowLeft:()=>B(),ArrowDown:()=>B(),PageUp:()=>O(j),PageDown:()=>B(j),Home:()=>k(o),End:()=>k(l)}[r.key];T&&(r.preventDefault(),r.stopPropagation(),T(r),Ce.current="keyboard")},[k,f,B,O,j]);yn(()=>{const{value:r}=f.current;Ee(),Ce.current==="keyboard"&&z(r)},[h,z]);const sn=s.useCallback((r={},o=null)=>{const{width:l,height:x}=W??{width:0,height:0},T={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...b?{paddingLeft:l/2,paddingRight:l/2}:{paddingTop:x/2,paddingBottom:x/2}};return{...Fn(m,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,ref:Ve(o,De),tabIndex:-1,style:T}},[b,m,W]),on=s.useCallback((r={},o=null)=>({...A(m,He),...r,id:i,ref:o,type:"hidden",name:d,value:h,required:P,disabled:M,readOnly:R}),[M,i,d,R,P,m,h]),ln=s.useCallback((r={},o=null)=>{const l={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...A(m,ye({omit:["aria-readonly"]})),...r,ref:Ve(o,ke),style:l}},[b,m]),un=s.useCallback((r={},o=null)=>{const l=Math.abs(p?100-_:_),x={...r.style,position:"absolute",...b?{left:"50%",transform:"translateX(-50%)",height:`${l}%`,...p?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${l}%`,...p?{right:"0%"}:{left:"0%"}}};return{...A(m,ye({omit:["aria-readonly"]})),...r,ref:o,style:x}},[p,b,m,_]),cn=s.useCallback((r,o=null)=>{let l=qe(r.value,u,c);l=p?100-l:l;const x={...r.style,position:"absolute",pointerEvents:"none",...b?{bottom:`${l}%`}:{left:`${l}%`}};return{...A(m,ye({omit:["aria-readonly"]})),...r,ref:o,"aria-hidden":!0,"data-invalid":Me(r.value<u||c<r.value),"data-highlighted":Me(r.value<=h),style:x}},[p,b,c,u,m,h]),dn=s.useCallback((r={},o=null)=>{const l=_,{width:x,height:T}=W??{width:0,height:0},we={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...b?{bottom:`calc(${l}% - ${T/2}px)`}:{left:`calc(${l}% - ${x/2}px)`}};return{"aria-label":"Slider thumb",...A(m,He),...r,ref:Ve(o,je),tabIndex:E&&n?0:void 0,role:"slider","aria-valuemin":u,"aria-valuemax":c,"aria-valuenow":h,"data-active":Me(I&&n),"aria-orientation":C,onKeyDown:Pe(r.onKeyDown,_e),onFocus:Pe(r.onFocus,m.onFocus,()=>U(!0)),onBlur:Pe(r.onBlur,m.onBlur,()=>U(!1)),style:we}},[u,c,h,n,I,E,b,_e,C,m,_,W]);return{value:h,isFocused:xe,isDragging:I,isVertical:b,stepUp:O,stepDown:B,reset:tn,stepTo:an,getContainerProps:sn,getInputProps:on,getTrackProps:ln,getFilledTrackProps:un,getMarkProps:cn,getThumbProps:dn}},[Bn,ge]=wn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),a=L((n,t)=>{const[i,d]=Dn("Slider",n),{className:u,children:c,inputProps:v,trackProps:g,filledTrackProps:C,thumbProps:p,trackColor:P,filledTrackColor:M,trackSize:R,thumbColor:Se,thumbSize:m,...ve}=In(d),{isVertical:z,getContainerProps:be,getInputProps:D,getTrackProps:I,getFilledTrackProps:q,getMarkProps:xe,getThumbProps:U}=On(ve),E={...i.container},j=Tn(c),[w]=Ae(j,N),[h]=Ae(j,V),fe=Vn(j,V),ze=Mn(j)?c:Pn(j,N,V);return e.jsx(Bn,{value:{isVertical:z,getTrackProps:I,getFilledTrackProps:q,getMarkProps:xe,getThumbProps:U,trackProps:g,trackColor:P,trackSize:R,filledTrackProps:C,filledTrackColor:M,thumbProps:p,thumbColor:Se,thumbSize:m,styles:i},children:e.jsxs(y.div,{className:H("ui-slider",u),__css:E,...be(),children:[e.jsx(y.input,{...D(v,t)}),w??e.jsx(N,{}),ze,h??(fe?null:e.jsx(V,{}))]})})}),N=L(({className:n,children:t,filledTrackProps:i,...d},u)=>{const{styles:c,trackProps:v,trackColor:g,trackSize:C,isVertical:p,getTrackProps:P}=ge(),M={...c.track};return e.jsx(y.div,{className:H("ui-slider__track",n),__css:M,...P({...g?{bg:g}:{},...C?p?{w:C}:{h:C}:{},...v,...d},u),children:t??e.jsx(rn,{...i})})}),rn=L(({className:n,...t},i)=>{const{styles:d,filledTrackProps:u,filledTrackColor:c,getFilledTrackProps:v}=ge(),g={...d.filledTrack};return e.jsx(y.div,{className:H("ui-slider__track-filled",n),__css:g,...v({...c?{bg:c}:{},...u,...t},i)})}),S=L(({className:n,...t},i)=>{const{styles:d,getMarkProps:u}=ge(),c={display:"inline-flex",justifyContent:"center",alignItems:"center",...d.mark};return e.jsx(y.div,{className:H("ui-slider__mark",n),__css:c,...u(t,i)})}),V=L(({className:n,...t},i)=>{const{styles:d,thumbProps:u,thumbColor:c,thumbSize:v,getThumbProps:g}=ge(),C={...d.thumb};return e.jsx(y.div,{className:H("ui-slider__thumb",n),__css:C,...g({...c?{bg:c}:{},...v?{boxSize:v}:{},...u,...t},i)})}),Ut={title:"Components / Forms / Slider",component:a},K=()=>e.jsx(a,{}),X=()=>e.jsx(a,{defaultValue:50}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"sm",defaultValue:25}),e.jsx(a,{size:"md",defaultValue:50}),e.jsx(a,{size:"lg",defaultValue:75})]}),G=()=>e.jsx(e.Fragment,{children:xn.map(n=>e.jsx(a,{colorScheme:n},n))}),J=()=>e.jsx(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReversed:!0}),e.jsx(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),Z=()=>{const[n,t]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",n]}),e.jsx(a,{value:n,min:0,max:200,onChange:t})]})},ee=()=>{const[n,t]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",n]}),e.jsx(a,{value:n,step:10,onChange:t})]})},re=()=>{const[n,t]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",n]}),e.jsx(a,{value:n,step:10,focusThumbOnChange:!1}),e.jsxs(En,{w:"full",gap:"md",children:[e.jsx(Re,{isDisabled:n===0,onClick:()=>t(i=>i!==0?i-10:i),children:"-10"}),e.jsx(Re,{isDisabled:n===100,colorScheme:"blue",onClick:()=>t(i=>i!==100?i+10:i),children:"+10"})]})]})},ne=()=>e.jsxs(en,{gap:"lg",children:[e.jsxs(a,{size:"sm",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(a,{size:"md",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(a,{size:"lg",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),te=()=>{const[n,t]=s.useState(50),[i,{on:d,off:u}]=Sn(!1);return e.jsxs(a,{value:n,onChange:t,mt:"10",onMouseEnter:d,onMouseLeave:u,children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(_n,{placement:"top",label:`${n}%`,isOpen:i,children:e.jsx(V,{})})]})},ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0}),e.jsx(pe,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(a,{})})]}),se=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0}),e.jsx(pe,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(a,{})})]}),oe=()=>{const[n,t]=s.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:n<20,value:n,onChange:t}),e.jsx(pe,{isInvalid:n<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e.jsx(a,{value:n,onChange:t})})]})},le=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(a,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(a,{children:[e.jsx(N,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(V,{bg:"blue.700"})]}),e.jsxs(a,{children:[e.jsx(N,{bg:"red.200",children:e.jsx(rn,{bg:"red.500"})}),e.jsx(V,{bg:"red.700"})]})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(Be,{icon:$e})}}),e.jsx(a,{children:e.jsx(V,{color:"blue.500",boxSize:"6",children:e.jsx(Be,{icon:$e})})})]}),ue=()=>{const[n,t]=s.useState(50);return e.jsx(e.Fragment,{children:e.jsxs(a,{value:n,onChange:t,mt:"10",children:[e.jsx(S,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(S,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(S,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(S,{value:n,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n,"%"]})]})})},ce=()=>{const[n,t]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",n]}),e.jsx(a,{value:n,onChange:t})]})},de=()=>{const[n,t]=s.useState(50),[i,d]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",n,", Start Value: ",i]}),e.jsx(a,{value:n,onChange:t,onChangeStart:d})]})},me=()=>{const[n,t]=s.useState(50),[i,d]=s.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:["Value: ",n,", End Value: ",i]}),e.jsx(a,{value:n,onChange:t,onChangeEnd:d})]})},he=()=>{var v;const n={slider:50},{control:t,handleSubmit:i,watch:d,formState:{errors:u}}=vn({defaultValues:n}),c=g=>console.log("submit:",g);return console.log("watch:",d()),e.jsxs(en,{as:"form",onSubmit:i(c),children:[e.jsx(pe,{isInvalid:!!u.slider,label:"Volume",errorMessage:(v=u.slider)==null?void 0:v.message,children:e.jsx(bn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e.jsx(a,{...g})})}),e.jsx(Re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ue,We,Ke;K.parameters={...K.parameters,docs:{...(Ue=K.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(Ke=(We=K.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var Xe,Ye,Ge;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Ge=(Ye=X.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Je,Qe,Ze;Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(Ze=(Qe=Y.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var er,rr,nr;G.parameters={...G.parameters,docs:{...(er=G.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(nr=(rr=G.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var tr,ar,sr;J.parameters={...J.parameters,docs:{...(tr=J.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(sr=(ar=J.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var or,lr,ir;Q.parameters={...Q.parameters,docs:{...(or=Q.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(ir=(lr=Q.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};var ur,cr,dr;Z.parameters={...Z.parameters,docs:{...(ur=Z.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(dr=(cr=Z.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,hr,pr;ee.parameters={...ee.parameters,docs:{...(mr=ee.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(pr=(hr=ee.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var gr,Sr,vr;re.parameters={...re.parameters,docs:{...(gr=re.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button isDisabled={value === 100} colorScheme="blue" onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(vr=(Sr=re.parameters)==null?void 0:Sr.docs)==null?void 0:vr.source}}};var br,xr,fr;ne.parameters={...ne.parameters,docs:{...(br=ne.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <Slider size="sm">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>
    </VStack>;
}`,...(fr=(xr=ne.parameters)==null?void 0:xr.docs)==null?void 0:fr.source}}};var Cr,kr,jr;te.parameters={...te.parameters,docs:{...(Cr=te.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <Slider value={value} onChange={onChange} mt="10" onMouseEnter={on} onMouseLeave={off}>
      <SliderMark value={25} w="10" ml="-5">
        25%
      </SliderMark>
      <SliderMark value={50} w="10" ml="-5">
        50%
      </SliderMark>
      <SliderMark value={75} w="10" ml="-5">
        75%
      </SliderMark>

      <Tooltip placement="top" label={\`\${value}%\`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(jr=(kr=te.parameters)==null?void 0:kr.docs)==null?void 0:jr.source}}};var wr,Tr,Vr;ae.parameters={...ae.parameters,docs:{...(wr=ae.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Vr=(Tr=ae.parameters)==null?void 0:Tr.docs)==null?void 0:Vr.source}}};var Mr,Pr,yr;se.parameters={...se.parameters,docs:{...(Mr=se.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(yr=(Pr=se.parameters)==null?void 0:Pr.docs)==null?void 0:yr.source}}};var Fr,Rr,zr;oe.parameters={...oe.parameters,docs:{...(Fr=oe.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(zr=(Rr=oe.parameters)==null?void 0:Rr.docs)==null?void 0:zr.source}}};var Dr,Ir,Er;le.parameters={...le.parameters,docs:{...(Dr=le.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <>
      <Slider trackColor="orange.200" filledTrackColor="orange.500" thumbColor="orange.700" />

      <Slider trackProps={{
      bg: "green.200"
    }} filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
    }} />

      <Slider>
        <SliderTrack bg="blue.200" filledTrackProps={{
        bg: "blue.500"
      }} />
        <SliderThumb bg="blue.700" />
      </Slider>

      <Slider>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red.500" />
        </SliderTrack>

        <SliderThumb bg="red.700" />
      </Slider>
    </>;
}`,...(Er=(Ir=le.parameters)==null?void 0:Ir.docs)==null?void 0:Er.source}}};var _r,Or,Br;ie.parameters={...ie.parameters,docs:{...(_r=ie.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <>
      <Slider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Icon icon={faWaveSquare} />
    }} />

      <Slider>
        <SliderThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </SliderThumb>
      </Slider>
    </>;
}`,...(Br=(Or=ie.parameters)==null?void 0:Or.docs)==null?void 0:Br.source}}};var $r,Ar,Nr;ue.parameters={...ue.parameters,docs:{...($r=ue.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Slider value={value} onChange={onChange} mt="10">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
        <SliderMark value={value} bg="blue.500" color="white" py="0.5" rounded="md" w="10" mt="-10" ml="-5">
          {value}%
        </SliderMark>
      </Slider>
    </>;
}`,...(Nr=(Ar=ue.parameters)==null?void 0:Ar.docs)==null?void 0:Nr.source}}};var Hr,Lr,qr;ce.parameters={...ce.parameters,docs:{...(Hr=ce.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(qr=(Lr=ce.parameters)==null?void 0:Lr.docs)==null?void 0:qr.source}}};var Ur,Wr,Kr;de.parameters={...de.parameters,docs:{...(Ur=de.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Kr=(Wr=de.parameters)==null?void 0:Wr.docs)==null?void 0:Kr.source}}};var Xr,Yr,Gr;me.parameters={...me.parameters,docs:{...(Xr=me.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Gr=(Yr=me.parameters)==null?void 0:Yr.docs)==null?void 0:Gr.source}}};var Jr,Qr,Zr;he.parameters={...he.parameters,docs:{...(Jr=he.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  type Data = {
    slider: number;
  };
  const defaultValues: Data = {
    slider: 50
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
      <FormControl isInvalid={!!errors.slider} label="Volume" errorMessage={errors.slider?.message}>
        <Controller name="slider" control={control} rules={{
        max: {
          value: 50,
          message: "The maximum value is 50."
        }
      }} render={({
        field
      }) => <Slider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Zr=(Qr=he.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};const Wt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Wt as __namedExportsOrder,K as basic,le as customColor,ce as customControl,ue as customMark,ie as customThumb,Ut as default,ae as isDisabled,oe as isInvalid,se as isReadonly,me as onChangeEnd,de as onChangeStart,he as reactHookForm,G as withColorScheme,X as withDefaultValue,re as withFocusThumbOnChange,ne as withMark,Z as withMinMax,J as withOrientation,Q as withReversed,Y as withSize,ee as withStep,te as withTooltip};
