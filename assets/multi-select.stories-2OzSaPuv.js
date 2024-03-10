import{j as e,a as n,F as p}from"./jsx-runtime-5BUNAZ9W.js";import{I as ce,m as il,o as sl,d as cl}from"./fontawesome-icon-OAXURu-V.js";import{r as se}from"./index-4g5l5LRQ.js";import{u as ju,C as O}from"./index.esm-3DtIbTPy.js";import{O as u,a as d,u as dl,S as pl,b as Fl,f as Bl,c as hl,d as vl,e as ml}from"./option-eDT36MET.js";import{P as Al,a as Cl}from"./popover-content-RXpo2a3o.js";import{P as El}from"./container-portal-C4oLkacu.js";import{f as Lu}from"./forward-ref-A-8Arhkk.js";import{u as Ol}from"./use-component-style-WCoXUinJ.js";import{o as Dl}from"./theme-provider-GeG-940j.js";import{v as bl,u as E,a as $u,h as Sl}from"./factory-PArTdL2L.js";import{T as ve}from"./tag-zqsCEroy.js";import{F as m}from"./form-control-6MywZV1a.js";import{V as Ju}from"./stack-AzA1hnGh.js";import{B as Ku}from"./button-Uf5TRNrD.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-39Pfil-I.js";import"./index-ekn2fQi1.js";import"./index-HLayQ7yo.js";import"./index-R99CAU7w.js";import"./index-rCbW54RG.js";import"./index-IEMKMAHA.js";import"./index-3Ato3z7D.js";import"./index-zvkm8TB2.js";import"./index-fNaRodoC.js";import"./index-YuXFfT5-.js";import"./index-l3SrXRAE.js";import"./index-nT1Tax2E.js";import"./index-zDL136ZB.js";import"./index-tnmL674y.js";import"./motion-heeYkzTb.js";import"./slide-fade-DuCexvp_.js";import"./index-eMn_GZVX.js";import"./motion-5fUAUGeG.js";import"./utils-ybzO87f9.js";import"./scale-fade-jRQNkYgd.js";import"./close-button-qVEnagAe.js";import"./use-ripple-7QvyeNp2.js";import"./index-jmm5gWkb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./loading-yz72m8Iy.js";const l=Lu((i,a)=>{const[s,F]=Ol("MultiSelect",i);let{className:o,defaultValue:c=[],component:A,separator:B,isClearable:h=!0,items:t=[],color:r,h:D,height:f,minH:g,minHeight:le,closeOnSelect:ne=!1,containerProps:b,listProps:v,iconProps:S,clearIconProps:C,portalProps:re={isDisabled:!0},children:M,...Qu}=Dl(F);const de=bl(M);let te=[];!de.length&&t.length&&(te=t.map((y,he)=>{if("value"in y){const{label:ae,value:oe,...ie}=y;return e(u,{value:oe,...ie,children:ae},he)}else if("items"in y){const{label:ae,items:oe=[],...ie}=y;return e(d,{label:ae??"",...ie,children:oe.map(({label:rl,value:tl,...al},ol)=>e(u,{value:tl,...al,children:rl},ol))},he)}}).filter(Boolean));let pe=!de.length&&!te.length;const{value:Fe,descendants:Uu,formControlProps:Be,getPopoverProps:Xu,getContainerProps:Yu,getFieldProps:Zu,placeholder:el,onClear:ul,...ll}=dl({...Qu,defaultValue:c,placeholderInOptions:!1,closeOnSelect:ne,isEmpty:pe});D??(D=f),g??(g=le);const nl={w:"100%",h:"fit-content",color:r,...s.container};return e(pl,{value:Uu,children:e(Fl,{value:{...ll,value:Fe,placeholder:el,styles:s},children:e(Al,{...Xu(),children:n(E.div,{className:$u("ui-multi-select",o),__css:nl,...Yu(b),children:[n(E.div,{className:"ui-multi-select__inner",__css:{position:"relative",...s.inner},children:[e(Cl,{children:e(fl,{component:A,separator:B,h:D,minH:g,...Zu({},a)})}),h&&Fe.length?e(Bl,{...C,onClick:Sl(C==null?void 0:C.onClick,ul),...Be}):e(hl,{...S,...Be})]}),pe?null:e(El,{...re,children:e(vl,{...v,children:M??te})})]})})})})}),fl=Lu(({className:i,component:a,separator:s=",",isTruncated:F,lineClamp:o=1,h:c,minH:A,...B},h)=>{const{value:t,label:r,onChange:D,placeholder:f,styles:g}=ml(),le=se.useMemo(()=>r!=null&&r.length?a?e(E.span,{isTruncated:F,lineClamp:o,children:r.map((b,v)=>{const S=M=>{M.stopPropagation(),D(t[v])},C=a({value:t[v],label:b,index:v,onRemove:S}),re={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return C?se.cloneElement(C,{key:v,style:re}):null})}):e(E.span,{isTruncated:F,lineClamp:o,children:r.map((b,v)=>{const S=r.length===v+1;return e(E.span,{display:"inline-block",me:"0.25rem",dangerouslySetInnerHTML:{__html:`${b}${S?"":s}`}},v)})}):e(E.span,{lineClamp:o,children:f}),[r,F,o,D,f,s,a,t]),ne={pe:"2rem",h:c,minH:A,display:"flex",alignItems:"center",...g.field};return e(E.div,{ref:h,className:$u("ui-multi-select__field",i),__css:ne,py:r!=null&&r.length&&a?"0.125rem":void 0,...B,children:le})}),hn={title:"Components / Forms / MultiSelect",component:l},w=()=>n(p,{children:[n(l,{placeholder:"キャラクターを選択",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),n(l,{placeholder:"キャラクターを選択",children:[n(d,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),n(d,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),I=()=>n(p,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),P=()=>n(p,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),V=()=>n(l,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),q=()=>n(p,{children:[e(l,{placeholder:"default border color"}),e(l,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),x=()=>n(l,{placeholder:"キャラクターを選択",separator:";",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),W=()=>n(p,{children:[n(l,{placeholder:"キャラクターを選択",component:({label:i})=>e(ve,{children:i}),children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),n(l,{placeholder:"キャラクターを選択",component:({label:i,onRemove:a})=>e(ve,{onClose:a,children:i}),children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),k=()=>n(l,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[n(d,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),n(d,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]}),G=()=>n(l,{placeholder:"キャラクターを選択",maxSelectValues:3,children:[n(d,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),n(d,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]}),T=()=>n(l,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),z=()=>n(l,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),R=()=>n(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),_=()=>n(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),H=()=>n(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),N=()=>n(l,{placeholder:"キャラクターを選択",gutter:32,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),j=()=>n(l,{placeholder:"キャラクターを選択",duration:.4,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),L=()=>n(p,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),$=()=>n(p,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),J=()=>n(p,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Select notifications"})})]}),K=()=>n(l,{placeholder:"キャラクターを選択",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>n(l,{placeholder:"キャラクターを選択",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),U=()=>n(p,{children:[n(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),n(l,{placeholder:"キャラクターを選択",iconProps:{children:e(ce,{icon:il})},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),X=()=>n(l,{placeholder:"キャラクターを選択",clearIconProps:{children:e(ce,{icon:sl,w:"0.5em"})},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>n(p,{children:[n(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]}),n(l,{placeholder:"キャラクターを選択",optionProps:{icon:e(ce,{icon:cl,color:"green.500"})},children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})]}),Z=()=>{const[i,a]=se.useState(["孫悟空"]);return n(l,{placeholder:"キャラクターを選択",value:i,onChange:a,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})},ee=()=>{var A,B,h;const i=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:s,watch:F,formState:{errors:o}}=ju(),c=t=>console.log("submit:",t);return console.log("watch:",F()),n(Ju,{as:"form",onSubmit:s(c),children:[e(m,{isInvalid:!!o.select1,label:"Who is your favorite character?",errorMessage:(A=o.select1)==null?void 0:A.message,children:e(O,{name:"select1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>n(l,{placeholder:"キャラクターを選択",...t,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})})}),e(m,{isInvalid:!!o.select2,label:"Who is your favorite character?",errorMessage:(B=o.select2)==null?void 0:B.message,children:e(O,{name:"select2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>n(l,{placeholder:"キャラクターを選択",...t,children:[n(d,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),n(d,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]})})}),e(m,{isInvalid:!!o.select3,label:"Who is your favorite character?",errorMessage:(h=o.select3)==null?void 0:h.message,children:e(O,{name:"select3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e(l,{placeholder:"キャラクターを選択",...t,items:i})})}),e(Ku,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ue=()=>{var B,h,t;const i={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},a=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:s,handleSubmit:F,watch:o,formState:{errors:c}}=ju({defaultValues:i}),A=r=>console.log("submit:",r);return console.log("watch:",o()),n(Ju,{as:"form",onSubmit:F(A),children:[e(m,{isInvalid:!!c.select1,label:"Who is your favorite character?",errorMessage:(B=c.select1)==null?void 0:B.message,children:e(O,{name:"select1",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>n(l,{placeholder:"キャラクターを選択",...r,children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"ベジータ",children:"ベジータ"}),e(u,{value:"フリーザ",children:"フリーザ"})]})})}),e(m,{isInvalid:!!c.select2,label:"Who is your favorite character?",errorMessage:(h=c.select2)==null?void 0:h.message,children:e(O,{name:"select2",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>n(l,{placeholder:"キャラクターを選択",...r,children:[n(d,{label:"地球人",children:[e(u,{value:"孫悟空",children:"孫悟空"}),e(u,{value:"孫悟飯",children:"孫悟飯"}),e(u,{value:"クリリン",children:"クリリン"})]}),n(d,{label:"フリーザ軍",children:[e(u,{value:"フリーザ",children:"フリーザ"}),e(u,{value:"ギニュー",children:"ギニュー"}),e(u,{value:"リクーム",children:"リクーム"}),e(u,{value:"バータ",children:"バータ"}),e(u,{value:"ジース",children:"ジース"}),e(u,{value:"グルド",children:"グルド"})]})]})})}),e(m,{isInvalid:!!c.select3,label:"Who is your favorite character?",errorMessage:(t=c.select3)==null?void 0:t.message,children:e(O,{name:"select3",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e(l,{placeholder:"キャラクターを選択",...r,items:a})})}),e(Ku,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var me,Ae,Ce;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Ee,Oe,De;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="extra small size" size="xs" />
      <MultiSelect placeholder="small size" size="sm" />
      <MultiSelect placeholder="medium size" size="md" />
      <MultiSelect placeholder="large size" size="lg" />
    </>;
}`,...(De=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var be,Se,fe;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(fe=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ge,Me,ye;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ye=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var we,Ie,Pe;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Pe=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ve,qe,xe;x.parameters={...x.parameters,docs:{...(Ve=x.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(xe=(qe=x.parameters)==null?void 0:qe.docs)==null?void 0:xe.source}}};var We,ke,Ge;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Ge=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ge.source}}};var Te,ze,Re;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(Re=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var _e,He,Ne;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(He=G.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var je,Le,$e;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnSelect={true}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...($e=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Je,Ke,Qe;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" isClearable={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Qe=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;R.parameters={...R.parameters,docs:{...(Ue=R.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnBlur={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ye=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,eu,uu;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(uu=(eu=_.parameters)==null?void 0:eu.docs)==null?void 0:uu.source}}};var lu,nu,ru;H.parameters={...H.parameters,docs:{...(lu=H.parameters)==null?void 0:lu.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ru=(nu=H.parameters)==null?void 0:nu.docs)==null?void 0:ru.source}}};var tu,au,ou;N.parameters={...N.parameters,docs:{...(tu=N.parameters)==null?void 0:tu.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" gutter={32}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ou=(au=N.parameters)==null?void 0:au.docs)==null?void 0:ou.source}}};var iu,su,cu;j.parameters={...j.parameters,docs:{...(iu=j.parameters)==null?void 0:iu.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" duration={0.4}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(cu=(su=j.parameters)==null?void 0:su.docs)==null?void 0:cu.source}}};var du,pu,Fu;L.parameters={...L.parameters,docs:{...(du=L.parameters)==null?void 0:du.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isDisabled variant="outline" placeholder="outline" />
      <MultiSelect isDisabled variant="filled" placeholder="filled" />
      <MultiSelect isDisabled variant="flushed" placeholder="flushed" />
      <MultiSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Fu=(pu=L.parameters)==null?void 0:pu.docs)==null?void 0:Fu.source}}};var Bu,hu,vu;$.parameters={...$.parameters,docs:{...(Bu=$.parameters)==null?void 0:Bu.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isReadOnly variant="outline" placeholder="outline" />
      <MultiSelect isReadOnly variant="filled" placeholder="filled" />
      <MultiSelect isReadOnly variant="flushed" placeholder="flushed" />
      <MultiSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(vu=(hu=$.parameters)==null?void 0:hu.docs)==null?void 0:vu.source}}};var mu,Au,Cu;J.parameters={...J.parameters,docs:{...(mu=J.parameters)==null?void 0:mu.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isInvalid variant="outline" placeholder="outline" />
      <MultiSelect isInvalid variant="filled" placeholder="filled" />
      <MultiSelect isInvalid variant="flushed" placeholder="flushed" />
      <MultiSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Cu=(Au=J.parameters)==null?void 0:Au.docs)==null?void 0:Cu.source}}};var Eu,Ou,Du;K.parameters={...K.parameters,docs:{...(Eu=K.parameters)==null?void 0:Eu.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Du=(Ou=K.parameters)==null?void 0:Ou.docs)==null?void 0:Du.source}}};var bu,Su,fu;Q.parameters={...Q.parameters,docs:{...(bu=Q.parameters)==null?void 0:bu.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(fu=(Su=Q.parameters)==null?void 0:Su.docs)==null?void 0:fu.source}}};var gu,Mu,yu;U.parameters={...U.parameters,docs:{...(gu=U.parameters)==null?void 0:gu.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(yu=(Mu=U.parameters)==null?void 0:Mu.docs)==null?void 0:yu.source}}};var wu,Iu,Pu;X.parameters={...X.parameters,docs:{...(wu=X.parameters)==null?void 0:wu.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Icon icon={faTrash} w="0.5em" />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Pu=(Iu=X.parameters)==null?void 0:Iu.docs)==null?void 0:Pu.source}}};var Vu,qu,xu;Y.parameters={...Y.parameters,docs:{...(Vu=Y.parameters)==null?void 0:Vu.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" optionProps={{
      icon: <Icon icon={faCheck} color="green.500" />
    }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(xu=(qu=Y.parameters)==null?void 0:qu.docs)==null?void 0:xu.source}}};var Wu,ku,Gu;Z.parameters={...Z.parameters,docs:{...(Wu=Z.parameters)==null?void 0:Wu.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Gu=(ku=Z.parameters)==null?void 0:ku.docs)==null?void 0:Gu.source}}};var Tu,zu,Ru;ee.parameters={...ee.parameters,docs:{...(Tu=ee.parameters)==null?void 0:Tu.docs,source:{originalSource:`() => {
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
}`,...(Ru=(zu=ee.parameters)==null?void 0:zu.docs)==null?void 0:Ru.source}}};var _u,Hu,Nu;ue.parameters={...ue.parameters,docs:{...(_u=ue.parameters)==null?void 0:_u.docs,source:{originalSource:`() => {
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
}`,...(Nu=(Hu=ue.parameters)==null?void 0:Hu.docs)==null?void 0:Nu.source}}};const vn=["basic","withSize","withVariant","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{vn as __namedExportsOrder,w as basic,X as customClearIcon,Z as customControl,U as customIcon,Y as customOption,hn as default,R as disabledCloseOnBlur,z as disabledIsClearable,L as isDisabled,J as isInvalid,K as isOptionDisabled,Q as isOptionFocusable,$ as isReadonly,ee as reactHookForm,ue as reactHookFormWithDefaultValue,q as withBorderColor,T as withCloseOnSelect,W as withComponent,V as withDefaultValue,j as withDuration,N as withGutter,G as withMaxSelectValues,H as withOffset,k as withOmitSelectedValues,_ as withPlacement,x as withSeparator,I as withSize,P as withVariant};
