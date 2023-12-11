import{j as e,a as t,F as m}from"./jsx-runtime-TtYKBvr-.js";import{I as Ae,m as yo,o as Io,d as Po}from"./fontawesome-icon-ZF81hbra.js";import{r as ve}from"./index-IybTgENJ.js";import{u as mo,C}from"./index.esm-PVkfQNar.js";import{u as Fo,A as Do,a as xo,j as ko,b as Vo,c as fe,d as ge,e as Me,f as qo,g as Wo,h as l,i as d}from"./autocomplete-empty-KHKW9NXQ.js";import{P as To,a as Go}from"./popover-content-66z1cb3b.js";import{P as Ce}from"./container-portal-rn_JBcyJ.js";import{f as ho}from"./forward-ref-6T0UNPU-.js";import{u as Bo}from"./use-component-style-cxLt7Ns7.js";import{o as zo}from"./theme-provider-RZopMVJP.js";import{u as y,a as vo,h as Ro}from"./factory-BpP3TutA.js";import{T as Se}from"./tag-a1gRkOTD.js";import{F as O}from"./form-control-BdUo61J_.js";import{V as Ao}from"./stack-U7fyOJfq.js";import{B as Oo}from"./button-Qh4ZXxa_.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-C1O_Nmpw.js";import"./index-3Y8obiWq.js";import"./index-nHolorTc.js";import"./index-hj-GFWeP.js";import"./index-IsKhnU0y.js";import"./index-Ck3mU_gS.js";import"./index-0PpLu8TH.js";import"./index-lHyp1QpY.js";import"./index-gWY0u-sb.js";import"./index-czoUJTU6.js";import"./index-FwFF-Qz9.js";import"./index-EfP4_iuN.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./motion-AgWUVtfu.js";import"./slide-fade-890EqpEs.js";import"./index-GPdqE8CR.js";import"./utils-g9VGj7JG.js";import"./scale-fade-lfXQbwaG.js";import"./close-button-hib_kAYl.js";import"./use-ripple-XZ8Hx3Ay.js";import"./motion-SXgmxp4L.js";import"./index-xIHD0DlW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./loading-An8bmO0F.js";const o=ho((n,a)=>{const[u,g]=Bo("MultiAutocomplete",n);let{className:p,defaultValue:s=[],component:b,separator:h,isClearable:v=!0,color:i,h:c,height:r,minH:I,minHeight:P,closeOnSelect:S=!1,keepPlaceholder:w=!1,containerProps:ce,listProps:F,inputProps:pe,iconProps:se,clearIconProps:f,portalProps:A={isDisabled:!1},children:M,...D}=zo(g);const{value:x,descendants:me,formControlProps:de,getPopoverProps:bo,getContainerProps:fo,getFieldProps:go,allowCreate:he,isEmpty:Oe,inputValue:be,computedChildren:Mo,onClear:Co,...So}=Fo({...D,defaultValue:s,closeOnSelect:S,children:M});c??(c=r),I??(I=P);const wo={w:"100%",h:"fit-content",color:i,...u.container};return e(Do,{value:me,children:e(xo,{value:{...So,value:x,formControlProps:de,inputValue:be,allowCreate:he,isEmpty:Oe,styles:u},children:e(To,{...bo(),children:t(y.div,{className:vo("ui-multi-autocomplete",p),__css:wo,...fo(ce),children:[t(y.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...u.inner},children:[e(_o,{component:b,separator:h,keepPlaceholder:w,h:c,minH:I,inputProps:pe,...go({},a)}),v&&x.length?e(ko,{...f,onClick:Ro(f==null?void 0:f.onClick,Co),...de}):e(Vo,{...se,...de})]}),Oe?e(Ce,{...A,children:e(fe,{...F,children:he&&be?e(ge,{}):e(Me,{})})}):e(Ce,{...A,children:t(fe,{...F,children:[he?e(ge,{}):e(Me,{}),M??Mo]})})]})})})})}),_o=ho(({className:n,component:a,separator:u=",",keepPlaceholder:g,h:p,minH:s,placeholder:b,inputProps:h,...v},i)=>{const{value:c,label:r,inputValue:I,onChange:P,isOpen:S,inputRef:w,styles:ce}=qo(),{getInputProps:F}=Wo(),pe=ve.useMemo(()=>r!=null&&r.length?a?r.map((f,A)=>{const M=me=>{me.stopPropagation(),P(c[A]),w.current&&w.current.focus()},D=a({value:c[A],label:f,index:A,onRemove:M}),x={cursor:"default",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return D?ve.cloneElement(D,{style:x}):null}):r.map((f,A)=>{const M=r.length===A+1;return t(y.span,{display:"inline-block",me:"0.25rem",children:[f,!M||S?u:null]},A)}):null,[r,a,c,P,S,w,u]),se={paddingEnd:"2rem",h:p,minH:s,display:"flex",flexWrap:"wrap",alignItems:"center",...ce.field,cursor:"text"};return e(Go,{children:t(y.div,{className:vo("ui-multi-autocomplete__field",n),__css:se,py:r!=null&&r.length&&a?"0.125rem":void 0,...v,children:[pe,e(y.input,{className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",placeholder:!r||!(r!=null&&r.length)||g&&S?b:void 0,...F({...h,value:I??""},i)})]})})}),Dt={title:"Components / Forms / MultiAutocomplete",component:o},k=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",children:[t(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),e(o,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),V=()=>t(m,{children:[e(o,{placeholder:"extra small size",size:"xs"}),e(o,{placeholder:"small size",size:"sm"}),e(o,{placeholder:"medium size",size:"md"}),e(o,{placeholder:"large size",size:"lg"})]}),q=()=>t(m,{children:[e(o,{variant:"outline",placeholder:"outline"}),e(o,{variant:"filled",placeholder:"filled"}),e(o,{variant:"flushed",placeholder:"flushed"}),e(o,{variant:"unstyled",placeholder:"unstyled"})]}),W=()=>t(o,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>t(o,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e(o,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],allowCreate:!0,onCreate:(a,u)=>console.log("created item",a,"new items",u)}),B=()=>e(o,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],allowFree:!0,onChange:a=>console.log("new values",a)}),z=()=>{const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return t(m,{children:[e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:"first"}),e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:"last"}),e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:"地球人"}),e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},R=()=>t(m,{children:[t(o,{placeholder:"default border color",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),_=()=>t(o,{placeholder:"キャラクターを選択",separator:";",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>t(o,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",component:({label:n})=>e(Se,{children:n}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",component:({label:n,onRemove:a})=>e(Se,{onClose:a,children:n}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),N=()=>t(o,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[t(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),j=()=>t(o,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[t(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),K=()=>t(o,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>t(o,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>t(o,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>t(o,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>t(o,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>t(o,{placeholder:"キャラクターを選択",gutter:32,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>t(o,{placeholder:"キャラクターを選択",duration:.4,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>t(m,{children:[e(o,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(o,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(o,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(o,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{placeholder:"Autocomplete notifications"})})]}),$=()=>t(m,{children:[e(o,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(o,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(o,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(o,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{placeholder:"Autocomplete notifications"})})]}),ee=()=>t(m,{children:[e(o,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(o,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(o,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(o,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{placeholder:"Autocomplete notifications"})})]}),le=()=>t(o,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>t(o,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),te=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",iconProps:{children:e(Ae,{icon:yo})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),ne=()=>t(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e(Ae,{icon:Io,w:"0.5em"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),ae=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",optionProps:{icon:e(Ae,{icon:Po,color:"green.500"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),re=()=>{const[n,a]=ve.useState(["孫悟空"]);return t(o,{placeholder:"キャラクターを選択",value:n,onChange:a,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})},ue=()=>{var b,h,v;const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:u,watch:g,formState:{errors:p}}=mo(),s=i=>console.log("submit:",i);return console.log("watch:",g()),t(Ao,{as:"form",onSubmit:u(s),children:[e(O,{isInvalid:!!p.autocomplete1,label:"Who is your favorite character?",errorMessage:(b=p.autocomplete1)==null?void 0:b.message,children:e(C,{name:"autocomplete1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>t(o,{placeholder:"キャラクターを選択",...i,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!p.autocomplete2,label:"Who is your favorite character?",errorMessage:(h=p.autocomplete2)==null?void 0:h.message,children:e(C,{name:"autocomplete2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>t(o,{placeholder:"キャラクターを選択",...i,children:[t(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!p.autocomplete3,label:"Who is your favorite character?",errorMessage:(v=p.autocomplete3)==null?void 0:v.message,children:e(C,{name:"autocomplete3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e(o,{placeholder:"キャラクターを選択",...i,items:n})})}),e(Oo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ie=()=>{var h,v,i;const n={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},a=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:u,handleSubmit:g,watch:p,formState:{errors:s}}=mo({defaultValues:n}),b=c=>console.log("submit:",c);return console.log("watch:",p()),t(Ao,{as:"form",onSubmit:g(b),children:[e(O,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(h=s.autocomplete1)==null?void 0:h.message,children:e(C,{name:"autocomplete1",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>t(o,{placeholder:"キャラクターを選択",...c,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(v=s.autocomplete2)==null?void 0:v.message,children:e(C,{name:"autocomplete2",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>t(o,{placeholder:"キャラクターを選択",...c,children:[t(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(i=s.autocomplete3)==null?void 0:i.message,children:e(C,{name:"autocomplete3",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>e(o,{placeholder:"キャラクターを選択",...c,items:a})})}),e(Oo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var we,ye,Ie;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択">
        <AutocompleteOptionGroup label="地球人">
          <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
          <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
          <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label="フリーザ軍">
          <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
          <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
          <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
          <AutocompleteOption value="バータ">バータ</AutocompleteOption>
          <AutocompleteOption value="ジース">ジース</AutocompleteOption>
          <AutocompleteOption value="グルド">グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(Ie=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Pe,Fe,De;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(De=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var xe,ke,Ve;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Ve=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var qe,We,Te;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Te=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var Ge,Be,ze;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ze=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,_e,Ee;G.parameters={...G.parameters,docs:{...(Re=G.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate onCreate={(newItem, newItems) => console.log("created item", newItem, "new items", newItems)} />;
}`,...(Ee=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var He,Ne,je;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowFree onChange={values => console.log("new values", values)} />;
}`,...(je=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Ke,Le,Je;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="first" />
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="last" />
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="地球人" />
      <MultiAutocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem={["フリーザ軍", "last"]} />
    </>;
}`,...(Je=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;R.parameters={...R.parameters,docs:{...(Qe=R.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="default border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete focusBorderColor="green.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete isInvalid errorBorderColor="orange.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Xe=(Ue=R.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($e=(Ze=_.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var el,ll,ol;E.parameters={...E.parameters,docs:{...(el=E.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ol=(ll=E.parameters)==null?void 0:ll.docs)==null?void 0:ol.source}}};var tl,nl,al;H.parameters={...H.parameters,docs:{...(tl=H.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" component={({
      label
    }) => <Tag>{label}</Tag>}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" component={({
      label,
      onRemove
    }) => <Tag onClose={onRemove}>{label}</Tag>}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(al=(nl=H.parameters)==null?void 0:nl.docs)==null?void 0:al.source}}};var rl,ul,il;N.parameters={...N.parameters,docs:{...(rl=N.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" omitSelectedValues={true}>
      <AutocompleteOptionGroup label="地球人">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
        <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label="フリーザ軍">
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
        <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
        <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
        <AutocompleteOption value="バータ">バータ</AutocompleteOption>
        <AutocompleteOption value="ジース">ジース</AutocompleteOption>
        <AutocompleteOption value="グルド">グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>;
}`,...(il=(ul=N.parameters)==null?void 0:ul.docs)==null?void 0:il.source}}};var cl,pl,sl;j.parameters={...j.parameters,docs:{...(cl=j.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" maxSelectedValues={3}>
      <AutocompleteOptionGroup label="地球人">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
        <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label="フリーザ軍">
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
        <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
        <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
        <AutocompleteOption value="バータ">バータ</AutocompleteOption>
        <AutocompleteOption value="ジース">ジース</AutocompleteOption>
        <AutocompleteOption value="グルド">グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>;
}`,...(sl=(pl=j.parameters)==null?void 0:pl.docs)==null?void 0:sl.source}}};var ml,dl,hl;K.parameters={...K.parameters,docs:{...(ml=K.parameters)==null?void 0:ml.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(hl=(dl=K.parameters)==null?void 0:dl.docs)==null?void 0:hl.source}}};var vl,Al,Ol;L.parameters={...L.parameters,docs:{...(vl=L.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ol=(Al=L.parameters)==null?void 0:Al.docs)==null?void 0:Ol.source}}};var bl,fl,gl;J.parameters={...J.parameters,docs:{...(bl=J.parameters)==null?void 0:bl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(gl=(fl=J.parameters)==null?void 0:fl.docs)==null?void 0:gl.source}}};var Ml,Cl,Sl;Q.parameters={...Q.parameters,docs:{...(Ml=Q.parameters)==null?void 0:Ml.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Sl=(Cl=Q.parameters)==null?void 0:Cl.docs)==null?void 0:Sl.source}}};var wl,yl,Il;U.parameters={...U.parameters,docs:{...(wl=U.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Il=(yl=U.parameters)==null?void 0:yl.docs)==null?void 0:Il.source}}};var Pl,Fl,Dl;X.parameters={...X.parameters,docs:{...(Pl=X.parameters)==null?void 0:Pl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Dl=(Fl=X.parameters)==null?void 0:Fl.docs)==null?void 0:Dl.source}}};var xl,kl,Vl;Y.parameters={...Y.parameters,docs:{...(xl=Y.parameters)==null?void 0:xl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Vl=(kl=Y.parameters)==null?void 0:kl.docs)==null?void 0:Vl.source}}};var ql,Wl,Tl;Z.parameters={...Z.parameters,docs:{...(ql=Z.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Tl=(Wl=Z.parameters)==null?void 0:Wl.docs)==null?void 0:Tl.source}}};var Gl,Bl,zl;$.parameters={...$.parameters,docs:{...(Gl=$.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(zl=(Bl=$.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};var Rl,_l,El;ee.parameters={...ee.parameters,docs:{...(Rl=ee.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(El=(_l=ee.parameters)==null?void 0:_l.docs)==null?void 0:El.source}}};var Hl,Nl,jl;le.parameters={...le.parameters,docs:{...(Hl=le.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(jl=(Nl=le.parameters)==null?void 0:Nl.docs)==null?void 0:jl.source}}};var Kl,Ll,Jl;oe.parameters={...oe.parameters,docs:{...(Kl=oe.parameters)==null?void 0:Kl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Jl=(Ll=oe.parameters)==null?void 0:Ll.docs)==null?void 0:Jl.source}}};var Ql,Ul,Xl;te.parameters={...te.parameters,docs:{...(Ql=te.parameters)==null?void 0:Ql.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Xl=(Ul=te.parameters)==null?void 0:Ul.docs)==null?void 0:Xl.source}}};var Yl,Zl,$l;ne.parameters={...ne.parameters,docs:{...(Yl=ne.parameters)==null?void 0:Yl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Icon icon={faTrash} w="0.5em" />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($l=(Zl=ne.parameters)==null?void 0:Zl.docs)==null?void 0:$l.source}}};var eo,lo,oo;ae.parameters={...ae.parameters,docs:{...(eo=ae.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      icon: <Icon icon={faCheck} color="green.500" />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(oo=(lo=ae.parameters)==null?void 0:lo.docs)==null?void 0:oo.source}}};var to,no,ao;re.parameters={...re.parameters,docs:{...(to=re.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ao=(no=re.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var ro,uo,io;ue.parameters={...ue.parameters,docs:{...(ro=ue.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  };
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
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
      <FormControl isInvalid={!!errors.autocomplete1} label="Who is your favorite character?" errorMessage={errors.autocomplete1?.message}>
        <Controller name="autocomplete1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(io=(uo=ue.parameters)==null?void 0:uo.docs)==null?void 0:io.source}}};var co,po,so;ie.parameters={...ie.parameters,docs:{...(co=ie.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  };
  const defaultValues: Data = {
    autocomplete1: ["孫悟空"],
    autocomplete2: ["フリーザ"],
    autocomplete3: ["リクーム"]
  };
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }]
  }];
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
      <FormControl isInvalid={!!errors.autocomplete1} label="Who is your favorite character?" errorMessage={errors.autocomplete1?.message}>
        <Controller name="autocomplete1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(so=(po=ie.parameters)==null?void 0:po.docs)==null?void 0:so.source}}};const xt=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{xt as __namedExportsOrder,k as basic,ne as customClearIcon,re as customControl,te as customIcon,ae as customOption,Dt as default,J as disabledCloseOnBlur,L as disabledIsClearable,Z as isDisabled,ee as isInvalid,le as isOptionDisabled,oe as isOptionFocusable,$ as isReadonly,ue as reactHookForm,ie as reactHookFormWithDefaultValue,G as withAllowCreate,B as withAllowFree,R as withBorderColor,K as withCloseOnSelect,H as withComponent,W as withDefaultValue,Y as withDuration,T as withEmptyMessage,X as withGutter,z as withInsertPositionItem,E as withKeepPlaceholder,j as withMaxSelectedValues,U as withOffset,N as withOmitSelectedValues,Q as withPlacement,_ as withSeparator,V as withSize,q as withVariant};
