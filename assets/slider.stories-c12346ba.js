import{a as e,j as l,F as C}from"./jsx-runtime-03b4ddbf.js";import{I as Ae,p as Ne}from"./fontawesome-icon-1848d6a0.js";import{r as i}from"./index-76fb7be0.js";import{u as gn,C as bn}from"./index.esm-6ca9e0d3.js";import{u as vn}from"./index-18845d6b.js";import{u as fn,a as Cn,b as kn}from"./index-2852cb50.js";import{p as wn,t as Tn,v as je,M as Vn,N as Mn,O as xn,d as z,e as U,b as He,h as yn,z as Pn,x as Pe,A as H,w as Fe}from"./factory-b055fecf.js";import{u as Fn,f as L,F as be}from"./form-control-affe63e0.js";import{r as Le,v as qe,c as ze,p as zn}from"./number-cdadea8f.js";import{f as W}from"./forward-ref-8b7d2a6f.js";import{a as Rn}from"./use-component-style-f62022c6.js";import{o as Dn,d as Re}from"./theme-provider-87f127bc.js";import{T as R}from"./text-3a61c91c.js";import{C as In}from"./center-d68235fb.js";import{B as De}from"./button-55a1630a.js";import{V as en}from"./stack-4ddf0d37.js";import{u as En}from"./index-d68d7549.js";import{T as On}from"./tooltip-1f96f1b4.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-4b40a161.js";import"./index-f35d6182.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-9bbac61f.js";import"./index-38124c2b.js";import"./index-9a807a8c.js";import"./index-367421d8.js";import"./index-164135f7.js";import"./index-7d58b739.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./container-portal-995940dd.js";import"./index-d3ea75b5.js";import"./slide-fade-d292caaf.js";import"./utils-986549ef.js";import"./scale-fade-2549aabe.js";const Bn=o=>{const{id:a,name:u,min:s=0,max:d=100,step:S=1,defaultValue:v,orientation:g="horizontal",isReversed:m,focusThumbOnChange:D=!0,required:F,disabled:P,readOnly:I,onChange:fe,...h}=Fn(o);if(d<s)throw new Error("Do not assign a number less than 'min' to 'max'");const Ce=He(h.onChangeStart),E=He(h.onChangeEnd),[ke,O]=vn({value:h.value,defaultValue:v??s+(d-s)/2,onChange:fe}),[B,K]=i.useState(!1),[we,X]=i.useState(!1),_=!(P||I),V=(d-s)/10,M=S||(d-s)/100,p=ze(ke,s,d),Te=d-p+s,$=qe(m?Te:p,s,d),k=g==="vertical",f=fn({min:s,max:d,step:S,value:p,isInteractive:_,eventSource:null,focusThumbOnChange:D}),Ee=i.useRef(null),Ve=i.useRef(null),Me=i.useRef(null),Y=Cn(Me);kn(Ee,{onSessionStart:n=>{const{isInteractive:t,value:c}=f.current;t&&(K(!0),Be(),Oe(n),Ce(c))},onSessionEnd:()=>{const{isInteractive:n,value:t}=f.current;n&&(K(!1),E(t))},onMove:n=>{const{isInteractive:t}=f.current;t&&Oe(n)}});const nn=i.useCallback(n=>{var $e;if(!Ve.current)return;const{min:t,max:c,step:w}=f.current;f.current.eventSource="pointer";const{bottom:x,left:xe,height:mn,width:hn}=Ve.current.getBoundingClientRect(),{clientX:Sn,clientY:pn}=(($e=n.touches)==null?void 0:$e[0])??n;let ye=(k?x-pn:Sn-xe)/(k?mn:hn);m&&(ye=1-ye);let j=zn(ye,t,c);return w&&(j=parseFloat(Le(j,t,w))),j=ze(j,t,c),j},[k,m,f]),Oe=n=>{const{value:t}=f.current,c=nn(n);c!=null&&c!==t&&O(c)},Be=i.useCallback(()=>{const{focusThumbOnChange:n}=f.current;n&&setTimeout(()=>{var t;return(t=Me.current)==null?void 0:t.focus()})},[f]),T=i.useCallback(n=>{const{isInteractive:t,min:c,max:w}=f.current;t&&(n=parseFloat(Le(n,c,M)),n=ze(n,c,w),O(n))},[M,O,f]),A=i.useCallback((n=M)=>T(m?p-n:p+n),[T,m,M,p]),N=i.useCallback((n=M)=>T(m?p+n:p-n),[T,m,M,p]),on=i.useCallback(()=>T(v||0),[T,v]),an=i.useCallback(n=>T(n),[T]),_e=i.useCallback(n=>{const{min:t,max:c}=f.current,x={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(V),PageDown:()=>N(V),Home:()=>T(t),End:()=>T(c)}[n.key];x&&(n.preventDefault(),n.stopPropagation(),x(n),f.current.eventSource="keyboard")},[T,f,N,A,V]);yn(()=>{const{eventSource:n,value:t}=f.current;Be(),n==="keyboard"&&E(t)},[p,E]);const tn=i.useCallback((n={},t=null)=>{const{width:c,height:w}=Y??{width:0,height:0},x={...n.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...k?{paddingLeft:c/2,paddingRight:c/2}:{paddingTop:w/2,paddingBottom:w/2}};return{...Pn(h,["value","onChangeStart","onChangeEnd"]),...n,ref:Pe(t,Ee),tabIndex:-1,style:x}},[k,h,Y]),ln=i.useCallback((n={},t=null)=>({...H(h,L),...n,id:a,ref:t,type:"hidden",name:u,value:p,required:F,disabled:P,readOnly:I}),[P,a,u,I,F,h,p]),sn=i.useCallback((n={},t=null)=>{const c={...n.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...H(h,L),...n,ref:Pe(t,Ve),style:c}},[k,h]),cn=i.useCallback((n={},t=null)=>{const c=Math.abs(m?100-$:$),w={...n.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:`${c}%`,...m?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${c}%`,...m?{right:"0%"}:{left:"0%"}}};return{...H(h,L),...n,ref:t,style:w}},[m,k,h,$]),un=i.useCallback((n={},t=null)=>{let c=qe(n.value,s,d);c=m?100-c:c;const w={...n.style,position:"absolute",pointerEvents:"none",...k?{bottom:`${c}%`}:{left:`${c}%`}};return{...H(h,L),...n,ref:t,"aria-hidden":!0,"data-invalid":Re(n.value<s||d<n.value),"data-highlighted":Re(n.value<=p),style:w}},[m,k,d,s,h,p]),dn=i.useCallback((n={},t=null)=>{const c=$,{width:w,height:x}=Y??{width:0,height:0},xe={...n.style,position:"absolute",userSelect:"none",touchAction:"none",...k?{bottom:`calc(${c}% - ${x/2}px)`}:{left:`calc(${c}% - ${w/2}px)`}};return{...H(h,L),...n,ref:Pe(t,Me),tabIndex:_?0:void 0,role:"slider","data-active":Re(B),"aria-orientation":g,onKeyDown:Fe(n.onKeyDown,_e),onFocus:Fe(n.onFocus,h.onFocus,()=>X(!0)),onBlur:Fe(n.onBlur,h.onBlur,()=>X(!1)),style:xe}},[B,_,k,_e,g,h,$,Y]);return{value:p,isFocused:we,isDragging:B,isVertical:k,stepUp:A,stepDown:N,reset:on,stepTo:an,getContainerProps:tn,getInputProps:ln,getTrackProps:sn,getFilledTrackProps:cn,getMarkProps:un,getThumbProps:dn}},[_n,ve]=wn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),r=W((o,a)=>{const[u,s]=Rn("Slider",o),{className:d,children:S,inputProps:v,trackProps:g,filledTrackProps:m,thumbProps:D,trackColor:F,filledTrackColor:P,trackSize:I,thumbColor:fe,thumbSize:h,...Ce}=Dn(s),{isVertical:E,getContainerProps:ke,getInputProps:O,getTrackProps:B,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X}=Bn(Ce),_={...u.container},V=Tn(S),[M]=je(V,q),[p]=je(V,y),Te=Vn(V,y),Ie=Mn(V)?S:xn(V,q,y);return e(_n,{value:{isVertical:E,getTrackProps:B,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X,trackProps:g,trackColor:F,trackSize:I,filledTrackProps:m,filledTrackColor:P,thumbProps:D,thumbColor:fe,thumbSize:h,styles:u},children:l(z.div,{className:U("ui-slider",d),__css:_,...ke(),children:[e(z.input,{...O(v,a)}),M??e(q,{}),Ie,p??(Te?null:e(y,{}))]})})}),q=W(({className:o,children:a,filledTrackProps:u,...s},d)=>{const{styles:S,trackProps:v,trackColor:g,trackSize:m,isVertical:D,getTrackProps:F}=ve(),P={...S.track};return e(z.div,{className:U("ui-slider-track",o),__css:P,...F({...g?{bg:g}:{},...m?D?{w:m}:{h:m}:{},...v,...s},d),children:a??e(rn,{...u})})}),rn=W(({className:o,...a},u)=>{const{styles:s,filledTrackProps:d,filledTrackColor:S,getFilledTrackProps:v}=ve(),g={...s.filledTrack};return e(z.div,{className:U("ui-slider-filledTrack",o),__css:g,...v({...S?{bg:S}:{},...d,...a},u)})}),b=W(({className:o,...a},u)=>{const{styles:s,getMarkProps:d}=ve(),S={display:"inline-flex",justifyContent:"center",alignItems:"center",...s.mark};return e(z.div,{className:U("ui-slider-mark",o),__css:S,...d(a,u)})}),y=W(({className:o,...a},u)=>{const{styles:s,thumbProps:d,thumbColor:S,thumbSize:v,getThumbProps:g}=ve(),m={...s.thumb};return e(z.div,{className:U("ui-slider-thumb",o),__css:m,...g({...S?{bg:S}:{},...v?{boxSize:v}:{},...d,...a},u)})}),To={title:"Components / Forms / Slider",component:r},G=()=>e(r,{}),J=()=>e(r,{defaultValue:50}),Q=()=>l(C,{children:[e(r,{size:"sm",defaultValue:25}),e(r,{size:"md",defaultValue:50}),e(r,{size:"lg",defaultValue:75})]}),Z=()=>l(C,{children:[e(r,{colorScheme:"primary"}),e(r,{colorScheme:"secondary"}),e(r,{colorScheme:"warning"}),e(r,{colorScheme:"danger"}),e(r,{colorScheme:"link"}),e(r,{colorScheme:"gray"}),e(r,{colorScheme:"zinc"}),e(r,{colorScheme:"neutral"}),e(r,{colorScheme:"stone"}),e(r,{colorScheme:"red"}),e(r,{colorScheme:"rose"}),e(r,{colorScheme:"pink"}),e(r,{colorScheme:"orange"}),e(r,{colorScheme:"amber"}),e(r,{colorScheme:"yellow"}),e(r,{colorScheme:"lime"}),e(r,{colorScheme:"green"}),e(r,{colorScheme:"emerald"}),e(r,{colorScheme:"teal"}),e(r,{colorScheme:"cyan"}),e(r,{colorScheme:"sky"}),e(r,{colorScheme:"blue"}),e(r,{colorScheme:"indigo"}),e(r,{colorScheme:"violet"}),e(r,{colorScheme:"purple"}),e(r,{colorScheme:"fuchsia"})]}),ee=()=>e(r,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),re=()=>l(C,{children:[e(r,{isReversed:!0}),e(r,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ne=()=>{const[o,a]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",o]}),e(r,{value:o,min:0,max:200,onChange:a})]})},oe=()=>{const[o,a]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",o]}),e(r,{value:o,step:10,onChange:a})]})},ae=()=>{const[o,a]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",o]}),e(r,{value:o,step:10,focusThumbOnChange:!1}),l(In,{w:"full",gap:"md",children:[e(De,{isDisabled:o===0,onClick:()=>a(u=>u!==0?u-10:u),children:"-10"}),e(De,{isDisabled:o===100,colorScheme:"blue",onClick:()=>a(u=>u!==100?u+10:u),children:"+10"})]})]})},te=()=>l(en,{gap:"lg",children:[l(r,{size:"sm",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(r,{size:"md",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(r,{size:"lg",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),le=()=>{const[o,a]=i.useState(50),[u,{on:s,off:d}]=En(!1);return l(r,{value:o,onChange:a,mt:"10",onMouseEnter:s,onMouseLeave:d,children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"}),e(On,{placement:"top",label:`${o}%`,isOpen:u,children:e(y,{})})]})},se=()=>l(C,{children:[e(r,{isDisabled:!0}),e(be,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(r,{})})]}),ce=()=>l(C,{children:[e(r,{isReadOnly:!0}),e(be,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(r,{})})]}),ie=()=>{const[o,a]=i.useState(15);return l(C,{children:[e(r,{isInvalid:o<20,value:o,onChange:a}),e(be,{isInvalid:o<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(r,{value:o,onChange:a})})]})},ue=()=>l(C,{children:[e(r,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(r,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(r,{children:[e(q,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(y,{bg:"blue.700"})]}),l(r,{children:[e(q,{bg:"red.200",children:e(rn,{bg:"red.500"})}),e(y,{bg:"red.700"})]})]}),de=()=>l(C,{children:[e(r,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),e(r,{children:e(y,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})})]}),me=()=>{const[o,a]=i.useState(50);return e(C,{children:l(r,{value:o,onChange:a,mt:"10",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"}),l(b,{value:o,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[o,"%"]})]})})},he=()=>{const[o,a]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",o]}),e(r,{value:o,onChange:a})]})},Se=()=>{const[o,a]=i.useState(50),[u,s]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",o,", Start Value: ",u]}),e(r,{value:o,onChange:a,onChangeStart:s})]})},pe=()=>{const[o,a]=i.useState(50),[u,s]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",o,", End Value: ",u]}),e(r,{value:o,onChange:a,onChangeEnd:s})]})},ge=()=>{var v;const o={slider:50},{control:a,handleSubmit:u,watch:s,formState:{errors:d}}=gn({defaultValues:o}),S=g=>console.log("submit:",g);return console.log("watch:",s()),l(en,{as:"form",onSubmit:u(S),children:[e(be,{isInvalid:!!d.slider,label:"Volume",errorMessage:(v=d.slider)==null?void 0:v.message,children:e(bn,{name:"slider",control:a,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(r,{...g})})}),e(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ue,We,Ke;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(Ke=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var Xe,Ye,Ge;J.parameters={...J.parameters,docs:{...(Xe=J.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Ge=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Je,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <>
      <Slider size='sm' defaultValue={25} />
      <Slider size='md' defaultValue={50} />
      <Slider size='lg' defaultValue={75} />
    </>;
}`,...(Ze=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var er,rr,nr;Z.parameters={...Z.parameters,docs:{...(er=Z.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <>
      <Slider colorScheme='primary' />

      <Slider colorScheme='secondary' />

      <Slider colorScheme='warning' />

      <Slider colorScheme='danger' />

      <Slider colorScheme='link' />

      <Slider colorScheme='gray' />

      <Slider colorScheme='zinc' />

      <Slider colorScheme='neutral' />

      <Slider colorScheme='stone' />

      <Slider colorScheme='red' />

      <Slider colorScheme='rose' />

      <Slider colorScheme='pink' />

      <Slider colorScheme='orange' />

      <Slider colorScheme='amber' />

      <Slider colorScheme='yellow' />

      <Slider colorScheme='lime' />

      <Slider colorScheme='green' />

      <Slider colorScheme='emerald' />

      <Slider colorScheme='teal' />

      <Slider colorScheme='cyan' />

      <Slider colorScheme='sky' />

      <Slider colorScheme='blue' />

      <Slider colorScheme='indigo' />

      <Slider colorScheme='violet' />

      <Slider colorScheme='purple' />

      <Slider colorScheme='fuchsia' />
    </>;
}`,...(nr=(rr=Z.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var or,ar,tr;ee.parameters={...ee.parameters,docs:{...(or=ee.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <Slider orientation='vertical' h='calc(100vh - 16px * 2)' />;
}`,...(tr=(ar=ee.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var lr,sr,cr;re.parameters={...re.parameters,docs:{...(lr=re.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation='vertical' h='calc(100vh - 16px * 3 - 14px)' />
    </>;
}`,...(cr=(sr=re.parameters)==null?void 0:sr.docs)==null?void 0:cr.source}}};var ir,ur,dr;ne.parameters={...ne.parameters,docs:{...(ir=ne.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(dr=(ur=ne.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var mr,hr,Sr;oe.parameters={...oe.parameters,docs:{...(mr=oe.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(Sr=(hr=oe.parameters)==null?void 0:hr.docs)==null?void 0:Sr.source}}};var pr,gr,br;ae.parameters={...ae.parameters,docs:{...(pr=ae.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w='full' gap='md'>
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button isDisabled={value === 100} colorScheme='blue' onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(br=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:br.source}}};var vr,fr,Cr;te.parameters={...te.parameters,docs:{...(vr=te.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <VStack gap='lg'>
      <Slider size='sm'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
      </Slider>

      <Slider size='md'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
      </Slider>

      <Slider size='lg'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
      </Slider>
    </VStack>;
}`,...(Cr=(fr=te.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var kr,wr,Tr;le.parameters={...le.parameters,docs:{...(kr=le.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <Slider value={value} onChange={onChange} mt='10' onMouseEnter={on} onMouseLeave={off}>
      <SliderMark value={25} w='10' ml='-5'>
        25%
      </SliderMark>
      <SliderMark value={50} w='10' ml='-5'>
        50%
      </SliderMark>
      <SliderMark value={75} w='10' ml='-5'>
        75%
      </SliderMark>

      <Tooltip placement='top' label={\`\${value}%\`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(Tr=(wr=le.parameters)==null?void 0:wr.docs)==null?void 0:Tr.source}}};var Vr,Mr,xr;se.parameters={...se.parameters,docs:{...(Vr=se.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <Slider />
      </FormControl>
    </>;
}`,...(xr=(Mr=se.parameters)==null?void 0:Mr.docs)==null?void 0:xr.source}}};var yr,Pr,Fr;ce.parameters={...ce.parameters,docs:{...(yr=ce.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <Slider />
      </FormControl>
    </>;
}`,...(Fr=(Pr=ce.parameters)==null?void 0:Pr.docs)==null?void 0:Fr.source}}};var zr,Rr,Dr;ie.parameters={...ie.parameters,docs:{...(zr=ie.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label='volume (sound)' errorMessage='Volume should be set to 20 or higher.'>
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Dr=(Rr=ie.parameters)==null?void 0:Rr.docs)==null?void 0:Dr.source}}};var Ir,Er,Or;ue.parameters={...ue.parameters,docs:{...(Ir=ue.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <>
      <Slider trackColor='orange.200' filledTrackColor='orange.500' thumbColor='orange.700' />

      <Slider trackProps={{
      bg: 'green.200'
    }} filledTrackProps={{
      bg: 'green.500'
    }} thumbProps={{
      bg: 'green.700'
    }} />

      <Slider>
        <SliderTrack bg='blue.200' filledTrackProps={{
        bg: 'blue.500'
      }} />
        <SliderThumb bg='blue.700' />
      </Slider>

      <Slider>
        <SliderTrack bg='red.200'>
          <SliderFilledTrack bg='red.500' />
        </SliderTrack>

        <SliderThumb bg='red.700' />
      </Slider>
    </>;
}`,...(Or=(Er=ue.parameters)==null?void 0:Er.docs)==null?void 0:Or.source}}};var Br,_r,$r;de.parameters={...de.parameters,docs:{...(Br=de.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <>
      <Slider thumbProps={{
      color: 'blue.500',
      boxSize: '6',
      children: <Icon icon={faWaveSquare} />
    }} />

      <Slider>
        <SliderThumb color='blue.500' boxSize='6'>
          <Icon icon={faWaveSquare} />
        </SliderThumb>
      </Slider>
    </>;
}`,...($r=(_r=de.parameters)==null?void 0:_r.docs)==null?void 0:$r.source}}};var Ar,Nr,jr;me.parameters={...me.parameters,docs:{...(Ar=me.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Slider value={value} onChange={onChange} mt='10'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
        <SliderMark value={value} bg='blue.500' color='white' py='0.5' rounded='md' w='10' mt='-10' ml='-5'>
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
}`,...(qr=(Lr=he.parameters)==null?void 0:Lr.docs)==null?void 0:qr.source}}};var Ur,Wr,Kr;Se.parameters={...Se.parameters,docs:{...(Ur=Se.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Kr=(Wr=Se.parameters)==null?void 0:Wr.docs)==null?void 0:Kr.source}}};var Xr,Yr,Gr;pe.parameters={...pe.parameters,docs:{...(Xr=pe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Gr=(Yr=pe.parameters)==null?void 0:Yr.docs)==null?void 0:Gr.source}}};var Jr,Qr,Zr;ge.parameters={...ge.parameters,docs:{...(Jr=ge.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.slider} label='Volume' errorMessage={errors.slider?.message}>
        <Controller name='slider' control={control} rules={{
        max: {
          value: 50,
          message: 'The maximum value is 50.'
        }
      }} render={({
        field
      }) => <Slider {...field} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Zr=(Qr=ge.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};const Vo=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Vo as __namedExportsOrder,G as basic,ue as customColor,he as customControl,me as customMark,de as customThumb,To as default,se as isDisabled,ie as isInvalid,ce as isReadonly,pe as onChangeEnd,Se as onChangeStart,ge as reactHookForm,Z as withColorScheme,J as withDefaultValue,ae as withFocusThumbOnChange,te as withMark,ne as withMinMax,ee as withOrientation,re as withReversed,Q as withSize,oe as withStep,le as withTooltip};
//# sourceMappingURL=slider.stories-c12346ba.js.map
