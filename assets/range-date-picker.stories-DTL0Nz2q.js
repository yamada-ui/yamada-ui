import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as g}from"./index-BwDkhjyp.js";import{u as bt,C as It}from"./index.esm-DfhtmKwW.js";import{c as Le}from"./components-BVZVmLAX.js";import{d as q,a as Ue,i as Je,C as At}from"./ja-DBGMBR8B.js";import{u as qt,a as Nt,c as Lt,d as Ut,e as Jt}from"./date-picker-asPyBL0A.js";import{u as Kt}from"./index-D8-nW8Om.js";import{g as Ke,N as Qe,U as Xe,a as We,h as O,b as _,c as Ft,d as Ot,a0 as Qt,a1 as Xt}from"./factory-CJjTzqIw.js";import{P as Zt,b as $t,a as en}from"./popover-content-Ca6RSXVm.js";import{P as an}from"./container-portal-CH8_15h1.js";import{f as Ge}from"./forward-ref-BmTAT9U5.js";import{a as rn}from"./use-component-style-BHPJug4L.js";import{o as tn}from"./theme-provider-QhVoByOm.js";import{H as Ze}from"./heading-CkpbD4FA.js";import{G as He}from"./grid-Cw9Ldh_4.js";import{F as A}from"./form-control-CmHbIVTx.js";import{G as nn}from"./ghost-Bb9dtjBQ.js";import{V as Vt}from"./stack-DAUYtLCM.js";import{B as Tt}from"./button-cU1-KhRx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DS3HKw2q.js";import"./index-B01ywQ6v.js";import"./_basePickBy-CNg-d4Oq.js";import"./iframe-xEXCH6xC.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./component-o6OrGXrC.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-PQpi_L3G.js";import"./index-BBYQdQx5.js";import"./environment-provider-ChTqlOMC.js";import"./motion-DkeuV4DN.js";import"./loading-provider-B2DzAck0.js";import"./index-C0N86Ahx.js";import"./Combination--D52Dw1Q.js";import"./loading-BQdsdx3B.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";import"./motion-CH0CplCl.js";import"./index-yOmqRA4W.js";import"./notice-auGPRGx8.js";import"./alert-BkGI-yA3.js";import"./close-button-CU6CN2oT.js";import"./use-ripple-Csjor6vV.js";import"./container-8CVTVcoK.js";import"./box-D9DbeuYV.js";import"./text-rr6Q65aJ.js";import"./checkbox-D0FF7VCC.js";import"./index-DtgtGtD-.js";import"./flex-DpdDxX4h.js";import"./index-CYn1E4d3.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CmYZUBlP.js";import"./index-0B4xF-cu.js";import"./index-CXrE4vub.js";import"./index-hT-y6TS8.js";import"./index-Br_odY0O.js";import"./index-DhPU70lj.js";import"./slide-fade-CkywlkRt.js";import"./utils-BIOBGn56.js";import"./scale-fade-BHByIxHH.js";import"./index-Dk1mP1up.js";import"./index-BqSttWob.js";import"./select-COcLXB9f.js";import"./option-DAWml_RV.js";import"./index-Bwtna2_q.js";import"./icon-button-D3ms_744.js";import"./index-pi5p6VHu.js";import"./index-Du0-7Fls.js";import"./index-yOlLmrbe.js";import"./lucide-icon-DuYAgJii.js";const on=({value:n,defaultValue:s=[],onChange:u,placeholder:i,startPlaceholder:Y,endPlaceholder:p,closeOnSelect:d=!0,allowInputBeyond:D=!1,maxSelectValues:y,...f})=>{const m=g.useRef(!1),P=g.useRef(null),h=g.useRef(null),j=g.useRef(void 0),[R,w]=Kt({value:n,defaultValue:s,onChange:u}),[c,M]=R??[],V=M&&Ke(y)?q(M).subtract(y-1,"day").toDate():void 0,v=c&&Ke(y)?q(c).add(y-1,"day").toDate():void 0,{containerRef:b,id:E,allowInput:C,pattern:S,inputProps:I,formControlProps:x,isOpen:H,onClose:Ee,dateToString:k,stringToDate:z,getContainerProps:_t,getPopoverProps:Et,getFieldProps:zt,getCalendarProps:Bt,getIconProps:Wt}=qt({...f,maxSelectValues:y,allowInputBeyond:D,enableRange:!0,value:R,defaultValue:s,autoFocus:!1,onChange:([r,o])=>{W(k(r)??""),T(k(o)??""),j.current=[r,o],w([r,o]),d&&r&&o&&Ee()},onClear:()=>{var r;W(""),T(""),w([]),j.current=void 0,C&&H&&((r=P.current)==null||r.focus())},onClick:r=>{var o,t,l;H&&(c?(t=h.current)==null||t.focus():(o=P.current)==null||o.focus()),(l=f.onClick)==null||l.call(f,r)},onClose:()=>{var t;const[r,o]=j.current??R??[];W(k(r)??""),T(k(o)??""),j.current=void 0,(t=f.onClose)==null||t.call(f)},onEnter:()=>{var t,l,G;if(m.current||!b.current)return;const r=Qe(b.current);if(Xe(r,P.current)){const F=k(c);if(F){W(F);const Ne=(((t=h.current)==null?void 0:t.value)??"").length;(l=h.current)==null||l.focus(),(G=h.current)==null||G.setSelectionRange(Ne,Ne)}}else{const F=k(M);F&&T(F)}},onDelete:r=>{var G,F,Be;if(!h.current||h.current.value.length>1||!b.current)return;const o=Qe(b.current);if(!Xe(o,h.current))return;r.preventDefault(),r.stopPropagation(),T(""),w([c,void 0]);const l=(((G=P.current)==null?void 0:G.value)??"").length;(F=P.current)==null||F.focus(),(Be=P.current)==null||Be.setSelectionRange(l,l)}}),[B,W]=g.useState(k(c)??""),[ze,T]=g.useState(k(M)??""),Ae=g.useCallback(r=>{let o=r.target.value;m.current||(o=o.replace(S,""));let t=z(o);t&&q(t).isValid()?(D||V&&Ue(t,V)&&(t=V),M&&Je(t,M)&&(t=M)):t=void 0,j.current=[t,M],w([t,M]),W(o)},[S,z,D,V,w,M]),qe=g.useCallback(r=>{let o=r.target.value;m.current||(o=o.replace(S,""));let t=z(o);t&&q(t).isValid()?(D||v&&Je(t,v)&&(t=v),c&&Ue(t,c)&&(t=c)):t=void 0,j.current=[c,t],w([c,t]),T(o)},[c,D,v,S,z,w]),Ht=g.useCallback((r={},o)=>{const t={...r.style,...I.style,...C?{}:{pointerEvents:"none"}};return{placeholder:Y??i,...x,...I,...r,ref:We(o,P),style:t,id:E,tabIndex:C?0:-1,zIndex:B?void 0:1,value:B??"",cursor:x.readOnly?"default":"text",pointerEvents:x.disabled?"none":"auto",onChange:O(r.onChange,Ae),onClick:O(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:O(r.onCompositionStart,()=>m.current=!0),onCompositionEnd:O(r.onCompositionEnd,()=>{m.current=!1,W(l=>l.replace(S,""))})}},[I,C,Y,i,x,E,B,Ae,S]),Gt=g.useCallback((r={},o)=>{const t={...r.style,...I.style,...C?{}:{pointerEvents:"none"}};return{placeholder:p??i,...x,...I,...r,ref:We(o,h),style:t,id:E,tabIndex:!C||!B?-1:0,value:ze??"",cursor:x.readOnly?"default":"text",pointerEvents:x.disabled?"none":"auto",onChange:O(r.onChange,qe),onClick:O(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:O(r.onCompositionStart,()=>m.current=!0),onCompositionEnd:O(r.onCompositionEnd,()=>{m.current=!1,T(l=>l.replace(S,""))})}},[B,I,C,p,i,x,E,ze,qe,S]);return{value:R,inputValue:[B,ze],dateToString:k,getContainerProps:_t,getPopoverProps:Et,getFieldProps:zt,getStartInputProps:Ht,getEndInputProps:Gt,getIconProps:Wt,getCalendarProps:Bt}},a=Ge((n,s)=>{const[u,i]=rn("RangeDatePicker",n);let{className:Y,isClearable:p=!0,separator:d,color:D,h:y,height:f,minH:m,minHeight:P,containerProps:h,startInputProps:j,endInputProps:R,iconProps:w,clearIconProps:c,portalProps:M={isDisabled:!0},...V}=tn(i);const{getPopoverProps:v,getContainerProps:b,getCalendarProps:E,getFieldProps:C,getStartInputProps:S,getEndInputProps:I,getIconProps:x,value:H}=on(V),[Ee,k]=H??[];y??(y=f),m??(m=P);const z={w:"100%",h:"fit-content",color:D,...u.container};return e.jsx(Nt,{value:u,children:e.jsx(Zt,{...v(),children:e.jsxs(_.div,{className:Ft("ui-range-date-picker",Y),__css:z,...b(h),children:[e.jsxs(_.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...u.inner},children:[e.jsx(sn,{separator:d,value:H,...C({h:y,minH:m}),startInputProps:S(j,s),endInputProps:I(R)}),p&&(Ee||k)?e.jsx(Lt,{...x({clear:!0,...c})}):e.jsx(Ut,{...x({clear:!1,...w})})]}),e.jsx(an,{...M,children:e.jsx($t,{className:"ui-range-date-picker__popover",__css:{...u.list},children:e.jsx(At,{className:"ui-range-date-picker__calendar",...E()})})})]})})})}),sn=Ge(({className:n,value:s=[],h:u,minH:i,startInputProps:Y,endInputProps:p,separator:d="-",...D},y)=>{const f=Jt(),[m,P]=s,{placeholder:h,ref:j,...R}=Y??{},{placeholder:w,...c}=p??{},v=!!h||!!w||(!!m||!!P),b={pe:"2rem",h:u,minH:i,display:"flex",alignItems:"center",...f.field};return e.jsx(en,{children:e.jsxs(_.div,{className:Ft("ui-range-date-picker__field",n),__css:b,...D,children:[e.jsx($e,{ref:We(y,j),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:h,...R}),v&&d?e.jsx(_.span,{"data-placeholder":Ot(!m),marginInline:"0.25rem",children:d}):null,e.jsx($e,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})}),$e=Ge(({className:n,value:s,placeholder:u,...i},Y)=>{const[p,d]=Qt(i,Xt),D={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(_.div,{className:n,__css:D,...p,children:[e.jsx(_.span,{"data-placeholder":Ot(!s),opacity:s?0:1,children:s||u}),e.jsx(_.input,{ref:Y,value:s,position:"absolute",left:"0",...d})]})}),vo={title:"Components / Forms / RangeDatePicker",component:a},N=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{size:"xl",children:"Solid"}),e.jsx(He,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Le.map(n=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))}),e.jsx(Ze,{size:"xl",children:"Subtle"}),e.jsx(He,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Le.map(n=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))})]}),Q=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),Z=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),ae=()=>e.jsx(a,{separator:"~"}),re=()=>e.jsx(a,{maxSelectValues:3}),te=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),ne=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:n=>new Date(n)}),se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),le=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),de=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),he=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),Me=()=>{const n=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:n})},ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:n=>n.getDay()===0||n.getDay()===6}),we=()=>e.jsx(a,{locale:"ja"}),fe=()=>e.jsxs(He,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),Pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),xe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),ke=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),je=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),Se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(nn,{})}})]}),Fe=()=>{const[n,s]=g.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:n,onChangeType:s})},Oe=()=>{const[n,s]=g.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:n,onChangeMonth:s})},Ve=()=>{const[n,s]=g.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:n,onChange:s})},Te=()=>{var p;const{control:n,handleSubmit:s,watch:u,formState:{errors:i}}=bt(),Y=d=>console.log("submit:",d);return console.log("watch:",u()),e.jsxs(Vt,{as:"form",onSubmit:s(Y),children:[e.jsx(A,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(p=i.multiDatePicker)==null?void 0:p.message,children:e.jsx(It,{name:"multiDatePicker",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(Tt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},_e=()=>{var d;const n={multiDatePicker:[new Date]},{control:s,handleSubmit:u,watch:i,formState:{errors:Y}}=bt({defaultValues:n}),p=D=>console.log("submit:",D);return console.log("watch:",i()),e.jsxs(Vt,{as:"form",onSubmit:u(p),children:[e.jsx(A,{isInvalid:!!Y.multiDatePicker,label:"Date to reserve",errorMessage:(d=Y.multiDatePicker)==null?void 0:d.message,children:e.jsx(It,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D})})}),e.jsx(Tt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ea,aa,ra;N.parameters={...N.parameters,docs:{...(ea=N.parameters)==null?void 0:ea.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(ra=(aa=N.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var ta,na,oa;L.parameters={...L.parameters,docs:{...(ta=L.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(oa=(na=L.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,la,ca;U.parameters={...U.parameters,docs:{...(sa=U.parameters)==null?void 0:sa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(ca=(la=U.parameters)==null?void 0:la.docs)==null?void 0:ca.source}}};var ia,da,Da;J.parameters={...J.parameters,docs:{...(ia=J.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Da=(da=J.parameters)==null?void 0:da.docs)==null?void 0:Da.source}}};var ua,Ya,pa;K.parameters={...K.parameters,docs:{...(ua=K.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
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
}`,...(pa=(Ya=K.parameters)==null?void 0:Ya.docs)==null?void 0:pa.source}}};var ma,ha,Ma;Q.parameters={...Q.parameters,docs:{...(ma=Q.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Ma=(ha=Q.parameters)==null?void 0:ha.docs)==null?void 0:Ma.source}}};var ga,wa,fa;X.parameters={...X.parameters,docs:{...(ga=X.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(fa=(wa=X.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var Pa,xa,ka;Z.parameters={...Z.parameters,docs:{...(Pa=Z.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(ka=(xa=Z.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var ya,ja,Sa;$.parameters={...$.parameters,docs:{...(ya=$.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(Sa=(ja=$.parameters)==null?void 0:ja.docs)==null?void 0:Sa.source}}};var Ca,Ra,va;ee.parameters={...ee.parameters,docs:{...(Ca=ee.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(va=(Ra=ee.parameters)==null?void 0:Ra.docs)==null?void 0:va.source}}};var ba,Ia,Fa;ae.parameters={...ae.parameters,docs:{...(ba=ae.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(Fa=(Ia=ae.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Oa,Va,Ta;re.parameters={...re.parameters,docs:{...(Oa=re.parameters)==null?void 0:Oa.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ta=(Va=re.parameters)==null?void 0:Va.docs)==null?void 0:Ta.source}}};var _a,Ea,za;te.parameters={...te.parameters,docs:{...(_a=te.parameters)==null?void 0:_a.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(za=(Ea=te.parameters)==null?void 0:Ea.docs)==null?void 0:za.source}}};var Ba,Wa,Ha;ne.parameters={...ne.parameters,docs:{...(Ba=ne.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(Ha=(Wa=ne.parameters)==null?void 0:Wa.docs)==null?void 0:Ha.source}}};var Ga,Aa,qa;oe.parameters={...oe.parameters,docs:{...(Ga=oe.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(qa=(Aa=oe.parameters)==null?void 0:Aa.docs)==null?void 0:qa.source}}};var Na,La,Ua;se.parameters={...se.parameters,docs:{...(Na=se.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(Ua=(La=se.parameters)==null?void 0:La.docs)==null?void 0:Ua.source}}};var Ja,Ka,Qa;le.parameters={...le.parameters,docs:{...(Ja=le.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(Qa=(Ka=le.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,Za,$a;ce.parameters={...ce.parameters,docs:{...(Xa=ce.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...($a=(Za=ce.parameters)==null?void 0:Za.docs)==null?void 0:$a.source}}};var er,ar,rr;ie.parameters={...ie.parameters,docs:{...(er=ie.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(rr=(ar=ie.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var tr,nr,or;de.parameters={...de.parameters,docs:{...(tr=de.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(or=(nr=de.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var sr,lr,cr;De.parameters={...De.parameters,docs:{...(sr=De.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(cr=(lr=De.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ir,dr,Dr;ue.parameters={...ue.parameters,docs:{...(ir=ue.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Dr=(dr=ue.parameters)==null?void 0:dr.docs)==null?void 0:Dr.source}}};var ur,Yr,pr;Ye.parameters={...Ye.parameters,docs:{...(ur=Ye.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(pr=(Yr=Ye.parameters)==null?void 0:Yr.docs)==null?void 0:pr.source}}};var mr,hr,Mr;pe.parameters={...pe.parameters,docs:{...(mr=pe.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(Mr=(hr=pe.parameters)==null?void 0:hr.docs)==null?void 0:Mr.source}}};var gr,wr,fr;me.parameters={...me.parameters,docs:{...(gr=me.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(fr=(wr=me.parameters)==null?void 0:wr.docs)==null?void 0:fr.source}}};var Pr,xr,kr;he.parameters={...he.parameters,docs:{...(Pr=he.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(kr=(xr=he.parameters)==null?void 0:xr.docs)==null?void 0:kr.source}}};var yr,jr,Sr;Me.parameters={...Me.parameters,docs:{...(yr=Me.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(Sr=(jr=Me.parameters)==null?void 0:jr.docs)==null?void 0:Sr.source}}};var Cr,Rr,vr;ge.parameters={...ge.parameters,docs:{...(Cr=ge.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(vr=(Rr=ge.parameters)==null?void 0:Rr.docs)==null?void 0:vr.source}}};var br,Ir,Fr;we.parameters={...we.parameters,docs:{...(br=we.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Fr=(Ir=we.parameters)==null?void 0:Ir.docs)==null?void 0:Fr.source}}};var Or,Vr,Tr;fe.parameters={...fe.parameters,docs:{...(Or=fe.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Tr=(Vr=fe.parameters)==null?void 0:Vr.docs)==null?void 0:Tr.source}}};var _r,Er,zr;Pe.parameters={...Pe.parameters,docs:{...(_r=Pe.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(zr=(Er=Pe.parameters)==null?void 0:Er.docs)==null?void 0:zr.source}}};var Br,Wr,Hr;xe.parameters={...xe.parameters,docs:{...(Br=xe.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(Hr=(Wr=xe.parameters)==null?void 0:Wr.docs)==null?void 0:Hr.source}}};var Gr,Ar,qr;ke.parameters={...ke.parameters,docs:{...(Gr=ke.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(qr=(Ar=ke.parameters)==null?void 0:Ar.docs)==null?void 0:qr.source}}};var Nr,Lr,Ur;ye.parameters={...ye.parameters,docs:{...(Nr=ye.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(Ur=(Lr=ye.parameters)==null?void 0:Lr.docs)==null?void 0:Ur.source}}};var Jr,Kr,Qr;je.parameters={...je.parameters,docs:{...(Jr=je.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(Qr=(Kr=je.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...($r=(Zr=Se.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var et,at,rt;Ce.parameters={...Ce.parameters,docs:{...(et=Ce.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(rt=(at=Ce.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var tt,nt,ot;Re.parameters={...Re.parameters,docs:{...(tt=Re.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(ot=(nt=Re.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,lt,ct;ve.parameters={...ve.parameters,docs:{...(st=ve.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(ct=(lt=ve.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var it,dt,Dt;be.parameters={...be.parameters,docs:{...(it=be.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(Dt=(dt=be.parameters)==null?void 0:dt.docs)==null?void 0:Dt.source}}};var ut,Yt,pt;Ie.parameters={...Ie.parameters,docs:{...(ut=Ie.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(pt=(Yt=Ie.parameters)==null?void 0:Yt.docs)==null?void 0:pt.source}}};var mt,ht,Mt;Fe.parameters={...Fe.parameters,docs:{...(mt=Fe.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(Mt=(ht=Fe.parameters)==null?void 0:ht.docs)==null?void 0:Mt.source}}};var gt,wt,ft;Oe.parameters={...Oe.parameters,docs:{...(gt=Oe.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(ft=(wt=Oe.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};var Pt,xt,kt;Ve.parameters={...Ve.parameters,docs:{...(Pt=Ve.parameters)==null?void 0:Pt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(kt=(xt=Ve.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var yt,jt,St;Te.parameters={...Te.parameters,docs:{...(yt=Te.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
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
}`,...(St=(jt=Te.parameters)==null?void 0:jt.docs)==null?void 0:St.source}}};var Ct,Rt,vt;_e.parameters={..._e.parameters,docs:{...(Ct=_e.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
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
}`,...(vt=(Rt=_e.parameters)==null?void 0:Rt.docs)==null?void 0:vt.source}}};const bo=["basic","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{bo as __namedExportsOrder,N as basic,Oe as customControlMonth,Fe as customControlType,Ve as customControlValue,Ie as customIcon,vo as default,Se as disabledAllowInput,ye as disabledCloseOnBlur,ke as disabledCloseOnSelect,Re as disabledControls,je as disabledIsClearable,Ce as disabledOutsideDays,ve as disabledWeekdays,be as hiddenOutsideDays,de as isDisabled,ue as isInvalid,De as isReadonly,Te as reactHookForm,_e as reactHookFormWithDefaultValue,pe as withAllowInputBeyond,Pe as withAmountOfMonths,ee as withBorderColor,U as withCalendarSize,K as withColorScheme,Z as withDefaultMonth,X as withDefaultType,Q as withDefaultValue,ie as withDuration,ge as withExcludeDate,$ as withFirstDayOfWeek,fe as withFormat,ce as withGutter,Me as withHolidays,ne as withInputFormat,we as withLocale,re as withMaxSelectedValue,Ye as withMinMaxDate,le as withOffset,xe as withPaginateBy,oe as withParseDate,te as withPattern,se as withPlacement,ae as withSeparator,L as withSize,me as withToday,J as withVariant,he as withWeekendDays};
