import{j as e}from"./extends-CwFRzn3r.js";import{d as H,a as na,i as oa,C as en}from"./calendar-CPIjm4e9.js";import{r as f}from"./index-BwDkhjyp.js";import{u as Ut,C as Jt}from"./index.esm-DXPXqkjk.js";import{c as sa}from"./components-CyZ2ecjg.js";import"./ja-trJYuEqc.js";import{u as an,a as rn,c as tn,d as nn,e as on}from"./date-picker-BxzONKdr.js";import{u as sn}from"./index-tU9OGY6h.js";import{g as la,N as ca,W as ia,f as Ke,af as da,a as Qe,h as V,b as B,c as Kt,z as ln,d as Qt,U as cn,a6 as dn}from"./factory-CYpx3TMG.js";import{P as un,b as Dn,a as Yn}from"./popover-content-C9K0DE-R.js";import{P as pn}from"./portal-DfxMOg4r.js";import{f as Ze}from"./forward-ref-BWI-Phbn.js";import{a as mn}from"./use-component-style-CfUS8Ki1.js";import{o as hn}from"./theme-provider-BZKkW4ID.js";import{V as He}from"./stack-C8qilfIS.js";import{B as Ae}from"./button-Bx26J9Y6.js";import{H as ua}from"./heading-C9--xclW.js";import{G as Xe}from"./grid-HRszMdSX.js";import{F as N}from"./form-control-DTumWR9y.js";import{G as Mn}from"./ghost-C8YtfOT4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./icon-button-Dcr2DVaV.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-CFjuI6Rx.js";import"./ui-provider-Bt-rsEu4.js";import"./index-BivS8_08.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-C5VPyroP.js";import"./index-ueIvHVr5.js";import"./Combination-IUp2vs9T.js";import"./loading-DndL1UZp.js";import"./factory-CY7vhjKt.js";import"./notice-D4GyB-ww.js";import"./alert-DIva5QhF.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./container-OoL9K_ni.js";import"./box-CJbYVqkD.js";import"./text-DR0EVEsm.js";import"./checkbox-CXigM3pe.js";import"./index-BUuviwyS.js";import"./index-_SJuZBu6.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-CsU3YgdC.js";import"./index-DEy_TXYI.js";import"./index-DHvgXC6C.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";import"./index-C1nnoSu4.js";import"./index-BAaRSIWS.js";import"./select-DJAkWUA7.js";import"./select-list-Dl92l1Le.js";import"./index-CIt0OHe7.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";import"./index-B8XB3FuZ.js";import"./lucide-icon-cfLZgeB_.js";const gn=({value:r,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:M,endPlaceholder:g,closeOnSelect:d=!0,allowInputBeyond:u=!1,maxSelectValues:C,...P})=>{const k=f.useRef(!1),p=f.useRef(null),D=f.useRef(null),x=f.useRef(void 0),[S,w]=sn({value:r,defaultValue:s,onChange:Y}),[c,m]=S??[],_=m&&la(C)?H(m).subtract(C-1,"day").toDate():void 0,b=c&&la(C)?H(c).add(C-1,"day").toDate():void 0,{containerRef:v,id:T,allowInput:R,pattern:j,inputProps:I,formControlProps:y,isOpen:q,onClose:$,dateToString:h,stringToDate:E,getContainerProps:A,getPopoverProps:Ne,getFieldProps:qe,getCalendarProps:$e,getIconProps:Le}=an({...P,maxSelectValues:C,allowInputBeyond:u,enableRange:!0,value:S,defaultValue:s,autoFocus:!1,onChange:([t,o])=>{z(h(t)??""),F(h(o)??""),x.current=[t,o],w([t,o]),d&&t&&o&&$()},onClear:()=>{var t;z(""),F(""),w([]),x.current=void 0,R&&q&&((t=p.current)==null||t.focus())},onClick:t=>{var o,n,l;q&&(c?(n=D.current)==null||n.focus():(o=p.current)==null||o.focus()),(l=P.onClick)==null||l.call(P,t)},onClose:()=>{var n;const[t,o]=x.current??S??[];z(h(t)??""),F(h(o)??""),x.current=void 0,(n=P.onClose)==null||n.call(P)},onEnter:()=>{var n,l,G;if(k.current||!v.current)return;const t=ca(v.current);if(ia(t,p.current)){const O=h(c);if(O){z(O);const ta=(((n=D.current)==null?void 0:n.value)??"").length;(l=D.current)==null||l.focus(),(G=D.current)==null||G.setSelectionRange(ta,ta)}}else{const O=h(m);O&&F(O)}},onDelete:t=>{var G,O,Je;if(!D.current||D.current.value.length>1||!v.current)return;const o=ca(v.current);if(!ia(o,D.current))return;t.preventDefault(),t.stopPropagation(),F(""),w([c,void 0]);const l=(((G=p.current)==null?void 0:G.value)??"").length;(O=p.current)==null||O.focus(),(Je=p.current)==null||Je.setSelectionRange(l,l)}}),[W,z]=f.useState(h(c)??""),[Ue,F]=f.useState(h(m)??""),aa=f.useCallback(t=>{let o=t.target.value;k.current||(o=o.replace(j,""));let n=E(o);n&&H(n).isValid()?(u||_&&na(n,_)&&(n=_),m&&oa(n,m)&&(n=m)):n=void 0,x.current=[n,m],w([n,m]),z(o)},[j,E,u,_,w,m]),ra=f.useCallback(t=>{let o=t.target.value;k.current||(o=o.replace(j,""));let n=E(o);n&&H(n).isValid()?(u||b&&oa(n,b)&&(n=b),c&&na(n,c)&&(n=c)):n=void 0,x.current=[c,n],w([c,n]),F(o)},[c,u,b,j,E,w]);Ke(()=>{w(r??[])},[r]),Ke(()=>{p.current&&da(p.current)||z(h(c)??"")},[S]),Ke(()=>{D.current&&da(D.current)||F(h(m)??"")},[S]);const Xt=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:M??i,...y,...I,...t,ref:Qe(o,p),style:n,id:T,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:V(t.onChange,aa),onClick:V(t.onClick,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(t.onCompositionStart,()=>k.current=!0),onCompositionEnd:V(t.onCompositionEnd,()=>{k.current=!1,z(l=>l.replace(j,""))})}},[I,R,M,i,y,T,W,aa,j]),Zt=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:g??i,...y,...I,...t,ref:Qe(o,D),style:n,id:T,tabIndex:!R||!W?-1:0,value:Ue??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:V(t.onChange,ra),onClick:V(t.onClick,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(t.onCompositionStart,()=>k.current=!0),onCompositionEnd:V(t.onCompositionEnd,()=>{k.current=!1,F(l=>l.replace(j,""))})}},[W,I,R,g,i,y,T,Ue,ra,j]);return{id:T,value:S,inputValue:[W,Ue],onClose:$,dateToString:h,getContainerProps:A,getPopoverProps:Ne,getFieldProps:qe,getStartInputProps:Xt,getEndInputProps:Zt,getIconProps:Le,getCalendarProps:$e}},a=Ze((r,s)=>{const[Y,i]=mn("RangeDatePicker",r);let{className:M,children:g,isClearable:d=!0,separator:u,color:C,h:P,height:k,minH:p,minHeight:D,containerProps:x,contentProps:S,fieldProps:w,startInputProps:c,endInputProps:m,iconProps:_,clearIconProps:b,portalProps:v={isDisabled:!0},...T}=hn(i);const{getPopoverProps:R,getContainerProps:j,getCalendarProps:I,getFieldProps:y,getStartInputProps:q,getEndInputProps:$,getIconProps:h,onClose:E,value:A,id:Ne}=gn(T),[qe,$e]=A??[];P??(P=k),p??(p=D);const Le={w:"100%",h:"fit-content",color:C,...Y.container};return e.jsx(rn,{value:Y,children:e.jsx(un,{...R(),children:e.jsxs(B.div,{className:Kt("ui-range-date-picker",M),__css:Le,...j(x),children:[e.jsxs(B.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(ea,{separator:u,value:A,...y({h:P,minH:p,...w}),startInputProps:q(c,s),endInputProps:$(m)}),d&&(qe||$e)?e.jsx(tn,{...h({clear:!0,...b})}):e.jsx(nn,{...h({clear:!1,..._})})]}),e.jsx(pn,{...v,children:e.jsxs(Dn,{as:"div",id:Ne,role:"dialog","aria-modal":"true",className:"ui-range-date-picker__content",__css:{...Y.content},...S,children:[e.jsx(en,{className:"ui-range-date-picker__calendar",...I()}),ln(g,{value:A,onClose:E})]})})]})})})});a.displayName="RangeDatePicker";a.__ui__="RangeDatePicker";const ea=Ze(({className:r,value:s=[],h:Y,minH:i,startInputProps:M,endInputProps:g,separator:d="-",...u},C)=>{const P=on(),[k,p]=s,{placeholder:D,ref:x,...S}=M??{},{placeholder:w,...c}=g??{},b=!!D||!!w||(!!k||!!p),v={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...P.field};return e.jsx(Yn,{children:e.jsxs(B.div,{className:Kt("ui-range-date-picker__field",r),__css:v,...u,children:[e.jsx(Ge,{ref:Qe(C,x),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:D,...S}),b&&d?e.jsx(B.span,{"data-placeholder":Qt(!k),marginInline:"0.25rem",children:d}):null,e.jsx(Ge,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})});ea.displayName="RangeDatePickerField";ea.__ui__="RangeDatePickerField";const Ge=Ze(({className:r,value:s,placeholder:Y,...i},M)=>{const[g,d]=cn(i,dn),u={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(B.div,{className:r,__css:u,...g,children:[e.jsx(B.span,{"data-placeholder":Qt(!s),opacity:s?0:1,children:s||Y}),e.jsx(B.input,{ref:M,value:s,position:"absolute",left:"0",...d})]})});Ge.displayName="AutosizingInput";Ge.__ui__="AutosizingInput";const Oo={title:"Components / Forms / RangeDatePicker",component:a},L=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(He,{mt:"sm",children:e.jsx(Ae,{children:"Submit"})})}),e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1,children:({value:r,onClose:s})=>e.jsx(He,{mt:"sm",children:e.jsxs(Ae,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${H(r[0]).format("MM/DD")} -`:"",r[1]?` ${H(r[1]).format("MM/DD")}`:""]})})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(ua,{size:"xl",children:"Solid"}),e.jsx(Xe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:sa.map(r=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))}),e.jsx(ua,{size:"xl",children:"Subtle"}),e.jsx(Xe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:sa.map(r=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))})]}),Z=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),ae=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),ne=()=>e.jsx(a,{separator:"~"}),oe=()=>e.jsx(a,{maxSelectValues:3}),se=()=>e.jsx(a,{minSelectValues:5}),le=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),ce=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r)}),de=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ue=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),De=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),Ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(N,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(N,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(N,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),Pe=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:r})},ke=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:r=>r.getDay()===0||r.getDay()===6}),xe=()=>e.jsx(a,{locale:"ja"}),Se=()=>e.jsxs(Xe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(Mn,{})}})]}),Te=()=>{const[r,s]=f.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:r,onChangeType:s})},ze=()=>{const[r,s]=f.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:r,onChangeMonth:s})},Be=()=>{const[r,s]=f.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},Ee=()=>{var g;const{control:r,handleSubmit:s,watch:Y,formState:{errors:i}}=Ut(),M=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(He,{as:"form",onSubmit:s(M),children:[e.jsx(N,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(g=i.multiDatePicker)==null?void 0:g.message,children:e.jsx(Jt,{name:"multiDatePicker",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},We=()=>{var d;const r={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:M}}=Ut({defaultValues:r}),g=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(He,{as:"form",onSubmit:Y(g),children:[e.jsx(N,{isInvalid:!!M.multiDatePicker,label:"Date to reserve",errorMessage:(d=M.multiDatePicker)==null?void 0:d.message,children:e.jsx(Jt,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...u})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Da,Ya,pa;L.parameters={...L.parameters,docs:{...(Da=L.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(pa=(Ya=L.parameters)==null?void 0:Ya.docs)==null?void 0:pa.source}}};var ma,ha,Ma;U.parameters={...U.parameters,docs:{...(ma=U.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </RangeDatePicker>

      <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false}>
        {({
        value,
        onClose
      }) => <VStack mt="sm">
            <Button isDisabled={!value} onClick={onClose}>
              Submit
              {value[0] ? \` \${dayjs(value[0]).format("MM/DD")} -\` : ""}
              {value[1] ? \` \${dayjs(value[1]).format("MM/DD")}\` : ""}
            </Button>
          </VStack>}
      </RangeDatePicker>
    </>;
}`,...(Ma=(ha=U.parameters)==null?void 0:ha.docs)==null?void 0:Ma.source}}};var ga,wa,fa;J.parameters={...J.parameters,docs:{...(ga=J.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(fa=(wa=J.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var Pa,ka,xa;K.parameters={...K.parameters,docs:{...(Pa=K.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(xa=(ka=K.parameters)==null?void 0:ka.docs)==null?void 0:xa.source}}};var Sa,ja,ya;Q.parameters={...Q.parameters,docs:{...(Sa=Q.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ya=(ja=Q.parameters)==null?void 0:ja.docs)==null?void 0:ya.source}}};var Ca,Ra,ba;X.parameters={...X.parameters,docs:{...(Ca=X.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
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
}`,...(ba=(Ra=X.parameters)==null?void 0:Ra.docs)==null?void 0:ba.source}}};var va,Ia,Fa;Z.parameters={...Z.parameters,docs:{...(va=Z.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Fa=(Ia=Z.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Oa,Va,_a;ee.parameters={...ee.parameters,docs:{...(Oa=ee.parameters)==null?void 0:Oa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(_a=(Va=ee.parameters)==null?void 0:Va.docs)==null?void 0:_a.source}}};var Ta,za,Ba;ae.parameters={...ae.parameters,docs:{...(Ta=ae.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(Ba=(za=ae.parameters)==null?void 0:za.docs)==null?void 0:Ba.source}}};var Ea,Wa,Ha;re.parameters={...re.parameters,docs:{...(Ea=re.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(Ha=(Wa=re.parameters)==null?void 0:Wa.docs)==null?void 0:Ha.source}}};var Aa,Ga,Na;te.parameters={...te.parameters,docs:{...(Aa=te.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Na=(Ga=te.parameters)==null?void 0:Ga.docs)==null?void 0:Na.source}}};var qa,$a,La;ne.parameters={...ne.parameters,docs:{...(qa=ne.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(La=($a=ne.parameters)==null?void 0:$a.docs)==null?void 0:La.source}}};var Ua,Ja,Ka;oe.parameters={...oe.parameters,docs:{...(Ua=oe.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ka=(Ja=oe.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Xa,Za;se.parameters={...se.parameters,docs:{...(Qa=se.parameters)==null?void 0:Qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker minSelectValues={5} />;
}`,...(Za=(Xa=se.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var er,ar,rr;le.parameters={...le.parameters,docs:{...(er=le.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(rr=(ar=le.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var tr,nr,or;ce.parameters={...ce.parameters,docs:{...(tr=ce.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(or=(nr=ce.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var sr,lr,cr;ie.parameters={...ie.parameters,docs:{...(sr=ie.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(cr=(lr=ie.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ir,dr,ur;de.parameters={...de.parameters,docs:{...(ir=de.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(ur=(dr=de.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var Dr,Yr,pr;ue.parameters={...ue.parameters,docs:{...(Dr=ue.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(pr=(Yr=ue.parameters)==null?void 0:Yr.docs)==null?void 0:pr.source}}};var mr,hr,Mr;De.parameters={...De.parameters,docs:{...(mr=De.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(Mr=(hr=De.parameters)==null?void 0:hr.docs)==null?void 0:Mr.source}}};var gr,wr,fr;Ye.parameters={...Ye.parameters,docs:{...(gr=Ye.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(fr=(wr=Ye.parameters)==null?void 0:wr.docs)==null?void 0:fr.source}}};var Pr,kr,xr;pe.parameters={...pe.parameters,docs:{...(Pr=pe.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(xr=(kr=pe.parameters)==null?void 0:kr.docs)==null?void 0:xr.source}}};var Sr,jr,yr;me.parameters={...me.parameters,docs:{...(Sr=me.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(yr=(jr=me.parameters)==null?void 0:jr.docs)==null?void 0:yr.source}}};var Cr,Rr,br;he.parameters={...he.parameters,docs:{...(Cr=he.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(br=(Rr=he.parameters)==null?void 0:Rr.docs)==null?void 0:br.source}}};var vr,Ir,Fr;Me.parameters={...Me.parameters,docs:{...(vr=Me.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(Fr=(Ir=Me.parameters)==null?void 0:Ir.docs)==null?void 0:Fr.source}}};var Or,Vr,_r;ge.parameters={...ge.parameters,docs:{...(Or=ge.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(_r=(Vr=ge.parameters)==null?void 0:Vr.docs)==null?void 0:_r.source}}};var Tr,zr,Br;we.parameters={...we.parameters,docs:{...(Tr=we.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Br=(zr=we.parameters)==null?void 0:zr.docs)==null?void 0:Br.source}}};var Er,Wr,Hr;fe.parameters={...fe.parameters,docs:{...(Er=fe.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Hr=(Wr=fe.parameters)==null?void 0:Wr.docs)==null?void 0:Hr.source}}};var Ar,Gr,Nr;Pe.parameters={...Pe.parameters,docs:{...(Ar=Pe.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(Nr=(Gr=Pe.parameters)==null?void 0:Gr.docs)==null?void 0:Nr.source}}};var qr,$r,Lr;ke.parameters={...ke.parameters,docs:{...(qr=ke.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Lr=($r=ke.parameters)==null?void 0:$r.docs)==null?void 0:Lr.source}}};var Ur,Jr,Kr;xe.parameters={...xe.parameters,docs:{...(Ur=xe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Kr=(Jr=xe.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Xr,Zr;Se.parameters={...Se.parameters,docs:{...(Qr=Se.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Zr=(Xr=Se.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var et,at,rt;je.parameters={...je.parameters,docs:{...(et=je.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(rt=(at=je.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var tt,nt,ot;ye.parameters={...ye.parameters,docs:{...(tt=ye.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(ot=(nt=ye.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,lt,ct;Ce.parameters={...Ce.parameters,docs:{...(st=Ce.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(ct=(lt=Ce.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var it,dt,ut;Re.parameters={...Re.parameters,docs:{...(it=Re.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(ut=(dt=Re.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var Dt,Yt,pt;be.parameters={...be.parameters,docs:{...(Dt=be.parameters)==null?void 0:Dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(pt=(Yt=be.parameters)==null?void 0:Yt.docs)==null?void 0:pt.source}}};var mt,ht,Mt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(Mt=(ht=ve.parameters)==null?void 0:ht.docs)==null?void 0:Mt.source}}};var gt,wt,ft;Ie.parameters={...Ie.parameters,docs:{...(gt=Ie.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(ft=(wt=Ie.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};var Pt,kt,xt;Fe.parameters={...Fe.parameters,docs:{...(Pt=Fe.parameters)==null?void 0:Pt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(xt=(kt=Fe.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var St,jt,yt;Oe.parameters={...Oe.parameters,docs:{...(St=Oe.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(yt=(jt=Oe.parameters)==null?void 0:jt.docs)==null?void 0:yt.source}}};var Ct,Rt,bt;Ve.parameters={...Ve.parameters,docs:{...(Ct=Ve.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(bt=(Rt=Ve.parameters)==null?void 0:Rt.docs)==null?void 0:bt.source}}};var vt,It,Ft;_e.parameters={..._e.parameters,docs:{...(vt=_e.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(Ft=(It=_e.parameters)==null?void 0:It.docs)==null?void 0:Ft.source}}};var Ot,Vt,_t;Te.parameters={...Te.parameters,docs:{...(Ot=Te.parameters)==null?void 0:Ot.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(_t=(Vt=Te.parameters)==null?void 0:Vt.docs)==null?void 0:_t.source}}};var Tt,zt,Bt;ze.parameters={...ze.parameters,docs:{...(Tt=ze.parameters)==null?void 0:Tt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(Bt=(zt=ze.parameters)==null?void 0:zt.docs)==null?void 0:Bt.source}}};var Et,Wt,Ht;Be.parameters={...Be.parameters,docs:{...(Et=Be.parameters)==null?void 0:Et.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Ht=(Wt=Be.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};var At,Gt,Nt;Ee.parameters={...Ee.parameters,docs:{...(At=Ee.parameters)==null?void 0:At.docs,source:{originalSource:`() => {
  interface Data {
    multiDatePicker: [Date?, Date?];
  }
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
}`,...(Nt=(Gt=Ee.parameters)==null?void 0:Gt.docs)==null?void 0:Nt.source}}};var qt,$t,Lt;We.parameters={...We.parameters,docs:{...(qt=We.parameters)==null?void 0:qt.docs,source:{originalSource:`() => {
  interface Data {
    multiDatePicker: [Date?, Date?];
  }
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
}`,...(Lt=($t=We.parameters)==null?void 0:$t.docs)==null?void 0:Lt.source}}};const Vo=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withMinSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Vo as __namedExportsOrder,L as basic,ze as customControlMonth,Te as customControlType,Be as customControlValue,_e as customIcon,Oo as default,ve as disabledAllowInput,Re as disabledCloseOnBlur,Ce as disabledCloseOnSelect,Fe as disabledControls,be as disabledIsClearable,Ie as disabledOutsideDays,Oe as disabledWeekdays,Ve as hiddenOutsideDays,pe as isDisabled,he as isInvalid,me as isReadonly,Ee as reactHookForm,We as reactHookFormWithDefaultValue,ge as withAllowInputBeyond,je as withAmountOfMonths,te as withBorderColor,K as withCalendarSize,U as withChildren,X as withColorScheme,ae as withDefaultMonth,ee as withDefaultType,Z as withDefaultValue,Ye as withDuration,ke as withExcludeDate,re as withFirstDayOfWeek,Se as withFormat,De as withGutter,Pe as withHolidays,ce as withInputFormat,xe as withLocale,oe as withMaxSelectedValue,Me as withMinMaxDate,se as withMinSelectedValue,ue as withOffset,ye as withPaginateBy,ie as withParseDate,le as withPattern,de as withPlacement,ne as withSeparator,J as withSize,we as withToday,Q as withVariant,fe as withWeekendDays};
