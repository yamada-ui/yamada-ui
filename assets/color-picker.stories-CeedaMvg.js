import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Cn as n,Dn as r,En as i,In as ee,Ln as te,Ut as ne,Wt as re,_n as ie,ft as ae,i as oe,jn as a,kn as se,lt as ce,mt as le,o as ue,qn as de,st as fe,tn as o,zn as s}from"./props-CZvUP1-f.js";import{a as pe,n as me}from"./event-DvFmrO0v.js";import{i as he,r as c}from"./i18n-provider-CZGUXh5Y.js";import{t as ge}from"./jsx-runtime-BdxMnOeJ.js";import{d as _e,i as l,n as u,r as ve}from"./create-component-DGpn5MdW.js";import{n as ye,t as d}from"./palette-icon-g9xzrt4R.js";import{c as be,i as xe,l as Se,o as Ce,s as we,u as Te}from"./color-selector-B1KVLl0K.js";import{r as Ee,t as De}from"./use-controllable-state-B1TaLkqv.js";import{c as f,i as Oe,l as p,s as ke,u as Ae}from"./popover-DRIji3DG.js";import{r as je,t as Me}from"./button-BxDYtJtQ.js";import{r as Ne,t as m}from"./color-swatch-CwN_ReOs.js";import{c as h,r as Pe,s as g,t as Fe}from"./use-field-props-jGxUFvr_.js";import{i as Ie,r as Le}from"./group-ZFc-mD8s.js";import{i as Re,r as _}from"./input-CMpCF2qU.js";import{a as v,i as ze,n as Be,o as Ve,r as y,t as b}from"./input-group-Cs7hEC8o.js";import{n as He,t as Ue}from"./use-input-border-BEvlTURY.js";import{n as We,t as Ge}from"./native-select.style-BybRxjpW.js";import{o as Ke,s as qe}from"./use-combobox-DpYD31OY.js";import{n as Je,t as Ye}from"./box-C85ajMHC.js";import{n as Xe,t as x}from"./date-picker.style-BnOGfcMm.js";import{n as Ze,t as S}from"./for-CbSj9DmS.js";import{n as Qe,t as $e}from"./v-stack-Du6arc5F.js";import{n as et,t as tt}from"./props-table-DAMF-mOp.js";import{n as nt,r as rt,t as it}from"./index.esm-BFTTYzQs.js";var at;function ot(){return(ot=e((()=>{_e(),Xe(),Ge(),at=l({base:{...We.base,colorSwatch:{w:`1.5em`},content:{p:`1`,w:`sm`},eyeDropper:x.base?.icon,field:x.base?.field,input:x.base?.input},variants:{filled:x.variants?.filled,flushed:{...x.variants?.flushed,root:{}},outline:x.variants?.outline,plain:x.variants?.plain},sizes:{xs:x.sizes?.xs,sm:x.sizes?.sm,md:x.sizes?.md,lg:x.sizes?.lg,xl:x.sizes?.xl},defaultProps:{size:`md`,variant:`outline`}})})))()}var C,st;function ct(){return(ct=e((()=>{C=t(),oe(),Ke(),De(),we(),c(),o(),s(),pe(),r(),fe(),ae(),Fe(),st=e=>{let{t}=he(`colorPicker`),{props:{id:n,ref:r,name:ie,"aria-label":ae,"aria-labelledby":oe,allowInput:a=!0,closeOnChange:de=!1,defaultValue:fe,disabled:o,fallbackValue:s=`#FFFFFF`,format:pe,formatInput:c,openOnChange:ge=!0,openOnClick:_e=!0,openOnFocus:l=!0,pattern:u,placeholder:ve,placement:ye=`end-start`,readOnly:d,required:xe,value:Se,onChange:Ce,onInputChange:we,...Te},ariaProps:De,dataProps:f,eventProps:Oe}=Pe(e),{interactive:p,open:ke,getContentProps:Ae,getTriggerProps:je,popoverProps:Me,onClose:Ne,onOpen:m}=qe({disabled:o,matchWidth:!1,openOnClick:!1,openOnEnter:!a,openOnSpace:!a,placement:ye,readOnly:d,transferFocus:!1,...De,...f,...Oe,...Te}),h=pe??ee(Se??fe??s),g=h.endsWith(`a`),Fe=(0,C.useRef)(null),Ie=(0,C.useRef)(null),Le=(0,C.useRef)(null),Re=(0,C.useRef)(!1),[_,v]=Ee({defaultValue:fe,value:Se,onChange:Ce}),{supported:ze,onOpen:Be}=be(),Ve=(0,C.useCallback)(()=>{p&&(Re.current=!0,a&&Le.current?.focus(),_e&&m())},[a,p,m,_e]),y=(0,C.useCallback)(e=>{l&&(e.preventDefault(),e.stopPropagation())},[l]),b=(0,C.useCallback)(()=>{a||(l&&m(),Re.current=!1)},[a,m,l]),He=(0,C.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),l&&!Re.current&&m(),Re.current=!1},[m,l]),Ue=(0,C.useCallback)(e=>{re(Fe.current,e.relatedTarget)||re(Ie.current,e.relatedTarget)?e.preventDefault():v(e=>{if(!e)return e;let t=te(e)(h);return t?(c&&(t=c(t)),u&&(t=t.replace(u,``)),t):e})},[h,c,u,v]),We=(0,C.useCallback)(e=>{if(!a)return;we?.(e),se(de,e)?Ne():se(ge,e)&&m();let t=e.target.value;c&&(t=c(t)),u&&(t=t.replace(u,``)),v(t)},[a,de,c,Ne,we,m,ge,u,v]),Ge=(0,C.useCallback)(async()=>{if(!p)return;let e=await Be();e?.sRGBHex&&v(e.sRGBHex)},[p,Be,v]);(0,C.useEffect)(()=>{if(ke)return me(Ie.current,a?Le.current:Fe.current)},[a,ke]);let Ke=(0,C.useCallback)(e=>({...f,...e}),[f]),Je=(0,C.useCallback)(({ref:e,...t}={})=>je({ref:ce(e,Fe),"aria-haspopup":`dialog`,tabIndex:a?-1:0,...t,onClick:i(t.onClick,Ve),onFocus:i(t.onFocus,b),onMouseDown:i(t.onMouseDown,y)}),[a,je,Ve,b,y]),Ye=(0,C.useCallback)((e={})=>ue({id:n,ref:ce(r,Le),name:ie,style:a?{}:{pointerEvents:`none`},"aria-label":ae,"aria-labelledby":oe,autoComplete:`off`,disabled:o,placeholder:ve,readOnly:d,required:xe,tabIndex:a?0:-1,value:_,...f},e,{onBlur:Ue,onChange:We,onFocus:He,onMouseDown:y})(),[a,ae,oe,f,o,n,ie,Ue,We,He,y,ve,d,r,xe,_]),Xe=(0,C.useCallback)((e={})=>({...f,"aria-disabled":ne(!p),"aria-label":t(`Pick a color`),hidden:!ze,role:`button`,tabIndex:p?0:-1,...e,onClick:i(e.onClick,Ge),onKeyDown:i(e.onKeyDown,e=>le(e,{Enter:Ge,Space:Ge}))}),[f,p,Ge,ze,t]);return{alpha:g,format:h,interactive:p,open:ke,setValue:v,value:_,getContentProps:(0,C.useCallback)(({ref:e,...t}={})=>Ae({ref:ce(e,Ie),role:`dialog`,...t}),[Ae]),getEyeDropperProps:Xe,getFieldProps:Je,getInputProps:Ye,getRootProps:Ke,getSelectorProps:(0,C.useCallback)((e={})=>({disabled:o,fallbackValue:s,format:h,readOnly:d,value:_,...e,onChange:i(e.onChange,v)}),[o,s,h,d,_,v]),popoverProps:Me,onClose:Ne,onOpen:m}}})))()}var lt,w,ut,dt,ft,pt,T,mt,E,ht,gt,_t,vt,yt;function bt(){return(bt=e((()=>{lt=t(),ve(),oe(),Ce(),Ne(),Le(),Te(),Be(),ze(),Ue(),_(),p(),ot(),ct(),w=ge(),{ComponentContext:ut,PropsContext:dt,useComponentContext:ft,usePropsContext:pt,withContext:T,withProvider:mt}=u(`color-picker`,at),E=mt(e=>{let[t,{className:n,css:r,colorScheme:i,size:ee,animationScheme:te=`block-start`,colorSwatches:ne,colorSwatchGroupColumns:re,colorSwatchGroupLabel:ie,duration:ae,errorBorderColor:oe,focusBorderColor:a,withColorSwatch:se=!0,withEyeDropper:ce=!0,alphaSliderProps:le,colorSwatchGroupLabelProps:fe,colorSwatchGroupProps:o,colorSwatchItemProps:s,colorSwatchProps:pe,contentProps:me,elementProps:he,endElementProps:c,eyeDropperProps:ge,fieldProps:_e,hueSliderProps:l,inputProps:u,rootProps:ve,saturationSliderProps:ye,selectorProps:d,startElementProps:be,...Se}]=Ie(e),Ce=Ae(Se),{value:we,getContentProps:Te,getEyeDropperProps:Ee,getFieldProps:De,getInputProps:Oe,getRootProps:p,getSelectorProps:je,popoverProps:Me}=st({...Se,...Ce}),Ne=(0,lt.useMemo)(()=>({animationScheme:te,duration:ae,...Me}),[te,ae,Me]),m=He({errorBorderColor:oe,focusBorderColor:a}),h=(0,lt.useMemo)(()=>({value:we,getEyeDropperProps:Ee,getInputProps:Oe,inputProps:u}),[Ee,Oe,u,we]);return(0,w.jsx)(ut,{value:h,children:(0,w.jsxs)(ke,{...Ne,children:[(0,w.jsxs)(b,{...ue({className:n,css:r,colorScheme:i},p(t),ve)(),children:[se?(0,w.jsx)(y,{...ue(he,be)(),children:(0,w.jsx)(_t,{...pe})}):null,(0,w.jsx)(f,{children:(0,w.jsx)(ht,{...De({...m,..._e})})}),ce?(0,w.jsx)(y,{...ue({clickable:!0},he,c)(),children:(0,w.jsx)(vt,{...Ee(ge)})}):null]}),(0,w.jsx)(yt,{...de(Te(de(me))),children:(0,w.jsx)(xe,{size:ee,...je({colorSwatches:ne,colorSwatchGroupColumns:re,colorSwatchGroupLabel:ie,alphaSliderProps:le,colorSwatchGroupLabelProps:fe,colorSwatchGroupProps:o,colorSwatchItemProps:s,hueSliderProps:l,saturationSliderProps:ye,...d})})})]})})},`root`,{transferProps:[`size`]})(e=>{let t=Re();return ue(t,e)()}),ht=T(`div`,`field`)({"data-group-propagate":``},e=>{let{getInputProps:t,inputProps:n}=ft();return{children:(0,w.jsx)(gt,{...t(n)}),...e}}),gt=T(`input`,`input`)(),_t=T(m,`colorSwatch`)(void 0,e=>{let{value:t}=ft();return{variant:`circle`,color:t,...e}}),vt=T(`div`,`eyeDropper`)(void 0,({children:e,icon:t,...n})=>{let{getEyeDropperProps:r}=ft();return r({children:t||e||(0,w.jsx)(Se,{}),...n})}),yt=T(Oe,`content`)()})))()}var xt,D,St,O,k,A,j,M,N,P,F,I,Ct,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,wt,Tt,Et,$,Dt,Ot,kt,At,jt;function Mt(){return(Mt=e((()=>{xt=t(),nt(),et(),s(),ie(),Je(),je(),h(),Ze(),ye(),Be(),Ve(),Qe(),bt(),D=ge(),St={component:E,title:`Components / ColorPicker`},O=()=>(0,D.jsx)(E,{placeholder:`#4387f4`}),k=()=>(0,D.jsx)(tt,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:a,children:(e,t,r)=>(0,D.jsx)(E,{colorScheme:t,variant:e,placeholder:n(e)},r)}),A=()=>(0,D.jsx)(tt,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,D.jsx)(E,{size:e,variant:t,placeholder:`Size (${e})`},n)}),j=()=>(0,D.jsx)(E,{defaultValue:`#4387f4`,placeholder:`#4387f4`}),M=()=>(0,D.jsx)(E,{defaultValue:`#775999A0`,placeholder:`#775999A0`}),N=()=>(0,D.jsx)(tt,{variant:`stack`,rows:[`hex`,`hexa`,`rgb`,`rgba`,`hsl`,`hsla`],children:(e,t,n)=>(0,D.jsx)(E,{format:t,placeholder:`Format (${t})`},n)}),P=()=>(0,D.jsx)(E,{pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387f4`}),F=()=>(0,D.jsx)(E,{formatInput:e=>e.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387F4`}),I=()=>(0,D.jsx)(E,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),Ct=()=>(0,D.jsx)(E,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),L=()=>(0,D.jsx)(E,{offset:[16,16],placeholder:`#4387f4`}),R=()=>(0,D.jsx)(E,{gutter:16,placeholder:`#4387f4`}),z=()=>(0,D.jsx)(E,{animationScheme:`inline-start`,placeholder:`#4387f4`}),B=()=>(0,D.jsx)(E,{animationScheme:`inline-start`,placeholder:`#4387f4`,placement:`center-end`,rootProps:{w:`xs`}}),V=()=>(0,D.jsx)(Ye,{minH:`200dvh`,w:`full`,children:(0,D.jsx)(E,{blockScrollOnMount:!0,placeholder:`#4387f4`})}),H=()=>(0,D.jsx)(E,{openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`#4387f4`}),U=()=>(0,D.jsx)(E,{closeOnChange:e=>!e.target.value.length,openOnFocus:!1,placeholder:`#4387f4`}),W=()=>(0,D.jsx)(Ye,{minH:`200dvh`,w:`full`,children:(0,D.jsx)(E,{closeOnScroll:!0,placeholder:`#4387f4`})}),G=()=>(0,D.jsx)(E,{openOnFocus:!1,placeholder:`#4387f4`}),K=()=>(0,D.jsx)(E,{openOnClick:!1,placeholder:`#4387f4`}),q=()=>(0,D.jsx)(E,{closeOnBlur:!1,placeholder:`#4387f4`}),J=()=>(0,D.jsx)(E,{closeOnEsc:!1,placeholder:`#4387f4`}),Y=()=>(0,D.jsx)(E,{placeholder:`#4387f4`,withEyeDropper:!1}),X=()=>(0,D.jsx)(E,{allowInput:!1,placeholder:`#4387f4`}),Z=()=>(0,D.jsx)(E,{placeholder:`#4387f4`,withColorSwatch:!1}),Q=()=>(0,D.jsx)(tt,{variant:`stack`,rows:[`rounded`,`circle`,`square`],children:(e,t,n)=>(0,D.jsx)(E,{placeholder:`#4387f4`,selectorProps:{shape:t}},n)}),wt=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsx)(E,{variant:e,disabled:!0,placeholder:n(e)},t)}),(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsxs)(b,{variant:e,disabled:!0,children:[(0,D.jsx)(v,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(E,{placeholder:n(e)})]},t)}),(0,D.jsx)(g,{disabled:!0,label:`What is your favorite color?`,children:(0,D.jsx)(E,{placeholder:`#4387f4`})})]}),Tt=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsx)(E,{variant:e,placeholder:n(e),readOnly:!0},t)}),(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsxs)(b,{variant:e,readOnly:!0,children:[(0,D.jsx)(v,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(E,{placeholder:n(e)})]},t)}),(0,D.jsx)(g,{label:`What is your favorite color?`,readOnly:!0,children:(0,D.jsx)(E,{placeholder:`#4387f4`})})]}),Et=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsx)(E,{variant:e,invalid:!0,placeholder:n(e)},t)}),(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsxs)(b,{variant:e,invalid:!0,children:[(0,D.jsx)(v,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(E,{placeholder:n(e)})]},t)}),(0,D.jsx)(g,{errorMessage:`This is required.`,invalid:!0,label:`What is your favorite color?`,children:(0,D.jsx)(E,{placeholder:`#4387f4`})})]}),$=()=>(0,D.jsx)(S,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,D.jsxs)(b,{variant:e,children:[(0,D.jsx)(v,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(E,{placeholder:n(e)})]},t)}),Dt=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(E,{placeholder:`Default border color`}),(0,D.jsx)(E,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,D.jsx)(E,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,D.jsxs)(b,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,D.jsx)(v,{children:(0,D.jsx)(d,{})}),(0,D.jsx)(E,{placeholder:`Custom border color`})]})]}),Ot=()=>{let[e,t]=(0,xt.useState)(`#4387f4`);return(0,D.jsx)(E,{"aria-label":`Choose a color`,value:e,onChange:t})},kt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=rt();return(0,D.jsxs)($e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,D.jsx)(g,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,D.jsx)(it,{name:`colorPicker`,control:e,render:({field:e})=>(0,D.jsx)(E,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,D.jsx)(Me,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},At=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=rt({defaultValues:{colorPicker:`#4387f4`}});return(0,D.jsxs)($e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,D.jsx)(g,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,D.jsx)(it,{name:`colorPicker`,control:e,render:({field:e})=>(0,D.jsx)(E,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,D.jsx)(Me,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},jt=`Basic.Variant.Size.DefaultValue.Alpha.Format.Pattern.FormatInput.ColorSwatches.ColorSwatchGroupColumns.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledEyeDropper.DisallowInput.HiddenColorSwatch.Shape.Disabled.ReadOnly.Invalid.Addon.BorderColor.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...I.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...Ct.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...Q.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
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
}`,...wt.parameters?.docs?.source}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Tt.parameters?.docs?.source}}},Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`() => {
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
}`,...Et.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...$.parameters?.docs?.source}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dt.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...Ot.parameters?.docs?.source}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`() => {
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
}`,...kt.parameters?.docs?.source}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`() => {
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
}`,...At.parameters?.docs?.source}}}})))()}Mt();export{$ as Addon,M as Alpha,z as AnimationScheme,O as Basic,V as BlockScrollOnMount,Dt as BorderColor,U as CloseOnChange,W as CloseOnScroll,Ct as ColorSwatchGroupColumns,I as ColorSwatches,Ot as CustomControl,j as DefaultValue,wt as Disabled,q as DisabledCloseOnBlur,J as DisabledCloseOnEsc,Y as DisabledEyeDropper,K as DisabledOpenOnClick,G as DisabledOpenOnFocus,X as DisallowInput,N as Format,F as FormatInput,R as Gutter,Z as HiddenColorSwatch,Et as Invalid,L as Offset,H as OpenOnChange,P as Pattern,B as Placement,kt as ReactHookForm,At as ReactHookFormDefaultValue,Tt as ReadOnly,Q as Shape,A as Size,k as Variant,jt as __namedExportsOrder,St as default};