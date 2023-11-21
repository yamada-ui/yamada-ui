import{a as e,j as r,F as p}from"./jsx-runtime-b08f8875.js";import{I as ue,b as cn,q as sn,c as un}from"./fontawesome-icon-55aa2a9e.js";import{r as se}from"./index-8ee6c85d.js";import{u as Al,C}from"./index.esm-b68ff52f.js";import{O as l,a as d,u as dn,S as pn,b as hn,f as vn,c as mn,d as On,e as Sn}from"./option-0f55cce3.js";import{P as bn,a as fn}from"./popover-content-fc1bee07.js";import{f as Jl}from"./forward-ref-cf7188bd.js";import{a as gn}from"./use-component-style-b6002d28.js";import{o as Mn}from"./theme-provider-78d359c6.js";import{p as Cn,d as M,e as Kl,t as yn}from"./factory-2d442159.js";import{T as Oe}from"./tag-09055c04.js";import{F as O}from"./form-control-cf335ace.js";import{V as Ql}from"./stack-57e4b232.js";import{B as Ul}from"./button-a09a9cfc.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./index-668a9f85.js";import"./index-98029261.js";import"./index-432541ee.js";import"./index-3ced45bd.js";import"./index-bfc306aa.js";import"./index-8b904657.js";import"./index-c3db8104.js";import"./index-34b9ab94.js";import"./index-ae1fcf3a.js";import"./index-8ce56589.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./motion-5447b2d8.js";import"./slide-fade-523c2ff0.js";import"./index-709acde9.js";import"./utils-83ab8863.js";import"./scale-fade-31abeb34.js";import"./close-button-c3c62f4e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-9c6ba408.js";const n=Jl((c,o)=>{const[u,h]=gn("MultiSelect",c);let{className:i,defaultValue:s=[],component:S,separator:v,isClearable:m=!0,items:t=[],color:a,h:g,height:F,minH:y,minHeight:ne,closeOnSelect:re=!1,containerProps:w,listProps:b,iconProps:I,clearIconProps:f,children:D,...ae}=Mn(h);const de=Cn(D);let te=[];!de.length&&t.length&&(te=t.map((P,me)=>{if("value"in P){const{label:oe,value:ie,...ce}=P;return e(l,{value:ie,...ce,children:oe},me)}else if("items"in P){const{label:oe,items:ie=[],...ce}=P;return e(d,{label:oe??"",...ce,children:ie.map(({label:rn,value:an,...tn},on)=>e(l,{value:an,...tn,children:rn},on))},me)}}).filter(Boolean));let pe=!de.length&&!te.length;const{value:he,descendants:Xl,formControlProps:ve,getPopoverProps:Yl,getContainerProps:Zl,getFieldProps:$l,placeholder:Ll,onClear:en,...ln}=dn({...ae,defaultValue:s,placeholderInOptions:!1,closeOnSelect:re,isEmpty:pe});g=g??F,y=y??ne;const nn={position:"relative",w:"100%",h:"fit-content",color:a,...u.container};return e(pn,{value:Xl,children:e(hn,{value:{...ln,value:he,placeholder:Ll,styles:u},children:e(bn,{...Yl(),children:r(M.div,{className:Kl("ui-multi-select",i),__css:nn,...Zl(w),children:[e(fn,{children:e(wn,{component:S,separator:v,h:g,minH:y,...$l({},o)})}),m&&he.length?e(vn,{...f,onClick:yn(f==null?void 0:f.onClick,en),...ve}):e(mn,{...I,...ve}),pe?null:e(On,{...b,children:D??te})]})})})})}),wn=Jl(({className:c,component:o,separator:u=",",isTruncated:h,noOfLines:i=1,h:s,minH:S,...v},m)=>{const{value:t,displayValue:a,onChange:g,placeholder:F,styles:y}=Sn(),ne=se.useMemo(()=>a!=null&&a.length?o?e(M.span,{isTruncated:h,noOfLines:i,children:a.map((w,b)=>{const I=ae=>{ae.stopPropagation(),g(t[b])},f=o({value:t[b],displayValue:w,index:b,onRemove:I}),D={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return f?se.cloneElement(f,{style:D}):null})}):e(M.span,{isTruncated:h,noOfLines:i,children:a.map((w,b)=>{const I=a.length===b+1;return r(M.span,{display:"inline-block",me:"0.25rem",children:[w,I?null:u]},b)})}):e(M.span,{noOfLines:i,children:F}),[a,h,i,g,F,u,o,t]),re={paddingEnd:"2rem",h:s,minH:S,display:"flex",alignItems:"center",...y.field};return e(M.div,{ref:m,className:Kl("ui-multi-select__field",c),__css:re,py:a!=null&&a.length&&o?"0.125rem":void 0,...v,children:ne})}),sr={title:"Components / Forms / MultiSelect",component:n},V=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),e(n,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),q=()=>r(p,{children:[e(n,{placeholder:"extra small size",size:"xs"}),e(n,{placeholder:"small size",size:"sm"}),e(n,{placeholder:"medium size",size:"md"}),e(n,{placeholder:"large size",size:"lg"})]}),x=()=>r(p,{children:[e(n,{variant:"outline",placeholder:"outline"}),e(n,{variant:"filled",placeholder:"filled"}),e(n,{variant:"flushed",placeholder:"flushed"}),e(n,{variant:"unstyled",placeholder:"unstyled"})]}),W=()=>r(n,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>r(p,{children:[e(n,{placeholder:"default border color"}),e(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(n,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),k=()=>r(n,{placeholder:"キャラクターを選択",separator:";",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),T=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",component:({displayValue:c})=>e(Oe,{children:c}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",component:({displayValue:c,onRemove:o})=>e(Oe,{onClose:o,children:c}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),B=()=>r(n,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),z=()=>r(n,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),R=()=>r(n,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>r(n,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>r(n,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>r(n,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),j=()=>r(n,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>r(n,{placeholder:"キャラクターを選択",gutter:32,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),A=()=>r(n,{placeholder:"キャラクターを選択",duration:.4,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),J=()=>r(p,{children:[e(n,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(n,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(n,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(n,{placeholder:"Select notifications"})})]}),K=()=>r(p,{children:[e(n,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(n,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(n,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(n,{placeholder:"Select notifications"})})]}),Q=()=>r(p,{children:[e(n,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(n,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(n,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(n,{placeholder:"Select notifications"})})]}),U=()=>r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Y=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",iconProps:{children:e(ue,{icon:cn})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),Z=()=>r(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e(ue,{icon:sn,w:"0.5em"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),$=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",optionProps:{icon:e(ue,{icon:un,color:"green.500"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),L=()=>{const[c,o]=se.useState(["孫悟空"]);return r(n,{placeholder:"キャラクターを選択",value:c,onChange:o,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})},ee=()=>{var S,v,m;const c=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:o,handleSubmit:u,watch:h,formState:{errors:i}}=Al(),s=t=>console.log("submit:",t);return console.log("watch:",h()),r(Ql,{as:"form",onSubmit:u(s),children:[e(O,{isInvalid:!!i.select1,label:"Who is your favorite character?",errorMessage:(S=i.select1)==null?void 0:S.message,children:e(C,{name:"select1",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>r(n,{placeholder:"キャラクターを選択",...t,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!i.select2,label:"Who is your favorite character?",errorMessage:(v=i.select2)==null?void 0:v.message,children:e(C,{name:"select2",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>r(n,{placeholder:"キャラクターを選択",...t,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!i.select3,label:"Who is your favorite character?",errorMessage:(m=i.select3)==null?void 0:m.message,children:e(C,{name:"select3",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e(n,{placeholder:"キャラクターを選択",...t,items:c})})}),e(Ul,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},le=()=>{var v,m,t;const c={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:u,handleSubmit:h,watch:i,formState:{errors:s}}=Al({defaultValues:c}),S=a=>console.log("submit:",a);return console.log("watch:",i()),r(Ql,{as:"form",onSubmit:h(S),children:[e(O,{isInvalid:!!s.select1,label:"Who is your favorite character?",errorMessage:(v=s.select1)==null?void 0:v.message,children:e(C,{name:"select1",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>r(n,{placeholder:"キャラクターを選択",...a,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!s.select2,label:"Who is your favorite character?",errorMessage:(m=s.select2)==null?void 0:m.message,children:e(C,{name:"select2",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>r(n,{placeholder:"キャラクターを選択",...a,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!s.select3,label:"Who is your favorite character?",errorMessage:(t=s.select3)==null?void 0:t.message,children:e(C,{name:"select3",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e(n,{placeholder:"キャラクターを選択",...a,items:o})})}),e(Ul,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Se,be,fe;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(fe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,Me,Ce;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="extra small size" size="xs" />
      <MultiSelect placeholder="small size" size="sm" />
      <MultiSelect placeholder="medium size" size="md" />
      <MultiSelect placeholder="large size" size="lg" />
    </>;
}`,...(Ce=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var ye,we,Ie;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant="outline" placeholder="outline" />
      <MultiSelect variant="filled" placeholder="filled" />
      <MultiSelect variant="flushed" placeholder="flushed" />
      <MultiSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Ie=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Fe,De,Pe;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" defaultValue={["ベジータ"]}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Pe=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ve,qe,xe;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="default border color" />
      <MultiSelect focusBorderColor="green.500" placeholder="custom border color" />
      <MultiSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(xe=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:xe.source}}};var We,Ge,ke;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" separator=";">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ke=(Ge=k.parameters)==null?void 0:Ge.docs)==null?void 0:ke.source}}};var Te,Be,ze;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder="キャラクターを選択" component={({
      displayValue
    }) => <Tag>{displayValue}</Tag>}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder="キャラクターを選択" component={({
      displayValue,
      onRemove
    }) => <Tag onClose={onRemove}>{displayValue}</Tag>}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(ze=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Re,He,_e;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(_e=(He=B.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var Ee,je,Ne;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" maxSelectedValues={3}>
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
}`,...(Ne=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Ae,Je,Ke;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnSelect={true}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Ke=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ue,Xe;H.parameters={...H.parameters,docs:{...(Qe=H.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" isClearable={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Xe=(Ue=H.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" closeOnBlur={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...($e=(Ze=_.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var Le,el,ll;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ll=(el=E.parameters)==null?void 0:el.docs)==null?void 0:ll.source}}};var nl,rl,al;j.parameters={...j.parameters,docs:{...(nl=j.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(al=(rl=j.parameters)==null?void 0:rl.docs)==null?void 0:al.source}}};var tl,ol,il;N.parameters={...N.parameters,docs:{...(tl=N.parameters)==null?void 0:tl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" gutter={32}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(il=(ol=N.parameters)==null?void 0:ol.docs)==null?void 0:il.source}}};var cl,sl,ul;A.parameters={...A.parameters,docs:{...(cl=A.parameters)==null?void 0:cl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" duration={0.4}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(ul=(sl=A.parameters)==null?void 0:sl.docs)==null?void 0:ul.source}}};var dl,pl,hl;J.parameters={...J.parameters,docs:{...(dl=J.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isDisabled variant="outline" placeholder="outline" />
      <MultiSelect isDisabled variant="filled" placeholder="filled" />
      <MultiSelect isDisabled variant="flushed" placeholder="flushed" />
      <MultiSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(hl=(pl=J.parameters)==null?void 0:pl.docs)==null?void 0:hl.source}}};var vl,ml,Ol;K.parameters={...K.parameters,docs:{...(vl=K.parameters)==null?void 0:vl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isReadOnly variant="outline" placeholder="outline" />
      <MultiSelect isReadOnly variant="filled" placeholder="filled" />
      <MultiSelect isReadOnly variant="flushed" placeholder="flushed" />
      <MultiSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(Ol=(ml=K.parameters)==null?void 0:ml.docs)==null?void 0:Ol.source}}};var Sl,bl,fl;Q.parameters={...Q.parameters,docs:{...(Sl=Q.parameters)==null?void 0:Sl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isInvalid variant="outline" placeholder="outline" />
      <MultiSelect isInvalid variant="filled" placeholder="filled" />
      <MultiSelect isInvalid variant="flushed" placeholder="flushed" />
      <MultiSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <MultiSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(fl=(bl=Q.parameters)==null?void 0:bl.docs)==null?void 0:fl.source}}};var gl,Ml,Cl;U.parameters={...U.parameters,docs:{...(gl=U.parameters)==null?void 0:gl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Cl=(Ml=U.parameters)==null?void 0:Ml.docs)==null?void 0:Cl.source}}};var yl,wl,Il;X.parameters={...X.parameters,docs:{...(yl=X.parameters)==null?void 0:yl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ" isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(Il=(wl=X.parameters)==null?void 0:wl.docs)==null?void 0:Il.source}}};var Fl,Dl,Pl;Y.parameters={...Y.parameters,docs:{...(Fl=Y.parameters)==null?void 0:Fl.docs,source:{originalSource:`() => {
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
}`,...(Pl=(Dl=Y.parameters)==null?void 0:Dl.docs)==null?void 0:Pl.source}}};var Vl,ql,xl;Z.parameters={...Z.parameters,docs:{...(Vl=Z.parameters)==null?void 0:Vl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder="キャラクターを選択" clearIconProps={{
    children: <Icon icon={faTrash} w="0.5em" />
  }}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(xl=(ql=Z.parameters)==null?void 0:ql.docs)==null?void 0:xl.source}}};var Wl,Gl,kl;$.parameters={...$.parameters,docs:{...(Wl=$.parameters)==null?void 0:Wl.docs,source:{originalSource:`() => {
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
}`,...(kl=(Gl=$.parameters)==null?void 0:Gl.docs)==null?void 0:kl.source}}};var Tl,Bl,zl;L.parameters={...L.parameters,docs:{...(Tl=L.parameters)==null?void 0:Tl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(["孫悟空"]);
  return <MultiSelect placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </MultiSelect>;
}`,...(zl=(Bl=L.parameters)==null?void 0:Bl.docs)==null?void 0:zl.source}}};var Rl,Hl,_l;ee.parameters={...ee.parameters,docs:{...(Rl=ee.parameters)==null?void 0:Rl.docs,source:{originalSource:`() => {
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
}`,...(_l=(Hl=ee.parameters)==null?void 0:Hl.docs)==null?void 0:_l.source}}};var El,jl,Nl;le.parameters={...le.parameters,docs:{...(El=le.parameters)==null?void 0:El.docs,source:{originalSource:`() => {
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
}`,...(Nl=(jl=le.parameters)==null?void 0:jl.docs)==null?void 0:Nl.source}}};const ur=["basic","withSize","withVariant","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ur as __namedExportsOrder,V as basic,Z as customClearIcon,L as customControl,Y as customIcon,$ as customOption,sr as default,_ as disabledCloseOnBlur,H as disabledIsClearable,J as isDisabled,Q as isInvalid,U as isOptionDisabled,X as isOptionFocusable,K as isReadonly,ee as reactHookForm,le as reactHookFormWithDefaultValue,G as withBorderColor,R as withCloseOnSelect,T as withComponent,W as withDefaultValue,A as withDuration,N as withGutter,z as withMaxSelectedValues,j as withOffset,B as withOmitSelectedValues,E as withPlacement,k as withSeparator,q as withSize,x as withVariant};
//# sourceMappingURL=multi-select.stories-c63cf42b.js.map
