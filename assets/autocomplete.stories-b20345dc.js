import{a as e,j as t,F as m}from"./jsx-runtime-b08f8875.js";import{I as wl,b as _l,c as Gl}from"./fontawesome-icon-55aa2a9e.js";import{r as Rl}from"./index-8ee6c85d.js";import{u as Sl,C as b}from"./index.esm-b68ff52f.js";import{u as Hl,A as El,a as Nl,c as jl,d as Z,e as $,f as ee,g as Ll,h as Jl,i as l,j as O}from"./autocomplete-empty-d2b814e1.js";import{P as Kl,a as Ql}from"./popover-content-70b39a94.js";import{f as yl}from"./forward-ref-cf7188bd.js";import{a as Ul}from"./use-component-style-b6002d28.js";import{o as Xl}from"./theme-provider-78d359c6.js";import{d as j,e as Il}from"./factory-2d442159.js";import{F as v}from"./form-control-8d0ebc8d.js";import{V as Fl}from"./stack-57e4b232.js";import{B as Pl}from"./button-a09a9cfc.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./index-668a9f85.js";import"./index-98029261.js";import"./index-980936f4.js";import"./index-3ced45bd.js";import"./index-bfc306aa.js";import"./index-8b904657.js";import"./index-c3db8104.js";import"./index-34b9ab94.js";import"./index-ae1fcf3a.js";import"./index-84203207.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./motion-5447b2d8.js";import"./slide-fade-523c2ff0.js";import"./index-709acde9.js";import"./utils-83ab8863.js";import"./scale-fade-31abeb34.js";import"./close-button-7784ce89.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-9c6ba408.js";const o=yl((n,a)=>{const[u,A]=Ul("Autocomplete",n);let{className:i,defaultValue:c="",color:h,h:s,height:d,minH:r,minHeight:p,containerProps:L,listProps:K,inputProps:Dl,iconProps:ql,children:Q,...xl}=Xl(A);const{descendants:Wl,formControlProps:U,getPopoverProps:Vl,getContainerProps:Ml,getFieldProps:kl,allowCreate:J,isEmpty:X,inputValue:Y,computedChildren:zl,...Bl}=Hl({...xl,defaultValue:c,children:Q});s??(s=d),r??(r=p);const Tl={w:"100%",h:"fit-content",color:h,...u.container};return e(El,{value:Wl,children:e(Nl,{value:{...Bl,formControlProps:U,inputValue:Y,allowCreate:J,isEmpty:X,styles:u},children:e(Kl,{...Vl(),children:t(j.div,{className:Il("ui-autocomplete",i),__css:Tl,...Ml(L),children:[t(j.div,{className:"ui-autocomplete__inner",__css:{position:"relative",...u.inner},children:[e(Yl,{h:s,minH:r,inputProps:Dl,...kl({},a)}),e(jl,{...ql,...U})]}),X?e(Z,{...K,children:J&&Y?e($,{}):e(ee,{})}):t(Z,{...K,children:[J?e($,{}):e(ee,{}),Q??zl]})]})})})})}),Yl=yl(({className:n,h:a,minH:u,placeholder:A,inputProps:i,...c},h)=>{const{label:s,inputValue:d,styles:r}=Ll(),{getInputProps:p}=Jl(),L={paddingEnd:"2rem",h:a,minH:u,display:"flex",alignItems:"center",...r.field,cursor:"text"};return e(Ql,{children:e(j.div,{className:Il("ui-autocomplete__field",n),__css:L,...c,children:e(j.input,{className:"ui-autocomplete__field__input",display:"inline-block",w:"full",placeholder:A,...p({...i,value:d||s||""},h)})})})}),Bo={title:"Components / Forms / Autocomplete",component:o},f=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",children:[t(O,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(O,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),e(o,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),g=()=>t(m,{children:[e(o,{placeholder:"extra small size",size:"xs"}),e(o,{placeholder:"small size",size:"sm"}),e(o,{placeholder:"medium size",size:"md"}),e(o,{placeholder:"large size",size:"lg"})]}),C=()=>t(m,{children:[e(o,{variant:"outline",placeholder:"outline"}),e(o,{variant:"filled",placeholder:"filled"}),e(o,{variant:"flushed",placeholder:"flushed"}),e(o,{variant:"unstyled",placeholder:"unstyled"})]}),w=()=>t(o,{placeholder:"キャラクターを選択",defaultValue:"ベジータ",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),S=()=>t(o,{placeholder:"キャラクターを選択",emptyMessage:"キャラクターが存在しません",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),y=()=>e(o,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],allowCreate:!0,onCreate:(a,u)=>console.log("created item",a,"new items",u)}),I=()=>e(o,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],allowFree:!0,onChange:a=>console.log("new value:",a)}),F=()=>{const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return t(m,{children:[e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:"first"}),e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:"last"}),e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:"地球人"}),e(o,{placeholder:"キャラクターを選択",items:n,allowCreate:!0,insertPositionItem:["フリーザ軍","last"]})]})},P=()=>t(m,{children:[t(o,{placeholder:"default border color",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{focusBorderColor:"green.500",placeholder:"custom border color",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),D=()=>t(o,{placeholder:"キャラクターを選択",closeOnSelect:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),q=()=>t(o,{placeholder:"キャラクターを選択",closeOnBlur:!1,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),x=()=>t(o,{placeholder:"キャラクターを選択",placement:"right-start",maxW:"xs",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),W=()=>t(o,{placeholder:"キャラクターを選択",offset:[16,16],listProps:{maxW:"xs"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),V=()=>t(o,{placeholder:"キャラクターを選択",gutter:32,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),M=()=>t(o,{placeholder:"キャラクターを選択",duration:.4,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),k=()=>t(m,{children:[e(o,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(o,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(o,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(o,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{placeholder:"Autocomplete notifications"})})]}),z=()=>t(m,{children:[e(o,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(o,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(o,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(o,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{placeholder:"Autocomplete notifications"})})]}),B=()=>t(m,{children:[e(o,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(o,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(o,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(o,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{placeholder:"Autocomplete notifications"})})]}),T=()=>t(o,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),_=()=>t(o,{placeholder:"キャラクターを選択",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",isDisabled:!0,isFocusable:!0,children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),G=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",iconProps:{children:e(wl,{icon:_l})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),R=()=>t(m,{children:[t(o,{placeholder:"キャラクターを選択",optionProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(o,{placeholder:"キャラクターを選択",optionProps:{icon:e(wl,{icon:Gl,color:"green.500"})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),H=()=>{const[n,a]=Rl.useState("孫悟空");return t(o,{placeholder:"キャラクターを選択",value:n,onChange:a,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})},E=()=>{var h,s,d;const n=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:a,handleSubmit:u,watch:A,formState:{errors:i}}=Sl(),c=r=>console.log("submit:",r);return console.log("watch:",A()),t(Fl,{as:"form",onSubmit:u(c),children:[e(v,{isInvalid:!!i.autocomplete1,label:"Who is your favorite character?",errorMessage:(h=i.autocomplete1)==null?void 0:h.message,children:e(b,{name:"autocomplete1",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>t(o,{placeholder:"キャラクターを選択",...r,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(v,{isInvalid:!!i.autocomplete2,label:"Who is your favorite character?",errorMessage:(s=i.autocomplete2)==null?void 0:s.message,children:e(b,{name:"autocomplete2",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>t(o,{placeholder:"キャラクターを選択",...r,children:[t(O,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(O,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(v,{isInvalid:!!i.autocomplete3,label:"Who is your favorite character?",errorMessage:(d=i.autocomplete3)==null?void 0:d.message,children:e(b,{name:"autocomplete3",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>e(o,{placeholder:"キャラクターを選択",...r,items:n})})}),e(Pl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},N=()=>{var s,d,r;const n={autocomplete1:"孫悟空",autocomplete2:"フリーザ",autocomplete3:"リクーム"},a=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],{control:u,handleSubmit:A,watch:i,formState:{errors:c}}=Sl({defaultValues:n}),h=p=>console.log("submit:",p);return console.log("watch:",i()),t(Fl,{as:"form",onSubmit:A(h),children:[e(v,{isInvalid:!!c.autocomplete1,label:"Who is your favorite character?",errorMessage:(s=c.autocomplete1)==null?void 0:s.message,children:e(b,{name:"autocomplete1",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:p})=>t(o,{placeholder:"キャラクターを選択",...p,children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})})}),e(v,{isInvalid:!!c.autocomplete2,label:"Who is your favorite character?",errorMessage:(d=c.autocomplete2)==null?void 0:d.message,children:e(b,{name:"autocomplete2",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:p})=>t(o,{placeholder:"キャラクターを選択",...p,children:[t(O,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(O,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]})})}),e(v,{isInvalid:!!c.autocomplete3,label:"Who is your favorite character?",errorMessage:(r=c.autocomplete3)==null?void 0:r.message,children:e(b,{name:"autocomplete3",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:p})=>e(o,{placeholder:"キャラクターを選択",...p,items:a})})}),e(Pl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var le,oe,te;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
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
      <Autocomplete placeholder="キャラクターを選択">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択">
        <AutocompleteOptionGroup label="地球人">
          <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
          <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
          <AutocompleteOption value="クリリン">クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label="フリーザ軍">
          <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
          <AutocompleteOption value="ギニュー">ギニュー</AutocompleteOption>
          <AutocompleteOption value="リクーム">リクーム</AutocompleteOption>
          <AutocompleteOption value="バータ">バータ</AutocompleteOption>
          <AutocompleteOption value="ジース">ジース</AutocompleteOption>
          <AutocompleteOption value="グルド">グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,ae,re;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="extra small size" size="xs" />
      <Autocomplete placeholder="small size" size="sm" />
      <Autocomplete placeholder="medium size" size="md" />
      <Autocomplete placeholder="large size" size="lg" />
    </>;
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ue,ie,ce;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete variant="outline" placeholder="outline" />
      <Autocomplete variant="filled" placeholder="filled" />
      <Autocomplete variant="flushed" placeholder="flushed" />
      <Autocomplete variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(ce=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,se,me;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" defaultValue="ベジータ">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(me=(se=w.parameters)==null?void 0:se.docs)==null?void 0:me.source}}};var de,ve,he;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" emptyMessage="キャラクターが存在しません">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(he=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ae,be,Oe;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
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
  return <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate onCreate={(newItem, newItems) => console.log("created item", newItem, "new items", newItems)} />;
}`,...(Oe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};var fe,ge,Ce;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
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
  return <Autocomplete placeholder="キャラクターを選択" items={items} allowFree onChange={value => console.log("new value:", value)} />;
}`,...(Ce=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var we,Se,ye;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const items: AutocompleteItem[] = [{
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
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="first" />
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="last" />
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem="地球人" />
      <Autocomplete placeholder="キャラクターを選択" items={items} allowCreate insertPositionItem={["フリーザ軍", "last"]} />
    </>;
}`,...(ye=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Ie,Fe,Pe;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="default border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete focusBorderColor="green.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete isInvalid errorBorderColor="orange.500" placeholder="custom border color">
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(Pe=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var De,qe,xe;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" closeOnSelect={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(xe=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:xe.source}}};var We,Ve,Me;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" closeOnBlur={false}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Me=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var ke,ze,Be;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" placement="right-start" maxW="xs">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Be=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Te,_e,Ge;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" offset={[16, 16]} listProps={{
    maxW: "xs"
  }}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ge=(_e=W.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Re,He,Ee;V.parameters={...V.parameters,docs:{...(Re=V.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" gutter={32}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Ee=(He=V.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Ne,je,Le;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択" duration={0.4}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(Le=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Je,Ke,Qe;k.parameters={...k.parameters,docs:{...(Je=k.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isDisabled variant="outline" placeholder="outline" />
      <Autocomplete isDisabled variant="filled" placeholder="filled" />
      <Autocomplete isDisabled variant="flushed" placeholder="flushed" />
      <Autocomplete isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Qe=(Ke=k.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isReadOnly variant="outline" placeholder="outline" />
      <Autocomplete isReadOnly variant="filled" placeholder="filled" />
      <Autocomplete isReadOnly variant="flushed" placeholder="flushed" />
      <Autocomplete isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(Ye=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,el;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete isInvalid variant="outline" placeholder="outline" />
      <Autocomplete isInvalid variant="filled" placeholder="filled" />
      <Autocomplete isInvalid variant="flushed" placeholder="flushed" />
      <Autocomplete isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Autocomplete placeholder="Autocomplete notifications" />
      </FormControl>
    </>;
}`,...(el=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:el.source}}};var ll,ol,tl;T.parameters={...T.parameters,docs:{...(ll=T.parameters)==null?void 0:ll.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(tl=(ol=T.parameters)==null?void 0:ol.docs)==null?void 0:tl.source}}};var nl,al,rl;_.parameters={..._.parameters,docs:{...(nl=_.parameters)==null?void 0:nl.docs,source:{originalSource:`() => {
  return <Autocomplete placeholder="キャラクターを選択">
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ" isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(rl=(al=_.parameters)==null?void 0:al.docs)==null?void 0:rl.source}}};var ul,il,cl;G.parameters={...G.parameters,docs:{...(ul=G.parameters)==null?void 0:ul.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(cl=(il=G.parameters)==null?void 0:il.docs)==null?void 0:cl.source}}};var pl,sl,ml;R.parameters={...R.parameters,docs:{...(pl=R.parameters)==null?void 0:pl.docs,source:{originalSource:`() => {
  return <>
      <Autocomplete placeholder="キャラクターを選択" optionProps={{
      color: "primary"
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder="キャラクターを選択" optionProps={{
      icon: <Icon icon={faCheck} color="green.500" />
    }}>
        <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
        <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
        <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
      </Autocomplete>
    </>;
}`,...(ml=(sl=R.parameters)==null?void 0:sl.docs)==null?void 0:ml.source}}};var dl,vl,hl;H.parameters={...H.parameters,docs:{...(dl=H.parameters)==null?void 0:dl.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<string>("孫悟空");
  return <Autocomplete placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
      <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
      <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
    </Autocomplete>;
}`,...(hl=(vl=H.parameters)==null?void 0:vl.docs)==null?void 0:hl.source}}};var Al,bl,Ol;E.parameters={...E.parameters,docs:{...(Al=E.parameters)==null?void 0:Al.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
  };
  const items: AutocompleteItem[] = [{
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
      <FormControl isInvalid={!!errors.autocomplete1} label="Who is your favorite character?" errorMessage={errors.autocomplete1?.message}>
        <Controller name="autocomplete1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ol=(bl=E.parameters)==null?void 0:bl.docs)==null?void 0:Ol.source}}};var fl,gl,Cl;N.parameters={...N.parameters,docs:{...(fl=N.parameters)==null?void 0:fl.docs,source:{originalSource:`() => {
  type Data = {
    autocomplete1: string;
    autocomplete2: string;
    autocomplete3: string;
  };
  const defaultValues: Data = {
    autocomplete1: "孫悟空",
    autocomplete2: "フリーザ",
    autocomplete3: "リクーム"
  };
  const items: AutocompleteItem[] = [{
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
      <FormControl isInvalid={!!errors.autocomplete1} label="Who is your favorite character?" errorMessage={errors.autocomplete1?.message}>
        <Controller name="autocomplete1" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
              <AutocompleteOption value="ベジータ">ベジータ</AutocompleteOption>
              <AutocompleteOption value="フリーザ">フリーザ</AutocompleteOption>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete2} label="Who is your favorite character?" errorMessage={errors.autocomplete2?.message}>
        <Controller name="autocomplete2" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field}>
              <AutocompleteOptionGroup label="地球人">
                <AutocompleteOption value="孫悟空">孫悟空</AutocompleteOption>
                <AutocompleteOption value="孫悟飯">孫悟飯</AutocompleteOption>
                <AutocompleteOption value="クリリン">
                  クリリン
                </AutocompleteOption>
              </AutocompleteOptionGroup>

              <AutocompleteOptionGroup label="フリーザ軍">
                <AutocompleteOption value="フリーザ">
                  フリーザ
                </AutocompleteOption>
                <AutocompleteOption value="ギニュー">
                  ギニュー
                </AutocompleteOption>
                <AutocompleteOption value="リクーム">
                  リクーム
                </AutocompleteOption>
                <AutocompleteOption value="バータ">バータ</AutocompleteOption>
                <AutocompleteOption value="ジース">ジース</AutocompleteOption>
                <AutocompleteOption value="グルド">グルド</AutocompleteOption>
              </AutocompleteOptionGroup>
            </Autocomplete>} />
      </FormControl>

      <FormControl isInvalid={!!errors.autocomplete3} label="Who is your favorite character?" errorMessage={errors.autocomplete3?.message}>
        <Controller name="autocomplete3" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <Autocomplete placeholder="キャラクターを選択" {...field} items={items} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Cl=(gl=N.parameters)==null?void 0:gl.docs)==null?void 0:Cl.source}}};const To=["basic","withSize","withVariant","withDefaultValue","withEmptyMessage","withAllowCreate","withAllowFree","withInsertPositionItem","withBorderColor","disabledCloseOnSelect","disabledCloseOnBlur","withPlacement","withOffset","withGutter","withDuration","isDisabled","isReadonly","isInvalid","isOptionDisabled","isOptionFocusable","customIcon","customOption","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{To as __namedExportsOrder,f as basic,H as customControl,G as customIcon,R as customOption,Bo as default,q as disabledCloseOnBlur,D as disabledCloseOnSelect,k as isDisabled,B as isInvalid,T as isOptionDisabled,_ as isOptionFocusable,z as isReadonly,E as reactHookForm,N as reactHookFormWithDefaultValue,y as withAllowCreate,I as withAllowFree,P as withBorderColor,w as withDefaultValue,M as withDuration,S as withEmptyMessage,V as withGutter,F as withInsertPositionItem,W as withOffset,x as withPlacement,g as withSize,C as withVariant};
//# sourceMappingURL=autocomplete.stories-b20345dc.js.map
