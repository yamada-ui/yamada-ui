import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as f}from"./index-BwPxMuoB.js";import{u as xo,C as g}from"./index.esm-C038jXrr.js";import{u as Wo,A as To,a as qo,j as _o,b as Go,c as Bo,d as ge,e as Me,f as zo,g as Do,h as l,i as m}from"./use-autocomplete-B7zTLTyI.js";import{P as Eo,a as Ho}from"./popover-trigger-Ddfu3ZQC.js";import{P as No}from"./portal-DI5fdtXX.js";import{f as bo}from"./forward-ref-Ukjd1cIW.js";import{a as Ro}from"./use-component-style-CpB_lyT3.js";import{o as Ko}from"./theme-provider-ChqdwXGn.js";import{b as w,c as jo,h as Lo,J as Ce}from"./factory-DbNU74ts.js";import{T as Jo}from"./trash2-CyIzdV2e.js";import{V as Oe}from"./stack-BP8LKMVN.js";import{B as xe}from"./button-CqSjNDtY.js";import{T as Se}from"./tag-D_0IfUVI.js";import{d as A}from"./form-control-DgcE1-oN.js";import{C as Qo}from"./chevrons-down-B8tBw-Jg.js";import{C as Uo}from"./check-DlCKAjBz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DCT-NtcY.js";import"./index-B2an25P7.js";import"./index-BjpHvtnu.js";import"./index-Blkmx9LM.js";import"./index-BEog8ndP.js";import"./index-ZCRYeFYt.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./slide-fade-1DMcLXoE.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-MIa0NvBw.js";import"./index-qZwaV1-B.js";import"./index-tzU5ipaZ.js";import"./index-ZLyktLk6.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./createLucideIcon-D0BTS2fX.js";import"./loading-BVFohscl.js";const o=bo((t,n)=>{const[r,u]=Ro("MultiAutocomplete",t),{className:i,isClearable:O=!0,clearable:d=O,closeOnSelect:h=!1,color:v,component:c,defaultValue:s=[],footer:ie,height:a,h:M=a,header:ce,keepPlaceholder:x=!1,minHeight:y,minH:se=y,separator:pe,clearIconProps:b,containerProps:C,contentProps:p,createProps:j,emptyProps:S,fieldProps:me,iconProps:de,inputProps:fo,listProps:go,portalProps:Mo={disabled:!0},...Co}=Ko(u),{allowCreate:he,children:So,descendants:wo,empty:je,inputValue:fe,value:P,formControlProps:ve,getContainerProps:yo,getFieldProps:Po,getPopoverProps:Fo,onClear:Io,onClose:Ae,...ko}=Wo({...Co,closeOnSelect:h,defaultValue:s}),Vo={color:v,h:"fit-content",w:"100%",...r.container};return e.jsx(To,{value:wo,children:e.jsx(qo,{value:{...ko,allowCreate:he,empty:je,inputValue:fe,styles:r,value:P,formControlProps:ve,onClose:Ae},children:e.jsx(Eo,{...Fo(),children:e.jsxs(w.div,{className:jo("ui-multi-autocomplete",i),__css:Vo,...yo(C),children:[e.jsxs(w.div,{className:"ui-multi-autocomplete__inner",__css:{position:"relative",...r.inner},children:[e.jsx(be,{component:c,h:M,keepPlaceholder:x,minH:se,separator:pe,inputProps:fo,...Po(me,n)}),d&&P.length?e.jsx(_o,{...b,onClick:Lo(b==null?void 0:b.onClick,Io),...ve}):e.jsx(Go,{...de,...ve})]}),e.jsx(No,{...Mo,children:e.jsx(Bo,{footer:Ce(ie,{value:P,onClose:Ae}),header:Ce(ce,{value:P,onClose:Ae}),contentProps:p,...go,children:je?he&&fe?e.jsx(ge,{...j}):e.jsx(Me,{...S}):e.jsxs(e.Fragment,{children:[he?e.jsx(ge,{...j}):e.jsx(Me,{...S}),So]})})})]})})})})});o.displayName="MultiAutocomplete";o.__ui__="MultiAutocomplete";const be=bo(({className:t,component:n,h:r,keepPlaceholder:u,minH:i,placeholder:O,separator:d=",",inputProps:h,...v},c)=>{const{inputRef:s,inputValue:ie,label:a,open:M,styles:ce,value:x,onChange:y}=zo(),{getInputProps:se}=Do(),pe=f.useMemo(()=>a!=null&&a.length?n?a.map((C,p)=>{if(!x[p])return null;const j=de=>{x[p]&&(de.stopPropagation(),y(x[p]),s.current&&s.current.focus())},S=n({index:p,label:C,value:x[p],onRemove:j}),me={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return S?f.cloneElement(S,{key:p,style:me}):null}):a.map((C,p)=>{const j=a.length===p+1;return e.jsxs(w.span,{display:"inline-block",me:"0.25rem",children:[C,!j||M?d:null]},p)}):null,[a,n,x,y,M,s,d]),b={alignItems:"center",display:"flex",flexWrap:"wrap",h:r,minH:i,pe:"2rem",...ce.field,cursor:"text"};return a!=null&&a.length&&n&&(b.py="0.125rem"),e.jsx(Ho,{children:e.jsxs(w.div,{className:jo("ui-multi-autocomplete__field",t),__css:b,...v,children:[pe,e.jsx(w.input,{className:"ui-multi-autocomplete__field__input",display:"inline-block",flex:"1",marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",minW:"0px",overflow:"hidden",placeholder:!(a!=null&&a.length)||u&&M?O:void 0,...se({...h,value:ie},c)})]})})});be.displayName="MultiAutocompleteField";be.__ui__="MultiAutocompleteField";const Et={component:o,title:"Components / Forms / MultiAutocomplete"},F=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(o,{items:t,placeholder:"キャラクターを選択"})]})},I=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"xs",placeholder:"extra small size"}),e.jsx(o,{size:"sm",placeholder:"small size"}),e.jsx(o,{size:"md",placeholder:"medium size"}),e.jsx(o,{size:"lg",placeholder:"large size"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline"}),e.jsx(o,{variant:"filled",placeholder:"filled"}),e.jsx(o,{variant:"flushed",placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled"})]}),V=()=>{const[t,n]=f.useState([]),r=f.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),u=f.useMemo(()=>r.map(i=>"value"in i?i.value:void 0).filter(i=>i!==void 0),[r]);return e.jsx(o,{footer:({onClose:i})=>e.jsx(Oe,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(xe,{onClick:()=>{n(u),i()},children:"Set all values"})}),items:r,placeholder:"キャラクターを選択",value:t,onChange:n})},W=()=>e.jsxs(o,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(o,{emptyMessage:"キャラクターが存在しません",placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),q=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowCreate:!0,items:t,placeholder:"キャラクターを選択",onCreate:(n,r)=>console.log("created item",n,"new items",r)})},_=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsx(o,{allowFree:!0,items:t,placeholder:"キャラクターを選択",onChange:n=>console.log("new values",n)})},G=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{allowCreate:!0,insertPositionItem:"first",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"last",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:"地球人",items:t,placeholder:"キャラクターを選択"}),e.jsx(o,{allowCreate:!0,insertPositionItem:["フリーザ軍","last"],items:t,placeholder:"キャラクターを選択"})]})},B=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"default border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),z=()=>e.jsxs(o,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),D=()=>e.jsxs(o,{keepPlaceholder:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{component:({label:t})=>e.jsx(Se,{children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{component:({label:t,onRemove:n})=>e.jsx(Se,{onClose:n,children:t}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>e.jsxs(o,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),N=()=>e.jsxs(o,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),R=()=>e.jsxs(o,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(o,{clearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(o,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>e.jsxs(o,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(o,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(o,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(o,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(A,{disabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(o,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(o,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(o,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(A,{label:"Which notifications would you like to receive?",readOnly:!0,children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(o,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(o,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(o,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(A,{errorMessage:"This is required.",invalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{placeholder:"Autocomplete notifications"})})]}),ee=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{disabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),le=()=>e.jsxs(o,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{disabled:!0,focusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),te=()=>e.jsxs(o,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Jo,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),ne=()=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(o,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Uo,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),re=()=>{const[t,n]=f.useState(["孫悟空"]);return e.jsxs(o,{placeholder:"キャラクターを選択",value:t,onChange:n,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},ae=()=>{var d,h,v;const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:n,formState:{errors:r},handleSubmit:u,watch:i}=xo(),O=c=>console.log("submit:",c);return console.log("watch:",i()),e.jsxs(Oe,{as:"form",onSubmit:u(O),children:[e.jsx(A,{errorMessage:(d=r.autocomplete1)==null?void 0:d.message,invalid:!!r.autocomplete1,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete1",control:n,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(h=r.autocomplete2)==null?void 0:h.message,invalid:!!r.autocomplete2,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete2",control:n,render:({field:c})=>e.jsxs(o,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=r.autocomplete3)==null?void 0:v.message,invalid:!!r.autocomplete3,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete3",control:n,render:({field:c})=>e.jsx(o,{placeholder:"キャラクターを選択",...c,items:t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ue=()=>{var h,v,c;const t={autocomplete1:["孫悟空"],autocomplete2:["フリーザ"],autocomplete3:["リクーム"]},n=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:r,formState:{errors:u},handleSubmit:i,watch:O}=xo({defaultValues:t}),d=s=>console.log("submit:",s);return console.log("watch:",O()),e.jsxs(Oe,{as:"form",onSubmit:i(d),children:[e.jsx(A,{errorMessage:(h=u.autocomplete1)==null?void 0:h.message,invalid:!!u.autocomplete1,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete1",control:r,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(v=u.autocomplete2)==null?void 0:v.message,invalid:!!u.autocomplete2,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete2",control:r,render:({field:s})=>e.jsxs(o,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(m,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(m,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(A,{errorMessage:(c=u.autocomplete3)==null?void 0:c.message,invalid:!!u.autocomplete3,label:"Who is your favorite character?",children:e.jsx(g,{name:"autocomplete3",control:r,render:({field:s})=>e.jsx(o,{placeholder:"キャラクターを選択",...s,items:n}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var we,ye,Pe;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Pe=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:Pe.source}}};var Fe,Ie,ke;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete size="xs" placeholder="extra small size" />
      <MultiAutocomplete size="sm" placeholder="small size" />
      <MultiAutocomplete size="md" placeholder="medium size" />
      <MultiAutocomplete size="lg" placeholder="large size" />
    </>;
}`,...(ke=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Ve,We,Te;k.parameters={...k.parameters,docs:{...(Ve=k.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" />
      <MultiAutocomplete variant="filled" placeholder="filled" />
      <MultiAutocomplete variant="flushed" placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Te=(We=k.parameters)==null?void 0:We.docs)==null?void 0:Te.source}}};var qe,_e,Ge;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Ge=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Be,ze,De;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <MultiAutocomplete defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(De=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Ee,He,Ne;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <MultiAutocomplete emptyMessage="キャラクターが存在しません" placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ne=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Re,Ke,Le;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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

      <MultiAutocomplete errorBorderColor="orange.500" invalid placeholder="custom border color">
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
}`,...(nl=(tl=z.parameters)==null?void 0:tl.docs)==null?void 0:nl.source}}};var rl,al,ul;D.parameters={...D.parameters,docs:{...(rl=D.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete keepPlaceholder placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(ul=(al=D.parameters)==null?void 0:al.docs)==null?void 0:ul.source}}};var il,cl,sl;E.parameters={...E.parameters,docs:{...(il=E.parameters)==null?void 0:il.docs,source:{originalSource:`() => {
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
}`,...(sl=(cl=E.parameters)==null?void 0:cl.docs)==null?void 0:sl.source}}};var pl,ml,dl;H.parameters={...H.parameters,docs:{...(pl=H.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
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
}`,...(Al=(vl=N.parameters)==null?void 0:vl.docs)==null?void 0:Al.source}}};var Ol,xl,bl;R.parameters={...R.parameters,docs:{...(Ol=R.parameters)==null?void 0:Ol.docs,source:{originalSource:`() => {
  return <MultiAutocomplete closeOnSelect placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(bl=(xl=R.parameters)==null?void 0:xl.docs)==null?void 0:bl.source}}};var jl,fl,gl;K.parameters={...K.parameters,docs:{...(jl=K.parameters)==null?void 0:jl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete clearable={false} placeholder="キャラクターを選択">
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
}`,...(Sl=(Cl=L.parameters)==null?void 0:Cl.docs)==null?void 0:Sl.source}}};var wl,yl,Pl;J.parameters={...J.parameters,docs:{...(wl=J.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Pl=(yl=J.parameters)==null?void 0:yl.docs)==null?void 0:Pl.source}}};var Fl,Il,kl;Q.parameters={...Q.parameters,docs:{...(Fl=Q.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(kl=(Il=Q.parameters)==null?void 0:Il.docs)==null?void 0:kl.source}}};var Vl,Wl,Tl;U.parameters={...U.parameters,docs:{...(Vl=U.parameters)==null?void 0:Vl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete gutter={32} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Tl=(Wl=U.parameters)==null?void 0:Wl.docs)==null?void 0:Tl.source}}};var ql,_l,Gl;X.parameters={...X.parameters,docs:{...(ql=X.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <MultiAutocomplete duration={0.4} placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Gl=(_l=X.parameters)==null?void 0:_l.docs)==null?void 0:Gl.source}}};var Bl,zl,Dl;Y.parameters={...Y.parameters,docs:{...(Bl=Y.parameters)==null?void 0:Bl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" disabled placeholder="outline" />
      <MultiAutocomplete variant="filled" disabled placeholder="filled" />
      <MultiAutocomplete variant="flushed" disabled placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Dl=(zl=Y.parameters)==null?void 0:zl.docs)==null?void 0:Dl.source}}};var El,Hl,Nl;Z.parameters={...Z.parameters,docs:{...(El=Z.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" placeholder="outline" readOnly />
      <MultiAutocomplete variant="filled" placeholder="filled" readOnly />
      <MultiAutocomplete variant="flushed" placeholder="flushed" readOnly />
      <MultiAutocomplete variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="Which notifications would you like to receive?" readOnly>
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Nl=(Hl=Z.parameters)==null?void 0:Hl.docs)==null?void 0:Nl.source}}};var Rl,Kl,Ll;$.parameters={...$.parameters,docs:{...(Rl=$.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
  return <>
      <MultiAutocomplete variant="outline" invalid placeholder="outline" />
      <MultiAutocomplete variant="filled" invalid placeholder="filled" />
      <MultiAutocomplete variant="flushed" invalid placeholder="flushed" />
      <MultiAutocomplete variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." invalid label="Which notifications would you like to receive?">
        <MultiAutocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Ll=(Kl=$.parameters)==null?void 0:Kl.docs)==null?void 0:Ll.source}}};var Jl,Ql,Ul;ee.parameters={...ee.parameters,docs:{...(Jl=ee.parameters)==null?void 0:Jl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption disabled value="ベジータ">
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(Ul=(Ql=ee.parameters)==null?void 0:Ql.docs)==null?void 0:Ul.source}}};var Xl,Yl,Zl;le.parameters={...le.parameters,docs:{...(Xl=le.parameters)==null?void 0:Xl.docs,source:{originalSource:`() => {
  return <MultiAutocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption disabled focusable value="ベジータ">
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
}`,...(no=(to=te.parameters)==null?void 0:to.docs)==null?void 0:no.source}}};var ro,ao,uo;ne.parameters={...ne.parameters,docs:{...(ro=ne.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
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
}`,...(uo=(ao=ne.parameters)==null?void 0:ao.docs)==null?void 0:uo.source}}};var io,co,so;re.parameters={...re.parameters,docs:{...(io=re.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiAutocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </MultiAutocomplete>;
}`,...(so=(co=re.parameters)==null?void 0:co.docs)==null?void 0:so.source}}};var po,mo,ho;ae.parameters={...ae.parameters,docs:{...(po=ae.parameters)==null?void 0:po.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.autocomplete1?.message} invalid={!!errors.autocomplete1} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.autocomplete2?.message} invalid={!!errors.autocomplete2} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.autocomplete3?.message} invalid={!!errors.autocomplete3} label="Who is your favorite character?">
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
}`,...(ho=(mo=ae.parameters)==null?void 0:mo.docs)==null?void 0:ho.source}}};var vo,Ao,Oo;ue.parameters={...ue.parameters,docs:{...(vo=ue.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.autocomplete1?.message} invalid={!!errors.autocomplete1} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.autocomplete2?.message} invalid={!!errors.autocomplete2} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.autocomplete3?.message} invalid={!!errors.autocomplete3} label="Who is your favorite character?">
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
}`,...(Oo=(Ao=ue.parameters)==null?void 0:Ao.docs)==null?void 0:Oo.source}}};const Ht=["basic","withSize","withVariant","withFooter","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","withSeparator","withKeepPlaceholder","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","disabled","readOnly","invalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Ht as __namedExportsOrder,F as basic,te as customClearIcon,re as customControl,oe as customIcon,ne as customOption,Et as default,Y as disabled,K as disabledClearable,L as disabledCloseOnBlur,$ as invalid,ee as isOptionDisabled,le as isOptionFocusable,ae as reactHookForm,ue as reactHookFormWithDefaultValue,Z as readOnly,q as withAllowCreate,_ as withAllowFree,B as withBorderColor,R as withCloseOnSelect,E as withComponent,W as withDefaultValue,X as withDuration,T as withEmptyMessage,V as withFooter,U as withGutter,G as withInsertPositionItem,D as withKeepPlaceholder,N as withMaxSelectValues,Q as withOffset,H as withOmitSelectedValues,J as withPlacement,z as withSeparator,I as withSize,k as withVariant};
