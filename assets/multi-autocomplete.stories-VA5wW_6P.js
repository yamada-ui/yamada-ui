import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as j}from"./index-BwDkhjyp.js";import{u as fo,C as g}from"./index.esm-CMZNHfZV.js";import{u as Wo,A as To,a as qo,j as Bo,b as Go,c as Se,d as we,e as ye,f as zo,g as Ro,h as l,i as p}from"./autocomplete-empty-DjxBEK8M.js";import{P as _o,a as Eo}from"./popover-content-ClRYcrsN.js";import{P as Ie}from"./container-portal-HerNt1yQ.js";import{f as Mo}from"./forward-ref-BmTAT9U5.js";import{a as Ho}from"./use-component-style-p12qS94K.js";import{o as No}from"./theme-provider-BmJ-9UWz.js";import{b as y,c as Co,h as Ko,B as W}from"./factory-CJEIqePD.js";import{T as Lo}from"./trash2-BfyAjODL.js";import{V as xe}from"./stack-ByAleKXq.js";import{B as be}from"./button-BDKzZ-bK.js";import{T as Pe}from"./tag-BwUN6Eop.js";import{F as A}from"./form-control-3r7D-N3m.js";import{C as Jo}from"./chevrons-down-BeNeoJV7.js";import{C as Qo}from"./check-Bb_Cz7_v.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-bDxk9gk2.js";import"./index-CwsNPHBe.js";import"./index-B5K7Amiu.js";import"./index-Djgm-JrL.js";import"./index-6iPGEe4i.js";import"./index-qTz9fmf8.js";import"./icon-D5_Yzct7.js";import"./index-f0vfX_rP.js";import"./index-8NJL_rSX.js";import"./index-Du0-7Fls.js";import"./index-CSwBjuih.js";import"./index-Dg-m_leh.js";import"./index-DAi4bgxS.js";import"./index-mdpvRLjT.js";import"./motion-C535EKyX.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-BMCVwM0D.js";import"./index-Ms_xn5rh.js";import"./utils-C0ha9mnk.js";import"./scale-fade-BIJ1WRrF.js";import"./close-button-1ErNEcA0.js";import"./use-ripple-CiehlBDG.js";import"./index-DxjWwZXO.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-CG6DGrms.js";import"./loading-CbCkpXHC.js";const o=Mo((t,n)=>{const[r,m]=Ho("MultiAutocomplete",t);let{className:a,defaultValue:c=[],component:O,separator:d,isClearable:h=!0,color:i,h:s,height:u,minH:I,minHeight:P,closeOnSelect:f=!1,keepPlaceholder:M=!1,containerProps:he,contentProps:F,listProps:k,fieldProps:ve,inputProps:C,iconProps:v,clearIconProps:x,portalProps:S={isDisabled:!0},createProps:D,emptyProps:V,header:je,footer:ge,children:fe,...So}=No(m);const{value:b,onClose:w,descendants:wo,formControlProps:Ae,getPopoverProps:yo,getContainerProps:Io,getFieldProps:Po,allowCreate:Oe,isEmpty:Me,inputValue:Ce,computedChildren:Fo,onClear:ko,...Do}=Wo({...So,defaultValue:c,closeOnSelect:f,children:fe});s??(s=u),I??(I=P);const Vo={w:"100%",h:"fit-content",color:i,...r.container};return e.jsx(To,{value:wo,children:e.jsx(qo,{value:{...Do,value:b,onClose:w,formControlProps:Ae,inputValue:Ce,allowCreate:Oe,isEmpty:Me,styles:r},children:e.jsx(_o,{...yo(),children:e.jsxs(y.div,{className:Co("ui-multi-autocomplete",a),__css:Vo,...Io(he),children:[e.jsxs(y.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...r.inner},children:[e.jsx(Uo,{component:O,separator:d,keepPlaceholder:M,h:s,minH:I,inputProps:C,...Po(ve,n)}),h&&b.length?e.jsx(Bo,{...x,onClick:Ko(x==null?void 0:x.onClick,ko),...Ae}):e.jsx(Go,{...v,...Ae})]}),Me?e.jsx(Ie,{...S,children:e.jsx(Se,{header:W(je,{value:b,onClose:w}),footer:W(ge,{value:b,onClose:w}),contentProps:F,...k,children:Oe&&Ce?e.jsx(we,{...D}):e.jsx(ye,{...V})})}):e.jsx(Ie,{...S,children:e.jsxs(Se,{header:W(je,{value:b,onClose:w}),footer:W(ge,{value:b,onClose:w}),contentProps:F,...k,children:[Oe?e.jsx(we,{...D}):e.jsx(ye,{...V}),fe??Fo]})})]})})})})}),Uo=Mo(({className:t,component:n,separator:r=",",keepPlaceholder:m,h:a,minH:c,placeholder:O,inputProps:d,...h},i)=>{const{value:s,label:u,inputValue:I,onChange:P,isOpen:f,inputRef:M,styles:he}=zo(),{getInputProps:F}=Ro(),k=j.useMemo(()=>u!=null&&u.length?n?u.map((C,v)=>{const x=V=>{V.stopPropagation(),P(s[v]),M.current&&M.current.focus()},S=n({value:s[v],label:C,index:v,onRemove:x}),D={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return S?j.cloneElement(S,{key:v,style:D}):null}):u.map((C,v)=>{const x=u.length===v+1;return e.jsxs(y.span,{display:"inline-block",me:"0.25rem",children:[C,!x||f?r:null]},v)}):null,[u,n,s,P,f,M,r]),ve={pe:"2rem",h:a,minH:c,display:"flex",flexWrap:"wrap",alignItems:"center",...he.field,cursor:"text"};return e.jsx(Eo,{children:e.jsxs(y.div,{className:Co("ui-multi-autocomplete__field",t),__css:ve,py:u!=null&&u.length&&n?"0.125rem":void 0,...h,children:[k,e.jsx(y.input,{"aria-label":"Input value",className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",minW:"0px",overflow:"hidden",marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem","aria-multiselectable":"true",placeholder:!u||!(u!=null&&u.length)||m&&f?O:void 0,...F({...d,value:I??""},i)})]})})}),Rt={title:"Components / Forms / MultiAutocomplete",component:o},T=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{placeholder:"キャラクターを選択",items:t})]})},q=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"extra small size",size:"xs"}),e.jsx(o,{placeholder:"small size",size:"sm"}),e.jsx(o,{placeholder:"medium size",size:"md"}),e.jsx(o,{placeholder:"large size",size:"lg"})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),G=()=>{const[t,n]=j.useState([]),r=j.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),m=j.useMemo(()=>r.map(a=>"value"in a?a.value:void 0).filter(a=>a!==void 0),[r]);return e.jsx(o,{value:t,onChange:n,placeholder:"キャラクターを選択",footer:({onClose:a})=>e.jsx(xe,{borderTopWidth:"1px",borderColor:["blackAlpha.200","whiteAlpha.100"],p:"2",children:e.jsx(be,{onClick:()=>{n(m),a()},children:"Set all values"})}),items:r})},z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(o,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,onCreate:(n,r)=>console.log("created item",n,"new items",r)})},E=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowFree:!0,onChange:n=>console.log("new values",n)})},H=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"first"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"last"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:"地球人"}),e.jsx(o,{placeholder:"キャラクターを選択",items:t,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),K=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(o,{placeholder:"キャラクターを選択",keepPlaceholder:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",component:({label:t})=>e.jsx(Pe,{children:t}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",component:({label:t,onRemove:n})=>e.jsx(Pe,{onClose:n,children:t}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Q=()=>e.jsxs(o,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),U=()=>e.jsxs(o,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),X=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(o,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>e.jsxs(o,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>e.jsxs(o,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),le=()=>e.jsxs(o,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(o,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(o,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(o,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(o,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(A,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),re=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ue=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ie=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Jo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),se=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Lo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Qo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),pe=()=>{const[t,n]=j.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},me=()=>{var O,d,h;const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:n,handleSubmit:r,watch:m,formState:{errors:a}}=fo(),c=i=>console.log("submit:",i);return console.log("watch:",m()),e.jsxs(xe,{as:"form",onSubmit:r(c),children:[e.jsx(A,{isInvalid:!!a.autocomplete1,label:"Who is your favorite character?",errorMessage:(O=a.autocomplete1)==null?void 0:O.message,children:e.jsx(g,{name:"autocomplete1",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(A,{isInvalid:!!a.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=a.autocomplete2)==null?void 0:d.message,children:e.jsx(g,{name:"autocomplete2",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsxs(o,{placeholder:"キャラクターを選択",...i,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(A,{isInvalid:!!a.autocomplete3,label:"Who is your favorite character?",errorMessage:(h=a.autocomplete3)==null?void 0:h.message,children:e.jsx(g,{name:"autocomplete3",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:i})=>e.jsx(o,{placeholder:"キャラクターを選択",...i,items:t})})}),e.jsx(be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},de=()=>{var d,h,i;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:m,watch:a,formState:{errors:c}}=fo({defaultValues:t}),O=s=>console.log("submit:",s);return console.log("watch:",a()),e.jsxs(xe,{as:"form",onSubmit:m(O),children:[e.jsx(A,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(d=c.autocomplete1)==null?void 0:d.message,children:e.jsx(g,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(A,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(h=c.autocomplete2)==null?void 0:h.message,children:e.jsx(g,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(A,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(i=c.autocomplete3)==null?void 0:i.message,children:e.jsx(g,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsx(o,{placeholder:"キャラクターを選択",...s,items:n})})}),e.jsx(be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Fe,ke,De;T.parameters={...T.parameters,docs:{...(Fe=T.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(De=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ve,We,Te;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="extra small size" size="xs" />
      <MultiAutocomplete placeholder="small size" size="sm" />
      <MultiAutocomplete placeholder="medium size" size="md" />
      <MultiAutocomplete placeholder="large size" size="lg" />
    </>;
}`,...(Te=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var qe,Be,Ge;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Ge=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var ze,Re,_e;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(_e=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var Ee,He,Ne;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ne=(He=z.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Ke,Le,Je;R.parameters={...R.parameters,docs:{...(Ke=R.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Je=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;_.parameters={..._.parameters,docs:{...(Qe=_.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;E.parameters={...E.parameters,docs:{...(Ye=E.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...($e=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var el,ll,ol;H.parameters={...H.parameters,docs:{...(el=H.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
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
}`,...(ol=(ll=H.parameters)==null?void 0:ll.docs)==null?void 0:ol.source}}};var tl,nl,al;N.parameters={...N.parameters,docs:{...(tl=N.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
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
}`,...(al=(nl=N.parameters)==null?void 0:nl.docs)==null?void 0:al.source}}};var rl,ul,il;K.parameters={...K.parameters,docs:{...(rl=K.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(il=(ul=K.parameters)==null?void 0:ul.docs)==null?void 0:il.source}}};var sl,cl,pl;L.parameters={...L.parameters,docs:{...(sl=L.parameters)==null?void 0:sl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" keepPlaceholder>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(pl=(cl=L.parameters)==null?void 0:cl.docs)==null?void 0:pl.source}}};var ml,dl,hl;J.parameters={...J.parameters,docs:{...(ml=J.parameters)==null?void 0:ml.docs,source:{originalSource:`() => {
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
}`,...(hl=(dl=J.parameters)==null?void 0:dl.docs)==null?void 0:hl.source}}};var vl,Al,Ol;Q.parameters={...Q.parameters,docs:{...(vl=Q.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
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
}`,...(Ol=(Al=Q.parameters)==null?void 0:Al.docs)==null?void 0:Ol.source}}};var xl,bl,jl;U.parameters={...U.parameters,docs:{...(xl=U.parameters)==null?void 0:xl.docs,source:{originalSource:`() => {
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
}`,...(jl=(bl=U.parameters)==null?void 0:bl.docs)==null?void 0:jl.source}}};var gl,fl,Ml;X.parameters={...X.parameters,docs:{...(gl=X.parameters)==null?void 0:gl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnSelect={true}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ml=(fl=X.parameters)==null?void 0:fl.docs)==null?void 0:Ml.source}}};var Cl,Sl,wl;Y.parameters={...Y.parameters,docs:{...(Cl=Y.parameters)==null?void 0:Cl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" isClearable={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(wl=(Sl=Y.parameters)==null?void 0:Sl.docs)==null?void 0:wl.source}}};var yl,Il,Pl;Z.parameters={...Z.parameters,docs:{...(yl=Z.parameters)==null?void 0:yl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Pl=(Il=Z.parameters)==null?void 0:Il.docs)==null?void 0:Pl.source}}};var Fl,kl,Dl;$.parameters={...$.parameters,docs:{...(Fl=$.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Dl=(kl=$.parameters)==null?void 0:kl.docs)==null?void 0:Dl.source}}};var Vl,Wl,Tl;ee.parameters={...ee.parameters,docs:{...(Vl=ee.parameters)==null?void 0:Vl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Tl=(Wl=ee.parameters)==null?void 0:Wl.docs)==null?void 0:Tl.source}}};var ql,Bl,Gl;le.parameters={...le.parameters,docs:{...(ql=le.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Gl=(Bl=le.parameters)==null?void 0:Bl.docs)==null?void 0:Gl.source}}};var zl,Rl,_l;oe.parameters={...oe.parameters,docs:{...(zl=oe.parameters)==null?void 0:zl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(_l=(Rl=oe.parameters)==null?void 0:Rl.docs)==null?void 0:_l.source}}};var El,Hl,Nl;te.parameters={...te.parameters,docs:{...(El=te.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isDisabled variant="outline" placeholder="outline" />
      <MultiAutocomplete isDisabled variant="filled" placeholder="filled" />
      <MultiAutocomplete isDisabled variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Nl=(Hl=te.parameters)==null?void 0:Hl.docs)==null?void 0:Nl.source}}};var Kl,Ll,Jl;ne.parameters={...ne.parameters,docs:{...(Kl=ne.parameters)==null?void 0:Kl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isReadOnly variant="outline" placeholder="outline" />
      <MultiAutocomplete isReadOnly variant="filled" placeholder="filled" />
      <MultiAutocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Jl=(Ll=ne.parameters)==null?void 0:Ll.docs)==null?void 0:Jl.source}}};var Ql,Ul,Xl;ae.parameters={...ae.parameters,docs:{...(Ql=ae.parameters)==null?void 0:Ql.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete isInvalid variant="outline" placeholder="outline" />
      <MultiAutocomplete isInvalid variant="filled" placeholder="filled" />
      <MultiAutocomplete isInvalid variant="flushed" placeholder="flushed" />
      <MultiAutocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Xl=(Ul=ae.parameters)==null?void 0:Ul.docs)==null?void 0:Xl.source}}};var Yl,Zl,$l;re.parameters={...re.parameters,docs:{...(Yl=re.parameters)==null?void 0:Yl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($l=(Zl=re.parameters)==null?void 0:Zl.docs)==null?void 0:$l.source}}};var eo,lo,oo;ue.parameters={...ue.parameters,docs:{...(eo=ue.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(oo=(lo=ue.parameters)==null?void 0:lo.docs)==null?void 0:oo.source}}};var to,no,ao;ie.parameters={...ie.parameters,docs:{...(to=ie.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
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
}`,...(ao=(no=ie.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var ro,uo,io;se.parameters={...se.parameters,docs:{...(ro=se.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(io=(uo=se.parameters)==null?void 0:uo.docs)==null?void 0:io.source}}};var so,co,po;ce.parameters={...ce.parameters,docs:{...(so=ce.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
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
}`,...(po=(co=ce.parameters)==null?void 0:co.docs)==null?void 0:po.source}}};var mo,ho,vo;pe.parameters={...pe.parameters,docs:{...(mo=pe.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(vo=(ho=pe.parameters)==null?void 0:ho.docs)==null?void 0:vo.source}}};var Ao,Oo,xo;me.parameters={...me.parameters,docs:{...(Ao=me.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
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
}`,...(xo=(Oo=me.parameters)==null?void 0:Oo.docs)==null?void 0:xo.source}}};var bo,jo,go;de.parameters={...de.parameters,docs:{...(bo=de.parameters)==null?void 0:bo.docs,source:{originalSource:`() => {
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
}`,...(go=(jo=de.parameters)==null?void 0:jo.docs)==null?void 0:go.source}}};const _t=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{_t as __namedExportsOrder,T as basic,se as customClearIcon,pe as customControl,ie as customIcon,ce as customOption,Rt as default,Z as disabledCloseOnBlur,Y as disabledIsClearable,te as isDisabled,ae as isInvalid,re as isOptionDisabled,ue as isOptionFocusable,ne as isReadonly,me as reactHookForm,de as reactHookFormWithDefaultValue,_ as withAllowCreate,E as withAllowFree,N as withBorderColor,X as withCloseOnSelect,J as withComponent,z as withDefaultValue,oe as withDuration,R as withEmptyMessage,G as withFooter,le as withGutter,H as withInsertPositionItem,L as withKeepPlaceholder,U as withMaxSelectValues,ee as withOffset,Q as withOmitSelectedValues,$ as withPlacement,K as withSeparator,q as withSize,B as withVariant};
