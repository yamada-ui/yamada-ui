import{bb as pr,bc as dr,bd as mr,k as hr,E as fr,cf as Cr,r as l,bA as Qe,a0 as xr,l as Xe,a1 as C,v as qe,a2 as Pr,bm as kr,bq as gr,j as e,ah as Ye,G as Sr,t as v,V as er,B as rr,C as br}from"./iframe-zzHt-Ltj.js";import{u as or,C as ar}from"./index.esm-ntWXSHe8.js";import{d as u}from"./date-picker.style-CNTZvW1O.js";import{n as vr}from"./native-select.style-DvuGAk02.js";import{u as jr}from"./index-jaSN63UW.js";import{u as yr}from"./index-SI4BglKS.js";import{u as Fr,C as wr,P as Or}from"./color-selector-CeHUweya.js";import{u as Ir,F as M}from"./use-field-props-DAKj0Ulu.js";import{b as Dr}from"./event-C6BFeDxn.js";import{u as Rr}from"./input-BxywdGI0.js";import{C as Gr}from"./color-swatch-so6BRYtn.js";import{u as Br}from"./group-Bbv2QXhz.js";import{u as Er}from"./use-input-border-rhqUICtu.js";import{P as Ar,b as Tr,c as Vr}from"./popover-U4TxCw2_.js";import{I as D,a as Ze,b as z}from"./input-group-BdM2dIo6.js";import{F}from"./for-BeG5r54E.js";import{B as nr}from"./box-DmHFVF5y.js";import{P as Ae}from"./props-table-BuS_P20q.js";import"./preload-helper-PPVm8Dsz.js";import"./autocomplete.style-P_YOCLLh.js";import"./menu.style-Dr_LcR7Z.js";import"./index-DCmHQHWd.js";import"./use-disclosure-YHFL4iGZ.js";import"./saturation-slider-6cZRJ_Vw.js";import"./hue-slider.style-hlqUSsqv.js";import"./index-BOcOrQeo.js";import"./number-CcP_arM8.js";import"./hue-slider-BHR2GNwA.js";import"./index-4SNJKV2K.js";import"./use-breakpoint-qD0bSR0Y.js";import"./use-breakpoint-value-jAHohvyM.js";import"./use-color-mode-value-ClV3pThs.js";import"./slider-BWk6abOx.js";import"./alpha-slider-OVTyi6M2.js";import"./flex-75ZVGshN.js";import"./index-C6PUlHfd.js";import"./index-BPpvoSJc.js";import"./index-C-GzYmP7.js";import"./index-CZ06t23A.js";import"./slide-fade-BVIBkxyE.js";import"./transition-CQswCYNz.js";import"./fade-scale-DCJ-Ho38.js";import"./grid-vbO7oIBV.js";import"./grid-item-DPQ3ly0Q.js";import"./heading-C_EBqcRR.js";const Mr=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],zr=pr("palette",Mr),H=dr(mr)({as:zr}),Hr=hr({base:{...vr.base,colorSwatch:{w:"1.5em"},content:{maxW:"sm",p:"1"},eyeDropper:u.base?.icon,field:u.base?.field,input:u.base?.input},variants:{filled:u.variants?.filled,flushed:{...u.variants?.flushed,root:{}},outline:u.variants?.outline,plain:u.variants?.plain},sizes:{xs:u.sizes?.xs,sm:u.sizes?.sm,md:u.sizes?.md,lg:u.sizes?.lg,xl:u.sizes?.xl},defaultProps:{size:"md",variant:"outline"}}),qr=r=>{const{t:a}=fr("colorPicker"),{props:{id:t,ref:d,name:m,"aria-label":x,"aria-labelledby":R,allowInput:c=!0,closeOnChange:W=!1,defaultValue:L,disabled:P,fallbackValue:G="#FFFFFF",format:Te,formatInput:k,openOnChange:_=!0,openOnClick:$=!0,openOnFocus:g=!0,pattern:S,placeholder:K,readOnly:j,required:N,value:B,onChange:Ve,onInputChange:U,...Me},ariaProps:ze,dataProps:h,eventProps:He}=Ir(r),{interactive:f,open:E,getContentProps:J,getTriggerProps:Q,popoverProps:X,onClose:A,onOpen:i}=jr({disabled:P,openOnClick:!1,openOnEnter:!c,openOnSpace:!c,placement:"end-start",readOnly:j,transferFocus:!1,...ze,...h,...He,...Me}),b=Te??Cr(B??L??G),Y=b.endsWith("a"),T=l.useRef(null),V=l.useRef(null),w=l.useRef(null),O=l.useRef(!1),[y,p]=yr({defaultValue:L,value:B,onChange:Ve}),{supported:Le,onOpen:_e}=Fr(),$e=l.useCallback(()=>{f&&(O.current=!0,c&&w.current?.focus(),$&&i())},[c,f,i,$]),Z=l.useCallback(n=>{g&&(n.preventDefault(),n.stopPropagation())},[g]),Ke=l.useCallback(()=>{c||(g&&i(),O.current=!1)},[c,i,g]),Ne=l.useCallback(n=>{n.preventDefault(),n.stopPropagation(),g&&!O.current&&i(),O.current=!1},[i,g]),Ue=l.useCallback(n=>{Qe(T.current,n.relatedTarget)||Qe(V.current,n.relatedTarget)?n.preventDefault():p(s=>{if(!s)return s;let I=xr(s)(b);return I?(k&&(I=k(I)),S&&(I=I.replace(S,"")),I):s})},[b,k,S,p]),Je=l.useCallback(n=>{if(!c)return;U?.(n),Xe(W,n)?A():Xe(_,n)&&i();let s=n.target.value;k&&(s=k(s)),S&&(s=s.replace(S,"")),p(s)},[c,W,k,A,U,i,_,S,p]),ee=l.useCallback(async()=>{if(!f)return;const n=await _e();n?.sRGBHex&&p(n.sRGBHex)},[f,_e,p]);l.useEffect(()=>{if(E)return Dr(V.current,c?w.current:T.current)},[c,E]);const sr=l.useCallback(n=>({...h,...n}),[h]),tr=l.useCallback(({ref:n,...s}={})=>Q({ref:qe(n,T),"aria-haspopup":"dialog",tabIndex:c?-1:0,...s,onClick:C(s.onClick,$e),onFocus:C(s.onFocus,Ke),onMouseDown:C(s.onMouseDown,Z)}),[c,Q,$e,Ke,Z]),lr=l.useCallback(({"aria-labelledby":n,...s}={})=>({id:t,ref:qe(s.ref,d,w),name:m,style:{...c?{}:{pointerEvents:"none"},...s.style},"aria-label":x,"aria-labelledby":Pr(n,R),autoComplete:"off",disabled:P,placeholder:K,readOnly:j,required:N,tabIndex:c?0:-1,value:y,...h,...s,onBlur:C(s.onBlur,Ue),onChange:C(s.onChange,Je),onFocus:C(s.onFocus,Ne),onMouseDown:C(s.onMouseDown,Z)}),[c,x,R,h,P,t,m,Ue,Je,Ne,Z,K,j,d,N,y]),cr=l.useCallback((n={})=>({...h,"aria-disabled":gr(!f),"aria-label":a("Pick a color"),hidden:!Le,role:"button",tabIndex:f?0:-1,...n,onClick:C(n.onClick,ee),onKeyDown:C(n.onKeyDown,s=>kr(s,{Enter:ee,Space:ee}))}),[h,f,ee,Le,a]),ir=l.useCallback(({ref:n,...s}={})=>J({ref:qe(n,V),role:"dialog",...s}),[J]),ur=l.useCallback((n={})=>({disabled:P,fallbackValue:G,format:b,readOnly:j,value:y,...n,onChange:C(n.onChange,p)}),[P,G,b,j,y,p]);return{alpha:Y,format:b,interactive:f,open:E,setValue:p,value:y,getContentProps:ir,getEyeDropperProps:cr,getFieldProps:tr,getInputProps:lr,getRootProps:sr,getSelectorProps:ur,popoverProps:X,onClose:A,onOpen:i}},{ComponentContext:Wr,useComponentContext:We,withContext:q,withProvider:Lr}=Sr("color-picker",Hr),o=Lr(r=>{const[a,{className:t,css:d,colorScheme:m,size:x,animationScheme:R="block-start",colorSwatches:c,colorSwatchGroupColumns:W,colorSwatchGroupLabel:L,duration:P,errorBorderColor:G,focusBorderColor:Te,withColorSwatch:k=!0,withEyeDropper:_=!0,alphaSliderProps:$,colorSwatchGroupLabelProps:g,colorSwatchGroupProps:S,colorSwatchItemProps:K,colorSwatchProps:j,contentProps:N,elementProps:B,endElementProps:Ve,eyeDropperProps:U,fieldProps:Me,hueSliderProps:ze,inputProps:h,rootProps:He,saturationSliderProps:f,selectorProps:E,startElementProps:J,...Q}]=Br(r),{value:X,getContentProps:A,getEyeDropperProps:i,getFieldProps:b,getInputProps:Y,getRootProps:T,getSelectorProps:V,popoverProps:w}=qr(Q),O=l.useMemo(()=>({animationScheme:R,duration:P,...w}),[R,P,w]),y=Er({errorBorderColor:G,focusBorderColor:Te}),p=l.useMemo(()=>({value:X,getEyeDropperProps:i,getInputProps:Y,inputProps:h}),[i,Y,h,X]);return e.jsx(Wr,{value:p,children:e.jsxs(Ar,{...O,children:[e.jsxs(D,{className:t,css:d,colorScheme:m,...T({...a,...He}),children:[k?e.jsx(Ze,{...B,...J,children:e.jsx(Kr,{...j})}):null,e.jsx(Tr,{children:e.jsx(_r,{...b({...y,...Me})})}),_?e.jsx(Ze,{clickable:!0,...B,...Ve,children:e.jsx(Nr,{...i(U)})}):null]}),e.jsx(Ur,{...Ye(A(Ye(N))),children:e.jsx(wr,{size:x,...V({colorSwatches:c,colorSwatchGroupColumns:W,colorSwatchGroupLabel:L,alphaSliderProps:$,colorSwatchGroupLabelProps:g,colorSwatchGroupProps:S,colorSwatchItemProps:K,hueSliderProps:ze,saturationSliderProps:f,...E})})})]})})},"root",{transferProps:["size"]})(r=>({...Rr(),...r})),_r=q("div","field")({"data-group-propagate":""},r=>{const{getInputProps:a,inputProps:t}=We();return{children:e.jsx($r,{...a(t)}),...r}}),$r=q("input","input")(),Kr=q(Gr,"colorSwatch")(void 0,r=>{const{value:a}=We();return{variant:"circle",color:a,...r}}),Nr=q("div","eyeDropper")(void 0,({children:r,icon:a,...t})=>{const{getEyeDropperProps:d}=We();return d({children:a||r||e.jsx(Or,{}),...t})}),Ur=q(Vr,"content")(),qo={component:o,title:"Components / ColorPicker"},re=()=>e.jsx(o,{placeholder:"#4387f4"}),oe=()=>e.jsx(Ae,{variant:"stack",columns:["outline","filled","flushed"],rows:br,children:(r,a,t)=>e.jsx(o,{colorScheme:a,variant:r,placeholder:v(r)},t)}),ae=()=>e.jsx(Ae,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,a,t)=>e.jsx(o,{size:r,variant:a,placeholder:`Size (${r})`},t)}),ne=()=>e.jsx(o,{defaultValue:"#4387f4",placeholder:"#4387f4"}),se=()=>e.jsx(o,{defaultValue:"#775999A0",placeholder:"#775999A0"}),te=()=>e.jsx(Ae,{variant:"stack",rows:["hex","hexa","rgb","rgba","hsl","hsla"],children:(r,a,t)=>e.jsx(o,{format:a,placeholder:`Format (${a})`},t)}),le=()=>e.jsx(o,{pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387f4"}),ce=()=>e.jsx(o,{formatInput:r=>r.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387F4"}),ie=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),ue=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),pe=()=>e.jsx(o,{offset:[16,16],placeholder:"#4387f4"}),de=()=>e.jsx(o,{gutter:16,placeholder:"#4387f4"}),me=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4"}),he=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4",placement:"center-end",rootProps:{w:"xs"}}),fe=()=>e.jsx(nr,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,placeholder:"#4387f4"})}),Ce=()=>e.jsx(o,{openOnChange:r=>r.target.value.length>1,openOnFocus:!1,placeholder:"#4387f4"}),xe=()=>e.jsx(o,{closeOnChange:r=>!r.target.value.length,openOnFocus:!1,placeholder:"#4387f4"}),Pe=()=>e.jsx(nr,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,placeholder:"#4387f4"})}),ke=()=>e.jsx(o,{openOnFocus:!1,placeholder:"#4387f4"}),ge=()=>e.jsx(o,{openOnClick:!1,placeholder:"#4387f4"}),Se=()=>e.jsx(o,{closeOnBlur:!1,placeholder:"#4387f4"}),be=()=>e.jsx(o,{closeOnEsc:!1,placeholder:"#4387f4"}),ve=()=>e.jsx(o,{placeholder:"#4387f4",withEyeDropper:!1}),je=()=>e.jsx(o,{allowInput:!1,placeholder:"#4387f4"}),ye=()=>e.jsx(o,{placeholder:"#4387f4",withColorSwatch:!1}),Fe=()=>e.jsx(Ae,{variant:"stack",rows:["rounded","circle","square"],children:(r,a,t)=>e.jsx(o,{placeholder:"#4387f4",selectorProps:{shape:a}},t)}),we=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,disabled:!0,placeholder:v(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,disabled:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{disabled:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,placeholder:v(r),readOnly:!0},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,readOnly:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{label:"What is your favorite color?",readOnly:!0,children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,invalid:!0,placeholder:v(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,invalid:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{errorMessage:"This is required.",invalid:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),De=()=>e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(D,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),Ge=()=>{const[r,a]=l.useState("#4387f4");return e.jsx(o,{"aria-label":"Choose a color",value:r,onChange:a})},Be=()=>{const{control:r,formState:{errors:a},handleSubmit:t}=or(),d=m=>console.log("submit:",m);return e.jsxs(er,{as:"form",onSubmit:t(d),children:[e.jsx(M,{errorMessage:a.colorPicker?.message,invalid:!!a.colorPicker,label:"What is your favorite color?",children:e.jsx(ar,{name:"colorPicker",control:r,render:({field:m})=>e.jsx(o,{...m}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(rr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{const r={colorPicker:"#4387f4"},{control:a,formState:{errors:t},handleSubmit:d}=or({defaultValues:r}),m=x=>console.log("submit:",x);return e.jsxs(er,{as:"form",onSubmit:d(m),children:[e.jsx(M,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:"What is your favorite color?",children:e.jsx(ar,{name:"colorPicker",control:a,render:({field:x})=>e.jsx(o,{...x}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(rr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ee.parameters?.docs?.source}}};const Wo=["Basic","Variant","Size","DefaultValue","Alpha","Format","Pattern","FormatInput","ColorSwatches","ColorSwatchGroupColumns","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledEyeDropper","DisallowInput","HiddenColorSwatch","Shape","Disabled","ReadOnly","Invalid","Addon","BorderColor","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{De as Addon,se as Alpha,me as AnimationScheme,re as Basic,fe as BlockScrollOnMount,Re as BorderColor,xe as CloseOnChange,Pe as CloseOnScroll,ue as ColorSwatchGroupColumns,ie as ColorSwatches,Ge as CustomControl,ne as DefaultValue,we as Disabled,Se as DisabledCloseOnBlur,be as DisabledCloseOnEsc,ve as DisabledEyeDropper,ge as DisabledOpenOnClick,ke as DisabledOpenOnFocus,je as DisallowInput,te as Format,ce as FormatInput,de as Gutter,ye as HiddenColorSwatch,Ie as Invalid,pe as Offset,Ce as OpenOnChange,le as Pattern,he as Placement,Be as ReactHookForm,Ee as ReactHookFormDefaultValue,Oe as ReadOnly,Fe as Shape,ae as Size,oe as Variant,Wo as __namedExportsOrder,qo as default};
