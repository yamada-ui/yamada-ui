import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as Ae}from"./index-uCp2LrAq.js";import{u as sl,C as E}from"./index.esm-TLwx9zN6.js";import{u as Ol,A as xl,a as Dl,j as jl,b as bl,c as Be,d as he,e as ve,f as gl,g as fl,h as u,i as m}from"./autocomplete-empty-CKqyzXnu.js";import{P as Ml,a as Sl}from"./popover-content-DdSqGHqW.js";import{P as Ce}from"./container-portal--tud7o6s.js";import{f as cl}from"./forward-ref-Dr5Hqd9a.js";import{a as wl}from"./use-component-style-C1oydc60.js";import{o as yl}from"./theme-provider-CfMKAtcZ.js";import{b as D,c as pl,h as Il}from"./factory-Bf0a1C4O.js";import{T as Pl}from"./trash2-DtosNIyR.js";import{T as Ee}from"./tag-B91XyPzB.js";import{F as d}from"./form-control-CXekA9Vm.js";import{C as kl}from"./chevrons-down-b7xwkvPi.js";import{C as Vl}from"./check-B3YxMGdM.js";import{V as ml}from"./stack-DeQ5YYY4.js";import{B as Al}from"./button-C5HSAH_Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./index-Dc2KQwVC.js";import"./index-Bh6_N6k1.js";import"./index-CYZlXLuv.js";import"./index-3uUm-2Os.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./index-DpNfAtp1.js";import"./index-CBqzus2r.js";import"./index-BPmMvQRx.js";import"./index-DpYz45Vm.js";import"./index-CEbtGM79.js";import"./index-Bz6F23rc.js";import"./motion-BNFRb361.js";import"./slide-fade-DX8q9FlF.js";import"./index-DSHhgXSs.js";import"./motion-Bi86PhT5.js";import"./utils-BQuDdpot.js";import"./scale-fade-C4h3A9D_.js";import"./close-button-B2_55Hm9.js";import"./use-ripple-BZmEDmbU.js";import"./index-CqS9fqXy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./lucide-icon-DchBQEch.js";import"./loading-CD9zg-8p.js";const l=cl((o,t)=>{const[r,v]=wl("MultiAutocomplete",o);let{className:s,defaultValue:c=[],component:B,separator:A,isClearable:F=!0,color:a,h:i,height:n,minH:j,minHeight:b,closeOnSelect:O=!1,keepPlaceholder:x=!1,containerProps:ae,listProps:g,inputProps:ie,iconProps:se,clearIconProps:h,portalProps:p={isDisabled:!0},children:C,...f}=yl(v);const{value:M,descendants:ce,formControlProps:pe,getPopoverProps:Fl,getContainerProps:dl,getFieldProps:Bl,allowCreate:me,isEmpty:Fe,inputValue:de,computedChildren:hl,onClear:vl,...Cl}=Ol({...f,defaultValue:c,closeOnSelect:O,children:C});i??(i=n),j??(j=b);const El={w:"100%",h:"fit-content",color:a,...r.container};return e.jsx(xl,{value:ce,children:e.jsx(Dl,{value:{...Cl,value:M,formControlProps:pe,inputValue:de,allowCreate:me,isEmpty:Fe,styles:r},children:e.jsx(Ml,{...Fl(),children:e.jsxs(D.div,{className:pl("ui-multi-autocomplete",s),__css:El,...dl(ae),children:[e.jsxs(D.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...r.inner},children:[e.jsx(ql,{component:B,separator:A,keepPlaceholder:x,h:i,minH:j,inputProps:ie,...Bl({},t)}),F&&M.length?e.jsx(jl,{...h,onClick:Il(h==null?void 0:h.onClick,vl),...pe}):e.jsx(bl,{...se,...pe})]}),Fe?e.jsx(Ce,{...p,children:e.jsx(Be,{...g,children:me&&de?e.jsx(he,{}):e.jsx(ve,{})})}):e.jsx(Ce,{...p,children:e.jsxs(Be,{...g,children:[me?e.jsx(he,{}):e.jsx(ve,{}),C??hl]})})]})})})})}),ql=cl(({className:o,component:t,separator:r=",",keepPlaceholder:v,h:s,minH:c,placeholder:B,inputProps:A,...F},a)=>{const{value:i,label:n,inputValue:j,onChange:b,isOpen:O,inputRef:x,styles:ae}=gl(),{getInputProps:g}=fl(),ie=Ae.useMemo(()=>n!=null&&n.length?t?n.map((h,p)=>{const C=ce=>{ce.stopPropagation(),b(i[p]),x.current&&x.current.focus()},f=t({value:i[p],label:h,index:p,onRemove:C}),M={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return f?Ae.cloneElement(f,{key:p,style:M}):null}):n.map((h,p)=>{const C=n.length===p+1;return e.jsxs(D.span,{display:"inline-block",me:"0.25rem",children:[h,!C||O?r:null]},p)}):null,[n,t,i,b,O,x,r]),se={pe:"2rem",h:s,minH:c,display:"flex",flexWrap:"wrap",alignItems:"center",...ae.field,cursor:"text"};return e.jsx(Sl,{children:e.jsxs(D.div,{className:pl("ui-multi-autocomplete__field",o),__css:se,py:n!=null&&n.length&&t?"0.125rem":void 0,...F,children:[ie,e.jsx(D.input,{"aria-label":"Input value",className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",placeholder:!n||!(n!=null&&n.length)||v&&O?B:void 0,...g({...A,value:j??""},a)})]})})}),Mo={title:"Components / Forms / MultiAutocomplete",component:l},S=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]}),e.jsx(l,{placeholder:"キャラクターを選択",items:o})]})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"extra small size",size:"xs"}),e.jsx(l,{placeholder:"small size",size:"sm"}),e.jsx(l,{placeholder:"medium size",size:"md"}),e.jsx(l,{placeholder:"large size",size:"lg"})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outline",placeholder:"outline"}),e.jsx(l,{variant:"filled",placeholder:"filled"}),e.jsx(l,{variant:"flushed",placeholder:"flushed"}),e.jsx(l,{variant:"unstyled",placeholder:"unstyled"})]}),I=()=>e.jsxs(l,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),P=()=>e.jsxs(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),k=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,onCreate:(t,r)=>console.log("created item",t,"new items",r)})},V=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowFree:!0,onChange:t=>console.log("new values",t)})},q=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:"first"}),e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:"last"}),e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(l,{placeholder:"キャラクターを選択",items:o,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"default border color",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),W=()=>e.jsxs(l,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(l,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",component:({label:o})=>e.jsx(Ee,{children:o}),children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",component:({label:o,onRemove:t})=>e.jsx(Ee,{onClose:t,children:o}),children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),R=()=>e.jsxs(l,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]}),_=()=>e.jsxs(l,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]}),H=()=>e.jsxs(l,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(l,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(l,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(l,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),$=()=>e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(kl,{})},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),le=()=>e.jsxs(l,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Pl,{})},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Vl,{color:"green.500"})},children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})]}),te=()=>{const[o,t]=Ae.useState(["孫悟空"]);return e.jsxs(l,{placeholder:"キャラクターを選択",value:o,onChange:t,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})},ne=()=>{var B,A,F;const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:t,handleSubmit:r,watch:v,formState:{errors:s}}=sl(),c=a=>console.log("submit:",a);return console.log("watch:",v()),e.jsxs(ml,{as:"form",onSubmit:r(c),children:[e.jsx(d,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(B=s.autocomplete1)==null?void 0:B.message,children:e.jsx(E,{name:"autocomplete1",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e.jsxs(l,{placeholder:"キャラクターを選択",...a,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(d,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(A=s.autocomplete2)==null?void 0:A.message,children:e.jsx(E,{name:"autocomplete2",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e.jsxs(l,{placeholder:"キャラクターを選択",...a,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(d,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(F=s.autocomplete3)==null?void 0:F.message,children:e.jsx(E,{name:"autocomplete3",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e.jsx(l,{placeholder:"キャラクターを選択",...a,items:o})})}),e.jsx(Al,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},re=()=>{var A,F,a;const o={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:v,watch:s,formState:{errors:c}}=sl({defaultValues:o}),B=i=>console.log("submit:",i);return console.log("watch:",s()),e.jsxs(ml,{as:"form",onSubmit:v(B),children:[e.jsx(d,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(A=c.autocomplete1)==null?void 0:A.message,children:e.jsx(E,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(l,{placeholder:"キャラクターを選択",...i,children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"ベジータ",children:"ベジータ"}),e.jsx(u,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(d,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(F=c.autocomplete2)==null?void 0:F.message,children:e.jsx(E,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(l,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(u,{value:"孫悟空",children:"孫悟空"}),e.jsx(u,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(u,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(u,{value:"フリーザ",children:"フリーザ"}),e.jsx(u,{value:"ギニュー",children:"ギニュー"}),e.jsx(u,{value:"リクーム",children:"リクーム"}),e.jsx(u,{value:"バータ",children:"バータ"}),e.jsx(u,{value:"ジース",children:"ジース"}),e.jsx(u,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(d,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(a=c.autocomplete3)==null?void 0:a.message,children:e.jsx(E,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(l,{placeholder:"キャラクターを選択",...i,items:t})})}),e.jsx(Al,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Oe,xe,De;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(De=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var je,be,ge;w.parameters={...w.parameters,docs:{...(je=w.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(ge=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,Me,Se;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Se=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};var we,ye,Ie;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ie=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Pe,ke,Ve;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ve=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var qe,Te,We;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(We=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ge,ze,Re;V.parameters={...V.parameters,docs:{...(Ge=V.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Re=(ze=V.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var _e,He,Ne;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Ke,Le,Je;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Je=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Xe=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;G.parameters={...G.parameters,docs:{...(Ye=G.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($e=(Ze=G.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var eu,uu,lu;z.parameters={...z.parameters,docs:{...(eu=z.parameters)==null?void 0:eu.docs,source:{originalSource:`() => {
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
}`,...(lu=(uu=z.parameters)==null?void 0:uu.docs)==null?void 0:lu.source}}};var ou,tu,nu;R.parameters={...R.parameters,docs:{...(ou=R.parameters)==null?void 0:ou.docs,source:{originalSource:`() => {
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
}`,...(nu=(tu=R.parameters)==null?void 0:tu.docs)==null?void 0:nu.source}}};var ru,au,iu;_.parameters={..._.parameters,docs:{...(ru=_.parameters)==null?void 0:ru.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" maxSelectValues={3}>
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
}`,...(iu=(au=_.parameters)==null?void 0:au.docs)==null?void 0:iu.source}}};var su,cu,pu;H.parameters={...H.parameters,docs:{...(su=H.parameters)==null?void 0:su.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(pu=(cu=H.parameters)==null?void 0:cu.docs)==null?void 0:pu.source}}};var mu,Au,Fu;N.parameters={...N.parameters,docs:{...(mu=N.parameters)==null?void 0:mu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Fu=(Au=N.parameters)==null?void 0:Au.docs)==null?void 0:Fu.source}}};var du,Bu,hu;K.parameters={...K.parameters,docs:{...(du=K.parameters)==null?void 0:du.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(hu=(Bu=K.parameters)==null?void 0:Bu.docs)==null?void 0:hu.source}}};var vu,Cu,Eu;L.parameters={...L.parameters,docs:{...(vu=L.parameters)==null?void 0:vu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Eu=(Cu=L.parameters)==null?void 0:Cu.docs)==null?void 0:Eu.source}}};var Ou,xu,Du;J.parameters={...J.parameters,docs:{...(Ou=J.parameters)==null?void 0:Ou.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Du=(xu=J.parameters)==null?void 0:xu.docs)==null?void 0:Du.source}}};var ju,bu,gu;Q.parameters={...Q.parameters,docs:{...(ju=Q.parameters)==null?void 0:ju.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(gu=(bu=Q.parameters)==null?void 0:bu.docs)==null?void 0:gu.source}}};var fu,Mu,Su;U.parameters={...U.parameters,docs:{...(fu=U.parameters)==null?void 0:fu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Su=(Mu=U.parameters)==null?void 0:Mu.docs)==null?void 0:Su.source}}};var wu,yu,Iu;X.parameters={...X.parameters,docs:{...(wu=X.parameters)==null?void 0:wu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Iu=(yu=X.parameters)==null?void 0:yu.docs)==null?void 0:Iu.source}}};var Pu,ku,Vu;Y.parameters={...Y.parameters,docs:{...(Pu=Y.parameters)==null?void 0:Pu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Vu=(ku=Y.parameters)==null?void 0:ku.docs)==null?void 0:Vu.source}}};var qu,Tu,Wu;Z.parameters={...Z.parameters,docs:{...(qu=Z.parameters)==null?void 0:qu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Wu=(Tu=Z.parameters)==null?void 0:Tu.docs)==null?void 0:Wu.source}}};var Gu,zu,Ru;$.parameters={...$.parameters,docs:{...(Gu=$.parameters)==null?void 0:Gu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ru=(zu=$.parameters)==null?void 0:zu.docs)==null?void 0:Ru.source}}};var _u,Hu,Nu;ee.parameters={...ee.parameters,docs:{...(_u=ee.parameters)==null?void 0:_u.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Nu=(Hu=ee.parameters)==null?void 0:Hu.docs)==null?void 0:Nu.source}}};var Ku,Lu,Ju;ue.parameters={...ue.parameters,docs:{...(Ku=ue.parameters)==null?void 0:Ku.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      children: <ChevronsDown />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(Ju=(Lu=ue.parameters)==null?void 0:Lu.docs)==null?void 0:Ju.source}}};var Qu,Uu,Xu;le.parameters={...le.parameters,docs:{...(Qu=le.parameters)==null?void 0:Qu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Xu=(Uu=le.parameters)==null?void 0:Uu.docs)==null?void 0:Xu.source}}};var Yu,Zu,$u;oe.parameters={...oe.parameters,docs:{...(Yu=oe.parameters)==null?void 0:Yu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      icon: <Check color="green.500" />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...($u=(Zu=oe.parameters)==null?void 0:Zu.docs)==null?void 0:$u.source}}};var el,ul,ll;te.parameters={...te.parameters,docs:{...(el=te.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ll=(ul=te.parameters)==null?void 0:ul.docs)==null?void 0:ll.source}}};var ol,tl,nl;ne.parameters={...ne.parameters,docs:{...(ol=ne.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
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
}`,...(nl=(tl=ne.parameters)==null?void 0:tl.docs)==null?void 0:nl.source}}};var rl,al,il;re.parameters={...re.parameters,docs:{...(rl=re.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
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
}`,...(il=(al=re.parameters)==null?void 0:al.docs)==null?void 0:il.source}}};const So=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{So as __namedExportsOrder,S as basic,le as customClearIcon,te as customControl,ue as customIcon,oe as customOption,Mo as default,K as disabledCloseOnBlur,N as disabledIsClearable,X as isDisabled,Z as isInvalid,$ as isOptionDisabled,ee as isOptionFocusable,Y as isReadonly,ne as reactHookForm,re as reactHookFormWithDefaultValue,k as withAllowCreate,V as withAllowFree,T as withBorderColor,H as withCloseOnSelect,z as withComponent,I as withDefaultValue,U as withDuration,P as withEmptyMessage,Q as withGutter,q as withInsertPositionItem,G as withKeepPlaceholder,_ as withMaxSelectValues,J as withOffset,R as withOmitSelectedValues,L as withPlacement,W as withSeparator,w as withSize,y as withVariant};
