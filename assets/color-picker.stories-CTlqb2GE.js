import{j as e}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{u as sa,C as ta}from"./index.esm-DXPXqkjk.js";import{u as ca,C as na,E as ia}from"./color-selector-DPSKSeOb.js";import{C as ua}from"./color-swatch-BVBa9MS5.js";import{u as da}from"./index-CJwZPsS_.js";import{u as pa}from"./index-BSZzY47h.js";import{u as ma}from"./index-DjrrK_0S.js";import{u as ha,f as fa,F as Ge}from"./form-control-CY2fHU0c.js";import{o as Ca,W as Pa,V as ba,a6 as Sa,af as ka,X as wa,f as nr,a as ir,h as k,d as ur,b as Ve,c as Re,z as ga,p as xa,j as ya}from"./factory-BPGpAF5Z.js";import{e as ja,c as dr,o as va}from"./theme-provider-HQUvgn6k.js";import{P as Da,a as Fa,b as _a}from"./popover-trigger-BJsmlD02.js";import{P as za}from"./portal-Df1xvvbV.js";import{f as Be}from"./forward-ref-BWI-Phbn.js";import{a as Ia}from"./use-component-style-vGTU0kmU.js";import{B as He}from"./button-9256ovQJ.js";import{G as Oa}from"./ghost-GxWXN3CG.js";import{V as Ea}from"./stack-Bldv2M3v.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-pKVs33qi.js";import"./icon-BYVaiKtb.js";import"./use-var-CHlP19MT.js";import"./alpha-slider-CzDlN95T.js";import"./use-color-slider-Ie-ZUMhL.js";import"./index-DS2jdEkM.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./hue-slider-BSFcPnr3.js";import"./input-C_QguLsg.js";import"./saturation-slider-0oHZGyQW.js";import"./close-button-TCaPA0pi.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-BEHgxEuP.js";import"./index-BRqXaXJK.js";import"./index-B9JWsFAS.js";import"./forward-ref-scR1bmHx.js";import"./utils-wKEdAh9y.js";import"./scale-fade-Cv307av9.js";import"./index-CjlbPsry.js";import"./index-CoJrGj-T.js";import"./index-DMlaarLi.js";import"./index-YIL2lgfe.js";import"./index-BN4Uieo8.js";import"./index-Drt3gf4w.js";import"./loading-BJMWU62O.js";import"./lucide-icon-DpgM6Xz3.js";const Va=s=>s,[Ra,Te]=Ca({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ba=s=>{const{allowInput:t=!0,animation:d,boundary:i,closeDelay:p,closeOnBlur:u=!0,closeOnEsc:m=!0,closeOnSelectSwatch:h,colorSelectorColorScheme:j,colorSelectorSize:v,colorSelectorVariant:R,defaultColor:I,defaultIsOpen:B,defaultValue:Ne,duration:N=.2,eventListeners:L,fallbackValue:w,flip:M,format:g,formatInput:f=Va,gutter:H,isLazy:G,isOpen:Le,lazyBehavior:T,matchWidth:A=v==="full",modifiers:K,offset:U,openDelay:W,placement:Y="bottom-start",preventOverflow:X,strategy:O,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:D,withChannel:Z,withColorSelectorEyeDropper:$=!1,withPicker:ee,withResult:re=!1,onChange:qo,onChangeEnd:F,onChangeStart:We,onClose:Jo,onOpen:Qo,onSwatchClick:Ye,...S}=ha(s),{"aria-readonly":Na,...E}=Pa(S,fa),{disabled:_,readOnly:z}=E,[Xe,qe]=ba(S,Sa),Me=l.useRef(null),Zo=l.useRef(null),{supported:$o,onOpen:Je}=ca(),[P,x]=da({defaultValue:Ne,value:D,onChange:qo}),V=l.useRef(g??ja(P||I||"")),oe=l.useRef(!1),[Qe,y]=l.useState(P||""),{isOpen:n,onClose:Ze,onOpen:$e}=pa({defaultIsOpen:B,isOpen:Le,onClose:Jo,onOpen:Qo}),b=l.useCallback(()=>{_||z||$e()},[$e,_,z]),C=l.useCallback(()=>{if(!n)return;const o=dr(P,w)(V.current);x(c=>!o||c===o?c:o),y(f(o??"")),Ze()},[V,n,x,Ze,P,f,y,w]),er=l.useCallback(()=>{n||b()},[n,b]),rr=l.useCallback(()=>{oe.current=!0,!n&&b()},[n,b]),or=l.useCallback(()=>{oe.current=!1},[]),ar=l.useCallback(o=>{const c=ka(o);wa(Me.current,c)||u&&n&&C()},[u,n,C]),lr=l.useCallback(o=>{if(o.key===" "&&(o.key=o.code),_||z)return;const cr={Enter:n?void 0:b,Escape:m?C:void 0,Space:n?void 0:b}[o.key];cr&&(o.preventDefault(),o.stopPropagation(),cr())},[_,z,n,b,m,C]),sr=l.useCallback(o=>{const c=o.target.value;y(f(c)),x(c)},[y,f,x]),ae=l.useCallback(o=>{x(o),setTimeout(()=>{oe.current||y(f(o))})},[x,f]),tr=l.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:c}=await Je()??{};if(!c)return;ae(c),F==null||F(c)}catch{}},[Je,ae,F]);ma({ref:Me,enabled:n&&u,handler:C}),nr(()=>{if(!g||!P)return;V.current=g;const o=dr(P,w)(g);o&&(y(f(o)),x(o))},[g]),nr(()=>{oe.current||!D||y(f(D))},[D]);const ea=l.useCallback(o=>({animation:d,boundary:i,closeDelay:p,closeOnBlur:u,duration:N,eventListeners:L,flip:M,gutter:H,isLazy:G,lazyBehavior:T,matchWidth:A,modifiers:K,offset:U,openDelay:W,placement:Y,preventOverflow:X,strategy:O,...o,closeOnButton:!1,isOpen:n,trigger:"never",onClose:C,onOpen:b}),[u,W,p,G,T,d,N,U,H,X,M,A,i,L,O,Y,K,n,b,C]),ra=l.useCallback((o={},c=null)=>({ref:ir(Me,c),...Xe,...o,...E,onBlur:k(o.onBlur,S.onBlur,ar),onClick:k(o.onClick,S.onClick,er)}),[Xe,E,ar,er,S]),oa=l.useCallback((o={},c=null)=>({ref:ir(Zo,c),tabIndex:t?0:-1,...qe,...o,style:{...o.style,...t?{}:{pointerEvents:"none"}},"aria-expanded":ur(n),"data-active":ur(n),value:Qe,onBlur:k(o.onFocus,or),onChange:k(o.onChange,sr),onFocus:k(o.onFocus,S.onFocus,rr),onKeyDown:k(o.onKeyDown,S.onKeyDown,lr)}),[t,qe,Qe,n,S,rr,lr,sr,or]),aa=l.useCallback((o={},c=null)=>({"aria-label":"Pick a color",disabled:_,...o,ref:c,style:{...o.style,pointerEvents:z?"none":void 0},onClick:k(o.onClick,tr)}),[_,tr,z]),la=l.useCallback(o=>({...E,...o,colorScheme:j,size:v,variant:R,defaultValue:I,fallbackValue:w,format:V.current,swatches:q,swatchesColumns:J,swatchesLabel:Q,value:P,withChannel:Z,withEyeDropper:$,withPicker:ee,withResult:re,onChange:ae,onChangeEnd:F,onChangeStart:We,onSwatchClick:k(Ye,h?C:void 0)}),[E,P,w,I,ae,We,F,Ye,C,h,V,ee,Z,re,$,Q,q,J,j,v,R]);return{allowInput:t,eyeDropperSupported:$o,value:P,getContainerProps:ra,getEyeDropperProps:aa,getFieldProps:oa,getPopoverProps:ea,getSelectorProps:la,onClose:C}},r=Be(({withSwatch:s=!0,...t},d)=>{const[i,p]=Ia("ColorPicker",{withSwatch:s,...t});let{className:u,alphaSliderRef:m,children:h,color:j,h:v,height:R,hueSliderRef:I,minH:B,minHeight:Ne,saturationSliderRef:N,withEyeDropper:L=!0,alphaSliderProps:w,channelProps:M,channelsProps:g,containerProps:f,eyeDropperProps:H,hueSliderProps:G,inputProps:Le,portalProps:T={isDisabled:!0},saturationSliderProps:A,swatchesProps:K,swatchProps:U,...W}=va(p,["withSwatch"]);const{allowInput:Y,eyeDropperSupported:X,value:O,getContainerProps:q,getEyeDropperProps:J,getFieldProps:Q,getPopoverProps:D,getSelectorProps:Z,onClose:$,...ee}=Ba(W);v??(v=R),B??(B=Ne);const re={color:j,h:"fit-content",w:"100%",...i.container};return e.jsx(Ra,{value:{styles:i,value:O,...ee},children:e.jsx(Da,{...D(),children:e.jsxs(Ve.div,{className:Re("ui-color-picker",u),__css:re,...q(f),children:[e.jsxs(Ve.div,{className:"ui-color-picker__inner",__css:{cursor:Y?void 0:"pointer",position:"relative",...i.inner},children:[s?e.jsx(Ke,{...U}):null,e.jsx(Fa,{children:e.jsx(Ae,{h:v,minH:B,...Q(Le,d)})}),X&&L?e.jsx(Ue,{...J(H)}):null]}),e.jsx(za,{...T,children:e.jsx(_a,{className:"ui-color-picker__content",__css:{...i.content},children:e.jsx(na,{className:"ui-color-picker__picker",...Z({alphaSliderRef:m,hueSliderRef:I,saturationSliderRef:N,alphaSliderProps:w,channelProps:M,channelsProps:g,hueSliderProps:G,saturationSliderProps:A,swatchesProps:K}),children:ga(h,{value:O,onClose:$})})})})]})})})});r.displayName="ColorPicker";r.__ui__="ColorPicker";const Ae=Be(({className:s,h:t,minH:d,...i},p)=>{const{styles:u}=Te(),m={alignItems:"center",display:"flex",h:t,minH:d,pe:"2rem",ps:"2rem",...u.field};return e.jsx(Ve.input,{ref:p,className:Re("ui-color-picker__field",s),__css:m,...i})});Ae.displayName="ColorPickerField";Ae.__ui__="ColorPickerField";const Ke=Be(({className:s,...t},d)=>{const{styles:i,value:p}=Te(),u={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...i.swatch};return e.jsx(ua,{ref:d,className:Re("ui-color-picker__swatch",s),color:p,isRounded:!0,__css:u,...t})});Ke.displayName="ColorPickerSwatch";Ke.__ui__="ColorPickerSwatch";const Ue=Be(({className:s,children:t,...d},i)=>{const{styles:p}=Te(),u={alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:1,...p.eyeDropper},h=xa(t).map(j=>l.cloneElement(j,{style:{color:"currentColor",maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(Ve.button,{ref:i,className:Re("ui-color-picker__eye-dropper",s),__css:u,...d,children:ya(t)?h:e.jsx(ia,{className:"ui-color-picker__eye-dropper__icon"})})});Ue.displayName="ColorPickerEyeDropper";Ue.__ui__="ColorPickerEyeDropper";const Ol={component:r,title:"Components / Forms / ColorPicker"},a="#4387f4",le=()=>e.jsx(r,{placeholder:a}),se=()=>e.jsx(r,{defaultValue:"#4387f4ff",placeholder:a}),te=()=>e.jsx(r,{fallbackValue:"#000000",placeholder:a}),ce=()=>e.jsx(r,{defaultColor:"#4387f4ff",placeholder:a}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,children:e.jsx(He,{children:"Submit"})}),e.jsx(r,{placeholder:a,children:({value:s,onClose:t})=>e.jsxs(He,{onClick:t,children:["Submit ",s]})})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{colorSelectorSize:"sm",placeholder:"small size"}),e.jsx(r,{colorSelectorSize:"md",placeholder:"medium size"}),e.jsx(r,{colorSelectorSize:"lg",placeholder:"large size"}),e.jsx(r,{colorSelectorSize:"full",placeholder:"full size"})]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),pe=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla",placeholder:"hsla(240, 100%, 50%, 1)"}),me=()=>e.jsx(r,{formatInput:s=>s.toUpperCase(),placeholder:"#4387F4FF"}),he=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),fe=()=>e.jsx(r,{placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesColumns:{base:8,md:7},swatchesLabel:"Saved Colors"}),Ce=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors"}),Pe=()=>e.jsx(r,{allowInput:!1,placeholder:a}),be=()=>e.jsx(r,{closeOnSelectSwatch:!0,placeholder:a,swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],swatchesLabel:"Saved Colors",withPicker:!1}),Se=()=>e.jsx(r,{placeholder:a,withChannel:!1}),ke=()=>e.jsx(r,{placeholder:a,withSwatch:!1}),we=()=>e.jsx(r,{placeholder:a,withEyeDropper:!1}),ge=()=>e.jsx(r,{placeholder:a,withColorSelectorEyeDropper:!0}),xe=()=>e.jsx(r,{placeholder:a,withResult:!0}),ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),je=()=>e.jsx(r,{placeholder:a,placement:"bottom-end"}),ve=()=>e.jsx(r,{offset:[16,16],placeholder:a}),De=()=>e.jsx(r,{gutter:32,placeholder:a}),Fe=()=>e.jsx(r,{duration:.4,placeholder:a}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,placeholder:a}),e.jsx(Ge,{helperMessage:"Please select your favorite color",isDisabled:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,placeholder:a}),e.jsx(Ge,{helperMessage:"Please select your favorite color",isReadOnly:!0,label:"Pick color",children:e.jsx(r,{placeholder:a})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:a,eyeDropperProps:{color:"primary"}}),e.jsx(r,{placeholder:a,eyeDropperProps:{children:e.jsx(Oa,{fontSize:"lg"})}})]}),Oe=()=>{const[s,t]=l.useState("#4387f4ff");return e.jsx(r,{placeholder:a,value:s,onChange:t})},Ee=()=>{var m;const s={colorInput:"#4387f4ff"},{control:t,formState:{errors:d},handleSubmit:i,watch:p}=sa({defaultValues:s}),u=h=>console.log("submit:",h);return console.log("watch:",p()),e.jsxs(Ea,{as:"form",onSubmit:i(u),children:[e.jsx(Ge,{errorMessage:(m=d.colorInput)==null?void 0:m.message,isInvalid:!!d.colorInput,label:"Pick color",children:e.jsx(ta,{name:"colorInput",control:t,render:({field:h})=>e.jsx(r,{...h})})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pr,mr,hr;le.parameters={...le.parameters,docs:{...(pr=le.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} />;
}`,...(hr=(mr=le.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var fr,Cr,Pr;se.parameters={...se.parameters,docs:{...(fr=se.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(Pr=(Cr=se.parameters)==null?void 0:Cr.docs)==null?void 0:Pr.source}}};var br,Sr,kr;te.parameters={...te.parameters,docs:{...(br=te.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" placeholder={defaultPlaceholder} />;
}`,...(kr=(Sr=te.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var wr,gr,xr;ce.parameters={...ce.parameters,docs:{...(wr=ce.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" placeholder={defaultPlaceholder} />;
}`,...(xr=(gr=ce.parameters)==null?void 0:gr.docs)==null?void 0:xr.source}}};var yr,jr,vr;ne.parameters={...ne.parameters,docs:{...(yr=ne.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(vr=(jr=ne.parameters)==null?void 0:jr.docs)==null?void 0:vr.source}}};var Dr,Fr,_r;ie.parameters={...ie.parameters,docs:{...(Dr=ie.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker size="xs" placeholder="extra small size" />
      <ColorPicker size="sm" placeholder="small size" />
      <ColorPicker size="md" placeholder="medium size" />
      <ColorPicker size="lg" placeholder="large size" />
    </>;
}`,...(_r=(Fr=ie.parameters)==null?void 0:Fr.docs)==null?void 0:_r.source}}};var zr,Ir,Or;ue.parameters={...ue.parameters,docs:{...(zr=ue.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker colorSelectorSize="sm" placeholder="small size" />
      <ColorPicker colorSelectorSize="md" placeholder="medium size" />
      <ColorPicker colorSelectorSize="lg" placeholder="large size" />
      <ColorPicker colorSelectorSize="full" placeholder="full size" />
    </>;
}`,...(Or=(Ir=ue.parameters)==null?void 0:Ir.docs)==null?void 0:Or.source}}};var Er,Vr,Rr;de.parameters={...de.parameters,docs:{...(Er=de.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Rr=(Vr=de.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var Br,Nr,Lr;pe.parameters={...pe.parameters,docs:{...(Br=pe.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" placeholder="hsla(240, 100%, 50%, 1)" />;
}`,...(Lr=(Nr=pe.parameters)==null?void 0:Nr.docs)==null?void 0:Lr.source}}};var Mr,Hr,Gr;me.parameters={...me.parameters,docs:{...(Mr=me.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} placeholder="#4387F4FF" />;
}`,...(Gr=(Hr=me.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Tr,Ar,Kr;he.parameters={...he.parameters,docs:{...(Tr=he.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(Kr=(Ar=he.parameters)==null?void 0:Ar.docs)==null?void 0:Kr.source}}};var Ur,Wr,Yr;fe.parameters={...fe.parameters,docs:{...(Ur=fe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesColumns={{
    base: 8,
    md: 7
  }} swatchesLabel="Saved Colors" />;
}`,...(Yr=(Wr=fe.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var Xr,qr,Jr;Ce.parameters={...Ce.parameters,docs:{...(Xr=Ce.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" />;
}`,...(Jr=(qr=Ce.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Qr,Zr,$r;Pe.parameters={...Pe.parameters,docs:{...(Qr=Pe.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder={defaultPlaceholder} />;
}`,...($r=(Zr=Pe.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var eo,ro,oo;be.parameters={...be.parameters,docs:{...(eo=be.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnSelectSwatch placeholder={defaultPlaceholder} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} swatchesLabel="Saved Colors" withPicker={false} />;
}`,...(oo=(ro=be.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,lo,so;Se.parameters={...Se.parameters,docs:{...(ao=Se.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withChannel={false} />;
}`,...(so=(lo=Se.parameters)==null?void 0:lo.docs)==null?void 0:so.source}}};var to,co,no;ke.parameters={...ke.parameters,docs:{...(to=ke.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withSwatch={false} />;
}`,...(no=(co=ke.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;we.parameters={...we.parameters,docs:{...(io=we.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withEyeDropper={false} />;
}`,...(po=(uo=we.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;ge.parameters={...ge.parameters,docs:{...(mo=ge.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withColorSelectorEyeDropper />;
}`,...(fo=(ho=ge.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,Po,bo;xe.parameters={...xe.parameters,docs:{...(Co=xe.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} withResult />;
}`,...(bo=(Po=xe.parameters)==null?void 0:Po.docs)==null?void 0:bo.source}}};var So,ko,wo;ye.parameters={...ye.parameters,docs:{...(So=ye.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(wo=(ko=ye.parameters)==null?void 0:ko.docs)==null?void 0:wo.source}}};var go,xo,yo;je.parameters={...je.parameters,docs:{...(go=je.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder={defaultPlaceholder} placement="bottom-end" />;
}`,...(yo=(xo=je.parameters)==null?void 0:xo.docs)==null?void 0:yo.source}}};var jo,vo,Do;ve.parameters={...ve.parameters,docs:{...(jo=ve.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder={defaultPlaceholder} />;
}`,...(Do=(vo=ve.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var Fo,_o,zo;De.parameters={...De.parameters,docs:{...(Fo=De.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={32} placeholder={defaultPlaceholder} />;
}`,...(zo=(_o=De.parameters)==null?void 0:_o.docs)==null?void 0:zo.source}}};var Io,Oo,Eo;Fe.parameters={...Fe.parameters,docs:{...(Io=Fe.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  return <ColorPicker duration={0.4} placeholder={defaultPlaceholder} />;
}`,...(Eo=(Oo=Fe.parameters)==null?void 0:Oo.docs)==null?void 0:Eo.source}}};var Vo,Ro,Bo;_e.parameters={..._e.parameters,docs:{...(Vo=_e.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isDisabled placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isDisabled label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Bo=(Ro=_e.parameters)==null?void 0:Ro.docs)==null?void 0:Bo.source}}};var No,Lo,Mo;ze.parameters={...ze.parameters,docs:{...(No=ze.parameters)==null?void 0:No.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker isReadOnly placeholder={defaultPlaceholder} />

      <FormControl helperMessage="Please select your favorite color" isReadOnly label="Pick color">
        <ColorPicker placeholder={defaultPlaceholder} />
      </FormControl>
    </>;
}`,...(Mo=(Lo=ze.parameters)==null?void 0:Lo.docs)==null?void 0:Mo.source}}};var Ho,Go,To;Ie.parameters={...Ie.parameters,docs:{...(Ho=Ie.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker placeholder={defaultPlaceholder} eyeDropperProps={{
      children: <Ghost fontSize="lg" />
    }} />
    </>;
}`,...(To=(Go=Ie.parameters)==null?void 0:Go.docs)==null?void 0:To.source}}};var Ao,Ko,Uo;Oe.parameters={...Oe.parameters,docs:{...(Ao=Oe.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker placeholder={defaultPlaceholder} value={value} onChange={onChange} />;
}`,...(Uo=(Ko=Oe.parameters)==null?void 0:Ko.docs)==null?void 0:Uo.source}}};var Wo,Yo,Xo;Ee.parameters={...Ee.parameters,docs:{...(Wo=Ee.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
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
}`,...(Xo=(Yo=Ee.parameters)==null?void 0:Yo.docs)==null?void 0:Xo.source}}};const El=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{El as __namedExportsOrder,le as basic,Oe as customControl,Ie as customEyeDropperIcon,Ol as default,Pe as disabledAllowInput,Se as disabledChannel,we as disabledEyeDropper,be as disabledPicker,ke as disabledSwatch,ge as enabledColorPickerEyeDropper,xe as enabledResult,_e as isDisabled,ze as isReadonly,Ee as reactHookForm,ye as withBorderColor,ne as withChildren,Ce as withCloseOnSelectSwatch,ue as withColorSelectorSize,ce as withDefaultColor,se as withDefaultValue,Fe as withDuration,te as withFallbackValue,pe as withFormat,me as withFormatInput,De as withGutter,ve as withOffset,je as withPlacement,ie as withSize,he as withSwatches,fe as withSwatchesColumns,de as withVariant};
