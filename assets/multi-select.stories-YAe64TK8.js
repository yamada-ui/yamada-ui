import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as j}from"./index-ClcD9ViR.js";import{u as El,C as S}from"./index.esm-CEdvtQ_U.js";import{u as rn,S as tn,a as an,f as on,b as sn,c as cn,d as un,O as l,e as d}from"./select-list-Cp0p548w.js";import{P as dn,a as pn}from"./popover-trigger-CprRNq_c.js";import{P as hn}from"./portal-C11kezrD.js";import{f as Nl}from"./forward-ref-D13m8o2p.js";import{a as vn}from"./use-component-style-5HWcAXul.js";import{o as mn}from"./theme-provider-C-TvIt_J.js";import{b as x,c as Al,h as On,C as ue}from"./factory-Db31n_eg.js";import{V as oe}from"./stack-CE6YRnd8.js";import{B as se}from"./button-BDTEGqqa.js";import{T as de}from"./tag-aw8caCsi.js";import{d as m}from"./form-control-DiJsSBY_.js";import{C as xn}from"./chevrons-down-DGiR3uEB.js";import{T as jn}from"./trash2-D0U9Rxol.js";import{C as Sn}from"./check-DF3WXG2D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-coqOwSQu.js";import"./index-BPP3U8Du.js";import"./icon-BfxegGWg.js";import"./use-var-BbJRqi2C.js";import"./index-Hr0uPYc7.js";import"./index-CzwbnnDs.js";import"./index-BzLdmcXo.js";import"./index-D7WKgYAe.js";import"./close-button-D9xdjoDk.js";import"./use-ripple-shOr3g-0.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-BRZ9AYsk.js";import"./slide-fade-BsEH8H2C.js";import"./index-CwhaUW1D.js";import"./index-HHvFIm4v.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-KhqytcjU.js";import"./scale-fade-DAs4TwkQ.js";import"./index-BO2BFO5d.js";import"./index-gGKStiao.js";import"./index-xVP_xMlv.js";import"./index-DKEGRuFP.js";import"./index-ZuzByk-F.js";import"./loading-BptEEwSR.js";import"./createLucideIcon-DHJHrKis.js";const n=Nl((o,a)=>{const[t,i]=vn("MultiSelect",o);let{className:s,closeOnSelect:O=!1,color:p,component:h,defaultValue:v=[],footer:r,h:c,header:ne,height:b,isClearable:M=!0,minH:C,minHeight:y,separator:f,clearIconProps:u,containerProps:g,fieldProps:w,iconProps:re,listProps:te,portalProps:Ll={isDisabled:!0},...$l}=mn(i);const{children:Jl,descendants:Kl,isEmpty:Ql,placeholder:Ul,value:I,formControlProps:ce,getContainerProps:Xl,getFieldProps:Yl,getPopoverProps:Zl,onClear:en,onClose:ae,...ln}=rn({...$l,closeOnSelect:O,defaultValue:v,placeholderInOptions:!1});c??(c=b),C??(C=y);const nn={color:p,h:"fit-content",w:"100%",...t.container};return e.jsx(tn,{value:Kl,children:e.jsx(an,{value:{...ln,placeholder:Ul,styles:t,value:I,onClose:ae},children:e.jsx(dn,{...Zl(),children:e.jsxs(x.div,{className:Al("ui-multi-select",s),__css:nn,...Xl(g),children:[e.jsxs(x.div,{className:"ui-multi-select__inner",__css:{position:"relative",...t.inner},children:[e.jsx(pn,{children:e.jsx(ie,{component:h,h:c,minH:C,separator:f,...Yl(w,a)})}),M&&I.length?e.jsx(on,{...u,onClick:On(u==null?void 0:u.onClick,en),...ce}):e.jsx(sn,{...re,...ce})]}),Ql?null:e.jsx(hn,{...Ll,children:e.jsx(cn,{footer:ue(r,{value:I,onClose:ae}),header:ue(ne,{value:I,onClose:ae}),...te,children:Jl})})]})})})})});n.displayName="MultiSelect";n.__ui__="MultiSelect";const ie=Nl(({className:o,component:a,h:t,isTruncated:i,lineClamp:s=1,minH:O,separator:p=",",...h},v)=>{const{label:r,placeholder:c,styles:ne,value:b,onChange:M}=un(),C=j.useMemo(()=>r!=null&&r.length?a?e.jsx(x.span,{isTruncated:i,lineClamp:s,children:r.map((f,u)=>{const g=te=>{te.stopPropagation(),M(b[u]??"")},w=a({index:u,label:f,value:b[u]??"",onRemove:g}),re={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return w?j.cloneElement(w,{key:u,style:re}):null})}):e.jsx(x.span,{isTruncated:i,lineClamp:s,children:r.map((f,u)=>{const g=r.length===u+1;return e.jsx(x.span,{dangerouslySetInnerHTML:{__html:`${f}${g?"":p}`},display:"inline-block",me:"0.25rem"},u)})}):e.jsx(x.span,{lineClamp:s,children:c}),[r,i,s,M,c,p,a,b]),y={alignItems:"center",display:"flex",h:t,minH:O,pe:"2rem",...ne.field};return r!=null&&r.length&&a&&(y.py="0.125rem"),e.jsx(x.div,{ref:v,className:Al("ui-multi-select__field",o),__css:y,...h,children:C})});ie.displayName="MultiSelectField";ie.__ui__="MultiSelectField";const ur={component:n,title:"Components / Forms / MultiSelect"},F=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(n,{items:o,placeholder:"キャラクターを選択"})]})},D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs",placeholder:"extra small size"}),e.jsx(n,{size:"sm",placeholder:"small size"}),e.jsx(n,{size:"md",placeholder:"medium size"}),e.jsx(n,{size:"lg",placeholder:"large size"})]}),P=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline"}),e.jsx(n,{variant:"filled",placeholder:"filled"}),e.jsx(n,{variant:"flushed",placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled"})]}),V=()=>{const[o,a]=j.useState([]),t=j.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),i=j.useMemo(()=>t.map(s=>"value"in s?s.value:void 0).filter(s=>s!==void 0),[t]);return e.jsx(n,{footer:({onClose:s})=>e.jsx(oe,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(se,{onClick:()=>{a(i),s()},children:"Set all values"})}),items:t,placeholder:"キャラクターを選択",value:o,onChange:a})},k=()=>e.jsxs(n,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"default border color"}),e.jsx(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),T=()=>e.jsxs(n,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{component:({label:o})=>e.jsx(de,{children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{component:({label:o,onRemove:a})=>e.jsx(de,{onClose:a,children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),G=()=>e.jsxs(n,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),_=()=>e.jsxs(n,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),B=()=>e.jsxs(n,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(n,{isClearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(n,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(n,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(n,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(n,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>e.jsxs(n,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(m,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(m,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(m,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),K=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,isFocusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(xn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),X=()=>e.jsxs(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(jn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Sn,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Z=()=>{const[o,a]=j.useState(["孫悟空"]);return e.jsxs(n,{placeholder:"キャラクターを選択",value:o,onChange:a,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},ee=()=>{var p,h,v;const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:a,formState:{errors:t},handleSubmit:i,watch:s}=El(),O=r=>console.log("submit:",r);return console.log("watch:",s()),e.jsxs(oe,{as:"form",onSubmit:i(O),children:[e.jsx(m,{errorMessage:(p=t.select1)==null?void 0:p.message,isInvalid:!!t.select1,label:"Who is your favorite character?",children:e.jsx(S,{name:"select1",control:a,render:({field:r})=>e.jsxs(n,{placeholder:"キャラクターを選択",...r,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(h=t.select2)==null?void 0:h.message,isInvalid:!!t.select2,label:"Who is your favorite character?",children:e.jsx(S,{name:"select2",control:a,render:({field:r})=>e.jsxs(n,{placeholder:"キャラクターを選択",...r,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(v=t.select3)==null?void 0:v.message,isInvalid:!!t.select3,label:"Who is your favorite character?",children:e.jsx(S,{name:"select3",control:a,render:({field:r})=>e.jsx(n,{placeholder:"キャラクターを選択",...r,items:o}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(se,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},le=()=>{var h,v,r;const o={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},a=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:t,formState:{errors:i},handleSubmit:s,watch:O}=El({defaultValues:o}),p=c=>console.log("submit:",c);return console.log("watch:",O()),e.jsxs(oe,{as:"form",onSubmit:s(p),children:[e.jsx(m,{errorMessage:(h=i.select1)==null?void 0:h.message,isInvalid:!!i.select1,label:"Who is your favorite character?",children:e.jsx(S,{name:"select1",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(v=i.select2)==null?void 0:v.message,isInvalid:!!i.select2,label:"Who is your favorite character?",children:e.jsx(S,{name:"select2",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(r=i.select3)==null?void 0:r.message,isInvalid:!!i.select3,label:"Who is your favorite character?",children:e.jsx(S,{name:"select3",control:t,render:({field:c})=>e.jsx(n,{placeholder:"キャラクターを選択",...c,items:a}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(se,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pe,he,ve;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ve=(he=F.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var me,Oe,xe;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect size="xs" placeholder="extra small size" />
      <MultiSelect size="sm" placeholder="small size" />
      <MultiSelect size="md" placeholder="medium size" />
      <MultiSelect size="lg" placeholder="large size" />
    </>;
}`,...(xe=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:xe.source}}};var je,Se,be;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(be=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var fe,ge,Me;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Me=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:Me.source}}};var Ce,ye,we;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <MultiSelect defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(we=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Ie,Fe,De;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(De=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:De.source}}};var Pe,Ve,ke;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ke=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var qe,Te,We;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(We=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ge,_e,Be;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Be=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var ze,Re,He;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(He=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};var Ee,Ne,Ae;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ae=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Le,$e,Je;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <MultiSelect isClearable={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Je=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Ke,Qe,Ue;R.parameters={...R.parameters,docs:{...(Ke=R.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ue=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <MultiSelect maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ze=(Ye=H.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var el,ll,nl;E.parameters={...E.parameters,docs:{...(el=E.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
  return <MultiSelect offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(nl=(ll=E.parameters)==null?void 0:ll.docs)==null?void 0:nl.source}}};var rl,tl,al;N.parameters={...N.parameters,docs:{...(rl=N.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiSelect gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(al=(tl=N.parameters)==null?void 0:tl.docs)==null?void 0:al.source}}};var ol,sl,il;A.parameters={...A.parameters,docs:{...(ol=A.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
  return <MultiSelect duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(il=(sl=A.parameters)==null?void 0:sl.docs)==null?void 0:il.source}}};var cl,ul,dl;L.parameters={...L.parameters,docs:{...(cl=L.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isDisabled placeholder="outline" />
      <MultiSelect variant="filled" isDisabled placeholder="filled" />
      <MultiSelect variant="flushed" isDisabled placeholder="flushed" />
      <MultiSelect variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(dl=(ul=L.parameters)==null?void 0:ul.docs)==null?void 0:dl.source}}};var pl,hl,vl;$.parameters={...$.parameters,docs:{...(pl=$.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isReadOnly placeholder="outline" />
      <MultiSelect variant="filled" isReadOnly placeholder="filled" />
      <MultiSelect variant="flushed" isReadOnly placeholder="flushed" />
      <MultiSelect variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(vl=(hl=$.parameters)==null?void 0:hl.docs)==null?void 0:vl.source}}};var ml,Ol,xl;J.parameters={...J.parameters,docs:{...(ml=J.parameters)==null?void 0:ml.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isInvalid placeholder="outline" />
      <MultiSelect variant="filled" isInvalid placeholder="filled" />
      <MultiSelect variant="flushed" isInvalid placeholder="flushed" />
      <MultiSelect variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(xl=(Ol=J.parameters)==null?void 0:Ol.docs)==null?void 0:xl.source}}};var jl,Sl,bl;K.parameters={...K.parameters,docs:{...(jl=K.parameters)==null?void 0:jl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(bl=(Sl=K.parameters)==null?void 0:Sl.docs)==null?void 0:bl.source}}};var fl,gl,Ml;Q.parameters={...Q.parameters,docs:{...(fl=Q.parameters)==null?void 0:fl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled isFocusable value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ml=(gl=Q.parameters)==null?void 0:gl.docs)==null?void 0:Ml.source}}};var Cl,yl,wl;U.parameters={...U.parameters,docs:{...(Cl=U.parameters)==null?void 0:Cl.docs,source:{originalSource:`() => {
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
}`,...(wl=(yl=U.parameters)==null?void 0:yl.docs)==null?void 0:wl.source}}};var Il,Fl,Dl;X.parameters={...X.parameters,docs:{...(Il=X.parameters)==null?void 0:Il.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2Icon />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Dl=(Fl=X.parameters)==null?void 0:Fl.docs)==null?void 0:Dl.source}}};var Pl,Vl,kl;Y.parameters={...Y.parameters,docs:{...(Pl=Y.parameters)==null?void 0:Pl.docs,source:{originalSource:`() => {
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
}`,...(kl=(Vl=Y.parameters)==null?void 0:Vl.docs)==null?void 0:kl.source}}};var ql,Tl,Wl;Z.parameters={...Z.parameters,docs:{...(ql=Z.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Wl=(Tl=Z.parameters)==null?void 0:Tl.docs)==null?void 0:Wl.source}}};var Gl,_l,Bl;ee.parameters={...ee.parameters,docs:{...(Gl=ee.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
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
}`,...(Bl=(_l=ee.parameters)==null?void 0:_l.docs)==null?void 0:Bl.source}}};var zl,Rl,Hl;le.parameters={...le.parameters,docs:{...(zl=le.parameters)==null?void 0:zl.docs,source:{originalSource:`() => {
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
}`,...(Hl=(Rl=le.parameters)==null?void 0:Rl.docs)==null?void 0:Hl.source}}};const dr=["basic","withSize","withVariant","withFooter","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{dr as __namedExportsOrder,F as basic,X as customClearIcon,Z as customControl,U as customIcon,Y as customOption,ur as default,R as disabledCloseOnBlur,z as disabledIsClearable,L as isDisabled,J as isInvalid,K as isOptionDisabled,Q as isOptionFocusable,$ as isReadonly,ee as reactHookForm,le as reactHookFormWithDefaultValue,q as withBorderColor,B as withCloseOnSelect,W as withComponent,k as withDefaultValue,A as withDuration,V as withFooter,N as withGutter,_ as withMaxSelectValues,E as withOffset,G as withOmitSelectedValues,H as withPlacement,T as withSeparator,D as withSize,P as withVariant};
