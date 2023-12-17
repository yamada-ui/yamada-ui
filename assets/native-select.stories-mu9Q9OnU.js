import{j as e,a,F as c}from"./jsx-runtime-TtYKBvr-.js";import{I as We,m as qe}from"./fontawesome-icon-ZfuIL68e.js";import{r as Ce}from"./index-IybTgENJ.js";import{u as Ae}from"./index.esm-PVkfQNar.js";import{u as He,f as Me,F as h}from"./form-control-FwzeaZdC.js";import{c as Te,O as je,Z as Ge,u as p,a as be,p as Ye,R as Ze,_ as Je}from"./factory-yYnGGCem.js";import{c as Ke}from"./icon-h0N_MwdT.js";import{f as x}from"./forward-ref-6T0UNPU-.js";import{u as Le}from"./use-component-style-5-ma296Y.js";import{o as Qe}from"./theme-provider-Wsw433nP.js";import{V as Ee}from"./stack-XX7xMkh4.js";import{B as Oe}from"./button-vw3_AT4f.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-dINoAjpC.js";import"./use-ripple-oUvMmrsO.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-ONtTX0Ck.js";import"./loading-JdMW4dxy.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";const[Ue,Xe]=Te({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),l=x((u,r)=>{const[n,d]=Le("NativeSelect",u);let{className:i,children:o,placeholderInOptions:s=!0,color:v,h:De,height:ge,minH:ye,minHeight:Ie,items:P=[],placeholder:k,containerProps:we,iconProps:ze,...m}=Qe(d);m=He(m);const R=je(m,Me),[Ve,xe]=Ge(m,Je);let _=[];return!o&&P.length&&(_=P.map((F,W)=>{if("value"in F){const{label:I,value:w,...z}=F;return e(t,{value:w,...z,children:I},W)}else if("items"in F){const{label:I,items:w=[],...z}=F;return e(V,{label:I,...z,children:w.map(({label:Pe,value:ke,...Re},_e)=>e(t,{value:ke,...Re,children:Pe},_e))},W)}}).filter(Boolean)),e(Ue,{value:n,children:a(p.div,{className:"ui-select",__css:{position:"relative",w:"100%",h:"fit-content",color:v,...n.container},...Ve,...we,...R,children:[a(p.select,{ref:r,className:be("ui-select__field",i),__css:{paddingEnd:"2rem",h:De??ge,minH:ye??Ie,...n.field},...xe,children:[k?e(t,{value:"",hidden:!s,children:k}):null,o??_]}),e($e,{...ze,...R})]})})}),$e=({className:u,children:r,...n})=>{const i={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...Xe().icon},s=Ye(r).map(v=>Ce.cloneElement(v,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e(p.div,{className:be("ui-select__icon",u),__css:i,...n,children:Ze(r)?s:e(Ke,{})})},V=x((u,r)=>e(p.optgroup,{ref:r,...u})),t=x((u,r)=>e(p.option,{ref:r,...u})),bl={title:"Components / Forms / NativeSelect",component:l},B=()=>a(c,{children:[a(l,{placeholder:"キャラクターを選択",children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]}),a(l,{placeholder:"キャラクターを選択",children:[a(V,{label:"地球人",children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"孫悟飯",children:"孫悟飯"}),e(t,{value:"クリリン",children:"クリリン"})]}),a(V,{label:"フリーザ軍",children:[e(t,{value:"フリーザ",children:"フリーザ"}),e(t,{value:"ギニュー",children:"ギニュー"}),e(t,{value:"リクーム",children:"リクーム"}),e(t,{value:"バータ",children:"バータ"}),e(t,{value:"ジース",children:"ジース"}),e(t,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),N=()=>a(c,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),S=()=>a(c,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),f=()=>a(c,{children:[e(l,{placeholder:"default border color"}),e(l,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),C=()=>a(l,{placeholder:"キャラクターを選択",placeholderInOptions:!1,children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]}),A=()=>a(c,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),b=()=>a(c,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),E=()=>a(c,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Select notifications"})})]}),O=()=>a(c,{children:[a(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]}),a(l,{placeholder:"キャラクターを選択",iconProps:{children:e(We,{icon:qe})},children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})]}),D=()=>{const[u,r]=Ce.useState("孫悟空");return a(l,{placeholder:"キャラクターを選択",value:u,onChange:n=>r(n.target.value),children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})},g=()=>{var o;const{register:u,handleSubmit:r,watch:n,formState:{errors:d}}=Ae(),i=s=>console.log("submit:",s);return console.log("watch:",n()),a(Ee,{as:"form",onSubmit:r(i),children:[e(h,{isInvalid:!!d.select,label:"Who is your favorite character?",errorMessage:(o=d.select)==null?void 0:o.message,children:a(l,{placeholder:"キャラクターを選択",...u("select",{required:{value:!0,message:"This is required."}}),children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})}),e(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},y=()=>{var s;const u={select:"孫悟空"},{register:r,handleSubmit:n,watch:d,formState:{errors:i}}=Ae({defaultValues:u}),o=v=>console.log("submit:",v);return console.log("watch:",d()),a(Ee,{as:"form",onSubmit:n(o),children:[e(h,{isInvalid:!!i.select,label:"Who is your favorite character?",errorMessage:(s=i.select)==null?void 0:s.message,children:a(l,{placeholder:"キャラクターを選択",...r("select",{required:{value:!0,message:"This is required."}}),children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})}),e(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var q,H,M;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const items: NativeSelectItem[] = [{
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
      <NativeSelect placeholder="キャラクターを選択">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択">
        <NativeOptionGroup label="地球人">
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="孫悟飯">孫悟飯</NativeOption>
          <NativeOption value="クリリン">クリリン</NativeOption>
        </NativeOptionGroup>

        <NativeOptionGroup label="フリーザ軍">
          <NativeOption value="フリーザ">フリーザ</NativeOption>
          <NativeOption value="ギニュー">ギニュー</NativeOption>
          <NativeOption value="リクーム">リクーム</NativeOption>
          <NativeOption value="バータ">バータ</NativeOption>
          <NativeOption value="ジース">ジース</NativeOption>
          <NativeOption value="グルド">グルド</NativeOption>
        </NativeOptionGroup>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" items={items} />
    </>;
}`,...(M=(H=B.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var T,j,G;N.parameters={...N.parameters,docs:{...(T=N.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="extra small size" size="xs" />
      <NativeSelect placeholder="small size" size="sm" />
      <NativeSelect placeholder="medium size" size="md" />
      <NativeSelect placeholder="large size" size="lg" />
    </>;
}`,...(G=(j=N.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var Y,Z,J;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" placeholder="outline" />
      <NativeSelect variant="filled" placeholder="filled" />
      <NativeSelect variant="flushed" placeholder="flushed" />
      <NativeSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(J=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,L,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="default border color" />
      <NativeSelect focusBorderColor="green.500" placeholder="custom border color" />
      <NativeSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,$;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder="キャラクターを選択" placeholderInOptions={false}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...($=(X=C.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,le,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant="outline" placeholder="outline" />
      <NativeSelect isDisabled variant="filled" placeholder="filled" />
      <NativeSelect isDisabled variant="flushed" placeholder="flushed" />
      <NativeSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(te=(le=A.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ae,ue,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant="outline" placeholder="outline" />
      <NativeSelect isReadOnly variant="filled" placeholder="filled" />
      <NativeSelect isReadOnly variant="flushed" placeholder="flushed" />
      <NativeSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(re=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:re.source}}};var ne,ie,oe;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant="outline" placeholder="outline" />
      <NativeSelect isInvalid variant="filled" placeholder="filled" />
      <NativeSelect isInvalid variant="flushed" placeholder="flushed" />
      <NativeSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(oe=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,ce,de;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>;
}`,...(de=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ve,pe,he;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect placeholder="キャラクターを選択" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(he=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,Fe,Be;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select} label="Who is your favorite character?" errorMessage={errors.select?.message}>
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          value: true,
          message: "This is required."
        }
      })}>
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Be=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Ne,Se,fe;y.parameters={...y.parameters,docs:{...(Ne=y.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
  };
  const defaultValues: Data = {
    select: "孫悟空"
  };
  const {
    register,
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
      <FormControl isInvalid={!!errors.select} label="Who is your favorite character?" errorMessage={errors.select?.message}>
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          value: true,
          message: "This is required."
        }
      })}>
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fe=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};const El=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{El as __namedExportsOrder,B as basic,D as customControl,O as customIcon,bl as default,C as disabledPlaceholderInOptions,A as isDisabled,E as isInvalid,b as isReadonly,g as reactHookForm,y as reactHookFormWithDefaultValue,f as withBorderColor,N as withSize,S as withVariant};
