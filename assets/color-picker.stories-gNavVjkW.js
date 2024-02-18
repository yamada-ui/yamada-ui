import{j as e,a as m,F as v}from"./jsx-runtime-TtYKBvr-.js";import{I as Ko,f as To}from"./fontawesome-icon-i7t9b-NW.js";import{r as a}from"./index-IybTgENJ.js";import{u as Ao,C as Go}from"./index.esm-xnaDCuzx.js";import{u as Uo,C as Wo,E as Yo}from"./color-selector-km1c5np8.js";import{C as Qo}from"./color-swatch-jZ07Y2JY.js";import{u as Zo}from"./index-EQvUcbnd.js";import{u as qo}from"./index-BBG7Pe00.js";import{u as Jo,g as Xo,F as Be}from"./form-control-ZJLHMW15.js";import{p as $o,P as ea,a as ra,b as oa}from"./popover-content-r-xI2ApE.js";import{c as aa,Q as ta,Z as sa,_ as ca,o as Bo,a3 as la,R as na,e as ia,w as Ye,h as y,K as Qe,u as ze,a as Ie,v as ua,f as pa}from"./factory-ilkGXtBr.js";import{d as da,c as Ze,o as ma}from"./theme-provider-xH9zRqO9.js";import{P as fa}from"./container-portal-DLVNRIJZ.js";import{f as _e}from"./forward-ref-6T0UNPU-.js";import{u as ha}from"./use-component-style-Ji6G5y4B.js";import{B as Re}from"./button-IfON6BpW.js";import{V as Ca}from"./stack-0Rn_od0s.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-tcOP_kzz.js";import"./index-U5zsdkbG.js";import"./icon-button-Tmc0BC1V.js";import"./alpha-slider-Y8d8NcHZ.js";import"./use-color-slider-bJ9Rwg6F.js";import"./index-5fNsV3Iv.js";import"./event-ccAYLpd0.js";import"./number-RReIgE2V.js";import"./hue-slider-oIi5kbLL.js";import"./input--uIOUTpt.js";import"./saturation-slider-rDYPQ5D2.js";import"./index-M17jfSzr.js";import"./index-gWY0u-sb.js";import"./index-lit7Cjpy.js";import"./index-i7ZCpLvT.js";import"./index-6CU19byK.js";import"./index-OQT3J4hP.js";import"./index-quyfJ-i_.js";import"./index-Kgfi2DNL.js";import"./motion-RGBG165B.js";import"./slide-fade-Wiy06Yyq.js";import"./index-dKw0visz.js";import"./utils-6tmQ5Ggc.js";import"./scale-fade-RLDv8pHw.js";import"./close-button-XEt9MLWV.js";import"./use-ripple-jT9FMMYK.js";import"./motion-HpRHdgWC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-xIHD0DlW.js";import"./loading-lL0YWT3j.js";const[ba,Ve]=aa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Sa=({value:t,defaultValue:i,fallbackValue:c,defaultColor:l,onChange:p,onChangeStart:d,onChangeEnd:h,onSwatchClick:C,formatInput:f=b=>b,closeOnBlur:z=!0,closeOnEsc:N=!0,placement:R="bottom-start",duration:M=.2,defaultIsOpen:xe,onOpen:I,onClose:_,allowInput:x=!0,closeOnSelectSwatch:j,format:D,swatchesLabel:H,swatches:L,swatchesColumns:K,withPicker:T,withChannel:A,withResult:G=!1,withColorSelectorEyeDropper:U=!1,colorSelectorVariant:W,colorSelectorSize:B,colorSelectorColorScheme:Y,...u})=>{u=Jo(u);const b=ta(u,Xo({omit:["aria-readonly"]})),{disabled:k,readOnly:g}=b,[Q,Z]=sa(Bo(u,[...$o]),[...ca,"aria-readonly"]),V=a.useRef(null),Vo=a.useRef(null),{supported:Oo,onOpen:Oe}=Uo(),[w,F]=Zo({value:t,defaultValue:i,onChange:p}),O=a.useRef(D??da(w??l??"")),Ee=a.useRef(!1),[Ne,E]=a.useState(w??""),[n,Me]=a.useState(xe??!1),je=B==="full",S=a.useCallback(()=>{k||g||(Me(!0),I==null||I())},[I,k,g]),P=a.useCallback(()=>{if(!n)return;const o=Ze(w,c)(O.current);F(s=>!o||s===o?s:o),E(f(o??"")),Me(!1),_==null||_()},[O,n,F,_,w,f,E,c]),He=a.useCallback(()=>{n||S()},[n,S]),Le=a.useCallback(()=>{Ee.current=!0,!n&&S()},[n,S]),Ke=a.useCallback(()=>{Ee.current=!1},[]),Te=a.useCallback(o=>{const s=la(o);na(V.current,s)||z&&n&&P()},[z,n,P]),Ae=a.useCallback(o=>{if(o.key===" "&&(o.key=o.code),k||g)return;const We={Space:n?void 0:S,Enter:n?void 0:S,Escape:N?P:void 0}[o.key];We&&(o.preventDefault(),o.stopPropagation(),We())},[k,g,n,S,N,P]),Ge=a.useCallback(o=>{const s=o.target.value;E(f(s)),F(s)},[E,f,F]),q=a.useCallback(o=>{F(o),setTimeout(()=>{Ee.current||E(f(o))})},[F,f]),Ue=a.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:s}=await Oe()??{};if(!s)return;q(s)}catch{}},[Oe,q]);qo({ref:V,handler:P,enabled:z}),ia(()=>{if(!D)return;O.current=D;const o=Ze(w,c)(D);o&&(E(f(o)),F(o))},[D,c]);const No=a.useCallback(o=>({matchWidth:je,...u,...o,isOpen:n,onOpen:S,onClose:P,placement:R,duration:M,trigger:"never",closeOnButton:!1}),[je,M,P,S,R,u,n]),Mo=a.useCallback((o={},s=null)=>({ref:Ye(V,s),...Q,...o,...b,onClick:y(o.onClick,u.onClick,He),onBlur:y(o.onBlur,u.onBlur,Te)}),[Q,b,Te,He,u]),jo=a.useCallback((o={},s=null)=>({ref:Ye(Vo,s),tabIndex:x?0:-1,...Z,...o,style:{...o.style,...x?{}:{pointerEvents:"none"}},value:Ne,"data-active":Qe(n),"aria-expanded":Qe(n),onFocus:y(o.onFocus,u.onFocus,Le),onKeyDown:y(o.onKeyDown,u.onKeyDown,Ae),onChange:y(o.onChange,Ge),onBlur:y(o.onFocus,Ke)}),[x,Z,Ne,n,u,Le,Ae,Ge,Ke]),Ho=a.useCallback((o={},s=null)=>({disabled:k,"aria-label":"Pick a color",...o,ref:s,style:{...o.style,pointerEvents:g?"none":void 0},onClick:y(o.onClick,Ue)}),[k,Ue,g]),Lo=a.useCallback(o=>({...b,...o,value:w,defaultValue:l,fallbackValue:c,onChange:q,onChangeStart:d,onChangeEnd:h,onSwatchClick:y(C,j?P:void 0),format:O.current,withPicker:T,withChannel:A,withResult:G,withEyeDropper:U,swatchesLabel:H,swatches:L,swatchesColumns:K,variant:W,size:B,colorScheme:Y}),[b,w,c,l,q,d,h,C,P,j,O,T,A,G,U,H,L,K,Y,B,W]);return{value:w,eyeDropperSupported:Oo,allowInput:x,getPopoverProps:No,getContainerProps:Mo,getFieldProps:jo,getSelectorProps:Lo,getEyeDropperProps:Ho}},r=_e(({withSwatch:t=!0,...i},c)=>{const[l,p]=ha("ColorPicker",{withSwatch:t,...i});let{className:d,children:h,withEyeDropper:C=!0,color:f,h:z,height:N,minH:R,minHeight:M,containerProps:xe,inputProps:I,swatchProps:_,eyeDropperProps:x,saturationSliderRef:j,saturationSliderProps:D,swatchesProps:H,hueSliderRef:L,hueSliderProps:K,alphaSliderRef:T,alphaSliderProps:A,channelsProps:G,channelProps:U,portalProps:W={isDisabled:!0},...B}=ma(Bo(p,["withSwatch"]));const{allowInput:Y,getPopoverProps:u,getContainerProps:b,getFieldProps:k,getSelectorProps:g,getEyeDropperProps:Q,...Z}=Sa(B);z??(z=N),R??(R=M);const V={w:"100%",h:"fit-content",color:f,...l.container};return e(ba,{value:{styles:l,...Z},children:e(ea,{...u(),children:m(ze.div,{className:Ie("ui-color-picker",d),__css:V,...b(xe),children:[m(ze.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:Y?void 0:"pointer",...l.inner},children:[t?e(ka,{..._}):null,e(ra,{children:e(Pa,{h:z,minH:R,...k(I,c)})}),C?e(ga,{...Q(x)}):null]}),e(fa,{...W,children:e(oa,{className:"ui-color-picker__popover",__css:{...l.list},children:e(Wo,{className:"ui-color-picker__picker",...g({saturationSliderRef:j,saturationSliderProps:D,swatchesProps:H,hueSliderRef:L,hueSliderProps:K,alphaSliderRef:T,alphaSliderProps:A,channelsProps:G,channelProps:U}),children:h})})})]})})})}),Pa=_e(({className:t,h:i,minH:c,...l},p)=>{const{styles:d}=Ve(),h={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...d.field};return e(ze.input,{ref:p,className:Ie("ui-color-picker__field",t),__css:h,...l})}),ka=_e(({className:t,...i},c)=>{const{value:l,styles:p}=Ve(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...p.swatch};return e(Qo,{ref:c,className:Ie("ui-color-picker__swatch",t),__css:d,color:l,isRounded:!0,...i})}),ga=_e(({className:t,children:i,...c},l)=>{const{styles:p}=Ve(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...p.eyeDropper},C=ua(i).map(f=>a.cloneElement(f,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(ze.button,{ref:l,className:Ie("ui-color-picker__eye-dropper",t),__css:d,...c,children:pa(i)?C:e(Yo,{className:"ui-color-picker__eye-dropper__icon"})})}),bt={title:"Components / Forms / ColorPicker",component:r},J=()=>e(r,{placeholder:"#4387f4"}),X=()=>e(r,{defaultValue:"#4387f4ff"}),$=()=>e(r,{fallbackValue:"#000000"}),ee=()=>e(r,{defaultColor:"#4387f4ff"}),re=()=>m(v,{children:[e(r,{placeholder:"#4387f4",children:e(Re,{children:"Submit"})}),e(r,{placeholder:"#4387f4",children:({value:t})=>m(Re,{children:["Submit ",t]})})]}),oe=()=>m(v,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),ae=()=>m(v,{children:[e(r,{placeholder:"small size",colorSelectorSize:"sm"}),e(r,{placeholder:"medium size",colorSelectorSize:"md"}),e(r,{placeholder:"large size",colorSelectorSize:"lg"}),e(r,{placeholder:"full size",colorSelectorSize:"full"})]}),te=()=>m(v,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),se=()=>e(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),ce=()=>e(r,{placeholder:"#4387F4FF",formatInput:t=>t.toUpperCase()}),le=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ne=()=>e(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ie=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ue=()=>e(r,{placeholder:"#4387f4ff",allowInput:!1}),pe=()=>e(r,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),de=()=>e(r,{withChannel:!1}),me=()=>e(r,{withSwatch:!1}),fe=()=>e(r,{withEyeDropper:!1}),he=()=>e(r,{withColorSelectorEyeDropper:!0}),Ce=()=>e(r,{withResult:!0}),be=()=>m(v,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),Se=()=>e(r,{placeholder:"#4387f4",placement:"bottom-end"}),Pe=()=>e(r,{placeholder:"#4387f4",offset:[16,16]}),ke=()=>e(r,{placeholder:"#4387f4",gutter:32}),ge=()=>e(r,{placeholder:"#4387f4",duration:.4}),we=()=>m(v,{children:[e(r,{placeholder:"#4387f4",isDisabled:!0}),e(Be,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{placeholder:"#4387f4"})})]}),ye=()=>m(v,{children:[e(r,{placeholder:"#4387f4",isReadOnly:!0}),e(Be,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{placeholder:"#4387f4"})})]}),ve=()=>m(v,{children:[e(r,{eyeDropperProps:{color:"primary"}}),e(r,{eyeDropperProps:{children:e(Ko,{icon:To})}})]}),De=()=>{const[t,i]=a.useState("#4387f4ff");return e(r,{value:t,onChange:i})},Fe=()=>{var h;const t={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:l,formState:{errors:p}}=Ao({defaultValues:t}),d=C=>console.log("submit:",C);return console.log("watch:",l()),m(Ca,{as:"form",onSubmit:c(d),children:[e(Be,{isInvalid:!!p.colorInput,label:"Pick color",errorMessage:(h=p.colorInput)==null?void 0:h.message,children:e(Go,{name:"colorInput",control:i,render:({field:C})=>e(r,{...C})})}),e(Re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var qe,Je,Xe;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(Xe=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var $e,er,rr;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...(rr=(er=X.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,ar,tr;$.parameters={...$.parameters,docs:{...(or=$.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(tr=(ar=$.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,cr,lr;ee.parameters={...ee.parameters,docs:{...(sr=ee.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(lr=(cr=ee.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var nr,ir,ur;re.parameters={...re.parameters,docs:{...(nr=re.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4">
        <Button>Submit</Button>
      </ColorPicker>

      <ColorPicker placeholder="#4387f4">
        {({
        value
      }) => <Button>Submit {value}</Button>}
      </ColorPicker>
    </>;
}`,...(ur=(ir=re.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var pr,dr,mr;oe.parameters={...oe.parameters,docs:{...(pr=oe.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(mr=(dr=oe.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var fr,hr,Cr;ae.parameters={...ae.parameters,docs:{...(fr=ae.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Cr=(hr=ae.parameters)==null?void 0:hr.docs)==null?void 0:Cr.source}}};var br,Sr,Pr;te.parameters={...te.parameters,docs:{...(br=te.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Pr=(Sr=te.parameters)==null?void 0:Sr.docs)==null?void 0:Pr.source}}};var kr,gr,wr;se.parameters={...se.parameters,docs:{...(kr=se.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(wr=(gr=se.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var yr,vr,Dr;ce.parameters={...ce.parameters,docs:{...(yr=ce.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Dr=(vr=ce.parameters)==null?void 0:vr.docs)==null?void 0:Dr.source}}};var Fr,zr,Ir;le.parameters={...le.parameters,docs:{...(Fr=le.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Ir=(zr=le.parameters)==null?void 0:zr.docs)==null?void 0:Ir.source}}};var _r,xr,Er;ne.parameters={...ne.parameters,docs:{...(_r=ne.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Er=(xr=ne.parameters)==null?void 0:xr.docs)==null?void 0:Er.source}}};var Rr,Br,Vr;ie.parameters={...ie.parameters,docs:{...(Rr=ie.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Vr=(Br=ie.parameters)==null?void 0:Br.docs)==null?void 0:Vr.source}}};var Or,Nr,Mr;ue.parameters={...ue.parameters,docs:{...(Or=ue.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Mr=(Nr=ue.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var jr,Hr,Lr;pe.parameters={...pe.parameters,docs:{...(jr=pe.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Lr=(Hr=pe.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var Kr,Tr,Ar;de.parameters={...de.parameters,docs:{...(Kr=de.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(Ar=(Tr=de.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Gr,Ur,Wr;me.parameters={...me.parameters,docs:{...(Gr=me.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Wr=(Ur=me.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Qr,Zr;fe.parameters={...fe.parameters,docs:{...(Yr=fe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Zr=(Qr=fe.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var qr,Jr,Xr;he.parameters={...he.parameters,docs:{...(qr=he.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...(Xr=(Jr=he.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var $r,eo,ro;Ce.parameters={...Ce.parameters,docs:{...($r=Ce.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(ro=(eo=Ce.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,ao,to;be.parameters={...be.parameters,docs:{...(oo=be.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(to=(ao=be.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var so,co,lo;Se.parameters={...Se.parameters,docs:{...(so=Se.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(lo=(co=Se.parameters)==null?void 0:co.docs)==null?void 0:lo.source}}};var no,io,uo;Pe.parameters={...Pe.parameters,docs:{...(no=Pe.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(uo=(io=Pe.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var po,mo,fo;ke.parameters={...ke.parameters,docs:{...(po=ke.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(fo=(mo=ke.parameters)==null?void 0:mo.docs)==null?void 0:fo.source}}};var ho,Co,bo;ge.parameters={...ge.parameters,docs:{...(ho=ge.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(bo=(Co=ge.parameters)==null?void 0:Co.docs)==null?void 0:bo.source}}};var So,Po,ko;we.parameters={...we.parameters,docs:{...(So=we.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(ko=(Po=we.parameters)==null?void 0:Po.docs)==null?void 0:ko.source}}};var go,wo,yo;ye.parameters={...ye.parameters,docs:{...(go=ye.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(yo=(wo=ye.parameters)==null?void 0:wo.docs)==null?void 0:yo.source}}};var vo,Do,Fo;ve.parameters={...ve.parameters,docs:{...(vo=ve.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(Fo=(Do=ve.parameters)==null?void 0:Do.docs)==null?void 0:Fo.source}}};var zo,Io,_o;De.parameters={...De.parameters,docs:{...(zo=De.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(_o=(Io=De.parameters)==null?void 0:Io.docs)==null?void 0:_o.source}}};var xo,Eo,Ro;Fe.parameters={...Fe.parameters,docs:{...(xo=Fe.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  type Data = {
    colorInput: string;
  };
  const defaultValues: Data = {
    colorInput: "#4387f4ff"
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
      <FormControl isInvalid={!!errors.colorInput} label="Pick color" errorMessage={errors.colorInput?.message}>
        <Controller name="colorInput" control={control} render={({
        field
      }) => <ColorPicker {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ro=(Eo=Fe.parameters)==null?void 0:Eo.docs)==null?void 0:Ro.source}}};const St=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{St as __namedExportsOrder,J as basic,De as customControl,ve as customEyeDropperIcon,bt as default,ue as disabledAllowInput,de as disabledChannel,fe as disabledEyeDropper,pe as disabledPicker,me as disabledSwatch,he as enabledColorPickerEyeDropper,Ce as enabledResult,we as isDisabled,ye as isReadonly,Fe as reactHookForm,be as withBorderColor,re as withChildren,ie as withCloseOnSelectSwatch,ae as withColorSelectorSize,ee as withDefaultColor,X as withDefaultValue,ge as withDuration,$ as withFallbackValue,se as withFormat,ce as withFormatInput,ke as withGutter,Pe as withOffset,Se as withPlacement,oe as withSize,le as withSwatches,ne as withSwatchesColumns,te as withVariant};
