import{n as tr,o as lr,I as cr,d as ir,G as ur,a8 as pr,r as c,M as $e,a9 as dr,k as Ke,m as ne,h as g,e as mr,a as hr,g as fr,j as e,L as Ne,C as Cr,P as k,V as Qe,Q as Je}from"./iframe-5QspZtQ-.js";import{P as ze}from"./props-table-DAC1ISVp.js";import{u as Xe,C as Ye}from"./index.esm-Cz3u5K4m.js";import{d as u}from"./date-picker.style-eKvlwQTL.js";import{n as Pr}from"./native-select.style-Dcwb3p_X.js";import{u as xr}from"./index-C3Uagu8x.js";import{u as gr}from"./index-xocwRrSJ.js";import{u as kr,C as Sr,P as br}from"./color-selector-DZ3Fb1Gi.js";import{u as vr,F as A}from"./use-field-props-BSPmBEwJ.js";import{u as jr}from"./input-ClZ3yx_T.js";import{C as wr}from"./color-swatch-DYs2Z_QB.js";import{u as yr}from"./group-OikBWKOl.js";import{u as Fr,P as Or,a as Ir,b as Dr}from"./popover-D5GdWkkL.js";import{u as Rr}from"./use-input-border-DCrAv45g.js";import{I,a as Ue,b as T}from"./input-group-uzNQrJkv.js";import{B as Ze}from"./box--AjZ-gTJ.js";import{F as w}from"./for-DDltKb5N.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";import"./autocomplete.style-XjAwo22y.js";import"./menu.style-D3es7ApM.js";import"./index-CVctQ1CM.js";import"./use-disclosure-CLRLHuYp.js";import"./saturation-slider-BsiNVK-Y.js";import"./hue-slider.style-CAC2EayW.js";import"./index-BJGMorFZ.js";import"./event-DtO76Igx.js";import"./number-CcP_arM8.js";import"./hue-slider-kuNYeN5Y.js";import"./index-BYvBzSg1.js";import"./use-breakpoint-chaUVSrh.js";import"./use-breakpoint-value-zlcrtcvs.js";import"./use-color-mode-value-BafFs7oa.js";import"./slider-_CG56C_u.js";import"./alpha-slider-C8hV3qyo.js";import"./index-Dfw32jWo.js";import"./index-CcMovKZO.js";import"./index-BspX3WcN.js";import"./slide-fade-BN9Loi7b.js";import"./transition-kYsA6Bti.js";import"./fade-scale-BMcVdBGu.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Br=tr("palette",Gr),V=lr(cr)({as:Br}),Er=ir({base:{...Pr.base,colorSwatch:{w:"1.5em"},content:{maxW:"sm",p:"1"},eyeDropper:u.base?.icon,field:u.base?.field,input:u.base?.input},variants:{filled:u.variants?.filled,flushed:{...u.variants?.flushed,root:{}},outline:u.variants?.outline,plain:u.variants?.plain},sizes:{xs:u.sizes?.xs,sm:u.sizes?.sm,md:u.sizes?.md,lg:u.sizes?.lg,xl:u.sizes?.xl},defaultProps:{size:"md",variant:"outline"}}),Ar=r=>{const{t:a}=ur("colorPicker"),{props:{id:s,ref:p,name:h,allowInput:t=!0,closeOnChange:f=!1,defaultValue:z,disabled:S,fallbackValue:D="#FFFFFF",format:He,formatInput:C,openOnChange:H=!0,openOnFocus:y=!0,pattern:P,placeholder:q,readOnly:b,required:W,value:L,onChange:qe,onInputChange:_,...$},ariaProps:We,dataProps:m,eventProps:Le}=vr(r),{interactive:d,open:K,getContentProps:N,getTriggerProps:U,onClose:R,onOpen:v}=xr({disabled:S,openOnEnter:!t,openOnSpace:!t,readOnly:b,...We,...m,...Le,...$}),x=He??pr(L??z??D),Q=x.endsWith("a"),G=c.useRef(null),J=c.useRef(null),X=c.useRef(null),F=c.useRef(null),[j,i]=gr({defaultValue:z,value:L,onChange:qe}),{supported:Y,onOpen:Z}=kr(),B=c.useCallback(()=>{!d||!t||F.current?.focus()},[t,d]),E=c.useCallback(n=>{y&&(n.preventDefault(),n.stopPropagation())},[y]),ee=c.useCallback(n=>{n.preventDefault(),n.stopPropagation(),y&&v()},[v,y]),re=c.useCallback(n=>{$e(G.current,n.relatedTarget)||$e(X.current,n.relatedTarget)?n.preventDefault():i(l=>{if(!l)return l;let O=dr(l)(x);return O?(C&&(O=C(O)),P&&(O=O.replace(P,"")),O):l})},[x,C,P,i]),oe=c.useCallback(n=>{if(!t)return;_?.(n),Ke(f,n)?R():Ke(H,n)&&v();let l=n.target.value;C&&(l=C(l)),P&&(l=l.replace(P,"")),i(l)},[t,f,C,R,_,v,H,P,i]),ae=c.useCallback(async()=>{if(!d)return;const n=await Z();n?.sRGBHex&&i(n.sRGBHex)},[d,Z,i]),er=c.useCallback(({ref:n,...l}={})=>({ref:ne(n,G),...m,...l}),[m]),rr=c.useCallback(({ref:n,...l}={})=>U({ref:ne(n,J),"aria-haspopup":"dialog",tabIndex:t?-1:0,...l,onClick:g(l.onClick,B)}),[t,U,B]),or=c.useCallback((n={})=>({id:s,ref:ne(n.ref,p,F),name:h,style:{...t?{}:{pointerEvents:"none"},...n.style},autoComplete:"off",disabled:S,placeholder:q,readOnly:b,required:W,tabIndex:t?0:-1,value:j,...m,...n,onBlur:g(n.onBlur,re),onChange:g(n.onChange,oe),onFocus:g(n.onFocus,ee),onMouseDown:g(n.onMouseDown,E)}),[t,m,S,s,h,re,ee,oe,E,q,b,p,W,j]),ar=c.useCallback((n={})=>({...m,"aria-disabled":mr(!d),"aria-label":a("Pick a color"),hidden:!Y,role:"button",tabIndex:d?0:-1,...n,onClick:g(n.onClick,ae),onKeyDown:g(n.onKeyDown,l=>hr(l,{Enter:ae,Space:ae}))}),[m,d,ae,Y,a]),nr=c.useCallback(({ref:n,...l}={})=>N({ref:ne(n,X),role:"dialog",...l}),[N]),sr=c.useCallback((n={})=>({disabled:S,fallbackValue:D,format:x,readOnly:b,value:j,...n,onChange:g(n.onChange,i)}),[S,D,x,b,j,i]);return{alpha:Q,format:x,interactive:d,open:K,setValue:i,value:j,getContentProps:nr,getEyeDropperProps:ar,getFieldProps:rr,getInputProps:or,getRootProps:er,getSelectorProps:sr,onClose:R,onOpen:v}},{ComponentContext:Tr,useComponentContext:_e,withContext:M,withProvider:Vr}=fr("color-picker",Er),o=Vr(r=>{const[a,s]=yr(r),[p,{className:h,css:t,colorScheme:f,size:z,colorSwatches:S,colorSwatchGroupColumns:D,colorSwatchGroupLabel:He,errorBorderColor:C,focusBorderColor:H,withColorSwatch:y=!0,withEyeDropper:P=!0,alphaSliderProps:q,colorSwatchGroupLabelProps:b,colorSwatchGroupProps:W,colorSwatchItemProps:L,colorSwatchProps:qe,contentProps:_,elementProps:$,endElementProps:We,eyeDropperProps:m,fieldProps:Le,hueSliderProps:d,inputProps:K,rootProps:N,saturationSliderProps:U,selectorProps:R,startElementProps:v,...x}]=Fr(s,["disabled","open","defaultOpen","onOpen","onClose","openOnClick"]),{interactive:Q,open:G,value:J,getContentProps:X,getEyeDropperProps:F,getFieldProps:j,getInputProps:i,getRootProps:Y,getSelectorProps:Z,onClose:B,onOpen:E}=Ar(x),ee=c.useMemo(()=>({animationScheme:"block-start",autoFocus:!1,matchWidth:!0,placement:"end-start",...p,disabled:!Q,open:G,onClose:B,onOpen:E}),[Q,B,E,G,p]),re=Rr({errorBorderColor:C,focusBorderColor:H}),oe=c.useMemo(()=>({value:J,getEyeDropperProps:F,getInputProps:i,inputProps:K}),[F,i,K,J]);return e.jsx(Tr,{value:oe,children:e.jsxs(Or,{...ee,children:[e.jsxs(I,{className:h,css:t,colorScheme:f,...Y({...a,...N}),children:[y?e.jsx(Ue,{...$,...v,children:e.jsx(Hr,{...qe})}):null,e.jsx(Ir,{children:e.jsx(Mr,{...j({...re,...Le})})}),P?e.jsx(Ue,{clickable:!0,...$,...We,children:e.jsx(qr,{...F(m)})}):null]}),e.jsx(Wr,{...Ne(X(Ne(_))),children:e.jsx(Sr,{size:z,...Z({colorSwatches:S,colorSwatchGroupColumns:D,colorSwatchGroupLabel:He,alphaSliderProps:q,colorSwatchGroupLabelProps:b,colorSwatchGroupProps:W,colorSwatchItemProps:L,hueSliderProps:d,saturationSliderProps:U,...R})})})]})})},"root",{transferProps:["size"]})(r=>({...jr(),...r})),Mr=M("div","field")({"data-group-propagate":""},r=>{const{getInputProps:a,inputProps:s}=_e();return{children:e.jsx(zr,{...a(s)}),...r}}),zr=M("input","input")(),Hr=M(wr,"colorSwatch")(void 0,r=>{const{value:a}=_e();return{variant:"circle",color:a,...r}}),qr=M("div","eyeDropper")(void 0,({children:r,icon:a,...s})=>{const{getEyeDropperProps:p}=_e();return p({children:a||r||e.jsx(br,{}),...s})}),Wr=M(Dr,"content")(),Eo={component:o,title:"Components / ColorPicker"},se=()=>e.jsx(o,{placeholder:"#4387f4"}),te=()=>e.jsx(ze,{variant:"stack",columns:["outline","filled","flushed"],rows:Cr,children:(r,a,s)=>e.jsx(o,{colorScheme:a,variant:r,placeholder:k(r)},s)}),le=()=>e.jsx(ze,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,a,s)=>e.jsx(o,{size:r,variant:a,placeholder:`Size (${r})`},s)}),ce=()=>e.jsx(o,{defaultValue:"#4387f4",placeholder:"#4387f4"}),ie=()=>e.jsx(o,{defaultValue:"#775999A0",placeholder:"#775999A0"}),ue=()=>e.jsx(ze,{variant:"stack",rows:["hex","hexa","rgb","rgba","hsl","hsla"],children:(r,a,s)=>e.jsx(o,{format:a,placeholder:`Format (${a})`},s)}),pe=()=>e.jsx(o,{pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387f4"}),de=()=>e.jsx(o,{formatInput:r=>r.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387F4"}),me=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),he=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),fe=()=>e.jsx(o,{offset:[16,16],placeholder:"#4387f4"}),Ce=()=>e.jsx(o,{gutter:16,placeholder:"#4387f4"}),Pe=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4"}),xe=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4",placement:"center-end",rootProps:{w:"xs"}}),ge=()=>e.jsx(Ze,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,placeholder:"#4387f4"})}),ke=()=>e.jsx(o,{openOnChange:r=>r.target.value.length>1,openOnFocus:!1,placeholder:"#4387f4"}),Se=()=>e.jsx(o,{closeOnChange:r=>!r.target.value.length,openOnFocus:!1,placeholder:"#4387f4"}),be=()=>e.jsx(Ze,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,placeholder:"#4387f4"})}),ve=()=>e.jsx(o,{openOnFocus:!1,placeholder:"#4387f4"}),je=()=>e.jsx(o,{openOnClick:!1,placeholder:"#4387f4"}),we=()=>e.jsx(o,{closeOnBlur:!1,placeholder:"#4387f4"}),ye=()=>e.jsx(o,{closeOnEsc:!1,placeholder:"#4387f4"}),Fe=()=>e.jsx(o,{placeholder:"#4387f4",withEyeDropper:!1}),Oe=()=>e.jsx(o,{allowInput:!1,placeholder:"#4387f4"}),Ie=()=>e.jsx(o,{placeholder:"#4387f4",withColorSwatch:!1}),De=()=>e.jsx(ze,{variant:"stack",rows:["rounded","circle","square"],children:(r,a,s)=>e.jsx(o,{placeholder:"#4387f4",selectorProps:{shape:a}},s)}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,disabled:!0,placeholder:k(r)},a)}),e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(I,{variant:r,disabled:!0,children:[e.jsx(T,{children:e.jsx(V,{})}),e.jsx(o,{placeholder:k(r)})]},a)}),e.jsx(A,{disabled:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,placeholder:k(r),readOnly:!0},a)}),e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(I,{variant:r,readOnly:!0,children:[e.jsx(T,{children:e.jsx(V,{})}),e.jsx(o,{placeholder:k(r)})]},a)}),e.jsx(A,{label:"What is your favorite color?",readOnly:!0,children:e.jsx(o,{placeholder:"#4387f4"})})]}),Be=()=>e.jsxs(e.Fragment,{children:[e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,invalid:!0,placeholder:k(r)},a)}),e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(I,{variant:r,invalid:!0,children:[e.jsx(T,{children:e.jsx(V,{})}),e.jsx(o,{placeholder:k(r)})]},a)}),e.jsx(A,{errorMessage:"This is required.",invalid:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ee=()=>e.jsx(w,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(I,{variant:r,children:[e.jsx(T,{children:e.jsx(V,{})}),e.jsx(o,{placeholder:k(r)})]},a)}),Ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(I,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(T,{children:e.jsx(V,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),Te=()=>{const[r,a]=c.useState("#4387f4");return e.jsx(o,{value:r,onChange:a})},Ve=()=>{const{control:r,formState:{errors:a},handleSubmit:s,watch:p}=Xe(),h=t=>console.log("submit:",t);return console.log("watch:",p()),e.jsxs(Qe,{as:"form",onSubmit:s(h),children:[e.jsx(A,{errorMessage:a.colorPicker?.message,invalid:!!a.colorPicker,label:"What is your favorite color?",children:e.jsx(Ye,{name:"colorPicker",control:r,render:({field:t})=>e.jsx(o,{...t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Je,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Me=()=>{const r={colorPicker:"#4387f4"},{control:a,formState:{errors:s},handleSubmit:p,watch:h}=Xe({defaultValues:r}),t=f=>console.log("submit:",f);return console.log("watch:",h()),e.jsxs(Qe,{as:"form",onSubmit:p(t),children:[e.jsx(A,{errorMessage:s.colorPicker?.message,invalid:!!s.colorPicker,label:"What is your favorite color?",children:e.jsx(Ye,{name:"colorPicker",control:a,render:({field:f})=>e.jsx(o,{...f}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Je,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...se.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...te.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...ce.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...ie.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...ue.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...pe.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...me.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...he.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...fe.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...Ce.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...Pe.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...xe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...ge.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...ke.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...Se.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...be.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...ve.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...je.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...we.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...ye.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...Fe.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...Oe.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...Ie.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...De.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
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
}`,...Re.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ge.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
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
}`,...Be.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...Ee.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ae.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker value={value} onChange={setValue} />;
}`,...Te.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    colorPicker: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...Ve.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`() => {
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
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...Me.parameters?.docs?.source}}};const Ao=["Basic","Variant","Size","DefaultValue","Alpha","Format","Pattern","FormatInput","ColorSwatches","ColorSwatchGroupColumns","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledEyeDropper","DisallowInput","HiddenColorSwatch","Shape","Disabled","ReadOnly","Invalid","Addon","BorderColor","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Ee as Addon,ie as Alpha,Pe as AnimationScheme,se as Basic,ge as BlockScrollOnMount,Ae as BorderColor,Se as CloseOnChange,be as CloseOnScroll,he as ColorSwatchGroupColumns,me as ColorSwatches,Te as CustomControl,ce as DefaultValue,Re as Disabled,we as DisabledCloseOnBlur,ye as DisabledCloseOnEsc,Fe as DisabledEyeDropper,je as DisabledOpenOnClick,ve as DisabledOpenOnFocus,Oe as DisallowInput,ue as Format,de as FormatInput,Ce as Gutter,Ie as HiddenColorSwatch,Be as Invalid,fe as Offset,ke as OpenOnChange,pe as Pattern,xe as Placement,Ve as ReactHookForm,Me as ReactHookFormDefaultValue,Ge as ReadOnly,De as Shape,le as Size,te as Variant,Ao as __namedExportsOrder,Eo as default};
