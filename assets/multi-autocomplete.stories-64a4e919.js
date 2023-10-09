import{j as e,a as t,F as m}from"./jsx-runtime-29545a09.js";import{I as he,b as fl,q as gl,c as Ml}from"./fontawesome-icon-485a16f9.js";import{r as de}from"./index-76fb7be0.js";import{u as ul,C as M}from"./index.esm-6ca9e0d3.js";import{u as Sl,A as Cl,a as yl,b as wl,c as Il,d as Oe,e as be,f as fe,g as Pl,h as Fl,i as o,j as d}from"./autocomplete-empty-164e25ad.js";import{P as Dl,a as kl}from"./popover-content-8a1622ac.js";import{f as il}from"./forward-ref-8b7d2a6f.js";import{a as Vl}from"./use-component-style-41572cdb.js";import{o as xl}from"./theme-8ffbcb8d.js";import{d as ue,e as cl,w as ql}from"./factory-1710cdec.js";import{T as ge}from"./tag-bb85d622.js";import{F as O}from"./form-control-7c8128f6.js";import{V as pl}from"./stack-23c26cc7.js";import{B as sl}from"./button-26cd920e.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-a96e6c8c.js";import"./index-9e3e25b4.js";import"./index-cb46c9fe.js";import"./index-e925522b.js";import"./index-c0b82449.js";import"./index-6b05a09c.js";import"./index-daa48031.js";import"./index-f4a21ab0.js";import"./index-d68d7549.js";import"./index-43ce2d90.js";import"./index-7e51f9ac.js";import"./index-f0b38440.js";import"./index-1b18eee5.js";import"./index-93cf4015.js";import"./motion-90200a2f.js";import"./close-button-262cf133.js";import"./slide-fade-d1b3a022.js";import"./index-033cf86e.js";import"./utils-2f2a938d.js";import"./scale-fade-f9e4a23a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-2f69458e.js";const l=il((n,r)=>{const[i,g]=Vl("Select",n);let{className:p,defaultValue:s=[],component:b,separator:h,isClearable:v=!0,color:u,h:a,height:c,minH:S,minHeight:F,closeOnSelect:C=!1,keepPlaceholder:y=!1,containerProps:ie,listProps:D,inputProps:ce,iconProps:pe,clearIconProps:f,children:A,...w}=xl(g);const{value:I,descendants:se,formControlProps:P,getPopoverProps:ml,getContainerProps:dl,getFieldProps:hl,createOption:me,isEmpty:ve,inputValue:Ae,computedChildren:vl,onClear:Al,...Ol}=Sl({...w,defaultValue:s,closeOnSelect:C,children:A});a=a??c,S=S??F;const bl={position:"relative",w:"100%",h:"fit-content",color:u,...i.container};return e(Cl,{value:se,children:e(yl,{value:{...Ol,value:I,formControlProps:P,inputValue:Ae,createOption:me,isEmpty:ve,styles:i},children:e(Dl,{...ml(),children:t(ue.div,{className:cl("ui-autocomplete",p),__css:bl,...dl(ie),children:[e(Wl,{component:b,separator:h,keepPlaceholder:y,h:a,minH:S,inputProps:ce,...hl({},r)}),v&&I.length?e(wl,{...f,onClick:ql(f==null?void 0:f.onClick,Al),...P}):e(Il,{...pe,...P}),ve?e(Oe,{...D,children:me&&Ae?e(be,{}):e(fe,{})}):t(Oe,{...D,children:[me?e(be,{}):e(fe,{}),A??vl]})]})})})})}),Wl=il(({className:n,component:r,separator:i=",",keepPlaceholder:g,h:p,minH:s,placeholder:b,inputProps:h,...v},u)=>{const{value:a,displayValue:c,inputValue:S,onChange:F,isOpen:C,inputRef:y,styles:ie}=Pl(),{getInputProps:D}=Fl(),ce=de.useMemo(()=>c!=null&&c.length?r?c.map((f,A)=>{const w=P=>{P.stopPropagation(),F(a[A]),y.current&&y.current.focus()},I=r({value:a[A],displayValue:f,index:A,onRemove:w}),se={cursor:"default",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return I?de.cloneElement(I,{style:se}):null}):c.map((f,A)=>{const w=c.length===A+1;return t(ue.span,{display:"inline-block",me:"0.25rem",children:[f,!w||C?i:null]},A)}):null,[c,r,a,F,C,y,i]),pe={paddingEnd:"2rem",h:p,minH:s,display:"flex",flexWrap:"wrap",alignItems:"center",...ie.field,cursor:"text"};return e(kl,{children:t(ue.div,{className:cl("ui-autocomplete-field",n),__css:pe,py:c!=null&&c.length&&r?"0.125rem":void 0,...v,children:[ce,e(ue.input,{className:"ui-autocomplete-input",display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",placeholder:!c||g&&C?b:void 0,...D({...h,value:S??""},u)})]})})}),ft={title:"Components / Forms / MultiAutocomplete",component:l},k=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),V=()=>t(m,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),x=()=>t(m,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),q=()=>t(l,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),W=()=>t(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],createOption:!0,onCreate:(r,i)=>console.log("created option",r,"new options",i)}),G=()=>{const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return t(m,{children:[e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"first"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"last"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"地球人"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:["フリーザ軍","last"]})]})},B=()=>t(m,{children:[t(l,{placeholder:"default border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),z=()=>t(l,{placeholder:"キャラクターを選択",separator:";",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),R=()=>t(l,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),E=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",component:({displayValue:n})=>e(ge,{children:n}),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",component:({displayValue:n,onRemove:r})=>e(ge,{onCloseClick:r,children:n}),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>t(l,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),_=()=>t(l,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),U=()=>t(l,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),j=()=>t(l,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),N=()=>t(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),K=()=>t(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),L=()=>t(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),J=()=>t(l,{placeholder:"キャラクターを選択",gutter:32,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>t(l,{placeholder:"キャラクターを選択",duration:.4,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),X=()=>t(m,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),Y=()=>t(m,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),Z=()=>t(m,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Autocomplete notifications"})})]}),$=()=>t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",iconProps:{children:e(he,{icon:fl})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),le=()=>t(l,{placeholder:"キャラクターを選択",clearIconProps:{children:e(he,{icon:gl,w:"0.5em"})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),te=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",optionProps:{icon:e(he,{icon:Ml,color:"green.500"})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),ne=()=>{const[n,r]=de.useState(["孫悟空"]);return t(l,{placeholder:"キャラクターを選択",value:n,onChange:r,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},re=()=>{var b,h,v;const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:i,watch:g,formState:{errors:p}}=ul(),s=u=>console.log("submit:",u);return console.log("watch:",g()),t(pl,{as:"form",onSubmit:i(s),children:[e(O,{isInvalid:!!p.autocomplete1,label:"Who is your favorite character?",errorMessage:(b=p.autocomplete1)==null?void 0:b.message,children:e(M,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>t(l,{placeholder:"キャラクターを選択",...u,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!p.autocomplete2,label:"Who is your favorite character?",errorMessage:(h=p.autocomplete2)==null?void 0:h.message,children:e(M,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>t(l,{placeholder:"キャラクターを選択",...u,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!p.autocomplete3,label:"Who is your favorite character?",errorMessage:(v=p.autocomplete3)==null?void 0:v.message,children:e(M,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e(l,{placeholder:"キャラクターを選択",...u,options:n})})}),e(sl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ae=()=>{var h,v,u;const n={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},r=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:i,handleSubmit:g,watch:p,formState:{errors:s}}=ul({defaultValues:n}),b=a=>console.log("submit:",a);return console.log("watch:",p()),t(pl,{as:"form",onSubmit:g(b),children:[e(O,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(h=s.autocomplete1)==null?void 0:h.message,children:e(M,{name:"autocomplete1",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>t(l,{placeholder:"キャラクターを選択",...a,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(v=s.autocomplete2)==null?void 0:v.message,children:e(M,{name:"autocomplete2",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>t(l,{placeholder:"キャラクターを選択",...a,children:[t(d,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(d,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(u=s.autocomplete3)==null?void 0:u.message,children:e(M,{name:"autocomplete3",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e(l,{placeholder:"キャラクターを選択",...a,options:r})})}),e(sl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Me,Se,Ce;k.parameters={...k.parameters,docs:{...(Me=k.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var ye,we,Ie;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder='extra small size' size='xs' />
      <MultiAutocomplete placeholder='small size' size='sm' />
      <MultiAutocomplete placeholder='medium size' size='md' />
      <MultiAutocomplete placeholder='large size' size='lg' />
    </>;
}`,...(Ie=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Pe,Fe,De;x.parameters={...x.parameters,docs:{...(Pe=x.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant='outline' placeholder='outline' />
      <MultiAutocomplete variant='filled' placeholder='filled' />
      <MultiAutocomplete variant='flushed' placeholder='flushed' />
      <MultiAutocomplete variant='unstyled' placeholder='unstyled' />
    </>;
}`,...(De=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var ke,Ve,xe;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' defaultValue={['ベジータ']}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(xe=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:xe.source}}};var qe,We,Te;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' emptyMessage='キャラクターが存在しません'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Te=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var Ge,Be,ze;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(ze=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,Ee,He;G.parameters={...G.parameters,docs:{...(Re=G.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(He=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var _e,Ue,je;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(je=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var Ne,Ke,Le;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' separator=';'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Le=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Je,Qe,Xe;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' keepPlaceholder>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Xe=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;E.parameters={...E.parameters,docs:{...(Ye=E.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...($e=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var eo,oo,lo;H.parameters={...H.parameters,docs:{...(eo=H.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
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
}`,...(lo=(oo=H.parameters)==null?void 0:oo.docs)==null?void 0:lo.source}}};var to,no,ro;_.parameters={..._.parameters,docs:{...(to=_.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
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
}`,...(ro=(no=_.parameters)==null?void 0:no.docs)==null?void 0:ro.source}}};var ao,uo,io;U.parameters={...U.parameters,docs:{...(ao=U.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' closeOnSelect={true}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(io=(uo=U.parameters)==null?void 0:uo.docs)==null?void 0:io.source}}};var co,po,so;j.parameters={...j.parameters,docs:{...(co=j.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' isClearable={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(so=(po=j.parameters)==null?void 0:po.docs)==null?void 0:so.source}}};var mo,ho,vo;N.parameters={...N.parameters,docs:{...(mo=N.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' closeOnBlur={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(vo=(ho=N.parameters)==null?void 0:ho.docs)==null?void 0:vo.source}}};var Ao,Oo,bo;K.parameters={...K.parameters,docs:{...(Ao=K.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(bo=(Oo=K.parameters)==null?void 0:Oo.docs)==null?void 0:bo.source}}};var fo,go,Mo;L.parameters={...L.parameters,docs:{...(fo=L.parameters)==null?void 0:fo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' offset={[16, 16]} listProps={{
    maxW: 'xs'
  }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Mo=(go=L.parameters)==null?void 0:go.docs)==null?void 0:Mo.source}}};var So,Co,yo;J.parameters={...J.parameters,docs:{...(So=J.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' gutter={32}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(yo=(Co=J.parameters)==null?void 0:Co.docs)==null?void 0:yo.source}}};var wo,Io,Po;Q.parameters={...Q.parameters,docs:{...(wo=Q.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' duration={0.4}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Po=(Io=Q.parameters)==null?void 0:Io.docs)==null?void 0:Po.source}}};var Fo,Do,ko;X.parameters={...X.parameters,docs:{...(Fo=X.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant='outline' placeholder='outline' />
      <MultiAutocomplete isDisabled variant='filled' placeholder='filled' />
      <MultiAutocomplete isDisabled variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(ko=(Do=X.parameters)==null?void 0:Do.docs)==null?void 0:ko.source}}};var Vo,xo,qo;Y.parameters={...Y.parameters,docs:{...(Vo=Y.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant='outline' placeholder='outline' />
      <MultiAutocomplete isReadOnly variant='filled' placeholder='filled' />
      <MultiAutocomplete isReadOnly variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(qo=(xo=Y.parameters)==null?void 0:xo.docs)==null?void 0:qo.source}}};var Wo,To,Go;Z.parameters={...Z.parameters,docs:{...(Wo=Z.parameters)==null?void 0:Wo.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant='outline' placeholder='outline' />
      <MultiAutocomplete isInvalid variant='filled' placeholder='filled' />
      <MultiAutocomplete isInvalid variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(Go=(To=Z.parameters)==null?void 0:To.docs)==null?void 0:Go.source}}};var Bo,zo,Ro;$.parameters={...$.parameters,docs:{...(Bo=$.parameters)==null?void 0:Bo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ro=(zo=$.parameters)==null?void 0:zo.docs)==null?void 0:Ro.source}}};var Eo,Ho,_o;ee.parameters={...ee.parameters,docs:{...(Eo=ee.parameters)==null?void 0:Eo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(_o=(Ho=ee.parameters)==null?void 0:Ho.docs)==null?void 0:_o.source}}};var Uo,jo,No;oe.parameters={...oe.parameters,docs:{...(Uo=oe.parameters)==null?void 0:Uo.docs,source:{originalSource:`() => {
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
}`,...(No=(jo=oe.parameters)==null?void 0:jo.docs)==null?void 0:No.source}}};var Ko,Lo,Jo;le.parameters={...le.parameters,docs:{...(Ko=le.parameters)==null?void 0:Ko.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder='キャラクターを選択' clearIconProps={{
    children: <Icon icon={faTrash} w='0.5em' />
  }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Jo=(Lo=le.parameters)==null?void 0:Lo.docs)==null?void 0:Jo.source}}};var Qo,Xo,Yo;te.parameters={...te.parameters,docs:{...(Qo=te.parameters)==null?void 0:Qo.docs,source:{originalSource:`() => {
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
}`,...(Yo=(Xo=te.parameters)==null?void 0:Xo.docs)==null?void 0:Yo.source}}};var Zo,$o,el;ne.parameters={...ne.parameters,docs:{...(Zo=ne.parameters)==null?void 0:Zo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(['孫悟空']);
  return <MultiAutocomplete placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(el=($o=ne.parameters)==null?void 0:$o.docs)==null?void 0:el.source}}};var ol,ll,tl;re.parameters={...re.parameters,docs:{...(ol=re.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
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
}`,...(tl=(ll=re.parameters)==null?void 0:ll.docs)==null?void 0:tl.source}}};var nl,rl,al;ae.parameters={...ae.parameters,docs:{...(nl=ae.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
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
}`,...(al=(rl=ae.parameters)==null?void 0:rl.docs)==null?void 0:al.source}}};const gt=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withCreateOption","withCreateOrder","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{gt as __namedExportsOrder,k as basic,le as customClearIcon,ne as customControl,oe as customIcon,te as customOption,ft as default,N as disabledCloseOnBlur,j as disabledIsClearable,X as isDisabled,Z as isInvalid,$ as isOptionDisabled,ee as isOptionFocusable,Y as isReadonly,re as reactHookForm,ae as reactHookFormWithDefaultValue,B as withBorderColor,U as withCloseOnSelect,E as withComponent,T as withCreateOption,G as withCreateOrder,q as withDefaultValue,Q as withDuration,W as withEmptyMessage,J as withGutter,R as withKeepPlaceholder,_ as withMaxSelectedValues,L as withOffset,H as withOmitSelectedValues,K as withPlacement,z as withSeparator,V as withSize,x as withVariant};
//# sourceMappingURL=multi-autocomplete.stories-64a4e919.js.map
