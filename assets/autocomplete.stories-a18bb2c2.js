import{j as e,a as t,F as m}from"./jsx-runtime-29545a09.js";import{I as fo,b as zo,c as Bo}from"./fontawesome-icon-30606a78.js";import{r as To}from"./index-76fb7be0.js";import{u as go,C as O}from"./index.esm-e2e4d158.js";import{u as Go,A as Ro,a as Ho,c as Eo,d as Y,e as Z,f as $,g as _o,h as Uo,i as o,j as b}from"./autocomplete-empty-499317c0.js";import{P as jo,a as No}from"./popover-content-529b9869.js";import{f as Co}from"./forward-ref-8b7d2a6f.js";import{a as Lo}from"./use-component-style-eed0605d.js";import{o as Jo}from"./theme-752d0904.js";import{d as N,e as So}from"./factory-e20f0797.js";import{F as v}from"./form-control-0d658cd3.js";import{V as yo}from"./stack-ff92eb87.js";import{B as wo}from"./button-f58fea21.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-0ac17974.js";import"./index-7c33f66e.js";import"./index-3b7d57d5.js";import"./index-e7862a27.js";import"./index-281b3238.js";import"./index-713e53ea.js";import"./index-dc576eda.js";import"./index-be13f160.js";import"./index-d68d7549.js";import"./index-fa018534.js";import"./index-78845ff8.js";import"./index-e01cf5aa.js";import"./index-be349d52.js";import"./index-8f493d3c.js";import"./motion-90200a2f.js";import"./close-button-e957af92.js";import"./slide-fade-fb348c14.js";import"./index-033cf86e.js";import"./utils-b801d44f.js";import"./scale-fade-f383e141.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-427fd69a.js";const l=Co((n,r)=>{const[u,A]=Lo("Select",n);let{className:c,defaultValue:i="",color:h,h:p,height:d,minH:a,minHeight:s,containerProps:U,listProps:L,inputProps:Io,iconProps:Po,children:J,...Fo}=Jo(A);const{descendants:Do,formControlProps:K,getPopoverProps:qo,getContainerProps:xo,getFieldProps:Wo,createOption:j,isEmpty:Q,inputValue:X,computedChildren:Vo,...Mo}=Go({...Fo,defaultValue:i,children:J});p=p??d,a=a??s;const ko={position:"relative",w:"100%",h:"fit-content",color:h,...u.container};return e(Ro,{value:Do,children:e(Ho,{value:{...Mo,formControlProps:K,inputValue:X,createOption:j,isEmpty:Q,styles:u},children:e(jo,{...qo(),children:t(N.div,{className:So("ui-autocomplete",c),__css:ko,...xo(U),children:[e(Ko,{h:p,minH:a,inputProps:Io,...Wo({},r)}),e(Eo,{...Po,...K}),Q?e(Y,{...L,children:j&&X?e(Z,{}):e($,{})}):t(Y,{...L,children:[j?e(Z,{}):e($,{}),J??Vo]})]})})})})}),Ko=Co(({className:n,h:r,minH:u,placeholder:A,inputProps:c,...i},h)=>{const{displayValue:p,inputValue:d,styles:a}=_o(),{getInputProps:s}=Uo(),U={paddingEnd:"2rem",h:r,minH:u,display:"flex",alignItems:"center",...a.field,cursor:"text"};return e(No,{children:e(N.div,{className:So("ui-autocomplete-field",n),__css:U,...i,children:e(N.input,{className:"ui-autocomplete-input",display:"inline-block",w:"full",placeholder:A,...s({...c,value:d||p||""},h)})})})}),Vl={title:"Components / Forms / Autocomplete",component:l},f=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",children:[t(b,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(b,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),g=()=>t(m,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),C=()=>t(m,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),S=()=>t(l,{placeholder:"キャラクターを選択",defaultValue:"ベジータ",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),y=()=>t(l,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),w=()=>e(l,{placeholder:"キャラクターを選択",options:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],createOption:!0,onCreate:(r,u)=>console.log("created option",r,"new options",u)}),I=()=>{const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return t(m,{children:[e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"first"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"last"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:"地球人"}),e(l,{placeholder:"キャラクターを選択",options:n,createOption:!0,insertPositionOnCreate:["フリーザ軍","last"]})]})},P=()=>t(m,{children:[t(l,{placeholder:"default border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),F=()=>t(l,{placeholder:"キャラクターを選択",closeOnSelect:!1,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),D=()=>t(l,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),q=()=>t(l,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),x=()=>t(l,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),W=()=>t(l,{placeholder:"キャラクターを選択",gutter:32,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),V=()=>t(l,{placeholder:"キャラクターを選択",duration:.4,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),M=()=>t(m,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),k=()=>t(m,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Autocomplete notifications"})})]}),z=()=>t(m,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Autocomplete notifications"})})]}),B=()=>t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),T=()=>t(l,{placeholder:"キャラクターを選択",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),G=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",iconProps:{children:e(fo,{icon:zo})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),R=()=>t(m,{children:[t(l,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(l,{placeholder:"キャラクターを選択",optionProps:{icon:e(fo,{icon:Bo,color:"green.500"})},children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>{const[n,r]=To.useState("孫悟空");return t(l,{placeholder:"キャラクターを選択",value:n,onChange:r,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},E=()=>{var h,p,d;const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:r,handleSubmit:u,watch:A,formState:{errors:c}}=go(),i=a=>console.log("submit:",a);return console.log("watch:",A()),t(yo,{as:"form",onSubmit:u(i),children:[e(v,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(h=c.autocomplete1)==null?void 0:h.message,children:e(O,{name:"autocomplete1",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>t(l,{placeholder:"キャラクターを選択",...a,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(v,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(p=c.autocomplete2)==null?void 0:p.message,children:e(O,{name:"autocomplete2",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>t(l,{placeholder:"キャラクターを選択",...a,children:[t(b,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(b,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]})})}),e(v,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(d=c.autocomplete3)==null?void 0:d.message,children:e(O,{name:"autocomplete3",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>e(l,{placeholder:"キャラクターを選択",...a,options:n})})}),e(wo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},_=()=>{var p,d,a;const n={autocomplete1:"孫悟空",autocomplete2:"フリーザ",autocomplete3:"リクーム"},r=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",value:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",value:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:u,handleSubmit:A,watch:c,formState:{errors:i}}=go({defaultValues:n}),h=s=>console.log("submit:",s);return console.log("watch:",c()),t(yo,{as:"form",onSubmit:A(h),children:[e(v,{isInvalid:!!i.autocomplete1,label:"Who is your favorite character?",errorMessage:(p=i.autocomplete1)==null?void 0:p.message,children:e(O,{name:"autocomplete1",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>t(l,{placeholder:"キャラクターを選択",...s,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(v,{isInvalid:!!i.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=i.autocomplete2)==null?void 0:d.message,children:e(O,{name:"autocomplete2",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>t(l,{placeholder:"キャラクターを選択",...s,children:[t(b,{label:"地球人",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"孫悟飯",children:"孫悟飯"}),e(o,{value:"クリリン",children:"クリリン"})]}),t(b,{label:"フリーザ軍",children:[e(o,{value:"フリーザ",children:"フリーザ"}),e(o,{value:"ギニュー",children:"ギニュー"}),e(o,{value:"リクーム",children:"リクーム"}),e(o,{value:"バータ",children:"バータ"}),e(o,{value:"ジース",children:"ジース"}),e(o,{value:"グルド",children:"グルド"})]})]})})}),e(v,{isInvalid:!!i.autocomplete3,label:"Who is your favorite character?",errorMessage:(a=i.autocomplete3)==null?void 0:a.message,children:e(O,{name:"autocomplete3",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>e(l,{placeholder:"キャラクターを選択",...s,options:r})})}),e(wo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ee,oe,le;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
      <Autocomplete placeholder='キャラクターを選択'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder='キャラクターを選択'>
        <AutocompleteOptionGroup label='地球人'>
          <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
          <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
          <AutocompleteOption value='クリリン'>クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label='フリーザ軍'>
          <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
          <AutocompleteOption value='ギニュー'>ギニュー</AutocompleteOption>
          <AutocompleteOption value='リクーム'>リクーム</AutocompleteOption>
          <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
          <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
          <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </Autocomplete>

      <Autocomplete placeholder='キャラクターを選択' options={options} />
    </>;
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var te,ne,ae;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder='extra small size' size='xs' />
      <Autocomplete placeholder='small size' size='sm' />
      <Autocomplete placeholder='medium size' size='md' />
      <Autocomplete placeholder='large size' size='lg' />
    </>;
}`,...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,ue,ce;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete variant='outline' placeholder='outline' />
      <Autocomplete variant='filled' placeholder='filled' />
      <Autocomplete variant='flushed' placeholder='flushed' />
      <Autocomplete variant='unstyled' placeholder='unstyled' />
    </>;
}`,...(ce=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ie,pe,se;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' defaultValue='ベジータ'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(se=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:se.source}}};var me,de,ve;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' emptyMessage='キャラクターが存在しません'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(ve=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var he,Ae,Oe;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
  return <Autocomplete placeholder='キャラクターを選択' options={options} createOption onCreate={(newOption, newOptions) => console.log('created option', newOption, 'new options', newOptions)} />;
}`,...(Oe=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var be,fe,ge;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
      <Autocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate='first' />
      <Autocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate='last' />
      <Autocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate='地球人' />
      <Autocomplete placeholder='キャラクターを選択' options={options} createOption insertPositionOnCreate={['フリーザ軍', 'last']} />
    </>;
}`,...(ge=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Ce,Se,ye;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder='default border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete focusBorderColor='green.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete isInvalid errorBorderColor='orange.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(ye=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var we,Ie,Pe;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' closeOnSelect={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Pe=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Fe,De,qe;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' closeOnBlur={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(qe=(De=D.parameters)==null?void 0:De.docs)==null?void 0:qe.source}}};var xe,We,Ve;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ve=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var Me,ke,ze;x.parameters={...x.parameters,docs:{...(Me=x.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' offset={[16, 16]} listProps={{
    maxW: 'xs'
  }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(ze=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Be,Te,Ge;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' gutter={32}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ge=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ge.source}}};var Re,He,Ee;V.parameters={...V.parameters,docs:{...(Re=V.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択' duration={0.4}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ee=(He=V.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var _e,Ue,je;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isDisabled variant='outline' placeholder='outline' />
      <Autocomplete isDisabled variant='filled' placeholder='filled' />
      <Autocomplete isDisabled variant='flushed' placeholder='flushed' />
      <Autocomplete isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <Autocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(je=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var Ne,Le,Je;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isReadOnly variant='outline' placeholder='outline' />
      <Autocomplete isReadOnly variant='filled' placeholder='filled' />
      <Autocomplete isReadOnly variant='flushed' placeholder='flushed' />
      <Autocomplete isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <Autocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(Je=(Le=k.parameters)==null?void 0:Le.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isInvalid variant='outline' placeholder='outline' />
      <Autocomplete isInvalid variant='filled' placeholder='filled' />
      <Autocomplete isInvalid variant='flushed' placeholder='flushed' />
      <Autocomplete isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <Autocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>;
}`,...(Xe=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,$e;B.parameters={...B.parameters,docs:{...(Ye=B.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...($e=(Ze=B.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var eo,oo,lo;T.parameters={...T.parameters,docs:{...(eo=T.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(lo=(oo=T.parameters)==null?void 0:oo.docs)==null?void 0:lo.source}}};var to,no,ao;G.parameters={...G.parameters,docs:{...(to=G.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder='キャラクターを選択' iconProps={{
      color: 'primary'
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder='キャラクターを選択' iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(ao=(no=G.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var ro,uo,co;R.parameters={...R.parameters,docs:{...(ro=R.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder='キャラクターを選択' optionProps={{
      color: 'primary'
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder='キャラクターを選択' optionProps={{
      icon: <Icon icon={faCheck} color='green.500' />
    }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(co=(uo=R.parameters)==null?void 0:uo.docs)==null?void 0:co.source}}};var io,po,so;H.parameters={...H.parameters,docs:{...(io=H.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>('孫悟空');
  return <Autocomplete placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(so=(po=H.parameters)==null?void 0:po.docs)==null?void 0:so.source}}};var mo,vo,ho;E.parameters={...E.parameters,docs:{...(mo=E.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
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
      <FormControl isInvalid={!!errors.autocomplete1} label='Who is your favorite character?' errorMessage={errors.autocomplete1?.message}>
        <Controller name='autocomplete1' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Autocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
              <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
              <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label='Who is your favorite character?' errorMessage={errors.autocomplete2?.message}>
        <Controller name='autocomplete2' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Autocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOptionGroup label='地球人'>
                <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
                <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
                <AutocompleteOption value='クリリン'>
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label='フリーザ軍'>
                <AutocompleteOption value='フリーザ'>
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value='ギニュー'>
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value='リクーム'>
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
                <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
                <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label='Who is your favorite character?' errorMessage={errors.autocomplete3?.message}>
        <Controller name='autocomplete3' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Autocomplete placeholder='キャラクターを選択' {...field} options={options} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(ho=(vo=E.parameters)==null?void 0:vo.docs)==null?void 0:ho.source}}};var Ao,Oo,bo;_.parameters={..._.parameters,docs:{...(Ao=_.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
  };
  const defaultValues: Data = {
    autocomplete1: '孫悟空',
    autocomplete2: 'フリーザ',
    autocomplete3: 'リクーム'
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
      <FormControl isInvalid={!!errors.autocomplete1} label='Who is your favorite character?' errorMessage={errors.autocomplete1?.message}>
        <Controller name='autocomplete1' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Autocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
              <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
              <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label='Who is your favorite character?' errorMessage={errors.autocomplete2?.message}>
        <Controller name='autocomplete2' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Autocomplete placeholder='キャラクターを選択' {...field}>
              <AutocompleteOptionGroup label='地球人'>
                <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
                <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
                <AutocompleteOption value='クリリン'>
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label='フリーザ軍'>
                <AutocompleteOption value='フリーザ'>
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value='ギニュー'>
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value='リクーム'>
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
                <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
                <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label='Who is your favorite character?' errorMessage={errors.autocomplete3?.message}>
        <Controller name='autocomplete3' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Autocomplete placeholder='キャラクターを選択' {...field} options={options} />} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(bo=(Oo=_.parameters)==null?void 0:Oo.docs)==null?void 0:bo.source}}};const Ml=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withCreateOption","withCreateOrder","withBorderColor","disabledCloseOnSelect","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Ml as __namedExportsOrder,f as basic,H as customControl,G as customIcon,R as customOption,Vl as default,D as disabledCloseOnBlur,F as disabledCloseOnSelect,M as isDisabled,z as isInvalid,B as isOptionDisabled,T as isOptionFocusable,k as isReadonly,E as reactHookForm,_ as reactHookFormWithDefaultValue,P as withBorderColor,w as withCreateOption,I as withCreateOrder,S as withDefaultValue,V as withDuration,y as withEmptyMessage,W as withGutter,x as withOffset,q as withPlacement,g as withSize,C as withVariant};
//# sourceMappingURL=autocomplete.stories-a18bb2c2.js.map
