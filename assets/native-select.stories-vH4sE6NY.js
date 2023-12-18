import{j as e,a as t,F as s}from"./jsx-runtime-TtYKBvr-.js";import{I as We,m as qe}from"./fontawesome-icon-XmXrmOUL.js";import{r as fe}from"./index-IybTgENJ.js";import{u as Ce}from"./index.esm-PVkfQNar.js";import{u as He,f as Me,F as h}from"./form-control-XK8tZY5Y.js";import{c as Te,O as je,Z as Ge,u as p,a as Ae,p as Ye,R as Ze,_ as Je}from"./factory-LHs-Bkmb.js";import{c as Ke}from"./icon-lGxzm-PJ.js";import{f as x}from"./forward-ref-6T0UNPU-.js";import{u as Le}from"./use-component-style-eqg6O7Tm.js";import{o as Qe}from"./theme-provider-AD5gKQ6i.js";import{V as Ee}from"./stack-eN2E0mK0.js";import{B as Oe}from"./button-RN1MSmjb.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-S2htefC9.js";import"./use-ripple-SlL8kNnw.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-HWUA2jNq.js";import"./loading-t4SoIc4G.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";const[Ue,Xe]=Te({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),a=x((i,r)=>{const[u,d]=Le("NativeSelect",i);let{className:n,children:o,placeholderInOptions:c=!0,color:v,h:De,height:ge,minH:ye,minHeight:Ie,items:P=[],placeholder:k,containerProps:we,iconProps:ze,...m}=Qe(d);m=He(m);const R=je(m,Me),[Ve,xe]=Ge(m,Je);let _=[];return!o&&P.length&&(_=P.map((N,W)=>{if("value"in N){const{label:I,value:w,...z}=N;return e(l,{value:w,...z,children:I},W)}else if("items"in N){const{label:I,items:w=[],...z}=N;return e(V,{label:I,...z,children:w.map(({label:Pe,value:ke,...Re},_e)=>e(l,{value:ke,...Re,children:Pe},_e))},W)}}).filter(Boolean)),e(Ue,{value:u,children:t(p.div,{className:"ui-select",__css:{position:"relative",w:"100%",h:"fit-content",color:v,...u.container},...Ve,...we,...R,children:[t(p.select,{ref:r,className:Ae("ui-select__field",n),__css:{paddingEnd:"2rem",h:De??ge,minH:ye??Ie,...u.field},...xe,children:[k?e(l,{value:"",hidden:!c,children:k}):null,o??_]}),e($e,{...ze,...R})]})})}),$e=({className:i,children:r,...u})=>{const n={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...Xe().icon},c=Ye(r).map(v=>fe.cloneElement(v,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e(p.div,{className:Ae("ui-select__icon",i),__css:n,...u,children:Ze(r)?c:e(Ke,{})})},V=x((i,r)=>e(p.optgroup,{ref:r,...i})),l=x((i,r)=>e(p.option,{ref:r,...i})),Aa={title:"Components / Forms / NativeSelect",component:a},S=()=>t(s,{children:[t(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[t(V,{label:"地球人",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"孫悟飯",children:"孫悟飯"}),e(l,{value:"クリリン",children:"クリリン"})]}),t(V,{label:"フリーザ軍",children:[e(l,{value:"フリーザ",children:"フリーザ"}),e(l,{value:"ギニュー",children:"ギニュー"}),e(l,{value:"リクーム",children:"リクーム"}),e(l,{value:"バータ",children:"バータ"}),e(l,{value:"ジース",children:"ジース"}),e(l,{value:"グルド",children:"グルド"})]})]}),e(a,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}],"aria-label":"Native Select"})]}),F=()=>t(s,{children:[e(a,{placeholder:"extra small size",size:"xs","aria-label":"Native Select"}),e(a,{placeholder:"small size",size:"sm","aria-label":"Native Select"}),e(a,{placeholder:"medium size",size:"md","aria-label":"Native Select"}),e(a,{placeholder:"large size",size:"lg","aria-label":"Native Select"})]}),b=()=>t(s,{children:[e(a,{variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e(a,{variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e(a,{variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e(a,{variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"})]}),B=()=>t(s,{children:[e(a,{placeholder:"default border color","aria-label":"Native Select"}),e(a,{focusBorderColor:"green.500",placeholder:"custom border color","aria-label":"Native Select"}),e(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color","aria-label":"Native Select"})]}),f=()=>t(a,{placeholder:"キャラクターを選択",placeholderInOptions:!1,"aria-label":"Native Select",children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),C=()=>t(s,{children:[e(a,{isDisabled:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e(a,{isDisabled:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e(a,{isDisabled:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e(a,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e(h,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(a,{placeholder:"Select notifications"})})]}),A=()=>t(s,{children:[e(a,{isReadOnly:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e(a,{isReadOnly:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e(a,{isReadOnly:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e(a,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e(h,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(a,{placeholder:"Select notifications"})})]}),E=()=>t(s,{children:[e(a,{isInvalid:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e(a,{isInvalid:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e(a,{isInvalid:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e(a,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e(h,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(a,{placeholder:"Select notifications"})})]}),O=()=>t(s,{children:[t(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{color:"primary"},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]}),t(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{children:e(We,{icon:qe})},children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})]}),D=()=>{const[i,r]=fe.useState("孫悟空");return t(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",value:i,onChange:u=>r(u.target.value),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})},g=()=>{var o;const{register:i,handleSubmit:r,watch:u,formState:{errors:d}}=Ce(),n=c=>console.log("submit:",c);return console.log("watch:",u()),t(Ee,{as:"form",onSubmit:r(n),children:[e(h,{isInvalid:!!d.select,label:"Who is your favorite character?",errorMessage:(o=d.select)==null?void 0:o.message,children:t(a,{placeholder:"キャラクターを選択",...i("select",{required:{value:!0,message:"This is required."}}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})}),e(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},y=()=>{var c;const i={select:"孫悟空"},{register:r,handleSubmit:u,watch:d,formState:{errors:n}}=Ce({defaultValues:i}),o=v=>console.log("submit:",v);return console.log("watch:",d()),t(Ee,{as:"form",onSubmit:u(o),children:[e(h,{isInvalid:!!n.select,label:"Who is your favorite character?",errorMessage:(c=n.select)==null?void 0:c.message,children:t(a,{placeholder:"キャラクターを選択",...r("select",{required:{value:!0,message:"This is required."}}),children:[e(l,{value:"孫悟空",children:"孫悟空"}),e(l,{value:"ベジータ",children:"ベジータ"}),e(l,{value:"フリーザ",children:"フリーザ"})]})}),e(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var q,H,M;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
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

      <NativeSelect placeholder="キャラクターを選択" items={items} aria-label="Native Select" />
    </>;
}`,...(M=(H=S.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var T,j,G;F.parameters={...F.parameters,docs:{...(T=F.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="extra small size" size="xs" aria-label="Native Select" />
      <NativeSelect placeholder="small size" size="sm" aria-label="Native Select" />
      <NativeSelect placeholder="medium size" size="md" aria-label="Native Select" />
      <NativeSelect placeholder="large size" size="lg" aria-label="Native Select" />
    </>;
}`,...(G=(j=F.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var Y,Z,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect variant="unstyled" placeholder="unstyled" aria-label="Native Select" />
    </>;
}`,...(J=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,L,Q;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="default border color" aria-label="Native Select" />
      <NativeSelect focusBorderColor="green.500" placeholder="custom border color" aria-label="Native Select" />
      <NativeSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" aria-label="Native Select" />
    </>;
}`,...(Q=(L=B.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,$;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder="キャラクターを選択" placeholderInOptions={false} aria-label="Native Select">
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,ae,le;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isDisabled variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isDisabled variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isDisabled variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(le=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,ie,re;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(re=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ue,ne,oe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isInvalid variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isInvalid variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isInvalid variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(oe=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,se,de;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" iconProps={{
      color: "primary"
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" iconProps={{
      children: <Icon icon={faCaretDown} />
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>;
}`,...(de=(se=O.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ve,pe,he;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(he=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,Ne,Se;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(Se=(Ne=g.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var Fe,be,Be;y.parameters={...y.parameters,docs:{...(Fe=y.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Be=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};const Ea=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Ea as __namedExportsOrder,S as basic,D as customControl,O as customIcon,Aa as default,f as disabledPlaceholderInOptions,C as isDisabled,E as isInvalid,A as isReadonly,g as reactHookForm,y as reactHookFormWithDefaultValue,B as withBorderColor,F as withSize,b as withVariant};
