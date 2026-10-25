import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Cn as r,En as ee,In as te,Nn as ne,On as re,Pn as ie,Qt as ae,Vt as oe,Wn as se,bn as i,ct as ce,dt as a,i as le,mn as ue,o as de,ot as o,pt as fe,wn as pe}from"./props-Bm02A0Xh.js";import{a as me,n as he}from"./event-3uLHSF2Y.js";import{i as ge,r as s}from"./i18n-provider-Rbe_KYzW.js";import{t as _e}from"./jsx-runtime-BdxMnOeJ.js";import{d as ve,i as c,n as l,r as ye}from"./create-component-BET19-lq.js";import{n as be,t as u}from"./palette-icon-CugFXxQT.js";import{c as xe,i as Se,l as Ce,o as we,s as Te,u as Ee}from"./color-selector-BfqO3MaC.js";import{r as De,t as Oe}from"./use-controllable-state-DxZ3ab-a.js";import{c as d,i as ke,l as f,s as Ae,u as je}from"./popover-BVqMsHpd.js";import{r as Me,t as Ne}from"./button-D-qzJx4d.js";import{r as Pe,t as p}from"./color-swatch-CA2VrCzt.js";import{c as m,r as Fe,s as h,t as Ie}from"./use-field-props-BcIonjy4.js";import{i as Le,r as Re}from"./group-W9WGfD8R.js";import{i as ze,r as g}from"./input-DN8Haqp0.js";import{a as _,i as Be,n as Ve,o as He,r as v,t as y}from"./input-group-C3c2abhR.js";import{n as Ue,t as We}from"./use-input-border-DWaXYKBG.js";import{n as Ge,t as Ke}from"./native-select.style-CtcYVkyE.js";import{o as qe,s as Je}from"./use-combobox-DL3LZDCh.js";import{n as Ye,t as Xe}from"./box-gyVoj826.js";import{n as Ze,t as b}from"./date-picker.style-CXMryEjQ.js";import{n as Qe,t as x}from"./for-D7nCt3i9.js";import{n as $e,t as et}from"./v-stack-n4qGZJTU.js";import{n as tt,t as nt}from"./props-table-D-HmWnAJ.js";import{n as rt,r as it,t as at}from"./index.esm-Y7Qbz507.js";var ot;function st(){return(st=e((()=>{ve(),Ze(),Ke(),ot=c({base:{...Ge.base,colorSwatch:{w:`1.5em`},content:{p:`1`,w:`sm`},eyeDropper:b.base?.icon,field:b.base?.field,input:b.base?.input},variants:{filled:b.variants?.filled,flushed:{...b.variants?.flushed,root:{}},outline:b.variants?.outline,plain:b.variants?.plain},sizes:{xs:b.sizes?.xs,sm:b.sizes?.sm,md:b.sizes?.md,lg:b.sizes?.lg,xl:b.sizes?.xl},defaultProps:{size:`md`,variant:`outline`}})})))()}var S,ct;function lt(){return(lt=e((()=>{S=t(),le(),qe(),Oe(),Te(),s(),ae(),te(),me(),pe(),o(),a(),Ie(),ct=e=>{let{t}=ge(`colorPicker`),{props:{id:te,ref:re,name:ae,"aria-label":se,"aria-labelledby":i,allowInput:a=!0,closeOnChange:le=!1,defaultValue:ue,disabled:o,fallbackValue:pe=`#FFFFFF`,format:me,formatInput:s,openOnChange:_e=!0,openOnClick:ve=!0,openOnFocus:c=!0,pattern:l,placeholder:ye,placement:be=`end-start`,readOnly:u,required:Se,value:Ce,onChange:we,onInputChange:Te,...Ee},ariaProps:Oe,dataProps:d,eventProps:ke}=Fe(e),{interactive:f,open:Ae,getContentProps:je,getTriggerProps:Me,popoverProps:Ne,onClose:Pe,onOpen:p}=Je({disabled:o,matchWidth:!1,openOnClick:!1,openOnEnter:!a,openOnSpace:!a,placement:be,readOnly:u,transferFocus:!1,...Oe,...d,...ke,...Ee}),m=me??ne(Ce??ue??pe),h=m.endsWith(`a`),Ie=(0,S.useRef)(null),Le=(0,S.useRef)(null),Re=(0,S.useRef)(null),ze=(0,S.useRef)(!1),[g,_]=De({defaultValue:ue,value:Ce,onChange:we}),{supported:Be,onOpen:Ve}=xe(),He=(0,S.useCallback)(()=>{f&&(ze.current=!0,a&&Re.current?.focus(),ve&&p())},[a,f,p,ve]),v=(0,S.useCallback)(e=>{c&&(e.preventDefault(),e.stopPropagation())},[c]),y=(0,S.useCallback)(()=>{a||(c&&p(),ze.current=!1)},[a,p,c]),Ue=(0,S.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),c&&!ze.current&&p(),ze.current=!1},[p,c]),We=(0,S.useCallback)(e=>{oe(Ie.current,e.relatedTarget)||oe(Le.current,e.relatedTarget)?e.preventDefault():_(e=>{if(!e)return e;let t=ie(e)(m);return t?(s&&(t=s(t)),l&&(t=t.replace(l,``)),t):e})},[m,s,l,_]),Ge=(0,S.useCallback)(e=>{if(!a)return;Te?.(e),ee(le,e)?Pe():ee(_e,e)&&p();let t=e.target.value;s&&(t=s(t)),l&&(t=t.replace(l,``)),_(t)},[a,le,s,Pe,Te,p,_e,l,_]),Ke=(0,S.useCallback)(async()=>{if(!f)return;let e=await Ve();e?.sRGBHex&&_(e.sRGBHex)},[f,Ve,_]);(0,S.useEffect)(()=>{if(Ae)return he(Le.current,a?Re.current:Ie.current)},[a,Ae]);let qe=(0,S.useCallback)(e=>({...d,...e}),[d]),Ye=(0,S.useCallback)(({ref:e,...t}={})=>Me({ref:ce(e,Ie),"aria-haspopup":`dialog`,tabIndex:a?-1:0,...t,onClick:r(t.onClick,He),onFocus:r(t.onFocus,y),onMouseDown:r(t.onMouseDown,v)}),[a,Me,He,y,v]),Xe=(0,S.useCallback)((e={})=>de({id:te,ref:ce(re,Re),name:ae,style:a?{}:{pointerEvents:`none`},"aria-label":se,"aria-labelledby":i,autoComplete:`off`,disabled:o,placeholder:ye,readOnly:u,required:Se,tabIndex:a?0:-1,value:g,...d},e,{onBlur:We,onChange:Ge,onFocus:Ue,onMouseDown:v})(),[a,se,i,d,o,te,ae,We,Ge,Ue,v,ye,u,re,Se,g]),Ze=(0,S.useCallback)((e={})=>({...d,"aria-disabled":n(!f),"aria-label":t(`Pick a color`),hidden:!Be,role:`button`,tabIndex:f?0:-1,...e,onClick:r(e.onClick,Ke),onKeyDown:r(e.onKeyDown,e=>fe(e,{Enter:Ke,Space:Ke}))}),[d,f,Ke,Be,t]);return{alpha:h,format:m,interactive:f,open:Ae,setValue:_,value:g,getContentProps:(0,S.useCallback)(({ref:e,...t}={})=>je({ref:ce(e,Le),role:`dialog`,...t}),[je]),getEyeDropperProps:Ze,getFieldProps:Ye,getInputProps:Xe,getRootProps:qe,getSelectorProps:(0,S.useCallback)((e={})=>({disabled:o,fallbackValue:pe,format:m,readOnly:u,value:g,...e,onChange:r(e.onChange,_)}),[o,pe,m,u,g,_]),popoverProps:Ne,onClose:Pe,onOpen:p}}})))()}var ut,C,dt,ft,pt,mt,w,ht,T,gt,_t,vt,yt,bt;function xt(){return(xt=e((()=>{ut=t(),ye(),le(),we(),Pe(),Re(),Ee(),Ve(),Be(),We(),g(),f(),st(),lt(),C=_e(),{ComponentContext:dt,PropsContext:ft,useComponentContext:pt,usePropsContext:mt,withContext:w,withProvider:ht}=l(`color-picker`,ot),T=ht(e=>{let[t,{className:n,css:r,colorScheme:ee,size:te,animationScheme:ne=`block-start`,colorSwatches:re,colorSwatchGroupColumns:ie,colorSwatchGroupLabel:ae,duration:oe,errorBorderColor:i,focusBorderColor:ce,withColorSwatch:a=!0,withEyeDropper:le=!0,alphaSliderProps:ue,colorSwatchGroupLabelProps:o,colorSwatchGroupProps:fe,colorSwatchItemProps:pe,colorSwatchProps:me,contentProps:he,elementProps:ge,endElementProps:s,eyeDropperProps:_e,fieldProps:ve,hueSliderProps:c,inputProps:l,rootProps:ye,saturationSliderProps:be,selectorProps:u,startElementProps:xe,...Ce}]=Le(e),we=je(Ce),{value:Te,getContentProps:Ee,getEyeDropperProps:De,getFieldProps:Oe,getInputProps:ke,getRootProps:f,getSelectorProps:Me,popoverProps:Ne}=ct({...Ce,...we}),Pe=(0,ut.useMemo)(()=>({animationScheme:ne,duration:oe,...Ne}),[ne,oe,Ne]),p=Ue({errorBorderColor:i,focusBorderColor:ce}),m=(0,ut.useMemo)(()=>({value:Te,getEyeDropperProps:De,getInputProps:ke,inputProps:l}),[De,ke,l,Te]);return(0,C.jsx)(dt,{value:m,children:(0,C.jsxs)(Ae,{...Pe,children:[(0,C.jsxs)(y,{...de({className:n,css:r,colorScheme:ee},f(t),ye)(),children:[a?(0,C.jsx)(v,{...de(ge,xe)(),children:(0,C.jsx)(vt,{...me})}):null,(0,C.jsx)(d,{children:(0,C.jsx)(gt,{...Oe({...p,...ve})})}),le?(0,C.jsx)(v,{...de({clickable:!0},ge,s)(),children:(0,C.jsx)(yt,{...De(_e)})}):null]}),(0,C.jsx)(bt,{...se(Ee(se(he))),children:(0,C.jsx)(Se,{size:te,...Me({colorSwatches:re,colorSwatchGroupColumns:ie,colorSwatchGroupLabel:ae,alphaSliderProps:ue,colorSwatchGroupLabelProps:o,colorSwatchGroupProps:fe,colorSwatchItemProps:pe,hueSliderProps:c,saturationSliderProps:be,...u})})})]})})},`root`,{transferProps:[`size`]})(e=>{let t=ze();return de(t,e)()}),gt=w(`div`,`field`)({"data-group-propagate":``},e=>{let{getInputProps:t,inputProps:n}=pt();return{children:(0,C.jsx)(_t,{...t(n)}),...e}}),_t=w(`input`,`input`)(),vt=w(p,`colorSwatch`)(void 0,e=>{let{value:t}=pt();return{variant:`circle`,color:t,...e}}),yt=w(`div`,`eyeDropper`)(void 0,({children:e,icon:t,...n})=>{let{getEyeDropperProps:r}=pt();return r({children:t||e||(0,C.jsx)(Ce,{}),...n})}),bt=w(ke,`content`)()})))()}var St,E,Ct,D,O,k,A,j,M,N,P,F,wt,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Tt,Et,Dt,Ot,kt,At,$,jt;function Mt(){return(Mt=e((()=>{St=t(),rt(),tt(),te(),ue(),Ye(),Me(),m(),Qe(),be(),Ve(),He(),$e(),xt(),E=_e(),Ct={component:T,title:`Components / ColorPicker`},D=()=>(0,E.jsx)(T,{placeholder:`#4387f4`}),O=()=>(0,E.jsx)(nt,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:re,children:(e,t,n)=>(0,E.jsx)(T,{colorScheme:t,variant:e,placeholder:i(e)},n)}),k=()=>(0,E.jsx)(nt,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,E.jsx)(T,{size:e,variant:t,placeholder:`Size (${e})`},n)}),A=()=>(0,E.jsx)(T,{defaultValue:`#4387f4`,placeholder:`#4387f4`}),j=()=>(0,E.jsx)(T,{defaultValue:`#775999A0`,placeholder:`#775999A0`}),M=()=>(0,E.jsx)(nt,{variant:`stack`,rows:[`hex`,`hexa`,`rgb`,`rgba`,`hsl`,`hsla`],children:(e,t,n)=>(0,E.jsx)(T,{format:t,placeholder:`Format (${t})`},n)}),N=()=>(0,E.jsx)(T,{pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387f4`}),P=()=>(0,E.jsx)(T,{formatInput:e=>e.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387F4`}),F=()=>(0,E.jsx)(T,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),wt=()=>(0,E.jsx)(T,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),I=()=>(0,E.jsx)(T,{offset:[16,16],placeholder:`#4387f4`}),L=()=>(0,E.jsx)(T,{gutter:16,placeholder:`#4387f4`}),R=()=>(0,E.jsx)(T,{animationScheme:`inline-start`,placeholder:`#4387f4`}),z=()=>(0,E.jsx)(T,{animationScheme:`inline-start`,placeholder:`#4387f4`,placement:`center-end`,rootProps:{w:`xs`}}),B=()=>(0,E.jsx)(Xe,{minH:`200dvh`,w:`full`,children:(0,E.jsx)(T,{blockScrollOnMount:!0,placeholder:`#4387f4`})}),V=()=>(0,E.jsx)(T,{openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`#4387f4`}),H=()=>(0,E.jsx)(T,{closeOnChange:e=>!e.target.value.length,openOnFocus:!1,placeholder:`#4387f4`}),U=()=>(0,E.jsx)(Xe,{minH:`200dvh`,w:`full`,children:(0,E.jsx)(T,{closeOnScroll:!0,placeholder:`#4387f4`})}),W=()=>(0,E.jsx)(T,{openOnFocus:!1,placeholder:`#4387f4`}),G=()=>(0,E.jsx)(T,{openOnClick:!1,placeholder:`#4387f4`}),K=()=>(0,E.jsx)(T,{closeOnBlur:!1,placeholder:`#4387f4`}),q=()=>(0,E.jsx)(T,{closeOnEsc:!1,placeholder:`#4387f4`}),J=()=>(0,E.jsx)(T,{placeholder:`#4387f4`,withEyeDropper:!1}),Y=()=>(0,E.jsx)(T,{allowInput:!1,placeholder:`#4387f4`}),X=()=>(0,E.jsx)(T,{placeholder:`#4387f4`,withColorSwatch:!1}),Z=()=>(0,E.jsx)(nt,{variant:`stack`,rows:[`rounded`,`circle`,`square`],children:(e,t,n)=>(0,E.jsx)(T,{placeholder:`#4387f4`,selectorProps:{shape:t}},n)}),Q=()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsx)(T,{variant:e,disabled:!0,placeholder:i(e)},t)}),(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsxs)(y,{variant:e,disabled:!0,children:[(0,E.jsx)(_,{children:(0,E.jsx)(u,{})}),(0,E.jsx)(T,{placeholder:i(e)})]},t)}),(0,E.jsx)(h,{disabled:!0,label:`What is your favorite color?`,children:(0,E.jsx)(T,{placeholder:`#4387f4`})})]}),Tt=()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsx)(T,{variant:e,placeholder:i(e),readOnly:!0},t)}),(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsxs)(y,{variant:e,readOnly:!0,children:[(0,E.jsx)(_,{children:(0,E.jsx)(u,{})}),(0,E.jsx)(T,{placeholder:i(e)})]},t)}),(0,E.jsx)(h,{label:`What is your favorite color?`,readOnly:!0,children:(0,E.jsx)(T,{placeholder:`#4387f4`})})]}),Et=()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsx)(T,{variant:e,invalid:!0,placeholder:i(e)},t)}),(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsxs)(y,{variant:e,invalid:!0,children:[(0,E.jsx)(_,{children:(0,E.jsx)(u,{})}),(0,E.jsx)(T,{placeholder:i(e)})]},t)}),(0,E.jsx)(h,{errorMessage:`This is required.`,invalid:!0,label:`What is your favorite color?`,children:(0,E.jsx)(T,{placeholder:`#4387f4`})})]}),Dt=()=>(0,E.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,E.jsxs)(y,{variant:e,children:[(0,E.jsx)(_,{children:(0,E.jsx)(u,{})}),(0,E.jsx)(T,{placeholder:i(e)})]},t)}),Ot=()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(T,{placeholder:`Default border color`}),(0,E.jsx)(T,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,E.jsx)(T,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,E.jsxs)(y,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,E.jsx)(_,{children:(0,E.jsx)(u,{})}),(0,E.jsx)(T,{placeholder:`Custom border color`})]})]}),kt=()=>{let[e,t]=(0,St.useState)(`#4387f4`);return(0,E.jsx)(T,{"aria-label":`Choose a color`,value:e,onChange:t})},At=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=it();return(0,E.jsxs)(et,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,E.jsx)(h,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,E.jsx)(at,{name:`colorPicker`,control:e,render:({field:e})=>(0,E.jsx)(T,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,E.jsx)(Ne,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=it({defaultValues:{colorPicker:`#4387f4`}});return(0,E.jsxs)(et,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,E.jsx)(h,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,E.jsx)(at,{name:`colorPicker`,control:e,render:({field:e})=>(0,E.jsx)(T,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,E.jsx)(Ne,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},jt=`Basic.Variant.Size.DefaultValue.Alpha.Format.Pattern.FormatInput.ColorSwatches.ColorSwatchGroupColumns.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledEyeDropper.DisallowInput.HiddenColorSwatch.Shape.Disabled.ReadOnly.Invalid.Addon.BorderColor.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...F.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...wt.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Et.parameters?.docs?.source}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...Dt.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`() => {
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
}`,...At.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Mt();export{Dt as Addon,j as Alpha,R as AnimationScheme,D as Basic,B as BlockScrollOnMount,Ot as BorderColor,H as CloseOnChange,U as CloseOnScroll,wt as ColorSwatchGroupColumns,F as ColorSwatches,kt as CustomControl,A as DefaultValue,Q as Disabled,K as DisabledCloseOnBlur,q as DisabledCloseOnEsc,J as DisabledEyeDropper,G as DisabledOpenOnClick,W as DisabledOpenOnFocus,Y as DisallowInput,M as Format,P as FormatInput,L as Gutter,X as HiddenColorSwatch,Et as Invalid,I as Offset,V as OpenOnChange,N as Pattern,z as Placement,At as ReactHookForm,$ as ReactHookFormDefaultValue,Tt as ReadOnly,Z as Shape,k as Size,O as Variant,jt as __namedExportsOrder,Ct as default};