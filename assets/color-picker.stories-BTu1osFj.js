import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as Ko,f as Go}from"./fontawesome-icon-x0Qm_E3u.js";import{r as s}from"./index-uCp2LrAq.js";import{u as Uo,C as Wo}from"./index.esm-TLwx9zN6.js";import{u as Yo,C as Qo,E as $o}from"./color-selector-DPsLZWBO.js";import{C as qo}from"./color-swatch-Dufe-pZ4.js";import{u as Jo}from"./index-DgTF2YmQ.js";import{u as Xo}from"./index-1abRQEVN.js";import{u as Zo}from"./index-1St3wXnV.js";import{u as ea,f as ra,F as Ee}from"./form-control-DwXP3uMc.js";import{p as oa,P as aa,a as sa,b as la}from"./popover-content-HNceUCzk.js";import{l as ta,S as ca,$ as na,a0 as ia,Q as da,aa as ua,T as pa,f as $e,a as qe,h as g,d as Je,b as ye,c as ve,t as ma,j as ha}from"./factory-eGqOwxJN.js";import{d as fa,c as Xe,o as Ca}from"./theme-provider-DBZuijdl.js";import{P as ba}from"./container-portal-BaP6G2_r.js";import{f as De}from"./forward-ref-Dr5Hqd9a.js";import{a as Pa}from"./use-component-style-DAcjH3Cb.js";import{B as Oe}from"./button-Dg1r1tLc.js";import{V as Sa}from"./stack-BXALz489.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-C4f_KbJN.js";import"./index-BAZmNyaF.js";import"./icon-button-B2fQCd6B.js";import"./alpha-slider-BxQXvwXO.js";import"./use-color-slider-_ejV7q2u.js";import"./index-DaK76HzO.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-CZ5vCDOz.js";import"./input-DWFPKsvY.js";import"./saturation-slider-Vt2Iupk9.js";import"./index-BRfWrp5h.js";import"./index-CBqzus2r.js";import"./index-Bxd2-ejE.js";import"./index-5gjePty1.js";import"./index-B72Mmnz4.js";import"./index-BOin0i7A.js";import"./index-7pS6GFaA.js";import"./motion-BNFRb361.js";import"./slide-fade-2zDTdsfJ.js";import"./index-DSHhgXSs.js";import"./motion-D9P5qI5Q.js";import"./utils-BvetsyWM.js";import"./scale-fade-D5z6P0Jx.js";import"./close-button-BMtw8-jq.js";import"./use-ripple-BL9M4SmM.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-CqS9fqXy.js";import"./loading-RZrS9-iD.js";const[ka,Ve]=ta({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),xa=({value:l,defaultValue:d,fallbackValue:i,defaultColor:n,onChange:m,onChangeStart:h,onChangeEnd:u,onSwatchClick:C,formatInput:f=G=>G,closeOnBlur:D=!0,closeOnEsc:R=!0,placement:z="bottom-start",duration:O=.2,isOpen:Fe,defaultIsOpen:ze,onOpen:Ie,onClose:_e,allowInput:F=!0,closeOnSelectSwatch:E,format:w,swatchesLabel:V,swatches:B,swatchesColumns:N,withPicker:M,withChannel:H,withResult:L=!1,withColorSelectorEyeDropper:T=!1,colorSelectorVariant:A,colorSelectorSize:I,colorSelectorColorScheme:K,...p})=>{p=ea(p);const{"aria-readonly":G,...j}=ca(p,ra),{disabled:k,readOnly:x}=j,[U,W]=na(da(p,[...oa]),ia),Re=s.useRef(null),Bo=s.useRef(null),{supported:No,onOpen:Be}=Yo(),[b,y]=Jo({value:l,defaultValue:d,onChange:m}),_=s.useRef(w??fa(b??n??"")),Y=s.useRef(!1),[Ne,v]=s.useState(b??""),{isOpen:c,onOpen:Me,onClose:He}=Xo({isOpen:Fe,defaultIsOpen:ze,onOpen:Ie,onClose:_e}),Le=I==="full",P=s.useCallback(()=>{k||x||Me()},[Me,k,x]),S=s.useCallback(()=>{if(!c)return;const o=Xe(b,i)(_.current);y(t=>!o||t===o?t:o),v(f(o??"")),He()},[_,c,y,He,b,f,v,i]),Te=s.useCallback(()=>{c||P()},[c,P]),Ae=s.useCallback(()=>{Y.current=!0,!c&&P()},[c,P]),Ke=s.useCallback(()=>{Y.current=!1},[]),Ge=s.useCallback(o=>{const t=ua(o);pa(Re.current,t)||D&&c&&S()},[D,c,S]),Ue=s.useCallback(o=>{if(o.key===" "&&(o.key=o.code),k||x)return;const Qe={Space:c?void 0:P,Enter:c?void 0:P,Escape:R?S:void 0}[o.key];Qe&&(o.preventDefault(),o.stopPropagation(),Qe())},[k,x,c,P,R,S]),We=s.useCallback(o=>{const t=o.target.value;v(f(t)),y(t)},[v,f,y]),Q=s.useCallback(o=>{y(o),setTimeout(()=>{Y.current||v(f(o))})},[y,f]),Ye=s.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:t}=await Be()??{};if(!t)return;Q(t),u==null||u(t)}catch{}},[Be,Q,u]);Zo({ref:Re,handler:S,enabled:c&&D}),$e(()=>{if(!w||!b)return;_.current=w;const o=Xe(b,i)(w);o&&(v(f(o)),y(o))},[w]),$e(()=>{Y.current||!l||v(f(l))},[l]);const Mo=s.useCallback(o=>({matchWidth:Le,...p,...o,isOpen:c,onOpen:P,onClose:S,placement:z,duration:O,trigger:"never",closeOnButton:!1}),[Le,O,S,P,z,p,c]),Ho=s.useCallback((o={},t=null)=>({ref:qe(Re,t),...U,...o,...j,onClick:g(o.onClick,p.onClick,Te),onBlur:g(o.onBlur,p.onBlur,Ge)}),[U,j,Ge,Te,p]),Lo=s.useCallback((o={},t=null)=>({ref:qe(Bo,t),tabIndex:F?0:-1,...W,...o,style:{...o.style,...F?{}:{pointerEvents:"none"}},value:Ne,"data-active":Je(c),"aria-expanded":Je(c),onFocus:g(o.onFocus,p.onFocus,Ae),onKeyDown:g(o.onKeyDown,p.onKeyDown,Ue),onChange:g(o.onChange,We),onBlur:g(o.onFocus,Ke)}),[F,W,Ne,c,p,Ae,Ue,We,Ke]),To=s.useCallback((o={},t=null)=>({disabled:k,"aria-label":"Pick a color",...o,ref:t,style:{...o.style,pointerEvents:x?"none":void 0},onClick:g(o.onClick,Ye)}),[k,Ye,x]),Ao=s.useCallback(o=>({...j,...o,value:b,defaultValue:n,fallbackValue:i,onChange:Q,onChangeStart:h,onChangeEnd:u,onSwatchClick:g(C,E?S:void 0),format:_.current,withPicker:M,withChannel:H,withResult:L,withEyeDropper:T,swatchesLabel:V,swatches:B,swatchesColumns:N,variant:A,size:I,colorScheme:K}),[j,b,i,n,Q,h,u,C,S,E,_,M,H,L,T,V,B,N,K,I,A]);return{value:b,eyeDropperSupported:No,allowInput:F,getPopoverProps:Mo,getContainerProps:Ho,getFieldProps:Lo,getSelectorProps:Ao,getEyeDropperProps:To}},r=De(({withSwatch:l=!0,...d},i)=>{const[n,m]=Pa("ColorPicker",{withSwatch:l,...d});let{className:h,children:u,withEyeDropper:C=!0,color:f,h:D,height:R,minH:z,minHeight:O,containerProps:Fe,inputProps:ze,swatchProps:Ie,eyeDropperProps:_e,saturationSliderRef:F,saturationSliderProps:E,swatchesProps:w,hueSliderRef:V,hueSliderProps:B,alphaSliderRef:N,alphaSliderProps:M,channelsProps:H,channelProps:L,portalProps:T={isDisabled:!0},...A}=Ca(m,["withSwatch"]);const{allowInput:I,eyeDropperSupported:K,getPopoverProps:p,getContainerProps:G,getFieldProps:j,getSelectorProps:k,getEyeDropperProps:x,...U}=xa(A);D??(D=R),z??(z=O);const W={w:"100%",h:"fit-content",color:f,...n.container};return e.jsx(ka,{value:{styles:n,...U},children:e.jsx(aa,{...p(),children:e.jsxs(ye.div,{className:ve("ui-color-picker",h),__css:W,...G(Fe),children:[e.jsxs(ye.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:I?void 0:"pointer",...n.inner},children:[l?e.jsx(wa,{...Ie}):null,e.jsx(sa,{children:e.jsx(ga,{h:D,minH:z,...j(ze,i)})}),K&&C?e.jsx(ja,{...x(_e)}):null]}),e.jsx(ba,{...T,children:e.jsx(la,{className:"ui-color-picker__popover",__css:{...n.list},children:e.jsx(Qo,{className:"ui-color-picker__picker",...k({saturationSliderRef:F,saturationSliderProps:E,swatchesProps:w,hueSliderRef:V,hueSliderProps:B,alphaSliderRef:N,alphaSliderProps:M,channelsProps:H,channelProps:L}),children:u})})})]})})})}),ga=De(({className:l,h:d,minH:i,...n},m)=>{const{styles:h}=Ve(),u={ps:"2rem",pe:"2rem",h:d,minH:i,display:"flex",alignItems:"center",...h.field};return e.jsx(ye.input,{ref:m,className:ve("ui-color-picker__field",l),__css:u,...n})}),wa=De(({className:l,...d},i)=>{const{value:n,styles:m}=Ve(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...m.swatch};return e.jsx(qo,{ref:i,className:ve("ui-color-picker__swatch",l),__css:h,color:n,isRounded:!0,...d})}),ja=De(({className:l,children:d,...i},n)=>{const{styles:m}=Ve(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...m.eyeDropper},C=ma(d).map(f=>s.cloneElement(f,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(ye.button,{ref:n,className:ve("ui-color-picker__eye-dropper",l),__css:h,...i,children:ha(d)?C:e.jsx($o,{className:"ui-color-picker__eye-dropper__icon"})})}),ks={title:"Components / Forms / ColorPicker",component:r},a="#4387f4",$=()=>e.jsx(r,{placeholder:a}),q=()=>e.jsx(r,{placeholder:a,defaultValue:"#4387f4ff"}),J=()=>e.jsx(r,{placeholder:a,fallbackValue:"#000000"}),X=()=>e.jsx(r,{placeholder:a,defaultColor:"#4387f4ff"}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Oe,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:l})=>e.jsxs(Oe,{children:["Submit ",l]})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),ae=()=>e.jsx(r,{placeholder:"hsla(240, 100%, 50%, 1)",defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:l=>l.toUpperCase()}),le=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),te=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ce=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ne=()=>e.jsx(r,{placeholder:a,allowInput:!1}),ie=()=>e.jsx(r,{placeholder:a,withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),de=()=>e.jsx(r,{placeholder:a,withChannel:!1}),ue=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),pe=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),me=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),he=()=>e.jsx(r,{placeholder:a,withResult:!0}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),Ce=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),be=()=>e.jsx(r,{placeholder:a,offset:[16,16]}),Pe=()=>e.jsx(r,{placeholder:a,gutter:32}),Se=()=>e.jsx(r,{placeholder:a,duration:.4}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isDisabled:!0}),e.jsx(Ee,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isReadOnly:!0}),e.jsx(Ee,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"},placeholder:a}),e.jsx(r,{eyeDropperProps:{children:e.jsx(Ko,{icon:Go})},placeholder:a})]}),we=()=>{const[l,d]=s.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:l,onChange:d})},je=()=>{var u;const l={colorInput:"#4387f4ff"},{control:d,handleSubmit:i,watch:n,formState:{errors:m}}=Uo({defaultValues:l}),h=C=>console.log("submit:",C);return console.log("watch:",n()),e.jsxs(Sa,{as:"form",onSubmit:i(h),children:[e.jsx(Ee,{isInvalid:!!m.colorInput,label:"Pick color",errorMessage:(u=m.colorInput)==null?void 0:u.message,children:e.jsx(Wo,{name:"colorInput",control:d,render:({field:C})=>e.jsx(r,{...C})})}),e.jsx(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ze,er,rr;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(rr=(er=$.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var or,ar,sr;q.parameters={...q.parameters,docs:{...(or=q.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultValue="#4387f4ff" />;
}`,...(sr=(ar=q.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var lr,tr,cr;J.parameters={...J.parameters,docs:{...(lr=J.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} fallbackValue="#000000" />;
}`,...(cr=(tr=J.parameters)==null?void 0:tr.docs)==null?void 0:cr.source}}};var nr,ir,dr;X.parameters={...X.parameters,docs:{...(nr=X.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultColor="#4387f4ff" />;
}`,...(dr=(ir=X.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var ur,pr,mr;Z.parameters={...Z.parameters,docs:{...(ur=Z.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=Z.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var hr,fr,Cr;ee.parameters={...ee.parameters,docs:{...(hr=ee.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(Cr=(fr=ee.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var br,Pr,Sr;re.parameters={...re.parameters,docs:{...(br=re.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Sr=(Pr=re.parameters)==null?void 0:Pr.docs)==null?void 0:Sr.source}}};var kr,xr,gr;oe.parameters={...oe.parameters,docs:{...(kr=oe.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(gr=(xr=oe.parameters)==null?void 0:xr.docs)==null?void 0:gr.source}}};var wr,jr,yr;ae.parameters={...ae.parameters,docs:{...(wr=ae.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="hsla(240, 100%, 50%, 1)" defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(yr=(jr=ae.parameters)==null?void 0:jr.docs)==null?void 0:yr.source}}};var vr,Dr,Fr;se.parameters={...se.parameters,docs:{...(vr=se.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Fr=(Dr=se.parameters)==null?void 0:Dr.docs)==null?void 0:Fr.source}}};var zr,Ir,_r;le.parameters={...le.parameters,docs:{...(zr=le.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(_r=(Ir=le.parameters)==null?void 0:Ir.docs)==null?void 0:_r.source}}};var Rr,Or,Er;te.parameters={...te.parameters,docs:{...(Rr=te.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Er=(Or=te.parameters)==null?void 0:Or.docs)==null?void 0:Er.source}}};var Vr,Br,Nr;ce.parameters={...ce.parameters,docs:{...(Vr=ce.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Nr=(Br=ce.parameters)==null?void 0:Br.docs)==null?void 0:Nr.source}}};var Mr,Hr,Lr;ne.parameters={...ne.parameters,docs:{...(Mr=ne.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} allowInput={false} />;
}`,...(Lr=(Hr=ne.parameters)==null?void 0:Hr.docs)==null?void 0:Lr.source}}};var Tr,Ar,Kr;ie.parameters={...ie.parameters,docs:{...(Tr=ie.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Kr=(Ar=ie.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Gr,Ur,Wr;de.parameters={...de.parameters,docs:{...(Gr=de.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(Wr=(Ur=de.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Qr,$r;ue.parameters={...ue.parameters,docs:{...(Yr=ue.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...($r=(Qr=ue.parameters)==null?void 0:Qr.docs)==null?void 0:$r.source}}};var qr,Jr,Xr;pe.parameters={...pe.parameters,docs:{...(qr=pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(Xr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var Zr,eo,ro;me.parameters={...me.parameters,docs:{...(Zr=me.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(ro=(eo=me.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,ao,so;he.parameters={...he.parameters,docs:{...(oo=he.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(so=(ao=he.parameters)==null?void 0:ao.docs)==null?void 0:so.source}}};var lo,to,co;fe.parameters={...fe.parameters,docs:{...(lo=fe.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(co=(to=fe.parameters)==null?void 0:to.docs)==null?void 0:co.source}}};var no,io,uo;Ce.parameters={...Ce.parameters,docs:{...(no=Ce.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(uo=(io=Ce.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var po,mo,ho;be.parameters={...be.parameters,docs:{...(po=be.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} offset={[16, 16]} />;
}`,...(ho=(mo=be.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};var fo,Co,bo;Pe.parameters={...Pe.parameters,docs:{...(fo=Pe.parameters)==null?void 0:fo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} gutter={32} />;
}`,...(bo=(Co=Pe.parameters)==null?void 0:Co.docs)==null?void 0:bo.source}}};var Po,So,ko;Se.parameters={...Se.parameters,docs:{...(Po=Se.parameters)==null?void 0:Po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} duration={0.4} />;
}`,...(ko=(So=Se.parameters)==null?void 0:So.docs)==null?void 0:ko.source}}};var xo,go,wo;ke.parameters={...ke.parameters,docs:{...(xo=ke.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(wo=(go=ke.parameters)==null?void 0:go.docs)==null?void 0:wo.source}}};var jo,yo,vo;xe.parameters={...xe.parameters,docs:{...(jo=xe.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(vo=(yo=xe.parameters)==null?void 0:yo.docs)==null?void 0:vo.source}}};var Do,Fo,zo;ge.parameters={...ge.parameters,docs:{...(Do=ge.parameters)==null?void 0:Do.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} placeholder={defaultPlaceholder} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} placeholder={defaultPlaceholder} />
    </>;
}`,...(zo=(Fo=ge.parameters)==null?void 0:Fo.docs)==null?void 0:zo.source}}};var Io,_o,Ro;we.parameters={...we.parameters,docs:{...(Io=we.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Ro=(_o=we.parameters)==null?void 0:_o.docs)==null?void 0:Ro.source}}};var Oo,Eo,Vo;je.parameters={...je.parameters,docs:{...(Oo=je.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
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
}`,...(Vo=(Eo=je.parameters)==null?void 0:Eo.docs)==null?void 0:Vo.source}}};const xs=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{xs as __namedExportsOrder,$ as basic,we as customControl,ge as customEyeDropperIcon,ks as default,ne as disabledAllowInput,de as disabledChannel,pe as disabledEyeDropper,ie as disabledPicker,ue as disabledSwatch,me as enabledColorPickerEyeDropper,he as enabledResult,ke as isDisabled,xe as isReadonly,je as reactHookForm,fe as withBorderColor,Z as withChildren,ce as withCloseOnSelectSwatch,re as withColorSelectorSize,X as withDefaultColor,q as withDefaultValue,Se as withDuration,J as withFallbackValue,ae as withFormat,se as withFormatInput,Pe as withGutter,be as withOffset,Ce as withPlacement,ee as withSize,le as withSwatches,te as withSwatchesColumns,oe as withVariant};
