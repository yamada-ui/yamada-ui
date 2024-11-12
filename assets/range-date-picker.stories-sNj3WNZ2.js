import{j as e}from"./jsx-runtime-CfatFE5O.js";import{d as W,a as na,i as oa,C as en}from"./calendar-ZPTXzm7v.js";import{r as P}from"./index-ClcD9ViR.js";import{u as Ut,C as Jt}from"./index.esm-CEdvtQ_U.js";import{c as sa}from"./components-DvEqVKlE.js";import"./ja-uaK6RdMr.js";import{u as an,a as rn,c as tn,d as nn,e as on}from"./date-picker-Chb1Cwxz.js";import{u as sn}from"./index-DPt_fcIQ.js";import{g as la,R as ca,_ as ia,f as Ke,an as da,a as Qe,h as O,b as T,c as Kt,C as ln,d as Qt,Y as cn,a9 as dn}from"./factory-COau3w21.js";import{P as un,b as Dn,a as Yn}from"./popover-trigger-C0a8uwwS.js";import{P as pn}from"./portal-CgvdJ0pj.js";import{f as Ze}from"./forward-ref-D13m8o2p.js";import{a as mn}from"./use-component-style-CLSKeq_H.js";import{o as hn}from"./theme-provider-CNI9L2WW.js";import{V as He}from"./stack-DfTvLKXJ.js";import{B as Ae}from"./button-Dh7D4tOu.js";import{H as ua}from"./heading-WlgrS7Pq.js";import{G as Xe}from"./grid-DdQ4CSbc.js";import{F as G}from"./form-control-Co-DCdKP.js";import{a as Mn}from"./ghost-BgvH3GSR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./icon-button-tZ2gAhhQ.js";import"./index-BcE809qD.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-BrIaI2KU.js";import"./index-B6xYib6C.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-CW1g4LYM.js";import"./index-CA_fCdqy.js";import"./Combination-CkmEMpJG.js";import"./loading-DYtJ9fc2.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./factory-ep9rrzy9.js";import"./notice-DHjP3iaQ.js";import"./alert-2tCIO6QZ.js";import"./triangle-alert-CyyjVk4N.js";import"./createLucideIcon-Czt4prMK.js";import"./close-button-EOT3XTCt.js";import"./use-ripple-D0covPjN.js";import"./container-9UL7bQcu.js";import"./box-Co1KKng-.js";import"./text-BnztNdZ-.js";import"./checkbox-Drrh0cjY.js";import"./index-CRS5qAAq.js";import"./index-BCBmayc8.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-DqnSdWX7.js";import"./index-qyuJ8aiN.js";import"./index-Blij8Q7p.js";import"./index-CYDuQAfY.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./slide-fade-DzakJmAy.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./scale-fade-DAfdo16Z.js";import"./index-Btt-sfjQ.js";import"./index-B5Z2HpMN.js";import"./select-BopT4vUh.js";import"./select-list-BurA6KtS.js";import"./index-C58se0b8.js";import"./index-a5RVC8cz.js";import"./index-gGKStiao.js";import"./index-Bt_V34Vb.js";import"./index-ZuzByk-F.js";const gn=({allowInputBeyond:r=!1,closeOnSelect:s=!0,defaultValue:l=[],endPlaceholder:M,maxSelectValues:d,placeholder:u,startPlaceholder:D,value:p,onChange:H,...k})=>{const g=P.useRef(!1),w=P.useRef(null),m=P.useRef(null),x=P.useRef(void 0),[S,f]=sn({defaultValue:l,value:p,onChange:H}),[i,h]=S,V=h&&la(d)?W(h).subtract(d-1,"day").toDate():void 0,b=i&&la(d)?W(i).add(d-1,"day").toDate():void 0,{id:y,allowInput:C,containerRef:z,dateToString:Y,isOpen:N,pattern:j,stringToDate:B,formControlProps:R,getCalendarProps:q,getContainerProps:Ne,getFieldProps:qe,getIconProps:$e,getPopoverProps:Le,inputProps:v,onClose:$}=an({...k,allowInputBeyond:r,autoFocus:!1,defaultValue:l,enableRange:!0,maxSelectValues:d,value:S,onChange:([t,o])=>{_(Y(t)??""),I(Y(o)??""),x.current=[t,o],f([t,o]),s&&t&&o&&$()},onClear:()=>{var t;_(""),I(""),f([]),x.current=void 0,C&&N&&((t=w.current)==null||t.focus())},onClick:t=>{var o,n,c;N&&(i?(n=m.current)==null||n.focus():(o=w.current)==null||o.focus()),(c=k.onClick)==null||c.call(k,t)},onClose:()=>{var n;const[t,o]=x.current??S;_(Y(t)??""),I(Y(o)??""),x.current=void 0,(n=k.onClose)==null||n.call(k)},onDelete:t=>{var A,F,Je;if(!m.current||m.current.value.length>1||!z.current)return;const o=ca(z.current);if(!ia(o,m.current))return;t.preventDefault(),t.stopPropagation(),I(""),f([i,void 0]);const c=(((A=w.current)==null?void 0:A.value)??"").length;(F=w.current)==null||F.focus(),(Je=w.current)==null||Je.setSelectionRange(c,c)},onEnter:()=>{var n,c,A;if(g.current||!z.current)return;const t=ca(z.current);if(ia(t,w.current)){const F=Y(i);if(F){_(F);const ta=(((n=m.current)==null?void 0:n.value)??"").length;(c=m.current)==null||c.focus(),(A=m.current)==null||A.setSelectionRange(ta,ta)}}else{const F=Y(h);F&&I(F)}}}),[E,_]=P.useState(Y(i)??""),[Ue,I]=P.useState(Y(h)??""),aa=P.useCallback(t=>{let o=t.target.value;g.current||(o=o.replace(j,""));let n=B(o);n&&W(n).isValid()?(r||V&&na(n,V)&&(n=V),h&&oa(n,h)&&(n=h)):n=void 0,x.current=[n,h],f([n,h]),_(o)},[j,B,r,V,f,h]),ra=P.useCallback(t=>{let o=t.target.value;g.current||(o=o.replace(j,""));let n=B(o);n&&W(n).isValid()?(r||b&&oa(n,b)&&(n=b),i&&na(n,i)&&(n=i)):n=void 0,x.current=[i,n],f([i,n]),I(o)},[i,r,b,j,B,f]);Ke(()=>{f(p??[])},[p]),Ke(()=>{w.current&&da(w.current)||_(Y(i)??"")},[S]),Ke(()=>{m.current&&da(m.current)||I(Y(h)??"")},[S]);const Xt=P.useCallback((t={},o)=>{const n={...t.style,...v.style,...R.disabled||!C?{pointerEvents:"none"}:{}};return{id:y,placeholder:D??u,tabIndex:C?0:-1,zIndex:E?void 0:1,...R,...v,...t,ref:Qe(o,w),style:n,value:E,onChange:O(t.onChange,aa),onClick:O(t.onClick,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionEnd:O(t.onCompositionEnd,()=>{g.current=!1,_(c=>c.replace(j,""))}),onCompositionStart:O(t.onCompositionStart,()=>g.current=!0)}},[v,C,D,u,R,y,E,aa,j]),Zt=P.useCallback((t={},o)=>{const n={...t.style,...v.style,...C?{}:{pointerEvents:"none"}};return{placeholder:M??u,...R,...v,...t,id:y,ref:Qe(o,m),style:n,cursor:R.readOnly?"default":"text",pointerEvents:R.disabled?"none":"auto",tabIndex:!C||!E?-1:0,value:Ue,onChange:O(t.onChange,ra),onClick:O(t.onClick,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionEnd:O(t.onCompositionEnd,()=>{g.current=!1,I(c=>c.replace(j,""))}),onCompositionStart:O(t.onCompositionStart,()=>g.current=!0)}},[E,v,C,M,u,R,y,Ue,ra,j]);return{id:y,dateToString:Y,inputValue:[E,Ue],value:S,getCalendarProps:q,getContainerProps:Ne,getEndInputProps:Zt,getFieldProps:qe,getIconProps:$e,getPopoverProps:Le,getStartInputProps:Xt,onClose:$}},a=Ze((r,s)=>{const[l,M]=mn("RangeDatePicker",r);let{className:d,children:u,color:D,h:p,height:H,isClearable:k=!0,minH:g,minHeight:w,separator:m,clearIconProps:x,containerProps:S,contentProps:f,endInputProps:i,fieldProps:h,iconProps:V,portalProps:b={isDisabled:!0},startInputProps:y,...C}=hn(M);const{id:z,value:Y,getCalendarProps:N,getContainerProps:j,getEndInputProps:B,getFieldProps:R,getIconProps:q,getPopoverProps:Ne,getStartInputProps:qe,onClose:$e}=gn(C),[Le,v]=Y;p??(p=H),g??(g=w);const $={color:D,h:"fit-content",w:"100%",...l.container};return e.jsx(rn,{value:l,children:e.jsx(un,{...Ne(),children:e.jsxs(T.div,{className:Kt("ui-range-date-picker",d),__css:$,...j(S),children:[e.jsxs(T.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...l.inner},children:[e.jsx(ea,{separator:m,value:Y,...R({h:p,minH:g,...h}),endInputProps:B(i),startInputProps:qe(y,s)}),k&&(Le||v)?e.jsx(tn,{...q({clear:!0,...x})}):e.jsx(nn,{...q({clear:!1,...V})})]}),e.jsx(pn,{...b,children:e.jsxs(Dn,{id:z,as:"div",className:"ui-range-date-picker__content","aria-modal":"true",role:"dialog",__css:{...l.content},...f,children:[e.jsx(en,{className:"ui-range-date-picker__calendar",...N()}),ln(u,{value:Y,onClose:$e})]})})]})})})});a.displayName="RangeDatePicker";a.__ui__="RangeDatePicker";const ea=Ze(({className:r,h:s,minH:l,separator:M="-",value:d=[],endInputProps:u,startInputProps:D,...p},H)=>{const k=on(),[g,w]=d,{ref:m,placeholder:x,...S}=D??{},{placeholder:f,...i}=u??{},b=!!x||!!f||(!!g||!!w),y={alignItems:"center",display:"flex",h:s,minH:l,pe:"2rem",...k.field};return e.jsx(Yn,{children:e.jsxs(T.div,{className:Kt("ui-range-date-picker__field",r),__css:y,...p,children:[e.jsx(Ge,{ref:Qe(H,m),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:x,...S}),b&&M?e.jsx(T.span,{"data-placeholder":Qt(!g),marginInline:"0.25rem",children:M}):null,e.jsx(Ge,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:f,...i})]})})});ea.displayName="RangeDatePickerField";ea.__ui__="RangeDatePickerField";const Ge=Ze(({className:r,placeholder:s,value:l,...M},d)=>{const[u,D]=cn(M,dn),p={alignItems:"center",display:"inline-flex",position:"relative"};return e.jsxs(T.div,{className:r,__css:p,...u,children:[e.jsx(T.span,{"data-placeholder":Qt(!l),opacity:l?0:1,children:l||s}),e.jsx(T.input,{ref:d,left:"0",position:"absolute",value:l,...D})]})});Ge.displayName="AutosizingInput";Ge.__ui__="AutosizingInput";const To={component:a,title:"Components / Forms / RangeDatePicker"},L=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(He,{mt:"sm",children:e.jsx(Ae,{children:"Submit"})})}),e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD",children:({value:r,onClose:s})=>e.jsx(He,{mt:"sm",children:e.jsxs(Ae,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${W(r[0]).format("MM/DD")} -`:"",r[1]?` ${W(r[1]).format("MM/DD")}`:""]})})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"lg",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{calendarSize:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"lg",placeholder:"YYYY/MM/DD"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(ua,{size:"xl",children:"Solid"}),e.jsx(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:sa.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"solid",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))}),e.jsx(ua,{size:"xl",children:"Subtle"}),e.jsx(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:sa.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"subtle",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))})]}),Z=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultType:"date",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",placeholder:"YYYY/MM/DD"})]}),ae=()=>e.jsx(a,{defaultMonth:new Date("1993-08-18"),placeholder:"YYYY/MM/DD"}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{firstDayOfWeek:"monday",placeholder:"YYYY/MM/DD"}),e.jsx(a,{firstDayOfWeek:"sunday",placeholder:"YYYY/MM/DD"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"YYYY/MM/DD"})]}),ne=()=>e.jsx(a,{separator:"~"}),oe=()=>e.jsx(a,{maxSelectValues:3}),se=()=>e.jsx(a,{minSelectValues:5}),le=()=>e.jsx(a,{defaultValue:[new Date],inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,placeholder:"MMMM D, YYYY"}),ce=()=>e.jsx(a,{inputFormat:"YYYY-MM-DD",placeholder:"YYYY-MM-DD"}),ie=()=>e.jsx(a,{inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r),placeholder:"YYYY/MM/DD"}),de=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ue=()=>e.jsx(a,{offset:[16,16],placeholder:"YYYY/MM/DD"}),De=()=>e.jsx(a,{gutter:32,placeholder:"YYYY/MM/DD"}),Ye=()=>e.jsx(a,{duration:.4,placeholder:"YYYY/MM/DD"}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(G,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(G,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(G,{errorMessage:"This is required.",isInvalid:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Me=()=>e.jsx(a,{maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),ge=()=>e.jsx(a,{allowInputBeyond:!0,maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),Pe=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{holidays:r,placeholder:"YYYY/MM/DD"})},ke=()=>e.jsx(a,{excludeDate:r=>r.getDay()===0||r.getDay()===6,placeholder:"YYYY/MM/DD"}),xe=()=>e.jsx(a,{locale:"ja"}),Se=()=>e.jsxs(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:[e.jsx(a,{dateFormat:"YYYY年 MMMM",locale:"ja",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YYYY年"}),e.jsx(a,{defaultType:"month",locale:"ja",monthFormat:"MM",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YY"}),e.jsx(a,{locale:"ja",placeholder:"YYYY/MM/DD",weekdayFormat:"dd曜"})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{amountOfMonths:1,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:2,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"})]}),ye=()=>e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,paginateBy:1,placeholder:"YYYY/MM/DD"}),Ce=()=>e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD"}),Re=()=>e.jsx(a,{closeOnBlur:!1,placeholder:"YYYY/MM/DD"}),be=()=>e.jsx(a,{isClearable:!1,placeholder:"YYYY/MM/DD"}),ve=()=>e.jsx(a,{allowInput:!1,placeholder:"YYYY/MM/DD"}),Ie=()=>e.jsx(a,{disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Ve=()=>e.jsx(a,{hiddenOutsideDays:!0,placeholder:"YYYY/MM/DD"}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(Mn,{})}})]}),Te=()=>{const[r,s]=P.useState("month");return e.jsx(a,{type:r,placeholder:"YYYY/MM/DD",onChangeType:s})},ze=()=>{const[r,s]=P.useState(new Date("1993-08-18"));return e.jsx(a,{month:r,placeholder:"YYYY/MM/DD",onChangeMonth:s})},Be=()=>{const[r,s]=P.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},Ee=()=>{var u;const{control:r,formState:{errors:s},handleSubmit:l,watch:M}=Ut(),d=D=>console.log("submit:",D);return console.log("watch:",M()),e.jsxs(He,{as:"form",onSubmit:l(d),children:[e.jsx(G,{errorMessage:(u=s.multiDatePicker)==null?void 0:u.message,isInvalid:!!s.multiDatePicker,label:"Date to reserve",children:e.jsx(Jt,{name:"multiDatePicker",control:r,render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},We=()=>{var D;const r={multiDatePicker:[new Date]},{control:s,formState:{errors:l},handleSubmit:M,watch:d}=Ut({defaultValues:r}),u=p=>console.log("submit:",p);return console.log("watch:",d()),e.jsxs(He,{as:"form",onSubmit:M(u),children:[e.jsx(G,{errorMessage:(D=l.multiDatePicker)==null?void 0:D.message,isInvalid:!!l.multiDatePicker,label:"Date to reserve",children:e.jsx(Jt,{name:"multiDatePicker",control:s,render:({field:p})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...p}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Da,Ya,pa;L.parameters={...L.parameters,docs:{...(Da=L.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(pa=(Ya=L.parameters)==null?void 0:Ya.docs)==null?void 0:pa.source}}};var ma,ha,Ma;U.parameters={...U.parameters,docs:{...(ma=U.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </RangeDatePicker>

      <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD">
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
      <RangeDatePicker size="xs" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(fa=(wa=J.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var Pa,ka,xa;K.parameters={...K.parameters,docs:{...(Pa=K.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker calendarSize="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="lg" placeholder="YYYY/MM/DD" />
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

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map(colorScheme => <RangeDatePicker key={colorScheme} calendarColorScheme={colorScheme} calendarVariant="solid" defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} today />)}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map(colorScheme => <RangeDatePicker key={colorScheme} calendarColorScheme={colorScheme} calendarVariant="subtle" defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} today />)}
      </Grid>
    </>;
}`,...(ba=(Ra=X.parameters)==null?void 0:Ra.docs)==null?void 0:ba.source}}};var va,Ia,Fa;Z.parameters={...Z.parameters,docs:{...(va=Z.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Fa=(Ia=Z.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Oa,Va,_a;ee.parameters={...ee.parameters,docs:{...(Oa=ee.parameters)==null?void 0:Oa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker defaultType="date" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" placeholder="YYYY/MM/DD" />
    </>;
}`,...(_a=(Va=ee.parameters)==null?void 0:Va.docs)==null?void 0:_a.source}}};var Ta,za,Ba;ae.parameters={...ae.parameters,docs:{...(Ta=ae.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultMonth={new Date("1993-08-18")} placeholder="YYYY/MM/DD" />;
}`,...(Ba=(za=ae.parameters)==null?void 0:za.docs)==null?void 0:Ba.source}}};var Ea,Wa,Ha;re.parameters={...re.parameters,docs:{...(Ea=re.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker firstDayOfWeek="monday" placeholder="YYYY/MM/DD" />

      <RangeDatePicker firstDayOfWeek="sunday" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ha=(Wa=re.parameters)==null?void 0:Wa.docs)==null?void 0:Ha.source}}};var Aa,Ga,Na;te.parameters={...te.parameters,docs:{...(Aa=te.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker errorBorderColor="orange.500" isInvalid placeholder="YYYY/MM/DD" />
    </>;
}`,...(Na=(Ga=te.parameters)==null?void 0:Ga.docs)==null?void 0:Na.source}}};var qa,$a,La;ne.parameters={...ne.parameters,docs:{...(qa=ne.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(La=($a=ne.parameters)==null?void 0:$a.docs)==null?void 0:La.source}}};var Ua,Ja,Ka;oe.parameters={...oe.parameters,docs:{...(Ua=oe.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ka=(Ja=oe.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Xa,Za;se.parameters={...se.parameters,docs:{...(Qa=se.parameters)==null?void 0:Qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker minSelectValues={5} />;
}`,...(Za=(Xa=se.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var er,ar,rr;le.parameters={...le.parameters,docs:{...(er=le.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date()]} inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} placeholder="MMMM D, YYYY" />;
}`,...(rr=(ar=le.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var tr,nr,or;ce.parameters={...ce.parameters,docs:{...(tr=ce.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />;
}`,...(or=(nr=ce.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var sr,lr,cr;ie.parameters={...ie.parameters,docs:{...(sr=ie.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} placeholder="YYYY/MM/DD" />;
}`,...(cr=(lr=ie.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ir,dr,ur;de.parameters={...de.parameters,docs:{...(ir=de.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(ur=(dr=de.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var Dr,Yr,pr;ue.parameters={...ue.parameters,docs:{...(Dr=ue.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <RangeDatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />;
}`,...(pr=(Yr=ue.parameters)==null?void 0:Yr.docs)==null?void 0:pr.source}}};var mr,hr,Mr;De.parameters={...De.parameters,docs:{...(mr=De.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker gutter={32} placeholder="YYYY/MM/DD" />;
}`,...(Mr=(hr=De.parameters)==null?void 0:hr.docs)==null?void 0:Mr.source}}};var gr,wr,fr;Ye.parameters={...Ye.parameters,docs:{...(gr=Ye.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <RangeDatePicker duration={0.4} placeholder="YYYY/MM/DD" />;
}`,...(fr=(wr=Ye.parameters)==null?void 0:wr.docs)==null?void 0:fr.source}}};var Pr,kr,xr;pe.parameters={...pe.parameters,docs:{...(Pr=pe.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isDisabled placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(xr=(kr=pe.parameters)==null?void 0:kr.docs)==null?void 0:xr.source}}};var Sr,jr,yr;me.parameters={...me.parameters,docs:{...(Sr=me.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isReadOnly placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(yr=(jr=me.parameters)==null?void 0:jr.docs)==null?void 0:yr.source}}};var Cr,Rr,br;he.parameters={...he.parameters,docs:{...(Cr=he.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isInvalid placeholder="YYYY/MM/DD" />

      <FormControl errorMessage="This is required." isInvalid label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(br=(Rr=he.parameters)==null?void 0:Rr.docs)==null?void 0:br.source}}};var vr,Ir,Fr;Me.parameters={...Me.parameters,docs:{...(vr=Me.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Fr=(Ir=Me.parameters)==null?void 0:Ir.docs)==null?void 0:Fr.source}}};var Or,Vr,_r;ge.parameters={...ge.parameters,docs:{...(Or=ge.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInputBeyond maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(_r=(Vr=ge.parameters)==null?void 0:Vr.docs)==null?void 0:_r.source}}};var Tr,zr,Br;we.parameters={...we.parameters,docs:{...(Tr=we.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Br=(zr=we.parameters)==null?void 0:zr.docs)==null?void 0:Br.source}}};var Er,Wr,Hr;fe.parameters={...fe.parameters,docs:{...(Er=fe.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Hr=(Wr=fe.parameters)==null?void 0:Wr.docs)==null?void 0:Hr.source}}};var Ar,Gr,Nr;Pe.parameters={...Pe.parameters,docs:{...(Ar=Pe.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker holidays={holidays} placeholder="YYYY/MM/DD" />;
}`,...(Nr=(Gr=Pe.parameters)==null?void 0:Gr.docs)==null?void 0:Nr.source}}};var qr,$r,Lr;ke.parameters={...ke.parameters,docs:{...(qr=ke.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker excludeDate={date => date.getDay() === 0 || date.getDay() === 6} placeholder="YYYY/MM/DD" />;
}`,...(Lr=($r=ke.parameters)==null?void 0:$r.docs)==null?void 0:Lr.source}}};var Ur,Jr,Kr;xe.parameters={...xe.parameters,docs:{...(Ur=xe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Kr=(Jr=xe.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Xr,Zr;Se.parameters={...Se.parameters,docs:{...(Qr=Se.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
  return <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <RangeDatePicker dateFormat="YYYY年 MMMM" locale="ja" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YYYY年" />

      <RangeDatePicker defaultType="month" locale="ja" monthFormat="MM" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YY" />

      <RangeDatePicker locale="ja" placeholder="YYYY/MM/DD" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Zr=(Xr=Se.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var et,at,rt;je.parameters={...je.parameters,docs:{...(et=je.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker amountOfMonths={1} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={2} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={3} disableOutsideDays placeholder="YYYY/MM/DD" />
    </>;
}`,...(rt=(at=je.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var tt,nt,ot;ye.parameters={...ye.parameters,docs:{...(tt=ye.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  return <RangeDatePicker amountOfMonths={3} disableOutsideDays paginateBy={1} placeholder="YYYY/MM/DD" />;
}`,...(ot=(nt=ye.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,lt,ct;Ce.parameters={...Ce.parameters,docs:{...(st=Ce.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />;
}`,...(ct=(lt=Ce.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var it,dt,ut;Re.parameters={...Re.parameters,docs:{...(it=Re.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />;
}`,...(ut=(dt=Re.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var Dt,Yt,pt;be.parameters={...be.parameters,docs:{...(Dt=be.parameters)==null?void 0:Dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker isClearable={false} placeholder="YYYY/MM/DD" />;
}`,...(pt=(Yt=be.parameters)==null?void 0:Yt.docs)==null?void 0:pt.source}}};var mt,ht,Mt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInput={false} placeholder="YYYY/MM/DD" />;
}`,...(Mt=(ht=ve.parameters)==null?void 0:ht.docs)==null?void 0:Mt.source}}};var gt,wt,ft;Ie.parameters={...Ie.parameters,docs:{...(gt=Ie.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
  return <RangeDatePicker disableOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(ft=(wt=Ie.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};var Pt,kt,xt;Fe.parameters={...Fe.parameters,docs:{...(Pt=Fe.parameters)==null?void 0:Pt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(xt=(kt=Fe.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var St,jt,yt;Oe.parameters={...Oe.parameters,docs:{...(St=Oe.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(yt=(jt=Oe.parameters)==null?void 0:jt.docs)==null?void 0:yt.source}}};var Ct,Rt,bt;Ve.parameters={...Ve.parameters,docs:{...(Ct=Ve.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />;
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
  return <RangeDatePicker type={type} placeholder="YYYY/MM/DD" onChangeType={onChangeType} />;
}`,...(_t=(Vt=Te.parameters)==null?void 0:Vt.docs)==null?void 0:_t.source}}};var Tt,zt,Bt;ze.parameters={...ze.parameters,docs:{...(Tt=ze.parameters)==null?void 0:Tt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker month={month} placeholder="YYYY/MM/DD" onChangeMonth={onChangeMonth} />;
}`,...(Bt=(zt=ze.parameters)==null?void 0:zt.docs)==null?void 0:Bt.source}}};var Et,Wt,Ht;Be.parameters={...Be.parameters,docs:{...(Et=Be.parameters)==null?void 0:Et.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Ht=(Wt=Be.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};var At,Gt,Nt;Ee.parameters={...Ee.parameters,docs:{...(At=Ee.parameters)==null?void 0:At.docs,source:{originalSource:`() => {
  interface Data {
    multiDatePicker: [Date?, Date?];
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
      <FormControl errorMessage={errors.multiDatePicker?.message} isInvalid={!!errors.multiDatePicker} label="Date to reserve">
        <Controller name="multiDatePicker" control={control} render={({
        field
      }) => <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
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
      <FormControl errorMessage={errors.multiDatePicker?.message} isInvalid={!!errors.multiDatePicker} label="Date to reserve">
        <Controller name="multiDatePicker" control={control} render={({
        field
      }) => <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Lt=($t=We.parameters)==null?void 0:$t.docs)==null?void 0:Lt.source}}};const zo=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withMinSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{zo as __namedExportsOrder,L as basic,ze as customControlMonth,Te as customControlType,Be as customControlValue,_e as customIcon,To as default,ve as disabledAllowInput,Re as disabledCloseOnBlur,Ce as disabledCloseOnSelect,Fe as disabledControls,be as disabledIsClearable,Ie as disabledOutsideDays,Oe as disabledWeekdays,Ve as hiddenOutsideDays,pe as isDisabled,he as isInvalid,me as isReadonly,Ee as reactHookForm,We as reactHookFormWithDefaultValue,ge as withAllowInputBeyond,je as withAmountOfMonths,te as withBorderColor,K as withCalendarSize,U as withChildren,X as withColorScheme,ae as withDefaultMonth,ee as withDefaultType,Z as withDefaultValue,Ye as withDuration,ke as withExcludeDate,re as withFirstDayOfWeek,Se as withFormat,De as withGutter,Pe as withHolidays,ce as withInputFormat,xe as withLocale,oe as withMaxSelectedValue,Me as withMinMaxDate,se as withMinSelectedValue,ue as withOffset,ye as withPaginateBy,ie as withParseDate,le as withPattern,de as withPlacement,ne as withSeparator,J as withSize,we as withToday,Q as withVariant,fe as withWeekendDays};
