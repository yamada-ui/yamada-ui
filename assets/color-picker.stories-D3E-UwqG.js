import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{u as Ao,C as Ko}from"./index.esm-CMZNHfZV.js";import{u as Uo,C as Wo,E as Yo}from"./color-selector-DlXyeXix.js";import{C as qo}from"./color-swatch-CuFLfkLd.js";import{u as Jo}from"./index-B5K7Amiu.js";import{u as Qo}from"./index-6iPGEe4i.js";import{u as Xo}from"./index-qTz9fmf8.js";import{u as Zo,f as $o,F as Be}from"./form-control-3r7D-N3m.js";import{p as ea,P as ra,a as oa,b as aa}from"./popover-content-ClRYcrsN.js";import{l as sa,T as la,a1 as ta,a2 as ca,R as na,a9 as ia,U as da,f as Qe,a as Xe,h as g,d as Ze,b as ve,c as De,B as ua,t as pa,j as ma}from"./factory-CJEIqePD.js";import{d as ha,c as $e,o as fa}from"./theme-provider-BmJ-9UWz.js";import{P as Ca}from"./container-portal-HerNt1yQ.js";import{f as Fe}from"./forward-ref-BmTAT9U5.js";import{a as ba}from"./use-component-style-p12qS94K.js";import{B as Ee}from"./button-BDKzZ-bK.js";import{G as Pa}from"./ghost-COjhZQGo.js";import{V as Sa}from"./stack-ByAleKXq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-BiibFHkz.js";import"./icon-D5_Yzct7.js";import"./index-f0vfX_rP.js";import"./alpha-slider-DyzM2QoL.js";import"./use-color-slider-Coz6BFNj.js";import"./index-Bm3tH3yA.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-COyj-133.js";import"./input-BM0gu0T3.js";import"./saturation-slider-J9BFKqb_.js";import"./index-8NJL_rSX.js";import"./index-Du0-7Fls.js";import"./index-CwsNPHBe.js";import"./index-CSwBjuih.js";import"./index-Dg-m_leh.js";import"./index-DAi4bgxS.js";import"./index-mdpvRLjT.js";import"./motion-C535EKyX.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-BMCVwM0D.js";import"./index-Ms_xn5rh.js";import"./utils-C0ha9mnk.js";import"./scale-fade-BIJ1WRrF.js";import"./close-button-1ErNEcA0.js";import"./use-ripple-CiehlBDG.js";import"./extends-CF3RwP-h.js";import"./index-DxjWwZXO.js";import"./loading-CbCkpXHC.js";import"./lucide-icon-CG6DGrms.js";const[ka,Ve]=sa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),xa=({value:l,defaultValue:n,fallbackValue:d,defaultColor:i,onChange:m,onChangeStart:h,onChangeEnd:u,onSwatchClick:C,formatInput:f=U=>U,closeOnBlur:D=!0,closeOnEsc:O=!0,placement:_="bottom-start",duration:E=.2,isOpen:ze,defaultIsOpen:_e,onOpen:Ie,onClose:Re,allowInput:F=!0,closeOnSelectSwatch:B,format:w,swatchesLabel:V,swatches:N,swatchesColumns:M,withPicker:H,withChannel:L,withResult:G=!1,withColorSelectorEyeDropper:T=!1,colorSelectorVariant:A,colorSelectorSize:z,colorSelectorColorScheme:K,...p})=>{p=Zo(p);const{"aria-readonly":U,...j}=la(p,$o),{disabled:k,readOnly:x}=j,[W,Y]=ta(na(p,[...ea]),ca),I=s.useRef(null),Oe=s.useRef(null),{supported:No,onOpen:Ne}=Uo(),[P,y]=Jo({value:l,defaultValue:n,onChange:m}),R=s.useRef(w??ha(P??i??"")),q=s.useRef(!1),[Me,v]=s.useState(P??""),{isOpen:c,onOpen:He,onClose:Le}=Qo({isOpen:ze,defaultIsOpen:_e,onOpen:Ie,onClose:Re}),Ge=z==="full",S=s.useCallback(()=>{k||x||He()},[He,k,x]),b=s.useCallback(()=>{if(!c)return;const o=$e(P,d)(R.current);y(t=>!o||t===o?t:o),v(f(o??"")),Le()},[R,c,y,Le,P,f,v,d]),Te=s.useCallback(()=>{c||S()},[c,S]),Ae=s.useCallback(()=>{q.current=!0,!c&&S()},[c,S]),Ke=s.useCallback(()=>{q.current=!1},[]),Ue=s.useCallback(o=>{const t=ia(o);da(I.current,t)||D&&c&&b()},[D,c,b]),We=s.useCallback(o=>{if(o.key===" "&&(o.key=o.code),k||x)return;const Je={Space:c?void 0:S,Enter:c?void 0:S,Escape:O?b:void 0}[o.key];Je&&(o.preventDefault(),o.stopPropagation(),Je())},[k,x,c,S,O,b]),Ye=s.useCallback(o=>{const t=o.target.value;v(f(t)),y(t)},[v,f,y]),J=s.useCallback(o=>{y(o),setTimeout(()=>{q.current||v(f(o))})},[y,f]),qe=s.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:t}=await Ne()??{};if(!t)return;J(t),u==null||u(t)}catch{}},[Ne,J,u]);Xo({ref:I,handler:b,enabled:c&&D}),Qe(()=>{if(!w||!P)return;R.current=w;const o=$e(P,d)(w);o&&(v(f(o)),y(o))},[w]),Qe(()=>{q.current||!l||v(f(l))},[l]);const Mo=s.useCallback(o=>({matchWidth:Ge,...p,...o,isOpen:c,onOpen:S,onClose:b,placement:_,duration:E,trigger:"never",closeOnButton:!1}),[Ge,E,b,S,_,p,c]),Ho=s.useCallback((o={},t=null)=>({ref:Xe(I,t),...W,...o,...j,onClick:g(o.onClick,p.onClick,Te),onBlur:g(o.onBlur,p.onBlur,Ue)}),[W,j,Ue,Te,p]),Lo=s.useCallback((o={},t=null)=>({ref:Xe(Oe,t),tabIndex:F?0:-1,...Y,...o,style:{...o.style,...F?{}:{pointerEvents:"none"}},value:Me,"data-active":Ze(c),"aria-expanded":Ze(c),onFocus:g(o.onFocus,p.onFocus,Ae),onKeyDown:g(o.onKeyDown,p.onKeyDown,We),onChange:g(o.onChange,Ye),onBlur:g(o.onFocus,Ke)}),[F,Y,Me,c,p,Ae,We,Ye,Ke]),Go=s.useCallback((o={},t=null)=>({disabled:k,"aria-label":"Pick a color",...o,ref:t,style:{...o.style,pointerEvents:x?"none":void 0},onClick:g(o.onClick,qe)}),[k,qe,x]),To=s.useCallback(o=>({...j,...o,value:P,defaultValue:i,fallbackValue:d,onChange:J,onChangeStart:h,onChangeEnd:u,onSwatchClick:g(C,B?b:void 0),format:R.current,withPicker:H,withChannel:L,withResult:G,withEyeDropper:T,swatchesLabel:V,swatches:N,swatchesColumns:M,variant:A,size:z,colorScheme:K}),[j,P,d,i,J,h,u,C,b,B,R,H,L,G,T,V,N,M,K,z,A]);return{value:P,eyeDropperSupported:No,allowInput:F,onClose:b,getPopoverProps:Mo,getContainerProps:Ho,getFieldProps:Lo,getSelectorProps:To,getEyeDropperProps:Go}},r=Fe(({withSwatch:l=!0,...n},d)=>{const[i,m]=ba("ColorPicker",{withSwatch:l,...n});let{className:h,children:u,withEyeDropper:C=!0,color:f,h:D,height:O,minH:_,minHeight:E,containerProps:ze,inputProps:_e,swatchProps:Ie,eyeDropperProps:Re,saturationSliderRef:F,saturationSliderProps:B,swatchesProps:w,hueSliderRef:V,hueSliderProps:N,alphaSliderRef:M,alphaSliderProps:H,channelsProps:L,channelProps:G,portalProps:T={isDisabled:!0},...A}=fa(m,["withSwatch"]);const{value:z,allowInput:K,eyeDropperSupported:p,getPopoverProps:U,getContainerProps:j,getFieldProps:k,getSelectorProps:x,getEyeDropperProps:W,onClose:Y,...I}=xa(A);D??(D=O),_??(_=E);const Oe={w:"100%",h:"fit-content",color:f,...i.container};return e.jsx(ka,{value:{styles:i,value:z,...I},children:e.jsx(ra,{...U(),children:e.jsxs(ve.div,{className:De("ui-color-picker",h),__css:Oe,...j(ze),children:[e.jsxs(ve.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:K?void 0:"pointer",...i.inner},children:[l?e.jsx(wa,{...Ie}):null,e.jsx(oa,{children:e.jsx(ga,{h:D,minH:_,...k(_e,d)})}),p&&C?e.jsx(ja,{...W(Re)}):null]}),e.jsx(Ca,{...T,children:e.jsx(aa,{className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(Wo,{className:"ui-color-picker__picker",...x({saturationSliderRef:F,saturationSliderProps:B,swatchesProps:w,hueSliderRef:V,hueSliderProps:N,alphaSliderRef:M,alphaSliderProps:H,channelsProps:L,channelProps:G}),children:ua(u,{value:z,onClose:Y})})})})]})})})}),ga=Fe(({className:l,h:n,minH:d,...i},m)=>{const{styles:h}=Ve(),u={ps:"2rem",pe:"2rem",h:n,minH:d,display:"flex",alignItems:"center",...h.field};return e.jsx(ve.input,{ref:m,className:De("ui-color-picker__field",l),__css:u,...i})}),wa=Fe(({className:l,...n},d)=>{const{value:i,styles:m}=Ve(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...m.swatch};return e.jsx(qo,{ref:d,className:De("ui-color-picker__swatch",l),__css:h,color:i,isRounded:!0,...n})}),ja=Fe(({className:l,children:n,...d},i)=>{const{styles:m}=Ve(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...m.eyeDropper},C=pa(n).map(f=>s.cloneElement(f,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(ve.button,{ref:i,className:De("ui-color-picker__eye-dropper",l),__css:h,...d,children:ma(n)?C:e.jsx(Yo,{className:"ui-color-picker__eye-dropper__icon"})})}),ks={title:"Components / Forms / ColorPicker",component:r},a="#4387f4",Q=()=>e.jsx(r,{placeholder:a}),X=()=>e.jsx(r,{placeholder:a,defaultValue:"#4387f4ff"}),Z=()=>e.jsx(r,{placeholder:a,fallbackValue:"#000000"}),$=()=>e.jsx(r,{placeholder:a,defaultColor:"#4387f4ff"}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ee,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:l,onClose:n})=>e.jsxs(Ee,{onClick:n,children:["Submit ",l]})})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),se=()=>e.jsx(r,{placeholder:"hsla(240, 100%, 50%, 1)",defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),le=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:l=>l.toUpperCase()}),te=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ce=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ne=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ie=()=>e.jsx(r,{placeholder:a,allowInput:!1}),de=()=>e.jsx(r,{placeholder:a,withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ue=()=>e.jsx(r,{placeholder:a,withChannel:!1}),pe=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),me=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),he=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),fe=()=>e.jsx(r,{placeholder:a,withResult:!0}),Ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),be=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),Pe=()=>e.jsx(r,{placeholder:a,offset:[16,16]}),Se=()=>e.jsx(r,{placeholder:a,gutter:32}),ke=()=>e.jsx(r,{placeholder:a,duration:.4}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isDisabled:!0}),e.jsx(Be,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isReadOnly:!0}),e.jsx(Be,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),we=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"},placeholder:a}),e.jsx(r,{eyeDropperProps:{children:e.jsx(Pa,{fontSize:"lg"})},placeholder:a})]}),je=()=>{const[l,n]=s.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:l,onChange:n})},ye=()=>{var u;const l={colorInput:"#4387f4ff"},{control:n,handleSubmit:d,watch:i,formState:{errors:m}}=Ao({defaultValues:l}),h=C=>console.log("submit:",C);return console.log("watch:",i()),e.jsxs(Sa,{as:"form",onSubmit:d(h),children:[e.jsx(Be,{isInvalid:!!m.colorInput,label:"Pick color",errorMessage:(u=m.colorInput)==null?void 0:u.message,children:e.jsx(Ko,{name:"colorInput",control:n,render:({field:C})=>e.jsx(r,{...C})})}),e.jsx(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var er,rr,or;Q.parameters={...Q.parameters,docs:{...(er=Q.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(or=(rr=Q.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var ar,sr,lr;X.parameters={...X.parameters,docs:{...(ar=X.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultValue="#4387f4ff" />;
}`,...(lr=(sr=X.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var tr,cr,nr;Z.parameters={...Z.parameters,docs:{...(tr=Z.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} fallbackValue="#000000" />;
}`,...(nr=(cr=Z.parameters)==null?void 0:cr.docs)==null?void 0:nr.source}}};var ir,dr,ur;$.parameters={...$.parameters,docs:{...(ir=$.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultColor="#4387f4ff" />;
}`,...(ur=(dr=$.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var pr,mr,hr;ee.parameters={...ee.parameters,docs:{...(pr=ee.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder}>
        <Button>Submit</Button>
      </ColorPicker>

      <ColorPicker placeholder={defaultPlaceholder}>
        {({
        value,
        onClose
      }) => <Button onClick={onClose}>Submit {value}</Button>}
      </ColorPicker>
    </>;
}`,...(hr=(mr=ee.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var fr,Cr,br;re.parameters={...re.parameters,docs:{...(fr=re.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(br=(Cr=re.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var Pr,Sr,kr;oe.parameters={...oe.parameters,docs:{...(Pr=oe.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(kr=(Sr=oe.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var xr,gr,wr;ae.parameters={...ae.parameters,docs:{...(xr=ae.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(wr=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var jr,yr,vr;se.parameters={...se.parameters,docs:{...(jr=se.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="hsla(240, 100%, 50%, 1)" defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(vr=(yr=se.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var Dr,Fr,zr;le.parameters={...le.parameters,docs:{...(Dr=le.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(zr=(Fr=le.parameters)==null?void 0:Fr.docs)==null?void 0:zr.source}}};var _r,Ir,Rr;te.parameters={...te.parameters,docs:{...(_r=te.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Rr=(Ir=te.parameters)==null?void 0:Ir.docs)==null?void 0:Rr.source}}};var Or,Er,Br;ce.parameters={...ce.parameters,docs:{...(Or=ce.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Br=(Er=ce.parameters)==null?void 0:Er.docs)==null?void 0:Br.source}}};var Vr,Nr,Mr;ne.parameters={...ne.parameters,docs:{...(Vr=ne.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Mr=(Nr=ne.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var Hr,Lr,Gr;ie.parameters={...ie.parameters,docs:{...(Hr=ie.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} allowInput={false} />;
}`,...(Gr=(Lr=ie.parameters)==null?void 0:Lr.docs)==null?void 0:Gr.source}}};var Tr,Ar,Kr;de.parameters={...de.parameters,docs:{...(Tr=de.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Kr=(Ar=de.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Ur,Wr,Yr;ue.parameters={...ue.parameters,docs:{...(Ur=ue.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(Yr=(Wr=ue.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var qr,Jr,Qr;pe.parameters={...pe.parameters,docs:{...(qr=pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(Qr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;me.parameters={...me.parameters,docs:{...(Xr=me.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...($r=(Zr=me.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var eo,ro,oo;he.parameters={...he.parameters,docs:{...(eo=he.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(oo=(ro=he.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,so,lo;fe.parameters={...fe.parameters,docs:{...(ao=fe.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(lo=(so=fe.parameters)==null?void 0:so.docs)==null?void 0:lo.source}}};var to,co,no;Ce.parameters={...Ce.parameters,docs:{...(to=Ce.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(no=(co=Ce.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;be.parameters={...be.parameters,docs:{...(io=be.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(po=(uo=be.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;Pe.parameters={...Pe.parameters,docs:{...(mo=Pe.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} offset={[16, 16]} />;
}`,...(fo=(ho=Pe.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,bo,Po;Se.parameters={...Se.parameters,docs:{...(Co=Se.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} gutter={32} />;
}`,...(Po=(bo=Se.parameters)==null?void 0:bo.docs)==null?void 0:Po.source}}};var So,ko,xo;ke.parameters={...ke.parameters,docs:{...(So=ke.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} duration={0.4} />;
}`,...(xo=(ko=ke.parameters)==null?void 0:ko.docs)==null?void 0:xo.source}}};var go,wo,jo;xe.parameters={...xe.parameters,docs:{...(go=xe.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(jo=(wo=xe.parameters)==null?void 0:wo.docs)==null?void 0:jo.source}}};var yo,vo,Do;ge.parameters={...ge.parameters,docs:{...(yo=ge.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Do=(vo=ge.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var Fo,zo,_o;we.parameters={...we.parameters,docs:{...(Fo=we.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} placeholder={defaultPlaceholder} />
      <ColorPicker eyeDropperProps={{
      children: <Ghost fontSize="lg" />
    }} placeholder={defaultPlaceholder} />
    </>;
}`,...(_o=(zo=we.parameters)==null?void 0:zo.docs)==null?void 0:_o.source}}};var Io,Ro,Oo;je.parameters={...je.parameters,docs:{...(Io=je.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Oo=(Ro=je.parameters)==null?void 0:Ro.docs)==null?void 0:Oo.source}}};var Eo,Bo,Vo;ye.parameters={...ye.parameters,docs:{...(Eo=ye.parameters)==null?void 0:Eo.docs,source:{originalSource:`() => {
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
}`,...(Vo=(Bo=ye.parameters)==null?void 0:Bo.docs)==null?void 0:Vo.source}}};const xs=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{xs as __namedExportsOrder,Q as basic,je as customControl,we as customEyeDropperIcon,ks as default,ie as disabledAllowInput,ue as disabledChannel,me as disabledEyeDropper,de as disabledPicker,pe as disabledSwatch,he as enabledColorPickerEyeDropper,fe as enabledResult,xe as isDisabled,ge as isReadonly,ye as reactHookForm,Ce as withBorderColor,ee as withChildren,ne as withCloseOnSelectSwatch,oe as withColorSelectorSize,$ as withDefaultColor,X as withDefaultValue,ke as withDuration,Z as withFallbackValue,se as withFormat,le as withFormatInput,Se as withGutter,Pe as withOffset,be as withPlacement,re as withSize,te as withSwatches,ce as withSwatchesColumns,ae as withVariant};
