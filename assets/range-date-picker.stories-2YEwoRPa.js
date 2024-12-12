import{j as e}from"./jsx-runtime-CfatFE5O.js";import{d as E,a as oa,i as sa,C as an}from"./calendar-C9DE7MAI.js";import{r as P}from"./index-ClcD9ViR.js";import{u as Jt,C as Kt}from"./index.esm-Dl1kyd6X.js";import{c as la}from"./components-CjEd-fpd.js";import"./ja-6OC7x3J2.js";import{u as rn,a as tn,c as nn,d as on,e as sn}from"./date-picker-BJyUwiEl.js";import{u as ln}from"./index-DKQLNlvR.js";import{o as ca,Y as ia,a3 as da,n as N,ar as Da,a as Qe,h as F,b as _,c as Qt,I as cn,d as Xt,L as dn,af as Dn}from"./factory-Nur_zO5a.js";import{P as un,b as Yn,a as pn}from"./popover-trigger-VZ6-C5a8.js";import{P as mn}from"./portal-BYArVHbV.js";import{f as Ze}from"./forward-ref-D13m8o2p.js";import{a as hn}from"./use-component-style-DXYrx7jC.js";import{o as Mn}from"./theme-provider-BsBO7Bt7.js";import{V as Ee}from"./stack-C0yA_Fgo.js";import{B as We}from"./button-CCbGPPx6.js";import{H as ua}from"./heading-NqGE2IEg.js";import{G as Xe}from"./grid-D05t4OJm.js";import{d as A}from"./form-control-zj-lY-eQ.js";import{G as gn}from"./ghost-BKekfQFn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./i18n-provider-CHVVk7pM.js";import"./icon-M07mMfJs.js";import"./use-var-BmU0CMcq.js";import"./icon-button-BbqNLP86.js";import"./box-D-QJtIN2.js";import"./text-62Futka0.js";import"./index-B1nZG4Mb.js";import"./use-checkbox-CGCpte5c.js";import"./index-BEKWAhRA.js";import"./factory-C7oui4wX.js";import"./proxy-BYKFXsWv.js";import"./index-B_YN6e7D.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-8cg3dupo.js";import"./index-DdZUI5bP.js";import"./index-BMKmWsig.js";import"./index-CBbxfOTw.js";import"./index-CpbJQdhj.js";import"./index-0izHGgc0.js";import"./index-BkD6i14w.js";import"./slide-fade-Cmuj6chS.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Le3SFznY.js";import"./scale-fade-DZMuid-q.js";import"./index-hBuKIhm7.js";import"./index-S7lgn1rl.js";import"./select-T1HpgUPI.js";import"./select-list-CuZRFrrL.js";import"./index-Ci6jtn_l.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./index-X5oM7jx7.js";import"./index-gGKStiao.js";import"./index-DmyN1gVE.js";import"./index-ZuzByk-F.js";import"./loading-Bz0vGPrC.js";import"./createLucideIcon-C_T9K6g-.js";const wn=({allowInputBeyond:r=!1,closeOnSelect:s=!0,defaultValue:l=[],endPlaceholder:M,maxSelectValues:D,placeholder:u,startPlaceholder:Y,value:m,onChange:W,...k})=>{const g=P.useRef(!1),w=P.useRef(null),h=P.useRef(null),x=P.useRef(void 0),[j,f]=ln({defaultValue:l,value:m,onChange:W}),[c,p]=j,O=p&&ca(D)?E(p).subtract(D-1,"day").toDate():void 0,b=c&&ca(D)?E(c).add(D-1,"day").toDate():void 0,{allowInput:S,containerRef:T,dateToString:d,inputFormat:Ae,locale:Ge,open:G,pattern:y,stringToDate:V,formControlProps:R,getCalendarProps:Ne,getContainerProps:qe,getFieldProps:$e,getIconProps:Le,getPopoverProps:Ue,inputProps:z,onClose:aa}=rn({...k,allowInputBeyond:r,autoFocus:!1,defaultValue:l,enableRange:!0,maxSelectValues:D,value:j,onChange:([t,o])=>{v(d(t)??""),C(d(o)??""),x.current=[t,o],f([t,o]),s&&t&&o&&aa()},onClear:()=>{var t;v(""),C(""),f([]),x.current=void 0,S&&G&&((t=w.current)==null||t.focus())},onClick:t=>{var o,n,i;G&&(c?(n=h.current)==null||n.focus():(o=w.current)==null||o.focus()),(i=k.onClick)==null||i.call(k,t)},onClose:()=>{var n;const[t,o]=x.current??j;v(d(t)??""),C(d(o)??""),x.current=void 0,(n=k.onClose)==null||n.call(k)},onDelete:t=>{var H,I,Ke;if(!h.current||h.current.value.length>1||!T.current)return;const o=ia(T.current);if(!da(o,h.current))return;t.preventDefault(),t.stopPropagation(),C(""),f([c,void 0]);const i=(((H=w.current)==null?void 0:H.value)??"").length;(I=w.current)==null||I.focus(),(Ke=w.current)==null||Ke.setSelectionRange(i,i)},onEnter:()=>{var n,i,H;if(g.current||!T.current)return;const t=ia(T.current);if(da(t,w.current)){const I=d(c);if(I){v(I);const na=(((n=h.current)==null?void 0:n.value)??"").length;(i=h.current)==null||i.focus(),(H=h.current)==null||H.setSelectionRange(na,na)}}else{const I=d(p);I&&C(I)}}}),[B,v]=P.useState(d(c)??""),[Je,C]=P.useState(d(p)??""),ra=P.useCallback(t=>{let o=t.target.value;g.current||(o=o.replace(y,""));let n=V(o);n&&E(n).isValid()?(r||O&&oa(n,O)&&(n=O),p&&sa(n,p)&&(n=p)):n=void 0,x.current=[n,p],f([n,p]),v(o)},[y,V,r,O,f,p]),ta=P.useCallback(t=>{let o=t.target.value;g.current||(o=o.replace(y,""));let n=V(o);n&&E(n).isValid()?(r||b&&sa(n,b)&&(n=b),c&&oa(n,c)&&(n=c)):n=void 0,x.current=[c,n],f([c,n]),C(o)},[c,r,b,y,V,f]);N(()=>{f(m??[])},[m]),N(()=>{w.current&&Da(w.current)||v(d(c)??"")},[j]),N(()=>{h.current&&Da(h.current)||C(d(p)??"")},[j]),N(()=>{v(d(c)??""),C(d(p)??"")},[Ge,Ae]);const Zt=P.useCallback((t={},o)=>{const n={...t.style,...z.style,...R.disabled||!S?{pointerEvents:"none"}:{}};return{"aria-label":"Start Date",placeholder:Y??u,tabIndex:S?0:-1,zIndex:B?void 0:1,...R,...z,...t,ref:Qe(o,w),style:n,value:B,onChange:F(t.onChange,ra),onClick:F(t.onClick,i=>{i.preventDefault(),i.stopPropagation()}),onCompositionEnd:F(t.onCompositionEnd,()=>{g.current=!1,v(i=>i.replace(y,""))}),onCompositionStart:F(t.onCompositionStart,()=>g.current=!0)}},[z,S,Y,u,R,B,ra,y]),en=P.useCallback((t={},o)=>{const n={...t.style,...z.style,...S?{}:{pointerEvents:"none"}};return{"aria-label":"End Date",placeholder:M??u,...R,...z,...t,ref:Qe(o,h),style:n,cursor:R.readOnly?"default":"text",pointerEvents:R.disabled?"none":"auto",tabIndex:!S||!B?-1:0,value:Je,onChange:F(t.onChange,ta),onClick:F(t.onClick,i=>{i.preventDefault(),i.stopPropagation()}),onCompositionEnd:F(t.onCompositionEnd,()=>{g.current=!1,C(i=>i.replace(y,""))}),onCompositionStart:F(t.onCompositionStart,()=>g.current=!0)}},[B,z,S,M,u,R,Je,ta,y]);return{dateToString:d,inputValue:[B,Je],value:j,getCalendarProps:Ne,getContainerProps:qe,getEndInputProps:en,getFieldProps:$e,getIconProps:Le,getPopoverProps:Ue,getStartInputProps:Zt,onClose:aa}},a=Ze((r,s)=>{const[l,M]=hn("RangeDatePicker",r);let{className:D,children:u,color:Y,h:m,height:W,isClearable:k=!0,minH:g,minHeight:w,separator:h,clearIconProps:x,containerProps:j,contentProps:f,endInputProps:c,fieldProps:p,iconProps:O,portalProps:b={isDisabled:!0},startInputProps:S,...T}=Mn(M);const{value:d,getCalendarProps:Ae,getContainerProps:Ge,getEndInputProps:G,getFieldProps:y,getIconProps:V,getPopoverProps:R,getStartInputProps:Ne,onClose:qe}=wn(T),[$e,Le]=d;m??(m=W),g??(g=w);const Ue={color:Y,h:"fit-content",w:"100%",...l.container};return e.jsx(tn,{value:l,children:e.jsx(un,{...R(),children:e.jsxs(_.div,{className:Qt("ui-range-date-picker",D),__css:Ue,...Ge(j),children:[e.jsxs(_.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...l.inner},children:[e.jsx(ea,{separator:h,value:d,...y({h:m,minH:g,...p}),endInputProps:G(c),startInputProps:Ne(S,s)}),k&&($e||Le)?e.jsx(nn,{...V({clear:!0,...x})}):e.jsx(on,{...V({clear:!1,...O})})]}),e.jsx(mn,{...b,children:e.jsxs(Yn,{as:"div",className:"ui-range-date-picker__content",__css:{...l.content},...f,children:[e.jsx(an,{className:"ui-range-date-picker__calendar",...Ae()}),cn(u,{value:d,onClose:qe})]})})]})})})});a.displayName="RangeDatePicker";a.__ui__="RangeDatePicker";const ea=Ze(({className:r,h:s,minH:l,separator:M="-",value:D=[],endInputProps:u,startInputProps:Y,...m},W)=>{const k=sn(),[g,w]=D,{ref:h,placeholder:x,...j}=Y??{},{placeholder:f,...c}=u??{},b=!!x||!!f||(!!g||!!w),S={alignItems:"center",display:"flex",h:s,minH:l,pe:"2rem",...k.field};return e.jsx(pn,{children:e.jsxs(_.div,{className:Qt("ui-range-date-picker__field",r),__css:S,...m,children:[e.jsx(He,{ref:Qe(W,h),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:x,...j}),b&&M?e.jsx(_.span,{"data-placeholder":Xt(!g),marginInline:"0.25rem",children:M}):null,e.jsx(He,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:f,...c})]})})});ea.displayName="RangeDatePickerField";ea.__ui__="RangeDatePickerField";const He=Ze(({className:r,placeholder:s,value:l,...M},D)=>{const[u,Y]=dn(M,Dn),m={alignItems:"center",display:"inline-flex",position:"relative"};return e.jsxs(_.div,{className:r,__css:m,...u,children:[e.jsx(_.span,{"data-placeholder":Xt(!l),opacity:l?0:1,children:l||s}),e.jsx(_.input,{ref:D,left:"0",position:"absolute",value:l,w:"100%",...Y})]})});He.displayName="AutosizingInput";He.__ui__="AutosizingInput";const yo={component:a,title:"Components / Forms / RangeDatePicker"},q=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(Ee,{mt:"sm",children:e.jsx(We,{children:"Submit"})})}),e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD",children:({value:r,onClose:s})=>e.jsx(Ee,{mt:"sm",children:e.jsxs(We,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${E(r[0]).format("MM/DD")} -`:"",r[1]?` ${E(r[1]).format("MM/DD")}`:""]})})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"lg",placeholder:"YYYY/MM/DD"})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{calendarSize:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"lg",placeholder:"YYYY/MM/DD"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(ua,{size:"xl",children:"Solid"}),e.jsx(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:la.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"solid",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))}),e.jsx(ua,{size:"xl",children:"Subtle"}),e.jsx(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:la.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"subtle",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))})]}),Q=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultType:"date",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",placeholder:"YYYY/MM/DD"})]}),Z=()=>e.jsx(a,{defaultMonth:new Date("1993-08-18"),placeholder:"YYYY/MM/DD"}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{firstDayOfWeek:"monday",placeholder:"YYYY/MM/DD"}),e.jsx(a,{firstDayOfWeek:"sunday",placeholder:"YYYY/MM/DD"})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"YYYY/MM/DD"})]}),re=()=>e.jsx(a,{separator:"~"}),te=()=>e.jsx(a,{maxSelectValues:3}),ne=()=>e.jsx(a,{minSelectValues:5}),oe=()=>e.jsx(a,{defaultValue:[new Date],inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,placeholder:"MMMM D, YYYY"}),se=()=>e.jsx(a,{inputFormat:"YYYY-MM-DD",placeholder:"YYYY-MM-DD"}),le=()=>e.jsx(a,{inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r),placeholder:"YYYY/MM/DD"}),ce=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),ie=()=>e.jsx(a,{offset:[16,16],placeholder:"YYYY/MM/DD"}),de=()=>e.jsx(a,{gutter:32,placeholder:"YYYY/MM/DD"}),De=()=>e.jsx(a,{duration:.4,placeholder:"YYYY/MM/DD"}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(A,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(A,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(A,{errorMessage:"This is required.",isInvalid:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsx(a,{maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),he=()=>e.jsx(a,{allowInputBeyond:!0,maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),Me=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),we=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{holidays:r,placeholder:"YYYY/MM/DD"})},fe=()=>e.jsx(a,{excludeDate:r=>r.getDay()===0||r.getDay()===6,placeholder:"YYYY/MM/DD"}),Pe=()=>e.jsx(a,{locale:"ja"}),ke=()=>e.jsxs(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:[e.jsx(a,{dateFormat:"YYYY年 MMMM",locale:"ja",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YYYY年"}),e.jsx(a,{defaultType:"month",locale:"ja",monthFormat:"MM",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YY"}),e.jsx(a,{locale:"ja",placeholder:"YYYY/MM/DD",weekdayFormat:"dd曜"})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{amountOfMonths:1,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:2,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"})]}),Se=()=>e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,paginateBy:1,placeholder:"YYYY/MM/DD"}),je=()=>e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD"}),ye=()=>e.jsx(a,{closeOnBlur:!1,placeholder:"YYYY/MM/DD"}),Re=()=>e.jsx(a,{isClearable:!1,placeholder:"YYYY/MM/DD"}),Ce=()=>e.jsx(a,{allowInput:!1,placeholder:"YYYY/MM/DD"}),be=()=>e.jsx(a,{disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),ve=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Fe=()=>e.jsx(a,{hiddenOutsideDays:!0,placeholder:"YYYY/MM/DD"}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(gn,{})}})]}),Ve=()=>{const[r,s]=P.useState("month");return e.jsx(a,{type:r,placeholder:"YYYY/MM/DD",onChangeType:s})},_e=()=>{const[r,s]=P.useState(new Date("1993-08-18"));return e.jsx(a,{month:r,placeholder:"YYYY/MM/DD",onChangeMonth:s})},Te=()=>{const[r,s]=P.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},ze=()=>{var u;const{control:r,formState:{errors:s},handleSubmit:l,watch:M}=Jt(),D=Y=>console.log("submit:",Y);return console.log("watch:",M()),e.jsxs(Ee,{as:"form",onSubmit:l(D),children:[e.jsx(A,{errorMessage:(u=s.multiDatePicker)==null?void 0:u.message,isInvalid:!!s.multiDatePicker,label:"Date to reserve",children:e.jsx(Kt,{name:"multiDatePicker",control:r,render:({field:Y})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...Y}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(We,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Be=()=>{var Y;const r={multiDatePicker:[new Date]},{control:s,formState:{errors:l},handleSubmit:M,watch:D}=Jt({defaultValues:r}),u=m=>console.log("submit:",m);return console.log("watch:",D()),e.jsxs(Ee,{as:"form",onSubmit:M(u),children:[e.jsx(A,{errorMessage:(Y=l.multiDatePicker)==null?void 0:Y.message,isInvalid:!!l.multiDatePicker,label:"Date to reserve",children:e.jsx(Kt,{name:"multiDatePicker",control:s,render:({field:m})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...m}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(We,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ya,pa,ma;q.parameters={...q.parameters,docs:{...(Ya=q.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(ma=(pa=q.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,Ma,ga;$.parameters={...$.parameters,docs:{...(ha=$.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(ga=(Ma=$.parameters)==null?void 0:Ma.docs)==null?void 0:ga.source}}};var wa,fa,Pa;L.parameters={...L.parameters,docs:{...(wa=L.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker size="xs" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Pa=(fa=L.parameters)==null?void 0:fa.docs)==null?void 0:Pa.source}}};var ka,xa,Sa;U.parameters={...U.parameters,docs:{...(ka=U.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker calendarSize="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Sa=(xa=U.parameters)==null?void 0:xa.docs)==null?void 0:Sa.source}}};var ja,ya,Ra;J.parameters={...J.parameters,docs:{...(ja=J.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ra=(ya=J.parameters)==null?void 0:ya.docs)==null?void 0:Ra.source}}};var Ca,ba,va;K.parameters={...K.parameters,docs:{...(Ca=K.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
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
}`,...(va=(ba=K.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var Ia,Fa,Oa;Q.parameters={...Q.parameters,docs:{...(Ia=Q.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Oa=(Fa=Q.parameters)==null?void 0:Fa.docs)==null?void 0:Oa.source}}};var Va,_a,Ta;X.parameters={...X.parameters,docs:{...(Va=X.parameters)==null?void 0:Va.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker defaultType="date" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ta=(_a=X.parameters)==null?void 0:_a.docs)==null?void 0:Ta.source}}};var za,Ba,Ea;Z.parameters={...Z.parameters,docs:{...(za=Z.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultMonth={new Date("1993-08-18")} placeholder="YYYY/MM/DD" />;
}`,...(Ea=(Ba=Z.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source}}};var Wa,Ha,Aa;ee.parameters={...ee.parameters,docs:{...(Wa=ee.parameters)==null?void 0:Wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker firstDayOfWeek="monday" placeholder="YYYY/MM/DD" />

      <RangeDatePicker firstDayOfWeek="sunday" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Aa=(Ha=ee.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var Ga,Na,qa;ae.parameters={...ae.parameters,docs:{...(Ga=ae.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker errorBorderColor="orange.500" isInvalid placeholder="YYYY/MM/DD" />
    </>;
}`,...(qa=(Na=ae.parameters)==null?void 0:Na.docs)==null?void 0:qa.source}}};var $a,La,Ua;re.parameters={...re.parameters,docs:{...($a=re.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(Ua=(La=re.parameters)==null?void 0:La.docs)==null?void 0:Ua.source}}};var Ja,Ka,Qa;te.parameters={...te.parameters,docs:{...(Ja=te.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Qa=(Ka=te.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,Za,er;ne.parameters={...ne.parameters,docs:{...(Xa=ne.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker minSelectValues={5} />;
}`,...(er=(Za=ne.parameters)==null?void 0:Za.docs)==null?void 0:er.source}}};var ar,rr,tr;oe.parameters={...oe.parameters,docs:{...(ar=oe.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date()]} inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} placeholder="MMMM D, YYYY" />;
}`,...(tr=(rr=oe.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var nr,or,sr;se.parameters={...se.parameters,docs:{...(nr=se.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />;
}`,...(sr=(or=se.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var lr,cr,ir;le.parameters={...le.parameters,docs:{...(lr=le.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} placeholder="YYYY/MM/DD" />;
}`,...(ir=(cr=le.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,Dr,ur;ce.parameters={...ce.parameters,docs:{...(dr=ce.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(ur=(Dr=ce.parameters)==null?void 0:Dr.docs)==null?void 0:ur.source}}};var Yr,pr,mr;ie.parameters={...ie.parameters,docs:{...(Yr=ie.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <RangeDatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />;
}`,...(mr=(pr=ie.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var hr,Mr,gr;de.parameters={...de.parameters,docs:{...(hr=de.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <RangeDatePicker gutter={32} placeholder="YYYY/MM/DD" />;
}`,...(gr=(Mr=de.parameters)==null?void 0:Mr.docs)==null?void 0:gr.source}}};var wr,fr,Pr;De.parameters={...De.parameters,docs:{...(wr=De.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker duration={0.4} placeholder="YYYY/MM/DD" />;
}`,...(Pr=(fr=De.parameters)==null?void 0:fr.docs)==null?void 0:Pr.source}}};var kr,xr,Sr;ue.parameters={...ue.parameters,docs:{...(kr=ue.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isDisabled placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Sr=(xr=ue.parameters)==null?void 0:xr.docs)==null?void 0:Sr.source}}};var jr,yr,Rr;Ye.parameters={...Ye.parameters,docs:{...(jr=Ye.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isReadOnly placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Rr=(yr=Ye.parameters)==null?void 0:yr.docs)==null?void 0:Rr.source}}};var Cr,br,vr;pe.parameters={...pe.parameters,docs:{...(Cr=pe.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isInvalid placeholder="YYYY/MM/DD" />

      <FormControl errorMessage="This is required." isInvalid label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(vr=(br=pe.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var Ir,Fr,Or;me.parameters={...me.parameters,docs:{...(Ir=me.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Or=(Fr=me.parameters)==null?void 0:Fr.docs)==null?void 0:Or.source}}};var Vr,_r,Tr;he.parameters={...he.parameters,docs:{...(Vr=he.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInputBeyond maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Tr=(_r=he.parameters)==null?void 0:_r.docs)==null?void 0:Tr.source}}};var zr,Br,Er;Me.parameters={...Me.parameters,docs:{...(zr=Me.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Er=(Br=Me.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var Wr,Hr,Ar;ge.parameters={...ge.parameters,docs:{...(Wr=ge.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Ar=(Hr=ge.parameters)==null?void 0:Hr.docs)==null?void 0:Ar.source}}};var Gr,Nr,qr;we.parameters={...we.parameters,docs:{...(Gr=we.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker holidays={holidays} placeholder="YYYY/MM/DD" />;
}`,...(qr=(Nr=we.parameters)==null?void 0:Nr.docs)==null?void 0:qr.source}}};var $r,Lr,Ur;fe.parameters={...fe.parameters,docs:{...($r=fe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <RangeDatePicker excludeDate={date => date.getDay() === 0 || date.getDay() === 6} placeholder="YYYY/MM/DD" />;
}`,...(Ur=(Lr=fe.parameters)==null?void 0:Lr.docs)==null?void 0:Ur.source}}};var Jr,Kr,Qr;Pe.parameters={...Pe.parameters,docs:{...(Jr=Pe.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Qr=(Kr=Pe.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Zr,et;ke.parameters={...ke.parameters,docs:{...(Xr=ke.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <RangeDatePicker dateFormat="YYYY年 MMMM" locale="ja" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YYYY年" />

      <RangeDatePicker defaultType="month" locale="ja" monthFormat="MM" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YY" />

      <RangeDatePicker locale="ja" placeholder="YYYY/MM/DD" weekdayFormat="dd曜" />
    </Grid>;
}`,...(et=(Zr=ke.parameters)==null?void 0:Zr.docs)==null?void 0:et.source}}};var at,rt,tt;xe.parameters={...xe.parameters,docs:{...(at=xe.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker amountOfMonths={1} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={2} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={3} disableOutsideDays placeholder="YYYY/MM/DD" />
    </>;
}`,...(tt=(rt=xe.parameters)==null?void 0:rt.docs)==null?void 0:tt.source}}};var nt,ot,st;Se.parameters={...Se.parameters,docs:{...(nt=Se.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return <RangeDatePicker amountOfMonths={3} disableOutsideDays paginateBy={1} placeholder="YYYY/MM/DD" />;
}`,...(st=(ot=Se.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,ct,it;je.parameters={...je.parameters,docs:{...(lt=je.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />;
}`,...(it=(ct=je.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var dt,Dt,ut;ye.parameters={...ye.parameters,docs:{...(dt=ye.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />;
}`,...(ut=(Dt=ye.parameters)==null?void 0:Dt.docs)==null?void 0:ut.source}}};var Yt,pt,mt;Re.parameters={...Re.parameters,docs:{...(Yt=Re.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => {
  return <RangeDatePicker isClearable={false} placeholder="YYYY/MM/DD" />;
}`,...(mt=(pt=Re.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,Mt,gt;Ce.parameters={...Ce.parameters,docs:{...(ht=Ce.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInput={false} placeholder="YYYY/MM/DD" />;
}`,...(gt=(Mt=Ce.parameters)==null?void 0:Mt.docs)==null?void 0:gt.source}}};var wt,ft,Pt;be.parameters={...be.parameters,docs:{...(wt=be.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
  return <RangeDatePicker disableOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(Pt=(ft=be.parameters)==null?void 0:ft.docs)==null?void 0:Pt.source}}};var kt,xt,St;ve.parameters={...ve.parameters,docs:{...(kt=ve.parameters)==null?void 0:kt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(St=(xt=ve.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var jt,yt,Rt;Ie.parameters={...Ie.parameters,docs:{...(jt=Ie.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(Rt=(yt=Ie.parameters)==null?void 0:yt.docs)==null?void 0:Rt.source}}};var Ct,bt,vt;Fe.parameters={...Fe.parameters,docs:{...(Ct=Fe.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(vt=(bt=Fe.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var It,Ft,Ot;Oe.parameters={...Oe.parameters,docs:{...(It=Oe.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <GhostIcon />
    }} />
    </>;
}`,...(Ot=(Ft=Oe.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var Vt,_t,Tt;Ve.parameters={...Ve.parameters,docs:{...(Vt=Ve.parameters)==null?void 0:Vt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker type={type} placeholder="YYYY/MM/DD" onChangeType={onChangeType} />;
}`,...(Tt=(_t=Ve.parameters)==null?void 0:_t.docs)==null?void 0:Tt.source}}};var zt,Bt,Et;_e.parameters={..._e.parameters,docs:{...(zt=_e.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker month={month} placeholder="YYYY/MM/DD" onChangeMonth={onChangeMonth} />;
}`,...(Et=(Bt=_e.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Wt,Ht,At;Te.parameters={...Te.parameters,docs:{...(Wt=Te.parameters)==null?void 0:Wt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(At=(Ht=Te.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Gt,Nt,qt;ze.parameters={...ze.parameters,docs:{...(Gt=ze.parameters)==null?void 0:Gt.docs,source:{originalSource:`() => {
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
}`,...(qt=(Nt=ze.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var $t,Lt,Ut;Be.parameters={...Be.parameters,docs:{...($t=Be.parameters)==null?void 0:$t.docs,source:{originalSource:`() => {
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
}`,...(Ut=(Lt=Be.parameters)==null?void 0:Lt.docs)==null?void 0:Ut.source}}};const Ro=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withMinSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Ro as __namedExportsOrder,q as basic,_e as customControlMonth,Ve as customControlType,Te as customControlValue,Oe as customIcon,yo as default,Ce as disabledAllowInput,ye as disabledCloseOnBlur,je as disabledCloseOnSelect,ve as disabledControls,Re as disabledIsClearable,be as disabledOutsideDays,Ie as disabledWeekdays,Fe as hiddenOutsideDays,ue as isDisabled,pe as isInvalid,Ye as isReadonly,ze as reactHookForm,Be as reactHookFormWithDefaultValue,he as withAllowInputBeyond,xe as withAmountOfMonths,ae as withBorderColor,U as withCalendarSize,$ as withChildren,K as withColorScheme,Z as withDefaultMonth,X as withDefaultType,Q as withDefaultValue,De as withDuration,fe as withExcludeDate,ee as withFirstDayOfWeek,ke as withFormat,de as withGutter,we as withHolidays,se as withInputFormat,Pe as withLocale,te as withMaxSelectedValue,me as withMinMaxDate,ne as withMinSelectedValue,ie as withOffset,Se as withPaginateBy,le as withParseDate,oe as withPattern,ce as withPlacement,re as withSeparator,L as withSize,Me as withToday,J as withVariant,ge as withWeekendDays};
