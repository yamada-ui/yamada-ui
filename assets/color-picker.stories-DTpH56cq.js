import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Cn as ee,Dn as te,Fn as ne,Mn as re,Nn as ie,Sn as r,Tn as ae,Un as oe,Zt as se,ct as ce,dt as i,fn as le,i as ue,o as a,ot as o,pn as s,pt as de,yn as c,zt as fe}from"./props-CCQavtXy.js";import{a as l,n as pe}from"./event-B_26neYN.js";import{i as me,r as he}from"./i18n-provider-BSc3faoG.js";import{t as ge}from"./jsx-runtime-BdxMnOeJ.js";import{d as u,i as d,n as _e,r as ve}from"./create-component-CNpeiJ0q.js";import{n as f,t as p}from"./palette-icon-Dt9jgtxn.js";import{c as ye,i as be,l as xe,o as Se,s as Ce,u as we}from"./color-selector-B-JsRCzf.js";import{r as Te,t as m}from"./use-controllable-state-mWduWyKf.js";import{c as Ee,i as h,l as De,s as Oe,u as ke}from"./popover-B6Qx0w46.js";import{r as Ae,t as g}from"./button-BCcG2Qpy.js";import{r as _,t as v}from"./color-swatch-CWG2XCM1.js";import{c as je,r as Me,s as y,t as Ne}from"./use-field-props-BwIcoUP5.js";import{i as Pe,r as Fe}from"./group-DV5WxYkI.js";import{i as b,r as x}from"./input-D740622u.js";import{a as S,i as Ie,n as Le,o as Re,r as ze,t as C}from"./input-group-B_tkQRR_.js";import{n as Be,t as Ve}from"./use-input-border-C63XHJ9D.js";import{n as He,t as Ue}from"./native-select.style-BeU3Lrgq.js";import{o as We,s as Ge}from"./use-combobox-aPG-ipFN.js";import{n as Ke,t as qe}from"./box-hb1yJtuQ.js";import{n as Je,t as w}from"./date-picker.style-sE4y8J_t.js";import{n as Ye,t as T}from"./for-vlneEBu7.js";import{n as Xe,t as Ze}from"./v-stack-DFqT3QqZ.js";import{n as Qe,t as $e}from"./props-table-CbpR6Bxo.js";import{n as et,r as tt,t as nt}from"./index.esm-DO-98hSD.js";var rt;function it(){return(it=e((()=>{u(),Je(),Ue(),rt=d({base:{...He.base,colorSwatch:{w:`1.5em`},content:{p:`1`,w:`sm`},eyeDropper:w.base?.icon,field:w.base?.field,input:w.base?.input},variants:{filled:w.variants?.filled,flushed:{...w.variants?.flushed,root:{}},outline:w.variants?.outline,plain:w.variants?.plain},sizes:{xs:w.sizes?.xs,sm:w.sizes?.sm,md:w.sizes?.md,lg:w.sizes?.lg,xl:w.sizes?.xl},defaultProps:{size:`md`,variant:`outline`}})})))()}var E,at;function ot(){return(ot=e((()=>{E=t(),We(),m(),Ce(),he(),se(),ne(),s(),l(),ee(),o(),i(),Ne(),at=e=>{let{t}=me(`colorPicker`),{props:{id:ee,ref:te,name:ne,"aria-label":oe,"aria-labelledby":se,allowInput:i=!0,closeOnChange:ue=!1,defaultValue:a,disabled:o,fallbackValue:s=`#FFFFFF`,format:c,formatInput:l,openOnChange:he=!0,openOnClick:ge=!0,openOnFocus:u=!0,pattern:d,placeholder:_e,placement:ve=`end-start`,readOnly:f,required:p,value:be,onChange:xe,onInputChange:Se,...Ce},ariaProps:we,dataProps:m,eventProps:Ee}=Me(e),{interactive:h,open:De,getContentProps:Oe,getTriggerProps:ke,popoverProps:Ae,onClose:g,onOpen:_}=Ge({disabled:o,matchWidth:!1,openOnClick:!1,openOnEnter:!i,openOnSpace:!i,placement:ve,readOnly:f,transferFocus:!1,...we,...m,...Ee,...Ce}),v=c??re(be??a??s),je=v.endsWith(`a`),y=(0,E.useRef)(null),Ne=(0,E.useRef)(null),Pe=(0,E.useRef)(null),Fe=(0,E.useRef)(!1),[b,x]=Te({defaultValue:a,value:be,onChange:xe}),{supported:S,onOpen:Ie}=ye(),Le=(0,E.useCallback)(()=>{h&&(Fe.current=!0,i&&Pe.current?.focus(),ge&&_())},[i,h,_,ge]),Re=(0,E.useCallback)(e=>{u&&(e.preventDefault(),e.stopPropagation())},[u]),ze=(0,E.useCallback)(()=>{i||(u&&_(),Fe.current=!1)},[i,_,u]),C=(0,E.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),u&&!Fe.current&&_(),Fe.current=!1},[_,u]),Be=(0,E.useCallback)(e=>{n(y.current,e.relatedTarget)||n(Ne.current,e.relatedTarget)?e.preventDefault():x(e=>{if(!e)return e;let t=ie(e)(v);return t?(l&&(t=l(t)),d&&(t=t.replace(d,``)),t):e})},[v,l,d,x]),Ve=(0,E.useCallback)(e=>{if(!i)return;Se?.(e),ae(ue,e)?g():ae(he,e)&&_();let t=e.target.value;l&&(t=l(t)),d&&(t=t.replace(d,``)),x(t)},[i,ue,l,g,Se,_,he,d,x]),He=(0,E.useCallback)(async()=>{if(!h)return;let e=await Ie();e?.sRGBHex&&x(e.sRGBHex)},[h,Ie,x]);(0,E.useEffect)(()=>{if(De)return pe(Ne.current,i?Pe.current:y.current)},[i,De]);let Ue=(0,E.useCallback)(e=>({...m,...e}),[m]),We=(0,E.useCallback)(({ref:e,...t}={})=>ke({ref:ce(e,y),"aria-haspopup":`dialog`,tabIndex:i?-1:0,...t,onClick:r(t.onClick,Le),onFocus:r(t.onFocus,ze),onMouseDown:r(t.onMouseDown,Re)}),[i,ke,Le,ze,Re]),Ke=(0,E.useCallback)(({"aria-labelledby":e,...t}={})=>({id:ee,ref:ce(t.ref,te,Pe),name:ne,style:{...i?{}:{pointerEvents:`none`},...t.style},"aria-label":oe,"aria-labelledby":le(e,se),autoComplete:`off`,disabled:o,placeholder:_e,readOnly:f,required:p,tabIndex:i?0:-1,value:b,...m,...t,onBlur:r(t.onBlur,Be),onChange:r(t.onChange,Ve),onFocus:r(t.onFocus,C),onMouseDown:r(t.onMouseDown,Re)}),[i,oe,se,m,o,ee,ne,Be,Ve,C,Re,_e,f,te,p,b]),qe=(0,E.useCallback)((e={})=>({...m,"aria-disabled":fe(!h),"aria-label":t(`Pick a color`),hidden:!S,role:`button`,tabIndex:h?0:-1,...e,onClick:r(e.onClick,He),onKeyDown:r(e.onKeyDown,e=>de(e,{Enter:He,Space:He}))}),[m,h,He,S,t]);return{alpha:je,format:v,interactive:h,open:De,setValue:x,value:b,getContentProps:(0,E.useCallback)(({ref:e,...t}={})=>Oe({ref:ce(e,Ne),role:`dialog`,...t}),[Oe]),getEyeDropperProps:qe,getFieldProps:We,getInputProps:Ke,getRootProps:Ue,getSelectorProps:(0,E.useCallback)((e={})=>({disabled:o,fallbackValue:s,format:v,readOnly:f,value:b,...e,onChange:r(e.onChange,x)}),[o,s,v,f,b,x]),popoverProps:Ae,onClose:g,onOpen:_}}})))()}var st,D,ct,lt,ut,dt,O,ft,k,pt,mt,ht,gt,_t;function vt(){return(vt=e((()=>{st=t(),ve(),ue(),Se(),_(),Fe(),we(),Le(),Ie(),Ve(),x(),De(),it(),ot(),D=ge(),{ComponentContext:ct,PropsContext:lt,useComponentContext:ut,usePropsContext:dt,withContext:O,withProvider:ft}=_e(`color-picker`,rt),k=ft(e=>{let[t,{className:n,css:ee,colorScheme:te,size:ne,animationScheme:re=`block-start`,colorSwatches:ie,colorSwatchGroupColumns:r,colorSwatchGroupLabel:ae,duration:se,errorBorderColor:ce,focusBorderColor:i,withColorSwatch:le=!0,withEyeDropper:ue=!0,alphaSliderProps:o,colorSwatchGroupLabelProps:s,colorSwatchGroupProps:de,colorSwatchItemProps:c,colorSwatchProps:fe,contentProps:l,elementProps:pe,endElementProps:me,eyeDropperProps:he,fieldProps:ge,hueSliderProps:u,inputProps:d,rootProps:_e,saturationSliderProps:ve,selectorProps:f,startElementProps:p,...ye}]=Pe(e),xe=ke(ye),{value:Se,getContentProps:Ce,getEyeDropperProps:we,getFieldProps:Te,getInputProps:m,getRootProps:h,getSelectorProps:De,popoverProps:Ae}=at({...ye,...xe}),g=(0,st.useMemo)(()=>({animationScheme:re,duration:se,...Ae}),[re,se,Ae]),_=Be({errorBorderColor:ce,focusBorderColor:i}),v=(0,st.useMemo)(()=>({value:Se,getEyeDropperProps:we,getInputProps:m,inputProps:d}),[we,m,d,Se]);return(0,D.jsx)(ct,{value:v,children:(0,D.jsxs)(Oe,{...g,children:[(0,D.jsxs)(C,{...a({className:n,css:ee,colorScheme:te},h(t),_e)(),children:[le?(0,D.jsx)(ze,{...a(pe,p)(),children:(0,D.jsx)(ht,{...fe})}):null,(0,D.jsx)(Ee,{children:(0,D.jsx)(pt,{...Te({..._,...ge})})}),ue?(0,D.jsx)(ze,{...a({clickable:!0},pe,me)(),children:(0,D.jsx)(gt,{...we(he)})}):null]}),(0,D.jsx)(_t,{...oe(Ce(oe(l))),children:(0,D.jsx)(be,{size:ne,...De({colorSwatches:ie,colorSwatchGroupColumns:r,colorSwatchGroupLabel:ae,alphaSliderProps:o,colorSwatchGroupLabelProps:s,colorSwatchGroupProps:de,colorSwatchItemProps:c,hueSliderProps:u,saturationSliderProps:ve,...f})})})]})})},`root`,{transferProps:[`size`]})(e=>{let t=b();return a(t,e)()}),pt=O(`div`,`field`)({"data-group-propagate":``},e=>{let{getInputProps:t,inputProps:n}=ut();return{children:(0,D.jsx)(mt,{...t(n)}),...e}}),mt=O(`input`,`input`)(),ht=O(v,`colorSwatch`)(void 0,e=>{let{value:t}=ut();return{variant:`circle`,color:t,...e}}),gt=O(`div`,`eyeDropper`)(void 0,({children:e,icon:t,...n})=>{let{getEyeDropperProps:ee}=ut();return ee({children:t||e||(0,D.jsx)(xe,{}),...n})}),_t=O(h,`content`)()})))()}var yt,A,bt,j,M,N,P,F,I,L,R,z,xt,B,V,H,U,W,G,K,q,J,Y,X,Z,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Q,$,Mt;function Nt(){return(Nt=e((()=>{yt=t(),et(),Qe(),ne(),s(),Ke(),Ae(),je(),Ye(),f(),Le(),Re(),Xe(),vt(),A=ge(),bt={component:k,title:`Components / ColorPicker`},j=()=>(0,A.jsx)(k,{placeholder:`#4387f4`}),M=()=>(0,A.jsx)($e,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:te,children:(e,t,n)=>(0,A.jsx)(k,{colorScheme:t,variant:e,placeholder:c(e)},n)}),N=()=>(0,A.jsx)($e,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,A.jsx)(k,{size:e,variant:t,placeholder:`Size (${e})`},n)}),P=()=>(0,A.jsx)(k,{defaultValue:`#4387f4`,placeholder:`#4387f4`}),F=()=>(0,A.jsx)(k,{defaultValue:`#775999A0`,placeholder:`#775999A0`}),I=()=>(0,A.jsx)($e,{variant:`stack`,rows:[`hex`,`hexa`,`rgb`,`rgba`,`hsl`,`hsla`],children:(e,t,n)=>(0,A.jsx)(k,{format:t,placeholder:`Format (${t})`},n)}),L=()=>(0,A.jsx)(k,{pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387f4`}),R=()=>(0,A.jsx)(k,{formatInput:e=>e.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387F4`}),z=()=>(0,A.jsx)(k,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),xt=()=>(0,A.jsx)(k,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),B=()=>(0,A.jsx)(k,{offset:[16,16],placeholder:`#4387f4`}),V=()=>(0,A.jsx)(k,{gutter:16,placeholder:`#4387f4`}),H=()=>(0,A.jsx)(k,{animationScheme:`inline-start`,placeholder:`#4387f4`}),U=()=>(0,A.jsx)(k,{animationScheme:`inline-start`,placeholder:`#4387f4`,placement:`center-end`,rootProps:{w:`xs`}}),W=()=>(0,A.jsx)(qe,{minH:`200dvh`,w:`full`,children:(0,A.jsx)(k,{blockScrollOnMount:!0,placeholder:`#4387f4`})}),G=()=>(0,A.jsx)(k,{openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`#4387f4`}),K=()=>(0,A.jsx)(k,{closeOnChange:e=>!e.target.value.length,openOnFocus:!1,placeholder:`#4387f4`}),q=()=>(0,A.jsx)(qe,{minH:`200dvh`,w:`full`,children:(0,A.jsx)(k,{closeOnScroll:!0,placeholder:`#4387f4`})}),J=()=>(0,A.jsx)(k,{openOnFocus:!1,placeholder:`#4387f4`}),Y=()=>(0,A.jsx)(k,{openOnClick:!1,placeholder:`#4387f4`}),X=()=>(0,A.jsx)(k,{closeOnBlur:!1,placeholder:`#4387f4`}),Z=()=>(0,A.jsx)(k,{closeOnEsc:!1,placeholder:`#4387f4`}),St=()=>(0,A.jsx)(k,{placeholder:`#4387f4`,withEyeDropper:!1}),Ct=()=>(0,A.jsx)(k,{allowInput:!1,placeholder:`#4387f4`}),wt=()=>(0,A.jsx)(k,{placeholder:`#4387f4`,withColorSwatch:!1}),Tt=()=>(0,A.jsx)($e,{variant:`stack`,rows:[`rounded`,`circle`,`square`],children:(e,t,n)=>(0,A.jsx)(k,{placeholder:`#4387f4`,selectorProps:{shape:t}},n)}),Et=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsx)(k,{variant:e,disabled:!0,placeholder:c(e)},t)}),(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsxs)(C,{variant:e,disabled:!0,children:[(0,A.jsx)(S,{children:(0,A.jsx)(p,{})}),(0,A.jsx)(k,{placeholder:c(e)})]},t)}),(0,A.jsx)(y,{disabled:!0,label:`What is your favorite color?`,children:(0,A.jsx)(k,{placeholder:`#4387f4`})})]}),Dt=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsx)(k,{variant:e,placeholder:c(e),readOnly:!0},t)}),(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsxs)(C,{variant:e,readOnly:!0,children:[(0,A.jsx)(S,{children:(0,A.jsx)(p,{})}),(0,A.jsx)(k,{placeholder:c(e)})]},t)}),(0,A.jsx)(y,{label:`What is your favorite color?`,readOnly:!0,children:(0,A.jsx)(k,{placeholder:`#4387f4`})})]}),Ot=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsx)(k,{variant:e,invalid:!0,placeholder:c(e)},t)}),(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsxs)(C,{variant:e,invalid:!0,children:[(0,A.jsx)(S,{children:(0,A.jsx)(p,{})}),(0,A.jsx)(k,{placeholder:c(e)})]},t)}),(0,A.jsx)(y,{errorMessage:`This is required.`,invalid:!0,label:`What is your favorite color?`,children:(0,A.jsx)(k,{placeholder:`#4387f4`})})]}),kt=()=>(0,A.jsx)(T,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,A.jsxs)(C,{variant:e,children:[(0,A.jsx)(S,{children:(0,A.jsx)(p,{})}),(0,A.jsx)(k,{placeholder:c(e)})]},t)}),At=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(k,{placeholder:`Default border color`}),(0,A.jsx)(k,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,A.jsx)(k,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,A.jsxs)(C,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,A.jsx)(S,{children:(0,A.jsx)(p,{})}),(0,A.jsx)(k,{placeholder:`Custom border color`})]})]}),jt=()=>{let[e,t]=(0,yt.useState)(`#4387f4`);return(0,A.jsx)(k,{"aria-label":`Choose a color`,value:e,onChange:t})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=tt();return(0,A.jsxs)(Ze,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,A.jsx)(y,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,A.jsx)(nt,{name:`colorPicker`,control:e,render:({field:e})=>(0,A.jsx)(k,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,A.jsx)(g,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=tt({defaultValues:{colorPicker:`#4387f4`}});return(0,A.jsxs)(Ze,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,A.jsx)(y,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,A.jsx)(nt,{name:`colorPicker`,control:e,render:({field:e})=>(0,A.jsx)(k,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,A.jsx)(g,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Mt=`Basic.Variant.Size.DefaultValue.Alpha.Format.Pattern.FormatInput.ColorSwatches.ColorSwatchGroupColumns.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledEyeDropper.DisallowInput.HiddenColorSwatch.Shape.Disabled.ReadOnly.Invalid.Addon.BorderColor.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...z.parameters?.docs?.source}}},xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...xt.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...Z.parameters?.docs?.source}}},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...St.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...Ct.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...wt.parameters?.docs?.source}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...Tt.parameters?.docs?.source}}},Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`() => {
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
}`,...Et.parameters?.docs?.source}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dt.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ot.parameters?.docs?.source}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...kt.parameters?.docs?.source}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`() => {
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
}`,...At.parameters?.docs?.source}}},jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...jt.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Nt();export{kt as Addon,F as Alpha,H as AnimationScheme,j as Basic,W as BlockScrollOnMount,At as BorderColor,K as CloseOnChange,q as CloseOnScroll,xt as ColorSwatchGroupColumns,z as ColorSwatches,jt as CustomControl,P as DefaultValue,Et as Disabled,X as DisabledCloseOnBlur,Z as DisabledCloseOnEsc,St as DisabledEyeDropper,Y as DisabledOpenOnClick,J as DisabledOpenOnFocus,Ct as DisallowInput,I as Format,R as FormatInput,V as Gutter,wt as HiddenColorSwatch,Ot as Invalid,B as Offset,G as OpenOnChange,L as Pattern,U as Placement,Q as ReactHookForm,$ as ReactHookFormDefaultValue,Dt as ReadOnly,Tt as Shape,N as Size,M as Variant,Mt as __namedExportsOrder,bt as default};