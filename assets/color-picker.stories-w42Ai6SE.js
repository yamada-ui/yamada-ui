import{j as e}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{u as sa,C as ta}from"./index.esm-DXPXqkjk.js";import{u as ca,C as na,E as ia}from"./color-selector-O_UbHPtp.js";import{C as ua}from"./color-swatch-BxD8s7Cw.js";import{u as da}from"./index-Dz6agydm.js";import{u as pa}from"./index-B6ycpjcM.js";import{u as ma}from"./index-BzBNm7Tp.js";import{u as ha,f as fa,F as He}from"./form-control-DAXawruh.js";import{o as Ca,V as Pa,U as ba,a7 as Sa,aj as ka,W as wa,f as dr,a as pr,h as k,d as mr,b as Ie,c as Oe,z as ga,p as xa,j as ya}from"./factory-BgMvz7NM.js";import{e as ja,c as hr,o as va}from"./theme-provider-Bpmh2ODM.js";import{P as Da,a as Fa,b as _a}from"./popover-content-CkkufdAv.js";import{P as za}from"./portal-C14XFhbI.js";import{f as Ee}from"./forward-ref-BWI-Phbn.js";import{a as Ia}from"./use-component-style-D3MffxdG.js";import{B as Me}from"./button-knJHP-Ba.js";import{G as Oa}from"./ghost-wL9G5fkW.js";import{V as Ea}from"./stack-c0WUIOCC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-D5CPV5HA.js";import"./icon-CvhI1IwG.js";import"./use-var-Dgk44aKJ.js";import"./alpha-slider-ekZU1rdv.js";import"./use-color-slider-t3d4DqS_.js";import"./index-B4mTSuWb.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./hue-slider-Cxh-sKBe.js";import"./input-CkwgM_qk.js";import"./saturation-slider-CV5LwbY3.js";import"./index-DX38EdL3.js";import"./index-Du0-7Fls.js";import"./index-i7wmI0W_.js";import"./index-UbUyUaFk.js";import"./index-eVjHUBC4.js";import"./index-B9IsUjMJ.js";import"./index-CzplldKp.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./factory-yZQlYpPU.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-oCi7TKjr.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bm7s5BqF.js";import"./scale-fade-BQTws92u.js";import"./index-B8XB3FuZ.js";import"./loading-B_aB2PJP.js";import"./lucide-icon-2cUstn0F.js";const Va=s=>s,[Ra,Ge]=Ca({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ba=s=>{const{value:t,defaultValue:p,fallbackValue:c,defaultColor:u,onChange:m,onChangeStart:f,onChangeEnd:d,onSwatchClick:j,formatInput:h=Va,allowInput:v=!0,closeOnSelectSwatch:_,format:w,swatchesLabel:V,swatches:R,swatchesColumns:B,withPicker:N,withChannel:L,withResult:M=!1,withColorSelectorEyeDropper:H=!1,colorSelectorVariant:G,colorSelectorSize:z,colorSelectorColorScheme:T,isOpen:Ve,defaultIsOpen:Re,onOpen:Be,onClose:Ne,closeOnBlur:g=!0,closeOnEsc:I=!0,openDelay:A,closeDelay:K,isLazy:U,lazyBehavior:W,animation:Y,duration:q=.2,offset:J,gutter:Q,preventOverflow:X,flip:Z,matchWidth:Ue=z==="full",boundary:We,eventListeners:Ye,strategy:qe,placement:Je="bottom-start",modifiers:Qe,...S}=ha(s),{"aria-readonly":Na,...O}=Pa(S,fa),{disabled:D,readOnly:F}=O,[Xe,Ze]=ba(S,Sa),Le=l.useRef(null),Zo=l.useRef(null),{supported:$o,onOpen:$e}=ca(),[P,x]=da({value:t,defaultValue:p,onChange:m}),E=l.useRef(w??ja(P??u??"")),$=l.useRef(!1),[er,y]=l.useState(P??""),{isOpen:i,onOpen:rr,onClose:or}=pa({isOpen:Ve,defaultIsOpen:Re,onOpen:Be,onClose:Ne}),b=l.useCallback(()=>{D||F||rr()},[rr,D,F]),C=l.useCallback(()=>{if(!i)return;const o=hr(P,c)(E.current);x(n=>!o||n===o?n:o),y(h(o??"")),or()},[E,i,x,or,P,h,y,c]),ar=l.useCallback(()=>{i||b()},[i,b]),lr=l.useCallback(()=>{$.current=!0,!i&&b()},[i,b]),sr=l.useCallback(()=>{$.current=!1},[]),tr=l.useCallback(o=>{const n=ka(o);wa(Le.current,n)||g&&i&&C()},[g,i,C]),cr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),D||F)return;const ur={Space:i?void 0:b,Enter:i?void 0:b,Escape:I?C:void 0}[o.key];ur&&(o.preventDefault(),o.stopPropagation(),ur())},[D,F,i,b,I,C]),nr=l.useCallback(o=>{const n=o.target.value;y(h(n)),x(n)},[y,h,x]),ee=l.useCallback(o=>{x(o),setTimeout(()=>{$.current||y(h(o))})},[x,h]),ir=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:n}=await $e()??{};if(!n)return;ee(n),d==null||d(n)}catch{}},[$e,ee,d]);ma({ref:Le,handler:C,enabled:i&&g}),dr(()=>{if(!w||!P)return;E.current=w;const o=hr(P,c)(w);o&&(y(h(o)),x(o))},[w]),dr(()=>{$.current||!t||y(h(t))},[t]);const ea=l.useCallback(o=>({closeOnBlur:g,openDelay:A,closeDelay:K,isLazy:U,lazyBehavior:W,animation:Y,duration:q,offset:J,gutter:Q,preventOverflow:X,flip:Z,matchWidth:Ue,boundary:We,eventListeners:Ye,strategy:qe,placement:Je,modifiers:Qe,...o,trigger:"never",closeOnButton:!1,isOpen:i,onOpen:b,onClose:C}),[g,A,K,U,W,Y,q,J,Q,X,Z,Ue,We,Ye,qe,Je,Qe,i,b,C]),ra=l.useCallback((o={},n=null)=>({ref:pr(Le,n),...Xe,...o,...O,onClick:k(o.onClick,S.onClick,ar),onBlur:k(o.onBlur,S.onBlur,tr)}),[Xe,O,tr,ar,S]),oa=l.useCallback((o={},n=null)=>({ref:pr(Zo,n),tabIndex:v?0:-1,...Ze,...o,style:{...o.style,...v?{}:{pointerEvents:"none"}},value:er,"data-active":mr(i),"aria-expanded":mr(i),onFocus:k(o.onFocus,S.onFocus,lr),onKeyDown:k(o.onKeyDown,S.onKeyDown,cr),onChange:k(o.onChange,nr),onBlur:k(o.onFocus,sr)}),[v,Ze,er,i,S,lr,cr,nr,sr]),aa=l.useCallback((o={},n=null)=>({disabled:D,"aria-label":"Pick a color",...o,ref:n,style:{...o.style,pointerEvents:F?"none":void 0},onClick:k(o.onClick,ir)}),[D,ir,F]),la=l.useCallback(o=>({...O,...o,value:P,defaultValue:u,fallbackValue:c,onChange:ee,onChangeStart:f,onChangeEnd:d,onSwatchClick:k(j,_?C:void 0),format:E.current,withPicker:N,withChannel:L,withResult:M,withEyeDropper:H,swatchesLabel:V,swatches:R,swatchesColumns:B,variant:G,size:z,colorScheme:T}),[O,P,c,u,ee,f,d,j,C,_,E,N,L,M,H,V,R,B,T,z,G]);return{value:P,eyeDropperSupported:$o,allowInput:v,onClose:C,getPopoverProps:ea,getContainerProps:ra,getFieldProps:oa,getSelectorProps:la,getEyeDropperProps:aa}},r=Ee(({withSwatch:s=!0,...t},p)=>{const[c,u]=Ia("ColorPicker",{withSwatch:s,...t});let{className:m,children:f,withEyeDropper:d=!0,color:j,h,height:v,minH:_,minHeight:w,containerProps:V,inputProps:R,swatchProps:B,eyeDropperProps:N,saturationSliderRef:L,saturationSliderProps:M,swatchesProps:H,hueSliderRef:G,hueSliderProps:z,alphaSliderRef:T,alphaSliderProps:Ve,channelsProps:Re,channelProps:Be,portalProps:Ne={isDisabled:!0},...g}=va(u,["withSwatch"]);const{value:I,allowInput:A,eyeDropperSupported:K,getPopoverProps:U,getContainerProps:W,getFieldProps:Y,getSelectorProps:q,getEyeDropperProps:J,onClose:Q,...X}=Ba(g);h??(h=v),_??(_=w);const Z={w:"100%",h:"fit-content",color:j,...c.container};return e.jsx(Ra,{value:{styles:c,value:I,...X},children:e.jsx(Da,{...U(),children:e.jsxs(Ie.div,{className:Oe("ui-color-picker",m),__css:Z,...W(V),children:[e.jsxs(Ie.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:A?void 0:"pointer",...c.inner},children:[s?e.jsx(Ae,{...B}):null,e.jsx(Fa,{children:e.jsx(Te,{h,minH:_,...Y(R,p)})}),K&&d?e.jsx(Ke,{...J(N)}):null]}),e.jsx(za,{...Ne,children:e.jsx(_a,{className:"ui-color-picker__content",__css:{...c.content},children:e.jsx(na,{className:"ui-color-picker__picker",...q({saturationSliderRef:L,saturationSliderProps:M,swatchesProps:H,hueSliderRef:G,hueSliderProps:z,alphaSliderRef:T,alphaSliderProps:Ve,channelsProps:Re,channelProps:Be}),children:ga(f,{value:I,onClose:Q})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const Te=Ee(({className:s,h:t,minH:p,...c},u)=>{const{styles:m}=Ge(),f={ps:"2rem",pe:"2rem",h:t,minH:p,display:"flex",alignItems:"center",...m.field};return e.jsx(Ie.input,{ref:u,className:Oe("ui-color-picker__field",s),__css:f,...c})});Te.displayName="ColorPickerField";Te.__ui__="ColorPickerField";const Ae=Ee(({className:s,...t},p)=>{const{value:c,styles:u}=Ge(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...u.swatch};return e.jsx(ua,{ref:p,className:Oe("ui-color-picker__swatch",s),__css:m,color:c,isRounded:!0,...t})});Ae.displayName="ColorPickerSwatch";Ae.__ui__="ColorPickerSwatch";const Ke=Ee(({className:s,children:t,...p},c)=>{const{styles:u}=Ge(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...u.eyeDropper},d=xa(t).map(j=>l.cloneElement(j,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(Ie.button,{ref:c,className:Oe("ui-color-picker__eye-dropper",s),__css:m,...p,children:ya(t)?d:e.jsx(ia,{className:"ui-color-picker__eye-dropper__icon"})})});Ke.displayName="ColorPickerEyeDropper";Ke.__ui__="ColorPickerEyeDropper";const Ol={title:"Components / Forms / ColorPicker",component:r},a="#4387f4",re=()=>e.jsx(r,{placeholder:a}),oe=()=>e.jsx(r,{placeholder:a,defaultValue:"#4387f4ff"}),ae=()=>e.jsx(r,{placeholder:a,fallbackValue:"#000000"}),le=()=>e.jsx(r,{placeholder:a,defaultColor:"#4387f4ff"}),se=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Me,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:t})=>e.jsxs(Me,{onClick:t,children:["Submit ",s]})})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),ie=()=>e.jsx(r,{placeholder:"hsla(240, 100%, 50%, 1)",defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),ue=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:s=>s.toUpperCase()}),de=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),pe=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),me=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),he=()=>e.jsx(r,{placeholder:a,allowInput:!1}),fe=()=>e.jsx(r,{placeholder:a,withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),Ce=()=>e.jsx(r,{placeholder:a,withChannel:!1}),Pe=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),be=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),Se=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),ke=()=>e.jsx(r,{placeholder:a,withResult:!0}),we=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),ge=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),xe=()=>e.jsx(r,{placeholder:a,offset:[16,16]}),ye=()=>e.jsx(r,{placeholder:a,gutter:32}),je=()=>e.jsx(r,{placeholder:a,duration:.4}),ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isDisabled:!0}),e.jsx(He,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isReadOnly:!0}),e.jsx(He,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"},placeholder:a}),e.jsx(r,{eyeDropperProps:{children:e.jsx(Oa,{fontSize:"lg"})},placeholder:a})]}),_e=()=>{const[s,t]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:t})},ze=()=>{var f;const s={colorInput:"#4387f4ff"},{control:t,handleSubmit:p,watch:c,formState:{errors:u}}=sa({defaultValues:s}),m=d=>console.log("submit:",d);return console.log("watch:",c()),e.jsxs(Ea,{as:"form",onSubmit:p(m),children:[e.jsx(He,{isInvalid:!!u.colorInput,label:"Pick color",errorMessage:(f=u.colorInput)==null?void 0:f.message,children:e.jsx(ta,{name:"colorInput",control:t,render:({field:d})=>e.jsx(r,{...d})})}),e.jsx(Me,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fr,Cr,Pr;re.parameters={...re.parameters,docs:{...(fr=re.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(Pr=(Cr=re.parameters)==null?void 0:Cr.docs)==null?void 0:Pr.source}}};var br,Sr,kr;oe.parameters={...oe.parameters,docs:{...(br=oe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultValue="#4387f4ff" />;
}`,...(kr=(Sr=oe.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var wr,gr,xr;ae.parameters={...ae.parameters,docs:{...(wr=ae.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} fallbackValue="#000000" />;
}`,...(xr=(gr=ae.parameters)==null?void 0:gr.docs)==null?void 0:xr.source}}};var yr,jr,vr;le.parameters={...le.parameters,docs:{...(yr=le.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultColor="#4387f4ff" />;
}`,...(vr=(jr=le.parameters)==null?void 0:jr.docs)==null?void 0:vr.source}}};var Dr,Fr,_r;se.parameters={...se.parameters,docs:{...(Dr=se.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(_r=(Fr=se.parameters)==null?void 0:Fr.docs)==null?void 0:_r.source}}};var zr,Ir,Or;te.parameters={...te.parameters,docs:{...(zr=te.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(Or=(Ir=te.parameters)==null?void 0:Ir.docs)==null?void 0:Or.source}}};var Er,Vr,Rr;ce.parameters={...ce.parameters,docs:{...(Er=ce.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Rr=(Vr=ce.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var Br,Nr,Lr;ne.parameters={...ne.parameters,docs:{...(Br=ne.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Lr=(Nr=ne.parameters)==null?void 0:Nr.docs)==null?void 0:Lr.source}}};var Mr,Hr,Gr;ie.parameters={...ie.parameters,docs:{...(Mr=ie.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="hsla(240, 100%, 50%, 1)" defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(Gr=(Hr=ie.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Tr,Ar,Kr;ue.parameters={...ue.parameters,docs:{...(Tr=ue.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Kr=(Ar=ue.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Ur,Wr,Yr;de.parameters={...de.parameters,docs:{...(Ur=de.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Yr=(Wr=de.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var qr,Jr,Qr;pe.parameters={...pe.parameters,docs:{...(qr=pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Qr=(Jr=pe.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;me.parameters={...me.parameters,docs:{...(Xr=me.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...($r=(Zr=me.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var eo,ro,oo;he.parameters={...he.parameters,docs:{...(eo=he.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} allowInput={false} />;
}`,...(oo=(ro=he.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,lo,so;fe.parameters={...fe.parameters,docs:{...(ao=fe.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(so=(lo=fe.parameters)==null?void 0:lo.docs)==null?void 0:so.source}}};var to,co,no;Ce.parameters={...Ce.parameters,docs:{...(to=Ce.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(no=(co=Ce.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;Pe.parameters={...Pe.parameters,docs:{...(io=Pe.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(po=(uo=Pe.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;be.parameters={...be.parameters,docs:{...(mo=be.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(fo=(ho=be.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,Po,bo;Se.parameters={...Se.parameters,docs:{...(Co=Se.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(bo=(Po=Se.parameters)==null?void 0:Po.docs)==null?void 0:bo.source}}};var So,ko,wo;ke.parameters={...ke.parameters,docs:{...(So=ke.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(wo=(ko=ke.parameters)==null?void 0:ko.docs)==null?void 0:wo.source}}};var go,xo,yo;we.parameters={...we.parameters,docs:{...(go=we.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(yo=(xo=we.parameters)==null?void 0:xo.docs)==null?void 0:yo.source}}};var jo,vo,Do;ge.parameters={...ge.parameters,docs:{...(jo=ge.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(Do=(vo=ge.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var Fo,_o,zo;xe.parameters={...xe.parameters,docs:{...(Fo=xe.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} offset={[16, 16]} />;
}`,...(zo=(_o=xe.parameters)==null?void 0:_o.docs)==null?void 0:zo.source}}};var Io,Oo,Eo;ye.parameters={...ye.parameters,docs:{...(Io=ye.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} gutter={32} />;
}`,...(Eo=(Oo=ye.parameters)==null?void 0:Oo.docs)==null?void 0:Eo.source}}};var Vo,Ro,Bo;je.parameters={...je.parameters,docs:{...(Vo=je.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} duration={0.4} />;
}`,...(Bo=(Ro=je.parameters)==null?void 0:Ro.docs)==null?void 0:Bo.source}}};var No,Lo,Mo;ve.parameters={...ve.parameters,docs:{...(No=ve.parameters)==null?void 0:No.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Mo=(Lo=ve.parameters)==null?void 0:Lo.docs)==null?void 0:Mo.source}}};var Ho,Go,To;De.parameters={...De.parameters,docs:{...(Ho=De.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(To=(Go=De.parameters)==null?void 0:Go.docs)==null?void 0:To.source}}};var Ao,Ko,Uo;Fe.parameters={...Fe.parameters,docs:{...(Ao=Fe.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} placeholder={defaultPlaceholder} />
      <ColorPicker eyeDropperProps={{
      children: <Ghost fontSize="lg" />
    }} placeholder={defaultPlaceholder} />
    </>;
}`,...(Uo=(Ko=Fe.parameters)==null?void 0:Ko.docs)==null?void 0:Uo.source}}};var Wo,Yo,qo;_e.parameters={..._e.parameters,docs:{...(Wo=_e.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(qo=(Yo=_e.parameters)==null?void 0:Yo.docs)==null?void 0:qo.source}}};var Jo,Qo,Xo;ze.parameters={...ze.parameters,docs:{...(Jo=ze.parameters)==null?void 0:Jo.docs,source:{originalSource:`() => {
  interface Data {
    colorInput: string;
  }
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
}`,...(Xo=(Qo=ze.parameters)==null?void 0:Qo.docs)==null?void 0:Xo.source}}};const El=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{El as __namedExportsOrder,re as basic,_e as customControl,Fe as customEyeDropperIcon,Ol as default,he as disabledAllowInput,Ce as disabledChannel,be as disabledEyeDropper,fe as disabledPicker,Pe as disabledSwatch,Se as enabledColorPickerEyeDropper,ke as enabledResult,ve as isDisabled,De as isReadonly,ze as reactHookForm,we as withBorderColor,se as withChildren,me as withCloseOnSelectSwatch,ce as withColorSelectorSize,le as withDefaultColor,oe as withDefaultValue,je as withDuration,ae as withFallbackValue,ie as withFormat,ue as withFormatInput,ye as withGutter,xe as withOffset,ge as withPlacement,te as withSize,de as withSwatches,pe as withSwatchesColumns,ne as withVariant};
