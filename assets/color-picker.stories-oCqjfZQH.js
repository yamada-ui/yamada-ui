import{n as ir,o as ur,I as pr,d as dr,G as mr,a8 as hr,r as l,M as Ue,a9 as fr,k as Qe,h,m as qe,e as Cr,a as xr,g as Pr,j as e,L as Je,C as kr,P as v,V as Ye,Q as Ze}from"./iframe-D0k82VKj.js";import{P as Te}from"./props-table-CTaVRFRo.js";import{u as er,C as rr}from"./index.esm-BWmHN2_N.js";import{d as u}from"./date-picker.style-4zXJsc-Y.js";import{n as gr}from"./native-select.style-BW9Gtkut.js";import{u as Sr}from"./index-Ccb9n6Mt.js";import{u as br}from"./index-Bb9gnTOn.js";import{u as vr,C as jr,P as wr}from"./color-selector-D_uWUXeq.js";import{u as Fr,F as M}from"./use-field-props-CqEx8ctB.js";import{f as yr}from"./event-BRefcdDT.js";import{u as Or}from"./input-Z3NWNvVg.js";import{C as Ir}from"./color-swatch-Bngu5Mmr.js";import{u as Dr}from"./group-wqTpA82u.js";import{u as Rr}from"./use-input-border-BupPeUaJ.js";import{P as Gr,a as Br,b as Er}from"./popover-D71C8iMr.js";import{I as D,a as Xe,b as z}from"./input-group-cuo2st2X.js";import{B as or}from"./box-BYUm6qHd.js";import{F}from"./for-VxQ1P6BR.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-W2jtEO_S.js";import"./grid-item-BEXtmAs-.js";import"./flex-DfSuxPUO.js";import"./heading-Z6IrjMgv.js";import"./autocomplete.style-CiU-IB-G.js";import"./menu.style-rG1wPR9u.js";import"./index-CHt3lkje.js";import"./use-disclosure-nWTEVeYt.js";import"./saturation-slider-D14j8bFf.js";import"./hue-slider.style-Cbq776er.js";import"./index--Fh08Uzx.js";import"./number-CcP_arM8.js";import"./hue-slider-DC-RJzoP.js";import"./index-BbBQJmyS.js";import"./use-breakpoint-CrBfJ-6O.js";import"./use-breakpoint-value-pZKkBl49.js";import"./use-color-mode-value-bOkTOA4p.js";import"./slider-CKswfWPV.js";import"./alpha-slider-B8Ns2n7g.js";import"./index-BwXxpkL8.js";import"./index-x-JwY4WX.js";import"./index-CqD35v1y.js";import"./slide-fade-_1ZtoSyW.js";import"./transition-BVsBw9pl.js";import"./fade-scale-BbDhQB1v.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ar=ir("palette",Tr),H=ur(pr)({as:Ar}),Vr=dr({base:{...gr.base,colorSwatch:{w:"1.5em"},content:{maxW:"sm",p:"1"},eyeDropper:u.base?.icon,field:u.base?.field,input:u.base?.input},variants:{filled:u.variants?.filled,flushed:{...u.variants?.flushed,root:{}},outline:u.variants?.outline,plain:u.variants?.plain},sizes:{xs:u.sizes?.xs,sm:u.sizes?.sm,md:u.sizes?.md,lg:u.sizes?.lg,xl:u.sizes?.xl},defaultProps:{size:"md",variant:"outline"}}),Mr=r=>{const{t:a}=mr("colorPicker"),{props:{id:t,ref:m,name:x,allowInput:s=!0,closeOnChange:f=!1,defaultValue:W,disabled:j,fallbackValue:R="#FFFFFF",format:L,formatInput:P,openOnChange:_=!0,openOnClick:$=!0,openOnFocus:k=!0,pattern:g,placeholder:K,readOnly:w,required:N,value:U,onChange:Ae,onInputChange:G,...Ve},ariaProps:Me,dataProps:C,eventProps:ze}=Fr(r),{interactive:p,open:B,getContentProps:Q,getTriggerProps:J,popoverProps:He,onClose:E,onOpen:i}=Sr({disabled:j,openOnClick:!1,openOnEnter:!s,openOnSpace:!s,placement:"end-start",readOnly:w,transferFocus:!1,...Me,...C,...ze,...Ve}),S=L??hr(U??W??R),T=S.endsWith("a"),A=l.useRef(null),y=l.useRef(null),V=l.useRef(null),O=l.useRef(!1),[b,d]=br({defaultValue:W,value:U,onChange:Ae}),{supported:X,onOpen:Y}=vr(),Le=l.useCallback(()=>{p&&(O.current=!0,s&&V.current?.focus(),$&&i())},[s,p,i,$]),Z=l.useCallback(n=>{k&&(n.preventDefault(),n.stopPropagation())},[k]),_e=l.useCallback(()=>{s||(k&&i(),O.current=!1)},[s,i,k]),$e=l.useCallback(n=>{n.preventDefault(),n.stopPropagation(),k&&!O.current&&i(),O.current=!1},[i,k]),Ke=l.useCallback(n=>{Ue(A.current,n.relatedTarget)||Ue(y.current,n.relatedTarget)?n.preventDefault():d(c=>{if(!c)return c;let I=fr(c)(S);return I?(P&&(I=P(I)),g&&(I=I.replace(g,"")),I):c})},[S,P,g,d]),Ne=l.useCallback(n=>{if(!s)return;G?.(n),Qe(f,n)?E():Qe(_,n)&&i();let c=n.target.value;P&&(c=P(c)),g&&(c=c.replace(g,"")),d(c)},[s,f,P,E,G,i,_,g,d]),ee=l.useCallback(async()=>{if(!p)return;const n=await Y();n?.sRGBHex&&d(n.sRGBHex)},[p,Y,d]);l.useEffect(()=>{if(B)return yr(y.current,s?V.current:A.current)},[s,B]);const ar=l.useCallback(n=>({...C,...n}),[C]),nr=l.useCallback(({ref:n,...c}={})=>J({ref:qe(n,A),"aria-haspopup":"dialog",tabIndex:s?-1:0,...c,onClick:h(c.onClick,Le),onFocus:h(c.onFocus,_e),onMouseDown:h(c.onMouseDown,Z)}),[s,J,Le,_e,Z]),sr=l.useCallback((n={})=>({id:t,ref:qe(n.ref,m,V),name:x,style:{...s?{}:{pointerEvents:"none"},...n.style},autoComplete:"off",disabled:j,placeholder:K,readOnly:w,required:N,tabIndex:s?0:-1,value:b,...C,...n,onBlur:h(n.onBlur,Ke),onChange:h(n.onChange,Ne),onFocus:h(n.onFocus,$e),onMouseDown:h(n.onMouseDown,Z)}),[s,C,j,t,x,Ke,Ne,$e,Z,K,w,m,N,b]),tr=l.useCallback((n={})=>({...C,"aria-disabled":Cr(!p),"aria-label":a("Pick a color"),hidden:!X,role:"button",tabIndex:p?0:-1,...n,onClick:h(n.onClick,ee),onKeyDown:h(n.onKeyDown,c=>xr(c,{Enter:ee,Space:ee}))}),[C,p,ee,X,a]),lr=l.useCallback(({ref:n,...c}={})=>Q({ref:qe(n,y),role:"dialog",...c}),[Q]),cr=l.useCallback((n={})=>({disabled:j,fallbackValue:R,format:S,readOnly:w,value:b,...n,onChange:h(n.onChange,d)}),[j,R,S,w,b,d]);return{alpha:T,format:S,interactive:p,open:B,setValue:d,value:b,getContentProps:lr,getEyeDropperProps:tr,getFieldProps:nr,getInputProps:sr,getRootProps:ar,getSelectorProps:cr,popoverProps:He,onClose:E,onOpen:i}},{ComponentContext:zr,useComponentContext:We,withContext:q,withProvider:Hr}=Pr("color-picker",Vr),o=Hr(r=>{const[a,{className:t,css:m,colorScheme:x,size:s,animationScheme:f="block-start",colorSwatches:W,colorSwatchGroupColumns:j,colorSwatchGroupLabel:R,duration:L,errorBorderColor:P,focusBorderColor:_,withColorSwatch:$=!0,withEyeDropper:k=!0,alphaSliderProps:g,colorSwatchGroupLabelProps:K,colorSwatchGroupProps:w,colorSwatchItemProps:N,colorSwatchProps:U,contentProps:Ae,elementProps:G,endElementProps:Ve,eyeDropperProps:Me,fieldProps:C,hueSliderProps:ze,inputProps:p,rootProps:B,saturationSliderProps:Q,selectorProps:J,startElementProps:He,...E}]=Dr(r),{value:i,getContentProps:S,getEyeDropperProps:T,getFieldProps:A,getInputProps:y,getRootProps:V,getSelectorProps:O,popoverProps:b}=Mr(E),d=l.useMemo(()=>({animationScheme:f,duration:L,...b}),[f,L,b]),X=Rr({errorBorderColor:P,focusBorderColor:_}),Y=l.useMemo(()=>({value:i,getEyeDropperProps:T,getInputProps:y,inputProps:p}),[T,y,p,i]);return e.jsx(zr,{value:Y,children:e.jsxs(Gr,{...d,children:[e.jsxs(D,{className:t,css:m,colorScheme:x,...V({...a,...B}),children:[$?e.jsx(Xe,{...G,...He,children:e.jsx(Lr,{...U})}):null,e.jsx(Br,{children:e.jsx(qr,{...A({...X,...C})})}),k?e.jsx(Xe,{clickable:!0,...G,...Ve,children:e.jsx(_r,{...T(Me)})}):null]}),e.jsx($r,{...Je(S(Je(Ae))),children:e.jsx(jr,{size:s,...O({colorSwatches:W,colorSwatchGroupColumns:j,colorSwatchGroupLabel:R,alphaSliderProps:g,colorSwatchGroupLabelProps:K,colorSwatchGroupProps:w,colorSwatchItemProps:N,hueSliderProps:ze,saturationSliderProps:Q,...J})})})]})})},"root",{transferProps:["size"]})(r=>({...Or(),...r})),qr=q("div","field")({"data-group-propagate":""},r=>{const{getInputProps:a,inputProps:t}=We();return{children:e.jsx(Wr,{...a(t)}),...r}}),Wr=q("input","input")(),Lr=q(Ir,"colorSwatch")(void 0,r=>{const{value:a}=We();return{variant:"circle",color:a,...r}}),_r=q("div","eyeDropper")(void 0,({children:r,icon:a,...t})=>{const{getEyeDropperProps:m}=We();return m({children:a||r||e.jsx(wr,{}),...t})}),$r=q(Er,"content")(),Vo={component:o,title:"Components / ColorPicker"},re=()=>e.jsx(o,{placeholder:"#4387f4"}),oe=()=>e.jsx(Te,{variant:"stack",columns:["outline","filled","flushed"],rows:kr,children:(r,a,t)=>e.jsx(o,{colorScheme:a,variant:r,placeholder:v(r)},t)}),ae=()=>e.jsx(Te,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,a,t)=>e.jsx(o,{size:r,variant:a,placeholder:`Size (${r})`},t)}),ne=()=>e.jsx(o,{defaultValue:"#4387f4",placeholder:"#4387f4"}),se=()=>e.jsx(o,{defaultValue:"#775999A0",placeholder:"#775999A0"}),te=()=>e.jsx(Te,{variant:"stack",rows:["hex","hexa","rgb","rgba","hsl","hsla"],children:(r,a,t)=>e.jsx(o,{format:a,placeholder:`Format (${a})`},t)}),le=()=>e.jsx(o,{pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387f4"}),ce=()=>e.jsx(o,{formatInput:r=>r.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387F4"}),ie=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),ue=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),pe=()=>e.jsx(o,{offset:[16,16],placeholder:"#4387f4"}),de=()=>e.jsx(o,{gutter:16,placeholder:"#4387f4"}),me=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4"}),he=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4",placement:"center-end",rootProps:{w:"xs"}}),fe=()=>e.jsx(or,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,placeholder:"#4387f4"})}),Ce=()=>e.jsx(o,{openOnChange:r=>r.target.value.length>1,openOnFocus:!1,placeholder:"#4387f4"}),xe=()=>e.jsx(o,{closeOnChange:r=>!r.target.value.length,openOnFocus:!1,placeholder:"#4387f4"}),Pe=()=>e.jsx(or,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,placeholder:"#4387f4"})}),ke=()=>e.jsx(o,{openOnFocus:!1,placeholder:"#4387f4"}),ge=()=>e.jsx(o,{openOnClick:!1,placeholder:"#4387f4"}),Se=()=>e.jsx(o,{closeOnBlur:!1,placeholder:"#4387f4"}),be=()=>e.jsx(o,{closeOnEsc:!1,placeholder:"#4387f4"}),ve=()=>e.jsx(o,{placeholder:"#4387f4",withEyeDropper:!1}),je=()=>e.jsx(o,{allowInput:!1,placeholder:"#4387f4"}),we=()=>e.jsx(o,{placeholder:"#4387f4",withColorSwatch:!1}),Fe=()=>e.jsx(Te,{variant:"stack",rows:["rounded","circle","square"],children:(r,a,t)=>e.jsx(o,{placeholder:"#4387f4",selectorProps:{shape:a}},t)}),ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,disabled:!0,placeholder:v(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,disabled:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{disabled:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,placeholder:v(r),readOnly:!0},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,readOnly:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{label:"What is your favorite color?",readOnly:!0,children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,invalid:!0,placeholder:v(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,invalid:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),e.jsx(M,{errorMessage:"This is required.",invalid:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),De=()=>e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(D,{variant:r,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:v(r)})]},a)}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(D,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(z,{children:e.jsx(H,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),Ge=()=>{const[r,a]=l.useState("#4387f4");return e.jsx(o,{value:r,onChange:a})},Be=()=>{const{control:r,formState:{errors:a},handleSubmit:t,watch:m}=er(),x=s=>console.log("submit:",s);return console.log("watch:",m()),e.jsxs(Ye,{as:"form",onSubmit:t(x),children:[e.jsx(M,{errorMessage:a.colorPicker?.message,invalid:!!a.colorPicker,label:"What is your favorite color?",children:e.jsx(rr,{name:"colorPicker",control:r,render:({field:s})=>e.jsx(o,{...s}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{const r={colorPicker:"#4387f4"},{control:a,formState:{errors:t},handleSubmit:m,watch:x}=er({defaultValues:r}),s=f=>console.log("submit:",f);return console.log("watch:",x()),e.jsxs(Ye,{as:"form",onSubmit:m(s),children:[e.jsx(M,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:"What is your favorite color?",children:e.jsx(rr,{name:"colorPicker",control:a,render:({field:f})=>e.jsx(o,{...f}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
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
}`,...je.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...we.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...Fe.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
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
}`,...ye.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
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
  return <ColorPicker value={value} onChange={setValue} />;
}`,...Ge.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ee.parameters?.docs?.source}}};const Mo=["Basic","Variant","Size","DefaultValue","Alpha","Format","Pattern","FormatInput","ColorSwatches","ColorSwatchGroupColumns","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledEyeDropper","DisallowInput","HiddenColorSwatch","Shape","Disabled","ReadOnly","Invalid","Addon","BorderColor","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{De as Addon,se as Alpha,me as AnimationScheme,re as Basic,fe as BlockScrollOnMount,Re as BorderColor,xe as CloseOnChange,Pe as CloseOnScroll,ue as ColorSwatchGroupColumns,ie as ColorSwatches,Ge as CustomControl,ne as DefaultValue,ye as Disabled,Se as DisabledCloseOnBlur,be as DisabledCloseOnEsc,ve as DisabledEyeDropper,ge as DisabledOpenOnClick,ke as DisabledOpenOnFocus,je as DisallowInput,te as Format,ce as FormatInput,de as Gutter,we as HiddenColorSwatch,Ie as Invalid,pe as Offset,Ce as OpenOnChange,le as Pattern,he as Placement,Be as ReactHookForm,Ee as ReactHookFormDefaultValue,Oe as ReadOnly,Fe as Shape,ae as Size,oe as Variant,Mo as __namedExportsOrder,Vo as default};
