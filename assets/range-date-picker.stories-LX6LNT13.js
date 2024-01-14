import{j as e,a as l,F as P}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ht,f as At}from"./fontawesome-icon-C7tXTgY1.js";import{r as f}from"./index-4g5l5LRQ.js";import{u as bt,C as It}from"./index.esm-rcUR5vC1.js";import{c as Ke}from"./components-jEpXWSLl.js";import{d as L,a as Qe,i as $e,C as qt}from"./ja-L1PMJthR.js";import{u as Gt,a as Nt,c as Lt,d as Kt,e as Qt}from"./date-picker-VF2pfBl9.js";import{u as $t}from"./index-NZmSP0pq.js";import{i as Je,F as Ue,Q as Xe,w as He,h as T,u as B,a as Ot,K as Ft,_ as Jt,$ as Ut}from"./factory-dcM_aT7G.js";import{P as Xt,b as Zt,a as en}from"./popover-content-eZBmWtfz.js";import{P as an}from"./container-portal-Yi4n-bPi.js";import{f as qe}from"./forward-ref-A-8Arhkk.js";import{u as rn}from"./use-component-style-rFDzjddw.js";import{o as tn}from"./theme-provider-5V_IKGX1.js";import{H as Ze}from"./heading-FgejeTKW.js";import{G as Ae}from"./grid-w6pBREFE.js";import{F as N}from"./form-control-MkMAz64d.js";import{V as Vt}from"./stack-Y0EHr1Pl.js";import{B as xt}from"./button-xoPzDccJ.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-KS9auLtj.js";import"./index-IifBfCIi.js";import"./index-kZ9TUvrv.js";import"./mapValues-fvZQFbEN.js";import"./_basePickBy-VIqm4fI2.js";import"./isPlainObject-mmZlXdLr.js";import"./index-PPLHz8o0.js";import"./ui-provider-k5tecyKK.js";import"./environment-provider-uixNuWLh.js";import"./motion-ukEXpwwk.js";import"./loading-provider-HX2IPxQ4.js";import"./index-t2vQ3W0h.js";import"./Combination-8oCz4vin.js";import"./loading-pgPsKy-B.js";import"./index-pXhAjey9.js";import"./index-BgoZuHN8.js";import"./motion-tce6SEvU.js";import"./index-EargzzxG.js";import"./notice-VC4RfpnO.js";import"./alert-MvITGrhO.js";import"./close-button-PB5ySZ0m.js";import"./use-ripple-u6WIY_9Q.js";import"./container-_q_yPkbK.js";import"./box-jZ-wi685.js";import"./text-B8LKex_v.js";import"./icon-button-KWGYcDOZ.js";import"./index-JVewwJtk.js";import"./index-4b4ydyar.js";import"./index-G99FBd7L.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-wHf7jj3z.js";import"./index-YuXFfT5-.js";import"./index-ptTq5LTe.js";import"./index-cZWDfUpM.js";import"./index-C4XprzXC.js";import"./slide-fade-AJb9rA5b.js";import"./utils-zBr67TGd.js";import"./scale-fade-Z18YGuDB.js";import"./index-jmm5gWkb.js";const nn=({value:t,defaultValue:s,onChange:Y,placeholder:d,startPlaceholder:m,endPlaceholder:h,closeOnSelect:D=!0,allowInputBeyond:u=!1,maxSelectValues:v,...k})=>{const M=f.useRef(!1),y=f.useRef(null),g=f.useRef(null),_=f.useRef(void 0),[I,p]=$t({value:t,defaultValue:s,onChange:Y}),[i,w]=I??[],z=w&&Je(v)?L(w).subtract(v-1,"day").toDate():void 0,O=i&&Je(v)?L(i).add(v-1,"day").toDate():void 0,{containerRef:F,id:W,allowInput:b,pattern:R,inputProps:V,formControlProps:S,isOpen:q,onClose:Be,dateToString:C,stringToDate:j,getContainerProps:Tt,getPopoverProps:_t,getFieldProps:zt,getCalendarProps:Et,getIconProps:Bt}=Gt({...k,maxSelectValues:v,allowInputBeyond:u,enableRange:!0,value:I,defaultValue:s,autoFocus:!1,onChange:([r,o])=>{A(C(r)??""),E(C(o)??""),_.current=[r,o],p([r,o]),D&&r&&o&&Be()},onClear:()=>{var r;A(""),E(""),p([]),b&&q&&((r=y.current)==null||r.focus())},onClick:r=>{var o,n,c;q&&(i?(n=g.current)==null||n.focus():(o=y.current)==null||o.focus()),(c=k.onClick)==null||c.call(k,r)},onClose:()=>{var n;const[r,o]=_.current??I;A(C(r)??""),E(C(o)??""),_.current=void 0,(n=k.onClose)==null||n.call(k)},onEnter:()=>{var n,c,G;if(M.current||!F.current)return;const r=Ue(F.current);if(Xe(r,y.current)){const x=C(i);if(x){A(x);const Le=(((n=g.current)==null?void 0:n.value)??"").length;(c=g.current)==null||c.focus(),(G=g.current)==null||G.setSelectionRange(Le,Le)}}else{const x=C(w);x&&E(x)}},onDelete:r=>{var G,x,je;if(!g.current||g.current.value.length>1||!F.current)return;const o=Ue(F.current);if(!Xe(o,g.current))return;r.preventDefault(),r.stopPropagation(),E(""),p([i,void 0]);const c=(((G=y.current)==null?void 0:G.value)??"").length;(x=y.current)==null||x.focus(),(je=y.current)==null||je.setSelectionRange(c,c)}}),[H,A]=f.useState(C(i)??""),[We,E]=f.useState(C(w)??""),Ge=f.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(R,""));let n=j(o);n&&L(n).isValid()?(u||z&&Qe(n,z)&&(n=z),w&&$e(n,w)&&(n=w),p([n,w])):p([void 0,w]),A(o)},[R,j,u,z,p,w]),Ne=f.useCallback(r=>{let o=r.target.value;M.current||(o=o.replace(R,""));let n=j(o);n&&L(n).isValid()?(u||O&&$e(n,O)&&(n=O),i&&Qe(n,i)&&(n=i),p([i,n])):p([i,void 0]),E(o)},[i,u,O,R,j,p]),Wt=f.useCallback((r={},o)=>{const n={...r.style,...V.style,...b?{}:{pointerEvents:"none"}};return{placeholder:m??d,...S,...V,...r,ref:He(o,y),style:n,id:W,tabIndex:b?0:-1,zIndex:H?void 0:1,value:H??"",cursor:S.readOnly?"default":"text",pointerEvents:S.disabled?"none":"auto",onChange:T(r.onChange,Ge),onClick:T(r.onChange,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionStart:T(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:T(r.onCompositionEnd,()=>{M.current=!1,A(c=>c.replace(R,""))})}},[V,b,m,d,S,W,H,Ge,R]),jt=f.useCallback((r={},o)=>{const n={...r.style,...V.style,...b?{}:{pointerEvents:"none"}};return{placeholder:h??d,...S,...V,...r,ref:He(o,g),style:n,id:W,tabIndex:!b||!H?-1:0,value:We??"",cursor:S.readOnly?"default":"text",pointerEvents:S.disabled?"none":"auto",onChange:T(r.onChange,Ne),onClick:T(r.onChange,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionStart:T(r.onCompositionStart,()=>M.current=!0),onCompositionEnd:T(r.onCompositionEnd,()=>{M.current=!1,E(c=>c.replace(R,""))})}},[H,V,b,h,d,S,W,We,Ne,R]);return{value:I,inputValue:[H,We],dateToString:C,getContainerProps:Tt,getPopoverProps:_t,getFieldProps:zt,getStartInputProps:Wt,getEndInputProps:jt,getIconProps:Bt,getCalendarProps:Et}},a=qe((t,s)=>{const[Y,d]=rn("RangeDatePicker",t);let{className:m,isClearable:h=!0,separator:D,color:u,h:v,height:k,minH:M,minHeight:y,containerProps:g,startInputProps:_,endInputProps:I,iconProps:p,clearIconProps:i,portalProps:w={isDisabled:!0},...z}=tn(d);const{getPopoverProps:O,getContainerProps:F,getCalendarProps:W,getFieldProps:b,getStartInputProps:R,getEndInputProps:V,getIconProps:S,value:q}=nn(z),[Be,C]=q??[];v??(v=k),M??(M=y);const j={w:"100%",h:"fit-content",color:u,...Y.container};return e(Nt,{value:Y,children:e(Xt,{...O(),children:l(B.div,{className:Ot("ui-range-date-picker",m),__css:j,...F(g),children:[l(B.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...Y.inner},children:[e(on,{separator:D,value:q,...b({h:v,minH:M}),startInputProps:R(_,s),endInputProps:V(I)}),h&&(Be||C)?e(Lt,{...S({clear:!0,...i})}):e(Kt,{...S({clear:!1,...p})})]}),e(an,{...w,children:e(Zt,{className:"ui-range-date-picker__popover",__css:{...Y.list},children:e(qt,{className:"ui-range-date-picker__calendar",...W()})})})]})})})}),on=qe(({className:t,value:s=[],h:Y,minH:d,startInputProps:m,endInputProps:h,separator:D="-",...u},v)=>{const k=Qt(),[M,y]=s,{placeholder:g,ref:_,...I}=m??{},{placeholder:p,...i}=h??{},O=!!g||!!p||(!!M||!!y),F={pe:"2rem",h:Y,minH:d,display:"flex",alignItems:"center",...k.field};return e(en,{children:l(B.div,{className:Ot("ui-range-date-picker__field",t),__css:F,...u,children:[e(ea,{ref:He(v,_),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:g,...I}),O&&D?e(B.span,{"data-placeholder":Ft(!M),marginInline:"0.25rem",children:D}):null,e(ea,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:p,...i})]})})}),ea=qe(({className:t,value:s,placeholder:Y,...d},m)=>{const[h,D]=Jt(d,Ut),u={position:"relative",display:"inline-flex",alignItems:"center"};return l(B.div,{className:t,__css:u,...h,children:[e(B.span,{"data-placeholder":Ft(!s),opacity:s?0:1,children:s||Y}),e(B.input,{ref:m,value:s,position:"absolute",left:"0",...D})]})}),po={title:"Components / Forms / RangeDatePicker",component:a},K=()=>e(a,{placeholder:"YYYY/MM/DD"}),Q=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD",size:"xs"}),e(a,{placeholder:"YYYY/MM/DD",size:"sm"}),e(a,{placeholder:"YYYY/MM/DD",size:"md"}),e(a,{placeholder:"YYYY/MM/DD",size:"lg"})]}),$=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD",calendarSize:"sm"}),e(a,{placeholder:"YYYY/MM/DD",calendarSize:"md"}),e(a,{placeholder:"YYYY/MM/DD",calendarSize:"lg"})]}),J=()=>l(P,{children:[e(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),U=()=>l(P,{children:[e(Ze,{size:"xl",children:"Solid"}),e(Ae,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Ke.map(t=>e(a,{calendarVariant:"solid",calendarColorScheme:t,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},t))}),e(Ze,{size:"xl",children:"Subtle"}),e(Ae,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:Ke.map(t=>e(a,{calendarVariant:"subtle",calendarColorScheme:t,today:!0,defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]},t))})]}),X=()=>e(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),Z=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD",defaultType:"date"}),e(a,{placeholder:"YYYY/MM/DD",defaultType:"month"}),e(a,{placeholder:"YYYY/MM/DD",defaultType:"year"})]}),ee=()=>e(a,{placeholder:"YYYY/MM/DD",defaultMonth:new Date("1993-08-18")}),ae=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"monday"}),e(a,{placeholder:"YYYY/MM/DD",firstDayOfWeek:"sunday"})]}),re=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD"}),e(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"YYYY/MM/DD"})]}),te=()=>e(a,{separator:"~"}),ne=()=>e(a,{maxSelectValues:3}),oe=()=>e(a,{placeholder:"MMMM D, YYYY",inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,defaultValue:[new Date]}),se=()=>e(a,{placeholder:"YYYY-MM-DD",inputFormat:"YYYY-MM-DD"}),le=()=>e(a,{placeholder:"YYYY/MM/DD",inputFormat:"YYYY/MM/DD",parseDate:t=>new Date(t)}),ce=()=>e(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ie=()=>e(a,{placeholder:"YYYY/MM/DD",offset:[16,16]}),de=()=>e(a,{placeholder:"YYYY/MM/DD",gutter:32}),De=()=>e(a,{placeholder:"YYYY/MM/DD",duration:.4}),ue=()=>l(P,{children:[e(a,{isDisabled:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e(a,{isDisabled:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e(a,{isDisabled:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e(a,{isDisabled:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e(N,{isDisabled:!0,label:"What date would you like to reserve?",children:e(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>l(P,{children:[e(a,{isReadOnly:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e(a,{isReadOnly:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e(a,{isReadOnly:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e(a,{isReadOnly:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e(N,{isReadOnly:!0,label:"What date would you like to reserve?",children:e(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>l(P,{children:[e(a,{isInvalid:!0,variant:"outline",placeholder:"YYYY/MM/DD"}),e(a,{isInvalid:!0,variant:"filled",placeholder:"YYYY/MM/DD"}),e(a,{isInvalid:!0,variant:"flushed",placeholder:"YYYY/MM/DD"}),e(a,{isInvalid:!0,variant:"unstyled",placeholder:"YYYY/MM/DD"}),e(N,{isInvalid:!0,label:"What date would you like to reserve?",errorMessage:"This is required.",children:e(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18))}),he=()=>e(a,{placeholder:"YYYY/MM/DD",minDate:new Date(new Date().setDate(1)),maxDate:new Date(new Date().setDate(18)),allowInputBeyond:!0}),Me=()=>e(a,{placeholder:"YYYY/MM/DD",today:!0}),ge=()=>e(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),we=()=>e(a,{placeholder:"YYYY/MM/DD",holidays:[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")]}),fe=()=>e(a,{placeholder:"YYYY/MM/DD",excludeDate:t=>t.getDay()===0||t.getDay()===6}),Pe=()=>e(a,{locale:"ja"}),ke=()=>l(Ae,{w:"full",templateColumns:"repeat(3, 1fr)",gap:"md",children:[e(a,{placeholder:"YYYY/MM/DD",locale:"ja",dateFormat:"YYYY年 MMMM"}),e(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",yearFormat:"YYYY年"}),e(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"month",monthFormat:"MM"}),e(a,{placeholder:"YYYY/MM/DD",locale:"ja",defaultType:"year",yearFormat:"YY"}),e(a,{placeholder:"YYYY/MM/DD",locale:"ja",weekdayFormat:"dd曜"})]}),ye=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD",amountOfMonths:1,disableOutsideDays:!0}),e(a,{placeholder:"YYYY/MM/DD",amountOfMonths:2,disableOutsideDays:!0}),e(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0})]}),Se=()=>e(a,{placeholder:"YYYY/MM/DD",amountOfMonths:3,disableOutsideDays:!0,paginateBy:1}),Ce=()=>e(a,{placeholder:"YYYY/MM/DD",closeOnSelect:!1}),ve=()=>e(a,{placeholder:"YYYY/MM/DD",closeOnBlur:!1}),Re=()=>e(a,{placeholder:"YYYY/MM/DD",isClearable:!1}),be=()=>e(a,{placeholder:"YYYY/MM/DD",allowInput:!1}),Ie=()=>e(a,{placeholder:"YYYY/MM/DD",disableOutsideDays:!0}),Oe=()=>e(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Fe=()=>e(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Ve=()=>l(P,{children:[e(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e(Ht,{icon:At})}})]}),xe=()=>{const[t,s]=f.useState("month");return e(a,{placeholder:"YYYY/MM/DD",type:t,onChangeType:s})},Te=()=>{const[t,s]=f.useState(new Date("1993-08-18"));return e(a,{placeholder:"YYYY/MM/DD",month:t,onChangeMonth:s})},_e=()=>{const[t,s]=f.useState([]);return e(a,{placeholder:"YYYY/MM/DD",value:t,onChange:s})},ze=()=>{var h;const{control:t,handleSubmit:s,watch:Y,formState:{errors:d}}=bt(),m=D=>console.log("submit:",D);return console.log("watch:",Y()),l(Vt,{as:"form",onSubmit:s(m),children:[e(N,{isInvalid:!!d.multiDatePicker,label:"Date to reserve",errorMessage:(h=d.multiDatePicker)==null?void 0:h.message,children:e(It,{name:"multiDatePicker",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:D})=>e(a,{placeholder:"YYYY/MM/DD",...D})})}),e(xt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var D;const t={multiDatePicker:[new Date]},{control:s,handleSubmit:Y,watch:d,formState:{errors:m}}=bt({defaultValues:t}),h=u=>console.log("submit:",u);return console.log("watch:",d()),l(Vt,{as:"form",onSubmit:Y(h),children:[e(N,{isInvalid:!!m.multiDatePicker,label:"Date to reserve",errorMessage:(D=m.multiDatePicker)==null?void 0:D.message,children:e(It,{name:"multiDatePicker",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e(a,{placeholder:"YYYY/MM/DD",...u})})}),e(xt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var aa,ra,ta;K.parameters={...K.parameters,docs:{...(aa=K.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(ta=(ra=K.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var na,oa,sa;Q.parameters={...Q.parameters,docs:{...(na=Q.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>;
}`,...(sa=(oa=Q.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var la,ca,ia;$.parameters={...$.parameters,docs:{...(la=$.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>;
}`,...(ia=(ca=$.parameters)==null?void 0:ca.docs)==null?void 0:ia.source}}};var da,Da,ua;J.parameters={...J.parameters,docs:{...(da=J.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(ua=(Da=J.parameters)==null?void 0:Da.docs)==null?void 0:ua.source}}};var Ya,pa,ma;U.parameters={...U.parameters,docs:{...(Ya=U.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
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
}`,...(ma=(pa=U.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,Ma,ga;X.parameters={...X.parameters,docs:{...(ha=X.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(ga=(Ma=X.parameters)==null?void 0:Ma.docs)==null?void 0:ga.source}}};var wa,fa,Pa;Z.parameters={...Z.parameters,docs:{...(wa=Z.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>;
}`,...(Pa=(fa=Z.parameters)==null?void 0:fa.docs)==null?void 0:Pa.source}}};var ka,ya,Sa;ee.parameters={...ee.parameters,docs:{...(ka=ee.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" defaultMonth={new Date("1993-08-18")} />;
}`,...(Sa=(ya=ee.parameters)==null?void 0:ya.docs)==null?void 0:Sa.source}}};var Ca,va,Ra;ae.parameters={...ae.parameters,docs:{...(Ca=ae.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>;
}`,...(Ra=(va=ae.parameters)==null?void 0:va.docs)==null?void 0:Ra.source}}};var ba,Ia,Oa;re.parameters={...re.parameters,docs:{...(ba=re.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker isInvalid errorBorderColor="orange.500" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Oa=(Ia=re.parameters)==null?void 0:Ia.docs)==null?void 0:Oa.source}}};var Fa,Va,xa;te.parameters={...te.parameters,docs:{...(Fa=te.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(xa=(Va=te.parameters)==null?void 0:Va.docs)==null?void 0:xa.source}}};var Ta,_a,za;ne.parameters={...ne.parameters,docs:{...(Ta=ne.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(za=(_a=ne.parameters)==null?void 0:_a.docs)==null?void 0:za.source}}};var Ea,Ba,Wa;oe.parameters={...oe.parameters,docs:{...(Ea=oe.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="MMMM D, YYYY" inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} defaultValue={[new Date()]} />;
}`,...(Wa=(Ba=oe.parameters)==null?void 0:Ba.docs)==null?void 0:Wa.source}}};var ja,Ha,Aa;se.parameters={...se.parameters,docs:{...(ja=se.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />;
}`,...(Aa=(Ha=se.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var qa,Ga,Na;le.parameters={...le.parameters,docs:{...(qa=le.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} />;
}`,...(Na=(Ga=le.parameters)==null?void 0:Ga.docs)==null?void 0:Na.source}}};var La,Ka,Qa;ce.parameters={...ce.parameters,docs:{...(La=ce.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(Qa=(Ka=ce.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var $a,Ja,Ua;ie.parameters={...ie.parameters,docs:{...($a=ie.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />;
}`,...(Ua=(Ja=ie.parameters)==null?void 0:Ja.docs)==null?void 0:Ua.source}}};var Xa,Za,er;de.parameters={...de.parameters,docs:{...(Xa=de.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />;
}`,...(er=(Za=de.parameters)==null?void 0:Za.docs)==null?void 0:er.source}}};var ar,rr,tr;De.parameters={...De.parameters,docs:{...(ar=De.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />;
}`,...(tr=(rr=De.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var nr,or,sr;ue.parameters={...ue.parameters,docs:{...(nr=ue.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(sr=(or=ue.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var lr,cr,ir;Ye.parameters={...Ye.parameters,docs:{...(lr=Ye.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(ir=(cr=Ye.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,Dr,ur;pe.parameters={...pe.parameters,docs:{...(dr=pe.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isInvalid label="What date would you like to reserve?" errorMessage="This is required.">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(ur=(Dr=pe.parameters)==null?void 0:Dr.docs)==null?void 0:ur.source}}};var Yr,pr,mr;me.parameters={...me.parameters,docs:{...(Yr=me.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} />;
}`,...(mr=(pr=me.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var hr,Mr,gr;he.parameters={...he.parameters,docs:{...(hr=he.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" minDate={new Date(new Date().setDate(1))} maxDate={new Date(new Date().setDate(18))} allowInputBeyond />;
}`,...(gr=(Mr=he.parameters)==null?void 0:Mr.docs)==null?void 0:gr.source}}};var wr,fr,Pr;Me.parameters={...Me.parameters,docs:{...(wr=Me.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Pr=(fr=Me.parameters)==null?void 0:fr.docs)==null?void 0:Pr.source}}};var kr,yr,Sr;ge.parameters={...ge.parameters,docs:{...(kr=ge.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Sr=(yr=ge.parameters)==null?void 0:yr.docs)==null?void 0:Sr.source}}};var Cr,vr,Rr;we.parameters={...we.parameters,docs:{...(Cr=we.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />;
}`,...(Rr=(vr=we.parameters)==null?void 0:vr.docs)==null?void 0:Rr.source}}};var br,Ir,Or;fe.parameters={...fe.parameters,docs:{...(br=fe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" excludeDate={date => date.getDay() === 0 || date.getDay() === 6} />;
}`,...(Or=(Ir=fe.parameters)==null?void 0:Ir.docs)==null?void 0:Or.source}}};var Fr,Vr,xr;Pe.parameters={...Pe.parameters,docs:{...(Fr=Pe.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(xr=(Vr=Pe.parameters)==null?void 0:Vr.docs)==null?void 0:xr.source}}};var Tr,_r,zr;ke.parameters={...ke.parameters,docs:{...(Tr=ke.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" dateFormat="YYYY年 MMMM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" yearFormat="YYYY年" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="month" monthFormat="MM" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" defaultType="year" yearFormat="YY" />

      <RangeDatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>;
}`,...(zr=(_r=ke.parameters)==null?void 0:_r.docs)==null?void 0:zr.source}}};var Er,Br,Wr;ye.parameters={...ye.parameters,docs:{...(Er=ye.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={1} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={2} disableOutsideDays />

      <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays />
    </>;
}`,...(Wr=(Br=ye.parameters)==null?void 0:Br.docs)==null?void 0:Wr.source}}};var jr,Hr,Ar;Se.parameters={...Se.parameters,docs:{...(jr=Se.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" amountOfMonths={3} disableOutsideDays paginateBy={1} />;
}`,...(Ar=(Hr=Se.parameters)==null?void 0:Hr.docs)==null?void 0:Ar.source}}};var qr,Gr,Nr;Ce.parameters={...Ce.parameters,docs:{...(qr=Ce.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />;
}`,...(Nr=(Gr=Ce.parameters)==null?void 0:Gr.docs)==null?void 0:Nr.source}}};var Lr,Kr,Qr;ve.parameters={...ve.parameters,docs:{...(Lr=ve.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />;
}`,...(Qr=(Kr=ve.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var $r,Jr,Ur;Re.parameters={...Re.parameters,docs:{...($r=Re.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />;
}`,...(Ur=(Jr=Re.parameters)==null?void 0:Jr.docs)==null?void 0:Ur.source}}};var Xr,Zr,et;be.parameters={...be.parameters,docs:{...(Xr=be.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />;
}`,...(et=(Zr=be.parameters)==null?void 0:Zr.docs)==null?void 0:et.source}}};var at,rt,tt;Ie.parameters={...Ie.parameters,docs:{...(at=Ie.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />;
}`,...(tt=(rt=Ie.parameters)==null?void 0:rt.docs)==null?void 0:tt.source}}};var nt,ot,st;Oe.parameters={...Oe.parameters,docs:{...(nt=Oe.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(st=(ot=Oe.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,ct,it;Fe.parameters={...Fe.parameters,docs:{...(lt=Fe.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(it=(ct=Fe.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var dt,Dt,ut;Ve.parameters={...Ve.parameters,docs:{...(dt=Ve.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <Icon icon={faPoo} />
    }} />
    </>;
}`,...(ut=(Dt=Ve.parameters)==null?void 0:Dt.docs)==null?void 0:ut.source}}};var Yt,pt,mt;xe.parameters={...xe.parameters,docs:{...(Yt=xe.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker placeholder="YYYY/MM/DD" type={type} onChangeType={onChangeType} />;
}`,...(mt=(pt=xe.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,Mt,gt;Te.parameters={...Te.parameters,docs:{...(ht=Te.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker placeholder="YYYY/MM/DD" month={month} onChangeMonth={onChangeMonth} />;
}`,...(gt=(Mt=Te.parameters)==null?void 0:Mt.docs)==null?void 0:gt.source}}};var wt,ft,Pt;_e.parameters={..._e.parameters,docs:{...(wt=_e.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(Pt=(ft=_e.parameters)==null?void 0:ft.docs)==null?void 0:Pt.source}}};var kt,yt,St;ze.parameters={...ze.parameters,docs:{...(kt=ze.parameters)==null?void 0:kt.docs,source:{originalSource:`() => {
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
}`,...(St=(yt=ze.parameters)==null?void 0:yt.docs)==null?void 0:St.source}}};var Ct,vt,Rt;Ee.parameters={...Ee.parameters,docs:{...(Ct=Ee.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
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
}`,...(Rt=(vt=Ee.parameters)==null?void 0:vt.docs)==null?void 0:Rt.source}}};const mo=["basic","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{mo as __namedExportsOrder,K as basic,Te as customControlMonth,xe as customControlType,_e as customControlValue,Ve as customIcon,po as default,be as disabledAllowInput,ve as disabledCloseOnBlur,Ce as disabledCloseOnSelect,Oe as disabledControls,Re as disabledIsClearable,Ie as disabledOutsideDays,Fe as disabledWeekdays,ue as isDisabled,pe as isInvalid,Ye as isReadonly,ze as reactHookForm,Ee as reactHookFormWithDefaultValue,he as withAllowInputBeyond,ye as withAmountOfMonths,re as withBorderColor,$ as withCalendarSize,U as withColorScheme,ee as withDefaultMonth,Z as withDefaultType,X as withDefaultValue,De as withDuration,fe as withExcludeDate,ae as withFirstDayOfWeek,ke as withFormat,de as withGutter,we as withHolidays,se as withInputFormat,Pe as withLocale,ne as withMaxSelectedValue,me as withMinMaxDate,ie as withOffset,Se as withPaginateBy,le as withParseDate,oe as withPattern,ce as withPlacement,te as withSeparator,Q as withSize,Me as withToday,J as withVariant,ge as withWeekendDays};
