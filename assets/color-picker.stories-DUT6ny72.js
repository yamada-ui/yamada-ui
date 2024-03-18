import{j as e,a as f,F as v}from"./jsx-runtime-2xDJh5tt.js";import{I as Go,f as Uo}from"./fontawesome-icon-8ycVrulE.js";import{r as a}from"./index-CBqU2yxZ.js";import{u as Wo,C as Yo}from"./index.esm-Dtxxx2aT.js";import{u as Qo,C as Zo,E as qo}from"./color-selector-DuZ9dKSY.js";import{C as Jo}from"./color-swatch-DfSFRSvr.js";import{u as Xo}from"./index-DffFcysT.js";import{u as $o}from"./index-DLflEqxP.js";import{u as ea}from"./index-BdxuPiOo.js";import{u as ra,g as oa,F as Ve}from"./form-control-D1mB1xBr.js";import{p as aa,P as ta,a as sa,b as la}from"./popover-content-Bq6YhX0Z.js";import{c as na,Q as ca,Z as ia,_ as ua,o as No,a3 as pa,R as da,e as Ze,w as qe,h as y,K as Je,u as Fe,a as ze,v as ma,f as fa}from"./factory-DpmudyXM.js";import{d as ha,c as Xe,o as Ca}from"./theme-provider-BSSgazaQ.js";import{P as ba}from"./container-portal-DybmBGje.js";import{f as Ie}from"./forward-ref-DuAegr0M.js";import{u as Pa}from"./use-component-style-C8HPJoXa.js";import{B as Re}from"./button-B04h-bnh.js";import{V as Sa}from"./stack-DHO7_TeU.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BPDO9FjE.js";import"./index-CjPoKz7c.js";import"./icon-button-DPaWCjwB.js";import"./alpha-slider-DdpZ4y2q.js";import"./use-color-slider-daf8ql1u.js";import"./index-zihLiaAf.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-CC07mOsN.js";import"./input-Diqz4--A.js";import"./saturation-slider-BXfVQ7UL.js";import"./index-Bg6pPbCO.js";import"./index-rYLD436_.js";import"./index-kMjdInsO.js";import"./index-BsDdrqqz.js";import"./index-ChXvatWt.js";import"./index-DTWJYyBb.js";import"./index-Dft46qqu.js";import"./motion-JgkBPv6g.js";import"./slide-fade-5g7YTpZi.js";import"./index-_tcQm2Fk.js";import"./motion-BNANSLgb.js";import"./utils-7fAhJj1f.js";import"./scale-fade-W6cuttVr.js";import"./close-button-CAEXRYsX.js";import"./use-ripple-CYLHRNNs.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./loading-PB7xGStd.js";const[ka,Be]=na({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),ga=({value:t,defaultValue:i,fallbackValue:c,defaultColor:n,onChange:p,onChangeStart:d,onChangeEnd:h,onSwatchClick:C,formatInput:m=b=>b,closeOnBlur:I=!0,closeOnEsc:V=!0,placement:x="bottom-start",duration:B=.2,isOpen:_e,defaultIsOpen:xe,onOpen:Ee,onClose:Oe,allowInput:_=!0,closeOnSelectSwatch:N,format:D,swatchesLabel:M,swatches:j,swatchesColumns:H,withPicker:L,withChannel:K,withResult:T=!1,withColorSelectorEyeDropper:A=!1,colorSelectorVariant:G,colorSelectorSize:E,colorSelectorColorScheme:U,...u})=>{u=ra(u);const b=ca(u,oa({omit:["aria-readonly"]})),{disabled:g,readOnly:w}=b,[W,Y]=ia(No(u,[...aa]),[...ua,"aria-readonly"]),O=a.useRef(null),Mo=a.useRef(null),{supported:jo,onOpen:Ne}=Qo(),[P,F]=Xo({value:t,defaultValue:i,onChange:p}),R=a.useRef(D??ha(P??n??"")),Q=a.useRef(!1),[Me,z]=a.useState(P??""),{isOpen:s,onOpen:je,onClose:He}=$o({isOpen:_e,defaultIsOpen:xe,onOpen:Ee,onClose:Oe}),Le=E==="full",S=a.useCallback(()=>{g||w||je()},[je,g,w]),k=a.useCallback(()=>{if(!s)return;const o=Xe(P,c)(R.current);F(l=>!o||l===o?l:o),z(m(o??"")),He()},[R,s,F,He,P,m,z,c]),Ke=a.useCallback(()=>{s||S()},[s,S]),Te=a.useCallback(()=>{Q.current=!0,!s&&S()},[s,S]),Ae=a.useCallback(()=>{Q.current=!1},[]),Ge=a.useCallback(o=>{const l=pa(o);da(O.current,l)||I&&s&&k()},[I,s,k]),Ue=a.useCallback(o=>{if(o.key===" "&&(o.key=o.code),g||w)return;const Qe={Space:s?void 0:S,Enter:s?void 0:S,Escape:V?k:void 0}[o.key];Qe&&(o.preventDefault(),o.stopPropagation(),Qe())},[g,w,s,S,V,k]),We=a.useCallback(o=>{const l=o.target.value;z(m(l)),F(l)},[z,m,F]),Z=a.useCallback(o=>{F(o),setTimeout(()=>{Q.current||z(m(o))})},[F,m]),Ye=a.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:l}=await Ne()??{};if(!l)return;Z(l)}catch{}},[Ne,Z]);ea({ref:O,handler:k,enabled:s&&I}),Ze(()=>{if(!D||!P)return;R.current=D;const o=Xe(P,c)(D);o&&(z(m(o)),F(o))},[D]),Ze(()=>{Q.current||!t||z(m(t))},[t]);const Ho=a.useCallback(o=>({matchWidth:Le,...u,...o,isOpen:s,onOpen:S,onClose:k,placement:x,duration:B,trigger:"never",closeOnButton:!1}),[Le,B,k,S,x,u,s]),Lo=a.useCallback((o={},l=null)=>({ref:qe(O,l),...W,...o,...b,onClick:y(o.onClick,u.onClick,Ke),onBlur:y(o.onBlur,u.onBlur,Ge)}),[W,b,Ge,Ke,u]),Ko=a.useCallback((o={},l=null)=>({ref:qe(Mo,l),tabIndex:_?0:-1,...Y,...o,style:{...o.style,..._?{}:{pointerEvents:"none"}},value:Me,"data-active":Je(s),"aria-expanded":Je(s),onFocus:y(o.onFocus,u.onFocus,Te),onKeyDown:y(o.onKeyDown,u.onKeyDown,Ue),onChange:y(o.onChange,We),onBlur:y(o.onFocus,Ae)}),[_,Y,Me,s,u,Te,Ue,We,Ae]),To=a.useCallback((o={},l=null)=>({disabled:g,"aria-label":"Pick a color",...o,ref:l,style:{...o.style,pointerEvents:w?"none":void 0},onClick:y(o.onClick,Ye)}),[g,Ye,w]),Ao=a.useCallback(o=>({...b,...o,value:P,defaultValue:n,fallbackValue:c,onChange:Z,onChangeStart:d,onChangeEnd:h,onSwatchClick:y(C,N?k:void 0),format:R.current,withPicker:L,withChannel:K,withResult:T,withEyeDropper:A,swatchesLabel:M,swatches:j,swatchesColumns:H,variant:G,size:E,colorScheme:U}),[b,P,c,n,Z,d,h,C,k,N,R,L,K,T,A,M,j,H,U,E,G]);return{value:P,eyeDropperSupported:jo,allowInput:_,getPopoverProps:Ho,getContainerProps:Lo,getFieldProps:Ko,getSelectorProps:Ao,getEyeDropperProps:To}},r=Ie(({withSwatch:t=!0,...i},c)=>{const[n,p]=Pa("ColorPicker",{withSwatch:t,...i});let{className:d,children:h,withEyeDropper:C=!0,color:m,h:I,height:V,minH:x,minHeight:B,containerProps:_e,inputProps:xe,swatchProps:Ee,eyeDropperProps:Oe,saturationSliderRef:_,saturationSliderProps:N,swatchesProps:D,hueSliderRef:M,hueSliderProps:j,alphaSliderRef:H,alphaSliderProps:L,channelsProps:K,channelProps:T,portalProps:A={isDisabled:!0},...G}=Ca(No(p,["withSwatch"]));const{allowInput:E,eyeDropperSupported:U,getPopoverProps:u,getContainerProps:b,getFieldProps:g,getSelectorProps:w,getEyeDropperProps:W,...Y}=ga(G);I??(I=V),x??(x=B);const O={w:"100%",h:"fit-content",color:m,...n.container};return e(ka,{value:{styles:n,...Y},children:e(ta,{...u(),children:f(Fe.div,{className:ze("ui-color-picker",d),__css:O,...b(_e),children:[f(Fe.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:E?void 0:"pointer",...n.inner},children:[t?e(ya,{...Ee}):null,e(sa,{children:e(wa,{h:I,minH:x,...g(xe,c)})}),U&&C?e(va,{...W(Oe)}):null]}),e(ba,{...A,children:e(la,{className:"ui-color-picker__popover",__css:{...n.list},children:e(Zo,{className:"ui-color-picker__picker",...w({saturationSliderRef:_,saturationSliderProps:N,swatchesProps:D,hueSliderRef:M,hueSliderProps:j,alphaSliderRef:H,alphaSliderProps:L,channelsProps:K,channelProps:T}),children:h})})})]})})})}),wa=Ie(({className:t,h:i,minH:c,...n},p)=>{const{styles:d}=Be(),h={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...d.field};return e(Fe.input,{ref:p,className:ze("ui-color-picker__field",t),__css:h,...n})}),ya=Ie(({className:t,...i},c)=>{const{value:n,styles:p}=Be(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...p.swatch};return e(Jo,{ref:c,className:ze("ui-color-picker__swatch",t),__css:d,color:n,isRounded:!0,...i})}),va=Ie(({className:t,children:i,...c},n)=>{const{styles:p}=Be(),d={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...p.eyeDropper},C=ma(i).map(m=>a.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(Fe.button,{ref:n,className:ze("ui-color-picker__eye-dropper",t),__css:d,...c,children:fa(i)?C:e(qo,{className:"ui-color-picker__eye-dropper__icon"})})}),kt={title:"Components / Forms / ColorPicker",component:r},q=()=>e(r,{placeholder:"#4387f4"}),J=()=>e(r,{defaultValue:"#4387f4ff"}),X=()=>e(r,{fallbackValue:"#000000"}),$=()=>e(r,{defaultColor:"#4387f4ff"}),ee=()=>f(v,{children:[e(r,{placeholder:"#4387f4",children:e(Re,{children:"Submit"})}),e(r,{placeholder:"#4387f4",children:({value:t})=>f(Re,{children:["Submit ",t]})})]}),re=()=>f(v,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),oe=()=>f(v,{children:[e(r,{placeholder:"small size",colorSelectorSize:"sm"}),e(r,{placeholder:"medium size",colorSelectorSize:"md"}),e(r,{placeholder:"large size",colorSelectorSize:"lg"}),e(r,{placeholder:"full size",colorSelectorSize:"full"})]}),ae=()=>f(v,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),te=()=>e(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e(r,{placeholder:"#4387F4FF",formatInput:t=>t.toUpperCase()}),le=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ne=()=>e(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ce=()=>e(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ie=()=>e(r,{placeholder:"#4387f4ff",allowInput:!1}),ue=()=>e(r,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),pe=()=>e(r,{withChannel:!1}),de=()=>e(r,{withSwatch:!1}),me=()=>e(r,{withEyeDropper:!1}),fe=()=>e(r,{withColorSelectorEyeDropper:!0}),he=()=>e(r,{withResult:!0}),Ce=()=>f(v,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),be=()=>e(r,{placeholder:"#4387f4",placement:"bottom-end"}),Pe=()=>e(r,{placeholder:"#4387f4",offset:[16,16]}),Se=()=>e(r,{placeholder:"#4387f4",gutter:32}),ke=()=>e(r,{placeholder:"#4387f4",duration:.4}),ge=()=>f(v,{children:[e(r,{placeholder:"#4387f4",isDisabled:!0}),e(Ve,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{placeholder:"#4387f4"})})]}),we=()=>f(v,{children:[e(r,{placeholder:"#4387f4",isReadOnly:!0}),e(Ve,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(r,{placeholder:"#4387f4"})})]}),ye=()=>f(v,{children:[e(r,{eyeDropperProps:{color:"primary"}}),e(r,{eyeDropperProps:{children:e(Go,{icon:Uo})}})]}),ve=()=>{const[t,i]=a.useState("#4387f4ff");return e(r,{value:t,onChange:i})},De=()=>{var h;const t={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:n,formState:{errors:p}}=Wo({defaultValues:t}),d=C=>console.log("submit:",C);return console.log("watch:",n()),f(Sa,{as:"form",onSubmit:c(d),children:[e(Ve,{isInvalid:!!p.colorInput,label:"Pick color",errorMessage:(h=p.colorInput)==null?void 0:h.message,children:e(Yo,{name:"colorInput",control:i,render:({field:C})=>e(r,{...C})})}),e(Re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var $e,er,rr;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(rr=(er=q.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,ar,tr;J.parameters={...J.parameters,docs:{...(or=J.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...(tr=(ar=J.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,lr,nr;X.parameters={...X.parameters,docs:{...(sr=X.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(nr=(lr=X.parameters)==null?void 0:lr.docs)==null?void 0:nr.source}}};var cr,ir,ur;$.parameters={...$.parameters,docs:{...(cr=$.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(ur=(ir=$.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var pr,dr,mr;ee.parameters={...ee.parameters,docs:{...(pr=ee.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
}`,...(mr=(dr=ee.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var fr,hr,Cr;re.parameters={...re.parameters,docs:{...(fr=re.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(Cr=(hr=re.parameters)==null?void 0:hr.docs)==null?void 0:Cr.source}}};var br,Pr,Sr;oe.parameters={...oe.parameters,docs:{...(br=oe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Sr=(Pr=oe.parameters)==null?void 0:Pr.docs)==null?void 0:Sr.source}}};var kr,gr,wr;ae.parameters={...ae.parameters,docs:{...(kr=ae.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(wr=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var yr,vr,Dr;te.parameters={...te.parameters,docs:{...(yr=te.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(Dr=(vr=te.parameters)==null?void 0:vr.docs)==null?void 0:Dr.source}}};var Fr,zr,Ir;se.parameters={...se.parameters,docs:{...(Fr=se.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Ir=(zr=se.parameters)==null?void 0:zr.docs)==null?void 0:Ir.source}}};var _r,xr,Er;le.parameters={...le.parameters,docs:{...(_r=le.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Er=(xr=le.parameters)==null?void 0:xr.docs)==null?void 0:Er.source}}};var Or,Rr,Vr;ne.parameters={...ne.parameters,docs:{...(Or=ne.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Vr=(Rr=ne.parameters)==null?void 0:Rr.docs)==null?void 0:Vr.source}}};var Br,Nr,Mr;ce.parameters={...ce.parameters,docs:{...(Br=ce.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Mr=(Nr=ce.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var jr,Hr,Lr;ie.parameters={...ie.parameters,docs:{...(jr=ie.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Lr=(Hr=ie.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var Kr,Tr,Ar;ue.parameters={...ue.parameters,docs:{...(Kr=ue.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Ar=(Tr=ue.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Gr,Ur,Wr;pe.parameters={...pe.parameters,docs:{...(Gr=pe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(Wr=(Ur=pe.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Qr,Zr;de.parameters={...de.parameters,docs:{...(Yr=de.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Zr=(Qr=de.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var qr,Jr,Xr;me.parameters={...me.parameters,docs:{...(qr=me.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Xr=(Jr=me.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var $r,eo,ro;fe.parameters={...fe.parameters,docs:{...($r=fe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...(ro=(eo=fe.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,ao,to;he.parameters={...he.parameters,docs:{...(oo=he.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(to=(ao=he.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var so,lo,no;Ce.parameters={...Ce.parameters,docs:{...(so=Ce.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(no=(lo=Ce.parameters)==null?void 0:lo.docs)==null?void 0:no.source}}};var co,io,uo;be.parameters={...be.parameters,docs:{...(co=be.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(uo=(io=be.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var po,mo,fo;Pe.parameters={...Pe.parameters,docs:{...(po=Pe.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(fo=(mo=Pe.parameters)==null?void 0:mo.docs)==null?void 0:fo.source}}};var ho,Co,bo;Se.parameters={...Se.parameters,docs:{...(ho=Se.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(bo=(Co=Se.parameters)==null?void 0:Co.docs)==null?void 0:bo.source}}};var Po,So,ko;ke.parameters={...ke.parameters,docs:{...(Po=ke.parameters)==null?void 0:Po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(ko=(So=ke.parameters)==null?void 0:So.docs)==null?void 0:ko.source}}};var go,wo,yo;ge.parameters={...ge.parameters,docs:{...(go=ge.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(yo=(wo=ge.parameters)==null?void 0:wo.docs)==null?void 0:yo.source}}};var vo,Do,Fo;we.parameters={...we.parameters,docs:{...(vo=we.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(Fo=(Do=we.parameters)==null?void 0:Do.docs)==null?void 0:Fo.source}}};var zo,Io,_o;ye.parameters={...ye.parameters,docs:{...(zo=ye.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(_o=(Io=ye.parameters)==null?void 0:Io.docs)==null?void 0:_o.source}}};var xo,Eo,Oo;ve.parameters={...ve.parameters,docs:{...(xo=ve.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(Oo=(Eo=ve.parameters)==null?void 0:Eo.docs)==null?void 0:Oo.source}}};var Ro,Vo,Bo;De.parameters={...De.parameters,docs:{...(Ro=De.parameters)==null?void 0:Ro.docs,source:{originalSource:`() => {
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
}`,...(Bo=(Vo=De.parameters)==null?void 0:Vo.docs)==null?void 0:Bo.source}}};const gt=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{gt as __namedExportsOrder,q as basic,ve as customControl,ye as customEyeDropperIcon,kt as default,ie as disabledAllowInput,pe as disabledChannel,me as disabledEyeDropper,ue as disabledPicker,de as disabledSwatch,fe as enabledColorPickerEyeDropper,he as enabledResult,ge as isDisabled,we as isReadonly,De as reactHookForm,Ce as withBorderColor,ee as withChildren,ce as withCloseOnSelectSwatch,oe as withColorSelectorSize,$ as withDefaultColor,J as withDefaultValue,ke as withDuration,X as withFallbackValue,te as withFormat,se as withFormatInput,Se as withGutter,Pe as withOffset,be as withPlacement,re as withSize,le as withSwatches,ne as withSwatchesColumns,ae as withVariant};
