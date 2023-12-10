import{j as e,a as s,F as C}from"./jsx-runtime-TtYKBvr-.js";import{I as Ae,p as Ne}from"./fontawesome-icon-ZF81hbra.js";import{u as gn}from"./index-gWY0u-sb.js";import{r as u}from"./index-IybTgENJ.js";import{u as bn,C as vn}from"./index.esm-PVkfQNar.js";import{c as fn}from"./components-S9czpUR6.js";import{u as Cn}from"./index-IsKhnU0y.js";import{u as kn,c as wn,b as Tn}from"./index-R81ACYHP.js";import{c as Vn,p as Mn,J as je,$ as xn,a0 as Pn,a1 as yn,u as I,a as U,d as He,y as Fn,o as In,v as ye,O as H,I as Fe,h as Ie}from"./factory-BpP3TutA.js";import{u as Rn,f as L,F as be}from"./form-control-BdUo61J_.js";import{r as Le,v as qe,a as Re,p as zn}from"./number-T9-jc1Pg.js";import{f as W}from"./forward-ref-6T0UNPU-.js";import{u as Dn}from"./use-component-style-cxLt7Ns7.js";import{o as En}from"./theme-provider-RZopMVJP.js";import{T as R}from"./text-HhFMRBG-.js";import{C as On}from"./center-01QmfiLT.js";import{B as ze}from"./button-Qh4ZXxa_.js";import{V as en}from"./stack-U7fyOJfq.js";import{T as _n}from"./tooltip-KPTWLj3l.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-C1O_Nmpw.js";import"./index-3Y8obiWq.js";import"./index-v-tIW51c.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-_MLJtGzH.js";import"./environment-provider-L2wn23Xn.js";import"./loading-provider-H6tysiaC.js";import"./index-j-OI4-0-.js";import"./component-G3mliOEp.js";import"./loading-An8bmO0F.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./motion-SXgmxp4L.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-rn_JBcyJ.js";import"./index-xIHD0DlW.js";import"./notice-zcc-loJZ.js";import"./alert-3DyQFsnV.js";import"./close-button-hib_kAYl.js";import"./use-ripple-XZ8Hx3Ay.js";import"./container-5ft8ddZN.js";import"./box-ACqpXpFo.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-czoUJTU6.js";import"./index-hj-GFWeP.js";import"./index-EfP4_iuN.js";import"./slide-fade-890EqpEs.js";import"./utils-g9VGj7JG.js";import"./scale-fade-lfXQbwaG.js";const Bn=n=>{const{id:t,name:c,min:l=0,max:d=100,step:p=1,defaultValue:v,orientation:g="horizontal",isReversed:m,focusThumbOnChange:z=!0,required:F,disabled:y,readOnly:D,onChange:fe,...h}=Rn(n);if(d<l)throw new Error("Do not assign a number less than 'min' to 'max'");const Ce=He(h.onChangeStart),E=He(h.onChangeEnd),[ke,O]=Cn({value:h.value,defaultValue:v??l+(d-l)/2,onChange:fe}),[_,K]=u.useState(!1),[we,X]=u.useState(!1),B=!(y||D),V=(d-l)/10,M=p||(d-l)/100,S=Re(ke,l,d),Te=d-S+l,$=qe(m?Te:S,l,d),k=g==="vertical",f=kn({min:l,max:d,step:p,value:S,isInteractive:B,eventSource:null,focusThumbOnChange:z}),Ee=u.useRef(null),Ve=u.useRef(null),Me=u.useRef(null),Y=wn(Me);Tn(Ee,{onSessionStart:r=>{const{isInteractive:o,value:i}=f.current;o&&(K(!0),_e(),Oe(r),Ce(i))},onSessionEnd:()=>{const{isInteractive:r,value:o}=f.current;r&&(K(!1),E(o))},onMove:r=>{const{isInteractive:o}=f.current;o&&Oe(r)}});const nn=u.useCallback(r=>{var $e;if(!Ve.current)return;const{min:o,max:i,step:w}=f.current;f.current.eventSource="pointer";const{bottom:x,left:xe,height:mn,width:hn}=Ve.current.getBoundingClientRect(),{clientX:pn,clientY:Sn}=(($e=r.touches)==null?void 0:$e[0])??r;let Pe=(k?x-Sn:pn-xe)/(k?mn:hn);m&&(Pe=1-Pe);let j=zn(Pe,o,i);return w&&(j=parseFloat(Le(j,o,w))),j=Re(j,o,i),j},[k,m,f]),Oe=r=>{const{value:o}=f.current,i=nn(r);i!=null&&i!==o&&O(i)},_e=u.useCallback(()=>{const{focusThumbOnChange:r}=f.current;r&&setTimeout(()=>{var o;return(o=Me.current)==null?void 0:o.focus()})},[f]),T=u.useCallback(r=>{const{isInteractive:o,min:i,max:w}=f.current;o&&(r=parseFloat(Le(r,i,M)),r=Re(r,i,w),O(r))},[M,O,f]),A=u.useCallback((r=M)=>T(m?S-r:S+r),[T,m,M,S]),N=u.useCallback((r=M)=>T(m?S+r:S-r),[T,m,M,S]),tn=u.useCallback(()=>T(v||0),[T,v]),an=u.useCallback(r=>T(r),[T]),Be=u.useCallback(r=>{const{min:o,max:i}=f.current,x={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(V),PageDown:()=>N(V),Home:()=>T(o),End:()=>T(i)}[r.key];x&&(r.preventDefault(),r.stopPropagation(),x(r),f.current.eventSource="keyboard")},[T,f,N,A,V]);Fn(()=>{const{eventSource:r,value:o}=f.current;_e(),r==="keyboard"&&E(o)},[S,E]);const on=u.useCallback((r={},o=null)=>{const{width:i,height:w}=Y??{width:0,height:0},x={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...k?{paddingLeft:i/2,paddingRight:i/2}:{paddingTop:w/2,paddingBottom:w/2}};return{...In(h,["value","onChangeStart","onChangeEnd"]),...r,ref:ye(o,Ee),tabIndex:-1,style:x}},[k,h,Y]),sn=u.useCallback((r={},o=null)=>({...H(h,L),...r,id:t,ref:o,type:"hidden",name:c,value:S,required:F,disabled:y,readOnly:D}),[y,t,c,D,F,h,S]),ln=u.useCallback((r={},o=null)=>{const i={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...H(h,L),...r,ref:ye(o,Ve),style:i}},[k,h]),un=u.useCallback((r={},o=null)=>{const i=Math.abs(m?100-$:$),w={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:`${i}%`,...m?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${i}%`,...m?{right:"0%"}:{left:"0%"}}};return{...H(h,L),...r,ref:o,style:w}},[m,k,h,$]),cn=u.useCallback((r={},o=null)=>{let i=qe(r.value,l,d);i=m?100-i:i;const w={...r.style,position:"absolute",pointerEvents:"none",...k?{bottom:`${i}%`}:{left:`${i}%`}};return{...H(h,L),...r,ref:o,"aria-hidden":!0,"data-invalid":Fe(r.value<l||d<r.value),"data-highlighted":Fe(r.value<=S),style:w}},[m,k,d,l,h,S]),dn=u.useCallback((r={},o=null)=>{const i=$,{width:w,height:x}=Y??{width:0,height:0},xe={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...k?{bottom:`calc(${i}% - ${x/2}px)`}:{left:`calc(${i}% - ${w/2}px)`}};return{...H(h,L),...r,ref:ye(o,Me),tabIndex:B?0:void 0,role:"slider","data-active":Fe(_),"aria-orientation":g,onKeyDown:Ie(r.onKeyDown,Be),onFocus:Ie(r.onFocus,h.onFocus,()=>X(!0)),onBlur:Ie(r.onBlur,h.onBlur,()=>X(!1)),style:xe}},[_,B,k,Be,g,h,$,Y]);return{value:S,isFocused:we,isDragging:_,isVertical:k,stepUp:A,stepDown:N,reset:tn,stepTo:an,getContainerProps:on,getInputProps:sn,getTrackProps:ln,getFilledTrackProps:un,getMarkProps:cn,getThumbProps:dn}},[$n,ve]=Vn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),a=W((n,t)=>{const[c,l]=Dn("Slider",n),{className:d,children:p,inputProps:v,trackProps:g,filledTrackProps:m,thumbProps:z,trackColor:F,filledTrackColor:y,trackSize:D,thumbColor:fe,thumbSize:h,...Ce}=En(l),{isVertical:E,getContainerProps:ke,getInputProps:O,getTrackProps:_,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X}=Bn(Ce),B={...c.container},V=Mn(p),[M]=je(V,q),[S]=je(V,P),Te=xn(V,P),De=Pn(V)?p:yn(V,q,P);return e($n,{value:{isVertical:E,getTrackProps:_,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X,trackProps:g,trackColor:F,trackSize:D,filledTrackProps:m,filledTrackColor:y,thumbProps:z,thumbColor:fe,thumbSize:h,styles:c},children:s(I.div,{className:U("ui-slider",d),__css:B,...ke(),children:[e(I.input,{...O(v,t)}),M??e(q,{}),De,S??(Te?null:e(P,{}))]})})}),q=W(({className:n,children:t,filledTrackProps:c,...l},d)=>{const{styles:p,trackProps:v,trackColor:g,trackSize:m,isVertical:z,getTrackProps:F}=ve(),y={...p.track};return e(I.div,{className:U("ui-slider__track",n),__css:y,...F({...g?{bg:g}:{},...m?z?{w:m}:{h:m}:{},...v,...l},d),children:t??e(rn,{...c})})}),rn=W(({className:n,...t},c)=>{const{styles:l,filledTrackProps:d,filledTrackColor:p,getFilledTrackProps:v}=ve(),g={...l.filledTrack};return e(I.div,{className:U("ui-slider__track-filled",n),__css:g,...v({...p?{bg:p}:{},...d,...t},c)})}),b=W(({className:n,...t},c)=>{const{styles:l,getMarkProps:d}=ve(),p={display:"inline-flex",justifyContent:"center",alignItems:"center",...l.mark};return e(I.div,{className:U("ui-slider__mark",n),__css:p,...d(t,c)})}),P=W(({className:n,...t},c)=>{const{styles:l,thumbProps:d,thumbColor:p,thumbSize:v,getThumbProps:g}=ve(),m={...l.thumb};return e(I.div,{className:U("ui-slider__thumb",n),__css:m,...g({...p?{bg:p}:{},...v?{boxSize:v}:{},...d,...t},c)})}),jt={title:"Components / Forms / Slider",component:a},J=()=>e(a,{}),G=()=>e(a,{defaultValue:50}),Q=()=>s(C,{children:[e(a,{size:"sm",defaultValue:25}),e(a,{size:"md",defaultValue:50}),e(a,{size:"lg",defaultValue:75})]}),Z=()=>e(C,{children:fn.map(n=>e(a,{colorScheme:n},n))}),ee=()=>e(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),re=()=>s(C,{children:[e(a,{isReversed:!0}),e(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ne=()=>{const[n,t]=u.useState(50);return s(C,{children:[s(R,{children:["Value: ",n]}),e(a,{value:n,min:0,max:200,onChange:t})]})},te=()=>{const[n,t]=u.useState(50);return s(C,{children:[s(R,{children:["Value: ",n]}),e(a,{value:n,step:10,onChange:t})]})},ae=()=>{const[n,t]=u.useState(50);return s(C,{children:[s(R,{children:["Value: ",n]}),e(a,{value:n,step:10,focusThumbOnChange:!1}),s(On,{w:"full",gap:"md",children:[e(ze,{isDisabled:n===0,onClick:()=>t(c=>c!==0?c-10:c),children:"-10"}),e(ze,{isDisabled:n===100,colorScheme:"blue",onClick:()=>t(c=>c!==100?c+10:c),children:"+10"})]})]})},oe=()=>s(en,{gap:"lg",children:[s(a,{size:"sm",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),s(a,{size:"md",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),s(a,{size:"lg",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),se=()=>{const[n,t]=u.useState(50),[c,{on:l,off:d}]=gn(!1);return s(a,{value:n,onChange:t,mt:"10",onMouseEnter:l,onMouseLeave:d,children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"}),e(_n,{placement:"top",label:`${n}%`,isOpen:c,children:e(P,{})})]})},le=()=>s(C,{children:[e(a,{isDisabled:!0}),e(be,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ie=()=>s(C,{children:[e(a,{isReadOnly:!0}),e(be,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ue=()=>{const[n,t]=u.useState(15);return s(C,{children:[e(a,{isInvalid:n<20,value:n,onChange:t}),e(be,{isInvalid:n<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(a,{value:n,onChange:t})})]})},ce=()=>s(C,{children:[e(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(a,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),s(a,{children:[e(q,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(P,{bg:"blue.700"})]}),s(a,{children:[e(q,{bg:"red.200",children:e(rn,{bg:"red.500"})}),e(P,{bg:"red.700"})]})]}),de=()=>s(C,{children:[e(a,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),e(a,{children:e(P,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})})]}),me=()=>{const[n,t]=u.useState(50);return e(C,{children:s(a,{value:n,onChange:t,mt:"10",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"}),s(b,{value:n,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n,"%"]})]})})},he=()=>{const[n,t]=u.useState(50);return s(C,{children:[s(R,{children:["Value: ",n]}),e(a,{value:n,onChange:t})]})},pe=()=>{const[n,t]=u.useState(50),[c,l]=u.useState(50);return s(C,{children:[s(R,{children:["Value: ",n,", Start Value: ",c]}),e(a,{value:n,onChange:t,onChangeStart:l})]})},Se=()=>{const[n,t]=u.useState(50),[c,l]=u.useState(50);return s(C,{children:[s(R,{children:["Value: ",n,", End Value: ",c]}),e(a,{value:n,onChange:t,onChangeEnd:l})]})},ge=()=>{var v;const n={slider:50},{control:t,handleSubmit:c,watch:l,formState:{errors:d}}=bn({defaultValues:n}),p=g=>console.log("submit:",g);return console.log("watch:",l()),s(en,{as:"form",onSubmit:c(p),children:[e(be,{isInvalid:!!d.slider,label:"Volume",errorMessage:(v=d.slider)==null?void 0:v.message,children:e(vn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(a,{...g})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ue,We,Ke;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(Ke=(We=J.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var Xe,Ye,Je;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Je=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Ge,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(Ze=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var er,rr,nr;Z.parameters={...Z.parameters,docs:{...(er=Z.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(nr=(rr=Z.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var tr,ar,or;ee.parameters={...ee.parameters,docs:{...(tr=ee.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(or=(ar=ee.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var sr,lr,ir;re.parameters={...re.parameters,docs:{...(sr=re.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(ir=(lr=re.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};var ur,cr,dr;ne.parameters={...ne.parameters,docs:{...(ur=ne.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(dr=(cr=ne.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,hr,pr;te.parameters={...te.parameters,docs:{...(mr=te.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(pr=(hr=te.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,gr,br;ae.parameters={...ae.parameters,docs:{...(Sr=ae.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(br=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:br.source}}};var vr,fr,Cr;oe.parameters={...oe.parameters,docs:{...(vr=oe.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(fr=oe.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var kr,wr,Tr;se.parameters={...se.parameters,docs:{...(kr=se.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(wr=se.parameters)==null?void 0:wr.docs)==null?void 0:Tr.source}}};var Vr,Mr,xr;le.parameters={...le.parameters,docs:{...(Vr=le.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(xr=(Mr=le.parameters)==null?void 0:Mr.docs)==null?void 0:xr.source}}};var Pr,yr,Fr;ie.parameters={...ie.parameters,docs:{...(Pr=ie.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Fr=(yr=ie.parameters)==null?void 0:yr.docs)==null?void 0:Fr.source}}};var Ir,Rr,zr;ue.parameters={...ue.parameters,docs:{...(Ir=ue.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(zr=(Rr=ue.parameters)==null?void 0:Rr.docs)==null?void 0:zr.source}}};var Dr,Er,Or;ce.parameters={...ce.parameters,docs:{...(Dr=ce.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Or=(Er=ce.parameters)==null?void 0:Er.docs)==null?void 0:Or.source}}};var _r,Br,$r;de.parameters={...de.parameters,docs:{...(_r=de.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
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
}`,...($r=(Br=de.parameters)==null?void 0:Br.docs)==null?void 0:$r.source}}};var Ar,Nr,jr;me.parameters={...me.parameters,docs:{...(Ar=me.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
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
}`,...(jr=(Nr=me.parameters)==null?void 0:Nr.docs)==null?void 0:jr.source}}};var Hr,Lr,qr;he.parameters={...he.parameters,docs:{...(Hr=he.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(qr=(Lr=he.parameters)==null?void 0:Lr.docs)==null?void 0:qr.source}}};var Ur,Wr,Kr;pe.parameters={...pe.parameters,docs:{...(Ur=pe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Kr=(Wr=pe.parameters)==null?void 0:Wr.docs)==null?void 0:Kr.source}}};var Xr,Yr,Jr;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Jr=(Yr=Se.parameters)==null?void 0:Yr.docs)==null?void 0:Jr.source}}};var Gr,Qr,Zr;ge.parameters={...ge.parameters,docs:{...(Gr=ge.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Qr=ge.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};const Ht=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ht as __namedExportsOrder,J as basic,ce as customColor,he as customControl,me as customMark,de as customThumb,jt as default,le as isDisabled,ue as isInvalid,ie as isReadonly,Se as onChangeEnd,pe as onChangeStart,ge as reactHookForm,Z as withColorScheme,G as withDefaultValue,ae as withFocusThumbOnChange,oe as withMark,ne as withMinMax,ee as withOrientation,re as withReversed,Q as withSize,te as withStep,se as withTooltip};
