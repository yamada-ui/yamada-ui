import{j as e,a,F as d}from"./jsx-runtime-3bfad254.js";import{I as He,b as Me}from"./fontawesome-icon-a3947b95.js";import{r as ge}from"./index-8ee6c85d.js";import{u as ye}from"./index.esm-b68ff52f.js";import{u as Te,f as je,F as h}from"./form-control-7ab17103.js";import{k as Ee,D as Ge,Z as Ye,d as p,e as Ce,p as Ze,M as Ae,_ as Je}from"./factory-11559d5d.js";import{c as Ke}from"./icon-2f1d814a.js";import{f as B}from"./forward-ref-cf7188bd.js";import{a as Le}from"./use-component-style-57629fd2.js";import{o as Qe}from"./theme-provider-d246dc71.js";import{V as Ie}from"./stack-e91b5678.js";import{B as we}from"./button-b56286bb.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-028132fa.js";import"./loading-7a918908.js";import"./index-11bf09da.js";import"./index-5e9263a1.js";const[Ue,Xe]=Ee({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),l=B((r,n)=>{const[i,u]=Le("NativeSelect",r);let{className:o,children:s,placeholderInOptions:c=!0,color:v,h:De,height:Fe,minH:ze,minHeight:Ve,items:R=[],placeholder:_,containerProps:ke,iconProps:xe,...m}=Qe(u);m=Te(m);const W=Ge(m,je),[Pe,Be]=Ye(m,Je);let q=[];return!s&&R.length&&(q=R.map((N,H)=>{if("value"in N){const{label:V,value:k,...x}=N;return e(t,{value:k,...x,children:V},H)}else if("items"in N){const{label:V,items:k=[],...x}=N;return e(P,{label:V,...x,children:k.map(({label:Re,value:_e,...We},qe)=>e(t,{value:_e,...We,children:Re},qe))},H)}}).filter(Boolean)),e(Ue,{value:i,children:a(p.div,{className:"ui-select",__css:{position:"relative",w:"100%",h:"fit-content",color:v,...i.container},...Pe,...ke,...W,children:[a(p.select,{ref:n,className:Ce("ui-select__field",o),__css:{paddingEnd:"2rem",h:De??Fe,minH:ze??Ve,...i.field},...Be,children:[_?e(t,{value:"",hidden:!c,children:_}):null,s??q]}),e($e,{...xe,...W})]})})}),$e=({className:r,children:n,...i})=>{const o={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...Xe().icon},c=Ze(n).map(v=>ge.cloneElement(v,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e(p.div,{className:Ce("ui-select__icon",r),__css:o,...i,children:Ae(n)?c:e(Ke,{})})},P=B((r,n)=>e(p.optgroup,{ref:n,...r})),t=B((r,n)=>e(p.option,{ref:n,...r})),bl={title:"Components / Forms / NativeSelect",component:l},S=()=>a(d,{children:[a(l,{placeholder:"キャラクターを選択",children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]}),a(l,{placeholder:"キャラクターを選択",children:[a(P,{label:"地球人",children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"孫悟飯",children:"孫悟飯"}),e(t,{value:"クリリン",children:"クリリン"})]}),a(P,{label:"フリーザ軍",children:[e(t,{value:"フリーザ",children:"フリーザ"}),e(t,{value:"ギニュー",children:"ギニュー"}),e(t,{value:"リクーム",children:"リクーム"}),e(t,{value:"バータ",children:"バータ"}),e(t,{value:"ジース",children:"ジース"}),e(t,{value:"グルド",children:"グルド"})]})]}),e(l,{placeholder:"キャラクターを選択",items:[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}]})]}),f=()=>a(d,{children:[e(l,{placeholder:"extra small size",size:"xs"}),e(l,{placeholder:"small size",size:"sm"}),e(l,{placeholder:"medium size",size:"md"}),e(l,{placeholder:"large size",size:"lg"})]}),b=()=>a(d,{children:[e(l,{variant:"outline",placeholder:"outline"}),e(l,{variant:"filled",placeholder:"filled"}),e(l,{variant:"flushed",placeholder:"flushed"}),e(l,{variant:"unstyled",placeholder:"unstyled"})]}),O=()=>a(d,{children:[e(l,{placeholder:"default border color"}),e(l,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(l,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),g=()=>a(l,{placeholder:"キャラクターを選択",placeholderInOptions:!1,children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]}),y=()=>a(d,{children:[e(l,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(l,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(l,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),C=()=>a(d,{children:[e(l,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(l,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(l,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(l,{placeholder:"Select notifications"})})]}),I=()=>a(d,{children:[e(l,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(l,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(l,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(l,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(h,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(l,{placeholder:"Select notifications"})})]}),w=()=>a(d,{children:[a(l,{placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]}),a(l,{placeholder:"キャラクターを選択",iconProps:{children:e(He,{icon:Me})},children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})]}),D=()=>{const[r,n]=ge.useState("孫悟空");return a(l,{placeholder:"キャラクターを選択",value:r,onChange:i=>n(i.target.value),children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})},F=()=>{var s;const{register:r,handleSubmit:n,watch:i,formState:{errors:u}}=ye(),o=c=>console.log("submit:",c);return console.log("watch:",i()),a(Ie,{as:"form",onSubmit:n(o),children:[e(h,{isInvalid:!!u.select,label:"Who is your favorite character?",errorMessage:(s=u.select)==null?void 0:s.message,children:a(l,{placeholder:"キャラクターを選択",...r("select",{required:{value:!0,message:"This is required."}}),children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})}),e(we,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},z=()=>{var c;const r={select:"孫悟空"},{register:n,handleSubmit:i,watch:u,formState:{errors:o}}=ye({defaultValues:r}),s=v=>console.log("submit:",v);return console.log("watch:",u()),a(Ie,{as:"form",onSubmit:i(s),children:[e(h,{isInvalid:!!o.select,label:"Who is your favorite character?",errorMessage:(c=o.select)==null?void 0:c.message,children:a(l,{placeholder:"キャラクターを選択",...n("select",{required:{value:!0,message:"This is required."}}),children:[e(t,{value:"孫悟空",children:"孫悟空"}),e(t,{value:"ベジータ",children:"ベジータ"}),e(t,{value:"フリーザ",children:"フリーザ"})]})}),e(we,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var M,T,j;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(j=(T=S.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var E,G,Y;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="extra small size" size="xs" />
      <NativeSelect placeholder="small size" size="sm" />
      <NativeSelect placeholder="medium size" size="md" />
      <NativeSelect placeholder="large size" size="lg" />
    </>;
}`,...(Y=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var Z,A,J;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" placeholder="outline" />
      <NativeSelect variant="filled" placeholder="filled" />
      <NativeSelect variant="flushed" placeholder="flushed" />
      <NativeSelect variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(J=(A=b.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,L,Q;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="default border color" />
      <NativeSelect focusBorderColor="green.500" placeholder="custom border color" />
      <NativeSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Q=(L=O.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder="キャラクターを選択" placeholderInOptions={false}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,le,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant="outline" placeholder="outline" />
      <NativeSelect isDisabled variant="filled" placeholder="filled" />
      <NativeSelect isDisabled variant="flushed" placeholder="flushed" />
      <NativeSelect isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(te=(le=y.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ae,re,ne;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant="outline" placeholder="outline" />
      <NativeSelect isReadOnly variant="filled" placeholder="filled" />
      <NativeSelect isReadOnly variant="flushed" placeholder="flushed" />
      <NativeSelect isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,oe,se;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant="outline" placeholder="outline" />
      <NativeSelect isInvalid variant="filled" placeholder="filled" />
      <NativeSelect isInvalid variant="flushed" placeholder="flushed" />
      <NativeSelect isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ce,de,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ue=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ve,pe,he;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect placeholder="キャラクターを選択" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(he=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,Ne,Se;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(Se=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var fe,be,Oe;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Oe=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};const Ol=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Ol as __namedExportsOrder,S as basic,D as customControl,w as customIcon,bl as default,g as disabledPlaceholderInOptions,y as isDisabled,I as isInvalid,C as isReadonly,F as reactHookForm,z as reactHookFormWithDefaultValue,O as withBorderColor,f as withSize,b as withVariant};
//# sourceMappingURL=native-select.stories-817a15b1.js.map
