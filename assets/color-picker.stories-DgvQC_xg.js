import{j as e}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{u as ua,C as da}from"./index.esm-DXPXqkjk.js";import{u as pa,C as ma,E as ha}from"./color-selector-CqAlCOeq.js";import{C as fa}from"./color-swatch-BqiT9xK9.js";import{u as Ca}from"./index-nT_1Y3_X.js";import{u as Pa}from"./index--DMNeOYf.js";import{u as ba}from"./index-CPvTbioc.js";import{u as Sa,f as ka,F as Ue}from"./form-control-GogIMfYi.js";import{o as wa,W as ga,V as xa,a6 as ya,af as ja,X as va,f as fr,a as Te,h as y,d as Ae,b as V,c as Re,A as Da,p as _a,j as Fa}from"./factory-zMrA9M4D.js";import{e as Ia,c as Cr,o as za}from"./theme-provider-D6YJ9wXo.js";import{P as Oa,b as Ea,a as Va}from"./popover-trigger-D9NiKBlG.js";import{P as Ra}from"./portal-B1eO2HpC.js";import{f as Be}from"./forward-ref-BWI-Phbn.js";import{a as Ba}from"./use-component-style-BfdzvKeB.js";import{B as Ke}from"./button-D-OQqBLL.js";import{G as Na}from"./ghost-C-iM-TaI.js";import{V as La}from"./stack-DMEesNao.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-Cz0rPW3Y.js";import"./icon-CZT7FJOE.js";import"./use-var-De9F6Sch.js";import"./alpha-slider-COnobRV3.js";import"./use-color-slider-D73ZYEQg.js";import"./index-vjRMQ8Sb.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-0kRioTCE.js";import"./input-KFaQrPg-.js";import"./saturation-slider-BylnNSB7.js";import"./close-button-BokoKt_j.js";import"./use-ripple-C38FK3R5.js";import"./factory-ps7NpXEL.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-Dap2K32n.js";import"./index-Dl_ChV9G.js";import"./index-DhEy0zJC.js";import"./forward-ref-scR1bmHx.js";import"./utils-C5KjwI5H.js";import"./scale-fade-DAWTvTKN.js";import"./index-BmlESF8C.js";import"./index-CoJrGj-T.js";import"./index-B_BUNkbK.js";import"./index-CsI5Apoe.js";import"./index-BCZXDNnZ.js";import"./index-Drt3gf4w.js";import"./loading-BAxQru_S.js";import"./lucide-icon-DkKUiEzg.js";const Ma=t=>t,[Ha,We]=wa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ga=t=>{const{allowInput:s=!0,animation:d,boundary:i,closeDelay:p,closeOnBlur:u=!0,closeOnEsc:h=!0,closeOnSelectSwatch:m,colorSelectorColorScheme:w,colorSelectorSize:g,colorSelectorVariant:R,defaultColor:z,defaultIsOpen:B,defaultValue:Ne,duration:N=.2,eventListeners:L,fallbackValue:j,flip:M,format:v,formatInput:f=Ma,gutter:H,isLazy:G,isOpen:Le,lazyBehavior:A,matchWidth:T=g==="full",modifiers:K,offset:U,openDelay:W,placement:Y="bottom-start",preventOverflow:X,strategy:O,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:F,withChannel:Z,withColorSelectorEyeDropper:$=!1,withPicker:ee,withResult:re=!1,onChange:Me,onChangeEnd:I,onChangeStart:Je,onClick:Qe,onClose:ea,onKeyDown:Ze,onOpen:ra,onSwatchClick:$e,...er}=Sa(t),{"aria-readonly":Aa,onBlur:rr,onFocus:or,...b}=ga(er,ka),{disabled:C,readOnly:x}=b,[ar,He]=xa(er,ya),Ge=l.useRef(null),oa=l.useRef(null),{supported:aa,onOpen:lr}=pa(),[S,D]=Ca({defaultValue:Ne,value:F,onChange:Me}),E=l.useRef(v??Ia(S||z||"")),oe=l.useRef(!1),[sr,_]=l.useState(S||""),{isOpen:n,onClose:tr,onOpen:cr}=Pa({defaultIsOpen:B,isOpen:Le,onClose:ea,onOpen:ra}),k=l.useCallback(()=>{C||x||cr()},[cr,C,x]),P=l.useCallback(()=>{if(!n)return;const o=Cr(S,j)(E.current);D(c=>!o||c===o?c:o),_(f(o??"")),tr()},[E,n,D,tr,S,f,_,j]),nr=l.useCallback(()=>{n||k()},[n,k]),ir=l.useCallback(()=>{oe.current=!0,!n&&k()},[n,k]),ur=l.useCallback(()=>{oe.current=!1},[]),dr=l.useCallback(o=>{const c=ja(o);va(Ge.current,c)||u&&n&&P()},[u,n,P]),pr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),C||x)return;const le={Enter:n?void 0:k,Escape:h?P:void 0,Space:n?void 0:k}[o.key];le&&(o.preventDefault(),o.stopPropagation(),le())},[C,x,n,k,h,P]),mr=l.useCallback(o=>{const c=o.target.value;_(f(c)),D(c)},[_,f,D]),ae=l.useCallback(o=>{D(o),setTimeout(()=>{oe.current||_(f(o))})},[D,f]),hr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:c}=await lr()??{};if(!c)return;ae(c),I==null||I(c)}catch{}},[lr,ae,I]);ba({ref:Ge,enabled:n&&u,handler:P}),fr(()=>{if(!v||!S)return;E.current=v;const o=Cr(S,j)(v);o&&(_(f(o)),D(o))},[v]),fr(()=>{oe.current||!F||_(f(F))},[F]);const la=l.useCallback(o=>({animation:d,boundary:i,closeDelay:p,closeOnBlur:u,duration:N,eventListeners:L,flip:M,gutter:H,isLazy:G,lazyBehavior:A,matchWidth:T,modifiers:K,offset:U,openDelay:W,placement:Y,preventOverflow:X,strategy:O,...o,closeOnButton:!1,isOpen:n,trigger:"never",onClose:P,onOpen:k}),[u,W,p,G,A,d,N,U,H,X,M,T,i,L,O,Y,K,n,k,P]),sa=l.useCallback((o={},c=null)=>({ref:Te(Ge,c),...ar,...o,...b,onBlur:y(o.onBlur,rr,dr),onClick:y(o.onClick,Qe,nr)}),[ar,b,rr,Qe,dr,nr]),ta=l.useCallback((o={},c=null)=>({"aria-expanded":Ae(n),"data-active":Ae(n),"data-not-allowed":Ae(!x&&!C&&!s),tabIndex:s?0:-1,...b,...o,ref:Te(oa,c),onBlur:y(o.onFocus,ur),onFocus:y(o.onFocus,or,ir),onKeyDown:y(o.onKeyDown,Ze,pr)}),[s,b,n,x,C,ur,or,ir,Ze,pr]),ca=l.useCallback((o={},c=null)=>{const le={...o.style,...He.style,...C||!s?{pointerEvents:"none"}:{}};return{tabIndex:s?0:-1,...b,...He,...o,ref:c,style:le,value:sr,onChange:y(o.onChange,mr)}},[He,s,C,b,sr,mr]),na=l.useCallback((o={},c=null)=>({"aria-label":"Pick a color",disabled:C,...o,ref:c,style:{...o.style,pointerEvents:x?"none":void 0},onClick:y(o.onClick,hr)}),[C,hr,x]),ia=l.useCallback(o=>({...b,...o,colorScheme:w,size:g,variant:R,defaultValue:z,fallbackValue:j,format:E.current,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:S,withChannel:Z,withEyeDropper:$,withPicker:ee,withResult:re,onChange:ae,onChangeEnd:I,onChangeStart:Je,onSwatchClick:y($e,m?P:void 0)}),[b,S,j,z,ae,Je,I,$e,P,m,E,ee,Z,re,$,Q,q,J,w,g,R]);return{allowInput:s,eyeDropperSupported:aa,value:S,getContainerProps:sa,getEyeDropperProps:na,getFieldProps:ta,getInputProps:ca,getPopoverProps:la,getSelectorProps:ia,onClose:P}},r=Be(({withSwatch:t=!0,...s},d)=>{const[i,p]=Ba("ColorPicker",{withSwatch:t,...s});let{className:u,alphaSliderRef:h,children:m,color:w,h:g,height:R,hueSliderRef:z,minH:B,minHeight:Ne,saturationSliderRef:N,withEyeDropper:L=!0,alphaSliderProps:j,channelProps:M,channelsProps:v,containerProps:f,eyeDropperProps:H,fieldProps:G,hueSliderProps:Le,inputProps:A,portalProps:T={isDisabled:!0},saturationSliderProps:K,swatchesProps:U,swatchProps:W,...Y}=za(p,["withSwatch"]);const{eyeDropperSupported:X,value:O,getContainerProps:q,getEyeDropperProps:J,getFieldProps:Q,getInputProps:F,getPopoverProps:Z,getSelectorProps:$,onClose:ee,...re}=Ga(Y);g??(g=R),B??(B=Ne);const Me={color:w,h:"fit-content",w:"100%",...i.container};return e.jsx(Ha,{value:{styles:i,value:O,...re},children:e.jsx(Oa,{...Z(),children:e.jsxs(V.div,{className:Re("ui-color-picker",u),__css:Me,...q(f),children:[e.jsxs(V.div,{className:"ui-color-picker__inner",__css:{position:"relative",...i.inner},children:[t?e.jsx(Xe,{...W}):null,e.jsx(Ye,{h:g,minH:B,...Q(G,d),inputProps:F(A)}),X&&L?e.jsx(qe,{...J(H)}):null]}),e.jsx(Ra,{...T,children:e.jsx(Ea,{className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(ma,{className:"ui-color-picker__picker",...$({alphaSliderRef:h,hueSliderRef:z,saturationSliderRef:N,alphaSliderProps:j,channelProps:M,channelsProps:v,hueSliderProps:Le,saturationSliderProps:K,swatchesProps:U}),children:Da(m,{value:O,onClose:ee})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const Ye=Be(({className:t,h:s,minH:d,inputProps:i,...p},u)=>{const{styles:h}=We(),{ref:m,...w}=i??{},g={alignItems:"center",display:"flex",h:s,minH:d,pe:"2rem",ps:"2rem",...h.field};return e.jsx(Va,{children:e.jsx(V.div,{className:Re("ui-color-picker__field",t),__css:g,...p,children:e.jsx(V.input,{ref:Te(u,m),className:"ui-color-picker-picker__field__input",display:"inline-block",w:"100%",...w})})})});Ye.displayName="ColorPickerField";Ye.__ui__="ColorPickerField";const Xe=Be(({className:t,...s},d)=>{const{styles:i,value:p}=We(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...i.swatch};return e.jsx(fa,{ref:d,className:Re("ui-color-picker__swatch",t),color:p,isRounded:!0,__css:u,...s})});Xe.displayName="ColorPickerSwatch";Xe.__ui__="ColorPickerSwatch";const qe=Be(({className:t,children:s,...d},i)=>{const{styles:p}=We(),u={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},m=_a(s).map(w=>l.cloneElement(w,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(V.button,{ref:i,className:Re("ui-color-picker__eye-dropper",t),__css:u,...d,children:Fa(s)?m:e.jsx(ha,{className:"ui-color-picker__eye-dropper__icon"})})});qe.displayName="ColorPickerEyeDropper";qe.__ui__="ColorPickerEyeDropper";const Nl={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",se=()=>e.jsx(r,{placeholder:a}),te=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),ce=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),ne=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ke,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:t,onClose:s})=>e.jsxs(Ke,{onClick:s,children:["Submit ",t]})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),me=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),he=()=>e.jsx(r,{formatInput:t=>t.toUpperCase(),placeholder:"#4387F4FF"}),fe=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),Ce=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),Pe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),be=()=>e.jsx(r,{allowInput:!1,placeholder:a}),Se=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),ke=()=>e.jsx(r,{placeholder:a,withChannel:!1}),we=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),ge=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),xe=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),ye=()=>e.jsx(r,{placeholder:a,withResult:!0}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),ve=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),De=()=>e.jsx(r,{offset:[16,16],placeholder:a}),_e=()=>e.jsx(r,{gutter:32,placeholder:a}),Fe=()=>e.jsx(r,{duration:.4,placeholder:a}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,placeholder:a}),e.jsx(Ue,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,placeholder:a}),e.jsx(Ue,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Na,{fontSize:"lg"})}})]}),Ee=()=>{const[t,s]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:t,onChange:s})},Ve=()=>{var h;const t={colorInput:"#4387f4ff"},{control:s,formState:{errors:d},handleSubmit:i,watch:p}=ua({defaultValues:t}),u=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(La,{as:"form",onSubmit:i(u),children:[e.jsx(Ue,{errorMessage:(h=d.colorInput)==null?void 0:h.message,isInvalid:!!d.colorInput,label:"Pick color",children:e.jsx(da,{name:"colorInput",control:s,render:({field:m})=>e.jsx(r,{...m})})}),e.jsx(Ke,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Pr,br,Sr;se.parameters={...se.parameters,docs:{...(Pr=se.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(Sr=(br=se.parameters)==null?void 0:br.docs)==null?void 0:Sr.source}}};var kr,wr,gr;te.parameters={...te.parameters,docs:{...(kr=te.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(gr=(wr=te.parameters)==null?void 0:wr.docs)==null?void 0:gr.source}}};var xr,yr,jr;ce.parameters={...ce.parameters,docs:{...(xr=ce.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />;
}`,...(jr=(yr=ce.parameters)==null?void 0:yr.docs)==null?void 0:jr.source}}};var vr,Dr,_r;ne.parameters={...ne.parameters,docs:{...(vr=ne.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(_r=(Dr=ne.parameters)==null?void 0:Dr.docs)==null?void 0:_r.source}}};var Fr,Ir,zr;ie.parameters={...ie.parameters,docs:{...(Fr=ie.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(zr=(Ir=ie.parameters)==null?void 0:Ir.docs)==null?void 0:zr.source}}};var Or,Er,Vr;ue.parameters={...ue.parameters,docs:{...(Or=ue.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(Vr=(Er=ue.parameters)==null?void 0:Er.docs)==null?void 0:Vr.source}}};var Rr,Br,Nr;de.parameters={...de.parameters,docs:{...(Rr=de.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker colorSelectorSize="sm" placeholder="small size" />
      <ColorPicker colorSelectorSize="md" placeholder="medium size" />
      <ColorPicker colorSelectorSize="lg" placeholder="large size" />
      <ColorPicker colorSelectorSize="full" placeholder="full size" />
    </>;
}`,...(Nr=(Br=de.parameters)==null?void 0:Br.docs)==null?void 0:Nr.source}}};var Lr,Mr,Hr;pe.parameters={...pe.parameters,docs:{...(Lr=pe.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Hr=(Mr=pe.parameters)==null?void 0:Mr.docs)==null?void 0:Hr.source}}};var Gr,Ar,Tr;me.parameters={...me.parameters,docs:{...(Gr=me.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" placeholder="hsla(240, 100%, 50%, 1)" />;
}`,...(Tr=(Ar=me.parameters)==null?void 0:Ar.docs)==null?void 0:Tr.source}}};var Kr,Ur,Wr;he.parameters={...he.parameters,docs:{...(Kr=he.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} placeholder="#4387F4FF" />;
}`,...(Wr=(Ur=he.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,Xr,qr;fe.parameters={...fe.parameters,docs:{...(Yr=fe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(qr=(Xr=fe.parameters)==null?void 0:Xr.docs)==null?void 0:qr.source}}};var Jr,Qr,Zr;Ce.parameters={...Ce.parameters,docs:{...(Jr=Ce.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...(Zr=(Qr=Ce.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var $r,eo,ro;Pe.parameters={...Pe.parameters,docs:{...($r=Pe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(ro=(eo=Pe.parameters)==null?void 0:eo.docs)==null?void 0:ro.source}}};var oo,ao,lo;be.parameters={...be.parameters,docs:{...(oo=be.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder={defaultPlaceholder} />;
}`,...(lo=(ao=be.parameters)==null?void 0:ao.docs)==null?void 0:lo.source}}};var so,to,co;Se.parameters={...Se.parameters,docs:{...(so=Se.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" withPicker={false} />;
}`,...(co=(to=Se.parameters)==null?void 0:to.docs)==null?void 0:co.source}}};var no,io,uo;ke.parameters={...ke.parameters,docs:{...(no=ke.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(uo=(io=ke.parameters)==null?void 0:io.docs)==null?void 0:uo.source}}};var po,mo,ho;we.parameters={...we.parameters,docs:{...(po=we.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(ho=(mo=we.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};var fo,Co,Po;ge.parameters={...ge.parameters,docs:{...(fo=ge.parameters)==null?void 0:fo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(Po=(Co=ge.parameters)==null?void 0:Co.docs)==null?void 0:Po.source}}};var bo,So,ko;xe.parameters={...xe.parameters,docs:{...(bo=xe.parameters)==null?void 0:bo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(ko=(So=xe.parameters)==null?void 0:So.docs)==null?void 0:ko.source}}};var wo,go,xo;ye.parameters={...ye.parameters,docs:{...(wo=ye.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(xo=(go=ye.parameters)==null?void 0:go.docs)==null?void 0:xo.source}}};var yo,jo,vo;je.parameters={...je.parameters,docs:{...(yo=je.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(vo=(jo=je.parameters)==null?void 0:jo.docs)==null?void 0:vo.source}}};var Do,_o,Fo;ve.parameters={...ve.parameters,docs:{...(Do=ve.parameters)==null?void 0:Do.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(Fo=(_o=ve.parameters)==null?void 0:_o.docs)==null?void 0:Fo.source}}};var Io,zo,Oo;De.parameters={...De.parameters,docs:{...(Io=De.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />;
}`,...(Oo=(zo=De.parameters)==null?void 0:zo.docs)==null?void 0:Oo.source}}};var Eo,Vo,Ro;_e.parameters={..._e.parameters,docs:{...(Eo=_e.parameters)==null?void 0:Eo.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(Ro=(Vo=_e.parameters)==null?void 0:Vo.docs)==null?void 0:Ro.source}}};var Bo,No,Lo;Fe.parameters={...Fe.parameters,docs:{...(Bo=Fe.parameters)==null?void 0:Bo.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Lo=(No=Fe.parameters)==null?void 0:No.docs)==null?void 0:Lo.source}}};var Mo,Ho,Go;Ie.parameters={...Ie.parameters,docs:{...(Mo=Ie.parameters)==null?void 0:Mo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isDisabled placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Go=(Ho=Ie.parameters)==null?void 0:Ho.docs)==null?void 0:Go.source}}};var Ao,To,Ko;ze.parameters={...ze.parameters,docs:{...(Ao=ze.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isReadOnly placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Ko=(To=ze.parameters)==null?void 0:To.docs)==null?void 0:Ko.source}}};var Uo,Wo,Yo;Oe.parameters={...Oe.parameters,docs:{...(Uo=Oe.parameters)==null?void 0:Uo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <Ghost fontSize="lg" />
    }} />
    </>;
}`,...(Yo=(Wo=Oe.parameters)==null?void 0:Wo.docs)==null?void 0:Yo.source}}};var Xo,qo,Jo;Ee.parameters={...Ee.parameters,docs:{...(Xo=Ee.parameters)==null?void 0:Xo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Jo=(qo=Ee.parameters)==null?void 0:qo.docs)==null?void 0:Jo.source}}};var Qo,Zo,$o;Ve.parameters={...Ve.parameters,docs:{...(Qo=Ve.parameters)==null?void 0:Qo.docs,source:{originalSource:`() => {
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
}`,...($o=(Zo=Ve.parameters)==null?void 0:Zo.docs)==null?void 0:$o.source}}};const Ll=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Ll as __namedExportsOrder,se as basic,Ee as customControl,Oe as customEyeDropperIcon,Nl as default,be as disabledAllowInput,ke as disabledChannel,ge as disabledEyeDropper,Se as disabledPicker,we as disabledSwatch,xe as enabledColorPickerEyeDropper,ye as enabledResult,Ie as isDisabled,ze as isReadonly,Ve as reactHookForm,je as withBorderColor,ie as withChildren,Pe as withCloseOnSelectSwatch,de as withColorSelectorSize,ne as withDefaultColor,te as withDefaultValue,Fe as withDuration,ce as withFallbackValue,me as withFormat,he as withFormatInput,_e as withGutter,De as withOffset,ve as withPlacement,ue as withSize,fe as withSwatches,Ce as withSwatchesColumns,pe as withVariant};
