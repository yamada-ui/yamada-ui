import{j as e}from"./extends-CwFRzn3r.js";import{d as H,a as ra,i as ta,C as Zt}from"./calendar-Bm6hy1WL.js";import{r as f}from"./index-BwDkhjyp.js";import{u as Lt,C as Ut}from"./index.esm-DXPXqkjk.js";import{c as na}from"./components-B_rMwC4_.js";import"./ja-CGye6wQm.js";import{u as en,a as an,c as rn,d as tn,e as nn}from"./date-picker-B014t0Fp.js";import{u as on}from"./index-BaNhddRa.js";import{g as oa,N as sa,U as la,f as Je,ah as ca,a as Ke,h as V,b as E,c as Jt,B as sn,d as Kt,S as ln,a4 as cn}from"./factory-BjF4_dRw.js";import{P as dn,b as un,a as Dn}from"./popover-content-Brt-pbKo.js";import{P as Yn}from"./portal-BL3IvHN0.js";import{f as Xe}from"./forward-ref-BWI-Phbn.js";import{a as pn}from"./use-component-style-DVO-iEPi.js";import{o as mn}from"./theme-provider-CpaSpGZh.js";import{V as He}from"./stack-D4S-2JYT.js";import{B as Ge}from"./button-y-1VIkvD.js";import{H as ia}from"./heading-BO4gkt60.js";import{G as Qe}from"./grid-QpxpTIn2.js";import{F as q}from"./form-control-wNB_sh9j.js";import{G as hn}from"./ghost-DMqLvRFT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./icon-button-BiKyozLB.js";import"./index-BM_Ccg1d.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-Bsa2Wmgf.js";import"./index-MCBmKyEn.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./factory-COh1-7fC.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./container-B3-Ah45D.js";import"./box-B5FcoOR4.js";import"./text-CpJ_XsDk.js";import"./checkbox-vlO53CvA.js";import"./index-WsJcG9Vu.js";import"./index-B4Eu0jvp.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-CWbLabfc.js";import"./index-DA9-26wc.js";import"./index-CWXuA_sE.js";import"./index-B6Y8FPE8.js";import"./index-PkG0ZV6c.js";import"./index-BxBWkPyk.js";import"./slide-fade-DE5mVSQd.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";import"./index-Dy1RW4Oq.js";import"./index-BAaRSIWS.js";import"./select-B25oQz4C.js";import"./select-list-CnZQzAWu.js";import"./index-BjUO4q1E.js";import"./index-is6smmpS.js";import"./index-Du0-7Fls.js";import"./index-C53kKj3W.js";import"./index-Drt3gf4w.js";import"./lucide-icon-UlF0E1NS.js";const Mn=({value:r,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:M,endPlaceholder:g,closeOnSelect:d=!0,allowInputBeyond:u=!1,maxSelectValues:C,...x})=>{const P=f.useRef(!1),p=f.useRef(null),D=f.useRef(null),k=f.useRef(void 0),[S,w]=on({value:r,defaultValue:s,onChange:Y}),[c,m]=S??[],T=m&&oa(C)?H(m).subtract(C-1,"day").toDate():void 0,b=c&&oa(C)?H(c).add(C-1,"day").toDate():void 0,{containerRef:v,id:_,allowInput:R,pattern:j,inputProps:I,formControlProps:y,isOpen:N,onClose:$,dateToString:h,stringToDate:z,getContainerProps:G,getPopoverProps:Ae,getFieldProps:qe,getCalendarProps:Ne,getIconProps:$e}=en({...x,maxSelectValues:C,allowInputBeyond:u,enableRange:!0,value:S,defaultValue:s,autoFocus:!1,onChange:([t,o])=>{B(h(t)??""),F(h(o)??""),k.current=[t,o],w([t,o]),d&&t&&o&&$()},onClear:()=>{var t;B(""),F(""),w([]),k.current=void 0,R&&N&&((t=p.current)==null||t.focus())},onClick:t=>{var o,n,l;N&&(c?(n=D.current)==null||n.focus():(o=p.current)==null||o.focus()),(l=x.onClick)==null||l.call(x,t)},onClose:()=>{var n;const[t,o]=k.current??S??[];B(h(t)??""),F(h(o)??""),k.current=void 0,(n=x.onClose)==null||n.call(x)},onEnter:()=>{var n,l,A;if(P.current||!v.current)return;const t=sa(v.current);if(la(t,p.current)){const O=h(c);if(O){B(O);const aa=(((n=D.current)==null?void 0:n.value)??"").length;(l=D.current)==null||l.focus(),(A=D.current)==null||A.setSelectionRange(aa,aa)}}else{const O=h(m);O&&F(O)}},onDelete:t=>{var A,O,Ue;if(!D.current||D.current.value.length>1||!v.current)return;const o=sa(v.current);if(!la(o,D.current))return;t.preventDefault(),t.stopPropagation(),F(""),w([c,void 0]);const l=(((A=p.current)==null?void 0:A.value)??"").length;(O=p.current)==null||O.focus(),(Ue=p.current)==null||Ue.setSelectionRange(l,l)}}),[W,B]=f.useState(h(c)??""),[Le,F]=f.useState(h(m)??""),Ze=f.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(j,""));let n=z(o);n&&H(n).isValid()?(u||T&&ra(n,T)&&(n=T),m&&ta(n,m)&&(n=m)):n=void 0,k.current=[n,m],w([n,m]),B(o)},[j,z,u,T,w,m]),ea=f.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(j,""));let n=z(o);n&&H(n).isValid()?(u||b&&ta(n,b)&&(n=b),c&&ra(n,c)&&(n=c)):n=void 0,k.current=[c,n],w([c,n]),F(o)},[c,u,b,j,z,w]);Je(()=>{w(r??[])},[r]),Je(()=>{p.current&&ca(p.current)||B(h(c)??"")},[S]),Je(()=>{D.current&&ca(D.current)||F(h(m)??"")},[S]);const Qt=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:M??i,...y,...I,...t,ref:Ke(o,p),style:n,id:_,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:V(t.onChange,Ze),onClick:V(t.onClick,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(t.onCompositionStart,()=>P.current=!0),onCompositionEnd:V(t.onCompositionEnd,()=>{P.current=!1,B(l=>l.replace(j,""))})}},[I,R,M,i,y,_,W,Ze,j]),Xt=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:g??i,...y,...I,...t,ref:Ke(o,D),style:n,id:_,tabIndex:!R||!W?-1:0,value:Le??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:V(t.onChange,ea),onClick:V(t.onClick,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(t.onCompositionStart,()=>P.current=!0),onCompositionEnd:V(t.onCompositionEnd,()=>{P.current=!1,F(l=>l.replace(j,""))})}},[W,I,R,g,i,y,_,Le,ea,j]);return{id:_,value:S,inputValue:[W,Le],onClose:$,dateToString:h,getContainerProps:G,getPopoverProps:Ae,getFieldProps:qe,getStartInputProps:Qt,getEndInputProps:Xt,getIconProps:$e,getCalendarProps:Ne}},a=Xe((r,s)=>{const[Y,i]=pn("RangeDatePicker",r);let{className:M,children:g,isClearable:d=!0,separator:u,color:C,h:x,height:P,minH:p,minHeight:D,containerProps:k,contentProps:S,fieldProps:w,startInputProps:c,endInputProps:m,iconProps:T,clearIconProps:b,portalProps:v={isDisabled:!0},..._}=mn(i);const{getPopoverProps:R,getContainerProps:j,getCalendarProps:I,getFieldProps:y,getStartInputProps:N,getEndInputProps:$,getIconProps:h,onClose:z,value:G,id:Ae}=Mn(_),[qe,Ne]=G??[];x??(x=P),p??(p=D);const $e={w:"100%",h:"fit-content",color:C,...Y.container};return e.jsx(an,{value:Y,children:e.jsx(dn,{...R(),children:e.jsxs(E.div,{className:Jt("ui-range-date-picker",M),__css:$e,...j(k),children:[e.jsxs(E.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(gn,{separator:u,value:G,...y({h:x,minH:p,...w}),startInputProps:N(c,s),endInputProps:$(m)}),d&&(qe||Ne)?e.jsx(rn,{...h({clear:!0,...b})}):e.jsx(tn,{...h({clear:!1,...T})})]}),e.jsx(Yn,{...v,children:e.jsxs(un,{as:"div",id:Ae,role:"dialog","aria-modal":"true",className:"ui-range-date-picker__content",__css:{...Y.content},...S,children:[e.jsx(Zt,{className:"ui-range-date-picker__calendar",...I()}),sn(g,{value:G,onClose:z})]})})]})})})}),gn=Xe(({className:r,value:s=[],h:Y,minH:i,startInputProps:M,endInputProps:g,separator:d="-",...u},C)=>{const x=nn(),[P,p]=s,{placeholder:D,ref:k,...S}=M??{},{placeholder:w,...c}=g??{},b=!!D||!!w||(!!P||!!p),v={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...x.field};return e.jsx(Dn,{children:e.jsxs(E.div,{className:Jt("ui-range-date-picker__field",r),__css:v,...u,children:[e.jsx(da,{ref:Ke(C,k),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:D,...S}),b&&d?e.jsx(E.span,{"data-placeholder":Kt(!P),marginInline:"0.25rem",children:d}):null,e.jsx(da,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})}),da=Xe(({className:r,value:s,placeholder:Y,...i},M)=>{const[g,d]=ln(i,cn),u={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(E.div,{className:r,__css:u,...g,children:[e.jsx(E.span,{"data-placeholder":Kt(!s),opacity:s?0:1,children:s||Y}),e.jsx(E.input,{ref:M,value:s,position:"absolute",left:"0",...d})]})}),Oo={title:"Components / Forms / RangeDatePicker",component:a},L=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(He,{mt:"sm",children:e.jsx(Ge,{children:"Submit"})})}),e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1,children:({value:r,onClose:s})=>e.jsx(He,{mt:"sm",children:e.jsxs(Ge,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${H(r[0]).format("MM/DD")} -`:"",r[1]?` ${H(r[1]).format("MM/DD")}`:""]})})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(ia,{size:"xl",children:"Solid"}),e.jsx(Qe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:na.map(r=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))}),e.jsx(ia,{size:"xl",children:"Subtle"}),e.jsx(Qe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:na.map(r=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))})]}),Z=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),ae=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),ne=()=>e.jsx(a,{separator:"~"}),oe=()=>e.jsx(a,{maxSelectValues:3}),se=()=>e.jsx(a,{minSelectValues:5}),le=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),ce=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r)}),de=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ue=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),De=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),Ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),xe=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:r})},Pe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:r=>r.getDay()===0||r.getDay()===6}),ke=()=>e.jsx(a,{locale:"ja"}),Se=()=>e.jsxs(Qe,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Te=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(hn,{})}})]}),_e=()=>{const[r,s]=f.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:r,onChangeType:s})},Be=()=>{const[r,s]=f.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:r,onChangeMonth:s})},Ee=()=>{const[r,s]=f.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},ze=()=>{var g;const{control:r,handleSubmit:s,watch:Y,formState:{errors:i}}=Lt(),M=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(He,{as:"form",onSubmit:s(M),children:[e.jsx(q,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(g=i.multiDatePicker)==null?void 0:g.message,children:e.jsx(Ut,{name:"multiDatePicker",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(Ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},We=()=>{var d;const r={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:M}}=Lt({defaultValues:r}),g=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(He,{as:"form",onSubmit:Y(g),children:[e.jsx(q,{isInvalid:!!M.multiDatePicker,label:"Date to reserve",errorMessage:(d=M.multiDatePicker)==null?void 0:d.message,children:e.jsx(Ut,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...u})})}),e.jsx(Ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ua,Da,Ya;L.parameters={...L.parameters,docs:{...(ua=L.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(Ya=(Da=L.parameters)==null?void 0:Da.docs)==null?void 0:Ya.source}}};var pa,ma,ha;U.parameters={...U.parameters,docs:{...(pa=U.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
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
}`,...(ha=(ma=U.parameters)==null?void 0:ma.docs)==null?void 0:ha.source}}};var Ma,ga,wa;J.parameters={...J.parameters,docs:{...(Ma=J.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(wa=(ga=J.parameters)==null?void 0:ga.docs)==null?void 0:wa.source}}};var fa,xa,Pa;K.parameters={...K.parameters,docs:{...(fa=K.parameters)==null?void 0:fa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(Pa=(xa=K.parameters)==null?void 0:xa.docs)==null?void 0:Pa.source}}};var ka,Sa,ja;Q.parameters={...Q.parameters,docs:{...(ka=Q.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ja=(Sa=Q.parameters)==null?void 0:Sa.docs)==null?void 0:ja.source}}};var ya,Ca,Ra;X.parameters={...X.parameters,docs:{...(ya=X.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
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
}`,...(Ra=(Ca=X.parameters)==null?void 0:Ca.docs)==null?void 0:Ra.source}}};var ba,va,Ia;Z.parameters={...Z.parameters,docs:{...(ba=Z.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Ia=(va=Z.parameters)==null?void 0:va.docs)==null?void 0:Ia.source}}};var Fa,Oa,Va;ee.parameters={...ee.parameters,docs:{...(Fa=ee.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(Va=(Oa=ee.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var Ta,_a,Ba;ae.parameters={...ae.parameters,docs:{...(Ta=ae.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(Ba=(_a=ae.parameters)==null?void 0:_a.docs)==null?void 0:Ba.source}}};var Ea,za,Wa;re.parameters={...re.parameters,docs:{...(Ea=re.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(Wa=(za=re.parameters)==null?void 0:za.docs)==null?void 0:Wa.source}}};var Ha,Ga,Aa;te.parameters={...te.parameters,docs:{...(Ha=te.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Aa=(Ga=te.parameters)==null?void 0:Ga.docs)==null?void 0:Aa.source}}};var qa,Na,$a;ne.parameters={...ne.parameters,docs:{...(qa=ne.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...($a=(Na=ne.parameters)==null?void 0:Na.docs)==null?void 0:$a.source}}};var La,Ua,Ja;oe.parameters={...oe.parameters,docs:{...(La=oe.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ja=(Ua=oe.parameters)==null?void 0:Ua.docs)==null?void 0:Ja.source}}};var Ka,Qa,Xa;se.parameters={...se.parameters,docs:{...(Ka=se.parameters)==null?void 0:Ka.docs,source:{originalSource:`() => {
  return <RangeDatePicker minSelectValues={5} />;
}`,...(Xa=(Qa=se.parameters)==null?void 0:Qa.docs)==null?void 0:Xa.source}}};var Za,er,ar;le.parameters={...le.parameters,docs:{...(Za=le.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(ar=(er=le.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var rr,tr,nr;ce.parameters={...ce.parameters,docs:{...(rr=ce.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(nr=(tr=ce.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var or,sr,lr;ie.parameters={...ie.parameters,docs:{...(or=ie.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(lr=(sr=ie.parameters)==null?void 0:sr.docs)==null?void 0:lr.source}}};var cr,ir,dr;de.parameters={...de.parameters,docs:{...(cr=de.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(dr=(ir=de.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var ur,Dr,Yr;ue.parameters={...ue.parameters,docs:{...(ur=ue.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(Yr=(Dr=ue.parameters)==null?void 0:Dr.docs)==null?void 0:Yr.source}}};var pr,mr,hr;De.parameters={...De.parameters,docs:{...(pr=De.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(hr=(mr=De.parameters)==null?void 0:mr.docs)==null?void 0:hr.source}}};var Mr,gr,wr;Ye.parameters={...Ye.parameters,docs:{...(Mr=Ye.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(wr=(gr=Ye.parameters)==null?void 0:gr.docs)==null?void 0:wr.source}}};var fr,xr,Pr;pe.parameters={...pe.parameters,docs:{...(fr=pe.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Pr=(xr=pe.parameters)==null?void 0:xr.docs)==null?void 0:Pr.source}}};var kr,Sr,jr;me.parameters={...me.parameters,docs:{...(kr=me.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(jr=(Sr=me.parameters)==null?void 0:Sr.docs)==null?void 0:jr.source}}};var yr,Cr,Rr;he.parameters={...he.parameters,docs:{...(yr=he.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Rr=(Cr=he.parameters)==null?void 0:Cr.docs)==null?void 0:Rr.source}}};var br,vr,Ir;Me.parameters={...Me.parameters,docs:{...(br=Me.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(Ir=(vr=Me.parameters)==null?void 0:vr.docs)==null?void 0:Ir.source}}};var Fr,Or,Vr;ge.parameters={...ge.parameters,docs:{...(Fr=ge.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(Vr=(Or=ge.parameters)==null?void 0:Or.docs)==null?void 0:Vr.source}}};var Tr,_r,Br;we.parameters={...we.parameters,docs:{...(Tr=we.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Br=(_r=we.parameters)==null?void 0:_r.docs)==null?void 0:Br.source}}};var Er,zr,Wr;fe.parameters={...fe.parameters,docs:{...(Er=fe.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Wr=(zr=fe.parameters)==null?void 0:zr.docs)==null?void 0:Wr.source}}};var Hr,Gr,Ar;xe.parameters={...xe.parameters,docs:{...(Hr=xe.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(Ar=(Gr=xe.parameters)==null?void 0:Gr.docs)==null?void 0:Ar.source}}};var qr,Nr,$r;Pe.parameters={...Pe.parameters,docs:{...(qr=Pe.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...($r=(Nr=Pe.parameters)==null?void 0:Nr.docs)==null?void 0:$r.source}}};var Lr,Ur,Jr;ke.parameters={...ke.parameters,docs:{...(Lr=ke.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Jr=(Ur=ke.parameters)==null?void 0:Ur.docs)==null?void 0:Jr.source}}};var Kr,Qr,Xr;Se.parameters={...Se.parameters,docs:{...(Kr=Se.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Xr=(Qr=Se.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var Zr,et,at;je.parameters={...je.parameters,docs:{...(Zr=je.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(at=(et=je.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var rt,tt,nt;ye.parameters={...ye.parameters,docs:{...(rt=ye.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(nt=(tt=ye.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,st,lt;Ce.parameters={...Ce.parameters,docs:{...(ot=Ce.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(lt=(st=Ce.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,it,dt;Re.parameters={...Re.parameters,docs:{...(ct=Re.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(dt=(it=Re.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var ut,Dt,Yt;be.parameters={...be.parameters,docs:{...(ut=be.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(Yt=(Dt=be.parameters)==null?void 0:Dt.docs)==null?void 0:Yt.source}}};var pt,mt,ht;ve.parameters={...ve.parameters,docs:{...(pt=ve.parameters)==null?void 0:pt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(ht=(mt=ve.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var Mt,gt,wt;Ie.parameters={...Ie.parameters,docs:{...(Mt=Ie.parameters)==null?void 0:Mt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(wt=(gt=Ie.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var ft,xt,Pt;Fe.parameters={...Fe.parameters,docs:{...(ft=Fe.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(Pt=(xt=Fe.parameters)==null?void 0:xt.docs)==null?void 0:Pt.source}}};var kt,St,jt;Oe.parameters={...Oe.parameters,docs:{...(kt=Oe.parameters)==null?void 0:kt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(jt=(St=Oe.parameters)==null?void 0:St.docs)==null?void 0:jt.source}}};var yt,Ct,Rt;Ve.parameters={...Ve.parameters,docs:{...(yt=Ve.parameters)==null?void 0:yt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(Rt=(Ct=Ve.parameters)==null?void 0:Ct.docs)==null?void 0:Rt.source}}};var bt,vt,It;Te.parameters={...Te.parameters,docs:{...(bt=Te.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(It=(vt=Te.parameters)==null?void 0:vt.docs)==null?void 0:It.source}}};var Ft,Ot,Vt;_e.parameters={..._e.parameters,docs:{...(Ft=_e.parameters)==null?void 0:Ft.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(Vt=(Ot=_e.parameters)==null?void 0:Ot.docs)==null?void 0:Vt.source}}};var Tt,_t,Bt;Be.parameters={...Be.parameters,docs:{...(Tt=Be.parameters)==null?void 0:Tt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(Bt=(_t=Be.parameters)==null?void 0:_t.docs)==null?void 0:Bt.source}}};var Et,zt,Wt;Ee.parameters={...Ee.parameters,docs:{...(Et=Ee.parameters)==null?void 0:Et.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Wt=(zt=Ee.parameters)==null?void 0:zt.docs)==null?void 0:Wt.source}}};var Ht,Gt,At;ze.parameters={...ze.parameters,docs:{...(Ht=ze.parameters)==null?void 0:Ht.docs,source:{originalSource:`() => {
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
}`,...(At=(Gt=ze.parameters)==null?void 0:Gt.docs)==null?void 0:At.source}}};var qt,Nt,$t;We.parameters={...We.parameters,docs:{...(qt=We.parameters)==null?void 0:qt.docs,source:{originalSource:`() => {
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
}`,...($t=(Nt=We.parameters)==null?void 0:Nt.docs)==null?void 0:$t.source}}};const Vo=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withMinSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Vo as __namedExportsOrder,L as basic,Be as customControlMonth,_e as customControlType,Ee as customControlValue,Te as customIcon,Oo as default,ve as disabledAllowInput,Re as disabledCloseOnBlur,Ce as disabledCloseOnSelect,Fe as disabledControls,be as disabledIsClearable,Ie as disabledOutsideDays,Oe as disabledWeekdays,Ve as hiddenOutsideDays,pe as isDisabled,he as isInvalid,me as isReadonly,ze as reactHookForm,We as reactHookFormWithDefaultValue,ge as withAllowInputBeyond,je as withAmountOfMonths,te as withBorderColor,K as withCalendarSize,U as withChildren,X as withColorScheme,ae as withDefaultMonth,ee as withDefaultType,Z as withDefaultValue,Ye as withDuration,Pe as withExcludeDate,re as withFirstDayOfWeek,Se as withFormat,De as withGutter,xe as withHolidays,ce as withInputFormat,ke as withLocale,oe as withMaxSelectedValue,Me as withMinMaxDate,se as withMinSelectedValue,ue as withOffset,ye as withPaginateBy,ie as withParseDate,le as withPattern,de as withPlacement,ne as withSeparator,J as withSize,we as withToday,Q as withVariant,fe as withWeekendDays};
