import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as pa,C as ma}from"./index.esm-CEdvtQ_U.js";import{u as ha,C as fa,E as Ca}from"./color-selector-Bn8w-Ayt.js";import{C as Pa}from"./color-swatch-DUnXqFvy.js";import{u as ba}from"./index-DPt_fcIQ.js";import{u as Sa}from"./index-BcE809qD.js";import{u as ka}from"./index-Blij8Q7p.js";import{u as wa,f as ga,F as Ye}from"./form-control-Co-DCdKP.js";import{p as xa,Z as ya,Y as ja,a9 as va,am as Da,_ as _a,f as Cr,a as Ke,h as x,d as Ae,b as V,c as Ve,C as Fa,q as Ia,j as za}from"./factory-COau3w21.js";import{f as Oa,c as Pr,o as Ea}from"./theme-provider-CNI9L2WW.js";import{P as Ra,b as Va,a as Ba}from"./popover-trigger-D8n20qZW.js";import{P as Na}from"./portal-CgvdJ0pj.js";import{f as Be}from"./forward-ref-D13m8o2p.js";import{a as La}from"./use-component-style-CLSKeq_H.js";import{G as Ma}from"./ghost-STGyxRsr.js";import{B as Ue}from"./button-Dh7D4tOu.js";import{V as Ha}from"./stack-DfTvLKXJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-tZ2gAhhQ.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./alpha-slider-DUHLtoMK.js";import"./use-color-slider-Dmo1gNTt.js";import"./index-BCBmayc8.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-psl0OccJ.js";import"./input-DbXlFvDN.js";import"./saturation-slider-DkYXSb_k.js";import"./close-button-EOT3XTCt.js";import"./use-ripple-D0covPjN.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-ep9rrzy9.js";import"./slide-fade-CGUrMJaL.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./scale-fade-CFljfXl2.js";import"./index-a5RVC8cz.js";import"./index-gGKStiao.js";import"./index-qyuJ8aiN.js";import"./index-Bt_V34Vb.js";import"./index-CYDuQAfY.js";import"./index-ZuzByk-F.js";import"./lucide-icon-pIguMOGe.js";import"./loading-DYtJ9fc2.js";const Ga=s=>s,[Ta,We]=xa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Aa=s=>{let{id:c,allowInput:n=!0,animation:u,boundary:p,closeDelay:m,closeOnBlur:d=!0,closeOnEsc:h=!0,closeOnSelectSwatch:w,colorSelectorColorScheme:y,colorSelectorSize:O,colorSelectorVariant:B,defaultColor:F,defaultIsOpen:Ne,defaultValue:Le,duration:N=.2,eventListeners:L,fallbackValue:j,flip:M,format:v,formatInput:f=Ga,gutter:H,isLazy:G,isOpen:Me,lazyBehavior:T,matchWidth:A=O==="full",modifiers:K,offset:U,openDelay:Y,placement:W="bottom-start",preventOverflow:q,strategy:E,swatches:Z,swatchesColumns:J,swatchesLabel:Q,value:I,withChannel:X,withColorSelectorEyeDropper:$=!1,withPicker:ee,withResult:re=!1,onChange:He,onChangeEnd:z,onChangeStart:Qe,onClick:Xe,onClose:ra,onKeyDown:$e,onOpen:oa,onSwatchClick:er,...rr}=wa(s);const{"aria-readonly":Ka,onBlur:or,onFocus:ar,...b}=ya(rr,ga),{disabled:C,readOnly:g}=b,[lr,Ge]=ja(rr,va),Te=l.useRef(null),aa=l.useRef(null),{supported:la,onOpen:sr}=ha(),[S,D]=ba({defaultValue:Le,value:I,onChange:He}),R=l.useRef(v??Oa(S||F||"")),oe=l.useRef(!1),[tr,_]=l.useState(S||""),{isOpen:i,onClose:cr,onOpen:nr}=Sa({defaultIsOpen:Ne,isOpen:Me,onClose:ra,onOpen:oa}),sa=l.useId();c??(c=sa);const k=l.useCallback(()=>{C||g||nr()},[nr,C,g]),P=l.useCallback(()=>{if(!i)return;const o=Pr(S,j)(R.current);D(t=>!o||t===o?t:o),_(f(o??"")),cr()},[R,i,D,cr,S,f,_,j]),ir=l.useCallback(()=>{i||k()},[i,k]),ur=l.useCallback(()=>{oe.current=!0,!i&&k()},[i,k]),dr=l.useCallback(()=>{oe.current=!1},[]),pr=l.useCallback(o=>{const t=Da(o);_a(Te.current,t)||d&&i&&P()},[d,i,P]),mr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),C||g)return;const le={Enter:i?void 0:k,Escape:h?P:void 0,Space:i?void 0:k}[o.key];le&&(o.preventDefault(),o.stopPropagation(),le())},[C,g,i,k,h,P]),hr=l.useCallback(o=>{const t=o.target.value;_(f(t)),D(t)},[_,f,D]),ae=l.useCallback(o=>{D(o),setTimeout(()=>{oe.current||_(f(o))})},[D,f]),fr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:t}=await sr()??{};if(!t)return;ae(t),z==null||z(t)}catch{}},[sr,ae,z]);ka({ref:Te,enabled:i&&d,handler:P}),Cr(()=>{if(!v||!S)return;R.current=v;const o=Pr(S,j)(v);o&&(_(f(o)),D(o))},[v]),Cr(()=>{oe.current||!I||_(f(I))},[I]);const ta=l.useCallback(o=>({animation:u,boundary:p,closeDelay:m,closeOnBlur:d,duration:N,eventListeners:L,flip:M,gutter:H,isLazy:G,lazyBehavior:T,matchWidth:A,modifiers:K,offset:U,openDelay:Y,placement:W,preventOverflow:q,strategy:E,...o,closeOnButton:!1,isOpen:i,trigger:"never",onClose:P,onOpen:k}),[d,Y,m,G,T,u,N,U,H,q,M,A,p,L,E,W,K,i,k,P]),ca=l.useCallback((o={},t=null)=>({ref:Ke(Te,t),...lr,...o,...b,onBlur:x(o.onBlur,or,pr),onClick:x(o.onClick,Xe,ir)}),[lr,b,or,Xe,pr,ir]),na=l.useCallback((o={},t=null)=>({"aria-expanded":Ae(i),"data-active":Ae(i),"data-not-allowed":Ae(!g&&!C&&!n),tabIndex:n?0:-1,...b,...o,ref:Ke(aa,t),onBlur:x(o.onFocus,dr),onFocus:x(o.onFocus,ar,ur),onKeyDown:x(o.onKeyDown,$e,mr)}),[n,b,i,g,C,dr,ar,ur,$e,mr]),ia=l.useCallback((o={},t=null)=>{const le={...o.style,...Ge.style,...C||!n?{pointerEvents:"none"}:{}};return{"aria-controls":c,role:"combobox",tabIndex:n?0:-1,...b,...Ge,...o,ref:t,style:le,value:tr,onChange:x(o.onChange,hr)}},[c,Ge,n,C,b,tr,hr]),ua=l.useCallback((o={},t=null)=>({"aria-label":"Pick a color",disabled:C,...o,ref:t,style:{...o.style,pointerEvents:g?"none":void 0},onClick:x(o.onClick,fr)}),[C,fr,g]),da=l.useCallback(o=>({...b,...o,colorScheme:y,size:O,variant:B,defaultValue:F,fallbackValue:j,format:R.current,swatches:Z,swatchesColumns:J,swatchesLabel:Q,value:S,withChannel:X,withEyeDropper:$,withPicker:ee,withResult:re,onChange:ae,onChangeEnd:z,onChangeStart:Qe,onSwatchClick:x(er,w?P:void 0)}),[b,S,j,F,ae,Qe,z,er,P,w,R,ee,X,re,$,Q,Z,J,y,O,B]);return{id:c,allowInput:n,eyeDropperSupported:la,value:S,getContainerProps:ca,getEyeDropperProps:ua,getFieldProps:na,getInputProps:ia,getPopoverProps:ta,getSelectorProps:da,onClose:P}},r=Be(({withSwatch:s=!0,...c},n)=>{const[u,p]=La("ColorPicker",{withSwatch:s,...c});let{className:m,alphaSliderRef:d,children:h,color:w,h:y,height:O,hueSliderRef:B,minH:F,minHeight:Ne,saturationSliderRef:Le,withEyeDropper:N=!0,alphaSliderProps:L,channelProps:j,channelsProps:M,containerProps:v,eyeDropperProps:f,fieldProps:H,hueSliderProps:G,inputProps:Me,portalProps:T={isDisabled:!0},saturationSliderProps:A,swatchesProps:K,swatchProps:U,...Y}=Ea(p,["withSwatch"]);const{id:W,eyeDropperSupported:q,value:E,getContainerProps:Z,getEyeDropperProps:J,getFieldProps:Q,getInputProps:I,getPopoverProps:X,getSelectorProps:$,onClose:ee,...re}=Aa(Y);y??(y=O),F??(F=Ne);const He={color:w,h:"fit-content",w:"100%",...u.container};return e.jsx(Ta,{value:{styles:u,value:E,...re},children:e.jsx(Ra,{...X(),children:e.jsxs(V.div,{className:Ve("ui-color-picker",m),__css:He,...Z(v),children:[e.jsxs(V.div,{className:"ui-color-picker__inner",__css:{position:"relative",...u.inner},children:[s?e.jsx(Ze,{...U}):null,e.jsx(qe,{h:y,minH:F,...Q(H,n),inputProps:I(Me)}),q&&N?e.jsx(Je,{...J(f)}):null]}),e.jsx(Na,{...T,children:e.jsx(Va,{id:W,className:"ui-color-picker__content",__css:{...u.content},children:e.jsx(fa,{className:"ui-color-picker__picker",...$({alphaSliderRef:d,hueSliderRef:B,saturationSliderRef:Le,alphaSliderProps:L,channelProps:j,channelsProps:M,hueSliderProps:G,saturationSliderProps:A,swatchesProps:K}),children:Fa(h,{value:E,onClose:ee})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const qe=Be(({className:s,h:c,minH:n,inputProps:u,...p},m)=>{const{styles:d}=We(),{ref:h,...w}=u??{},y={alignItems:"center",display:"flex",h:c,minH:n,pe:"2rem",ps:"2rem",...d.field};return e.jsx(Ba,{children:e.jsx(V.div,{className:Ve("ui-color-picker__field",s),__css:y,...p,children:e.jsx(V.input,{ref:Ke(m,h),className:"ui-color-picker-picker__field__input",display:"inline-block",w:"100%",...w})})})});qe.displayName="ColorPickerField";qe.__ui__="ColorPickerField";const Ze=Be(({className:s,...c},n)=>{const{styles:u,value:p}=We(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...u.swatch};return e.jsx(Pa,{ref:n,className:Ve("ui-color-picker__swatch",s),color:p,isRounded:!0,__css:m,...c})});Ze.displayName="ColorPickerSwatch";Ze.__ui__="ColorPickerSwatch";const Je=Be(({className:s,children:c,...n},u)=>{const{styles:p}=We(),m={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},h=Ia(c).map(w=>l.cloneElement(w,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(V.button,{ref:u,className:Ve("ui-color-picker__eye-dropper",s),__css:m,...n,children:za(c)?h:e.jsx(Ca,{className:"ui-color-picker__eye-dropper__icon"})})});Je.displayName="ColorPickerEyeDropper";Je.__ui__="ColorPickerEyeDropper";const Hl={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",se=()=>e.jsx(r,{placeholder:a}),te=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),ce=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),ne=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ue,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:c})=>e.jsxs(Ue,{onClick:c,children:["Submit ",s]})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),me=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),he=()=>e.jsx(r,{formatInput:s=>s.toUpperCase(),placeholder:"#4387F4FF"}),fe=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),Ce=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),Pe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),be=()=>e.jsx(r,{allowInput:!1,placeholder:a}),Se=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),ke=()=>e.jsx(r,{placeholder:a,withChannel:!1}),we=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),ge=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),xe=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),ye=()=>e.jsx(r,{placeholder:a,withResult:!0}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),ve=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),De=()=>e.jsx(r,{offset:[16,16],placeholder:a}),_e=()=>e.jsx(r,{gutter:32,placeholder:a}),Fe=()=>e.jsx(r,{duration:.4,placeholder:a}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,placeholder:a}),e.jsx(Ye,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,placeholder:a}),e.jsx(Ye,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Ma,{fontSize:"lg"})}})]}),Ee=()=>{const[s,c]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:c})},Re=()=>{var d;const s={colorInput:"#4387f4ff"},{control:c,formState:{errors:n},handleSubmit:u,watch:p}=pa({defaultValues:s}),m=h=>console.log("submit:",h);return console.log("watch:",p()),e.jsxs(Ha,{as:"form",onSubmit:u(m),children:[e.jsx(Ye,{errorMessage:(d=n.colorInput)==null?void 0:d.message,isInvalid:!!n.colorInput,label:"Pick color",children:e.jsx(ma,{name:"colorInput",control:c,render:({field:h})=>e.jsx(r,{...h})})}),e.jsx(Ue,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var br,Sr,kr;se.parameters={...se.parameters,docs:{...(br=se.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(kr=(Sr=se.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var wr,gr,xr;te.parameters={...te.parameters,docs:{...(wr=te.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(xr=(gr=te.parameters)==null?void 0:gr.docs)==null?void 0:xr.source}}};var yr,jr,vr;ce.parameters={...ce.parameters,docs:{...(yr=ce.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />;
}`,...(vr=(jr=ce.parameters)==null?void 0:jr.docs)==null?void 0:vr.source}}};var Dr,_r,Fr;ne.parameters={...ne.parameters,docs:{...(Dr=ne.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(Fr=(_r=ne.parameters)==null?void 0:_r.docs)==null?void 0:Fr.source}}};var Ir,zr,Or;ie.parameters={...ie.parameters,docs:{...(Ir=ie.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
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
}`,...(Or=(zr=ie.parameters)==null?void 0:zr.docs)==null?void 0:Or.source}}};var Er,Rr,Vr;ue.parameters={...ue.parameters,docs:{...(Er=ue.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(Vr=(Rr=ue.parameters)==null?void 0:Rr.docs)==null?void 0:Vr.source}}};var Br,Nr,Lr;de.parameters={...de.parameters,docs:{...(Br=de.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker colorSelectorSize="sm" placeholder="small size" />
      <ColorPicker colorSelectorSize="md" placeholder="medium size" />
      <ColorPicker colorSelectorSize="lg" placeholder="large size" />
      <ColorPicker colorSelectorSize="full" placeholder="full size" />
    </>;
}`,...(Lr=(Nr=de.parameters)==null?void 0:Nr.docs)==null?void 0:Lr.source}}};var Mr,Hr,Gr;pe.parameters={...pe.parameters,docs:{...(Mr=pe.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Gr=(Hr=pe.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Tr,Ar,Kr;me.parameters={...me.parameters,docs:{...(Tr=me.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" placeholder="hsla(240, 100%, 50%, 1)" />;
}`,...(Kr=(Ar=me.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Ur,Yr,Wr;he.parameters={...he.parameters,docs:{...(Ur=he.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} placeholder="#4387F4FF" />;
}`,...(Wr=(Yr=he.parameters)==null?void 0:Yr.docs)==null?void 0:Wr.source}}};var qr,Zr,Jr;fe.parameters={...fe.parameters,docs:{...(qr=fe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(Jr=(Zr=fe.parameters)==null?void 0:Zr.docs)==null?void 0:Jr.source}}};var Qr,Xr,$r;Ce.parameters={...Ce.parameters,docs:{...(Qr=Ce.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...($r=(Xr=Ce.parameters)==null?void 0:Xr.docs)==null?void 0:$r.source}}};var eo,ro,oo;Pe.parameters={...Pe.parameters,docs:{...(eo=Pe.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(oo=(ro=Pe.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,lo,so;be.parameters={...be.parameters,docs:{...(ao=be.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder={defaultPlaceholder} />;
}`,...(so=(lo=be.parameters)==null?void 0:lo.docs)==null?void 0:so.source}}};var to,co,no;Se.parameters={...Se.parameters,docs:{...(to=Se.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" withPicker={false} />;
}`,...(no=(co=Se.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;ke.parameters={...ke.parameters,docs:{...(io=ke.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(po=(uo=ke.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;we.parameters={...we.parameters,docs:{...(mo=we.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(fo=(ho=we.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,Po,bo;ge.parameters={...ge.parameters,docs:{...(Co=ge.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(bo=(Po=ge.parameters)==null?void 0:Po.docs)==null?void 0:bo.source}}};var So,ko,wo;xe.parameters={...xe.parameters,docs:{...(So=xe.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(wo=(ko=xe.parameters)==null?void 0:ko.docs)==null?void 0:wo.source}}};var go,xo,yo;ye.parameters={...ye.parameters,docs:{...(go=ye.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(yo=(xo=ye.parameters)==null?void 0:xo.docs)==null?void 0:yo.source}}};var jo,vo,Do;je.parameters={...je.parameters,docs:{...(jo=je.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(Do=(vo=je.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var _o,Fo,Io;ve.parameters={...ve.parameters,docs:{...(_o=ve.parameters)==null?void 0:_o.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(Io=(Fo=ve.parameters)==null?void 0:Fo.docs)==null?void 0:Io.source}}};var zo,Oo,Eo;De.parameters={...De.parameters,docs:{...(zo=De.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />;
}`,...(Eo=(Oo=De.parameters)==null?void 0:Oo.docs)==null?void 0:Eo.source}}};var Ro,Vo,Bo;_e.parameters={..._e.parameters,docs:{...(Ro=_e.parameters)==null?void 0:Ro.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(Bo=(Vo=_e.parameters)==null?void 0:Vo.docs)==null?void 0:Bo.source}}};var No,Lo,Mo;Fe.parameters={...Fe.parameters,docs:{...(No=Fe.parameters)==null?void 0:No.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Mo=(Lo=Fe.parameters)==null?void 0:Lo.docs)==null?void 0:Mo.source}}};var Ho,Go,To;Ie.parameters={...Ie.parameters,docs:{...(Ho=Ie.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isDisabled placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(To=(Go=Ie.parameters)==null?void 0:Go.docs)==null?void 0:To.source}}};var Ao,Ko,Uo;ze.parameters={...ze.parameters,docs:{...(Ao=ze.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isReadOnly placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Uo=(Ko=ze.parameters)==null?void 0:Ko.docs)==null?void 0:Uo.source}}};var Yo,Wo,qo;Oe.parameters={...Oe.parameters,docs:{...(Yo=Oe.parameters)==null?void 0:Yo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <Ghost fontSize="lg" />
    }} />
    </>;
}`,...(qo=(Wo=Oe.parameters)==null?void 0:Wo.docs)==null?void 0:qo.source}}};var Zo,Jo,Qo;Ee.parameters={...Ee.parameters,docs:{...(Zo=Ee.parameters)==null?void 0:Zo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Qo=(Jo=Ee.parameters)==null?void 0:Jo.docs)==null?void 0:Qo.source}}};var Xo,$o,ea;Re.parameters={...Re.parameters,docs:{...(Xo=Re.parameters)==null?void 0:Xo.docs,source:{originalSource:`() => {
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
}`,...(ea=($o=Re.parameters)==null?void 0:$o.docs)==null?void 0:ea.source}}};const Gl=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Gl as __namedExportsOrder,se as basic,Ee as customControl,Oe as customEyeDropperIcon,Hl as default,be as disabledAllowInput,ke as disabledChannel,ge as disabledEyeDropper,Se as disabledPicker,we as disabledSwatch,xe as enabledColorPickerEyeDropper,ye as enabledResult,Ie as isDisabled,ze as isReadonly,Re as reactHookForm,je as withBorderColor,ie as withChildren,Pe as withCloseOnSelectSwatch,de as withColorSelectorSize,ne as withDefaultColor,te as withDefaultValue,Fe as withDuration,ce as withFallbackValue,me as withFormat,he as withFormatInput,_e as withGutter,De as withOffset,ve as withPlacement,ue as withSize,fe as withSwatches,Ce as withSwatchesColumns,pe as withVariant};
