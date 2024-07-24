import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as x}from"./index-BwDkhjyp.js";import{u as Ot,C as Vt}from"./index.esm-CnEPCCvu.js";import{c as Je}from"./components-D6Bb2uEr.js";import{d as q,a as Ke,i as Qe,C as Nt}from"./ja-n251J28f.js";import{u as Lt,a as Ut,c as Jt,d as Kt,e as Qt}from"./date-picker-D0AgnOts.js";import{u as Xt}from"./index-DtwaELu4.js";import{g as Xe,N as Ze,U as $e,f as He,ae as ea,a as Ge,h as V,b as z,c as Tt,d as _t,a0 as Zt,a1 as $t}from"./factory-CSM9sPSx.js";import{P as en,b as an,a as rn}from"./popover-content-NepE_FfP.js";import{P as tn}from"./container-portal-D-ohbITJ.js";import{f as qe}from"./forward-ref-BmTAT9U5.js";import{a as nn}from"./use-component-style-WvnhTyjM.js";import{o as on}from"./theme-provider-BgcEQoqm.js";import{H as aa}from"./heading-DOuQpX49.js";import{G as Ae}from"./grid-CW0eUv9P.js";import{F as A}from"./form-control--QN0xTJO.js";import{G as sn}from"./ghost-YGEWtm-9.js";import{V as Et}from"./stack-SpfWy_a6.js";import{B as zt}from"./button-nqwTyx-X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CvfKnqoV.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-DICDWbsB.js";import"./index-DtP7b3N9.js";import"./motion-Bwwxf1oz.js";import"./loading-provider-C3G_7BIp.js";import"./index-DWEUlx1C.js";import"./Combination-CONbhR2A.js";import"./loading-BomcEXko.js";import"./icon-CcTu3FGm.js";import"./index-D84whEjo.js";import"./motion-CJ0Wabpj.js";import"./index-C4_4nMA3.js";import"./notice-DykH8IWk.js";import"./alert-BMy-2sRK.js";import"./close-button-DHzsuGbG.js";import"./use-ripple-CjBaOxYI.js";import"./container-B4DYrRWa.js";import"./box-DFfDP5ur.js";import"./text-BookO5vh.js";import"./checkbox-BJn3XSSi.js";import"./index-CeDrGg2i.js";import"./flex-DB7lh134.js";import"./index-CA0CoE9D.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DSapTmfa.js";import"./index-WMSiNdqI.js";import"./index-D5mciU3Y.js";import"./index-lGxQ7XbO.js";import"./index-C1sIUdxj.js";import"./index-COBVKLaq.js";import"./slide-fade-CtXYE2I0.js";import"./utils-C1onMfPn.js";import"./scale-fade-CGBM4697.js";import"./index-DCuOK1Fs.js";import"./index-CxbgkKk9.js";import"./select-LboTRYhO.js";import"./option-CwK8hE9j.js";import"./index-DCjskD-V.js";import"./icon-button-B_Pk-VcE.js";import"./extends-CF3RwP-h.js";import"./index-Cq8ovcjm.js";import"./index-Du0-7Fls.js";import"./index-C8fXWcF1.js";import"./index-DxjWwZXO.js";import"./lucide-icon-B_KpONE2.js";const ln=({value:n,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:m,endPlaceholder:h,closeOnSelect:d=!0,allowInputBeyond:D=!1,maxSelectValues:y,...P})=>{const M=x.useRef(!1),g=x.useRef(null),u=x.useRef(null),j=x.useRef(void 0),[S,w]=Xt({value:n,defaultValue:s,onChange:Y}),[c,p]=S??[],T=p&&Xe(y)?q(p).subtract(y-1,"day").toDate():void 0,v=c&&Xe(y)?q(c).add(y-1,"day").toDate():void 0,{containerRef:b,id:_,allowInput:R,pattern:C,inputProps:I,formControlProps:k,isOpen:H,onClose:Ee,dateToString:f,stringToDate:B,getContainerProps:ze,getPopoverProps:Bt,getFieldProps:Wt,getCalendarProps:Ht,getIconProps:Gt}=Lt({...P,maxSelectValues:y,allowInputBeyond:D,enableRange:!0,value:S,defaultValue:s,autoFocus:!1,onChange:([r,o])=>{E(f(r)??""),F(f(o)??""),j.current=[r,o],w([r,o]),d&&r&&o&&Ee()},onClear:()=>{var r;E(""),F(""),w([]),j.current=void 0,R&&H&&((r=g.current)==null||r.focus())},onClick:r=>{var o,t,l;H&&(c?(t=u.current)==null||t.focus():(o=g.current)==null||o.focus()),(l=P.onClick)==null||l.call(P,r)},onClose:()=>{var t;const[r,o]=j.current??S??[];E(f(r)??""),F(f(o)??""),j.current=void 0,(t=P.onClose)==null||t.call(P)},onEnter:()=>{var t,l,G;if(M.current||!b.current)return;const r=Ze(b.current);if($e(r,g.current)){const O=f(c);if(O){E(O);const Ue=(((t=u.current)==null?void 0:t.value)??"").length;(l=u.current)==null||l.focus(),(G=u.current)==null||G.setSelectionRange(Ue,Ue)}}else{const O=f(p);O&&F(O)}},onDelete:r=>{var G,O,We;if(!u.current||u.current.value.length>1||!b.current)return;const o=Ze(b.current);if(!$e(o,u.current))return;r.preventDefault(),r.stopPropagation(),F(""),w([c,void 0]);const l=(((G=g.current)==null?void 0:G.value)??"").length;(O=g.current)==null||O.focus(),(We=g.current)==null||We.setSelectionRange(l,l)}}),[W,E]=x.useState(f(c)??""),[Be,F]=x.useState(f(p)??""),Ne=x.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(C,""));let t=B(o);t&&q(t).isValid()?(D||T&&Ke(t,T)&&(t=T),p&&Qe(t,p)&&(t=p)):t=void 0,j.current=[t,p],w([t,p]),E(o)},[C,B,D,T,w,p]),Le=x.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(C,""));let t=B(o);t&&q(t).isValid()?(D||v&&Qe(t,v)&&(t=v),c&&Ke(t,c)&&(t=c)):t=void 0,j.current=[c,t],w([c,t]),F(o)},[c,D,v,C,B,w]);He(()=>{w(n??[])},[n]),He(()=>{g.current&&ea(g.current)||E(f(c)??"")},[S]),He(()=>{u.current&&ea(u.current)||F(f(p)??"")},[S]);const At=x.useCallback((r={},o)=>{const t={...r.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:m??i,...k,...I,...r,ref:Ge(o,g),style:t,id:_,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:k.readOnly?"default":"text",pointerEvents:k.disabled?"none":"auto",onChange:V(r.onChange,Ne),onClick:V(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:V(r.onCompositionEnd,()=>{M.current=!1,E(l=>l.replace(C,""))})}},[I,R,m,i,k,_,W,Ne,C]),qt=x.useCallback((r={},o)=>{const t={...r.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:h??i,...k,...I,...r,ref:Ge(o,u),style:t,id:_,tabIndex:!R||!W?-1:0,value:Be??"",cursor:k.readOnly?"default":"text",pointerEvents:k.disabled?"none":"auto",onChange:V(r.onChange,Le),onClick:V(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:V(r.onCompositionEnd,()=>{M.current=!1,F(l=>l.replace(C,""))})}},[W,I,R,h,i,k,_,Be,Le,C]);return{id:_,value:S,inputValue:[W,Be],dateToString:f,getContainerProps:ze,getPopoverProps:Bt,getFieldProps:Wt,getStartInputProps:At,getEndInputProps:qt,getIconProps:Gt,getCalendarProps:Ht}},a=qe((n,s)=>{const[Y,i]=nn("RangeDatePicker",n);let{className:m,isClearable:h=!0,separator:d,color:D,h:y,height:P,minH:M,minHeight:g,containerProps:u,startInputProps:j,endInputProps:S,iconProps:w,clearIconProps:c,portalProps:p={isDisabled:!0},...T}=on(i);const{getPopoverProps:v,getContainerProps:b,getCalendarProps:_,getFieldProps:R,getStartInputProps:C,getEndInputProps:I,getIconProps:k,value:H,id:Ee}=ln(T),[f,B]=H??[];y??(y=P),M??(M=g);const ze={w:"100%",h:"fit-content",color:D,...Y.container};return e.jsx(Ut,{value:Y,children:e.jsx(en,{...v(),children:e.jsxs(z.div,{className:Tt("ui-range-date-picker",m),__css:ze,...b(u),children:[e.jsxs(z.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(cn,{separator:d,value:H,...R({h:y,minH:M}),startInputProps:C(j,s),endInputProps:I(S)}),h&&(f||B)?e.jsx(Jt,{...k({clear:!0,...c})}):e.jsx(Kt,{...k({clear:!1,...w})})]}),e.jsx(tn,{...p,children:e.jsx(an,{id:Ee,role:"dialog","aria-modal":"true",className:"ui-range-date-picker__popover",__css:{...Y.list},children:e.jsx(Nt,{className:"ui-range-date-picker__calendar",..._()})})})]})})})}),cn=qe(({className:n,value:s=[],h:Y,minH:i,startInputProps:m,endInputProps:h,separator:d="-",...D},y)=>{const P=Qt(),[M,g]=s,{placeholder:u,ref:j,...S}=m??{},{placeholder:w,...c}=h??{},v=!!u||!!w||(!!M||!!g),b={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...P.field};return e.jsx(rn,{children:e.jsxs(z.div,{className:Tt("ui-range-date-picker__field",n),__css:b,...D,children:[e.jsx(ra,{ref:Ge(y,j),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:u,...S}),v&&d?e.jsx(z.span,{"data-placeholder":_t(!M),marginInline:"0.25rem",children:d}):null,e.jsx(ra,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})}),ra=qe(({className:n,value:s,placeholder:Y,...i},m)=>{const[h,d]=Zt(i,$t),D={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(z.div,{className:n,__css:D,...h,children:[e.jsx(z.span,{"data-placeholder":_t(!s),opacity:s?0:1,children:s||Y}),e.jsx(z.input,{ref:m,value:s,position:"absolute",left:"0",...d})]})}),jo={title:"Components / Forms / RangeDatePicker",component:a},N=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(aa,{size:"xl",children:"Solid"}),e.jsx(Ae,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Je.map(n=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))}),e.jsx(aa,{size:"xl",children:"Subtle"}),e.jsx(Ae,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Je.map(n=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))})]}),Q=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),Z=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),ae=()=>e.jsx(a,{separator:"~"}),re=()=>e.jsx(a,{maxSelectValues:3}),te=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),ne=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:n=>new Date(n)}),se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),le=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),he=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),Me=()=>{const n=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:n})},ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:n=>n.getDay()===0||n.getDay()===6}),we=()=>e.jsx(a,{locale:"ja"}),fe=()=>e.jsxs(Ae,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),Pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),ke=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),je=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),Se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(sn,{})}})]}),Fe=()=>{const[n,s]=x.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:n,onChangeType:s})},Oe=()=>{const[n,s]=x.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:n,onChangeMonth:s})},Ve=()=>{const[n,s]=x.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:n,onChange:s})},Te=()=>{var h;const{control:n,handleSubmit:s,watch:Y,formState:{errors:i}}=Ot(),m=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(Et,{as:"form",onSubmit:s(m),children:[e.jsx(A,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(h=i.multiDatePicker)==null?void 0:h.message,children:e.jsx(Vt,{name:"multiDatePicker",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(zt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},_e=()=>{var d;const n={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:m}}=Ot({defaultValues:n}),h=D=>console.log("submit:",D);return console.log("watch:",i()),e.jsxs(Et,{as:"form",onSubmit:Y(h),children:[e.jsx(A,{isInvalid:!!m.multiDatePicker,label:"Date to reserve",errorMessage:(d=m.multiDatePicker)==null?void 0:d.message,children:e.jsx(Vt,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D})})}),e.jsx(zt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ta,na,oa;N.parameters={...N.parameters,docs:{...(ta=N.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(oa=(na=N.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,la,ca;L.parameters={...L.parameters,docs:{...(sa=L.parameters)==null?void 0:sa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(ca=(la=L.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var ia,da,Da;U.parameters={...U.parameters,docs:{...(ia=U.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(Da=(da=U.parameters)==null?void 0:da.docs)==null?void 0:Da.source}}};var ua,Ya,pa;J.parameters={...J.parameters,docs:{...(ua=J.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(pa=(Ya=J.parameters)==null?void 0:Ya.docs)==null?void 0:pa.source}}};var ma,ha,Ma;K.parameters={...K.parameters,docs:{...(ma=K.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
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
}`,...(Ma=(ha=K.parameters)==null?void 0:ha.docs)==null?void 0:Ma.source}}};var ga,wa,fa;Q.parameters={...Q.parameters,docs:{...(ga=Q.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(fa=(wa=Q.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var xa,Pa,ka;X.parameters={...X.parameters,docs:{...(xa=X.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(ka=(Pa=X.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var ya,ja,Sa;Z.parameters={...Z.parameters,docs:{...(ya=Z.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(Sa=(ja=Z.parameters)==null?void 0:ja.docs)==null?void 0:Sa.source}}};var Ca,Ra,va;$.parameters={...$.parameters,docs:{...(Ca=$.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(va=(Ra=$.parameters)==null?void 0:Ra.docs)==null?void 0:va.source}}};var ba,Ia,Fa;ee.parameters={...ee.parameters,docs:{...(ba=ee.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Fa=(Ia=ee.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Oa,Va,Ta;ae.parameters={...ae.parameters,docs:{...(Oa=ae.parameters)==null?void 0:Oa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(Ta=(Va=ae.parameters)==null?void 0:Va.docs)==null?void 0:Ta.source}}};var _a,Ea,za;re.parameters={...re.parameters,docs:{...(_a=re.parameters)==null?void 0:_a.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(za=(Ea=re.parameters)==null?void 0:Ea.docs)==null?void 0:za.source}}};var Ba,Wa,Ha;te.parameters={...te.parameters,docs:{...(Ba=te.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(Ha=(Wa=te.parameters)==null?void 0:Wa.docs)==null?void 0:Ha.source}}};var Ga,Aa,qa;ne.parameters={...ne.parameters,docs:{...(Ga=ne.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(qa=(Aa=ne.parameters)==null?void 0:Aa.docs)==null?void 0:qa.source}}};var Na,La,Ua;oe.parameters={...oe.parameters,docs:{...(Na=oe.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(Ua=(La=oe.parameters)==null?void 0:La.docs)==null?void 0:Ua.source}}};var Ja,Ka,Qa;se.parameters={...se.parameters,docs:{...(Ja=se.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(Qa=(Ka=se.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,Za,$a;le.parameters={...le.parameters,docs:{...(Xa=le.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...($a=(Za=le.parameters)==null?void 0:Za.docs)==null?void 0:$a.source}}};var er,ar,rr;ce.parameters={...ce.parameters,docs:{...(er=ce.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(rr=(ar=ce.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var tr,nr,or;ie.parameters={...ie.parameters,docs:{...(tr=ie.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(or=(nr=ie.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var sr,lr,cr;de.parameters={...de.parameters,docs:{...(sr=de.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(cr=(lr=de.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ir,dr,Dr;De.parameters={...De.parameters,docs:{...(ir=De.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Dr=(dr=De.parameters)==null?void 0:dr.docs)==null?void 0:Dr.source}}};var ur,Yr,pr;ue.parameters={...ue.parameters,docs:{...(ur=ue.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(pr=(Yr=ue.parameters)==null?void 0:Yr.docs)==null?void 0:pr.source}}};var mr,hr,Mr;Ye.parameters={...Ye.parameters,docs:{...(mr=Ye.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(Mr=(hr=Ye.parameters)==null?void 0:hr.docs)==null?void 0:Mr.source}}};var gr,wr,fr;pe.parameters={...pe.parameters,docs:{...(gr=pe.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(fr=(wr=pe.parameters)==null?void 0:wr.docs)==null?void 0:fr.source}}};var xr,Pr,kr;me.parameters={...me.parameters,docs:{...(xr=me.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(kr=(Pr=me.parameters)==null?void 0:Pr.docs)==null?void 0:kr.source}}};var yr,jr,Sr;he.parameters={...he.parameters,docs:{...(yr=he.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Sr=(jr=he.parameters)==null?void 0:jr.docs)==null?void 0:Sr.source}}};var Cr,Rr,vr;Me.parameters={...Me.parameters,docs:{...(Cr=Me.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(vr=(Rr=Me.parameters)==null?void 0:Rr.docs)==null?void 0:vr.source}}};var br,Ir,Fr;ge.parameters={...ge.parameters,docs:{...(br=ge.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Fr=(Ir=ge.parameters)==null?void 0:Ir.docs)==null?void 0:Fr.source}}};var Or,Vr,Tr;we.parameters={...we.parameters,docs:{...(Or=we.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Tr=(Vr=we.parameters)==null?void 0:Vr.docs)==null?void 0:Tr.source}}};var _r,Er,zr;fe.parameters={...fe.parameters,docs:{...(_r=fe.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(zr=(Er=fe.parameters)==null?void 0:Er.docs)==null?void 0:zr.source}}};var Br,Wr,Hr;xe.parameters={...xe.parameters,docs:{...(Br=xe.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(Hr=(Wr=xe.parameters)==null?void 0:Wr.docs)==null?void 0:Hr.source}}};var Gr,Ar,qr;Pe.parameters={...Pe.parameters,docs:{...(Gr=Pe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(qr=(Ar=Pe.parameters)==null?void 0:Ar.docs)==null?void 0:qr.source}}};var Nr,Lr,Ur;ke.parameters={...ke.parameters,docs:{...(Nr=ke.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(Ur=(Lr=ke.parameters)==null?void 0:Lr.docs)==null?void 0:Ur.source}}};var Jr,Kr,Qr;ye.parameters={...ye.parameters,docs:{...(Jr=ye.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(Qr=(Kr=ye.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;je.parameters={...je.parameters,docs:{...(Xr=je.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...($r=(Zr=je.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var et,at,rt;Se.parameters={...Se.parameters,docs:{...(et=Se.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(rt=(at=Se.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var tt,nt,ot;Ce.parameters={...Ce.parameters,docs:{...(tt=Ce.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(ot=(nt=Ce.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,lt,ct;Re.parameters={...Re.parameters,docs:{...(st=Re.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(ct=(lt=Re.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var it,dt,Dt;ve.parameters={...ve.parameters,docs:{...(it=ve.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(Dt=(dt=ve.parameters)==null?void 0:dt.docs)==null?void 0:Dt.source}}};var ut,Yt,pt;be.parameters={...be.parameters,docs:{...(ut=be.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(pt=(Yt=be.parameters)==null?void 0:Yt.docs)==null?void 0:pt.source}}};var mt,ht,Mt;Ie.parameters={...Ie.parameters,docs:{...(mt=Ie.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(Mt=(ht=Ie.parameters)==null?void 0:ht.docs)==null?void 0:Mt.source}}};var gt,wt,ft;Fe.parameters={...Fe.parameters,docs:{...(gt=Fe.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(ft=(wt=Fe.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};var xt,Pt,kt;Oe.parameters={...Oe.parameters,docs:{...(xt=Oe.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(kt=(Pt=Oe.parameters)==null?void 0:Pt.docs)==null?void 0:kt.source}}};var yt,jt,St;Ve.parameters={...Ve.parameters,docs:{...(yt=Ve.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(St=(jt=Ve.parameters)==null?void 0:jt.docs)==null?void 0:St.source}}};var Ct,Rt,vt;Te.parameters={...Te.parameters,docs:{...(Ct=Te.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
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
}`,...(vt=(Rt=Te.parameters)==null?void 0:Rt.docs)==null?void 0:vt.source}}};var bt,It,Ft;_e.parameters={..._e.parameters,docs:{...(bt=_e.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(Ft=(It=_e.parameters)==null?void 0:It.docs)==null?void 0:Ft.source}}};const So=["basic","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{So as __namedExportsOrder,N as basic,Oe as customControlMonth,Fe as customControlType,Ve as customControlValue,Ie as customIcon,jo as default,Se as disabledAllowInput,ye as disabledCloseOnBlur,ke as disabledCloseOnSelect,Re as disabledControls,je as disabledIsClearable,Ce as disabledOutsideDays,ve as disabledWeekdays,be as hiddenOutsideDays,de as isDisabled,ue as isInvalid,De as isReadonly,Te as reactHookForm,_e as reactHookFormWithDefaultValue,pe as withAllowInputBeyond,xe as withAmountOfMonths,ee as withBorderColor,U as withCalendarSize,K as withColorScheme,Z as withDefaultMonth,X as withDefaultType,Q as withDefaultValue,ie as withDuration,ge as withExcludeDate,$ as withFirstDayOfWeek,fe as withFormat,ce as withGutter,Me as withHolidays,ne as withInputFormat,we as withLocale,re as withMaxSelectedValue,Ye as withMinMaxDate,le as withOffset,Pe as withPaginateBy,oe as withParseDate,te as withPattern,se as withPlacement,ae as withSeparator,L as withSize,me as withToday,J as withVariant,he as withWeekendDays};
