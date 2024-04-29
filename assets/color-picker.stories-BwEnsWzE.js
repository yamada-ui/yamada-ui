import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as Ko,f as Go}from"./fontawesome-icon-qLXu_gHn.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as Uo,C as Wo}from"./index.esm-BkhIekwp.js";import{u as Yo,C as Zo,E as qo}from"./color-selector-BjRmZMDZ.js";import{C as Jo}from"./color-swatch-DligKk_r.js";import{u as Qo}from"./index-DEC9cry9.js";import{u as Xo}from"./index-m_mncMBS.js";import{u as $o}from"./index-Ce5pLeDf.js";import{u as ea,g as ra,F as Oe}from"./form-control-UYY1zi4-.js";import{p as oa,P as aa,a as sa,b as la}from"./popover-content-WzgJs_27.js";import{k as ta,R as ca,Z as na,_ as ia,B as Bo,a3 as da,S as ua,e as Ze,a as qe,h as w,x as Je,u as ye,c as ve,s as pa,g as ma}from"./factory-C06z1xU-.js";import{d as ha,c as Qe,o as fa}from"./theme-provider-CvYGGDsf.js";import{P as Ca}from"./container-portal-BBLTjt9V.js";import{f as De}from"./forward-ref-DuAegr0M.js";import{a as ba}from"./use-component-style-CZ1o4dYw.js";import{B as Re}from"./button-Bx4P0CJP.js";import{V as Pa}from"./stack-PKnyx2CQ.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-CyBNnypl.js";import"./index-wE-5yW0t.js";import"./icon-button-etIwMzWf.js";import"./alpha-slider-zshwgYTO.js";import"./use-color-slider-BgBJ8W_t.js";import"./index-CVS1BtgT.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-B92lwGJf.js";import"./input-COQDrFWV.js";import"./saturation-slider-DA6VVTeL.js";import"./index-DWI-gbI8.js";import"./index-rYLD436_.js";import"./index-dOiiHaRb.js";import"./index-Dv3jTNze.js";import"./index-DJUiO7A8.js";import"./index-K9dgHeEC.js";import"./index-DLCjGraH.js";import"./motion-JgkBPv6g.js";import"./slide-fade-BpU2SDOY.js";import"./index-_tcQm2Fk.js";import"./motion-CogyOzDV.js";import"./utils-CK4Vuz3E.js";import"./scale-fade-Db1JbvCk.js";import"./close-button-CQgmrLu1.js";import"./use-ripple-CjJeY8ag.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./loading-lRr_nN3q.js";const[Sa,Ee]=ta({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),ka=({value:l,defaultValue:d,fallbackValue:i,defaultColor:n,onChange:m,onChangeStart:h,onChangeEnd:u,onSwatchClick:C,formatInput:f=b=>b,closeOnBlur:D=!0,closeOnEsc:O=!0,placement:z="bottom-start",duration:E=.2,isOpen:Fe,defaultIsOpen:ze,onOpen:Ie,onClose:_e,allowInput:F=!0,closeOnSelectSwatch:B,format:j,swatchesLabel:V,swatches:N,swatchesColumns:M,withPicker:H,withChannel:L,withResult:T=!1,withColorSelectorEyeDropper:A=!1,colorSelectorVariant:K,colorSelectorSize:I,colorSelectorColorScheme:G,...p})=>{p=ea(p);const b=ca(p,ra({omit:["aria-readonly"]})),{disabled:x,readOnly:g}=b,[U,W]=na(Bo(p,[...oa]),ia),_=s.useRef(null),Vo=s.useRef(null),{supported:No,onOpen:Be}=Yo(),[P,y]=Qo({value:l,defaultValue:d,onChange:m}),R=s.useRef(j??ha(P??n??"")),Y=s.useRef(!1),[Ve,v]=s.useState(P??""),{isOpen:c,onOpen:Ne,onClose:Me}=Xo({isOpen:Fe,defaultIsOpen:ze,onOpen:Ie,onClose:_e}),He=I==="full",S=s.useCallback(()=>{x||g||Ne()},[Ne,x,g]),k=s.useCallback(()=>{if(!c)return;const o=Qe(P,i)(R.current);y(t=>!o||t===o?t:o),v(f(o??"")),Me()},[R,c,y,Me,P,f,v,i]),Le=s.useCallback(()=>{c||S()},[c,S]),Te=s.useCallback(()=>{Y.current=!0,!c&&S()},[c,S]),Ae=s.useCallback(()=>{Y.current=!1},[]),Ke=s.useCallback(o=>{const t=da(o);ua(_.current,t)||D&&c&&k()},[D,c,k]),Ge=s.useCallback(o=>{if(o.key===" "&&(o.key=o.code),x||g)return;const Ye={Space:c?void 0:S,Enter:c?void 0:S,Escape:O?k:void 0}[o.key];Ye&&(o.preventDefault(),o.stopPropagation(),Ye())},[x,g,c,S,O,k]),Ue=s.useCallback(o=>{const t=o.target.value;v(f(t)),y(t)},[v,f,y]),Z=s.useCallback(o=>{y(o),setTimeout(()=>{Y.current||v(f(o))})},[y,f]),We=s.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:t}=await Be()??{};if(!t)return;Z(t),u==null||u(t)}catch{}},[Be,Z,u]);$o({ref:_,handler:k,enabled:c&&D}),Ze(()=>{if(!j||!P)return;R.current=j;const o=Qe(P,i)(j);o&&(v(f(o)),y(o))},[j]),Ze(()=>{Y.current||!l||v(f(l))},[l]);const Mo=s.useCallback(o=>({matchWidth:He,...p,...o,isOpen:c,onOpen:S,onClose:k,placement:z,duration:E,trigger:"never",closeOnButton:!1}),[He,E,k,S,z,p,c]),Ho=s.useCallback((o={},t=null)=>({ref:qe(_,t),...U,...o,...b,onClick:w(o.onClick,p.onClick,Le),onBlur:w(o.onBlur,p.onBlur,Ke)}),[U,b,Ke,Le,p]),Lo=s.useCallback((o={},t=null)=>({ref:qe(Vo,t),tabIndex:F?0:-1,...W,...o,style:{...o.style,...F?{}:{pointerEvents:"none"}},value:Ve,"data-active":Je(c),"aria-expanded":Je(c),onFocus:w(o.onFocus,p.onFocus,Te),onKeyDown:w(o.onKeyDown,p.onKeyDown,Ge),onChange:w(o.onChange,Ue),onBlur:w(o.onFocus,Ae)}),[F,W,Ve,c,p,Te,Ge,Ue,Ae]),To=s.useCallback((o={},t=null)=>({disabled:x,"aria-label":"Pick a color",...o,ref:t,style:{...o.style,pointerEvents:g?"none":void 0},onClick:w(o.onClick,We)}),[x,We,g]),Ao=s.useCallback(o=>({...b,...o,value:P,defaultValue:n,fallbackValue:i,onChange:Z,onChangeStart:h,onChangeEnd:u,onSwatchClick:w(C,B?k:void 0),format:R.current,withPicker:H,withChannel:L,withResult:T,withEyeDropper:A,swatchesLabel:V,swatches:N,swatchesColumns:M,variant:K,size:I,colorScheme:G}),[b,P,i,n,Z,h,u,C,k,B,R,H,L,T,A,V,N,M,G,I,K]);return{value:P,eyeDropperSupported:No,allowInput:F,getPopoverProps:Mo,getContainerProps:Ho,getFieldProps:Lo,getSelectorProps:Ao,getEyeDropperProps:To}},r=De(({withSwatch:l=!0,...d},i)=>{const[n,m]=ba("ColorPicker",{withSwatch:l,...d});let{className:h,children:u,withEyeDropper:C=!0,color:f,h:D,height:O,minH:z,minHeight:E,containerProps:Fe,inputProps:ze,swatchProps:Ie,eyeDropperProps:_e,saturationSliderRef:F,saturationSliderProps:B,swatchesProps:j,hueSliderRef:V,hueSliderProps:N,alphaSliderRef:M,alphaSliderProps:H,channelsProps:L,channelProps:T,portalProps:A={isDisabled:!0},...K}=fa(Bo(m,["withSwatch"]));const{allowInput:I,eyeDropperSupported:G,getPopoverProps:p,getContainerProps:b,getFieldProps:x,getSelectorProps:g,getEyeDropperProps:U,...W}=ka(K);D??(D=O),z??(z=E);const _={w:"100%",h:"fit-content",color:f,...n.container};return e.jsx(Sa,{value:{styles:n,...W},children:e.jsx(aa,{...p(),children:e.jsxs(ye.div,{className:ve("ui-color-picker",h),__css:_,...b(Fe),children:[e.jsxs(ye.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:I?void 0:"pointer",...n.inner},children:[l?e.jsx(ga,{...Ie}):null,e.jsx(sa,{children:e.jsx(xa,{h:D,minH:z,...x(ze,i)})}),G&&C?e.jsx(wa,{...U(_e)}):null]}),e.jsx(Ca,{...A,children:e.jsx(la,{className:"ui-color-picker__popover",__css:{...n.list},children:e.jsx(Zo,{className:"ui-color-picker__picker",...g({saturationSliderRef:F,saturationSliderProps:B,swatchesProps:j,hueSliderRef:V,hueSliderProps:N,alphaSliderRef:M,alphaSliderProps:H,channelsProps:L,channelProps:T}),children:u})})})]})})})}),xa=De(({className:l,h:d,minH:i,...n},m)=>{const{styles:h}=Ee(),u={ps:"2rem",pe:"2rem",h:d,minH:i,display:"flex",alignItems:"center",...h.field};return e.jsx(ye.input,{ref:m,className:ve("ui-color-picker__field",l),__css:u,...n})}),ga=De(({className:l,...d},i)=>{const{value:n,styles:m}=Ee(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...m.swatch};return e.jsx(Jo,{ref:i,className:ve("ui-color-picker__swatch",l),__css:h,color:n,isRounded:!0,...d})}),wa=De(({className:l,children:d,...i},n)=>{const{styles:m}=Ee(),h={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...m.eyeDropper},C=pa(d).map(f=>s.cloneElement(f,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(ye.button,{ref:n,className:ve("ui-color-picker__eye-dropper",l),__css:h,...i,children:ma(d)?C:e.jsx(qo,{className:"ui-color-picker__eye-dropper__icon"})})}),Ss={title:"Components / Forms / ColorPicker",component:r},a="#4387f4",q=()=>e.jsx(r,{placeholder:a}),J=()=>e.jsx(r,{placeholder:a,defaultValue:"#4387f4ff"}),Q=()=>e.jsx(r,{placeholder:a,fallbackValue:"#000000"}),X=()=>e.jsx(r,{placeholder:a,defaultColor:"#4387f4ff"}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Re,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:l})=>e.jsxs(Re,{children:["Submit ",l]})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),ae=()=>e.jsx(r,{placeholder:"hsla(240, 100%, 50%, 1)",defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:l=>l.toUpperCase()}),le=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),te=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),ce=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ne=()=>e.jsx(r,{placeholder:a,allowInput:!1}),ie=()=>e.jsx(r,{placeholder:a,withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),de=()=>e.jsx(r,{placeholder:a,withChannel:!1}),ue=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),pe=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),me=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),he=()=>e.jsx(r,{placeholder:a,withResult:!0}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),Ce=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),be=()=>e.jsx(r,{placeholder:a,offset:[16,16]}),Pe=()=>e.jsx(r,{placeholder:a,gutter:32}),Se=()=>e.jsx(r,{placeholder:a,duration:.4}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isDisabled:!0}),e.jsx(Oe,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isReadOnly:!0}),e.jsx(Oe,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"},placeholder:a}),e.jsx(r,{eyeDropperProps:{children:e.jsx(Ko,{icon:Go})},placeholder:a})]}),we=()=>{const[l,d]=s.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:l,onChange:d})},je=()=>{var u;const l={colorInput:"#4387f4ff"},{control:d,handleSubmit:i,watch:n,formState:{errors:m}}=Uo({defaultValues:l}),h=C=>console.log("submit:",C);return console.log("watch:",n()),e.jsxs(Pa,{as:"form",onSubmit:i(h),children:[e.jsx(Oe,{isInvalid:!!m.colorInput,label:"Pick color",errorMessage:(u=m.colorInput)==null?void 0:u.message,children:e.jsx(Wo,{name:"colorInput",control:d,render:({field:C})=>e.jsx(r,{...C})})}),e.jsx(Re,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Xe,$e,er;q.parameters={...q.parameters,docs:{...(Xe=q.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(er=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};var rr,or,ar;J.parameters={...J.parameters,docs:{...(rr=J.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultValue="#4387f4ff" />;
}`,...(ar=(or=J.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var sr,lr,tr;Q.parameters={...Q.parameters,docs:{...(sr=Q.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} fallbackValue="#000000" />;
}`,...(tr=(lr=Q.parameters)==null?void 0:lr.docs)==null?void 0:tr.source}}};var cr,nr,ir;X.parameters={...X.parameters,docs:{...(cr=X.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultColor="#4387f4ff" />;
}`,...(ir=(nr=X.parameters)==null?void 0:nr.docs)==null?void 0:ir.source}}};var dr,ur,pr;$.parameters={...$.parameters,docs:{...(dr=$.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
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
}`,...(pr=(ur=$.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var mr,hr,fr;ee.parameters={...ee.parameters,docs:{...(mr=ee.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
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
}`,...(Ir=(zr=le.parameters)==null?void 0:zr.docs)==null?void 0:Ir.source}}};var _r,Rr,Or;te.parameters={...te.parameters,docs:{...(_r=te.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Or=(Rr=te.parameters)==null?void 0:Rr.docs)==null?void 0:Or.source}}};var Er,Br,Vr;ce.parameters={...ce.parameters,docs:{...(Er=ce.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Vr=(Br=ce.parameters)==null?void 0:Br.docs)==null?void 0:Vr.source}}};var Nr,Mr,Hr;ne.parameters={...ne.parameters,docs:{...(Nr=ne.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} allowInput={false} />;
}`,...(Hr=(Mr=ne.parameters)==null?void 0:Mr.docs)==null?void 0:Hr.source}}};var Lr,Tr,Ar;ie.parameters={...ie.parameters,docs:{...(Lr=ie.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Ar=(Tr=ie.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Kr,Gr,Ur;de.parameters={...de.parameters,docs:{...(Kr=de.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(Ur=(Gr=de.parameters)==null?void 0:Gr.docs)==null?void 0:Ur.source}}};var Wr,Yr,Zr;ue.parameters={...ue.parameters,docs:{...(Wr=ue.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(Zr=(Yr=ue.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var qr,Jr,Qr;pe.parameters={...pe.parameters,docs:{...(qr=pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(Qr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Xr,$r,eo;me.parameters={...me.parameters,docs:{...(Xr=me.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(eo=($r=me.parameters)==null?void 0:$r.docs)==null?void 0:eo.source}}};var ro,oo,ao;he.parameters={...he.parameters,docs:{...(ro=he.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
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
}`,...(_o=(Io=we.parameters)==null?void 0:Io.docs)==null?void 0:_o.source}}};var Ro,Oo,Eo;je.parameters={...je.parameters,docs:{...(Ro=je.parameters)==null?void 0:Ro.docs,source:{originalSource:`() => {
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
}`,...(Eo=(Oo=je.parameters)==null?void 0:Oo.docs)==null?void 0:Eo.source}}};const ks=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{ks as __namedExportsOrder,q as basic,we as customControl,ge as customEyeDropperIcon,Ss as default,ne as disabledAllowInput,de as disabledChannel,pe as disabledEyeDropper,ie as disabledPicker,ue as disabledSwatch,me as enabledColorPickerEyeDropper,he as enabledResult,ke as isDisabled,xe as isReadonly,je as reactHookForm,fe as withBorderColor,$ as withChildren,ce as withCloseOnSelectSwatch,re as withColorSelectorSize,X as withDefaultColor,J as withDefaultValue,Se as withDuration,Q as withFallbackValue,ae as withFormat,se as withFormatInput,Pe as withGutter,be as withOffset,Ce as withPlacement,ee as withSize,le as withSwatches,te as withSwatchesColumns,oe as withVariant};
