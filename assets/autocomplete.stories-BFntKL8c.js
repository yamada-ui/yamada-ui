import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as zo}from"./index-BwDkhjyp.js";import{u as To,C as h}from"./index.esm-CMZNHfZV.js";import{u as Zo,A as $o,a as el,b as ol,c as ue,d as ie,e as ce,f as ll,g as tl,h as o,i as A}from"./autocomplete-empty-BOPdhLwQ.js";import{P as nl,a as al}from"./popover-content-BKwFQgy2.js";import{P as pe}from"./container-portal-CAsWo8ZV.js";import{f as _o}from"./forward-ref-BmTAT9U5.js";import{a as rl}from"./use-component-style-D81cq1tY.js";import{o as sl}from"./theme-provider-C2d9AdUa.js";import{b as J,c as Go,B as O}from"./factory-CUXX-tpD.js";import{C as ul}from"./chevrons-down-g7uHnxur.js";import{V as U}from"./stack-D-Hf5Qoa.js";import{B as X}from"./button-2eUQRjXe.js";import{F as d}from"./form-control-MF5Rn_YL.js";import{C as il}from"./check-crmd6NlQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B5TCyniq.js";import"./index-Do1128IA.js";import"./index-CcnKkPwH.js";import"./index-DL-0puEm.js";import"./index-L9vzVe9v.js";import"./index-8UPguuR5.js";import"./icon-AfnI_U7a.js";import"./index-Bg9mmZcs.js";import"./index-h-jaBLlY.js";import"./index-Du0-7Fls.js";import"./index-saVY_WUS.js";import"./index-sUCUwg6n.js";import"./index-Cf9riCBR.js";import"./index-BtGZwc5R.js";import"./motion-C3RdzhNH.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-DeVOIWwT.js";import"./index-Ms_xn5rh.js";import"./utils-BBlhLllt.js";import"./scale-fade-B6OBiK2G.js";import"./close-button-BnfcvOVP.js";import"./use-ripple-CTaDySPp.js";import"./index-DxjWwZXO.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-cTioxylx.js";import"./loading-Cv2t_DkB.js";const l=_o((t,n)=>{const[a,p]=rl("Autocomplete",t);let{className:s,defaultValue:u="",color:v,h:c,height:m,minH:r,minHeight:i,containerProps:K,contentProps:Y,listProps:Z,fieldProps:Ro,inputProps:Ho,iconProps:Eo,portalProps:$={isDisabled:!0},createProps:ee,emptyProps:oe,header:le,footer:te,children:ne,...No}=sl(p);const{value:b,onClose:x,descendants:Lo,formControlProps:ae,getPopoverProps:Jo,getContainerProps:Ko,getFieldProps:Qo,allowCreate:Q,isEmpty:re,inputValue:se,computedChildren:Uo,...Xo}=Zo({...No,defaultValue:u,children:ne});c??(c=m),r??(r=i);const Yo={w:"100%",h:"fit-content",color:v,...a.container};return e.jsx($o,{value:Lo,children:e.jsx(el,{value:{...Xo,value:b,onClose:x,formControlProps:ae,inputValue:se,allowCreate:Q,isEmpty:re,styles:a},children:e.jsx(nl,{...Jo(),children:e.jsxs(J.div,{className:Go("ui-autocomplete",s),__css:Yo,...Ko(K),children:[e.jsxs(J.div,{className:"ui-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(cl,{h:c,minH:r,inputProps:Ho,...Qo(Ro,n)}),e.jsx(ol,{...Eo,...ae})]}),re?e.jsx(pe,{...$,children:e.jsx(ue,{header:O(le,{value:b,onClose:x}),footer:O(te,{value:b,onClose:x}),contentProps:Y,...Z,children:Q&&se?e.jsx(ie,{...ee}):e.jsx(ce,{...oe})})}):e.jsx(pe,{...$,children:e.jsxs(ue,{header:O(le,{value:b,onClose:x}),footer:O(te,{value:b,onClose:x}),contentProps:Y,...Z,children:[Q?e.jsx(ie,{...ee}):e.jsx(ce,{...oe}),ne??Uo]})})]})})})})}),cl=_o(({className:t,h:n,minH:a,placeholder:p,inputProps:s,...u},v)=>{const{label:c,inputValue:m,styles:r}=ll(),{getInputProps:i}=tl(),K={pe:"2rem",h:n,minH:a,display:"flex",alignItems:"center",...r.field,cursor:"text"};return e.jsx(al,{children:e.jsx(J.div,{className:Go("ui-autocomplete__field",t),__css:K,...u,children:e.jsx(J.input,{className:"ui-autocomplete__field__input",display:"inline-block",w:"100%",placeholder:p,...i({...s,value:m||c||""},v)})})})}),$l={title:"Components / Forms / Autocomplete",component:l},j=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsxs(A,{label:"地球人",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(o,{value:"クリリン",children:"クリリン"})]}),e.jsxs(A,{label:"フリーザ軍",children:[e.jsx(o,{value:"フリーザ",children:"フリーザ"}),e.jsx(o,{value:"ギニュー",children:"ギニュー"}),e.jsx(o,{value:"リクーム",children:"リクーム"}),e.jsx(o,{value:"バータ",children:"バータ"}),e.jsx(o,{value:"ジース",children:"ジース"}),e.jsx(o,{value:"グルド",children:"グルド"})]})]}),e.jsx(l,{placeholder:"キャラクターを選択",items:t})]})},f=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"extra small size",size:"xs"}),e.jsx(l,{placeholder:"small size",size:"sm"}),e.jsx(l,{placeholder:"medium size",size:"md"}),e.jsx(l,{placeholder:"large size",size:"lg"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outline",placeholder:"outline"}),e.jsx(l,{variant:"filled",placeholder:"filled"}),e.jsx(l,{variant:"flushed",placeholder:"flushed"}),e.jsx(l,{variant:"unstyled",placeholder:"unstyled"})]}),C=()=>{const[t,n]=zo.useState(void 0),a=[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}];return e.jsx(l,{value:t,onChange:n,placeholder:"キャラクターを選択",footer:({onClose:p})=>e.jsx(U,{borderTopWidth:"1px",borderColor:["blackAlpha.200","whiteAlpha.100"],p:"2",children:e.jsx(X,{onClick:()=>{n("孫悟空"),p()},children:'Set "孫悟空"'})}),items:a})},S=()=>e.jsxs(l,{placeholder:"キャラクターを選択",defaultValue:"ベジータ",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),w=()=>e.jsxs(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),y=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,onCreate:(n,a)=>console.log("created item",n,"new items",a)})},I=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(l,{placeholder:"キャラクターを選択",items:t,allowFree:!0,onChange:n=>console.log("new value:",n)})},F=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"first"}),e.jsx(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"last"}),e.jsx(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(l,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"default border color",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})]}),D=()=>e.jsxs(l,{placeholder:"キャラクターを選択",closeOnSelect:!1,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),q=()=>e.jsxs(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),W=()=>e.jsxs(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),k=()=>e.jsxs(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),V=()=>e.jsxs(l,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),B=()=>e.jsxs(l,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(l,{placeholder:"Autocomplete notifications"})})]}),_=()=>e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(l,{placeholder:"キャラクターを選択",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(ul,{})},children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(l,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(il,{color:"green.500"})},children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})]}),E=()=>{const[t,n]=zo.useState("孫悟空");return e.jsxs(l,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},N=()=>{var v,c,m;const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:n,handleSubmit:a,watch:p,formState:{errors:s}}=To(),u=r=>console.log("submit:",r);return console.log("watch:",p()),e.jsxs(U,{as:"form",onSubmit:a(u),children:[e.jsx(d,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(v=s.autocomplete1)==null?void 0:v.message,children:e.jsx(h,{name:"autocomplete1",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsxs(l,{placeholder:"キャラクターを選択",...r,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(d,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(c=s.autocomplete2)==null?void 0:c.message,children:e.jsx(h,{name:"autocomplete2",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsxs(l,{placeholder:"キャラクターを選択",...r,children:[e.jsxs(A,{label:"地球人",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(o,{value:"クリリン",children:"クリリン"})]}),e.jsxs(A,{label:"フリーザ軍",children:[e.jsx(o,{value:"フリーザ",children:"フリーザ"}),e.jsx(o,{value:"ギニュー",children:"ギニュー"}),e.jsx(o,{value:"リクーム",children:"リクーム"}),e.jsx(o,{value:"バータ",children:"バータ"}),e.jsx(o,{value:"ジース",children:"ジース"}),e.jsx(o,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(d,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(m=s.autocomplete3)==null?void 0:m.message,children:e.jsx(h,{name:"autocomplete3",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsx(l,{placeholder:"キャラクターを選択",...r,items:t})})}),e.jsx(X,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},L=()=>{var c,m,r;const t={autocomplete1:"孫悟空",autocomplete2:"フリーザ",autocomplete3:"リクーム"},n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:p,watch:s,formState:{errors:u}}=To({defaultValues:t}),v=i=>console.log("submit:",i);return console.log("watch:",s()),e.jsxs(U,{as:"form",onSubmit:p(v),children:[e.jsx(d,{isInvalid:!!u.autocomplete1,label:"Who is your favorite character?",errorMessage:(c=u.autocomplete1)==null?void 0:c.message,children:e.jsx(h,{name:"autocomplete1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(l,{placeholder:"キャラクターを選択",...i,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(d,{isInvalid:!!u.autocomplete2,label:"Who is your favorite character?",errorMessage:(m=u.autocomplete2)==null?void 0:m.message,children:e.jsx(h,{name:"autocomplete2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(l,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(A,{label:"地球人",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(o,{value:"クリリン",children:"クリリン"})]}),e.jsxs(A,{label:"フリーザ軍",children:[e.jsx(o,{value:"フリーザ",children:"フリーザ"}),e.jsx(o,{value:"ギニュー",children:"ギニュー"}),e.jsx(o,{value:"リクーム",children:"リクーム"}),e.jsx(o,{value:"バータ",children:"バータ"}),e.jsx(o,{value:"ジース",children:"ジース"}),e.jsx(o,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(d,{isInvalid:!!u.autocomplete3,label:"Who is your favorite character?",errorMessage:(r=u.autocomplete3)==null?void 0:r.message,children:e.jsx(h,{name:"autocomplete3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(l,{placeholder:"キャラクターを選択",...i,items:n})})}),e.jsx(X,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var me,de,ve;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
      <Autocomplete placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択">
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
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(ve=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var he,Ae,be;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="extra small size" size="xs" />
      <Autocomplete placeholder="small size" size="sm" />
      <Autocomplete placeholder="medium size" size="md" />
      <Autocomplete placeholder="large size" size="lg" />
    </>;
}`,...(be=(Ae=f.parameters)==null?void 0:Ae.docs)==null?void 0:be.source}}};var xe,Oe,je;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete variant="outline" placeholder="outline" />
      <Autocomplete variant="filled" placeholder="filled" />
      <Autocomplete variant="flushed" placeholder="flushed" />
      <Autocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(je=(Oe=g.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var fe,ge,Ce;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string | undefined>(undefined);
  const items: AutocompleteItem[] = [{
    label: "孫悟空",
    value: "孫悟空"
  }, {
    label: "孫悟飯",
    value: "孫悟飯"
  }, {
    label: "クリリン",
    value: "クリリン"
  }];
  return <Autocomplete value={value} onChange={onChange} placeholder="キャラクターを選択" footer={({
    onClose
  }) => <VStack borderTopWidth="1px" borderColor={["blackAlpha.200", "whiteAlpha.100"]} p="2">
          <Button onClick={() => {
      onChange("孫悟空");
      onClose();
    }}>
            Set "孫悟空"
          </Button>
        </VStack>} items={items} />;
}`,...(Ce=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var Se,we,ye;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" defaultValue="ベジータ">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(ye=(we=S.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Ie,Fe,Pe;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Pe=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var De,qe,We;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
  return <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate onCreate={(newItem, newItems) => console.log("created item", newItem, "new items", newItems)} />;
}`,...(We=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};var ke,Ve,Be;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
  return <Autocomplete placeholder="キャラクターを選択" items={items} allowFree onChange={value => console.log("new value:", value)} />;
}`,...(Be=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};var Me,ze,Te;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="first" />
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="last" />
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="地球人" />
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem={["フリーザ軍", "last"]} />
    </>;
}`,...(Te=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var _e,Ge,Re;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="default border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete focusBorderColor="green.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete isInvalid errorBorderColor="orange.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(Re=(Ge=P.parameters)==null?void 0:Ge.docs)==null?void 0:Re.source}}};var He,Ee,Ne;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" closeOnSelect={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ne=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Le,Je,Ke;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ke=(Je=q.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ue,Xe;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Xe=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;k.parameters={...k.parameters,docs:{...(Ye=k.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...($e=(Ze=k.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var eo,oo,lo;V.parameters={...V.parameters,docs:{...(eo=V.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(lo=(oo=V.parameters)==null?void 0:oo.docs)==null?void 0:lo.source}}};var to,no,ao;B.parameters={...B.parameters,docs:{...(to=B.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(ao=(no=B.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var ro,so,uo;M.parameters={...M.parameters,docs:{...(ro=M.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isDisabled variant="outline" placeholder="outline" />
      <Autocomplete isDisabled variant="filled" placeholder="filled" />
      <Autocomplete isDisabled variant="flushed" placeholder="flushed" />
      <Autocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(uo=(so=M.parameters)==null?void 0:so.docs)==null?void 0:uo.source}}};var io,co,po;z.parameters={...z.parameters,docs:{...(io=z.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isReadOnly variant="outline" placeholder="outline" />
      <Autocomplete isReadOnly variant="filled" placeholder="filled" />
      <Autocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <Autocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(po=(co=z.parameters)==null?void 0:co.docs)==null?void 0:po.source}}};var mo,vo,ho;T.parameters={...T.parameters,docs:{...(mo=T.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isInvalid variant="outline" placeholder="outline" />
      <Autocomplete isInvalid variant="filled" placeholder="filled" />
      <Autocomplete isInvalid variant="flushed" placeholder="flushed" />
      <Autocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(ho=(vo=T.parameters)==null?void 0:vo.docs)==null?void 0:ho.source}}};var Ao,bo,xo;_.parameters={..._.parameters,docs:{...(Ao=_.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(xo=(bo=_.parameters)==null?void 0:bo.docs)==null?void 0:xo.source}}};var Oo,jo,fo;G.parameters={...G.parameters,docs:{...(Oo=G.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(fo=(jo=G.parameters)==null?void 0:jo.docs)==null?void 0:fo.source}}};var go,Co,So;R.parameters={...R.parameters,docs:{...(go=R.parameters)==null?void 0:go.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択" iconProps={{
      children: <ChevronsDown />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(So=(Co=R.parameters)==null?void 0:Co.docs)==null?void 0:So.source}}};var wo,yo,Io;H.parameters={...H.parameters,docs:{...(wo=H.parameters)==null?void 0:wo.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択" optionProps={{
      icon: <Check color="green.500" />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(Io=(yo=H.parameters)==null?void 0:yo.docs)==null?void 0:Io.source}}};var Fo,Po,Do;E.parameters={...E.parameters,docs:{...(Fo=E.parameters)==null?void 0:Fo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("孫悟空");
  return <Autocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Do=(Po=E.parameters)==null?void 0:Po.docs)==null?void 0:Do.source}}};var qo,Wo,ko;N.parameters={...N.parameters,docs:{...(qo=N.parameters)==null?void 0:qo.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
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
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
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
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ko=(Wo=N.parameters)==null?void 0:Wo.docs)==null?void 0:ko.source}}};var Vo,Bo,Mo;L.parameters={...L.parameters,docs:{...(Vo=L.parameters)==null?void 0:Vo.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
  };
  const defaultValues: Data = {
    autocomplete1: "孫悟空",
    autocomplete2: "フリーザ",
    autocomplete3: "リクーム"
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
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
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
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Mo=(Bo=L.parameters)==null?void 0:Bo.docs)==null?void 0:Mo.source}}};const et=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","disabledCloseOnSelect","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{et as __namedExportsOrder,j as basic,E as customControl,R as customIcon,H as customOption,$l as default,q as disabledCloseOnBlur,D as disabledCloseOnSelect,M as isDisabled,T as isInvalid,_ as isOptionDisabled,G as isOptionFocusable,z as isReadonly,N as reactHookForm,L as reactHookFormWithDefaultValue,y as withAllowCreate,I as withAllowFree,P as withBorderColor,S as withDefaultValue,B as withDuration,w as withEmptyMessage,C as withFooter,V as withGutter,F as withInsertPositionItem,k as withOffset,W as withPlacement,f as withSize,g as withVariant};
