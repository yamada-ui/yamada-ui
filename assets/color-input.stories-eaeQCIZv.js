import{j as e,a as C,F as v}from"./jsx-runtime-5BUNAZ9W.js";import{I as Oo,f as No}from"./fontawesome-icon-PM53MJng.js";import{r as t}from"./index-4g5l5LRQ.js";import{u as Mo,C as jo}from"./index.esm-rcUR5vC1.js";import{u as Ho,C as Lo,E as Ko}from"./color-picker-TIIvXdnd.js";import{C as Ao}from"./color-swatch-de_js36i.js";import{u as To}from"./index-JMKbXlj-.js";import{u as Go}from"./index-ookbWEcP.js";import{u as Uo,g as Wo,F as ze}from"./form-control-oXY4zBAU.js";import{c as Yo,Q as Qo,_ as $o,$ as qo,a4 as Jo,R as Xo,e as Zo,w as Ge,h as w,o as Fo,K as Ue,u as Ie,a as ye,v as et,f as rt}from"./factory-Ddmu4EkR.js";import{d as ot,c as We,o as tt}from"./theme-provider-ePNg-PER.js";import{P as at,a as st,b as nt}from"./popover-content-mA1pDLXv.js";import{P as lt}from"./container-portal-NwpTnrUg.js";import{f as Pe}from"./forward-ref-A-8Arhkk.js";import{u as ct}from"./use-component-style-zqeBCG90.js";import{V as ut}from"./stack-9sreXle_.js";import{B as it}from"./button-F5n5_bzK.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-R3NodgbI.js";import"./index-qNazZ1dd.js";import"./icon-button-E64f5sWr.js";import"./alpha-slider-HcXNg6KV.js";import"./use-color-slider-C1y63esH.js";import"./index-DSIrOfFP.js";import"./number-RReIgE2V.js";import"./hue-slider-vKVXokNa.js";import"./input-UydR1dcD.js";import"./saturation-slider-xBvjOYx-.js";import"./index-j1ofD7T5.js";import"./index-YuXFfT5-.js";import"./index-TC3VYUjw.js";import"./index-fHDnOWnT.js";import"./index-_fmLd-Ui.js";import"./index-OVWf1NNw.js";import"./index-4KtNWCXs.js";import"./index-Jxs9usl9.js";import"./motion-heeYkzTb.js";import"./slide-fade-6x5GQZrf.js";import"./index-eMn_GZVX.js";import"./utils-RzNMSjXS.js";import"./scale-fade-tsdz-DPz.js";import"./close-button-dEBEBSoK.js";import"./use-ripple-X0fM5X0u.js";import"./motion-z0k3I5F3.js";import"./index-jmm5gWkb.js";import"./loading-WkkQcnq4.js";const[pt,_e]=Yo({name:"ColorInputContext",errorMessage:`useColorInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorInput />"`}),dt=({value:s,defaultValue:u,fallbackValue:n,defaultColor:c,onChange:i,onChangeStart:p,onChangeEnd:f,onSwatchClick:h,formatInput:d=y=>y,closeOnBlur:x=!0,closeOnEsc:R=!0,placement:B="bottom-start",duration:O=.2,defaultIsOpen:ve,onOpen:k,onClose:D,allowInput:F=!0,closeOnSelectSwatch:N,format:I,swatchesLabel:M,swatches:j,swatchesColumns:H,withPicker:L,withChannel:K,withResult:A=!1,withColorPickerEyeDropper:T=!1,colorPickerVariant:Ee,colorPickerSize:ke,colorPickerColorScheme:xe,...m})=>{m=Uo(m);const y=Qo(m,Wo({omit:["aria-readonly"]})),{disabled:z,readOnly:_}=y,G=$o(m,qo),De=t.useRef(null),zo=t.useRef(null),{supported:_o,onOpen:Re}=Ho(),[S,P]=To({value:s,defaultValue:u,onChange:i}),V=t.useRef(I??ot(S??"")),Fe=t.useRef(!1),[Ve,E]=t.useState(S??""),[l,Be]=t.useState(ve??!1),Oe=ke==="full",b=t.useCallback(()=>{z||_||(Be(!0),k==null||k())},[k,z,_]),g=t.useCallback(()=>{if(!l)return;const r=We(S,n)(V.current);P(a=>!r||a===r?a:r),E(d(r??"")),Be(!1),D==null||D()},[V,l,P,D,S,d,E,n]),Ne=t.useCallback(()=>{l||b()},[l,b]),Me=t.useCallback(()=>{Fe.current=!0,!l&&b()},[l,b]),je=t.useCallback(()=>{Fe.current=!1},[]),He=t.useCallback(r=>{const a=Jo(r);Xo(De.current,a)||x&&l&&g()},[x,l,g]),Le=t.useCallback(r=>{if(r.key===" "&&(r.key=r.code),z||_)return;const Te={Space:l?void 0:b,Enter:l?void 0:b,Escape:R?g:void 0}[r.key];Te&&(r.preventDefault(),r.stopPropagation(),Te())},[z,_,l,b,R,g]),Ke=t.useCallback(r=>{const a=r.target.value;E(d(a)),P(a)},[E,d,P]),U=t.useCallback(r=>{P(r),Fe.current||E(d(r))},[P,d]),Ae=t.useCallback(async r=>{r.preventDefault(),r.stopPropagation();try{const{sRGBHex:a}=await Re()??{};if(!a)return;U(a)}catch{}},[Re,U]);Go({ref:De,handler:g,enabled:x}),Zo(()=>{if(!I)return;V.current=I;const r=We(S,n)(I);r&&(E(d(r)),P(r))},[I,n]);const Eo=t.useCallback(r=>({matchWidth:Oe,...m,...r,isOpen:l,onOpen:b,onClose:g,placement:B,duration:O,trigger:"never",closeOnButton:!1}),[Oe,O,g,b,B,m,l]),xo=t.useCallback((r={},a=null)=>({ref:Ge(De,a),...G[0],...r,...y,onClick:w(r.onClick,m.onClick,Ne),onBlur:w(r.onBlur,m.onBlur,He)}),[G,y,He,Ne,m]),Ro=t.useCallback((r={},a=null)=>({ref:Ge(zo,a),tabIndex:F?0:-1,...Fo(G[1],["aria-readonly"]),...r,style:{...r.style,...F?{}:{pointerEvents:"none"}},value:Ve,"data-active":Ue(l),"aria-expanded":Ue(l),onFocus:w(r.onFocus,m.onFocus,Me),onKeyDown:w(r.onKeyDown,m.onKeyDown,Le),onChange:w(r.onChange,Ke),onBlur:w(r.onFocus,je)}),[F,G,Ve,l,m,Me,Le,Ke,je]),Vo=t.useCallback((r={},a=null)=>({disabled:z,"aria-label":"Pick a color",...r,ref:a,style:{...r.style,pointerEvents:_?"none":void 0},onClick:w(r.onClick,Ae)}),[z,Ae,_]),Bo=t.useCallback(r=>({...y,...r,value:S,defaultValue:c,fallbackValue:n,onChange:U,onChangeStart:p,onChangeEnd:f,onSwatchClick:w(h,N?g:void 0),format:V.current,withPicker:L,withChannel:K,withResult:A,withEyeDropper:T,swatchesLabel:M,swatches:j,swatchesColumns:H,variant:Ee,size:ke,colorScheme:xe}),[y,S,n,c,U,p,f,h,g,N,V,L,K,A,T,M,j,H,xe,ke,Ee]);return{value:S,eyeDropperSupported:_o,allowInput:F,getPopoverProps:Eo,getContainerProps:xo,getFieldProps:Ro,getPickerProps:Bo,getEyeDropperProps:Vo}},o=Pe(({withSwatch:s=!0,...u},n)=>{const[c,i]=ct("ColorInput",{withSwatch:s,...u});let{className:p,withEyeDropper:f=!0,color:h,h:d,height:x,minH:R,minHeight:B,containerProps:O,inputProps:ve,swatchProps:k,eyeDropperProps:D,portalProps:F={isDisabled:!0},...N}=tt(Fo(i,["withSwatch"]));const{allowInput:I,getPopoverProps:M,getContainerProps:j,getFieldProps:H,getPickerProps:L,getEyeDropperProps:K,...A}=dt(N);d??(d=x),R??(R=B);const T={w:"100%",h:"fit-content",color:h,...c.container};return e(pt,{value:{styles:c,...A},children:e(at,{...M(),children:C(Ie.div,{className:ye("ui-color-input",p),__css:T,...j(O),children:[C(Ie.div,{className:"ui-color-input__inner",__css:{position:"relative",cursor:I?void 0:"pointer",...c.inner},children:[s?e(ft,{...k}):null,e(st,{children:e(mt,{h:d,minH:R,...H(ve,n)})}),f?e(ht,{...K(D)}):null]}),e(lt,{...F,children:e(nt,{className:"ui-color-input__popover",__css:{...c.list},children:e(Lo,{className:"ui-color-input__picker",...L()})})})]})})})}),mt=Pe(({className:s,h:u,minH:n,...c},i)=>{const{styles:p}=_e(),f={ps:"2rem",pe:"2rem",h:u,minH:n,display:"flex",alignItems:"center",...p.field};return e(Ie.input,{ref:i,className:ye("ui-color-input__field",s),__css:f,...c})}),ft=Pe(({className:s,...u},n)=>{const{value:c,styles:i}=_e(),p={position:"absolute",top:"50%",transform:"translateY(-50%)",...i.swatch};return e(Ao,{ref:n,className:ye("ui-color-input__swatch",s),__css:p,color:c,isRounded:!0,...u})}),ht=Pe(({className:s,children:u,...n},c)=>{const{styles:i}=_e(),p={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...i.eyeDropper},h=et(u).map(d=>t.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(Ie.button,{ref:c,className:ye("ui-color-input__eye-dropper",s),__css:p,...n,children:rt(u)?h:e(Ko,{className:"ui-color-input__eye-dropper__icon"})})}),ca={title:"Components / Forms / ColorInput",component:o},W=()=>e(o,{placeholder:"#4387f4ff"}),Y=()=>e(o,{defaultValue:"#4387f4ff"}),Q=()=>e(o,{fallbackValue:"#00000000"}),$=()=>e(o,{defaultColor:"#4387f4ff"}),q=()=>C(v,{children:[e(o,{placeholder:"extra small size",size:"xs"}),e(o,{placeholder:"small size",size:"sm"}),e(o,{placeholder:"medium size",size:"md"}),e(o,{placeholder:"large size",size:"lg"})]}),J=()=>C(v,{children:[e(o,{placeholder:"small size",colorPickerSize:"sm"}),e(o,{placeholder:"medium size",colorPickerSize:"md"}),e(o,{placeholder:"large size",colorPickerSize:"lg"}),e(o,{placeholder:"full size",colorPickerSize:"full"})]}),X=()=>C(v,{children:[e(o,{variant:"outline",placeholder:"outline"}),e(o,{variant:"filled",placeholder:"filled"}),e(o,{variant:"flushed",placeholder:"flushed"}),e(o,{variant:"unstyled",placeholder:"unstyled"})]}),Z=()=>e(o,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),ee=()=>e(o,{placeholder:"#4387F4FF",formatInput:s=>s.toUpperCase()}),re=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),oe=()=>e(o,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),te=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ae=()=>e(o,{placeholder:"#4387f4ff",allowInput:!1}),se=()=>e(o,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ne=()=>e(o,{withChannel:!1}),le=()=>e(o,{withSwatch:!1}),ce=()=>e(o,{withEyeDropper:!1}),ue=()=>e(o,{withColorPickerEyeDropper:!0}),ie=()=>e(o,{withResult:!0}),pe=()=>C(v,{children:[e(o,{placeholder:"default border color"}),e(o,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),de=()=>e(o,{placeholder:"#4387f4",placement:"bottom-end"}),me=()=>e(o,{placeholder:"#4387f4",offset:[16,16]}),fe=()=>e(o,{placeholder:"#4387f4",gutter:32}),he=()=>e(o,{placeholder:"#4387f4",duration:.4}),Ce=()=>C(v,{children:[e(o,{placeholder:"#4387f4",isDisabled:!0}),e(ze,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),be=()=>C(v,{children:[e(o,{placeholder:"#4387f4",isReadOnly:!0}),e(ze,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),ge=()=>C(v,{children:[e(o,{eyeDropperProps:{color:"primary"}}),e(o,{eyeDropperProps:{children:e(Oo,{icon:No})}})]}),Se=()=>{const[s,u]=t.useState("#4387f4ff");return e(o,{value:s,onChange:u})},we=()=>{var f;const s={colorInput:"#4387f4ff"},{control:u,handleSubmit:n,watch:c,formState:{errors:i}}=Mo({defaultValues:s}),p=h=>console.log("submit:",h);return console.log("watch:",c()),C(ut,{as:"form",onSubmit:n(p),children:[e(ze,{isInvalid:!!i.colorInput,label:"Pick color",errorMessage:(f=i.colorInput)==null?void 0:f.message,children:e(jo,{name:"colorInput",control:u,render:({field:h})=>e(o,{...h})})}),e(it,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ye,Qe,$e;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387f4ff" />;
}`,...($e=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};var qe,Je,Xe;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <ColorInput defaultValue="#4387f4ff" />;
}`,...(Xe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,er,rr;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <ColorInput fallbackValue="#00000000" />;
}`,...(rr=(er=Q.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,tr,ar;$.parameters={...$.parameters,docs:{...(or=$.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <ColorInput defaultColor="#4387f4ff" />;
}`,...(ar=(tr=$.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var sr,nr,lr;q.parameters={...q.parameters,docs:{...(sr=q.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <>
      <ColorInput placeholder="extra small size" size="xs" />
      <ColorInput placeholder="small size" size="sm" />
      <ColorInput placeholder="medium size" size="md" />
      <ColorInput placeholder="large size" size="lg" />
    </>;
}`,...(lr=(nr=q.parameters)==null?void 0:nr.docs)==null?void 0:lr.source}}};var cr,ur,ir;J.parameters={...J.parameters,docs:{...(cr=J.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <>
      <ColorInput placeholder="small size" colorPickerSize="sm" />
      <ColorInput placeholder="medium size" colorPickerSize="md" />
      <ColorInput placeholder="large size" colorPickerSize="lg" />
      <ColorInput placeholder="full size" colorPickerSize="full" />
    </>;
}`,...(ir=(ur=J.parameters)==null?void 0:ur.docs)==null?void 0:ir.source}}};var pr,dr,mr;X.parameters={...X.parameters,docs:{...(pr=X.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <>
      <ColorInput variant="outline" placeholder="outline" />
      <ColorInput variant="filled" placeholder="filled" />
      <ColorInput variant="flushed" placeholder="flushed" />
      <ColorInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(mr=(dr=X.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var fr,hr,Cr;Z.parameters={...Z.parameters,docs:{...(fr=Z.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <ColorInput defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(Cr=(hr=Z.parameters)==null?void 0:hr.docs)==null?void 0:Cr.source}}};var br,gr,Sr;ee.parameters={...ee.parameters,docs:{...(br=ee.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Sr=(gr=ee.parameters)==null?void 0:gr.docs)==null?void 0:Sr.source}}};var wr,Ir,yr;re.parameters={...re.parameters,docs:{...(wr=re.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorInput swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(yr=(Ir=re.parameters)==null?void 0:Ir.docs)==null?void 0:yr.source}}};var Pr,vr,kr;oe.parameters={...oe.parameters,docs:{...(Pr=oe.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <ColorInput swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(kr=(vr=oe.parameters)==null?void 0:vr.docs)==null?void 0:kr.source}}};var Dr,Fr,zr;te.parameters={...te.parameters,docs:{...(Dr=te.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorInput swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(zr=(Fr=te.parameters)==null?void 0:Fr.docs)==null?void 0:zr.source}}};var _r,Er,xr;ae.parameters={...ae.parameters,docs:{...(_r=ae.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387f4ff" allowInput={false} />;
}`,...(xr=(Er=ae.parameters)==null?void 0:Er.docs)==null?void 0:xr.source}}};var Rr,Vr,Br;se.parameters={...se.parameters,docs:{...(Rr=se.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <ColorInput withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Br=(Vr=se.parameters)==null?void 0:Vr.docs)==null?void 0:Br.source}}};var Or,Nr,Mr;ne.parameters={...ne.parameters,docs:{...(Or=ne.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorInput withChannel={false} />;
}`,...(Mr=(Nr=ne.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var jr,Hr,Lr;le.parameters={...le.parameters,docs:{...(jr=le.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorInput withSwatch={false} />;
}`,...(Lr=(Hr=le.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var Kr,Ar,Tr;ce.parameters={...ce.parameters,docs:{...(Kr=ce.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorInput withEyeDropper={false} />;
}`,...(Tr=(Ar=ce.parameters)==null?void 0:Ar.docs)==null?void 0:Tr.source}}};var Gr,Ur,Wr;ue.parameters={...ue.parameters,docs:{...(Gr=ue.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorInput withColorPickerEyeDropper />;
}`,...(Wr=(Ur=ue.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Qr,$r;ie.parameters={...ie.parameters,docs:{...(Yr=ie.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorInput withResult />;
}`,...($r=(Qr=ie.parameters)==null?void 0:Qr.docs)==null?void 0:$r.source}}};var qr,Jr,Xr;pe.parameters={...pe.parameters,docs:{...(qr=pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <>
      <ColorInput placeholder="default border color" />

      <ColorInput focusBorderColor="green.500" placeholder="custom border color" />

      <ColorInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Xr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var Zr,eo,ro;de.parameters={...de.parameters,docs:{...(Zr=de.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387f4" placement="bottom-end" />;
}`,...(ro=(eo=de.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,to,ao;me.parameters={...me.parameters,docs:{...(oo=me.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387f4" offset={[16, 16]} />;
}`,...(ao=(to=me.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var so,no,lo;fe.parameters={...fe.parameters,docs:{...(so=fe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387f4" gutter={32} />;
}`,...(lo=(no=fe.parameters)==null?void 0:no.docs)==null?void 0:lo.source}}};var co,uo,io;he.parameters={...he.parameters,docs:{...(co=he.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorInput placeholder="#4387f4" duration={0.4} />;
}`,...(io=(uo=he.parameters)==null?void 0:uo.docs)==null?void 0:io.source}}};var po,mo,fo;Ce.parameters={...Ce.parameters,docs:{...(po=Ce.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <>
      <ColorInput placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorInput placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(fo=(mo=Ce.parameters)==null?void 0:mo.docs)==null?void 0:fo.source}}};var ho,Co,bo;be.parameters={...be.parameters,docs:{...(ho=be.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <>
      <ColorInput placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorInput placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(bo=(Co=be.parameters)==null?void 0:Co.docs)==null?void 0:bo.source}}};var go,So,wo;ge.parameters={...ge.parameters,docs:{...(go=ge.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorInput eyeDropperProps={{
      color: "primary"
    }} />
      <ColorInput eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(wo=(So=ge.parameters)==null?void 0:So.docs)==null?void 0:wo.source}}};var Io,yo,Po;Se.parameters={...Se.parameters,docs:{...(Io=Se.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorInput value={value} onChange={onChange} />;
}`,...(Po=(yo=Se.parameters)==null?void 0:yo.docs)==null?void 0:Po.source}}};var vo,ko,Do;we.parameters={...we.parameters,docs:{...(vo=we.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
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
      }) => <ColorInput {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Do=(ko=we.parameters)==null?void 0:ko.docs)==null?void 0:Do.source}}};const ua=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withSize","withColorPickerSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{ua as __namedExportsOrder,W as basic,Se as customControl,ge as customEyeDropperIcon,ca as default,ae as disabledAllowInput,ne as disabledChannel,ce as disabledEyeDropper,se as disabledPicker,le as disabledSwatch,ue as enabledColorPickerEyeDropper,ie as enabledResult,Ce as isDisabled,be as isReadonly,we as reactHookForm,pe as withBorderColor,te as withCloseOnSelectSwatch,J as withColorPickerSize,$ as withDefaultColor,Y as withDefaultValue,he as withDuration,Q as withFallbackValue,Z as withFormat,ee as withFormatInput,fe as withGutter,me as withOffset,de as withPlacement,q as withSize,re as withSwatches,oe as withSwatchesColumns,X as withVariant};
