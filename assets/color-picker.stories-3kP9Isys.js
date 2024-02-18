import{j as e,a as C,F}from"./jsx-runtime-TtYKBvr-.js";import{I as No,f as Mo}from"./fontawesome-icon-i7t9b-NW.js";import{r as a}from"./index-IybTgENJ.js";import{u as jo,C as Ho}from"./index.esm-xnaDCuzx.js";import{u as Lo,C as Ko,E as To}from"./color-selector-lSDvHyZ7.js";import{C as Ao}from"./color-swatch-jZ07Y2JY.js";import{u as Go}from"./index-EQvUcbnd.js";import{u as Uo}from"./index-BBG7Pe00.js";import{u as Wo,g as Yo,F as Ee}from"./form-control-ZJLHMW15.js";import{p as Qo,P as Zo,a as qo,b as Jo}from"./popover-content-r-xI2ApE.js";import{c as Xo,Q as $o,Z as ea,_ as ra,o as Io,a3 as oa,R as aa,e as sa,w as Ue,h as y,K as We,u as De,a as Fe,v as ta,f as ca}from"./factory-ilkGXtBr.js";import{d as la,c as Ye,o as na}from"./theme-provider-xH9zRqO9.js";import{P as ia}from"./container-portal-DLVNRIJZ.js";import{f as ze}from"./forward-ref-6T0UNPU-.js";import{u as ua}from"./use-component-style-Ji6G5y4B.js";import{V as pa}from"./stack-0Rn_od0s.js";import{B as da}from"./button-IfON6BpW.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-tcOP_kzz.js";import"./index-U5zsdkbG.js";import"./icon-button-Tmc0BC1V.js";import"./alpha-slider-Y8d8NcHZ.js";import"./use-color-slider-bJ9Rwg6F.js";import"./index-5fNsV3Iv.js";import"./event-ccAYLpd0.js";import"./number-RReIgE2V.js";import"./hue-slider-oIi5kbLL.js";import"./input--uIOUTpt.js";import"./saturation-slider-rDYPQ5D2.js";import"./index-M17jfSzr.js";import"./index-gWY0u-sb.js";import"./index-lit7Cjpy.js";import"./index-i7ZCpLvT.js";import"./index-6CU19byK.js";import"./index-OQT3J4hP.js";import"./index-quyfJ-i_.js";import"./index-Kgfi2DNL.js";import"./motion-RGBG165B.js";import"./slide-fade-Wiy06Yyq.js";import"./index-dKw0visz.js";import"./utils-6tmQ5Ggc.js";import"./scale-fade-RLDv8pHw.js";import"./close-button-XEt9MLWV.js";import"./use-ripple-jT9FMMYK.js";import"./motion-HpRHdgWC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-xIHD0DlW.js";import"./loading-lL0YWT3j.js";const[ma,Re]=Xo({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),fa=({value:t,defaultValue:i,fallbackValue:c,defaultColor:l,onChange:p,onChangeStart:d,onChangeEnd:f,onSwatchClick:h,formatInput:m=b=>b,closeOnBlur:E=!0,closeOnEsc:R=!0,placement:O="bottom-start",duration:N=.2,defaultIsOpen:Ie,onOpen:z,onClose:I,allowInput:_=!0,closeOnSelectSwatch:M,format:v,swatchesLabel:j,swatches:H,swatchesColumns:L,withPicker:K,withChannel:T,withResult:A=!1,withColorSelectorEyeDropper:G=!1,colorSelectorVariant:U,colorSelectorSize:V,colorSelectorColorScheme:W,...u})=>{u=Wo(u);const b=$o(u,Yo({omit:["aria-readonly"]})),{disabled:k,readOnly:g}=b,[Y,Q]=ea(Io(u,[...Qo]),[...ra,"aria-readonly"]),_e=a.useRef(null),_o=a.useRef(null),{supported:xo,onOpen:Ve}=Lo(),[w,D]=Go({value:t,defaultValue:i,onChange:p}),B=a.useRef(v??la(w??l??"")),xe=a.useRef(!1),[Be,x]=a.useState(w??""),[n,Oe]=a.useState(Ie??!1),Ne=V==="full",S=a.useCallback(()=>{k||g||(Oe(!0),z==null||z())},[z,k,g]),P=a.useCallback(()=>{if(!n)return;const r=Ye(w,c)(B.current);D(s=>!r||s===r?s:r),x(m(r??"")),Oe(!1),I==null||I()},[B,n,D,I,w,m,x,c]),Me=a.useCallback(()=>{n||S()},[n,S]),je=a.useCallback(()=>{xe.current=!0,!n&&S()},[n,S]),He=a.useCallback(()=>{xe.current=!1},[]),Le=a.useCallback(r=>{const s=oa(r);aa(_e.current,s)||E&&n&&P()},[E,n,P]),Ke=a.useCallback(r=>{if(r.key===" "&&(r.key=r.code),k||g)return;const Ge={Space:n?void 0:S,Enter:n?void 0:S,Escape:R?P:void 0}[r.key];Ge&&(r.preventDefault(),r.stopPropagation(),Ge())},[k,g,n,S,R,P]),Te=a.useCallback(r=>{const s=r.target.value;x(m(s)),D(s)},[x,m,D]),Z=a.useCallback(r=>{D(r),setTimeout(()=>{xe.current||x(m(r))})},[D,m]),Ae=a.useCallback(async r=>{r.preventDefault(),r.stopPropagation();try{const{sRGBHex:s}=await Ve()??{};if(!s)return;Z(s)}catch{}},[Ve,Z]);Uo({ref:_e,handler:P,enabled:E}),sa(()=>{if(!v)return;B.current=v;const r=Ye(w,c)(v);r&&(x(m(r)),D(r))},[v,c]);const Eo=a.useCallback(r=>({matchWidth:Ne,...u,...r,isOpen:n,onOpen:S,onClose:P,placement:O,duration:N,trigger:"never",closeOnButton:!1}),[Ne,N,P,S,O,u,n]),Ro=a.useCallback((r={},s=null)=>({ref:Ue(_e,s),...Y,...r,...b,onClick:y(r.onClick,u.onClick,Me),onBlur:y(r.onBlur,u.onBlur,Le)}),[Y,b,Le,Me,u]),Vo=a.useCallback((r={},s=null)=>({ref:Ue(_o,s),tabIndex:_?0:-1,...Q,...r,style:{...r.style,..._?{}:{pointerEvents:"none"}},value:Be,"data-active":We(n),"aria-expanded":We(n),onFocus:y(r.onFocus,u.onFocus,je),onKeyDown:y(r.onKeyDown,u.onKeyDown,Ke),onChange:y(r.onChange,Te),onBlur:y(r.onFocus,He)}),[_,Q,Be,n,u,je,Ke,Te,He]),Bo=a.useCallback((r={},s=null)=>({disabled:k,"aria-label":"Pick a color",...r,ref:s,style:{...r.style,pointerEvents:g?"none":void 0},onClick:y(r.onClick,Ae)}),[k,Ae,g]),Oo=a.useCallback(r=>({...b,...r,value:w,defaultValue:l,fallbackValue:c,onChange:Z,onChangeStart:d,onChangeEnd:f,onSwatchClick:y(h,M?P:void 0),format:B.current,withPicker:K,withChannel:T,withResult:A,withEyeDropper:G,swatchesLabel:j,swatches:H,swatchesColumns:L,variant:U,size:V,colorScheme:W}),[b,w,c,l,Z,d,f,h,P,M,B,K,T,A,G,j,H,L,W,V,U]);return{value:w,eyeDropperSupported:xo,allowInput:_,getPopoverProps:Eo,getContainerProps:Ro,getFieldProps:Vo,getSelectorProps:Oo,getEyeDropperProps:Bo}},o=ze(({withSwatch:t=!0,...i},c)=>{const[l,p]=ua("ColorPicker",{withSwatch:t,...i});let{className:d,withEyeDropper:f=!0,color:h,h:m,height:E,minH:R,minHeight:O,containerProps:N,inputProps:Ie,swatchProps:z,eyeDropperProps:I,saturationSliderRef:_,saturationSliderProps:M,swatchesProps:v,hueSliderRef:j,hueSliderProps:H,alphaSliderRef:L,alphaSliderProps:K,channelsProps:T,channelProps:A,portalProps:G={isDisabled:!0},...U}=na(Io(p,["withSwatch"]));const{allowInput:V,getPopoverProps:W,getContainerProps:u,getFieldProps:b,getSelectorProps:k,getEyeDropperProps:g,...Y}=fa(U);m??(m=E),R??(R=O);const Q={w:"100%",h:"fit-content",color:h,...l.container};return e(ma,{value:{styles:l,...Y},children:e(Zo,{...W(),children:C(De.div,{className:Fe("ui-color-picker",d),__css:Q,...u(N),children:[C(De.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:V?void 0:"pointer",...l.inner},children:[t?e(Ca,{...z}):null,e(qo,{children:e(ha,{h:m,minH:R,...b(Ie,c)})}),f?e(ba,{...g(I)}):null]}),e(ia,{...G,children:e(Jo,{className:"ui-color-picker__popover",__css:{...l.list},children:e(Ko,{className:"ui-color-picker__picker",...k({saturationSliderRef:_,saturationSliderProps:M,swatchesProps:v,hueSliderRef:j,hueSliderProps:H,alphaSliderRef:L,alphaSliderProps:K,channelsProps:T,channelProps:A})})})})]})})})}),ha=ze(({className:t,h:i,minH:c,...l},p)=>{const{styles:d}=Re(),f={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...d.field};return e(De.input,{ref:p,className:Fe("ui-color-picker__field",t),__css:f,...l})}),Ca=ze(({className:t,...i},c)=>{const{value:l,styles:p}=Re(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...p.swatch};return e(Ao,{ref:c,className:Fe("ui-color-picker__swatch",t),__css:d,color:l,isRounded:!0,...i})}),ba=ze(({className:t,children:i,...c},l)=>{const{styles:p}=Re(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...p.eyeDropper},h=ta(i).map(m=>a.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(De.button,{ref:l,className:Fe("ui-color-picker__eye-dropper",t),__css:d,...c,children:ca(i)?h:e(To,{className:"ui-color-picker__eye-dropper__icon"})})}),ms={title:"Components / Forms / ColorPicker",component:o},q=()=>e(o,{placeholder:"#4387f4"}),J=()=>e(o,{defaultValue:"#4387f4ff"}),X=()=>e(o,{fallbackValue:"#000000"}),$=()=>e(o,{defaultColor:"#4387f4ff"}),ee=()=>C(F,{children:[e(o,{placeholder:"extra small size",size:"xs"}),e(o,{placeholder:"small size",size:"sm"}),e(o,{placeholder:"medium size",size:"md"}),e(o,{placeholder:"large size",size:"lg"})]}),re=()=>C(F,{children:[e(o,{placeholder:"small size",colorSelectorSize:"sm"}),e(o,{placeholder:"medium size",colorSelectorSize:"md"}),e(o,{placeholder:"large size",colorSelectorSize:"lg"}),e(o,{placeholder:"full size",colorSelectorSize:"full"})]}),oe=()=>C(F,{children:[e(o,{variant:"outline",placeholder:"outline"}),e(o,{variant:"filled",placeholder:"filled"}),e(o,{variant:"flushed",placeholder:"flushed"}),e(o,{variant:"unstyled",placeholder:"unstyled"})]}),ae=()=>e(o,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e(o,{placeholder:"#4387F4FF",formatInput:t=>t.toUpperCase()}),te=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ce=()=>e(o,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),le=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ne=()=>e(o,{placeholder:"#4387f4ff",allowInput:!1}),ie=()=>e(o,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ue=()=>e(o,{withChannel:!1}),pe=()=>e(o,{withSwatch:!1}),de=()=>e(o,{withEyeDropper:!1}),me=()=>e(o,{withColorSelectorEyeDropper:!0}),fe=()=>e(o,{withResult:!0}),he=()=>C(F,{children:[e(o,{placeholder:"default border color"}),e(o,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),Ce=()=>e(o,{placeholder:"#4387f4",placement:"bottom-end"}),be=()=>e(o,{placeholder:"#4387f4",offset:[16,16]}),Se=()=>e(o,{placeholder:"#4387f4",gutter:32}),Pe=()=>e(o,{placeholder:"#4387f4",duration:.4}),ke=()=>C(F,{children:[e(o,{placeholder:"#4387f4",isDisabled:!0}),e(Ee,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),ge=()=>C(F,{children:[e(o,{placeholder:"#4387f4",isReadOnly:!0}),e(Ee,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),we=()=>C(F,{children:[e(o,{eyeDropperProps:{color:"primary"}}),e(o,{eyeDropperProps:{children:e(No,{icon:Mo})}})]}),ye=()=>{const[t,i]=a.useState("#4387f4ff");return e(o,{value:t,onChange:i})},ve=()=>{var f;const t={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:l,formState:{errors:p}}=jo({defaultValues:t}),d=h=>console.log("submit:",h);return console.log("watch:",l()),C(pa,{as:"form",onSubmit:c(d),children:[e(Ee,{isInvalid:!!p.colorInput,label:"Pick color",errorMessage:(f=p.colorInput)==null?void 0:f.message,children:e(Ho,{name:"colorInput",control:i,render:({field:h})=>e(o,{...h})})}),e(da,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Qe,Ze,qe;q.parameters={...q.parameters,docs:{...(Qe=q.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(qe=(Ze=q.parameters)==null?void 0:Ze.docs)==null?void 0:qe.source}}};var Je,Xe,$e;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...($e=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var er,rr,or;X.parameters={...X.parameters,docs:{...(er=X.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(or=(rr=X.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var ar,sr,tr;$.parameters={...$.parameters,docs:{...(ar=$.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(tr=(sr=$.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var cr,lr,nr;ee.parameters={...ee.parameters,docs:{...(cr=ee.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(nr=(lr=ee.parameters)==null?void 0:lr.docs)==null?void 0:nr.source}}};var ir,ur,pr;re.parameters={...re.parameters,docs:{...(ir=re.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(pr=(ur=re.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var dr,mr,fr;oe.parameters={...oe.parameters,docs:{...(dr=oe.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(fr=(mr=oe.parameters)==null?void 0:mr.docs)==null?void 0:fr.source}}};var hr,Cr,br;ae.parameters={...ae.parameters,docs:{...(hr=ae.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(br=(Cr=ae.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var Sr,Pr,kr;se.parameters={...se.parameters,docs:{...(Sr=se.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(kr=(Pr=se.parameters)==null?void 0:Pr.docs)==null?void 0:kr.source}}};var gr,wr,yr;te.parameters={...te.parameters,docs:{...(gr=te.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(yr=(wr=te.parameters)==null?void 0:wr.docs)==null?void 0:yr.source}}};var vr,Dr,Fr;ce.parameters={...ce.parameters,docs:{...(vr=ce.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Fr=(Dr=ce.parameters)==null?void 0:Dr.docs)==null?void 0:Fr.source}}};var zr,Ir,_r;le.parameters={...le.parameters,docs:{...(zr=le.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(_r=(Ir=le.parameters)==null?void 0:Ir.docs)==null?void 0:_r.source}}};var xr,Er,Rr;ne.parameters={...ne.parameters,docs:{...(xr=ne.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Rr=(Er=ne.parameters)==null?void 0:Er.docs)==null?void 0:Rr.source}}};var Vr,Br,Or;ie.parameters={...ie.parameters,docs:{...(Vr=ie.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Or=(Br=ie.parameters)==null?void 0:Br.docs)==null?void 0:Or.source}}};var Nr,Mr,jr;ue.parameters={...ue.parameters,docs:{...(Nr=ue.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(jr=(Mr=ue.parameters)==null?void 0:Mr.docs)==null?void 0:jr.source}}};var Hr,Lr,Kr;pe.parameters={...pe.parameters,docs:{...(Hr=pe.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Kr=(Lr=pe.parameters)==null?void 0:Lr.docs)==null?void 0:Kr.source}}};var Tr,Ar,Gr;de.parameters={...de.parameters,docs:{...(Tr=de.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Gr=(Ar=de.parameters)==null?void 0:Ar.docs)==null?void 0:Gr.source}}};var Ur,Wr,Yr;me.parameters={...me.parameters,docs:{...(Ur=me.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...(Yr=(Wr=me.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var Qr,Zr,qr;fe.parameters={...fe.parameters,docs:{...(Qr=fe.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(qr=(Zr=fe.parameters)==null?void 0:Zr.docs)==null?void 0:qr.source}}};var Jr,Xr,$r;he.parameters={...he.parameters,docs:{...(Jr=he.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...($r=(Xr=he.parameters)==null?void 0:Xr.docs)==null?void 0:$r.source}}};var eo,ro,oo;Ce.parameters={...Ce.parameters,docs:{...(eo=Ce.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(oo=(ro=Ce.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,so,to;be.parameters={...be.parameters,docs:{...(ao=be.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(to=(so=be.parameters)==null?void 0:so.docs)==null?void 0:to.source}}};var co,lo,no;Se.parameters={...Se.parameters,docs:{...(co=Se.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(no=(lo=Se.parameters)==null?void 0:lo.docs)==null?void 0:no.source}}};var io,uo,po;Pe.parameters={...Pe.parameters,docs:{...(io=Pe.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(po=(uo=Pe.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,fo,ho;ke.parameters={...ke.parameters,docs:{...(mo=ke.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(ho=(fo=ke.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var Co,bo,So;ge.parameters={...ge.parameters,docs:{...(Co=ge.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(So=(bo=ge.parameters)==null?void 0:bo.docs)==null?void 0:So.source}}};var Po,ko,go;we.parameters={...we.parameters,docs:{...(Po=we.parameters)==null?void 0:Po.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(go=(ko=we.parameters)==null?void 0:ko.docs)==null?void 0:go.source}}};var wo,yo,vo;ye.parameters={...ye.parameters,docs:{...(wo=ye.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(vo=(yo=ye.parameters)==null?void 0:yo.docs)==null?void 0:vo.source}}};var Do,Fo,zo;ve.parameters={...ve.parameters,docs:{...(Do=ve.parameters)==null?void 0:Do.docs,source:{originalSource:`() => {
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
}`,...(zo=(Fo=ve.parameters)==null?void 0:Fo.docs)==null?void 0:zo.source}}};const fs=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{fs as __namedExportsOrder,q as basic,ye as customControl,we as customEyeDropperIcon,ms as default,ne as disabledAllowInput,ue as disabledChannel,de as disabledEyeDropper,ie as disabledPicker,pe as disabledSwatch,me as enabledColorPickerEyeDropper,fe as enabledResult,ke as isDisabled,ge as isReadonly,ve as reactHookForm,he as withBorderColor,le as withCloseOnSelectSwatch,re as withColorSelectorSize,$ as withDefaultColor,J as withDefaultValue,Pe as withDuration,X as withFallbackValue,ae as withFormat,se as withFormatInput,Se as withGutter,be as withOffset,Ce as withPlacement,ee as withSize,te as withSwatches,ce as withSwatchesColumns,oe as withVariant};
