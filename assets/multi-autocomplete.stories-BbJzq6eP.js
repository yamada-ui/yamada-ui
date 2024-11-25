import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as f}from"./index-ClcD9ViR.js";import{u as xo,C as g}from"./index.esm-CEdvtQ_U.js";import{u as Vo,A as Wo,a as To,j as qo,b as _o,c as Go,d as ge,e as Me,f as Bo,g as zo,h as l,i as m}from"./use-autocomplete-D_QcwJBQ.js";import{P as Ro,a as Eo}from"./popover-trigger-CbTrSW4y.js";import{P as Ho}from"./portal-PrQSTmZ0.js";import{f as bo}from"./forward-ref-D13m8o2p.js";import{a as No}from"./use-component-style-BGLOU3Ga.js";import{o as Ko}from"./theme-provider-DMHFYkuw.js";import{b as y,c as jo,h as Lo,C as Ce}from"./factory-Cp1Ju9mN.js";import{T as Jo}from"./trash2-DS7ypko0.js";import{V as Oe}from"./stack-oDGa6EY5.js";import{B as xe}from"./button-vnBqyEiG.js";import{T as Se}from"./tag-DwYnYzUN.js";import{d as A}from"./form-control-C2QLAsqZ.js";import{C as Qo}from"./chevrons-down-Dzk6BYiX.js";import{C as Uo}from"./check-fx4QBfJy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B2Nxc2b_.js";import"./index-DeQ1wXyQ.js";import"./index-DVuKitli.js";import"./index-5lzM9kKl.js";import"./index-Zd4KnGXX.js";import"./index-C2FBWOq2.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";import"./close-button-KaaR9e9n.js";import"./use-ripple-SSdhQaN8.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./slide-fade-Sj6o3YZF.js";import"./index-BoHnpcSs.js";import"./index-DM7U-nMi.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CehLRonx.js";import"./scale-fade-BQQzZXA1.js";import"./index-CilJ2bIs.js";import"./index-gGKStiao.js";import"./index-BDaUJiBA.js";import"./index-BMJcaCPC.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DHJHrKis.js";import"./loading-DkRHwhPr.js";const o=bo((t,n)=>{const[a,u]=No("MultiAutocomplete",t);let{className:i,clearable:O,closeOnSelect:d=!1,color:h,component:v,defaultValue:s=[],footer:c,h:I,header:M,height:r,isClearable:se=!0,keepPlaceholder:x=!1,minH:C,minHeight:ce,separator:pe,clearIconProps:b,containerProps:S,contentProps:p,createProps:j,emptyProps:w,fieldProps:me,iconProps:de,inputProps:fo,listProps:go,portalProps:Mo={isDisabled:!0},...Co}=Ko(u);const{allowCreate:he,children:So,descendants:wo,inputValue:je,isEmpty:fe,value:F,formControlProps:ve,getContainerProps:yo,getFieldProps:Io,getPopoverProps:Fo,onClear:Po,onClose:Ae,...ko}=Vo({...Co,closeOnSelect:d,defaultValue:s});I??(I=r),C??(C=ce),O??(O=se);const Do={color:h,h:"fit-content",w:"100%",...a.container};return e.jsx(Wo,{value:wo,children:e.jsx(To,{value:{...ko,allowCreate:he,inputValue:je,isEmpty:fe,styles:a,value:F,formControlProps:ve,onClose:Ae},children:e.jsx(Ro,{...Fo(),children:e.jsxs(y.div,{className:jo("ui-multi-autocomplete",i),__css:Do,...yo(S),children:[e.jsxs(y.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(be,{component:v,h:I,keepPlaceholder:x,minH:C,separator:pe,inputProps:fo,...Io(me,n)}),O&&F.length?e.jsx(qo,{...b,onClick:Lo(b==null?void 0:b.onClick,Po),...ve}):e.jsx(_o,{...de,...ve})]}),e.jsx(Ho,{...Mo,children:e.jsx(Go,{footer:Ce(c,{value:F,onClose:Ae}),header:Ce(M,{value:F,onClose:Ae}),contentProps:p,...go,children:fe?he&&je?e.jsx(ge,{...j}):e.jsx(Me,{...w}):e.jsxs(e.Fragment,{children:[he?e.jsx(ge,{...j}):e.jsx(Me,{...w}),So]})})})]})})})})});o.displayName="MultiAutocomplete";o.__ui__="MultiAutocomplete";const be=bo(({className:t,component:n,h:a,keepPlaceholder:u,minH:i,placeholder:O,separator:d=",",inputProps:h,...v},s)=>{const{inputRef:c,inputValue:I,isOpen:M,label:r,styles:se,value:x,onChange:C}=Bo(),{getInputProps:ce}=zo(),pe=f.useMemo(()=>r!=null&&r.length?n?r.map((S,p)=>{if(!x[p])return null;const j=de=>{x[p]&&(de.stopPropagation(),C(x[p]),c.current&&c.current.focus())},w=n({index:p,label:S,value:x[p],onRemove:j}),me={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return w?f.cloneElement(w,{key:p,style:me}):null}):r.map((S,p)=>{const j=r.length===p+1;return e.jsxs(y.span,{display:"inline-block",me:"0.25rem",children:[S,!j||M?d:null]},p)}):null,[r,n,x,C,M,c,d]),b={alignItems:"center",display:"flex",flexWrap:"wrap",h:a,minH:i,pe:"2rem",...se.field,cursor:"text"};return r!=null&&r.length&&n&&(b.py="0.125rem"),e.jsx(Eo,{children:e.jsxs(y.div,{className:jo("ui-multi-autocomplete__field",t),__css:b,...v,children:[pe,e.jsx(y.input,{className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",minW:"0px",overflow:"hidden",placeholder:!(r!=null&&r.length)||u&&M?O:void 0,...ce({...h,value:I},s)})]})})});be.displayName="MultiAutocompleteField";be.__ui__="MultiAutocompleteField";const zt={component:o,title:"Components / Forms / MultiAutocomplete"},P=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{items:t,placeholder:"キャラクターを選択"})]})},k=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"xs",placeholder:"extra small size"}),e.jsx(o,{size:"sm",placeholder:"small size"}),e.jsx(o,{size:"md",placeholder:"medium size"}),e.jsx(o,{size:"lg",placeholder:"large size"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),V=()=>{const[t,n]=f.useState([]),a=f.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),u=f.useMemo(()=>a.map(i=>"value"in i?i.value:void 0).filter(i=>i!==void 0),[a]);return e.jsx(o,{footer:({onClose:i})=>e.jsx(Oe,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(xe,{onClick:()=>{n(u),i()},children:"Set all values"})}),items:a,placeholder:"キャラクターを選択",value:t,onChange:n})},W=()=>e.jsxs(o,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(o,{emptyMessage:"キャラクターが存在しません",placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),q=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowCreate:!0,items:t,placeholder:"キャラクターを選択",onCreate:(n,a)=>console.log("created item",n,"new items",a)})},_=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowFree:!0,items:t,placeholder:"キャラクターを選択",onChange:n=>console.log("new values",n)})},G=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{allowCreate:!0,insertPositionItem:"first",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"last",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"地球人",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:["フリーザ軍","last"],items:t,placeholder:"キャラクターを選択"})]})},B=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(o,{keepPlaceholder:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{component:({label:t})=>e.jsx(Se,{children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{component:({label:t,onRemove:n})=>e.jsx(Se,{onClose:n,children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>e.jsxs(o,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),N=()=>e.jsxs(o,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),K=()=>e.jsxs(o,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(o,{isClearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(o,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(o,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(o,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(o,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(o,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(A,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),le=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,isFocusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),te=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ne=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Jo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Uo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),re=()=>{const[t,n]=f.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},ue=()=>{var d,h,v;const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:n,formState:{errors:a},handleSubmit:u,watch:i}=xo(),O=s=>console.log("submit:",s);return console.log("watch:",i()),e.jsxs(Oe,{as:"form",onSubmit:u(O),children:[e.jsx(A,{errorMessage:(d=a.autocomplete1)==null?void 0:d.message,isInvalid:!!a.autocomplete1,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete1",control:n,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(h=a.autocomplete2)==null?void 0:h.message,isInvalid:!!a.autocomplete2,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete2",control:n,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=a.autocomplete3)==null?void 0:v.message,isInvalid:!!a.autocomplete3,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete3",control:n,render:({field:s})=>e.jsx(o,{placeholder:"キャラクターを選択",...s,items:t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ie=()=>{var h,v,s;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:a,formState:{errors:u},handleSubmit:i,watch:O}=xo({defaultValues:t}),d=c=>console.log("submit:",c);return console.log("watch:",O()),e.jsxs(Oe,{as:"form",onSubmit:i(d),children:[e.jsx(A,{errorMessage:(h=u.autocomplete1)==null?void 0:h.message,isInvalid:!!u.autocomplete1,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete1",control:a,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=u.autocomplete2)==null?void 0:v.message,isInvalid:!!u.autocomplete2,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete2",control:a,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(s=u.autocomplete3)==null?void 0:s.message,isInvalid:!!u.autocomplete3,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete3",control:a,render:({field:c})=>e.jsx(o,{placeholder:"キャラクターを選択",...c,items:n}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var we,ye,Ie;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Ie=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Fe,Pe,ke;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete size="xs" placeholder="extra small size" />
      <MultiAutocomplete size="sm" placeholder="small size" />
      <MultiAutocomplete size="md" placeholder="medium size" />
      <MultiAutocomplete size="lg" placeholder="large size" />
    </>;
}`,...(ke=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var De,Ve,We;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(We=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Te,qe,_e;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(_e=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Ge,Be,ze;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <MultiAutocomplete defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ze=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,Ee,He;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <MultiAutocomplete emptyMessage="キャラクターが存在しません" placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(He=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Ne,Ke,Le;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Le=(Ke=q.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Je,Qe,Ue;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,el,ll;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(ll=(el=B.parameters)==null?void 0:el.docs)==null?void 0:ll.source}}};var ol,tl,nl;z.parameters={...z.parameters,docs:{...(ol=z.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(nl=(tl=z.parameters)==null?void 0:tl.docs)==null?void 0:nl.source}}};var al,rl,ul;R.parameters={...R.parameters,docs:{...(al=R.parameters)==null?void 0:al.docs,source:{originalSource:`() => {
  return <MultiAutocomplete keepPlaceholder placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ul=(rl=R.parameters)==null?void 0:rl.docs)==null?void 0:ul.source}}};var il,sl,cl;E.parameters={...E.parameters,docs:{...(il=E.parameters)==null?void 0:il.docs,source:{originalSource:`() => {
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
}`,...(cl=(sl=E.parameters)==null?void 0:sl.docs)==null?void 0:cl.source}}};var pl,ml,dl;H.parameters={...H.parameters,docs:{...(pl=H.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
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
}`,...(dl=(ml=H.parameters)==null?void 0:ml.docs)==null?void 0:dl.source}}};var hl,vl,Al;N.parameters={...N.parameters,docs:{...(hl=N.parameters)==null?void 0:hl.docs,source:{originalSource:`() => {
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
}`,...(Al=(vl=N.parameters)==null?void 0:vl.docs)==null?void 0:Al.source}}};var Ol,xl,bl;K.parameters={...K.parameters,docs:{...(Ol=K.parameters)==null?void 0:Ol.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnSelect placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(bl=(xl=K.parameters)==null?void 0:xl.docs)==null?void 0:bl.source}}};var jl,fl,gl;L.parameters={...L.parameters,docs:{...(jl=L.parameters)==null?void 0:jl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete isClearable={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(gl=(fl=L.parameters)==null?void 0:fl.docs)==null?void 0:gl.source}}};var Ml,Cl,Sl;J.parameters={...J.parameters,docs:{...(Ml=J.parameters)==null?void 0:Ml.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnBlur={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Sl=(Cl=J.parameters)==null?void 0:Cl.docs)==null?void 0:Sl.source}}};var wl,yl,Il;Q.parameters={...Q.parameters,docs:{...(wl=Q.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Il=(yl=Q.parameters)==null?void 0:yl.docs)==null?void 0:Il.source}}};var Fl,Pl,kl;U.parameters={...U.parameters,docs:{...(Fl=U.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(kl=(Pl=U.parameters)==null?void 0:Pl.docs)==null?void 0:kl.source}}};var Dl,Vl,Wl;X.parameters={...X.parameters,docs:{...(Dl=X.parameters)==null?void 0:Dl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete gutter={32} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Wl=(Vl=X.parameters)==null?void 0:Vl.docs)==null?void 0:Wl.source}}};var Tl,ql,_l;Y.parameters={...Y.parameters,docs:{...(Tl=Y.parameters)==null?void 0:Tl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete duration={0.4} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(_l=(ql=Y.parameters)==null?void 0:ql.docs)==null?void 0:_l.source}}};var Gl,Bl,zl;Z.parameters={...Z.parameters,docs:{...(Gl=Z.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isDisabled placeholder="outline" />
      <MultiAutocomplete variant="filled" isDisabled placeholder="filled" />
      <MultiAutocomplete variant="flushed" isDisabled placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(zl=(Bl=Z.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};var Rl,El,Hl;$.parameters={...$.parameters,docs:{...(Rl=$.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isReadOnly placeholder="outline" />
      <MultiAutocomplete variant="filled" isReadOnly placeholder="filled" />
      <MultiAutocomplete variant="flushed" isReadOnly placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Hl=(El=$.parameters)==null?void 0:El.docs)==null?void 0:Hl.source}}};var Nl,Kl,Ll;ee.parameters={...ee.parameters,docs:{...(Nl=ee.parameters)==null?void 0:Nl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isInvalid placeholder="outline" />
      <MultiAutocomplete variant="filled" isInvalid placeholder="filled" />
      <MultiAutocomplete variant="flushed" isInvalid placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Ll=(Kl=ee.parameters)==null?void 0:Kl.docs)==null?void 0:Ll.source}}};var Jl,Ql,Ul;le.parameters={...le.parameters,docs:{...(Jl=le.parameters)==null?void 0:Jl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption isDisabled value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ul=(Ql=le.parameters)==null?void 0:Ql.docs)==null?void 0:Ul.source}}};var Xl,Yl,Zl;oe.parameters={...oe.parameters,docs:{...(Xl=oe.parameters)==null?void 0:Xl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption isDisabled isFocusable value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Zl=(Yl=oe.parameters)==null?void 0:Yl.docs)==null?void 0:Zl.source}}};var $l,eo,lo;te.parameters={...te.parameters,docs:{...($l=te.parameters)==null?void 0:$l.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" iconProps={{
      children: <ChevronsDownIcon />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(lo=(eo=te.parameters)==null?void 0:eo.docs)==null?void 0:lo.source}}};var oo,to,no;ne.parameters={...ne.parameters,docs:{...(oo=ne.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2Icon />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(no=(to=ne.parameters)==null?void 0:to.docs)==null?void 0:no.source}}};var ao,ro,uo;ae.parameters={...ae.parameters,docs:{...(ao=ae.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder="キャラクターを選択" optionProps={{
      icon: <CheckIcon color="green.500" />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>;
}`,...(uo=(ro=ae.parameters)==null?void 0:ro.docs)==null?void 0:uo.source}}};var io,so,co;re.parameters={...re.parameters,docs:{...(io=re.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(co=(so=re.parameters)==null?void 0:so.docs)==null?void 0:co.source}}};var po,mo,ho;ue.parameters={...ue.parameters,docs:{...(po=ue.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
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
}`,...(ho=(mo=ue.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};var vo,Ao,Oo;ie.parameters={...ie.parameters,docs:{...(vo=ie.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
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
}`,...(Oo=(Ao=ie.parameters)==null?void 0:Ao.docs)==null?void 0:Oo.source}}};const Rt=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Rt as __namedExportsOrder,P as basic,ne as customClearIcon,re as customControl,te as customIcon,ae as customOption,zt as default,J as disabledCloseOnBlur,L as disabledIsClearable,Z as isDisabled,ee as isInvalid,le as isOptionDisabled,oe as isOptionFocusable,$ as isReadonly,ue as reactHookForm,ie as reactHookFormWithDefaultValue,q as withAllowCreate,_ as withAllowFree,B as withBorderColor,K as withCloseOnSelect,E as withComponent,W as withDefaultValue,Y as withDuration,T as withEmptyMessage,V as withFooter,X as withGutter,G as withInsertPositionItem,R as withKeepPlaceholder,N as withMaxSelectValues,U as withOffset,H as withOmitSelectedValues,Q as withPlacement,z as withSeparator,k as withSize,D as withVariant};