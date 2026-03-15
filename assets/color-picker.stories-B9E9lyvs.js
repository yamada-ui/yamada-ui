import{n as pr,o as dr,I as mr,d as hr,G as fr,aZ as Cr,r as l,M as Ze,aw as xr,g as Je,h as C,m as qe,f as Pr,a as kr,e as gr,j as e,L as Xe,l as Sr,P as v,V as er,Q as rr,C as br}from"./iframe-BYxWTAfU.js";import{P as Te}from"./props-table-Bo4bQ_jN.js";import{u as or,C as ar}from"./index.esm-BGvJ6BUb.js";import{d as u}from"./date-picker.style-D0iTM7WS.js";import{n as vr}from"./native-select.style-BYGKEjuh.js";import{u as jr}from"./index-1SEMHNx0.js";import{u as yr}from"./index-ChSCjdDN.js";import{u as Fr,C as wr,P as Or}from"./color-selector-C6CXa6Rs.js";import{u as Ir,F as M}from"./use-field-props-DU62N9XW.js";import{a as Dr}from"./event-B-4KAdct.js";import{u as Rr}from"./input-C1j0W-rS.js";import{C as Gr}from"./color-swatch-XIMzg4Un.js";import{u as Br}from"./group-Dyq4koHR.js";import{u as Er}from"./use-input-border-DlsVUduD.js";import{P as Tr,a as Ar,b as Vr}from"./popover-Cubfr-96.js";import{I as D,a as Ye,b as z}from"./input-group-D8FcFMh6.js";import{F}from"./for-CEjldjdR.js";import{B as nr}from"./box-BFXVRkYm.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./autocomplete.style-DGBaUAX5.js";import"./menu.style-CvaTCmil.js";import"./index-DNwFJME9.js";import"./use-disclosure-C0vorEpB.js";import"./saturation-slider-DMnm2UHi.js";import"./hue-slider.style-CGhBO2dt.js";import"./index-BbwJJFrk.js";import"./number-CcP_arM8.js";import"./hue-slider-TANBI1u8.js";import"./index-sjTZ4rnq.js";import"./use-breakpoint-Co1erXvx.js";import"./use-breakpoint-value-DJioUp1E.js";import"./use-color-mode-value-DaTIAf89.js";import"./slider-w6LWKo0h.js";import"./alpha-slider-BrKMtMgR.js";import"./index-Dy2r_i0E.js";import"./index-YpudMcFq.js";import"./index-BpTwJ2WF.js";import"./index-DYOvjMtg.js";import"./slide-fade-DC4ET5n-.js";import"./transition-C-yjts3n.js";import"./fade-scale-B-5sB1L1.js";const Mr=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],zr=pr("palette",Mr),H=dr(mr)({as:zr}),Hr=hr({base:{...vr.base,colorSwatch:{w:"1.5em"},content:{maxW:"sm",p:"1"},eyeDropper:u.base?.icon,field:u.base?.field,input:u.base?.input},variants:{filled:u.variants?.filled,flushed:{...u.variants?.flushed,root:{}},outline:u.variants?.outline,plain:u.variants?.plain},sizes:{xs:u.sizes?.xs,sm:u.sizes?.sm,md:u.sizes?.md,lg:u.sizes?.lg,xl:u.sizes?.xl},defaultProps:{size:"md",variant:"outline"}}),qr=r=>{const{t:a}=fr("colorPicker"),{props:{id:t,ref:d,name:m,"aria-label":x,"aria-labelledby":R,allowInput:c=!0,closeOnChange:L=!1,defaultValue:W,disabled:P,fallbackValue:G="#FFFFFF",format:Ae,formatInput:k,openOnChange:_=!0,openOnClick:$=!0,openOnFocus:g=!0,pattern:S,placeholder:K,readOnly:j,required:N,value:B,onChange:Ve,onInputChange:U,...Me},ariaProps:ze,dataProps:h,eventProps:He}=Ir(r),{interactive:f,open:E,getContentProps:Q,getTriggerProps:Z,popoverProps:J,onClose:T,onOpen:i}=jr({disabled:P,openOnClick:!1,openOnEnter:!c,openOnSpace:!c,placement:"end-start",readOnly:j,transferFocus:!1,...ze,...h,...He,...Me}),b=Ae??Cr(B??W??G),X=b.endsWith("a"),A=l.useRef(null),V=l.useRef(null),w=l.useRef(null),O=l.useRef(!1),[y,p]=yr({defaultValue:W,value:B,onChange:Ve}),{supported:We,onOpen:_e}=Fr(),$e=l.useCallback(()=>{f&&(O.current=!0,c&&w.current?.focus(),$&&i())},[c,f,i,$]),Y=l.useCallback(n=>{g&&(n.preventDefault(),n.stopPropagation())},[g]),Ke=l.useCallback(()=>{c||(g&&i(),O.current=!1)},[c,i,g]),Ne=l.useCallback(n=>{n.preventDefault(),n.stopPropagation(),g&&!O.current&&i(),O.current=!1},[i,g]),Ue=l.useCallback(n=>{Ze(A.current,n.relatedTarget)||Ze(V.current,n.relatedTarget)?n.preventDefault():p(s=>{if(!s)return s;let I=xr(s)(b);return I?(k&&(I=k(I)),S&&(I=I.replace(S,"")),I):s})},[b,k,S,p]),Qe=l.useCallback(n=>{if(!c)return;U?.(n),Je(L,n)?T():Je(_,n)&&i();let s=n.target.value;k&&(s=k(s)),S&&(s=s.replace(S,"")),p(s)},[c,L,k,T,U,i,_,S,p]),ee=l.useCallback(async()=>{if(!f)return;const n=await _e();n?.sRGBHex&&p(n.sRGBHex)},[f,_e,p]);l.useEffect(()=>{if(E)return Dr(V.current,c?w.current:A.current)},[c,E]);const sr=l.useCallback(n=>({...h,...n}),[h]),tr=l.useCallback(({ref:n,...s}={})=>Z({ref:qe(n,A),"aria-haspopup":"dialog",tabIndex:c?-1:0,...s,onClick:C(s.onClick,$e),onFocus:C(s.onFocus,Ke),onMouseDown:C(s.onMouseDown,Y)}),[c,Z,$e,Ke,Y]),lr=l.useCallback(({"aria-labelledby":n,...s}={})=>({id:t,ref:qe(s.ref,d,w),name:m,style:{...c?{}:{pointerEvents:"none"},...s.style},"aria-label":x,"aria-labelledby":Pr(n,R),autoComplete:"off",disabled:P,placeholder:K,readOnly:j,required:N,tabIndex:c?0:-1,value:y,...h,...s,onBlur:C(s.onBlur,Ue),onChange:C(s.onChange,Qe),onFocus:C(s.onFocus,Ne),onMouseDown:C(s.onMouseDown,Y)}),[c,x,R,h,P,t,m,Ue,Qe,Ne,Y,K,j,d,N,y]),cr=l.useCallback((n={})=>({...h,"aria-disabled":gr(!f),"aria-label":a("Pick a color"),hidden:!We,role:"button",tabIndex:f?0:-1,...n,onClick:C(n.onClick,ee),onKeyDown:C(n.onKeyDown,s=>kr(s,{Enter:ee,Space:ee}))}),[h,f,ee,We,a]),ir=l.useCallback(({ref:n,...s}={})=>Q({ref:qe(n,V),role:"dialog",...s}),[Q]),ur=l.useCallback((n={})=>({disabled:P,fallbackValue:G,format:b,readOnly:j,value:y,...n,onChange:C(n.onChange,p)}),[P,G,b,j,y,p]);return{alpha:X,format:b,interactive:f,open:E,setValue:p,value:y,getContentProps:ir,getEyeDropperProps:cr,getFieldProps:tr,getInputProps:lr,getRootProps:sr,getSelectorProps:ur,popoverProps:J,onClose:T,onOpen:i}},{ComponentContext:Lr,useComponentContext:Le,withContext:q,withProvider:Wr}=Sr("color-picker",Hr),o=Wr(r=>{const[a,{className:t,css:d,colorScheme:m,size:x,animationScheme:R="block-start",colorSwatches:c,colorSwatchGroupColumns:L,colorSwatchGroupLabel:W,duration:P,errorBorderColor:G,focusBorderColor:Ae,withColorSwatch:k=!0,withEyeDropper:_=!0,alphaSliderProps:$,colorSwatchGroupLabelProps:g,colorSwatchGroupProps:S,colorSwatchItemProps:K,colorSwatchProps:j,contentProps:N,elementProps:B,endElementProps:Ve,eyeDropperProps:U,fieldProps:Me,hueSliderProps:ze,inputProps:h,rootProps:He,saturationSliderProps:f,selectorProps:E,startElementProps:Q,...Z}]=Br(r),{value:J,getContentProps:T,getEyeDropperProps:i,getFieldProps:b,getInputProps:X,getRootProps:A,getSelectorProps:V,popoverProps:w}=qr(Z),O=l.useMemo(()=>({animationScheme:R,duration:P,...w}),[R,P,w]),y=Er({errorBorderColor:G,focusBorderColor:Ae}),p=l.useMemo(()=>({value:J,getEyeDropperProps:i,getInputProps:X,inputProps:h}),[i,X,h,J]);return e.jsx(Lr,{value:p,children:e.jsxs(Tr,{...O,children:[e.jsxs(D,{className:t,css:d,colorScheme:m,...A({...a,...He}),children:[k?e.jsx(Ye,{...B,...Q,children:e.jsx(Kr,{...j})}):null,e.jsx(Ar,{children:e.jsx(_r,{...b({...y,...Me})})}),_?e.jsx(Ye,{clickable:!0,...B,...Ve,children:e.jsx(Nr,{...i(U)})}):null]}),e.jsx(Ur,{...Xe(T(Xe(N))),children:e.jsx(wr,{size:x,...V({colorSwatches:c,colorSwatchGroupColumns:L,colorSwatchGroupLabel:W,alphaSliderProps:$,colorSwatchGroupLabelProps:g,colorSwatchGroupProps:S,colorSwatchItemProps:K,hueSliderProps:ze,saturationSliderProps:f,...E})})})]})})},"root",{transferProps:["size"]})(r=>({...Rr(),...r})),_r=q("div","field")({"data-group-propagate":""},r=>{const{getInputProps:a,inputProps:t}=Le();return{children:e.jsx($r,{...a(t)}),...r}}),$r=q("input","input")(),Kr=q(Gr,"colorSwatch")(void 0,r=>{const{value:a}=Le();return{variant:"circle",color:a,...r}}),Nr=q("div","eyeDropper")(void 0,({children:r,icon:a,...t})=>{const{getEyeDropperProps:d}=Le();return d({children:a||r||e.jsx(Or,{}),...t})}),Ur=q(Vr,"content")(),qo={component:o,title:"Components / ColorPicker"},re=()=>e.jsx(o,{placeholder:"#4387f4"}),oe=()=>e.jsx(Te,{variant:"stack",columns:["outline","filled","flushed"],rows:br,children:(r,a,t)=>e.jsx(o,{colorScheme:a,variant:r,placeholder:v(r)},t)}),ae=()=>e.jsx(Te,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,a,t)=>e.jsx(o,{size:r,variant:a,placeholder:`Size (${r})`},t)}),ne=()=>e.jsx(o,{defaultValue:"#4387f4",placeholder:"#4387f4"}),se=()=>e.jsx(o,{defaultValue:"#775999A0",placeholder:"#775999A0"}),te=()=>e.jsx(Te,{variant:"stack",rows:["hex","hexa","rgb","rgba","hsl","hsla"],children:(r,a,t)=>e.jsx(o,{format:a,placeholder:`Format (${a})`},t)}),le=()=>e.jsx(o,{pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387f4"}),ce=()=>e.jsx(o,{formatInput:r=>r.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387F4"}),ie=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),ue=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),pe=()=>e.jsx(o,{offset:[16,16],placeholder:"#4387f4"}),de=()=>e.jsx(o,{gutter:16,placeholder:"#4387f4"}),me=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4"}),he=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4",placement:"center-end",rootProps:{w:"xs"}}),fe=()=>e.jsx(nr,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,placeholder:"#4387f4"})}),Ce=()=>e.jsx(o,{openOnChange:r=>r.target.value.length>1,openOnFocus:!1,placeholder:"#4387f4"}),xe=()=>e.jsx(o,{closeOnChange:r=>!r.target.value.length,openOnFocus:!1,placeholder:"#4387f4"}),Pe=()=>e.jsx(nr,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,placeholder:"#4387f4"})}),ke=()=>e.jsx(o,{openOnFocus:!1,placeholder:"#4387f4"}),ge=()=>e.jsx(o,{openOnClick:!1,placeholder:"#4387f4"}),Se=()=>e.jsx(o,{closeOnBlur:!1,placeholder:"#4387f4"}),be=()=>e.jsx(o,{closeOnEsc:!1,placeholder:"#4387f4"}),ve=()=>e.jsx(o,{placeholder:"#4387f4",withEyeDropper:!1}),je=()=>e.jsx(o,{allowInput:!1,placeholder:"#4387f4"}),ye=()=>e.jsx(o,{placeholder:"#4387f4",withColorSwatch:!1}),Fe=()=>e.jsx(Te,{variant:"stack",rows:["rounded","circle","square"],children:(r,a,t)=>e.jsx(o,{placeholder:"#4387f4",selectorProps:{shape:a}},t)}),we=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,disabled:!0,placeholder:v(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,disabled:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{disabled:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,placeholder:v(r),readOnly:!0},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,readOnly:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{label:"What is your favorite color?",readOnly:!0,children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,invalid:!0,placeholder:v(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,invalid:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{errorMessage:"This is required.",invalid:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),De=()=>e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(D,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),Ge=()=>{const[r,a]=l.useState("#4387f4");return e.jsx(o,{"aria-label":"Choose a color",value:r,onChange:a})},Be=()=>{const{control:r,formState:{errors:a},handleSubmit:t}=or(),d=m=>console.log("submit:",m);return e.jsxs(er,{as:"form",onSubmit:t(d),children:[e.jsx(M,{errorMessage:a.colorPicker?.message,invalid:!!a.colorPicker,label:"What is your favorite color?",children:e.jsx(ar,{name:"colorPicker",control:r,render:({field:m})=>e.jsx(o,{...m}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(rr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{const r={colorPicker:"#4387f4"},{control:a,formState:{errors:t},handleSubmit:d}=or({defaultValues:r}),m=x=>console.log("submit:",x);return e.jsxs(er,{as:"form",onSubmit:d(m),children:[e.jsx(M,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:"What is your favorite color?",children:e.jsx(ar,{name:"colorPicker",control:a,render:({field:x})=>e.jsx(o,{...x}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(rr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...oe.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...se.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...te.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...ce.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...ie.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...ue.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...pe.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...me.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...he.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...fe.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...Ce.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...xe.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...Pe.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...ke.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...ge.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...Se.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...be.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...ve.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...je.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...ye.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...Fe.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <ColorPicker key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="What is your favorite color?">
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>;
}`,...we.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <ColorPicker key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="What is your favorite color?" readOnly>
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>;
}`,...Oe.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <ColorPicker key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="This is required." invalid label="What is your favorite color?">
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>;
}`,...Ie.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...De.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="Default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="Custom border color" />

      <ColorPicker errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <PaletteIcon />
        </InputGroup.Addon>
        <ColorPicker placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...Re.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...Ge.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    colorPicker: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.colorPicker?.message} invalid={!!errors.colorPicker} label="What is your favorite color?">
        <Controller name="colorPicker" control={control} render={({
        field
      }) => <ColorPicker {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...Be.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    colorPicker: string;
  }
  const defaultValues: Data = {
    colorPicker: "#4387f4"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.colorPicker?.message} invalid={!!errors.colorPicker} label="What is your favorite color?">
        <Controller name="colorPicker" control={control} render={({
        field
      }) => <ColorPicker {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...Ee.parameters?.docs?.source}}};const Lo=["Basic","Variant","Size","DefaultValue","Alpha","Format","Pattern","FormatInput","ColorSwatches","ColorSwatchGroupColumns","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledEyeDropper","DisallowInput","HiddenColorSwatch","Shape","Disabled","ReadOnly","Invalid","Addon","BorderColor","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{De as Addon,se as Alpha,me as AnimationScheme,re as Basic,fe as BlockScrollOnMount,Re as BorderColor,xe as CloseOnChange,Pe as CloseOnScroll,ue as ColorSwatchGroupColumns,ie as ColorSwatches,Ge as CustomControl,ne as DefaultValue,we as Disabled,Se as DisabledCloseOnBlur,be as DisabledCloseOnEsc,ve as DisabledEyeDropper,ge as DisabledOpenOnClick,ke as DisabledOpenOnFocus,je as DisallowInput,te as Format,ce as FormatInput,de as Gutter,ye as HiddenColorSwatch,Ie as Invalid,pe as Offset,Ce as OpenOnChange,le as Pattern,he as Placement,Be as ReactHookForm,Ee as ReactHookFormDefaultValue,Oe as ReadOnly,Fe as Shape,ae as Size,oe as Variant,Lo as __namedExportsOrder,qo as default};
