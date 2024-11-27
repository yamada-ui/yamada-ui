import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as ua,C as da}from"./index.esm-CEdvtQ_U.js";import{u as pa,C as ma,E as ha}from"./color-selector-zMqCMGjN.js";import{C as fa}from"./color-swatch-C-3VwwLh.js";import{u as Ca}from"./index-CSLw8Az-.js";import{u as Pa}from"./index-C_rfNY_4.js";import{u as ba}from"./index-uCUOHvCA.js";import{c as Sa,f as ka,d as Ke}from"./form-control-DPI4oJtA.js";import{p as wa,_ as ga,Z as xa,a9 as ya,am as ja,$ as va,f as hr,a as Te,h as y,d as fr,b as R,c as Ve,C as Da,q as _a,j as Fa}from"./factory-CehSyZ2b.js";import{f as Ia,c as Cr,o as za}from"./theme-provider-BOnS9RWG.js";import{P as Oa,b as Ea,a as Ra}from"./popover-trigger-DhcD9ovi.js";import{P as Va}from"./portal-7IW3o8hZ.js";import{f as Be}from"./forward-ref-D13m8o2p.js";import{a as Ba}from"./use-component-style-PhZ538dD.js";import{B as Ae}from"./button-CN2eQqjg.js";import{G as Na}from"./ghost-CdBOiyEi.js";import{V as La}from"./stack-q1-yo-90.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DGg3J3ON.js";import"./icon-Tcjn8UpA.js";import"./use-var-C7Dt5UAR.js";import"./alpha-slider-btKhHKO8.js";import"./use-color-slider-CNVqzjt4.js";import"./index-B5I0A8KP.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-CAQFCIll.js";import"./input-DsrdQBl0.js";import"./saturation-slider-CDmvSkSy.js";import"./close-button-Cb_x0Aeq.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";import"./slide-fade-DgMSpKCp.js";import"./index-ByME5iZS.js";import"./index-DTdOA4MV.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-D_CZfsqp.js";import"./scale-fade-VQe77YQ6.js";import"./index-u-n2PdDt.js";import"./index-gGKStiao.js";import"./index-DxxoX3c-.js";import"./index-0DWab3Ls.js";import"./index-BAhNJhwO.js";import"./index-ZuzByk-F.js";import"./loading-J7FyZR17.js";import"./createLucideIcon-DHJHrKis.js";const Ma=t=>t,[Ha,Ue]=wa({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ga=t=>{const{allowInput:s=!0,animation:d,boundary:i,closeDelay:p,closeOnBlur:u=!0,closeOnEsc:h=!0,closeOnSelectSwatch:m,colorSelectorColorScheme:w,colorSelectorSize:g,colorSelectorVariant:V,defaultColor:z,defaultIsOpen:B,defaultValue:Ne,duration:N=.2,eventListeners:L,fallbackValue:j,flip:M,format:v,formatInput:f=Ma,gutter:H,isLazy:G,isOpen:Le,lazyBehavior:T,matchWidth:A=g==="full",modifiers:K,offset:U,openDelay:W,placement:Y="bottom-start",preventOverflow:q,strategy:O,swatches:Z,swatchesColumns:$,swatchesLabel:J,value:F,withChannel:Q,withColorSelectorEyeDropper:X=!1,withPicker:ee,withResult:re=!1,onChange:Me,onChangeEnd:I,onChangeStart:Ze,onClick:$e,onClose:ea,onKeyDown:Je,onOpen:ra,onSwatchClick:Qe,...Xe}=Sa(t),{"aria-readonly":Ta,onBlur:er,onFocus:rr,...b}=ga(Xe,ka),{disabled:C,readOnly:x}=b,[or,He]=xa(Xe,ya),Ge=l.useRef(null),oa=l.useRef(null),{supported:aa,onOpen:ar}=pa(),[S,D]=Ca({defaultValue:Ne,value:F,onChange:Me}),E=l.useRef(v??Ia(S||z||"")),oe=l.useRef(!1),[lr,_]=l.useState(S||""),{isOpen:n,onClose:sr,onOpen:tr}=Pa({defaultIsOpen:B,isOpen:Le,onClose:ea,onOpen:ra}),k=l.useCallback(()=>{C||x||tr()},[tr,C,x]),P=l.useCallback(()=>{if(!n)return;const o=Cr(S,j)(E.current);D(c=>!o||c===o?c:o),_(f(o??"")),sr()},[E,n,D,sr,S,f,_,j]),cr=l.useCallback(()=>{n||k()},[n,k]),nr=l.useCallback(()=>{oe.current=!0,!n&&k()},[n,k]),ir=l.useCallback(()=>{oe.current=!1},[]),ur=l.useCallback(o=>{const c=ja(o);va(Ge.current,c)||u&&n&&P()},[u,n,P]),dr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),C||x)return;const le={Enter:n?void 0:k,Escape:h?P:void 0,Space:n?void 0:k}[o.key];le&&(o.preventDefault(),o.stopPropagation(),le())},[C,x,n,k,h,P]),pr=l.useCallback(o=>{const c=o.target.value;_(f(c)),D(c)},[_,f,D]),ae=l.useCallback(o=>{D(o),setTimeout(()=>{oe.current||_(f(o))})},[D,f]),mr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:c}=await ar()??{};if(!c)return;ae(c),I==null||I(c)}catch{}},[ar,ae,I]);ba({ref:Ge,enabled:n&&u,handler:P}),hr(()=>{if(!v||!S)return;E.current=v;const o=Cr(S,j)(v);o&&(_(f(o)),D(o))},[v]),hr(()=>{oe.current||!F||_(f(F))},[F]);const la=l.useCallback(o=>({animation:d,boundary:i,closeDelay:p,closeOnBlur:u,duration:N,eventListeners:L,flip:M,gutter:H,isLazy:G,lazyBehavior:T,matchWidth:A,modifiers:K,offset:U,openDelay:W,placement:Y,preventOverflow:q,strategy:O,...o,closeOnButton:!1,isOpen:n,trigger:"never",onClose:P,onOpen:k}),[u,W,p,G,T,d,N,U,H,q,M,A,i,L,O,Y,K,n,k,P]),sa=l.useCallback((o={},c=null)=>({ref:Te(Ge,c),...or,...o,...b,onBlur:y(o.onBlur,er,ur),onClick:y(o.onClick,$e,cr)}),[or,b,er,$e,ur,cr]),ta=l.useCallback((o={},c=null)=>({"aria-haspopup":"dialog","data-active":fr(n),"data-not-allowed":fr(!x&&!C&&!s),role:"combobox",tabIndex:-1,...b,...o,ref:Te(oa,c),onBlur:y(o.onFocus,ir),onFocus:y(o.onFocus,rr,nr),onKeyDown:y(o.onKeyDown,Je,dr)}),[s,b,n,x,C,ir,rr,nr,Je,dr]),ca=l.useCallback((o={},c=null)=>{const le={...o.style,...He.style,...C||!s?{pointerEvents:"none"}:{}};return{autoComplete:"off",tabIndex:s?0:-1,...b,...He,...o,ref:c,style:le,value:lr,onChange:y(o.onChange,pr)}},[He,s,C,b,lr,pr]),na=l.useCallback((o={},c=null)=>({"aria-label":"Pick a color",disabled:C,...o,ref:c,style:{...o.style,pointerEvents:x?"none":void 0},onClick:y(o.onClick,mr)}),[C,mr,x]),ia=l.useCallback(o=>({...b,...o,colorScheme:w,size:g,variant:V,defaultValue:z,fallbackValue:j,format:E.current,swatches:Z,swatchesColumns:$,swatchesLabel:J,value:S,withChannel:Q,withEyeDropper:X,withPicker:ee,withResult:re,onChange:ae,onChangeEnd:I,onChangeStart:Ze,onSwatchClick:y(Qe,m?P:void 0)}),[b,S,j,z,ae,Ze,I,Qe,P,m,E,ee,Q,re,X,J,Z,$,w,g,V]);return{allowInput:s,eyeDropperSupported:aa,value:S,getContainerProps:sa,getEyeDropperProps:na,getFieldProps:ta,getInputProps:ca,getPopoverProps:la,getSelectorProps:ia,onClose:P}},r=Be(({withSwatch:t=!0,...s},d)=>{const[i,p]=Ba("ColorPicker",{withSwatch:t,...s});let{className:u,alphaSliderRef:h,children:m,color:w,h:g,height:V,hueSliderRef:z,minH:B,minHeight:Ne,saturationSliderRef:N,withEyeDropper:L=!0,alphaSliderProps:j,channelProps:M,channelsProps:v,containerProps:f,eyeDropperProps:H,fieldProps:G,hueSliderProps:Le,inputProps:T,portalProps:A={isDisabled:!0},saturationSliderProps:K,swatchesProps:U,swatchProps:W,...Y}=za(p,["withSwatch"]);const{eyeDropperSupported:q,value:O,getContainerProps:Z,getEyeDropperProps:$,getFieldProps:J,getInputProps:F,getPopoverProps:Q,getSelectorProps:X,onClose:ee,...re}=Ga(Y);g??(g=V),B??(B=Ne);const Me={color:w,h:"fit-content",w:"100%",...i.container};return e.jsx(Ha,{value:{styles:i,value:O,...re},children:e.jsx(Oa,{...Q(),children:e.jsxs(R.div,{className:Ve("ui-color-picker",u),__css:Me,...Z(f),children:[e.jsxs(R.div,{className:"ui-color-picker__inner",__css:{position:"relative",...i.inner},children:[t?e.jsx(Ye,{...W}):null,e.jsx(We,{h:g,minH:B,...J(G,d),inputProps:F(T)}),q&&L?e.jsx(qe,{...$(H)}):null]}),e.jsx(Va,{...A,children:e.jsx(Ea,{as:"div",className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(ma,{className:"ui-color-picker__picker",...X({alphaSliderRef:h,hueSliderRef:z,saturationSliderRef:N,alphaSliderProps:j,channelProps:M,channelsProps:v,hueSliderProps:Le,saturationSliderProps:K,swatchesProps:U}),children:Da(m,{value:O,onClose:ee})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const We=Be(({className:t,h:s,minH:d,inputProps:i,...p},u)=>{const{styles:h}=Ue(),{ref:m,...w}=i??{},g={alignItems:"center",display:"flex",h:s,minH:d,pe:"2rem",ps:"2rem",...h.field};return e.jsx(Ra,{children:e.jsx(R.div,{className:Ve("ui-color-picker__field",t),__css:g,...p,children:e.jsx(R.input,{ref:Te(u,m),className:"ui-color-picker-picker__field__input",display:"inline-block",w:"100%",...w})})})});We.displayName="ColorPickerField";We.__ui__="ColorPickerField";const Ye=Be(({className:t,...s},d)=>{const{styles:i,value:p}=Ue(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...i.swatch};return e.jsx(fa,{ref:d,className:Ve("ui-color-picker__swatch",t),color:p,isRounded:!0,__css:u,...s})});Ye.displayName="ColorPickerSwatch";Ye.__ui__="ColorPickerSwatch";const qe=Be(({className:t,children:s,...d},i)=>{const{styles:p}=Ue(),u={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},m=_a(s).map(w=>l.cloneElement(w,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(R.button,{ref:i,className:Ve("ui-color-picker__eye-dropper",t),__css:u,...d,children:Fa(s)?m:e.jsx(ha,{className:"ui-color-picker__eye-dropper__icon"})})});qe.displayName="ColorPickerEyeDropper";qe.__ui__="ColorPickerEyeDropper";const Ll={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",se=()=>e.jsx(r,{placeholder:a}),te=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),ce=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),ne=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ae,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:t,onClose:s})=>e.jsxs(Ae,{onClick:s,children:["Submit ",t]})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),me=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),he=()=>e.jsx(r,{formatInput:t=>t.toUpperCase(),placeholder:"#4387F4FF"}),fe=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),Ce=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),Pe=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),be=()=>e.jsx(r,{allowInput:!1,placeholder:a}),Se=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),ke=()=>e.jsx(r,{placeholder:a,withChannel:!1}),we=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),ge=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),xe=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),ye=()=>e.jsx(r,{placeholder:a,withResult:!0}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),ve=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),De=()=>e.jsx(r,{offset:[16,16],placeholder:a}),_e=()=>e.jsx(r,{gutter:32,placeholder:a}),Fe=()=>e.jsx(r,{duration:.4,placeholder:a}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,placeholder:a}),e.jsx(Ke,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,placeholder:a}),e.jsx(Ke,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Na,{fontSize:"lg"})}})]}),Ee=()=>{const[t,s]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:t,onChange:s})},Re=()=>{var h;const t={colorInput:"#4387f4ff"},{control:s,formState:{errors:d},handleSubmit:i,watch:p}=ua({defaultValues:t}),u=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(La,{as:"form",onSubmit:i(u),children:[e.jsx(Ke,{errorMessage:(h=d.colorInput)==null?void 0:h.message,isInvalid:!!d.colorInput,label:"Pick color",children:e.jsx(da,{name:"colorInput",control:s,render:({field:m})=>e.jsx(r,{...m})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Pr,br,Sr;se.parameters={...se.parameters,docs:{...(Pr=se.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(zr=(Ir=ie.parameters)==null?void 0:Ir.docs)==null?void 0:zr.source}}};var Or,Er,Rr;ue.parameters={...ue.parameters,docs:{...(Or=ue.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(Rr=(Er=ue.parameters)==null?void 0:Er.docs)==null?void 0:Rr.source}}};var Vr,Br,Nr;de.parameters={...de.parameters,docs:{...(Vr=de.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Mr=pe.parameters)==null?void 0:Mr.docs)==null?void 0:Hr.source}}};var Gr,Tr,Ar;me.parameters={...me.parameters,docs:{...(Gr=me.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" placeholder="hsla(240, 100%, 50%, 1)" />;
}`,...(Ar=(Tr=me.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Kr,Ur,Wr;he.parameters={...he.parameters,docs:{...(Kr=he.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} placeholder="#4387F4FF" />;
}`,...(Wr=(Ur=he.parameters)==null?void 0:Ur.docs)==null?void 0:Wr.source}}};var Yr,qr,Zr;fe.parameters={...fe.parameters,docs:{...(Yr=fe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(Zr=(qr=fe.parameters)==null?void 0:qr.docs)==null?void 0:Zr.source}}};var $r,Jr,Qr;Ce.parameters={...Ce.parameters,docs:{...($r=Ce.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...(Qr=(Jr=Ce.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Xr,eo,ro;Pe.parameters={...Pe.parameters,docs:{...(Xr=Pe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Oo=(zo=De.parameters)==null?void 0:zo.docs)==null?void 0:Oo.source}}};var Eo,Ro,Vo;_e.parameters={..._e.parameters,docs:{...(Eo=_e.parameters)==null?void 0:Eo.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(Vo=(Ro=_e.parameters)==null?void 0:Ro.docs)==null?void 0:Vo.source}}};var Bo,No,Lo;Fe.parameters={...Fe.parameters,docs:{...(Bo=Fe.parameters)==null?void 0:Bo.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Lo=(No=Fe.parameters)==null?void 0:No.docs)==null?void 0:Lo.source}}};var Mo,Ho,Go;Ie.parameters={...Ie.parameters,docs:{...(Mo=Ie.parameters)==null?void 0:Mo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isDisabled placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Go=(Ho=Ie.parameters)==null?void 0:Ho.docs)==null?void 0:Go.source}}};var To,Ao,Ko;ze.parameters={...ze.parameters,docs:{...(To=ze.parameters)==null?void 0:To.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isReadOnly placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Ko=(Ao=ze.parameters)==null?void 0:Ao.docs)==null?void 0:Ko.source}}};var Uo,Wo,Yo;Oe.parameters={...Oe.parameters,docs:{...(Uo=Oe.parameters)==null?void 0:Uo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <GhostIcon fontSize="lg" />
    }} />
    </>;
}`,...(Yo=(Wo=Oe.parameters)==null?void 0:Wo.docs)==null?void 0:Yo.source}}};var qo,Zo,$o;Ee.parameters={...Ee.parameters,docs:{...(qo=Ee.parameters)==null?void 0:qo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...($o=(Zo=Ee.parameters)==null?void 0:Zo.docs)==null?void 0:$o.source}}};var Jo,Qo,Xo;Re.parameters={...Re.parameters,docs:{...(Jo=Re.parameters)==null?void 0:Jo.docs,source:{originalSource:`() => {
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
}`,...(Xo=(Qo=Re.parameters)==null?void 0:Qo.docs)==null?void 0:Xo.source}}};const Ml=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Ml as __namedExportsOrder,se as basic,Ee as customControl,Oe as customEyeDropperIcon,Ll as default,be as disabledAllowInput,ke as disabledChannel,ge as disabledEyeDropper,Se as disabledPicker,we as disabledSwatch,xe as enabledColorPickerEyeDropper,ye as enabledResult,Ie as isDisabled,ze as isReadonly,Re as reactHookForm,je as withBorderColor,ie as withChildren,Pe as withCloseOnSelectSwatch,de as withColorSelectorSize,ne as withDefaultColor,te as withDefaultValue,Fe as withDuration,ce as withFallbackValue,me as withFormat,he as withFormatInput,_e as withGutter,De as withOffset,ve as withPlacement,ue as withSize,fe as withSwatches,Ce as withSwatchesColumns,pe as withVariant};
