import{j as e}from"./extends-CwFRzn3r.js";import{r as j}from"./index-BwDkhjyp.js";import{u as Mo,C as f}from"./index.esm-DXPXqkjk.js";import{u as To,A as qo,a as _o,j as Go,b as Bo,c as we,d as ye,e as Ie,f as zo,g as Ro,h as l,i as p}from"./use-autocomplete-DVH2gb7C.js";import{P as Eo,a as Ho}from"./popover-content-C9K0DE-R.js";import{P as Fe}from"./portal-DfxMOg4r.js";import{f as Co}from"./forward-ref-BWI-Phbn.js";import{a as No}from"./use-component-style-CfUS8Ki1.js";import{o as Ko}from"./theme-provider-BZKkW4ID.js";import{b as y,c as So,h as Lo,z as W}from"./factory-CYpx3TMG.js";import{T as Jo}from"./trash2-CHTDpusJ.js";import{V as xe}from"./stack-C8qilfIS.js";import{B as be}from"./button-Bx26J9Y6.js";import{T as Pe}from"./tag-B-awimjx.js";import{F as A}from"./form-control-DTumWR9y.js";import{C as Qo}from"./chevrons-down-DXUMrte6.js";import{C as Uo}from"./check-D169AQv0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-tU9OGY6h.js";import"./index-CFjuI6Rx.js";import"./index-DHvgXC6C.js";import"./index-C1nnoSu4.js";import"./index-CIt0OHe7.js";import"./index-DEy_TXYI.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";import"./index-B8XB3FuZ.js";import"./lucide-icon-cfLZgeB_.js";import"./loading-DndL1UZp.js";const o=Co((t,n)=>{const[r,m]=No("MultiAutocomplete",t);let{className:a,defaultValue:c=[],component:O,separator:d,isClearable:h=!0,color:i,h:s,height:u,minH:I,minHeight:F,closeOnSelect:g=!1,keepPlaceholder:M=!1,containerProps:he,contentProps:P,listProps:k,fieldProps:ve,inputProps:C,iconProps:v,clearIconProps:x,portalProps:S={isDisabled:!0},createProps:D,emptyProps:V,header:fe,footer:ge,children:Me,...wo}=Ko(m);const{value:b,onClose:w,descendants:yo,formControlProps:Ae,getPopoverProps:Io,getContainerProps:Fo,getFieldProps:Po,allowCreate:Oe,isEmpty:Ce,inputValue:Se,computedChildren:ko,onClear:Do,...Vo}=To({...wo,defaultValue:c,closeOnSelect:g,children:Me});s??(s=u),I??(I=F);const Wo={w:"100%",h:"fit-content",color:i,...r.container};return e.jsx(qo,{value:yo,children:e.jsx(_o,{value:{...Vo,value:b,onClose:w,formControlProps:Ae,inputValue:Se,allowCreate:Oe,isEmpty:Ce,styles:r},children:e.jsx(Eo,{...Io(),children:e.jsxs(y.div,{className:So("ui-multi-autocomplete",a),__css:Wo,...Fo(he),children:[e.jsxs(y.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...r.inner},children:[e.jsx(je,{component:O,separator:d,keepPlaceholder:M,h:s,minH:I,inputProps:C,...Po(ve,n)}),h&&b.length?e.jsx(Go,{...x,onClick:Lo(x==null?void 0:x.onClick,Do),...Ae}):e.jsx(Bo,{...v,...Ae})]}),Ce?e.jsx(Fe,{...S,children:e.jsx(we,{header:W(fe,{value:b,onClose:w}),footer:W(ge,{value:b,onClose:w}),contentProps:P,...k,children:Oe&&Se?e.jsx(ye,{...D}):e.jsx(Ie,{...V})})}):e.jsx(Fe,{...S,children:e.jsxs(we,{header:W(fe,{value:b,onClose:w}),footer:W(ge,{value:b,onClose:w}),contentProps:P,...k,children:[Oe?e.jsx(ye,{...D}):e.jsx(Ie,{...V}),Me??ko]})})]})})})})});o.displayName="MultiAutocomplete";o.__ui__="MultiAutocomplete";const je=Co(({className:t,component:n,separator:r=",",keepPlaceholder:m,h:a,minH:c,placeholder:O,inputProps:d,...h},i)=>{const{value:s,label:u,inputValue:I,onChange:F,isOpen:g,inputRef:M,styles:he}=zo(),{getInputProps:P}=Ro(),k=j.useMemo(()=>u!=null&&u.length?n?u.map((C,v)=>{const x=V=>{V.stopPropagation(),F(s[v]),M.current&&M.current.focus()},S=n({value:s[v],label:C,index:v,onRemove:x}),D={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return S?j.cloneElement(S,{key:v,style:D}):null}):u.map((C,v)=>{const x=u.length===v+1;return e.jsxs(y.span,{display:"inline-block",me:"0.25rem",children:[C,!x||g?r:null]},v)}):null,[u,n,s,F,g,M,r]),ve={pe:"2rem",h:a,minH:c,display:"flex",flexWrap:"wrap",alignItems:"center",...he.field,cursor:"text"};return e.jsx(Ho,{children:e.jsxs(y.div,{className:So("ui-multi-autocomplete__field",t),__css:ve,py:u!=null&&u.length&&n?"0.125rem":void 0,...h,children:[k,e.jsx(y.input,{"aria-label":"Input value",className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",minW:"0px",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem","aria-multiselectable":"true",placeholder:!u||!(u!=null&&u.length)||m&&g?O:void 0,...P({...d,value:I??""},i)})]})})});je.displayName="MultiAutocompleteField";je.__ui__="MultiAutocompleteField";const Bt={title:"Components / Forms / MultiAutocomplete",component:o},T=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{placeholder:"キャラクターを選択",items:t})]})},q=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"extra small size",size:"xs"}),e.jsx(o,{placeholder:"small size",size:"sm"}),e.jsx(o,{placeholder:"medium size",size:"md"}),e.jsx(o,{placeholder:"large size",size:"lg"})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),G=()=>{const[t,n]=j.useState([]),r=j.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),m=j.useMemo(()=>r.map(a=>"value"in a?a.value:void 0).filter(a=>a!==void 0),[r]);return e.jsx(o,{value:t,onChange:n,placeholder:"キャラクターを選択",footer:({onClose:a})=>e.jsx(xe,{borderTopWidth:"1px",borderColor:["blackAlpha.200","whiteAlpha.100"],p:"2",children:e.jsx(be,{onClick:()=>{n(m),a()},children:"Set all values"})}),items:r})},B=()=>e.jsxs(o,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,onCreate:(n,r)=>console.log("created item",n,"new items",r)})},E=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowFree:!0,onChange:n=>console.log("new values",n)})},H=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"first"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"last"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),K=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(o,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",component:({label:t})=>e.jsx(Pe,{children:t}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",component:({label:t,onRemove:n})=>e.jsx(Pe,{onClose:n,children:t}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Q=()=>e.jsxs(o,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),U=()=>e.jsxs(o,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),X=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(o,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>e.jsxs(o,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>e.jsxs(o,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),le=()=>e.jsxs(o,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(o,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(A,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),re=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ue=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),se=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Jo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Uo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),pe=()=>{const[t,n]=j.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},me=()=>{var O,d,h;const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:n,handleSubmit:r,watch:m,formState:{errors:a}}=Mo(),c=i=>console.log("submit:",i);return console.log("watch:",m()),e.jsxs(xe,{as:"form",onSubmit:r(c),children:[e.jsx(A,{isInvalid:!!a.autocomplete1,label:"Who is your favorite character?",errorMessage:(O=a.autocomplete1)==null?void 0:O.message,children:e.jsx(f,{name:"autocomplete1",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(A,{isInvalid:!!a.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=a.autocomplete2)==null?void 0:d.message,children:e.jsx(f,{name:"autocomplete2",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(A,{isInvalid:!!a.autocomplete3,label:"Who is your favorite character?",errorMessage:(h=a.autocomplete3)==null?void 0:h.message,children:e.jsx(f,{name:"autocomplete3",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(o,{placeholder:"キャラクターを選択",...i,items:t})})}),e.jsx(be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},de=()=>{var d,h,i;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:m,watch:a,formState:{errors:c}}=Mo({defaultValues:t}),O=s=>console.log("submit:",s);return console.log("watch:",a()),e.jsxs(xe,{as:"form",onSubmit:m(O),children:[e.jsx(A,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(d=c.autocomplete1)==null?void 0:d.message,children:e.jsx(f,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(A,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(h=c.autocomplete2)==null?void 0:h.message,children:e.jsx(f,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(A,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(i=c.autocomplete3)==null?void 0:i.message,children:e.jsx(f,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsx(o,{placeholder:"キャラクターを選択",...s,items:n})})}),e.jsx(be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ke,De,Ve;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Ve=(De=T.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var We,Te,qe;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(qe=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var _e,Ge,Be;_.parameters={..._.parameters,docs:{...(_e=_.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Be=(Ge=_.parameters)==null?void 0:Ge.docs)==null?void 0:Be.source}}};var ze,Re,Ee;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>([]);
  const items: AutocompleteItem[] = useMemo(() => [{
    label: "孫悟空",
    value: "孫悟空"
  }, {
    label: "孫悟飯",
    value: "孫悟飯"
  }, {
    label: "クリリン",
    value: "クリリン"
  }], []);
  const allValues = useMemo(() => items.map(item => "value" in item ? item.value : undefined).filter(value => value !== undefined), [items]);
  return <MultiAutocomplete value={value} onChange={onChange} placeholder="キャラクターを選択" footer={({
    onClose
  }) => <VStack borderTopWidth="1px" borderColor={["blackAlpha.200", "whiteAlpha.100"]} p="2">
          <Button onClick={() => {
      onChange(allValues);
      onClose();
    }}>
            Set all values
          </Button>
        </VStack>} items={items} />;
}`,...(Ee=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var He,Ne,Ke;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ke=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Le,Je,Qe;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Qe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;R.parameters={...R.parameters,docs:{...(Ue=R.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,el;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(el=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:el.source}}};var ll,ol,tl;H.parameters={...H.parameters,docs:{...(ll=H.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
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
}`,...(tl=(ol=H.parameters)==null?void 0:ol.docs)==null?void 0:tl.source}}};var nl,al,rl;N.parameters={...N.parameters,docs:{...(nl=N.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
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
}`,...(rl=(al=N.parameters)==null?void 0:al.docs)==null?void 0:rl.source}}};var ul,il,sl;K.parameters={...K.parameters,docs:{...(ul=K.parameters)==null?void 0:ul.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(sl=(il=K.parameters)==null?void 0:il.docs)==null?void 0:sl.source}}};var cl,pl,ml;L.parameters={...L.parameters,docs:{...(cl=L.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ml=(pl=L.parameters)==null?void 0:pl.docs)==null?void 0:ml.source}}};var dl,hl,vl;J.parameters={...J.parameters,docs:{...(dl=J.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
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
}`,...(vl=(hl=J.parameters)==null?void 0:hl.docs)==null?void 0:vl.source}}};var Al,Ol,xl;Q.parameters={...Q.parameters,docs:{...(Al=Q.parameters)==null?void 0:Al.docs,source:{originalSource:`() => {
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
}`,...(xl=(Ol=Q.parameters)==null?void 0:Ol.docs)==null?void 0:xl.source}}};var bl,jl,fl;U.parameters={...U.parameters,docs:{...(bl=U.parameters)==null?void 0:bl.docs,source:{originalSource:`() => {
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
}`,...(fl=(jl=U.parameters)==null?void 0:jl.docs)==null?void 0:fl.source}}};var gl,Ml,Cl;X.parameters={...X.parameters,docs:{...(gl=X.parameters)==null?void 0:gl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Cl=(Ml=X.parameters)==null?void 0:Ml.docs)==null?void 0:Cl.source}}};var Sl,wl,yl;Y.parameters={...Y.parameters,docs:{...(Sl=Y.parameters)==null?void 0:Sl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(yl=(wl=Y.parameters)==null?void 0:wl.docs)==null?void 0:yl.source}}};var Il,Fl,Pl;Z.parameters={...Z.parameters,docs:{...(Il=Z.parameters)==null?void 0:Il.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Pl=(Fl=Z.parameters)==null?void 0:Fl.docs)==null?void 0:Pl.source}}};var kl,Dl,Vl;$.parameters={...$.parameters,docs:{...(kl=$.parameters)==null?void 0:kl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Vl=(Dl=$.parameters)==null?void 0:Dl.docs)==null?void 0:Vl.source}}};var Wl,Tl,ql;ee.parameters={...ee.parameters,docs:{...(Wl=ee.parameters)==null?void 0:Wl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ql=(Tl=ee.parameters)==null?void 0:Tl.docs)==null?void 0:ql.source}}};var _l,Gl,Bl;le.parameters={...le.parameters,docs:{...(_l=le.parameters)==null?void 0:_l.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Bl=(Gl=le.parameters)==null?void 0:Gl.docs)==null?void 0:Bl.source}}};var zl,Rl,El;oe.parameters={...oe.parameters,docs:{...(zl=oe.parameters)==null?void 0:zl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(El=(Rl=oe.parameters)==null?void 0:Rl.docs)==null?void 0:El.source}}};var Hl,Nl,Kl;te.parameters={...te.parameters,docs:{...(Hl=te.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Kl=(Nl=te.parameters)==null?void 0:Nl.docs)==null?void 0:Kl.source}}};var Ll,Jl,Ql;ne.parameters={...ne.parameters,docs:{...(Ll=ne.parameters)==null?void 0:Ll.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Ql=(Jl=ne.parameters)==null?void 0:Jl.docs)==null?void 0:Ql.source}}};var Ul,Xl,Yl;ae.parameters={...ae.parameters,docs:{...(Ul=ae.parameters)==null?void 0:Ul.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Yl=(Xl=ae.parameters)==null?void 0:Xl.docs)==null?void 0:Yl.source}}};var Zl,$l,eo;re.parameters={...re.parameters,docs:{...(Zl=re.parameters)==null?void 0:Zl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(eo=($l=re.parameters)==null?void 0:$l.docs)==null?void 0:eo.source}}};var lo,oo,to;ue.parameters={...ue.parameters,docs:{...(lo=ue.parameters)==null?void 0:lo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(to=(oo=ue.parameters)==null?void 0:oo.docs)==null?void 0:to.source}}};var no,ao,ro;ie.parameters={...ie.parameters,docs:{...(no=ie.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
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
}`,...(ro=(ao=ie.parameters)==null?void 0:ao.docs)==null?void 0:ro.source}}};var uo,io,so;se.parameters={...se.parameters,docs:{...(uo=se.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(so=(io=se.parameters)==null?void 0:io.docs)==null?void 0:so.source}}};var co,po,mo;ce.parameters={...ce.parameters,docs:{...(co=ce.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
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
}`,...(mo=(po=ce.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var ho,vo,Ao;pe.parameters={...pe.parameters,docs:{...(ho=pe.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ao=(vo=pe.parameters)==null?void 0:vo.docs)==null?void 0:Ao.source}}};var Oo,xo,bo;me.parameters={...me.parameters,docs:{...(Oo=me.parameters)==null?void 0:Oo.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
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
}`,...(bo=(xo=me.parameters)==null?void 0:xo.docs)==null?void 0:bo.source}}};var jo,fo,go;de.parameters={...de.parameters,docs:{...(jo=de.parameters)==null?void 0:jo.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  }
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
}`,...(go=(fo=de.parameters)==null?void 0:fo.docs)==null?void 0:go.source}}};const zt=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{zt as __namedExportsOrder,T as basic,se as customClearIcon,pe as customControl,ie as customIcon,ce as customOption,Bt as default,Z as disabledCloseOnBlur,Y as disabledIsClearable,te as isDisabled,ae as isInvalid,re as isOptionDisabled,ue as isOptionFocusable,ne as isReadonly,me as reactHookForm,de as reactHookFormWithDefaultValue,R as withAllowCreate,E as withAllowFree,N as withBorderColor,X as withCloseOnSelect,J as withComponent,B as withDefaultValue,oe as withDuration,z as withEmptyMessage,G as withFooter,le as withGutter,H as withInsertPositionItem,L as withKeepPlaceholder,U as withMaxSelectValues,ee as withOffset,Q as withOmitSelectedValues,$ as withPlacement,K as withSeparator,q as withSize,_ as withVariant};
