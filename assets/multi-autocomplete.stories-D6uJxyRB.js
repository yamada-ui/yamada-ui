import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as de}from"./index-BwDkhjyp.js";import{u as co,C as j}from"./index.esm-CnEPCCvu.js";import{u as Co,A as So,a as wo,j as yo,b as Io,c as Oe,d as xe,e as be,f as Po,g as Fo,h as l,i as m}from"./autocomplete-empty-DlNfo2gF.js";import{P as Do,a as ko}from"./popover-content-CMxl5HlT.js";import{P as je}from"./container-portal-D_8J7oaj.js";import{f as po}from"./forward-ref-BmTAT9U5.js";import{a as Vo}from"./use-component-style-DuIjxI-P.js";import{o as qo}from"./theme-provider-CgekAyNK.js";import{b as C,c as mo,h as To}from"./factory-BXeT7qA-.js";import{T as Wo}from"./trash2-Cj0259_B.js";import{T as ge}from"./tag-C4aenYfU.js";import{F as v}from"./form-control-EHuqAfFr.js";import{C as Go}from"./chevrons-down-MGkCws0Q.js";import{C as Bo}from"./check-BELk2Imc.js";import{V as ho}from"./stack-Bq97WU2M.js";import{B as vo}from"./button-BZeThE85.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CP_iHTUG.js";import"./index-XSAGmtry.js";import"./index-Irie4EHF.js";import"./index-DBCDrfEK.js";import"./index-xf8c1cao.js";import"./index-D5OdYTIO.js";import"./icon-BjkWeIz-.js";import"./index-jt6EZpVS.js";import"./index-BzaPwyBI.js";import"./index-Du0-7Fls.js";import"./index-XokATsxS.js";import"./index-BlhoFCHi.js";import"./index-DAakVdNs.js";import"./index-NwhEIk3k.js";import"./motion-B3m9R3Ab.js";import"./slide-fade-CFnUMHWC.js";import"./index-DFuW1CVx.js";import"./motion-DnMpPmZx.js";import"./utils-DYgquvih.js";import"./scale-fade-BUQ8hiDZ.js";import"./close-button-Dts3z-TI.js";import"./use-ripple-CX-fFskN.js";import"./index-DxjWwZXO.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-CxAhBQ0K.js";import"./loading-DCdc0AhN.js";const o=po((t,n)=>{const[a,x]=Vo("MultiAutocomplete",t);let{className:s,defaultValue:c=[],component:A,separator:d,isClearable:h=!0,color:u,h:i,height:r,minH:S,minHeight:w,closeOnSelect:g=!1,keepPlaceholder:f=!1,containerProps:ue,listProps:y,inputProps:ie,iconProps:se,clearIconProps:O,portalProps:p={isDisabled:!0},createProps:b,emptyProps:M,children:I,...ce}=qo(x);const{value:he,descendants:Ao,formControlProps:pe,getPopoverProps:Oo,getContainerProps:xo,getFieldProps:bo,allowCreate:me,isEmpty:ve,inputValue:Ae,computedChildren:jo,onClear:go,...fo}=Co({...ce,defaultValue:c,closeOnSelect:g,children:I});i??(i=r),S??(S=w);const Mo={w:"100%",h:"fit-content",color:u,...a.container};return e.jsx(So,{value:Ao,children:e.jsx(wo,{value:{...fo,value:he,formControlProps:pe,inputValue:Ae,allowCreate:me,isEmpty:ve,styles:a},children:e.jsx(Do,{...Oo(),children:e.jsxs(C.div,{className:mo("ui-multi-autocomplete",s),__css:Mo,...xo(ue),children:[e.jsxs(C.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(zo,{component:A,separator:d,keepPlaceholder:f,h:i,minH:S,inputProps:ie,...bo({},n)}),h&&he.length?e.jsx(yo,{...O,onClick:To(O==null?void 0:O.onClick,go),...pe}):e.jsx(Io,{...se,...pe})]}),ve?e.jsx(je,{...p,children:e.jsx(Oe,{...y,children:me&&Ae?e.jsx(xe,{...b}):e.jsx(be,{...M})})}):e.jsx(je,{...p,children:e.jsxs(Oe,{...y,children:[me?e.jsx(xe,{...b}):e.jsx(be,{...M}),I??jo]})})]})})})})}),zo=po(({className:t,component:n,separator:a=",",keepPlaceholder:x,h:s,minH:c,placeholder:A,inputProps:d,...h},u)=>{const{value:i,label:r,inputValue:S,onChange:w,isOpen:g,inputRef:f,styles:ue}=Po(),{getInputProps:y}=Fo(),ie=de.useMemo(()=>r!=null&&r.length?n?r.map((O,p)=>{const b=ce=>{ce.stopPropagation(),w(i[p]),f.current&&f.current.focus()},M=n({value:i[p],label:O,index:p,onRemove:b}),I={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return M?de.cloneElement(M,{key:p,style:I}):null}):r.map((O,p)=>{const b=r.length===p+1;return e.jsxs(C.span,{display:"inline-block",me:"0.25rem",children:[O,!b||g?a:null]},p)}):null,[r,n,i,w,g,f,a]),se={pe:"2rem",h:s,minH:c,display:"flex",flexWrap:"wrap",alignItems:"center",...ue.field,cursor:"text"};return e.jsx(ko,{children:e.jsxs(C.div,{className:mo("ui-multi-autocomplete__field",t),__css:se,py:r!=null&&r.length&&n?"0.125rem":void 0,...h,children:[ie,e.jsx(C.input,{"aria-label":"Input value",className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem","aria-multiselectable":"true",placeholder:!r||!(r!=null&&r.length)||x&&g?A:void 0,...y({...d,value:S??""},u)})]})})}),Ft={title:"Components / Forms / MultiAutocomplete",component:o},P=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{placeholder:"キャラクターを選択",items:t})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"extra small size",size:"xs"}),e.jsx(o,{placeholder:"small size",size:"sm"}),e.jsx(o,{placeholder:"medium size",size:"md"}),e.jsx(o,{placeholder:"large size",size:"lg"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>e.jsxs(o,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),V=()=>e.jsxs(o,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),q=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,onCreate:(n,a)=>console.log("created item",n,"new items",a)})},T=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowFree:!0,onChange:n=>console.log("new values",n)})},W=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"first"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"last"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},G=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),B=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",component:({label:t})=>e.jsx(ge,{children:t}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",component:({label:t,onRemove:n})=>e.jsx(ge,{onClose:n,children:t}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),_=()=>e.jsxs(o,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),E=()=>e.jsxs(o,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),H=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(o,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(o,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(o,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(o,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(o,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(v,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(v,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(v,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),$=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),le=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Go,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),oe=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Wo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Bo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ne=()=>{const[t,n]=de.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},re=()=>{var A,d,h;const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:n,handleSubmit:a,watch:x,formState:{errors:s}}=co(),c=u=>console.log("submit:",u);return console.log("watch:",x()),e.jsxs(ho,{as:"form",onSubmit:a(c),children:[e.jsx(v,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(A=s.autocomplete1)==null?void 0:A.message,children:e.jsx(j,{name:"autocomplete1",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(o,{placeholder:"キャラクターを選択",...u,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(v,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=s.autocomplete2)==null?void 0:d.message,children:e.jsx(j,{name:"autocomplete2",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(o,{placeholder:"キャラクターを選択",...u,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(v,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(h=s.autocomplete3)==null?void 0:h.message,children:e.jsx(j,{name:"autocomplete3",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsx(o,{placeholder:"キャラクターを選択",...u,items:t})})}),e.jsx(vo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ae=()=>{var d,h,u;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:x,watch:s,formState:{errors:c}}=co({defaultValues:t}),A=i=>console.log("submit:",i);return console.log("watch:",s()),e.jsxs(ho,{as:"form",onSubmit:x(A),children:[e.jsx(v,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(d=c.autocomplete1)==null?void 0:d.message,children:e.jsx(j,{name:"autocomplete1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(v,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(h=c.autocomplete2)==null?void 0:h.message,children:e.jsx(j,{name:"autocomplete2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(v,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(u=c.autocomplete3)==null?void 0:u.message,children:e.jsx(j,{name:"autocomplete3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(o,{placeholder:"キャラクターを選択",...i,items:n})})}),e.jsx(vo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,Me,Ce;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var Se,we,ye;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(ye=(we=F.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ie,Pe,Fe;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Fe=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var De,ke,Ve;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ve=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var qe,Te,We;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(We=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ge,Be,ze;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(ze=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,_e,Ee;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Ee=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var He,Ne,Ke;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Le,Je,Qe;G.parameters={...G.parameters,docs:{...(Le=G.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;B.parameters={...B.parameters,docs:{...(Ue=B.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ye=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,el;z.parameters={...z.parameters,docs:{...(Ze=z.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(el=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:el.source}}};var ll,ol,tl;R.parameters={...R.parameters,docs:{...(ll=R.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
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
}`,...(tl=(ol=R.parameters)==null?void 0:ol.docs)==null?void 0:tl.source}}};var nl,rl,al;_.parameters={..._.parameters,docs:{...(nl=_.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
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
}`,...(al=(rl=_.parameters)==null?void 0:rl.docs)==null?void 0:al.source}}};var ul,il,sl;E.parameters={...E.parameters,docs:{...(ul=E.parameters)==null?void 0:ul.docs,source:{originalSource:`() => {
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
}`,...(sl=(il=E.parameters)==null?void 0:il.docs)==null?void 0:sl.source}}};var cl,pl,ml;H.parameters={...H.parameters,docs:{...(cl=H.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ml=(pl=H.parameters)==null?void 0:pl.docs)==null?void 0:ml.source}}};var dl,hl,vl;N.parameters={...N.parameters,docs:{...(dl=N.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(vl=(hl=N.parameters)==null?void 0:hl.docs)==null?void 0:vl.source}}};var Al,Ol,xl;K.parameters={...K.parameters,docs:{...(Al=K.parameters)==null?void 0:Al.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(xl=(Ol=K.parameters)==null?void 0:Ol.docs)==null?void 0:xl.source}}};var bl,jl,gl;L.parameters={...L.parameters,docs:{...(bl=L.parameters)==null?void 0:bl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(gl=(jl=L.parameters)==null?void 0:jl.docs)==null?void 0:gl.source}}};var fl,Ml,Cl;J.parameters={...J.parameters,docs:{...(fl=J.parameters)==null?void 0:fl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Cl=(Ml=J.parameters)==null?void 0:Ml.docs)==null?void 0:Cl.source}}};var Sl,wl,yl;Q.parameters={...Q.parameters,docs:{...(Sl=Q.parameters)==null?void 0:Sl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(yl=(wl=Q.parameters)==null?void 0:wl.docs)==null?void 0:yl.source}}};var Il,Pl,Fl;U.parameters={...U.parameters,docs:{...(Il=U.parameters)==null?void 0:Il.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Fl=(Pl=U.parameters)==null?void 0:Pl.docs)==null?void 0:Fl.source}}};var Dl,kl,Vl;X.parameters={...X.parameters,docs:{...(Dl=X.parameters)==null?void 0:Dl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Vl=(kl=X.parameters)==null?void 0:kl.docs)==null?void 0:Vl.source}}};var ql,Tl,Wl;Y.parameters={...Y.parameters,docs:{...(ql=Y.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Wl=(Tl=Y.parameters)==null?void 0:Tl.docs)==null?void 0:Wl.source}}};var Gl,Bl,zl;Z.parameters={...Z.parameters,docs:{...(Gl=Z.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(zl=(Bl=Z.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};var Rl,_l,El;$.parameters={...$.parameters,docs:{...(Rl=$.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(El=(_l=$.parameters)==null?void 0:_l.docs)==null?void 0:El.source}}};var Hl,Nl,Kl;ee.parameters={...ee.parameters,docs:{...(Hl=ee.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Kl=(Nl=ee.parameters)==null?void 0:Nl.docs)==null?void 0:Kl.source}}};var Ll,Jl,Ql;le.parameters={...le.parameters,docs:{...(Ll=le.parameters)==null?void 0:Ll.docs,source:{originalSource:`() => {
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
}`,...(Ql=(Jl=le.parameters)==null?void 0:Jl.docs)==null?void 0:Ql.source}}};var Ul,Xl,Yl;oe.parameters={...oe.parameters,docs:{...(Ul=oe.parameters)==null?void 0:Ul.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Yl=(Xl=oe.parameters)==null?void 0:Xl.docs)==null?void 0:Yl.source}}};var Zl,$l,eo;te.parameters={...te.parameters,docs:{...(Zl=te.parameters)==null?void 0:Zl.docs,source:{originalSource:`() => {
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
}`,...(eo=($l=te.parameters)==null?void 0:$l.docs)==null?void 0:eo.source}}};var lo,oo,to;ne.parameters={...ne.parameters,docs:{...(lo=ne.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(to=(oo=ne.parameters)==null?void 0:oo.docs)==null?void 0:to.source}}};var no,ro,ao;re.parameters={...re.parameters,docs:{...(no=re.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
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
}`,...(ao=(ro=re.parameters)==null?void 0:ro.docs)==null?void 0:ao.source}}};var uo,io,so;ae.parameters={...ae.parameters,docs:{...(uo=ae.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
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
}`,...(so=(io=ae.parameters)==null?void 0:io.docs)==null?void 0:so.source}}};const Dt=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Dt as __namedExportsOrder,P as basic,oe as customClearIcon,ne as customControl,le as customIcon,te as customOption,Ft as default,K as disabledCloseOnBlur,N as disabledIsClearable,X as isDisabled,Z as isInvalid,$ as isOptionDisabled,ee as isOptionFocusable,Y as isReadonly,re as reactHookForm,ae as reactHookFormWithDefaultValue,q as withAllowCreate,T as withAllowFree,G as withBorderColor,H as withCloseOnSelect,R as withComponent,k as withDefaultValue,U as withDuration,V as withEmptyMessage,Q as withGutter,W as withInsertPositionItem,z as withKeepPlaceholder,E as withMaxSelectValues,J as withOffset,_ as withOmitSelectedValues,L as withPlacement,B as withSeparator,F as withSize,D as withVariant};
