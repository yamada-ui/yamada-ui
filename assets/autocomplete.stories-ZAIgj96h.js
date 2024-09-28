import{j as e}from"./extends-CwFRzn3r.js";import{r as Ml}from"./index-BwDkhjyp.js";import{u as Bl,C as h}from"./index.esm-DXPXqkjk.js";import{u as Zl,A as $l,a as eo,b as lo,c as ie,d as ce,e as pe,f as oo,g as to,h as l,i as A}from"./use-autocomplete-DVH2gb7C.js";import{P as no,a as ao}from"./popover-content-C9K0DE-R.js";import{P as me}from"./portal-DfxMOg4r.js";import{f as Tl}from"./forward-ref-BWI-Phbn.js";import{a as ro}from"./use-component-style-CfUS8Ki1.js";import{o as so}from"./theme-provider-BZKkW4ID.js";import{b as J,c as Gl,z as O}from"./factory-CYpx3TMG.js";import{C as uo}from"./chevrons-down-DXUMrte6.js";import{V as U}from"./stack-C8qilfIS.js";import{B as X}from"./button-Bx26J9Y6.js";import{F as d}from"./form-control-DTumWR9y.js";import{C as io}from"./check-D169AQv0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-tU9OGY6h.js";import"./index-CFjuI6Rx.js";import"./index-DHvgXC6C.js";import"./index-C1nnoSu4.js";import"./index-CIt0OHe7.js";import"./index-DEy_TXYI.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";import"./index-B8XB3FuZ.js";import"./lucide-icon-cfLZgeB_.js";import"./loading-DndL1UZp.js";const o=Tl((t,n)=>{const[a,p]=ro("Autocomplete",t);let{className:s,defaultValue:u="",color:v,h:c,height:m,minH:r,minHeight:i,containerProps:K,contentProps:Z,listProps:$,fieldProps:Rl,inputProps:Hl,iconProps:El,portalProps:ee={isDisabled:!0},createProps:le,emptyProps:oe,header:te,footer:ne,children:ae,...Nl}=so(p);const{value:b,onClose:x,descendants:Ll,formControlProps:re,getPopoverProps:Jl,getContainerProps:Kl,getFieldProps:Ql,allowCreate:Q,isEmpty:se,inputValue:ue,computedChildren:Ul,...Xl}=Zl({...Nl,defaultValue:u,children:ae});c??(c=m),r??(r=i);const Yl={w:"100%",h:"fit-content",color:v,...a.container};return e.jsx($l,{value:Ll,children:e.jsx(eo,{value:{...Xl,value:b,onClose:x,formControlProps:re,inputValue:ue,allowCreate:Q,isEmpty:se,styles:a},children:e.jsx(no,{...Jl(),children:e.jsxs(J.div,{className:Gl("ui-autocomplete",s),__css:Yl,...Kl(K),children:[e.jsxs(J.div,{className:"ui-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(Y,{h:c,minH:r,inputProps:Hl,...Ql(Rl,n)}),e.jsx(lo,{...El,...re})]}),se?e.jsx(me,{...ee,children:e.jsx(ie,{header:O(te,{value:b,onClose:x}),footer:O(ne,{value:b,onClose:x}),contentProps:Z,...$,children:Q&&ue?e.jsx(ce,{...le}):e.jsx(pe,{...oe})})}):e.jsx(me,{...ee,children:e.jsxs(ie,{header:O(te,{value:b,onClose:x}),footer:O(ne,{value:b,onClose:x}),contentProps:Z,...$,children:[Q?e.jsx(ce,{...le}):e.jsx(pe,{...oe}),ae??Ul]})})]})})})})});o.displayName="Autocomplete";o.__ui__="Autocomplete";const Y=Tl(({className:t,h:n,minH:a,placeholder:p,inputProps:s,...u},v)=>{const{label:c,inputValue:m,styles:r}=oo(),{getInputProps:i}=to(),K={pe:"2rem",h:n,minH:a,display:"flex",alignItems:"center",...r.field,cursor:"text"};return e.jsx(ao,{children:e.jsx(J.div,{className:Gl("ui-autocomplete__field",t),__css:K,...u,children:e.jsx(J.input,{className:"ui-autocomplete__field__input",display:"inline-block",w:"100%",placeholder:p,...i({...s,value:m||c||""},v)})})})});Y.displayName="AutocompleteField";Y.__ui__="AutocompleteField";const Zo={title:"Components / Forms / Autocomplete",component:o},j=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(A,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(A,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{placeholder:"キャラクターを選択",items:t})]})},f=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"extra small size",size:"xs"}),e.jsx(o,{placeholder:"small size",size:"sm"}),e.jsx(o,{placeholder:"medium size",size:"md"}),e.jsx(o,{placeholder:"large size",size:"lg"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),C=()=>{const[t,n]=Ml.useState(void 0),a=[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}];return e.jsx(o,{value:t,onChange:n,placeholder:"キャラクターを選択",footer:({onClose:p})=>e.jsx(U,{borderTopWidth:"1px",borderColor:["blackAlpha.200","whiteAlpha.100"],p:"2",children:e.jsx(X,{onClick:()=>{n("孫悟空"),p()},children:'Set "孫悟空"'})}),items:a})},S=()=>e.jsxs(o,{placeholder:"キャラクターを選択",defaultValue:"ベジータ",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),w=()=>e.jsxs(o,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),y=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,onCreate:(n,a)=>console.log("created item",n,"new items",a)})},I=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowFree:!0,onChange:n=>console.log("new value:",n)})},F=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"first"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"last"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),D=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnSelect:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),q=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),W=()=>e.jsxs(o,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),k=()=>e.jsxs(o,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>e.jsxs(o,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),V=()=>e.jsxs(o,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(d,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),T=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(uo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(io,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),E=()=>{const[t,n]=Ml.useState("孫悟空");return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},N=()=>{var v,c,m;const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:n,handleSubmit:a,watch:p,formState:{errors:s}}=Bl(),u=r=>console.log("submit:",r);return console.log("watch:",p()),e.jsxs(U,{as:"form",onSubmit:a(u),children:[e.jsx(d,{isInvalid:!!s.autocomplete1,label:"Who is your favorite character?",errorMessage:(v=s.autocomplete1)==null?void 0:v.message,children:e.jsx(h,{name:"autocomplete1",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsxs(o,{placeholder:"キャラクターを選択",...r,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(d,{isInvalid:!!s.autocomplete2,label:"Who is your favorite character?",errorMessage:(c=s.autocomplete2)==null?void 0:c.message,children:e.jsx(h,{name:"autocomplete2",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsxs(o,{placeholder:"キャラクターを選択",...r,children:[e.jsxs(A,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(A,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(d,{isInvalid:!!s.autocomplete3,label:"Who is your favorite character?",errorMessage:(m=s.autocomplete3)==null?void 0:m.message,children:e.jsx(h,{name:"autocomplete3",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e.jsx(o,{placeholder:"キャラクターを選択",...r,items:t})})}),e.jsx(X,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},L=()=>{var c,m,r;const t={autocomplete1:"孫悟空",autocomplete2:"フリーザ",autocomplete3:"リクーム"},n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:p,watch:s,formState:{errors:u}}=Bl({defaultValues:t}),v=i=>console.log("submit:",i);return console.log("watch:",s()),e.jsxs(U,{as:"form",onSubmit:p(v),children:[e.jsx(d,{isInvalid:!!u.autocomplete1,label:"Who is your favorite character?",errorMessage:(c=u.autocomplete1)==null?void 0:c.message,children:e.jsx(h,{name:"autocomplete1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(d,{isInvalid:!!u.autocomplete2,label:"Who is your favorite character?",errorMessage:(m=u.autocomplete2)==null?void 0:m.message,children:e.jsx(h,{name:"autocomplete2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(A,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(A,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(d,{isInvalid:!!u.autocomplete3,label:"Who is your favorite character?",errorMessage:(r=u.autocomplete3)==null?void 0:r.message,children:e.jsx(h,{name:"autocomplete3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(o,{placeholder:"キャラクターを選択",...i,items:n})})}),e.jsx(X,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var de,ve,he;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(he=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ae,be,xe;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="extra small size" size="xs" />
      <Autocomplete placeholder="small size" size="sm" />
      <Autocomplete placeholder="medium size" size="md" />
      <Autocomplete placeholder="large size" size="lg" />
    </>;
}`,...(xe=(be=f.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Oe,je,fe;g.parameters={...g.parameters,docs:{...(Oe=g.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete variant="outline" placeholder="outline" />
      <Autocomplete variant="filled" placeholder="filled" />
      <Autocomplete variant="flushed" placeholder="flushed" />
      <Autocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(fe=(je=g.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var ge,Ce,Se;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Se=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var we,ye,Ie;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" defaultValue="ベジータ">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ie=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Fe,Pe,De;w.parameters={...w.parameters,docs:{...(Fe=w.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(De=(Pe=w.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var qe,We,ke;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(ke=(We=y.parameters)==null?void 0:We.docs)==null?void 0:ke.source}}};var _e,Ve,ze;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Me,Be,Te;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(Te=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ge,Re,He;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(He=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};var Ee,Ne,Le;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" closeOnSelect={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Le=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var Je,Ke,Qe;q.parameters={...q.parameters,docs:{...(Je=q.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Qe=(Ke=q.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,el;k.parameters={...k.parameters,docs:{...(Ze=k.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(el=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:el.source}}};var ll,ol,tl;_.parameters={..._.parameters,docs:{...(ll=_.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(tl=(ol=_.parameters)==null?void 0:ol.docs)==null?void 0:tl.source}}};var nl,al,rl;V.parameters={...V.parameters,docs:{...(nl=V.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(rl=(al=V.parameters)==null?void 0:al.docs)==null?void 0:rl.source}}};var sl,ul,il;z.parameters={...z.parameters,docs:{...(sl=z.parameters)==null?void 0:sl.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isDisabled variant="outline" placeholder="outline" />
      <Autocomplete isDisabled variant="filled" placeholder="filled" />
      <Autocomplete isDisabled variant="flushed" placeholder="flushed" />
      <Autocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(il=(ul=z.parameters)==null?void 0:ul.docs)==null?void 0:il.source}}};var cl,pl,ml;M.parameters={...M.parameters,docs:{...(cl=M.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isReadOnly variant="outline" placeholder="outline" />
      <Autocomplete isReadOnly variant="filled" placeholder="filled" />
      <Autocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <Autocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(ml=(pl=M.parameters)==null?void 0:pl.docs)==null?void 0:ml.source}}};var dl,vl,hl;B.parameters={...B.parameters,docs:{...(dl=B.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isInvalid variant="outline" placeholder="outline" />
      <Autocomplete isInvalid variant="filled" placeholder="filled" />
      <Autocomplete isInvalid variant="flushed" placeholder="flushed" />
      <Autocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(hl=(vl=B.parameters)==null?void 0:vl.docs)==null?void 0:hl.source}}};var Al,bl,xl;T.parameters={...T.parameters,docs:{...(Al=T.parameters)==null?void 0:Al.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(xl=(bl=T.parameters)==null?void 0:bl.docs)==null?void 0:xl.source}}};var Ol,jl,fl;G.parameters={...G.parameters,docs:{...(Ol=G.parameters)==null?void 0:Ol.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(fl=(jl=G.parameters)==null?void 0:jl.docs)==null?void 0:fl.source}}};var gl,Cl,Sl;R.parameters={...R.parameters,docs:{...(gl=R.parameters)==null?void 0:gl.docs,source:{originalSource:`() => {
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
}`,...(Sl=(Cl=R.parameters)==null?void 0:Cl.docs)==null?void 0:Sl.source}}};var wl,yl,Il;H.parameters={...H.parameters,docs:{...(wl=H.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
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
}`,...(Il=(yl=H.parameters)==null?void 0:yl.docs)==null?void 0:Il.source}}};var Fl,Pl,Dl;E.parameters={...E.parameters,docs:{...(Fl=E.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("孫悟空");
  return <Autocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Dl=(Pl=E.parameters)==null?void 0:Pl.docs)==null?void 0:Dl.source}}};var ql,Wl,kl;N.parameters={...N.parameters,docs:{...(ql=N.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
  }
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
}`,...(kl=(Wl=N.parameters)==null?void 0:Wl.docs)==null?void 0:kl.source}}};var _l,Vl,zl;L.parameters={...L.parameters,docs:{...(_l=L.parameters)==null?void 0:_l.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
  }
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
}`,...(zl=(Vl=L.parameters)==null?void 0:Vl.docs)==null?void 0:zl.source}}};const $o=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","disabledCloseOnSelect","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{$o as __namedExportsOrder,j as basic,E as customControl,R as customIcon,H as customOption,Zo as default,q as disabledCloseOnBlur,D as disabledCloseOnSelect,z as isDisabled,B as isInvalid,T as isOptionDisabled,G as isOptionFocusable,M as isReadonly,N as reactHookForm,L as reactHookFormWithDefaultValue,y as withAllowCreate,I as withAllowFree,P as withBorderColor,S as withDefaultValue,V as withDuration,w as withEmptyMessage,C as withFooter,_ as withGutter,F as withInsertPositionItem,k as withOffset,W as withPlacement,f as withSize,g as withVariant};
