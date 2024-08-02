import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as P}from"./index-BwDkhjyp.js";import{u as Vt,C as Tt}from"./index.esm-CnEPCCvu.js";import{c as Ke}from"./components-MNMsi6MI.js";import{d as N,a as Qe,i as Xe,C as Nt}from"./ja-CyGD13Rb.js";import{u as Lt,a as Ut,c as Jt,d as Kt,e as Qt}from"./date-picker-BHjeCNMl.js";import{u as Xt}from"./index-Irie4EHF.js";import{g as Ze,N as $e,U as ea,f as Ge,a9 as aa,a as Ae,h as V,b as z,c as _t,d as Et,a0 as Zt,a1 as $t}from"./factory-BXeT7qA-.js";import{P as en,b as an,a as rn}from"./popover-content-CR4_9T1h.js";import{P as tn}from"./container-portal-D_8J7oaj.js";import{f as Ne}from"./forward-ref-BmTAT9U5.js";import{a as nn}from"./use-component-style-DRlwxZhB.js";import{o as on}from"./theme-provider-CgekAyNK.js";import{H as ra}from"./heading-D4rAEhGn.js";import{G as qe}from"./grid-BJye46w0.js";import{F as A}from"./form-control-CqHILFcM.js";import{G as sn}from"./ghost-DhH8WmyH.js";import{V as zt}from"./stack-By0izq3K.js";import{B as Bt}from"./button-B4naN1bU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-xf8c1cao.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-vn_aFqYR.js";import"./index-Dzn7FVja.js";import"./motion-CcTWI5_V.js";import"./loading-provider-BlDKCDBl.js";import"./index-Dxynqg56.js";import"./Combination-CONbhR2A.js";import"./loading-mQT9J7oF.js";import"./icon-DIrcXz1L.js";import"./index-jt6EZpVS.js";import"./motion-DhpH0FRI.js";import"./index-UcjmprJc.js";import"./notice-C0m_B0AJ.js";import"./alert-Bg8_w__7.js";import"./close-button-DV2TJvIJ.js";import"./use-ripple-2cGyX1K8.js";import"./container-2ltlYRD5.js";import"./box-B1h8yYhg.js";import"./text-CkzTM_kh.js";import"./checkbox-Dncp1lmg.js";import"./index-CEihWUfX.js";import"./flex-28tKwT7e.js";import"./index-CXLSpR74.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-AYHfqsqL.js";import"./index-XSAGmtry.js";import"./index-D5OdYTIO.js";import"./index-B0klFHMr.js";import"./index-D5u8eIG7.js";import"./index-BEzKMtfG.js";import"./slide-fade-CTxSPoDC.js";import"./utils-DYgquvih.js";import"./scale-fade-hIdHgWHj.js";import"./index-DBCDrfEK.js";import"./index-PMfx84N2.js";import"./select-DmB-yekh.js";import"./option-CCIYLpqk.js";import"./index-CP_iHTUG.js";import"./icon-button-PjYt-A6x.js";import"./extends-CF3RwP-h.js";import"./index-BzaPwyBI.js";import"./index-Du0-7Fls.js";import"./index-XokATsxS.js";import"./index-DxjWwZXO.js";import"./lucide-icon-ByK7dqYt.js";const ln=({value:n,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:m,endPlaceholder:h,closeOnSelect:d=!0,allowInputBeyond:D=!1,maxSelectValues:k,...x})=>{const M=P.useRef(!1),g=P.useRef(null),u=P.useRef(null),y=P.useRef(void 0),[j,w]=Xt({value:n,defaultValue:s,onChange:Y}),[c,p]=j??[],T=p&&Ze(k)?N(p).subtract(k-1,"day").toDate():void 0,v=c&&Ze(k)?N(c).add(k-1,"day").toDate():void 0,{containerRef:b,id:_,allowInput:R,pattern:S,inputProps:I,formControlProps:C,isOpen:H,onClose:q,dateToString:f,stringToDate:B,getContainerProps:ze,getPopoverProps:Be,getFieldProps:Wt,getCalendarProps:Ht,getIconProps:Gt}=Lt({...x,maxSelectValues:k,allowInputBeyond:D,enableRange:!0,value:j,defaultValue:s,autoFocus:!1,onChange:([r,o])=>{E(f(r)??""),F(f(o)??""),y.current=[r,o],w([r,o]),d&&r&&o&&q()},onClear:()=>{var r;E(""),F(""),w([]),y.current=void 0,R&&H&&((r=g.current)==null||r.focus())},onClick:r=>{var o,t,l;H&&(c?(t=u.current)==null||t.focus():(o=g.current)==null||o.focus()),(l=x.onClick)==null||l.call(x,r)},onClose:()=>{var t;const[r,o]=y.current??j??[];E(f(r)??""),F(f(o)??""),y.current=void 0,(t=x.onClose)==null||t.call(x)},onEnter:()=>{var t,l,G;if(M.current||!b.current)return;const r=$e(b.current);if(ea(r,g.current)){const O=f(c);if(O){E(O);const Je=(((t=u.current)==null?void 0:t.value)??"").length;(l=u.current)==null||l.focus(),(G=u.current)==null||G.setSelectionRange(Je,Je)}}else{const O=f(p);O&&F(O)}},onDelete:r=>{var G,O,He;if(!u.current||u.current.value.length>1||!b.current)return;const o=$e(b.current);if(!ea(o,u.current))return;r.preventDefault(),r.stopPropagation(),F(""),w([c,void 0]);const l=(((G=g.current)==null?void 0:G.value)??"").length;(O=g.current)==null||O.focus(),(He=g.current)==null||He.setSelectionRange(l,l)}}),[W,E]=P.useState(f(c)??""),[We,F]=P.useState(f(p)??""),Le=P.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(S,""));let t=B(o);t&&N(t).isValid()?(D||T&&Qe(t,T)&&(t=T),p&&Xe(t,p)&&(t=p)):t=void 0,y.current=[t,p],w([t,p]),E(o)},[S,B,D,T,w,p]),Ue=P.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(S,""));let t=B(o);t&&N(t).isValid()?(D||v&&Xe(t,v)&&(t=v),c&&Qe(t,c)&&(t=c)):t=void 0,y.current=[c,t],w([c,t]),F(o)},[c,D,v,S,B,w]);Ge(()=>{w(n??[])},[n]),Ge(()=>{g.current&&aa(g.current)||E(f(c)??"")},[j]),Ge(()=>{u.current&&aa(u.current)||F(f(p)??"")},[j]);const At=P.useCallback((r={},o)=>{const t={...r.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:m??i,...C,...I,...r,ref:Ae(o,g),style:t,id:_,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:C.readOnly?"default":"text",pointerEvents:C.disabled?"none":"auto",onChange:V(r.onChange,Le),onClick:V(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:V(r.onCompositionEnd,()=>{M.current=!1,E(l=>l.replace(S,""))})}},[I,R,m,i,C,_,W,Le,S]),qt=P.useCallback((r={},o)=>{const t={...r.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:h??i,...C,...I,...r,ref:Ae(o,u),style:t,id:_,tabIndex:!R||!W?-1:0,value:We??"",cursor:C.readOnly?"default":"text",pointerEvents:C.disabled?"none":"auto",onChange:V(r.onChange,Ue),onClick:V(r.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:V(r.onCompositionEnd,()=>{M.current=!1,F(l=>l.replace(S,""))})}},[W,I,R,h,i,C,_,We,Ue,S]);return{id:_,value:j,inputValue:[W,We],dateToString:f,getContainerProps:ze,getPopoverProps:Be,getFieldProps:Wt,getStartInputProps:At,getEndInputProps:qt,getIconProps:Gt,getCalendarProps:Ht}},a=Ne((n,s)=>{const[Y,i]=nn("RangeDatePicker",n);let{className:m,isClearable:h=!0,separator:d,color:D,h:k,height:x,minH:M,minHeight:g,containerProps:u,fieldProps:y,startInputProps:j,endInputProps:w,iconProps:c,clearIconProps:p,portalProps:T={isDisabled:!0},...v}=on(i);const{getPopoverProps:b,getContainerProps:_,getCalendarProps:R,getFieldProps:S,getStartInputProps:I,getEndInputProps:C,getIconProps:H,value:q,id:f}=ln(v),[B,ze]=q??[];k??(k=x),M??(M=g);const Be={w:"100%",h:"fit-content",color:D,...Y.container};return e.jsx(Ut,{value:Y,children:e.jsx(en,{...b(),children:e.jsxs(z.div,{className:_t("ui-range-date-picker",m),__css:Be,..._(u),children:[e.jsxs(z.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(cn,{separator:d,value:q,...S({h:k,minH:M,...y}),startInputProps:I(j,s),endInputProps:C(w)}),h&&(B||ze)?e.jsx(Jt,{...H({clear:!0,...p})}):e.jsx(Kt,{...H({clear:!1,...c})})]}),e.jsx(tn,{...T,children:e.jsx(an,{id:f,role:"dialog","aria-modal":"true",className:"ui-range-date-picker__popover",__css:{...Y.list},children:e.jsx(Nt,{className:"ui-range-date-picker__calendar",...R()})})})]})})})}),cn=Ne(({className:n,value:s=[],h:Y,minH:i,startInputProps:m,endInputProps:h,separator:d="-",...D},k)=>{const x=Qt(),[M,g]=s,{placeholder:u,ref:y,...j}=m??{},{placeholder:w,...c}=h??{},v=!!u||!!w||(!!M||!!g),b={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...x.field};return e.jsx(rn,{children:e.jsxs(z.div,{className:_t("ui-range-date-picker__field",n),__css:b,...D,children:[e.jsx(ta,{ref:Ae(k,y),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:u,...j}),v&&d?e.jsx(z.span,{"data-placeholder":Et(!M),marginInline:"0.25rem",children:d}):null,e.jsx(ta,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})}),ta=Ne(({className:n,value:s,placeholder:Y,...i},m)=>{const[h,d]=Zt(i,$t),D={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(z.div,{className:n,__css:D,...h,children:[e.jsx(z.span,{"data-placeholder":Et(!s),opacity:s?0:1,children:s||Y}),e.jsx(z.input,{ref:m,value:s,position:"absolute",left:"0",...d})]})}),jo={title:"Components / Forms / RangeDatePicker",component:a},L=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(ra,{size:"xl",children:"Solid"}),e.jsx(qe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Ke.map(n=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))}),e.jsx(ra,{size:"xl",children:"Subtle"}),e.jsx(qe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Ke.map(n=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:n,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},n))})]}),X=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),$=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),re=()=>e.jsx(a,{separator:"~"}),te=()=>e.jsx(a,{maxSelectValues:3}),ne=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),oe=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:n=>new Date(n)}),le=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),de=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),De=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(A,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),he=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),Me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),ge=()=>{const n=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:n})},we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:n=>n.getDay()===0||n.getDay()===6}),fe=()=>e.jsx(a,{locale:"ja"}),Pe=()=>e.jsxs(qe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),ke=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),je=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),Se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(sn,{})}})]}),Oe=()=>{const[n,s]=P.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:n,onChangeType:s})},Ve=()=>{const[n,s]=P.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:n,onChangeMonth:s})},Te=()=>{const[n,s]=P.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:n,onChange:s})},_e=()=>{var h;const{control:n,handleSubmit:s,watch:Y,formState:{errors:i}}=Vt(),m=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(zt,{as:"form",onSubmit:s(m),children:[e.jsx(A,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(h=i.multiDatePicker)==null?void 0:h.message,children:e.jsx(Tt,{name:"multiDatePicker",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(Bt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var d;const n={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:m}}=Vt({defaultValues:n}),h=D=>console.log("submit:",D);return console.log("watch:",i()),e.jsxs(zt,{as:"form",onSubmit:Y(h),children:[e.jsx(A,{isInvalid:!!m.multiDatePicker,label:"Date to reserve",errorMessage:(d=m.multiDatePicker)==null?void 0:d.message,children:e.jsx(Tt,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D})})}),e.jsx(Bt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var na,oa,sa;L.parameters={...L.parameters,docs:{...(na=L.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(sa=(oa=L.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var la,ca,ia;U.parameters={...U.parameters,docs:{...(la=U.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(ia=(ca=U.parameters)==null?void 0:ca.docs)==null?void 0:ia.source}}};var da,Da,ua;J.parameters={...J.parameters,docs:{...(da=J.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(ua=(Da=J.parameters)==null?void 0:Da.docs)==null?void 0:ua.source}}};var Ya,pa,ma;K.parameters={...K.parameters,docs:{...(Ya=K.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ma=(pa=K.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,Ma,ga;Q.parameters={...Q.parameters,docs:{...(ha=Q.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(ga=(Ma=Q.parameters)==null?void 0:Ma.docs)==null?void 0:ga.source}}};var wa,fa,Pa;X.parameters={...X.parameters,docs:{...(wa=X.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Pa=(fa=X.parameters)==null?void 0:fa.docs)==null?void 0:Pa.source}}};var xa,ka,ya;Z.parameters={...Z.parameters,docs:{...(xa=Z.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(ya=(ka=Z.parameters)==null?void 0:ka.docs)==null?void 0:ya.source}}};var ja,Sa,Ca;$.parameters={...$.parameters,docs:{...(ja=$.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(Ca=(Sa=$.parameters)==null?void 0:Sa.docs)==null?void 0:Ca.source}}};var Ra,va,ba;ee.parameters={...ee.parameters,docs:{...(Ra=ee.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(ba=(va=ee.parameters)==null?void 0:va.docs)==null?void 0:ba.source}}};var Ia,Fa,Oa;ae.parameters={...ae.parameters,docs:{...(Ia=ae.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Oa=(Fa=ae.parameters)==null?void 0:Fa.docs)==null?void 0:Oa.source}}};var Va,Ta,_a;re.parameters={...re.parameters,docs:{...(Va=re.parameters)==null?void 0:Va.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(_a=(Ta=re.parameters)==null?void 0:Ta.docs)==null?void 0:_a.source}}};var Ea,za,Ba;te.parameters={...te.parameters,docs:{...(Ea=te.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ba=(za=te.parameters)==null?void 0:za.docs)==null?void 0:Ba.source}}};var Wa,Ha,Ga;ne.parameters={...ne.parameters,docs:{...(Wa=ne.parameters)==null?void 0:Wa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(Ga=(Ha=ne.parameters)==null?void 0:Ha.docs)==null?void 0:Ga.source}}};var Aa,qa,Na;oe.parameters={...oe.parameters,docs:{...(Aa=oe.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(Na=(qa=oe.parameters)==null?void 0:qa.docs)==null?void 0:Na.source}}};var La,Ua,Ja;se.parameters={...se.parameters,docs:{...(La=se.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(Ja=(Ua=se.parameters)==null?void 0:Ua.docs)==null?void 0:Ja.source}}};var Ka,Qa,Xa;le.parameters={...le.parameters,docs:{...(Ka=le.parameters)==null?void 0:Ka.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(Xa=(Qa=le.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var Za,$a,er;ce.parameters={...ce.parameters,docs:{...(Za=ce.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(er=($a=ce.parameters)==null?void 0:$a.docs)==null?void 0:er.source}}};var ar,rr,tr;ie.parameters={...ie.parameters,docs:{...(ar=ie.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(tr=(rr=ie.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var nr,or,sr;de.parameters={...de.parameters,docs:{...(nr=de.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(sr=(or=de.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var lr,cr,ir;De.parameters={...De.parameters,docs:{...(lr=De.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(ir=(cr=De.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,Dr,ur;ue.parameters={...ue.parameters,docs:{...(dr=ue.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(ur=(Dr=ue.parameters)==null?void 0:Dr.docs)==null?void 0:ur.source}}};var Yr,pr,mr;Ye.parameters={...Ye.parameters,docs:{...(Yr=Ye.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(mr=(pr=Ye.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var hr,Mr,gr;pe.parameters={...pe.parameters,docs:{...(hr=pe.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(gr=(Mr=pe.parameters)==null?void 0:Mr.docs)==null?void 0:gr.source}}};var wr,fr,Pr;me.parameters={...me.parameters,docs:{...(wr=me.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(Pr=(fr=me.parameters)==null?void 0:fr.docs)==null?void 0:Pr.source}}};var xr,kr,yr;he.parameters={...he.parameters,docs:{...(xr=he.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(yr=(kr=he.parameters)==null?void 0:kr.docs)==null?void 0:yr.source}}};var jr,Sr,Cr;Me.parameters={...Me.parameters,docs:{...(jr=Me.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Cr=(Sr=Me.parameters)==null?void 0:Sr.docs)==null?void 0:Cr.source}}};var Rr,vr,br;ge.parameters={...ge.parameters,docs:{...(Rr=ge.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(br=(vr=ge.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var Ir,Fr,Or;we.parameters={...we.parameters,docs:{...(Ir=we.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Or=(Fr=we.parameters)==null?void 0:Fr.docs)==null?void 0:Or.source}}};var Vr,Tr,_r;fe.parameters={...fe.parameters,docs:{...(Vr=fe.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(_r=(Tr=fe.parameters)==null?void 0:Tr.docs)==null?void 0:_r.source}}};var Er,zr,Br;Pe.parameters={...Pe.parameters,docs:{...(Er=Pe.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Br=(zr=Pe.parameters)==null?void 0:zr.docs)==null?void 0:Br.source}}};var Wr,Hr,Gr;xe.parameters={...xe.parameters,docs:{...(Wr=xe.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(Gr=(Hr=xe.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Ar,qr,Nr;ke.parameters={...ke.parameters,docs:{...(Ar=ke.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(Nr=(qr=ke.parameters)==null?void 0:qr.docs)==null?void 0:Nr.source}}};var Lr,Ur,Jr;ye.parameters={...ye.parameters,docs:{...(Lr=ye.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(Jr=(Ur=ye.parameters)==null?void 0:Ur.docs)==null?void 0:Jr.source}}};var Kr,Qr,Xr;je.parameters={...je.parameters,docs:{...(Kr=je.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(Xr=(Qr=je.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var Zr,$r,et;Se.parameters={...Se.parameters,docs:{...(Zr=Se.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(et=($r=Se.parameters)==null?void 0:$r.docs)==null?void 0:et.source}}};var at,rt,tt;Ce.parameters={...Ce.parameters,docs:{...(at=Ce.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(tt=(rt=Ce.parameters)==null?void 0:rt.docs)==null?void 0:tt.source}}};var nt,ot,st;Re.parameters={...Re.parameters,docs:{...(nt=Re.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(st=(ot=Re.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,ct,it;ve.parameters={...ve.parameters,docs:{...(lt=ve.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(it=(ct=ve.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var dt,Dt,ut;be.parameters={...be.parameters,docs:{...(dt=be.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(ut=(Dt=be.parameters)==null?void 0:Dt.docs)==null?void 0:ut.source}}};var Yt,pt,mt;Ie.parameters={...Ie.parameters,docs:{...(Yt=Ie.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(mt=(pt=Ie.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,Mt,gt;Fe.parameters={...Fe.parameters,docs:{...(ht=Fe.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(gt=(Mt=Fe.parameters)==null?void 0:Mt.docs)==null?void 0:gt.source}}};var wt,ft,Pt;Oe.parameters={...Oe.parameters,docs:{...(wt=Oe.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(Pt=(ft=Oe.parameters)==null?void 0:ft.docs)==null?void 0:Pt.source}}};var xt,kt,yt;Ve.parameters={...Ve.parameters,docs:{...(xt=Ve.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(yt=(kt=Ve.parameters)==null?void 0:kt.docs)==null?void 0:yt.source}}};var jt,St,Ct;Te.parameters={...Te.parameters,docs:{...(jt=Te.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Ct=(St=Te.parameters)==null?void 0:St.docs)==null?void 0:Ct.source}}};var Rt,vt,bt;_e.parameters={..._e.parameters,docs:{...(Rt=_e.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
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
}`,...(bt=(vt=_e.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var It,Ft,Ot;Ee.parameters={...Ee.parameters,docs:{...(It=Ee.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
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
}`,...(Ot=(Ft=Ee.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};const So=["basic","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{So as __namedExportsOrder,L as basic,Ve as customControlMonth,Oe as customControlType,Te as customControlValue,Fe as customIcon,jo as default,Ce as disabledAllowInput,je as disabledCloseOnBlur,ye as disabledCloseOnSelect,ve as disabledControls,Se as disabledIsClearable,Re as disabledOutsideDays,be as disabledWeekdays,Ie as hiddenOutsideDays,De as isDisabled,Ye as isInvalid,ue as isReadonly,_e as reactHookForm,Ee as reactHookFormWithDefaultValue,me as withAllowInputBeyond,xe as withAmountOfMonths,ae as withBorderColor,J as withCalendarSize,Q as withColorScheme,$ as withDefaultMonth,Z as withDefaultType,X as withDefaultValue,de as withDuration,we as withExcludeDate,ee as withFirstDayOfWeek,Pe as withFormat,ie as withGutter,ge as withHolidays,oe as withInputFormat,fe as withLocale,te as withMaxSelectedValue,pe as withMinMaxDate,ce as withOffset,ke as withPaginateBy,se as withParseDate,ne as withPattern,le as withPlacement,re as withSeparator,U as withSize,he as withToday,K as withVariant,Me as withWeekendDays};
