import{j as e}from"./extends-CwFRzn3r.js";import{r as b}from"./index-BwDkhjyp.js";import{u as Ul,C as f}from"./index.esm-DXPXqkjk.js";import{O as l,a as u,u as On,S as xn,b as jn,f as Sn,c as bn,d as fn,e as gn}from"./select-list-DkoN3r-L.js";import{P as Mn,a as Cn}from"./popover-trigger-BJsmlD02.js";import{P as yn}from"./portal-Df1xvvbV.js";import{f as Xl}from"./forward-ref-BWI-Phbn.js";import{a as wn}from"./use-component-style-vGTU0kmU.js";import{o as Fn}from"./theme-provider-HQUvgn6k.js";import{p as In,b as j,c as Yl,h as Dn,z as je}from"./factory-BPGpAF5Z.js";import{V as de}from"./stack-Bldv2M3v.js";import{B as pe}from"./button-9256ovQJ.js";import{T as Se}from"./tag-kmrcB-x5.js";import{F as m}from"./form-control-CY2fHU0c.js";import{C as Pn}from"./chevrons-down-Chc6j5oZ.js";import{T as Vn}from"./trash2-CXkDkmih.js";import{C as kn}from"./check-BZVhPaj4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DYLohKMc.js";import"./index-DMlaarLi.js";import"./icon-BYVaiKtb.js";import"./use-var-CHlP19MT.js";import"./index-CJwZPsS_.js";import"./index-oQ85FuiM.js";import"./index-BSZzY47h.js";import"./index-DjrrK_0S.js";import"./close-button-TCaPA0pi.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-BEHgxEuP.js";import"./index-BRqXaXJK.js";import"./index-B9JWsFAS.js";import"./forward-ref-scR1bmHx.js";import"./utils-wKEdAh9y.js";import"./scale-fade-Cv307av9.js";import"./index-CjlbPsry.js";import"./index-CoJrGj-T.js";import"./index-YIL2lgfe.js";import"./index-BN4Uieo8.js";import"./index-Drt3gf4w.js";import"./loading-BJMWU62O.js";import"./lucide-icon-DpgM6Xz3.js";const n=Xl((o,a)=>{const[t,i]=wn("MultiSelect",o);let{className:s,children:O,closeOnSelect:d=!1,color:p,component:h,defaultValue:r=[],footer:c,h:C,header:g,height:y,isClearable:re=!0,items:w=[],minH:S,minHeight:v,separator:M,clearIconProps:x,containerProps:te,fieldProps:ae,iconProps:Zl,listProps:en,portalProps:ln={isDisabled:!0},...nn}=Fn(i);const ve=In(O);let oe=[];!ve.length&&w.length&&(oe=w.map((I,xe)=>{if("value"in I){const{label:ie,value:ce,...ue}=I;return e.jsx(l,{value:ce,...ue,children:ie},xe)}else if("items"in I){const{items:ie=[],label:ce,...ue}=I;return e.jsx(u,{label:ce,...ue,children:ie.map(({label:pn,value:hn,...vn},mn)=>e.jsx(l,{value:hn,...vn,children:pn},mn))},xe)}}).filter(Boolean));let me=!ve.length&&!oe.length;const{descendants:rn,placeholder:tn,value:F,formControlProps:Oe,getContainerProps:an,getFieldProps:on,getPopoverProps:sn,onClear:cn,onClose:se,...un}=On({...nn,closeOnSelect:d,defaultValue:r,isEmpty:me,placeholderInOptions:!1});C??(C=y),S??(S=v);const dn={color:p,h:"fit-content",w:"100%",...t.container};return e.jsx(xn,{value:rn,children:e.jsx(jn,{value:{...un,placeholder:tn,styles:t,value:F,onClose:se},children:e.jsx(Mn,{...sn(),children:e.jsxs(j.div,{className:Yl("ui-multi-select",s),__css:dn,...an(te),children:[e.jsxs(j.div,{className:"ui-multi-select__inner",__css:{position:"relative",...t.inner},children:[e.jsx(Cn,{children:e.jsx(he,{component:h,h:C,minH:S,separator:M,...on(ae,a)})}),re&&F.length?e.jsx(Sn,{...x,onClick:Dn(x==null?void 0:x.onClick,cn),...Oe}):e.jsx(bn,{...Zl,...Oe})]}),me?null:e.jsx(yn,{...ln,children:e.jsx(fn,{footer:je(c,{value:F,onClose:se}),header:je(g,{value:F,onClose:se}),...en,children:O??oe})})]})})})})});n.displayName="MultiSelect";n.__ui__="MultiSelect";const he=Xl(({className:o,component:a,h:t,isTruncated:i,lineClamp:s=1,minH:O,separator:d=",",...p},h)=>{const{label:r,placeholder:c,styles:C,value:g,onChange:y}=gn(),re=b.useMemo(()=>r!=null&&r.length?a?e.jsx(j.span,{isTruncated:i,lineClamp:s,children:r.map((S,v)=>{const M=ae=>{ae.stopPropagation(),y(g[v]??"")},x=a({index:v,label:S,value:g[v]??"",onRemove:M}),te={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return x?b.cloneElement(x,{key:v,style:te}):null})}):e.jsx(j.span,{isTruncated:i,lineClamp:s,children:r.map((S,v)=>{const M=r.length===v+1;return e.jsx(j.span,{dangerouslySetInnerHTML:{__html:`${S}${M?"":d}`},display:"inline-block",me:"0.25rem"},v)})}):e.jsx(j.span,{lineClamp:s,children:c}),[r,i,s,y,c,d,a,g]),w={alignItems:"center",display:"flex",h:t,minH:O,pe:"2rem",...C.field};return e.jsx(j.div,{ref:h,className:Yl("ui-multi-select__field",o),py:r!=null&&r.length&&a?"0.125rem":void 0,__css:w,...p,children:re})});he.displayName="MultiSelectField";he.__ui__="MultiSelectField";const gr={component:n,title:"Components / Forms / MultiSelect"},D=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsxs(u,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(u,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(n,{items:o,placeholder:"キャラクターを選択"})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs",placeholder:"extra small size"}),e.jsx(n,{size:"sm",placeholder:"small size"}),e.jsx(n,{size:"md",placeholder:"medium size"}),e.jsx(n,{size:"lg",placeholder:"large size"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline"}),e.jsx(n,{variant:"filled",placeholder:"filled"}),e.jsx(n,{variant:"flushed",placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>{const[o,a]=b.useState([]),t=b.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),i=b.useMemo(()=>t.map(s=>"value"in s?s.value:void 0).filter(s=>s!==void 0),[t]);return e.jsx(n,{footer:({onClose:s})=>e.jsx(de,{borderColor:["blackAlpha.200","whiteAlpha.100"],borderTopWidth:"1px",p:"2",children:e.jsx(pe,{onClick:()=>{a(i),s()},children:"Set all values"})}),items:t,placeholder:"キャラクターを選択",value:o,onChange:a})},q=()=>e.jsxs(n,{defaultValue:["ベジータ"],placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"default border color"}),e.jsx(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),W=()=>e.jsxs(n,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{component:({label:o})=>e.jsx(Se,{children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{component:({label:o,onRemove:a})=>e.jsx(Se,{onClose:a,children:o}),placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),_=()=>e.jsxs(n,{omitSelectedValues:!0,placeholder:"キャラクターを選択",children:[e.jsxs(u,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(u,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),B=()=>e.jsxs(n,{maxSelectValues:3,placeholder:"キャラクターを選択",children:[e.jsxs(u,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(u,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),z=()=>e.jsxs(n,{closeOnSelect:!0,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>e.jsxs(n,{isClearable:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(n,{closeOnBlur:!1,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(n,{maxW:"xs",placeholder:"キャラクターを選択",placement:"right-start",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(n,{offset:[16,16],placeholder:"キャラクターを選択",listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>e.jsxs(n,{gutter:32,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(n,{duration:.4,placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(m,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(m,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(n,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(n,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(m,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),Q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{isDisabled:!0,isFocusable:!0,value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Pn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Y=()=>e.jsxs(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Vn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(kn,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ee=()=>{const[o,a]=b.useState(["孫悟空"]);return e.jsxs(n,{placeholder:"キャラクターを選択",value:o,onChange:a,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},le=()=>{var d,p,h;const o=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:a,formState:{errors:t},handleSubmit:i,watch:s}=Ul(),O=r=>console.log("submit:",r);return console.log("watch:",s()),e.jsxs(de,{as:"form",onSubmit:i(O),children:[e.jsx(m,{errorMessage:(d=t.select1)==null?void 0:d.message,isInvalid:!!t.select1,label:"Who is your favorite character?",children:e.jsx(f,{name:"select1",control:a,render:({field:r})=>e.jsxs(n,{placeholder:"キャラクターを選択",...r,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(p=t.select2)==null?void 0:p.message,isInvalid:!!t.select2,label:"Who is your favorite character?",children:e.jsx(f,{name:"select2",control:a,render:({field:r})=>e.jsxs(n,{placeholder:"キャラクターを選択",...r,children:[e.jsxs(u,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(u,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(h=t.select3)==null?void 0:h.message,isInvalid:!!t.select3,label:"Who is your favorite character?",children:e.jsx(f,{name:"select3",control:a,render:({field:r})=>e.jsx(n,{placeholder:"キャラクターを選択",...r,items:o}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ne=()=>{var p,h,r;const o={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},a=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}],{control:t,formState:{errors:i},handleSubmit:s,watch:O}=Ul({defaultValues:o}),d=c=>console.log("submit:",c);return console.log("watch:",O()),e.jsxs(de,{as:"form",onSubmit:s(d),children:[e.jsx(m,{errorMessage:(p=i.select1)==null?void 0:p.message,isInvalid:!!i.select1,label:"Who is your favorite character?",children:e.jsx(f,{name:"select1",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(h=i.select2)==null?void 0:h.message,isInvalid:!!i.select2,label:"Who is your favorite character?",children:e.jsx(f,{name:"select2",control:t,render:({field:c})=>e.jsxs(n,{placeholder:"キャラクターを選択",...c,children:[e.jsxs(u,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(u,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(m,{errorMessage:(r=i.select3)==null?void 0:r.message,isInvalid:!!i.select3,label:"Who is your favorite character?",children:e.jsx(f,{name:"select3",control:t,render:({field:c})=>e.jsx(n,{placeholder:"キャラクターを選択",...c,items:a}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var be,fe,ge;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Me,Ce,ye;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect size="xs" placeholder="extra small size" />
      <MultiSelect size="sm" placeholder="small size" />
      <MultiSelect size="md" placeholder="medium size" />
      <MultiSelect size="lg" placeholder="large size" />
    </>;
}`,...(ye=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var we,Fe,Ie;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Ie=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};var De,Pe,Ve;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var ke,qe,Te;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <MultiSelect defaultValue={["ベジータ"]} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Te=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var We,Ge,_e;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(_e=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var Be,ze,Re;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Re=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var He,Ee,Ne;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Ae,Le,$e;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...($e=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Je,Ke,Qe;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Ke=B.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ye=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,el,ll;R.parameters={...R.parameters,docs:{...(Ze=R.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <MultiSelect isClearable={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ll=(el=R.parameters)==null?void 0:el.docs)==null?void 0:ll.source}}};var nl,rl,tl;H.parameters={...H.parameters,docs:{...(nl=H.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
  return <MultiSelect closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(tl=(rl=H.parameters)==null?void 0:rl.docs)==null?void 0:tl.source}}};var al,ol,sl;E.parameters={...E.parameters,docs:{...(al=E.parameters)==null?void 0:al.docs,source:{originalSource:`() => {
  return <MultiSelect maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(sl=(ol=E.parameters)==null?void 0:ol.docs)==null?void 0:sl.source}}};var il,cl,ul;N.parameters={...N.parameters,docs:{...(il=N.parameters)==null?void 0:il.docs,source:{originalSource:`() => {
  return <MultiSelect offset={[16, 16]} placeholder="キャラクターを選択" listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ul=(cl=N.parameters)==null?void 0:cl.docs)==null?void 0:ul.source}}};var dl,pl,hl;A.parameters={...A.parameters,docs:{...(dl=A.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  return <MultiSelect gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(hl=(pl=A.parameters)==null?void 0:pl.docs)==null?void 0:hl.source}}};var vl,ml,Ol;L.parameters={...L.parameters,docs:{...(vl=L.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
  return <MultiSelect duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ol=(ml=L.parameters)==null?void 0:ml.docs)==null?void 0:Ol.source}}};var xl,jl,Sl;$.parameters={...$.parameters,docs:{...(xl=$.parameters)==null?void 0:xl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isDisabled placeholder="outline" />
      <MultiSelect variant="filled" isDisabled placeholder="filled" />
      <MultiSelect variant="flushed" isDisabled placeholder="flushed" />
      <MultiSelect variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Sl=(jl=$.parameters)==null?void 0:jl.docs)==null?void 0:Sl.source}}};var bl,fl,gl;J.parameters={...J.parameters,docs:{...(bl=J.parameters)==null?void 0:bl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isReadOnly placeholder="outline" />
      <MultiSelect variant="filled" isReadOnly placeholder="filled" />
      <MultiSelect variant="flushed" isReadOnly placeholder="flushed" />
      <MultiSelect variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(gl=(fl=J.parameters)==null?void 0:fl.docs)==null?void 0:gl.source}}};var Ml,Cl,yl;K.parameters={...K.parameters,docs:{...(Ml=K.parameters)==null?void 0:Ml.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" isInvalid placeholder="outline" />
      <MultiSelect variant="filled" isInvalid placeholder="filled" />
      <MultiSelect variant="flushed" isInvalid placeholder="flushed" />
      <MultiSelect variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(yl=(Cl=K.parameters)==null?void 0:Cl.docs)==null?void 0:yl.source}}};var wl,Fl,Il;Q.parameters={...Q.parameters,docs:{...(wl=Q.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Il=(Fl=Q.parameters)==null?void 0:Fl.docs)==null?void 0:Il.source}}};var Dl,Pl,Vl;U.parameters={...U.parameters,docs:{...(Dl=U.parameters)==null?void 0:Dl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled isFocusable value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Vl=(Pl=U.parameters)==null?void 0:Pl.docs)==null?void 0:Vl.source}}};var kl,ql,Tl;X.parameters={...X.parameters,docs:{...(kl=X.parameters)==null?void 0:kl.docs,source:{originalSource:`() => {
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
}`,...(Tl=(ql=X.parameters)==null?void 0:ql.docs)==null?void 0:Tl.source}}};var Wl,Gl,_l;Y.parameters={...Y.parameters,docs:{...(Wl=Y.parameters)==null?void 0:Wl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(_l=(Gl=Y.parameters)==null?void 0:Gl.docs)==null?void 0:_l.source}}};var Bl,zl,Rl;Z.parameters={...Z.parameters,docs:{...(Bl=Z.parameters)==null?void 0:Bl.docs,source:{originalSource:`() => {
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
}`,...(Rl=(zl=Z.parameters)==null?void 0:zl.docs)==null?void 0:Rl.source}}};var Hl,El,Nl;ee.parameters={...ee.parameters,docs:{...(Hl=ee.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Nl=(El=ee.parameters)==null?void 0:El.docs)==null?void 0:Nl.source}}};var Al,Ll,$l;le.parameters={...le.parameters,docs:{...(Al=le.parameters)==null?void 0:Al.docs,source:{originalSource:`() => {
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
}`,...($l=(Ll=le.parameters)==null?void 0:Ll.docs)==null?void 0:$l.source}}};var Jl,Kl,Ql;ne.parameters={...ne.parameters,docs:{...(Jl=ne.parameters)==null?void 0:Jl.docs,source:{originalSource:`() => {
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
}`,...(Ql=(Kl=ne.parameters)==null?void 0:Kl.docs)==null?void 0:Ql.source}}};const Mr=["basic","withSize","withVariant","withFooter","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Mr as __namedExportsOrder,D as basic,Y as customClearIcon,ee as customControl,X as customIcon,Z as customOption,gr as default,H as disabledCloseOnBlur,R as disabledIsClearable,$ as isDisabled,K as isInvalid,Q as isOptionDisabled,U as isOptionFocusable,J as isReadonly,le as reactHookForm,ne as reactHookFormWithDefaultValue,T as withBorderColor,z as withCloseOnSelect,G as withComponent,q as withDefaultValue,L as withDuration,k as withFooter,A as withGutter,B as withMaxSelectValues,N as withOffset,_ as withOmitSelectedValues,E as withPlacement,W as withSeparator,P as withSize,V as withVariant};
