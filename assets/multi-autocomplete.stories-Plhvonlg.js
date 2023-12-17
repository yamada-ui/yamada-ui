import{j as e,a as o,F as m}from"./jsx-runtime-TtYKBvr-.js";import{I as Be,m as fl,o as gl,d as Ml}from"./fontawesome-icon-ZfuIL68e.js";import{r as Fe}from"./index-IybTgENJ.js";import{u as ml,C as D}from"./index.esm-PVkfQNar.js";import{u as Sl,A as wl,a as yl,j as Il,b as Pl,c as Ce,d as Ee,e as Oe,f as xl,g as kl,h as u,i as A}from"./autocomplete-empty-OeVYHp8y.js";import{P as Vl,a as ql}from"./popover-content-1drctxix.js";import{P as De}from"./container-portal-C0JWommc.js";import{f as Al}from"./forward-ref-6T0UNPU-.js";import{u as Wl}from"./use-component-style-5-ma296Y.js";import{o as Tl}from"./theme-provider-Wsw433nP.js";import{u as g,a as dl,h as Gl}from"./factory-yYnGGCem.js";import{T as be}from"./tag-C9aVazvQ.js";import{F as h}from"./form-control-FwzeaZdC.js";import{V as Fl}from"./stack-XX7xMkh4.js";import{B as Bl}from"./button-vw3_AT4f.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-h0N_MwdT.js";import"./index-dINoAjpC.js";import"./index-BC_upSQQ.js";import"./index-JdnEfjmQ.js";import"./index-yP8_fdVn.js";import"./index-_RLnS977.js";import"./index-ag0y40X6.js";import"./index-FtaGmSpW.js";import"./index-gWY0u-sb.js";import"./index-zXlpxDMh.js";import"./index-Is9g8YY1.js";import"./index-iBp7F3Ts.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";import"./motion-AgWUVtfu.js";import"./slide-fade-Iw_C_82k.js";import"./index-GPdqE8CR.js";import"./utils-poULCIrV.js";import"./scale-fade-r8VwcKyL.js";import"./close-button-Nk1l7Q8c.js";import"./use-ripple-oUvMmrsO.js";import"./motion-ONtTX0Ck.js";import"./index-xIHD0DlW.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./loading-JdMW4dxy.js";const l=Al((t,n)=>{const[r,E]=Wl("MultiAutocomplete",t);let{className:p,defaultValue:s=[],component:v,separator:d,isClearable:F=!0,color:i,h:c,height:a,minH:M,minHeight:S,closeOnSelect:b=!1,keepPlaceholder:f=!1,containerProps:ce,listProps:w,inputProps:pe,iconProps:se,clearIconProps:C,portalProps:B={isDisabled:!1},children:O,...y}=Tl(E);const{value:I,descendants:me,formControlProps:Ae,getPopoverProps:hl,getContainerProps:vl,getFieldProps:Cl,allowCreate:de,isEmpty:he,inputValue:ve,computedChildren:El,onClear:Ol,...Dl}=Sl({...y,defaultValue:s,closeOnSelect:b,children:O});c??(c=a),M??(M=S);const bl={w:"100%",h:"fit-content",color:i,...r.container};return e(wl,{value:me,children:e(yl,{value:{...Dl,value:I,formControlProps:Ae,inputValue:ve,allowCreate:de,isEmpty:he,styles:r},children:e(Vl,{...hl(),children:o(g.div,{className:dl("ui-multi-autocomplete",p),__css:bl,...vl(ce),children:[o(g.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...r.inner},children:[e(zl,{component:v,separator:d,keepPlaceholder:f,h:c,minH:M,inputProps:pe,...Cl({},n)}),F&&I.length?e(Il,{...C,onClick:Gl(C==null?void 0:C.onClick,Ol),...Ae}):e(Pl,{...se,...Ae})]}),he?e(De,{...B,children:e(Ce,{...w,children:de&&ve?e(Ee,{}):e(Oe,{})})}):e(De,{...B,children:o(Ce,{...w,children:[de?e(Ee,{}):e(Oe,{}),O??El]})})]})})})})}),zl=Al(({className:t,component:n,separator:r=",",keepPlaceholder:E,h:p,minH:s,placeholder:v,inputProps:d,...F},i)=>{const{value:c,label:a,inputValue:M,onChange:S,isOpen:b,inputRef:f,styles:ce}=xl(),{getInputProps:w}=kl(),pe=Fe.useMemo(()=>a!=null&&a.length?n?a.map((C,B)=>{const O=me=>{me.stopPropagation(),S(c[B]),f.current&&f.current.focus()},y=n({value:c[B],label:C,index:B,onRemove:O}),I={cursor:"default",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return y?Fe.cloneElement(y,{style:I}):null}):a.map((C,B)=>{const O=a.length===B+1;return o(g.span,{display:"inline-block",me:"0.25rem",children:[C,!O||b?r:null]},B)}):null,[a,n,c,S,b,f,r]),se={paddingEnd:"2rem",h:p,minH:s,display:"flex",flexWrap:"wrap",alignItems:"center",...ce.field,cursor:"text"};return e(ql,{children:o(g.div,{className:dl("ui-multi-autocomplete__field",t),__css:se,py:a!=null&&a.length&&n?"0.125rem":void 0,...F,children:[pe,e(g.input,{className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",placeholder:!a||!(a!=null&&a.length)||E&&b?v:void 0,...w({...d,value:M??""},i)})]})})}),yo={title:"Components / Forms / MultiAutocomplete",component:l},P=()=>o(m,{children:[o(l,{placeholder:"キャラクターを選択",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),o(l,{placeholder:"キャラクターを選択",children:[o(A,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),o(A,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),x=()=>o(m,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),k=()=>o(m,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),V=()=>o(l,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),q=()=>o(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),W=()=>e(l,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],allowCreate:!0,onCreate:(n,r)=>console.log("created item",n,"new items",r)}),T=()=>e(l,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],allowFree:!0,onChange:n=>console.log("new values",n)}),G=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return o(m,{children:[e(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"first"}),e(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"last"}),e(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"地球人"}),e(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},z=()=>o(m,{children:[o(l,{placeholder:"default border color",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),o(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),o(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),R=()=>o(l,{placeholder:"キャラクターを選択",separator:";",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),_=()=>o(l,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),H=()=>o(m,{children:[o(l,{placeholder:"キャラクターを選択",component:({label:t})=>e(be,{children:t}),children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),o(l,{placeholder:"キャラクターを選択",component:({label:t,onRemove:n})=>e(be,{onClose:n,children:t}),children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),N=()=>o(l,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[o(A,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),o(A,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]}),j=()=>o(l,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[o(A,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),o(A,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]}),K=()=>o(l,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),L=()=>o(l,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),J=()=>o(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>o(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),U=()=>o(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),X=()=>o(l,{placeholder:"キャラクターを選択",gutter:32,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>o(l,{placeholder:"キャラクターを選択",duration:.4,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>o(m,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),$=()=>o(m,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),ee=()=>o(m,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Autocomplete notifications"})})]}),ue=()=>o(l,{placeholder:"キャラクターを選択",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),le=()=>o(l,{placeholder:"キャラクターを選択",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>o(m,{children:[o(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),o(l,{placeholder:"キャラクターを選択",iconProps:{children:e(Be,{icon:fl})},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),te=()=>o(l,{placeholder:"キャラクターを選択",clearIconProps:{children:e(Be,{icon:gl,w:"0.5em"})},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),ne=()=>o(m,{children:[o(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),o(l,{placeholder:"キャラクターを選択",optionProps:{icon:e(Be,{icon:Ml,color:"green.500"})},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),ae=()=>{const[t,n]=Fe.useState(["孫悟空"]);return o(l,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})},re=()=>{var v,d,F;const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:n,handleSubmit:r,watch:E,formState:{errors:p}}=ml(),s=i=>console.log("submit:",i);return console.log("watch:",E()),o(Fl,{as:"form",onSubmit:r(s),children:[e(h,{isInvalid:!!p.autocomplete1,label:"Who is your favorite character?",errorMessage:(v=p.autocomplete1)==null?void 0:v.message,children:e(D,{name:"autocomplete1",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>o(l,{placeholder:"キャラクターを選択",...i,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})})}),e(h,{isInvalid:!!p.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=p.autocomplete2)==null?void 0:d.message,children:e(D,{name:"autocomplete2",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>o(l,{placeholder:"キャラクターを選択",...i,children:[o(A,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),o(A,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]})})}),e(h,{isInvalid:!!p.autocomplete3,label:"Who is your favorite character?",errorMessage:(F=p.autocomplete3)==null?void 0:F.message,children:e(D,{name:"autocomplete3",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e(l,{placeholder:"キャラクターを選択",...i,items:t})})}),e(Bl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ie=()=>{var d,F,i;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:E,watch:p,formState:{errors:s}}=ml({defaultValues:t}),v=c=>console.log("submit:",c);return console.log("watch:",p()),o(Fl,{as:"form",onSubmit:E(v),children:[e(h,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(d=s.autocomplete1)==null?void 0:d.message,children:e(D,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>o(l,{placeholder:"キャラクターを選択",...c,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})})}),e(h,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(F=s.autocomplete2)==null?void 0:F.message,children:e(D,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>o(l,{placeholder:"キャラクターを選択",...c,children:[o(A,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),o(A,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]})})}),e(h,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(i=s.autocomplete3)==null?void 0:i.message,children:e(D,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>e(l,{placeholder:"キャラクターを選択",...c,items:n})})}),e(Bl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,ge,Me;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Me=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:Me.source}}};var Se,we,ye;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(ye=(we=x.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ie,Pe,xe;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(xe=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:xe.source}}};var ke,Ve,qe;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(qe=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var We,Te,Ge;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ge=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Ge.source}}};var ze,Re,_e;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(_e=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var He,Ne,je;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(je=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Ke,Le,Je;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Je=(Le=G.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;z.parameters={...z.parameters,docs:{...(Qe=z.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;R.parameters={...R.parameters,docs:{...(Ye=R.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($e=(Ze=R.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var eu,uu,lu;_.parameters={..._.parameters,docs:{...(eu=_.parameters)==null?void 0:eu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(lu=(uu=_.parameters)==null?void 0:uu.docs)==null?void 0:lu.source}}};var ou,tu,nu;H.parameters={...H.parameters,docs:{...(ou=H.parameters)==null?void 0:ou.docs,source:{originalSource:`() => {
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
}`,...(nu=(tu=H.parameters)==null?void 0:tu.docs)==null?void 0:nu.source}}};var au,ru,iu;N.parameters={...N.parameters,docs:{...(au=N.parameters)==null?void 0:au.docs,source:{originalSource:`() => {
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
}`,...(iu=(ru=N.parameters)==null?void 0:ru.docs)==null?void 0:iu.source}}};var cu,pu,su;j.parameters={...j.parameters,docs:{...(cu=j.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
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
}`,...(su=(pu=j.parameters)==null?void 0:pu.docs)==null?void 0:su.source}}};var mu,Au,du;K.parameters={...K.parameters,docs:{...(mu=K.parameters)==null?void 0:mu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(du=(Au=K.parameters)==null?void 0:Au.docs)==null?void 0:du.source}}};var Fu,Bu,hu;L.parameters={...L.parameters,docs:{...(Fu=L.parameters)==null?void 0:Fu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(hu=(Bu=L.parameters)==null?void 0:Bu.docs)==null?void 0:hu.source}}};var vu,Cu,Eu;J.parameters={...J.parameters,docs:{...(vu=J.parameters)==null?void 0:vu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Eu=(Cu=J.parameters)==null?void 0:Cu.docs)==null?void 0:Eu.source}}};var Ou,Du,bu;Q.parameters={...Q.parameters,docs:{...(Ou=Q.parameters)==null?void 0:Ou.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(bu=(Du=Q.parameters)==null?void 0:Du.docs)==null?void 0:bu.source}}};var fu,gu,Mu;U.parameters={...U.parameters,docs:{...(fu=U.parameters)==null?void 0:fu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Mu=(gu=U.parameters)==null?void 0:gu.docs)==null?void 0:Mu.source}}};var Su,wu,yu;X.parameters={...X.parameters,docs:{...(Su=X.parameters)==null?void 0:Su.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(yu=(wu=X.parameters)==null?void 0:wu.docs)==null?void 0:yu.source}}};var Iu,Pu,xu;Y.parameters={...Y.parameters,docs:{...(Iu=Y.parameters)==null?void 0:Iu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(xu=(Pu=Y.parameters)==null?void 0:Pu.docs)==null?void 0:xu.source}}};var ku,Vu,qu;Z.parameters={...Z.parameters,docs:{...(ku=Z.parameters)==null?void 0:ku.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(qu=(Vu=Z.parameters)==null?void 0:Vu.docs)==null?void 0:qu.source}}};var Wu,Tu,Gu;$.parameters={...$.parameters,docs:{...(Wu=$.parameters)==null?void 0:Wu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Gu=(Tu=$.parameters)==null?void 0:Tu.docs)==null?void 0:Gu.source}}};var zu,Ru,_u;ee.parameters={...ee.parameters,docs:{...(zu=ee.parameters)==null?void 0:zu.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(_u=(Ru=ee.parameters)==null?void 0:Ru.docs)==null?void 0:_u.source}}};var Hu,Nu,ju;ue.parameters={...ue.parameters,docs:{...(Hu=ue.parameters)==null?void 0:Hu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ju=(Nu=ue.parameters)==null?void 0:Nu.docs)==null?void 0:ju.source}}};var Ku,Lu,Ju;le.parameters={...le.parameters,docs:{...(Ku=le.parameters)==null?void 0:Ku.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ju=(Lu=le.parameters)==null?void 0:Lu.docs)==null?void 0:Ju.source}}};var Qu,Uu,Xu;oe.parameters={...oe.parameters,docs:{...(Qu=oe.parameters)==null?void 0:Qu.docs,source:{originalSource:`() => {
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
}`,...(Xu=(Uu=oe.parameters)==null?void 0:Uu.docs)==null?void 0:Xu.source}}};var Yu,Zu,$u;te.parameters={...te.parameters,docs:{...(Yu=te.parameters)==null?void 0:Yu.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Icon icon={faTrash} w="0.5em" />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($u=(Zu=te.parameters)==null?void 0:Zu.docs)==null?void 0:$u.source}}};var el,ul,ll;ne.parameters={...ne.parameters,docs:{...(el=ne.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
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
}`,...(ll=(ul=ne.parameters)==null?void 0:ul.docs)==null?void 0:ll.source}}};var ol,tl,nl;ae.parameters={...ae.parameters,docs:{...(ol=ae.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(nl=(tl=ae.parameters)==null?void 0:tl.docs)==null?void 0:nl.source}}};var al,rl,il;re.parameters={...re.parameters,docs:{...(al=re.parameters)==null?void 0:al.docs,source:{originalSource:`() => {
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
}`,...(il=(rl=re.parameters)==null?void 0:rl.docs)==null?void 0:il.source}}};var cl,pl,sl;ie.parameters={...ie.parameters,docs:{...(cl=ie.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
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
}`,...(sl=(pl=ie.parameters)==null?void 0:pl.docs)==null?void 0:sl.source}}};const Io=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Io as __namedExportsOrder,P as basic,te as customClearIcon,ae as customControl,oe as customIcon,ne as customOption,yo as default,J as disabledCloseOnBlur,L as disabledIsClearable,Z as isDisabled,ee as isInvalid,ue as isOptionDisabled,le as isOptionFocusable,$ as isReadonly,re as reactHookForm,ie as reactHookFormWithDefaultValue,W as withAllowCreate,T as withAllowFree,z as withBorderColor,K as withCloseOnSelect,H as withComponent,V as withDefaultValue,Y as withDuration,q as withEmptyMessage,X as withGutter,G as withInsertPositionItem,_ as withKeepPlaceholder,j as withMaxSelectedValues,U as withOffset,N as withOmitSelectedValues,Q as withPlacement,R as withSeparator,x as withSize,k as withVariant};
