import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{u as oa,C as aa}from"./index.esm-DXPXqkjk.js";import{u as la,C as sa,E as ta}from"./color-selector-DuCXpltR.js";import{C as ca}from"./color-swatch-D_L8HlbC.js";import{u as na}from"./index-Yk47zk-U.js";import{u as ia}from"./index-DeN1XzU7.js";import{u as ua}from"./index-D3Ssu5BV.js";import{u as da,f as pa,F as He}from"./form-control-CqkY70re.js";import{l as ma,T as ha,S as fa,a2 as Ca,af as ba,U as Pa,f as nr,a as ir,h as k,d as ur,b as Oe,c as Ee,B as Sa,t as ka,j as wa}from"./factory-CKqVSKj1.js";import{f as ga,c as dr,o as xa}from"./theme-provider-BTK0d_tQ.js";import{P as ja,a as ya,b as va}from"./popover-content-CugxI10r.js";import{P as Da}from"./container-portal-BQnRCOEh.js";import{f as _e}from"./forward-ref-DKTvpK5d.js";import{a as Fa}from"./use-component-style-DIJQBRrz.js";import{B as Me}from"./button-D-R1cZB4.js";import{G as za}from"./ghost-JiDogvQ3.js";import{V as Ia}from"./stack-CYyJMsy9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-BGObP6QI.js";import"./icon-Bq_LsFku.js";import"./index-CQttdDYc.js";import"./alpha-slider-CjC2sKqd.js";import"./use-color-slider-BuslnQb1.js";import"./index-ZgKFn2QV.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-Cv8MXS9R.js";import"./input-FOPExp6r.js";import"./saturation-slider-CBgo8rqF.js";import"./extends-CF3RwP-h.js";import"./index-qlu8UZYo.js";import"./index-Du0-7Fls.js";import"./index-DiSv92ZG.js";import"./index-CkCTVBD6.js";import"./index-CTUnFXMR.js";import"./index-B3Apwo2L.js";import"./index-DXDO8KIH.js";import"./close-button-BW2o6ofU.js";import"./use-ripple-Z2pjxNmq.js";import"./factory-DJUHOzOq.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-D_xgVmU_.js";import"./motion-forward-ref-DCsEbWHi.js";import"./utils-CyDJrwcu.js";import"./scale-fade-6pVYabhD.js";import"./index-DxjWwZXO.js";import"./loading-CgUBxj3m.js";import"./lucide-icon-DEM-o5Ez.js";const Oa=s=>s,[Ea,Ge]=ma({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),_a=s=>{const{value:t,defaultValue:p,fallbackValue:c,defaultColor:u,onChange:m,onChangeStart:f,onChangeEnd:d,onSwatchClick:y,formatInput:h=Oa,allowInput:v=!0,closeOnSelectSwatch:z,format:w,swatchesLabel:V,swatches:R,swatchesColumns:B,withPicker:L,withChannel:N,withResult:M=!1,withColorSelectorEyeDropper:H=!1,colorSelectorVariant:G,colorSelectorSize:I,colorSelectorColorScheme:T,isOpen:Ve,defaultIsOpen:Re,onOpen:Be,onClose:Le,closeOnBlur:g=!0,closeOnEsc:O=!0,openDelay:A,closeDelay:K,isLazy:U,lazyBehavior:W,animation:Y,duration:q=.2,offset:J,gutter:Q,preventOverflow:X,flip:Z,matchWidth:Te=I==="full",boundary:Ae,eventListeners:Ke,strategy:Ue,placement:We="bottom-start",modifiers:Ye,...S}=da(s),{"aria-readonly":La,...E}=ha(S,pa),{disabled:D,readOnly:F}=E,[qe,Je]=fa(S,Ca),Ne=l.useRef(null),Jo=l.useRef(null),{supported:Qo,onOpen:Qe}=la(),[b,x]=na({value:t,defaultValue:p,onChange:m}),_=l.useRef(w??ga(b??u??"")),$=l.useRef(!1),[Xe,j]=l.useState(b??""),{isOpen:i,onOpen:Ze,onClose:$e}=ia({isOpen:Ve,defaultIsOpen:Re,onOpen:Be,onClose:Le}),P=l.useCallback(()=>{D||F||Ze()},[Ze,D,F]),C=l.useCallback(()=>{if(!i)return;const o=dr(b,c)(_.current);x(n=>!o||n===o?n:o),j(h(o??"")),$e()},[_,i,x,$e,b,h,j,c]),er=l.useCallback(()=>{i||P()},[i,P]),rr=l.useCallback(()=>{$.current=!0,!i&&P()},[i,P]),or=l.useCallback(()=>{$.current=!1},[]),ar=l.useCallback(o=>{const n=ba(o);Pa(Ne.current,n)||g&&i&&C()},[g,i,C]),lr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),D||F)return;const cr={Space:i?void 0:P,Enter:i?void 0:P,Escape:O?C:void 0}[o.key];cr&&(o.preventDefault(),o.stopPropagation(),cr())},[D,F,i,P,O,C]),sr=l.useCallback(o=>{const n=o.target.value;j(h(n)),x(n)},[j,h,x]),ee=l.useCallback(o=>{x(o),setTimeout(()=>{$.current||j(h(o))})},[x,h]),tr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:n}=await Qe()??{};if(!n)return;ee(n),d==null||d(n)}catch{}},[Qe,ee,d]);ua({ref:Ne,handler:C,enabled:i&&g}),nr(()=>{if(!w||!b)return;_.current=w;const o=dr(b,c)(w);o&&(j(h(o)),x(o))},[w]),nr(()=>{$.current||!t||j(h(t))},[t]);const Xo=l.useCallback(o=>({closeOnBlur:g,openDelay:A,closeDelay:K,isLazy:U,lazyBehavior:W,animation:Y,duration:q,offset:J,gutter:Q,preventOverflow:X,flip:Z,matchWidth:Te,boundary:Ae,eventListeners:Ke,strategy:Ue,placement:We,modifiers:Ye,...o,trigger:"never",closeOnButton:!1,isOpen:i,onOpen:P,onClose:C}),[g,A,K,U,W,Y,q,J,Q,X,Z,Te,Ae,Ke,Ue,We,Ye,i,P,C]),Zo=l.useCallback((o={},n=null)=>({ref:ir(Ne,n),...qe,...o,...E,onClick:k(o.onClick,S.onClick,er),onBlur:k(o.onBlur,S.onBlur,ar)}),[qe,E,ar,er,S]),$o=l.useCallback((o={},n=null)=>({ref:ir(Jo,n),tabIndex:v?0:-1,...Je,...o,style:{...o.style,...v?{}:{pointerEvents:"none"}},value:Xe,"data-active":ur(i),"aria-expanded":ur(i),onFocus:k(o.onFocus,S.onFocus,rr),onKeyDown:k(o.onKeyDown,S.onKeyDown,lr),onChange:k(o.onChange,sr),onBlur:k(o.onFocus,or)}),[v,Je,Xe,i,S,rr,lr,sr,or]),ea=l.useCallback((o={},n=null)=>({disabled:D,"aria-label":"Pick a color",...o,ref:n,style:{...o.style,pointerEvents:F?"none":void 0},onClick:k(o.onClick,tr)}),[D,tr,F]),ra=l.useCallback(o=>({...E,...o,value:b,defaultValue:u,fallbackValue:c,onChange:ee,onChangeStart:f,onChangeEnd:d,onSwatchClick:k(y,z?C:void 0),format:_.current,withPicker:L,withChannel:N,withResult:M,withEyeDropper:H,swatchesLabel:V,swatches:R,swatchesColumns:B,variant:G,size:I,colorScheme:T}),[E,b,c,u,ee,f,d,y,C,z,_,L,N,M,H,V,R,B,T,I,G]);return{value:b,eyeDropperSupported:Qo,allowInput:v,onClose:C,getPopoverProps:Xo,getContainerProps:Zo,getFieldProps:$o,getSelectorProps:ra,getEyeDropperProps:ea}},r=_e(({withSwatch:s=!0,...t},p)=>{const[c,u]=Fa("ColorPicker",{withSwatch:s,...t});let{className:m,children:f,withEyeDropper:d=!0,color:y,h,height:v,minH:z,minHeight:w,containerProps:V,inputProps:R,swatchProps:B,eyeDropperProps:L,saturationSliderRef:N,saturationSliderProps:M,swatchesProps:H,hueSliderRef:G,hueSliderProps:I,alphaSliderRef:T,alphaSliderProps:Ve,channelsProps:Re,channelProps:Be,portalProps:Le={isDisabled:!0},...g}=xa(u,["withSwatch"]);const{value:O,allowInput:A,eyeDropperSupported:K,getPopoverProps:U,getContainerProps:W,getFieldProps:Y,getSelectorProps:q,getEyeDropperProps:J,onClose:Q,...X}=_a(g);h??(h=v),z??(z=w);const Z={w:"100%",h:"fit-content",color:y,...c.container};return e.jsx(Ea,{value:{styles:c,value:O,...X},children:e.jsx(ja,{...U(),children:e.jsxs(Oe.div,{className:Ee("ui-color-picker",m),__css:Z,...W(V),children:[e.jsxs(Oe.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:A?void 0:"pointer",...c.inner},children:[s?e.jsx(Ra,{...B}):null,e.jsx(ya,{children:e.jsx(Va,{h,minH:z,...Y(R,p)})}),K&&d?e.jsx(Ba,{...J(L)}):null]}),e.jsx(Da,{...Le,children:e.jsx(va,{className:"ui-color-picker__content",__css:{...c.content},children:e.jsx(sa,{className:"ui-color-picker__picker",...q({saturationSliderRef:N,saturationSliderProps:M,swatchesProps:H,hueSliderRef:G,hueSliderProps:I,alphaSliderRef:T,alphaSliderProps:Ve,channelsProps:Re,channelProps:Be}),children:Sa(f,{value:O,onClose:Q})})})})]})})})}),Va=_e(({className:s,h:t,minH:p,...c},u)=>{const{styles:m}=Ge(),f={ps:"2rem",pe:"2rem",h:t,minH:p,display:"flex",alignItems:"center",...m.field};return e.jsx(Oe.input,{ref:u,className:Ee("ui-color-picker__field",s),__css:f,...c})}),Ra=_e(({className:s,...t},p)=>{const{value:c,styles:u}=Ge(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...u.swatch};return e.jsx(ca,{ref:p,className:Ee("ui-color-picker__swatch",s),__css:m,color:c,isRounded:!0,...t})}),Ba=_e(({className:s,children:t,...p},c)=>{const{styles:u}=Ge(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...u.eyeDropper},d=ka(t).map(y=>l.cloneElement(y,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(Oe.button,{ref:c,className:Ee("ui-color-picker__eye-dropper",s),__css:m,...p,children:wa(t)?d:e.jsx(ta,{className:"ui-color-picker__eye-dropper__icon"})})}),_l={title:"Components / Forms / ColorPicker",component:r},a="#4387f4",re=()=>e.jsx(r,{placeholder:a}),oe=()=>e.jsx(r,{placeholder:a,defaultValue:"#4387f4ff"}),ae=()=>e.jsx(r,{placeholder:a,fallbackValue:"#000000"}),le=()=>e.jsx(r,{placeholder:a,defaultColor:"#4387f4ff"}),se=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(Me,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:t})=>e.jsxs(Me,{onClick:t,children:["Submit ",s]})})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),ie=()=>e.jsx(r,{placeholder:"hsla(240, 100%, 50%, 1)",defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),ue=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:s=>s.toUpperCase()}),de=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),pe=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),me=()=>e.jsx(r,{placeholder:a,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),he=()=>e.jsx(r,{placeholder:a,allowInput:!1}),fe=()=>e.jsx(r,{placeholder:a,withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),Ce=()=>e.jsx(r,{placeholder:a,withChannel:!1}),be=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),Pe=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),Se=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),ke=()=>e.jsx(r,{placeholder:a,withResult:!0}),we=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),ge=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),xe=()=>e.jsx(r,{placeholder:a,offset:[16,16]}),je=()=>e.jsx(r,{placeholder:a,gutter:32}),ye=()=>e.jsx(r,{placeholder:a,duration:.4}),ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isDisabled:!0}),e.jsx(He,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,isReadOnly:!0}),e.jsx(He,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:a})})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"},placeholder:a}),e.jsx(r,{eyeDropperProps:{children:e.jsx(za,{fontSize:"lg"})},placeholder:a})]}),ze=()=>{const[s,t]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:t})},Ie=()=>{var f;const s={colorInput:"#4387f4ff"},{control:t,handleSubmit:p,watch:c,formState:{errors:u}}=oa({defaultValues:s}),m=d=>console.log("submit:",d);return console.log("watch:",c()),e.jsxs(Ia,{as:"form",onSubmit:p(m),children:[e.jsx(He,{isInvalid:!!u.colorInput,label:"Pick color",errorMessage:(f=u.colorInput)==null?void 0:f.message,children:e.jsx(aa,{name:"colorInput",control:t,render:({field:d})=>e.jsx(r,{...d})})}),e.jsx(Me,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pr,mr,hr;re.parameters={...re.parameters,docs:{...(pr=re.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(hr=(mr=re.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var fr,Cr,br;oe.parameters={...oe.parameters,docs:{...(fr=oe.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultValue="#4387f4ff" />;
}`,...(br=(Cr=oe.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var Pr,Sr,kr;ae.parameters={...ae.parameters,docs:{...(Pr=ae.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} fallbackValue="#000000" />;
}`,...(kr=(Sr=ae.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var wr,gr,xr;le.parameters={...le.parameters,docs:{...(wr=le.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} defaultColor="#4387f4ff" />;
}`,...(xr=(gr=le.parameters)==null?void 0:gr.docs)==null?void 0:xr.source}}};var jr,yr,vr;se.parameters={...se.parameters,docs:{...(jr=se.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(vr=(yr=se.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var Dr,Fr,zr;te.parameters={...te.parameters,docs:{...(Dr=te.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(zr=(Fr=te.parameters)==null?void 0:Fr.docs)==null?void 0:zr.source}}};var Ir,Or,Er;ce.parameters={...ce.parameters,docs:{...(Ir=ce.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(Er=(Or=ce.parameters)==null?void 0:Or.docs)==null?void 0:Er.source}}};var _r,Vr,Rr;ne.parameters={...ne.parameters,docs:{...(_r=ne.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Rr=(Vr=ne.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var Br,Lr,Nr;ie.parameters={...ie.parameters,docs:{...(Br=ie.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="hsla(240, 100%, 50%, 1)" defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(Nr=(Lr=ie.parameters)==null?void 0:Lr.docs)==null?void 0:Nr.source}}};var Mr,Hr,Gr;ue.parameters={...ue.parameters,docs:{...(Mr=ue.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(Gr=(Hr=ue.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Tr,Ar,Kr;de.parameters={...de.parameters,docs:{...(Tr=de.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Kr=(Ar=de.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Ur,Wr,Yr;pe.parameters={...pe.parameters,docs:{...(Ur=pe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Yr=(Wr=pe.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var qr,Jr,Qr;me.parameters={...me.parameters,docs:{...(qr=me.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Qr=(Jr=me.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;he.parameters={...he.parameters,docs:{...(Xr=he.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} allowInput={false} />;
}`,...($r=(Zr=he.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var eo,ro,oo;fe.parameters={...fe.parameters,docs:{...(eo=fe.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(oo=(ro=fe.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,lo,so;Ce.parameters={...Ce.parameters,docs:{...(ao=Ce.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(so=(lo=Ce.parameters)==null?void 0:lo.docs)==null?void 0:so.source}}};var to,co,no;be.parameters={...be.parameters,docs:{...(to=be.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(no=(co=be.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;Pe.parameters={...Pe.parameters,docs:{...(io=Pe.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(po=(uo=Pe.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;Se.parameters={...Se.parameters,docs:{...(mo=Se.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(fo=(ho=Se.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,bo,Po;ke.parameters={...ke.parameters,docs:{...(Co=ke.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(Po=(bo=ke.parameters)==null?void 0:bo.docs)==null?void 0:Po.source}}};var So,ko,wo;we.parameters={...we.parameters,docs:{...(So=we.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(wo=(ko=we.parameters)==null?void 0:ko.docs)==null?void 0:wo.source}}};var go,xo,jo;ge.parameters={...ge.parameters,docs:{...(go=ge.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(jo=(xo=ge.parameters)==null?void 0:xo.docs)==null?void 0:jo.source}}};var yo,vo,Do;xe.parameters={...xe.parameters,docs:{...(yo=xe.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} offset={[16, 16]} />;
}`,...(Do=(vo=xe.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var Fo,zo,Io;je.parameters={...je.parameters,docs:{...(Fo=je.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} gutter={32} />;
}`,...(Io=(zo=je.parameters)==null?void 0:zo.docs)==null?void 0:Io.source}}};var Oo,Eo,_o;ye.parameters={...ye.parameters,docs:{...(Oo=ye.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} duration={0.4} />;
}`,...(_o=(Eo=ye.parameters)==null?void 0:Eo.docs)==null?void 0:_o.source}}};var Vo,Ro,Bo;ve.parameters={...ve.parameters,docs:{...(Vo=ve.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Bo=(Ro=ve.parameters)==null?void 0:Ro.docs)==null?void 0:Bo.source}}};var Lo,No,Mo;De.parameters={...De.parameters,docs:{...(Lo=De.parameters)==null?void 0:Lo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Mo=(No=De.parameters)==null?void 0:No.docs)==null?void 0:Mo.source}}};var Ho,Go,To;Fe.parameters={...Fe.parameters,docs:{...(Ho=Fe.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} placeholder={defaultPlaceholder} />
      <ColorPicker eyeDropperProps={{
      children: <Ghost fontSize="lg" />
    }} placeholder={defaultPlaceholder} />
    </>;
}`,...(To=(Go=Fe.parameters)==null?void 0:Go.docs)==null?void 0:To.source}}};var Ao,Ko,Uo;ze.parameters={...ze.parameters,docs:{...(Ao=ze.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Uo=(Ko=ze.parameters)==null?void 0:Ko.docs)==null?void 0:Uo.source}}};var Wo,Yo,qo;Ie.parameters={...Ie.parameters,docs:{...(Wo=Ie.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
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
}`,...(qo=(Yo=Ie.parameters)==null?void 0:Yo.docs)==null?void 0:qo.source}}};const Vl=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Vl as __namedExportsOrder,re as basic,ze as customControl,Fe as customEyeDropperIcon,_l as default,he as disabledAllowInput,Ce as disabledChannel,Pe as disabledEyeDropper,fe as disabledPicker,be as disabledSwatch,Se as enabledColorPickerEyeDropper,ke as enabledResult,ve as isDisabled,De as isReadonly,Ie as reactHookForm,we as withBorderColor,se as withChildren,me as withCloseOnSelectSwatch,ce as withColorSelectorSize,le as withDefaultColor,oe as withDefaultValue,ye as withDuration,ae as withFallbackValue,ie as withFormat,ue as withFormatInput,je as withGutter,xe as withOffset,ge as withPlacement,te as withSize,de as withSwatches,pe as withSwatchesColumns,ne as withVariant};
