import{a as e,j as t,F as m}from"./jsx-runtime-b08f8875.js";import{I as ve,b as fl,q as gl,c as Ml}from"./fontawesome-icon-be87301f.js";import{r as de}from"./index-8ee6c85d.js";import{u as il,C as M}from"./index.esm-3dbb7ee1.js";import{u as Cl,A as Sl,a as yl,b as wl,c as Il,d as be,e as fe,f as ge,g as Pl,h as Fl,i as o,j as d}from"./autocomplete-empty-18616753.js";import{P as Dl,a as kl}from"./popover-content-5ae82ec5.js";import{f as cl}from"./forward-ref-cf7188bd.js";import{a as Vl}from"./use-component-style-07e84389.js";import{o as xl}from"./theme-provider-1097130b.js";import{d as ue,e as he,t as ql}from"./factory-ab7c3580.js";import{T as Me}from"./tag-3bb010aa.js";import{F as O}from"./form-control-9bc84439.js";import{V as pl}from"./stack-f811b10a.js";import{B as sl}from"./button-3d1799ed.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-1c0bf186.js";import"./index-6cdd3cb8.js";import"./index-b013f003.js";import"./index-a3b565a7.js";import"./index-7c833fdd.js";import"./index-30db043d.js";import"./index-d88d669c.js";import"./index-ce22a570.js";import"./index-c3db8104.js";import"./index-c02ccce4.js";import"./index-bd9d4d3b.js";import"./index-c8e9dbe6.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./motion-5447b2d8.js";import"./slide-fade-3dfcdad7.js";import"./index-709acde9.js";import"./utils-605cfd19.js";import"./scale-fade-748a8284.js";import"./close-button-b4ee3b21.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-0bce3a59.js";const l=cl((n,r)=>{const[i,g]=Vl("MultiAutocomplete",n);let{className:p,defaultValue:s=[],component:b,separator:h,isClearable:v=!0,color:u,h:a,height:c,minH:C,minHeight:F,closeOnSelect:S=!1,keepPlaceholder:y=!1,containerProps:ie,listProps:D,inputProps:ce,iconProps:pe,clearIconProps:f,children:A,...w}=xl(g);const{value:I,descendants:se,formControlProps:P,getPopoverProps:ml,getContainerProps:dl,getFieldProps:hl,createOption:me,isEmpty:Ae,inputValue:Oe,computedChildren:vl,onClear:Al,...Ol}=Cl({...w,defaultValue:s,closeOnSelect:S,children:A});a=a??c,C=C??F;const bl={position:"relative",w:"100%",h:"fit-content",color:u,...i.container};return e(Sl,{value:se,children:e(yl,{value:{...Ol,value:I,formControlProps:P,inputValue:Oe,createOption:me,isEmpty:Ae,styles:i},children:e(Dl,{...ml(),children:t(ue.div,{className:he("ui-autocomplete",p),__css:bl,...dl(ie),children:[e(Wl,{component:b,separator:h,keepPlaceholder:y,h:a,minH:C,inputProps:ce,...hl({},r)}),v&&I.length?e(wl,{...f,onClick:ql(f==null?void 0:f.onClick,Al),...P}):e(Il,{...pe,...P}),Ae?e(be,{...D,children:me&&Oe?e(fe,{}):e(ge,{})}):t(be,{...D,children:[me?e(fe,{}):e(ge,{}),A??vl]})]})})})})}),Wl=cl(({className:n,component:r,separator:i=",",keepPlaceholder:g,h:p,minH:s,placeholder:b,inputProps:h,...v},u)=>{const{value:a,displayValue:c,inputValue:C,onChange:F,isOpen:S,inputRef:y,styles:ie}=Pl(),{getInputProps:D}=Fl(),ce=de.useMemo(()=>c!=null&&c.length?r?c.map((f,A)=>{const w=P=>{P.stopPropagation(),F(a[A]),y.current&&y.current.focus()},I=r({value:a[A],displayValue:f,index:A,onRemove:w}),se={cursor:"default",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return I?de.cloneElement(I,{style:se}):null}):c.map((f,A)=>{const w=c.length===A+1;return t(ue.span,{display:"inline-block",me:"0.25rem",children:[f,!w||S?i:null]},A)}):null,[c,r,a,F,S,y,i]),pe={paddingEnd:"2rem",h:p,minH:s,display:"flex",flexWrap:"wrap",alignItems:"center",...ie.field,cursor:"text"};return e(kl,{children:t(ue.div,{className:he("ui-autocomplete__field",n),__css:pe,py:c!=null&&c.length&&r?"0.125rem":void 0,...v,children:[ce,e(ue.input,{className:he("ui-autocomplete__field__input",n),display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",placeholder:!c||g&&S?b:void 0,...D({...h,value:C??""},u)})]})})}),ft={title:"Components / Forms / MultiAutocomplete",component:l},k=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),V=()=>t(m,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),x=()=>t(m,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),q=()=>t(l,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),W=()=>t(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],createOption:!0,onCreate:(r,i)=>console.log("created option",r,"new options",i)}),G=()=>{const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return t(m,{children:[e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"first"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"last"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"地球人"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:["フリーザ軍","last"]})]})},B=()=>t(m,{children:[t(l,{placeholder:"default border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),z=()=>t(l,{placeholder:"キャラクターを選択",separator:";",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),R=()=>t(l,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),_=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",component:({displayValue:n})=>e(Me,{children:n}),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",component:({displayValue:n,onRemove:r})=>e(Me,{onCloseClick:r,children:n}),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),E=()=>t(l,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),H=()=>t(l,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),U=()=>t(l,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),j=()=>t(l,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),N=()=>t(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),K=()=>t(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),L=()=>t(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),J=()=>t(l,{placeholder:"キャラクターを選択",gutter:32,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>t(l,{placeholder:"キャラクターを選択",duration:.4,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),X=()=>t(m,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),Y=()=>t(m,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),Z=()=>t(m,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Autocomplete notifications"})})]}),$=()=>t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",iconProps:{children:e(ve,{icon:fl})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),le=()=>t(l,{placeholder:"キャラクターを選択",clearIconProps:{children:e(ve,{icon:gl,w:"0.5em"})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),te=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",optionProps:{icon:e(ve,{icon:Ml,color:"green.500"})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),ne=()=>{const[n,r]=de.useState(["孫悟空"]);return t(l,{placeholder:"キャラクターを選択",value:n,onChange:r,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},re=()=>{var b,h,v;const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:i,watch:g,formState:{errors:p}}=il(),s=u=>console.log("submit:",u);return console.log("watch:",g()),t(pl,{as:"form",onSubmit:i(s),children:[e(O,{isInvalid:!!p.autocomplete1,label:"Who is your favorite character?",errorMessage:(b=p.autocomplete1)==null?void 0:b.message,children:e(M,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>t(l,{placeholder:"キャラクターを選択",...u,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!p.autocomplete2,label:"Who is your favorite character?",errorMessage:(h=p.autocomplete2)==null?void 0:h.message,children:e(M,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>t(l,{placeholder:"キャラクターを選択",...u,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!p.autocomplete3,label:"Who is your favorite character?",errorMessage:(v=p.autocomplete3)==null?void 0:v.message,children:e(M,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e(l,{placeholder:"キャラクターを選択",...u,options:n})})}),e(sl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ae=()=>{var h,v,u;const n={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},r=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:i,handleSubmit:g,watch:p,formState:{errors:s}}=il({defaultValues:n}),b=a=>console.log("submit:",a);return console.log("watch:",p()),t(pl,{as:"form",onSubmit:g(b),children:[e(O,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(h=s.autocomplete1)==null?void 0:h.message,children:e(M,{name:"autocomplete1",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>t(l,{placeholder:"キャラクターを選択",...a,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(v=s.autocomplete2)==null?void 0:v.message,children:e(M,{name:"autocomplete2",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>t(l,{placeholder:"キャラクターを選択",...a,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(u=s.autocomplete3)==null?void 0:u.message,children:e(M,{name:"autocomplete3",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e(l,{placeholder:"キャラクターを選択",...a,options:r})})}),e(sl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ce,Se,ye;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
    }]
  }];
  return <>
      <MultiAutocomplete placeholder='キャラクターを選択'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択'>
        <AutocompleteOptionGroup label='地球人'>
          <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
          <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
          <AutocompleteOption value='クリリン'>クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label='フリーザ軍'>
          <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
          <AutocompleteOption value='ギニュー'>ギニュー</AutocompleteOption>
          <AutocompleteOption value='リクーム'>リクーム</AutocompleteOption>
          <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
          <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
          <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択' options={options} />
    </>;
}`,...(ye=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var we,Ie,Pe;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder='extra small size' size='xs' />
      <MultiAutocomplete placeholder='small size' size='sm' />
      <MultiAutocomplete placeholder='medium size' size='md' />
      <MultiAutocomplete placeholder='large size' size='lg' />
    </>;
}`,...(Pe=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Fe,De,ke;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant='outline' placeholder='outline' />
      <MultiAutocomplete variant='filled' placeholder='filled' />
      <MultiAutocomplete variant='flushed' placeholder='flushed' />
      <MultiAutocomplete variant='unstyled' placeholder='unstyled' />
    </>;
}`,...(ke=(De=x.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Ve,xe,qe;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' defaultValue={['ベジータ']}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(qe=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var We,Te,Ge;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' emptyMessage='キャラクターが存在しません'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ge=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ge.source}}};var Be,ze,Re;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
    }]
  }];
  return <MultiAutocomplete placeholder='キャラクターを選択' options={options} createOption onCreate={(newOption, newOptions) => console.log('created option', newOption, 'new options', newOptions)} />;
}`,...(Re=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var _e,Ee,He;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
    }]
  }];
  return <>
      <MultiAutocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate='first' />
      <MultiAutocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate='last' />
      <MultiAutocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate='地球人' />
      <MultiAutocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate={['フリーザ軍', 'last']} />
    </>;
}`,...(He=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Ue,je,Ne;B.parameters={...B.parameters,docs:{...(Ue=B.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder='default border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete focusBorderColor='green.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete isInvalid errorBorderColor='orange.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Ne=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Ke,Le,Je;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' separator=';'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Je=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Qe,Xe,Ye;R.parameters={...R.parameters,docs:{...(Qe=R.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' keepPlaceholder>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ye=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,eo;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder='キャラクターを選択' component={({
      displayValue
    }) => <Tag>{displayValue}</Tag>}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択' component={({
      displayValue,
      onRemove
    }) => <Tag onCloseClick={onRemove}>{displayValue}</Tag>}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(eo=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:eo.source}}};var oo,lo,to;E.parameters={...E.parameters,docs:{...(oo=E.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' omitSelectedValues={true}>
      <AutocompleteOptionGroup label='地球人'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
        <AutocompleteOption value='クリリン'>クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label='フリーザ軍'>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
        <AutocompleteOption value='ギニュー'>ギニュー</AutocompleteOption>
        <AutocompleteOption value='リクーム'>リクーム</AutocompleteOption>
        <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
        <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
        <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>;
}`,...(to=(lo=E.parameters)==null?void 0:lo.docs)==null?void 0:to.source}}};var no,ro,ao;H.parameters={...H.parameters,docs:{...(no=H.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' maxSelectedValues={3}>
      <AutocompleteOptionGroup label='地球人'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
        <AutocompleteOption value='クリリン'>クリリン</AutocompleteOption>
      </AutocompleteOptionGroup>

      <AutocompleteOptionGroup label='フリーザ軍'>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
        <AutocompleteOption value='ギニュー'>ギニュー</AutocompleteOption>
        <AutocompleteOption value='リクーム'>リクーム</AutocompleteOption>
        <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
        <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
        <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
      </AutocompleteOptionGroup>
    </MultiAutocomplete>;
}`,...(ao=(ro=H.parameters)==null?void 0:ro.docs)==null?void 0:ao.source}}};var uo,io,co;U.parameters={...U.parameters,docs:{...(uo=U.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' closeOnSelect={true}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(co=(io=U.parameters)==null?void 0:io.docs)==null?void 0:co.source}}};var po,so,mo;j.parameters={...j.parameters,docs:{...(po=j.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' isClearable={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(mo=(so=j.parameters)==null?void 0:so.docs)==null?void 0:mo.source}}};var ho,vo,Ao;N.parameters={...N.parameters,docs:{...(ho=N.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' closeOnBlur={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ao=(vo=N.parameters)==null?void 0:vo.docs)==null?void 0:Ao.source}}};var Oo,bo,fo;K.parameters={...K.parameters,docs:{...(Oo=K.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(fo=(bo=K.parameters)==null?void 0:bo.docs)==null?void 0:fo.source}}};var go,Mo,Co;L.parameters={...L.parameters,docs:{...(go=L.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' offset={[16, 16]} listProps={{
    maxW: 'xs'
  }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Co=(Mo=L.parameters)==null?void 0:Mo.docs)==null?void 0:Co.source}}};var So,yo,wo;J.parameters={...J.parameters,docs:{...(So=J.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' gutter={32}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(wo=(yo=J.parameters)==null?void 0:yo.docs)==null?void 0:wo.source}}};var Io,Po,Fo;Q.parameters={...Q.parameters,docs:{...(Io=Q.parameters)==null?void 0:Io.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' duration={0.4}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Fo=(Po=Q.parameters)==null?void 0:Po.docs)==null?void 0:Fo.source}}};var Do,ko,Vo;X.parameters={...X.parameters,docs:{...(Do=X.parameters)==null?void 0:Do.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant='outline' placeholder='outline' />
      <MultiAutocomplete isDisabled variant='filled' placeholder='filled' />
      <MultiAutocomplete isDisabled variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(Vo=(ko=X.parameters)==null?void 0:ko.docs)==null?void 0:Vo.source}}};var xo,qo,Wo;Y.parameters={...Y.parameters,docs:{...(xo=Y.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant='outline' placeholder='outline' />
      <MultiAutocomplete isReadOnly variant='filled' placeholder='filled' />
      <MultiAutocomplete isReadOnly variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(Wo=(qo=Y.parameters)==null?void 0:qo.docs)==null?void 0:Wo.source}}};var To,Go,Bo;Z.parameters={...Z.parameters,docs:{...(To=Z.parameters)==null?void 0:To.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant='outline' placeholder='outline' />
      <MultiAutocomplete isInvalid variant='filled' placeholder='filled' />
      <MultiAutocomplete isInvalid variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(Bo=(Go=Z.parameters)==null?void 0:Go.docs)==null?void 0:Bo.source}}};var zo,Ro,_o;$.parameters={...$.parameters,docs:{...(zo=$.parameters)==null?void 0:zo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(_o=(Ro=$.parameters)==null?void 0:Ro.docs)==null?void 0:_o.source}}};var Eo,Ho,Uo;ee.parameters={...ee.parameters,docs:{...(Eo=ee.parameters)==null?void 0:Eo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Uo=(Ho=ee.parameters)==null?void 0:Ho.docs)==null?void 0:Uo.source}}};var jo,No,Ko;oe.parameters={...oe.parameters,docs:{...(jo=oe.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder='キャラクターを選択' iconProps={{
      color: 'primary'
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択' iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Ko=(No=oe.parameters)==null?void 0:No.docs)==null?void 0:Ko.source}}};var Lo,Jo,Qo;le.parameters={...le.parameters,docs:{...(Lo=le.parameters)==null?void 0:Lo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' clearIconProps={{
    children: <Icon icon={faTrash} w='0.5em' />
  }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Qo=(Jo=le.parameters)==null?void 0:Jo.docs)==null?void 0:Qo.source}}};var Xo,Yo,Zo;te.parameters={...te.parameters,docs:{...(Xo=te.parameters)==null?void 0:Xo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder='キャラクターを選択' optionProps={{
      color: 'primary'
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択' optionProps={{
      icon: <Icon icon={faCheck} color='green.500' />
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Zo=(Yo=te.parameters)==null?void 0:Yo.docs)==null?void 0:Zo.source}}};var $o,el,ol;ne.parameters={...ne.parameters,docs:{...($o=ne.parameters)==null?void 0:$o.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(['孫悟空']);
  return <MultiAutocomplete placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ol=(el=ne.parameters)==null?void 0:el.docs)==null?void 0:ol.source}}};var ll,tl,nl;re.parameters={...re.parameters,docs:{...(ll=re.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  };
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.autocomplete1} label='Who is your favorite character?' errorMessage={errors.autocomplete1?.message}>
        <Controller name='autocomplete1' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
              <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
              <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label='Who is your favorite character?' errorMessage={errors.autocomplete2?.message}>
        <Controller name='autocomplete2' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOptionGroup label='地球人'>
                <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
                <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
                <AutocompleteOption value='クリリン'>
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label='フリーザ軍'>
                <AutocompleteOption value='フリーザ'>
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value='ギニュー'>
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value='リクーム'>
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
                <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
                <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label='Who is your favorite character?' errorMessage={errors.autocomplete3?.message}>
        <Controller name='autocomplete3' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder='キャラクターを選択' {...field} options={options} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(nl=(tl=re.parameters)==null?void 0:tl.docs)==null?void 0:nl.source}}};var rl,al,ul;ae.parameters={...ae.parameters,docs:{...(rl=ae.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  };
  const defaultValues: Data = {
    autocomplete1: ['孫悟空'],
    autocomplete2: ['フリーザ'],
    autocomplete3: ['リクーム']
  };
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.autocomplete1} label='Who is your favorite character?' errorMessage={errors.autocomplete1?.message}>
        <Controller name='autocomplete1' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
              <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
              <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label='Who is your favorite character?' errorMessage={errors.autocomplete2?.message}>
        <Controller name='autocomplete2' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOptionGroup label='地球人'>
                <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
                <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
                <AutocompleteOption value='クリリン'>
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label='フリーザ軍'>
                <AutocompleteOption value='フリーザ'>
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value='ギニュー'>
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value='リクーム'>
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
                <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
                <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </MultiAutocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label='Who is your favorite character?' errorMessage={errors.autocomplete3?.message}>
        <Controller name='autocomplete3' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiAutocomplete placeholder='キャラクターを選択' {...field} options={options} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(ul=(al=ae.parameters)==null?void 0:al.docs)==null?void 0:ul.source}}};const gt=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withCreateOption","withCreateOrder","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{gt as __namedExportsOrder,k as basic,le as customClearIcon,ne as customControl,oe as customIcon,te as customOption,ft as default,N as disabledCloseOnBlur,j as disabledIsClearable,X as isDisabled,Z as isInvalid,$ as isOptionDisabled,ee as isOptionFocusable,Y as isReadonly,re as reactHookForm,ae as reactHookFormWithDefaultValue,B as withBorderColor,U as withCloseOnSelect,_ as withComponent,T as withCreateOption,G as withCreateOrder,q as withDefaultValue,Q as withDuration,W as withEmptyMessage,J as withGutter,R as withKeepPlaceholder,H as withMaxSelectedValues,L as withOffset,E as withOmitSelectedValues,K as withPlacement,z as withSeparator,V as withSize,x as withVariant};
//# sourceMappingURL=multi-autocomplete.stories-7bbb0614.js.map
