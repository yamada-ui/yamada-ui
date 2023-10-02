import{j as e,a as r,F as p}from"./jsx-runtime-29545a09.js";import{I as ie,b as cn,q as sn,c as un}from"./fontawesome-icon-e82242e8.js";import{r as oe}from"./index-76fb7be0.js";import{u as Al,C}from"./index.esm-e2e4d158.js";import{O as l,a as d,u as dn,S as pn,b as hn,f as vn,c as mn,d as On,e as Sn}from"./option-923eae86.js";import{P as bn,a as fn}from"./popover-content-f21cb088.js";import{f as Jl}from"./forward-ref-8b7d2a6f.js";import{a as gn}from"./use-component-style-3d3df90d.js";import{o as Mn}from"./theme-d25050a9.js";import{s as Cn,l as Oe,d as M,e as Kl,v as yn}from"./factory-693455ee.js";import{T as Se}from"./tag-1c32371b.js";import{F as O}from"./form-control-758fc5f1.js";import{V as Ql}from"./stack-ac8f3a97.js";import{B as Xl}from"./button-d7b0a30b.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-c50323e0.js";import"./index-3527803c.js";import"./index-2112f113.js";import"./index-0c75bef6.js";import"./index-335d7bc6.js";import"./index-d2923de7.js";import"./index-0756bc1f.js";import"./index-db546e9e.js";import"./index-d68d7549.js";import"./index-da809563.js";import"./index-cb315714.js";import"./index-41b384d8.js";import"./index-d91aa436.js";import"./index-580b0d9e.js";import"./motion-90200a2f.js";import"./close-button-bc32ad51.js";import"./slide-fade-9d94147f.js";import"./index-033cf86e.js";import"./utils-48bc231d.js";import"./scale-fade-46985d67.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-ed892129.js";const n=Jl((c,o)=>{const[u,h]=gn("Select",c);let{className:i,defaultValue:s=[],component:S,separator:v,isClearable:m=!0,options:t=[],color:a,h:g,height:F,minH:y,minHeight:le,closeOnSelect:ne=!1,containerProps:w,listProps:b,iconProps:I,clearIconProps:f,children:D,...re}=Mn(h);const ce=Cn(D);let ae=[];!ce.length&&t.length&&(ae=t.map(({label:pe,value:te,...he},ve)=>Oe(te)?e(d,{label:pe,...he,children:te.map(({label:an,value:me,...tn},on)=>Oe(me)?null:e(l,{value:me,...tn,children:an},on))},ve):e(l,{value:te,...he,children:pe},ve)));let se=!ce.length&&!ae.length;const{value:ue,descendants:Yl,formControlProps:de,getPopoverProps:Zl,getContainerProps:$l,getFieldProps:Ll,placeholder:en,onClear:ln,...nn}=dn({...re,defaultValue:s,placeholderInOptions:!1,closeOnSelect:ne,isEmpty:se});g=g??F,y=y??le;const rn={position:"relative",w:"100%",h:"fit-content",color:a,...u.container};return e(pn,{value:Yl,children:e(hn,{value:{...nn,value:ue,placeholder:en,styles:u},children:e(bn,{...Zl(),children:r(M.div,{className:Kl("ui-multi-select",i),__css:rn,...$l(w),children:[e(fn,{children:e(wn,{component:S,separator:v,h:g,minH:y,...Ll({},o)})}),m&&ue.length?e(vn,{...f,onClick:yn(f==null?void 0:f.onClick,ln),...de}):e(mn,{...I,...de}),se?null:e(On,{...b,children:D??ae})]})})})})}),wn=Jl(({className:c,component:o,separator:u=",",isTruncated:h,noOfLines:i=1,h:s,minH:S,...v},m)=>{const{value:t,displayValue:a,onChange:g,placeholder:F,styles:y}=Sn(),le=oe.useMemo(()=>a!=null&&a.length?o?e(M.span,{isTruncated:h,noOfLines:i,children:a.map((w,b)=>{const I=re=>{re.stopPropagation(),g(t[b])},f=o({value:t[b],displayValue:w,index:b,onRemove:I}),D={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return f?oe.cloneElement(f,{style:D}):null})}):e(M.span,{isTruncated:h,noOfLines:i,children:a.map((w,b)=>{const I=a.length===b+1;return r(M.span,{display:"inline-block",me:"0.25rem",children:[w,I?null:u]},b)})}):e(M.span,{noOfLines:i,children:F}),[a,h,i,g,F,u,o,t]),ne={paddingEnd:"2rem",h:s,minH:S,display:"flex",alignItems:"center",...y.field};return e(M.div,{ref:m,className:Kl("ui-multi-select-field",c),__css:ne,py:a!=null&&a.length&&o?"0.125rem":void 0,...v,children:le})}),sr={title:"Components / Forms / MultiSelect",component:n},P=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),e(n,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),V=()=>r(p,{children:[e(n,{placeholder:"extra small size",size:"xs"}),e(n,{placeholder:"small size",size:"sm"}),e(n,{placeholder:"medium size",size:"md"}),e(n,{placeholder:"large size",size:"lg"})]}),q=()=>r(p,{children:[e(n,{variant:"outline",placeholder:"outline"}),e(n,{variant:"filled",placeholder:"filled"}),e(n,{variant:"flushed",placeholder:"flushed"}),e(n,{variant:"unstyled",placeholder:"unstyled"})]}),x=()=>r(n,{placeholder:"キャラクターを選択",defaultValue:["ベジータ"],children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),k=()=>r(p,{children:[e(n,{placeholder:"default border color"}),e(n,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(n,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),W=()=>r(n,{placeholder:"キャラクターを選択",separator:";",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",component:({displayValue:c})=>e(Se,{children:c}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",component:({displayValue:c,onRemove:o})=>e(Se,{onCloseClick:o,children:c}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),T=()=>r(n,{placeholder:"キャラクターを選択",omitSelectedValues:!0,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),z=()=>r(n,{placeholder:"キャラクターを選択",maxSelectedValues:3,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),B=()=>r(n,{placeholder:"キャラクターを選択",closeOnSelect:!0,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),R=()=>r(n,{placeholder:"キャラクターを選択",isClearable:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),H=()=>r(n,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),E=()=>r(n,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>r(n,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),j=()=>r(n,{placeholder:"キャラクターを選択",gutter:32,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),N=()=>r(n,{placeholder:"キャラクターを選択",duration:.4,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),U=()=>r(p,{children:[e(n,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(n,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(n,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(n,{placeholder:"Select notifications"})})]}),A=()=>r(p,{children:[e(n,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(n,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(n,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(n,{placeholder:"Select notifications"})})]}),J=()=>r(p,{children:[e(n,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(n,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(n,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(n,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(O,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(n,{placeholder:"Select notifications"})})]}),K=()=>r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Q=()=>r(n,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),X=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",iconProps:{children:e(ie,{icon:cn})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),Y=()=>r(n,{placeholder:"キャラクターを選択",clearIconProps:{children:e(ie,{icon:sn,w:"0.5em"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),Z=()=>r(p,{children:[r(n,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),r(n,{placeholder:"キャラクターを選択",optionProps:{icon:e(ie,{icon:un,color:"green.500"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),$=()=>{const[c,o]=oe.useState(["孫悟空"]);return r(n,{placeholder:"キャラクターを選択",value:c,onChange:o,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})},L=()=>{var S,v,m;const c=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:o,handleSubmit:u,watch:h,formState:{errors:i}}=Al(),s=t=>console.log("submit:",t);return console.log("watch:",h()),r(Ql,{as:"form",onSubmit:u(s),children:[e(O,{isInvalid:!!i.select1,label:"Who is your favorite character?",errorMessage:(S=i.select1)==null?void 0:S.message,children:e(C,{name:"select1",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>r(n,{placeholder:"キャラクターを選択",...t,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!i.select2,label:"Who is your favorite character?",errorMessage:(v=i.select2)==null?void 0:v.message,children:e(C,{name:"select2",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>r(n,{placeholder:"キャラクターを選択",...t,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!i.select3,label:"Who is your favorite character?",errorMessage:(m=i.select3)==null?void 0:m.message,children:e(C,{name:"select3",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>e(n,{placeholder:"キャラクターを選択",...t,options:c})})}),e(Xl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},ee=()=>{var v,m,t;const c={select1:["孫悟空"],select2:["フリーザ"],select3:["リクーム"]},o=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:u,handleSubmit:h,watch:i,formState:{errors:s}}=Al({defaultValues:c}),S=a=>console.log("submit:",a);return console.log("watch:",i()),r(Ql,{as:"form",onSubmit:h(S),children:[e(O,{isInvalid:!!s.select1,label:"Who is your favorite character?",errorMessage:(v=s.select1)==null?void 0:v.message,children:e(C,{name:"select1",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>r(n,{placeholder:"キャラクターを選択",...a,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(O,{isInvalid:!!s.select2,label:"Who is your favorite character?",errorMessage:(m=s.select2)==null?void 0:m.message,children:e(C,{name:"select2",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>r(n,{placeholder:"キャラクターを選択",...a,children:[r(d,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),r(d,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(O,{isInvalid:!!s.select3,label:"Who is your favorite character?",errorMessage:(t=s.select3)==null?void 0:t.message,children:e(C,{name:"select3",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e(n,{placeholder:"キャラクターを選択",...a,options:o})})}),e(Xl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var be,fe,ge;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
    }]
  }];
  return <>
      <MultiSelect placeholder='キャラクターを選択'>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択'>
        <OptionGroup label='地球人'>
          <Option value='孫悟空'>孫悟空</Option>
          <Option value='孫悟飯'>孫悟飯</Option>
          <Option value='クリリン'>クリリン</Option>
        </OptionGroup>

        <OptionGroup label='フリーザ軍'>
          <Option value='フリーザ'>フリーザ</Option>
          <Option value='ギニュー'>ギニュー</Option>
          <Option value='リクーム'>リクーム</Option>
          <Option value='バータ'>バータ</Option>
          <Option value='ジース'>ジース</Option>
          <Option value='グルド'>グルド</Option>
        </OptionGroup>
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択' options={options} />
    </>;
}`,...(ge=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Me,Ce,ye;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder='extra small size' size='xs' />
      <MultiSelect placeholder='small size' size='sm' />
      <MultiSelect placeholder='medium size' size='md' />
      <MultiSelect placeholder='large size' size='lg' />
    </>;
}`,...(ye=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var we,Ie,Fe;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect variant='outline' placeholder='outline' />
      <MultiSelect variant='filled' placeholder='filled' />
      <MultiSelect variant='flushed' placeholder='flushed' />
      <MultiSelect variant='unstyled' placeholder='unstyled' />
    </>;
}`,...(Fe=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var De,Pe,Ve;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' defaultValue={['ベジータ']}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Ve=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var qe,xe,ke;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder='default border color' />
      <MultiSelect focusBorderColor='green.500' placeholder='custom border color' />
      <MultiSelect isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>;
}`,...(ke=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var We,Ge,Te;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' separator=';'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Te=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Te.source}}};var ze,Be,Re;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder='キャラクターを選択' component={({
      displayValue
    }) => <Tag>{displayValue}</Tag>}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択' component={({
      displayValue,
      onRemove
    }) => <Tag onCloseClick={onRemove}>{displayValue}</Tag>}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Re=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var He,Ee,_e;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' omitSelectedValues={true}>
      <OptionGroup label='地球人'>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='孫悟飯'>孫悟飯</Option>
        <Option value='クリリン'>クリリン</Option>
      </OptionGroup>

      <OptionGroup label='フリーザ軍'>
        <Option value='フリーザ'>フリーザ</Option>
        <Option value='ギニュー'>ギニュー</Option>
        <Option value='リクーム'>リクーム</Option>
        <Option value='バータ'>バータ</Option>
        <Option value='ジース'>ジース</Option>
        <Option value='グルド'>グルド</Option>
      </OptionGroup>
    </MultiSelect>;
}`,...(_e=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var je,Ne,Ue;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' maxSelectedValues={3}>
      <OptionGroup label='地球人'>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='孫悟飯'>孫悟飯</Option>
        <Option value='クリリン'>クリリン</Option>
      </OptionGroup>

      <OptionGroup label='フリーザ軍'>
        <Option value='フリーザ'>フリーザ</Option>
        <Option value='ギニュー'>ギニュー</Option>
        <Option value='リクーム'>リクーム</Option>
        <Option value='バータ'>バータ</Option>
        <Option value='ジース'>ジース</Option>
        <Option value='グルド'>グルド</Option>
      </OptionGroup>
    </MultiSelect>;
}`,...(Ue=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Ae,Je,Ke;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' closeOnSelect={true}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Ke=(Je=B.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;R.parameters={...R.parameters,docs:{...(Qe=R.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' isClearable={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Ye=(Xe=R.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,Le;H.parameters={...H.parameters,docs:{...(Ze=H.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' closeOnBlur={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Le=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var el,ll,nl;E.parameters={...E.parameters,docs:{...(el=E.parameters)==null?void 0:el.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(nl=(ll=E.parameters)==null?void 0:ll.docs)==null?void 0:nl.source}}};var rl,al,tl;_.parameters={..._.parameters,docs:{...(rl=_.parameters)==null?void 0:rl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' offset={[16, 16]} listProps={{
    maxW: 'xs'
  }}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(tl=(al=_.parameters)==null?void 0:al.docs)==null?void 0:tl.source}}};var ol,il,cl;j.parameters={...j.parameters,docs:{...(ol=j.parameters)==null?void 0:ol.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' gutter={32}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(cl=(il=j.parameters)==null?void 0:il.docs)==null?void 0:cl.source}}};var sl,ul,dl;N.parameters={...N.parameters,docs:{...(sl=N.parameters)==null?void 0:sl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' duration={0.4}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(dl=(ul=N.parameters)==null?void 0:ul.docs)==null?void 0:dl.source}}};var pl,hl,vl;U.parameters={...U.parameters,docs:{...(pl=U.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isDisabled variant='outline' placeholder='outline' />
      <MultiSelect isDisabled variant='filled' placeholder='filled' />
      <MultiSelect isDisabled variant='flushed' placeholder='flushed' />
      <MultiSelect isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <MultiSelect placeholder='Select notifications' />
      </FormControl>
    </>;
}`,...(vl=(hl=U.parameters)==null?void 0:hl.docs)==null?void 0:vl.source}}};var ml,Ol,Sl;A.parameters={...A.parameters,docs:{...(ml=A.parameters)==null?void 0:ml.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isReadOnly variant='outline' placeholder='outline' />
      <MultiSelect isReadOnly variant='filled' placeholder='filled' />
      <MultiSelect isReadOnly variant='flushed' placeholder='flushed' />
      <MultiSelect isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <MultiSelect placeholder='Select notifications' />
      </FormControl>
    </>;
}`,...(Sl=(Ol=A.parameters)==null?void 0:Ol.docs)==null?void 0:Sl.source}}};var bl,fl,gl;J.parameters={...J.parameters,docs:{...(bl=J.parameters)==null?void 0:bl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect isInvalid variant='outline' placeholder='outline' />
      <MultiSelect isInvalid variant='filled' placeholder='filled' />
      <MultiSelect isInvalid variant='flushed' placeholder='flushed' />
      <MultiSelect isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <MultiSelect placeholder='Select notifications' />
      </FormControl>
    </>;
}`,...(gl=(fl=J.parameters)==null?void 0:fl.docs)==null?void 0:gl.source}}};var Ml,Cl,yl;K.parameters={...K.parameters,docs:{...(Ml=K.parameters)==null?void 0:Ml.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ' isDisabled>
        ベジータ
      </Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(yl=(Cl=K.parameters)==null?void 0:Cl.docs)==null?void 0:yl.source}}};var wl,Il,Fl;Q.parameters={...Q.parameters,docs:{...(wl=Q.parameters)==null?void 0:wl.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ' isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Fl=(Il=Q.parameters)==null?void 0:Il.docs)==null?void 0:Fl.source}}};var Dl,Pl,Vl;X.parameters={...X.parameters,docs:{...(Dl=X.parameters)==null?void 0:Dl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder='キャラクターを選択' iconProps={{
      color: 'primary'
    }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択' iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Vl=(Pl=X.parameters)==null?void 0:Pl.docs)==null?void 0:Vl.source}}};var ql,xl,kl;Y.parameters={...Y.parameters,docs:{...(ql=Y.parameters)==null?void 0:ql.docs,source:{originalSource:`() => {
  return <MultiSelect placeholder='キャラクターを選択' clearIconProps={{
    children: <Icon icon={faTrash} w='0.5em' />
  }}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(kl=(xl=Y.parameters)==null?void 0:xl.docs)==null?void 0:kl.source}}};var Wl,Gl,Tl;Z.parameters={...Z.parameters,docs:{...(Wl=Z.parameters)==null?void 0:Wl.docs,source:{originalSource:`() => {
  return <>
      <MultiSelect placeholder='キャラクターを選択' optionProps={{
      color: 'primary'
    }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択' optionProps={{
      icon: <Icon icon={faCheck} color='green.500' />
    }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>
    </>;
}`,...(Tl=(Gl=Z.parameters)==null?void 0:Gl.docs)==null?void 0:Tl.source}}};var zl,Bl,Rl;$.parameters={...$.parameters,docs:{...(zl=$.parameters)==null?void 0:zl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string[]>(['孫悟空']);
  return <MultiSelect placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>;
}`,...(Rl=(Bl=$.parameters)==null?void 0:Bl.docs)==null?void 0:Rl.source}}};var Hl,El,_l;L.parameters={...L.parameters,docs:{...(Hl=L.parameters)==null?void 0:Hl.docs,source:{originalSource:`() => {
  type Data = {
    select1: string[];
    select2: string[];
    select3: string[];
  };
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select1} label='Who is your favorite character?' errorMessage={errors.select1?.message}>
        <Controller name='select1' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiSelect placeholder='キャラクターを選択' {...field}>
              <Option value='孫悟空'>孫悟空</Option>
              <Option value='ベジータ'>ベジータ</Option>
              <Option value='フリーザ'>フリーザ</Option>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select2} label='Who is your favorite character?' errorMessage={errors.select2?.message}>
        <Controller name='select2' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiSelect placeholder='キャラクターを選択' {...field}>
              <OptionGroup label='地球人'>
                <Option value='孫悟空'>孫悟空</Option>
                <Option value='孫悟飯'>孫悟飯</Option>
                <Option value='クリリン'>クリリン</Option>
              </OptionGroup>

              <OptionGroup label='フリーザ軍'>
                <Option value='フリーザ'>フリーザ</Option>
                <Option value='ギニュー'>ギニュー</Option>
                <Option value='リクーム'>リクーム</Option>
                <Option value='バータ'>バータ</Option>
                <Option value='ジース'>ジース</Option>
                <Option value='グルド'>グルド</Option>
              </OptionGroup>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select3} label='Who is your favorite character?' errorMessage={errors.select3?.message}>
        <Controller name='select3' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiSelect placeholder='キャラクターを選択' {...field} options={options} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(_l=(El=L.parameters)==null?void 0:El.docs)==null?void 0:_l.source}}};var jl,Nl,Ul;ee.parameters={...ee.parameters,docs:{...(jl=ee.parameters)==null?void 0:jl.docs,source:{originalSource:`() => {
  type Data = {
    select1: string[];
    select2: string[];
    select3: string[];
  };
  const defaultValues: Data = {
    select1: ['孫悟空'],
    select2: ['フリーザ'],
    select3: ['リクーム']
  };
  const options: UIOption[] = [{
    label: 'ベジータ',
    value: 'ベジータ'
  }, {
    label: '地球人',
    value: [{
      label: '孫悟空',
      value: '孫悟空'
    }, {
      label: '孫悟飯',
      value: '孫悟飯'
    }, {
      label: 'クリリン',
      value: 'クリリン'
    }]
  }, {
    label: 'フリーザ軍',
    value: [{
      label: 'フリーザ',
      value: 'フリーザ'
    }, {
      label: 'ギニュー',
      value: 'ギニュー'
    }, {
      label: 'リクーム',
      value: 'リクーム'
    }, {
      label: 'バータ',
      value: 'バータ'
    }, {
      label: 'ジース',
      value: 'ジース'
    }, {
      label: 'グルド',
      value: 'グルド'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select1} label='Who is your favorite character?' errorMessage={errors.select1?.message}>
        <Controller name='select1' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiSelect placeholder='キャラクターを選択' {...field}>
              <Option value='孫悟空'>孫悟空</Option>
              <Option value='ベジータ'>ベジータ</Option>
              <Option value='フリーザ'>フリーザ</Option>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select2} label='Who is your favorite character?' errorMessage={errors.select2?.message}>
        <Controller name='select2' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiSelect placeholder='キャラクターを選択' {...field}>
              <OptionGroup label='地球人'>
                <Option value='孫悟空'>孫悟空</Option>
                <Option value='孫悟飯'>孫悟飯</Option>
                <Option value='クリリン'>クリリン</Option>
              </OptionGroup>

              <OptionGroup label='フリーザ軍'>
                <Option value='フリーザ'>フリーザ</Option>
                <Option value='ギニュー'>ギニュー</Option>
                <Option value='リクーム'>リクーム</Option>
                <Option value='バータ'>バータ</Option>
                <Option value='ジース'>ジース</Option>
                <Option value='グルド'>グルド</Option>
              </OptionGroup>
            </MultiSelect>} />
      </FormControl>

      <FormControl isInvalid={!!errors.select3} label='Who is your favorite character?' errorMessage={errors.select3?.message}>
        <Controller name='select3' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <MultiSelect placeholder='キャラクターを選択' {...field} options={options} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Ul=(Nl=ee.parameters)==null?void 0:Nl.docs)==null?void 0:Ul.source}}};const ur=["basic","withSize","withVariant","withDefaultValue","withBorderColor","withSeparator","withComponent","withOmitSelectedValues","withMaxSelectedValues","withCloseOnSelect","disabledIsClearable","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customClearIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ur as __namedExportsOrder,P as basic,Y as customClearIcon,$ as customControl,X as customIcon,Z as customOption,sr as default,H as disabledCloseOnBlur,R as disabledIsClearable,U as isDisabled,J as isInvalid,K as isOptionDisabled,Q as isOptionFocusable,A as isReadonly,L as reactHookForm,ee as reactHookFormWithDefaultValue,k as withBorderColor,B as withCloseOnSelect,G as withComponent,x as withDefaultValue,N as withDuration,j as withGutter,z as withMaxSelectedValues,_ as withOffset,T as withOmitSelectedValues,E as withPlacement,W as withSeparator,V as withSize,q as withVariant};
//# sourceMappingURL=multi-select.stories-0a6a0163.js.map
