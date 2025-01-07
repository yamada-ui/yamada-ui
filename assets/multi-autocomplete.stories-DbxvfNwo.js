import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as f}from"./index-ClcD9ViR.js";import{u as xo,C as g}from"./index.esm-C-rOWAyx.js";import{u as Vo,A as Wo,a as To,j as qo,b as _o,c as Go,d as ge,e as Me,f as Bo,g as zo,h as l,i as m}from"./use-autocomplete-DlqG3yA3.js";import{P as Ro,a as Eo}from"./popover-trigger-kCg_5LKg.js";import{P as Ho}from"./portal-nz1T67ed.js";import{f as bo}from"./forward-ref-D13m8o2p.js";import{a as No}from"./use-component-style-B--WxH8d.js";import{o as Ko}from"./theme-provider-r-UN7Xzc.js";import{b as w,c as jo,h as Lo,J as Ce}from"./factory-D0ba2aB7.js";import{T as Jo}from"./trash2-DxM6NV1s.js";import{V as Oe}from"./stack-CcCHu966.js";import{B as xe}from"./button-CtWzhuL8.js";import{T as Se}from"./tag-S6Gs-TsW.js";import{d as A}from"./form-control-BjOXh3qv.js";import{C as Qo}from"./chevrons-down-DAwhu8S7.js";import{C as Uo}from"./check-BPq9pEzp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CUCM51Cx.js";import"./index-rZyt8EED.js";import"./index-Dwwrjx8s.js";import"./index-BWwQf8_A.js";import"./index-D0l_ls7Z.js";import"./index-I8sPqzTA.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./slide-fade-B_qqM4fM.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";import"./index-D8fKLhx4.js";import"./index-DGFU5M_O.js";import"./createLucideIcon-C_T9K6g-.js";import"./loading-1q-H-TJ4.js";const o=bo((t,n)=>{const[a,u]=No("MultiAutocomplete",t),{className:i,isClearable:O=!0,clearable:d=O,closeOnSelect:h=!1,color:v,component:s,defaultValue:c=[],footer:ie,height:r,h:M=r,header:se,keepPlaceholder:x=!1,minHeight:y,minH:ce=y,separator:pe,clearIconProps:b,containerProps:C,contentProps:p,createProps:j,emptyProps:S,fieldProps:me,iconProps:de,inputProps:fo,listProps:go,portalProps:Mo={disabled:!0},...Co}=Ko(u),{allowCreate:he,children:So,descendants:wo,empty:je,inputValue:fe,value:I,formControlProps:ve,getContainerProps:yo,getFieldProps:Io,getPopoverProps:Fo,onClear:Po,onClose:Ae,...ko}=Vo({...Co,closeOnSelect:h,defaultValue:c}),Do={color:v,h:"fit-content",w:"100%",...a.container};return e.jsx(Wo,{value:wo,children:e.jsx(To,{value:{...ko,allowCreate:he,empty:je,inputValue:fe,styles:a,value:I,formControlProps:ve,onClose:Ae},children:e.jsx(Ro,{...Fo(),children:e.jsxs(w.div,{className:jo("ui-multi-autocomplete",i),__css:Do,...yo(C),children:[e.jsxs(w.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...a.inner},children:[e.jsx(be,{component:s,h:M,keepPlaceholder:x,minH:ce,separator:pe,inputProps:fo,...Io(me,n)}),d&&I.length?e.jsx(qo,{...b,onClick:Lo(b==null?void 0:b.onClick,Po),...ve}):e.jsx(_o,{...de,...ve})]}),e.jsx(Ho,{...Mo,children:e.jsx(Go,{footer:Ce(ie,{value:I,onClose:Ae}),header:Ce(se,{value:I,onClose:Ae}),contentProps:p,...go,children:je?he&&fe?e.jsx(ge,{...j}):e.jsx(Me,{...S}):e.jsxs(e.Fragment,{children:[he?e.jsx(ge,{...j}):e.jsx(Me,{...S}),So]})})})]})})})})});o.displayName="MultiAutocomplete";o.__ui__="MultiAutocomplete";const be=bo(({className:t,component:n,h:a,keepPlaceholder:u,minH:i,placeholder:O,separator:d=",",inputProps:h,...v},s)=>{const{inputRef:c,inputValue:ie,label:r,open:M,styles:se,value:x,onChange:y}=Bo(),{getInputProps:ce}=zo(),pe=f.useMemo(()=>r!=null&&r.length?n?r.map((C,p)=>{if(!x[p])return null;const j=de=>{x[p]&&(de.stopPropagation(),y(x[p]),c.current&&c.current.focus())},S=n({index:p,label:C,value:x[p],onRemove:j}),me={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return S?f.cloneElement(S,{key:p,style:me}):null}):r.map((C,p)=>{const j=r.length===p+1;return e.jsxs(w.span,{display:"inline-block",me:"0.25rem",children:[C,!j||M?d:null]},p)}):null,[r,n,x,y,M,c,d]),b={alignItems:"center",display:"flex",flexWrap:"wrap",h:a,minH:i,pe:"2rem",...se.field,cursor:"text"};return r!=null&&r.length&&n&&(b.py="0.125rem"),e.jsx(Eo,{children:e.jsxs(w.div,{className:jo("ui-multi-autocomplete__field",t),__css:b,...v,children:[pe,e.jsx(w.input,{className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",minW:"0px",overflow:"hidden",placeholder:!(r!=null&&r.length)||u&&M?O:void 0,...ce({...h,value:ie},s)})]})})});be.displayName="MultiAutocompleteField";be.__ui__="MultiAutocompleteField";const zt={component:o,title:"Components / Forms / MultiAutocomplete"},F=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{items:t,placeholder:"キャラクターを選択"})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"xs",placeholder:"extra small size"}),e.jsx(o,{size:"sm",placeholder:"small size"}),e.jsx(o,{size:"md",placeholder:"medium size"}),e.jsx(o,{size:"lg",placeholder:"large size"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),D=()=>{const[t,n]=f.useState([]),a=f.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),u=f.useMemo(()=>a.map(i=>"value"in i?i.value:void 0).filter(i=>i!==void 0),[a]);return e.jsx(o,{footer:({onClose:i})=>e.jsx(Oe,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(xe,{onClick:()=>{n(u),i()},children:"Set all values"})}),items:a,placeholder:"キャラクターを選択",value:t,onChange:n})},V=()=>e.jsxs(o,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),W=()=>e.jsxs(o,{emptyMessage:"キャラクターが存在しません",placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowCreate:!0,items:t,placeholder:"キャラクターを選択",onCreate:(n,a)=>console.log("created item",n,"new items",a)})},q=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowFree:!0,items:t,placeholder:"キャラクターを選択",onChange:n=>console.log("new values",n)})},_=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{allowCreate:!0,insertPositionItem:"first",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"last",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"地球人",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:["フリーザ軍","last"],items:t,placeholder:"キャラクターを選択"})]})},G=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),B=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(o,{keepPlaceholder:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{component:({label:t})=>e.jsx(Se,{children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{component:({label:t,onRemove:n})=>e.jsx(Se,{onClose:n,children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),E=()=>e.jsxs(o,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),H=()=>e.jsxs(o,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),N=()=>e.jsxs(o,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(o,{isClearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(o,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(o,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(o,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(o,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(o,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(A,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ee=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),le=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,isFocusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),te=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Jo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Uo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ae=()=>{const[t,n]=f.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},re=()=>{var d,h,v;const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:n,formState:{errors:a},handleSubmit:u,watch:i}=xo(),O=s=>console.log("submit:",s);return console.log("watch:",i()),e.jsxs(Oe,{as:"form",onSubmit:u(O),children:[e.jsx(A,{errorMessage:(d=a.autocomplete1)==null?void 0:d.message,isInvalid:!!a.autocomplete1,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete1",control:n,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(h=a.autocomplete2)==null?void 0:h.message,isInvalid:!!a.autocomplete2,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete2",control:n,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=a.autocomplete3)==null?void 0:v.message,isInvalid:!!a.autocomplete3,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete3",control:n,render:({field:s})=>e.jsx(o,{placeholder:"キャラクターを選択",...s,items:t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ue=()=>{var h,v,s;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:a,formState:{errors:u},handleSubmit:i,watch:O}=xo({defaultValues:t}),d=c=>console.log("submit:",c);return console.log("watch:",O()),e.jsxs(Oe,{as:"form",onSubmit:i(d),children:[e.jsx(A,{errorMessage:(h=u.autocomplete1)==null?void 0:h.message,isInvalid:!!u.autocomplete1,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete1",control:a,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=u.autocomplete2)==null?void 0:v.message,isInvalid:!!u.autocomplete2,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete2",control:a,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(s=u.autocomplete3)==null?void 0:s.message,isInvalid:!!u.autocomplete3,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete3",control:a,render:({field:c})=>e.jsx(o,{placeholder:"キャラクターを選択",...c,items:n}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var we,ye,Ie;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Ie=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Fe,Pe,ke;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete size="xs" placeholder="extra small size" />
      <MultiAutocomplete size="sm" placeholder="small size" />
      <MultiAutocomplete size="md" placeholder="medium size" />
      <MultiAutocomplete size="lg" placeholder="large size" />
    </>;
}`,...(ke=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var De,Ve,We;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(We=(Ve=k.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Te,qe,_e;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(_e=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Ge,Be,ze;V.parameters={...V.parameters,docs:{...(Ge=V.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <MultiAutocomplete defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ze=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,Ee,He;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <MultiAutocomplete emptyMessage="キャラクターが存在しません" placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(He=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Ne,Ke,Le;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Le=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var Je,Qe,Ue;q.parameters={...q.parameters,docs:{...(Je=q.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Qe=q.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;_.parameters={..._.parameters,docs:{...(Xe=_.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,el,ll;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(ll=(el=G.parameters)==null?void 0:el.docs)==null?void 0:ll.source}}};var ol,tl,nl;B.parameters={...B.parameters,docs:{...(ol=B.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" separator=";">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(nl=(tl=B.parameters)==null?void 0:tl.docs)==null?void 0:nl.source}}};var al,rl,ul;z.parameters={...z.parameters,docs:{...(al=z.parameters)==null?void 0:al.docs,source:{originalSource:`() => {
  return <MultiAutocomplete keepPlaceholder placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ul=(rl=z.parameters)==null?void 0:rl.docs)==null?void 0:ul.source}}};var il,sl,cl;R.parameters={...R.parameters,docs:{...(il=R.parameters)==null?void 0:il.docs,source:{originalSource:`() => {
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
}`,...(cl=(sl=R.parameters)==null?void 0:sl.docs)==null?void 0:cl.source}}};var pl,ml,dl;E.parameters={...E.parameters,docs:{...(pl=E.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
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
}`,...(dl=(ml=E.parameters)==null?void 0:ml.docs)==null?void 0:dl.source}}};var hl,vl,Al;H.parameters={...H.parameters,docs:{...(hl=H.parameters)==null?void 0:hl.docs,source:{originalSource:`() => {
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
}`,...(Al=(vl=H.parameters)==null?void 0:vl.docs)==null?void 0:Al.source}}};var Ol,xl,bl;N.parameters={...N.parameters,docs:{...(Ol=N.parameters)==null?void 0:Ol.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnSelect placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(bl=(xl=N.parameters)==null?void 0:xl.docs)==null?void 0:bl.source}}};var jl,fl,gl;K.parameters={...K.parameters,docs:{...(jl=K.parameters)==null?void 0:jl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete isClearable={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(gl=(fl=K.parameters)==null?void 0:fl.docs)==null?void 0:gl.source}}};var Ml,Cl,Sl;L.parameters={...L.parameters,docs:{...(Ml=L.parameters)==null?void 0:Ml.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnBlur={false} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Sl=(Cl=L.parameters)==null?void 0:Cl.docs)==null?void 0:Sl.source}}};var wl,yl,Il;J.parameters={...J.parameters,docs:{...(wl=J.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Il=(yl=J.parameters)==null?void 0:yl.docs)==null?void 0:Il.source}}};var Fl,Pl,kl;Q.parameters={...Q.parameters,docs:{...(Fl=Q.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(kl=(Pl=Q.parameters)==null?void 0:Pl.docs)==null?void 0:kl.source}}};var Dl,Vl,Wl;U.parameters={...U.parameters,docs:{...(Dl=U.parameters)==null?void 0:Dl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete gutter={32} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Wl=(Vl=U.parameters)==null?void 0:Vl.docs)==null?void 0:Wl.source}}};var Tl,ql,_l;X.parameters={...X.parameters,docs:{...(Tl=X.parameters)==null?void 0:Tl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete duration={0.4} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(_l=(ql=X.parameters)==null?void 0:ql.docs)==null?void 0:_l.source}}};var Gl,Bl,zl;Y.parameters={...Y.parameters,docs:{...(Gl=Y.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isDisabled placeholder="outline" />
      <MultiAutocomplete variant="filled" isDisabled placeholder="filled" />
      <MultiAutocomplete variant="flushed" isDisabled placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(zl=(Bl=Y.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};var Rl,El,Hl;Z.parameters={...Z.parameters,docs:{...(Rl=Z.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isReadOnly placeholder="outline" />
      <MultiAutocomplete variant="filled" isReadOnly placeholder="filled" />
      <MultiAutocomplete variant="flushed" isReadOnly placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Hl=(El=Z.parameters)==null?void 0:El.docs)==null?void 0:Hl.source}}};var Nl,Kl,Ll;$.parameters={...$.parameters,docs:{...(Nl=$.parameters)==null?void 0:Nl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" isInvalid placeholder="outline" />
      <MultiAutocomplete variant="filled" isInvalid placeholder="filled" />
      <MultiAutocomplete variant="flushed" isInvalid placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Ll=(Kl=$.parameters)==null?void 0:Kl.docs)==null?void 0:Ll.source}}};var Jl,Ql,Ul;ee.parameters={...ee.parameters,docs:{...(Jl=ee.parameters)==null?void 0:Jl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption isDisabled value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ul=(Ql=ee.parameters)==null?void 0:Ql.docs)==null?void 0:Ul.source}}};var Xl,Yl,Zl;le.parameters={...le.parameters,docs:{...(Xl=le.parameters)==null?void 0:Xl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption isDisabled isFocusable value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Zl=(Yl=le.parameters)==null?void 0:Yl.docs)==null?void 0:Zl.source}}};var $l,eo,lo;oe.parameters={...oe.parameters,docs:{...($l=oe.parameters)==null?void 0:$l.docs,source:{originalSource:`() => {
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
}`,...(lo=(eo=oe.parameters)==null?void 0:eo.docs)==null?void 0:lo.source}}};var oo,to,no;te.parameters={...te.parameters,docs:{...(oo=te.parameters)==null?void 0:oo.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2Icon />
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(no=(to=te.parameters)==null?void 0:to.docs)==null?void 0:no.source}}};var ao,ro,uo;ne.parameters={...ne.parameters,docs:{...(ao=ne.parameters)==null?void 0:ao.docs,source:{originalSource:`() => {
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
}`,...(uo=(ro=ne.parameters)==null?void 0:ro.docs)==null?void 0:uo.source}}};var io,so,co;ae.parameters={...ae.parameters,docs:{...(io=ae.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(co=(so=ae.parameters)==null?void 0:so.docs)==null?void 0:co.source}}};var po,mo,ho;re.parameters={...re.parameters,docs:{...(po=re.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
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
}`,...(ho=(mo=re.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};var vo,Ao,Oo;ue.parameters={...ue.parameters,docs:{...(vo=ue.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
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
}`,...(Oo=(Ao=ue.parameters)==null?void 0:Ao.docs)==null?void 0:Oo.source}}};const Rt=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Rt as __namedExportsOrder,F as basic,te as customClearIcon,ae as customControl,oe as customIcon,ne as customOption,zt as default,L as disabledCloseOnBlur,K as disabledIsClearable,Y as isDisabled,$ as isInvalid,ee as isOptionDisabled,le as isOptionFocusable,Z as isReadonly,re as reactHookForm,ue as reactHookFormWithDefaultValue,T as withAllowCreate,q as withAllowFree,G as withBorderColor,N as withCloseOnSelect,R as withComponent,V as withDefaultValue,X as withDuration,W as withEmptyMessage,D as withFooter,U as withGutter,_ as withInsertPositionItem,z as withKeepPlaceholder,H as withMaxSelectValues,Q as withOffset,E as withOmitSelectedValues,J as withPlacement,B as withSeparator,P as withSize,k as withVariant};
