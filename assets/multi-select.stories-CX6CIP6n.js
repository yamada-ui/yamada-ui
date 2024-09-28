import{j as e}from"./extends-CwFRzn3r.js";import{r as b}from"./index-BwDkhjyp.js";import{u as Xl,C as S}from"./index.esm-DXPXqkjk.js";import{O as l,a as d,u as On,S as xn,b as jn,f as bn,c as Sn,d as fn,e as gn}from"./select-list-Dl92l1Le.js";import{P as Mn,a as Cn}from"./popover-content-C9K0DE-R.js";import{P as yn}from"./portal-DfxMOg4r.js";import{f as Yl}from"./forward-ref-BWI-Phbn.js";import{a as wn}from"./use-component-style-CfUS8Ki1.js";import{o as Fn}from"./theme-provider-BZKkW4ID.js";import{p as In,b as x,c as Zl,h as Dn,z as be}from"./factory-CYpx3TMG.js";import{V as de}from"./stack-C8qilfIS.js";import{B as pe}from"./button-Bx26J9Y6.js";import{T as Se}from"./tag-B-awimjx.js";import{F as m}from"./form-control-DTumWR9y.js";import{C as Pn}from"./chevrons-down-DXUMrte6.js";import{T as Vn}from"./trash2-CHTDpusJ.js";import{C as kn}from"./check-D169AQv0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CIt0OHe7.js";import"./index-DEy_TXYI.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";import"./index-tU9OGY6h.js";import"./index-C1nnoSu4.js";import"./index-CFjuI6Rx.js";import"./index-DHvgXC6C.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";import"./index-B8XB3FuZ.js";import"./loading-DndL1UZp.js";import"./lucide-icon-cfLZgeB_.js";const n=Yl((o,a)=>{const[i,u]=wn("MultiSelect",o);let{className:r,defaultValue:c=[],component:O,separator:p,isClearable:h=!0,items:s=[],color:t,h:f,height:C,minH:y,minHeight:re,closeOnSelect:te=!1,containerProps:g,listProps:v,fieldProps:M,iconProps:w,clearIconProps:j,portalProps:ae={isDisabled:!0},header:en,footer:ln,children:ve,...nn}=Fn(u);const me=In(ve);let oe=[];!me.length&&s.length&&(oe=s.map((I,je)=>{if("value"in I){const{label:ie,value:ce,...ue}=I;return e.jsx(l,{value:ce,...ue,children:ie},je)}else if("items"in I){const{label:ie,items:ce=[],...ue}=I;return e.jsx(d,{label:ie??"",...ue,children:ce.map(({label:pn,value:hn,...vn},mn)=>e.jsx(l,{value:hn,...vn,children:pn},mn))},je)}}).filter(Boolean));let Oe=!me.length&&!oe.length;const{value:F,onClose:se,descendants:rn,formControlProps:xe,getPopoverProps:tn,getContainerProps:an,getFieldProps:on,placeholder:sn,onClear:cn,...un}=On({...nn,defaultValue:c,placeholderInOptions:!1,closeOnSelect:te,isEmpty:Oe});f??(f=C),y??(y=re);const dn={w:"100%",h:"fit-content",color:t,...i.container};return e.jsx(xn,{value:rn,children:e.jsx(jn,{value:{...un,value:F,onClose:se,placeholder:sn,styles:i},children:e.jsx(Mn,{...tn(),children:e.jsxs(x.div,{className:Zl("ui-multi-select",r),__css:dn,...an(g),children:[e.jsxs(x.div,{className:"ui-multi-select__inner",__css:{position:"relative",...i.inner},children:[e.jsx(Cn,{children:e.jsx(he,{component:O,separator:p,h:f,minH:y,...on(M,a)})}),h&&F.length?e.jsx(bn,{...j,onClick:Dn(j==null?void 0:j.onClick,cn),...xe}):e.jsx(Sn,{...w,...xe})]}),Oe?null:e.jsx(yn,{...ae,children:e.jsx(fn,{header:be(en,{value:F,onClose:se}),footer:be(ln,{value:F,onClose:se}),...v,children:ve??oe})})]})})})})});n.displayName="MultiSelect";n.__ui__="MultiSelect";const he=Yl(({className:o,component:a,separator:i=",",isTruncated:u,lineClamp:r=1,h:c,minH:O,...p},h)=>{const{value:s,label:t,onChange:f,placeholder:C,styles:y}=gn(),re=b.useMemo(()=>t!=null&&t.length?a?e.jsx(x.span,{isTruncated:u,lineClamp:r,children:t.map((g,v)=>{const M=ae=>{ae.stopPropagation(),f(s[v])},w=a({value:s[v],label:g,index:v,onRemove:M}),j={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return w?b.cloneElement(w,{key:v,style:j}):null})}):e.jsx(x.span,{isTruncated:u,lineClamp:r,children:t.map((g,v)=>{const M=t.length===v+1;return e.jsx(x.span,{display:"inline-block",me:"0.25rem",dangerouslySetInnerHTML:{__html:`${g}${M?"":i}`}},v)})}):e.jsx(x.span,{lineClamp:r,children:C}),[t,u,r,f,C,i,a,s]),te={pe:"2rem",h:c,minH:O,display:"flex",alignItems:"center",...y.field};return e.jsx(x.div,{ref:h,className:Zl("ui-multi-select__field",o),__css:te,py:t!=null&&t.length&&a?"0.125rem":void 0,...p,children:re})});he.displayName="MultiSelectField";he.__ui__="MultiSelectField";const gr={title:"Components / Forms / MultiSelect",component:n},D=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(n,{placeholder:"キャラクターを選択",items:o})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"extra small size",size:"xs"}),e.jsx(n,{placeholder:"small size",size:"sm"}),e.jsx(n,{placeholder:"medium size",size:"md"}),e.jsx(n,{placeholder:"large size",size:"lg"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline"}),e.jsx(n,{variant:"filled",placeholder:"filled"}),e.jsx(n,{variant:"flushed",placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>{const[o,a]=b.useState([]),i=b.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),u=b.useMemo(()=>i.map(r=>"value"in r?r.value:void 0).filter(r=>r!==void 0),[i]);return e.jsx(n,{value:o,onChange:a,placeholder:"キャラクターを選択",footer:({onClose:r})=>e.jsx(de,{borderTopWidth:"1px",borderColor:["blackAlpha.200","whiteAlpha.100"],p:"2",children:e.jsx(pe,{onClick:()=>{a(u),r()},children:"Set all values"})}),items:i})},q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"default border color"}),e.jsx(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),W=()=>e.jsxs(n,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",component:({label:o})=>e.jsx(Se,{children:o}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",component:({label:o,onRemove:a})=>e.jsx(Se,{onClose:a,children:o}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),_=()=>e.jsxs(n,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),B=()=>e.jsxs(n,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),z=()=>e.jsxs(n,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(n,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(n,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(n,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(n,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>e.jsxs(n,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(n,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(n,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(n,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(n,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(n,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(n,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(n,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(n,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(n,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(n,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(n,{placeholder:"Select notifications"})})]}),Q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Pn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Y=()=>e.jsxs(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Vn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(kn,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ee=()=>{const[o,a]=b.useState(["孫悟空"]);return e.jsxs(n,{placeholder:"キャラクターを選択",value:o,onChange:a,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},le=()=>{var O,p,h;const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:i,watch:u,formState:{errors:r}}=Xl(),c=s=>console.log("submit:",s);return console.log("watch:",u()),e.jsxs(de,{as:"form",onSubmit:i(c),children:[e.jsx(m,{isInvalid:!!r.select1,label:"Who is your favorite character?",errorMessage:(O=r.select1)==null?void 0:O.message,children:e.jsx(S,{name:"select1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(n,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(m,{isInvalid:!!r.select2,label:"Who is your favorite character?",errorMessage:(p=r.select2)==null?void 0:p.message,children:e.jsx(S,{name:"select2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(n,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(m,{isInvalid:!!r.select3,label:"Who is your favorite character?",errorMessage:(h=r.select3)==null?void 0:h.message,children:e.jsx(S,{name:"select3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsx(n,{placeholder:"キャラクターを選択",...s,items:o})})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ne=()=>{var p,h,s;const o={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},a=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:i,handleSubmit:u,watch:r,formState:{errors:c}}=Xl({defaultValues:o}),O=t=>console.log("submit:",t);return console.log("watch:",r()),e.jsxs(de,{as:"form",onSubmit:u(O),children:[e.jsx(m,{isInvalid:!!c.select1,label:"Who is your favorite character?",errorMessage:(p=c.select1)==null?void 0:p.message,children:e.jsx(S,{name:"select1",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e.jsxs(n,{placeholder:"キャラクターを選択",...t,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(m,{isInvalid:!!c.select2,label:"Who is your favorite character?",errorMessage:(h=c.select2)==null?void 0:h.message,children:e.jsx(S,{name:"select2",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e.jsxs(n,{placeholder:"キャラクターを選択",...t,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(m,{isInvalid:!!c.select3,label:"Who is your favorite character?",errorMessage:(s=c.select3)==null?void 0:s.message,children:e.jsx(S,{name:"select3",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e.jsx(n,{placeholder:"キャラクターを選択",...t,items:a})})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,ge,Me;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const items: SelectItem[] = [{
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

      <MultiSelect placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(Me=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:Me.source}}};var Ce,ye,we;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="extra small size" size="xs" />
      <MultiSelect placeholder="small size" size="sm" />
      <MultiSelect placeholder="medium size" size="md" />
      <MultiSelect placeholder="large size" size="lg" />
    </>;
}`,...(we=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Fe,Ie,De;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(De=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Pe,Ve,ke;k.parameters={...k.parameters,docs:{...(Pe=k.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
  return <MultiSelect value={value} onChange={onChange} placeholder="キャラクターを選択" footer={({
    onClose
  }) => <VStack borderTopWidth="1px" borderColor={["blackAlpha.200", "whiteAlpha.100"]} p="2">
          <Button onClick={() => {
      onChange(allValues);
      onClose();
    }}>
            Set all values
          </Button>
        </VStack>} items={items} />;
}`,...(ke=(Ve=k.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var qe,Te,We;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(We=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ge,_e,Be;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Be=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var ze,Re,He;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(He=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};var Ee,Ne,Ae;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" component={({
      label
    }) => <Tag>{label}</Tag>}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" component={({
      label,
      onRemove
    }) => <Tag onClose={onRemove}>{label}</Tag>}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Ae=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Le,$e,Je;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" omitSelectedValues={true}>
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
}`,...(Je=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Ke,Qe,Ue;B.parameters={...B.parameters,docs:{...(Ke=B.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" maxSelectValues={3}>
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
}`,...(Ue=(Qe=B.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;z.parameters={...z.parameters,docs:{...(Xe=z.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnSelect={true}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ze=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var el,ll,nl;R.parameters={...R.parameters,docs:{...(el=R.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" isClearable={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(nl=(ll=R.parameters)==null?void 0:ll.docs)==null?void 0:nl.source}}};var rl,tl,al;H.parameters={...H.parameters,docs:{...(rl=H.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnBlur={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(al=(tl=H.parameters)==null?void 0:tl.docs)==null?void 0:al.source}}};var ol,sl,il;E.parameters={...E.parameters,docs:{...(ol=E.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(il=(sl=E.parameters)==null?void 0:sl.docs)==null?void 0:il.source}}};var cl,ul,dl;N.parameters={...N.parameters,docs:{...(cl=N.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(dl=(ul=N.parameters)==null?void 0:ul.docs)==null?void 0:dl.source}}};var pl,hl,vl;A.parameters={...A.parameters,docs:{...(pl=A.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" gutter={32}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(vl=(hl=A.parameters)==null?void 0:hl.docs)==null?void 0:vl.source}}};var ml,Ol,xl;L.parameters={...L.parameters,docs:{...(ml=L.parameters)==null?void 0:ml.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" duration={0.4}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(xl=(Ol=L.parameters)==null?void 0:Ol.docs)==null?void 0:xl.source}}};var jl,bl,Sl;$.parameters={...$.parameters,docs:{...(jl=$.parameters)==null?void 0:jl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isDisabled variant="outline" placeholder="outline" />
      <MultiSelect isDisabled variant="filled" placeholder="filled" />
      <MultiSelect isDisabled variant="flushed" placeholder="flushed" />
      <MultiSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Sl=(bl=$.parameters)==null?void 0:bl.docs)==null?void 0:Sl.source}}};var fl,gl,Ml;J.parameters={...J.parameters,docs:{...(fl=J.parameters)==null?void 0:fl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isReadOnly variant="outline" placeholder="outline" />
      <MultiSelect isReadOnly variant="filled" placeholder="filled" />
      <MultiSelect isReadOnly variant="flushed" placeholder="flushed" />
      <MultiSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Ml=(gl=J.parameters)==null?void 0:gl.docs)==null?void 0:Ml.source}}};var Cl,yl,wl;K.parameters={...K.parameters,docs:{...(Cl=K.parameters)==null?void 0:Cl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isInvalid variant="outline" placeholder="outline" />
      <MultiSelect isInvalid variant="filled" placeholder="filled" />
      <MultiSelect isInvalid variant="flushed" placeholder="flushed" />
      <MultiSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(wl=(yl=K.parameters)==null?void 0:yl.docs)==null?void 0:wl.source}}};var Fl,Il,Dl;Q.parameters={...Q.parameters,docs:{...(Fl=Q.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Dl=(Il=Q.parameters)==null?void 0:Il.docs)==null?void 0:Dl.source}}};var Pl,Vl,kl;U.parameters={...U.parameters,docs:{...(Pl=U.parameters)==null?void 0:Pl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(kl=(Vl=U.parameters)==null?void 0:Vl.docs)==null?void 0:kl.source}}};var ql,Tl,Wl;X.parameters={...X.parameters,docs:{...(ql=X.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      children: <ChevronsDown />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Wl=(Tl=X.parameters)==null?void 0:Tl.docs)==null?void 0:Wl.source}}};var Gl,_l,Bl;Y.parameters={...Y.parameters,docs:{...(Gl=Y.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Bl=(_l=Y.parameters)==null?void 0:_l.docs)==null?void 0:Bl.source}}};var zl,Rl,Hl;Z.parameters={...Z.parameters,docs:{...(zl=Z.parameters)==null?void 0:zl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      icon: <Check color="green.500" />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Hl=(Rl=Z.parameters)==null?void 0:Rl.docs)==null?void 0:Hl.source}}};var El,Nl,Al;ee.parameters={...ee.parameters,docs:{...(El=ee.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Al=(Nl=ee.parameters)==null?void 0:Nl.docs)==null?void 0:Al.source}}};var Ll,$l,Jl;le.parameters={...le.parameters,docs:{...(Ll=le.parameters)==null?void 0:Ll.docs,source:{originalSource:`() => {
  interface Data {
    select1: string[];
    select2: string[];
    select3: string[];
  }
  const items: SelectItem[] = [{
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
      <FormControl isInvalid={!!errors.select1} label="Who is your favorite character?" errorMessage={errors.select1?.message}>
        <Controller name="select1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select2} label="Who is your favorite character?" errorMessage={errors.select2?.message}>
        <Controller name="select2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
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
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select3} label="Who is your favorite character?" errorMessage={errors.select3?.message}>
        <Controller name="select3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Jl=($l=le.parameters)==null?void 0:$l.docs)==null?void 0:Jl.source}}};var Kl,Ql,Ul;ne.parameters={...ne.parameters,docs:{...(Kl=ne.parameters)==null?void 0:Kl.docs,source:{originalSource:`() => {
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
      <FormControl isInvalid={!!errors.select1} label="Who is your favorite character?" errorMessage={errors.select1?.message}>
        <Controller name="select1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select2} label="Who is your favorite character?" errorMessage={errors.select2?.message}>
        <Controller name="select2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
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
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select3} label="Who is your favorite character?" errorMessage={errors.select3?.message}>
        <Controller name="select3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <MultiSelect placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ul=(Ql=ne.parameters)==null?void 0:Ql.docs)==null?void 0:Ul.source}}};const Mr=["basic","withSize","withVariant","withFooter","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Mr as __namedExportsOrder,D as basic,Y as customClearIcon,ee as customControl,X as customIcon,Z as customOption,gr as default,H as disabledCloseOnBlur,R as disabledIsClearable,$ as isDisabled,K as isInvalid,Q as isOptionDisabled,U as isOptionFocusable,J as isReadonly,le as reactHookForm,ne as reactHookFormWithDefaultValue,T as withBorderColor,z as withCloseOnSelect,G as withComponent,q as withDefaultValue,L as withDuration,k as withFooter,A as withGutter,B as withMaxSelectValues,N as withOffset,_ as withOmitSelectedValues,E as withPlacement,W as withSeparator,P as withSize,V as withVariant};
