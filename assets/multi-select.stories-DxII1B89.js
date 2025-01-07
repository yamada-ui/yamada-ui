import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as S}from"./index-ClcD9ViR.js";import{u as Rl,C as b}from"./index.esm-C-rOWAyx.js";import{u as tn,S as an,a as on,f as sn,b as cn,c as un,d as dn,O as l,e as p}from"./select-list-DTHtP90Y.js";import{P as pn,a as hn}from"./popover-trigger-kCg_5LKg.js";import{P as vn}from"./portal-nz1T67ed.js";import{f as Hl}from"./forward-ref-D13m8o2p.js";import{a as mn}from"./use-component-style-B--WxH8d.js";import{o as On}from"./theme-provider-r-UN7Xzc.js";import{b as x,c as El,h as xn,J as ie}from"./factory-D0ba2aB7.js";import{V as te}from"./stack-CcCHu966.js";import{B as ae}from"./button-CtWzhuL8.js";import{T as ce}from"./tag-S6Gs-TsW.js";import{d as v}from"./form-control-BjOXh3qv.js";import{C as jn}from"./chevrons-down-DAwhu8S7.js";import{T as Sn}from"./trash2-DxM6NV1s.js";import{C as bn}from"./check-BPq9pEzp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D0l_ls7Z.js";import"./index-I8sPqzTA.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";import"./index-CUCM51Cx.js";import"./index-BWwQf8_A.js";import"./index-rZyt8EED.js";import"./index-Dwwrjx8s.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./factory-COvmBIaQ.js";import"./slide-fade-B_qqM4fM.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";import"./index-D8fKLhx4.js";import"./index-DGFU5M_O.js";import"./loading-1q-H-TJ4.js";import"./createLucideIcon-C_T9K6g-.js";const n=Hl((o,t)=>{const[r,s]=mn("MultiSelect",o),{className:i,isClearable:O=!0,clearable:m=O,closeOnSelect:a=!1,color:d,component:c,defaultValue:u=[],footer:M,h:le,header:C,height:f=le,minH:h,minHeight:g=h,separator:y,clearIconProps:j,containerProps:ne,fieldProps:Nl,iconProps:Al,listProps:Ll,portalProps:$l={disabled:!0},...Jl}=On(s),{children:Kl,descendants:Ql,empty:Ul,placeholder:Xl,value:w,formControlProps:se,getContainerProps:Yl,getFieldProps:Zl,getPopoverProps:en,onClear:ln,onClose:re,...nn}=tn({...Jl,closeOnSelect:a,defaultValue:u,placeholderInOptions:!1}),rn={color:d,h:"fit-content",w:"100%",...r.container};return e.jsx(an,{value:Ql,children:e.jsx(on,{value:{...nn,placeholder:Xl,styles:r,value:w,onClose:re},children:e.jsx(pn,{...en(),children:e.jsxs(x.div,{className:El("ui-multi-select",i),__css:rn,...Yl(ne),children:[e.jsxs(x.div,{className:"ui-multi-select__inner",__css:{position:"relative",...r.inner},children:[e.jsx(hn,{children:e.jsx(oe,{component:c,height:f,minHeight:g,separator:y,...Zl(Nl,t)})}),m&&w.length?e.jsx(sn,{...j,onClick:xn(j==null?void 0:j.onClick,ln),...se}):e.jsx(cn,{...Al,...se})]}),Ul?null:e.jsx(vn,{...$l,children:e.jsx(un,{footer:ie(M,{value:w,onClose:re}),header:ie(C,{value:w,onClose:re}),...Ll,children:Kl})})]})})})})});n.displayName="MultiSelect";n.__ui__="MultiSelect";const oe=Hl(({className:o,component:t,isTruncated:r,lineClamp:s=1,separator:i=",",...O},m)=>{const{label:a,placeholder:d,styles:c,value:u,onChange:M}=dn(),le=S.useMemo(()=>a!=null&&a.length?t?e.jsx(x.span,{isTruncated:r,lineClamp:s,children:a.map((f,h)=>{const g=ne=>{ne.stopPropagation(),M(u[h]??"")},y=t({index:h,label:f,value:u[h]??"",onRemove:g}),j={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return y?S.cloneElement(y,{key:h,style:j}):null})}):e.jsx(x.span,{isTruncated:r,lineClamp:s,children:a.map((f,h)=>{const g=a.length===h+1;return e.jsx(x.span,{dangerouslySetInnerHTML:{__html:`${f}${g?"":i}`},display:"inline-block",me:"0.25rem"},h)})}):e.jsx(x.span,{lineClamp:s,children:d}),[a,r,s,M,d,i,t,u]),C={alignItems:"center",display:"flex",pe:"2rem",...c.field};return a!=null&&a.length&&t&&(C.py="0.125rem"),e.jsx(x.div,{ref:m,className:El("ui-multi-select__field",o),__css:C,...O,children:le})});oe.displayName="MultiSelectField";oe.__ui__="MultiSelectField";const dr={component:n,title:"Components / Forms / MultiSelect"},I=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(n,{items:o,placeholder:"キャラクターを選択"})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs",placeholder:"extra small size"}),e.jsx(n,{size:"sm",placeholder:"small size"}),e.jsx(n,{size:"md",placeholder:"medium size"}),e.jsx(n,{size:"lg",placeholder:"large size"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline"}),e.jsx(n,{variant:"filled",placeholder:"filled"}),e.jsx(n,{variant:"flushed",placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled"})]}),P=()=>{const[o,t]=S.useState([]),r=S.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),s=S.useMemo(()=>r.map(i=>"value"in i?i.value:void 0).filter(i=>i!==void 0),[r]);return e.jsx(n,{footer:({onClose:i})=>e.jsx(te,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(ae,{onClick:()=>{t(s),i()},children:"Set all values"})}),items:r,placeholder:"キャラクターを選択",value:o,onChange:t})},V=()=>e.jsxs(n,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"default border color"}),e.jsx(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{component:({label:o})=>e.jsx(ce,{children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{component:({label:o,onRemove:t})=>e.jsx(ce,{onClose:t,children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),W=()=>e.jsxs(n,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),G=()=>e.jsxs(n,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),_=()=>e.jsxs(n,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),B=()=>e.jsxs(n,{isClearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(n,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(n,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(n,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(n,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(n,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(v,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(v,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(v,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),J=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,isFocusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(jn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),U=()=>e.jsxs(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Sn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(bn,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Y=()=>{const[o,t]=S.useState(["孫悟空"]);return e.jsxs(n,{placeholder:"キャラクターを選択",value:o,onChange:t,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},Z=()=>{var m,a,d;const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:t,formState:{errors:r},handleSubmit:s,watch:i}=Rl(),O=c=>console.log("submit:",c);return console.log("watch:",i()),e.jsxs(te,{as:"form",onSubmit:s(O),children:[e.jsx(v,{errorMessage:(m=r.select1)==null?void 0:m.message,isInvalid:!!r.select1,label:"Who is your favorite character?",children:e.jsx(b,{name:"select1",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(a=r.select2)==null?void 0:a.message,isInvalid:!!r.select2,label:"Who is your favorite character?",children:e.jsx(b,{name:"select2",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(d=r.select3)==null?void 0:d.message,isInvalid:!!r.select3,label:"Who is your favorite character?",children:e.jsx(b,{name:"select3",control:t,render:({field:c})=>e.jsx(n,{placeholder:"キャラクターを選択",...c,items:o}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ee=()=>{var a,d,c;const o={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:r,formState:{errors:s},handleSubmit:i,watch:O}=Rl({defaultValues:o}),m=u=>console.log("submit:",u);return console.log("watch:",O()),e.jsxs(te,{as:"form",onSubmit:i(m),children:[e.jsx(v,{errorMessage:(a=s.select1)==null?void 0:a.message,isInvalid:!!s.select1,label:"Who is your favorite character?",children:e.jsx(b,{name:"select1",control:r,render:({field:u})=>e.jsxs(n,{placeholder:"キャラクターを選択",...u,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(d=s.select2)==null?void 0:d.message,isInvalid:!!s.select2,label:"Who is your favorite character?",children:e.jsx(b,{name:"select2",control:r,render:({field:u})=>e.jsxs(n,{placeholder:"キャラクターを選択",...u,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(c=s.select3)==null?void 0:c.message,isInvalid:!!s.select3,label:"Who is your favorite character?",children:e.jsx(b,{name:"select3",control:r,render:({field:u})=>e.jsx(n,{placeholder:"キャラクターを選択",...u,items:t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ue,de,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const items: SelectItem[] = [{
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
      <MultiSelect placeholder="キャラクターを選択">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択">
        <OptionGroup label="地球人">
          <Option value="孫悟空">孫悟空</Option>
          <Option value="孫悟飯">孫悟飯</Option>
          <Option value="クリリン">クリリン</Option>
        </OptionGroup>

        <OptionGroup label="フリーザ軍">
          <Option value="フリーザ">フリーザ</Option>
          <Option value="ギニュー">ギニュー</Option>
          <Option value="リクーム">リクーム</Option>
          <Option value="バータ">バータ</Option>
          <Option value="ジース">ジース</Option>
          <Option value="グルド">グルド</Option>
        </OptionGroup>
      </MultiSelect>

      <MultiSelect items={items} placeholder="キャラクターを選択" />
    </>;
}`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,ve,me;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect size="xs" placeholder="extra small size" />
      <MultiSelect size="sm" placeholder="small size" />
      <MultiSelect size="md" placeholder="medium size" />
      <MultiSelect size="lg" placeholder="large size" />
    </>;
}`,...(me=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var Oe,xe,je;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(je=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Se,be,fe;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>([]);
  const items: SelectItem[] = useMemo(() => [{
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
  return <MultiSelect footer={({
    onClose
  }) => <VStack borderColor={["blackAlpha.200", "whiteAlpha.100"]} borderTopWidth="1px" p="2">
          <Button onClick={() => {
      onChange(allValues);
      onClose();
    }}>
            Set all values
          </Button>
        </VStack>} items={items} placeholder="キャラクターを選択" value={value} onChange={onChange} />;
}`,...(fe=(be=P.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,Me,Ce;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <MultiSelect defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ce=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var ye,we,Ie;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(Ie=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Fe,De,Pe;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Pe=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ve,ke,qe;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect component={({
      label
    }) => <Tag>{label}</Tag>} placeholder="キャラクターを選択">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect component={({
      label,
      onRemove
    }) => <Tag onClose={onRemove}>{label}</Tag>} placeholder="キャラクターを選択">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(qe=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var Te,We,Ge;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <MultiSelect omitSelectedValues placeholder="キャラクターを選択">
      <OptionGroup label="地球人">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="孫悟飯">孫悟飯</Option>
        <Option value="クリリン">クリリン</Option>
      </OptionGroup>

      <OptionGroup label="フリーザ軍">
        <Option value="フリーザ">フリーザ</Option>
        <Option value="ギニュー">ギニュー</Option>
        <Option value="リクーム">リクーム</Option>
        <Option value="バータ">バータ</Option>
        <Option value="ジース">ジース</Option>
        <Option value="グルド">グルド</Option>
      </OptionGroup>
    </MultiSelect>;
}`,...(Ge=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var _e,Be,ze;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <MultiSelect maxSelectValues={3} placeholder="キャラクターを選択">
      <OptionGroup label="地球人">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="孫悟飯">孫悟飯</Option>
        <Option value="クリリン">クリリン</Option>
      </OptionGroup>

      <OptionGroup label="フリーザ軍">
        <Option value="フリーザ">フリーザ</Option>
        <Option value="ギニュー">ギニュー</Option>
        <Option value="リクーム">リクーム</Option>
        <Option value="バータ">バータ</Option>
        <Option value="ジース">ジース</Option>
        <Option value="グルド">グルド</Option>
      </OptionGroup>
    </MultiSelect>;
}`,...(ze=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,He,Ee;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ee=(He=_.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Ne,Ae,Le;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <MultiSelect isClearable={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Le=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var $e,Je,Ke;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ke=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ue,Xe;R.parameters={...R.parameters,docs:{...(Qe=R.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiSelect maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Xe=(Ue=R.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,el;H.parameters={...H.parameters,docs:{...(Ye=H.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiSelect offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(el=(Ze=H.parameters)==null?void 0:Ze.docs)==null?void 0:el.source}}};var ll,nl,rl;E.parameters={...E.parameters,docs:{...(ll=E.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
  return <MultiSelect gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(rl=(nl=E.parameters)==null?void 0:nl.docs)==null?void 0:rl.source}}};var tl,al,ol;N.parameters={...N.parameters,docs:{...(tl=N.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
  return <MultiSelect duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ol=(al=N.parameters)==null?void 0:al.docs)==null?void 0:ol.source}}};var sl,il,cl;A.parameters={...A.parameters,docs:{...(sl=A.parameters)==null?void 0:sl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isDisabled placeholder="outline" />
      <MultiSelect variant="filled" isDisabled placeholder="filled" />
      <MultiSelect variant="flushed" isDisabled placeholder="flushed" />
      <MultiSelect variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(cl=(il=A.parameters)==null?void 0:il.docs)==null?void 0:cl.source}}};var ul,dl,pl;L.parameters={...L.parameters,docs:{...(ul=L.parameters)==null?void 0:ul.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isReadOnly placeholder="outline" />
      <MultiSelect variant="filled" isReadOnly placeholder="filled" />
      <MultiSelect variant="flushed" isReadOnly placeholder="flushed" />
      <MultiSelect variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(pl=(dl=L.parameters)==null?void 0:dl.docs)==null?void 0:pl.source}}};var hl,vl,ml;$.parameters={...$.parameters,docs:{...(hl=$.parameters)==null?void 0:hl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isInvalid placeholder="outline" />
      <MultiSelect variant="filled" isInvalid placeholder="filled" />
      <MultiSelect variant="flushed" isInvalid placeholder="flushed" />
      <MultiSelect variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ml=(vl=$.parameters)==null?void 0:vl.docs)==null?void 0:ml.source}}};var Ol,xl,jl;J.parameters={...J.parameters,docs:{...(Ol=J.parameters)==null?void 0:Ol.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(jl=(xl=J.parameters)==null?void 0:xl.docs)==null?void 0:jl.source}}};var Sl,bl,fl;K.parameters={...K.parameters,docs:{...(Sl=K.parameters)==null?void 0:Sl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled isFocusable value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(fl=(bl=K.parameters)==null?void 0:bl.docs)==null?void 0:fl.source}}};var gl,Ml,Cl;Q.parameters={...Q.parameters,docs:{...(gl=Q.parameters)==null?void 0:gl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      children: <ChevronsDownIcon />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Cl=(Ml=Q.parameters)==null?void 0:Ml.docs)==null?void 0:Cl.source}}};var yl,wl,Il;U.parameters={...U.parameters,docs:{...(yl=U.parameters)==null?void 0:yl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2Icon />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Il=(wl=U.parameters)==null?void 0:wl.docs)==null?void 0:Il.source}}};var Fl,Dl,Pl;X.parameters={...X.parameters,docs:{...(Fl=X.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      icon: <CheckIcon color="green.500" />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Pl=(Dl=X.parameters)==null?void 0:Dl.docs)==null?void 0:Pl.source}}};var Vl,kl,ql;Y.parameters={...Y.parameters,docs:{...(Vl=Y.parameters)==null?void 0:Vl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ql=(kl=Y.parameters)==null?void 0:kl.docs)==null?void 0:ql.source}}};var Tl,Wl,Gl;Z.parameters={...Z.parameters,docs:{...(Tl=Z.parameters)==null?void 0:Tl.docs,source:{originalSource:`() => {
  interface Data {
    select1: string[];
    select2: string[];
    select3: string[];
  }
  const items: SelectItem[] = [{
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
      <FormControl errorMessage={errors.select1?.message} isInvalid={!!errors.select1} label="Who is your favorite character?">
        <Controller name="select1" control={control} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.select2?.message} isInvalid={!!errors.select2} label="Who is your favorite character?">
        <Controller name="select2" control={control} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </MultiSelect>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.select3?.message} isInvalid={!!errors.select3} label="Who is your favorite character?">
        <Controller name="select3" control={control} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field} items={items} />} rules={{
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
}`,...(Gl=(Wl=Z.parameters)==null?void 0:Wl.docs)==null?void 0:Gl.source}}};var _l,Bl,zl;ee.parameters={...ee.parameters,docs:{...(_l=ee.parameters)==null?void 0:_l.docs,source:{originalSource:`() => {
  interface Data {
    select1: string[];
    select2: string[];
    select3: string[];
  }
  const defaultValues: Data = {
    select1: ["孫悟空"],
    select2: ["フリーザ"],
    select3: ["リクーム"]
  };
  const items: SelectItem[] = [{
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
      <FormControl errorMessage={errors.select1?.message} isInvalid={!!errors.select1} label="Who is your favorite character?">
        <Controller name="select1" control={control} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.select2?.message} isInvalid={!!errors.select2} label="Who is your favorite character?">
        <Controller name="select2" control={control} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </MultiSelect>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.select3?.message} isInvalid={!!errors.select3} label="Who is your favorite character?">
        <Controller name="select3" control={control} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field} items={items} />} rules={{
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
}`,...(zl=(Bl=ee.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};const pr=["basic","withSize","withVariant","withFooter","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{pr as __namedExportsOrder,I as basic,U as customClearIcon,Y as customControl,Q as customIcon,X as customOption,dr as default,z as disabledCloseOnBlur,B as disabledIsClearable,A as isDisabled,$ as isInvalid,J as isOptionDisabled,K as isOptionFocusable,L as isReadonly,Z as reactHookForm,ee as reactHookFormWithDefaultValue,k as withBorderColor,_ as withCloseOnSelect,T as withComponent,V as withDefaultValue,N as withDuration,P as withFooter,E as withGutter,G as withMaxSelectValues,H as withOffset,W as withOmitSelectedValues,R as withPlacement,q as withSeparator,F as withSize,D as withVariant};
