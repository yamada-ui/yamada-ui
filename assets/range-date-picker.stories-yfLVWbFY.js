import{j as e}from"./jsx-runtime-CfatFE5O.js";import{d as W,a as oa,i as sa,C as an}from"./calendar-BqCaasiS.js";import{r as g}from"./index-ClcD9ViR.js";import{u as Jt,C as Kt}from"./index.esm-Dl1kyd6X.js";import{c as la}from"./components-BHpPRnZt.js";import"./ja-B6hDHYsE.js";import{u as rn,a as tn,c as nn,d as on,e as sn}from"./date-picker-CLS1wGcO.js";import{u as ln}from"./index-D-iNr3rb.js";import{o as ca,Y as ia,a3 as da,n as q,ar as ua,a as Qe,h as O,b as V,c as Qt,I as cn,d as Xt,L as dn,af as un}from"./factory-Bqmz9C5P.js";import{P as Dn,b as Yn,a as pn}from"./popover-trigger-CaVm9NYE.js";import{P as mn}from"./portal-DBnEVTNa.js";import{f as Ze}from"./forward-ref-D13m8o2p.js";import{a as hn}from"./use-component-style-D7fUVUlo.js";import{o as Mn}from"./theme-provider-Dit74geM.js";import{V as We}from"./stack-DEpjuaqO.js";import{B as He}from"./button-B8Q1YJpe.js";import{H as Da}from"./heading-CfvGDESz.js";import{G as Xe}from"./grid-CMJGCuw8.js";import{d as G}from"./form-control-DNngTyAT.js";import{G as gn}from"./ghost-C0b_b7Xo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./i18n-provider-D80ymFzi.js";import"./icon-DeZ7GCXS.js";import"./use-var-DKkLsRXg.js";import"./icon-button-C4sxXu5I.js";import"./box-CS_Q_mBe.js";import"./text-Cr1YzEG3.js";import"./index-DcJSUYRC.js";import"./use-checkbox-Bmr8WAWN.js";import"./index-5c62fTH4.js";import"./factory-Cbq3E2qU.js";import"./proxy-BYKFXsWv.js";import"./index-B_9DrOMl.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-BRhMOSGw.js";import"./index-B4UZJbBZ.js";import"./index-D0QjGqiR.js";import"./index-C6P-3PHl.js";import"./index-CZSIMnfE.js";import"./index-Pbv_ILj1.js";import"./index-BkD6i14w.js";import"./slide-fade-BhjlDBiO.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BkYmOMuc.js";import"./scale-fade-13h1cMen.js";import"./index-CieLuCnG.js";import"./index-S7lgn1rl.js";import"./select-BAi0Gejg.js";import"./select-list-B1sjvTim.js";import"./index-DxQD85Cv.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./index-CjWtGFYg.js";import"./index-gGKStiao.js";import"./index-Bqglt4Z4.js";import"./index-ZuzByk-F.js";import"./loading-CmllsJT7.js";import"./createLucideIcon-C_T9K6g-.js";const wn=({allowInputBeyond:r=!1,closeOnSelect:s=!0,defaultValue:l=[],endPlaceholder:w,maxSelectValues:u,placeholder:D,startPlaceholder:Y,value:M,onChange:_,...f})=>{const P=g.useRef(!1),m=g.useRef(null),h=g.useRef(null),k=g.useRef(void 0),[S,x]=ln({defaultValue:l,value:M,onChange:_}),[i,d]=S,b=d&&ca(u)?W(d).subtract(u-1,"day").toDate():void 0,T=i&&ca(u)?W(i).add(u-1,"day").toDate():void 0,{allowInput:R,containerRef:z,dateToString:p,inputFormat:H,locale:Ge,open:N,pattern:j,stringToDate:B,formControlProps:y,getCalendarProps:Ne,getContainerProps:qe,getFieldProps:$e,getIconProps:Le,getPopoverProps:Ue,inputProps:v,onClose:aa}=rn({...f,allowInputBeyond:r,autoFocus:!1,defaultValue:l,enableRange:!0,maxSelectValues:u,value:S,onChange:([t,o])=>{I(p(t)??""),C(p(o)??""),k.current=[t,o],x([t,o]),s&&t&&o&&aa()},onClear:()=>{var t;I(""),C(""),x([]),k.current=void 0,R&&N&&((t=m.current)==null||t.focus())},onClick:t=>{var o,n,c;N&&(i?(n=h.current)==null||n.focus():(o=m.current)==null||o.focus()),(c=f.onClick)==null||c.call(f,t)},onClose:()=>{var n;const[t,o]=k.current??S;I(p(t)??""),C(p(o)??""),k.current=void 0,(n=f.onClose)==null||n.call(f)},onDelete:t=>{var A,F,Ke;if(!h.current||h.current.value.length>1||!z.current)return;const o=ia(z.current);if(!da(o,h.current))return;t.preventDefault(),t.stopPropagation(),C(""),x([i,void 0]);const c=(((A=m.current)==null?void 0:A.value)??"").length;(F=m.current)==null||F.focus(),(Ke=m.current)==null||Ke.setSelectionRange(c,c)},onEnter:()=>{var n,c,A;if(P.current||!z.current)return;const t=ia(z.current);if(da(t,m.current)){const F=p(i);if(F){I(F);const na=(((n=h.current)==null?void 0:n.value)??"").length;(c=h.current)==null||c.focus(),(A=h.current)==null||A.setSelectionRange(na,na)}}else{const F=p(d);F&&C(F)}}}),[E,I]=g.useState(p(i)??""),[Je,C]=g.useState(p(d)??""),ra=g.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(j,""));let n=B(o);n&&W(n).isValid()?(r||b&&oa(n,b)&&(n=b),d&&sa(n,d)&&(n=d)):n=void 0,k.current=[n,d],x([n,d]),I(o)},[j,B,r,b,x,d]),ta=g.useCallback(t=>{let o=t.target.value;P.current||(o=o.replace(j,""));let n=B(o);n&&W(n).isValid()?(r||T&&sa(n,T)&&(n=T),i&&oa(n,i)&&(n=i)):n=void 0,k.current=[i,n],x([i,n]),C(o)},[i,r,T,j,B,x]);q(()=>{x(M??[])},[M]),q(()=>{m.current&&ua(m.current)||I(p(i)??"")},[S]),q(()=>{h.current&&ua(h.current)||C(p(d)??"")},[S]),q(()=>{I(p(i)??""),C(p(d)??"")},[Ge,H]);const Zt=g.useCallback((t={},o)=>{const n={...t.style,...v.style,...y.disabled||!R?{pointerEvents:"none"}:{}};return{"aria-label":"Start Date",placeholder:Y??D,tabIndex:R?0:-1,zIndex:E?void 0:1,...y,...v,...t,ref:Qe(o,m),style:n,value:E,onChange:O(t.onChange,ra),onClick:O(t.onClick,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionEnd:O(t.onCompositionEnd,()=>{P.current=!1,I(c=>c.replace(j,""))}),onCompositionStart:O(t.onCompositionStart,()=>P.current=!0)}},[v,R,Y,D,y,E,ra,j]),en=g.useCallback((t={},o)=>{const n={...t.style,...v.style,...R?{}:{pointerEvents:"none"}};return{"aria-label":"End Date",placeholder:w??D,...y,...v,...t,ref:Qe(o,h),style:n,cursor:y.readOnly?"default":"text",pointerEvents:y.disabled?"none":"auto",tabIndex:!R||!E?-1:0,value:Je,onChange:O(t.onChange,ta),onClick:O(t.onClick,c=>{c.preventDefault(),c.stopPropagation()}),onCompositionEnd:O(t.onCompositionEnd,()=>{P.current=!1,C(c=>c.replace(j,""))}),onCompositionStart:O(t.onCompositionStart,()=>P.current=!0)}},[E,v,R,w,D,y,Je,ta,j]);return{dateToString:p,inputValue:[E,Je],value:S,getCalendarProps:Ne,getContainerProps:qe,getEndInputProps:en,getFieldProps:$e,getIconProps:Le,getPopoverProps:Ue,getStartInputProps:Zt,onClose:aa}},a=Ze((r,s)=>{const[l,w]=hn("RangeDatePicker",r),{className:u,children:D,isClearable:Y=!0,clearable:M=Y,color:_,h:f,height:P=f,minH:m,minHeight:h=m,separator:k,clearIconProps:S,containerProps:x,contentProps:i,endInputProps:d,fieldProps:b,iconProps:T,portalProps:R={disabled:!0},startInputProps:z,...p}=Mn(w),{value:H,getCalendarProps:Ge,getContainerProps:N,getEndInputProps:j,getFieldProps:B,getIconProps:y,getPopoverProps:Ne,getStartInputProps:qe,onClose:$e}=wn(p),[Le,Ue]=H,v={color:_,h:"fit-content",w:"100%",...l.container};return e.jsx(tn,{value:l,children:e.jsx(Dn,{...Ne(),children:e.jsxs(V.div,{className:Qt("ui-range-date-picker",u),__css:v,...N(x),children:[e.jsxs(V.div,{className:"ui-range-date-picker__inner",__css:{position:"relative",...l.inner},children:[e.jsx(ea,{separator:k,value:H,...B({height:P,minHeight:h,...b}),endInputProps:j(d),startInputProps:qe(z,s)}),M&&(Le||Ue)?e.jsx(nn,{...y({clear:!0,...S})}):e.jsx(on,{...y({clear:!1,...T})})]}),e.jsx(mn,{...R,children:e.jsxs(Yn,{as:"div",className:"ui-range-date-picker__content",__css:{...l.content},...i,children:[e.jsx(an,{className:"ui-range-date-picker__calendar",...Ge()}),cn(D,{value:H,onClose:$e})]})})]})})})});a.displayName="RangeDatePicker";a.__ui__="RangeDatePicker";const ea=Ze(({className:r,separator:s="-",value:l=[],endInputProps:w,startInputProps:u,...D},Y)=>{const M=sn(),[_,f]=l,{ref:P,placeholder:m,...h}=u??{},{placeholder:k,...S}=w??{},d=!!m||!!k||(!!_||!!f),b={alignItems:"center",display:"flex",pe:"2rem",...M.field};return e.jsx(pn,{children:e.jsxs(V.div,{className:Qt("ui-range-date-picker__field",r),__css:b,...D,children:[e.jsx(Ae,{ref:Qe(Y,P),className:"ui-range-date-picker__field__start-input","aria-label":"Start date",placeholder:m,...h}),d&&s?e.jsx(V.span,{"data-placeholder":Xt(!_),marginInline:"0.25rem",children:s}):null,e.jsx(Ae,{className:"ui-range-date-picker__field__end-input","aria-label":"End date",placeholder:k,...S})]})})});ea.displayName="RangeDatePickerField";ea.__ui__="RangeDatePickerField";const Ae=Ze(({className:r,placeholder:s,value:l,...w},u)=>{const[D,Y]=dn(w,un),M={alignItems:"center",display:"inline-flex",position:"relative"};return e.jsxs(V.div,{className:r,__css:M,...D,children:[e.jsx(V.span,{"data-placeholder":Xt(!l),opacity:l?0:1,children:l||s}),e.jsx(V.input,{ref:u,left:"0",position:"absolute",value:l,w:"100%",...Y})]})});Ae.displayName="AutosizingInput";Ae.__ui__="AutosizingInput";const yo={component:a,title:"Components / Forms / RangeDatePicker"},$=()=>e.jsx(a,{placeholder:"YYYY/MM/DD"}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",children:e.jsx(We,{mt:"sm",children:e.jsx(He,{children:"Submit"})})}),e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD",children:({value:r,onClose:s})=>e.jsx(We,{mt:"sm",children:e.jsxs(He,{isDisabled:!r,onClick:s,children:["Submit",r[0]?` ${W(r[0]).format("MM/DD")} -`:"",r[1]?` ${W(r[1]).format("MM/DD")}`:""]})})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{size:"lg",placeholder:"YYYY/MM/DD"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{calendarSize:"sm",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"md",placeholder:"YYYY/MM/DD"}),e.jsx(a,{calendarSize:"lg",placeholder:"YYYY/MM/DD"})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",placeholder:"YYYY/MM/DD"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(Da,{size:"xl",children:"Solid"}),e.jsx(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:la.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"solid",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))}),e.jsx(Da,{size:"xl",children:"Subtle"}),e.jsx(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:la.map(r=>e.jsx(a,{calendarColorScheme:r,calendarVariant:"subtle",defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))],today:!0},r))})]}),X=()=>e.jsx(a,{defaultValue:[new Date(new Date().setDate(5)),new Date(new Date().setDate(15))]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultType:"date",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",placeholder:"YYYY/MM/DD"})]}),ee=()=>e.jsx(a,{defaultMonth:new Date("1993-08-18"),placeholder:"YYYY/MM/DD"}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{firstDayOfWeek:"monday",placeholder:"YYYY/MM/DD"}),e.jsx(a,{firstDayOfWeek:"sunday",placeholder:"YYYY/MM/DD"})]}),re=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"YYYY/MM/DD"}),e.jsx(a,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"YYYY/MM/DD"})]}),te=()=>e.jsx(a,{separator:"~"}),ne=()=>e.jsx(a,{maxSelectValues:3}),oe=()=>e.jsx(a,{minSelectValues:5}),se=()=>e.jsx(a,{defaultValue:[new Date],inputFormat:"MMMM D, YYYY",pattern:/[^\w, ]/g,placeholder:"MMMM D, YYYY"}),le=()=>e.jsx(a,{inputFormat:"YYYY-MM-DD",placeholder:"YYYY-MM-DD"}),ce=()=>e.jsx(a,{inputFormat:"YYYY/MM/DD",parseDate:r=>new Date(r),placeholder:"YYYY/MM/DD"}),ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",placement:"bottom-end"}),de=()=>e.jsx(a,{offset:[16,16],placeholder:"YYYY/MM/DD"}),ue=()=>e.jsx(a,{gutter:32,placeholder:"YYYY/MM/DD"}),De=()=>e.jsx(a,{duration:.4,placeholder:"YYYY/MM/DD"}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isDisabled:!0,placeholder:"YYYY/MM/DD"}),e.jsx(G,{isDisabled:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),pe=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isReadOnly:!0,placeholder:"YYYY/MM/DD"}),e.jsx(G,{isReadOnly:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),me=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"filled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"flushed",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{variant:"unstyled",isInvalid:!0,placeholder:"YYYY/MM/DD"}),e.jsx(G,{errorMessage:"This is required.",isInvalid:!0,label:"What date would you like to reserve?",children:e.jsx(a,{placeholder:"YYYY/MM/DD"})})]}),he=()=>e.jsx(a,{maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),Me=()=>e.jsx(a,{allowInputBeyond:!0,maxDate:new Date(new Date().setDate(18)),minDate:new Date(new Date().setDate(1)),placeholder:"YYYY/MM/DD"}),ge=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",today:!0}),we=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",weekendDays:[0,1]}),fe=()=>{const r=[new Date("2022-01-01"),new Date("2022-01-10"),new Date("2022-02-11"),new Date("2022-02-23"),new Date("2022-03-21"),new Date("2022-04-29"),new Date("2022-05-03"),new Date("2022-05-04"),new Date("2022-05-05"),new Date("2022-07-18"),new Date("2022-08-11"),new Date("2022-09-19"),new Date("2022-09-23"),new Date("2022-10-10"),new Date("2022-11-03"),new Date("2022-11-23"),new Date("2023-01-01"),new Date("2023-01-02"),new Date("2023-01-09"),new Date("2023-02-11"),new Date("2023-02-23"),new Date("2023-03-21"),new Date("2023-04-29"),new Date("2023-05-03"),new Date("2023-05-04"),new Date("2023-05-05"),new Date("2023-07-17"),new Date("2023-08-11"),new Date("2023-09-18"),new Date("2023-09-23"),new Date("2023-10-09"),new Date("2023-11-03"),new Date("2023-11-23"),new Date("2024-01-01"),new Date("2024-01-08"),new Date("2024-02-11"),new Date("2024-02-12"),new Date("2024-02-23"),new Date("2024-03-20"),new Date("2024-04-29"),new Date("2024-05-03"),new Date("2024-05-04"),new Date("2024-05-05"),new Date("2024-05-06"),new Date("2024-07-15"),new Date("2024-08-11"),new Date("2024-08-12"),new Date("2024-09-16"),new Date("2024-09-22"),new Date("2024-09-23"),new Date("2024-10-14"),new Date("2024-11-03"),new Date("2024-11-04"),new Date("2024-11-23")];return e.jsx(a,{holidays:r,placeholder:"YYYY/MM/DD"})},Pe=()=>e.jsx(a,{excludeDate:r=>r.getDay()===0||r.getDay()===6,placeholder:"YYYY/MM/DD"}),ke=()=>e.jsx(a,{locale:"ja"}),xe=()=>e.jsxs(Xe,{gap:"md",templateColumns:"repeat(3, 1fr)",w:"full",children:[e.jsx(a,{dateFormat:"YYYY年 MMMM",locale:"ja",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"month",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YYYY年"}),e.jsx(a,{defaultType:"month",locale:"ja",monthFormat:"MM",placeholder:"YYYY/MM/DD"}),e.jsx(a,{defaultType:"year",locale:"ja",placeholder:"YYYY/MM/DD",yearFormat:"YY"}),e.jsx(a,{locale:"ja",placeholder:"YYYY/MM/DD",weekdayFormat:"dd曜"})]}),Se=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{amountOfMonths:1,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:2,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,placeholder:"YYYY/MM/DD"})]}),je=()=>e.jsx(a,{amountOfMonths:3,disableOutsideDays:!0,paginateBy:1,placeholder:"YYYY/MM/DD"}),ye=()=>e.jsx(a,{closeOnSelect:!1,placeholder:"YYYY/MM/DD"}),Re=()=>e.jsx(a,{closeOnBlur:!1,placeholder:"YYYY/MM/DD"}),Ce=()=>e.jsx(a,{isClearable:!1,placeholder:"YYYY/MM/DD"}),be=()=>e.jsx(a,{allowInput:!1,placeholder:"YYYY/MM/DD"}),ve=()=>e.jsx(a,{disableOutsideDays:!0,placeholder:"YYYY/MM/DD"}),Ie=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withControls:!1}),Fe=()=>e.jsx(a,{placeholder:"YYYY/MM/DD",withWeekdays:!1}),Oe=()=>e.jsx(a,{hiddenOutsideDays:!0,placeholder:"YYYY/MM/DD"}),Ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{color:"primary"}}),e.jsx(a,{placeholder:"YYYY/MM/DD",iconProps:{children:e.jsx(gn,{})}})]}),_e=()=>{const[r,s]=g.useState("month");return e.jsx(a,{type:r,placeholder:"YYYY/MM/DD",onChangeType:s})},Te=()=>{const[r,s]=g.useState(new Date("1993-08-18"));return e.jsx(a,{month:r,placeholder:"YYYY/MM/DD",onChangeMonth:s})},ze=()=>{const[r,s]=g.useState([]);return e.jsx(a,{placeholder:"YYYY/MM/DD",value:r,onChange:s})},Be=()=>{var D;const{control:r,formState:{errors:s},handleSubmit:l,watch:w}=Jt(),u=Y=>console.log("submit:",Y);return console.log("watch:",w()),e.jsxs(We,{as:"form",onSubmit:l(u),children:[e.jsx(G,{errorMessage:(D=s.multiDatePicker)==null?void 0:D.message,isInvalid:!!s.multiDatePicker,label:"Date to reserve",children:e.jsx(Kt,{name:"multiDatePicker",control:r,render:({field:Y})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...Y}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ee=()=>{var Y;const r={multiDatePicker:[new Date]},{control:s,formState:{errors:l},handleSubmit:w,watch:u}=Jt({defaultValues:r}),D=M=>console.log("submit:",M);return console.log("watch:",u()),e.jsxs(We,{as:"form",onSubmit:w(D),children:[e.jsx(G,{errorMessage:(Y=l.multiDatePicker)==null?void 0:Y.message,isInvalid:!!l.multiDatePicker,label:"Date to reserve",children:e.jsx(Kt,{name:"multiDatePicker",control:s,render:({field:M})=>e.jsx(a,{placeholder:"YYYY/MM/DD",...M}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ya,pa,ma;$.parameters={...$.parameters,docs:{...(Ya=$.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />;
}`,...(ma=(pa=$.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ha,Ma,ga;L.parameters={...L.parameters,docs:{...(ha=L.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(ga=(Ma=L.parameters)==null?void 0:Ma.docs)==null?void 0:ga.source}}};var wa,fa,Pa;U.parameters={...U.parameters,docs:{...(wa=U.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker size="xs" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Pa=(fa=U.parameters)==null?void 0:fa.docs)==null?void 0:Pa.source}}};var ka,xa,Sa;J.parameters={...J.parameters,docs:{...(ka=J.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker calendarSize="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="lg" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Sa=(xa=J.parameters)==null?void 0:xa.docs)==null?void 0:Sa.source}}};var ja,ya,Ra;K.parameters={...K.parameters,docs:{...(ja=K.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ra=(ya=K.parameters)==null?void 0:ya.docs)==null?void 0:Ra.source}}};var Ca,ba,va;Q.parameters={...Q.parameters,docs:{...(Ca=Q.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
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
}`,...(va=(ba=Q.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var Ia,Fa,Oa;X.parameters={...X.parameters,docs:{...(Ia=X.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date(new Date().setDate(5)), new Date(new Date().setDate(15))]} />;
}`,...(Oa=(Fa=X.parameters)==null?void 0:Fa.docs)==null?void 0:Oa.source}}};var Va,_a,Ta;Z.parameters={...Z.parameters,docs:{...(Va=Z.parameters)==null?void 0:Va.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker defaultType="date" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Ta=(_a=Z.parameters)==null?void 0:_a.docs)==null?void 0:Ta.source}}};var za,Ba,Ea;ee.parameters={...ee.parameters,docs:{...(za=ee.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultMonth={new Date("1993-08-18")} placeholder="YYYY/MM/DD" />;
}`,...(Ea=(Ba=ee.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source}}};var Wa,Ha,Aa;ae.parameters={...ae.parameters,docs:{...(Wa=ae.parameters)==null?void 0:Wa.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker firstDayOfWeek="monday" placeholder="YYYY/MM/DD" />

      <RangeDatePicker firstDayOfWeek="sunday" placeholder="YYYY/MM/DD" />
    </>;
}`,...(Aa=(Ha=ae.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var Ga,Na,qa;re.parameters={...re.parameters,docs:{...(Ga=re.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker errorBorderColor="orange.500" isInvalid placeholder="YYYY/MM/DD" />
    </>;
}`,...(qa=(Na=re.parameters)==null?void 0:Na.docs)==null?void 0:qa.source}}};var $a,La,Ua;te.parameters={...te.parameters,docs:{...($a=te.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
  return <RangeDatePicker separator="~" />;
}`,...(Ua=(La=te.parameters)==null?void 0:La.docs)==null?void 0:Ua.source}}};var Ja,Ka,Qa;ne.parameters={...ne.parameters,docs:{...(Ja=ne.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxSelectValues={3} />;
}`,...(Qa=(Ka=ne.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,Za,er;oe.parameters={...oe.parameters,docs:{...(Xa=oe.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  return <RangeDatePicker minSelectValues={5} />;
}`,...(er=(Za=oe.parameters)==null?void 0:Za.docs)==null?void 0:er.source}}};var ar,rr,tr;se.parameters={...se.parameters,docs:{...(ar=se.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <RangeDatePicker defaultValue={[new Date()]} inputFormat="MMMM D, YYYY" pattern={/[^\\w, ]/g} placeholder="MMMM D, YYYY" />;
}`,...(tr=(rr=se.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var nr,or,sr;le.parameters={...le.parameters,docs:{...(nr=le.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />;
}`,...(sr=(or=le.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var lr,cr,ir;ce.parameters={...ce.parameters,docs:{...(lr=ce.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <RangeDatePicker inputFormat="YYYY/MM/DD" parseDate={value => new Date(value)} placeholder="YYYY/MM/DD" />;
}`,...(ir=(cr=ce.parameters)==null?void 0:cr.docs)==null?void 0:ir.source}}};var dr,ur,Dr;ie.parameters={...ie.parameters,docs:{...(dr=ie.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />;
}`,...(Dr=(ur=ie.parameters)==null?void 0:ur.docs)==null?void 0:Dr.source}}};var Yr,pr,mr;de.parameters={...de.parameters,docs:{...(Yr=de.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <RangeDatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />;
}`,...(mr=(pr=de.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var hr,Mr,gr;ue.parameters={...ue.parameters,docs:{...(hr=ue.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <RangeDatePicker gutter={32} placeholder="YYYY/MM/DD" />;
}`,...(gr=(Mr=ue.parameters)==null?void 0:Mr.docs)==null?void 0:gr.source}}};var wr,fr,Pr;De.parameters={...De.parameters,docs:{...(wr=De.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker duration={0.4} placeholder="YYYY/MM/DD" />;
}`,...(Pr=(fr=De.parameters)==null?void 0:fr.docs)==null?void 0:Pr.source}}};var kr,xr,Sr;Ye.parameters={...Ye.parameters,docs:{...(kr=Ye.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isDisabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isDisabled placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Sr=(xr=Ye.parameters)==null?void 0:xr.docs)==null?void 0:Sr.source}}};var jr,yr,Rr;pe.parameters={...pe.parameters,docs:{...(jr=pe.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isReadOnly placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isReadOnly placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(Rr=(yr=pe.parameters)==null?void 0:yr.docs)==null?void 0:Rr.source}}};var Cr,br,vr;me.parameters={...me.parameters,docs:{...(Cr=me.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker variant="outline" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" isInvalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" isInvalid placeholder="YYYY/MM/DD" />

      <FormControl errorMessage="This is required." isInvalid label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>;
}`,...(vr=(br=me.parameters)==null?void 0:br.docs)==null?void 0:vr.source}}};var Ir,Fr,Or;he.parameters={...he.parameters,docs:{...(Ir=he.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <RangeDatePicker maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Or=(Fr=he.parameters)==null?void 0:Fr.docs)==null?void 0:Or.source}}};var Vr,_r,Tr;Me.parameters={...Me.parameters,docs:{...(Vr=Me.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInputBeyond maxDate={new Date(new Date().setDate(18))} minDate={new Date(new Date().setDate(1))} placeholder="YYYY/MM/DD" />;
}`,...(Tr=(_r=Me.parameters)==null?void 0:_r.docs)==null?void 0:Tr.source}}};var zr,Br,Er;ge.parameters={...ge.parameters,docs:{...(zr=ge.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />;
}`,...(Er=(Br=ge.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var Wr,Hr,Ar;we.parameters={...we.parameters,docs:{...(Wr=we.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />;
}`,...(Ar=(Hr=we.parameters)==null?void 0:Hr.docs)==null?void 0:Ar.source}}};var Gr,Nr,qr;fe.parameters={...fe.parameters,docs:{...(Gr=fe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  const holidays = [new Date("2022-01-01"), new Date("2022-01-10"), new Date("2022-02-11"), new Date("2022-02-23"), new Date("2022-03-21"), new Date("2022-04-29"), new Date("2022-05-03"), new Date("2022-05-04"), new Date("2022-05-05"), new Date("2022-07-18"), new Date("2022-08-11"), new Date("2022-09-19"), new Date("2022-09-23"), new Date("2022-10-10"), new Date("2022-11-03"), new Date("2022-11-23"), new Date("2023-01-01"), new Date("2023-01-02"), new Date("2023-01-09"), new Date("2023-02-11"), new Date("2023-02-23"), new Date("2023-03-21"), new Date("2023-04-29"), new Date("2023-05-03"), new Date("2023-05-04"), new Date("2023-05-05"), new Date("2023-07-17"), new Date("2023-08-11"), new Date("2023-09-18"), new Date("2023-09-23"), new Date("2023-10-09"), new Date("2023-11-03"), new Date("2023-11-23"), new Date("2024-01-01"), new Date("2024-01-08"), new Date("2024-02-11"), new Date("2024-02-12"), new Date("2024-02-23"), new Date("2024-03-20"), new Date("2024-04-29"), new Date("2024-05-03"), new Date("2024-05-04"), new Date("2024-05-05"), new Date("2024-05-06"), new Date("2024-07-15"), new Date("2024-08-11"), new Date("2024-08-12"), new Date("2024-09-16"), new Date("2024-09-22"), new Date("2024-09-23"), new Date("2024-10-14"), new Date("2024-11-03"), new Date("2024-11-04"), new Date("2024-11-23")];
  return <RangeDatePicker holidays={holidays} placeholder="YYYY/MM/DD" />;
}`,...(qr=(Nr=fe.parameters)==null?void 0:Nr.docs)==null?void 0:qr.source}}};var $r,Lr,Ur;Pe.parameters={...Pe.parameters,docs:{...($r=Pe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <RangeDatePicker excludeDate={date => date.getDay() === 0 || date.getDay() === 6} placeholder="YYYY/MM/DD" />;
}`,...(Ur=(Lr=Pe.parameters)==null?void 0:Lr.docs)==null?void 0:Ur.source}}};var Jr,Kr,Qr;ke.parameters={...ke.parameters,docs:{...(Jr=ke.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />;
}`,...(Qr=(Kr=ke.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Zr,et;xe.parameters={...xe.parameters,docs:{...(Xr=xe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <RangeDatePicker dateFormat="YYYY年 MMMM" locale="ja" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YYYY年" />

      <RangeDatePicker defaultType="month" locale="ja" monthFormat="MM" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" locale="ja" placeholder="YYYY/MM/DD" yearFormat="YY" />

      <RangeDatePicker locale="ja" placeholder="YYYY/MM/DD" weekdayFormat="dd曜" />
    </Grid>;
}`,...(et=(Zr=xe.parameters)==null?void 0:Zr.docs)==null?void 0:et.source}}};var at,rt,tt;Se.parameters={...Se.parameters,docs:{...(at=Se.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker amountOfMonths={1} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={2} disableOutsideDays placeholder="YYYY/MM/DD" />

      <RangeDatePicker amountOfMonths={3} disableOutsideDays placeholder="YYYY/MM/DD" />
    </>;
}`,...(tt=(rt=Se.parameters)==null?void 0:rt.docs)==null?void 0:tt.source}}};var nt,ot,st;je.parameters={...je.parameters,docs:{...(nt=je.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  return <RangeDatePicker amountOfMonths={3} disableOutsideDays paginateBy={1} placeholder="YYYY/MM/DD" />;
}`,...(st=(ot=je.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,ct,it;ye.parameters={...ye.parameters,docs:{...(lt=ye.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />;
}`,...(it=(ct=ye.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var dt,ut,Dt;Re.parameters={...Re.parameters,docs:{...(dt=Re.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <RangeDatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />;
}`,...(Dt=(ut=Re.parameters)==null?void 0:ut.docs)==null?void 0:Dt.source}}};var Yt,pt,mt;Ce.parameters={...Ce.parameters,docs:{...(Yt=Ce.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => {
  return <RangeDatePicker isClearable={false} placeholder="YYYY/MM/DD" />;
}`,...(mt=(pt=Ce.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,Mt,gt;be.parameters={...be.parameters,docs:{...(ht=be.parameters)==null?void 0:ht.docs,source:{originalSource:`() => {
  return <RangeDatePicker allowInput={false} placeholder="YYYY/MM/DD" />;
}`,...(gt=(Mt=be.parameters)==null?void 0:Mt.docs)==null?void 0:gt.source}}};var wt,ft,Pt;ve.parameters={...ve.parameters,docs:{...(wt=ve.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
  return <RangeDatePicker disableOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(Pt=(ft=ve.parameters)==null?void 0:ft.docs)==null?void 0:Pt.source}}};var kt,xt,St;Ie.parameters={...Ie.parameters,docs:{...(kt=Ie.parameters)==null?void 0:kt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />;
}`,...(St=(xt=Ie.parameters)==null?void 0:xt.docs)==null?void 0:St.source}}};var jt,yt,Rt;Fe.parameters={...Fe.parameters,docs:{...(jt=Fe.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />;
}`,...(Rt=(yt=Fe.parameters)==null?void 0:yt.docs)==null?void 0:Rt.source}}};var Ct,bt,vt;Oe.parameters={...Oe.parameters,docs:{...(Ct=Oe.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  return <RangeDatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />;
}`,...(vt=(bt=Oe.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var It,Ft,Ot;Ve.parameters={...Ve.parameters,docs:{...(It=Ve.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
  return <>
      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      color: "primary"
    }} />

      <RangeDatePicker placeholder="YYYY/MM/DD" iconProps={{
      children: <GhostIcon />
    }} />
    </>;
}`,...(Ot=(Ft=Ve.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var Vt,_t,Tt;_e.parameters={..._e.parameters,docs:{...(Vt=_e.parameters)==null?void 0:Vt.docs,source:{originalSource:`() => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month");
  return <RangeDatePicker type={type} placeholder="YYYY/MM/DD" onChangeType={onChangeType} />;
}`,...(Tt=(_t=_e.parameters)==null?void 0:_t.docs)==null?void 0:Tt.source}}};var zt,Bt,Et;Te.parameters={...Te.parameters,docs:{...(zt=Te.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"));
  return <RangeDatePicker month={month} placeholder="YYYY/MM/DD" onChangeMonth={onChangeMonth} />;
}`,...(Et=(Bt=Te.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Wt,Ht,At;ze.parameters={...ze.parameters,docs:{...(Wt=ze.parameters)==null?void 0:Wt.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<[Date?, Date?]>([]);
  return <RangeDatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />;
}`,...(At=(Ht=ze.parameters)==null?void 0:Ht.docs)==null?void 0:At.source}}};var Gt,Nt,qt;Be.parameters={...Be.parameters,docs:{...(Gt=Be.parameters)==null?void 0:Gt.docs,source:{originalSource:`() => {
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
}`,...(qt=(Nt=Be.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var $t,Lt,Ut;Ee.parameters={...Ee.parameters,docs:{...($t=Ee.parameters)==null?void 0:$t.docs,source:{originalSource:`() => {
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
}`,...(Ut=(Lt=Ee.parameters)==null?void 0:Lt.docs)==null?void 0:Ut.source}}};const Ro=["basic","withChildren","withSize","withCalendarSize","withVariant","withColorScheme","withDefaultValue","withDefaultType","withDefaultMonth","withFirstDayOfWeek","withBorderColor","withSeparator","withMaxSelectedValue","withMinSelectedValue","withPattern","withInputFormat","withParseDate","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","withMinMaxDate","withAllowInputBeyond","withToday","withWeekendDays","withHolidays","withExcludeDate","withLocale","withFormat","withAmountOfMonths","withPaginateBy","disabledCloseOnSelect","disabledCloseOnBlur","disabledIsClearable","disabledAllowInput","disabledOutsideDays","disabledControls","disabledWeekdays","hiddenOutsideDays","customIcon","customControlType","customControlMonth","customControlValue","reactHookForm","reactHookFormWithDefaultValue"];export{Ro as __namedExportsOrder,$ as basic,Te as customControlMonth,_e as customControlType,ze as customControlValue,Ve as customIcon,yo as default,be as disabledAllowInput,Re as disabledCloseOnBlur,ye as disabledCloseOnSelect,Ie as disabledControls,Ce as disabledIsClearable,ve as disabledOutsideDays,Fe as disabledWeekdays,Oe as hiddenOutsideDays,Ye as isDisabled,me as isInvalid,pe as isReadonly,Be as reactHookForm,Ee as reactHookFormWithDefaultValue,Me as withAllowInputBeyond,Se as withAmountOfMonths,re as withBorderColor,J as withCalendarSize,L as withChildren,Q as withColorScheme,ee as withDefaultMonth,Z as withDefaultType,X as withDefaultValue,De as withDuration,Pe as withExcludeDate,ae as withFirstDayOfWeek,xe as withFormat,ue as withGutter,fe as withHolidays,le as withInputFormat,ke as withLocale,ne as withMaxSelectedValue,he as withMinMaxDate,oe as withMinSelectedValue,de as withOffset,je as withPaginateBy,ce as withParseDate,se as withPattern,ie as withPlacement,te as withSeparator,U as withSize,ge as withToday,K as withVariant,we as withWeekendDays};
