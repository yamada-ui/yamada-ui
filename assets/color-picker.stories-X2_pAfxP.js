import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as l}from"./index-BwPxMuoB.js";import{u as ma,C as ha}from"./index.esm-C038jXrr.js";import{u as fa,C as Ca,E as Pa}from"./color-selector-BBlWAhbe.js";import{C as ba}from"./color-swatch-DrKD-_y8.js";import{u as Sa}from"./index-DLOQPSsO.js";import{u as ka}from"./index-CmygkWjO.js";import{u as wa}from"./index-2pdm5d7T.js";import{u as ga,f as xa,d as Ke}from"./form-control-4O_IQfgA.js";import{B as ya,a3 as ja,M as va,ae as _a,an as Da,a4 as Fa,o as Cr,h as g,a as Te,d as Pr,b as V,c as Oe,J as za,g as Ia,q as Oa}from"./factory-B_KMcXyW.js";import{f as Ea,c as br,o as Va}from"./theme-provider-DGyR61Aa.js";import{P as Ba,b as Ra,a as Na}from"./popover-trigger-lFjT6k2t.js";import{P as La}from"./portal-DnDmgWrA.js";import{f as Ee}from"./forward-ref-Ukjd1cIW.js";import{a as Ma}from"./use-component-style-65RA3nVD.js";import{B as Ae}from"./button-Dm54j0EP.js";import{G as Ha}from"./ghost-D4FJCodb.js";import{V as Ga}from"./stack-D_e4Awei.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DgceULQS.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";import"./alpha-slider-DpgWne9y.js";import"./use-color-slider-Cjw31GEx.js";import"./index-CpILZzml.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-C9-ODn3q.js";import"./input-CVLzOvtv.js";import"./saturation-slider-DAcjquRd.js";import"./close-button-DYk-GqDy.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./slide-fade-B3WI7AqC.js";import"./index-swnplGbx.js";import"./index-AoowuF6j.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-DODAe1Af.js";import"./scale-fade-B70jfWAg.js";import"./index-kCrJIFe4.js";import"./index-qZwaV1-B.js";import"./index-HHw4H1QN.js";import"./index-rMDCi0HR.js";import"./index-8mCCCrtj.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./loading-C3oE1vJx.js";import"./createLucideIcon-D0BTS2fX.js";const Ta=s=>s,[Aa,Ue]=ya({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ka=s=>{const{allowInput:t=!0,animation:d,boundary:i,closeDelay:p,closeOnBlur:u=!0,closeOnEsc:h=!0,closeOnSelectSwatch:m,colorSelectorColorScheme:_,colorSelectorSize:z,colorSelectorVariant:B,defaultColor:I,defaultIsOpen:Ve,defaultOpen:Be,defaultValue:Re,duration:R=.2,eventListeners:N,fallbackValue:x,flip:L,format:y,formatInput:f=Ta,gutter:M,isLazy:Ne,isOpen:Le,lazy:H=Ne,lazyBehavior:G,matchWidth:T=z==="full",modifiers:A,offset:K,open:Me,openDelay:O,placement:U="bottom-start",preventOverflow:W,strategy:Y,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:D,withChannel:X,withColorSelectorEyeDropper:Z=!1,withPicker:Je,withResult:Qe=!1,onChange:oa,onChangeEnd:F,onChangeStart:Xe,onClick:Ze,onClose:aa,onKeyDown:$e,onOpen:la,onSwatchClick:er,...rr}=ga(s),{"aria-readonly":Ua,onBlur:or,onFocus:ar,...b}=ja(rr,xa),{disabled:C,readOnly:w}=b,[lr,He]=va(rr,_a),Ge=l.useRef(null),ta=l.useRef(null),{supported:sa,onOpen:tr}=fa(),[S,j]=Sa({defaultValue:Re,value:D,onChange:oa}),E=l.useRef(y??Ea(S||I||"")),$=l.useRef(!1),[sr,v]=l.useState(S||""),{open:n,onClose:cr,onOpen:nr}=ka({defaultIsOpen:Ve,defaultOpen:Be,isOpen:Le,open:Me,onClose:aa,onOpen:la}),k=l.useCallback(()=>{C||w||nr()},[nr,C,w]),P=l.useCallback(()=>{if(!n)return;const o=br(S,x)(E.current);j(c=>!o||c===o?c:o),v(f(o??"")),cr()},[E,n,j,cr,S,f,v,x]),ir=l.useCallback(()=>{n||k()},[n,k]),ur=l.useCallback(()=>{$.current=!0,!n&&k()},[n,k]),dr=l.useCallback(()=>{$.current=!1},[]),pr=l.useCallback(o=>{const c=Da(o);Fa(Ge.current,c)||u&&n&&P()},[u,n,P]),mr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),C||w)return;const re={Enter:n?void 0:k,Escape:h?P:void 0,Space:n?void 0:k}[o.key];re&&(o.preventDefault(),o.stopPropagation(),re())},[C,w,n,k,h,P]),hr=l.useCallback(o=>{const c=o.target.value;v(f(c)),j(c)},[v,f,j]),ee=l.useCallback(o=>{j(o),setTimeout(()=>{$.current||v(f(o))})},[j,f]),fr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:c}=await tr()??{};if(!c)return;ee(c),F==null||F(c)}catch{}},[tr,ee,F]);wa({ref:Ge,enabled:n&&u,handler:P}),Cr(()=>{if(!y||!S)return;E.current=y;const o=br(S,x)(y);o&&(v(f(o)),j(o))},[y]),Cr(()=>{$.current||!D||v(f(D))},[D]);const ca=l.useCallback(o=>({animation:d,boundary:i,closeDelay:p,closeOnBlur:u,duration:R,eventListeners:N,flip:L,gutter:M,lazy:H,lazyBehavior:G,matchWidth:T,modifiers:A,offset:K,openDelay:O,placement:U,preventOverflow:W,strategy:Y,...o,closeOnButton:!1,open:n,trigger:"never",onClose:P,onOpen:k}),[u,O,p,H,G,d,R,K,M,W,L,T,i,N,Y,U,A,n,k,P]),na=l.useCallback((o={},c=null)=>({ref:Te(Ge,c),...lr,...o,...b,onBlur:g(o.onBlur,or,pr),onClick:g(o.onClick,Ze,ir)}),[lr,b,or,Ze,pr,ir]),ia=l.useCallback((o={},c=null)=>({"aria-haspopup":"dialog","data-active":Pr(n),"data-not-allowed":Pr(!w&&!C&&!t),role:"combobox",tabIndex:-1,...b,...o,ref:Te(ta,c),onBlur:g(o.onFocus,dr),onFocus:g(o.onFocus,ar,ur),onKeyDown:g(o.onKeyDown,$e,mr)}),[t,b,n,w,C,dr,ar,ur,$e,mr]),ua=l.useCallback((o={},c=null)=>{const re={...o.style,...He.style,...C||!t?{pointerEvents:"none"}:{}};return{autoComplete:"off",tabIndex:t?0:-1,...b,...He,...o,ref:c,style:re,value:sr,onChange:g(o.onChange,hr)}},[He,t,C,b,sr,hr]),da=l.useCallback((o={},c=null)=>({"aria-label":"Pick a color",disabled:C,...o,ref:c,style:{...o.style,pointerEvents:w?"none":void 0},onClick:g(o.onClick,fr)}),[C,fr,w]),pa=l.useCallback(o=>({...b,...o,colorScheme:_,size:z,variant:B,defaultValue:I,fallbackValue:x,format:E.current,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:S,withChannel:X,withEyeDropper:Z,withPicker:Je,withResult:Qe,onChange:ee,onChangeEnd:F,onChangeStart:Xe,onSwatchClick:g(er,m?P:void 0)}),[b,S,x,I,ee,Xe,F,er,P,m,E,Je,X,Qe,Z,Q,q,J,_,z,B]);return{allowInput:t,eyeDropperSupported:sa,value:S,getContainerProps:na,getEyeDropperProps:da,getFieldProps:ia,getInputProps:ua,getPopoverProps:ca,getSelectorProps:pa,onClose:P}},r=Ee(({withSwatch:s=!0,...t},d)=>{const[i,p]=Ma("ColorPicker",{withSwatch:s,...t}),{className:u,alphaSliderRef:h,children:m,color:_,h:z,height:B=z,hueSliderRef:I,minH:Ve,minHeight:Be=Ve,saturationSliderRef:Re,withEyeDropper:R=!0,alphaSliderProps:N,channelProps:x,channelsProps:L,containerProps:y,eyeDropperProps:f,fieldProps:M,hueSliderProps:Ne,inputProps:Le,portalProps:H={disabled:!0},saturationSliderProps:G,swatchesProps:T,swatchProps:A,...K}=Va(p,["withSwatch"]),{eyeDropperSupported:Me,value:O,getContainerProps:U,getEyeDropperProps:W,getFieldProps:Y,getInputProps:q,getPopoverProps:J,getSelectorProps:Q,onClose:D,...X}=Ka(K),Z={color:_,h:"fit-content",w:"100%",...i.container};return e.jsx(Aa,{value:{styles:i,value:O,...X},children:e.jsx(Ba,{...J(),children:e.jsxs(V.div,{className:Oe("ui-color-picker",u),__css:Z,...U(y),children:[e.jsxs(V.div,{className:"ui-color-picker__inner",__css:{position:"relative",...i.inner},children:[s?e.jsx(Ye,{...A}):null,e.jsx(We,{height:B,minHeight:Be,...Y(M,d),inputProps:q(Le)}),Me&&R?e.jsx(qe,{...W(f)}):null]}),e.jsx(La,{...H,children:e.jsx(Ra,{as:"div",className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(Ca,{className:"ui-color-picker__picker",...Q({alphaSliderRef:h,hueSliderRef:I,saturationSliderRef:Re,alphaSliderProps:N,channelProps:x,channelsProps:L,hueSliderProps:Ne,saturationSliderProps:G,swatchesProps:T}),children:za(m,{value:O,onClose:D})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const We=Ee(({className:s,inputProps:t,...d},i)=>{const{styles:p}=Ue(),{ref:u,...h}=t??{},m={alignItems:"center",display:"flex",pe:"2rem",ps:"2rem",...p.field};return e.jsx(Na,{children:e.jsx(V.div,{className:Oe("ui-color-picker__field",s),__css:m,...d,children:e.jsx(V.input,{ref:Te(i,u),className:"ui-color-picker-picker__field__input",display:"inline-block",w:"100%",...h})})})});We.displayName="ColorPickerField";We.__ui__="ColorPickerField";const Ye=Ee(({className:s,...t},d)=>{const{styles:i,value:p}=Ue(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...i.swatch};return e.jsx(ba,{ref:d,className:Oe("ui-color-picker__swatch",s),color:p,isRounded:!0,__css:u,...t})});Ye.displayName="ColorPickerSwatch";Ye.__ui__="ColorPickerSwatch";const qe=Ee(({className:s,children:t,...d},i)=>{const{styles:p}=Ue(),u={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},m=Ia(t).map(_=>l.cloneElement(_,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(V.button,{ref:i,className:Oe("ui-color-picker__eye-dropper",s),__css:u,...d,children:Oa(t)?m:e.jsx(Pa,{className:"ui-color-picker__eye-dropper__icon"})})});qe.displayName="ColorPickerEyeDropper";qe.__ui__="ColorPickerEyeDropper";const Tl={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",oe=()=>e.jsx(r,{placeholder:a}),ae=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),le=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),te=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),se=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Ae,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:t})=>e.jsxs(Ae,{onClick:t,children:["Submit ",s]})})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),ue=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),de=()=>e.jsx(r,{formatInput:s=>s.toUpperCase(),placeholder:"#4387F4FF"}),pe=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),me=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),he=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),fe=()=>e.jsx(r,{allowInput:!1,placeholder:a}),Ce=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),Pe=()=>e.jsx(r,{placeholder:a,withChannel:!1}),be=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),Se=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),ke=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),we=()=>e.jsx(r,{placeholder:a,withResult:!0}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),xe=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),ye=()=>e.jsx(r,{offset:[16,16],placeholder:a}),je=()=>e.jsx(r,{gutter:32,placeholder:a}),ve=()=>e.jsx(r,{duration:.4,placeholder:a}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,placeholder:a}),e.jsx(Ke,{disabled:!0,helperMessage:"Please select your favorite color",label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,readOnly:!0}),e.jsx(Ke,{helperMessage:"Please select your favorite color",label:"Pick color",readOnly:!0,children:e.jsx(r,{placeholder:a})})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Ha,{fontSize:"lg"})}})]}),ze=()=>{const[s,t]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:t})},Ie=()=>{var h;const s={colorInput:"#4387f4ff"},{control:t,formState:{errors:d},handleSubmit:i,watch:p}=ma({defaultValues:s}),u=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(Ga,{as:"form",onSubmit:i(u),children:[e.jsx(Ke,{errorMessage:(h=d.colorInput)==null?void 0:h.message,invalid:!!d.colorInput,label:"Pick color",children:e.jsx(ha,{name:"colorInput",control:t,render:({field:m})=>e.jsx(r,{...m})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Sr,kr,wr;oe.parameters={...oe.parameters,docs:{...(Sr=oe.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(wr=(kr=oe.parameters)==null?void 0:kr.docs)==null?void 0:wr.source}}};var gr,xr,yr;ae.parameters={...ae.parameters,docs:{...(gr=ae.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(yr=(xr=ae.parameters)==null?void 0:xr.docs)==null?void 0:yr.source}}};var jr,vr,_r;le.parameters={...le.parameters,docs:{...(jr=le.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />;
}`,...(_r=(vr=le.parameters)==null?void 0:vr.docs)==null?void 0:_r.source}}};var Dr,Fr,zr;te.parameters={...te.parameters,docs:{...(Dr=te.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(zr=(Fr=te.parameters)==null?void 0:Fr.docs)==null?void 0:zr.source}}};var Ir,Or,Er;se.parameters={...se.parameters,docs:{...(Ir=se.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
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
}`,...(Er=(Or=se.parameters)==null?void 0:Or.docs)==null?void 0:Er.source}}};var Vr,Br,Rr;ce.parameters={...ce.parameters,docs:{...(Vr=ce.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(Rr=(Br=ce.parameters)==null?void 0:Br.docs)==null?void 0:Rr.source}}};var Nr,Lr,Mr;ne.parameters={...ne.parameters,docs:{...(Nr=ne.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker colorSelectorSize="sm" placeholder="small size" />
      <ColorPicker colorSelectorSize="md" placeholder="medium size" />
      <ColorPicker colorSelectorSize="lg" placeholder="large size" />
      <ColorPicker colorSelectorSize="full" placeholder="full size" />
    </>;
}`,...(Mr=(Lr=ne.parameters)==null?void 0:Lr.docs)==null?void 0:Mr.source}}};var Hr,Gr,Tr;ie.parameters={...ie.parameters,docs:{...(Hr=ie.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Tr=(Gr=ie.parameters)==null?void 0:Gr.docs)==null?void 0:Tr.source}}};var Ar,Kr,Ur;ue.parameters={...ue.parameters,docs:{...(Ar=ue.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" placeholder="hsla(240, 100%, 50%, 1)" />;
}`,...(Ur=(Kr=ue.parameters)==null?void 0:Kr.docs)==null?void 0:Ur.source}}};var Wr,Yr,qr;de.parameters={...de.parameters,docs:{...(Wr=de.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} placeholder="#4387F4FF" />;
}`,...(qr=(Yr=de.parameters)==null?void 0:Yr.docs)==null?void 0:qr.source}}};var Jr,Qr,Xr;pe.parameters={...pe.parameters,docs:{...(Jr=pe.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(Xr=(Qr=pe.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var Zr,$r,eo;me.parameters={...me.parameters,docs:{...(Zr=me.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...(eo=($r=me.parameters)==null?void 0:$r.docs)==null?void 0:eo.source}}};var ro,oo,ao;he.parameters={...he.parameters,docs:{...(ro=he.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(ao=(oo=he.parameters)==null?void 0:oo.docs)==null?void 0:ao.source}}};var lo,to,so;fe.parameters={...fe.parameters,docs:{...(lo=fe.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder={defaultPlaceholder} />;
}`,...(so=(to=fe.parameters)==null?void 0:to.docs)==null?void 0:so.source}}};var co,no,io;Ce.parameters={...Ce.parameters,docs:{...(co=Ce.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" withPicker={false} />;
}`,...(io=(no=Ce.parameters)==null?void 0:no.docs)==null?void 0:io.source}}};var uo,po,mo;Pe.parameters={...Pe.parameters,docs:{...(uo=Pe.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(mo=(po=Pe.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var ho,fo,Co;be.parameters={...be.parameters,docs:{...(ho=be.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(Co=(fo=be.parameters)==null?void 0:fo.docs)==null?void 0:Co.source}}};var Po,bo,So;Se.parameters={...Se.parameters,docs:{...(Po=Se.parameters)==null?void 0:Po.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(So=(bo=Se.parameters)==null?void 0:bo.docs)==null?void 0:So.source}}};var ko,wo,go;ke.parameters={...ke.parameters,docs:{...(ko=ke.parameters)==null?void 0:ko.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(go=(wo=ke.parameters)==null?void 0:wo.docs)==null?void 0:go.source}}};var xo,yo,jo;we.parameters={...we.parameters,docs:{...(xo=we.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(jo=(yo=we.parameters)==null?void 0:yo.docs)==null?void 0:jo.source}}};var vo,_o,Do;ge.parameters={...ge.parameters,docs:{...(vo=ge.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(Do=(_o=ge.parameters)==null?void 0:_o.docs)==null?void 0:Do.source}}};var Fo,zo,Io;xe.parameters={...xe.parameters,docs:{...(Fo=xe.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(Io=(zo=xe.parameters)==null?void 0:zo.docs)==null?void 0:Io.source}}};var Oo,Eo,Vo;ye.parameters={...ye.parameters,docs:{...(Oo=ye.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />;
}`,...(Vo=(Eo=ye.parameters)==null?void 0:Eo.docs)==null?void 0:Vo.source}}};var Bo,Ro,No;je.parameters={...je.parameters,docs:{...(Bo=je.parameters)==null?void 0:Bo.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(No=(Ro=je.parameters)==null?void 0:Ro.docs)==null?void 0:No.source}}};var Lo,Mo,Ho;ve.parameters={...ve.parameters,docs:{...(Lo=ve.parameters)==null?void 0:Lo.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Ho=(Mo=ve.parameters)==null?void 0:Mo.docs)==null?void 0:Ho.source}}};var Go,To,Ao;_e.parameters={..._e.parameters,docs:{...(Go=_e.parameters)==null?void 0:Go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker disabled placeholder={defaultPlaceholder} />

      <FormControl disabled helperMessage="Please select your favorite color" label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Ao=(To=_e.parameters)==null?void 0:To.docs)==null?void 0:Ao.source}}};var Ko,Uo,Wo;De.parameters={...De.parameters,docs:{...(Ko=De.parameters)==null?void 0:Ko.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} readOnly />

      <FormControl helperMessage="Please select your favorite color" label="Pick color" readOnly>
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Wo=(Uo=De.parameters)==null?void 0:Uo.docs)==null?void 0:Wo.source}}};var Yo,qo,Jo;Fe.parameters={...Fe.parameters,docs:{...(Yo=Fe.parameters)==null?void 0:Yo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <GhostIcon fontSize="lg" />
    }} />
    </>;
}`,...(Jo=(qo=Fe.parameters)==null?void 0:qo.docs)==null?void 0:Jo.source}}};var Qo,Xo,Zo;ze.parameters={...ze.parameters,docs:{...(Qo=ze.parameters)==null?void 0:Qo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Zo=(Xo=ze.parameters)==null?void 0:Xo.docs)==null?void 0:Zo.source}}};var $o,ea,ra;Ie.parameters={...Ie.parameters,docs:{...($o=Ie.parameters)==null?void 0:$o.docs,source:{originalSource:`() => {
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
}`,...(ra=(ea=Ie.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};const Al=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","disabled","readOnly","customEyeDropperIcon","customControl","reactHookForm"];export{Al as __namedExportsOrder,oe as basic,ze as customControl,Fe as customEyeDropperIcon,Tl as default,_e as disabled,fe as disabledAllowInput,Pe as disabledChannel,Se as disabledEyeDropper,Ce as disabledPicker,be as disabledSwatch,ke as enabledColorPickerEyeDropper,we as enabledResult,Ie as reactHookForm,De as readOnly,ge as withBorderColor,se as withChildren,he as withCloseOnSelectSwatch,ne as withColorSelectorSize,te as withDefaultColor,ae as withDefaultValue,ve as withDuration,le as withFallbackValue,ue as withFormat,de as withFormatInput,je as withGutter,ye as withOffset,xe as withPlacement,ce as withSize,pe as withSwatches,me as withSwatchesColumns,ie as withVariant};
