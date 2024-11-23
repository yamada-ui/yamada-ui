import{j as e}from"./jsx-runtime-CfatFE5O.js";import{d as E,a as ta,i as na,C as Xt}from"./calendar-DrlL9kAo.js";import{r as P}from"./index-ClcD9ViR.js";import{u as Lt,C as Ut}from"./index.esm-CEdvtQ_U.js";import{c as oa}from"./components-DB3iZufq.js";import"./ja-CygfciOp.js";import{u as en,a as an,c as rn,d as tn,e as nn}from"./date-picker-BwILxbwS.js";import{u as on}from"./index-Hr0uPYc7.js";import{g as sa,R as la,$ as ca,f as Ze,aj as ia,a as Je,h as F,b as _,c as Zt,C as sn,d as Jt,Z as ln,a9 as cn}from"./factory-Db31n_eg.js";import{P as dn,b as Dn,a as un}from"./popover-trigger-CprRNq_c.js";import{P as Yn}from"./portal-C11kezrD.js";import{f as Qe}from"./forward-ref-D13m8o2p.js";import{a as pn}from"./use-component-style-5HWcAXul.js";import{o as mn}from"./theme-provider-C-TvIt_J.js";import{V as We}from"./stack-CE6YRnd8.js";import{B as He}from"./button-BDTEGqqa.js";import{H as da}from"./heading-BkMdnGYy.js";import{G as Ke}from"./grid-Cfzzme7l.js";import{d as A}from"./form-control-DiJsSBY_.js";import{G as hn}from"./ghost-ELjiVk9v.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BfxegGWg.js";import"./use-var-BbJRqi2C.js";import"./icon-button-BTyMWrMC.js";import"./index-BzLdmcXo.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-j01dqFxO.js";import"./index-CpHdNd90.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-CQ__EqHq.js";import"./index-olb3wru2.js";import"./Combination-CkmEMpJG.js";import"./loading-BptEEwSR.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./factory-BRZ9AYsk.js";import"./notice-CLeDQ0y9.js";import"./alert-CowBiq15.js";import"./close-button-D9xdjoDk.js";import"./use-ripple-shOr3g-0.js";import"./container-BPlve5cw.js";import"./box-PM3mhqIt.js";import"./text-BffdhSXQ.js";import"./checkbox-BmwB4_Oz.js";import"./index-B9u4w19G.js";import"./index-ChJGuMS4.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-Dv_7tSML.js";import"./index-BPP3U8Du.js";import"./index-D7WKgYAe.js";import"./index-DKEGRuFP.js";import"./index-CwhaUW1D.js";import"./index-HHvFIm4v.js";import"./slide-fade-BsEH8H2C.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-KhqytcjU.js";import"./scale-fade-DAs4TwkQ.js";import"./index-CzwbnnDs.js";import"./index-B5Z2HpMN.js";import"./select-RrKDEJBp.js";import"./select-list-Cp0p548w.js";import"./index-coqOwSQu.js";import"./index-BO2BFO5d.js";import"./index-gGKStiao.js";import"./index-xVP_xMlv.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DHJHrKis.js";const Mn=({allowInputBeyond:r=!1,closeOnSelect:s=!0,defaultValue:l=[],endPlaceholder:M,maxSelectValues:d,placeholder:D,startPlaceholder:u,value:p,onChange:W,...k})=>{const g=P.useRef(!1),w=P.useRef(null),m=P.useRef(null),x=P.useRef(void 0),[j,f]=on({defaultValue:l,value:p,onChange:W}),[i,h]=j,O=h&&sa(d)?E(h).subtract(d-1,"day").toDate():void 0,R=i&&sa(d)?E(i).add(d-1,"day").toDate():void 0,{allowInput:S,containerRef:T,dateToString:Y,isOpen:G,pattern:y,stringToDate:z,formControlProps:C,getCalendarProps:N,getContainerProps:Ge,getFieldProps:Ne,getIconProps:qe,getPopoverProps:$e,inputProps:b,onClose:q}=en({...k,allowInputBeyond:r,autoFocus:!1,defaultValue:l,enableRange:!0,maxSelectValues:d,value:j,onChange:([t,o])=>{V(Y(t)??""),v(Y(o)??""),x.current=[t,o],f([t,o]),s&&t&&o&&q()},onClear:()=>{var t;V(""),v(""),f([]),x.current=void 0,S&&G&&((t=w.current)==null||t.focus())},onClick:t=>{var o,n,c;G&&(i?(n=m.current)==null||n.focus():(o=w.current)==null||o.focus()),(c=k.onClick)==null||c.call(k,t)},onClose:()=>{var n;const[t,o]=x.current??j;V(Y(t)??""),v(Y(o)??""),x.current=void 0,(n=k.onClose)==null||n.call(k)},onDelete:t=>{var H,I,Ue;if(!m.current||m.current.value.length>1||!T.current)return;const o=la(T.current);if(!ca(o,m.current))return;t.preventDefault(),t.stopPropagation(),v(""),f([i,void 0]);const c=(((H=w.current)==null?void 0:H.value)??"").length;(I=w.current)==null||I.focus(),(Ue=w.current)==null||Ue.setSelectionRange(c,c)},onEnter:()=>{var n,c,H;if(g.current||!T.current)return;const t=la(T.current);if(ca(t,w.current)){const I=Y(i);if(I){V(I);const ra=(((n=m.current)==null?void 0:n.value)??"").length;(c=m.current)==null||c.focus(),(H=m.current)==null||H.setSelectionRange(ra,ra)}}else{const I=Y(h);I&&v(I)}}}),[B,V]=P.useState(Y(i)??""),[Le,v]=P.useState(Y(h)??""),ea=P.useCallback(t=>{let o=t.target.value;g.current||(o=o.replace(y,""));let n=z(o);n&&E(n).isValid()?(r||O&&ta(n,O)&&(n=O),h&&na(n,h)&&(n=h)):n=void 0,x.current=[n,h],f([n,h]),V(o)},[y,z,r,O,f,h]),aa=P.useCallback(t=>{let o=t.target.value;g.current||(o=o.replace(y,""));let n=z(o);n&&E(n).isValid()?(r||R&&na(n,R)&&(n=R),i&&ta(n,i)&&(n=i)):n=void 0,x.current=[i,n],f([i,n]),v(o)},[i,r,R,y,z,f]);Ze(()=>{f(p??[])},[p]),Ze(()=>{w.current&&ia(w.current)||V(Y(i)??"")},[j]),Ze(()=>{m.current&&ia(m.current)||v(Y(h)??"")},[j]);const Kt=P.useCallback((t={},o)=>{const n={...t.style,...b.style,...C.disabled||!S?{pointerEvents:"none"}:{}};return{"aria-label":"Start Date",placeholder:u??D,tabIndex:S?0:-1,zIndex:B?void 0:1,...C,...b,...t,ref:Je(o,w),style:n,value:B,onChange:F(t.onChange,ea),onClick:F(t.onClick,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionEnd:F(t.onCompositionEnd,()=>{g.current=!1,V(c=>c.replace(y,""))}),onCompositionStart:F(t.onCompositionStart,()=>g.current=!0)}},[b,S,u,D,C,B,ea,y]),Qt=P.useCallback((t={},o)=>{const n={...t.style,...b.style,...S?{}:{pointerEvents:"none"}};return{"aria-label":"End Date",placeholder:M??D,...C,...b,...t,ref:Je(o,m),style:n,cursor:C.readOnly?"default":"text",pointerEvents:C.disabled?"none":"auto",tabIndex:!S||!B?-1:0,value:Le,onChange:F(t.onChange,aa),onClick:F(t.onClick,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionEnd:F(t.onCompositionEnd,()=>{g.current=!1,v(c=>c.replace(y,""))}),onCompositionStart:F(t.onCompositionStart,()=>g.current=!0)}},[B,b,S,M,D,C,Le,aa,y]);return{dateToString:Y,inputValue:[B,Le],value:j,getCalendarProps:N,getContainerProps:Ge,getEndInputProps:Qt,getFieldProps:Ne,getIconProps:qe,getPopoverProps:$e,getStartInputProps:Kt,onClose:q}},a=Qe((r,s)=>{const[l,M]=pn("RangeDatePicker",r);let{className:d,children:D,color:u,h:p,height:W,isClearable:k=!0,minH:g,minHeight:w,separator:m,clearIconProps:x,containerProps:j,contentProps:f,endInputProps:i,fieldProps:h,iconProps:O,portalProps:R={isDisabled:!0},startInputProps:S,...T}=mn(M);const{value:Y,getCalendarProps:G,getContainerProps:y,getEndInputProps:z,getFieldProps:C,getIconProps:N,getPopoverProps:Ge,getStartInputProps:Ne,onClose:qe}=Mn(T),[$e,b]=Y;p??(p=W),g??(g=w);const q={color:u,h:"fit-content",w:"100%",...l.container};return e.jsx(an,{value:l,children:e.jsx(dn,{...Ge(),children:e.jsxs(_.div,{className:Zt("ui-range-date-picker",d),__css:q,...y(j),children:[e.jsxs(_.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...l.inner},children:[e.jsx(Xe,{separator:m,value:Y,...C({h:p,minH:g,...h}),endInputProps:z(i),startInputProps:Ne(S,s)}),k&&($e||b)?e.jsx(rn,{...N({clear:!0,...x})}):e.jsx(tn,{...N({clear:!1,...O})})]}),e.jsx(Yn,{...R,children:e.jsxs(Dn,{as:"div",className:"ui-range-date-picker__content",__css:{...l.content},...f,children:[e.jsx(Xt,{className:"ui-range-date-picker__calendar",...G()}),sn(D,{value:Y,onClose:qe})]})})]})})})});a.displayName="RangeDatePicker";a.__ui__="RangeDatePicker";const Xe=Qe(({className:r,h:s,minH:l,separator:M="-",value:d=[],endInputProps:D,startInputProps:u,...p},W)=>{const k=nn(),[g,w]=d,{ref:m,placeholder:x,...j}=u??{},{placeholder:f,...i}=D??{},R=!!x||!!f||(!!g||!!w),S={alignItems:"center",display:"flex",h:s,minH:l,pe:"2rem",...k.field};return e.jsx(un,{children:e.jsxs(_.div,{className:Zt("ui-range-date-picker__field",r),__css:S,...p,children:[e.jsx(Ae,{ref:Je(W,m),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:x,...j}),R&&M?e.jsx(_.span,{"data-placeholder":Jt(!g),marginInline:"0.25rem",children:M}):null,e.jsx(Ae,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:f,...i})]})})});Xe.displayName="RangeDatePickerField";Xe.__ui__="RangeDatePickerField";const Ae=Qe(({className:r,placeholder:s,value:l,...M},d)=>{const[D,u]=ln(M,cn),p={alignItems:"center",display:"inline-flex",position:"relative"};return e.jsxs(_.div,{className:r,__css:p,...D,children:[e.jsx(_.span,{"data-placeholder":Jt(!l),opacity:l?0:1,children:l||s}),e.jsx(_.input,{ref:d,left:"0",position:"absolute",value:l,w:"100%",...u})]})});Ae.displayName="AutosizingInput";Ae.__ui__="AutosizingInput";const Vo={component:a,title:"Components / Forms / RangeDatePicker"},$=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(We,{mt:"sm",children:e.jsx(He,{children:"Submit"})})}),e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD",children:({value:r,onClose:s})=>e.jsx(We,{mt:"sm",children:e.jsxs(He,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${E(r[0]).format("MM/DD")} -`:"",r[1]?` ${E(r[1]).format("MM/DD")}`:""]})})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"lg",placeholder:"YYYY/MM/DD"})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{calendarSize:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"lg",placeholder:"YYYY/MM/DD"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(da,{size:"xl",children:"Solid"}),e.jsx(Ke,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:oa.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"solid",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))}),e.jsx(da,{size:"xl",children:"Subtle"}),e.jsx(Ke,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:oa.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"subtle",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))})]}),Q=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultType:"date",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",placeholder:"YYYY/MM/DD"})]}),ee=()=>e.jsx(a,{defaultMonth:new Date("1993-08-18"),placeholder:"YYYY/MM/DD"}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{firstDayOfWeek:"monday",placeholder:"YYYY/MM/DD"}),e.jsx(a,{firstDayOfWeek:"sunday",placeholder:"YYYY/MM/DD"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"YYYY/MM/DD"})]}),te=()=>e.jsx(a,{separator:"~"}),ne=()=>e.jsx(a,{maxSelectValues:3}),oe=()=>e.jsx(a,{minSelectValues:5}),se=()=>e.jsx(a,{defaultValue:[new Date],inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,placeholder:"MMMM D, YYYY"}),le=()=>e.jsx(a,{inputFormat:"YYYY-MM-DD",placeholder:"YYYY-MM-DD"}),ce=()=>e.jsx(a,{inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r),placeholder:"YYYY/MM/DD"}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),de=()=>e.jsx(a,{offset:[16,16],placeholder:"YYYY/MM/DD"}),De=()=>e.jsx(a,{gutter:32,placeholder:"YYYY/MM/DD"}),ue=()=>e.jsx(a,{duration:.4,placeholder:"YYYY/MM/DD"}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(A,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(A,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(A,{errorMessage:"This is required.",isInvalid:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),he=()=>e.jsx(a,{maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),Me=()=>e.jsx(a,{allowInputBeyond:!0,maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),fe=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{holidays:r,placeholder:"YYYY/MM/DD"})},Pe=()=>e.jsx(a,{excludeDate:r=>r.getDay()===0||r.getDay()===6,placeholder:"YYYY/MM/DD"}),ke=()=>e.jsx(a,{locale:"ja"}),xe=()=>e.jsxs(Ke,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:[e.jsx(a,{dateFormat:"YYYY年 MMMM",locale:"ja",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YYYY年"}),e.jsx(a,{defaultType:"month",locale:"ja",monthFormat:"MM",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YY"}),e.jsx(a,{locale:"ja",placeholder:"YYYY/MM/DD",weekdayFormat:"dd曜"})]}),Se=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{amountOfMonths:1,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:2,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"})]}),je=()=>e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,paginateBy:1,placeholder:"YYYY/MM/DD"}),ye=()=>e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD"}),Ce=()=>e.jsx(a,{closeOnBlur:!1,placeholder:"YYYY/MM/DD"}),Re=()=>e.jsx(a,{isClearable:!1,placeholder:"YYYY/MM/DD"}),be=()=>e.jsx(a,{allowInput:!1,placeholder:"YYYY/MM/DD"}),ve=()=>e.jsx(a,{disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Oe=()=>e.jsx(a,{hiddenOutsideDays:!0,placeholder:"YYYY/MM/DD"}),Ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(hn,{})}})]}),_e=()=>{const[r,s]=P.useState("month");return e.jsx(a,{type:r,placeholder:"YYYY/MM/DD",onChangeType:s})},Te=()=>{const[r,s]=P.useState(new Date("1993-08-18"));return e.jsx(a,{month:r,placeholder:"YYYY/MM/DD",onChangeMonth:s})},ze=()=>{const[r,s]=P.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},Be=()=>{var D;const{control:r,formState:{errors:s},handleSubmit:l,watch:M}=Lt(),d=u=>console.log("submit:",u);return console.log("watch:",M()),e.jsxs(We,{as:"form",onSubmit:l(d),children:[e.jsx(A,{errorMessage:(D=s.multiDatePicker)==null?void 0:D.message,isInvalid:!!s.multiDatePicker,label:"Date to reserve",children:e.jsx(Ut,{name:"multiDatePicker",control:r,render:({field:u})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var u;const r={multiDatePicker:[new Date]},{control:s,formState:{errors:l},handleSubmit:M,watch:d}=Lt({defaultValues:r}),D=p=>console.log("submit:",p);return console.log("watch:",d()),e.jsxs(We,{as:"form",onSubmit:M(D),children:[e.jsx(A,{errorMessage:(u=l.multiDatePicker)==null?void 0:u.message,isInvalid:!!l.multiDatePicker,label:"Date to reserve",children:e.jsx(Ut,{name:"multiDatePicker",control:s,render:({field:p})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...p}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Da,ua,Ya;$.parameters={...$.parameters,docs:{...(Da=$.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(Ya=(ua=$.parameters)==null?void 0:ua.docs)==null?void 0:Ya.source}}};var pa,ma,ha;L.parameters={...L.parameters,docs:{...(pa=L.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
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
}`,...(ha=(ma=L.parameters)==null?void 0:ma.docs)==null?void 0:ha.source}}};var Ma,ga,wa;U.parameters={...U.parameters,docs:{...(Ma=U.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker size="xs" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(wa=(ga=U.parameters)==null?void 0:ga.docs)==null?void 0:wa.source}}};var fa,Pa,ka;Z.parameters={...Z.parameters,docs:{...(fa=Z.parameters)==null?void 0:fa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker calendarSize="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ka=(Pa=Z.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var xa,Sa,ja;J.parameters={...J.parameters,docs:{...(xa=J.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ja=(Sa=J.parameters)==null?void 0:Sa.docs)==null?void 0:ja.source}}};var ya,Ca,Ra;K.parameters={...K.parameters,docs:{...(ya=K.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
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
}`,...(Ra=(Ca=K.parameters)==null?void 0:Ca.docs)==null?void 0:Ra.source}}};var ba,va,Ia;Q.parameters={...Q.parameters,docs:{...(ba=Q.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Ia=(va=Q.parameters)==null?void 0:va.docs)==null?void 0:Ia.source}}};var Fa,Oa,Va;X.parameters={...X.parameters,docs:{...(Fa=X.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker defaultType="date" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Va=(Oa=X.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var _a,Ta,za;ee.parameters={...ee.parameters,docs:{...(_a=ee.parameters)==null?void 0:_a.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultMonth={new Date("1993-08-18")} placeholder="YYYY/MM/DD" />;
}`,...(za=(Ta=ee.parameters)==null?void 0:Ta.docs)==null?void 0:za.source}}};var Ba,Ea,Wa;ae.parameters={...ae.parameters,docs:{...(Ba=ae.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker firstDayOfWeek="monday" placeholder="YYYY/MM/DD" />

      <RangeDatePicker firstDayOfWeek="sunday" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Wa=(Ea=ae.parameters)==null?void 0:Ea.docs)==null?void 0:Wa.source}}};var Ha,Aa,Ga;re.parameters={...re.parameters,docs:{...(Ha=re.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker errorBorderColor="orange.500" isInvalid placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ga=(Aa=re.parameters)==null?void 0:Aa.docs)==null?void 0:Ga.source}}};var Na,qa,$a;te.parameters={...te.parameters,docs:{...(Na=te.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...($a=(qa=te.parameters)==null?void 0:qa.docs)==null?void 0:$a.source}}};var La,Ua,Za;ne.parameters={...ne.parameters,docs:{...(La=ne.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Za=(Ua=ne.parameters)==null?void 0:Ua.docs)==null?void 0:Za.source}}};var Ja,Ka,Qa;oe.parameters={...oe.parameters,docs:{...(Ja=oe.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker minSelectValues={5} />;
}`,...(Qa=(Ka=oe.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,er,ar;se.parameters={...se.parameters,docs:{...(Xa=se.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date()]} inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} placeholder="MMMM D, YYYY" />;
}`,...(ar=(er=se.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var rr,tr,nr;le.parameters={...le.parameters,docs:{...(rr=le.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />;
}`,...(nr=(tr=le.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var or,sr,lr;ce.parameters={...ce.parameters,docs:{...(or=ce.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} placeholder="YYYY/MM/DD" />;
}`,...(lr=(sr=ce.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var cr,ir,dr;ie.parameters={...ie.parameters,docs:{...(cr=ie.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(dr=(ir=ie.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var Dr,ur,Yr;de.parameters={...de.parameters,docs:{...(Dr=de.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  return <RangeDatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />;
}`,...(Yr=(ur=de.parameters)==null?void 0:ur.docs)==null?void 0:Yr.source}}};var pr,mr,hr;De.parameters={...De.parameters,docs:{...(pr=De.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <RangeDatePicker gutter={32} placeholder="YYYY/MM/DD" />;
}`,...(hr=(mr=De.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var Mr,gr,wr;ue.parameters={...ue.parameters,docs:{...(Mr=ue.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker duration={0.4} placeholder="YYYY/MM/DD" />;
}`,...(wr=(gr=ue.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var fr,Pr,kr;Ye.parameters={...Ye.parameters,docs:{...(fr=Ye.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isDisabled placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(kr=(Pr=Ye.parameters)==null?void 0:Pr.docs)==null?void 0:kr.source}}};var xr,Sr,jr;pe.parameters={...pe.parameters,docs:{...(xr=pe.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isReadOnly placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(jr=(Sr=pe.parameters)==null?void 0:Sr.docs)==null?void 0:jr.source}}};var yr,Cr,Rr;me.parameters={...me.parameters,docs:{...(yr=me.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isInvalid placeholder="YYYY/MM/DD" />

      <FormControl errorMessage="This is required." isInvalid label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Rr=(Cr=me.parameters)==null?void 0:Cr.docs)==null?void 0:Rr.source}}};var br,vr,Ir;he.parameters={...he.parameters,docs:{...(br=he.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Ir=(vr=he.parameters)==null?void 0:vr.docs)==null?void 0:Ir.source}}};var Fr,Or,Vr;Me.parameters={...Me.parameters,docs:{...(Fr=Me.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInputBeyond maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Vr=(Or=Me.parameters)==null?void 0:Or.docs)==null?void 0:Vr.source}}};var _r,Tr,zr;ge.parameters={...ge.parameters,docs:{...(_r=ge.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(zr=(Tr=ge.parameters)==null?void 0:Tr.docs)==null?void 0:zr.source}}};var Br,Er,Wr;we.parameters={...we.parameters,docs:{...(Br=we.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Wr=(Er=we.parameters)==null?void 0:Er.docs)==null?void 0:Wr.source}}};var Hr,Ar,Gr;fe.parameters={...fe.parameters,docs:{...(Hr=fe.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker holidays={holidays} placeholder="YYYY/MM/DD" />;
}`,...(Gr=(Ar=fe.parameters)==null?void 0:Ar.docs)==null?void 0:Gr.source}}};var Nr,qr,$r;Pe.parameters={...Pe.parameters,docs:{...(Nr=Pe.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker excludeDate={date => date.getDay() === 0 || date.getDay() === 6} placeholder="YYYY/MM/DD" />;
}`,...($r=(qr=Pe.parameters)==null?void 0:qr.docs)==null?void 0:$r.source}}};var Lr,Ur,Zr;ke.parameters={...ke.parameters,docs:{...(Lr=ke.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Zr=(Ur=ke.parameters)==null?void 0:Ur.docs)==null?void 0:Zr.source}}};var Jr,Kr,Qr;xe.parameters={...xe.parameters,docs:{...(Jr=xe.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <RangeDatePicker dateFormat="YYYY年 MMMM" locale="ja" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YYYY年" />

      <RangeDatePicker defaultType="month" locale="ja" monthFormat="MM" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YY" />

      <RangeDatePicker locale="ja" placeholder="YYYY/MM/DD" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Qr=(Kr=xe.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,et,at;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker amountOfMonths={1} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={2} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={3} disableOutsideDays placeholder="YYYY/MM/DD" />
    </>;
}`,...(at=(et=Se.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var rt,tt,nt;je.parameters={...je.parameters,docs:{...(rt=je.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  return <RangeDatePicker amountOfMonths={3} disableOutsideDays paginateBy={1} placeholder="YYYY/MM/DD" />;
}`,...(nt=(tt=je.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,lt;ye.parameters={...ye.parameters,docs:{...(ot=ye.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />;
}`,...(lt=(st=ye.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,it,dt;Ce.parameters={...Ce.parameters,docs:{...(ct=Ce.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />;
}`,...(dt=(it=Ce.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var Dt,ut,Yt;Re.parameters={...Re.parameters,docs:{...(Dt=Re.parameters)==null?void 0:Dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker isClearable={false} placeholder="YYYY/MM/DD" />;
}`,...(Yt=(ut=Re.parameters)==null?void 0:ut.docs)==null?void 0:Yt.source}}};var pt,mt,ht;be.parameters={...be.parameters,docs:{...(pt=be.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInput={false} placeholder="YYYY/MM/DD" />;
}`,...(ht=(mt=be.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var Mt,gt,wt;ve.parameters={...ve.parameters,docs:{...(Mt=ve.parameters)==null?void 0:Mt.docs,source:{originalSource:`() => {
  return <RangeDatePicker disableOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(wt=(gt=ve.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var ft,Pt,kt;Ie.parameters={...Ie.parameters,docs:{...(ft=Ie.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(kt=(Pt=Ie.parameters)==null?void 0:Pt.docs)==null?void 0:kt.source}}};var xt,St,jt;Fe.parameters={...Fe.parameters,docs:{...(xt=Fe.parameters)==null?void 0:xt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(jt=(St=Fe.parameters)==null?void 0:St.docs)==null?void 0:jt.source}}};var yt,Ct,Rt;Oe.parameters={...Oe.parameters,docs:{...(yt=Oe.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
  return <RangeDatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(Rt=(Ct=Oe.parameters)==null?void 0:Ct.docs)==null?void 0:Rt.source}}};var bt,vt,It;Ve.parameters={...Ve.parameters,docs:{...(bt=Ve.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <GhostIcon />
    }} />
    </>;
}`,...(It=(vt=Ve.parameters)==null?void 0:vt.docs)==null?void 0:It.source}}};var Ft,Ot,Vt;_e.parameters={..._e.parameters,docs:{...(Ft=_e.parameters)==null?void 0:Ft.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker type={type} placeholder="YYYY/MM/DD" onChangeType={onChangeType} />;
}`,...(Vt=(Ot=_e.parameters)==null?void 0:Ot.docs)==null?void 0:Vt.source}}};var _t,Tt,zt;Te.parameters={...Te.parameters,docs:{...(_t=Te.parameters)==null?void 0:_t.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker month={month} placeholder="YYYY/MM/DD" onChangeMonth={onChangeMonth} />;
}`,...(zt=(Tt=Te.parameters)==null?void 0:Tt.docs)==null?void 0:zt.source}}};var Bt,Et,Wt;ze.parameters={...ze.parameters,docs:{...(Bt=ze.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Wt=(Et=ze.parameters)==null?void 0:Et.docs)==null?void 0:Wt.source}}};var Ht,At,Gt;Be.parameters={...Be.parameters,docs:{...(Ht=Be.parameters)==null?void 0:Ht.docs,source:{originalSource:`() => {
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
}`,...(Gt=(At=Be.parameters)==null?void 0:At.docs)==null?void 0:Gt.source}}};var Nt,qt,$t;Ee.parameters={...Ee.parameters,docs:{...(Nt=Ee.parameters)==null?void 0:Nt.docs,source:{originalSource:`() => {
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
}`,...($t=(qt=Ee.parameters)==null?void 0:qt.docs)==null?void 0:$t.source}}};const _o=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withMinSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{_o as __namedExportsOrder,$ as basic,Te as customControlMonth,_e as customControlType,ze as customControlValue,Ve as customIcon,Vo as default,be as disabledAllowInput,Ce as disabledCloseOnBlur,ye as disabledCloseOnSelect,Ie as disabledControls,Re as disabledIsClearable,ve as disabledOutsideDays,Fe as disabledWeekdays,Oe as hiddenOutsideDays,Ye as isDisabled,me as isInvalid,pe as isReadonly,Be as reactHookForm,Ee as reactHookFormWithDefaultValue,Me as withAllowInputBeyond,Se as withAmountOfMonths,re as withBorderColor,Z as withCalendarSize,L as withChildren,K as withColorScheme,ee as withDefaultMonth,X as withDefaultType,Q as withDefaultValue,ue as withDuration,Pe as withExcludeDate,ae as withFirstDayOfWeek,xe as withFormat,De as withGutter,fe as withHolidays,le as withInputFormat,ke as withLocale,ne as withMaxSelectedValue,he as withMinMaxDate,oe as withMinSelectedValue,de as withOffset,je as withPaginateBy,ce as withParseDate,se as withPattern,ie as withPlacement,te as withSeparator,U as withSize,ge as withToday,J as withVariant,we as withWeekendDays};
