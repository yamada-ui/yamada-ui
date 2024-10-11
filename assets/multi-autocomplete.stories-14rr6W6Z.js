import{j as e}from"./extends-CwFRzn3r.js";import{r as M}from"./index-BwDkhjyp.js";import{u as go,C}from"./index.esm-DXPXqkjk.js";import{u as To,A as qo,a as _o,j as Go,b as Bo,c as Se,d as we,e as ye,f as zo,g as Ro,h as l,i as m}from"./use-autocomplete-Couexuz7.js";import{P as Eo,a as Ho}from"./popover-trigger-CiVhXs2R.js";import{P as Ie}from"./portal-DePa0xuj.js";import{f as Mo}from"./forward-ref-BWI-Phbn.js";import{a as No}from"./use-component-style-Dk4hKw8J.js";import{o as Ko}from"./theme-provider-CXgbrDrx.js";import{b as F,c as Co,h as Lo,z as k}from"./factory-uBtAHRUq.js";import{T as Jo}from"./trash2-DC2OHvFc.js";import{V as xe}from"./stack-CekQ0zhE.js";import{B as be}from"./button-DIEsmS57.js";import{T as Fe}from"./tag-BraOchAi.js";import{F as A}from"./form-control-k6ikkRb0.js";import{C as Qo}from"./chevrons-down-Cwlvae7j.js";import{C as Uo}from"./check-BT14JNni.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_fkAghs.js";import"./index-CdVvibsY.js";import"./index-B1JaSA3I.js";import"./index-DSunIB56.js";import"./index-CMM3kl6L.js";import"./index-JkdTfK17.js";import"./icon-fUKD81HD.js";import"./use-var-OedIQrNj.js";import"./close-button-C86qv8Qn.js";import"./use-ripple-B-yka01P.js";import"./factory-BoNL08IU.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-B_1RBE5b.js";import"./index-Dh2DJXhk.js";import"./index-xmsMNee1.js";import"./forward-ref-scR1bmHx.js";import"./utils-CZR-v0D9.js";import"./scale-fade-BS37GZ5e.js";import"./index-E0gn0kzD.js";import"./index-CoJrGj-T.js";import"./index-BySA8SAb.js";import"./index-DQDd-j7z.js";import"./index-Drt3gf4w.js";import"./lucide-icon-BaPFdvmy.js";import"./loading-B8wvkUDD.js";const o=Mo((t,n)=>{const[a,u]=No("MultiAutocomplete",t);let{className:i,children:O,closeOnSelect:d=!1,color:h,component:v,defaultValue:s=[],footer:c,h:P,header:b,height:r,isClearable:pe=!0,keepPlaceholder:x=!1,minH:S,minHeight:me,separator:de,clearIconProps:j,containerProps:w,contentProps:p,createProps:f,emptyProps:y,fieldProps:he,iconProps:ve,inputProps:So,listProps:fe,portalProps:ge={isDisabled:!0},...wo}=Ko(u);const{allowCreate:Ae,computedChildren:yo,descendants:Io,inputValue:Me,isEmpty:Ce,value:g,formControlProps:Oe,getContainerProps:Fo,getFieldProps:Po,getPopoverProps:ko,onClear:Do,onClose:I,...Vo}=To({...wo,children:O,closeOnSelect:d,defaultValue:s});P??(P=r),S??(S=me);const Wo={color:h,h:"fit-content",w:"100%",...a.container};return e.jsx(qo,{value:Io,children:e.jsx(_o,{value:{...Vo,allowCreate:Ae,inputValue:Me,isEmpty:Ce,styles:a,value:g,formControlProps:Oe,onClose:I},children:e.jsx(Eo,{...ko(),children:e.jsxs(F.div,{className:Co("ui-multi-autocomplete",i),__css:Wo,...Fo(w),children:[e.jsxs(F.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(je,{component:v,h:P,keepPlaceholder:x,minH:S,separator:de,inputProps:So,...Po(he,n)}),pe&&g.length?e.jsx(Go,{...j,onClick:Lo(j==null?void 0:j.onClick,Do),...Oe}):e.jsx(Bo,{...ve,...Oe})]}),Ce?e.jsx(Ie,{...ge,children:e.jsx(Se,{footer:k(c,{value:g,onClose:I}),header:k(b,{value:g,onClose:I}),contentProps:p,...fe,children:Ae&&Me?e.jsx(we,{...f}):e.jsx(ye,{...y})})}):e.jsx(Ie,{...ge,children:e.jsxs(Se,{footer:k(c,{value:g,onClose:I}),header:k(b,{value:g,onClose:I}),contentProps:p,...fe,children:[Ae?e.jsx(we,{...f}):e.jsx(ye,{...y}),O??yo]})})]})})})})});o.displayName="MultiAutocomplete";o.__ui__="MultiAutocomplete";const je=Mo(({className:t,component:n,h:a,keepPlaceholder:u,minH:i,placeholder:O,separator:d=",",inputProps:h,...v},s)=>{const{inputRef:c,inputValue:P,isOpen:b,label:r,styles:pe,value:x,onChange:S}=zo(),{getInputProps:me}=Ro(),de=M.useMemo(()=>r!=null&&r.length?n?r.map((w,p)=>{if(!x[p])return null;const f=ve=>{x[p]&&(ve.stopPropagation(),S(x[p]),c.current&&c.current.focus())},y=n({index:p,label:w,value:x[p],onRemove:f}),he={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return y?M.cloneElement(y,{key:p,style:he}):null}):r.map((w,p)=>{const f=r.length===p+1;return e.jsxs(F.span,{display:"inline-block",me:"0.25rem",children:[w,!f||b?d:null]},p)}):null,[r,n,x,S,b,c,d]),j={alignItems:"center",display:"flex",flexWrap:"wrap",h:a,minH:i,pe:"2rem",...pe.field,cursor:"text"};return e.jsx(Ho,{children:e.jsxs(F.div,{className:Co("ui-multi-autocomplete__field",t),py:r!=null&&r.length&&n?"0.125rem":void 0,__css:j,...v,children:[de,e.jsx(F.input,{className:"ui-multi-autocomplete__field__input","aria-label":"Input value","aria-multiselectable":"true",display:"inline-block",flex:"1",marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",minW:"0px",overflow:"hidden",placeholder:!(r!=null&&r.length)||u&&b?O:void 0,...me({...h,value:P},s)})]})})});je.displayName="MultiAutocompleteField";je.__ui__="MultiAutocompleteField";const Bt={component:o,title:"Components / Forms / MultiAutocomplete"},D=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{items:t,placeholder:"キャラクターを選択"})]})},V=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"xs",placeholder:"extra small size"}),e.jsx(o,{size:"sm",placeholder:"small size"}),e.jsx(o,{size:"md",placeholder:"medium size"}),e.jsx(o,{size:"lg",placeholder:"large size"})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),T=()=>{const[t,n]=M.useState([]),a=M.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),u=M.useMemo(()=>a.map(i=>"value"in i?i.value:void 0).filter(i=>i!==void 0),[a]);return e.jsx(o,{footer:({onClose:i})=>e.jsx(xe,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(be,{onClick:()=>{n(u),i()},children:"Set all values"})}),items:a,placeholder:"キャラクターを選択",value:t,onChange:n})},q=()=>e.jsxs(o,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>e.jsxs(o,{emptyMessage:"キャラクターが存在しません",placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowCreate:!0,items:t,placeholder:"キャラクターを選択",onCreate:(n,a)=>console.log("created item",n,"new items",a)})},B=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowFree:!0,items:t,placeholder:"キャラクターを選択",onChange:n=>console.log("new values",n)})},z=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{allowCreate:!0,insertPositionItem:"first",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"last",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"地球人",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:["フリーザ軍","last"],items:t,placeholder:"キャラクターを選択"})]})},R=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),E=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(o,{keepPlaceholder:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{component:({label:t})=>e.jsx(Fe,{children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{component:({label:t,onRemove:n})=>e.jsx(Fe,{onClose:n,children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),K=()=>e.jsxs(o,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),L=()=>e.jsxs(o,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),J=()=>e.jsxs(o,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(o,{isClearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(o,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(o,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(o,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(o,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>e.jsxs(o,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(A,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),te=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ne=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,isFocusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),re=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Jo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Uo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ie=()=>{const[t,n]=M.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},se=()=>{var d,h,v;const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:n,formState:{errors:a},handleSubmit:u,watch:i}=go(),O=s=>console.log("submit:",s);return console.log("watch:",i()),e.jsxs(xe,{as:"form",onSubmit:u(O),children:[e.jsx(A,{errorMessage:(d=a.autocomplete1)==null?void 0:d.message,isInvalid:!!a.autocomplete1,label:"Who is your favorite character?",children:e.jsx(C,{name:"autocomplete1",control:n,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(h=a.autocomplete2)==null?void 0:h.message,isInvalid:!!a.autocomplete2,label:"Who is your favorite character?",children:e.jsx(C,{name:"autocomplete2",control:n,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=a.autocomplete3)==null?void 0:v.message,isInvalid:!!a.autocomplete3,label:"Who is your favorite character?",children:e.jsx(C,{name:"autocomplete3",control:n,render:({field:s})=>e.jsx(o,{placeholder:"キャラクターを選択",...s,items:t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ce=()=>{var h,v,s;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:a,formState:{errors:u},handleSubmit:i,watch:O}=go({defaultValues:t}),d=c=>console.log("submit:",c);return console.log("watch:",O()),e.jsxs(xe,{as:"form",onSubmit:i(d),children:[e.jsx(A,{errorMessage:(h=u.autocomplete1)==null?void 0:h.message,isInvalid:!!u.autocomplete1,label:"Who is your favorite character?",children:e.jsx(C,{name:"autocomplete1",control:a,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=u.autocomplete2)==null?void 0:v.message,isInvalid:!!u.autocomplete2,label:"Who is your favorite character?",children:e.jsx(C,{name:"autocomplete2",control:a,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(s=u.autocomplete3)==null?void 0:s.message,isInvalid:!!u.autocomplete3,label:"Who is your favorite character?",children:e.jsx(C,{name:"autocomplete3",control:a,render:({field:c})=>e.jsx(o,{placeholder:"キャラクターを選択",...c,items:n}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Pe,ke,De;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
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
    }],
    label: "フリーザ軍"
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

      <MultiAutocomplete items={items} placeholder="キャラクターを選択" />
    </>;
}`,...(De=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ve,We,Te;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete size="xs" placeholder="extra small size" />
      <MultiAutocomplete size="sm" placeholder="small size" />
      <MultiAutocomplete size="md" placeholder="medium size" />
      <MultiAutocomplete size="lg" placeholder="large size" />
    </>;
}`,...(Te=(We=V.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var qe,_e,Ge;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Ge=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Be,ze,Re;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
  return <MultiAutocomplete footer={({
    onClose
  }) => <VStack borderColor={["blackAlpha.200", "whiteAlpha.100"]} borderTopWidth="1px" p="2">
          <Button onClick={() => {
      onChange(allValues);
      onClose();
    }}>
            Set all values
          </Button>
        </VStack>} items={items} placeholder="キャラクターを選択" value={value} onChange={onChange} />;
}`,...(Re=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var Ee,He,Ne;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <MultiAutocomplete defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ne=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Ke,Le,Je;_.parameters={..._.parameters,docs:{...(Ke=_.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <MultiAutocomplete emptyMessage="キャラクターが存在しません" placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Je=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;G.parameters={...G.parameters,docs:{...(Qe=G.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
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
    }],
    label: "フリーザ軍"
  }];
  return <MultiAutocomplete allowCreate items={items} placeholder="キャラクターを選択" onCreate={(newItem, newItems) => console.log("created item", newItem, "new items", newItems)} />;
}`,...(Xe=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;B.parameters={...B.parameters,docs:{...(Ye=B.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
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
    }],
    label: "フリーザ軍"
  }];
  return <MultiAutocomplete allowFree items={items} placeholder="キャラクターを選択" onChange={values => console.log("new values", values)} />;
}`,...($e=(Ze=B.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var el,ll,ol;z.parameters={...z.parameters,docs:{...(el=z.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
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
    }],
    label: "フリーザ軍"
  }];
  return <>
      <MultiAutocomplete allowCreate insertPositionItem="first" items={items} placeholder="キャラクターを選択" />
      <MultiAutocomplete allowCreate insertPositionItem="last" items={items} placeholder="キャラクターを選択" />
      <MultiAutocomplete allowCreate insertPositionItem="地球人" items={items} placeholder="キャラクターを選択" />
      <MultiAutocomplete allowCreate insertPositionItem={["フリーザ軍", "last"]} items={items} placeholder="キャラクターを選択" />
    </>;
}`,...(ol=(ll=z.parameters)==null?void 0:ll.docs)==null?void 0:ol.source}}};var tl,nl,al;R.parameters={...R.parameters,docs:{...(tl=R.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
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

      <MultiAutocomplete errorBorderColor="orange.500" isInvalid placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(al=(nl=R.parameters)==null?void 0:nl.docs)==null?void 0:al.source}}};var rl,ul,il;E.parameters={...E.parameters,docs:{...(rl=E.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(il=(ul=E.parameters)==null?void 0:ul.docs)==null?void 0:il.source}}};var sl,cl,pl;H.parameters={...H.parameters,docs:{...(sl=H.parameters)==null?void 0:sl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete keepPlaceholder placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(pl=(cl=H.parameters)==null?void 0:cl.docs)==null?void 0:pl.source}}};var ml,dl,hl;N.parameters={...N.parameters,docs:{...(ml=N.parameters)==null?void 0:ml.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete component={({
      label
    }) => <Tag>{label}</Tag>} placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete component={({
      label,
      onRemove
    }) => <Tag onClose={onRemove}>{label}</Tag>} placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(hl=(dl=N.parameters)==null?void 0:dl.docs)==null?void 0:hl.source}}};var vl,Al,Ol;K.parameters={...K.parameters,docs:{...(vl=K.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete omitSelectedValues placeholder="キャラクターを選択">
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
}`,...(Ol=(Al=K.parameters)==null?void 0:Al.docs)==null?void 0:Ol.source}}};var xl,bl,jl;L.parameters={...L.parameters,docs:{...(xl=L.parameters)==null?void 0:xl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete maxSelectValues={3} placeholder="キャラクターを選択">
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
}`,...(jl=(bl=L.parameters)==null?void 0:bl.docs)==null?void 0:jl.source}}};var fl,gl,Ml;J.parameters={...J.parameters,docs:{...(fl=J.parameters)==null?void 0:fl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnSelect placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ml=(gl=J.parameters)==null?void 0:gl.docs)==null?void 0:Ml.source}}};var Cl,Sl,wl;Q.parameters={...Q.parameters,docs:{...(Cl=Q.parameters)==null?void 0:Cl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete isClearable={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(wl=(Sl=Q.parameters)==null?void 0:Sl.docs)==null?void 0:wl.source}}};var yl,Il,Fl;U.parameters={...U.parameters,docs:{...(yl=U.parameters)==null?void 0:yl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnBlur={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Fl=(Il=U.parameters)==null?void 0:Il.docs)==null?void 0:Fl.source}}};var Pl,kl,Dl;X.parameters={...X.parameters,docs:{...(Pl=X.parameters)==null?void 0:Pl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Dl=(kl=X.parameters)==null?void 0:kl.docs)==null?void 0:Dl.source}}};var Vl,Wl,Tl;Y.parameters={...Y.parameters,docs:{...(Vl=Y.parameters)==null?void 0:Vl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Tl=(Wl=Y.parameters)==null?void 0:Wl.docs)==null?void 0:Tl.source}}};var ql,_l,Gl;Z.parameters={...Z.parameters,docs:{...(ql=Z.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <MultiAutocomplete gutter={32} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Gl=(_l=Z.parameters)==null?void 0:_l.docs)==null?void 0:Gl.source}}};var Bl,zl,Rl;$.parameters={...$.parameters,docs:{...(Bl=$.parameters)==null?void 0:Bl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete duration={0.4} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Rl=(zl=$.parameters)==null?void 0:zl.docs)==null?void 0:Rl.source}}};var El,Hl,Nl;ee.parameters={...ee.parameters,docs:{...(El=ee.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isDisabled placeholder="outline" />
      <MultiAutocomplete variant="filled" isDisabled placeholder="filled" />
      <MultiAutocomplete variant="flushed" isDisabled placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Nl=(Hl=ee.parameters)==null?void 0:Hl.docs)==null?void 0:Nl.source}}};var Kl,Ll,Jl;le.parameters={...le.parameters,docs:{...(Kl=le.parameters)==null?void 0:Kl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isReadOnly placeholder="outline" />
      <MultiAutocomplete variant="filled" isReadOnly placeholder="filled" />
      <MultiAutocomplete variant="flushed" isReadOnly placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Jl=(Ll=le.parameters)==null?void 0:Ll.docs)==null?void 0:Jl.source}}};var Ql,Ul,Xl;oe.parameters={...oe.parameters,docs:{...(Ql=oe.parameters)==null?void 0:Ql.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isInvalid placeholder="outline" />
      <MultiAutocomplete variant="filled" isInvalid placeholder="filled" />
      <MultiAutocomplete variant="flushed" isInvalid placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Xl=(Ul=oe.parameters)==null?void 0:Ul.docs)==null?void 0:Xl.source}}};var Yl,Zl,$l;te.parameters={...te.parameters,docs:{...(Yl=te.parameters)==null?void 0:Yl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption isDisabled value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...($l=(Zl=te.parameters)==null?void 0:Zl.docs)==null?void 0:$l.source}}};var eo,lo,oo;ne.parameters={...ne.parameters,docs:{...(eo=ne.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption isDisabled isFocusable value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(oo=(lo=ne.parameters)==null?void 0:lo.docs)==null?void 0:oo.source}}};var to,no,ao;ae.parameters={...ae.parameters,docs:{...(to=ae.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
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
}`,...(ao=(no=ae.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var ro,uo,io;re.parameters={...re.parameters,docs:{...(ro=re.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(io=(uo=re.parameters)==null?void 0:uo.docs)==null?void 0:io.source}}};var so,co,po;ue.parameters={...ue.parameters,docs:{...(so=ue.parameters)==null?void 0:so.docs,source:{originalSource:`() => {
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
}`,...(po=(co=ue.parameters)==null?void 0:co.docs)==null?void 0:po.source}}};var mo,ho,vo;ie.parameters={...ie.parameters,docs:{...(mo=ie.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(vo=(ho=ie.parameters)==null?void 0:ho.docs)==null?void 0:vo.source}}};var Ao,Oo,xo;se.parameters={...se.parameters,docs:{...(Ao=se.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  interface Data {
    autocomplete1: string[];
    autocomplete2: string[];
    autocomplete3: string[];
  }
  const items: AutocompleteItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
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
    }],
    label: "フリーザ軍"
  }];
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.autocomplete1?.message} isInvalid={!!errors.autocomplete1} label="Who is your favorite character?">
        <Controller name="autocomplete1" control={control} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.autocomplete2?.message} isInvalid={!!errors.autocomplete2} label="Who is your favorite character?">
        <Controller name="autocomplete2" control={control} render={({
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
            </MultiAutocomplete>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.autocomplete3?.message} isInvalid={!!errors.autocomplete3} label="Who is your favorite character?">
        <Controller name="autocomplete3" control={control} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field} items={items} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(xo=(Oo=se.parameters)==null?void 0:Oo.docs)==null?void 0:xo.source}}};var bo,jo,fo;ce.parameters={...ce.parameters,docs:{...(bo=ce.parameters)==null?void 0:bo.docs,source:{originalSource:`() => {
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
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
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
    }],
    label: "フリーザ軍"
  }];
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.autocomplete1?.message} isInvalid={!!errors.autocomplete1} label="Who is your favorite character?">
        <Controller name="autocomplete1" control={control} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </MultiAutocomplete>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.autocomplete2?.message} isInvalid={!!errors.autocomplete2} label="Who is your favorite character?">
        <Controller name="autocomplete2" control={control} render={({
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
            </MultiAutocomplete>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.autocomplete3?.message} isInvalid={!!errors.autocomplete3} label="Who is your favorite character?">
        <Controller name="autocomplete3" control={control} render={({
        field
      }) => <MultiAutocomplete placeholder="キャラクターを選択" {...field} items={items} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fo=(jo=ce.parameters)==null?void 0:jo.docs)==null?void 0:fo.source}}};const zt=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{zt as __namedExportsOrder,D as basic,re as customClearIcon,ie as customControl,ae as customIcon,ue as customOption,Bt as default,U as disabledCloseOnBlur,Q as disabledIsClearable,ee as isDisabled,oe as isInvalid,te as isOptionDisabled,ne as isOptionFocusable,le as isReadonly,se as reactHookForm,ce as reactHookFormWithDefaultValue,G as withAllowCreate,B as withAllowFree,R as withBorderColor,J as withCloseOnSelect,N as withComponent,q as withDefaultValue,$ as withDuration,_ as withEmptyMessage,T as withFooter,Z as withGutter,z as withInsertPositionItem,H as withKeepPlaceholder,L as withMaxSelectValues,Y as withOffset,K as withOmitSelectedValues,X as withPlacement,E as withSeparator,V as withSize,W as withVariant};
