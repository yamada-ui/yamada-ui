import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{An as n,Cn as ee,Lt as te,Nn as ne,Rt as re,Tn as ie,Vn as ae,Yt as oe,_n as r,bn as i,dn as a,dt as se,i as ce,it as le,jn as ue,lt as o,o as s,ot as de,un as fe,xn as pe}from"./props-Bz1FL_va.js";import{a as c,n as me}from"./event-C2y0STOt.js";import{i as he,r as ge}from"./i18n-provider-Cc12Ys91.js";import{t as _e}from"./jsx-runtime-BdxMnOeJ.js";import{d as l,i as u,n as ve,r as ye}from"./create-component-DtmnY_ce.js";import{n as d,t as f}from"./palette-icon-CInDyUiF.js";import{c as be,i as xe,l as Se,o as Ce,s as we,u as Te}from"./color-selector-ChPTlIKR.js";import{r as Ee,t as p}from"./use-controllable-state-tJaJeRqU.js";import{c as De,i as m,l as Oe,s as ke,u as Ae}from"./popover-eS6gsMdO.js";import{r as je,t as h}from"./button-CFBNyQlD.js";import{r as g,t as _}from"./color-swatch-CYvL_PNL.js";import{c as Me,r as Ne,s as v,t as Pe}from"./use-field-props-DklfXwrD.js";import{i as Fe,r as Ie}from"./group-DDgp5sVV.js";import{i as y,r as b}from"./input-Dl7woXLW.js";import{a as x,i as Le,n as Re,o as ze,r as Be,t as S}from"./input-group-U0aj6U1q.js";import{n as Ve,t as He}from"./use-input-border-BBhXSV-4.js";import{n as Ue,t as We}from"./native-select.style-BYgIKmYD.js";import{o as Ge,s as Ke}from"./use-combobox-YAeEpsQG.js";import{n as qe,t as Je}from"./box-C47iDJeO.js";import{n as Ye,t as C}from"./date-picker.style-CpyQs5DL.js";import{n as Xe,t as w}from"./for-BIl9Q3L3.js";import{n as Ze,t as Qe}from"./v-stack-DgxvBjIl.js";import{n as $e,t as et}from"./props-table-CLkISL0o.js";import{n as tt,r as nt,t as rt}from"./index.esm-CWrUCFh-.js";var it;function at(){return(at=e((()=>{l(),Ye(),We(),it=u({base:{...Ue.base,colorSwatch:{w:`1.5em`},content:{maxW:`sm`,p:`1`},eyeDropper:C.base?.icon,field:C.base?.field,input:C.base?.input},variants:{filled:C.variants?.filled,flushed:{...C.variants?.flushed,root:{}},outline:C.variants?.outline,plain:C.variants?.plain},sizes:{xs:C.sizes?.xs,sm:C.sizes?.sm,md:C.sizes?.md,lg:C.sizes?.lg,xl:C.sizes?.xl},defaultProps:{size:`md`,variant:`outline`}})})))()}var T,ot;function st(){return(st=e((()=>{T=t(),Ge(),p(),we(),ge(),oe(),ne(),a(),c(),pe(),le(),o(),Pe(),ot=e=>{let{t}=he(`colorPicker`),{props:{id:ne,ref:ie,name:ae,"aria-label":oe,"aria-labelledby":r,allowInput:a=!0,closeOnChange:ce=!1,defaultValue:le,disabled:o,fallbackValue:s=`#FFFFFF`,format:pe,formatInput:c,openOnChange:ge=!0,openOnClick:_e=!0,openOnFocus:l=!0,pattern:u,placeholder:ve,placement:ye=`end-start`,readOnly:d,required:f,value:xe,onChange:Se,onInputChange:Ce,...we},ariaProps:Te,dataProps:p,eventProps:De}=Ne(e),{interactive:m,open:Oe,getContentProps:ke,getTriggerProps:Ae,popoverProps:je,onClose:h,onOpen:g}=Ke({disabled:o,matchWidth:!1,openOnClick:!1,openOnEnter:!a,openOnSpace:!a,placement:ye,readOnly:d,transferFocus:!1,...Te,...p,...De,...we}),_=pe??n(xe??le??s),Me=_.endsWith(`a`),v=(0,T.useRef)(null),Pe=(0,T.useRef)(null),Fe=(0,T.useRef)(null),Ie=(0,T.useRef)(!1),[y,b]=Ee({defaultValue:le,value:xe,onChange:Se}),{supported:x,onOpen:Le}=be(),Re=(0,T.useCallback)(()=>{m&&(Ie.current=!0,a&&Fe.current?.focus(),_e&&g())},[a,m,g,_e]),ze=(0,T.useCallback)(e=>{l&&(e.preventDefault(),e.stopPropagation())},[l]),Be=(0,T.useCallback)(()=>{a||(l&&g(),Ie.current=!1)},[a,g,l]),S=(0,T.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),l&&!Ie.current&&g(),Ie.current=!1},[g,l]),Ve=(0,T.useCallback)(e=>{re(v.current,e.relatedTarget)||re(Pe.current,e.relatedTarget)?e.preventDefault():b(e=>{if(!e)return e;let t=ue(e)(_);return t?(c&&(t=c(t)),u&&(t=t.replace(u,``)),t):e})},[_,c,u,b]),He=(0,T.useCallback)(e=>{if(!a)return;Ce?.(e),ee(ce,e)?h():ee(ge,e)&&g();let t=e.target.value;c&&(t=c(t)),u&&(t=t.replace(u,``)),b(t)},[a,ce,c,h,Ce,g,ge,u,b]),Ue=(0,T.useCallback)(async()=>{if(!m)return;let e=await Le();e?.sRGBHex&&b(e.sRGBHex)},[m,Le,b]);(0,T.useEffect)(()=>{if(Oe)return me(Pe.current,a?Fe.current:v.current)},[a,Oe]);let We=(0,T.useCallback)(e=>({...p,...e}),[p]),Ge=(0,T.useCallback)(({ref:e,...t}={})=>Ae({ref:de(e,v),"aria-haspopup":`dialog`,tabIndex:a?-1:0,...t,onClick:i(t.onClick,Re),onFocus:i(t.onFocus,Be),onMouseDown:i(t.onMouseDown,ze)}),[a,Ae,Re,Be,ze]),qe=(0,T.useCallback)(({"aria-labelledby":e,...t}={})=>({id:ne,ref:de(t.ref,ie,Fe),name:ae,style:{...a?{}:{pointerEvents:`none`},...t.style},"aria-label":oe,"aria-labelledby":fe(e,r),autoComplete:`off`,disabled:o,placeholder:ve,readOnly:d,required:f,tabIndex:a?0:-1,value:y,...p,...t,onBlur:i(t.onBlur,Ve),onChange:i(t.onChange,He),onFocus:i(t.onFocus,S),onMouseDown:i(t.onMouseDown,ze)}),[a,oe,r,p,o,ne,ae,Ve,He,S,ze,ve,d,ie,f,y]),Je=(0,T.useCallback)((e={})=>({...p,"aria-disabled":te(!m),"aria-label":t(`Pick a color`),hidden:!x,role:`button`,tabIndex:m?0:-1,...e,onClick:i(e.onClick,Ue),onKeyDown:i(e.onKeyDown,e=>se(e,{Enter:Ue,Space:Ue}))}),[p,m,Ue,x,t]);return{alpha:Me,format:_,interactive:m,open:Oe,setValue:b,value:y,getContentProps:(0,T.useCallback)(({ref:e,...t}={})=>ke({ref:de(e,Pe),role:`dialog`,...t}),[ke]),getEyeDropperProps:Je,getFieldProps:Ge,getInputProps:qe,getRootProps:We,getSelectorProps:(0,T.useCallback)((e={})=>({disabled:o,fallbackValue:s,format:_,readOnly:d,value:y,...e,onChange:i(e.onChange,b)}),[o,s,_,d,y,b]),popoverProps:je,onClose:h,onOpen:g}}})))()}var ct,E,lt,ut,dt,ft,D,pt,O,mt,ht,gt,_t,vt;function yt(){return(yt=e((()=>{ct=t(),ye(),ce(),Ce(),g(),Ie(),Te(),Re(),Le(),He(),b(),Oe(),at(),st(),E=_e(),{ComponentContext:lt,PropsContext:ut,useComponentContext:dt,usePropsContext:ft,withContext:D,withProvider:pt}=ve(`color-picker`,it),O=pt(e=>{let[t,{className:n,css:ee,colorScheme:te,size:ne,animationScheme:re=`block-start`,colorSwatches:ie,colorSwatchGroupColumns:oe,colorSwatchGroupLabel:r,duration:i,errorBorderColor:a,focusBorderColor:se,withColorSwatch:ce=!0,withEyeDropper:le=!0,alphaSliderProps:ue,colorSwatchGroupLabelProps:o,colorSwatchGroupProps:de,colorSwatchItemProps:fe,colorSwatchProps:pe,contentProps:c,elementProps:me,endElementProps:he,eyeDropperProps:ge,fieldProps:_e,hueSliderProps:l,inputProps:u,rootProps:ve,saturationSliderProps:ye,selectorProps:d,startElementProps:f,...be}]=Fe(e),Se=Ae(be),{value:Ce,getContentProps:we,getEyeDropperProps:Te,getFieldProps:Ee,getInputProps:p,getRootProps:m,getSelectorProps:Oe,popoverProps:je}=ot({...be,...Se}),h=(0,ct.useMemo)(()=>({animationScheme:re,duration:i,...je}),[re,i,je]),g=Ve({errorBorderColor:a,focusBorderColor:se}),_=(0,ct.useMemo)(()=>({value:Ce,getEyeDropperProps:Te,getInputProps:p,inputProps:u}),[Te,p,u,Ce]);return(0,E.jsx)(lt,{value:_,children:(0,E.jsxs)(ke,{...h,children:[(0,E.jsxs)(S,{...s({className:n,css:ee,colorScheme:te},m(t),ve)(),children:[ce?(0,E.jsx)(Be,{...s(me,f)(),children:(0,E.jsx)(gt,{...pe})}):null,(0,E.jsx)(De,{children:(0,E.jsx)(mt,{...Ee({...g,..._e})})}),le?(0,E.jsx)(Be,{...s({clickable:!0},me,he)(),children:(0,E.jsx)(_t,{...Te(ge)})}):null]}),(0,E.jsx)(vt,{...ae(we(ae(c))),children:(0,E.jsx)(xe,{size:ne,...Oe({colorSwatches:ie,colorSwatchGroupColumns:oe,colorSwatchGroupLabel:r,alphaSliderProps:ue,colorSwatchGroupLabelProps:o,colorSwatchGroupProps:de,colorSwatchItemProps:fe,hueSliderProps:l,saturationSliderProps:ye,...d})})})]})})},`root`,{transferProps:[`size`]})(e=>{let t=y();return s(t,e)()}),mt=D(`div`,`field`)({"data-group-propagate":``},e=>{let{getInputProps:t,inputProps:n}=dt();return{children:(0,E.jsx)(ht,{...t(n)}),...e}}),ht=D(`input`,`input`)(),gt=D(_,`colorSwatch`)(void 0,e=>{let{value:t}=dt();return{variant:`circle`,color:t,...e}}),_t=D(`div`,`eyeDropper`)(void 0,({children:e,icon:t,...n})=>{let{getEyeDropperProps:ee}=dt();return ee({children:t||e||(0,E.jsx)(Se,{}),...n})}),vt=D(m,`content`)()})))()}var bt,k,xt,A,j,M,N,P,F,I,L,R,z,St,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Ct,wt,Tt,Et,Dt,$,Ot,kt,At,jt,Mt;function Nt(){return(Nt=e((()=>{bt=t(),tt(),$e(),ne(),a(),qe(),je(),Me(),Xe(),d(),Re(),ze(),Ze(),yt(),k=_e(),xt={component:O,title:`Components / ColorPicker`},A=()=>(0,k.jsx)(O,{placeholder:`#4387f4`}),j=()=>(0,k.jsx)(et,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:ie,children:(e,t,n)=>(0,k.jsx)(O,{colorScheme:t,variant:e,placeholder:r(e)},n)}),M=()=>(0,k.jsx)(et,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,k.jsx)(O,{size:e,variant:t,placeholder:`Size (${e})`},n)}),N=()=>(0,k.jsx)(O,{defaultValue:`#4387f4`,placeholder:`#4387f4`}),P=()=>(0,k.jsx)(O,{defaultValue:`#775999A0`,placeholder:`#775999A0`}),F=()=>(0,k.jsx)(et,{variant:`stack`,rows:[`hex`,`hexa`,`rgb`,`rgba`,`hsl`,`hsla`],children:(e,t,n)=>(0,k.jsx)(O,{format:t,placeholder:`Format (${t})`},n)}),I=()=>(0,k.jsx)(O,{pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387f4`}),L=()=>(0,k.jsx)(O,{formatInput:e=>e.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387F4`}),R=()=>(0,k.jsx)(O,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),z=()=>(0,k.jsx)(O,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),St=()=>(0,k.jsx)(O,{offset:[16,16],placeholder:`#4387f4`}),B=()=>(0,k.jsx)(O,{gutter:16,placeholder:`#4387f4`}),V=()=>(0,k.jsx)(O,{animationScheme:`inline-start`,placeholder:`#4387f4`}),H=()=>(0,k.jsx)(O,{animationScheme:`inline-start`,placeholder:`#4387f4`,placement:`center-end`,rootProps:{w:`xs`}}),U=()=>(0,k.jsx)(Je,{minH:`200dvh`,w:`full`,children:(0,k.jsx)(O,{blockScrollOnMount:!0,placeholder:`#4387f4`})}),W=()=>(0,k.jsx)(O,{openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`#4387f4`}),G=()=>(0,k.jsx)(O,{closeOnChange:e=>!e.target.value.length,openOnFocus:!1,placeholder:`#4387f4`}),K=()=>(0,k.jsx)(Je,{minH:`200dvh`,w:`full`,children:(0,k.jsx)(O,{closeOnScroll:!0,placeholder:`#4387f4`})}),q=()=>(0,k.jsx)(O,{openOnFocus:!1,placeholder:`#4387f4`}),J=()=>(0,k.jsx)(O,{openOnClick:!1,placeholder:`#4387f4`}),Y=()=>(0,k.jsx)(O,{closeOnBlur:!1,placeholder:`#4387f4`}),X=()=>(0,k.jsx)(O,{closeOnEsc:!1,placeholder:`#4387f4`}),Z=()=>(0,k.jsx)(O,{placeholder:`#4387f4`,withEyeDropper:!1}),Q=()=>(0,k.jsx)(O,{allowInput:!1,placeholder:`#4387f4`}),Ct=()=>(0,k.jsx)(O,{placeholder:`#4387f4`,withColorSwatch:!1}),wt=()=>(0,k.jsx)(et,{variant:`stack`,rows:[`rounded`,`circle`,`square`],children:(e,t,n)=>(0,k.jsx)(O,{placeholder:`#4387f4`,selectorProps:{shape:t}},n)}),Tt=()=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsx)(O,{variant:e,disabled:!0,placeholder:r(e)},t)}),(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsxs)(S,{variant:e,disabled:!0,children:[(0,k.jsx)(x,{children:(0,k.jsx)(f,{})}),(0,k.jsx)(O,{placeholder:r(e)})]},t)}),(0,k.jsx)(v,{disabled:!0,label:`What is your favorite color?`,children:(0,k.jsx)(O,{placeholder:`#4387f4`})})]}),Et=()=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsx)(O,{variant:e,placeholder:r(e),readOnly:!0},t)}),(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsxs)(S,{variant:e,readOnly:!0,children:[(0,k.jsx)(x,{children:(0,k.jsx)(f,{})}),(0,k.jsx)(O,{placeholder:r(e)})]},t)}),(0,k.jsx)(v,{label:`What is your favorite color?`,readOnly:!0,children:(0,k.jsx)(O,{placeholder:`#4387f4`})})]}),Dt=()=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsx)(O,{variant:e,invalid:!0,placeholder:r(e)},t)}),(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsxs)(S,{variant:e,invalid:!0,children:[(0,k.jsx)(x,{children:(0,k.jsx)(f,{})}),(0,k.jsx)(O,{placeholder:r(e)})]},t)}),(0,k.jsx)(v,{errorMessage:`This is required.`,invalid:!0,label:`What is your favorite color?`,children:(0,k.jsx)(O,{placeholder:`#4387f4`})})]}),$=()=>(0,k.jsx)(w,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,k.jsxs)(S,{variant:e,children:[(0,k.jsx)(x,{children:(0,k.jsx)(f,{})}),(0,k.jsx)(O,{placeholder:r(e)})]},t)}),Ot=()=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(O,{placeholder:`Default border color`}),(0,k.jsx)(O,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,k.jsx)(O,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,k.jsxs)(S,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,k.jsx)(x,{children:(0,k.jsx)(f,{})}),(0,k.jsx)(O,{placeholder:`Custom border color`})]})]}),kt=()=>{let[e,t]=(0,bt.useState)(`#4387f4`);return(0,k.jsx)(O,{"aria-label":`Choose a color`,value:e,onChange:t})},At=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=nt();return(0,k.jsxs)(Qe,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,k.jsx)(v,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,k.jsx)(rt,{name:`colorPicker`,control:e,render:({field:e})=>(0,k.jsx)(O,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,k.jsx)(h,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},jt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=nt({defaultValues:{colorPicker:`#4387f4`}});return(0,k.jsxs)(Qe,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,k.jsx)(v,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,k.jsx)(rt,{name:`colorPicker`,control:e,render:({field:e})=>(0,k.jsx)(O,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,k.jsx)(h,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Mt=`Basic.Variant.Size.DefaultValue.Alpha.Format.Pattern.FormatInput.ColorSwatches.ColorSwatchGroupColumns.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledEyeDropper.DisallowInput.HiddenColorSwatch.Shape.Disabled.ReadOnly.Invalid.Addon.BorderColor.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...z.parameters?.docs?.source}}},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...St.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...Q.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...Ct.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...wt.parameters?.docs?.source}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Tt.parameters?.docs?.source}}},Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`() => {
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
}`,...Et.parameters?.docs?.source}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dt.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...$.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ot.parameters?.docs?.source}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...kt.parameters?.docs?.source}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`() => {
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
}`,...At.parameters?.docs?.source}}},jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`() => {
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
}`,...jt.parameters?.docs?.source}}}})))()}Nt();export{$ as Addon,P as Alpha,V as AnimationScheme,A as Basic,U as BlockScrollOnMount,Ot as BorderColor,G as CloseOnChange,K as CloseOnScroll,z as ColorSwatchGroupColumns,R as ColorSwatches,kt as CustomControl,N as DefaultValue,Tt as Disabled,Y as DisabledCloseOnBlur,X as DisabledCloseOnEsc,Z as DisabledEyeDropper,J as DisabledOpenOnClick,q as DisabledOpenOnFocus,Q as DisallowInput,F as Format,L as FormatInput,B as Gutter,Ct as HiddenColorSwatch,Dt as Invalid,St as Offset,W as OpenOnChange,I as Pattern,H as Placement,At as ReactHookForm,jt as ReactHookFormDefaultValue,Et as ReadOnly,wt as Shape,M as Size,j as Variant,Mt as __namedExportsOrder,xt as default};