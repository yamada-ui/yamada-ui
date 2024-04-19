import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as Ao,f as Ko}from"./fontawesome-icon-D6ZryXKH.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as Go,C as Uo}from"./index.esm-CEuCMWHm.js";import{u as Wo,C as Yo,E as Zo}from"./color-selector-BJNeefaY.js";import{C as qo}from"./color-swatch-i-zFdt5d.js";import{u as Jo}from"./index-DRoJptwM.js";import{u as Qo}from"./index-BRIizmwy.js";import{u as Xo}from"./index-B84wXCVI.js";import{u as $o,g as es,F as Re}from"./form-control-DzLz1dOu.js";import{p as rs,P as os,a as ss,b as as}from"./popover-content-CjL3x1dA.js";import{k as ts,R as ls,Z as cs,_ as ns,B as Eo,a3 as is,S as us,e as Ye,a as Ze,h as g,x as qe,u as je,c as ye,s as ps,g as ds}from"./factory-HTeyK_fA.js";import{d as ms,c as Je,o as fs}from"./theme-provider-DvYDGHdP.js";import{P as hs}from"./container-portal-CXToMjiT.js";import{f as ve}from"./forward-ref-DuAegr0M.js";import{a as Cs}from"./use-component-style-CaxTiwrP.js";import{B as _e}from"./button-ByzKvAA6.js";import{V as bs}from"./stack-DoT5LYu9.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-B1_QQpZG.js";import"./index-dkYwPDS2.js";import"./icon-button-C25xQlon.js";import"./alpha-slider-CxNb0YUi.js";import"./use-color-slider-TvcYGoa_.js";import"./index-CVU6I4PY.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./hue-slider-D8bQgigz.js";import"./input-DF5as8rw.js";import"./saturation-slider-HTkiPYqt.js";import"./index-BBR8_Uz5.js";import"./index-rYLD436_.js";import"./index-_rFdYV1q.js";import"./index-AbGqtBFc.js";import"./index-NNY8n33j.js";import"./index-CI2IYPpt.js";import"./index-Cv5NyirI.js";import"./motion-JgkBPv6g.js";import"./slide-fade-Dwa26ik0.js";import"./index-_tcQm2Fk.js";import"./motion-DzQfhwIS.js";import"./utils-Cf-6jYhN.js";import"./scale-fade-DPj_1rnM.js";import"./close-button-CsU1qDnP.js";import"./use-ripple-C7PrLSTl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./loading-DnyjtoRI.js";const[Ps,Oe]=ts({name:"ColorPickerContext",errorMessage:`useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`}),Ss=({value:a,defaultValue:i,fallbackValue:n,defaultColor:c,onChange:d,onChangeStart:m,onChangeEnd:u,onSwatchClick:h,formatInput:f=C=>C,closeOnBlur:v=!0,closeOnEsc:R=!0,placement:F="bottom-start",duration:O=.2,isOpen:De,defaultIsOpen:Fe,onOpen:ze,onClose:Ie,allowInput:D=!0,closeOnSelectSwatch:E,format:w,swatchesLabel:B,swatches:V,swatchesColumns:N,withPicker:M,withChannel:H,withResult:L=!1,withColorSelectorEyeDropper:T=!1,colorSelectorVariant:A,colorSelectorSize:z,colorSelectorColorScheme:K,...p})=>{p=$o(p);const C=ls(p,es({omit:["aria-readonly"]})),{disabled:k,readOnly:x}=C,[G,U]=cs(Eo(p,[...rs]),ns),I=s.useRef(null),Bo=s.useRef(null),{supported:Vo,onOpen:Ee}=Wo(),[b,j]=Jo({value:a,defaultValue:i,onChange:d}),_=s.useRef(w??ms(b??c??"")),W=s.useRef(!1),[Be,y]=s.useState(b??""),{isOpen:l,onOpen:Ve,onClose:Ne}=Qo({isOpen:De,defaultIsOpen:Fe,onOpen:ze,onClose:Ie}),Me=z==="full",P=s.useCallback(()=>{k||x||Ve()},[Ve,k,x]),S=s.useCallback(()=>{if(!l)return;const o=Je(b,n)(_.current);j(t=>!o||t===o?t:o),y(f(o??"")),Ne()},[_,l,j,Ne,b,f,y,n]),He=s.useCallback(()=>{l||P()},[l,P]),Le=s.useCallback(()=>{W.current=!0,!l&&P()},[l,P]),Te=s.useCallback(()=>{W.current=!1},[]),Ae=s.useCallback(o=>{const t=is(o);us(I.current,t)||v&&l&&S()},[v,l,S]),Ke=s.useCallback(o=>{if(o.key===" "&&(o.key=o.code),k||x)return;const We={Space:l?void 0:P,Enter:l?void 0:P,Escape:R?S:void 0}[o.key];We&&(o.preventDefault(),o.stopPropagation(),We())},[k,x,l,P,R,S]),Ge=s.useCallback(o=>{const t=o.target.value;y(f(t)),j(t)},[y,f,j]),Y=s.useCallback(o=>{j(o),setTimeout(()=>{W.current||y(f(o))})},[j,f]),Ue=s.useCallback(async o=>{o.preventDefault(),o.stopPropagation();try{const{sRGBHex:t}=await Ee()??{};if(!t)return;Y(t),u==null||u(t)}catch{}},[Ee,Y,u]);Xo({ref:I,handler:S,enabled:l&&v}),Ye(()=>{if(!w||!b)return;_.current=w;const o=Je(b,n)(w);o&&(y(f(o)),j(o))},[w]),Ye(()=>{W.current||!a||y(f(a))},[a]);const No=s.useCallback(o=>({matchWidth:Me,...p,...o,isOpen:l,onOpen:P,onClose:S,placement:F,duration:O,trigger:"never",closeOnButton:!1}),[Me,O,S,P,F,p,l]),Mo=s.useCallback((o={},t=null)=>({ref:Ze(I,t),...G,...o,...C,onClick:g(o.onClick,p.onClick,He),onBlur:g(o.onBlur,p.onBlur,Ae)}),[G,C,Ae,He,p]),Ho=s.useCallback((o={},t=null)=>({ref:Ze(Bo,t),tabIndex:D?0:-1,...U,...o,style:{...o.style,...D?{}:{pointerEvents:"none"}},value:Be,"data-active":qe(l),"aria-expanded":qe(l),onFocus:g(o.onFocus,p.onFocus,Le),onKeyDown:g(o.onKeyDown,p.onKeyDown,Ke),onChange:g(o.onChange,Ge),onBlur:g(o.onFocus,Te)}),[D,U,Be,l,p,Le,Ke,Ge,Te]),Lo=s.useCallback((o={},t=null)=>({disabled:k,"aria-label":"Pick a color",...o,ref:t,style:{...o.style,pointerEvents:x?"none":void 0},onClick:g(o.onClick,Ue)}),[k,Ue,x]),To=s.useCallback(o=>({...C,...o,value:b,defaultValue:c,fallbackValue:n,onChange:Y,onChangeStart:m,onChangeEnd:u,onSwatchClick:g(h,E?S:void 0),format:_.current,withPicker:M,withChannel:H,withResult:L,withEyeDropper:T,swatchesLabel:B,swatches:V,swatchesColumns:N,variant:A,size:z,colorScheme:K}),[C,b,n,c,Y,m,u,h,S,E,_,M,H,L,T,B,V,N,K,z,A]);return{value:b,eyeDropperSupported:Vo,allowInput:D,getPopoverProps:No,getContainerProps:Mo,getFieldProps:Ho,getSelectorProps:To,getEyeDropperProps:Lo}},r=ve(({withSwatch:a=!0,...i},n)=>{const[c,d]=Cs("ColorPicker",{withSwatch:a,...i});let{className:m,children:u,withEyeDropper:h=!0,color:f,h:v,height:R,minH:F,minHeight:O,containerProps:De,inputProps:Fe,swatchProps:ze,eyeDropperProps:Ie,saturationSliderRef:D,saturationSliderProps:E,swatchesProps:w,hueSliderRef:B,hueSliderProps:V,alphaSliderRef:N,alphaSliderProps:M,channelsProps:H,channelProps:L,portalProps:T={isDisabled:!0},...A}=fs(Eo(d,["withSwatch"]));const{allowInput:z,eyeDropperSupported:K,getPopoverProps:p,getContainerProps:C,getFieldProps:k,getSelectorProps:x,getEyeDropperProps:G,...U}=Ss(A);v??(v=R),F??(F=O);const I={w:"100%",h:"fit-content",color:f,...c.container};return e.jsx(Ps,{value:{styles:c,...U},children:e.jsx(os,{...p(),children:e.jsxs(je.div,{className:ye("ui-color-picker",m),__css:I,...C(De),children:[e.jsxs(je.div,{className:"ui-color-picker__inner",__css:{position:"relative",cursor:z?void 0:"pointer",...c.inner},children:[a?e.jsx(xs,{...ze}):null,e.jsx(ss,{children:e.jsx(ks,{h:v,minH:F,...k(Fe,n)})}),K&&h?e.jsx(gs,{...G(Ie)}):null]}),e.jsx(hs,{...T,children:e.jsx(as,{className:"ui-color-picker__popover",__css:{...c.list},children:e.jsx(Yo,{className:"ui-color-picker__picker",...x({saturationSliderRef:D,saturationSliderProps:E,swatchesProps:w,hueSliderRef:B,hueSliderProps:V,alphaSliderRef:N,alphaSliderProps:M,channelsProps:H,channelProps:L}),children:u})})})]})})})}),ks=ve(({className:a,h:i,minH:n,...c},d)=>{const{styles:m}=Oe(),u={ps:"2rem",pe:"2rem",h:i,minH:n,display:"flex",alignItems:"center",...m.field};return e.jsx(je.input,{ref:d,className:ye("ui-color-picker__field",a),__css:u,...c})}),xs=ve(({className:a,...i},n)=>{const{value:c,styles:d}=Oe(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",zIndex:2,...d.swatch};return e.jsx(qo,{ref:n,className:ye("ui-color-picker__swatch",a),__css:m,color:c,isRounded:!0,...i})}),gs=ve(({className:a,children:i,...n},c)=>{const{styles:d}=Oe(),m={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",zIndex:1,...d.eyeDropper},h=ps(i).map(f=>s.cloneElement(f,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return e.jsx(je.button,{ref:c,className:ye("ui-color-picker__eye-dropper",a),__css:m,...n,children:ds(i)?h:e.jsx(Zo,{className:"ui-color-picker__eye-dropper__icon"})})}),Pa={title:"Components / Forms / ColorPicker",component:r},Z=()=>e.jsx(r,{placeholder:"#4387f4"}),q=()=>e.jsx(r,{defaultValue:"#4387f4ff"}),J=()=>e.jsx(r,{fallbackValue:"#000000"}),Q=()=>e.jsx(r,{defaultColor:"#4387f4ff"}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"#4387f4",children:e.jsx(_e,{children:"Submit"})}),e.jsx(r,{placeholder:"#4387f4",children:({value:a})=>e.jsxs(_e,{children:["Submit ",a]})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"small size",colorSelectorSize:"sm"}),e.jsx(r,{placeholder:"medium size",colorSelectorSize:"md"}),e.jsx(r,{placeholder:"large size",colorSelectorSize:"lg"}),e.jsx(r,{placeholder:"full size",colorSelectorSize:"full"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),oe=()=>e.jsx(r,{defaultValue:"hsla(240, 100%, 50%, 1)",format:"hsla"}),se=()=>e.jsx(r,{placeholder:"#4387F4FF",formatInput:a=>a.toUpperCase()}),ae=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),te=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatchesColumns:{base:8,md:7},swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}),le=()=>e.jsx(r,{swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ce=()=>e.jsx(r,{placeholder:"#4387f4ff",allowInput:!1}),ne=()=>e.jsx(r,{withPicker:!1,swatchesLabel:"Saved Colors",swatches:["#2e2e2e","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"],closeOnSelectSwatch:!0}),ie=()=>e.jsx(r,{withChannel:!1}),ue=()=>e.jsx(r,{withSwatch:!1}),pe=()=>e.jsx(r,{withEyeDropper:!1}),de=()=>e.jsx(r,{withColorSelectorEyeDropper:!0}),me=()=>e.jsx(r,{withResult:!0}),fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),he=()=>e.jsx(r,{placeholder:"#4387f4",placement:"bottom-end"}),Ce=()=>e.jsx(r,{placeholder:"#4387f4",offset:[16,16]}),be=()=>e.jsx(r,{placeholder:"#4387f4",gutter:32}),Pe=()=>e.jsx(r,{placeholder:"#4387f4",duration:.4}),Se=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"#4387f4",isDisabled:!0}),e.jsx(Re,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:"#4387f4"})})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"#4387f4",isReadOnly:!0}),e.jsx(Re,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{placeholder:"#4387f4"})})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{eyeDropperProps:{color:"primary"}}),e.jsx(r,{eyeDropperProps:{children:e.jsx(Ao,{icon:Ko})}})]}),ge=()=>{const[a,i]=s.useState("#4387f4ff");return e.jsx(r,{value:a,onChange:i})},we=()=>{var u;const a={colorInput:"#4387f4ff"},{control:i,handleSubmit:n,watch:c,formState:{errors:d}}=Go({defaultValues:a}),m=h=>console.log("submit:",h);return console.log("watch:",c()),e.jsxs(bs,{as:"form",onSubmit:n(m),children:[e.jsx(Re,{isInvalid:!!d.colorInput,label:"Pick color",errorMessage:(u=d.colorInput)==null?void 0:u.message,children:e.jsx(Uo,{name:"colorInput",control:i,render:({field:h})=>e.jsx(r,{...h})})}),e.jsx(_e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Qe,Xe,$e;Z.parameters={...Z.parameters,docs:{...(Qe=Z.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...($e=(Xe=Z.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var er,rr,or;q.parameters={...q.parameters,docs:{...(er=q.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4ff" />;
}`,...(or=(rr=q.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var sr,ar,tr;J.parameters={...J.parameters,docs:{...(sr=J.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <ColorPicker fallbackValue="#000000" />;
}`,...(tr=(ar=J.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var lr,cr,nr;Q.parameters={...Q.parameters,docs:{...(lr=Q.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultColor="#4387f4ff" />;
}`,...(nr=(cr=Q.parameters)==null?void 0:cr.docs)==null?void 0:nr.source}}};var ir,ur,pr;X.parameters={...X.parameters,docs:{...(ir=X.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4">
        <Button>Submit</Button>
      </ColorPicker>

      <ColorPicker placeholder="#4387f4">
        {({
        value
      }) => <Button>Submit {value}</Button>}
      </ColorPicker>
    </>;
}`,...(pr=(ur=X.parameters)==null?void 0:ur.docs)==null?void 0:pr.source}}};var dr,mr,fr;$.parameters={...$.parameters,docs:{...(dr=$.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="extra small size" size="xs" />
      <ColorPicker placeholder="small size" size="sm" />
      <ColorPicker placeholder="medium size" size="md" />
      <ColorPicker placeholder="large size" size="lg" />
    </>;
}`,...(fr=(mr=$.parameters)==null?void 0:mr.docs)==null?void 0:fr.source}}};var hr,Cr,br;ee.parameters={...ee.parameters,docs:{...(hr=ee.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="small size" colorSelectorSize="sm" />
      <ColorPicker placeholder="medium size" colorSelectorSize="md" />
      <ColorPicker placeholder="large size" colorSelectorSize="lg" />
      <ColorPicker placeholder="full size" colorSelectorSize="full" />
    </>;
}`,...(br=(Cr=ee.parameters)==null?void 0:Cr.docs)==null?void 0:br.source}}};var Pr,Sr,kr;re.parameters={...re.parameters,docs:{...(Pr=re.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker variant="outline" placeholder="outline" />
      <ColorPicker variant="filled" placeholder="filled" />
      <ColorPicker variant="flushed" placeholder="flushed" />
      <ColorPicker variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(kr=(Sr=re.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source}}};var xr,gr,wr;oe.parameters={...oe.parameters,docs:{...(xr=oe.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="hsla(240, 100%, 50%, 1)" format="hsla" />;
}`,...(wr=(gr=oe.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var jr,yr,vr;se.parameters={...se.parameters,docs:{...(jr=se.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387F4FF" formatInput={value => value.toUpperCase()} />;
}`,...(vr=(yr=se.parameters)==null?void 0:yr.docs)==null?void 0:vr.source}}};var Dr,Fr,zr;ae.parameters={...ae.parameters,docs:{...(Dr=ae.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(zr=(Fr=ae.parameters)==null?void 0:Fr.docs)==null?void 0:zr.source}}};var Ir,_r,Rr;te.parameters={...te.parameters,docs:{...(Ir=te.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatchesColumns={{
    base: 8,
    md: 7
  }} swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} />;
}`,...(Rr=(_r=te.parameters)==null?void 0:_r.docs)==null?void 0:Rr.source}}};var Or,Er,Br;le.parameters={...le.parameters,docs:{...(Or=le.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Br=(Er=le.parameters)==null?void 0:Er.docs)==null?void 0:Br.source}}};var Vr,Nr,Mr;ce.parameters={...ce.parameters,docs:{...(Vr=ce.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4ff" allowInput={false} />;
}`,...(Mr=(Nr=ce.parameters)==null?void 0:Nr.docs)==null?void 0:Mr.source}}};var Hr,Lr,Tr;ne.parameters={...ne.parameters,docs:{...(Hr=ne.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <ColorPicker withPicker={false} swatchesLabel="Saved Colors" swatches={["#2e2e2e", "#868e96", "#fa5252", "#e64980", "#be4bdb", "#7950f2", "#4c6ef5", "#228be6", "#15aabf", "#12b886", "#40c057", "#82c91e", "#fab005", "#fd7e14"]} closeOnSelectSwatch />;
}`,...(Tr=(Lr=ne.parameters)==null?void 0:Lr.docs)==null?void 0:Tr.source}}};var Ar,Kr,Gr;ie.parameters={...ie.parameters,docs:{...(Ar=ie.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <ColorPicker withChannel={false} />;
}`,...(Gr=(Kr=ie.parameters)==null?void 0:Kr.docs)==null?void 0:Gr.source}}};var Ur,Wr,Yr;ue.parameters={...ue.parameters,docs:{...(Ur=ue.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker withSwatch={false} />;
}`,...(Yr=(Wr=ue.parameters)==null?void 0:Wr.docs)==null?void 0:Yr.source}}};var Zr,qr,Jr;pe.parameters={...pe.parameters,docs:{...(Zr=pe.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <ColorPicker withEyeDropper={false} />;
}`,...(Jr=(qr=pe.parameters)==null?void 0:qr.docs)==null?void 0:Jr.source}}};var Qr,Xr,$r;de.parameters={...de.parameters,docs:{...(Qr=de.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker withColorSelectorEyeDropper />;
}`,...($r=(Xr=de.parameters)==null?void 0:Xr.docs)==null?void 0:$r.source}}};var eo,ro,oo;me.parameters={...me.parameters,docs:{...(eo=me.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <ColorPicker withResult />;
}`,...(oo=(ro=me.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var so,ao,to;fe.parameters={...fe.parameters,docs:{...(so=fe.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="custom border color" />

      <ColorPicker isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(to=(ao=fe.parameters)==null?void 0:ao.docs)==null?void 0:to.source}}};var lo,co,no;he.parameters={...he.parameters,docs:{...(lo=he.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" placement="bottom-end" />;
}`,...(no=(co=he.parameters)==null?void 0:co.docs)==null?void 0:no.source}}};var io,uo,po;Ce.parameters={...Ce.parameters,docs:{...(io=Ce.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" offset={[16, 16]} />;
}`,...(po=(uo=Ce.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,fo,ho;be.parameters={...be.parameters,docs:{...(mo=be.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" gutter={32} />;
}`,...(ho=(fo=be.parameters)==null?void 0:fo.docs)==null?void 0:ho.source}}};var Co,bo,Po;Pe.parameters={...Pe.parameters,docs:{...(Co=Pe.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" duration={0.4} />;
}`,...(Po=(bo=Pe.parameters)==null?void 0:bo.docs)==null?void 0:Po.source}}};var So,ko,xo;Se.parameters={...Se.parameters,docs:{...(So=Se.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(xo=(ko=Se.parameters)==null?void 0:ko.docs)==null?void 0:xo.source}}};var go,wo,jo;ke.parameters={...ke.parameters,docs:{...(go=ke.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="#4387f4" isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <ColorPicker placeholder="#4387f4" />
      </FormControl>
    </>;
}`,...(jo=(wo=ke.parameters)==null?void 0:wo.docs)==null?void 0:jo.source}}};var yo,vo,Do;xe.parameters={...xe.parameters,docs:{...(yo=xe.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker eyeDropperProps={{
      color: "primary"
    }} />
      <ColorPicker eyeDropperProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(Do=(vo=xe.parameters)==null?void 0:vo.docs)==null?void 0:Do.source}}};var Fo,zo,Io;ge.parameters={...ge.parameters,docs:{...(Fo=ge.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("#4387f4ff");
  return <ColorPicker value={value} onChange={onChange} />;
}`,...(Io=(zo=ge.parameters)==null?void 0:zo.docs)==null?void 0:Io.source}}};var _o,Ro,Oo;we.parameters={...we.parameters,docs:{...(_o=we.parameters)==null?void 0:_o.docs,source:{originalSource:`() => {
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
}`,...(Oo=(Ro=we.parameters)==null?void 0:Ro.docs)==null?void 0:Oo.source}}};const Sa=["basic","withDefaultValue","withFallbackValue","withDefaultColor","withChildren","withSize","withColorSelectorSize","withVariant","withFormat","withFormatInput","withSwatches","withSwatchesColumns","withCloseOnSelectSwatch","disabledAllowInput","disabledPicker","disabledChannel","disabledSwatch","disabledEyeDropper","enabledColorPickerEyeDropper","enabledResult","withBorderColor","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","customEyeDropperIcon","customControl","reactHookForm"];export{Sa as __namedExportsOrder,Z as basic,ge as customControl,xe as customEyeDropperIcon,Pa as default,ce as disabledAllowInput,ie as disabledChannel,pe as disabledEyeDropper,ne as disabledPicker,ue as disabledSwatch,de as enabledColorPickerEyeDropper,me as enabledResult,Se as isDisabled,ke as isReadonly,we as reactHookForm,fe as withBorderColor,X as withChildren,le as withCloseOnSelectSwatch,ee as withColorSelectorSize,Q as withDefaultColor,q as withDefaultValue,Pe as withDuration,J as withFallbackValue,oe as withFormat,se as withFormatInput,be as withGutter,Ce as withOffset,he as withPlacement,$ as withSize,ae as withSwatches,te as withSwatchesColumns,re as withVariant};
