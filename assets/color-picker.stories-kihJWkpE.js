import{j as e,a as C,F as v}from"./jsx-runtime-5BUNAZ9W.js";import{I as Oo,f as No}from"./fontawesome-icon-2ePRZBC_.js";import{r as a}from"./index-4g5l5LRQ.js";import{u as Mo,C as jo}from"./index.esm-rcUR5vC1.js";import{u as Ho,C as Lo,E as Ko}from"./color-selector-R8KRlEpb.js";import{C as Ao}from"./color-swatch-jtS3z5tL.js";import{u as To}from"./index-jXL2Te6W.js";import{u as Go}from"./index-_-UQSbLl.js";import{u as Uo,g as Wo,F as _e}from"./form-control-9XpnQ7XD.js";import{c as Yo,Q as Qo,_ as $o,$ as qo,a4 as Jo,R as Xo,e as Zo,w as Ge,h as P,o as zo,K as Ue,u as ge,a as we,v as ea,f as ra}from"./factory-_mTQY6PK.js";import{d as oa,c as We,o as aa}from"./theme-provider-XorC6D0y.js";import{P as ta,a as sa,b as ca}from"./popover-content-d9CI-zYu.js";import{P as la}from"./container-portal-2rZsAQsm.js";import{f as ye}from"./forward-ref-A-8Arhkk.js";import{u as na}from"./use-component-style-lJBCD4Hi.js";import{V as ia}from"./stack-_c9sAZKA.js";import{B as ua}from"./button-cMSAhBpk.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-_12WOtQg.js";import"./index-z6pzycMb.js";import"./icon-button-QRGURj5a.js";import"./alpha-slider-AQA74t5W.js";import"./use-color-slider-Zzsuykhq.js";import"./index-L9hw7aoW.js";import"./number-RReIgE2V.js";import"./hue-slider-942FYzt4.js";import"./input-Qbzi4aBI.js";import"./saturation-slider-nB5j5OsN.js";import"./index-ilbR8ILe.js";import"./index-YuXFfT5-.js";import"./index-XF8iI1gU.js";import"./index-n7ruz947.js";import"./index-uZf9R2Ey.js";import"./index-WpjfSWOg.js";import"./index-Qpz5-nu_.js";import"./index-nv1zPk__.js";import"./motion-heeYkzTb.js";import"./slide-fade-NVrmNfm2.js";import"./index-eMn_GZVX.js";import"./utils-PqxgXkDx.js";import"./scale-fade-9BW0d5Vb.js";import"./close-button-bBA8Anc2.js";import"./use-ripple-NMzR3tTC.js";import"./motion-V5SSOO6i.js";import"./index-jmm5gWkb.js";import"./loading-MtZqCvSr.js";const[pa,Ie]=Yo({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),da=({value:s,defaultValue:i,fallbackValue:c,defaultColor:n,onChange:u,onChangeStart:p,onChangeEnd:f,onSwatchClick:h,formatInput:d=w=>w,closeOnBlur:x=!0,closeOnEsc:R=!0,placement:B="bottom-start",duration:O=.2,defaultIsOpen:ve,onOpen:D,onClose:F,allowInput:z=!0,closeOnSelectSwatch:N,format:g,swatchesLabel:M,swatches:j,swatchesColumns:H,withPicker:L,withChannel:K,withResult:A=!1,withColorSelectorEyeDropper:T=!1,colorSelectorVariant:Ee,colorSelectorSize:De,colorSelectorColorScheme:xe,...m})=>{m=Uo(m);const w=Qo(m,Wo({omit:["aria-readonly"]})),{disabled:_,readOnly:I}=w,G=$o(m,qo),Fe=a.useRef(null),_o=a.useRef(null),{supported:Io,onOpen:Re}=Ho(),[S,y]=To({value:s,defaultValue:i,onChange:u}),V=a.useRef(g??oa(S??"")),ze=a.useRef(!1),[Ve,E]=a.useState(S??""),[l,Be]=a.useState(ve??!1),Oe=De==="full",b=a.useCallback(()=>{_||I||(Be(!0),D==null||D())},[D,_,I]),k=a.useCallback(()=>{if(!l)return;const r=We(S,c)(V.current);y(t=>!r||t===r?t:r),E(d(r??"")),Be(!1),F==null||F()},[V,l,y,F,S,d,E,c]),Ne=a.useCallback(()=>{l||b()},[l,b]),Me=a.useCallback(()=>{ze.current=!0,!l&&b()},[l,b]),je=a.useCallback(()=>{ze.current=!1},[]),He=a.useCallback(r=>{const t=Jo(r);Xo(Fe.current,t)||x&&l&&k()},[x,l,k]),Le=a.useCallback(r=>{if(r.key===" "&&(r.key=r.code),_||I)return;const Te={Space:l?void 0:b,Enter:l?void 0:b,Escape:R?k:void 0}[r.key];Te&&(r.preventDefault(),r.stopPropagation(),Te())},[_,I,l,b,R,k]),Ke=a.useCallback(r=>{const t=r.target.value;E(d(t)),y(t)},[E,d,y]),U=a.useCallback(r=>{y(r),ze.current||E(d(r))},[y,d]),Ae=a.useCallback(async r=>{r.preventDefault(),r.stopPropagation();try{const{sRGBHex:t}=await Re()??{};if(!t)return;U(t)}catch{}},[Re,U]);Go({ref:Fe,handler:k,enabled:x}),Zo(()=>{if(!g)return;V.current=g;const r=We(S,c)(g);r&&(E(d(r)),y(r))},[g,c]);const Eo=a.useCallback(r=>({matchWidth:Oe,...m,...r,isOpen:l,onOpen:b,onClose:k,placement:B,duration:O,trigger:"never",closeOnButton:!1}),[Oe,O,k,b,B,m,l]),xo=a.useCallback((r={},t=null)=>({ref:Ge(Fe,t),...G[0],...r,...w,onClick:P(r.onClick,m.onClick,Ne),onBlur:P(r.onBlur,m.onBlur,He)}),[G,w,He,Ne,m]),Ro=a.useCallback((r={},t=null)=>({ref:Ge(_o,t),tabIndex:z?0:-1,...zo(G[1],["aria-readonly"]),...r,style:{...r.style,...z?{}:{pointerEvents:"none"}},value:Ve,"data-active":Ue(l),"aria-expanded":Ue(l),onFocus:P(r.onFocus,m.onFocus,Me),onKeyDown:P(r.onKeyDown,m.onKeyDown,Le),onChange:P(r.onChange,Ke),onBlur:P(r.onFocus,je)}),[z,G,Ve,l,m,Me,Le,Ke,je]),Vo=a.useCallback((r={},t=null)=>({disabled:_,"aria-label":"Pick a color",...r,ref:t,style:{...r.style,pointerEvents:I?"none":void 0},onClick:P(r.onClick,Ae)}),[_,Ae,I]),Bo=a.useCallback(r=>({...w,...r,value:S,defaultValue:n,fallbackValue:c,onChange:U,onChangeStart:p,onChangeEnd:f,onSwatchClick:P(h,N?k:void 0),format:V.current,withPicker:L,withChannel:K,withResult:A,withEyeDropper:T,swatchesLabel:M,swatches:j,swatchesColumns:H,variant:Ee,size:De,colorScheme:xe}),[w,S,c,n,U,p,f,h,k,N,V,L,K,A,T,M,j,H,xe,De,Ee]);return{value:S,eyeDropperSupported:Io,allowInput:z,getPopoverProps:Eo,getContainerProps:xo,getFieldProps:Ro,getSelectorProps:Bo,getEyeDropperProps:Vo}},o=ye(({withSwatch:s=!0,...i},c)=>{const[n,u]=na("ColorPicker",{withSwatch:s,...i});let{className:p,withEyeDropper:f=!0,color:h,h:d,height:x,minH:R,minHeight:B,containerProps:O,inputProps:ve,swatchProps:D,eyeDropperProps:F,portalProps:z={isDisabled:!0},...N}=aa(zo(u,["withSwatch"]));const{allowInput:g,getPopoverProps:M,getContainerProps:j,getFieldProps:H,getSelectorProps:L,getEyeDropperProps:K,...A}=da(N);d??(d=x),R??(R=B);const T={w:"100%",h:"fit-content",color:h,...n.container};return e(pa,{value:{styles:n,...A},children:e(ta,{...M(),children:C(ge.div,{className:we("ui-color-picker",p),__css:T,...j(O),children:[C(ge.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:g?void 0:"pointer",...n.inner},children:[s?e(fa,{...D}):null,e(sa,{children:e(ma,{h:d,minH:R,...H(ve,c)})}),f?e(ha,{...K(F)}):null]}),e(la,{...z,children:e(ca,{className:"ui-color-picker__popover",__css:{...n.list},children:e(Lo,{className:"ui-color-picker__picker",...L()})})})]})})})}),ma=ye(({className:s,h:i,minH:c,...n},u)=>{const{styles:p}=Ie(),f={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...p.field};return e(ge.input,{ref:u,className:we("ui-color-picker__field",s),__css:f,...n})}),fa=ye(({className:s,...i},c)=>{const{value:n,styles:u}=Ie(),p={position:"absolute",top:"50%",transform:"translateY(-50%)",...u.swatch};return e(Ao,{ref:c,className:we("ui-color-picker__swatch",s),__css:p,color:n,isRounded:!0,...i})}),ha=ye(({className:s,children:i,...c},n)=>{const{styles:u}=Ie(),p={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...u.eyeDropper},h=ea(i).map(d=>a.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(ge.button,{ref:n,className:we("ui-color-picker__eye-dropper",s),__css:p,...c,children:ra(i)?h:e(Ko,{className:"ui-color-picker__eye-dropper__icon"})})}),nt={title:"Components / Forms / ColorPicker",component:o},W=()=>e(o,{placeholder:"#4387f4ff"}),Y=()=>e(o,{defaultValue:"#4387f4ff"}),Q=()=>e(o,{fallbackValue:"#00000000"}),$=()=>e(o,{defaultColor:"#4387f4ff"}),q=()=>C(v,{children:[e(o,{placeholder:"extra small size",size:"xs"}),e(o,{placeholder:"small size",size:"sm"}),e(o,{placeholder:"medium size",size:"md"}),e(o,{placeholder:"large size",size:"lg"})]}),J=()=>C(v,{children:[e(o,{placeholder:"small size",colorSelectorSize:"sm"}),e(o,{placeholder:"medium size",colorSelectorSize:"md"}),e(o,{placeholder:"large size",colorSelectorSize:"lg"}),e(o,{placeholder:"full size",colorSelectorSize:"full"})]}),X=()=>C(v,{children:[e(o,{variant:"outline",placeholder:"outline"}),e(o,{variant:"filled",placeholder:"filled"}),e(o,{variant:"flushed",placeholder:"flushed"}),e(o,{variant:"unstyled",placeholder:"unstyled"})]}),Z=()=>e(o,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),ee=()=>e(o,{placeholder:"#4387F4FF",formatInput:s=>s.toUpperCase()}),re=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),oe=()=>e(o,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ae=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),te=()=>e(o,{placeholder:"#4387f4ff",allowInput:!1}),se=()=>e(o,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ce=()=>e(o,{withChannel:!1}),le=()=>e(o,{withSwatch:!1}),ne=()=>e(o,{withEyeDropper:!1}),ie=()=>e(o,{withColorSelectorEyeDropper:!0}),ue=()=>e(o,{withResult:!0}),pe=()=>C(v,{children:[e(o,{placeholder:"default border color"}),e(o,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),de=()=>e(o,{placeholder:"#4387f4",placement:"bottom-end"}),me=()=>e(o,{placeholder:"#4387f4",offset:[16,16]}),fe=()=>e(o,{placeholder:"#4387f4",gutter:32}),he=()=>e(o,{placeholder:"#4387f4",duration:.4}),Ce=()=>C(v,{children:[e(o,{placeholder:"#4387f4",isDisabled:!0}),e(_e,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),be=()=>C(v,{children:[e(o,{placeholder:"#4387f4",isReadOnly:!0}),e(_e,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),ke=()=>C(v,{children:[e(o,{eyeDropperProps:{color:"primary"}}),e(o,{eyeDropperProps:{children:e(Oo,{icon:No})}})]}),Se=()=>{const[s,i]=a.useState("#4387f4ff");return e(o,{value:s,onChange:i})},Pe=()=>{var f;const s={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:n,formState:{errors:u}}=Mo({defaultValues:s}),p=h=>console.log("submit:",h);return console.log("watch:",n()),C(ia,{as:"form",onSubmit:c(p),children:[e(_e,{isInvalid:!!u.colorInput,label:"Pick color",errorMessage:(f=u.colorInput)==null?void 0:f.message,children:e(jo,{name:"colorInput",control:i,render:({field:h})=>e(o,{...h})})}),e(ua,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ye,Qe,$e;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" />;
}`,...($e=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};var qe,Je,Xe;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...(Xe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,er,rr;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#00000000" />;
}`,...(rr=(er=Q.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,ar,tr;$.parameters={...$.parameters,docs:{...(or=$.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(tr=(ar=$.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,cr,lr;q.parameters={...q.parameters,docs:{...(sr=q.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(lr=(cr=q.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var nr,ir,ur;J.parameters={...J.parameters,docs:{...(nr=J.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(ur=(ir=J.parameters)==null?void 0:ir.docs)==null?void 0:ur.source}}};var pr,dr,mr;X.parameters={...X.parameters,docs:{...(pr=X.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(mr=(dr=X.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var fr,hr,Cr;Z.parameters={...Z.parameters,docs:{...(fr=Z.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(Cr=(hr=Z.parameters)==null?void 0:hr.docs)==null?void 0:Cr.source}}};var br,kr,Sr;ee.parameters={...ee.parameters,docs:{...(br=ee.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Sr=(kr=ee.parameters)==null?void 0:kr.docs)==null?void 0:Sr.source}}};var Pr,gr,wr;re.parameters={...re.parameters,docs:{...(Pr=re.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(wr=(gr=re.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var yr,vr,Dr;oe.parameters={...oe.parameters,docs:{...(yr=oe.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Dr=(vr=oe.parameters)==null?void 0:vr.docs)==null?void 0:Dr.source}}};var Fr,zr,_r;ae.parameters={...ae.parameters,docs:{...(Fr=ae.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(_r=(zr=ae.parameters)==null?void 0:zr.docs)==null?void 0:_r.source}}};var Ir,Er,xr;te.parameters={...te.parameters,docs:{...(Ir=te.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(xr=(Er=te.parameters)==null?void 0:Er.docs)==null?void 0:xr.source}}};var Rr,Vr,Br;se.parameters={...se.parameters,docs:{...(Rr=se.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Br=(Vr=se.parameters)==null?void 0:Vr.docs)==null?void 0:Br.source}}};var Or,Nr,Mr;ce.parameters={...ce.parameters,docs:{...(Or=ce.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(Mr=(Nr=ce.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var jr,Hr,Lr;le.parameters={...le.parameters,docs:{...(jr=le.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Lr=(Hr=le.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var Kr,Ar,Tr;ne.parameters={...ne.parameters,docs:{...(Kr=ne.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Tr=(Ar=ne.parameters)==null?void 0:Ar.docs)==null?void 0:Tr.source}}};var Gr,Ur,Wr;ie.parameters={...ie.parameters,docs:{...(Gr=ie.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...(Wr=(Ur=ie.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Qr,$r;ue.parameters={...ue.parameters,docs:{...(Yr=ue.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...($r=(Qr=ue.parameters)==null?void 0:Qr.docs)==null?void 0:$r.source}}};var qr,Jr,Xr;pe.parameters={...pe.parameters,docs:{...(qr=pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Xr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var Zr,eo,ro;de.parameters={...de.parameters,docs:{...(Zr=de.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(ro=(eo=de.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,ao,to;me.parameters={...me.parameters,docs:{...(oo=me.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(to=(ao=me.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var so,co,lo;fe.parameters={...fe.parameters,docs:{...(so=fe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(lo=(co=fe.parameters)==null?void 0:co.docs)==null?void 0:lo.source}}};var no,io,uo;he.parameters={...he.parameters,docs:{...(no=he.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(uo=(io=he.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var po,mo,fo;Ce.parameters={...Ce.parameters,docs:{...(po=Ce.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(fo=(mo=Ce.parameters)==null?void 0:mo.docs)==null?void 0:fo.source}}};var ho,Co,bo;be.parameters={...be.parameters,docs:{...(ho=be.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(bo=(Co=be.parameters)==null?void 0:Co.docs)==null?void 0:bo.source}}};var ko,So,Po;ke.parameters={...ke.parameters,docs:{...(ko=ke.parameters)==null?void 0:ko.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(Po=(So=ke.parameters)==null?void 0:So.docs)==null?void 0:Po.source}}};var go,wo,yo;Se.parameters={...Se.parameters,docs:{...(go=Se.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(yo=(wo=Se.parameters)==null?void 0:wo.docs)==null?void 0:yo.source}}};var vo,Do,Fo;Pe.parameters={...Pe.parameters,docs:{...(vo=Pe.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
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
}`,...(Fo=(Do=Pe.parameters)==null?void 0:Do.docs)==null?void 0:Fo.source}}};const it=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{it as __namedExportsOrder,W as basic,Se as customControl,ke as customEyeDropperIcon,nt as default,te as disabledAllowInput,ce as disabledChannel,ne as disabledEyeDropper,se as disabledPicker,le as disabledSwatch,ie as enabledColorPickerEyeDropper,ue as enabledResult,Ce as isDisabled,be as isReadonly,Pe as reactHookForm,pe as withBorderColor,ae as withCloseOnSelectSwatch,J as withColorSelectorSize,$ as withDefaultColor,Y as withDefaultValue,he as withDuration,Q as withFallbackValue,Z as withFormat,ee as withFormatInput,fe as withGutter,me as withOffset,de as withPlacement,q as withSize,re as withSwatches,oe as withSwatchesColumns,X as withVariant};
