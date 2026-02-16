import{n as Pa,o as ka,I as ga,d as Sa,G as ba,a8 as va,r as c,M as Je,a9 as ja,g as Xe,h as C,m as qe,f as wa,a as ya,e as Fa,j as e,L as Ye,l as Oa,P as j,V as la,Q as ca,C as Ia}from"./iframe-Bh9OJiMa.js";import{P as Te}from"./props-table-Clbdh-et.js";import{u as ia,C as ua}from"./index.esm-kNUr14AM.js";import{d as p}from"./date-picker.style-DvehB2o3.js";import{n as Da}from"./native-select.style-BpE0TZDF.js";import{u as Ra}from"./index-0vnG2W0y.js";import{u as Ga}from"./index-43yi5QUG.js";import{u as Ba,C as Ea,P as Ta}from"./color-selector-bZR8bK9A.js";import{u as Aa,F as z}from"./use-field-props-B2_L45Q1.js";import{f as Va}from"./event-DM2KZhP3.js";import{u as Ma}from"./input-_rmp-yT3.js";import{C as za}from"./color-swatch-HzlrEBec.js";import{u as Ha}from"./group-BL2xRsYz.js";import{u as qa}from"./use-input-border-DIvm5bmb.js";import{P as La,a as Wa,b as _a}from"./popover-D_wSxUaV.js";import{I as G,a as Ze,b as H}from"./input-group-WyNQkowt.js";import{F}from"./for-Drx2NpVa.js";import{B as pa}from"./box-Bg2AiZ11.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DEBT4jh_.js";import"./grid-item-DglFRIPa.js";import"./flex-Cq9fG4Y2.js";import"./heading-D9jKM5Is.js";import"./autocomplete.style-DuN7pPNc.js";import"./menu.style-DqkOqEOk.js";import"./index-BDXUJR5o.js";import"./use-disclosure-BIhcLmn4.js";import"./saturation-slider-nHZ1wUqz.js";import"./hue-slider.style-Dt4wAzvz.js";import"./index-b8cEBJt_.js";import"./number-CcP_arM8.js";import"./hue-slider-BS9vHr0d.js";import"./index-IKP2hWx8.js";import"./use-breakpoint-Ccmb_yNp.js";import"./use-breakpoint-value-DH9gKxXR.js";import"./use-color-mode-value-1gZklRVD.js";import"./slider-Cet5Lmb2.js";import"./alpha-slider-C1WM2reZ.js";import"./index-DupE20-r.js";import"./index-Bzsm2wkF.js";import"./index-9337QP8d.js";import"./slide-fade-Dh-Frf9q.js";import"./transition-DnNDhiYV.js";import"./fade-scale-D-3hOjPB.js";/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ka=Pa("palette",$a),q=ka(ga)({as:Ka});var er,rr,or,ar,nr,sr,tr,lr,cr,ir,ur,pr;const Na=Sa({base:{...Da.base,colorSwatch:{w:"1.5em"},content:{maxW:"sm",p:"1"},eyeDropper:(er=p.base)==null?void 0:er.icon,field:(rr=p.base)==null?void 0:rr.field,input:(or=p.base)==null?void 0:or.input},variants:{filled:(ar=p.variants)==null?void 0:ar.filled,flushed:{...(nr=p.variants)==null?void 0:nr.flushed,root:{}},outline:(sr=p.variants)==null?void 0:sr.outline,plain:(tr=p.variants)==null?void 0:tr.plain},sizes:{xs:(lr=p.sizes)==null?void 0:lr.xs,sm:(cr=p.sizes)==null?void 0:cr.sm,md:(ir=p.sizes)==null?void 0:ir.md,lg:(ur=p.sizes)==null?void 0:ur.lg,xl:(pr=p.sizes)==null?void 0:pr.xl},defaultProps:{size:"md",variant:"outline"}}),Ua=r=>{const{t:a}=ba("colorPicker"),{props:{id:t,ref:m,name:P,"aria-label":x,"aria-labelledby":u,allowInput:l=!0,closeOnChange:W=!1,defaultValue:_,disabled:k,fallbackValue:B="#FFFFFF",format:Ae,formatInput:g,openOnChange:$=!0,openOnClick:K=!0,openOnFocus:S=!0,pattern:b,placeholder:N,readOnly:w,required:U,value:E,onChange:Ve,onInputChange:O,...Me},ariaProps:ze,dataProps:h,eventProps:He}=Aa(r),{interactive:f,open:T,getContentProps:Q,getTriggerProps:J,popoverProps:X,onClose:A,onOpen:i}=Ra({disabled:k,openOnClick:!1,openOnEnter:!l,openOnSpace:!l,placement:"end-start",readOnly:w,transferFocus:!1,...ze,...h,...He,...Me}),v=Ae??va(E??_??B),Y=v.endsWith("a"),V=c.useRef(null),M=c.useRef(null),I=c.useRef(null),D=c.useRef(!1),[y,d]=Ga({defaultValue:_,value:E,onChange:Ve}),{supported:We,onOpen:_e}=Ba(),$e=c.useCallback(()=>{var n;f&&(D.current=!0,l&&((n=I.current)==null||n.focus()),K&&i())},[l,f,i,K]),Z=c.useCallback(n=>{S&&(n.preventDefault(),n.stopPropagation())},[S]),Ke=c.useCallback(()=>{l||(S&&i(),D.current=!1)},[l,i,S]),Ne=c.useCallback(n=>{n.preventDefault(),n.stopPropagation(),S&&!D.current&&i(),D.current=!1},[i,S]),Ue=c.useCallback(n=>{Je(V.current,n.relatedTarget)||Je(M.current,n.relatedTarget)?n.preventDefault():d(s=>{if(!s)return s;let R=ja(s)(v);return R?(g&&(R=g(R)),b&&(R=R.replace(b,"")),R):s})},[v,g,b,d]),Qe=c.useCallback(n=>{if(!l)return;O==null||O(n),Xe(W,n)?A():Xe($,n)&&i();let s=n.target.value;g&&(s=g(s)),b&&(s=s.replace(b,"")),d(s)},[l,W,g,A,O,i,$,b,d]),ee=c.useCallback(async()=>{if(!f)return;const n=await _e();n!=null&&n.sRGBHex&&d(n.sRGBHex)},[f,_e,d]);c.useEffect(()=>{if(T)return Va(M.current,l?I.current:V.current)},[l,T]);const da=c.useCallback(n=>({...h,...n}),[h]),ma=c.useCallback(({ref:n,...s}={})=>J({ref:qe(n,V),"aria-haspopup":"dialog",tabIndex:l?-1:0,...s,onClick:C(s.onClick,$e),onFocus:C(s.onFocus,Ke),onMouseDown:C(s.onMouseDown,Z)}),[l,J,$e,Ke,Z]),ha=c.useCallback(({"aria-labelledby":n,...s}={})=>({id:t,ref:qe(s.ref,m,I),name:P,style:{...l?{}:{pointerEvents:"none"},...s.style},"aria-label":x,"aria-labelledby":wa(n,u),autoComplete:"off",disabled:k,placeholder:N,readOnly:w,required:U,tabIndex:l?0:-1,value:y,...h,...s,onBlur:C(s.onBlur,Ue),onChange:C(s.onChange,Qe),onFocus:C(s.onFocus,Ne),onMouseDown:C(s.onMouseDown,Z)}),[l,x,u,h,k,t,P,Ue,Qe,Ne,Z,N,w,m,U,y]),fa=c.useCallback((n={})=>({...h,"aria-disabled":Fa(!f),"aria-label":a("Pick a color"),hidden:!We,role:"button",tabIndex:f?0:-1,...n,onClick:C(n.onClick,ee),onKeyDown:C(n.onKeyDown,s=>ya(s,{Enter:ee,Space:ee}))}),[h,f,ee,We,a]),Ca=c.useCallback(({ref:n,...s}={})=>Q({ref:qe(n,M),role:"dialog",...s}),[Q]),xa=c.useCallback((n={})=>({disabled:k,fallbackValue:B,format:v,readOnly:w,value:y,...n,onChange:C(n.onChange,d)}),[k,B,v,w,y,d]);return{alpha:Y,format:v,interactive:f,open:T,setValue:d,value:y,getContentProps:Ca,getEyeDropperProps:fa,getFieldProps:ma,getInputProps:ha,getRootProps:da,getSelectorProps:xa,popoverProps:X,onClose:A,onOpen:i}},{ComponentContext:Qa,useComponentContext:Le,withContext:L,withProvider:Ja}=Oa("color-picker",Na),o=Ja(r=>{const[a,{className:t,css:m,colorScheme:P,size:x,animationScheme:u="block-start",colorSwatches:l,colorSwatchGroupColumns:W,colorSwatchGroupLabel:_,duration:k,errorBorderColor:B,focusBorderColor:Ae,withColorSwatch:g=!0,withEyeDropper:$=!0,alphaSliderProps:K,colorSwatchGroupLabelProps:S,colorSwatchGroupProps:b,colorSwatchItemProps:N,colorSwatchProps:w,contentProps:U,elementProps:E,endElementProps:Ve,eyeDropperProps:O,fieldProps:Me,hueSliderProps:ze,inputProps:h,rootProps:He,saturationSliderProps:f,selectorProps:T,startElementProps:Q,...J}]=Ha(r),{value:X,getContentProps:A,getEyeDropperProps:i,getFieldProps:v,getInputProps:Y,getRootProps:V,getSelectorProps:M,popoverProps:I}=Ua(J),D=c.useMemo(()=>({animationScheme:u,duration:k,...I}),[u,k,I]),y=qa({errorBorderColor:B,focusBorderColor:Ae}),d=c.useMemo(()=>({value:X,getEyeDropperProps:i,getInputProps:Y,inputProps:h}),[i,Y,h,X]);return e.jsx(Qa,{value:d,children:e.jsxs(La,{...D,children:[e.jsxs(G,{className:t,css:m,colorScheme:P,...V({...a,...He}),children:[g?e.jsx(Ze,{...E,...Q,children:e.jsx(Za,{...w})}):null,e.jsx(Wa,{children:e.jsx(Xa,{...v({...y,...Me})})}),$?e.jsx(Ze,{clickable:!0,...E,...Ve,children:e.jsx(en,{...i(O)})}):null]}),e.jsx(rn,{...Ye(A(Ye(U))),children:e.jsx(Ea,{size:x,...M({colorSwatches:l,colorSwatchGroupColumns:W,colorSwatchGroupLabel:_,alphaSliderProps:K,colorSwatchGroupLabelProps:S,colorSwatchGroupProps:b,colorSwatchItemProps:N,hueSliderProps:ze,saturationSliderProps:f,...T})})})]})})},"root",{transferProps:["size"]})(r=>({...Ma(),...r})),Xa=L("div","field")({"data-group-propagate":""},r=>{const{getInputProps:a,inputProps:t}=Le();return{children:e.jsx(Ya,{...a(t)}),...r}}),Ya=L("input","input")(),Za=L(za,"colorSwatch")(void 0,r=>{const{value:a}=Le();return{variant:"circle",color:a,...r}}),en=L("div","eyeDropper")(void 0,({children:r,icon:a,...t})=>{const{getEyeDropperProps:m}=Le();return m({children:a||r||e.jsx(Ta,{}),...t})}),rn=L(_a,"content")(),Nn={component:o,title:"Components / ColorPicker"},re=()=>e.jsx(o,{placeholder:"#4387f4"}),oe=()=>e.jsx(Te,{variant:"stack",columns:["outline","filled","flushed"],rows:Ia,children:(r,a,t)=>e.jsx(o,{colorScheme:a,variant:r,placeholder:j(r)},t)}),ae=()=>e.jsx(Te,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,a,t)=>e.jsx(o,{size:r,variant:a,placeholder:`Size (${r})`},t)}),ne=()=>e.jsx(o,{defaultValue:"#4387f4",placeholder:"#4387f4"}),se=()=>e.jsx(o,{defaultValue:"#775999A0",placeholder:"#775999A0"}),te=()=>e.jsx(Te,{variant:"stack",rows:["hex","hexa","rgb","rgba","hsl","hsla"],children:(r,a,t)=>e.jsx(o,{format:a,placeholder:`Format (${a})`},t)}),le=()=>e.jsx(o,{pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387f4"}),ce=()=>e.jsx(o,{formatInput:r=>r.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387F4"}),ie=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),ue=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),pe=()=>e.jsx(o,{offset:[16,16],placeholder:"#4387f4"}),de=()=>e.jsx(o,{gutter:16,placeholder:"#4387f4"}),me=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4"}),he=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4",placement:"center-end",rootProps:{w:"xs"}}),fe=()=>e.jsx(pa,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,placeholder:"#4387f4"})}),Ce=()=>e.jsx(o,{openOnChange:r=>r.target.value.length>1,openOnFocus:!1,placeholder:"#4387f4"}),xe=()=>e.jsx(o,{closeOnChange:r=>!r.target.value.length,openOnFocus:!1,placeholder:"#4387f4"}),Pe=()=>e.jsx(pa,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,placeholder:"#4387f4"})}),ke=()=>e.jsx(o,{openOnFocus:!1,placeholder:"#4387f4"}),ge=()=>e.jsx(o,{openOnClick:!1,placeholder:"#4387f4"}),Se=()=>e.jsx(o,{closeOnBlur:!1,placeholder:"#4387f4"}),be=()=>e.jsx(o,{closeOnEsc:!1,placeholder:"#4387f4"}),ve=()=>e.jsx(o,{placeholder:"#4387f4",withEyeDropper:!1}),je=()=>e.jsx(o,{allowInput:!1,placeholder:"#4387f4"}),we=()=>e.jsx(o,{placeholder:"#4387f4",withColorSwatch:!1}),ye=()=>e.jsx(Te,{variant:"stack",rows:["rounded","circle","square"],children:(r,a,t)=>e.jsx(o,{placeholder:"#4387f4",selectorProps:{shape:a}},t)}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,disabled:!0,placeholder:j(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(G,{variant:r,disabled:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},a)}),e.jsx(z,{disabled:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,placeholder:j(r),readOnly:!0},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(G,{variant:r,readOnly:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},a)}),e.jsx(z,{label:"What is your favorite color?",readOnly:!0,children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsx(o,{variant:r,invalid:!0,placeholder:j(r)},a)}),e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(G,{variant:r,invalid:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},a)}),e.jsx(z,{errorMessage:"This is required.",invalid:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),De=()=>e.jsx(F,{each:["outline","filled","flushed"],children:(r,a)=>e.jsxs(G,{variant:r,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},a)}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(G,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),Ge=()=>{const[r,a]=c.useState("#4387f4");return e.jsx(o,{"aria-label":"Choose a color",value:r,onChange:a})},Be=()=>{var x;const{control:r,formState:{errors:a},handleSubmit:t,watch:m}=ia(),P=u=>console.log("submit:",u);return console.log("watch:",m()),e.jsxs(la,{as:"form",onSubmit:t(P),children:[e.jsx(z,{errorMessage:(x=a.colorPicker)==null?void 0:x.message,invalid:!!a.colorPicker,label:"What is your favorite color?",children:e.jsx(ua,{name:"colorPicker",control:r,render:({field:u})=>e.jsx(o,{...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ca,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var u;const r={colorPicker:"#4387f4"},{control:a,formState:{errors:t},handleSubmit:m,watch:P}=ia({defaultValues:r}),x=l=>console.log("submit:",l);return console.log("watch:",P()),e.jsxs(la,{as:"form",onSubmit:m(x),children:[e.jsx(z,{errorMessage:(u=t.colorPicker)==null?void 0:u.message,invalid:!!t.colorPicker,label:"What is your favorite color?",children:e.jsx(ua,{name:"colorPicker",control:a,render:({field:l})=>e.jsx(o,{...l}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ca,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var dr,mr,hr;re.parameters={...re.parameters,docs:{...(dr=re.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(hr=(mr=re.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var fr,Cr,xr;oe.parameters={...oe.parameters,docs:{...(fr=oe.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...(xr=(Cr=oe.parameters)==null?void 0:Cr.docs)==null?void 0:xr.source}}};var Pr,kr,gr;ae.parameters={...ae.parameters,docs:{...(Pr=ae.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...(gr=(kr=ae.parameters)==null?void 0:kr.docs)==null?void 0:gr.source}}};var Sr,br,vr;ne.parameters={...ne.parameters,docs:{...(Sr=ne.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...(vr=(br=ne.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var jr,wr,yr;se.parameters={...se.parameters,docs:{...(jr=se.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...(yr=(wr=se.parameters)==null?void 0:wr.docs)==null?void 0:yr.source}}};var Fr,Or,Ir;te.parameters={...te.parameters,docs:{...(Fr=te.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...(Ir=(Or=te.parameters)==null?void 0:Or.docs)==null?void 0:Ir.source}}};var Dr,Rr,Gr;le.parameters={...le.parameters,docs:{...(Dr=le.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...(Gr=(Rr=le.parameters)==null?void 0:Rr.docs)==null?void 0:Gr.source}}};var Br,Er,Tr;ce.parameters={...ce.parameters,docs:{...(Br=ce.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...(Tr=(Er=ce.parameters)==null?void 0:Er.docs)==null?void 0:Tr.source}}};var Ar,Vr,Mr;ie.parameters={...ie.parameters,docs:{...(Ar=ie.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...(Mr=(Vr=ie.parameters)==null?void 0:Vr.docs)==null?void 0:Mr.source}}};var zr,Hr,qr;ue.parameters={...ue.parameters,docs:{...(zr=ue.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...(qr=(Hr=ue.parameters)==null?void 0:Hr.docs)==null?void 0:qr.source}}};var Lr,Wr,_r;pe.parameters={...pe.parameters,docs:{...(Lr=pe.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...(_r=(Wr=pe.parameters)==null?void 0:Wr.docs)==null?void 0:_r.source}}};var $r,Kr,Nr;de.parameters={...de.parameters,docs:{...($r=de.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...(Nr=(Kr=de.parameters)==null?void 0:Kr.docs)==null?void 0:Nr.source}}};var Ur,Qr,Jr;me.parameters={...me.parameters,docs:{...(Ur=me.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...(Jr=(Qr=me.parameters)==null?void 0:Qr.docs)==null?void 0:Jr.source}}};var Xr,Yr,Zr;he.parameters={...he.parameters,docs:{...(Xr=he.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...(Zr=(Yr=he.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var eo,ro,oo;fe.parameters={...fe.parameters,docs:{...(eo=fe.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...(oo=(ro=fe.parameters)==null?void 0:ro.docs)==null?void 0:oo.source}}};var ao,no,so;Ce.parameters={...Ce.parameters,docs:{...(ao=Ce.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...(so=(no=Ce.parameters)==null?void 0:no.docs)==null?void 0:so.source}}};var to,lo,co;xe.parameters={...xe.parameters,docs:{...(to=xe.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...(co=(lo=xe.parameters)==null?void 0:lo.docs)==null?void 0:co.source}}};var io,uo,po;Pe.parameters={...Pe.parameters,docs:{...(io=Pe.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...(po=(uo=Pe.parameters)==null?void 0:uo.docs)==null?void 0:po.source}}};var mo,ho,fo;ke.parameters={...ke.parameters,docs:{...(mo=ke.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...(fo=(ho=ke.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var Co,xo,Po;ge.parameters={...ge.parameters,docs:{...(Co=ge.parameters)==null?void 0:Co.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...(Po=(xo=ge.parameters)==null?void 0:xo.docs)==null?void 0:Po.source}}};var ko,go,So;Se.parameters={...Se.parameters,docs:{...(ko=Se.parameters)==null?void 0:ko.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...(So=(go=Se.parameters)==null?void 0:go.docs)==null?void 0:So.source}}};var bo,vo,jo;be.parameters={...be.parameters,docs:{...(bo=be.parameters)==null?void 0:bo.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...(jo=(vo=be.parameters)==null?void 0:vo.docs)==null?void 0:jo.source}}};var wo,yo,Fo;ve.parameters={...ve.parameters,docs:{...(wo=ve.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...(Fo=(yo=ve.parameters)==null?void 0:yo.docs)==null?void 0:Fo.source}}};var Oo,Io,Do;je.parameters={...je.parameters,docs:{...(Oo=je.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...(Do=(Io=je.parameters)==null?void 0:Io.docs)==null?void 0:Do.source}}};var Ro,Go,Bo;we.parameters={...we.parameters,docs:{...(Ro=we.parameters)==null?void 0:Ro.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...(Bo=(Go=we.parameters)==null?void 0:Go.docs)==null?void 0:Bo.source}}};var Eo,To,Ao;ye.parameters={...ye.parameters,docs:{...(Eo=ye.parameters)==null?void 0:Eo.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...(Ao=(To=ye.parameters)==null?void 0:To.docs)==null?void 0:Ao.source}}};var Vo,Mo,zo;Fe.parameters={...Fe.parameters,docs:{...(Vo=Fe.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
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
}`,...(zo=(Mo=Fe.parameters)==null?void 0:Mo.docs)==null?void 0:zo.source}}};var Ho,qo,Lo;Oe.parameters={...Oe.parameters,docs:{...(Ho=Oe.parameters)==null?void 0:Ho.docs,source:{originalSource:`() => {
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
}`,...(Lo=(qo=Oe.parameters)==null?void 0:qo.docs)==null?void 0:Lo.source}}};var Wo,_o,$o;Ie.parameters={...Ie.parameters,docs:{...(Wo=Ie.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
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
}`,...($o=(_o=Ie.parameters)==null?void 0:_o.docs)==null?void 0:$o.source}}};var Ko,No,Uo;De.parameters={...De.parameters,docs:{...(Ko=De.parameters)==null?void 0:Ko.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...(Uo=(No=De.parameters)==null?void 0:No.docs)==null?void 0:Uo.source}}};var Qo,Jo,Xo;Re.parameters={...Re.parameters,docs:{...(Qo=Re.parameters)==null?void 0:Qo.docs,source:{originalSource:`() => {
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
}`,...(Xo=(Jo=Re.parameters)==null?void 0:Jo.docs)==null?void 0:Xo.source}}};var Yo,Zo,ea;Ge.parameters={...Ge.parameters,docs:{...(Yo=Ge.parameters)==null?void 0:Yo.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...(ea=(Zo=Ge.parameters)==null?void 0:Zo.docs)==null?void 0:ea.source}}};var ra,oa,aa;Be.parameters={...Be.parameters,docs:{...(ra=Be.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
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
}`,...(aa=(oa=Be.parameters)==null?void 0:oa.docs)==null?void 0:aa.source}}};var na,sa,ta;Ee.parameters={...Ee.parameters,docs:{...(na=Ee.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
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
}`,...(ta=(sa=Ee.parameters)==null?void 0:sa.docs)==null?void 0:ta.source}}};const Un=["Basic","Variant","Size","DefaultValue","Alpha","Format","Pattern","FormatInput","ColorSwatches","ColorSwatchGroupColumns","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledEyeDropper","DisallowInput","HiddenColorSwatch","Shape","Disabled","ReadOnly","Invalid","Addon","BorderColor","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{De as Addon,se as Alpha,me as AnimationScheme,re as Basic,fe as BlockScrollOnMount,Re as BorderColor,xe as CloseOnChange,Pe as CloseOnScroll,ue as ColorSwatchGroupColumns,ie as ColorSwatches,Ge as CustomControl,ne as DefaultValue,Fe as Disabled,Se as DisabledCloseOnBlur,be as DisabledCloseOnEsc,ve as DisabledEyeDropper,ge as DisabledOpenOnClick,ke as DisabledOpenOnFocus,je as DisallowInput,te as Format,ce as FormatInput,de as Gutter,we as HiddenColorSwatch,Ie as Invalid,pe as Offset,Ce as OpenOnChange,le as Pattern,he as Placement,Be as ReactHookForm,Ee as ReactHookFormDefaultValue,Oe as ReadOnly,ye as Shape,ae as Size,oe as Variant,Un as __namedExportsOrder,Nn as default};
