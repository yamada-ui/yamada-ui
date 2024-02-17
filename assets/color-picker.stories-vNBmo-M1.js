import{j as e,a as C,F as v}from"./jsx-runtime-5BUNAZ9W.js";import{I as No,f as Mo}from"./fontawesome-icon-kG8FVuOL.js";import{r as a}from"./index-4g5l5LRQ.js";import{u as jo,C as Ho}from"./index.esm-brxB4zTZ.js";import{u as Lo,C as Ko,E as To}from"./color-selector-371HpKer.js";import{C as Ao}from"./color-swatch-UyEHG3tQ.js";import{u as Go}from"./index-olxlcIew.js";import{u as Uo}from"./index-0MKP2jTU.js";import{u as Wo,g as Yo,F as ze}from"./form-control-TaOpd4jQ.js";import{p as Qo,P as Zo,a as qo,b as Jo}from"./popover-content-t10Kdinh.js";import{c as Xo,Q as $o,Z as ea,_ as ra,o as _o,a3 as oa,R as aa,e as ta,w as Ue,h as P,K as We,u as Pe,a as ge,v as sa,f as ca}from"./factory-RXTd6Ype.js";import{d as la,c as Ye,o as na}from"./theme-provider-sgFj2JQg.js";import{P as ia}from"./container-portal-MKckgmqP.js";import{f as we}from"./forward-ref-A-8Arhkk.js";import{u as ua}from"./use-component-style-ur23iJdL.js";import{V as pa}from"./stack-OsCTXQnl.js";import{B as da}from"./button-_x0xF1BK.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-2cwE6nV2.js";import"./index-CBfWCvKJ.js";import"./icon-button-C5Suz2TK.js";import"./alpha-slider-jkaGaaic.js";import"./use-color-slider-2G7gn7NZ.js";import"./index-Dj06gBG4.js";import"./event-ccAYLpd0.js";import"./number-RReIgE2V.js";import"./hue-slider-EWY76zjk.js";import"./input-4oJQvspv.js";import"./saturation-slider-GeB7ge8i.js";import"./index-7Lbquu31.js";import"./index-YuXFfT5-.js";import"./index-bpoVldxw.js";import"./index-9fHz3nqi.js";import"./index-bKfxnbbx.js";import"./index-wZUOzShv.js";import"./index-e7LtySSC.js";import"./index-DkyhaWsF.js";import"./motion-heeYkzTb.js";import"./slide-fade-n_HLSe8V.js";import"./index-eMn_GZVX.js";import"./utils-g5NmX3mD.js";import"./scale-fade-C6_HdBqa.js";import"./close-button-JpPxzesw.js";import"./use-ripple-u7crcLVz.js";import"./motion-1HlxJrnU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-jmm5gWkb.js";import"./loading-wg4TUUCb.js";const[ma,_e]=Xo({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),fa=({value:s,defaultValue:i,fallbackValue:c,defaultColor:l,onChange:u,onChangeStart:p,onChangeEnd:f,onSwatchClick:h,formatInput:d=w=>w,closeOnBlur:x=!0,closeOnEsc:R=!0,placement:B="bottom-start",duration:O=.2,defaultIsOpen:ye,onOpen:D,onClose:F,allowInput:z=!0,closeOnSelectSwatch:N,format:g,swatchesLabel:M,swatches:j,swatchesColumns:H,withPicker:L,withChannel:K,withResult:T=!1,withColorSelectorEyeDropper:A=!1,colorSelectorVariant:Ie,colorSelectorSize:ve,colorSelectorColorScheme:Ee,...m})=>{m=Wo(m);const w=$o(m,Yo({omit:["aria-readonly"]})),{disabled:_,readOnly:I}=w,[xe,Re]=ea(_o(m,[...Qo]),[...ra,"aria-readonly"]),De=a.useRef(null),Io=a.useRef(null),{supported:Eo,onOpen:Ve}=Lo(),[S,y]=Go({value:s,defaultValue:i,onChange:u}),V=a.useRef(g??la(S??l??"")),Fe=a.useRef(!1),[Be,E]=a.useState(S??""),[n,Oe]=a.useState(ye??!1),Ne=ve==="full",b=a.useCallback(()=>{_||I||(Oe(!0),D==null||D())},[D,_,I]),k=a.useCallback(()=>{if(!n)return;const r=Ye(S,c)(V.current);y(t=>!r||t===r?t:r),E(d(r??"")),Oe(!1),F==null||F()},[V,n,y,F,S,d,E,c]),Me=a.useCallback(()=>{n||b()},[n,b]),je=a.useCallback(()=>{Fe.current=!0,!n&&b()},[n,b]),He=a.useCallback(()=>{Fe.current=!1},[]),Le=a.useCallback(r=>{const t=oa(r);aa(De.current,t)||x&&n&&k()},[x,n,k]),Ke=a.useCallback(r=>{if(r.key===" "&&(r.key=r.code),_||I)return;const Ge={Space:n?void 0:b,Enter:n?void 0:b,Escape:R?k:void 0}[r.key];Ge&&(r.preventDefault(),r.stopPropagation(),Ge())},[_,I,n,b,R,k]),Te=a.useCallback(r=>{const t=r.target.value;E(d(t)),y(t)},[E,d,y]),G=a.useCallback(r=>{y(r),setTimeout(()=>{Fe.current||E(d(r))})},[y,d]),Ae=a.useCallback(async r=>{r.preventDefault(),r.stopPropagation();try{const{sRGBHex:t}=await Ve()??{};if(!t)return;G(t)}catch{}},[Ve,G]);Uo({ref:De,handler:k,enabled:x}),ta(()=>{if(!g)return;V.current=g;const r=Ye(S,c)(g);r&&(E(d(r)),y(r))},[g,c]);const xo=a.useCallback(r=>({matchWidth:Ne,...m,...r,isOpen:n,onOpen:b,onClose:k,placement:B,duration:O,trigger:"never",closeOnButton:!1}),[Ne,O,k,b,B,m,n]),Ro=a.useCallback((r={},t=null)=>({ref:Ue(De,t),...xe,...r,...w,onClick:P(r.onClick,m.onClick,Me),onBlur:P(r.onBlur,m.onBlur,Le)}),[xe,w,Le,Me,m]),Vo=a.useCallback((r={},t=null)=>({ref:Ue(Io,t),tabIndex:z?0:-1,...Re,...r,style:{...r.style,...z?{}:{pointerEvents:"none"}},value:Be,"data-active":We(n),"aria-expanded":We(n),onFocus:P(r.onFocus,m.onFocus,je),onKeyDown:P(r.onKeyDown,m.onKeyDown,Ke),onChange:P(r.onChange,Te),onBlur:P(r.onFocus,He)}),[z,Re,Be,n,m,je,Ke,Te,He]),Bo=a.useCallback((r={},t=null)=>({disabled:_,"aria-label":"Pick a color",...r,ref:t,style:{...r.style,pointerEvents:I?"none":void 0},onClick:P(r.onClick,Ae)}),[_,Ae,I]),Oo=a.useCallback(r=>({...w,...r,value:S,defaultValue:l,fallbackValue:c,onChange:G,onChangeStart:p,onChangeEnd:f,onSwatchClick:P(h,N?k:void 0),format:V.current,withPicker:L,withChannel:K,withResult:T,withEyeDropper:A,swatchesLabel:M,swatches:j,swatchesColumns:H,variant:Ie,size:ve,colorScheme:Ee}),[w,S,c,l,G,p,f,h,k,N,V,L,K,T,A,M,j,H,Ee,ve,Ie]);return{value:S,eyeDropperSupported:Eo,allowInput:z,getPopoverProps:xo,getContainerProps:Ro,getFieldProps:Vo,getSelectorProps:Oo,getEyeDropperProps:Bo}},o=we(({withSwatch:s=!0,...i},c)=>{const[l,u]=ua("ColorPicker",{withSwatch:s,...i});let{className:p,withEyeDropper:f=!0,color:h,h:d,height:x,minH:R,minHeight:B,containerProps:O,inputProps:ye,swatchProps:D,eyeDropperProps:F,portalProps:z={isDisabled:!0},...N}=na(_o(u,["withSwatch"]));const{allowInput:g,getPopoverProps:M,getContainerProps:j,getFieldProps:H,getSelectorProps:L,getEyeDropperProps:K,...T}=fa(N);d??(d=x),R??(R=B);const A={w:"100%",h:"fit-content",color:h,...l.container};return e(ma,{value:{styles:l,...T},children:e(Zo,{...M(),children:C(Pe.div,{className:ge("ui-color-picker",p),__css:A,...j(O),children:[C(Pe.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:g?void 0:"pointer",...l.inner},children:[s?e(Ca,{...D}):null,e(qo,{children:e(ha,{h:d,minH:R,...H(ye,c)})}),f?e(ba,{...K(F)}):null]}),e(ia,{...z,children:e(Jo,{className:"ui-color-picker__popover",__css:{...l.list},children:e(Ko,{className:"ui-color-picker__picker",...L()})})})]})})})}),ha=we(({className:s,h:i,minH:c,...l},u)=>{const{styles:p}=_e(),f={ps:"2rem",pe:"2rem",h:i,minH:c,display:"flex",alignItems:"center",...p.field};return e(Pe.input,{ref:u,className:ge("ui-color-picker__field",s),__css:f,...l})}),Ca=we(({className:s,...i},c)=>{const{value:l,styles:u}=_e(),p={position:"absolute",top:"50%",transform:"translateY(-50%)",...u.swatch};return e(Ao,{ref:c,className:ge("ui-color-picker__swatch",s),__css:p,color:l,isRounded:!0,...i})}),ba=we(({className:s,children:i,...c},l)=>{const{styles:u}=_e(),p={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...u.eyeDropper},h=sa(i).map(d=>a.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e(Pe.button,{ref:l,className:ge("ui-color-picker__eye-dropper",s),__css:p,...c,children:ca(i)?h:e(To,{className:"ui-color-picker__eye-dropper__icon"})})}),mt={title:"Components / Forms / ColorPicker",component:o},U=()=>e(o,{placeholder:"#4387f4"}),W=()=>e(o,{defaultValue:"#4387f4ff"}),Y=()=>e(o,{fallbackValue:"#000000"}),Q=()=>e(o,{defaultColor:"#4387f4ff"}),Z=()=>C(v,{children:[e(o,{placeholder:"extra small size",size:"xs"}),e(o,{placeholder:"small size",size:"sm"}),e(o,{placeholder:"medium size",size:"md"}),e(o,{placeholder:"large size",size:"lg"})]}),q=()=>C(v,{children:[e(o,{placeholder:"small size",colorSelectorSize:"sm"}),e(o,{placeholder:"medium size",colorSelectorSize:"md"}),e(o,{placeholder:"large size",colorSelectorSize:"lg"}),e(o,{placeholder:"full size",colorSelectorSize:"full"})]}),J=()=>C(v,{children:[e(o,{variant:"outline",placeholder:"outline"}),e(o,{variant:"filled",placeholder:"filled"}),e(o,{variant:"flushed",placeholder:"flushed"}),e(o,{variant:"unstyled",placeholder:"unstyled"})]}),X=()=>e(o,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),$=()=>e(o,{placeholder:"#4387F4FF",formatInput:s=>s.toUpperCase()}),ee=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),re=()=>e(o,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),oe=()=>e(o,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ae=()=>e(o,{placeholder:"#4387f4ff",allowInput:!1}),te=()=>e(o,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),se=()=>e(o,{withChannel:!1}),ce=()=>e(o,{withSwatch:!1}),le=()=>e(o,{withEyeDropper:!1}),ne=()=>e(o,{withColorSelectorEyeDropper:!0}),ie=()=>e(o,{withResult:!0}),ue=()=>C(v,{children:[e(o,{placeholder:"default border color"}),e(o,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),pe=()=>e(o,{placeholder:"#4387f4",placement:"bottom-end"}),de=()=>e(o,{placeholder:"#4387f4",offset:[16,16]}),me=()=>e(o,{placeholder:"#4387f4",gutter:32}),fe=()=>e(o,{placeholder:"#4387f4",duration:.4}),he=()=>C(v,{children:[e(o,{placeholder:"#4387f4",isDisabled:!0}),e(ze,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),Ce=()=>C(v,{children:[e(o,{placeholder:"#4387f4",isReadOnly:!0}),e(ze,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(o,{placeholder:"#4387f4"})})]}),be=()=>C(v,{children:[e(o,{eyeDropperProps:{color:"primary"}}),e(o,{eyeDropperProps:{children:e(No,{icon:Mo})}})]}),ke=()=>{const[s,i]=a.useState("#4387f4ff");return e(o,{value:s,onChange:i})},Se=()=>{var f;const s={colorInput:"#4387f4ff"},{control:i,handleSubmit:c,watch:l,formState:{errors:u}}=jo({defaultValues:s}),p=h=>console.log("submit:",h);return console.log("watch:",l()),C(pa,{as:"form",onSubmit:c(p),children:[e(ze,{isInvalid:!!u.colorInput,label:"Pick color",errorMessage:(f=u.colorInput)==null?void 0:f.message,children:e(Ho,{name:"colorInput",control:i,render:({field:h})=>e(o,{...h})})}),e(da,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Qe,Ze,qe;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(qe=(Ze=U.parameters)==null?void 0:Ze.docs)==null?void 0:qe.source}}};var Je,Xe,$e;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...($e=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var er,rr,or;Y.parameters={...Y.parameters,docs:{...(er=Y.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(or=(rr=Y.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var ar,tr,sr;Q.parameters={...Q.parameters,docs:{...(ar=Q.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(sr=(tr=Q.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var cr,lr,nr;Z.parameters={...Z.parameters,docs:{...(cr=Z.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(nr=(lr=Z.parameters)==null?void 0:lr.docs)==null?void 0:nr.source}}};var ir,ur,pr;q.parameters={...q.parameters,docs:{...(ir=q.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(pr=(ur=q.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var dr,mr,fr;J.parameters={...J.parameters,docs:{...(dr=J.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(fr=(mr=J.parameters)==null?void 0:mr.docs)==null?void 0:fr.source}}};var hr,Cr,br;X.parameters={...X.parameters,docs:{...(hr=X.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(br=(Cr=X.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var kr,Sr,Pr;$.parameters={...$.parameters,docs:{...(kr=$.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Pr=(Sr=$.parameters)==null?void 0:Sr.docs)==null?void 0:Pr.source}}};var gr,wr,yr;ee.parameters={...ee.parameters,docs:{...(gr=ee.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(yr=(wr=ee.parameters)==null?void 0:wr.docs)==null?void 0:yr.source}}};var vr,Dr,Fr;re.parameters={...re.parameters,docs:{...(vr=re.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Fr=(Dr=re.parameters)==null?void 0:Dr.docs)==null?void 0:Fr.source}}};var zr,_r,Ir;oe.parameters={...oe.parameters,docs:{...(zr=oe.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Ir=(_r=oe.parameters)==null?void 0:_r.docs)==null?void 0:Ir.source}}};var Er,xr,Rr;ae.parameters={...ae.parameters,docs:{...(Er=ae.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Rr=(xr=ae.parameters)==null?void 0:xr.docs)==null?void 0:Rr.source}}};var Vr,Br,Or;te.parameters={...te.parameters,docs:{...(Vr=te.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Or=(Br=te.parameters)==null?void 0:Br.docs)==null?void 0:Or.source}}};var Nr,Mr,jr;se.parameters={...se.parameters,docs:{...(Nr=se.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(jr=(Mr=se.parameters)==null?void 0:Mr.docs)==null?void 0:jr.source}}};var Hr,Lr,Kr;ce.parameters={...ce.parameters,docs:{...(Hr=ce.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Kr=(Lr=ce.parameters)==null?void 0:Lr.docs)==null?void 0:Kr.source}}};var Tr,Ar,Gr;le.parameters={...le.parameters,docs:{...(Tr=le.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Gr=(Ar=le.parameters)==null?void 0:Ar.docs)==null?void 0:Gr.source}}};var Ur,Wr,Yr;ne.parameters={...ne.parameters,docs:{...(Ur=ne.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...(Yr=(Wr=ne.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var Qr,Zr,qr;ie.parameters={...ie.parameters,docs:{...(Qr=ie.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(qr=(Zr=ie.parameters)==null?void 0:Zr.docs)==null?void 0:qr.source}}};var Jr,Xr,$r;ue.parameters={...ue.parameters,docs:{...(Jr=ue.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...($r=(Xr=ue.parameters)==null?void 0:Xr.docs)==null?void 0:$r.source}}};var eo,ro,oo;pe.parameters={...pe.parameters,docs:{...(eo=pe.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(oo=(ro=pe.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,to,so;de.parameters={...de.parameters,docs:{...(ao=de.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(so=(to=de.parameters)==null?void 0:to.docs)==null?void 0:so.source}}};var co,lo,no;me.parameters={...me.parameters,docs:{...(co=me.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(no=(lo=me.parameters)==null?void 0:lo.docs)==null?void 0:no.source}}};var io,uo,po;fe.parameters={...fe.parameters,docs:{...(io=fe.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(po=(uo=fe.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,fo,ho;he.parameters={...he.parameters,docs:{...(mo=he.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(ho=(fo=he.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var Co,bo,ko;Ce.parameters={...Ce.parameters,docs:{...(Co=Ce.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(ko=(bo=Ce.parameters)==null?void 0:bo.docs)==null?void 0:ko.source}}};var So,Po,go;be.parameters={...be.parameters,docs:{...(So=be.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(go=(Po=be.parameters)==null?void 0:Po.docs)==null?void 0:go.source}}};var wo,yo,vo;ke.parameters={...ke.parameters,docs:{...(wo=ke.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(vo=(yo=ke.parameters)==null?void 0:yo.docs)==null?void 0:vo.source}}};var Do,Fo,zo;Se.parameters={...Se.parameters,docs:{...(Do=Se.parameters)==null?void 0:Do.docs,source:{originalSource:`() => {
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
}`,...(zo=(Fo=Se.parameters)==null?void 0:Fo.docs)==null?void 0:zo.source}}};const ft=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{ft as __namedExportsOrder,U as basic,ke as customControl,be as customEyeDropperIcon,mt as default,ae as disabledAllowInput,se as disabledChannel,le as disabledEyeDropper,te as disabledPicker,ce as disabledSwatch,ne as enabledColorPickerEyeDropper,ie as enabledResult,he as isDisabled,Ce as isReadonly,Se as reactHookForm,ue as withBorderColor,oe as withCloseOnSelectSwatch,q as withColorSelectorSize,Q as withDefaultColor,W as withDefaultValue,fe as withDuration,Y as withFallbackValue,X as withFormat,$ as withFormatInput,me as withGutter,de as withOffset,pe as withPlacement,Z as withSize,ee as withSwatches,re as withSwatchesColumns,J as withVariant};
