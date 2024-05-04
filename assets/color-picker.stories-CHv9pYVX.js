import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{I as Ko,f as Go}from"./fontawesome-icon-SNBhdEIZ.js";import{r as s}from"./index-BwDkhjyp.js";import{u as Uo,C as Wo}from"./index.esm-BOJImm3u.js";import{u as Yo,C as Qo,E as $o}from"./color-selector-Bo4omRdk.js";import{C as qo}from"./color-swatch-DNk-8VAV.js";import{u as Jo}from"./index-B1R8nN76.js";import{u as Xo}from"./index-DZZOTJJl.js";import{u as Zo}from"./index-q0-WwcuI.js";import{u as ea,g as ra,F as Re}from"./form-control-VTiS_GWM.js";import{p as oa,P as aa,a as sa,b as la}from"./popover-content-BB5rxEjS.js";import{k as ta,S as ca,_ as na,$ as ia,Q as Vo,a9 as da,T as ua,e as Qe,a as $e,h as w,x as qe,u as ye,c as ve,s as pa,g as ma}from"./factory-DB2JyeD8.js";import{d as ha,c as Je,o as fa}from"./theme-provider-CVa4tFyh.js";import{P as Ca}from"./container-portal-Dedn3QCZ.js";import{f as De}from"./forward-ref-BmTAT9U5.js";import{a as ba}from"./use-component-style-eZPQMXFE.js";import{B as Oe}from"./button-CLAnfRTj.js";import{V as Pa}from"./stack-CTDErg2_.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BD9QHthp.js";import"./index-D8MHxai4.js";import"./icon-button-DX2kSoiO.js";import"./alpha-slider-D_8af76t.js";import"./use-color-slider-CL92MTFn.js";import"./index-V0LAc7sF.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-rk7tcWgY.js";import"./input-Gm_NK44I.js";import"./saturation-slider-DvyG15GI.js";import"./index-Zhb-4Iq9.js";import"./index-Du0-7Fls.js";import"./index-X30eDiIt.js";import"./index-CN1syZ-B.js";import"./index-CKgyiemn.js";import"./index-D5h8F0KJ.js";import"./index-BwIEhPvN.js";import"./motion-B93Hlbuy.js";import"./slide-fade-BmzJ2k-W.js";import"./index-D53P4PVU.js";import"./motion-DWzc3n8e.js";import"./utils-C5-Q2ph8.js";import"./scale-fade-DjjwaArw.js";import"./close-button-BMomi7bd.js";import"./use-ripple-BNFWROsb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./index-B8XB3FuZ.js";import"./loading-qhJXVDYI.js";const[Sa,Ee]=ta({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),ka=({value:l,defaultValue:d,fallbackValue:i,defaultColor:n,onChange:m,onChangeStart:h,onChangeEnd:u,onSwatchClick:C,formatInput:f=b=>b,closeOnBlur:D=!0,closeOnEsc:R=!0,placement:z="bottom-start",duration:E=.2,isOpen:Fe,defaultIsOpen:ze,onOpen:Ie,onClose:_e,allowInput:F=!0,closeOnSelectSwatch:V,format:j,swatchesLabel:B,swatches:N,swatchesColumns:M,withPicker:H,withChannel:L,withResult:T=!1,withColorSelectorEyeDropper:A=!1,colorSelectorVariant:K,colorSelectorSize:I,colorSelectorColorScheme:G,...p})=>{p=ea(p);const b=ca(p,ra({omit:["aria-readonly"]})),{disabled:x,readOnly:g}=b,[U,W]=na(Vo(p,[...oa]),ia),_=s.useRef(null),Bo=s.useRef(null),{supported:No,onOpen:Ve}=Yo(),[P,y]=Jo({value:l,defaultValue:d,onChange:m}),O=s.useRef(j??ha(P??n??"")),Y=s.useRef(!1),[Be,v]=s.useState(P??""),{isOpen:c,onOpen:Ne,onClose:Me}=Xo({isOpen:Fe,defaultIsOpen:ze,onOpen:Ie,onClose:_e}),He=I==="full",S=s.useCallback(()=>{x||g||Ne()},[Ne,x,g]),k=s.useCallback(()=>{if(!c)return;const o=Je(P,i)(O.current);y(t=>!o||t===o?t:o),v(f(o??"")),Me()},[O,c,y,Me,P,f,v,i]),Le=s.useCallback(()=>{c||S()},[c,S]),Te=s.useCallback(()=>{Y.current=!0,!c&&S()},[c,S]),Ae=s.useCallback(()=>{Y.current=!1},[]),Ke=s.useCallback(o=>{const t=da(o);ua(_.current,t)||D&&c&&k()},[D,c,k]),Ge=s.useCallback(o=>{if(o.key===" "&&(o.key=o.code),x||g)return;const Ye={Space:c?void 0:S,Enter:c?void 0:S,Escape:R?k:void 0}[o.key];Ye&&(o.preventDefault(),o.stopPropagation(),Ye())},[x,g,c,S,R,k]),Ue=s.useCallback(o=>{const t=o.target.value;v(f(t)),y(t)},[v,f,y]),Q=s.useCallback(o=>{y(o),setTimeout(()=>{Y.current||v(f(o))})},[y,f]),We=s.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:t}=await Ve()??{};if(!t)return;Q(t),u==null||u(t)}catch{}},[Ve,Q,u]);Zo({ref:_,handler:k,enabled:c&&D}),Qe(()=>{if(!j||!P)return;O.current=j;const o=Je(P,i)(j);o&&(v(f(o)),y(o))},[j]),Qe(()=>{Y.current||!l||v(f(l))},[l]);const Mo=s.useCallback(o=>({matchWidth:He,...p,...o,isOpen:c,onOpen:S,onClose:k,placement:z,duration:E,trigger:"never",closeOnButton:!1}),[He,E,k,S,z,p,c]),Ho=s.useCallback((o={},t=null)=>({ref:$e(_,t),...U,...o,...b,onClick:w(o.onClick,p.onClick,Le),onBlur:w(o.onBlur,p.onBlur,Ke)}),[U,b,Ke,Le,p]),Lo=s.useCallback((o={},t=null)=>({ref:$e(Bo,t),tabIndex:F?0:-1,...W,...o,style:{...o.style,...F?{}:{pointerEvents:"none"}},value:Be,"data-active":qe(c),"aria-expanded":qe(c),onFocus:w(o.onFocus,p.onFocus,Te),onKeyDown:w(o.onKeyDown,p.onKeyDown,Ge),onChange:w(o.onChange,Ue),onBlur:w(o.onFocus,Ae)}),[F,W,Be,c,p,Te,Ge,Ue,Ae]),To=s.useCallback((o={},t=null)=>({disabled:x,"aria-label":"Pick a color",...o,ref:t,style:{...o.style,pointerEvents:g?"none":void 0},onClick:w(o.onClick,We)}),[x,We,g]),Ao=s.useCallback(o=>({...b,...o,value:P,defaultValue:n,fallbackValue:i,onChange:Q,onChangeStart:h,onChangeEnd:u,onSwatchClick:w(C,V?k:void 0),format:O.current,withPicker:H,withChannel:L,withResult:T,withEyeDropper:A,swatchesLabel:B,swatches:N,swatchesColumns:M,variant:K,size:I,colorScheme:G}),[b,P,i,n,Q,h,u,C,k,V,O,H,L,T,A,B,N,M,G,I,K]);return{value:P,eyeDropperSupported:No,allowInput:F,getPopoverProps:Mo,getContainerProps:Ho,getFieldProps:Lo,getSelectorProps:Ao,getEyeDropperProps:To}},r=De(({withSwatch:l=!0,...d},i)=>{const[n,m]=ba("ColorPicker",{withSwatch:l,...d});let{className:h,children:u,withEyeDropper:C=!0,color:f,h:D,height:R,minH:z,minHeight:E,containerProps:Fe,inputProps:ze,swatchProps:Ie,eyeDropperProps:_e,saturationSliderRef:F,saturationSliderProps:V,swatchesProps:j,hueSliderRef:B,hueSliderProps:N,alphaSliderRef:M,alphaSliderProps:H,channelsProps:L,channelProps:T,portalProps:A={isDisabled:!0},...K}=fa(Vo(m,["withSwatch"]));const{allowInput:I,eyeDropperSupported:G,getPopoverProps:p,getContainerProps:b,getFieldProps:x,getSelectorProps:g,getEyeDropperProps:U,...W}=ka(K);D??(D=R),z??(z=E);const _={w:"100%",h:"fit-content",color:f,...n.container};return e.jsx(Sa,{value:{styles:n,...W},children:e.jsx(aa,{...p(),children:e.jsxs(ye.div,{className:ve("ui-color-picker",h),__css:_,...b(Fe),children:[e.jsxs(ye.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:I?void 0:"pointer",...n.inner},children:[l?e.jsx(ga,{...Ie}):null,e.jsx(sa,{children:e.jsx(xa,{h:D,minH:z,...x(ze,i)})}),G&&C?e.jsx(wa,{...U(_e)}):null]}),e.jsx(Ca,{...A,children:e.jsx(la,{className:"ui-color-picker__popover",__css:{...n.list},children:e.jsx(Qo,{className:"ui-color-picker__picker",...g({saturationSliderRef:F,saturationSliderProps:V,swatchesProps:j,hueSliderRef:B,hueSliderProps:N,alphaSliderRef:M,alphaSliderProps:H,channelsProps:L,channelProps:T}),children:u})})})]})})})}),xa=De(({className:l,h:d,minH:i,...n},m)=>{const{styles:h}=Ee(),u={ps:"2rem",pe:"2rem",h:d,minH:i,display:"flex",alignItems:"center",...h.field};return e.jsx(ye.input,{ref:m,className:ve("ui-color-picker__field",l),__css:u,...n})}),ga=De(({className:l,...d},i)=>{const{value:n,styles:m}=Ee(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...m.swatch};return e.jsx(qo,{ref:i,className:ve("ui-color-picker__swatch",l),__css:h,color:n,isRounded:!0,...d})}),wa=De(({className:l,children:d,...i},n)=>{const{styles:m}=Ee(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...m.eyeDropper},C=pa(d).map(f=>s.cloneElement(f,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(ye.button,{ref:n,className:ve("ui-color-picker__eye-dropper",l),__css:h,...i,children:ma(d)?C:e.jsx($o,{className:"ui-color-picker__eye-dropper__icon"})})}),Ss={title:"Components / Forms / ColorPicker",component:r},a="#4387f4",$=()=>e.jsx(r,{placeholder:a}),q=()=>e.jsx(r,{placeholder:a,defaultValue:"#4387f4ff"}),J=()=>e.jsx(r,{placeholder:a,fallbackValue:"#000000"}),X=()=>e.jsx(r,{placeholder:a,defaultColor:"#4387f4ff"}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Oe,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:l})=>e.jsxs(Oe,{children:["Submit ",l]})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),ae=()=>e.jsx(r,{placeholder:"hsla(240, 100%, 50%, 1)",defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:l=>l.toUpperCase()}),le=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),te=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ce=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ne=()=>e.jsx(r,{placeholder:a,allowInput:!1}),ie=()=>e.jsx(r,{placeholder:a,withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),de=()=>e.jsx(r,{placeholder:a,withChannel:!1}),ue=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),pe=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),me=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),he=()=>e.jsx(r,{placeholder:a,withResult:!0}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),Ce=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),be=()=>e.jsx(r,{placeholder:a,offset:[16,16]}),Pe=()=>e.jsx(r,{placeholder:a,gutter:32}),Se=()=>e.jsx(r,{placeholder:a,duration:.4}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isDisabled:!0}),e.jsx(Re,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isReadOnly:!0}),e.jsx(Re,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"},placeholder:a}),e.jsx(r,{eyeDropperProps:{children:e.jsx(Ko,{icon:Go})},placeholder:a})]}),we=()=>{const[l,d]=s.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:l,onChange:d})},je=()=>{var u;const l={colorInput:"#4387f4ff"},{control:d,handleSubmit:i,watch:n,formState:{errors:m}}=Uo({defaultValues:l}),h=C=>console.log("submit:",C);return console.log("watch:",n()),e.jsxs(Pa,{as:"form",onSubmit:i(h),children:[e.jsx(Re,{isInvalid:!!m.colorInput,label:"Pick color",errorMessage:(u=m.colorInput)==null?void 0:u.message,children:e.jsx(Wo,{name:"colorInput",control:d,render:({field:C})=>e.jsx(r,{...C})})}),e.jsx(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Xe,Ze,er;$.parameters={...$.parameters,docs:{...(Xe=$.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(er=(Ze=$.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,or,ar;q.parameters={...q.parameters,docs:{...(rr=q.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultValue="#4387f4ff" />;
}`,...(ar=(or=q.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var sr,lr,tr;J.parameters={...J.parameters,docs:{...(sr=J.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} fallbackValue="#000000" />;
}`,...(tr=(lr=J.parameters)==null?void 0:lr.docs)==null?void 0:tr.source}}};var cr,nr,ir;X.parameters={...X.parameters,docs:{...(cr=X.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultColor="#4387f4ff" />;
}`,...(ir=(nr=X.parameters)==null?void 0:nr.docs)==null?void 0:ir.source}}};var dr,ur,pr;Z.parameters={...Z.parameters,docs:{...(dr=Z.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder}>
        <Button>Submit</Button>
      </ColorPicker>

      <ColorPicker placeholder={defaultPlaceholder}>
        {({
        value
      }) => <Button>Submit {value}</Button>}
      </ColorPicker>
    </>;
}`,...(pr=(ur=Z.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var mr,hr,fr;ee.parameters={...ee.parameters,docs:{...(mr=ee.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(fr=(hr=ee.parameters)==null?void 0:hr.docs)==null?void 0:fr.source}}};var Cr,br,Pr;re.parameters={...re.parameters,docs:{...(Cr=re.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Pr=(br=re.parameters)==null?void 0:br.docs)==null?void 0:Pr.source}}};var Sr,kr,xr;oe.parameters={...oe.parameters,docs:{...(Sr=oe.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(xr=(kr=oe.parameters)==null?void 0:kr.docs)==null?void 0:xr.source}}};var gr,wr,jr;ae.parameters={...ae.parameters,docs:{...(gr=ae.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="hsla(240, 100%, 50%, 1)" defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(jr=(wr=ae.parameters)==null?void 0:wr.docs)==null?void 0:jr.source}}};var yr,vr,Dr;se.parameters={...se.parameters,docs:{...(yr=se.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Dr=(vr=se.parameters)==null?void 0:vr.docs)==null?void 0:Dr.source}}};var Fr,zr,Ir;le.parameters={...le.parameters,docs:{...(Fr=le.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Ir=(zr=le.parameters)==null?void 0:zr.docs)==null?void 0:Ir.source}}};var _r,Or,Rr;te.parameters={...te.parameters,docs:{...(_r=te.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Rr=(Or=te.parameters)==null?void 0:Or.docs)==null?void 0:Rr.source}}};var Er,Vr,Br;ce.parameters={...ce.parameters,docs:{...(Er=ce.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Br=(Vr=ce.parameters)==null?void 0:Vr.docs)==null?void 0:Br.source}}};var Nr,Mr,Hr;ne.parameters={...ne.parameters,docs:{...(Nr=ne.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} allowInput={false} />;
}`,...(Hr=(Mr=ne.parameters)==null?void 0:Mr.docs)==null?void 0:Hr.source}}};var Lr,Tr,Ar;ie.parameters={...ie.parameters,docs:{...(Lr=ie.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Ar=(Tr=ie.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Kr,Gr,Ur;de.parameters={...de.parameters,docs:{...(Kr=de.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(Ur=(Gr=de.parameters)==null?void 0:Gr.docs)==null?void 0:Ur.source}}};var Wr,Yr,Qr;ue.parameters={...ue.parameters,docs:{...(Wr=ue.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(Qr=(Yr=ue.parameters)==null?void 0:Yr.docs)==null?void 0:Qr.source}}};var $r,qr,Jr;pe.parameters={...pe.parameters,docs:{...($r=pe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(Jr=(qr=pe.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Xr,Zr,eo;me.parameters={...me.parameters,docs:{...(Xr=me.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(eo=(Zr=me.parameters)==null?void 0:Zr.docs)==null?void 0:eo.source}}};var ro,oo,ao;he.parameters={...he.parameters,docs:{...(ro=he.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(ao=(oo=he.parameters)==null?void 0:oo.docs)==null?void 0:ao.source}}};var so,lo,to;fe.parameters={...fe.parameters,docs:{...(so=fe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(to=(lo=fe.parameters)==null?void 0:lo.docs)==null?void 0:to.source}}};var co,no,io;Ce.parameters={...Ce.parameters,docs:{...(co=Ce.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(io=(no=Ce.parameters)==null?void 0:no.docs)==null?void 0:io.source}}};var uo,po,mo;be.parameters={...be.parameters,docs:{...(uo=be.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} offset={[16, 16]} />;
}`,...(mo=(po=be.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var ho,fo,Co;Pe.parameters={...Pe.parameters,docs:{...(ho=Pe.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} gutter={32} />;
}`,...(Co=(fo=Pe.parameters)==null?void 0:fo.docs)==null?void 0:Co.source}}};var bo,Po,So;Se.parameters={...Se.parameters,docs:{...(bo=Se.parameters)==null?void 0:bo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} duration={0.4} />;
}`,...(So=(Po=Se.parameters)==null?void 0:Po.docs)==null?void 0:So.source}}};var ko,xo,go;ke.parameters={...ke.parameters,docs:{...(ko=ke.parameters)==null?void 0:ko.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(go=(xo=ke.parameters)==null?void 0:xo.docs)==null?void 0:go.source}}};var wo,jo,yo;xe.parameters={...xe.parameters,docs:{...(wo=xe.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(yo=(jo=xe.parameters)==null?void 0:jo.docs)==null?void 0:yo.source}}};var vo,Do,Fo;ge.parameters={...ge.parameters,docs:{...(vo=ge.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} placeholder={defaultPlaceholder} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} placeholder={defaultPlaceholder} />
    </>;
}`,...(Fo=(Do=ge.parameters)==null?void 0:Do.docs)==null?void 0:Fo.source}}};var zo,Io,_o;we.parameters={...we.parameters,docs:{...(zo=we.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(_o=(Io=we.parameters)==null?void 0:Io.docs)==null?void 0:_o.source}}};var Oo,Ro,Eo;je.parameters={...je.parameters,docs:{...(Oo=je.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
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
}`,...(Eo=(Ro=je.parameters)==null?void 0:Ro.docs)==null?void 0:Eo.source}}};const ks=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{ks as __namedExportsOrder,$ as basic,we as customControl,ge as customEyeDropperIcon,Ss as default,ne as disabledAllowInput,de as disabledChannel,pe as disabledEyeDropper,ie as disabledPicker,ue as disabledSwatch,me as enabledColorPickerEyeDropper,he as enabledResult,ke as isDisabled,xe as isReadonly,je as reactHookForm,fe as withBorderColor,Z as withChildren,ce as withCloseOnSelectSwatch,re as withColorSelectorSize,X as withDefaultColor,q as withDefaultValue,Se as withDuration,J as withFallbackValue,ae as withFormat,se as withFormatInput,Pe as withGutter,be as withOffset,Ce as withPlacement,ee as withSize,le as withSwatches,te as withSwatchesColumns,oe as withVariant};
