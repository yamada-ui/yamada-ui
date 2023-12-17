import{j as e,a as l,F as f}from"./jsx-runtime-TtYKBvr-.js";import{I as Ae,p as Ne}from"./fontawesome-icon-ZfuIL68e.js";import{u as gn}from"./index-gWY0u-sb.js";import{r as i}from"./index-IybTgENJ.js";import{u as vn,C as bn}from"./index.esm-PVkfQNar.js";import{c as fn}from"./components-mlxOPCnL.js";import{u as Cn}from"./index-yP8_fdVn.js";import{u as kn,c as wn,b as Tn}from"./index-wph2Tb8u.js";import{c as Vn,p as xn,J as je,$ as Mn,a0 as Pn,a1 as yn,u as I,a as U,d as He,y as Fn,o as Rn,v as ye,O as H,I as Fe,h as Re}from"./factory-yYnGGCem.js";import{u as In,f as L,F as ve}from"./form-control-FwzeaZdC.js";import{r as Le,v as qe,a as Ie,p as zn}from"./number-T9-jc1Pg.js";import{f as W}from"./forward-ref-6T0UNPU-.js";import{u as Dn}from"./use-component-style-5-ma296Y.js";import{o as En}from"./theme-provider-Wsw433nP.js";import{T as z}from"./text-Kd5_YHaX.js";import{C as _n}from"./center-YUZbzzyF.js";import{B as ze}from"./button-vw3_AT4f.js";import{V as en}from"./stack-XX7xMkh4.js";import{T as On}from"./tooltip-ztfRwXJ_.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-h0N_MwdT.js";import"./index-dINoAjpC.js";import"./index-jxkA9W0j.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-vmvn19tJ.js";import"./environment-provider-AgGaubw6.js";import"./loading-provider-eLBvA5DO.js";import"./index-JFdRY6YH.js";import"./component-G3mliOEp.js";import"./loading-JdMW4dxy.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";import"./motion-ONtTX0Ck.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-C0JWommc.js";import"./index-xIHD0DlW.js";import"./notice-t31q7X58.js";import"./alert-k4hBOFJJ.js";import"./close-button-Nk1l7Q8c.js";import"./use-ripple-oUvMmrsO.js";import"./container-8YcCAsLj.js";import"./box-rBvPdJwr.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-zXlpxDMh.js";import"./index-JdnEfjmQ.js";import"./index-iBp7F3Ts.js";import"./slide-fade-Iw_C_82k.js";import"./utils-poULCIrV.js";import"./scale-fade-r8VwcKyL.js";const Bn=({focusThumbOnChange:n=!0,...t})=>{t.isReadOnly??(t.isReadOnly=!n);let{id:u,name:m,min:c=0,max:d=100,step:C=1,defaultValue:g,orientation:T="horizontal",isReversed:S,required:R,disabled:F,readOnly:D,onChange:fe,...h}=In(t);if(d<c)throw new Error("Do not assign a number less than 'min' to 'max'");const Ce=He(h.onChangeStart),E=He(h.onChangeEnd),[ke,_]=Cn({value:h.value,defaultValue:g??c+(d-c)/2,onChange:fe}),[O,K]=i.useState(!1),[we,X]=i.useState(!1),B=!(F||D),x=(d-c)/10,M=C||(d-c)/100,p=Ie(ke,c,d),Te=d-p+c,$=qe(S?Te:p,c,d),k=T==="vertical",b=kn({min:c,max:d,step:C,value:p,isInteractive:B,eventSource:null,focusThumbOnChange:n}),Ee=i.useRef(null),Ve=i.useRef(null),xe=i.useRef(null),Y=wn(xe);Tn(Ee,{onSessionStart:r=>{const{isInteractive:o,value:s}=b.current;o&&(K(!0),Oe(),_e(r),Ce(s))},onSessionEnd:()=>{const{isInteractive:r,value:o}=b.current;r&&(K(!1),E(o))},onMove:r=>{const{isInteractive:o}=b.current;o&&_e(r)}});const nn=i.useCallback(r=>{var $e;if(!Ve.current)return;const{min:o,max:s,step:w}=b.current;b.current.eventSource="pointer";const{bottom:P,left:Me,height:mn,width:hn}=Ve.current.getBoundingClientRect(),{clientX:pn,clientY:Sn}=(($e=r.touches)==null?void 0:$e[0])??r;let Pe=(k?P-Sn:pn-Me)/(k?mn:hn);S&&(Pe=1-Pe);let j=zn(Pe,o,s);return w&&(j=parseFloat(Le(j,o,w))),j=Ie(j,o,s),j},[k,S,b]),_e=r=>{const{value:o}=b.current,s=nn(r);s!=null&&s!==o&&_(s)},Oe=i.useCallback(()=>{const{focusThumbOnChange:r}=b.current;r&&setTimeout(()=>{var o;return(o=xe.current)==null?void 0:o.focus()})},[b]),V=i.useCallback(r=>{const{isInteractive:o,min:s,max:w}=b.current;o&&(r=parseFloat(Le(r,s,M)),r=Ie(r,s,w),_(r))},[M,_,b]),A=i.useCallback((r=M)=>V(S?p-r:p+r),[V,S,M,p]),N=i.useCallback((r=M)=>V(S?p+r:p-r),[V,S,M,p]),tn=i.useCallback(()=>V(g||0),[V,g]),an=i.useCallback(r=>V(r),[V]),Be=i.useCallback(r=>{const{min:o,max:s}=b.current,P={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(x),PageDown:()=>N(x),Home:()=>V(o),End:()=>V(s)}[r.key];P&&(r.preventDefault(),r.stopPropagation(),P(r),b.current.eventSource="keyboard")},[V,b,N,A,x]);Fn(()=>{const{eventSource:r,value:o}=b.current;Oe(),r==="keyboard"&&E(o)},[p,E]);const on=i.useCallback((r={},o=null)=>{const{width:s,height:w}=Y??{width:0,height:0},P={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...k?{paddingLeft:s/2,paddingRight:s/2}:{paddingTop:w/2,paddingBottom:w/2}};return{...Rn(h,["value","onChangeStart","onChangeEnd"]),...r,ref:ye(o,Ee),tabIndex:-1,style:P}},[k,h,Y]),ln=i.useCallback((r={},o=null)=>({...H(h,L),...r,id:u,ref:o,type:"hidden",name:m,value:p,required:R,disabled:F,readOnly:D}),[F,u,m,D,R,h,p]),sn=i.useCallback((r={},o=null)=>{const s={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...H(h,L),...r,ref:ye(o,Ve),style:s}},[k,h]),un=i.useCallback((r={},o=null)=>{const s=Math.abs(S?100-$:$),w={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...S?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...S?{right:"0%"}:{left:"0%"}}};return{...H(h,L),...r,ref:o,style:w}},[S,k,h,$]),cn=i.useCallback((r={},o=null)=>{let s=qe(r.value,c,d);s=S?100-s:s;const w={...r.style,position:"absolute",pointerEvents:"none",...k?{bottom:`${s}%`}:{left:`${s}%`}};return{...H(h,L),...r,ref:o,"aria-hidden":!0,"data-invalid":Fe(r.value<c||d<r.value),"data-highlighted":Fe(r.value<=p),style:w}},[S,k,d,c,h,p]),dn=i.useCallback((r={},o=null)=>{const s=$,{width:w,height:P}=Y??{width:0,height:0},Me={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...k?{bottom:`calc(${s}% - ${P/2}px)`}:{left:`calc(${s}% - ${w/2}px)`}};return{"aria-label":"Slider thumb",...H(h,L),...r,ref:ye(o,xe),tabIndex:B&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":p,"data-active":Fe(O&&n),"aria-orientation":T,onKeyDown:Re(r.onKeyDown,Be),onFocus:Re(r.onFocus,h.onFocus,()=>X(!0)),onBlur:Re(r.onBlur,h.onBlur,()=>X(!1)),style:Me}},[c,d,p,n,O,B,k,Be,T,h,$,Y]);return{value:p,isFocused:we,isDragging:O,isVertical:k,stepUp:A,stepDown:N,reset:tn,stepTo:an,getContainerProps:on,getInputProps:ln,getTrackProps:sn,getFilledTrackProps:un,getMarkProps:cn,getThumbProps:dn}},[$n,be]=Vn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),a=W((n,t)=>{const[u,m]=Dn("Slider",n),{className:c,children:d,inputProps:C,trackProps:g,filledTrackProps:T,thumbProps:S,trackColor:R,filledTrackColor:F,trackSize:D,thumbColor:fe,thumbSize:h,...Ce}=En(m),{isVertical:E,getContainerProps:ke,getInputProps:_,getTrackProps:O,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X}=Bn(Ce),B={...u.container},x=xn(d),[M]=je(x,q),[p]=je(x,y),Te=Mn(x,y),De=Pn(x)?d:yn(x,q,y);return e($n,{value:{isVertical:E,getTrackProps:O,getFilledTrackProps:K,getMarkProps:we,getThumbProps:X,trackProps:g,trackColor:R,trackSize:D,filledTrackProps:T,filledTrackColor:F,thumbProps:S,thumbColor:fe,thumbSize:h,styles:u},children:l(I.div,{className:U("ui-slider",c),__css:B,...ke(),children:[e(I.input,{..._(C,t)}),M??e(q,{}),De,p??(Te?null:e(y,{}))]})})}),q=W(({className:n,children:t,filledTrackProps:u,...m},c)=>{const{styles:d,trackProps:C,trackColor:g,trackSize:T,isVertical:S,getTrackProps:R}=be(),F={...d.track};return e(I.div,{className:U("ui-slider__track",n),__css:F,...R({...g?{bg:g}:{},...T?S?{w:T}:{h:T}:{},...C,...m},c),children:t??e(rn,{...u})})}),rn=W(({className:n,...t},u)=>{const{styles:m,filledTrackProps:c,filledTrackColor:d,getFilledTrackProps:C}=be(),g={...m.filledTrack};return e(I.div,{className:U("ui-slider__track-filled",n),__css:g,...C({...d?{bg:d}:{},...c,...t},u)})}),v=W(({className:n,...t},u)=>{const{styles:m,getMarkProps:c}=be(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e(I.div,{className:U("ui-slider__mark",n),__css:d,...c(t,u)})}),y=W(({className:n,...t},u)=>{const{styles:m,thumbProps:c,thumbColor:d,thumbSize:C,getThumbProps:g}=be(),T={...m.thumb};return e(I.div,{className:U("ui-slider__thumb",n),__css:T,...g({...d?{bg:d}:{},...C?{boxSize:C}:{},...c,...t},u)})}),jt={title:"Components / Forms / Slider",component:a},J=()=>e(a,{}),G=()=>e(a,{defaultValue:50}),Q=()=>l(f,{children:[e(a,{size:"sm",defaultValue:25}),e(a,{size:"md",defaultValue:50}),e(a,{size:"lg",defaultValue:75})]}),Z=()=>e(f,{children:fn.map(n=>e(a,{colorScheme:n},n))}),ee=()=>e(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),re=()=>l(f,{children:[e(a,{isReversed:!0}),e(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),ne=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(z,{children:["Value: ",n]}),e(a,{value:n,min:0,max:200,onChange:t})]})},te=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(z,{children:["Value: ",n]}),e(a,{value:n,step:10,onChange:t})]})},ae=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(z,{children:["Value: ",n]}),e(a,{value:n,step:10,focusThumbOnChange:!1}),l(_n,{w:"full",gap:"md",children:[e(ze,{isDisabled:n===0,onClick:()=>t(u=>u!==0?u-10:u),children:"-10"}),e(ze,{isDisabled:n===100,colorScheme:"blue",onClick:()=>t(u=>u!==100?u+10:u),children:"+10"})]})]})},oe=()=>l(en,{gap:"lg",children:[l(a,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),le=()=>{const[n,t]=i.useState(50),[u,{on:m,off:c}]=gn(!1);return l(a,{value:n,onChange:t,mt:"10",onMouseEnter:m,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(On,{placement:"top",label:`${n}%`,isOpen:u,children:e(y,{})})]})},se=()=>l(f,{children:[e(a,{isDisabled:!0}),e(ve,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ie=()=>l(f,{children:[e(a,{isReadOnly:!0}),e(ve,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ue=()=>{const[n,t]=i.useState(15);return l(f,{children:[e(a,{isInvalid:n<20,value:n,onChange:t}),e(ve,{isInvalid:n<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(a,{value:n,onChange:t})})]})},ce=()=>l(f,{children:[e(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(a,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(a,{children:[e(q,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(y,{bg:"blue.700"})]}),l(a,{children:[e(q,{bg:"red.200",children:e(rn,{bg:"red.500"})}),e(y,{bg:"red.700"})]})]}),de=()=>l(f,{children:[e(a,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),e(a,{children:e(y,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})})]}),me=()=>{const[n,t]=i.useState(50);return e(f,{children:l(a,{value:n,onChange:t,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n,"%"]})]})})},he=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(z,{children:["Value: ",n]}),e(a,{value:n,onChange:t})]})},pe=()=>{const[n,t]=i.useState(50),[u,m]=i.useState(50);return l(f,{children:[l(z,{children:["Value: ",n,", Start Value: ",u]}),e(a,{value:n,onChange:t,onChangeStart:m})]})},Se=()=>{const[n,t]=i.useState(50),[u,m]=i.useState(50);return l(f,{children:[l(z,{children:["Value: ",n,", End Value: ",u]}),e(a,{value:n,onChange:t,onChangeEnd:m})]})},ge=()=>{var C;const n={slider:50},{control:t,handleSubmit:u,watch:m,formState:{errors:c}}=vn({defaultValues:n}),d=g=>console.log("submit:",g);return console.log("watch:",m()),l(en,{as:"form",onSubmit:u(d),children:[e(ve,{isInvalid:!!c.slider,label:"Volume",errorMessage:(C=c.slider)==null?void 0:C.message,children:e(bn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(a,{...g})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ue,We,Ke;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(or=(ar=ee.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var lr,sr,ir;re.parameters={...re.parameters,docs:{...(lr=re.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(ir=(sr=re.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var ur,cr,dr;ne.parameters={...ne.parameters,docs:{...(ur=ne.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
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
}`,...(pr=(hr=te.parameters)==null?void 0:hr.docs)==null?void 0:pr.source}}};var Sr,gr,vr;ae.parameters={...ae.parameters,docs:{...(Sr=ae.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(vr=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:vr.source}}};var br,fr,Cr;oe.parameters={...oe.parameters,docs:{...(br=oe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(Cr=(fr=oe.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var kr,wr,Tr;le.parameters={...le.parameters,docs:{...(kr=le.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(wr=le.parameters)==null?void 0:wr.docs)==null?void 0:Tr.source}}};var Vr,xr,Mr;se.parameters={...se.parameters,docs:{...(Vr=se.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Mr=(xr=se.parameters)==null?void 0:xr.docs)==null?void 0:Mr.source}}};var Pr,yr,Fr;ie.parameters={...ie.parameters,docs:{...(Pr=ie.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Fr=(yr=ie.parameters)==null?void 0:yr.docs)==null?void 0:Fr.source}}};var Rr,Ir,zr;ue.parameters={...ue.parameters,docs:{...(Rr=ue.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(zr=(Ir=ue.parameters)==null?void 0:Ir.docs)==null?void 0:zr.source}}};var Dr,Er,_r;ce.parameters={...ce.parameters,docs:{...(Dr=ce.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(_r=(Er=ce.parameters)==null?void 0:Er.docs)==null?void 0:_r.source}}};var Or,Br,$r;de.parameters={...de.parameters,docs:{...(Or=de.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Qr=ge.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};const Ht=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Ht as __namedExportsOrder,J as basic,ce as customColor,he as customControl,me as customMark,de as customThumb,jt as default,se as isDisabled,ue as isInvalid,ie as isReadonly,Se as onChangeEnd,pe as onChangeStart,ge as reactHookForm,Z as withColorScheme,G as withDefaultValue,ae as withFocusThumbOnChange,oe as withMark,ne as withMinMax,ee as withOrientation,re as withReversed,Q as withSize,te as withStep,le as withTooltip};
