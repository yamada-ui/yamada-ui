import{j as e,a as l,F as b}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ne,p as je}from"./fontawesome-icon-pw7S_Spe.js";import{u as bn}from"./index-YuXFfT5-.js";import{r as o}from"./index-4g5l5LRQ.js";import{u as fn,C as Cn}from"./index.esm-CyGGJs5T.js";import{c as kn}from"./components-o1u_9nNH.js";import{u as wn}from"./index-Su7Oe0q6.js";import{u as Tn,c as Vn,b as Mn}from"./index-n9gCozBW.js";import{c as xn,v as Pn,M as He,a0 as yn,a1 as Fn,a2 as Rn,u as z,a as q,g as Le,e as zn,o as Dn,w as ye,R as H,K as Fe,h as Re}from"./factory-1uJrB2de.js";import{u as In,f as qe,g as ze,F as ge}from"./form-control-H3Q401dh.js";import{r as Ke,v as Ue,a as De,p as En}from"./number-T9-jc1Pg.js";import{f as K}from"./forward-ref-A-8Arhkk.js";import{u as _n}from"./use-component-style-a9Y1koMB.js";import{o as On}from"./theme-provider-4KOeReOn.js";import{T as D}from"./text-XO0n_4gP.js";import{C as Bn}from"./center-_aUx3M16.js";import{B as Ie}from"./button-BwFPDuN6.js";import{V as nn}from"./stack-gftUt5we.js";import{T as $n}from"./tooltip-fPB4UI80.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-VHqa4iO4.js";import"./index-2fdIbPpW.js";import"./index-bZJ6VWkN.js";import"./mapValues-fvZQFbEN.js";import"./_basePickBy-VIqm4fI2.js";import"./isPlainObject-mmZlXdLr.js";import"./index-PPLHz8o0.js";import"./ui-provider-VNXlvV5z.js";import"./environment-provider-fkDixBz8.js";import"./motion-ukEXpwwk.js";import"./loading-provider-tfeo5hBk.js";import"./index-B4ddhKBr.js";import"./Combination-8oCz4vin.js";import"./loading-6RwEQblT.js";import"./index-F6j05pB5.js";import"./index-DKGSNMBl.js";import"./motion-rimQiqxs.js";import"./index-EargzzxG.js";import"./container-portal-e1Mvj3y3.js";import"./index-jmm5gWkb.js";import"./notice-mCuNJqL1.js";import"./alert-3duH9q4H.js";import"./close-button-rjaFJeax.js";import"./use-ripple-iEFkrfzn.js";import"./container-wTCqe5ma.js";import"./box-vGn7lDxy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-8uaio5n5.js";import"./index-6ZiV4iA-.js";import"./index-3HUYx4aZ.js";import"./slide-fade-PJ2GYRAm.js";import"./utils-llwn_R54.js";import"./scale-fade-68lmVLDZ.js";const An=({focusThumbOnChange:n=!0,...t})=>{n||(t.isReadOnly=!0);let{id:u,name:m,min:c=0,max:d=100,step:f=1,defaultValue:g,orientation:T="horizontal",isReversed:S,required:R,disabled:F,readOnly:I,onChange:be,...h}=In(t);if(d<c)throw new Error("Do not assign a number less than 'min' to 'max'");const fe=Le(h.onChangeStart),E=Le(h.onChangeEnd),[Ce,_]=wn({value:h.value,defaultValue:g??c+(d-c)/2,onChange:be}),[O,U]=o.useState(!1),[ke,W]=o.useState(!1),B=!(F||I),M=(d-c)/10,x=f||(d-c)/100,p=De(Ce,c,d),we=d-p+c,$=Ue(S?we:p,c,d),C=T==="vertical",w=Tn({min:c,max:d,step:f,value:p,isInteractive:B,focusThumbOnChange:n}),Te=o.useRef(null),_e=o.useRef(null),Ve=o.useRef(null),Me=o.useRef(null),X=Vn(Me);Mn(_e,{onSessionStart:r=>{const{isInteractive:s,value:i}=w.current;s&&(U(!0),Be(),Oe(r),fe(i))},onSessionEnd:()=>{const{isInteractive:r,value:s}=w.current;r&&(U(!1),E(s))},onMove:r=>{const{isInteractive:s}=w.current;s&&Oe(r)}});const an=o.useCallback(r=>{var Ae;if(!Ve.current)return;const{min:s,max:i,step:k}=w.current;Te.current="pointer";const{bottom:P,left:xe,height:pn,width:Sn}=Ve.current.getBoundingClientRect(),{clientX:gn,clientY:vn}=((Ae=r.touches)==null?void 0:Ae[0])??r;let Pe=(C?P-vn:gn-xe)/(C?pn:Sn);S&&(Pe=1-Pe);let j=En(Pe,s,i);return k&&(j=parseFloat(Ke(j,s,k))),j=De(j,s,i),j},[C,S,w]),Oe=r=>{const{value:s}=w.current,i=an(r);i!=null&&i!==s&&_(i)},Be=o.useCallback(()=>{const{focusThumbOnChange:r}=w.current;r&&setTimeout(()=>{var s;return(s=Me.current)==null?void 0:s.focus()})},[w]),V=o.useCallback(r=>{const{isInteractive:s,min:i,max:k}=w.current;s&&(r=parseFloat(Ke(r,i,x)),r=De(r,i,k),_(r))},[x,_,w]),A=o.useCallback((r=x)=>V(S?p-r:p+r),[V,S,x,p]),N=o.useCallback((r=x)=>V(S?p+r:p-r),[V,S,x,p]),on=o.useCallback(()=>V(g||0),[V,g]),ln=o.useCallback(r=>V(r),[V]),$e=o.useCallback(r=>{const{min:s,max:i}=w.current,P={ArrowRight:()=>A(),ArrowUp:()=>A(),ArrowLeft:()=>N(),ArrowDown:()=>N(),PageUp:()=>A(M),PageDown:()=>N(M),Home:()=>V(s),End:()=>V(i)}[r.key];P&&(r.preventDefault(),r.stopPropagation(),P(r),Te.current="keyboard")},[V,w,N,A,M]);zn(()=>{const{value:r}=w.current;Be(),Te.current==="keyboard"&&E(r)},[p,E]);const sn=o.useCallback((r={},s=null)=>{const{width:i,height:k}=X??{width:0,height:0},P={...r.style,position:"relative",userSelect:"none",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",outline:0,...C?{paddingLeft:i/2,paddingRight:i/2}:{paddingTop:k/2,paddingBottom:k/2}};return{...Dn(h,["aria-readonly","value","onChangeStart","onChangeEnd"]),...r,ref:ye(s,_e),tabIndex:-1,style:P}},[C,h,X]),un=o.useCallback((r={},s=null)=>({...H(h,qe),...r,id:u,ref:s,type:"hidden",name:m,value:p,required:R,disabled:F,readOnly:I}),[F,u,m,I,R,h,p]),cn=o.useCallback((r={},s=null)=>{const i={...r.style,position:"absolute",...C?{left:"50%",transform:"translateX(-50%)",height:"100%"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{...H(h,ze({omit:["aria-readonly"]})),...r,ref:ye(s,Ve),style:i}},[C,h]),dn=o.useCallback((r={},s=null)=>{const i=Math.abs(S?100-$:$),k={...r.style,position:"absolute",...C?{left:"50%",transform:"translateX(-50%)",height:`${i}%`,...S?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${i}%`,...S?{right:"0%"}:{left:"0%"}}};return{...H(h,ze({omit:["aria-readonly"]})),...r,ref:s,style:k}},[S,C,h,$]),mn=o.useCallback((r,s=null)=>{let i=Ue(r.value,c,d);i=S?100-i:i;const k={...r.style,position:"absolute",pointerEvents:"none",...C?{bottom:`${i}%`}:{left:`${i}%`}};return{...H(h,ze({omit:["aria-readonly"]})),...r,ref:s,"aria-hidden":!0,"data-invalid":Fe(r.value<c||d<r.value),"data-highlighted":Fe(r.value<=p),style:k}},[S,C,d,c,h,p]),hn=o.useCallback((r={},s=null)=>{const i=$,{width:k,height:P}=X??{width:0,height:0},xe={...r.style,position:"absolute",userSelect:"none",touchAction:"none",...C?{bottom:`calc(${i}% - ${P/2}px)`}:{left:`calc(${i}% - ${k/2}px)`}};return{"aria-label":"Slider thumb",...H(h,qe),...r,ref:ye(s,Me),tabIndex:B&&n?0:void 0,role:"slider","aria-valuemin":c,"aria-valuemax":d,"aria-valuenow":p,"data-active":Fe(O&&n),"aria-orientation":T,onKeyDown:Re(r.onKeyDown,$e),onFocus:Re(r.onFocus,h.onFocus,()=>W(!0)),onBlur:Re(r.onBlur,h.onBlur,()=>W(!1)),style:xe}},[c,d,p,n,O,B,C,$e,T,h,$,X]);return{value:p,isFocused:ke,isDragging:O,isVertical:C,stepUp:A,stepDown:N,reset:on,stepTo:ln,getContainerProps:sn,getInputProps:un,getTrackProps:cn,getFilledTrackProps:dn,getMarkProps:mn,getThumbProps:hn}},[Nn,ve]=xn({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),a=K((n,t)=>{const[u,m]=_n("Slider",n),{className:c,children:d,inputProps:f,trackProps:g,filledTrackProps:T,thumbProps:S,trackColor:R,filledTrackColor:F,trackSize:I,thumbColor:be,thumbSize:h,...fe}=On(m),{isVertical:E,getContainerProps:Ce,getInputProps:_,getTrackProps:O,getFilledTrackProps:U,getMarkProps:ke,getThumbProps:W}=An(fe),B={...u.container},M=Pn(d),[x]=He(M,L),[p]=He(M,y),we=yn(M,y),Ee=Fn(M)?d:Rn(M,L,y);return e(Nn,{value:{isVertical:E,getTrackProps:O,getFilledTrackProps:U,getMarkProps:ke,getThumbProps:W,trackProps:g,trackColor:R,trackSize:I,filledTrackProps:T,filledTrackColor:F,thumbProps:S,thumbColor:be,thumbSize:h,styles:u},children:l(z.div,{className:q("ui-slider",c),__css:B,...Ce(),children:[e(z.input,{..._(f,t)}),x??e(L,{}),Ee,p??(we?null:e(y,{}))]})})}),L=K(({className:n,children:t,filledTrackProps:u,...m},c)=>{const{styles:d,trackProps:f,trackColor:g,trackSize:T,isVertical:S,getTrackProps:R}=ve(),F={...d.track};return e(z.div,{className:q("ui-slider__track",n),__css:F,...R({...g?{bg:g}:{},...T?S?{w:T}:{h:T}:{},...f,...m},c),children:t??e(tn,{...u})})}),tn=K(({className:n,...t},u)=>{const{styles:m,filledTrackProps:c,filledTrackColor:d,getFilledTrackProps:f}=ve(),g={...m.filledTrack};return e(z.div,{className:q("ui-slider__track-filled",n),__css:g,...f({...d?{bg:d}:{},...c,...t},u)})}),v=K(({className:n,...t},u)=>{const{styles:m,getMarkProps:c}=ve(),d={display:"inline-flex",justifyContent:"center",alignItems:"center",...m.mark};return e(z.div,{className:q("ui-slider__mark",n),__css:d,...c(t,u)})}),y=K(({className:n,...t},u)=>{const{styles:m,thumbProps:c,thumbColor:d,thumbSize:f,getThumbProps:g}=ve(),T={...m.thumb};return e(z.div,{className:q("ui-slider__thumb",n),__css:T,...g({...d?{bg:d}:{},...f?{boxSize:f}:{},...c,...t},u)})}),Lt={title:"Components / Forms / Slider",component:a},Y=()=>e(a,{}),G=()=>e(a,{defaultValue:50}),J=()=>l(b,{children:[e(a,{size:"sm",defaultValue:25}),e(a,{size:"md",defaultValue:50}),e(a,{size:"lg",defaultValue:75})]}),Q=()=>e(b,{children:kn.map(n=>e(a,{colorScheme:n},n))}),Z=()=>e(a,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),ee=()=>l(b,{children:[e(a,{isReversed:!0}),e(a,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),re=()=>{const[n,t]=o.useState(50);return l(b,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,min:0,max:200,onChange:t})]})},ne=()=>{const[n,t]=o.useState(50);return l(b,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,step:10,onChange:t})]})},te=()=>{const[n,t]=o.useState(50);return l(b,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,step:10,focusThumbOnChange:!1}),l(Bn,{w:"full",gap:"md",children:[e(Ie,{isDisabled:n===0,onClick:()=>t(u=>u!==0?u-10:u),children:"-10"}),e(Ie,{isDisabled:n===100,colorScheme:"blue",onClick:()=>t(u=>u!==100?u+10:u),children:"+10"})]})]})},ae=()=>l(nn,{gap:"lg",children:[l(a,{size:"sm",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"md",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]}),l(a,{size:"lg",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),oe=()=>{const[n,t]=o.useState(50),[u,{on:m,off:c}]=bn(!1);return l(a,{value:n,onChange:t,mt:"10",onMouseEnter:m,onMouseLeave:c,children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),e($n,{placement:"top",label:`${n}%`,isOpen:u,children:e(y,{})})]})},le=()=>l(b,{children:[e(a,{isDisabled:!0}),e(ge,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),se=()=>l(b,{children:[e(a,{isReadOnly:!0}),e(ge,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e(a,{})})]}),ie=()=>{const[n,t]=o.useState(15);return l(b,{children:[e(a,{isInvalid:n<20,value:n,onChange:t}),e(ge,{isInvalid:n<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e(a,{value:n,onChange:t})})]})},ue=()=>l(b,{children:[e(a,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e(a,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),l(a,{children:[e(L,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e(y,{bg:"blue.700"})]}),l(a,{children:[e(L,{bg:"red.200",children:e(tn,{bg:"red.500"})}),e(y,{bg:"red.700"})]})]}),ce=()=>l(b,{children:[e(a,{thumbProps:{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})}}),e(a,{children:e(y,{color:"blue.500",boxSize:"6",children:e(Ne,{icon:je})})})]}),de=()=>{const[n,t]=o.useState(50);return e(b,{children:l(a,{value:n,onChange:t,mt:"10",children:[e(v,{value:25,w:"10",ml:"-5",children:"25%"}),e(v,{value:50,w:"10",ml:"-5",children:"50%"}),e(v,{value:75,w:"10",ml:"-5",children:"75%"}),l(v,{value:n,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[n,"%"]})]})})},me=()=>{const[n,t]=o.useState(50);return l(b,{children:[l(D,{children:["Value: ",n]}),e(a,{value:n,onChange:t})]})},he=()=>{const[n,t]=o.useState(50),[u,m]=o.useState(50);return l(b,{children:[l(D,{children:["Value: ",n,", Start Value: ",u]}),e(a,{value:n,onChange:t,onChangeStart:m})]})},pe=()=>{const[n,t]=o.useState(50),[u,m]=o.useState(50);return l(b,{children:[l(D,{children:["Value: ",n,", End Value: ",u]}),e(a,{value:n,onChange:t,onChangeEnd:m})]})},Se=()=>{var f;const n={slider:50},{control:t,handleSubmit:u,watch:m,formState:{errors:c}}=fn({defaultValues:n}),d=g=>console.log("submit:",g);return console.log("watch:",m()),l(nn,{as:"form",onSubmit:u(d),children:[e(ge,{isInvalid:!!c.slider,label:"Volume",errorMessage:(f=c.slider)==null?void 0:f.message,children:e(Cn,{name:"slider",control:t,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:g})=>e(a,{...g})})}),e(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var We,Xe,Ye;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(Ye=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ge,Je,Qe;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(Qe=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,er,rr;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(rr=(er=J.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var nr,tr,ar;Q.parameters={...Q.parameters,docs:{...(nr=Q.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(ar=(tr=Q.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var or,lr,sr;Z.parameters={...Z.parameters,docs:{...(or=Z.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(sr=(lr=Z.parameters)==null?void 0:lr.docs)==null?void 0:sr.source}}};var ir,ur,cr;ee.parameters={...ee.parameters,docs:{...(ir=ee.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(cr=(ur=ee.parameters)==null?void 0:ur.docs)==null?void 0:cr.source}}};var dr,mr,hr;re.parameters={...re.parameters,docs:{...(dr=re.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(hr=(mr=re.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var pr,Sr,gr;ne.parameters={...ne.parameters,docs:{...(pr=ne.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(gr=(Sr=ne.parameters)==null?void 0:Sr.docs)==null?void 0:gr.source}}};var vr,br,fr;te.parameters={...te.parameters,docs:{...(vr=te.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(fr=(br=te.parameters)==null?void 0:br.docs)==null?void 0:fr.source}}};var Cr,kr,wr;ae.parameters={...ae.parameters,docs:{...(Cr=ae.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(wr=(kr=ae.parameters)==null?void 0:kr.docs)==null?void 0:wr.source}}};var Tr,Vr,Mr;oe.parameters={...oe.parameters,docs:{...(Tr=oe.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(Mr=(Vr=oe.parameters)==null?void 0:Vr.docs)==null?void 0:Mr.source}}};var xr,Pr,yr;le.parameters={...le.parameters,docs:{...(xr=le.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(yr=(Pr=le.parameters)==null?void 0:Pr.docs)==null?void 0:yr.source}}};var Fr,Rr,zr;se.parameters={...se.parameters,docs:{...(Fr=se.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(zr=(Rr=se.parameters)==null?void 0:Rr.docs)==null?void 0:zr.source}}};var Dr,Ir,Er;ie.parameters={...ie.parameters,docs:{...(Dr=ie.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Er=(Ir=ie.parameters)==null?void 0:Ir.docs)==null?void 0:Er.source}}};var _r,Or,Br;ue.parameters={...ue.parameters,docs:{...(_r=ue.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
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
}`,...(Br=(Or=ue.parameters)==null?void 0:Or.docs)==null?void 0:Br.source}}};var $r,Ar,Nr;ce.parameters={...ce.parameters,docs:{...($r=ce.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(Nr=(Ar=ce.parameters)==null?void 0:Ar.docs)==null?void 0:Nr.source}}};var jr,Hr,Lr;de.parameters={...de.parameters,docs:{...(jr=de.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(Lr=(Hr=de.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var qr,Kr,Ur;me.parameters={...me.parameters,docs:{...(qr=me.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(Ur=(Kr=me.parameters)==null?void 0:Kr.docs)==null?void 0:Ur.source}}};var Wr,Xr,Yr;he.parameters={...he.parameters,docs:{...(Wr=he.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Yr=(Xr=he.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Gr,Jr,Qr;pe.parameters={...pe.parameters,docs:{...(Gr=pe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Qr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Zr,en,rn;Se.parameters={...Se.parameters,docs:{...(Zr=Se.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(rn=(en=Se.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};const qt=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{qt as __namedExportsOrder,Y as basic,ue as customColor,me as customControl,de as customMark,ce as customThumb,Lt as default,le as isDisabled,ie as isInvalid,se as isReadonly,pe as onChangeEnd,he as onChangeStart,Se as reactHookForm,Q as withColorScheme,G as withDefaultValue,te as withFocusThumbOnChange,ae as withMark,re as withMinMax,Z as withOrientation,ee as withReversed,J as withSize,ne as withStep,oe as withTooltip};
