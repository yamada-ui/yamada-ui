import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as b}from"./index-BwDkhjyp.js";import{u as Ul,C as S}from"./index.esm-CMZNHfZV.js";import{O as l,a as d,u as mn,S as On,b as xn,f as jn,c as bn,d as Sn,e as fn}from"./option-DVKzON07.js";import{P as gn,a as Mn}from"./popover-content-BLbldcgF.js";import{P as Cn}from"./container-portal-QjYcPwhX.js";import{f as Xl}from"./forward-ref-BmTAT9U5.js";import{a as yn}from"./use-component-style-CVJyvgnb.js";import{o as wn}from"./theme-provider-DVx9I-yC.js";import{t as Fn,b as x,c as Yl,h as In,B as je}from"./factory-CZghEhwx.js";import{V as de}from"./stack-C1fz6XaD.js";import{B as pe}from"./button-BCJOWwwX.js";import{T as be}from"./tag-DYaCXeTL.js";import{F as m}from"./form-control-C3CMmeFy.js";import{C as Dn}from"./chevrons-down-NiQ7HNJe.js";import{T as Pn}from"./trash2-kLG4Ylo6.js";import{C as Vn}from"./check-C_CpU-SL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ysbLwl4-.js";import"./index-B8LKFMKH.js";import"./icon-qNXYSgNB.js";import"./index-CCkg_WlC.js";import"./index-CYOgy8MG.js";import"./index-DE_xQ764.js";import"./index-BRM0DfdX.js";import"./index-BjTN0Jfs.js";import"./index-D68hVCYc.js";import"./index-Du0-7Fls.js";import"./index-C3UkXdfd.js";import"./index-BOMWt9aZ.js";import"./index-DYXOAhhT.js";import"./index-BRMKH5UC.js";import"./motion-CvUiUCCo.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-D2OzokzD.js";import"./index-Ms_xn5rh.js";import"./utils-BSzVtHmY.js";import"./scale-fade-Cz1crDyK.js";import"./close-button-BWHSBN7V.js";import"./use-ripple-Bgt6vpzY.js";import"./index-DxjWwZXO.js";import"./extends-CF3RwP-h.js";import"./loading-LwU3kRka.js";import"./lucide-icon-sIknX4Cs.js";const n=Xl((o,a)=>{const[i,u]=yn("MultiSelect",o);let{className:r,defaultValue:c=[],component:O,separator:p,isClearable:h=!0,items:s=[],color:t,h:f,height:C,minH:y,minHeight:re,closeOnSelect:te=!1,containerProps:g,listProps:v,fieldProps:M,iconProps:w,clearIconProps:j,portalProps:ae={isDisabled:!0},header:Zl,footer:en,children:he,...ln}=wn(u);const ve=Fn(he);let oe=[];!ve.length&&s.length&&(oe=s.map((I,xe)=>{if("value"in I){const{label:ie,value:ce,...ue}=I;return e.jsx(l,{value:ce,...ue,children:ie},xe)}else if("items"in I){const{label:ie,items:ce=[],...ue}=I;return e.jsx(d,{label:ie??"",...ue,children:ce.map(({label:dn,value:pn,...hn},vn)=>e.jsx(l,{value:pn,...hn,children:dn},vn))},xe)}}).filter(Boolean));let me=!ve.length&&!oe.length;const{value:F,onClose:se,descendants:nn,formControlProps:Oe,getPopoverProps:rn,getContainerProps:tn,getFieldProps:an,placeholder:on,onClear:sn,...cn}=mn({...ln,defaultValue:c,placeholderInOptions:!1,closeOnSelect:te,isEmpty:me});f??(f=C),y??(y=re);const un={w:"100%",h:"fit-content",color:t,...i.container};return e.jsx(On,{value:nn,children:e.jsx(xn,{value:{...cn,value:F,onClose:se,placeholder:on,styles:i},children:e.jsx(gn,{...rn(),children:e.jsxs(x.div,{className:Yl("ui-multi-select",r),__css:un,...tn(g),children:[e.jsxs(x.div,{className:"ui-multi-select__inner",__css:{position:"relative",...i.inner},children:[e.jsx(Mn,{children:e.jsx(kn,{component:O,separator:p,h:f,minH:y,...an(M,a)})}),h&&F.length?e.jsx(jn,{...j,onClick:In(j==null?void 0:j.onClick,sn),...Oe}):e.jsx(bn,{...w,...Oe})]}),me?null:e.jsx(Cn,{...ae,children:e.jsx(Sn,{header:je(Zl,{value:F,onClose:se}),footer:je(en,{value:F,onClose:se}),...v,children:he??oe})})]})})})})}),kn=Xl(({className:o,component:a,separator:i=",",isTruncated:u,lineClamp:r=1,h:c,minH:O,...p},h)=>{const{value:s,label:t,onChange:f,placeholder:C,styles:y}=fn(),re=b.useMemo(()=>t!=null&&t.length?a?e.jsx(x.span,{isTruncated:u,lineClamp:r,children:t.map((g,v)=>{const M=ae=>{ae.stopPropagation(),f(s[v])},w=a({value:s[v],label:g,index:v,onRemove:M}),j={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return w?b.cloneElement(w,{key:v,style:j}):null})}):e.jsx(x.span,{isTruncated:u,lineClamp:r,children:t.map((g,v)=>{const M=t.length===v+1;return e.jsx(x.span,{display:"inline-block",me:"0.25rem",dangerouslySetInnerHTML:{__html:`${g}${M?"":i}`}},v)})}):e.jsx(x.span,{lineClamp:r,children:C}),[t,u,r,f,C,i,a,s]),te={pe:"2rem",h:c,minH:O,display:"flex",alignItems:"center",...y.field};return e.jsx(x.div,{ref:h,className:Yl("ui-multi-select__field",o),__css:te,py:t!=null&&t.length&&a?"0.125rem":void 0,...p,children:re})}),Mr={title:"Components / Forms / MultiSelect",component:n},D=()=>{const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(n,{placeholder:"キャラクターを選択",items:o})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"extra small size",size:"xs"}),e.jsx(n,{placeholder:"small size",size:"sm"}),e.jsx(n,{placeholder:"medium size",size:"md"}),e.jsx(n,{placeholder:"large size",size:"lg"})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",placeholder:"outline"}),e.jsx(n,{variant:"filled",placeholder:"filled"}),e.jsx(n,{variant:"flushed",placeholder:"flushed"}),e.jsx(n,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>{const[o,a]=b.useState([]),i=b.useMemo(()=>[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],[]),u=b.useMemo(()=>i.map(r=>"value"in r?r.value:void 0).filter(r=>r!==void 0),[i]);return e.jsx(n,{value:o,onChange:a,placeholder:"キャラクターを選択",footer:({onClose:r})=>e.jsx(de,{borderTopWidth:"1px",borderColor:["blackAlpha.200","whiteAlpha.100"],p:"2",children:e.jsx(pe,{onClick:()=>{a(u),r()},children:"Set all values"})}),items:i})},q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{placeholder:"default border color"}),e.jsx(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),W=()=>e.jsxs(n,{placeholder:"キャラクターを選択",separator:";",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",component:({label:o})=>e.jsx(be,{children:o}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",component:({label:o,onRemove:a})=>e.jsx(be,{onClose:a,children:o}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),B=()=>e.jsxs(n,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),z=()=>e.jsxs(n,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),R=()=>e.jsxs(n,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>e.jsxs(n,{placeholder:"キャラクターを選択",isClearable:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>e.jsxs(n,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>e.jsxs(n,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>e.jsxs(n,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>e.jsxs(n,{placeholder:"キャラクターを選択",gutter:32,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),L=()=>e.jsxs(n,{placeholder:"キャラクターを選択",duration:.4,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(n,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(n,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(n,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(n,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(n,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(n,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(n,{placeholder:"Select notifications"})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(n,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(n,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(n,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(n,{placeholder:"Select notifications"})})]}),Q=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>e.jsxs(n,{placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Dn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),Y=()=>e.jsxs(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e.jsx(Pn,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{placeholder:"キャラクターを選択",optionProps:{icon:e.jsx(Vn,{color:"green.500"})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),ee=()=>{const[o,a]=b.useState(["孫悟空"]);return e.jsxs(n,{placeholder:"キャラクターを選択",value:o,onChange:a,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},le=()=>{var O,p,h;const o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:i,watch:u,formState:{errors:r}}=Ul(),c=s=>console.log("submit:",s);return console.log("watch:",u()),e.jsxs(de,{as:"form",onSubmit:i(c),children:[e.jsx(m,{isInvalid:!!r.select1,label:"Who is your favorite character?",errorMessage:(O=r.select1)==null?void 0:O.message,children:e.jsx(S,{name:"select1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(n,{placeholder:"キャラクターを選択",...s,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(m,{isInvalid:!!r.select2,label:"Who is your favorite character?",errorMessage:(p=r.select2)==null?void 0:p.message,children:e.jsx(S,{name:"select2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsxs(n,{placeholder:"キャラクターを選択",...s,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(m,{isInvalid:!!r.select3,label:"Who is your favorite character?",errorMessage:(h=r.select3)==null?void 0:h.message,children:e.jsx(S,{name:"select3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e.jsx(n,{placeholder:"キャラクターを選択",...s,items:o})})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ne=()=>{var p,h,s;const o={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},a=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:i,handleSubmit:u,watch:r,formState:{errors:c}}=Ul({defaultValues:o}),O=t=>console.log("submit:",t);return console.log("watch:",r()),e.jsxs(de,{as:"form",onSubmit:u(O),children:[e.jsx(m,{isInvalid:!!c.select1,label:"Who is your favorite character?",errorMessage:(p=c.select1)==null?void 0:p.message,children:e.jsx(S,{name:"select1",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e.jsxs(n,{placeholder:"キャラクターを選択",...t,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(m,{isInvalid:!!c.select2,label:"Who is your favorite character?",errorMessage:(h=c.select2)==null?void 0:h.message,children:e.jsx(S,{name:"select2",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e.jsxs(n,{placeholder:"キャラクターを選択",...t,children:[e.jsxs(d,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(d,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]})})}),e.jsx(m,{isInvalid:!!c.select3,label:"Who is your favorite character?",errorMessage:(s=c.select3)==null?void 0:s.message,children:e.jsx(S,{name:"select3",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e.jsx(n,{placeholder:"キャラクターを選択",...t,items:a})})}),e.jsx(pe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Se,fe,ge;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Me,Ce,ye;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="extra small size" size="xs" />
      <MultiSelect placeholder="small size" size="sm" />
      <MultiSelect placeholder="medium size" size="md" />
      <MultiSelect placeholder="large size" size="lg" />
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
}`,...(Ve=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var ke,qe,Te;q.parameters={...q.parameters,docs:{...(ke=q.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Te=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var We,Ge,Be;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Be=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:Be.source}}};var ze,Re,_e;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(_e=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var He,Ee,Ae;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Ne,Le,$e;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...($e=(Le=B.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Je,Ke,Qe;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;R.parameters={...R.parameters,docs:{...(Ue=R.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnSelect={true}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ye=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,el,ll;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" isClearable={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ll=(el=_.parameters)==null?void 0:el.docs)==null?void 0:ll.source}}};var nl,rl,tl;H.parameters={...H.parameters,docs:{...(nl=H.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnBlur={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(tl=(rl=H.parameters)==null?void 0:rl.docs)==null?void 0:tl.source}}};var al,ol,sl;E.parameters={...E.parameters,docs:{...(al=E.parameters)==null?void 0:al.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(sl=(ol=E.parameters)==null?void 0:ol.docs)==null?void 0:sl.source}}};var il,cl,ul;A.parameters={...A.parameters,docs:{...(il=A.parameters)==null?void 0:il.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ul=(cl=A.parameters)==null?void 0:cl.docs)==null?void 0:ul.source}}};var dl,pl,hl;N.parameters={...N.parameters,docs:{...(dl=N.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" gutter={32}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(hl=(pl=N.parameters)==null?void 0:pl.docs)==null?void 0:hl.source}}};var vl,ml,Ol;L.parameters={...L.parameters,docs:{...(vl=L.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" duration={0.4}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ol=(ml=L.parameters)==null?void 0:ml.docs)==null?void 0:Ol.source}}};var xl,jl,bl;$.parameters={...$.parameters,docs:{...(xl=$.parameters)==null?void 0:xl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isDisabled variant="outline" placeholder="outline" />
      <MultiSelect isDisabled variant="filled" placeholder="filled" />
      <MultiSelect isDisabled variant="flushed" placeholder="flushed" />
      <MultiSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(bl=(jl=$.parameters)==null?void 0:jl.docs)==null?void 0:bl.source}}};var Sl,fl,gl;J.parameters={...J.parameters,docs:{...(Sl=J.parameters)==null?void 0:Sl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isReadOnly variant="outline" placeholder="outline" />
      <MultiSelect isReadOnly variant="filled" placeholder="filled" />
      <MultiSelect isReadOnly variant="flushed" placeholder="flushed" />
      <MultiSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(gl=(fl=J.parameters)==null?void 0:fl.docs)==null?void 0:gl.source}}};var Ml,Cl,yl;K.parameters={...K.parameters,docs:{...(Ml=K.parameters)==null?void 0:Ml.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isInvalid variant="outline" placeholder="outline" />
      <MultiSelect isInvalid variant="filled" placeholder="filled" />
      <MultiSelect isInvalid variant="flushed" placeholder="flushed" />
      <MultiSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(yl=(Cl=K.parameters)==null?void 0:Cl.docs)==null?void 0:yl.source}}};var wl,Fl,Il;Q.parameters={...Q.parameters,docs:{...(wl=Q.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Il=(Fl=Q.parameters)==null?void 0:Fl.docs)==null?void 0:Il.source}}};var Dl,Pl,Vl;U.parameters={...U.parameters,docs:{...(Dl=U.parameters)==null?void 0:Dl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled isFocusable>
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
}`,...(Tl=(ql=X.parameters)==null?void 0:ql.docs)==null?void 0:Tl.source}}};var Wl,Gl,Bl;Y.parameters={...Y.parameters,docs:{...(Wl=Y.parameters)==null?void 0:Wl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Trash2 />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Bl=(Gl=Y.parameters)==null?void 0:Gl.docs)==null?void 0:Bl.source}}};var zl,Rl,_l;Z.parameters={...Z.parameters,docs:{...(zl=Z.parameters)==null?void 0:zl.docs,source:{originalSource:`() => {
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
}`,...(_l=(Rl=Z.parameters)==null?void 0:Rl.docs)==null?void 0:_l.source}}};var Hl,El,Al;ee.parameters={...ee.parameters,docs:{...(Hl=ee.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Al=(El=ee.parameters)==null?void 0:El.docs)==null?void 0:Al.source}}};var Nl,Ll,$l;le.parameters={...le.parameters,docs:{...(Nl=le.parameters)==null?void 0:Nl.docs,source:{originalSource:`() => {
  type Data = {
    select1: string[];
    select2: string[];
    select3: string[];
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
}`,...($l=(Ll=le.parameters)==null?void 0:Ll.docs)==null?void 0:$l.source}}};var Jl,Kl,Ql;ne.parameters={...ne.parameters,docs:{...(Jl=ne.parameters)==null?void 0:Jl.docs,source:{originalSource:`() => {
  type Data = {
    select1: string[];
    select2: string[];
    select3: string[];
  };
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
}`,...(Ql=(Kl=ne.parameters)==null?void 0:Kl.docs)==null?void 0:Ql.source}}};const Cr=["basic","withSize","withVariant","withFooter","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Cr as __namedExportsOrder,D as basic,Y as customClearIcon,ee as customControl,X as customIcon,Z as customOption,Mr as default,H as disabledCloseOnBlur,_ as disabledIsClearable,$ as isDisabled,K as isInvalid,Q as isOptionDisabled,U as isOptionFocusable,J as isReadonly,le as reactHookForm,ne as reactHookFormWithDefaultValue,T as withBorderColor,R as withCloseOnSelect,G as withComponent,q as withDefaultValue,L as withDuration,k as withFooter,N as withGutter,z as withMaxSelectValues,A as withOffset,B as withOmitSelectedValues,E as withPlacement,W as withSeparator,P as withSize,V as withVariant};
