import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as pa,C as ma}from"./index.esm-C-rOWAyx.js";import{u as ha,C as fa,E as Ca}from"./color-selector-BpgvfdSu.js";import{C as Pa}from"./color-swatch-DnORvs5b.js";import{u as ba}from"./index-CUCM51Cx.js";import{u as Sa}from"./index-rZyt8EED.js";import{u as ka}from"./index-Dwwrjx8s.js";import{u as ga,f as wa,d as Ke}from"./form-control-BjOXh3qv.js";import{B as xa,a3 as ya,M as ja,ag as va,ar as Da,a4 as _a,o as fr,a as Te,h as w,d as Cr,b as R,c as Oe,J as Fa,g as Ia,q as za}from"./factory-D0ba2aB7.js";import{f as Ea,c as Pr,o as Oa}from"./theme-provider-r-UN7Xzc.js";import{P as Ra,b as Va,a as Ba}from"./popover-trigger-kCg_5LKg.js";import{P as Na}from"./portal-nz1T67ed.js";import{f as Re}from"./forward-ref-D13m8o2p.js";import{a as La}from"./use-component-style-B--WxH8d.js";import{B as Ae}from"./button-CtWzhuL8.js";import{G as Ma}from"./ghost-DQNktADe.js";import{V as Ha}from"./stack-CcCHu966.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-D6P3kmpx.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";import"./alpha-slider-bf1hN7CT.js";import"./use-color-slider-CgOuvTwz.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-DZBwmopH.js";import"./input-Bk4SJExX.js";import"./saturation-slider-BXB3g5D-.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./slide-fade-B_qqM4fM.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-I8sPqzTA.js";import"./index-DQZtUkQ0.js";import"./index-D8fKLhx4.js";import"./index-DGFU5M_O.js";import"./loading-1q-H-TJ4.js";import"./createLucideIcon-C_T9K6g-.js";const Ga=s=>s,[Ta,Ue]=xa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Aa=s=>{const{allowInput:t=!0,animation:d,boundary:i,closeDelay:p,closeOnBlur:u=!0,closeOnEsc:h=!0,closeOnSelectSwatch:m,colorSelectorColorScheme:D,colorSelectorSize:I,colorSelectorVariant:V,defaultColor:z,defaultIsOpen:Ve,defaultOpen:Be,defaultValue:Ne,duration:B=.2,eventListeners:N,fallbackValue:x,flip:L,format:y,formatInput:f=Ga,gutter:M,isLazy:H,isOpen:Le,lazyBehavior:G,matchWidth:T=I==="full",modifiers:A,offset:K,open:Me,openDelay:U,placement:E="bottom-start",preventOverflow:W,strategy:Y,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:_,withChannel:X,withColorSelectorEyeDropper:Z=!1,withPicker:$,withResult:Je=!1,onChange:ra,onChangeEnd:F,onChangeStart:Qe,onClick:Xe,onClose:oa,onKeyDown:Ze,onOpen:aa,onSwatchClick:$e,...er}=ga(s),{"aria-readonly":Ka,onBlur:rr,onFocus:or,...b}=ya(er,wa),{disabled:C,readOnly:g}=b,[ar,He]=ja(er,va),Ge=l.useRef(null),la=l.useRef(null),{supported:ta,onOpen:lr}=ha(),[S,j]=ba({defaultValue:Ne,value:_,onChange:ra}),O=l.useRef(y??Ea(S||z||"")),ee=l.useRef(!1),[tr,v]=l.useState(S||""),{open:n,onClose:sr,onOpen:cr}=Sa({defaultIsOpen:Ve,defaultOpen:Be,isOpen:Le,open:Me,onClose:oa,onOpen:aa}),k=l.useCallback(()=>{C||g||cr()},[cr,C,g]),P=l.useCallback(()=>{if(!n)return;const o=Pr(S,x)(O.current);j(c=>!o||c===o?c:o),v(f(o??"")),sr()},[O,n,j,sr,S,f,v,x]),nr=l.useCallback(()=>{n||k()},[n,k]),ir=l.useCallback(()=>{ee.current=!0,!n&&k()},[n,k]),ur=l.useCallback(()=>{ee.current=!1},[]),dr=l.useCallback(o=>{const c=Da(o);_a(Ge.current,c)||u&&n&&P()},[u,n,P]),pr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),C||g)return;const oe={Enter:n?void 0:k,Escape:h?P:void 0,Space:n?void 0:k}[o.key];oe&&(o.preventDefault(),o.stopPropagation(),oe())},[C,g,n,k,h,P]),mr=l.useCallback(o=>{const c=o.target.value;v(f(c)),j(c)},[v,f,j]),re=l.useCallback(o=>{j(o),setTimeout(()=>{ee.current||v(f(o))})},[j,f]),hr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:c}=await lr()??{};if(!c)return;re(c),F==null||F(c)}catch{}},[lr,re,F]);ka({ref:Ge,enabled:n&&u,handler:P}),fr(()=>{if(!y||!S)return;O.current=y;const o=Pr(S,x)(y);o&&(v(f(o)),j(o))},[y]),fr(()=>{ee.current||!_||v(f(_))},[_]);const sa=l.useCallback(o=>({animation:d,boundary:i,closeDelay:p,closeOnBlur:u,duration:B,eventListeners:N,flip:L,gutter:M,isLazy:H,lazyBehavior:G,matchWidth:T,modifiers:A,offset:K,openDelay:U,placement:E,preventOverflow:W,strategy:Y,...o,closeOnButton:!1,open:n,trigger:"never",onClose:P,onOpen:k}),[u,U,p,H,G,d,B,K,M,W,L,T,i,N,Y,E,A,n,k,P]),ca=l.useCallback((o={},c=null)=>({ref:Te(Ge,c),...ar,...o,...b,onBlur:w(o.onBlur,rr,dr),onClick:w(o.onClick,Xe,nr)}),[ar,b,rr,Xe,dr,nr]),na=l.useCallback((o={},c=null)=>({"aria-haspopup":"dialog","data-active":Cr(n),"data-not-allowed":Cr(!g&&!C&&!t),role:"combobox",tabIndex:-1,...b,...o,ref:Te(la,c),onBlur:w(o.onFocus,ur),onFocus:w(o.onFocus,or,ir),onKeyDown:w(o.onKeyDown,Ze,pr)}),[t,b,n,g,C,ur,or,ir,Ze,pr]),ia=l.useCallback((o={},c=null)=>{const oe={...o.style,...He.style,...C||!t?{pointerEvents:"none"}:{}};return{autoComplete:"off",tabIndex:t?0:-1,...b,...He,...o,ref:c,style:oe,value:tr,onChange:w(o.onChange,mr)}},[He,t,C,b,tr,mr]),ua=l.useCallback((o={},c=null)=>({"aria-label":"Pick a color",disabled:C,...o,ref:c,style:{...o.style,pointerEvents:g?"none":void 0},onClick:w(o.onClick,hr)}),[C,hr,g]),da=l.useCallback(o=>({...b,...o,colorScheme:D,size:I,variant:V,defaultValue:z,fallbackValue:x,format:O.current,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:S,withChannel:X,withEyeDropper:Z,withPicker:$,withResult:Je,onChange:re,onChangeEnd:F,onChangeStart:Qe,onSwatchClick:w($e,m?P:void 0)}),[b,S,x,z,re,Qe,F,$e,P,m,O,$,X,Je,Z,Q,q,J,D,I,V]);return{allowInput:t,eyeDropperSupported:ta,value:S,getContainerProps:ca,getEyeDropperProps:ua,getFieldProps:na,getInputProps:ia,getPopoverProps:sa,getSelectorProps:da,onClose:P}},r=Re(({withSwatch:s=!0,...t},d)=>{const[i,p]=La("ColorPicker",{withSwatch:s,...t}),{className:u,alphaSliderRef:h,children:m,color:D,h:I,height:V=I,hueSliderRef:z,minH:Ve,minHeight:Be=Ve,saturationSliderRef:Ne,withEyeDropper:B=!0,alphaSliderProps:N,channelProps:x,channelsProps:L,containerProps:y,eyeDropperProps:f,fieldProps:M,hueSliderProps:H,inputProps:Le,portalProps:G={disabled:!0},saturationSliderProps:T,swatchesProps:A,swatchProps:K,...Me}=Oa(p,["withSwatch"]),{eyeDropperSupported:U,value:E,getContainerProps:W,getEyeDropperProps:Y,getFieldProps:q,getInputProps:J,getPopoverProps:Q,getSelectorProps:_,onClose:X,...Z}=Aa(Me),$={color:D,h:"fit-content",w:"100%",...i.container};return e.jsx(Ta,{value:{styles:i,value:E,...Z},children:e.jsx(Ra,{...Q(),children:e.jsxs(R.div,{className:Oe("ui-color-picker",u),__css:$,...W(y),children:[e.jsxs(R.div,{className:"ui-color-picker__inner",__css:{position:"relative",...i.inner},children:[s?e.jsx(Ye,{...K}):null,e.jsx(We,{height:V,minHeight:Be,...q(M,d),inputProps:J(Le)}),U&&B?e.jsx(qe,{...Y(f)}):null]}),e.jsx(Na,{...G,children:e.jsx(Va,{as:"div",className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(fa,{className:"ui-color-picker__picker",..._({alphaSliderRef:h,hueSliderRef:z,saturationSliderRef:Ne,alphaSliderProps:N,channelProps:x,channelsProps:L,hueSliderProps:H,saturationSliderProps:T,swatchesProps:A}),children:Fa(m,{value:E,onClose:X})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const We=Re(({className:s,inputProps:t,...d},i)=>{const{styles:p}=Ue(),{ref:u,...h}=t??{},m={alignItems:"center",display:"flex",pe:"2rem",ps:"2rem",...p.field};return e.jsx(Ba,{children:e.jsx(R.div,{className:Oe("ui-color-picker__field",s),__css:m,...d,children:e.jsx(R.input,{ref:Te(i,u),className:"ui-color-picker-picker__field__input",display:"inline-block",w:"100%",...h})})})});We.displayName="ColorPickerField";We.__ui__="ColorPickerField";const Ye=Re(({className:s,...t},d)=>{const{styles:i,value:p}=Ue(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...i.swatch};return e.jsx(Pa,{ref:d,className:Oe("ui-color-picker__swatch",s),color:p,isRounded:!0,__css:u,...t})});Ye.displayName="ColorPickerSwatch";Ye.__ui__="ColorPickerSwatch";const qe=Re(({className:s,children:t,...d},i)=>{const{styles:p}=Ue(),u={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},m=Ia(t).map(D=>l.cloneElement(D,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(R.button,{ref:i,className:Oe("ui-color-picker__eye-dropper",s),__css:u,...d,children:za(t)?m:e.jsx(Ca,{className:"ui-color-picker__eye-dropper__icon"})})});qe.displayName="ColorPickerEyeDropper";qe.__ui__="ColorPickerEyeDropper";const Hl={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",ae=()=>e.jsx(r,{placeholder:a}),le=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),te=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),se=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ae,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:t})=>e.jsxs(Ae,{onClick:t,children:["Submit ",s]})})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),de=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),pe=()=>e.jsx(r,{formatInput:s=>s.toUpperCase(),placeholder:"#4387F4FF"}),me=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),he=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),fe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),Ce=()=>e.jsx(r,{allowInput:!1,placeholder:a}),Pe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),be=()=>e.jsx(r,{placeholder:a,withChannel:!1}),Se=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),ke=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),ge=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),we=()=>e.jsx(r,{placeholder:a,withResult:!0}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),ye=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),je=()=>e.jsx(r,{offset:[16,16],placeholder:a}),ve=()=>e.jsx(r,{gutter:32,placeholder:a}),De=()=>e.jsx(r,{duration:.4,placeholder:a}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,placeholder:a}),e.jsx(Ke,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,placeholder:a}),e.jsx(Ke,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Ma,{fontSize:"lg"})}})]}),ze=()=>{const[s,t]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:t})},Ee=()=>{var h;const s={colorInput:"#4387f4ff"},{control:t,formState:{errors:d},handleSubmit:i,watch:p}=pa({defaultValues:s}),u=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(Ha,{as:"form",onSubmit:i(u),children:[e.jsx(Ke,{errorMessage:(h=d.colorInput)==null?void 0:h.message,isInvalid:!!d.colorInput,label:"Pick color",children:e.jsx(ma,{name:"colorInput",control:t,render:({field:m})=>e.jsx(r,{...m})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var br,Sr,kr;ae.parameters={...ae.parameters,docs:{...(br=ae.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(kr=(Sr=ae.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var gr,wr,xr;le.parameters={...le.parameters,docs:{...(gr=le.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(xr=(wr=le.parameters)==null?void 0:wr.docs)==null?void 0:xr.source}}};var yr,jr,vr;te.parameters={...te.parameters,docs:{...(yr=te.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />;
}`,...(vr=(jr=te.parameters)==null?void 0:jr.docs)==null?void 0:vr.source}}};var Dr,_r,Fr;se.parameters={...se.parameters,docs:{...(Dr=se.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(Fr=(_r=se.parameters)==null?void 0:_r.docs)==null?void 0:Fr.source}}};var Ir,zr,Er;ce.parameters={...ce.parameters,docs:{...(Ir=ce.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
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
}`,...(Er=(zr=ce.parameters)==null?void 0:zr.docs)==null?void 0:Er.source}}};var Or,Rr,Vr;ne.parameters={...ne.parameters,docs:{...(Or=ne.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(Vr=(Rr=ne.parameters)==null?void 0:Rr.docs)==null?void 0:Vr.source}}};var Br,Nr,Lr;ie.parameters={...ie.parameters,docs:{...(Br=ie.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(bo=(Po=ke.parameters)==null?void 0:Po.docs)==null?void 0:bo.source}}};var So,ko,go;ge.parameters={...ge.parameters,docs:{...(So=ge.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(go=(ko=ge.parameters)==null?void 0:ko.docs)==null?void 0:go.source}}};var wo,xo,yo;we.parameters={...we.parameters,docs:{...(wo=we.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(yo=(xo=we.parameters)==null?void 0:xo.docs)==null?void 0:yo.source}}};var jo,vo,Do;xe.parameters={...xe.parameters,docs:{...(jo=xe.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(Do=(vo=xe.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var _o,Fo,Io;ye.parameters={...ye.parameters,docs:{...(_o=ye.parameters)==null?void 0:_o.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(Io=(Fo=ye.parameters)==null?void 0:Fo.docs)==null?void 0:Io.source}}};var zo,Eo,Oo;je.parameters={...je.parameters,docs:{...(zo=je.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />;
}`,...(Oo=(Eo=je.parameters)==null?void 0:Eo.docs)==null?void 0:Oo.source}}};var Ro,Vo,Bo;ve.parameters={...ve.parameters,docs:{...(Ro=ve.parameters)==null?void 0:Ro.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(Bo=(Vo=ve.parameters)==null?void 0:Vo.docs)==null?void 0:Bo.source}}};var No,Lo,Mo;De.parameters={...De.parameters,docs:{...(No=De.parameters)==null?void 0:No.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Mo=(Lo=De.parameters)==null?void 0:Lo.docs)==null?void 0:Mo.source}}};var Ho,Go,To;_e.parameters={..._e.parameters,docs:{...(Ho=_e.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isDisabled placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(To=(Go=_e.parameters)==null?void 0:Go.docs)==null?void 0:To.source}}};var Ao,Ko,Uo;Fe.parameters={...Fe.parameters,docs:{...(Ao=Fe.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isReadOnly placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Uo=(Ko=Fe.parameters)==null?void 0:Ko.docs)==null?void 0:Uo.source}}};var Wo,Yo,qo;Ie.parameters={...Ie.parameters,docs:{...(Wo=Ie.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <GhostIcon fontSize="lg" />
    }} />
    </>;
}`,...(qo=(Yo=Ie.parameters)==null?void 0:Yo.docs)==null?void 0:qo.source}}};var Jo,Qo,Xo;ze.parameters={...ze.parameters,docs:{...(Jo=ze.parameters)==null?void 0:Jo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Xo=(Qo=ze.parameters)==null?void 0:Qo.docs)==null?void 0:Xo.source}}};var Zo,$o,ea;Ee.parameters={...Ee.parameters,docs:{...(Zo=Ee.parameters)==null?void 0:Zo.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.colorInput?.message} isInvalid={!!errors.colorInput} label="Pick color">
        <Controller name="colorInput" control={control} render={({
        field
      }) => <ColorPicker {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ea=($o=Ee.parameters)==null?void 0:$o.docs)==null?void 0:ea.source}}};const Gl=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Gl as __namedExportsOrder,ae as basic,ze as customControl,Ie as customEyeDropperIcon,Hl as default,Ce as disabledAllowInput,be as disabledChannel,ke as disabledEyeDropper,Pe as disabledPicker,Se as disabledSwatch,ge as enabledColorPickerEyeDropper,we as enabledResult,_e as isDisabled,Fe as isReadonly,Ee as reactHookForm,xe as withBorderColor,ce as withChildren,fe as withCloseOnSelectSwatch,ie as withColorSelectorSize,se as withDefaultColor,le as withDefaultValue,De as withDuration,te as withFallbackValue,de as withFormat,pe as withFormatInput,ve as withGutter,je as withOffset,ye as withPlacement,ne as withSize,me as withSwatches,he as withSwatchesColumns,ue as withVariant};
