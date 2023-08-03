import{j as e,a as l,F as C}from"./jsx-runtime-37f7df21.js";import{I as Ae,p as Ne}from"./fontawesome-icon-d6608406.js";import{r as i}from"./index-f1f2c4b1.js";import{u as gn,C as bn}from"./index.esm-fb125d97.js";import{u as vn}from"./index-3333d5de.js";import{u as fn,a as Cn,b as kn}from"./index-831148b8.js";import{o as wn,s as Tn,t as je,J as Vn,K as Mn,L as xn,d as z,e as K,c as Le,h as yn,y as Fn,w as Fe,z as L,v as Pe}from"./factory-81c6291d.js";import{u as Pn,f as H,F as be}from"./form-control-7888c8d6.js";import{r as He,v as qe,c as ze,p as zn}from"./number-cdadea8f.js";import{f as U}from"./forward-ref-92ccee95.js";import{a as Rn}from"./use-component-style-f03a93f0.js";import{o as Dn,d as Re}from"./theme-2b4f2a73.js";import{T as R}from"./text-6737f911.js";import{C as In}from"./center-24089e74.js";import{B as De}from"./button-664b0d8f.js";import{V as en}from"./stack-58a54e70.js";import{u as En}from"./index-82c18e8f.js";import{T as On}from"./tooltip-ccbb3aa9.js";import"./index-d6b32626.js";import"./icon-36765902.js";import"./index-e84132d8.js";import"./extends-3d932e16.js";import"./loading-8fe548f5.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./index-cda24f77.js";import"./index-9082b512.js";import"./index-e21807ca.js";import"./index-b62ab4fb.js";import"./motion-16fcbfe3.js";import"./container-portal-07f4b31f.js";import"./index-c74c9f7f.js";import"./slide-fade-24be0252.js";import"./utils-d6527b88.js";import"./scale-fade-339e79ab.js";const Bn=a=>{const{id:t,name:u,min:s=0,max:d=100,step:S=1,defaultValue:v,orientation:g="horizontal",isReversed:m,focusThumbOnChange:D=!0,required:P,disabled:F,readOnly:I,onChange:fe,...h}=Pn(a);if(d<s)throw new Error("Do not assign a number less than 'min' to 'max'");const Ce=Le(h.onChangeStart),E=Le(h.onChangeEnd),[ke,O]=vn({value:h.value,defaultValue:v??s+(d-s)/2,onChange:fe}),[B,W]=i.useState(!1),[we,X]=i.useState(!1),_=!(F||I),V=(d-s)/10,M=S||(d-s)/100,p=ze(ke,s,d),Te=d-p+s,$=qe(m?Te:p,s,d),k=g==="vertical",f=fn({min:s,max:d,step:S,value:p,isInteractive:_,eventSource:null,focusThumbOnChange:D}),Ee=i.useRef(null),Ve=i.useRef(null),Me=i.useRef(null),Y=Cn(Me);kn(Ee,{onSessionStart:r=>{const{isInteractive:o,value:c}=f.current;o&&(W(!0),Be(),Oe(r),Ce(c))},onSessionEnd:()=>{const{isInteractive:r,value:o}=f.current;r&&(W(!1),E(o))},onMove:r=>{const{isInteractive:o}=f.current;o&&Oe(r)}});const nn=i.useCallback(r=>{var $e;if(!Ve.current)return;const{min:o,max:c,step:w}=f.current;f.current.eventSource="pointer";const{bottom:x,left:xe,height:mn,width:hn}=Ve.current.getBoundingClientRect(),{clientX:Sn,clientY:pn}=(($e=r.touches)==null?void 0:$e[0])??r;let ye=(k?x-pn:Sn-xe)/(k?mn:hn);m&&(ye=1-ye);let j=zn(ye,o,c);return w&&(j=parseFloat(He(j,o,w))),j=ze(j,o,c),j},[k,m,f]),Oe=r=>{const{value:o}=f.current,c=nn(r);c!=null&&c!==o&&O(c)},Be=i.useCallback(()=>{const{focusThumbOnChange:r}=f.current;r&&setTimeout(()=>{var o;return(o=Me.current)==null?void 0:o.focus()})},[f]),T=i.useCallback(r=>{const{isInteractive:o,min:c,max:w}=f.current;o&&(r=parseFloat(He(r,c,M)),r=ze(r,c,w),O(r))},[M,O,f]),A=i.useCallback((r=M)=>T(m?p-r:p+r),[T,m,M,p]),N=i.useCallback((r=M)=>T(m?p+r:p-r),[T,m,M,p]),an=i.useCallback(()=>T(v||0),[T,v]),tn=i.useCallback(r=>T(r),[T]),_e=i.useCallback(r=>{const{min:o,max:c}=f.current,x={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(V),PageDown:()=>N(V),Home:()=>T(o),End:()=>T(c)}[r.key];x&&(r.preventDefault(),r.stopPropagation(),x(r),f.current.eventSource="keyboard")},[T,f,N,A,V]);yn(()=>{const{eventSource:r,value:o}=f.current;Be(),r==="keyboard"&&E(o)},[p,E]);const on=i.useCallback((r={},o=null)=>{const{width:c,height:w}=Y??{width:0,height:0},x={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...k?{paddingLeft:c/2,paddingRight:c/2}:{paddingTop:w/2,paddingBottom:w/2}};return{...Fn(h,["value","onChangeStart","onChangeEnd"]),...r,ref:Fe(o,Ee),tabIndex:-1,style:x}},[k,h,Y]),ln=i.useCallback((r={},o=null)=>({...L(h,H),...r,id:t,ref:o,type:"hidden",name:u,value:p,required:P,disabled:F,readOnly:I}),[F,t,u,I,P,h,p]),sn=i.useCallback((r={},o=null)=>{const c={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...L(h,H),...r,ref:Fe(o,Ve),style:c}},[k,h]),cn=i.useCallback((r={},o=null)=>{const c=Math.abs(m?100-$:$),w={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:`${c}%`,...m?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${c}%`,...m?{right:"0%"}:{left:"0%"}}};return{...L(h,H),...r,ref:o,style:w}},[m,k,h,$]),un=i.useCallback((r={},o=null)=>{let c=qe(r.value,s,d);c=m?100-c:c;const w={...r.style,position:"absolute",pointerEvents:"none",...k?{bottom:`${c}%`}:{left:`${c}%`}};return{...L(h,H),...r,ref:o,"aria-hidden":!0,"data-invalid":Re(r.value<s||d<r.value),"data-highlighted":Re(r.value<=p),style:w}},[m,k,d,s,h,p]),dn=i.useCallback((r={},o=null)=>{const c=$,{width:w,height:x}=Y??{width:0,height:0},xe={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...k?{bottom:`calc(${c}% - ${x/2}px)`}:{left:`calc(${c}% - ${w/2}px)`}};return{...L(h,H),...r,ref:Fe(o,Me),tabIndex:_?0:void 0,role:"slider","data-active":Re(B),"aria-orientation":g,onKeyDown:Pe(r.onKeyDown,_e),onFocus:Pe(r.onFocus,h.onFocus,()=>X(!0)),onBlur:Pe(r.onBlur,h.onBlur,()=>X(!1)),style:xe}},[B,_,k,_e,g,h,$,Y]);return{value:p,isFocused:we,isDragging:B,isVertical:k,stepUp:A,stepDown:N,reset:an,stepTo:tn,getContainerProps:on,getInputProps:ln,getTrackProps:sn,getFilledTrackProps:cn,getMarkProps:un,getThumbProps:dn}},[_n,ve]=wn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),n=U((a,t)=>{const[u,s]=Rn("Slider",a),{className:d,children:S,input:v,track:g,filledTrack:m,thumb:D,trackColor:P,filledTrackColor:F,trackSize:I,thumbColor:fe,thumbSize:h,...Ce}=Dn(s),{isVertical:E,getContainerProps:ke,getInputProps:O,getTrackProps:B,getFilledTrackProps:W,getMarkProps:we,getThumbProps:X}=Bn(Ce),_={...u.container},V=Tn(S),[M]=je(V,q),[p]=je(V,y),Te=Vn(V,y),Ie=Mn(V)?S:xn(V,q,y);return e(_n,{value:{isVertical:E,getTrackProps:B,getFilledTrackProps:W,getMarkProps:we,getThumbProps:X,track:g,trackColor:P,trackSize:I,filledTrack:m,filledTrackColor:F,thumb:D,thumbColor:fe,thumbSize:h,styles:u},children:l(z.div,{className:K("ui-slider",d),__css:_,...ke(),children:[e(z.input,{...O(v,t)}),M??e(q,{}),Ie,p??(Te?null:e(y,{}))]})})}),q=U(({className:a,children:t,filledTrack:u,...s},d)=>{const{styles:S,track:v,trackColor:g,trackSize:m,isVertical:D,getTrackProps:P}=ve(),F={...S.track};return e(z.div,{className:K("ui-slider-track",a),__css:F,...P({...g?{bg:g}:{},...m?D?{w:m}:{h:m}:{},...v,...s},d),children:t??e(rn,{...u})})}),rn=U(({className:a,...t},u)=>{const{styles:s,filledTrack:d,filledTrackColor:S,getFilledTrackProps:v}=ve(),g={...s.filledTrack};return e(z.div,{className:K("ui-slider-filledTrack",a),__css:g,...v({...S?{bg:S}:{},...d,...t},u)})}),b=U(({className:a,...t},u)=>{const{styles:s,getMarkProps:d}=ve(),S={display:"inline-flex",justifyContent:"center",alignItems:"center",...s.mark};return e(z.div,{className:K("ui-slider-mark",a),__css:S,...d(t,u)})}),y=U(({className:a,...t},u)=>{const{styles:s,thumb:d,thumbColor:S,thumbSize:v,getThumbProps:g}=ve(),m={...s.thumb};return e(z.div,{className:K("ui-slider-thumb",a),__css:m,...g({...S?{bg:S}:{},...v?{boxSize:v}:{},...d,...t},u)})}),ka={title:"Components / Forms / Slider",component:n},J=()=>e(n,{}),G=()=>e(n,{defaultValue:50}),Q=()=>l(C,{children:[e(n,{size:"sm",defaultValue:25}),e(n,{size:"md",defaultValue:50}),e(n,{size:"lg",defaultValue:75})]}),Z=()=>l(C,{children:[e(n,{colorScheme:"primary"}),e(n,{colorScheme:"secondary"}),e(n,{colorScheme:"warning"}),e(n,{colorScheme:"danger"}),e(n,{colorScheme:"link"}),e(n,{colorScheme:"gray"}),e(n,{colorScheme:"red"}),e(n,{colorScheme:"orange"}),e(n,{colorScheme:"yellow"}),e(n,{colorScheme:"green"}),e(n,{colorScheme:"teal"}),e(n,{colorScheme:"blue"}),e(n,{colorScheme:"cyan"}),e(n,{colorScheme:"purple"}),e(n,{colorScheme:"pink"})]}),ee=()=>e(n,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),re=()=>l(C,{children:[e(n,{isReversed:!0}),e(n,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ne=()=>{const[a,t]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",a]}),e(n,{value:a,min:0,max:200,onChange:t})]})},ae=()=>{const[a,t]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",a]}),e(n,{value:a,step:10,onChange:t})]})},te=()=>{const[a,t]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",a]}),e(n,{value:a,step:10,focusThumbOnChange:!1}),l(In,{w:"full",gap:"md",children:[e(De,{isDisabled:a===0,onClick:()=>t(u=>u!==0?u-10:u),children:"-10"}),e(De,{isDisabled:a===100,colorScheme:"blue",onClick:()=>t(u=>u!==100?u+10:u),children:"+10"})]})]})},oe=()=>l(en,{gap:"lg",children:[l(n,{size:"sm",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(n,{size:"md",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(n,{size:"lg",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),le=()=>{const[a,t]=i.useState(50),[u,{on:s,off:d}]=En(!1);return l(n,{value:a,onChange:t,mt:"10",onMouseEnter:s,onMouseLeave:d,children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"}),e(On,{placement:"top",label:`${a}%`,isOpen:u,children:e(y,{})})]})},se=()=>l(C,{children:[e(n,{isDisabled:!0}),e(be,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(n,{})})]}),ce=()=>l(C,{children:[e(n,{isReadOnly:!0}),e(be,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(n,{})})]}),ie=()=>{const[a,t]=i.useState(15);return l(C,{children:[e(n,{isInvalid:a<20,value:a,onChange:t}),e(be,{isInvalid:a<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(n,{value:a,onChange:t})})]})},ue=()=>l(C,{children:[e(n,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(n,{track:{bg:"green.200"},filledTrack:{bg:"green.500"},thumb:{bg:"green.700"}}),l(n,{children:[e(q,{bg:"blue.200",filledTrack:{bg:"blue.500"}}),e(y,{bg:"blue.700"})]}),l(n,{children:[e(q,{bg:"red.200",children:e(rn,{bg:"red.500"})}),e(y,{bg:"red.700"})]})]}),de=()=>l(C,{children:[e(n,{thumb:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),e(n,{children:e(y,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})})]}),me=()=>{const[a,t]=i.useState(50);return e(C,{children:l(n,{value:a,onChange:t,mt:"10",children:[e(b,{value:25,w:"10",ml:"-5",children:"25%"}),e(b,{value:50,w:"10",ml:"-5",children:"50%"}),e(b,{value:75,w:"10",ml:"-5",children:"75%"}),l(b,{value:a,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[a,"%"]})]})})},he=()=>{const[a,t]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",a]}),e(n,{value:a,onChange:t})]})},Se=()=>{const[a,t]=i.useState(50),[u,s]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",a,", Start Value: ",u]}),e(n,{value:a,onChange:t,onChangeStart:s})]})},pe=()=>{const[a,t]=i.useState(50),[u,s]=i.useState(50);return l(C,{children:[l(R,{children:["Value: ",a,", End Value: ",u]}),e(n,{value:a,onChange:t,onChangeEnd:s})]})},ge=()=>{var v;const a={slider:50},{control:t,handleSubmit:u,watch:s,formState:{errors:d}}=gn({defaultValues:a}),S=g=>console.log("submit:",g);return console.log("watch:",s()),l(en,{as:"form",onSubmit:u(S),children:[e(be,{isInvalid:!!d.slider,label:"Volume",errorMessage:(v=d.slider)==null?void 0:v.message,children:e(bn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(n,{...g})})}),e(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ke,Ue,We;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(We=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ye,Je;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Je=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Ge,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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

      <Slider colorScheme='red' />

      <Slider colorScheme='orange' />

      <Slider colorScheme='yellow' />

      <Slider colorScheme='green' />

      <Slider colorScheme='teal' />

      <Slider colorScheme='blue' />

      <Slider colorScheme='cyan' />

      <Slider colorScheme='purple' />

      <Slider colorScheme='pink' />
    </>;
}`,...(nr=(rr=Z.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var ar,tr,or;ee.parameters={...ee.parameters,docs:{...(ar=ee.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <Slider orientation='vertical' h='calc(100vh - 16px * 2)' />;
}`,...(or=(tr=ee.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var lr,sr,cr;re.parameters={...re.parameters,docs:{...(lr=re.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
}`,...(dr=(ur=ne.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var mr,hr,Sr;ae.parameters={...ae.parameters,docs:{...(mr=ae.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(Sr=(hr=ae.parameters)==null?void 0:hr.docs)==null?void 0:Sr.source}}};var pr,gr,br;te.parameters={...te.parameters,docs:{...(pr=te.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
}`,...(br=(gr=te.parameters)==null?void 0:gr.docs)==null?void 0:br.source}}};var vr,fr,Cr;oe.parameters={...oe.parameters,docs:{...(vr=oe.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(fr=oe.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var kr,wr,Tr;le.parameters={...le.parameters,docs:{...(kr=le.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(xr=(Mr=se.parameters)==null?void 0:Mr.docs)==null?void 0:xr.source}}};var yr,Fr,Pr;ce.parameters={...ce.parameters,docs:{...(yr=ce.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label='volume (sound)' helperMessage='Please select your preferred volume.'>
        <Slider />
      </FormControl>
    </>;
}`,...(Pr=(Fr=ce.parameters)==null?void 0:Fr.docs)==null?void 0:Pr.source}}};var zr,Rr,Dr;ie.parameters={...ie.parameters,docs:{...(zr=ie.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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

      <Slider track={{
      bg: 'green.200'
    }} filledTrack={{
      bg: 'green.500'
    }} thumb={{
      bg: 'green.700'
    }} />

      <Slider>
        <SliderTrack bg='blue.200' filledTrack={{
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
      <Slider thumb={{
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
}`,...(jr=(Nr=me.parameters)==null?void 0:Nr.docs)==null?void 0:jr.source}}};var Lr,Hr,qr;he.parameters={...he.parameters,docs:{...(Lr=he.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(qr=(Hr=he.parameters)==null?void 0:Hr.docs)==null?void 0:qr.source}}};var Kr,Ur,Wr;Se.parameters={...Se.parameters,docs:{...(Kr=Se.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Wr=(Ur=Se.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Xr,Yr,Jr;pe.parameters={...pe.parameters,docs:{...(Xr=pe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Jr=(Yr=pe.parameters)==null?void 0:Yr.docs)==null?void 0:Jr.source}}};var Gr,Qr,Zr;ge.parameters={...ge.parameters,docs:{...(Gr=ge.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Qr=ge.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};const wa=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{wa as __namedExportsOrder,J as basic,ue as customColor,he as customControl,me as customMark,de as customThumb,ka as default,se as isDisabled,ie as isInvalid,ce as isReadonly,pe as onChangeEnd,Se as onChangeStart,ge as reactHookForm,Z as withColorScheme,G as withDefaultValue,te as withFocusThumbOnChange,oe as withMark,ne as withMinMax,ee as withOrientation,re as withReversed,Q as withSize,ae as withStep,le as withTooltip};
//# sourceMappingURL=slider.stories-4cb19309.js.map
