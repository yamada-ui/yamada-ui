import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{d as H,a as aa,i as ra,C as Jt}from"./ja-DOnWrzqR.js";import{r as f}from"./index-BwDkhjyp.js";import{u as At,C as qt}from"./index.esm-CMZNHfZV.js";import{c as ta}from"./components-C4UgH6g5.js";import{u as Kt,a as Qt,c as Xt,d as Zt,e as en}from"./date-picker-ps3Vl39h.js";import{u as an}from"./index-CYOgy8MG.js";import{g as na,N as oa,U as sa,f as Ue,aa as la,a as Je,h as V,b as E,c as Nt,B as rn,d as $t,a1 as tn,a2 as nn}from"./factory-CZghEhwx.js";import{P as on,b as sn,a as ln}from"./popover-content-BLbldcgF.js";import{P as cn}from"./container-portal-QjYcPwhX.js";import{f as Qe}from"./forward-ref-BmTAT9U5.js";import{a as dn}from"./use-component-style-CVJyvgnb.js";import{o as Dn}from"./theme-provider-DVx9I-yC.js";import{V as We}from"./stack-C1fz6XaD.js";import{B as He}from"./button-BCJOWwwX.js";import{H as ca}from"./heading-Ktlxp5C4.js";import{G as Ke}from"./grid-CplgP9GW.js";import{F as q}from"./form-control-C3CMmeFy.js";import{G as un}from"./ghost-CV6pSSMx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-qNXYSgNB.js";import"./index-CCkg_WlC.js";import"./icon-button-CIzFpXGw.js";import"./index-BRM0DfdX.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-D5DHDyUr.js";import"./index-Bild5V_w.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-BCmQvSjH.js";import"./index-DpYZXcKR.js";import"./Combination-CONbhR2A.js";import"./loading-LwU3kRka.js";import"./motion-CvUiUCCo.js";import"./index-Ms_xn5rh.js";import"./notice-CFEA0h_C.js";import"./alert-l3mTB3sL.js";import"./close-button-BWHSBN7V.js";import"./use-ripple-Bgt6vpzY.js";import"./container-CLvFWyQC.js";import"./box-Ck33wJze.js";import"./text-Z0assCpk.js";import"./checkbox-D8vp_QDf.js";import"./index-B3VHUiMU.js";import"./flex-CCgX0UU9.js";import"./index-C8F-3S1L.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CskU7KAb.js";import"./index-B8LKFMKH.js";import"./index-BjTN0Jfs.js";import"./index-BOMWt9aZ.js";import"./index-DYXOAhhT.js";import"./index-BRMKH5UC.js";import"./slide-fade-D2OzokzD.js";import"./utils-BSzVtHmY.js";import"./scale-fade-Cz1crDyK.js";import"./index-DE_xQ764.js";import"./index-Bqz3rL1X.js";import"./select-D9E8jDDE.js";import"./option-DVKzON07.js";import"./index-ysbLwl4-.js";import"./extends-CF3RwP-h.js";import"./index-D68hVCYc.js";import"./index-Du0-7Fls.js";import"./index-C3UkXdfd.js";import"./index-DxjWwZXO.js";import"./lucide-icon-sIknX4Cs.js";const Yn=({value:r,defaultValue:s=[],onChange:Y,placeholder:i,startPlaceholder:M,endPlaceholder:g,closeOnSelect:d=!0,allowInputBeyond:D=!1,maxSelectValues:C,...x})=>{const P=f.useRef(!1),p=f.useRef(null),u=f.useRef(null),k=f.useRef(void 0),[j,w]=an({value:r,defaultValue:s,onChange:Y}),[c,m]=j??[],T=m&&na(C)?H(m).subtract(C-1,"day").toDate():void 0,b=c&&na(C)?H(c).add(C-1,"day").toDate():void 0,{containerRef:v,id:_,allowInput:R,pattern:S,inputProps:I,formControlProps:y,isOpen:N,onClose:$,dateToString:h,stringToDate:z,getContainerProps:G,getPopoverProps:Ge,getFieldProps:Ae,getCalendarProps:qe,getIconProps:Ne}=Kt({...x,maxSelectValues:C,allowInputBeyond:D,enableRange:!0,value:j,defaultValue:s,autoFocus:!1,onChange:([t,o])=>{B(h(t)??""),F(h(o)??""),k.current=[t,o],w([t,o]),d&&t&&o&&$()},onClear:()=>{var t;B(""),F(""),w([]),k.current=void 0,R&&N&&((t=p.current)==null||t.focus())},onClick:t=>{var o,n,l;N&&(c?(n=u.current)==null||n.focus():(o=p.current)==null||o.focus()),(l=x.onClick)==null||l.call(x,t)},onClose:()=>{var n;const[t,o]=k.current??j??[];B(h(t)??""),F(h(o)??""),k.current=void 0,(n=x.onClose)==null||n.call(x)},onEnter:()=>{var n,l,A;if(P.current||!v.current)return;const t=oa(v.current);if(sa(t,p.current)){const O=h(c);if(O){B(O);const ea=(((n=u.current)==null?void 0:n.value)??"").length;(l=u.current)==null||l.focus(),(A=u.current)==null||A.setSelectionRange(ea,ea)}}else{const O=h(m);O&&F(O)}},onDelete:t=>{var A,O,Le;if(!u.current||u.current.value.length>1||!v.current)return;const o=oa(v.current);if(!sa(o,u.current))return;t.preventDefault(),t.stopPropagation(),F(""),w([c,void 0]);const l=(((A=p.current)==null?void 0:A.value)??"").length;(O=p.current)==null||O.focus(),(Le=p.current)==null||Le.setSelectionRange(l,l)}}),[W,B]=f.useState(h(c)??""),[$e,F]=f.useState(h(m)??""),Xe=f.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(S,""));let n=z(o);n&&H(n).isValid()?(D||T&&aa(n,T)&&(n=T),m&&ra(n,m)&&(n=m)):n=void 0,k.current=[n,m],w([n,m]),B(o)},[S,z,D,T,w,m]),Ze=f.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(S,""));let n=z(o);n&&H(n).isValid()?(D||b&&ra(n,b)&&(n=b),c&&aa(n,c)&&(n=c)):n=void 0,k.current=[c,n],w([c,n]),F(o)},[c,D,b,S,z,w]);Ue(()=>{w(r??[])},[r]),Ue(()=>{p.current&&la(p.current)||B(h(c)??"")},[j]),Ue(()=>{u.current&&la(u.current)||F(h(m)??"")},[j]);const Lt=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:M??i,...y,...I,...t,ref:Je(o,p),style:n,id:_,tabIndex:R?0:-1,zIndex:W?void 0:1,value:W??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:V(t.onChange,Xe),onClick:V(t.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(t.onCompositionStart,()=>P.current=!0),onCompositionEnd:V(t.onCompositionEnd,()=>{P.current=!1,B(l=>l.replace(S,""))})}},[I,R,M,i,y,_,W,Xe,S]),Ut=f.useCallback((t={},o)=>{const n={...t.style,...I.style,...R?{}:{pointerEvents:"none"}};return{placeholder:g??i,...y,...I,...t,ref:Je(o,u),style:n,id:_,tabIndex:!R||!W?-1:0,value:$e??"",cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",onChange:V(t.onChange,Ze),onClick:V(t.onChange,l=>{l.preventDefault(),l.stopPropagation()}),onCompositionStart:V(t.onCompositionStart,()=>P.current=!0),onCompositionEnd:V(t.onCompositionEnd,()=>{P.current=!1,F(l=>l.replace(S,""))})}},[W,I,R,g,i,y,_,$e,Ze,S]);return{id:_,value:j,inputValue:[W,$e],onClose:$,dateToString:h,getContainerProps:G,getPopoverProps:Ge,getFieldProps:Ae,getStartInputProps:Lt,getEndInputProps:Ut,getIconProps:Ne,getCalendarProps:qe}},a=Qe((r,s)=>{const[Y,i]=dn("RangeDatePicker",r);let{className:M,children:g,isClearable:d=!0,separator:D,color:C,h:x,height:P,minH:p,minHeight:u,containerProps:k,contentProps:j,fieldProps:w,startInputProps:c,endInputProps:m,iconProps:T,clearIconProps:b,portalProps:v={isDisabled:!0},..._}=Dn(i);const{getPopoverProps:R,getContainerProps:S,getCalendarProps:I,getFieldProps:y,getStartInputProps:N,getEndInputProps:$,getIconProps:h,onClose:z,value:G,id:Ge}=Yn(_),[Ae,qe]=G??[];x??(x=P),p??(p=u);const Ne={w:"100%",h:"fit-content",color:C,...Y.container};return e.jsx(Qt,{value:Y,children:e.jsx(on,{...R(),children:e.jsxs(E.div,{className:Nt("ui-range-date-picker",M),__css:Ne,...S(k),children:[e.jsxs(E.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e.jsx(pn,{separator:D,value:G,...y({h:x,minH:p,...w}),startInputProps:N(c,s),endInputProps:$(m)}),d&&(Ae||qe)?e.jsx(Xt,{...h({clear:!0,...b})}):e.jsx(Zt,{...h({clear:!1,...T})})]}),e.jsx(cn,{...v,children:e.jsxs(sn,{as:"div",id:Ge,role:"dialog","aria-modal":"true",className:"ui-range-date-picker__content",__css:{...Y.content},...j,children:[e.jsx(Jt,{className:"ui-range-date-picker__calendar",...I()}),rn(g,{value:G,onClose:z})]})})]})})})}),pn=Qe(({className:r,value:s=[],h:Y,minH:i,startInputProps:M,endInputProps:g,separator:d="-",...D},C)=>{const x=en(),[P,p]=s,{placeholder:u,ref:k,...j}=M??{},{placeholder:w,...c}=g??{},b=!!u||!!w||(!!P||!!p),v={pe:"2rem",h:Y,minH:i,display:"flex",alignItems:"center",...x.field};return e.jsx(ln,{children:e.jsxs(E.div,{className:Nt("ui-range-date-picker__field",r),__css:v,...D,children:[e.jsx(ia,{ref:Je(C,k),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:u,...j}),b&&d?e.jsx(E.span,{"data-placeholder":$t(!P),marginInline:"0.25rem",children:d}):null,e.jsx(ia,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:w,...c})]})})}),ia=Qe(({className:r,value:s,placeholder:Y,...i},M)=>{const[g,d]=tn(i,nn),D={position:"relative",display:"inline-flex",alignItems:"center"};return e.jsxs(E.div,{className:r,__css:D,...g,children:[e.jsx(E.span,{"data-placeholder":$t(!s),opacity:s?0:1,children:s||Y}),e.jsx(E.input,{ref:M,value:s,position:"absolute",left:"0",...d})]})}),vo={title:"Components / Forms / RangeDatePicker",component:a},L=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(We,{mt:"sm",children:e.jsx(He,{children:"Submit"})})}),e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1,children:({value:r,onClose:s})=>e.jsx(We,{mt:"sm",children:e.jsxs(He,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${H(r[0]).format("MM/DD")} -`:"",r[1]?` ${H(r[1]).format("MM/DD")}`:""]})})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e.jsx(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(ca,{size:"xl",children:"Solid"}),e.jsx(Ke,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:ta.map(r=>e.jsx(a,{calendarVariant:"solid",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))}),e.jsx(ca,{size:"xl",children:"Subtle"}),e.jsx(Ke,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:ta.map(r=>e.jsx(a,{calendarVariant:"subtle",calendarColorScheme:r,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},r))})]}),Z=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e.jsx(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),ae=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e.jsx(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),ne=()=>e.jsx(a,{separator:"~"}),oe=()=>e.jsx(a,{maxSelectValues:3}),se=()=>e.jsx(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),le=()=>e.jsx(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r)}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),de=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),De=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",gutter:32}),ue=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",duration:.4}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e.jsx(q,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),he=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),Me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),fe=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{placeholder:"YYYY/MM/DD",holidays:r})},xe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",excludeDate:r=>r.getDay()===0||r.getDay()===6}),Pe=()=>e.jsx(a,{locale:"ja"}),ke=()=>e.jsxs(Ke,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e.jsx(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),je=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),Se=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),ye=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),Ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),Re=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),be=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Oe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",hiddenOutsideDays:!0}),Ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(un,{})}})]}),Te=()=>{const[r,s]=f.useState("month");return e.jsx(a,{placeholder:"YYYY/MM/DD",type:r,onChangeType:s})},_e=()=>{const[r,s]=f.useState(new Date("1993-08-18"));return e.jsx(a,{placeholder:"YYYY/MM/DD",month:r,onChangeMonth:s})},Be=()=>{const[r,s]=f.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},Ee=()=>{var g;const{control:r,handleSubmit:s,watch:Y,formState:{errors:i}}=At(),M=d=>console.log("submit:",d);return console.log("watch:",Y()),e.jsxs(We,{as:"form",onSubmit:s(M),children:[e.jsx(q,{isInvalid:!!i.multiDatePicker,label:"Date to reserve",errorMessage:(g=i.multiDatePicker)==null?void 0:g.message,children:e.jsx(qt,{name:"multiDatePicker",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:d})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...d})})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ze=()=>{var d;const r={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:i,formState:{errors:M}}=At({defaultValues:r}),g=D=>console.log("submit:",D);return console.log("watch:",i()),e.jsxs(We,{as:"form",onSubmit:Y(g),children:[e.jsx(q,{isInvalid:!!M.multiDatePicker,label:"Date to reserve",errorMessage:(d=M.multiDatePicker)==null?void 0:d.message,children:e.jsx(qt,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...D})})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var da,Da,ua;L.parameters={...L.parameters,docs:{...(da=L.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(ua=(Da=L.parameters)==null?void 0:Da.docs)==null?void 0:ua.source}}};var Ya,pa,ma;U.parameters={...U.parameters,docs:{...(Ya=U.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
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
}`,...(ma=(pa=U.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,Ma,ga;J.parameters={...J.parameters,docs:{...(ha=J.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(ga=(Ma=J.parameters)==null?void 0:Ma.docs)==null?void 0:ga.source}}};var wa,fa,xa;K.parameters={...K.parameters,docs:{...(wa=K.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(xa=(fa=K.parameters)==null?void 0:fa.docs)==null?void 0:xa.source}}};var Pa,ka,ja;Q.parameters={...Q.parameters,docs:{...(Pa=Q.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ja=(ka=Q.parameters)==null?void 0:ka.docs)==null?void 0:ja.source}}};var Sa,ya,Ca;X.parameters={...X.parameters,docs:{...(Sa=X.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
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
}`,...(Ca=(ya=X.parameters)==null?void 0:ya.docs)==null?void 0:Ca.source}}};var Ra,ba,va;Z.parameters={...Z.parameters,docs:{...(Ra=Z.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(va=(ba=Z.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var Ia,Fa,Oa;ee.parameters={...ee.parameters,docs:{...(Ia=ee.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(Oa=(Fa=ee.parameters)==null?void 0:Fa.docs)==null?void 0:Oa.source}}};var Va,Ta,_a;ae.parameters={...ae.parameters,docs:{...(Va=ae.parameters)==null?void 0:Va.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(_a=(Ta=ae.parameters)==null?void 0:Ta.docs)==null?void 0:_a.source}}};var Ba,Ea,za;re.parameters={...re.parameters,docs:{...(Ba=re.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(za=(Ea=re.parameters)==null?void 0:Ea.docs)==null?void 0:za.source}}};var Wa,Ha,Ga;te.parameters={...te.parameters,docs:{...(Wa=te.parameters)==null?void 0:Wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ga=(Ha=te.parameters)==null?void 0:Ha.docs)==null?void 0:Ga.source}}};var Aa,qa,Na;ne.parameters={...ne.parameters,docs:{...(Aa=ne.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(Na=(qa=ne.parameters)==null?void 0:qa.docs)==null?void 0:Na.source}}};var $a,La,Ua;oe.parameters={...oe.parameters,docs:{...($a=oe.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Ua=(La=oe.parameters)==null?void 0:La.docs)==null?void 0:Ua.source}}};var Ja,Ka,Qa;se.parameters={...se.parameters,docs:{...(Ja=se.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(Qa=(Ka=se.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,Za,er;le.parameters={...le.parameters,docs:{...(Xa=le.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(er=(Za=le.parameters)==null?void 0:Za.docs)==null?void 0:er.source}}};var ar,rr,tr;ce.parameters={...ce.parameters,docs:{...(ar=ce.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(tr=(rr=ce.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var nr,or,sr;ie.parameters={...ie.parameters,docs:{...(nr=ie.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(sr=(or=ie.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var lr,cr,ir;de.parameters={...de.parameters,docs:{...(lr=de.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(ir=(cr=de.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,Dr,ur;De.parameters={...De.parameters,docs:{...(dr=De.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(ur=(Dr=De.parameters)==null?void 0:Dr.docs)==null?void 0:ur.source}}};var Yr,pr,mr;ue.parameters={...ue.parameters,docs:{...(Yr=ue.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(mr=(pr=ue.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var hr,Mr,gr;Ye.parameters={...Ye.parameters,docs:{...(hr=Ye.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(gr=(Mr=Ye.parameters)==null?void 0:Mr.docs)==null?void 0:gr.source}}};var wr,fr,xr;pe.parameters={...pe.parameters,docs:{...(wr=pe.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(xr=(fr=pe.parameters)==null?void 0:fr.docs)==null?void 0:xr.source}}};var Pr,kr,jr;me.parameters={...me.parameters,docs:{...(Pr=me.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(jr=(kr=me.parameters)==null?void 0:kr.docs)==null?void 0:jr.source}}};var Sr,yr,Cr;he.parameters={...he.parameters,docs:{...(Sr=he.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(Cr=(yr=he.parameters)==null?void 0:yr.docs)==null?void 0:Cr.source}}};var Rr,br,vr;Me.parameters={...Me.parameters,docs:{...(Rr=Me.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(vr=(br=Me.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var Ir,Fr,Or;ge.parameters={...ge.parameters,docs:{...(Ir=ge.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Or=(Fr=ge.parameters)==null?void 0:Fr.docs)==null?void 0:Or.source}}};var Vr,Tr,_r;we.parameters={...we.parameters,docs:{...(Vr=we.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(_r=(Tr=we.parameters)==null?void 0:Tr.docs)==null?void 0:_r.source}}};var Br,Er,zr;fe.parameters={...fe.parameters,docs:{...(Br=fe.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(zr=(Er=fe.parameters)==null?void 0:Er.docs)==null?void 0:zr.source}}};var Wr,Hr,Gr;xe.parameters={...xe.parameters,docs:{...(Wr=xe.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Gr=(Hr=xe.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Ar,qr,Nr;Pe.parameters={...Pe.parameters,docs:{...(Ar=Pe.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Nr=(qr=Pe.parameters)==null?void 0:qr.docs)==null?void 0:Nr.source}}};var $r,Lr,Ur;ke.parameters={...ke.parameters,docs:{...($r=ke.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(Ur=(Lr=ke.parameters)==null?void 0:Lr.docs)==null?void 0:Ur.source}}};var Jr,Kr,Qr;je.parameters={...je.parameters,docs:{...(Jr=je.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(Qr=(Kr=je.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Zr,et;Se.parameters={...Se.parameters,docs:{...(Xr=Se.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(et=(Zr=Se.parameters)==null?void 0:Zr.docs)==null?void 0:et.source}}};var at,rt,tt;ye.parameters={...ye.parameters,docs:{...(at=ye.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(tt=(rt=ye.parameters)==null?void 0:rt.docs)==null?void 0:tt.source}}};var nt,ot,st;Ce.parameters={...Ce.parameters,docs:{...(nt=Ce.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(st=(ot=Ce.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,ct,it;Re.parameters={...Re.parameters,docs:{...(lt=Re.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(it=(ct=Re.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var dt,Dt,ut;be.parameters={...be.parameters,docs:{...(dt=be.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(ut=(Dt=be.parameters)==null?void 0:Dt.docs)==null?void 0:ut.source}}};var Yt,pt,mt;ve.parameters={...ve.parameters,docs:{...(Yt=ve.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(mt=(pt=ve.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,Mt,gt;Ie.parameters={...Ie.parameters,docs:{...(ht=Ie.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(gt=(Mt=Ie.parameters)==null?void 0:Mt.docs)==null?void 0:gt.source}}};var wt,ft,xt;Fe.parameters={...Fe.parameters,docs:{...(wt=Fe.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(xt=(ft=Fe.parameters)==null?void 0:ft.docs)==null?void 0:xt.source}}};var Pt,kt,jt;Oe.parameters={...Oe.parameters,docs:{...(Pt=Oe.parameters)==null?void 0:Pt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />;
}`,...(jt=(kt=Oe.parameters)==null?void 0:kt.docs)==null?void 0:jt.source}}};var St,yt,Ct;Ve.parameters={...Ve.parameters,docs:{...(St=Ve.parameters)==null?void 0:St.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Ghost />
    }} />
    </>;
}`,...(Ct=(yt=Ve.parameters)==null?void 0:yt.docs)==null?void 0:Ct.source}}};var Rt,bt,vt;Te.parameters={...Te.parameters,docs:{...(Rt=Te.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(vt=(bt=Te.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var It,Ft,Ot;_e.parameters={..._e.parameters,docs:{...(It=_e.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(Ot=(Ft=_e.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var Vt,Tt,_t;Be.parameters={...Be.parameters,docs:{...(Vt=Be.parameters)==null?void 0:Vt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(_t=(Tt=Be.parameters)==null?void 0:Tt.docs)==null?void 0:_t.source}}};var Bt,Et,zt;Ee.parameters={...Ee.parameters,docs:{...(Bt=Ee.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => {
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
}`,...(zt=(Et=Ee.parameters)==null?void 0:Et.docs)==null?void 0:zt.source}}};var Wt,Ht,Gt;ze.parameters={...ze.parameters,docs:{...(Wt=ze.parameters)==null?void 0:Wt.docs,source:{originalSource:`() => {
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
}`,...(Gt=(Ht=ze.parameters)==null?void 0:Ht.docs)==null?void 0:Gt.source}}};const Io=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Io as __namedExportsOrder,L as basic,_e as customControlMonth,Te as customControlType,Be as customControlValue,Ve as customIcon,vo as default,be as disabledAllowInput,Ce as disabledCloseOnBlur,ye as disabledCloseOnSelect,Ie as disabledControls,Re as disabledIsClearable,ve as disabledOutsideDays,Fe as disabledWeekdays,Oe as hiddenOutsideDays,Ye as isDisabled,me as isInvalid,pe as isReadonly,Ee as reactHookForm,ze as reactHookFormWithDefaultValue,Me as withAllowInputBeyond,je as withAmountOfMonths,te as withBorderColor,K as withCalendarSize,U as withChildren,X as withColorScheme,ae as withDefaultMonth,ee as withDefaultType,Z as withDefaultValue,ue as withDuration,xe as withExcludeDate,re as withFirstDayOfWeek,ke as withFormat,De as withGutter,fe as withHolidays,le as withInputFormat,Pe as withLocale,oe as withMaxSelectedValue,he as withMinMaxDate,de as withOffset,Se as withPaginateBy,ce as withParseDate,se as withPattern,ie as withPlacement,ne as withSeparator,J as withSize,ge as withToday,Q as withVariant,we as withWeekendDays};
