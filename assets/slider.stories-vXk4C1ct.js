import{j as e,a as l,F as f}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ae,p as Ne}from"./fontawesome-icon-C7tXTgY1.js";import{u as vn}from"./index-YuXFfT5-.js";import{r as i}from"./index-4g5l5LRQ.js";import{u as bn,C as fn}from"./index.esm-rcUR5vC1.js";import{c as Cn}from"./components-jEpXWSLl.js";import{u as kn}from"./index-NZmSP0pq.js";import{u as wn,c as Tn,b as Vn}from"./index-XuAyJ1B7.js";import{c as Mn,v as xn,M as je,a0 as Pn,a1 as yn,a2 as Fn,u as z,a as q,g as He,e as Rn,o as zn,w as Pe,R as H,K as ye,h as Fe}from"./factory-dcM_aT7G.js";import{u as Dn,f as Le,g as Re,F as ge}from"./form-control-MkMAz64d.js";import{r as qe,v as Ke,a as ze,p as In}from"./number-T9-jc1Pg.js";import{f as K}from"./forward-ref-A-8Arhkk.js";import{u as En}from"./use-component-style-rFDzjddw.js";import{o as _n}from"./theme-provider-5V_IKGX1.js";import{T as D}from"./text-B8LKex_v.js";import{C as On}from"./center-fyQWM-kL.js";import{B as De}from"./button-xoPzDccJ.js";import{V as rn}from"./stack-Y0EHr1Pl.js";import{T as Bn}from"./tooltip-UZG4NcwP.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-KS9auLtj.js";import"./index-IifBfCIi.js";import"./index-kZ9TUvrv.js";import"./mapValues-fvZQFbEN.js";import"./_basePickBy-VIqm4fI2.js";import"./isPlainObject-mmZlXdLr.js";import"./index-PPLHz8o0.js";import"./ui-provider-k5tecyKK.js";import"./environment-provider-uixNuWLh.js";import"./motion-ukEXpwwk.js";import"./loading-provider-HX2IPxQ4.js";import"./index-t2vQ3W0h.js";import"./Combination-8oCz4vin.js";import"./loading-pgPsKy-B.js";import"./index-pXhAjey9.js";import"./index-BgoZuHN8.js";import"./motion-tce6SEvU.js";import"./index-EargzzxG.js";import"./container-portal-Yi4n-bPi.js";import"./index-jmm5gWkb.js";import"./notice-VC4RfpnO.js";import"./alert-MvITGrhO.js";import"./close-button-PB5ySZ0m.js";import"./use-ripple-u6WIY_9Q.js";import"./container-_q_yPkbK.js";import"./box-jZ-wi685.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-ptTq5LTe.js";import"./index-4b4ydyar.js";import"./index-C4XprzXC.js";import"./slide-fade-AJb9rA5b.js";import"./utils-zBr67TGd.js";import"./scale-fade-Z18YGuDB.js";const $n=({focusThumbOnChange:n=!0,...t})=>{n||(t.isReadOnly=!0);let{id:u,name:m,min:c=0,max:d=100,step:C=1,defaultValue:g,orientation:T="horizontal",isReversed:S,required:R,disabled:F,readOnly:I,onChange:be,...h}=Dn(t);if(d<c)throw new Error("Do not assign a number less than 'min' to 'max'");const fe=He(h.onChangeStart),E=He(h.onChangeEnd),[Ce,_]=kn({value:h.value,defaultValue:g??c+(d-c)/2,onChange:be}),[O,U]=i.useState(!1),[ke,W]=i.useState(!1),B=!(F||I),M=(d-c)/10,x=C||(d-c)/100,p=ze(Ce,c,d),we=d-p+c,$=Ke(S?we:p,c,d),k=T==="vertical",b=wn({min:c,max:d,step:C,value:p,isInteractive:B,eventSource:null,focusThumbOnChange:n}),Ee=i.useRef(null),Te=i.useRef(null),Ve=i.useRef(null),X=Tn(Ve);Vn(Ee,{onSessionStart:r=>{const{isInteractive:o,value:s}=b.current;o&&(U(!0),Oe(),_e(r),fe(s))},onSessionEnd:()=>{const{isInteractive:r,value:o}=b.current;r&&(U(!1),E(o))},onMove:r=>{const{isInteractive:o}=b.current;o&&_e(r)}});const tn=i.useCallback(r=>{var $e;if(!Te.current)return;const{min:o,max:s,step:w}=b.current;b.current.eventSource="pointer";const{bottom:P,left:Me,height:hn,width:pn}=Te.current.getBoundingClientRect(),{clientX:Sn,clientY:gn}=(($e=r.touches)==null?void 0:$e[0])??r;let xe=(k?P-gn:Sn-Me)/(k?hn:pn);S&&(xe=1-xe);let j=In(xe,o,s);return w&&(j=parseFloat(qe(j,o,w))),j=ze(j,o,s),j},[k,S,b]),_e=r=>{const{value:o}=b.current,s=tn(r);s!=null&&s!==o&&_(s)},Oe=i.useCallback(()=>{const{focusThumbOnChange:r}=b.current;r&&setTimeout(()=>{var o;return(o=Ve.current)==null?void 0:o.focus()})},[b]),V=i.useCallback(r=>{const{isInteractive:o,min:s,max:w}=b.current;o&&(r=parseFloat(qe(r,s,x)),r=ze(r,s,w),_(r))},[x,_,b]),A=i.useCallback((r=x)=>V(S?p-r:p+r),[V,S,x,p]),N=i.useCallback((r=x)=>V(S?p+r:p-r),[V,S,x,p]),an=i.useCallback(()=>V(g||0),[V,g]),on=i.useCallback(r=>V(r),[V]),Be=i.useCallback(r=>{const{min:o,max:s}=b.current,P={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(M),PageDown:()=>N(M),Home:()=>V(o),End:()=>V(s)}[r.key];P&&(r.preventDefault(),r.stopPropagation(),P(r),b.current.eventSource="keyboard")},[V,b,N,A,M]);Rn(()=>{const{eventSource:r,value:o}=b.current;Oe(),r==="keyboard"&&E(o)},[p,E]);const ln=i.useCallback((r={},o=null)=>{const{width:s,height:w}=X??{width:0,height:0},P={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...k?{paddingLeft:s/2,paddingRight:s/2}:{paddingTop:w/2,paddingBottom:w/2}};return{...zn(h,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,ref:Pe(o,Ee),tabIndex:-1,style:P}},[k,h,X]),sn=i.useCallback((r={},o=null)=>({...H(h,Le),...r,id:u,ref:o,type:"hidden",name:m,value:p,required:R,disabled:F,readOnly:I}),[F,u,m,I,R,h,p]),un=i.useCallback((r={},o=null)=>{const s={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...H(h,Re({omit:["aria-readonly"]})),...r,ref:Pe(o,Te),style:s}},[k,h]),cn=i.useCallback((r={},o=null)=>{const s=Math.abs(S?100-$:$),w={...r.style,position:"absolute",...k?{left:"50%",transform:"translateX(-50%)",height:`${s}%`,...S?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${s}%`,...S?{right:"0%"}:{left:"0%"}}};return{...H(h,Re({omit:["aria-readonly"]})),...r,ref:o,style:w}},[S,k,h,$]),dn=i.useCallback((r,o=null)=>{let s=Ke(r.value,c,d);s=S?100-s:s;const w={...r.style,position:"absolute",pointerEvents:"none",...k?{bottom:`${s}%`}:{left:`${s}%`}};return{...H(h,Re({omit:["aria-readonly"]})),...r,ref:o,"aria-hidden":!0,"data-invalid":ye(r.value<c||d<r.value),"data-highlighted":ye(r.value<=p),style:w}},[S,k,d,c,h,p]),mn=i.useCallback((r={},o=null)=>{const s=$,{width:w,height:P}=X??{width:0,height:0},Me={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...k?{bottom:`calc(${s}% - ${P/2}px)`}:{left:`calc(${s}% - ${w/2}px)`}};return{"aria-label":"Slider thumb",...H(h,Le),...r,ref:Pe(o,Ve),tabIndex:B&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":p,"data-active":ye(O&&n),"aria-orientation":T,onKeyDown:Fe(r.onKeyDown,Be),onFocus:Fe(r.onFocus,h.onFocus,()=>W(!0)),onBlur:Fe(r.onBlur,h.onBlur,()=>W(!1)),style:Me}},[c,d,p,n,O,B,k,Be,T,h,$,X]);return{value:p,isFocused:ke,isDragging:O,isVertical:k,stepUp:A,stepDown:N,reset:an,stepTo:on,getContainerProps:ln,getInputProps:sn,getTrackProps:un,getFilledTrackProps:cn,getMarkProps:dn,getThumbProps:mn}},[An,ve]=Mn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),a=K((n,t)=>{const[u,m]=En("Slider",n),{className:c,children:d,inputProps:C,trackProps:g,filledTrackProps:T,thumbProps:S,trackColor:R,filledTrackColor:F,trackSize:I,thumbColor:be,thumbSize:h,...fe}=_n(m),{isVertical:E,getContainerProps:Ce,getInputProps:_,getTrackProps:O,getFilledTrackProps:U,getMarkProps:ke,getThumbProps:W}=$n(fe),B={...u.container},M=xn(d),[x]=je(M,L),[p]=je(M,y),we=Pn(M,y),Ie=yn(M)?d:Fn(M,L,y);return e(An,{value:{isVertical:E,getTrackProps:O,getFilledTrackProps:U,getMarkProps:ke,getThumbProps:W,trackProps:g,trackColor:R,trackSize:I,filledTrackProps:T,filledTrackColor:F,thumbProps:S,thumbColor:be,thumbSize:h,styles:u},children:l(z.div,{className:q("ui-slider",c),__css:B,...Ce(),children:[e(z.input,{..._(C,t)}),x??e(L,{}),Ie,p??(we?null:e(y,{}))]})})}),L=K(({className:n,children:t,filledTrackProps:u,...m},c)=>{const{styles:d,trackProps:C,trackColor:g,trackSize:T,isVertical:S,getTrackProps:R}=ve(),F={...d.track};return e(z.div,{className:q("ui-slider__track",n),__css:F,...R({...g?{bg:g}:{},...T?S?{w:T}:{h:T}:{},...C,...m},c),children:t??e(nn,{...u})})}),nn=K(({className:n,...t},u)=>{const{styles:m,filledTrackProps:c,filledTrackColor:d,getFilledTrackProps:C}=ve(),g={...m.filledTrack};return e(z.div,{className:q("ui-slider__track-filled",n),__css:g,...C({...d?{bg:d}:{},...c,...t},u)})}),v=K(({className:n,...t},u)=>{const{styles:m,getMarkProps:c}=ve(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e(z.div,{className:q("ui-slider__mark",n),__css:d,...c(t,u)})}),y=K(({className:n,...t},u)=>{const{styles:m,thumbProps:c,thumbColor:d,thumbSize:C,getThumbProps:g}=ve(),T={...m.thumb};return e(z.div,{className:q("ui-slider__thumb",n),__css:T,...g({...d?{bg:d}:{},...C?{boxSize:C}:{},...c,...t},u)})}),Ht={title:"Components / Forms / Slider",component:a},Y=()=>e(a,{}),G=()=>e(a,{defaultValue:50}),J=()=>l(f,{children:[e(a,{size:"sm",defaultValue:25}),e(a,{size:"md",defaultValue:50}),e(a,{size:"lg",defaultValue:75})]}),Q=()=>e(f,{children:Cn.map(n=>e(a,{colorScheme:n},n))}),Z=()=>e(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ee=()=>l(f,{children:[e(a,{isReversed:!0}),e(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),re=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,min:0,max:200,onChange:t})]})},ne=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,step:10,onChange:t})]})},te=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,step:10,focusThumbOnChange:!1}),l(On,{w:"full",gap:"md",children:[e(De,{isDisabled:n===0,onClick:()=>t(u=>u!==0?u-10:u),children:"-10"}),e(De,{isDisabled:n===100,colorScheme:"blue",onClick:()=>t(u=>u!==100?u+10:u),children:"+10"})]})]})},ae=()=>l(rn,{gap:"lg",children:[l(a,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),oe=()=>{const[n,t]=i.useState(50),[u,{on:m,off:c}]=vn(!1);return l(a,{value:n,onChange:t,mt:"10",onMouseEnter:m,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e(Bn,{placement:"top",label:`${n}%`,isOpen:u,children:e(y,{})})]})},le=()=>l(f,{children:[e(a,{isDisabled:!0}),e(ge,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),se=()=>l(f,{children:[e(a,{isReadOnly:!0}),e(ge,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ie=()=>{const[n,t]=i.useState(15);return l(f,{children:[e(a,{isInvalid:n<20,value:n,onChange:t}),e(ge,{isInvalid:n<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(a,{value:n,onChange:t})})]})},ue=()=>l(f,{children:[e(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(a,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(a,{children:[e(L,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(y,{bg:"blue.700"})]}),l(a,{children:[e(L,{bg:"red.200",children:e(nn,{bg:"red.500"})}),e(y,{bg:"red.700"})]})]}),ce=()=>l(f,{children:[e(a,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})}}),e(a,{children:e(y,{color:"blue.500",boxSize:"6",children:e(Ae,{icon:Ne})})})]}),de=()=>{const[n,t]=i.useState(50);return e(f,{children:l(a,{value:n,onChange:t,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n,"%"]})]})})},me=()=>{const[n,t]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,onChange:t})]})},he=()=>{const[n,t]=i.useState(50),[u,m]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n,", Start Value: ",u]}),e(a,{value:n,onChange:t,onChangeStart:m})]})},pe=()=>{const[n,t]=i.useState(50),[u,m]=i.useState(50);return l(f,{children:[l(D,{children:["Value: ",n,", End Value: ",u]}),e(a,{value:n,onChange:t,onChangeEnd:m})]})},Se=()=>{var C;const n={slider:50},{control:t,handleSubmit:u,watch:m,formState:{errors:c}}=bn({defaultValues:n}),d=g=>console.log("submit:",g);return console.log("watch:",m()),l(rn,{as:"form",onSubmit:u(d),children:[e(ge,{isInvalid:!!c.slider,label:"Volume",errorMessage:(C=c.slider)==null?void 0:C.message,children:e(fn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(a,{...g})})}),e(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ue,We,Xe;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(Xe=(We=Y.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ge,Je;G.parameters={...G.parameters,docs:{...(Ye=G.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Je=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Ze,er;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(er=(Ze=J.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,nr,tr;Q.parameters={...Q.parameters,docs:{...(rr=Q.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(tr=(nr=Q.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var ar,or,lr;Z.parameters={...Z.parameters,docs:{...(ar=Z.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(lr=(or=Z.parameters)==null?void 0:or.docs)==null?void 0:lr.source}}};var sr,ir,ur;ee.parameters={...ee.parameters,docs:{...(sr=ee.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(ur=(ir=ee.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var cr,dr,mr;re.parameters={...re.parameters,docs:{...(cr=re.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(mr=(dr=re.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var hr,pr,Sr;ne.parameters={...ne.parameters,docs:{...(hr=ne.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(Sr=(pr=ne.parameters)==null?void 0:pr.docs)==null?void 0:Sr.source}}};var gr,vr,br;te.parameters={...te.parameters,docs:{...(gr=te.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(br=(vr=te.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var fr,Cr,kr;ae.parameters={...ae.parameters,docs:{...(fr=ae.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(kr=(Cr=ae.parameters)==null?void 0:Cr.docs)==null?void 0:kr.source}}};var wr,Tr,Vr;oe.parameters={...oe.parameters,docs:{...(wr=oe.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Tr=oe.parameters)==null?void 0:Tr.docs)==null?void 0:Vr.source}}};var Mr,xr,Pr;le.parameters={...le.parameters,docs:{...(Mr=le.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Pr=(xr=le.parameters)==null?void 0:xr.docs)==null?void 0:Pr.source}}};var yr,Fr,Rr;se.parameters={...se.parameters,docs:{...(yr=se.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(Rr=(Fr=se.parameters)==null?void 0:Fr.docs)==null?void 0:Rr.source}}};var zr,Dr,Ir;ie.parameters={...ie.parameters,docs:{...(zr=ie.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Ir=(Dr=ie.parameters)==null?void 0:Dr.docs)==null?void 0:Ir.source}}};var Er,_r,Or;ue.parameters={...ue.parameters,docs:{...(Er=ue.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(Or=(_r=ue.parameters)==null?void 0:_r.docs)==null?void 0:Or.source}}};var Br,$r,Ar;ce.parameters={...ce.parameters,docs:{...(Br=ce.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(Ar=($r=ce.parameters)==null?void 0:$r.docs)==null?void 0:Ar.source}}};var Nr,jr,Hr;de.parameters={...de.parameters,docs:{...(Nr=de.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(jr=de.parameters)==null?void 0:jr.docs)==null?void 0:Hr.source}}};var Lr,qr,Kr;me.parameters={...me.parameters,docs:{...(Lr=me.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(Kr=(qr=me.parameters)==null?void 0:qr.docs)==null?void 0:Kr.source}}};var Ur,Wr,Xr;he.parameters={...he.parameters,docs:{...(Ur=he.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Xr=(Wr=he.parameters)==null?void 0:Wr.docs)==null?void 0:Xr.source}}};var Yr,Gr,Jr;pe.parameters={...pe.parameters,docs:{...(Yr=pe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Jr=(Gr=pe.parameters)==null?void 0:Gr.docs)==null?void 0:Jr.source}}};var Qr,Zr,en;Se.parameters={...Se.parameters,docs:{...(Qr=Se.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
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
}`,...(en=(Zr=Se.parameters)==null?void 0:Zr.docs)==null?void 0:en.source}}};const Lt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Lt as __namedExportsOrder,Y as basic,ue as customColor,me as customControl,de as customMark,ce as customThumb,Ht as default,le as isDisabled,ie as isInvalid,se as isReadonly,pe as onChangeEnd,he as onChangeStart,Se as reactHookForm,Q as withColorScheme,G as withDefaultValue,te as withFocusThumbOnChange,ae as withMark,re as withMinMax,Z as withOrientation,ee as withReversed,J as withSize,ne as withStep,oe as withTooltip};
