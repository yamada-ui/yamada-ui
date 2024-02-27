import{j as e,a as f,F as v}from"./jsx-runtime-TtYKBvr-.js";import{I as Go,f as Uo}from"./fontawesome-icon-Qi5pPxwd.js";import{r as a}from"./index-IybTgENJ.js";import{u as Wo,C as Yo}from"./index.esm-xnaDCuzx.js";import{u as Qo,C as Zo,E as qo}from"./color-selector-wHNqrqUr.js";import{C as Jo}from"./color-swatch-_7p463b4.js";import{u as Xo}from"./index-znEHh1qe.js";import{u as $o}from"./index-IuztQ-h0.js";import{u as ea}from"./index-5yqksndd.js";import{u as ra,g as oa,F as Ve}from"./form-control-5i85VEjC.js";import{p as aa,P as sa,a as ta,b as la}from"./popover-content-o3WLbApb.js";import{c as na,Q as ca,Z as ia,_ as ua,o as No,a3 as pa,R as da,e as Ze,w as qe,h as y,K as Je,u as De,a as Fe,v as ma,f as fa}from"./factory-APG2CWDq.js";import{d as ha,c as Xe,o as Ca}from"./theme-provider-rjxHA_Gz.js";import{P as ba}from"./container-portal-o5r_vKh6.js";import{f as ze}from"./forward-ref-6T0UNPU-.js";import{u as Pa}from"./use-component-style-XlqdEMGL.js";import{B as Re}from"./button-o5uJYAqq.js";import{V as Sa}from"./stack-zD0uDDLM.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-7S-xPcKO.js";import"./index-1lNNAzjq.js";import"./icon-button-rlRYDJWn.js";import"./alpha-slider-jlrQtmMf.js";import"./use-color-slider-4BSaxkLk.js";import"./index-NafqJ8X3.js";import"./event-ccAYLpd0.js";import"./number-RReIgE2V.js";import"./hue-slider-2ep8uF8j.js";import"./input-FhO_NNIg.js";import"./saturation-slider-r4gk6tMm.js";import"./index-Dpxfoi4w.js";import"./index-gWY0u-sb.js";import"./index-K29-uZRL.js";import"./index-eyP5AEB2.js";import"./index-OvegpJAh.js";import"./index-yCED6MhK.js";import"./index-immFGolW.js";import"./motion-RGBG165B.js";import"./slide-fade-Dnfa5ZSD.js";import"./index-dKw0visz.js";import"./motion-YDUrcbbR.js";import"./utils-pTLoFQxU.js";import"./scale-fade-oYTzd4zZ.js";import"./close-button-SGGVP-7K.js";import"./use-ripple-PKVw7PLF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-xIHD0DlW.js";import"./loading-Z6ToCT2V.js";const[ka,Be]=na({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),ga=({value:s,defaultValue:i,fallbackValue:c,defaultColor:n,onChange:p,onChangeStart:d,onChangeEnd:h,onSwatchClick:C,formatInput:m=b=>b,closeOnBlur:I=!0,closeOnEsc:R=!0,placement:x="bottom-start",duration:V=.2,isOpen:Ie,defaultIsOpen:_e,onOpen:xe,onClose:Ee,allowInput:_=!0,closeOnSelectSwatch:B,format:D,swatchesLabel:N,swatches:M,swatchesColumns:j,withPicker:H,withChannel:L,withResult:K=!1,withColorSelectorEyeDropper:T=!1,colorSelectorVariant:A,colorSelectorSize:E,colorSelectorColorScheme:G,...u})=>{u=ra(u);const b=ca(u,oa({omit:["aria-readonly"]})),{disabled:g,readOnly:w}=b,[U,W]=ia(No(u,[...aa]),[...ua,"aria-readonly"]),Oe=a.useRef(null),Mo=a.useRef(null),{supported:jo,onOpen:Ne}=Qo(),[P,F]=Xo({value:s,defaultValue:i,onChange:p}),O=a.useRef(D??ha(P??n??"")),Y=a.useRef(!1),[Me,z]=a.useState(P??""),{isOpen:t,onOpen:je,onClose:He}=$o({isOpen:Ie,defaultIsOpen:_e,onOpen:xe,onClose:Ee}),Le=E==="full",S=a.useCallback(()=>{g||w||je()},[je,g,w]),k=a.useCallback(()=>{if(!t)return;const o=Xe(P,c)(O.current);F(l=>!o||l===o?l:o),z(m(o??"")),He()},[O,t,F,He,P,m,z,c]),Ke=a.useCallback(()=>{t||S()},[t,S]),Te=a.useCallback(()=>{Y.current=!0,!t&&S()},[t,S]),Ae=a.useCallback(()=>{Y.current=!1},[]),Ge=a.useCallback(o=>{const l=pa(o);da(Oe.current,l)||I&&t&&k()},[I,t,k]),Ue=a.useCallback(o=>{if(o.key===" "&&(o.key=o.code),g||w)return;const Qe={Space:t?void 0:S,Enter:t?void 0:S,Escape:R?k:void 0}[o.key];Qe&&(o.preventDefault(),o.stopPropagation(),Qe())},[g,w,t,S,R,k]),We=a.useCallback(o=>{const l=o.target.value;z(m(l)),F(l)},[z,m,F]),Q=a.useCallback(o=>{F(o),setTimeout(()=>{Y.current||z(m(o))})},[F,m]),Ye=a.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:l}=await Ne()??{};if(!l)return;Q(l)}catch{}},[Ne,Q]);ea({ref:Oe,handler:k,enabled:t&&I}),Ze(()=>{if(!D||!P)return;O.current=D;const o=Xe(P,c)(D);o&&(z(m(o)),F(o))},[D]),Ze(()=>{Y.current||!s||z(m(s))},[s]);const Ho=a.useCallback(o=>({matchWidth:Le,...u,...o,isOpen:t,onOpen:S,onClose:k,placement:x,duration:V,trigger:"never",closeOnButton:!1}),[Le,V,k,S,x,u,t]),Lo=a.useCallback((o={},l=null)=>({ref:qe(Oe,l),...U,...o,...b,onClick:y(o.onClick,u.onClick,Ke),onBlur:y(o.onBlur,u.onBlur,Ge)}),[U,b,Ge,Ke,u]),Ko=a.useCallback((o={},l=null)=>({ref:qe(Mo,l),tabIndex:_?0:-1,...W,...o,style:{...o.style,..._?{}:{pointerEvents:"none"}},value:Me,"data-active":Je(t),"aria-expanded":Je(t),onFocus:y(o.onFocus,u.onFocus,Te),onKeyDown:y(o.onKeyDown,u.onKeyDown,Ue),onChange:y(o.onChange,We),onBlur:y(o.onFocus,Ae)}),[_,W,Me,t,u,Te,Ue,We,Ae]),To=a.useCallback((o={},l=null)=>({disabled:g,"aria-label":"Pick a color",...o,ref:l,style:{...o.style,pointerEvents:w?"none":void 0},onClick:y(o.onClick,Ye)}),[g,Ye,w]),Ao=a.useCallback(o=>({...b,...o,value:P,defaultValue:n,fallbackValue:c,onChange:Q,onChangeStart:d,onChangeEnd:h,onSwatchClick:y(C,B?k:void 0),format:O.current,withPicker:H,withChannel:L,withResult:K,withEyeDropper:T,swatchesLabel:N,swatches:M,swatchesColumns:j,variant:A,size:E,colorScheme:G}),[b,P,c,n,Q,d,h,C,k,B,O,H,L,K,T,N,M,j,G,E,A]);return{value:P,eyeDropperSupported:jo,allowInput:_,getPopoverProps:Ho,getContainerProps:Lo,getFieldProps:Ko,getSelectorProps:Ao,getEyeDropperProps:To}},r=ze(({withSwatch:s=!0,...i},c)=>{const[n,p]=Pa("ColorPicker",{withSwatch:s,...i});let{className:d,children:h,withEyeDropper:C=!0,color:m,h:I,height:R,minH:x,minHeight:V,containerProps:Ie,inputProps:_e,swatchProps:xe,eyeDropperProps:Ee,saturationSliderRef:_,saturationSliderProps:B,swatchesProps:D,hueSliderRef:N,hueSliderProps:M,alphaSliderRef:j,alphaSliderProps:H,channelsProps:L,channelProps:K,portalProps:T={isDisabled:!0},...A}=Ca(No(p,["withSwatch"]));const{allowInput:E,getPopoverProps:G,getContainerProps:u,getFieldProps:b,getSelectorProps:g,getEyeDropperProps:w,...U}=ga(A);I??(I=R),x??(x=V);const W={w:"100%",h:"fit-content",color:m,...n.container};return e(ka,{value:{styles:n,...U},children:e(sa,{...G(),children:f(De.div,{className:Fe("ui-color-picker",d),__css:W,...u(Ie),children:[f(De.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:E?void 0:"pointer",...n.inner},children:[s?e(ya,{...xe}):null,e(ta,{children:e(wa,{h:I,minH:x,...b(_e,c)})}),C?e(va,{...w(Ee)}):null]}),e(ba,{...T,children:e(la,{className:"ui-color-picker__popover",__css:{...n.list},children:e(Zo,{className:"ui-color-picker__picker",...g({saturationSliderRef:_,saturationSliderProps:B,swatchesProps:D,hueSliderRef:N,hueSliderProps:M,alphaSliderRef:j,alphaSliderProps:H,channelsProps:L,channelProps:K}),children:h})})})]})})})}),wa=ze(({className:s,h:i,minH:c,...n},p)=>{const{styles:d}=Be(),h={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...d.field};return e(De.input,{ref:p,className:Fe("ui-color-picker__field",s),__css:h,...n})}),ya=ze(({className:s,...i},c)=>{const{value:n,styles:p}=Be(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...p.swatch};return e(Jo,{ref:c,className:Fe("ui-color-picker__swatch",s),__css:d,color:n,isRounded:!0,...i})}),va=ze(({className:s,children:i,...c},n)=>{const{styles:p}=Be(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...p.eyeDropper},C=ma(i).map(m=>a.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(De.button,{ref:n,className:Fe("ui-color-picker__eye-dropper",s),__css:d,...c,children:fa(i)?C:e(qo,{className:"ui-color-picker__eye-dropper__icon"})})}),ks={title:"Components / Forms / ColorPicker",component:r},Z=()=>e(r,{placeholder:"#4387f4"}),q=()=>e(r,{defaultValue:"#4387f4ff"}),J=()=>e(r,{fallbackValue:"#000000"}),X=()=>e(r,{defaultColor:"#4387f4ff"}),$=()=>f(v,{children:[e(r,{placeholder:"#4387f4",children:e(Re,{children:"Submit"})}),e(r,{placeholder:"#4387f4",children:({value:s})=>f(Re,{children:["Submit ",s]})})]}),ee=()=>f(v,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),re=()=>f(v,{children:[e(r,{placeholder:"small size",colorSelectorSize:"sm"}),e(r,{placeholder:"medium size",colorSelectorSize:"md"}),e(r,{placeholder:"large size",colorSelectorSize:"lg"}),e(r,{placeholder:"full size",colorSelectorSize:"full"})]}),oe=()=>f(v,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),ae=()=>e(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e(r,{placeholder:"#4387F4FF",formatInput:s=>s.toUpperCase()}),te=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),le=()=>e(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ne=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ce=()=>e(r,{placeholder:"#4387f4ff",allowInput:!1}),ie=()=>e(r,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ue=()=>e(r,{withChannel:!1}),pe=()=>e(r,{withSwatch:!1}),de=()=>e(r,{withEyeDropper:!1}),me=()=>e(r,{withColorSelectorEyeDropper:!0}),fe=()=>e(r,{withResult:!0}),he=()=>f(v,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),Ce=()=>e(r,{placeholder:"#4387f4",placement:"bottom-end"}),be=()=>e(r,{placeholder:"#4387f4",offset:[16,16]}),Pe=()=>e(r,{placeholder:"#4387f4",gutter:32}),Se=()=>e(r,{placeholder:"#4387f4",duration:.4}),ke=()=>f(v,{children:[e(r,{placeholder:"#4387f4",isDisabled:!0}),e(Ve,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{placeholder:"#4387f4"})})]}),ge=()=>f(v,{children:[e(r,{placeholder:"#4387f4",isReadOnly:!0}),e(Ve,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{placeholder:"#4387f4"})})]}),we=()=>f(v,{children:[e(r,{eyeDropperProps:{color:"primary"}}),e(r,{eyeDropperProps:{children:e(Go,{icon:Uo})}})]}),ye=()=>{const[s,i]=a.useState("#4387f4ff");return e(r,{value:s,onChange:i})},ve=()=>{var h;const s={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:n,formState:{errors:p}}=Wo({defaultValues:s}),d=C=>console.log("submit:",C);return console.log("watch:",n()),f(Sa,{as:"form",onSubmit:c(d),children:[e(Ve,{isInvalid:!!p.colorInput,label:"Pick color",errorMessage:(h=p.colorInput)==null?void 0:h.message,children:e(Yo,{name:"colorInput",control:i,render:({field:C})=>e(r,{...C})})}),e(Re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var $e,er,rr;Z.parameters={...Z.parameters,docs:{...($e=Z.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(rr=(er=Z.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,ar,sr;q.parameters={...q.parameters,docs:{...(or=q.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...(sr=(ar=q.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var tr,lr,nr;J.parameters={...J.parameters,docs:{...(tr=J.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(nr=(lr=J.parameters)==null?void 0:lr.docs)==null?void 0:nr.source}}};var cr,ir,ur;X.parameters={...X.parameters,docs:{...(cr=X.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(ur=(ir=X.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var pr,dr,mr;$.parameters={...$.parameters,docs:{...(pr=$.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=$.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var fr,hr,Cr;ee.parameters={...ee.parameters,docs:{...(fr=ee.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(Cr=(hr=ee.parameters)==null?void 0:hr.docs)==null?void 0:Cr.source}}};var br,Pr,Sr;re.parameters={...re.parameters,docs:{...(br=re.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Sr=(Pr=re.parameters)==null?void 0:Pr.docs)==null?void 0:Sr.source}}};var kr,gr,wr;oe.parameters={...oe.parameters,docs:{...(kr=oe.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(wr=(gr=oe.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var yr,vr,Dr;ae.parameters={...ae.parameters,docs:{...(yr=ae.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(Dr=(vr=ae.parameters)==null?void 0:vr.docs)==null?void 0:Dr.source}}};var Fr,zr,Ir;se.parameters={...se.parameters,docs:{...(Fr=se.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Ir=(zr=se.parameters)==null?void 0:zr.docs)==null?void 0:Ir.source}}};var _r,xr,Er;te.parameters={...te.parameters,docs:{...(_r=te.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Er=(xr=te.parameters)==null?void 0:xr.docs)==null?void 0:Er.source}}};var Or,Rr,Vr;le.parameters={...le.parameters,docs:{...(Or=le.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Vr=(Rr=le.parameters)==null?void 0:Rr.docs)==null?void 0:Vr.source}}};var Br,Nr,Mr;ne.parameters={...ne.parameters,docs:{...(Br=ne.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Mr=(Nr=ne.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var jr,Hr,Lr;ce.parameters={...ce.parameters,docs:{...(jr=ce.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Lr=(Hr=ce.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var Kr,Tr,Ar;ie.parameters={...ie.parameters,docs:{...(Kr=ie.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Ar=(Tr=ie.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Gr,Ur,Wr;ue.parameters={...ue.parameters,docs:{...(Gr=ue.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(Wr=(Ur=ue.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Qr,Zr;pe.parameters={...pe.parameters,docs:{...(Yr=pe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Zr=(Qr=pe.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var qr,Jr,Xr;de.parameters={...de.parameters,docs:{...(qr=de.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Xr=(Jr=de.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var $r,eo,ro;me.parameters={...me.parameters,docs:{...($r=me.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...(ro=(eo=me.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,ao,so;fe.parameters={...fe.parameters,docs:{...(oo=fe.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(so=(ao=fe.parameters)==null?void 0:ao.docs)==null?void 0:so.source}}};var to,lo,no;he.parameters={...he.parameters,docs:{...(to=he.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(no=(lo=he.parameters)==null?void 0:lo.docs)==null?void 0:no.source}}};var co,io,uo;Ce.parameters={...Ce.parameters,docs:{...(co=Ce.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(uo=(io=Ce.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var po,mo,fo;be.parameters={...be.parameters,docs:{...(po=be.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(fo=(mo=be.parameters)==null?void 0:mo.docs)==null?void 0:fo.source}}};var ho,Co,bo;Pe.parameters={...Pe.parameters,docs:{...(ho=Pe.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(bo=(Co=Pe.parameters)==null?void 0:Co.docs)==null?void 0:bo.source}}};var Po,So,ko;Se.parameters={...Se.parameters,docs:{...(Po=Se.parameters)==null?void 0:Po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(ko=(So=Se.parameters)==null?void 0:So.docs)==null?void 0:ko.source}}};var go,wo,yo;ke.parameters={...ke.parameters,docs:{...(go=ke.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(yo=(wo=ke.parameters)==null?void 0:wo.docs)==null?void 0:yo.source}}};var vo,Do,Fo;ge.parameters={...ge.parameters,docs:{...(vo=ge.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(Fo=(Do=ge.parameters)==null?void 0:Do.docs)==null?void 0:Fo.source}}};var zo,Io,_o;we.parameters={...we.parameters,docs:{...(zo=we.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(_o=(Io=we.parameters)==null?void 0:Io.docs)==null?void 0:_o.source}}};var xo,Eo,Oo;ye.parameters={...ye.parameters,docs:{...(xo=ye.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(Oo=(Eo=ye.parameters)==null?void 0:Eo.docs)==null?void 0:Oo.source}}};var Ro,Vo,Bo;ve.parameters={...ve.parameters,docs:{...(Ro=ve.parameters)==null?void 0:Ro.docs,source:{originalSource:`() => {
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
}`,...(Bo=(Vo=ve.parameters)==null?void 0:Vo.docs)==null?void 0:Bo.source}}};const gs=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{gs as __namedExportsOrder,Z as basic,ye as customControl,we as customEyeDropperIcon,ks as default,ce as disabledAllowInput,ue as disabledChannel,de as disabledEyeDropper,ie as disabledPicker,pe as disabledSwatch,me as enabledColorPickerEyeDropper,fe as enabledResult,ke as isDisabled,ge as isReadonly,ve as reactHookForm,he as withBorderColor,$ as withChildren,ne as withCloseOnSelectSwatch,re as withColorSelectorSize,X as withDefaultColor,q as withDefaultValue,Se as withDuration,J as withFallbackValue,ae as withFormat,se as withFormatInput,Pe as withGutter,be as withOffset,Ce as withPlacement,ee as withSize,te as withSwatches,le as withSwatchesColumns,oe as withVariant};
