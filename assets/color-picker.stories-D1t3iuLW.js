import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Bt as n,Cn as r,En as ee,In as te,Nn as ne,On as re,Pn as ie,Qt as ae,Vt as oe,Wn as se,bn as i,ct as ce,dt as a,i as le,mn as ue,o,ot as de,pn as fe,pt as pe,wn as me}from"./props-C-BU2zQw.js";import{a as s,n as he}from"./event-DDF_rs_b.js";import{i as ge,r as _e}from"./i18n-provider-CtChwc3y.js";import{t as ve}from"./jsx-runtime-BdxMnOeJ.js";import{d as c,i as l,n as ye,r as be}from"./create-component-3wFhh2Ge.js";import{n as u,t as d}from"./palette-icon-DTptmdnJ.js";import{c as xe,i as Se,l as Ce,o as we,s as Te,u as Ee}from"./color-selector-X3W6VDez.js";import{r as De,t as f}from"./use-controllable-state-Dl895CZa.js";import{c as Oe,i as p,l as ke,s as Ae,u as je}from"./popover-gIHmwgCd.js";import{r as Me,t as m}from"./button-oiKS23wh.js";import{r as h,t as g}from"./color-swatch-1zZd-WJJ.js";import{c as Ne,r as Pe,s as _,t as Fe}from"./use-field-props-Bt8UHaNN.js";import{i as Ie,r as Le}from"./group-CSQ4IXKu.js";import{i as v,r as y}from"./input-CkzzT3Cs.js";import{a as b,i as Re,n as ze,o as Be,r as Ve,t as x}from"./input-group-Dz9_D6ta.js";import{n as He,t as Ue}from"./use-input-border-sMmMhi8V.js";import{n as We,t as Ge}from"./native-select.style-D08cR_6l.js";import{o as Ke,s as qe}from"./use-combobox-BxDjz9J3.js";import{n as Je,t as Ye}from"./box-D8oeGw8o.js";import{n as Xe,t as S}from"./date-picker.style-DzNJX6fo.js";import{n as Ze,t as C}from"./for-D20p4BeV.js";import{n as Qe,t as $e}from"./v-stack-C_Sv-CCw.js";import{n as et,t as tt}from"./props-table-CnN1nOwK.js";import{n as nt,r as rt,t as it}from"./index.esm-Y7Qbz507.js";var at;function ot(){return(ot=e((()=>{c(),Xe(),Ge(),at=l({base:{...We.base,colorSwatch:{w:`1.5em`},content:{p:`1`,w:`sm`},eyeDropper:S.base?.icon,field:S.base?.field,input:S.base?.input},variants:{filled:S.variants?.filled,flushed:{...S.variants?.flushed,root:{}},outline:S.variants?.outline,plain:S.variants?.plain},sizes:{xs:S.sizes?.xs,sm:S.sizes?.sm,md:S.sizes?.md,lg:S.sizes?.lg,xl:S.sizes?.xl},defaultProps:{size:`md`,variant:`outline`}})})))()}var w,st;function ct(){return(ct=e((()=>{w=t(),Ke(),f(),Te(),_e(),ae(),te(),ue(),s(),me(),de(),a(),Fe(),st=e=>{let{t}=ge(`colorPicker`),{props:{id:te,ref:re,name:ae,"aria-label":se,"aria-labelledby":i,allowInput:a=!0,closeOnChange:le=!1,defaultValue:ue,disabled:o,fallbackValue:de=`#FFFFFF`,format:me,formatInput:s,openOnChange:_e=!0,openOnClick:ve=!0,openOnFocus:c=!0,pattern:l,placeholder:ye,placement:be=`end-start`,readOnly:u,required:d,value:Se,onChange:Ce,onInputChange:we,...Te},ariaProps:Ee,dataProps:f,eventProps:Oe}=Pe(e),{interactive:p,open:ke,getContentProps:Ae,getTriggerProps:je,popoverProps:Me,onClose:m,onOpen:h}=qe({disabled:o,matchWidth:!1,openOnClick:!1,openOnEnter:!a,openOnSpace:!a,placement:be,readOnly:u,transferFocus:!1,...Ee,...f,...Oe,...Te}),g=me??ne(Se??ue??de),Ne=g.endsWith(`a`),_=(0,w.useRef)(null),Fe=(0,w.useRef)(null),Ie=(0,w.useRef)(null),Le=(0,w.useRef)(!1),[v,y]=De({defaultValue:ue,value:Se,onChange:Ce}),{supported:b,onOpen:Re}=xe(),ze=(0,w.useCallback)(()=>{p&&(Le.current=!0,a&&Ie.current?.focus(),ve&&h())},[a,p,h,ve]),Be=(0,w.useCallback)(e=>{c&&(e.preventDefault(),e.stopPropagation())},[c]),Ve=(0,w.useCallback)(()=>{a||(c&&h(),Le.current=!1)},[a,h,c]),x=(0,w.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),c&&!Le.current&&h(),Le.current=!1},[h,c]),He=(0,w.useCallback)(e=>{oe(_.current,e.relatedTarget)||oe(Fe.current,e.relatedTarget)?e.preventDefault():y(e=>{if(!e)return e;let t=ie(e)(g);return t?(s&&(t=s(t)),l&&(t=t.replace(l,``)),t):e})},[g,s,l,y]),Ue=(0,w.useCallback)(e=>{if(!a)return;we?.(e),ee(le,e)?m():ee(_e,e)&&h();let t=e.target.value;s&&(t=s(t)),l&&(t=t.replace(l,``)),y(t)},[a,le,s,m,we,h,_e,l,y]),We=(0,w.useCallback)(async()=>{if(!p)return;let e=await Re();e?.sRGBHex&&y(e.sRGBHex)},[p,Re,y]);(0,w.useEffect)(()=>{if(ke)return he(Fe.current,a?Ie.current:_.current)},[a,ke]);let Ge=(0,w.useCallback)(e=>({...f,...e}),[f]),Ke=(0,w.useCallback)(({ref:e,...t}={})=>je({ref:ce(e,_),"aria-haspopup":`dialog`,tabIndex:a?-1:0,...t,onClick:r(t.onClick,ze),onFocus:r(t.onFocus,Ve),onMouseDown:r(t.onMouseDown,Be)}),[a,je,ze,Ve,Be]),Je=(0,w.useCallback)(({"aria-labelledby":e,...t}={})=>({id:te,ref:ce(t.ref,re,Ie),name:ae,style:{...a?{}:{pointerEvents:`none`},...t.style},"aria-label":se,"aria-labelledby":fe(e,i),autoComplete:`off`,disabled:o,placeholder:ye,readOnly:u,required:d,tabIndex:a?0:-1,value:v,...f,...t,onBlur:r(t.onBlur,He),onChange:r(t.onChange,Ue),onFocus:r(t.onFocus,x),onMouseDown:r(t.onMouseDown,Be)}),[a,se,i,f,o,te,ae,He,Ue,x,Be,ye,u,re,d,v]),Ye=(0,w.useCallback)((e={})=>({...f,"aria-disabled":n(!p),"aria-label":t(`Pick a color`),hidden:!b,role:`button`,tabIndex:p?0:-1,...e,onClick:r(e.onClick,We),onKeyDown:r(e.onKeyDown,e=>pe(e,{Enter:We,Space:We}))}),[f,p,We,b,t]);return{alpha:Ne,format:g,interactive:p,open:ke,setValue:y,value:v,getContentProps:(0,w.useCallback)(({ref:e,...t}={})=>Ae({ref:ce(e,Fe),role:`dialog`,...t}),[Ae]),getEyeDropperProps:Ye,getFieldProps:Ke,getInputProps:Je,getRootProps:Ge,getSelectorProps:(0,w.useCallback)((e={})=>({disabled:o,fallbackValue:de,format:g,readOnly:u,value:v,...e,onChange:r(e.onChange,y)}),[o,de,g,u,v,y]),popoverProps:Me,onClose:m,onOpen:h}}})))()}var lt,T,ut,dt,ft,pt,E,mt,D,ht,gt,_t,vt,yt;function bt(){return(bt=e((()=>{lt=t(),be(),le(),we(),h(),Le(),Ee(),ze(),Re(),Ue(),y(),ke(),ot(),ct(),T=ve(),{ComponentContext:ut,PropsContext:dt,useComponentContext:ft,usePropsContext:pt,withContext:E,withProvider:mt}=ye(`color-picker`,at),D=mt(e=>{let[t,{className:n,css:r,colorScheme:ee,size:te,animationScheme:ne=`block-start`,colorSwatches:re,colorSwatchGroupColumns:ie,colorSwatchGroupLabel:ae,duration:oe,errorBorderColor:i,focusBorderColor:ce,withColorSwatch:a=!0,withEyeDropper:le=!0,alphaSliderProps:ue,colorSwatchGroupLabelProps:de,colorSwatchGroupProps:fe,colorSwatchItemProps:pe,colorSwatchProps:me,contentProps:s,elementProps:he,endElementProps:ge,eyeDropperProps:_e,fieldProps:ve,hueSliderProps:c,inputProps:l,rootProps:ye,saturationSliderProps:be,selectorProps:u,startElementProps:d,...xe}]=Ie(e),Ce=je(xe),{value:we,getContentProps:Te,getEyeDropperProps:Ee,getFieldProps:De,getInputProps:f,getRootProps:p,getSelectorProps:ke,popoverProps:Me}=st({...xe,...Ce}),m=(0,lt.useMemo)(()=>({animationScheme:ne,duration:oe,...Me}),[ne,oe,Me]),h=He({errorBorderColor:i,focusBorderColor:ce}),g=(0,lt.useMemo)(()=>({value:we,getEyeDropperProps:Ee,getInputProps:f,inputProps:l}),[Ee,f,l,we]);return(0,T.jsx)(ut,{value:g,children:(0,T.jsxs)(Ae,{...m,children:[(0,T.jsxs)(x,{...o({className:n,css:r,colorScheme:ee},p(t),ye)(),children:[a?(0,T.jsx)(Ve,{...o(he,d)(),children:(0,T.jsx)(_t,{...me})}):null,(0,T.jsx)(Oe,{children:(0,T.jsx)(ht,{...De({...h,...ve})})}),le?(0,T.jsx)(Ve,{...o({clickable:!0},he,ge)(),children:(0,T.jsx)(vt,{...Ee(_e)})}):null]}),(0,T.jsx)(yt,{...se(Te(se(s))),children:(0,T.jsx)(Se,{size:te,...ke({colorSwatches:re,colorSwatchGroupColumns:ie,colorSwatchGroupLabel:ae,alphaSliderProps:ue,colorSwatchGroupLabelProps:de,colorSwatchGroupProps:fe,colorSwatchItemProps:pe,hueSliderProps:c,saturationSliderProps:be,...u})})})]})})},`root`,{transferProps:[`size`]})(e=>{let t=v();return o(t,e)()}),ht=E(`div`,`field`)({"data-group-propagate":``},e=>{let{getInputProps:t,inputProps:n}=ft();return{children:(0,T.jsx)(gt,{...t(n)}),...e}}),gt=E(`input`,`input`)(),_t=E(g,`colorSwatch`)(void 0,e=>{let{value:t}=ft();return{variant:`circle`,color:t,...e}}),vt=E(`div`,`eyeDropper`)(void 0,({children:e,icon:t,...n})=>{let{getEyeDropperProps:r}=ft();return r({children:t||e||(0,T.jsx)(Ce,{}),...n})}),yt=E(p,`content`)()})))()}var xt,O,St,k,Ct,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,wt,Tt,Et,Dt,Ot,kt,At,jt,$,Mt;function Nt(){return(Nt=e((()=>{xt=t(),nt(),et(),te(),ue(),Je(),Me(),Ne(),Ze(),u(),ze(),Be(),Qe(),bt(),O=ve(),St={component:D,title:`Components / ColorPicker`},k=()=>(0,O.jsx)(D,{placeholder:`#4387f4`}),Ct=()=>(0,O.jsx)(tt,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:re,children:(e,t,n)=>(0,O.jsx)(D,{colorScheme:t,variant:e,placeholder:i(e)},n)}),A=()=>(0,O.jsx)(tt,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,O.jsx)(D,{size:e,variant:t,placeholder:`Size (${e})`},n)}),j=()=>(0,O.jsx)(D,{defaultValue:`#4387f4`,placeholder:`#4387f4`}),M=()=>(0,O.jsx)(D,{defaultValue:`#775999A0`,placeholder:`#775999A0`}),N=()=>(0,O.jsx)(tt,{variant:`stack`,rows:[`hex`,`hexa`,`rgb`,`rgba`,`hsl`,`hsla`],children:(e,t,n)=>(0,O.jsx)(D,{format:t,placeholder:`Format (${t})`},n)}),P=()=>(0,O.jsx)(D,{pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387f4`}),F=()=>(0,O.jsx)(D,{formatInput:e=>e.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387F4`}),I=()=>(0,O.jsx)(D,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),L=()=>(0,O.jsx)(D,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),R=()=>(0,O.jsx)(D,{offset:[16,16],placeholder:`#4387f4`}),z=()=>(0,O.jsx)(D,{gutter:16,placeholder:`#4387f4`}),B=()=>(0,O.jsx)(D,{animationScheme:`inline-start`,placeholder:`#4387f4`}),V=()=>(0,O.jsx)(D,{animationScheme:`inline-start`,placeholder:`#4387f4`,placement:`center-end`,rootProps:{w:`xs`}}),H=()=>(0,O.jsx)(Ye,{minH:`200dvh`,w:`full`,children:(0,O.jsx)(D,{blockScrollOnMount:!0,placeholder:`#4387f4`})}),U=()=>(0,O.jsx)(D,{openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`#4387f4`}),W=()=>(0,O.jsx)(D,{closeOnChange:e=>!e.target.value.length,openOnFocus:!1,placeholder:`#4387f4`}),G=()=>(0,O.jsx)(Ye,{minH:`200dvh`,w:`full`,children:(0,O.jsx)(D,{closeOnScroll:!0,placeholder:`#4387f4`})}),K=()=>(0,O.jsx)(D,{openOnFocus:!1,placeholder:`#4387f4`}),q=()=>(0,O.jsx)(D,{openOnClick:!1,placeholder:`#4387f4`}),J=()=>(0,O.jsx)(D,{closeOnBlur:!1,placeholder:`#4387f4`}),Y=()=>(0,O.jsx)(D,{closeOnEsc:!1,placeholder:`#4387f4`}),X=()=>(0,O.jsx)(D,{placeholder:`#4387f4`,withEyeDropper:!1}),Z=()=>(0,O.jsx)(D,{allowInput:!1,placeholder:`#4387f4`}),Q=()=>(0,O.jsx)(D,{placeholder:`#4387f4`,withColorSwatch:!1}),wt=()=>(0,O.jsx)(tt,{variant:`stack`,rows:[`rounded`,`circle`,`square`],children:(e,t,n)=>(0,O.jsx)(D,{placeholder:`#4387f4`,selectorProps:{shape:t}},n)}),Tt=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsx)(D,{variant:e,disabled:!0,placeholder:i(e)},t)}),(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(x,{variant:e,disabled:!0,children:[(0,O.jsx)(b,{children:(0,O.jsx)(d,{})}),(0,O.jsx)(D,{placeholder:i(e)})]},t)}),(0,O.jsx)(_,{disabled:!0,label:`What is your favorite color?`,children:(0,O.jsx)(D,{placeholder:`#4387f4`})})]}),Et=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsx)(D,{variant:e,placeholder:i(e),readOnly:!0},t)}),(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(x,{variant:e,readOnly:!0,children:[(0,O.jsx)(b,{children:(0,O.jsx)(d,{})}),(0,O.jsx)(D,{placeholder:i(e)})]},t)}),(0,O.jsx)(_,{label:`What is your favorite color?`,readOnly:!0,children:(0,O.jsx)(D,{placeholder:`#4387f4`})})]}),Dt=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsx)(D,{variant:e,invalid:!0,placeholder:i(e)},t)}),(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(x,{variant:e,invalid:!0,children:[(0,O.jsx)(b,{children:(0,O.jsx)(d,{})}),(0,O.jsx)(D,{placeholder:i(e)})]},t)}),(0,O.jsx)(_,{errorMessage:`This is required.`,invalid:!0,label:`What is your favorite color?`,children:(0,O.jsx)(D,{placeholder:`#4387f4`})})]}),Ot=()=>(0,O.jsx)(C,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,O.jsxs)(x,{variant:e,children:[(0,O.jsx)(b,{children:(0,O.jsx)(d,{})}),(0,O.jsx)(D,{placeholder:i(e)})]},t)}),kt=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(D,{placeholder:`Default border color`}),(0,O.jsx)(D,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,O.jsx)(D,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,O.jsxs)(x,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,O.jsx)(b,{children:(0,O.jsx)(d,{})}),(0,O.jsx)(D,{placeholder:`Custom border color`})]})]}),At=()=>{let[e,t]=(0,xt.useState)(`#4387f4`);return(0,O.jsx)(D,{"aria-label":`Choose a color`,value:e,onChange:t})},jt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=rt();return(0,O.jsxs)($e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,O.jsx)(_,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,O.jsx)(it,{name:`colorPicker`,control:e,render:({field:e})=>(0,O.jsx)(D,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,O.jsx)(m,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=rt({defaultValues:{colorPicker:`#4387f4`}});return(0,O.jsxs)($e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,O.jsx)(_,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,O.jsx)(it,{name:`colorPicker`,control:e,render:({field:e})=>(0,O.jsx)(D,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,O.jsx)(m,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Mt=`Basic.Variant.Size.DefaultValue.Alpha.Format.Pattern.FormatInput.ColorSwatches.ColorSwatchGroupColumns.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledEyeDropper.DisallowInput.HiddenColorSwatch.Shape.Disabled.ReadOnly.Invalid.Addon.BorderColor.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...k.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...Ct.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...Q.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dt.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...Ot.parameters?.docs?.source}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`() => {
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
}`,...kt.parameters?.docs?.source}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...At.parameters?.docs?.source}}},jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`() => {
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
}`,...jt.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Nt();export{Ot as Addon,M as Alpha,B as AnimationScheme,k as Basic,H as BlockScrollOnMount,kt as BorderColor,W as CloseOnChange,G as CloseOnScroll,L as ColorSwatchGroupColumns,I as ColorSwatches,At as CustomControl,j as DefaultValue,Tt as Disabled,J as DisabledCloseOnBlur,Y as DisabledCloseOnEsc,X as DisabledEyeDropper,q as DisabledOpenOnClick,K as DisabledOpenOnFocus,Z as DisallowInput,N as Format,F as FormatInput,z as Gutter,Q as HiddenColorSwatch,Dt as Invalid,R as Offset,U as OpenOnChange,P as Pattern,V as Placement,jt as ReactHookForm,$ as ReactHookFormDefaultValue,Et as ReadOnly,wt as Shape,A as Size,Ct as Variant,Mt as __namedExportsOrder,St as default};