import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as l}from"./index-BwPxMuoB.js";import{u as pa,C as ma}from"./index.esm-C038jXrr.js";import{u as ha,C as fa,E as Ca}from"./color-selector-DKa1Z_CI.js";import{C as Pa}from"./color-swatch-Dj1Vf32m.js";import{u as ba}from"./index-DCT-NtcY.js";import{u as Sa}from"./index-B2an25P7.js";import{u as ka}from"./index-BjpHvtnu.js";import{u as wa,f as ga,d as Ke}from"./form-control-DgcE1-oN.js";import{B as xa,a3 as ya,M as ja,ae as va,an as _a,a4 as Da,o as fr,h as g,a as Te,d as Cr,b as V,c as Ee,J as Fa,g as za,q as Ia}from"./factory-DbNU74ts.js";import{f as Oa,c as Pr,o as Ea}from"./theme-provider-ChqdwXGn.js";import{P as Va,b as Ba,a as Ra}from"./popover-trigger-Ddfu3ZQC.js";import{P as Na}from"./portal-DI5fdtXX.js";import{f as Ve}from"./forward-ref-Ukjd1cIW.js";import{a as La}from"./use-component-style-CpB_lyT3.js";import{B as Ae}from"./button-CqSjNDtY.js";import{G as Ma}from"./ghost-CVmvGRFY.js";import{V as Ha}from"./stack-BP8LKMVN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DA6sAAAm.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./alpha-slider-BJXtD05e.js";import"./use-color-slider-D1tp4wKo.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-usDqtSE5.js";import"./input-D8w53ljh.js";import"./saturation-slider-KU0gfs6W.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./slide-fade-1DMcLXoE.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-MIa0NvBw.js";import"./index-qZwaV1-B.js";import"./index-ZCRYeFYt.js";import"./index-tzU5ipaZ.js";import"./index-ZLyktLk6.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./loading-BVFohscl.js";import"./createLucideIcon-D0BTS2fX.js";const Ga=s=>s,[Ta,Ue]=xa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Aa=s=>{const{allowInput:t=!0,animation:d,boundary:i,closeDelay:p,closeOnBlur:u=!0,closeOnEsc:h=!0,closeOnSelectSwatch:m,colorSelectorColorScheme:_,colorSelectorSize:z,colorSelectorVariant:B,defaultColor:I,defaultIsOpen:Be,defaultOpen:Re,defaultValue:Ne,duration:R=.2,eventListeners:N,fallbackValue:x,flip:L,format:y,formatInput:f=Ga,gutter:M,isLazy:H,isOpen:Le,lazyBehavior:G,matchWidth:T=z==="full",modifiers:A,offset:K,open:Me,openDelay:U,placement:O="bottom-start",preventOverflow:W,strategy:Y,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:D,withChannel:X,withColorSelectorEyeDropper:Z=!1,withPicker:$,withResult:Je=!1,onChange:ra,onChangeEnd:F,onChangeStart:Qe,onClick:Xe,onClose:oa,onKeyDown:Ze,onOpen:aa,onSwatchClick:$e,...er}=wa(s),{"aria-readonly":Ka,onBlur:rr,onFocus:or,...b}=ya(er,ga),{disabled:C,readOnly:w}=b,[ar,He]=ja(er,va),Ge=l.useRef(null),la=l.useRef(null),{supported:ta,onOpen:lr}=ha(),[S,j]=ba({defaultValue:Ne,value:D,onChange:ra}),E=l.useRef(y??Oa(S||I||"")),ee=l.useRef(!1),[tr,v]=l.useState(S||""),{open:n,onClose:sr,onOpen:cr}=Sa({defaultIsOpen:Be,defaultOpen:Re,isOpen:Le,open:Me,onClose:oa,onOpen:aa}),k=l.useCallback(()=>{C||w||cr()},[cr,C,w]),P=l.useCallback(()=>{if(!n)return;const o=Pr(S,x)(E.current);j(c=>!o||c===o?c:o),v(f(o??"")),sr()},[E,n,j,sr,S,f,v,x]),nr=l.useCallback(()=>{n||k()},[n,k]),ir=l.useCallback(()=>{ee.current=!0,!n&&k()},[n,k]),ur=l.useCallback(()=>{ee.current=!1},[]),dr=l.useCallback(o=>{const c=_a(o);Da(Ge.current,c)||u&&n&&P()},[u,n,P]),pr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),C||w)return;const oe={Enter:n?void 0:k,Escape:h?P:void 0,Space:n?void 0:k}[o.key];oe&&(o.preventDefault(),o.stopPropagation(),oe())},[C,w,n,k,h,P]),mr=l.useCallback(o=>{const c=o.target.value;v(f(c)),j(c)},[v,f,j]),re=l.useCallback(o=>{j(o),setTimeout(()=>{ee.current||v(f(o))})},[j,f]),hr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:c}=await lr()??{};if(!c)return;re(c),F==null||F(c)}catch{}},[lr,re,F]);ka({ref:Ge,enabled:n&&u,handler:P}),fr(()=>{if(!y||!S)return;E.current=y;const o=Pr(S,x)(y);o&&(v(f(o)),j(o))},[y]),fr(()=>{ee.current||!D||v(f(D))},[D]);const sa=l.useCallback(o=>({animation:d,boundary:i,closeDelay:p,closeOnBlur:u,duration:R,eventListeners:N,flip:L,gutter:M,isLazy:H,lazyBehavior:G,matchWidth:T,modifiers:A,offset:K,openDelay:U,placement:O,preventOverflow:W,strategy:Y,...o,closeOnButton:!1,open:n,trigger:"never",onClose:P,onOpen:k}),[u,U,p,H,G,d,R,K,M,W,L,T,i,N,Y,O,A,n,k,P]),ca=l.useCallback((o={},c=null)=>({ref:Te(Ge,c),...ar,...o,...b,onBlur:g(o.onBlur,rr,dr),onClick:g(o.onClick,Xe,nr)}),[ar,b,rr,Xe,dr,nr]),na=l.useCallback((o={},c=null)=>({"aria-haspopup":"dialog","data-active":Cr(n),"data-not-allowed":Cr(!w&&!C&&!t),role:"combobox",tabIndex:-1,...b,...o,ref:Te(la,c),onBlur:g(o.onFocus,ur),onFocus:g(o.onFocus,or,ir),onKeyDown:g(o.onKeyDown,Ze,pr)}),[t,b,n,w,C,ur,or,ir,Ze,pr]),ia=l.useCallback((o={},c=null)=>{const oe={...o.style,...He.style,...C||!t?{pointerEvents:"none"}:{}};return{autoComplete:"off",tabIndex:t?0:-1,...b,...He,...o,ref:c,style:oe,value:tr,onChange:g(o.onChange,mr)}},[He,t,C,b,tr,mr]),ua=l.useCallback((o={},c=null)=>({"aria-label":"Pick a color",disabled:C,...o,ref:c,style:{...o.style,pointerEvents:w?"none":void 0},onClick:g(o.onClick,hr)}),[C,hr,w]),da=l.useCallback(o=>({...b,...o,colorScheme:_,size:z,variant:B,defaultValue:I,fallbackValue:x,format:E.current,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:S,withChannel:X,withEyeDropper:Z,withPicker:$,withResult:Je,onChange:re,onChangeEnd:F,onChangeStart:Qe,onSwatchClick:g($e,m?P:void 0)}),[b,S,x,I,re,Qe,F,$e,P,m,E,$,X,Je,Z,Q,q,J,_,z,B]);return{allowInput:t,eyeDropperSupported:ta,value:S,getContainerProps:ca,getEyeDropperProps:ua,getFieldProps:na,getInputProps:ia,getPopoverProps:sa,getSelectorProps:da,onClose:P}},r=Ve(({withSwatch:s=!0,...t},d)=>{const[i,p]=La("ColorPicker",{withSwatch:s,...t}),{className:u,alphaSliderRef:h,children:m,color:_,h:z,height:B=z,hueSliderRef:I,minH:Be,minHeight:Re=Be,saturationSliderRef:Ne,withEyeDropper:R=!0,alphaSliderProps:N,channelProps:x,channelsProps:L,containerProps:y,eyeDropperProps:f,fieldProps:M,hueSliderProps:H,inputProps:Le,portalProps:G={disabled:!0},saturationSliderProps:T,swatchesProps:A,swatchProps:K,...Me}=Ea(p,["withSwatch"]),{eyeDropperSupported:U,value:O,getContainerProps:W,getEyeDropperProps:Y,getFieldProps:q,getInputProps:J,getPopoverProps:Q,getSelectorProps:D,onClose:X,...Z}=Aa(Me),$={color:_,h:"fit-content",w:"100%",...i.container};return e.jsx(Ta,{value:{styles:i,value:O,...Z},children:e.jsx(Va,{...Q(),children:e.jsxs(V.div,{className:Ee("ui-color-picker",u),__css:$,...W(y),children:[e.jsxs(V.div,{className:"ui-color-picker__inner",__css:{position:"relative",...i.inner},children:[s?e.jsx(Ye,{...K}):null,e.jsx(We,{height:B,minHeight:Re,...q(M,d),inputProps:J(Le)}),U&&R?e.jsx(qe,{...Y(f)}):null]}),e.jsx(Na,{...G,children:e.jsx(Ba,{as:"div",className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(fa,{className:"ui-color-picker__picker",...D({alphaSliderRef:h,hueSliderRef:I,saturationSliderRef:Ne,alphaSliderProps:N,channelProps:x,channelsProps:L,hueSliderProps:H,saturationSliderProps:T,swatchesProps:A}),children:Fa(m,{value:O,onClose:X})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const We=Ve(({className:s,inputProps:t,...d},i)=>{const{styles:p}=Ue(),{ref:u,...h}=t??{},m={alignItems:"center",display:"flex",pe:"2rem",ps:"2rem",...p.field};return e.jsx(Ra,{children:e.jsx(V.div,{className:Ee("ui-color-picker__field",s),__css:m,...d,children:e.jsx(V.input,{ref:Te(i,u),className:"ui-color-picker-picker__field__input",display:"inline-block",w:"100%",...h})})})});We.displayName="ColorPickerField";We.__ui__="ColorPickerField";const Ye=Ve(({className:s,...t},d)=>{const{styles:i,value:p}=Ue(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...i.swatch};return e.jsx(Pa,{ref:d,className:Ee("ui-color-picker__swatch",s),color:p,isRounded:!0,__css:u,...t})});Ye.displayName="ColorPickerSwatch";Ye.__ui__="ColorPickerSwatch";const qe=Ve(({className:s,children:t,...d},i)=>{const{styles:p}=Ue(),u={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},m=za(t).map(_=>l.cloneElement(_,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(V.button,{ref:i,className:Ee("ui-color-picker__eye-dropper",s),__css:u,...d,children:Ia(t)?m:e.jsx(Ca,{className:"ui-color-picker__eye-dropper__icon"})})});qe.displayName="ColorPickerEyeDropper";qe.__ui__="ColorPickerEyeDropper";const Gl={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",ae=()=>e.jsx(r,{placeholder:a}),le=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),te=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),se=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ae,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:t})=>e.jsxs(Ae,{onClick:t,children:["Submit ",s]})})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),de=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),pe=()=>e.jsx(r,{formatInput:s=>s.toUpperCase(),placeholder:"#4387F4FF"}),me=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),he=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),fe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),Ce=()=>e.jsx(r,{allowInput:!1,placeholder:a}),Pe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),be=()=>e.jsx(r,{placeholder:a,withChannel:!1}),Se=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),ke=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),we=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),ge=()=>e.jsx(r,{placeholder:a,withResult:!0}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),ye=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),je=()=>e.jsx(r,{offset:[16,16],placeholder:a}),ve=()=>e.jsx(r,{gutter:32,placeholder:a}),_e=()=>e.jsx(r,{duration:.4,placeholder:a}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,placeholder:a}),e.jsx(Ke,{disabled:!0,helperMessage:"Please select your favorite color",label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,readOnly:!0}),e.jsx(Ke,{helperMessage:"Please select your favorite color",label:"Pick color",readOnly:!0,children:e.jsx(r,{placeholder:a})})]}),ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Ma,{fontSize:"lg"})}})]}),Ie=()=>{const[s,t]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:t})},Oe=()=>{var h;const s={colorInput:"#4387f4ff"},{control:t,formState:{errors:d},handleSubmit:i,watch:p}=pa({defaultValues:s}),u=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(Ha,{as:"form",onSubmit:i(u),children:[e.jsx(Ke,{errorMessage:(h=d.colorInput)==null?void 0:h.message,invalid:!!d.colorInput,label:"Pick color",children:e.jsx(ma,{name:"colorInput",control:t,render:({field:m})=>e.jsx(r,{...m})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var br,Sr,kr;ae.parameters={...ae.parameters,docs:{...(br=ae.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(kr=(Sr=ae.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var wr,gr,xr;le.parameters={...le.parameters,docs:{...(wr=le.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(xr=(gr=le.parameters)==null?void 0:gr.docs)==null?void 0:xr.source}}};var yr,jr,vr;te.parameters={...te.parameters,docs:{...(yr=te.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />;
}`,...(vr=(jr=te.parameters)==null?void 0:jr.docs)==null?void 0:vr.source}}};var _r,Dr,Fr;se.parameters={...se.parameters,docs:{...(_r=se.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(Fr=(Dr=se.parameters)==null?void 0:Dr.docs)==null?void 0:Fr.source}}};var zr,Ir,Or;ce.parameters={...ce.parameters,docs:{...(zr=ce.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Or=(Ir=ce.parameters)==null?void 0:Ir.docs)==null?void 0:Or.source}}};var Er,Vr,Br;ne.parameters={...ne.parameters,docs:{...(Er=ne.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(Br=(Vr=ne.parameters)==null?void 0:Vr.docs)==null?void 0:Br.source}}};var Rr,Nr,Lr;ie.parameters={...ie.parameters,docs:{...(Rr=ie.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker colorSelectorSize="sm" placeholder="small size" />
      <ColorPicker colorSelectorSize="md" placeholder="medium size" />
      <ColorPicker colorSelectorSize="lg" placeholder="large size" />
      <ColorPicker colorSelectorSize="full" placeholder="full size" />
    </>;
}`,...(Lr=(Nr=ie.parameters)==null?void 0:Nr.docs)==null?void 0:Lr.source}}};var Mr,Hr,Gr;ue.parameters={...ue.parameters,docs:{...(Mr=ue.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Gr=(Hr=ue.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Tr,Ar,Kr;de.parameters={...de.parameters,docs:{...(Tr=de.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" placeholder="hsla(240, 100%, 50%, 1)" />;
}`,...(Kr=(Ar=de.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Ur,Wr,Yr;pe.parameters={...pe.parameters,docs:{...(Ur=pe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} placeholder="#4387F4FF" />;
}`,...(Yr=(Wr=pe.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var qr,Jr,Qr;me.parameters={...me.parameters,docs:{...(qr=me.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(Qr=(Jr=me.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;he.parameters={...he.parameters,docs:{...(Xr=he.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...($r=(Zr=he.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var eo,ro,oo;fe.parameters={...fe.parameters,docs:{...(eo=fe.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(oo=(ro=fe.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,lo,to;Ce.parameters={...Ce.parameters,docs:{...(ao=Ce.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder={defaultPlaceholder} />;
}`,...(to=(lo=Ce.parameters)==null?void 0:lo.docs)==null?void 0:to.source}}};var so,co,no;Pe.parameters={...Pe.parameters,docs:{...(so=Pe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" withPicker={false} />;
}`,...(no=(co=Pe.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;be.parameters={...be.parameters,docs:{...(io=be.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(po=(uo=be.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;Se.parameters={...Se.parameters,docs:{...(mo=Se.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(fo=(ho=Se.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,Po,bo;ke.parameters={...ke.parameters,docs:{...(Co=ke.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(bo=(Po=ke.parameters)==null?void 0:Po.docs)==null?void 0:bo.source}}};var So,ko,wo;we.parameters={...we.parameters,docs:{...(So=we.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(wo=(ko=we.parameters)==null?void 0:ko.docs)==null?void 0:wo.source}}};var go,xo,yo;ge.parameters={...ge.parameters,docs:{...(go=ge.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(yo=(xo=ge.parameters)==null?void 0:xo.docs)==null?void 0:yo.source}}};var jo,vo,_o;xe.parameters={...xe.parameters,docs:{...(jo=xe.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(_o=(vo=xe.parameters)==null?void 0:vo.docs)==null?void 0:_o.source}}};var Do,Fo,zo;ye.parameters={...ye.parameters,docs:{...(Do=ye.parameters)==null?void 0:Do.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(zo=(Fo=ye.parameters)==null?void 0:Fo.docs)==null?void 0:zo.source}}};var Io,Oo,Eo;je.parameters={...je.parameters,docs:{...(Io=je.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />;
}`,...(Eo=(Oo=je.parameters)==null?void 0:Oo.docs)==null?void 0:Eo.source}}};var Vo,Bo,Ro;ve.parameters={...ve.parameters,docs:{...(Vo=ve.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(Ro=(Bo=ve.parameters)==null?void 0:Bo.docs)==null?void 0:Ro.source}}};var No,Lo,Mo;_e.parameters={..._e.parameters,docs:{...(No=_e.parameters)==null?void 0:No.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Mo=(Lo=_e.parameters)==null?void 0:Lo.docs)==null?void 0:Mo.source}}};var Ho,Go,To;De.parameters={...De.parameters,docs:{...(Ho=De.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker disabled placeholder={defaultPlaceholder} />

      <FormControl disabled helperMessage="Please select your favorite color" label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(To=(Go=De.parameters)==null?void 0:Go.docs)==null?void 0:To.source}}};var Ao,Ko,Uo;Fe.parameters={...Fe.parameters,docs:{...(Ao=Fe.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} readOnly />

      <FormControl helperMessage="Please select your favorite color" label="Pick color" readOnly>
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Uo=(Ko=Fe.parameters)==null?void 0:Ko.docs)==null?void 0:Uo.source}}};var Wo,Yo,qo;ze.parameters={...ze.parameters,docs:{...(Wo=ze.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <GhostIcon fontSize="lg" />
    }} />
    </>;
}`,...(qo=(Yo=ze.parameters)==null?void 0:Yo.docs)==null?void 0:qo.source}}};var Jo,Qo,Xo;Ie.parameters={...Ie.parameters,docs:{...(Jo=Ie.parameters)==null?void 0:Jo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Xo=(Qo=Ie.parameters)==null?void 0:Qo.docs)==null?void 0:Xo.source}}};var Zo,$o,ea;Oe.parameters={...Oe.parameters,docs:{...(Zo=Oe.parameters)==null?void 0:Zo.docs,source:{originalSource:`() => {
  interface Data {
    colorInput: string;
  }
  const defaultValues: Data = {
    colorInput: "#4387f4ff"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.colorInput?.message} invalid={!!errors.colorInput} label="Pick color">
        <Controller name="colorInput" control={control} render={({
        field
      }) => <ColorPicker {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ea=($o=Oe.parameters)==null?void 0:$o.docs)==null?void 0:ea.source}}};const Tl=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","disabled","readOnly","customEyeDropperIcon","customControl","reactHookForm"];export{Tl as __namedExportsOrder,ae as basic,Ie as customControl,ze as customEyeDropperIcon,Gl as default,De as disabled,Ce as disabledAllowInput,be as disabledChannel,ke as disabledEyeDropper,Pe as disabledPicker,Se as disabledSwatch,we as enabledColorPickerEyeDropper,ge as enabledResult,Oe as reactHookForm,Fe as readOnly,xe as withBorderColor,ce as withChildren,fe as withCloseOnSelectSwatch,ie as withColorSelectorSize,se as withDefaultColor,le as withDefaultValue,_e as withDuration,te as withFallbackValue,de as withFormat,pe as withFormatInput,ve as withGutter,je as withOffset,ye as withPlacement,ne as withSize,me as withSwatches,he as withSwatchesColumns,ue as withVariant};
