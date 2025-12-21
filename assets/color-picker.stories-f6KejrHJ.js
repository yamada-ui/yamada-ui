import{n as Ca,o as xa,I as Pa,d as ka,G as ga,a8 as Sa,r as l,M as Ue,a9 as ba,k as Qe,h as f,m as qe,e as va,a as ja,g as wa,j as e,L as Je,C as Fa,P as j,V as sa,Q as ta}from"./iframe-LqombrNM.js";import{P as Te}from"./props-table-P2PnH6mP.js";import{u as la,C as ca}from"./index.esm-BeCx6Kqd.js";import{d as p}from"./date-picker.style-M81Td4Pn.js";import{n as ya}from"./native-select.style-D9J-8flC.js";import{u as Oa}from"./index-iMSeTjv1.js";import{u as Ia}from"./index-CQhAjkmY.js";import{u as Da,C as Ra,P as Ga}from"./color-selector-DroVbZKl.js";import{u as Ba,F as z}from"./use-field-props-DcPw9IyF.js";import{f as Ea}from"./event-D-3VQY0U.js";import{u as Ta}from"./input-C1l8gPiv.js";import{C as Aa}from"./color-swatch-B9SEi_7T.js";import{u as Va}from"./group-DdV_q8Ch.js";import{u as Ma}from"./use-input-border-50s9ZO4y.js";import{P as za,a as Ha,b as qa}from"./popover-Bx00K3yI.js";import{I as G,a as Xe,b as H}from"./input-group-BCn0cqjr.js";import{B as ia}from"./box-SUOSHoaG.js";import{F as O}from"./for-CkWl_ugB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DFOS9khk.js";import"./grid-item-BVQQuAHt.js";import"./flex-ksADg7SB.js";import"./heading-Bq_Y6181.js";import"./autocomplete.style-CC0QPVhJ.js";import"./menu.style-ksj8NPYk.js";import"./index-TVThtt6d.js";import"./use-disclosure-CW_ifDRS.js";import"./saturation-slider-BghClI6y.js";import"./hue-slider.style-CBf74bt9.js";import"./index-B-sBeiPC.js";import"./number-CcP_arM8.js";import"./hue-slider-B89NNxxo.js";import"./index-CM3S4n_z.js";import"./use-breakpoint-Cd5iIj4S.js";import"./use-breakpoint-value-hp_pLYBn.js";import"./use-color-mode-value-C3KP8KHB.js";import"./slider-oKSNxLQs.js";import"./alpha-slider-yMqZt93t.js";import"./index-D780x7qd.js";import"./index-M5PhJsdN.js";import"./index-B7EzJSmA.js";import"./slide-fade-ZcI84wwv.js";import"./transition-pNAeQrmt.js";import"./fade-scale-CZ8HZCaL.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],La=Ca("palette",Wa),q=xa(Pa)({as:La});var Ye,Ze,er,rr,or,ar,nr,sr,tr,lr,cr,ir;const _a=ka({base:{...ya.base,colorSwatch:{w:"1.5em"},content:{maxW:"sm",p:"1"},eyeDropper:(Ye=p.base)==null?void 0:Ye.icon,field:(Ze=p.base)==null?void 0:Ze.field,input:(er=p.base)==null?void 0:er.input},variants:{filled:(rr=p.variants)==null?void 0:rr.filled,flushed:{...(or=p.variants)==null?void 0:or.flushed,root:{}},outline:(ar=p.variants)==null?void 0:ar.outline,plain:(nr=p.variants)==null?void 0:nr.plain},sizes:{xs:(sr=p.sizes)==null?void 0:sr.xs,sm:(tr=p.sizes)==null?void 0:tr.sm,md:(lr=p.sizes)==null?void 0:lr.md,lg:(cr=p.sizes)==null?void 0:cr.lg,xl:(ir=p.sizes)==null?void 0:ir.xl},defaultProps:{size:"md",variant:"outline"}}),$a=r=>{const{t:n}=ga("colorPicker"),{props:{id:t,ref:h,name:x,allowInput:s=!0,closeOnChange:i=!1,defaultValue:P,disabled:w,fallbackValue:B="#FFFFFF",format:L,formatInput:k,openOnChange:_=!0,openOnClick:$=!0,openOnFocus:g=!0,pattern:S,placeholder:K,readOnly:F,required:N,value:U,onChange:Ae,onInputChange:y,...Ve},ariaProps:Me,dataProps:C,eventProps:ze}=Ba(r),{interactive:d,open:E,getContentProps:Q,getTriggerProps:J,popoverProps:He,onClose:T,onOpen:u}=Oa({disabled:w,openOnClick:!1,openOnEnter:!s,openOnSpace:!s,placement:"end-start",readOnly:F,transferFocus:!1,...Me,...C,...ze,...Ve}),b=L??Sa(U??P??B),A=b.endsWith("a"),V=l.useRef(null),I=l.useRef(null),M=l.useRef(null),D=l.useRef(!1),[v,m]=Ia({defaultValue:P,value:U,onChange:Ae}),{supported:X,onOpen:Y}=Da(),Le=l.useCallback(()=>{var a;d&&(D.current=!0,s&&((a=M.current)==null||a.focus()),$&&u())},[s,d,u,$]),Z=l.useCallback(a=>{g&&(a.preventDefault(),a.stopPropagation())},[g]),_e=l.useCallback(()=>{s||(g&&u(),D.current=!1)},[s,u,g]),$e=l.useCallback(a=>{a.preventDefault(),a.stopPropagation(),g&&!D.current&&u(),D.current=!1},[u,g]),Ke=l.useCallback(a=>{Ue(V.current,a.relatedTarget)||Ue(I.current,a.relatedTarget)?a.preventDefault():m(c=>{if(!c)return c;let R=ba(c)(b);return R?(k&&(R=k(R)),S&&(R=R.replace(S,"")),R):c})},[b,k,S,m]),Ne=l.useCallback(a=>{if(!s)return;y==null||y(a),Qe(i,a)?T():Qe(_,a)&&u();let c=a.target.value;k&&(c=k(c)),S&&(c=c.replace(S,"")),m(c)},[s,i,k,T,y,u,_,S,m]),ee=l.useCallback(async()=>{if(!d)return;const a=await Y();a!=null&&a.sRGBHex&&m(a.sRGBHex)},[d,Y,m]);l.useEffect(()=>{if(E)return Ea(I.current,s?M.current:V.current)},[s,E]);const ua=l.useCallback(a=>({...C,...a}),[C]),pa=l.useCallback(({ref:a,...c}={})=>J({ref:qe(a,V),"aria-haspopup":"dialog",tabIndex:s?-1:0,...c,onClick:f(c.onClick,Le),onFocus:f(c.onFocus,_e),onMouseDown:f(c.onMouseDown,Z)}),[s,J,Le,_e,Z]),da=l.useCallback((a={})=>({id:t,ref:qe(a.ref,h,M),name:x,style:{...s?{}:{pointerEvents:"none"},...a.style},autoComplete:"off",disabled:w,placeholder:K,readOnly:F,required:N,tabIndex:s?0:-1,value:v,...C,...a,onBlur:f(a.onBlur,Ke),onChange:f(a.onChange,Ne),onFocus:f(a.onFocus,$e),onMouseDown:f(a.onMouseDown,Z)}),[s,C,w,t,x,Ke,Ne,$e,Z,K,F,h,N,v]),ma=l.useCallback((a={})=>({...C,"aria-disabled":va(!d),"aria-label":n("Pick a color"),hidden:!X,role:"button",tabIndex:d?0:-1,...a,onClick:f(a.onClick,ee),onKeyDown:f(a.onKeyDown,c=>ja(c,{Enter:ee,Space:ee}))}),[C,d,ee,X,n]),ha=l.useCallback(({ref:a,...c}={})=>Q({ref:qe(a,I),role:"dialog",...c}),[Q]),fa=l.useCallback((a={})=>({disabled:w,fallbackValue:B,format:b,readOnly:F,value:v,...a,onChange:f(a.onChange,m)}),[w,B,b,F,v,m]);return{alpha:A,format:b,interactive:d,open:E,setValue:m,value:v,getContentProps:ha,getEyeDropperProps:ma,getFieldProps:pa,getInputProps:da,getRootProps:ua,getSelectorProps:fa,popoverProps:He,onClose:T,onOpen:u}},{ComponentContext:Ka,useComponentContext:We,withContext:W,withProvider:Na}=wa("color-picker",_a),o=Na(r=>{const[n,{className:t,css:h,colorScheme:x,size:s,animationScheme:i="block-start",colorSwatches:P,colorSwatchGroupColumns:w,colorSwatchGroupLabel:B,duration:L,errorBorderColor:k,focusBorderColor:_,withColorSwatch:$=!0,withEyeDropper:g=!0,alphaSliderProps:S,colorSwatchGroupLabelProps:K,colorSwatchGroupProps:F,colorSwatchItemProps:N,colorSwatchProps:U,contentProps:Ae,elementProps:y,endElementProps:Ve,eyeDropperProps:Me,fieldProps:C,hueSliderProps:ze,inputProps:d,rootProps:E,saturationSliderProps:Q,selectorProps:J,startElementProps:He,...T}]=Va(r),{value:u,getContentProps:b,getEyeDropperProps:A,getFieldProps:V,getInputProps:I,getRootProps:M,getSelectorProps:D,popoverProps:v}=$a(T),m=l.useMemo(()=>({animationScheme:i,duration:L,...v}),[i,L,v]),X=Ma({errorBorderColor:k,focusBorderColor:_}),Y=l.useMemo(()=>({value:u,getEyeDropperProps:A,getInputProps:I,inputProps:d}),[A,I,d,u]);return e.jsx(Ka,{value:Y,children:e.jsxs(za,{...m,children:[e.jsxs(G,{className:t,css:h,colorScheme:x,...M({...n,...E}),children:[$?e.jsx(Xe,{...y,...He,children:e.jsx(Ja,{...U})}):null,e.jsx(Ha,{children:e.jsx(Ua,{...V({...X,...C})})}),g?e.jsx(Xe,{clickable:!0,...y,...Ve,children:e.jsx(Xa,{...A(Me)})}):null]}),e.jsx(Ya,{...Je(b(Je(Ae))),children:e.jsx(Ra,{size:s,...D({colorSwatches:P,colorSwatchGroupColumns:w,colorSwatchGroupLabel:B,alphaSliderProps:S,colorSwatchGroupLabelProps:K,colorSwatchGroupProps:F,colorSwatchItemProps:N,hueSliderProps:ze,saturationSliderProps:Q,...J})})})]})})},"root",{transferProps:["size"]})(r=>({...Ta(),...r})),Ua=W("div","field")({"data-group-propagate":""},r=>{const{getInputProps:n,inputProps:t}=We();return{children:e.jsx(Qa,{...n(t)}),...r}}),Qa=W("input","input")(),Ja=W(Aa,"colorSwatch")(void 0,r=>{const{value:n}=We();return{variant:"circle",color:n,...r}}),Xa=W("div","eyeDropper")(void 0,({children:r,icon:n,...t})=>{const{getEyeDropperProps:h}=We();return h({children:n||r||e.jsx(Ga,{}),...t})}),Ya=W(qa,"content")(),_n={component:o,title:"Components / ColorPicker"},re=()=>e.jsx(o,{placeholder:"#4387f4"}),oe=()=>e.jsx(Te,{variant:"stack",columns:["outline","filled","flushed"],rows:Fa,children:(r,n,t)=>e.jsx(o,{colorScheme:n,variant:r,placeholder:j(r)},t)}),ae=()=>e.jsx(Te,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,t)=>e.jsx(o,{size:r,variant:n,placeholder:`Size (${r})`},t)}),ne=()=>e.jsx(o,{defaultValue:"#4387f4",placeholder:"#4387f4"}),se=()=>e.jsx(o,{defaultValue:"#775999A0",placeholder:"#775999A0"}),te=()=>e.jsx(Te,{variant:"stack",rows:["hex","hexa","rgb","rgba","hsl","hsla"],children:(r,n,t)=>e.jsx(o,{format:n,placeholder:`Format (${n})`},t)}),le=()=>e.jsx(o,{pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387f4"}),ce=()=>e.jsx(o,{formatInput:r=>r.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:"#4387F4"}),ie=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(45, 100%, 50%)","hsl(90, 100%, 50%)","hsl(135, 100%, 50%)","hsl(180, 100%, 50%)","hsl(225, 100%, 50%)","hsl(270, 100%, 50%)","hsl(315, 100%, 50%)"],colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),ue=()=>e.jsx(o,{colorSwatches:["hsl(0, 100%, 50%)","hsl(36, 100%, 50%)","hsl(72, 100%, 50%)","hsl(108, 100%, 50%)","hsl(144, 100%, 50%)","hsl(180, 100%, 50%)","hsl(216, 100%, 50%)","hsl(252, 100%, 50%)","hsl(288, 100%, 50%)","hsl(324, 100%, 50%)"],colorSwatchGroupColumns:10,colorSwatchGroupLabel:"Pick a color",placeholder:"#4387f4"}),pe=()=>e.jsx(o,{offset:[16,16],placeholder:"#4387f4"}),de=()=>e.jsx(o,{gutter:16,placeholder:"#4387f4"}),me=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4"}),he=()=>e.jsx(o,{animationScheme:"inline-start",placeholder:"#4387f4",placement:"center-end",rootProps:{w:"xs"}}),fe=()=>e.jsx(ia,{minH:"200dvh",w:"full",children:e.jsx(o,{blockScrollOnMount:!0,placeholder:"#4387f4"})}),Ce=()=>e.jsx(o,{openOnChange:r=>r.target.value.length>1,openOnFocus:!1,placeholder:"#4387f4"}),xe=()=>e.jsx(o,{closeOnChange:r=>!r.target.value.length,openOnFocus:!1,placeholder:"#4387f4"}),Pe=()=>e.jsx(ia,{minH:"200dvh",w:"full",children:e.jsx(o,{closeOnScroll:!0,placeholder:"#4387f4"})}),ke=()=>e.jsx(o,{openOnFocus:!1,placeholder:"#4387f4"}),ge=()=>e.jsx(o,{openOnClick:!1,placeholder:"#4387f4"}),Se=()=>e.jsx(o,{closeOnBlur:!1,placeholder:"#4387f4"}),be=()=>e.jsx(o,{closeOnEsc:!1,placeholder:"#4387f4"}),ve=()=>e.jsx(o,{placeholder:"#4387f4",withEyeDropper:!1}),je=()=>e.jsx(o,{allowInput:!1,placeholder:"#4387f4"}),we=()=>e.jsx(o,{placeholder:"#4387f4",withColorSwatch:!1}),Fe=()=>e.jsx(Te,{variant:"stack",rows:["rounded","circle","square"],children:(r,n,t)=>e.jsx(o,{placeholder:"#4387f4",selectorProps:{shape:n}},t)}),ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,disabled:!0,placeholder:j(r)},n)}),e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(G,{variant:r,disabled:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},n)}),e.jsx(z,{disabled:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,placeholder:j(r),readOnly:!0},n)}),e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(G,{variant:r,readOnly:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},n)}),e.jsx(z,{label:"What is your favorite color?",readOnly:!0,children:e.jsx(o,{placeholder:"#4387f4"})})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,invalid:!0,placeholder:j(r)},n)}),e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(G,{variant:r,invalid:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},n)}),e.jsx(z,{errorMessage:"This is required.",invalid:!0,label:"What is your favorite color?",children:e.jsx(o,{placeholder:"#4387f4"})})]}),De=()=>e.jsx(O,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(G,{variant:r,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:j(r)})]},n)}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(G,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(H,{children:e.jsx(q,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),Ge=()=>{const[r,n]=l.useState("#4387f4");return e.jsx(o,{value:r,onChange:n})},Be=()=>{var s;const{control:r,formState:{errors:n},handleSubmit:t,watch:h}=la(),x=i=>console.log("submit:",i);return console.log("watch:",h()),e.jsxs(sa,{as:"form",onSubmit:t(x),children:[e.jsx(z,{errorMessage:(s=n.colorPicker)==null?void 0:s.message,invalid:!!n.colorPicker,label:"What is your favorite color?",children:e.jsx(ca,{name:"colorPicker",control:r,render:({field:i})=>e.jsx(o,{...i}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ta,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var i;const r={colorPicker:"#4387f4"},{control:n,formState:{errors:t},handleSubmit:h,watch:x}=la({defaultValues:r}),s=P=>console.log("submit:",P);return console.log("watch:",x()),e.jsxs(sa,{as:"form",onSubmit:h(s),children:[e.jsx(z,{errorMessage:(i=t.colorPicker)==null?void 0:i.message,invalid:!!t.colorPicker,label:"What is your favorite color?",children:e.jsx(ca,{name:"colorPicker",control:n,render:({field:P})=>e.jsx(o,{...P}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ta,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ur,pr,dr;re.parameters={...re.parameters,docs:{...(ur=re.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...(dr=(pr=re.parameters)==null?void 0:pr.docs)==null?void 0:dr.source}}};var mr,hr,fr;oe.parameters={...oe.parameters,docs:{...(mr=oe.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...(fr=(hr=oe.parameters)==null?void 0:hr.docs)==null?void 0:fr.source}}};var Cr,xr,Pr;ae.parameters={...ae.parameters,docs:{...(Cr=ae.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...(Pr=(xr=ae.parameters)==null?void 0:xr.docs)==null?void 0:Pr.source}}};var kr,gr,Sr;ne.parameters={...ne.parameters,docs:{...(kr=ne.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...(Sr=(gr=ne.parameters)==null?void 0:gr.docs)==null?void 0:Sr.source}}};var br,vr,jr;se.parameters={...se.parameters,docs:{...(br=se.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...(jr=(vr=se.parameters)==null?void 0:vr.docs)==null?void 0:jr.source}}};var wr,Fr,yr;te.parameters={...te.parameters,docs:{...(wr=te.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...(yr=(Fr=te.parameters)==null?void 0:Fr.docs)==null?void 0:yr.source}}};var Or,Ir,Dr;le.parameters={...le.parameters,docs:{...(Or=le.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...(Dr=(Ir=le.parameters)==null?void 0:Ir.docs)==null?void 0:Dr.source}}};var Rr,Gr,Br;ce.parameters={...ce.parameters,docs:{...(Rr=ce.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...(Br=(Gr=ce.parameters)==null?void 0:Gr.docs)==null?void 0:Br.source}}};var Er,Tr,Ar;ie.parameters={...ie.parameters,docs:{...(Er=ie.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...(Ar=(Tr=ie.parameters)==null?void 0:Tr.docs)==null?void 0:Ar.source}}};var Vr,Mr,zr;ue.parameters={...ue.parameters,docs:{...(Vr=ue.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...(zr=(Mr=ue.parameters)==null?void 0:Mr.docs)==null?void 0:zr.source}}};var Hr,qr,Wr;pe.parameters={...pe.parameters,docs:{...(Hr=pe.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...(Wr=(qr=pe.parameters)==null?void 0:qr.docs)==null?void 0:Wr.source}}};var Lr,_r,$r;de.parameters={...de.parameters,docs:{...(Lr=de.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...($r=(_r=de.parameters)==null?void 0:_r.docs)==null?void 0:$r.source}}};var Kr,Nr,Ur;me.parameters={...me.parameters,docs:{...(Kr=me.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...(Ur=(Nr=me.parameters)==null?void 0:Nr.docs)==null?void 0:Ur.source}}};var Qr,Jr,Xr;he.parameters={...he.parameters,docs:{...(Qr=he.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...(Xr=(Jr=he.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var Yr,Zr,eo;fe.parameters={...fe.parameters,docs:{...(Yr=fe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...(eo=(Zr=fe.parameters)==null?void 0:Zr.docs)==null?void 0:eo.source}}};var ro,oo,ao;Ce.parameters={...Ce.parameters,docs:{...(ro=Ce.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...(ao=(oo=Ce.parameters)==null?void 0:oo.docs)==null?void 0:ao.source}}};var no,so,to;xe.parameters={...xe.parameters,docs:{...(no=xe.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...(to=(so=xe.parameters)==null?void 0:so.docs)==null?void 0:to.source}}};var lo,co,io;Pe.parameters={...Pe.parameters,docs:{...(lo=Pe.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...(io=(co=Pe.parameters)==null?void 0:co.docs)==null?void 0:io.source}}};var uo,po,mo;ke.parameters={...ke.parameters,docs:{...(uo=ke.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...(mo=(po=ke.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var ho,fo,Co;ge.parameters={...ge.parameters,docs:{...(ho=ge.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...(Co=(fo=ge.parameters)==null?void 0:fo.docs)==null?void 0:Co.source}}};var xo,Po,ko;Se.parameters={...Se.parameters,docs:{...(xo=Se.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...(ko=(Po=Se.parameters)==null?void 0:Po.docs)==null?void 0:ko.source}}};var go,So,bo;be.parameters={...be.parameters,docs:{...(go=be.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...(bo=(So=be.parameters)==null?void 0:So.docs)==null?void 0:bo.source}}};var vo,jo,wo;ve.parameters={...ve.parameters,docs:{...(vo=ve.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...(wo=(jo=ve.parameters)==null?void 0:jo.docs)==null?void 0:wo.source}}};var Fo,yo,Oo;je.parameters={...je.parameters,docs:{...(Fo=je.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...(Oo=(yo=je.parameters)==null?void 0:yo.docs)==null?void 0:Oo.source}}};var Io,Do,Ro;we.parameters={...we.parameters,docs:{...(Io=we.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...(Ro=(Do=we.parameters)==null?void 0:Do.docs)==null?void 0:Ro.source}}};var Go,Bo,Eo;Fe.parameters={...Fe.parameters,docs:{...(Go=Fe.parameters)==null?void 0:Go.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...(Eo=(Bo=Fe.parameters)==null?void 0:Bo.docs)==null?void 0:Eo.source}}};var To,Ao,Vo;ye.parameters={...ye.parameters,docs:{...(To=ye.parameters)==null?void 0:To.docs,source:{originalSource:`() => {
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
}`,...(Vo=(Ao=ye.parameters)==null?void 0:Ao.docs)==null?void 0:Vo.source}}};var Mo,zo,Ho;Oe.parameters={...Oe.parameters,docs:{...(Mo=Oe.parameters)==null?void 0:Mo.docs,source:{originalSource:`() => {
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
}`,...(Ho=(zo=Oe.parameters)==null?void 0:zo.docs)==null?void 0:Ho.source}}};var qo,Wo,Lo;Ie.parameters={...Ie.parameters,docs:{...(qo=Ie.parameters)==null?void 0:qo.docs,source:{originalSource:`() => {
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
}`,...(Lo=(Wo=Ie.parameters)==null?void 0:Wo.docs)==null?void 0:Lo.source}}};var _o,$o,Ko;De.parameters={...De.parameters,docs:{...(_o=De.parameters)==null?void 0:_o.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...(Ko=($o=De.parameters)==null?void 0:$o.docs)==null?void 0:Ko.source}}};var No,Uo,Qo;Re.parameters={...Re.parameters,docs:{...(No=Re.parameters)==null?void 0:No.docs,source:{originalSource:`() => {
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
}`,...(Qo=(Uo=Re.parameters)==null?void 0:Uo.docs)==null?void 0:Qo.source}}};var Jo,Xo,Yo;Ge.parameters={...Ge.parameters,docs:{...(Jo=Ge.parameters)==null?void 0:Jo.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker value={value} onChange={setValue} />;
}`,...(Yo=(Xo=Ge.parameters)==null?void 0:Xo.docs)==null?void 0:Yo.source}}};var Zo,ea,ra;Be.parameters={...Be.parameters,docs:{...(Zo=Be.parameters)==null?void 0:Zo.docs,source:{originalSource:`() => {
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
}`,...(ra=(ea=Be.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var oa,aa,na;Ee.parameters={...Ee.parameters,docs:{...(oa=Ee.parameters)==null?void 0:oa.docs,source:{originalSource:`() => {
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
}`,...(na=(aa=Ee.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};const $n=["Basic","Variant","Size","DefaultValue","Alpha","Format","Pattern","FormatInput","ColorSwatches","ColorSwatchGroupColumns","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","OpenOnChange","CloseOnChange","CloseOnScroll","DisabledOpenOnFocus","DisabledOpenOnClick","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledEyeDropper","DisallowInput","HiddenColorSwatch","Shape","Disabled","ReadOnly","Invalid","Addon","BorderColor","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{De as Addon,se as Alpha,me as AnimationScheme,re as Basic,fe as BlockScrollOnMount,Re as BorderColor,xe as CloseOnChange,Pe as CloseOnScroll,ue as ColorSwatchGroupColumns,ie as ColorSwatches,Ge as CustomControl,ne as DefaultValue,ye as Disabled,Se as DisabledCloseOnBlur,be as DisabledCloseOnEsc,ve as DisabledEyeDropper,ge as DisabledOpenOnClick,ke as DisabledOpenOnFocus,je as DisallowInput,te as Format,ce as FormatInput,de as Gutter,we as HiddenColorSwatch,Ie as Invalid,pe as Offset,Ce as OpenOnChange,le as Pattern,he as Placement,Be as ReactHookForm,Ee as ReactHookFormDefaultValue,Oe as ReadOnly,Fe as Shape,ae as Size,oe as Variant,$n as __namedExportsOrder,_n as default};
