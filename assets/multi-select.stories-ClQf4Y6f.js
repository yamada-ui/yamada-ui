import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as S}from"./index-Bv9Y92EF.js";import{u as Hl,C as b}from"./index.esm-DdgAP9ly.js";import{u as tn,S as an,a as on,f as sn,b as cn,c as un,d as dn,O as l,e as p}from"./select-list-DgjlmZ5-.js";import{P as pn,a as hn}from"./popover-trigger-T6UAq76Q.js";import{P as vn}from"./portal-CFvSD_dh.js";import{f as El}from"./forward-ref-DH6f5tnY.js";import{a as mn}from"./use-component-style-DHLtMqa5.js";import{o as On}from"./theme-provider-DsbwOWxu.js";import{b as x,c as Nl,h as xn,J as se}from"./factory-7Z88KRtK.js";import{V as te}from"./stack-DL8tKm2J.js";import{B as ae}from"./button-nZ2ZqBRb.js";import{T as ce}from"./tag-CgF6Q1qr.js";import{d as v}from"./form-control-C8eO6U25.js";import{C as jn}from"./chevrons-down-BpSqjpuG.js";import{T as Sn}from"./trash2-DLKknGOL.js";import{C as bn}from"./check-URnquZRQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BdmKGyZV.js";import"./index-BhIdR6KT.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";import"./index-D3uVnNfI.js";import"./index-CHX88LJr.js";import"./index-CQqf5rDh.js";import"./index-vKAUfVXn.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./slide-fade-CwK7Wr_w.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./scale-fade-D309oxZP.js";import"./index-M_HQDTPf.js";import"./index-YFprnXPi.js";import"./index-BimsXrcc.js";import"./index-B_yC7JIW.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./loading-DVofVDF_.js";import"./createLucideIcon-Bq8XVWwL.js";const n=El((o,t)=>{const[r,i]=mn("MultiSelect",o),{className:s,isClearable:O=!0,clearable:m=O,closeOnSelect:a=!1,color:d,component:c,defaultValue:u=[],footer:M,h:le,header:C,height:f=le,minH:h,minHeight:g=h,separator:y,clearIconProps:j,containerProps:ne,fieldProps:Al,iconProps:Rl,listProps:Ll,portalProps:$l={disabled:!0},...Jl}=On(i),{children:Kl,descendants:Ql,empty:Ul,placeholder:Xl,value:w,formControlProps:ie,getContainerProps:Yl,getFieldProps:Zl,getPopoverProps:en,onClear:ln,onClose:re,...nn}=tn({...Jl,closeOnSelect:a,defaultValue:u,placeholderInOptions:!1}),rn={color:d,h:"fit-content",w:"100%",...r.container};return e.jsx(an,{value:Ql,children:e.jsx(on,{value:{...nn,placeholder:Xl,styles:r,value:w,onClose:re},children:e.jsx(pn,{...en(),children:e.jsxs(x.div,{className:Nl("ui-multi-select",s),__css:rn,...Yl(ne),children:[e.jsxs(x.div,{className:"ui-multi-select__inner",__css:{position:"relative",...r.inner},children:[e.jsx(hn,{children:e.jsx(oe,{component:c,height:f,minHeight:g,separator:y,...Zl(Al,t)})}),m&&w.length?e.jsx(sn,{...j,onClick:xn(j==null?void 0:j.onClick,ln),...ie}):e.jsx(cn,{...Rl,...ie})]}),Ul?null:e.jsx(vn,{...$l,children:e.jsx(un,{footer:se(M,{value:w,onClose:re}),header:se(C,{value:w,onClose:re}),...Ll,children:Kl})})]})})})})});n.displayName="MultiSelect";n.__ui__="MultiSelect";const oe=El(({className:o,component:t,isTruncated:r,lineClamp:i=1,separator:s=",",...O},m)=>{const{label:a,placeholder:d,styles:c,value:u,onChange:M}=dn(),le=S.useMemo(()=>a!=null&&a.length?t?e.jsx(x.span,{isTruncated:r,lineClamp:i,children:a.map((f,h)=>{const g=ne=>{ne.stopPropagation(),M(u[h]??"")},y=t({index:h,label:f,value:u[h]??"",onRemove:g}),j={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return y?S.cloneElement(y,{key:h,style:j}):null})}):e.jsx(x.span,{isTruncated:r,lineClamp:i,children:a.map((f,h)=>{const g=a.length===h+1;return e.jsx(x.span,{dangerouslySetInnerHTML:{__html:`${f}${g?"":s}`},display:"inline-block",me:"0.25rem"},h)})}):e.jsx(x.span,{lineClamp:i,children:d}),[a,r,i,M,d,s,t,u]),C={alignItems:"center",display:"flex",pe:"2rem",...c.field};return a!=null&&a.length&&t&&(C.py="0.125rem"),e.jsx(x.div,{ref:m,className:Nl("ui-multi-select__field",o),__css:C,...O,children:le})});oe.displayName="MultiSelectField";oe.__ui__="MultiSelectField";const pr={component:n,title:"Components / Forms / MultiSelect"},F=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(n,{items:o,placeholder:"キャラクターを選択"})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs",placeholder:"extra small size"}),e.jsx(n,{size:"sm",placeholder:"small size"}),e.jsx(n,{size:"md",placeholder:"medium size"}),e.jsx(n,{size:"lg",placeholder:"large size"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline"}),e.jsx(n,{variant:"filled",placeholder:"filled"}),e.jsx(n,{variant:"flushed",placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>{const[o,t]=S.useState([]),r=S.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),i=S.useMemo(()=>r.map(s=>"value"in s?s.value:void 0).filter(s=>s!==void 0),[r]);return e.jsx(n,{footer:({onClose:s})=>e.jsx(te,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(ae,{onClick:()=>{t(i),s()},children:"Set all values"})}),items:r,placeholder:"キャラクターを選択",value:o,onChange:t})},q=()=>e.jsxs(n,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"default border color"}),e.jsx(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(n,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),W=()=>e.jsxs(n,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{component:({label:o})=>e.jsx(ce,{children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{component:({label:o,onRemove:t})=>e.jsx(ce,{onClose:t,children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),I=()=>e.jsxs(n,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),_=()=>e.jsxs(n,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),B=()=>e.jsxs(n,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),z=()=>e.jsxs(n,{clearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),D=()=>e.jsxs(n,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(n,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(n,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(n,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>e.jsxs(n,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(v,{disabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(n,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(n,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(v,{label:"Which notifications would you like to receive?",readOnly:!0,children:e.jsx(n,{placeholder:"Select notifications"})})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(v,{errorMessage:"This is required.",invalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),J=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{disabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),K=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{disabled:!0,focusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(jn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),U=()=>e.jsxs(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Sn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(bn,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Y=()=>{const[o,t]=S.useState(["孫悟空"]);return e.jsxs(n,{placeholder:"キャラクターを選択",value:o,onChange:t,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},Z=()=>{var m,a,d;const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:t,formState:{errors:r},handleSubmit:i,watch:s}=Hl(),O=c=>console.log("submit:",c);return console.log("watch:",s()),e.jsxs(te,{as:"form",onSubmit:i(O),children:[e.jsx(v,{errorMessage:(m=r.select1)==null?void 0:m.message,invalid:!!r.select1,label:"Who is your favorite character?",children:e.jsx(b,{name:"select1",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(a=r.select2)==null?void 0:a.message,invalid:!!r.select2,label:"Who is your favorite character?",children:e.jsx(b,{name:"select2",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(d=r.select3)==null?void 0:d.message,invalid:!!r.select3,label:"Who is your favorite character?",children:e.jsx(b,{name:"select3",control:t,render:({field:c})=>e.jsx(n,{placeholder:"キャラクターを選択",...c,items:o}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ee=()=>{var a,d,c;const o={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:r,formState:{errors:i},handleSubmit:s,watch:O}=Hl({defaultValues:o}),m=u=>console.log("submit:",u);return console.log("watch:",O()),e.jsxs(te,{as:"form",onSubmit:s(m),children:[e.jsx(v,{errorMessage:(a=i.select1)==null?void 0:a.message,invalid:!!i.select1,label:"Who is your favorite character?",children:e.jsx(b,{name:"select1",control:r,render:({field:u})=>e.jsxs(n,{placeholder:"キャラクターを選択",...u,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(d=i.select2)==null?void 0:d.message,invalid:!!i.select2,label:"Who is your favorite character?",children:e.jsx(b,{name:"select2",control:r,render:({field:u})=>e.jsxs(n,{placeholder:"キャラクターを選択",...u,children:[e.jsxs(p,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(p,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(v,{errorMessage:(c=i.select3)==null?void 0:c.message,invalid:!!i.select3,label:"Who is your favorite character?",children:e.jsx(b,{name:"select3",control:r,render:({field:u})=>e.jsx(n,{placeholder:"キャラクターを選択",...u,items:t}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ue,de,pe;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(pe=(de=F.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,ve,me;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect size="xs" placeholder="extra small size" />
      <MultiSelect size="sm" placeholder="small size" />
      <MultiSelect size="md" placeholder="medium size" />
      <MultiSelect size="lg" placeholder="large size" />
    </>;
}`,...(me=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var Oe,xe,je;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(je=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Se,be,fe;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,Me,Ce;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <MultiSelect defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ce=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var ye,we,Fe;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(Fe=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Pe,Ve,ke;W.parameters={...W.parameters,docs:{...(Pe=W.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ke=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var qe,Te,We;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(We=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Ge,Ie,_e;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(_e=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Be,ze,De;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(De=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var He,Ee,Ne;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ne=(Ee=B.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Ae,Re,Le;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <MultiSelect clearable={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Le=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};var $e,Je,Ke;D.parameters={...D.parameters,docs:{...($e=D.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ke=(Je=D.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ue,Xe;H.parameters={...H.parameters,docs:{...(Qe=H.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiSelect maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Xe=(Ue=H.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,el;E.parameters={...E.parameters,docs:{...(Ye=E.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiSelect offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(el=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:el.source}}};var ll,nl,rl;N.parameters={...N.parameters,docs:{...(ll=N.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
  return <MultiSelect gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(rl=(nl=N.parameters)==null?void 0:nl.docs)==null?void 0:rl.source}}};var tl,al,ol;A.parameters={...A.parameters,docs:{...(tl=A.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
  return <MultiSelect duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ol=(al=A.parameters)==null?void 0:al.docs)==null?void 0:ol.source}}};var il,sl,cl;R.parameters={...R.parameters,docs:{...(il=R.parameters)==null?void 0:il.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" disabled placeholder="outline" />
      <MultiSelect variant="filled" disabled placeholder="filled" />
      <MultiSelect variant="flushed" disabled placeholder="flushed" />
      <MultiSelect variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(cl=(sl=R.parameters)==null?void 0:sl.docs)==null?void 0:cl.source}}};var ul,dl,pl;L.parameters={...L.parameters,docs:{...(ul=L.parameters)==null?void 0:ul.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" readOnly />
      <MultiSelect variant="filled" placeholder="filled" readOnly />
      <MultiSelect variant="flushed" placeholder="flushed" readOnly />
      <MultiSelect variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="Which notifications would you like to receive?" readOnly>
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(pl=(dl=L.parameters)==null?void 0:dl.docs)==null?void 0:pl.source}}};var hl,vl,ml;$.parameters={...$.parameters,docs:{...(hl=$.parameters)==null?void 0:hl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" invalid placeholder="outline" />
      <MultiSelect variant="filled" invalid placeholder="filled" />
      <MultiSelect variant="flushed" invalid placeholder="flushed" />
      <MultiSelect variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." invalid label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ml=(vl=$.parameters)==null?void 0:vl.docs)==null?void 0:ml.source}}};var Ol,xl,jl;J.parameters={...J.parameters,docs:{...(Ol=J.parameters)==null?void 0:Ol.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option disabled value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(jl=(xl=J.parameters)==null?void 0:xl.docs)==null?void 0:jl.source}}};var Sl,bl,fl;K.parameters={...K.parameters,docs:{...(Sl=K.parameters)==null?void 0:Sl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option disabled focusable value="ベジータ">
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
}`,...(Cl=(Ml=Q.parameters)==null?void 0:Ml.docs)==null?void 0:Cl.source}}};var yl,wl,Fl;U.parameters={...U.parameters,docs:{...(yl=U.parameters)==null?void 0:yl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2Icon />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Fl=(wl=U.parameters)==null?void 0:wl.docs)==null?void 0:Fl.source}}};var Pl,Vl,kl;X.parameters={...X.parameters,docs:{...(Pl=X.parameters)==null?void 0:Pl.docs,source:{originalSource:`() => {
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
}`,...(kl=(Vl=X.parameters)==null?void 0:Vl.docs)==null?void 0:kl.source}}};var ql,Tl,Wl;Y.parameters={...Y.parameters,docs:{...(ql=Y.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Wl=(Tl=Y.parameters)==null?void 0:Tl.docs)==null?void 0:Wl.source}}};var Gl,Il,_l;Z.parameters={...Z.parameters,docs:{...(Gl=Z.parameters)==null?void 0:Gl.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.select1?.message} invalid={!!errors.select1} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.select2?.message} invalid={!!errors.select2} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.select3?.message} invalid={!!errors.select3} label="Who is your favorite character?">
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
}`,...(_l=(Il=Z.parameters)==null?void 0:Il.docs)==null?void 0:_l.source}}};var Bl,zl,Dl;ee.parameters={...ee.parameters,docs:{...(Bl=ee.parameters)==null?void 0:Bl.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.select1?.message} invalid={!!errors.select1} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.select2?.message} invalid={!!errors.select2} label="Who is your favorite character?">
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

      <FormControl errorMessage={errors.select3?.message} invalid={!!errors.select3} label="Who is your favorite character?">
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
}`,...(Dl=(zl=ee.parameters)==null?void 0:zl.docs)==null?void 0:Dl.source}}};const hr=["basic","withSize","withVariant","withFooter","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","disabled","readOnly","invalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{hr as __namedExportsOrder,F as basic,U as customClearIcon,Y as customControl,Q as customIcon,X as customOption,pr as default,R as disabled,z as disabledClearable,D as disabledCloseOnBlur,$ as invalid,J as isOptionDisabled,K as isOptionFocusable,Z as reactHookForm,ee as reactHookFormWithDefaultValue,L as readOnly,T as withBorderColor,B as withCloseOnSelect,G as withComponent,q as withDefaultValue,A as withDuration,k as withFooter,N as withGutter,_ as withMaxSelectValues,E as withOffset,I as withOmitSelectedValues,H as withPlacement,W as withSeparator,P as withSize,V as withVariant};
