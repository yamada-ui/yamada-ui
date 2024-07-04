import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as x}from"./index-BwDkhjyp.js";import{u as Ft,C as Ot}from"./index.esm-CnEPCCvu.js";import{c as Ue}from"./components-mzvyS-uk.js";import{d as q,a as Je,i as Ke,C as Nt}from"./ja-C2UuvmQa.js";import{u as Lt,a as Ut,c as Jt,d as Kt,e as Qt}from"./date-picker-XrU00vFZ.js";import{u as Xt}from"./index-BCwor68u.js";import{g as Qe,N as Xe,U as Ze,f as We,ac as $e,a as He,h as V,b as E,c as Vt,d as Tt,a0 as Zt,a1 as $t}from"./factory-BrsV2ztw.js";import{P as en,b as an,a as rn}from"./popover-content-BDOAG20m.js";import{P as tn}from"./container-portal-B-ufUncH.js";import{f as Ae}from"./forward-ref-BmTAT9U5.js";import{a as nn}from"./use-component-style-C-MS2_vZ.js";import{o as on}from"./theme-provider-CVIzrPws.js";import{H as ea}from"./heading-Ban6LXLJ.js";import{G as Ge}from"./grid-DXByVVIy.js";import{F as A}from"./form-control-Cz6JKnCW.js";import{G as sn}from"./ghost-CoVCjMU_.js";import{V as _t}from"./stack-BOvxLa0N.js";import{B as Et}from"./button-BD_75t9L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dl3F70TH.js";import"./index-BFGF6b3l.js";import"./_basePickBy-C1LRqFmK.js";import"./iframe-eZM9jIHe.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./component-o6OrGXrC.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-CNnnGJR-.js";import"./index-BVoeV5Ae.js";import"./environment-provider-D7LEEHlN.js";import"./motion-Bf7Eu1FP.js";import"./loading-provider-Bxazjt5w.js";import"./index-C5r7UPZI.js";import"./Combination--D52Dw1Q.js";import"./loading-CAjNLNS_.js";import"./icon-bEgKfv7t.js";import"./index-CxO4lLi3.js";import"./motion-DxSQdyy8.js";import"./index-OrIPcL7r.js";import"./notice-D5R7Ovbf.js";import"./alert-MbacLDsd.js";import"./close-button-B9eraFvh.js";import"./use-ripple-D3kHZFSu.js";import"./container-BvI42bH-.js";import"./box-B1ksl8ea.js";import"./text-C4dJ5VQY.js";import"./checkbox-poR9POYa.js";import"./index-CnjhcX2m.js";import"./flex-D5xz-WZI.js";import"./index-D0-qQnHL.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-MzFZSGaV.js";import"./index-B2vO1LbL.js";import"./index-BL4_Hm1h.js";import"./index-CqubQ1zG.js";import"./index-E9zP2zCA.js";import"./index-DoAPKQED.js";import"./slide-fade-CLd55t_3.js";import"./utils-BHii_Be-.js";import"./scale-fade-DAC_jzkb.js";import"./index-UjJCRxfq.js";import"./index-CJ021yKR.js";import"./select-By72162N.js";import"./option-Zy6a3Q3U.js";import"./index-CrebD9Bq.js";import"./icon-button-DjBKhg2j.js";import"./index--S0_9aMB.js";import"./index-Du0-7Fls.js";import"./index-Cn7Z-Ezf.js";import"./lucide-icon-DICo5eg_.js";const ln=({value:n,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:m,endPlaceholder:h,closeOnSelect:d=!0,allowInputBeyond:D=!1,maxSelectValues:y,...P})=>{const M=x.useRef(!1),g=x.useRef(null),u=x.useRef(null),j=x.useRef(void 0),[S,w]=Xt({value:n,defaultValue:s,onChange:Y}),[c,p]=S??[],T=p&&Qe(y)?q(p).subtract(y-1,"day").toDate():void 0,v=c&&Qe(y)?q(c).add(y-1,"day").toDate():void 0,{containerRef:b,id:z,allowInput:R,pattern:C,inputProps:I,formControlProps:k,isOpen:H,onClose:Ee,dateToString:f,stringToDate:B,getContainerProps:zt,getPopoverProps:Bt,getFieldProps:Wt,getCalendarProps:Ht,getIconProps:Gt}=Lt({...P,maxSelectValues:y,allowInputBeyond:D,enableRange:!0,value:S,defaultValue:s,autoFocus:!1,onChange:([r,o])=>{_(f(r)??""),F(f(o)??""),j.current=[r,o],w([r,o]),d&&r&&o&&Ee()},onClear:()=>{var r;_(""),F(""),w([]),j.current=void 0,R&&H&&((r=g.current)==null||r.focus())},onClick:r=>{var o,t,l;H&&(c?(t=u.current)==null||t.focus():(o=g.current)==null||o.focus()),(l=P.onClick)==null||l.call(P,r)},onClose:()=>{var t;const[r,o]=j.current??S??[];_(f(r)??""),F(f(o)??""),j.current=void 0,(t=P.onClose)==null||t.call(P)},onEnter:()=>{var t,l,G;if(M.current||!b.current)return;const r=Xe(b.current);if(Ze(r,g.current)){const O=f(c);if(O){_(O);const Le=(((t=u.current)==null?void 0:t.value)??"").length;(l=u.current)==null||l.focus(),(G=u.current)==null||G.setSelectionRange(Le,Le)}}else{const O=f(p);O&&F(O)}},onDelete:r=>{var G,O,Be;if(!u.current||u.current.value.length>1||!b.current)return;const o=Xe(b.current);if(!Ze(o,u.current))return;r.preventDefault(),r.stopPropagation(),F(""),w([c,void 0]);const l=(((G=g.current)==null?void 0:G.value)??"").length;(O=g.current)==null||O.focus(),(Be=g.current)==null||Be.setSelectionRange(l,l)}}),[W,_]=x.useState(f(c)??""),[ze,F]=x.useState(f(p)??""),qe=x.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(C,""));let t=B(o);t&&q(t).isValid()?(D||T&&Je(t,T)&&(t=T),p&&Ke(t,p)&&(t=p)):t=void 0,j.current=[t,p],w([t,p]),_(o)},[C,B,D,T,w,p]),Ne=x.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(C,""));let t=B(o);t&&q(t).isValid()?(D||v&&Ke(t,v)&&(t=v),c&&Je(t,c)&&(t=c)):t=void 0,j.current=[c,t],w([c,t]),F(o)},[c,D,v,C,B,w]);We(()=>{w(n??[])},[n]),We(()=>{g.current&&$e(g.current)||_(f(c)??"")},[S]),We(()=>{u.current&&$e(u.current)||F(f(p)??"")},[S]);const At=x.useCallback((r={},o)=>{const t={...r.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:m??i,...k,...I,...r,ref:He(o,g),style:t,id:z,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:k.readOnly?"default":"text",pointerEvents:k.disabled?"none":"auto",onChange:V(r.onChange,qe),onClick:V(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:V(r.onCompositionEnd,()=>{M.current=!1,_(l=>l.replace(C,""))})}},[I,R,m,i,k,z,W,qe,C]),qt=x.useCallback((r={},o)=>{const t={...r.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:h??i,...k,...I,...r,ref:He(o,u),style:t,id:z,tabIndex:!R||!W?-1:0,value:ze??"",cursor:k.readOnly?"default":"text",pointerEvents:k.disabled?"none":"auto",onChange:V(r.onChange,Ne),onClick:V(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:V(r.onCompositionEnd,()=>{M.current=!1,F(l=>l.replace(C,""))})}},[W,I,R,h,i,k,z,ze,Ne,C]);return{value:S,inputValue:[W,ze],dateToString:f,getContainerProps:zt,getPopoverProps:Bt,getFieldProps:Wt,getStartInputProps:At,getEndInputProps:qt,getIconProps:Gt,getCalendarProps:Ht}},a=Ae((n,s)=>{const[Y,i]=nn("RangeDatePicker",n);let{className:m,isClearable:h=!0,separator:d,color:D,h:y,height:P,minH:M,minHeight:g,containerProps:u,startInputProps:j,endInputProps:S,iconProps:w,clearIconProps:c,portalProps:p={isDisabled:!0},...T}=on(i);const{getPopoverProps:v,getContainerProps:b,getCalendarProps:z,getFieldProps:R,getStartInputProps:C,getEndInputProps:I,getIconProps:k,value:H}=ln(T),[Ee,f]=H??[];y??(y=P),M??(M=g);const B={w:"100%",h:"fit-content",color:D,...Y.container};return e.jsx(Ut,{value:Y,children:e.jsx(en,{...v(),children:e.jsxs(E.div,{className:Vt("ui-range-date-picker",m),__css:B,...b(u),children:[e.jsxs(E.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(cn,{separator:d,value:H,...R({h:y,minH:M}),startInputProps:C(j,s),endInputProps:I(S)}),h&&(Ee||f)?e.jsx(Jt,{...k({clear:!0,...c})}):e.jsx(Kt,{...k({clear:!1,...w})})]}),e.jsx(tn,{...p,children:e.jsx(an,{className:"ui-range-date-picker__popover",__css:{...Y.list},children:e.jsx(Nt,{className:"ui-range-date-picker__calendar",...z()})})})]})})})}),cn=Ae(({className:n,value:s=[],h:Y,minH:i,startInputProps:m,endInputProps:h,separator:d="-",...D},y)=>{const P=Qt(),[M,g]=s,{placeholder:u,ref:j,...S}=m??{},{placeholder:w,...c}=h??{},v=!!u||!!w||(!!M||!!g),b={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...P.field};return e.jsx(rn,{children:e.jsxs(E.div,{className:Vt("ui-range-date-picker__field",n),__css:b,...D,children:[e.jsx(aa,{ref:He(y,j),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:u,...S}),v&&d?e.jsx(E.span,{"data-placeholder":Tt(!M),marginInline:"0.25rem",children:d}):null,e.jsx(aa,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})}),aa=Ae(({className:n,value:s,placeholder:Y,...i},m)=>{const[h,d]=Zt(i,$t),D={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(E.div,{className:n,__css:D,...h,children:[e.jsx(E.span,{"data-placeholder":Tt(!s),opacity:s?0:1,children:s||Y}),e.jsx(E.input,{ref:m,value:s,position:"absolute",left:"0",...d})]})}),Io={title:"Components / Forms / RangeDatePicker",component:a},N=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(ea,{size:"xl",children:"Solid"}),e.jsx(Ge,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Ue.map(n=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))}),e.jsx(ea,{size:"xl",children:"Subtle"}),e.jsx(Ge,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Ue.map(n=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))})]}),Q=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),Z=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),ae=()=>e.jsx(a,{separator:"~"}),re=()=>e.jsx(a,{maxSelectValues:3}),te=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),ne=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:n=>new Date(n)}),se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),le=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),he=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),Me=()=>{const n=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:n})},ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:n=>n.getDay()===0||n.getDay()===6}),we=()=>e.jsx(a,{locale:"ja"}),fe=()=>e.jsxs(Ge,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),Pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),ke=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),je=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),Se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(sn,{})}})]}),Fe=()=>{const[n,s]=x.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:n,onChangeType:s})},Oe=()=>{const[n,s]=x.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:n,onChangeMonth:s})},Ve=()=>{const[n,s]=x.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:n,onChange:s})},Te=()=>{var h;const{control:n,handleSubmit:s,watch:Y,formState:{errors:i}}=Ft(),m=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(_t,{as:"form",onSubmit:s(m),children:[e.jsx(A,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(h=i.multiDatePicker)==null?void 0:h.message,children:e.jsx(Ot,{name:"multiDatePicker",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(Et,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},_e=()=>{var d;const n={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:m}}=Ft({defaultValues:n}),h=D=>console.log("submit:",D);return console.log("watch:",i()),e.jsxs(_t,{as:"form",onSubmit:Y(h),children:[e.jsx(A,{isInvalid:!!m.multiDatePicker,label:"Date to reserve",errorMessage:(d=m.multiDatePicker)==null?void 0:d.message,children:e.jsx(Ot,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D})})}),e.jsx(Et,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ra,ta,na;N.parameters={...N.parameters,docs:{...(ra=N.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(na=(ta=N.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var oa,sa,la;L.parameters={...L.parameters,docs:{...(oa=L.parameters)==null?void 0:oa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(la=(sa=L.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var ca,ia,da;U.parameters={...U.parameters,docs:{...(ca=U.parameters)==null?void 0:ca.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(da=(ia=U.parameters)==null?void 0:ia.docs)==null?void 0:da.source}}};var Da,ua,Ya;J.parameters={...J.parameters,docs:{...(Da=J.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ya=(ua=J.parameters)==null?void 0:ua.docs)==null?void 0:Ya.source}}};var pa,ma,ha;K.parameters={...K.parameters,docs:{...(pa=K.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
  return <>
      <Heading size="xl">Solid</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map(colorScheme => <RangeDatePicker key={colorScheme} calendarVariant="solid" calendarColorScheme={colorScheme} today defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />)}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map(colorScheme => <RangeDatePicker key={colorScheme} calendarVariant="subtle" calendarColorScheme={colorScheme} today defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />)}
      </Grid>
    </>;
}`,...(ha=(ma=K.parameters)==null?void 0:ma.docs)==null?void 0:ha.source}}};var Ma,ga,wa;Q.parameters={...Q.parameters,docs:{...(Ma=Q.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(wa=(ga=Q.parameters)==null?void 0:ga.docs)==null?void 0:wa.source}}};var fa,xa,Pa;X.parameters={...X.parameters,docs:{...(fa=X.parameters)==null?void 0:fa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(Pa=(xa=X.parameters)==null?void 0:xa.docs)==null?void 0:Pa.source}}};var ka,ya,ja;Z.parameters={...Z.parameters,docs:{...(ka=Z.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(ja=(ya=Z.parameters)==null?void 0:ya.docs)==null?void 0:ja.source}}};var Sa,Ca,Ra;$.parameters={...$.parameters,docs:{...(Sa=$.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(Ra=(Ca=$.parameters)==null?void 0:Ca.docs)==null?void 0:Ra.source}}};var va,ba,Ia;ee.parameters={...ee.parameters,docs:{...(va=ee.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ia=(ba=ee.parameters)==null?void 0:ba.docs)==null?void 0:Ia.source}}};var Fa,Oa,Va;ae.parameters={...ae.parameters,docs:{...(Fa=ae.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(Va=(Oa=ae.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var Ta,_a,Ea;re.parameters={...re.parameters,docs:{...(Ta=re.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ea=(_a=re.parameters)==null?void 0:_a.docs)==null?void 0:Ea.source}}};var za,Ba,Wa;te.parameters={...te.parameters,docs:{...(za=te.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(Wa=(Ba=te.parameters)==null?void 0:Ba.docs)==null?void 0:Wa.source}}};var Ha,Ga,Aa;ne.parameters={...ne.parameters,docs:{...(Ha=ne.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(Aa=(Ga=ne.parameters)==null?void 0:Ga.docs)==null?void 0:Aa.source}}};var qa,Na,La;oe.parameters={...oe.parameters,docs:{...(qa=oe.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(La=(Na=oe.parameters)==null?void 0:Na.docs)==null?void 0:La.source}}};var Ua,Ja,Ka;se.parameters={...se.parameters,docs:{...(Ua=se.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(Ka=(Ja=se.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Xa,Za;le.parameters={...le.parameters,docs:{...(Qa=le.parameters)==null?void 0:Qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(Za=(Xa=le.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var $a,er,ar;ce.parameters={...ce.parameters,docs:{...($a=ce.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(ar=(er=ce.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var rr,tr,nr;ie.parameters={...ie.parameters,docs:{...(rr=ie.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(nr=(tr=ie.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var or,sr,lr;de.parameters={...de.parameters,docs:{...(or=de.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(lr=(sr=de.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var cr,ir,dr;De.parameters={...De.parameters,docs:{...(cr=De.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(dr=(ir=De.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var Dr,ur,Yr;ue.parameters={...ue.parameters,docs:{...(Dr=ue.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Yr=(ur=ue.parameters)==null?void 0:ur.docs)==null?void 0:Yr.source}}};var pr,mr,hr;Ye.parameters={...Ye.parameters,docs:{...(pr=Ye.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(hr=(mr=Ye.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var Mr,gr,wr;pe.parameters={...pe.parameters,docs:{...(Mr=pe.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(wr=(gr=pe.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var fr,xr,Pr;me.parameters={...me.parameters,docs:{...(fr=me.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Pr=(xr=me.parameters)==null?void 0:xr.docs)==null?void 0:Pr.source}}};var kr,yr,jr;he.parameters={...he.parameters,docs:{...(kr=he.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(jr=(yr=he.parameters)==null?void 0:yr.docs)==null?void 0:jr.source}}};var Sr,Cr,Rr;Me.parameters={...Me.parameters,docs:{...(Sr=Me.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(Rr=(Cr=Me.parameters)==null?void 0:Cr.docs)==null?void 0:Rr.source}}};var vr,br,Ir;ge.parameters={...ge.parameters,docs:{...(vr=ge.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Ir=(br=ge.parameters)==null?void 0:br.docs)==null?void 0:Ir.source}}};var Fr,Or,Vr;we.parameters={...we.parameters,docs:{...(Fr=we.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Vr=(Or=we.parameters)==null?void 0:Or.docs)==null?void 0:Vr.source}}};var Tr,_r,Er;fe.parameters={...fe.parameters,docs:{...(Tr=fe.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Er=(_r=fe.parameters)==null?void 0:_r.docs)==null?void 0:Er.source}}};var zr,Br,Wr;xe.parameters={...xe.parameters,docs:{...(zr=xe.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(Wr=(Br=xe.parameters)==null?void 0:Br.docs)==null?void 0:Wr.source}}};var Hr,Gr,Ar;Pe.parameters={...Pe.parameters,docs:{...(Hr=Pe.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(Ar=(Gr=Pe.parameters)==null?void 0:Gr.docs)==null?void 0:Ar.source}}};var qr,Nr,Lr;ke.parameters={...ke.parameters,docs:{...(qr=ke.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(Lr=(Nr=ke.parameters)==null?void 0:Nr.docs)==null?void 0:Lr.source}}};var Ur,Jr,Kr;ye.parameters={...ye.parameters,docs:{...(Ur=ye.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(Kr=(Jr=ye.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Xr,Zr;je.parameters={...je.parameters,docs:{...(Qr=je.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(Zr=(Xr=je.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var $r,et,at;Se.parameters={...Se.parameters,docs:{...($r=Se.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(at=(et=Se.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var rt,tt,nt;Ce.parameters={...Ce.parameters,docs:{...(rt=Ce.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(nt=(tt=Ce.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,lt;Re.parameters={...Re.parameters,docs:{...(ot=Re.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(lt=(st=Re.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,it,dt;ve.parameters={...ve.parameters,docs:{...(ct=ve.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(dt=(it=ve.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var Dt,ut,Yt;be.parameters={...be.parameters,docs:{...(Dt=be.parameters)==null?void 0:Dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(Yt=(ut=be.parameters)==null?void 0:ut.docs)==null?void 0:Yt.source}}};var pt,mt,ht;Ie.parameters={...Ie.parameters,docs:{...(pt=Ie.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(ht=(mt=Ie.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var Mt,gt,wt;Fe.parameters={...Fe.parameters,docs:{...(Mt=Fe.parameters)==null?void 0:Mt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(wt=(gt=Fe.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var ft,xt,Pt;Oe.parameters={...Oe.parameters,docs:{...(ft=Oe.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(Pt=(xt=Oe.parameters)==null?void 0:xt.docs)==null?void 0:Pt.source}}};var kt,yt,jt;Ve.parameters={...Ve.parameters,docs:{...(kt=Ve.parameters)==null?void 0:kt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(jt=(yt=Ve.parameters)==null?void 0:yt.docs)==null?void 0:jt.source}}};var St,Ct,Rt;Te.parameters={...Te.parameters,docs:{...(St=Te.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
  type Data = {
    multiDatePicker: [Date?, Date?];
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.multiDatePicker} label="Date to reserve" errorMessage={errors.multiDatePicker?.message}>
        <Controller name="multiDatePicker" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Rt=(Ct=Te.parameters)==null?void 0:Ct.docs)==null?void 0:Rt.source}}};var vt,bt,It;_e.parameters={..._e.parameters,docs:{...(vt=_e.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
  type Data = {
    multiDatePicker: [Date?, Date?];
  };
  const defaultValues: Data = {
    multiDatePicker: [new Date()]
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.multiDatePicker} label="Date to reserve" errorMessage={errors.multiDatePicker?.message}>
        <Controller name="multiDatePicker" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(It=(bt=_e.parameters)==null?void 0:bt.docs)==null?void 0:It.source}}};const Fo=["basic","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Fo as __namedExportsOrder,N as basic,Oe as customControlMonth,Fe as customControlType,Ve as customControlValue,Ie as customIcon,Io as default,Se as disabledAllowInput,ye as disabledCloseOnBlur,ke as disabledCloseOnSelect,Re as disabledControls,je as disabledIsClearable,Ce as disabledOutsideDays,ve as disabledWeekdays,be as hiddenOutsideDays,de as isDisabled,ue as isInvalid,De as isReadonly,Te as reactHookForm,_e as reactHookFormWithDefaultValue,pe as withAllowInputBeyond,xe as withAmountOfMonths,ee as withBorderColor,U as withCalendarSize,K as withColorScheme,Z as withDefaultMonth,X as withDefaultType,Q as withDefaultValue,ie as withDuration,ge as withExcludeDate,$ as withFirstDayOfWeek,fe as withFormat,ce as withGutter,Me as withHolidays,ne as withInputFormat,we as withLocale,re as withMaxSelectedValue,Ye as withMinMaxDate,le as withOffset,Pe as withPaginateBy,oe as withParseDate,te as withPattern,se as withPlacement,ae as withSeparator,L as withSize,me as withToday,J as withVariant,he as withWeekendDays};
